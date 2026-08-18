import type { AuthoredCourse } from "./authored-course";

// Here Be Dragons, course 3 of 5: Deep Time and the Dinosaur Renaissance.
//
// Plan: plans/58-here-be-dragons-series.md §4.3. Category: Culture & History. Grades 9-12.
// Connections: plans/future-courses/culture/01-connections-to-the-catalog.md §4.3.
// Model for voice, structure and section quizzes: monsters-at-the-edge-of-the-map-course.ts.
//
// THE THESIS EVERY LESSON IS CHECKED AGAINST: people were usually reasoning well from what they
// had, and the interesting questions are what they had, who they would let speak, and what it took
// to change their minds, including ours. The Crystal Palace dinosaurs of 1854 were a picture that
// was wrong AND useful. The swamp-dwelling tail-dragger was a defensible reading of the evidence
// available. A lesson that only says "look how wrong they were" is trivia and gets cut.
//
// The payload is that error-correction IS the mechanism, and that today's picture is provisional
// too. Lesson 18 therefore ENDS UNRESOLVED, on the parts of the end-Cretaceous argument that are
// genuinely still live in the literature. Do not tidy it into a settled story.
//
// Lesson 7 (whose name goes on the paper) and lesson 11 (what the Bone Wars cost the record) carry
// the series' who-gets-believed thread. They state what the record shows and stop. Do not moralise
// them; the facts are heavy enough to carry themselves.
//
// Images are NOT authored yet. The `:::figure` directive and its guard ship separately (plans/58
// §3) and the public-domain scans are operator task 243, so every lesson stands on its text alone.

