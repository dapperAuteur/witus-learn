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
    {
      slug: "nl-quiz-firm",
      title: "4 · Knowledge check: the firm",
      section: "Section 1 · The firm",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          { prompt: "What unit does this course use to read the Negro Leagues?", options: ["The firm", "The generation of players whose careers the color line consumed", "The single season of 1947, when the first player crossed over", "The neighborhood, since every club was an expression of its district"], correctIndex: 0, explanation: "Companies with owners, capital, payroll, leases, receipts, advertising, competitors and creditors. Every question the course asks could be asked of any business.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What does the course say a tragedy frame has that a business frame does not?", options: ["One cause and one date", "A named villain whom the evidence can be tested against", "An ending that the surviving documents can actually confirm", "A moral conclusion that a student can carry into another subject"], correctIndex: 0, explanation: "A balance sheet lets you ask a question with a checkable answer, which is why the course prefers it.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "Which rule does this course borrow from What They Built?", options: ["Never use an achievement to soften a harm", "Never quote a figure that a museum has not published", "Never write about a business whose records did not survive", "Never name a living descendant of anyone in the course"], correctIndex: 0, explanation: "A well run league is not a counterweight to the exclusion that made it necessary. The correct claim is co-occurrence, not balance.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What happened to players and to owners at the same moment when integration arrived?", options: ["Players gained an employer and owners lost a market", "Both gained access to a larger and more profitable audience", "Players lost their salaries and owners kept their ballparks", "Both were compensated under the rules governing contract sales"], correctIndex: 0, explanation: "Both are true at once, and only one of them appears in the version most people are taught.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "Which of these does the course refuse to do?", options: ["Treat 1947 as the end of the subject", "Name the owners whose capital came from illegal enterprise", "Compare Negro League clubs to American and National League clubs", "Discuss what integration cost the players who never got a chance"], correctIndex: 0, explanation: "One league operated into the 1960s and the last teams were barnstorming businesses long after the standings stopped mattering.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "State the course's civic question.", options: ["Who owns the game, who collects the gate, and what happens when the door opens", "Which players were denied the recognition their statistics deserved", "How a segregated country justified excluding its best athletes", "Whether the leagues could have survived if their owners had cooperated"], correctIndex: 0, explanation: "It is stated in lesson 1 and carried through all six sections, including into basketball, football, golf and tennis.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What is the gate, in this course's vocabulary?", options: ["The money paid at the door for one game", "The turnstile count used by a league office to verify attendance", "A club's total revenue for a season, including its player sales", "The share of receipts a visiting club is guaranteed by league rule"], correctIndex: 0, explanation: "It is the thing most of the course's arguments are ultimately about, because four parties claimed a share of it.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What does co-occurrence claim?", options: ["Achievement and harm were happening at once to the same people", "Two leagues operated in the same cities during the same seasons", "A club's best season coincided with its owner's death", "Integration and the leagues' collapse happened in the same year"], correctIndex: 0, explanation: "As opposed to the claim that one balances the other, which would be apologetics rather than history.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "On what dates did the organizational meeting for the Negro National League run?", options: ["13 and 14 February 1920", "2 May 1920, the day the league's first game was played in Indianapolis", "16 December 1922, at the segregated Philadelphia YMCA", "10 January 1933, when a second league of the same name was organized"], correctIndex: 0, explanation: "At the Paseo YMCA and Street's Hotel in Kansas City, Missouri. The YMCA-only version usually told is a simplification.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Which two venues hosted the 1920 organizational meeting?", options: ["The Paseo YMCA and Street's Hotel", "Comiskey Park and the offices of the Chicago Defender", "Schorling Park and the Chicago American Giants' clubhouse", "The Crawford Grill and the Pittsburgh Courier's newsroom"], correctIndex: 0, explanation: "Both in Kansas City, Missouri. SABR's account names the pair, which most retellings compress to one.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Besides club owners, who else was in the room in Kansas City in 1920?", options: ["Four Black sportswriters and a Black attorney", "Two representatives of the American and National Leagues", "A delegation from the Chicago Defender's advertising department", "Officials from the Kansas City chamber of commerce and its mayor"], correctIndex: 0, explanation: "Cary B. Lewis, Elwood Knox, Charles Marshall and Dave Wyatt, with attorney Elisha Scott of Topeka. The men who drafted the documents worked for the papers that then covered the league.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What did Foster bring to the meeting that surprised the delegates?", options: ["Drafts of a charter and articles already filed in several states", "A signed lease giving the new league use of Comiskey Park", "A completed schedule that gave every club an equal number of dates", "A guarantee from a Chicago bank to underwrite the league's first season"], correctIndex: 0, explanation: "Including states where the league would not operate, which is a defensive territorial filing against a rival.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Why did Foster file articles of incorporation in states the league did not intend to enter?", options: ["To block a rival from organizing there", "Because the league's constitution required a filing in every adjoining state", "Because those states offered lower incorporation fees than the league's own", "Because his booking agency already held dates in each of those states"], correctIndex: 0, explanation: "It is a legal territorial move, and it means the league had a defensive strategy before it played a game.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What was the Negro National League's name in its own constitution?", options: ["The National Association of Colored Professional Base Ball Clubs", "The National Baseball League of the United States, per most contemporary accounts", "The Negro National League of Professional Base Ball Clubs of America", "The Colored Professional Base Ball Association of the Western States"], correctIndex: 0, explanation: "Negro National League became the standard reference. At least one reputable outlet reports a different name settled that day, which is a reminder that a founding is a paper event.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What did clubs pay to join the Negro National League in 1920?", options: ["A $500 deposit", "A $1,000 franchise fee, non-refundable and payable in advance", "Five percent of the previous season's gross gate receipts", "Nothing, because Foster underwrote the first season himself"], correctIndex: 0, explanation: "Plus agreements to respect contracts and play a league schedule. The same $500 forfeit reappears in the Eastern Colored League and in the second Negro National League.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What is a forfeit deposit for?", options: ["Holding a club to its commitment for the season", "Covering a club's travel costs if it cannot meet them", "Funding the league office's operations between seasons", "Insuring the league against a rained-out championship series"], correctIndex: 0, explanation: "A refundable bond against walking away, which is the standard tool of a league whose members might.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What do all four sources agree on about Rube Foster's cut of the gate?", options: ["He drew no salary and took a percentage as booking agent", "He took exactly five percent of every league game's receipts", "He took ten percent, which the league treasury received separately", "He waived any personal fee and lived on his own club's profits"], correctIndex: 0, explanation: "And that owners resented it for a decade. What none of them settles is whether the personal cut was 5 or 10 percent.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Why does this course give no single figure for Foster's percentage?", options: ["Four credible sources give four different accounts", "Because the figure changed every season under league resolution", "Because the only source is a rival owner's newspaper complaint", "Because the constitution set no fee and Foster took what he wished"], correctIndex: 0, explanation: "The museum, Lomax, SABR's Bauer and Enders disagree, and no surviving league financial statement settles it.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What did Cum Posey charge in the Pittsburgh Courier of 8 July 1933?", options: ["That Greenlee held league clubs to 35 percent of gross, with 5 percent to the league", "That Greenlee had personally kept the East-West Game's entire net receipts", "That the league office had never published any financial statement at all", "That white booking agents were taking a quarter of every league gate"], correctIndex: 0, explanation: "Posey said he had never accepted less than 40 percent. It is the clearest picture of a league gate division available.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Which offices did Foster hold while owning and managing a member club?", options: ["League president and secretary", "League president and commissioner, with a seat on the booking commission", "League treasurer and chairman of the scheduling committee", "League commissioner, with no formal office in the league's constitution"], correctIndex: 0, explanation: "SABR's Bauer names both. The museum says president and treasurer, a minor conflict; prefer Bauer.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What was Foster accused of doing with the league schedule?", options: ["Steering profitable weekend dates to his own park", "Refusing to schedule the two Chicago clubs against each other", "Giving his own club fewer road dates than any other member", "Publishing the schedule so late that clubs could not book outside games"], correctIndex: 0, explanation: "He wrote the schedule while owning the league's best club, which is vertical integration and self-dealing in one person.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What did the 1920 constitution expressly permit?", options: ["Games against non-league competition, to boost gate receipts", "Clubs to withhold their forfeit deposit until the season's midpoint", "The league president to book games on behalf of any member club", "A club to play in another club's declared territory with consent"], correctIndex: 0, explanation: "The league's own founding document treated outside dates as legitimate revenue, which is the structural root of Section 3.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What is an unbalanced schedule, and why did it matter here?", options: ["Clubs play unequal numbers of league games, so the standings compare poorly", "Clubs play the same number of games but at unequal home and away splits", "The league sets a schedule that clashes with its members' barnstorming dates", "The league office assigns weekend dates by rotation rather than by draw"], correctIndex: 0, explanation: "The Chicago Giants logged about half as many league games as other clubs, so the pennant race was never a fair comparison.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "In this course's vocabulary, what does a booking agent do?", options: ["Arrange games and take a percentage for doing it", "Certify player contracts on behalf of the league office", "Lease ballparks to clubs on the landlord's behalf", "Sell advertising space in a club's programs and scorecards"], correctIndex: 0, explanation: "Foster held the role at the same time as the league presidency, which is why the percentage question matters.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "How many leagues did MLB designate as major in December 2020?", options: ["Seven", "Six, matching the number the 1969 committee had recognized", "Two, the Negro National League and the Negro American League", "Twelve, covering every organized Black circuit between 1886 and 1962"], correctIndex: 0, explanation: "Covering 1920 to 1948. Three of the seven lasted a single season.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What years does MLB give for the first Negro National League?", options: ["1920 to 1931", "1923 to 1928, the span of the Eastern Colored League", "1933 to 1948, the span of the second league of that name", "1937 to 1948, the span of the Negro American League"], correctIndex: 0, explanation: "It collapsed the year after Foster's death in December 1930.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What years does MLB give for the Eastern Colored League?", options: ["1923 to 1928", "1929 only, before it was replaced by the American Negro League", "1920 to 1931, running alongside the first Negro National League", "1932 only, alongside the East-West League and the Negro Southern League"], correctIndex: 0, explanation: "It was constituted in December 1922 and is universally dated by its first season.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "Which of MLB's seven designated leagues lasted only the 1929 season?", options: ["The American Negro League", "The East-West League, which Cum Posey organized in Pittsburgh", "The Negro Southern League, which Tom Wilson founded in 1920", "The Eastern Colored League, which disbanded amid contract disputes"], correctIndex: 0, explanation: "It formed in Philadelphia in January 1929 with Ed Bolden as president and did not return for a second season.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "Which two of the seven leagues both lasted only the 1932 season?", options: ["The East-West League and the Negro Southern League", "The American Negro League and the Eastern Colored League", "The Negro American League and the second Negro National League", "The first Negro National League and the American Negro League"], correctIndex: 0, explanation: "MLB's designation covers the Negro Southern League for 1932 only, the year it was the strongest surviving circuit.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "How many of the seven designated leagues lasted a single season?", options: ["Three", "One, the American Negro League of 1929", "Five, leaving only the two Negro National Leagues", "None, because MLB excluded any league that did not complete two seasons"], correctIndex: 0, explanation: "The American Negro League, the East-West League and the Negro Southern League as designated. Only two ran longer than a decade.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What does the right-hand column of the seven-league table tell you?", options: ["The league layer was the fragile part of the industry", "The leagues grew steadily more stable across the twenty-eight years", "Every league failed within a year of a national economic downturn", "Each league was replaced immediately by a successor in the same cities"], correctIndex: 0, explanation: "Treating the Negro Leagues as one continuous institution from 1920 to 1947 deletes the most interesting fact on the page.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "How does the club-league relationship here invert the major league arrangement?", options: ["The club was the durable asset and the league was a service", "The league owned the clubs outright and assigned them to cities", "Clubs were permanent and leagues were renamed every few seasons", "The league owned the ballparks and licensed them to member clubs"], correctIndex: 0, explanation: "In the American and National Leagues the league is permanent and clubs are its franchises. Here clubs belonged to several leagues, or to none.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "Why is a date between 1932 and 1933 attached to the Negro National League a warning sign?", options: ["Two different companies used that name, with a gap between them", "Because the league was renamed the American Negro League in those years", "Because MLB's designation excludes both of those seasons entirely", "Because no league of any name operated in the United States that year"], correctIndex: 0, explanation: "The first ran 1920 to 1931 and the second 1933 to 1948, separated by a year in which neither existed.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "How does this course read the 1923 to 1929 sequence of leagues?", options: ["As a competition story ending in a market clearing", "As proof that Foster's league had no rivals worth naming", "As evidence that Black baseball's audience was shrinking", "As a straightforward expansion of one league into new territory"], correctIndex: 0, explanation: "Two leagues bidding for the same players is good for players and hard on owners. By 1932 two more one-season leagues had come and gone, and then the layer stopped for a year.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "How long did the Negro American League actually operate, beyond MLB's designation?", options: ["Into 1962", "Until 1948, when the designation and the league both ended", "Until 1954, when the Indianapolis Clowns withdrew from it", "Until 1989, when the last of its clubs finally disbanded"], correctIndex: 0, explanation: "MLB's designation stops at 1948, but the league kept operating for another fourteen years. Section 6 returns to that gap.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What should you hear when this course says a club joined a league?", options: ["A firm buying a service", "A club surrendering its independence to a governing body", "An owner purchasing equity in the league's corporate structure", "A club accepting a territory it could not afterwards leave"], correctIndex: 0, explanation: "A schedule, a set of rivals, a claim to a championship and a share of a collective reputation. When a league folded, that service became unavailable.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What does this course mean by the league layer?", options: ["The organizing company that sells clubs a schedule and rivals", "The tier of clubs that competed for a championship in a given year", "The group of owners who also held office in the league itself", "The administrative staff a league employed between its seasons"], correctIndex: 0, explanation: "It is distinct from the clubs themselves, and it was the part that kept failing.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What is a market clearing, as the course applies the term to 1928 to 1933?", options: ["Too many competitors collapse until the survivors can support themselves", "A league sells its franchises to the highest bidders in a single meeting", "Clubs settle their debts to each other before a new season begins", "A league dissolves and returns each club's forfeit deposit in full"], correctIndex: 0, explanation: "The Eastern Colored League ends in 1928, the American Negro League replaces it for one season, two more one-season leagues follow, and then the whole layer stops for a year.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "Which clubs does the course name as having belonged to more than one league or to none?", options: ["The Grays, the Monarchs, the American Giants and the Indianapolis clubs", "Only the Indianapolis ABCs and the Indianapolis Clowns", "The Newark Eagles and the Philadelphia Stars, and no others", "Every club that survived the first Negro National League's collapse"], correctIndex: 0, explanation: "The pattern is the point: the club outlived the league it happened to be in.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What does this course mean by a designation span?", options: ["The 1920 to 1948 years MLB's decision covers", "The number of seasons a league completed before folding", "The period during which a club held a valid league franchise", "The years for which Seamheads has reconstructed box scores"], correctIndex: 0, explanation: "It is shorter than the period the leagues actually operated, which is a fact about a decision rather than about the leagues.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What is a firm, in this course's usage?", options: ["An organization that owns assets, employs people and earns revenue", "Any business that has filed articles of incorporation in a state", "A club whose owner draws his income from it rather than elsewhere", "A league and its member clubs considered as one economic unit"], correctIndex: 0, explanation: "It is the unit the course applies to a ballclub and to a league alike.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What does barnstorming mean here?", options: ["Playing outside any league schedule for a share of the crowd", "Touring a region before the season to prepare for league play", "Playing a series of exhibition games against major league clubs", "Moving a club from city to city in search of a permanent home"], correctIndex: 0, explanation: "It is where much of the actual money was, which the 1920 constitution acknowledged from the start.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What did Foster's motto say?", options: ["We Are the Ship, All Else the Sea", "Keep Colored Baseball from the Control of Whites", "One Set of Records, and No Asterisks", "To Affiliate with Other than Race Men Would Be a Mark Against Our Name"], correctIndex: 0, explanation: "It is the phrase SABR takes for the title of its account of the league's founding.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Which club did Rube Foster own and manage while running the league?", options: ["The Chicago American Giants", "The Chicago Giants, whom the Indianapolis ABCs beat in the league's first game", "The Kansas City Monarchs, whose owner hosted the founding meeting", "The Detroit Stars, whose owner Tenny Blount attended the 1920 meeting"], correctIndex: 0, explanation: "Distinct from Joe Green's Chicago Giants, which is a distinction the sources themselves sometimes blur.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Which owner represented the Kansas City Monarchs at the 1920 founding meeting?", options: ["J. L. Wilkinson", "Tom Baird, who bought Wilkinson out in 1948 for $27,000", "Tenny Blount, who also represented the Detroit Stars that week", "Lorenzo Cobb, who came from St. Louis to speak for both clubs"], correctIndex: 0, explanation: "He was one of the two white executives in the league, which Section 2 takes up in detail.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Which Indianapolis figure attended the 1920 founding meeting?", options: ["C. I. Taylor", "Thomas Bowser, who had sold his share of the club four years earlier", "Warner Jewell, who owned the weaker half of the split ABCs", "Syd Pollock, who was booking players out of New York by then"], correctIndex: 0, explanation: "He was elected vice president of the new league, and his club took the league's first home date.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "How many league games did the American and National Leagues play, against the Negro Leagues' maximum?", options: ["154 against a Negro League maximum of 99", "162 against a Negro League maximum of 154", "140 against a Negro League maximum of 45", "99 against a Negro League maximum of 200"], correctIndex: 0, explanation: "Official Negro League games never totaled more than 99 in a season, and the 1945 Homestead Grays played 45.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What does the course say a league sold its member clubs?", options: ["A schedule, rivals, a championship and a shared reputation", "Access to ballparks that no individual club could lease alone", "Insurance against a season lost to weather or to war", "Exclusive rights to sign players within a defined territory"], correctIndex: 0, explanation: "Hearing a league membership as a purchased service is what makes its repeated failure legible as a business event.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "Why does the course say the founding of a league is a paper event?", options: ["Because the record of it is documents that sometimes disagree", "Because no games were played until months after the meeting", "Because the constitution was never printed in full anywhere", "Because the delegates signed nothing binding at the meeting itself"], correctIndex: 0, explanation: "The league's constitutional name and the name one outlet reports being settled on that day do not match, which is an ordinary evidentiary problem.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What is the significance of four sportswriters drafting the league's governing documents?", options: ["The press incorporated the institution rather than observing it", "The league guaranteed favorable coverage in exchange for their work", "The writers were the only literate delegates present at the meeting", "Their papers were the league's largest advertisers from the start"], correctIndex: 0, explanation: "Section 3 develops the pattern: the same men later served as commissioner and as league secretary.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What did Foster's own club's landlord situation look like?", options: ["A white-owned park held on no written contract", "A Black-owned park in which Foster held a quarter of the stock", "A municipal field leased from the City of Chicago by the season", "A park the league office leased and sublet to the American Giants"], correctIndex: 0, explanation: "Schorling took over the club after Foster's 1926 breakdown and offered his family no compensation. The founder of Black baseball's independence could not secure his own lease.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What does the course say the standings were?", options: ["A product the league sold, not the company's revenue", "The only measure by which clubs competed for players", "A record the league office audited at each season's close", "The basis on which the league distributed its gate assessment"], correctIndex: 0, explanation: "Between half and four fifths of a club's schedule was outside the league, and the constitution said outside games were legitimate.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What did MLB say about the 1969 committee's treatment of these leagues?", options: ["That the omission was clearly an error demanding the 2020 designation", "That the committee had weighed the evidence and reached a defensible view", "That the leagues had declined to submit their records for consideration", "That the records available in 1969 were too incomplete to evaluate"], correctIndex: 0, explanation: "MLB used that phrasing in its own December 2020 press release, and Section 6 returns to what the 1969 committee actually did.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What is a franchise, as the course uses the term for the American and National Leagues?", options: ["A club that exists as a unit of a permanent league", "A club that has bought the exclusive right to a city", "Any club that has held a league seat for more than a decade", "A club whose owner also holds shares in the league office"], correctIndex: 0, explanation: "That arrangement is the inverse of the one this course describes, where the club was durable and the league was not.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What did Foster say his purpose was, as quoted by the Hall of Fame?", options: ["To keep colored baseball from the control of whites", "To secure recognition of Black clubs by the American and National Leagues", "To make Black baseball the largest Black-owned business in America", "To build a permanent ballpark in every league city within five years"], correctIndex: 0, explanation: "He also spoke of creating a profession equal in earning capacity to any other. The course measures the rest of the story against that stated mission.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Where did Foster campaign for the league before the 1920 meeting?", options: ["In a Chicago Defender column series", "In a series of letters to the National Commission of Organized Baseball", "At a national meeting of Black business leaders held in Kansas City", "In a pamphlet circulated to every Black club in the Midwest and East"], correctIndex: 0, explanation: "The column series ran in late 1919 and early 1920 and proposed a two-circuit structure with an East versus West championship.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Why is the Chicago Giants' record of five league wins in 36 games instructive?", options: ["It shows how extreme the schedule imbalance was", "It shows that the league's weakest clubs drew the largest crowds", "It shows that traveling clubs were barred from home dates entirely", "It shows the league office fined clubs that failed to complete a schedule"], correctIndex: 0, explanation: "A traveling club logged about half as many league games as other members, so the pennant race compared unlike things.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What does this course say a course that talks about one continuous institution has done?", options: ["Deleted the most interesting fact on the page", "Confused the Negro National League with the Negro American League", "Adopted MLB's designation span as though it were the leagues' lifespan", "Treated the clubs rather than the leagues as the durable unit"], correctIndex: 0, explanation: "Three of the seven leagues lasted one season and only two ran longer than a decade.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What does the course ask you to carry into Section 2?", options: ["Where the money to pay for any of this came from", "Which clubs would survive the collapse of their leagues", "Why the league office and the booking agency were the same office", "How many games a club had to play to qualify for a championship"], correctIndex: 0, explanation: "Section 2 answers it with numbers banking, inherited coal, a postal salary and a filed charter.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "How does the course describe the version of this history that most people are taught?", options: ["A story about an ending, told about businesses whose interesting years came first", "A story about owners, told from the perspective of the players they employed", "A story about money, told without any reference to the people involved", "A story about segregation, told without naming the institutions that enforced it"], correctIndex: 0, explanation: "The twenty-seven years before 1947 are what the business frame recovers.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What does the course say about the claim that these leagues were among the largest Black-owned enterprises in the United States?", options: ["The owners said so at the time, in Black-owned newspapers", "It is a modern estimate with no contemporary support", "It was calculated by MLB during the 2020 review process", "It cannot be assessed because no club published financial statements"], correctIndex: 0, explanation: "Treating a ballclub as a company is not a novelty this course invented; it is what the owners were doing.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "Which is NOT one of the three things lesson 1 says the course will not do?", options: ["Name the sources of an owner's capital", "Use an achievement to soften a harm", "Treat 1947 as the end of the subject", "Quote a statistic it cannot source"], correctIndex: 0, explanation: "Naming where the money came from is exactly what Section 2 does. The other three are the stated refusals.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What happened to the first Negro National League after Foster's institutionalization?", options: ["It collapsed in 1931, the year after he died", "It merged with the Eastern Colored League to form one circuit", "It continued under his brother's presidency until 1948", "It was reorganized as the Negro American League in 1937"], correctIndex: 0, explanation: "Foster was declared mentally irresponsible in 1926 and died in December 1930. MLB's designation for the league ends at 1931.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What does the course mean when it says the Eastern Colored League was constituted before its first season?", options: ["It was organized in December 1922 and first played in 1923", "It played an unofficial 1922 season before being chartered", "It was designated by MLB for 1922 but not for 1923", "It existed on paper for six years before fielding any clubs"], correctIndex: 0, explanation: "The league is universally dated by its first season, which is a small, checkable example of how a founding date gets fixed.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What is the practical consequence of a league's folding, in the course's framing?", options: ["A purchased service becomes unavailable", "Every member club immediately ceases operations", "The clubs forfeit their deposits to the league's creditors", "Player contracts are voided and the players become free agents"], correctIndex: 0, explanation: "Usually because the owners stopped paying for it, which is why clubs outlived leagues so consistently.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "Which league did MLB designate for the years 1937 to 1948?", options: ["The Negro American League", "The second Negro National League, organized by Gus Greenlee", "The Negro Southern League, founded by Tom Wilson in 1920", "The East-West League, which Cum Posey organized in Pittsburgh"], correctIndex: 0, explanation: "It was organized at Indianapolis in October 1936 and formalized in Chicago that December.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "Which league did MLB designate for the years 1933 to 1948?", options: ["The second Negro National League", "The Negro American League, whose first president was Major Robert R. Jackson", "The Eastern Colored League, reorganized after its 1928 collapse", "The American Negro League, extended beyond its single 1929 season"], correctIndex: 0, explanation: "Its organizing meeting was in Chicago in January 1933 and its details were finalized in Indianapolis that February.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What does the course say about the phrase 'the Negro Leagues' used as a single institution?", options: ["It quietly deletes the fact that the league layer kept failing", "It correctly describes a continuous organization from 1920 to 1962", "It is MLB's own preferred term and therefore the accurate one", "It applies only to the two leagues that ran longer than a decade"], correctIndex: 0, explanation: "Seven leagues in twenty-eight years, three of them lasting a single season.", sourceLessonSlug: "nl-the-league-map" },
          { prompt: "What is the course's stated register toward the people in it?", options: ["Respect and specificity", "Sympathy for the losses the record documents", "Neutrality between competing historical interpretations", "Admiration for the resilience the institutions demonstrated"], correctIndex: 0, explanation: "No tragedy framing, no resilience moral, no lost golden age. These are living families and self-documenting institutions.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "Why does the course say naming the sources of an owner's capital is a business question?", options: ["Because it is the question any lender asks about a borrower", "Because illegal capital invalidated a club's league membership", "Because the league constitution required disclosure of funding", "Because MLB's 2020 review considered ownership in its designation"], correctIndex: 0, explanation: "Source of funds is the standard question, and the answers here are what a closed credit system produces.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "Which is a fair description of the 1920 league's booking arrangement?", options: ["The league president was also its booking agent", "Each club engaged its own agent and paid no league fee", "The league banned outside booking agents from its member clubs", "An independent agency handled all bookings for a flat annual fee"], correctIndex: 0, explanation: "That combination of roles is what the owners complained about throughout Foster's presidency.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What does the course say the 1920 constitution's non-league clause is the root of?", options: ["Everything in Section 3 about where the revenue actually was", "The collapse of the Eastern Colored League five years later", "The dispute over Foster's percentage of the gate", "The league's failure to publish any financial statement"], correctIndex: 0, explanation: "Outside games were legitimate revenue from day one, which is why between half and four fifths of the schedule was not league play.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Why does the course call the ownership pattern predictable rather than characterological?", options: ["Because a closed credit system leaves only certain sources of funds", "Because the league required owners to hold another business", "Because Foster personally selected owners he could work with", "Because every league in this period drew owners from one trade"], correctIndex: 0, explanation: "Inheritance, another business you already own, and cash-heavy enterprise legal and not. That is a fact about a credit system.", sourceLessonSlug: "nl-the-rule" },
          { prompt: "What did the Eastern Colored League and the second Negro National League have in common with the 1920 league, financially?", options: ["A $500 forfeit deposit from each member club", "A five percent assessment paid to the league president personally", "A ban on any club playing games outside the league schedule", "A shared booking agency handling every club's outside dates"], correctIndex: 0, explanation: "The same instrument reappears in 1923 and again in 1935, which shows it was the standard tool of the industry.", sourceLessonSlug: "nl-what-a-league-is" },
        ],
      },
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
    {
      slug: "nl-quiz-capital",
      title: "8 · Knowledge check: capital",
      section: "Section 2 · Capital",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          { prompt: "Which two sources of capital does exclusion from the credit system remove?", options: ["Loans and outside investors", "Savings and family, since neither can be pledged as collateral", "Retained profit and family, since both depend on prior wealth", "Savings and loans, leaving only investors willing to take equity"], correctIndex: 0, explanation: "That leaves savings, family and retained profit from a business you already own, all of which require someone in your circle to have capital already.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What did Rufus Jackson's widow say about why numbers men owned the clubs?", options: ["They were the only ones with any money", "They were the only ones willing to take the reputational risk", "They needed a legitimate business to declare on their taxes", "They wanted the standing that a ballclub gave them in the district"], correctIndex: 0, explanation: "She said it to James Overmyer in Pittsburgh in the 1960s, and it is the single best sentence in the literature on this question.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What is the numbers, also called policy?", options: ["An illegal daily lottery run out of Black neighborhoods", "A rotating savings club whose members paid in weekly", "A cash advance service operated out of barbershops and saloons", "An informal insurance pool covering burial costs for subscribers"], correctIndex: 0, explanation: "Newman and Rosen argue it functioned as the neighborhood's savings and loan, credit union and investment bank at once.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "How do Newman and Rosen describe what numbers and policy operations functioned as?", options: ["Neighborhood savings and loans, credit unions and investment banks", "A parallel tax system that funded Black civic institutions directly", "A network of moneylenders charging rates no bank would have matched", "The principal employer of Black clerical workers in northern cities"], correctIndex: 0, explanation: "Their point is about willingness to invest in the Black economy when mainstream banks would not extend credit.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What complication does Japheth Knopp's peer-reviewed account add?", options: ["Some clubs served as fronts for laundering money", "Some owners never actually invested their own funds at all", "Numbers operators charged their clubs interest at punitive rates", "Most clubs were owned by consortia rather than by single figures"], correctIndex: 0, explanation: "He also records that these owners claimed a genuine desire to keep their teams afloat. Both motives are in the literature and the course teaches both.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "Why is a ballclub a good laundering vehicle?", options: ["It is a cash business with unauditable attendance", "It has no obligation to file accounts with any state authority", "It can pay players in cash without recording their names", "It buys and sells contracts at prices nobody can question"], correctIndex: 0, explanation: "That is the mechanical reason a peer-reviewed source can say some clubs served as fronts, and it is why the course refuses to teach only the flattering motive.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "Where did Cum Posey's family money come from?", options: ["Riverboats and coal", "An illegal numbers operation in Homestead, Pennsylvania", "A jukebox distribution business founded in 1931", "The Pittsburgh Courier, which the family owned outright"], correctIndex: 0, explanation: "His father was the first African American licensed as a riverboat engineer, then a barge fleet and coal company owner, running what SABR calls the largest Black-owned business in Pittsburgh.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What was Ed Bolden's source of income while he ran Hilldale?", options: ["A Philadelphia post office salary", "A share of the Eastern Colored League's gate assessment", "Rents from properties he owned in Darby, Pennsylvania", "A partnership in a white booking agent's New York firm"], correctIndex: 0, explanation: "He worked there 42 years, from 1904 to 1946, and is the sharpest counter-example to the claim that all these owners were racketeers.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What is working capital, for a ballclub?", options: ["Money needed to operate before revenue arrives", "The value of a club's player contracts on its books", "The reserve a league requires a club to keep on deposit", "The profit a club retains rather than distributing to owners"], correctIndex: 0, explanation: "Uniforms, equipment, travel, hotel and meal money, and a payroll that runs whether it rains or not.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What is a source of funds, and why does the course use the phrase?", options: ["The lender's question about where money originates", "The accounting entry recording an owner's initial contribution", "The list of investors a state requires on an incorporation filing", "The share of revenue a club derives from each of its activities"], correctIndex: 0, explanation: "It reframes the ownership pattern as a predictable consequence of a credit system rather than a claim about anyone's character.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What is a front, in the sense the course uses?", options: ["A legitimate business concealing proceeds from an illegal one", "A figurehead owner installed to satisfy a league's rules", "A club fielded only to hold a franchise until it can be sold", "A booking agency operating under a club owner's name"], correctIndex: 0, explanation: "The peer-reviewed literature says at least some Negro League clubs were used this way.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "Why does the course say this belongs in a business course rather than a morality one?", options: ["Every case answers the same lender's question about funds", "Because moral judgment cannot be applied at this historical distance", "Because the illegality was never prosecuted in any of these cases", "Because the owners' motives are unrecoverable from the surviving record"], correctIndex: 0, explanation: "Close off the ordinary answers and the remaining ones are inheritance, another business you own, and cash-heavy enterprise. That is a fact about a credit system.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "How were Gus Greenlee and his siblings identified in official government documents?", options: ["As mulatto", "As white, which is why the club's ownership is sometimes miscounted", "As Cuban, following his mother's stated place of birth", "As colored, using the term the census applied in that period"], correctIndex: 0, explanation: "SABR's biography records the designation, which matters because the course states race for every owner as a business fact.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What businesses did Gus Greenlee run besides the Crawfords?", options: ["An illegal lottery, the Crawford Grill, and a boxing stable", "A funeral home in Memphis and a chain of Pittsburgh pool halls", "A jukebox distributor and a Manhattan music publishing house", "A brewery and a chain of saloons in Pittsburgh's Hill District"], correctIndex: 0, explanation: "His boxers included John Henry Lewis, who became light-heavyweight champion. He bought the Crawfords in 1930.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "How does this course report the estimate of Greenlee's daily numbers gross?", options: ["With the source's own word 'probably' kept attached", "As a verified figure drawn from federal prosecution records", "As a range that three independent sources have corroborated", "As an unusable claim, and therefore not at all"], correctIndex: 0, explanation: "SABR's Jeremy Beer writes that Greenlee 'probably' grossed between $20,000 and $25,000 a day in the mid-1930s. Dropping the hedge would misrepresent the source.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did Posey and Rufus Jackson do in April 1934?", options: ["Filed articles of incorporation for the Homestead Grays", "Bought Greenlee Field from the Bedford Land Company", "Organized the East-West League as a rival to Greenlee's", "Sold a controlling interest in the Grays to a Memphis buyer"], correctIndex: 0, explanation: "With their lawyer, Theron B. Hamilton. A coal heir and a numbers banker incorporating a ballclub together is this section in one filing.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What was Rufus Jackson's legitimate cover business?", options: ["The Manhattan Music Company, a jukebox business", "A Pittsburgh funeral home serving the Hill District", "A barge fleet inherited from the Posey family's interests", "The Crawford Grill, which he ran in partnership with Greenlee"], correctIndex: 0, explanation: "Founded in 1931, while his real income already came from numbers. SABR records that he was no mere figurehead in the Grays.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What was Abe Manley's business before the Newark Eagles?", options: ["Numbers banking in Camden", "Real estate development along the Newark waterfront", "A share in a white-owned booking agency operating in the East", "A chain of laundries employing much of the club's later staff"], correctIndex: 0, explanation: "SABR's biography describes him as a numbers banker while living in Camden. The franchise was awarded in November 1934.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "How does this course treat the question of Effa Manley's race?", options: ["As genuinely unresolved, with the competing accounts given", "As settled: she was African American, as most who met her believed", "As settled: she was white, following the museum's account", "As irrelevant to a business history and therefore not discussed"], correctIndex: 0, explanation: "SABR, the Hall of Fame and the Negro Leagues Baseball Museum take three different positions, and she told a 1977 interviewer her race was white while living within the Black community all her life.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did Effa Manley tell the New York Post in 1975?", options: ["Everything in my life has been Black", "I was never anything but a businesswoman in a business nobody respected", "They took our players and left us the bill for developing them", "What will become of colored baseball if players are picked out without consultation"], correctIndex: 0, explanation: "It is quoted alongside her 1977 statement that her race was white, and the course reports both rather than resolving them.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "In what year was Effa Manley elected to the Hall of Fame?", options: ["2006", "1971, alongside Satchel Paige in the first Negro Leagues class", "1977, the year she stated her race in an interview", "1946, the year the Newark Eagles won the Negro World Series"], correctIndex: 0, explanation: "She was the first woman elected, a fact triple-sourced across the Hall of Fame, SABR and the Negro Leagues Baseball Museum.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What does SABR say about J. L. Wilkinson and Tom Baird?", options: ["They were the only two white executives in the league", "They were the only owners who never played the game professionally", "They were the only partnership to survive the whole 1920 to 1948 span", "They were the first owners to sell a player contract to a major league club"], correctIndex: 0, explanation: "Foster was reluctant to admit a white owner in 1920 and relented, and the Monarchs became one of the most durable operations in the history.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "When and where was Wilkinson's portable lighting system first used?", options: ["Enid, Oklahoma, on 28 April 1930", "Kansas City, Missouri, on 2 May 1920", "Chicago, at Schorling Park, in September 1929", "Cincinnati, Ohio, in 1935, the same season the majors adopted lights"], correctIndex: 0, explanation: "Five years before the major leagues' first night game, which was in Cincinnati in 1935.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "Why does this course give no single cost for Wilkinson's lighting system?", options: ["SABR published $50,000 in 1996 and $100,000 in 2020", "Because the system was leased rather than purchased outright", "Because the only figure comes from a rival owner's complaint", "Because the cost was recorded in Canadian rather than US dollars"], correctIndex: 0, explanation: "Its own Wilkinson biography gives no figure, and no invoice, loan document or 1930 newspaper is cited by any of them.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did Wilkinson sell his shares to Tom Baird for in 1948?", options: ["$27,000", "$10,000, the same sum the Giants paid for Willie Mays", "$50,000, matching the reported cost of his lighting system", "$5,000, which is the authorized capital of Tom Wilson's charter"], correctIndex: 0, explanation: "He was nearly blind by then. Every documented owner exit in this history was a liquidation of this kind.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "Where does the Hall of Fame say Alex Pompez was born?", options: ["Key West, to Cuban immigrants", "Havana, Cuba, as the Negro Leagues Baseball Museum states", "Tampa, Florida, in the cigar-making district", "New York City, to a Cuban father and an American mother"], correctIndex: 0, explanation: "The Negro Leagues Baseball Museum says Havana, which conflicts with the Hall of Fame's record. It is a small, checkable example of an institutional source carrying an error.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What was Pompez's account of Dutch Schultz taking over his operation?", options: ["Schultz placed a gun on the table", "Schultz bought a half interest for a sum Pompez never disclosed", "Schultz threatened to have him deported to Cuba", "Schultz offered protection from a rival Harlem operator"], correctIndex: 0, explanation: "Pompez then worked as Schultz's agent for $250 a month until Schultz's death in October 1935. The museum instead calls Pompez a member of the Schultz mob, so two institutional sources frame him differently.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "How did Pompez's 1937 prosecution end?", options: ["Probation in 1939, after he testified against a Tammany boss", "A prison term of five years served in New York State", "Deportation to Cuba, where he lived until his death", "Acquittal at trial after his extradition from Mexico City"], correctIndex: 0, explanation: "He was indicted in January 1937, fled, was arrested in Mexico City, was extradited, and was granted probation in May 1939.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What became of Alex Pompez after the Negro Leagues?", options: ["He was hired as a New York Giants scout in 1951", "He bought a minor league franchise in the Pacific Coast League", "He ran the Negro American League's booking office until 1962", "He returned to Cuba and organized a winter league there"], correctIndex: 0, explanation: "Later Director of International Scouting, and elected to the Hall of Fame in 2006. He is the one executive from this world who landed well in Organized Baseball, as an employee.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did Ed Bolden say in 1917 when Nat Strong tried to take Hilldale into his agency?", options: ["To affiliate with other than race men would be a mark against our name", "That Hilldale would never play in a ballpark it did not own outright", "That the Eastern clubs should organize their own booking cooperative", "That a booking fee of any size was more than a Black club could carry"], correctIndex: 0, explanation: "Strong then threatened to put a competing team across the street from Darby Field. Bolden allied with him anyway six years later.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did Bolden give Eddie Gottlieb in exchange for backing the Philadelphia Stars?", options: ["A reported 50 percent of the club", "A five percent share of every gate the club took", "Exclusive booking rights for the club's home dates", "A seat on the Negro National League's governing board"], correctIndex: 0, explanation: "Bolden's own justification was that in the Depression economy it was necessary to trade race for sound finances. Note that only one source states the 50 percent.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "How does this course frame Bolden's reversal on white partners?", options: ["As what a constraint does to a principle", "As hypocrisy that the Black press correctly exposed at the time", "As evidence that his 1917 statement had been a negotiating position", "As proof that Black capital was available and he chose not to use it"], correctIndex: 0, explanation: "He stated the principle in 1917 and traded half a club for backing he could not otherwise get, and said so plainly.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did Tom Wilson file on 26 March 1920?", options: ["A charter for the Nashville Negro Baseball Association and Amusement Company", "Articles of incorporation for the Homestead Grays Baseball Club", "The deed to the land on which Wilson Park would be built", "A petition to admit the Nashville Elite Giants to the Negro National League"], correctIndex: 0, explanation: "With an authorized capital stock of $5,000, which makes it the most reliable capitalization figure in this course.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What was the authorized capital stock in Tom Wilson's 1920 charter?", options: ["$5,000", "$10,000, which was the price of the Wilson Park land", "$27,000, matching Wilkinson's later sale to Baird", "$40,000, matching the Greenlee Field building permits"], correctIndex: 0, explanation: "A filed corporate figure rather than a press claim, which is what makes it the best capital number available on this subject.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What office did Tom Wilson hold from 1933 to 1947?", options: ["President of the Negro National League", "Commissioner of the Negro American League", "Secretary of the second Negro National League", "Treasurer of the Negro Southern League he had founded"], correctIndex: 0, explanation: "He was ousted in January 1947 and died that May. He had also founded the Negro Southern League in 1920.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did Abe Saperstein take from the East-West All-Star Game until 1941?", options: ["Five percent of the gate, for publicity", "A flat fee of $2,500, paid in advance of each game", "Ten percent of the net, matching the league treasury's share", "The concession revenue, in exchange for handling the game's promotion"], correctIndex: 0, explanation: "SABR's biography records the arrangement. He also co-owned the Birmingham Black Barons with the Black funeral-home operator Tom Hayes.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did Pompez and Posey write about Saperstein in the Pittsburgh Courier in 1941?", options: ["That he was ridiculing Negro baseball, Negro players and the race", "That he had never paid a Black club its agreed share of a gate", "That he was buying league votes to secure a franchise in Chicago", "That his publicity work had cost the East-West Game its crowd"], correctIndex: 0, explanation: "Posey also called his organization 'Abe Saperstein's Protective Association.' The course prints the objections and the counter-view together.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did the player Ted 'Double Duty' Radcliffe say about Saperstein?", options: ["He was the greatest friend to the colored athlete of anybody I know", "He took more from us than any landlord in the country", "He would book us anywhere, and he never once explained his cut", "He was the only white man in baseball who kept his word"], correctIndex: 0, explanation: "It is on the record alongside the owners' attacks, and the course prints both because a middleman can extract rent and open a market at the same time.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What is a cap table?", options: ["A list of who owns a company and in what proportion", "A ceiling on the salaries a club may pay in a season", "The schedule of fees a league charges its member clubs", "A record of the capital improvements made to a leased ballpark"], correctIndex: 0, explanation: "The lesson applies it to a league, naming each owner's race and source of funds as business facts.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What is a cover business?", options: ["A legitimate enterprise run alongside an illegal one", "A subsidiary formed to hold a club's ballpark lease", "A booking agency an owner sets up to serve his own club", "A club fielded under another name to evade a league ban"], correctIndex: 0, explanation: "Rufus Jackson's Manhattan Music Company is the example the lesson gives.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "Which economic logic does the six-Black-owned-parks article state correctly?", options: ["A Black-owned park cut the number of hands reaching for the gate", "A Black-owned park could be scheduled without regard to a white tenant", "A Black-owned park allowed a club to keep its concession revenue", "A Black-owned park could be mortgaged to fund a club's payroll"], correctIndex: 0, explanation: "The logic is right and the list itself does not survive checking. The article carries no footnotes.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What was Dyckman Oval's actual ownership status?", options: ["Leased, with most of the tract belonging to James N. Butterly", "Owned outright by Alex Pompez from 1932 until 1938", "Owned by the City of New York and rented by the season", "Owned jointly by Pompez and a white brewery owner"], correctIndex: 0, explanation: "Pompez took a three-year lease. The Hall of Fame's own page overstates it as 'his own stadium.'", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "How much did Pompez spend improving Dyckman Oval, and what happened to it?", options: ["$60,000, lost when the lease expired after 1937", "$100,000, recovered when the city bought the site for housing", "$40,000, which the building permits record in full", "$10,000, which bought the land under the grandstand"], correctIndex: 0, explanation: "Fireproof stands, a clubhouse and a beer garden, plus floodlights in 1935. The stands were demolished and the site became the Dyckman Houses.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "How did Hilldale finance its ballpark?", options: ["Annual improvements out of the operating budget", "A mortgage secured against the club's player contracts", "A share issue sold to Darby residents in 1917", "A loan from the Eastern Colored League's treasury"], correctIndex: 0, explanation: "SABR records that Hilldale lacked the capital to build outright, and Bolden did not renew the lease in 1930. Black-built and Black-controlled is not Black-owned.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What did Geri Strecker find in the records about Greenlee Field's cost?", options: ["Building permits totaling $40,000", "A construction contract for exactly $100,000", "No permits at all, because the park was built without them", "Two competing invoices, one for $40,000 and one for $100,000"], correctIndex: 0, explanation: "She published that alongside the observation that the cost might still have approached the $100,000 Greenlee claimed. It is the best example in this topic of a promoter's number becoming history.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "How much of Greenlee Field did Gus Greenlee own?", options: ["Twenty-five percent of the stock, holding no office", "All of it, through the Bedford Land Company he controlled", "Half, with the other half held by the Pittsburgh Crawfords", "None; he leased it from a white-owned holding company"], correctIndex: 0, explanation: "The holding company's treasurer was a white brewery owner, which complicates the standard story about the park considerably.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What was Greenlee Field designed to seat?", options: ["6,000", "7,500, which is the figure most accounts print", "14,500, matching Indianapolis's Perry Stadium", "12,000, matching Dyckman Oval's capacity in New York"], correctIndex: 0, explanation: "The 7,500 that circulates is a late upper-bound estimate after expansion, not the park's design capacity.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What is documented about Greenlee Field's architect?", options: ["He was one of about sixty Black registered architects then working", "He had designed Comiskey Park's 1927 grandstand expansion", "He was hired by the Bedford Land Company's white treasurer", "He worked without a fee in exchange for a share of the stock"], correctIndex: 0, explanation: "Louis Arnett Stuart Bellinger. Both Strecker and SABR's park page carry it, and it is one of the solid facts about the park.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "Who built Hamtramck Stadium?", options: ["John Roesink, a white haberdasher", "The Detroit Stars' Black owner Everett Watson", "The City of Hamtramck, which leased it by the season", "A holding company in which the Detroit Stars held a quarter"], correctIndex: 0, explanation: "The Detroit Historical Society is explicit on the point, which corrects a park widely believed to have been Black-owned.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What was Rickwood Field's ownership, and what did it mean for the Black Barons?", options: ["White-owned, so their home dates were the white club's leftovers", "Black-owned from 1927, which gave them a rare cost advantage", "Municipally owned, so both clubs had equal claim to dates", "Jointly owned, with the Black Barons holding a minority stake"], correctIndex: 0, explanation: "A. H. Woodward built it and rented it out. The Black Barons played alternate Sundays and whenever the white Barons were away.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "Which claim about Rickwood Field does this course explicitly refute?", options: ["That it was ever Black-owned", "That the Black Barons played there at all before 1940", "That it hosted the East-West All-Star Game in 1946", "That Abe Saperstein held a lease on it through Tom Hayes"], correctIndex: 0, explanation: "The Encyclopedia of Alabama states that Woodward built it and rented it to the Black Barons and to white teams in the area.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What is documented about Wilson Park's cost?", options: ["The land cost $10,000, with no construction figure anywhere", "The park cost $100,000, as Tom Wilson told the press", "Its construction cost $40,000 according to Nashville permits", "Its total cost was $5,000, matching the company's capital stock"], correctIndex: 0, explanation: "The deed was recorded 17 April 1929. The $10,000 was the dirt, and no build cost appears in any source.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "Which two parks on the canonical list could this course not verify?", options: ["Martin Park in Memphis and Tate Park in Cleveland", "Wilson Park in Nashville and Greenlee Field in Pittsburgh", "Dyckman Oval in New York and Hilldale Park in Philadelphia", "Hamtramck Stadium in Detroit and Rickwood Field in Birmingham"], correctIndex: 0, explanation: "SABR has no park page for Martin Park and the course therefore asserts nothing about either.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What replaced Greenlee Field, Dyckman Oval and Schorling Park?", options: ["Public housing projects", "Municipal parking lots serving nearby stadiums", "Freeway interchanges built in the 1950s and 1960s", "Shopping centers developed by their former landlords"], correctIndex: 0, explanation: "Bedford Dwellings, Dyckman Houses and Wentworth Gardens. The route courses in this catalog teach the instrument that did it.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What was the arrangement between Rube Foster and his landlord at Schorling Park?", options: ["No written contract at all", "A percentage of the gate set at 25 percent", "A flat annual rent paid in advance each spring", "A sublease from Charles Comiskey, renewed each season"], correctIndex: 0, explanation: "Schorling took over the club after Foster's 1926 breakdown and offered his family nothing.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What is a leasehold improvement?", options: ["Money a tenant spends on a building it does not own", "A clause allowing a tenant to buy the premises later", "An upgrade a landlord funds and recovers through higher rent", "A repair a tenant is obliged to make under its lease"], correctIndex: 0, explanation: "Pompez's $60,000 at Dyckman Oval is the example: it reverted to the landlord when the three-year lease ended.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What is fee ownership?", options: ["Holding actual title to land and buildings", "Paying a fixed fee per playing date rather than a percentage", "Owning a share of a league rather than of a club", "Holding a lease long enough to be treated as an owner"], correctIndex: 0, explanation: "It is what almost no Negro League club had, and the distinction from a lease is what the whole lesson turns on.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What is a holding company, in this lesson's example?", options: ["A firm formed to own an asset, such as Greenlee Field", "A company that holds player contracts on a club's behalf", "A league subsidiary that leases parks to member clubs", "A firm that holds a club's cash reserves between seasons"], correctIndex: 0, explanation: "The Bedford Land Company owned the ballpark, with Greenlee holding a quarter of the stock and no office.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What was on the short asset side of most Negro League clubs' balance sheets?", options: ["Uniforms, equipment, a bus, and player contracts", "A ballpark, a clubhouse, and the land under both", "A booking agency, a schedule, and a league franchise", "Concession rights, advertising contracts, and a radio deal"], correctIndex: 0, explanation: "The item almost none of them had is the ballpark, and it is the item that decides everything else.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What does the Rickwood scheduling arrangement explain about the whole industry?", options: ["Why clubs took to the road instead of building a home schedule", "Why the leagues never adopted a balanced schedule", "Why Sunday games were banned in several league cities", "Why white clubs refused to play Black clubs in exhibitions"], correctIndex: 0, explanation: "A club that cannot choose its home dates cannot build a home schedule, which is the structural cause of the barnstorming model.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "Where did Willie Mays's 1948 signing salary sit, as a data point on player pay?", options: ["$250 a month with the Birmingham Black Barons", "$800 a year, matching Josh Gibson's 1939 census figure", "$4,000 a season, matching Larry Doby's Newark salary", "$200 a month, matching Hank Aaron's 1951 Clowns deal"], correctIndex: 0, explanation: "Aaron signed for $200 a month with the Clowns in 1951, so the two figures bracket what a young prospect was worth.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What made Foster reluctant about J. L. Wilkinson in 1920, and why did he relent?", options: ["White ownership, and Wilkinson's reputation for integrity", "Wilkinson's lack of a ballpark, and his promise to build one", "The Monarchs' distance from the league's other cities, and the railroads", "Wilkinson's booking business, and his agreement to give it up"], correctIndex: 0, explanation: "SABR's biography records both the reluctance and the reason for the change of mind.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "Which owner in this section held no illegal business and no inherited wealth?", options: ["Ed Bolden", "Gus Greenlee", "Alex Pompez", "Abe Manley"], correctIndex: 0, explanation: "His capital was a postal clerk's salary and reinvested gate receipts, which is why the course uses him against the racketeer generalization.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What did the Newark Eagles franchise award in November 1934 create?", options: ["The Brooklyn Eagles, who moved to Newark in 1936", "The Newark Eagles, who played in Newark from the first season", "A second Manley-owned club alongside the Baltimore Elite Giants", "A Brooklyn franchise the Manleys sold before it played a game"], correctIndex: 0, explanation: "No franchise price is stated in any source, which is itself worth noticing given how often clubs changed hands.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What does the course say about the phrase 'they were all racketeers'?", options: ["It is false, and two of the most durable operations disprove it", "It is accurate for every club in the second Negro National League", "It is unverifiable because no owner's finances were ever audited", "It is a slur invented by the white press during the integration fight"], correctIndex: 0, explanation: "Posey's inherited coal money and Bolden's civil service salary capitalized two of the longest-running operations in the history.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "Why does the course state each owner's race explicitly?", options: ["Because it is a business fact routinely got wrong", "Because league rules restricted ownership by race", "Because MLB's 2020 review turned on the question", "Because the Black press reported it in every account"], correctIndex: 0, explanation: "Wilkinson and Baird were white, Saperstein and Pollock were white, and both facts are regularly omitted from popular accounts of a Black-owned industry.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "Which figure in this section was co-owner of the Birmingham Black Barons?", options: ["Abe Saperstein, with the Black funeral-home operator Tom Hayes", "Gus Greenlee, with the Pittsburgh numbers operator Woogie Harris", "Syd Pollock, with the Miami bootlegger Johnny Pierce", "Ed Bolden, with the Philadelphia booking agent Eddie Gottlieb"], correctIndex: 0, explanation: "They shared ownership until 1952, and Hayes was the man who sold Willie Mays's contract to the Giants in 1950.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What does the course say a firm that owns none of its inputs must do?", options: ["Pay rent on all of them", "Merge with a competitor that owns some of them", "Operate at a loss until it can buy the most costly one", "Charge higher ticket prices than a competitor that owns them"], correctIndex: 0, explanation: "Section 3 counts the four parties that took a share of a single gate before the home club's owner saw anything.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "Why is the difference between Black-built and Black-owned the whole undercapitalization lesson?", options: ["Control without title ends the moment a lease does", "Because a built park could not be insured without title", "Because a league franchise required proof of fee ownership", "Because banks would lend against a built park but not a leased one"], correctIndex: 0, explanation: "Hilldale improved a leased ground year by year and lost it when Bolden did not renew in 1930.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "How does the course describe the six-park list's evidentiary problem?", options: ["The article carries no footnotes and two entries fail checking", "The article was written before the archives were catalogued", "The list counts parks that had not been built when it was compiled", "The list comes from a promoter rather than from a historian"], correctIndex: 0, explanation: "Dyckman Oval was leased and Hilldale Park was leasehold-improved, so the list overstates Black ownership by two.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What did the 1940 census reveal about Negro League player incomes for 1939?", options: ["They ranged widely, with several stars below the national average", "They exceeded the national average for every player recorded", "They were not recorded, because players were self-employed", "They matched major league salaries for the leagues' biggest names"], correctIndex: 0, explanation: "The national average income in 1939 was $1,368, and the census is a rare primary window on what these players actually earned.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What is the significance of Posey's father having invested in the Pittsburgh Courier?", options: ["The paper that drove the integration campaign was partly financed by an owner's family", "The Courier was therefore obliged to publish the Grays' financial results", "The Grays used the paper's presses to print their tickets and programs", "The family's investment gave the Grays first call on the paper's sports pages"], correctIndex: 0, explanation: "Section 3 develops the pattern of the press as infrastructure rather than as observer.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "What kind of evidence is a filed corporate charter, compared to a press claim?", options: ["A document created for a regulator rather than for publicity", "A document that historians have already checked and endorsed", "A document that always states the money actually raised", "A document whose figures a court has tested under oath"], correctIndex: 0, explanation: "Authorized capital stock is what the company was permitted to issue, which is why the course calls it the most reliable rather than the most complete figure.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "Which of these did NOT own a ballpark in fee?", options: ["Hilldale", "The Nashville Elite Giants", "Wilson Park's owners in Nashville", "Tom Wilson, who recorded the deed in April 1929"], correctIndex: 0, explanation: "Hilldale improved a leased ground out of operating budget and lost it in 1930, while Wilson Park's land was bought outright.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What did the course say about Effa Manley's $15,000 bus?", options: ["It was air conditioned and bought with 1946 World Series winnings", "It was destroyed in a fire in the Holland Tunnel in 1950", "It was bought with the proceeds of the Larry Doby sale", "It was leased rather than purchased, on a three-year term"], correctIndex: 0, explanation: "Both the Hall of Fame and Andscape carry the detail, and it is one of the few concrete asset purchases documented in this history.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What is the point of naming both motives behind numbers-financed ownership?", options: ["A course that reports only the sympathetic one is not teaching the evidence", "The two motives cancel out and leave the question unanswerable", "Only the laundering motive is supported by peer-reviewed work", "Only the capital-access motive was ever stated by the owners themselves"], correctIndex: 0, explanation: "Knopp's article carries both: clubs as laundering fronts, and owners who claimed a genuine desire to keep the teams afloat.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "Which owner's exit from the business does the course describe as selling to a dentist?", options: ["The Manleys, who sold the Newark Eagles after 1948", "Wilkinson, who sold the Monarchs to Tom Baird in 1948", "Tom Hayes, who left the Birmingham Black Barons in 1952", "Ed Bolden, who left the Philadelphia Stars in 1946"], correctIndex: 0, explanation: "They lost $50,000 across 1947 and 1948, sold to a Memphis dentist, and the club moved to Houston for 1949.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "Which figure did Foster's own advocacy produce that this course labels a claim rather than an audit?", options: ["Player payroll rising from $50,000 to $500,000 in three years", "The league treasury receiving ten percent of all receipts", "Attendance of three million across the leagues in 1942", "A five percent booking fee charged to every member club"], correctIndex: 0, explanation: "It is a league president's own advocacy number, quoted by SABR as his claim rather than as an audited figure.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What does 'trade race for finances' refer to?", options: ["Bolden's own description of giving a white backer half a club", "Foster's decision to admit a white owner to the 1920 league", "Saperstein's arrangement with Tom Hayes in Birmingham", "Pompez's decision to work as an agent for Dutch Schultz"], correctIndex: 0, explanation: "He said it about the Gottlieb partnership in the Depression, when sound finances were, in his words, few and far between in the Black community.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "Why does the course keep Beer's word 'probably' on the Greenlee numbers estimate?", options: ["Because removing a source's hedge misrepresents the source", "Because the figure was later shown to be an underestimate", "Because Greenlee himself gave a different figure in court", "Because SABR published a second, incompatible estimate"], correctIndex: 0, explanation: "It is the same discipline the course applies to the Gibson home run totals and the Paige sale price.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What does the course conclude about which owners had access to capital?", options: ["Only those with inheritance, another business, or cash-heavy enterprise", "Only those white enough to obtain bank credit in their own names", "Only those who held office in a league and could borrow against it", "Only those who owned a ballpark they could pledge as collateral"], correctIndex: 0, explanation: "Which is exactly the ownership mix the evidence shows, and the reason the course calls it predictable.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "Which park did the course say was one of two African American owned professional ballparks?", options: ["Wilson Park in Nashville", "Dyckman Oval in New York", "Hilldale Park in Philadelphia", "Hamtramck Stadium in Detroit"], correctIndex: 0, explanation: "SABR's Tom Wilson biography states it, and Wilson Park opened three years before Greenlee Field, which complicates the 'first Black-owned ballpark' claim.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What did the Bedford Land Company's officers look like?", options: ["A Black physician as president and a white brewery owner as treasurer", "Gus Greenlee as president with two Black Pittsburgh businessmen", "Three white investors with Greenlee holding no stock at all", "The Pittsburgh Crawfords' players, who held stock in lieu of salary"], correctIndex: 0, explanation: "Greenlee owned 25 percent of the stock and held no office, which SABR's park page corroborates.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What is the course's verdict on 'the first Black-owned ballpark' claim for Greenlee Field?", options: ["Unverified, and contested by SABR itself", "Verified by the Pennsylvania historical marker at the site", "Verified, since Wilson Park was owned by a company rather than a person", "Unverifiable, because no deed for either park survives"], correctIndex: 0, explanation: "SABR's page records the marker's claim alongside the counter-argument that it was actually the last such venture, and Wilson Park opened in 1929.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What does the course ask you to notice about the three parks replaced by public housing?", options: ["That these grounds were on the clearance instrument's list", "That the clubs were compensated at market value in each case", "That the projects were named after the ballparks they replaced", "That each was demolished within a year of its club folding"], correctIndex: 0, explanation: "The route courses in this catalog teach the instrument; this course only asks you to notice where these grounds appear in its path.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "How does the course describe the relationship between Section 2 and Section 3?", options: ["Section 2 shows why they could not buy the building; Section 3 shows what that cost", "Section 2 covers the leagues and Section 3 covers the clubs", "Section 2 is about owners and Section 3 is about players", "Section 2 gives the verified figures and Section 3 gives the contested ones"], correctIndex: 0, explanation: "The four hands reaching into a single gate are the recurring price of owning none of your inputs.", sourceLessonSlug: "nl-what-a-club-owned" },
        ],
      },
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
    {
      slug: "nl-quiz-gate",
      title: "12 · Knowledge check: the gate",
      section: "Section 3 · The gate",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          { prompt: "What source did James Overmyer work from for the Yankee Stadium figures?", options: ["The Yankees' own cash ledgers and business records", "The Negro National League's surviving treasury minutes", "Attendance reports filed with the New York State Athletic Commission", "The Pittsburgh Courier's season-by-season financial summaries"], correctIndex: 0, explanation: "Donated to the National Baseball Hall of Fame in 1955 and 1970, covering 1913 to 1950. It is an audited primary record, which is rare on this subject.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "Why does the course call the Overmyer figures a different class of evidence?", options: ["They come from an audited primary record rather than a secondary account", "They were published by Major League Baseball rather than by a historian", "They were compiled from box scores rather than from financial statements", "They were verified by the Negro Leagues Baseball Museum before publication"], correctIndex: 0, explanation: "Almost everything else in this topic is a secondary source citing another secondary source, and a surprising amount traces back to a promoter's press release.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "When was the first Black baseball game played at Yankee Stadium?", options: ["5 July 1930", "2 May 1920, the same date as the Negro National League's first game", "10 September 1933, the date of the first East-West All-Star Game", "In 1939, when the Yankees first offered a percentage-of-gross deal"], correctIndex: 0, explanation: "A union benefit doubleheader. The Yankees took $4,243, about 31 percent of the gross gate.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What did the Yankees take from that first 1930 doubleheader?", options: ["$4,243, about 31 percent of the gross gate", "$687, which was one third of the gate on a 1931 date", "$2,500 flat, the rate that applied under Greenlee's league", "$1,000 plus 25 percent of gross, the arrangement adopted in 1939"], correctIndex: 0, explanation: "About $3,237 of it after ticket printing and game-day payroll.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What was the Yankees' flat rate per date under Greenlee's league from 1934 to 1938?", options: ["$2,500 to $3,000", "$500 to $600, the range Nat Strong offered as guarantees", "$4,243, matching the 1930 benefit doubleheader", "$1,000, with a 25 percent minimum against gross"], correctIndex: 0, explanation: "A flat fee, which is the arrangement the leagues spent a decade trying to change.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What changed at Yankee Stadium before the 1939 season?", options: ["Flat rent became 25 percent of gross with a $1,000 minimum", "The Yankees stopped renting to Black clubs entirely for two seasons", "The league bought the dates outright rather than renting them", "The Yankees raised the flat fee to $3,000 and dropped percentage terms"], correctIndex: 0, explanation: "The Negro National League had hired Eddie Gottlieb as its booking agent for Stadium games, and the terms changed with him.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "Why is a percentage rent better for a tenant club than a flat fee?", options: ["It moves weather and draw risk back to the landlord", "It is always a smaller share of the gate than a flat fee", "It exempts the club from paying anything on a rained-out date", "It gives the club a claim on the landlord's concession revenue"], correctIndex: 0, explanation: "A flat fee is ruinous on a rainy day and cheap on a big one. Black promoters paid flat rent for a decade before winning the percentage deal, and paid a white agent to get it.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What did Black baseball gross at Yankee Stadium between 1930 and 1944?", options: ["About $426,000", "About $114,550, which was the clubs' own share", "About $100,000 a year, as one widely repeated account says", "About $254,668, which was the landlord's fifteen-year total"], correctIndex: 0, explanation: "The Yankees kept $114,550, about 31 percent, and the Negro League clubs shared $254,668, about 69 percent.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What was the Yankees' fifteen-year total from Black baseball at the Stadium?", options: ["$114,550", "$426,000, which was the gross across all fifteen years", "$254,668, which the Negro League clubs shared between them", "$100,000 a year, as reported in an unfootnoted SABR article"], correctIndex: 0, explanation: "An average near $7,600 a year, peaking in the war seasons. Setting it against the reported $100,000 a year is this course's method in one comparison.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What was the average attendance at Black baseball dates at Yankee Stadium?", options: ["About 11,600 per date", "About 20,400 per date, which was the figure for all dates", "About 36,500 per date, matching the East-West Game average", "About 48,000 per date, matching the 1947 East-West crowd"], correctIndex: 0, explanation: "Dates featuring Satchel Paige averaged about 20,400, nearly double the baseline.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What did dates featuring Satchel Paige average at Yankee Stadium?", options: ["About 20,400", "About 11,600, the same as every other Black baseball date", "About 30,000, matching the single best date on record", "About 27,000, matching the 1946 game against Bob Feller"], correctIndex: 0, explanation: "Nearly double the baseline. One player nearly doubled the gate, which is why he was a rentable asset.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What personal fee did Paige take for pitching on loan at Yankee Stadium in 1941?", options: ["$500", "$5,000, the contingent portion of the later Doby sale", "$250 a month, the rate Alex Pompez was paid by Dutch Schultz", "$10 and expenses, the fee an East-West umpire received"], correctIndex: 0, explanation: "On loan from the Monarchs. The player himself was an asset a club could rent out, which is the same mechanism as a contract sale.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "How does the reported '$100,000 a year' compare with the ledgers?", options: ["The ledgers show $114,550 across fifteen years", "The ledgers confirm it almost exactly for the war seasons", "The ledgers show a higher figure, closer to $150,000 a year", "The ledgers do not cover the 1940s, so no comparison is possible"], correctIndex: 0, explanation: "The $100,000 comes from an unfootnoted article that hedges it as 'a reported' number, and it cannot mean Yankee Stadium alone.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What share of Newark Eagles receipts did the Bears take at Ruppert Stadium?", options: ["20 percent", "25 percent, matching the Yankee Stadium percentage deal", "35 percent, matching the visiting club's league share", "40 percent, the highest rate recorded at any park"], correctIndex: 0, explanation: "Well below the Yankees' 25 to 40 percent, which is a difference in leverage rather than a difference in rate cards.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What are the Griffith Stadium figures reported to be, and how should they be read?", options: ["The landlord's profit, not the rent, and through a secondary source", "The Grays' own net receipts, audited by the league office", "The rent the Grays paid, taken from the Senators' statements", "The gate the Grays produced, counted at the turnstile"], correctIndex: 0, explanation: "The Senators are reported to have netted $60,000 from the Grays in 1942 and $100,000 in 1943. The chain runs through a secondary source citing a book rather than through the Senators' own statements.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "How many did the Homestead Grays draw at Griffith Stadium in 1943?", options: ["225,000 in 26 games", "120,292 across a full home season, the Eagles' 1946 figure", "51,723 in a single game, the East-West record", "2,620,627, which was Cleveland's 1948 major league record"], correctIndex: 0, explanation: "The Senators are reported to have taken a $100,000 profit from the Grays that season, which is the landlord's profit rather than the rent.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What was Clark Griffith's conflict of interest?", options: ["He opposed integration while renting to one of its most profitable tenants", "He owned a share of the Homestead Grays as well as the Senators", "He held a booking agency that took a cut of Negro League dates", "He had voted for the Caucasian-only clause in a golf association"], correctIndex: 0, explanation: "Integration would cost him a tenant. That is documented rather than inferred, and it is why his 1945 defense of Negro League contracts must be read with care.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What is a gross gate?", options: ["The total taken at the door before any deduction", "The amount left after the landlord's share is paid", "The revenue from tickets plus concessions and programs", "The sum a visiting club is guaranteed under league rules"], correctIndex: 0, explanation: "It is the base to which every percentage in this course is applied, which is why the word matters.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What does this course mean by evidence class?", options: ["How a figure was produced, from a ledger, a charter, a paper or a claim", "Whether a figure appears in more than one independent source", "Whether a figure is a rate statistic or a counting statistic", "How recently a figure was published relative to the events"], correctIndex: 0, explanation: "The Yankee ledgers, Tom Wilson's charter and Strecker's building permits are one class; a promoter's press release is another.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What did a booking agent actually control?", options: ["Access to venues and dates", "The contracts of the players a club could sign", "The schedule of league games each season", "The advertising revenue printed in a club's programs"], correctIndex: 0, explanation: "Which is why a percentage of the gate was the price, and why Black owners could not simply refuse to deal.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What was Nat Strong's rate for booking venues such as Yankee Stadium and Ebbets Field?", options: ["5 to 10 percent of the gate", "A flat $500 per date, regardless of the crowd", "25 percent of gross, with a $1,000 minimum", "35 percent, matching the visiting club's league share"], correctIndex: 0, explanation: "SABR's Goldman gives the range. Black operators had to pay him a slice of receipts to get a place to play.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What positions did Nat Strong hold besides booking agent?", options: ["Owner of the Brooklyn Royal Giants and charter owner of the Eastern Colored League", "President of the Negro National League and its scheduling secretary", "Half owner of the Philadelphia Stars and league booking agent", "Owner of the Harlem Globetrotters and publicist for the East-West Game"], correctIndex: 0, explanation: "The man taking a cut of everyone's gate sat on the league's governing commission.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What flat guarantees did Nat Strong offer Black clubs for his dates?", options: ["$500 to $600", "$2,500 to $3,000, matching the Yankee Stadium flat rate", "$1,000, with a percentage above that threshold", "$4,000 a season, paid in monthly installments"], correctIndex: 0, explanation: "Goldman describes them as minimal, and a guarantee transfers all the upside of a big crowd to the party offering it.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What made Eddie Gottlieb's position the sharpest example in this section?", options: ["He booked Yankee Stadium for the league while owning half the Philadelphia Stars", "He owned three clubs at once in three separate leagues", "He was the only white agent barred from league meetings", "He set the league's schedule as well as booking its outside dates"], correctIndex: 0, explanation: "A white booking agent took a percentage off the top of rival clubs' gates while co-owning a member club, and the Black owners put it in the minutes.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What did Effa Manley call Gottlieb's fee on Yankee Stadium bookings?", options: ["A prohibitive 10 percent of revenues", "An honest price for access nobody else could provide", "A charge no league in America would have tolerated", "A five percent assessment disguised as a service"], correctIndex: 0, explanation: "Cum Posey separately charged that Strong and Gottlieb were insisting on 5 percent of the receipts of any league game between Eastern and Western clubs.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "Add up the claims on one league gate at Yankee Stadium under the second Negro National League.", options: ["Landlord 25 to 40, agent 5 to 10, visiting club 35, league office 5", "Landlord 20, agent 5, visiting club 40, league office 10", "Landlord 31, agent 10, visiting club 35, league office 5", "Landlord 25, agent 5, visiting club 50, league office nothing"], correctIndex: 0, explanation: "Four parties are paid before the home club's owner sees anything, and two of them do not work for him.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "Why does the course insist the booking agents were selling something real?", options: ["Each cut was the price of an input the club could not supply", "Because no Black agent was ever available to do the same work", "Because the league constitution required an outside booking agent", "Because the landlords refused to deal directly with Black clubs"], correctIndex: 0, explanation: "A building, access to dates, an opponent and a championship. A firm that owns none of its inputs pays rent on all of them.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What does 'off the top' mean?", options: ["Taken from gross receipts before any other party is paid", "Deducted from the home club's share alone", "Charged only when a date exceeds a stated attendance", "Paid at the end of a season out of accumulated profit"], correctIndex: 0, explanation: "It is where a booking agent's percentage sits, which is why it is the most expensive kind of fee.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What is a guarantee, in this context?", options: ["A fixed sum promised a visiting club regardless of the crowd", "A landlord's promise of a minimum number of home dates", "A league's undertaking to cover a club's travel costs", "A bond a club posts against completing its schedule"], correctIndex: 0, explanation: "Nat Strong offered $500 to $600 a date, which caps a club's upside on a big crowd.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What is an input, in this lesson's usage?", options: ["Something a business must have, which it either owns or rents", "The money an owner puts into a club at its founding", "The talent a club develops before selling it on", "The share of a gate a club receives as the visiting team"], correctIndex: 0, explanation: "Here the inputs included the ballpark itself, which almost no club owned.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "How does the course treat the disagreement about Abe Saperstein?", options: ["It prints the owners' attacks and a player's defense together", "It concludes that Posey and Pompez were correct and says so", "It omits the defense as a single-sourced and unreliable claim", "It treats him only as a basketball figure and not as a baseball one"], correctIndex: 0, explanation: "A middleman who extracts rent and opens a market is doing both at once, which is why the owners argued about him for twenty years instead of agreeing.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What is the maximum number of league games a Negro League season ever contained?", options: ["99", "154, matching the American and National Leagues", "45, which the 1945 Homestead Grays played", "200, which a major club rarely fell below"], correctIndex: 0, explanation: "Against 154 in the American and National Leagues, and a major Black club rarely played fewer than 200 games of all kinds in a year.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "How many league games did the 1945 pennant-winning Homestead Grays play?", options: ["45", "99, the maximum any Negro League season contained", "154, the same as an American or National League club", "26, which is the number of games they played at Griffith Stadium"], correctIndex: 0, explanation: "A pennant won over 45 games, in a season of more than 200 games in total, is a good illustration of what the standings measured.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "How many games did a major Black club rarely fall below in a season?", options: ["200", "99, the league maximum in any season", "154, the American and National League schedule", "129, the Rens' game total in 1938-39"], correctIndex: 0, explanation: "So between a fifth and a half of a club's schedule was the league and the rest was the actual company.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Who organized the East-West League, and when?", options: ["Cum Posey, in January 1932", "Gus Greenlee, in January 1933 at a Chicago meeting", "Rube Foster, in February 1920 in Kansas City", "Ed Bolden, in January 1929 in Philadelphia"], correctIndex: 0, explanation: "It began play in May and collapsed by early July, which is the strongest evidence in this section.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Why did the East-West League collapse in 1932?", options: ["Its clubs abandoned the schedule for better paying outside bookings", "Its clubs could not meet the $500 forfeit deposit the league required", "Its ballparks were requisitioned during the Depression for public works", "Its president died mid-season and no successor could be agreed"], correctIndex: 0, explanation: "They turned to bookings with white semipro teams. A whole league was killed by its own members preferring outside dates, which is a measurement rather than an anecdote.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "How long did the East-West League last?", options: ["Under two months of play", "One full season, from May to September 1932", "Six seasons, from 1932 to 1937", "Three seasons, ending with the second Negro National League's founding"], correctIndex: 0, explanation: "Organized in January 1932, playing from May, collapsed by early July.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "When and where was the first East-West All-Star Game played?", options: ["10 September 1933, at Comiskey Park", "2 May 1920, at Washington Park in Indianapolis", "5 July 1930, at Yankee Stadium in New York", "26 August 1962, at Municipal Stadium in Kansas City"], correctIndex: 0, explanation: "Retrosheet's log runs from that date through 26 August 1962, overwhelmingly at Comiskey with occasional second games elsewhere.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "When was the last East-West All-Star Game played?", options: ["26 August 1962", "1948, when the Negro National League folded", "1960, which is the last game at Comiskey Park", "1947, the year Jackie Robinson debuted in Brooklyn"], correctIndex: 0, explanation: "1960 was the last East-West Game at Comiskey Park and 1962 was the last East-West Game anywhere. Confusing the two is exactly the error that propagates.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What was the record paid attendance at an East-West All-Star Game?", options: ["51,723, in 1943", "48,112, in 1947, Jackie Robinson's rookie year", "47,865, in 1941, the last year Saperstein took his cut", "45,474, in 1946, the year after the war ended"], correctIndex: 0, explanation: "The run's average was near 36,500 by Overmyer's reckoning, and the 1950 game drew 24,614.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What did the East-West Game draw in 1947, and why does the date matter?", options: ["48,112, near a record in Robinson's rookie year", "24,614, showing the collapse was already complete", "51,723, which remains the game's all-time record", "31,714, the lowest crowd of the war years"], correctIndex: 0, explanation: "The collapse is a 1948 to 1950 phenomenon rather than an instantaneous response to integration.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What did the East-West Game draw in 1950?", options: ["24,614", "48,112, matching the 1947 crowd", "51,723, matching the 1943 record", "36,500, which is the average across the whole run"], correctIndex: 0, explanation: "Half the 1947 figure, three seasons later.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What did Gus Greenlee put up personally for the East-West Game's venue?", options: ["$2,500 in advance", "$1,000 as a minimum against 25 percent of gross", "Five percent of the gate, paid after the event", "Ten percent of the net, paid to the league treasury"], correctIndex: 0, explanation: "Weeks before the date, for what every source calls the exorbitant rental of Comiskey Park, a white-owned building.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "How much of the East-West Game's net reached the league treasury in 1934?", options: ["Ten percent", "Thirty-five percent, matching the visiting club's league share", "Half, with the other half going to the participating clubs", "All of it, which is why the 1935 resolution changed nothing"], correctIndex: 0, explanation: "A 1935 league resolution records it, and asks that almost all profits go to the association's treasury in future.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Who was paid before Black baseball's own league at its biggest annual event?", options: ["A white landlord in advance and a white promoter off the top", "The visiting clubs, then the players, then the league office", "The umpires, the groundskeepers, and then the participating clubs", "The Chicago Defender and the Pittsburgh Courier, for the ballot"], correctIndex: 0, explanation: "Greenlee's $2,500 to Comiskey Park in advance and Saperstein's 5 percent of the gate for publicity.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What does this course refuse to state about East-West Game players?", options: ["What they were paid", "How they were selected for the two squads", "How many of them later played in the major leagues", "Which of them appeared in more than one game"], correctIndex: 0, explanation: "The commonly repeated $50 or $100 has no locatable source. The umpires' fee, by contrast, is documented.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What was umpire Fred McCrary paid for an East-West Game?", options: ["$10 and expenses", "$50 a game, the figure commonly repeated for players", "$100 a game, plus travel from his home city", "Nothing, because umpires were supplied by the home club"], correctIndex: 0, explanation: "From 1938 to 1944. When he asked for more, the owners said the umpire was not important.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Who announced the second Negro National League, and what did he become?", options: ["A Pittsburgh Courier writer, who became its secretary", "A Chicago Defender writer, who became its commissioner", "Gus Greenlee, who became its permanent chairman", "Rollo Wilson, who became its first president"], correctIndex: 0, explanation: "The announcement ran in the Courier's year-end 1932 edition, and the writer took the secretaryship of the league he had announced.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What office did the Pittsburgh Courier's Rollo Wilson hold in 1934?", options: ["Commissioner of the Negro National League", "Secretary of the Negro American League", "President of the Negro Southern League", "Booking agent for Yankee Stadium dates"], correctIndex: 0, explanation: "He was voted out for 1935 in favor of Ferdinand Q. Morton. A newspaper's writer commissioning the league his paper covered is the pattern this lesson names.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What office did the Chicago Defender's sports editor Al Monroe take in 1936?", options: ["Secretary of the Negro American League", "Commissioner of the second Negro National League", "President of the Negro Southern League", "Chairman of the East-West Game's balloting committee"], correctIndex: 0, explanation: "The corporate secretaryship of a league his own paper reported on.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What was Cum Posey's father's relationship to the Pittsburgh Courier?", options: ["He was one of its original investors", "He was its first sports editor before entering business", "He printed it on presses owned by his coal company", "He bought a controlling interest in it in the 1920s"], correctIndex: 0, explanation: "The paper that made the East-West Game and drove the integration campaign was capitalized in part by the family that owned the Homestead Grays.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "How does this course characterize the press's role, without flinching?", options: ["As institution-building, which is what happens when a community supplies every function", "As a corruption scandal that the leagues concealed from their public", "As ordinary sports journalism that later writers have misread", "As a conflict the owners raised repeatedly and never resolved"], correctIndex: 0, explanation: "But a course that presents the Black press purely as a watchdog is teaching something false, and Section 5 shows the same press turning on the Black owners.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What is a semipro club?", options: ["One whose players are paid but not full time", "One that plays only exhibition games against professionals", "One that operates without a league franchise of any kind", "One whose players receive a share of the gate instead of wages"], correctIndex: 0, explanation: "Bookings against white semipro clubs outpaid league games badly enough to kill a league in 1932.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What is advance rental?", options: ["Rent paid before the event takes place", "Rent set as a percentage of the gate rather than a fee", "Rent covering a whole season paid at its start", "Rent a landlord waives in exchange for a share of concessions"], correctIndex: 0, explanation: "Greenlee put $2,500 on the line personally, weeks before the East-West Game, which is all downside risk for the tenant.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What did the 1920 constitution do that this section says explains everything?", options: ["It made non-league games legitimate revenue from day one", "It set the league's cut of every gate at five percent", "It barred clubs from playing white semipro opposition", "It required each club to own or lease a home ballpark"], correctIndex: 0, explanation: "The standings were a product the league sold. They were never the company's revenue.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Which single sentence best summarizes Section 3?", options: ["The leagues were not the business, the road was", "The landlords took more than the leagues ever did", "The press covered the leagues better than any historian has since", "The East-West Game was the only profitable date of any season"], correctIndex: 0, explanation: "League games never exceeded 99 and could be 45, against more than 200 games a year in total.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What was the Yankees' share of Black baseball's Yankee Stadium gross across fifteen years, as a percentage?", options: ["About 31 percent", "About 69 percent, with the clubs taking the remainder", "About 25 percent, the rate set in 1939", "About 40 percent, the rate on the Giants-Cubans doubleheader"], correctIndex: 0, explanation: "The clubs shared about 69 percent, or $254,668 of the roughly $426,000 gross.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What was the 1931 Harlem Stars date worth to the Yankees?", options: ["$687, one third of the gate", "$4,243, about 31 percent of the gross", "$1,000 flat, plus ticket printing costs", "$2,500, the rate under Greenlee's league"], correctIndex: 0, explanation: "The early arrangements varied date by date, which is what the shift to a standing percentage in 1939 replaced.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "Why did the leagues have to pay a white booking agent to get better rent?", options: ["He controlled access to the dates the deal depended on", "The Yankees refused to negotiate with any Black representative", "League rules required an outside agent for interleague dates", "No Black agent had the capital to guarantee the minimum"], correctIndex: 0, explanation: "Access is a service, which is the honest answer to why Black owners took white middlemen on at all.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What did Ed Bolden say made dealing with Nat Strong necessary?", options: ["Strong's tight control of the New York market", "Strong's willingness to lend against a club's gate", "Strong's seat on the Eastern Colored League commission", "Strong's ownership of the only lighted park in the East"], correctIndex: 0, explanation: "He said it six years after declaring that affiliating with other than race men would be a mark against Hilldale's name.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "When did Nat Strong die?", options: ["January 1935", "December 1930, the same month as Rube Foster", "1928, when the Eastern Colored League disbanded", "1939, when Gottlieb took over the Yankee Stadium bookings"], correctIndex: 0, explanation: "His grip on New York venues had shaped Eastern Black baseball for a generation before that.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What did Saperstein's 5 percent of the East-West gate pay for?", options: ["Publicity", "The rental of Comiskey Park for the date", "The players' appearance fees for both squads", "The printing and counting of the newspaper ballots"], correctIndex: 0, explanation: "He held that arrangement until 1941, on Black baseball's single largest annual payday.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What does the four-way slice show about the industry, in the course's argument?", options: ["It is the recurring price of owning none of your inputs", "It shows the leagues were overcharged relative to white clubs", "It shows the owners were poor negotiators in every market", "It shows the league office was the most expensive middleman"], correctIndex: 0, explanation: "Section 2 explained why they could not buy the building; Section 3 counts what that costs every time the turnstiles turn.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What is barnstorming, as Section 3 defines it?", options: ["Playing outside any league schedule for a negotiated share of the crowd", "Touring the South in spring before the league season opens", "Playing a series of games against major league opposition", "Playing in a city where the club holds no territorial rights"], correctIndex: 0, explanation: "It was most of what these clubs actually did, and the 1920 constitution treated it as legitimate.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What did Overmyer put the East-West Game's average attendance at across its run?", options: ["About 36,500", "About 11,600, the Yankee Stadium baseline", "About 20,400, the Paige-date average", "About 51,723, which was the single-game record"], correctIndex: 0, explanation: "Individual years ranged from 24,614 in 1950 to 51,723 in 1943.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What venues besides Comiskey hosted East-West games?", options: ["Yankee Stadium, the Polo Grounds, Cleveland Stadium and Griffith Stadium", "Only Comiskey Park, for every game in the series", "Forbes Field and Greenlee Field, in alternate years", "Ruppert Stadium in Newark and Shibe Park in Philadelphia"], correctIndex: 0, explanation: "Second games were played at those parks in several seasons, which is why the last-game date depends on whether you mean Comiskey or anywhere.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Why does the course say the standings were a product rather than the revenue?", options: ["Because most of a club's income came from games outside the league", "Because no league ever published verified final standings", "Because the pennant carried no prize money of any kind", "Because clubs could buy a higher finish by scheduling weak opponents"], correctIndex: 0, explanation: "Between half and four fifths of a club's schedule was outside the league, by its own constitution's design.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What was the Yankees' arrangement for the Giants-Cubans doubleheader in the 1930s?", options: ["$1,000, 40 percent of the gate", "$687, one third of the gate", "$2,500 flat, under Greenlee's league terms", "25 percent of gross with a $1,000 minimum"], correctIndex: 0, explanation: "The flat-fee era covered a range of arrangements before the 1939 change to a standing percentage.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "How does leverage explain the difference between Newark's 20 percent and the Yankees' 25 to 40?", options: ["A landlord with more competing tenants can charge more", "A larger stadium always commands a proportionally larger share", "A league with more clubs can negotiate a lower rate everywhere", "A percentage deal is always cheaper than a flat fee at any park"], correctIndex: 0, explanation: "The course states it as a difference in leverage rather than a rate card, because both figures are documented and neither is standard.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What is the significance of Paige's $500 personal fee in 1941?", options: ["A player could be rented out the way a contract could be sold", "It was the highest single-game fee ever paid in the leagues", "It shows players were paid more than umpires at the same event", "It was deducted from the Monarchs' share of that date's gate"], correctIndex: 0, explanation: "The mechanism is the same one that produced the contract sales in Section 5.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What does the Griffith Stadium chain of sourcing illustrate?", options: ["A secondary source citing a book rather than a financial statement", "A primary ledger contradicting a widely repeated figure", "A promoter's claim that later researchers verified in full", "A league office publishing audited results for one season"], correctIndex: 0, explanation: "Contrast it deliberately with Overmyer's ledger-based Yankee figures. That contrast is itself a lesson in evidence class.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "Which of these numbers in Section 3 rests on a source with no footnotes?", options: ["The claim that the Yankees made $100,000 a year", "The Yankees' $114,550 across fifteen years", "The $2,500 Greenlee paid Comiskey Park in advance", "The $10 and expenses paid to umpire Fred McCrary"], correctIndex: 0, explanation: "The 2003 SABR article carries no citations and hedges the figure as 'a reported' one.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "What did the 1935 league resolution ask for regarding the East-West Game?", options: ["That almost all profits go to the association's treasury", "That the game be moved from Comiskey Park to a Black-owned venue", "That Saperstein's publicity fee be reduced from 5 percent to 2", "That the participating players receive a fixed appearance fee"], correctIndex: 0, explanation: "The resolution notes that the previous year only ten percent of net had reached the association.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Which word do the sources use for the Comiskey Park rental?", options: ["Exorbitant", "Standard, given the size of the crowd it accommodated", "Nominal, since Comiskey wanted the date filled", "Confidential, because the terms were never disclosed"], correctIndex: 0, explanation: "Every source uses it, including Lanctot as quoted by Goldman.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "How does Section 3 connect the press to the league's governance?", options: ["Writers drafted its constitution, then held its highest offices", "The press bought equity stakes in the clubs it covered", "The league office employed reporters to file its game accounts", "Papers were paid a share of the gate for promoting each date"], correctIndex: 0, explanation: "Four sportswriters drafted the 1920 constitution; a Courier writer was commissioner in 1934; the Defender's sports editor was the Negro American League's secretary in 1936.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What does the course say is false about presenting the Black press purely as a watchdog?", options: ["It hides that the press built and governed the institution", "It overstates how widely these papers were actually read", "It ignores that white papers covered the leagues equally well", "It credits the press for reporting that the league office wrote"], correctIndex: 0, explanation: "The counterweight is that the same press turned on the Black owners during integration, which Section 5 documents.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What did Retrosheet's East-West log fail to include?", options: ["An attendance column", "The venues at which each game was played", "Games played outside Comiskey Park", "Any game after the 1948 season"], correctIndex: 0, explanation: "So it cannot corroborate crowd figures, which come instead from SABR's Comiskey article.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Why is the 1932 East-West League death described as a measurement?", options: ["It quantifies the preference for outside bookings by killing a league", "It was the only league whose finances were ever published", "It shows exactly how much a semipro booking paid per date", "It records the number of clubs that abandoned their schedules"], correctIndex: 0, explanation: "If the course needs one fact to prove barnstorming outearned league play, this is it.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "What did the course say about the East-West Game's fan ballot in the Black papers?", options: ["The mechanism is well attested but the vote totals were not verified", "The ballots were counted by the league office and published each year", "The papers charged clubs to place their players on the ballot", "The vote was abandoned after 1941 when Saperstein's fee ended"], correctIndex: 0, explanation: "The course names the ballot as part of the press's institutional role without asserting figures it could not check.", sourceLessonSlug: "nl-the-road-and-the-press" },
        ],
      },
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
    {
      slug: "nl-quiz-the-bill",
      title: "21 · Knowledge check: the bill",
      section: "Section 5 · The bill",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          { prompt: "What wording did the Kansas City Call report from Branch Rickey on 2 November 1945?", options: ["In the zone of a racket", "In the nature of a racket, as the phrase is usually quoted", "Not a league, nor in my opinion an organization of any kind", "A business that has never honored a contract it has written"], correctIndex: 0, explanation: "The endlessly repeated 'in the nature of a racket' could not be traced to any source page. The contemporaneous report says 'zone.'", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "When did Rickey first call the existing Negro Leagues rackets, in a documented instance?", options: ["May 1945, at the launch of his own United States League", "November 1945, in the Kansas City Call", "August 1945, at the secret meeting with Robinson in Brooklyn", "October 1945, at the Montreal Royals signing"], correctIndex: 0, explanation: "That is five months before the Robinson signing, which changes what the statement was for.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What did Rickey's United States League gambit imply about his intentions?", options: ["He proposed a new league of his own rather than admitting existing clubs", "He intended to buy an existing Negro League club outright", "He planned to place Black clubs in the National League by 1948", "He wanted Organized Baseball to recognize Negro League contracts"], correctIndex: 0, explanation: "The new league would have displaced the existing ones rather than incorporating them.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What did Tom Baird tell the Kansas City Call on 26 October 1945?", options: ["That Robinson was 'our property' because he had signed a contract", "That the Monarchs would not protest to Commissioner Chandler", "That Rickey had stooped to unethical methods in signing him", "That the Monarchs had already agreed a price with Brooklyn"], correctIndex: 0, explanation: "Wilkinson acknowledged Robinson was bound through the end of the season, and SABR separately records that he had no written contract for 1946.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "How does the course reconcile the two claims about Robinson's contract?", options: ["A written 1945 contract, and none for 1946", "Two contracts, one of which the league office never registered", "A verbal agreement in 1945 that Rickey correctly disregarded", "A contract voided when Robinson left the club during the season"], correctIndex: 0, explanation: "Rickey's defense is narrowly true and broadly evasive: the Monarchs had signed, paid, housed and showcased him, and every other transaction in baseball paid for that interest.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What did J. L. Wilkinson say on 26 October 1945 about compensation?", options: ["That Brooklyn owed some compensation but the Monarchs would not protest", "That the Monarchs would appeal to Commissioner Chandler immediately", "That no compensation was owed because Robinson was unsigned", "That the club would sue Brooklyn for the value of the contract"], correctIndex: 0, explanation: "He added that whether they got any recompense might be considered beside the point, because they wanted Jackie to have a chance.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What did Tom Baird say was at stake in the Robinson case?", options: ["A precedent for where the Negro League clubs stood", "The Monarchs' ability to meet payroll for the 1946 season", "The Negro American League's claim to major league status", "The right of Black clubs to sell contracts at market value"], correctIndex: 0, explanation: "He said some attempt at reimbursement should be made because the case would set a precedent, and he was right about that.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "Which clubs does Lanctot name as uncompensated for players Rickey took?", options: ["The Monarchs, the Newark Eagles and the Baltimore Elite Giants", "The Homestead Grays, the Philadelphia Stars and the Clowns", "The Birmingham Black Barons and the Kansas City Monarchs only", "The Chicago American Giants and the Indianapolis ABCs"], correctIndex: 0, explanation: "For Robinson, Don Newcombe and Roy Campanella respectively.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What did Cleveland pay Newark for Larry Doby in 1947?", options: ["$10,000, plus $5,000 if he stayed on the roster thirty days", "$15,000 flat, with no contingency of any kind", "$25,000, matching the Elston Howard sale three years later", "$1,000, matching the Roy Partlow sale in 1946"], correctIndex: 0, explanation: "SABR elsewhere gives a flat $15,000. Both are right: one is the base and one is the contingent total.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "Why do sources give both $10,000 and $15,000 for Larry Doby?", options: ["One is the base and one includes the thirty-day contingency", "One is in 1947 dollars and one is adjusted for inflation", "One counts the club's share and one counts Doby's own bonus", "One is what Cleveland offered and one is what Newark demanded"], correctIndex: 0, explanation: "It is a clean example of how a real contract term becomes two competing 'facts' in the literature.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What is the documentary evidence for the Willie Mays sale?", options: ["A Western Union telegram and a handwritten reply, held in Memphis", "A contract filed with the Negro American League's office", "A newspaper report published the day after the transaction", "A recollection recorded by Mays himself decades later"], correctIndex: 0, explanation: "Stoneham's telegram reached Tom Hayes's office at 9:53 a.m. on 21 June 1950; Hayes wrote back accepting the offer of $10,000. The documents are at the Memphis Public Library.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What did the Giants offer for Willie Mays's contract?", options: ["Ten thousand dollars", "Twenty-five thousand dollars, matching the Howard and Barnes sale", "Fifteen thousand dollars, matching the Doby total", "Four thousand dollars, which was the bonus Mays was promised"], correctIndex: 0, explanation: "Hayes accepted by hand. The reported $4,000 bonus to Mays himself is qualified in the source, which notes he said he never received it.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What did the Philadelphia Stars sell Roy Partlow's contract for on 14 May 1946?", options: ["$1,000", "$10,000, matching the Mays and Doby base figures", "$5,000, which is the figure often quoted for Monte Irvin", "Nothing, because Rickey refused to pay for any Black player"], correctIndex: 0, explanation: "Unglamorous, documented, and the kind of figure that tells you what a journeyman contract was worth.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "Why does this course state no figure for the Satchel Paige sale to Cleveland?", options: ["Two SABR pages contradict each other on every payee", "Because the sale was never completed and Paige signed as a free agent", "Because the only source is Bill Veeck's own autobiography", "Because Paige's contract was owned by a booking agent rather than a club"], correctIndex: 0, explanation: "Four incompatible accounts circulate. The verified and telling detail is that the Monarchs got anything only because Paige asked Veeck to pay them.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What is the verified detail about the Monarchs and the Paige sale?", options: ["They were paid only because Paige asked Veeck to pay them", "They refused payment on principle, as they had with Robinson", "They were paid in full within a week of the signing", "They received a share of Paige's salary rather than a lump sum"], correctIndex: 0, explanation: "The Black club's compensation depended on the personal intervention of the Black player.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What question did Effa Manley put publicly about the signings?", options: ["What will become of colored baseball leagues if players are picked out without consulting management", "Why does a white owner pay for a white player and take a Black one free", "Who will employ the men who keep these ballparks when the clubs close", "How can a league survive when its own newspapers campaign against it"], correctIndex: 0, explanation: "It is the business question this course has been asking since lesson 1, put by an owner while it was happening.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What is an assignment of contract?", options: ["The sale of a player's contract from one club to another", "The registration of a player with a league office", "The transfer of a club's lease to a new tenant", "The allocation of a player to a club by league draft"], correctIndex: 0, explanation: "It is the transaction the Monarchs never received for Jackie Robinson.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What is a reserve interest?", options: ["A club's continuing claim on a player it has signed and developed", "A cash reserve a league requires each club to maintain", "A share of a player's future earnings retained by his first club", "The right of first refusal a league holds over any sale"], correctIndex: 0, explanation: "It is what every purchase price in baseball was paying for, and what Rickey declined to pay for.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "How many did the Newark Eagles draw in 1946?", options: ["120,292, the best in club history", "57,000, which was the following season's figure", "225,000, which is the Grays' 1943 figure at Griffith Stadium", "2,620,627, which is Cleveland's 1948 major league record"], correctIndex: 0, explanation: "On about $25,000 profit, in the season they won the Negro World Series.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "How many did the Newark Eagles draw in 1947?", options: ["57,000", "120,292, the same as the previous season", "35,000, which is the figure widely repeated for 1948", "24,614, which is the 1950 East-West Game crowd"], correctIndex: 0, explanation: "A widely repeated version misdates this 57,000 to 1948. The 1948 number is unsettled and the course says so.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What does the course say about the '57,000 in 1948' formulation?", options: ["It misdates a 1947 figure, and the 1948 number is unsettled", "It is correct, and comes from the Eagles' own accounts", "It understates the true 1948 figure by about half", "It refers to the Houston club the Eagles became in 1949"], correctIndex: 0, explanation: "A '35,000 in 1948' variant also circulates with no source behind it.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "How much did the Manleys lose across 1947 and 1948?", options: ["$50,000", "$25,000, which was their 1946 profit", "$30,000, which is the Grays' barnstorming loss", "$18,000, which is Hilldale's 1927 loss"], correctIndex: 0, explanation: "They sold to a Memphis dentist and the club moved to Houston for 1949.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What did Effa Manley say in September 1948 about where the fans had gone?", options: ["To see four men with white teams who had played on Black teams for years", "To the movies and the nightclubs, which had reopened after the war", "To follow the players the Eagles had been forced to sell", "To the East-West Game, which was the only date still drawing"], correctIndex: 0, explanation: "She added that those players had spent years on Black clubs without exciting the same intense interest.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What attendance record did Cleveland set in 1948?", options: ["2,620,627", "225,000 across 26 home dates", "120,292, matching Newark's 1946 season", "51,723, matching the East-West Game record"], correctIndex: 0, explanation: "The audience did not vanish. It bought a ticket from a different owner.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "Why were some Black clubs financially successful between 1947 and 1950?", options: ["Because they were selling their own players to white-owned teams", "Because wartime prosperity carried into the postwar seasons", "Because the East-West Game's revenue was finally reaching them", "Because their landlords had cut rents to keep them as tenants"], correctIndex: 0, explanation: "Income shifted from selling tickets to Black customers to selling the company's own players. That is liquidating the asset base to stay solvent, and it has an end.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "How many players did the Kansas City Monarchs sell in the ten years ending 1956?", options: ["29 to the majors and 9 to the minors", "Two, Jackie Robinson and Satchel Paige", "Nine to the majors and 29 to the minors", "None, because Baird refused to deal after the Robinson case"], correctIndex: 0, explanation: "Including Elston Howard and Frank Barnes to the Yankees for $25,000 in 1950, and Ernie Banks to the Cubs in 1953.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What did the Yankees pay for Elston Howard and Frank Barnes in 1950?", options: ["$25,000", "$10,000, matching the Mays and Doby base prices", "$15,000, matching the Doby contingent total", "$1,000, matching the Partlow sale in 1946"], correctIndex: 0, explanation: "It is one of the larger documented figures in the whole sequence of contract sales.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "Which job categories does Knopp name as lost when the clubs collapsed?", options: ["Front office, groundskeepers, concessionaires, ticket-takers, bus drivers", "Only the players and the managers who employed them", "Umpires, scorers, and the league office staff in each city", "Newspaper writers, printers and advertising salesmen"], correctIndex: 0, explanation: "These workers in turn patronized local businesses, so many people besides the players lost their livelihoods.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "Why does this course give no headcount for jobs lost?", options: ["Knopp names categories and no source quantifies the losses", "Because the census did not record baseball employment separately", "Because most of these workers were paid in cash and unrecorded", "Because the clubs' payroll records were destroyed when they folded"], correctIndex: 0, explanation: "Naming categories is what the peer-reviewed source supports, and inventing a number would be exactly what the course refuses elsewhere.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "When did the first Black umpire work a major league game?", options: ["11 April 1966, when Emmett Ashford debuted", "1947, the same season as Jackie Robinson", "1951, when Ashford entered Organized Baseball", "1962, when the Negro American League last played"], correctIndex: 0, explanation: "Ashford had become the first Black umpire in Organized Baseball in 1951. Nineteen years separate the player barrier from the officials' barrier.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What is the nineteen-year figure in this section?", options: ["The gap between Robinson's debut and the first Black major league umpire", "The number of years the Negro American League survived after 1948", "The number of years Ed Bolden worked at the Philadelphia post office", "The gap between the leagues' founding and the first Black manager"], correctIndex: 0, explanation: "1947 to 1966. Players were integrated two decades before officials were.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What happened to Bob Motley's umpiring career?", options: ["He graduated top of his class twice and never worked above the Pacific Coast League", "He became the first Black umpire in the American League in 1966", "He was hired by the Negro American League and stayed until 1962", "He left the profession after being refused entry to umpire school"], correctIndex: 0, explanation: "He attended the Al Somers school twice. Julian Osibee Jelks worked four Pacific Coast League years and never reached the majors either.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "How many Negro League owners received a major league franchise?", options: ["None", "One, Alex Pompez, through the New York Giants", "Two, Effa Manley and J. L. Wilkinson", "Three, all of them in the National League's 1962 expansion"], correctIndex: 0, explanation: "The course states it as verified by absence. Every documented exit was a liquidation, and Pompez's success came as a scouting employee.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What does 'verified by absence' mean here?", options: ["A claim supported because no source records the contrary", "A claim verified by a document that has since been lost", "A claim about something that provably did not exist", "A claim the course states without evidence either way"], correctIndex: 0, explanation: "It is how the course states that no Negro League owner ever received a major league franchise.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What did August Wilson say about what these games contained?", options: ["The umpire ain't white, the owner ain't white, nobody's white", "That baseball was the only place a Black child could see a professional", "That the leagues sold entertainment and called it competition", "That integration was a bargain the community made with its eyes open"], correctIndex: 0, explanation: "He ended it: this is our thing, until integration, and then we don't have our nothing.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "How does the historian Rob Ruck place the leagues' fate?", options: ["Alongside Black papers, colleges and businesses that also paid a price", "As unique among Black institutions in being destroyed by integration", "As a business failure that integration merely happened to coincide with", "As a case where the owners' own decisions caused the collapse"], correctIndex: 0, explanation: "His sentence is that like many Black papers, colleges and businesses, the Negro National League paid a price for integration: extinction.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "Where does the popular 'integration killed the business districts' claim overstate the scholarship?", options: ["Knopp describes a bundle including decapitalization and new competition", "Knopp attributes the decline entirely to federal housing policy", "Knopp finds no decline in the districts at all before 1970", "Knopp names integration as one cause but dates it to the 1930s"], correctIndex: 0, explanation: "Black businesses had to compete with white-owned businesses for Black customers with less capital, alongside decapitalization of inner-city areas. The thesis is defensible in his form and overstated in the popular one.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What did Wendell Smith of the Pittsburgh Courier write about Effa Manley?", options: ["That nothing was killing Negro baseball but Democracy", "That she had run the Eagles better than any man in the league", "That her protests to Chandler had been correctly ignored", "That the Eagles had been sold for less than they were worth"], correctIndex: 0, explanation: "The owners' sharpest critics were Black too, which is the counterweight the course keeps in view.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "When did the Negro National League fold?", options: ["After the 1948 season", "After the 1931 season, following Rube Foster's death", "In 1962, when the last East-West Game was played", "In 1954, when the Indianapolis Clowns withdrew"], correctIndex: 0, explanation: "Four of its clubs joined the Negro American League for 1949 while the Grays and Black Yankees played independently.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "How does this course answer the question of when the Negro American League ended?", options: ["It reports the disagreement, because the answers range from 1948 to 1963", "It gives 1962, following Retrosheet's last sanctioned game", "It gives 1948, following MLB's designation span", "It gives 1960, following SABR's Comiskey Park article"], correctIndex: 0, explanation: "Lanctot's formulation is the honest one: the last mention he could find was in Jet in the autumn of 1963. The league did not end on a date; it stopped being mentioned.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What is asset liquidation, in this section's sense?", options: ["Selling what a company owns in order to keep operating", "Writing off a club's uncollectible debts at a season's end", "Converting a leasehold into cash by assigning it to another tenant", "Distributing a club's remaining funds to its owners on closing"], correctIndex: 0, explanation: "Selling players to white clubs was exactly this, which is why the 1947 to 1950 profitability is not good news.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What is decapitalization?", options: ["The withdrawal of investment from a neighborhood", "The loss of a company's share capital through trading losses", "The sale of a club's fixed assets to fund its payroll", "The refusal of banks to lend against commercial property"], correctIndex: 0, explanation: "Knopp names it alongside integration as a cause of Black business district decline, which is why the single-cause version overstates his argument.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What caused the Manhattan Casino's court rental to rise from $50 to $500?", options: ["Prohibition destroyed the hall's alcohol revenue", "The Harlem Renaissance drove up rents across the district", "A fire in 1921 forced the owner to rebuild at his own cost", "Competition from the newly built Renaissance Ballroom nearby"], correctIndex: 0, explanation: "It went to $200 the year after Prohibition began and to $500 by 1922, driving Harlem's Black teams out. A tenfold rent shock from a change in liquor law is a clean illustration of a cost structure.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What did Bob Douglas offer for the use of the Renaissance Ballroom floor?", options: ["To name his team after the ballroom", "A share of the gate on every home date", "A flat rental of $50 a game, the pre-Prohibition rate", "A guarantee to fill the hall for dances after each game"], correctIndex: 0, explanation: "The name promoted the dance hall wherever the team played. No source says the arrangement was rent free, and the course does not claim it was.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Who owned the Renaissance Ballroom?", options: ["William Roach, a West Indian entrepreneur", "Bob Douglas, who bought it with the team's early profits", "Abe Saperstein, through a Chicago holding company", "The Manhattan Casino's owner, who had built it in 1919"], correctIndex: 0, explanation: "It was one of the few Harlem venues designed, financed, built, owned and operated by African Americans.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "When did the New York Rens debut?", options: ["3 November 1923", "28 March 1939, when they won the world professional tournament", "19 December 1948, when they debuted as the Dayton Rens", "In 1922, according to the Hall of Fame's own prose biography"], correctIndex: 0, explanation: "The Hall of Fame's prose says 1922 while its own data panel says 1923, which is a live example of why cited history matters.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What was Bob Douglas's innovation in player contracts?", options: ["Full-year, guaranteed, exclusive contracts", "Paying players a share of each night's gate", "Signing players for a single season with an option year", "Paying in shares of the club rather than in cash"], correctIndex: 0, explanation: "It is why the Rens count as the first fully professional Black-owned basketball team, and it contrasts with a Negro League roster paid by the month.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What does the Hall of Fame say about where the Rens played?", options: ["They rarely played uptown", "They played every home game at the Renaissance Ballroom", "They shared a home court with the Harlem Globetrotters", "They had no home court at all after 1932"], correctIndex: 0, explanation: "The name sold the ballroom and the road paid the players, which is a sharper point than the usual account of their home court.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Why were the Rens forced to barnstorm?", options: ["No existing professional league would accept a Black team", "Their home court was too small to cover their payroll", "The Renaissance Ballroom was booked for dances most evenings", "Their owner preferred touring to the risk of a league schedule"], correctIndex: 0, explanation: "The Hall of Fame states it in those words. Exclusion was by rule rather than by quality, which the 1939 tournament then demonstrated.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "How far did the Rens travel for a single game, at the extreme?", options: ["200 miles", "500 miles, on a schedule of nearly nightly play", "1,000 miles, between Boston and Kansas City", "50 miles, since they rarely left the New York area"], correctIndex: 0, explanation: "They were barred from many hotels and restaurants, slept on the bus, ate cold meals, and often played twice on Sundays.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What was the Rens' streak in the 1932-33 season?", options: ["88 straight wins in 86 days", "122 wins against 7 defeats across the season", "2,588 wins against 529 losses across 25 years", "40 straight wins against white professional opposition"], correctIndex: 0, explanation: "Three independent sources including the Hall of Fame carry it. It is only possible with near-nightly play and constant travel.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Who organized the World Professional Basketball Tournament?", options: ["A newspaper, not a league", "The National Basketball League's board of governors", "The Naismith Memorial Basketball Hall of Fame", "Abe Saperstein, as a showcase for the Globetrotters"], correctIndex: 0, explanation: "It was a Hearst promotion run by Arch Ward, which tells you what league structure was worth in 1930s professional basketball.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Whom did the Rens beat to win the first World Professional Basketball Tournament?", options: ["The Oshkosh All-Stars, 34 to 25", "The Harlem Globetrotters, 27 to 23, in the final", "The Original Celtics, in a two-game series", "The Dayton Rens, in an all-Rens final"], correctIndex: 0, explanation: "On 28 March 1939 at the Chicago Coliseum. They had beaten the Globetrotters earlier in the same tournament.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What is the ownership contrast between the Rens and the Globetrotters?", options: ["A Black owner and a white owner, both of all-Black teams", "A league franchise and an independent barnstorming club", "A team that owned its arena and one that rented everywhere", "A team paying guaranteed contracts and one paying per game"], correctIndex: 0, explanation: "Abe Saperstein was a white promoter from Chicago, and the Hall of Fame's own page calls Nat Clifton a showman for owner Abe Saperstein.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "How did Nat Clifton reach the New York Knicks?", options: ["Through his white owner, who held his contract", "As a free agent, after the Globetrotters released him", "In a trade involving two other Black players", "Through the 1950 draft, in which Boston also selected"], correctIndex: 0, explanation: "The player's move to the NBA ran through Saperstein rather than directly, which is the same mechanism as a Negro League contract sale.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Why does this course give no figure for what the Knicks paid Saperstein?", options: ["No institutional source carries one", "Because the sale was structured as a free-agent signing", "Because the figure is disputed between two NBA sources", "Because the Knicks' records were destroyed in a 1960s fire"], correctIndex: 0, explanation: "The Hall of Fame, NBA.com and the historian who wrote the book on these men all decline to state a price, so the course does too.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What was the Dayton Rens' own record in 1948-49?", options: ["14 wins and 26 losses", "2 wins and 17 losses, the record they inherited", "16 wins and 43 losses, the combined franchise line", "88 straight wins, matching their 1932-33 streak"], correctIndex: 0, explanation: "Last in the league in scoring and third best in defense, four wins better than expected. A competitive, under-resourced team rather than a novelty act.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What was unprecedented about the Dayton Rens?", options: ["Ownership: a Black-owned team holding a franchise in a white league", "That an all-Black team played in a white league at all", "That the league integrated at the player level that season", "That a barnstorming team was admitted mid-season"], correctIndex: 0, explanation: "The National Basketball League had integrated at the player level in 1942-43. What was new was the ownership, which is exactly this course's thesis.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "When did the Rens fold, and why does the timing matter?", options: ["1949, the year before the NBA integrated", "1950, the same year Cooper, Lloyd and Clifton entered the NBA", "1948, when they gave up barnstorming for a league franchise", "1962, the same year as the last East-West Game"], correctIndex: 0, explanation: "The Black-owned institution died at the moment the white league opened its doors to Black players, which rhymes exactly with baseball.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What did Bob Douglas do while the Dayton Rens held their franchise?", options: ["Kept the barnstorming operation running with half the roster", "Sold the barnstorming club to Abe Saperstein", "Moved permanently to Dayton and gave up touring", "Merged both operations into a single league entry"], correctIndex: 0, explanation: "The league team was the risk and the road was the revenue, so he ran both.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What did the Professional Football Researchers Association find when it looked for a Black pro football league?", options: ["Essentially nothing at scale", "A league of eight clubs operating from 1928 to 1946", "Three regional leagues that merged in the early 1940s", "A single league that was as large as the Negro National League"], correctIndex: 0, explanation: "Touring teams, occasional integrated rosters, and one all-Black league described as a lower-class version of baseball's Negro Leagues.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "How many traceable games do the Harlem Brown Bombers have across eleven years?", options: ["Nineteen", "Two hundred, matching a Negro League baseball club's season", "Eighty-eight, matching the Rens' 1932-33 winning streak", "One hundred and twenty-two, matching the Rens' 1938-39 season"], correctIndex: 0, explanation: "They were the largest and longest-lived Black professional football club, drew about 1,500 a game in 1935, and lost about $5,000 that season.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What was the Virginia Negro Football League?", options: ["Four teams, five-game schedules, one state, one season, in 1946", "An eight-club circuit that ran from 1935 to 1946", "A wartime league of Black and white clubs in the upper South", "The Black counterpart of the American Football League in 1946"], correctIndex: 0, explanation: "Richmond, Norfolk, Portsmouth and Newport News, founded in the very year the color line came down. Its dimensions prove the point rather than undercutting it.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Why could Fritz Pollard's Brown Bombers not use Dyckman Oval in 1936 until mid-October?", options: ["Negro League baseball had the venue", "The city had condemned the grandstand for repairs", "A rival football club held an exclusive lease on it", "The National Football League had barred its clubs from playing there"], correctIndex: 0, explanation: "Alex Pompez of the Negro National League controlled it, and in 1938 he leased it exclusively to a competing Black football venture.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What happened to Fritz Pollard's football operation in 1938?", options: ["He resigned when no suitable stadium near Harlem was available", "He merged the club into the Chicago Brown Bombers", "He sold it to Alex Pompez, who ran it for two more seasons", "He moved it to Virginia, where it joined a new league"], correctIndex: 0, explanation: "Pompez had leased Dyckman Oval to a rival. In Black professional sport, baseball owned the real estate and football was a tenant.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Which sentence captures the course's structural finding about football and baseball?", options: ["Baseball owned the real estate; football was a tenant and could be evicted", "Football drew larger crowds but had no league to organize them", "Baseball's players were better paid, so football lost its talent", "Football integrated first, so no separate institution was needed"], correctIndex: 0, explanation: "The Dyckman Oval eviction of 1938 is the documented case, and it ended the largest Black professional football operation of the era.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Why did white leagues' refusal of exhibitions hurt Black football more than Black baseball?", options: ["Baseball's barnstorming against white clubs was a revenue mainstay", "Football clubs had larger rosters and higher travel costs", "Football's season was too short to build a touring schedule", "Baseball had more clubs willing to take a guarantee"], correctIndex: 0, explanation: "Football's equivalent payday was simply denied. Pollard sought exhibitions against New York's NFL clubs for three straight years and was refused every time.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "How did integrated minor leagues affect Black professional football?", options: ["Players dispersed individually instead of pooling into a league", "Players were barred from them, so a Black league became necessary", "Players used them as a route into the National Football League", "Players earned more there than any Black club could pay"], correctIndex: 0, explanation: "Baseball's exclusion was total and forced collective organization; football's was confined to the top league and produced dispersal.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What is a captive talent pool?", options: ["Players with nowhere else to play", "Players signed to exclusive multi-year contracts", "Players a league prevents from moving between its clubs", "Players developed by a club and sold on at a profit"], correctIndex: 0, explanation: "Baseball's total exclusion created one and football's partial exclusion did not, which is why only one sport built a league.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What does the PGA of America's own 2009 release say about its bylaws?", options: ["That a Caucasian-only clause ran from 1934 to 1961", "That no written racial restriction ever appeared in its constitution", "That the clause was adopted in 1943 and removed in 1961", "That the clause applied only to tournament entry, not membership"], correctIndex: 0, explanation: "It states the clause prevented non-whites from membership and was removed at the 1961 annual meeting. A governing body confessing in its own words is the strongest source available.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "Which part of the golf bylaw does this course quote?", options: ["Only the phrase 'Professional golfers of the Caucasian race'", "The full sentence, as transcribed by a North Carolina newspaper", "The full Article III as reproduced on the PGA's own website", "Nothing, because no rendering of the text could be located"], correctIndex: 0, explanation: "The tail of the sentence differs between transcriptions and no scan of the constitution itself could be reached, so only the identical opening phrase is quoted.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "Where and when did Black golfers hold their first national championship?", options: ["Shady Rest in New Jersey, in 1925", "Rackham in Detroit, in 1941, at the Joe Louis Open", "The San Diego Open, in 1952, as exempt amateurs", "Los Angeles, in 1948, after a lawsuit forced entry"], correctIndex: 0, explanation: "The body that ran it was renamed the United Golfers Association within about a year, and its flagship event was the National Negro Open.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What did golf tournaments do after the 1948 lawsuit?", options: ["Renamed themselves Invitational and did not invite Black golfers", "Admitted Black golfers but barred them from prize money", "Moved to private clubs that could set their own entry rules", "Required a PGA member's sponsorship for every entrant"], correctIndex: 0, explanation: "Same trick as tennis's summer invitationals, in the same decade, in two sports.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "How did Joe Louis get into the 1952 San Diego Open?", options: ["As an exempt amateur, outside the PGA's membership bylaws", "By winning a qualifying event open to all comers", "Through a court order obtained by Bill Spiller's attorney", "By buying a sponsor's exemption from the tournament committee"], correctIndex: 0, explanation: "PGA President Horton Smith had barred Spiller from the same event. Louis took the case public on Walter Winchell's radio show.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What did Joe Louis fund at Rackham in Detroit in 1941?", options: ["The Joe Louis Open, with a $1,000 purse he donated himself", "A clubhouse for Black golfers barred from the public course", "A training program run by the United Golfers Association", "A legal fund for the golfers who later sued the PGA"], correctIndex: 0, explanation: "He also paid entry fees and transportation costs for golfers who could not otherwise have played, and won the Negro National's amateur division in 1951.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What does this course say about Charlie Sifford, and where does it stop?", options: ["First Black member of the PGA Tour in 1961, and no further", "First Black golfer to win a PGA Tour event, in 1961", "First Black PGA member, admitted under the Approved Entries list", "First Black golfer to hold a tour card, awarded in 1960"], correctIndex: 0, explanation: "The era's distinction between PGA membership and an approved-player card is muddled in the literature, so the course states the sourced fact and stops.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "When and where was the American Tennis Association founded?", options: ["Thanksgiving Day, 30 November 1916, in Washington, D.C.", "August 1917, at Druid Hill Park in Baltimore", "1912, at Hampton Institute in Virginia", "1925, at Shady Rest in Scotch Plains, New Jersey"], correctIndex: 0, explanation: "By representatives of more than a dozen Black clubs, after the USLTA formally barred African American players.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "Why does the course call the ATA founding the best-sourced in it?", options: ["The excluding body and the excluded body agree on every detail", "Three independent newspapers reported it the same week", "The founding minutes survive in the Library of Congress", "It is the only founding with a photograph attached to it"], correctIndex: 0, explanation: "The USTA and the ATA agree on date, place, cause and purpose, which is a rare thing on any subject in this course.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "Where were the first ATA national championships held?", options: ["Druid Hill Park, Baltimore, in August 1917", "Forest Hills, New York, in August 1950", "Washington, D.C., on the ATA's founding day in 1916", "Hampton Institute, Virginia, in 1912"], correctIndex: 0, explanation: "The Monumental Tennis Club of Baltimore was one of the two founding clubs, which explains why the first championship went there.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "How does the course handle the claim that the ATA is the oldest Black sports association?", options: ["It reports the USTA's claim and names the older CIAA", "It states the claim as fact, since the USTA is authoritative", "It rejects the claim outright as unsupported by any source", "It omits the claim entirely as a matter of definitions"], correctIndex: 0, explanation: "The Colored Intercollegiate Athletic Association was founded at Hampton Institute in 1912 and still runs as the CIAA, so the claim depends on what 'association' is doing.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What was the entry Catch-22 that kept Althea Gibson out of the U.S. Nationals?", options: ["Qualification ran through invitationals she was never invited to", "Entry required a USLTA club membership no Black player could hold", "Entry required a ranking she could not earn without playing", "Entry required a sponsor from among the tournament's committee"], correctIndex: 0, explanation: "The same trick as golf's rebranded invitationals, in the same decade.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What happened in Althea Gibson's second-round match at Forest Hills in 1950?", options: ["She lost to Louise Brough 6-1, 3-6, 9-7 in a storm-suspended match", "She beat Barbara Knapp 6-2, 6-2 and reached the quarter-finals", "She withdrew after lightning damaged the stadium's stands", "She won in three sets and then lost in the third round"], correctIndex: 0, explanation: "Brough was the reigning Wimbledon champion. A bolt of lightning knocked a stone eagle off the stadium during the match.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What did Gibson say about the lightning at Forest Hills?", options: ["It may have been an omen that times were changing", "It was the only thing that stopped her that afternoon", "She had not noticed it until she read about it the next day", "It frightened her more than the occasion itself had"], correctIndex: 0, explanation: "The USTA quotes her, and the course uses its version rather than any later paraphrase.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "In what order did the three color lines fall?", options: ["Boxing 1937, tennis 1950, golf 1961", "Golf 1934, tennis 1916, boxing 1908", "Tennis 1950, boxing 1954, golf 1961", "Boxing 1908, golf 1948, tennis 1957"], correctIndex: 0, explanation: "The least formalized barrier fell first and the most formalized fell last, because a written rule is harder to embarrass and harder to litigate around.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "How did boxing's color line differ structurally from golf's and tennis's?", options: ["No governing body wrote it; it ran through promoters' discretion", "It was written into state athletic commission rules everywhere", "It applied only to championship bouts and not to other fights", "It was enforced by a Black organization protecting its own market"], correctIndex: 0, explanation: "Champions and promoters exercised discretion, and the parallel Black institution was the World Colored Heavyweight Championship.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "Why did the Rams integrate in 1946?", options: ["The publicly controlled Coliseum's commission demanded it", "Because the rival AAFC had already signed Black players", "Because the club's owner had promised it on moving west", "Because California state law required it of any public tenant"], correctIndex: 0, explanation: "Black sports editors led by Halley Harding of the Los Angeles Tribune got the commission to pass a resolution barring racial discrimination by any professional tenant.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What did Rams coach Bob Snyder later concede about the 1946 signing?", options: ["I doubt we would have been interested if we had stayed in Cleveland", "That the club had planned to sign a Black player for years", "That the commission had never actually required anything of them", "That the signing cost the club more than it gained at the gate"], correctIndex: 0, explanation: "He conceded the signing was a precondition of obtaining the Coliseum lease, which is the whole business argument in one sentence.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What instrument broke professional football's color line at both ends?", options: ["A public stadium lease", "A federal civil rights statute enforced by the courts", "A rival league that signed Black players first", "A boycott organized by the Black press in each city"], correctIndex: 0, explanation: "The Los Angeles Memorial Coliseum in 1946, and a federally funded Washington stadium sixteen years later.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What is a lease condition, in this lesson's usage?", options: ["A term a public landlord attaches to use of its venue", "A clause allowing a tenant to renew on the same terms", "A restriction on which days a tenant may schedule events", "A requirement that a tenant insure the premises it uses"], correctIndex: 0, explanation: "It is the instrument that integrated professional football twice, in 1946 and again in the early 1960s.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What is an exempt amateur?", options: ["A player outside a professional body's membership rules", "A player whose entry fee has been waived by a sponsor", "A player permitted to compete without a handicap rating", "A player who has renounced prize money for a season"], correctIndex: 0, explanation: "It is the category that let Joe Louis into the 1952 San Diego Open when Bill Spiller was barred.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What is an invitational, and why does it appear in two sports here?", options: ["An event entered by invitation, which kept exclusion running after open entry", "An event open to any player who pays an entry fee", "An event restricted to members of a single association", "An event whose field is set by the previous year's rankings"], correctIndex: 0, explanation: "Golf renamed Opens as Invitationals after 1948; tennis routed U.S. Nationals qualification through invitationals Gibson never received.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What did the parallel institution look like in each of the three sports?", options: ["The UGA in golf, the ATA in tennis, and a colored championship in boxing", "A single organization covering all three sports from 1916", "Nothing in golf, the ATA in tennis, and nothing in boxing", "College conferences in all three, run out of the HBCUs"], correctIndex: 0, explanation: "Each existed for as long as the exclusion did, which is the same pattern the baseball leagues followed.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What does this course say a written rule does to exclusion?", options: ["Makes it durable, because it is harder to embarrass and to litigate around", "Makes it fragile, because a document can be produced in court", "Makes no difference, since practice matters more than text", "Makes it temporary, because bylaws are revised more often than customs"], correctIndex: 0, explanation: "The order in which the three barriers fell supports it: no written rule fell first, a policy second, a bylaw last.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "How does the branch to other sports test this course's central claim?", options: ["It shows the same ownership pattern recurring wherever exclusion was total", "It shows the pattern was unique to baseball and did not transfer", "It shows that white ownership was universal outside baseball", "It shows that leagues formed only where a written rule existed"], correctIndex: 0, explanation: "Basketball produced a Black-owned institution that rhymes closely; football, excluded only at the top, produced dispersal instead.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
        ],
      },
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
    {
      slug: "nl-final",
      title: "25 · Final: who owned the game",
      section: "Section 6 · The record",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          { prompt: "What did the 1969 Special Baseball Records Committee do about the Negro Leagues?", options: ["Nothing; they never came up for discussion", "Evaluated them and found the records too incomplete to count", "Demoted them alongside the 1871 to 1875 National Association", "Recognized them provisionally pending further research"], correctIndex: 0, explanation: "MLB's own 2024 explainer says they were not even given consideration in the meetings. They were absent from the agenda rather than rejected.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "Which league did the 1969 committee actively demote?", options: ["The National Association of 1871 to 1875", "The Federal League of 1914 to 1915", "The Union Association of 1884", "The Players' League of 1890"], correctIndex: 0, explanation: "For its erratic schedule and procedures. The other five it recognized, and the Negro Leagues were never discussed at all.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "What did MLB announce on 16 December 2020?", options: ["Seven leagues from 1920 to 1948 designated as major", "The merger of Negro Leagues statistics into the official record", "The formation of a Negro Leagues Statistical Review Committee", "A partnership with the Negro Leagues Baseball Museum"], correctIndex: 0, explanation: "No statistic changed that day. It was a status decision, with the accounting to follow four years later.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "How did MLB characterize the 1969 omission in its 2020 announcement?", options: ["Clearly an error that demands today's designation", "An understandable judgment given the records then available", "A decision the committee reached without adequate representation", "A matter the league had never previously had cause to revisit"], correctIndex: 0, explanation: "It also credited the researchers behind the Seamheads database and Larry Lester.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "Whose research did MLB credit in the 2020 announcement?", options: ["The Seamheads database team and Larry Lester", "The Elias Sports Bureau's historical department alone", "Baseball Reference's staff of Negro Leagues researchers", "The National Baseball Hall of Fame's Giamatti Research Center"], correctIndex: 0, explanation: "Gary Ashwill, Scott Simkus, Mike Lynch and Kevin Johnson are named, along with Lester.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "Why does the Negro National League appear twice on MLB's list of seven?", options: ["Two different companies used the same name", "Because MLB counted its eastern and western divisions separately", "Because its 1932 season was designated under a different name", "Because the league reorganized under new ownership in 1937"], correctIndex: 0, explanation: "1920 to 1931 and 1933 to 1948, separated by a year in which neither existed.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "What happened on 29 May 2024?", options: ["Statistics of more than 2,300 players entered the MLB record", "MLB designated seven Negro Leagues as major", "The Negro Leagues Statistical Review Committee was formed", "Josh Gibson was elected to the National Baseball Hall of Fame"], correctIndex: 0, explanation: "The merge of Negro Leagues statistics from 1920 to 1948 into one database with the American and National Leagues.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "How do the 2020 and 2024 player counts differ?", options: ["About 3,400 covered by the designation, more than 2,300 with recoverable statistics", "About 2,300 in 2020 and more than 3,400 in 2024", "Both figures are 2,300, and the discrepancy is a reporting error", "The 2020 figure counted only players who appeared in a league game"], correctIndex: 0, explanation: "They count different things and neither corrects the other.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "What career records did Josh Gibson take in the 2024 merge?", options: ["Batting average, slugging and OPS", "Batting average, on-base percentage and slugging", "Home runs, runs batted in and slugging", "Batting average and on-base percentage only"], correctIndex: 0, explanation: ".372, .718 and 1.177. He ranks third in career on-base percentage, behind Ted Williams, so a course saying he leads all four rate categories has stopped reading.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "What is Josh Gibson's career batting average in the MLB record, and whom did it displace?", options: [".372, ahead of Ty Cobb's .367", ".466, ahead of Hugh Duffy's single-season mark", ".350, ahead of Rogers Hornsby's career figure", ".718, ahead of Babe Ruth's slugging record"], correctIndex: 0, explanation: "Across 2,255 at-bats. His .718 slugging displaced Babe Ruth's .690.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "Which single-season record did Gibson take in 2024?", options: ["The highest batting average, .466 for the 1943 Homestead Grays", "The highest slugging percentage, .718, for the 1943 Grays", "The most home runs in a season, set with the Pittsburgh Crawfords", "The highest OPS, 1.177, for the 1943 Homestead Grays"], correctIndex: 0, explanation: "Baseball Reference, using different thresholds, instead lists Tetelo Vargas at .472 for the 1943 New York Cubans.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "What happened to Satchel Paige's career win total in the merge?", options: ["It went from 28 to 125", "It went from 125 to about 2,000", "It was left unchanged, because his league games were undocumented", "It went from 28 to 55, matching his reported no-hitters"], correctIndex: 0, explanation: "A counting statistic moved by the addition of documented league games, which is the most useful kind of change the merge produced.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "How many hits did Jackie Robinson gain in the 2024 merge?", options: ["49, from the 1945 Kansas City Monarchs", "10, from the 1948 Birmingham Black Barons", "150, from the New York Cubans", "None, because he played only part of one Negro League season"], correctIndex: 0, explanation: "Willie Mays gained 10 from the 1948 Black Barons, and Minnie Minoso's 150 with the New York Cubans lifted his career total past 2,000 to 2,113.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "Who chaired the Negro Leagues Statistical Review Committee?", options: ["John Thorn, MLB's official historian", "Bob Kendrick of the Negro Leagues Baseball Museum", "Sean Gibson of the Josh Gibson Foundation", "Larry Lester, of the Negro Leagues Researchers and Authors Group"], correctIndex: 0, explanation: "The committee included Kendrick, Sean Gibson, Lester, Leslie Heaphy, Elias, the Players Association, Retrosheet, the Hall of Fame and CC Sabathia.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "Why is 'MLB versus the families' a false framing of the merge?", options: ["The Josh Gibson Foundation and the museum sat on the committee", "Because no family was consulted at any stage of the process", "Because MLB delegated the decision entirely to Elias", "Because the committee's membership was never made public"], correctIndex: 0, explanation: "Sean Gibson of the Josh Gibson Foundation and Bob Kendrick of the Negro Leagues Baseball Museum were both members, alongside the players' union.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "What did the committee decide about annotating the new records?", options: ["No asterisks, citing the 1969 committee's own rule", "Asterisks on every record set in a season under 60 games", "A footnote on each record indicating the league it came from", "A separate leaderboard for Negro Leagues records"], correctIndex: 0, explanation: "It added to the 1969 committee's 'one set of records' language the phrase 'or that of skin color.'", sourceLessonSlug: "nl-reclassification" },
          { prompt: "How complete does MLB say the 1920 to 1948 records are?", options: ["Nearly 75 percent", "About 50 percent, with the eastern leagues thinnest", "Effectively complete for every designated league", "About 90 percent, with only the 1932 seasons missing"], correctIndex: 0, explanation: "MLB also says future findings may result in additional modifications to the all-time leaderboards.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What label did the committee itself put on the 2024 release?", options: ["Version 1.0", "Final and definitive, pending no further revision", "Provisional, subject to a five-year review", "Complete for statistics and open for player identification"], correctIndex: 0, explanation: "And it said minimum qualifiers may change, so any figure quoted from this record needs a date and a source attached.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "How does box-score survival vary between clubs?", options: ["All 98 known 1923 Monarchs games have box scores; the 1948 Memphis Red Sox have 13 of 122", "It is uniform across clubs, at roughly 75 percent", "Eastern clubs are complete and western clubs are not", "Only the 1943 season has surviving box scores in any quantity"], correctIndex: 0, explanation: "Baseball Reference reports both figures, which is why completeness is a per-club question rather than a single percentage.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What at-bat minimum does MLB apply to Negro Leagues career rate leaderboards?", options: ["About 1,800, against 5,000 for the American and National Leagues", "5,000, the same as for the American and National Leagues", "3,000, matching Baseball Reference's plate-appearance threshold", "2,255, which is Josh Gibson's career total"], correctIndex: 0, explanation: "The reasoning is that ten Negro Leagues seasons of roughly 60 games each is the equivalent workload.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What is John Thorn's defense of the lower threshold?", options: ["The short schedules were born of MLB's exclusionary practices", "The rate statistics are more reliable in a shorter season", "The 1969 committee had already set a precedent for it", "The Negro Leagues played more total games including barnstorming"], correctIndex: 0, explanation: "So refusing the record would be a double penalty. The counterargument is that a career rate title on 45 percent of the standard workload is not the same measurement.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What is the 'double penalty' argument?", options: ["Excluding these records punishes players twice for the segregation that shortened their schedules", "Counting these records penalizes both the players and the clubs", "Applying two thresholds penalizes whichever group gets the higher one", "Excluding barnstorming games penalizes the players and the owners alike"], correctIndex: 0, explanation: "It is MLB's stated reasoning, and the course presents both it and the counterargument as documented positions.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "Which games does MLB's official Negro Leagues record count?", options: ["League games only", "All games, including barnstorming and exhibitions", "League games plus the East-West All-Star Game", "League games plus the Negro World Series"], correctIndex: 0, explanation: "Barnstorming, the World Series and the East-West Game are all excluded, which is ironic given that Section 3 showed where the money actually was.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What does the committee itself call barnstorming?", options: ["A revenue lifeline", "An unregulated sideline the leagues discouraged", "A minor supplement to league receipts", "A practice that ended once the leagues stabilized"], correctIndex: 0, explanation: "And it still excludes those games from the official record, by design.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "Why does Josh Gibson not appear on Baseball Reference's career leaderboards?", options: ["It requires 3,000 plate appearances and he falls short", "It excludes Negro Leagues statistics from career lists entirely", "It uses a different definition of a career than MLB does", "It disputes the accuracy of the Homestead Grays' box scores"], correctIndex: 0, explanation: "Two reputable authorities using the same underlying data disagree, because they chose different thresholds.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "Whose single-season batting average does Baseball Reference list as the leader?", options: ["Tetelo Vargas, .472 for the 1943 New York Cubans", "Josh Gibson, .466 for the 1943 Homestead Grays", "Ty Cobb, .420, from the American League record", "Hank Aaron, .366 for the 1952 Indianapolis Clowns"], correctIndex: 0, explanation: "MLB excludes that season because the Cubans do not meet its 60-game minimum. Who holds the record depends on which threshold you accept.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What is MLB's stated reason for excluding the pre-1920 era?", options: ["That earlier attempts lacked a league structure", "That no box scores survive from before 1920", "That the 1969 committee had already ruled on those years", "That the clubs of that era were not fully professional"], correctIndex: 0, explanation: "But Seamheads holds data back to 1886, so the exclusion is a definition of what counts as a league rather than an absence of records.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What is MLB's stated reason for excluding the post-1948 leagues?", options: ["That the surviving leagues were stripped of much of their talent", "That the Negro American League ceased operating after 1948", "That no statistics were kept after the Negro National League folded", "That the clubs after 1948 were barnstorming rather than league operations"], correctIndex: 0, explanation: "The Negro American League actually operated into 1962, so the cutoff is a judgment about quality rather than about existence.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "Which leagues outside the United States does the official record exclude?", options: ["Mexico, Cuba, Puerto Rico, the Dominican Republic and Venezuela", "Only the Cuban and Mexican winter leagues", "None, since all documented professional play is included", "Only leagues that operated before 1920"], correctIndex: 0, explanation: "Which means a star's official career is only its United States fraction.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What does Josh Gibson's Hall of Fame plaque estimate for home runs?", options: ["Almost 800", "Exactly 962, as some accounts state", "176, matching the documented league total", "It gives no figure at all"], correctIndex: 0, explanation: "Baseball Reference's documented total is 176, and MLB's own committee raises the gap itself.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What is the honest explanation of the Gibson home run gap?", options: ["The legend and the record measure different universes", "The plaque figure was a deliberate exaggeration by the Hall", "The documented total omits an entire decade of his career", "The two figures use different definitions of a home run"], correctIndex: 0, explanation: "Baseball Reference lists four reasons: undiscovered box scores, barnstorming games, top independent clubs not classified as major, and Latin American seasons.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "Which documented Gibson game is excluded for lack of a full box score?", options: ["A four-home-run game against the Memphis Red Sox on 28 July 1938", "A five-hit game against the Kansas City Monarchs in 1943", "The 1943 East-West All-Star Game at Comiskey Park", "A no-hitter he caught at Griffith Stadium in 1942"], correctIndex: 0, explanation: "The game is documented; the full box score has never been found, so it does not enter the record.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What does this course do with the Satchel Paige claims of about 2,000 wins and 55 no-hitters?", options: ["It does not repeat them, because their origin could not be traced", "It reports them as the Hall of Fame's official totals", "It corrects them to 125 wins and 12 no-hitters", "It attributes them to his 1962 autobiography as fact"], correctIndex: 0, explanation: "His documented total is 125 wins, and a research check is filed on where the legend numbers came from.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What is the business explanation for the folklore around these numbers?", options: ["Promotional exaggeration was a job function", "Players inflated their own records to negotiate contracts", "Newspapers competed to publish the largest available figure", "The league office deliberately overstated results to attract owners"], correctIndex: 0, explanation: "There was no central statistical office, no league-funded record keeping, and revenue depended on drawing a crowd in a strange town next week.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "How does Baseball Reference compare the two record-keeping efforts?", options: ["This reconstruction is a fraction of the investment made in white major league statistics", "Both were funded at comparable levels from the 1970s onward", "The Negro Leagues records are now more complete than the pre-1960 American League", "No comparison is possible because the methods differ entirely"], correctIndex: 0, explanation: "And it notes that the white major league record, with a funded league office and multiple newspapers per city, still contains thousands of errors before the 1960s.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What does this course say it left out?", options: ["Almost all the on-field history, and the Latin American and Caribbean leagues", "The ownership of the clubs and the sources of their capital", "The 2020 reclassification and the 2024 statistical merge", "The Indianapolis thread and the branch to other sports"], correctIndex: 0, explanation: "Also the semipro and industrial teams, and the fans. It is a business history and it is only that.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What is a designation, as the course uses the term?", options: ["A decision about status rather than about numbers", "A statistic entered into the official record", "A committee's formal recommendation to the commissioner", "A minimum threshold for appearing on a leaderboard"], correctIndex: 0, explanation: "December 2020 was one; May 2024 was the accounting that followed.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "What is a qualifying threshold?", options: ["The minimum playing time needed to appear on a leaderboard", "The number of games a league must play to be designated major", "The share of a season's games for which box scores must survive", "The number of clubs a league must field to be counted"], correctIndex: 0, explanation: "About 1,800 at-bats for Negro Leagues careers against 5,000 for the American and National Leagues, which is the deepest disagreement in the merge.", sourceLessonSlug: "nl-what-is-contested" },
          { prompt: "What is the difference between a rate statistic and a counting statistic?", options: ["A rate is per opportunity; a count accumulates with playing time", "A rate is verified and a count is estimated", "A rate applies to hitters and a count applies to pitchers", "A rate is calculated by the league and a count by the club"], correctIndex: 0, explanation: "Rate statistics are where short seasons show up most, which is why the merge moved them more than it moved career totals.", sourceLessonSlug: "nl-reclassification" },
          { prompt: "What must a piece written for this course's assignment be about?", options: ["One ballclub, one ballpark, or one transaction", "One league, across the whole of its operating history", "One player's career, documented from surviving box scores", "One city's Black business district and its sporting institutions"], correctIndex: 0, explanation: "900 to 1,300 words, with every factual sentence checkable against a named source. A club, a park or a deal, not a league and not a career.", sourceLessonSlug: "nl-write-assignment" },
          { prompt: "Which three questions must the assignment answer explicitly?", options: ["Who owned it, who owned the ground, and who took a cut", "When it was founded, when it folded, and why", "How many games it played, how many it won, and against whom", "What it earned, what it spent, and what it was worth at the end"], correctIndex: 0, explanation: "And if the record does not say, the piece must say that it does not say, and name the record that would settle it.", sourceLessonSlug: "nl-write-assignment" },
          { prompt: "What does the assignment require of any statistic a student cites?", options: ["Which league seasons it covers, whose database it is from, and that the record is incomplete", "That it come from Major League Baseball rather than from a database", "That it be adjusted to a 154-game season before it is quoted", "That it be omitted entirely, since the record is still being revised"], correctIndex: 0, explanation: "It is Section 6's discipline applied to the student's own writing.", sourceLessonSlug: "nl-write-assignment" },
          { prompt: "What does the assignment say about a subject with almost no surviving paper?", options: ["That is a finding and a legitimate subject", "That the student should choose a different subject", "That the student may reconstruct plausible detail with a disclaimer", "That the student should write about the league instead"], correctIndex: 0, explanation: "Say so in the piece and name the record that would settle it. An empty money column is a sentence a professional writes and an amateur hides.", sourceLessonSlug: "nl-write-assignment" },
          { prompt: "Which is a rule the assignment says a student may not break?", options: ["No invented detail, including atmospheric invention", "No use of a newspaper as a source for a business fact", "No citation of a source the course has not already used", "No discussion of a club that operated after 1948"], correctIndex: 0, explanation: "You do not know what the ballpark smelled like. No composite people, no invented dialogue, and every number gets an owner, a date and a scope.", sourceLessonSlug: "nl-write-assignment" },
          { prompt: "What does the assignment ask for in place of a closing paragraph about the human spirit?", options: ["A sourced number", "A quotation from one of the course's owners", "A paragraph on what the subject means today", "A list of the sources the student consulted"], correctIndex: 0, explanation: "No triumphalism and no tragedy framing. A club that folded had a cause, and the cause has a document.", sourceLessonSlug: "nl-write-assignment" },
          { prompt: "Which sources does the assignment point students toward first?", options: ["Black newspapers, National Register nominations, city directories and team records", "Published histories of the Negro Leagues and their major biographies", "Major League Baseball's 2024 database and the Seamheads database", "Oral history interviews with surviving players and their families"], correctIndex: 0, explanation: "It tells students to read a Black newspaper's advertising and box scores before its columns, because those are business records printed on newsprint.", sourceLessonSlug: "nl-write-assignment" },
          { prompt: "Where and when was the Negro National League organized?", options: ["Kansas City, Missouri, on 13 and 14 February 1920", "Chicago, Illinois, in January 1933", "Philadelphia, Pennsylvania, in December 1922", "Indianapolis, Indiana, on 2 May 1920"], correctIndex: 0, explanation: "At the Paseo YMCA and Street's Hotel, with four Black sportswriters and an attorney drafting the governing documents.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "What did clubs pay to join the 1920 league?", options: ["A $500 deposit", "Five percent of their gross gate receipts", "A $1,000 non-refundable franchise fee", "Nothing, since Foster underwrote the first season"], correctIndex: 0, explanation: "The same forfeit device reappears in the Eastern Colored League in 1923 and the second Negro National League in 1935.", sourceLessonSlug: "nl-what-a-league-is" },
          { prompt: "Where did most Negro League club capital come from, and why?", options: ["Numbers banking, because banks would not lend to Black borrowers", "Bank loans secured against the clubs' ballparks", "Public share issues sold in the neighborhoods the clubs served", "League advances repaid out of each season's gate receipts"], correctIndex: 0, explanation: "Rufus Jackson's widow put it plainly: they were involved because they were the only ones with any money.", sourceLessonSlug: "nl-the-money-question" },
          { prompt: "Which two Negro League executives does SABR identify as white?", options: ["J. L. Wilkinson and Tom Baird of the Kansas City Monarchs", "Gus Greenlee and Cum Posey of Pittsburgh", "Alex Pompez and Ed Bolden of the East", "Abe Manley and Tom Wilson"], correctIndex: 0, explanation: "SABR calls them the only two white executives in the league. Foster relented on Wilkinson in 1920 because of his reputation for integrity.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What is the most reliable capitalization figure in this course, and why?", options: ["Tom Wilson's $5,000, because it is inside a filed corporate charter", "Greenlee Field's $100,000, because three SABR pages repeat it", "The Yankees' $114,550, because it comes from their own ledgers", "Wilkinson's $50,000, because SABR published it first"], correctIndex: 0, explanation: "Authorized capital stock in the 26 March 1920 charter of the Nashville Negro Baseball Association and Amusement Company.", sourceLessonSlug: "nl-the-owners-ledger" },
          { prompt: "What did building permits show about Greenlee Field's construction cost?", options: ["$40,000, against the $100,000 Greenlee claimed", "$100,000, confirming the figure everyone repeats", "$60,000, matching Pompez's spending at Dyckman Oval", "Nothing, because no permits for the site survive"], correctIndex: 0, explanation: "Strecker published both, and noted the true cost might still have approached Greenlee's claim. It is the best example of a promoter's number becoming history.", sourceLessonSlug: "nl-what-a-club-owned" },
          { prompt: "What did the Yankees actually take from Black baseball across fifteen years?", options: ["$114,550, from ledgers held at the Hall of Fame", "$100,000 a year, as widely reported", "$426,000, which was the total gross", "$254,668, which the clubs shared between them"], correctIndex: 0, explanation: "An average near $7,600 a year, against the unfootnoted $100,000 a year that circulates.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "How many parties claimed a share of one league gate at Yankee Stadium?", options: ["Four, before the home club's owner saw a dollar", "Two, the landlord and the visiting club", "Three, the landlord, the league and the visiting club", "Five, including the players' own appearance fees"], correctIndex: 0, explanation: "Landlord 25 to 40 percent, booking agent 5 to 10, visiting club about 35, league office 5.", sourceLessonSlug: "nl-the-middlemen" },
          { prompt: "What killed the East-West League in 1932?", options: ["Its clubs abandoned the schedule for better paying outside bookings", "Its president died and no successor could be agreed", "Its clubs could not pay the required forfeit deposits", "The Depression closed the ballparks it had leased"], correctIndex: 0, explanation: "A whole league died inside two months of its members preferring white semipro dates, which is the hardest evidence that the road outearned the league.", sourceLessonSlug: "nl-the-road-and-the-press" },
          { prompt: "Where was the Negro National League's first game played, and when?", options: ["Washington Park, Indianapolis, on 2 May 1920", "Schorling Park, Chicago, on 2 May 1920", "Comiskey Park, Chicago, on 10 September 1933", "Muehlebach Field, Kansas City, in April 1920"], correctIndex: 0, explanation: "The Indianapolis ABCs beat the Chicago Giants, with the crowd recorded at 6,000. It carries both an encyclopedia entry and a state historical marker.", sourceLessonSlug: "nl-abcs" },
          { prompt: "Why does this course refuse to say what the ABC in Indianapolis ABCs stood for?", options: ["The record does not fix it, and two readings compete", "Because the brewery's records were destroyed in a 1913 fire", "Because the club changed the meaning of the name in 1914", "Because no source published before 1920 mentions the name"], correctIndex: 0, explanation: "The American Brewing Company reading is the majority account; a rival reads the letters as three principals' initials; and the club's own historian hedges even the brewery version.", sourceLessonSlug: "nl-abcs" },
          { prompt: "What did the Washington Park lease deny the Indianapolis ABCs?", options: ["Use of the locker rooms", "Any date on a Sunday", "The right to sell their own concessions", "More than four home dates a month"], correctIndex: 0, explanation: "C. I. Taylor built changing space into his own Indiana Avenue business and turned the walk to the ballpark into parades.", sourceLessonSlug: "nl-avenue-and-the-ground" },
          { prompt: "What commercial link between the Madam C. J. Walker company and the ABCs could this course establish?", options: ["None", "A sponsorship covering the club's uniforms and travel", "An advertising contract tied to the club's home dates", "A minority ownership stake held by the company"], correctIndex: 0, explanation: "The one sourced connection is personal: Walker attended many ABCs games, and her death in May 1919 bounds even that.", sourceLessonSlug: "nl-avenue-and-the-ground" },
          { prompt: "What did Syd Pollock give up to get the Clowns into the Negro American League in 1943?", options: ["The Ethiopian name, the whiteface, the wigs, the grass skirts and the clown suits", "A quarter of the club's gate for three seasons", "Control of the club's booking to the league office", "The club's Cuban players, whom the league refused to register"], correctIndex: 0, explanation: "It is the clearest price tag in the course: legitimacy bought with an itemized change to the product.", sourceLessonSlug: "nl-clowns" },
          { prompt: "How does the course report the $10,000 said to have been paid for Hank Aaron's contract?", options: ["As commonly reported, not as established", "As verified by the Encyclopedia of Indianapolis", "As definitively false, contradicted by SABR", "As the largest documented sale in the leagues' history"], correctIndex: 0, explanation: "No primary record was located and SABR's biography of Aaron gives no figure at all.", sourceLessonSlug: "nl-clowns" },
          { prompt: "When did the Indianapolis Clowns disband, and what does it show?", options: ["1989, showing the real product was touring entertainment", "1954, when they withdrew from the Negro American League", "1962, when the Negro American League itself stopped", "1946, when they finally took the Indianapolis name"], correctIndex: 0, explanation: "The business survived by ceasing to be a league team, outliving the league by thirty-five years.", sourceLessonSlug: "nl-clowns" },
          { prompt: "What did the Kansas City Monarchs receive for Jackie Robinson?", options: ["Nothing", "$10,000, matching the later Mays sale", "$5,000, on Robinson's own intervention", "$1,000, matching the Partlow sale"], correctIndex: 0, explanation: "Lanctot states it flatly, and neither Newark for Newcombe nor Baltimore for Campanella was compensated either.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What is the strongest documentary evidence of a contract sale in this course?", options: ["A telegram and a handwritten reply for Willie Mays, held in Memphis", "A signed contract for Larry Doby, held by the Hall of Fame", "A league transaction record for Satchel Paige", "A cancelled check for Hank Aaron, held in Indianapolis"], correctIndex: 0, explanation: "Stoneham's telegram reached Tom Hayes's office at 9:53 a.m. on 21 June 1950 offering $10,000, and Hayes accepted by hand.", sourceLessonSlug: "nl-1945-and-after" },
          { prompt: "What did Newark draw in 1946 and 1947?", options: ["120,292, then 57,000", "57,000, then 120,292", "225,000, then 120,292", "120,292, then 35,000"], correctIndex: 0, explanation: "A widely repeated version misdates the 57,000 to 1948, and the 1948 figure is unsettled.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "Why is the 1947 to 1950 profitability of some Black clubs not evidence of health?", options: ["The money came from selling their own players", "The figures were reported by the clubs and never audited", "The profits went entirely to white booking agents", "The clubs were counting barnstorming rather than league receipts"], correctIndex: 0, explanation: "Income shifted from selling tickets to Black customers to liquidating the asset base, and that has an end.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "How many years separated Robinson's debut from the first Black major league umpire?", options: ["Nineteen", "Three", "Nine", "Twenty-six"], correctIndex: 0, explanation: "1947 to Emmett Ashford's debut on 11 April 1966. Players were integrated two decades before officials were.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What was Bob Douglas's arrangement for the Renaissance Ballroom floor?", options: ["He named the team after the venue to promote it", "He paid $500 a game, the post-Prohibition rate", "He bought a quarter share of the building", "He guaranteed the hall a share of every gate"], correctIndex: 0, explanation: "A barter deal rather than cash, in a Harlem venue designed, financed, built, owned and operated by African Americans.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "Why does the course say football never built a league like baseball's?", options: ["Small gates, no white exhibitions, integrated minors, and no control of venues", "Because the sport was integrated at every level until 1934", "Because Black colleges absorbed all the available talent", "Because the season was too short to support any league"], correctIndex: 0, explanation: "Baseball owned the real estate and football was a tenant: Pollard lost Dyckman Oval in 1938 when Alex Pompez leased it to a rival.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What was the only real Black professional football league, and what were its dimensions?", options: ["The Virginia Negro Football League: four teams, one state, one season, 1946", "The Eastern Football League: eight teams across three states, 1943 to 1946", "The Negro Major League: six teams organized to evade a 1941 ban", "The Northwest Football League: an integrated circuit from 1938"], correctIndex: 0, explanation: "Founded in the very year the color line came down, twenty-six years after the Negro National League in baseball.", sourceLessonSlug: "nl-the-court-and-the-gridiron" },
          { prompt: "What does the PGA of America's own release say about its Caucasian-only clause?", options: ["It ran from 1934 to 1961 and was removed at the 1961 annual meeting", "It was never part of the association's formal bylaws", "It ran from 1943 to 1961, as one newspaper account states", "It applied to tournament entry rather than to membership"], correctIndex: 0, explanation: "A governing body confessing in its own words is the strongest source available for anything in this course.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "In what order did the color lines in boxing, tennis and golf fall?", options: ["Boxing 1937, tennis 1950, golf 1961", "Golf 1948, tennis 1950, boxing 1954", "Tennis 1916, boxing 1937, golf 1961", "Boxing 1908, tennis 1950, golf 1934"], correctIndex: 0, explanation: "The least formalized barrier fell first and the written bylaw lasted longest, which is a defensible argument about how rules make exclusion durable.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "What instrument integrated professional football, twice?", options: ["A public stadium lease", "A federal antidiscrimination statute", "A rival league's competitive pressure", "A commissioner's ruling on club eligibility"], correctIndex: 0, explanation: "The Los Angeles Memorial Coliseum in 1946, and a federally funded Washington stadium in the early 1960s.", sourceLessonSlug: "nl-the-clause-and-the-entry" },
          { prompt: "Which statement best expresses this course's central finding?", options: ["Integration opened a labor market and closed an ownership class", "Integration destroyed a business that had already been failing", "Integration was resisted by Black owners acting against their community", "Integration transferred both the players and the owners into the majors"], correctIndex: 0, explanation: "Players gained an employer, no owner ever received a franchise, and officials waited nineteen more years.", sourceLessonSlug: "nl-what-it-cost" },
          { prompt: "What discipline does this course apply to every number it prints?", options: ["Name how the figure was produced, and hedge where the source hedges", "Prefer the figure that appears in the most sources", "Prefer the figure published most recently", "Convert every figure to present-day dollars before quoting it"], correctIndex: 0, explanation: "An audited ledger, a filed charter and a building permit are one class of evidence; a promoter's press release is another.", sourceLessonSlug: "nl-the-ballpark-problem" },
          { prompt: "Which of these figures does the course print as verified rather than as claimed?", options: ["The Yankees' $114,550 across fifteen years", "Greenlee Field's $100,000 construction cost", "Josh Gibson's almost 800 home runs", "Satchel Paige's roughly 2,000 career wins"], correctIndex: 0, explanation: "It comes from the Yankees' own cash ledgers at the Hall of Fame. The other three are a promoter's claim, a plaque estimate and untraceable folklore.", sourceLessonSlug: "nl-the-ballpark-problem" },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 7 · Outside the league
    //
    // Added after the course shipped, from plans/future-courses/2026-08-28-17-hbcus-and-the-negro-
    // leagues.md. BAM asked four questions the original six sections did not answer: where the
    // players came from, whether clubs played Black college teams, whether they played abroad, and
    // whether they played major leaguers. Half of the answer is a NEGATIVE finding, which is why the
    // section belongs in this course rather than in a new one: the popular "HBCUs were a farm
    // system" story has no located document behind its three mechanism claims, and saying so is the
    // same move `nl-abcs` already makes about the Walker company.
    //
    // NOTHING HERE MAY MAKE TWO SHIPPED DISTRACTORS READ AS TRUE, and neither was edited:
    //   * "Because Black colleges absorbed all the available talent" (nl-final, why football built
    //     no league) stays FALSE: the sourced reason is small gates, no white exhibitions, integrated
    //     minors and no control of venues.
    //   * "College conferences in all three, run out of the HBCUs" (nl-quiz-the-bill, the parallel
    //     institution in golf, tennis and boxing) stays FALSE: those were the UGA, the ATA and a
    //     colored championship in boxing.
    // The findings below make both MORE clearly wrong, not less: Morgan State fielded no baseball
    // team at all, and the Black college's revenue and identity sport was football.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "nl-college-and-club",
      title: "26 · The college and the club",
      section: "Section 7 · Outside the league",
      body: `Six sections in, you have read this league as a firm. This one asks four questions that all sit outside the league table: where the players came from, whether the clubs ever played Black college teams, whether there was money outside the United States, and what happened when they played major leaguers. **Two of the four answers are negative findings, and a negative finding is still an answer.**

**The claim to test first.** You will read in several places that historically Black colleges were a de facto farm system for the Negro Leagues: that clubs recruited on the campuses, held spring training there, and played exhibition games against college teams. **Take that apart, because one part of this subject is well documented and the other produced no document at all.**

**Start with the correction that unlocks the whole misreading.** In this period a Black college was frequently a K-through-college institution, and in the segregated South it was often the only place a Black child could get a SECONDARY education. Bill Foster filled out a document for the Hall of Fame recording that he attended Alcorn for **"four years in elementary school, four years in high school, and four years in college"** (Kern, 2019). He made the college baseball team at **13**. Buck O'Neil went to **Edward Waters College** in Jacksonville because Sarasota High School would not admit him; his grandmother's words in the SABR biography are "John, you can't go to Sarasota High School. Sarasota High School is not for black kids." He left with **a high school diploma and two years of college** (LeMoine, n.d.). **So "he went to an HBCU" is, in a large share of these biographies, a fact about Jim Crow schooling rather than a fact about baseball recruiting.**

**Four pairs that meet this course's standard**, which is that one named source records the college and the club in the same document.
- **Bill Foster**, Alcorn A&M, **BS in agricultural education in 1933**, ten years into his professional career, and **dean of men and baseball coach at Alcorn from 1960** until his death on the campus on **16 September 1978** (Kern, 2019). **The one complete round trip in the whole set.**
- **Hilton Smith**, enrolled at **Prairie View A&M** after high school and pitched for the university team, **left after two years** for professional ball, reached the Kansas City Monarchs in **1937** (National Baseball Hall of Fame, n.d.).
- **Joe Black**, a **partial FOOTBALL scholarship** at Morgan State College from **September 1942**, graduated in **1950 at 26** in psychology and physical education (Dreier, n.d.).
- **Buck O'Neil**, Edward Waters, above.

**Now read the Joe Black case again, because it is the best documented of the four and it cuts against the recruiting claim outright.** The same biography states that **"Although Morgan State did not have a baseball team, Black was still a three-sport athlete in college"**, and that Elite Giants business manager **Vernon Green** signed him after overhearing him boast that he was as good as the players on the field, then arranged a tryout (Dreier, n.d.). **A leading HBCU in a Negro League city fielded no baseball team, and the club found its pitcher in the crowd.** That does not disprove campus recruiting. It means campus recruiting cannot be asserted.

**What IS documented is property, and property is this course's subject.** The New Georgia Encyclopedia: "When at home the Black Crackers played at Ponce de Leon Ballpark, home of the Atlanta Crackers, while the white team was away on road trips. **Other times they played at Morehouse College and Morris Brown College**" (Darnell, n.d.). Heaphy supplies the landlord's arithmetic from the other side: Crackers general manager **Frank Reynolds** "realized that he could lease the ballpark to the black ballclub when the Crackers went on the road and thereby increase the Crackers' profits," and she records that "many of the early ball players joined the club from the local colleges, including Morris Brown and Morehouse," naming Gabby Kemp, Red Hadley and Don Reeves (Heaphy, 2010). **Lesson 9 taught that a Black club usually rented from the white club that had refused it the locker rooms. Atlanta supplies the second landlord: when the white park was unavailable, the fallback was a Black college.** And notice what two of those three men played at Morris Brown. **Football.**

**The sharpest evidence in this lesson is about a rule.** Two Hall of Famers played professionally under false names. SABR records that **Larry Doby** "began playing second base under the assumed name of Larry Walker in the Negro Leagues for the Newark Eagles" (McMurray, n.d.), and that **Monte Irvin** "played under the assumed name of Jimmy Nelson to preserve his amateur status, allowing him to continue to play high-school and college ball" (Hogan, n.d.). **Irvin's biography states the reason. Doby's records the alias and does not, and this course will not supply a motive its source withholds.** **A pseudonym is the signature of a rule being broken.** So the absence of documented games between clubs and college teams may be a FINDING rather than a gap: a man playing under his own name in a scheduled game is visible to his conference in a way a summer alias is not.

**What that reasoning still needs is one specific document.** Oriard's history of the amateur code records that "regular students who earned expense money by playing summer baseball were deemed to violate the amateur code," and that "Playing summer baseball for expense money could get you banned from college football" (Oriard, 2012). **But Oriard is describing the NCAA and the white colleges, and Black colleges were not NCAA members in this period.** The CIAA, founded at Hampton Institute in 1912 and already in this course at lesson 20, wrote its own rules, as did the SIAC and the SWAC. **Their eligibility articles between 1912 and 1950 would settle whether the missing games are a rule or a gap, and this course has not read them.** Until it has, the paragraph above is a hypothesis with good supporting evidence, and it is labelled as one.

**Three things this lesson refuses to state, on exactly the grounds lesson 23 sets out.**
1. **"About 40 percent of Negro League players were college educated."** That is an estimate by **Bob Kendrick, president of the Negro Leagues Baseball Museum**, reported in *Diverse: Issues In Higher Education*. No published methodology, roster count or study appears with it anywhere, and the comparison usually printed beside it, "less than 5 percent" of white major leaguers, has no source at all. The article returns HTTP 403 to this course's fetching and was **not read here**, so even its wording is second hand. **Same class of figure as the unfootnoted "$100,000 a year" this course already refuses, and it gets the same treatment: name who says it, never print it as a count.**
2. **Organised campus recruiting.** No scout's report, no club correspondence with a college, and no newspaper account of a signing off a campus was located.
3. **Spring training on HBCU campuses.** The documented record points somewhere else: **Hot Springs, Arkansas.** The Monarchs trained there in 1927 and 1928, the Memphis Red Sox in 1927, the Homestead Grays in 1930 and 1931, and the Crawfords in 1932 and again in 1935 at Fogel Field, leaving by bus for barnstorming games in Memphis on **13 and 14 April 1935**. **No campus site and no college opponent appears in that account** (Blaeuer, 2020).

**The synthesis, in two sentences you can carry.** The correlation between Negro Leaguers and Black colleges is real and it is documented player by player. **The causal story attached to it, that the colleges fed the leagues, is the part the evidence does not carry**, and where the two games touched they were regulated and often adversarial, which is why men used false names.

:::reveal What does Bill Foster's own Hall of Fame document say about his years at Alcorn, and why does it change how you read every other name on a list like this? ||| That he attended for four years in elementary school, four years in high school and four years in college. In this period a Black college was frequently a K-through-college institution, so "he went to an HBCU" is often a fact about segregated schooling rather than about baseball recruiting.

:::reveal Why is Joe Black the strongest case against organised campus recruiting? ||| Because SABR states Morgan State had no baseball team while he was there, and Elite Giants business manager Vernon Green signed him after overhearing him boasting in the stands, not after seeing him on a campus diamond.

:::reveal What is documented about Black colleges and the Atlanta Black Crackers, and why does it belong in a course about firms? ||| That the club played home games at Morehouse and Morris Brown, renting Ponce de Leon Park only when the white Crackers were on the road. It is a real-estate fact: when the white landlord was unavailable, the fallback landlord was a Black college.

:::reveal What do the assumed names of Larry Doby and Monte Irvin suggest, and what document would settle the argument? ||| That the amateur rule was real enough to evade, so the missing club-versus-college games may be evidence rather than a gap. The CIAA, SIAC and SWAC eligibility articles from 1912 to 1950 would settle whether a Black college conference wrote and enforced that rule.

:::reveal Why does this course refuse the "about 40 percent college educated" figure? ||| Because it is an estimate by the president of the Negro Leagues Baseball Museum with no published methodology, roster count or study named anywhere, and its companion figure for white major leaguers has no source at all. Same class of number as the unfootnoted "$100,000 a year" the course already refuses.

## Vocabulary
- **Farm system**: an organized pipeline that develops players for a professional club, which is the claim this lesson tests and does not find documented for Black colleges.
- **Preparatory department**: the elementary and secondary school run inside a college, which is what a great many "attended an HBCU" biographies from this era are describing.
- **Amateur code**: the rule set that stripped a college athlete's eligibility for taking pay, and the rule the assumed names were evading.
- **Negative finding**: a documented absence, such as no located game between a Negro League club and a Black college team, reported as a result rather than softened into a suggestion.

## Sources
Blaeuer, M. (2020, August 1). *Spring training for the 1935 Pittsburgh Crawfords*. Society for American Baseball Research. https://sabr.org/research/article/spring-training-for-the-1935-pittsburgh-crawfords/

Darnell, T. (n.d.). *Atlanta Black Crackers*. New Georgia Encyclopedia. https://www.georgiaencyclopedia.org/articles/sports-outdoor-recreation/atlanta-black-crackers/

Dreier, P. (n.d.). *Joe Black*. SABR BioProject. https://sabr.org/bioproj/person/joe-black/

Heaphy, L. (2010). The Atlanta Black Crackers. *The National Pastime: Baseball in the Peach State*. Society for American Baseball Research. https://sabr.org/journal/article/the-atlanta-black-crackers/

Hogan, L. (n.d.). *Monte Irvin*. SABR BioProject. https://sabr.org/bioproj/person/monte-irvin/

Kern, T. (2019, December 9). *Bill Foster*. SABR BioProject. https://sabr.org/bioproj/person/bill-foster/

LeMoine, B. (n.d.). *Buck O'Neil*. SABR BioProject. https://sabr.org/bioproj/person/buck-oneil/

McMurray, J. (n.d.). *Larry Doby*. SABR BioProject. https://sabr.org/bioproj/person/larry-doby/

National Baseball Hall of Fame. (n.d.). *Hilton Smith*. https://baseballhall.org/hall-of-famers/smith-hilton

Oriard, M. (2012). NCAA academic reform: History, context and challenges. *Journal of Intercollegiate Sport, 5*(1), 4-18. https://journals.ku.edu/jis/article/view/10054`,
    },
    {
      slug: "nl-one-paper-two-leagues",
      title: "27 · One newspaper, two leagues",
      section: "Section 7 · Outside the league",
      body: `Lesson 11 established that the Black press was infrastructure rather than a spectator: four Black sportswriters drafted the 1920 constitution, *Pittsburgh Courier* writer **Rollo Wilson was made league commissioner in 1934**, the second Negro National League was announced in the *Courier*'s year-end 1932 edition by a writer who then became its secretary, and **Cum Posey's father was one of the original investors in the *Courier*** (Bauer, 2022; Goldman, 2021). **Go back and reread that if you need to. This lesson adds the half that would not fit, and it is the half that answers the question this section opened with.**

**In the same years, the same newspaper company was doing the same job for a completely different sport.**

**The college game's authority was a newspaper.** The *Courier* **selected its first Black college football national champion after the 1920 season and its first All-America team in 1925**. The selections were made by the paper's own sportswriters, a roster that over the years included **Wendell Smith, Chester Washington and Bill Nunn**, and they were **carried into major African American newspapers across the country through the Associated Negro Press**. **Each January the *Courier* held a banquet in Pittsburgh to honor the All-America team**, and that annual ceremony **ran until 1979** (College Football Hall of Fame, 2016).

**Now put the two columns beside each other and read what they add up to.** In the same decades, one Black-owned newspaper company **named the college game's national champion and its All-Americans**, and **supplied the professional league its commissioner, printed its founding announcement, and counted a founding owner's father among the paper's own investors.** There was no NCAA that would admit Black colleges and no commissioner's office with money behind it. **So the closest thing either game had to a governing body was a newspaper, and it was the same newspaper.**

**Read that as a business, because that is what this course does.** A national championship is a **product**. It sells papers in December and January, it fills a banquet hall in Pittsburgh every year for more than fifty years, and it makes the paper the institution both games have to be covered by. **The *Courier* built a franchise out of adjudication, and the input cost was a column.** Compare that with the ballclubs in Section 3, which had to rent a stadium from a landlord who had refused them the locker rooms in order to earn anything at all. **The paper owned its means of production and the ballclubs did not**, and that is most of why the paper outlasted the leagues.

**Two limits, and this course states limits before it states conclusions.**

**Limit one: this is shared GOVERNANCE, not a pipeline.** One institution adjudicating both games is not one institution feeding players to the other. Lesson 26 is where the pipeline claim died, and nothing here revives it. **A newspaper that names your champion has no roster, no scouts and no contract with anybody.**

**Limit two, and it is the sharper one: notice which college sport the *Courier* was governing.** It ran an annual national championship and an All-America team in **football**. No comparable annual selection in Black college **baseball** appears in that account. **That absence is evidence about which sport the colleges were actually selling**, and it arrives at the same place lesson 19 reached from the other direction: football was the Black college's revenue and identity sport, and the Negro Leagues' recruits from Morris Brown had played it.

**And the conflict of interest doubles.** Lesson 11 said plainly that a course presenting the Black press purely as a watchdog is teaching something false, because the same men wrote the league's constitution, announced it, chose its all-stars by printing ballots, reported its results, and in two cases ran it. **Add the college game and the same firm is now reporting on, adjudicating and profiting from two sports at once.** That is not a scandal to expose. **It is what institution building looks like when a community has to supply every function itself**, and Section 5 already showed you the same press turning on the Black owners during integration.

:::reveal What did the Pittsburgh Courier do for Black college football, and from when? ||| It selected the Black college football national champion beginning after the 1920 season and an All-America team from 1925, chose by its own sportswriters, distributed nationally through the Associated Negro Press, and honored each January at a banquet in Pittsburgh that ran until 1979.

:::reveal State the connection between the two games in one sentence, without overclaiming it. ||| One Black-owned newspaper was the closest thing to a governing body that either game had: it named the college champion and All-Americans while supplying the professional league its commissioner, its founding announcement and part of its founding capital.

:::reveal Why does this lesson insist the Courier connection is not a pipeline? ||| Because adjudicating two games is not feeding players from one to the other. A newspaper that names a champion has no roster, no scouts and no contract with any player, so nothing here revives the farm-system claim lesson 26 tested and found undocumented.

:::reveal What does the Courier's silence in Black college baseball tell you? ||| That football, not baseball, was the Black college's revenue and identity sport. The paper ran an annual championship and an All-America team in football and no comparable annual baseball selection appears beside them.

:::reveal Read the Courier as a firm. What did it own that the ballclubs did not? ||| Its means of production. A championship it printed itself cost a column and filled a banquet hall for over fifty years, while a ballclub had to rent a stadium from a landlord who had refused it the locker rooms before it could earn anything.

## Vocabulary
- **De facto governing body**: an institution that performs a governing function without holding the office, which is what the Courier did for two games at once.
- **Adjudication as product**: selling the act of deciding, in this case a championship and an All-America team that sold papers and filled an annual banquet.
- **Associated Negro Press**: the wire service that carried the Courier's selections into Black newspapers nationally, which is what turned one paper's opinion into a national standard.
- **Conflict of interest**: reporting on an institution you also govern and profit from, which the Courier did in both the college game and the professional one.

## Sources
Bauer, J. (2022). We are the ship, all else the sea: The founding of the Negro National League. Society for American Baseball Research. https://sabr.org/research/article/we-are-the-ship-all-else-the-sea-the-founding-of-the-negro-national-league/

College Football Hall of Fame. (2016, February 25). *HBCU All-America teams and national champions*. https://www.cfbhall.com/news-and-happenings/blog/hbcu-all-america-teams-and-national-champions/

Goldman, D. (2021). 1933-1962: The business meetings of Negro League baseball. Society for American Baseball Research. https://sabr.org/journal/article/1933-1962-the-business-meetings-of-negro-league-baseball/`,
    },
    {
      slug: "nl-market-was-international",
      title: "28 · The market was international",
      section: "Section 7 · Outside the league",
      body: `Every lesson so far has treated the color line as the boundary of the market. **It was not a boundary. It was a domestic arrangement, and this lesson is about what happened at the border.**

**Mexico, and it is the best-evidenced case.** Veracruz owner **Jorge Pasquel** took control of the Mexican League in **1940**, six years before the raids on Major League Baseball that made his name in American writing. Seamheads, announcing its Mexican League data, states it plainly: **"A total of 67 players that either had or would later play in the Negro Leagues played in the 1940 Mexican League, which was almost 1/3 of all the league players"** (Johnson, 2019). **Read the evidence class as well as the number**, because that is the habit Section 6 was for: the figure is a count out of a database, and the database names its own source, Pedro Cisneros's *Mexican League Encyclopedia*, compiled into electronic form by Frank Hamilton. **A number with a stated corpus behind it is a different object from an estimate, and this course treats them differently.**

**Why they went, in a player's own words, printed at the time.** **Willie Wells**, one of the men who left, told the ***Pittsburgh Courier***: **"One of the main reasons I came back to Mexico is because I've found freedom and democracy here, something I never found in the United States"** (Enders, n.d.). **Hold on to what kind of source that is.** It is not a historian's summary of how players felt. It is a player, named, speaking to a Black-owned newspaper, in the period, about his own employment decision. **That is the strongest single piece of testimony in this section.** The version that circulates adds a reporter, Wendell Smith, and a year, 1944. **The reference this course could open names neither**, so the byline and the date are not stated here and are filed as a source check.

**And the honest limit on the pay claim, which is the part that gets repeated wrong.** What the record supports is that Mexico paid better **than the Negro Leagues**. It does not support "better than the major leagues," and this course prints no comparison it did not open. **Say it the narrow way or it is false.**

**Venezuela, and here is a dated figure you can actually check.** Joe Black left Morgan State in his junior year, in the autumn of 1947, **to pitch for Magallanes in the Venezuelan winter league for $800 a month** (Dreier, n.d.). **A named player, a named club, a named month, a named amount.** Set that beside the East-West All-Star Game in lesson 11, where the commonly repeated $50 or $100 player payment has no locatable source at all. **This is what the difference between a documented figure and a repeated one looks like inside a single course.**

**Cuba, which is the structurally important one and the reason this lesson exists.** The National Baseball Hall of Fame states that **"Cuban teams fully integrated their benches beginning in 1900 after the Spanish-American War."** Negro League stars including **Ray Brown, Ray Dandridge, Josh Gibson and Willie Wells** played in the Cuban winter league in the 1930s; by the late 1940s and 1950s the same rosters carried **Monte Irvin and Don Newcombe** alongside young Cuban stars and American prospects including future Hall of Famers **Jim Bunning, Tommy Lasorda and Brooks Robinson** (National Baseball Hall of Fame, n.d.). **So Black and white professionals shared a clubhouse ninety miles from Florida for half a century while the American major leagues said it could not be done.**

**That is the payoff of the whole lesson, and it is one sentence: the color line was a UNITED STATES arrangement.** Not a fact about the sport, not a fact about the players, and not a fact about the paying public in general. **A domestic business rule, enforced in one country, that other countries in the same labor market simply did not have.** Every argument you were ever given about why integration was impractical has to survive that, and none of them does.

**The Pacific, briefly, because the record there is thinner and the course says so.** The **Philadelphia Royal Giants** toured Japan in **1927 and 1932-33** and competed across Hawaii, Japan, Korea, China and the Philippines, led by **Biz Mackey** with Andy Cooper, Rap Dixon and Frank Duncan. Japanese baseball historian **Kazuo Sayama** concluded that without those visits professional baseball in Japan would not have emerged as early as **1936**, describing the Negro Leaguers as a "shock absorber" that let Japanese players build confidence instead of being discouraged by dismissive major leaguers (Staples, 2019). **Won-lost records for those tours circulate widely and are not printed here**, because the accounts this course could open do not carry them.

**Now connect it back to the balance sheet, because an international market is a business fact before it is a moral one.** A club whose players can earn more abroad has a **labor cost problem** and a **retention problem** at exactly the moment it is also fighting for the gate at home. Newark lost Wells, and Wells said in print why. The same pull thinned rosters across the leagues in 1940 and 1941. **A league that cannot match an outside bid does not lose an argument, it loses an asset**, which is precisely the mechanism Section 5 showed you in 1947, running in the same direction and with a bigger bidder.

:::reveal How many Negro Leaguers played in the 1940 Mexican League, and why does the way that number was produced matter? ||| 67, almost a third of everyone in the league, per Seamheads. It is a count out of a database that names its own corpus, Pedro Cisneros's Mexican League Encyclopedia, so it is a different class of evidence from an estimate with no methodology.

:::reveal Quote Willie Wells on Mexico, and say what kind of source it is. ||| "One of the main reasons I came back to Mexico is because I've found freedom and democracy here, something I never found in the United States." It is a named player speaking to a Black-owned newspaper in the period about his own employment decision, not a historian summarizing how players felt.

:::reveal State the pay finding for Mexico in the narrow form the record supports. ||| That Mexico paid better than the Negro Leagues. It does not support "better than the major leagues," and stating it the wide way makes it false.

:::reveal What does the Hall of Fame say about Cuban benches, and what does that establish? ||| That Cuban teams fully integrated their benches beginning in 1900 after the Spanish-American War. It establishes that the color line was a United States arrangement rather than a fact about the sport, since Black and white professionals shared rosters ninety miles away for half a century.

:::reveal Read the international market as a balance-sheet problem for a Negro League club. ||| It is a labor cost and retention problem. A club whose stars can earn more abroad loses assets rather than arguments, at the same moment it is fighting for the gate at home, which is the same mechanism integration ran in 1947 with a bigger bidder.

## Vocabulary
- **Winter league**: an off-season professional league, in this era mostly Caribbean and Latin American, where Negro Leaguers could earn a second salary and often did.
- **Labor market**: the whole set of employers competing for the same players, which in this case crossed at least four national borders while the major leagues pretended it did not.
- **Retention problem**: what a club has when a rival can outbid it for its own roster, which Mexico created in 1940 and 1941.
- **Domestic arrangement**: a rule enforced inside one country only, which is what the color line turns out to have been once you look at Cuban rosters from 1900.

## Sources
Dreier, P. (n.d.). *Joe Black*. SABR BioProject. https://sabr.org/bioproj/person/joe-black/

Enders, E. (n.d.). Wells, Willie James. In *Scribner encyclopedia of American lives, thematic series: Sports figures*. Encyclopedia.com. https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/wells-willie-james

Johnson, K. (2019, October 11). *The Mexican leagues are here!* Seamheads. https://seamheads.com/blog/2019/10/11/the-mexican-leagues-are-here/

National Baseball Hall of Fame. (n.d.). *Winters in Cuba*. https://baseballhall.org/discover/hall-of-famers-played-in-cuban-winter-league

Staples, B., Jr. (2019, August 2). *Biz Mackey and Japan*. Society for American Baseball Research. https://sabr.org/research/article/biz-mackey-and-japan/`,
    },
    {
      slug: "nl-playing-the-majors",
      title: "29 · Playing the majors, and what the record cannot settle",
      section: "Section 7 · Outside the league",
      body: `Sooner or later somebody asks the question this lesson is about: **could they have played in the majors?** The answer people reach for is the exhibition record, because Black clubs and major leaguers really did play each other and somebody kept score. **This lesson teaches why that record cannot settle the question it is always cited to settle, and why it is still powerful evidence for a different one.**

**First, three different things get merged into one claim.**
1. **Full major-league clubs, playing as themselves.** This happened, and it happened mostly **before 1922**.
2. **All-star or pickup squads of major leaguers.** This is what most postseason interracial games were **after 1922**, for a reason given below.
3. **Major leaguers playing under assumed names**, which the sources on barnstorming say also happened.
**A course must not let the second be read as the first**, and most retellings do exactly that.

**Now the rule, because the rule is what changed the opponent.** The provision Babe Ruth broke was **Article IV, Section 8(b) of the major-league code**: **"Both teams that contest in the world's series are required to disband immediately after its close and the members thereof are forbidden to participate as individuals or as a team in exhibition games during the year in which the world's championship was decided."** SABR records that a barnstorming ban had been codified in the American League in **1910** and extended to both leagues in **1916**, and that on **5 December 1921** Commissioner Landis suspended **Ruth and Bob Meusel from Opening Day to 20 May** and ordered them to return their World Series shares (Flynn, 2019).

**What replaced it in 1922 is the part that matters here.** The Hall of Fame records that the rule Ruth was suspended under **"was removed by July 1922,"** and was replaced with a permission regime: a World Series player needed **the consent of his club president and then the commissioner's permission** to join a tour, **no exhibition play was allowed past 31 October**, and **no more than three players from any one club could play on a single team in an exhibition game** (National Baseball Hall of Fame, n.d.).

**Read that three-player cap as a market rule and the whole picture changes.** A cap of three teammates makes a **club** legally impossible on a barnstorming date and an **all-star squad** the only available form. **So the postwar sentence "a Negro League club beat a major-league team" is almost never what the record shows.** It shows a Black club, playing together all season, against a group of white professionals assembled for the afternoon.

**And here is a motive this course will not assert.** You will read that Landis's limits were adopted **because** Black teams kept beating major-league squads, and that big leaguers were made to advertise themselves as All-Star teams rather than appear under their club names or in club uniforms. **The three-player cap and the 31 October cutoff are documented as general barnstorming rules.** The claim that they were aimed at interracial games is **an interpretation that appears in secondary writing without a citation to Landis's own words**, and this course states the rule, says who reads a motive into it, and stops. The Major League code text and Landis's own office correspondence would settle it, and this course has read neither.

**The numbers, and the reason to ask "out of what" before you use one.** The most quoted figure is Todd Peterson's: **African American clubs went 315-282-20, a .527 record, against big-league teams from 1900 through 1948, drawn from more than 2,000 interracial games.** The same summary also carries a second figure, **nearly 55 percent**, but that one is measured against **the best white batters, pitchers and teams they were allowed to play**, which is a wider population than "big-league teams." **Two numbers, two denominators, one author.** They are routinely blended into "Negro League teams beat major-league teams 55 percent of the time," which is **not what either figure says**. And a third number from the same book reaches you through Leslie Heaphy's review of it: **a 325-314 record in interracial competition from 1885 to 1948**, at page 94, a different span again (Heaphy, 2020).

**Disclosure, in the course's own style.** The page carrying the first two figures **returned HTTP 403 to this course's fetching and the book itself was not read here.** The review was. **So .527 and "nearly 55 percent" are reported as attributed rather than as verified**, and both are filed as a source check. **Notice that this is the same discipline lesson 23 applies to Josh Gibson's home run totals, applied to a number that supports the argument rather than one that undercuts it.**

**Why none of this can answer the quality question. Five reasons, and they compound.**
1. **After 1922 the white side was usually not a team**, but a squad assembled for the day, with no manager who had worked with it and no season together.
2. **The stakes were asymmetric.** The Black club's season revenue depended on the gate. The major leaguers were playing an October payday.
3. **Conditioning and timing differ.** For one side these were end-of-season or off-season dates; for the other they were part of a working year that could pass 200 games.
4. **The sample is what was ALLOWED to happen**, which is the definition of a non-random sample. What was allowed changed in 1921, changed again in 1922, and changed after that by practice.
5. **The record is incomplete**, which is Section 6's whole subject and does not stop being true because a number flatters the right side.

**So hold both halves at once, which is the move lesson 1 asked you for.** **The exhibition record is strong evidence that the exclusion was not about quality**, because if it had been about quality somebody would have produced the games showing it and nobody ever did. **And it is not a controlled comparison and cannot be used as one.** Both of those are true, at the same time, about the same games. **An argument that needs the second to be false in order to make the first feel stronger is doing advocacy, and this course is not for that.**

:::reveal What three different opponents get merged into one claim about Negro League clubs playing the majors? ||| Full major-league clubs playing as themselves, mostly before 1922; all-star or pickup squads of major leaguers, which is most of what happened after 1922; and major leaguers appearing under assumed names.

:::reveal What replaced the rule Babe Ruth was suspended under, and which part changed who the opponent was? ||| A permission regime from July 1922: club president's consent then the commissioner's, no exhibition play past 31 October, and no more than three players from any one club on a single exhibition team. The three-player cap made a club impossible and an all-star squad the only legal form.

:::reveal What does this course refuse to assert about Landis's barnstorming limits? ||| That they were adopted because Black teams kept beating major-league squads. The cap and the cutoff are documented as general barnstorming rules; the motive is an interpretation repeated in secondary writing with no citation to Landis's own words.

:::reveal Peterson's .527 and his "nearly 55 percent" are not the same claim. What is the difference? ||| The denominator. The 315-282-20 record is against big-league teams from 1900 to 1948; the "nearly 55 percent" is against the best white batters, pitchers and teams Black clubs were allowed to play, which is a wider population. Blending them produces a sentence neither figure supports.

:::reveal Give the two things that are true at once about the exhibition record. ||| It is strong evidence that exclusion was not about quality, since no games were ever produced showing otherwise, and it is not a controlled comparison, because the opponent was usually a pickup squad, the stakes and conditioning were asymmetric, the sample is what was allowed to happen, and the record is incomplete.

## Vocabulary
- **Exhibition game**: a game outside any league schedule, which is the only place a Black club and major leaguers could meet, and the category the 1921 and 1922 rules governed.
- **Denominator**: the population a rate is measured against, which is what separates Peterson's .527 from his "nearly 55 percent" and what a reader has to ask for before quoting either.
- **Non-random sample**: a set of results produced by a selection process rather than by chance, which is exactly what "the games that were allowed to happen" means.
- **Attributed versus verified**: a figure reported with its source named but not read directly, which is how this lesson prints .527 and says so.

## Sources
Flynn, T. S. (2019). Showdown: Babe Ruth's rebellious 1921 barnstorming tour. In *The Babe*. Society for American Baseball Research. https://sabr.org/journal/article/showdown-babe-ruths-rebellious-1921-barnstorming-tour/

Heaphy, L. (2020, July 11). *Review of The Negro Leagues were major leagues* [Review of the book *The Negro Leagues were major leagues: Historians reappraise Black baseball*, by T. Peterson, Ed.]. Sport in American History. https://ussporthistory.com/2020/07/11/review-of-the-negro-leagues-were-major-leagues/

National Baseball Hall of Fame. (n.d.). *At home on the road*. https://baseballhall.org/discover-more/history/barnstorming-tours`,
    },
  ],
};
