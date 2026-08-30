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
    "Before any European ship reached the Americas, the land between central Mexico and Costa Rica held some of the largest cities on Earth, a fully developed writing system, a positional number system with zero, calendars accurate enough to track Venus for centuries, and farms engineered on lakes and in rainforests. This course walks that record: the Olmec of the Gulf lowlands and the live scholarly debate about what they were to everyone else; Teotihuacan, a metropolis of perhaps 100,000 whose builders' very language is unknown, the best humility lesson in archaeology; the Maya city-states, their script and Long Count calendar, the real (and really debated) Classic collapse, and the roughly seven million Maya alive right now, because they did not vanish; the Mexica (Aztec) island capital of Tenochtitlan, its chinampa farms and tribute empire, and an honest accounting of human sacrifice, real, excavated, and routinely exaggerated by sources with motives; the Zapotec, Mixtec, and the Purepecha empire that stopped the Aztecs cold; Central America beyond Mexico, from the buried village of Joya de Ceren to the stone spheres of the Diquis delta; and the conquest told without myths, smallpox and steel, yes, but also tens of thousands of Indigenous allies who were fighting their own war, and a 'conquest' that did not reach the last independent Maya kingdom until 1697. The last section teaches the transferable skill: HOW we know, a bishop's book-burning at Mani in 1562 and the four codices that survived it, the Cold War decipherment that let the Maya speak in their own words, and the LiDAR surveys that found tens of thousands of structures under the Peten canopy in a single campaign. Numbers are taught as ranges, contested claims are labeled contested with a name on each side, and nothing here is 'mysterious ancient aliens', the mystery-mongering is itself one of the myths this course dismantles. Cited throughout to working Mesoamericanists (Coe, Houston, Miller, Martin, Restall, Cowgill, Smith), INAH excavation reporting, the Popol Vuh and Florentine Codex in scholarly translation, and UNESCO World Heritage documentation.",
  lessons: [
    // ────────────── SECTION 1 · THE FRAME AND THE FIRSTS ──────────────
    {
      slug: "meso-what-is-mesoamerica",
      title: "1 · Mesoamerica: the place, the time, and the method",
      section: "Section 1 · The frame and the firsts",
      body: `Start with the word, because it is doing real work. **Mesoamerica** is not a country and not a synonym for Mexico. It is a *culture area*: a region running from roughly north-central Mexico down through Belize, Guatemala, El Salvador, and western Honduras, whose peoples, speaking dozens of unrelated languages, shared a recognizable package of practices for some three thousand years. The term was proposed by the anthropologist Paul Kirchhoff (1943), who defined it by shared traits: maize, beans, and squash farming; a 260-day ritual calendar interlocking with a 365-day solar one; screenfold books; ballcourts and a rubber-ball game; stepped pyramid-temples; and, yes, ritual human sacrifice, which this course will teach honestly in its place (Kirchhoff, 1943; Coe & Koontz, 2013).

**The foundation of everything in this course is a grass.** Maize was domesticated from teosinte, a wild grass whose seed spike is about the size of your little finger, in the Balsas River valley of southern Mexico roughly 9,000 years ago (Matsuoka et al., 2002; Piperno et al., 2009). Turning that into the cob that feeds continents took thousands of years of selective breeding by Indigenous farmers, plant science, practiced without writing, before Sumer. Every city in this course runs on that achievement, plus the nixtamalization process (soaking maize in alkaline water) that unlocks its nutrition.

**The conventional timeline**, which you should hold loosely because the labels are archaeologists' filing system, not events: the **Preclassic or Formative** (c. 2000 BCE-250 CE), when villages became towns and the first monumental centers rose; the **Classic** (c. 250-900 CE), the age of Teotihuacan's apogee and the inscribed Maya city-states; and the **Postclassic** (c. 900-1521 CE), the age of Tula, the Mixtec codices, and finally the Mexica empire the Spanish met. The boundaries are fuzzy and regional; nothing "ended" on a date (Coe & Koontz, 2013).

Three facts to calibrate your sense of scale before the tour begins:

- Mesoamerica is one of the very few places on Earth where **writing was invented independently**, not borrowed, invented (Houston, 2004).
- Its peoples built everything you will meet in this course **without draft animals, without wheeled transport, and, for most of the sequence, without metal tools**. There were no horses, oxen, or mules in the Americas; wheels appear on small figurines but were never scaled to carts, plausibly because there was nothing to pull them. Metallurgy arrives late (c. 600-800 CE, in West Mexico, apparently via maritime contact with South America) and was used mostly for ornament and, among the Purepecha, some tools and weapons (Hosler, 1994). Every pyramid was raised by organized human muscle.
- When Hernán Cortés reached the Basin of Mexico in 1519, the island capital he found was, by most estimates, **larger than any city in Spain** (Smith, 2012). Section 4 gives that city its due.

**Now the method, because this subject attracts nonsense from two directions.** Trap one is **spectacle**: Mesoamerica as a haunted house, obsessed with blood, doomed by its own calendar, so alien that television is comfortable suggesting extraterrestrials built the pyramids. Notice what the "ancient aliens" move actually does: it takes achievements that Indigenous people demonstrably engineered, we have the quarries, the tool marks, the unfinished monuments, in some cases the written records, and reassigns the credit to imaginary outsiders. It is erasure wearing a costume (Feder, 2020). Trap two is **romance**: a hemisphere of peaceful philosopher-kings living in harmony until 1492. That version erases real people just as thoroughly, Mesoamerican states fought wars, took captives, and practiced sacrifice, and the record of all three is written, painted, and excavated. A history with the uncomfortable parts removed is not history; it is marketing.

The method that avoids both traps is the one this course commits to: **evidence, ranges, and named disagreements.** Where a number is an estimate you will see a range and whose estimate it is. Where scholars disagree, and on the biggest questions here, they genuinely do, you will see the word *contested* and at least one name on each side. And no claim will be flattened to "Mesoamericans believed/did X": this course names the people (Olmec, Zapotec, Maya, Mexica, Purepecha), the place, and the period, every time. The final exercise drills exactly that habit.

:::reveal The course says the "ancient aliens" framing and the "peaceful paradise" framing fail the same way. What is the shared failure? ||| Both erase the real, documented people. Aliens-built-it reassigns engineering that Indigenous people demonstrably did (quarries, tool marks, unfinished monuments, written records) to imaginary outsiders; the romance version deletes the wars, captive-taking, and sacrifice that the peoples themselves recorded. Each replaces evidence with a story someone finds more comfortable.

## Sources
- Kirchhoff, P. (1943). Mesoamérica: Sus límites geográficos, composición étnica y caracteres culturales. *Acta Americana, 1*(1), 92-107. http://bdjc.iia.unam.mx/items/show/772
- Coe, M. D., & Koontz, R. (2013). *Mexico: From the Olmecs to the Aztecs* (7th ed.). Thames & Hudson. https://lccn.loc.gov/2012942987
- Matsuoka, Y., Vigouroux, Y., Goodman, M. M., Sanchez G., J., Buckler, E., & Doebley, J. (2002). A single domestication for maize shown by multilocus microsatellite genotyping. *PNAS, 99*(9), 6080-6084. https://doi.org/10.1073/pnas.052125199
- Piperno, D. R., Ranere, A. J., Holst, I., Iriarte, J., & Dickau, R. (2009). Starch grain and phytolith evidence for early ninth millennium B.P. maize from the Central Balsas River Valley, Mexico. *PNAS, 106*(13), 5019-5024. https://doi.org/10.1073/pnas.0812525106
- Houston, S. D. (Ed.). (2004). *The first writing: Script invention as history and process*. Cambridge University Press. https://lccn.loc.gov/2005296487
- Hosler, D. (1994). *The sounds and colors of power: The sacred metallurgical technology of ancient West Mexico*. MIT Press. https://lccn.loc.gov/94025455
- Smith, M. E. (2012). *The Aztecs* (3rd ed.). Wiley-Blackwell. https://lccn.loc.gov/2011029132
- Feder, K. L. (2020). *Frauds, myths, and mysteries: Science and pseudoscience in archaeology* (10th ed.). Oxford University Press. https://lccn.loc.gov/2019029153`,
    },
    {
      slug: "meso-olmec",
      title: "2 · The Olmec: heads, rubber, and a live debate",
      section: "Section 1 · The frame and the firsts",
      body: `The earliest complex society in Mesoamerica that we can walk through as ruins rose in the hot Gulf Coast lowlands of what are now the Mexican states of Veracruz and Tabasco. We call its people the **Olmec**, but hold that name at arm's length, because it is not theirs. It is a Nahuatl word, roughly "rubber people," applied by the Aztecs to *later* inhabitants of that coast two thousand years afterward, and borrowed by archaeologists. What the builders of San Lorenzo called themselves is unknown, and their language is unidentified, a pattern (name lost, language lost, works surviving) you will meet again at Teotihuacan (Diehl, 2004; Pool, 2007).

The chronology, in round numbers: **San Lorenzo** flourished c. 1400-1000 BCE, plausibly the first place in Mesoamerica deserving the word "city," with earthworks, drainage lines of fitted basalt, and elite residences on an engineered plateau. As San Lorenzo declined, **La Venta** (c. 1000-400 BCE) rose to the east: a planned ceremonial center on an island in coastal wetlands, with a roughly 30-meter earthen pyramid, plazas laid out on a north-south axis, buried pavements of serpentine blocks, and offerings of jade and iron-ore mirrors (Diehl, 2004).

The signature works are the **colossal heads**, seventeen are known, each carved from a single basalt boulder into an individualized male face wearing a close-fitting headgear. The consensus reading is that they are portraits of rulers: each face is distinct, and several were later defaced or buried, which reads like politics, not vandalism (Pool, 2007). The basalt came from the Tuxtla Mountains and was moved *tens of kilometers*, the largest heads weigh in the tens of tons, without draft animals or wheels, presumably by raft, sledge, and levers. That is the engineering fact worth sitting with. Two bad readings of the heads circulate and both fail the evidence: the "they look African, so Africans must have crossed the Atlantic" claim (popularized by Van Sertima) is rejected by Mesoamericanists, the heads sit inside a continuous local sculptural tradition, and the claim survives only by ignoring that context while erasing Indigenous authorship (Ortiz de Montellano, Haslip-Viera, & Barbour, 1997); and the aliens version fails the same way with worse manners.

Rubber, though, the nickname accidentally landed on something real. At the waterlogged shrine of **El Manatí**, near San Lorenzo, archaeologists recovered rubber balls in contexts dating as early as c. 1600 BCE (Ortíz & Rodríguez, 1999). Processing latex with morning-glory juice to make bouncing rubber is Mesoamerican materials chemistry, millennia before vulcanization was patented, and it feeds the ballgame that Kirchhoff put on his trait list.

**Now the debate, taught as a debate, because it is one.** For decades, textbooks called the Olmec Mesoamerica's **"mother culture"** (*cultura madre*): the argument, associated with Michael Coe and Richard Diehl, is that the recurring package of later Mesoamerican civilization, rulership imagery, monumental sculpture and pyramid-plaza planning, sacred war and sacrifice iconography, possibly writing and the calendar, appears *first* and *most fully formed* on the Gulf Coast, and radiated outward (Diehl, 2004). The rival position, argued forcefully by Kent Flannery and Joyce Marcus (2000), is the **"sister cultures"** model: the Olmec were one precocious sibling among several contemporary regional societies (in Oaxaca, the Valley of Mexico, Chiapas, the Pacific coast) that traded, borrowed, and co-evolved the shared package, impressive, but not the mother of anyone. The evidence is genuinely mixed: Olmec-style objects and motifs do travel far (chemical sourcing shows some pottery moving out of San Lorenzo), but influence also flows *toward* the Gulf, and several "firsts" keep migrating as new digs land. This course does not pick a winner, because the field has not, and the next lesson is about a discovery that scrambled the question again.

One more contested artifact belongs in this lesson because it may be the hemisphere's oldest writing, or may not: the **Cascajal Block**, a serpentine slab from near San Lorenzo bearing 62 incised signs in a system otherwise unknown. It was published in *Science* as Olmec writing of c. 900 BCE (Rodríguez Martínez et al., 2006), but the stone was recovered by villagers from a bulldozed lot, not excavated in context, so its date and even its authenticity are debated. The honest label is: *possible earliest writing; unprovenienced; contested.*

:::reveal State the mother-culture and sister-cultures positions in one sentence each, with a name attached to each side. ||| Mother culture (Coe, Diehl): the core package of Mesoamerican civilization appears first and most fully formed among the Gulf Coast Olmec and radiated outward. Sister cultures (Flannery & Marcus): the Olmec were one precocious sibling among several contemporary regional societies that traded and co-evolved the shared package, no single parent. The evidence is mixed and the debate is live; the course declares no winner.

## Sources
- Diehl, R. A. (2004). *The Olmecs: America's first civilization*. Thames & Hudson. https://lccn.loc.gov/2004101751
- Pool, C. A. (2007). *Olmec archaeology and early Mesoamerica*. Cambridge University Press. https://doi.org/10.1017/cbo9781139167147
- Flannery, K. V., & Marcus, J. (2000). Formative Mexican chiefdoms and the myth of the "mother culture." *Journal of Anthropological Archaeology, 19*(1), 1-37. https://doi.org/10.1006/jaar.1999.0359
- Ortiz de Montellano, B., Haslip-Viera, G., & Barbour, W. (1997). They were NOT here before Columbus: Afrocentric hyperdiffusionism in the 1990s. *Ethnohistory, 44*(2), 199-234. https://doi.org/10.2307/483368
- Ortíz C., P., & Rodríguez, M. C. (1999). Olmec ritual behavior at El Manatí: A sacred space. In D. C. Grove & R. A. Joyce (Eds.), *Social patterns in pre-Classic Mesoamerica* (pp. 225-254). Dumbarton Oaks. https://lccn.loc.gov/98025729
- Rodríguez Martínez, M. d. C., Ortíz Ceballos, P., Coe, M. D., Diehl, R. A., Houston, S. D., Taube, K. A., & Delgado Calderón, A. (2006). Oldest writing in the New World. *Science, 313*(5793), 1610-1614. https://doi.org/10.1126/science.1131492`,
      recallContent: [
        {
          prompt: "Define 'Mesoamerica', what kind of thing is it, roughly where, and who coined the term?",
          answer:
            "A culture area (not a country): roughly north-central Mexico through Belize, Guatemala, El Salvador, and western Honduras, defined by shared traits (maize-beans-squash farming, the interlocking 260/365-day calendars, screenfold books, the ballgame, stepped pyramids, ritual sacrifice). The term was proposed by Paul Kirchhoff in 1943.",
        },
        {
          prompt: "Name the three conventional periods and their rough dates, and the caveat that comes with them.",
          answer:
            "Preclassic/Formative (c. 2000 BCE-250 CE), Classic (c. 250-900 CE), Postclassic (c. 900-1521 CE). Caveat: they are archaeologists' filing labels with fuzzy, regional boundaries, nothing 'ended' on a date.",
        },
        {
          prompt: "What was missing from the Mesoamerican toolkit that makes the building record more impressive, not less?",
          answer:
            "No draft animals (no horses, oxen, or mules existed in the Americas), no wheeled transport (wheels exist only on figurines), and no metal tools for most of the sequence, metallurgy arrives c. 600-800 CE in West Mexico, mostly for ornament. The cities were raised by organized human labor.",
        },
      ],
    },
    {
      slug: "meso-aguada-fenix",
      title: "3 · Aguada Fénix: the biggest monument was invisible until 2020",
      section: "Section 1 · The frame and the firsts",
      body: `In 2020, the largest known monumental construction in the entire Maya area was announced, and it was not a pyramid at Tikal or Chichén Itzá. It was a platform nobody had recognized, in Tabasco, Mexico, so large that from the ground it reads as landscape. You can stand on **Aguada Fénix** and not see it.

The facts as published: an artificial earthen platform roughly **1.4 kilometers long and up to about 400 meters wide**, rising 10 to 15 meters, with causeways radiating outward, built, per radiocarbon dating of construction fill, mainly between about **1000 and 800 BCE** (Inomata et al., 2020). By volume of construction it exceeds later Maya pyramids; the excavators estimated the labor in the millions of person-days. It was found not by machete survey but by **LiDAR**, airborne laser scanning that strips vegetation from the terrain model and reveals earthworks too big and too gradual for a person on foot to perceive (Inomata et al., 2020). Section 7 returns to LiDAR as a method; here it matters because it rewrote the *origins* chapter of Maya history in one paper.

Three implications, each bigger than the platform:

**First, the "firsts" moved, again.** Aguada Fénix is the oldest known monumental construction in the Maya area, and it is also the *largest*, which upends the intuition that societies start small and build up to their biggest works. The earliest chapter came first *and* biggest. Follow-up LiDAR survey of the region then found that Aguada Fénix was not alone: hundreds of formally similar rectangular complexes, nearly five hundred reported, dot the wider Gulf-coast-to-Usumacinta region, many sharing a standardized layout (Inomata et al., 2021). An entire early landscape of monumental planning had been sitting under pasture and forest, unrecognized.

**Second, it complicates the mother-vs-sister debate you just met, in both directions.** The layout of Aguada Fénix and its sibling complexes echoes the plan of Olmec San Lorenzo, suggesting real connection to the Gulf tradition; but the dating overlaps the *decline* of San Lorenzo and precedes La Venta's apogee, and the builders in the Maya lowlands were doing something at a scale the Gulf never attempted. "Who influenced whom" is now a harder question than it was in 2019, which is what good evidence does to tidy stories (Inomata et al., 2020; Inomata et al., 2021).

**Third, and this is the finding to sit with, there are no colossal heads here.** Excavation at Aguada Fénix has produced, so far, little sign of the apparatus of entrenched rulership: no ruler portraits, no rich royal tombs from the construction era, no palace precinct. The excavators read the site as evidence that **massive coordinated labor did not require a king**, that early communities could aggregate seasonally, plan geometry over kilometers, and move millions of cubic meters of earth through collective organization rather than coercion from a throne (Inomata et al., 2020). Treat that as an argument, not a proven fact, absence of evidence at a partially excavated site is a hedge-worthy foundation, but it is the excavators' own published reading, and it lands a real blow against the assumption that civilization's first big projects are always monuments to a strongman.

A note on how this discovery should calibrate you for the rest of the course: Aguada Fénix was announced in **2020**. The skull rack of Tenochtitlan was excavated from **2015**. The great LiDAR census of the Petén landed in **2018**. The decipherment that lets Maya kings speak in their own words matured in the **1980s and 1990s**. This is not a finished subject you are catching up on; it is a field moving under your feet, and several "facts" in older books, including, probably, some sentence in this course, will be revised. That is not a weakness of the method. It is the method.

:::reveal Aguada Fénix is the largest known construction in the Maya area, yet it argues *against* a simple "great works need great kings" story. How? ||| Excavation so far shows little apparatus of entrenched rulership, no ruler portraits, no royal tombs from the construction era, no palace precinct, so the excavators (Inomata et al.) read it as massive seasonal, collective labor organized without a king. The course flags this as the excavators' published argument from a partially excavated site, not a settled fact.

## Sources
- Inomata, T., Triadan, D., Vázquez López, V. A., Fernandez-Diaz, J. C., Omori, T., Méndez Bauer, M. B., García Hernández, M., Beach, T., Cagnato, C., Aoyama, K., & Nasu, H. (2020). Monumental architecture at Aguada Fénix and the rise of Maya civilization. *Nature, 582*, 530-533. https://doi.org/10.1038/s41586-020-2343-4
- Inomata, T., Fernandez-Diaz, J. C., Triadan, D., García Mollinedo, M., Pinzón, F., García Hernández, M., Arévalo, A., Arroyo, A., Marroquín, R., & 12 others. (2021). Origins and spread of formal ceremonial complexes in the Olmec and Maya regions revealed by airborne lidar. *Nature Human Behaviour, 5*, 1487-1501. https://doi.org/10.1038/s41562-021-01218-1
- Canuto, M. A., Estrada-Belli, F., Garrison, T. G., Houston, S. D., Acuña, M. J., Kováč, M., Marken, D., Nondédéo, P., Auld-Thomas, L., & 9 others. (2018). Ancient lowland Maya complexity as revealed by airborne laser scanning of northern Guatemala. *Science, 361*(6409), eaau0137. https://doi.org/10.1126/science.aau0137`,
      recallContent: [
        {
          prompt: "Why should you hold the name 'Olmec' at arm's length?",
          answer:
            "It is a Nahuatl exonym ('rubber people') that the Aztecs applied to later inhabitants of the Gulf Coast some two thousand years afterward; archaeologists borrowed it. The builders' own name for themselves and their language are unknown.",
        },
        {
          prompt: "Give the two great Olmec centers with rough dates, and the consensus reading of the colossal heads.",
          answer:
            "San Lorenzo, c. 1400-1000 BCE; La Venta, c. 1000-400 BCE. The seventeen known colossal heads are read as individualized ruler portraits, each face distinct, some later defaced or buried, which looks like politics.",
        },
        {
          prompt: "What is the honest label for the Cascajal Block, and why?",
          answer:
            "'Possible earliest writing in the Americas; unprovenienced; contested.' Its 62 signs match no known system and it was published as Olmec writing of c. 900 BCE, but it was recovered from a bulldozed lot rather than excavated in context, so date and authenticity remain debated.",
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
                       "A culture area defined by shared traits across many unrelated languages",
                       "The ancient name the Aztec empire's own rulers used for their state",
                       "A synonym for the modern Mexican republic within its present borders",
                       "A single ancient nation speaking one language under a single dynasty",
                     ],
            correctIndex: 0,
            explanation:
              "Kirchhoff (1943) defined it by the shared package, maize/beans/squash, the 260+365-day calendars, screenfold books, the ballgame, stepped pyramids, across peoples from central Mexico to western Honduras.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "Maize was domesticated from teosinte…",
            options: [
                       "in the Balsas River valley of southern Mexico, roughly 9,000 years ago",
                       "in the Andes of highland Peru, roughly 2,000 years ago, from wild rye",
                       "in the Mississippi valley of North America, roughly 4,000 years ago",
                       "nowhere at all, since maize still grows wild throughout Mesoamerica",
                     ],
            correctIndex: 0,
            explanation:
              "Genetic (Matsuoka et al., 2002) and microbotanical (Piperno et al., 2009) evidence converge on the Balsas valley around the ninth millennium BP. Turning finger-sized teosinte spikes into cobs was millennia of Indigenous plant breeding.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "Which of these did Mesoamerican builders have available?",
            options: [
                       "Organized human labor, but no draft animals, wheels, or metal tools",
                       "Teams of oxen and wooden carts, in general use from about 1500 BCE",
                       "Iron chisels and saws, in general use from the Olmec period onward",
                       "Horses and mules, native to the Americas and bred for heavy haulage",
                     ],
            correctIndex: 0,
            explanation:
              "There were no horses, oxen, or mules in the pre-contact Americas; wheels appear only on figurines; metallurgy arrives c. 600-800 CE in West Mexico and stays mostly ornamental. The pyramids are organized muscle and engineering.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "The conventional Preclassic/Classic/Postclassic timeline should be treated as…",
            options: [
                       "archaeologists' filing labels with fuzzy, region-by-region boundaries",
                       "precise political eras that Mesoamerican states declared for themselves",
                       "a three-part calendar cycle the Maya carved onto their dated stelae",
                       "an obsolete nineteenth-century scheme that no archaeologist now uses",
                     ],
            correctIndex: 0,
            explanation:
              "The labels organize evidence (c. 2000 BCE-250 CE; c. 250-900; c. 900-1521) but the transitions are gradual and vary by region.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "Per the course, what does the 'ancient aliens built the pyramids' move actually do?",
            options: [
                       "Reassigns documented Indigenous engineering to imaginary outsiders",
                       "Harmlessly entertains viewers without affecting anyone's understanding",
                       "Correctly flags the genuine gaps that remain in the excavated record",
                       "Honors the Indigenous builders by making their monuments world-famous",
                     ],
            correctIndex: 0,
            explanation:
              "We have the quarries, tool marks, unfinished monuments, and in some cases written records of the builders. Crediting aliens deletes documented Indigenous achievement, the same failure as the erasure trap.",
            sourceLessonSlug: "meso-what-is-mesoamerica",
          },
          {
            prompt: "Where does the name 'Olmec' come from?",
            options: [
                       "A Nahuatl exonym, 'rubber people'; the builders' own name is unknown",
                       "The name the builders of San Lorenzo are known to have used themselves",
                       "A Classic Maya word meaning 'stone head,' read from the colossal heads",
                       "A label that Cortés invented for the Gulf Coast peoples he met in 1519",
                     ],
            correctIndex: 0,
            explanation:
              "Archaeologists borrowed the Aztec-era name. The San Lorenzo builders' self-name and language are unidentified, a pattern repeated at Teotihuacan.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "The two great Olmec centers, in order, are…",
            options: [
                       "San Lorenzo (c. 1400-1000 BCE), then La Venta (c. 1000-400 BCE)",
                       "La Venta (c. 2000-1500 BCE), then San Lorenzo (c. 500-100 BCE)",
                       "Tikal (c. 250-900 CE), then Teotihuacan (c. 100-550 CE), in Petén",
                       "Monte Albán (c. 500 BCE-800 CE), then Tula (c. 950-1150 CE)",
                     ],
            correctIndex: 0,
            explanation:
              "San Lorenzo, on an engineered plateau in Veracruz, is plausibly Mesoamerica's first city; as it declined, La Venta rose in the Tabasco wetlands with its ~30 m earthen pyramid and buried serpentine offerings.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "What is the consensus scholarly reading of the seventeen Olmec colossal heads?",
            options: [
                       "Individualized ruler portraits, carved from basalt hauled without wheels",
                       "Portraits of African visitors, proving repeated transatlantic contact",
                       "Images of a single god, all seventeen carved to one identical pattern",
                       "Natural basalt boulders that early surveyors mistook for sculpture",
                     ],
            correctIndex: 0,
            explanation:
              "Each face is distinct and several were defaced or buried, politics, not vandalism. The Van Sertima 'African' claim is rejected by Mesoamericanists (Ortiz de Montellano et al., 1997): the heads sit in a continuous local sculptural tradition.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "What did the waterlogged shrine of El Manatí preserve?",
            options: [
                       "Rubber balls in waterlogged contexts dating as early as c. 1600 BCE",
                       "The oldest maize cobs yet found in the Americas, dated to c. 7000 BCE",
                       "Iron tools traded north from the Andes in the first millennium BCE",
                       "A fleet of Olmec seagoing canoes, sunk and preserved in lake mud",
                     ],
            correctIndex: 0,
            explanation:
              "Processing latex with morning-glory juice yields bouncing rubber (Ortíz & Rodríguez, 1999), the material behind the ballgame on Kirchhoff's trait list, and the accidental truth in the 'rubber people' nickname.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "The 'mother culture' vs. 'sister cultures' argument is best described as…",
            options: [
                       "a live debate: Coe and Diehl for radiation, Flannery and Marcus against",
                       "a debate settled for the mother culture by Coe's 1960s excavations",
                       "a debate settled for sister cultures by a 2000 consensus conference",
                       "a dispute over whether the Olmec ever existed as a distinct culture",
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
                       "Confirmed Maya writing of c. 900 BCE, excavated in a sealed context",
                       "A proven modern forgery, exposed by laboratory testing in the 1990s",
                       "An undeciphered Spanish colonial document from the Veracruz archives",
                     ],
            correctIndex: 0,
            explanation:
              "Published in Science (2006) as Olmec writing of c. 900 BCE, but recovered by villagers from a bulldozed lot, no excavated context, so date and authenticity stay debated.",
            sourceLessonSlug: "meso-olmec",
          },
          {
            prompt: "What is Aguada Fénix?",
            options: [
                       "An artificial platform 1.4 km long in Tabasco, built c. 1000-800 BCE",
                       "The tallest stone pyramid at Tikal, raised c. 700 CE in the Petén",
                       "An Aztec island fortress on Lake Texcoco, built in the 1450s CE",
                       "A natural limestone hill that early surveyors mistook for a ruin",
                     ],
            correctIndex: 0,
            explanation:
              "Found via airborne LiDAR (Inomata et al., 2020, Nature); by construction volume it exceeds later Maya pyramids, and from the ground it reads as landscape.",
            sourceLessonSlug: "meso-aguada-fenix",
          },
          {
            prompt: "Why does Aguada Fénix upend the 'societies start small and build up to their biggest works' intuition?",
            options: [
                       "The oldest known Maya monumental construction is also the largest",
                       "It was built by the Aztecs centuries after the Maya cities fell",
                       "It is a strikingly small platform that happens to be unusually old",
                       "It proves monumental building began in Europe and spread westward",
                     ],
            correctIndex: 0,
            explanation:
              "Radiocarbon puts main construction c. 1000-800 BCE, before the Classic cities, yet nothing later in the Maya area exceeds its volume. Follow-up survey found nearly 500 formally similar complexes across the region.",
            sourceLessonSlug: "meso-aguada-fenix",
          },
          {
            prompt: "What does the near-absence of ruler portraits, royal tombs, and palaces at Aguada Fénix suggest, per its excavators?",
            options: [
                       "That massive coordinated labor did not require a king to command it",
                       "That the site was abandoned long before construction was finished",
                       "That its kings were buried elsewhere, which excavation has proven",
                       "That the platform was built by a single small family over decades",
                     ],
            correctIndex: 0,
            explanation:
              "Inomata et al. (2020) read the site as evidence of collective labor without entrenched rulership. The course hedges it appropriately: a published argument from a partially excavated site.",
            sourceLessonSlug: "meso-aguada-fenix",
          },
          {
            prompt: "The course lists Aguada Fénix (2020), the Huei Tzompantli excavation (2015-), and the Petén LiDAR census (2018) to make what point?",
            options: [
                       "Mesoamerican studies is a field moving under your feet; expect revisions",
                       "That archaeology essentially finished its work in the region by 2020",
                       "That almost nothing at all was known about Mesoamerica before 2015",
                       "That only discoveries made after the year 2000 should count as evidence",
                     ],
            correctIndex: 0,
            explanation:
              "The biggest recent findings are years, not centuries, old. Treating revision as normal is part of the course's method: evidence, ranges, and named disagreements.",
            sourceLessonSlug: "meso-aguada-fenix",
          },
        ],
      },
    },
    // ────────────── SECTION 2 · TEOTIHUACAN: THE HUMILITY LESSON ──────────────
    {
      slug: "meso-teotihuacan-city",
      title: "4 · Teotihuacan: a metropolis of apartments",
      section: "Section 2 · Teotihuacan: the humility lesson",
      body: `About 40 kilometers northeast of modern Mexico City lie the remains of a city that, at its height around 100-550 CE, was by most estimates **among the largest cities on Earth**, commonly put at 100,000 inhabitants or more, with some estimates running higher (Cowgill, 2015; Millon, 1973). We call it **Teotihuacan**. Keep the quotation marks in your head: as the next lesson explains, that is not its name.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786415234/witus/courses/precolonial-and-labor/precolumbian-mesoamerica/teotihuacan-avenue-of-the-dead.jpg ||| A wide gravel avenue running straight away from the camera toward a stepped stone pyramid at its far end, with a green mountain ridge rising behind. Low stone platforms with staircases line both sides of the avenue. Perhaps thirty visitors are spread along its length, the nearest in the foreground and the furthest reduced to specks near the pyramid's base. ||| The Avenue of the Dead, looking toward the Pyramid of the Moon. Use the visitors as a ruler: the people nearest the pyramid are barely visible, and the avenue continues well behind the camera. The city was laid out on this axis before it was built along it, which is the part worth holding onto. ||| Jarek Tuszyński. Wiki Loves Pyramids - Teotihuacan - Avenue of the Dead - 1.JPG. CC BY 4.0. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Wiki_Loves_Pyramids_-_Teotihuacan_-_Avenue_of_the_Dead_-_1.JPG

Its rise has a plausible push: around the turn of the era, the eruption of the Xitle volcano devastated Cuicuilco, the Basin of Mexico's other major center (the dating of the eruption is itself debated), and population concentrated at Teotihuacan on a scale Mesoamerica had never seen (Cowgill, 2015).

What makes this city astonishing is not only size but **form**:

- **It is planned.** The city is organized on a grid, nearly unique in pre-modern urbanism at this scale, oriented to a consistent axis a few degrees east of north, around a ceremonial spine later peoples called the **Avenue of the Dead**. Even the San Juan river was canalized to conform to the grid (Millon, 1973).
- **The monuments are enormous.** The **Pyramid of the Sun**, roughly 65 meters high on a base of about 220 meters per side, is among the largest ancient structures in the Americas; the **Pyramid of the Moon** anchors the avenue's north end; the **Ciudadela** compound at the center encloses the **Feathered Serpent Pyramid**, its facade studded with sculpted serpent heads (Cowgill, 2015).
- **Most of the population lived in apartment compounds.** From roughly 200 CE, the city rebuilt its housing stock into on the order of two thousand single-story, windowless-walled, multi-family masonry compounds, each with interior patios, drains, and plastered walls, very many of them painted with murals. Ordinary residents lived in solid, decorated, planned housing: an urban standard of living with few premodern parallels anywhere (Millon, 1973; Cowgill, 2015). Teotihuacan has been called a city of murals; its painting survives by the square meter where most Mesoamerican cities keep only fragments.
- **It was multiethnic.** Excavated neighborhoods include a **Oaxaca barrio**, whose residents kept Zapotec-style tombs and funerary urns for generations, and a "**merchants' barrio**" rich in Gulf-coast and Maya-region ceramics. Isotope studies confirm migrants raised elsewhere lived and died in the city (Manzanilla, 2015). People moved to Teotihuacan the way people move to capitals.

Its economic reach ran on **obsidian**, among other goods: the city controlled the green-gold obsidian of the Pachuca source, and its workshops supplied blades and cores that turn up across Mesoamerica (Cowgill, 2015). Teotihuacan-style architecture, ceramics, and imagery appear from northern Mexico to the Maya lowlands, Section 3 will show its agents arriving, datably, at Tikal, a thousand kilometers away.

One more feature must be stated plainly, because this course does not save the uncomfortable material for villains: **the Feathered Serpent Pyramid was dedicated with mass human sacrifice.** Excavations directed by Saburo Sugiyama and Rubén Cabrera found more than 200 individuals buried in and around its foundations, many young men with warrior regalia, hands positioned as if bound, apparently killed for the building's consecration around 200 CE (Sugiyama, 2005). Ritual killing in Mesoamerica is not an Aztec invention or a Spanish slander; it is archaeologically real, centuries before the Mexica existed. What it meant, at what scale it happened where and when, and how sources exaggerated it are questions this course takes up carefully in Section 4.

:::reveal What made Teotihuacan's housing stock nearly unique in the premodern world? ||| From c. 200 CE most of the population lived in roughly two thousand planned, single-story masonry apartment compounds, multi-family, with patios, drains, plastered and very often mural-painted walls. Solid, decorated, planned housing for ordinary residents at metropolitan scale has few premodern parallels anywhere.

## Sources
- Cowgill, G. L. (2015). *Ancient Teotihuacan: Early urbanism in central Mexico*. Cambridge University Press. https://doi.org/10.1017/cbo9781139046817
- Millon, R. (1973). *Urbanization at Teotihuacan, Mexico: Vol. 1. The Teotihuacan map*. University of Texas Press. https://lccn.loc.gov/72014176
- Sugiyama, S. (2005). *Human sacrifice, militarism, and rulership: Materialization of state ideology at the Feathered Serpent Pyramid, Teotihuacan*. Cambridge University Press. https://doi.org/10.1017/cbo9780511489563
- Manzanilla, L. R. (2015). Cooperation and tensions in multiethnic corporate societies using Teotihuacan, central Mexico, as a case study. *PNAS, 112*(30), 9210-9215. https://doi.org/10.1073/pnas.1419881112`,
      recallContent: [
        {
          prompt: "Give the vital statistics of Aguada Fénix: where, how big, when built, and how it was found.",
          answer:
            "Tabasco, Mexico. An artificial platform c. 1.4 km long, up to ~400 m wide, 10-15 m high, with radiating causeways; built mainly c. 1000-800 BCE per radiocarbon dating; the largest known monumental construction in the Maya area by volume. Found via airborne LiDAR (announced 2020, Inomata et al.).",
        },
        {
          prompt: "How does Aguada Fénix complicate the Olmec mother-culture debate?",
          answer:
            "Its layout echoes Olmec San Lorenzo (suggesting Gulf connection), but it dates to San Lorenzo's decline and before La Venta's peak, at a scale the Gulf never attempted, and nearly 500 formally similar complexes turned up across the region. 'Who influenced whom' got harder, not easier.",
        },
      ],
    },
    {
      slug: "meso-teotihuacan-unknowns",
      title: "5 · What we don't know about Teotihuacan (the humility lesson)",
      section: "Section 2 · Teotihuacan: the humility lesson",
      body: `Here is the sentence this whole course pivots on: **one of the largest cities on the planet ran for four centuries, projected power a thousand kilometers, housed its people better than most of the ancient world, and we do not know who its people were, what language they spoke, what they called their city, or who governed it.** Not "scholars quibble." *Unknown.*

Take those one at a time, because the shape of each unknown is instructive.

**The name.** "Teotihuacan" is **Nahuatl**, the language of the Aztecs, who rose to power some eight centuries *after* the city's fall and knew it only as awe-inspiring ruins. The name is usually translated along the lines of "the place where the gods were made" or "where one becomes a god" (the translation itself is debated). The Mexica wove the ruins into their own cosmology, in their central myth, the current era of the world, the Fifth Sun, begins with the gods gathering in darkness *at Teotihuacan*, and their kings left offerings there. Every name on the site map (Avenue of the Dead, Pyramid of the Sun, Pyramid of the Moon) is likewise a later label. The builders' own name for their city: unknown (Cowgill, 2015).

**The language.** Proposals exist, Nahua, Totonac, Otomanguean and Mixe-Zoquean candidates have all been argued, but none has won. The deeper problem: Teotihuacan, unlike the Maya cities in Section 3, left **no long texts we can read**. There are painted and carved signs, and scholars debate whether they constitute a writing system, a notation, or an emblem code; whatever they are, no Rosetta Stone pairs them with a known language (Cowgill, 2015). Compare the Maya, whose script's decipherment (Section 7) turned anonymous ruins into named kings with dated biographies. Writing that can be read gives a civilization a voice; its absence leaves even a superpower anonymous.

**The government.** Maya cities blanket themselves in ruler portraits with name-glyphs and accession dates. Teotihuacan, a vastly bigger polity, has yielded **no securely identified image or tomb of any named ruler**. Some scholars posit powerful kings whose portraiture conventions we fail to recognize; others, notably René Millon and later Linda Manzanilla, argue for something rarer, collective or corporate governance, perhaps rule by councils of lineage or district heads (Manzanilla, 2015; Cowgill, 2015). *Contested; unresolved.* Sit with how remarkable that is: for one of antiquity's great cities we cannot answer "monarchy or not?"

**What we do know is how far its hand reached.** In the Maya inscriptions, readable, dated, a figure named **Sihyaj K'ahk'** ("Fire Is Born") arrives at the city of Tikal in **January 378 CE**; on the same date, Tikal's reigning king "entered the water" (died); a new king, son of a figure whose glyph-name is read "Spearthrower Owl" and whose iconography is strongly Teotihuacan-flavored, is installed shortly after. David Stuart's reading of these texts, that this records a Teotihuacan-connected intervention, an *entrada*, that replaced Tikal's dynasty, is now the mainstream account, with the usual debates about how direct Teotihuacan's control was (Stuart, 2000; Martin & Grube, 2008). Note the epistemological irony: the clearest dated political event in Teotihuacan's history is known **only because the Maya wrote it down**.

**The fall is a genuine whodunit.** Around the mid-500s CE (dates cited run c. 550-650), the ceremonial core along the Avenue of the Dead was **burned**, selectively: temples, pyramids, and elite structures torched, sculptures smashed and scattered, while most apartment compounds show no such destruction. That pattern reads less like foreign sacking than like targeted destruction of the symbols of authority, an uprising? a civil conflict?, but external attack, drought stress, and combinations remain argued; the city's population dispersed over the following decades, though the area was never wholly abandoned (Cowgill, 2015). *Cause: contested.*

Why does this course give a whole lesson to ignorance? Because **calibrated ignorance is a skill**, the one that separates history from mythology. The honest sentence "we do not know who ruled Teotihuacan" is a *finding*, extracted by a century of excavation that eliminated easier answers. Pseudo-history abhors that vacuum: where knowledge is missing, aliens, Atlanteans, and secret races rush in. The discipline of saying "unknown, here is what would settle it" (a readable bilingual text; a royal tomb; a deciphered sign system) is exactly the discipline you will watch *succeed* in Section 7, when the Maya script cracks open and a silent civilization starts speaking. Teotihuacan is the control case: this is what history looks like when the writing never speaks.

:::reveal Name the four basic facts about Teotihuacan that remain unknown, and the one clearly dated political event in its history, plus why we know that one. ||| Unknown: its people's identity/ethnicity, their language, the city's real name ("Teotihuacan" is later Nahuatl), and its form of government (no named-ruler image or tomb; kings vs. collective rule is contested). The dated event: the entrada of January 378 CE, Sihyaj K'ahk' arrives at Tikal, the king dies the same day, a Teotihuacan-linked dynasty is installed, known only because the literate Maya recorded it.

## Sources
- Cowgill, G. L. (2015). *Ancient Teotihuacan: Early urbanism in central Mexico*. Cambridge University Press. https://doi.org/10.1017/cbo9781139046817
- Stuart, D. (2000). "The arrival of strangers": Teotihuacan and Tollan in Classic Maya history. In D. Carrasco, L. Jones, & S. Sessions (Eds.), *Mesoamerica's classic heritage: From Teotihuacan to the Aztecs* (pp. 465-513). University Press of Colorado. https://lccn.loc.gov/99011257
- Martin, S., & Grube, N. (2008). *Chronicle of the Maya kings and queens: Deciphering the dynasties of the ancient Maya* (2nd ed.). Thames & Hudson. https://lccn.loc.gov/2008396649
- Manzanilla, L. R. (2015). Cooperation and tensions in multiethnic corporate societies using Teotihuacan, central Mexico, as a case study. *PNAS, 112*(30), 9210-9215. https://doi.org/10.1073/pnas.1419881112
- Sahagún, B. de. (1950-1982). *Florentine Codex: General history of the things of New Spain* (A. J. O. Anderson & C. E. Dibble, Trans.; Books 1-12). School of American Research / University of Utah. https://lccn.loc.gov/51002409 (Original work compiled c. 1545-1590; Book 7 carries the Fifth Sun narrative located at Teotihuacan)`,
      recallContent: [
        {
          prompt: "Give Teotihuacan's scale claims the way the course hedges them: population, rank, and the headline monuments.",
          answer:
            "At its height (c. 100-550 CE) commonly estimated at 100,000+ inhabitants, by most estimates among the largest cities on Earth at the time. Pyramid of the Sun (~65 m high, ~220 m base), Pyramid of the Moon, and the Feathered Serpent Pyramid inside the Ciudadela, all on the gridded Avenue of the Dead axis.",
        },
        {
          prompt: "What is the evidence that Teotihuacan was multiethnic?",
          answer:
            "Excavated neighborhoods: the Oaxaca barrio with generations of Zapotec-style tombs and urns, and a merchants' barrio rich in Gulf-coast and Maya-region ceramics, plus isotope studies (Manzanilla, 2015) showing residents raised elsewhere lived and died in the city.",
        },
        {
          prompt: "What did the Feathered Serpent Pyramid excavations find, and why does the course put it here rather than saving it for the Aztecs?",
          answer:
            "More than 200 sacrificed individuals, many young men in warrior regalia, hands as if bound, dedicating the building c. 200 CE (Sugiyama & Cabrera excavations). It shows ritual killing is archaeologically real centuries before the Mexica: not an Aztec invention, not a Spanish slander.",
        },
      ],
    },
    {
      slug: "meso-quiz-2",
      title: "Section 2 quiz · Teotihuacan",
      section: "Section 2 · Teotihuacan: the humility lesson",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does the course state Teotihuacan's peak population, and why that phrasing?",
            options: [
                       "Commonly estimated at 100,000 or more, because these are estimates",
                       "Exactly 250,000, a figure recorded in the city's own census rolls",
                       "About 5,000: a ceremonial center staffed by priests, never a real city",
                       "Unknown to within a million in either direction, so never stated at all",
                     ],
            correctIndex: 0,
            explanation:
              "Population figures come from mapped residential area and density assumptions (Millon 1973; Cowgill 2015). The course's method: ranges and attribution, not false precision.",
            sourceLessonSlug: "meso-teotihuacan-city",
          },
          {
            prompt: "Which feature of Teotihuacan's urban form was nearly unique at its scale in the premodern world?",
            options: [
                       "A planned grid city where most residents lived in masonry compounds",
                       "Stone skyscrapers ten stories high lining the Avenue of the Dead",
                       "A defensive wall circuit some twenty kilometers long ringing the city",
                       "Outer suburbs linked to the center by canals fitted with stone locks",
                     ],
            correctIndex: 0,
            explanation:
              "From c. 200 CE the housing stock was rebuilt into planned multi-family compounds with patios, drains, and plastered, painted walls, an urban standard of living for ordinary residents with few ancient parallels.",
            sourceLessonSlug: "meso-teotihuacan-city",
          },
          {
            prompt: "What event plausibly fed Teotihuacan's early growth?",
            options: [
                       "The Xitle eruption devastating rival Cuicuilco near the turn of the era",
                       "The collapse of the Olmec heartland at San Lorenzo shortly before 900 BCE",
                       "A gold and turquoise rush in the Basin of Mexico in the first century",
                       "The arrival of Cortés and his Tlaxcalan allies in the Basin of Mexico",
                     ],
            correctIndex: 0,
            explanation:
              "With Cuicuilco crippled, Teotihuacan absorbed population on an unprecedented scale (Cowgill, 2015).",
            sourceLessonSlug: "meso-teotihuacan-city",
          },
          {
            prompt: "The evidence for Teotihuacan as a multiethnic city includes…",
            options: [
                       "a Oaxaca barrio, a merchants' barrio, and isotope studies of migrants",
                       "a full household census carved onto the face of the Pyramid of the Sun",
                       "Spanish colonial tax rolls listing the city's foreign quarters by ward",
                       "nothing at all, since the claim rests on nineteenth-century speculation",
                     ],
            correctIndex: 0,
            explanation:
              "Whole neighborhoods kept foreign burial customs for generations, and bone chemistry (Manzanilla, 2015) confirms in-migration. People moved to Teotihuacan the way people move to capitals.",
            sourceLessonSlug: "meso-teotihuacan-city",
          },
          {
            prompt: "What did Sugiyama and Cabrera's excavations at the Feathered Serpent Pyramid establish?",
            options: [
                       "A dedicatory mass sacrifice of more than 200 individuals c. 200 CE",
                       "That the pyramid was built as the tomb of a named Teotihuacan king",
                       "That no human sacrifice ever took place anywhere in Teotihuacan's core",
                       "That the victims were Spanish prisoners of war taken in the 1520s",
                     ],
            correctIndex: 0,
            explanation:
              "Many were young men with warrior regalia, hands positioned as if bound (Sugiyama, 2005). The course states it plainly: sacrifice is archaeologically real and is not an Aztec invention or Spanish slander.",
            sourceLessonSlug: "meso-teotihuacan-city",
          },
          {
            prompt: "The city's economic reach is traced in part through…",
            options: [
                       "green Pachuca obsidian, worked in city workshops and traded widely",
                       "silver coinage stamped with the city's emblem and found region-wide",
                       "iron ingots cast in state foundries and shipped to the Gulf Coast",
                       "wheat and barley exported in bulk to the Maya lowland city-states",
                     ],
            correctIndex: 0,
            explanation:
              "Teotihuacan controlled the Pachuca source; its blades and cores, plus its architectural style and imagery, appear from northern Mexico to the Maya area.",
            sourceLessonSlug: "meso-teotihuacan-city",
          },
          {
            prompt: "Who named 'Teotihuacan,' and when?",
            options: [
                       "The Aztecs, in Nahuatl, centuries after the city already lay in ruins",
                       "The city's own founders, in records kept from its earliest decades",
                       "The Spanish, in 1521, while marching on the Basin's northern towns",
                       "Archaeologists, in 1905, at the start of the first state excavations",
                     ],
            correctIndex: 0,
            explanation:
              "The name, translated along the lines of 'where the gods were made' (translation debated), and every monument label on the map are later Nahuatl. The builders' own name for the city is unknown.",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
          {
            prompt: "What is the state of knowledge about Teotihuacan's language?",
            options: [
                       "Unknown: Nahua, Totonac and others are argued, with no long texts",
                       "Proven to be an early form of Nahuatl, from bilingual inscriptions",
                       "Proven to be Zapotec, from long texts found in the Oaxaca barrio",
                       "Deciphered in 1952 from a bilingual stone found near the Moon Pyramid",
                     ],
            correctIndex: 0,
            explanation:
              "No Rosetta-equivalent exists; scholars debate whether the painted/carved signs are script, notation, or emblem code (Cowgill, 2015).",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
          {
            prompt: "How does Teotihuacan's rulership record compare with the Maya cities'?",
            options: [
                       "Maya cities name and date their kings, while Teotihuacan names none",
                       "Both regions are equally rich in named and dated royal portraits",
                       "Teotihuacan's king list is complete, while the Maya kept no records",
                       "Neither region ever depicted its rulers in stone or in painted murals",
                     ],
            correctIndex: 0,
            explanation:
              "Hence the live debate: unrecognized kings vs. collective/corporate governance (Millon; Manzanilla). For one of antiquity's great cities, 'monarchy or not?' is unanswered.",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
          {
            prompt: "What happened at Tikal in January 378 CE, per the Maya inscriptions as read by Stuart?",
            options: [
                       "Sihyaj K'ahk' arrived, Tikal's king died, and a new dynasty took power",
                       "Tikal conquered Teotihuacan and installed a king in the Basin of Mexico",
                       "The city was abandoned to drought and its whole population moved north",
                       "The first Long Count date in the Maya lowlands was carved on a stela",
                     ],
            correctIndex: 0,
            explanation:
              "Stuart (2000) read the entrada texts; the Teotihuacan-connected intervention is now the mainstream account (with debate about how direct the control was).",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
          {
            prompt: "What is the 'epistemological irony' of the 378 entrada?",
            options: [
                       "The clearest dated event in Teotihuacan's history was written by Maya",
                       "The entrada fell on a leap day that no Mesoamerican calendar records",
                       "Teotihuacan recorded the entrada in detail while the Maya did not",
                       "It was discovered by accident during roadworks in the Basin of Mexico",
                     ],
            correctIndex: 0,
            explanation:
              "Teotihuacan's own signs can't be read; readable Maya glyphs supply Teotihuacan's political biography, the lesson's point about writing giving a civilization a voice.",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
          {
            prompt: "What does the burn pattern at Teotihuacan's fall look like?",
            options: [
                       "Selective: temples along the Avenue burned, apartment compounds did not",
                       "Total: every structure in the city was leveled in one single episode",
                       "There is no evidence at all of burning anywhere in the excavated city",
                       "Only the outlying apartment compounds burned, while the temples stood",
                     ],
            correctIndex: 0,
            explanation:
              "That selectivity is why targeted destruction of the symbols of authority (uprising/civil conflict) is argued, though external attack and drought stress remain in play. Cause: contested.",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
          {
            prompt: "When did Teotihuacan's ceremonial core burn?",
            options: [
                       "Around the mid-500s CE, with cited dates running c. 550-650",
                       "Exactly 476 CE, the same year the western Roman empire ended",
                       "In 1521 CE, during the Spanish siege of the Basin of Mexico",
                       "Around 100 BCE, before the city's rise, per obsidian dating",
                     ],
            correctIndex: 0,
            explanation:
              "The course gives the range rather than a false-precision year; the population dispersed over decades and the area was never wholly abandoned.",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
          {
            prompt: "Why does the course devote a full lesson to what is NOT known about Teotihuacan?",
            options: [
                       "Because calibrated ignorance is a skill; 'unknown' is a real finding",
                       "Because nothing whatsoever is known about the city or its builders",
                       "To discourage students from studying a hopelessly obscure ruined site",
                       "Because the remaining unknowns can never in principle be resolved",
                     ],
            correctIndex: 0,
            explanation:
              "Pseudo-history rushes into vacuums. The honest 'unknown, and here is what would settle it' is the discipline that Section 7's decipherment story shows succeeding.",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
          {
            prompt: "How did the Aztecs relate to Teotihuacan's ruins?",
            options: [
                       "With reverence: they named it and set their creation story there",
                       "They quarried the ruins for building stone and left nothing standing",
                       "They never knew that the ruined city existed, being too far north",
                       "They rebuilt the city and lived in it right up to the Spanish arrival",
                     ],
            correctIndex: 0,
            explanation:
              "Eight centuries after the fall, the Mexica treated the city as the place 'where the gods were made', which is why our map labels are Aztec, not Teotihuacano.",
            sourceLessonSlug: "meso-teotihuacan-unknowns",
          },
        ],
      },
    },
    // ────────────── SECTION 3 · THE MAYA ──────────────
    {
      slug: "meso-maya-world",
      title: "6 · The Maya world: city-states under the canopy",
      section: "Section 3 · The Maya: cities, script, and stars",
      body: `First correction, before anything else: **there was never a "Maya empire."** The Classic Maya world (c. 250-900 CE), spanning present-day Guatemala, Belize, southern Mexico, and the western edges of Honduras and El Salvador, was a landscape of **dozens of rival city-states**, each ruled by a *k'uhul ajaw* ("holy lord"), warring, allying, intermarrying, and trading like Renaissance Italy in limestone (Martin & Grube, 2008). "The Maya" is a scholarly label for peoples who shared a civilization, related languages, one script, one calendar system, one religious vocabulary, while never sharing a government.

Because the Maya wrote (Lesson 7) and we can now read it (Section 7), this is the one part of pre-Columbian America where history has **names and dates**. The stelae, carved stone slabs erected in plazas, record kings' births, accessions, wars, and deaths against Long Count dates precise to the day. So we can say, without hedging, that **K'inich Janaab' Pakal** acceded at Palenque in 615 CE and reigned sixty-eight years until his death in 683, and that his sarcophagus lies beneath the Temple of the Inscriptions, discovered by Alberto Ruz Lhuillier in 1952 (Martin & Grube, 2008). Compare the anonymous rulers of Teotihuacan: this precision is what a deciphered script buys.

The deciphered texts also revealed the **geopolitics**: much of the Classic period is structured by a long rivalry between two superpowers, **Tikal** and **Calakmul**, each sitting atop a web of client kings, fighting through proxies for centuries. Calakmul's "snake" dynasty engineered the defeat of Tikal in 562; Tikal's king Jasaw Chan K'awiil I returned the favor in 695. That arc, reconstructed from the cities' own monuments, is modern epigraphy's flagship achievement (Martin & Grube, 2008).

Second correction: **the "small ceremonial centers in an empty jungle" picture is dead**, and LiDAR killed it. In 2018 the PACUNAM LiDAR Initiative published laser survey of 2,144 square kilometers of northern Guatemala and identified about **61,480 structures** under the forest canopy, house platforms, terraces, causeways, fortifications, implying, when extrapolated, a Late Classic population of the central lowlands in the range of **7 to 11 million people** (Canuto et al., 2018). The survey revealed wetland field systems, kilometer upon kilometer of agricultural terracing, raised causeways (*sacbeob*) linking sites, and defensive works implying warfare at a scale older models had discounted. A day's flying rewrote a century of settlement estimates, remember Aguada Fénix; this is the same instrument revolution, and Section 7 returns to it.

That population needed engineering to eat and drink. Classic cities in the Petén survive four-to-five-month dry seasons on **reservoir systems**, Tikal's plastered catchment pavements and reservoirs stored water at city scale, while agriculture ran far beyond slash-and-burn: terraced hillsides, drained and raised wetland fields, household orchards and gardens (Canuto et al., 2018; Coe & Houston, 2022). The rainforest that tourists now see as wilderness is substantially a **regrown landscape over engineered countryside**.

Hold the scale in your head as one picture: white causeways running between cities through farmed green; plazas of painted red temples (Maya cities were painted, not bare stone); markets, ballcourts, reservoirs; and over it all, dated stone announcements of which holy lord had captured which. That is the world whose script, calendar, and endgame the next two lessons take up.

:::reveal Why is 'Maya empire' wrong, and what did the deciphered texts reveal instead as the Classic period's political structure? ||| There was no single Maya state: dozens of city-states under *k'uhul ajaw* rulers shared a civilization (script, calendar, religion) but never a government. The texts reveal a centuries-long two-superpower rivalry, Tikal vs. Calakmul's snake dynasty, each heading webs of client kings and fighting largely through proxies (Martin & Grube, 2008).

## Sources
- Martin, S., & Grube, N. (2008). *Chronicle of the Maya kings and queens: Deciphering the dynasties of the ancient Maya* (2nd ed.). Thames & Hudson. https://lccn.loc.gov/2008396649
- Canuto, M. A., Estrada-Belli, F., Garrison, T. G., Houston, S. D., Acuña, M. J., Kováč, M., Marken, D., Nondédéo, P., Auld-Thomas, L., & 9 others. (2018). Ancient lowland Maya complexity as revealed by airborne laser scanning of northern Guatemala. *Science, 361*(6409), eaau0137. https://doi.org/10.1126/science.aau0137
- Coe, M. D., & Houston, S. D. (2022). *The Maya* (10th ed.). Thames & Hudson. https://lccn.loc.gov/2022931889
- Ruz Lhuillier, A. (1973). *El Templo de las Inscripciones, Palenque*. Instituto Nacional de Antropología e Historia. https://lccn.loc.gov/74223480`,
      recallContent: [
        {
          prompt: "What does the name 'Teotihuacan' actually tell us, and what doesn't it?",
          answer:
            "It tells us what the Aztecs, arriving eight centuries after the fall, thought of the ruins: Nahuatl for roughly 'where the gods were made'/'where one becomes a god' (translation debated); their Fifth Sun creation story is set there. It tells us nothing about the builders: their name for the city is unknown, as are all the monument names on the map.",
        },
        {
          prompt: "Describe the burn pattern of Teotihuacan's fall and why it matters for the 'whodunit.'",
          answer:
            "Around the mid-500s CE (cited range c. 550-650), the destruction is selective: temples and elite structures along the Avenue of the Dead burned and sculptures smashed, while most apartment compounds are untouched. That pattern suggests targeted destruction of symbols of authority (uprising/civil conflict) more than foreign sacking, but the cause remains contested.",
        },
        {
          prompt: "Why does the course call calibrated ignorance a skill?",
          answer:
            "Because 'unknown' is itself a finding earned by eliminating easier answers, and stating it honestly, with what evidence would settle it, is what separates history from mythology. Pseudo-history fills such vacuums with aliens and lost races; Teotihuacan is the control case for what happens when writing never speaks.",
        },
      ],
    },
    {
      slug: "meso-maya-script-calendar",
      title: "7 · Script, zero, and the Long Count (and what 2012 actually said)",
      section: "Section 3 · The Maya: cities, script, and stars",
      body: `Three intellectual achievements sit at the center of Maya civilization, and one modern embarrassment sits on top of them. Take them in order.

**The script.** Maya writing is a **full writing system**, the only one in the pre-Columbian Americas that demonstrably could record anything its users could say. It is *logosyllabic*: several hundred signs mixing logograms (whole words) with a syllabary (consonant-vowel signs), so the same word could be written multiple ways, a flexibility scribes used playfully (Coe & Houston, 2022). Texts survive on stelae, lintels, stairways, painted ceramics, cave walls, and in the folding books (Section 7 tells the story of the books, and of how the script was lost and cracked again). What matters here: when you read "the Maya wrote," do not picture pictograms gesturing at meaning. Picture prose, names, verbs, dates, quotations, in a script as capable as the one you are reading now.

**Zero and the numbers.** Maya arithmetic is **vigesimal** (base-20), written with dots (1), bars (5), and (the famous part) a **zero**, often drawn as a stylized shell, used as a true placeholder in positional notation. Independent invention of positional zero is one of the rarest events in intellectual history; Mesoamerica achieved it centuries before the concept, traveling from India through the Islamic world, reached European arithmetic (Coe & Houston, 2022; Aveni, 2001). The earliest surviving Long Count dates, which require positional place-keeping, fall in the **first century BCE** (36 and 32 BCE, at Chiapa de Corzo and Tres Zapotes), on the *western edge* of the Maya area, so the system itself predates its Maya florescence and its inventors are, honestly, uncertain.

**The calendars.** Mesoamerica ran on interlocking cycles, and the Maya elaboration is the richest documented: the **tzolk'in**, a 260-day ritual round; the **haab**, a 365-day solar year; their combination repeating every 52 years (the **Calendar Round**); and, for history, the **Long Count**, a running day-tally from a mythological era base in 3114 BCE, written as nested place values (144,000 days; 7,200; 360; 20; 1). A Long Count date nails an event to a single day across millennia, which is why Maya history has a spine that most ancient chronologies envy. (Converting to our calendar uses the GMT correlation, the era base lands on August 11, 3114 BCE in its most-used variant, with rival variants a couple of days off. Even the conversion constant is a documented scholarly argument, which is exactly how this course likes its facts.) Astronomy rode on the arithmetic: the Dresden Codex, one of the four surviving books, carries a **Venus table** tracking the planet's 584-day cycle with correction mechanisms accurate over centuries, plus eclipse-warning tables (Aveni, 2001).

**Now the embarrassment, ours, not theirs.** In the years before December 2012, a global industry announced that "the Maya calendar predicts the end of the world": bestselling books, a Hollywood disaster film, enough public anxiety that NASA published reassurance pages. Here is the entire ancient evidentiary basis for that panic. On **December 21 (or 23), 2012**, the Long Count completed its 13th **b'ak'tun**, an odometer rollover, the kind of period ending Maya kings celebrated with monuments the way we hold centennials. Exactly **one** securely known ancient inscription clearly references that future date: **Monument 6 from Tortuguero** (Tabasco, Mexico), a 7th-century text commemorating a local building dedication, which ends by fast-forwarding to the far-off 13th-b'ak'tun completion, the passage is damaged, mentions the god **Bolon Yokte'** in some connection with that station, and prophesies precisely nothing about endings (Stuart, 2011). That's it. That is the whole "prophecy." Meanwhile Maya texts routinely project *past* 2012: at Palenque, texts anticipate calendar stations in **4772 CE**, awkward scheduling for a civilization supposedly expecting cancellation (Stuart, 2011).

The 2012 affair earns its place in this course as a **specimen**: watch how it worked. A real artifact (Monument 6), a real calendar (the Long Count), a damaged passage, near-total public ignorance of the reading, and onto that thin substrate, outsiders projected an apocalypse that said everything about *their* anxieties and nothing about Maya thought. Living Maya communities spent 2012 explaining, with varying patience, that no such doom figured in their tradition. Keep the pattern: it is the spectacle trap from Lesson 1, industrialized, and the antidote was, as always, someone who could actually read the text.

:::reveal What is the complete ancient evidence behind the 2012 'Maya apocalypse,' and what does it actually say? ||| One inscription: Tortuguero Monument 6, a 7th-century building-dedication text that ends by projecting forward to the 13th-b'ak'tun period ending of December 2012, a calendar station like an odometer rollover. The passage is damaged, mentions Bolon Yokte' in some connection with the station, and prophesies no ending; other Maya texts (Palenque) schedule dates out to 4772 CE. The apocalypse was projected onto the calendar by moderns (Stuart, 2011).

## Sources
- Coe, M. D., & Houston, S. D. (2022). *The Maya* (10th ed.). Thames & Hudson. https://lccn.loc.gov/2022931889
- Stuart, D. (2011). *The order of days: The Maya world and the truth about 2012*. Harmony Books. https://lccn.loc.gov/2010028515
- Aveni, A. F. (2001). *Skywatchers: A revised and updated version of Skywatchers of ancient Mexico*. University of Texas Press. https://lccn.loc.gov/00011974
- Houston, S. D. (Ed.). (2004). *The first writing: Script invention as history and process*. Cambridge University Press. https://lccn.loc.gov/2005296487`,
      recallContent: [
        {
          prompt: "State the two corrections this lesson opens and closes with.",
          answer:
            "(1) There was never a Maya empire, the Classic Maya world was dozens of rival city-states sharing a civilization but not a government. (2) The 'small ceremonial centers in empty jungle' picture is dead: PACUNAM LiDAR (2018) found ~61,480 structures in 2,144 km², implying 7-11 million people in the Late Classic central lowlands over an engineered, farmed landscape.",
        },
        {
          prompt: "What does the Pakal example demonstrate about the value of a readable script?",
          answer:
            "Precision without hedging: K'inich Janaab' Pakal of Palenque acceded 615 CE, died 683 after a 68-year reign, and his sarcophagus (found by Ruz Lhuillier, 1952) lies beneath the Temple of the Inscriptions. Deciphered writing turns ruins into named, dated history, the exact thing anonymous Teotihuacan lacks.",
        },
        {
          prompt: "How did Classic Petén cities survive the dry season, and what fed them?",
          answer:
            "City-scale water engineering, e.g., Tikal's plastered catchments and reservoirs storing water across 4-5 dry months, and agriculture far beyond slash-and-burn: terraces, drained/raised wetland fields, orchards and gardens, all visible in the LiDAR record.",
        },
      ],
    },
    {
      slug: "meso-maya-collapse",
      title: "8 · The Classic collapse: real, specific, and still argued",
      section: "Section 3 · The Maya: cities, script, and stars",
      body: `Something real happened in the southern Maya lowlands between roughly **760 and 910 CE**, and this lesson owes you both halves: the event, stated precisely, and the explanation, labeled honestly as a live argument. What it does *not* owe you, because it is false, is the version where "the Maya mysteriously vanished."

**What actually ended.** Across the Petén and neighboring southern lowlands, over about a century and a half, the institution at the center of Classic society, the *k'uhul ajaw*, the divine king with his stelae, his court, his monumental building program, **shut down, city by city**. Dated monuments stop: Tikal's last Long Count stela is from 869 CE; Toniná erected one of the very last known, in 909. Royal construction ceases; palaces are occupied by squatters or abandoned; populations of the great southern cities decline steeply over generations (not overnight), and much of the region's countryside eventually empties (Demarest, 2004; Martin & Grube, 2008). This was a genuine civilizational catastrophe *for that region and that institution*, one of the touchstone cases in the study of societal collapse.

**What did not end.** Zoom out and the word "collapse" starts needing asterisks. While the south declined, the **northern Yucatán rose**: **Chichén Itzá** grew into one of the largest, most cosmopolitan cities Mesoamerica ever produced precisely in the Terminal Classic (c. 800-1000 CE); after it, **Mayapán** headed a confederation into the 1400s; coastal trading towns like Tulum were thriving when the Spanish first coasted Yucatán in 1517-1519. In the Guatemalan highlands, the **K'iche' and Kaqchikel kingdoms** were expanding powers when Pedro de Alvarado attacked in 1524, and it is the K'iche' court tradition that gives us the *Popol Vuh* (Section 7). Maya farmers, nobles, scribes, and merchants continued being Maya, in Maya polities, for another six centuries after Tikal fell silent, and roughly seven million of their descendants are alive today (Lesson 17). Scholars like McAnany and Yoffee have argued the very word "collapse" misleads here: **institutions collapsed; a people adapted, moved, and continued** (McAnany & Yoffee, 2010).

**Why it happened: the honest scoreboard.** No single-cause account has won, but the argument is now unusually evidence-rich:

- **Drought, from the geology.** Sediment cores from Lake Chichancanab (Yucatán) identified the period c. 800-1000 CE as among the driest of the past several thousand years in the region (Hodell, Curtis, & Brenner, 1995); a Belizean stalagmite record later resolved a sequence of severe multi-year droughts across the 9th century, tracking the staggered pattern of political failure (Kennett et al., 2012). The paleoclimate signal is real and repeatedly replicated; how much explanatory weight it can carry, the north got dry too, yet Chichén Itzá boomed, is the debated part.
- **Warfare, from the ground and the texts.** Endemic Late Classic warfare visibly escalated in regions like the Petexbatun, where cities like Dos Pilas ended behind hastily built fortification walls (Demarest, 2004); LiDAR has since revealed fortifications more widespread than once believed (Canuto et al., 2018).
- **Overshoot and environment.** Populations at the 7-to-11-million scale (Lesson 6) pressed hard on thin tropical soils; erosion and deforestation signals appear in the cores, capacity stress that made everything else worse (Demarest, 2004).
- **Political failure.** The divine-king institution itself may have been the fragile part: a system premised on the king delivering rain and victory has no graceful failure mode when drought and defeat arrive together. The pattern, royal institutions dying while commoner populations persist longest, fits this reading (Martin & Grube, 2008; Demarest, 2004).

The emerging mainstream is a **conjunction**: multi-decade droughts hitting an overpopulated, war-torn landscape governed by an institution that could not survive missed promises, with the mix differing city by city, which is why the endings are staggered across 150 years. But hold it as a weighted-evidence debate, not a verdict; the literature still argues loudly about the weights.

Last thing, because it is the point of the lesson: notice that **"specific and debated" and "mysterious" are opposites.** The collapse has dates, cores, walls, and last stelae, an evidence trail generations deep. "Mysteriously vanished" erases both the evidence and the seven million people, and it prepares the ground for every "lost race" fantasy this course keeps meeting. The Maya did not vanish. A political system did.

:::reveal Give the 'both halves' of the Classic collapse: what precisely ended, and what the main candidate explanations are. ||| Ended, c. 760-910 CE, in the southern lowlands: the divine-king (k'uhul ajaw) institution, dated monuments cease (Tikal 869, Toniná 909), royal building stops, the great southern cities depopulate over generations. Candidate causes, argued in conjunction: replicated megadrought records (Chichancanab cores, Belize stalagmite), escalating warfare (Petexbatun fortifications), population/environmental overshoot, and the brittleness of divine kingship itself. Meanwhile the north (Chichén Itzá, Mayapán) flourished and Maya polities persisted to the Spanish invasion, institutions collapsed; the people did not vanish.

## Sources
- Demarest, A. (2004). *Ancient Maya: The rise and fall of a rainforest civilization*. Cambridge University Press. https://lccn.loc.gov/2005299673
- Hodell, D. A., Curtis, J. H., & Brenner, M. (1995). Possible role of climate in the collapse of Classic Maya civilization. *Nature, 375*, 391-394. https://doi.org/10.1038/375391a0
- Kennett, D. J., Breitenbach, S. F. M., Aquino, V. V., Asmerom, Y., Awe, J., Baldini, J. U. L., Bartlein, P., Culleton, B. J., Ebert, C., & 8 others. (2012). Development and disintegration of Maya political systems in response to climate change. *Science, 338*(6108), 788-791. https://doi.org/10.1126/science.1226299
- Martin, S., & Grube, N. (2008). *Chronicle of the Maya kings and queens* (2nd ed.). Thames & Hudson. https://lccn.loc.gov/2008396649
- McAnany, P. A., & Yoffee, N. (Eds.). (2010). *Questioning collapse: Human resilience, ecological vulnerability, and the aftermath of empire*. Cambridge University Press. https://doi.org/10.1017/cbo9780511757815
- Canuto, M. A., et al. (2018). Ancient lowland Maya complexity as revealed by airborne laser scanning of northern Guatemala. *Science, 361*(6409), eaau0137. https://doi.org/10.1126/science.aau0137`,
      recallContent: [
        {
          prompt: "What kind of writing system is Maya script, and why does that classification matter?",
          answer:
            "A full logosyllabic system, several hundred signs mixing logograms with a consonant-vowel syllabary, capable of recording anything its users could say: the only demonstrated full writing system in the pre-Columbian Americas. It matters because it means Maya texts are prose (names, verbs, dates, quotations), not gesturing pictograms.",
        },
        {
          prompt: "Lay out the Maya calendar toolkit.",
          answer:
            "Tzolk'in (260-day ritual round) + haab (365-day year), meshing every 52 years as the Calendar Round; and the Long Count, a positional day-count from an era base in 3114 BCE (GMT correlation; most-used variant = Aug 11), which fixes events to a single day. The Dresden Codex adds a Venus table (584-day cycle, with corrections) and eclipse tables.",
        },
        {
          prompt: "Where and when do the earliest surviving Long Count dates appear, and what does that imply?",
          answer:
            "36 and 32 BCE, at Chiapa de Corzo and Tres Zapotes, on the western edge of the Maya area. The positional system (and its zero-requiring place-keeping) predates the Maya florescence, and its actual inventors are honestly uncertain.",
        },
      ],
    },
    {
      slug: "meso-quiz-3",
      title: "Section 3 quiz · The Maya",
      section: "Section 3 · The Maya: cities, script, and stars",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "The political structure of the Classic Maya world was…",
            options: [
                       "dozens of rival city-states under 'holy lords,' never one government",
                       "a single centralized Maya empire ruled from Tikal for six centuries",
                       "a wide democracy of village councils that recognized no kings at all",
                       "a single province of Teotihuacan throughout the entire Classic period",
                     ],
            correctIndex: 0,
            explanation:
              "'Maya empire' is a myth: the shared script, calendar, and religion spanned polities that warred and allied like Renaissance Italian states (Martin & Grube, 2008).",
            sourceLessonSlug: "meso-maya-world",
          },
          {
            prompt: "What long geopolitical arc did decipherment reveal in the Classic inscriptions?",
            options: [
                       "A centuries-long rivalry of Tikal and Calakmul, fought via client kings",
                       "A single long war fought against the Olmec centers of the Gulf Coast",
                       "Peaceful centuries with no conflict recorded between any two cities",
                       "Annual wars fought against the Aztecs of the distant Basin of Mexico",
                     ],
            correctIndex: 0,
            explanation:
              "Calakmul engineered Tikal's defeat in 562; Tikal's Jasaw Chan K'awiil I struck back in 695, history reconstructed from the cities' own monuments.",
            sourceLessonSlug: "meso-maya-world",
          },
          {
            prompt: "Why can the course give Pakal's dates (acceded 615, died 683) without hedging?",
            options: [
                       "Because Maya stelae date royal lives to the day, and are deciphered",
                       "Because Spanish chroniclers interviewed Pakal and his descendants",
                       "Because radiocarbon dating of the tomb is precise to the single year",
                       "It cannot: those two dates are modern guesses drawn from tomb pottery",
                     ],
            correctIndex: 0,
            explanation:
              "Readable dated texts make the Maya the one pre-Columbian civilization with named, day-dated political history, the contrast with anonymous Teotihuacan.",
            sourceLessonSlug: "meso-maya-world",
          },
          {
            prompt: "The 2018 PACUNAM LiDAR survey of northern Guatemala found…",
            options: [
                       "About 61,480 structures in 2,144 km², implying 7-11 million people",
                       "That the jungle was largely empty of ruins outside the known centers",
                       "About 600 structures in 2,144 km², confirming very small populations",
                       "Only ceremonial centers, with no ordinary houses anywhere between them",
                     ],
            correctIndex: 0,
            explanation:
              "Canuto et al. (2018, Science): house platforms, terraces, wetland fields, causeways, and fortifications under the canopy, a day's flying rewrote a century of settlement estimates.",
            sourceLessonSlug: "meso-maya-world",
          },
          {
            prompt: "How did Petén cities like Tikal survive four-to-five-month dry seasons?",
            options: [
                       "City-scale water engineering: plastered catchments feeding reservoirs",
                       "They relocated their whole populations to the coast every dry season",
                       "Deep wells drilled through the limestone with iron-tipped drill bits",
                       "They did not; the cities emptied out entirely every single dry season",
                     ],
            correctIndex: 0,
            explanation:
              "Reservoir systems stored a city's water across the dry months; agriculture ran on terraces, raised wetland fields, and orchards, an engineered countryside now regrown as forest.",
            sourceLessonSlug: "meso-maya-world",
          },
          {
            prompt: "Maya writing is best described as…",
            options: [
                       "a logosyllabic system of word-signs and syllables, able to record speech",
                       "simple pictures whose meanings any modern reader can simply guess at",
                       "an alphabet borrowed from Phoenician traders in the first millennium",
                       "pure decoration carrying no linguistic content of any kind whatever",
                     ],
            correctIndex: 0,
            explanation:
              "It is the only demonstrated full writing system of the pre-Columbian Americas: prose with names, verbs, dates, and quotations (Coe & Houston, 2022).",
            sourceLessonSlug: "meso-maya-script-calendar",
          },
          {
            prompt: "What makes the Mesoamerican zero historically remarkable?",
            options: [
                       "Positional zero was invented independently, among history's rarest events",
                       "It was the very first zero anywhere on Earth, predating all others",
                       "It was borrowed from Roman numerals carried west by Norse voyagers",
                       "It was purely decorative and never once used in actual calculation",
                     ],
            correctIndex: 0,
            explanation:
              "Bar-and-dot vigesimal notation used a shell-sign zero as a true placeholder. The course claims independence, not absolute priority, Babylonian placeholders and the Indian zero have their own histories.",
            sourceLessonSlug: "meso-maya-script-calendar",
          },
          {
            prompt: "The earliest surviving Long Count dates (36 and 32 BCE) appear…",
            options: [
                       "at Chiapa de Corzo and Tres Zapotes, west of the Maya area proper",
                       "at Tikal, on stelae proving that the system was a Maya invention",
                       "at Tenochtitlan, on a carved monument in the Templo Mayor precinct",
                       "in the Dresden Codex, the oldest dated book in the whole hemisphere",
                     ],
            correctIndex: 0,
            explanation:
              "An honest attribution: the Maya elaborated the Long Count most richly, but the earliest monuments carrying it sit outside the heartland.",
            sourceLessonSlug: "meso-maya-script-calendar",
          },
          {
            prompt: "Which set correctly lists the Maya calendar components?",
            options: [
                       "Tzolk'in (260 days), haab (365), Calendar Round (52 years), Long Count",
                       "A 300-day year, a 700-day round, and a ritual week of thirteen days",
                       "Only the Long Count; the Maya kept no other calendar cycles at all",
                       "The Julian and Gregorian calendars, adopted from the Spanish friars",
                     ],
            correctIndex: 0,
            explanation:
              "The Long Count's positional day-count is why Maya events can be fixed to a single day; conversion to our calendar runs through the GMT correlation (itself a documented scholarly argument).",
            sourceLessonSlug: "meso-maya-script-calendar",
          },
          {
            prompt: "What does the Dresden Codex's Venus table demonstrate?",
            options: [
                       "Maya astronomers tracked the 584-day Venus cycle with corrections",
                       "That Maya astronomers held Venus and the Sun to be one single body",
                       "That the codex is a modern forgery, exposed by chemical ink analysis",
                       "That Maya astronomy worked without numbers or recorded intervals",
                     ],
            correctIndex: 0,
            explanation:
              "Arithmetic in service of the sky (Aveni, 2001), in one of only four surviving pre-conquest Maya books.",
            sourceLessonSlug: "meso-maya-script-calendar",
          },
          {
            prompt: "The complete ancient evidentiary basis for the 2012 'Maya apocalypse' was…",
            options: [
                       "One damaged inscription, Tortuguero Monument 6, prophesying no ending",
                       "Dozens of prophecy texts carved across many of the lowland Maya cities",
                       "A dated warning in the Popol Vuh, the K'iche' council book of creation",
                       "An Aztec codex describing the end of the world in the year 2012 CE",
                     ],
            correctIndex: 0,
            explanation:
              "The passage mentions Bolon Yokte' in some connection with the calendar station (Stuart, 2011). A period ending is an odometer rollover, celebrated, not feared; Palenque texts schedule dates to 4772 CE.",
            sourceLessonSlug: "meso-maya-script-calendar",
          },
          {
            prompt: "Which statement about the Classic collapse is accurate?",
            options: [
                       "In the southern lowlands, c. 760-910 CE, divine kingship shut down",
                       "All Maya everywhere died out simultaneously around the year 900 CE",
                       "It happened within one single year right across the entire Maya area",
                       "Archaeologists now deny that anything at all happened in the period",
                     ],
            correctIndex: 0,
            explanation:
              "Real and regional: last stelae at Tikal 869, Toniná 909; steep southern depopulation over generations, and simultaneous northern boom. 'Institutions collapsed; a people adapted' (McAnany & Yoffee, 2010).",
            sourceLessonSlug: "meso-maya-collapse",
          },
          {
            prompt: "What does the paleoclimate record contribute to the collapse debate?",
            options: [
                       "Replicated evidence of severe 9th-century droughts, weight still debated",
                       "Proof that climate change alone caused the collapse in every region",
                       "Evidence that the ninth century was unusually wet across the lowlands",
                       "Nothing at all; no climate data exists for the period anywhere nearby",
                     ],
            correctIndex: 0,
            explanation:
              "Hodell et al. (1995) and Kennett et al. (2012) anchor the drought case; the mainstream reads collapse as a conjunction, drought + warfare + overshoot + a brittle royal institution, with argued weights.",
            sourceLessonSlug: "meso-maya-collapse",
          },
          {
            prompt: "Which Maya polities did the Spanish actually encounter, centuries after the Classic collapse?",
            options: [
                       "Thriving coastal towns like Tulum and the K'iche' highland kingdoms",
                       "None at all; the land they entered had been empty for six centuries",
                       "Only Tikal, still standing at the full height of its Classic power",
                       "A single successor state ruled from Teotihuacan's rebuilt city core",
                     ],
            correctIndex: 0,
            explanation:
              "Six centuries of continued Maya history separate Tikal's last stela from Alvarado's invasion, the plainest refutation of 'they vanished.'",
            sourceLessonSlug: "meso-maya-collapse",
          },
          {
            prompt: "Why does the course say 'mysteriously vanished' is worse than wrong?",
            options: [
                       "It erases both the evidence trail and the ~7 million Maya alive today",
                       "Because the Classic collapse never actually happened in any region",
                       "Because the true explanation is a well-documented alien intervention",
                       "Because mystery makes for boring and unwatchable documentary television",
                     ],
            correctIndex: 0,
            explanation:
              "'Specific and debated' is the opposite of 'mysterious.' A political system died in one region; the people continued, and continue.",
            sourceLessonSlug: "meso-maya-collapse",
          },
        ],
      },
    },
    // ────────────── SECTION 4 · THE MEXICA (AZTEC) ──────────────
    {
      slug: "meso-tenochtitlan",
      title: "9 · Tenochtitlan: the city on the lake",
      section: "Section 4 · The Mexica (Aztec) and the tribute empire",
      body: `Names first, because the famous one is a latecomer. The people this section covers called themselves the **Mexica** (meh-SHEE-kah), the name survives in "Mexico", and, with allied lake peoples, spoke **Nahuatl**. "Aztec" derives from Aztlan, the legendary homeland of their migration story, and was popularized as an ethnic label mainly by writers of the nineteenth century; it is standard, and this course uses it, but "Mexica" is the more precise word for the people of Tenochtitlan (Smith, 2012).

The Mexica were **late arrivals**, in their own annals, the last of the Nahua migrant groups to enter the crowded Basin of Mexico, reduced to serving older powers as mercenaries and squatting on land nobody wanted. The date their tradition gives for the founding of **Tenochtitlan**, on a marshy island in Lake Texcoco, at the sign of an eagle perched on a cactus (the image on the Mexican flag today), is, traditionally, **1325 CE** (Smith, 2012). Treat the origin story as their own sacred history, not GPS-verified fact; treat what they built on that island over the next two centuries as one of the world's urban wonders, because that part is documented from every direction.

By 1519, Tenochtitlan (with its twin city Tlatelolco) held a population **commonly estimated between about 150,000 and 200,000, with some estimates higher**, by most estimates larger than any city in Spain, and among the largest anywhere (Smith, 2012). The infrastructure that made a metropolis on a lake livable:

- **Chinampas**, the misnamed "floating gardens" (they do not float): rectangular plots built up from lake mud and vegetation between grids of canals, anchored by willows, among the most productive farming systems ever engineered anywhere. Chinampa agriculture fed a large share of the city, with multiple harvests a year; a remnant survives at Xochimilco, inscribed with the historic center on UNESCO's World Heritage list in 1987 (Smith, 2012; UNESCO, 1987).
- **Three great causeways** ran to the mainland, cut by removable bridges; canals served as streets (the Spanish repeatedly reached for Venice comparisons); fresh water arrived by a **twin-channeled aqueduct from Chapultepec** (two channels, so one could flow while the other was cleaned).
- The kilometers-long **dike attributed to Nezahualcoyotl** of Texcoco separated the brackish east lake from the fresh, spring-fed water around the city, hydraulic engineering at landscape scale (Smith, 2012).

At Tlatelolco sat **the market** that stunned the invaders. Cortés reported (his own claim, in his second letter to the king) that more than 60,000 people bought and sold there daily, in ordered rows by trade, goldsmiths, feather-workers, food from across the empire, barbers, apothecaries, under courts that policed measures and prices (Cortés, 1520/1986). Bernal Díaz del Castillo, writing decades later as an old man, a caveat his book always deserves, recalled soldiers who had seen Rome and Constantinople saying they had never seen a market so large, so orderly, so full of people (Díaz del Castillo, 1632/1963). Read those as what they are: **hostile witnesses conceding magnificence**. The men describing the city came to take it, had every motive to flatter their own deeds by praising the prize, but none to invent its sewers, its street-sweepers, or its price courts.

Two more institutions round out the picture the conquistadors' awe tends to crowd out. Mexica sources describe **compulsory schooling**: noble children attended the *calmecac* (temple schools training priests, officials, and commanders), while commoner boys, and, in the sources' description, girls in parallel institutions, attended the *telpochcalli*, "houses of youth," for training in work, arms, ritual, and the moral discourses preserved in Book 6 of the Florentine Codex (Sahagún, 1950-1982; Smith, 2012). And the city was *clean*: nightly sweeping, waste collected by canoe for use as fertilizer, public latrines, details the Spanish recorded precisely because their own cities lacked them.

:::reveal Why does the course call the Spanish descriptions of Tenochtitlan 'hostile witnesses conceding magnificence,' and what caveats does it attach? ||| Cortés and Díaz came to conquer, so their awe (the 60,000-person market claim, the Rome/Constantinople comparison) is testimony against interest, they had motive to praise the prize but none to invent sewers, street-sweepers, and price courts. Caveats: Cortés's figures are his own claims in letters justifying himself to the king, and Díaz wrote decades later as an old man, so the course attributes their numbers rather than asserting them.

## Sources
- Smith, M. E. (2012). *The Aztecs* (3rd ed.). Wiley-Blackwell. https://lccn.loc.gov/2011029132
- Cortés, H. (1986). *Letters from Mexico* (A. Pagden, Trans. & Ed.). Yale University Press. https://lccn.loc.gov/86050363 (Second letter originally written 1520)
- Díaz del Castillo, B. (1963). *The conquest of New Spain* (J. M. Cohen, Trans.). Penguin. https://lccn.loc.gov/63005608 (Original work published 1632)
- Sahagún, B. de. (1950-1982). *Florentine Codex: General history of the things of New Spain* (A. J. O. Anderson & C. E. Dibble, Trans.). School of American Research / University of Utah. https://lccn.loc.gov/51002409
- UNESCO World Heritage Centre. (1987). *Historic Centre of Mexico City and Xochimilco* (World Heritage List No. 412). https://whc.unesco.org/en/list/412/`,
      recallContent: [
        {
          prompt: "What are the last dated monuments the lesson cites, and what do they mark?",
          answer:
            "Tikal's last Long Count stela, 869 CE, and one of the very last known anywhere, Toniná's of 909 CE. They mark the city-by-city shutdown of the divine-king institution in the southern lowlands across roughly 760-910 CE, staggered over 150 years, not overnight.",
        },
        {
          prompt: "Summarize the drought evidence and its acknowledged limit.",
          answer:
            "Lake Chichancanab sediment cores (Hodell et al., 1995) put c. 800-1000 CE among the region's driest intervals in millennia; a Belize stalagmite (Kennett et al., 2012) resolves repeated severe 9th-century droughts tracking political failures. Limit: the north also got dry, yet Chichén Itzá boomed, so drought can't be the whole story, and the causal weights remain argued.",
        },
        {
          prompt: "Why does the course insist 'specific and debated' is the opposite of 'mysterious'?",
          answer:
            "The collapse has an evidence trail, dates, sediment cores, fortification walls, last stelae, and a live multi-causal argument. 'Mysteriously vanished' erases that evidence and the ~7 million living Maya, clearing ground for lost-race fantasies. A political system died; a people did not.",
        },
      ],
    },
    {
      slug: "meso-triple-alliance",
      title: "10 · The Triple Alliance: an empire made of tribute",
      section: "Section 4 · The Mexica (Aztec) and the tribute empire",
      body: `The thing we call the "Aztec Empire" has a birth year and a legal form, and knowing both changes how you read its fall. In **1428**, three lakeside city-states, **Tenochtitlan**, **Texcoco**, and **Tlacopan**, allied to overthrow their overlord, the Tepanec city of Azcapotzalco, and constituted themselves as the **Triple Alliance** (*Excan Tlatoloyan*), splitting future tribute by formula, with Tenochtitlan first among equals and increasingly dominant (Smith, 2012). Ninety-one years separate that founding from Cortés's landing. The empire the Spanish met was **younger than the printing press**.

Under Itzcoatl, Moctezuma I, and their successors down to **Moctezuma II** (r. 1502-1520), the Alliance expanded until it took tribute from several hundred subject towns across central and southern Mexico, a subject population plausibly in the **several millions** (estimates vary widely; Lesson 15 explains why every such number is a range). But its *form* matters more than its size: this was a **hegemonic, tribute-taking empire, not a territorial one**. With few exceptions, conquered towns kept their own rulers, gods, languages, and laws. What changed was an obligation: the tribute list. We can still read those lists, item by item, because colonial administrators had them copied, the **Codex Mendoza** (c. 1541) records, town by painted town, the cloaks, maize, cacao, feathers, jade, paper, and warriors' costumes owed to the Alliance capitals (Berdan & Anawalt, 1992). Professional merchants, the *pochteca*, doubled as imperial eyes abroad. Garrisons were few; compliance ran on the credible threat of the armies returning.

Read that design cynically and correctly: it is **cheap to run and quick to shatter**. The empire banked obedience, not loyalty; it left its subjects organized, armed, resentful, and self-governing, pre-assembled rebel coalitions awaiting a coordinator. Hold that thought two lessons.

Inside the ring of subject towns sat holes the Alliance never closed, and two matter enormously:

- **Tlaxcala**, a Nahua confederation east of the lakes: never conquered, wholly encircled, cut off from imports like cotton and salt, and locked with Tenochtitlan in the strange institution of the **"flower wars"** (*xochiyaoyotl*), arranged battles whose purpose is genuinely debated. The sources frame them as chivalric-religious exercises yielding sacrificial captives; analysts like Ross Hassig read them as low-cost attrition and containment of an enemy too costly to finish; sixteenth-century Tlaxcalan and Mexica informants themselves gave conflicting accounts. *Contested*, but the enmity they cultivated is not (Hassig, 1988; Smith, 2012).
- The **Purépecha (Tarascan) empire** of Michoacán, Section 5 introduces them properly, which inflicted on the Aztecs their worst recorded defeat and stood as an unbreached western wall.

One more correction while the empire is on the table: Postclassic Nahua culture was not a barracks. The lake cities sustained schools of oratory, sculpture that ranks with anything in the ancient world (the Coyolxauhqui relief, the Sun Stone), botanical gardens at Texcotzingo, and a poetic tradition in Nahuatl, *in xochitl in cuicatl*, "flower and song", preserved in colonial-era compilations like the *Cantares Mexicanos*. Poems in those manuscripts are attributed to named rulers, most famously **Nezahualcoyotl of Texcoco**; scholars debate how much is truly his and how much later attribution, the honest label is "attributed" (León-Portilla, 1992). The empire that took tribute in feathers also graded its students on the elegance of their speech.

:::reveal Why does the course call the Triple Alliance's design 'cheap to run and quick to shatter'? ||| It was hegemonic, not territorial: subject towns kept their rulers, gods, and arms, owing only tribute (the painted lists survive in the Codex Mendoza), with few garrisons, so control cost little but bought obedience, not loyalty. That left the empire ringed with organized, resentful, self-governing peoples, with unconquered Tlaxcala embedded in the middle, pre-assembled coalitions for any coordinator who arrived. In 1519, one did.

## Sources
- Smith, M. E. (2012). *The Aztecs* (3rd ed.). Wiley-Blackwell. https://lccn.loc.gov/2011029132
- Berdan, F. F., & Anawalt, P. R. (Eds.). (1992). *The Codex Mendoza* (4 vols.). University of California Press. https://lccn.loc.gov/91015397
- Hassig, R. (1988). *Aztec warfare: Imperial expansion and political control*. University of Oklahoma Press. https://lccn.loc.gov/87040553
- León-Portilla, M. (1992). *Fifteen poets of the Aztec world*. University of Oklahoma Press. https://lccn.loc.gov/92007108`,
      recallContent: [
        {
          prompt: "Sort the names: Mexica, Aztec, Nahuatl, Tenochtitlan.",
          answer:
            "Mexica: the people's own name (→ 'Mexico'). Aztec: a later label from legendary Aztlan, popularized by 19th-century writers, standard but less precise. Nahuatl: their language, shared with other Nahua peoples. Tenochtitlan: their island capital in Lake Texcoco, traditionally founded 1325 at the eagle-on-cactus sign now on Mexico's flag.",
        },
        {
          prompt: "What are chinampas, and what are they not?",
          answer:
            "Raised rectangular field-plots built from lake mud and vegetation between canal grids, anchored by willows, among the most productive farming systems ever engineered, yielding multiple harvests a year. They are NOT floating gardens (they don't float). A remnant survives at Xochimilco (UNESCO, 1987).",
        },
        {
          prompt: "Name three pieces of hydraulic/urban engineering that made a lake metropolis livable.",
          answer:
            "The twin-channeled Chapultepec aqueduct (one channel flows while the other is cleaned); the kilometers-long dike attributed to Nezahualcoyotl separating brackish from fresh water; three causeways with removable bridges plus canal-streets, with nightly sweeping, canoe-collected waste used as fertilizer, and market courts policing measures.",
        },
      ],
    },
    {
      slug: "meso-sacrifice",
      title: "11 · Human sacrifice: the honest version",
      section: "Section 4 · The Mexica (Aztec) and the tribute empire",
      body: `This lesson exists because both easy versions of its subject are false, and this course promised you neither. Version one, the lurid one, makes Mesoamerica a slaughterhouse with architecture, defined by sacrifice the way a caricature defines a face. Version two, the apologetic one, waves sacrifice away as Spanish slander invented to justify conquest. The record refutes both, and the method for handling it is the same one this course uses everywhere: **archaeology first, numbers audited, motives of every source on the table.**

**It was real. Archaeology has closed that question.** Spanish accounts described an enormous rack of skulls, a *tzompantli*, near the Templo Mayor. For centuries that description could be suspected of propaganda. Then, beginning in **2015**, INAH archaeologists under Raúl Barrera Rodríguez, excavating beneath a colonial building on Guatemala Street in downtown Mexico City, uncovered the **Huei Tzompantli** itself: the platform of the great skull rack, plus two towers of human skulls mortared into circular structures, **hundreds of skulls of men, women, and children** documented as excavation proceeded (INAH, 2017; Matos Moctezuma & López Luján, 2017). The dig confirmed the *existence and substance* of what the invaders described. Sacrifice at Tenochtitlan was public, architectural, state-organized, and (remember Teotihuacan's Feathered Serpent Pyramid, three centuries of Maya captive stelae, and offerings back to Preclassic times) **very old and very Mesoamerican**, not a Mexica invention (Sugiyama, 2005; López Austin & López Luján, 2008).

**Why, in their own terms.** In Mexica cosmology as recorded in the Florentine Codex and read by scholars like Alfredo López Austin, the present world, the Fifth Sun, exists because gods sacrificed *themselves* to set the sun moving, incurring a debt that humans repay in kind: blood and hearts as *nextlahualli*, "debt-payment," keeping the cosmos running (López Austin & López Luján, 2008; Sahagún, 1950-1982). Sacrifice was embedded in a total system, most captives came from war, dying "for the sun" paralleled a warrior's death, and self-sacrifice (bloodletting from one's own body) was universal, from kings down. Understanding this framework is not endorsing it; it is the difference between history and a horror movie. The practice also did political work, imperial theater staged before invited enemy dignitaries, and Mexica sources themselves record it scaling up under the imperial state of the 1400s (Smith, 2012).

**Now audit the numbers, both directions.** The figure that launched a thousand documentaries, **80,400 victims** at the 1487 rededication of the Templo Mayor, comes from **later chronicles, not eyewitnesses** (it appears in sources like Durán, written generations after); scholars have long noted the logistical impossibility of the implied per-minute kill rate, and the suspiciously round cosmological bookkeeping of such totals. The honest label is **"reported, not established"**, a number to be studied as imperial and colonial rhetoric, not recited as a body count (Restall, 2003; Smith, 2012). The same audit runs the other way: conquistador Andrés de Tapia's claimed count of 136,000 skulls on the rack is likewise unverifiable self-justifying testimony, the Spanish had every incentive to inflate Mexica cruelty, since "rescuing the Indians from tyranny" was their legal-moral case for conquest and encomienda. And the pseudo-scientific floor of the genre, Michael Harner's 1977 theory that sacrifice existed to supply dietary protein, was dismantled in detail by Bernard Ortiz de Montellano (1978): the numbers, the nutrition, and the ethnography all fail. What archaeology actually supports: sacrifice was real, substantial, and central; the five- and six-figure single-event totals are unsupported; a real annual scale remains genuinely uncertain, a range, not a number.

**Context, without exoneration.** The Europe that was horrified by Tenochtitlan burned heretics in public squares, broke prisoners on the wheel, and would soon fill decades with religious wars and witch executions, public, ritualized, state-sanctioned killing framed as necessary for cosmic order (there, "justice" and "salvation"). That parallel does not excuse the tzompantli; it dissolves the claim that ritualized public killing marks Mesoamericans as uniquely other. The honest position holds everything at once: the skull tower is real; the 80,400 is rhetoric; the practice had an internal logic its practitioners could articulate; and the people who ended it replaced it with their own repertoire of public death. History owes you all four clauses, not your favorite one.

:::reveal How does the course audit the two famous sacrifice numbers, 80,400 and 136,000, and what does archaeology actually establish? ||| Both fail the audit: 80,400 (the 1487 rededication) comes from later chronicles, not eyewitnesses, with impossible implied logistics, 'reported, not established'; 136,000 (Tapia's skull count) is unverifiable conquistador testimony from men whose legal case for conquest required Mexica tyranny. What archaeology (Huei Tzompantli, excavated from 2015; Templo Mayor offerings; Teotihuacan's FSP) establishes: sacrifice was real, public, state-organized, substantial, and anciently Mesoamerican, with true annual scale honestly uncertain.

## Sources
- Matos Moctezuma, E., & López Luján, L. (2017). El Huei Tzompantli de Tenochtitlan. *Arqueología Mexicana, 25*(148), 60-67.
- Instituto Nacional de Antropología e Historia. (2017). *Huei Tzompantli de Tenochtitlan* [excavation reporting, Programa de Arqueología Urbana]. INAH.
- López Austin, A., & López Luján, L. (2008). Aztec human sacrifice. In E. M. Brumfiel & G. M. Feinman (Eds.), *The Aztec world* (pp. 137-152). Abrams. https://lccn.loc.gov/2007048998
- Sahagún, B. de. (1950-1982). *Florentine Codex* (A. J. O. Anderson & C. E. Dibble, Trans.). School of American Research / University of Utah. https://lccn.loc.gov/51002409
- Ortiz de Montellano, B. R. (1978). Aztec cannibalism: An ecological necessity? *Science, 200*(4342), 611-617. https://doi.org/10.1126/science.200.4342.611
- Restall, M. (2003). *Seven myths of the Spanish conquest*. Oxford University Press. https://doi.org/10.1093/oso/9780195160772.001.0001
- Smith, M. E. (2012). *The Aztecs* (3rd ed.). Wiley-Blackwell. https://lccn.loc.gov/2011029132
- Sugiyama, S. (2005). *Human sacrifice, militarism, and rulership: Materialization of state ideology at the Feathered Serpent Pyramid, Teotihuacan*. Cambridge University Press. https://doi.org/10.1017/cbo9780511489563`,
      recallContent: [
        {
          prompt: "Give the Triple Alliance's founding facts and why its age matters.",
          answer:
            "1428: Tenochtitlan, Texcoco, and Tlacopan overthrew Tepanec Azcapotzalco and split future tribute by formula, Tenochtitlan increasingly dominant. Only 91 years separate that founding from Cortés, the empire the Spanish met was younger than the printing press, still expanding, with unhealed holes (Tlaxcala, the Purépecha).",
        },
        {
          prompt: "What is the Codex Mendoza and why is it a historian's gift?",
          answer:
            "A colonial compilation (c. 1541) copying imperial tribute rolls: town by painted town, the cloaks, maize, cacao, feathers, jade, paper, and warrior costumes owed to the Alliance. It lets us read the empire's fiscal machinery item by item (Berdan & Anawalt, 1992).",
        },
        {
          prompt: "What were the flower wars, and what label does the course attach to their purpose?",
          answer:
            "Xochiyaoyotl: arranged battles between the Alliance and enemies like Tlaxcala. Purpose CONTESTED, sources frame chivalric-religious captive-taking; Hassig reads low-cost attrition/containment; period informants conflict. What's not contested is the enmity they cultivated.",
        },
      ],
    },
    {
      slug: "meso-quiz-4",
      title: "Section 4 quiz · The Mexica and the tribute empire",
      section: "Section 4 · The Mexica (Aztec) and the tribute empire",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which naming statement is correct?",
            options: [
                       "They called themselves Mexica; 'Aztec' was popularized in the 1800s",
                       "'Aztec' was the people's own everyday name for themselves in Nahuatl",
                       "'Mexica' was a label that the Spanish invented for them after 1521",
                       "Nahuatl was the name of their capital city, not of any language",
                     ],
            correctIndex: 0,
            explanation:
              "'Mexica' survives in 'Mexico'; Nahuatl was their language. 'Aztec' is standard and usable, but the course flags its history.",
            sourceLessonSlug: "meso-tenochtitlan",
          },
          {
            prompt: "How does the course treat the 1325 founding date and eagle-on-cactus story?",
            options: [
                       "As the Mexica's own sacred tradition, their annals' date, not GPS fact",
                       "As proven archaeologically to the exact day by excavated deposits",
                       "As a Spanish fabrication with no Indigenous source standing behind it",
                       "As an irrelevant legend that is not worth teaching to any student",
                     ],
            correctIndex: 0,
            explanation:
              "Origin story labeled as tradition; the engineered city labeled as evidence. That division of labels is the course's method in miniature.",
            sourceLessonSlug: "meso-tenochtitlan",
          },
          {
            prompt: "What are chinampas?",
            options: [
                       "Raised field-plots of lake mud between canals, not actually floating",
                       "Rafts planted with flowers that drifted freely around the lakeshore",
                       "Fishing platforms that had no agricultural role of any kind at all",
                       "Spanish-introduced kitchen gardens first laid out in the 1530s CE",
                     ],
            correctIndex: 0,
            explanation:
              "The 'floating gardens' misnomer persists, but the plots are anchored constructions; a remnant survives at Xochimilco (UNESCO, 1987).",
            sourceLessonSlug: "meso-tenochtitlan",
          },
          {
            prompt: "The course reads Cortés's 60,000-person market claim and Díaz's Rome/Constantinople comparison as…",
            options: [
                       "hostile witnesses conceding magnificence, testimony against interest",
                       "exact censuses that can safely be repeated as an established fact",
                       "worthless, because every Spaniard lied about everything that he saw",
                       "descriptions of Chichén Itzá that were later moved to Tenochtitlan",
                     ],
            correctIndex: 0,
            explanation:
              "Men who came to take the city had motive to praise the prize, none to invent its street-sweepers, sewers, and price courts. The course attributes their numbers instead of asserting them.",
            sourceLessonSlug: "meso-tenochtitlan",
          },
          {
            prompt: "Which infrastructure list for Tenochtitlan is accurate?",
            options: [
                       "Causeways with removable bridges, canal-streets, an aqueduct, a dike",
                       "A stone bridge to the mainland, windmills, and a covered rail line",
                       "No fresh water source at all; residents drank untreated lake water",
                       "City walls forty meters high, ringed by a moat cut down into bedrock",
                     ],
            correctIndex: 0,
            explanation:
              "The twin aqueduct channels alternated for cleaning; the dike attributed to Nezahualcoyotl managed salinity at landscape scale (Smith, 2012).",
            sourceLessonSlug: "meso-tenochtitlan",
          },
          {
            prompt: "What was the Triple Alliance?",
            options: [
                       "The 1428 pact of Tenochtitlan, Texcoco, and Tlacopan, the 'empire'",
                       "An alliance of Maya city-states formed against Spain in the 1520s CE",
                       "A long-distance trade league joining the Mexica with the Andean Inca",
                       "A trio of creator gods standing at the head of the Mexica pantheon",
                     ],
            correctIndex: 0,
            explanation:
              "Only 91 years old when Cortés landed, younger than the printing press, still expanding, with unhealed enemies.",
            sourceLessonSlug: "meso-triple-alliance",
          },
          {
            prompt: "The Aztec empire's characteristic form of control was…",
            options: [
                       "hegemonic tribute-taking: subject towns kept their rulers but paid",
                       "direct territorial rule, with imperial governors posted everywhere",
                       "compulsory religious conversion of every subject to Huitzilopochtli",
                       "mass enslavement and deportation of every one of the conquered peoples",
                     ],
            correctIndex: 0,
            explanation:
              "Cheap to run, quick to shatter: it banked obedience, not loyalty, leaving organized, armed, resentful subjects. The design is legible in the Codex Mendoza's tribute rolls.",
            sourceLessonSlug: "meso-triple-alliance",
          },
          {
            prompt: "What is the Codex Mendoza?",
            options: [
                       "A colonial compilation of c. 1541 copying the imperial tribute lists",
                       "A pre-conquest Maya astronomy book from the northern Yucatán peninsula",
                       "Moctezuma II's private diary, kept in Nahuatl right up to his death",
                       "A Spanish royal law code written for the American colonies in 1542",
                     ],
            correctIndex: 0,
            explanation:
              "Berdan & Anawalt's edition makes the empire's fiscal machinery readable item by item, the primary window on how tribute empire actually worked.",
            sourceLessonSlug: "meso-triple-alliance",
          },
          {
            prompt: "Which is the accurate, honestly-labeled account of the 'flower wars'?",
            options: [
                       "Arranged battles with Tlaxcala whose purpose is genuinely contested",
                       "Fully understood ceremonial games that produced no casualties at all",
                       "A Spanish invention with no support at all in any Indigenous source",
                       "Battles that were fought using flowers in place of any real weapons",
                     ],
            correctIndex: 0,
            explanation:
              "Period informants themselves conflict. The course labels the purpose contested and banks the consequence: Tlaxcala's enmity, which 1519 weaponized.",
            sourceLessonSlug: "meso-triple-alliance",
          },
          {
            prompt: "Why does the course mention Nezahualcoyotl's poetry with the label 'attributed'?",
            options: [
                       "The poems survive in colonial compilations; authorship is debated",
                       "Because he is certainly known to have written every surviving line",
                       "Because no Nahuatl poetry at all survives from before the conquest",
                       "Because the writing of poetry was illegal throughout the Aztec empire",
                     ],
            correctIndex: 0,
            explanation:
              "'Attributed' is the honest label (León-Portilla, 1992), and the tradition itself, in xochitl in cuicatl, corrects the barracks caricature of Nahua culture either way.",
            sourceLessonSlug: "meso-triple-alliance",
          },
          {
            prompt: "What did the excavations beginning in 2015 beneath Guatemala Street uncover?",
            options: [
                       "The Huei Tzompantli: the skull rack's platform and towers of skulls",
                       "Proof that no skull rack ever stood anywhere in the sacred precinct",
                       "The intact tomb of Moctezuma II, with his regalia and grave offerings",
                       "A hoard of Roman coins buried underneath the Templo Mayor's steps",
                     ],
            correctIndex: 0,
            explanation:
              "INAH's Programa de Arqueología Urbana (Barrera Rodríguez team) settled the existence question archaeologically: real, public, architectural, state-organized.",
            sourceLessonSlug: "meso-sacrifice",
          },
          {
            prompt: "Why does the course teach the Fifth Sun 'debt-payment' cosmology behind sacrifice?",
            options: [
                       "Because understanding a practice's internal logic is not endorsing it",
                       "To argue that the practice was justified by the cosmology behind it",
                       "Because the Fifth Sun cosmology is the course's own religious belief",
                       "To prove that the Mexica had no reasons of any kind for the practice",
                     ],
            correctIndex: 0,
            explanation:
              "Gods' self-sacrifice set the sun moving; humans repay in kind (nextlahualli). Explanation is a tool of accuracy, not apology, and the practice also did visible political work as imperial theater.",
            sourceLessonSlug: "meso-sacrifice",
          },
          {
            prompt: "The honest label for the 80,400-victims figure (1487 rededication) is…",
            options: [
                       "'Reported, not established': a chronicle number, logistically impossible",
                       "An eyewitness census, reliable exactly as the chroniclers stated it",
                       "An archaeological count taken directly from excavated skeletal remains",
                       "A number invented outright by twentieth-century historians of Mexico",
                     ],
            correctIndex: 0,
            explanation:
              "The same audit cuts against Tapia's 136,000-skull claim, unverifiable testimony from men whose case for conquest required Mexica tyranny. Real scale: substantial, and honestly uncertain.",
            sourceLessonSlug: "meso-sacrifice",
          },
          {
            prompt: "How does the course use the comparison with 16th-century European public killing?",
            options: [
                       "As context without exoneration: it dissolves the uniquely-other claim",
                       "To argue that the Spanish conquest was therefore entirely justified",
                       "To argue that human sacrifice was therefore morally acceptable then",
                       "To claim that Europe itself never once practiced public execution",
                     ],
            correctIndex: 0,
            explanation:
              "Heretic-burnings and the wheel were public, ritualized, state-sanctioned killing framed as cosmic necessity ('justice,' 'salvation'). The honest position holds all four clauses at once.",
            sourceLessonSlug: "meso-sacrifice",
          },
          {
            prompt: "What happened to Michael Harner's theory that sacrifice existed to supply dietary protein?",
            options: [
                       "It was dismantled in detail by Ortiz de Montellano's 1978 critique",
                       "It became the settled scholarly consensus during the early 1980s",
                       "It was confirmed by the Huei Tzompantli excavations begun in 2015",
                       "It was never evaluated by anyone and it still stands wholly untested",
                     ],
            correctIndex: 0,
            explanation:
              "A cautionary specimen of numbers-driven pseudo-explanation, exactly the genre the course's auditing method exists to catch.",
            sourceLessonSlug: "meso-sacrifice",
          },
          {
            prompt: "Sacrifice in Mesoamerica is best described chronologically as…",
            options: [
                       "ancient and widespread, back into the Preclassic; the Mexica scaled it up",
                       "invented by the Mexica in the 1400s and quite unknown before that time",
                       "invented by Spanish propagandists writing during the 1520s and 1530s",
                       "practiced only at Tenochtitlan and nowhere else in the whole region",
                     ],
            correctIndex: 0,
            explanation:
              "Sugiyama's FSP burials and centuries of Maya evidence predate the Mexica by a millennium. Neither an Aztec invention nor a Spanish slander, the course's whole point.",
            sourceLessonSlug: "meso-sacrifice",
          },
        ],
      },
    },
    // ────────────── SECTION 5 · BEYOND THE AZTEC AND THE MAYA ──────────────
    {
      slug: "meso-oaxaca-purepecha",
      title: "12 · Oaxaca and the West: Zapotec, Mixtec, Purépecha",
      section: "Section 5 · Beyond the Aztec and the Maya",
      body: `If a course teaches only the Aztec and the Maya, it repeats at continental scale the mistake of flattening "Africa" into Egypt. This lesson is the antidote, in three acts.

**The Zapotec and Monte Albán.** Around **500 BCE**, while Rome was expelling its kings, Zapotec builders leveled a mountaintop 400 meters above the Valley of Oaxaca and founded **Monte Albán**, one of the earliest true cities and state capitals in the Americas, which then dominated the region for over a millennium before its decline around 700-900 CE (Marcus & Flannery, 1996). Two things to carry from it. First, its most famous monuments teach a lesson in revisable readings: some 300 relief figures of contorted nude men were romantically dubbed **"Danzantes"**, dancers. The current consensus reads them as slain or sacrificed captives, some labeled with name-glyphs, a war memorial, not a ballet (Marcus & Flannery, 1996). The charming first reading was wrong; the evidence-driven one is grimmer and better supported. Second, Oaxaca is a serious contender in the "earliest writing" question: glyphs at Monte Albán and on Monument 3 at San José Mogote may predate everything else in the hemisphere, but the Mogote monument's dating is **contested** (it may have been moved and reused), so the honest verdict, as with the Cascajal Block, is *candidate, debated* (Marcus & Flannery, 1996; Houston, 2004).

**The Mixtec and the painted books.** In the Postclassic, the Mixtec lords of highland Oaxaca produced two things this course cannot skip. One: **codices**, screenfold deerskin books like the Codex Zouche-Nuttall, painted genealogical-historical narratives tracking real dynasties across centuries, including the 11th-century warlord **Lord Eight Deer Jaguar Claw**, whose career of conquests and dynastic murders can be followed scene by scene. Outside the Maya inscriptions, this is the closest thing the pre-Columbian Americas offer to narrative political history in Indigenous hands (Boone, 2000). Two: **goldwork**, when Alfonso Caso excavated **Tomb 7 at Monte Albán** in 1932, a Zapotec tomb reused by Mixtec nobles, its gold, turquoise, jade, and carved-bone treasure ranked among the richest burials ever excavated in the Americas (Caso, 1969). Mixtec goldsmiths' lost-wax casting was the standard the Aztecs themselves prized.

**The Purépecha: the empire that beat the Aztecs.** West, in Michoacán, sat the second-largest empire in Mesoamerica at contact, and almost nobody outside Mexico has heard of it. The **Purépecha** (called "Tarascans" in colonial sources), ruling from **Tzintzuntzan** ("place of hummingbirds") on Lake Pátzcuaro with its distinctive round-cornered *yácata* pyramids, are doubly anomalous. Their language is an **isolate**, unrelated to Nahuatl, to Maya, to anything else known in Mesoamerica, its closest proposed relatives (all contested) lying in South America. And they were Mesoamerica's serious **metallurgists**: copper and bronze not just for bells and ornaments but for axes, needles, and weapons, the technology, like metallurgy generally, apparently arriving via South American maritime contact and pushed furthest here (Pollard, 1993; Hosler, 1994). In the **1470s**, the Aztec ruler Axayacatl invaded with a large army; the Purépecha crushed it, colonial-era sources report catastrophic, possibly majority, Aztec losses (figures reported, not established), and the Aztecs never seriously tried again, fortifying a militarized frontier instead (Pollard, 1993). Empire met empire, and the famous one lost.

The takeaway is structural, not trivia: Mesoamerica was **polycentric to the end**, multiple states, languages (dozens, from at least ten unrelated families), scripts, technologies, and power centers, right up to 1519. Keep that in mind when the conquest narrative tries to compress everything into "Cortés versus the Aztecs."

:::reveal What makes the Purépecha doubly anomalous in Mesoamerica, and what happened when the Aztecs invaded? ||| Their language is an isolate, related to nothing else in Mesoamerica (contested proposals point to South America), and they were the region's leading metallurgists, working copper and bronze into tools and weapons, a technology apparently arrived via South American maritime contact. When Axayacatl invaded in the 1470s, the Purépecha crushed the Aztec army (sources report catastrophic losses, reported, not established), and the Aztecs switched permanently to a fortified frontier.

## Sources
- Marcus, J., & Flannery, K. V. (1996). *Zapotec civilization: How urban society evolved in Mexico's Oaxaca Valley*. Thames & Hudson. https://lccn.loc.gov/95060561
- Boone, E. H. (2000). *Stories in red and black: Pictorial histories of the Aztecs and Mixtecs*. University of Texas Press. https://lccn.loc.gov/99006214
- Caso, A. (1969). *El tesoro de Monte Albán*. Instituto Nacional de Antropología e Historia. https://lccn.loc.gov/79523831
- Pollard, H. P. (1993). *Taríacuri's legacy: The prehispanic Tarascan state*. University of Oklahoma Press. https://lccn.loc.gov/92037080
- Hosler, D. (1994). *The sounds and colors of power: The sacred metallurgical technology of ancient West Mexico*. MIT Press. https://lccn.loc.gov/94025455
- Houston, S. D. (Ed.). (2004). *The first writing: Script invention as history and process*. Cambridge University Press. https://lccn.loc.gov/2005296487`,
      recallContent: [
        {
          prompt: "What did the excavations beginning in 2015 on Guatemala Street find, and what question did they close?",
          answer:
            "The Huei Tzompantli: the great skull rack's platform and two towers of mortared human skulls, hundreds documented, men, women, and children (INAH, Barrera Rodríguez team). It closed the question of whether the Spanish descriptions of the rack were pure propaganda: the structure existed, in substance as described.",
        },
        {
          prompt: "State the Mexica rationale for sacrifice in their own terms, and why the course explains it.",
          answer:
            "Fifth Sun cosmology: the gods sacrificed themselves to set the sun moving; humans repay the debt (nextlahualli) in blood to keep the cosmos running, embedded with war-captive ideology and universal self-bloodletting. The course explains it because understanding a framework is not endorsing it: it is the difference between history and a horror movie.",
        },
        {
          prompt: "Why do BOTH the sensational and the denialist versions fail?",
          answer:
            "Sensational: relies on unverifiable five-/six-figure chronicle numbers (80,400; 136,000) and treats one practice as the whole civilization. Denialist ('Spanish slander'): refuted by archaeology, the tzompantli is excavated, and sacrifice is documented at Teotihuacan and among the Maya centuries before the Mexica. The honest account holds the real skull tower, the audited numbers, the internal logic, and the conquerors' own public-killing repertoire, all at once.",
        },
      ],
    },
    {
      slug: "meso-southern-frontier",
      title: "13 · Central America beyond Mexico: Cerén, the spheres, and the gold country",
      section: "Section 5 · Beyond the Aztec and the Maya",
      body: `Where does Mesoamerica *end*? Not at a border post. Southward through El Salvador, Honduras, and Nicaragua, the culture area fades in a **gradient**: Pacific Nicaragua and Costa Rica's Nicoya peninsula held peoples with strong Mesoamerican ties (including Nahua-related migrant groups like the Nicarao), while most of lower Central America belonged to a *different* civilizational sphere, the **Isthmo-Colombian world**, oriented as much toward Colombia as toward Mexico, dominated by speakers of Chibchan-family languages (Hoopes & Fonseca, 2003). "Not Mesoamerican" never meant "empty" or "backward"; it meant *different*, chiefdoms with their own art, cosmology, and technology. This lesson visits three stops along that gradient, because a course that stops at Mexico's southern border teaches a colonial map, not a pre-Columbian one.

**Stop one, still Maya: Joya de Cerén, El Salvador, the Pompeii of the Americas.** Around **600 CE**, the Loma Caldera volcano buried a small Maya farming village under meters of ash, fast enough to entomb everything, slow enough (the evidence suggests) for the villagers to flee: no bodies have been found. Discovered by a bulldozer crew in 1976 and excavated by Payson Sheets's team, Cerén preserves what royal tombs never show: **ordinary life**, wattle-and-daub houses, a sweat bath, a community building, kitchen gardens, ripening maize fields, even manioc beds, the best-preserved snapshot of Mesoamerican *commoner* daily life anywhere, inscribed by UNESCO in 1993 (Sheets, 2006; UNESCO, 1993). Every other lesson in this course is disproportionately about elites, because elites built in stone and wrote in books; Cerén is the corrective, the seventy-odd percent of every society this record usually renders invisible, living well: solid houses, diverse diets, painted gourds, more possessions than excavators expected.

**Stop two, beyond Mesoamerica: the stone spheres of the Diquís, Costa Rica.** In the Diquís delta of southern Costa Rica, pre-Columbian chiefdoms shaped **hundreds of stone spheres**, mostly granodiorite, from a few centimeters up to about 2.5 meters in diameter and weighing many tons, some approaching near-perfect sphericity, produced, per UNESCO's documentation, roughly between **500 and 1500 CE**, and placed in alignments and sets near chiefly settlements (UNESCO, 2014; Quilter & Hoopes, 2003). Their purpose is honestly **unknown**, rank markers, alignment sets, and plaza monuments are argued; most spheres were moved from their original contexts by banana-plantation clearing in the 1930s-40s, destroying the associations that might have settled it. Unknown purpose has made them, predictably, a pseudo-archaeology magnet (Atlantis, "impossible precision"); the sober record, local stone, known reduction techniques (pecking and grinding), excavated workshop contexts, a dated cultural sequence, needs no lost continents. UNESCO inscribed the sphere settlements as World Heritage in **2014**.

**Stop three: the gold country.** Lower Central America's signature technology was **gold**, lost-wax cast pendants of frogs, eagles, jaguars, and human-animal composites, in a style world shared from Costa Rica through Panama into Colombia. At **Sitio Conte** in Panama, burials of the Coclé culture (c. 700-1000 CE) held gold chest plaques and cuffs of stunning technical command (Quilter & Hoopes, 2003). When Columbus coasted this shore on his fourth voyage (1502), the first European approach to the region in this course, the gold-wearing chiefdoms of "Veragua" were what convinced Spain the isthmus was worth having. Note the direction of the metallurgy story you have now seen twice: goldworking spread **from South America northward**, reaching Mesoamerica late, a reminder that "advanced" technologies flow along whatever routes exist, in whatever direction, and that the Americas' deepest metalworking traditions were southern.

Why does an anchor course on Mesoamerica spend a lesson beyond Mesoamerica's edge? Because the **frontier teaches the concept**: culture areas are analytic tools with gradient boundaries, not nations with walls, and the peoples of the gradient (whose descendants, from the Ngäbe to the Guna, are very much present in Lesson 17) are not a footnote to Mexico. The follow-on track gives them a full course; consider this the trailhead.

:::reveal Why is Joya de Cerén 'the corrective' to the rest of the course's evidence base? ||| Because everything else disproportionately shows elites, they built in stone and wrote the books. Cerén, buried by ash c. 600 CE (villagers apparently fled; no bodies found), preserves ordinary farmers' actual lives: wattle-and-daub houses, a sweat bath, gardens, maize fields, manioc beds, painted gourds, commoners living better, with more possessions, than excavators expected. It is the best snapshot anywhere of the majority the record usually erases.

## Sources
- Sheets, P. (2006). *The Cerén site: An ancient village buried by volcanic ash in Central America* (2nd ed.). Cengage. https://lccn.loc.gov/2005923998
- UNESCO World Heritage Centre. (1993). *Joya de Cerén archaeological site* (World Heritage List No. 675). https://whc.unesco.org/en/list/675/
- UNESCO World Heritage Centre. (2014). *Precolumbian chiefdom settlements with stone spheres of the Diquís* (World Heritage List No. 1453). https://whc.unesco.org/en/list/1453/
- Hoopes, J. W., & Fonseca Z., O. M. (2003). Goldwork and Chibchan identity: Endogenous change and diffuse unity in the Isthmo-Colombian area. In J. Quilter & J. W. Hoopes (Eds.), *Gold and power in ancient Costa Rica, Panama, and Colombia* (pp. 49-89). Dumbarton Oaks. https://lccn.loc.gov/2004299009
- Quilter, J., & Hoopes, J. W. (Eds.). (2003). *Gold and power in ancient Costa Rica, Panama, and Colombia*. Dumbarton Oaks. https://lccn.loc.gov/2004299009`,
      recallContent: [
        {
          prompt: "What does the 'Danzantes' renaming teach about method?",
          answer:
            "The ~300 contorted figures at Monte Albán were romantically read as 'dancers'; the evidence-driven consensus now reads slain/sacrificed captives, some with name-glyphs, a war memorial. Readings must follow evidence even when the correction is grimmer than the charm.",
        },
        {
          prompt: "Why do the Mixtec codices matter beyond their beauty?",
          answer:
            "Screenfold books like the Zouche-Nuttall carry painted genealogical-historical narrative, real dynasties across centuries, e.g. Lord Eight Deer Jaguar Claw's 11th-century career, the closest thing to narrative political history in Indigenous hands outside the Maya inscriptions (Boone, 2000). Tomb 7 (Caso, 1932) shows the same civilization's goldwork at world level.",
        },
        {
          prompt: "State the structural takeaway of this lesson in one sentence.",
          answer:
            "Mesoamerica was polycentric to the end, multiple states, unrelated language families, scripts, technologies, and power centers (Zapotec, Mixtec, Purépecha, and more) right up to 1519, so any story compressed to 'Cortés versus the Aztecs' has already erased most of the map.",
        },
      ],
    },
    {
      slug: "meso-quiz-5",
      title: "Section 5 quiz · Beyond the Aztec and the Maya",
      section: "Section 5 · Beyond the Aztec and the Maya",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is Monte Albán?",
            options: [
                       "The Zapotec capital, founded c. 500 BCE atop a leveled mountaintop",
                       "An Aztec hilltop fortress built in the 1400s above the Oaxaca valley",
                       "A Maya port on the Caribbean coast, at its height around 1400 CE",
                       "A Spanish colonial silver-mining town first founded in the 1550s",
                     ],
            correctIndex: 0,
            explanation:
              "Marcus & Flannery (1996) trace urban state formation there from c. 500 BCE to its decline c. 700-900 CE.",
            sourceLessonSlug: "meso-oaxaca-purepecha",
          },
          {
            prompt: "The current consensus reading of Monte Albán's 'Danzantes' reliefs is…",
            options: [
                       "Slain or sacrificed captives, a number labeled with name-glyphs",
                       "Dancers at a seasonal festival, exactly as the modern name says",
                       "Portraits of Zapotec kings at leisure within their palace gardens",
                       "Gods of the underworld, arranged in their ritual descending order",
                     ],
            correctIndex: 0,
            explanation:
              "The charming first reading was wrong; the evidence-driven one is grimmer and better supported, the lesson's point about revisable readings.",
            sourceLessonSlug: "meso-oaxaca-purepecha",
          },
          {
            prompt: "What is the honest status of Oaxaca's 'earliest writing' candidates (San José Mogote Monument 3)?",
            options: [
                       "Candidate and debated: the monument's dating is contested (reuse)",
                       "Confirmed as the very earliest writing anywhere in the hemisphere",
                       "Proven to be Spanish-colonial graffiti cut into a much older stone",
                       "Never once seriously proposed as writing by any specialist at all",
                     ],
            correctIndex: 0,
            explanation:
              "Same label as the Cascajal Block: the 'first writing' race has multiple contested runners, and honesty requires saying so.",
            sourceLessonSlug: "meso-oaxaca-purepecha",
          },
          {
            prompt: "Lord Eight Deer Jaguar Claw is known from…",
            options: [
                       "Mixtec screenfold codices such as the Zouche-Nuttall, scene by scene",
                       "Carved Maya stelae at Tikal, all dated to the eleventh century CE",
                       "The Florentine Codex, compiled in Nahuatl by Sahagún and students",
                       "Aztec tribute rolls listing the towns he conquered for the empire",
                     ],
            correctIndex: 0,
            explanation:
              "The Mixtec painted books are the closest thing to narrative political history in Indigenous hands outside the Maya inscriptions (Boone, 2000).",
            sourceLessonSlug: "meso-oaxaca-purepecha",
          },
          {
            prompt: "What did Alfonso Caso find in Tomb 7 at Monte Albán (1932)?",
            options: [
                       "A Zapotec tomb reused by Mixtec nobles, holding gold, jade, and bone",
                       "The carved sarcophagus of Pakal, carried north from Palenque in 683",
                       "An empty chamber, robbed out in antiquity and left holding nothing",
                       "Two Olmec colossal heads, hauled inland from the Gulf Coast lowlands",
                     ],
            correctIndex: 0,
            explanation:
              "Mixtec lost-wax goldwork was the standard even the Aztecs prized.",
            sourceLessonSlug: "meso-oaxaca-purepecha",
          },
          {
            prompt: "Which pair of facts makes the Purépecha 'doubly anomalous' in Mesoamerica?",
            options: [
                       "A language isolate, and the region's most advanced metalworking",
                       "They had neither cities nor farming, living entirely by hunting",
                       "They spoke Nahuatl and rejected every technology from the outside",
                       "They were a Maya colony that wrote in the Maya hieroglyphic script",
                     ],
            correctIndex: 0,
            explanation:
              "Contested language proposals point to South America, as does the maritime route by which metallurgy apparently arrived (Pollard, 1993; Hosler, 1994).",
            sourceLessonSlug: "meso-oaxaca-purepecha",
          },
          {
            prompt: "What happened when Axayacatl's Aztec army invaded Michoacán in the 1470s?",
            options: [
                       "The Purépecha crushed it; the Aztecs switched to a fortified frontier",
                       "The Aztecs conquered the Purépecha easily and then annexed Michoacán",
                       "The two empires merged peacefully into one single tributary state",
                       "The battle never happened at all; it is a legend from colonial annals",
                     ],
            correctIndex: 0,
            explanation:
              "Empire met empire and the famous one lost, the clearest single proof that 1519 Mesoamerica was polycentric, not an Aztec monolith.",
            sourceLessonSlug: "meso-oaxaca-purepecha",
          },
          {
            prompt: "The Purépecha capital and its signature architecture were…",
            options: [
                       "Tzintzuntzan on Lake Pátzcuaro, with round-cornered yácata pyramids",
                       "Tulum on the Caribbean coast, with cliff-edge temples above the sea",
                       "Teotihuacan in the Basin of Mexico, with its great Pyramid of the Sun",
                       "Copán on the Motagua river, with its long carved hieroglyphic stairway",
                     ],
            correctIndex: 0,
            explanation:
              "The second-largest empire in Mesoamerica at contact, ruling from the Pátzcuaro basin (Pollard, 1993).",
            sourceLessonSlug: "meso-oaxaca-purepecha",
          },
          {
            prompt: "How does the course describe Mesoamerica's southern boundary?",
            options: [
                       "A gradient shading into the Chibchan-dominated Isthmo-Colombian sphere",
                       "A long fortified wall running along what is now the Guatemalan border",
                       "The line of the Panama Canal, cut through the isthmus back in 1914",
                       "An empty, uninhabited buffer zone several hundred kilometers wide",
                     ],
            correctIndex: 0,
            explanation:
              "Culture areas are analytic tools with gradient edges, not nations with walls, and 'not Mesoamerican' meant different, not backward (Hoopes & Fonseca, 2003).",
            sourceLessonSlug: "meso-southern-frontier",
          },
          {
            prompt: "What happened at Joya de Cerén around 600 CE?",
            options: [
                       "The Loma Caldera eruption buried a Maya farming village under ash",
                       "An earthquake destroyed a royal palace and its attached workshops",
                       "The village was sacked and then burned by an army from Teotihuacan",
                       "Nothing; the mounds are a natural volcanic formation, not a site",
                     ],
            correctIndex: 0,
            explanation:
              "Found by a bulldozer crew in 1976, excavated by Sheets's team, UNESCO-inscribed 1993: houses, sweat bath, gardens, maize fields, manioc beds, the Pompeii of the Americas.",
            sourceLessonSlug: "meso-southern-frontier",
          },
          {
            prompt: "Why is Cerén uniquely valuable to archaeology?",
            options: [
                       "It preserves commoner daily life, which monuments render invisible",
                       "It contains the single richest royal tomb known in all the Americas",
                       "It has the oldest writing yet recovered anywhere in the hemisphere",
                       "It proves that ordinary villages owned almost no possessions at all",
                     ],
            correctIndex: 0,
            explanation:
              "Everything else in the course is disproportionately elite evidence; Cerén is the corrective snapshot of the seventy-odd percent.",
            sourceLessonSlug: "meso-southern-frontier",
          },
          {
            prompt: "Which statement about the Diquís spheres is accurate?",
            options: [
                       "Hundreds of stone spheres, c. 500-1500 CE, purpose honestly unknown",
                       "The work of Atlantean refugees, as UNESCO's own citation documents",
                       "Natural concretions, not artifacts at all, formed by river weathering",
                       "Exactly twelve of them exist, and all are now held inside museums",
                     ],
            correctIndex: 0,
            explanation:
              "Local granodiorite, known pecking/grinding techniques, dated cultural sequence, but original contexts were largely wrecked by plantation clearing, so purpose readings (rank, alignments) stay arguments.",
            sourceLessonSlug: "meso-southern-frontier",
          },
          {
            prompt: "Why are the spheres a 'pseudo-archaeology magnet,' and what defuses the mystery-mongering?",
            options: [
                       "Unknown purpose invites Atlantis claims; the sober record defuses it",
                       "Because working archaeologists themselves endorse the Atlantis story",
                       "Because the stone they are carved from is extraterrestrial in origin",
                       "Nothing defuses it at all, because the mystery is genuinely total",
                     ],
            correctIndex: 0,
            explanation:
              "Same pattern as the pyramids: a genuine unknown (purpose) gets inflated into a fake unknown (makers), erasing documented Indigenous craftsmanship.",
            sourceLessonSlug: "meso-southern-frontier",
          },
          {
            prompt: "What characterizes the Isthmo-Colombian 'gold country'?",
            options: [
                       "Lost-wax cast gold pendants in a shared Costa Rica-Colombia style",
                       "Iron smelting and pattern-welded steel swords traded up the coast",
                       "A total absence of metalwork of any kind before the Spanish came",
                       "Silver coinage minted there for long-distance trade well before 1492",
                     ],
            correctIndex: 0,
            explanation:
              "Columbus met gold-wearing chiefdoms on this coast in 1502, the wealth that convinced Spain the isthmus mattered (Quilter & Hoopes, 2003).",
            sourceLessonSlug: "meso-southern-frontier",
          },
          {
            prompt: "The direction of metallurgy's spread in the Americas was…",
            options: [
                       "from South America northward, reaching West Mexico c. 600-800 CE",
                       "from central Mexico southward, reaching coastal Peru c. 200 BCE",
                       "from Europe westward, arriving well before Columbus's first crossing",
                       "invented independently in Yucatán first, then spreading southward",
                     ],
            correctIndex: 0,
            explanation:
              "Technology flows along existing routes in whatever direction, the hemisphere's deepest metalworking traditions were southern (Hosler, 1994).",
            sourceLessonSlug: "meso-southern-frontier",
          },
        ],
      },
    },
    // ────────────── SECTION 6 · THE CONQUEST AND ITS MYTHS ──────────────
    {
      slug: "meso-conquest-myths",
      title: "14 · The conquest without the myths",
      section: "Section 6 · The conquest and the catastrophe",
      body: `The fall of Tenochtitlan in 1521 is the most mythologized event in this course, and the historian Matthew Restall gave the myths a checklist. His *Seven Myths of the Spanish Conquest* (2003) is the spine of this lesson: not a defense of the conquest, it was a catastrophe, but an insistence on getting *how* it happened right, because the popular version flatters the Spanish and erases the Indigenous majority who were, in fact, most of the people on the field.

**Myth: a few hundred Spaniards conquered an empire of millions.** The image of Cortés's ~500 men toppling the Aztec state is the founding distortion, and it survives only by deleting the tens of thousands of Indigenous allies without whom nothing happened. **Tlaxcala**, never conquered, and nursing generations of Triple-Alliance enmity (Lesson 10), allied with Cortés and supplied the armies that actually did the fighting; Texcocan and other defectors joined as the Alliance visibly weakened. Restall's blunt reframing: this was less a Spanish conquest than a **civil war among Mesoamerican powers**, in which a small Spanish contingent was one faction's catalytic ally (Restall, 2003; Townsend, 2019). The Indigenous accounts and the *Lienzo de Tlaxcala* show Tlaxcalan warriors everywhere in the campaign, a fact the Tlaxcalans spent the colonial centuries reminding the crown of, seeking the privileges owed allies rather than the treatment given the conquered.

**Myth: superior technology (steel, horses, guns) was decisive.** Steel swords, crossbows, a few cannon, and horses gave real tactical advantages in open engagements, and the psychological effect of cavalry was genuine at first. But guns were few and slow; the decisive weapons were **alliances, siege, and disease** (below), not a technology gap. The Spanish took Tenochtitlan by besieging an island city, cutting the causeway water supply, building brigantines to control the lake, and starving it over months with a largely Indigenous army, not by out-shooting it (Restall, 2003; Townsend, 2019).

**Myth: Moctezuma mistook Cortés for the returning god Quetzalcoatl, and so the Aztecs surrendered psychologically.** This beloved story has weak roots. The earliest sources are ambiguous; the full "returning god" narrative crystallizes in later colonial texts written under Spanish influence, including Indigenous authors accounting, in hindsight, for a defeat, and Restall argues it served both Spanish self-flattery and a post-hoc Nahua theodicy. Treat the Quetzalcoatl-omen story as **contested at best, probably a colonial-era elaboration**, not as the reason an empire fell (Restall, 2003; Townsend, 2019).

**Myth: the Indigenous side was passive, doomed, and quickly finished.** The opposite is true, and it is the point this course most wants you to keep. The Mexica fought a brutal house-to-house defense of Tenochtitlan; after the **Noche Triste** (June 1520) they *drove the Spanish out* of the city with heavy losses; the final siege took roughly three months of fighting into August 1521, and the last Mexica ruler, **Cuauhtémoc**, led resistance to the end. And 1521 did not end Indigenous America, it began a long, uneven, still-unfinished story of survival and adaptation that Lesson 17 carries to the present.

The single fact that best breaks the "1521 = the end" reflex is this: **the last independent Maya kingdom did not fall until 1697.** The Itza Maya capital of **Nojpetén** (Tayasal), on an island in Lake Petén Itzá in Guatemala, held out against the Spanish for **176 years** after Tenochtitlan fell, through failed missions and a failed early Cortés visit (1525), until a Spanish assault finally took it on March 13, 1697 (Jones, 1998). Nearly the entire span we call "the colonial period" ran with a sovereign Maya state on the map. "The conquest" was not an event in 1521; it was a scattered, resisted, centuries-long process, and in one corner it lasted almost to the eighteenth century.

:::reveal Restall reframes 1521 as 'less a Spanish conquest than a civil war among Mesoamerican powers.' What is the evidence, and what myth does it break? ||| Tens of thousands of Indigenous allies, above all never-conquered, Alliance-hating Tlaxcala, plus Texcocan and other defectors, supplied the armies that did the fighting and the siege of Tenochtitlan; the Lienzo de Tlaxcala and Nahua accounts show them everywhere. It breaks the 'few hundred Spaniards conquered millions' myth: the ~500 Spaniards were one faction's catalytic ally, not lone conquerors (Restall, 2003; Townsend, 2019).

## Sources
- Restall, M. (2003). *Seven myths of the Spanish conquest*. Oxford University Press. https://doi.org/10.1093/oso/9780195160772.001.0001
- Townsend, C. (2019). *Fifth sun: A new history of the Aztecs*. Oxford University Press. https://lccn.loc.gov/2019003623
- Jones, G. D. (1998). *The conquest of the last Maya kingdom*. Stanford University Press. https://lccn.loc.gov/98016556
- Lockhart, J. (Ed. & Trans.). (1993). *We people here: Nahuatl accounts of the conquest of Mexico*. University of California Press. https://lccn.loc.gov/91033504`,
      recallContent: [
        {
          prompt: "Describe Mesoamerica's southern boundary the way the course does.",
          answer:
            "A gradient, not a wall: Pacific Nicaragua/Nicoya held Mesoamerican-tied peoples (e.g., the Nahua-related Nicarao), while most of lower Central America belonged to the Isthmo-Colombian sphere, Chibchan-speaking chiefdoms oriented toward Colombia. 'Not Mesoamerican' meant different, not empty or backward.",
        },
        {
          prompt: "Give the honest account of the Diquís spheres.",
          answer:
            "Hundreds of stone spheres (mostly granodiorite, up to ~2.5 m, many tons), made roughly 500-1500 CE per UNESCO, placed near chiefly settlements; purpose unknown, rank/alignment/plaza-monument readings argued, original contexts largely destroyed by 1930s-40s plantation clearing. Local stone + known pecking/grinding techniques: no Atlantis required. UNESCO World Heritage 2014.",
        },
        {
          prompt: "Which way did metallurgy flow in the Americas, and why does the course keep pointing at it?",
          answer:
            "From South America northward, through the Isthmo-Colombian gold country (Sitio Conte's Coclé burials, c. 700-1000 CE) and by sea to West Mexico, where the Purépecha pushed bronze furthest. It reminds you that technology flows along existing routes in any direction, and the hemisphere's deepest metalworking was southern.",
        },
      ],
    },
    {
      slug: "meso-demographic-catastrophe",
      title: "15 · The catastrophe: disease, numbers, and how to count honestly",
      section: "Section 6 · The conquest and the catastrophe",
      body: `The largest thing that happened in the Americas after 1492 is a demographic collapse so severe it may have altered the planet's climate, and it is also the place where bad history does the most damage in both directions. This lesson teaches the collapse as what it is: **enormous, real, and quantitatively uncertain**, a range with named disputes, never a single confident number.

**The mechanism was mostly microbial, and that matters morally.** Indigenous Americans had been separated from Afro-Eurasian populations for millennia and carried no immunity to smallpox, measles, influenza, typhus, and the other crowd diseases that had co-evolved with Old World cities and livestock. Smallpox reached central Mexico in **1520**, during the war, devastating Tenochtitlan before the final siege, and waves of epidemics rolled across the hemisphere for the following century, including catastrophic Mexican epidemics in 1545 and 1576 that contemporaries called *cocoliztli* (whose exact pathogen is still debated; a 2018 aDNA study implicated a *Salmonella* enterica strain in one 1545 cemetery) (Cook, 1998; Vågene et al., 2018). Because the great dying was largely biological, some tellings slide toward "it was nobody's fault, just germs." That is the trap. Disease was the primary *killer*, but it did its work **inside a system of conquest**, war, enslavement, forced labor in mines and fields, the *encomienda*, displacement, famine, and social collapse, that shattered the societies' capacity to feed, shelter, and reproduce themselves, and made each epidemic deadlier than biology alone would have. Historians call this a *synergy*; the honest sentence is that **germs were the mechanism and colonialism was the context**, and neither alone explains the scale (Cook, 1998; Restall, 2003).

**Now the numbers, and why you will not get one.** How many people lived in the Americas, and in central Mexico specifically, in 1519? The honest answer is a **contested range**, because the pre-contact figure has to be reconstructed from post-collapse tribute records, colonial estimates, carrying-capacity models, and archaeology, each with large error bars and different assumptions.

- For **central Mexico**, the famous high-end reconstruction is the "Berkeley School" of Sherburne Cook and Woodrow Borah, whose tribute-based modeling reached roughly **25 million** on the eve of contact, with some estimates in that tradition running toward 30 million. Skeptics (e.g., the tradition associated with Ángel Rosenblat) argued for figures several times smaller, on the order of a few million. Widely used modern textbook ranges for central Mexico land around **15 to 30 million**, precisely because the discipline has not resolved Cook-Borah versus their critics (Cook, 1998; Denevan, 1992).
- For the **whole hemisphere**, published estimates range from about 40 million to over 100 million; a much-cited synthesis edited by William Denevan settled near **54 million** as a middle figure, while stressing the uncertainty (Denevan, 1992).
- The **collapse ratio** is where sources converge even as absolute numbers stay contested: across the sixteenth century, the Indigenous population of central Mexico fell by roughly **90 percent**, the high reconstructions describe a fall from ~25 million toward perhaps **1 to 2 million** within about a century (Cook, 1998). Whatever the starting number, the proportion lost is among the worst demographic catastrophes in recorded human history.

So the disciplined way to say it, the way this course requires, is: *"Central Mexico's population on the eve of contact is estimated in a contested range, commonly cited around 15 to 30 million, and fell by roughly 90 percent, to something like 1 to 2 million, over the following century; the high reconstructions are associated with Cook and Borah, the lower with their critics, and the debate turns on how you model tribute and carrying capacity."* That sentence is longer than "twenty-five million died." It is also **true**, and the extra length is doing honest work, it tells you where the number comes from and how firm it is.

Two guardrails, because this number gets abused from both ends. **Minimizers** cite the low estimates to shrink the catastrophe toward deniability, the reply is that even the low reconstructions describe a ~90% collapse, a civilizational cataclysm on any accounting. **Maximizers** state the highest single figure as fact to sharpen an indictment, the reply is that inventing false precision hands critics an easy target and, per this course's first rule, treats the (already staggering) real record as insufficient. The catastrophe does not need inflating and cannot be honestly deflated. The scale is so large that the "great dying" is a leading candidate for the drop in atmospheric CO2 recorded around 1610, as tens of millions of hectares of Indigenous farmland reforested after the people who worked it were gone, a proposed marker for the start of the Anthropocene (Koch et al., 2019). Whatever one makes of that geological argument, sit with what it implies: the loss was large enough to be a candidate signal in the composition of the air.

:::reveal How does the course require you to state the central-Mexico population collapse, and why is that longer sentence better than 'twenty-five million died'? ||| As a contested range with attribution: central Mexico on the eve of contact is commonly cited around 15-30 million (high reconstructions from Cook & Borah; lower from critics like Rosenblat), falling ~90%, to roughly 1-2 million, within about a century, the dispute turning on how tribute and carrying capacity are modeled. It is better because it is true and it shows where the number comes from and how firm it is; a single confident figure hides the uncertainty and, per the course's first rule, invites easy debunking either way.

## Sources
- Cook, N. D. (1998). *Born to die: Disease and New World conquest, 1492-1650*. Cambridge University Press. https://lccn.loc.gov/97025064
- Denevan, W. M. (Ed.). (1992). *The native population of the Americas in 1492* (2nd ed.). University of Wisconsin Press. https://lccn.loc.gov/91040042
- Vågene, Å. J., Herbig, A., Campana, M. G., Robles García, N. M., Warinner, C., Sabin, S., Spyrou, M. A., Andrades Valtueña, A., & 9 others. (2018). Salmonella enterica genomes from victims of a major sixteenth-century epidemic in Mexico. *Nature Ecology & Evolution, 2*, 520-528. https://doi.org/10.1038/s41559-017-0446-6
- Koch, A., Brierley, C., Maslin, M. M., & Lewis, S. L. (2019). Earth system impacts of the European arrival and Great Dying in the Americas after 1492. *Quaternary Science Reviews, 207*, 13-36. https://doi.org/10.1016/j.quascirev.2018.12.004
- Restall, M. (2003). *Seven myths of the Spanish conquest*. Oxford University Press. https://doi.org/10.1093/oso/9780195160772.001.0001`,
      recallContent: [
        {
          prompt: "List the four conquest myths this lesson dismantles (per Restall).",
          answer:
            "(1) A few hundred Spaniards conquered millions, no, tens of thousands of Indigenous allies (esp. Tlaxcala) did the fighting; it was closer to a Mesoamerican civil war. (2) Superior technology was decisive, no, alliances, siege, and disease were. (3) Moctezuma mistook Cortés for Quetzalcoatl, contested, probably a colonial-era elaboration. (4) The Indigenous side was passive and quickly finished, no: Noche Triste, a three-month siege, Cuauhtémoc's resistance, and survival long after.",
        },
        {
          prompt: "What actually took Tenochtitlan, and over what kind of timeframe?",
          answer:
            "A months-long siege of an island city by a largely Indigenous army: cutting the aqueduct/causeway supply, building brigantines to control the lake, and starving it, final siege roughly three months into August 1521. Not out-shooting it with steel and guns.",
        },
        {
          prompt: "What is Nojpetén and why does it break '1521 = the end'?",
          answer:
            "The Itza Maya capital (Tayasal) on an island in Lake Petén Itzá, the last independent Maya kingdom, which held out 176 years after Tenochtitlan until a Spanish assault took it on March 13, 1697 (Jones, 1998). Nearly the whole colonial period ran with a sovereign Maya state on the map; 'the conquest' was a centuries-long, resisted process.",
        },
      ],
    },
    {
      slug: "meso-quiz-6",
      title: "Section 6 quiz · The conquest and the catastrophe",
      section: "Section 6 · The conquest and the catastrophe",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is Restall's Seven Myths of the Spanish Conquest, as this course uses it?",
            options: [
                       "A checklist correcting how the conquest is popularly misremembered",
                       "A defense arguing that the conquest was both justified and benign",
                       "A historical novel dramatizing Cortés's march upon Tenochtitlan",
                       "A denial that any conquest of Mesoamerica ever occurred at all",
                     ],
            correctIndex: 0,
            explanation:
              "Restall (2003) corrects flattering distortions while affirming the conquest was a catastrophe, accuracy in service of, not against, the gravity of events.",
            sourceLessonSlug: "meso-conquest-myths",
          },
          {
            prompt: "Why is 'a few hundred Spaniards conquered an empire of millions' a myth?",
            options: [
                       "It deletes tens of thousands of Indigenous allies, above all Tlaxcala",
                       "Because there were in fact many thousands of Spanish troops present",
                       "Because no Spaniards at all were present at the siege of the city",
                       "Because the Aztecs willingly surrendered without any fighting at all",
                     ],
            correctIndex: 0,
            explanation:
              "The Lienzo de Tlaxcala and Nahua accounts show allied warriors everywhere; never-conquered, Alliance-hating Tlaxcala did the fighting (Restall, 2003; Townsend, 2019).",
            sourceLessonSlug: "meso-conquest-myths",
          },
          {
            prompt: "What actually took Tenochtitlan?",
            options: [
                       "A months-long siege by a largely Indigenous army, starving the city",
                       "One single cavalry charge that scattered the defenders within an hour",
                       "Cannon fire that leveled the entire city in the course of a single day",
                       "A peaceful negotiated handover, with no fighting at all on either side",
                     ],
            correctIndex: 0,
            explanation:
              "Steel and horses gave tactical edges, but alliances, siege, and disease were decisive, not a technology gap (Restall, 2003).",
            sourceLessonSlug: "meso-conquest-myths",
          },
          {
            prompt: "How should the 'Moctezuma mistook Cortés for Quetzalcoatl' story be treated?",
            options: [
                       "Contested at best, probably a colonial-era elaboration after the fact",
                       "As a well-documented eyewitness fact, reported alike by both sides",
                       "As proven false by archaeology alone, without a single written source",
                       "As irrelevant, since no source of any kind has ever actually claimed it",
                     ],
            correctIndex: 0,
            explanation:
              "The full returning-god narrative crystallizes in later sources written under Spanish influence (Restall, 2003; Townsend, 2019). Contested, probably post-hoc.",
            sourceLessonSlug: "meso-conquest-myths",
          },
          {
            prompt: "Which event shows the Mexica were NOT passive victims?",
            options: [
                       "The Noche Triste of June 1520, when they drove the Spanish out",
                       "Their immediate surrender to Cortés on the day of first contact",
                       "Their conversion to Christianity before any fighting took place",
                       "Their abandonment of Tenochtitlan without a fight in June 1520",
                     ],
            correctIndex: 0,
            explanation:
              "House-to-house defense, a Spanish expulsion, and resistance to the last ruler, the course's most-insisted point against the passivity myth.",
            sourceLessonSlug: "meso-conquest-myths",
          },
          {
            prompt: "What was Nojpetén (Tayasal), and when did it fall?",
            options: [
                       "The Itza Maya island capital, the last Maya kingdom, fell in 1697",
                       "The Aztec capital, which fell to a Spanish siege in August 1521",
                       "A Spanish fort in the Petén, built and garrisoned around 1600 CE",
                       "A Purépecha lake city that was never taken by any outside force",
                     ],
            correctIndex: 0,
            explanation:
              "Jones (1998): nearly the whole colonial period ran with a sovereign Maya state on the map, 'the conquest' was a centuries-long, resisted process, not a 1521 event.",
            sourceLessonSlug: "meso-conquest-myths",
          },
          {
            prompt: "Why does the Nojpetén date (1697) matter for how students think about 'the conquest'?",
            options: [
                       "It breaks the reflex that 1521 marked the end of Indigenous America",
                       "It proves that the Maya were all conquered before the Aztecs were",
                       "It shows that the Spanish never once reached Guatemala or the Petén",
                       "It has no significance beyond trivia about a remote jungle frontier",
                     ],
            correctIndex: 0,
            explanation:
              "The last independent Maya kingdom outlived Tenochtitlan by 176 years, a single date that dismantles the tidy end-of-history story.",
            sourceLessonSlug: "meso-conquest-myths",
          },
          {
            prompt: "Why did Old World diseases kill Indigenous Americans on such a scale?",
            options: [
                       "Millennia of separation left no immunity to Old World crowd diseases",
                       "Because Indigenous people had constitutionally weaker immune systems",
                       "Because the diseases were deliberately engineered by Spanish physicians",
                       "Because the Americas had no infectious diseases of any kind before 1492",
                     ],
            correctIndex: 0,
            explanation:
              "Smallpox reached central Mexico in 1520, devastating Tenochtitlan before the final siege; epidemic waves rolled on for a century (Cook, 1998).",
            sourceLessonSlug: "meso-demographic-catastrophe",
          },
          {
            prompt: "What is the 'germs were the mechanism, colonialism was the context' point?",
            options: [
                       "Disease was the primary killer, but it worked inside war and coercion",
                       "That colonialism, and not disease at all, killed almost every person",
                       "That it was nobody's fault, since it was just germs doing the work",
                       "That the epidemics were a myth invented long after the events themselves",
                     ],
            correctIndex: 0,
            explanation:
              "The synergy is the honest account (Cook, 1998; Restall, 2003), it resists both 'blameless germs' and 'germs were irrelevant.'",
            sourceLessonSlug: "meso-demographic-catastrophe",
          },
          {
            prompt: "How does the course state central Mexico's pre-contact population?",
            options: [
                       "A contested range commonly cited at 15-30 million, never one number",
                       "Exactly 25 million, a figure settled by demographers decades ago",
                       "Exactly 1 million, a figure settled directly by colonial tax rolls",
                       "Unknowable even to the nearest order of magnitude, so never given",
                     ],
            correctIndex: 0,
            explanation:
              "The pre-contact figure is reconstructed from tribute records, colonial estimates, and models with large error bars; the discipline has not resolved Cook-Borah vs. critics (Cook, 1998; Denevan, 1992).",
            sourceLessonSlug: "meso-demographic-catastrophe",
          },
          {
            prompt: "On what do sources converge, even while absolute numbers stay contested?",
            options: [
                       "The collapse ratio: roughly a 90% fall over the sixteenth century",
                       "The exact starting population of central Mexico just before contact",
                       "The precise pathogen responsible for every single recorded epidemic",
                       "That the Indigenous population actually grew across the century",
                     ],
            correctIndex: 0,
            explanation:
              "Whatever the starting number, the ~90% proportion is among the worst demographic catastrophes in recorded history.",
            sourceLessonSlug: "meso-demographic-catastrophe",
          },
          {
            prompt: "How does the course answer someone who cites the LOWEST population estimates to minimize the catastrophe?",
            options: [
                       "Even the lowest reconstructions still describe a roughly 90% collapse",
                       "By agreeing that the whole catastrophe was a comparatively minor one",
                       "By switching instead to the highest figure that anyone has proposed",
                       "By refusing to discuss any population numbers with anyone at all",
                     ],
            correctIndex: 0,
            explanation:
              "Minimizers and maximizers both distort; the catastrophe can neither be honestly deflated nor needs inflating.",
            sourceLessonSlug: "meso-demographic-catastrophe",
          },
          {
            prompt: "How does the course answer a MAXIMIZER who states the single highest death toll as established fact?",
            options: [
                       "False precision hands critics a target and slights the real record",
                       "By agreeing that the very highest figure has now been proven true",
                       "By denying that any excess deaths occurred in the sixteenth century",
                       "By citing the very lowest estimate available instead of that one",
                     ],
            correctIndex: 0,
            explanation:
              "Same discipline as Mansa Musa's 'richest ever' or the 80,400 sacrifices: refuse false precision; teach the range and the dispute.",
            sourceLessonSlug: "meso-demographic-catastrophe",
          },
          {
            prompt: "What was cocoliztli, per the lesson?",
            options: [
                       "The name contemporaries gave to the 1545 and 1576 Mexican epidemics",
                       "A Nahuatl word for smallpox alone, now identified with full certainty",
                       "An Aztec festival of the dead, held at the close of every solar year",
                       "A Spanish head tax levied on Indigenous towns throughout the 1540s",
                     ],
            correctIndex: 0,
            explanation:
              "Vågene et al. (2018) found Salmonella enterica in Oaxaca victims, evidence, honestly hedged, that not every great epidemic was a simple Old World import.",
            sourceLessonSlug: "meso-demographic-catastrophe",
          },
          {
            prompt: "What is the 'Great Dying → 1610 CO2 drop' argument, and how does the course frame it?",
            options: [
                       "A proposed link between farmland reforestation and a 1610 CO2 dip",
                       "A proven fact that has ended all debate over the total death toll",
                       "A claim that the epidemics were themselves caused by climate change",
                       "A debunked hoax with no scientific basis of any kind standing behind it",
                     ],
            correctIndex: 0,
            explanation:
              "Koch et al. (2019) proposed it as an Anthropocene marker. The course uses it to convey scale, the loss was large enough to be a candidate signal in the air's composition, while flagging it as an argument.",
            sourceLessonSlug: "meso-demographic-catastrophe",
          },
        ],
      },
    },
    // ────────────── SECTION 7 · HOW WE KNOW — AND WHO IS STILL HERE ──────────────
    {
      slug: "meso-how-we-know",
      title: "16 · How we know: burned books, a cracked code, and lasers",
      section: "Section 7 · How we know, and who is still here",
      body: `This is the lesson the whole course has been saving up for, because its skill transfers to every subject you will ever study: **how does anyone know any of this?** For Mesoamerica the answer is a three-act story, a destruction, a decipherment, and an instrument, and each act changes what "we know" means.

**Act one: the burning.** Mesoamerican civilizations wrote **books**, screenfold codices of bark paper or deerskin, painted on both sides. Then came the friars. On **July 12, 1562**, at **Maní** in Yucatán, the Franciscan **Diego de Landa** held an *auto-da-fé*, an inquisitorial ceremony, accompanied by interrogations and torture of Maya "idolaters", at which Maya codices and thousands of ritual objects were destroyed. Landa's own account is the indictment: he wrote that the books "contained nothing in which there was not superstition and falsehoods of the devil," so "we burned them all, which [the Maya] regretted to an amazing degree, and which caused them much affliction" (Landa, c. 1566/1941). Between Maní, other destructions, and the tropics' own appetite for bark paper, the result is one of the great information catastrophes in human history: of the entire literary output of Maya civilization, exactly **four** pre-conquest codices survive today, the **Dresden**, **Madrid**, and **Paris** codices (named, tellingly, for the European cities holding them) and the **Maya Codex of Mexico** (formerly "Grolier"), whose authenticity was long doubted until INAH's technical review authenticated it in **2018** (Coe & Houston, 2022; INAH, 2018). Four books, from a civilization of scribes. When Lesson 7 told you the Dresden Codex tracks Venus for centuries, understand: that is a glimpse through a keyhole of a burned library.

And here is the story's brutal irony: **the arsonist accidentally saved the key.** Landa's manuscript *Relación de las cosas de Yucatán*, written partly in self-defense after his methods got him shipped back to Spain, includes his attempt to record the Maya "alphabet": he asked literate Maya informants to write the letters A, B, C… and transcribed the signs they produced. What he recorded was garbled, the script has no alphabet, but the garble preserved real sign-sound pairings, because his informants had written the *syllables* of the Spanish letter-names. Landa's error became the closest thing Maya studies has to a Rosetta Stone (Coe, 1992).

**Act two: the decipherment, a scientific drama in three generations.** By the early twentieth century scholars could read Maya *numbers and dates* (the calendar yielded to pattern analysis), and a consensus hardened, enforced by the field's dominant figure, the Englishman **J. Eric S. Thompson**, that that was all there was: the glyphs were mystical calendar-symbols, not phonetic writing, and the texts contained no history. Two outsiders broke it. In **1952**, **Yuri Knorozov**, a Soviet linguist working in Leningrad, who never excavated a Maya site, published the syllabic principle: using Landa's "alphabet" as sound evidence, he showed glyphs spell words syllable by syllable, reading words like "turkey" and "dog" where the codex pictures showed exactly those animals. Thompson ridiculed him for decades, and the Cold War made "the Russian is right" a hard sentence to publish. Then in **1960 Tatiana Proskouriakoff**, a Russian-born American architect-turned-epigrapher, showed from date patterns at Piedras Negras that the monuments record the *births, accessions, wars, and deaths of human rulers*: the texts were **history**. After Thompson's death in 1975, the dam broke: workshops around Linda Schele, Floyd Lounsbury, Peter Mathews, and later David Stuart read the dynasties of Palenque and beyond, and today the large majority of Maya texts can be read, the recovered voice this course has been quoting since Section 3. Michael Coe's *Breaking the Maya Code* (1992) tells the whole story, including the field's embarrassment: the truth was delayed a generation substantially because the discipline's most powerful man said no (Coe, 1992). Method lesson: **authority is not evidence, and fields self-correct on evidence, eventually.**

**Act three: the instrument.** You have met it twice already. Airborne **LiDAR**, laser pulses that map the ground surface beneath forest canopy, found Aguada Fénix (Lesson 3), and in the **2018 PACUNAM survey** revealed about **61,480 structures** in 2,144 km² of the Petén, with the terraces, causeways, and fortifications that rewrote Maya demography (Canuto et al., 2018). Decipherment made the texts speak; LiDAR made the *landscape* speak. Different instrument, same epistemological event: evidence that was always there became readable, and the field rebuilt its picture around it.

Put the three acts together and you have this course's transferable method for any historical claim: ask **what kinds of evidence** stand behind it (their texts? hostile witnesses? excavation? instruments?), **who is asserting it** and with what motive, and **what would change it**. Knowledge built that way bends when new evidence lands, Landa's paradox, Knorozov's vindication, LiDAR's census, and that bending is not fragility. It is exactly what being right in the long run looks like.

:::reveal What is Landa's paradox, and what did each half of it cost or give? ||| The man who burned the Maya libraries also preserved the decipherment key. His 1562 Maní auto-da-fé (plus other destructions and the climate) left only ~4 pre-conquest Maya codices on Earth, an information catastrophe. But his Relación's garbled 'alphabet', Maya informants writing syllable signs for Spanish letter-names, preserved real sign-sound pairings, which Knorozov used in 1952 as the Rosetta-like evidence that cracked the script.

## Sources
- Landa, D. de. (1941). *Landa's Relación de las cosas de Yucatán* (A. M. Tozzer, Trans. & Ed.). Peabody Museum, Harvard University. https://lccn.loc.gov/41015387 (Original manuscript c. 1566)
- Coe, M. D. (1992). *Breaking the Maya code*. Thames & Hudson. https://lccn.loc.gov/91065312
- Coe, M. D., & Houston, S. D. (2022). *The Maya* (10th ed.). Thames & Hudson. https://lccn.loc.gov/2022931889
- Instituto Nacional de Antropología e Historia. (2018). *El Códice Maya de México, auténtico y el más antiguo* [announcement of the technical authentication]. INAH. https://www.inah.gob.mx/boletines/7497-inah-ratifica-al-codice-maya-de-mexico-antes-llamado-grolier-como-el-manuscrito-autentico-mas-antiguo-de-america
- Canuto, M. A., et al. (2018). Ancient lowland Maya complexity as revealed by airborne laser scanning of northern Guatemala. *Science, 361*(6409), eaau0137. https://doi.org/10.1126/science.aau0137
- Proskouriakoff, T. (1960). Historical implications of a pattern of dates at Piedras Negras, Guatemala. *American Antiquity, 25*(4), 454-475. https://doi.org/10.2307/276633`,
      recallContent: [
        {
          prompt: "State the mechanism-vs-context distinction for the demographic collapse.",
          answer:
            "Germs were the mechanism, colonialism was the context. Old World crowd diseases (smallpox from 1520, measles, cocoliztli epidemics of 1545/1576) killed populations with no immunity, but did so inside a system of war, enslavement, forced labor, encomienda, displacement, and famine that shattered societies' capacity to survive and made each epidemic deadlier. Neither alone explains the scale.",
        },
        {
          prompt: "Give the central-Mexico numbers as a range with attribution, plus the collapse ratio.",
          answer:
            "Commonly cited ~15-30 million on the eve of contact, high end from Cook & Borah (the Berkeley School, ~25M and up), lower from critics (e.g., Rosenblat, a few million), falling by roughly 90% to about 1-2 million within a century. The proportion is agreed even where absolute numbers are contested.",
        },
        {
          prompt: "How does the course answer both minimizers and maximizers of the death toll?",
          answer:
            "Minimizers (cite low estimates toward deniability): even the low reconstructions show a ~90% collapse, a cataclysm on any accounting. Maximizers (state the highest figure as fact): false precision hands critics an easy target and treats the real, staggering record as insufficient. The catastrophe can neither be honestly deflated nor needs inflating.",
        },
      ],
    },
    {
      slug: "meso-still-here",
      title: "17 · They are still here",
      section: "Section 7 · How we know, and who is still here",
      body: `Every previous lesson has been past tense. This one is not, because the single most damaging myth in this entire subject, more than aliens, more than 2012, is the quiet assumption baked into the phrase "the ancient Maya": **that the peoples of Mesoamerica are gone.** They are not gone. Say the numbers out loud.

Roughly **seven million Maya** live today, in Guatemala, southern Mexico, Belize, Honduras, and El Salvador, and in diaspora communities across North America. Around **six million people speak one of the roughly thirty Mayan languages**, K'iche', Q'eqchi', Kaqchikel, Mam, Yucatec Maya, Tzotzil, Tzeltal, and more, as their daily language (Coe & Houston, 2022). In Guatemala, Maya people are over **40 percent of the national population** by the 2018 census, by some measures a near-majority. In Mexico, the 2020 INEGI census counted about **1.65 million speakers of Nahuatl**, the language of this course's Section 4, alive in hundreds of communities, among more than **seven million** speakers of Indigenous languages nationally (INEGI, 2020). In the highlands of Guatemala, Maya **daykeepers still keep the 260-day count**, the tzolk'in from Lesson 7, in continuous use for well over two millennia (B. Tedlock, 1992). The chinampas of Xochimilco still grow food. This is not heritage in a case; it is Tuesday.

The centuries between 1697 and now were not quiet, and their history destroys the passivity myth as thoroughly as the conquest lessons did:

- The **Caste War of Yucatán** (beginning 1847) was one of the largest and most sustained Indigenous risings in the hemisphere's history: Yucatec Maya rebels came close to taking the entire peninsula, then held an autonomous polity in the east, centered on **Chan Santa Cruz**, for half a century; the Mexican army did not take its capital until 1901, and pacification bled into the 1910s (Reed, 2001).
- In **Guatemala's civil war** (1960-1996), the state's counterinsurgency of the early 1980s fell overwhelmingly on Maya communities. The UN-sponsored truth commission (CEH, 1999) documented some 200,000 dead or disappeared across the conflict (a commission estimate), found that 83 percent of identified victims were Maya, and concluded that state forces committed **"acts of genocide"** against Maya groups. This happened within living memory; survivors are alive now (CEH, 1999).
- Out of that fire came, among much else, **Rigoberta Menchú**, the K'iche' activist awarded the **1992 Nobel Peace Prize**, pointedly, on the Columbus quincentennial, for work on Indigenous rights (Nobel Foundation, 1992). (Her testimonial memoir later drew a documented factual controversy, the anthropologist David Stoll challenged details; the Nobel committee stood by the award. This course, being this course, tells you that rather than airbrushing it.)
- Across the isthmus, Indigenous Central America is present tense: the **Guna** of Panama won territorial autonomy, the Comarca **Guna Yala**, after their 1925 revolution, a rare outright Indigenous political victory in the twentieth century; the **Ngäbe**, **Bribri**, **Miskito**, **Lenca**, and others maintain territories and polities from Honduras to Panama. The Lenca environmental leader **Berta Cáceres** won the 2015 Goldman Environmental Prize for leading the fight against the Agua Zarca dam and was assassinated for it in 2016, employees of the dam company were among those convicted. Indigenous Central Americans are not historical figures; they are litigants, legislators, land defenders, and casualties in this decade's news (Goldman Environmental Foundation, 2015).
- The languages are being fought *for*: Guatemala's **Academia de Lenguas Mayas** (chartered 1990) standardizes and promotes the twenty-plus Mayan languages of the country; Mexico's 2003 linguistic-rights law and INALI recognize Indigenous languages as national languages; Maya- and Nahuatl-language schooling, broadcasting, and film (a Kaqchimel-language feature, *Ixcanul*, carried Guatemala to international festivals in 2015) are ordinary facts of the region's cultural life.

Now connect this lesson to everything before it, because the connection is the point. **Who owns the deep past this course has walked through? The people it belongs to are alive.** The "vanished civilization" trope is not a harmless romantic flourish; it does specific work. It turns living communities into ghosts guarding someone else's museum pieces, archaeology about them without them. It makes the Petén and the Yucatán read as empty stages for foreign adventure. It underwrote policies, land seizure, forced assimilation, language suppression, premised on the idea that the "real" Maya or Mexica were safely extinct and their descendants were merely *indios* with no standing to inherit. And it feeds the pseudo-history this course keeps debunking: a "mysteriously vanished" people can be assigned any origin a crank prefers, but a living people with seven million members, thirty languages, and their own epigraphers, there are Maya scholars reading Classic glyphs today, can answer back. When you finish this course, the sentence to carry out the door is the one this lesson is named for: *the civilizations of Mesoamerica are not lost; parts of them were stolen, parts were burned, parts were buried, and the people are still here.*

:::reveal What specific work does the 'vanished civilization' trope do, and what are the present-tense numbers that refute it? ||| The trope turns living communities into ghosts: it licenses archaeology-without-the-descendants, renders their lands 'empty stages,' underwrote dispossession and assimilation policies premised on extinction, and feeds pseudo-history (a 'vanished' people can be assigned any origin; a living one answers back). Refutation: ~7 million Maya today, ~6 million speakers of ~30 Mayan languages, Maya >40% of Guatemala (2018 census), ~1.65 million Nahuatl speakers (INEGI 2020), daykeepers still running the 260-day count, chinampas still farmed.

## Sources
- Coe, M. D., & Houston, S. D. (2022). *The Maya* (10th ed.). Thames & Hudson. https://lccn.loc.gov/2022931889
- Instituto Nacional de Estadística y Geografía. (2020). *Censo de Población y Vivienda 2020: Lenguas indígenas*. INEGI. https://www.inegi.org.mx/programas/ccpv/2020/
- Tedlock, B. (1992). *Time and the highland Maya* (Rev. ed.). University of New Mexico Press. https://lccn.loc.gov/91044651
- Reed, N. (2001). *The Caste War of Yucatán* (Rev. ed.). Stanford University Press. https://lccn.loc.gov/2001020019
- Comisión para el Esclarecimiento Histórico. (1999). *Guatemala: Memoria del silencio*. CEH / United Nations Office for Project Services. https://lccn.loc.gov/00346093
- Nobel Foundation. (1992). *The Nobel Peace Prize 1992: Rigoberta Menchú Tum* [press release]. https://www.nobelprize.org/prizes/peace/1992/press-release/
- Goldman Environmental Foundation. (2015). *Berta Cáceres, 2015 Goldman Prize recipient, South and Central America*. https://www.goldmanprize.org/recipient/berta-caceres/`,
      recallContent: [
        {
          prompt: "Tell the decipherment story in three names and what each contributed.",
          answer:
            "Knorozov (1952, Leningrad): the syllabic principle, glyphs spell sounds, proven via Landa's 'alphabet.' Proskouriakoff (1960): the texts are history, Piedras Negras date patterns record rulers' births, accessions, and deaths. Thompson: the cautionary name, the field's dominant figure, who insisted the script was non-phonetic and history-free, delaying the truth a generation until after his death (Coe's Breaking the Maya Code chronicles it).",
        },
        {
          prompt: "Name the four surviving pre-conquest Maya codices and the detail that makes the names themselves a lesson.",
          answer:
            "Dresden, Madrid, Paris, named for the European cities that hold them, and the Maya Codex of Mexico (ex-'Grolier'), authenticated by INAH in 2018. Four books are the entire surviving pre-conquest literature of a civilization of scribes.",
        },
        {
          prompt: "What parallel does the course draw between decipherment and LiDAR?",
          answer:
            "Same epistemological event via different instruments: evidence that was always present became readable, texts spoke after the code cracked; the landscape spoke when lasers stripped the canopy (PACUNAM 2018: ~61,480 structures in 2,144 km²), and the field rebuilt its picture around the new evidence.",
        },
      ],
    },
    {
      slug: "meso-exercise-name-it",
      title: "Exercise · Name the people, place, and period",
      section: "Section 7 · How we know, and who is still here",
      body: `The anti-flattening rule one last time: no claim about "ancient Mexico" or "the Indians", name the people, the place, the period. This drill hardens the habit. For each cue, type the missing name. Spelling is checked forgivingly; common variant spellings are accepted.`,
      exercise: {
        instructions: "Fill in the missing name (a people, city, person, artifact, or method). Variants and common alternate spellings are accepted.",
        items: [
          {
            prompt: "The people of Tenochtitlan called themselves the ___ (the name survives in 'Mexico').",
            answer: "Mexica",
            accept: ["mexicas"],
            hint: "'Aztec' is the later label, from legendary Aztlan.",
            explanation: "The Mexica of Tenochtitlan, Nahuatl-speaking founders of the Triple Alliance's dominant city.",
          },
          {
            prompt: "The grid-planned metropolis whose builders' language and real name are unknown, its Nahuatl label means roughly 'where the gods were made': ___.",
            answer: "Teotihuacan",
            accept: ["teotihuacán"],
            hint: "Pyramid of the Sun; apartment compounds; the 378 CE entrada at Tikal.",
            explanation: "The Aztecs named the ruins eight centuries after the fall; the humility lesson of Section 2.",
          },
          {
            prompt: "The 2012 'doomsday' traces to a single damaged inscription: Monument 6 from ___.",
            answer: "Tortuguero",
            accept: [],
            hint: "A 7th-century site in Tabasco, Mexico.",
            explanation: "A building-dedication text projecting to the 13th-b'ak'tun period ending, an odometer rollover, not a prophecy (Stuart, 2011).",
          },
          {
            prompt: "The Franciscan who burned Maya codices at Maní in 1562, and whose garbled 'alphabet' later helped crack the script: Diego de ___.",
            answer: "Landa",
            accept: ["de landa"],
            hint: "His Relación is both indictment and Rosetta.",
            explanation: "Landa's paradox: destroyer of the libraries, accidental preserver of the decipherment key.",
          },
          {
            prompt: "The Soviet linguist whose 1952 paper established that Maya glyphs spell syllables: Yuri ___.",
            answer: "Knorozov",
            accept: ["knorosov", "knorozof"],
            hint: "He worked in Leningrad and never dug a Maya site.",
            explanation: "Ridiculed by Thompson for decades; vindicated completely. Coe's Breaking the Maya Code tells the story.",
          },
          {
            prompt: "The empire of Michoacán that crushed the Aztec invasion of the 1470s, a language isolate with bronze technology: the ___.",
            answer: "Purépecha",
            accept: ["purepecha", "tarascan", "tarascans", "purhepecha"],
            hint: "Capital: Tzintzuntzan, 'place of hummingbirds.'",
            explanation: "The second-largest Mesoamerican empire at contact; the Aztecs never beat them.",
          },
          {
            prompt: "The largest and oldest known monumental construction in the Maya area, found by LiDAR in Tabasco and announced in 2020: ___.",
            answer: "Aguada Fénix",
            accept: ["aguada fenix"],
            hint: "A 1.4-km platform you can stand on without seeing.",
            explanation: "Built c. 1000-800 BCE, apparently by collective labor without entrenched kings (Inomata et al., 2020).",
          },
          {
            prompt: "The K'iche' Maya narrative of creation and the Hero Twins, surviving via Francisco Ximénez's copy: the ___.",
            answer: "Popol Vuh",
            accept: ["popol wuj", "popul vuh"],
            hint: "Its K'iche' authors wrote it out alphabetically in the mid-1500s.",
            explanation: "One of the great works of world literature, preserved through the colonial bottleneck.",
          },
          {
            prompt: "The Maya farming village in El Salvador buried by volcanic ash c. 600 CE, the 'Pompeii of the Americas': ___.",
            answer: "Joya de Cerén",
            accept: ["joya de ceren", "ceren", "cerén"],
            hint: "UNESCO World Heritage, 1993; no bodies found.",
            explanation: "The best-preserved snapshot of Mesoamerican commoner daily life (Sheets's excavations).",
          },
          {
            prompt: "The never-conquered Nahua confederation whose warriors supplied much of the army that besieged Tenochtitlan: ___.",
            answer: "Tlaxcala",
            accept: ["tlaxcalans", "tlaxcallan"],
            hint: "Encircled by the Triple Alliance; enemies through the 'flower wars.'",
            explanation: "Restall's reframing turns on them: less a Spanish conquest than a Mesoamerican civil war.",
          },
          {
            prompt: "The last independent Maya kingdom's island capital, taken by Spain only in 1697: ___.",
            answer: "Nojpetén",
            accept: ["nojpeten", "tayasal", "noh peten"],
            hint: "On Lake Petén Itzá, Guatemala; the Itza held it 176 years past Tenochtitlan.",
            explanation: "The date that breaks 'the conquest ended in 1521' (Jones, 1998).",
          },
          {
            prompt: "The excavated skull rack of Tenochtitlan, uncovered beneath Guatemala Street from 2015: the Huei ___.",
            answer: "Tzompantli",
            accept: ["tzompantli"],
            hint: "INAH's urban-archaeology program found the towers of mortared skulls.",
            explanation: "The find that closed the 'Spanish slander' question while the chronicle numbers (80,400; 136,000) stay refused.",
          },
        ],
      },
    },
    {
      slug: "meso-quiz-7",
      title: "Section 7 quiz · How we know, and who is still here",
      section: "Section 7 · How we know, and who is still here",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What happened at Maní on July 12, 1562?",
            options: [
                       "Landa's auto-da-fé: Maya codices and ritual objects were destroyed",
                       "The founding of the first Maya-language printing press in Yucatán",
                       "The fall of the last independent Maya kingdom to Spanish soldiers",
                       "The signing of a lasting Spanish-Maya peace treaty for all Yucatán",
                     ],
            correctIndex: 0,
            explanation:
              "Landa's Relación records the burning and the Maya's 'amazing' grief, the indictment is in the arsonist's own hand (Tozzer translation, 1941).",
            sourceLessonSlug: "meso-how-we-know",
          },
          {
            prompt: "How many pre-conquest Maya codices survive, and which are they?",
            options: [
                       "Four: the Dresden, the Madrid, the Paris, and the Maya Codex of Mexico",
                       "Four hundred, almost all of them held in Guatemala City museums today",
                       "None at all, since every last one of them was burned in the 1560s",
                       "Forty, all of them held in collections in Mexico City to this day",
                     ],
            correctIndex: 0,
            explanation:
              "Three carry the names of the European cities that hold them, itself a lesson. Four books are the surviving pre-conquest literature of a civilization of scribes.",
            sourceLessonSlug: "meso-how-we-know",
          },
          {
            prompt: "What is 'Landa's paradox'?",
            options: [
                       "The man who burned the books also recorded the key to decipherment",
                       "That Landa was himself secretly of Maya descent on his mother's side",
                       "That the codices at Maní were never in fact burned by anybody at all",
                       "That Landa deciphered the whole Maya script himself in the 1560s",
                     ],
            correctIndex: 0,
            explanation:
              "His informants wrote syllable signs for Spanish letter-names; the 'error' preserved phonetic evidence Knorozov exploited in 1952 (Coe, 1992).",
            sourceLessonSlug: "meso-how-we-know",
          },
          {
            prompt: "What did Knorozov (1952) and Proskouriakoff (1960) respectively establish?",
            options: [
                       "Knorozov: syllabic-phonetic script; Proskouriakoff: dynastic history",
                       "Knorozov: the script is pure pictures; Proskouriakoff: pure astronomy",
                       "Both concluded that the Maya script was permanently unreadable text",
                       "Both worked under Thompson's direction at Carnegie in Washington",
                     ],
            correctIndex: 0,
            explanation:
              "The syllabic principle plus the historical hypothesis (from Piedras Negras date patterns) are the decipherment's two hinges.",
            sourceLessonSlug: "meso-how-we-know",
          },
          {
            prompt: "What role does J. Eric S. Thompson play in the decipherment story, as the course tells it?",
            options: [
                       "The cautionary one: he insisted the script was non-phonetic for decades",
                       "The hero of the story, who cracked the whole Maya code back in 1935",
                       "A minor figure with no real influence on the field in either direction",
                       "The discoverer of the Dresden Codex in a German royal library in 1739",
                     ],
            correctIndex: 0,
            explanation:
              "After his death in 1975 the dam broke (Schele, Lounsbury, Mathews, Stuart). Method lesson: authority is not evidence; fields self-correct on evidence, eventually.",
            sourceLessonSlug: "meso-how-we-know",
          },
          {
            prompt: "Why does the course treat decipherment and LiDAR as the same kind of event?",
            options: [
                       "Each made evidence that was always there readable, text then landscape",
                       "Both were achieved by the same researcher within one single decade",
                       "Both happened in 1952 and were announced at the very same conference",
                       "Neither one changed anything important in the field's basic picture",
                     ],
            correctIndex: 0,
            explanation:
              "Instrument revolutions are epistemological events: what 'we know' expands when a new class of evidence opens.",
            sourceLessonSlug: "meso-how-we-know",
          },
          {
            prompt: "The course's transferable three-question method for any historical claim is…",
            options: [
                       "What evidence stands behind it? Who asserts it? What would change it?",
                       "Is it exciting? Is it genuinely ancient? Is the site already famous?",
                       "Does it flatter my own side? Can it go viral? Is it simple enough?",
                       "Was it on television? Does the source sound confident? Is it long?",
                     ],
            correctIndex: 0,
            explanation:
              "Knowledge built that way bends when new evidence lands, and that bending is what being right in the long run looks like.",
            sourceLessonSlug: "meso-how-we-know",
          },
          {
            prompt: "Which set of present-tense numbers does the course insist on?",
            options: [
                       "~7 million Maya; ~6 million speakers of ~30 Mayan languages today",
                       "About 50,000 Maya in total, all of them living inside Belize today",
                       "Zero, since the Maya peoples all went extinct several centuries ago",
                       "Exactly 12 million Maya, a precise figure from a recent full census",
                     ],
            correctIndex: 0,
            explanation:
              "Plus the practices: daykeepers still keep the 260-day count in highland Guatemala; Xochimilco's chinampas still grow food. Not heritage in a case, Tuesday.",
            sourceLessonSlug: "meso-still-here",
          },
          {
            prompt: "What was the Caste War of Yucatán?",
            options: [
                       "A Maya rising from 1847, whose Chan Santa Cruz polity held to 1901",
                       "A brief tax riot of 1847, put down in Yucatán within a few weeks",
                       "A war fought between Spain and Mexico over Yucatán during the 1840s",
                       "A fictional event invented for a nineteenth-century adventure novel",
                     ],
            correctIndex: 0,
            explanation:
              "Reed (2001): a half-century of Maya sovereignty in eastern Yucatán, within the modern era, the passivity myth's post-colonial refutation.",
            sourceLessonSlug: "meso-still-here",
          },
          {
            prompt: "What did Guatemala's UN-sponsored truth commission (CEH, 1999) conclude?",
            options: [
                       "Some 200,000 dead across 1960-96, 83% of them Maya: 'acts of genocide'",
                       "That no political violence at all occurred in Guatemala after 1960",
                       "That the long conflict had no ethnic dimension of any kind at all",
                       "That the total death toll over the whole conflict was under 1,000",
                     ],
            correctIndex: 0,
            explanation:
              "Within living memory, the course cites the commission's own findings and labels the figures as its estimates.",
            sourceLessonSlug: "meso-still-here",
          },
          {
            prompt: "How does the course handle Rigoberta Menchú's 1992 Nobel Peace Prize?",
            options: [
                       "It reports both the 1992 award and the documented Stoll controversy",
                       "It omits the Stoll controversy entirely as inconvenient to the story",
                       "It claims the Nobel committee later revoked her 1992 peace prize",
                       "It presents her memoir as entirely error-free from start to finish",
                     ],
            correctIndex: 0,
            explanation:
              "The course's standard applies to figures it admires: report the record, including the dispute, and note the Nobel committee stood by the award.",
            sourceLessonSlug: "meso-still-here",
          },
          {
            prompt: "Which twentieth-century event gave the Guna of Panama territorial autonomy?",
            options: [
                       "The 1925 Guna revolution, which produced the autonomous Guna Yala",
                       "A Spanish royal decree of 1925 recognizing all their island lands",
                       "The 1977 Panama Canal treaty, which set aside their whole territory",
                       "No such autonomy exists, since the Guna hold no recognized lands",
                     ],
            correctIndex: 0,
            explanation:
              "Indigenous Central America is present tense: comarcas, litigation, land defense, not museum exhibits.",
            sourceLessonSlug: "meso-still-here",
          },
          {
            prompt: "Who was Berta Cáceres?",
            options: [
                       "A Lenca environmental leader in Honduras, assassinated back in 2016",
                       "A sixteenth-century Maya ruler of a kingdom in highland Guatemala",
                       "A Spanish colonial governor of Honduras during the early 1540s CE",
                       "A fictional character who appears in the K'iche' book Popol Vuh",
                     ],
            correctIndex: 0,
            explanation:
              "This decade's news, not history: the lesson's point that Indigenous Central Americans are litigants, legislators, land defenders, and casualties, now.",
            sourceLessonSlug: "meso-still-here",
          },
          {
            prompt: "What specific harms does the 'vanished civilization' trope do, per the course?",
            options: [
                       "It licenses archaeology without descendants and excused dispossession",
                       "None at all, since it is a harmless, purely romantic literary flourish",
                       "It affects only the wording of museum labels and gallery wall texts",
                       "It harms only the tourists who visit the sites and expect much more",
                     ],
            correctIndex: 0,
            explanation:
              "A 'mysteriously vanished' people can be assigned any origin a crank prefers; seven million living Maya, including Maya epigraphers reading Classic glyphs, cannot.",
            sourceLessonSlug: "meso-still-here",
          },
          {
            prompt: "The closing sentence the course asks you to carry out the door is…",
            options: [
                       "'The civilizations of Mesoamerica are not lost, and the people are still here.'",
                       "'The Maya vanished mysteriously, and that mystery is their whole charm.'",
                       "'Nothing whatever can really be known about the pre-Columbian American past.'",
                       "'The conquest ended absolutely everything in Mesoamerica in the year 1521.'",
                     ],
            correctIndex: 0,
            explanation:
              "Every clause is load-bearing: stolen (looted objects, seized land), burned (Maní, 1562), buried (excavations from the FSP to the Huei Tzompantli), and present-tense survival.",
            sourceLessonSlug: "meso-still-here",
          },
        ],
      },
    },
  ],
};
