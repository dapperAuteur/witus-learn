import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 5 of 11: Cairo, Where Two Rivers Meet. RIVER-05.
// The hinge of the route: the Ohio meets the Mississippi, and the journey changes character
// completely. Plan: plans/56.

export const RIVER_CAIRO_THE_CONFLUENCE_COURSE: AuthoredCourse = {
  title: "Cairo: Where Two Rivers Meet",
  description:
    "At Cairo, Illinois the Ohio joins the Mississippi and the expedition becomes a different journey. What happens physically where two large rivers meet, why a town at the most strategically perfect location in the interior did not thrive, and how to read a place by what is no longer there.",
  lessons: [
    {
      slug: "what-a-confluence-does",
      title: "1 · What happens where two rivers meet",
      section: "Section 1 · The physical hinge",
      body: `A confluence is not two rivers politely adding together. It is a collision, and for a while afterwards the combined river remembers it.

## The visible seam

Two rivers usually arrive carrying different amounts of suspended sediment, at different temperatures, moving at different speeds. Water does not instantly blend. For a distance downstream you can often see a **visible line** where the two flows run side by side in the same channel, one darker or muddier than the other, before turbulence finally mixes them.

How far that seam persists depends on the season, the relative discharge of each river, and how much sediment each is carrying. In some conditions it is dramatic. In others you would not notice it.

## Why the water gets complicated

Where flows meet at an angle, the result is turbulence, eddies, and shifting shoals as the combined current drops what it can no longer carry. Sandbars form and move. The bed scours in some places and fills in others.

For a paddler this is one of the more demanding pieces of water on the route, and it comes at the moment the river also becomes much larger.

## Below the confluence, everything changes

The Ohio contributes a great deal of water. Below Cairo the river carries the drainage of a much larger area, and the character of the journey changes:

- **No more locks.** The Lower Mississippi has none. Instead there is volume and speed.
- **Fewer exits.** Levees, revetment and private land mean far fewer places to get off the water.
- **Bigger everything.** Wider channel, larger tows, longer distances between towns.

Just under 1,000 miles of that remain between here and the Gulf.

## The idea worth keeping

A confluence is where a system's scale changes. Everything the paddlers learned about reading water on the Wabash and the Ohio still applies, but the consequences of misreading it are larger.

That pattern shows up outside rivers. Systems that behave one way at small scale behave differently at large scale, and the transition point is where the accidents happen.

:::reveal Why can you sometimes see a line in the water below a confluence? ||| The two rivers arrive with different sediment loads, temperatures and speeds, and do not mix instantly, so they run side by side for a distance.

:::reveal What changes about the journey below Cairo? ||| No more locks, far fewer places to get off the water, and a much larger river carrying the drainage of a much larger area.`,
    },
    {
      slug: "the-perfect-location",
      title: "2 · The most perfect location, and what happened to it",
      section: "Section 2 · The town",
      body: `Look at a map of the interior of the United States with only the rivers on it. The point where the Ohio meets the Mississippi is one of the most strategically obvious locations on the continent.

Everything moving down the Ohio passes it. Everything moving up or down the Mississippi passes it. Before railways, and for a long time after, that was the definition of a place that should become a great city.

A city was founded there. It is called Cairo, Illinois.

## What actually happened

Cairo did not become a great city. It grew, had a period of real commercial importance, and then declined severely over the twentieth century. Its population today is a small fraction of its peak, and much of the built town is gone.

**This course is not going to give you a single tidy cause**, because the honest answer involves several at once, and because the specifics deserve better sourcing than a summary can give. What can be said in general terms is that the causes commonly discussed include the shift of freight from river to rail and then to road, repeated and severe flooding at a site hemmed by levees between two rivers, the loss of the economic functions that justified the location, and a long, documented history of racial violence and conflict that shaped who stayed and who left.

If you want to understand Cairo specifically, that is a research project, and it is a good one. Go to the primary record: census figures, local newspapers, court records, and the accounts of people who lived there.

## Why it belongs in this series

Because it breaks a lazy habit of thought.

Geography is not destiny. The most advantageous location in the interior did not produce a great city, and no amount of looking at the map explains why. **Places are made by decisions, by capital, by infrastructure choices, and by how people treat each other**, and those can override any amount of natural advantage.

That is a useful correction to every account of a river town that begins "situated at the confluence of…" and proceeds as though the rest followed automatically.

## What to look for in the dispatches

The team documents Cairo deliberately, and it is one of the marked critical stops. What is worth attending to is **absence**: what is not there, what used to be, and what replaced it.

Reading a place by its gaps is a skill. It is the same skill the Green Book route courses on this platform teach, and it transfers.

:::reveal Why is Cairo's location strategically obvious? ||| Everything moving on the Ohio and everything moving on the Mississippi passes that point, which before railways was the definition of a place that should become a great city.

:::reveal What does Cairo demonstrate about geography and destiny? ||| That advantage of position does not determine outcome. Places are made by decisions, capital, infrastructure and how people treat each other.`,
      recallContent: [
        {
          prompt: "Why does this course decline to give a single cause for Cairo's decline?",
          answer:
            "Because the honest answer involves several causes at once, and the specifics deserve better sourcing than a summary can give.",
        },
        {
          prompt: "What is the transferable skill in reading a place like Cairo?",
          answer:
            "Reading a place by what is absent: what is no longer there, and what replaced it.",
        },
      ],
    },
    {
      slug: "quiz-confluence",
      title: "3 · Knowledge check: the confluence",
      section: "Section 2 · The town",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why do two rivers sometimes remain visibly distinct below a confluence?",
            options: [
              "The channel divides into two beds that only rejoin much further downstream",
              "They arrive with different sediment loads, temperatures and speeds, and do not mix instantly",
              "One river always flows above the other because of differences in water density",
              "The banks funnel each flow to its own side until the channel widens enough to combine them",
            ],
            correctIndex: 1,
            explanation:
              "Mixing takes distance and turbulence, so the two flows can run side by side in one channel for a stretch. How far depends on season, relative discharge and sediment load.",
            sourceLessonSlug: "what-a-confluence-does",
          },
          {
            prompt: "What is the main navigational difference below Cairo?",
            options: [
              "There are no locks, but the river is far larger and offers fewer places to get off",
              "The current reverses direction seasonally as the Gulf's tidal influence extends upstream",
              "Commercial traffic ends, since tows cannot operate below the confluence",
              "The channel becomes shallower, so paddling requires constant attention to depth",
            ],
            correctIndex: 0,
            explanation:
              "The Lower Mississippi has no locks. What it has instead is volume, speed, larger traffic and levees and private land that limit where a small boat can land.",
            sourceLessonSlug: "what-a-confluence-does",
          },
          {
            prompt: "What does Cairo's history suggest about the relationship between geography and outcome?",
            options: [
              "Strategic position reliably produces growth once transport infrastructure arrives",
              "Position creates advantage, but decisions, capital, infrastructure and social conflict can override it",
              "River locations were doomed once railways offered a faster alternative for all freight",
              "Towns at confluences fail because flooding makes them permanently uninsurable",
            ],
            correctIndex: 1,
            explanation:
              "The most advantageous interior location did not produce a great city, and the map alone cannot explain why. That is the correction to any account that treats position as destiny.",
            sourceLessonSlug: "the-perfect-location",
          },
        ],
      },
    },
    {
      slug: "cairo-sources",
      title: "4 · Sources, and an open question",
      section: "Section 2 · The town",
      body: `## What this course deliberately did not do

It did not give you a causal account of Cairo's decline with percentages and dates attached. That was a choice, not an oversight.

A place like Cairo attracts confident summaries, and most of them are assembled from other summaries. The genuine account requires local records, and it requires care about a history that includes documented racial violence, which is not something to compress into a clause.

If this course had given you a tidy explanation, you would have remembered the explanation and not the fact that it was unsourced. That is exactly the failure the research course on this platform is about.

## An open question, stated properly

**How much of Cairo's population loss is attributable to each of the commonly cited causes, and over which decades?** We do not know, and this course does not claim to. Settling it would require census data by decade, local economic records, flood history and an honest treatment of the town's racial history.

That is a real research project, it is within reach of a determined person, and if you do it you will know something most people writing about Cairo do not.

## Sources

- U.S. Census Bureau. *Historical population data for Illinois places*. https://www.census.gov/

- U.S. Army Corps of Engineers, Memphis District. *Mississippi River and tributaries project*. https://www.mvm.usace.army.mil/

- U.S. Geological Survey. *Water Science School: rivers, streams and creeks*. https://www.usgs.gov/special-topics/water-science-school/science/rivers-stream-and-creeks

- Library of Congress. *Chronicling America* (historical newspapers, searchable by place). https://chroniclingamerica.loc.gov/

:::reveal Why did this course refuse to give a tidy causal account of Cairo's decline? ||| Because a tidy unsourced explanation is the thing a learner remembers, and the honest account needs local primary records and care with a history of racial violence.

:::reveal What would it actually take to answer the open question about Cairo? ||| Census data by decade, local economic records, flood history, and an honest treatment of the town's racial history.`,
    },
  ],
};
