import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 9 of 11: Finding Your Way, and Losing It. RIVER-09.
//
// Navigation, adversity, mismanaged resources, getting lost. Scenario-based, because judgement under
// uncertainty is the subject and it cannot be assessed by recall. Plan: plans/56.

export const RIVER_FINDING_YOUR_WAY_COURSE: AuthoredCourse = {
  title: "Finding Your Way, and Losing It",
  description:
    "How navigation actually works on a large river, why capable people still get lost, and what to do when a plan fails, resources run short, or the group stops agreeing. The judgement half of an expedition, which is the half that decides how it ends.",
  lessons: [
    {
      slug: "you-cannot-get-lost-on-a-river",
      title: "1 · You cannot get lost on a river, and people do",
      section: "Section 1 · Knowing where you are",
      body: `A river runs one way. Follow it downstream and you arrive. It sounds impossible to get lost.

People do, and the reasons are worth understanding because none of them is stupidity.

## The four ways it actually happens

**Side channels and chutes.** A large river braids. A channel that looks like the main one can be a side channel that shallows out, dead-ends, or rejoins miles later after a great deal of unnecessary work. In some conditions the wrong choice is not obviously wrong until it is too late to go back against the current.

**Featureless repetition.** On long stretches, one bend looks exactly like the last. Without deliberate position-keeping, an estimate of where you are drifts. People are routinely wrong by tens of miles about their own position after several days of this.

**The map and the river disagree.** Channels move, bars form and vanish, and a chart or a satellite image can be older than the ground truth. The map is a claim about the river, not the river.

**Night and weather.** Fog, rain, and dark remove the references you were unconsciously using. Many people discover which references they were relying on only when they are gone.

## Being lost is a state, not an event

The useful definition: **you are lost when your belief about your position stops matching reality**, whether or not you have noticed.

That is why the dangerous period is not the moment of confusion. It is the hours before it, when you were confidently wrong and making decisions on that basis. By the time you know, every decision since the error inherits it.

## The habit that prevents most of it

**Fix your position regularly, and write it down.** Not when you feel uncertain, on a schedule. The whole value is that it catches the error you have not noticed.

Second: **know your last certain position.** When something stops making sense, the right move is usually to work forward from the last point you were sure of, rather than to reason from where you assume you are now.

:::reveal What is the useful definition of being lost? ||| Your belief about your position has stopped matching reality, whether or not you have noticed yet.

:::reveal Why fix your position on a schedule rather than when you feel uncertain? ||| Because the whole value is catching the error you have not noticed. Confidence is not evidence of accuracy.`,
    },
    {
      slug: "when-the-plan-fails",
      title: "2 · When the plan fails",
      section: "Section 2 · Judgement under pressure",
      body: `Every expedition's plan is wrong. The question is only how, and what happens next.

## Three failures that recur

**Falling behind.** The daily distance was optimistic, or the weather did not cooperate. Now the resupply is further away than the food allows.

**A resource mismanaged.** Water, food, fuel, battery or daylight runs shorter than expected. Usually this is not a single error but a small accumulating one that nobody was tracking.

**A capability lost.** Equipment breaks, someone is injured or ill, or the group's ability to make decisions together degrades.

## The failure mode that turns a problem into an accident

It is almost always the same one: **committing further because you have already committed.**

You are behind schedule, so you paddle later into the evening. You are low on water, so you push for the town rather than stopping. You are tired, so you skip the scout. Each decision is individually defensible and each one reduces your margin, and margin is the thing that absorbs the next surprise.

The people this happens to are not reckless. They are people who correctly identified a problem and chose the option that felt like progress.

## The counter-habit

**Decide the turn-back rule before you need it.** In advance, when nothing is at stake: at what point do we stop for the day, take the layover, call for a resupply, or end the trip?

A rule set in advance survives contact with the desire to keep going. A judgement made at the moment does not, because at the moment you are tired, invested and want to be finished.

## Groups

Most expedition failures are described afterwards in terms of weather or equipment. A large share are actually about people: who decides, what happens when two people disagree, and whether the person who is least happy will say so.

Two things help, and both must be established early. **Somebody has to be able to make a call**, at least in the moment. And there must be a way for the least confident person in the group to stop the day without it being a defeat.

## What to watch for in the dispatches

The team has been asked explicitly for their failures: the gear that broke, the plans that fell apart, the days they misjudged. It is the highest-value material on their list and the thing nobody sends unprompted.

When it arrives, resist the urge to judge them. Ask instead: **what did they believe that turned out to be wrong?** That sentence is where the transferable lesson always is.

:::reveal What is the failure mode that turns a problem into an accident? ||| Committing further because you have already committed. Each decision feels like progress and each reduces the margin that absorbs the next surprise.

:::reveal Why set a turn-back rule in advance? ||| Because at the moment of decision you are tired, invested and want to finish. A rule set when nothing is at stake survives that; a judgement made in the moment does not.`,
      recallContent: [
        {
          prompt: "Name the three recurring plan failures on a long trip.",
          answer:
            "Falling behind schedule, mismanaging a resource such as water or fuel, and losing a capability through breakage, injury or group breakdown.",
        },
        {
          prompt: "What question should you ask of someone else's failure account?",
          answer:
            "What did they believe that turned out to be wrong? That is where the transferable lesson is.",
        },
      ],
    },
    {
      slug: "quiz-finding-your-way",
      title: "3 · Knowledge check: judgement",
      section: "Section 2 · Judgement under pressure",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "You realise you are unsure of your position after several hours. What is the better move?",
            options: [
              "Continue downstream until a recognisable landmark resolves the uncertainty",
              "Work forward from your last certain position rather than reasoning from where you assume you are",
              "Estimate your speed and elapsed time to calculate your most likely current location",
              "Cross to the opposite bank, where features are usually easier to identify",
            ],
            correctIndex: 1,
            explanation:
              "Reasoning from an assumed position compounds whatever error you have already made. The last point you were certain of is the only reliable anchor you have.",
            sourceLessonSlug: "you-cannot-get-lost-on-a-river",
          },
          {
            prompt: "Why is the dangerous period not the moment you notice you are lost?",
            options: [
              "Noticing usually happens near dark, when options are already limited",
              "The hours before it were spent confidently wrong, and every decision since inherits the error",
              "Recognising the problem causes people to panic and make worse choices immediately",
              "By then you have usually travelled beyond the range of any rescue",
            ],
            correctIndex: 1,
            explanation:
              "Being lost is a state rather than an event: your belief stopped matching reality some time before you found out, and everything decided in between rests on it.",
            sourceLessonSlug: "you-cannot-get-lost-on-a-river",
          },
          {
            prompt: "A team is behind schedule and low on water, and decides to paddle after dark to reach a town. What is the concern?",
            options: [
              "Each decision is defensible on its own while together they reduce the margin for the next surprise",
              "Paddling after dark is prohibited on rivers with commercial navigation traffic",
              "Night travel makes it impossible to fix a position by any available method",
              "Water discipline collapses once a group agrees to press on rather than stop",
            ],
            correctIndex: 0,
            explanation:
              "This is committing further because you have already committed. The people it happens to are not reckless; they identified a real problem and chose the option that felt like progress.",
            sourceLessonSlug: "when-the-plan-fails",
          },
          {
            prompt: "What does a turn-back rule provide that in-the-moment judgement does not?",
            options: [
              "It removes the need for anyone in the group to hold decision-making authority",
              "It was set when nothing was at stake, so it survives the desire to keep going",
              "It guarantees the group will finish within the schedule originally planned",
              "It shifts responsibility for the decision away from any individual member",
            ],
            correctIndex: 1,
            explanation:
              "At the decision point you are tired, invested and want to be finished, which is exactly when judgement is least reliable. A rule made in advance is not subject to that pressure.",
            sourceLessonSlug: "when-the-plan-fails",
          },
        ],
      },
    },
    {
      slug: "finding-your-way-sources",
      title: "4 · Sources",
      section: "Section 2 · Judgement under pressure",
      body: `## What this course is, and is not

It is about **judgement**, which is why it is scenario-based and why almost nothing in it is a fact to memorise. It is not navigation instruction and not a safety qualification. Learning to navigate requires doing it under supervision, and learning to handle a river requires water.

## The one claim worth checking yourself

The turn-back rule idea, and the pattern of incremental commitment that defeats it, is not unique to rivers. It appears in mountaineering, aviation and diving literature under various names, and the accident reports of all three are full of it.

That convergence is the best evidence that it is a real pattern rather than folklore, and reading one field's accident reports is a fast way to recognise it in your own.

## Sources

- U.S. Coast Guard. *Navigation rules and regulations handbook*. https://www.navcen.uscg.gov/navigation-rules-amalgamated

- U.S. Army Corps of Engineers. *Inland electronic navigational charts*. https://www.agc.army.mil/Missions/Echarts/

- National Weather Service. *Marine and river forecasts*. https://www.weather.gov/

- American Canoe Association. *Safety and instruction resources*. https://americancanoe.org/safety/

- National Transportation Safety Board. *Accident reports and safety studies*. https://www.ntsb.gov/investigations/Pages/Reports.aspx

:::reveal Why is the incremental-commitment pattern likely to be real rather than folklore? ||| It appears independently in mountaineering, aviation and diving accident literature, and convergence across unrelated fields is good evidence.

:::reveal What does this course explicitly not provide? ||| Navigation instruction or a safety qualification. Both require supervised practice on real water.`,
    },
  ],
};
