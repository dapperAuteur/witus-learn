import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 4 of 11: The Engineered River. RIVER-04.
//
// This is the safety course, and the correction to the source notes' generic outdoor-ed content.
// What kills paddlers here is barge blind spots, wing dams and lock protocol, not hypothermia.
// Plan: plans/56 §1.

export const RIVER_LOCKS_DAMS_AND_BARGES_COURSE: AuthoredCourse = {
  title: "The Engineered River: Locks, Dams and Barges",
  description:
    "The Ohio and the Mississippi are not natural waterways with some structures added. They are machines for moving freight, maintained continuously and at enormous expense. What that machinery is, why it exists, and why it makes this the most dangerous part of the journey.",
  lessons: [
    {
      slug: "a-machine-for-moving-freight",
      title: "1 · A machine for moving freight",
      section: "Section 1 · Why the river was rebuilt",
      body: `Left alone, a large river is a poor transport route. It runs shallow in some seasons and dangerous in others, it shifts its channel, and it has stretches nothing can pass.

So it was rebuilt. Along the Ohio's 981-mile course there are **19 navigation structures** managed by the U.S. Army Corps of Engineers. The result is a river held at usable depths, in pools, so that barge traffic can run reliably.

That is the purpose. Not scenery, not recreation, not ecology. **Freight.**

## Why freight goes by water at all

Because it is efficient for the right cargo. A single tow can move a quantity of grain, coal, steel, chemicals or aggregate that would otherwise require a very large number of trucks. For bulk goods that are heavy, low-value per tonne and not in a hurry, water is hard to beat.

That efficiency is the argument that built and maintains the system, and it is a real argument. It is also why the river's shape reflects the needs of commerce rather than of anything else that uses it.

## What "engineered" looks like from a kayak

- **Locks and dams** holding water at a depth.
- **Wing dams and dikes**, structures reaching out from the bank to squeeze flow into the middle and keep the channel scoured deep. Frequently just under the surface.
- **Revetment**, armouring on the bank to stop the river moving.
- **Levees**, walls set back from the channel to keep floodwater off the land.
- **Terminals and outfalls**, where the economy touches the water directly.

## The idea to carry forward

Everything on that list exists because somebody decided the river should stop doing something it does naturally. Move. Flood. Run shallow. Change course.

Every one of those decisions had costs, and they were not paid by the people who benefited most. That is where the later courses in this series go. For now: **this is a built environment**, and the paddlers are small, soft, slow-moving objects inside it.

:::reveal What is the purpose of the navigation structures on the Ohio? ||| Holding the river at usable depths so barge traffic can run reliably. The system exists for freight.

:::reveal What do wing dams, revetment and levees have in common? ||| Each exists to stop the river doing something it does naturally: scattering its flow, moving its channel, or flooding its plain.`,
    },
    {
      slug: "the-blind-spot",
      title: "2 · The blind spot",
      section: "Section 2 · What can kill you here",
      body: `This is the most important lesson in the series for anyone who might ever paddle a river like this.

Commercial tows operate on these rivers **365 days a year, 24 hours a day.** A towboat pushes a raft of barges ahead of it, sometimes an enormous one, lashed together into a single rigid unit.

## Why the pilot cannot see you

Draw a line from the pilot's eyes in the wheelhouse, over the top of the barges at the front of the load, and down to the water. Everything inside that line is invisible from the wheelhouse, and **it can extend hundreds of feet in front of the vessel.**

A kayak sitting in that zone is not being ignored. It cannot be seen. There is no amount of waving that helps.

## Why they cannot avoid you

Barges are limited in their ability to manoeuvre because of their size and weight. They **cannot turn or stop quickly.** A loaded tow needs a long distance and a long time to do either, and in a narrow channel it may have nowhere to go.

Put those two facts together and the conclusion is uncomfortable but simple: **the entire responsibility for avoiding a collision belongs to the small boat.** Not because that is fair, but because the small boat is the only party with the ability to act.

## The practical rules that follow

- **Stay out of the channel.** The marked navigation channel is where tows must be.
- **Cross deliberately and quickly**, at as close to a right angle as possible, and only when you can see clearly in both directions.
- **Assume you are invisible.** Never make a decision that depends on being seen.
- **Watch the water, not just the vessel.** A tow moves water a long way ahead and to the sides of itself.
- **Never pass close in front.** The margin you think you have is calculated against a vessel that cannot stop.

## Why this belongs in a course for people who will never paddle it

Because it is a clean example of a general principle: in a system where one party has all the mass and none of the visibility, **the burden of avoidance falls on whoever retains the ability to act**, regardless of who created the hazard. That shows up in a great many places outside rivers.

:::reveal Why can a towboat pilot fail to see a kayak directly ahead? ||| The barges create a blind spot ahead of the vessel that can extend hundreds of feet, so a small boat inside it is genuinely invisible.

:::reveal Why does avoidance become entirely the small boat's job? ||| The tow cannot see it and cannot stop or turn quickly, so the small boat is the only party with the ability to act.`,
      recallContent: [
        {
          prompt: "State the two facts that make barge traffic so dangerous to small craft.",
          answer:
            "The barges create a blind spot ahead of the vessel that can run hundreds of feet, and the tow cannot turn or stop quickly because of its size and weight.",
        },
        {
          prompt: "What is the single operating assumption a paddler should hold near commercial traffic?",
          answer:
            "Assume you are invisible, and never make a decision that depends on being seen.",
        },
      ],
    },
    {
      slug: "locks-and-structures",
      title: "3 · Locking through, and what lurks under the surface",
      section: "Section 2 · What can kill you here",
      body: `Two more hazards, both specific to this river and neither covered by general outdoor advice.

## Locking through

A lock is a chamber that raises or lowers vessels between two water levels. Passing through one is **a procedure with rules**, not something you improvise.

The essentials, and the reason each exists:

- **Small craft have their own instructions**, and they are not the same as commercial traffic's. Follow the posted guidance and the lock operator's direction.
- **Commercial traffic has priority.** A tow may take a long time to lock through, sometimes in two pieces. Waiting is normal.
- **Signal and wait.** There is a defined way to request passage and a defined way to be told when to enter.
- **Inside the chamber, water moves.** Filling and emptying creates turbulence a small boat feels far more than a barge does.
- **Portaging around** is often the sensible choice for a kayak, and at some structures it is expected.

The general principle: a lock is somebody's workplace with active machinery in it, and the operator is coordinating vessels that cannot easily stop. Be predictable.

## Wing dams and low-head dams

**Wing dams** reach out from the bank into the channel to squeeze the flow and keep the middle scoured deep. Many sit just below the surface. The water above and downstream of one behaves strangely: boils, eddies, sudden shallows, and current that pushes sideways when you expect it to push forward.

**Low-head dams** are a different and worse problem, and they are worth knowing about even if you never go near a river. A low-head dam is a small structure spanning the channel, often only a metre or two high, with water flowing evenly over the top. It looks harmless. Below it, water recirculates back toward the face of the dam in a continuous loop.

That recirculation can hold a floating object, including a person, and return it to the face repeatedly. These structures have a grim reputation in river safety for exactly this reason, and they are dangerous precisely because they do not look dangerous.

The rule is unambiguous: **do not run one, and do not approach from below.** Portage.

:::reveal Why is a low-head dam more dangerous than it looks? ||| Water flowing evenly over it recirculates back toward the face below, and that loop can hold a floating person and return them to the dam repeatedly.

:::reveal Why does a lock operator's direction take precedence over a paddler's plan? ||| A lock is a workplace coordinating vessels that cannot easily stop, so predictability from the smallest craft is what keeps the sequence safe.`,
    },
    {
      slug: "quiz-engineered-river",
      title: "4 · Knowledge check: the engineered river",
      section: "Section 2 · What can kill you here",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the primary purpose of the Ohio River's navigation structures?",
            options: [
              "Flood control for the towns and farmland along the river's course",
              "Holding the river at usable depths so commercial barge traffic can run reliably",
              "Generating hydroelectric power for the communities along the valley",
              "Maintaining habitat and water quality for fish populations in the main channel",
            ],
            correctIndex: 1,
            explanation:
              "The system exists for freight. Flood control, power and habitat are handled by other structures or not at all, and the river's shape reflects commerce rather than those uses.",
            sourceLessonSlug: "a-machine-for-moving-freight",
          },
          {
            prompt: "Why must a paddler assume a towboat crew cannot see them?",
            options: [
              "Wheelhouse crews are focused on instruments rather than on watching the water ahead",
              "The barges being pushed create a blind spot that can extend hundreds of feet forward",
              "Small craft sit too low in the water to appear on the vessel's navigation radar",
              "Commercial pilots are required to watch only the marked channel, not its margins",
            ],
            correctIndex: 1,
            explanation:
              "The load itself blocks the sightline, and the zone it hides can run to hundreds of feet. Being seen is not something a paddler can rely on, so no decision should depend on it.",
            sourceLessonSlug: "the-blind-spot",
          },
          {
            prompt: "What makes a low-head dam particularly dangerous?",
            options: [
              "Water recirculates back toward the face below it and can hold a floating person there",
              "The drop is high enough that a fall from the crest causes serious injury on impact",
              "Debris collects on the upstream face and can entangle a boat approaching from above",
              "The structure is usually unmarked, so paddlers reach it without any warning at all",
            ],
            correctIndex: 0,
            explanation:
              "The even flow over the crest creates a recirculating loop below that returns floating objects to the dam face repeatedly. It is dangerous precisely because it looks harmless.",
            sourceLessonSlug: "locks-and-structures",
          },
          {
            prompt: "A wing dam changes the river in what way?",
            options: [
              "It raises the water level upstream to create a navigable pool behind it",
              "It reaches out from the bank to squeeze flow into the middle and keep the channel deep",
              "It spans the full channel to slow the current during high-water periods",
              "It diverts a portion of the flow into a side channel to reduce erosion downstream",
            ],
            correctIndex: 1,
            explanation:
              "Wing dams constrict the flow so the main channel scours itself deep enough for navigation. Many sit just below the surface, which is why the water around them behaves unexpectedly.",
            sourceLessonSlug: "locks-and-structures",
          },
        ],
      },
    },
    {
      slug: "engineered-river-sources",
      title: "5 · Sources, and the limits of a course",
      section: "Section 2 · What can kill you here",
      body: `A short closing lesson, and one disclaimer that matters more than usual.

## This course is not a safety qualification

It explains why this river is dangerous and what the principal hazards are. **It does not make anyone competent to paddle it.** That requires instruction, practice, local knowledge, current conditions, and judgment that no written course can supply.

If you are planning to be on water like this, take a course from an instructor who can watch you do things, and get current information from the authority that manages the stretch you are on. Conditions change with flow, season and traffic, and none of that is knowable from here.

That disclaimer is not boilerplate. Water is the one topic in this series where a confident half-understanding is worse than knowing nothing, because it produces people who go out.

## What the paddlers will document

Photographs of locks, wing dams, levees, revetment and tows, from a safe distance. Almost no curriculum has decent primary imagery of these structures, which is a strange gap given how completely they shape the landscape.

They have also been asked to record the sound of a lock, and of a tow passing. Sound conveys the scale of these machines better than photographs do.

## Sources

- U.S. Army Corps of Engineers, Louisville District. *Navigation on the Ohio River*. https://www.lrl.usace.army.mil/Missions/Civil-Works/Navigation/

- Ohio River Way. *How to safely paddle the Ohio River with confidence*. https://www.ohioriverway.org/news/how-to-safely-paddle-the-ohio-river-with-confidence

- Ohio Department of Natural Resources. *Locking through*. https://ohiodnr.gov/discover-and-learn/land-water/ohio-river-watershed/locking-through

- U.S. Coast Guard. *Navigation rules and regulations handbook*. https://www.navcen.uscg.gov/navigation-rules-amalgamated

- Code of Federal Regulations, Title 33 §207.300. *Ohio River, Mississippi River above Cairo, and their tributaries: use, administration and navigation*. https://www.ecfr.gov/current/title-33/chapter-II/part-207/section-207.300

:::reveal What does this course explicitly not do? ||| Make anyone competent to paddle this river. That needs instruction, practice, local knowledge and current conditions, none of which a written course supplies.

:::reveal Why were the paddlers asked to record sound at a lock and a passing tow? ||| Sound conveys the scale of the machinery better than photographs, and there is almost no good primary media of these structures.`,
      recallContent: [
        {
          prompt: "Why is a confident half-understanding of river safety worse than none?",
          answer: "Because it produces people who go out.",
        },
      ],
    },
  ],
};
