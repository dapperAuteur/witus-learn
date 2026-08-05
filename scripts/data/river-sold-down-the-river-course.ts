import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 6 of 11: Sold Down the River. RIVER-06.
//
// The heaviest course in the series and the one with the largest sourcing burden. Plan: plans/56 §2(a).
//
// AUTHORING RULES for this file:
// 1. This is about a trade in human beings, on the exact water the expedition is paddling. The
//    paddlers do not appear in the teaching lessons at all. Putting them there would make the
//    history a backdrop for the adventure, which is the one thing the series rule forbids.
// 2. Numbers are given only where a source supports them, and are attributed in the sources lesson.
//    Precision about scale is a form of respect here; invented precision is the opposite.

export const RIVER_SOLD_DOWN_THE_RIVER_COURSE: AuthoredCourse = {
  title: "Sold Down the River",
  description:
    "The phrase is not a metaphor. For decades this water carried enslaved people from the Upper South to the markets of Natchez and New Orleans, and to be sent down it meant separation from family, almost always permanently. What the domestic slave trade was, how the river served it, and why the ordinary phrase carries what it does.",
  lessons: [
    {
      slug: "the-phrase",
      title: "1 · The phrase means what it says",
      section: "Section 1 · The trade",
      body: `People use "sold down the river" to mean betrayed. The phrase comes from this river, and its original meaning was literal.

**Down** meant transfer from north to south: from the Upper South, where the enslaved population was large and the demand for labour had fallen, to the lower Mississippi, where cotton and sugar had created enormous demand. The Mississippi was the route.

To be sold down the river meant being put on a boat, or walked overland in a coffle, and carried to a market in a place you had never been, hundreds of miles from anyone you knew.

## Why it was feared specifically

Conditions on the lower Mississippi were understood at the time to be far harsher: brutal labour, high mortality from disease, heat. The Deep South had a reputation among enslaved people, and it was accurate.

But the fear was not principally about labour conditions. **It was about permanence of separation.** A sale downriver ended relationships. Parents and children, husbands and wives, siblings. Distance and the absence of any legal standing meant that in practice such a separation was final.

That is what the phrase carries, and it is why it survived into ordinary speech as a word for the deepest kind of betrayal.

## The scale

The domestic trade was not incidental to slavery in this period. It was a major industry.

**Between 1830 and 1840 alone, nearly 250,000 people were transported across state lines.** An enslaved child faced roughly a **thirty percent chance of being sold downriver** during their lifetime.

Sit with that second figure. It means the threat was not an abstraction or a rare catastrophe. It was a standing probability that shaped every family, every relationship and every decision, permanently and for generations.

## What this course will not do

It will not dramatise. There is no need. The documented facts of the trade are as affecting as anything that could be written about them, and adding intensity to them would be a way of making the writer present in something that is not about the writer.

:::reveal What did "down" originally mean in "sold down the river"? ||| Transfer from the Upper South to the lower Mississippi, where demand for labour on cotton and sugar plantations was enormous.

:::reveal Why was being sold downriver feared above other outcomes? ||| Because it ended relationships permanently. Distance and the absence of legal standing made separation from family final.`,
    },
    {
      slug: "how-the-river-served-it",
      title: "2 · How the river served the trade",
      section: "Section 1 · The trade",
      body: `The trade needed to move large numbers of people long distances, cheaply and reliably. The river did that, which is the same reason it moved every other commodity.

## Downriver, to market

Traders brought people south from the Ohio River region and the Upper South to ports along the Mississippi's banks, with markets at **Vicksburg, Natchez** and other river cities where buyers gathered to negotiate purchases.

**New Orleans**, at the river's end, was the largest slave market in the country.

Alongside the well-known markets, a great deal of buying and selling happened in far smaller settings than the notorious pens: on boats, at landings, in private arrangements. The trade was not confined to the places that later got historical markers.

## The infrastructure argument, seen honestly

Earlier in this series we described the river as a machine for moving freight, and said the efficiency argument that built it is a real argument.

Hold that thought against this course. The same properties that make a river good at moving grain, coal and steel made it good at moving people who were being treated as cargo. **The efficiency was not neutral.** It served whatever the economy asked of it, and for decades that included this.

That is not an argument against river transport. It is a caution about a habit of mind: infrastructure is often described as though it has purposes of its own, when it has only the purposes of whoever controls it.

## The steamboat

The river's most celebrated technology belongs to this story too. Steamboats carried enslaved people to market, and they also, occasionally, carried people escaping. The same vessels, the same water, for opposite purposes, depending on who had power over whom on any given trip.

## The places the paddlers will pass

Natchez and New Orleans are both on the route, and both are marked as critical stops for documentation. The paddlers will pass the places where these markets stood.

The instruction they were given is to document them plainly: a steady frame of the actual place, the coordinates, the date. No staging, no performance of feeling. The record does the work.

:::reveal Which river cities served as major markets in this trade? ||| Vicksburg, Natchez and others along the banks, with New Orleans at the river's end as the largest slave market in the country.

:::reveal What is the caution about infrastructure this lesson draws? ||| Infrastructure is often described as though it has purposes of its own. It has only the purposes of whoever controls it, and the same efficiency served whatever the economy asked.`,
      recallContent: [
        {
          prompt: "Roughly how many people were transported across state lines between 1830 and 1840?",
          answer: "Nearly 250,000, in the domestic trade.",
        },
        {
          prompt: "Why does this course say the river's efficiency was not neutral?",
          answer:
            "The same properties that made it good at moving bulk goods made it good at moving people treated as cargo. It served whatever the economy asked of it.",
        },
      ],
    },
    {
      slug: "quiz-the-trade",
      title: "3 · Knowledge check: the trade",
      section: "Section 1 · The trade",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "In the original sense of the phrase, what did 'down the river' describe?",
            options: [
              "Transfer from the Upper South to the lower Mississippi, where labour demand was enormous",
              "Being sent to work on the boats themselves rather than on land",
              "Escape attempts made by floating downstream toward the Gulf and open water",
              "Removal from a household in a city to an outlying agricultural property nearby",
            ],
            correctIndex: 0,
            explanation:
              "It is a direction of travel on this specific river, from a region of falling labour demand to one of enormous demand created by cotton and sugar.",
            sourceLessonSlug: "the-phrase",
          },
          {
            prompt: "What did an enslaved child face, in terms of the likelihood of being sold downriver?",
            options: [
              "A risk confined to households facing bankruptcy or the death of an owner",
              "Roughly a thirty percent chance of being sold downriver during their lifetime",
              "A near certainty, since almost all children were sold before reaching adulthood",
              "A negligible risk, because the trade dealt overwhelmingly in adult labourers",
            ],
            correctIndex: 1,
            explanation:
              "Roughly one in three, which means the threat was a standing probability shaping every family rather than a rare catastrophe.",
            sourceLessonSlug: "the-phrase",
          },
          {
            prompt: "Which was the largest slave market in the country?",
            options: [
              "Vicksburg, at the midpoint of the Mississippi's commercial stretch",
              "Natchez, where the best-known trading grounds were located",
              "New Orleans, at the river's end",
              "Memphis, where overland routes met the river traffic",
            ],
            correctIndex: 2,
            explanation:
              "New Orleans at the mouth of the river was the largest. Natchez and Vicksburg were significant markets, and a great deal of trading also happened in far smaller settings.",
            sourceLessonSlug: "how-the-river-served-it",
          },
          {
            prompt:
              "What point does this course make by setting the trade against the river's role as freight infrastructure?",
            options: [
              "That river transport should be understood as historically tainted and treated accordingly",
              "That the efficiency serving bulk goods served whatever the economy asked, including this",
              "That the trade would have been impossible without the later navigation improvements",
              "That commercial and human cargo were kept deliberately separate by the traders involved",
            ],
            correctIndex: 1,
            explanation:
              "The caution is about a habit of mind: infrastructure gets described as though it has purposes of its own, when it has only the purposes of whoever controls it.",
            sourceLessonSlug: "how-the-river-served-it",
          },
        ],
      },
    },
    {
      slug: "sold-down-the-river-sources",
      title: "4 · Sources, and how to go further",
      section: "Section 2 · Sources and further work",
      body: `This course made specific factual claims about a subject where precision matters, so here is where each came from and what remains open.

## What is sourced

The origin and literal meaning of the phrase, the direction and economics of the trade, the markets at Vicksburg, Natchez and New Orleans, New Orleans as the largest market, the roughly 250,000 people transported across state lines between 1830 and 1840, and the roughly thirty percent lifetime probability for an enslaved child, all come from the references below.

## What is harder, and why

**Totals are contested and always will be.** The trade was a business, and businesses keep records for their own purposes, not for later accounting. Figures come from a combination of census data, ship manifests, bills of sale, tax records and court cases, each with its own gaps. Different scholars using different methods reach different numbers, and any single figure is an estimate.

That is not a reason to avoid numbers. It is a reason to attribute them and to avoid false precision.

**Individual experience is under-recorded by design.** The people this happened to were, with limited exceptions, prevented from leaving written records. Much of what is known about the experience comes from narratives written by people who escaped, from testimony gathered long afterwards, and from the records of the people doing the selling. Each of those is a partial view, and the last one is a hostile one.

When you read this history, keep asking whose account you are reading.

## Where to go next

The single most valuable step is reading the accounts of people who were there. Slave narratives are available in full text and are primary sources of the first order.

If you want the economic structure, follow the trade's own paper: manifests, sales records, court cases.

## Sources

- Mississippi Encyclopedia. *Sold down the river*. https://mississippiencyclopedia.org/entries/sold-down-the-river/

- Mississippi Encyclopedia. *Slave trade*. https://mississippiencyclopedia.org/entries/slave-trade/

- *Documenting the American South: North American Slave Narratives*, University of North Carolina. https://docsouth.unc.edu/neh/

- Library of Congress. *Born in Slavery: Slave Narratives from the Federal Writers' Project, 1936 to 1938*. https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/

- National Park Service. *Slavery and the domestic slave trade*. https://www.nps.gov/subjects/undergroundrailroad/index.htm

:::reveal Why will totals for the domestic trade always be contested? ||| The records were kept for business purposes, not for later accounting, and come from census data, manifests, bills of sale and court cases, each with its own gaps.

:::reveal Whose accounts survive best from this period, and why does that matter? ||| The records of the people doing the selling, because the people it happened to were largely prevented from leaving written records. It matters because the fullest surviving view is a hostile one.`,
      recallContent: [
        {
          prompt: "What is the most valuable next step for someone who wants to go deeper?",
          answer:
            "Reading the accounts of people who were there. Slave narratives are available in full text and are primary sources of the first order.",
        },
      ],
    },
  ],
};