export const DEEP_TIME_AND_THE_DINOSAUR_RENAISSANCE_COURSE: AuthoredCourse = {
  title: "Deep Time and the Dinosaur Renaissance",
  description:
    "The dinosaur you learned as a child was a sluggish, tail-dragging swamp animal, and the people who taught you that were reading their evidence carefully. This course follows how the earth got old, who was allowed to say so, and how a field talked itself out of a picture it had held for fifty years. It ends on the end-Cretaceous extinction, where the argument is still running, because a course about revising beliefs that pretends the current picture is finished would be teaching the opposite of its own lesson.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════════
    // Section 1 · How the earth got old
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "how-old-is-old",
      title: "1 · How old is old: a number nobody could check",
      section: "Section 1 · How the earth got old",
      body: `In 1650 an Irish archbishop published a chronology of the world that dated the creation to the evening preceding 23 October 4004 BCE.

James Ussher's number is the single most mocked figure in the history of science, and almost everyone who mocks it has no idea what went into it.

## What Ussher actually did

He was doing chronology, which was a serious and technically demanding scholarly discipline in the seventeenth century. It meant taking every dated record you could reach, in every language you could read, and forcing them into one consistent timeline. Ussher worked from Hebrew and Greek biblical texts, Babylonian and Persian king lists, Roman consular records, and astronomical data on eclipses. He read the relevant languages. He anchored the whole structure on a fixed point that could be checked against other records: the death of Nebuchadnezzar II.

The result is wrong. The method was rigorous, transparent, and reproducible by anyone with the same sources. He showed his working, which is more than many later confident numbers did.

## The problem was the data, not the reasoning

Ussher had exactly one class of evidence about the past that reached beyond human memory: written documents. Documents run out. When your deepest source is a genealogy, your deepest possible date is the top of that genealogy.

To get past that you need a **clock made of something other than writing**, and nobody had one. The whole of this section is about people inventing clocks.

## The clocks arrive, and they disagree

**Buffon, 1778.** Georges-Louis Leclerc, Comte de Buffon, heated iron spheres, measured how long they took to cool, and scaled the result up to a planet. His published figure was around 75,000 years. That is a real experiment producing a real number from a physical process, and it is the first serious attempt to measure the age of the earth rather than count it.

**Kelvin, from 1862.** William Thomson, later Lord Kelvin, ran the same idea with the full apparatus of nineteenth-century physics: a molten earth cooling by conduction, with thermodynamics behind him. He got a range, and he narrowed it over the decades to something like 20 to 40 million years. He was the most authoritative physicist of his age, and geologists who needed more time found themselves arguing against thermodynamics itself, which is not a comfortable place to stand.

**And Kelvin was wrong for a reason nobody could have known.** Radioactivity had not been discovered. The earth's interior generates heat, so a cooling calculation that assumes no internal heat source runs the clock far too fast. His physics was sound. One term in the equation had not been discovered yet.

## The number we use now

Radiometric dating, developed from the early 1900s onward, gave the first clock that runs on a physical process indifferent to human record-keeping. In 1956 Clair Patterson measured lead isotope ratios in meteorites and published an age of about 4.55 billion years. The current figure is close to that, with the uncertainty stated rather than hidden.

## What this lesson is for

Four careful people produced 6,000 years, 75,000 years, 20 million years, and 4.55 billion years. Each was reasoning honestly from the best evidence available to them, and each was constrained by an instrument that did not exist yet.

That is not a story about stupidity giving way to cleverness. It is a story about **what you can measure**, which is the only story this course is really telling.

:::reveal Why was Ussher's 4004 BCE date a limit of his EVIDENCE rather than of his reasoning? ||| His only class of evidence reaching beyond memory was written documents, and documents run out. A chronology built from genealogies cannot reach past the top of the genealogy.

:::reveal Kelvin's calculation of the earth's age was sound physics and badly wrong. What was missing? ||| Radioactivity had not been discovered, so his model had no internal heat source. An earth that generates its own heat cools far more slowly than his equation allowed.

## Sources
- Buffon, G.-L. L., Comte de. (1778). *Les époques de la nature*. Imprimerie Royale.
- Burchfield, J. D. (1975). *Lord Kelvin and the age of the earth*. Science History Publications.
- Patterson, C. (1956). Age of meteorites and the earth. *Geochimica et Cosmochimica Acta, 10*(4), 230-237.
- Thomson, W. (1864). On the secular cooling of the earth. *Transactions of the Royal Society of Edinburgh, 23*(1), 157-169.
- Ussher, J. (1650). *Annales Veteris Testamenti, a prima mundi origine deducti*. J. Flesher.`,
    },
    {
      slug: "steno-and-the-roadcut",
      title: "2 · Steno, and the principle you can see in a roadcut",
      section: "Section 1 · How the earth got old",
      body: `The first clock was not a machine. It was a way of looking at rock.

## The shark's head

In 1666 fishermen off Livorno landed an enormous shark, and the head was sent to Florence for dissection by a young Danish anatomist working for the Grand Duke of Tuscany. His name was Nicolas Steno.

Steno drew the teeth. Then he did something that mattered more: he compared them with *glossopetrae*, the "tongue stones" found embedded in rock across the Mediterranean and widely explained as objects that had grown inside the stone itself, or fallen from the sky.

They were the same shape. Same serrations. Same structure. Steno argued they were shark teeth.

## Why that was a hard argument, not an obvious one

The standard explanation was not superstition. It was a reasonable position given a real difficulty: **how does a solid object get inside another solid object?** If a tooth is in the middle of a rock, either the rock formed around the tooth or the tooth formed inside the rock, and the second option was easier to defend when nobody had a good account of how rock forms.

Steno took the difficulty seriously enough to write a book about it, and its title says exactly what the problem was: *De solido intra solidum naturaliter contento*, on a solid naturally contained within a solid.

## What he worked out, in 1669

To answer the question he had to say how rock forms, and doing that gave him principles a geologist still uses:

**Superposition.** In an undisturbed sequence of layers, the one underneath was laid down first.

**Original horizontality.** Sediment settles flat. So a layer that is now tilted or folded was tilted or folded after it was laid down.

**Lateral continuity.** A layer extended sideways until something stopped it, so the same layer on either side of a valley was once continuous.

Read those together and you have something startling: **a rock face is a sequence in time, and you can read the order off it.** You cannot yet say how long anything took. You can say what came before what, and you can say that a folded layer implies at least three events, one to deposit it, one to fold it, one to cut through it.

## The part usually left out

Steno converted to Catholicism, was ordained, became a bishop, and spent his last years as a missionary in northern Europe, largely abandoning scientific work. He was beatified in 1988.

If your model of this history is "religion versus science," the man who wrote down the founding principles of stratigraphy is a problem for it, and it is worth letting him be a problem rather than filing him as an exception. The people in this course are not arranged into two teams.

## What to do with this

Find a roadcut, a quarry wall, a cliff, or a riverbank. The lines are events. The one at the bottom happened first. Anything that cuts across the lines happened after the thing it cuts.

You are now reading time directly off a surface, which is the trick the next two lessons are built on.

:::reveal What made "these are shark teeth" a hard argument in 1666 rather than an obvious one? ||| It required an account of how a solid object gets inside another solid object, and nobody yet had a good account of how rock forms. The rival explanation was a reasonable response to a real difficulty.

:::reveal State Steno's principle of superposition, and the one about tilted layers. ||| In an undisturbed sequence the lower layer was laid down first. And since sediment settles flat, a layer that is now tilted was tilted after it was deposited.

## Sources
- Cutler, A. (2003). *The seashell on the mountaintop*. Dutton.
- Steno, N. (1667). *Canis carchariae dissectum caput*. Florence.
- Steno, N. (1669). *De solido intra solidum naturaliter contento dissertationis prodromus*. Florence.`,
      recallContent: [
        {
          prompt: "Last lesson: why did Kelvin's estimate of the earth's age come out far too short?",
          answer:
            "Radioactivity had not been discovered, so his cooling model had no internal heat source. The physics was sound; one term in the equation did not exist yet.",
        },
        {
          prompt: "Last lesson: what kind of evidence limited Ussher's chronology, and why did it run out?",
          answer:
            "Written documents. A chronology assembled from genealogies and king lists cannot reach past the oldest document, so he needed a clock made of something other than writing and nobody had one.",
        },
      ],
    },
    {
      slug: "hutton-no-vestige",
      title: "3 · What Hutton was actually claiming",
      section: "Section 1 · How the earth got old",
      body: `James Hutton's most quoted sentence is the end of his 1788 paper: that in the earth's record "we find no vestige of a beginning, no prospect of an end."

It is usually presented as the moment someone announced that the earth is unimaginably old. That is close enough to be memorable and wrong enough to be worth correcting.

## What he was arguing

Hutton was a Scottish physician, farmer and manufacturer, and his subject was a **system**. He argued that the earth works as a cycle: rock erodes, sediment is carried to the sea and deposited, heat and pressure consolidate it, uplift raises it into new land, and the new land erodes. Round again.

The famous sentence is a claim about that cycle. He was saying that when he looked at the record he could see no evidence of the machine starting and none of it stopping. That is a statement about what the rocks show and what the system implies, not a measurement.

Hutton offered no number. He could not have. The clocks in lesson 1 did not exist yet.

## Siccar Point

In 1788 Hutton took John Playfair and James Hall by boat along the Berwickshire coast to a headland called Siccar Point, where near-vertical greywacke beds are overlain by gently sloping red sandstone. Hutton read the surface between them as a sequence of events with no shortcuts available: deposit one set of layers, tilt them almost upright, erode the tops flat, drop the whole thing beneath the sea, deposit a second set on top, raise it all again.

Playfair wrote later that the mind grew giddy looking so far into the abyss of time. That sentence has done more for the reputation of geology than any argument in it, and it is worth noticing that Playfair is the reason we still read Hutton at all.

## Hutton wrote badly, and it nearly cost him the idea

Hutton's own prose is famously impenetrable. His 1795 two-volume version of the theory was not widely read or well understood. In 1802 Playfair published *Illustrations of the Huttonian Theory of the Earth*, which is clear, ordered and persuasive, and which is how most nineteenth-century readers met the argument.

This is the first appearance in this course of something you will see repeatedly, and it is the reason the last course in this series is about writing: **an argument does not travel on being right.** It travels on being readable by the people who have to act on it. Hutton got a translator. Not everyone in this course did.

## The part that is not a hero story

Hutton was not a modern scientist in a wig. His cycle was, in his own framing, evidence of design: a world maintained in a state fit to support life, endlessly renewed. He argued from purpose as comfortably as from outcrops.

And the cyclic, steady-state picture that made his case so elegant was also a commitment he brought to the evidence, not only one he took from it. Stephen Jay Gould's *Time's Arrow, Time's Cycle* is the standard argument that Hutton's insistence on a world with no direction shaped what he was willing to see in the rocks. Being right about deep time and being driven by a prior commitment are not mutually exclusive, and pretending otherwise makes the history useless.

:::reveal What was Hutton claiming with "no vestige of a beginning, no prospect of an end"? ||| That the earth works as a cycle of erosion, deposition, consolidation and uplift, and that the record shows no sign of that system starting or stopping. It is a claim about a system, not a measurement of age.

:::reveal Why does the course say an argument does not travel on being right? ||| Hutton's own prose was nearly unreadable, and his theory reached the nineteenth century mainly through Playfair's clear 1802 restatement of it. Readability decided whether the idea moved.

:::reveal Name one way Hutton's own commitments shaped what he argued. ||| He read the endless cycle as evidence of a world designed to remain fit for life, and his insistence on a directionless steady state was a prior commitment as much as a finding.

## Sources
- Gould, S. J. (1987). *Time's arrow, time's cycle: Myth and metaphor in the discovery of geological time*. Harvard University Press.
- Hutton, J. (1788). Theory of the earth. *Transactions of the Royal Society of Edinburgh, 1*(2), 209-304.
- Hutton, J. (1795). *Theory of the earth, with proofs and illustrations* (Vols. 1-2). Cadell and Davies.
- Playfair, J. (1802). *Illustrations of the Huttonian theory of the earth*. Cadell and Davies.`,
    },
    {
      slug: "william-smiths-map",
      title: "4 · William Smith's map, and the first time strata were a picture",
      section: "Section 1 · How the earth got old",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281374/witus/courses/here-be-dragons/deep-time-and-the-dinosaur-renaissance/william-smith-geological-map.jpg ||| A large hand-coloured geological map of England and Wales, with strata shown as bands of different colours. ||| William Smith's 1815 map: the first time strata were a picture rather than an argument. Smith was first, went uncredited by the institution, and was imprisoned for debt while his work circulated. ||| William Smith (1769-1839). Geological map Britain William Smith 1815.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Geological_map_Britain_William_Smith_1815.jpg
In 1815 a canal surveyor published a hand-colored geological map of England and Wales, about 2.6 metres tall, showing the strata beneath the surface in bands of color. It was called *A Delineation of the Strata of England and Wales with part of Scotland*, and there had never been anything like it at that scale.

## How he knew

William Smith dug canals and drained land for a living. That work put him underground and across country, repeatedly, in a way no gentleman scholar in a library ever was, and he noticed two things.

First, the layers came in a fixed order, and the order held from county to county even when the rock looked different.

Second, and this is the load-bearing one: **each layer carried its own distinctive fossils**, and those assemblages stayed with the layer wherever it went. So you could identify a stratum you had never seen before by what was in it.

That is the principle of faunal succession, and it converts fossils from curiosities into **tools**. Give a working surveyor a handful of shells and he can tell you which layer he is standing on and what is underneath him. That was worth money to canal companies and mine owners, which is exactly why a surveyor found it first.

## What the map did that words could not

Hutton had a system. Steno had principles. Smith produced a **picture of the subsurface of a whole country**, and a picture is a different kind of object: you can test it by digging, sell it to someone who needs to dig, and disagree with it in detail.

It also, without saying so, made deep time visible. A stack of strata that thick, in that order, each with its own fauna, is not something you can fit into a few thousand years. Smith did not make the argument. His map made the argument hard to avoid.

## What happened to him

Smith was not a gentleman. He had no institutional position, no private income, and no fellowship of the Geological Society, which had been founded in 1807 by men of a rather different social class.

He borrowed heavily to produce the map, sold it slowly, and in 1819 was imprisoned for debt in the King's Bench Prison. He came out to find his London house repossessed and worked for years in obscurity in Yorkshire.

The Geological Society published a geological map of England and Wales in 1820 under George Bellas Greenough, at a lower price. Popular accounts, most influentially Simon Winchester's, present this as deliberate theft that ruined Smith. Historians of the subject have been more cautious, noting that Greenough's map drew on a large collated correspondence network and that the causes of Smith's bankruptcy were several. The safe statement is the one the record supports: **Smith was first, he was uncredited by the institution, and he went to debtors' prison while his work circulated.**

The Geological Society awarded him its first Wollaston Medal in 1831, sixteen years after the map and twelve after the prison. Adam Sedgwick called him the father of English geology. Rehabilitation happened. It happened late, and the shape of the delay is the subject of lesson 7.

:::reveal What is the principle of faunal succession, and why did it make fossils useful rather than merely curious? ||| Each stratum carries its own distinctive fossil assemblage, which stays with it wherever it goes. So fossils become a tool for identifying which layer you are standing on, anywhere in the country.

:::reveal Why did a working canal surveyor discover this before the gentleman scholars did? ||| Because the work put him underground and across country repeatedly, and because knowing which stratum you are on was worth money to the people who paid him.

:::reveal What is the careful statement about Smith, Greenough and the 1820 map? ||| Smith was first, the institution did not credit him, and he went to debtors' prison while his work circulated. The stronger claim of deliberate theft is a popular reading that specialists have treated with more caution.

## Sources
- Knell, S. J. (2000). *The culture of English geology, 1815-1851*. Ashgate.
- Smith, W. (1815). *A delineation of the strata of England and Wales, with part of Scotland*. John Cary.
- Torrens, H. S. (2003). *The practice of British geology, 1750-1850*. Ashgate.
- Winchester, S. (2001). *The map that changed the world: William Smith and the birth of modern geology*. HarperCollins.`,
      recallContent: [
        {
          prompt: "Last lesson: what did Hutton's Siccar Point surface require, in order of events?",
          answer:
            "Deposit one set of layers, tilt them almost upright, erode the tops flat, submerge them, deposit a second set on top, then raise the whole thing again. No shortcut gets you that surface quickly.",
        },
        {
          prompt: "Last lesson: how did Hutton's theory reach a nineteenth-century readership?",
          answer:
            "Through John Playfair's 1802 restatement. Hutton's own prose was nearly impenetrable, so the argument traveled on someone else's clarity.",
        },
      ],
    },
    {
      slug: "quiz-deep-time",
      title: "Section 1 quiz · How the earth got old",
      section: "Section 1 · How the earth got old",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What kind of evidence set the floor under Ussher's 4004 BCE date?",
            options: [
              "Written documents, which run out",
              "Measured thicknesses of sedimentary rock in Ireland",
              "The observed cooling rate of heated metal spheres",
              "Astronomical tables of the precession of the equinoxes",
            ],
            correctIndex: 0,
            explanation:
              "Genealogies and king lists cannot reach past the oldest surviving document. Getting further back required a clock that was not made of writing.",
            sourceLessonSlug: "how-old-is-old",
          },
          {
            prompt: "How did Buffon arrive at his published estimate for the age of the earth?",
            options: [
              "He timed how long heated iron spheres took to cool",
              "He counted annual layers in a lake bed near Montbard",
              "He compared the salinity of rivers with that of the sea",
              "He measured the rate at which coastal cliffs retreated",
            ],
            correctIndex: 0,
            explanation:
              "About 75,000 years, published in 1778. It is the first serious attempt to MEASURE the age of the earth from a physical process rather than count it from records.",
            sourceLessonSlug: "how-old-is-old",
          },
          {
            prompt: "Kelvin's estimate of the earth's age was far too short. What was missing from his model?",
            options: [
              "An internal heat source, because radioactivity was undiscovered",
              "An allowance for the insulating effect of the oceans and atmosphere",
              "A correct figure for the thermal conductivity of common rock types",
              "Any accounting for heat delivered to the surface by solar radiation",
            ],
            correctIndex: 0,
            explanation:
              "His thermodynamics was sound. An earth that generates its own heat cools far more slowly than a cooling calculation with no heat source allows.",
            sourceLessonSlug: "how-old-is-old",
          },
          {
            prompt: "What did Clair Patterson measure in 1956 to date the earth?",
            options: [
              "Lead isotope ratios in meteorites",
              "Helium accumulation in deep continental granites",
              "Carbon isotope ratios in the oldest known sedimentary rocks",
              "Uranium concentrations in ocean water sampled at several depths",
            ],
            correctIndex: 0,
            explanation:
              "About 4.55 billion years, and the modern figure is close to it. Radiometric dating runs on a process indifferent to human record-keeping.",
            sourceLessonSlug: "how-old-is-old",
          },
          {
            prompt: "What did Steno argue about the tongue stones found embedded in Mediterranean rock?",
            options: [
              "They were shark teeth",
              "They were mineral growths shaped by crystal habit",
              "They were carved objects deposited by earlier peoples",
              "They were the hardened remains of an extinct sea plant",
            ],
            correctIndex: 0,
            explanation:
              "He dissected a shark's head in 1666, compared the teeth with the tongue stones, and found the same shape, serrations and structure.",
            sourceLessonSlug: "steno-and-the-roadcut",
          },
          {
            prompt: "Why was the rival explanation for tongue stones a reasonable position rather than a superstition?",
            options: [
              "Nobody yet had a good account of how rock forms",
              "The specimens were found only in regions with no living sharks",
              "The teeth were consistently larger than those of any known shark",
              "The stones occurred in rocks that were known to be volcanic in origin",
            ],
            correctIndex: 0,
            explanation:
              "The real difficulty was how a solid object gets inside another solid object. Answering it required Steno to explain how rock forms, which is what produced his principles.",
            sourceLessonSlug: "steno-and-the-roadcut",
          },
          {
            prompt: "A rock layer that is now steeply tilted tells you what, under Steno's principles?",
            options: [
              "It was tilted after it was deposited",
              "It was deposited by a current running down a steep slope",
              "It was deposited more rapidly than the layers lying above it",
              "It formed underwater rather than in a river or a lake bed",
            ],
            correctIndex: 0,
            explanation:
              "Original horizontality: sediment settles flat, so any tilt is a later event. That turns a rock face into a sequence of events you can read off directly.",
            sourceLessonSlug: "steno-and-the-roadcut",
          },
          {
            prompt: "Steno ended his life as a Catholic bishop. Why does the course insist on mentioning it?",
            options: [
              "Because the people here do not sort into two teams",
              "Because his ordination was the reason the principles went unpublished",
              "Because the Church later suppressed the stratigraphic work he had done",
              "Because his later writings retracted the argument about the tongue stones",
            ],
            correctIndex: 0,
            explanation:
              "The man who wrote down the founding principles of stratigraphy is a problem for a religion-versus-science model, and the course lets him be a problem.",
            sourceLessonSlug: "steno-and-the-roadcut",
          },
          {
            prompt: 'What was Hutton claiming with "no vestige of a beginning, no prospect of an end"?',
            options: [
              "That the record shows no sign of the earth's cycle starting or stopping",
              "That the earth is precisely as old as the oldest rock so far discovered",
              "That the fossil record contains no evidence of any species going extinct",
              "That the process of erosion runs at a constant measurable rate everywhere",
            ],
            correctIndex: 0,
            explanation:
              "A claim about a system, not a measurement. Hutton offered no number, because the clocks that could produce one did not exist yet.",
            sourceLessonSlug: "hutton-no-vestige",
          },
          {
            prompt: "How did Hutton's theory reach a wide nineteenth-century readership?",
            options: [
              "Through Playfair's clear restatement of it in 1802",
              "Through a French translation commissioned by the Royal Society",
              "Through a series of public lectures Hutton gave across Scotland",
              "Through its inclusion in the Encyclopaedia Britannica of the period",
            ],
            correctIndex: 0,
            explanation:
              "Hutton's own prose was famously impenetrable. An argument travels on being readable by the people who have to act on it, which is the whole reason this series ends with a writing course.",
            sourceLessonSlug: "hutton-no-vestige",
          },
          {
            prompt: "What is the principle of faunal succession that William Smith worked out?",
            options: [
              "Each stratum carries its own distinctive fossils",
              "Fossils become smaller and simpler in progressively deeper layers",
              "Marine fossils always occur beneath the layers holding land animals",
              "The number of fossil species in a layer rises with the layer's thickness",
            ],
            correctIndex: 0,
            explanation:
              "The assemblage stays with the layer wherever it goes, so fossils become a tool for identifying a stratum anywhere in the country.",
            sourceLessonSlug: "william-smiths-map",
          },
          {
            prompt: "What is the careful statement the course makes about Smith, Greenough and the 1820 map?",
            options: [
              "Smith was first, uncredited, and imprisoned for debt while his work circulated",
              "Greenough copied Smith's map outright and admitted as much in his own preface",
              "Smith sold his engraved plates to the Geological Society before going bankrupt",
              "The two maps were produced independently and no one at the time compared them",
            ],
            correctIndex: 0,
            explanation:
              "The stronger claim of deliberate theft is a popular reading that specialists have treated with more caution. The course states what the record supports and marks the rest as contested.",
            sourceLessonSlug: "william-smiths-map",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════════
    // Section 2 · The people who found the bones
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "the-field-notebook",
      title: "5 · How they wrote it: the field notebook as a genre",
      section: "Section 2 · The people who found the bones",
      body: `This is the first of the recurring writing lessons in this course. Each takes one form of writing about the world and shows you what it is built to do.

A fossil that arrives at a museum with no notes is close to worthless for research. Not worthless as an object: it can still be measured, sectioned, scanned and displayed. Worthless as **evidence**, because almost every question worth asking about it is a question about where it was.

## What the notebook is for

Think about what you cannot recover later.

Which layer it came out of, and where in that layer. What was lying next to it. Which way up it was. What the surrounding rock was made of. Whether the bones were articulated or scattered. Whether anything had chewed them. What the weather had been doing to the outcrop. Who dug, on what date, with what tools, and what broke on the way out.

Every one of those is destroyed by the act of collecting. You get one chance, and the chance is a page.

## The genre's actual rule

The rule that makes a field notebook a distinct kind of writing is this: **separate what you observed from what you concluded, on the page, visibly.**

A working entry looks less like prose than like a form. Date, locality, stratigraphic position, a sketch with a scale, a measured description. Then, marked off, the interpretation: what you think it is, what you think happened here, what you would need in order to check.

Joseph Grinnell, who ran the Museum of Vertebrate Zoology at Berkeley from 1908, formalised this into a system that is still taught: a dated journal of what happened, a separate set of species accounts, a catalog of specimens keyed to both, and the standing instruction to write it up the same day while you still remember which of your certainties you actually saw.

That last part is the whole discipline. Memory does not store observation and inference separately. Paper can.

## Why this matters for the rest of the course

Two lessons in this course turn on records that were not kept. Lesson 11 is about a rivalry that produced enormous quantities of bone and comparatively poor field data, so that specimens central to the science cannot be tied confidently to a horizon. Lesson 16 is about a fossil bed whose commercial trade routinely separates specimens from their provenance before a scientist ever sees them.

In both cases the bone survives and the information around the bone does not. And an unrecoverable context is exactly the same failure as an uncited claim: the object is still there, and nobody can check it.

## The transferable habit

You do not need a quarry. Any time you gather information that you will reason from later, the two-column discipline works: what I observed, and separately, what I think it means. Interviews, lab work, a bug report, a set of notes on a source.

The gap between the columns is where you will later find your mistakes, and you can only find them if you left the gap open.

:::reveal Why is a fossil with no field notes close to worthless as evidence, even though it is still a real object? ||| Because almost every research question about it is a question about where it was, and the act of collecting destroys the answer. Layer, orientation, associated remains and surrounding rock cannot be recovered later.

:::reveal What is the rule that makes a field notebook a distinct genre? ||| Separate what you observed from what you concluded, visibly, on the page. Memory does not store observation and inference separately; paper can.

## Sources
- Grinnell, J. (1910). The methods and uses of a research museum. *Popular Science Monthly, 77*, 163-169.
- Herman, S. G. (1986). *The naturalist's field journal: A manual for writing based on the Grinnell system*. Buteo Books.`,
      recallContent: [
        {
          prompt: "Last lesson: what did William Smith's 1815 map make hard to avoid without arguing it directly?",
          answer:
            "Deep time. A stack of strata that thick, in a fixed order, each with its own fossil assemblage, does not fit into a few thousand years, and the map showed the stack.",
        },
        {
          prompt: "Last lesson: what happened to Smith between 1815 and his first Wollaston Medal?",
          answer:
            "He borrowed heavily to produce the map, sold it slowly, was imprisoned for debt in 1819, lost his London house, and worked in obscurity in Yorkshire. The medal came in 1831.",
        },
      ],
    },
    {
      slug: "mary-anning-of-lyme-regis",
      title: "6 · Mary Anning of Lyme Regis: what she found",
      section: "Section 2 · The people who found the bones",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281375/witus/courses/here-be-dragons/deep-time-and-the-dinosaur-renaissance/mary-anning.jpg ||| A painted portrait of a woman in a bonnet and long coat holding a rock hammer, with a dog lying beside her. ||| Mary Anning of Lyme Regis. She found them; the papers carried other people's names. The course states what the record supports and flags the folklore around her as unverified. ||| Credited to 'Mr. Grey' in Crispin Tickell's book 'Mary Anning of Lyme Regis' (1996). Mary Anning painting.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Mary_Anning_painting.jpg
The cliffs at Lyme Regis in Dorset are Early Jurassic marine shales, and they fall down. Winter storms strip the face, the sea takes what falls, and anything exposed has to be found and got out before the next tide destroys it.

Mary Anning, born in 1799, worked that shore for a living from childhood until her death in 1847. Her family sold what they found. It was a trade, and for long stretches it was a trade that barely fed them.

## What she found

**An ichthyosaur, 1811 to 1812.** Her brother Joseph found a skull in the cliff. Mary located and excavated the rest of the animal roughly a year later. A description of that specimen appeared in the *Philosophical Transactions of the Royal Society* in 1814, written by Everard Home. The Annings are not named in it.

**The first known complete plesiosaur, 1823.** This one was strange enough that Georges Cuvier in Paris, the most authoritative comparative anatomist alive, initially suspected a forgery: the neck had too many vertebrae to be credible. He was applying exactly the skepticism a specialist should apply to an implausible specimen from a commercial dealer. He examined the evidence, including a drawing sent from the Geological Society, and accepted it. The episode is often told as Cuvier insulting her. It is better read as a claim being tested and surviving the test.

**The first British pterosaur, 1828.** Described by William Buckland, who named it *Pterodactylus macronyx*; it is now *Dimorphodon*.

**Coprolites.** Anning noticed that certain conical stones found in the abdominal region of ichthyosaur skeletons contained fish bones and scales. Buckland took up the observation, published on it in 1829, coined the term coprolite, and credited her. That is fossil faeces recognized as fossil faeces, which turns a curiosity into a direct record of what an extinct animal ate.

## What kind of work this was

She was not a collector who wandered the beach. She was a preparator and an anatomist working without a laboratory. Removing an articulated marine reptile from Blue Lias shale, in winter, on a collapsing cliff, and delivering it in a condition a describing anatomist can work from is a technical skill that took her years to build and that the men who published on her specimens could not have performed.

She read the published literature, including papers she had to have copied out by hand. She corresponded with geologists. She dissected modern fish and cuttlefish for comparison. Henry De la Beche, a friend from Lyme who became director of the Geological Survey, produced a painting of Jurassic life called *Duria Antiquior* and sold prints for her benefit.

The record shows a specialist. It also shows a specialist who depended on selling her specimens to eat, which is the subject of the next lesson.

## What is myth

Several of the best stories about Anning are unverified or embroidered, and this course does not need them.

The tongue-twister about selling seashells is not documented as being about her. The story that she was struck by lightning as an infant and survived appears in early accounts, but the frequent addition that it made her lively is folklore. Quotations attributed to her circulate widely with thin sourcing.

Hugh Torrens, whose 1995 study is the standard corrective, argues that Anning has been mythologised in both directions: first written out, then rewritten as a saint. Both do the same thing, which is to replace a working person with a story that is easier to tell.

:::reveal What did the 1814 Philosophical Transactions paper on the Lyme ichthyosaur say about the Annings? ||| Nothing. Everard Home described the specimen and the family who found and excavated it are not named in it.

:::reveal Why is Cuvier's initial suspicion of the 1823 plesiosaur better read as scepticism than as insult? ||| An implausible specimen from a commercial dealer is exactly what a specialist should doubt. He examined the evidence, accepted it, and the claim survived the test.

:::reveal What does Torrens argue has happened to Anning's reputation? ||| That she was mythologised in both directions: first written out of the record, then rewritten as a saint. Both replace a working specialist with an easier story.

## Sources
- Buckland, W. (1829). On the discovery of coprolites, or fossil faeces, in the Lias at Lyme Regis. *Transactions of the Geological Society of London, 3*(1), 223-236.
- Emling, S. (2009). *The fossil hunter: Dinosaurs, evolution, and the woman whose discoveries changed the world*. Palgrave Macmillan.
- Home, E. (1814). Some account of the fossil remains of an animal more nearly allied to fishes than any of the other classes of animals. *Philosophical Transactions of the Royal Society of London, 104*, 571-577.
- Torrens, H. (1995). Mary Anning (1799-1847) of Lyme: "the greatest fossilist the world ever knew". *The British Journal for the History of Science, 28*(3), 257-284.`,
    },
    {
      slug: "whose-name-goes-on-the-paper",
      title: "7 · Whose name goes on the paper",
      section: "Section 2 · The people who found the bones",
      body: `A scientific claim is not established by being true. It is established by being published, cited, argued over, and eventually built on. That process ran through a small number of institutions, and the question of who could get inside them is not a footnote to the science. It is part of how the science came out.

This lesson states what the record shows. It does not need any help.

## The mechanism, not the sentiment

The Geological Society of London was founded in 1807. It held the meetings where specimens were presented, and its *Transactions* was where descriptions were published. Fellowship was the ticket.

Mary Anning was never a Fellow. She could not have been: the Society did not admit women as Fellows in her lifetime, and did not elect its first female Fellows until 1919, more than seventy years after her death. She could not present a specimen at a meeting. She could not publish a description of an animal she had extracted with her own hands.

So the sequence was structural rather than personal. Anning found and prepared the specimen. A Fellow bought it, or borrowed it, or was shown it. The Fellow described it in print. The Fellow's name attached to the animal, permanently, through the naming conventions that make a scientific name include its author.

Some of those men behaved well. Buckland credited her observation when he published on coprolites in 1829. De la Beche raised money for her. Several of them acknowledged in letters, in private, how much they owed her. The British Association for the Advancement of Science, with government support, granted her an annuity from 1838, and when she died De la Beche read a eulogy to the Geological Society, an honor it had not previously given to a woman or to a non-member.

None of that changes the structure. Personal decency operating inside a closed institution produces gratitude, not authorship.

## Class, which is the half usually left out

Anning was also poor, in trade, and a Dissenter in an Anglican establishment. Those mattered.

Look at William Smith in lesson 4, a man, who was excluded on class alone and went to debtors' prison while his map circulated. Look at Gideon Mantell, a country surgeon who named *Iguanodon* in 1825 and spent his career on the losing side of disputes with Richard Owen, who had the institutional position Mantell did not.

The pattern is not only about gender. It is about who is inside the room where a claim becomes knowledge, and the room had several doors, each of which could be closed for a different reason.

## What actually got lost

It is tempting to say the injustice is that a name is missing from a label, and that a museum card corrects it. That understates the cost.

Someone who cannot publish also cannot argue. She cannot correct a description she knows is wrong, cannot record what she saw in the cliff that the buyer never saw, cannot state which reconstruction the field evidence supports. The information that leaves with the specimen is not just the credit. It is the observation, which is the thing lesson 5 was about.

The described animal was better than nothing. It was less than the specimen plus its finder would have been, and that difference is a hole in the record, not a hole in someone's feelings.

## The transferable question

Any time you meet an account of who discovered something, ask which of these you are being told: who found it, who prepared it, who described it, who funded it, who published it, and who is named.

Those are six roles. Sometimes one person filled all six. Usually not, and the gap between the roles and the name is where the history is.

:::reveal Why could Anning not publish a description of an animal she had excavated herself? ||| The Geological Society did not admit women as Fellows in her lifetime, and fellowship was the route to presenting at meetings and publishing in the Transactions. It elected its first female Fellows in 1919.

:::reveal What did the record lose besides her name, when a specimen left Lyme with its finder behind? ||| Her observations. Someone who cannot publish cannot correct a wrong description, cannot record what the cliff showed, and cannot say which reconstruction the field evidence supports.

:::reveal Name the six roles the course asks you to separate in any story of discovery. ||| Who found it, who prepared it, who described it, who funded it, who published it, and who is named.

## Sources
- Buckland, W. (1829). On the discovery of coprolites, or fossil faeces, in the Lias at Lyme Regis. *Transactions of the Geological Society of London, 3*(1), 223-236.
- Cadbury, D. (2000). *The dinosaur hunters: A story of scientific rivalry and the discovery of the prehistoric world*. Fourth Estate.
- Torrens, H. (1995). Mary Anning (1799-1847) of Lyme: "the greatest fossilist the world ever knew". *The British Journal for the History of Science, 28*(3), 257-284.
- Torrens, H. S. (2003). *The practice of British geology, 1750-1850*. Ashgate.`,
      recallContent: [
        {
          prompt: "Last lesson: name two of the finds Mary Anning made at Lyme Regis, and what each was.",
          answer:
            "An ichthyosaur excavated around 1811 to 1812, the first known complete plesiosaur in 1823, the first British pterosaur in 1828, and the coprolites whose contents showed what an extinct animal had eaten.",
        },
        {
          prompt: "Last lesson: what technical skill did Anning have that the men who published on her specimens did not?",
          answer:
            "Extracting an articulated marine reptile from collapsing Blue Lias shale in winter and delivering it in a condition an anatomist could describe. She was a preparator, not a beachcomber.",
        },
      ],
    },
    {
      slug: "owen-names-dinosauria",
      title: "8 · Owen names Dinosauria, and what naming does",
      section: "Section 2 · The people who found the bones",
      body: `By 1840 English collections held three large extinct reptiles that nobody knew what to do with: *Megalosaurus*, described by William Buckland in 1824; *Iguanodon*, named by Gideon Mantell in 1825; and *Hylaeosaurus*, also Mantell, in 1833. Three animals, three describers, no group.

Richard Owen put them in one.

## The date, which is worth getting right

Owen presented his *Report on British Fossil Reptiles* at the British Association meeting in Plymouth in 1841. The name *Dinosauria* appears in the printed report, published in 1842.

It is frequently dated to 1841, including in places that ought to know better, because the talk came first. This is a small thing and it is the course's method in miniature: the claim you can check is what is on the printed page, and the difference between when something was said and when it entered the record is exactly the distinction this whole series keeps making.

## What naming is

Owen was not labeling a shelf. He was asserting that these three animals share features that make them one natural group, distinct from lizards and crocodiles, and he named the features: a sacrum with several fused vertebrae, and limbs held under the body rather than sprawling.

That does four things at once.

**It creates an object of study.** Before the name there are three curiosities. After it there is a group, and a group generates questions: what else belongs to it, what does the group have in common, when did it live, why is it gone.

**It makes prediction possible.** A new specimen can now be tested against membership criteria. It can also fail them, which is what makes the group a real claim.

**It fixes an image.** Owen's dinosaurs were massive, upright-limbed and, in his framing, closer to large mammals in bearing than to any living reptile. That reading goes directly into the sculptures of lesson 9.

**It gives one person control of the frame.** Whoever names a group defines what counts as belonging to it, and Owen had the institutional standing to make his definition the one everyone used.

## The argument the name was built to serve

Owen was arguing against theories of progressive transmutation then circulating in Britain. His reasoning ran like this: if life progresses steadily from simple to complex, then these very ancient reptiles should be cruder than modern ones. They are not. They are structurally more advanced than any living reptile. So the record does not show a simple ascent.

That was a genuine argument from evidence, and the observation underneath it was correct. Dinosaurs really are not sprawling primitives.

The conclusion did not survive. Owen also opposed Darwin's account after 1859 and lost that argument comprehensively. But the name he coined to serve a position that failed is still the name the field uses, because the grouping was sound even though the use he put it to was not.

## The point to carry

**A good observation and a bad conclusion can travel in the same sentence.** You are allowed, and required, to keep one and discard the other. Deciding that Owen was wrong about transmutation therefore tells you nothing about whether *Dinosauria* is a real group, and treating a person as a package is a reliable way to get both halves wrong.

:::reveal In what year did the name Dinosauria appear in print, and why does the course insist on the distinction? ||| 1842, in the printed Report on British Fossil Reptiles, although Owen presented at the 1841 meeting. What can be checked is the printed page, and the gap between saying and recording is the series' recurring distinction.

:::reveal What features did Owen use to define the group? ||| Several fused sacral vertebrae, and limbs held under the body rather than sprawling out to the sides. Naming the criteria is what turns a label into a testable claim.

:::reveal What argument was Owen using Dinosauria to support, and what happened to it? ||| That the record shows no simple progression from crude to advanced, since these ancient reptiles are structurally more advanced than living ones. The conclusion did not survive, and the group he named still stands.

## Sources
- Buckland, W. (1824). Notice on the Megalosaurus or great fossil lizard of Stonesfield. *Transactions of the Geological Society of London, 1*(2), 390-396.
- Mantell, G. (1825). Notice on the Iguanodon, a newly discovered fossil reptile. *Philosophical Transactions of the Royal Society of London, 115*, 179-186.
- Owen, R. (1842). Report on British fossil reptiles, part II. *Report of the Eleventh Meeting of the British Association for the Advancement of Science*, 60-204.
- Rupke, N. A. (1994). *Richard Owen: Victorian naturalist*. Yale University Press.`,
    },
    {
      slug: "quiz-finding-and-naming",
      title: "Section 2 quiz · The people who found the bones",
      section: "Section 2 · The people who found the bones",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Why is a fossil that arrives with no field notes close to worthless as evidence?",
            options: [
              "Collecting destroys the context the research questions are about",
              "Museums are required to reject specimens lacking a written catalog entry",
              "Undocumented bone cannot be scanned, sectioned or measured for publication",
              "The chemical preparation used on unlabelled specimens damages the original tissue",
            ],
            correctIndex: 0,
            explanation:
              "Layer, orientation, associated remains and surrounding rock cannot be recovered later. You get one chance, and the chance is a page.",
            sourceLessonSlug: "the-field-notebook",
          },
          {
            prompt: "What is the rule that makes a field notebook its own genre of writing?",
            options: [
              "Observation and interpretation are kept visibly separate",
              "Entries are written in the past tense and signed by two witnesses",
              "Every entry is copied into a second book kept at a different location",
              "Measurements are recorded before any sketch of the specimen is attempted",
            ],
            correctIndex: 0,
            explanation:
              "Memory does not store observation and inference separately. Paper can, and the gap between the two columns is where mistakes are later found.",
            sourceLessonSlug: "the-field-notebook",
          },
          {
            prompt: "Grinnell's standing instruction was to write the day's notes up the same day. Why?",
            options: [
              "Because you soon forget which certainties you actually saw",
              "Because ink applied to damp field paper becomes illegible within a week",
              "Because museum accession rules required notes to be dated on the day of collection",
              "Because specimens had to be cataloged before they could be shipped to the museum",
            ],
            correctIndex: 0,
            explanation:
              "The separation of observation from inference is only possible while you can still remember which was which.",
            sourceLessonSlug: "the-field-notebook",
          },
          {
            prompt: "Whose name appeared on the 1814 Philosophical Transactions paper describing the Lyme ichthyosaur?",
            options: [
              "Everard Home, with no mention of the Annings",
              "Mary Anning, with Everard Home as the second author",
              "Joseph Anning, who had found the skull in the cliff face",
              "William Buckland, writing on behalf of the Anning family",
            ],
            correctIndex: 0,
            explanation:
              "The family who found and excavated the specimen are not named in it. That absence is the structural fact lesson 7 explains.",
            sourceLessonSlug: "mary-anning-of-lyme-regis",
          },
          {
            prompt: "Why did Cuvier initially suspect the 1823 plesiosaur was a forgery?",
            options: [
              "Its neck carried an implausible number of vertebrae",
              "It had arrived in Paris without any accompanying stratigraphic notes",
              "Its limb bones resembled those of a species already known from Germany",
              "Its skull had been reconstructed in plaster before he was allowed to see it",
            ],
            correctIndex: 0,
            explanation:
              "An implausible specimen from a commercial dealer is exactly what a specialist should doubt. He examined the evidence and accepted it.",
            sourceLessonSlug: "mary-anning-of-lyme-regis",
          },
          {
            prompt: "What did Anning's observation about certain conical stones in ichthyosaur skeletons establish?",
            options: [
              "That they were fossil faeces containing fish bones and scales",
              "That ichthyosaurs had swallowed stones to help grind their food",
              "That the animals had died from obstructions lodged in the gut",
              "That the Lyme shales had been deposited in shallow fresh water",
            ],
            correctIndex: 0,
            explanation:
              "Buckland took up the observation, published on it in 1829, coined the term coprolite, and credited her. It turns a curiosity into a record of diet.",
            sourceLessonSlug: "mary-anning-of-lyme-regis",
          },
          {
            prompt: "What does Torrens argue has happened to Mary Anning's reputation over time?",
            options: [
              "She was written out, then rewritten as a saint",
              "Her finds were reattributed to her brother by later museum curators",
              "Her correspondence was destroyed and reconstructed from secondhand accounts",
              "Her specimens were cataloged under a dealer's name until the twentieth century",
            ],
            correctIndex: 0,
            explanation:
              "Both moves replace a working specialist with an easier story, which is why the course names the myths as well as the record.",
            sourceLessonSlug: "mary-anning-of-lyme-regis",
          },
          {
            prompt: "What made publication the decisive barrier for Anning rather than a matter of courtesy?",
            options: [
              "Fellowship of the Geological Society was closed to women",
              "The Transactions charged an author's fee she could not afford to pay",
              "Descriptions had to be submitted in Latin, which she had never been taught",
              "Specimens sold to a private buyer could not legally be described in print",
            ],
            correctIndex: 0,
            explanation:
              "The Society elected its first female Fellows in 1919, more than seventy years after her death. Fellowship was the route to the meeting and to the journal.",
            sourceLessonSlug: "whose-name-goes-on-the-paper",
          },
          {
            prompt: "Besides credit, what did the record lose when a Lyme specimen was described by someone who had not dug it?",
            options: [
              "The finder's observations of the cliff and the specimen in place",
              "The exact sale price, which would have dated the transaction precisely",
              "The preparation techniques, which were regarded as a commercial secret",
              "The comparative drawings, which were rarely reproduced in the journals",
            ],
            correctIndex: 0,
            explanation:
              "Someone who cannot publish cannot correct a wrong description or say which reconstruction the field evidence supports. That is a hole in the record.",
            sourceLessonSlug: "whose-name-goes-on-the-paper",
          },
          {
            prompt: "William Smith and Gideon Mantell were both men. What does the course draw from their difficulties?",
            options: [
              "The room where a claim becomes knowledge had several doors",
              "Institutional recognition in this period depended almost entirely on wealth",
              "Provincial researchers were barred by statute from publishing in London journals",
              "Naming rights were granted to whoever presented a specimen at a meeting first",
            ],
            correctIndex: 0,
            explanation:
              "Smith was excluded on class and Mantell outmanoeuvred by an opponent with institutional standing. The pattern is about access, and access failed in more than one way.",
            sourceLessonSlug: "whose-name-goes-on-the-paper",
          },
          {
            prompt: "In what year did the name Dinosauria first appear in print?",
            options: [
              "1842",
              "1841, in the meeting program",
              "1839, in a letter to the Geological Society",
              "1854, in the Crystal Palace guidebook",
            ],
            correctIndex: 0,
            explanation:
              "Owen presented at the 1841 British Association meeting; the printed report carrying the name appeared in 1842. What can be checked is the printed page.",
            sourceLessonSlug: "owen-names-dinosauria",
          },
          {
            prompt: "What position was Owen using the new group to argue for?",
            options: [
              "That the record shows no simple ascent from crude to advanced",
              "That extinct reptiles were direct ancestors of modern crocodiles",
              "That British strata were older than the equivalent French sequences",
              "That extinction happened in a single catastrophe rather than gradually",
            ],
            correctIndex: 0,
            explanation:
              "His observation that dinosaurs are not sprawling primitives was correct. The conclusion he drew from it did not survive, and the group he named did.",
            sourceLessonSlug: "owen-names-dinosauria",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════════
    // Section 3 · A picture, and an incentive
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "the-crystal-palace-dinosaurs",
      title: "9 · The Crystal Palace dinosaurs: wrong, and useful",
      section: "Section 3 · A picture, and an incentive",
      body: `They are still there. In a park in south London, in a lake, about thirty life-size sculptures of extinct animals stand where they were placed in 1854, and several of them are wrong in ways that any child with a dinosaur book can now name.

They are also one of the most consequential objects in the history of public science, and this lesson is about holding those two facts in one hand.

## What they were

When the Crystal Palace was moved from Hyde Park to Sydenham after the Great Exhibition, the new site included a geological display. Benjamin Waterhouse Hawkins, a sculptor and natural history illustrator, built the animals in iron, brick and cement, working under Richard Owen's scientific direction. They opened to the public in 1854.

Nothing like it had been attempted anywhere. These were the first attempts anywhere to restore extinct animals at full size as living creatures rather than as skeletons or diagrams. On the last day of 1853, before the *Iguanodon* was finished, Hawkins held a dinner for about twenty guests inside the mold of its body, which tells you exactly how the project understood itself: as a spectacle with an argument inside it.

## What is wrong with them

The *Iguanodon* is a heavy quadruped with a horn on its nose. The animal was in fact largely bipedal, or at least capable of it, and the horn is a thumb spike, mounted in the wrong place.

The *Megalosaurus* is a humped four-legged animal shaped rather like a bear. It was a bipedal predator.

## Why those were reasonable readings

Here is the part that matters.

In 1854 *Iguanodon* was known mainly from teeth, scattered bones and a partial slab. There was no articulated skeleton to argue from. Owen was doing comparative anatomy on fragments: the limb bones were massive and pillar-like, the sacral vertebrae were fused, and both features indicate an animal whose legs carried its weight beneath the body rather than sprawling. From that, a heavy quadruped is a defensible inference. The thumb spike was an isolated conical bone with no articulated hand to place it in, and a nose horn is where such a bone had been found in living animals.

More importantly, Owen's picture was a large advance on what preceded it. Before him these animals were being imagined as scaled-up lizards. Owen's dinosaurs stand up on columnar legs. That structural claim, that these were not sprawling reptiles, is the part that turned out to be right, and it is the part the sculptures are built around.

## What fixed it, and when

In 1878 miners at Bernissart in Belgium hit a fissure containing dozens of *Iguanodon* skeletons, many largely complete and articulated. Louis Dollo spent decades working on them. The bipedal posture became visible, and the conical bone turned out to sit on the hand.

And Dollo's own mounts, which stood the animals upright in a tripod pose with the tail on the ground, were themselves revised a century later, for reasons lesson 13 covers. The correction got corrected. That is not embarrassing. That is the mechanism running.

## What they were useful for

Before 1854, deep time was an argument in books. After 1854 it was a place you could take your family on a Sunday, with a printed guide, in a park designed so that you walked past the animals in stratigraphic order.

Hundreds of thousands of people met the idea that the world had been inhabited by wholly unfamiliar animals, long before any humans, by standing next to one. The sculptures are wrong in detail and right in the thing they were for, which was to make deep time a public fact rather than a specialist claim.

They were granted the highest grade of listed status in Britain and have been repeatedly restored. They are also, now, evidence of a second kind: a dated snapshot of exactly what the best available reconstruction looked like at a moment, which is a thing almost nothing else in this course provides.

:::reveal Give the concrete reason Owen's quadrupedal Iguanodon was a defensible reading in 1854. ||| There was no articulated skeleton. He was reasoning from massive pillar-like limb bones and fused sacral vertebrae, which indicate legs carrying weight beneath the body, and a heavy quadruped follows from that.

:::reveal What was Owen right about, in the sculptures? ||| That these animals stood on columnar legs held under the body rather than sprawling like lizards. That structural claim survived, and the sculptures are built around it.

:::reveal What did the Bernissart find of 1878 provide that 1854 lacked? ||| Dozens of largely complete, articulated Iguanodon skeletons, which made the posture visible and placed the conical bone on the hand rather than the nose.

## Sources
- Norman, D. B. (1985). *The illustrated encyclopedia of dinosaurs*. Salamander Books.
- Owen, R. (1854). *Geology and inhabitants of the ancient world*. Crystal Palace Library.
- Secord, J. A. (2004). Monsters at the Crystal Palace. In S. de Chadarevian & N. Hopwood (Eds.), *Models: The third dimension of science* (pp. 138-169). Stanford University Press.`,
      recallContent: [
        {
          prompt: "Last lesson: what four things did Owen's act of naming Dinosauria accomplish?",
          answer:
            "It created an object of study, made membership testable by naming criteria, fixed an image of what these animals looked like, and gave one person control of the frame.",
        },
        {
          prompt: "Last lesson: why does the course refuse to treat Owen as a package to be accepted or rejected whole?",
          answer:
            "Because a good observation and a bad conclusion can travel in the same sentence. His grouping was sound; the anti-transmutation argument he built on it was not.",
        },
      ],
    },
    {
      slug: "the-bone-wars",
      title: "10 · The Bone Wars: an incentive to publish first",
      section: "Section 3 · A picture, and an incentive",
      body: `Between roughly 1872 and 1892, two American paleontologists spent their careers and much of their money trying to beat each other into print. The material they found is the foundation of North American dinosaur science. The way they found and reported it damaged the record in ways still being repaired.

## The two men

**Othniel Charles Marsh**, at Yale, funded by his uncle George Peabody, with a museum built on that money and a network of collectors in the field.

**Edward Drinker Cope**, in Philadelphia, independently wealthy at the start, faster in print than anyone, and eventually ruined by mining investments.

They were friendly at first. They named species after one another.

## The falling out

The story usually told is that Cope reconstructed an *Elasmosaurus* in 1868 with the skull on the end of the tail, and Marsh pointed it out publicly.

The error is real and documented: the plate was withdrawn and the reconstruction corrected. Whether that single episode caused twenty years of hostility is a tidy narrative, and the tidiness is a reason to be careful with it. Relations soured across the 1870s over collecting grounds, over accusations about who had bought whose fossils out from under whom, and over priority in naming. A single origin story is the shape a rivalry takes in retelling, not usually the shape it had.

## What the competition rewarded

This is the lesson, and it is a lesson about incentives rather than about two unpleasant men.

**Speed over completeness.** Publishing a name before your rival meant priority, and priority is permanent under the naming rules. So a name based on a fragment, published this month, beat a careful description published next year.

**Volume over verification.** Each man wanted a larger count of new species than the other, and a count is a metric that responds well to splitting.

**Secrecy over sharing.** Locality information was the asset. Telling anyone where a quarry was meant losing it, so quarry locations were concealed even from other scientists.

**Territory over collaboration.** Field crews worked in the same regions with instructions not to help, and in some accounts to obstruct.

Como Bluff in Wyoming, Garden Park and Morrison in Colorado, and the Nebraska and Kansas beds are the productive sites of this period. They produced *Allosaurus*, *Stegosaurus*, *Diplodocus*, *Triceratops*, *Apatosaurus* and much else. It is genuinely difficult to overstate how much material came out of those twenty years.

## How it ended

In January 1890 the *New York Herald* ran a series in which each man accused the other publicly, in a general-interest newspaper, of incompetence and misconduct. Both had been feeding material to the reporter. Both came out worse.

Cope died in 1897. Marsh died in 1899. Both were close to broke.

## The reason this is in this course

Nothing here required anyone to lie. Both men were serious scientists doing real work under a system that paid for a particular behavior, and they produced that behavior. The next lesson is about the bill.

:::reveal Name two behaviours the Marsh and Cope competition rewarded, and what each cost. ||| Speed over completeness, so a name on a fragment beat a careful description; and secrecy over sharing, so quarry locations were concealed even from other scientists. Volume over verification and territory over collaboration are the other two.

:::reveal Why does the course treat the Elasmosaurus skull story with caution? ||| The error is real and documented, but a single origin story is usually the shape a rivalry takes in retelling. Relations soured across the 1870s over collecting grounds, purchases and priority.

## Sources
- Jaffe, M. (2000). *The gilded dinosaur: The fossil war between E. D. Cope and O. C. Marsh and the rise of American science*. Crown.
- Rainger, R. (1991). *An agenda for antiquity: Henry Fairfield Osborn and vertebrate paleontology at the American Museum of Natural History, 1890-1935*. University of Alabama Press.
- Wallace, D. R. (1999). *The bonehunters' revenge: Dinosaurs, greed, and the greatest scientific feud of the Gilded Age*. Houghton Mifflin.`,
    },
    {
      slug: "what-the-bone-wars-cost",
      title: "11 · What the Bone Wars cost the record",
      section: "Section 3 · A picture, and an incentive",
      body: `The previous lesson described an incentive. This one is the invoice, itemised, because "it was bad for science" is a sentiment and the specific damage is a fact.

Read it as an audit, not as a verdict on two dead men.

## 1. Names that had to be undone

Marsh and Cope between them named well over a hundred new genera and species of dinosaur, and a large proportion of those names are no longer valid. Many were founded on material too fragmentary to diagnose, or on animals already named by the other, or on individuals of a species already described at a different age.

Every invalid name is work. Somebody, decades later, has to gather the type specimens, compare them, decide which name has priority, publish the synonymy, and then wait while the literature and the museum labels catch up. The clearest example is the subject of the next lesson.

## 2. Field data that was never recorded

This is the expensive one, and it is the direct sequel to lesson 5.

Collecting was fast, competitive and secretive. Quarry positions were concealed on purpose. Stratigraphic notes are thin or absent for a great deal of the material. The result is that for many important specimens from this period nobody can now say with confidence which horizon they came from, which means they cannot be used to say what lived alongside what, or which animals came earlier.

A bone with no horizon can still be described. It cannot answer a question about time, and time is the thing this entire course is about.

## 3. Reconstructions assembled from parts that did not belong together

In 1883 Marsh published a skeletal restoration of *Brontosaurus* that included a skull. No skull had been found with the skeleton. The head was supplied from other material.

That decision propagated. When Yale mounted the animal in 1931 it carried a skull of the wrong kind, and generations of visitors, illustrators and film-makers took their idea of the animal's head from that mount. The correction came in 1975, when John McIntosh and David Berman published the case that the skull was wrong, and Yale changed the head in 1979.

Nearly a century of a wrong head, from one undocumented substitution.

## 4. Specimens split between institutions

Material from a single quarry, sometimes a single animal, ended up divided between collections that were not speaking to each other. Reuniting a specimen across two museums is administratively harder than digging up a new one, and some of it has never been done.

## The honest counterweight

An audit has two columns.

Those twenty years produced an enormous quantity of superb material, and the Morrison Formation collections that came out of them are still central to Jurassic dinosaur science today. *Stegosaurus*, *Triceratops*, *Diplodocus* and *Allosaurus* all come from this period. The competition also drove the funding, the field seasons and the sheer effort that produced them.

The accurate statement is not that the Bone Wars were a disaster. It is narrower and more useful: **the incentive was to be first, not to be checkable, and the parts of the record that only serve checkability are the parts that were not kept.**

## Why this is the most transferable lesson in the course

Look at what the system rewarded: publication count, priority, speed, exclusive access to a data source.

Then look at anything that runs on similar metrics now. A research field ranked on publication counts. A newsroom paid by the first post. A team measured on tickets closed. A model of the world assembled from documents nobody can trace back.

In none of those cases does anybody have to lie. You get the behavior you pay for, and what quietly stops being produced is whatever only the checker needed.

**The question to carry: what does this system reward, and what does that make invisible?**

:::reveal Why can many specimens collected during the Bone Wars not be used to answer questions about time? ||| Quarry positions were concealed and stratigraphic notes are thin or missing, so nobody can say with confidence which horizon a specimen came from. Without a horizon it cannot show what lived alongside what.

:::reveal Trace the cost of Marsh's 1883 decision to publish a restoration with a skull that had not been found with the skeleton. ||| Yale's 1931 mount carried the wrong kind of head, and it shaped the public image of the animal until McIntosh and Berman published the correction in 1975 and the skull was changed in 1979.

:::reveal State the narrow, accurate claim about what the Bone Wars cost. ||| The incentive was to be first rather than checkable, so the parts of the record that only serve checkability are the parts that were not kept.

## Sources
- McIntosh, J. S., & Berman, D. S. (1975). Description of the palate and lower jaw of the sauropod dinosaur Diplodocus (Reptilia: Saurischia) with remarks on the nature of the skull of Apatosaurus. *Journal of Paleontology, 49*(1), 187-199.
- Rainger, R. (1991). *An agenda for antiquity: Henry Fairfield Osborn and vertebrate paleontology at the American Museum of Natural History, 1890-1935*. University of Alabama Press.
- Wallace, D. R. (1999). *The bonehunters' revenge: Dinosaurs, greed, and the greatest scientific feud of the Gilded Age*. Houghton Mifflin.`,
      recallContent: [
        {
          prompt: "Last lesson: what did the Marsh and Cope rivalry reward, and how did it end publicly?",
          answer:
            "Speed over completeness, volume over verification, secrecy over sharing, and territory over collaboration. It ended with both men accusing each other in the New York Herald in January 1890, and both came out worse.",
        },
        {
          prompt: "Last lesson: name two productive sites of the Bone Wars period.",
          answer:
            "Como Bluff in Wyoming, and Garden Park or Morrison in Colorado. The Kansas and Nebraska beds also produced heavily.",
        },
      ],
    },
    {
      slug: "brontosaurus",
      title: "12 · Brontosaurus: the animal that was, was not, and may be again",
      section: "Section 3 · A picture, and an incentive",
      body: `This is the most famous name in the history of dinosaur taxonomy, and almost everything most people know about it is a simplification of a genuinely interesting argument.

Get the sequence right first. The interpretation is worth nothing without it.

## The sequence

**1877.** Marsh names *Apatosaurus ajax* from a partial sauropod skeleton.

**1879.** Marsh names *Brontosaurus excelsus* from another, more complete sauropod skeleton.

**1903.** Elmer Riggs, working at the Field Columbian Museum in Chicago, examines both and argues that the differences between them are consistent with age rather than with being separate genera: the *Apatosaurus* type is a younger, less fully fused individual of the same kind of animal. Under the rules of zoological naming the older name wins, so *Brontosaurus* becomes a junior synonym of *Apatosaurus*.

Riggs published that in 1903. Not in the 1970s, and not because of a museum publicity campaign. In 1903.

## Why the name did not go away

Because publication is not the same as circulation, which is a theme this course keeps returning to.

The American Museum of Natural History mounted its great sauropod in 1905 and labeled it *Brontosaurus*. Museums, encyclopaedias, films, toys and cartoons used the name for most of the twentieth century. In 1989 the United States Postal Service issued a stamp reading "Brontosaurus" and received enough complaint to make the newspapers, which prompted Stephen Jay Gould to write an essay defending the public's attachment to the name while explaining why specialists had dropped it.

So for roughly ninety years the technical literature said one thing and the world said another, and both groups were being perfectly reasonable. The literature was following priority. The public was using a name that had been given to them by the institutions that were now correcting them.

## 2015, and why it is not a simple restoration

In 2015 Emanuel Tschopp, Octávio Mateus and Roger Benson published a specimen-level phylogenetic analysis of Diplodocidae, the largest of its kind, examining hundreds of anatomical characters across many specimens. They concluded that the *Brontosaurus* specimens differ from *Apatosaurus* by about as much as other accepted sauropod genera differ from each other, and proposed reinstating *Brontosaurus* as a valid genus.

This is where care is required, because the popular version of this story is "scientists said Brontosaurus was real again."

**It is a proposal, not a ruling.** There is no authority that decides which genera are valid. Names are stabilised by usage in the literature, and the naming code governs priority and formation, not whether two groups are different enough to be separate genera.

**It is not universally accepted.** Some workers use *Brontosaurus*, some continue to treat it as a synonym of *Apatosaurus*, and later analyses have come out on both sides. As of now this is a live disagreement rather than a settled reversal.

**And the disagreement is not about the fossils.** Everyone involved is looking at the same bones and largely agrees on their anatomy and their relationships. The argument is about where to draw a boundary called "genus" on a branching tree.

## The point worth more than the trivia

Species and genera are real groups being described with a ranking system that humans invented and that nature never agreed to use. The tree of relationships is a finding. The decision about which branch gets called a genus is a convention applied to that finding.

So "is *Brontosaurus* real?" is two questions wearing one coat. Are those specimens a distinct, diagnosable group of animals? Largely agreed yes. Is that group different enough to earn its own genus name? Argued, and it is an argument about the rank system.

Learning to see when a dispute is about the world and when it is about the categories we are describing the world with is one of the most useful things this course can hand you, and it applies to far more than sauropods.

:::reveal Who argued that Brontosaurus was a junior synonym of Apatosaurus, and when? ||| Elmer Riggs, in 1903, on the grounds that the differences were consistent with the Apatosaurus type being a younger individual of the same kind of animal. Priority then gave the older name.

:::reveal Why did the name Brontosaurus stay in public use for most of the twentieth century? ||| Because publication is not circulation. Museums, films, encyclopaedias and toys kept using it, including the AMNH mount labeled Brontosaurus from 1905.

:::reveal What exactly is being argued about in the Brontosaurus dispute, and what is NOT being argued about? ||| Not the fossils: the anatomy and the relationships are largely agreed. The argument is about where to draw the boundary called genus on a branching tree, which is a question about a ranking convention.

## Sources
- Gould, S. J. (1991). *Bully for Brontosaurus: Reflections in natural history*. W. W. Norton.
- Marsh, O. C. (1879). Notice of new Jurassic reptiles. *American Journal of Science, s3-18*(108), 501-505.
- Riggs, E. S. (1903). Structure and relationships of opisthocoelian dinosaurs. Part I: Apatosaurus Marsh. *Field Columbian Museum Publication 82, Geological Series, 2*(4), 165-196.
- Tschopp, E., Mateus, O., & Benson, R. B. J. (2015). A specimen-level phylogenetic analysis and taxonomic revision of Diplodocidae (Dinosauria, Sauropoda). *PeerJ, 3*, e857.`,
    },
    {
      slug: "quiz-picture-and-incentive",
      title: "Section 3 quiz · A picture, and an incentive",
      section: "Section 3 · A picture, and an incentive",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What was genuinely new about the Crystal Palace animals when they opened in 1854?",
            options: [
              "They restored extinct animals at full size as living creatures",
              "They were the first sculptures ever cast in iron and cement together",
              "They were the first extinct animals to be given scientific names in public",
              "They were the first display to arrange fossils in stratigraphic sequence",
            ],
            correctIndex: 0,
            explanation:
              "Nothing like it had been attempted anywhere. Before them, extinct animals were skeletons and diagrams, not creatures you could stand beside.",
            sourceLessonSlug: "the-crystal-palace-dinosaurs",
          },
          {
            prompt: "On what evidence did Owen reconstruct Iguanodon as a heavy quadruped?",
            options: [
              "Massive pillar-like limb bones and fused sacral vertebrae",
              "A complete articulated skeleton recovered from a Sussex quarry",
              "Trackways showing four sets of prints made by a single animal",
              "Comparison with an African rhinoceros skeleton held in London",
            ],
            correctIndex: 0,
            explanation:
              "There was no articulated skeleton in 1854. Those two features indicate legs carrying weight beneath the body, and a heavy quadruped follows from them.",
            sourceLessonSlug: "the-crystal-palace-dinosaurs",
          },
          {
            prompt: "Which part of Owen's picture of these animals turned out to be right?",
            options: [
              "That they stood on columnar legs held under the body",
              "That they were confined to swamps and shallow coastal lagoons",
              "That their skin was covered in overlapping bony scales like a lizard",
              "That the conical bone found with Iguanodon sat on the animal's snout",
            ],
            correctIndex: 0,
            explanation:
              "Before Owen these animals were being imagined as scaled-up sprawling lizards. The structural claim survived even as the details were corrected.",
            sourceLessonSlug: "the-crystal-palace-dinosaurs",
          },
          {
            prompt: "What did the 1878 Bernissart discovery in Belgium provide?",
            options: [
              "Dozens of largely complete articulated Iguanodon skeletons",
              "The first fossilised Iguanodon eggs found anywhere in Europe",
              "A set of trackways establishing how fast the animals could travel",
              "Skin impressions showing the color pattern of a large ornithopod",
            ],
            correctIndex: 0,
            explanation:
              "Posture became visible and the conical bone turned out to sit on the hand. Dollo's own upright tripod mounts were themselves revised a century later.",
            sourceLessonSlug: "the-crystal-palace-dinosaurs",
          },
          {
            prompt: "Which behaviour did the Marsh and Cope competition reward?",
            options: [
              "Naming a species fast, on fragmentary material",
              "Excavating slowly so that the quarry wall could be photographed",
              "Publishing joint descriptions so that priority could not be disputed",
              "Depositing duplicate specimens at a second museum for verification",
            ],
            correctIndex: 0,
            explanation:
              "Priority is permanent under the naming rules, so a name published this month on a fragment beat a careful description published next year.",
            sourceLessonSlug: "the-bone-wars",
          },
          {
            prompt: "Why does the course treat the Elasmosaurus skull episode with caution?",
            options: [
              "A single origin story is usually a retelling's shape, not a rivalry's",
              "The reconstruction was never actually published or circulated to anyone",
              "Neither man mentioned the incident in any surviving letter or notebook",
              "The specimen was later shown to belong to a different genus entirely",
            ],
            correctIndex: 0,
            explanation:
              "The error itself is real and documented. Relations soured across the 1870s over collecting grounds, purchases and priority, which is a messier and more likely account.",
            sourceLessonSlug: "the-bone-wars",
          },
          {
            prompt: "How did the Marsh and Cope rivalry become a public spectacle in 1890?",
            options: [
              "Each accused the other in the New York Herald",
              "Their field crews fought over a quarry in front of a railway survey party",
              "Congress opened hearings into the funding of the federal geological surveys",
              "Both submitted rival mounted skeletons to the same international exhibition",
            ],
            correctIndex: 0,
            explanation:
              "Both had been feeding material to the reporter, and both came out worse. Cope died in 1897 and Marsh in 1899, both close to broke.",
            sourceLessonSlug: "the-bone-wars",
          },
          {
            prompt: "Which loss from the Bone Wars period does the course call the expensive one?",
            options: [
              "Field data, so many specimens cannot be tied to a horizon",
              "Bone damaged by the dynamite used to open the Wyoming quarries faster",
              "Correspondence destroyed by both men's estates after their deaths",
              "Casts and molds discarded when the two museums reorganised their stores",
            ],
            correctIndex: 0,
            explanation:
              "A bone with no horizon can still be described, but it cannot answer a question about time, and time is what this course is about.",
            sourceLessonSlug: "what-the-bone-wars-cost",
          },
          {
            prompt: "What was the consequence of Marsh publishing an 1883 restoration with a skull not found with the skeleton?",
            options: [
              "Yale's mount carried the wrong head until 1979",
              "The species was declared invalid by the naming commission in 1912",
              "Every later sauropod mount in America was built without a skull at all",
              "Field crews stopped collecting sauropod skulls for the next two decades",
            ],
            correctIndex: 0,
            explanation:
              "McIntosh and Berman published the correction in 1975 and the skull was changed in 1979. Nearly a century of a wrong head from one undocumented substitution.",
            sourceLessonSlug: "what-the-bone-wars-cost",
          },
          {
            prompt: "What is the narrow, accurate claim the course makes about the Bone Wars?",
            options: [
              "The incentive was to be first, not to be checkable",
              "The competition produced almost nothing of lasting scientific value",
              "The damage was caused by the two men's personalities rather than by the system",
              "The material was so poorly collected that the Morrison Formation is now useless",
            ],
            correctIndex: 0,
            explanation:
              "Those twenty years produced Stegosaurus, Triceratops, Diplodocus and Allosaurus. What was not kept is whatever only a later checker would have needed.",
            sourceLessonSlug: "what-the-bone-wars-cost",
          },
          {
            prompt: "On what grounds did Riggs argue in 1903 that Brontosaurus was a junior synonym of Apatosaurus?",
            options: [
              "The differences were consistent with age, not with separate genera",
              "The two type specimens had been collected from the same single quarry",
              "Marsh had failed to designate a valid type specimen for the later name",
              "The skeletons differed only in the number of vertebrae in the tail",
            ],
            correctIndex: 0,
            explanation:
              "The Apatosaurus type is a younger, less fully fused individual of the same kind of animal, and priority then gives the older name.",
            sourceLessonSlug: "brontosaurus",
          },
          {
            prompt: "What is actually in dispute in the Brontosaurus argument after Tschopp and colleagues published in 2015?",
            options: [
              "Where to draw the boundary called genus on a branching tree",
              "Whether the specimens in question come from the Morrison Formation at all",
              "Whether Marsh or Riggs holds priority for naming the animal originally",
              "Whether the skeletons represent one species or several dozen local forms",
            ],
            correctIndex: 0,
            explanation:
              "The anatomy and the relationships are largely agreed. It is a proposal rather than a ruling, it is not universally accepted, and it turns on a ranking convention.",
            sourceLessonSlug: "brontosaurus",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════════
    // Section 4 · The picture flips
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "the-swamp-dwelling-tail-dragger",
      title: "13 · Fifty years of the swamp-dwelling tail-dragger",
      section: "Section 4 · The picture flips",
      body: `If you are over about thirty, this is the animal you were taught. If you are younger, it is the animal in the old documentaries your parents watched.

**The sauropod stands in a lake.** It is too heavy to hold itself up on land, so it lives in water that carries its weight, and it breathes through nostrils placed conveniently on top of its skull like a snorkel.

**The theropod stands upright like a kangaroo**, body angled up, tail dragging on the ground behind it.

**All of them are sluggish**, cold-blooded, slow-growing, dim, and headed for extinction because they were an inferior design that mammals eventually replaced.

That picture held, roughly, from the end of the nineteenth century into the 1960s. It was not laziness. Take each piece.

## The swamp had an argument behind it

A large sauropod is very heavy, and in the early twentieth century the strength of bone and the mechanics of large-animal support were not well understood. Buoyancy solves a problem that looked real. Water supports the mass, and an animal that could not plausibly hold itself up on land can hold itself up in a lake.

And the nostrils genuinely are high on the skull in many sauropods. That is an observation, not an invention. Reading it as a snorkel is an inference, and it is the sort of inference a careful person makes when it fits the other thing they believe.

## The tripod had a source

Louis Dollo mounted the Bernissart *Iguanodon* skeletons upright, tail down, by analogy with a kangaroo, and that mount became the template. Museums copied it. The American Museum of Natural History mounted its *Tyrannosaurus* in that posture in 1915, and it stood that way for decades until the museum remounted it horizontally in the 1990s.

Notice the mechanism there, because it is not about anyone's beliefs. **A mounted skeleton is a hypothesis built in steel and plaster, at great expense, in a public building.** Changing it costs money, closes a gallery, and requires someone to decide the old one was wrong. Infrastructure slows revision, which is a fact about institutions rather than about evidence.

## The sluggishness had a framework

Dinosaurs were reptiles. Living reptiles are ectotherms with low sustained activity. Dinosaurs were extinct and mammals were not. Fitting those together into "an inferior design that was replaced" is a reasonable-looking synthesis, and it was doing what a good framework does: making a mass of unrelated facts into one story.

It was wrong. It was also **coherent**, and coherence is what makes a picture survive.

## What began to break it

**The water argument.** In 1951 Kenneth Kermack pointed out a problem that is simply physical: at the depth required for the water to support the animal, the pressure on the chest would exceed what the muscles could work against, so the animal could not inhale. The snorkel does not work.

**Trackways.** Sauropod trackways cross firm ground in quantity, with tails not touching it, and record animals walking, sometimes in groups, on land.

**Bone.** Sectioned dinosaur bone turned out to be densely vascularised and structured in a way associated with fast growth, not with slow reptilian growth.

Those are three independent lines, each cheap to check, all pointing the same way. And the picture still did not turn over for another twenty years, because a coherent framework is not defeated by inconvenient facts. It is defeated by a better framework, and the next two lessons are about where that came from.

:::reveal Give the physical argument that broke the swimming sauropod. ||| At the depth needed for water to support the animal, the pressure on the chest would exceed what the breathing muscles could work against, so it could not inhale. Kermack published it in 1951.

:::reveal Why is a museum mount a slow thing to correct, and what does that have to do with evidence? ||| A mount is a hypothesis built in steel and plaster in a public building. Changing it costs money and closes a gallery, so revision is slowed by infrastructure rather than by the evidence.

:::reveal What actually keeps a wrong picture alive, on this lesson's account? ||| Coherence. A framework that makes a mass of unrelated facts into one story survives inconvenient facts, and is displaced only by a better framework.

## Sources
- Bakker, R. T. (1971). Ecology of the brontosaurs. *Nature, 229*(5281), 172-174.
- Kermack, K. A. (1951). A note on the habits of sauropods. *Annals and Magazine of Natural History, 4*(45), 830-832.
- Osborn, H. F. (1916). Skeletal adaptations of Ornitholestes, Struthiomimus, Tyrannosaurus. *Bulletin of the American Museum of Natural History, 35*(43), 733-771.`,
      recallContent: [
        {
          prompt: "Last lesson: what exactly is argued about in the Brontosaurus dispute, and what is agreed?",
          answer:
            "The anatomy and the relationships of the specimens are largely agreed. What is argued is where to draw the boundary called genus on a branching tree, which is a question about a ranking convention rather than about the animals.",
        },
        {
          prompt: "Last lesson: why did the name Brontosaurus survive in public for most of the twentieth century?",
          answer:
            "Because publication is not circulation. Riggs published the synonymy in 1903, and museums, films, encyclopaedias and toys went on using the name given to the public by those same institutions.",
        },
      ],
    },
    {
      slug: "ostrom-and-deinonychus",
      title: "14 · Ostrom, Deinonychus, and the picture flipping",
      section: "Section 4 · The picture flips",
      body: `In 1964, in the Cloverly Formation of southern Montana, a Yale team led by John Ostrom collected the remains of a theropod nobody had a category for. He described it in 1969 and named it *Deinonychus antirrhopus*, terrible claw, counterbalancing.

## What the anatomy said

Ostrom's description is worth reading as a piece of reasoning, because the conclusion is forced by the bones rather than argued around them.

The animal is light. The limb bones are slender, the build is not that of something that stands about in water.

The second toe carries a large, strongly recurved, sickle-shaped claw, held clear of the ground. A claw that is kept off the ground is being kept sharp, and it is a weapon rather than a tool for walking.

To use that claw, the animal has to stand on one leg and strike with the other, which requires balance during a violent movement.

And the tail is stiffened along most of its length by long bony rods, so it cannot drag limply. It is held out behind as a rigid counterweight, which is what the species name refers to.

Put those together and you do not have a sluggish reptile. You have an agile, fast, actively predatory animal whose whole skeleton is organized around balance and speed. There is no version of this animal that lounges in a swamp.

## The second thing Ostrom noticed

Working on *Deinonychus*, Ostrom kept seeing bird anatomy: in the wrist, the shoulder girdle, the hand, the pelvis and the foot.

In 1970 he identified a specimen in the Teyler Museum in Haarlem, cataloged as a pterosaur, as an *Archaeopteryx*, the fourth known at the time. Handling both animals put the resemblance in front of him constantly, and across the 1970s he argued the case in detail: birds are the descendants of small theropod dinosaurs.

## Why that argument had been available for a century and had not won

Thomas Henry Huxley had argued something very similar in 1868, comparing *Compsognathus* with *Archaeopteryx*. It did not stick.

The main obstacle by the twentieth century was a specific, checkable, published objection. In 1926 Gerhard Heilmann's *The Origin of Birds* laid out the case for theropod ancestry and then rejected it on one point: birds have a furcula, formed from fused clavicles, and no theropod then known preserved clavicles. Under the widely accepted principle that a structure fully lost in a lineage is not regained, theropods could not be bird ancestors. Heilmann therefore proposed a more distant common ancestor.

**That was good reasoning from what he had.** Heilmann's book is careful, thorough and honest about its own reasoning, and it convinced people for decades because it deserved to.

It was undone by specimens. Clavicles and then true furculae were identified in theropod after theropod, and the objection dissolved, not because anyone refuted the logic but because the premise turned out to be an absence of evidence rather than evidence of absence.

## The shape of this lesson

The picture flipped because of anatomy: one well-preserved animal that could not be fitted into the old story, described by someone willing to say so.

And the objection that had blocked it for forty years was not stupidity. It was a real argument from a real observation that was later found to be a gap in the sample.

**Absence of evidence is weak evidence of absence, and it gets weaker the harder the thing is to preserve.** Clavicles are thin and easily lost. Feathers, as lesson 16 shows, are worse.

:::reveal Name two features of Deinonychus that rule out a sluggish animal, and say why. ||| The sickle claw on the second toe is held clear of the ground, so it is a weapon and its use requires balancing on one leg. And the tail is stiffened by bony rods into a rigid counterweight rather than a dragging limb.

:::reveal What was Heilmann's 1926 objection to theropod ancestry for birds? ||| No theropod then known preserved clavicles, and birds have a furcula formed from fused clavicles. Under the principle that a fully lost structure is not regained, that ruled theropods out.

:::reveal What dissolved Heilmann's objection, and what general lesson does the course draw? ||| Clavicles and furculae were found in theropod after theropod. The premise was an absence of evidence rather than evidence of absence, and thin, rarely preserved structures make that inference weakest.

## Sources
- Heilmann, G. (1926). *The origin of birds*. Witherby.
- Huxley, T. H. (1868). On the animals which are most nearly intermediate between birds and reptiles. *Annals and Magazine of Natural History, 4*(2), 66-75.
- Ostrom, J. H. (1969). Osteology of Deinonychus antirrhopus, an unusual theropod from the Lower Cretaceous of Montana. *Bulletin of the Peabody Museum of Natural History, 30*, 1-165.
- Ostrom, J. H. (1970). Archaeopteryx: Notice of a "new" specimen. *Science, 170*(3957), 537-538.
- Ostrom, J. H. (1976). Archaeopteryx and the origin of birds. *Biological Journal of the Linnean Society, 8*(2), 91-182.`,
    },
    {
      slug: "bakker-and-warm-blood",
      title: "15 · Bakker, warm blood, and an argument that was won in parts",
      section: "Section 4 · The picture flips",
      body: `Robert Bakker was an undergraduate in Ostrom's orbit at Yale when he published an article in the Peabody Museum's magazine in 1968 titled "The Superiority of Dinosaurs." He was arguing, at twenty-three, that dinosaurs had been active, fast-growing, socially complex animals with high metabolic rates, and that the whole sluggish picture was wrong.

He spent the next two decades making the case in *Nature*, in monographs, and eventually in a popular book that put the argument in front of everyone.

## The evidence he assembled

Bakker's method was to gather independent lines that all pointed the same way rather than to rest on one decisive fact.

**Posture and gait.** Limbs held vertically under the body, with trackways showing narrow gauge and no tail drag. Sprawling animals do not walk like that, and sustained upright locomotion is metabolically expensive.

**Bone histology.** Sectioned dinosaur bone is densely vascularised and fibrolamellar in texture, a structure associated with rapid sustained growth, and closer to what is seen in birds and mammals than in living reptiles.

**Latitude.** Dinosaur remains occur at high palaeolatitudes, in places with long dark winters, which is difficult for an animal depending entirely on external heat.

**Predator to prey ratios.** Bakker argued that the proportion of predators to prey in fossil assemblages resembled that of warm-blooded communities, since an endothermic predator eats far more and therefore fewer can be supported.

**Birds.** Birds are dinosaurs and birds are endotherms, which puts the trait inside the group beyond dispute.

## Where he overreached, and why saying so matters

The predator to prey ratio argument drew heavy criticism and does not hold up well. Fossil assemblages are shaped by how animals die, how bodies are transported, and what preserves, so the ratio in a quarry is not a census of a living community. It was a bold argument from data that could not carry it.

Bakker also framed the whole thing as a fight. His 1986 book is called *The Dinosaur Heresies*, casting the existing consensus as an orthodoxy and himself as the heretic. That framing is a rhetorical instrument, and it worked: it got the argument attention it might otherwise not have had.

It is worth being honest that the framing did work, and equally honest that it is not evidence. "The establishment is suppressing me" is a claim made just as loudly by people who are simply wrong, which is why this series' fourth course spends a whole lesson on it. Bakker won on bone histology and biomechanics, not on being a heretic.

## Where the question actually stands

This is the part that gets flattened, and flattening it would break this course's own thesis.

The modern position is not "Bakker was right, dinosaurs were mammals with scales." It is that dinosaurs were physiologically diverse, that many had growth rates and metabolic rates well above those of living reptiles, and that the traditional two-box choice between cold-blooded and warm-blooded was the wrong instrument for the question.

Some researchers have proposed intermediate categories: a 2014 analysis in *Science* by John Grady and colleagues placed many dinosaurs in a "mesothermic" middle range, and that proposal drew published methodological criticism in the same journal. Work on eggshell isotopes, on growth rings and on the chemistry of metabolic byproducts has continued to refine estimates for individual groups, and the answers differ between groups.

So: the sluggish picture is gone and is not coming back. What replaced it is a moving, partly resolved account in which the interesting question has changed from "were they warm-blooded" to "what was this particular animal's growth rate and activity budget, and how do we measure it."

That is what progress usually looks like. Not one picture swapped for another, but a bad question replaced by better ones.

:::reveal Name three independent lines of evidence Bakker used for high dinosaur metabolic rates. ||| Upright posture and trackways showing narrow gauge and no tail drag, bone histology showing dense vascularisation and fast growth, high-latitude occurrences with long dark winters, and the fact that birds are endothermic dinosaurs.

:::reveal Which of Bakker's arguments does the course say does not hold up, and why? ||| The predator to prey ratio argument. Fossil assemblages are shaped by how animals die, how bodies are transported and what preserves, so a quarry ratio is not a census of a living community.

:::reveal How has the question itself changed since Bakker? ||| From "were dinosaurs warm-blooded" to what a particular animal's growth rate and activity budget were and how to measure them. The two-box choice turned out to be the wrong instrument.

## Sources
- Bakker, R. T. (1968). The superiority of dinosaurs. *Discovery, 3*(2), 11-22.
- Bakker, R. T. (1972). Anatomical and ecological evidence of endothermy in dinosaurs. *Nature, 238*(5359), 81-85.
- Bakker, R. T. (1986). *The dinosaur heresies: New theories unlocking the mystery of the dinosaurs and their extinction*. William Morrow.
- Bakker, R. T., & Galton, P. M. (1974). Dinosaur monophyly and a new class of vertebrates. *Nature, 248*(5444), 168-172.
- Grady, J. M., Enquist, B. J., Dettweiler-Robinson, E., Wright, N. A., & Smith, F. A. (2014). Evidence for mesothermy in dinosaurs. *Science, 344*(6189), 1268-1272.`,
      recallContent: [
        {
          prompt: "Last lesson: what about Deinonychus made the old picture untenable?",
          answer:
            "A light build, a large recurved sickle claw held clear of the ground, which requires balancing on one leg to strike, and a tail stiffened by bony rods into a rigid counterweight. The skeleton is organized around balance and speed.",
        },
        {
          prompt: "Last lesson: state the general rule the course draws from Heilmann's clavicle objection.",
          answer:
            "Absence of evidence is weak evidence of absence, and it gets weaker the harder the structure is to preserve. Clavicles are thin and easily lost, so their absence in the known sample was a gap rather than a fact.",
        },
      ],
    },
    {
      slug: "feathers-at-liaoning",
      title: "16 · Feathers: Liaoning, and what settled it",
      section: "Section 4 · The picture flips",
      body: `By the early 1990s the case that birds descend from theropod dinosaurs rested on skeletal anatomy: shared features of the wrist, shoulder, hip and foot, in the right animals, in the right order in time.

It was a strong case, and it had one visible gap. Nobody had a non-avian dinosaur with feathers on it.

## What came out of Liaoning

The Yixian Formation in northeastern China preserves an Early Cretaceous ecosystem, roughly 125 million years old, in fine volcanic-ash lake sediments that record soft tissue. From the mid-1990s it began producing specimens that closed the gap.

**Sinosauropteryx**, published in *Nature* in 1998, is a small theropod with a dark halo of fine filaments running along its back and tail.

**Caudipteryx** and **Protarchaeopteryx**, published the same year, carry unmistakable vaned feathers with a central shaft and barbs, on animals that are clearly not birds and could not fly.

**Microraptor**, published in 2003, has long vaned feathers on all four limbs.

The gap closed, and it closed in the way that makes a prediction convincing: the feathers turned up on the animals the skeletal phylogeny had already said were close to birds, not scattered at random through the group.

## The alternative reading, which was published and had to be answered

The filaments on *Sinosauropteryx* are not obviously feathers to the eye. A group of researchers argued in print, in 2007, that they were degraded collagen fibres from the skin, which is a real preservational phenomenon that can look like a fibrous halo.

That objection was answerable, and the answer is the good part.

Under an electron microscope the filaments contain small structures matching **melanosomes**, the pigment-bearing organelles found in feathers and hair, and they are arranged inside the filament rather than in the skin below it. Collagen has no equivalent. In 2010 two teams used melanosome shape, which correlates with color in living birds, to reconstruct plumage patterns: a *Sinosauropteryx* with a ginger and white banded tail, and an *Anchiornis* with a dark body, striped wings and a reddish crown.

An objection that was published in a journal, tested with a new instrument, and answered with a result that also produced the color of a Cretaceous animal is about as good as this process gets.

## The forgery, which belongs here

In 1999 a specimen from Liaoning was presented at a press conference and published in a popular magazine as a missing link between dinosaurs and birds, under the name Archaeoraptor.

It was a composite. Someone had assembled it from at least two animals, and the tail belonged to a *Microraptor*. Xu Xing raised the alarm after recognizing the tail; a CT study published in *Nature* in 2001 documented the construction in detail.

Two things to take from it, and both matter.

**It was caught quickly, by the field, using its own methods.** The forgery is evidence that the checking works, not that the science is unreliable.

**And it got as far as it did because it skipped the checking.** It went to a press conference and a popular magazine rather than through peer review, and it had come through the commercial fossil trade with no provenance.

That last point closes a loop this course opened in lesson 5. Liaoning fossils are commercially valuable, and specimens routinely reach the market having been collected without records, sometimes assembled from pieces to increase their price. When the field data is gone, the specimen has to be assessed on the object alone. Sometimes that is enough. It is never as good as knowing where it came from, and every institution working there now treats provenance as a first question rather than a formality.

:::reveal Why is it significant that feathers turned up on the specific animals they did? ||| Because the skeletal phylogeny had already identified those animals as close relatives of birds. The feathers appeared where the existing tree predicted them, rather than scattered at random through the group.

:::reveal What was the collagen objection to Sinosauropteryx, and how was it answered? ||| That the filaments were degraded skin collagen, a real preservational effect. Electron microscopy found melanosomes inside the filaments, which collagen lacks, and their shape was later used to reconstruct the animal's color.

:::reveal What are the two lessons of the Archaeoraptor forgery? ||| That the field caught it quickly using its own methods, and that it got as far as it did by going to a press conference instead of peer review, on a specimen bought through the trade with no provenance.

## Sources
- Chen, P., Dong, Z., & Zhen, S. (1998). An exceptionally well-preserved theropod dinosaur from the Yixian Formation of China. *Nature, 391*(6663), 147-152.
- Ji, Q., Currie, P. J., Norell, M. A., & Ji, S. (1998). Two feathered dinosaurs from northeastern China. *Nature, 393*(6687), 753-761.
- Li, Q., Gao, K.-Q., Vinther, J., Shawkey, M. D., Clarke, J. A., D'Alba, L., Meng, Q., Briggs, D. E. G., & Prum, R. O. (2010). Plumage color patterns of an extinct dinosaur. *Science, 327*(5971), 1369-1372.
- Lingham-Soliar, T., Feduccia, A., & Wang, X. (2007). A new Chinese specimen indicates that "protofeathers" in the Early Cretaceous theropod dinosaur Sinosauropteryx are degraded collagen fibres. *Proceedings of the Royal Society B, 274*(1620), 1823-1829.
- Rowe, T., Ketcham, R. A., Denison, C., Colbert, M., Xu, X., & Currie, P. J. (2001). The Archaeoraptor forgery. *Nature, 410*(6828), 539-540.
- Xu, X., Zhou, Z., Wang, X., Kuang, X., Zhang, F., & Du, X. (2003). Four-winged dinosaurs from China. *Nature, 421*(6921), 335-340.
- Zhang, F., Kearns, S. L., Orr, P. J., Benton, M. J., Zhou, Z., Johnson, D., Xu, X., & Wang, X. (2010). Fossilized melanosomes and the colour of Cretaceous dinosaurs and birds. *Nature, 463*(7284), 1075-1078.`,
    },
    {
      slug: "quiz-the-picture-flips",
      title: "Section 4 quiz · The picture flips",
      section: "Section 4 · The picture flips",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What problem did placing sauropods in water appear to solve?",
            options: [
              "How an animal that heavy supported its own weight",
              "How an animal that large found enough plant food each day",
              "How an animal with no chewing teeth digested tough vegetation",
              "How an animal that size regulated its temperature in a hot climate",
            ],
            correctIndex: 0,
            explanation:
              "The mechanics of support in very large animals were not well understood, and buoyancy answered a difficulty that looked real at the time.",
            sourceLessonSlug: "the-swamp-dwelling-tail-dragger",
          },
          {
            prompt: "What was Kermack's 1951 objection to the swimming sauropod?",
            options: [
              "At that depth the animal could not inhale against the pressure",
              "The bones were too dense for the animal to float at any depth",
              "Freshwater lakes of the period were too shallow to submerge one",
              "The tail vertebrae showed no attachment sites for swimming muscles",
            ],
            correctIndex: 0,
            explanation:
              "Water deep enough to support the animal puts more pressure on the chest than the breathing muscles can work against. The snorkel does not work.",
            sourceLessonSlug: "the-swamp-dwelling-tail-dragger",
          },
          {
            prompt: "Why does the course call a mounted museum skeleton a slow thing to correct?",
            options: [
              "It is a hypothesis built in steel at great expense in a public building",
              "The original field notes are usually lost by the time a mount is questioned",
              "Naming rules require a formal petition before a mounted pose can be altered",
              "Remounting damages the specimen so severely that most museums refuse it",
            ],
            correctIndex: 0,
            explanation:
              "Changing it costs money, closes a gallery, and requires someone to declare the old one wrong. Infrastructure slows revision, which is a fact about institutions.",
            sourceLessonSlug: "the-swamp-dwelling-tail-dragger",
          },
          {
            prompt: "What does the course say actually keeps a wrong scientific picture alive?",
            options: [
              "Its coherence: it makes unrelated facts into one story",
              "The reluctance of senior researchers to admit any past error",
              "The absence of any published evidence that contradicts it directly",
              "The difficulty of obtaining funding to test a well-established view",
            ],
            correctIndex: 0,
            explanation:
              "A coherent framework survives inconvenient facts and is displaced by a better framework, which is why three independent lines of evidence did not turn the picture over on their own.",
            sourceLessonSlug: "the-swamp-dwelling-tail-dragger",
          },
          {
            prompt: "What does the stiffening of the Deinonychus tail by bony rods indicate?",
            options: [
              "It was held out behind as a rigid counterweight",
              "It was used to prop the animal upright while it was resting",
              "It was swung sideways as a defensive weapon against predators",
              "It was too heavy to lift, so the animal walked with it dragging",
            ],
            correctIndex: 0,
            explanation:
              "The species name antirrhopus means counterbalancing. A tail that cannot drag limply belongs to an animal organized around balance and speed.",
            sourceLessonSlug: "ostrom-and-deinonychus",
          },
          {
            prompt: "What was Heilmann's 1926 objection to theropods being the ancestors of birds?",
            options: [
              "No theropod then known preserved clavicles",
              "No theropod then known had been found earlier in time than Archaeopteryx",
              "No theropod then known showed any trace of feathers or skin impressions",
              "No theropod then known had a hand with the same three fingers birds have",
            ],
            correctIndex: 0,
            explanation:
              "Birds have a furcula formed from fused clavicles, and a fully lost structure was held not to be regained. The book was careful and it convinced people for decades.",
            sourceLessonSlug: "ostrom-and-deinonychus",
          },
          {
            prompt: "What general rule does the course draw from how Heilmann's objection was dissolved?",
            options: [
              "Absence of evidence is weakest for things that rarely preserve",
              "A published objection should be answered within the same decade",
              "Anatomical arguments are always outweighed by stratigraphic ones",
              "A hypothesis rejected once should not be revisited without new logic",
            ],
            correctIndex: 0,
            explanation:
              "Clavicles are thin and easily lost. The premise turned out to be a gap in the sample rather than a fact about the animals.",
            sourceLessonSlug: "ostrom-and-deinonychus",
          },
          {
            prompt: "Which line of Bakker's evidence does the course say does not hold up well?",
            options: [
              "The ratio of predators to prey in fossil assemblages",
              "The dense vascularisation visible in sectioned dinosaur bone",
              "The occurrence of dinosaur remains at high palaeolatitudes",
              "The narrow gauge and absent tail drag recorded in trackways",
            ],
            correctIndex: 0,
            explanation:
              "Assemblages are shaped by how animals die, how bodies are transported and what preserves, so a quarry ratio is not a census of a living community.",
            sourceLessonSlug: "bakker-and-warm-blood",
          },
          {
            prompt: "What does the course say about Bakker's framing of himself as a heretic?",
            options: [
              "It worked, and it is not evidence",
              "It was invented by his publisher without his agreement",
              "It delayed acceptance of his argument by roughly a decade",
              "It was the standard way disputes were framed in the journals then",
            ],
            correctIndex: 0,
            explanation:
              "Being suppressed by an establishment is claimed just as loudly by people who are simply wrong. He won on bone histology and biomechanics.",
            sourceLessonSlug: "bakker-and-warm-blood",
          },
          {
            prompt: "Where does the metabolism question stand now?",
            options: [
              "The two-box choice was the wrong instrument for the question",
              "Dinosaur physiology is now known to match that of modern mammals",
              "The evidence has returned to supporting a low-activity reptilian model",
              "The question was abandoned as unanswerable from fossil material alone",
            ],
            correctIndex: 0,
            explanation:
              "Dinosaurs were physiologically diverse, and the useful question changed to what a particular animal's growth rate and activity budget were, and how to measure them.",
            sourceLessonSlug: "bakker-and-warm-blood",
          },
          {
            prompt: "Why was it convincing that feathers turned up on the Liaoning animals they did?",
            options: [
              "The skeletal tree had already placed those animals near birds",
              "They were the largest theropods yet found anywhere in eastern Asia",
              "They came from a formation already dated more precisely than any other",
              "They were the only specimens in the deposit preserved with soft tissue",
            ],
            correctIndex: 0,
            explanation:
              "A prediction is convincing when the new evidence lands where the existing hypothesis said it would, rather than scattered at random through the group.",
            sourceLessonSlug: "feathers-at-liaoning",
          },
          {
            prompt: "How was the argument that Sinosauropteryx filaments were degraded collagen answered?",
            options: [
              "Melanosomes were found inside the filaments, which collagen lacks",
              "A second specimen was found with the filaments still attached to bone",
              "Chemical tests showed the filaments contained no protein of any kind",
              "The filaments were shown to lie beneath the skin rather than above it",
            ],
            correctIndex: 0,
            explanation:
              "Their shape was later used to reconstruct plumage color. A published objection tested with a new instrument and answered is about as good as this process gets.",
            sourceLessonSlug: "feathers-at-liaoning",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════════
    // Section 5 · The impact, and what is still argued
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "alvarez-and-the-iridium-layer",
      title: "17 · Alvarez (1980): a claim nobody wanted",
      section: "Section 5 · The impact, and what is still argued",
      body: `In a gorge near Gubbio, in Italy, a band of clay about a centimetre thick separates limestone full of Cretaceous microfossils from limestone above it that has almost none. The same thin boundary shows up at Stevns Klint in Denmark, at Woodside Creek in New Zealand, and in many other sections since.

The interesting part of the 1980 paper is that its authors were not looking for an extinction cause. They were trying to build a clock.

## What they were doing

Walter Alvarez, a geologist, wanted to know how long the boundary clay had taken to accumulate. His father Luis Alvarez, a physicist, suggested a method: fine dust from meteorites falls on the earth at a roughly steady rate, and that dust carries iridium, an element rare in the earth's crust because most of the planet's supply sank into the core early on. Measure the iridium in the clay, compare it with a known infall rate, and you have a deposition time.

Frank Asaro and Helen Michel ran the analyses at Berkeley.

The iridium in the boundary clay came out roughly thirty times higher than the surrounding rock. That is not a slow clock. That is an anomaly, and the paper published in *Science* in 1980 proposed the explanation that fits an enormous quantity of iridium arriving at once: an asteroid roughly ten kilometres across struck the earth, and the dust it threw into the atmosphere darkened the sky, shut down photosynthesis, and collapsed food chains.

## What that evidence did establish

Something with a chondritic signature, meaning the composition of a meteorite rather than of ordinary crust, was deposited worldwide at the boundary. That is a strong result, and it has held up completely.

## What it did not establish, and this is the important half

**It did not locate a crater.** The 1980 paper had no impact site. A ten-kilometre object leaves a hole, and there was no hole.

**It did not prove that an impact caused the extinction.** Two things at the same level in the rock are two things at the same level in the rock. Coincidence in a stratigraphic section is not causation, especially when the section's resolution is coarse.

**It did not rule out volcanism.** Iridium is scarce in the crust but not in mantle material, and enormous volcanic eruptions can bring mantle material up. Charles Officer and Charles Drake made that argument in print in 1985: the anomaly could be volcanic, and the boundary could record a long interval of eruption rather than a single day.

**It did not settle the tempo.** Whether the extinction was instantaneous, or a decline over hundreds of thousands of years, is a separate question that the iridium does not answer.

## Why the resistance was reasonable

The hypothesis met serious opposition, particularly from paleontologists, and that opposition was not obstinacy.

**It ran against a disciplinary norm with a good pedigree.** Geology had spent a century and a half getting away from explanations that invoked unique catastrophes, because catastrophic explanations are easy to invent, hard to test, and had historically been used to avoid doing stratigraphy. Requiring ordinary observable processes had cleaned up the field. A physicist arriving with an asteroid was, from the inside, exactly the kind of claim the norm existed to filter.

**The fossil evidence appeared to show gradual decline.** Detailed sections seemed to show many groups thinning out before the boundary rather than vanishing at it.

**And the answer to that second point is itself a beautiful piece of method.** In 1982 Philip Signor and Jere Lipps pointed out that the last fossil of a species is almost never the last individual of the species, because rare things are sampled poorly near the top of their range. So a genuinely instantaneous extinction will look gradual in an incomplete record, every time. That effect now carries their names.

Notice what happened there. An observation that appeared to refute the hypothesis turned out to be a predictable artifact of how sampling works. That did not prove the impact hypothesis. It removed one objection to it, which is a smaller and more honest thing.

:::reveal What were the Alvarez team originally trying to measure, and what did they find instead? ||| How long the boundary clay took to accumulate, using meteoritic iridium falling at a steady rate as a clock. They found iridium about thirty times higher than the surrounding rock, which is an anomaly rather than a slow clock.

:::reveal Name two things the 1980 iridium evidence did NOT establish. ||| It did not locate a crater, did not prove the impact caused the extinction, did not rule out a volcanic source for the iridium, and did not settle whether the extinction was instantaneous or drawn out.

:::reveal What is the Signor-Lipps effect, and what did it explain? ||| The last fossil of a species is almost never the last individual, because rare things are sampled poorly near the top of their range. So even an instantaneous extinction looks gradual in an incomplete record.

## Sources
- Alvarez, L. W., Alvarez, W., Asaro, F., & Michel, H. V. (1980). Extraterrestrial cause for the Cretaceous-Tertiary extinction. *Science, 208*(4448), 1095-1108.
- Officer, C. B., & Drake, C. L. (1985). Terminal Cretaceous environmental events. *Science, 227*(4691), 1161-1167.
- Signor, P. W., III, & Lipps, J. H. (1982). Sampling bias, gradual extinction patterns, and catastrophes in the fossil record. In L. T. Silver & P. H. Schultz (Eds.), *Geological implications of impacts of large asteroids and comets on the Earth* (Special Paper 190, pp. 291-296). Geological Society of America.`,
      recallContent: [
        {
          prompt: "Last lesson: what did the Liaoning specimens add to a case that was already strong?",
          answer:
            "Feathers on non-avian dinosaurs. The skeletal case for theropod ancestry of birds was strong but had no feathered non-bird, and Sinosauropteryx, Caudipteryx, Protarchaeopteryx and Microraptor closed that gap.",
        },
        {
          prompt: "Last lesson: what does the Archaeoraptor episode show about how the field checks itself?",
          answer:
            "It was caught quickly by the field using its own methods, after Xu Xing recognized the tail. And it got as far as it did precisely by bypassing peer review, on a specimen from the trade with no provenance.",
        },
      ],
    },
    {
      slug: "chicxulub-and-what-is-still-argued",
      title: "18 · Chicxulub: what confirmed it, and what is still argued",
      section: "Section 5 · The impact, and what is still argued",
      body: `The 1980 hypothesis had a hole in it, which was the absence of a hole. This lesson is about what filled it, and then about the parts of the question that are genuinely open, which is where the course ends on purpose.

## The crater

It had already been found, and nobody in this argument knew.

In the late 1970s Glen Penfield and Antonio Camargo, working geophysical surveys for the Mexican state oil company, identified a large circular gravity and magnetic anomaly buried under the Yucatán Peninsula and the sea floor beside it. They presented it at a geophysical conference in 1981. It was a petroleum survey result reported in a petroleum context, and the people arguing about iridium did not see it.

They connected around 1990. In 1991 Alan Hildebrand, with Penfield, Camargo and others, published the case that the Chicxulub structure is a buried impact crater of about the right size and about the right age.

## What turned it from a candidate into the leading account

**Shocked quartz.** Quartz grains with intersecting planar deformation features, produced by pressures that essentially only impacts generate at the earth's surface, occur in the boundary layer, and are coarsest near the Gulf of Mexico.

**Ejecta.** Glass spherules and tektites in Haiti and Mexico, with compositions matching the target rocks of the Yucatán platform, including its distinctive sulfur-rich evaporites.

**Coarse boundary deposits** along the Gulf coast, consistent with enormous water disturbance close to the source.

**Dating.** In 2013 Paul Renne and colleagues published high-precision argon dating showing that the impact and the boundary coincide within about 32,000 years, which is as tight as this method gets at that age.

**Drilling.** In 2016 an offshore expedition drilled the crater's peak ring and recovered granitic basement rock that had been lifted and displaced in a way that matches models of large impact formation.

In 2010 a review paper in *Science* with forty-one authors concluded that the Chicxulub impact was the cause of the extinction. That paper was met with formal published comments disputing it, in the same journal, from researchers who thought it had overstated the case.

**That is the state of it: an overwhelming case for a large impact at the boundary, and a live argument about how much of the extinction it did.**

## What is still argued, honestly

This section is not a list of fringe doubts. Every item here is argued in the mainstream literature by people with data.

**The Deccan Traps.** One of the largest volcanic provinces on earth erupted across this interval in what is now India, releasing carbon dioxide and sulfur on a scale capable of driving climate change on its own. Nobody disputes that it happened. What is disputed is what it did. Two papers published in the same issue of *Science* in 2019, using different dating approaches, reached different conclusions about the eruption's tempo relative to the boundary and therefore about how much of the environmental damage it can account for. There is also a live proposal that the impact itself altered the eruption's behavior, which would make the two causes one interacting system rather than rivals.

**Whether ecosystems were already stressed.** A sustained minority position, associated most prominently with Gerta Keller, holds that the impact predates the boundary and that Deccan volcanism did most of the work. That reading is not accepted by most workers, and it is not a fringe publication record either. The dispute is about correlating sections and about how to read reworked sediment, which are technical questions with technical answers that have not converged.

**The kill mechanism.** Given an impact, what actually killed things? Sulfate aerosols cooling the planet for years, soot from burning biomass, immediate thermal pulse, ocean acidification, and darkness shutting down photosynthesis have all been modeled, and the relative contributions and durations differ substantially between models.

**Why these survived and not those.** Birds came through and other dinosaurs did not. Crocodilians came through. Ammonites did not. Explanations exist for each and no single filter accounts for the whole pattern.

**Season and site.** Work on fish bones from the Tanis site in North Dakota has argued the impact occurred in the northern spring, which would help explain differential survival. The site's interpretation has drawn significant methodological criticism, so this is offered as an active question rather than a result.

## Why the course ends here

You could be forgiven for expecting a lesson called "and then we found out what happened." That lesson would be false, and it would undo everything the previous seventeen lessons argued.

The people in this course reasoned carefully from what they had. Ussher had documents. Owen had fragments. The people who put sauropods in lakes had a real problem with weight. Every one of them was working with an incomplete instrument, and every one of their pictures was replaced.

**We are also working with an incomplete instrument.** The argument above is not a failure of the field. It is the field doing the thing that got us from 4004 BCE to a dated crater: pressing on the parts that do not fit, in public, with data.

So the question this course leaves you with is not what killed the dinosaurs. It is the one the whole series is for: **what would change my mind, and what evidence would do it?**

If you cannot answer that about something you believe, you are not holding a conclusion. You are holding a position.

:::reveal Why did the Chicxulub structure go unnoticed for a decade after it was identified? ||| It came from petroleum geophysical surveys and was presented at a geophysics conference in 1981. The people arguing about the iridium anomaly were not reading that literature.

:::reveal Name two lines of evidence that made Chicxulub the leading account. ||| Shocked quartz coarsening toward the Gulf of Mexico, ejecta glass matching Yucatán target rocks, coarse boundary deposits along the Gulf coast, argon dating placing impact and boundary within about 32,000 years, and drilling of the crater's peak ring.

:::reveal Name two things about the end-Cretaceous extinction that are still genuinely argued. ||| How much of the damage the Deccan Traps did and on what tempo, whether ecosystems were already stressed before the impact, which kill mechanism dominated and for how long, and why the particular groups that survived did.

:::reveal What question does the course end on, rather than ending on an answer? ||| What would change my mind, and what evidence would do it. Someone who cannot answer that about a belief is holding a position rather than a conclusion.

## Sources
- Hildebrand, A. R., Penfield, G. T., Kring, D. A., Pilkington, M., Camargo Z., A., Jacobsen, S. B., & Boynton, W. V. (1991). Chicxulub crater: A possible Cretaceous/Tertiary boundary impact crater on the Yucatán Peninsula, Mexico. *Geology, 19*(9), 867-871.
- Keller, G. (2014). Deccan volcanism, the Chicxulub impact, and the end-Cretaceous mass extinction: Coincidence? Cause and effect? In G. Keller & A. C. Kerr (Eds.), *Volcanism, impacts, and mass extinctions: Causes and effects* (Special Paper 505, pp. 57-89). Geological Society of America.
- Morgan, J. V., Gulick, S. P. S., Bralower, T., Chenot, E., Christeson, G., Claeys, P., ... Zylberman, W. (2016). The formation of peak rings in large impact craters. *Science, 354*(6314), 878-882.
- Renne, P. R., Deino, A. L., Hilgen, F. J., Kuiper, K. F., Mark, D. F., Mitchell, W. S., III, Morgan, L. E., Mundil, R., & Smit, J. (2013). Time scales of critical events around the Cretaceous-Paleogene boundary. *Science, 339*(6120), 684-687.
- Schoene, B., Eddy, M. P., Samperton, K. M., Keller, C. B., Keller, G., Adatte, T., & Khadri, S. F. R. (2019). U-Pb constraints on pulsed eruption of the Deccan Traps across the end-Cretaceous mass extinction. *Science, 363*(6429), 862-866.
- Schulte, P., Alegret, L., Arenillas, I., Arz, J. A., Barton, P. J., Bown, P. R., ... Willumsen, P. S. (2010). The Chicxulub asteroid impact and mass extinction at the Cretaceous-Paleogene boundary. *Science, 327*(5970), 1214-1218.
- Sprain, C. J., Renne, P. R., Vanderkluysen, L., Pande, K., Self, S., & Mittal, T. (2019). The eruptive tempo of Deccan volcanism in relation to the Cretaceous-Paleogene boundary. *Science, 363*(6429), 866-870.`,
    },
    {
      slug: "timeline-claim-and-evidence",
      title: "19 · Claim and evidence, across two hundred years",
      section: "Section 5 · The impact, and what is still argued",
      body: `One axis, two tracks. The upper track is when a **claim** about the deep past entered the record. The lower track is when the **evidence** that could test it became available.

Read the shape before you read the commentary. The distance between a claim and the thing that could check it is the argument of this whole course.

:::timeline Claim and evidence, on one axis
1650 | claim | Ussher dates creation to 4004 BCE from documents and king lists
1667 | evidence | Steno dissects a shark and matches its teeth to the tongue stones
1669 | evidence | Steno states superposition, original horizontality, lateral continuity
1778 | claim | Buffon publishes about 75,000 years, from cooling iron spheres
1788 | claim | Hutton finds no vestige of a beginning in the earth's cycle
1815 | evidence | Smith's map shows the strata of a whole country in order
1842 | claim | Owen names Dinosauria and defines its membership criteria
1854 | claim | The Crystal Palace restores extinct animals at full size
1864 | claim | Kelvin calculates a cooling earth at tens of millions of years
1878 | evidence | Bernissart yields dozens of articulated Iguanodon skeletons
1896 | evidence | Radioactivity is discovered, and Kelvin's model loses its floor
1903 | evidence | Riggs shows the Brontosaurus type is an Apatosaurus
1905 | claim | The AMNH mounts its sauropod and labels it Brontosaurus
1915 | claim | Tyrannosaurus is mounted upright, tail on the ground
1926 | claim | Heilmann rules out theropod ancestry for birds on the clavicle
1951 | evidence | Kermack shows a submerged sauropod could not have inhaled
1956 | evidence | Patterson dates the earth to about 4.55 billion years
1969 | evidence | Ostrom describes Deinonychus, an animal built for balance and speed
1972 | claim | Bakker argues in Nature for high dinosaur metabolic rates
1975 | evidence | McIntosh and Berman show the mounted sauropod skull is wrong
1980 | claim | Alvarez and colleagues propose an impact from an iridium anomaly
1981 | evidence | Penfield and Camargo report the buried Yucatan anomaly
1982 | evidence | Signor and Lipps show why abrupt extinctions look gradual
1991 | evidence | Hildebrand and colleagues identify Chicxulub as the crater
1998 | evidence | Liaoning yields non-avian dinosaurs preserved with feathers
2010 | evidence | Melanosomes give the color of a Cretaceous animal's plumage
2013 | evidence | Argon dating ties impact and boundary within about 32,000 years
2015 | claim | Tschopp and colleagues propose reinstating Brontosaurus
2019 | evidence | Two Science papers date Deccan eruptions and disagree
:::

## What the shape shows

**The evidence usually arrives late, and sometimes it arrives first and nobody looks.** Steno's principles sit on the lower track more than a century before anyone uses them to argue about the age of the earth. Penfield's anomaly sits there for a decade while the argument that needed it ran without it, because it was published in the wrong literature for the audience that wanted it.

**A claim can be corrected long before the correction circulates.** Riggs is on the evidence track in 1903. The AMNH label is on the claim track two years later, and it wins for most of a century. Publication and circulation are different events, and the gap between them is where most of the errors in this course actually lived.

**The last entry is deliberate.** It is not a claim being confirmed. It is two teams of competent people, in the same issue of the same journal, dating the same eruptions and reaching different conclusions. That is the newest thing on this timeline, and it is unresolved.

## The habit to take away

When you meet any confident statement about the deep past, or about anything you cannot check personally, sketch these two tracks for it.

What is the claim, and when was it made? What evidence could test it, and did that evidence exist yet? If it did exist, was it in a place the claimant could reach?

Most of the time, the interesting answer is not that someone was foolish. It is that the two tracks were further apart than anyone realized at the time, which is a condition we are also in and cannot see from the inside.

:::reveal Why does Penfield's 1981 anomaly sit on the evidence track a decade before it is used? ||| It was a petroleum geophysics result presented in a petroleum context. The evidence existed and the people who needed it were not reading that literature.

:::reveal What does the gap between Riggs in 1903 and the museum label in 1905 illustrate? ||| That publication and circulation are different events. A correction can be in the literature for decades while the institutions that shape public understanding go on using the old name.

## Sources
- Alvarez, L. W., Alvarez, W., Asaro, F., & Michel, H. V. (1980). Extraterrestrial cause for the Cretaceous-Tertiary extinction. *Science, 208*(4448), 1095-1108.
- Hildebrand, A. R., Penfield, G. T., Kring, D. A., Pilkington, M., Camargo Z., A., Jacobsen, S. B., & Boynton, W. V. (1991). Chicxulub crater: A possible Cretaceous/Tertiary boundary impact crater on the Yucatán Peninsula, Mexico. *Geology, 19*(9), 867-871.
- Riggs, E. S. (1903). Structure and relationships of opisthocoelian dinosaurs. Part I: Apatosaurus Marsh. *Field Columbian Museum Publication 82, Geological Series, 2*(4), 165-196.
- Steno, N. (1669). *De solido intra solidum naturaliter contento dissertationis prodromus*. Florence.`,
    },
    {
      slug: "quiz-the-impact",
      title: "Section 5 quiz · The impact, and what is still argued",
      section: "Section 5 · The impact, and what is still argued",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What were the Alvarez team originally trying to measure at Gubbio?",
            options: [
              "How long the boundary clay took to accumulate",
              "How many microfossil species disappeared at the boundary",
              "How much the sea level had fallen at the end of the Cretaceous",
              "How the magnetic polarity of the limestone changed across the layer",
            ],
            correctIndex: 0,
            explanation:
              "Meteoritic dust carrying iridium falls at a roughly steady rate, so it can serve as a clock. They got an anomaly instead of a duration.",
            sourceLessonSlug: "alvarez-and-the-iridium-layer",
          },
          {
            prompt: "Why is iridium rare in the earth's crust but common in meteorites?",
            options: [
              "Most of the earth's supply sank into the core early on",
              "It weathers out of surface rocks faster than any other heavy metal",
              "It forms only under the pressures found in the earth's lower mantle",
              "It is destroyed by contact with liquid water over geological time",
            ],
            correctIndex: 0,
            explanation:
              "That is what makes an iridium spike a usable signal for extraterrestrial material, and why the anomaly at the boundary was worth explaining.",
            sourceLessonSlug: "alvarez-and-the-iridium-layer",
          },
          {
            prompt: "Which of these did the 1980 iridium evidence NOT establish?",
            options: [
              "That an impact caused the extinction",
              "That material with a meteoritic composition reached the boundary",
              "That the anomaly appears in sections on more than one continent",
              "That the boundary clay contains far more iridium than the rock around it",
            ],
            correctIndex: 0,
            explanation:
              "Two things at the same level in the rock are two things at the same level in the rock. The other three results have held up completely.",
            sourceLessonSlug: "alvarez-and-the-iridium-layer",
          },
          {
            prompt: "What rival source for the iridium did Officer and Drake propose in 1985?",
            options: [
              "Mantle material brought up by enormous volcanic eruptions",
              "Slow settling of ordinary cosmic dust over several million years",
              "Concentration by bacteria living in the boundary clay after deposition",
              "Leaching from the limestone below as groundwater passed through it",
            ],
            correctIndex: 0,
            explanation:
              "Iridium is scarce in the crust but not in mantle material, so the anomaly had a serious rival explanation that had to be answered rather than dismissed.",
            sourceLessonSlug: "alvarez-and-the-iridium-layer",
          },
          {
            prompt: "Why does the course call the paleontologists' resistance reasonable rather than obstinate?",
            options: [
              "The norm against unique catastrophes had cleaned up the field",
              "The 1980 paper had been rejected by two journals before it appeared",
              "No physicist had previously published in a geological journal at all",
              "The boundary clay had not yet been located outside northern Italy",
            ],
            correctIndex: 0,
            explanation:
              "Catastrophic explanations are easy to invent and hard to test, and requiring ordinary observable processes had been productive for a century and a half.",
            sourceLessonSlug: "alvarez-and-the-iridium-layer",
          },
          {
            prompt: "What does the Signor-Lipps effect explain?",
            options: [
              "Why an abrupt extinction looks gradual in the fossil record",
              "Why iridium concentrations vary between boundary sections",
              "Why marine microfossils preserve better than land vertebrates",
              "Why some species reappear in strata above their apparent extinction",
            ],
            correctIndex: 0,
            explanation:
              "The last fossil of a species is almost never the last individual, because rare things are sampled poorly near the top of their range.",
            sourceLessonSlug: "alvarez-and-the-iridium-layer",
          },
          {
            prompt: "Why did the Chicxulub structure go unused for about a decade after it was identified?",
            options: [
              "It was reported at a geophysics conference by petroleum surveyors",
              "It was classified by the Mexican government as a commercial secret",
              "It was thought too small to have been made by a ten-kilometre object",
              "It was dated at first to several million years after the boundary",
            ],
            correctIndex: 0,
            explanation:
              "Penfield and Camargo presented it in 1981 in a petroleum context. The people arguing about iridium were not reading that literature.",
            sourceLessonSlug: "chicxulub-and-what-is-still-argued",
          },
          {
            prompt: "What makes shocked quartz useful as evidence for an impact?",
            options: [
              "Its deformation requires pressures impacts essentially alone produce",
              "It occurs only in rocks formed within a thousand years of a collision",
              "It forms exclusively from the target rocks of a carbonate platform",
              "It can be dated directly, unlike the clay in which it is embedded",
            ],
            correctIndex: 0,
            explanation:
              "The grains also coarsen toward the Gulf of Mexico, which points at a source rather than merely recording that something happened.",
            sourceLessonSlug: "chicxulub-and-what-is-still-argued",
          },
          {
            prompt: "What did the 2013 argon dating work by Renne and colleagues establish?",
            options: [
              "Impact and boundary coincide within about 32,000 years",
              "The Deccan eruptions began roughly a million years before the impact",
              "The crater took about ten thousand years to reach its final shape",
              "The extinction of marine plankton preceded that of land plants",
            ],
            correctIndex: 0,
            explanation:
              "That is about as tight as high-precision dating gets at that age, and it removes the option that the two events are separated by a long interval.",
            sourceLessonSlug: "chicxulub-and-what-is-still-argued",
          },
          {
            prompt: "The 2010 Science review with forty-one authors declared the case settled. What happened next?",
            options: [
              "Formal published comments disputed it in the same journal",
              "The Geological Society of America adopted it as an official position",
              "The rival volcanic hypothesis was formally withdrawn by its authors",
              "The paper was retracted after an error in its dating was identified",
            ],
            correctIndex: 0,
            explanation:
              "An overwhelming case for a large impact at the boundary sits alongside a live argument about how much of the extinction that impact did.",
            sourceLessonSlug: "chicxulub-and-what-is-still-argued",
          },
          {
            prompt: "Which of these is genuinely still argued in the mainstream literature?",
            options: [
              "How much of the damage the Deccan Traps did, and on what tempo",
              "Whether the Chicxulub structure is an impact crater at all",
              "Whether the iridium anomaly exists outside a single Italian section",
              "Whether any non-avian dinosaurs survived into the Paleogene in Asia",
            ],
            correctIndex: 0,
            explanation:
              "Two 2019 papers in the same issue of Science, using different dating approaches, reached different conclusions about the eruptions' tempo.",
            sourceLessonSlug: "chicxulub-and-what-is-still-argued",
          },
          {
            prompt: "On the course timeline, what does the gap between Riggs in 1903 and the 1905 museum label show?",
            options: [
              "Publication and circulation are different events",
              "Museums were legally required to use the older of two names",
              "Riggs published in a journal that was not read outside Chicago",
              "The synonymy was rejected by every major museum for two decades",
            ],
            correctIndex: 0,
            explanation:
              "A correction can sit in the literature for decades while the institutions that shape public understanding keep using the old name.",
            sourceLessonSlug: "timeline-claim-and-evidence",
          },
        ],
      },
    },
    {
      slug: "assignment-what-changed",
      title: "20 · Assignment: document what changed",
      section: "Section 5 · The impact, and what is still argued",
      lessonType: "assignment",
      body: `Take one dinosaur you learned about as a child and document what has changed about it, and why.

This is not an exercise in catching your old books out. It is the exercise this whole course has been preparing: identify a claim, find the evidence that revised it, and describe the mechanism by which the revision happened or failed to happen.

## Choose your animal

Any dinosaur you have a specific childhood memory of: a book, a toy, a film, a museum visit, a poster on a classroom wall. You need a **dated source** for the old picture, so pick one you can identify. A book with a publication date is ideal. If the source is a film or an exhibit, the release or opening date will do.

Good candidates, because each has a documented revision behind it: *Apatosaurus* and its head, *Iguanodon* and its thumb, *Velociraptor* and its covering, *Tyrannosaurus* and its posture, *Spinosaurus* and its habits, *Stegosaurus* and its plates, *Triceratops* and its herding behavior. You are not limited to these.

## What to submit

Around 800 to 1,200 words, in six parts.

**1. The old picture, with its source.** State what you were taught, and cite the specific dated source that taught it to you. Describe the picture in plain language, without correcting it yet.

**2. Why that picture was reasonable.** This part is graded hardest, and it is the part most submissions get wrong. Find what the picture was based on. What evidence existed at that date, what was missing, and what inference did people draw from what they had? If you cannot find a reason, you have not finished looking. Nobody in this course invented their picture out of nothing.

**3. What changed it.** Identify at least one specific piece of evidence: a specimen, a paper, a measurement, a technique. Cite it. A published paper is best. Say what it showed and what it did not show.

**4. How long the change took to reach the public.** Compare the date of the evidence with the date it appeared in books, museums, films or classrooms. This is the two-track exercise from lesson 19 applied to your own animal, and the gap is often decades.

**5. What is still open.** Every animal on that list has something unresolved about it. Find one thing about your animal that specialists currently disagree on, and state the disagreement fairly, giving each side's reasoning rather than picking a winner.

**6. What would change your mind.** For the current picture of your animal, name the specific evidence that would revise it. Not "new fossils" but what kind of fossil, showing what, from where.

## How this is assessed

- **Accuracy of part 1**, including whether the source is real, dated and cited.
- **Quality of part 2.** Does it identify actual historical reasoning, or does it condescend? An answer amounting to "they did not know any better" scores poorly, because it is not an explanation.
- **Specificity of part 3.** A named, cited piece of evidence, not a vague reference to later research.
- **Honesty of part 5.** Is the disagreement described in terms its participants would recognize?
- **Concreteness of part 6.** Is the evidence you name something that could actually be found?

Cite in APA 7 with a reference list. Cite papers as papers and your childhood source as the object it is.

## The one rule

If you cannot establish something, say so in the text. Twenty lessons of this course have been about the difference between a claim and the evidence behind it, and about what happens when that gap is quietly closed by someone who wanted a cleaner story.

Do not close it here.`,
    },
  ],
};
