import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 1 of 11: What an Expedition Is.
//
// Plan: plans/56-river-expedition-series.md. Series code RIVER, position 01. FREE, because it is the
// series funnel and the course that has to earn a stranger's attention.
//
// THE RULE THIS SERIES IS BUILT ON, and the one not to break while authoring the rest: the history
// is never the backdrop to the adventure. The adventure is the occasion for the history. A
// recreational paddle down a route that carried people south against their will reads as glib if
// that ordering is inverted, so lessons lead with the record and the sources, not with how the
// paddlers felt about it.
//
// The expedition is real and paddles in the Spring. Every course in this series is authored to stand
// alone BEFORE it launches, so nothing here depends on material arriving. Dispatches layer on top.

export const RIVER_WHAT_AN_EXPEDITION_IS_COURSE: AuthoredCourse = {
  title: "What an Expedition Is",
  description:
    "A team is paddling from Indiana to the Gulf of Mexico, roughly 1,100 miles of the Wabash, the Ohio and the Lower Mississippi. This course is how to follow it as an expedition rather than a trip: what the route actually is, what makes the water dangerous, and why the direction they are traveling is the most interesting thing about it.",
  lessons: [
    {
      slug: "trip-versus-expedition",
      title: "1 · A trip and an expedition are different things",
      section: "Section 1 · What you are following",
      body: `Somebody is about to get into a kayak in Indiana and get out of it, months later, at the Gulf of Mexico. Roughly eleven hundred miles of moving water.

That could be a trip. What makes it an expedition is four things, and you can use them to judge any journey anyone tells you about.

**A question.** A trip goes somewhere. An expedition is trying to find something out. The question can be small, but it has to exist, and it has to be answerable.

**A plan that can survive being wrong.** Not a schedule. A plan with decision points in it: what happens if the water is too high, if somebody is hurt, if a resupply town turns out to have closed its only shop.

**A record.** If nothing is written down, measured or captured, nobody afterwards can learn anything from it, including the people who went. A trip is remembered. An expedition is recorded.

**A reason it matters to someone who did not go.** This is the one people skip. If the only value is the experience of the participants, that is a holiday, and holidays are good. An expedition produces something other people can use.

## Why this matters for you

You are going to follow this journey for months. If you follow it as a trip, you will get an adventure story: weather, blisters, a nice sunset, an alligator. Fine, and forgettable.

If you follow it as an expedition, the same journey gives you a watershed, an engineered river, an economy, a history that most people never learn, and a set of decisions made under real pressure that you can study and argue with.

Same river. Different thing entirely, depending on what you bring to it.

## The honest part

Expeditions are also mostly boring, uncomfortable, and full of small failures. The good ones say so. If an account of a journey contains no mistakes, no bad days and no changed plans, you are reading marketing rather than a record.

:::reveal What separates an expedition from a trip? ||| A question it is trying to answer, a plan that survives being wrong, a record, and value to someone who did not go.

:::reveal An account of a journey contains no mistakes or bad days. What should you conclude? ||| That you are probably reading marketing rather than a record. Real journeys produce failures, and honest accounts include them.`,
    },
    {
      slug: "the-route",
      title: "2 · The route, and why it is three different rivers",
      section: "Section 1 · What you are following",
      body: `The journey is not one river. It is three, and they behave so differently that the same paddler in the same boat is doing three different activities.

**The Wabash.** It rises in Ohio, runs across Indiana, and forms part of the Indiana and Illinois border before reaching the Ohio River. This is the small-water stage: the paddler can usually see both banks clearly, read the current, and pick a line. Hazards are natural ones, mostly strainers, shallows and weather.

**The Ohio.** From the Wabash's mouth, the Illinois stretch of the Ohio runs about 133 miles to the Mississippi at Cairo, Illinois. Everything changes here. The Ohio is a commercial highway with locks and dams, and along its 981-mile course there are 19 navigation structures managed by the Army Corps of Engineers. The paddler is now sharing the water with vessels that cannot see them.

**The Lower Mississippi.** From Cairo, it runs just under 1,000 miles to the Gulf. There are no locks on this stretch. Instead there is volume: a river carrying the drainage of most of a continent, moving fast, with a shipping channel and very few places to get off the water.

## Picture the shape

Think of a tree. Indiana sits on one of the branches. The Mississippi is the trunk. The Gulf is the ground the trunk stands in. Everything upstream of a point drains through that point, which is why the water passing the paddlers at Cairo has come from places they have never been.

## Why the stages matter more than the miles

A beginner counts miles. The useful measure here is **which stage you are in**, because it decides what can go wrong and what skills the day requires. The same 20 miles is a pleasant afternoon on the Wabash and a serious undertaking on the Lower Mississippi.

That is also why this series is organized by stretch of water rather than by school subject. The river decides what each part is about.

:::reveal Why is the same distance a very different day on the Wabash and the Lower Mississippi? ||| Because the hazards, the traffic and the options for getting off the water are completely different. The stage matters more than the mileage.

:::reveal What does it mean that everything upstream drains through a point? ||| The water passing any point carries whatever entered the system anywhere above it, including from places the paddlers never visited.`,
      recallContent: [
        {
          prompt: "Name the three rivers of the route in order.",
          answer: "The Wabash, then the Ohio, then the Lower Mississippi to the Gulf.",
        },
        {
          prompt: "What changes about the journey once the paddlers reach the Ohio?",
          answer:
            "It becomes a commercial shipping corridor with locks and dams, so they are sharing the water with vessels that cannot easily see or avoid them.",
        },
      ],
    },
    {
      slug: "not-a-wilderness-trip",
      title: "3 · This is not a wilderness trip",
      section: "Section 1 · What you are following",
      body: `The word "expedition" makes people picture emptiness. That is the wrong picture, and getting it wrong is how paddlers get hurt on this route.

Most of this journey runs through **an industrial shipping corridor**. Barges, terminals, levees, revetment, outfalls, bridges, tows. The danger is not that there is nobody around. It is that there is a great deal around, most of it very large and none of it able to stop quickly.

## The three that actually matter

**Commercial tows.** These operate 365 days a year, 24 hours a day. A towboat pushing barges has a blind spot ahead of it created by the barges themselves: draw a line from the pilot's eyes down over the front of the load and it can extend hundreds of feet in front of the vessel. **A kayak in that zone is not seen, and cannot be seen.** Barges also cannot turn or stop quickly, because of their size and weight. So the entire responsibility for not being there belongs to the small boat.

**Wing dams and structures.** Much of this river is engineered to keep a navigation channel deep. Structures reach out from the bank, sometimes just under the surface, and the water does strange and forceful things around them.

**Locks and dams.** On the Ohio, passing one is a procedure with rules, not something you improvise. Small craft have specific instructions and are not simply queued with commercial traffic.

## Why this is in the first course

Because it reframes everything that follows. A wilderness story is about a person against nature. This is a person moving through a **built system**: one that was designed, funded, argued over, and maintained by institutions, for reasons.

Once you see the river as engineered, the rest of the series stops being scenery. The locks have a history. The levees have politics. The channel has an economy. Even the water quality is a consequence of decisions made hundreds of miles away.

The generic outdoor safety advice, wear a lifejacket, watch the weather, do not get cold, all remains true. It is just not the interesting part, and it is not what makes this river specifically dangerous.

:::reveal Why can a towboat crew fail to see a kayak directly ahead of them? ||| The barges they push create a blind spot that can extend hundreds of feet in front of the vessel, so a small boat there is genuinely invisible.

:::reveal What changes when you stop seeing the river as wilderness and start seeing it as a built system? ||| Its features acquire causes: the locks have a history, the levees have politics, the channel has an economy, and the water quality is a consequence of decisions made far upstream.`,
    },
    {
      slug: "the-direction",
      title: "4 · The most interesting thing about this trip is the direction",
      section: "Section 2 · Why the direction matters",
      body: `They are going south. That is the whole story, and it takes some history to see why.

Three great movements happened on this water. They did not go the same way.

**South, against their will.** In the decades before the Civil War, the Mississippi carried enslaved people from the Upper South to the markets of the lower river, above all Natchez and New Orleans. The phrase **"sold down the river"** comes from this trade and is not a metaphor: *down* meant transfer from north to south, into conditions understood at the time to be far harsher. Between 1830 and 1840 alone, nearly 250,000 people were transported across state lines in the domestic trade. An enslaved child faced roughly a thirty percent chance of being sold downriver during their life.

To be sent down this river was among the most feared outcomes in a life already without freedom. It meant separation from family, almost always permanent.

**North, taking their freedom.** The Ohio River was a border. Indiana was free; Kentucky, across the water, was not. That single line of water was the difference between being property and being a person, and people crossed it by boat, by ice, and by swimming. More freedom seekers escaped through the Ohio River Valley borderland than any other region of the country, with the activity peaking between 1840 and 1860. Networks on the Indiana side, at Madison and New Albany, were organized in significant part by Black activists including George DeBaptiste and Elijah Anderson.

**North again, a century later.** In the twentieth century the movement resumed by rail. The Illinois Central and its Yazoo and Mississippi Valley subsidiary ran hundreds of miles of track across the Delta, roughly paralleling the river, and became the main route out of Mississippi. Around 500,000 people came to Illinois alone. Pullman porters carried the *Chicago Defender* south along the same rails, which is how word traveled.

## Now put the paddlers back in the picture

They are traveling **south, by choice, for challenge and for pleasure**, down the watercourse that carried people south **against their will**. And in the first days of the journey they cross, going the other way, the exact line that meant freedom to everyone moving north.

Every mile south is a mile somebody else was once terrified to travel.

That is not a mood to put over the trip. It is the actual geography of the actual water, and it is why this series exists rather than being a nature diary.

## How to hold this

Two things are true at once, and you do not have to resolve them. The journey is a genuine physical achievement worth admiring. The route is also a place where enormous harm happened, and where extraordinary courage happened. Following one does not require you to look away from the others.

:::reveal Where does the phrase "sold down the river" come from? ||| The domestic slave trade on the Mississippi, where being sold *down* the river meant transfer from the Upper South to the harsher conditions of the lower river, usually with permanent separation from family.

:::reveal Why is the paddlers' direction of travel the most interesting thing about the journey? ||| They are going south by choice down a route that carried people south against their will, and they cross the Ohio, the freedom line, in the opposite direction from everyone who crossed it to be free.`,
      recallContent: [
        {
          prompt: "What made the Ohio River a line rather than just a river?",
          answer:
            "It was the border between a slave state and a free state, so crossing it changed a person's legal status. More freedom seekers escaped through that borderland than any other region.",
        },
        {
          prompt: "How did the Great Migration relate to this same corridor?",
          answer:
            "It ran north again a century later, by rail. The Illinois Central and its Delta subsidiary paralleled the river and became the main route out of Mississippi.",
        },
      ],
    },
    {
      slug: "quiz-the-expedition-and-the-route",
      title: "5 · Knowledge check: the expedition and the route",
      section: "Section 2 · Why the direction matters",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which of these best distinguishes an expedition from a trip?",
            options: [
              "It covers a longer distance and takes considerably more time to complete",
              "It has a question it is trying to answer and produces a record others can use",
              "It takes place somewhere remote rather than somewhere populated",
              "It involves physical hardship that an ordinary journey would not",
            ],
            correctIndex: 1,
            explanation:
              "Distance, remoteness and hardship can all be present in a holiday. The question and the record are what let someone who did not go learn something from it.",
            sourceLessonSlug: "trip-versus-expedition",
          },
          {
            prompt: "Why is a kayak directly in front of a barge tow in serious danger?",
            options: [
              "The tow's engines create a current that pulls small craft underneath the barges",
              "The barges create a blind spot ahead of the vessel, and it cannot stop or turn quickly",
              "Commercial vessels are permitted to ignore small craft under navigation rules",
              "The wake thrown forward by the barges will capsize a small boat at that distance",
            ],
            correctIndex: 1,
            explanation:
              "The load itself blocks the pilot's view for a distance that can run to hundreds of feet, and the vessel's mass makes avoidance impossible. Being seen is the small boat's responsibility because it cannot be the tow's.",
            sourceLessonSlug: "not-a-wilderness-trip",
          },
          {
            prompt: "What did the phrase 'sold down the river' originally describe?",
            options: [
              "Traders who cheated their business partners in river-town commodity markets",
              "Riverboat crews abandoning passengers at ports far from their intended destination",
              "The domestic slave trade moving people south to markets on the lower Mississippi",
              "Farmers forced to sell crops downstream at a loss during flood years",
            ],
            correctIndex: 2,
            explanation:
              "It is literal geography: down meant from the Upper South to the harsher lower river, and it usually meant permanent separation from family. The modern sense of betrayal comes from that.",
            sourceLessonSlug: "the-direction",
          },
          {
            prompt: "Why was the Ohio River significant to people escaping slavery?",
            options: [
              "It flowed north, carrying boats toward free territory without any need to row",
              "It was the border between a slave state and a free state, so crossing it changed a person's status",
              "It was too shallow for the patrol vessels that searched for people who had escaped",
              "It marked the northern edge of the region where slavery was economically viable",
            ],
            correctIndex: 1,
            explanation:
              "Indiana was free and Kentucky was not, so the water itself was the legal line. More freedom seekers crossed through that borderland than any other region of the country.",
            sourceLessonSlug: "the-direction",
          },
        ],
      },
    },
    {
      slug: "how-to-follow-along",
      title: "6 · How to follow this, and what you will get",
      section: "Section 3 · Following it well",
      body: `This series is eleven courses, ordered by the river's own order rather than by school subject. Each stretch of water carries the science, history and skills that belong to it.

You do not have to wait for the paddlers. **Every course stands alone and is finished before they launch**, which is deliberate: a curriculum that stops working because somebody's phone got wet is not a curriculum. When material arrives from the river, it arrives as dispatches layered on top of lessons that were already complete.

## What is actually coming back

The team is bringing back a defined set of things, and knowing what they are tells you what to expect: a daily position, a short set of daily numbers, a thirty-second audio note, one photograph a day, and a count of debris at camp. Beyond that, when the day allows: interviews with people who work the river, photographs of the engineered structures, 360 captures at the significant places, and a record of decisions they made and what those decisions cost.

They have also been asked for something unusual, and it is worth watching for: **the failures.** Gear that broke, plans that fell apart, days they misjudged the weather or the distance or each other. That is the most valuable material on the list and the part nobody sends unless asked, because every judgment you can learn from this journey comes from a moment where judgment was tested.

They are sending both **fiction and non-fiction** from the same places. Read them side by side. The difference between what happened and what someone imagines from where it happened is one of the most useful things this series can show you.

## Two habits worth adopting now

**Write down your predictions.** Before the journey starts, guess: how many miles a day, how long it takes, what goes wrong first. Then check yourself. Being wrong in a way you recorded is worth far more than being vaguely right.

**Track the question, not the drama.** Ask, of each dispatch, what it tells you about how this river works, who shaped it and why. The storm makes a better story. The lock makes a better lesson.

## Sources

- U.S. Army Corps of Engineers. *Locks and dams of the Ohio River*. https://www.lrl.usace.army.mil/Missions/Civil-Works/Navigation/

- Ohio River Way. *How to safely paddle the Ohio River with confidence*. https://www.ohioriverway.org/news/how-to-safely-paddle-the-ohio-river-with-confidence

- Mississippi Encyclopedia. *Sold down the river*. https://mississippiencyclopedia.org/entries/sold-down-the-river/

- Mississippi Encyclopedia. *Slave trade*. https://mississippiencyclopedia.org/entries/slave-trade/

- Churchill, R. H. *The Underground Railroad in the Ohio River Valley*. Underground Railroad Online Handbook, Dickinson College. https://housedivided.dickinson.edu/sites/ugrr/regional-essays/the-underground-railroad-in-the-ohio-river-valley-churchill/

- National Geographic Education. *The Underground Railroad in Indiana*. https://education.nationalgeographic.org/resource/underground-railroad-indiana/

- Champaign County African American Heritage Trail. *African Americans and the Illinois Central Railroad*. https://ccafricanamericanheritage.org/trail-stop/railroad/

- National Oceanic and Atmospheric Administration. *Dead zone in the Gulf of Mexico*. https://oceantoday.noaa.gov/deadzonegulf/

**A note on these sources, in the spirit of the thing.** Distances, structure counts and historical figures in this course are drawn from the references above and were correct when this was written. River infrastructure changes, and historical estimates are revised. If you find a figure here that disagrees with a primary source, the primary source wins and we want to know.

:::reveal Why is every course in this series finished before the expedition launches? ||| So the curriculum never depends on material arriving. Dispatches layer on top of lessons that already work on their own.

:::reveal What should you do before the journey begins, to learn the most from it? ||| Write down your predictions about distance, duration and what goes wrong, then check them against what actually happens.`,
    },
  ],
};
