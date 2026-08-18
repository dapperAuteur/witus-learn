import type { AuthoredCourse } from "./authored-course";

// Here Be Dragons, course 4 of 5: Wrong for Good Reasons.
//
// Plan: plans/58-here-be-dragons-series.md §4.4. Category: Culture & History. Grades 9-12.
// Connections: plans/future-courses/culture/01-connections-to-the-catalog.md §4.4.
//
// THIS IS THE EPISTEMOLOGY PAYLOAD OF THE SERIES. Thesis: people were usually reasoning well from
// what they had, and the interesting questions are what they had, who they would let speak, and
// what it took to change their minds, including ours.
//
// FACTUAL GROUND THAT MAY NOT SLIP:
//   * Educated Europeans knew the earth was round continuously from antiquity. The medieval
//     flat-earth story is a 19th-century construction (Irving 1828, then Draper 1874 and White
//     1896). Russell's Inventing the Flat Earth (1991) is the standard treatment.
//   * Columbus's real error was the CIRCUMFERENCE, plus an overestimate of Asia's eastward extent.
//     His critics were right that the ocean was too wide. A continent was in the way.
//   * Geocentrism was good science on the available evidence. The absence of detectable stellar
//     parallax was a real objection, unresolved observationally until Bessel in 1838.
//
// NO CONDESCENSION, EVER, INCLUDING TOWARD THE RELIGIOUS. The geocentrists reasoned well. Draper
// and White had real grievances. The point is never that anyone was stupid.
//
// LESSON 13 IS NON-NEGOTIABLE and must directly follow the Wegener pair. Wegener was right and
// dismissed, which is the favourite defence of every crank; the course is irresponsible without the
// antidote, and the antidote is the ASYMMETRY, not the rejection.
//
// §6 BOUNDARY: the science track's "how we know what's out there" owns the ASTRONOMY (parallax
// detail, phases of Venus, instruments, model predictions). This course owns the EPISTEMOLOGY and
// the MYTH-MAKING. Lesson 9 is deliberately thin on astronomy and says so in the prose. When the
// science course ships, wire the two as mutual recommended prerequisites.
//
// LESSON 17 IS LIVE GROUND. It teaches the MECHANISM ONLY: who holds curriculum authority, how a
// state adopts standards, how a board reviews materials, who may comment, with the process cited.
// It takes no side on any dispute and uses no live dispute as an example. If it ever drifts from
// mechanism into content, cut it rather than balance it.

