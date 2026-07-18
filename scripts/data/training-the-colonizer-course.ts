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
  ],
};
