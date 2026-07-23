// Authored "Two Racetracks" — a cited, high-school-and-up SITE course on Learn.WitUS
// (Culture & History), and course 3 of the Indianapolis cluster planned in
// plans/39-indianapolis-pilot-cluster.md. It runs the same six-beat site template as courses 1
// and 2, one beat per section: Then, Built, Powers, Now, Next, Write.
//
// Prerequisites named in the description:
//   * `green-book-how-to-read-a-route` — the METHOD (read a listing, chain a route, research an
//     address forward).
//   * `indiana-avenue-a-district-and-what-replaced-it` — course 1, the same metro, the same
//     habit of naming the instrument, and the chronology test this course reuses.
//
// THE CIVIC QUESTION: who is admitted to a sport, and what gets built alongside when they are not?
//
// WHAT THIS COURSE VERIFIED, AND WHAT IT CUT. plans/39 §4 listed the Speedway exclusion story as a
// set of LEADS to confirm: "the sanctioning body's policy, the alternative championship's name,
// years, and venue, and the drivers involved." Result, item by item:
//   * HOLDS: the alternative championship is real and richly documented. The Colored Speedway
//     Association was founded in Indianapolis in 1924; its annual 100-mile race on the Indiana
//     State Fairgrounds dirt mile was nicknamed the Gold and Glory Sweepstakes by a Chicago
//     Defender sportswriter; the first running was 2 August 1924 and the last 20 September 1936.
//   * HOLDS, WITH A CORRECTION: the venue was not always the Fairgrounds. The 1931 race was run at
//     Walnut Gardens Speedway in Mooresville, Indiana, at half distance, because of Depression
//     finances. "The Fairgrounds race" is the usual shorthand and it is not quite right.
//   * DISAGREEMENT KEPT, NOT RESOLVED: the number of runnings (the Encyclopedia of Indianapolis
//     says an 11-year run with no race in 1934; the PBS companion site to the documentary lists
//     twelve dated races) and Charlie Wiggins's win count (four wins per the Encyclopedia, three
//     per an AAA-published article) are given with their owners rather than averaged.
//   * CUT AND REPLACED: **"the sanctioning body's written policy."** This course looked for a
//     published AAA Contest Board rule barring Black drivers and did not find one. What it found
//     instead is stronger evidence about a WEAKER claim: AAA officials, asked directly by the
//     Indianapolis Recorder in October 1947, said the association had never barred anyone by race
//     or creed, while the same period's record shows entries refused for want of AAA registration,
//     no Black driver licensed until the late 1940s, and no Black driver starting the
//     Indianapolis 500 until 1991. Lesson 10 is the house-style lesson that reports the cut. The
//     replacement lesson is better civics anyway: exclusion run through licensing, entry approval
//     and private admission leaves almost no paper, and that is the design rather than an
//     accident.
//
// Sourcing discipline (the load-bearing part of this file):
//   * NO INVENTED STATISTIC, QUOTATION, PERSON, ADDRESS OR RACE RESULT. Speeds, finishing
//     positions and dates are transcribed from the source that carries them, with the source
//     named in the sentence.
//   * The two Encyclopedia of Indianapolis entries on the Sweepstakes and on Wiggins were written
//     by Todd Gould, who also wrote the book and the documentary. That is an authority and it is
//     also a single point of failure, and lesson 10 says so out loud.
//   * Wiggins has living descendants and the Colored Speedway Association's story is being
//     actively commemorated. He is credited for what he BUILT — a garage, a car, a circuit, a
//     national audience — not only for what was refused him. No ruin porn, no lost golden age.
//
// House rule: NO em-dashes or en-dashes in prose. ASCII hyphens in ranges are fine.

import type { AuthoredCourse } from "./authored-course";

