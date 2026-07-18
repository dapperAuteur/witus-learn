// Authored "Training the Colonizer: The Knowledge That Was Taken" — a high-school-level,
// cited course on what enslaved and colonized people taught the people who enslaved and
// colonized them. From BAM's queue (plans/future-courses/training-the-colonizer.md):
// "what did the people stolen during the Atlantic Slave trade teach their enslavers? how
// to plant the crops, build, etc."
//
// The thesis (real, documented scholarship): enslaved and colonized people carried
// expertise their enslavers often lacked — in agriculture, building, metallurgy, medicine,
// foodways, and navigation — and that knowledge was extracted, uncredited and
// uncompensated, to build colonial economies. The through-line the course refuses to let
// go of: this knowledge was COERCED, UNCREDITED, and UNCOMPENSATED. Expertise did not buy
// status or freedom. The "look what they contributed" frame must not sand off the violence.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations + a ## Sources list, to real
//     scholarship: Judith Carney (Black Rice; In the Shadow of Slavery), Peter H. Wood
//     (Black Majority), Daniel Littlefield (Rice and Slaves), Walter Hawthorne, Gwendolyn
//     Midlo Hall, David Eltis / Philip Morgan / David Richardson, Kevin Dawson (Undercurrents
//     of Power), Andrea Feeser (Red, White, and Black Make Blue), Londa Schiebinger (Plants
//     and Empire), and the Onesimus / Cotton Mather / Zabdiel Boylston primary record.
//   * The course teaches BOTH failure modes as equally fatal: erasure ("Europeans built
//     everything") AND romantic overcorrection ("Africans invented everything," uncited).
//   * The BLACK RICE thesis (Carney, 2001) is taught AS A THESIS, with the scholarly debate:
//     Eltis, Morgan & Richardson (2007, AHR 112:5) challenged the transfer mechanism using
//     their slave-voyage database; the 2010 AHR Exchange replies (Hall; Hawthorne) and
//     Eltis/Morgan/Richardson's counter-reply are all cited. NO WINNER is declared. This is
//     the course's model lesson for holding a contested claim. The cattle/"cowboy" case
//     (Wood's own "it is even possible") is a second, smaller contested claim, hedged.
//   * ONESIMUS: Mather's own 1716 wording is quoted ("both, Yes, and No..."), Onesimus's
//     precise African origin is left uncertain (it is), Boylston's 1721 tally (247 inoculated,
//     6 died, ~2% vs ~14% natural mortality) is cited, and Mather's condescension is kept in.
//   * HEDGES ARE EXPLICIT where a beloved claim is thin: specific building attributions are
//     given as documented LABOR, not documented design; the claim that African iron-SMELTING
//     technology transferred to the Americas is flagged as unsupported (enslaved smiths forged
//     imported iron; they did not run bloomery furnaces on plantations); the "cowboy"
//     etymology is Wood's suggestion, not a proven fact.
//
// House format: `section` on every lesson; one single-line :::reveal per teaching lesson
// (answer NOT restated beneath); a quiz per section with a 15-question bank (above the
// 10-question attempt cap, so retries rotate); every question carries `explanation` +
// `sourceLessonSlug`; recallContent on most lessons; one exercise (name the knowledge, the
// people, the region). Registered in scripts/seed-courses.ts under "Culture & History"; NO
// migration — `pnpm seed:courses`. No em-dashes in learner copy (BAM directive). Cross-links
// (does not duplicate) the Africa Before Colonization, Afrocentricity, Great Migration, and
// History of Unions courses.

import type { AuthoredCourse } from "./authored-course";

