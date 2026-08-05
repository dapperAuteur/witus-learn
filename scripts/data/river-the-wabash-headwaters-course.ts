import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 2 of 11: The Wabash and What a Watershed Is. RIVER-02.
// Plan: plans/56-river-expedition-series.md. Series rule: the history is never the backdrop to the
// adventure; the adventure is the occasion for the history.

export const RIVER_WABASH_HEADWATERS_COURSE: AuthoredCourse = {
  title: "The Wabash, and What a Watershed Is",
  description:
    "The first stretch of the journey, and the idea that makes the whole thing legible: every drop of water in this river came from somewhere, and everything upstream arrives downstream. How rivers form, why they bend, and why the Wabash matters far beyond Indiana.",
  lessons: [
    {
      slug: "everything-upstream",
      title: "1 · Everything upstream arrives downstream",
      section: "Section 1 · How water gets organised",
      body: `Stand anywhere outdoors and rain falls on you. That water goes somewhere, and where it goes was decided long before you got there, by the shape of the land.

A **watershed** is the area of land that drains to one point. Every watershed is inside a bigger one. The stream behind a school drains to a creek, the creek to a river, the river to a bigger river, and eventually to an ocean. If you are standing in the Mississippi basin, water from under your feet can reach the Gulf of Mexico without ever leaving the system.

That single idea does more work in this series than anything else, because it converts distance into consequence. Something that enters the water in Indiana does not stay in Indiana.

## The divide

Between two watersheds is a line called a **divide**. It is often unremarkable to look at: a low rise, a field, sometimes a road. Rain landing a few metres either side of it ends up hundreds of miles apart.

Divides are worth noticing because they explain human geography. Portages, trade routes, borders and rail lines often follow them, because a divide is where you cross from one river system's world into another's.

## Why the paddlers' route is one system

The Wabash drains into the Ohio. The Ohio drains into the Mississippi. The Mississippi drains to the Gulf. So the entire journey happens **inside one nested watershed**, moving from a small drainage into progressively larger ones.

This is why the paddlers do not have to portage between river systems. They are not crossing divides. They are riding the drain.

## The consequence to hold onto

By the time they reach the Gulf, the water around their boat contains runoff from a large fraction of the continent: farmland, cities, industry, everything. They will paddle into the result of decisions made a thousand miles from where those decisions were made.

We come back to that at the end of the series. For now, hold the shape.

:::reveal What is a watershed? ||| The area of land that drains to a single point. Every watershed sits inside a larger one.

:::reveal Why does the expedition never need to portage between river systems? ||| The whole route is inside one nested watershed. They move from a small drainage into larger ones without crossing a divide.`,
    },
    {
      slug: "why-rivers-bend",
      title: "2 · Why rivers bend, and why they move",
      section: "Section 1 · How water gets organised",
      body: `A river running across flat ground does not stay straight, and the reason is worth understanding because it explains most of what the paddlers will see.

Water moving around even a slight curve travels **faster on the outside** of the bend and **slower on the inside**. Fast water carries material. Slow water drops it.

So the outside of a bend gets cut away, and the inside gets built up. The bend deepens. Over time the river writes bigger and bigger loops across its own floodplain. Those loops are **meanders**.

## What you can see from a boat

- **Cut bank.** The outside of a bend. Steep, often raw earth, sometimes with trees leaning or fallen in. This is the side being eaten.
- **Point bar.** The inside of the same bend. A gentle slope of sand or gravel being built up. This is where paddlers camp, because it is the only friendly edge.
- **Oxbow.** Eventually a loop gets so extreme that the river cuts across its own neck and abandons the loop, leaving a curved lake beside the channel. From the air the floodplain is covered in these, like discarded handwriting.

## A river is a verb

The important idea is that a river is not a fixed feature that happens to have a shape. **It is a process that is currently occupying a location.** Given time, and left alone, it moves.

That has consequences for everyone who builds near it, which is where the next courses in this series pick up: almost everything humans have done to this river is an attempt to make a moving thing hold still.

## Erosion and deposition are one system

It is tempting to treat erosion as damage and deposition as something else. They are the same process seen at two points. Material removed from a cut bank in Indiana becomes a sandbar in Kentucky and, eventually, part of a delta in Louisiana. The Mississippi's whole lower landscape is made of somewhere else.

:::reveal Why is the outside of a river bend steep and the inside gently sloped? ||| Water moves faster on the outside, so it cuts material away, and slower on the inside, so it drops material there.

:::reveal What is an oxbow lake, and what does it tell you? ||| An abandoned meander loop left behind when the river cut across its own neck. It tells you the river has moved and will move again.`,
      recallContent: [
        {
          prompt: "Name the two sides of a river bend and what happens on each.",
          answer:
            "The cut bank on the outside, where fast water erodes, and the point bar on the inside, where slow water deposits.",
        },
        {
          prompt: "Why is it useful to think of a river as a process rather than a feature?",
          answer:
            "Because it moves. Almost everything humans build on a river is an attempt to hold still something that does not naturally stay put.",
        },
      ],
    },
    {
      slug: "the-wabash-itself",
      title: "3 · The Wabash itself",
      section: "Section 2 · This particular river",
      body: `The Wabash rises in western Ohio, runs across Indiana, and for its lower stretch forms part of the boundary between Indiana and Illinois before joining the Ohio River.

For the paddlers, this is the **small-water stage**, and it is the only part of the journey that looks like the picture most people have in their heads when they hear "kayak trip". Both banks visible. Current readable. Hazards mostly natural: strainers, shallows, weather, the occasional low-head structure.

It is also the stage where they are learning. Not paddling technique, which they have, but the specific rhythm of an expedition: how long it takes to break camp, how far they actually go in a day rather than how far they planned to, how food and water and charging actually work when nobody is watching.

## A river as a border

Notice what the lower Wabash does: it becomes a **state line**.

This is common and worth thinking about. Rivers are used as borders because they are visible, continuous, and hard to argue about. They are also the worst possible borders, because they move. A river that shifts its channel takes the legal boundary with it, or does not, depending on the doctrine, and the resulting disputes can run for a century.

A border on a river is a promise of permanence written on the one feature guaranteed not to stay put.

## What to watch for in the dispatches

Early dispatches from this stage are the most useful in the whole trip for one reason: **this is where the plan meets reality for the first time.** Compare what the team predicted with what happened. Every later stage is shaped by what they learn here about their own pace.

Watch for the first equipment failure and the first changed plan. Both will happen on the Wabash, and both are worth more than a photograph of a sunset.

:::reveal Why do rivers make appealing but unreliable borders? ||| They are visible, continuous and hard to dispute, but they move, so a boundary defined by one is defined by something that will not stay put.

:::reveal What makes the first stage of an expedition disproportionately informative? ||| It is where the plan meets reality and the team learns their real pace, which reshapes every stage after it.`,
    },
    {
      slug: "quiz-watershed-and-wabash",
      title: "4 · Knowledge check: watershed and river",
      section: "Section 2 · This particular river",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does it mean that a watershed is 'nested'?",
            options: [
              "Every watershed drains into the ocean by way of a single named outlet",
              "Every watershed sits inside a larger one, so a creek's basin is part of a river's basin",
              "Watersheds overlap, so a single point of land can drain into two river systems at once",
              "Each watershed contains a fixed number of tributaries determined by its total area",
            ],
            correctIndex: 1,
            explanation:
              "Drainage areas contain one another, which is why water leaving a small stream ends up in progressively larger systems without crossing a divide.",
            sourceLessonSlug: "everything-upstream",
          },
          {
            prompt: "A paddler looking for a campsite should head for which side of a bend?",
            options: [
              "The outside, where the deeper channel gives easier landing in any water level",
              "The inside, where slower water deposits material and builds a gentle bar",
              "Whichever side has the taller trees, since they indicate more stable ground",
              "The outside, because the cut bank provides shelter from prevailing winds",
            ],
            correctIndex: 1,
            explanation:
              "The inside of a bend is the point bar, a gentle slope of deposited sand or gravel. The outside is the cut bank: steep, raw and actively eroding.",
            sourceLessonSlug: "why-rivers-bend",
          },
          {
            prompt: "What does a floodplain full of oxbow lakes tell you?",
            options: [
              "The river has repeatedly abandoned meander loops, so its channel has moved a great deal",
              "The area floods so rarely that standing water persists between rain events",
              "The river was straightened by engineering and the lakes are leftover excavations",
              "The underlying rock is impermeable, so water collects in whatever hollows exist",
            ],
            correctIndex: 0,
            explanation:
              "An oxbow forms when a river cuts across the neck of a loop and leaves it behind. A plain full of them is a record of a channel that has wandered widely.",
            sourceLessonSlug: "why-rivers-bend",
          },
          {
            prompt: "Why is a river a problematic choice for a legal boundary?",
            options: [
              "Rivers are difficult to survey accurately without modern instruments",
              "Rivers move, so a boundary defined by one is defined by something that does not stay put",
              "Rivers are usually navigable, which makes exclusive jurisdiction impossible to claim",
              "Rivers change width seasonally, so the boundary is wider in spring than in autumn",
            ],
            correctIndex: 1,
            explanation:
              "Channels migrate through erosion and deposition, and whether the boundary moves with them depends on legal doctrine, which is how century-long disputes start.",
            sourceLessonSlug: "the-wabash-itself",
          },
        ],
      },
    },
    {
      slug: "wabash-sources",
      title: "5 · What we know, and how we know it",
      section: "Section 2 · This particular river",
      body: `A short closing lesson, and a habit this series repeats: before moving downstream, look at where the claims came from.

## What this course asserted

- Water drains through nested basins to the Gulf. Physical geography, uncontroversial, observable on any map.
- Rivers erode outer bends and deposit on inner ones. Standard fluvial geomorphology, and visible from a boat.
- The Wabash rises in Ohio, crosses Indiana, and forms part of the Indiana and Illinois boundary before joining the Ohio. Geographic fact, checkable against any authoritative map.

## What this course did not assert

Notice what is missing: no length in miles, no discharge figures, no dates for channel changes. Those numbers exist and are knowable, but they vary by measurement method and by year, and a course that recites them without sourcing them is doing the thing the research course warns about.

If you want them, go to the agency that measures them rather than to a summary. Stream gauge data is public.

## Sources

- U.S. Geological Survey. *Water Science School: watersheds and drainage basins*. https://www.usgs.gov/special-topics/water-science-school/science/watersheds-and-drainage-basins

- U.S. Geological Survey. *National Water Dashboard* (real-time streamflow). https://dashboard.waterdata.usgs.gov/

- National Park Service. *Rivers and geomorphology teaching resources*. https://www.nps.gov/subjects/rivers/index.htm

:::reveal Why did this course avoid giving the river's length and discharge in numbers? ||| Those values vary by measurement method and year, and are owned by the agencies that measure them. Reciting them without a source is exactly the habit to avoid.

:::reveal Where would you go for real streamflow data rather than a summary? ||| The agency that collects it. USGS stream gauge data is public and updated continuously.`,
      recallContent: [
        {
          prompt: "State the core idea of this course in one sentence.",
          answer:
            "Everything upstream arrives downstream, because drainage basins nest inside one another all the way to the sea.",
        },
      ],
    },
  ],
};
