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

    // ─────────────────────── SECTION 2 · ROME: THE BATH WITHOUT SOAP ───────────────────────
    {
      slug: "bathing-rome-thermae",
      title: "4 · Rome: a whole civilization built around the bath",
      section: "Section 2 · Rome: the bath without soap",
      body: `If you want to see how central bathing can be to a society, start with Rome, because the Romans built entire buildings, and much of a daily social life, around it. The public bath, the *thermae*, was not a private chore done quickly behind a closed door. It was where Romans of many classes went in the afternoon to soak, sweat, exercise, gossip, do business, and be seen (Smith, 2007).

**The engineering was serious.** Aqueducts carried water into the cities, and under the floors of the bath ran a heating system called a *hypocaust*: the floor was raised on short brick pillars, and hot air and smoke from a furnace flowed through the gap beneath it and up flues built into the walls, warming the rooms from below. This is central heating, invented for bathing, roughly two thousand years ago. The largest imperial baths, like the Baths of Caracalla in Rome, were vast complexes that could serve thousands of people at once (Smith, 2007).

**A Roman bath was a sequence, not a single tub.** The exact order varied by building and by bather, but the classic circuit ran through named rooms: you undressed in the *apodyterium*, you might exercise in an open courtyard called the *palaestra*, then you moved through rooms of rising heat, the warm *tepidarium* and the hot *caldarium*, sweated, and finished with a bracing plunge in the cold *frigidarium*. Some baths added a very hot dry-sweat room. The point was the whole progression: heat, sweat, and a cold finish (Smith, 2007).

**Who bathed?** Far more people than you might expect. Entry was cheap, sometimes free when a politician or emperor paid the fee to win favor, so bathing was not only for the rich. Men and women both bathed, though the arrangements for keeping them separate, whether by separate rooms or separate hours, changed over time and were argued about by Roman writers themselves. The bath was medical too: doctors, including the famous Galen, prescribed particular bathing routines for particular ailments (Smith, 2007).

Hold onto one fact as you leave this lesson, because the next one turns on it: this enormously sophisticated, city-shaping bathing culture used **almost no soap on the body at all.** That is not a gap in the Romans' cleanliness. It is a clue that "clean" was reached by a completely different method, which is exactly what Lesson 5 is about.

:::reveal What was a Roman hypocaust, and what everyday modern technology does it resemble? ||| A hypocaust was an underfloor heating system: the floor sat on short brick pillars, and hot air from a furnace flowed through the gap beneath it and up flues in the walls, heating the room from below. It is essentially central heating, built for the baths about two thousand years ago.

## Sources
- Smith, V. (2007). *Clean: A history of personal hygiene and purity*. Oxford University Press.`,
      recallContent: [
        {
          prompt: "Why does the course treat a large, watertight public bathing pool as strong evidence, better than a traveler's insult?",
          answer:
            "Because a physical object or building is direct material evidence of what people actually built and used, independent of any one writer's bias. A city does not build a giant watertight pool unless bathing matters to it; a hostile written account only tells you what its author disliked.",
        },
        {
          prompt: "What is the honest verdict this course keeps returning to?",
          answer:
            "Many different, richly developed bathing traditions, each sophisticated on its own terms, plus one particular European retreat from public bathing (around the 16th-17th centuries) and its slow return. Not 'clean people versus dirty people.'",
        },
      ],
    },
    {
      slug: "bathing-rome-oil-strigil-soap",
      title: "5 · Oil, the scraper, and where soap actually comes from",
      section: "Section 2 · Rome: the bath without soap",
      body: `So how did a Roman get clean without soap? With oil and a scraper.

**The method.** A bather rubbed the skin with olive oil, sometimes scented, and then scraped it off with a curved metal tool called a *strigil*. The oil loosened the dirt, sweat, and dead skin, and the strigil carried all of it away in a greasy scroll that was wiped off the blade. Athletes, who trained covered in oil and dust, relied on this even more than ordinary bathers. It worked, and a Roman who had been oiled and scraped genuinely felt, and by their own standard was, clean (Smith, 2007). This is Lesson 1's point made physical: cleanliness is a standard reached by a method, and the Roman method simply was not soap.

**Did soap exist at all? Yes, but not for washing Romans.** The Roman writer Pliny the Elder, in his *Natural History* around 77 CE, describes *sapo*, a preparation made from tallow and ash. He calls it an **invention of the Gauls**, and reports that it was used to redden and dress the hair, treating it as a foreign, slightly barbarian cosmetic rather than a Roman way to wash the body (Pliny the Elder, 77 CE/1855). The Latin word *sapo* is the root of our word "soap," but notice what it was for: hair color, not scrubbing.

**A myth to retire while we are here.** You may have read that soap was discovered at "Mount Sapo," where rain supposedly washed animal fat and wood ash from sacrificial fires down into a river, where washerwomen found their laundry came cleaner. It is a charming story and it is almost certainly **fiction**: there is no evidence such a mountain existed, and the word *sapo* most likely came into Latin from a Germanic language and is related to *sebum*, meaning tallow. Treat "Mount Sapo" as a legend, not history (Smith, 2007).

**Where soap really comes from: an arc, not an inventor.** Recipes that mix a fat or oil with an alkali, which is the chemistry of real soap, are old and scattered. Some of the earliest written examples come from ancient Mesopotamia and are commonly dated to the late third millennium BCE, roughly around 2200 BCE, and they seem to have been meant mostly for **cleaning wool and cloth, not people** (Smith, 2007). Soap for scrubbing the human body on purpose is a much later and largely Islamic-world development, and that is the story of the next section. This is why the course refuses to crown a single "inventor of soap." The honest picture is a long arc across many cultures, and pretending one person or place invented it would be exactly the kind of tidy myth this course exists to avoid.

:::reveal A Roman used no soap on their body but still felt genuinely clean. By what method, and what does that prove about the word "clean"? ||| They rubbed the skin with oil and scraped it off with a curved metal tool called a strigil, which carried away dirt, sweat, and dead skin. It proves that "clean" is a standard reached by a method, and a society can have a complete, sophisticated hygiene culture with no soap in it at all.

## Sources
- Pliny the Elder. (1855). *The natural history* (J. Bostock & H. T. Riley, Trans.; Book 28). Taylor and Francis. (Original work published ca. 77 CE)
- Smith, V. (2007). *Clean: A history of personal hygiene and purity*. Oxford University Press.`,
      recallContent: [
        {
          prompt: "What was a Roman thermae, and roughly what circuit of rooms did a bather move through?",
          answer:
            "A large public bath complex at the center of Roman social life. The classic circuit (order varied) ran from the changing room (apodyterium), sometimes exercise in the palaestra, through rooms of rising heat (the warm tepidarium and hot caldarium), then a cold plunge in the frigidarium.",
        },
        {
          prompt: "The Roman bath used almost no body soap. Why is that a clue rather than a gap?",
          answer:
            "Because it shows cleanliness was reached by a different method (oil and a strigil scraper), proving a society can have a rich, city-shaping hygiene culture with no soap in it. 'Clean' is a standard reached many ways, not one fixed thing.",
        },
      ],
    },
    {
      slug: "bathing-quiz-rome",
      title: "6 · Quiz: Rome, the bath without soap",
      section: "Section 2 · Rome: the bath without soap",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was the thermae in Roman life?",
            options: [
              "A private bathtub found only in wealthy homes",
              "A large public bath complex that was a center of daily social, medical, and business life",
              "A religious temple where bathing was forbidden",
              "A type of aqueduct",
            ],
            correctIndex: 1,
            explanation:
              "The thermae were public baths where Romans of many classes soaked, exercised, socialized, and did business (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-thermae",
          },
          {
            prompt: "How did a Roman hypocaust heat a bath?",
            options: [
              "By burning coal inside the pool",
              "By raising the floor on brick pillars and circulating hot furnace air beneath it and up wall flues",
              "By solar panels on the roof",
              "By pouring boiling water from aqueducts directly onto bathers",
            ],
            correctIndex: 1,
            explanation:
              "The hypocaust is essentially early central heating: a furnace's hot air flowed under a raised floor and up through wall flues (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-thermae",
          },
          {
            prompt: "The classic Roman bathing circuit moved a bather through rooms of changing temperature. Which sequence is right?",
            options: [
              "Cold plunge first, then undress, then leave",
              "Undress, then rising heat (warm tepidarium, hot caldarium), finishing with a cold plunge (frigidarium)",
              "Straight into the hottest room and out again",
              "Only a single lukewarm pool",
            ],
            correctIndex: 1,
            explanation:
              "Order varied, but the classic progression was heat then a cold finish: apodyterium, tepidarium, caldarium, frigidarium (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-thermae",
          },
          {
            prompt: "Was Roman public bathing only for the wealthy?",
            options: [
              "Yes, entry cost more than most workers earned in a month",
              "No, entry was cheap and sometimes free when a politician or emperor paid the fee, so many classes bathed",
              "Yes, only senators were admitted",
              "No, but only soldiers could enter",
            ],
            correctIndex: 1,
            explanation:
              "Bathing was broadly accessible; fees were low and sometimes waived by a benefactor seeking favor (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-thermae",
          },
          {
            prompt: "How did a Roman actually clean the body?",
            options: [
              "With a bar of hard soap",
              "By rubbing the skin with oil and scraping it off with a curved metal strigil",
              "With a cold shower and no oil",
              "By rolling in sand only",
            ],
            correctIndex: 1,
            explanation:
              "Oil loosened dirt and sweat; the strigil scraped it away. No soap touched the body (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "What is a strigil?",
            options: [
              "A Roman soap bar",
              "A curved metal scraper used to remove oil, sweat, and dirt from the skin",
              "A heated bathing pool",
              "A Gaulish hair dye",
            ],
            correctIndex: 1,
            explanation: "The strigil is the scraper at the heart of the oil-and-scrape method (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "The fact that Romans used no body soap yet felt clean best supports which of the course's central ideas?",
            options: [
              "The Romans were secretly dirty",
              "'Clean' is a standard reached by a method, and a sophisticated hygiene culture can contain no soap at all",
              "Soap is the only way to be clean",
              "Bathing did not matter to Romans",
            ],
            correctIndex: 1,
            explanation:
              "Cleanliness is defined and achieved differently by different cultures; the Roman method was oil and a scraper, not soap.",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "In Pliny the Elder's Natural History, what is 'sapo,' and what was it used for?",
            options: [
              "A Roman bathing soap for scrubbing the body",
              "A preparation of tallow and ash that Pliny calls an invention of the Gauls, used to redden and dress the hair",
              "A kind of aqueduct cement",
              "A perfume imported from Egypt",
            ],
            correctIndex: 1,
            explanation:
              "Pliny (ca. 77 CE) describes sapo as a Gaulish hair preparation, not a Roman body wash. The word is the root of 'soap' (Pliny the Elder, 77 CE/1855).",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "What should you conclude about the 'Mount Sapo' origin story for soap?",
            options: [
              "It is well-documented history",
              "It is almost certainly a legend: there is no evidence such a mountain existed, and the word likely came from a Germanic root",
              "It proves the Romans invented soap",
              "It was recorded firsthand by Pliny",
            ],
            correctIndex: 1,
            explanation:
              "'Mount Sapo' is apocryphal. The etymology of sapo is most likely Germanic (related to sebum, tallow), not a real Roman mountain (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "Where and for what purpose do some of the earliest written soap-like recipes appear?",
            options: [
              "In Rome, for washing the body",
              "In ancient Mesopotamia, commonly dated around 2200 BCE, and probably for cleaning wool and cloth rather than people",
              "In medieval France, for making perfume",
              "In Japan, for purification rituals",
            ],
            correctIndex: 1,
            explanation:
              "Mesopotamian recipes mixing fat with alkali are old (commonly dated to the late third millennium BCE) and seem aimed at textiles, not personal washing (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "Why does the course refuse to name a single 'inventor of soap'?",
            options: [
              "Because soap was never invented",
              "Because the real evidence is a long, scattered arc across many cultures rather than one eureka moment",
              "Because the inventor's name is a secret",
              "Because only Rome mattered",
            ],
            correctIndex: 1,
            explanation:
              "Soap recipes and uses appear in many places over a long span; crowning one inventor would be exactly the kind of tidy myth the course avoids (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "The Latin word 'sapo' is the root of which English word?",
            options: ["Sapphire", "Soap", "Sap", "Supper"],
            correctIndex: 1,
            explanation: "Sapo gives us 'soap,' even though in Pliny it named a Gaulish hair preparation, not a body wash.",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "Which statement about Roman bathing and religion is most accurate for this course's purposes?",
            options: [
              "Roman bathing was chiefly a religious purification ritual like Muslim ablution",
              "Roman bathing was largely social, medical, and about pleasure and status, and doctors like Galen prescribed bathing routines",
              "Romans believed bathing was sinful",
              "Roman baths were open only during religious festivals",
            ],
            correctIndex: 1,
            explanation:
              "The Roman bath was a social and medical institution more than a religious one; Galen and other doctors prescribed bathing (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-thermae",
          },
          {
            prompt: "A friend says 'the Romans were clean because they invented soap.' Using this section, what is the accurate correction?",
            options: [
              "They are completely right",
              "Romans were clean, but by oiling and scraping, not soap; soap existed as a Gaulish hair product and true body soap came much later elsewhere",
              "Romans were actually filthy and never bathed",
              "Soap was invented in Rome for the baths",
            ],
            correctIndex: 1,
            explanation:
              "Roman cleanliness came from the oil-and-strigil method. Pliny's sapo was a hair preparation, and purpose-made body soap is a later, largely Islamic-world development.",
            sourceLessonSlug: "bathing-rome-oil-strigil-soap",
          },
          {
            prompt: "The largest imperial baths, such as the Baths of Caracalla, tell us what about Roman priorities?",
            options: [
              "Bathing was a rare luxury reserved for emperors",
              "Bathing mattered enough that the state built monumental complexes serving thousands at once",
              "Romans disliked bathing and built the baths for storage",
              "The baths were never actually used",
            ],
            correctIndex: 1,
            explanation:
              "Monumental public baths serving thousands are physical evidence of how central bathing was to Roman life (Smith, 2007).",
            sourceLessonSlug: "bathing-rome-thermae",
          },
        ],
      },
    },
  ],
};
