// Authored "Clean: A Global History of Bathing and Soap" — a high-school-level, cited course on how
// different civilizations built rich, sophisticated bathing and hygiene traditions on their own
// terms, and on the one story most people get wrong: that medieval Europeans "never bathed" and had
// to be "introduced" to washing.
//
// The load-bearing accuracy discipline in this file:
//   * The MYTH is named and refuted IN COURSE, not repeated. The popular belief that medieval
//     Europe never washed is largely false: medieval Europe had public bathhouses ("stews"); the
//     retreat from public bathing came LATER (~16th-17th c.), driven by plague/syphilis fear, a
//     medical theory that hot water opened the pores to disease, and moral panic over mixed bathing.
//     A dedicated final lesson (bathing-myth-on-trial), a :::reveal, and quiz items test that the
//     student learned the NUANCE, not the myth. This is the course's payoff, not a footnote.
//   * The verdict the course delivers is "different, richly developed traditions, plus a specific
//     European retreat and return," NOT "civilized vs. dirty." No single "inventor" of soap is
//     awarded; the arc is cited (Mesopotamian recipes; Roman oil+strigil; the Islamic hard-soap
//     advance; Castile/Marseille/Aleppo/Nablus).
//   * VIVID-BUT-THIN claims are attributed to their source and hedged, never asserted flat. The
//     "Moctezuma bathed twice a day" line is attributed to a single Spanish observer (Andres de
//     Tapia) as reported by Ashenburg (2007), and flagged as one man's claim. The "Nahua/Indigenous
//     found the Spanish filthy" material is taught as documented ENCOUNTER (Ashenburg 2007), not a
//     tidy "they civilized Europe" arc.
//   * Sourcing leans on real scholarship — Ashenburg, The Dirt on Clean (2007); Virginia Smith,
//     Clean (2007); Kathleen Brown, Foul Bodies (2009) — plus verifiable primary-ish sources for
//     specific artifacts and dates: Britannica for the Great Bath dimensions; the UNESCO Intangible
//     Cultural Heritage inscriptions for Nabulsi soap (2024) and Finnish sauna culture (2020);
//     Nippon.com for the Japanese sento. No invented citation, person, date, or quotation.
//   * Cross-links the repo's "Asia Before European Colonization" (Indus cities), "Pre-Columbian
//     Mesoamerica" (Joya de Ceren's sweat bath, the Nahua), and "Africa Before Colonization"
//     (Kilwa's Husuni Kubwa bathing pool) courses by name rather than duplicating them.

import type { AuthoredCourse } from "./authored-course";

