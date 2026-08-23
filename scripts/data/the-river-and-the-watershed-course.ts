import type { AuthoredCourse } from "./authored-course";

// The River and the Watershed. Course 3 of the Science & Math track (SCI-03).
//
// Outline: plans/future-courses/sciences/outlines/03-the-river-and-the-watershed.md
//
// WHY IT EXISTS: eleven River Expedition courses teach what the Mississippi basin MEANS, and none
// of them teaches how the river works. This is the physical half.
//
// FOUR RULES THIS FILE FOLLOWS AND THE NEXT AUTHOR SHOULD NOT BREAK:
//
// 1. DO NOT DUPLICATE river-the-dead-zone ("What the River Carries"). That course is four lessons
//    and is a SYSTEMS-AND-ETHICS course: cause and effect a thousand miles apart, problems with no
//    author. Lesson 9 here teaches the MECHANISM; that course keeps the moral argument. Cross-link,
//    never restate.
// 2. THE COURSE MUST STAND ALONE IF THE KAYAK TRIP GOES SIDEWAYS. Lesson 12 is the only lesson with
//    an external dependency and it is written to work with whatever arrives, including very little.
//    A paddler with a dead phone must not be able to break a published course.
// 3. NO PRODUCED NUMBERS. The learner interprets a hydrograph and never computes a discharge. That
//    is the Wave 1 line, and it is why lessons 3 and 4 are written as reading exercises.
// 4. LIVE FIGURES GET A CHECK, NOT A GUESS. The hypoxic zone is measured annually and varies a lot;
//    the basin's drainage share is quoted differently by different authorities. Both are registered
//    in src/lib/research-checks.ts rather than printed from memory.

