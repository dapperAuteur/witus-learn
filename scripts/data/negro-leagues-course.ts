// Authored "The Negro Leagues: Who Owned the Game" — a cited, high-school-and-up course on
// Learn.WitUS (Culture & History), from BAM's note in
// plans/future-courses/sports-courses/negro-leagues.md: "tell story of Negro Leagues. start with
// baseball and branch out to other sports. could be a compliment or branch from stories of
// Indianapolis and Indianapolis IN and Madame CJ Walker."
//
// METHOD TIER: 0 (docs/course-method/README.md). The assessment spec was written before authoring:
// section pool = round(section words / 35) clamped 40-100 serving 5, final pools 40+ serving 10,
// every quiz passes at 80, every question carries `explanation` and `sourceLessonSlug`.
//
// THE CIVIC QUESTION, stated once and carried through all six sections:
//   WHO OWNS THE GAME, WHO COLLECTS THE GATE, AND WHAT HAPPENS TO THOSE BUSINESSES WHEN THE DOOR
//   FINALLY OPENS?
//
// WHY THIS SHAPE. The catalog already teaches admission to a sport (`two-racetracks`), the school
// district line that decides who plays (`the-gym-and-the-color-line`), and Black business districts
// as economies (`what-they-built`). The gap between them is the one this course fills: a league is
// a FIRM, and the Negro Leagues were among the largest Black-owned business enterprises in the
// United States for a generation. Teaching them as a tragedy that ended in 1947 skips the part a
// student can actually use, which is the balance sheet: who put up the capital, who owned the
// ballpark, who took a cut of the gate, who sold the advertising, and who was left holding an
// asset that lost its market. This is `what-they-built`'s method applied to a different class of
// firm, and `financing-without-access`'s question asked of a ballclub.
//
// SOURCING DISCIPLINE (the load-bearing part of this file):
//   * NO INVENTED STATISTIC, GAME, QUOTATION, PERSON, ADDRESS OR CONTRACT FIGURE. Every number in
//     a lesson is attributed in the sentence that carries it.
//   * NEGRO LEAGUES STATISTICS ARE INCOMPLETE AND UNDER ACTIVE REVISION, and this course says so
//     wherever a number appears rather than quoting a figure with false confidence. Section 6 is
//     built on that fact: it teaches the December 2020 reclassification and the May 2024
//     statistical merge, and then teaches what is genuinely contested about them.
//   * CLAIMS THIS COURSE REFUSED TO STATE are taught as a lesson rather than quietly dropped:
//     the "Josh Gibson hit 800 home runs" and "Satchel Paige won 2,000 games" family of figures,
//     and any single dollar figure for what Branch Rickey did or did not pay the Kansas City
//     Monarchs for Jackie Robinson. See lesson `nl-numbers-that-fail-checking` and the entries
//     filed in src/lib/research-checks.ts.
//   * The Indianapolis thread (the ABCs, the Clowns, Indiana Avenue and the Walker business world)
//     is BAM's ask and is carried as its own section, cross-linked to `two-racetracks`,
//     `the-gym-and-the-color-line` and `indiana-avenue-a-district-and-what-replaced-it`. Where a
//     connection between the Walker company and the ballclub could not be documented, the course
//     says so instead of implying one.
//   * The branch to other sports is carried only where it is sourced: basketball, professional
//     football's color line and its 1946 end, golf's written clause, and tennis. The lesson states
//     plainly that nothing of comparable scale to the baseball leagues existed in football.
//   * These are living families and self-documenting institutions. Register is RESPECT AND
//     SPECIFICITY: no tragedy framing, no resilience moral, no "lost golden age."
//
// House rule: NO em-dashes or en-dashes in prose. ASCII hyphens in ranges are fine. Verbatim cited
// titles inside a `## Sources` block are the only place a dash survives.

import type { AuthoredCourse } from "./authored-course";

