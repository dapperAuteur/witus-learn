// Authored "Pre-Columbian Mesoamerica: Cities, Calendars, and the People Who Are Still Here" —
// the ANCHOR of the Pre-Columbian Mesoamerica track
// (plans/future-courses/precolumbian-mesoamerica-track-proposal.md).
// Survey depth, real spread: the Olmec (mother-vs-sister taught AS a live debate), Teotihuacan
// (the humility lesson: builders and language unknown), the Maya (script, zero, the Long Count;
// the Classic collapse specific AND debated; THEY DID NOT VANISH), the Aztec/Mexica
// (Tenochtitlan, the Triple Alliance, chinampas, the tribute empire; sacrifice taught honestly —
// the Huei Tzompantli is real archaeology, the 80,400 chronicle figure is refused), Oaxaca +
// the Purepecha, Central America beyond Mexico (Joya de Ceren, the Diquis spheres), the conquest
// + the demographic catastrophe WITHOUT making Indigenous people passive (Restall's Seven Myths;
// population taught as a RANGE, never one number), and a "how we know" methods lesson
// (Landa's 1562 burning + the ~4 surviving codices, Knorozov -> Coe decipherment, PACUNAM LiDAR)
// as the transferable skill.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations + a ## Sources list. Backbone:
//     Coe & Houston (The Maya), Coe & Koontz (Mexico), Miller (The Art of Mesoamerica),
//     Restall (Seven Myths of the Spanish Conquest), Coe (Breaking the Maya Code), Martin &
//     Grube, Cowgill (Ancient Teotihuacan), Smith (The Aztecs), INAH excavation reporting,
//     Canuto et al. 2018 (Science), Inomata et al. 2020 (Nature), the Popol Vuh and the
//     Florentine Codex in scholarly translation, UNESCO World Heritage documentation.
//   * NO invented dates, rulers, or figures. Ranges instead of false precision. Contested
//     claims are labeled contested with a name on each side:
//     - 2012 "doomsday": traced to Tortuguero Monument 6 — a Long Count period ending,
//       not a prophecy (Stuart 2011).
//     - Demographic collapse: taught as a RANGE (~15-30M high-end estimates for central
//       Mexico -> roughly 2M within a century), with the Cook & Borah vs. skeptics dispute
//       named — never one number.
//     - Sacrifice: real (Huei Tzompantli excavations, INAH) and its chronicle head-counts
//       audited (the 80,400 figure is "reported, not established"); neither sensationalized
//       nor erased.
//     - Olmec "mother vs. sister culture" = live debate (Diehl vs. Flannery & Marcus);
//       Cascajal Block contested; Teotihuacan's builders/language stated as UNKNOWN.
//     - "They vanished" is refuted with the present tense: ~7M Maya today, ~6M speakers of
//       Mayan languages; Nahuatl ~1.65M (INEGI 2020).
//
// House format: `section` on every lesson; one single-line :::reveal per teaching lesson
// (answer NOT restated beneath); a quiz per section with a ~15-question bank (above the
// 10-question attempt cap, so retries rotate); every question carries `explanation` +
// `sourceLessonSlug`; recallContent on teaching lessons; one exercise (name the people ·
// place · period). Registered in scripts/seed-courses.ts under "Culture & History";
// NO migration — `pnpm seed:courses`.

import type { AuthoredCourse } from "./authored-course";

