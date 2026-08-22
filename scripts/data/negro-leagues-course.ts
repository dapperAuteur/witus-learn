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
    {
      slug: "nl-what-a-league-is",
      title: "2 · What Rube Foster actually built in a Kansas City YMCA",
      section: "Section 1 · The firm",
      body: `Most tellings of February 1920 are a scene: eight men in a room, a great idea, a league is born. Read the paperwork instead.

**The meeting, with both venues.** The organizational meeting ran **13 and 14 February 1920**, at the **Paseo YMCA and Street's Hotel** in Kansas City, Missouri (Bauer, 2022). The YMCA-only version you will usually see is a simplification.

**Who was in the room, and this is the first surprise.** Andrew "Rube" Foster of the Chicago American Giants, Joe Green of the Chicago Giants, Tenny Blount of the Detroit Stars, C. I. Taylor of the Indianapolis ABCs, J. L. Wilkinson of the Kansas City Monarchs, Lorenzo Cobb of the St. Louis Giants, plus the Cuban Stars by proxy and the Dayton Marcos. **And four Black sportswriters and a Black attorney**: Cary B. Lewis, Elwood Knox, Charles Marshall, Dave Wyatt, and Elisha Scott of Topeka (Bauer, 2022). **The men who drafted the governing documents worked for the papers that would then cover the league.** Hold that; Section 3 comes back to it.

**Foster arrived with the paperwork already filed.** Bauer records that Foster "created a mild surprise when he presented the delegates with drafts of the corporate charter and articles of incorporation for the new league," versions of which "had already been filed in several states where the league would operate **and several where it would not**" (Bauer, 2022). **Read that second clause twice.** Pre-filing in states you have no intention of entering is a defensive territorial move against a rival who might. Before a single game was played, this was a company with a legal strategy.

**The legal name was not the famous name.** In the constitution the body was the **National Association of Colored Professional Base Ball Clubs**; Negro National League became the standard reference (Bauer, 2022). At least one reputable outlet reports a different name settled on that day, which is a reminder that a founding is a paper event and papers disagree.

**The membership instrument was a deposit.** Clubs paid a **$500 deposit** to join, agreed to respect contracts, and agreed to play a league schedule (Bauer, 2022). The same $500 forfeit reappears in the Eastern Colored League in 1923 and in the second Negro National League in 1935 (Overmyer, 2016; Goldman, 2021). **A refundable bond against walking away is the standard tool of a league whose members might.**

**Now the number this course refuses to state as a single figure.** Every account agrees Foster took **no salary as president** and took **a percentage of the gate as the league's booking agent**, and that owners resented it for a decade. What no source settles is how much. The Negro Leagues Baseball Museum says 5 percent of the gate of every league game. Michael Lomax describes a 5 percent booking fee, and notes that clubs then paid 5 percent twice, once to the white stadium owner and once to Foster. SABR's Bauer writes that the 5 percent assessment "meant Foster pocketed 10 percent of every gate," and separately that "the league treasury also received 10 percent of all receipts." Eric Enders says flatly that Foster "kept 10 percent of all gate receipts" (Negro Leagues Baseball Museum, n.d.; Bauer, 2022; Enders, n.d.). **Four credible sources, four accounts, no surviving league financial statement.** Teach the contest, not a number.

**The clearest picture of a league gate we do have comes from 1933,** and it is a complaint. Cum Posey wrote in the *Pittsburgh Courier* of 8 July 1933 that Gus Greenlee had restricted league clubs to **35 percent of gross receipts, with 5 percent going to the league**, while Posey had never accepted less than 40 (Goldman, 2021).

**Three hats on one head.** Foster was league president **and secretary** while owning and managing the league's best club, and he wrote the schedule. He was criticized for steering the profitable weekend dates to his own park, and the league ran an unbalanced schedule that also **expressly permitted non-league games to boost gate receipts** (Bauer, 2022). **That last clause is the root of everything in Section 3: the constitution itself said the league was not the whole business.**

:::reveal What did Foster bring to Kansas City that a scene-setting account leaves out, and why does it matter? ||| Drafts of a corporate charter and articles of incorporation already filed in several states, including states the league did not intend to enter. Pre-filing against a rival is a legal territorial strategy, so the league was a company with a defensive plan before it played a game.

:::reveal What do all four sources agree on about Foster's cut, and what do none of them settle? ||| They agree he drew no salary as president, took a percentage of the gate as the league's booking agent, and that owners resented it for years. None settles whether his personal cut was 5 or 10 percent, or whether the league treasury's share was the same money.

:::reveal Which clause of the 1920 constitution undercuts the idea that the league was the business? ||| The clause expressly permitting games against non-league competition to boost gate receipts, alongside an unbalanced schedule. The league's own founding document treated outside dates as legitimate revenue.

## Vocabulary
- **Articles of incorporation**: the filing that creates a company in a given state, which Foster lodged in advance in states the league did not plan to enter.
- **Forfeit deposit**: a refundable bond a club posts on joining, held against its walking away mid-season.
- **Booking agent**: whoever arranges games and takes a percentage for doing it, a role Foster held at the same time as the league presidency.
- **Unbalanced schedule**: a season in which clubs play unequal numbers of league games, which makes the standings a poor comparison.

## Sources
Bauer, J. (2022). We are the ship, all else the sea: The founding of the Negro National League. In *The first Negro League champion: The 1920 Chicago American Giants*. Society for American Baseball Research. https://sabr.org/research/article/we-are-the-ship-all-else-the-sea-the-founding-of-the-negro-national-league/

Enders, E. (n.d.). Foster, Andrew ("Rube"). In *Scribner encyclopedia of American lives, thematic series: Sports figures*. https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/foster-andrew-rube

Goldman, D. (2021). 1933-1962: The business meetings of Negro League baseball. Society for American Baseball Research. https://sabr.org/journal/article/1933-1962-the-business-meetings-of-negro-league-baseball/

Negro Leagues Baseball Museum. (n.d.). *Andrew "Rube" Foster*. NLBM eMuseum. https://nlbemuseum.com/history/players/fostera.html

Overmyer, J. (2016). 1923-29 winter meetings: The Negro Leagues come east. Society for American Baseball Research. https://sabr.org/journal/article/1923-1929-eastern-colored-league-winter-meetings/`,
    },
    {
      slug: "nl-the-league-map",
      title: "3 · Seven leagues in twenty-eight years, and what that tells you",
      section: "Section 1 · The firm",
      body: `Here is the list, and then here is what the list means. Most accounts give you the first and skip the second.

**The seven leagues Major League Baseball designated as major in December 2020, with the spans it published** (Major League Baseball, 2020):

| League | Years |
|---|---|
| Negro National League (I) | 1920 to 1931 |
| Eastern Colored League | 1923 to 1928 |
| American Negro League | 1929 |
| East-West League | 1932 |
| Negro Southern League | 1932 |
| Negro National League (II) | 1933 to 1948 |
| Negro American League | 1937 to 1948 |

**Read the right-hand column before the left.** Three of these seven leagues lasted **one season**. A fourth lasted six. Only two ran longer than a decade. **The league layer of this industry was its most fragile part**, and any account that talks about "the Negro Leagues" as one continuous institution from 1920 to 1947 has quietly deleted the most interesting fact on the page.

**The clubs outlived their leagues, over and over.** The Homestead Grays, the Kansas City Monarchs, the Chicago American Giants, the Indianapolis ABCs and the Indianapolis Clowns all belonged to more than one of these organizations, or to none at all for stretches. **That inverts the arrangement you are used to.** In the American and National Leagues the league is permanent and clubs are its franchises. Here the club is the durable asset and the league is a service the club subscribed to when the terms were good.

**Notice the name that appears twice.** The Negro National League of 1920 to 1931 and the Negro National League of 1933 to 1948 are **two different companies with the same name**, separated by a year in which neither existed. Secondary accounts collapse them constantly. If you see a claim about "the Negro National League" with a date between 1932 and 1933, someone has stopped paying attention.

**The 1923 to 1929 sequence is a competition story, and you can read it as one.** A second league forms on the East Coast in 1923 while the first is running in the Midwest. Two leagues bidding for the same players is a labor market with two buyers, which is good for players and hard on owners. The Eastern Colored League ends in 1928, the American Negro League replaces it for exactly one season in 1929, and by 1932 two more one-season leagues have come and gone. **Then the whole layer stops for a year.** That is what a market clearing looks like.

**And notice where the list stops.** MLB's designation ends at 1948, but the **Negro American League operated into 1962** (Baseball Reference, n.d.). The last section of this course is about that gap and what to make of it. For now, hold the plain fact: the leagues did not end in 1947 or 1948. **One of them kept operating for another fourteen years, and the designation that made these players major leaguers does not reach it.**

**What to carry forward.** When this course says a club "joined a league," hear it as a firm buying a service: a schedule, a set of rivals, a claim to a championship, and a share of a collective reputation. When it says a league folded, hear it as that service becoming unavailable, usually because the owners stopped paying for it. **The next section asks where the money to pay for anything came from at all.**

:::reveal What does the right-hand column of the seven-league table actually tell you? ||| That the league layer was the fragile part of the industry. Three of the seven lasted a single season and only two ran longer than a decade, so treating "the Negro Leagues" as one continuous institution from 1920 to 1947 deletes the most interesting fact available.

:::reveal In what way is the club-league relationship here the inverse of the one in the American and National Leagues? ||| In those leagues the league is permanent and clubs are its franchises. Here the club was the durable asset and the league was a service it subscribed to when the terms were good, which is why clubs such as the Monarchs, the Grays and the Indianapolis clubs belonged to several leagues or to none.

:::reveal Why is a date between 1932 and 1933 attached to "the Negro National League" a warning sign? ||| Because there were two different companies of that name, the first running 1920 to 1931 and the second 1933 to 1948, separated by a year in which neither existed. A source that blurs them has stopped paying attention.

## Vocabulary
- **League layer**: the organizing company that sells clubs a schedule, rivals and a championship, as distinct from the clubs themselves.
- **Franchise**: a club that exists as a unit of a permanent league, which is the American and National League arrangement and not this one.
- **Market clearing**: the period in which too many competitors collapse until the survivors can support themselves, which is what 1928 to 1933 looks like on this table.
- **Designation span**: the years MLB's 2020 decision covers, 1920 to 1948, which is shorter than the period the leagues actually operated.

## Sources
Baseball Reference. (n.d.). *Negro Leagues data: Frequently asked questions*. https://www.baseball-reference.com/about/negro-leagues-data.shtml

Major League Baseball. (2020, December 16). *MLB officially designates the Negro Leagues as "Major League"*. https://www.mlb.com/press-release/press-release-mlb-officially-designates-the-negro-leagues-as-major-league`,
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Capital
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-the-money-question",
      title: "5 · Where the money came from when banks would not lend",
      section: "Section 2 · Capital",
      body: `*What They Built* asks this question of grocery stores and insurance companies. Ask it of a ballclub and the answer is more uncomfortable and more interesting.

**State the problem the way a lender would.** To field a professional club you need uniforms, equipment, a bus or rail fares, hotel and meal money on the road, a payroll that runs whether it rains or not, and a ballpark. That is working capital before a ticket is sold, in a business that is seasonal, weather-exposed and dependent on somebody else's building. **Capital comes from savings, family, retained profit from another business you own, a loan, or investors.** Take away the loan and the investors, which is what exclusion from the credit system does, and only the first three remain.

**So who had the first three?** The best single answer in the literature is one sentence from Rufus Jackson's widow, interviewed in Pittsburgh in the 1960s, on why numbers bankers owned the clubs: **"Well, of course they were involved, they were the only ones with any money"** (quoted in Goldman, 2021).

**The mechanism, stated plainly.** The numbers game, also called policy, was an illegal daily lottery run out of Black neighborhoods. Newman and Rosen argue that numbers and policy functioned as neighborhood savings and loans, credit unions and investment banks, and that their operators were willing to invest in the Black economy at a time when mainstream banks would not extend credit to African Americans (Newman & Rosen, 2014). **The illegal lottery was the venture capital fund, because the legal one would not take the meeting.**

**Now the complication, from a peer-reviewed source, because a course that stops at the sympathetic version is not teaching.** Japheth Knopp writes that at least two clubs were financed entirely by illegal gaming, that several others may have been, and that some clubs served **as fronts for laundering money**, while these same owners "also claimed to have had a genuine desire to keep their teams afloat" (Knopp, 2016). **Both motives are in the literature. A ballclub is an excellent laundering vehicle precisely because it is a cash business with unauditable attendance. Teach both, and do not pick the flattering one.**

**And the counter-examples that keep the claim honest, because "they were all racketeers" is false.** **Cum Posey's** money was inherited: his father was the first African American licensed as a riverboat engineer, then a barge fleet owner and coal company owner, and ran what SABR calls the largest Black-owned business in Pittsburgh (McKenna, 2012b). **Ed Bolden** ran Hilldale for decades on a **postal clerk's salary**, working 42 years at the Philadelphia post office from 1904 to 1946 while operating the club (Haupert, 2012). **Tom Wilson** filed a corporate charter. **Two of the most durable operations in this history were capitalized by inheritance and by a civil-service paycheck.**

**Why this belongs in a business course rather than a morality one.** Every one of these is an answer to the same question a bank asks: what is your source of funds? When the ordinary answers are closed off, the answers that remain are inheritance, another business you already own, and cash-heavy enterprise both legal and not. **That is not a fact about the character of Black owners. It is a fact about a credit system, and it produces exactly the ownership mix you would predict.**

:::reveal What is the best-sourced explanation of why numbers bankers owned Negro League clubs? ||| Rufus Jackson's widow put it in one sentence to James Overmyer in the 1960s: they were involved because they were the only ones with any money. The scholarly version is that numbers and policy operated as the neighborhood's savings bank and investment fund because mainstream banks would not extend credit.

:::reveal What complication does Knopp's peer-reviewed account add, and why must the course keep it? ||| That some clubs served as fronts for laundering money, alongside owners' claims of a genuine desire to keep the teams afloat. A cash business with unauditable attendance is an excellent laundering vehicle, and a course that reports only the sympathetic motive is not teaching the evidence.

:::reveal Name two owners whose capital did not come from the numbers, and say where it did come from. ||| Cum Posey, from inherited coal and river-shipping money that SABR calls the largest Black-owned business in Pittsburgh. Ed Bolden, from a Philadelphia postal clerk's salary he drew for 42 years while running Hilldale.

## Vocabulary
- **Working capital**: the money a business needs to operate before revenue arrives, which for a ballclub means payroll, travel and rent in advance of the gate.
- **Numbers or policy**: an illegal daily lottery run in Black neighborhoods, whose operators held the largest pools of investable cash available locally.
- **Source of funds**: the question a lender asks about where money originates, and the question that produces this industry's whole ownership pattern.
- **Front**: a legitimate business used to conceal or launder proceeds from an illegal one, which the peer-reviewed literature says some clubs were.

## Sources
Goldman, D. (2021). 1933-1962: The business meetings of Negro League baseball. Society for American Baseball Research. https://sabr.org/journal/article/1933-1962-the-business-meetings-of-negro-league-baseball/

Haupert, M. (2012). *Ed Bolden*. SABR BioProject. https://sabr.org/bioproj/person/ed-bolden/

Knopp, J. (2016). Negro League baseball, Black community, and the socio-economic impact of integration. *Baseball Research Journal*. Society for American Baseball Research. https://sabr.org/journal/article/negro-league-baseball-black-community-and-the-socio-economic-impact-of-integration/

McKenna, B. (2012b). *Cum Posey*. SABR BioProject. https://sabr.org/bioproj/person/Cum-Posey/

Newman, R. J., & Rosen, J. N. (2014). *Black baseball, Black business: Race enterprise and the fate of the segregated dollar*. University Press of Mississippi.`,
    },
    {
      slug: "nl-the-owners-ledger",
      title: "6 · The owners, one by one, with their money named",
      section: "Section 2 · Capital",
      body: `Here is the ownership of Black baseball read as a cap table. Race and source of funds are stated for each, because both are business facts and both are routinely got wrong.

**Gus Greenlee, Pittsburgh Crawfords. Black, numbers.** Identified as mulatto in government documents. About 1926 he and partners bought an illegal lottery business; he also ran the Crawford Grill and managed boxers, including the light-heavyweight champion John Henry Lewis. He bought the Crawfords in 1930, and one SABR estimate has him grossing "probably" between $20,000 and $25,000 a day from numbers in the mid-1930s (McKenna, 2012a; Beer, 2020). **Note the hedge inside the source and keep it.**

**Cum Posey and Rufus Jackson, Homestead Grays. Both Black, two different kinds of money.** Posey's was inherited industrial wealth. In **April 1934** he brought in the numbers banker Rufus "Sonnyman" Jackson, and the two, with their lawyer, **filed articles of incorporation for the Homestead Grays Baseball Club, Inc.** (Carhart, 2015). Jackson's legitimate cover was the Manhattan Music Company, a jukebox business. **A coal heir and a numbers banker incorporating a ballclub together is the whole section in one filing.**

**Effa and Abe Manley, Newark Eagles.** Abe was Black and a numbers banker in Camden. The franchise was awarded in November 1934 (Essington, 2016; Essington, 2019). **Effa Manley's race is genuinely unresolved and this course says so.** SABR records that her biological father was a white man who employed her mother, that most people who met her believed she was African American, that **in a 1977 interview she stated her race was white**, and that she lived within the African American community all her life. The Hall of Fame says she "claimed the Black community as her own." The Negro Leagues Baseball Museum states she was "actually white." Her own line to the *New York Post* in 1975 was "Everything in my life has been Black" (Essington, 2019; National Baseball Hall of Fame, n.d.-a). She became the first woman elected to the Hall of Fame in 2006.

**J. L. Wilkinson and Tom Baird, Kansas City Monarchs. Both white.** SABR states that the two "served as the only two white executives in the league" (Nowlin, 2020). Foster was reluctant to admit a white owner and relented (Young & Faber, 2012). Wilkinson commissioned a **portable lighting system**, first used at Enid, Oklahoma on **28 April 1930**, five years before the major leagues' first night game. **Its cost is not settled: SABR published $50,000 in 1996 and "$100,000 by some accounts" in 2020, and no invoice, loan document or 1930 newspaper is cited by anyone** (Lester, 1996; Nowlin, 2020). Wilkinson sold his shares to Baird in 1948 for **$27,000**.

**Alex Pompez, Cuban Stars and New York Cubans. Afro-Cuban American, numbers.** Born in Key West to Cuban immigrants, per the Hall of Fame, though the Negro Leagues Baseball Museum says Havana. In about 1932 Dutch Schultz took over his operation; Pompez's account is that Schultz "placed a gun on the table," after which Pompez worked as his agent for $250 a month. He was indicted in 1937, fled, was arrested in Mexico City, was extradited, and was granted probation in 1939 after testifying against a Tammany boss (McKenna, n.d.). **He is the one executive from this world who landed well in Organized Baseball, hired as a Giants scout in 1951.**

**Ed Bolden, Hilldale and the Philadelphia Stars. Black, salaried.** Hilldale incorporated in January 1917 with no white investors named. When the white booking agent Nat Strong tried to take Hilldale into his agency in 1917, Bolden refused, saying **"To affiliate ourselves with other than race men would be a mark against our name that could never be eradicated"** (Haupert, 2012). **Six years later he allied with Strong anyway**, and in the Depression he gave the white booking agent Eddie Gottlieb a reported **50 percent** of the Philadelphia Stars for financial backing, saying it was necessary "to trade race for sound finances." **This course does not present that as hypocrisy. It presents it as what a constraint does to a principle.**

**Tom Wilson, Nashville Elite Giants. Black, and the best-documented capitalization in the whole topic.** On **26 March 1920** he incorporated the Nashville Negro Baseball Association and Amusement Company with **an authorized capital stock of $5,000** (Nipper, 2021). **That is a filed corporate figure rather than a press claim, which makes it the most reliable capital number in this course.** He was Negro National League president from 1933 to 1947.

**And two white promoters inside Black baseball.** **Abe Saperstein**, who owned the Harlem Globetrotters, took **5 percent of the East-West All-Star Game gate for publicity until 1941** and co-owned the Birmingham Black Barons with the Black Memphis funeral-home operator Tom Hayes. Black owners objected in print: Pompez and Posey said in the *Pittsburgh Courier* that he was "ridiculing Negro baseball, Negro players and the race in general," and Posey called his organization "'Abe' Saperstein's Protective Association." **The counter-view is also on the record**, from the player Ted "Double Duty" Radcliffe: "He was the greatest friend to the colored athlete of anybody I know" (Society for American Baseball Research, n.d.-a; Powell, n.d.). **Syd Pollock** of the Clowns you met in Section 4.

:::reveal What makes Tom Wilson's $5,000 the most reliable capital figure in this course? ||| It is an authorized capital stock figure inside a filed corporate charter, dated 26 March 1920, rather than a number a promoter gave a newspaper. Almost every other figure in this topic is a press claim repeated by later writers.

:::reveal How does this course treat Ed Bolden's 1917 refusal of Nat Strong and his later partnership with Eddie Gottlieb? ||| Not as hypocrisy. He stated a principle about dealing only with race men, and then in the Depression traded half the Philadelphia Stars for backing he could not otherwise get, saying so plainly. It is a worked example of what a capital constraint does to a stated principle.

:::reveal Why does the course refuse a single figure for Wilkinson's lighting system? ||| Because SABR itself published $50,000 in 1996 and "$100,000 by some accounts" in 2020, its own Wilkinson biography gives no figure at all, and no invoice, loan document or contemporary newspaper is cited by any of them.

## Vocabulary
- **Cap table**: the list of who owns a company and in what proportion, which is the frame this lesson applies to a league.
- **Authorized capital stock**: the maximum share value a chartered company may issue, stated in its filing, as Tom Wilson's $5,000 was.
- **Cover business**: a legitimate enterprise operated alongside an illegal one, such as Rufus Jackson's jukebox company.
- **Trade race for finances**: Bolden's own description of giving a white backer half a club because no Black capital was available.

## Sources
Beer, J. (2020). *Kings of the Hill: The story of the Pittsburgh Crawfords*. Society for American Baseball Research. https://sabr.org/research/article/kings-of-the-hill-the-story-of-the-pittsburgh-crawfords/

Carhart, R. (2015). *Rufus Jackson*. SABR BioProject. https://sabr.org/bioproj/person/rufus-jackson/

Essington, A. (2016). *Abe Manley*. SABR BioProject. https://sabr.org/bioproj/person/abe-manley/

Essington, A. (2019). *Effa Manley*. SABR BioProject. https://sabr.org/bioproj/person/effa-manley/

Haupert, M. (2012). *Ed Bolden*. SABR BioProject. https://sabr.org/bioproj/person/ed-bolden/

Lester, L. (1996). Only the stars come out at night: J.L. Wilkinson and his lighting machine. In *Unions to Royals*. Society for American Baseball Research. https://sabr.org/journal/article/only-the-stars-come-out-at-night-j-l-wilkinson-and-his-lighting-machine/

McKenna, B. (2012a). *Gus Greenlee*. SABR BioProject. https://sabr.org/bioproj/person/gus-greenlee/

McKenna, B. (n.d.). *Alex Pompez*. SABR BioProject. https://sabr.org/bioproj/person/alex-pompez/

National Baseball Hall of Fame. (n.d.-a). *Effa Manley*. https://baseballhall.org/hall-of-famers/manley-effa

Nipper, S. (2021). *Tom Wilson*. SABR BioProject. https://sabr.org/bioproj/person/tom-wilson-3/

Nowlin, B. (2020). *Tom Baird*. SABR BioProject. https://sabr.org/bioproj/person/tom-baird/

Powell, L. (n.d.). *Birmingham Black Barons*. Encyclopedia of Alabama. https://encyclopediaofalabama.org/article/birmingham-black-barons/

Society for American Baseball Research. (n.d.-a). *Abe Saperstein*. SABR BioProject. https://sabr.org/bioproj/person/abe-saperstein/

Young, W., & Faber, C. (2012). *J.L. Wilkinson*. SABR BioProject. https://sabr.org/bioproj/person/j-l-wilkinson/`,
    },
    {
      slug: "nl-what-a-club-owned",
      title: "7 · What a club actually owned, and the parks that were not theirs",
      section: "Section 2 · Capital",
      body: `A firm's balance sheet has an asset side. For most Negro League clubs it was short: uniforms, equipment, a bus, and a set of player contracts. **The item almost none of them had is the one that decides everything, and it is the ballpark.**

**The canonical list, and why you should not repeat it as printed.** A 2003 SABR article names six Black-owned parks: Hilldale Park in Philadelphia, Martin Park in Memphis, Wilson Park in Nashville, Greenlee Field in Pittsburgh, Tate Park in Cleveland, and Dyckman Oval in New York (Miller, 2003). The article's economic logic is exactly right and worth quoting: **"By playing in a black-owned ballpark, the team owners automatically cut down on the number of hands reaching for a piece of the gate."** The list itself does not survive checking. **The article carries no footnotes.**

**Dyckman Oval was leased, not owned.** Most of the tract belonged to James N. Butterly. Alex Pompez took a **three-year lease** and spent **$60,000** erecting fireproof stands, a clubhouse and a beer garden, and installed floodlights in 1935. When the lease expired after 1937 the stands were demolished, and the site became the Dyckman Houses (Costello, 2018). **Pompez sank sixty thousand dollars of numbers money into improvements on ground he did not own, and lost them.** The Hall of Fame's own page overstates it as "his own stadium."

**Hilldale did not own its park either.** SABR records that Hilldale lacked the capital to build a ballpark outright and did it instead through **annual improvements out of the operating budget**, and that Bolden did not renew the **lease** in 1930 (Haupert, 2020). **Black-built and Black-controlled is not the same as Black-owned, and the difference is the entire lesson about undercapitalization.**

**Greenlee Field was one quarter Greenlee's, and its famous cost has no invoice.** Everyone repeats $100,000 and 7,500 seats. Geri Strecker went to the records and wrote the sentence this course cares about most: **"While the building permits only total $40,000, it is still possible that the ballpark cost closer to the $100,000 that Greenlee claimed"** (Strecker, 2009). The park was designed for 6,000. And Greenlee **owned 25 percent of the stock and held no office** in the holding company, whose treasurer was a white brewery owner (Strecker, 2009; Stewart, 2018). **The architect, Louis Arnett Stuart Bellinger, was one of about sixty African American registered architects then working in the United States, and that fact is solid.**

**Two parks widely believed Black-owned were not.** **Hamtramck Stadium** was built by John Roesink, a white haberdasher (Detroit Historical Society, n.d.). **Rickwood Field in Birmingham was never Black-owned**: it was built by A. H. Woodward, "who rented it out to the Black Barons and to white teams in the area," with the Black Barons playing "on alternate Sundays and at other times when the white Barons were not playing at home" (Powell, n.d.). **That last clause is the business point of the whole section. The Black club's home dates were structurally the leftovers of the white club's schedule.**

**What survives the checking.** Wilson Park in Nashville is independently documented: the land cost **$10,000**, with the deed recorded 17 April 1929, though **no construction cost appears anywhere**, so the $10,000 was the dirt (Nipper, 2021). Martin Park and Tate Park could not be independently verified by this course and are therefore not asserted.

**And a pattern nobody teaches.** Greenlee Field became Bedford Dwellings. Dyckman Oval became Dyckman Houses. Schorling Park in Chicago, where Rube Foster's own club played on **no written contract at all** with its white landlord, burned in 1940 and its site became Wentworth Gardens (Carrano, 2021). **Three of Black baseball's ballparks were replaced by public housing projects.** The route courses in this catalog teach the instrument that did that; this course only asks you to notice that these grounds were on its list.

:::reveal What did Geri Strecker find when she checked the famous $100,000 cost of Greenlee Field? ||| Building permits totaling $40,000. She published that alongside the observation that the true cost might still have approached the $100,000 Greenlee claimed, so the honest statement is that the $100,000 is a promoter's claim with $40,000 of documents behind it.

:::reveal Why is "Black-built" different from "Black-owned," and which park shows it? ||| Hilldale Park. Hilldale lacked the capital to build outright and improved a leased ground year by year out of operating budget, then lost it when Bolden did not renew the lease in 1930. Control without title is what undercapitalization looks like on a balance sheet.

:::reveal What did Rickwood Field's scheduling arrangement do to the Black Barons' business? ||| It made their home dates the leftovers of the white club's schedule, alternate Sundays and whenever the white Barons were away. A club that cannot choose its own home dates cannot build a home schedule, which is what pushed the whole industry onto the road.

## Vocabulary
- **Leasehold improvement**: money a tenant spends on a building it does not own, which reverts to the landlord when the lease ends, as Pompez's $60,000 did.
- **Fee ownership**: holding actual title to land and buildings, as distinct from a lease however long.
- **Leftover dates**: the home schedule a tenant club gets after the landlord's own team has taken what it wants.
- **Holding company**: a firm formed to own an asset, such as the Bedford Land Company that owned Greenlee Field with Greenlee holding a quarter of it.

## Sources
Carrano, K. (2021). *Schorling Park (Chicago)*. SABR BioProject Ballparks. https://sabr.org/bioproj/park/schorling-park-chicago/

Costello, R. (2018). *Dyckman Oval (New York)*. SABR BioProject Ballparks. https://sabr.org/bioproj/park/dyckman-oval-new-york/

Detroit Historical Society. (n.d.). *Detroit Stars*. Encyclopedia of Detroit. https://www.detroithistorical.org/learn/online-research/encyclopedia-of-detroit/detroit-stars

Haupert, M. (2020). *Hilldale (Daisies) team ownership history*. Society for American Baseball Research. https://sabr.org/bioproj/topic/hilldale-daisies-team-ownership-history/

Miller, S. J. (2003). Big problems and simple answers: An explanation of the Negro Leagues. *The National Pastime, 23*. Society for American Baseball Research. https://sabr.org/journal/article/big-problems-and-simple-answers-an-explanation-of-the-negro-leagues/

Nipper, S. (2021). *Tom Wilson*. SABR BioProject. https://sabr.org/bioproj/person/tom-wilson-3/

Powell, L. (n.d.). *Birmingham Black Barons*. Encyclopedia of Alabama. https://encyclopediaofalabama.org/article/birmingham-black-barons/

Stewart, W. (2018). *Greenlee Field (Pittsburgh)*. SABR BioProject Ballparks. https://sabr.org/bioproj/park/greenlee-field-pittsburgh/

Strecker, G. D. (2009). The rise and fall of Greenlee Field. *Black Ball: A Negro Leagues Journal, 2*(2). https://sabr.org/journal/article/the-rise-and-fall-of-greenlee-field/`,
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · The gate
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-the-ballpark-problem",
      title: "9 · Renting the House That Ruth Built",
      section: "Section 3 · The gate",
      body: `There is one place in this entire history where we can read the actual books, and it is the landlord's. Use it.

**Why this source is different from every other number in this course.** James Overmyer worked from **the New York Yankees' own cash ledgers and business records**, donated to the National Baseball Hall of Fame in 1955 and 1970, covering 1913 to 1950 (Overmyer, 2014). Almost everything else in this topic is a secondary source citing another secondary source, and a surprising amount traces back to a promoter's press release. **This is an audited primary record, and it changes what you can claim.**

**The terms, and how they moved.** The first Black game at Yankee Stadium was a doubleheader on **5 July 1930**; the Yankees took **$4,243, about 31 percent of the gross gate**. In 1931 the Harlem Stars date paid the Yankees **$687, one third of the gate**. Through the 1930s the arrangement was a flat fee: **$1,000 for one doubleheader, and $2,500 to $3,000 per date** under Greenlee's Negro National League from 1934 to 1938 (Overmyer, 2014).

**Then the structural fix, and it is the lesson.** Before the 1939 season the Negro National League hired the Philadelphia sports figure Eddie Gottlieb as its booking agent for Stadium games, and the Yankees changed the flat rate to **25 percent of gross revenue with a $1,000 minimum** (Overmyer, 2014). **A flat fee is ruinous on a rainy day and cheap on a big one. A percentage transfers the weather risk and the draw risk back to the landlord.** Black promoters paid flat rent for a decade before they won a percentage deal, and they paid a white booking agent to get it.

**Fifteen years of totals, from the ledgers.** Between 1930 and 1944 Black baseball grossed about **$426,000** at Yankee Stadium. The Yankees kept **$114,550**, about 31 percent. The Negro League clubs shared **$254,668**, about 69 percent. Black games at the Stadium averaged **11,600 per date**; dates featuring Satchel Paige averaged about **20,400**, nearly double (Overmyer, 2014). **One player nearly doubled the gate, and he was rented: Paige took a personal fee of $500 for pitching on loan from the Monarchs in 1941.**

**Now stage the audited number against the repeated one.** The unfootnoted 2003 SABR article says "the Yankees in the 1940s were making a reported $100,000 a year off Negro League games" (Miller, 2003). Overmyer's ledgers show **$114,550 across fifteen years**, an average near $7,600. **Put those side by side and you have this course's method in a single comparison. One number was counted. The other was reported.**

**Other landlords, briefly, and note how the terms vary with leverage.** At **Ruppert Stadium** in Newark the Bears took **20 percent** of the Eagles' receipts (Smith, 2020). At **Griffith Stadium** the Senators are reported to have netted **$60,000 from the Grays in 1942** and a **$100,000 profit in 1943**, when the Grays drew **225,000 in 26 games** (Schleppi, 2017). **Read those words carefully: they are the landlord's profit, not the rent, and they reach us through a secondary source citing a book rather than through the Senators' statements.** Twenty percent in Newark against twenty-five to forty at Yankee Stadium is a leverage difference, not a rate card.

**And the conflict of interest nobody mentions.** Clark Griffith was among the loudest opponents of integrating the major leagues, and Black baseball was one of his most profitable tenants. **Integration would cost him a tenant.** That is documented rather than inferred, and it is why his 1945 defense of Negro League contracts has to be read with care.

:::reveal What makes Overmyer's Yankee Stadium figures a different class of evidence from the rest of this topic? ||| They come from the Yankees' own cash ledgers and business records, held at the Hall of Fame, covering 1913 to 1950. Most other figures in this history are secondary sources citing other secondary sources, and many trace back to a promoter's press release.

:::reveal What changed for Negro League clubs at Yankee Stadium in 1939, and why did it matter more than the rate? ||| The Yankees replaced a flat per-date fee with 25 percent of gross revenue and a $1,000 minimum. A flat fee puts all the weather and draw risk on the tenant; a percentage moves it back to the landlord.

:::reveal Set the reported "$100,000 a year" against the ledgers. What is the discrepancy? ||| The ledgers show $114,550 to the Yankees across fifteen years, roughly $7,600 a year on average. The $100,000 figure comes from an unfootnoted article that hedges it as "a reported" number, and it cannot mean Yankee Stadium alone.

## Vocabulary
- **Flat rate rent**: a fixed fee per playing date, owed whatever the crowd or the weather, which is what Black clubs paid at Yankee Stadium through the 1930s.
- **Percentage rent**: rent set as a share of gross receipts, which shifts risk to the landlord and which the leagues obtained in 1939.
- **Gross gate**: the total taken at the door before any deduction, which is the base every percentage in this course is applied to.
- **Evidence class**: how a figure was produced, whether from an audited ledger, a filed charter, a newspaper, or a promoter's claim.

## Sources
Miller, S. J. (2003). Big problems and simple answers: An explanation of the Negro Leagues. *The National Pastime, 23*. Society for American Baseball Research. https://sabr.org/journal/article/big-problems-and-simple-answers-an-explanation-of-the-negro-leagues/

Overmyer, J. (2014). Black baseball at Yankee Stadium: The house that Ruth built and Satchel furnished (with fans). *Black Ball: A Negro Leagues Journal, 7*. https://sabr.org/journal/article/black-baseball-at-yankee-stadium-the-house-that-ruth-built-and-satchel-furnished-with-fans/

Schleppi, J. (2017). *Griffith Stadium (Washington, DC)*. SABR BioProject Ballparks. https://sabr.org/bioproj/park/griffith-stadium-washington-dc/

Smith, C. (2020). *Ruppert Stadium (Newark, NJ)*. SABR BioProject Ballparks. https://sabr.org/bioproj/park/ruppert-stadium-newark/`,
    },
    {
      slug: "nl-the-middlemen",
      title: "10 · The men who took a cut between the turnstile and the owner",
      section: "Section 3 · The gate",
      body: `A booking agent controls access to venues and dates. In this industry the three men who mattered most were all white, and Black owners said so on the record, in league meetings, in print.

**Nat Strong, the East.** Strong held what Overmyer calls a tight grip on non-major-league ballparks in the New York area, and Black operators "had to pay him a slice of gate receipts to get a place to play" (Overmyer, 2016). His rate was **5 to 10 percent of the gate** to book venues such as Yankee Stadium and Ebbets Field (Goldman, 2021). **He also owned the Brooklyn Royal Giants and was a charter owner of the Eastern Colored League.** The man taking a cut of everyone's gate sat on the league's governing commission. He offered Black clubs **flat guarantees of $500 to $600** for his dates (Goldman, 2021).

**Eddie Gottlieb, and the sharpest single fact available.** Gottlieb was the Negro National League's booking agent for Yankee Stadium games from 1939 and **simultaneously a 50 percent owner of the Philadelphia Stars**. Effa Manley denounced his "prohibitive 10 percent of revenues fee," and Cum Posey charged that Strong and Gottlieb were strong-arming clubs "by insisting on 5 percent of the receipts of any league game between Eastern and Western clubs" (Goldman, 2021; Haupert, 2012). **A white booking agent co-owned a league club and took a percentage off the top of his rivals' gates, and the Black owners put it in the minutes.**

**Abe Saperstein, the Midwest.** He took **5 percent of the East-West All-Star Game gate for publicity until 1941** and co-owned the Birmingham Black Barons (Society for American Baseball Research, n.d.-a). **Why would Black owners take him on at all?** Because access is a service. That is the honest answer, and it is the same answer Bolden gave about Strong: the man's grip on the market made it necessary to do business.

**Now add the slices up on one date at Yankee Stadium, using only figures verified earlier in this course.** The landlord takes **25 to 40 percent**. The booking agent takes **5 to 10 percent**. The visiting club takes about **35 percent** of gross under the second Negro National League's terms, and the league office takes **5 percent** (Overmyer, 2014; Goldman, 2021). **Four hands reach into the gate before the home club's owner sees a dollar, and two of those hands are on people who do not work for him.**

**Why this is the section that explains the industry rather than a list of villains.** Every one of these cuts is the price of an input the club could not supply itself: a building, access to dates, an opponent, and a championship to play for. **A firm that owns none of its inputs pays rent on all of them.** Section 2 showed you why they could not buy the building. This lesson shows you what that costs every single time the turnstiles turn.

**And keep the counter-evidence in view.** Ted "Double Duty" Radcliffe said of Saperstein, "He was the greatest friend to the colored athlete of anybody I know," and that is on the record alongside Posey's and Pompez's attacks (Society for American Baseball Research, n.d.-a). **A middleman who extracts rent and opens a market is doing both things at once, which is exactly why the owners argued about him for twenty years instead of agreeing.**

:::reveal Which single fact about Eddie Gottlieb best captures the booking-agent problem? ||| He was the Negro National League's booking agent for Yankee Stadium dates from 1939 while simultaneously owning half of the Philadelphia Stars, and took a percentage off the top of rival clubs' gates. Effa Manley and Cum Posey both objected in league business on the record.

:::reveal Add up the claims on one league gate at Yankee Stadium under the second Negro National League. ||| Landlord 25 to 40 percent, booking agent 5 to 10 percent, visiting club about 35 percent of gross, league office 5 percent. Four parties are paid before the home club's owner sees anything.

:::reveal Why does this course insist the booking agents were selling something real? ||| Because every cut was the price of an input the club could not supply itself: the building, access to dates, an opponent and a championship. A firm that owns none of its inputs pays rent on all of them, which is the consequence of the capital problem in Section 2.

## Vocabulary
- **Booking agent**: a middleman who controls access to venues and dates and charges a percentage for arranging them.
- **Guarantee**: a fixed sum promised to a visiting club regardless of the crowd, which Nat Strong offered at $500 to $600 a date.
- **Off the top**: taken from gross receipts before any other party is paid, which is where an agent's percentage sits.
- **Input**: something a business must have to operate, which it either owns or rents, and which here included the ballpark itself.

## Sources
Goldman, D. (2021). 1933-1962: The business meetings of Negro League baseball. Society for American Baseball Research. https://sabr.org/journal/article/1933-1962-the-business-meetings-of-negro-league-baseball/

Haupert, M. (2012). *Ed Bolden*. SABR BioProject. https://sabr.org/bioproj/person/ed-bolden/

Overmyer, J. (2014). Black baseball at Yankee Stadium: The house that Ruth built and Satchel furnished (with fans). *Black Ball: A Negro Leagues Journal, 7*. https://sabr.org/journal/article/black-baseball-at-yankee-stadium-the-house-that-ruth-built-and-satchel-furnished-with-fans/

Overmyer, J. (2016). 1923-29 winter meetings: The Negro Leagues come east. Society for American Baseball Research. https://sabr.org/journal/article/1923-1929-eastern-colored-league-winter-meetings/

Society for American Baseball Research. (n.d.-a). *Abe Saperstein*. SABR BioProject. https://sabr.org/bioproj/person/abe-saperstein/`,
    },
    {
      slug: "nl-the-road-and-the-press",
      title: "11 · The road was the business, and the newspaper was the infrastructure",
      section: "Section 3 · The gate",
      body: `If you remember one thing from this course, make it this: **the leagues were not the business. The road was.**

**The arithmetic.** Official league games in the Negro Leagues **never totaled more than 99** in a season, against 154 in the American and National Leagues. The 1945 pennant-winning Homestead Grays played **45 league games**. And it was rare for a major Black club to play **fewer than 200 games** in a year (Miller, 2003). **So somewhere between a fifth and a half of a club's schedule was the league, and the rest was the actual company.**

**The hardest evidence that the road paid better is a league that died of it.** Cum Posey organized the **East-West League** in January 1932. Its clubs "soon abandoned the planned schedule and turned to better paying bookings with white semipro teams," and the league collapsed **inside two months** (East-West League, n.d.). **A whole league was killed by its own members preferring outside dates. That is not an anecdote; it is a measurement.**

**And the founding constitution had made it legitimate from day one**, expressly permitting non-league games to boost gate receipts (Bauer, 2022). **The standings were a product the league sold. They were never the company's revenue.**

**The one date that was bigger than any league game.** The **East-West All-Star Game** was first played on **10 September 1933 at Comiskey Park** and ran, at various venues, through **26 August 1962** (Retrosheet, n.d.). Verified attendance: **47,865 paid in 1941**, **51,723 in 1943** as the record, 45,474 in 1946, **48,112 in 1947**, and **24,614 in 1950** (Society for American Baseball Research, n.d.-b). Overmyer puts the run's average near 36,500.

**Follow that money, because it is the whole course in one afternoon.** Gus Greenlee personally put **$2,500 on the line weeks in advance** for what every source calls the exorbitant rental of Comiskey Park, a white-owned building. Abe Saperstein took 5 percent of the gate for publicity. And a 1935 league resolution records that **in 1934 only ten percent of the net reached the league's own treasury** (Goldman, n.d.; Society for American Baseball Research, n.d.-a). **Black baseball's biggest annual payday paid a white landlord in advance, a white promoter off the top, and its own league last.**

**One number this course will not give you: what the players were paid for it.** The commonly repeated $50 or $100 has no source this course could find. **What is documented is the umpires' fee.** Fred McCrary received **$10 and expenses** per East-West game from 1938 to 1944, and when he asked for more, the owners said the umpire was not important (Heaphy, 2017).

**Now the press, which was not a spectator.** Four Black sportswriters drafted the 1920 constitution. Foster launched the league through a *Chicago Defender* column series in the winter of 1919 to 1920. The second Negro National League was announced in the *Pittsburgh Courier*'s year-end 1932 edition by a writer who then became its secretary. *Courier* writer **Rollo Wilson was made league commissioner in 1934**. The *Chicago Defender*'s sports editor **Al Monroe became the Negro American League's secretary in 1936**. And Cum Posey's father was **one of the original investors in the *Pittsburgh Courier*** (Bauer, 2022; Goldman, 2021; McKenna, 2012b).

**Say what that means without flinching.** The same men who wrote the league's constitution, announced its formation, chose its all-stars by printing ballots and reported its results also served as its commissioner, its secretary and, in one family's case, its financiers. **This is not a scandal to expose. It is what institution-building looks like when a community has to supply every function itself. But a course that presents the Black press purely as a watchdog is teaching something false.** The counterweight is also documented: the same press turned on the Black owners during integration, and you will meet that in Section 5.

:::reveal Give the arithmetic that shows the league was not the business. ||| League games never exceeded 99 in a season and could be as few as 45, while a major club rarely played fewer than 200 games a year. Between half and four fifths of the schedule was outside the league.

:::reveal What happened to the East-West League in 1932, and why is it the strongest evidence in this section? ||| It collapsed within two months of opening because its own member clubs abandoned the schedule for better paying bookings against white semipro teams. A league died of the preference, which is a measurement rather than an anecdote.

:::reveal Trace the money at the East-West All-Star Game. ||| Greenlee paid $2,500 in advance, personally, to rent white-owned Comiskey Park; Saperstein took 5 percent of the gate for publicity; and a league resolution records that in 1934 only ten percent of the net reached the league treasury.

:::reveal Why does this course refuse to say what East-West players were paid? ||| Because the commonly repeated $50 or $100 has no locatable source. What is documented is that umpire Fred McCrary got $10 and expenses per game from 1938 to 1944, and was told the umpire was not important when he asked for more.

## Vocabulary
- **Barnstorming**: playing outside any league schedule for a negotiated share of the crowd, which was most of what these clubs actually did.
- **Semipro**: a club whose players are paid but not full time, and whose bookings outpaid league games badly enough to kill a league in 1932.
- **Advance rental**: rent paid before the event, which is what Greenlee put up personally for Comiskey Park.
- **Institution-building**: a community supplying every function of an industry itself, which is why the same men wrote, governed and reported on this league.

## Sources
Bauer, J. (2022). We are the ship, all else the sea: The founding of the Negro National League. Society for American Baseball Research. https://sabr.org/research/article/we-are-the-ship-all-else-the-sea-the-founding-of-the-negro-national-league/

*East-West League*. (n.d.). Wikipedia. https://en.wikipedia.org/wiki/East%E2%80%93West_League

Goldman, D. (n.d.). *Gus Greenlee and the East-West All-Star Game: Origins and conflict (1932-1944)*. Society for American Baseball Research. https://sabr.org/research/article/gus-greenlee-and-the-east-west-all-star-game-origins-and-conflict-1932-1944/

Goldman, D. (2021). 1933-1962: The business meetings of Negro League baseball. Society for American Baseball Research. https://sabr.org/journal/article/1933-1962-the-business-meetings-of-negro-league-baseball/

Heaphy, L. (2017). Umpires in the Negro Leagues. In *The SABR book on umpires and umpiring*. Society for American Baseball Research. https://sabr.org/journal/article/umpires-in-the-negro-leagues/

McKenna, B. (2012b). *Cum Posey*. SABR BioProject. https://sabr.org/bioproj/person/Cum-Posey/

Miller, S. J. (2003). Big problems and simple answers: An explanation of the Negro Leagues. *The National Pastime, 23*. Society for American Baseball Research. https://sabr.org/journal/article/big-problems-and-simple-answers-an-explanation-of-the-negro-leagues/

Retrosheet. (n.d.). *East-West game log*. https://retrosheet.org/NegroLeagues/EastWest.html

Society for American Baseball Research. (n.d.-a). *Abe Saperstein*. SABR BioProject. https://sabr.org/bioproj/person/abe-saperstein/

Society for American Baseball Research. (n.d.-b). *Negro League baseball at Comiskey Park: The East-West game, an all-star legacy*. https://sabr.org/research/article/negro-baseball-at-comiskey-park-the-east-west-game-an-all-star-legacy/`,
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Indianapolis
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-abcs",
      title: "13 · The Indianapolis ABCs, read as a company",
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
      title: "14 · The ground they rented, and the clubhouse on Indiana Avenue",
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
      title: "15 · The Indianapolis Clowns: what a league seat cost",
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
    {
      slug: "nl-quiz-indianapolis",
      title: "16 · Knowledge check: Indianapolis",
      section: "Section 4 · Indianapolis",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In what year does the Encyclopedia of Indianapolis date the founding of the Indianapolis ABCs?",
            options: ["1907", "1902, when a short-lived Indianapolis Colored Base Ball League ran for about eight games", "1912, the year Thomas Bowser bought the club from its founder", "1920, when the club became a charter member of the Negro National League"],
            correctIndex: 0,
            explanation: "Credited to Randolph 'Ran' Butler, a Black saloon keeper. Clubs using the name appear earlier, which is why the 1907 date is best read as the founding of the professionalized club.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Who does the Encyclopedia of Indianapolis credit with organizing the ABCs?",
            options: ["Randolph 'Ran' Butler, a Black saloon keeper", "Thomas Bowser, a white businessman who later co-owned the club with C. I. Taylor", "Charles Isham Taylor, who arrived from West Baden and managed the team", "Warner Jewell, a Black businessman who ran an Indianapolis pool hall"],
            correctIndex: 0,
            explanation: "Butler's trade matters to the naming argument: a saloon keeper is exactly the person a brewery would sponsor.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What is the majority account of what the letters in the ABCs' name stood for?",
            options: ["The American Brewing Company", "The initials of three club principals named Abrams, Butler and Conoyer", "A ranking system used by Indianapolis amateur clubs before professionalization", "The Association of Black Clubs, an early booking cooperative in the Midwest"],
            correctIndex: 0,
            explanation: "The Encyclopedia of Indianapolis reports the club as a marketing effort for that brewery. It is the majority account and not the only one.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What is the rival account of the ABCs' name?",
            options: ["The initials of three club principals", "That a Chicago Defender sportswriter coined it as a nickname for the club's disciplined play", "That the letters ranked the club above two earlier Indianapolis teams", "That the American Brewing Company demanded the name as a condition of its money"],
            correctIndex: 0,
            explanation: "George Abrams, Ran Butler and a co-manager named Conoyer. The course reports both readings and picks neither.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Why does the club's own historian hedge even the brewery reading?",
            options: ["A sponsor can attach to a name that already exists", "Because no American Brewing Company records from the period are known to survive anywhere", "Because Butler's saloon sold a competing brand and could not have taken the money", "Because the earliest surviving box scores spell the club's name three different ways"],
            correctIndex: 0,
            explanation: "Paul Debono's point is about the direction of the evidence. A sponsorship name proves a relationship, not which came first.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Who bought the ABCs in 1912, and what does the course want you to notice about him?",
            options: ["Thomas Bowser, who was white", "Warner Jewell, who was Black and also owned an Indianapolis pool hall", "C. I. Taylor, who had run the West Baden Sprudels in southern Indiana", "Olivia Taylor, who is reported as the first woman to own a Negro League club"],
            correctIndex: 0,
            explanation: "The Encyclopedia of Indianapolis calls him a white businessman. The widely repeated 'bail bondsman' occupation could not be confirmed and the course does not use it.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What did C. I. Taylor acquire in 1914?",
            options: ["A half interest in the club", "Outright ownership, after buying Thomas Bowser out of the business entirely", "A booking contract giving him the club's dates without any equity in it", "A lease on Washington Park that included use of the players' locker rooms"],
            correctIndex: 0,
            explanation: "He also became manager, which made the club a partnership between a white owner and a Black owner-operator.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Where had C. I. Taylor come from when he joined the ABCs?",
            options: ["West Baden, Indiana", "Kansas City, where he had helped organize the league's founding meeting", "Pittsburgh, where he had run a nightclub alongside a ballclub", "Chicago, after several seasons managing the American Giants for Rube Foster"],
            correctIndex: 0,
            explanation: "He had run the West Baden Sprudels there before coming north to Indianapolis.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What happened to the ABCs in 1916?",
            options: ["Two rival clubs both used the name", "The club was expelled from its league for refusing to honor a scheduled series", "The club moved to Chicago and played the season as a tenant of Rube Foster", "The club stopped playing entirely after its ballpark was demolished mid-season"],
            correctIndex: 0,
            explanation: "Bowser and Taylor fell out, and the partnership split the business in two. Taylor kept the better players.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Who bought Bowser's half of the split, and what does the course say that direction of sale shows?",
            options: ["Warner Jewell, a Black businessman", "The American Brewing Company, which took direct control of the club it had sponsored", "The Indianapolis Indians, who wanted a tenant for the ballpark they controlled", "Rube Foster's Chicago American Giants, who ran it as a farm club for two seasons"],
            correctIndex: 0,
            explanation: "A white owner selling out to a Black owner is the direction this course keeps finding, and here it happened to the losing half of a split.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What did C. I. Taylor require of his players when they were not in uniform?",
            options: ["Collars, ties and shined shoes", "A written agreement not to play barnstorming dates against clubs outside the league", "Attendance at a weekly meeting held at the club's Indiana Avenue premises", "That they lodge with Black families in each city rather than at commercial hotels"],
            correctIndex: 0,
            explanation: "His stated theory was that bearing and gentlemanly play would move white opinion toward recognizing Black baseball's merits. Read it as a decision about brand reputation in a market he needed and did not control.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What happened in an exhibition game in October 1915 that cut against Taylor's policy?",
            options: ["Oscar Charleston punched a white umpire", "The ABCs walked off the field over a disputed forfeit and lost the gate receipts", "A white club refused to take the field, and the promoter kept the entire guarantee", "Taylor was ejected for arguing and was suspended for the rest of the exhibition season"],
            correctIndex: 0,
            explanation: "Taylor issued a public apology for his 'hotheaded' center fielder, which is what a reputational asset costs when it misbehaves.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What is Oscar Charleston's connection to Indianapolis?",
            options: ["He was born there", "He bought a controlling interest in the ABCs after C. I. Taylor's death in 1922", "He served on the committee that installed the Washington Park historical marker", "He was the Indianapolis Recorder's baseball writer before he became a player"],
            correctIndex: 0,
            explanation: "He began his ABCs career in 1915 and left for the Eastern Colored League in the exodus that followed Taylor's death.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Where was the first game of the Negro National League played?",
            options: ["Indianapolis", "Kansas City, at the ballpark nearest the hotel where the league had been organized", "Chicago, at the park controlled by the league's own president and founder", "Pittsburgh, on the only Black-owned ballpark in the league at the time"],
            correctIndex: 0,
            explanation: "At Washington Park, on 2 May 1920, with the ABCs beating the Chicago Giants. It is the best-documented fact in the Indianapolis story.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "On what date was the Negro National League's first game played?",
            options: ["2 May 1920", "19 April 1905, the day the Indianapolis Indians dedicated Washington Park", "23 February 1922, the day C. I. Taylor died in Indianapolis", "5 September 1931, the day Perry Stadium opened on West 16th Street"],
            correctIndex: 0,
            explanation: "The date appears both in the Encyclopedia of Indianapolis and on a state historical marker at the site.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Whom did the ABCs beat in that first Negro National League game?",
            options: ["The Chicago Giants", "The Chicago American Giants, the club Rube Foster owned and managed himself", "The Kansas City Monarchs, in the league's only opening-day meeting of charter clubs", "The Homestead Grays, who were not yet members but agreed to play the date"],
            correctIndex: 0,
            explanation: "Joe Green's club, distinct from Foster's American Giants. The Encyclopedia of Indianapolis calls them the Chicago (Union) Giants and the historical marker calls them the Chicago Giants.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What crowd and score does the Encyclopedia of Indianapolis record for that game?",
            options: ["6,000, and a 4 to 2 win", "14,500 in a park that had just been built to hold exactly that many", "About 10,000, with the score never recorded in any surviving account", "6,000, with the game called after seven innings and no official result"],
            correctIndex: 0,
            explanation: "Both figures come from that one institutional page, which is worth noting when you cite them.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Who installed the historical marker that carries the 1920 first-game date?",
            options: ["The Indiana Historical Bureau and SABR", "The Negro Leagues Baseball Museum, working with the Indianapolis Indians", "Major League Baseball, as part of the December 2020 reclassification announcement", "The National Park Service, when Bush Stadium entered the National Register"],
            correctIndex: 0,
            explanation: "Jointly with SABR's Negro Leagues Research Committee, which is why its sourcing is unusually good: the marker's annotated text carries ten numbered citations.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "When did C. I. Taylor die?",
            options: ["23 February 1922", "In the autumn of 1926, the year the franchise finally folded", "In 1924, during the exodus of players to the Eastern Colored League", "In 1914, shortly after buying his half interest in the club"],
            correctIndex: 0,
            explanation: "He had attended the league's February winter meetings in Chicago and fell ill on returning to Indianapolis.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Who took ownership of the ABCs after C. I. Taylor's death?",
            options: ["Olivia Taylor, his wife", "Ben Taylor, his brother, who had been the club's first baseman for years", "Warner Jewell, who reunited the two halves of the club under one owner", "The Negro National League office, which operated the club until a buyer was found"],
            correctIndex: 0,
            explanation: "She is reported as the first woman to own a Negro League club. Ben Taylor took over as manager rather than as owner.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Where did the ABCs' players go after 1922?",
            options: ["The Eastern Colored League", "The Negro Southern League, which had just been organized as a lower-cost circuit", "Independent Cuban clubs, which paid in dollars and played a longer winter schedule", "The Chicago American Giants, whose owner bought their contracts as a block"],
            correctIndex: 0,
            explanation: "Oscar Charleston was among them. Two leagues bidding for the same players is a labor market with two buyers, which is hard on the weaker one.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What was the ABCs' record in 1922, according to the Seamheads database?",
            options: ["63 wins, 42 losses and 2 ties", "16 wins and 55 losses, the collapse that followed the owner's death", "462 wins and 481 losses, which is the club's whole franchise line", "98 games played with a full box score surviving for every one of them"],
            correctIndex: 0,
            explanation: "The club's best season on the field was the year C. I. Taylor died in February.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What was the ABCs' record in 1925, according to the Seamheads database?",
            options: ["16 wins and 55 losses", "63 wins, 42 losses and 2 ties, the best line the franchise ever posted", "A season abandoned in mid-summer when the club could not meet payroll", "No games at all, because the franchise had already folded the previous autumn"],
            correctIndex: 0,
            explanation: "Three seasons after the .600 mark. The collapse tracks the loss of the owner-operator and the talent that left with him.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "When did the ABCs franchise fold?",
            options: ["1926", "1931, the year Washington Park closed at the end of the season", "1922, immediately after C. I. Taylor's death in February of that year", "1948, when the Negro National League ended and its clubs dispersed"],
            correctIndex: 0,
            explanation: "Later clubs used the ABCs name in the 1930s, but they were different businesses reusing a brand, which is itself a finding about what the name was worth.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What does this course mean by an owner-operator?",
            options: ["An owner who also runs the business day to day", "An owner who holds equity in the league office as well as in a single club", "An owner who controls the ballpark the club plays in as well as the club itself", "A manager given a share of profits in place of a salary he could not be paid"],
            correctIndex: 0,
            explanation: "C. I. Taylor was one, which is why his death in 1922 was a business event and not only a personal one.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What is a franchise record, as this course uses the term?",
            options: ["A club's cumulative line as one database reconstructs it", "The official win-loss total certified by the league office at each season's close", "The complete record of every game a club played, league and barnstorming alike", "A club's best single season, held up as the standard the rest are measured against"],
            correctIndex: 0,
            explanation: "It is a statement about documented league games, not about every game the club played, which matters enormously on this subject.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What is a charter member?",
            options: ["A club present at a league's founding", "A club that has paid its dues in full for at least three consecutive seasons", "A club given a permanent seat that cannot be revoked by a vote of the others", "A club whose owner also holds an office in the league's administration"],
            correctIndex: 0,
            explanation: "For the ABCs it meant a seat at the table in 1920 and the league's first home date.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Why does the course call the ABCs' name a problem in business history rather than a trivia question?",
            options: ["A sponsorship name does not fix the direction of the relationship", "Because the brewery's records were destroyed and the question can never be settled at all", "Because two competing clubs used the name at the same time in the same city", "Because the name was changed three times in the club's first decade of operation"],
            correctIndex: 0,
            explanation: "The name proves that a relationship existed. It does not prove which came first, which is the ordinary evidentiary problem underneath.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "What is the course's verdict on the ABCs' 1922 to 1925 collapse?",
            options: ["It tracks the loss of the owner-operator and the talent that followed", "That the Eastern Colored League deliberately targeted the club to destroy a rival", "That the club never recovered from losing access to Federal League Park in 1916", "That a woman owner was refused credit by the banks the club had always used"],
            correctIndex: 0,
            explanation: "The 1922 record of 63-42-2 against the 1925 record of 16-55 is the strongest quantitative evidence available, and it starts in the year Taylor died.",
            sourceLessonSlug: "nl-abcs",
          },
          {
            prompt: "Where was Northwestern Park?",
            options: ["Northwest of West 17th Street and Northwestern Boulevard", "At Kentucky and River Avenues, on ground left behind by a collapsed white league", "At 1200 West Washington Street, on the site now near the Indianapolis Zoo", "At 1501 West 16th Street, where the Art Deco stadium still stands as apartments"],
            correctIndex: 0,
            explanation: "A wooden ballpark in the city's Black community, on the street now called Martin Luther King Jr. Boulevard.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What was Federal League Park, and where did the ABCs get it?",
            options: ["Ground left behind by a collapsed white league", "A park the club built for itself with money raised on Indiana Avenue", "A municipal field the city leased to any club that applied for dates", "A minor league park the Indianapolis Indians sublet during their road trips"],
            correctIndex: 0,
            explanation: "At Kentucky and River Avenues. The ABCs used it after 1915, which is a reminder that a Black club's best chance at a park was often another league's failure.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What did the demolition of Federal League Park do to the rival ABC club?",
            options: ["It wrecked the business", "It forced a merger with C. I. Taylor's club before the following season opened", "It cost the club its share of a lease it had been paying half of since 1915", "It pushed the club out of Indianapolis to Detroit, where it played two more seasons"],
            correctIndex: 0,
            explanation: "Two ABC clubs were left competing for two remaining fields, and the Encyclopedia of Indianapolis calls the result disastrous for Jewell's team. A competitor destroyed by losing venue access rather than talent is a lesson in what a lease is.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "Why does the course refuse to give a year for Federal League Park's demolition?",
            options: ["Sources give both 1916 and 1917 and the difference is unsettled", "Because the park was dismantled in stages over three separate seasons", "Because no source names the park at all outside a single encyclopedia entry", "Because the demolition date is disputed between the city and the county records"],
            correctIndex: 0,
            explanation: "The teachable point survives either way: losing the venue, not losing players, is what wrecked the rival club.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "From whom did C. I. Taylor lease Washington Park?",
            options: ["The Indianapolis Indians", "The City of Indianapolis, which owned the ground and set a flat per-date rate", "The Negro National League office, which held the lease for all its western clubs", "The American Brewing Company, which had bought the park as an investment"],
            correctIndex: 0,
            explanation: "The white minor league club that controlled the park, on an occasional basis rather than as a full-season tenant.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What did the Washington Park lease deny the ABCs?",
            options: ["Use of the locker rooms", "Any date on a Sunday, which was the only day a working crowd could attend", "The right to sell their own concessions inside the park on their own dates", "More than four home dates in any single month of the playing season"],
            correctIndex: 0,
            explanation: "That single refusal is what generated the rest of this lesson.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What did C. I. Taylor do about the locker-room refusal?",
            options: ["He built changing space into his own Indiana Avenue business", "He negotiated a lower rent in exchange for accepting the exclusion permanently", "He moved the club's home dates back to Northwestern Park for the rest of the decade", "He filed a complaint with the league office, which raised it with the Indians' owners"],
            correctIndex: 0,
            explanation: "The club internalized a function a supplier refused to provide. That is the whole argument of this section in one move.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What did Taylor make of the walk from the Avenue to the ballpark?",
            options: ["Parades with cars, bands and civic groups", "A ticketed procession that raised additional money for the club on game days", "A quiet route chosen to avoid the white neighborhoods between the two points", "A weekly recruitment drive aimed at boys who might sign with the club later"],
            correctIndex: 0,
            explanation: "Thirty men in uniform moving through a commercial district is advertising the club did not have to buy. Exclusion generated infrastructure, and the infrastructure sat on Indiana Avenue.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "When did Perry Stadium open?",
            options: ["5 September 1931", "19 April 1905, when the Indianapolis Indians dedicated their first home ground", "In 1942, when a fan vote settled on the name it would carry for 25 years", "11 July 1996, in White River State Park on the west edge of downtown"],
            correctIndex: 0,
            explanation: "At 1501 West 16th Street, the same season Washington Park closed.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What did Perry Stadium cost, and how many did it seat?",
            options: ["$350,000, seating 14,500", "$13 million, seating the 138 households that live in it today", "$10,000, which is the same figure commonly reported for a player contract", "About $1, which is what a developer later paid for the abandoned building"],
            correctIndex: 0,
            explanation: "Those are the Encyclopedia of Indianapolis figures for the 1931 construction.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "How did Perry Stadium come to be called Victory Field in 1942?",
            options: ["A fan vote", "A wartime order from the federal government renaming publicly used stadiums", "A payment from a war-bond campaign that bought the naming rights for the duration", "A vote of the Negro American League clubs that rented the park for home dates"],
            correctIndex: 0,
            explanation: "It became Bush Stadium on 30 August 1967. The 1942 to 1967 Victory Field is not the Victory Field standing today.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "Which club rented the 1931 stadium from 1944 to 1962?",
            options: ["The Indianapolis Clowns", "The Indianapolis ABCs, who returned to the city after folding in 1926", "The Chicago American Giants, who used it for their western road swing", "The Homestead Grays, who split home dates between Pittsburgh and Indianapolis"],
            correctIndex: 0,
            explanation: "Negro League clubs rented that stadium rather than owning it, which is the pattern throughout this course.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What happened to the 1931 stadium building?",
            options: ["It became apartments, opening as Stadium Lofts in 2013", "It was demolished in 1996 when the new Victory Field opened downtown", "It was bought by the Negro Leagues Baseball Museum and reopened as an exhibit", "It sat empty until the National Park Service acquired it as a historic site"],
            correctIndex: 0,
            explanation: "138 units, with the Art Deco entrance preserved and the diamond reused as green space.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "Why did Madam C. J. Walker move her operation to Indianapolis in February 1910?",
            options: ["The Indiana Avenue business community and rail access at Union Station", "Because Indianapolis was the only city that would charter a company she controlled", "Because the ABCs' owners offered her a stake in the club and a place on the board", "Because a fire had destroyed her previous premises and the insurance paid out there"],
            correctIndex: 0,
            explanation: "Rail access mattered because the business was mail order. It is a logistics decision, which is exactly the kind of fact this course wants.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "When was the Walker Building on Indiana Avenue completed?",
            options: ["December 1927", "1911, the year the Walker company was incorporated in Indiana", "1919, the year Madam C. J. Walker died and the company passed to her daughter", "1980, when the building was listed on the National Register of Historic Places"],
            correctIndex: 0,
            explanation: "At 617 Indiana Avenue, eight years after Madam Walker's death in May 1919.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What commercial relationship between the Walker company and the Indianapolis ABCs could this course document?",
            options: ["None", "A sponsorship that paid for the club's uniforms and travel in the 1910s", "An advertising contract in the Indianapolis Recorder tied to the club's home dates", "A minority stake held by the company's general manager on the company's behalf"],
            correctIndex: 0,
            explanation: "No sponsorship, no investment, no advertising tie could be established. The one sourced connection is that Walker attended many ABCs games, and her death in May 1919 bounds even that.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What is the real, documented link between Indiana Avenue commerce and the ballclub?",
            options: ["Taylor's own Avenue premises served as the clubhouse", "The Walker company bought a block of season tickets for its sales agents each year", "The Indianapolis Recorder owned a minority share in the club from 1914 onward", "Avenue merchants jointly guaranteed the club's rent at Washington Park each season"],
            correctIndex: 0,
            explanation: "It is better history than a sponsorship would have been, because it is causal rather than decorative: a refusal at the park produced a facility on the Avenue.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "Why does the course say Walker's attendance at ABCs games is a bounded claim?",
            options: ["She died in May 1919", "Because only one game is named in any surviving source", "Because the source that carries it is an encyclopedia rather than a newspaper", "Because Washington Park did not admit Black spectators before the 1920s"],
            correctIndex: 0,
            explanation: "That places her attendance before the Negro National League existed and inside a narrow window of the club's Washington Park era.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What does this course mean by internalizing a function?",
            options: ["Bringing in-house a service a supplier refused to provide", "Buying a supplier outright rather than continuing to contract with it", "Moving a business activity from the club to the league office to save money", "Replacing a paid service with volunteer labor drawn from the club's own fans"],
            correctIndex: 0,
            explanation: "Taylor's Avenue clubhouse is the example: the locker room was refused, so the club built one.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What is adaptive reuse?",
            options: ["Converting a building to a new purpose rather than demolishing it", "Renting a ballpark to several clubs in the same season to spread the fixed cost", "Rebuilding a ballpark on the same footprint after the original burns or collapses", "Selling a building's name to a sponsor while continuing to operate it unchanged"],
            correctIndex: 0,
            explanation: "The 1931 stadium became 138 apartments in 2013, keeping the Art Deco entrance and the field as green space.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "How many ballparks did the ABCs use across the period this lesson covers?",
            options: ["Four", "One, which they owned outright from the club's founding onward", "Two, both of them leased from the same white minor league club", "Seven, one for almost every season between 1907 and 1926"],
            correctIndex: 0,
            explanation: "Northwestern Park, Federal League Park, Washington Park and the 1931 stadium. Only the first was really theirs.",
            sourceLessonSlug: "nl-avenue-and-the-ground",
          },
          {
            prompt: "What did Syd Pollock own between 1926 and 1936?",
            options: ["A barnstorming club of mostly Cuban players", "The Miami Giants, which he had founded with the bootlegger Johnny Pierce", "A theater circuit in New York that booked baseball clubs between film showings", "A half interest in the Negro American League's booking and scheduling office"],
            correctIndex: 0,
            explanation: "First the Havana Red Sox, where he experimented with blending comedy and shadow-ball exhibitions into competitive play.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What does the Havana Red Sox period tell you about the Clowns' comedy act?",
            options: ["It arrived fully developed from another venture", "That it was invented in Indianapolis to compete with the Harlem Globetrotters", "That Cuban players demanded it as a condition of touring the American South", "That the Negro American League required it of any club seeking a franchise"],
            correctIndex: 0,
            explanation: "Pollock had run the format for a decade before he had anything to do with the Clowns. It was a proven product line, not an improvisation.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "When did Syd Pollock take a controlling stake in the Clowns?",
            options: ["1937", "1943, the year the club was admitted to the Negro American League", "1926, when he acquired the Havana Red Sox and renamed them", "1955, when he sold a partnership in the club to Ed Hamman"],
            correctIndex: 0,
            explanation: "He had been booking games for the Miami Ethiopian Clowns since about 1936.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "Where were the Clowns founded, and under what name?",
            options: ["Miami, as the Miami Giants", "Cincinnati, as the Cincinnati Clowns, before moving on to Indianapolis", "Indianapolis, as the Indianapolis Clowns, by a group of Indiana Avenue merchants", "Harlem, as a baseball counterpart to the Renaissance basketball club"],
            correctIndex: 0,
            explanation: "Financed by Johnny Pierce, a Miami bootlegger, and renamed the Ethiopian Clowns before his death.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "In what order did the Clowns take their cities?",
            options: ["Miami, then Cincinnati, then Indianapolis", "Indianapolis first, then Cincinnati, and finally back to Indianapolis in 1946", "Harlem, then Chicago, then Indianapolis, following the Globetrotters' route", "Miami, then Havana, then Indianapolis, following the club's Cuban players"],
            correctIndex: 0,
            explanation: "Cincinnati in 1942, Indianapolis before the 1944 season as the Cincinnati-Indianapolis Clowns, and fully Indianapolis in 1946.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What does a club changing city four times in a decade tell you about its revenue?",
            options: ["That it did not come from a hometown", "That the club could not meet its rent obligations in any single ballpark", "That the league office reassigned territories to whichever owner bid highest", "That its owner lived in a different city and moved the club to follow his other business"],
            correctIndex: 0,
            explanation: "This was a touring company. The city name was a brand decision, not a description of where the money was.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "How many press releases was Syd Pollock sending out a year by the early 1950s?",
            options: ["Thirty thousand", "Roughly two hundred, one for each date the club played that season", "Fewer than a hundred, all of them to Black newspapers in league cities", "About two thousand, matching the number of miles the club traveled each week"],
            correctIndex: 0,
            explanation: "Set it beside the roughly 200 games a year and the shape of the business is obvious: a touring company with a publicity department.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "Roughly how many games a year did the Clowns play in their barnstorming period?",
            options: ["About 200", "About 60, which is the figure MLB later used as a season minimum", "About 500, more than any other professional baseball club in the country", "About 26, the number of league games in a typical Negro American League season"],
            correctIndex: 0,
            explanation: "Far more than any league schedule, which tells you the standings were one of the club's products rather than its business.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "Who called the Clowns a 'fourth-rate Uncle Tom minstrel show', and in what year?",
            options: ["Wendell Smith, in 1942", "Cumberland Posey, in 1935, during Italy's invasion of Ethiopia", "Rube Foster, in 1920, when he was organizing the Negro National League", "Bob Kendrick, in 2020, when MLB reclassified the leagues as major"],
            correctIndex: 0,
            explanation: "Smith was sports editor of the Pittsburgh Courier. The sharpest criticism of the Clowns came from inside Black baseball, not from outside it.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What did Cumberland Posey accuse Syd Pollock of?",
            options: ["Capitalizing on Black sympathy for Ethiopia", "Underpaying his players relative to every other club in the Negro American League", "Bribing league officials to secure a franchise the other owners had voted against", "Booking dates in cities already held by other clubs under the league's territory rules"],
            correctIndex: 0,
            explanation: "Posey co-owned the Homestead Grays. The charge is that the team's brand monetized an anticolonial cause during Italy's 1935 invasion.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What did the two leagues do to the Clowns in 1941?",
            options: ["Barred member clubs from playing them", "Voted the club a franchise on condition that it change its name within one season", "Fined the club's owner for scheduling games against white semiprofessional teams", "Bought the club outright and reorganized it under new ownership"],
            correctIndex: 0,
            explanation: "A boycott by competitors, and Pollock answered it by forming his own Negro Major League to get around the ban. It is a market-access fight fought over a question about dignity.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "How did Pollock respond to the 1941 ban?",
            options: ["He formed his own league", "He sued the two leagues in federal court and won an injunction against them", "He agreed at once to every condition the two leagues had set for admission", "He moved the club to Cuba for two seasons until the ban was lifted"],
            correctIndex: 0,
            explanation: "The Negro Major League. A counter-league in answer to a boycott is pure business history.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What did Pollock give up to join the Negro American League in 1943?",
            options: ["The Ethiopian name and the most offensive parts of the act", "A quarter of the club's gate receipts for the first three seasons of membership", "Control of the club's booking, which passed to the league office in Chicago", "The club's Cuban players, whom the league refused to register as members"],
            correctIndex: 0,
            explanation: "Specifically the whiteface makeup, the wigs, the grass skirts and the clown suits. It is the clearest price tag in this course: legitimacy bought with an itemized change to the product.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "How long did the Clowns' Negro American League membership last?",
            options: ["Twelve years", "Nineteen years, ending when the league itself stopped operating in 1962", "Five years, ending with the Negro National League's collapse after 1948", "Forty-six years, running until the club finally disbanded in 1989"],
            correctIndex: 0,
            explanation: "They joined in 1943 and withdrew after the 1954 season, then went on playing exhibitions for decades.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "Who was the first woman to play in the Negro American League, and when?",
            options: ["Toni Stone, in 1953", "Connie Morgan, in 1954, at the age of nineteen", "Mamie Johnson, who pitched for the Clowns from late 1953 to 1955", "Olivia Taylor, who had owned the Indianapolis ABCs three decades earlier"],
            correctIndex: 0,
            explanation: "The National Baseball Hall of Fame records her with the Clowns in 1953. Pollock then sold her contract to the Kansas City Monarchs, where she played in 1954.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What happened to Toni Stone's contract after the 1953 season?",
            options: ["Pollock sold it to the Kansas City Monarchs", "It lapsed, and she left professional baseball without playing again", "It was voided by the league office, which had never approved her registration", "She bought it out herself and played the following season as a free agent"],
            correctIndex: 0,
            explanation: "She played there in 1954. A player contract is an asset a club can sell, which is the same mechanism the rest of this course turns on.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "Who replaced Toni Stone with the Clowns for 1954?",
            options: ["Connie Morgan, aged 19", "Mamie Johnson, who had been pitching for the club since late 1953", "Nobody, because the club did not sign another woman after she left", "Olivia Taylor, returning to baseball after three decades away from the game"],
            correctIndex: 0,
            explanation: "Mamie Johnson was also with the club in this period, pitching from late 1953 to 1955.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "How does this course state Mamie Johnson's reported record?",
            options: ["With the doubt attached, exactly as the Hall of Fame does", "As an established figure, since the Hall of Fame prints it on its own website", "Not at all, since a self-reported figure has no place in a cited course", "As a range, averaging the competing versions found in different accounts"],
            correctIndex: 0,
            explanation: "The Hall of Fame prints her 33 and 8 with the note that Negro Leagues historians question its validity. A number is not improved by dropping its caveat.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What does this course do with the claim that Toni Stone replaced Hank Aaron?",
            options: ["It does not assert it", "It states it as fact, since Aaron left the club the year before she arrived", "It calls it definitively false and names the source that disproves it", "It repeats it with a note that the two never appeared in the same lineup"],
            correctIndex: 0,
            explanation: "The Hall of Fame's account does not describe her that way. Aaron left in June 1952 and Stone arrived in 1953, which makes the replacement framing a narrative convenience.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "When did Hank Aaron sign with the Indianapolis Clowns, and for how much?",
            options: ["20 November 1951, for $200 a month", "In the spring of 1953, for a signing bonus of $10,000 paid in advance", "In June 1952, immediately after the Negro League World Series ended", "In 1954, on the same terms the club had given Toni Stone the year before"],
            correctIndex: 0,
            explanation: "SABR's biography carries both the date and the salary. He signed with a Braves scout on 14 June 1952.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What did Aaron bat for the Clowns in 1952, and over how many games?",
            options: [".366 in 26 games", ".466 in 74 games, the highest single-season mark in the record", ".372 across 2,255 at-bats, which became a career leaderboard figure", ".451 in 39 games, a figure disputed between two competing databases"],
            correctIndex: 0,
            explanation: "A short stint. He signed with the Braves' scout in June of that year and reported to a Class-C club.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "How does this course report the $10,000 figure for Aaron's contract?",
            options: ["As commonly reported, not as established", "As a verified figure, since the Encyclopedia of Indianapolis carries it", "As a fabrication, since no institutional source repeats it anywhere", "As a range between $10,000 and $15,000, depending on which offer is counted"],
            correctIndex: 0,
            explanation: "It is repeated almost everywhere, but no primary record for it was located and SABR's biography of Aaron gives no figure at all.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "To whom did Syd Pollock sell his interest in the Clowns, and when did he finish?",
            options: ["Ed Hamman, a partnership in 1955 and the rest in 1965", "The Negro American League, which took the club over when he retired in 1954", "The Indianapolis Indians, who wanted a summer tenant for their stadium", "Abe Saperstein, who was already booking the club's barnstorming dates"],
            correctIndex: 0,
            explanation: "Two transactions ten years apart, with the second coming long after the club had left the league.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "When did the Indianapolis Clowns disband?",
            options: ["1989", "1962, when the Negro American League itself finally stopped operating", "1954, when the club withdrew from the Negro American League", "1965, when Syd Pollock sold the last of his interest in the business"],
            correctIndex: 0,
            explanation: "The Encyclopedia of Indianapolis calls it the longest run of any Black professional team in United States history. The company outlived the league by thirty-five years.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What does the Clowns' survival to 1989 tell you about the business?",
            options: ["Its real product was touring entertainment, not league competition", "That the Negro American League continued informally long after 1962", "That the club had bought its own ballpark and could operate without a landlord", "That Major League Baseball subsidized the club as a scouting arrangement"],
            correctIndex: 0,
            explanation: "It withdrew from the league after 1954 and kept playing exhibitions for another thirty-five years. The business survived by ceasing to be a league team.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What does this course mean by a product line?",
            options: ["A proven offering carried from one venture to another", "A range of ticket prices offered at a single game to reach different buyers", "The merchandise a club sells alongside admission, such as programs and caps", "The set of players a club develops and then sells on to other clubs"],
            correctIndex: 0,
            explanation: "Pollock carried the comedy-plus-baseball format from the Havana Red Sox to the Clowns, which is why the act was not an improvisation.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What does this course mean by an itemized price?",
            options: ["A cost stated as specific concessions rather than money", "A rental agreement broken down into fixed rent plus a share of the gate", "A player contract listing salary, bonus and travel allowance separately", "A league fee assessed per game rather than as an annual membership charge"],
            correctIndex: 0,
            explanation: "The 1943 Negro American League seat is the example: no money is recorded, but the name and four named elements of the act were the payment.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What does this course mean by a market access fight?",
            options: ["A dispute in which competitors try to bar a rival from the market", "A bidding war between two leagues for the same group of players", "A legal contest over which club holds the exclusive rights to a city", "A negotiation between a club and a stadium owner over available dates"],
            correctIndex: 0,
            explanation: "The 1941 ban on playing the Clowns is the case, and Pollock's counter-league was the answer.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "Why does the course say the Clowns are the hardest business in it to write about honestly?",
            options: ["The product was partly a minstrel act and the critics were Black owners and writers", "Because almost no records of the club survive in any archive or newspaper", "Because the club refused to publish attendance figures for any of its dates", "Because its owner left no account of his own reasoning in any surviving source"],
            correctIndex: 0,
            explanation: "Wendell Smith and Cum Posey are the named critics, and the company outlasted every league it joined. All three facts have to sit in the same lesson.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "What is the significance of the Clowns drawing at major league parks?",
            options: ["It shows the touring product outperformed the league product", "It proves the club owned the parks it played in by the early 1950s", "It explains why the two leagues admitted the club without conditions in 1943", "It is the reason MLB included the club's statistics in the 2024 merge"],
            correctIndex: 0,
            explanation: "One of the Negro American League's most financially successful clubs was the one whose business was least about the league.",
            sourceLessonSlug: "nl-clowns",
          },
          {
            prompt: "Taken together, what do the ABCs and the Clowns show about club survival?",
            options: ["The durable asset was the business, not the league seat", "That a club could not survive the death of the owner who founded it", "That white ownership was necessary for a Black club to last more than a decade", "That clubs which owned their ballparks always outlasted clubs that rented"],
            correctIndex: 0,
            explanation: "The ABCs died with their owner-operator four years after a league seat. The Clowns gave up their league seat and lasted another thirty-five years.",
            sourceLessonSlug: "nl-clowns",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The bill
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-1945-and-after",
      title: "17 · The signing, and the invoice nobody sent",
      section: "Section 5 · The bill",
      body: `In every other transaction in professional baseball, a club that wanted another club's player bought his contract. Follow what happened when the buyer decided he did not have to.

**First, a correction, because the most-quoted sentence in this whole story is not what people repeat.** Branch Rickey is endlessly quoted saying the Negro Leagues are "in the nature of a racket." **This course could not find that wording behind any source.** What is documented is the *Kansas City Call* of **2 November 1945** reporting Rickey saying Negro baseball is **"in the zone of a racket,"** while maintaining he had not signed a player from anything he regarded as an organized league (Society for American Baseball Research, n.d.-c). **And there is an earlier, better-documented instance**: at the **May 1945** press conference launching his own United States League, Rickey called the existing Negro Leagues rackets (Crook, 2022). **That predates the Robinson signing by five months, which changes what the statement was for.**

**Notice what Rickey's own league implies.** He did not propose admitting an existing Negro League club to Organized Baseball. **He proposed a new league of his own devising**, which would have displaced them.

**Was Robinson under contract?** Both answers are true and the reconciliation is the lesson. Tom Baird told the *Call* on 26 October 1945 that Robinson was "our property" because he had signed a contract "with us last year," and Wilkinson acknowledged he was bound through the end of the season. SABR also records that Robinson had **no written contract for 1946** (Nowlin, 2020; Society for American Baseball Research, n.d.-c). **So: a written 1945 contract, none for 1946.** Rickey's defense is narrowly true and broadly evasive, because the Monarchs had signed, paid, housed and showcased him, and every other transaction in baseball paid for exactly that interest.

**The Monarchs decided not to fight, and their reason is the whole moral of the section.** They considered appealing to Commissioner Chandler and did not. Wilkinson, on 26 October 1945: **"Although I feel the Brooklyn club owes us some kind of compensation for Robinson, we will not protest."** And: **"Whether we get any recompense in return for Robinson may be considered beside the point, we want Jackie to have a chance."** Baird at the same moment: **"Some attempt at reimbursement should be made for Robinson. This case will set a precedent on where we stand"** (Nowlin, 2020; Young & Faber, 2012). **Baird was right about the precedent.**

**They were never paid.** Neil Lanctot states it flatly: when Rickey signed Robinson the Monarchs were not compensated, and neither were the Newark Eagles for Don Newcombe nor the Baltimore Elite Giants for Roy Campanella (Lanctot, n.d.).

**Then, gradually, some buyers did pay, and the record of what they paid is a mess worth seeing.**
- **Larry Doby to Cleveland, 1947: $10,000, plus $5,000 more if he stayed on the roster thirty days.** SABR elsewhere gives a flat $15,000. **Both are right. One is the base and one is the contingent total, which is a clean example of how a real contingency becomes two competing facts** (Essington, 2019).
- **Willie Mays to the New York Giants, 1950.** The strongest documentary evidence in the whole topic. Horace Stoneham's Western Union telegram reached Tom Hayes's Memphis office at **9:53 a.m. on 21 June 1950** offering **ten thousand dollars** for the assignment of Mays's contract; Hayes wrote back by hand, "Accept your offer of $10,000." **The documents are held at the Memphis Public Library** (Klima, n.d.).
- **Roy Partlow to Rickey, 14 May 1946, for $1,000** (Haupert, 2012). Unglamorous, documented, and the kind of figure that tells you what a journeyman contract was worth.
- **Satchel Paige to Cleveland, 1948: four incompatible accounts, and this course states none of them.** Two SABR pages contradict each other on every payee. **The verified and telling detail is that the Monarchs got anything only because Paige asked Veeck to pay them** (Society for American Baseball Research, n.d.-d).

**And Effa Manley's question, which is the business question this course has been asking for seventeen lessons:** **"What will become of colored baseball leagues if players are picked out by major league owners without consulting the team management?"** (Society for American Baseball Research, n.d.-e).

:::reveal What did Rickey actually say, according to the contemporaneous record, and how does the famous version differ? ||| The Kansas City Call of 2 November 1945 reported "in the zone of a racket." The endlessly repeated "in the nature of a racket" could not be traced to any source. He had also called the leagues rackets at the May 1945 launch of his own United States League, five months before the Robinson signing.

:::reveal Reconcile the two claims about Robinson's contract status. ||| He had a written contract with the Monarchs for 1945 and none for 1946. Rickey's "no valid contract" defense is narrowly true, and evasive, because every other transaction in baseball paid for exactly the interest the Monarchs held in a player they had signed, paid and showcased.

:::reveal Why does the Doby purchase appear in sources as both $10,000 and $15,000? ||| Because it was $10,000 plus a further $5,000 if he stayed on the roster thirty days. Both figures are correct: one is the base and one is the contingent total, which is how a real contract term becomes two competing "facts."

## Vocabulary
- **Assignment of contract**: the sale of a player's contract from one club to another, which is the transaction the Monarchs never received for Robinson.
- **Reserve interest**: a club's continuing claim on a player it has signed and developed, which is what every purchase price in baseball was paying for.
- **Contingent payment**: money owed only if a condition is met, such as Doby's extra $5,000 for thirty days on the roster.
- **Precedent**: the pattern a first transaction sets for those after it, which is exactly what Tom Baird said was at stake in 1945.

## Sources
Crook, K. (2022). *Branch Rickey's law: How New York State's Ives-Quinn Act opened the door for Jackie Robinson* [Master's thesis, Harvard Extension School]. https://dash.harvard.edu/server/api/core/bitstreams/24de527d-cf60-4d1e-8d47-2718660bfeb8/content

Essington, A. (2019). *Effa Manley*. SABR BioProject. https://sabr.org/bioproj/person/effa-manley/

Haupert, M. (2012). *Ed Bolden*. SABR BioProject. https://sabr.org/bioproj/person/ed-bolden/

Klima, J. (n.d.). *The true story of Willie Mays's signing*. Society for American Baseball Research. https://sabr.org/research/article/the-true-story-of-willie-mayss-signing/

Lanctot, N. (n.d.). *Interview on Negro League baseball: The rise and ruin of a Black institution*. Jerry Jazz Musician. https://www.jerryjazzmusician.com/from-the-interview-archive-neil-lanctot-author-of-negro-league-baseball-the-rise-and-ruin-of-a-black-institution/

Nowlin, B. (2020). *Tom Baird*. SABR BioProject. https://sabr.org/bioproj/person/tom-baird/

Society for American Baseball Research. (n.d.-c). *Jackie Robinson and the Kansas City Call*. https://sabr.org/journal/article/jackie-robinson-and-the-kansas-city-call/

Society for American Baseball Research. (n.d.-d). *J.L. Wilkinson and the rebirth of Satchel Paige*. https://sabr.org/research/article/j-l-wilkinson-and-the-rebirth-of-satchel-paige/

Society for American Baseball Research. (n.d.-e). *The Newark Eagles: Swinging away during Newark's heyday*. https://sabr.org/research/article/the-newark-eagles-swinging-away-during-newarks-heyday/

Young, W., & Faber, C. (2012). *J.L. Wilkinson*. SABR BioProject. https://sabr.org/bioproj/person/j-l-wilkinson/`,
    },
    {
      slug: "nl-what-it-cost",
      title: "18 · The audience did not disappear. It relocated, and so did the revenue",
      section: "Section 5 · The bill",
      body: `The popular version says the fans abandoned Black baseball. The numbers say something more precise, and Effa Manley named the mechanism herself while it was happening.

**The attendance figures, correctly dated.** The Newark Eagles drew **120,292 in 1946**, the best in club history, on about **$25,000 profit**. In **1947** they drew **57,000** (Essington, 2019; Society for American Baseball Research, n.d.-e). **A widely repeated version dates that 57,000 to 1948; it is a 1947 figure, and the 1948 number is unsettled.** The Manleys lost **$50,000 across 1947 and 1948**, sold to a Memphis dentist, and the club moved to Houston for 1949.

**The East-West Game tracks the same curve, and the timing matters.** **48,112 in 1947**, which is Robinson's rookie year in Brooklyn and still near a record, down to **24,614 in 1950** (Society for American Baseball Research, n.d.-b). **The collapse is a 1948 to 1950 phenomenon, not an instantaneous one.**

**Manley, September 1948, on where the fans went:** **"Most of our old fans are going to see four men with white teams who played on our teams for years without exciting their present intense interest."** In that same 1948 season Cleveland set a major league attendance record of **2,620,627** (Essington, 2019). **The audience did not vanish. It bought a ticket from a different owner.**

**Now the paradox that makes this a business lesson rather than a lament.** The years from 1947 to 1950 were among the most financially successful for some Black clubs, **because of the sale of players to white-owned teams** (Society for American Baseball Research, n.d.-f). The Kansas City Monarchs sold **29 players to the majors and 9 to the minors in the ten years ending 1956**, including Elston Howard and Frank Barnes to the Yankees for **$25,000 in 1950** (Nowlin, 2020). **Income shifted from selling tickets to Black customers to selling the company's own players to white buyers. That is not revenue. That is liquidating the asset base to stay solvent, and it has an end.**

**Who lost work, stated the way the evidence supports it.** Japheth Knopp names the categories: **front-office personnel, groundskeepers, concessionaires, ticket-takers, bus drivers**, who in turn patronized local businesses, so that "many people besides the players also lost their livelihoods" (Knopp, 2016). **He names categories, not headcounts, and no source quantifies the job losses. This course will not supply a number.**

**One group can be counted, and the number is nineteen.** Robinson debuted in **1947**. **Emmett Ashford became the first Black umpire in the major leagues on 11 April 1966** (Heaphy, 2017). Bob Motley attended umpire school twice, graduated top of his class both times, and never worked above the Pacific Coast League. **Players were integrated. Officials were not, for nineteen years.**

**Owners, stated as a verified absence.** **No Negro League owner ever received a major league franchise.** No source records one, and every documented exit was a liquidation: Wilkinson sold to Baird for $27,000 while nearly blind, the Manleys lost $50,000 and sold to a dentist, Tom Hayes was out of the Barons by 1952. **The one executive who landed well, Alex Pompez, did so as an employee, scouting for the Giants.**

**August Wilson said what was lost better than any historian:** at these games, **"The umpire ain't white. It's a black umpire. The owner ain't white. Nobody's white. This is our thing, until integration, and then we don't have our nothing"** (University of Pittsburgh, n.d.). The historian Rob Ruck's version places it correctly among institutions: **"Like many black papers, colleges and businesses, the Negro National League paid a price for integration: extinction."**

**Two honesty checks before you carry this argument anywhere.** First, **the popular claim that integration killed the business districts is stronger than the scholarship**. Knopp describes a bundle: new competition from white-owned businesses for Black customers, less capital, and **decapitalization of inner-city areas**. **The thesis is defensible in his form and overstated in the popular one.** Second, **the owners' sharpest critics were Black too**: Wendell Smith of the *Pittsburgh Courier* wrote of Effa Manley that she "refused to recognize that nothing was killing Negro baseball but Democracy" (Lanctot, n.d.).

**And when did it end? Nobody agrees.** The Negro National League folded after 1948. For the Negro American League, sources give 1948 as a major league, 1958, 1960, 1962 and 1963. Lanctot's formulation is the honest one: the last mention he could find was in *Jet* in the autumn of 1963. **The league did not end on a date. It stopped being mentioned.**

:::reveal What did Effa Manley say in September 1948 about where the fans had gone, and what corroborates it? ||| That most of their old fans were going to see four men with white teams who had played for Black clubs for years without exciting that interest. Cleveland set a major league attendance record of 2,620,627 that same season.

:::reveal Why is the 1947 to 1950 profitability of some Black clubs not good news? ||| Because the money came from selling their own players to white-owned teams rather than from selling tickets. The Monarchs sold 29 players to the majors in the ten years ending 1956. That is liquidating the asset base to stay solvent, and it has an end.

:::reveal What is the nineteen-year number, and what does it show? ||| Robinson debuted in 1947 and Emmett Ashford became the first Black major league umpire on 11 April 1966. Integration reached players two decades before it reached officials, and no Negro League owner ever received a major league franchise.

:::reveal Where does the popular "integration killed the business districts" claim overstate the scholarship? ||| Knopp's account is a bundle of causes: competition from white-owned businesses for Black customers, less capital and cultural leverage, and decapitalization of inner-city areas. The single-cause popular version is not what the peer-reviewed source says.

## Vocabulary
- **Asset liquidation**: selling the things a company owns in order to keep operating, which is what selling players to white clubs was.
- **Decapitalization**: the withdrawal of investment from a neighborhood, which Knopp names alongside integration as a cause of district decline.
- **Verified by absence**: a claim supported because no source records the contrary, which is how this course states that no Negro League owner got a franchise.
- **Institutional extinction**: the disappearance of an organization rather than of the people in it, which is Rob Ruck's framing of what integration cost.

## Sources
Essington, A. (2019). *Effa Manley*. SABR BioProject. https://sabr.org/bioproj/person/effa-manley/

Heaphy, L. (2017). Umpires in the Negro Leagues. In *The SABR book on umpires and umpiring*. Society for American Baseball Research. https://sabr.org/journal/article/umpires-in-the-negro-leagues/

Knopp, J. (2016). Negro League baseball, Black community, and the socio-economic impact of integration. *Baseball Research Journal*. Society for American Baseball Research. https://sabr.org/journal/article/negro-league-baseball-black-community-and-the-socio-economic-impact-of-integration/

Lanctot, N. (n.d.). *Interview on Negro League baseball: The rise and ruin of a Black institution*. Jerry Jazz Musician. https://www.jerryjazzmusician.com/from-the-interview-archive-neil-lanctot-author-of-negro-league-baseball-the-rise-and-ruin-of-a-black-institution/

Nowlin, B. (2020). *Tom Baird*. SABR BioProject. https://sabr.org/bioproj/person/tom-baird/

Society for American Baseball Research. (n.d.-b). *Negro League baseball at Comiskey Park: The East-West game, an all-star legacy*. https://sabr.org/research/article/negro-baseball-at-comiskey-park-the-east-west-game-an-all-star-legacy/

Society for American Baseball Research. (n.d.-e). *The Newark Eagles: Swinging away during Newark's heyday*. https://sabr.org/research/article/the-newark-eagles-swinging-away-during-newarks-heyday/

Society for American Baseball Research. (n.d.-f). *Baseball's integration spells the end of the Negro Leagues*. https://sabr.org/research/article/baseballs-integration-spells-the-end-of-the-negro-leagues/

University of Pittsburgh. (n.d.). *In light of the 100th anniversary of the Negro Leagues, a look back at what was lost*. Pittwire. https://www.pittwire.pitt.edu/pittwire/features-articles/light-100th-anniversary-negro-leagues-look-back-what-was-lost`,
    },
    {
      slug: "nl-the-court-and-the-gridiron",
      title: "19 · The same ledger in basketball and football",
      section: "Section 5 · The bill",
      body: `BAM asked this course to branch out from baseball. Here is the branch, and it holds only where it is sourced. **Basketball produced a Black-owned institution that rhymes with the leagues. Football did not, and the reason is a business reason.**

**Basketball, and the best economics passage in any of these sports.** In 1919 Prohibition destroyed the alcohol revenue of the Manhattan Casino in Harlem, so its owner raised the basketball court rental **from $50 before Prohibition, to $200 the following year, to $500 in 1922**, which drove Harlem's Black teams out (McGruder & Johnson, 2015). **A tenfold rent shock caused by a change in liquor law is a cleaner illustration of a cost structure than anything baseball offers.**

**Bob Douglas answered it with barter rather than cash.** He asked the West Indian owner of the newly built **Renaissance Ballroom**, William Roach, for the use of the dance floor as a home court, and **offered to name his team after the ballroom to promote it** (McGruder & Johnson, 2015; Black Fives Foundation, n.d.). The Rens debuted on **3 November 1923**. The venue was one of the few in Harlem designed, financed, built, owned and operated by African Americans. **A Black-owned team, in a Black-owned building, whose name was the building's advertising. That is vertical integration of Black capital, and baseball almost never managed it.**

**Douglas's real innovation was a labor contract.** He instituted **full-year, guaranteed, exclusive player contracts**, which is why the Rens count as the first fully professional Black-owned basketball team (McGruder & Johnson, 2015). **Compare that to a Negro League roster paid by the month, in a season, with winter work in Cuba.**

**But the famous home court was a brand, not a revenue center.** The Hall of Fame says plainly that **"the Rens rarely played uptown"** and that "since no existing pro league would accept a black team into its ranks, the Rens were forced to barnstorm." They traveled as far as **200 miles for a single game**, were barred from hotels and restaurants, slept on the bus, and played twice on Sundays. In the 1932-33 season they won **88 straight games in 86 days** (Naismith Memorial Basketball Hall of Fame, n.d.-a). **The name sold the ballroom. The road paid the players.**

**When a neutral competition finally existed, they won it.** The **World Professional Basketball Tournament**, organized by a newspaper rather than a league, ran from 1939; the Rens won the inaugural event, beating the Oshkosh All-Stars **34 to 25 on 28 March 1939** at the Chicago Coliseum (Association for Professional Basketball Research, n.d.; Black Fives Foundation, n.d.). **The closest thing to a world championship in this era was a Hearst promotion, which tells you what league structure was worth.**

**The contrast is ownership, and the Hall of Fame supplies it in its own words.** Abe Saperstein, a white promoter from Chicago, owned the Harlem Globetrotters; the Hall's page on Nat Clifton calls him "a showman for owner Abe Saperstein" (Naismith Memorial Basketball Hall of Fame, n.d.-b). **When Clifton went to the New York Knicks in 1950, he went through his white owner.** What that owner was paid is **not stated by the Hall of Fame, by NBA.com, or by the historian who wrote the book on these men, so this course gives no figure.**

**And the ending rhymes exactly.** The Rens took over an NBL franchise mid-season as the **Dayton Rens** in December 1948, inheriting a 2 and 17 record and going **14 and 26** on their own account, last in scoring and third best in defense. Douglas ran the barnstorming operation alongside it. **The Rens folded in 1949, the year before the NBA integrated.** The Black-owned institution died at the moment the white league opened its doors to Black players.

**Football, where the answer is different and the difference is the point.** The Professional Football Researchers Association went looking for a Black professional football league and found **essentially nothing at scale**. The Harlem Brown Bombers, the largest and longest-lived Black club, have **nineteen traceable games across eleven years**, drew about 1,500 a game in 1935, and lost about $5,000 that season (Gill & Maher, n.d.). **The one real league is the Virginia Negro Football League of 1946: four teams in Richmond, Norfolk, Portsmouth and Newport News, five-game schedules, one state, one season, founded in the very year the color line came down.**

**Why football never built one, with the reason this course cares about most.** The Brown Bombers played at **Dyckman Oval, which Alex Pompez of Negro League baseball controlled**. Pollard could not use it in 1936 until mid-October because Negro League baseball had it, and in **1938 Pompez leased it exclusively to a competing Black football venture**, at which point Pollard, finding no suitable stadium near Harlem, resigned (Carroll, 1990). **In Black professional sport, baseball owned the real estate. Football was a tenant, and could be evicted.** Add the rest of the sourced reasons: the gates were not there, white leagues refused exhibitions and so denied football the barnstorming payday baseball lived on, and because the *minor* leagues stayed integrated, Black football players dispersed individually instead of pooling into a captive league. **Baseball's exclusion was total and forced collective organization. Football's was confined to the top league and produced dispersal.**

:::reveal What caused the rent shock that pushed Harlem's Black basketball teams out of the Manhattan Casino? ||| Prohibition. The hall lost its alcohol revenue in 1919, so its owner raised the court rental from $50 to $200 the following year and to $500 by 1922.

:::reveal What did Bob Douglas trade for the use of the Renaissance Ballroom floor? ||| The team's name. He offered to call the club the New York Renaissance so that the team would promote the dance hall wherever it played. He paid in advertising rather than in cash, and no source says the arrangement was rent free.

:::reveal Why did no Black professional football league of comparable scale ever exist? ||| Four sourced reasons: the gates were far smaller, white leagues refused exhibitions and denied football the barnstorming revenue baseball relied on, the minor leagues stayed integrated so players dispersed individually, and Black football did not control venues. Baseball owned the real estate; football was a tenant and was evicted from Dyckman Oval in 1938.

:::reveal What happened to the Rens in the year before the NBA integrated? ||| They folded. Having held an NBL franchise as the Dayton Rens in 1948-49 and gone 14 and 26 on their own account, they disbanded in 1949, one year before Cooper, Lloyd and Clifton entered the NBA.

## Vocabulary
- **Barter deal**: paying with something other than money, as Douglas paid for a home court with his team's name.
- **Guaranteed contract**: a full-season salary owed regardless of games played, which the Rens used and which most barnstorming clubs did not.
- **Captive talent pool**: players with nowhere else to play, which baseball's total exclusion created and football's partial exclusion did not.
- **Eviction risk**: the exposure a tenant carries when a landlord can re-let the venue, which ended Fritz Pollard's Brown Bombers in 1938.

## Sources
Association for Professional Basketball Research. (n.d.). *World Professional Basketball Tournament*. https://www.apbr.org/tourney.html

Black Fives Foundation. (n.d.). *New York Rens*. https://www.blackfives.org/new-york-rens/

Carroll, J. M. (1990). Fritz Pollard and the Brown Bombers. *The Coffin Corner*. Professional Football Researchers Association.

Gill, B., & Maher, T. (n.d.). Not only the ball was brown. *The Coffin Corner, XI*. Professional Football Researchers Association.

McGruder, K., & Johnson, C. (2015, April 14). *Requiem for a demolished Harlem shrine*. Black Fives Foundation. https://www.blackfives.org/requiem-for-a-demolished-shrine/

Naismith Memorial Basketball Hall of Fame. (n.d.-a). *Robert Douglas*. https://www.hoophall.com/hall-of-famers/robert-douglas

Naismith Memorial Basketball Hall of Fame. (n.d.-b). *Nat Clifton*. https://www.hoophall.com/hall-of-famers/nat-clifton`,
    },
    {
      slug: "nl-the-clause-and-the-entry",
      title: "20 · A written rule, an entry rule, and a stadium lease",
      section: "Section 5 · The bill",
      body: `Three more sports, and a finding that only appears when you put them side by side. **The barrier that was easiest to see fell last.**

**Golf had a written bylaw, and the governing body has admitted it.** The PGA of America's own 2009 press release states: **"From 1934 to 1961, The PGA of America's 'Caucasian-only clause' was a part of the Association's by-laws and prevented non-whites from membership. The clause was removed at the 1961 PGA Annual Meeting"** (PGA of America, 2009). **That is the governing body confessing in its own words, which is the strongest source available for anything in this course.** The load-bearing phrase of the bylaw, identical across the renderings that circulate, is **"Professional golfers of the Caucasian race."** This course quotes only that phrase, because the tail of the sentence differs between transcriptions and no scan of the constitution itself could be reached.

**The parallel institution, as always.** Black golfers ran their own national championship at **Shady Rest in New Jersey in 1925**; the body that ran it was renamed the **United Golfers Association** within about a year, and its flagship event was the **National Negro Open** (Casey, 2025; PGA of America, 2009). **Same pattern as baseball: excluded, so they chartered their own.**

**And the evasion, which is the transferable lesson.** After a 1948 lawsuit, PGA events were renamed from "Open" to **"Invitational," and Black golfers were simply not invited.** In **1952** PGA President Horton Smith barred Bill Spiller from the San Diego Open but allowed **Joe Louis** to play as an **exempt amateur**, since amateurs fell outside the bylaws. Louis took it public on Walter Winchell's radio show; the PGA then created an "Approved Entries" list (PGA of America, 2009). **Louis is the connective tissue across all three of these sports:** he bankrolled the UGA, founded the **Joe Louis Open** at a Detroit public course in 1941, donating the **$1,000 purse** and paying entry fees and travel for players who could not afford them, and won the Negro National's amateur division in 1951. **Charlie Sifford became the first Black member of the PGA Tour in 1961**, and this course says exactly that and stops, because the era's distinction between membership and an approved-player card is muddled in the literature.

**Tennis had no written rule, and a rule of entry that worked as well.** The **American Tennis Association was founded on Thanksgiving Day, 30 November 1916, in Washington, D.C.**, by representatives of more than a dozen Black clubs, after the USLTA formally barred African American players. Its first national championships were at **Druid Hill Park, Baltimore, in August 1917** (United States Tennis Association, 2020; American Tennis Association, n.d.). **This is the best-sourced founding in the whole course: the governing body that did the excluding and the body that was excluded agree on date, place, cause and purpose.**

**The USTA calls the ATA the oldest African American sports association in the country. Handle that carefully:** the Colored Intercollegiate Athletic Association, founded at Hampton Institute in **1912** and still running as the CIAA, is older. **The claim depends on what "association" is doing.**

**The Catch-22 is the point.** **Althea Gibson** could apply to the U.S. National Championships, but qualification ran through summer invitationals she was never invited to. She played Forest Hills in **late August 1950**, the first African American to compete there, beating Barbara Knapp 6-2, 6-2, then losing to the reigning Wimbledon champion Louise Brough **6-1, 3-6, 9-7** in a match suspended by a thunderstorm that knocked a stone eagle off the stadium. Gibson afterward: **"It may have been an omen that times were changing"** (United States Tennis Association, 2020). **Same trick as golf's rebranded invitationals, same decade, two sports.**

**Now put the three barriers in one order and read it.** Boxing's color line was never written by any body; it ran through champions' and promoters' discretion, and **it fell first, when Joe Louis won the title in 1937**. Tennis had a policy and an entry rule, and **it opened in 1950**. Golf had it in the bylaws, in writing, and **the clause survived until November 1961**. **The least formalized barrier fell first and the most formalized fell last.** A written rule is harder to embarrass and harder to litigate around, so it lasts.

**And the fourth mechanism, the one football taught us, closes the loop.** The Los Angeles Rams integrated in **1946** because the Los Angeles Memorial Coliseum was **publicly controlled**, and Black sports editors, led by Halley Harding of the *Los Angeles Tribune*, got its commission to pass a resolution barring racial discrimination by any professional tenant. Rams coach Bob Snyder later conceded the signing was a precondition of the lease: **"I doubt we would have been interested in Washington if we had stayed in Cleveland"** (Timmermann, 2020; Smith, 1988). **Sixteen years later the same instrument broke the last holdout, when federal officials told the Washington club it would lose its lease on a federally funded stadium unless it signed a Black player.** **Professional football's color line was broken twice, at both ends, by a public stadium lease.**

:::reveal Quote the PGA of America's own admission about its bylaw, and say why it is the strongest kind of source. ||| Its 2009 release states that from 1934 to 1961 the Caucasian-only clause was part of the association's bylaws and prevented non-whites from membership, and that it was removed at the 1961 annual meeting. It is the governing body confessing in its own words rather than a historian asserting it.

:::reveal What was the evasion after the 1948 golf lawsuit, and what is its tennis twin? ||| PGA events were renamed from "Open" to "Invitational" and Black golfers were not invited. In tennis, Althea Gibson could apply to the U.S. Nationals but qualification ran through summer invitationals to which she was never invited. Same trick, same decade, two sports.

:::reveal Put the three barriers in the order they fell, and state what the order shows. ||| Boxing, with no written rule, fell first when Joe Louis won the title in 1937. Tennis, with a policy and an entry rule, opened in 1950. Golf, with the clause in its bylaws, held until November 1961. The least formalized barrier fell first and the most formalized fell last.

:::reveal What instrument broke professional football's color line, at both ends? ||| A public stadium lease. In 1946 the publicly controlled Los Angeles Memorial Coliseum's commission barred discrimination by any professional tenant, and in 1961 federal officials threatened the Washington club's lease on a federally funded stadium.

## Vocabulary
- **Bylaw**: a rule inside an organization's own constitution, which is where golf's exclusion lived from 1934 to 1961.
- **Invitational**: a tournament entered by invitation rather than by qualification, which is how both golf and tennis kept exclusion running after open entry was won.
- **Exempt amateur**: a player outside a professional body's membership rules, the category that let Joe Louis into the 1952 San Diego Open.
- **Lease condition**: a term a public landlord attaches to use of its venue, which is the instrument that integrated professional football twice.

## Sources
American Tennis Association. (n.d.). *The ATA has a rich history*. https://yourata.org/history

Casey, K. (2025, February 10). *An obscure but noteworthy centennial: The United Golf Association*. New Jersey State Golf Association. https://njgolf.org/news/post/an-obscure-but-noteworthy-centennial-the-united-golf-association

PGA of America. (2009, August 4). *PGA of America bestows membership upon late African-American pioneers*. https://web.archive.org/web/20090907135327/http://www.pga.com/2009/news/pga/08/04/golf_pioneers/

Smith, T. G. (1988). Outside the pale: The exclusion of Blacks from the National Football League, 1934-1946. *Journal of Sport History, 15*(3), 255-281.

Timmermann, B. (2020, January 28). *Los Angeles and the reintegration of the NFL*. Los Angeles Public Library. https://www.lapl.org/news-stories/articles/los-angeles-and-reintegration-nfl

United States Tennis Association. (2020). *2020 Black History Month: The founding of the ATA, 1916*. https://www.usta.com/en/home/stay-current/national/2020-black-history-month--the-founding-of-the-ata--1916.html`,
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · The record  (placed last; the write assignment and the final live here)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-reclassification",
      title: "22 · December 2020 and May 2024: the record changes",
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
      title: "23 · What is contested, and what this course refused to say",
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
      title: "24 · Your assignment: write one ballclub as a business",
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