export const TWO_RACETRACKS_COURSE: AuthoredCourse = {
  title: "Two Racetracks",
  description:
    "A cited, high-school-and-up site course on the two racetracks of Indianapolis and the civic question that runs between them: who is admitted to a sport, and what gets built alongside when they are not? Five miles apart sit a 2.5-mile oval that opened in 1909, was paved with 3.2 million bricks, became a National Historic Landmark in 1987 and still runs the race it was built for, and a one-mile dirt oval that opened with the state fairgrounds in 1892, held the largest annually staged Black sporting event in America between 1924 and 1936, and was converted in 2019 to a crushed-limestone harness training surface and parking. Between 1924 and 1936 the Colored Speedway Association ran the Gold and Glory Sweepstakes on that dirt mile, because the premier race would not admit Black drivers; the first Black driver started the Indianapolis 500 in 1991, eighty years and seventy-five runnings after the first. This course does not repeat the story it inherited. It goes looking for the written rule that is supposed to sit under it, reports that it could not find one, and teaches the far more useful thing it found instead: how a license, an entry form, a club membership and a private gate can do the work of a rule while leaving almost no record. You will learn what an oval does to a farm and a town, why the Town of Speedway is one of the four places the 1970 Unigov consolidation left alone, who governs each of these two grounds today (one is private property, one is a state body corporate and politic, one is a town with its own redevelopment commission chartered to eliminate blight), test a claim against the record and watch part of it fail, look up a real parcel and a real public meeting, and write one piece of grounded nonfiction. Prerequisites: The Green Book: How to Read a Route (the method) and Indiana Avenue: A District and What Replaced It (course 1, the same metro and the same instruments). A 360 tour of the Indianapolis Motor Speedway is planned and will be added to the Now section when its embed URL exists.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history. The two tracks, and who raced on each)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "tr-two-tracks",
      title: "1 · Two racetracks, five miles apart",
      section: "Section 1 · Then",
      body: `**Where this course sits.** You have finished *The Green Book: How to Read a Route*, which taught the method, and *Indiana Avenue: A District and What Replaced It*, which applied it to one corridor and asked who decided, under which instrument, on what record. This course takes the same question to a subject that looks like it has nothing to do with planning law: **a sport.**

**The civic question, stated once so you can carry it through all six sections.** *Who is admitted to a sport, and what gets built alongside when they are not?*

**The title is the argument.** Indianapolis has two racetracks with long histories, and for a period of years they existed in the same city under two different answers to that question. This lesson introduces both, with their dates, and nothing else. **You cannot compare two things until you know what each one is.**

## Track one: the Indianapolis Motor Speedway

**The idea and the company.** The Encyclopedia of Indianapolis dates Carl Graham Fisher's conception of the track to **1906**, and says he formed the **Indianapolis Motor Speedway Company in 1909** with three partners: **Arthur Newby** of the National Motor Vehicle Company, **Frank Wheeler** of the Wheeler-Schebler Carburetor Company, and **James A. Allison** of the Prest-O-Lite Company (Encyclopedia of Indianapolis, n.d.-a). The Cultural Landscape Foundation dates the initial proposal to **1905** and the company's formation to **1906** (Cultural Landscape Foundation, n.d.). **Two reputable sources, two sets of dates, and this course does not pick one.** Note the disagreement and move on; it is not load-bearing for anything that follows, which is exactly why it is a safe place to practise noticing one.

**The ground.** The facility opened on farmland roughly five miles northwest of the city (Encyclopedia of Indianapolis, n.d.-a). Its address today is **4790 W. 16th Street**, and the Cultural Landscape Foundation puts the site at about **560 acres** (Encyclopedia of Indianapolis, n.d.-a; Cultural Landscape Foundation, n.d.).

**The shape and the surface.** A **2.5-mile rectangular oval**. The first surface was crushed rock and tar and proved dangerous, so in **September 1909** the oval was repaved with **3.2 million ten-pound paving bricks**, laid in **63 days**, which is where the nickname the Brickyard comes from (Encyclopedia of Indianapolis, n.d.-a; Indianapolis Motor Speedway, n.d.-a).

**The race.** The first **500-mile race was run in 1911** (Encyclopedia of Indianapolis, n.d.-a). It has been run at this track ever since, with interruptions for two world wars.

## Track two: the Indiana State Fairgrounds mile

**The ground.** The Indiana State Fair moved several times before it settled. In **1891** the State Board of Agriculture sold its old grounds, the Civil War era Camp Morton site, for **275,100 dollars**, and bought the **Jay G. Voss farm** at East 38th Street and Fall Creek Parkway. The new fairgrounds **officially opened on September 19, 1892**, with **72 buildings, a 6,000-seat grandstand, and a mile race track**, on **214 acres** (Encyclopedia of Indianapolis, n.d.-b). The address is **1202 East 38th Street**.

**The shape and the surface.** A **one-mile dirt oval**. Over the next century it carried auto polo in 1918, daredevil shows in the 1930s, midget races, and from **1953** the **Hoosier Hundred**, a 100-mile dirt track race (Encyclopedia of Indianapolis, n.d.-b).

**Hold those two descriptions side by side.** One track is privately built by four manufacturers on farmland for the purpose of racing and testing cars. **The other is a state fair's grandstand attraction on state ground**, built to draw a crowd to an agricultural exhibition. They are different kinds of institution before they are different kinds of racetrack, and Section 5 will show you that the difference still decides who may attend a meeting about them today.

## The fact this course is built on

**Between 1924 and 1936, the biggest annually staged Black sporting event in the United States was run on the dirt mile**, because the 500-mile race on the brick oval would not admit Black drivers. The Encyclopedia of Indianapolis states it in one sentence: "Indianapolis Motor Speedway officials did not allow African Americans to participate in the Indianapolis 500-Mile Race" (Encyclopedia of Indianapolis, n.d.-c). The Speedway's own website, writing about that period in 2021, states it too: "1920s America was racially segregated, and the Indy 500, like all major league sports during the era, was whites only" (Indianapolis Motor Speedway, 2021).

**Notice who is saying that second sentence.** It is the institution itself, on its own website, about its own history. **A source that is admitting something against its own interest is stronger evidence than a source that has nothing to lose**, and recognising that is a research skill you will use far outside this course.

**And notice what neither sentence contains.** Neither one names a rule. Neither one names a body that wrote the rule, a date it was adopted, or a document it is written in. **Section 3 goes looking for that document.** What happens there is the reason this course exists.

## Sources
- Cultural Landscape Foundation. (n.d.). *Indianapolis Motor Speedway*. https://www.tclf.org/landscapes/indianapolis-motor-speedway
- Encyclopedia of Indianapolis. (n.d.-a). *Indianapolis Motor Speedway*. https://indyencyclopedia.org/indianapolis-motor-speedway/
- Encyclopedia of Indianapolis. (n.d.-b). *Indiana State Fair and Fairgrounds*. https://indyencyclopedia.org/indiana-state-fair-and-fairgrounds/
- Encyclopedia of Indianapolis. (n.d.-c). *Gold and Glory Sweepstakes*. https://indyencyclopedia.org/gold-and-glory-sweepstakes/
- Indianapolis Motor Speedway. (n.d.-a). *About the track*. https://www.indianapolismotorspeedway.com/history/about-the-track
- Indianapolis Motor Speedway. (2021, July 13). *Black racing legend Wiggins drives to big screen with new movie "Eraced"*. https://www.indianapolismotorspeedway.com/news-multimedia/news/2021/07/13/black-racing-legend-wiggins-drives-to-big-screen-with-new-movie-eraced`,
      recallContent: [
        {
          prompt: "Give the Indianapolis Motor Speedway's shape, size and 1909 surface, with the numbers.",
          answer: "A 2.5-mile rectangular oval. The first surface was crushed rock and tar; in September 1909 it was repaved with 3.2 million ten-pound paving bricks, laid in 63 days, which is where the nickname the Brickyard comes from.",
        },
        {
          prompt: "When and where did the Indiana State Fairgrounds mile track open, and what else opened with it?",
          answer: "September 19, 1892, on the former Jay G. Voss farm at East 38th Street and Fall Creek Parkway. It opened with 72 buildings and a 6,000-seat grandstand on 214 acres.",
        },
        {
          prompt: "Two sources give different founding dates for the Speedway. What does this course do about it?",
          answer: "Names both. The Encyclopedia of Indianapolis dates the idea to 1906 and the company to 1909; the Cultural Landscape Foundation dates the proposal to 1905 and the company to 1906. Neither is picked, because the disagreement is not load-bearing.",
        },
        {
          prompt: "What is the institutional difference between the two tracks, before you get to racing?",
          answer: "One was privately built by four manufacturers on farmland to race and test cars. The other is a grandstand attraction on state fairgrounds, built to draw a crowd to an agricultural exhibition. That difference still decides who may attend a public meeting about each one.",
        },
        {
          prompt: "Why is the Speedway's own 2021 statement that the Indy 500 was 'whites only' unusually strong evidence?",
          answer: "Because it is the institution admitting something against its own interest on its own website. A source with something to lose by saying a thing is stronger than a source with nothing to lose.",
        },
      ],
    },
    {
      slug: "tr-gold-and-glory",
      title: "2 · The Gold and Glory Sweepstakes",
      section: "Section 1 · Then",
      body: `When a door is held shut, one response is to knock. Another is to build a door. **This lesson is about the second one, and it is a construction story rather than a grievance story.**

**The organisation, first, because the organisation is the point.** In **1924** a group of Indianapolis men founded the **Colored Speedway Association**. The Encyclopedia of Indianapolis names them: **William Rucker**, known as "Prez," along with **Harry Dunnington, George LeMon, Oscar E. Schilling, Earnest Jay Butler, Alvin D. Smith and Harry A. Earl** (Encyclopedia of Indianapolis, n.d.-c). **Seven names, on the record, for an organisation founded to run motor races.** That is a board of directors, not a spontaneous gathering, and treating it as one is the difference between reading this as history and reading it as folklore.

**The race.** The association's annual event was a **100-mile race on the one-mile dirt track at the Indiana State Fairgrounds**. Its first running was **August 2, 1924** (Encyclopedia of Indianapolis, n.d.-c).

**The name came from a newspaper, which tells you what the press was for.** The Encyclopedia records that "the race coined its nickname from a Chicago Defender sportswriter by the name of Frank A. 'Fay' Young" (Encyclopedia of Indianapolis, n.d.-c). The *Chicago Defender* was the most widely circulated Black newspaper in the country, and the same paper's reach is the hinge of the Great Migration courses in this catalogue. **An event without coverage is a local picnic. An event a national paper names is a national event**, and the naming was itself an act of institution-building.

**What the first race looked like, from the companion site to the documentary.** The 1924 field had **27 entrants**, mostly from Indianapolis with several from Chicago and one from St. Louis. **Malcolm Hannon won** in the Barber-Warnock Ford Special at an average of **63.5 miles per hour**, with **John Simmons** second in a Fronty Ford. Drivers raced under names like "Wild Bill" Jeffries, A. J. "Speed King" Russell, "Cowboy" Moore and Jack "Long Shot" Sargent, in cars called the Ghost Special, the Dreamland Duesenberg and the Lewis Special (PBS, n.d.-a). An article published by the American Automobile Association in 2021 puts the first race's crowd at **12,000** and calls it "the largest sporting event held for African Americans up to that point" (Sheldon, 2021).

**Now three things a careful reader has to hold at once, because the sources do not agree.**

**1. How many races were there?** The Encyclopedia of Indianapolis says: "During its 11-year run (the race did not take place in 1934), the Sweepstakes was the most widely attended and the most celebrated auto racing event of its kind for African American sportsmen" (Encyclopedia of Indianapolis, n.d.-c). The PBS companion site to the *For Gold and Glory* documentary carries dated pages for **1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1935 and 1936**, which is twelve races (PBS, n.d.-b). **Both of those were produced with the involvement of the same historian.** This course reports both counts and adopts neither, which is the only honest move when your two best sources disagree and you have not seen the underlying race records.

**2. It was not always at the Fairgrounds.** The **1931** race was run on **July 4 at Walnut Gardens Speedway in Mooresville, Indiana**, at **50 miles instead of 100**, because Depression finances forced the move; the companion site records that the speedway's owner **Harry Earl** offered the facility for one dollar. **Charlie Wiggins won it at an average of 58.2 miles per hour**, with Bobby Wallace second (PBS, n.d.-c). **"The Fairgrounds race" is a useful shorthand and it is not accurate**, and you now know why. Harry Earl is also one of the seven founders named above, which tells you how thin the margin was: the man who lent the track was on the board.

**3. It spread.** The Encyclopedia notes that "other Midwestern cities created their own 'Gold and Glory' events," without naming them (Encyclopedia of Indianapolis, n.d.-c). **A named absence is still information.** If you wanted to extend this research, that sentence is your assignment: find the cities, and find them in the Black press.

**The last one.** The final Gold and Glory Sweepstakes was run on **September 20, 1936**, back at the Indiana State Fairgrounds. It was **cut from 100 miles to 50**, partly to let medical crews reach drivers injured in a **thirteen-car pileup on the fourth turn of the second lap**. **Bill Carson of Chicago won** in a Boyle Valve Special at an average of **57.69 miles per hour**, with **Sumner "Red" Oliver** second (PBS, n.d.-d). The series did not run again. The Encyclopedia attributes the end to Depression finances combined with that accident (Encyclopedia of Indianapolis, n.d.-c).

**Read the three average speeds in order and you have the economics of the whole enterprise in one line: 63.5 in 1924, 58.2 in 1931, 57.69 in 1936.** The cars did not get slower because the drivers got worse. **A circuit running on borrowed tracks and second-hand machinery in the middle of a depression gets slower**, and the number is the receipt.

## Sources
- Encyclopedia of Indianapolis. (n.d.-c). *Gold and Glory Sweepstakes*. https://indyencyclopedia.org/gold-and-glory-sweepstakes/
- PBS. (n.d.-a). *For gold and glory: 1924*. https://www.pbs.org/forgoldandglory/history/1924.html
- PBS. (n.d.-b). *For gold and glory: History*. https://www.pbs.org/forgoldandglory/history/
- PBS. (n.d.-c). *For gold and glory: 1931*. https://www.pbs.org/forgoldandglory/history/1931.html
- PBS. (n.d.-d). *For gold and glory: 1936*. https://www.pbs.org/forgoldandglory/history/1936.html
- Sheldon, A. (2021, February 12). *Charlie Wiggins and the Gold and Glory Sweepstakes*. AAA Northeast. https://magazine.northeast.aaa.com/daily/life/cars-trucks/charlie-wiggins-and-the-gold-and-glory-sweepstakes/`,
      recallContent: [
        {
          prompt: "Who founded the Colored Speedway Association, and in what year?",
          answer: "Seven men in 1924: William 'Prez' Rucker, Harry Dunnington, George LeMon, Oscar E. Schilling, Earnest Jay Butler, Alvin D. Smith and Harry A. Earl. It was a board, not a spontaneous gathering.",
        },
        {
          prompt: "Where did the name 'Gold and Glory' come from?",
          answer: "A Chicago Defender sportswriter, Frank A. 'Fay' Young. A national Black newspaper naming the event is what made it a national event rather than a local one.",
        },
        {
          prompt: "Give the first race's date, venue, distance, winner and average speed.",
          answer: "August 2, 1924, on the one-mile dirt track at the Indiana State Fairgrounds, 100 miles. Malcolm Hannon won in the Barber-Warnock Ford Special at an average of 63.5 miles per hour, with John Simmons second.",
        },
        {
          prompt: "Two good sources disagree about how many Gold and Glory races were run. What are the two counts, and what does this course do?",
          answer: "The Encyclopedia of Indianapolis calls it an 11-year run with no race in 1934; the PBS companion site carries dated pages for twelve races between 1924 and 1936. The course reports both and adopts neither, because it has not seen the underlying race records.",
        },
        {
          prompt: "Why is 'the Fairgrounds race' an inaccurate shorthand?",
          answer: "Because the 1931 running was held at Walnut Gardens Speedway in Mooresville, Indiana, on July 4, at 50 miles rather than 100, after founder Harry Earl offered his facility for one dollar.",
        },
        {
          prompt: "What do the three recorded winning average speeds show, and what are they?",
          answer: "63.5 mph in 1924, 58.2 in 1931, 57.69 in 1936. The decline is the economics of a circuit running on borrowed tracks and second-hand machinery through a depression, not a decline in driving.",
        },
      ],
    },
    {
      slug: "tr-drivers",
      title: "3 · The drivers, and the eighty years",
      section: "Section 1 · Then",
      body: `A sport is people. This lesson names four of them, with dates, and then gives you the single number that measures the whole question.

## Charlie Wiggins, who built the car he was not allowed to race

**The life, from the Encyclopedia of Indianapolis entry written by Todd Gould.** **Charles Edwin "Charlie" Wiggins was born July 15, 1897, in the Baptisttown neighbourhood of Evansville, Indiana.** He moved to Indianapolis in **1923** with his wife **Roberta**, worked at **Louis Sagalowsky's auto repair shop**, built his race car, the **Wiggins Special**, there, and eventually owned and operated the garage himself. **He died March 11, 1979, and is buried at Crown Hill Cemetery in Indianapolis** (Encyclopedia of Indianapolis, n.d.-d).

**Read that sequence again, because it is the part most retellings skip.** He was a **mechanic who owned his shop**. The racing came out of the trade, and the trade outlasted the racing by forty-three years. **A man who buys the shop he was hired into is a business story**, and it belongs in the record next to everything that was refused him.

**What he won.** The Encyclopedia records a first Gold and Glory victory in **1926** and then back-to-back wins in **1931, 1932 and 1933**, four in all, and the nickname **"the Speed King"** (Encyclopedia of Indianapolis, n.d.-c, n.d.-d). **The AAA-published article on Wiggins says three championships** (Sheldon, 2021). The Automotive Hall of Fame says four, across a wider year span (Automotive Hall of Fame, n.d.). **Three sources, two counts, one span that does not match the others.** Give the count you use and name whose count it is. That instruction is the whole method course in one sentence.

**The 1934 story, which is where you must be most careful of all.** Three sources describe Wiggins's relationship to the winning car of the 1934 Indianapolis 500, driven by **Bill Cummings**, and they describe it differently.
- The **Encyclopedia of Indianapolis** says leading white drivers, "including 1934 Indianapolis 500 champion Bill Cummings," consulted him for his mechanical expertise (Encyclopedia of Indianapolis, n.d.-d).
- The **Automotive Hall of Fame** says he served as an engineer on the winning car in 1934 and "was not allowed to stand in Victory Lane with his fellow crewmates" (Automotive Hall of Fame, n.d.).
- The **AAA article** says Cummings hired him to tune the car and that "Wiggins posed as a janitor" to be present (Sheldon, 2021).

**Those are three different factual claims, not three phrasings of one.** Consulted, crewed, or crewed in disguise are distinguishable states of the world, and they would be settled by an entry list, a payroll, a photograph or a contemporaneous newspaper. **This course has read none of those**, so it reports the three versions with their owners and stops. **That is not fence-sitting. It is the difference between a citation and a decoration.**

**The end of his racing.** In the thirteen-car pileup at the **1936** Gold and Glory Sweepstakes, Wiggins was pinned under his burning engine. He survived surgery, **lost his right leg**, made himself a wooden prosthetic, and went back to work on passenger and racing cars at his garage for the rest of his life (Encyclopedia of Indianapolis, n.d.-d). **He was elected to the Automotive Hall of Fame in 2021**, forty-two years after his death (Encyclopedia of Indianapolis, n.d.-d).

**A historical marker for Wiggins was erected in Evansville in 2018 by the Indiana Racing Memorial Association**, and a second marker at the Indiana State Fairgrounds records the mile track's racing history (Historical Marker Database, n.d.). Section 4 asks you to read a marker's sponsor as carefully as its text.

## Joie Ray, who got the license

**Joseph Reynolds "Joie" Ray Jr. was born September 29, 1923, in Louisville, Kentucky, and died April 13, 2007.** On **April 6, 1947**, at Mitchell, Indiana, he became the first African American driver to compete alongside white drivers in a sanctioned sprint car race, run by the Midwest Dirt Track Racing Association. He drove his first **AAA-sanctioned** race on **June 26, 1949**, at **Salem Speedway** in Indiana, qualifying thirteenth and finishing eighth. He raced midgets, sprint cars and stock cars into the 1960s, was inducted into the Hoosier Auto Racing Fans Hall of Fame in 1995, and was recognised at the **2003 Indianapolis 500** as a driver who helped end the colour barrier in motorsport (African Americans in Motorsports, n.d.).

**One caution about this paragraph.** Accounts disagree about **whether Ray's first licence came from the AAA in 1946 or 1947, and whether the association that first licensed him was the AAA or its successor**. The source above says one thing; other summaries say another. **A licence is a document with a date on it, held by an organisation**, which means this is a resolvable question and nobody in this course has resolved it. Treat the 1947 and 1949 dates above as this source's dates. Section 3 explains why the licence, and not the trophy, is the thing to chase.

## Willy T. Ribbs and George Mack, and the number

**Willy T. Ribbs qualified for the Indianapolis 500 on May 19, 1991**, with a four-lap average of **217.358 miles per hour**, starting **29th** in the **75th running** of the race on May 26. His engine lost power and he completed **five laps**, finishing **32nd**, driving for Walker Racing (Motorsport Magazine, n.d.; Indianapolis Motor Speedway, 2017).

**George Mack qualified for the 2002 race**, the 86th running, on his last attempt on Bump Day at a four-lap average of **227.150 miles per hour**, and **finished 17th** (RACER, 2021).

**Now the number, and it is the most important number in this course.** **The first 500-mile race was run in 1911. The first Black driver started one in 1991.** That is **eighty years**, and because the race was not held during two world wars, it is **seventy-five runnings** (Encyclopedia of Indianapolis, n.d.-a; Motorsport Magazine, n.d.).

**Do not round that off into a slogan.** Eighty years is a measurement, and like every measurement in this course it has a definition attached: it counts **starters in the 500-mile race at this track**, not entries attempted, not licences held, not other events at other tracks. **Say what you counted.** Section 3 is about what filled those eighty years, and it is not a rule.

## Sources
- African Americans in Motorsports. (n.d.). *Joie Ray*. https://aaim1.com/african-american-racing-history-joie-ray
- Automotive Hall of Fame. (n.d.). *Charlie Wiggins*. https://automotivehalloffame.org/stories/charlie-wiggins/
- Encyclopedia of Indianapolis. (n.d.-a). *Indianapolis Motor Speedway*. https://indyencyclopedia.org/indianapolis-motor-speedway/
- Encyclopedia of Indianapolis. (n.d.-c). *Gold and Glory Sweepstakes*. https://indyencyclopedia.org/gold-and-glory-sweepstakes/
- Encyclopedia of Indianapolis. (n.d.-d). *Charles Edwin "Charlie" Wiggins*. https://indyencyclopedia.org/charles-edwin-charlie-wiggins/
- Historical Marker Database. (n.d.). *Charlie Wiggins historical marker*. https://www.hmdb.org/m.asp?m=175997
- Indianapolis Motor Speedway. (2017, February 20). *Ribbs enjoying quiet life after barrier-breaking career in racing*. https://www.indianapolismotorspeedway.com/news-multimedia/news/2017/02/20/willy-t-ribbs-enjoying-quiet-life-after-barrier-breaking-career-in-racing-2017
- Motorsport Magazine. (n.d.). *Willy T Ribbs on becoming the first black driver in Indy 500*. https://www.motorsportmagazine.com/articles/us-scene/indycar/willy-t-ribbs-on-becoming-the-first-black-driver-in-indy-500-the-pressure-was-unbelievable/
- RACER. (2021, February 25). *Retro: Mack's dizzyingly unlikely Indy 500 run*. https://racer.com/2021/02/25/retro-macks-dizzyingly-unlikely-indy-500-run/
- Sheldon, A. (2021, February 12). *Charlie Wiggins and the Gold and Glory Sweepstakes*. AAA Northeast. https://magazine.northeast.aaa.com/daily/life/cars-trucks/charlie-wiggins-and-the-gold-and-glory-sweepstakes/`,
      recallContent: [
        {
          prompt: "Give Charlie Wiggins's dates and his trade.",
          answer: "Born July 15, 1897, in Baptisttown, Evansville; moved to Indianapolis in 1923; died March 11, 1979, buried at Crown Hill Cemetery. He was a mechanic who worked at Louis Sagalowsky's shop, built the Wiggins Special there, and eventually owned the garage.",
        },
        {
          prompt: "Three sources describe Wiggins's role on the 1934 Indianapolis 500 winning car differently. What are the three versions, and what does the course do?",
          answer: "The Encyclopedia says Bill Cummings consulted him; the Automotive Hall of Fame says he engineered the car and was kept out of Victory Lane; an AAA article says he was hired to tune it and posed as a janitor. Those are different claims, so the course reports all three with their owners and settles none, because it has not seen an entry list, a payroll or a photograph.",
        },
        {
          prompt: "What happened to Wiggins in 1936, and what did he do afterwards?",
          answer: "He was pinned under his burning engine in a thirteen-car pileup and lost his right leg. He made a wooden prosthetic and worked on passenger and racing cars at his garage for the rest of his life. He was elected to the Automotive Hall of Fame in 2021.",
        },
        {
          prompt: "Who was Joie Ray, and what is unresolved about his licensing?",
          answer: "The first African American driver to race alongside white drivers in a sanctioned sprint car race, at Mitchell, Indiana, on April 6, 1947, and an AAA competitor from June 26, 1949, at Salem Speedway. Accounts disagree about whether his first licence came in 1946 or 1947 and whether the AAA or its successor issued it. A licence is a dated document, so the question is resolvable and has not been resolved here.",
        },
        {
          prompt: "Give the headline number, and its definition.",
          answer: "Eighty years and seventy-five runnings between the first 500-mile race in 1911 and Willy T. Ribbs starting the 1991 race. The definition counts starters in the 500-mile race at this track, not entries attempted or licences held.",
        },
      ],
    },
    {
      slug: "tr-quiz-then",
      title: "4 · Quiz: the two tracks",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What shape and size is the Indianapolis Motor Speedway's track?",
            options: [
              "A one-mile dirt oval",
              "A 2.5-mile rectangular oval",
              "A 4.5-mile road course",
              "A half-mile paved bullring",
            ],
            correctIndex: 1,
            explanation: "A 2.5-mile rectangular oval, repaved in September 1909 with 3.2 million ten-pound bricks laid in 63 days.",
            sourceLessonSlug: "tr-two-tracks",
          },
          {
            prompt: "How many bricks were laid on the Speedway in 1909, and over how many days?",
            options: ["320,000 bricks in 6 days", "1 million bricks in 30 days", "3.2 million bricks in 63 days", "10 million bricks in 180 days"],
            correctIndex: 2,
            explanation: "Ten-pound paving bricks, laid in the autumn of 1909 after the original crushed rock and tar surface proved dangerous. Hence the Brickyard.",
            sourceLessonSlug: "tr-two-tracks",
          },
          {
            prompt: "When did the Indiana State Fairgrounds open at its present site, and what did it include?",
            options: [
              "September 19, 1892, with 72 buildings, a 6,000-seat grandstand and a mile race track on 214 acres",
              "1860, with 30 acres at Otis Grove",
              "1909, with a 2.5-mile oval",
              "1953, with the first Hoosier Hundred",
            ],
            correctIndex: 0,
            explanation: "The State Board of Agriculture sold the Camp Morton grounds for 275,100 dollars and bought the Jay G. Voss farm at East 38th Street and Fall Creek Parkway.",
            sourceLessonSlug: "tr-two-tracks",
          },
          {
            prompt: "Two reputable sources give different founding dates for the Speedway. What is the right response?",
            options: [
              "Average the two dates",
              "Use the earlier one because it is more impressive",
              "Ignore both and omit the date",
              "Report both with their owners, and note that the disagreement is not load-bearing",
            ],
            correctIndex: 3,
            explanation: "The Encyclopedia of Indianapolis dates the idea to 1906 and the company to 1909; the Cultural Landscape Foundation says 1905 and 1906. Neither is picked.",
            sourceLessonSlug: "tr-two-tracks",
          },
          {
            prompt: "In what year was the Colored Speedway Association founded, and by how many named men?",
            options: ["1911, by four men", "1924, by seven men", "1936, by two men", "1953, by a state commission"],
            correctIndex: 1,
            explanation: "William 'Prez' Rucker, Harry Dunnington, George LeMon, Oscar E. Schilling, Earnest Jay Butler, Alvin D. Smith and Harry A. Earl. A board of directors, not a spontaneous gathering.",
            sourceLessonSlug: "tr-gold-and-glory",
          },
          {
            prompt: "Where did the name 'Gold and Glory' come from?",
            options: [
              "A Chicago Defender sportswriter, Frank A. 'Fay' Young",
              "The Indiana State Fair Board",
              "The trophy's inscription",
              "A Speedway press release",
            ],
            correctIndex: 0,
            explanation: "A national Black newspaper naming the event is part of what made it a national event, which is why the press belongs in the institution-building story.",
            sourceLessonSlug: "tr-gold-and-glory",
          },
          {
            prompt: "Who won the first Gold and Glory Sweepstakes, on what date, and at what average speed?",
            options: [
              "Charlie Wiggins, July 4, 1931, at 58.2 mph",
              "Bill Carson, September 20, 1936, at 57.69 mph",
              "Malcolm Hannon, August 2, 1924, at 63.5 mph",
              "John Simmons, August 2, 1924, at 63.5 mph",
            ],
            correctIndex: 2,
            explanation: "Hannon drove the Barber-Warnock Ford Special; John Simmons was second in a Fronty Ford, in a field of 27 entrants.",
            sourceLessonSlug: "tr-gold-and-glory",
          },
          {
            prompt: "Why is calling the Gold and Glory Sweepstakes 'the Fairgrounds race' inaccurate?",
            options: [
              "It was never held at the Fairgrounds",
              "It was held at a different track every year",
              "It was a road race, not an oval race",
              "The 1931 running was at Walnut Gardens Speedway in Mooresville, Indiana, at half distance",
            ],
            correctIndex: 3,
            explanation: "Depression finances forced the move; founder Harry Earl offered his facility for one dollar, and Charlie Wiggins won the 50-mile race at 58.2 mph.",
            sourceLessonSlug: "tr-gold-and-glory",
          },
          {
            prompt: "The winning average speeds recorded for 1924, 1931 and 1936 were 63.5, 58.2 and 57.69 mph. What is the best reading?",
            options: [
              "A circuit running on borrowed tracks and second-hand machinery through a depression got slower",
              "The drivers got worse over time",
              "The track surface improved",
              "The races got longer",
            ],
            correctIndex: 0,
            explanation: "Two of those three races were also cut from 100 miles to 50. The number is the receipt for the economics.",
            sourceLessonSlug: "tr-gold-and-glory",
          },
          {
            prompt: "How many Gold and Glory races were run, according to this course's two best sources?",
            options: [
              "Both sources agree on twelve",
              "The Encyclopedia calls it an 11-year run with no race in 1934; the PBS companion site carries twelve dated races",
              "Nobody has ever counted",
              "Exactly thirteen, one per year from 1924 to 1936",
            ],
            correctIndex: 1,
            explanation: "The course reports both counts and adopts neither, because it has not seen the underlying race records.",
            sourceLessonSlug: "tr-gold-and-glory",
          },
          {
            prompt: "What was Charlie Wiggins's trade, and how long did he practise it?",
            options: [
              "He was a full-time professional driver only",
              "He was a state fair employee",
              "He was a promoter who never drove",
              "He was a mechanic who worked at, and eventually owned, an auto repair garage, and kept working there until his death in 1979",
            ],
            correctIndex: 3,
            explanation: "The racing came out of the trade, and the trade outlasted the racing by forty-three years. A man who buys the shop he was hired into is a business story.",
            sourceLessonSlug: "tr-drivers",
          },
          {
            prompt: "Three sources describe Wiggins's role on the winning 1934 Indianapolis 500 car. What does this course conclude?",
            options: [
              "That he definitely posed as a janitor",
              "That the story is a myth",
              "That 'consulted', 'crewed', and 'crewed in disguise' are different claims, so all three are reported with their owners and none is adopted",
              "That the Automotive Hall of Fame is the only reliable source",
            ],
            correctIndex: 2,
            explanation: "An entry list, a payroll, a photograph or a contemporaneous newspaper would settle it. This course has read none of them.",
            sourceLessonSlug: "tr-drivers",
          },
          {
            prompt: "What happened to Charlie Wiggins in the 1936 Gold and Glory Sweepstakes, and what did he do after?",
            options: [
              "He lost his right leg in a thirteen-car pileup, made a wooden prosthetic, and worked on cars at his garage for the rest of his life",
              "He retired undefeated and left Indiana",
              "He was killed in the crash",
              "He was banned from racing by the state",
            ],
            correctIndex: 0,
            explanation: "He was elected to the Automotive Hall of Fame in 2021, forty-two years after his death.",
            sourceLessonSlug: "tr-drivers",
          },
          {
            prompt: "Willy T. Ribbs qualified for the Indianapolis 500 in 1991. What are the documented details?",
            options: [
              "He qualified on pole and won the race",
              "He qualified in 1985 and finished second",
              "He qualified May 19, 1991, at a four-lap average of 217.358 mph, started 29th in the 75th running, and finished 32nd after five laps",
              "He qualified but did not start",
            ],
            correctIndex: 2,
            explanation: "His engine lost power early. George Mack became the second Black driver to start the race, in 2002, qualifying at 227.150 mph and finishing 17th.",
            sourceLessonSlug: "tr-drivers",
          },
          {
            prompt: "The headline number in this course is eighty years and seventy-five runnings. What exactly does it count?",
            options: [
              "Every race ever held at either Indianapolis track",
              "Entries attempted by Black drivers",
              "Licences issued to Black drivers",
              "Starters in the 500-mile race at this track, between 1911 and Ribbs's start in 1991",
            ],
            correctIndex: 3,
            explanation: "Every measurement carries a definition. Say what you counted, and say what you did not.",
            sourceLessonSlug: "tr-drivers",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture and land use. What a track does to the ground,
    // and to the town around it)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "tr-built-oval",
      title: "5 · What kind of building an oval is",
      section: "Section 2 · Built",
      body: `Beat 2 of the site template asks: **why does it look like that?** Course 1 answered that question for a flatiron building by going back to a street on an 1821 plat. This one has a harder subject, because **a racetrack is barely a building at all.**

**Start with the typology problem.** A commercial corridor is a row of buildings. A racetrack is **a shaped piece of ground with seating attached**. The primary structure is the surface itself, and the surface is civil engineering: grading, drainage, banking, and a running line. Everything a visitor would call architecture, the grandstands, the towers, the garages, the gates, is **secondary equipment arranged around a piece of engineered land.** That distinction is why this section is about land use as much as it is about buildings.

**What the oval does to the ground it sits on.** A 2.5-mile closed circuit encloses an enormous interior, and an enclosed interior has to be used for something. The Encyclopedia of Indianapolis records that an **eighteen-hole golf course was installed in 1929 within and outside the infield** (Encyclopedia of Indianapolis, n.d.-a); the Cultural Landscape Foundation notes that **four holes of the Brickyard Crossing course sit inside the track** today (Cultural Landscape Foundation, n.d.). **A golf course inside a racetrack is not a curiosity. It is the answer to a land-use problem the shape created.**

**And what it does to the town outside it.** The Speedway's own site describes the facility as having **more than 250,000 permanent seats**, and calls it "the world's largest sports seating facility" (Indianapolis Motor Speedway, n.d.-a). **Hold that number against a calendar.** A land use with a quarter of a million seats that fills a handful of days a year has a demand profile unlike anything else in a city: **almost empty for most of the year, and then the largest single-day gathering in the region.** Everything around it gets sized for the peak. Road capacity, parking, lawns rented as lots, food, lodging, policing, and small businesses whose year turns on a few days. **When you look at the streets around this track in Section 4, you are looking at the physical shape of one day in May.**

## The brick, and what preservation actually preserves

**3.2 million bricks went down in 1909** (Encyclopedia of Indianapolis, n.d.-a; Indianapolis Motor Speedway, n.d.-a). The Cultural Landscape Foundation records that the brick surface was **overlaid with asphalt in 1937**, that "the original bricks remain underneath," and that **a one-yard segment was left exposed at the start and finish line** (Cultural Landscape Foundation, n.d.). That strip is the Yard of Bricks, and drivers and teams kiss it after a win.

**Now put that next to course 1 and you have the strongest idea in this section.** On Indiana Avenue, a corridor that held more than 180 businesses in eight blocks in 1916 is represented on the National Register by about three acres and eleven buildings. Here, **3.2 million bricks are represented by one yard of them.** In both cases, preservation preserved **a token**: a fragment kept legible so the whole can be referred to. **A token is not a lie and it is not the thing.** Learning to tell the difference is most of what beat 2 teaches.

## Designation, and the belief this course has to break

The Speedway was **listed on the National Register of Historic Places in 1975** and **designated a National Historic Landmark in 1987** (Cultural Landscape Foundation, n.d.).

**Course 1 taught the rule and this site proves it.** National Register listing is recognition plus review leverage when federal money or a federal permit is involved. **It is not a demolition veto over a private owner, and it is not a freeze.** The Speedway has been continuously rebuilt since its landmark designation: the Cultural Landscape Foundation dates the **Panasonic Pagoda**, by the Indianapolis firm **Browning Day Mullins Dierdorf**, to **1998 to 2000**, more than a decade after the National Historic Landmark designation (Cultural Landscape Foundation, n.d.).

**A National Historic Landmark that keeps rebuilding itself is not a contradiction. It is what the designation actually is.** If you learned in Section 2 of course 1 that federal listing does not stop a private owner, this is the same rule seen from the other side: **the owner here is not trying to demolish anything, and the designation is not stopping them from changing everything.**

**One honest limit on this lesson.** This course has not read the **National Historic Landmark nomination document** for the Speedway. That document would state the boundary of the designated area, the period of significance, and the specific features the designation identifies as contributing. **All three of those are things people assume they know and almost nobody has checked.** The nomination is a public document, it is the best unopened source in this section, and Section 5 tells you where nominations live.

## Sources
- Cultural Landscape Foundation. (n.d.). *Indianapolis Motor Speedway*. https://www.tclf.org/landscapes/indianapolis-motor-speedway
- Encyclopedia of Indianapolis. (n.d.-a). *Indianapolis Motor Speedway*. https://indyencyclopedia.org/indianapolis-motor-speedway/
- Indianapolis Motor Speedway. (n.d.-a). *About the track*. https://www.indianapolismotorspeedway.com/history/about-the-track
- National Park Service. (n.d.). *National Historic Landmarks program*. https://www.nps.gov/subjects/nationalhistoriclandmarks/index.htm`,
      recallContent: [
        {
          prompt: "Why is a racetrack a hard subject for building typology?",
          answer: "Because the primary structure is the surface itself, which is civil engineering: grading, drainage, banking and a running line. The grandstands, towers, garages and gates are secondary equipment arranged around a piece of engineered land.",
        },
        {
          prompt: "What land-use problem does a 2.5-mile closed circuit create, and how did the Speedway answer it?",
          answer: "It encloses an enormous interior that has to be used for something. An eighteen-hole golf course was installed in 1929 within and outside the infield; four holes of Brickyard Crossing sit inside the track today.",
        },
        {
          prompt: "What does a facility with more than 250,000 permanent seats do to the town around it?",
          answer: "It is almost empty most of the year and then hosts the largest single-day gathering in the region, so roads, parking, lodging, policing and local businesses are all sized for the peak. The streets around the track are the physical shape of one day in May.",
        },
        {
          prompt: "What happened to the 3.2 million bricks, and what is the general lesson?",
          answer: "They were overlaid with asphalt in 1937, remain underneath, and a one-yard strip was left exposed at the start and finish line. Preservation preserved a token: a fragment kept legible so the whole can be referred to. Compare the three acres and eleven buildings that stand for Indiana Avenue.",
        },
        {
          prompt: "The Speedway became a National Historic Landmark in 1987 and built the Pagoda from 1998 to 2000. What does that prove?",
          answer: "That a federal designation is recognition plus review leverage, not a freeze and not a demolition veto over a private owner. It is the same rule course 1 taught, seen from the other side.",
        },
      ],
    },
    {
      slug: "tr-built-town",
      title: "6 · The town the track made, and the boundary it kept",
      section: "Section 2 · Built",
      body: `Most large sports facilities sit inside a city. **This one has a municipality of its own around it, and the municipality is younger than the track.** That sequence is the lesson.

**The plat.** **Speedway City was laid out in 1912 by the real estate developer Lemon Trotter** for the Speedway's four founders, **Carl G. Fisher, James A. Allison, Arthur C. Newby and Frank H. Wheeler** (Encyclopedia of Indianapolis, n.d.-e). **A racetrack came first and a town was platted beside it three years later, by the track's own owners, through a developer.** That is a land development, and it is the same kind of act you learned to identify in course 1: a specific party, doing a specific thing, leaving a specific record. **A plat is a recorded document.**

**The industry.** The town was not built for spectators. The Encyclopedia lists manufacturers that located there: **Prest-O-Lite**, the **Electric Steel Company (1913)**, the **Allison Engineering Company (1917)**, **American Art Clay (1919)** and **Esterline Angus (1923)** (Encyclopedia of Indianapolis, n.d.-e). **Two of the Speedway's four founders put their companies in the town they platted.** A racetrack was a proving ground for an industry, and the industry moved in next door.

**The incorporation.** **Residents petitioned for incorporation as the Town of Speedway in 1926.** Population passed **1,400 by 1930**, reached about **5,500 by 1950**, and **nearly tripled between 1950 and 1970** (Encyclopedia of Indianapolis, n.d.-e).

**The government.** Speedway covers about **4.2 square miles**, is governed by an **elected five-member town council**, and runs its own **police, fire, library, water and wastewater** services (Encyclopedia of Indianapolis, n.d.-e).

## The Unigov connection, and why it belongs in a racing course

Course 1, lesson 12, taught the fifth instrument: **redrawing the jurisdiction.** The 1969 Unigov statute consolidated Indianapolis and Marion County effective **January 1, 1970**, and it left several things out, including **incorporated cities and towns over 5,000 people**. Four were named: **Beech Grove, Lawrence, Southport and Speedway** (Wachter, 2014).

**The Encyclopedia's sentence on this is worth reading twice.** Speedway residents "have successfully resisted annexation by Indianapolis, preferring to remain one of the Excluded Cities" (Encyclopedia of Indianapolis, n.d.-e).

**Put the two halves of one instrument side by side.**
- In course 1, a boundary decision moved a city's limits **outward** to take in predominantly white townships, and the Black share of the city's population fell immediately from **27 percent of the old city to 17 percent of the consolidated city** (Wachter, 2014).
- Here, the same statute moved that boundary **around** a town of about 4.2 square miles containing the state's most famous piece of private property, and **left it outside.**

**Both of those are the same tool.** A jurisdiction line decides who votes on what, who taxes what, and which government's plan applies to which ground. **Course 1's learner watched the line move outward. This course's learner is standing on a piece of ground the line went around.** If you want one sentence that ties the Indianapolis cluster together, it is that one.

**And the practical consequence you will use in Section 5.** Because Speedway is a separate municipality, the plan that governs the ground next to the Speedway is **not** the Marion County comprehensive plan you met in course 1, and the body that adopts it is **not** the Metropolitan Development Commission. **It is a different town's council and a different town's plan.** Getting the jurisdiction wrong is the single most common error in local research, and this site is the cleanest example of it in the metro.

## What this lesson does not claim

The Encyclopedia entry describes Speedway as a middle-class town and **does not address the town's racial composition, historically or now** (Encyclopedia of Indianapolis, n.d.-e). **This course therefore says nothing about it.** That is a real gap in a course about admission and exclusion, and it is a gap you can close yourself: **decennial census and American Community Survey tables are published for incorporated places**, Speedway is an incorporated place, and the numbers are free. **Do not guess at a demographic fact when a census table exists.**

## Sources
- Encyclopedia of Indianapolis. (n.d.-e). *Speedway*. https://indyencyclopedia.org/speedway/
- United States Census Bureau. (n.d.). *American Community Survey data*. https://www.census.gov/programs-surveys/acs/data.html
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "When was Speedway platted, by whom, and for whom?",
          answer: "Speedway City was laid out in 1912 by the real estate developer Lemon Trotter for the Speedway's four founders: Carl G. Fisher, James A. Allison, Arthur C. Newby and Frank H. Wheeler. The track came first; the town was platted beside it.",
        },
        {
          prompt: "Name three manufacturers that located in Speedway, and say what that tells you.",
          answer: "Prest-O-Lite, the Electric Steel Company (1913), the Allison Engineering Company (1917), American Art Clay (1919) and Esterline Angus (1923). Two of the four founders put their own companies in the town they platted: the track was a proving ground and the industry moved in next door.",
        },
        {
          prompt: "How is Speedway governed, and how big is it?",
          answer: "About 4.2 square miles, an elected five-member town council, and its own police, fire, library, water and wastewater services. It incorporated in 1926.",
        },
        {
          prompt: "What is Speedway's relationship to Unigov, and why does it matter to this cluster?",
          answer: "It is one of the four excluded cities the 1969 statute left independent, along with Beech Grove, Lawrence and Southport, and its residents have resisted annexation. Course 1 watched that boundary move outward and dilute an electorate; here the same boundary went around a town and left it outside. Same instrument, two directions.",
        },
        {
          prompt: "What practical research consequence follows from Speedway being a separate municipality?",
          answer: "The comprehensive plan and the adopting body for ground in Speedway are the town's, not Marion County's Metropolitan Development Commission. Getting the jurisdiction wrong is the most common error in local research.",
        },
        {
          prompt: "What does this course refuse to say about Speedway, and where would you find out?",
          answer: "Anything about the town's racial composition, because the source used does not address it. Decennial census and American Community Survey tables are published for incorporated places and are free.",
        },
      ],
    },
    {
      slug: "tr-built-fairgrounds",
      title: "7 · The other ground, and what happened to its surface",
      section: "Section 2 · Built",
      body: `Now the second track, read the same way: as ground, with a surface, under an owner, put to a use.

**The ground.** **214 acres** bought in 1891 and opened on **September 19, 1892**, at what is now **1202 East 38th Street**, with 72 buildings, a 6,000-seat grandstand and a mile race track (Encyclopedia of Indianapolis, n.d.-b). **A mile dirt oval was part of the original 1892 plan**, which tells you that racing was a fair attraction from the beginning rather than a later addition.

**The uses, in order.** The Encyclopedia records the mile carrying **auto polo in 1918**, daredevil shows in the **1930s**, midget races, and from **1953** the **Hoosier Hundred**, a 100-mile dirt track race (Encyclopedia of Indianapolis, n.d.-b). Between **1924 and 1936** it carried the Gold and Glory Sweepstakes.

**The dirt is the design, and it is also the risk.** A mile of dirt is cheap to build, cheap to maintain, and it can be laid inside a fairground for a fraction of what a paved superspeedway costs. **It is also loose, it changes through a race as cars cut ruts and throw material, and visibility drops as it dries.** The thirteen-car pileup on the fourth turn of the second lap in 1936 happened on this surface (PBS, n.d.-d). **This course does not claim the surface caused that crash**, because it has not read a crash report and no such causal finding is in its sources. **What it does claim is that a circuit with no money races on the cheapest available ground, and the cheapest available ground carries the most risk.** That is an economic fact about exclusion with a physical expression, and it belongs in beat 2 rather than in beat 3.

## The change that matters most, and it is recent

**In 2019 the mile track was converted.** The Encyclopedia of Indianapolis records that the track was "converted to a harness racing facility" with an **all-weather surface**, and that **the infield was eliminated for additional parking** (Encyclopedia of Indianapolis, n.d.-b). Racing trade coverage from April 2019 reported that the dirt would be replaced with **crushed limestone** for year-round harness training and State Fair parking, and that auto racing would end after the **64th Hoosier Hundred on May 23, 2019** (Racing News, 2019; Track Enterprises, 2019).

**State that plainly and without decoration, because it does not need any.** **The surface that the Gold and Glory Sweepstakes was run on is not there any more.** It is under, or has been replaced by, a limestone training surface, and part of the enclosed ground is parking.

**Three things to resist while you read that sentence.**

**1. Resist calling it a desecration.** A state fair needs parking and a year-round training surface. That is an ordinary operating decision by a public body with an operating budget, taken about a track whose auto racing tenants had been leaving. **It is not the same kind of act as a blight designation, and calling it one would cheapen the word you learned in course 1.**

**2. Resist calling it nothing.** It is a documented, dated change to the physical evidence of a Black sporting institution, and evidence is what beat 4 is made of. **A researcher who wants to stand where Charlie Wiggins crashed can stand on the ground and cannot stand on the surface.** Both halves of that sentence are true, and holding both is the discipline.

**3. Resist assuming somebody weighed the two.** This course does not know whether the Sweepstakes came up when the conversion was decided, because **it has not read the State Fair Commission's minutes.** Those minutes exist. Section 5 tells you who keeps them.

## What commemorates the second track

- **A historical marker at the Indiana State Fairgrounds** records the mile track's racing history, erected by the **Indiana Racing Memorial Association**, a private organisation (Historical Marker Database, n.d.-b).
- **A marker for Charlie Wiggins stands in Evansville**, erected by the same organisation in **2018** (Historical Marker Database, n.d.-a).
- **A public petition addressed to the Indiana Historical Bureau** asks for the Gold and Glory Sweepstakes to be commemorated at the Fairgrounds (Change.org, n.d.). **A petition is a request, not a decision.** This course has not confirmed its outcome, and finding out is a genuinely useful piece of homework.

**Read the sponsors, not just the texts.** In course 1 you learned that a marker records what a community and an agency agreed to say in public in a particular year. **Here, two of the three commemorations were placed by a private racing-history association rather than by the state**, and the third is a citizen request to the state body that approves markers. **Who paid for the sign is part of what the sign says.**

## Sources
- Change.org. (n.d.). *Commemorate the Gold and Glory Sweepstakes at the Indiana State Fairgrounds* [Petition]. https://www.change.org/p/indiana-historical-bureau-commemorate-the-gold-and-glory-sweepstakes-at-the-indiana-state-fairgrounds
- Encyclopedia of Indianapolis. (n.d.-b). *Indiana State Fair and Fairgrounds*. https://indyencyclopedia.org/indiana-state-fair-and-fairgrounds/
- Historical Marker Database. (n.d.-a). *Charlie Wiggins historical marker*. https://www.hmdb.org/m.asp?m=175997
- Historical Marker Database. (n.d.-b). *Indiana State Fairgrounds Mile historical marker*. https://www.hmdb.org/m.asp?m=175593
- Indiana Historical Bureau. (n.d.). *Indiana historical markers*. https://www.in.gov/history/state-historical-markers/
- PBS. (n.d.-d). *For gold and glory: 1936*. https://www.pbs.org/forgoldandglory/history/1936.html
- Racing News. (2019, April 2). *Indiana State Fairgrounds will no longer host dirt races following Hoosier Hundred*. https://racingnews.co/2019/04/02/indiana-state-fairgrounds-will-no-longer-host-dirt-races-following-hoosier-hundred/
- Track Enterprises. (2019). *Final Hoosier Hundred at the Indy Mile to be held May 23*. https://trackenterprises.com/final-hoosier-hundred-at-the-indy-mile-to-be-held-may-23/`,
      recallContent: [
        {
          prompt: "Was the mile track an addition to the fairgrounds, or part of the plan?",
          answer: "Part of the plan. The mile race track opened with the fairgrounds on September 19, 1892, alongside 72 buildings and a 6,000-seat grandstand on 214 acres.",
        },
        {
          prompt: "Why is a dirt mile both the design and the risk?",
          answer: "Dirt is cheap to build and maintain and fits inside a fairground, but it is loose, it changes through a race as cars cut ruts, and visibility drops as it dries. A circuit with no money races on the cheapest available ground, and the cheapest ground carries the most risk.",
        },
        {
          prompt: "What happened to the mile track in 2019?",
          answer: "It was converted to a harness racing facility with an all-weather crushed-limestone surface, auto racing ended after the 64th Hoosier Hundred on May 23, 2019, and the infield was eliminated for additional parking.",
        },
        {
          prompt: "Name the two things to resist when describing that conversion.",
          answer: "Resist calling it a desecration, because it is an ordinary operating decision by a public body and calling it a blight designation would cheapen that word. Resist calling it nothing, because it is a dated change to the physical evidence of a Black sporting institution.",
        },
        {
          prompt: "What does this course not know about the 2019 decision, and why?",
          answer: "Whether the Gold and Glory Sweepstakes was considered when the conversion was decided, because the State Fair Commission's minutes have not been read here. They exist.",
        },
        {
          prompt: "Who placed the two historical markers connected to this story, and why does the sponsor matter?",
          answer: "The Indiana Racing Memorial Association, a private organisation, placed both the Fairgrounds mile marker and the 2018 Charlie Wiggins marker in Evansville. Who paid for the sign is part of what the sign says.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: the rules, the sanctioning body, and how exclusion was
    // written and enforced. THE LOAD-BEARING SECTION. Lesson 10 is the correction lesson.)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "tr-powers-sanctioning-body",
      title: "8 · Instrument one: the sanctioning body",
      section: "Section 3 · Powers",
      body: `**This is the section the whole course exists for.** Course 1 taught you that a building does not disappear, it is removed by somebody with an instrument, and that an instrument is a specific legal power exercised by a specific body under a specific statute, leaving a specific document. **Section 3 of this course teaches the version of that idea that most people never learn, because it operates entirely outside government.**

**A sport does not run itself.** Somebody writes the rulebook, licenses the drivers and the officials, approves the entries, sanctions the event, times it, and certifies the result. That somebody is called a **sanctioning body**, and inside its sport its authority is close to total.

**Now the four differences from a government body, because they are the whole lesson.**

| | A city redevelopment commission | A racing sanctioning body |
|---|---|---|
| **Source of power** | A statute passed by a legislature | A contract you sign to compete, and ownership of the event |
| **Who may attend** | Public meetings, usually required by open-meetings law | Nobody. It is a private association |
| **What is on the record** | Minutes, boundary maps, published findings | Whatever the association chooses to keep |
| **How you contest a decision** | Appeal, judicial review, a public comment period | Its own internal process, if it has one |

**Read the right-hand column again.** **A private association can exclude you without writing anything down.** There is no statute to cite, no minute to request, no hearing to attend, and no boundary map with a legal description. **In course 1 the instruments left documents. That was the whole reason the research worked.** Here, the instrument's defining feature is that it need not leave one, and Section 3 is going to make you deal with that.

## The chain of sanctioning bodies at this track, with dates

**1. The AAA Contest Board.** The Encyclopedia of Indianapolis records that the Contest Board of the American Automobile Association "had been the nation's leading auto-racing sanctioning body **since 1902**," and that it governed the Indianapolis 500-Mile Race as part of its National Championships (Encyclopedia of Indianapolis, n.d.-f). **So for the whole period the Gold and Glory Sweepstakes existed, and for decades either side of it, the body that decided who could compete in the premier American race was a committee of a motor club.**

**2. USAC.** The AAA "abruptly announced it would dissolve its Contest Board at year's end" in 1955, after the Le Mans disaster and the death of driver Bill Vukovich. Indianapolis Motor Speedway president **Anton "Tony" Hulman Jr.**, who had owned the track since November 1945, unveiled a replacement at a private meeting on **August 5, 1955**, announced it publicly five days later, and the **United States Auto Club was established on September 16, 1955**. **USAC sanctioned the Indianapolis 500 beginning in 1956** (Encyclopedia of Indianapolis, n.d.-a, n.d.-f).

**Stop and look at what just happened structurally.** **The owner of the racetrack created the organisation that sanctions the race at his racetrack.** That is not an accusation, it is the documented sequence, and the Encyclopedia states it in a paragraph about an emergency. **Notice how quickly authority over a sport can be reconstituted, and by whom, when the previous holder walks away.**

**3. The Indy Racing League.** USAC's role at the 500 "ended in 1997 when the Indy Racing League took control following its 1996 founding by IMS owner **Tony George**" (Encyclopedia of Indianapolis, n.d.-f). **Same structure, second time: the track's owner founds the sanctioning body.**

**4. Today.** On **January 6, 2020**, **Penske Entertainment Corp.** completed the acquisition of the **Indianapolis Motor Speedway, the NTT IndyCar Series, and IMS Productions** from Hulman and Company (Indianapolis Motor Speedway, 2020; Encyclopedia of Indianapolis, n.d.-a). **One company owns the venue, the series, and the production arm.**

## The transferable rule

**When you want to know who decides admission to anything, ask two questions, in this order.**
1. **Who owns the venue?** A private owner can refuse entry to their own property, and that power needs no rule and generates no record.
2. **Who writes and enforces the rulebook?** Licensing, entry approval, and certification are separate powers from ownership, and historically they have sometimes sat in different hands and sometimes in the same hands.

**At this track the answer to both questions has been the same entity for most of the last seventy years**, and it is a nameable company with a headquarters and a chief executive. **That is not a scandal. It is a fact about where the power sits**, and knowing where power sits is the entire point of beat 3.

**One thing this lesson does not do.** It does not tell you what the AAA Contest Board's rules said about race, because that is lesson 10, and lesson 10 does not go the way you expect.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Indianapolis Motor Speedway*. https://indyencyclopedia.org/indianapolis-motor-speedway/
- Encyclopedia of Indianapolis. (n.d.-f). *United States Auto Club*. https://indyencyclopedia.org/united-states-auto-club/
- Indianapolis Motor Speedway. (2020, January 5). *Penske Corporation completes acquisition of the Indianapolis Motor Speedway, the NTT IndyCar Series and IMS Productions*. https://www.indianapolismotorspeedway.com/news-multimedia/news/2020/01/05/penske-corporation-completes-acquisition-of-the-ims-indycar-and-imsproductions`,
      recallContent: [
        {
          prompt: "Define a sanctioning body and list what it controls.",
          answer: "A private association that writes the rulebook, licenses drivers and officials, approves entries, sanctions and officiates events, and certifies results. Inside its sport its authority is close to total.",
        },
        {
          prompt: "Name the four differences between a sanctioning body and a government body like a redevelopment commission.",
          answer: "Its power comes from a contract and from owning the event rather than from a statute; its meetings are not public; it keeps only what it chooses to keep; and you contest a decision through its own internal process rather than by appeal or judicial review.",
        },
        {
          prompt: "Why does that difference matter to a researcher?",
          answer: "Because a private association can exclude someone without writing anything down. There is no statute to cite, no minute to request and no boundary map. Course 1's instruments all left documents; this one need not.",
        },
        {
          prompt: "Give the chain of sanctioning bodies for the Indianapolis 500 with dates.",
          answer: "The AAA Contest Board, the leading national sanctioning body since 1902; USAC, established September 16, 1955 by IMS president Tony Hulman Jr. after the AAA dissolved its Contest Board, sanctioning the 500 from 1956; the Indy Racing League from 1997, founded 1996 by IMS owner Tony George; and today Penske Entertainment Corp., which acquired the track and the IndyCar Series on January 6, 2020.",
        },
        {
          prompt: "What structural pattern repeats in that chain?",
          answer: "The owner of the racetrack founds or owns the body that sanctions the race at the racetrack. It happened with Hulman in 1955, with Tony George in 1996, and it is the situation today under one owner of venue, series and production arm.",
        },
        {
          prompt: "What two questions should you ask about admission to anything?",
          answer: "Who owns the venue, because a private owner can refuse entry with no rule and no record; and who writes and enforces the rulebook, because licensing and entry approval are separate powers that may or may not sit in the same hands.",
        },
      ],
    },
    {
      slug: "tr-powers-four-gates",
      title: "9 · Instrument two: the gates a driver has to pass",
      section: "Section 3 · Powers",
      body: `To start a race you must pass several separate gates, each held by a different party, each with its own record or lack of one. **Exclusion does not need all of them. It needs one.**

## Gate 1 · The competition licence

**A sanctioning body licenses the people who compete under its rules.** The Encyclopedia of Indianapolis lists licensing among USAC's core functions, alongside rules, sanctioning and safety standards (Encyclopedia of Indianapolis, n.d.-f), and the AAA Contest Board did the same work before it.

**A licence is the cleanest gate there is, because it is issued or it is not, and either way somebody knows.** The documented turning point is late: sources place **Joie Ray's first licence in the late 1940s**, and his first race under AAA sanction on **June 26, 1949, at Salem Speedway** (African Americans in Motorsports, n.d.). **Before that, this course found no Black driver holding a competition licence from the body that sanctioned the Indianapolis 500.**

**Note the shape of that sentence.** "This course found no record of X" is not the same claim as "X did not happen." **It is a claim about a search.** Say which one you are making, every time.

## Gate 2 · Registration and entry approval

Even with a licence, an entry has to be accepted. **This gate has a documented instance and it is the best single piece of evidence in Section 3.**

Paul Mullins, writing on the Indianapolis colour line and citing the ***Indianapolis Recorder***, records that **Charlie Wiggins and Sumner "Red" Oliver attempted to enter a car at Dayton Speedway and were rejected because they lacked AAA registration**, and that officials indicated they could register for dirt track races the following summer (Mullins, 2015).

**Read that carefully, because it is subtle and it is the whole mechanism.** Nobody in that account says a word about race. **The refusal is procedural.** The men lacked a registration; the registration is issued by the body; the body sets the terms; and the outcome is that two Black competitors do not race. **A gate that turns on paperwork you were not able to obtain looks, in the record, exactly like a gate that turns on paperwork you failed to obtain.** That ambiguity is not a bug in the system. It is what the system is for.

## Gate 3 · Membership in the association

A contest board is an organ of a membership organisation. **Whether membership in that organisation was a formal prerequisite to competing, and whether membership rules restricted applicants by race, is a question this course could not answer from its sources.** Do not fill that in from what you assume. **The membership rules of a national motor club in the 1920s are a document, and if somebody finds it, this lesson gets better.**

## Gate 4 · The venue's own gate

**The last gate is the simplest one, and it needs no association at all.** A racetrack is private property. **A private owner may refuse a private person entry**, and no rule, minute or explanation is required.

The Encyclopedia of Indianapolis states it as a fact about people rather than a fact about rules: "**Indianapolis Motor Speedway officials** did not allow African Americans to participate in the Indianapolis 500-Mile Race," and, in the Wiggins entry, that officials "did not allow African American drivers and mechanics" (Encyclopedia of Indianapolis, n.d.-c, n.d.-d). The Speedway's own website in 2021 put the same period this way: "1920s America was racially segregated, and the Indy 500, like all major league sports during the era, was whites only" (Indianapolis Motor Speedway, 2021).

**Both sources describe an outcome and an actor. Neither describes an instrument.** That is a finding about the sources, and lesson 10 takes it seriously.

## Gate 5 · Money, which never closed

The four gates above are permission gates. **The fifth is capital, and it applies to everyone.** You need a car, an engine programme, a crew, entry fees, transport, insurance, and something to sell a sponsor. **Charlie Wiggins built his car, the Wiggins Special, out of parts, in the shop where he worked** (Encyclopedia of Indianapolis, n.d.-d), and the field he raced in used hand-me-down machinery. **Sixty years later, Willy T. Ribbs qualified for the 1991 race on his last attempt after blowing engines on a tight budget** (Motorsport Magazine, n.d.), and **George Mack made the 2002 field on his final Bump Day run** (RACER, 2021).

**Three drivers, three eras, three finishes decided partly by money.** Section 3 will not tell you that money is the same thing as a colour bar, because it is not, and pretending otherwise would let a real and separate barrier hide behind a metaphor. **What it will tell you is that when a permission gate closes, the capital gate is still there behind it**, and a course that only counts the first one will declare victory too early.

## The research move

**When you want to know why somebody was not admitted, do not start with the outcome. Enumerate the gates, name the holder of each, and ask what record each one generates.** For this sport the answer is: a licence register, an entry list, a membership roll, and nothing at all. **Three of those four are documents somebody keeps.** That is your search.

## Sources
- African Americans in Motorsports. (n.d.). *Joie Ray*. https://aaim1.com/african-american-racing-history-joie-ray
- Encyclopedia of Indianapolis. (n.d.-c). *Gold and Glory Sweepstakes*. https://indyencyclopedia.org/gold-and-glory-sweepstakes/
- Encyclopedia of Indianapolis. (n.d.-d). *Charles Edwin "Charlie" Wiggins*. https://indyencyclopedia.org/charles-edwin-charlie-wiggins/
- Encyclopedia of Indianapolis. (n.d.-f). *United States Auto Club*. https://indyencyclopedia.org/united-states-auto-club/
- Indianapolis Motor Speedway. (2021, July 13). *Black racing legend Wiggins drives to big screen with new movie "Eraced"*. https://www.indianapolismotorspeedway.com/news-multimedia/news/2021/07/13/black-racing-legend-wiggins-drives-to-big-screen-with-new-movie-eraced
- Motorsport Magazine. (n.d.). *Willy T Ribbs on becoming the first black driver in Indy 500*. https://www.motorsportmagazine.com/articles/us-scene/indycar/willy-t-ribbs-on-becoming-the-first-black-driver-in-indy-500-the-pressure-was-unbelievable/
- Mullins, P. R. (2015, May 16). *Racing along the color line*. Archaeology and Material Culture. https://paulmullins.wordpress.com/2015/05/16/racing-along-the-color-line/
- RACER. (2021, February 25). *Retro: Mack's dizzyingly unlikely Indy 500 run*. https://racer.com/2021/02/25/retro-macks-dizzyingly-unlikely-indy-500-run/`,
      recallContent: [
        {
          prompt: "Name the five gates a driver has to pass, and who holds each.",
          answer: "The competition licence and registration or entry approval, both held by the sanctioning body; membership in the association; the venue's own gate, held by the private owner; and capital, which is held by nobody and closes on everyone.",
        },
        {
          prompt: "What is the documented entry-approval instance in this lesson?",
          answer: "Charlie Wiggins and Sumner 'Red' Oliver tried to enter a car at Dayton Speedway and were rejected for lacking AAA registration, and were told they could register for dirt track races the following summer, per the Indianapolis Recorder as cited by Paul Mullins.",
        },
        {
          prompt: "Why is that procedural refusal the key to the whole mechanism?",
          answer: "Because nobody in the account mentions race. A gate that turns on paperwork you were not able to obtain looks in the record exactly like a gate that turns on paperwork you failed to obtain. The ambiguity is what the system is for.",
        },
        {
          prompt: "What is the difference between 'this course found no record of X' and 'X did not happen'?",
          answer: "The first is a claim about a search; the second is a claim about the world. Say which one you are making, every time.",
        },
        {
          prompt: "What does the course refuse to say about association membership?",
          answer: "Whether membership was a formal prerequisite to competing, and whether membership rules restricted applicants by race. The sources used do not answer it, and the membership rules of a national motor club are a document somebody could find.",
        },
        {
          prompt: "Why does the course insist on separating the capital gate from the colour bar?",
          answer: "Because they are different barriers, and letting one hide behind the other lets a real barrier escape measurement. When a permission gate opens, the capital gate is still behind it, and a course that counts only the first declares victory too early.",
        },
      ],
    },
    {
      slug: "tr-powers-the-written-rule",
      title: "10 · Testing the claim: was there a written rule?",
      section: "Section 3 · Powers",
      body: `**Here is the claim this course was commissioned to teach.** It came from the plan for this course cluster, and it is the version most people carry: **Black drivers were barred from the premier race by the sanctioning body's policy, and a separate championship was run in response.**

**Course 1 ended by testing an inherited argument against a chronology and reporting that half of it failed.** This lesson does the same job with a different test. **The test here is documentary rather than chronological: does the document the claim depends on exist, and has anyone in this course's source set read it?**

## The claim, taken apart into checkable pieces

| Piece of the claim | Verdict | On what evidence |
|---|---|---|
| An alternative championship existed | **Holds** | The Colored Speedway Association, founded 1924 by seven named men; the Gold and Glory Sweepstakes, first run 2 August 1924, last run 20 September 1936 |
| It ran at the Indiana State Fairgrounds mile | **Holds, with a correction** | The 1931 running was at Walnut Gardens Speedway, Mooresville, at half distance |
| Named drivers were involved | **Holds** | Wiggins, Hannon, Simmons, Carson, Oliver, Wallace and others, with dated results |
| Black drivers did not race the Indianapolis 500 | **Holds** | No Black starter until Willy T. Ribbs in 1991, eighty years and seventy-five runnings after the first race |
| The Speedway excluded them | **Holds** | Stated by the Encyclopedia of Indianapolis and by the Speedway's own website |
| **A sanctioning body's written policy did it** | **NOT VERIFIED** | See below |

## What this course looked for, and did not find

**It looked for a published AAA Contest Board rule barring Black drivers**: a rulebook clause, a minuted resolution, a bulletin, a licence application with a race question on it. **It did not find one in any source it read.**

**And it found something stronger about a weaker claim.** Paul Mullins, writing on the Indianapolis colour line, quotes the ***Indianapolis Recorder*** of **October 1947** reporting that AAA officials stated **"there has never before been anytime that the A.A.A. has ever barred any contestant by reason of race, creed or any other cause."** Mullins reads that statement as exposing what the paper called a "gentleman's agreement" against Black participation, rather than a formal code (Mullins, 2015).

**Now handle that quotation properly, because how you handle it is the lesson.**

1. **It is a statement by an interested party.** The AAA is describing its own conduct, in public, in 1947, to a Black newspaper that was asking pointed questions. **A denial from the accused is evidence about what the accused was willing to say, not proof of what happened.**
2. **It is also not nothing.** If the association had a published rule, that answer would have been an obvious lie easily rebutted by producing the rulebook. **The fact that officials chose "there was never a rule" as their defence is itself weak evidence that there was never a rule.**
3. **And both of those can be true while the exclusion was total.** Look back at lesson 9. **Four separate gates could each produce a refusal without anyone writing "no Black drivers" anywhere.**

## The verdict, stated plainly

**The exclusion is established. The written policy is not.** This course therefore says the following, and no more:

- **Black drivers did not start the Indianapolis 500 for eighty years, and the Speedway and the Encyclopedia of Indianapolis both attribute that to exclusion by Speedway officials.**
- **The mechanism appears to have run through licensing, registration, entry approval and private admission rather than through a published rule, and the one direct statement in the record from the sanctioning body denies that a rule ever existed.**
- **Whether a written policy existed somewhere this course did not look remains open.**

**That is a weaker claim than the one this course started with, and it is a better one**, for the same reason course 1's weakened Unigov claim was better: **it is checkable, and the strong version is not.**

## Why the weaker version teaches more

**A written rule is the easiest kind of discrimination to attack.** You can print it, quote it, sue over it, and repeal it, and the day it is repealed you can measure whether anything changed.

**An unwritten one is the hardest.** There is nothing to print, nothing to repeal, no defendant, and no date. **Every individual refusal has an innocent procedural explanation, and the pattern only appears when you count outcomes across decades.** That is exactly why the eighty-year number in lesson 3 does more work than any quotation could: **when the mechanism leaves no document, the outcome is the evidence.**

**And notice that you already met this shape in course 1.** A blight designation is a legal conclusion reached against criteria that measure the effects of earlier policy. Here, a procedural refusal for want of a registration is a decision reached against a requirement the same body controls. **In both cases, the paperwork is impeccable and the result is the point.**

## One more weakness, and it is about this course's sources

**Three of the strongest sources in Sections 1 and 3 lead back to one scholar.** The Encyclopedia of Indianapolis entries on the Gold and Glory Sweepstakes and on Charlie Wiggins are both credited to **Todd Gould**, who also wrote the book *For Gold and Glory* (Indiana University Press, 2002) and the documentary of the same name whose companion site supplies this course's race results. **That is an authority. It is also a single point of failure.** Where the Encyclopedia and the PBS site disagree, as they do on the number of runnings, **you are not watching two independent sources disagree.** Say so, as this course just did.

## What would settle the open question

**None of these has been read into this course. All of them exist somewhere.**
- **AAA Contest Board rulebooks, bulletins and minutes** for the 1910s through the 1950s.
- **Licence registers and entry lists** for the Indianapolis 500 in that period, including rejected entries.
- **The full runs of the *Indianapolis Recorder* and the *Chicago Defender***, which covered both tracks and asked the questions nobody else asked.
- **USAC's founding bylaws of 1955**, which would show what the successor body wrote down at the moment it was free to write anything.

**If you want to make an original contribution to this story rather than repeat it, that is the list.**

## Sources
- Encyclopedia of Indianapolis. (n.d.-c). *Gold and Glory Sweepstakes*. https://indyencyclopedia.org/gold-and-glory-sweepstakes/
- Encyclopedia of Indianapolis. (n.d.-d). *Charles Edwin "Charlie" Wiggins*. https://indyencyclopedia.org/charles-edwin-charlie-wiggins/
- Gould, T. (2002). *For gold and glory: Charlie Wiggins and the African-American racing car circuit*. Indiana University Press.
- Indianapolis Motor Speedway. (2021, July 13). *Black racing legend Wiggins drives to big screen with new movie "Eraced"*. https://www.indianapolismotorspeedway.com/news-multimedia/news/2021/07/13/black-racing-legend-wiggins-drives-to-big-screen-with-new-movie-eraced
- Mullins, P. R. (2015, May 16). *Racing along the color line*. Archaeology and Material Culture. https://paulmullins.wordpress.com/2015/05/16/racing-along-the-color-line/
- PBS. (n.d.-b). *For gold and glory: History*. https://www.pbs.org/forgoldandglory/history/`,
      recallContent: [
        {
          prompt: "Which piece of the inherited claim failed verification, and which pieces held?",
          answer: "The sanctioning body's written policy is NOT VERIFIED. The alternative championship, its drivers, its venue with a correction for 1931, the absence of Black starters until 1991, and exclusion by Speedway officials all hold.",
        },
        {
          prompt: "What did the AAA say in 1947, and where is it recorded?",
          answer: "AAA officials said there had never been a time when the association barred any contestant by reason of race, creed or any other cause, as reported by the Indianapolis Recorder in October 1947 and quoted by Paul Mullins, who reads it as exposing a gentleman's agreement rather than a formal code.",
        },
        {
          prompt: "Give the three ways to handle that quotation correctly.",
          answer: "It is a denial from an interested party and so is evidence about what they were willing to say; choosing 'there was never a rule' as a defence is itself weak evidence that there was no rule to produce; and both can be true while the exclusion was total, because four separate gates can each refuse without anyone writing it down.",
        },
        {
          prompt: "State the three-sentence verdict this course adopts.",
          answer: "Black drivers did not start the race for eighty years, and the Speedway and the Encyclopedia both attribute that to exclusion by Speedway officials. The mechanism appears to have run through licensing, registration, entry approval and private admission rather than a published rule, and the one direct statement in the record denies a rule existed. Whether a written policy existed somewhere unexamined remains open.",
        },
        {
          prompt: "Why does an unwritten exclusion teach more than a written one?",
          answer: "Because a written rule can be printed, quoted, repealed and measured, while an unwritten one has no document, no date and no defendant. Every individual refusal has an innocent procedural explanation, and the pattern only appears when you count outcomes across decades. When the mechanism leaves no document, the outcome is the evidence.",
        },
        {
          prompt: "What is the weakness in this course's own sources?",
          answer: "Three of the strongest sources lead back to one scholar, Todd Gould, who wrote both Encyclopedia entries, the book and the documentary. Where the Encyclopedia and the PBS site disagree, that is not two independent sources disagreeing.",
        },
      ],
    },
    {
      slug: "tr-powers-parallel-institution",
      title: "11 · Instrument three: building a parallel institution",
      section: "Section 3 · Powers",
      body: `Exclusion is one instrument. **The response to it is another**, and it is the one this course wants you to be able to see, because it is routinely described as a consolation and it is nothing of the kind.

**Course 1 taught you this move already.** When the Indianapolis Redevelopment Commission cleared Pat Ward's Bottom, the Flanner House agency answered with a self-help home ownership programme: roughly 300 dollars down and about 1,200 hours of labour to earn equity in a house. **A community answering a taking by building an institution is a documented pattern, not a sentiment**, and the Colored Speedway Association is the same pattern applied to a sport.

## What it costs to build a racing championship from nothing

Work down this list and notice that **every line is a real acquisition somebody had to make.**

| What you need | What they did | Source |
|---|---|---|
| **An organisation** | Founded the Colored Speedway Association in 1924, with seven named principals | Encyclopedia of Indianapolis, n.d.-c |
| **A venue you do not own** | Rented the one-mile dirt track at the Indiana State Fairgrounds | Encyclopedia of Indianapolis, n.d.-c |
| **A fallback venue** | In 1931, Walnut Gardens Speedway in Mooresville, offered by founder Harry Earl for one dollar | PBS, n.d.-c |
| **A date** | An annual summer fixture, at times on the July 4 holiday | PBS, n.d.-c |
| **A field** | 27 entrants in the first race, drawn from Indianapolis, Chicago and St. Louis; later fields drew from an eight-state region | PBS, n.d.-a, n.d.-c |
| **Cars** | Fronty Fords, Duesenbergs, hand-built specials, and Wiggins's own car built at his shop | PBS, n.d.-a; Encyclopedia of Indianapolis, n.d.-d |
| **A name and an audience** | Named by a *Chicago Defender* sportswriter, Frank A. "Fay" Young; a reported crowd of 12,000 at the first race | Encyclopedia of Indianapolis, n.d.-c; Sheldon, 2021 |
| **Medical provision** | The 1936 race was cut in half partly to let crews reach injured drivers | PBS, n.d.-d |

**That is a working sports promotion.** Governance, a venue, a calendar, an entry list, machinery, publicity and medical cover. **The people who did it are named, and naming them is the point of this lesson.**

## What a parallel institution can and cannot match

**It can match the event.** A 100-mile championship with a field, a purse, a national name and a crowd is a championship.

**It cannot match the capital.** Put the two tracks side by side one more time, using only numbers from Section 2:

| | Indianapolis Motor Speedway | Indiana State Fairgrounds mile |
|---|---|---|
| Surface | 3.2 million paving bricks laid in 1909 | Dirt |
| Length | 2.5 miles | 1 mile |
| Seating | more than 250,000 permanent seats today | a 6,000-seat grandstand in 1892 |
| Ownership | Owned by the people who ran the race | Rented from a state fair |

**That is the honest shape of "separate."** Not equal facilities under different management, but **a purpose-built industrial plant on one side and a rented agricultural exhibition ground on the other.** And the difference is not a matter of ambition or competence, because the Colored Speedway Association's organisers demonstrably had both. **It is a matter of who could raise capital in 1924**, which is the subject of the redlining and credit material in course 1.

## Why it ended, and how to say so

The Encyclopedia attributes the end of the Sweepstakes to **Depression finances combined with the 1936 accident** (Encyclopedia of Indianapolis, n.d.-c). **Both halves matter, and neither is a moral.**

**An enterprise running on rented ground, second-hand machinery and gate receipts has no reserve.** One catastrophic race, in the middle of the worst economic contraction in American history, is enough. **The 500-mile race also missed years, in 1917 and 1918 and again from 1942 to 1945, and it came back, because it had a plant, an owner and a balance sheet.** The difference in survival is a difference in capital structure, and it is measurable.

## The rule to carry out of Section 3

**When you find a parallel institution in any field, read it as evidence about the main institution.** A separate league, a separate hospital, a separate bank, a separate school, a separate travel guide: **each one is a functioning organisation, built by named people at real cost, and each one exists because a door was held shut.** The Green Book itself, in the prerequisite course, is the purest example: **a publishing business whose entire product was a workaround.**

**And credit the builders.** Seven men incorporated a racing association in 1924. A mechanic built a car in the shop where he worked and won with it four times. A national newspaper named the race and carried it to eight states. **None of that is consolation. All of it is construction**, and a course that files it under loss has misread its own evidence.

## Sources
- Encyclopedia of Indianapolis. (n.d.-c). *Gold and Glory Sweepstakes*. https://indyencyclopedia.org/gold-and-glory-sweepstakes/
- Encyclopedia of Indianapolis. (n.d.-d). *Charles Edwin "Charlie" Wiggins*. https://indyencyclopedia.org/charles-edwin-charlie-wiggins/
- Indianapolis Motor Speedway. (n.d.-a). *About the track*. https://www.indianapolismotorspeedway.com/history/about-the-track
- PBS. (n.d.-a). *For gold and glory: 1924*. https://www.pbs.org/forgoldandglory/history/1924.html
- PBS. (n.d.-c). *For gold and glory: 1931*. https://www.pbs.org/forgoldandglory/history/1931.html
- PBS. (n.d.-d). *For gold and glory: 1936*. https://www.pbs.org/forgoldandglory/history/1936.html
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.
- Sheldon, A. (2021, February 12). *Charlie Wiggins and the Gold and Glory Sweepstakes*. AAA Northeast. https://magazine.northeast.aaa.com/daily/life/cars-trucks/charlie-wiggins-and-the-gold-and-glory-sweepstakes/`,
      recallContent: [
        {
          prompt: "Which course 1 example is the same pattern as the Colored Speedway Association?",
          answer: "The Flanner House self-help home ownership programme, which answered the clearance of Pat Ward's Bottom with about 300 dollars down and roughly 1,200 hours of labour toward equity. A community answering a taking by building an institution is a documented pattern.",
        },
        {
          prompt: "List five things the Colored Speedway Association had to acquire to run a championship.",
          answer: "An organisation with named principals, a venue it did not own, a fallback venue, a fixed date, a field of entrants, cars, a name and audience through the Black press, and medical provision.",
        },
        {
          prompt: "What can a parallel institution match, and what can it not?",
          answer: "It can match the event: a 100-mile championship with a field, a purse, a national name and a crowd. It cannot match the capital: a purpose-built plant with 3.2 million bricks and a quarter of a million seats against a rented dirt mile with a 6,000-seat grandstand.",
        },
        {
          prompt: "Why did the Sweepstakes end and the Indianapolis 500 survive its own interruptions?",
          answer: "The Sweepstakes ran on rented ground, second-hand machinery and gate receipts with no reserve, so Depression finances plus the 1936 crash finished it. The 500 missed 1917-1918 and 1942-1945 and returned because it had a plant, an owner and a balance sheet. The difference in survival is a difference in capital structure.",
        },
        {
          prompt: "State the rule about parallel institutions.",
          answer: "Read a parallel institution as evidence about the main one. A separate league, hospital, bank, school or travel guide is a functioning organisation built by named people at real cost, and it exists because a door was held shut. Credit the construction rather than filing it under loss.",
        },
      ],
    },
    {
      slug: "tr-powers-what-opened-the-gate",
      title: "12 · What actually opened the gate, and what replaced it",
      section: "Section 3 · Powers",
      body: `The last lesson of beat 3 asks the question that beat 3 always ends on: **what changed, when, and how would you know?**

## The chronology of admission

| Date | Event |
|---|---|
| 1902 onward | The AAA Contest Board is the leading national sanctioning body |
| 1911 | First 500-mile race at the Indianapolis Motor Speedway |
| 1924 to 1936 | The Colored Speedway Association runs the Gold and Glory Sweepstakes |
| April 6, 1947 | Joie Ray races alongside white drivers in a sanctioned sprint car race at Mitchell, Indiana |
| October 1947 | AAA officials tell the *Indianapolis Recorder* the association never barred anyone by race or creed |
| June 26, 1949 | Ray's first AAA-sanctioned race, at Salem Speedway |
| Sept 16, 1955 | The AAA dissolves its Contest Board; Tony Hulman establishes USAC |
| 1956 | USAC sanctions the Indianapolis 500 for the first time |
| 1996 to 1997 | Tony George founds the Indy Racing League, which takes over sanctioning the race |
| **May 19, 1991** | **Willy T. Ribbs qualifies for the Indianapolis 500** |
| 2002 | George Mack qualifies and finishes 17th |
| January 6, 2020 | Penske Entertainment acquires the track and the series |

**Now read the two rows that matter and notice the gap.**

**Licensing and sanctioned competition opened in the late 1940s. A Black driver started the Indianapolis 500 in 1991.** That is roughly **forty-two years** between the permission gate opening and the outcome changing at this track.

**A rule repealed is not a barrier removed.** If you take one sentence out of Section 3, take that one, and notice how much work it does outside racing. **The interval between a formal opening and a measurable change is itself a measurement, and it is usually the most interesting number in the story.**

## What this course can and cannot say about that gap

**It cannot name a cause.** Forty-two years is a gap, not a mechanism. This course has not read team budgets, sponsorship contracts, junior series entry lists, or licensing records, and **it will not manufacture an explanation out of plausibility.**

**It can name the candidates**, each of which is checkable by somebody willing to do the work:
- **Capital and sponsorship.** A ride costs money that has to come from somewhere.
- **The pipeline.** Drivers arrive at this level through years of junior racing that has its own costs and its own gates.
- **Team access.** Somebody has to hire you, and hiring is private.
- **Residual informal exclusion**, which by definition leaves the same absence of documents that lesson 10 described.

**All four could be operating at once**, and separating them requires data this course does not have. **Naming your candidates and admitting you cannot rank them is a legitimate finding.** Pretending to rank them is not.

## How you would measure it today

**The great advantage of a sport is that it counts everything.** Starters, entries, qualifying attempts, finishing positions and prize money are all published, every year, by the sanctioning body itself.

**So the civic question this course opened with is unusually measurable.** "Who is admitted to a sport" has a number attached, published annually, for over a century. **Compare that with course 1**, where the question "how many buildings did the Avenue lose" has no answer at all because no survey was ever run. **When a field publishes its own counts, use them, and hold it to them.**

**One present-day fact, offered as a fact and not as an evaluation.** In 2021 the Speedway's own website quoted **Jimmie McMillian, chief diversity officer of Penske Entertainment**, on Charlie Wiggins (Indianapolis Motor Speedway, 2021). **That an organisation has an officer with that title is a documented fact. Whether the outcomes have changed is a separate, countable question**, and the count is the only thing that can answer it. **Do not accept a job title as a result, and do not dismiss one either. Count.**

## The three method lessons of Section 3

1. **Enumerate the gates before you assign a cause.** Licence, entry, membership, venue, capital. Each has a holder and a record, or a documented lack of one.
2. **Distinguish an outcome from an instrument.** Eighty years without a Black starter is an outcome. A rule is an instrument. **This course established the first and could not establish the second, and said so.**
3. **Measure the interval between the opening and the change.** It is where the real barrier usually lives.

## Sources
- African Americans in Motorsports. (n.d.). *Joie Ray*. https://aaim1.com/african-american-racing-history-joie-ray
- Encyclopedia of Indianapolis. (n.d.-f). *United States Auto Club*. https://indyencyclopedia.org/united-states-auto-club/
- Indianapolis Motor Speedway. (2020, January 5). *Penske Corporation completes acquisition of the Indianapolis Motor Speedway, the NTT IndyCar Series and IMS Productions*. https://www.indianapolismotorspeedway.com/news-multimedia/news/2020/01/05/penske-corporation-completes-acquisition-of-the-ims-indycar-and-imsproductions
- Indianapolis Motor Speedway. (2021, July 13). *Black racing legend Wiggins drives to big screen with new movie "Eraced"*. https://www.indianapolismotorspeedway.com/news-multimedia/news/2021/07/13/black-racing-legend-wiggins-drives-to-big-screen-with-new-movie-eraced
- Motorsport Magazine. (n.d.). *Willy T Ribbs on becoming the first black driver in Indy 500*. https://www.motorsportmagazine.com/articles/us-scene/indycar/willy-t-ribbs-on-becoming-the-first-black-driver-in-indy-500-the-pressure-was-unbelievable/
- Mullins, P. R. (2015, May 16). *Racing along the color line*. Archaeology and Material Culture. https://paulmullins.wordpress.com/2015/05/16/racing-along-the-color-line/`,
      recallContent: [
        {
          prompt: "How long was the gap between the permission gate opening and a Black driver starting the Indianapolis 500?",
          answer: "About forty-two years. Licensing and sanctioned competition opened in the late 1940s; Willy T. Ribbs qualified on May 19, 1991.",
        },
        {
          prompt: "State the sentence that generalises that gap.",
          answer: "A rule repealed is not a barrier removed. The interval between a formal opening and a measurable change is itself a measurement, and it is usually the most interesting number in the story.",
        },
        {
          prompt: "Name the four candidate explanations for the gap, and what the course does with them.",
          answer: "Capital and sponsorship, the junior racing pipeline, private team hiring, and residual informal exclusion. All four could operate at once. The course names them, admits it cannot rank them, and refuses to manufacture an explanation from plausibility.",
        },
        {
          prompt: "Why is this course's civic question unusually measurable compared with course 1's?",
          answer: "Because a sport counts everything and publishes it: starters, entries, qualifying attempts, finishes and prize money, every year, by the sanctioning body itself. Course 1's question of how many buildings the Avenue lost has no answer because no survey was run.",
        },
        {
          prompt: "How should you treat the existence of a chief diversity officer at Penske Entertainment?",
          answer: "As a documented fact about an organisation, not as a result. Whether outcomes changed is a separate countable question. Do not accept a job title as a result and do not dismiss one either. Count.",
        },
      ],
    },
    {
      slug: "tr-quiz-powers",
      title: "13 · Quiz: who decides admission",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a sanctioning body, and what does it control?",
            options: [
              "A government agency that regulates motorsport safety",
              "A spectator club that votes on race results",
              "A private association that writes the rulebook, licenses competitors and officials, approves entries, sanctions events and certifies results",
              "The company that builds the cars",
            ],
            correctIndex: 2,
            explanation: "Inside its sport its authority is close to total, and it derives from contract and event ownership rather than from a statute.",
            sourceLessonSlug: "tr-powers-sanctioning-body",
          },
          {
            prompt: "Why is a private sanctioning body harder to research than a city redevelopment commission?",
            options: [
              "Its meetings are not public, it keeps only what it chooses to keep, and there is no statute, minute or boundary map to request",
              "Its records are classified by the federal government",
              "It has no records at all, ever",
              "Its decisions are always made by a single person",
            ],
            correctIndex: 0,
            explanation: "Course 1's instruments all left documents, which is why that research worked. This instrument's defining feature is that it need not leave one.",
            sourceLessonSlug: "tr-powers-sanctioning-body",
          },
          {
            prompt: "Put the sanctioning bodies of the Indianapolis 500 in order.",
            options: [
              "USAC, then the AAA Contest Board, then Penske Entertainment",
              "The Indy Racing League from 1911, then USAC, then the AAA",
              "One body has sanctioned it continuously since 1911",
              "The AAA Contest Board, then USAC from 1956, then the Indy Racing League from 1997, then IndyCar under Penske Entertainment from 2020",
            ],
            correctIndex: 3,
            explanation: "The AAA had been the leading national body since 1902; USAC was established September 16, 1955 after the AAA dissolved its Contest Board.",
            sourceLessonSlug: "tr-powers-sanctioning-body",
          },
          {
            prompt: "What structural pattern repeats in the chain of sanctioning bodies at this track?",
            options: [
              "The state legislature appoints the sanctioning body",
              "The owner of the racetrack founds or owns the body that sanctions the race there",
              "The drivers elect the sanctioning body",
              "Each body was created by a court order",
            ],
            correctIndex: 1,
            explanation: "Tony Hulman established USAC in 1955, Tony George founded the Indy Racing League in 1996, and Penske Entertainment has owned both track and series since January 6, 2020.",
            sourceLessonSlug: "tr-powers-sanctioning-body",
          },
          {
            prompt: "Name the five gates a driver must pass, in this course's framing.",
            options: [
              "Qualifying speed, car weight, engine size, fuel type, and tyre choice",
              "The competition licence, registration and entry approval, association membership, the venue's own gate, and capital",
              "A driving test, a medical, an interview, a fee, and a sponsor",
              "The state, the county, the town, the track, and the series",
            ],
            correctIndex: 1,
            explanation: "Exclusion does not need all of them. It needs one, and each has a different holder and a different record or lack of one.",
            sourceLessonSlug: "tr-powers-four-gates",
          },
          {
            prompt: "What happened when Charlie Wiggins and Sumner 'Red' Oliver tried to enter a car at Dayton Speedway?",
            options: [
              "They were admitted and finished second",
              "The race was cancelled",
              "They were rejected because they lacked AAA registration, and were told they could register for dirt track races the following summer",
              "They were rejected by a written rule quoted to them at the gate",
            ],
            correctIndex: 2,
            explanation: "The refusal is procedural and mentions no race at all, which is exactly what makes it hard to attack and easy to run. Reported by the Indianapolis Recorder as cited by Mullins.",
            sourceLessonSlug: "tr-powers-four-gates",
          },
          {
            prompt: "Which claim did this course fail to verify?",
            options: [
              "That the Colored Speedway Association existed",
              "That no Black driver started the Indianapolis 500 before 1991",
              "That Speedway officials excluded African Americans",
              "That a sanctioning body's written policy barred Black drivers",
            ],
            correctIndex: 3,
            explanation: "The course looked for a rulebook clause, a minuted resolution, a bulletin or a licence application with a race question and found none in any source it read.",
            sourceLessonSlug: "tr-powers-the-written-rule",
          },
          {
            prompt: "In October 1947 the Indianapolis Recorder reported AAA officials saying what?",
            options: [
              "That the rule barring Black drivers had just been repealed",
              "That the association had never barred any contestant by reason of race, creed or any other cause",
              "That Black drivers had to qualify twice",
              "That the decision belonged to the Speedway alone",
            ],
            correctIndex: 1,
            explanation: "Mullins reads that statement as exposing a gentleman's agreement rather than a formal code. It is a denial from an interested party, and it is also weak evidence that there was no rulebook to produce.",
            sourceLessonSlug: "tr-powers-the-written-rule",
          },
          {
            prompt: "What is the difference between an outcome and an instrument, in this course's terms?",
            options: [
              "There is none; they are two words for the same thing",
              "An instrument is anything a historian believes happened",
              "An outcome is what can be counted, such as eighty years without a Black starter; an instrument is the specific power that produced it, such as a rule",
              "An outcome is always more reliable than a document",
            ],
            correctIndex: 2,
            explanation: "This course established the outcome and could not establish the instrument, and says so rather than papering over the gap.",
            sourceLessonSlug: "tr-powers-the-written-rule",
          },
          {
            prompt: "Why does an unwritten exclusion teach more than a written one?",
            options: [
              "A written rule can be printed, quoted, repealed and measured, while an unwritten one leaves no document, no date and no defendant, and every refusal has an innocent procedural explanation",
              "Unwritten rules are always fairer",
              "Written rules are usually forgeries",
              "Because historians prefer oral history",
            ],
            correctIndex: 0,
            explanation: "The pattern appears only when you count outcomes across decades, which is why the eighty-year number does more work than any quotation could.",
            sourceLessonSlug: "tr-powers-the-written-rule",
          },
          {
            prompt: "What weakness does this course identify in its own sources?",
            options: [
              "All of its sources are anonymous",
              "It relies only on newspapers",
              "Three of its strongest sources trace back to one scholar, Todd Gould, who wrote both Encyclopedia entries, the book and the documentary",
              "None of its sources are published",
            ],
            correctIndex: 2,
            explanation: "Where the Encyclopedia and the PBS companion site disagree on the number of runnings, that is not two independent sources disagreeing.",
            sourceLessonSlug: "tr-powers-the-written-rule",
          },
          {
            prompt: "Which course 1 example is the same pattern as founding the Colored Speedway Association?",
            options: [
              "The 1956 blight declaration of 38 acres",
              "The Unigov population threshold",
              "Hoosier Realty Corporation's land purchases",
              "The Flanner House self-help home ownership programme",
            ],
            correctIndex: 3,
            explanation: "A community answering a taking by building an institution is a documented pattern rather than a sentiment.",
            sourceLessonSlug: "tr-powers-parallel-institution",
          },
          {
            prompt: "What can a parallel institution match, and what can it not?",
            options: [
              "It can match the capital but not the talent",
              "It can match the event, but not the capital: a rented dirt mile with a 6,000-seat grandstand against a purpose-built plant with 3.2 million bricks and a quarter of a million seats",
              "It can match everything given enough time",
              "It can match neither, which is why it is not worth studying",
            ],
            correctIndex: 1,
            explanation: "The difference is not ambition or competence, both of which the organisers demonstrably had. It is who could raise capital in 1924.",
            sourceLessonSlug: "tr-powers-parallel-institution",
          },
          {
            prompt: "How long was the gap between the permission gate opening and a Black driver starting the Indianapolis 500, and what is the lesson?",
            options: [
              "About forty-two years, and the lesson is that a rule repealed is not a barrier removed",
              "Two years, and the lesson is that reform works quickly",
              "There was no gap",
              "About a century, and the lesson is that nothing ever changes",
            ],
            correctIndex: 0,
            explanation: "Licensing and sanctioned competition opened in the late 1940s; Ribbs qualified on May 19, 1991. The interval is itself a measurement.",
            sourceLessonSlug: "tr-powers-what-opened-the-gate",
          },
          {
            prompt: "Why is this course's civic question unusually measurable?",
            options: [
              "Because the state keeps a register of every driver",
              "Because the census counts race car drivers",
              "Because a sport counts and publishes everything: starters, entries, qualifying attempts, finishes and prize money, every year, by the sanctioning body itself",
              "Because the answer has already been settled",
            ],
            correctIndex: 2,
            explanation: "Contrast course 1, where 'how many buildings did the Avenue lose' has no answer because no survey was ever run.",
            sourceLessonSlug: "tr-powers-what-opened-the-gate",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