export const THE_RIVER_AND_THE_WATERSHED_COURSE: AuthoredCourse = {
  title: "The River and the Watershed",
  description:
    "The physical half of the river story: where the water comes from, what it carries, what it does to the land, what lives in it, and how you would tell whether it is healthy. Built alongside a real paddle from Indiana to the Gulf, and usable on whatever creek is nearest to you.",
  lessons: [
    // ── Part 1 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "you-live-in-a-watershed",
      title: "1 · You live in a watershed",
      section: "Part 1 · Where the water is",
      body: `Stand anywhere outside. Rain that falls where you are standing goes somewhere, and where it goes was decided long before you got there.

A **watershed** is all the land that drains to one place. Every point on land is in one. They nest: your street drains to a creek, the creek to a river, the river to a bigger river, and eventually to an ocean. The line separating one watershed from the next is a **divide**, and it usually runs along high ground.

The Mississippi basin drains a very large share of the continental United States, gathering water from tributaries reaching from the Rockies to the Appalachians. Rain falling on a field in Indiana and rain falling in Montana can end up in the same water.

## Why this is the first lesson

Because it reframes the rest. A river is not a thing that exists in its channel. **A river is the drain of an area**, and almost everything interesting about it, how much water, how muddy, how warm, what is dissolved in it, is decided by what happens on the land that drains to it rather than in the channel itself.

That is why lesson 10 can trace nitrogen from an Indiana cornfield to the Gulf of Mexico without anything mysterious happening. It is what a watershed is for.

## Find yours now

This is the one homework item to do before continuing, and it takes two minutes. Find the watershed you live in. The U.S. Geological Survey and the Environmental Protection Agency both publish tools that will name it from an address or a map click.

Write down its name. Every remaining lesson asks you to apply itself to that watershed, and the capstone is a description of it.

:::reveal Two houses sit a hundred metres apart on either side of a low ridge. Their gutters drain to rivers that reach the sea two thousand kilometres apart. What is the ridge? ||| A drainage divide. Divides are defined by where water goes rather than by how dramatic the terrain is, so a barely noticeable rise can separate two enormous basins.

## Sources

U.S. Geological Survey. (n.d.). *Watersheds and drainage basins*. Water Science School. https://www.usgs.gov/special-topics/water-science-school

U.S. Environmental Protection Agency. (n.d.). *How's My Waterway*. https://mywaterway.epa.gov/`,
    },
    {
      slug: "where-a-rivers-water-comes-from",
      title: "2 · Where a river's water comes from",
      section: "Part 1 · Where the water is",
      recallContent: [
        {
          prompt: "What is a watershed, and what separates one from the next?",
          answer: "All the land that drains to one place. A divide separates them, usually along high ground, and it can be a barely noticeable rise.",
        },
      ],
      body: `Rain falls on the watershed. What happens next splits several ways, and the split is what determines whether a river floods, runs steady, or dries up.

- **Interception.** Some never reaches the ground; it lands on leaves and evaporates.
- **Infiltration.** Some soaks in. How much depends on the soil, how dry it already was, and whether the surface is a forest floor or a car park.
- **Runoff.** Some flows over the surface to the channel. This is the fast route, and it arrives within hours.
- **Groundwater.** Some infiltrated water keeps going down to the water table, then moves slowly sideways, and can take weeks or years to reach the river.

## The question that makes it click

**Why does a creek keep flowing a month after the last rain?**

Because of the last item. Where the water table sits above the channel bottom, groundwater drains continuously into the river. That steady contribution is called **baseflow**, and it is what a river runs on between storms.

This is why a drought shows up in a stream long after it shows up in the sky, and why a river can still be falling weeks after the rain returns. The fast route responds in hours; the slow route responds in seasons.

## What paving does

Cover a watershed in roads and roofs and you remove the infiltration step. The same rainfall now arrives at the channel faster, all at once, and less of it goes into storage.

Two consequences, and they seem contradictory until you see the mechanism:

- **Higher, faster flood peaks**, because the water arrives together instead of spread out.
- **Lower flow between storms**, because less water went into the ground to feed baseflow.

An urbanised stream is flashier at both ends. Nothing about the total rainfall changed.

:::reveal A town paves a large share of its watershed and residents report both worse flooding AND a creek that now runs dry in summer. Is that a contradiction? ||| No, it is one mechanism producing both. Paving stops infiltration, so storm water reaches the channel fast and all at once (higher flood peaks) and little of it enters the ground to feed baseflow (lower flow between storms).

## Sources

U.S. Geological Survey. (n.d.). *The water cycle and streamflow*. Water Science School. https://www.usgs.gov/special-topics/water-science-school

U.S. Geological Survey. (n.d.). *Effects of urban development on floods*. https://pubs.usgs.gov/`,
    },
    {
      slug: "discharge-the-one-number",
      title: "3 · Discharge: the one number that describes a river",
      section: "Part 1 · Where the water is",
      recallContent: [
        {
          prompt: "Why does a creek keep flowing a month after the last rain?",
          answer: "Baseflow. Where the water table sits above the channel, groundwater drains steadily into the river between storms.",
        },
      ],
      body: `If you can have only one number about a river, take **discharge**: the volume of water passing a point per unit of time.

Conceptually it is the width of the flow, times its depth, times how fast it is moving. Widen the channel and the same discharge flows more slowly; narrow it and the same water speeds up. That relationship explains a great deal of river behavior, including why a river that looks placid in a wide reach turns dangerous in a narrow one carrying exactly the same water.

**You will not calculate one in this course.** You will read them, which is the skill that transfers.

## The hydrograph

A **hydrograph** plots discharge against time, and it is the single most useful picture in river science. Its shape tells you about the watershed rather than about the weather:

| Feature of the shape | What it says about the watershed |
|---|---|
| A steep rising limb | Water arrives fast: steep, paved, or already saturated |
| A high sharp peak | Little storage, little to slow the water down |
| A long slow falling limb | Substantial groundwater feeding the river afterward |
| A high floor between storms | Strong baseflow |
| A floor near zero | Little groundwater contribution, or heavy withdrawal |

Two watersheds receiving identical rain can produce completely different hydrographs. The rain is the input; the shape is the watershed's answer.

## Where to find real ones

The U.S. Geological Survey operates stream gauges across the country and publishes their data, much of it updated continuously. You can look at the river nearest you, right now, and see today's discharge against its history.

That is worth doing at least once. Public environmental data at that resolution is unusual, and most people never learn it exists.

:::reveal Two neighbouring watersheds get the same storm. One hydrograph spikes sharply then drops to almost nothing; the other rises gently and stays elevated for days. What differs between them? ||| How much water infiltrates and is stored. The flashy one sheds water at the surface, so it arrives fast and there is little groundwater left to sustain flow afterward. The gentle one absorbs and releases slowly, which is what a forested or highly permeable watershed does.

## Sources

U.S. Geological Survey. (n.d.). *National Water Information System: Current conditions*. https://waterdata.usgs.gov/nwis

U.S. Geological Survey. (n.d.). *How streamflow is measured*. Water Science School. https://www.usgs.gov/special-topics/water-science-school`,
    },
    {
      slug: "the-lie-inside-100-year-flood",
      title: "4 · Floods, and the lie inside 100-year flood",
      section: "Part 1 · Where the water is",
      recallContent: [
        {
          prompt: "What does the SHAPE of a hydrograph tell you that the rainfall total does not?",
          answer: "How the watershed responds: how fast water arrives, how much is stored, and how much groundwater sustains the river afterward.",
        },
      ],
      body: `A "100-year flood" is not a flood that happens every hundred years. It is a flood with roughly a **1 percent chance of being equalled or exceeded in any given year**.

That is a completely different statement, and the difference has consequences measured in houses.

## Why the phrase does so much damage

If it were a schedule, then having one this year would mean you are safe for a while. Because it is a probability, having one this year changes nothing about next year. Two in consecutive years is unremarkable: unlikely in the way that rolling the same number twice is unlikely, not impossible in the way that a schedule would make it.

This is Course 1's territory arriving in waders. **A probability stated as a period gets read as a promise.** The engineering community has argued for years about the phrasing, and the phrase persists because it is short.

## Where the numbers come from, and why they move

A recurrence interval is estimated from the gauge record: how often has a flow of that size actually occurred? That makes it an estimate with real uncertainty, and it has two specific weaknesses worth knowing.

**Short records.** Estimating a 1-percent-per-year event from a few decades of data is extrapolation. You are describing a size of flood you may never have observed.

**A changing watershed.** The estimate assumes the past is a guide to the future. If the watershed has been paved (lesson 2), or the climate is shifting the size and timing of storms, then the record describes a river that no longer exists. The number can be perfectly computed and still wrong, because the assumption underneath it moved.

So a floodplain map is not a fact about the ground. It is a **model output**, built from a record, under an assumption of stability, and it is worth knowing which of those three the disagreement is about when people disagree about it.

:::reveal A town has two "100-year floods" three years apart. A resident concludes the maps are worthless. What is the more careful conclusion? ||| That two such events close together is unlikely but entirely consistent with the map being right, since each year carries an independent 1 percent chance. It is ALSO consistent with the estimate being outdated because the watershed or the climate changed. The event count alone cannot distinguish those, which is why you look at the record and at what has changed upstream.

## Sources

Federal Emergency Management Agency. (n.d.). *Flood zones and the 1-percent-annual-chance flood*. https://www.fema.gov/flood-maps

U.S. Geological Survey. (n.d.). *The 100-year flood: What does it mean?* https://www.usgs.gov/special-topics/water-science-school`,
    },
    {
      slug: "check-where-the-water-is",
      title: "Part 1 knowledge check · Where the water is",
      section: "Part 1 · Where the water is",
      body: `A graded check on the idea the rest of the course rests on: a river is the drain of an area. It covers the four routes rain takes, why a creek still runs a month after the last storm, what the shape of a hydrograph reports, and what a 100-year flood actually promises. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a watershed?",
            options: [
              "The stretch of river between one gauging station and the next one down",
              "All the land that drains to one place",
              "The strip of land alongside a channel that floods in an average year",
              "The underground layer that supplies a river with its steady flow",
            ],
            correctIndex: 1,
            explanation:
              "All the land that drains to one place, and every point on land is in one.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "What is a divide?",
            options: [
              "The point where a tributary joins the river it feeds into",
              "The boundary between the channel and the floodplain beside it",
              "The line separating one watershed from the next",
              "The depth at which surface water gives way to groundwater",
            ],
            correctIndex: 2,
            explanation:
              "The line separating one watershed from the next, and it usually runs along high ground.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "What does the lesson mean by saying watersheds nest?",
            options: [
              "Your street drains to a creek, the creek to a river, and on to an ocean",
              "That several rivers can share a single divide along their upper reaches",
              "That a watershed's boundary shifts as the channel moves across its floor",
              "That groundwater and surface water follow separate boundaries underground",
            ],
            correctIndex: 0,
            explanation:
              "Your street drains to a creek, the creek to a river, the river to a bigger river, and eventually to an ocean. Every scale is a watershed.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "How far do the Mississippi basin's tributaries reach?",
            options: [
              "From the Great Lakes south to the Gulf, along the eastern half only",
              "From the Rockies to the Appalachians",
              "Across the whole of the continental United States without exception",
              "Only through the states that the main channel itself passes through",
            ],
            correctIndex: 1,
            explanation:
              "The basin drains a very large share of the continental United States, gathering water from tributaries reaching from the Rockies to the Appalachians. Rain falling in Indiana and rain falling in Montana can end up in the same water.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "What does the course mean by saying a river is the drain of an area?",
            options: [
              "That its flow is set by what happens on the land, not in the channel",
              "That every river eventually empties into a larger body of water",
              "That the channel carries away more water than the land can absorb",
              "That a river's course was cut by drainage engineers rather than by nature",
            ],
            correctIndex: 0,
            explanation:
              "A river is not a thing that exists in its channel. How much water, how muddy, how warm, and what is dissolved in it are all decided by what happens on the land that drains to it.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "Which of these does the lesson say the land, rather than the channel, decides?",
            options: [
              "Only the total volume of water the river carries in a year",
              "Only the shape of the channel and the path it takes across the ground",
              "How muddy the river is",
              "Only the species of fish that are able to live in the water",
            ],
            correctIndex: 2,
            explanation:
              "How much water, how muddy, how warm, and what is dissolved in it. Almost everything interesting about a river is decided upstream of the channel.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "Why can nitrogen travel from an Indiana cornfield to the Gulf of Mexico?",
            options: [
              "Because nitrogen dissolves more readily than most agricultural chemicals",
              "Because the Gulf's own currents draw water inward from the river mouth",
              "Because the Mississippi is deep enough to carry material without settling",
              "Because that is what a watershed is for",
            ],
            correctIndex: 3,
            explanation:
              "Nothing mysterious has to happen. A watershed connects every point on its land to one outlet, which is exactly the mechanism lesson 10 traces.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "Which two agencies does the lesson name for finding the watershed you live in?",
            options: [
              "The National Weather Service and the Army Corps of Engineers",
              "The Geological Survey and the Environmental Protection Agency",
              "The Department of Agriculture and the Fish and Wildlife Service",
              "The Federal Emergency Management Agency and your state's water board",
            ],
            correctIndex: 1,
            explanation:
              "The U.S. Geological Survey and the Environmental Protection Agency both publish tools that will name your watershed from an address or a map click.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "Why does the lesson ask you to write your watershed's name down before continuing?",
            options: [
              "Because the tools that name it are not always available later on",
              "Because the name is needed to look up the gauge record for your river",
              "Every remaining lesson asks you to apply itself to it",
              "Because the divides that define it are redrawn from time to time",
            ],
            correctIndex: 2,
            explanation:
              "Every remaining lesson asks you to apply itself to that watershed, and the capstone is a description of it.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "Two houses sit a hundred meters apart either side of a low ridge, and their gutters drain to rivers reaching the sea two thousand kilometers apart. What is the ridge?",
            options: [
              "A drainage divide",
              "A levee, built to keep the two drainage systems from mixing",
              "A terrace left behind by a river that has since moved elsewhere",
              "A groundwater boundary, which need not follow the surface at all",
            ],
            correctIndex: 0,
            explanation:
              "A divide is defined by where water goes rather than by how dramatic the terrain is, so a barely noticeable rise can separate two enormous basins.",
            sourceLessonSlug: "you-live-in-a-watershed",
          },
          {
            prompt: "What is interception, among the routes rain takes?",
            options: [
              "Rain that soaks into the soil before it can reach the channel",
              "Rain that runs across the surface and arrives within hours",
              "Rain that lands on leaves and evaporates",
              "Rain caught behind a dam before it can continue downstream",
            ],
            correctIndex: 2,
            explanation:
              "Some rain never reaches the ground at all: it lands on leaves and evaporates back into the air.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "What determines how much rain infiltrates?",
            options: [
              "The soil, how dry it already was, and what the surface is",
              "The total amount of rain that falls over the whole of the storm",
              "The distance from the point of rainfall to the nearest channel",
              "The season, since infiltration only happens during the growing months",
            ],
            correctIndex: 0,
            explanation:
              "How much soaks in depends on the soil, how dry it already was, and whether the surface is a forest floor or a car park.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "How fast does runoff reach the channel?",
            options: [
              "Within minutes, since surface water moves at the speed of the rainfall",
              "Within hours",
              "Within weeks, once the soil above the channel has become saturated",
              "Within seasons, which is why a drought takes so long to show up",
            ],
            correctIndex: 1,
            explanation:
              "Runoff is the fast route: water flowing over the surface arrives at the channel within hours.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "How long can groundwater take to reach the river?",
            options: [
              "Hours, the same as runoff, once the water table has been reached",
              "Days, since it moves sideways faster than it moved downward",
              "Weeks or years",
              "It never does; groundwater and river water are separate systems",
            ],
            correctIndex: 2,
            explanation:
              "Infiltrated water keeps going down to the water table, then moves slowly sideways, and can take weeks or years to reach the river.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "Why does a creek keep flowing a month after the last rain?",
            options: [
              "Because upstream reservoirs release water to maintain a minimum flow",
              "Because runoff from the highest parts of the watershed is still arriving",
              "Because the channel itself holds enough water to last several weeks",
              "Baseflow",
            ],
            correctIndex: 3,
            explanation:
              "Where the water table sits above the channel bottom, groundwater drains continuously into the river. That steady contribution is baseflow, and it is what a river runs on between storms.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "Why does a drought show up in a stream long after it shows up in the sky?",
            options: [
              "The slow route responds in seasons",
              "Because stream gauges average their readings over several weeks",
              "Because rivers are fed mostly by upstream lakes, which drain gradually",
              "Because evaporation from the channel takes months to become visible",
            ],
            correctIndex: 0,
            explanation:
              "The fast route responds in hours and the slow route responds in seasons, which is also why a river can still be falling weeks after the rain has returned.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "What does paving a watershed remove?",
            options: [
              "The interception step, since there are no longer leaves to catch rain",
              "The infiltration step",
              "The runoff step, since paved surfaces channel water underground",
              "The evaporation step, since paved surfaces hold no standing water",
            ],
            correctIndex: 1,
            explanation:
              "Cover a watershed in roads and roofs and the water can no longer soak in. The same rainfall then arrives at the channel faster, all at once, and less of it goes into storage.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "Why does paving raise flood peaks?",
            options: [
              "Because more rain falls over a paved surface than over an open one",
              "Because paved channels are narrower and carry less water safely",
              "The water arrives together instead of spread out",
              "Because paving warms the water, and warm water flows more quickly",
            ],
            correctIndex: 2,
            explanation:
              "Nothing about the total rainfall changed. The water simply arrives at the channel all at once rather than spread out over time.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "Why does paving also lower the flow between storms?",
            options: [
              "Because paved watersheds lose more water to evaporation each summer",
              "Because urban withdrawals take more water out of the channel directly",
              "Because the faster flood peaks scour the channel deeper each time",
              "Less water went into the ground to feed baseflow",
            ],
            correctIndex: 3,
            explanation:
              "Baseflow comes from infiltrated water, so removing infiltration removes what sustains the river between storms. The lesson calls an urbanized stream flashier at both ends.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "Residents report both worse flooding and a creek that now runs dry in summer after their watershed was paved. Is that a contradiction?",
            options: [
              "No, it is one mechanism producing both",
              "Yes, since less infiltration cannot both raise and lower the flow",
              "Yes, unless a second change upstream is also responsible for one of them",
              "No, but only because two separate changes happened at the same time",
            ],
            correctIndex: 0,
            explanation:
              "Paving stops infiltration, so storm water reaches the channel fast and all at once, and little of it enters the ground to feed baseflow. One mechanism, both symptoms.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "What is discharge?",
            options: [
              "The depth of water measured at the deepest point of the channel",
              "The volume of water passing a point per unit of time",
              "The speed at which the surface of the river is moving downstream",
              "The total volume a river delivers to the sea over a full year",
            ],
            correctIndex: 1,
            explanation:
              "If you can have only one number about a river, take discharge. Conceptually it is the width of the flow, times its depth, times how fast it is moving.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "What happens to the same discharge when a channel narrows?",
            options: [
              "The water slows, since a narrow channel offers more resistance",
              "The discharge falls, since less water fits through the gap",
              "The water speeds up",
              "Nothing changes, since discharge is independent of the channel's shape",
            ],
            correctIndex: 2,
            explanation:
              "Widen the channel and the same discharge flows more slowly; narrow it and the same water speeds up. That is why a river that looks placid in a wide reach turns dangerous in a narrow one carrying exactly the same water.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "What does this course expect you to do with discharge figures?",
            options: [
              "Read them",
              "Calculate them from width, depth, and velocity measured in the field",
              "Convert them between the units different agencies publish them in",
              "Estimate them from rainfall totals when no gauge record exists",
            ],
            correctIndex: 0,
            explanation:
              "You will not calculate one in this course. You will read them, which is the skill that transfers.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "What does a hydrograph plot?",
            options: [
              "Rainfall against time across the whole area of the watershed",
              "Water depth against distance along the length of the channel",
              "Discharge against time",
              "The height of the water table against the level of the river",
            ],
            correctIndex: 2,
            explanation:
              "A hydrograph plots discharge against time, and the lesson calls it the single most useful picture in river science.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "What does the shape of a hydrograph tell you about?",
            options: [
              "The weather, in more detail than a rain gauge can record",
              "The watershed",
              "The channel's own dimensions at the point of the gauge",
              "The season, since each one produces its own characteristic curve",
            ],
            correctIndex: 1,
            explanation:
              "The rain is the input; the shape is the watershed's answer. Two watersheds receiving identical rain can produce completely different hydrographs.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "What does a steep rising limb on a hydrograph say?",
            options: [
              "That the storm delivered an unusually large total volume of rain",
              "That the channel narrows sharply just upstream of the gauge",
              "That groundwater is contributing strongly to the flow",
              "Water arrives fast: steep, paved, or already saturated",
            ],
            correctIndex: 3,
            explanation:
              "A steep rising limb means the water got to the channel quickly, which points at a steep, paved, or already saturated watershed.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "What does a long slow falling limb indicate?",
            options: [
              "Substantial groundwater feeding the river afterward",
              "That the storm itself continued for several days after the peak",
              "That the channel is wide enough to hold water back as it drains",
              "That an upstream reservoir is releasing water at a controlled rate",
            ],
            correctIndex: 0,
            explanation:
              "A long slow recession means water that infiltrated during the storm is still draining into the river, which is groundwater doing its work.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "What does a hydrograph floor near zero between storms suggest?",
            options: [
              "That the gauge stops recording below a certain minimum discharge",
              "That the watershed receives almost no rain outside of storm events",
              "Little groundwater contribution, or heavy withdrawal",
              "That the channel has been straightened, so water passes through faster",
            ],
            correctIndex: 2,
            explanation:
              "A high floor between storms means strong baseflow. A floor near zero means little groundwater contribution, or heavy withdrawal from the river.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "Where can you see real discharge data for the river nearest you?",
            options: [
              "In the annual reports that state water boards publish each spring",
              "From the Geological Survey's stream gauges, much of it continuous",
              "By requesting it from the agency that operates the nearest dam",
              "Only in the research literature, since raw gauge data is not published",
            ],
            correctIndex: 1,
            explanation:
              "The U.S. Geological Survey operates stream gauges across the country and publishes their data, much of it updated continuously, so you can see today's discharge against its history.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "Why does the lesson say looking at gauge data once is worth doing?",
            options: [
              "Because the data is removed from the public record after a few years",
              "Because a reader cannot interpret a hydrograph without seeing a real one",
              "Because the nearest gauge may be the only one covering your watershed",
              "Public data at that resolution is unusual, and most people never learn it exists",
            ],
            correctIndex: 3,
            explanation:
              "Public environmental data at that resolution is unusual, and most people never learn it exists.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "Two neighboring watersheds get the same storm. One hydrograph spikes then drops to almost nothing; the other rises gently and stays elevated for days. What differs?",
            options: [
              "How much water infiltrates and is stored",
              "How much rain actually fell on each of the two watersheds",
              "The width of the channel at the point each gauge is installed",
              "How far each gauge sits from the upstream edge of its watershed",
            ],
            correctIndex: 0,
            explanation:
              "The flashy one sheds water at the surface, so it arrives fast and there is little groundwater left to sustain flow afterward. The gentle one absorbs and releases slowly, which is what a forested or highly permeable watershed does.",
            sourceLessonSlug: "discharge-the-one-number",
          },
          {
            prompt: "What is a 100-year flood?",
            options: [
              "A flood of a size the river reaches once in each century on average",
              "A flood with roughly a 1 percent chance in any given year",
              "The largest flood in the hundred years of record behind the estimate",
              "A flood large enough to exceed the design of century-old structures",
            ],
            correctIndex: 1,
            explanation:
              "Roughly a 1 percent chance of being equalled or exceeded in any given year. That is a completely different statement from a schedule, and the difference has consequences measured in houses.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "If you have a 100-year flood this year, what does that tell you about next year?",
            options: [
              "That the risk is lower, since the river has just discharged its extreme",
              "That the risk is higher, since flood years tend to arrive in clusters",
              "Nothing",
              "That the estimate behind the map must be revised downward",
            ],
            correctIndex: 2,
            explanation:
              "Because it is a probability rather than a schedule, having one this year changes nothing about next year. Two in consecutive years is unremarkable in the way that rolling the same number twice is unremarkable.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "What does the lesson say the phrase 100-year flood does to a probability?",
            options: [
              "A probability stated as a period gets read as a promise",
              "It rounds the probability to a figure the public can remember easily",
              "It hides the uncertainty attached to the underlying estimate",
              "It converts an annual chance into a lifetime chance without saying so",
            ],
            correctIndex: 0,
            explanation:
              "Stating a probability as a period invites people to read it as a schedule. The engineering community has argued about the phrasing for years, and it persists because it is short.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "Where does a recurrence interval come from?",
            options: [
              "A model of how much rain the watershed's climate can deliver at once",
              "The gauge record",
              "The design standard the local flood defenses were built to meet",
              "A survey of the elevation of the land on either side of the channel",
            ],
            correctIndex: 1,
            explanation:
              "It is estimated from the gauge record: how often has a flow of that size actually occurred. That makes it an estimate with real uncertainty.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "What is the problem with estimating a 1-percent-per-year event from a few decades of data?",
            options: [
              "The record is too short to establish the channel's exact dimensions",
              "Older gauges measured discharge less accurately than modern ones do",
              "It is extrapolation",
              "The oldest readings were taken before the watershed was fully settled",
            ],
            correctIndex: 2,
            explanation:
              "You are describing a size of flood you may never have observed. That is extrapolation, and it is the first of the estimate's two specific weaknesses.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "What assumption does a recurrence interval make about the watershed?",
            options: [
              "That the past is a guide to the future",
              "That the channel has the same shape everywhere along its length",
              "That no part of the watershed drains into a neighboring basin",
              "That the gauge has been positioned where flow is representative",
            ],
            correctIndex: 0,
            explanation:
              "It assumes stability. If the watershed has been paved, or the climate is shifting the size and timing of storms, the record describes a river that no longer exists.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "How can a recurrence interval be perfectly computed and still wrong?",
            options: [
              "Because the arithmetic depends on which statistical method is chosen",
              "Because the gauge itself drifts out of calibration over decades",
              "Because the estimate is rounded before it reaches the published map",
              "The assumption underneath it moved",
            ],
            correctIndex: 3,
            explanation:
              "The computation can be flawless and the answer still wrong, because the stability the estimate assumes no longer holds. That is a different kind of error from a mistake in the arithmetic.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "What is a floodplain map, according to this lesson?",
            options: [
              "A model output",
              "A survey of the ground, recording where water has actually stood",
              "A legal boundary, set by the agency that regulates building there",
              "A forecast of where the next flood is expected to reach",
            ],
            correctIndex: 0,
            explanation:
              "Not a fact about the ground. It is a model output, built from a record, under an assumption of stability, and it is worth knowing which of those three a disagreement is actually about.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "A town has two 100-year floods three years apart. A resident concludes the maps are worthless. What is the more careful conclusion?",
            options: [
              "That the maps must be recalculated with the two new events included",
              "That the river's behavior has changed and the old record no longer applies",
              "That two such events close together is consistent with the map being right",
              "That the events were not really 100-year floods if two occurred so soon",
            ],
            correctIndex: 2,
            explanation:
              "It is unlikely but entirely consistent with the map being right, since each year carries an independent 1 percent chance. It is also consistent with the estimate being outdated. The event count alone cannot distinguish those, which is why you look at the record and at what has changed upstream.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "Why do engineers keep using the phrase 100-year flood despite the confusion?",
            options: [
              "Because federal flood maps are legally required to use that wording",
              "Because it is short",
              "Because no alternative phrasing has ever been proposed for it",
              "Because the public understands it better than a percentage would be",
            ],
            correctIndex: 1,
            explanation:
              "The engineering community has argued for years about the phrasing, and the phrase persists because it is short.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "What makes two 100-year floods in consecutive years unremarkable rather than impossible?",
            options: [
              "Each year carries the same independent chance",
              "The estimate is a range, and both events could fall inside its lower end",
              "Floods cluster because a saturated watershed responds harder to the next storm",
              "The interval refers to an average across many rivers rather than to one",
            ],
            correctIndex: 0,
            explanation:
              "Unlikely in the way that rolling the same number twice is unlikely, not impossible in the way that a schedule would make it. That distinction is the whole lesson.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
        ],
      },
    },
    // ── Part 2 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-river-shapes-the-land",
      title: "5 · The river shapes the land",
      section: "Part 2 · What the river does",
      recallContent: [
        {
          prompt: "What does a 100-year flood actually mean?",
          answer: "A flood with roughly a 1 percent chance of being equalled or exceeded in any given year. It is a probability, not a schedule.",
        },
      ],
      body: `Rivers move earth. Over enough time they are the dominant force shaping most landscapes, and the evidence is visible from a boat.

**Erosion** happens where water moves fast enough to pick material up. **Deposition** happens where it slows enough to drop it. Every feature below is those two processes in a particular arrangement.

## What to look for

**Meanders.** Rivers on gentle gradients rarely run straight. Water moving around a bend travels faster on the outside, so it erodes there, and slower on the inside, so it deposits there.

- The **cut bank** is the outside of a bend: steep, often undercut, actively eroding.
- The **point bar** is the inside: a gentle slope of sand or gravel, actively building.

The bend therefore migrates sideways over time, and the whole pattern of bends migrates down-valley. **A meandering river is not a shape. It is a process caught mid-motion.**

**Oxbow lakes.** Keep migrating and a bend eventually loops so far that the river cuts across its own neck, abandons the loop, and leaves a crescent of standing water. Every oxbow is a piece of former channel.

**Braided reaches.** Where a river carries more sediment than it can move, it splits into shifting strands around temporary bars.

**Floodplains.** The flat ground either side is not a coincidence of geology. The river built it, out of material deposited during floods, over a very long time. That is worth stating plainly: **a floodplain is the part of the river that is dry most of the time.**

## For anyone on the water

These are the features a paddler can photograph without any equipment. Cut banks and point bars in particular are unmistakable once you know the rule, and they tell you which way the channel is moving.

:::reveal Standing on a river bank you see a steep, raw, undercut face with exposed roots. What is happening here, and what should the opposite bank look like? ||| You are on a cut bank, the outside of a bend, where faster water is eroding. The opposite bank should be a point bar: a gentle slope of deposited sand or gravel where the slower inside water dropped its load.

## Sources

U.S. Geological Survey. (n.d.). *Rivers, erosion, and deposition*. https://www.usgs.gov/

National Park Service. (n.d.). *Fluvial geomorphology and river processes*. https://www.nps.gov/subjects/rivers/`,
    },
    {
      slug: "sediment-and-what-a-dam-does-to-it",
      title: "6 · Sediment, and what a dam does to it",
      section: "Part 2 · What the river does",
      recallContent: [
        {
          prompt: "What is the difference between a cut bank and a point bar?",
          answer: "The cut bank is the eroding outside of a bend where water moves faster; the point bar is the building inside where it moves slower and deposits.",
        },
      ],
      body: `Rivers carry solid material as well as water: **sediment load**, ranging from clay particles that stay suspended for hundreds of miles to boulders that move only in extreme floods.

Carrying capacity depends steeply on velocity. Slow the water and it drops its load, which is why deposition happens in exactly the places where flow slows: inside bends, floodplains during floods, and above all where a river meets standing water.

## What a dam does

A reservoir is standing water. A river entering one slows abruptly and drops nearly everything it was carrying. Three consequences follow, and they play out on very different timescales:

1. **The reservoir fills with sediment.** Slowly, but inexorably, and it reduces the storage the dam was built for. Every reservoir has a finite life.
2. **The water leaving is sediment-starved.** Clear water still has energy to carry a load and nothing to carry, so it picks material up from the bed and banks below the dam. The channel downstream erodes, sometimes for a long way.
3. **The sediment stops arriving where it used to go.** That matters most at the very end of the system.

## The delta

A river delta exists because a river deposits more material than the sea can remove. It is a balance, maintained by continuous delivery.

Interrupt the supply and the balance breaks. Compaction and subsidence continue, sea level does what it does, and the wetlands that depended on regular sediment delivery are no longer being resupplied. Land loss follows.

**This is a systems lesson in a single fact: a structure built for flood control and navigation on the upper river participates in land loss a thousand miles downstream, through a mechanism nobody designed and everybody can now describe.**

That is a feedback: one change to the surface producing changes in other systems. Hold it, because lesson 10 is the same shape with a different substance.

:::reveal Clear water released below a dam erodes the channel downstream. Why does removing sediment from water make it MORE erosive rather than less? ||| Because a river's capacity to carry sediment depends on its energy, not on what it is currently carrying. Water that arrives already loaded has spent that capacity; water arriving clear has full capacity and nothing in it, so it picks up material from the bed and banks instead.

## Sources

U.S. Geological Survey. (n.d.). *Sediment transport and reservoir sedimentation*. https://www.usgs.gov/

U.S. Army Corps of Engineers. (n.d.). *Sediment management*. https://www.usace.army.mil/`,
    },
    {
      slug: "the-engineered-river",
      title: "7 · The engineered river",
      section: "Part 2 · What the river does",
      recallContent: [
        {
          prompt: "Name two downstream consequences of a dam trapping sediment.",
          answer: "The channel below erodes because sediment-starved water has capacity and nothing to carry, and the delta stops being resupplied, so land is lost.",
        },
      ],
      body: `The lower Mississippi is not a natural river. It is an enormous piece of infrastructure that happens to be made of water, and the eleven River Expedition courses walk its human history. This lesson is what the engineering does physically.

| Structure | Purpose | Physical consequence |
|---|---|---|
| Levee | Keep flood water out of the floodplain | Confines flow, so the same water runs deeper and faster and is sent downstream rather than spread |
| Revetment | Stop the bank eroding | Freezes a meander in place, halting the migration in lesson 5 |
| Cutoff | Shorten the channel for navigation | Steepens the gradient, speeding the flow |
| Lock and dam | Maintain navigable depth | Creates slack water, traps sediment (lesson 6) |
| Dredging | Keep the channel deep | Continuous, expensive, and never finished |

## The bargain

Read the right-hand column as a whole and the trade becomes clear. Levees protect the land behind them and send the water somewhere else, faster. Revetments protect a bank and stop the floodplain being rebuilt. Every structure works, and every structure moves a cost rather than removing it.

That is not an argument against engineering the river. Enormous numbers of people live and work in the floodplain, and the engineering is why. It is an argument for **being able to say where the cost went**, which is a different skill from being for or against.

A river confined by levees also deposits its sediment inside the levees rather than across the floodplain, so the bed can rise over time relative to the surrounding land. Where that happens, the levees must rise too, and the consequence of a failure grows.

## Where this meets the history

The River Expedition course *Locks, Dams and Barges* covers who built this, who paid, and who was moved. This lesson is the physics of the same structures. Take both: the engineering decisions are unreadable without the physical consequences, and the physical consequences are inert without knowing who bore them.

:::reveal Levees protect the floodplain from flooding. Why can they make flooding worse somewhere else? ||| Because the water is not removed, only confined. Flow that would have spread across a wide floodplain, slowing and depositing, is instead held in a narrow channel where it runs deeper and faster, and it arrives downstream sooner and in greater volume.

## Sources

U.S. Army Corps of Engineers. (n.d.). *Mississippi River and Tributaries Project*. https://www.mvd.usace.army.mil/

U.S. Geological Survey. (n.d.). *Channel modification and river response*. https://www.usgs.gov/`,
    },
    {
      slug: "check-what-the-river-does",
      title: "Part 2 knowledge check · What the river does",
      section: "Part 2 · What the river does",
      body: `A graded check on erosion and deposition as two processes that explain every feature you can see from a boat, on what a dam does to sediment a thousand miles downstream, and on the bargain every piece of river engineering makes. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where does erosion happen?",
            options: [
              "Where the channel narrows enough to force the water against one bank",
              "Where water moves fast enough to pick material up",
              "Wherever the bank is made of material softer than the surrounding rock",
              "Only during floods, when the river reaches beyond its usual channel",
            ],
            correctIndex: 1,
            explanation:
              "Erosion happens where water moves fast enough to pick material up, and deposition where it slows enough to drop it. Every feature in the lesson is those two processes in a particular arrangement.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "Where does deposition happen?",
            options: [
              "Wherever the channel bed is flat enough to hold the material in place",
              "Only where a river meets standing water at the end of its course",
              "Where water slows enough to drop its load",
              "Wherever vegetation on the bank is dense enough to trap the sediment",
            ],
            correctIndex: 2,
            explanation:
              "Deposition happens where the flow slows enough to drop what it is carrying. It is the mirror of erosion and the other half of every river feature.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "Where does water travel faster around a bend?",
            options: [
              "On the outside",
              "On the inside, where the path around the bend is shorter",
              "Along the bed, since the surface is slowed by contact with the air",
              "Evenly across the channel, since the whole flow turns together",
            ],
            correctIndex: 0,
            explanation:
              "Water moving around a bend travels faster on the outside, so it erodes there, and slower on the inside, so it deposits there. That single asymmetry produces the entire meander pattern.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "What is a cut bank?",
            options: [
              "A bank that has been cut back deliberately to widen the channel",
              "The steep, often undercut outside of a bend, actively eroding",
              "A step in the bank left behind by an earlier, higher river level",
              "The point where a tributary has cut through into the main channel",
            ],
            correctIndex: 1,
            explanation:
              "The cut bank is the outside of a bend: steep, often undercut, and actively eroding because the water there is moving fastest.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "What is a point bar?",
            options: [
              "A ridge of rock that resists erosion and forces the channel around it",
              "A temporary island that forms where two channels rejoin each other",
              "The gentle inside slope of sand or gravel, actively building",
              "A bar of gravel deposited at the point where a river enters a lake",
            ],
            correctIndex: 2,
            explanation:
              "The point bar is the inside of a bend: a gentle slope of sand or gravel that is actively building, because the slower water there drops its load.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "What does a bend do over time, given a cut bank on one side and a point bar on the other?",
            options: [
              "It straightens, as the two processes cancel each other out",
              "It deepens without moving, since erosion and deposition are balanced",
              "It stays put unless a flood large enough to reshape it arrives",
              "It migrates sideways",
            ],
            correctIndex: 3,
            explanation:
              "Eroding one side while building the other moves the bend across the valley floor, and the whole pattern of bends migrates down-valley as well.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "What does the lesson mean by saying a meandering river is not a shape?",
            options: [
              "It is a process caught mid-motion",
              "That the bends are drawn by the valley rather than by the river itself",
              "That no two meanders in a river ever take quite the same form",
              "That the shape only becomes visible from the air rather than the water",
            ],
            correctIndex: 0,
            explanation:
              "The bends are migrating sideways and down-valley continuously. What you see on a map is one frame of a motion, not a settled form.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "How does an oxbow lake form?",
            options: [
              "A flood spills over the bank and leaves standing water behind it",
              "A tributary is blocked at its mouth and backs up into a pool",
              "The river cuts across its own neck and abandons the loop",
              "A landslide dams a side channel and traps the water above it",
            ],
            correctIndex: 2,
            explanation:
              "Keep migrating and a bend eventually loops so far that the river cuts across its own neck, abandons the loop, and leaves a crescent of standing water. Every oxbow is a piece of former channel.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "What is every oxbow lake?",
            options: [
              "A piece of former channel",
              "A natural reservoir that recharges the water table beside the river",
              "A remnant of a lake the river drained as it cut down through it",
              "A basin scoured out by floodwater spilling over the outside of a bend",
            ],
            correctIndex: 0,
            explanation:
              "It is the abandoned loop itself, left behind when the river took the shorter route across the neck.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "When does a river braid into shifting strands?",
            options: [
              "When the gradient is too gentle for it to hold a single channel",
              "When it carries more sediment than it can move",
              "When two rivers of similar size join and neither channel dominates",
              "When the bed is too hard for the river to cut a single deeper course",
            ],
            correctIndex: 1,
            explanation:
              "Where a river carries more sediment than it can move, it splits into shifting strands around temporary bars.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "Where does the flat ground on either side of a river come from?",
            options: [
              "It is the floor of a valley that glaciers cut before the river arrived",
              "It is the exposed bed of a much larger river that has since shrunk",
              "It is a coincidence of the underlying geology in most river valleys",
              "The river built it out of material deposited during floods",
            ],
            correctIndex: 3,
            explanation:
              "The floodplain is not a coincidence of geology. The river built it, out of material deposited during floods, over a very long time.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "How does the lesson define a floodplain, plainly?",
            options: [
              "The part of the river that is dry most of the time",
              "The area a 100-year flood is expected to reach in an average century",
              "The land low enough that a levee is required to build anything on it",
              "The zone between the channel and the first rise of higher ground",
            ],
            correctIndex: 0,
            explanation:
              "A floodplain is the part of the river that is dry most of the time. Stating it that way makes the rest of the course's engineering lessons read differently.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "Why does the lesson say cut banks and point bars are worth learning?",
            options: [
              "They are the only features a paddler is legally allowed to photograph",
              "They tell you which way the channel is moving, with no equipment",
              "They mark the safest places to bring a boat ashore on a bend",
              "They indicate how much sediment the river is carrying that day",
            ],
            correctIndex: 1,
            explanation:
              "These are features a paddler can photograph without any equipment, and once you know the rule they are unmistakable and tell you which way the channel is moving.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "You are standing on a steep, raw, undercut face with exposed roots. What should the opposite bank look like?",
            options: [
              "The same, since both banks of a bend erode at a similar rate",
              "A vertical face of the same height, cut by the previous flood",
              "A braided set of strands separated by temporary gravel bars",
              "A gentle slope of deposited sand or gravel",
            ],
            correctIndex: 3,
            explanation:
              "You are on a cut bank, the outside of a bend, where faster water is eroding. The opposite bank is a point bar, where the slower inside water dropped its load.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "What is a river's sediment load?",
            options: [
              "The solid material it carries as well as water",
              "The weight of water passing a point over the course of a day",
              "The material lying on the bed that the river is not currently moving",
              "The nutrients dissolved in the water rather than suspended in it",
            ],
            correctIndex: 0,
            explanation:
              "Solid material, ranging from clay particles that stay suspended for hundreds of miles to boulders that move only in extreme floods.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "What does a river's carrying capacity depend on, steeply?",
            options: [
              "The width of the channel at the point being considered",
              "The temperature of the water, which changes how easily it lifts material",
              "Velocity",
              "The total volume of water, regardless of how fast it is moving",
            ],
            correctIndex: 2,
            explanation:
              "Carrying capacity depends steeply on velocity, which is why deposition happens exactly where flow slows: inside bends, floodplains during floods, and above all where a river meets standing water.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "What happens to a river as it enters a reservoir?",
            options: [
              "It speeds up as the channel deepens toward the dam wall",
              "It slows abruptly and drops nearly everything it was carrying",
              "It mixes evenly, distributing its sediment through the whole reservoir",
              "It keeps its load until it passes through the dam's outlet works",
            ],
            correctIndex: 1,
            explanation:
              "A reservoir is standing water, so the river slows abruptly and drops nearly all of its load right there. Three consequences follow from that one fact.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "What does trapped sediment do to a reservoir over time?",
            options: [
              "It stabilizes the bed and reduces the maintenance the dam requires",
              "It settles into a layer that is periodically flushed out downstream",
              "It has no effect on capacity, since it compacts into the original bed",
              "It fills it, reducing the storage the dam was built for",
            ],
            correctIndex: 3,
            explanation:
              "Slowly but inexorably, which is why every reservoir has a finite life.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "Why is the water leaving a dam more erosive than the water that arrived?",
            options: [
              "Because it leaves through a narrow outlet at much higher pressure",
              "Because it has been warmed in the reservoir and carries material better",
              "It has full capacity and nothing to carry",
              "Because reservoir water is chemically altered by its time in storage",
            ],
            correctIndex: 2,
            explanation:
              "A river's capacity to carry sediment depends on its energy, not on what it is currently carrying. Water arriving already loaded has spent that capacity; water arriving clear has full capacity and picks material up from the bed and banks instead.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "Why does a river delta exist at all?",
            options: [
              "The river deposits more material than the sea can remove",
              "The sea floor shelves gently enough for material to come to rest",
              "The river's channel splits, and each branch builds its own bank",
              "Tides carry material back upstream and deposit it near the mouth",
            ],
            correctIndex: 0,
            explanation:
              "A delta is a balance between delivery and removal, maintained by continuous supply from upstream.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "What happens to a delta when the sediment supply is interrupted?",
            options: [
              "It stabilizes, since nothing new is being added to erode away",
              "It grows more slowly but continues to build from marine material",
              "Land loss follows",
              "It shifts sideways to a channel where sediment still arrives",
            ],
            correctIndex: 2,
            explanation:
              "Compaction and subsidence continue, sea level does what it does, and the wetlands that depended on regular sediment delivery are no longer being resupplied.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "What does the lesson call the link between an upper-river dam and land loss a thousand miles away?",
            options: [
              "An externality, since the cost falls outside the project's accounts",
              "A coincidence, since the two changes have separate causes",
              "A design flaw, since the dam was built without modeling the delta",
              "A feedback: one change to the surface producing changes in other systems",
            ],
            correctIndex: 3,
            explanation:
              "A structure built for flood control and navigation participates in land loss a thousand miles downstream, through a mechanism nobody designed and everybody can now describe. Lesson 10 is the same shape with a different substance.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "How far can the finest sediment stay suspended?",
            options: [
              "Hundreds of miles",
              "A few hundred yards, before the first slackening of the current",
              "Only as far as the next bend, where the flow slows on the inside",
              "It does not travel at all; clay settles as soon as it enters the water",
            ],
            correctIndex: 0,
            explanation:
              "Sediment load ranges from clay particles that stay suspended for hundreds of miles to boulders that move only in extreme floods.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "What does the lesson call the lower Mississippi?",
            options: [
              "The last stretch of the river still permitted to migrate freely",
              "Infrastructure that happens to be made of water",
              "A river that recovered its natural form once the levees were completed",
              "The most heavily gauged natural river system in the world",
            ],
            correctIndex: 1,
            explanation:
              "It is not a natural river. It is an enormous piece of infrastructure that happens to be made of water, and this lesson covers what that engineering does physically.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "What does a levee do to the flow physically?",
            options: [
              "It slows the water by forcing it against a rough constructed surface",
              "It removes water from the channel and stores it behind the embankment",
              "Confines it, so the same water runs deeper and faster",
              "It raises the bed, so the same volume passes at a shallower depth",
            ],
            correctIndex: 2,
            explanation:
              "A levee keeps flood water out of the floodplain by confining the flow, so the same water runs deeper and faster and is sent downstream rather than spread out.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "What does a revetment do?",
            options: [
              "Freezes a meander in place",
              "Raises the bank so that a larger flood can be contained behind it",
              "Deepens the channel so that barges can pass at low water",
              "Diverts part of the flow into a side channel to relieve the main one",
            ],
            correctIndex: 0,
            explanation:
              "Its purpose is to stop the bank eroding, and the physical consequence is that the meander migration from lesson 5 halts at that point.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "What does a cutoff do to the river?",
            options: [
              "It separates a bend from the channel and turns it into an oxbow lake",
              "It stops the channel migrating past a structure that must not be moved",
              "It slows the water by lengthening the distance it has to travel",
              "It shortens the channel, which steepens the gradient and speeds the flow",
            ],
            correctIndex: 3,
            explanation:
              "A cutoff shortens the channel for navigation. A shorter path over the same drop is a steeper gradient, and steeper means faster.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "What does a lock and dam create, and what does that cause?",
            options: [
              "Slack water, which traps sediment",
              "A steeper gradient, which scours the bed below the structure",
              "A wider channel, which slows the flow through the whole reach",
              "A fixed bank line, which stops the meander pattern from migrating",
            ],
            correctIndex: 0,
            explanation:
              "Its purpose is maintaining navigable depth, and the physical consequence is slack water that traps sediment, which is the lesson 6 mechanism arriving in a different structure.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "What does the table say about dredging?",
            options: [
              "It is a one-time intervention once the channel reaches its design depth",
              "It is continuous, expensive, and never finished",
              "It is only required after a flood has redistributed the bed material",
              "It removes the need for locks and dams on the same stretch of river",
            ],
            correctIndex: 1,
            explanation:
              "Keeping the channel deep is continuous, expensive, and never finished, because the river keeps delivering material to the places dredging just cleared.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "What is the bargain the lesson identifies in every one of these structures?",
            options: [
              "Each one costs more to maintain than it did to build originally",
              "Each one solves a problem the previous structure created",
              "Each one works, and each one moves a cost rather than removing it",
              "Each one protects navigation at the expense of flood control",
            ],
            correctIndex: 2,
            explanation:
              "Levees protect the land behind them and send the water somewhere else, faster. Revetments protect a bank and stop the floodplain being rebuilt. Read the consequence column as a whole and the trade becomes clear.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "Is this lesson an argument against engineering the river?",
            options: [
              "No",
              "Yes, since every structure moves a cost onto someone downstream",
              "Yes, but only for the structures that trap sediment behind them",
              "It declines to say, since the question is a political rather than a physical one",
            ],
            correctIndex: 0,
            explanation:
              "Enormous numbers of people live and work in the floodplain, and the engineering is why. The lesson is an argument for being able to say where the cost went, which is a different skill from being for or against.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "Where does a river confined by levees deposit its sediment?",
            options: [
              "Across the floodplain, once the flood tops the levee crest",
              "Nowhere; confined water moves too fast to deposit anything at all",
              "Inside the levees",
              "In the tributaries, which back up when the main channel is confined",
            ],
            correctIndex: 2,
            explanation:
              "It deposits inside the levees rather than across the floodplain, so the bed can rise over time relative to the surrounding land.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "What follows when a confined river's bed rises relative to the land around it?",
            options: [
              "The channel widens until the flow returns to its original depth",
              "The levees must rise too, and the consequence of a failure grows",
              "The river abandons that reach and cuts a new channel alongside",
              "The floodplain rises with it, since both receive the same material",
            ],
            correctIndex: 1,
            explanation:
              "Where the bed rises, the levees have to rise as well, and the drop between the confined river and the land behind the levee grows along with the consequence of a breach.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "Why can levees make flooding worse somewhere else?",
            options: [
              "Because building them removes soil that used to absorb rainfall",
              "Because they concentrate rainfall runoff from the land behind them",
              "Because a levee raises the water table on the protected side",
              "The water is not removed, only confined",
            ],
            correctIndex: 3,
            explanation:
              "Flow that would have spread across a wide floodplain, slowing and depositing, is instead held in a narrow channel where it runs deeper and faster, and it arrives downstream sooner and in greater volume.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "Why does the lesson recommend taking Locks, Dams and Barges alongside it?",
            options: [
              "Because the engineering decisions and the physical consequences need each other",
              "Because that course contains the measurements this one leaves out",
              "Because the two courses cover different stretches of the same river",
              "Because the history is a prerequisite for understanding the physics",
            ],
            correctIndex: 0,
            explanation:
              "The engineering decisions are unreadable without the physical consequences, and the physical consequences are inert without knowing who bore them.",
            sourceLessonSlug: "the-engineered-river",
          },
          {
            prompt: "What does the lesson say rivers are, given enough time?",
            options: [
              "The dominant force shaping most landscapes",
              "A minor influence compared with glaciers and tectonic uplift",
              "The main route by which rock is delivered from one continent to another",
              "The only landscape process that can be watched happening in real time",
            ],
            correctIndex: 0,
            explanation:
              "Rivers move earth, and over enough time they are the dominant force shaping most landscapes. The evidence is visible from a boat, which is the point of the whole lesson.",
            sourceLessonSlug: "the-river-shapes-the-land",
          },
          {
            prompt: "Above all, where does a river drop its sediment?",
            options: [
              "On the outside of every bend, where the current presses hardest",
              "Where it meets standing water",
              "In the steepest reaches, where the bed is too hard to hold material",
              "Evenly along its length, in proportion to the distance travelled",
            ],
            correctIndex: 1,
            explanation:
              "Deposition happens wherever flow slows: inside bends, floodplains during floods, and above all where a river meets standing water. That last one is why a reservoir behaves the way it does.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "What is a levee's stated purpose?",
            options: [
              "To hold the channel at a depth that barges can navigate year round",
              "To stop the bank eroding where a structure sits close to the water",
              "To shorten the route the river takes through a wide floodplain",
              "To keep flood water out of the floodplain",
            ],
            correctIndex: 3,
            explanation:
              "That is the purpose, and it works. The physical consequence is that the flow is confined, so the same water runs deeper and faster and is sent downstream rather than spread out.",
            sourceLessonSlug: "the-engineered-river",
          },
        ],
      },
    },
    // ── Part 3 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "reading-water-quality",
      title: "8 · Reading water quality",
      section: "Part 3 · What is in the water",
      recallContent: [
        {
          prompt: "What is the general pattern in every river engineering structure's trade-off?",
          answer: "Each one works and each one moves a cost rather than removing it: protection here means faster, deeper water somewhere else.",
        },
      ],
      body: `"Is this water clean?" is not a question with a single measurement behind it. Several different things get measured, each answering something different.

| Measure | What it is | What it indicates | What it does not tell you |
|---|---|---|---|
| Temperature | How warm | Warm water holds less oxygen; species have limits | Nothing about what is dissolved |
| Turbidity | How cloudy | Suspended sediment; light reaching plants | Whether the particles are harmful |
| Dissolved oxygen | Oxygen available to breathe | Whether animals can live there | Why it is high or low |
| pH | Acid or alkaline | Chemical conditions, stress on organisms | Concentration of any specific substance |
| Conductivity | Ability to carry current | Total dissolved salts and ions | Which ions |
| Nitrate and phosphorus | Nutrient concentration | Fertiliser, sewage, feedlot input | Whether a bloom will follow |
| Bacterial indicators | Faecal contamination markers | Sewage or animal waste; a safety signal | Which pathogens are present |

## The general rule

Read the last column again. **Every measurement is an indicator, not a verdict.** A single reading tells you about one property, at one place, at one moment.

That last part deserves emphasis. Rivers vary enormously by hour, by season and by storm. A sample taken the day after heavy rain can differ completely from one taken a week into a dry spell, in the same spot, with nothing having changed except the weather.

So a single sample is a snapshot. **What tells you about a river is a series**, and this is the seam where this course hands off to Course 4, which is about how to collect one honestly.

## Where to look without a test kit

Both the USGS gauge network and the EPA publish water-quality data, and some gauges report continuously. Before you buy anything, find out what is already being measured on your own river.

:::reveal A river's dissolved oxygen reads low. Name three quite different explanations. ||| Warm water holds less oxygen, so it may simply be hot. Decomposition of organic matter may be consuming it, which is the mechanism in the next lesson. Or the reading may have been taken before dawn, since aquatic plants consume oxygen at night and produce it by day. A single measurement cannot distinguish them.

## Sources

U.S. Geological Survey. (n.d.). *Water-quality parameters*. Water Science School. https://www.usgs.gov/special-topics/water-science-school

U.S. Environmental Protection Agency. (n.d.). *Volunteer monitoring quality assurance*. https://www.epa.gov/`,
    },
    {
      slug: "why-the-oxygen-runs-out",
      title: "9 · Why the oxygen runs out",
      section: "Part 3 · What is in the water",
      recallContent: [
        {
          prompt: "Why is a single water-quality sample a snapshot rather than a verdict?",
          answer: "Because rivers vary by hour, season and storm. One reading describes one property at one place at one moment; a series describes the river.",
        },
      ],
      body: `Some of the water at the mouth of the Mississippi, in the Gulf of Mexico, has too little oxygen for most animals to survive in. The affected area varies from year to year and is measured by survey each summer.

The mechanism has four steps, and each one is ordinary.

**1. Nutrients arrive.** Nitrogen and phosphorus reach the water from the watershed (lesson 10 traces the route).

**2. Algae bloom.** Nutrients are usually what limits algal growth. Supply them and algae multiply enormously.

**3. The bloom dies.** Algae are short-lived. The dead material sinks.

**4. Decomposition consumes the oxygen.** Bacteria break down the sinking material and use dissolved oxygen doing it. Enough material, and the oxygen near the bottom is drawn down faster than it can be replaced.

## The step that makes it persist

Why does the oxygen not simply mix back in from the surface?

**Stratification.** Fresh water is less dense than salt water, and warm water is less dense than cold. Where a big river discharges into the sea in summer, a layer of warmer fresh water sits on top of colder saltier water and the two do not readily mix. The surface layer stays oxygenated by contact with the air; the bottom layer is cut off from it while decomposition continues below.

That is why the low-oxygen zone is seasonal, why it is worst in summer, and why a big storm can break it up temporarily.

## Not a spill

Nothing in that sequence is a discharge event. It is ordinary agriculture and ordinary decomposition, at a scale set by an entire basin.

**Which is exactly why it is hard.** There is no pipe to close and no single actor to hold responsible.

That problem, what to do about harm with no author, is the subject of *What the River Carries* in the River Expedition series. This lesson gives you the mechanism; that course takes the argument. They are meant to be taken together and neither repeats the other.

:::reveal Why is the low-oxygen zone worst in summer and reduced by a large storm? ||| Stratification. In summer, warm fresh water layers over colder salt water and the two do not mix, so the bottom layer is cut off from the atmosphere while decomposition consumes its oxygen. A large storm mixes the water column and re-oxygenates the bottom, temporarily.

## Sources

National Oceanic and Atmospheric Administration. (n.d.). *Gulf of Mexico hypoxia*. https://www.noaa.gov/

Mississippi River/Gulf of Mexico Hypoxia Task Force. (n.d.). *Reports and annual measurements*. https://www.epa.gov/ms-htf`,
    },
    {
      slug: "a-thousand-miles-of-nitrogen",
      title: "10 · A thousand miles of nitrogen",
      section: "Part 3 · What is in the water",
      recallContent: [
        {
          prompt: "Give the four steps from nutrients arriving to oxygen running out.",
          answer: "Nutrients arrive, algae bloom, the bloom dies and sinks, and bacteria decomposing it consume the dissolved oxygen. Stratification then stops it being replaced.",
        },
      ],
      body: `Where do the nutrients in lesson 9 come from? Mostly from farmland, and the route is worth following because it explains why the problem resists the obvious fixes.

**Fertiliser is applied** to fields across the basin. Crops take up much of it. Some remains in the soil.

**Rain moves it.** Nitrogen in the nitrate form is highly soluble, so it travels with water rather than staying put.

**Tile drainage speeds the journey.** Large areas of the Midwest are drained by perforated pipe buried below the field, installed to make wet ground farmable. It works, and it also creates a fast, direct path from the soil to a ditch, bypassing the slow filtering that would otherwise occur.

**Ditches feed streams, streams feed rivers**, and the watershed does what a watershed does.

## Why it is genuinely hard

Follow the structure of the problem rather than the substance:

- **The scale is a basin**, so no state can solve it alone.
- **The contribution per farm is tiny.** No individual decision is unreasonable, and the aggregate is the problem.
- **The delay is long.** Nitrogen already in soil and groundwater keeps arriving for years after practices change, so a farm that improves today shows results in the water much later. That is discouraging in a way that matters politically.
- **The costs and benefits land in different places.** The cost of changing practice falls upstream; the benefit falls a thousand miles downstream on people the upstream farmer will never meet.

That last one is the whole difficulty, and it is not a science problem.

## The honest bit about solutions

Practices that reduce nutrient loss are known and demonstrated: cover crops, wetland restoration, buffer strips along waterways, more precise fertiliser timing and placement, and treating drainage before it reaches a ditch.

The obstacle is not knowledge. It is adoption at basin scale, which is a question of cost, of who bears it, and of policy.

**A course that stopped at "we know what to do" would be misleading by omission.** Knowing the remedy and deploying it across a basin are separated by everything that makes the problem hard.

:::reveal Why does improving farm practice show up so slowly in river nitrate levels? ||| Because nitrogen already in the soil and groundwater keeps moving toward the river for years. Groundwater travels slowly, so today's water partly reflects decisions made long ago, and a genuine improvement can look like no improvement for a long time.

## Sources

U.S. Geological Survey. (n.d.). *Nutrients in the Mississippi River basin*. https://www.usgs.gov/

U.S. Department of Agriculture. (n.d.). *Conservation practices and nutrient management*. https://www.nrcs.usda.gov/`,
    },
    {
      slug: "life-in-the-river",
      title: "11 · Life in the river",
      section: "Part 3 · What is in the water",
      recallContent: [
        {
          prompt: "Why does the cost-and-benefit structure make basin-scale nutrient reduction so hard?",
          answer: "The cost of changing practice falls upstream and the benefit falls a thousand miles downstream, on people the upstream decision-maker will never meet.",
        },
      ],
      body: `What lives in a river tells you about the river, and often more reliably than a single chemical reading does, because organisms integrate conditions over their whole lives rather than over the instant you sampled.

## Mussels

Freshwater mussels are among the most endangered groups of animals in North America, and North America has an unusually rich variety of them.

Two things make them worth knowing about:

**They filter.** A mussel bed pulls particles from the water continuously. A dense bed is genuine water-treatment infrastructure that nobody built.

**They are stationary and long-lived.** A mussel cannot leave when conditions worsen, and it can live for decades. So a mussel bed's presence, absence or age structure records conditions over a long stretch of time. Finding only old individuals and no young ones says the water has stopped being suitable for reproduction, which no single sample would show.

They also have an extraordinary life cycle: the larvae of many species must attach to a specific fish to develop. **Which means a mussel population depends on a fish population, and anything that blocks that fish, such as a dam, can end the mussels upstream without touching the mussels directly.**

## Migration and barriers

Many river fish must move to reproduce. A dam without effective passage does not merely inconvenience them; it removes access to spawning habitat entirely, and the population above or below is cut off.

This is why "the water quality is fine" can coexist with a collapsed fishery. Water quality is one requirement. **Connectivity is another, and a river is a network before it is a chemistry.**

## Invasive carp

Several introduced carp species have spread widely through the basin. They consume plankton at the base of the food web and can reach very high densities, which changes what is available to native species. Much of the current management effort is aimed at preventing spread into the Great Lakes.

:::reveal A mussel bed contains only large old individuals and no young ones, and the water chemistry today reads fine. What does that pattern suggest? ||| That conditions were suitable when the older animals settled and something has since prevented successful reproduction. Because many mussel larvae must attach to a specific host fish, the cause may not be chemistry at all: losing the host fish, for instance to a barrier, ends recruitment while the water still tests clean.

## Sources

U.S. Fish and Wildlife Service. (n.d.). *Freshwater mussels of the United States*. https://www.fws.gov/

U.S. Geological Survey. (n.d.). *Invasive carp research*. https://www.usgs.gov/`,
    },
    {
      slug: "check-what-is-in-the-water",
      title: "Part 3 knowledge check · What is in the water",
      section: "Part 3 · What is in the water",
      body: `A graded check on what each water-quality measure does and does not report, on the four ordinary steps that produce a low-oxygen zone at the mouth of a river, on the route nitrogen takes from a field to the Gulf, and on why what lives in a river tells you more than a single reading does. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the lesson say about the question is this water clean?",
            options: [
              "It has no single measurement behind it",
              "It is answered by dissolved oxygen, which covers the rest indirectly",
              "It can only be settled by a laboratory rather than a field instrument",
              "It is a legal question rather than a scientific one in most jurisdictions",
            ],
            correctIndex: 0,
            explanation:
              "Several different things get measured, and each answers something different. That is why the lesson is a table rather than a number.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What does water temperature indicate?",
            options: [
              "How much sediment the water is currently able to carry",
              "Warm water holds less oxygen, and species have limits",
              "Whether the water came from groundwater or from surface runoff",
              "The rate at which bacteria in the water are reproducing",
            ],
            correctIndex: 1,
            explanation:
              "Temperature matters because warm water holds less oxygen and because species have thermal limits. It tells you nothing about what is dissolved.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What does turbidity measure?",
            options: [
              "The total quantity of dissolved material the water is carrying",
              "The rate at which suspended material settles out of the water",
              "How cloudy the water is",
              "The depth to which a diver can see under normal conditions",
            ],
            correctIndex: 2,
            explanation:
              "Turbidity is cloudiness, which indicates suspended sediment and how much light reaches plants.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What does turbidity not tell you?",
            options: [
              "How much light is reaching the plants growing in the channel",
              "How much suspended sediment the water is carrying at that point",
              "Whether the particles are harmful",
              "Whether the reading was taken during or after a storm",
            ],
            correctIndex: 2,
            explanation:
              "A turbidity reading says how cloudy the water is. Whether the particles suspended in it are harmful is a different question entirely.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What does a dissolved oxygen reading not tell you?",
            options: [
              "Whether animals are able to live in that water",
              "Why it is high or low",
              "How much oxygen was available at the moment of sampling",
              "Whether the water is warm enough to hold less oxygen than usual",
            ],
            correctIndex: 1,
            explanation:
              "It tells you whether animals can breathe there. The cause, whether heat, decomposition, or the time of day, is not in the number.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What does conductivity indicate?",
            options: [
              "Total dissolved salts and ions",
              "The presence of metals specifically, rather than salts in general",
              "How quickly the water is moving past the measuring point",
              "The acidity of the water on the same scale that pH reports",
            ],
            correctIndex: 0,
            explanation:
              "Conductivity is the water's ability to carry a current, which indicates the total dissolved salts and ions present. It does not tell you which ions.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What do bacterial indicators signal, and what do they leave open?",
            options: [
              "The total bacterial population, but not whether any of it is active",
              "The presence of a specific disease, but not how much of it is there",
              "Sewage or animal waste, but not which pathogens are present",
              "The chemical conditions bacteria prefer, but not whether they are there",
            ],
            correctIndex: 2,
            explanation:
              "They are markers of fecal contamination and a genuine safety signal. Which pathogens are actually present is a separate question the indicator does not answer.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What does a nutrient concentration reading not tell you?",
            options: [
              "Whether fertilizer, sewage, or feedlot input is reaching the water",
              "How much nitrate and phosphorus is present at that point",
              "Whether a bloom will follow",
              "Whether the concentration is higher than it was a year ago",
            ],
            correctIndex: 2,
            explanation:
              "Nutrient readings indicate fertilizer, sewage, or feedlot input. Whether an algal bloom actually follows is not something the concentration alone decides.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What is the general rule the table is built to teach?",
            options: [
              "Every measurement is an indicator, not a verdict",
              "The more measures you take, the closer you get to a single answer",
              "Chemical measures are more reliable than biological observations",
              "Continuous instruments are always preferable to hand-collected samples",
            ],
            correctIndex: 0,
            explanation:
              "Read the last column of the table again. A single reading tells you about one property, at one place, at one moment.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "How much can two samples from the same spot differ?",
            options: [
              "Very little, since a river's chemistry is set by its watershed",
              "Completely, if one follows heavy rain and one a week of dry weather",
              "Only by the amount the instrument's own precision allows",
              "Only across seasons, since day-to-day variation is negligible",
            ],
            correctIndex: 1,
            explanation:
              "Rivers vary enormously by hour, by season, and by storm. A sample taken the day after heavy rain can differ completely from one a week into a dry spell, with nothing changed except the weather.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What actually tells you about a river?",
            options: [
              "A single sample taken under conditions typical for the season",
              "The measure that shows the greatest departure from its normal range",
              "A series",
              "A comparison against a river of similar size in the same region",
            ],
            correctIndex: 2,
            explanation:
              "A single sample is a snapshot. A series is what describes a river, which is the seam where this course hands off to the course about collecting one honestly.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "A river's dissolved oxygen reads low. Which of these is one of the quite different explanations the lesson offers?",
            options: [
              "The reading may have been taken before dawn",
              "The channel may be too narrow at that point for the water to aerate",
              "The instrument may need recalibrating against a laboratory standard",
              "The water may be carrying more sediment than oxygen can pass through",
            ],
            correctIndex: 0,
            explanation:
              "Aquatic plants consume oxygen at night and produce it by day. The other candidates are simply warm water, which holds less, and decomposition consuming it. A single measurement cannot distinguish them.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "Where is the water with too little oxygen for most animals to survive?",
            options: [
              "Behind the locks and dams on the upper river, where flow is slack",
              "In the tile drains, before the water has reached an open ditch",
              "In the oxbow lakes cut off from the main channel",
              "At the mouth of the Mississippi, in the Gulf of Mexico",
            ],
            correctIndex: 3,
            explanation:
              "The affected area varies from year to year and is measured by survey each summer.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "How is the extent of the low-oxygen zone established each year?",
            options: [
              "By survey each summer",
              "By modeling it from the nitrogen load measured upstream",
              "By continuous readings from a permanent network of moored sensors",
              "By counting fish kills reported along the affected coastline",
            ],
            correctIndex: 0,
            explanation:
              "It is measured by survey each summer, which is why the reported area varies from one year to the next.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "What usually limits algal growth?",
            options: [
              "Temperature, which sets how fast the cells can divide",
              "Nutrients",
              "Light, which is reduced by the sediment the river carries",
              "Predation by the animals that graze on algae in open water",
            ],
            correctIndex: 1,
            explanation:
              "Nutrients are usually the limiting factor, so supplying them lets algae multiply enormously. That is step two of the four.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "What happens after the algae bloom?",
            options: [
              "It persists through the summer, shading the water below it",
              "It is grazed down by fish, transferring the nutrients up the food web",
              "The bloom dies and the dead material sinks",
              "It drifts out to sea, where the nutrients are diluted harmlessly",
            ],
            correctIndex: 2,
            explanation:
              "Algae are short-lived. The dead material sinks, and step four is what happens to it on the way down and at the bottom.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "What actually consumes the oxygen?",
            options: [
              "The algae themselves, which respire faster than they photosynthesize",
              "Bacteria decomposing the sinking material",
              "The fish that move in to feed on the bloom while it lasts",
              "The salt water below, which holds less oxygen than fresh water does",
            ],
            correctIndex: 1,
            explanation:
              "Bacteria break down the sinking material and use dissolved oxygen doing it. Enough material, and the oxygen near the bottom is drawn down faster than it can be replaced.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "Why does oxygen not simply mix back in from the surface?",
            options: [
              "Because the surface itself has been stripped of oxygen by the bloom",
              "Because the water is too deep for surface mixing to reach the bottom",
              "Because the current carries the surface water away before it can mix",
              "Stratification",
            ],
            correctIndex: 3,
            explanation:
              "A layer of warmer fresh water sits on top of colder saltier water and the two do not readily mix, so the bottom layer is cut off from the atmosphere while decomposition continues below it.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "What makes the two layers resist mixing?",
            options: [
              "Fresh water and warm water are both less dense",
              "The salt in the lower layer forms a physical barrier to exchange",
              "The river's current runs in the opposite direction to the sea's",
              "Suspended sediment settles into a layer between the two",
            ],
            correctIndex: 0,
            explanation:
              "Fresh water is less dense than salt water and warm water is less dense than cold, so where a big river discharges into the sea in summer the lighter water floats on the heavier.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "Why can a large storm reduce the low-oxygen zone temporarily?",
            options: [
              "It dilutes the nutrients that the river has been delivering",
              "It flushes the dead algal material out into deeper water",
              "It mixes the water column",
              "It cools the surface layer so that it can hold more oxygen",
            ],
            correctIndex: 2,
            explanation:
              "Breaking the stratification lets the bottom layer contact oxygenated water again. That is also why the zone is seasonal and worst in summer.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "Is the low-oxygen zone caused by a discharge event?",
            options: [
              "No; it is ordinary agriculture and ordinary decomposition at basin scale",
              "Yes, though the responsible discharge has never been identified",
              "Yes, by the combined outfalls of the cities along the lower river",
              "Partly; a spill starts it and agriculture sustains it through the summer",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in the sequence is a discharge event, which is exactly why it is hard: there is no pipe to close and no single actor to hold responsible.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "Which course does this lesson hand the argument off to?",
            options: [
              "Locks, Dams and Barges, which covers who built the structures involved",
              "What the River Carries, on harm with no author",
              "The capstone, which asks you to describe your own watershed instead",
              "The expedition course on how to collect a series of readings honestly",
            ],
            correctIndex: 1,
            explanation:
              "What to do about harm with no author is the subject of What the River Carries in the River Expedition series. This lesson gives the mechanism; that course takes the argument, and neither repeats the other.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "Where do the nutrients in the previous lesson mostly come from?",
            options: [
              "Municipal sewage treatment plants along the length of the river",
              "Farmland",
              "Industrial discharge permitted under existing water regulations",
              "Natural weathering of the soils across the basin",
            ],
            correctIndex: 1,
            explanation:
              "Mostly from farmland, and the route from field to Gulf is worth following because it explains why the problem resists the obvious fixes.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "Why does nitrogen in the nitrate form travel with water rather than staying put?",
            options: [
              "Because it binds to soil particles that wash away in heavy rain",
              "Because it is lighter than the surrounding soil and floats to the surface",
              "It is highly soluble",
              "Because crops release it back into the soil after they are harvested",
            ],
            correctIndex: 2,
            explanation:
              "Nitrate is highly soluble, so rain moves it. Crops take up much of the fertilizer applied and some remains in the soil, and what remains travels.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "What is tile drainage?",
            options: [
              "A surface ditch dug along the low edge of a field to carry water off",
              "A layer of clay laid under a field to stop water sinking further",
              "A pump system that lifts standing water off saturated ground",
              "Perforated pipe buried below the field",
            ],
            correctIndex: 3,
            explanation:
              "Large areas of the Midwest are drained by perforated pipe buried below the field, installed to make wet ground farmable.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "What does tile drainage do to nitrogen's journey?",
            options: [
              "It creates a fast, direct path from the soil to a ditch",
              "It holds the water underground long enough for the soil to filter it",
              "It spreads the water sideways so no single ditch receives too much",
              "It removes the nitrogen chemically before the water leaves the field",
            ],
            correctIndex: 0,
            explanation:
              "It works, and it also bypasses the slow filtering that would otherwise occur. Ditches feed streams, streams feed rivers, and the watershed does what a watershed does.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "Why can no single state solve the nutrient problem?",
            options: [
              "Because the affected water lies outside every state's jurisdiction",
              "The scale is a basin",
              "Because the practices involved are regulated only at federal level",
              "Because measuring the contribution of one state is not yet possible",
            ],
            correctIndex: 1,
            explanation:
              "The scale of the problem is an entire basin, so no state can solve it alone. That is the first of four structural features that make it hard.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "What does the lesson say about the contribution of any individual farm?",
            options: [
              "It is large enough that a handful of farms account for most of the load",
              "It varies so much between farms that no general statement is possible",
              "It cannot be measured with the instruments currently available",
              "It is tiny, and the aggregate is the problem",
            ],
            correctIndex: 3,
            explanation:
              "No individual decision is unreasonable, and the aggregate is the problem. That structure is what makes the harm authorless.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "Why is the delay between changing practice and seeing results politically discouraging?",
            options: [
              "Nitrogen already in soil and groundwater keeps arriving for years",
              "Because the measurements are only published several years afterward",
              "Because the improvement shows up downstream rather than locally",
              "Because the river's own variability hides any change for a decade",
            ],
            correctIndex: 0,
            explanation:
              "A farm that improves today shows results in the water much later, because groundwater travels slowly and today's water partly reflects decisions made long ago. A genuine improvement can look like no improvement for a long time.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "Where do the costs and the benefits of changing practice land?",
            options: [
              "Both upstream, on the farms that make the change themselves",
              "Both downstream, where the water quality actually improves",
              "The cost upstream and the benefit a thousand miles downstream",
              "The cost on the public purse and the benefit on private landowners",
            ],
            correctIndex: 2,
            explanation:
              "The benefit falls on people the upstream farmer will never meet. The lesson calls that the whole difficulty, and says plainly that it is not a science problem.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "Which of these is among the practices known to reduce nutrient loss?",
            options: [
              "Deepening the tile drains so that water spends longer underground",
              "Cover crops and buffer strips along waterways",
              "Switching the basin's fields to crops that require no fertilizer at all",
              "Building settling ponds at the mouth of the river",
            ],
            correctIndex: 1,
            explanation:
              "Cover crops, wetland restoration, buffer strips along waterways, more precise fertilizer timing and placement, and treating drainage before it reaches a ditch are all known and demonstrated.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "What does the lesson say the obstacle is?",
            options: [
              "Knowledge, since the effective practices are still being identified",
              "Measurement, since nobody can attribute the load to a given field",
              "Adoption at basin scale",
              "Technology, since the equipment needed is not yet widely available",
            ],
            correctIndex: 2,
            explanation:
              "The obstacle is not knowledge. It is adoption at basin scale, which is a question of cost, of who bears it, and of policy. A course that stopped at we know what to do would be misleading by omission.",
            sourceLessonSlug: "a-thousand-miles-of-nitrogen",
          },
          {
            prompt: "Why can what lives in a river tell you more than a single chemical reading?",
            options: [
              "Organisms integrate conditions over their whole lives",
              "Because biological surveys are repeated more often than chemical ones",
              "Because organisms respond to contaminants no instrument can detect",
              "Because a species list is cheaper to collect than a laboratory analysis",
            ],
            correctIndex: 0,
            explanation:
              "A chemical reading covers the instant you sampled. An organism has been living through everything that happened before you arrived.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "How does the lesson describe the conservation status of freshwater mussels?",
            options: [
              "Stable, though their range has contracted over the last century",
              "Recovering, following the water-quality improvements of recent decades",
              "Unknown, since no comprehensive survey has ever been attempted",
              "Among the most endangered groups of animals in North America",
            ],
            correctIndex: 3,
            explanation:
              "Among the most endangered groups of animals in North America, in a continent that has an unusually rich variety of them.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "What does the lesson call a dense mussel bed?",
            options: [
              "A refuge that shelters juvenile fish from predators",
              "Water-treatment infrastructure that nobody built",
              "A sediment trap that stabilizes the bed of the channel",
              "A record of the river's chemistry laid down layer by layer",
            ],
            correctIndex: 1,
            explanation:
              "A mussel bed pulls particles from the water continuously, which is genuine water treatment happening without anyone having installed it.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "What makes a mussel bed a record of conditions over time?",
            options: [
              "Its shells accumulate chemical traces of everything the water carried",
              "The bed grows outward at a steady and measurable rate each year",
              "The mussels are stationary and long-lived",
              "Each generation settles in a distinct layer that can be dated",
            ],
            correctIndex: 2,
            explanation:
              "A mussel cannot leave when conditions worsen, and it can live for decades. So a bed's presence, absence, or age structure records conditions over a long stretch of time.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "What does a bed of only old mussels and no young ones tell you?",
            options: [
              "That the population is being harvested faster than it can replace itself",
              "That the water has stopped being suitable for reproduction",
              "That an older generation outcompeted its own young for space",
              "That a recent flood scoured the smaller animals out of the bed",
            ],
            correctIndex: 1,
            explanation:
              "Conditions were suitable when the older animals settled and something has since prevented successful reproduction. No single sample would show that.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "What do the larvae of many mussel species require?",
            options: [
              "A stretch of gravel bed shallow enough for light to reach them",
              "A period of low flow lasting several weeks after they are released",
              "A supply of plankton dense enough to sustain them while they drift",
              "To attach to a specific fish in order to develop",
            ],
            correctIndex: 3,
            explanation:
              "Which means a mussel population depends on a fish population, and anything that blocks that fish can end the mussels upstream without touching the mussels directly.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "How can a dam end a mussel population without affecting the mussels directly?",
            options: [
              "By removing the host fish the larvae depend on",
              "By trapping the sediment the mussels filter out of the water",
              "By raising the water temperature above what the mussels tolerate",
              "By altering the chemistry of the water released downstream",
            ],
            correctIndex: 0,
            explanation:
              "Blocking the host fish ends recruitment while every adult mussel upstream is still alive and the water still tests clean.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "What does a dam without effective passage do to migrating fish?",
            options: [
              "It delays their journey, so spawning happens later in the season",
              "It concentrates them below the structure, where they are easier to catch",
              "It removes access to spawning habitat entirely",
              "It forces them to spawn in the reservoir rather than in the river",
            ],
            correctIndex: 2,
            explanation:
              "It does not merely inconvenience them. The population above or below is cut off from where it has to go to reproduce.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "How can the water quality read fine while the fishery has collapsed?",
            options: [
              "Because water-quality tests do not measure anything fish depend on",
              "Because a collapse takes years to appear in the chemistry",
              "Because fish populations respond to fishing pressure, not to water",
              "Connectivity is a separate requirement from chemistry",
            ],
            correctIndex: 3,
            explanation:
              "Water quality is one requirement. Connectivity is another, and a river is a network before it is a chemistry.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "What do the introduced carp species consume?",
            options: [
              "Plankton at the base of the food web",
              "The eggs of the native fish they compete with directly",
              "The freshwater mussels that filter the same water",
              "Aquatic plants, which they strip from the shallows of the channel",
            ],
            correctIndex: 0,
            explanation:
              "They consume plankton at the base of the food web and can reach very high densities, which changes what is available to native species.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "Where is much of the current carp management effort aimed?",
            options: [
              "At restoring the native species already displaced in the lower basin",
              "At preventing spread into the Great Lakes",
              "At harvesting the population down to a level the food web can carry",
              "At breeding a variety that cannot reproduce in open water",
            ],
            correctIndex: 1,
            explanation:
              "Several introduced carp species have spread widely through the basin, and much of the management effort is aimed at keeping them out of the Great Lakes.",
            sourceLessonSlug: "life-in-the-river",
          },
          {
            prompt: "What does a pH reading indicate, and what does it leave out?",
            options: [
              "Chemical conditions, but not any one substance's concentration",
              "The concentration of acid, but not of anything alkaline",
              "The total dissolved material, but not which ions make it up",
              "How stressful the water is for fish, but not for invertebrates",
            ],
            correctIndex: 0,
            explanation:
              "pH reports whether the water is acid or alkaline, which indicates chemical conditions and stress on organisms. It says nothing about the concentration of any specific substance.",
            sourceLessonSlug: "reading-water-quality",
          },
          {
            prompt: "What does the lesson tell you to do before buying a test kit?",
            options: [
              "Take a series of samples so you know what the river's normal range is",
              "Find out what is already being measured on your own river",
              "Confirm which measures your state's regulators will actually accept",
              "Choose one measure and learn it thoroughly before adding others",
            ],
            correctIndex: 1,
            explanation:
              "Both the Geological Survey gauge network and the EPA publish water-quality data, and some gauges report continuously. Check what already exists before you spend anything.",
            sourceLessonSlug: "reading-water-quality",
          },
        ],
      },
    },
    // ── Part 4 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "reading-the-expedition",
      title: "12 · Reading the expedition",
      section: "Part 4 · Doing it yourself",
      recallContent: [
        {
          prompt: "Why can a fishery collapse while the water quality reads fine?",
          answer: "Because a river is a network before it is a chemistry. Connectivity matters too, and a barrier can cut a migrating species off from spawning habitat without changing any chemical reading.",
        },
      ],
      body: `A team is paddling from Indiana to the Gulf of Mexico. This lesson is about reading what comes back, and about the discipline of not over-reading it.

## What field observation is good at

**Features.** Cut banks, point bars, meanders, braided reaches, oxbows, confluences, levees, revetments and locks are all visible and photographable, and the eye is a perfectly good instrument for them. A photo of a raw undercut bank opposite a sand slope is a direct observation of lesson 5.

**Change along the route.** A single trip traveling the length of a system produces something a fixed gauge cannot: a continuous impression of how the river changes character. Where it widens, slows, silts up, gets warmer, gets busier.

**The human river.** Barge traffic, riprap, outfalls, industry on the bank, towns turned toward or away from the water.

## What it is not good at

**Point measurements as evidence about a river.** A water temperature taken at 2pm at one bank describes that spot at that moment. Compared with a reading taken at dawn at midstream three hundred miles away, it says almost nothing, because place, time of day, weather and method all changed at once.

That is not a criticism of field data. It is the same lesson as 8: **one sample is a snapshot, and a series is what describes a river.** A single trip is by definition a single pass, so it produces a transect and not a time series.

## The honest use

Treat expedition material as **illustration and as questions**, not as measurement.

- Use photographs as evidence of features. They are excellent for that.
- Use readings as prompts. "The water was noticeably warmer below the town" is a question worth taking to a gauge record, not a finding.
- Where a reading disagrees with the gauge network, the interesting move is asking what differed, not deciding who is right.

## What to do with what arrives

Whatever the team sends back, run this on it:

1. **What was measured, and how?** (Course 1, lesson 1, arriving again.)
2. **What does it demonstrate directly?** Usually a feature.
3. **What does it merely suggest?** Usually anything numeric from a single reading.
4. **What would settle the suggestion?** Usually a gauge record, a repeat visit, or a published dataset.

:::reveal An expedition reports that the water was much warmer below a town than above it, from two readings taken four hours apart. Why is that not yet evidence of the town warming the river? ||| Because the readings differ in time as well as place, and river temperature changes substantially through the day. The comparison confounds location with time of day. It is a good question, and answering it needs simultaneous readings, or a gauge record covering both points.

## Sources

U.S. Geological Survey. (n.d.). *National Water Information System*. https://waterdata.usgs.gov/nwis

U.S. Environmental Protection Agency. (n.d.). *How's My Waterway*. https://mywaterway.epa.gov/`,
    },
    {
      slug: "who-decides-what-happens-to-the-river",
      title: "13 · Who decides what happens to the river",
      section: "Part 4 · Doing it yourself",
      recallContent: [
        {
          prompt: "Why is a single trip down a river a transect rather than a time series?",
          answer: "Because it passes each place once. It shows how the river changes along its length, not how any one place changes over time.",
        },
      ],
      body: `Everything physical in this course is governed by decisions, and the decisions are made in more places than most people expect.

## The federal layer

The **Clean Water Act** is the main federal statute. Two mechanisms matter for this course:

**Permits for discharges from a pipe.** Point sources need permits with limits. This mechanism worked well against the problem it was designed for, which is why rivers catching fire is a historical reference rather than a current event.

**Water-quality standards and impaired waters.** States set standards for their waters, identify waters that fail them, and are required to develop a **TMDL**: the total maximum daily load, essentially a budget for how much of a pollutant a water body can receive and still meet its standard, divided among sources.

## The gap worth understanding

A TMDL is a budget. **A budget is not an enforcement mechanism.**

For point sources, the budget flows into permits, which are enforceable. For **nonpoint** sources, which is where most of lesson 10's nitrogen comes from, there is generally no permit to attach it to. Agricultural runoff is largely addressed through voluntary programs and incentives rather than mandates.

So the structure is: a diagnosis with real legal force behind it, and for the largest contributor, a remedy that is mostly voluntary. That is not a hidden scandal; it is the visible design, and it is why lesson 10's problem persists while point-source pollution improved dramatically.

## Everyone else

- **States** set standards, run monitoring, and hold most day-to-day authority.
- **The Army Corps of Engineers** builds and operates navigation and flood-control works.
- **Interstate and basin bodies**, including the Hypoxia Task Force, coordinate across borders and generally set goals rather than rules.
- **Local government** decides land use, which is what actually determines lesson 2's infiltration.
- **Tribal nations** hold sovereign authority over their own waters and, in many cases, treaty-reserved rights that reach beyond reservation boundaries.

That last one is not a footnote, and the Civics course *Tribal Nations and Governance* covers it properly.

## Why this lesson is in a science course

Because the science alone determines nothing. A watershed is a physical system embedded in a jurisdictional one, and the boundaries do not line up: watersheds cross state lines, and a river's problems are basin-scale while nearly all authority is not.

:::reveal Point-source pollution improved dramatically under the Clean Water Act while nutrient runoff did not. What structural difference explains it? ||| A pipe can be permitted, and a permit is enforceable with limits attached. Diffuse runoff from many farms has no equivalent permit, so it is addressed largely through voluntary programs and incentives. The diagnosis has force; for the largest contributor, the remedy mostly does not.

## Sources

U.S. Environmental Protection Agency. (n.d.). *Clean Water Act and impaired waters (TMDL program)*. https://www.epa.gov/tmdl

U.S. Environmental Protection Agency. (n.d.). *Nonpoint source pollution*. https://www.epa.gov/nps`,
    },
    {
      slug: "check-the-watershed",
      title: "14 · Knowledge check: how a river works",
      section: "Part 4 · Doing it yourself",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A town paves much of its watershed. Residents report worse flooding and a creek that now runs dry in late summer. What single mechanism explains both?",
            options: [
              "Less water infiltrates, so storm flow arrives fast and all at once and little enters the ground to feed baseflow",
              "Paved surfaces absorb heat and raise evaporation, so more water leaves the watershed before it can reach the creek",
              "Storm drains route water to a different watershed, reducing the total volume the creek receives each year",
              "Compacted ground raises the water table, which pushes storm water to the surface and drains the aquifer",
            ],
            correctIndex: 0,
            explanation:
              "Paving removes the infiltration step. The same rainfall reaches the channel faster and together, raising flood peaks, and less of it goes into storage to sustain flow between storms. One change, both symptoms.",
            sourceLessonSlug: "where-a-rivers-water-comes-from",
          },
          {
            prompt: "A community experiences two '100-year floods' three years apart. Which conclusion is best supported?",
            options: [
              "This is unlikely but consistent with the estimate, since each year carries an independent 1 percent chance",
              "The estimate must be wrong, because two such events cannot occur within a hundred-year period",
              "The floods must have been smaller than the official threshold, since the interval was not observed",
              "The recurrence interval resets after each event, so the second flood was correctly predicted",
            ],
            correctIndex: 0,
            explanation:
              "A recurrence interval is a probability per year, not a schedule. Two close events are unlikely and entirely possible. They are also consistent with an outdated estimate if the watershed was paved or the climate shifted, and the event count alone cannot distinguish those.",
            sourceLessonSlug: "the-lie-inside-100-year-flood",
          },
          {
            prompt: "Water released below a dam is clear of sediment and erodes the channel downstream. Why does removing its load make it more erosive?",
            options: [
              "Capacity to carry sediment depends on the water's energy, so clear water arrives with capacity unspent",
              "Clear water is less dense, so it moves faster over the bed and scours it more aggressively",
              "Sediment normally armours the channel bed, and without a fresh supply that protective layer is lost",
              "Reservoir water is warmer, and warmer water dissolves bank material more readily than cold water",
            ],
            correctIndex: 0,
            explanation:
              "A river's carrying capacity is set by its energy, not by what it currently holds. Water that arrives loaded has spent that capacity; water arriving clear has it available and picks material up from bed and banks.",
            sourceLessonSlug: "sediment-and-what-a-dam-does-to-it",
          },
          {
            prompt: "What role does stratification play in Gulf hypoxia?",
            options: [
              "Warm fresh water layers over cold salt water and resists mixing, so the bottom layer cannot be re-oxygenated",
              "It concentrates nutrients into a thin band where algae can bloom far more densely than they otherwise would",
              "It traps sediment near the river mouth, and the sediment consumes oxygen as it slowly settles",
              "It separates fresh and salt water so that decomposing bacteria are confined to the fresher surface layer",
            ],
            correctIndex: 0,
            explanation:
              "Density layering cuts the bottom water off from the atmosphere while decomposition continues below it. That is why the zone is seasonal, worst in summer, and broken up temporarily by a large storm.",
            sourceLessonSlug: "why-the-oxygen-runs-out",
          },
          {
            prompt: "Point-source pollution improved dramatically under the Clean Water Act while agricultural nutrient runoff did not. What structural difference best explains the gap?",
            options: [
              "A pipe can be permitted with enforceable limits; diffuse runoff has no equivalent permit and is addressed largely voluntarily",
              "Nutrient runoff was not recognized as pollution under the statute until long after the point-source rules took effect",
              "Agricultural runoff is regulated by individual states, and no state has yet chosen to set limits on it",
              "Nutrients break down naturally in transit, so regulators concluded that limiting them at source would have no effect",
            ],
            correctIndex: 0,
            explanation:
              "The TMDL process produces a budget, and for point sources that budget flows into enforceable permits. For nonpoint sources there is generally no permit to attach it to, so the remedy is mostly incentives. The diagnosis has force; for the largest contributor, the remedy mostly does not.",
            sourceLessonSlug: "who-decides-what-happens-to-the-river",
          },
          {
            prompt: "A mussel bed holds only large old individuals, no young ones, and today's water chemistry reads normal. What does this most likely indicate?",
            options: [
              "Conditions suited settlement long ago and something since has prevented successful reproduction",
              "Mussels of this species stop reproducing once a bed reaches its maximum sustainable density",
              "The young individuals are present but too small to be detected by a standard bed survey",
              "Recent chemistry is normal, so the bed is healthy and the age structure carries no information",
            ],
            correctIndex: 0,
            explanation:
              "Mussels are stationary and long-lived, so a bed records conditions over decades. Missing recruitment points to something that stopped reproduction, and because many species' larvae must attach to a specific host fish, the cause can be a lost fish population rather than water chemistry.",
            sourceLessonSlug: "life-in-the-river",
          },
        ],
      },
    },
    {
      slug: "capstone-characterise-your-watershed",
      title: "15 · Capstone: characterise your own watershed",
      section: "Part 4 · Doing it yourself",
      lessonType: "assignment",
      body: `Describe the watershed you live in, using public data, and state plainly what you can and cannot conclude from it. Roughly 500 to 900 words.

Everything you need is free and online. No test kit, no fieldwork.

## What to submit

**1. Name and place it.** Which watershed, which larger basin does it belong to, and roughly how big. Say where your own address sits within it.

**2. The water.** Find the nearest USGS gauge with a usable record. Report what it measures and describe the pattern: seasonal highs and lows, how flashy the hydrograph is, whether flow between storms is well sustained. Interpret the shape using lesson 3. Do not compute anything.

**3. The land.** What is the watershed's land cover, roughly? Farmland, forest, urban, a mixture? Then connect it: what does that land cover predict about the hydrograph you just described, and does the prediction hold?

**4. What is known about its quality.** Check EPA's How's My Waterway and any state monitoring. Is any water body in your watershed listed as impaired, and for what? If nothing is listed, say so and say what that does and does not mean.

**5. One structure, one consequence.** Find one dam, levee, channel modification or major outfall in your watershed. Say what it was built for and one physical consequence downstream, using lessons 6 and 7.

**6. What you cannot conclude, and what would settle it.** The most important section. Name at least three things you genuinely could not determine: a gap in the gauge record, a parameter nobody measures locally, a question the impairment listing does not answer. For each, name what would settle it.

## How this is assessed

Not on whether your watershed turned out to be interesting or troubled. A watershed with sparse data and a plain description is a completely normal result, and reporting it honestly is a full-credit answer.

You are assessed on whether the public data was actually consulted and cited, whether the interpretation uses the mechanisms from the course rather than general impressions, and above all on section 6. **Naming what you could not determine is the skill.**

One rule, the same as Course 1: **do not assert what you did not check.** "I could not find a gauge with more than a few years of record" is a finding. Writing as though you read a record you did not read is the failure.

## Sources

U.S. Geological Survey. (n.d.). *National Water Information System*. https://waterdata.usgs.gov/nwis

U.S. Environmental Protection Agency. (n.d.). *How's My Waterway*. https://mywaterway.epa.gov/`,
    },
  ],
};
