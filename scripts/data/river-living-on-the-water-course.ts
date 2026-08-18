import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 8 of 11: Living on the Water. RIVER-08.
//
// AUTHORING RULE: the source notes treated foraging and hunting casually. Most of this corridor is
// private land, levee district or state-regulated, and "where legal" was doing enormous work in that
// sentence. This course states the legal reality first and the technique second. Plan: plans/56.

export const RIVER_LIVING_ON_THE_WATER_COURSE: AuthoredCourse = {
  title: "Living on the Water",
  description:
    "Months of camping, cooking, water treatment and resupply along a corridor that is mostly private land, levee district and regulated ground. What it actually takes to live beside a working river, and why the legal question comes before the practical one.",
  lessons: [
    {
      slug: "whose-land-is-that",
      title: "1 · Whose land is that, actually",
      section: "Section 1 · The legal reality first",
      body: `Popular accounts of long river journeys skip straight to camp craft. That gets the order wrong, because the first question at the end of every day is not how to pitch a shelter. It is **whether you are allowed to be here.**

## The corridor is not open country

Along most of this route the bank is one of: private property, land inside a levee district, a wildlife or conservation area with its own rules, a working industrial site, or public land with restrictions on overnight use.

There is no general right to camp on a riverbank because it is next to a river.

## Why this varies so much

Land ownership and public access rules are set at state and local level, and they differ substantially between the states this route passes. Rules about what you may do also vary by the type of land: a state wildlife area, an Army Corps project and a private farm each have different answers, and the answer can change with the season.

**This course is not going to tell you the rule for your state**, because there is no single rule and a confident summary would be worse than useless. What it can tell you is the shape of the question.

## The questions that actually matter

Before an overnight stop anywhere on water like this:

- **Who owns or manages this ground?** Ask if you can, look it up if you cannot.
- **Is overnight use permitted, and does it need a permit?** These are different questions.
- **Is there a designated site nearby?** Many managing agencies maintain them, and using one solves the problem entirely.
- **What is the flood situation?** A legal site can still be a bad site.
- **If in doubt, ask.** A landowner asked in daylight is usually far more accommodating than a landowner who discovers you at dusk.

## Sandbars

On the Lower Mississippi much camping happens on sandbars, which are unstable, sometimes accreting, and legally more complicated than they look. Their ownership and use can depend on the water level and on state law about accretion.

They can also disappear. A bar that is dry ground in the evening can be underwater by morning if a release upstream raises the level.

## The principle

**Permission first, technique second.** Every practical skill in the rest of this course assumes you are somewhere you are allowed to be, and the most common serious problem on a long trip is not a lack of skill. It is being somewhere you should not be, at the wrong moment.

:::reveal Why can this course not tell you the camping rule for your state? ||| Access rules are set state and locally and vary by land type and season. There is no single rule, and a confident summary would be worse than useless.

:::reveal Why is a sandbar campsite legally and practically complicated? ||| Ownership and use can depend on water level and state law about accretion, and a bar that is dry at dusk can be underwater by morning.`,
    },
    {
      slug: "water-food-and-fuel",
      title: "2 · Water, food and fuel",
      section: "Section 2 · Keeping going",
      body: `Three problems recur every day for months, and each has a version specific to a large working river.

## Water

River water on this corridor carries agricultural runoff, urban stormwater and industrial discharge, and the load changes with rainfall and location.

The important distinction is between **filtration** and **purification**. Filtration removes particles and many organisms by physical means. Purification, by boiling or by chemical treatment, addresses things a filter may not.

Neither reliably removes dissolved chemical contamination. That is the honest limitation, and it is why long trips on rivers like this usually carry or resupply drinking water rather than treating the main channel, and treat only as a fallback.

**Sediment first.** Heavily silted water clogs filters quickly. Letting it stand so sediment settles, or pre-filtering through cloth, extends a filter's life enormously.

## Food

Two things get people into trouble. The first is underestimating how much a body burns doing this for weeks. The second is the moment when food is technically adequate and psychologically intolerable, which arrives sooner than anyone expects and is a real cause of trips ending.

Practicalities: resupply points are towns, which means the schedule is shaped by where shops are rather than by where the paddling is good. Heat and damp are the enemies of anything not sealed. And the last few days before a resupply is when planning errors surface.

## Foraging and fishing, stated properly

This is where the popular version of river travel is most misleading.

**Fishing requires a license in every state on this route, and the license is per state.** A journey crossing several state lines crosses several licensing regimes. Rules on species, size, season and method vary, as do advisories about eating what you catch from particular stretches, which exist for a reason on a river carrying this much.

**Foraging on land requires permission or legal access**, which returns you to lesson 1. Gathering on private ground without permission is trespass regardless of what you gather. Rules on public land vary by managing agency, and many conservation areas restrict or prohibit it.

**Identification is a serious matter**, and no written course can teach it responsibly. Several edible plants have dangerous look-alikes.

The practical conclusion for an expedition of this length: **foraging and fishing are supplements and diversions, not a food plan.** Anyone treating them as a plan has substituted an appealing story for arithmetic.

## Fuel and cooking

A stove is reliable and a fire is not, because dry fuel is not guaranteed and open fires are restricted or prohibited in many places along this corridor. Fire restrictions change seasonally and are worth checking rather than assuming.

:::reveal What does neither filtration nor chemical treatment reliably remove? ||| Dissolved chemical contamination, which is why trips on rivers like this carry or resupply drinking water rather than relying on treating the main channel.

:::reveal Why are foraging and fishing supplements rather than a food plan? ||| Licensing is per state and varies, access requires permission, identification is genuinely hazardous, and the yield is unreliable. Treating them as a plan substitutes a story for arithmetic.`,
      recallContent: [
        {
          prompt: "What is the difference between filtration and purification?",
          answer:
            "Filtration removes particles and many organisms physically. Purification, by boiling or chemicals, addresses things a filter may not. Neither handles dissolved chemical contamination.",
        },
        {
          prompt: "Why does a multi-state river journey complicate fishing?",
          answer:
            "Licences are per state, and rules on species, size, season, method and consumption advisories all vary between them.",
        },
      ],
    },
    {
      slug: "quiz-living-on-the-water",
      title: "3 · Knowledge check: living on the water",
      section: "Section 2 · Keeping going",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the first question before camping on a riverbank?",
            options: [
              "Whether the ground is high enough to stay dry through the night",
              "Who owns or manages the ground, and whether overnight use is permitted",
              "Whether the site is sheltered from the prevailing wind direction",
              "How far it is to the next town in case a resupply becomes necessary",
            ],
            correctIndex: 1,
            explanation:
              "There is no general right to camp beside a river. Every practical consideration assumes you are somewhere you are allowed to be, which is why permission comes before technique.",
            sourceLessonSlug: "whose-land-is-that",
          },
          {
            prompt: "Why do long trips on a river like this usually carry or resupply drinking water?",
            options: [
              "Treatment equipment is too heavy to carry for the length of such a journey",
              "Neither filtration nor chemical treatment reliably removes dissolved chemical contamination",
              "The current makes it impractical to stop long enough to treat water each day",
              "Treated river water spoils quickly in heat, so it cannot be stored between camps",
            ],
            correctIndex: 1,
            explanation:
              "Filters and chemicals handle particles and organisms. A corridor carrying agricultural, urban and industrial discharge presents a problem neither addresses.",
            sourceLessonSlug: "water-food-and-fuel",
          },
          {
            prompt: "What complicates fishing on a journey crossing several states?",
            options: [
              "Licences are per state, and species, size, season and method rules vary between them",
              "A federal permit is required for any fishing on a navigable interstate waterway",
              "Commercial traffic has exclusive rights to fish stocks within the navigation channel",
              "Fishing is prohibited outright within levee districts along most of the corridor",
            ],
            correctIndex: 0,
            explanation:
              "Crossing state lines means crossing licensing regimes, and consumption advisories for particular stretches vary too, which matters on a river carrying this much.",
            sourceLessonSlug: "water-food-and-fuel",
          },
          {
            prompt: "Why is a sandbar an unreliable campsite?",
            options: [
              "Sand does not hold tent pegs, so shelters cannot be secured against wind",
              "It can be underwater by morning if an upstream release raises the level",
              "Sandbars are always federally owned and closed to any overnight use",
              "They accumulate debris that makes landing a loaded boat impractical",
            ],
            correctIndex: 1,
            explanation:
              "Water level is controlled from far upstream and can change overnight. Sandbar ownership is also legally complicated and can depend on the level and on state accretion law.",
            sourceLessonSlug: "whose-land-is-that",
          },
        ],
      },
    },
    {
      slug: "living-sources",
      title: "4 · Sources, and a warning",
      section: "Section 2 · Keeping going",
      body: `## The warning, and it is the important part

**This course does not qualify anyone to do any of this.** It describes the shape of the problems and where the answers live. It is not a substitute for current, local, official information, and it is not survival instruction.

Three things in particular must be checked against an authoritative source, every time, because they change:

- **Access and camping rules**, which vary by state, by land type and by season.
- **Fishing licenses and consumption advisories**, which are per state and are updated.
- **Fire restrictions**, which change with conditions.

Each of those is owned by an agency. Read it from the agency.

## Why the legal framing came first

The source material this series was built from treated foraging and hunting as a cheerful aside. On this corridor that is misleading. Most of the bank is private, levee district or regulated, and the phrase "where legal" was carrying an enormous amount of weight.

Getting that order right is not pedantry. The most likely serious problem on a trip like this is not a skills failure. It is being somewhere you are not permitted to be.

## Sources

- U.S. Army Corps of Engineers. *Recreation: rules and permits on Corps projects*. https://www.usace.army.mil/Missions/Civil-Works/Recreation/

- Centers for Disease Control and Prevention. *Making water safe in an emergency*. https://www.cdc.gov/healthywater/emergency/making-water-safe.html

- U.S. Environmental Protection Agency. *Fish consumption advisories*. https://www.epa.gov/fish-tech

- U.S. Fish and Wildlife Service. *Fishing licences and regulations by state*. https://www.fws.gov/program/national-fish-hatchery/fishing

- Leave No Trace Center for Outdoor Ethics. *The seven principles*. https://lnt.org/why/7-principles/

:::reveal Which three things must be checked against an authoritative source every time? ||| Access and camping rules, fishing licences and consumption advisories, and fire restrictions. All vary and all change.

:::reveal What is the most likely serious problem on a trip like this? ||| Not a skills failure. Being somewhere you are not permitted to be.`,
      recallContent: [
        {
          prompt: "State this course's ordering principle in four words.",
          answer: "Permission first, technique second.",
        },
      ],
    },
  ],
};
