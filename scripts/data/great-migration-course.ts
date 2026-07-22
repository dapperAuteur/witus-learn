// Authored "The Great Migration: How Six Million People Remade America" — a cultural-history
// course on Learn.WitUS (BVC), for homeschoolers (upper-elementary → high school) + adult
// learners. Companion to the Hoodoo course (the Migration is how Southern traditions spread
// north) and the Civics courses (the Black urban vote, segregation law). Design doc:
// plans/future-courses/great-migration.md.
//
// Every factual claim in this course was checked against a dedicated verification pass —
// plans/future-courses/great-migration-facts.md — before authoring. Two claims that pass
// flagged as UNVERIFIED are deliberately absent or softened here:
//   1. Philadelphia's oft-repeated "500% growth, 1910–1920" — the raw population figures
//      every source cites alongside that percentage (84,549 → 134,229) do not support it
//      (they work out to ~59%). Rather than assert the number, Lesson 5 cites the raw
//      population figures only and turns the discrepancy into a media-literacy teaching
//      moment (this platform's "verify, don't trust blindly" DNA).
//   2. Ray Atkeson's 1943 shipyard photography, tied to the "Good Work, Sister!" oral-history
//      project — no source ties Atkeson specifically to that project or dates his shipyard
//      photos to 1943. Lesson 5 cites the oral-history project (Northwest Women's History
//      Project, 1982) without the Atkeson/1943 detail, per the fact-check doc's recommendation.
//
// Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography), per the BVC
// citation rule. No fabricated characters or quotations: primary sources are described by type
// and pointed to their real archive, not invented or quoted from memory. `:::reveal` self-checks
// close every lesson ("Check yourself," the homeschool lens the design doc asks for).

import type { AuthoredCourse } from "./authored-course";

