import type { AuthoredCourse } from "./authored-course";

// Here Be Dragons, course 1 of 5: Monsters at the Edge of the Map.
//
// Plan: plans/58-here-be-dragons-series.md. Category: Culture & History. Grades 9-12.
// Connections: plans/future-courses/culture/01-connections-to-the-catalog.md.
//
// THE RULE THIS SERIES IS BUILT ON, and the one not to break while authoring the rest: the naive
// framing ("people used to think the world was flat, then we got smart") is FACTUALLY WRONG and
// would be the most damaging thing this catalog could publish. Educated Europeans knew the earth
// was round continuously from antiquity. Every lesson here teaches the inverse thesis: people were
// usually reasoning well from what they had, and the interesting questions are what they had, who
// they would let speak, and what it took to change their minds.
//
// No condescension, ever, including toward the religious. A lesson that only says "look how odd
// that was" is trivia and gets cut.
//
// Lesson 12 is the hinge of the whole series: the monstrous-races device is the same rhetorical
// move later aimed at real people. It links to training-the-colonizer and the precolonial courses.
// Do not soften it, and do not let it arrive as a surprise: lessons 9 to 11 build to it.
//
// Images are NOT authored yet. The `:::figure` directive and its guard ship separately
// (plans/58 §3), and the public-domain scans are operator task 243. Every lesson below is written
// to stand on its own text, so the figures are an enhancement and never a dependency.