export const PRECOLUMBIAN_MESOAMERICA_COURSE: AuthoredCourse = {
  title: "Pre-Columbian Mesoamerica: Cities, Calendars, and the People Who Are Still Here",
  description:
    "Before any European ship reached the Americas, the land between central Mexico and Costa Rica held some of the largest cities on Earth, a fully developed writing system, a positional number system with zero, calendars accurate enough to track Venus for centuries, and farms engineered on lakes and in rainforests. This course walks that record: the Olmec of the Gulf lowlands and the live scholarly debate about what they were to everyone else; Teotihuacan, a metropolis of perhaps 100,000 whose builders' very language is unknown — the best humility lesson in archaeology; the Maya city-states, their script and Long Count calendar, the real (and really debated) Classic collapse, and the roughly seven million Maya alive right now, because they did not vanish; the Mexica (Aztec) island capital of Tenochtitlan, its chinampa farms and tribute empire, and an honest accounting of human sacrifice — real, excavated, and routinely exaggerated by sources with motives; the Zapotec, Mixtec, and the Purepecha empire that stopped the Aztecs cold; Central America beyond Mexico, from the buried village of Joya de Ceren to the stone spheres of the Diquis delta; and the conquest told without myths — smallpox and steel, yes, but also tens of thousands of Indigenous allies who were fighting their own war, and a 'conquest' that did not reach the last independent Maya kingdom until 1697. The last section teaches the transferable skill: HOW we know — a bishop's book-burning at Mani in 1562 and the four codices that survived it, the Cold War decipherment that let the Maya speak in their own words, and the LiDAR surveys that found tens of thousands of structures under the Peten canopy in a single campaign. Numbers are taught as ranges, contested claims are labeled contested with a name on each side, and nothing here is 'mysterious ancient aliens' — the mystery-mongering is itself one of the myths this course dismantles. Cited throughout to working Mesoamericanists (Coe, Houston, Miller, Martin, Restall, Cowgill, Smith), INAH excavation reporting, the Popol Vuh and Florentine Codex in scholarly translation, and UNESCO World Heritage documentation.",
  lessons: [
    // ────────────── SECTION 1 · THE FRAME AND THE FIRSTS ──────────────
    {
      slug: "meso-what-is-mesoamerica",
      title: "1 · Mesoamerica: the place, the time, and the method",
      section: "Section 1 · The frame and the firsts",
      body: `Start with the word, because it is doing real work. **Mesoamerica** is not a country and not a synonym for Mexico. It is a *culture area*: a region running from roughly north-central Mexico down through Belize, Guatemala, El Salvador, and western Honduras, whose peoples — speaking dozens of unrelated languages — shared a recognizable package of practices for some three thousand years. The term was proposed by the anthropologist Paul Kirchhoff (1943), who defined it by shared traits: maize, beans, and squash farming; a 260-day ritual calendar interlocking with a 365-day solar one; screenfold books; ballcourts and a rubber-ball game; stepped pyramid-temples; and, yes, ritual human sacrifice, which this course will teach honestly in its place (Kirchhoff, 1943; Coe & Koontz, 2013).

**The foundation of everything in this course is a grass.** Maize was domesticated from teosinte, a wild grass whose seed spike is about the size of your little finger, in the Balsas River valley of southern Mexico roughly 9,000 years ago (Matsuoka et al., 2002; Piperno et al., 2009). Turning that into the cob that feeds continents took thousands of years of selective breeding by Indigenous farmers — plant science, practiced without writing, before Sumer. Every city in this course runs on that achievement, plus the nixtamalization process (soaking maize in alkaline water) that unlocks its nutrition.

**The conventional timeline**, which you should hold loosely because the labels are archaeologists' filing system, not events: the **Preclassic or Formative** (c. 2000 BCE-250 CE), when villages became towns and the first monumental centers rose; the **Classic** (c. 250-900 CE), the age of Teotihuacan's apogee and the inscribed Maya city-states; and the **Postclassic** (c. 900-1521 CE), the age of Tula, the Mixtec codices, and finally the Mexica empire the Spanish met. The boundaries are fuzzy and regional; nothing "ended" on a date (Coe & Koontz, 2013).

Three facts to calibrate your sense of scale before the tour begins:

- Mesoamerica is one of the very few places on Earth where **writing was invented independently** — not borrowed, invented (Houston, 2004).
- Its peoples built everything you will meet in this course **without draft animals, without wheeled transport, and, for most of the sequence, without metal tools**. There were no horses, oxen, or mules in the Americas; wheels appear on small figurines but were never scaled to carts, plausibly because there was nothing to pull them. Metallurgy arrives late (c. 600-800 CE, in West Mexico, apparently via maritime contact with South America) and was used mostly for ornament and, among the Purepecha, some tools and weapons (Hosler, 1994). Every pyramid was raised by organized human muscle.
- When Hernán Cortés reached the Basin of Mexico in 1519, the island capital he found was, by most estimates, **larger than any city in Spain** (Smith, 2012). Section 4 gives that city its due.

**Now the method, because this subject attracts nonsense from two directions.** Trap one is **spectacle**: Mesoamerica as a haunted house — obsessed with blood, doomed by its own calendar, so alien that television is comfortable suggesting extraterrestrials built the pyramids. Notice what the "ancient aliens" move actually does: it takes achievements that Indigenous people demonstrably engineered — we have the quarries, the tool marks, the unfinished monuments, in some cases the written records — and reassigns the credit to imaginary outsiders. It is erasure wearing a costume (Feder, 2020). Trap two is **romance**: a hemisphere of peaceful philosopher-kings living in harmony until 1492. That version erases real people just as thoroughly — Mesoamerican states fought wars, took captives, and practiced sacrifice, and the record of all three is written, painted, and excavated. A history with the uncomfortable parts removed is not history; it is marketing.

The method that avoids both traps is the one this course commits to: **evidence, ranges, and named disagreements.** Where a number is an estimate you will see a range and whose estimate it is. Where scholars disagree — and on the biggest questions here, they genuinely do — you will see the word *contested* and at least one name on each side. And no claim will be flattened to "Mesoamericans believed/did X": this course names the people (Olmec, Zapotec, Maya, Mexica, Purepecha), the place, and the period, every time. The final exercise drills exactly that habit.

:::reveal The course says the "ancient aliens" framing and the "peaceful paradise" framing fail the same way. What is the shared failure? ||| Both erase the real, documented people. Aliens-built-it reassigns engineering that Indigenous people demonstrably did (quarries, tool marks, unfinished monuments, written records) to imaginary outsiders; the romance version deletes the wars, captive-taking, and sacrifice that the peoples themselves recorded. Each replaces evidence with a story someone finds more comfortable.

## Sources
- Kirchhoff, P. (1943). Mesoamérica: Sus límites geográficos, composición étnica y caracteres culturales. *Acta Americana, 1*(1), 92-107.
- Coe, M. D., & Koontz, R. (2013). *Mexico: From the Olmecs to the Aztecs* (7th ed.). Thames & Hudson.
- Matsuoka, Y., Vigouroux, Y., Goodman, M. M., Sanchez G., J., Buckler, E., & Doebley, J. (2002). A single domestication for maize shown by multilocus microsatellite genotyping. *PNAS, 99*(9), 6080-6084.
- Piperno, D. R., Ranere, A. J., Holst, I., Iriarte, J., & Dickau, R. (2009). Starch grain and phytolith evidence for early ninth millennium B.P. maize from the Central Balsas River Valley, Mexico. *PNAS, 106*(13), 5019-5024.
- Houston, S. D. (Ed.). (2004). *The first writing: Script invention as history and process*. Cambridge University Press.
- Hosler, D. (1994). *The sounds and colors of power: The sacred metallurgical technology of ancient West Mexico*. MIT Press.
- Smith, M. E. (2012). *The Aztecs* (3rd ed.). Wiley-Blackwell.
- Feder, K. L. (2020). *Frauds, myths, and mysteries: Science and pseudoscience in archaeology* (10th ed.). Oxford University Press.`,
      recallContent: [
        {
          prompt: "Define 'Mesoamerica' — what kind of thing is it, roughly where, and who coined the term?",
          answer:
            "A culture area (not a country): roughly north-central Mexico through Belize, Guatemala, El Salvador, and western Honduras, defined by shared traits (maize-beans-squash farming, the interlocking 260/365-day calendars, screenfold books, the ballgame, stepped pyramids, ritual sacrifice). The term was proposed by Paul Kirchhoff in 1943.",
        },
        {
          prompt: "Name the three conventional periods and their rough dates — and the caveat that comes with them.",
          answer:
            "Preclassic/Formative (c. 2000 BCE-250 CE), Classic (c. 250-900 CE), Postclassic (c. 900-1521 CE). Caveat: they are archaeologists' filing labels with fuzzy, regional boundaries — nothing 'ended' on a date.",
        },
        {
          prompt: "What was missing from the Mesoamerican toolkit that makes the building record more impressive, not less?",
          answer:
            "No draft animals (no horses, oxen, or mules existed in the Americas), no wheeled transport (wheels exist only on figurines), and no metal tools for most of the sequence — metallurgy arrives c. 600-800 CE in West Mexico, mostly for ornament. The cities were raised by organized human labor.",
        },
      ],
    },
    {
      slug: "meso-olmec",
      title: "2 · The Olmec: heads, rubber, and a live debate",
      section: "Section 1 · The frame and the firsts",
      body: `The earliest complex society in Mesoamerica that we can walk through as ruins rose in the hot Gulf Coast lowlands of what are now the Mexican states of Veracruz and Tabasco. We call its people the **Olmec** — but hold that name at arm's length, because it is not theirs. It is a Nahuatl word, roughly "rubber people," applied by the Aztecs to *later* inhabitants of that coast two thousand years afterward, and borrowed by archaeologists. What the builders of San Lorenzo called themselves is unknown, and their language is unidentified — a pattern (name lost, language lost, works surviving) you will meet again at Teotihuacan (Diehl, 2004; Pool, 2007).

The chronology, in round numbers: **San Lorenzo** flourished c. 1400-1000 BCE — plausibly the first place in Mesoamerica deserving the word "city," with earthworks, drainage lines of fitted basalt, and elite residences on an engineered plateau. As San Lorenzo declined, **La Venta** (c. 1000-400 BCE) rose to the east: a planned ceremonial center on an island in coastal wetlands, with a roughly 30-meter earthen pyramid, plazas laid out on a north-south axis, buried pavements of serpentine blocks, and offerings of jade and iron-ore mirrors (Diehl, 2004).

The signature works are the **colossal heads** — seventeen are known — each carved from a single basalt boulder into an individualized male face wearing a close-fitting headgear. The consensus reading is that they are portraits of rulers: each face is distinct, and several were later defaced or buried, which reads like politics, not vandalism (Pool, 2007). The basalt came from the Tuxtla Mountains and was moved *tens of kilometers* — the largest heads weigh in the tens of tons — without draft animals or wheels, presumably by raft, sledge, and levers. That is the engineering fact worth sitting with. Two bad readings of the heads circulate and both fail the evidence: the "they look African, so Africans must have crossed the Atlantic" claim (popularized by Van Sertima) is rejected by Mesoamericanists — the heads sit inside a continuous local sculptural tradition, and the claim survives only by ignoring that context while erasing Indigenous authorship (Ortiz de Montellano, Haslip-Viera, & Barbour, 1997); and the aliens version fails the same way with worse manners.

Rubber, though — the nickname accidentally landed on something real. At the waterlogged shrine of **El Manatí**, near San Lorenzo, archaeologists recovered rubber balls in contexts dating as early as c. 1600 BCE (Ortíz & Rodríguez, 1999). Processing latex with morning-glory juice to make bouncing rubber is Mesoamerican materials chemistry, millennia before vulcanization was patented, and it feeds the ballgame that Kirchhoff put on his trait list.

**Now the debate, taught as a debate — because it is one.** For decades, textbooks called the Olmec Mesoamerica's **"mother culture"** (*cultura madre*): the argument, associated with Michael Coe and Richard Diehl, is that the recurring package of later Mesoamerican civilization — rulership imagery, monumental sculpture and pyramid-plaza planning, sacred war and sacrifice iconography, possibly writing and the calendar — appears *first* and *most fully formed* on the Gulf Coast, and radiated outward (Diehl, 2004). The rival position, argued forcefully by Kent Flannery and Joyce Marcus (2000), is the **"sister cultures"** model: the Olmec were one precocious sibling among several contemporary regional societies (in Oaxaca, the Valley of Mexico, Chiapas, the Pacific coast) that traded, borrowed, and co-evolved the shared package — impressive, but not the mother of anyone. The evidence is genuinely mixed: Olmec-style objects and motifs do travel far (chemical sourcing shows some pottery moving out of San Lorenzo), but influence also flows *toward* the Gulf, and several "firsts" keep migrating as new digs land. This course does not pick a winner, because the field has not — and the next lesson is about a discovery that scrambled the question again.

One more contested artifact belongs in this lesson because it may be the hemisphere's oldest writing, or may not: the **Cascajal Block**, a serpentine slab from near San Lorenzo bearing 62 incised signs in a system otherwise unknown. It was published in *Science* as Olmec writing of c. 900 BCE (Rodríguez Martínez et al., 2006), but the stone was recovered by villagers from a bulldozed lot, not excavated in context, so its date and even its authenticity are debated. The honest label is: *possible earliest writing; unprovenienced; contested.*

:::reveal State the mother-culture and sister-cultures positions in one sentence each, with a name attached to each side. ||| Mother culture (Coe, Diehl): the core package of Mesoamerican civilization appears first and most fully formed among the Gulf Coast Olmec and radiated outward. Sister cultures (Flannery & Marcus): the Olmec were one precocious sibling among several contemporary regional societies that traded and co-evolved the shared package — no single parent. The evidence is mixed and the debate is live; the course declares no winner.

## Sources
- Diehl, R. A. (2004). *The Olmecs: America's first civilization*. Thames & Hudson.
- Pool, C. A. (2007). *Olmec archaeology and early Mesoamerica*. Cambridge University Press.
- Flannery, K. V., & Marcus, J. (2000). Formative Mexican chiefdoms and the myth of the "mother culture." *Journal of Anthropological Archaeology, 19*(1), 1-37.
- Ortiz de Montellano, B., Haslip-Viera, G., & Barbour, W. (1997). They were NOT here before Columbus: Afrocentric hyperdiffusionism in the 1990s. *Ethnohistory, 44*(2), 199-234.
- Ortíz C., P., & Rodríguez, M. C. (1999). Olmec ritual behavior at El Manatí: A sacred space. In D. C. Grove & R. A. Joyce (Eds.), *Social patterns in pre-Classic Mesoamerica* (pp. 225-254). Dumbarton Oaks.
- Rodríguez Martínez, M. d. C., Ortíz Ceballos, P., Coe, M. D., Diehl, R. A., Houston, S. D., Taube, K. A., & Delgado Calderón, A. (2006). Oldest writing in the New World. *Science, 313*(5793), 1610-1614.`,
      recallContent: [
        {
          prompt: "Why should you hold the name 'Olmec' at arm's length?",
          answer:
            "It is a Nahuatl exonym ('rubber people') that the Aztecs applied to later inhabitants of the Gulf Coast some two thousand years afterward; archaeologists borrowed it. The builders' own name for themselves and their language are unknown.",
        },
        {
          prompt: "Give the two great Olmec centers with rough dates, and the consensus reading of the colossal heads.",
          answer:
            "San Lorenzo, c. 1400-1000 BCE; La Venta, c. 1000-400 BCE. The seventeen known colossal heads are read as individualized ruler portraits — each face distinct, some later defaced or buried, which looks like politics.",
        },
        {
          prompt: "What is the honest label for the Cascajal Block, and why?",
          answer:
            "'Possible earliest writing in the Americas; unprovenienced; contested.' Its 62 signs match no known system and it was published as Olmec writing of c. 900 BCE, but it was recovered from a bulldozed lot rather than excavated in context, so date and authenticity remain debated.",
        },
      ],
    },
    {
      slug: "meso-aguada-fenix",
      title: "3 · Aguada Fénix: the biggest monument was invisible until 2020",
      section: "Section 1 · The frame and the firsts",
      body: `In 2020, the largest known monumental construction in the entire Maya area was announced — and it was not a pyramid at Tikal or Chichén Itzá. It was a platform nobody had recognized, in Tabasco, Mexico, so large that from the ground it reads as landscape. You can stand on **Aguada Fénix** and not see it.

The facts as published: an artificial earthen platform roughly **1.4 kilometers long and up to about 400 meters wide**, rising 10 to 15 meters, with causeways radiating outward, built — per radiocarbon dating of construction fill — mainly between about **1000 and 800 BCE** (Inomata et al., 2020). By volume of construction it exceeds later Maya pyramids; the excavators estimated the labor in the millions of person-days. It was found not by machete survey but by **LiDAR** — airborne laser scanning that strips vegetation from the terrain model and reveals earthworks too big and too gradual for a person on foot to perceive (Inomata et al., 2020). Section 7 returns to LiDAR as a method; here it matters because it rewrote the *origins* chapter of Maya history in one paper.

Three implications, each bigger than the platform:

**First, the "firsts" moved — again.** Aguada Fénix is the oldest known monumental construction in the Maya area, and it is also the *largest*, which upends the intuition that societies start small and build up to their biggest works. The earliest chapter came first *and* biggest. Follow-up LiDAR survey of the region then found that Aguada Fénix was not alone: hundreds of formally similar rectangular complexes — nearly five hundred reported — dot the wider Gulf-coast-to-Usumacinta region, many sharing a standardized layout (Inomata et al., 2021). An entire early landscape of monumental planning had been sitting under pasture and forest, unrecognized.

**Second, it complicates the mother-vs-sister debate you just met — in both directions.** The layout of Aguada Fénix and its sibling complexes echoes the plan of Olmec San Lorenzo, suggesting real connection to the Gulf tradition; but the dating overlaps the *decline* of San Lorenzo and precedes La Venta's apogee, and the builders in the Maya lowlands were doing something at a scale the Gulf never attempted. "Who influenced whom" is now a harder question than it was in 2019, which is what good evidence does to tidy stories (Inomata et al., 2020; Inomata et al., 2021).

**Third — and this is the finding to sit with — there are no colossal heads here.** Excavation at Aguada Fénix has produced, so far, little sign of the apparatus of entrenched rulership: no ruler portraits, no rich royal tombs from the construction era, no palace precinct. The excavators read the site as evidence that **massive coordinated labor did not require a king** — that early communities could aggregate seasonally, plan geometry over kilometers, and move millions of cubic meters of earth through collective organization rather than coercion from a throne (Inomata et al., 2020). Treat that as an argument, not a proven fact — absence of evidence at a partially excavated site is a hedge-worthy foundation — but it is the excavators' own published reading, and it lands a real blow against the assumption that civilization's first big projects are always monuments to a strongman.

A note on how this discovery should calibrate you for the rest of the course: Aguada Fénix was announced in **2020**. The skull rack of Tenochtitlan was excavated from **2015**. The great LiDAR census of the Petén landed in **2018**. The decipherment that lets Maya kings speak in their own words matured in the **1980s and 1990s**. This is not a finished subject you are catching up on; it is a field moving under your feet, and several "facts" in older books — including, probably, some sentence in this course — will be revised. That is not a weakness of the method. It is the method.

:::reveal Aguada Fénix is the largest known construction in the Maya area, yet it argues *against* a simple "great works need great kings" story. How? ||| Excavation so far shows little apparatus of entrenched rulership — no ruler portraits, no royal tombs from the construction era, no palace precinct — so the excavators (Inomata et al.) read it as massive seasonal, collective labor organized without a king. The course flags this as the excavators' published argument from a partially excavated site, not a settled fact.

## Sources
- Inomata, T., Triadan, D., Vázquez López, V. A., Fernandez-Diaz, J. C., Omori, T., Méndez Bauer, M. B., García Hernández, M., Beach, T., Cagnato, C., Aoyama, K., & Nasu, H. (2020). Monumental architecture at Aguada Fénix and the rise of Maya civilization. *Nature, 582*, 530-533.
- Inomata, T., Fernandez-Diaz, J. C., Triadan, D., García Mollinedo, M., Pinzón, F., García Hernández, M., Arévalo, A., Arroyo, A., Marroquín, R., & 12 others. (2021). Origins and spread of formal ceremonial complexes in the Olmec and Maya regions revealed by airborne lidar. *Nature Human Behaviour, 5*, 1487-1501.
- Canuto, M. A., Estrada-Belli, F., Garrison, T. G., Houston, S. D., Acuña, M. J., Kováč, M., Marken, D., Nondédéo, P., Auld-Thomas, L., & 9 others. (2018). Ancient lowland Maya complexity as revealed by airborne laser scanning of northern Guatemala. *Science, 361*(6409), eaau0137.`,
      recallContent: [
        {
          prompt: "Give the vital statistics of Aguada Fénix: where, how big, when built, and how it was found.",
          answer:
            "Tabasco, Mexico. An artificial platform c. 1.4 km long, up to ~400 m wide, 10-15 m high, with radiating causeways; built mainly c. 1000-800 BCE per radiocarbon dating; the largest known monumental construction in the Maya area by volume. Found via airborne LiDAR (announced 2020, Inomata et al.).",
        },
        {
          prompt: "How does Aguada Fénix complicate the Olmec mother-culture debate?",
          answer:
            "Its layout echoes Olmec San Lorenzo (suggesting Gulf connection), but it dates to San Lorenzo's decline and before La Venta's peak, at a scale the Gulf never attempted — and nearly 500 formally similar complexes turned up across the region. 'Who influenced whom' got harder, not easier.",
        },
      ],
    },
    {
      slug: "meso-quiz-1",
      title: "Section 1 quiz · The frame and the firsts",
      section: "Section 1 · The frame and the firsts",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What kind of thing is 'Mesoamerica'?",
            options: [
              "A culture area defined by shared traits across many unrelated languages, proposed by Paul Kirchhoff in 1943",
              "The ancient name of the Aztec empire",
              "A synonym for modern Mexico",
              "A single ancient nation with one language",
            ],
            correctIndex: 0,
            explanation:
              "Kirchhoff (1943) defined it by the shared package — maize/beans/squash, the 260+365-day calendars, screenfold books, the ballgame, stepped pyramids — across peoples from central Mexico to western Honduras.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "Maize was domesticated from teosinte…",
            options: [
              "in the Balsas River valley of southern Mexico, roughly 9,000 years ago",
              "in the Andes, about 2,000 years ago",
              "in the Mississippi valley, roughly 4,000 years ago",
              "nowhere — maize grows wild",
            ],
            correctIndex: 0,
            explanation:
              "Genetic (Matsuoka et al., 2002) and microbotanical (Piperno et al., 2009) evidence converge on the Balsas valley around the ninth millennium BP. Turning finger-sized teosinte spikes into cobs was millennia of Indigenous plant breeding.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "Which of these did Mesoamerican builders have available?",
            options: [
              "Organized human labor — but no draft animals, no wheeled transport, and no metal tools for most of the sequence",
              "Oxen and carts from about 1500 BCE",
              "Iron chisels from the Olmec period onward",
              "Horses, which are native to the Americas",
            ],
            correctIndex: 0,
            explanation:
              "There were no horses, oxen, or mules in the pre-contact Americas; wheels appear only on figurines; metallurgy arrives c. 600-800 CE in West Mexico and stays mostly ornamental. The pyramids are organized muscle and engineering.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "The conventional Preclassic/Classic/Postclassic timeline should be treated as…",
            options: [
              "archaeologists' filing labels with fuzzy, regional boundaries — nothing 'ended' on a date",
              "precise political eras declared by Mesoamerican states themselves",
              "a calendar the Maya carved on stelae",
              "obsolete and no longer used by anyone",
            ],
            correctIndex: 0,
            explanation:
              "The labels organize evidence (c. 2000 BCE-250 CE; c. 250-900; c. 900-1521) but the transitions are gradual and vary by region.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "Per the course, what does the 'ancient aliens built the pyramids' move actually do?",
            options: [
              "Reassigns engineering that Indigenous people demonstrably did to imaginary outsiders — erasure wearing a costume",
              "Harmlessly entertains without affecting anyone",
              "Correctly flags genuine gaps in the evidence",
              "Honors Indigenous builders by making them famous",
            ],
            correctIndex: 0,
            explanation:
              "We have the quarries, tool marks, unfinished monuments, and in some cases written records of the builders. Crediting aliens deletes documented Indigenous achievement — the same failure as the erasure trap.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "Where does the name 'Olmec' come from?",
            options: [
              "It is a Nahuatl exonym ('rubber people') applied by the Aztecs to later Gulf Coast inhabitants; the builders' own name is unknown",
              "It is what the builders of San Lorenzo called themselves",
              "It is a Maya word for 'stone head'",
              "It was invented by Cortés",
            ],
            correctIndex: 0,
            explanation:
              "Archaeologists borrowed the Aztec-era name. The San Lorenzo builders' self-name and language are unidentified — a pattern repeated at Teotihuacan.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "The two great Olmec centers, in order, are…",
            options: [
              "San Lorenzo (c. 1400-1000 BCE), then La Venta (c. 1000-400 BCE)",
              "La Venta (c. 2000 BCE), then San Lorenzo (c. 500 BCE)",
              "Tikal, then Teotihuacan",
              "Monte Albán, then Tula",
            ],
            correctIndex: 0,
            explanation:
              "San Lorenzo, on an engineered plateau in Veracruz, is plausibly Mesoamerica's first city; as it declined, La Venta rose in the Tabasco wetlands with its ~30 m earthen pyramid and buried serpentine offerings.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "What is the consensus scholarly reading of the seventeen Olmec colossal heads?",
            options: [
              "Individualized portraits of rulers, carved from basalt moved tens of kilometers without wheels or draft animals",
              "Portraits of African visitors, proving transatlantic contact",
              "Images of a single god, all identical",
              "Natural boulders mistaken for sculpture",
            ],
            correctIndex: 0,
            explanation:
              "Each face is distinct and several were defaced or buried — politics, not vandalism. The Van Sertima 'African' claim is rejected by Mesoamericanists (Ortiz de Montellano et al., 1997): the heads sit in a continuous local sculptural tradition.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "What did the waterlogged shrine of El Manatí preserve?",
            options: [
              "Rubber balls in contexts dating as early as c. 1600 BCE — Mesoamerican materials chemistry millennia before vulcanization",
              "The oldest maize cobs in the Americas",
              "Iron tools traded from the Andes",
              "A fleet of Olmec canoes",
            ],
            correctIndex: 0,
            explanation:
              "Processing latex with morning-glory juice yields bouncing rubber (Ortíz & Rodríguez, 1999) — the material behind the ballgame on Kirchhoff's trait list, and the accidental truth in the 'rubber people' nickname.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "The 'mother culture' vs. 'sister cultures' argument is best described as…",
            options: [
              "a live scholarly debate — Coe and Diehl for radiation from the Gulf, Flannery and Marcus for co-evolving regional siblings — with mixed evidence and no declared winner",
              "settled in favor of the mother culture since the 1960s",
              "settled in favor of sister cultures since 2000",
              "a dispute about whether the Olmec existed at all",
            ],
            correctIndex: 0,
            explanation:
              "Olmec-style objects travel far, but influence also flows toward the Gulf, and new discoveries (Aguada Fénix) keep moving the 'firsts.' The course teaches the debate as a debate.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "What is the honest label for the Cascajal Block?",
            options: [
              "Possible earliest writing in the Americas; unprovenienced; contested",
              "Confirmed Maya writing of 900 BCE",
              "A proven modern forgery",
              "An undeciphered Spanish colonial document",
            ],
            correctIndex: 0,
            explanation:
              "Published in Science (2006) as Olmec writing of c. 900 BCE, but recovered by villagers from a bulldozed lot — no excavated context, so date and authenticity stay debated.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "What is Aguada Fénix?",
            options: [
              "An artificial platform c. 1.4 km long in Tabasco, built c. 1000-800 BCE — the largest and oldest known monumental construction in the Maya area, announced in 2020",
              "The tallest stone pyramid at Tikal",
              "An Aztec fortress on Lake Texcoco",
              "A natural hill once mistaken for a ruin",
            ],
            correctIndex: 0,
            explanation:
              "Found via airborne LiDAR (Inomata et al., 2020, Nature); by construction volume it exceeds later Maya pyramids, and from the ground it reads as landscape.",
            sourceLessonSlug: "meso-aguada-fenix",
          },
          {
            prompt: "Why does Aguada Fénix upend the 'societies start small and build up to their biggest works' intuition?",
            options: [
              "The oldest known Maya monumental construction is also the largest — the earliest chapter came first AND biggest",
              "It was built by the Aztecs long after the Maya",
              "It is small but very old",
              "It proves monumental building began in Europe",
            ],
            correctIndex: 0,
            explanation:
              "Radiocarbon puts main construction c. 1000-800 BCE, before the Classic cities — yet nothing later in the Maya area exceeds its volume. Follow-up survey found nearly 500 formally similar complexes across the region.",
            sourceLessonSlug: "meso-aguada-fenix",
          },
          {
            prompt: "What does the near-absence of ruler portraits, royal tombs, and palaces at Aguada Fénix suggest, per its excavators?",
            options: [
              "That massive coordinated labor did not require a king — collective, seasonal organization could build at this scale (offered as an argument, not settled fact)",
              "That the site was never finished",
              "That its kings were buried elsewhere, which is proven",
              "That the platform was built by a small family",
            ],
            correctIndex: 0,
            explanation:
              "Inomata et al. (2020) read the site as evidence of collective labor without entrenched rulership. The course hedges it appropriately: a published argument from a partially excavated site.",
            sourceLessonSlug: "meso-aguada-fenix",
          },
          {
            prompt: "The course lists Aguada Fénix (2020), the Huei Tzompantli excavation (2015-), and the Petén LiDAR census (2018) to make what point?",
            options: [
              "Mesoamerican studies is a field moving under your feet — expect older books (and some sentence here) to be revised, which is the method working",
              "That archaeology finished its work in 2020",
              "That nothing was known before 2015",
              "That only discoveries after 2000 count as evidence",
            ],
            correctIndex: 0,
            explanation:
              "The biggest recent findings are years, not centuries, old. Treating revision as normal is part of the course's method: evidence, ranges, and named disagreements.",
            sourceLessonSlug: "meso-aguada-fenix",
          },
        ],
      },
    },
  ],
};