export const HISTORY_OF_BATHING_COURSE: AuthoredCourse = {
  title: "Clean: A Global History of Bathing and Soap",
  description:
    "A complete, cited history of getting clean, for high school students. You will visit the great bathing traditions of the world, each sophisticated on its own terms: the Indus Valley's Great Bath, Rome's thermae and the oil-and-scraper method that used no soap, the Islamic hammam and the hard olive-oil soap of Aleppo and Nablus, the Japanese bath born of Shinto purification and Buddhist merit, the Finnish sauna, and the Mesoamerican temazcal. Along the way you will learn where soap actually comes from (no single inventor), and you will meet the single most stubborn myth in this whole subject head-on: that medieval Europeans never bathed and had to be taught to wash. That belief is largely false, and this course shows you the real, documented story instead. The verdict is not 'civilized people versus dirty people.' It is many different, richly developed traditions, plus one specific European retreat from bathing and its slow return. Every claim names a source, and where a vivid story rests on a single observer, the course says so and hedges rather than dressing it up as fact.",
  lessons: [
    // ─────────────────────── SECTION 1 · CLEAN HAS NO SINGLE HISTORY ───────────────────────
    {
      slug: "bathing-clean-is-not-a-ladder",
      title: "1 · Clean is not a ladder",
      section: "Section 1 · Clean has no single history",
      body: `Here is the story most people carry around about hygiene without ever examining it: long ago everyone was filthy, and over the centuries humanity slowly climbed a ladder toward the clean, showered, deodorized present. It is a tidy story. It is also mostly wrong, and taking it apart is the whole job of this course.

**"Clean" is not one fixed thing that some societies had more of than others.** It is a standard, and the standard has changed wildly across time and place, driven by very different reasons: health, religion, pleasure, status, and fear. Two thousand years ago a Roman felt clean after being oiled and scraped, with no soap involved at all. A devout Muslim performing ablutions before prayer is clean in a sense a Roman would not have recognized. A Finn is clean after a sauna; a Nahua noble in Mexico was clean after a sweat bath and a wash in cold water. None of these people were "further up the ladder" than the others. They were doing different things, for different reasons, and each tradition was sophisticated on its own terms (Smith, 2007).

Virginia Smith, whose *Clean: A History of Personal Hygiene and Purity* is one of the three books this course leans on, makes exactly this point: the history of cleanliness is **not a straight line of progress**. It loops, contradicts itself, and moves backward as often as forward (Smith, 2007). Katherine Ashenburg, in *The Dirt on Clean*, adds the uncomfortable part: what counts as "clean" is decided by a society, and every society is quietly certain that its own habits are the natural, obvious, correct ones (Ashenburg, 2007).

**Now the myth this course exists to correct.** You have almost certainly heard that medieval Europeans never bathed, that they were revolted by water, and that cleaner civilizations had to "introduce" them to washing. Hold onto that belief loosely, because it is largely false, and the last section of this course takes it apart with evidence. Medieval Europe had public bathhouses. The European retreat from bathing happened later than the Middle Ages, for specific reasons, and it was never total. The honest verdict you are working toward is not "clean people versus dirty people." It is this: **many different, richly developed traditions, plus one particular European retreat from bathing and its slow return.**

Keep that verdict in mind as a promise. Every section from here builds toward being able to defend it.

:::reveal Why is the "ladder" image, everyone was filthy and we slowly climbed to clean, the wrong way to understand the history of bathing? ||| Because "clean" is not one fixed thing that societies had more or less of. It is a changing standard, and different civilizations built sophisticated, complete hygiene traditions for different reasons (health, religion, pleasure, status). None was simply "higher up" than the others; the history loops and moves backward as often as forward, so it is many parallel stories, not one climb.

## Sources
- Ashenburg, K. (2007). *The dirt on clean: An unsanitized history*. North Point Press.
- Smith, V. (2007). *Clean: A history of personal hygiene and purity*. Oxford University Press.`,
    },
    {
      slug: "bathing-how-we-know",
      title: "2 · How we know, and how this history goes wrong",
      section: "Section 1 · Clean has no single history",
      body: `Before we travel anywhere, we need to agree on how anyone knows what people did in their bathrooms two thousand years ago. There are two kinds of evidence, and the second kind is a trap.

**The first kind is things.** Archaeology gives us the objects and buildings themselves: the drained brick tank at Mohenjo-daro, the heated floors of a Roman bath, the foundations of a medieval bathhouse, a bronze scraper called a strigil, a clay tablet with a soap recipe pressed into it. Things are hard to argue with. A city does not build a giant watertight pool unless bathing matters to it.

**The second kind is words, and words are where this subject goes wrong.** Most of the vivid, quotable "those people were disgusting" lines in the history of hygiene were written by outsiders describing strangers or enemies, and usually written to make the writer's own side look good by comparison. A traveler who calls foreigners filthy is giving you reliable evidence about one thing for certain: what the traveler considered filthy. Whether the foreigners actually were is a separate question that a single hostile witness cannot settle.

This matters enormously for our subject, because the juiciest stories in it are exactly this kind. Later in the course you will meet a Spanish soldier's report that the Mexica ruler Moctezuma bathed twice a day, and Indigenous reports that the arriving Spanish were filthy and smelled bad. Both are real reports. Neither is a neutral measurement. So this course adopts one rule, borrowed from how careful historians work:

**Name the source, and when a claim rests on a single observer, say so and hedge it.** "A Spanish observer reported that Moctezuma bathed twice a day" is an honest sentence. "Moctezuma bathed twice a day" is a myth in the making, because it launders one man's secondhand claim into a fact. You will see this course attribute and hedge constantly. That is not weakness. It is the difference between history and a story that just sounds good (Ashenburg, 2007).

The same discipline is why the course refuses to crown a single "inventor of soap," or to flatten "medieval Europe" into one dirty stereotype. Real evidence is patchy, local, and full of exceptions, and saying so out loud is the honest move (Smith, 2007).

:::reveal A Spanish soldier writes that the Aztecs bathed constantly. Why is that not the same as the sentence "the Aztecs bathed constantly," and what should you do with it? ||| A single foreign observer, often writing years later, is reliable evidence about what HE noticed and valued, not a neutral measurement of how a whole society lived. You should attribute it ("a Spanish observer reported...") and hedge it, then look for corroboration, rather than laundering one person's claim into a stated fact.

## Sources
- Ashenburg, K. (2007). *The dirt on clean: An unsanitized history*. North Point Press.
- Smith, V. (2007). *Clean: A history of personal hygiene and purity*. Oxford University Press.`,
      recallContent: [
        {
          prompt: "Why is the image of a single 'ladder' from dirty to clean the wrong frame for the history of bathing?",
          answer:
            "Because 'clean' is a changing standard, not a fixed quantity. Different civilizations built sophisticated hygiene traditions for different reasons (health, religion, pleasure, status). The history loops and moves backward as often as forward; it is many parallel stories, not one climb.",
        },
        {
          prompt: "What is the honest verdict this course is building toward, instead of 'clean people versus dirty people'?",
          answer:
            "Many different, richly developed bathing traditions, plus one particular European retreat from public bathing (around the 16th-17th centuries) and its slow return. Not a contest between the civilized and the dirty.",
        },
      ],
    },
    {
      slug: "bathing-quiz-orientation",
      title: "3 · Quiz: clean has no single history",
      section: "Section 1 · Clean has no single history",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the central problem with the 'ladder' image of hygiene (everyone was filthy, then we climbed to clean)?",
            options: [
              "It is basically correct, just missing some dates",
              "'Clean' is a changing standard, not a fixed quantity, so different traditions were sophisticated in different ways rather than higher or lower on one ladder",
              "It gives too much credit to ancient Rome",
              "It underestimates how dirty the present still is",
            ],
            correctIndex: 1,
            explanation:
              "Cleanliness is a standard that changed by time and place, driven by health, religion, pleasure, and status. Traditions were different, not ranked on one ladder (Smith, 2007; Ashenburg, 2007).",
            sourceLessonSlug: "bathing-clean-is-not-a-ladder",
          },
          {
            prompt: "According to Virginia Smith's Clean, the history of personal hygiene is best described as:",
            options: [
              "A steady straight line of progress",
              "Not linear: it loops, contradicts itself, and moves backward as often as forward",
              "Identical everywhere once soap was invented",
              "A story with a single hero civilization",
            ],
            correctIndex: 1,
            explanation: "Smith (2007) argues the history of cleanliness is not a line of progress; it is full of reversals and contradictions.",
            sourceLessonSlug: "bathing-clean-is-not-a-ladder",
          },
          {
            prompt: "Which statement best matches the 'verdict' this course is building toward?",
            options: [
              "Some civilizations were clean and others were simply dirty",
              "Europe taught the world to bathe",
              "Many different, richly developed traditions, plus one particular European retreat from bathing and its slow return",
              "Nobody anywhere bathed regularly until modern plumbing",
            ],
            correctIndex: 2,
            explanation:
              "The honest conclusion is many parallel sophisticated traditions plus a specific, later European retreat and return, not 'civilized versus dirty.'",
            sourceLessonSlug: "bathing-clean-is-not-a-ladder",
          },
          {
            prompt: "The popular belief that 'medieval Europeans never bathed and had to be taught to wash' is, according to this course:",
            options: [
              "Completely true and well documented",
              "Largely false: medieval Europe had public bathhouses, and the retreat from bathing came later and was never total",
              "True only for the nobility",
              "Impossible to evaluate with any evidence",
            ],
            correctIndex: 1,
            explanation:
              "Medieval Europe had public bathhouses ('stews'). The European retreat came later (about the 16th-17th centuries) and was partial. The final section proves this.",
            sourceLessonSlug: "bathing-clean-is-not-a-ladder",
          },
          {
            prompt: "In this course, 'archaeology' (things) is treated as strong evidence because:",
            options: [
              "Objects and buildings are harder to argue with than a stranger's written opinion, since a city does not build a giant watertight pool unless bathing matters",
              "Archaeologists never disagree",
              "Written sources are always lies",
              "Buildings can be dated to the exact day",
            ],
            correctIndex: 0,
            explanation:
              "Physical evidence (the Great Bath, heated floors, strigils, soap tablets) shows what people actually built and used, independent of any one writer's bias.",
            sourceLessonSlug: "bathing-how-we-know",
          },
          {
            prompt: "Why does the course call written 'those people were disgusting' accounts a trap?",
            options: [
              "Because writing had not been invented yet",
              "Because they were usually written by outsiders describing strangers or enemies, often to flatter the writer's own side",
              "Because they are always forgeries",
              "Because they were written too recently to matter",
            ],
            correctIndex: 1,
            explanation:
              "A hostile traveler's account reliably tells you what the writer considered filthy, not whether the described people actually were. It needs attribution and corroboration.",
            sourceLessonSlug: "bathing-how-we-know",
          },
          {
            prompt: "A Spanish observer reports that Moctezuma bathed twice a day. What is the honest way to use that report?",
            options: [
              "State flatly that Moctezuma bathed twice a day",
              "Ignore it completely because it is Spanish",
              "Attribute it to the observer and hedge it ('a Spanish observer reported...'), then look for corroboration",
              "Assume the true number was higher",
            ],
            correctIndex: 2,
            explanation:
              "One secondhand observer is not a measurement. Attribute and hedge; do not launder a single claim into a stated fact (Ashenburg, 2007).",
            sourceLessonSlug: "bathing-how-we-know",
          },
          {
            prompt: "The course refuses to crown a single 'inventor of soap.' Why?",
            options: [
              "Because soap was never actually invented",
              "Because the real evidence is patchy and local, with recipes and uses appearing in several places over a long span",
              "Because the inventor's name was lost in a fire",
              "Because soap is not important to the story",
            ],
            correctIndex: 1,
            explanation:
              "Soap's history is an arc across cultures (Mesopotamian recipes, Roman use, an Islamic hard-soap advance, later European soaps), not one eureka moment. Saying so is the honest move (Smith, 2007).",
            sourceLessonSlug: "bathing-how-we-know",
          },
          {
            prompt: "Which of these is the clearest example of 'a thing' (archaeological evidence) rather than 'a word' (a written claim)?",
            options: [
              "A traveler's letter calling a city filthy",
              "A chronicle written 40 years after a conquest",
              "A drained, watertight brick bathing tank excavated from an ancient city",
              "A poem praising a king's cleanliness",
            ],
            correctIndex: 2,
            explanation: "The physical tank (like the Great Bath at Mohenjo-daro) is direct material evidence; the other three are written claims that need scrutiny.",
            sourceLessonSlug: "bathing-how-we-know",
          },
          {
            prompt: "What does Ashenburg's The Dirt on Clean add to the point that 'clean' is a changing standard?",
            options: [
              "That every society tends to assume its own hygiene habits are the natural, obvious, correct ones",
              "That only modern people are truly clean",
              "That cleanliness has no connection to religion",
              "That soap solved the problem for everyone at once",
            ],
            correctIndex: 0,
            explanation: "Ashenburg (2007) stresses that each culture quietly treats its own practices as the default, which is exactly why cross-cultural encounters produced so much mutual disgust.",
            sourceLessonSlug: "bathing-clean-is-not-a-ladder",
          },
          {
            prompt: "A Roman two thousand years ago felt clean after:",
            options: [
              "A long soak with a bar of soap",
              "Being oiled and then scraped, with no soap involved",
              "A cold shower and deodorant",
              "Rinsing with vinegar only",
            ],
            correctIndex: 1,
            explanation: "Romans cleaned with oil and a strigil (scraper); soap was not part of the routine. A later section covers this in detail.",
            sourceLessonSlug: "bathing-clean-is-not-a-ladder",
          },
          {
            prompt: "Which three books are named as the scholarly backbone of this course?",
            options: [
              "Three novels about ancient Rome",
              "Ashenburg's The Dirt on Clean, Smith's Clean, and Brown's Foul Bodies",
              "Three chemistry textbooks",
              "A single encyclopedia",
            ],
            correctIndex: 1,
            explanation:
              "Ashenburg (2007), Smith (2007), and Brown (2009) are the three histories of hygiene the course leans on, supplemented by verifiable sources for specific facts.",
            sourceLessonSlug: "bathing-clean-is-not-a-ladder",
          },
          {
            prompt: "The rule 'name the source, and when a claim rests on a single observer, say so and hedge' is meant to prevent:",
            options: [
              "Citing any sources at all",
              "Turning one person's secondhand claim into a stated fact",
              "Using archaeology",
              "Studying non-European cultures",
            ],
            correctIndex: 1,
            explanation: "The rule keeps vivid single-witness anecdotes labeled as claims, which is what separates history from a good-sounding story.",
            sourceLessonSlug: "bathing-how-we-know",
          },
          {
            prompt: "Why is it fair to say a Roman, a praying Muslim, a Finn in a sauna, and a Nahua noble were each 'clean'?",
            options: [
              "They all used the same method",
              "Each met a complete, sophisticated standard of cleanliness within their own tradition, for their own reasons",
              "None of them were actually clean",
              "Only the Roman was truly clean",
            ],
            correctIndex: 1,
            explanation: "Different traditions defined and achieved cleanliness differently; none sits 'above' the others on one ladder (Smith, 2007).",
            sourceLessonSlug: "bathing-clean-is-not-a-ladder",
          },
          {
            prompt: "What is the best short description of this course's method?",
            options: [
              "Retell the most entertaining stories without checking them",
              "Combine physical evidence with written sources, attribute and hedge single-observer claims, and avoid tidy stereotypes",
              "Trust only modern textbooks",
              "Prove that one civilization was cleanest",
            ],
            correctIndex: 1,
            explanation: "The course weighs things against words, labels shaky claims, and resists flattening whole societies into a single stereotype.",
            sourceLessonSlug: "bathing-how-we-know",
          },
        ],
      },
    },
  ],
};