export const MONSTERS_AT_THE_EDGE_OF_THE_MAP_COURSE: AuthoredCourse = {
  title: "Monsters at the Edge of the Map",
  description:
    "Mapmakers drew dragons, sea serpents and one-footed men in the places they had not been. This course asks what those drawings were actually for, which turns out to be a much better question than whether people believed them. You will learn to read a map as an argument made by someone with interests, and you will follow that same habit of description from the parchment margin to places where it was used on real people.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════════
    // Section 1 · The phrase, and the genre
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "here-be-dragons",
      title: "1 · The phrase that is on almost no map",
      section: "Section 1 · The phrase, and the genre",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281336/witus/courses/here-be-dragons/monsters-at-the-edge-of-the-map/hunt-lenox-globe-dragons.png ||| A detail of an engraved copper globe showing the Latin words HC SVNT DRACONES beside a coastline. ||| The one well-known historical instance of the phrase, on the Hunt-Lenox Globe of about 1510. Look at how small it is, and remember that thousands of other maps survive without it. ||| Rare Book Division, The New York Public Library. Lenox Globe Dragons.png. CC0. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Lenox_Globe_Dragons.png
Everyone knows that old maps said **"here be dragons"** at the edges, where the mapmakers ran out of knowledge and started guessing.

Almost none of them did.

The Latin phrase *HC SVNT DRACONES* ("here are dragons") appears on exactly one well-known historical object: a small engraved copper globe, about 11 centimetres across, made around 1510 and now held in the Rare Book Division of the New York Public Library. It is called the Hunt-Lenox Globe. The words sit off the coast of Southeast Asia. That is the sighting. One globe.

Thousands of medieval and Renaissance maps survive. The phrase is not a convention on them. It is not a habit, not a warning label, not a thing mapmakers did.

## So where did the idea come from?

From us. The phrase is a modern shorthand that became so useful as a metaphor (for the unknown, for the edge of expertise, for the part of the project nobody has scoped) that it got projected backwards onto the people who supposedly wrote it. It is a story about the past that the past did not tell.

## Why start a course here

Because this is the exact shape of almost everything else you are going to look at.

There is a real thing (monsters genuinely do appear on maps, in large numbers, and lesson 6 is about one of the best examples). There is a story we tell about the real thing. And the story is doing work that the real thing never did: it makes the people who drew those maps sound credulous and a bit silly, which makes us sound sharp by comparison.

The habit this course is trying to build is small and hard: **when you meet a fact that flatters you, slow down.**

## One more turn of the screw

Even the one sighting is argued about. Some scholars have suggested the engraver may have meant *Dagroian*, a kingdom Marco Polo described in Sumatra, rather than *dracones*, dragons. The reading is not settled.

Notice what that does. The single piece of evidence for the most famous fact about old maps is one object, and specialists disagree about what it says. That is not a reason to throw up your hands. It is a reason to say the thing precisely: *one globe, around 1510, with a contested inscription.* Precision like that is not pedantry. It is the whole method.

:::reveal How many well-known historical maps or globes actually carry the phrase "here be dragons"? ||| One: the Hunt-Lenox Globe, a small copper globe made around 1510, now at the New York Public Library. It is not a convention of old maps at all.

:::reveal Why should you slow down when a fact makes you look good by comparison? ||| Because that is exactly the kind of story that gets repeated without being checked. The flattering version travels faster than the accurate one.

## Sources
- New York Public Library. (n.d.). *Lenox Globe*. Rare Book Division. https://www.nypl.org/
- Van Duzer, C. (2013). *Sea monsters on medieval and Renaissance maps*. British Library.`,
    },
    {
      slug: "what-a-map-is-for",
      title: "2 · Three objects that look alike and are not",
      section: "Section 1 · The phrase, and the genre",
      body: `Put three things side by side: a medieval world map, a sailor's coastal chart from the same century, and the map application on your phone.

All three are flat pictures of places. Only one of them is trying to do what you assume all maps do.

## The road map on your phone

Its job is to get you somewhere. It is judged by whether the turn is where it says the turn is. Accuracy of position is the entire point, and everything else (color, labels, the little icons) exists to serve it.

## The portolan chart

A working sailor's document, drawn on vellum from the 1300s onward, covered in radiating lines called rhumb lines that a navigator used with a compass to hold a bearing. Coastlines are startlingly good. Interiors are often nearly empty, because a sailor does not need the interior.

That emptiness is not ignorance. It is **editing**. The chart leaves out what its user will not use.

## The mappa mundi

A large medieval world map, of which the finest surviving example is at Hereford Cathedral in England, made around 1300. Jerusalem sits at the center. East is at the top, not north. Paradise appears as a real place. Scattered across it are historical events, biblical scenes, animals, and peoples described by ancient authors.

Judged as a road map, it is a catastrophe. You could not get anywhere with it.

But it was never a road map. A mappa mundi is closer to an encyclopaedia arranged geographically: a picture of what the world contains and what it means, with history and scripture and natural history laid out in space because space was a convenient way to organize them. It answers "what is the world, and what is it for," not "how do I get to Genoa."

## The test you can carry out of here

Before you judge any map, ask: **what question was this made to answer, and for whom?**

The Hereford map and the portolan chart were made in the same era, in the same religious culture, sometimes in the same cities. They look different because they were answering different questions. Nobody in 1300 was confused about this. Only we are, and only because we assume there is one kind of map.

This is called reading for **genre**, and it is the most portable skill in this course. It works on maps. It works, as you will see in the last course of this series, on a press release and a scientific paper and a headline about the same discovery.

:::reveal A portolan chart shows detailed coastlines and an almost empty interior. Is that ignorance? ||| No, it is editing for a user. A sailor does not need the interior, so the chart leaves it out.

:::reveal What question should you ask before judging any map? ||| What question was this made to answer, and for whom? Judging a mappa mundi as a road map is judging it against a job it never had.

## Sources
- Harvey, P. D. A. (1996). *Mappa mundi: The Hereford world map*. Hereford Cathedral and the British Library.
- Hereford Cathedral. (n.d.). *Mappa Mundi*. https://www.herefordcathedral.org/mappa-mundi`,
      recallContent: [
        {
          prompt: "Name the three map genres from this lesson and the question each answers.",
          answer:
            "A road map answers how do I get there. A portolan chart answers how do I hold a bearing along a coast. A mappa mundi answers what is the world and what does it mean.",
        },
        {
          prompt: "Why is east at the top of the Hereford Mappa Mundi rather than north?",
          answer:
            "Because it is organized around meaning rather than navigation. East, toward Paradise as it was understood, takes the honored position at the top, and Jerusalem sits at the center.",
        },
      ],
    },
    {
      slug: "the-t-o-map",
      title: "3 · The diagram everyone mistakes for a failed map",
      section: "Section 1 · The phrase, and the genre",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281337/witus/courses/here-be-dragons/monsters-at-the-edge-of-the-map/t-o-map-1472.jpg ||| A circle divided by a T shape into three labelled parts: Asia across the top half, Europe and Africa below. ||| The T-O diagram from the 1472 printing of Isidore's Etymologiae. A schematic of how three landmasses relate, not an attempt at a coastline, and judging it as a survey is the category error the lesson names. ||| Isidore of Seville. T and O map Guntherus Ziner 1472.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:T_and_O_map_Guntherus_Ziner_1472.jpg
There is a medieval diagram that gets reproduced constantly as proof that people had no idea what the world looked like. It is a circle with a T inside it, dividing the circle into three parts labeled Asia, Europe and Africa. It is called a **T-O map**, and it comes from a text by Isidore of Seville, a Spanish bishop writing in the 600s. It appears in the printed edition of his *Etymologiae* published in Augsburg in 1472, which is where most people have seen it.

It looks like a child's drawing. That is the trap.

## What it actually is

A T-O map is a **schematic**. It shows a relationship, not a shape. Three landmasses, divided by two waterways and a sea, surrounded by ocean. It is the medieval equivalent of a subway map or an organizational chart: nobody thinks the London Underground map is a claim about the true distance between stations.

Isidore, in the same body of work, discusses the earth as a sphere. He was not confused about the shape of the world. He was drawing a diagram of how its parts relate, in a book that was an encyclopaedia, for readers who wanted the relationship and not the coastline.

## The mistake, stated plainly

Reading a schematic as a survey is a **category error**. It is not a small mistake about the Middle Ages. It is a mistake about what the object in front of you is, and once you make it, every conclusion you draw is worthless no matter how carefully you reason.

## Where you will make this mistake yourself

Not on medieval maps. You will make it on a chart in a news article, a diagram in a company report, a simplified figure in a textbook. Something built to show a relationship will be read as a claim about magnitude, and it will be either you or the person who made it who benefits from the confusion.

The medieval version is a safe place to practice, because nothing is at stake and the error is easy to see once it is named.

:::reveal What kind of object is a T-O map? ||| A schematic. It shows how three landmasses relate to each other and to the surrounding ocean, the way a subway map shows connections rather than true distances.

:::reveal What is the category error this lesson names, and why does it matter beyond old maps? ||| Reading a schematic as a survey. It matters because charts and simplified diagrams in modern reporting invite the same error, and someone usually benefits from it.

## Sources
- Isidore of Seville. (1472). *Etymologiae*. Gunther Zainer. (Original work composed c. 615-630)
- Barney, S. A., Lewis, W. J., Beach, J. A., & Berghof, O. (Trans.). (2006). *The Etymologies of Isidore of Seville*. Cambridge University Press.`,
    },
    {
      slug: "quiz-genre",
      title: "Section 1 quiz · The phrase, and the genre",
      section: "Section 1 · The phrase, and the genre",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: 'On how many well-known historical objects does the phrase "here be dragons" actually appear?',
            options: [
              "One, a small copper globe made around 1510",
              "On most surviving Renaissance sea charts",
              "On every mappa mundi produced after 1300",
              "On the printed editions of Ptolemy's Geography",
            ],
            correctIndex: 0,
            explanation:
              "The Hunt-Lenox Globe, now at the New York Public Library, is the one well-known instance. The phrase is not a convention of old maps.",
            sourceLessonSlug: "here-be-dragons",
          },
          {
            prompt: "Some specialists argue the Hunt-Lenox inscription may not read \"dracones\" at all. What is the alternative reading?",
            options: [
              "Dagroian, a Sumatran kingdom described by Marco Polo",
              "Draconis, the name of the globe's engraver",
              "Dacia, the Roman province north of the Danube",
              "Dragonetti, a Venetian trading family",
            ],
            correctIndex: 0,
            explanation:
              "The reading is genuinely contested. Saying so precisely is the method the course is teaching.",
            sourceLessonSlug: "here-be-dragons",
          },
          {
            prompt: "A portolan chart shows excellent coastlines and an almost empty interior. What does the emptiness indicate?",
            options: [
              "Editing for a user who had no use for the interior",
              "That the chartmaker believed the interior was uninhabited",
              "That the vellum was too small to hold more detail",
              "That interiors were forbidden subjects for chartmakers",
            ],
            correctIndex: 0,
            explanation:
              "A sailor navigating a coast does not need the interior, so a working chart leaves it out. Absence on a document is often a fact about its purpose.",
            sourceLessonSlug: "what-a-map-is-for",
          },
          {
            prompt: "What sits at the centre of the Hereford Mappa Mundi?",
            options: ["Jerusalem", "Rome", "Hereford", "The Mediterranean Sea"],
            correctIndex: 0,
            explanation:
              "Jerusalem occupies the center, and east is at the top. The arrangement encodes meaning rather than navigation.",
            sourceLessonSlug: "what-a-map-is-for",
          },
          {
            prompt: "Which question does a mappa mundi set out to answer?",
            options: [
              "What is the world, and what does it mean",
              "How do I sail from Genoa to Alexandria",
              "Where is the border between two kingdoms",
              "How deep is the water in this harbor",
            ],
            correctIndex: 0,
            explanation:
              "It is closer to an encyclopaedia arranged geographically than to a route-finding document.",
            sourceLessonSlug: "what-a-map-is-for",
          },
          {
            prompt: "What kind of object is a T-O map?",
            options: [
              "A schematic showing how three landmasses relate",
              "A survey drawn from measured coastal distances",
              "A navigational chart used with a compass",
              "A property record showing who owned which land",
            ],
            correctIndex: 0,
            explanation:
              "It shows a relationship, the way a subway map does, and was never intended as a picture of true shape.",
            sourceLessonSlug: "the-t-o-map",
          },
          {
            prompt: "Isidore of Seville drew a T-O diagram. What did he write about the shape of the earth?",
            options: [
              "He discussed it as a sphere",
              "He argued it was a flat disc bounded by ice",
              "He refused to describe its shape at all",
              "He described it as a hollow cylinder",
            ],
            correctIndex: 0,
            explanation:
              "The diagram was never a claim that the world was a flat circle. Treating it as one is the category error the lesson names.",
            sourceLessonSlug: "the-t-o-map",
          },
          {
            prompt: 'The lesson calls reading a schematic as a survey a "category error." Why is that worse than an ordinary mistake?',
            options: [
              "Every later conclusion is worthless because the object was misidentified",
              "It can only be corrected by measuring the original document",
              "It is a mistake that only affects historians of cartography",
              "It always reverses the direction of the argument being made",
            ],
            correctIndex: 0,
            explanation:
              "If you are wrong about what kind of thing you are looking at, careful reasoning from that point on does not save you.",
            sourceLessonSlug: "the-t-o-map",
          },
          {
            prompt: "What is the single test the course offers for judging any map fairly?",
            options: [
              "Ask what question it was made to answer, and for whom",
              "Compare its coastlines against a modern satellite image",
              "Check whether it places north at the top",
              "Count how many place names it records",
            ],
            correctIndex: 0,
            explanation:
              "Reading for genre. It is the most portable skill in the course and it applies well beyond maps.",
            sourceLessonSlug: "what-a-map-is-for",
          },
          {
            prompt: "Why does the course open with a fact that most people already believe and that turns out to be wrong?",
            options: [
              "Because a story that flatters the reader travels faster than an accurate one",
              "Because medieval mapmakers were more careless than their reputation suggests",
              "Because the phrase was invented by a nineteenth-century forger",
              "Because no surviving map from the period can be dated reliably",
            ],
            correctIndex: 0,
            explanation:
              "The habit the course is building is to slow down at exactly the moment a fact makes you look sharp by comparison.",
            sourceLessonSlug: "here-be-dragons",
          },
          {
            prompt: "The Hereford Mappa Mundi and contemporary portolan charts look completely different. Why?",
            options: [
              "They were made to answer different questions",
              "They were made centuries apart",
              "One is a copy of a lost Roman original",
              "One was drawn by clergy and the other was forbidden to them",
            ],
            correctIndex: 0,
            explanation:
              "Same era, same culture, sometimes the same cities. Genre, not capability, explains the difference.",
            sourceLessonSlug: "what-a-map-is-for",
          },
          {
            prompt: "Where is the modern reader most likely to repeat the T-O mistake?",
            options: [
              "On a simplified chart or diagram in a news article or company report",
              "On a national census table",
              "On a photograph of a historical artifact",
              "On a transcript of a recorded interview",
            ],
            correctIndex: 0,
            explanation:
              "Something built to show a relationship gets read as a claim about magnitude, and someone usually benefits from the confusion.",
            sourceLessonSlug: "the-t-o-map",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 2 · Reading the maps
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "hereford-close-reading",
      title: "4 · Reading one object closely: the Hereford Mappa Mundi",
      section: "Section 2 · Reading the maps",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281337/witus/courses/here-be-dragons/monsters-at-the-edge-of-the-map/hereford-mappa-mundi.jpg ||| A large circular medieval world map drawn on vellum, dense with figures, buildings, animals and text. ||| The Hereford Mappa Mundi, about 1300. East at the top, Jerusalem at the centre, and a real river, a scriptural event and a creature from a Roman encyclopaedia sharing one surface with no visible seam. ||| Unknown. Hereford Mappa Mundi 1300.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Hereford_Mappa_Mundi_1300.jpg
Around 1300, someone drew the world on a single sheet of calfskin about 1.6 metres tall. It still hangs in Hereford Cathedral. It is the largest medieval map of its kind to survive intact, and it rewards the kind of slow looking this course is asking you to practice.

## Start with the frame, not the content

East at the top. Jerusalem at the center. Christ presiding over the whole sheet from above the rim, with the saved on one side and the damned on the other.

Before a single place name is read, the object has already told you its organizing principle: **this is a picture of a world inside a story**. Position on this map means importance and meaning, not latitude.

## Now the content

Britain and Ireland are down in the bottom left, cramped against the edge of the frame, which is roughly where they belong on a map centered on Jerusalem and shaped like this. The Mediterranean is recognisable. So are the Nile and the Red Sea.

Scattered across it: the Tower of Babel. The route of the Exodus. Animals, some ordinary and some not. And in the southern and eastern margins, the peoples that ancient authors had described and that lesson 11 will deal with directly.

## The thing worth noticing

The map mixes what we would separate. A real river, a scriptural event, a creature from a Roman encyclopaedia, and a working trade route sit on one surface with no visible seam between them.

That is not sloppiness. It reflects a genuinely different idea of what counts as knowledge about the world, in which what happened in a place and what is true of a place are not filed separately. You do not have to share that view to understand that it is a view, held for reasons, by people who could have drawn a portolan chart instead and sometimes did.

## The question to hold

Which of the things on this map did its maker believe he had good evidence for, and which was he passing along because a respected authority had written it down?

You will not fully answer that. But asking it turns the map from a curiosity into a document with an author who made choices, and that is the difference between looking and reading.

:::reveal What does position on the Hereford map encode? ||| Importance and meaning rather than latitude. Jerusalem is central and east is at the top because the map is organized around a story, not around navigation.

:::reveal The map puts a scriptural event, a real river, and a creature from a Roman encyclopaedia on one surface. What does that reflect? ||| A different idea of what counts as knowledge about a place, in which what happened there and what is true of it are not filed separately.

## Sources
- Harvey, P. D. A. (1996). *Mappa mundi: The Hereford world map*. Hereford Cathedral and the British Library.
- Westrem, S. D. (2001). *The Hereford Map: A transcription and translation of the legends with commentary*. Brepols.`,
    },
    {
      slug: "ptolemy-recovered",
      title: "5 · What a second-century book did to fifteenth-century Europe",
      section: "Section 2 · Reading the maps",
      body: `Around 150 CE, in Alexandria, Claudius Ptolemy compiled a work now called the *Geography*. It was not a book of pictures. It was mostly a **list of coordinates**, thousands of places with numbers attached, plus instructions for projecting a curved surface onto a flat one.

Then, in Western Europe, it was effectively lost for something like a thousand years. It survived in the Greek-reading Byzantine world and in the Islamic scholarly tradition, which is a detail worth pausing on: "lost" in these stories almost always means lost to one particular audience, not lost.

It returned to Latin-reading Europe in the early 1400s through a translation from Greek, and printed editions followed later that century.

## What arrived with it

Two things, and the second matters more.

**A pile of data.** Coordinates for places, some good, some badly wrong, all of them centuries stale.

**A method.** The idea that a map should be built from measured positions on a grid, and that any point on earth can be expressed as a pair of numbers. That is a way of thinking about space, and once you have it, maps stop being pictures of relationships and start being claims that can be checked.

## Why this belongs in a course about monsters

Because it changes what a mapmaker can be wrong about, and therefore what "wrong" even means.

On a mappa mundi, a creature in the southern margin is not a falsifiable claim about a location. On a Ptolemaic grid, everything on the sheet is at a coordinate, and a coordinate is a promise. The monsters do not disappear when the grid arrives (lesson 6 is about a monster-covered map from 1539, well into the new era). But they are now sitting on a document that invites you to go and check, and that changes their status even while they are still being drawn.

## The uncomfortable half

The grid also made confident nonsense possible at a new scale. A wrong coordinate looks exactly like a right one. Precision is not accuracy, and a number carries an air of authority that a drawing does not.

You will meet the sharpest version of that in course 4 of this series, where a specific bad number about the size of the earth sends a specific expedition west with entirely misplaced confidence.

:::reveal What did Ptolemy's Geography mainly consist of? ||| A list of thousands of places with coordinates, plus instructions for projecting a sphere onto a flat surface. It was a method and a dataset more than a picture.

:::reveal Why does the arrival of a coordinate grid change the status of a monster drawn on a map? ||| Because everything on a gridded map sits at a checkable position. The monster is now on a document that invites verification, even while it is still being drawn.

:::reveal What is the risk that arrives together with the grid? ||| That a wrong coordinate looks exactly like a right one. Precision is not accuracy, and numbers carry an authority that drawings do not.

## Sources
- Berggren, J. L., & Jones, A. (2000). *Ptolemy's Geography: An annotated translation of the theoretical chapters*. Princeton University Press.
- Ptolemy, C. (1477). *Cosmographia*. Domenico de Lapi. (Original work composed c. 150 CE)`,
    },
    {
      slug: "carta-marina",
      title: "6 · Olaus Magnus and the Carta Marina",
      section: "Section 2 · Reading the maps",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281369/witus/courses/here-be-dragons/monsters-at-the-edge-of-the-map/carta-marina-1539.jpg ||| A large sixteenth-century map of northern Europe and its seas, filled with ships and sea creatures. ||| Olaus Magnus, Carta marina, 1539. Hold two facts together: these were the best coastlines available for the northern seas, and the water is full of monsters. ||| Olaus Magnus. Carta Marina.jpeg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Carta_Marina.jpeg
In 1539, a Swedish churchman living in exile in Italy published an enormous map of the northern seas. Olaus Magnus called it the *Carta marina*, and it was printed in Venice from nine woodblocks that together make a sheet roughly 1.7 metres wide.

It is the single most famous monster map in existence. Sea serpents coil around ships. A creature with tusks climbs a cliff. Something enormous and whiskered surfaces beside a vessel while sailors on deck react. There is a whale being mistaken for an island, with men lighting a fire on its back.

And the coastlines are the best anyone had produced for that part of the world.

## Hold those two facts together

This is the lesson. The Carta Marina is not a bad map with monsters on it. It is a **good** map with monsters on it, made by an author who had gathered real information about a region most of his readers would never see, and who filled his seas with creatures.

If your model is "monsters mean ignorance," this object breaks it immediately. So the model is wrong and needs replacing.

## What the monsters are doing

Chet Van Duzer, who has cataloged sea monsters across surviving maps more thoroughly than anyone, finds that they are rarely inventions from nothing. They are typically drawn from three places: written authorities the mapmaker trusted, garbled reports of real animals, and earlier maps.

And they serve purposes:

**They are information, of a kind.** These waters have large dangerous animals in them. That is true. Walruses, whales and squid exist, and a sailor who has seen a walrus haul out on a rock at close range has seen something a Renaissance reader would not have a category for.

**They are warning.** This is not a coastal trip.

**They are advertising.** A large printed map was an expensive object competing for a wealthy buyer's attention. Empty ocean sells nothing. Olaus Magnus later wrote a long book about the northern peoples, and the map worked as a spectacular argument for the importance of his subject.

## The habit

When you meet something on a document that looks like superstition, ask what it is *doing* before you ask whether its maker believed it. Those are different questions, and the second one is usually unanswerable while the first is often answerable from the object itself.

:::reveal Why does the Carta Marina break the model "monsters mean ignorance"? ||| Because it is a genuinely good map. Its coastlines were the best available for the northern seas, and it is covered in monsters at the same time.

:::reveal Name the three functions this lesson gives for sea monsters on a printed map. ||| Information (these waters hold large dangerous animals), warning (this is not a coastal trip), and advertising (empty ocean does not sell an expensive printed sheet).

:::reveal Which question is usually answerable from the object itself: what a drawing is doing, or whether its maker believed it? ||| What it is doing. Belief is mostly unanswerable at this distance; function is often visible in the object.

## Sources
- Magnus, O. (1539). *Carta marina et descriptio septentrionalium terrarum*. Venice.
- Magnus, O. (1555). *Historia de gentibus septentrionalibus*. Rome.
- Van Duzer, C. (2013). *Sea monsters on medieval and Renaissance maps*. British Library.`,
    },
    {
      slug: "monsters-as-argument",
      title: "7 · Decoration, warning, advertisement",
      section: "Section 2 · Reading the maps",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281340/witus/courses/here-be-dragons/monsters-at-the-edge-of-the-map/carta-marina-sea-serpent.jpg ||| A detail from a sixteenth-century sea chart showing a large serpent coiled around a sailing ship. ||| A detail worth asking the lesson's question about: not whether the mapmaker believed it, but what it is doing. Information, warning, and advertisement for an expensive printed sheet. ||| Original printed map drawn by Olaus Magnus in 1539. His WP page is https://en.wikipedia.org/wiki/Olaus_Magnus. The photo of the map is by Wiki Commons user Jeff Dahl at https://commons.wikimedia.org/wiki/User:Jeff_Dahl. Carta Marina 1539 with sea serpent.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Carta_Marina_1539_with_sea_serpent.jpg
Lesson 6 gave you three jobs a sea monster can do. This lesson turns that into something you can use on any document, because the underlying move is not about monsters at all.

## Every element on a made thing is there because someone put it there

That sounds obvious and it is constantly forgotten. A map is not a natural object that grew. Somebody chose the projection, the center, the extent, the colors, what to name, what to leave unnamed, and what to draw in the blank parts. Each of those is a decision with a reason, and the reasons are not all about accuracy.

Some are about **cost**: engraving is expensive, so what earns its space?

Some are about **the buyer**: who is paying, and what do they want this object to say about them when it hangs in their hall?

Some are about **the author's argument**: Olaus Magnus was a displaced Catholic bishop from a Sweden that had turned Lutheran, making the case in Italy that the north was significant, storied, and worth attention. A dramatic sea is an argument for the drama of the place.

Some are about **inheritance**: the mapmaker copied an earlier map, because that is how maps were made, and the creature came along with the coastline.

## Applying it where it stings

Take any chart in any modern annual report. Someone chose where the vertical axis starts. Someone chose which years to include. Someone chose whether the comparison bar is your competitor's best year or their worst. Someone chose the color that reads as "good."

None of those choices is a lie. All of them are argument. The document is not neutral and was never trying to be, and the mistake is not that it argues but that you read it as if it did not.

## The sentence worth keeping

**A document is a set of decisions made by someone with interests.** Once that is a reflex, you stop asking "is this true or false" as the first question and start asking "what is this for, who made it, and what did they leave out," which is a question you can usually make progress on.

:::reveal Why is it a mistake to read a document as neutral? ||| Because every element in it is a decision made by someone with interests. The problem is not that it argues; it is reading it as though it did not.

:::reveal Give a reason other than accuracy that decides what appears on a printed map. ||| Cost (engraving is expensive), the buyer's taste, the author's argument, or simple inheritance from the earlier map being copied.

## Sources
- Harley, J. B. (1989). Deconstructing the map. *Cartographica, 26*(2), 1-20.
- Van Duzer, C. (2013). *Sea monsters on medieval and Renaissance maps*. British Library.`,
      recallContent: [
        {
          prompt: "State the sentence this lesson wants you to carry into every document you read.",
          answer: "A document is a set of decisions made by someone with interests.",
        },
        {
          prompt:
            "What are the better first questions, in place of asking whether a document is true or false?",
          answer:
            "What is this for, who made it, and what did they leave out. Those are questions you can usually make progress on.",
        },
      ],
    },
    {
      slug: "map-the-margins",
      title: "8 · The margins over time",
      section: "Section 2 · Reading the maps",
      lessonType: "map",
      body: `This map plots places that mattered to European mapmaking between roughly 77 CE and the nineteenth century. Use the year control to watch what happens, because the shape of the change is the argument of this course.

**Blue markers** are the objects and inscriptions you have met in this section. **Amber markers** are places where European maps placed marvels, monsters or described peoples. **Green markers** are places that were thoroughly known, mapped or documented by people who were not European, sometimes centuries before a European map showed them well.

## What to look for

The naive expectation is a tidy progress story: blank space fills in as knowledge accumulates.

Watch Timbuktu. It appears on a European map in 1375, drawn with its ruler and considerable respect, because the information came through Mediterranean and Saharan trade networks that connected to it. Then look at what eighteenth and nineteenth-century European maps of Africa's interior look like. The knowledge did not accumulate steadily. In this region it went backwards, and then the emptiness got filled with decoration.

Jonathan Swift noticed this in 1733 and wrote a couplet about it that is quoted in the next lesson.

## The honest limits of this map

Every marker here exists because something was written down and survived. The green markers are the ones that most understate the truth: they represent a tiny fraction of the geographic knowledge held by people who did not produce the kind of document that ends up in a European archive. The map cannot show what was never recorded in a form that lasted, and it will not pretend to.

That is not a disclaimer to skim. It is the same point as the empty interior of a portolan chart in lesson 2: **absence on a document is usually a fact about the document, not about the world.**

:::reveal Does this map show European knowledge of Africa's interior increasing steadily? ||| No. Timbuktu appears with respect on a 1375 European map, and later European maps of the interior are emptier. The knowledge went backwards before it went forward.

:::reveal What do the green markers understate, and why? ||| Geographic knowledge held by people who did not produce documents that ended up in European archives. The map can only plot what was recorded in a form that survived.

## Sources
- Cresques, A. (1375). *Catalan Atlas*. Bibliothèque nationale de France.
- Harley, J. B. (1988). Silences and secrecy: The hidden agenda of cartography in early modern Europe. *Imago Mundi, 40*, 57-76.
- Swift, J. (1733). *On poetry: A rhapsody*. London.`,
      mapContent: {
        markers: [
          {
            id: "hunt-lenox",
            lat: 5.0,
            lng: 105.0,
            year: 1510,
            color: "#1d4ed8",
            title: "HC SVNT DRACONES, off Southeast Asia",
            description:
              "The approximate region where the Hunt-Lenox Globe carries the only well-known historical instance of the phrase. Plotted approximately: the globe is a small engraved sphere, not a surveyed chart, so a precise coordinate would be a false promise. Some specialists read the inscription as Dagroian, a Sumatran kingdom described by Marco Polo, rather than dracones.",
          },
          {
            id: "hereford",
            lat: 52.056,
            lng: -2.715,
            year: 1300,
            color: "#1d4ed8",
            title: "Hereford Mappa Mundi, England",
            description:
              "Where the largest intact medieval world map of its kind still hangs. East at the top, Jerusalem at the center, and history, scripture and natural history laid out in space. Lesson 4 reads it closely.",
          },
          {
            id: "jerusalem",
            lat: 31.778,
            lng: 35.229,
            year: 1300,
            color: "#1d4ed8",
            title: "Jerusalem, the center of the mappa mundi",
            description:
              "Not the geographic center of anything. The center of an argument about meaning. Position on a mappa mundi encodes importance, which is why reading it as a road map produces nonsense.",
          },
          {
            id: "venice",
            lat: 45.44,
            lng: 12.32,
            year: 1539,
            color: "#1d4ed8",
            title: "Venice, where the Carta Marina was printed",
            description:
              "Olaus Magnus published his great map of the northern seas here in 1539, printed from nine woodblocks. Excellent coastlines, covered in monsters. The object that breaks the model that monsters mean ignorance.",
          },
          {
            id: "norwegian-sea",
            lat: 66.0,
            lng: 2.0,
            year: 1539,
            color: "#b45309",
            title: "The northern seas of the Carta Marina",
            description:
              "Where Olaus Magnus placed his sea serpents, his tusked climbing creature and his whale mistaken for an island. Real walruses, whales and squid live here, which is part of why the drawings are less unhinged than they look.",
          },
          {
            id: "india-pliny",
            lat: 20.0,
            lng: 78.0,
            year: 77,
            color: "#b45309",
            title: "Where Pliny placed the monstrous races",
            description:
              "Pliny the Elder's Natural History, completed around 77 CE, located peoples with strange bodies at the edges of the known world, mostly in India and Ethiopia. Those descriptions were still being copied onto maps more than a thousand years later. Lesson 11 deals with them directly.",
          },
          {
            id: "sumatra-mandeville",
            lat: 0.5,
            lng: 101.4,
            year: 1360,
            color: "#b45309",
            title: "The marvels of the Book of John Mandeville",
            description:
              "The most popular travel book in medieval Europe described wonders across Asia. Its author had, as far as anyone can establish, compiled it from other books rather than traveled. Lesson 10 is about what that does to a text read as testimony.",
          },
          {
            id: "timbuktu",
            lat: 16.775,
            lng: -3.009,
            year: 1375,
            color: "#15803d",
            title: "Timbuktu on the Catalan Atlas",
            description:
              "The 1375 Catalan Atlas shows the ruler of Mali holding a gold nugget, drawn from information that reached Mediterranean mapmakers through Saharan trade. European maps of this region got EMPTIER in the following centuries. The blank interior was a later development, not an original condition.",
          },
          {
            id: "great-zimbabwe",
            lat: -20.267,
            lng: 30.933,
            year: 1200,
            color: "#15803d",
            title: "Great Zimbabwe",
            description:
              "A large stone-built city, occupied and constructed across roughly the eleventh to fifteenth centuries, entirely absent from the European maps of the era that decorated this part of the continent with animals. Plotted at its construction era, not at the date a European first wrote about it.",
          },
          {
            id: "marshall-islands",
            lat: 7.131,
            lng: 171.184,
            year: 1862,
            color: "#15803d",
            title: "Marshall Islands stick charts",
            description:
              "Navigators here encoded swell patterns and island positions in frameworks of sticks and shells. The year plotted is roughly when Europeans first described them, NOT when the knowledge existed, which is far older. The gap between those two dates is the point of this marker.",
          },
          {
            id: "alexandria",
            lat: 31.2,
            lng: 29.92,
            year: 150,
            color: "#1d4ed8",
            title: "Alexandria, where Ptolemy compiled the Geography",
            description:
              "Thousands of places with coordinates, plus a method for projecting a sphere onto a flat sheet. Effectively lost to Latin-reading Europe for centuries while it survived in Greek-reading and Islamic scholarly traditions, and back in circulation in the west by the early 1400s.",
          },
        ],
      },
    },
    {
      slug: "quiz-reading-maps",
      title: "Section 2 quiz · Reading the maps",
      section: "Section 2 · Reading the maps",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What makes the Carta Marina a problem for the idea that monsters signal ignorance?",
            options: [
              "Its coastlines were the best available for the northern seas",
              "Its monsters were added by a later owner",
              "It was drawn without reference to any earlier map",
              "It was never intended for sale to the public",
            ],
            correctIndex: 0,
            explanation:
              "A genuinely good map, covered in monsters, made by an informed author. The model has to be replaced rather than patched.",
            sourceLessonSlug: "carta-marina",
          },
          {
            prompt: "According to Van Duzer's survey, where do the creatures on maps usually come from?",
            options: [
              "Written authorities, garbled reports of real animals, and earlier maps",
              "The personal dreams and visions of individual engravers",
              "Sailors' sworn depositions collected by port authorities",
              "Church commissions specifying which creatures to include",
            ],
            correctIndex: 0,
            explanation:
              "They are rarely invented from nothing, which is why treating them as pure fantasy misreads them.",
            sourceLessonSlug: "carta-marina",
          },
          {
            prompt: "Olaus Magnus was making an argument with his map. What was it?",
            options: [
              "That the north was significant, storied and worth attention",
              "That Venice should fund a northern trading fleet",
              "That the northern seas were safe for ordinary shipping",
              "That Ptolemy's coordinates should be abandoned entirely",
            ],
            correctIndex: 0,
            explanation:
              "A displaced bishop from a Sweden that had turned Lutheran, arguing in Italy for his subject's importance. A dramatic sea is an argument for a dramatic place.",
            sourceLessonSlug: "monsters-as-argument",
          },
          {
            prompt: "What did Ptolemy's Geography mainly contain?",
            options: [
              "Coordinates for thousands of places, and projection instructions",
              "Illustrated descriptions of the peoples of each province",
              "A day-by-day narrative of a voyage around the Mediterranean",
              "A catalog of the animals found in each named region",
            ],
            correctIndex: 0,
            explanation: "A dataset and a method, not a picture book.",
            sourceLessonSlug: "ptolemy-recovered",
          },
          {
            prompt: 'The lesson says Ptolemy\'s work was "lost" to Europe for centuries. What does that word conceal?',
            options: [
              "It survived in Greek-reading and Islamic scholarly traditions",
              "It was deliberately destroyed and later reconstructed",
              "It was never written down until the fifteenth century",
              "It was preserved only as a set of oral instructions",
            ],
            correctIndex: 0,
            explanation:
              "Lost in these stories almost always means lost to one particular audience, not lost.",
            sourceLessonSlug: "ptolemy-recovered",
          },
          {
            prompt: "Why does a coordinate grid change the status of what is drawn on a map?",
            options: [
              "Everything on the sheet now sits at a checkable position",
              "It makes decorative elements physically impossible to engrave",
              "It requires every element to be dated as well as placed",
              "It transfers authorship from the engraver to the surveyor",
            ],
            correctIndex: 0,
            explanation:
              "A coordinate is a promise. The monsters do not vanish, but they now sit on a document that invites verification.",
            sourceLessonSlug: "ptolemy-recovered",
          },
          {
            prompt: "What risk arrives together with the coordinate grid?",
            options: [
              "A wrong coordinate looks exactly like a right one",
              "Coastlines become harder to draw accurately",
              "Maps become too expensive for anyone to purchase",
              "Place names have to be translated into Greek",
            ],
            correctIndex: 0,
            explanation:
              "Precision is not accuracy, and a number carries an air of authority that a drawing does not.",
            sourceLessonSlug: "ptolemy-recovered",
          },
          {
            prompt: "On the Hereford Mappa Mundi, what does a place's position encode?",
            options: [
              "Its importance and meaning",
              "Its distance from the nearest seaport",
              "Its population at the time of drawing",
              "Its elevation above sea level",
            ],
            correctIndex: 0,
            explanation:
              "The map organises a world inside a story. Jerusalem at the center and east at the top follow from that.",
            sourceLessonSlug: "hereford-close-reading",
          },
          {
            prompt: "What happened to European maps of the African interior after the 1375 Catalan Atlas?",
            options: [
              "They got emptier, and the space was filled with decoration",
              "They steadily gained detail every century",
              "They were withdrawn from circulation by trading companies",
              "They were redrawn using coordinates supplied from Timbuktu",
            ],
            correctIndex: 0,
            explanation:
              "The knowledge went backwards in this region before it went forward. The blank interior was a later development, not an original condition.",
            sourceLessonSlug: "map-the-margins",
          },
          {
            prompt: "The map lesson plots Marshall Islands stick charts at a nineteenth-century date. What does that date represent?",
            options: [
              "Roughly when Europeans first described them",
              "When the navigation technique was invented",
              "When the charts were first carried aboard canoes",
              "When the islands were first permanently settled",
            ],
            correctIndex: 0,
            explanation:
              "The knowledge is far older. The gap between when something existed and when an outside archive noticed it is the point of that marker.",
            sourceLessonSlug: "map-the-margins",
          },
          {
            prompt: "What does absence on a document usually tell you?",
            options: [
              "Something about the document, not about the world",
              "That the subject did not exist at the time of drawing",
              "That the author was working from an incomplete copy",
              "That the material ran out before the work was finished",
            ],
            correctIndex: 0,
            explanation:
              "The same lesson as the empty interior of a portolan chart. It recurs in every course in this series.",
            sourceLessonSlug: "map-the-margins",
          },
          {
            prompt: "Which pair of questions does the course recommend in place of asking whether a document is true or false?",
            options: [
              "What is this for and who made it, and what did they leave out",
              "How old is it, and how many copies survive",
              "Was the author present, and did anyone contradict them",
              "What did it cost, and who eventually bought it",
            ],
            correctIndex: 0,
            explanation:
              "Both are usually answerable from the object itself, which is what makes them useful.",
            sourceLessonSlug: "monsters-as-argument",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 3 · How a description travels
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "the-whale-that-is-an-island",
      title: "9 · The whale that is an island",
      section: "Section 3 · How a description travels",
      body: `Sailors land on a small bare island. They light a fire to cook. The island convulses and dives, because it was never an island, and the men are lost.

You have met this story. It is in the *Physiologus*, a Greek Christian text about animals and their moral meanings that circulated from roughly the second to fourth century CE. It is in the Irish *Navigatio Sancti Brendani*, where Brendan's monks land on the creature and return to it each year. It is in the Sinbad voyages. It is drawn on the Carta Marina in 1539. It reaches Milton in the seventeenth century.

## Follow what actually traveled

Not an observation. A **story**, copied from text to text for well over a thousand years, picking up local detail at each stop and losing its origin.

By the time a mapmaker in 1539 engraves it, he is not reporting a sighting. He is including a thing that is in the literature. It is in the literature because it was in the earlier literature.

## The word for this, and why it matters

Repetition is not corroboration.

Ten sources saying the same thing is only ten pieces of evidence if the ten sources are **independent**. If nine of them are copying the tenth, you have one piece of evidence and nine copies, and the pile looks impressively deep while being one document tall.

This is not a medieval problem. It is the single most common failure in modern information, where a claim gets aggregated, quoted, re-quoted and cited until the original, if it existed, is unreachable. The pile grows. The evidence does not.

## The practical version

When something is widely repeated, the useful question is not "how many sources say this." It is **"how many independent sources say this, and what is the earliest one?"**

Following a claim back to its earliest form is a skill you can practice in an afternoon, and it will change what you believe more than almost anything else in this series.

## What is fair to the mapmaker

He was not being credulous by the standards available to him. The story came with the authority of age and of respected texts. Distinguishing "old and widely attested" from "independently confirmed" required a habit of mind that had to be invented, argued for, and institutionalised, which is a large part of what the next two courses are about.

:::reveal Why is "ten sources say so" not necessarily strong evidence? ||| Because the sources may not be independent. Nine copying the tenth gives you one piece of evidence and nine copies.

:::reveal What is the better question to ask about a widely repeated claim? ||| How many INDEPENDENT sources say it, and what is the earliest one. Following it back to its earliest form is the practical skill.

## Sources
- Curley, M. J. (Trans.). (1979). *Physiologus: A medieval book of nature lore*. University of Texas Press.
- O'Meara, J. J. (Trans.). (1976). *The voyage of Saint Brendan: Journey to the promised land*. Dolmen Press.
- Van Duzer, C. (2013). *Sea monsters on medieval and Renaissance maps*. British Library.`,
      recallContent: [
        {
          prompt: "State the rule this lesson gives about repeated claims.",
          answer:
            "Repetition is not corroboration. Sources only count separately if they are independent of each other.",
        },
        {
          prompt: "Why is it unfair to call the 1539 mapmaker credulous for drawing the island-whale?",
          answer:
            "The story arrived with the authority of age and respected texts. Telling old-and-widely-attested apart from independently-confirmed required a habit of mind that still had to be invented and institutionalised.",
        },
      ],
    },
    {
      slug: "the-eyewitness-who-wasnt",
      title: "10 · How they wrote it: the eyewitness who was not there",
      section: "Section 3 · How a description travels",
      body: `This is the first of the recurring writing lessons in this series. Each one takes a single move in how people describe the world and shows you it working.

## The book

Sometime around the 1350s or 1360s, a book appeared describing a journey through the Holy Land and onward across Asia. It is usually called the *Book of John Mandeville*, after the knight who narrates it. It was wildly successful, survives in hundreds of manuscripts, was translated into many languages, and was read for centuries as a real traveler's account.

Its author almost certainly did not make the journey. Scholars have traced long stretches to earlier texts, including genuine travel accounts by people who did go. Even the identity of "Sir John Mandeville" is unresolved.

## The device, which is the actual lesson

Read a sentence from a genuine report and a sentence from a compilation and they can look identical. What differs is not style. It is **standing**: whether the person writing had any way of knowing.

The book creates standing with technique. A narrator with a name and a nationality. First person. Dates and itineraries. Small confiding admissions. Occasional skepticism about one marvel, which purchases credibility for the next twenty.

That last one is worth naming, because it is still in constant use: **strategic skepticism**. A writer who doubts one thing seems like a careful person, and their assent then carries weight it has not earned. Watch for it in advertising, in political speech, and in any account that says "now, I was sceptical at first."

## Why this belongs in a course about maps

Because mapmakers read Mandeville. Material from it, and from the compilations it drew on, ended up drawn onto maps. A description written by someone who had not been there became a picture of a place, and the picture then looked like evidence.

That is the pipeline this whole section has been building: **text to text to picture to fact.** At no point does anyone lie. Each step is a reasonable act by someone working with what they had, and the output is confident and wrong.

## The question to carry

Not "is this person lying." Almost nobody in this course is lying. The question is: **what could this person actually have known, and how?**

Ask it of a medieval travel narrative. Then ask it of the next confident account you read of somewhere you have never been.

:::reveal What is "standing," and why does it matter more than style? ||| Whether the writer had any way of knowing what they assert. A compiled account and a genuine report can read identically, so style cannot tell them apart.

:::reveal What is strategic scepticism, and what does it buy the writer? ||| Doubting one claim to seem careful, which lends unearned credibility to everything the writer then accepts.

:::reveal What is the question to carry out of this lesson? ||| Not "is this person lying," but "what could this person actually have known, and how?"

## Sources
- Higgins, I. M. (Trans.). (2011). *The book of John Mandeville, with related texts*. Hackett.
- Tzanaki, R. (2003). *Mandeville's medieval audiences: A study on the reception of the Book of Sir John Mandeville (1371-1550)*. Ashgate.`,
    },
    {
      slug: "plinys-monstrous-races",
      title: "11 · Pliny's catalog of people nobody had met",
      section: "Section 3 · How a description travels",
      body: `Around 77 CE, Pliny the Elder completed the *Natural History*, an enormous compilation of everything he could gather about the world. In its seventh book he describes peoples living at the edges of the known world.

People with one enormous foot they lie beneath for shade. People with no heads and faces in their chests. People with dogs' heads who bark. People who live on smell alone.

He is a compiler, and he is often careful to attribute: he says who reported a thing. But the descriptions enter the record, and they stay there. They are copied by later encyclopaedists, they reach the medieval world, they are drawn in the margins of the Hereford map around 1300, and they are still being printed in the fifteenth and sixteenth centuries.

Well over a thousand years of continuous transmission for claims about human beings that nobody had ever verified.

## Notice the pattern in where they live

They are never here. They are always at the edge: in India, in Ethiopia, in whatever direction the writer's knowledge runs out. As European knowledge of one region improved, the monstrous races **moved** to a region still unknown.

That movement is the most revealing thing about them. If they were reports, they would stay where they were reported. Because they are a function of the edge itself, they travel with the edge.

## What they are for

They mark a boundary, and they populate it. A blank space is uncomfortable; a boundary with something on the far side of it is legible. And they do a second thing, quieter and more consequential: they establish that at the edge of the world, **people stop being like us.**

That is a claim about distance and difference, and it is doing work long before anyone acts on it.

## Where this is going

The next lesson is the hinge of this course and, arguably, of the whole series. Europeans eventually reached the places where the monstrous races were supposed to live and found people. Ordinary people, with cities, laws, farming, trade, religion and history.

The catalog did not simply get discarded when it met reality. Some of its vocabulary and some of its logic transferred onto the actual people who were found there.

Hold on to two things before you turn the page. First, Pliny is not the villain: he was compiling reports in the first century and mostly said where they came from. Second, and less comfortable: a description does not need to be believed to be **useful**. It only needs to be available at the moment someone needs a reason.

:::reveal What is the most revealing thing about where the monstrous races were said to live? ||| They were always at the edge of what the writer knew, and they MOVED as knowledge improved. A report stays put; a function of the edge travels with the edge.

:::reveal What quieter claim do the monstrous races establish? ||| That at the edge of the world, people stop being like us. That is a claim about difference, and it is doing work long before anyone acts on it.

## Sources
- Pliny the Elder. (1942). *Natural history* (H. Rackham, Trans.; Vol. 2, Books 3-7). Harvard University Press. (Original work published c. 77 CE)
- Friedman, J. B. (2000). *The monstrous races in medieval art and thought*. Syracuse University Press.`,
    },
    {
      slug: "quiz-how-a-description-travels",
      title: "Section 3 quiz · How a description travels",
      section: "Section 3 · How a description travels",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What actually travelled from the Physiologus to the Carta Marina?",
            options: [
              "A story, copied from text to text for over a thousand years",
              "A sailor's deposition taken in a Venetian port",
              "A specimen preserved and shipped between collections",
              "A measurement recorded in a ship's log",
            ],
            correctIndex: 0,
            explanation:
              "Not an observation. By 1539 the mapmaker is including a thing that is in the literature because it was in the earlier literature.",
            sourceLessonSlug: "the-whale-that-is-an-island",
          },
          {
            prompt: "Under what condition do ten sources count as ten pieces of evidence?",
            options: [
              "When they are independent of each other",
              "When they were written in the same century",
              "When they agree on every detail",
              "When at least one author was an eyewitness",
            ],
            correctIndex: 0,
            explanation:
              "Nine copying the tenth gives one piece of evidence and nine copies. The pile looks deep while being one document tall.",
            sourceLessonSlug: "the-whale-that-is-an-island",
          },
          {
            prompt: "What is the useful question to ask about a widely repeated claim?",
            options: [
              "How many independent sources say it, and what is the earliest",
              "How recently was it most prominently published",
              "How many languages has it been translated into",
              "How many experts have declined to contradict it",
            ],
            correctIndex: 0,
            explanation: "Following a claim back to its earliest form is a skill you can practice in an afternoon.",
            sourceLessonSlug: "the-whale-that-is-an-island",
          },
          {
            prompt: "What is known about the author of the Book of John Mandeville?",
            options: [
              "The identity is unresolved and the journey almost certainly was not made",
              "He was a Flemish physician who traveled as far as Persia",
              "He was a Venetian merchant writing under a pen name",
              "He was a monk who copied a genuine account word for word",
            ],
            correctIndex: 0,
            explanation:
              "Long stretches have been traced to earlier texts, including genuine accounts by people who did travel.",
            sourceLessonSlug: "the-eyewitness-who-wasnt",
          },
          {
            prompt: 'The lesson defines "standing." What does it mean?',
            options: [
              "Whether the writer had any way of knowing what they assert",
              "How highly the writer was regarded by their contemporaries",
              "Whether the text was formally approved for publication",
              "How many manuscript copies of the text survive",
            ],
            correctIndex: 0,
            explanation:
              "A compiled account and a genuine report can read identically, so style cannot separate them. Standing can.",
            sourceLessonSlug: "the-eyewitness-who-wasnt",
          },
          {
            prompt: "What does a writer gain by expressing doubt about one marvel before accepting twenty others?",
            options: [
              "Unearned credibility for everything they then accept",
              "Legal protection against a claim of fraud",
              "Permission from a censor to publish the rest",
              "A reputation for humility among other writers",
            ],
            correctIndex: 0,
            explanation:
              "Strategic skepticism. It is still in constant use, and the phrase to watch for is some version of \"I was sceptical at first.\"",
            sourceLessonSlug: "the-eyewitness-who-wasnt",
          },
          {
            prompt: "The course describes a pipeline from Mandeville onto maps. What are its steps?",
            options: [
              "Text to text to picture to fact",
              "Rumour to sermon to statute to map",
              "Observation to sketch to engraving to archive",
              "Voyage to logbook to chart to atlas",
            ],
            correctIndex: 0,
            explanation:
              "At no point does anyone lie. Each step is reasonable, and the output is confident and wrong.",
            sourceLessonSlug: "the-eyewitness-who-wasnt",
          },
          {
            prompt: "Where did Pliny locate the peoples he described in Book 7 of the Natural History?",
            options: [
              "At the edges of the known world, mostly India and Ethiopia",
              "In the mountains of northern Italy",
              "On islands in the western Atlantic",
              "Beneath the earth in caverns near the Black Sea",
            ],
            correctIndex: 0,
            explanation:
              "Always at the edge of what the writer knew, which is what the next question is about.",
            sourceLessonSlug: "plinys-monstrous-races",
          },
          {
            prompt: "What happened to the monstrous races as European knowledge of a region improved?",
            options: [
              "They moved to a region that was still unknown",
              "They were formally retracted by later encyclopaedists",
              "They were relocated into accounts of the distant past",
              "They were redrawn as ordinary animals",
            ],
            correctIndex: 0,
            explanation:
              "A genuine report stays where it was reported. These travel with the edge, which shows what they were a function of.",
            sourceLessonSlug: "plinys-monstrous-races",
          },
          {
            prompt: "What is the quieter claim the monstrous races establish?",
            options: [
              "That at the edge of the world, people stop being like us",
              "That the earth's surface is larger than Ptolemy calculated",
              "That travel beyond a certain distance is physically impossible",
              "That only clergy could reliably describe distant lands",
            ],
            correctIndex: 0,
            explanation:
              "A claim about distance and difference, doing work long before anyone acts on it.",
            sourceLessonSlug: "plinys-monstrous-races",
          },
          {
            prompt: "Why does the lesson decline to treat Pliny as the villain?",
            options: [
              "He was compiling first-century reports and mostly said where they came from",
              "He never described any people at the edges of the world",
              "His work was unknown until the fifteenth century",
              "He wrote the descriptions as acknowledged fiction",
            ],
            correctIndex: 0,
            explanation:
              "The course refuses condescension. The problem is what a description gets used for, not that a compiler compiled.",
            sourceLessonSlug: "plinys-monstrous-races",
          },
          {
            prompt: "What does the lesson mean by saying a description does not need to be believed to be useful?",
            options: [
              "It only needs to be available when someone needs a reason",
              "It only needs to appear in a printed rather than handwritten source",
              "It only needs to be endorsed by a recognized authority",
              "It only needs to be translated into the local language",
            ],
            correctIndex: 0,
            explanation:
              "This is the sentence that sets up the hinge lesson, and it is the least comfortable idea in the course.",
            sourceLessonSlug: "plinys-monstrous-races",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 4 · From the margin to the world
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "from-margin-to-policy",
      title: "12 · The same device, aimed at real people",
      section: "Section 4 · From the margin to the world",
      body: `This is the lesson the course was built to reach. Read it slowly.

## What happened when the edge was reached

Europeans sailed to the places where the monstrous races were supposed to live. They found people: cities, laws, agriculture, long-distance trade, religion, scholarship, recorded history. Not a single one of Pliny's descriptions was there to be found, because there had never been anything to find.

You might expect the catalog to be quietly retired at that point. Something else happened alongside that. The *category* survived the failure of its contents.

The specific claims about headless men fell away. What persisted was the older, structural idea underneath them, the one lesson 11 named: **at the edge of the world, people stop being like us.** That frame was already built, already familiar, already carried a thousand years of authority, and it was available at the exact moment enormous economic interests needed a reason.

## What the frame was used to do

It appears in the vocabulary applied to peoples encountered in the Americas, in Africa, in Asia and in the Pacific: descriptions of them as closer to animals, as without history, as without real religion or government or law, as childlike, as needing supervision.

Those descriptions did not stay descriptions. They became the stated justification for conquest, for enslavement, for seizure of land, and for administrative systems built on the premise that the people being administered were not fully people. This platform has whole courses on what those systems did and how they were argued for.

## The precision this demands

Two errors are available here and both are bad.

**Do not overstate the mechanism.** Pliny did not cause the transatlantic slave trade. A first-century compiler is not responsible for what a seventeenth-century plantation economy did with a habit of thought. Economic interest is the engine; nobody enslaved anyone because of a book.

**Do not understate it either.** Interests need justification. A ready-made, respectable, ancient vocabulary for describing distant people as less than fully human was available, and it was used, repeatedly and explicitly, in documents that survive and can be read. That is not speculation about attitudes. It is in the record.

The accurate statement is narrow and strong: **the frame did not create the interest, and the interest could not have been publicly defended so easily without the frame.**

## Why a course about maps has to say this

Because the alternative is to teach the drawings as quaint. They were not quaint. The habit of describing distant people as marvels, developed over centuries in texts and pictures that felt harmless, was the same habit that was ready to hand when describing distant people became profitable.

The margin of a map is where a culture practises talking about people it does not have to answer to. That is why it is worth studying, and it is why this course does not end with the pretty monsters.

## Where to go next

This platform has courses that take the next step in detail, with sources: how the vocabulary of civilisation and savagery was constructed and taught, and what peoples described as having no history had actually built. Follow those before you decide this lesson has overstated anything.

:::reveal When Europeans reached the places where the monstrous races were said to live, what survived the discovery that they were not there? ||| The category, not the contents. The specific claims fell away; the structural idea that people at the edge of the world are not like us persisted.

:::reveal State the narrow, accurate claim about the relationship between the frame and the interest. ||| The frame did not create the interest, and the interest could not have been publicly defended so easily without the frame.

:::reveal Why does the course refuse to treat the map monsters as quaint? ||| Because the margin of a map is where a culture practises describing people it does not have to answer to, and that practiced habit was ready to hand when describing distant people became profitable.

## Sources
- Friedman, J. B. (2000). *The monstrous races in medieval art and thought*. Syracuse University Press.
- Hall, S. (1992). The West and the rest: Discourse and power. In S. Hall & B. Gieben (Eds.), *Formations of modernity* (pp. 275-332). Polity Press.
- Mignolo, W. D. (1995). *The darker side of the Renaissance: Literacy, territoriality, and colonization*. University of Michigan Press.`,
    },
    {
      slug: "the-blank-interior",
      title: "13 · How Africa's map emptied out",
      section: "Section 4 · From the margin to the world",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281341/witus/courses/here-be-dragons/monsters-at-the-edge-of-the-map/catalan-atlas-mansa-musa.jpg ||| A panel from a medieval atlas showing a crowned ruler seated and holding up a large gold nugget. ||| The Catalan Atlas, 1375, showing the ruler of Mali with a gold nugget. This is what a European map of West Africa looked like BEFORE the interior went blank, which is why the blankness was a development rather than a starting condition. ||| attributed to Abraham Cresques. Catalan Atlas BNF Sheet 6 Mansa Musa.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg
In 1733 Jonathan Swift wrote four lines about mapmakers that have been quoted ever since:

> So Geographers in Afric-maps
> With Savage-Pictures fill their Gaps;
> And o'er unhabitable Downs
> Place Elephants for want of Towns.

He meant it as satire about bad writing. It is also an accurate description of a real practice, and it is evidence, from inside the period, that the practice was obvious enough to mock.

## The part that surprises people

The blank interior was not the starting condition that knowledge gradually filled in. In important respects it was a **development**.

The Catalan Atlas of 1375 shows the ruler of Mali holding a gold nugget, in a region drawn with detail and evident respect, because the information traveled to Mediterranean mapmakers along Saharan trade routes that connected real places. Fourteenth-century European mapmakers knew that West Africa contained wealthy, organized states, and drew them.

Later European maps of the interior are in places emptier than that.

## How a map gets emptier

Several things at once, and none of them is simply "nobody knew."

**A change in standard.** As the coordinate grid took hold, information that could not be tied to a measured position began to look like hearsay. That is a defensible instinct with an indefensible consequence: a real city known through trade testimony gets dropped in favor of nothing, and nothing is not more accurate than an approximate position.

**A change in who counted as a source.** Knowledge from African, Arab and Ottoman informants was progressively discounted as European mapmaking professionalised around European observation.

**A change in what the map was for.** Maps increasingly served states and companies with claims to press. An interior shown as populated and organized is an interior belonging to someone. An interior shown as empty is an interior available.

## The historian's phrase for it

J. B. Harley called these the **silences** of a map, and argued they are as deliberate and as readable as anything drawn. A silence is not the absence of a statement. It is a statement.

## Bringing the section together

Lesson 12 showed a vocabulary being available at the moment it was needed. This lesson shows the same thing happening to a picture. In both cases the mechanism is not a lie. It is a standard of evidence applied unevenly, in a direction that happened to suit the people applying it.

That is a much harder thing to catch than a lie, in 1750 and now. It is also the thing most worth learning to catch.

:::reveal What does the 1375 Catalan Atlas show about West Africa, and why is that surprising? ||| It shows the ruler of Mali holding a gold nugget in a region drawn with detail and respect. It is surprising because later European maps of the interior are in places emptier, so the blankness was a development rather than a starting condition.

:::reveal Give one reason other than ignorance that a map interior got emptier. ||| A change in what counted as a valid source, a change in the standard of evidence toward measured coordinates, or a change in the map's purpose toward serving states and companies with claims to press.

:::reveal What did Harley mean by the silences of a map? ||| That absences are deliberate and readable. A silence is not the lack of a statement; it is a statement.

## Sources
- Cresques, A. (1375). *Catalan Atlas*. Bibliothèque nationale de France.
- Harley, J. B. (1988). Silences and secrecy: The hidden agenda of cartography in early modern Europe. *Imago Mundi, 40*, 57-76.
- Swift, J. (1733). *On poetry: A rhapsody*. London.`,
      recallContent: [
        {
          prompt: "Quote the point of Swift's 1733 couplet in your own words.",
          answer:
            "Mapmakers filled the parts of Africa they had no information about with pictures of animals and savages, putting elephants where they had no towns to draw.",
        },
        {
          prompt: "Why is dropping an approximately known city in favour of blank space not an improvement in accuracy?",
          answer:
            "Because nothing is not more accurate than an approximate position. Applying a stricter standard of evidence unevenly removes real knowledge and leaves a space that reads as unoccupied.",
        },
      ],
    },
    {
      slug: "who-was-mapping-whom",
      title: "14 · Who was mapping whom",
      section: "Section 4 · From the margin to the world",
      body: `
:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786281373/witus/courses/here-be-dragons/monsters-at-the-edge-of-the-map/marshall-islands-stick-chart.jpg ||| A navigational chart made from a lattice of tied sticks with small shells fixed at intervals. ||| A Marshall Islands rebbelib. It models how swells bend around islands, which is the information a navigator on that ocean actually needs, and it was studied on land rather than carried aboard. ||| Unknown authorUnknown author. Marshall Islands stick chart, Rebbelib type. LOC 2010586182.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Marshall_Islands_stick_chart,_Rebbelib_type._LOC_2010586182.jpg
A course that spends thirteen lessons on European maps risks leaving an impression it has not argued for: that mapping is a European activity that other people were the subject of.

## Stick charts

Navigators in the Marshall Islands built frameworks of sticks and shells that encode how ocean swells bend around and between islands. They are not pictures of coastlines. They are models of **wave behavior**, which is the thing a navigator on that ocean actually needs.

They were, by most accounts, studied on land and left behind on the voyage, because the point was to install the pattern in the navigator's head. That is a completely coherent design decision that a culture used to carrying its knowledge on paper finds counterintuitive.

Europeans described these in the nineteenth century. The knowledge is very much older. Lesson 8's map plots the European date deliberately, and says so, because the gap between when something existed and when an outside archive noticed it is one of the recurring measurements in this series.

## Pacific voyaging more broadly

The settlement of the Pacific involved deliberate long-distance voyaging across enormous distances of open ocean, using swell, stars, birds, cloud and current. It was navigation without instruments in the European sense, and it worked, repeatedly, over water that later European sailors found terrifying.

## And elsewhere

Islamic geography produced sophisticated cartographic and coordinate work over centuries, some of which fed directly into what Europe later inherited. Chinese cartography has its own long tradition. Indigenous mapping in the Americas, Australia and the Arctic encoded route, season, resource and law in forms that European observers frequently failed to recognize as maps at all, sometimes because they were not on paper.

## The point, stated carefully

This is not a list of counterexamples to make anyone feel better. It is a correction to a specific and consequential error, which is treating **the survival of a document** as evidence about **the existence of knowledge**.

European mapping produced objects that entered archives, got cataloged, and survived. That is a fact about a documentary tradition and about institutions. It is not a fact about who understood their world.

Lesson 8 said the same thing about its own green markers. It is worth saying twice, because it is the correction most likely to slip.

## The question to hold for the rest of the series

When you are told what people in the past knew, ask: **knew, or wrote down in a form that survived in an archive somebody later searched?**

Those are wildly different claims. Almost every confident statement about historical knowledge is really a statement about the second one.

:::reveal What do Marshall Islands stick charts model, and why is that the right design? ||| How ocean swells bend around and between islands, which is what a navigator on that ocean actually needs. Coastline shape is not the useful information there.

:::reveal What error does this lesson exist to correct? ||| Treating the survival of a document as evidence about the existence of knowledge. Survival is a fact about archives and institutions.

:::reveal What should you ask when told what people in the past knew? ||| Knew, or wrote down in a form that survived in an archive somebody later searched? Those are very different claims.

## Sources
- Finney, B. (1998). Nautical cartography and traditional navigation in Oceania. In D. Woodward & G. M. Lewis (Eds.), *The history of cartography: Vol. 2, Book 3* (pp. 443-492). University of Chicago Press.
- Lewis, D. (1994). *We, the navigators: The ancient art of landfinding in the Pacific* (2nd ed.). University of Hawaii Press.`,
    },
    {
      slug: "timeline-drawn-and-known",
      title: "15 · What was drawn, and what was already known",
      section: "Section 4 · From the margin to the world",
      body: `One axis, two tracks. The upper track is when a **claim** entered European maps or texts. The lower track is when the **evidence** existed or was available to someone.

The gap between the tracks is the argument of this course. Read it before you read the commentary underneath.

:::timeline Claim and evidence, on one axis
77 | claim | Pliny compiles descriptions of peoples at the edge of the world
c. 200 | claim | The Physiologus circulates the island that is a whale
c. 615 | claim | Isidore's Etymologiae, later printed with the T-O diagram
c. 1000 | evidence | Great Zimbabwe is being built and occupied
c. 1200 | evidence | Marshall Islands navigators are reading swell patterns
c. 1300 | claim | The Hereford Mappa Mundi draws Pliny's peoples in its margins
1327 | evidence | Mansa Musa's Mali is a documented, wealthy, organized state
1360 | claim | The Book of John Mandeville is compiled and read as testimony
1375 | claim | The Catalan Atlas draws Mali's ruler with respect and detail
1409 | claim | Ptolemy's Geography returns to Latin-reading Europe
1510 | claim | The Hunt-Lenox Globe carries its contested inscription
1539 | claim | The Carta Marina prints excellent coastlines covered in monsters
1733 | claim | Swift mocks geographers for filling Africa's gaps with elephants
1862 | claim | Europeans first describe Marshall Islands stick charts
:::

## What the shape shows

Three things worth naming.

**Claims outrun evidence by centuries, and then persist.** Pliny's descriptions are still being drawn more than twelve hundred years after he compiled them, on a map made by people with far better information available.

**The lower track is thin, and that is a finding about archives rather than about the world.** Great Zimbabwe and the stick charts are on this timeline at all only because later investigation put them there. Almost everything comparable is missing, and lesson 14 is about why.

**The 1375 entry is on the upper track and is not a failure.** A European map drew Mali well, from testimony that traveled a trade route. That is what good practice looked like with the sources available, and it is the strongest evidence in the course that the later blankness was a choice rather than a limit.

## The habit to take from this

When someone shows you a timeline of discovery, ask what the second track would look like. Every "discovered in" date is also a date on which some archive noticed something, and often the thing had been known continuously by people who were not consulted.

:::reveal What does the gap between the two tracks on this timeline show? ||| That claims about distant places outran the available evidence by centuries and then persisted, even as better information became available.

:::reveal Why is the evidence track thin, and what is that a fact about? ||| Because only what later investigation recovered can be plotted. It is a fact about archives and what survives in them, not about what people knew.

## Sources
- Chirikure, S. (2020). *Great Zimbabwe: Reclaiming a confiscated past*. Routledge.
- Cresques, A. (1375). *Catalan Atlas*. Bibliothèque nationale de France.
- Pliny the Elder. (1942). *Natural history* (H. Rackham, Trans.; Vol. 2, Books 3-7). Harvard University Press. (Original work published c. 77 CE)`,
    },
    {
      slug: "quiz-margin-to-world",
      title: "Section 4 quiz · From the margin to the world",
      section: "Section 4 · From the margin to the world",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "When Europeans reached the regions where the monstrous races were said to live, what did they find?",
            options: [
              "People with cities, laws, trade, religion and recorded history",
              "Regions that had been abandoned within living memory",
              "Animals that partly matched the earlier descriptions",
              "Populations that confirmed several of Pliny's accounts",
            ],
            correctIndex: 0,
            explanation:
              "Not one of the descriptions was there to be found, because there had never been anything to find.",
            sourceLessonSlug: "from-margin-to-policy",
          },
          {
            prompt: "What survived the discovery that the monstrous races did not exist?",
            options: [
              "The category, though not its specific contents",
              "The exact descriptions, transferred to new regions",
              "Nothing; the whole tradition was abandoned at once",
              "Only the illustrations, which became purely decorative",
            ],
            correctIndex: 0,
            explanation:
              "The structural idea that people at the edge of the world are not like us persisted after the specific claims fell away.",
            sourceLessonSlug: "from-margin-to-policy",
          },
          {
            prompt: "Which statement about the frame and the economic interest does the course endorse?",
            options: [
              "The frame did not create the interest, but made it far easier to defend publicly",
              "The frame caused the interest, which no European economy would otherwise have formed",
              "The interest and the frame developed independently, with no traceable link between them",
              "The frame was invented afterwards, purely to explain an interest that already existed",
            ],
            correctIndex: 0,
            explanation:
              "The course insists on precision here because both overstating and understating the mechanism are bad.",
            sourceLessonSlug: "from-margin-to-policy",
          },
          {
            prompt: "Why does the course reject the idea that Pliny caused later atrocities?",
            options: [
              "Economic interest is the engine; nobody enslaved anyone because of a book",
              "Pliny's work was unavailable during the relevant centuries",
              "Pliny explicitly condemned the practices later justified by his descriptions",
              "The descriptions were never applied to any real population",
            ],
            correctIndex: 0,
            explanation:
              "Overstating the mechanism is one of the two errors available, and it makes the accurate claim easier to dismiss.",
            sourceLessonSlug: "from-margin-to-policy",
          },
          {
            prompt: "What did Swift's 1733 couplet describe geographers doing?",
            options: [
              "Filling the gaps in African maps with animals and savage pictures",
              "Copying Ptolemy's stale coordinates onto new plates without checking them",
              "Selling one engraving under several titles in different national markets",
              "Refusing to draw any region a named surveyor had not personally visited",
            ],
            correctIndex: 0,
            explanation:
              "Satire about bad writing that is also accurate description, and evidence from inside the period that the practice was obvious.",
            sourceLessonSlug: "the-blank-interior",
          },
          {
            prompt: "What does the 1375 Catalan Atlas show about the blank African interior of later maps?",
            options: [
              "That the blankness was a later development, not a starting condition",
              "That mapmakers had always refused to draw the interior",
              "That the interior was genuinely unpopulated in the fourteenth century",
              "That Mediterranean traders had no contact with West Africa",
            ],
            correctIndex: 0,
            explanation:
              "It draws Mali's ruler with a gold nugget, from information that traveled Saharan trade routes.",
            sourceLessonSlug: "the-blank-interior",
          },
          {
            prompt: "Which of these is a reason a map interior got emptier that is NOT simply ignorance?",
            options: [
              "The map's purpose shifted toward states and companies with claims to press",
              "Engraving techniques of the period could no longer render fine inland detail",
              "Paper shortages forced mapmakers to cut the number of labels they printed",
              "Guild rules prohibited depicting any territory outside of Europe itself",
            ],
            correctIndex: 0,
            explanation:
              "An interior shown as populated belongs to someone. An interior shown as empty is available.",
            sourceLessonSlug: "the-blank-interior",
          },
          {
            prompt: "What did J. B. Harley mean by the silences of a map?",
            options: [
              "That absences are deliberate and readable, so a silence is a statement",
              "That mapmakers were legally forbidden from labeling any contested border",
              "That printed maps omitted the local pronunciation of the place names",
              "That surveyors withheld their measurements from rival publishing houses",
            ],
            correctIndex: 0,
            explanation: "A silence is not the lack of a statement. It is a statement.",
            sourceLessonSlug: "the-blank-interior",
          },
          {
            prompt: "What do Marshall Islands stick charts encode?",
            options: [
              "How ocean swells bend around and between islands",
              "The depth of water at each named passage",
              "The distance in days between inhabited atolls",
              "The positions of stars at the beginning of each season",
            ],
            correctIndex: 0,
            explanation:
              "Models of wave behavior, which is what a navigator on that ocean actually needs. Not pictures of coastlines.",
            sourceLessonSlug: "who-was-mapping-whom",
          },
          {
            prompt: "Which error does lesson 14 exist to correct?",
            options: [
              "Treating a document's survival as evidence about the existence of knowledge",
              "Assuming that all long-distance navigation requires manufactured instruments",
              "Believing that only peoples living on a coastline ever produced maps",
              "Supposing that an oral tradition cannot encode direction or distance",
            ],
            correctIndex: 0,
            explanation:
              "Survival is a fact about archives and institutions, not about who understood their world.",
            sourceLessonSlug: "who-was-mapping-whom",
          },
          {
            prompt: "What question should you ask when told what people in the past knew?",
            options: [
              "Knew, or wrote down in a form that survived in an archive",
              "Knew, or merely suspected without any supporting proof at all",
              "Knew, or were taught it by an authority they already recognized",
              "Knew, or simply agreed on among themselves without checking",
            ],
            correctIndex: 0,
            explanation:
              "Almost every confident statement about historical knowledge is really a statement about the archive.",
            sourceLessonSlug: "who-was-mapping-whom",
          },
          {
            prompt: "On the course timeline, why is the evidence track thin?",
            options: [
              "Only what later investigation recovered can be plotted at all",
              "The relevant centuries produced very little worth recording",
              "Evidence was deliberately excluded to keep the timeline readable",
              "Dates before 1300 cannot be established with any confidence",
            ],
            correctIndex: 0,
            explanation:
              "Great Zimbabwe and the stick charts appear only because someone later went looking. Almost everything comparable is missing.",
            sourceLessonSlug: "timeline-drawn-and-known",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 5 · Your turn
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "assignment-read-a-margin",
      title: "16 · Assignment: read one map's margin",
      section: "Section 5 · Your turn",
      lessonType: "assignment",
      body: `Pick one historical map and work out what its maker actually knew, what they inherited, and what they chose.

You are not being asked to catch anyone out. You are being asked to do lesson 7's move on a real object: treat the map as a set of decisions made by someone with interests, and say what those decisions were.

## Choose your map

Any map made before 1900 that you can see at reasonable resolution. Digitised collections at national libraries, university libraries and museums are free and enormous. Good starting points are the Library of Congress map collection, the David Rumsey Map Collection, and the Bibliothèque nationale de France.

Pick one where **something is drawn in a space rather than left blank**: a creature, a figure, a group of people, a scene. That is your subject.

## What to submit

Around 600 to 900 words, in five parts.

**1. Identify the object.** Title, maker, date, place of publication, and where you are viewing it. If any of these are unknown, say so. Unknown is an acceptable answer; guessing is not.

**2. Describe what is drawn**, in the blank space you chose, in plain language and without interpretation. Just what is on the sheet.

**3. Trace it if you can.** Does this element appear on earlier maps? Is it described in a text the mapmaker could have read? You will often be able to get one step back and no further, and one step is a real result. Say where the trail goes cold. **Do not present a resemblance as a descent:** two sea serpents looking alike is not evidence that one was copied from the other, and saying so is exactly the discipline this course has been teaching.

**4. Name the decision.** Why is this here rather than nothing? Use the categories from lesson 7: cost, the buyer, the author's argument, inheritance. More than one can apply. Argue for your answer from the object, not from what feels likely.

**5. Say what you could not establish.** This part is graded as seriously as the others. A confident essay with an invisible gap is worse than a careful one that marks its own limits.

## How this is assessed

- **Accuracy of description.** Does part 2 match what is actually on the sheet?
- **Honesty of sourcing.** Every claim about origin is either cited or explicitly marked as unverified.
- **Quality of the argument in part 4**, judged by whether it reasons from evidence in the object.
- **Willingness to say what you do not know**, in part 5 and throughout.

Cite in APA 7, with a short reference list. Cite the map itself as an object, not the webpage you found it on, though you should give the collection and a link.

## The one rule

If you cannot establish something, write that you cannot establish it. This whole course has been about the difference between a claim and the evidence for it. An assignment that quietly closes that gap has missed the entire point, and it will be marked as such.`,
    },
  ],
};