export const NEGRO_LEAGUES_COURSE: AuthoredCourse = {
  title: "The Negro Leagues: Who Owned the Game",
  description:
    "A cited, high-school-and-up course on the Negro Leagues as businesses rather than as a tragedy that ended in 1947. The civic question runs through every section: who owns the game, who collects the gate, and what happens to those businesses when the door finally opens? You will read a league the way you would read any firm, out of charters, leases, newspaper business pages, museum and Hall of Fame records and Major League Baseball's own published methodology: who put up the capital when banks would not lend, which clubs owned a ballpark and which rented one from the white club that had refused them the locker rooms, what a booking agent took between the turnstile and the owner, and why barnstorming and one all-star game at Comiskey Park mattered more to the books than the standings did. Indianapolis is the course's worked example, because the record there is unusually good: the ABCs from a contested sponsorship name in 1907 to a folded franchise in 1926, the Negro National League's first game at Washington Park on 2 May 1920, C. I. Taylor's clubhouse on Indiana Avenue built because his players were locked out of the one at the park, and the Indianapolis Clowns, who bought a league seat in 1943 by itemizing what they would cut from the act and outlived the leagues by thirty-five years. The last section is about the record itself: MLB's December 2020 reclassification of seven leagues, the May 2024 statistical merge of more than 2,300 players, and what is genuinely contested about both, including a qualifying threshold set at about 1,800 at-bats where the American and National Leagues use 5,000, an official record that excludes the barnstorming games that paid the bills, and two reputable databases that currently disagree about who holds the single-season batting record. Negro Leagues statistics are incomplete and under active revision, and this course says so wherever a number appears instead of quoting one with false confidence. It states plainly which figures it refused to assert and why. Cross-linked to What They Built, Financing Without Access, Two Racetracks, The Gym and the Color Line, Indiana Avenue, and Pittsburgh.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · The firm
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-the-rule",
      title: "1 · The rule this course runs on",
      section: "Section 1 · The firm",
      body: `Almost everything you have been told about the Negro Leagues is a story about 1947. A door opens, one man walks through it, and the leagues fade out behind him. That story is not false. It is a story about an ending, told about businesses whose interesting years were the twenty-seven before it.

**The rule, stated before any content, so you know what you are and are not being shown.** This course treats the Negro Leagues as **firms**: companies with owners, capital, payroll, leases, receipts, advertising, competitors and creditors. Every question it asks is a question you could ask about any business. Who put up the money? What did the company own, and what did it rent? Where did revenue come from, and who took a cut on the way? What happened to the asset when the market changed?

**Why that is not a trick of framing.** For roughly a generation these leagues were among the largest Black-owned business enterprises in the United States, and the people who ran them said so at the time, in the sports pages of Black newspapers that were themselves Black-owned businesses. Treating a ballclub as a company is not a novelty this course invented. It is what the owners were doing.

**What the business frame buys you that the tragedy frame does not.** A tragedy has one cause and one date. A business has a balance sheet, and a balance sheet lets you ask a question with a checkable answer. When integration arrived, the players gained an employer and the owners lost a market. Both of those are true at once, and only one of them is in the version of the story most people are taught.

**Three things this course will not do.**
1. **It will not use an achievement to soften a harm.** That the leagues were well run is not a counterweight to the exclusion that made them necessary. Both were happening at the same time, to the same people. This course teaches the co-occurrence and refuses to editorialize it into balance. That rule is borrowed, deliberately, from *What They Built: Black Business Districts*.
2. **It will not treat 1947 as the end of the subject.** One league operated into the 1960s. The last teams were barnstorming businesses long after the standings stopped mattering.
3. **It will not quote a statistic it cannot source.** This is the hardest rule to hold on this subject, and Section 6 is about why.

**The question the whole course hangs on**, and you should carry it into every lesson: **who owns the game, who collects the gate, and what happens to those businesses when the door finally opens?**

:::reveal State the rule this course runs on in one sentence. ||| Treat the Negro Leagues as firms: ask who supplied the capital, what the company owned versus rented, where the revenue came from, who took a cut, and what happened to the asset when the market changed.

:::reveal Why does the course refuse to use an achievement to soften a harm? ||| Because a well run league is not a counterweight to the exclusion that made it necessary. Both were happening at the same time to the same people, and implying balance is apologetics rather than history.

:::reveal What does a business frame let you ask that a tragedy frame does not? ||| A question with a checkable answer. A tragedy has one cause and one date; a balance sheet lets you show that integration gave players an employer and took the owners' market at the same moment.

## Vocabulary
- **Firm**: an organization that owns assets, employs people and earns revenue, which is the unit this course uses for a ballclub and for a league.
- **The gate**: the money paid at the door for one game, and the thing most of this course's arguments are ultimately about.
- **Co-occurrence**: the claim that achievement and harm were happening at the same time to the same people, as opposed to the claim that one balances the other.
- **Barnstorming**: playing games outside any league schedule, for a negotiated share of the crowd, which is where much of the actual money was.`,
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Indianapolis
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-abcs",
      title: "10 · The Indianapolis ABCs, read as a company",
      section: "Section 4 · Indianapolis",
      body: `Indianapolis is where this course stops generalizing. One club, one city, one set of records, and a business you can follow from its founding to its liquidation.

**The founding, and a name nobody can settle.** The *Encyclopedia of Indianapolis* dates the club to **1907** and credits **Randolph "Ran" Butler**, a Black saloon keeper, organizing it as a marketing effort for the **American Brewing Company** (Strecker, 2023). That is the majority account. It is not the only one. A second version holds that the letters are the initials of three principals: George **A**brams, Ran **B**utler, and a co-manager named **C**onoyer. The team's own historian, Paul Debono, hedges even the brewery reading, since a sponsor can attach itself to a name that already exists (Painter, 2021). **This course does not pick.** You are looking at a real, ordinary problem in business history: a sponsorship name is evidence of a relationship whose direction the record does not fix.

**The ownership chain, which is the interesting part.** Butler sold to **Thomas Bowser**, a **white** businessman, in **1912** (Strecker, 2023). In **1914** **Charles Isham "C. I." Taylor** came north from West Baden, Indiana, where he had run the West Baden Sprudels, bought a **half interest**, and took over as manager (Strecker, 2023). So by 1914 the club is a partnership between a white owner and a Black owner-operator, which is the arrangement Section 2 told you to look for.

**The partnership broke, and the market split.** Bowser and Taylor fell out, and in **1916 two rival clubs both called the ABCs took the field** (Strecker, 2023; Negro Leagues Baseball Museum, n.d.). Taylor kept the better players. Bowser then sold to **Warner Jewell**, a Black Indianapolis businessman, and the weaker club ran as "Jewell's ABCs" (Strecker, 2023). **A white owner selling out to a Black owner is the direction this course keeps finding, and it is worth noticing that it happened to the losing half of a split.**

**A management policy that was also a marketing policy.** Taylor required his players to wear **collars, ties and shined shoes when not in uniform**, on the stated theory that bearing and gentlemanly play would move white opinion toward recognizing Black baseball's merits (Strecker, 2023). Read it as a business decision about a brand's reputation with a market it needed and did not control. Then read it against **October 1915**, when Taylor's own center fielder, the Indianapolis-born **Oscar Charleston**, punched a white umpire during an exhibition and Taylor issued a public apology for his "hotheaded" player (Odzer, 2020).

**The best-documented date in the whole Indianapolis story.** The ABCs were **charter members of the Negro National League**, and the league's **first game was played in Indianapolis on 2 May 1920 at Washington Park**, where the ABCs beat the Chicago Giants. The *Encyclopedia of Indianapolis* records the crowd at **6,000** and the score at **4 to 2** (Strecker, 2023). A state historical marker installed jointly by the Indiana Historical Bureau and SABR's Negro Leagues Research Committee carries the same date and the same result (Indiana Historical Bureau, 2011).

**The liquidation, and what actually killed it.** Taylor attended the league's February 1922 winter meetings, fell ill on returning, and **died on 23 February 1922** (Strecker, 2023). Ownership passed to his wife **Olivia Taylor**, reported as the first woman to own a Negro League club. Players left for the Eastern Colored League, Charleston among them. The standings tell the story better than any narrative: Seamheads records the franchise at **63 wins, 42 losses and 2 ties in 1922**, and at **16 wins and 55 losses in 1925** (Seamheads, n.d.). The club folded in 1926. **The best season on the field was the year the owner-operator died.**

:::reveal Why does this course refuse to state what the "ABC" in Indianapolis ABCs stood for? ||| Because the record does not fix it. The brewery-sponsorship reading is the majority account, a rival account reads the letters as three principals' initials, and the club's own historian hedges even the brewery version, since a sponsor can attach to a name that already exists.

:::reveal What is the single best-documented fact in the Indianapolis story, and what makes it so well sourced? ||| That the Negro National League's first game was played in Indianapolis on 2 May 1920 at Washington Park, with the ABCs beating the Chicago Giants. It carries both an encyclopedia entry and a state historical marker installed jointly by the Indiana Historical Bureau and SABR's Negro Leagues Research Committee.

:::reveal What do the ABCs' 1922 and 1925 records show about who was actually running the business? ||| Seamheads has them at 63-42-2 in 1922 and 16-55 in 1925. The club's best season was the year C. I. Taylor died, and the collapse over the following three seasons tracks the loss of the owner-operator and the talent that left with him rather than any single event on the field.

## Vocabulary
- **Owner-operator**: an owner who also runs the on-field business day to day, which is what C. I. Taylor was and what the ABCs could not replace.
- **Sponsorship name**: a team name taken from a paying business, which is evidence of a relationship whose direction and date the record often does not fix.
- **Charter member**: a club present at a league's founding, which for the ABCs meant a seat at the table and the league's first home date.
- **Franchise record**: a club's cumulative win-loss line as one database reconstructs it, which is a statement about documented league games and not about every game played.

## Sources
Indiana Historical Bureau. (2011). *Washington Park baseball* (Marker 49.2011.2). Indiana Historical Bureau and Society for American Baseball Research, Negro Leagues Research Committee. https://www.in.gov/history/state-historical-markers/find-a-marker/find-historical-markers-by-county/indiana-historical-markers-by-county/washington-park-baseball/

Negro Leagues Baseball Museum. (n.d.). *Indianapolis ABC's team profile*. https://www.nlbm.com/team/indianapolis-abcs/

Odzer, T. (2020, July 15). *Oscar Charleston*. Society for American Baseball Research BioProject. https://sabr.org/bioproj/person/oscar-charleston/

Painter, A. (2021, December 22). *Hall of Famer Bud Fowler, the ABCs, and the forgotten 1902 Indianapolis Colored Base Ball League*. Blackball in the Hoosier Heartland. https://indianablackball.wixsite.com/home/post/hall-of-famer-bud-fowler-the-abcs-and-the-forgotten-1902-indianapolis-colored-base-ball-league

Seamheads. (n.d.). *Indianapolis ABCs franchise record*. Seamheads Negro Leagues Database. https://www.seamheads.com/NegroLgs/organization.php?franchID=ABC

Strecker, G. (2023). *Indianapolis ABCs*. Encyclopedia of Indianapolis. https://indyencyclopedia.org/indianapolis-abcs/`,
    },
    {
      slug: "nl-avenue-and-the-ground",
      title: "11 · The ground they rented, and the clubhouse on Indiana Avenue",
      section: "Section 4 · Indianapolis",
      body: `Section 3 said the ballpark was the hardest asset to get. Indianapolis lets you watch one club solve it four times in twenty years, and lets you watch the solution generate its own infrastructure.

**Ground one: their own, and modest.** **Northwestern Park** was a wooden ballpark in the city's Black community, northwest of West 17th Street and Northwestern Boulevard, now Martin Luther King Jr. Boulevard (Strecker, 2023).

**Ground two: borrowed, and then demolished.** After 1915 the ABCs used **Federal League Park**, at Kentucky and River Avenues, left behind by a collapsed white league. It was torn down, which put both rival ABC clubs of 1916 onto the two fields that remained and was, in the *Encyclopedia of Indianapolis*'s account, disastrous for Jewell's club (Strecker, 2023). **A competitor destroyed by losing access to a venue rather than by losing players is a lesson in what a lease actually is.** This course does not state the demolition year, because sources give both 1916 and 1917 and the difference has not been settled.

**Ground three: the white club's park, on the white club's terms.** Taylor reached an agreement with the **Indianapolis Indians** to lease **Washington Park**, at 1200 West Washington Street, occasionally (Strecker, 2023). The Indians had dedicated it on 19 April 1905; the city's first night game was played there in 1931 and the park closed at the end of that season (Indiana Historical Bureau, 2011). **The terms included a refusal: the ABCs were not allowed to use the locker rooms** (Strecker, 2023).

**What Taylor did about it, which is the most useful fact in this section.** He **built changing space into his own business on Indiana Avenue**, had his players dress there, and turned the walk to the ballpark into **parades down the Avenue and across Washington Street, with cars, bands and civic groups escorting the team** (Strecker, 2023). Read the sequence as a business would: a supplier withheld a facility, the club internalized the function, and the resulting movement of thirty men in uniform through a commercial district became advertising the club did not have to buy. **Exclusion generated infrastructure, and the infrastructure sat on Indiana Avenue.**

**Ground four: the modern stadium, still rented.** **Perry Stadium** opened on 5 September 1931 at 1501 West 16th Street, cost **$350,000** and seated **14,500** (Dalton & Opsahl, 2021). It was renamed **Victory Field by fan vote in 1942** and **Bush Stadium on 30 August 1967** (Dalton & Opsahl, 2021). Negro League clubs **rented** it, the Indianapolis Clowns from 1944 to 1962. Today's Victory Field, opened in 1996, is a different building; the 1931 stadium was converted to apartments and opened as Stadium Lofts in 2013 with 138 units (Dalton & Opsahl, 2021; Indiana Landmarks, n.d.).

**Now the finding this course was asked for, stated plainly.** Madam C. J. Walker moved to Indianapolis in **February 1910**, drawn by the Indiana Avenue business community and by Union Station's rail access for her mail-order operation, and incorporated her company in **1911** (Bundles, 2022). Her building at 617 Indiana Avenue was completed in December 1927 (Gibbs & Bundles, 2021). **There is no documented commercial relationship between the Walker company and the Indianapolis ABCs.** No sponsorship, no investment, no advertising tie that this course could establish. The one sourced connection is personal: a Ball State research project citing Strecker and Baas's article on Indianapolis ballparks records that Walker attended many ABCs games (Wilson & Johnson, n.d.). She died in May 1919, which bounds even that.

**Do not fill the gap.** The real Avenue-to-ballclub link is Taylor's own premises serving as the clubhouse his players were refused, and it is better history than a sponsorship would have been, because it is causal rather than decorative.

:::reveal What did C. I. Taylor do when the Indians' lease denied his players the Washington Park locker rooms, and why is it a business fact rather than a colorful one? ||| He built changing space into his own Indiana Avenue business and staged parades from there to the ballpark with cars, bands and civic groups. A withheld facility was internalized, and the walk became advertising the club did not have to buy.

:::reveal What is the documented relationship between the Madam C. J. Walker company and the Indianapolis ABCs? ||| None commercially. No sponsorship, investment or advertising tie can be established. The only sourced connection is that Walker attended many ABCs games, and she died in May 1919, which bounds even that.

:::reveal Why does this course refuse to give a year for Federal League Park's demolition? ||| Because the sources give both 1916 and 1917 and the difference has not been settled. The teachable point survives either way: losing the venue, not losing players, is what wrecked the rival ABC club.

## Vocabulary
- **Lease terms**: what a tenant actually gets for the rent, which in this case excluded the locker rooms and therefore shaped where the players dressed.
- **Internalizing a function**: bringing in-house a service a supplier refused to provide, which is what Taylor's Avenue clubhouse was.
- **Adaptive reuse**: converting a building to a new purpose rather than demolishing it, as the 1931 stadium became apartments in 2013.
- **Bounded claim**: a statement limited by a date or a scope, as Walker's attendance at games is bounded by her death in May 1919.

## Sources
Bundles, A. (2022). *Madam C. J. Walker*. Encyclopedia of Indianapolis. https://indyencyclopedia.org/madam-c-j-walker/

Dalton, W. D., & Opsahl, S. (2021). *Bush Stadium*. Encyclopedia of Indianapolis. https://indyencyclopedia.org/bush-stadium/

Gibbs, W., & Bundles, A. (2021). *Madam Walker Legacy Center*. Encyclopedia of Indianapolis. https://indyencyclopedia.org/madam-walker-legacy-center/

Indiana Historical Bureau. (2011). *Washington Park baseball* (Marker 49.2011.2). https://www.in.gov/history/state-historical-markers/find-a-marker/find-historical-markers-by-county/indiana-historical-markers-by-county/washington-park-baseball/

Indiana Landmarks. (n.d.). *Success stories*. https://www.indianalandmarks.org/10-most-endangered/success-stories/

Strecker, G. (2023). *Indianapolis ABCs*. Encyclopedia of Indianapolis. https://indyencyclopedia.org/indianapolis-abcs/

Wilson, B., & Johnson, R. (n.d.). *Indianapolis ABCs and Washington Park*. Ball State University Digital Civil Rights Museum. https://www.digitalresearch.bsu.edu/digitalcivilrightsmuseum/items/show/47`,
    },
    {
      slug: "nl-clowns",
      title: "12 · The Indianapolis Clowns: what a league seat cost",
      section: "Section 4 · Indianapolis",
      body: `The Clowns are the hardest business in this course to write about honestly, because the product was partly a minstrel act, the criticism came from inside Black baseball, and the company outlasted every league it ever joined.

**A product line, not an improvisation.** **Syd Pollock**, born in North Tarrytown, New York in 1901, was booking players by 1917. From **1926 to 1936** he owned a barnstorming club of mostly Cuban players, first the Havana Red Sox, where he **experimented with blending comedy and shadow-ball exhibitions into competitive play** (Johnson, 2026). He was booking games for the Miami Ethiopian Clowns by 1936 and took a controlling stake in **1937** (Johnson, 2026). **The comedy model arrived at the Clowns fully developed, from a decade of running it somewhere else.**

**The chain of cities is a branding decision.** Founded in Miami as the Miami Giants, financed by the bootlegger Johnny Pierce, renamed the Ethiopian Clowns, moved to Cincinnati in **1942**, to Indianapolis before the **1944** season as the Cincinnati-Indianapolis Clowns, and fully Indianapolis in **1946** (Verderame, 2022; Johnson, 2026). A club that changes city four times in a decade is telling you where its revenue comes from, and it is not from a hometown.

**The promotional machine, quantified.** By the early 1950s Pollock was **sending out thirty thousand press releases a year**, and the Clowns became one of the Negro American League's most financially successful teams, drawing at major league parks (Johnson, 2026). The club played roughly **200 games a year** in its barnstorming period (Verderame, 2022). Set those two numbers side by side. **This was a touring company with a publicity department, and the standings were one of its products rather than its business.**

**The criticism, named and dated.** **Wendell Smith**, sports editor of the *Pittsburgh Courier*, wrote in **1942** that the Clowns were a "fourth-rate Uncle Tom minstrel show" (Johnson, 2026). **Cumberland Posey**, co-owner of the Homestead Grays, accused Pollock of capitalizing on Black sympathy for Ethiopia during Italy's 1935 invasion (Johnson, 2026). In **1941** the two leagues **barred member clubs from playing the Clowns**, and Pollock responded by forming his own Negro Major League to get around the ban (Verderame, 2022). **A boycott by competitors, answered with a rival league, is a market-access fight, and it was fought on a question about dignity.**

**What the league seat cost, itemized.** Pollock joined the **Negro American League in 1943** after agreeing to **drop the "Ethiopian" name and the most offensive elements of the act: the whiteface makeup, the wigs, the grass skirts and the clown suits** (Verderame, 2022). **That is the clearest price tag in this course.** Legitimacy was purchased, and the invoice listed specific changes to the product. The membership lasted twelve years; the Clowns withdrew after the 1954 season.

**The women, with the caveat the Hall of Fame itself attaches.** **Toni Stone** played for the Clowns in **1953**, the first woman to play in the Negro American League; Pollock sold her contract to the Kansas City Monarchs, where she played in 1954. **Connie Morgan**, at 19, replaced her for 1954. **Mamie "Peanut" Johnson** pitched for the Clowns from late 1953 to 1955 (Rosengren, n.d.). Johnson said she went 33 and 8, and the National Baseball Hall of Fame prints that figure with the note that Negro Leagues historians question its validity (Rosengren, n.d.). **This course states it the same way, with the doubt attached, because a number is not improved by dropping its caveat.** The often-repeated line that Stone "replaced Hank Aaron" is not supported by the Hall of Fame's account and is not asserted here.

**Aaron, and a price this course will not state as fact.** Aaron signed with the Clowns on **20 November 1951** for **$200 a month**, batted .366 in 26 games in 1952, and signed with the Braves' scout on **14 June 1952** (Johnson, 2012). The figure of **$10,000** for his contract is repeated almost everywhere, including by the *Encyclopedia of Indianapolis*, but no primary record for it was located, and SABR's biography of Aaron gives no figure at all. **It is reported here as commonly reported and not as established.**

**The company outlived the league by thirty-five years.** Pollock sold a partnership to Ed Hamman in 1955 and the rest of his interest in 1965. The Clowns kept playing exhibitions and **disbanded in 1989**, which the *Encyclopedia of Indianapolis* calls the longest run of any Black professional team in United States history (Verderame, 2022; Johnson, 2026). **The business survived by ceasing to be a league team.**

:::reveal What exactly did Syd Pollock pay to get the Clowns into the Negro American League in 1943? ||| He dropped the "Ethiopian" name and the most offensive elements of the act: the whiteface makeup, the wigs, the grass skirts and the clown suits. The price of league legitimacy was an itemized change to the product.

:::reveal How does this course handle Mamie Johnson's reported 33 and 8 record, and why? ||| It states the figure with the doubt attached, exactly as the National Baseball Hall of Fame does, noting that it is her own account and that Negro Leagues historians question its validity. A number is not made better by dropping its caveat.

:::reveal What does the Clowns' 1989 disbanding tell you about the business, given that the Negro American League was long gone? ||| That the company's real product was touring entertainment rather than league competition. It withdrew from the league after 1954 and kept playing exhibitions for another thirty-five years, surviving by ceasing to be a league team.

## Vocabulary
- **Product line**: a proven offering carried from one venture to another, as Pollock carried the comedy-plus-baseball format from the Havana Red Sox to the Clowns.
- **Market access fight**: a dispute in which competitors try to bar a rival from the market, as the two leagues did in 1941 by forbidding games against the Clowns.
- **Itemized price**: a cost stated as specific concessions rather than money, which is what Pollock paid for a Negro American League seat in 1943.
- **Commonly reported**: a figure that appears in many secondary sources with no primary record behind it, which is how this course labels the $10,000 Aaron contract price.

## Sources
Johnson, B. (2012, January 4). *Hank Aaron*. Society for American Baseball Research BioProject. https://sabr.org/bioproj/person/hank-aaron/

Johnson, S. (2026). *Syd S. Pollock*. Encyclopedia of Indianapolis. https://indyencyclopedia.org/syd-pollock/

Rosengren, J. (n.d.). *Toni Stone, Connie Morgan and Mamie Johnson blazed a trail for women in the Negro Leagues*. National Baseball Hall of Fame. https://baseballhall.org/discover/baseball-history/toni-stone-connie-morgan-and-mamie-johnson-blazed-trail-for-women-in-negro-leagues

Verderame, J. A. (2022). *Indianapolis Clowns*. Encyclopedia of Indianapolis. https://indyencyclopedia.org/indianapolis-clowns/`,
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · The record  (placed last; the write assignment and the final live here)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-reclassification",
      title: "16 · December 2020 and May 2024: the record changes",
      section: "Section 6 · The record",
      body: `A business leaves records, and someone decides which records are official. In the space of four years, Major League Baseball changed that decision twice.

**What happened in 1969, which is the part nobody teaches.** A Special Baseball Records Committee defined the leagues whose statistics count as major: the National League from 1876, the American League from 1901, the American Association 1882 to 1891, the Union Association 1884, the Players' League 1890, and the Federal League 1914 to 1915 (Major League Baseball, 2024a). The committee **demoted** the National Association of 1871 to 1875 for its erratic schedule and procedures. It did not do the same to the Negro Leagues, because, in the committee's own later summary, **the Negro Leagues never came up for discussion** (Major League Baseball, 2024b). MLB's 2024 explainer says it plainly: they "weren't even given consideration in the meetings" (Major League Baseball, 2024c). **They were not evaluated and rejected. They were absent from the agenda.**

**December 16, 2020: status.** MLB designated **seven leagues operating between 1920 and 1948** as major: the Negro National League (I), 1920 to 1931; the Eastern Colored League, 1923 to 1928; the American Negro League, 1929; the East-West League, 1932; the Negro Southern League, 1932; the Negro National League (II), 1933 to 1948; and the Negro American League, 1937 to 1948 (Major League Baseball, 2020). Note that the Negro National League appears twice, as two different companies with the same name. MLB called the 1969 omission "clearly an error that demands today's designation," and credited the researchers behind the Seamheads Negro Leagues Database, Gary Ashwill, Scott Simkus, Mike Lynch and Kevin Johnson, along with Larry Lester (Major League Baseball, 2020).

**The 2020 announcement changed no statistics.** It said a review process had begun. Read that as the corporate act it was: a status decision, with the accounting to follow.

**May 29, 2024: numbers.** MLB merged the statistics of **more than 2,300 Negro Leagues players from 1920 to 1948** into one database with the American and National Leagues (Major League Baseball, 2024a). Watch the two figures: 2020 spoke of **approximately 3,400 players** covered by the designation, 2024 of more than 2,300 with recoverable statistics. **Those count different things and neither corrects the other.**

**What moved.** **Josh Gibson** became the career leader in batting average at **.372 in 2,255 at-bats**, ahead of Ty Cobb's .367; the career leader in slugging at **.718**, ahead of Babe Ruth's .690; and the career leader in OPS at **1.177**. He ranks **third** in career on-base percentage, behind Ted Williams. His **.466 for the 1943 Homestead Grays** became the highest single-season batting average in the record (Major League Baseball, 2024a). **He does not lead all four rate categories, and a course that says he does has stopped reading.**

**The counting statistics moved less, and more usefully.** Minnie Minoso's 150 hits with the New York Cubans lifted his career total past 2,000 to **2,113**. Jackie Robinson gained **49 hits** from the 1945 Kansas City Monarchs. Willie Mays gained **10** from the 1948 Birmingham Black Barons. **Satchel Paige's career win total went from 28 to 125** (Major League Baseball, 2024a).

**Who decided.** Not MLB alone. The Negro Leagues Statistical Review Committee, chaired by MLB official historian John Thorn, included Bob Kendrick of the Negro Leagues Baseball Museum, **Sean Gibson of the Josh Gibson Foundation**, Larry Lester, Leslie Heaphy of Kent State, the Elias Sports Bureau, the Players Association, Retrosheet, the Hall of Fame, and the pitcher CC Sabathia (Major League Baseball, 2024b). **Any account that stages this as MLB versus the families is wrong on the face of the record.**

**And no asterisks.** The committee declined to annotate the new records, citing the 1969 committee's own rule that no asterisk shall mark a season's length, and adding to that committee's "one set of records" language the phrase "or that of skin color" (Major League Baseball, 2024b).

:::reveal What did the 1969 Special Baseball Records Committee actually do about the Negro Leagues? ||| Nothing. It defined six major leagues and demoted the 1871 to 1875 National Association for erratic scheduling, but the Negro Leagues never came up for discussion. They were absent from the agenda rather than evaluated and rejected.

:::reveal What is the difference between what happened in December 2020 and what happened in May 2024? ||| December 2020 was a status decision: seven leagues from 1920 to 1948 were designated major, and no statistic changed. May 2024 was the accounting: more than 2,300 players' statistics entered one combined database.

:::reveal Which career rate categories does Josh Gibson lead in MLB's record, and which does he not? ||| He leads career batting average at .372, slugging at .718 and OPS at 1.177. He is third in career on-base percentage, behind Ted Williams.

## Vocabulary
- **Designation**: a decision about status rather than about numbers, which is what the December 2020 announcement was.
- **Rate statistic**: a per-opportunity measure such as batting average or slugging, which is where short seasons show up most.
- **Counting statistic**: a cumulative total such as hits or wins, which grows with playing time and therefore moved less in the merge.
- **Negro Leagues Statistical Review Committee**: the sixteen-member body chaired by MLB's official historian that decided the merge's rules, including the museum, the Gibson family, the union and the researchers.

## Sources
Major League Baseball. (2020, December 16). *MLB officially designates the Negro Leagues as "Major League"*. https://www.mlb.com/press-release/press-release-mlb-officially-designates-the-negro-leagues-as-major-league

Major League Baseball. (2024a, May 29). *Statistics of the Negro Leagues officially enter the Major League record*. https://www.mlb.com/press-release/press-release-statistics-of-the-negro-leagues-officially-enter-the-major-league-record

Major League Baseball. (2024b, May 29). *First set of findings from the Negro Leagues Statistical Review Committee*. https://www.mlb.com/news/mlb-negro-league-stats-added-after-statistical-review-committee-announces-findings

Major League Baseball. (2024c, May 29). *Everything to know as Negro Leagues stats join MLB record*. https://www.mlb.com/news/faq-negro-leagues-stats-major-league-record`,
    },
    {
      slug: "nl-what-is-contested",
      title: "17 · What is contested, and what this course refused to say",
      section: "Section 6 · The record",
      body: `The merge is not the end of an argument. It is a set of choices, most of which MLB published, and each of which a reasonable person can dispute. This lesson is the course's method applied to its own subject.

**One: the record is about three quarters complete, and still moving.** MLB states that the available 1920 to 1948 records are **nearly 75 percent complete** and that future findings "may result in additional modifications to the game's all-time leaderboards" (Major League Baseball, 2024a). Its own committee labeled the release **"Version 1.0"** and said minimum qualifiers "may change" (Major League Baseball, 2024b). Completeness also varies wildly by club: Baseball Reference reports that all 98 known games of the 1923 Kansas City Monarchs have box scores, while the 1948 Memphis Red Sox played 122 known games with only **13 box scores** found (Baseball Reference, n.d.). **Any figure you quote from this record needs a date and a source attached.**

**Two: the qualifying thresholds are lower, and that is the deepest disagreement.** To appear on a career rate-statistic leaderboard, an American or National League hitter needs **5,000 at-bats**. A Negro Leagues hitter needs about **1,800**, on the reasoning that ten Negro Leagues seasons of roughly 60 games each is the equivalent workload (Major League Baseball, 2024b). Gibson's career total is **2,255 at-bats**. He clears the Negro Leagues bar and is far short of the other one. MLB's defense is John Thorn's: the short schedules "were born of MLB's exclusionary practices," so refusing the record would be a **double penalty** (Major League Baseball, 2024a). The counterargument is that a career rate title on 45 percent of the standard workload is not the same measurement. **Both positions are documented and neither is fringe.**

**Three: which games count excludes the ones that paid the bills.** MLB counts **league games only**. Barnstorming games, the World Series and the East-West Game do not count (Major League Baseball, 2024b). The committee itself calls barnstorming "a revenue lifeline." **Everything Section 3 taught you about where the money was is, by design, absent from the official record.**

**Four: two reputable authorities using the same underlying data disagree right now.** Baseball Reference requires 3,000 plate appearances for its career leaderboards, so **Gibson does not appear on them at all**, and its single-season batting average leader is **Tetelo Vargas at .472 for the 1943 New York Cubans**, a season MLB excludes because the Cubans do not meet its 60-game minimum (Baseball Reference, n.d.). **Who holds the record depends on which threshold you accept.**

**Five: both ends of the 1920 to 1948 window are arguable.** MLB's stated reason is that pre-1920 attempts "lacked a league structure" and that after 1948 the surviving leagues "were stripped of much of their talent" (Major League Baseball, 2024c). But Seamheads holds data back to **1886**, so the pre-1920 exclusion is a definition of what counts as a league rather than an absence of records; and the Negro American League **operated into 1962** (Baseball Reference, n.d.). Note also that games in Mexico, Cuba, Puerto Rico, the Dominican Republic and Venezuela are excluded entirely, which means a star's official career is only its United States fraction.

**Six: the numbers this course refused to state.** Josh Gibson's Hall of Fame plaque estimates that he hit **almost 800 home runs**; Baseball Reference's documented total is **176** (Baseball Reference, n.d.). MLB's committee raises the gap itself (Major League Baseball, 2024b). **The honest verdict is not that the legend was a lie.** Baseball Reference lists four reasons for the gap: undiscovered box scores, including a documented four-home-run game against the Memphis Red Sox on **28 July 1938** that is excluded because no full box score has been found; barnstorming games; top independent clubs not classified as major; and the Latin American seasons. **The legend and the record are measuring different universes.** The same applies to the Satchel Paige claims of roughly 2,000 wins and 55 no-hitters, whose origin this course could not trace to a primary source and therefore does not repeat. His documented total is 125 wins.

**Why the folklore existed is a business answer.** There was no central statistical office, no league-funded record keeping, and revenue depended on drawing a crowd in a strange town next week. **Promotional exaggeration was a job function.** Baseball Reference makes the comparison directly: this reconstruction is a fraction of the investment made in recording white major league statistics, which had a funded league office, multiple newspapers per city, and commercial guides, and which still contains thousands of errors before the 1960s (Baseball Reference, n.d.).

**What this course left out.** Almost all of the on-field history, the Latin American and Caribbean leagues that employed these same players in the winter, the Cuban and Mexican circuits, the semipro and industrial teams, and the fans. It is a business history and it is only that.

:::reveal Why can two reputable databases disagree about the single-season batting record while using the same underlying data? ||| Because they choose different qualifying thresholds. MLB excludes Tetelo Vargas's .472 in 1943 because his club does not meet its 60-game minimum, so Gibson's .466 leads; Baseball Reference includes Vargas and requires 3,000 plate appearances for career lists, which leaves Gibson off them entirely.

:::reveal What is the honest explanation of the gap between "almost 800 home runs" on Gibson's plaque and 176 in the database? ||| That they measure different universes. The documented total covers league games with surviving box scores, while the estimate includes barnstorming, top independent clubs, Latin American seasons and games whose box scores have never been found, such as a four-home-run game on 28 July 1938.

:::reveal Which games does MLB's official record exclude, and why is that ironic given this course? ||| It counts league games only, excluding barnstorming, the World Series and the East-West Game. Those are precisely the dates that produced the revenue, so the official record leaves out the part of the business this course spent a whole section on.

## Vocabulary
- **Version 1.0**: MLB's own label for the 2024 release, meaning the leaderboards are expected to change as box scores are found.
- **Qualifying threshold**: the minimum playing time needed to appear on a leaderboard, set at about 1,800 at-bats for Negro Leagues careers against 5,000 for the American and National Leagues.
- **Double penalty**: the argument that excluding these records punishes players twice for the segregation that shortened their schedules in the first place.
- **Promotional exaggeration**: inflated claims produced as a business function by clubs that had to sell tickets in a new town every week, with no central office recording anything.

## Sources
Baseball Reference. (n.d.). *Negro Leagues data: Frequently asked questions*. https://www.baseball-reference.com/about/negro-leagues-data.shtml

Major League Baseball. (2024a, May 29). *Statistics of the Negro Leagues officially enter the Major League record*. https://www.mlb.com/press-release/press-release-statistics-of-the-negro-leagues-officially-enter-the-major-league-record

Major League Baseball. (2024b, May 29). *First set of findings from the Negro Leagues Statistical Review Committee*. https://www.mlb.com/news/mlb-negro-league-stats-added-after-statistical-review-committee-announces-findings

Major League Baseball. (2024c, May 29). *Everything to know as Negro Leagues stats join MLB record*. https://www.mlb.com/news/faq-negro-leagues-stats-major-league-record

Seamheads. (n.d.). *Negro Leagues Database*. https://www.seamheads.com/NegroLgs/`,
    },
    {
      slug: "nl-write-assignment",
      title: "18 · Your assignment: write one ballclub as a business",
      section: "Section 6 · The record",
      lessonType: "assignment",
      body: `Sports writing about the Negro Leagues is overwhelmingly writing about players. **This assignment asks you to write about a company**, which is harder, less crowded, and closer to the record that actually survives.

## The assignment
Write **900 to 1,300 words** about **one ballclub, one ballpark, or one transaction** in Black professional sport before 1965. Every factual sentence must be checkable against a source you name.

## Step 1 · Choose small, and choose something with paper

**A club, a park or a deal. Not a league and not a career.** "The Negro National League" is a topic. "The Indianapolis ABCs' 1920 season as a charter member of a league that took a cut of every gate" is a subject. So is one ballpark lease. So is one contract sale.

**Where the paper is.**
- **A Black newspaper.** Read the advertising and the box scores before the columns. A ballclub bought ads, announced game times, and printed ticket prices, and those are business records that happen to be printed on newsprint.
- **A National Register nomination** for a surviving ballpark, which arrives with a bibliography and usually with construction dates and costs.
- **A city directory**, which will tell you what else the club's owner owned.
- **A team's own surviving records**, where a museum or a university library holds them.

**If your subject has almost no surviving paper, that is a finding and a legitimate subject.** Say so in the piece and say which record would settle it.

## Step 2 · Build the ledger before you write a sentence

Not a literal ledger. A five-column table, filled in only where the record supports it.

| Column | What goes in it |
|---|---|
| **Date** | Every dated event you can source |
| **Event** | Founded, chartered, joined a league, signed a lease, moved, sold, folded |
| **Money** | Rent, gate, salary, purchase price, capital, anything with a currency sign |
| **People** | Named, with roles. Owners and officers, not only players |
| **Source** | Where each row came from |

**The blanks are the finding.** An empty money column is a sentence a professional writes and an amateur hides.

## Step 3 · Answer the three questions this course is built on

Somewhere in the piece, answer all three, explicitly:
1. **Who owned it, and where did the money come from?**
2. **Who owned the ground it played on, and on what terms?**
3. **Who took a cut between the turnstile and the owner?**

If the record does not say, write that it does not say, and name the record that would settle it.

## Rules you do not get to break

1. **No invented detail.** Not a date, a name, a quotation, a street number, an attendance figure or a statistic. If a source does not say it, you do not write it. This includes atmospheric invention: you do not know what the ballpark smelled like.
2. **No composite or imagined people**, and no invented dialogue, including "he might have said."
3. **Every number gets an owner, a date and a scope.** Attendance figures in particular: say who counted, when, and whether the figure is a gate count or a newspaper estimate.
4. **Statistics get the treatment Section 6 taught.** If you cite a batting average or a win total, say which league seasons it covers, whose database it comes from, and that the underlying record is incomplete and still being revised.
5. **No triumphalism and no tragedy framing.** A club that folded had a cause, and the cause has a document.
6. **No resilience moral.** If your closing paragraph is about the human spirit, delete it and put a sourced number there instead.
7. **Never use an achievement to soften a harm**, per lesson 1.

## What good looks like

A reader finishes your piece knowing something specific about a business they had never thought of as a business, knows exactly how you know it, and knows what you could not establish.`,
    },
  ],
};