export const WRONG_FOR_GOOD_REASONS_COURSE: AuthoredCourse = {
  title: "Wrong for Good Reasons",
  description:
    "Most of the famous stories about people being wrong in the past are themselves wrong. Educated Europeans never thought the world was flat, Columbus's critics had the better argument, and the geocentrists were reasoning carefully from real evidence. This course follows four beliefs that were reasonable and mistaken, one myth that was manufactured on purpose, and one fraud that lasted forty years because it fit, and it ends by turning the same question on you: what would change your mind?",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════════
    // Section 1 · What would change your mind
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "what-would-change-my-mind",
      title: "1 · The question this course is built on",
      section: "Section 1 · What would change your mind",
      body: `One question does more work than any other in this course, and you can start using it today:

**What would change my mind?**

It sounds soft. It is not. A real answer has a shape, and most answers do not have it.

## What a real answer looks like

A real answer names **a specific observation, in advance, that you have not yet made.**

"If a study of ten thousand people found no difference, I would drop this." That is an answer. Someone could go and do it. You have said in advance what would count against you, and you cannot take it back afterwards.

Compare three answers that look like answers and are not:

**"If the evidence changed."** This commits you to nothing. Any result at all can be absorbed after the fact by a belief that never said in advance what would count against it.

**"If someone I trust told me."** That describes who you defer to, not what is true.

**"Nothing."** At least this one is honest. It also tells you the belief is not resting on evidence, whatever it is resting on.

## Why "in advance" is the load-bearing part

Because after the fact, everything fits. A result that goes your way is a confirmation. A result that goes against you had a flawed method, or a small sample, or a hidden motive. Each of those objections might even be correct. The problem is that you generated them **after** you knew which way the result went, and you would not have generated them if it had gone the other way.

Naming the test first is the only way to stop yourself doing that, and it is hard, which is why almost nobody does it.

## Not a debating move

Used as a gotcha, this question is worthless. "Well, what would change YOUR mind?" delivered as a checkmate is a way of winning an argument, not a way of finding anything out.

Ask it of yourself first. Lesson 18 will make you write the answer down.

## What this course is actually about

Four beliefs that were wrong and reasonable. One myth that was built on purpose and is still being taught. One fraud that lasted forty-one years because it fit what people expected. And one honest look at how a field notices its own mistakes, and where it fails to.

The thesis, which is the thesis of this whole series:

> People were usually reasoning well from what they had. The interesting questions are what they had, who they would let speak, and what it took to change their minds, including ours.

## Two wrong conclusions, closed off now

**"They were stupid."** They were not. You are about to meet people who followed a measurement to a wrong conclusion, which is what you are supposed to do with a measurement. Almost every case in this course is a case of good procedure producing a wrong answer.

**"So nothing can be known."** This is the more tempting one, and it is worse, because it arrives dressed as humility. A list of corrected errors is a record of corrections. It is evidence that the corrections happen. Lesson 16 takes that apart properly, but it is worth closing the door on the first day: this is not a course in doubting everything. It is a course in knowing what your beliefs are resting on.

## The formal cousin

Philosophers have a version of this. Karl Popper argued that what distinguishes a scientific claim is that it forbids something: it says what will not be observed, and can therefore fail. Philosophers still argue about whether that works as a definition of science, and the argument is not settled.

The practical version survives the argument intact. A claim that forbids nothing is a claim you cannot learn from, whatever you decide to call it.

And one more thing worth knowing early, from Thomas Kuhn: the unit that changes its mind is usually not a person. It is a community, with journals, teaching posts, textbooks and funding, and it changes on a timescale measured in decades. Individuals convert far less often than the stories suggest.

:::reveal What must a real answer to "what would change my mind?" contain? ||| A specific observation, named in advance, that you have not yet made and could in principle make.

:::reveal Why is "if the evidence changed" not an acceptable answer? ||| Because it commits you to nothing. Any result can be absorbed afterwards by a belief that never said in advance what would count against it.

:::reveal Which two conclusions does the course close off on day one? ||| That people in the past were stupid, and that nothing can be known. The second is the more tempting error because it arrives dressed as humility.

## Sources
- Kuhn, T. S. (1962). *The structure of scientific revolutions*. University of Chicago Press.
- Popper, K. R. (1959). *The logic of scientific discovery*. Hutchinson. (Original work published 1934)`,
    },
    {
      slug: "nobody-thought-it-was-flat",
      title: "2 · Everybody knows the world was flat. Nobody thought that.",
      section: "Section 1 · What would change your mind",
      body: `Here is a fact almost every adult learned in school, and it is not true.

Educated Europeans knew the earth was a sphere, continuously, from antiquity through the entire Middle Ages and on to Columbus. There is no gap. There was no period of believing in a disc, and there was no rediscovery.

## The evidence, which is not obscure

**Aristotle**, writing around 350 BCE, gives arguments in *On the Heavens*: the earth throws a curved shadow on the moon during a lunar eclipse, always curved, at every eclipse; and traveling north or south changes which stars are visible, which only happens on a curved surface.

**Ptolemy's** astronomical work, the standard technical reference for well over a thousand years, treats the earth as a sphere and reproduces the arguments.

**Bede**, an English monk writing around 725, describes the earth as a globe, and says explicitly that it is not merely round like a shield but round like a ball.

**Sacrobosco's** *De sphaera mundi*, written around 1230, was the standard astronomy textbook in European universities for roughly four centuries. It opens by arguing that the earth is a sphere. This is not a specialist document. It is the thing students were taught from.

**Dante**, in the early 1300s, writes a poem whose entire architecture depends on a spherical earth with a center that things fall toward.

And there is the object monarchs held in coronation portraits: a sphere with a cross on it, the *globus cruciger*, meaning earthly rule. A flat-earth culture does not put a ball in the king's hand and call it the world.

## The exceptions, named honestly

There are two, and they are worth knowing because of how they get used.

**Lactantius**, writing in the early 300s, mocked the idea of the antipodes and the people who supposedly walked upside down there.

**Cosmas Indicopleustes**, writing in Greek around 550, argued for a flat world shaped like the tabernacle described in scripture.

Both were minority voices. Cosmas in particular had almost no readership in the Latin-reading West, and his work was not part of the teaching tradition at all. Jeffrey Burton Russell, who traced this whole business, makes the sharp observation: these two get quoted constantly precisely because they are close to the only two available. A pattern with two instances in a thousand years is not a pattern.

## What was genuinely argued about

The antipodes. Not the shape of the earth, but whether the far side was inhabited, and if so how anyone could ever have got there.

That is a serious question and it has nothing to do with geometry. Given what was known about crossing an unbroken ocean, and given a theological account of human descent from a single origin, the question of how people could have reached the far side was a real problem with no obvious answer. People disagreed about it for centuries, and they were not being silly.

Notice how easily that dispute could be misremembered as a dispute about shape. A real disagreement about **whether people live there** turns, in retelling, into a fake disagreement about **whether there is a there**.

## The method, because this is a method course

You cannot prove a negative about an entire civilisation. "Nobody thought that" is, strictly, unprovable.

What you can do is go to the documents that carried the teaching. If the standard university textbook opens by arguing for a sphere, and the standard technical reference assumes one, and the popular poem is built on one, then the burden has moved. It now sits on anyone claiming a widespread flat-earth belief to produce the texts.

That is what has been done, repeatedly, and the texts are not there.

## One last thing, and it matters

If you want to feel superior to someone, do not pick the medieval scholars. They worked out the shape of the earth from eclipse shadows and star positions, taught it in universities, and got it right. They deserved better than a story that was invented about them five hundred years later by people who had never read them.

Lesson 4 is about who invented it.

:::reveal What was the standard university astronomy textbook of the later Middle Ages, and what does it argue first? ||| Sacrobosco's De sphaera mundi, written around 1230. It opens by arguing that the earth is a sphere.

:::reveal Name the two writers usually produced as medieval flat-earthers, and say why they get quoted so often. ||| Lactantius and Cosmas Indicopleustes. They get quoted because they are close to the only two available, which is the opposite of what quoting them is meant to show.

:::reveal Which question about the far side of the world was genuinely disputed, and why was it a serious question? ||| Whether the antipodes were inhabited and how anyone could have reached them across an unbroken ocean. It is a question about people and travel, not about shape.

## Sources
- Aristotle. (1939). *On the heavens* (W. K. C. Guthrie, Trans.). Harvard University Press. (Original work composed c. 350 BCE)
- Gould, S. J. (1995). *Dinosaur in a haystack: Reflections in natural history*. Harmony Books.
- Russell, J. B. (1991). *Inventing the flat earth: Columbus and modern historians*. Praeger.
- Thorndike, L. (Ed. & Trans.). (1949). *The sphere of Sacrobosco and its commentators*. University of Chicago Press. (Original work composed c. 1230)`,
      recallContent: [
        {
          prompt: "State the question this course is built on, and say what a real answer to it must contain.",
          answer:
            "What would change my mind? A real answer names a specific observation, stated in advance, that you have not yet made.",
        },
        {
          prompt: "Which two conclusions did the opening lesson rule out, and which of the two is more tempting?",
          answer:
            "That people in the past were stupid, and that nothing can be known. The second is more tempting because it arrives dressed as humility.",
        },
      ],
    },
    {
      slug: "eratosthenes-measured-it",
      title: "3 · Eratosthenes measured it, and the number was good",
      section: "Section 1 · What would change your mind",
      body: `Around 240 BCE, the librarian at Alexandria measured the earth.

Eratosthenes of Cyrene knew two things. At Syene, far up the Nile, the sun at noon on the summer solstice stood directly overhead, casting no shadow down a vertical well. At Alexandria, on the same day at the same hour, a vertical rod did cast a shadow, at an angle of about one fiftieth of a full circle, roughly seven degrees.

If the earth is a sphere and the sun is far enough away that its rays arrive effectively parallel, then that angle is the angle between Alexandria and Syene as seen from the center of the earth. One fiftieth of the circle. So the distance between the two cities is one fiftieth of the way around.

The reported distance was about 5,000 stades. Multiply by fifty and you get 250,000 stades. He is reported to have used 252,000, probably because it divides neatly by sixty.

## How good was it, honestly

This is the part usually skipped, and it is the interesting part.

Nobody knows exactly how long his stade was. Several stades were in use in the ancient world and the sources do not say which he meant.

- On a short stade of about 157.5 metres, his figure comes out near 39,700 kilometres, which is within a couple of percent of the true polar circumference of about 40,000 kilometres.
- On the Attic stade of about 185 metres, it comes out near 46,600 kilometres, high by roughly a sixth.

Historians have argued about this for a long time and it is not settled. So the honest statement is: **his result was the right order of magnitude, obtained by measurement, and whether it was spectacular or merely good depends on a unit we cannot pin down.**

That statement is less exciting than "he got it right to within one percent." It is also the true one, and this course would rather you carried the true one.

## What the achievement actually was

Not the number. The **method**, which has four features worth naming because you will use all of them:

1. **Stated assumptions.** Spherical earth, parallel rays, Syene due south of Alexandria. Each one is wrong in some small degree (Syene is not exactly due south, and it is not exactly on the tropic), and each is stated clearly enough that a later reader can check what the error would do.
2. **A measurable quantity.** An angle you can read off a shadow.
3. **Arithmetic anyone can follow.**
4. **Repeatability.** A student with a metre stick, a friend a few hundred kilometres due north or south, and a shared clock can do this over a weekend. The result belongs to whoever repeats it, not to whoever announced it.

## The retelling problem, arriving early

Eratosthenes's own book is lost. We have the method almost entirely through Cleomedes, a teacher writing at least a couple of centuries later, who was using it as a classroom illustration.

That should make you slightly uneasy about the round numbers. Five thousand stades exactly. One fiftieth of a circle exactly. Those are the numbers of a worked example, not of a survey. It is very likely the story we have has been tidied for teaching.

Hold both things at once: the method is real, the achievement is real, and the version that reaches us has been through at least one pair of hands with a reason to make it neat. Lesson 6 is about exactly what happens to a story on that journey.

## The number that mattered more

Later, Posidonius produced a smaller circumference. Ptolemy adopted a small figure. That smaller number became the inherited authority, and it was still steering decisions in the fifteenth century.

Which is lesson 7. A wrong number, once it has an authority's name on it, can travel for well over a thousand years, and everybody who inherits it inherits the assumptions inside it without being told what they are.

:::reveal What did Eratosthenes measure directly, and what did he have to assume? ||| He measured the angle of a shadow at Alexandria at noon on the solstice. He assumed a spherical earth, sun rays arriving effectively parallel, and Syene lying due south.

:::reveal Why can nobody state exactly how accurate his figure was? ||| Because the length of the stade he used is not settled. On one reading he is within a couple of percent; on another he is high by roughly a sixth.

:::reveal Why should the roundness of his numbers make you slightly uneasy? ||| Because 5,000 stades and one fiftieth of a circle are the numbers of a worked classroom example. His own book is lost, and the method reaches us through a teacher retelling it much later.

## Sources
- Cleomedes. (2004). *Cleomedes' lectures on astronomy: A translation of The heavens* (A. C. Bowen & R. B. Todd, Trans.). University of California Press. (Original work composed c. 100-300 CE)
- Dutka, J. (1993). Eratosthenes' measurement of the Earth reconsidered. *Archive for History of Exact Sciences, 46*(1), 55-66.`,
      recallContent: [
        {
          prompt: "Name one piece of evidence ancient and medieval writers used to argue the earth is a sphere.",
          answer:
            "The curved shadow the earth throws on the moon at every lunar eclipse, or the fact that traveling north or south changes which stars are visible.",
        },
        {
          prompt: "Why does the standard medieval textbook settle the question of what was actually taught?",
          answer:
            "Because it is the document students learned from, and it opens by arguing the earth is a sphere. The burden then sits on anyone claiming a widespread flat-earth belief to produce texts.",
        },
      ],
    },
    {
      slug: "quiz-what-would-change-your-mind",
      title: "Section 1 quiz · What would change your mind",
      section: "Section 1 · What would change your mind",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: 'What must a real answer to "what would change my mind?" contain?',
            options: [
              "A specific observation, named before you make it",
              "A promise to reconsider if the evidence ever changes",
              "An admission that the belief might be mistaken somehow",
              "A source the other person already accepts as reliable",
            ],
            correctIndex: 0,
            explanation:
              "Naming the test in advance is the load-bearing part. After the fact, any result at all can be explained away.",
            sourceLessonSlug: "what-would-change-my-mind",
          },
          {
            prompt: 'Why does the course reject "if the evidence changed" as an answer?',
            options: [
              "It shifts the burden of proof onto the other person",
              "It commits you to nothing that could actually happen",
              "It confuses a scientific claim with a moral judgment",
              "It relies on evidence that has not been published yet",
            ],
            correctIndex: 1,
            explanation:
              "A belief that never says in advance what would count against it can absorb any result whatsoever.",
            sourceLessonSlug: "what-would-change-my-mind",
          },
          {
            prompt: "Which conclusion does the course explicitly warn you not to draw from a list of past errors?",
            options: [
              "That experts should be replaced by public votes",
              "That nothing can be known, so all claims are equal",
              "That older theories are usually better than newer ones",
              "That measurement is less reliable than direct observation",
            ],
            correctIndex: 1,
            explanation:
              "It arrives dressed as humility. A list of corrected errors is a record of corrections happening.",
            sourceLessonSlug: "what-would-change-my-mind",
          },
          {
            prompt: "What was the standard university astronomy textbook of the later Middle Ages?",
            options: [
              "Cosmas Indicopleustes' Christian Topography, from about 550",
              "Sacrobosco's De sphaera mundi, from about 1230",
              "Lactantius' Divine Institutes, from the early 300s",
              "Ptolemy's Geography, in its 1477 printed edition",
            ],
            correctIndex: 1,
            explanation:
              "It was taught in European universities for roughly four centuries, and it opens by arguing the earth is a sphere.",
            sourceLessonSlug: "nobody-thought-it-was-flat",
          },
          {
            prompt: "Which two writers are usually produced as evidence that medieval Europe believed in a flat earth?",
            options: [
              "Lactantius and Cosmas Indicopleustes",
              "Isidore of Seville and the Venerable Bede",
              "Aristotle and Claudius Ptolemy, both of Alexandria",
              "Sacrobosco and Dante Alighieri of Florence",
            ],
            correctIndex: 0,
            explanation:
              "They are quoted constantly because they are close to the only two available. Two instances in a thousand years is not a pattern.",
            sourceLessonSlug: "nobody-thought-it-was-flat",
          },
          {
            prompt: "Which question about the far side of the world was genuinely disputed?",
            options: [
              "Whether the antipodes were inhabited and reachable",
              "Whether the southern hemisphere held any land at all",
              "Whether the earth's surface curved in every direction",
              "Whether the ocean had a measurable bottom anywhere",
            ],
            correctIndex: 0,
            explanation:
              "A real dispute about whether people live there is easily misremembered as a fake dispute about whether there is a there.",
            sourceLessonSlug: "nobody-thought-it-was-flat",
          },
          {
            prompt: "What did Eratosthenes measure directly?",
            options: [
              "The angle of a shadow at noon on the solstice",
              "The distance to Syene, by counting days of travel",
              "The height of the sun above the sea at sunrise",
              "The length of a degree of longitude by water clock",
            ],
            correctIndex: 0,
            explanation:
              "The distance between the cities was a reported figure. The angle is the part he took himself.",
            sourceLessonSlug: "eratosthenes-measured-it",
          },
          {
            prompt: "Why can nobody state exactly how accurate Eratosthenes's figure was?",
            options: [
              "The length of the stade he used is not settled",
              "His own book survives only in a damaged copy",
              "He reported a range rather than a single number",
              "The distance from Alexandria to Syene cannot be established today",
            ],
            correctIndex: 0,
            explanation:
              "On a short stade he is within a couple of percent; on the Attic stade he is high by roughly a sixth. Historians still argue about it.",
            sourceLessonSlug: "eratosthenes-measured-it",
          },
          {
            prompt: "How does Eratosthenes's method reach us at all?",
            options: [
              "Through Cleomedes, a teacher retelling it much later",
              "Through Ptolemy, who copied it into his star catalog",
              "Through a surviving manuscript in his own hand at Alexandria",
              "Through an inscription recording the survey at Syene",
            ],
            correctIndex: 0,
            explanation:
              "His own book is lost, and the suspiciously round numbers look like a worked classroom example that has been tidied.",
            sourceLessonSlug: "eratosthenes-measured-it",
          },
          {
            prompt: "What travels along with a number you inherit from an authority?",
            options: [
              "Its assumptions, which usually go unstated",
              "Its margin of error, recorded alongside it",
              "The instrument that produced it, by convention",
              "A record of everyone who has checked it since",
            ],
            correctIndex: 0,
            explanation:
              "A small circumference figure adopted by Ptolemy was still steering decisions more than a thousand years later.",
            sourceLessonSlug: "eratosthenes-measured-it",
          },
          {
            prompt: 'How can a claim as broad as "nobody in medieval Europe thought the earth was flat" be checked?',
            options: [
              "Go to the texts students were actually taught from",
              "Count how many surviving maps show a curved horizon",
              "Find one writer of the period who says so explicitly",
              "Compare the period's population estimates with today's",
            ],
            correctIndex: 0,
            explanation:
              "You cannot prove a negative about a civilisation, but you can show what the teaching documents say, which moves the burden.",
            sourceLessonSlug: "nobody-thought-it-was-flat",
          },
          {
            prompt: 'How does the course say the question "what would change my mind?" should be used?',
            options: [
              "On yourself first, before anyone else",
              "As a closing move in a formal debate",
              "Only where a laboratory test is possible",
              "After the other side has conceded a point",
            ],
            correctIndex: 0,
            explanation:
              "Delivered as a checkmate it is a way of winning an argument rather than a way of finding anything out.",
            sourceLessonSlug: "what-would-change-my-mind",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 2 · Where the flat-earth story came from
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "irving-1828",
      title: "4 · Where the flat-earth story came from",
      section: "Section 2 · Where the flat-earth story came from",
      body: `In 1828, Washington Irving published a life of Christopher Columbus.

Irving was already one of the most famous writers in the English language, the author of Rip Van Winkle and the Sleepy Hollow story. He had spent time in Spain. He had access to a large collection of Columbus documents that Martin Fernandez de Navarrete had recently published. The book is full of real archival material, and it was enormously popular on both sides of the Atlantic.

Inside it is a scene.

## The scene

Columbus stands before an assembly of churchmen at Salamanca. They quote scripture at him. They tell him the earth is flat, that his plan is contrary to the faith, that a ship sailing west would fall off or be unable to climb back. He argues. They refuse him. Eventually, elsewhere, he is vindicated.

It reads exactly like history. It is not.

## What actually happened

Columbus's proposal was examined in the mid-1480s by a commission headed by Hernando de Talavera. Such an examination did take place, and it did reject him.

The objection was **distance**. The commission judged that the ocean between Europe and Asia was far wider than Columbus claimed, and that no ship could carry provisions across it.

Nobody argued about the shape of the earth, because there was nothing to argue about. Every person in the room had been educated on the same textbooks lesson 2 described. Lesson 7 is about how good the commission's objection actually was.

## Why this was so hard to catch

Irving said, in general terms in his preface, that he had allowed himself some latitude in filling out and coloring scenes. That is an honest note, and it is also nearly useless to a reader, because it does not say **which** scenes.

That is the mechanism worth taking away. A fabricated passage sitting inside a book of genuine documents is almost undetectable from the inside. Everything around it checks out. The reader has no reason to test this paragraph rather than the previous one, and the book has given them no way to tell the difference.

## Not one author but two

Jeffrey Burton Russell, who traced this whole business in detail, is careful to point out that Irving was not alone. In 1834, the French scholar Antoine-Jean Letronne published an influential essay arguing that the Church Fathers had held a flat earth. Letronne was a serious scholar, and he was working from a reading of the sources that later specialists rejected.

So: two respectable authors, in two languages, within six years, and neither of them a crank. That is how a story enters circulation with a good reputation attached.

## Why this version caught on

Because it has a shape that real history rarely has. A hero. An obstacle. Named antagonists. A vindication at sea.

Compare it with the true version: a committee reviewed a proposal, judged its distance estimate wrong, and declined to fund it. That is what actually happened, and it is what happens most of the time, and nobody has ever put it in a children's book.

## Applying the course's own question

What would change your mind about Irving being the source?

Something specific: a flat-earth objection appearing in the surviving records of the commission, or in a contemporary account of the examination, or in any of the early biographies written before 1828. That is a checkable, in-advance test, and historians have run it repeatedly.

The objection is not there.

:::reveal What was the real objection Columbus's examiners raised? ||| Distance. They judged the ocean far too wide to cross with the provisions a ship could carry, which has nothing to do with the shape of the earth.

:::reveal Why is a fabricated passage inside a well-documented book so hard to detect? ||| Because everything around it checks out. The reader has no reason to test that paragraph rather than the previous one, and the book offers no way to tell them apart.

:::reveal Besides Irving, who else helped launch the flat-earth story, and when? ||| Antoine-Jean Letronne, in an influential 1834 essay arguing that the Church Fathers had held a flat earth.

## Sources
- Irving, W. (1828). *A history of the life and voyages of Christopher Columbus*. John Murray.
- Letronne, A. J. (1834). Des opinions cosmographiques des Peres de l'Eglise. *Revue des Deux Mondes*.
- Russell, J. B. (1991). *Inventing the flat earth: Columbus and modern historians*. Praeger.`,
      recallContent: [
        {
          prompt: "Name one piece of evidence that the earth's sphericity was taught continuously in Europe.",
          answer:
            "Sacrobosco's De sphaera mundi was the standard university astronomy textbook for roughly four centuries and opens by arguing the earth is a sphere. Bede described it as a ball around 725, and Aristotle argued it from eclipse shadows.",
        },
        {
          prompt: "Why is the exact accuracy of Eratosthenes's measurement unknowable?",
          answer:
            "Because the length of the stade he used is not settled. On one reading his figure is within a couple of percent, on another it is high by roughly a sixth.",
        },
      ],
    },
    {
      slug: "draper-and-white",
      title: "5 · A myth built for a purpose",
      section: "Section 2 · Where the flat-earth story came from",
      body: `Irving supplied a scene. On its own, a scene is an anecdote. What turned it into something people believed about an entire civilisation was a **frame**, and the frame arrived later, in two books.

## The two books

**John William Draper, 1874.** *History of the Conflict between Religion and Science.* Draper was a chemist and physician of real standing. The book was published in a popular science series, sold heavily, went through many printings, and was translated into several languages.

**Andrew Dickson White, 1896.** *A History of the Warfare of Science with Theology in Christendom*, in two volumes. White was the first president of Cornell University.

Their shared thesis: religion and science are two armies, permanently at war, and science has been steadily winning.

## What each man was actually arguing about

This is where the course's own method has to be applied to the people who got it wrong, which means asking what they had and what they were up against rather than calling them liars.

**Draper** wrote in the immediate aftermath of the First Vatican Council of 1870 and the Syllabus of Errors of 1864. His target was specific and contemporary: the political and doctrinal claims being made by the Catholic Church of his own decade. He was not writing a detached history of the Middle Ages. He was writing a polemic about the 1870s, and he said so.

**White** had a concrete institutional grievance. Cornell was founded as a nonsectarian university, and it was attacked from pulpits for being godless. White wrote, by his own account, in defense of the institution he was building and of the principle that a university should be free of doctrinal control.

Neither man was a hack. Both had a real fight on their hands. Neither of those things makes their history correct.

## What went wrong

To make a war visible, you need battles. A frame of permanent conflict needs episodes that fit it, and it needs episodes a general reader can follow without technical knowledge.

The flat-earth story is the perfect battle. It is short, it is vivid, it needs no astronomy, it has clergy on one side and a navigator on the other, and it ends in vindication. So it was promoted from an anecdote in a popular biography to a load-bearing example in a history of ideas, and from there into encyclopedias, textbooks and classrooms for a century.

## Where the history stands now

Historians of science have spent decades working through the conflict thesis, and the general verdict is that it fails as an account of the record. The relationship was not two armies. Religious institutions funded universities, employed astronomers, ran observatories, and also, at times and in specific documented cases, constrained and punished inquiry. Sometimes in the same century. Sometimes in the same building.

Say the honest thing in both directions, because a course that flinches here is doing the same thing Draper did with the sign reversed:

- **It is not true that religious institutions never obstructed anything.** There are documented cases, with names and dates, and they matter.
- **It is not true that the record has the shape of a war.** A two-army picture cannot hold the evidence, and it survives mainly because it is easy to teach and easy to remember.

## The bridge worth carrying out of here

This is a marketing story with a hundred and fifty year runway.

Draper's book succeeded in a market. There were readers who wanted this argument, and a publisher who knew it, and a series designed to reach them. None of that makes the argument false, and it would be a cheap move to pretend it does.

What it does mean is this: **when a claim about the past is unusually well suited to one side of a live argument, that is a reason to go and look at the sources it rests on.** Not a reason to dismiss it. A reason to check it. That habit costs you an afternoon and it is the difference between believing something and knowing why.

:::reveal What shape did Draper and White give to the history of science and religion? ||| Two armies at permanent war, with science winning. Historians of science reject that shape as an account of what the record shows.

:::reveal What did White say he was defending when he wrote? ||| Cornell, founded as a nonsectarian university and attacked from pulpits for it. He had a concrete institutional grievance.

:::reveal What should you do when a claim about the past is unusually convenient for one side of a live argument? ||| Go and look at the sources it rests on. Convenience is a reason to check a claim, not a reason to dismiss it.

## Sources
- Draper, J. W. (1874). *History of the conflict between religion and science*. D. Appleton.
- Lindberg, D. C., & Numbers, R. L. (Eds.). (1986). *God and nature: Historical essays on the encounter between Christianity and science*. University of California Press.
- Numbers, R. L. (Ed.). (2009). *Galileo goes to jail and other myths about science and religion*. Harvard University Press.
- White, A. D. (1896). *A history of the warfare of science with theology in Christendom* (Vols. 1-2). D. Appleton.`,
      recallContent: [
        {
          prompt: "What did Washington Irving add to the Columbus story in 1828, and what was actually at issue?",
          answer:
            "He wrote a scene at Salamanca in which churchmen insist the earth is flat. The real commission objected to the distance across the ocean.",
        },
        {
          prompt: "Why did the invented version travel further than the true one?",
          answer:
            "It has a hero, named antagonists, an obstacle and a vindication. The true version is a committee declining to fund a proposal whose distance estimate it judged wrong.",
        },
      ],
    },
    {
      slug: "how-a-made-up-scene-survives",
      title: "6 · How a made-up scene survives two hundred years",
      section: "Section 2 · Where the flat-earth story came from",
      body: `This is a writing lesson, and its question is mechanical: what features let a false story outlive every correction?

The Salamanca scene has been corrected in print, repeatedly, by specialists, for over a century. It is still in circulation. Corrections are not what kills a story. Something else keeps it alive, and it is worth naming part by part.

## Five features that make a false story durable

1. **It is a scene, not a claim.** It has a room, people and dialogue. Human memory stores scenes far better than it stores propositions. Nobody can quote the commission's distance estimate; everybody can picture the hall.
2. **It is short and self-contained.** It needs no background. A reader can receive it in fifteen seconds and repeat it correctly.
3. **It has a moral shape.** Hero, obstacle, vindication. Stories with that shape get retold because they are satisfying to tell.
4. **It confirms a frame the reader already holds.** Once you believe in a general story of progress out of ignorance, this scene is not new information. It is an illustration, and illustrations are not examined.
5. **It circulates among sources that cite each other.** This is the technical one, and it is the next section.

## The source ladder

**Primary.** Produced by a participant, at the time. The records of the commission. Letters. A ship's log as it has been transmitted. Contemporary accounts by people who were there or spoke to people who were.

**Secondary.** A historian working from primary sources and citing them, so you can walk down.

**Tertiary.** An encyclopedia entry, a textbook paragraph, a documentary voiceover, a museum label, a blog post, a summary. Written from secondary sources, sometimes from other tertiary sources.

There is nothing wrong with a tertiary source. Most of what any of us knows arrives that way, including most of this course. The danger is specific and it has a shape.

## How the chain breaks

A tertiary source cites another tertiary source, which cites a third, which cites the first. The chain loops without ever touching a document.

You can detect this, and the detection is a physical activity rather than a judgment. **Try to walk down the ladder.** Each step should get you closer to something produced at the time. If two steps in a row keep you at the same level, stop and say so out loud: "the trail goes cold at a 1953 encyclopedia entry that gives no source." That sentence is a real research result. It is not a failure.

## A four-step procedure you can actually run

1. **Find the earliest version you can locate.** Not the best written one. The earliest.
2. **Ask whether that author was in a position to know.** Were they there? Did they speak to someone who was? Were they writing a hundred years later?
3. **Ask what document they say they are using.** If they name none, that is the finding.
4. **Go and see whether the document says it.** Digitised archives make this astonishingly easy compared with any previous generation of students.

## The one sentence that carries the whole discipline

Compare these two:

> Columbus faced clerics who insisted the earth was flat.

> Washington Irving wrote a scene, in his 1828 biography, in which clerics insist the earth is flat.

The second is checkable. It names an author, a date and a document, and it makes a claim a reader can go and test in an afternoon. The first floats.

**Put the source inside the sentence.** That is most of the craft.

## Hedges that hide

Three phrases to watch in your own writing, because all three delete the actor:

- "It is believed that..."
- "Some say..."
- "Legend has it..."

Believed by whom? Said by whom? Each of those is a person or a document with a date, and putting them back turns an atmosphere into a claim. A hedge that names its source is honest. A hedge that hides one is doing the opposite of what a hedge is for.

## And a note about textbooks

Frances FitzGerald showed something useful by lining up American history schoolbooks across the twentieth century: they are rewritten regularly, and what changes between editions is visible if you put them side by side.

That means a myth in a textbook is not a permanent fixture. It is **maintained**. Somebody, on a cycle, decided to leave it in, or nobody looked. Lesson 17 is about where that decision is made and how a member of the public gets into the room.

:::reveal Name the three rungs of the source ladder and say where the chain usually breaks. ||| Primary, secondary and tertiary. It breaks when a tertiary source cites another tertiary source, so the chain loops without ever touching a document produced at the time.

:::reveal Rewrite this to make it checkable: "Columbus faced clerics who insisted the earth was flat." ||| Washington Irving wrote a scene, in his 1828 biography, in which clerics insist the earth is flat. Naming the author, date and document is what makes it testable.

:::reveal What is wrong with "it is believed that" as a hedge? ||| It deletes the actor. Ask who believes it, put them back in the sentence, and an atmosphere becomes a claim someone can check.

## Sources
- FitzGerald, F. (1979). *America revised: History schoolbooks in the twentieth century*. Little, Brown.
- Russell, J. B. (1991). *Inventing the flat earth: Columbus and modern historians*. Praeger.`,
      recallContent: [
        {
          prompt: "What frame did Draper and White supply, and what was each of them arguing against?",
          answer:
            "Two armies at permanent war. Draper was writing against the political claims of the Catholic Church of the 1870s; White was defending Cornell, founded as a nonsectarian university and attacked from pulpits.",
        },
        {
          prompt: "Why does the course refuse to call Draper and White liars?",
          answer:
            "Because its own method requires asking what they had and what they were up against. They were serious people making an argument they believed, in a market that wanted it.",
        },
      ],
    },
    {
      slug: "columbus-was-wrong-about-the-size",
      title: "7 · Columbus was wrong, and his critics were right",
      section: "Section 2 · Where the flat-earth story came from",
      body: `Everyone in the argument agreed the earth was a sphere. What they disagreed about was **how big it is**, and **how far Asia reaches east**. Those two numbers decide whether the voyage is possible, and Columbus got both of them wrong in the same direction.

## The three errors, all inherited

**Asia's eastward extent.** Marinus of Tyre, whose work survives through Ptolemy, put the east-west span of Eurasia at roughly 225 degrees. Ptolemy himself used about 180. The true figure is somewhere near 130. Columbus took the largest estimate available, which places the east coast of Asia much closer to Europe going west.

**Japan's position.** Marco Polo placed Cipangu well east of the Asian mainland. Columbus added that on top, moving his destination closer still.

**The size of a degree.** He used a figure for the length of a degree derived from the ninth-century astronomer al-Farghani, and read the "mile" in it as the shorter Italian mile rather than the longer Arabic mile that was almost certainly meant. That single reading shrinks the whole earth by roughly a quarter.

Historians differ over the precise arithmetic, and Columbus's own statements are not perfectly consistent. Every reconstruction reaches the same conclusion: he expected the run from the Canaries to Japan to be a few thousand miles. The actual great-circle distance is on the order of ten thousand nautical miles. He was short by a factor of three or more.

## His critics were right

The commission judged the ocean too wide for a ship to cross with the provisions it could carry. On the evidence available, that judgment was correct. On the water, it would have been correct: no crew in 1492 could have survived an unbroken crossing of the true distance.

He survived because two continents were in the way, at approximately the distance he had expected Asia to be.

## What this does to a familiar moral

The story most people carry is: the establishment was wrong, the visionary was right, and the visionary sailed anyway.

What happened is: **the establishment was right, the outsider was wrong, and the outsider changed history because of a coincidence nobody in the argument knew about.**

Both halves are true and neither cancels the other. He did something nobody else had done, with real seamanship and real nerve. He also lost the technical argument on the merits, and if the geography had been what everyone in the room believed it was, he and his crews would have died at sea.

If you want a lesson about expertise from Columbus, the lesson is not that experts are obstacles. It is that being lucky and being right are different things, and that from the inside they feel identical.

## The bias worth taking away

Look at how the three errors line up. Largest available estimate of Asia's extent. Furthest available placement of Japan. Shortest available reading of the mile.

He was not careless, and he was not making things up. Every number he used came from a respectable authority, and for each one there was a menu of respectable options. He selected, from each menu, the option that made his voyage possible.

**That is the tell.** When every uncertainty in a case resolves in the direction the person wanted, you are watching selection, not weighing. It is nearly invisible from the inside, because each individual choice is defensible and has a citation attached.

You will do this. So will everyone reading this. The only defense is to notice the pattern rather than to audit each choice, because each choice will survive an audit.

## One thing this course will not skip

The voyages that followed had consequences for the people already living in the Americas that are the subject of other courses on this platform, treated there with the space and the sourcing they require. Nothing in this lesson is a celebration. It is an argument about numbers, and the numbers are the only part of it this course is qualified to teach.

:::reveal What were Columbus and his examiners actually arguing about? ||| The size of the earth and how far Asia extended east, never the shape of the earth. They judged the ocean too wide to cross, and on the evidence they were right.

:::reveal Where did Columbus's errors come from? ||| Inherited authorities. He took the largest estimate of Asia's extent, the furthest placement of Japan, and a reading of al-Farghani's degree that used the shorter mile.

:::reveal What is the tell that someone is selecting evidence rather than weighing it? ||| Every uncertainty resolves in the direction they already wanted. Each individual choice survives an audit, so the pattern is the only thing that shows it.

## Sources
- Morison, S. E. (1942). *Admiral of the ocean sea: A life of Christopher Columbus*. Little, Brown.
- Phillips, W. D., & Phillips, C. R. (1992). *The worlds of Christopher Columbus*. Cambridge University Press.
- Russell, J. B. (1991). *Inventing the flat earth: Columbus and modern historians*. Praeger.`,
      recallContent: [
        {
          prompt: "Name the three rungs of the source ladder and the step where chains usually break.",
          answer:
            "Primary, secondary, tertiary. The break is a tertiary source citing another tertiary source, so the chain never touches a document produced at the time.",
        },
        {
          prompt: "How do you turn a floating claim into a checkable one?",
          answer:
            "Put the source inside the sentence. Name the author, the date and the document, so a reader can go and test it.",
        },
      ],
    },
    {
      slug: "quiz-where-the-story-came-from",
      title: "Section 2 quiz · Where the flat-earth story came from",
      section: "Section 2 · Where the flat-earth story came from",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What did Washington Irving add to the Columbus story in 1828?",
            options: [
              "A scene at Salamanca in which clerics insist the earth is flat",
              "A corrected figure for the width of the Atlantic Ocean",
              "The first published transcript of the Talavera commission",
              "An argument that Columbus had reached Asia after all",
            ],
            correctIndex: 0,
            explanation:
              "It reads exactly like history because it sits inside a book full of genuine archival documents.",
            sourceLessonSlug: "irving-1828",
          },
          {
            prompt: "What was the actual objection of the commission that examined Columbus?",
            options: [
              "The ocean was too wide to cross with shipboard provisions",
              "The Portuguese crown already held the rights to that route",
              "His crews were unwilling to sail beyond the known islands",
              "His maps had been copied from a discredited Arab source",
            ],
            correctIndex: 0,
            explanation:
              "On the evidence available, that judgment was correct, and on the water it would have been correct.",
            sourceLessonSlug: "irving-1828",
          },
          {
            prompt: "Who else, besides Irving, helped launch the modern flat-earth story?",
            options: [
              "Antoine-Jean Letronne, in an essay published in 1834",
              "Martin Fernandez de Navarrete, in his document collection",
              "Samuel Eliot Morison, in his 1942 life of Columbus",
              "Hernando de Talavera, in his report to the crown",
            ],
            correctIndex: 0,
            explanation:
              "Two respectable authors in two languages within six years, neither of them a crank. That is how a story enters circulation with a good reputation.",
            sourceLessonSlug: "irving-1828",
          },
          {
            prompt: "Why is a fabricated passage inside a well-documented book so hard to catch?",
            options: [
              "Everything around it checks out, so nothing marks it for testing",
              "Publishers of the period were not required to list their sources",
              "The archival documents it sits beside are themselves unreliable",
              "Nineteenth-century printers routinely reset paragraphs by hand",
            ],
            correctIndex: 0,
            explanation:
              "Irving's preface admits some coloring in general terms, which is honest and nearly useless, because it never says which scenes.",
            sourceLessonSlug: "irving-1828",
          },
          {
            prompt: "What thesis did Draper in 1874 and White in 1896 share?",
            options: [
              "Religion and science are two armies at permanent war",
              "Medieval universities produced no original natural philosophy",
              "Scientific progress depends on state rather than church funding",
              "Ancient Greek learning was lost and never recovered in Europe",
            ],
            correctIndex: 0,
            explanation:
              "Historians of science reject that shape as an account of the record, which is mixed and often runs both ways in the same institution.",
            sourceLessonSlug: "draper-and-white",
          },
          {
            prompt: "What concrete grievance did Andrew Dickson White say he was writing in response to?",
            options: [
              "Attacks from pulpits on Cornell, founded as a nonsectarian university",
              "A refusal by American publishers to print translated German science",
              "The exclusion of chemists from the major learned societies of his day",
              "A state law requiring theology courses in every chartered college",
            ],
            correctIndex: 0,
            explanation:
              "A real fight, honestly reported by him. Having a real fight does not make the resulting history correct.",
            sourceLessonSlug: "draper-and-white",
          },
          {
            prompt: "Why did the flat-earth story make such a useful example for a history of conflict?",
            options: [
              "It is short, vivid, and requires no technical knowledge to follow",
              "It was the only episode for which archival records had survived",
              "It had been endorsed by the Catholic Church in its own accounts",
              "It was the earliest datable dispute between clergy and navigators",
            ],
            correctIndex: 0,
            explanation:
              "A frame of permanent war needs battles a general reader can follow, and this one has clergy on one side and a navigator on the other.",
            sourceLessonSlug: "draper-and-white",
          },
          {
            prompt: "What does the course say you should do with a claim about the past that suits one side of a live argument?",
            options: [
              "Go and look at the sources it rests on",
              "Discount it until a neutral party repeats it",
              "Treat it as false unless a primary source survives",
              "Weigh it against the motives of whoever published it",
            ],
            correctIndex: 0,
            explanation:
              "Convenience is a reason to check a claim, never a reason to dismiss it. Dismissing it would be the same move with the sign reversed.",
            sourceLessonSlug: "draper-and-white",
          },
          {
            prompt: "Where does a citation chain most often break?",
            options: [
              "A tertiary source citing another tertiary source",
              "A secondary source disagreeing with its own primary",
              "A primary document that survives only in translation",
              "A footnote that gives a page number but not an edition",
            ],
            correctIndex: 0,
            explanation:
              "The chain loops without ever touching a document produced at the time. Walking down the ladder is how you detect it.",
            sourceLessonSlug: "how-a-made-up-scene-survives",
          },
          {
            prompt: "According to the writing lesson, what does putting the source inside the sentence achieve?",
            options: [
              "It makes the claim testable by naming author, date and document",
              "It shortens the sentence by removing the need for a footnote",
              "It transfers responsibility for the claim to the cited author",
              "It signals to a reader that the writer has read the original",
            ],
            correctIndex: 0,
            explanation:
              "Compare a claim that floats with one a reader can go and check in an afternoon. That is most of the craft.",
            sourceLessonSlug: "how-a-made-up-scene-survives",
          },
          {
            prompt: "Which of Columbus's three errors shrank the earth itself?",
            options: [
              "Reading al-Farghani's degree with the shorter Italian mile",
              "Accepting Marco Polo's placement of Japan east of Asia",
              "Preferring Marinus of Tyre's 225 degrees for Eurasia's span",
              "Using Eratosthenes' figure rather than Ptolemy's smaller one",
            ],
            correctIndex: 0,
            explanation:
              "That single reading takes roughly a quarter off the size of the earth. The other two errors moved his destination closer instead.",
            sourceLessonSlug: "columbus-was-wrong-about-the-size",
          },
          {
            prompt: "What pattern in Columbus's choices does the course call the tell?",
            options: [
              "Every uncertainty resolved in the direction he wanted",
              "Every figure he used came from a single Arab authority",
              "Every estimate he published contradicted his earlier ones",
              "Every source he cited had been rejected by the Portuguese",
            ],
            correctIndex: 0,
            explanation:
              "Each individual choice was defensible and had a citation attached. Only the pattern shows that he was selecting rather than weighing.",
            sourceLessonSlug: "columbus-was-wrong-about-the-size",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 3 · Reasonably wrong
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "geocentrism-was-good-science",
      title: "8 · Geocentrism was good science",
      section: "Section 3 · Reasonably wrong",
      body: `Here is a claim this course is going to defend, and it is not a paradox or a provocation.

**On the evidence available before the seventeenth century, a stationary earth was the better-supported position.** Not a superstition. Not a concession to authority. The position the observations favored.

## What anybody could check

**You do not feel the earth move.** If it turns once a day, a point on the equator is traveling at over a thousand miles an hour, and you feel nothing. To answer that objection you need a physics in which uniform motion is not felt, and no such physics existed. Without it, "we would feel it" is not stubbornness. It is an observation with no available explanation.

**Things fall straight down.** Drop a stone from a tower and it lands at the base. On a turning earth, the tower moves while the stone falls, so it should land behind. Again, the answer requires a mechanics nobody had.

**And the strongest one: there is no detectable stellar parallax.**

## The parallax objection

If the earth swings around a large orbit, then over six months you view the sky from two points very far apart. The nearer stars should appear to shift against the further ones, the way a nearby lamppost shifts against a distant hill when you move your head.

Astronomers looked. They looked hard, for centuries, with the best instruments available. Nothing shifted.

The Copernican answer was that the stars must be so enormously far away that the shift is too small to see. That answer is correct. It is also, in 1600, a very large unevidenced commitment made specifically to rescue a theory from a failed prediction, which is exactly the move a well-trained skeptic is supposed to be suspicious of.

## Tycho Brahe's version, which is sharper still

Tycho Brahe was the finest observational astronomer of his age. He measured the apparent sizes of stars, which through the naked eye and early instruments appear as small discs rather than points.

He then did the arithmetic. If the stars are far enough away to hide parallax, then a disc of that apparent size means a star physically larger than the earth's entire orbit. That struck him as absurd, and he concluded, from his measurements, that the earth does not move.

His measurement was real. His arithmetic was right. His conclusion was wrong, because the apparent disc is an artifact of how light behaves in the eye and the instrument, and there was no way for anyone in 1600 to know that.

Read that again, because it is the center of this course: **he followed his measurement, and the measurement was the thing misleading him.** The people who turned out to be right had to set a measurement aside, and at the time they had no good reason for setting it aside.

## When the objection was actually answered

By direct observation, in 1838, when Friedrich Bessel measured the parallax of the star 61 Cygni. Two other astronomers reported parallaxes at about the same time.

Copernicus published in 1543. That is a gap of nearly three centuries during which the strongest empirical objection to a moving earth stood unanswered on its own terms.

And the argument was settled long before 1838. Something other than that objection did the work of changing minds, which is lesson 9.

## Said plainly, about the people

Some opponents of a moving earth were churchmen with theological commitments, and those commitments were real and mattered.

Many of the same people, and many of the others, were working astronomers with instruments and data, and the objections that carried weight in the technical debate were technical. Anyone who reduces this to faith against reason has cut out the part that would have taught you something, and has also flattered themselves at the expense of people who were doing careful work with what they had.

You are allowed to think they reached the wrong conclusion. This course insists you also notice that they reached it honestly, by procedure, from evidence.

## A note on scope

The astronomy proper, what each model predicted, the phases of Venus, the moons of Jupiter, how the instruments improved and what they resolved, belongs to a companion course in this catalog's science track, which goes into it at the depth it deserves. This lesson stays on the reasoning on purpose, and lesson 9 stays thin for the same reason.

:::reveal What is stellar parallax, and why did its absence count against a moving earth? ||| It is the shift nearer stars should show against further ones as the earth moves round its orbit. Nobody could detect any, so either the earth was still or the stars were unimaginably distant.

:::reveal What did Tycho Brahe measure, and what did he conclude? ||| The apparent discs of stars. If they were far enough away to hide parallax, those discs implied bodies larger than the earth's whole orbit, so he concluded the earth does not move.

:::reveal When was the parallax objection finally answered by observation, and why does the date matter? ||| In 1838, by Bessel's measurement of 61 Cygni, nearly three centuries after Copernicus published. The argument was settled long before that, so something else changed minds.

## Sources
- Bessel, F. W. (1838). On the parallax of 61 Cygni. *Monthly Notices of the Royal Astronomical Society, 4*(17), 152-161.
- Graney, C. M. (2015). *Setting aside all authority: Giovanni Battista Riccioli and the science against Copernicus in the age of Galileo*. University of Notre Dame Press.
- Kuhn, T. S. (1957). *The Copernican revolution: Planetary astronomy in the development of Western thought*. Harvard University Press.`,
      recallContent: [
        {
          prompt: "What were Columbus and his examiners actually arguing about, and who had the better of it?",
          answer:
            "The size of the earth and Asia's eastward extent. His examiners judged the ocean too wide to cross, and on the evidence they were right.",
        },
        {
          prompt: "Where did Columbus's numbers come from, and what pattern do his choices show?",
          answer:
            "All from respectable inherited authorities. Every choice he made among the available options ran in the direction that made his voyage look possible.",
        },
      ],
    },
    {
      slug: "what-moved-the-argument",
      title: "9 · What actually moved the argument",
      section: "Section 3 · Reasonably wrong",
      body: `If the strongest objection to a moving earth stood until 1838, and the argument was over well before that, then the objection is not what ended it.

So what does end a long argument? This lesson is about the general answer, and it stays deliberately light on the astronomy, because a companion course in this catalog's science track works through the observations and the instruments properly. What matters here is the **pattern**, which transfers to arguments that have nothing to do with planets.

## Four things, in rough order of weight

**1. Observations that one model handles naturally and the other can only absorb by adding machinery.**

Early telescopic work produced several. The details belong to the other course. The shape is what to carry: a model rarely loses because it is refuted outright. It loses because keeping it starts costing extra assumptions, one per awkward observation, while the rival's cost stays flat. Nobody announces the moment. The bill just gets steeper.

**2. A replacement physics, which is not astronomy at all.**

"We would feel it" and "the stone lands at the base of the tower" are objections about **motion**, not about the sky. No telescope can answer them. They were answered by a mechanics in which uniform motion is not felt and in which the same law governs a falling stone and an orbiting moon. That arrived with Newton's *Principia* in 1687.

This is the single most useful item in the lesson, and it generalises: **a long-standing objection is often retired by a change in a neighboring field, by people who were not working on your argument.** You will see the same thing happen to Wegener in lesson 12.

**3. Instruments improving until the decisive measurement becomes possible.**

That is 1838. Note where it sits in the list. The direct confirmation arrived last, long after the question had stopped being live, which is a much more common pattern in the history of science than the textbook version suggests.

**4. Time, teaching, and turnover.**

Max Planck put this bluntly, and the sentence is worth having:

> A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.

That is not a pleasant observation and it is not a complete account of anything. An honest history has to include it anyway. Textbooks get rewritten, chairs get filled, students learn the new framework as the ordinary way to think, and the argument becomes invisible rather than resolved.

## What did not move it

Nobody was talked round. There is no meeting at which the argument ended, no debate someone won, no moment when the other side conceded.

That is worth sitting with, because it is at odds with how almost everybody imagines these things get settled, and because it tells you what to do when you are in an argument that is not moving. Producing a better version of the same argument is usually not the answer. Finding out what evidence could arrive from **outside** the argument usually is.

## Two habits

**When a long dispute will not move, ask what could come from a neighboring field.** Most long disputes end that way rather than by anyone winning on the original ground.

**When you find yourself adding a condition to save a belief, count the conditions.** One is fine and often correct. A growing list is a diagnosis, and it is the same diagnosis whether the belief is yours or somebody else's.

:::reveal Why can no telescope answer the objection that we would feel the earth move? ||| Because it is an objection about motion rather than about the sky. It was retired by a mechanics in which uniform motion is not felt, published in 1687.

:::reveal What is the diagnostic for a model that is losing? ||| Keeping it costs an extra assumption per awkward observation while the rival's cost stays flat. Count the conditions you are adding to save a belief.

:::reveal According to Planck, how does a new scientific truth actually win? ||| Not by convincing its opponents, but because they eventually die and a new generation grows up already familiar with the new idea.

## Sources
- Kuhn, T. S. (1957). *The Copernican revolution: Planetary astronomy in the development of Western thought*. Harvard University Press.
- Newton, I. (1999). *The Principia: Mathematical principles of natural philosophy* (I. B. Cohen & A. Whitman, Trans.). University of California Press. (Original work published 1687)
- Planck, M. (1949). *Scientific autobiography and other papers* (F. Gaynor, Trans.). Philosophical Library.`,
      recallContent: [
        {
          prompt: "Why was the absence of detectable stellar parallax a strong objection to a moving earth?",
          answer:
            "Because a moving earth predicts a visible shift of nearer stars against further ones, and centuries of careful looking found none. Rescuing the theory required assuming the stars were unimaginably distant.",
        },
        {
          prompt: "What did Tycho's measurement of apparent stellar discs lead him to conclude, and why was he not being stubborn?",
          answer:
            "That stars hiding parallax would have to be larger than the earth's orbit, so the earth must be still. He was following a real measurement, and the measurement itself was the thing misleading him.",
        },
      ],
    },
    {
      slug: "miasma-and-phlogiston",
      title: "10 · Bad air and fire-stuff: two theories that earned their keep",
      section: "Section 3 · Reasonably wrong",
      body: `Two wrong theories, held for a long time by careful people, both of which did real work before they were replaced.

## Miasma: disease comes from bad air

The theory held that illness arises from foul air given off by decaying matter. Versions of it were held across many cultures for centuries.

**The evidence for it was genuinely good.** Disease clustered exactly where things stank: marshes, open sewers, crowded courts, rotting refuse. The correlation between filth and illness is not imaginary. It is one of the strongest correlations in nineteenth-century public health data, and it is still there today. The Italian for bad air is *mal aria*, which is where the disease got its name.

**And the theory produced results.** Edwin Chadwick's 1842 report on sanitary conditions in Britain is a miasmatist document, and it drove drainage, sewer construction, refuse removal and clean water supply. Those measures saved an enormous number of lives.

Sit with that. A theory of causation that was wrong pointed at the right actions, because it pointed at the right **places**. Being wrong about the mechanism did not stop it being useful, and being useful did not make it right.

**John Snow, 1854.** Snow argued cholera traveled in water, and made the case with a map of cases around a Soho pump and a comparison between households supplied by different water companies. It is one of the finest pieces of reasoning in the history of medicine.

It did not carry the day. An official inquiry the following year rejected his conclusion.

And handle the famous ending carefully, because it is the same species of story as the Salamanca scene. The pump handle was removed and the outbreak subsided, but the outbreak was already declining when the handle came off, and Snow said so himself. A memorable moment gets the credit that belongs to a long argument.

What eventually settled it was accumulated evidence over decades **plus a mechanism**: an identifiable organism you could look at, and a germ theory to put it in. Miasma could not offer a specific agent. Its rival could.

## Phlogiston: combustible things contain fire-stuff

The theory held that combustible bodies contain a substance, phlogiston, released when they burn.

**Look at how much it explained.** Why a flame goes out in a sealed jar: the air becomes saturated and can take no more. Why metals heated in air turn to a crumbly calx, and why heating that calx with charcoal restores the metal: charcoal is rich in phlogiston and gives it back. Why substances that burn well resemble one another: they are rich in the same thing.

That is a genuine theory. It organized a large body of observations, guided laboratory practice, and made predictions that came true. Joseph Priestley, one of the finest experimentalists of the century, worked within it his whole life and never abandoned it. He was not a fool, and he was not being stubborn about nothing.

**What killed it was a number.** Metals gain weight when they calcine. If burning releases a substance, the residue should weigh less, and it weighs more. Defenders tried to absorb this, including by proposing that phlogiston had negative weight, which is the sound a theory makes under strain.

Lavoisier's quantitative work, weighing everything including the gases, absorbed the same fact without strain, and the oxygen account replaced it.

Historians of chemistry have argued at length that phlogiston was a productive research program rather than a superstition, and that the change was not a simple triumph of evidence over folly.

## What the two have in common

**Being superseded is not the same as being stupid.** Both theories organized real observations and produced real gains, and the people who held them had reasons they could state.

**What ended each one was a measurement the theory could not absorb, plus a rival offering a specific mechanism.** Weight gained on calcination in one case. An identified organism and a water route in the other. Not an argument. A number, and something to put in its place.

**And the uncomfortable reverse:** a theory that explains everything you throw at it is not thereby strong. Phlogiston explained everything, right up to the balance. When a framework has an answer for every observation, including ones that ought to embarrass it, that flexibility is a warning rather than a credential.

:::reveal Why was miasma a reasonable inference from the available evidence? ||| Because disease genuinely did cluster where things stank, and the correlation between filth, decay and illness is real. The theory pointed at the right places for the wrong reason.

:::reveal Name two things phlogiston successfully explained. ||| Why a flame goes out in a sealed jar, and why a metal heated in air forms a calx that can be turned back into metal by heating it with charcoal.

:::reveal What ended each theory, and what do the two endings have in common? ||| A measurement the theory could not absorb, plus a rival offering a specific mechanism. Weight gained on calcination in one case, an identified organism and a water route in the other.

## Sources
- Chadwick, E. (1842). *Report on the sanitary condition of the labouring population of Great Britain*. W. Clowes and Sons.
- Chang, H. (2012). *Is water H2O? Evidence, realism and pluralism*. Springer.
- Halliday, S. (2001). Death and miasma in Victorian London: An obstinate belief. *BMJ, 323*(7327), 1469-1471.
- Snow, J. (1855). *On the mode of communication of cholera* (2nd ed.). John Churchill.`,
      recallContent: [
        {
          prompt: "Name the thing that retired the objection that we would feel the earth move, and say why it is not astronomy.",
          answer:
            "A replacement mechanics, published in 1687, in which uniform motion is not felt. It is an objection about motion rather than about the sky, so no telescope could have answered it.",
        },
        {
          prompt: "What is the diagnostic for a model that is losing an argument?",
          answer:
            "Keeping it costs an extra assumption per awkward observation while the rival's cost stays flat. Count the conditions you are adding to save a belief.",
        },
      ],
    },
    {
      slug: "wegener-right-and-dismissed",
      title: "11 · Wegener was right, and he was dismissed",
      section: "Section 3 · Reasonably wrong",
      body: `In January 1912, in Frankfurt, a meteorologist and polar scientist named Alfred Wegener proposed that the continents have moved. He published a book on it in 1915 and revised it through a fourth edition in 1929.

## His case, which was not thin

**The fit.** The continental margins match, and they match better at the edge of the continental shelf than at the present coastline, which is what you would expect if the shelf is the real edge of the continent.

**Fossils across oceans no animal could cross.** Mesosaurus, a freshwater reptile, in Brazil and southern Africa. The Glossopteris flora across South America, Africa, India, Australia and Antarctica.

**Structures that line up when the Atlantic is closed.** Mountain belts and rock sequences on facing coasts that continue each other.

**Ancient glaciation in the wrong places.** Glacial deposits of Permian and Carboniferous age in India, Australia, southern Africa and South America, regions that are tropical or temperate now, with the directions of ice flow making sense only if those lands were once joined and sitting near a pole.

That is convergent evidence from four independent fields, agreeing. It is exactly the kind of case this course has been training you to respect.

## The objection

**Mechanism.** What force moves a continent?

Wegener proposed a pole-fleeing force arising from the earth's rotation, and tidal forces. Harold Jeffreys, a first-rate geophysicist, calculated that these are orders of magnitude too small to do the job, and argued that a continent ploughing through solid oceanic crust was not physically possible.

**Jeffreys was right about all of that.** Wegener's proposed forces really were far too weak. His picture of continents ploughing through the ocean floor really was impossible.

So here is the sentence that this section exists to make you able to hold:

**The objection was correct, the objectors were competent, and the conclusion they used it to reject was true.**

## He also overreached

Wegener claimed to have detected Greenland moving, from longitude determinations whose precision could not support the claim. It was later shown that the measurements could not bear that weight.

A weak argument attached to a strong case is a liability, because critics will engage the weak one. That is not unfair of them. It is what a weak argument invites.

## The martyr version is also wrong

"Everyone rejected Wegener" is not true, and correcting it is worth more than the martyr story.

**Alexander du Toit**, working in South Africa, assembled the southern-hemisphere evidence in support and published it in 1937. **Arthur Holmes** proposed mantle convection as a driving mechanism around 1930, which is, in outline, the right answer.

The rejection was strongest among North American and British geologists and weakest among geologists who could walk outside and look at the southern rocks. That is a fact about where the evidence physically sat, and it is more useful than a story about closed minds.

## What was actually at stake

At a symposium in New York in 1926, the geologist Rollin Chamberlin objected that accepting Wegener would mean forgetting everything learned in the previous seventy years and starting over.

Read that as a description rather than as villainy, because it is accurate. Drift, in 1926, meant discarding a working framework with nothing to put in its place, on the strength of a hypothesis whose proposed mechanism had been shown to be impossible. Institutions are conservative about that for reasons, and the reasons are usually good ones. The failure mode is known and predictable, and it is exactly the one on display here.

Wegener died on the Greenland ice in November 1930, on a supply journey, aged fifty.

Lesson 12 is about what changed it. Lesson 13 is about what you are not allowed to conclude from this story, and it is the reason lesson 11 exists.

:::reveal Name three independent lines of evidence Wegener assembled. ||| Matching fossils across oceans, mountain belts and rock sequences that continue each other across the Atlantic, ancient glacial deposits in what are now tropical regions, and the fit of the continental shelves.

:::reveal What was the objection to Wegener, and was it a good one? ||| Mechanism. His proposed pole-fleeing and tidal forces were orders of magnitude too weak, and continents ploughing through oceanic crust was physically impossible. Jeffreys was right on both points.

:::reveal Why is "everyone rejected Wegener" false, and where was support strongest? ||| Du Toit supported him from the southern rocks and Holmes proposed mantle convection around 1930. Rejection was strongest where the supporting evidence was hardest to go and look at.

## Sources
- Holmes, A. (1931). Radioactivity and earth movements. *Transactions of the Geological Society of Glasgow, 18*(3), 559-606.
- Jeffreys, H. (1924). *The earth: Its origin, history and physical constitution*. Cambridge University Press.
- Oreskes, N. (1999). *The rejection of continental drift: Theory and method in American earth science*. Oxford University Press.
- Wegener, A. (1966). *The origin of continents and oceans* (J. Biram, Trans.). Dover. (Original work published 1929)`,
      recallContent: [
        {
          prompt: "Why was the miasma theory a reasonable inference, and what good did it do anyway?",
          answer:
            "Disease genuinely clustered in places that stank, so the correlation was real. It drove drainage, sewers and clean water supply, which saved an enormous number of lives on a wrong account of causation.",
        },
        {
          prompt: "What ended phlogiston, and what warning does the course draw from how much it explained?",
          answer:
            "Metals gain weight when they calcine, a measurement the theory could not absorb without absurdity. A framework with an answer for every observation, including embarrassing ones, is showing a warning rather than a credential.",
        },
      ],
    },
    {
      slug: "seafloor-and-magnetometer",
      title: "12 · What changed it, 1963 to 1966",
      section: "Section 3 · Reasonably wrong",
      body: `Nothing about Wegener's case changed. His evidence in 1965 was the same evidence he had published in 1915.

What changed is that a completely different body of evidence arrived, from instruments built for other purposes, gathered by people who were not trying to settle a geological argument, and it went his way.

## Where the evidence came from

**Submarine warfare and its aftermath.** Sonar, developed for finding submarines, produced systematic depth soundings of the ocean floor at a scale nobody had ever had. Magnetometers, towed behind ships to detect submarines, produced magnetic surveys of the seabed as a by-product.

Nobody built either instrument to test continental drift. That is the most important sentence in the lesson.

**What the soundings showed:** a continuous mountain range running down the middle of the ocean basins, with a rift valley along its crest. Marie Tharp, working ashore from other people's soundings because women were not permitted on the survey ships, identified the rift and argued that it was continuous. Lesson 15 comes back to how that credit was handled.

## The prediction that could have failed

**Harry Hess, 1962.** He proposed that new ocean floor forms at the ridge and spreads outward, carrying the continents with it rather than pushing them through anything. He called his own paper an essay in geopoetry, which is a careful scientist labeling a speculation as a speculation.

**Fred Vine and Drummond Matthews, 1963.** They made it checkable. If the seafloor spreads while the earth's magnetic field periodically reverses, then new rock cooling at the ridge records the field direction of its moment, and the result should be a pattern of magnetic stripes, **symmetrical about the ridge axis**. Lawrence Morley reached the same idea independently and could not get it published.

Notice the shape of that prediction. It is specific. It is risky. It says in advance what the surveys should find, and the surveys had not found it yet. If the stripes had been asymmetric, or absent, or irregular, the idea was dead.

## What happened

The stripes were there, and they were symmetrical.

And then the part that turned a good result into a decisive one: the stripe sequence matched a timescale of magnetic reversals that had been worked out **independently**, from dated lava flows on land, by people working on a different problem.

Two datasets, from different fields, gathered for different reasons, using different methods, agreeing on the same sequence of dates. That is convergence, and it is the strongest thing evidence can do.

Tuzo Wilson added transform faults in 1965, explaining the offsets along the ridges. Profiles across the southern Pacific in 1966 showed the symmetry cleanly enough to end the argument. From 1968, deep-sea drilling confirmed that seafloor sediment gets steadily older with distance from the ridge, exactly as spreading requires.

## The turnover

The field changed in about five years, and largely the same geologists who had rejected drift accepted plate tectonics.

That is not a story about a stubborn establishment being outlived. It is a story about a professional community meeting evidence of a kind it had asked for and doing what it was supposed to do with it.

## And Jeffreys was answered, not ignored

This is the part that matters most for lesson 13.

Plate tectonics did not tell Jeffreys to be quiet. It **supplied the thing his calculation had shown was missing.** The continents do not plow through the ocean floor. The floor itself moves, generated at the ridges and consumed at the trenches, and the continents ride on it.

The objection was met on its own terms, by a mechanism that did not exist when the objection was made.

That is the shape to demand of any currently rejected claim: not sympathy, and not patience, but a route by which independent evidence could arrive and a way for the strongest objection to be answered rather than outlasted.

:::reveal Where did the decisive evidence for moving continents come from? ||| From wartime and postwar instruments, sonar depth soundings and towed magnetometers, built for finding submarines rather than for settling a geological argument.

:::reveal What made the Vine and Matthews proposal strong? ||| It was specific and risky and made in advance: symmetrical magnetic stripes either side of a spreading ridge, which could have come back asymmetric, absent or irregular, and did not.

:::reveal How was Jeffreys's mechanism objection finally answered? ||| It was met, not ignored. The continents do not plow through the ocean floor; the floor itself spreads from the ridges and carries them.

## Sources
- Felt, H. (2012). *Soundings: The story of the remarkable woman who mapped the ocean floor*. Henry Holt.
- Glen, W. (1982). *The road to Jaramillo: Critical years of the revolution in earth science*. Stanford University Press.
- Hess, H. H. (1962). History of ocean basins. In A. E. J. Engel, H. L. James, & B. F. Leonard (Eds.), *Petrologic studies: A volume in honor of A. F. Buddington* (pp. 599-620). Geological Society of America.
- Vine, F. J., & Matthews, D. H. (1963). Magnetic anomalies over oceanic ridges. *Nature, 199*(4897), 947-949.`,
      recallContent: [
        {
          prompt: "Name three of Wegener's independent lines of evidence.",
          answer:
            "Matching fossils across oceans, mountain belts and rock sequences that continue each other across the Atlantic, ancient glacial deposits in what are now tropical regions, and the fit of the continental shelves.",
        },
        {
          prompt: "What was the objection to Wegener, and was it a good objection?",
          answer:
            "Mechanism. His proposed forces were orders of magnitude too weak and continents could not plow through oceanic crust. Jeffreys was right, and the conclusion he used the objection to reject was still true.",
        },
      ],
    },
    {
      slug: "they-laughed-at-galileo",
      title: "13 · They laughed at Galileo",
      section: "Section 3 · Reasonably wrong",
      body: `You have just read a story about a man who was right and was dismissed for decades. That story is the single most-used defense of every bad idea in circulation, and this lesson exists because the previous two would be irresponsible without it.

## The argument, in its usual form

They laughed at Galileo. They laughed at Wegener. They are laughing at me. Therefore I may be right.

Carl Sagan gave the reply everybody quotes, and it earns its place:

> They laughed at Columbus, they laughed at Fulton, they laughed at the Wright brothers. But they also laughed at Bozo the Clown.

## Why the argument fails, stated properly

Being rejected is not evidence of being right.

The set of rejected claims contains a small number that were later vindicated and an enormous number that were rejected because they were wrong and stayed wrong. Reaching into that set, pulling out Wegener, and reasoning from him is choosing your evidence after you already know the answer. It is the same move lesson 7 named in Columbus's arithmetic, applied to a reference class instead of a number.

The base rates are lopsided and they are not a secret. Peer review, expert judgment and replication reject a great deal, and the overwhelming majority of what they reject stays rejected on the merits. A filter with a high accuracy rate does not become suspect because it has a known failure rate. Every filter has one.

## What actually distinguishes Wegener from a crank

Not the rejection. Five things, and this is the list to keep.

**1. Convergence.** His case rested on independent lines of evidence from separate fields that agreed with each other: palaeontology, structural geology, palaeoclimatology, and the physical fit of the shelves. A crank's case usually rests on one line, or on the failure of the mainstream account rather than on positive evidence for the alternative.

**2. Risky commitments.** His claim said what should be found and where. Specific fossils on specific facing coasts. Glacial striations pointing specific directions. Those could have come back wrong, and did not.

**3. Honest engagement with the strongest objection.** He knew mechanism was the weak point, and he tried to solve it. He failed, and he did not pretend otherwise. The crank's characteristic move is to declare the strongest objection irrelevant, or motivated, or a distraction.

**4. The objection was answered rather than outlasted.** Plate tectonics did not wait Jeffreys out or dismiss him as an obstacle. It supplied the mechanism his calculation had proved was missing.

**5. And decisively: when independent evidence arrived, it went his way.** From instruments built for other purposes. From people who were not trying to help him. And when it arrived, the field changed inside a decade.

**That ending is the thing the crank's story never has.** The crank's evidence in year thirty is the same evidence as in year one, restated, and the claim of suppression has grown to fill the space where new evidence should have gone. Nobody ever goes out with a new instrument and finds the thing.

So the one-line version, worth memorizing:

**Wegener is not famous for having been rejected. He is famous for what the ocean floor said when somebody finally looked.**

## And the Galileo story itself

Briefly, and without taking a side on anything.

Nobody laughed at Galileo. He was a celebrated, well-connected figure with powerful patrons, which is roughly the opposite of an ignored outsider. His 1633 trial involved patronage, court politics, personal conflicts that had accumulated over years, an argument about whether a model may be asserted as demonstrated truth or used as a calculating device, and the awkward detail that the proof Galileo himself considered decisive, his argument from the tides, is simply wrong.

Historians who have worked through the trial documents describe something considerably messier than a martyr and a mob. Whatever conclusion you reach about the affair, and people reach several, "they laughed at him" is not an accurate description of what happened, which makes it a strange foundation for an argument.

## The three questions

Use these on any embattled claim, including the ones you like.

1. **What independent evidence, from someone with no stake in the outcome, would support this? Has anyone gone and looked?**
2. **What does this claim predict that its rival does not?** It has to be specific enough to fail.
3. **What would its holder accept as a refutation?** If the answer is nothing, or if every failed test becomes further proof of a cover-up, you have your answer.

Then ask all three about a claim you hold. Lesson 18 will require it in writing.

## One closing caution

People who currently reject a well-supported claim are not automatically cranks either. Some are early. Some are careful. Some are working from a body of evidence you have not seen, which was true of Jeffreys and true of Tycho Brahe.

The three questions are for sorting claims. They are not for sorting people, and a course that ends with its students confidently labeling other people has taught the opposite of what it meant to.

:::reveal Why is "they laughed at Galileo" a bad argument? ||| Because rejection is not evidence of correctness. Most rejected claims are rejected for being wrong, and picking out the few famous vindications afterwards is choosing evidence once you already know the answer.

:::reveal What distinguishes Wegener from a crank? ||| Not the rejection. Convergent evidence from separate fields, risky predictions that could have failed, honest engagement with the mechanism objection, and independent evidence arriving later from people who were not trying to help him.

:::reveal Give the three questions to ask about any embattled claim. ||| What independent evidence would support it and has anyone looked, what does it predict that its rival does not, and what would its holder accept as a refutation.

## Sources
- Finocchiaro, M. A. (1989). *The Galileo affair: A documentary history*. University of California Press.
- Numbers, R. L. (Ed.). (2009). *Galileo goes to jail and other myths about science and religion*. Harvard University Press.
- Oreskes, N. (1999). *The rejection of continental drift: Theory and method in American earth science*. Oxford University Press.
- Sagan, C. (1979). *Broca's brain: Reflections on the romance of science*. Random House.`,
      recallContent: [
        {
          prompt: "Where did the evidence that settled continental drift come from, and who gathered it?",
          answer:
            "From sonar soundings and towed magnetometers developed for submarine detection, gathered by people who were not trying to settle a geological argument.",
        },
        {
          prompt: "What made the 1963 magnetic-stripe proposal strong evidence rather than just a good idea?",
          answer:
            "It was a specific, risky prediction made in advance, and the observed stripes then matched a reversal timescale worked out independently from dated lava flows on land.",
        },
      ],
    },
    {
      slug: "quiz-reasonably-wrong",
      title: "Section 3 quiz · Reasonably wrong",
      section: "Section 3 · Reasonably wrong",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Why did the absence of detectable stellar parallax count against a moving earth?",
            options: [
              "A moving earth predicts a shift that nobody could observe",
              "A moving earth predicts that the pole star should change yearly",
              "A moving earth requires the sun to lie outside the planetary orbits",
              "A moving earth was inconsistent with the measured length of the year",
            ],
            correctIndex: 0,
            explanation:
              "Rescuing the theory meant assuming the stars were unimaginably distant, which was a large unevidenced commitment made to save a failed prediction.",
            sourceLessonSlug: "geocentrism-was-good-science",
          },
          {
            prompt: "What did Tycho Brahe conclude from measuring the apparent discs of stars?",
            options: [
              "That the earth does not move, because such stars would be impossibly large",
              "That the stars lie at varying distances arranged in concentric shells",
              "That the planets and the stars must share a single center of motion",
              "That his instruments were too coarse to settle the question either way",
            ],
            correctIndex: 0,
            explanation:
              "He followed a real measurement to a wrong conclusion. The apparent disc is an artifact nobody in 1600 could have known about.",
            sourceLessonSlug: "geocentrism-was-good-science",
          },
          {
            prompt: "When was the parallax objection finally answered by direct observation?",
            options: [
              "In 1838, by Bessel's measurement of the star 61 Cygni",
              "In 1687, by the calculations published in Newton's Principia",
              "In 1610, by the first telescopic surveys of the fixed stars",
              "In 1543, by the tables Copernicus published with his model",
            ],
            correctIndex: 0,
            explanation:
              "Nearly three centuries after Copernicus published, and long after the argument had stopped being live.",
            sourceLessonSlug: "geocentrism-was-good-science",
          },
          {
            prompt: "Which objection to a moving earth could no telescope ever have answered?",
            options: [
              "That we would feel a motion of a thousand miles an hour",
              "That the planets would show phases like those of the moon",
              "That the fixed stars would brighten and dim over a year",
              "That comets would be seen to cross the planetary spheres",
            ],
            correctIndex: 0,
            explanation:
              "It is an objection about motion, not about the sky, and it was retired by a replacement mechanics in 1687.",
            sourceLessonSlug: "what-moved-the-argument",
          },
          {
            prompt: "What did Planck say actually happens when a new scientific truth wins?",
            options: [
              "Its opponents die and a new generation grows up with it",
              "Its opponents are persuaded once the decisive test is run",
              "Its supporters capture the journals and set the review terms",
              "Its rival is formally withdrawn by the society that endorsed it",
            ],
            correctIndex: 0,
            explanation:
              "Not a pleasant observation and not a complete account, but an honest history has to include it.",
            sourceLessonSlug: "what-moved-the-argument",
          },
          {
            prompt: "How does the course describe a model that is losing?",
            options: [
              "It needs an added assumption for each awkward observation",
              "It is formally refuted by a single decisive experiment",
              "It loses the support of the youngest researchers in the field",
              "It stops generating predictions that anyone can test at all",
            ],
            correctIndex: 0,
            explanation:
              "The rival's cost stays flat while yours climbs. Nobody announces the moment; the bill just gets steeper.",
            sourceLessonSlug: "what-moved-the-argument",
          },
          {
            prompt: "Why was miasma a reasonable inference from the evidence available?",
            options: [
              "Disease genuinely clustered where filth and decay were worst",
              "Physicians had isolated an airborne agent from marsh vapors",
              "Sealed rooms were shown to protect their occupants from cholera",
              "Outbreaks were recorded only during periods of still, warm air",
            ],
            correctIndex: 0,
            explanation:
              "The correlation is real and it is still there. The theory pointed at the right places for the wrong reason, and drove sanitation that saved many lives.",
            sourceLessonSlug: "miasma-and-phlogiston",
          },
          {
            prompt: "What did the phlogiston theory successfully account for?",
            options: [
              "Why a metal calx returns to metal when heated with charcoal",
              "Why hot air rises above cold air in a closed vertical column",
              "Why water can be separated into two gases by an electric current",
              "Why the same substance melts at a fixed and repeatable temperature",
            ],
            correctIndex: 0,
            explanation:
              "Charcoal being rich in phlogiston and giving it back was a real explanatory success within the theory, not a superstition.",
            sourceLessonSlug: "miasma-and-phlogiston",
          },
          {
            prompt: "What finally made phlogiston untenable?",
            options: [
              "Metals gain weight when they calcine, and the balance said so",
              "Priestley withdrew his support after Lavoisier's public lectures",
              "No laboratory was ever able to isolate a sample of phlogiston",
              "The theory could not explain why some substances burn at all",
            ],
            correctIndex: 0,
            explanation:
              "A measurement the theory could not absorb without absurdity, plus a rival that absorbed the same fact without strain.",
            sourceLessonSlug: "miasma-and-phlogiston",
          },
          {
            prompt: "What was the central objection raised against Wegener, and was it correct?",
            options: [
              "Mechanism, and it was correct: his proposed forces were far too weak",
              "Dating, and it was correct: his glacial deposits were wrongly aged",
              "Fossils, and it was correct: the matching species were misidentified",
              "Geometry, and it was correct: the coastlines do not in fact fit together",
            ],
            correctIndex: 0,
            explanation:
              "Jeffreys was right that the forces were orders of magnitude too small and that continents could not plow through oceanic crust.",
            sourceLessonSlug: "wegener-right-and-dismissed",
          },
          {
            prompt: "What made the 1963 magnetic-stripe proposal a strong piece of evidence?",
            options: [
              "A risky prediction in advance that then matched an independent timescale",
              "A large research budget that allowed the whole Atlantic to be surveyed",
              "A theoretical derivation from first principles with no free parameters",
              "A consensus among geologists reached before the surveys were carried out",
            ],
            correctIndex: 0,
            explanation:
              "The stripes could have been asymmetric, absent or irregular. Instead they matched a reversal sequence dated separately from lava flows on land.",
            sourceLessonSlug: "seafloor-and-magnetometer",
          },
          {
            prompt: "What distinguishes Wegener from a crank, according to this course?",
            options: [
              "Independent evidence later arrived and went his way",
              "He was rejected by an establishment that had a financial stake",
              "He held to his claim for longer than his critics held to theirs",
              "He was working outside the field that eventually proved him right",
            ],
            correctIndex: 0,
            explanation:
              "The rejection is not the distinguishing feature. The ending is: new instruments, new people, and a field that changed inside a decade.",
            sourceLessonSlug: "they-laughed-at-galileo",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 4 · What it takes to change a mind
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "piltdown",
      title: "14 · Piltdown: a fraud that fit",
      section: "Section 4 · What it takes to change a mind",
      body: `In 1912, a solicitor and amateur antiquarian named Charles Dawson produced skull fragments and a jaw from a gravel pit at Piltdown in Sussex. In December of that year he and Arthur Smith Woodward of the British Museum presented them to the Geological Society. The animal was named *Eoanthropus dawsoni*.

It was a forgery. It stayed in the scientific literature for forty-one years.

## Why it was accepted

**It fit an expected picture.** A widely held view held that the large brain came first in human evolution, with an ape-like jaw persisting alongside it. Piltdown was exactly that: a big braincase with a primitive jaw. It did not challenge the framework. It confirmed it.

**And it fit a national one.** The important early human finds were coming from Germany and France. Piltdown gave England an ancient ancestor of its own. National feeling is a real force in what gets funded, published and attended to, and pretending otherwise would be the same sentimentality this course keeps refusing to allow anywhere else.

## The part usually left out

**It was doubted from the beginning.** Within a couple of years, several anatomists argued in print that the jaw was an ape's and simply did not belong with the cranium. The doubt was published. It did not prevail.

That is a far more useful fact than "everyone was fooled," because it locates the failure precisely. The failure was not one of perception. Somebody did notice. The failure was one of **weighting**: a published objection that pointed away from the expected picture was not given the weight that an objection pointing toward it would have received.

## What the fraud actually cost

Not just wasted effort.

When Raymond Dart described the Taung child in 1925, a small-brained, upright hominin from South Africa, it was received coldly. Part of the reason is that it contradicted the brain-first picture that Piltdown appeared to support. A genuine and important find was held at arm's length for years because a forgery was sitting in the record supporting the alternative.

**A fraud does not only add a false thing. It makes true things harder to accept.**

## How it was exposed

In 1953, Kenneth Oakley, Joseph Weiner and Wilfrid Le Gros Clark showed by fluorine content that the pieces had not lain in the ground for the same length of time, and then that the jaw was an orangutan's with filed teeth, and that the specimens had been stained to match the gravel.

Notice what did the exposing: **a method that did not exist in 1912.** Fluorine dating gave a cheap test for whether two bones had been buried together for the same period. Nobody in 1912 declined to run a test they had. They did not have it.

That is the same shape as parallax in lesson 8 and the magnetometer in lesson 12. The corrective is very often a technique rather than an argument.

## Who did it

A 2016 study using DNA and spectroscopic analysis concluded that the specimens came from a single source and pointed to Dawson. Several other candidates have been argued over the decades.

The attribution is an inference from physical evidence, and the balance of that evidence favors Dawson. This course will not state it more strongly than the evidence does, and you should be suspicious of any account that does.

## Why this lesson sits next to Wegener

Because the two are the same bias seen from opposite sides.

Wegener's claim did not fit the framework, and it got a hard time. Some of that hardness was earned, because his mechanism really was impossible. Some of it was not.

Piltdown fit the framework, and it got an easy ride it did not earn at all.

**Fit is not evidence.** It is a fast, cheap heuristic that works most of the time, which is exactly why it is dangerous: it fails in a predictable direction, and the direction is always toward protecting what you already believe.

Whether forty-one years counts as a system that corrects itself is the question lesson 16 has to answer honestly.

:::reveal Why did Piltdown survive for four decades? ||| Because it fit an expected picture in which the large brain came first, and it gave England an early ancestor of its own. Fit is a cheap heuristic that protects what is already believed.

:::reveal Is it true that everyone was fooled by Piltdown? ||| No. Within a couple of years several anatomists argued in print that the jaw was an ape's and did not belong with the skull. The failure was one of weighting, not of perception.

:::reveal What did the fraud cost besides wasted effort? ||| It made a genuine find harder to accept. Dart's 1925 Taung child contradicted the brain-first picture Piltdown supported and was held at arm's length for years.

## Sources
- Dart, R. A. (1925). Australopithecus africanus: The man-ape of South Africa. *Nature, 115*(2884), 195-199.
- De Groote, I., et al. (2016). New genetic and morphological evidence suggests a single hoaxer created Piltdown man. *Royal Society Open Science, 3*(8), 160328.
- Spencer, F. (1990). *Piltdown: A scientific forgery*. Oxford University Press.
- Weiner, J. S., Oakley, K. P., & Le Gros Clark, W. E. (1953). The solution of the Piltdown problem. *Bulletin of the British Museum (Natural History), Geology, 2*(3), 139-146.`,
      recallContent: [
        {
          prompt: "Why is being rejected not evidence that a claim is correct?",
          answer:
            "Because the set of rejected claims holds a few later vindications and an enormous number that were rejected for being wrong. Picking out the famous vindications afterwards is choosing evidence once you know the answer.",
        },
        {
          prompt: "Name the feature of the Wegener story that a crank's story never has.",
          answer:
            "Independent evidence arriving later, from instruments built for other purposes and people not trying to help him, and a field that changed within a decade once it did.",
        },
      ],
    },
    {
      slug: "who-gets-believed",
      title: "15 · Who gets believed, and what it costs the record",
      section: "Section 4 · What it takes to change a mind",
      body: `Gatekeeping is not a scandal. A field has to filter, because most novel claims are wrong, and a field that accepted everything would be useless to everybody including its critics.

The useful question is narrower and harder: **what does the filter use as a proxy, and who is it systematically wrong about?**

## Four cases, with the mechanism named

**Alfred Wegener: discipline.** A meteorologist addressing geologists. The proxy is "is this person trained in this field," which is a decent proxy most of the time and fails precisely when a problem sits between fields, which is where a lot of the interesting problems sit.

**Marie Tharp: access.** She was not permitted on the survey ships, so she worked ashore from other people's soundings. Working that way she identified the mid-ocean rift valley and argued it was continuous, and by her own account the finding was initially waved off. The credit arrived, and it arrived long after the work.

**Mary Anning: class, sex, and money.** She found and prepared extraordinary specimens at Lyme Regis and sold them because she needed the income. She could not join the Geological Society. Her finds were described in papers written by the men who bought them. Another course in this catalog treats her in the detail she deserves.

**Ignaz Semmelweis: no mechanism, plus delivery.** In 1847 in Vienna he showed that having attendants wash their hands in chlorinated lime sharply cut deaths from childbed fever. He had no germ theory to explain why it worked. His written case came late and was combative. And the claim implied that respected physicians were killing their patients, which is a thing people resist for reasons that are human rather than scientific.

All three of those factors mattered. It is not a story with a single villain, and telling it as one costs you the lesson.

## The precision this demands

**None of these people was rejected because their opponents were stupid or wicked.** The proxies in use were reasonable proxies. Training predicts competence. Shipboard survey work was, for bad reasons, closed to women, and the exclusion did the damage rather than any judgment about Tharp's soundings. A claim without a mechanism genuinely is harder to act on.

What makes it serious is that the failures are **systematic** rather than random. A random error scatters. A systematic one lands repeatedly on the same kind of person, so the same people pay the cost again and again, and the field loses the same category of contribution again and again without ever noticing a pattern.

## The opposite myth, which this course also has to name

The suppressed genius is itself a story shape, and story shapes attract embellishment. Lesson 6 explained why.

Barbara McClintock is routinely described as ignored and ridiculed for decades. Historians working from her correspondence and from the actual citation record have argued that the picture is considerably more complicated, and that she was an established and honored scientist whose work was difficult and unfamiliar rather than dismissed.

Even the who-gets-believed genre generates its own myths, and they are attractive myths, because they flatter the person retelling them. Check these stories exactly the way you would check any other. That is not a betrayal of the point. It is the point.

## What it costs the record

Work that is not credited is harder to find, harder to build on, and easier to duplicate by accident. Delay is not a neutral cost: it is paid by whoever the knowledge would have helped, and in the Semmelweis case that is a very concrete group of people.

Nobody was ever un-killed by a corrected attribution.

## The larger version

This catalog has courses on whose accounts of the past were preserved and whose were discounted, in settings where the stakes were considerably larger than professional credit. The mechanism named here, a reasonable proxy failing systematically in one direction, is the small and visible version of what those courses examine at full size.

:::reveal Why is gatekeeping in a field not, in itself, a scandal? ||| Because most novel claims are wrong and a field that accepted everything would be useless. The real question is what the filter uses as a proxy and who it is systematically wrong about.

:::reveal Name the proxy that failed for Wegener and the one that failed for Marie Tharp. ||| Discipline for Wegener, since a meteorologist was addressing geologists. Access for Tharp, since she was barred from the survey ships and worked ashore from other people's soundings.

:::reveal Why does the course apply its own scepticism to the suppressed-genius story? ||| Because that story shape attracts embellishment like any other. The usual account of Barbara McClintock as ignored and ridiculed has been substantially complicated by historians working from her correspondence and citation record.

## Sources
- Comfort, N. C. (2001). *The tangled field: Barbara McClintock's search for the patterns of genetic control*. Harvard University Press.
- Felt, H. (2012). *Soundings: The story of the remarkable woman who mapped the ocean floor*. Henry Holt.
- Nuland, S. B. (2003). *The doctors' plague: Germs, childbed fever, and the strange story of Ignac Semmelweis*. W. W. Norton.
- Oreskes, N. (1999). *The rejection of continental drift: Theory and method in American earth science*. Oxford University Press.`,
      recallContent: [
        {
          prompt: "Why did the Piltdown forgery last four decades?",
          answer:
            "It fit an expected brain-first picture of human evolution and gave England an ancient ancestor of its own. Fit is a cheap heuristic that fails in the direction of protecting what is already believed.",
        },
        {
          prompt: "What did the fraud cost beyond wasted effort, and what finally exposed it?",
          answer:
            "It made Dart's genuine 1925 Taung find harder to accept for years. Fluorine dating exposed it in 1953, a method that did not exist when the forgery was planted.",
        },
      ],
    },
    {
      slug: "what-makes-a-field-self-correcting",
      title: "16 · What makes a field self-correcting, and where it fails",
      section: "Section 4 · What it takes to change a mind",
      body: `"Science is self-correcting" is true in roughly the way "this city is safe" is true. Not automatically, not everywhere, and only because of specific machinery that people built and have to keep maintaining.

Piltdown took forty-one years. Parallax took three centuries. Whether that counts as working depends on knowing what the machinery is and what it needs.

## What actually does the correcting

**Replication.** Somebody else runs it and gets the same result. It is the strongest single mechanism and the least rewarded activity in the entire enterprise.

**Independent methods converging.** This is the one that did the work in lesson 12: magnetic stripes on the seafloor matching a reversal timescale dated separately from lava flows on land. Two roads to the same answer, built by different people for different reasons. When you are assessing a claim, this is the thing to look for first, because it is very hard to fake and very hard to get by accident.

**New methods.** Fluorine dating ended Piltdown. Parallax measurement ended a three-hundred-year objection. Towed magnetometers ended a fifty-year argument in geology. The corrective is very often a technique rather than an argument, which means the honest answer to "why did nobody catch this sooner" is frequently "the test did not exist."

**Public, checkable records.** Data and methods a stranger can inspect. And preregistration, where the prediction is filed before the result is known, which is lesson 1's "name the test in advance" turned into infrastructure.

**Retraction.** It exists. It is slow.

## Where it fails, with names

**Publication bias.** Positive and novel results get published; null results sit in drawers. Named and quantified as the file drawer problem in 1979. The visible literature is therefore a biased sample of the work actually done, and the bias runs toward the exciting.

**Researcher degrees of freedom.** A series of small, individually defensible analytic choices, each made after seeing the data, can manufacture a significant result out of nothing. This was demonstrated deliberately in 2011 by researchers who set out to produce an absurd finding by legitimate-looking means, and did.

**Incentives.** Careers, grants and journals reward novelty. Almost nothing rewards checking somebody else's work. The most valuable activity in the list above is the one nobody is paid to do.

**And the measurement of the problem itself.** A large collaboration repeated one hundred psychology studies and reported that well under half produced statistically significant results in the same direction as the originals.

## The paragraph that matters most in this course

The wrong conclusion to draw from any of this is that nothing can be known, or that every claim is as good as every other. Lesson 1 closed that door and this is where it gets bolted.

Look again at the last four items. Every one of them is **science measuring its own error rate, publishing the number, and arguing in public about how to fix it.** The file drawer problem was named by a researcher. The degrees-of-freedom problem was demonstrated by psychologists on their own field. The replication figure was produced by a collaboration of the people whose work it embarrassed.

Astrology has no replication crisis. Neither does any other body of claims that never checks itself.

**A field that can find its own failures and put a figure on them is demonstrating exactly the capacity this whole course has been describing. A field that never reports an error is not more reliable. It is less observable.**

## What you can actually do with this

- **Prefer claims supported by independent methods** over claims supported by more of the same method. One study with a large sample is weaker than three studies from three directions.
- **Ask whether a surprising single result has been replicated,** and treat a preregistered study differently from one whose hypothesis was written after the data came in.
- **Notice when a result is repeated in the press but never re-tested.** Repetition is not replication, and the two are easy to confuse because they look identical from outside.
- **And keep the question.** What would change my mind, and has anybody gone and looked?

:::reveal Which correction mechanism did the work in the plate tectonics story? ||| Independent methods converging: seafloor magnetic stripes matching a reversal timescale that had been worked out separately from dated lava flows on land.

:::reveal What is the file drawer problem? ||| Positive and novel results get published while null results stay unpublished, so the visible literature is a biased sample of the work actually done.

:::reveal Why is a published replication crisis evidence for a field rather than against it? ||| Because it is the field measuring its own error rate in public and arguing about how to fix it. A field that never reports an error is not more reliable, only less observable.

## Sources
- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLoS Medicine, 2*(8), e124.
- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716.
- Oreskes, N. (2019). *Why trust science?* Princeton University Press.
- Rosenthal, R. (1979). The file drawer problem and tolerance for null results. *Psychological Bulletin, 86*(3), 638-641.
- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science, 22*(11), 1359-1366.`,
      recallContent: [
        {
          prompt: "Why is gatekeeping in a field not in itself a scandal, and what is the real question?",
          answer:
            "Because most novel claims are wrong and a field that accepted everything would be useless. The question is what proxy the filter uses and who it is systematically wrong about.",
        },
        {
          prompt: "Name two proxies that failed, and say who they failed for.",
          answer:
            "Discipline, which failed Wegener as a meteorologist addressing geologists, and access, which failed Marie Tharp because she was barred from the survey ships.",
        },
      ],
    },
    {
      slug: "curriculum-as-civics",
      title: "17 · Curriculum as a civics question",
      section: "Section 4 · What it takes to change a mind",
      body: `**What this lesson is, and what it is not.** This lesson teaches a mechanism. It takes no position on what any state should teach, and it deliberately uses no live dispute as an example.

It exists because this course has raised the same practical question twice and never answered it. A false claim from an 1828 biography got into schoolbooks and stayed there for over a century. Lesson 6 pointed out that a myth in a textbook is not a fixture but something maintained. So: **who decides what a schoolbook says, and how does an ordinary person take part in that decision?**

That is a civics question with a documented answer, and the answer is the same whatever you happen to think should be in the standards.

## Where the authority sits

There is no national curriculum in the United States.

Federal law is explicit about this. The General Education Provisions Act forbids any federal department, agency, officer or employee from exercising direction, supervision or control over the curriculum, the program of instruction, the administration or the personnel of an educational institution, or over the selection of instructional materials. The Every Student Succeeds Act of 2015 carries its own prohibitions on the Secretary of Education mandating or incentivising the adoption of particular standards.

So the decision sits with states, and in many states substantially with local districts.

## The usual shape of a state standards decision

Verify this for your own state rather than assuming it, because the details vary and the variation is the interesting part. The common pattern runs:

1. **A state board of education holds the adoption authority.** It is elected in some states and appointed by the governor or the legislature in others. Which one your state does is worth knowing, because it determines whether you can vote for these people.
2. **Standards run on a published review cycle**, typically several years long, subject by subject. The schedule is public.
3. **The state education agency convenes writing and review committees**, usually of classroom teachers and content specialists. In many states these have an open application process.
4. **Drafts are released for public comment**, in a window with a posted deadline, usually through an online form or a published address.
5. **The board votes in an open meeting**, on a posted agenda, generally with a public comment period at the meeting itself.

## Instructional materials are a separate decision

Standards say what is to be taught. Textbooks and other materials are chosen through a different process.

A minority of states maintain a state adoption list, from which districts choose. The rest leave selection to districts, subject to state law. Both kinds of state typically provide a public review period in which the actual proposed materials can be inspected before a decision.

## The laws that make participation possible

Open meetings and open records laws are the lever, and every state has some version of both. They generally require advance public notice of meetings, published agendas, public access to the meeting, and records available on request.

Two examples, offered as examples and not as a general rule: the Texas Open Meetings Act, in chapter 551 of the Texas Government Code, and California's Bagley-Keene Open Meeting Act, at section 11120 and following of the California Government Code. **Look up your own state's statute rather than assuming these apply to it.** That look-up is itself a useful exercise, and it takes about ten minutes.

## Where an ordinary person can actually act

- Submit a written comment during a posted comment window.
- Speak during the public comment period at a board meeting.
- Apply to serve on a standards review or instructional materials committee.
- Inspect proposed materials during a public review period.
- Vote in local school board elections, and in state board elections where that board is elected.
- Request records under the state's public records law.

## Finding your state's process in about twenty minutes

Start at your state department of education website. Find the state board's page. Then the meeting calendar and posted agendas. Then the academic standards revision timeline. Then the instructional materials adoption schedule. Write down what you find and where you found it, with the URL and the date you looked, exactly as lesson 6 asked you to do with any other source.

## Why this belongs in this course

Because a correction reaches a classroom through this machinery or it does not reach one at all.

Irving's invented scene traveled to generations of students through textbooks. Textbooks are revised, on schedules, by identifiable bodies, in meetings that are open by law. Knowing where that machinery is, is the difference between having an opinion about what students are taught and being able to participate in the decision.

## And to be clear about scope

People who disagree completely about what should be taught use exactly the same procedure. That is what a procedure is for, and it is why the mechanism can be taught without taking anybody's side.

This course does not have a position to offer you on any live curriculum dispute. It is a course about how to hold a claim, not about which claims to hold, and it would be overstepping badly if it pretended otherwise.

:::reveal Who holds legal authority over curriculum in the United States, and what does federal law say? ||| States and, in many places, local districts. Federal law forbids federal officers from directing curriculum, program of instruction, administration, personnel, or the selection of instructional materials.

:::reveal Name three points at which a member of the public can take part in a state standards decision. ||| Submitting a written comment during the posted comment window, speaking at an open board meeting, and applying to serve on a review or adoption committee.

:::reveal Why does this mechanism matter to a course about myths in textbooks? ||| Because a correction reaches a classroom through the revision and adoption machinery or it does not reach one at all.

## Sources
- Every Student Succeeds Act, Pub. L. No. 114-95, 129 Stat. 1802 (2015).
- FitzGerald, F. (1979). *America revised: History schoolbooks in the twentieth century*. Little, Brown.
- General Education Provisions Act, 20 U.S.C. § 1232a.
- Bagley-Keene Open Meeting Act, Cal. Gov't Code § 11120 et seq.
- Texas Open Meetings Act, Tex. Gov't Code ch. 551.`,
      recallContent: [
        {
          prompt: "Which correction mechanism settled the plate tectonics argument?",
          answer:
            "Independent methods converging: seafloor magnetic stripes matching a reversal timescale dated separately from lava flows on land.",
        },
        {
          prompt: "Why is a published replication crisis evidence for a field rather than against it?",
          answer:
            "Because it is the field measuring its own error rate in public and arguing about how to fix it. A field that never reports an error is only less observable, not more reliable.",
        },
      ],
    },
    {
      slug: "quiz-what-it-takes",
      title: "Section 4 quiz · What it takes to change a mind",
      section: "Section 4 · What it takes to change a mind",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Why was the Piltdown forgery accepted so readily in 1912?",
            options: [
              "It confirmed an expected picture in which the large brain came first",
              "It was recovered under supervision by two independent research teams",
              "It was dated by a laboratory method regarded as decisive at the time",
              "It was the first hominin fossil ever recovered anywhere in Europe",
            ],
            correctIndex: 0,
            explanation:
              "It did not challenge the framework, it confirmed it, and it gave England an ancient ancestor at a time when the finds were coming from elsewhere.",
            sourceLessonSlug: "piltdown",
          },
          {
            prompt: "Was everyone taken in by Piltdown?",
            options: [
              "No, several anatomists published objections within a couple of years",
              "Yes, no published objection appeared until the 1953 investigation",
              "No, but the objections were confined to German and French journals",
              "Yes, until Raymond Dart challenged it publicly in his 1925 paper",
            ],
            correctIndex: 0,
            explanation:
              "They argued the jaw was an ape's and did not belong with the skull. The failure was one of weighting rather than of perception.",
            sourceLessonSlug: "piltdown",
          },
          {
            prompt: "What did the Piltdown fraud cost besides wasted effort?",
            options: [
              "It made Dart's genuine 1925 Taung find harder to accept",
              "It ended British funding for human origins fieldwork for a decade",
              "It caused several museums to destroy authentic hominin specimens",
              "It delayed the invention of fluorine dating by roughly twenty years",
            ],
            correctIndex: 0,
            explanation:
              "A fraud does not only add a false thing to the record. It makes true things harder to accept.",
            sourceLessonSlug: "piltdown",
          },
          {
            prompt: "What finally exposed Piltdown in 1953?",
            options: [
              "Fluorine testing showed the pieces were of different ages",
              "A confession recovered among Charles Dawson's private papers",
              "A re-excavation of the gravel pit that found the original quarry",
              "A comparison with newly recovered specimens from Zhoukoudian",
            ],
            correctIndex: 0,
            explanation:
              "The corrective was a technique that did not exist in 1912. Nobody in 1912 declined to run a test they had.",
            sourceLessonSlug: "piltdown",
          },
          {
            prompt: "How does the course state the attribution of the Piltdown forgery?",
            options: [
              "The evidence favors Dawson, and it is an inference rather than a proof",
              "The forger has never been narrowed below a list of eight candidates",
              "A 2016 study established Dawson's authorship beyond further dispute",
              "The question was settled by the original 1953 investigating team",
            ],
            correctIndex: 0,
            explanation:
              "A 2016 study concluded the specimens came from a single source and pointed to Dawson. The course will not state it more strongly than the evidence does.",
            sourceLessonSlug: "piltdown",
          },
          {
            prompt: "What single idea links the Wegener story to the Piltdown story?",
            options: [
              "Fit is not evidence, and it fails in a predictable direction",
              "Amateurs produce better fieldwork than salaried specialists",
              "Fraud is more common in geology than in any other discipline",
              "A claim needs a mechanism before any evidence can support it",
            ],
            correctIndex: 0,
            explanation:
              "One claim did not fit and got a hard time; the other fit and got an easy ride. Same bias, opposite sides.",
            sourceLessonSlug: "piltdown",
          },
          {
            prompt: "Which proxy failed in Wegener's case?",
            options: [
              "Discipline: a meteorologist was addressing geologists",
              "Nationality: a German was addressing British geologists",
              "Seniority: a junior figure was addressing established chairs",
              "Language: his book circulated only in German until the 1960s",
            ],
            correctIndex: 0,
            explanation:
              "Training predicts competence most of the time. It fails exactly where a problem sits between fields, which is where many interesting problems sit.",
            sourceLessonSlug: "who-gets-believed",
          },
          {
            prompt: "What barrier shaped Marie Tharp's contribution to mapping the ocean floor?",
            options: [
              "She was not permitted on the survey ships and worked ashore",
              "She was refused access to the sonar records held by the navy",
              "She held no doctorate and could not publish under her own name",
              "She was employed by a commercial firm that owned her findings",
            ],
            correctIndex: 0,
            explanation:
              "Working from other people's soundings she identified the mid-ocean rift valley and argued it was continuous. The credit arrived long after the work.",
            sourceLessonSlug: "who-gets-believed",
          },
          {
            prompt: "Why does the course apply scepticism to the suppressed-genius story itself?",
            options: [
              "Because that story shape attracts embellishment like any other",
              "Because such cases turn out to be rarer than one per century",
              "Because credit disputes cannot be settled from surviving records",
              "Because scientists rarely leave correspondence about rejections",
            ],
            correctIndex: 0,
            explanation:
              "The usual account of Barbara McClintock as ignored and ridiculed has been substantially complicated by historians working from her correspondence and citation record.",
            sourceLessonSlug: "who-gets-believed",
          },
          {
            prompt: "What is the file drawer problem?",
            options: [
              "Null results go unpublished, so the literature is a biased sample",
              "Raw data is discarded before anyone can attempt a replication",
              "Journals hold accepted papers for years before printing them",
              "Researchers file their hypotheses only after seeing the results",
            ],
            correctIndex: 0,
            explanation:
              "Named and quantified in 1979. The bias in the visible literature runs toward the exciting.",
            sourceLessonSlug: "what-makes-a-field-self-correcting",
          },
          {
            prompt: "Why does the course say a published replication crisis counts in a field's favour?",
            options: [
              "It is the field measuring its own error rate and publishing the figure",
              "It shows the field has more funding available for repeat studies",
              "It proves that the original findings were fabricated rather than mistaken",
              "It demonstrates that peer review catches errors before publication",
            ],
            correctIndex: 0,
            explanation:
              "Astrology has no replication crisis. A field that never reports an error is not more reliable, only less observable.",
            sourceLessonSlug: "what-makes-a-field-self-correcting",
          },
          {
            prompt: "Where does legal authority over school curriculum sit in the United States?",
            options: [
              "With states and districts, with federal direction prohibited by law",
              "With the Department of Education, which issues national standards",
              "With accrediting bodies that approve materials for classroom use",
              "With individual schools, which are free of any state oversight",
            ],
            correctIndex: 0,
            explanation:
              "Federal law forbids federal officers from directing curriculum, program of instruction, administration, personnel or the selection of instructional materials.",
            sourceLessonSlug: "curriculum-as-civics",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 5 · Your turn
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "assignment-what-would-change-your-mind",
      title: "18 · Assignment: what would change your mind?",
      section: "Section 5 · Your turn",
      lessonType: "assignment",
      body: `Pick a claim you actually hold, and write down what would change your mind about it.

This is the question the course opened with. You have now watched competent people follow good evidence to wrong conclusions, watched a manufactured story outlive two centuries of correction, and watched a field turn over in five years when independent evidence finally arrived. This assignment turns all of that on you, which was always the point.

## Choosing your claim

Pick something you would **defend**. That is the whole difficulty and there is no way around it.

**Three ways to get this wrong:**

- **A strawman.** A claim you already half doubt is not a test of anything. If writing the refutation conditions feels comfortable, you have chosen badly.
- **A claim about other people's motives.** "Group X argues this because they secretly want Y" cannot be tested by any observation, and an assignment about testability that opens with an untestable claim has answered itself.
- **A claim so vague that nothing could touch it.** If you cannot state it in one sentence that another person could disagree with, sharpen it first.

Good choices are specific and consequential to you: something about how a system works, what causes a measurable outcome, what a policy does, what is true of a place, a process or a group of people that could be counted.

## What to submit

Roughly 700 to 1,000 words, in six parts.

**1. State the claim in one sentence.** Precisely enough that someone could disagree with exactly it, and not with a nearby cousin of it.

**2. Say what your belief currently rests on.** Be honest about the mix. Some of it will be evidence you have examined. Some will be sources you trust without having checked. Some will be experience that may not generalise. Some will be that everyone around you thinks so. Name the proportions as best you can. This part is graded on candour, not on impressiveness.

**3. Name what would make you revise it.** A specific observation or finding, described in advance, that you have not yet made. Not "better evidence." What evidence, showing what, at roughly what scale.

**4. Name what would make you abandon it entirely.** These are usually different, and the difference is informative. If nothing would, write that down and say why, because that is a real and reportable finding about the kind of belief it is.

**5. Say who would have to be wrong for you to be right, and how confident you are that they are.** If your claim is contested by people who have looked at this professionally, say so, name what their best argument is in its strongest form, and say what you make of it. Lesson 8's geocentrists and lesson 11's Jeffreys are the standard here: state the opposing case well enough that someone holding it would recognize it.

**6. Name one thing you could actually check this week,** and say where you would look.

## Two answers that will not pass, and why

**"I would change my mind if a trustworthy source told me."** That describes your deference structure, not the world. Name the observation.

**"Nothing would change my mind, because I know it."** This is at least honest, and it is not automatically wrong: some beliefs are not empirical, and a moral commitment is not a hypothesis. But then say that clearly, and say what kind of claim it is instead. A claim about values and a claim about facts are different objects, and treating one as the other is where a great deal of bad public argument comes from.

## How this is assessed

- **Precision of the claim in part 1.** A vague claim makes every later part impossible.
- **Candour in part 2.** Nobody has examined the evidence for most of what they believe, including your instructor. Pretending otherwise is the failure mode.
- **Specificity in parts 3 and 4.** Could someone else go and run your test? That is the bar.
- **Fairness in part 5.** The opposing case has to be stated in a form its holders would accept.
- **Feasibility in part 6.** Something you could genuinely do, not a research program.

Cite anything you rely on in APA 7, with a short reference list, and follow lesson 6's rule: put the source inside the sentence, and mark the trail where it goes cold.

## The one rule

**Nobody is graded on the claim they picked.** You will not be marked down for holding a belief, for keeping it, or for concluding that the evidence supports you. The grade is entirely on the quality of the account you give of your own reasoning.

Which is the same standard this course has applied to everyone in it. Tycho Brahe reached a wrong conclusion by excellent procedure and this course treats him with respect. It would be a strange course that then marked you down for reaching a conclusion it disagreed with.

What it will mark down is an essay that quietly declines to name any test at all.`,
      recallContent: [
        {
          prompt: "Name three points at which a member of the public can take part in a state standards decision.",
          answer:
            "Submitting a written comment during the posted comment window, speaking at an open board meeting, and applying to serve on a standards review or instructional materials committee.",
        },
        {
          prompt: "Why does the curriculum mechanism matter to a course about myths in textbooks?",
          answer:
            "Because a correction reaches a classroom through the revision and adoption machinery or it does not reach one at all.",
        },
      ],
    },
  ],
};
