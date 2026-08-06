import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 10 of 11: What the River Carries. RIVER-10.
//
// The science capstone, and the single best structural idea in the series: the paddlers travel PAST
// the farmland and INTO the hypoxic zone that farmland causes. Cause and effect roughly 1,100 miles
// apart, experienced in sequence. Plan: plans/56.

export const RIVER_THE_DEAD_ZONE_COURSE: AuthoredCourse = {
  title: "What the River Carries",
  description:
    "The expedition ends by paddling into the consequence of everything it paddled past. Each summer a low-oxygen zone forms in the Gulf where the Mississippi arrives, driven by nutrients gathered across the whole basin. How it works, why it is nobody's fault in particular, and what that makes it.",
  lessons: [
    {
      slug: "the-shape-of-the-problem",
      title: "1 · Cause and effect, a thousand miles apart",
      section: "Section 1 · How it works",
      body: `Return to the idea from the second course in this series: **everything upstream arrives downstream.**

The expedition has spent months demonstrating it. Farmland in Indiana and Illinois. Cities. Industry. Feedlots. Treatment plants. Every one of them beside water that drains, eventually, to one place.

At the end of that drain is the Gulf of Mexico. And each year, where the Mississippi arrives, a zone of water forms in which there is too little dissolved oxygen for most marine life to survive.

## The mechanism

It runs in four steps, and each is ordinary on its own.

**One. Nutrients enter the water.** Nitrogen and phosphorus, principally from fertiliser applied to farmland and washed off by rain, and also from urban runoff, lawns and treated sewage discharge. No single source is remarkable.

**Two. The river gathers and delivers them.** The Mississippi and its tributaries carry excessive levels of these nutrients downstream, concentrating the output of an enormous basin into one outflow.

**Three. Algae bloom.** Nutrients in warm, sunlit coastal water do exactly what fertiliser is designed to do: they cause rapid plant growth. The bloom itself is not the problem.

**Four. Decomposition consumes the oxygen.** The bloom dies, sinks, and is decomposed by bacteria. Decomposition uses dissolved oxygen. Where the water is layered so that the deeper layer does not mix with the surface, the oxygen down there is consumed and not replaced.

The result is water that cannot support most animals that need to breathe in it. Things that can move, leave. Things that cannot, die.

## Why it is seasonal

It forms every year, driven by the timing of fertiliser application, spring rainfall, and the warming that strengthens the layering. Storms that mix the water column can break it up.

## The structure worth noticing

There is no villain in that four-step chain. There is a fertiliser decision made by a farmer who needs a yield, a drainage system built to make land productive, a treatment plant meeting its permit, and a lawn.

**Each is reasonable. The sum is not.** That is not a story about bad people, and treating it as one is the fastest way to misunderstand it.

:::reveal Why does an algae bloom lower the oxygen in the water? ||| The bloom dies and sinks, and the bacteria decomposing it consume dissolved oxygen. Where layering stops mixing, that oxygen is not replaced.

:::reveal Why does this course say there is no villain in the chain? ||| Every step is an ordinary, defensible decision: a fertiliser application, a drainage system, a permitted discharge, a lawn. The sum is the problem, not any one of them.`,
    },
    {
      slug: "problems-with-no-author",
      title: "2 · Problems with no author",
      section: "Section 2 · Why it is hard",
      body: `The hypoxic zone belongs to a category worth being able to recognise, because once you can, you see it constantly.

**Nobody caused it, and everybody did.** No individual contribution is significant. The aggregate is severe. Nobody can fix it by acting alone, and everyone acting alone is exactly how it is produced.

## Why this is genuinely hard, not just neglected

**The cause and the consequence are separated by distance.** A farmer in Iowa does not experience the Gulf. There is no feedback: the people making the decisions do not encounter the result, and the people encountering the result did not make the decisions.

**They are separated by jurisdiction.** The basin spans many states. No single state can solve it, and a state that acts alone bears the cost while sharing the benefit with every state that did not.

**The contributions are diffuse.** A discharge pipe can be regulated because it is a point. Runoff from a large number of fields is not a point, and the tools that work on pipes do not work on landscapes.

**The activity causing it is producing food.** This is the part that makes glib framings collapse. The nutrients are applied because they raise yields. Any serious response has to reckon with that rather than wish it away.

## What has been tried

There is a federal and state task force established in the 1990s specifically to address this, which tells you two things: it has been recognised as a serious problem for decades, and it has not been solved.

That combination is characteristic of this class of problem, and it is worth sitting with rather than skipping past.

## The transferable pattern

Learn to ask, of any problem: **is there an author?** If the harm is produced by the aggregate of individually reasonable actions, separated from consequence by distance, time or jurisdiction, then looking for someone to blame will not just fail, it will actively mislead you about what would work.

This is the most portable idea in the entire series, and the river is a uniquely good way to see it, because you can travel from cause to effect at four miles an hour and watch the whole chain.

:::reveal Why does regulating a discharge pipe not work for agricultural runoff? ||| A pipe is a point source and can be permitted and measured. Runoff from a landscape is diffuse, and the tools built for points do not apply to it.

:::reveal What is the test for a problem with no author? ||| Whether the harm comes from the aggregate of individually reasonable actions, separated from their consequence by distance, time or jurisdiction.`,
      recallContent: [
        {
          prompt: "Name the four things that make this problem structurally hard.",
          answer:
            "Cause separated from consequence by distance, jurisdiction spanning many states, diffuse rather than point sources, and the fact that the activity causing it produces food.",
        },
        {
          prompt: "Why does looking for someone to blame actively mislead here?",
          answer:
            "Because the harm is the sum of reasonable individual actions. Blame points at people whose behaviour was normal and away from the structure that aggregates it.",
        },
      ],
    },
    {
      slug: "quiz-what-the-river-carries",
      title: "3 · Knowledge check: what the river carries",
      section: "Section 2 · Why it is hard",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "What directly causes the oxygen loss in the hypoxic zone?",
            options: [
              "The nutrients themselves consume oxygen as they dissolve into the seawater",
              "Bacteria decomposing dead algae consume dissolved oxygen faster than it is replaced",
              "Warm river water holds less oxygen and displaces the colder Gulf water beneath it",
              "Sediment carried downstream blocks the sunlight that surface plants need to produce oxygen",
            ],
            correctIndex: 1,
            explanation:
              "The bloom is not the problem; its decomposition is. Where layering prevents mixing, the oxygen consumed in the deeper layer is not replenished from the surface.",
            sourceLessonSlug: "the-shape-of-the-problem",
          },
          {
            prompt: "Why can no single state solve this problem alone?",
            options: [
              "Federal law reserves authority over interstate waterways to the national government",
              "The basin spans many states, so one acting alone bears the cost and shares the benefit",
              "The zone forms in international waters beyond any individual state's jurisdiction",
              "Agricultural regulation is set entirely at county level in most of the affected states",
            ],
            correctIndex: 1,
            explanation:
              "Contributions arrive from across the basin, so unilateral action means paying the full cost for a fraction of the effect. That asymmetry is why coordination is required and difficult.",
            sourceLessonSlug: "problems-with-no-author",
          },
          {
            prompt: "What makes agricultural runoff harder to regulate than an industrial discharge?",
            options: [
              "Runoff is diffuse across a landscape rather than emerging from a measurable point",
              "Agricultural operations are exempt from environmental permitting in every basin state",
              "The nutrients in runoff are chemically different from those in industrial effluent",
              "Runoff occurs only during storms, when monitoring equipment cannot operate safely",
            ],
            correctIndex: 0,
            explanation:
              "Permitting works by identifying a point, measuring what leaves it and setting a limit. A landscape has no point, so the whole regulatory toolkit built for pipes does not transfer.",
            sourceLessonSlug: "problems-with-no-author",
          },
          {
            prompt: "What defines a 'problem with no author'?",
            options: [
              "Nobody has yet been able to determine which industry is principally responsible",
              "Harm produced by the sum of individually reasonable actions, separated from its consequence",
              "A harm that occurs naturally and is worsened only marginally by human activity",
              "A problem where the responsible parties are known but cannot be legally compelled to act",
            ],
            correctIndex: 1,
            explanation:
              "The defining feature is that each contribution is normal and defensible while the aggregate is severe, with distance, time or jurisdiction breaking the feedback between action and result.",
            sourceLessonSlug: "problems-with-no-author",
          },
        ],
      },
    },
    {
      slug: "dead-zone-sources",
      title: "4 · Sources, and the numbers this course withheld",
      section: "Section 2 · Why it is hard",
      body: `## The numbers, and why they are not here

You may have expected a figure for the size of the zone. There is one, it is measured, and it is reported annually.

**It is deliberately not in this course**, for a reason that is itself part of the lesson: **the measured extent varies substantially from year to year**, driven by rainfall, nutrient loading and storms. A course that stated one year's figure as though it were the fact would be doing exactly what the research course on this platform warns against, and it would be out of date within a year of publication.

If you want the number, go to the agency that measures it. It is published every summer, with its methodology, by the organisations below. **Read it with its year attached.**

That habit, refusing to freeze a moving value into a sentence, is worth more than the number itself.

## What is well established

The four-step mechanism, the principal nutrient sources, the seasonal formation, the role of layering, and the existence of a long-running federal and state task force. All are supported by the references below.

## What is genuinely debated

**How to fix it.** There is broad agreement on the mechanism and much less on the response: how much reduction is required, over what timeframe, through what mix of voluntary practice, incentive and regulation, and who bears the cost. Reasonable people disagree, and an account that presents a single obvious answer is not being straight with you.

## Sources

- National Oceanic and Atmospheric Administration. *Dead zone in the Gulf of Mexico*. https://oceantoday.noaa.gov/deadzonegulf/

- U.S. Environmental Protection Agency. *Mississippi River / Gulf of Mexico Hypoxia Task Force*. https://www.epa.gov/ms-htf

- U.S. Geological Survey. *Nutrients in the Mississippi River basin*. https://www.usgs.gov/mission-areas/water-resources/science/nutrients-and-eutrophication

- U.S. Environmental Protection Agency. *Nutrient pollution: the sources and solutions*. https://www.epa.gov/nutrientpollution/sources-and-solutions

:::reveal Why does this course refuse to state the size of the hypoxic zone? ||| It varies substantially year to year with rainfall, nutrient loading and storms. Stating one year's figure as the fact would be out of date within a year.

:::reveal What is broadly agreed about the dead zone, and what is not? ||| The mechanism and the sources are well established. How to fix it, at what cost, on what timeframe and by what mix of voluntary and regulatory means, is genuinely disputed.`,
    },
  ],
};