export const TRAINING_THE_COLONIZER_COURSE: AuthoredCourse = {
  title: "Training the Colonizer: The Knowledge That Was Taken",
  description:
    "When Europeans built plantation economies in the Americas, they grew crops they did not know how to grow, on land they did not know how to work, using techniques they did not invent. This course walks the documented record of what enslaved and colonized people taught the people who enslaved them: West African rice-growers whose expertise fed the Carolina Lowcountry; the enslaved man Onesimus, who taught Cotton Mather the African practice of smallpox inoculation before the 1721 Boston epidemic; the herders, indigo-makers, blacksmiths, bridge-builders, boat-pilots, and cooks whose skill built colonial wealth. It is careful where the record is careful. The famous Black Rice thesis (Judith Carney, 2001) is taught as a thesis, alongside the scholars who challenged it (Eltis, Morgan, and Richardson, 2007) and those who answered them, with no winner declared, because learning to hold a contested claim honestly is one of the skills this course is really teaching. It refuses the two opposite lies: the old erasure that says Europeans built everything, and the romantic overcorrection that says Africans invented everything without a citation. And it never lets the story go soft: this knowledge was coerced, uncredited, and uncompensated. Being the person who knew how to grow the rice did not make you free. Cited throughout to working historians (Carney, Wood, Littlefield, Hawthorne, Hall, Dawson, Feeser, Schiebinger) and the Mather and Boylston primary record. For high school students.",
  lessons: [
    // ──────────────── SECTION 1 · THE FRAME: COERCED KNOWLEDGE ────────────────
    {
      slug: "ttc-thesis",
      title: "1 · What this course argues, and what it refuses to",
      section: "Section 1 · The frame: coerced knowledge",
      body: `Here is a fact that colonial history books used to leave out. When English planters started growing rice in the swamps of South Carolina in the late 1600s, most of them had never grown rice in their lives. Rice was not an English crop. The people who did know rice, in detail, from seed to table, were West Africans, and many of the Africans being shipped into Charleston came from a stretch of the West African coast where rice had been farmed for centuries.

That is the shape of this whole course. **Enslaved and colonized people carried expertise that their enslavers often did not have** in farming, building, metalworking, medicine, food, and navigation, and that expertise was **taken from them to build colonial economies**, without credit and without pay.

This is not a fringe idea. It is documented scholarship, argued in university-press books and peer-reviewed journals by historians you will meet by name in this course (Carney, 2001; Wood, 1974; Carney & Rosomoff, 2011). But it is a topic where two opposite mistakes are equally damaging, and you need to see both before we start.

| The two traps | What it says | Why it is wrong |
| --- | --- | --- |
| **Erasure** (the old textbook) | Europeans built the colonial world; enslaved people supplied only muscle. | It ignores the record: planters knew they were buying skill, and said so in their own letters and advertisements. |
| **Romantic overcorrection** | Africans invented everything; every good idea has a hidden African origin. | Uncited sweeping claims are as unreliable as the erasure. They also insult the record, which is strong enough without inflation. |

This course walks the **cited record**, and where a claim is a genuine scholarly **debate**, it teaches it as a debate and names the sides rather than picking a winner for you. That posture is not a dodge. It is the same discipline the platform's **Africa Before Colonization** and **Afrocentricity** courses use, and it is one of the real skills you are here to learn.

**The through-line, stated once so you can hold the course to it.** It would be easy to turn this into a feel-good list of "contributions," as if the point were a plaque in a museum. The point is the opposite. This knowledge was **coerced** (extracted under the threat of violence), **uncredited** (the planter's name went on the plantation, the enslaved expert's did not), and **uncompensated** (the person who knew how to grow the rice was still property). Being indispensable did not make anyone free. In case after case you will watch a skill make an enormous amount of money and buy the person who had it almost nothing. That gap, between how much the knowledge was worth and how little the knower was allowed to keep, is the actual subject of this course.

Two more courses on this platform pick up the story later: the **History of Unions** and **Great Migration** courses follow Black workers and their labor into the industrial North and the twentieth century. This course is about the first chapter: the knowledge that came across the Atlantic in the heads of the people who were sold.

:::reveal Name the two opposite traps this course steers between, and the three words that describe how the knowledge in this course was taken. ||| The traps are ERASURE (Europeans built everything; enslaved people were only muscle) and ROMANTIC OVERCORRECTION (uncited claims that Africans invented everything). The three words: the knowledge was COERCED, UNCREDITED, and UNCOMPENSATED.

## Sources
- Carney, J. A. (2001). *Black rice: The African origins of rice cultivation in the Americas*. Harvard University Press.
- Carney, J. A., & Rosomoff, R. N. (2011). *In the shadow of slavery: Africa's botanical legacy in the Atlantic world*. University of California Press.
- Wood, P. H. (1974). *Black majority: Negroes in colonial South Carolina from 1670 through the Stono Rebellion*. Knopf.
- Berlin, I. (1998). *Many thousands gone: The first two centuries of slavery in North America*. Harvard University Press.`,
      recallContent: [
        {
          prompt: "What is the single-sentence thesis of this course?",
          answer:
            "Enslaved and colonized people carried expertise their enslavers often lacked (in farming, building, metalworking, medicine, food, and navigation), and that knowledge was extracted, uncredited and uncompensated, to build colonial economies.",
        },
        {
          prompt: "Why does the course insist on citing everything and teaching debates as debates?",
          answer:
            "Because the topic has two equally damaging failure modes: erasure (Europeans built everything) and romantic overcorrection (uncited claims that Africans invented everything). Only the cited record, with contested claims flagged as contested, avoids both.",
        },
      ],
    },
    {
      slug: "ttc-how-we-know",
      title: "2 · How we know: reading a record the enslavers wrote",
      section: "Section 1 · The frame: coerced knowledge",
      body: `Before we name a single crop or craft, we have to be honest about a problem that shadows this entire subject: **almost every written record from slavery was written by the enslavers.** Plantation account books, letters between planters, colonial laws, bills of sale, newspaper advertisements. The people whose knowledge this course is about mostly could not write in English, were forbidden to learn, and left few documents of their own. So how does a historian show that **knowledge** (not just labor) crossed the Atlantic, when the witnesses are the very people who profited from taking it?

The answer is that historians triangulate. No single source proves a transfer; a careful case is built from several kinds of evidence that point the same way (Morgan, 1998).

- **What planters paid for.** Slave traders and planters expressed **preferences**: they paid more for captives from particular regions and said why. Daniel Littlefield's study of the Carolina trade found planters associating people from the rice-growing "Windward Coast" with rice skill (Littlefield, 1981). A buyer's price list is a hostile witness admitting that the people he bought knew things he needed.
- **The enslavers' own advertisements.** Runaway notices, printed to recapture people, routinely describe the escapee's **trade**: "a sensible fellow," "a good sawyer," "understands the making of indigo," "a pilot." These ads were written to make money, not to honor anyone, which is exactly what makes them credible on the point of skill.
- **Comparative technique.** When a method used in the Carolina rice fields (tidal flooding, sowing seed by pressing it into the mud with the heel, winnowing with a coiled fanner basket) matches a method documented in West Africa, that parallel is evidence, though (as the next section will show) not by itself proof.
- **Material culture.** Objects can carry a technique across an ocean. The coiled **sweetgrass baskets** still made in the South Carolina Lowcountry descend from Senegambian rice-winnowing baskets (Rosengarten, 1986).
- **Language, story, and the ground.** Words, oral histories, and archaeology (the tools and seeds dug out of the quarters) fill in what the account books leave out.

**Now the discipline part, because this is where the course earns your trust.** A parallel is not a proof. If a technique existed in West Africa *and* in colonial Carolina, that does not automatically mean it traveled from one to the other in an enslaved person's memory. Maybe it did. Maybe Europeans or Native Americans also knew a version of it. Maybe it developed on the spot. The strongest scholarship says which of these it can prove and which it cannot, and it **hedges the ones it cannot** (Eltis, Morgan, & Richardson, 2007). You are about to watch two careful historians do exactly that, on opposite sides of the same question, in Section 2. Hold onto the difference between "documented" and "plausible." This course will always tell you which one it is showing you.

:::reveal Give two kinds of evidence historians use to show that KNOWLEDGE (not just labor) crossed the Atlantic, and the one warning that comes with all of them. ||| Any two of: what planters paid extra for (regional skill preferences in the slave trade); runaway advertisements naming a trade; matching techniques between West Africa and the colonies; material culture like the coiled fanner/sweetgrass basket; language, oral history, and archaeology. The warning: a parallel is not a proof. A technique existing on both sides of the Atlantic does not by itself prove it transferred, so careful historians hedge what they cannot document.

## Sources
- Littlefield, D. C. (1981). *Rice and slaves: Ethnicity and the slave trade in colonial South Carolina*. Louisiana State University Press.
- Morgan, P. D. (1998). *Slave counterpoint: Black culture in the eighteenth-century Chesapeake and Lowcountry*. University of North Carolina Press.
- Eltis, D., Morgan, P., & Richardson, D. (2007). Agency and diaspora in Atlantic history: Reassessing the African contribution to rice cultivation in the Americas. *The American Historical Review, 112*(5), 1329-1358.
- Rosengarten, D. (1986). *Row upon row: Sea grass baskets of the South Carolina Lowcountry*. McKissick Museum, University of South Carolina.`,
      recallContent: [
        {
          prompt: "Why is the written record of slavery a problem for this course, and how do historians work around it?",
          answer:
            "Almost all written records were made by the enslavers (account books, laws, sale documents, ads), not the enslaved. Historians triangulate several kinds of evidence: slave-trade skill preferences, runaway ads naming trades, matching techniques, material culture, language, oral history, and archaeology.",
        },
        {
          prompt: "What is the difference between 'documented' and 'plausible,' and why does it matter here?",
          answer:
            "Documented means the record actually shows it; plausible means it fits but is not proven. A technique appearing in both West Africa and the colonies is plausible evidence of transfer, not proof of it. Careful scholarship hedges the plausible instead of asserting it.",
        },
      ],
    },
    {
      slug: "ttc-quiz-frame",
      title: "3 · Quiz: the frame",
      section: "Section 1 · The frame: coerced knowledge",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the central thesis of this course?",
            options: [
              "Enslaved and colonized people carried expertise their enslavers often lacked, and it was taken uncredited and uncompensated to build colonial economies",
              "Europeans taught enslaved people all the skills used on plantations",
              "Africans invented every important technology in world history",
              "Slavery had no effect on how colonial economies were built",
            ],
            correctIndex: 0,
            explanation:
              "The thesis is that enslaved and colonized people brought real expertise (farming, building, metalwork, medicine, food, navigation) that was extracted without credit or pay to build colonial wealth.",
            sourceLessonSlug: "ttc-thesis",
          },
          {
            prompt: "The course warns against two opposite traps. What are they?",
            options: [
              "Overcounting and undercounting the enslaved population",
              "Erasure (Europeans built everything) and romantic overcorrection (uncited claims Africans invented everything)",
              "Citing too many sources and citing too few",
              "Focusing on farming and ignoring building",
            ],
            correctIndex: 1,
            explanation:
              "Erasure ignores the documented record of African skill; romantic overcorrection replaces it with sweeping uncited claims. Both are unreliable; the course teaches the cited record.",
            sourceLessonSlug: "ttc-thesis",
          },
          {
            prompt: "Which three words describe how the knowledge in this course was taken?",
            options: [
              "Shared, credited, rewarded",
              "Ancient, foreign, forgotten",
              "Coerced, uncredited, uncompensated",
              "Voluntary, paid, celebrated",
            ],
            correctIndex: 2,
            explanation:
              "Coerced (taken under threat of violence), uncredited (the planter's name went on the plantation), and uncompensated (the expert was still property). Skill did not buy freedom.",
            sourceLessonSlug: "ttc-thesis",
          },
          {
            prompt: "Why does the course say being indispensable did not make an enslaved expert free?",
            options: [
              "Because enslaved experts were always freed within a year",
              "Because the value of the knowledge went to the enslaver while the knower remained property",
              "Because the knowledge was worthless",
              "Because enslaved people refused payment",
            ],
            correctIndex: 1,
            explanation:
              "The gap between how much the knowledge was worth and how little the knower kept is the course's actual subject. A skill could make a fortune and buy its holder almost nothing.",
            sourceLessonSlug: "ttc-thesis",
          },
          {
            prompt: "Why was rice a striking example to open with?",
            options: [
              "Rice was a traditional English crop the planters knew well",
              "Rice was never actually grown in South Carolina",
              "Rice was not an English crop, and many enslaved Africans came from a West African region where rice had been farmed for centuries",
              "Rice required no special knowledge to grow",
            ],
            correctIndex: 2,
            explanation:
              "English planters mostly did not know rice; West Africans from the Rice Coast did. That mismatch is the shape of the whole course.",
            sourceLessonSlug: "ttc-thesis",
          },
          {
            prompt: "What is the core problem with the written record from slavery?",
            options: [
              "There are no written records at all from the period",
              "Almost all of it was written by the enslavers, not the enslaved",
              "It was all written in West African languages",
              "It was destroyed in the Civil War",
            ],
            correctIndex: 1,
            explanation:
              "Plantation books, laws, sale documents, and ads were written by enslavers. The enslaved left few English documents, so historians must read hostile sources carefully.",
            sourceLessonSlug: "ttc-how-we-know",
          },
          {
            prompt: "How does a runaway advertisement become evidence of skill?",
            options: [
              "It was written to praise the enslaved person",
              "It describes the escapee's trade (sawyer, pilot, indigo-maker) to help recapture them, so it credibly records real skill",
              "It was written by the enslaved person",
              "It listed only physical descriptions, never skills",
            ],
            correctIndex: 1,
            explanation:
              "Ads named trades to catch the person, not to honor them, which is exactly what makes them reliable on the point of skill.",
            sourceLessonSlug: "ttc-how-we-know",
          },
          {
            prompt: "What did Daniel Littlefield's study of the Carolina slave trade find about planter preferences?",
            options: [
              "Planters had no regional preferences at all",
              "Planters preferred captives from regions with no farming tradition",
              "Planters associated captives from rice-growing regions with rice skill and paid accordingly",
              "Planters only bought people born in the colonies",
            ],
            correctIndex: 2,
            explanation:
              "Littlefield (1981) documented planters expressing ethnic and regional preferences tied to skills such as rice cultivation, evidence that buyers recognized African expertise.",
            sourceLessonSlug: "ttc-how-we-know",
          },
          {
            prompt: "The coiled sweetgrass baskets of the South Carolina Lowcountry are an example of what kind of evidence?",
            options: [
              "Written testimony",
              "Material culture carrying a technique across the Atlantic",
              "A modern invention with no African link",
              "A European craft taught to enslaved people",
            ],
            correctIndex: 1,
            explanation:
              "They descend from Senegambian rice-winnowing (fanner) baskets (Rosengarten, 1986), an object-based line of evidence for transferred technique.",
            sourceLessonSlug: "ttc-how-we-know",
          },
          {
            prompt: "What is the key warning the course attaches to every West-Africa-to-Americas parallel?",
            options: [
              "A parallel is automatically proof of transfer",
              "Parallels are always coincidences",
              "A parallel is evidence but not proof; the technique might also be European, Native American, or locally developed",
              "Parallels can never be studied by historians",
            ],
            correctIndex: 2,
            explanation:
              "A technique existing on both sides of the Atlantic is plausible evidence of transfer, not proof. Careful scholars hedge what they cannot document.",
            sourceLessonSlug: "ttc-how-we-know",
          },
          {
            prompt: "What does it mean that historians 'triangulate' this history?",
            options: [
              "They rely on a single decisive document",
              "They combine several kinds of evidence that point the same way, since no one source proves a knowledge transfer",
              "They measure the angles of plantation fields",
              "They only use oral history",
            ],
            correctIndex: 1,
            explanation:
              "Because no single source proves a transfer, a careful case is built from slave-trade records, ads, comparative technique, material culture, language, and archaeology together.",
            sourceLessonSlug: "ttc-how-we-know",
          },
          {
            prompt: "Which best captures the course's stance on contested scholarly claims?",
            options: [
              "Always pick the most dramatic claim",
              "Teach the debate, name the sides, and do not declare a winner for the learner",
              "Ignore any claim that scholars dispute",
              "Treat all disputed claims as false",
            ],
            correctIndex: 1,
            explanation:
              "Where a claim is a live debate, the course presents both sides from real scholarship and declines to crown a winner, so learners practice holding a contested claim honestly.",
            sourceLessonSlug: "ttc-thesis",
          },
          {
            prompt: "Which two later courses on this platform continue the story of Black labor beyond this course?",
            options: [
              "The AI Literacy and Cybersecurity courses",
              "The Tennis and Golf courses",
              "The History of Unions and Great Migration courses",
              "The Civics and Voting courses",
            ],
            correctIndex: 2,
            explanation:
              "The History of Unions and Great Migration courses follow Black workers into the industrial North and the twentieth century; this course covers the first chapter.",
            sourceLessonSlug: "ttc-thesis",
          },
          {
            prompt: "Why does the course say the romantic overcorrection 'insults the record'?",
            options: [
              "Because the record is too weak to defend",
              "Because the documented record is already strong and does not need uncited inflation",
              "Because Africans made no real contributions",
              "Because historians dislike praise",
            ],
            correctIndex: 1,
            explanation:
              "The verified record of African expertise is substantial on its own. Replacing it with sweeping uncited claims makes the whole subject easier to dismiss.",
            sourceLessonSlug: "ttc-thesis",
          },
          {
            prompt: "In this course, what is the difference between calling something 'documented' versus 'plausible'?",
            options: [
              "There is no difference; the course uses them interchangeably",
              "'Documented' means the record shows it; 'plausible' means it fits but is not proven, and the course always says which it is showing",
              "'Plausible' is stronger than 'documented'",
              "Both mean the claim is certainly true",
            ],
            correctIndex: 1,
            explanation:
              "Keeping the two apart is how the course earns trust: it distinguishes what the evidence establishes from what merely fits.",
            sourceLessonSlug: "ttc-how-we-know",
          },
        ],
      },
    },
    // ──────── SECTION 2 · RICE: THE ANCHOR CASE AND THE BLACK RICE DEBATE ────────
    {
      slug: "ttc-rice-coast",
      title: "4 · The Rice Coast: a West African rice civilization",
      section: "Section 2 · Rice: the anchor case and the Black Rice debate",
      body: `Before we can talk about rice in South Carolina, we have to go to West Africa, because that is where the expertise came from, and it was old.

Rice was farmed in West Africa long before any European colony existed. There are two rice species in the world. The one most people know, *Oryza sativa*, was domesticated in Asia. But there is a second, entirely separate one, *Oryza glaberrima*, African rice, which West Africans domesticated on their own, in the inland delta of the Niger River, some two to three thousand years ago (Carney, 2001). This is not a small footnote. It means that a whole civilization of rice, its own crop, its own tools, its own body of knowledge, grew up in West Africa independently of Asia.

The stretch of coast from Senegal down to present-day Sierra Leone and Liberia was known to European traders as the **Rice Coast** (also the Grain Coast), and it earned the name. Farmers there, among them the Baga and the Jola (Diola), grew rice in three different environments at once, each demanding a different skill (Carney, 2001; Hawthorne, 2003):

| System | Where | What it takes |
| --- | --- | --- |
| Upland (rain-fed) | higher, drier ground | timing the planting to the rains |
| Inland swamp | freshwater wetlands | managing standing water and soil |
| Tidal mangrove | coastal estuaries where salt and fresh water meet | the hardest: building embankments and sluice gates to let fresh river water in and flush salt water out, twice a day, with the tide |

That last system, **tidal mangrove rice**, is the one to remember. It is not simple farming. It means reading the tides, building earthen dikes to hold back the ocean, cutting sluices to control the flow, transplanting seedlings by hand, and choosing which seed to save. Growing rice this way is a body of engineering and agronomy that takes a lifetime to learn and a community to run.

Three techniques in particular are worth naming now, because you will meet them again on the far side of the Atlantic:
- **Sowing by heel.** Pressing each seed into the wet soil with a practiced press of the heel, so it takes hold and the birds do not get it.
- **The mortar and pestle.** Hulling rice by hand, with a long wooden pestle, in a rhythm that strips the husk without crushing the grain. This was skilled work, and in West Africa it was largely **women's** work and women's knowledge.
- **The fanner basket.** A wide, flat coiled basket used to toss milled rice into the air so the wind carries off the chaff.

None of this is contested. West Africa was a rice civilization with deep expertise long before Carolina existed, and you can read the wider story of West African states, cities, and technology in this platform's **Africa Before Colonization** course. Hold that fact steady, because the argument in the next two lessons is not about whether the expertise existed. It is about exactly how much of it crossed the ocean, and in whose hands.

:::reveal Name the African rice species, and name the hardest of the three West African rice-growing systems and one thing it requires. ||| The species is *Oryza glaberrima* (African rice), domesticated in West Africa independently of Asian rice. The hardest system is tidal mangrove rice, which requires building embankments and sluice gates to let fresh water in and flush salt water out with the tides (also acceptable: transplanting seedlings, reading the tide, seed selection).

## Sources
- Carney, J. A. (2001). *Black rice: The African origins of rice cultivation in the Americas*. Harvard University Press.
- Carney, J. A., & Rosomoff, R. N. (2011). *In the shadow of slavery: Africa's botanical legacy in the Atlantic world*. University of California Press.
- Hawthorne, W. (2003). *Planting rice and harvesting slaves: Transformations along the Guinea-Bissau coast, 1400-1900*. Heinemann.`,
      recallContent: [
        {
          prompt: "What is Oryza glaberrima, and why does it matter to this course?",
          answer:
            "African rice, a rice species West Africans domesticated on their own in the inland Niger delta, separate from Asian rice. It shows West Africa had its own full rice civilization (crop, tools, and knowledge) long before any European colony.",
        },
        {
          prompt: "What was tidal mangrove rice, and why was it the hardest system?",
          answer:
            "Growing rice in coastal estuaries where salt and fresh water meet. It required building earthen embankments and sluice gates to admit fresh river water and flush salt water out with the tides, plus transplanting seedlings and selecting seed. It is engineering as much as farming.",
        },
        {
          prompt: "Name three West African rice techniques that reappear in the Carolina story.",
          answer:
            "Sowing seed by pressing it into the mud with the heel; hulling rice with a wooden mortar and pestle (largely women's knowledge); and winnowing with a wide coiled fanner basket.",
        },
      ],
    },
    {
      slug: "ttc-black-rice-thesis",
      title: "5 · The Black Rice thesis: what Judith Carney argued",
      section: "Section 2 · Rice: the anchor case and the Black Rice debate",
      body: `Now the Atlantic. In the late 1600s and 1700s, South Carolina and later Georgia became astonishingly rich growing rice in tidal swamps along the coast. By the 1700s Carolina rice was a major export and the colony had a **Black majority**: more enslaved people than free colonists. Where did the knowledge to build that come from?

The historian **Peter Wood** asked that question first, in a 1974 book called *Black Majority*. Wood argued that enslaved Africans were not just the muscle of the Carolina rice economy but a source of its know-how: many came from rice-growing regions, and their skill (along with cattle-herding skill and a hard-won ability to survive the swampy, malarial coast) helped make the colony work (Wood, 1974).

A generation later, the geographer **Judith Carney** made the fullest version of the argument in a 2001 book whose title gave the whole idea its name: *Black Rice*. Carney's claim goes further than "Africans knew how to grow rice." She argued that an entire **knowledge system** crossed the Atlantic in the memories of enslaved people (Carney, 2001):
- the **technology** of tidal rice: the flooded fields, the water control, the embankments and floodgates that Carolina planters used look strikingly like the West African tidal system;
- the **agronomy**: seed selection, sowing by heel, transplanting;
- the **processing**: the mortar and pestle and the fanner basket, and with them the **gendered** division of labor, since in West Africa this was largely women's expertise.

Carney also pointed to the slave trade itself. **Daniel Littlefield** had shown in *Rice and Slaves* (1981) that Carolina planters expressed **preferences**: they associated captives from the Rice Coast with rice skill and paid accordingly. A buyer who pays extra for people from rice country is telling you, in the cold language of a price, that he is buying knowledge he does not have.

Put together, this is the **Black Rice thesis**: that the Carolina rice economy was, to a substantial degree, built on West African expertise carried across the ocean by the enslaved. It was a powerful reframing. For a long time the textbooks had said planters figured rice out; Carney said look again, the record points to Africa.

Notice the word **thesis**. It is a strong, carefully argued interpretation, hugely influential, and it is also a claim that other historians tested, which is exactly what the next lesson is about. But hold the through-line no matter how the testing comes out: if this expertise built one of the richest economies in colonial America, it bought the people who carried it nothing. They grew the rice that made the fortune, and they remained property.

:::reveal In one sentence, what did Judith Carney argue crossed the Atlantic, and how is that more than just "Africans knew how to grow rice"? ||| Carney argued that an entire knowledge system crossed the Atlantic in enslaved people's memories: not only the crop but the tidal-field technology, the agronomy (seed selection, heel-sowing, transplanting), and the processing knowledge (mortar and pestle, fanner basket), including the gendered division of labor. It is more than "they knew rice" because it claims a whole integrated system of technique and labor transferred, not just a skill.

## Sources
- Wood, P. H. (1974). *Black majority: Negroes in colonial South Carolina from 1670 through the Stono Rebellion*. Knopf.
- Carney, J. A. (2001). *Black rice: The African origins of rice cultivation in the Americas*. Harvard University Press.
- Littlefield, D. C. (1981). *Rice and slaves: Ethnicity and the slave trade in colonial South Carolina*. Louisiana State University Press.
- Carney, J. A., & Rosomoff, R. N. (2011). *In the shadow of slavery: Africa's botanical legacy in the Atlantic world*. University of California Press.`,
      recallContent: [
        {
          prompt: "Who first argued (in 1974) that enslaved Africans' knowledge, not just their labor, helped build the Carolina rice economy?",
          answer:
            "Peter Wood, in Black Majority (1974). He argued enslaved Africans supplied rice-growing and cattle-herding skill and swamp survival knowledge, which helped the colony work and gave it a Black majority.",
        },
        {
          prompt: "What does the Black Rice thesis (Carney, 2001) claim, and what did Littlefield's work add?",
          answer:
            "That an entire African knowledge system (tidal-field technology, agronomy, and processing, including women's expertise) crossed the Atlantic and substantially built Carolina rice. Littlefield (1981) added that planters preferred and paid more for captives from rice-growing regions.",
        },
        {
          prompt: "Why keep calling it a 'thesis'?",
          answer:
            "Because it is a strong, argued interpretation, not a settled fact. It was hugely influential and it was also tested and challenged by other historians, which is the subject of the next lesson.",
        },
      ],
    },
    {
      slug: "ttc-black-rice-debate",
      title: "6 · How to hold a contested claim: the Black Rice debate",
      section: "Section 2 · Rice: the anchor case and the Black Rice debate",
      body: `This is the most important lesson in the course, and it is not really about rice. It is about how to hold a claim that serious historians disagree about, without lying in either direction. The Black Rice thesis is the perfect place to practice, because it is strong, it is famous, and it got tested hard.

**The challenge (2007).** Three historians, **David Eltis, Philip Morgan, and David Richardson**, wrote a direct response in the *American Historical Review* (Eltis, Morgan, & Richardson, 2007). They are not fringe skeptics; they are principal builders of the transatlantic slave-trade database that historians now use to count who was shipped from where. Using that data, they raised hard questions about the transfer story. Presented fairly, their argument was:
- **Presence is not the same as transfer.** You cannot prove a whole knowledge system moved just because some people from rice regions were in Carolina. Someone being present is not the same as their expertise being adopted.
- **The demographics are awkward.** By their reading, the Rice Coast supplied only a share of early Carolina captives, and the sex ratios of the trade (more men shipped than women) sit uneasily with a thesis that leans heavily on **women's** milling and processing knowledge.
- **Planters had agency too.** Rich planters with capital, land, and the power to coerce made decisions about what to plant and how; the environment of the Carolina lowcountry shaped the crop as well.

Their conclusion was not "Africans knew nothing about rice." It was that the strong version of the thesis, a largely intact African knowledge system driving the whole enterprise, was **overstated** and under-documented.

**The reply (2010).** This is what a healthy argument looks like. The *American Historical Review* ran a formal **Exchange** titled "The Question of Black Rice" (*AHR*, 2010). **S. Max Edelson** ("Beyond Black Rice") pressed for reconstructing the physical and economic context of the plantations rather than assuming a clean transfer (Edelson, 2010). **Walter Hawthorne** ("From Black Rice to Brown") defended a substantial African role but reframed it: not a single one-way transfer and not a European achievement, but a **creolized**, co-produced knowledge, "brown rice," shaped by Africans working alongside others under coercion (Hawthorne, 2010). Eltis, Morgan, and Richardson replied again ("Black, Brown, or White?"), holding their ground on the data (Eltis, Morgan, & Richardson, 2010). And Carney, with Richard Rosomoff, restated the case for African agency (Carney & Rosomoff, 2011). No one "won." The journal did not print a verdict, and neither will this course.

**Now the discipline. Separate what is settled from what is fought over.**

| Not in dispute | Genuinely contested |
| --- | --- |
| West Africans had deep, old rice expertise. | Whether a whole knowledge system transferred largely intact. |
| Enslaved people from rice regions were in Carolina. | How much of Lowcountry rice was African-driven versus creolized or planter-directed. |
| African rice (*glaberrima*) was grown early in the Lowcountry, and some techniques and processing knowledge were African. | The exact mechanism: who taught whom, when, and how much. |

Look at what that table does. It refutes **both** lies at once. The old erasure ("planters invented Carolina rice, Africans just dug") is dead: no serious historian in this debate believes it. And the romantic overcorrection ("Africans single-handedly built it, and anyone who asks how is a denier") is also wrong: the people who ask "how, exactly?" are careful scholars doing their job. The truth lives in the contested middle, and saying so is not weakness. It is what honesty looks like when the evidence is partial.

One thing the debate does **not** touch, and the reason this course refuses to let the argument become the whole point: whichever way you read it, the human fact does not move. The people who carried the rice expertise, however much of it, were enslaved. They were not credited in the ledgers, they were not paid, and being the ones who knew did not make them free.

:::reveal Name the three historians who challenged the Black Rice thesis in 2007, give one of their arguments, and name one thing about African rice that is NOT in dispute. ||| The challengers were David Eltis, Philip Morgan, and David Richardson (2007). One argument: presence is not the same as transfer (people from rice regions being present does not prove a whole knowledge system moved); also acceptable, the demographics/sex ratios complicate the women's-knowledge emphasis, or planters had agency. Not in dispute: West Africans had deep rice expertise; enslaved people from rice regions were in Carolina; African rice and some techniques and processing knowledge were African.

## Sources
- Eltis, D., Morgan, P., & Richardson, D. (2007). Agency and diaspora in Atlantic history: Reassessing the African contribution to rice cultivation in the Americas. *The American Historical Review, 112*(5), 1329-1358.
- Edelson, S. M. (2010). Beyond "Black Rice": Reconstructing material and cultural contexts for early plantation agriculture. *The American Historical Review, 115*(1), 125-135.
- Hawthorne, W. (2010). From "Black Rice" to "Brown": Rethinking the history of risiculture in the seventeenth- and eighteenth-century Atlantic. *The American Historical Review, 115*(1), 151-163.
- Eltis, D., Morgan, P., & Richardson, D. (2010). Black, brown, or white? Color-coding American commercial rice cultivation with slave labor. *The American Historical Review, 115*(1), 164-171.
- Carney, J. A., & Rosomoff, R. N. (2011). *In the shadow of slavery: Africa's botanical legacy in the Atlantic world*. University of California Press.`,
      recallContent: [
        {
          prompt: "What was the core of the 2007 Eltis, Morgan, and Richardson challenge to the Black Rice thesis?",
          answer:
            "That the strong transfer claim was overstated and under-documented. Their points: presence is not the same as transfer; the demographics and sex ratios of the slave trade complicate the emphasis on women's knowledge; and planters and the environment shaped the crop too. They did not deny African rice expertise existed.",
        },
        {
          prompt: "In the Black Rice debate, what is NOT in dispute versus what IS contested?",
          answer:
            "Not disputed: West Africans had deep rice expertise, enslaved people from rice regions were in Carolina, and some techniques and processing knowledge were African. Contested: whether a whole knowledge system transferred largely intact, how African-driven versus creolized or planter-directed Lowcountry rice was, and the exact mechanism of transfer.",
        },
        {
          prompt: "How does teaching the debate refute both the erasure and the romantic overcorrection at once?",
          answer:
            "The erasure ('planters invented Carolina rice') is dead because no serious scholar in the debate believes it. The overcorrection ('Africans single-handedly built it, no questions allowed') is also wrong, because the scholars asking 'how exactly?' are doing careful work. The honest answer lives in the contested middle.",
        },
      ],
    },
    {
      slug: "ttc-quiz-rice",
      title: "7 · Quiz: rice and the Black Rice debate",
      section: "Section 2 · Rice: the anchor case and the Black Rice debate",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is Oryza glaberrima?",
            options: [
              "The Asian rice species grown worldwide",
              "African rice, a species West Africans domesticated independently of Asian rice",
              "A type of fanner basket",
              "A South Carolina plantation",
            ],
            correctIndex: 1,
            explanation:
              "African rice was domesticated in the inland Niger delta some two to three thousand years ago, separate from Asian rice, showing West Africa had its own full rice civilization.",
            sourceLessonSlug: "ttc-rice-coast",
          },
          {
            prompt: "Why was the coast from Senegal to Sierra Leone and Liberia called the Rice Coast?",
            options: [
              "Europeans planted rice there in the 1800s",
              "It was the only place rice grew in the world",
              "West Africans there had long grown rice across upland, inland-swamp, and tidal systems",
              "The name was a European mistake with no basis",
            ],
            correctIndex: 2,
            explanation:
              "Farmers there, including the Baga and Jola, grew rice in three different environments, each requiring a different skill. The name recorded a real expertise.",
            sourceLessonSlug: "ttc-rice-coast",
          },
          {
            prompt: "Which West African rice system was the most technically demanding?",
            options: [
              "Upland rain-fed rice",
              "Inland swamp rice",
              "Tidal mangrove rice, which required embankments and sluice gates to manage salt and fresh water",
              "Container gardening",
            ],
            correctIndex: 2,
            explanation:
              "Tidal mangrove rice meant reading the tides and building dikes and sluices to admit fresh water and flush salt water. It is engineering as much as farming.",
            sourceLessonSlug: "ttc-rice-coast",
          },
          {
            prompt: "The mortar and pestle used to hull rice, and the fanner basket used to winnow it, carried what additional significance in West Africa?",
            options: [
              "They were used only by European overseers",
              "This processing was largely women's work and women's knowledge",
              "They were purely decorative",
              "They had no connection to rice",
            ],
            correctIndex: 1,
            explanation:
              "Hulling and winnowing were skilled tasks that in West Africa were largely women's expertise, which matters later in the debate over the thesis.",
            sourceLessonSlug: "ttc-rice-coast",
          },
          {
            prompt: "Which historian first argued, in Black Majority (1974), that enslaved Africans' knowledge helped build the Carolina rice economy?",
            options: ["Judith Carney", "Peter Wood", "David Eltis", "Daniel Littlefield"],
            correctIndex: 1,
            explanation:
              "Peter Wood's Black Majority (1974) argued enslaved Africans supplied rice and cattle skill and swamp survival knowledge, not just labor.",
            sourceLessonSlug: "ttc-black-rice-thesis",
          },
          {
            prompt: "What is the core of Judith Carney's Black Rice thesis (2001)?",
            options: [
              "That Europeans taught Africans to grow rice",
              "That rice was never grown in South Carolina",
              "That an entire African knowledge system (technology, agronomy, and processing) crossed the Atlantic in enslaved people's memories",
              "That only the crop, and no knowledge, crossed the Atlantic",
            ],
            correctIndex: 2,
            explanation:
              "Carney argued that a whole integrated system of tidal-field technology, agronomy, and processing knowledge transferred, not just the seed.",
            sourceLessonSlug: "ttc-black-rice-thesis",
          },
          {
            prompt: "What did Daniel Littlefield's Rice and Slaves (1981) show about Carolina planters?",
            options: [
              "They had no preferences among captives",
              "They preferred captives from regions with no farming",
              "They associated captives from the Rice Coast with rice skill and paid accordingly",
              "They grew no rice at all",
            ],
            correctIndex: 2,
            explanation:
              "A buyer paying extra for people from rice country is admitting, in the language of price, that he is buying knowledge he lacks.",
            sourceLessonSlug: "ttc-black-rice-thesis",
          },
          {
            prompt: "Who challenged the Black Rice thesis in a 2007 American Historical Review article?",
            options: [
              "Judith Carney and Peter Wood",
              "David Eltis, Philip Morgan, and David Richardson",
              "Walter Hawthorne and S. Max Edelson",
              "No one; the thesis was never challenged",
            ],
            correctIndex: 1,
            explanation:
              "Eltis, Morgan, and Richardson, principal builders of the transatlantic slave-trade database, argued the strong transfer claim was overstated and under-documented.",
            sourceLessonSlug: "ttc-black-rice-debate",
          },
          {
            prompt: "What did the challengers mean by 'presence is not the same as transfer'?",
            options: [
              "That no Africans were present in Carolina",
              "That people from rice regions being present does not by itself prove a whole knowledge system was adopted",
              "That transfer always happens automatically",
              "That planters were absent from their plantations",
            ],
            correctIndex: 1,
            explanation:
              "The point is a discipline about evidence: you have to show adoption, not just infer it from who was in the colony.",
            sourceLessonSlug: "ttc-black-rice-debate",
          },
          {
            prompt: "The 2010 AHR Exchange 'The Question of Black Rice' is an example of what?",
            options: [
              "A single historian declaring the final answer",
              "A healthy scholarly argument where several historians publicly test and reframe a claim",
              "Proof that the thesis was a hoax",
              "A court trial",
            ],
            correctIndex: 1,
            explanation:
              "Edelson, Hawthorne, and Eltis/Morgan/Richardson exchanged arguments in print; the journal printed no verdict.",
            sourceLessonSlug: "ttc-black-rice-debate",
          },
          {
            prompt: "What did Walter Hawthorne mean by reframing the story from 'black rice' to 'brown'?",
            options: [
              "That rice turned brown in Carolina",
              "That the African role was a creolized, co-produced knowledge, not a single one-way transfer and not a European achievement",
              "That Africans played no part",
              "That Europeans invented rice farming",
            ],
            correctIndex: 1,
            explanation:
              "Hawthorne (2010) defended a substantial but co-produced African role, knowledge shaped by Africans working with others under coercion.",
            sourceLessonSlug: "ttc-black-rice-debate",
          },
          {
            prompt: "Which statement about African rice knowledge is NOT in dispute among the historians in the debate?",
            options: [
              "That a whole knowledge system transferred perfectly intact",
              "That West Africans had deep, old rice expertise and enslaved people from rice regions were in Carolina",
              "That Africans single-handedly ran the entire economy with no coercion",
              "That planters invented Carolina rice with no African input",
            ],
            correctIndex: 1,
            explanation:
              "The existence of African expertise and the presence of rice-region captives are settled. What is contested is the mechanism and degree of transfer.",
            sourceLessonSlug: "ttc-black-rice-debate",
          },
          {
            prompt: "How does teaching the Black Rice debate refute the old erasure story?",
            options: [
              "It proves Europeans invented Carolina rice",
              "It shows no serious historian in the debate believes planters did it alone with Africans as mere muscle",
              "It ignores African expertise",
              "It declares Carney the winner",
            ],
            correctIndex: 1,
            explanation:
              "Even the skeptics affirm real African rice expertise; the erasure that says Africans supplied only muscle is dead.",
            sourceLessonSlug: "ttc-black-rice-debate",
          },
          {
            prompt: "Why does the course refuse to let the Black Rice debate become the whole point?",
            options: [
              "Because the debate is boring",
              "Because whichever way the evidence reads, the people who carried the expertise were still enslaved, uncredited, and unpaid",
              "Because the debate was settled long ago",
              "Because the experts were all freed",
            ],
            correctIndex: 1,
            explanation:
              "The human fact does not move with the scholarship: expertise did not buy freedom, credit, or pay.",
            sourceLessonSlug: "ttc-black-rice-debate",
          },
          {
            prompt: "What skill is the Black Rice lesson really teaching?",
            options: [
              "How to grow rice",
              "How to separate what is settled from what is genuinely contested, and hold the difference honestly",
              "How to win an argument by picking the loudest side",
              "How to ignore historians who disagree",
            ],
            correctIndex: 1,
            explanation:
              "The point is a habit of mind: name the undisputed core, name the contested mechanism, and do not fake a verdict the evidence does not support.",
            sourceLessonSlug: "ttc-black-rice-debate",
          },
        ],
      },
    },
    // ──────────────── SECTION 3 · THE FIELDS: INDIGO AND CATTLE ────────────────
    {
      slug: "ttc-indigo",
      title: "8 · Indigo: the blue that needed African knowledge",
      section: "Section 3 · The fields: indigo and cattle",
      body: `After rice, South Carolina's second great money crop was **indigo**, the plant that makes a deep blue dye. In the 1700s, before synthetic dyes existed, blue was expensive, and European textile mills wanted all the indigo they could get. For a few decades indigo made Carolina planters a second fortune.

Here is the thing about indigo: growing the plant is the easy part. Turning it into dye is chemistry, and it is unforgiving. You cut the plants and pack them into vats of water to ferment. You have to judge, by smell and color and feel, the exact moment the fermentation is ready, then move the liquid to a second vat and beat it with paddles to force air in so the dye forms. Then you drain, settle, and dry the blue sludge into cakes. Misjudge any step, the temperature, the timing, the beating, and the whole batch is ruined. This is expert work.

The story you may have heard credits one teenager. **Eliza Lucas Pinckney**, the daughter of a planter, is often celebrated for establishing indigo as a Carolina crop in the 1740s. She was real, she was capable, and she did run the experiments. But look who is standing just outside the frame of that story.
- By her own letters, the first person sent to teach her the process was a hired indigo maker from the Caribbean island of **Montserrat**, Nicholas Cromwell, who (she believed) deliberately spoiled the dye to protect his home island's market.
- And the people doing the actual vat work, and carrying practical knowledge of the plant and the fermentation, were **enslaved**. The historian **Andrea Feeser** shows that many enslaved people in South Carolina came from West African and Caribbean regions where indigo was grown and dyed, and that their knowledge and labor were central to making the crop succeed (Feeser, 2013).

Indigo dyeing was not new to West Africa. It was old and sophisticated there: the Yoruba resist-dyeing tradition, the famous dye pits of Kano in what is now northern Nigeria (in use since the fifteenth century), and more. West Africans knew this blue intimately. You can read about those West African craft traditions in this platform's **Africa Before Colonization** course.

Now the honesty, the same discipline as the rice lesson. Making dye cakes for export is not identical to dyeing cloth, and the exact line of transmission (who taught which step to whom) is not fully documented, so we do not claim a clean, total transfer. What the record does show is this: the credited name on the Carolina indigo story is a young white woman, and beneath that name sits a stack of uncredited expertise, Caribbean and African and enslaved. The dye made the money. The people who knew the dye did not keep it.

:::reveal Who usually gets credit for South Carolina indigo, and what two sources of uncredited expertise does the scholarship put beneath that name? ||| Eliza Lucas Pinckney usually gets the credit. Beneath her sit a hired Caribbean (Montserrat) indigo maker, Nicholas Cromwell, and, most importantly, the enslaved people from West African and Caribbean indigo regions whose knowledge and labor (documented by Andrea Feeser) actually made the crop work.

## Sources
- Feeser, A. (2013). *Red, white, and black make blue: Indigo in the fabric of colonial South Carolina life*. University of Georgia Press.
- Carney, J. A., & Rosomoff, R. N. (2011). *In the shadow of slavery: Africa's botanical legacy in the Atlantic world*. University of California Press.`,
      recallContent: [
        {
          prompt: "Why was making indigo dye (not just growing the plant) expert work?",
          answer:
            "Turning the plant into dye is an unforgiving fermentation: you ferment the cut plants in vats, judge by smell and color the exact moment to move the liquid, beat it to add air so the dye forms, then drain and dry it into cakes. A misjudgment at any step ruins the whole batch.",
        },
        {
          prompt: "How does Andrea Feeser complicate the Eliza Lucas Pinckney indigo story?",
          answer:
            "Feeser (2013) shows that many enslaved people in South Carolina came from West African and Caribbean indigo regions, and that their knowledge and labor (along with a hired Caribbean expert) were central to the crop's success. The celebrated name sits atop uncredited enslaved and Caribbean expertise.",
        },
      ],
    },
    {
      slug: "ttc-cattle-herding",
      title: "9 · Cattle and the open range: a smaller, hedged claim",
      section: "Section 3 · The fields: indigo and cattle",
      body: `Before rice took over, colonial Carolina's first big export was not a crop at all. It was **cattle**, and hides, and salted beef, much of it shipped to feed the sugar islands of the Caribbean. Someone had to manage those herds in the open woods, and in early Carolina that someone was very often an enslaved African.

Peter Wood, in *Black Majority*, pointed out that the Carolina way of running cattle looked less like English farming and more like West African herding (Wood, 1974). English husbandry fenced animals into small enclosed fields. The Carolina "cow pen" system let cattle range freely in the woods, penned them at night for protection, burned the pasture seasonally to freshen the grass, and used herders and dogs to manage the animals across large distances. Several West African societies (among them cattle-keeping peoples like the Fulbe) practiced open-range herding of exactly this kind. Wood suggested that enslaved Africans, drawing on that background, were among the **earliest American cowboys**, and he even raised the possibility that the very word "cowboy" found early use in South Carolina.

This is a good place to practice a different move than the rice lesson. There the debate was loud and well documented. Here the claim is **smaller and thinner**, and the honest thing to do is to hedge it, out loud.
- Wood himself offered the cattle-and-cowboy idea as a **suggestion**, not a proven fact. Words like "it is even possible" are doing real work in his argument, and we keep them.
- The origins of open-range herding in the Americas are genuinely **contested**. The geographer **Terry Jordan** argued that American cattle ranching had **several** roots braided together, West African, but also Iberian (Spanish) and British Isles traditions, and that you cannot hand the whole thing to any one source (Jordan, 1993).
- The "cowboy" etymology in particular is a plausible suggestion, not a settled fact, and this course will not upgrade it into one.

So the honest statement is narrower than the exciting one, and still worth saying: enslaved Africans did much of the skilled cattle work in early Carolina, their herding methods resembled West African open-range practice more than English husbandry, and one respected historian thinks the American cowboy has partly African roots. That is a real, cited claim. "Black people invented the cowboy, full stop" is not; it flattens a contested question into a slogan, which is exactly the romantic overcorrection this course refuses. Naming the difference is the skill.

:::reveal What did Peter Wood suggest about enslaved Africans, cattle, and the word "cowboy," and why does the course present it as a hedge rather than a fact? ||| Wood (1974) suggested that enslaved Africans did much of the skilled open-range cattle work in early Carolina (free grazing, night penning, seasonal burning), that this resembled West African herding more than English husbandry, and that enslaved Africans were among the earliest American cowboys, possibly even the source of the word. The course hedges it because Wood offered it as a suggestion ("it is even possible"), and the origins of American ranching are contested (Terry Jordan (1993) traces West African, Iberian, and British roots), so a flat "Africans invented the cowboy" would overstate a thin, debated claim.

## Sources
- Wood, P. H. (1974). *Black majority: Negroes in colonial South Carolina from 1670 through the Stono Rebellion*. Knopf.
- Jordan, T. G. (1993). *North American cattle-ranching frontiers: Origins, diffusion, and differentiation*. University of New Mexico Press.`,
      recallContent: [
        {
          prompt: "How did the Carolina open-range 'cow pen' system resemble West African herding more than English farming?",
          answer:
            "It let cattle range freely in the woods, penned them at night for protection, burned pasture seasonally to freshen the grass, and used herders and dogs across large distances, closer to West African open-range pastoralism (as among cattle-keeping peoples like the Fulbe) than to enclosed English husbandry.",
        },
        {
          prompt: "Why is the cattle-and-cowboy claim a good example of hedging a thin claim?",
          answer:
            "Because Wood offered it as a suggestion, not proof ('it is even possible'), and the origins of American ranching are contested. Terry Jordan (1993) traced West African, Iberian, and British roots. The honest statement (enslaved Africans did skilled herding resembling West African practice, with a possibly African-rooted cowboy) is narrower than the slogan 'Africans invented the cowboy.'",
        },
      ],
    },
    {
      slug: "ttc-quiz-fields",
      title: "10 · Quiz: indigo and cattle",
      section: "Section 3 · The fields: indigo and cattle",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why was turning the indigo plant into dye considered expert work?",
            options: [
              "The plant was hard to grow but the dye made itself",
              "It is an unforgiving fermentation where misjudging the timing, temperature, or beating ruins the whole batch",
              "It required no special skill",
              "The dye was made in a single easy step",
            ],
            correctIndex: 1,
            explanation:
              "Fermenting, judging the exact moment, beating in air, then draining and drying the dye into cakes is chemistry that fails at any misstep.",
            sourceLessonSlug: "ttc-indigo",
          },
          {
            prompt: "What was indigo's role in the colonial South Carolina economy?",
            options: [
              "A worthless weed",
              "The colony's second great money crop after rice, producing a valuable blue dye for European textiles",
              "A food staple with no export value",
              "A crop grown only in Africa",
            ],
            correctIndex: 1,
            explanation:
              "Before synthetic dyes, blue was expensive; for a few decades indigo made Carolina planters a second fortune.",
            sourceLessonSlug: "ttc-indigo",
          },
          {
            prompt: "Who is usually credited with establishing indigo as a South Carolina crop in the 1740s?",
            options: ["Peter Wood", "Eliza Lucas Pinckney", "Nicholas Cromwell", "Judith Carney"],
            correctIndex: 1,
            explanation:
              "Eliza Lucas Pinckney is the celebrated name, but the scholarship shows uncredited Caribbean and enslaved African expertise beneath that story.",
            sourceLessonSlug: "ttc-indigo",
          },
          {
            prompt: "According to Andrea Feeser (2013), what does the popular Eliza Lucas Pinckney story leave out?",
            options: [
              "That indigo was never actually grown in South Carolina",
              "That many enslaved people came from West African and Caribbean indigo regions and their knowledge and labor were central to the crop",
              "That Europeans invented indigo dyeing",
              "That indigo required no labor",
            ],
            correctIndex: 1,
            explanation:
              "Feeser documents the enslaved and Caribbean expertise (including a hired Montserrat indigo maker) beneath the credited name.",
            sourceLessonSlug: "ttc-indigo",
          },
          {
            prompt: "Indigo dyeing in West Africa was:",
            options: [
              "Unknown until Europeans introduced it",
              "An old and sophisticated tradition, including the Yoruba and the centuries-old dye pits of Kano",
              "Practiced only after the slave trade ended",
              "A modern invention",
            ],
            correctIndex: 1,
            explanation:
              "West Africans knew indigo intimately, from Yoruba resist-dyeing to the Kano dye pits in use since the fifteenth century.",
            sourceLessonSlug: "ttc-indigo",
          },
          {
            prompt: "Why does the course NOT claim a clean, total transfer of indigo knowledge from Africa to Carolina?",
            options: [
              "Because West Africans knew nothing about indigo",
              "Because making dye cakes for export differs from dyeing cloth, and the exact line of transmission is not fully documented",
              "Because Eliza Lucas Pinckney invented indigo",
              "Because there is no evidence enslaved people worked with indigo",
            ],
            correctIndex: 1,
            explanation:
              "The course keeps the same discipline as the rice lesson: it credits documented enslaved expertise without overstating an undocumented one-to-one transfer.",
            sourceLessonSlug: "ttc-indigo",
          },
          {
            prompt: "What was colonial Carolina's first big export, before rice took over?",
            options: ["Cotton", "Cattle, hides, and salted beef", "Tobacco", "Sugar"],
            correctIndex: 1,
            explanation:
              "Cattle products, much of it shipped to feed the Caribbean sugar islands, came first, and enslaved Africans often managed the herds.",
            sourceLessonSlug: "ttc-cattle-herding",
          },
          {
            prompt: "How did the Carolina 'cow pen' system differ from English husbandry?",
            options: [
              "It fenced cattle into small enclosed fields",
              "It let cattle range freely in the woods, penned them at night, and burned pasture seasonally, resembling West African open-range herding",
              "It kept no cattle at all",
              "It used only European herding dogs",
            ],
            correctIndex: 1,
            explanation:
              "Open grazing, night penning, and seasonal burning looked more like West African pastoralism than enclosed English farming (Wood, 1974).",
            sourceLessonSlug: "ttc-cattle-herding",
          },
          {
            prompt: "What did Peter Wood suggest about the word 'cowboy'?",
            options: [
              "That it is definitely of English origin",
              "That it may have found early use in South Carolina, tied to enslaved African herders, though he offered this as a suggestion",
              "That it was invented in Hollywood",
              "That it has no connection to Carolina",
            ],
            correctIndex: 1,
            explanation:
              "Wood raised the cowboy idea as a possibility ('it is even possible'), not a proven fact, and the course keeps that hedge.",
            sourceLessonSlug: "ttc-cattle-herding",
          },
          {
            prompt: "What did the geographer Terry Jordan (1993) argue about the origins of American cattle ranching?",
            options: [
              "That it was purely West African",
              "That it was purely English",
              "That it had several braided roots, West African, Iberian, and British Isles, not a single source",
              "That cattle ranching had no history worth studying",
            ],
            correctIndex: 2,
            explanation:
              "Jordan's multiple-origins argument is why the course treats the herding claim as genuinely contested.",
            sourceLessonSlug: "ttc-cattle-herding",
          },
          {
            prompt: "Why does the course hedge the cattle claim instead of stating 'Africans invented the cowboy'?",
            options: [
              "Because enslaved Africans did no cattle work",
              "Because the claim is thinner and contested, and flattening it into a slogan is the romantic overcorrection the course refuses",
              "Because Wood never studied cattle",
              "Because the cowboy is unimportant",
            ],
            correctIndex: 1,
            explanation:
              "The honest statement (skilled enslaved herding resembling West African practice, with a possibly African-rooted cowboy) is real; the slogan overstates a debated question.",
            sourceLessonSlug: "ttc-cattle-herding",
          },
          {
            prompt: "What is the narrower, honest, cited version of the cattle claim?",
            options: [
              "Black people invented the cowboy, full stop",
              "Enslaved Africans did much of the skilled cattle work in early Carolina, their methods resembled West African open-range herding, and one historian sees partly African roots for the cowboy",
              "Europeans did all the herding",
              "Cattle were unimportant to Carolina",
            ],
            correctIndex: 1,
            explanation:
              "That statement is documented and hedged; it credits real expertise without claiming more than the contested evidence supports.",
            sourceLessonSlug: "ttc-cattle-herding",
          },
          {
            prompt: "What common thread links the indigo and cattle lessons to the rice lesson?",
            options: [
              "All three prove Europeans did the real work",
              "All three show credited names and slogans sitting atop uncredited enslaved expertise, taught with careful hedging where the record is thin",
              "All three are fully settled with no debate",
              "None of them involve enslaved people",
            ],
            correctIndex: 1,
            explanation:
              "Rice, indigo, and cattle all follow the pattern: real African and enslaved expertise, uncredited and unpaid, taught at the exact confidence the evidence allows.",
            sourceLessonSlug: "ttc-indigo",
          },
          {
            prompt: "In the indigo trade, who kept the wealth the dye produced?",
            options: [
              "The enslaved workers who knew the process",
              "The planters and merchants, while the enslaved experts remained property",
              "The dye was given away for free",
              "The Caribbean expert alone",
            ],
            correctIndex: 1,
            explanation:
              "As with rice, the value flowed to the owners; the people whose knowledge made the blue kept none of it. The through-line holds.",
            sourceLessonSlug: "ttc-indigo",
          },
        ],
      },
    },
  ],
};
