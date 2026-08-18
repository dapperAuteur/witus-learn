import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 7 of 11: The Delta, and the Way North. RIVER-07.
//
// The third movement on the corridor. Links OUT to the shipped great-migration and
// great-migration-and-the-world courses rather than re-teaching them: this one is the route seen
// from the water. Plan: plans/56 §2(c).

export const RIVER_THE_DELTA_AND_THE_MIGRATION_COURSE: AuthoredCourse = {
  title: "The Delta, and the Way North",
  description:
    "A century after the trade that carried people south, the movement reversed. Millions left the South, and from the Mississippi Delta the way out ran on rails that paralleled the river the expedition is paddling. How the route worked, how word traveled, and why this is the third direction on one corridor.",
  lessons: [
    {
      slug: "the-third-direction",
      title: "1 · The third direction on one corridor",
      section: "Section 1 · The way out",
      body: `This series has now traced two movements on this water.

**South, against their will.** The domestic trade, carrying people from the Upper South to the markets of the lower river.

**North, taking their freedom.** People crossing the Ohio into free states, in the largest numbers of any region in the country.

This course is the third, and it happened within living memory of the second.

**North again, in the twentieth century.** Millions of Black Americans left the South. From the Mississippi Delta, the principal way out was the railway, and the railway followed the river.

## The rails beside the water

The Illinois Central and its subsidiary, the Yazoo and Mississippi Valley Railroad, ran roughly **800 miles of track criss-crossing the Mississippi Delta.** In the early twentieth century the Illinois Central became the primary way Black Americans left Mississippi for Chicago and other northern cities.

Around **500,000 people came to Illinois** in the course of the Migration.

Look at the geography. The rail line and the river run through the same country, serving the same towns, formed by the same flat alluvial land. The expedition is paddling alongside the route out.

## Why this is not a repeat of the Underground Railroad

Different century, different legal situation, different mechanism, and worth keeping distinct.

The antebellum crossings were escapes from legal enslavement, criminalised and clandestine. The Migration was **legal movement**, undertaken openly, by people leaving a system of enforced segregation, disenfranchisement, violence and agricultural debt for wage work and the possibility of a vote.

What the two share is direction and the reason for it. People moved north because north was less bad, and both movements reshaped the country.

## What the paddlers pass through

The Delta stretch is agricultural, flat, and heavily engineered. What they will see is farmland, levees, and small towns.

What is not visible from the water is that this landscape is one of the great points of departure in the country's history. Most of the people who left are not commemorated where they left from.

:::reveal What was the principal way out of the Mississippi Delta during the Great Migration? ||| The railway. The Illinois Central and its Yazoo and Mississippi Valley subsidiary, running roughly 800 miles of track across the Delta.

:::reveal How was the Great Migration different in kind from the antebellum crossings? ||| It was legal, open movement out of segregation, disenfranchisement and agricultural debt, rather than clandestine escape from legal enslavement.`,
    },
    {
      slug: "how-word-travelled",
      title: "2 · How word traveled",
      section: "Section 1 · The way out",
      body: `A migration of that size is not a mood. It is millions of individual decisions, and each one required information: that there was work, where, what it paid, and how to get there.

## The Defender, carried south by porters

The *Chicago Defender* was a Black newspaper published in Chicago. It campaigned actively for migration, printed accounts of northern opportunity, and published train schedules and fares.

Getting it into the South was the problem, because in many places its distribution was actively obstructed.

The solution was the **Pullman porters**. Porters worked the trains running between Chicago and the South. They carried copies of the *Defender* with them and left them where people would find them. A newspaper that could not be mailed traveled in the luggage of the men who worked the route it advertised.

The *Defender* also organized **migrant clubs** and arranged **group discounts on train fares**, which turned an individual leap into something a group could do together.

## Why this detail matters

Two reasons, and both transfer well beyond this subject.

**Information is infrastructure.** The rails made the journey physically possible. The newspaper made it thinkable, by turning a rumor into a schedule with a price on it. A route nobody knows about is not a route.

**Networks route around obstruction.** The paper's circulation was obstructed, so it moved by a channel nobody controlled: the workers on the trains themselves. That is a general pattern, and it is worth recognizing when you meet it elsewhere.

## The chain, once it starts

Migration is self-reinforcing. One person goes, finds work, writes home, and sends money. The next person has somewhere to arrive, a contact, and better information. The cost and risk of leaving falls with every person who has already gone.

That is why migrations accelerate, and why they concentrate: people go where people they know already are, which is how particular southern counties came to have particular northern neighborhoods.

## Going deeper

This platform has two courses on the Migration itself, \`great-migration\` and
\`great-migration-and-the-world\`. This course is deliberately the route seen from the water rather
than the Migration in full, and those go far further into why people left, where they went, and what
they built.

:::reveal How did the Chicago Defender reach readers in the South when its distribution was obstructed? ||| Pullman porters working the trains carried copies south and left them where people would find them.

:::reveal Why do migrations accelerate once they begin? ||| Each person who goes lowers the cost and risk for the next: somewhere to arrive, a contact, and better information.`,
      recallContent: [
        {
          prompt: "What two things did the Defender provide besides encouragement?",
          answer:
            "Train schedules and fares, and organized migrant clubs with group discounts on fares.",
        },
        {
          prompt: "State the general principle behind the porters carrying the paper.",
          answer:
            "Networks route around obstruction. When a channel is blocked, information moves through one nobody controls.",
        },
      ],
    },
    {
      slug: "quiz-the-migration",
      title: "3 · Knowledge check: the way north",
      section: "Section 1 · The way out",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was the principal route out of the Mississippi Delta during the Migration?",
            options: [
              "Steamboat traffic north along the Mississippi toward St. Louis and beyond",
              "The Illinois Central railway and its subsidiary, running roughly 800 miles across the Delta",
              "Highway routes built during the same period to connect southern farms to northern markets",
              "Organised bus services chartered by northern employers seeking agricultural labor",
            ],
            correctIndex: 1,
            explanation:
              "The Illinois Central and its Yazoo and Mississippi Valley subsidiary became the primary way people left Mississippi for Chicago, following roughly the same country as the river.",
            sourceLessonSlug: "the-third-direction",
          },
          {
            prompt: "How did the Chicago Defender circulate in places where its distribution was obstructed?",
            options: [
              "Through subscriptions mailed under the covers of other publications",
              "Pullman porters working the trains carried copies south and left them to be found",
              "Local churches reprinted its contents in their own bulletins each week",
              "Northern employers distributed it directly to workers they had already recruited",
            ],
            correctIndex: 1,
            explanation:
              "The paper traveled in the luggage of the men who worked the route it advertised, which is a clean example of a network routing around an obstruction.",
            sourceLessonSlug: "how-word-travelled",
          },
          {
            prompt: "Why does this course insist the Migration was different in kind from antebellum escape?",
            options: [
              "It involved far larger numbers of people over a much shorter period of time",
              "It was legal, open movement out of segregation and debt rather than clandestine escape from enslavement",
              "It was organized by institutions rather than being undertaken by individuals acting alone",
              "It ended in cities rather than in the rural free states that earlier escapes reached",
            ],
            correctIndex: 1,
            explanation:
              "The legal situation, the mechanism and the century all differ. What they share is direction, and the reason for the direction.",
            sourceLessonSlug: "the-third-direction",
          },
          {
            prompt: "Why do migrations tend to concentrate in particular destinations?",
            options: [
              "Employers recruited exclusively from counties where they had existing contacts",
              "People go where people they know already are, because that lowers cost, risk and uncertainty",
              "Transport routes offered service to only a small number of northern cities",
              "Housing restrictions in northern cities confined arrivals to a few available districts",
            ],
            correctIndex: 1,
            explanation:
              "Each person who has already gone provides somewhere to arrive, a contact and better information, which is how particular southern counties came to have particular northern neighborhoods.",
            sourceLessonSlug: "how-word-travelled",
          },
        ],
      },
    },
    {
      slug: "migration-sources",
      title: "4 · Sources, and what this course left out",
      section: "Section 2 · Sources and further work",
      body: `## What this course covered, and what it did not

This is a course about **a route**, not about the Great Migration. It covered how people left the Delta and how word traveled, because those are the parts that happen alongside the water the expedition is on.

It did not cover why people left in the detail that deserves, what they found on arrival, what they built, or what it cost. Those are the subject of \`great-migration\` and \`great-migration-and-the-world\` on this platform, and this course would do them badly in the space available.

That is a deliberate division rather than an omission. A course that tried to be both would be worse at each.

## What is well sourced here

The Illinois Central's role and its Delta subsidiary's approximate track mileage, the *Defender*'s campaigning and the porters' role in distributing it, the migrant clubs and group fares, and the approximate figure of 500,000 arriving in Illinois, all come from the references below.

## What to treat carefully

**Migration totals** vary by definition. Whether you are counting a decade or the whole span, one state or a region, first moves or all moves, changes the number substantially. Any figure needs its definition attached.

**The Defender's causal weight** is genuinely debated. It clearly mattered. Exactly how much of the movement it caused, as against economic conditions, violence, and word of mouth from people who had already gone, is a question historians disagree about. Treat any account that credits a single cause with suspicion, including one that credits the newspaper.

## Sources

- Champaign County African American Heritage Trail. *African Americans and the Illinois Central Railroad*. https://ccafricanamericanheritage.org/trail-stop/railroad/

- Mississippi Blues Trail. *Mississippi to Chicago*. https://msbluestrail.org/blues-trail-markers/mississippi-to-chicago

- Mississippi Encyclopedia. *Railroads*. https://mississippiencyclopedia.org/entries/railroads/

- Library of Congress. *The Great Migration*. https://www.loc.gov/classroom-materials/immigration/african/the-great-migration/

- Smithsonian National Museum of African American History and Culture. *The Great Migration*. https://nmaahc.si.edu/explore/stories/great-migration

:::reveal Why does this course stop short of covering the Great Migration in full? ||| It is a course about a route. Why people left, what they found and what they built are covered properly by the two Great Migration courses on this platform.

:::reveal Why should any single-cause explanation of the Migration be treated with suspicion? ||| Economic conditions, violence, word of mouth and the Defender all contributed, and how much weight each carries is genuinely debated.`,
    },
  ],
};