export const GREAT_MIGRATION_COURSE: AuthoredCourse = {
  title: "The Great Migration: How Six Million People Remade America",
  description:
    "A thorough, cited walk through the Great Migration (roughly 1910s-1970s): why six million African Americans left the South, the three routes they traveled, the cities they built (Bronzeville, Harlem, Paradise Valley, and (in the Second Great Migration) Vanport, Oregon), and the culture, politics, and long shadow that move created. Built for homeschoolers and adult learners: every lesson has a clear objective, a primary-source pointer, an activity, and a self-check, and pairs with an interactive green/black/red migration map. Cited to the National Archives, U.S. Census Bureau, Smithsonian, BlackPast, the Schomburg Center, and standard scholarship (Wilkerson, Gregory, Grossman). Companion to the Hoodoo and Civics courses.",
  lessons: [
    // ── Part I: Why they left ─────────────────────────────────────────────
    {
      slug: "what-was-the-great-migration",
      title: "1 · What the Great Migration was",
      section: "Why They Left",
      body: `Between roughly **1910 and 1970**, about **six million** African Americans left the American South for cities in the North, Midwest, and West. Historians call this the **Great Migration**, and by scale and speed it is one of the largest internal movements of people in U.S. history (National Archives, n.d.-a; U.S. Census Bureau, n.d.).

Before the Migration began, about **90%** of Black Americans lived in the South. By its end, only about **53%** did (a few sources say 52%, treat 53% as the standard figure) (National Archives, n.d.-a). That single shift in where people lived reshaped American cities, music, politics, and family life for the rest of the twentieth century.

**Two waves.** Historians usually split the Migration in two:
- The **First Great Migration**, roughly **1910-1940**. The U.S. Census Bureau's own periodization starts it in 1910, though **1916** is the year historians point to for the sharpest acceleration, driven by World War I (see Lesson 3) (U.S. Census Bureau, n.d.; National Archives, n.d.-b).
- The **Second Great Migration**, roughly **1940-1970**, driven by World War II defense-industry jobs and reaching further West, including the Pacific Northwest (Lesson 5).

**A population snapshot (1910 → 1920), Detroit:**

| Year | Detroit's Black population |
| --- | --- |
| 1910 | 5,741 |
| 1920 | 40,838 |

That is roughly **+611%** in a single decade (Wikipedia, n.d.-a), and Detroit was not unusual. Lesson 5 walks through several cities' numbers in detail, because the raw scale of arrival is much of the story.

**Why it matters for this course.** The chapters ahead follow the shape of the Migration itself: why people left the South (Part I), how and where they traveled (Part II), what they built once they arrived (Part III), and what changed for good afterward (Part IV). Along the way, an [interactive map](/great-migration-map) lets you trace the three migration streams and click into the cities, people, and events they created, keep it open in another tab as you work through the lessons.

:::reveal About how many African Americans left the South during the Great Migration, and what share of Black Americans lived in the South before versus after? ||| About six million, from roughly 1910 to 1970. Before the Migration about 90% of Black Americans lived in the South; afterward, about 53% did.

## Sources
- National Archives. (n.d.-a). *The Great Migration (1910–1970)*. https://www.archives.gov/research/african-americans/migrations/great-migration
- National Archives. (n.d.-b). *The First Great Migration (1910–1940)*. https://www.archives.gov/research/african-americans/wwi/great-migration
- U.S. Census Bureau. (n.d.). *The Great Migration, 1910 to 1970*. https://www.census.gov/programs-surveys/sis/resources/visualizations/great-migration.html
- Wikipedia. (n.d.-a). *Demographic history of Detroit*. https://en.wikipedia.org/wiki/Demographic_history_of_Detroit
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.`,
    },
    {
      slug: "the-jim-crow-south",
      title: "2 · The Jim Crow South: what people were fleeing",
      section: "Why They Left",
      recallContent: [
        {
          prompt: "About how many African Americans left the South during the Great Migration, and over what years?",
          answer: "About six million, from roughly 1910 to 1970.",
        },
        {
          prompt: "What share of Black Americans lived in the South before the Migration, and what share after?",
          answer: "About 90% before; about 53% after.",
        },
      ],
      body: `To understand why six million people moved, start with what they were leaving. By the early twentieth century, the South enforced **Jim Crow**: a legal and social system of racial segregation and control built after Reconstruction.

**The system had several interlocking pieces:**
- **Disenfranchisement.** Poll taxes, literacy tests, and outright intimidation stripped most Black Southerners of the right to vote.
- **Black Codes and their successors.** Laws restricted where Black people could live, work, and travel, often criminalizing unemployment itself.
- **Sharecropping and debt peonage.** Most Black Southerners farmed land they did not own, splitting the crop with a white landowner who also controlled the accounting — a system that trapped families in debt they could never quite pay off.
- **Segregation.** Separate (and unequal) schools, transportation, and public accommodations, upheld by *Plessy v. Ferguson* (1896) until the mid-twentieth century.
- **Racial terror.** Lynching was a real and present threat used to enforce the whole system, not a rare aberration (National Archives, n.d.-a; Bill of Rights Institute, n.d.).

**Staying could be as dangerous as leaving.** The summer of **1919**, remembered as **Red Summer**, saw white-on-Black violence break out in dozens of American cities. The **Chicago race riot** (July 27-August 3, 1919) alone left **38 people dead** (23 Black, 15 white), roughly **537 injured**, and **1,000-2,000 people, mostly Black,** homeless after arson destroyed their housing (Wikipedia, n.d.-b). Red Summer is a stark reminder that the "push" out of the South was not only economic, it was also about survival.

**A primary source to examine.** Digital collections such as the DPLA's Great Migration primary source set and the National Archives hold sharecropping contracts and NAACP anti-lynching materials from this period, documents written by the people and organizations living through it, not summarized secondhand. Reading one alongside this lesson is the recommended activity: what does the document's own language reveal about the system it describes?

:::reveal Name two features of the Jim Crow system, and explain why the summer of 1919 is remembered as "Red Summer." ||| Disenfranchisement (poll taxes, literacy tests) and sharecropping/debt peonage are two examples (segregation and racial terror are others). Red Summer refers to widespread white-on-Black violence across dozens of U.S. cities in 1919, including the Chicago race riot, which killed 38 people and left 1,000-2,000 people homeless.

## Sources
- National Archives. (n.d.-a). *The Great Migration (1910–1970)*. https://www.archives.gov/research/african-americans/migrations/great-migration
- Bill of Rights Institute. (n.d.). *The Great Migration*. https://billofrightsinstitute.org/essays/the-great-migration
- Wikipedia. (n.d.-b). *Chicago race riot of 1919*. https://en.wikipedia.org/wiki/Chicago_race_riot_of_1919
- DPLA. (n.d.). *The Great Migration* [Primary source set]. https://dp.la/primary-source-sets/the-great-migration`,
    },
    {
      slug: "push-meets-pull",
      title: "3 · Push meets pull: why the Migration surged when it did",
      section: "Why They Left",
      recallContent: [
        {
          prompt: "Name two features of the Jim Crow system that Black Southerners were fleeing.",
          answer: "Disenfranchisement and sharecropping/debt peonage are two examples (segregation and racial terror are others).",
        },
        {
          prompt: "What happened in Chicago during Red Summer (1919)?",
          answer: "The Chicago race riot (July 27-August 3, 1919) killed 38 people and left 1,000-2,000 people, mostly Black, homeless.",
        },
      ],
      body: `Jim Crow had existed for decades before 1910. So why did the Migration surge specifically in the mid-1910s? Two forces collided at once: a Southern **push** got sharper, and a Northern **pull** got stronger.

**The push: the boll weevil.** The boll weevil, a small beetle that eats cotton, entered the United States at Brownsville, Texas in **1892**. It reached Alabama by around **1909-1910** and had infiltrated every U.S. cotton region by the mid-1920s; by **1922** it was destroying roughly **8%** of the national cotton crop annually (Wikipedia, n.d.-c). For sharecropping families already living on credit against next year's harvest, a collapsing cotton crop could mean no income at all.

**The pull: World War I labor demand.** When the United States entered World War I, Northern factories, steel mills, and stockyards needed workers for war production, right as their usual labor source dried up.

**The pull's other half: immigration halted.** European immigration, which had supplied Northern industry with cheap labor for decades, collapsed during the war and then was capped by law: the **Emergency Quota Act (May 19, 1921)** and the **Immigration Act of 1924** (the Johnson-Reed Act, signed May 24, 1924) set strict national-origin quotas that sharply cut immigration from Europe (Wikipedia, n.d.-d, n.d.-e). Northern employers who had always recruited in Europe now recruited Black Southern labor instead, through the Black press (Lesson 6) and, sometimes, direct labor agents sent south.

**Put together:** a Southern economy that was failing sharecroppers, and a Northern economy that suddenly needed workers and could no longer import them from Europe. Wages were part of it too, a factory job in Chicago or Detroit could pay several times what sharecropping yielded in a Southern county, even before accounting for Jim Crow's other costs.

:::reveal What two things happened at roughly the same time to turn the Great Migration from a trickle into a surge? ||| The boll weevil was devastating Southern cotton income just as World War I created Northern factory-labor demand and the halt/quota of European immigration (1921 and 1924 acts) removed the workforce Northern industry had relied on instead.

## Sources
- Wikipedia. (n.d.-c). *Boll weevil*. https://en.wikipedia.org/wiki/Boll_weevil
- Wikipedia. (n.d.-d). *Emergency Quota Act*. https://en.wikipedia.org/wiki/Emergency_Quota_Act
- Wikipedia. (n.d.-e). *Immigration Act of 1924*. https://en.wikipedia.org/wiki/Immigration_Act_of_1924
- Grossman, J. R. (1989). *Land of hope: Chicago, Black Southerners, and the Great Migration*. University of Chicago Press.
- National Archives. (n.d.-b). *The First Great Migration (1910–1940)*. https://www.archives.gov/research/african-americans/wwi/great-migration`,
    },

    // ── Part II: The journey & the destinations ──────────────────────────
    {
      slug: "routes-and-the-three-streams",
      title: "4 · Routes and railroads: the three streams",
      section: "The Journey & the Destinations",
      recallContent: [
        {
          prompt: "What agricultural disaster devastated Southern cotton income just before the Migration surged?",
          answer: "The boll weevil, which had infiltrated every U.S. cotton region by the mid-1920s.",
        },
        {
          prompt: "What two 1920s laws capped the European immigration that had previously supplied Northern industry's labor?",
          answer: "The Emergency Quota Act (1921) and the Immigration Act of 1924.",
        },
      ],
      body: `Migrants did not scatter randomly. Historians describe three broad geographic **streams**, each tracing the rail lines available from a given part of the South (Gregory, 2005; Smithsonian Magazine, n.d.):

1. **Southeast → Northeast.** Migrants from the Carolinas, Georgia, and the East Coast South moved up toward Washington, D.C., Baltimore, Philadelphia, New York, and Boston.
2. **Mississippi Valley → Midwest.** Migrants from Mississippi, Alabama, and Tennessee moved north through Memphis toward St. Louis, Chicago, Cleveland, and Detroit.
3. **Texas/Louisiana → West.** Migrants from Texas and Louisiana moved toward California, Los Angeles and Oakland.

**The spine of the middle stream** was the **Illinois Central Railroad**, which ran a direct line from the Mississippi Delta to Chicago. For migrants without a car (nearly everyone), a one-way rail ticket was often the single biggest, most consequential purchase of their lives, the difference between the world their parents knew and the one they were choosing (Wikipedia, n.d.-f).

**Gateways.** Chicago, New York, and St. Louis anchored the biggest arrival points, though Cleveland and Detroit grew explosively too (Smithsonian Magazine, n.d.). Each stream fed specific neighborhoods: the Mississippi Valley stream built Chicago's Bronzeville and Detroit's Paradise Valley; the Southeast stream built New York's Harlem; the Texas/Louisiana stream built Black Los Angeles.

**A fourth thread, later.** During the **Second Great Migration** (1940s-1970), World War II defense jobs pulled the western stream further still, all the way to the Pacific Northwest. Lesson 5 follows that thread to Portland, Vancouver (Washington), and Seattle.

**Activity:** using a map of the South, pick a town and trace which stream it likely fed, and which Northern city it probably fed into. The [interactive map](/great-migration-map) for this course draws all three streams as arrows so you can see the routes end to end.

:::reveal Name the three migration streams and the railroad that anchored the Mississippi Valley → Midwest stream. ||| Southeast → Northeast, Mississippi Valley → Midwest, and Texas/Louisiana → West. The Illinois Central Railroad anchored the Mississippi Valley → Midwest stream (Mississippi Delta to Chicago).

## Sources
- Gregory, J. N. (2005). *The southern diaspora: How the Great Migrations of Black and white southerners transformed America*. University of North Carolina Press.
- Smithsonian Magazine. (n.d.). *The long-lasting legacy of the Great Migration*. https://www.smithsonianmag.com/history/long-lasting-legacy-great-migration-180960118/
- Wikipedia. (n.d.-f). *Illinois Central Railroad*. https://en.wikipedia.org/wiki/Illinois_Central_Railroad`,
    },
    {
      slug: "arrival-in-the-cities",
      title: "5 · Arrival: Chicago, Detroit, New York, and the Pacific Northwest",
      section: "The Journey & the Destinations",
      recallContent: [
        {
          prompt: "Which migration stream fed Chicago's Bronzeville and Detroit's Paradise Valley?",
          answer: "The Mississippi Valley → Midwest stream.",
        },
        {
          prompt: "What railroad anchored that stream?",
          answer: "The Illinois Central Railroad, running from the Mississippi Delta to Chicago.",
        },
      ],
      body: `Arrival meant explosive, visible growth in every gateway city, and it meant building whole new neighborhoods almost overnight.

**Chicago.** The city's Black population grew about **148%** between 1910 and 1920 (Encyclopedia of Chicago, n.d.). Roughly **50,000-70,000** Black Southerners relocated to Chicago between 1916 and 1919 alone (some sources cite a narrower, higher estimate, up to 110,000 for just 1916-1918, so treat the range as approximate). The neighborhood they built on the South Side became known as **Bronzeville**, a name coined by *Chicago Defender* editor James J. Gentry as an alternative to the older, more derisive "Black Belt" (Chicago Studies, n.d.).

**Detroit.** As Lesson 1 showed, Detroit's Black population grew from **5,741 in 1910 to 40,838 in 1920**, about **+611%**, as the auto industry hired aggressively (Wikipedia, n.d.-a). The Black neighborhood that grew up around Hastings Street, **Paradise Valley**, became known as the "Harlem of Detroit": a self-contained business and entertainment district with hundreds of Black-owned stores, restaurants, and nightclubs that drew performers like Duke Ellington and Billie Holiday (Detroit Historical Society, n.d.).

**New York.** The city's Black population grew from **91,709 in 1910 to 152,467 in 1920**, about **+66%** (Wikipedia, n.d.-g). **A note on numbers, and on checking your sources:** you will sometimes see New York's 1910-1920 growth described using the number 327,706, but that is actually the city's **1930** Black population, not 1920. It is an easy mistake to make, because both numbers are real Census figures; they are just for different years. Always check which year a statistic actually describes before repeating it.

**Philadelphia, the same lesson, more clearly.** Many popular sources claim Philadelphia's Black population grew "**500%**" between 1910 and 1920. The population figures those same sources cite alongside the claim, 84,549 in 1910, growing to 134,229 in 1920, do not support a 500% increase; they support roughly 59%. This looks like a widely copy-pasted arithmetic error rather than a real, disputed number. **This course reports the raw figures (84,549 → 134,229) and does not repeat the 500% claim**, and treats the mismatch itself as a lesson: when a statistic and the numbers behind it don't agree, trust the numbers, and check a second source.

**What arrival looked like day to day.** New arrivals often found overcrowded, subdivided apartments called **kitchenettes**, a single room with a shared bath, rented at prices inflated by the "color line" that restricted where Black tenants could live at all. Growth this fast, packed into neighborhoods this restricted, created real strain: it is part of what led to violence like Chicago's 1919 riot (Lesson 2).

**The Second Great Migration reaches the Pacific Northwest.** During World War II, a second wave of migration (roughly 1940-1970) pulled Black Southerners even farther west for **defense-industry jobs**. The **Kaiser Shipyards** built ships in **Portland (the Oregon Shipbuilding Corporation and the Swan Island yard) and Vancouver, Washington**, plus additional yards in Richmond, California. **Kaiser did not have a shipyard in Seattle**, Seattle's own wartime Black workforce grew instead around **Boeing** (aircraft manufacturing, about 1,600 Black employees by war's end) and the (non-Kaiser) **Todd Pacific/Seattle-Tacoma Shipbuilding** yards and the Navy yard at Bremerton. Altogether, roughly **45,000** Black workers and family members migrated to the Pacific Northwest by the war's end (Wikipedia, n.d.-h; Seattle Civil Rights & Labor History Project, n.d.).

**Vanport, Oregon.** Built starting in August 1942 to house shipyard workers, and quickly nicknamed "Kaiserville", **Vanport** became Oregon's **second-largest city**, peaking around **40,000 residents**, about **40% of them Black**. It had its own shopping centers, a 750-seat movie theater, a 150-bed hospital, and 24-hour childcare for working parents (Oregon Encyclopedia, n.d.; Wikipedia, n.d.-i). Housing was not equal, though: the **Housing Authority of Portland** confined Black residents to a small number of designated sections while publicly describing the pattern as "free choice" (BlackPast, n.d.-a).

On **Memorial Day, May 30, 1948**, a railroad-embankment levee that was never built to hold back floodwater collapsed, and the Columbia River submerged Vanport within hours. Fifteen people died, and sources commonly cite **17,000 to 18,000 people** left homeless (Wikipedia, n.d.-j). Vanport was never rebuilt; many of its Black residents resettled in Portland's Albina neighborhood, a shift that shaped Portland's Black community for decades afterward.

**A related Western thread: Watts.** Los Angeles's Watts neighborhood began as a small Black settlement after 1916 (the First Great Migration, feeding the Texas/Louisiana → West stream from Lesson 4), but it became a major Black neighborhood chiefly during the **Second** Great Migration's WWII defense boom, its population went from about 14% Black in 1920 to roughly two-thirds Black by 1945.

**Women in the shipyards.** Wartime labor shortages also opened industrial jobs, welding, riveting, to women, including Black women, for the first time. The **Northwest Women's History Project** (founded 1978) recorded more than 30 oral histories with Portland- and Vancouver-area shipyard women and toured a slideshow/oral-history presentation, *Good Work, Sister!*, in 1982, a real and well-documented project (this course does not repeat a specific photographer/date sometimes attached to it, since that attribution could not be verified against a primary source).

**The historian behind this history.** Much of what is known about Black life in the Pacific Northwest comes from the foundational work of historian **Quintard Taylor** (1948-2025), founder of BlackPast.org and longtime professor at the University of Washington (BlackPast, n.d.-b).

Open this lesson's four cities on the [interactive map](/great-migration-map), [Chicago](/great-migration-map?focus=chicago), [Detroit](/great-migration-map?focus=detroit), [Harlem](/great-migration-map?focus=harlem), and [Vanport](/great-migration-map?focus=vanport), for a short story, event, figure, and work of art tied to each.

:::reveal Which Kaiser shipyards employed Black wartime workers, and which nearby city's Black defense workforce was NOT built around a Kaiser yard? ||| Kaiser's Pacific Northwest yards were in Portland (Oregon Shipbuilding Corp. and Swan Island) and Vancouver, Washington. Seattle's Black defense workforce grew instead around Boeing and the Todd Pacific/Seattle-Tacoma Shipbuilding yards, Kaiser had no Seattle shipyard.

## Sources
- Encyclopedia of Chicago. (n.d.). *Great Migration*. http://www.encyclopedia.chicagohistory.org/pages/545.html
- Chicago Studies, University of Chicago. (n.d.). *The history of Bronzeville*. https://chicagostudies.uchicago.edu/bronzeville/bronzeville-history-bronzeville
- Wikipedia. (n.d.-a). *Demographic history of Detroit*. https://en.wikipedia.org/wiki/Demographic_history_of_Detroit
- Detroit Historical Society. (n.d.). *Paradise Valley*. https://www.detroithistorical.org/learn/online-research/encyclopedia-of-detroit/paradise-valley
- Wikipedia. (n.d.-g). *Demographic history of New York City*. https://en.wikipedia.org/wiki/Demographic_history_of_New_York_City
- Wikipedia. (n.d.-h). *Kaiser Shipyards*. https://en.wikipedia.org/wiki/Kaiser_Shipyards
- Seattle Civil Rights & Labor History Project, University of Washington. (n.d.). https://depts.washington.edu/civilr/
- Oregon Encyclopedia. (n.d.). *Vanport*. Oregon Historical Society. https://www.oregonencyclopedia.org/articles/vanport/
- Wikipedia. (n.d.-i). *Vanport, Oregon*. https://en.wikipedia.org/wiki/Vanport,_Oregon
- BlackPast. (n.d.-a). *Vanport, Oregon (1942–1948)*. https://blackpast.org/african-american-history/vanport-1942-1948/
- Wikipedia. (n.d.-j). *1948 Columbia River flood*. https://en.wikipedia.org/wiki/1948_Columbia_River_flood
- BlackPast. (n.d.-b). *Quintard Taylor, Jr. (1948–2025)*. https://blackpast.org/african-american-history/quintard-taylor-jr-1948-2025/`,
    },
    {
      slug: "the-black-press-and-the-defender",
      title: "6 · The Black press as engine: the Chicago Defender",
      section: "The Journey & the Destinations",
      recallContent: [
        {
          prompt: "About how many people migrated to the Pacific Northwest by the end of World War II?",
          answer: "Roughly 45,000 Black workers and family members.",
        },
        {
          prompt: "What happened to Vanport, Oregon on May 30, 1948?",
          answer: "A railroad-embankment levee failed and flooded the city, killing 15 people and leaving 17,000-18,000 people homeless.",
        },
      ],
      body: `Word of Northern opportunity did not spread by accident, it was actively, deliberately organized, and the single biggest engine was a newspaper: the ***Chicago Defender***.

**Robert S. Abbott** founded the *Defender* in **May 1905**, starting with a single 300-copy run he sold door to door. By 1915 it had a weekly circulation of about 16,000; by **1917** it had become the **first African American newspaper to reach a circulation of 100,000** and to achieve genuinely national circulation (BlackPast, n.d.-c, n.d.-d). It reported aggressively on lynching, disenfranchisement, and job opportunities in the North, and it ran recruitment ads and want-listings alongside that reporting.

**Getting the paper south was its own operation.** Southern authorities tried to block the *Defender*'s circulation, so the paper relied on **Pullman porters**, the Black railroad workers who staffed sleeper cars, to smuggle bundles of newspapers into Southern towns along their routes (NMAAHC, n.d.).

**"The Great Northern Drive."** In the spring of 1917, the *Defender* promoted a specific, organized migration date: **May 15, 1917**, urging readers to leave the South on that day. Whether or not any single migrant actually left on that exact date, the campaign captures how directly the paper positioned itself as a recruiter, not just a reporter (Encyclopedia of Chicago, n.d.).

**A primary source to examine.** A 1917 *Defender* front page, viewable through the Encyclopedia of Chicago or NYPL digital collections, makes the paper's dual role visible at a glance: hard reporting on racial violence sitting next to classified ads for Northern jobs and housing.

**Activity (design your own):** write two short newspaper columns on the same 1917 event, one making the case to move North, one making the case to stay and organize in place. Cite one real fact from this lesson in each.

:::reveal Who founded the Chicago Defender, and how did the paper reach Southern readers despite attempts to block it? ||| Robert S. Abbott founded it in 1905. Pullman porters smuggled bundles of the paper into Southern towns along their rail routes.

## Sources
- BlackPast. (n.d.-c). *Chicago Defender (1905– )*. https://blackpast.org/african-american-history/chicago-defender-1905/
- BlackPast. (n.d.-d). *Robert Sengstacke Abbott (1870–1940)*. https://blackpast.org/african-american-history/abbott-robert-sengstacke-1870-1940/
- NMAAHC (National Museum of African American History and Culture). (n.d.). *Remembering the Chicago Defender, print edition (1905–2019)*. https://nmaahc.si.edu/explore/stories/remembering-chicago-defender-print-edition-1905-2019
- Encyclopedia of Chicago. (n.d.). *Great Migration*. http://www.encyclopedia.chicagohistory.org/pages/545.html`,
    },

    // ── Part III: What they made ──────────────────────────────────────────
    {
      slug: "the-harlem-renaissance",
      title: "7 · The Harlem Renaissance & the New Negro",
      section: "What They Made",
      recallContent: [
        {
          prompt: "Who founded the Chicago Defender, and when?",
          answer: "Robert S. Abbott, in May 1905.",
        },
        {
          prompt: "What date did the Defender's 'Great Northern Drive' campaign promote?",
          answer: "May 15, 1917.",
        },
      ],
      body: `The Southeast → Northeast stream (Lesson 4) fed one neighborhood above all: **Harlem**, in upper Manhattan. By the 1920s, Harlem had become the cultural capital of Black America, and the Great Migration was its fuel. Without the population, institutions, and audiences the Migration built, the flowering of art, writing, and music historians call the **Harlem Renaissance** would not have had the critical mass it needed.

**Timeline.** The Harlem Renaissance is generally dated from about **1918 to 1937**, peaking in the 1920s and waning as the Great Depression cut into arts patronage (Britannica, n.d.-a). Its intellectual manifesto arrived in **1925**: philosopher **Alain Locke** edited an anthology titled ***The New Negro: An Interpretation***, which argued that Black Americans were claiming a new self-image, assertive, urban, and modern, distinct from the caricatures white America had imposed (Wikipedia, n.d.-k).

**Who was there.** Harlem in the 1920s was home to (among many others) poet **Langston Hughes**, novelist and anthropologist **Zora Neale Hurston**, novelist **Claude McKay**, and bandleader **Duke Ellington**. Venues like the **Savoy Ballroom** and the **Cotton Club** made Harlem a nightlife destination that drew audiences from across the city, even as many of those same clubs, notoriously, restricted their Black patrons while showcasing Black performers.

**Why this belongs in a Migration course, not just an arts course.** The Renaissance was not just artists who happened to live in the same neighborhood. It was what happened when hundreds of thousands of migrants, many of them young, built a dense, self-sustaining Black urban community for the first time, with its own newspapers, churches, theaters, and publishing connections. That density is what let a literary and artistic movement take off.

**A primary source to examine.** Read one Langston Hughes poem from the 1920s and identify what, specifically, it says about migration, the North, or the search for a better life, Hughes wrote directly about these themes more than once.

:::reveal What 1925 anthology, edited by Alain Locke, gave the Harlem Renaissance its intellectual name, and why did the Migration make the Renaissance possible? ||| The New Negro: An Interpretation. The Migration built the dense, self-sustaining Black urban population in Harlem that gave the Renaissance's writers, musicians, and institutions the audience and critical mass they needed.

## Sources
- Britannica. (n.d.-a). *Harlem Renaissance*. https://www.britannica.com/event/Harlem-Renaissance-American-literature-and-art
- Wikipedia. (n.d.-k). *The New Negro*. https://en.wikipedia.org/wiki/The_New_Negro
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.`,
    },
    {
      slug: "the-music-travels",
      title: "8 · The music travels: blues, jazz, gospel",
      section: "What They Made",
      recallContent: [
        {
          prompt: "About what years does the Harlem Renaissance span, and when did it peak?",
          answer: "Roughly 1918 to 1937, peaking in the 1920s.",
        },
        {
          prompt: "Name one writer and one musician associated with the Harlem Renaissance.",
          answer: "Langston Hughes (writer) and Duke Ellington (musician) are two examples.",
        },
      ],
      body: `Music followed the same rail lines the migrants did, and it changed shape at every stop.

**Blues: Delta to Chicago.** Rural **Delta blues**, played acoustically on guitar, traveled north with Mississippi Valley → Midwest migrants and was reborn in Chicago as **electric Chicago blues**, louder, amplified, built for noisy city clubs. **Muddy Waters** is the genre's best-known migrant-turned-star. The label most associated with the sound, **Chess Records**, was founded in **June 1950**, when brothers **Leonard and Phil Chess** bought out their partners in Aristocrat Records and renamed it (Wikipedia, n.d.-l).

**Jazz: New Orleans to Chicago to New York.** New Orleans jazz musicians, including **Louis Armstrong**, moved north along the same routes, carrying the music to Chicago and then to New York, where bandleaders like **Duke Ellington** (based at Harlem's Cotton Club) built jazz into the era's dominant popular sound.

**Gospel: reinvented in Chicago's churches.** **Thomas A. Dorsey**, often called the "father of gospel music," migrated from Georgia to Chicago as a teenager. He spent fifty years as music director at Chicago's **Pilgrim Baptist Church** and, after an experience at a 1922 Baptist convention, began coining and popularizing the term "gospel music" for a new blend of blues-inflected rhythm and Christian lyrics (Wikipedia, n.d.-m).

**Motown: the Migration's grandchildren.** By 1959, Detroit's Black community, itself largely built by Migration-era arrivals and their children, produced **Berry Gordy**, who founded **Tamla Records** on **January 12, 1959** (the umbrella Motown Record Corporation was formally incorporated in April 1960, though "founded in 1959" is the standard popular framing). Motown's sound and its founder are, in a very direct sense, products of the Migration that built Detroit's Black Detroit a generation earlier (Wikipedia, n.d.-n).

**The throughline.** In each case, the pattern repeats: a Southern folk tradition meets a new city, a bigger audience, and (often) new technology (electric amplification, the recording studio), and comes out the other side transformed but recognizable. This is also where this course connects to the **Hoodoo** course's blues lesson: the blues carried more than music north; it carried a whole vocabulary of Southern folk belief with it.

**Activity:** pick one song (blues, jazz, or gospel) that you can trace from a Southern origin to a Northern city, and write two sentences on what specifically changed about it along the way (instrumentation, tempo, audience, lyrics).

:::reveal Name the city where Delta blues became electric Chicago blues, and the year Chess Records was founded. ||| Chicago; Chess Records was founded in June 1950.

## Sources
- Wikipedia. (n.d.-l). *Chess Records*. https://en.wikipedia.org/wiki/Chess_Records
- Wikipedia. (n.d.-m). *Thomas A. Dorsey*. https://en.wikipedia.org/wiki/Thomas_A._Dorsey
- Wikipedia. (n.d.-n). *Motown*. https://en.wikipedia.org/wiki/Motown`,
    },
    {
      slug: "faith-family-and-mutual-aid",
      title: "9 · Faith, family & mutual aid",
      section: "What They Made",
      recallContent: [
        {
          prompt: "What Chicago church did Thomas A. Dorsey serve as music director for fifty years?",
          answer: "Pilgrim Baptist Church.",
        },
        {
          prompt: "What Detroit record label, founded in 1959, is a direct product of the Migration-built Black community there?",
          answer: "Motown (founded by Berry Gordy).",
        },
      ],
      body: `Arrival was disorienting, new cities, new jobs, unfamiliar rules about where you could live or shop. The institutions migrants built (or rebuilt) to hold their communities together are as much a part of this story as any single city's growth number.

**The Black church as anchor.** Churches were often the first institution a new arrival sought out, for worship, but also for job leads, housing tips, and a familiar community in an unfamiliar place. Many Southern migrants carried their specific worship style north with them, founding **storefront churches** (small, independent congregations, often in converted retail spaces) and **Spiritual churches** that blended Protestant worship with other traditions. These were not lesser versions of established Northern congregations, they were how migrants rebuilt community on their own terms, fast, with the resources they actually had.

**Mutual aid.** Alongside churches, migrants built **benevolent societies** and **burial associations**: member-funded organizations that paid for a funeral, supported a sick member, or helped a family through a crisis before public assistance existed in any reliable form. These organizations were a direct, practical answer to a hostile or indifferent city government.

**Chain migration, "send for you" letters.** Very few people moved north alone and stayed alone. The common pattern was **chain migration**: one family member moved first, found work and housing, and then wrote home urging (and often financially enabling) others to follow, a "send for you" letter. The **Schomburg Center's "In Motion"** project preserves thousands of pages of exactly this kind of primary-source correspondence and photography, documenting how migration decisions were made family by family, not as one anonymous mass movement (NYPL/Schomburg Center, n.d.).

**A primary source to examine.** Search the *In Motion* collection (or a comparable digital archive) for a migration-era letter or photograph, and identify: who is the sender, who is the intended reader, and what specific request or news does it carry?

**Activity:** map a family's chain migration, real (interview a relative) or, using the primary sources above, a documented historical family. Who moved first? Who followed, and when?

:::reveal What is "chain migration," and what kind of primary source documents it especially well? ||| Chain migration is the pattern where one family member moves first and then sends for others to follow, often financially. "Send for you" letters, preserved in collections like the Schomburg Center's In Motion project, document this especially well.

## Sources
- NYPL / Schomburg Center for Research in Black Culture. (n.d.). *In Motion: The African American Migration Experience*. https://www.nypl.org/node/29540
- Grossman, J. R. (1989). *Land of hope: Chicago, Black Southerners, and the Great Migration*. University of Chicago Press.
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.`,
    },
    {
      slug: "foodways-and-everyday-culture",
      title: "10 · Foodways & everyday culture",
      section: "What They Made",
      recallContent: [
        {
          prompt: "What is a storefront church, and why did migrants build them?",
          answer: "A small, independent congregation often in a converted retail space; migrants built them to rebuild worship community quickly, on their own terms, in a new city.",
        },
        {
          prompt: "What is a 'send for you' letter?",
          answer: "A letter from a migrant who had already moved north, urging (and often financially enabling) family members to follow.",
        },
      ],
      body: `Culture travels in ordinary places, too, not only in concert halls and newspapers, but in kitchens, corner stores, and Sunday afternoons.

**Foodways migrated with people.** Southern cooking, foods and techniques built around what enslaved and then sharecropping communities could grow, raise, or afford, traveled north in home kitchens. Migrants who could not always find familiar ingredients in Northern grocers built new supply chains: Black-owned **corner stores** that stocked what the neighborhood actually wanted, and eventually informal and formal markets connecting Southern producers to Northern Black neighborhoods (Wilkerson, 2010; Gregory, 2005).

**The rent party.** Housing discrimination (Lesson 5's "color line") kept rents in Black neighborhoods artificially high relative to income. One common response was the **rent party**: a Saturday-night gathering, often with a piano player and a small admission charge, where neighbors pooled small amounts of money to help a household make rent. It was mutual aid (Lesson 9's theme) staged as a party, and it doubled as an informal venue where blues and jazz musicians could work.

**Sunday dinner as memory.** For many migrant families, a Sunday meal built around Southern dishes was less about the specific ingredients than about keeping a thread connected to a place and a generation left behind. Food, in this sense, functioned the same way music and church did: as a portable, adaptable way of carrying a culture into a new environment without losing it.

**A note on scope.** This course treats foodways as a *general pattern* the Migration produced, not a claim about any one specific dish, restaurant, or business, since those details vary enormously by family and city and are best explored through your own family or community's history, not asserted as a single universal story.

**Activity (a Field Log project):** interview a family member or community elder about one dish that "traveled", from where, carried by whom, and what changed about it along the way. This is exactly the kind of documented, cited family history this course's capstone (Lesson 12) is built around.

:::reveal Why does this lesson call foodways and rent parties part of the Migration's story, not just incidental details? ||| Because they show how migrants carried Southern culture and mutual aid into Northern cities in everyday, adaptable forms, the same pattern seen in church-building (Lesson 9) and chain migration, just expressed through food and neighborhood economics instead.

## Sources
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.
- Gregory, J. N. (2005). *The southern diaspora: How the Great Migrations of Black and white southerners transformed America*. University of North Carolina Press.`,
    },

    // ── Part IV: Consequences ─────────────────────────────────────────────
    {
      slug: "politics-and-civil-rights",
      title: "11 · Politics & civil rights",
      section: "Consequences",
      recallContent: [
        {
          prompt: "What was a rent party, and what two purposes did it serve at once?",
          answer: "A gathering (often with a piano player) where neighbors pooled money to help a household make rent, it was both mutual aid and an informal music venue.",
        },
      ],
      body: `Moving north did more than change where people lived, it changed what political power Black Americans could exercise, because the Jim Crow South had stripped most Black Southerners of the vote entirely.

**Building the Black urban vote.** In Northern and Western cities, Black migrants and their children could register and vote without the poll taxes and literacy tests used to block them in the South. Over the **1930s-1960s**, this created a growing, geographically concentrated **Black urban vote**. Franklin Roosevelt's New Deal in the 1930s marked an early tipping point away from Black voters' historic identification as the "party of Lincoln"; that shift consolidated into a reliably Democratic bloc after the Democratic Party embraced civil rights legislation in the mid-1960s.

**Stronger civil-rights organizations.** Freed from the South's most direct forms of repression, Northern chapters of the **NAACP** and the **National Urban League** grew stronger and more assertive, building the organizational infrastructure the mid-century civil rights movement would later depend on.

**Migrants (and their children) led the movement.** It is tempting to describe "the Great Migration" and "the civil rights movement" as two separate stories, but many of the movement's most important organizers were migrants themselves, or grew up in migrant households:
- **A. Philip Randolph**, born in Crescent City, Florida, moved to New York City in 1911. In 1925 he organized the **Brotherhood of Sleeping Car Porters**, the first major Black labor union — built, notably, from the same Pullman porters who had smuggled the *Chicago Defender* south (Lesson 6).
- **Elijah Muhammad**, born Elijah Poole in Sandersville, Georgia, moved his family to Detroit in April 1923 as part of the Great Migration; he later became the leader of the Nation of Islam (BlackPast, n.d.-e).

**A note on precision.** It is common to see Martin Luther King Jr. or Malcolm X cited as "Great Migration figures," but the fit is weaker than it looks: King's family was established, prosperous Atlanta clergy, not migrants, and Malcolm X's family's move to Nebraska and Michigan is more directly tied to Marcus Garvey-style organizing than to the Great Migration as this course defines it. Randolph and Muhammad are the better-documented direct examples, a reminder that even a true, important connection (the Migration shaped the civil rights movement) is worth backing with the *specific* evidence, not the first name that comes to mind.

:::reveal Name one documented civil-rights-era figure who was himself a Great Migration migrant, and what he is known for. ||| A. Philip Randolph, who moved from Florida to New York City in 1911 and organized the Brotherhood of Sleeping Car Porters (1925), the first major Black labor union. (Elijah Muhammad, who moved to Detroit in 1923, is the other documented example in this lesson.)

## Sources
- BlackPast. (n.d.-e). *Elijah Muhammad (1897–1975)*. https://blackpast.org/african-american-history/muhammad-elijah-1897-1975/
- Wikipedia. (n.d.-o). *A. Philip Randolph*. https://en.wikipedia.org/wiki/A._Philip_Randolph
- National Archives. (n.d.-a). *The Great Migration (1910–1970)*. https://www.archives.gov/research/african-americans/migrations/great-migration`,
    },
    {
      slug: "the-long-shadow-and-the-return",
      title: "12 · The long shadow, and the return",
      section: "Consequences",
      recallContent: [
        {
          prompt: "Name one civil-rights organizer who was himself a documented Great Migration migrant.",
          answer: "A. Philip Randolph (or Elijah Muhammad).",
        },
      ],
      body: `The Migration's biggest consequences were not always visible at the time. Some of the most important ones were quietly built into maps.

**Redlining.** Starting in the late 1930s and continuing through **1935-1940**, the federal **Home Owners' Loan Corporation (HOLC)** produced "residential security" maps for 239 U.S. cities, grading neighborhoods from **A (green, "best")** down to **D ("hazardous," colored red)**. The presence of Black residents was explicitly used to justify a lower grade, regardless of the neighborhood's actual housing quality or residents' incomes (Mapping Inequality, n.d.). Because a "hazardous" grade made it far harder to get a normal home loan there, HOLC's maps helped **lock in** the very segregation the Migration's new Black neighborhoods had just built, a policy legacy that outlasted redlining's formal end by decades. Many of the neighborhoods this course has visited, Bronzeville, Paradise Valley, Harlem, appear on real, digitized HOLC maps, graded "hazardous," which you can view directly through the Mapping Inequality project.

**Deindustrialization.** The same manufacturing jobs (auto, steel, packing) that had pulled migrants north began declining in the second half of the twentieth century, hitting the very cities the Migration had built hardest, a story beyond this course's scope in detail, but a direct throughline from Lesson 5's arrival numbers.

**The reversal: a New Great Migration.** Since about **1970**, the flow has partly reversed. A trickle of Black Americans moving back to the South in the 1970s accelerated through the 1990s and 2000s, drawn to metro areas like **Atlanta, Dallas, Houston,** and **Charlotte**. Atlanta's Black population alone grew roughly **fivefold between 1970 and 2020** (Frey, 2004; Brookings Institution, n.d.). There is a kind of symmetry here worth sitting with: Lesson 1 opened with the South's Black population share falling from about 90% to about 53% by 1970, almost exactly the year the reversal begins. Research since has found that share climbing back toward the high 50s by 2020, as the return migration continued (Brookings Institution, n.d.).

**Bringing it home: the capstone.** You now have the whole arc, why people left, how they traveled, what they built, and what it changed for good. Choose one project to go deep on:

1. **Document a family or route.** Trace one family's move, yours, or an interviewee's: the town, the route, the destination, an oral-history interview, and a pin on the course map.
2. **Adopt a city.** Research one destination in depth (Chicago, Detroit, Harlem, or Oakland/Los Angeles): its growth numbers, a neighborhood, a historical figure, a work of art, and one civil-rights moment.
3. **Follow a song (or a book).** Trace one blues, jazz, or gospel song, or one novel, from its Southern origin to its Northern transformation, and explain specifically what the Migration did to it.
4. **Read the maps.** Compare a real 1930s-40s HOLC redlining map of a city to that same neighborhood today, and explain the through-line.
5. **A day in two worlds.** Write a creative-but-cited diary comparing the same person's day in the Jim Crow South versus the industrial North, grounded in real conditions from this course, clearly labeled as a creative exercise rather than a documented individual.

:::field-log foundations-capstone | Start your Great Migration capstone

:::reveal Since about what year has the "New Great Migration" reversal been pulling Black Americans back to the South, and name one destination metro area. ||| Since about 1970 (accelerating in the 1990s-2000s); Atlanta, Dallas, Houston, and Charlotte are the documented top destinations.

## Sources
- Mapping Inequality, University of Richmond Digital Scholarship Lab. (n.d.). *Redlining in New Deal America*. https://dsl.richmond.edu/panorama/redlining/map
- Frey, W. H. (2004). *The new great migration: Black Americans' return to the South, 1965–2000*. Brookings Institution. https://www.brookings.edu/articles/the-new-great-migration-black-americans-return-to-the-south-1965-2000/
- Brookings Institution. (n.d.). *A new great migration is bringing Black Americans back to the South*. https://www.brookings.edu/articles/a-new-great-migration-is-bringing-black-americans-back-to-the-south/`,
    },
  ],
};
