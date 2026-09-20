import type { AuthoredCourse } from "./authored-course";

// "Soul Train: Who Paid, Who Owned, Who Got Paid" (Careers & Media, plus Culture & History).
// Slug to be registered: `soul-train-the-business`. PRIVATE UNTIL VETTED, price 0, free.
// NO seriesCode / seriesPosition / seriesTrack: BAM, 2026-09-19, private courses carry no code.
// Built from plans/future-courses/culture/2026-09-18-soul-train-brief.md (rubric 36/36, form C6),
// plus the two saved research notes in the same folder (Motown + Johnson Publishing; BET, Essence,
// Urban One, Black Enterprise).
//
// THE OUTLINE IS PROVISIONAL. BAM said on 2026-09-20 that he will review it. The seven sections
// below are the brief's seven, built as written; treat the section boundaries as a draft he may
// move, and do not let a later edit assume they are settled.
//
// BAM'S FIVE ANSWERS (2026-09-20), all binding, and how each one is carried out here:
//  1. OUTLINE: build the brief's seven sections; mark the outline provisional (done, above).
//  2. JOE COBB'S ROYALTY SUIT: taught, in section 7, as HIS ALLEGATIONS in an OPEN case. The lesson
//     uses the words "allegations" and "unresolved". He is a retired public broadcaster and a named
//     plaintiff in a public federal case, not a private individual.
//  3. CORNELIUS'S DEATH: the DATE only (1 February 2012), never the manner. This forced one
//     citation to be dropped; see "CLAIMS DROPPED" below.
//  4. THE MEMOIR: read for this build from content/Afro Sheen_ ... -- George E Johnson -- 2025.epub,
//     the sponsor's own account (Johnson, G. E., with Beard, H., 2025, Little, Brown). It is in
//     copyright and this file is tracked in git, so: NO reproduction, NO extended paraphrase, NO
//     long quotation. Facts are not copyrightable, so the course states what he says happened,
//     attributed to him by name, with at most a short quoted phrase where the wording itself is the
//     point. Where his account differs from a contemporary document, the lesson TEACHES THE
//     DIFFERENCE rather than choosing a winner.
//  5. SOUL UNLIMITED'S ENDING STAYS OPEN. Section 6 writes its start and the 1973 trade-press
//     response from verified print, and says plainly that why it ended is not established here, and
//     what would settle it (the 7 June 1973 Rolling Stone and the June 1973 Jet issues BAM is
//     looking for). No lesson asserts a cause.
//
// THE QUOTING RULE THIS FILE FOLLOWS, tighter than the brief's. The brief marks each source "raw"
// (read in the page's own text) or "(summary)" (read through a summarising fetch tool) and warns
// that a summarised quotation must be re-read before a lesson prints it. So: DIRECT QUOTATION ONLY
// FROM SOURCES THE BRIEF MARKED RAW, plus the memoir, which was read directly for this build.
// Everything from a "(summary)" source is reported in the course's own words with attribution and
// never inside quotation marks. Raw sources used: Billboard 26 Aug 1972, 27 Jan 1973, 17 Mar 1973,
// 14 Apr 1973, 28 Sep 1974; Record World 24 Mar 1973 and 12 May 1973; Broadcasting 30 Jul 1973;
// Contemporary Black Biography (Cornelius; Cullers); Encyclopedia of Television (Soul Train;
// Syndication); NPR 2012; CNN 2012; the NYT obituary of George E. Johnson; Encyclopedia of Chicago;
// Johnson Products Co. v. FTC, 549 F.2d 35 (7th Cir. 1977); L'Oreal's 2000 release; Variety and
// Music Business Worldwide 2016; the Cobb docket; Block Club Chicago 2025.
//
// WHAT THE RESEARCH SETTLED THAT THE POPULAR TELLING GETS WRONG, carried in the lessons:
//  - 2011 was an INVESTMENT IN THE PARENT COMPANY (Vibe Holdings), not a sale of Soul Train to
//    Magic Johnson. Lesson `an-investment-is-not-a-sale`.
//  - BET's purchase was REPORTED ON 4 APRIL 2016. The 7 April date that circulates is the
//    publication date of a later trade article. Same lesson.
//  - Cornelius funded the pilot himself AND Sears covered only a fraction of the cost. Both are
//    true; section 2 settles it.
//  - NO STATEMENT BY ROBERT L. JOHNSON OR SHEILA JOHNSON SAYS SOUL TRAIN INSPIRED BET. The research
//    note searched for exactly that and found none. This course must never claim one. What exists
//    is a 2012 statement by a BET executive, and the course says who said it and from what chair.
//
// CLAIMS DROPPED, and why (the full list is repeated in the footer for whoever registers this):
//  - The Stephen Hill quotation about 106 & Park and the BET Awards. Verified, but its only source
//    is a Hollywood Reporter article whose URL states the manner of Cornelius's death, which BAM
//    excluded. An APA entry must print the URL, so the quotation and its citation are both out.
//  - Clarence Avant's 2019 documentary account, Jesse Jackson's reported protest to ABC, the 2006
//    last-episode date, the "longest-running first-run syndicated program" superlative, the May
//    2008 sale date, and P&G's 2003 route to Johnson Products: all REPORTED only, so absent or
//    attributed, never asserted.
//
// HOUSE STYLE, matching drew-blood-bank-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block; an APA 7 `## Sources` block; one quiz per teaching
// section (pool sized to audit-course's density target, serving 5, passing 80, shuffled) plus a
// final pooling 41 and serving 10, placed LAST; every question carries `explanation` and
// `sourceLessonSlug`. Correct options are SHORT and distractors long and specifically wrong, so
// check-longest-option passes by construction. No em dashes anywhere a learner reads.
export const SOUL_TRAIN_THE_BUSINESS_COURSE: AuthoredCourse = {
  title: "Soul Train: Who Paid, Who Owned, Who Got Paid",
  description:
    "Soul Train is remembered as a dance show. This course reads it as a business. In 1970 a Chicago radio announcer produced a pilot at his own expense for a small UHF station, found one sponsor in a Sears merchandise manager whose commitment covered a fraction of the cost, and worked ten weeks without a salary. The next year a Black-owned hair-care company that had just listed on the American Stock Exchange paid for the show to reach the country without a network, one station at a time. The course follows the money: what first-run syndication is and what it did for who controlled the show; why a sponsor's own business record, a stock listing, a Federal Trade Commission order, a court opinion, a sale, belongs in the show's story; the partner, the label, the club and the merchandising arm built around it; the network rival that appeared in 1973 and the trade-press fight about it; and what the brand, its library and its signature sound were worth after the man who built it sold them. It is built from 1972 to 1974 trade papers, a federal appeals court opinion, government and company releases, an open 2024 federal docket, and the sponsor's own 2025 memoir, and it names which kind of source every claim comes from. Where a participant's account and a contemporary document disagree, the course teaches the disagreement instead of picking a winner.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — A show as a business
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-show-as-a-business",
      title: "1 · A show as a business",
      section: "Section 1 · A show as a business",
      body: `Most people remember Soul Train as a dance show. This course reads it as a business, and asks a different set of questions about it. Who paid for the first tape? Who owned the show? Who sold the advertising time, and to whom? When the man who built it sold it, what exactly changed hands, and who was still owed something afterward?

Those questions have documents behind them. A weekly trade paper printed the sponsor's spending in 1972. A federal appeals court published an opinion about the sponsor's product labels in 1977. A press release in 2011 and trade reports in 2016 recorded who held the film library. A complaint filed in federal court in 2024 is still open. This course works from those, and it tells you each time what kind of source a fact came from.

**The shape of the story.** A Chicago radio announcer, Don Cornelius, got a local dance show onto a small ultra high frequency station, channel 26 in Chicago, after producing a pilot at his own expense. On 2 October 1971 the show went national without a network, carried by stations that bought it one market at a time, with a Chicago hair-care company as its national sponsor (Chapman, 1974). It reached roughly 100 markets by 1974 (Chapman, 1974). Cornelius hosted it until 1993 and it stayed on the air until 2006 (Littleton, 2016). He sold the brand, the production rights and the film library in 2008 (Ali, 2008). The library changed hands twice more and ended up inside a division of a large media company in 2016 (Littleton, 2016).

**The trap in the names, and it is in print.** Three men named Johnson matter to this story. None of them are related to each other.

| Who | Company | What it did here |
|---|---|---|
| George E. Johnson | Johnson Products Company, Chicago | Ultra Sheen and Afro Sheen; Soul Train's national sponsor from 1971 |
| John H. Johnson | Johnson Publishing Company, Chicago | published *Ebony* and *Jet*, where the sponsor bought its print advertising |
| Robert L. Johnson | Black Entertainment Television | co-founded BET, whose parent company bought Soul Train in 2016 |

The *New York Times* obituary of George E. Johnson stops in the middle of itself to say so: "(Johnson Products is not related to Johnson Publishing Company of Chicago, the former publisher of Ebony and Jet magazines. Nor is it related to Robert L. Johnson, a co-founder of Black Entertainment Television.)" (Hershey, 2026). A newspaper does not print a parenthesis like that unless readers keep getting it wrong.

**What this course is not.** It is not a survey of the music, the dancing or the fashion, and it does not rank the performances. It reproduces no footage, no advertisement and no photograph, because those belong to somebody. It quotes short passages of 1972 to 1974 trade papers for comment, and it links to the free scans so you can read the same pages.

:::reveal What four questions does this course ask about Soul Train instead of asking about the music? ||| Who paid for the first tape, who owned the show, who sold the advertising time and to whom, and who was still owed something after the show was sold.

:::reveal Which three unrelated men named Johnson turn up in this story, and what did each one run? ||| George E. Johnson of Johnson Products, the sponsor; John H. Johnson of Johnson Publishing, which published Ebony and Jet; and Robert L. Johnson, a co-founder of BET, whose parent bought the show in 2016.

## Vocabulary
- **Sponsor**: a company that pays for the advertising time inside a program, sometimes for all of it, in exchange for its commercials running there.
- **Syndication**: selling a program to individual stations market by market rather than to a national network.
- **Library**: the recorded episodes of a program, owned as property and sold with the brand.
- **Trade paper**: a weekly published for an industry rather than the public, such as *Billboard* for the record business or *Broadcasting* for television.

## Sources
Ali, R. (2008, June 19). *Soul Train franchise bought by InterMedia-backed MadVision; multiplatform plans*. CBS News. https://www.cbsnews.com/news/soul-train-franchise-bought-by-intermedia-backed-madvision-multiplatform-plans/
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Hershey, R. D., Jr. (2026, July 7). George E. Johnson, who built a Black hair care empire, dies at 99. *The New York Times* [Republished by *The Philadelphia Inquirer*]. https://www.inquirer.com/obituaries/obit-george-johson-20260707.html
Littleton, C. (2016, April 4). BET acquires "Soul Train" franchise from InterMedia Partners, Ron Burkle's Yucaipa. *Variety*. https://variety.com/2016/tv/news/soul-train-bet-don-cornelius-acquire-1201744886/`,
    },
    {
      slug: "how-to-read-these-sources",
      title: "2 · Three kinds of source, and what each one is good for",
      section: "Section 1 · A show as a business",
      body: `Almost everything known about Soul Train's business comes from one of three kinds of source, and they are not interchangeable. Learning to tell them apart is half of what this course teaches.

**One: the contemporaneous document.** A page printed while the thing was happening, by somebody with no stake in how it is remembered. *Billboard* reporting in August 1972 that the sponsor had taken more than a million dollars of time on the show. *Broadcasting* listing the syndication arrangements of the week in July 1973. A court opinion filed in February 1977. A federal docket sheet. These can be wrong, but they cannot be wrong on purpose about a future they have not seen yet.

**Two: the participant's own account.** A person telling their own story, on the record, under their own name. There are two big ones here, and both must be labelled every time they are used.

The first is a 16-page *Billboard* special section from 28 September 1974. It is a valuable document: it contains Cornelius describing his own deals in his own words. It is also not independent reporting. Its credits say it was produced in "Coordination with Don Cornelius Productions", and the pages around the text are paid congratulatory advertisements from record labels and business partners (Chapman, 1974). Read it as Cornelius's account and his partners' tributes.

The second is the memoir George E. Johnson published in 2025, fifty-four years after the sponsorship began (Johnson & Beard, 2025). It is the only first-person account of how the sponsor's side of the deal was made. It is also a recollection written half a century later, and this course will show you at least one place where it and a court document do not agree.

**Three: the reference work.** An encyclopedia entry that summarises other people's reporting. Useful for a chronology, dangerous for a detail, because its own errors travel. The *Contemporary Black Biography* entry on Cornelius, used in several lessons here, puts a singer in the wrong group, gives two different years for the Soul Train Music Awards in one article, and cites a *Billboard* issue by the wrong date (Wankoff, n.d.). None of that makes it useless. It makes it a source you upgrade before you assert anything from it.

**The working rule.** When two of these disagree, the course says both and says which is which. A participant's memory of a court case does not outrank the court's own opinion. A reference work's date does not outrank the issue of the magazine it is describing. And a contemporaneous trade paper is still somebody's reporting, so when two trade papers printed different facts in the same month, as they did about the 1973 network rival, the course prints both.

:::reveal Why is the 1974 Billboard special section a participant's account rather than independent reporting? ||| Its own credits say it was produced in coordination with Don Cornelius Productions, and the pages carry paid congratulatory advertisements from his business partners.

:::reveal What does this course do when a participant's later account and a contemporaneous document disagree? ||| It prints both, says which kind of source each one is, and does not treat the later recollection as outranking the document.

## Vocabulary
- **Contemporaneous**: created at the time of the events described, rather than recalled afterward.
- **Special section**: a themed block of pages inside a trade magazine, often sold around a single subject and paid for by advertisements about it.
- **Participant account**: a description of events by someone who took part in them and has an interest in how they are remembered.
- **Upgrade a claim**: replace a secondhand statement with the primary document it was summarising, before relying on it.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
Sippel, J. (1972, August 26). "Soul Train's" 45-mkt. $1 mil backing. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1972/BB-1972-08-26.pdf
Wankoff, J. (n.d.). Cornelius, Don 1936-. In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cornelius-don-1936`,
    },
    {
      slug: "firsts-that-sound-alike",
      title: "3 · Firsts that sound alike and are not the same claim",
      section: "Section 1 · A show as a business",
      body: `Soul Train and its sponsor attract superlatives. Almost every one of them is true of something, and almost none of them mean what the next one means. Put them side by side and the differences become the lesson.

| The claim, in its source's own wording | Who makes it |
|---|---|
| "the first Black-owned company listed on the American Stock Exchange" | NBC News, 2026; *Time*, 1980 |
| "what was said to be the first Black-owned company listed on a major American stock exchange" | *The New York Times*, 2026 |
| "the first Black-controlled company to sponsor a national television program" | *The New York Times*, 2026 |
| "the first nationally syndicated program sponsored by a black company" | *Black Enterprise*, 2017 |
| Cornelius "owned Soul Train, making him the first black owner of a nationally syndicated TV show" | NPR, 2012 |
| "the first black-oriented music variety show ever offered on American television" | *Encyclopedia of Television* |
| "the first Black show in American TV history to air in syndication" | *Block Club Chicago*, 2025 |

Read the qualifiers. *Listed on the American Stock Exchange* is narrower than *listed on a major American stock exchange*, and both are narrower than what the sponsor himself claims. In his memoir George E. Johnson separates two different events: a first public trading of the company's shares on 10 December 1969, and the American Stock Exchange listing in January 1971 (Johnson & Beard, 2025). If he is right, a source that says "first listed on the Amex" and a source that says "first publicly traded" are describing two different days more than a year apart, and neither is contradicting the other.

Do the same with the show. *Sponsor* is not *owner*. *Offered on American television* is not *aired in syndication*. And notice the hedge in the *Times* line: "what was said to be". That is a reporter declining to certify a claim while still reporting that people make it. It is the most honest sentence in the table.

**Why this matters to a business course.** A superlative is a marketing asset. It gets repeated because it is useful, and each repetition tends to drop a qualifier, because the shorter version is easier to say. Watch that happen across the rows above and you will recognise it everywhere else in this course, including in the claim that a basketball star bought Soul Train in 2011, which section 7 takes apart.

**What this course does.** It never prints a superlative bare. It prints the claim in the wording of whoever makes it, and names them in the same sentence.

:::reveal What is the difference between the claim "first Black-owned company listed on the American Stock Exchange" and "first Black-owned company publicly traded in the United States"? ||| They can describe two different events. The sponsor's memoir dates a first public trading to 10 December 1969 and the American Stock Exchange listing to January 1971, so a source using one wording is not necessarily contradicting a source using the other.

:::reveal What is a newspaper doing when it writes "what was said to be the first"? ||| Reporting that people make the claim while declining to certify it as established fact.

## Vocabulary
- **Qualifier**: the limiting words inside a claim, such as *American Stock Exchange* or *nationally syndicated*, that decide how much the claim actually asserts.
- **Superlative**: a first, biggest or longest claim.
- **Hedge**: wording such as *what was said to be* that reports a claim without endorsing it.
- **Scope**: the exact set of things a claim covers, which is what two similar-sounding firsts usually differ on.

## Sources
Business: Black beauty. (1980, April 28). *Time*. https://time.com/archive/6857938/business-black-beauty/
Hershey, R. D., Jr. (2026, July 7). George E. Johnson, who built a Black hair care empire, dies at 99. *The New York Times* [Republished by *The Philadelphia Inquirer*]. https://www.inquirer.com/obituaries/obit-george-johson-20260707.html
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
McKinney, J. (2017, December 28). 45 great moments in Black business, No. 18. *Black Enterprise*. https://www.blackenterprise.com/45-great-moments-in-black-business-no-18-johnson-products-controversy-when-company-sold-to-whites/
Reed, A. (2025, February 28). The birth of Afro Sheen. *Block Club Chicago*. https://blockclubchicago.org/2025/02/28/the-birth-of-afro-sheen-how-chicagos-george-e-johnson-changed-the-black-hair-game-forever/
Shelton, M. (n.d.). Soul Train. In *Encyclopedia of Television*. Museum of Broadcast Communications. http://www.museum.tv/eotv/soultrain.htm
Yenigun, S. (2012, February 1). Soul Train creator Don Cornelius dies at 75. NPR. https://www.npr.org/sections/therecord/2012/02/01/146199087/soul-train-creator-don-cornelius-dies-at-75`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · A show as a business",
      section: "Section 1 · A show as a business",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course ask about Soul Train instead of asking about the music?",
            options: [
              "Who paid and who owned it",
              "Which performances drew the largest studio audience during the show's first two seasons",
              "How the dance steps spread from Chicago to the rest of the country after 1971",
              "Which records climbed the charts fastest in the weeks after an artist appeared",
            ],
            correctIndex: 0,
            explanation:
              "The course asks who paid for the first tape, who owned the show, who sold its advertising time, and who was still owed something after it was sold.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "On what date did Soul Train begin its national run?",
            options: [
              "2 October 1971",
              "17 August 1970, the date the local Chicago edition first went out over channel 26",
              "10 March 1973, the Saturday the competing network programme first went to air",
              "25 March 2006, the date the programme's last national episode was distributed",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 Billboard special section, the Encyclopedia of Television and the Contemporary Black Biography entry all give 2 October 1971 for the national start.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What kind of station carried the show first in Chicago?",
            options: [
              "An ultra high frequency station",
              "A network owned and operated station that cleared the programme for the whole Midwest",
              "A very high frequency station whose signal reached every county in northern Illinois",
              "A public television station licensed to a Chicago university and funded by subscribers",
            ],
            correctIndex: 0,
            explanation:
              "Channel 26, WCIU, was an ultra high frequency station attempting programming for particular communities. Its signal did not cover the whole market.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "Roughly how many markets did the show reach by 1974, according to the 1974 Billboard special section?",
            options: [
              "About 100",
              "About seven, the same cities that carried the programme on its first national broadcast",
              "About 25, the target list the syndicator drew up before the national launch began",
              "About 200, a figure the sponsor's own memoir gives for the programme's eventual reach",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section gives about 100 markets. Seven and 25 belong to 1971, and 200 is the memoir's later figure, which section 3 sets beside this one.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "Until what year did Don Cornelius host Soul Train, according to Variety?",
            options: [
              "1993",
              "1971, after which the programme moved to Los Angeles and used a rotating series of hosts",
              "2006, the same year the programme stopped producing new national episodes entirely",
              "2008, the year he sold the brand, the production rights and the archival footage",
            ],
            correctIndex: 0,
            explanation:
              "Variety's 2016 report on the sale says Cornelius was the on-air host until 1993, thirteen years before the programme itself ended.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "Until what year did Soul Train stay on the air, according to Variety?",
            options: [
              "2006",
              "1993, the last year its creator appeared on camera as the programme's host",
              "2016, when a division of a large media company bought the brand and the library",
              "1985, when a new distributor took over the syndication of the programme",
            ],
            correctIndex: 0,
            explanation:
              "Variety gives 2006 for the end of the run. 1993 is when Cornelius stopped hosting, and 2016 is the year of the BET purchase.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What did Don Cornelius sell in 2008?",
            options: [
              "The brand, the rights and the library",
              "Only the right to use the programme's name on live events and consumer products",
              "Only the unaired footage, keeping every episode that had already been broadcast",
              "A minority stake in his production company, keeping control of the programme itself",
            ],
            correctIndex: 0,
            explanation:
              "The 2008 report describes the sale of the brand, the production rights for the weekly series, and a catalogue of about 1,100 hours of archival footage.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "Which company was Soul Train's national sponsor from 1971?",
            options: [
              "Johnson Products Company",
              "Johnson Publishing Company, the Chicago firm that published Ebony and Jet magazines",
              "Sears, Roebuck, which had backed the programme's first local run out of Chicago",
              "Black Entertainment Television, whose parent company later bought the franchise",
            ],
            correctIndex: 0,
            explanation:
              "Johnson Products, George E. Johnson's Chicago hair-care company, was the national sponsor. Johnson Publishing is a different firm run by an unrelated man.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What did John H. Johnson's company publish?",
            options: [
              "Ebony and Jet",
              "Black Enterprise, the business monthly that ranked the largest Black-owned firms",
              "Essence, the magazine for Black women founded in New York at the end of the 1960s",
              "Billboard, the weekly trade paper of the American record and broadcasting business",
            ],
            correctIndex: 0,
            explanation:
              "Johnson Publishing Company published Ebony and Jet. The sponsor, a different and unrelated Johnson, bought print advertising in them.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What is Robert L. Johnson's connection to this story?",
            options: [
              "He co-founded BET",
              "He introduced Johnson Products to the programme through his Chicago advertising agency",
              "He was the merchandise manager who committed Sears money to the first local run",
              "He published the magazines in which the sponsor ran its print advertising campaigns",
            ],
            correctIndex: 0,
            explanation:
              "He co-founded Black Entertainment Television, whose parent company bought the Soul Train franchise in 2016. He is not related to either other Johnson here.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What family relationship links George E. Johnson, John H. Johnson and Robert L. Johnson?",
            options: [
              "None",
              "They were brothers who divided a single Chicago business empire between them",
              "George and John were cousins, and Robert married into the same Chicago family",
              "John was George's father-in-law, which is how the sponsorship was first arranged",
            ],
            correctIndex: 0,
            explanation:
              "None of the three are related. The New York Times obituary of George E. Johnson says so in a parenthesis, because readers keep assuming otherwise.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "Why does the New York Times obituary of George E. Johnson stop to name the other two Johnsons?",
            options: [
              "Readers keep confusing them",
              "Because the three companies had signed a joint marketing agreement the obituary describes",
              "Because a court had ordered the paper to print a correction about the three firms",
              "Because the three men had shared a board seat at the same Chicago bank for decades",
            ],
            correctIndex: 0,
            explanation:
              "A newspaper does not print a parenthesis distinguishing three unrelated men unless people keep getting it wrong.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "Which two Johnson Products brands does this lesson name?",
            options: [
              "Ultra Sheen and Afro Sheen",
              "Ebony and Jet, the two magazines the company was best known for publishing",
              "Gentle Treatment and Creme of Nature, the two relaxers its rivals sold against it",
              "Fashion Fair and Ebony Fashion Fair, the cosmetics and fashion lines of the same era",
            ],
            correctIndex: 0,
            explanation:
              "Ultra Sheen and Afro Sheen were Johnson Products brands. Ebony and Jet are magazines, and Fashion Fair belonged to the unrelated Johnson Publishing Company.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What did the sponsor buy in Ebony and Jet?",
            options: [
              "Print advertising",
              "A controlling interest in the publisher, which it held until the middle of the 1970s",
              "The rights to reprint its own television commercials as photographic picture stories",
              "Exclusive distribution of both magazines through its network of barbershop accounts",
            ],
            correctIndex: 0,
            explanation:
              "Johnson Products bought print advertising space in Johnson Publishing's magazines. The two companies were separate and unrelated.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What footage, advertisements or photographs from Soul Train does this course reproduce?",
            options: [
              "None",
              "Only the opening title sequence, which the course argues has passed into the public domain",
              "Every Afro Sheen commercial named in the lessons, reproduced under an educational licence",
              "A selection of studio photographs, reprinted with the permission of the current rights holder",
            ],
            correctIndex: 0,
            explanation:
              "The course describes and links, and reproduces no clip, advertisement or photograph, because all of them belong to somebody.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "Why does the course link to free scans instead of reprinting the trade pages?",
            options: [
              "The pages belong to somebody",
              "Because the scans are higher resolution than anything the course could typeset itself",
              "Because the archive that hosts them forbids any quotation of their contents at all",
              "Because the original print runs were destroyed and only the scans now survive",
            ],
            correctIndex: 0,
            explanation:
              "The pages are someone's copyright. The course quotes short passages for comment and links to the free scans so a learner can read the same page.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "In this course's vocabulary, what is a sponsor?",
            options: [
              "A buyer of a show's advertising time",
              "A station that agrees to carry a syndicated programme in its own local market",
              "A company that produces a programme and then sells it to individual stations",
              "An agency that books talent for a programme and takes a commission on each booking",
            ],
            correctIndex: 0,
            explanation:
              "A sponsor pays for the advertising time inside a programme, sometimes all of it, in exchange for its commercials running there.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What is syndication, as this course defines it?",
            options: [
              "Selling a show station by station",
              "Selling a programme to one of the three national networks for a fixed licence fee",
              "Pooling the advertising budgets of several sponsors to pay for a single programme",
              "Licensing a programme's format abroad so local producers can remake it themselves",
            ],
            correctIndex: 0,
            explanation:
              "Syndication means selling a programme to individual stations, market by market, rather than to a national network.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What does this course mean by a programme's library?",
            options: [
              "The recorded episodes, owned as property",
              "The music publishing rights to every song performed on the programme over its run",
              "The reference books and clippings a production company keeps for research purposes",
              "The list of stations that have ever carried the programme in any market",
            ],
            correctIndex: 0,
            explanation:
              "The library is the recorded episodes held as property. It is sold with the brand, which is why the 2008 and 2016 deals both describe it.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What is a trade paper?",
            options: [
              "A weekly published for an industry",
              "A newspaper section carrying the stock tables and company results for general readers",
              "A magazine produced by a company about itself and mailed free to its own customers",
              "A government bulletin recording licences, permits and regulatory filings each week",
            ],
            correctIndex: 0,
            explanation:
              "A trade paper is published for an industry rather than for the public, such as Billboard for the record business or Broadcasting for television.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "Which document from 2024 does this lesson say is still open?",
            options: [
              "A federal complaint",
              "A Federal Trade Commission consent order against the programme's original sponsor",
              "An appeal filed by the sponsor against a labelling requirement on its relaxer products",
              "A licensing agreement between the current owner and the stations that still carry reruns",
            ],
            correctIndex: 0,
            explanation:
              "A complaint filed in federal court in 2024 over the programme's spoken opening is still open. Section 7 teaches it as allegations in an unresolved case.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "How many kinds of source does this course distinguish?",
            options: [
              "Three",
              "Two, dividing everything into primary documents and unreliable secondary retellings",
              "Five, one for each decade of the programme's history from the 1970s to the 2010s",
              "Four, adding oral history to the document, the participant account and the reference work",
            ],
            correctIndex: 0,
            explanation:
              "Three: the contemporaneous document, the participant's own account, and the reference work that summarises other people's reporting.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What is a contemporaneous document?",
            options: [
              "A page printed at the time",
              "A page printed by someone who took part in the events and signed their name to it",
              "An encyclopedia entry written close enough to the events to still be reliable",
              "Any document held by an archive rather than by one of the people involved",
            ],
            correctIndex: 0,
            explanation:
              "It is a page printed while the thing was happening, by somebody with no stake in how it would later be remembered.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What does this lesson say a contemporaneous document cannot do?",
            options: [
              "Shape a future it has not seen",
              "Contain an error, since anything printed at the time was checked before publication",
              "Report a rumour, since trade papers of the period printed only confirmed information",
              "Disagree with another paper printed in the same month about the same events",
            ],
            correctIndex: 0,
            explanation:
              "Such a document can certainly be wrong, but it cannot be wrong on purpose about a future it has not seen yet. Two trade papers can and did disagree.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What do the credits of the 1974 Billboard special section say it was produced in?",
            options: [
              "Coordination with Don Cornelius Productions",
              "Consultation with the three national networks that had declined to carry the programme",
              "Partnership with the Federal Trade Commission, which supplied the regulatory material",
              "Association with the syndicator that sold the programme to stations that year",
            ],
            correctIndex: 0,
            explanation:
              "Its credits read \"Coordination with Don Cornelius Productions\", which is what makes it his account rather than independent reporting.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What surrounds the text of the 1974 Billboard special section?",
            options: [
              "Paid congratulatory advertisements",
              "Unsold house advertisements the magazine ran to fill the pages of a thin issue",
              "Classified listings from stations looking to buy syndicated programming that season",
              "A reprint of the Federal Communications Commission's rules on syndicated programming",
            ],
            correctIndex: 0,
            explanation:
              "The pages around the text carry paid congratulatory advertisements from record labels and business partners, which is part of why it is a tribute rather than reporting.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "How should a reader treat the 1974 Billboard special section?",
            options: [
              "As Cornelius's own account",
              "As the most independent reporting available on the programme's first three years",
              "As a government record, since trade papers filed their contents with regulators",
              "As worthless, since a page paid for by a subject can contain nothing checkable",
            ],
            correctIndex: 0,
            explanation:
              "It is valuable because it contains Cornelius describing his own deals in his own words. It is not independent, and the course labels it every time it is used.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "Who published a 2025 memoir used as a source in this course?",
            options: [
              "George E. Johnson",
              "Don Cornelius, whose manuscript was completed by a collaborator after his death",
              "Dick Griffey, the programme's talent coordinator and its creator's business partner",
              "Robert L. Johnson, writing about the founding of Black Entertainment Television",
            ],
            correctIndex: 0,
            explanation:
              "George E. Johnson, the sponsor, published his memoir with a collaborator in 2025. It is the only first-person account of how the sponsor's side of the deal was made.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "How long after the sponsorship began was the sponsor's memoir published?",
            options: [
              "Fifty-four years",
              "Five years, which is why the lesson treats it as close to a contemporaneous record",
              "Twenty years, placing it midway between the events and the present day",
              "Eighty years, which is why it survives only as a manuscript rather than a printed book",
            ],
            correctIndex: 0,
            explanation:
              "The sponsorship began in 1971 and the memoir appeared in 2025, fifty-four years later. That distance is why the course checks it against documents.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What is the sponsor's memoir uniquely good for in this course?",
            options: [
              "His first-person account of the deal",
              "Establishing the exact dates of every filing in the company's regulatory history",
              "Settling the disagreements between the two trade papers that covered the 1973 rival",
              "Providing an independent check on what the 1974 Billboard special section says",
            ],
            correctIndex: 0,
            explanation:
              "It is the only first-person account of how the sponsor's side of the deal was made. It is a recollection, so it is checked against documents, not used to settle them.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What is a reference work, in this lesson's taxonomy?",
            options: [
              "A summary of other people's reporting",
              "A document created at the time of the events by an institution rather than a person",
              "A first-person account written under oath and filed with a court or a regulator",
              "A collection of primary documents reprinted in full with an editor's introduction",
            ],
            correctIndex: 0,
            explanation:
              "A reference work is an encyclopedia entry that summarises other people's reporting, which is why its own errors travel into everything that quotes it.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What is a reference work good for, according to this lesson?",
            options: [
              "A chronology",
              "A quotation, since its editors check wording more carefully than a newspaper does",
              "A financial figure, since its sources are company filings rather than press reports",
              "A settled judgment about cause, since its authors have read everything on the subject",
            ],
            correctIndex: 0,
            explanation:
              "Useful for a chronology, dangerous for a detail. Dates and sequence survive summarising better than exact figures and quotations do.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What is a reference work dangerous for?",
            options: [
              "A detail",
              "A chronology, since compilers often reverse the order in which events actually happened",
              "A list of names, since encyclopedias omit anyone who did not become famous later",
              "A definition, since its editors write for specialists rather than for general readers",
            ],
            correctIndex: 0,
            explanation:
              "Its own errors travel. The Contemporary Black Biography entry on Cornelius carries at least three of them into everything that repeats it.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What is one documented error in the Contemporary Black Biography entry on Don Cornelius?",
            options: [
              "It puts a singer in the wrong group",
              "It gives the wrong date for the programme's first national broadcast in October 1971",
              "It names the wrong company as the programme's national sponsor from 1971 onward",
              "It reverses the roles of the creator and the sponsor in the founding of the show",
            ],
            correctIndex: 0,
            explanation:
              "It places a singer in the wrong group, gives two different years for the Soul Train Music Awards, and cites a Billboard issue by the wrong date.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What does the Contemporary Black Biography entry do with the year of the Soul Train Music Awards?",
            options: [
              "It gives two different years",
              "It omits the awards entirely, which is why later accounts disagree about their origin",
              "It dates them to the same year as the programme's national launch in October 1971",
              "It credits their creation to the syndicator rather than to the programme's creator",
            ],
            correctIndex: 0,
            explanation:
              "The entry says 1986 in its text and 1987 in its own summary, an internal disagreement inside a single article.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What is wrong with the Contemporary Black Biography entry's citation of Billboard?",
            options: [
              "The issue date is wrong",
              "It cites a magazine that had ceased publication years before the issue it names",
              "It attributes the article to the wrong reporter, who worked for a rival weekly",
              "It gives a page number from a different year's special section on the same subject",
            ],
            correctIndex: 0,
            explanation:
              "It cites Billboard of 24 August 1972 for material that appeared in the issue of 26 August 1972.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "Do the errors found in the Contemporary Black Biography entry make it useless?",
            options: [
              "No",
              "Yes, because a reference work with three known errors cannot be trusted on anything",
              "Yes, because encyclopedias are secondary sources and this course uses only primary ones",
              "Yes, because its publisher withdrew the entry once the errors were discovered",
            ],
            correctIndex: 0,
            explanation:
              "It makes it a source you upgrade before asserting anything from it. The course still uses it for chronology and names it every time.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What does it mean to upgrade a claim?",
            options: [
              "Go to the primary document",
              "Find a second secondary source that repeats the same claim in the same wording",
              "Raise its confidence level after it has been repeated by enough separate outlets",
              "Rewrite it in stronger language once you are satisfied that it is probably true",
            ],
            correctIndex: 0,
            explanation:
              "Upgrading means replacing a secondhand statement with the primary document it was summarising, before relying on it.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What does this course do when a participant's memory of a court case and the court's opinion disagree?",
            options: [
              "Prints both and names each",
              "Prefers the memory, since the participant was in the room and the court was not",
              "Prefers the court and leaves the participant's version out of the lesson entirely",
              "Averages the two accounts into a single version that neither source would object to",
            ],
            correctIndex: 0,
            explanation:
              "The course prints both and says which kind of source each is. A participant's memory of a case does not outrank the court's own published opinion.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What does the course do when two trade papers printed different facts in the same month?",
            options: [
              "Prints both",
              "Chooses the paper with the larger circulation and drops the other account",
              "Treats the disagreement as proof that neither report can be used at all",
              "Waits for a reference work to decide which of the two was correct",
            ],
            correctIndex: 0,
            explanation:
              "A contemporaneous trade paper is still somebody's reporting. Section 6 prints both versions of what the 1973 network rival was and who produced it.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "Why does this course label a participant account every time it uses one?",
            options: [
              "The teller has a stake in the telling",
              "Because participant accounts are legally required to carry an attribution when quoted",
              "Because they are always less accurate than any encyclopedia entry on the same events",
              "Because the course only uses participant accounts for material no document covers",
            ],
            correctIndex: 0,
            explanation:
              "A participant describes events they took part in and has an interest in how they are remembered. Labelling it lets a reader weigh it for themselves.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "Which source hedges its first claim with the words \"what was said to be\"?",
            options: [
              "The New York Times",
              "NBC News, in its obituary of the sponsor published in the same month",
              "Time magazine, in its 1980 article on the company's falling market share",
              "Black Enterprise, in its list of great moments in Black business",
            ],
            correctIndex: 0,
            explanation:
              "The New York Times writes \"what was said to be the first Black-owned company listed on a major American stock exchange\", reporting the claim without certifying it.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "What does a hedge such as \"what was said to be\" accomplish?",
            options: [
              "Reports a claim without certifying it",
              "Signals that the writer has checked the claim and found it to be accurate",
              "Marks the claim as a direct quotation from a named person rather than a paraphrase",
              "Indicates that the claim was disputed in court and later withdrawn by its maker",
            ],
            correctIndex: 0,
            explanation:
              "It reports that people make the claim while declining to certify it, which this lesson calls the most honest sentence in the table.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Which two dates does the sponsor's memoir separate?",
            options: [
              "1969 and 1971",
              "1954 and 1957, the founding of the company and the launch of its second brand",
              "1971 and 1972, the national launch of the show and the sponsor's second share offering",
              "1975 and 1977, the consent agreement and the federal appeals court's decision",
            ],
            correctIndex: 0,
            explanation:
              "The memoir dates a first public trading of the company's shares to 10 December 1969 and the American Stock Exchange listing to January 1971.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "What does the sponsor's memoir date to 10 December 1969?",
            options: [
              "A first public trading of its shares",
              "The listing of the company's shares on the American Stock Exchange in New York",
              "The first broadcast of the company's hour-long television variety special",
              "The day the company first bought advertising time inside a national programme",
            ],
            correctIndex: 0,
            explanation:
              "The memoir puts the first public trading on 10 December 1969 and keeps the American Stock Exchange listing as a separate event in January 1971.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "What does the sponsor's memoir date to January 1971?",
            options: [
              "The American Stock Exchange listing",
              "The first public trading of the company's shares to outside investors",
              "The first broadcast of Soul Train as a nationally syndicated programme",
              "The introduction of Afro Sheen as a brand separate from Ultra Sheen",
            ],
            correctIndex: 0,
            explanation:
              "January 1971 is the American Stock Exchange listing, which the New York Times, NBC News and Time also date to that month.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "If the memoir is right about those two dates, what follows for the competing first claims?",
            options: [
              "Both can be true at once",
              "One of them must be false, since only one company can hold a given first",
              "Neither can be checked, since no document records either of the two events",
              "The earlier claim cancels the later one, which is why the 1971 date is usually dropped",
            ],
            correctIndex: 0,
            explanation:
              "A source saying \"first listed on the Amex\" and one saying \"first publicly traded\" would then be describing two different days more than a year apart.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Which wording is narrower, \"listed on the American Stock Exchange\" or \"listed on a major American stock exchange\"?",
            options: [
              "The American Stock Exchange wording",
              "The major American stock exchange wording, because it specifies the size of the exchange",
              "Neither, because the American Stock Exchange was the only major exchange in 1971",
              "Both are equally narrow, since the two phrases describe exactly the same event",
            ],
            correctIndex: 0,
            explanation:
              "Naming one exchange is narrower than naming a class of exchanges. Reading the qualifiers is what separates claims that sound alike.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Which source calls the sponsor \"the first Black-controlled company to sponsor a national television program\"?",
            options: [
              "The New York Times",
              "NPR, in its report on the death of the programme's creator in February 2012",
              "The Encyclopedia of Television, in its entry on the programme itself",
              "Block Club Chicago, in its 2025 article on the origins of Afro Sheen",
            ],
            correctIndex: 0,
            explanation:
              "That is the New York Times obituary's wording. Each row of the lesson's table belongs to a different source and asserts a different thing.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Which source says Cornelius was \"the first black owner of a nationally syndicated TV show\"?",
            options: [
              "NPR",
              "The New York Times, in the obituary of the programme's national sponsor",
              "Time magazine, in its 1980 article on the sponsor's falling market share",
              "Music Business Worldwide, in its report on the 2016 sale of the franchise",
            ],
            correctIndex: 0,
            explanation:
              "NPR's 2012 report makes that claim. Note that it is a claim about ownership, which is a different assertion from any of the sponsorship firsts.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Which source calls Soul Train \"the first black-oriented music variety show ever offered on American television\"?",
            options: [
              "The Encyclopedia of Television",
              "NPR, in the report it published on the day of the creator's death",
              "Black Enterprise, in its article on the 1993 sale of the sponsor's company",
              "Variety, in its report of the franchise purchase announced in April 2016",
            ],
            correctIndex: 0,
            explanation:
              "That is the Encyclopedia of Television's wording. \"Offered on American television\" is a different claim from \"aired in syndication\".",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Which source uses the wording \"the first Black show in American TV history to air in syndication\"?",
            options: [
              "Block Club Chicago",
              "The Encyclopedia of Television, in its survey entry on the programme",
              "The New York Times, in its 2026 obituary of the programme's national sponsor",
              "Time magazine, in its 1980 report on the Black hair-care business",
            ],
            correctIndex: 0,
            explanation:
              "Block Club Chicago's 2025 article uses that wording, which scopes the claim to syndication rather than to television generally.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Which source uses the wording \"the first nationally syndicated program sponsored by a black company\"?",
            options: [
              "Black Enterprise",
              "NPR, in its 2012 report on the death of the programme's creator",
              "The Encyclopedia of Television, in its entry on first-run syndication",
              "The New York Times, in its obituary of the sponsor published in July 2026",
            ],
            correctIndex: 0,
            explanation:
              "Black Enterprise uses that wording in its 2017 article. It is a sponsorship claim, not an ownership claim.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "What is a qualifier?",
            options: [
              "The limiting words inside a claim",
              "The name of the person or publication that first put a claim into print",
              "The evidence a source offers in support of a claim it has just made",
              "A second claim added to make the first one sound more impressive",
            ],
            correctIndex: 0,
            explanation:
              "Words such as \"American Stock Exchange\" or \"nationally syndicated\" decide how much a claim actually asserts, which is what separates two similar firsts.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Why does a superlative get repeated, according to this lesson?",
            options: [
              "It is a marketing asset",
              "Because reference works require one superlative in every biographical entry",
              "Because a first claim is easier to verify than a claim about ordinary events",
              "Because newspapers are obliged to repeat a claim once a company has published it",
            ],
            correctIndex: 0,
            explanation:
              "A first is useful to whoever it flatters, so it travels. That is why the course prints one only in the wording of whoever makes it.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "What tends to happen to a superlative each time it is repeated?",
            options: [
              "It loses a qualifier",
              "It gains a citation, since each repetition adds the name of a new source",
              "It is narrowed, because each repeater adds a limitation the last one omitted",
              "It is checked, because a claim cannot be repeated without first being verified",
            ],
            correctIndex: 0,
            explanation:
              "The shorter version is easier to say, so each repetition tends to drop a limiting word until a narrow claim has become a broad one.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Is a claim about being the first sponsor the same claim as being the first owner?",
            options: [
              "No",
              "Yes, because a sponsor that funds a programme owns it under broadcasting practice",
              "Yes, because both claims in the lesson's table are made by the same publication",
              "Yes, because the sponsor and the creator described themselves in the same terms",
            ],
            correctIndex: 0,
            explanation:
              "Sponsoring is buying advertising time. Owning is holding the programme as property. The table's rows deliberately mix the two.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Is \"offered on American television\" the same claim as \"aired in syndication\"?",
            options: [
              "No",
              "Yes, because in 1971 no programme could be offered nationally except by syndication",
              "Yes, because both phrases come from the same encyclopedia entry on the programme",
              "Yes, because the two phrases were introduced in the same year by the same reporter",
            ],
            correctIndex: 0,
            explanation:
              "One claim is about being offered to television at all, the other about the route it took to air. They come from different sources and cover different sets.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "What does this course never do with a superlative?",
            options: [
              "Print it bare",
              "Quote it, since any first claim is unverifiable and therefore unusable in a lesson",
              "Compare it to another source's wording, since that would confuse a learner",
              "Include it in an assessment, since a claim about a first cannot be graded",
            ],
            correctIndex: 0,
            explanation:
              "It prints the claim in the wording of whoever makes it and names them in the same sentence, so the qualifier and its owner travel together.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "What is scope, in this lesson's vocabulary?",
            options: [
              "The exact set a claim covers",
              "The number of separate sources that have repeated the same claim over time",
              "The geographic area a television signal reaches from a single transmitter",
              "The range of years over which a company held a particular market position",
            ],
            correctIndex: 0,
            explanation:
              "Scope is what two similar-sounding firsts usually differ on, and reading it is how you tell them apart instead of treating them as one claim.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Which later claim does this lesson say a later section takes apart?",
            options: [
              "That Magic Johnson bought Soul Train",
              "That the programme was the longest-running syndicated show in television history",
              "That the sponsor's hair relaxer was the first to carry a warning about its ingredients",
              "That the network rival of 1973 was cancelled after a public protest to its broadcaster",
            ],
            correctIndex: 0,
            explanation:
              "The 2011 story that a basketball star bought Soul Train describes an investment in the parent company, not a sale of the show. Section 7 works through it.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Launching local
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "wvon-to-wciu",
      title: "4 · A radio announcer and a station with spare time",
      section: "Section 2 · Launching local",
      body: `Don Cornelius came to television from radio. He worked at WVON in Chicago, a station whose call letters stood for the Voice of the Negro, and the sources give the year as either 1966 or 1967 (Shelton, n.d.; Wankoff, n.d.; Chapman, 1974). The course says the middle of the 1960s in prose and gives whichever year it is quoting when it quotes.

**The man who opened the door.** Roy Wood was Cornelius's superior and mentor at the radio station. Wood moved to WCIU-TV, and Cornelius began moonlighting for him there (Wankoff, n.d.). That is the whole mechanism of the first break, and it is worth naming plainly: a colleague changed employers and took a relationship with him.

**Why channel 26 could say yes.** WCIU-TV was an ultra high frequency station in Chicago attempting programming aimed at particular communities (Shelton, n.d.). Three facts about a station like that in 1970 explain everything that follows.

| Fact about a UHF station | What it meant for a new programme |
|---|---|
| A weaker signal than the established very high frequency stations | Fewer viewers, so less revenue, so less to lose on an unproven idea |
| Fewer network obligations | Hours of the schedule genuinely open, not merely theoretically open |
| A deliberate appeal to particular audiences | A programme aimed at Black Chicago fitted the station's plan, not just its gaps |

The sponsor's memoir describes what that looked like on screen. George E. Johnson writes that the programme was taped once a week, aired locally in black and white on the old ultra high frequency band, and that the signal was weak and did not cover the whole market (Johnson & Beard, 2025).

**The business point.** A new programme has to be cheap for somebody to risk it. The cheapest thing a station can give away is an hour nobody is paying for, and the cheapest thing a producer can give is his own labour. Both of those are about to happen at once.

**What a viewer never sees.** None of this is in the show. A learner watching an episode from 1970 sees dancers. A learner reading the station's position sees a company with unsold inventory taking a low-risk bet on a man who came recommended by an employee it had just hired. Both descriptions are true, and only one of them explains why the programme existed.

:::reveal How did Don Cornelius get his first television opening at WCIU? ||| His superior and mentor at WVON radio, Roy Wood, moved to the television station, and Cornelius began moonlighting for him there.

:::reveal Why could an ultra high frequency station afford to take a chance on an unproven programme in 1970? ||| Its weaker signal meant less revenue and so less to lose, it had fewer network obligations and genuinely open hours, and a programme aimed at Black Chicago fitted its stated plan.

## Vocabulary
- **Ultra high frequency**: the higher band of television channels, which in 1970 reached fewer homes than the older very high frequency channels.
- **Moonlighting**: working a second job outside the hours of the first.
- **Inventory**: in broadcasting, the advertising time a station has to sell; unsold inventory is time earning nothing.
- **Clearance**: a station's agreement to carry a programme, which a syndicated show needs one market at a time.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
Shelton, M. (n.d.). Soul Train. In *Encyclopedia of Television*. Museum of Broadcast Communications. http://www.museum.tv/eotv/soultrain.htm
Wankoff, J. (n.d.). Cornelius, Don 1936-. In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cornelius-don-1936`,
    },
    {
      slug: "who-paid-for-the-pilot",
      title: "5 · Own money or Sears money, and why the answer is both",
      section: "Section 2 · Launching local",
      body: `A common retelling says Cornelius funded Soul Train himself. Another says Sears funded it. Both circulate, they sound like rival claims, and the documents show they are two parts of one arrangement.

**What the station gave.** The *Encyclopedia of Television* records that WCIU agreed to Cornelius producing the pilot at his own expense in exchange for studio space (Shelton, n.d.). Read that as a trade: he supplied the money, the station supplied the room and the equipment, and neither paid the other in cash.

**What Sears gave.** In the 1974 *Billboard* section, Cornelius describes George O'Hare, a merchandise manager for a group of five Sears stores all located in Chicago's inner city, making what the section calls "a small commitment ... (which amounted to only a fraction of the actual cost to air the show)" (Chapman, 1974). The *Encyclopedia of Television* adds what Sears bought the time for: to advertise phonographs (Shelton, n.d.). Remember that this description of Sears is Cornelius's own account in a tribute section, though the fraction detail is the kind of number a tribute has no reason to shrink.

**What Cornelius gave after that.** The same section records that he was the unsalaried host, producer and salesman of the programme for ten weeks (Chapman, 1974). Working without a salary is a form of financing. It is the founder lending the company his own wages without writing it down as a loan.

**Who else bought local time.** The *Contemporary Black Biography* entry names Wate-On, Joe Louis Milk and Coca-Cola as local sponsors that joined Sears in Chicago (Wankoff, n.d.). That is a reference work, so treat the list as a starting point rather than a settled roster.

**So the answer is both, and the shape of it matters.** Put the pieces in a row and you get a picture that neither retelling gives you on its own.

| Who | What they supplied | Did it cover the cost? |
|---|---|---|
| Cornelius | The pilot's expenses, then ten weeks of unpaid labour | No |
| WCIU-TV | Studio space and equipment, in trade | No |
| Sears, through George O'Hare | A small advertising commitment | Only a fraction of it |
| Local advertisers | Further time purchases | Not stated in these sources |

**The lesson to carry forward.** A sponsor who covers a fraction of a cost is still the difference between airing and not airing, because nobody else was covering any of it. Section 3 shows the same pattern at national scale, with a much larger cheque and the same underlying structure: the money that matters is the money that arrives when nothing else will.

:::reveal What did WCIU give Cornelius in exchange for him producing the pilot at his own expense? ||| Studio space, in a trade where he supplied the money and the station supplied the room and the equipment, with no cash moving between them.

:::reveal How does the 1974 Billboard section describe the size of the Sears commitment? ||| As a small commitment that amounted to only a fraction of the actual cost to air the show.

## Vocabulary
- **Pilot**: a single episode made to show what a programme would be, used to sell it to a station or a sponsor.
- **In kind**: paid in goods or services, such as studio time, rather than in money.
- **Unsalaried labour as financing**: a founder working unpaid, which funds the business out of wages that are never recorded as an investment.
- **Local sponsor**: an advertiser buying time in one market only, rather than across a national line-up of stations.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Northern Public Radio. (2021, August 16). *This week in Illinois history: Soul Train premieres*. https://www.northernpublicradio.org/wnij-news/2021-08-16/this-week-in-illinois-history-soul-train-premieres-august-17-1970
Shelton, M. (n.d.). Soul Train. In *Encyclopedia of Television*. Museum of Broadcast Communications. http://www.museum.tv/eotv/soultrain.htm
Wankoff, J. (n.d.). Cornelius, Don 1936-. In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cornelius-don-1936`,
    },
    {
      slug: "a-second-pilot-in-color",
      title: "6 · Two pilots, two payers, and a name that moves",
      section: "Section 2 · Launching local",
      body: `Now put the sponsor's own account beside the record from section 5, because at first reading they appear to contradict each other and they do not.

**What George E. Johnson says happened.** In his 2025 memoir he writes that an account executive at his advertising agency told him about a friend, a disc jockey at WVON who had made a Black dance programme that aired on weekday afternoons on channel 26. The two of them went to the station's studio one Thursday to watch a taping. Johnson says the show was exciting in the room and did not carry that energy on the black and white tape, so he paid for a thirty-minute colour pilot using the same concept and Cornelius as host. After seeing it, he decided that Johnson Products would sponsor the programme (Johnson & Beard, 2025).

**Two different objects.** Section 5's pilot is the one WCIU took in exchange for studio space, made by Cornelius, for a local programme. The pilot in the memoir is a colour half-hour made later, paid for by the sponsor, to test whether the idea would carry nationally. Calling both of them "the pilot" is what makes the accounts look like a fight. They are a year and a purpose apart.

**A name that moves between the versions.** The 1974 *Billboard* section, which is Cornelius's account, says Johnson Products was introduced to the show by its advertising agency, "Niefeld, Paley & Kuhn, since merged with Bozell & Jacobs" (Chapman, 1974). The memoir names the firm differently, as Allen, Anderson, Niefeld & Paley, and names the account executive who made the call as Tom Kuehn (Johnson & Beard, 2025). So a name that stands in the firm's title in one account belongs to an employee in the other. This course does not pick. It prints both and files the question.

**What the sponsor already knew about television.** Johnson had tested it twice before Soul Train. *Billboard* reported in 1972 that he had bankrolled two hour-long specials, which it prints as "And Beautiful (I & II)" (Sippel, 1972). The memoir spells the title differently, dates the first to 1969, gives its cost as more than $300,000, and says the second ran in 25 markets (Johnson & Beard, 2025). Johnson's account of what he learned is the useful part: retailers would not order extra stock ahead of a programme produced by a Black company, shelves emptied when the specials aired, and the sales were lost for want of inventory.

**Why that matters here.** By the time he watched a taping at channel 26 he had already paid twice to learn how television sells product, and how the distribution system around it could quietly refuse him. He was not buying an audience. He was buying a lever on retailers who had already told him no.

:::reveal Why do the two accounts of who paid for a Soul Train pilot not actually contradict each other? ||| They describe two different pilots: the local one Cornelius made at his own expense in exchange for WCIU studio space, and a later colour half-hour the sponsor says he paid for to test the idea nationally.

:::reveal What did George E. Johnson say he learned from the two hour-long specials he financed before Soul Train? ||| That retailers would not order extra stock ahead of a programme produced by a Black company, so the shelves emptied when the specials aired and the sales were lost for want of inventory.

## Vocabulary
- **Account executive**: the person at an advertising agency who manages one client's business and brings the client opportunities.
- **Colour pilot**: a test episode made in colour, which in this story is a separate object from the earlier black and white local pilot.
- **Inventory, in retail**: the stock a shop holds; a programme that creates demand without stock behind it converts into nothing.
- **End cap**: the display at the end of a shop aisle, given to products a retailer expects to sell hard.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
Sippel, J. (1972, August 26). "Soul Train's" 45-mkt. $1 mil backing. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1972/BB-1972-08-26.pdf`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Launching local",
      section: "Section 2 · Launching local",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "At which Chicago radio station did Don Cornelius work before television?",
            options: [
              "WVON",
              "WGCI, the station where the programme's announcer later spent part of his career",
              "WCIU, the ultra high frequency outlet that first carried the local programme",
              "KGFJ, the Los Angeles station whose disc jockey hosted the 1973 network rival",
            ],
            correctIndex: 0,
            explanation:
              "WVON in Chicago. WCIU was the television station, KGFJ was in Los Angeles, and WGCI belongs to a later part of this story.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What did the call letters WVON stand for?",
            options: [
              "The Voice of the Negro",
              "The Voice of the Nation, a name chosen when the station changed owners in the 1960s",
              "Westside Variety and Only News, the format the station carried before it changed hands",
              "The Voice of the North, a reference to the destination of the Great Migration",
            ],
            correctIndex: 0,
            explanation:
              "The call letters stood for the Voice of the Negro, which tells you what audience the station was built to reach.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What year do the sources give for Cornelius joining WVON?",
            options: [
              "1966 or 1967",
              "1970, the same year the local television programme first went to air in Chicago",
              "1971, the year the programme began its national run without a network",
              "1954, the year the company that later sponsored the programme was founded",
            ],
            correctIndex: 0,
            explanation:
              "The sources disagree between 1966 and 1967, so the course says the middle of the 1960s in prose and gives the year of whichever source it is quoting.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "Who was Cornelius's superior and mentor at the radio station?",
            options: [
              "Roy Wood",
              "George O'Hare, the merchandise manager who committed the first advertising money",
              "Dick Griffey, who became the programme's talent coordinator and his business partner",
              "Buster Jones, the disc jockey who went on to host a competing network programme",
            ],
            correctIndex: 0,
            explanation:
              "Roy Wood was his superior and mentor at WVON. O'Hare was at Sears, Griffey came later, and Jones hosted the 1973 rival.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What did Roy Wood do that gave Cornelius his television opening?",
            options: [
              "He moved to the television station",
              "He bought advertising time on the station and insisted Cornelius be given a programme",
              "He sold the station a format he had developed and hired Cornelius to present it",
              "He introduced Cornelius to the hair-care company that became the national sponsor",
            ],
            correctIndex: 0,
            explanation:
              "Wood moved to WCIU-TV and Cornelius began moonlighting for him there. A colleague changed employers and took a relationship with him.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What kind of television station was WCIU-TV?",
            options: [
              "An ultra high frequency station",
              "A network owned and operated station serving the whole of the upper Midwest",
              "A very high frequency station with the strongest signal in the Chicago market",
              "A cable channel available only to subscribers in Chicago's south and west sides",
            ],
            correctIndex: 0,
            explanation:
              "It was an ultra high frequency station attempting programming aimed at particular communities, which is why its schedule had genuinely open hours.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What did a UHF station's weaker signal mean commercially in 1970?",
            options: [
              "Less revenue, so less to lose",
              "Higher advertising rates, because scarcity of reach raised the price of each spot",
              "A guaranteed network payment, which insulated the station from its own ratings",
              "An obligation to carry public affairs programming in place of entertainment",
            ],
            correctIndex: 0,
            explanation:
              "Fewer viewers meant less revenue, and less revenue meant less to lose by risking an unproven idea. That is why a new programme could get on the air there.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What did having fewer network obligations give WCIU?",
            options: [
              "Genuinely open hours",
              "A larger share of the national advertising money spent in the Chicago market",
              "The right to sell its programmes on to stations in other cities",
              "Access to the network film libraries that filled most independent schedules",
            ],
            correctIndex: 0,
            explanation:
              "Hours that were actually open rather than theoretically open. Section 3 shows the opposite problem at national scale, where stations reported no open time periods.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "How did a programme for a Black Chicago audience fit WCIU's position?",
            options: [
              "It matched the station's stated aim",
              "It filled a quota the Federal Communications Commission imposed on the station",
              "It was the only kind of programme the station was licensed to broadcast",
              "It replaced a network programme the station had lost earlier that season",
            ],
            correctIndex: 0,
            explanation:
              "The station was attempting programming aimed at particular communities, so the show fitted its plan rather than merely filling a gap in its schedule.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "How does the sponsor's memoir describe the local programme's signal?",
            options: [
              "Weak, and not covering the market",
              "Strong enough to reach the whole of northern Illinois and part of Indiana",
              "Carried by cable in the neighbourhoods where the audience actually lived",
              "Relayed by a second transmitter that extended it to Chicago's western suburbs",
            ],
            correctIndex: 0,
            explanation:
              "George E. Johnson writes that the signal was weak and did not cover the entire market, which is one reason a national plan needed different stations.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "In what form did the Chicago programme air, according to the sponsor's memoir?",
            options: [
              "Black and white",
              "In colour, taped four episodes at a time on a single weekend each month",
              "Live, with no recording made of any episode from the local Chicago run",
              "On film, which the station shipped to other cities after each Chicago broadcast",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says it was taped once a week and aired locally in black and white. The colour taping in batches belongs to the later national production.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What is the cheapest thing a station can give a new programme?",
            options: [
              "An hour nobody is paying for",
              "A share of the revenue from the advertising it sells during network programmes",
              "A production crew drawn from the staff it already employs for its news operation",
              "A guarantee that the programme will be carried for a full season regardless of ratings",
            ],
            correctIndex: 0,
            explanation:
              "Unsold time costs a station almost nothing to give away, which is why a new idea usually appears in an hour that was earning nothing.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What is the cheapest thing a producer can give a new programme?",
            options: [
              "His own labour",
              "A percentage of the profits the programme has not yet earned",
              "The studio equipment he has bought outright rather than rented",
              "The performers' fees, which a producer can defer until the show is sold",
            ],
            correctIndex: 0,
            explanation:
              "Working unpaid costs no cash. Section 5 shows Cornelius doing exactly that for ten weeks as host, producer and salesman at once.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What is inventory, in broadcasting?",
            options: [
              "The advertising time a station has to sell",
              "The recorded episodes a station keeps in its own film and tape library",
              "The equipment a station owns, counted for tax and insurance purposes",
              "The list of programmes a station has contracted to carry in a coming season",
            ],
            correctIndex: 0,
            explanation:
              "In broadcasting, inventory is time. Unsold inventory is time earning nothing, which is the resource a station can afford to risk.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What is clearance, in this course's vocabulary?",
            options: [
              "A station agreeing to carry a programme",
              "A regulator's approval of a programme's content before it may be broadcast",
              "The settlement of payments between a syndicator and the stations in its line-up",
              "The removal of a programme from a station's schedule at the end of its contract",
            ],
            correctIndex: 0,
            explanation:
              "A syndicated programme needs clearance one market at a time, which is the whole difficulty section 3 describes.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What is moonlighting?",
            options: [
              "Working a second job",
              "Producing a programme overnight when studio rates are at their lowest",
              "Selling advertising time on a station where you are not formally employed",
              "Taking unpaid leave from one employer in order to start a business",
            ],
            correctIndex: 0,
            explanation:
              "Working a second job outside the hours of the first. Cornelius did it at the television station while still working in radio.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What does the station's commercial position explain that watching an episode does not?",
            options: [
              "Why the programme existed at all",
              "Which dances the studio audience performed in any given week of the run",
              "How the programme's music was selected and who chose the performers",
              "Why the programme was recorded in black and white rather than in colour",
            ],
            correctIndex: 0,
            explanation:
              "A viewer sees dancers. A reader of the station's position sees a company with unsold time taking a low-risk bet, which is the reason the show got made.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "In 1970, which band of television channels reached fewer homes?",
            options: [
              "Ultra high frequency",
              "Very high frequency, whose transmitters were restricted to lower power that year",
              "Neither, because by 1970 all receivers tuned both bands equally well",
              "The cable channels, which in 1970 carried only distant network signals",
            ],
            correctIndex: 0,
            explanation:
              "Ultra high frequency stations reached fewer homes than the older very high frequency channels, which is why their time was cheap.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "What did WCIU give Cornelius in exchange for him producing the pilot at his own expense?",
            options: [
              "Studio space",
              "A weekly fee against the advertising it expected to sell during the programme",
              "A guarantee of thirteen weeks on the air regardless of how the pilot performed",
              "The right to sell the programme to stations in other cities once it had proved itself",
            ],
            correctIndex: 0,
            explanation:
              "The Encyclopedia of Television records the trade: his money for the station's room and equipment, with no cash moving in either direction.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Under that trade with WCIU, who paid the pilot's expenses?",
            options: [
              "Cornelius",
              "Sears, through the merchandise manager who later bought advertising time",
              "The station, which recovered the cost from the advertising it sold afterward",
              "Johnson Products, which was already the programme's national sponsor by then",
            ],
            correctIndex: 0,
            explanation:
              "Cornelius paid. Sears bought time only after the programme was airing, and Johnson Products did not arrive until the national plan.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "How much cash changed hands between Cornelius and the station in that arrangement?",
            options: [
              "None",
              "A nominal weekly rental, set well below the studio's ordinary commercial rate",
              "A share of the advertising revenue, divided evenly between producer and station",
              "A single payment from the station, repayable out of the programme's later earnings",
            ],
            correctIndex: 0,
            explanation:
              "He supplied the money for the pilot and the station supplied the room and the equipment. The trade was in kind, not in cash.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Who was George O'Hare?",
            options: [
              "A Sears merchandise manager",
              "The general manager of the Chicago station that first carried the programme",
              "The account executive who introduced the sponsor to the programme in 1971",
              "The talent coordinator who booked the performers for the national episodes",
            ],
            correctIndex: 0,
            explanation:
              "He was a merchandise manager for a group of Sears stores, and he made the first advertising commitment the programme received.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "How many Sears stores did George O'Hare's group cover?",
            options: [
              "Five",
              "Twenty-five, the same number as the syndicator's first list of target markets",
              "Nine, one in each of the cities that carried the programme at its national launch",
              "One hundred, matching the number of markets the show reached by 1974",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section describes him as a merchandise manager for a group of five stores. The other numbers belong to the national story in section 3.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Where were the Sears stores that George O'Hare managed?",
            options: [
              "In Chicago's inner city",
              "Spread across the nine markets that carried the programme when it went national",
              "In the suburbs ringing Chicago, where the chain's largest outlets were concentrated",
              "In Los Angeles, close to the studio where the national episodes were taped",
            ],
            correctIndex: 0,
            explanation:
              "All five were located in Chicago's inner city, which is why a Chicago programme was a sensible place for him to spend advertising money.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "How much of the cost of airing the show did the Sears commitment cover?",
            options: [
              "Only a fraction",
              "All of it, which is why the programme is often described as a Sears production",
              "About half, with the producer covering the balance out of his radio salary",
              "None, because the commitment was made in merchandise rather than in money",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section calls it a small commitment that amounted to only a fraction of the actual cost to air the show.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "What did Sears use its time on the programme to advertise?",
            options: [
              "Phonographs",
              "Hair-care products, which were the category the national sponsor later occupied",
              "Television sets, aimed at households that did not yet receive the UHF band",
              "Its catalogue credit accounts, which the chain was promoting heavily that year",
            ],
            correctIndex: 0,
            explanation:
              "The Encyclopedia of Television records that Sears used Soul Train to advertise phonographs, a product matched to the programme's audience.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "For how long was Cornelius unsalaried on the programme?",
            options: [
              "Ten weeks",
              "Two years, until the national sponsor's money began arriving in October 1971",
              "Ten months, the period between the local launch and the first national broadcast",
              "Three weeks, after which the station put him on its own payroll as a producer",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section records ten weeks as the unsalaried host, producer and salesman of the programme.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Which three roles did Cornelius fill without pay in those weeks?",
            options: [
              "Host, producer and salesman",
              "Host, camera operator and editor, working alone in the station's studio",
              "Producer, talent coordinator and syndicator for the stations outside Chicago",
              "Host, station manager and advertising director for the whole of channel 26",
            ],
            correctIndex: 0,
            explanation:
              "The section calls him the unsalaried host, producer and salesman, which means he was also the one selling the time.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Why does this course treat unpaid founder labour as a form of financing?",
            options: [
              "It funds the business out of his wages",
              "Because unpaid work can be claimed against tax as an investment in the company",
              "Because a station counts unpaid labour as part of the advertising it has sold",
              "Because the wages are recorded as a loan the business must later repay",
            ],
            correctIndex: 0,
            explanation:
              "It is the founder lending the company his own wages without writing it down as a loan, which is exactly why it never appears in the accounts.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Which local sponsors does the Contemporary Black Biography entry name alongside Sears?",
            options: [
              "Wate-On, Joe Louis Milk and Coca-Cola",
              "Motown, Stax and Columbia, the record labels that supplied the programme's talent",
              "Johnson Products, Johnson Publishing and Independence Bank, all Chicago firms",
              "Metromedia, Media Affiliates and Bozell & Jacobs, the programme's production partners",
            ],
            correctIndex: 0,
            explanation:
              "The entry names Wate-On, Joe Louis Milk and Coca-Cola as local Chicago sponsors. The record labels and syndicators belong to later sections.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "How should the reference work's list of local sponsors be treated?",
            options: [
              "As a starting point",
              "As a complete roster, since the entry was compiled from the station's own records",
              "As unusable, since a reference work may not be cited for any factual claim",
              "As more reliable than the trade press, which did not cover local advertising",
            ],
            correctIndex: 0,
            explanation:
              "It is a reference work, so its list is a starting point rather than a settled roster, in line with the rule set out in section 1.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Which of the two rival retellings about who funded the local show does the evidence support?",
            options: [
              "Both, as parts of one arrangement",
              "Only the version in which the producer financed everything out of his own pocket",
              "Only the version in which the retail chain underwrote the programme's costs",
              "Neither, because no source records how the local programme was paid for",
            ],
            correctIndex: 0,
            explanation:
              "He paid for the pilot and worked unpaid; the station traded studio space; Sears covered a fraction. The two retellings are halves of one structure.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "What is a pilot?",
            options: [
              "A test episode",
              "The first episode of a programme's second season, used to relaunch it",
              "An episode made for a sponsor's internal use and never intended for broadcast",
              "A programme carried by one station under an agreement to share its costs",
            ],
            correctIndex: 0,
            explanation:
              "A single episode made to show what a programme would be, used to sell it to a station or a sponsor. This story contains two different ones.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "What does it mean to be paid in kind?",
            options: [
              "Paid in goods or services",
              "Paid later, once the business has earned enough revenue to cover the debt",
              "Paid in shares of the company rather than in cash or in goods",
              "Paid by a third party on behalf of the person who owes the money",
            ],
            correctIndex: 0,
            explanation:
              "Studio time in exchange for production expenses is payment in kind. No money moves, and the exchange usually leaves no financial record.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Whose account is the description of George O'Hare and the Sears commitment?",
            options: [
              "Cornelius's own",
              "The Federal Trade Commission's, from its investigation of the programme's sponsor",
              "A Sears corporate history published by the retailer in the mid-1970s",
              "An independent reporter's, filed for Billboard's news pages in 1970",
            ],
            correctIndex: 0,
            explanation:
              "It comes from the 1974 Billboard special section, produced in coordination with his production company, so it is his account in a tribute setting.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Why does this lesson still trust the detail that Sears covered only a fraction of the cost?",
            options: [
              "A tribute has no reason to shrink it",
              "Because the retailer confirmed the figure in its own annual report for that year",
              "Because two separate trade papers printed the same number in the same month",
              "Because the court record in the 1977 appeal repeats the same description",
            ],
            correctIndex: 0,
            explanation:
              "A tribute section tends to inflate contributions, not minimise them, so a detail that makes the help look small is unlikely to be flattery.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "What does this lesson say a sponsor who covers a fraction of a cost still is?",
            options: [
              "The difference between airing and not",
              "A minority owner of the programme, in proportion to the share of costs covered",
              "Legally entitled to approve the programme's content under broadcasting practice",
              "Irrelevant, since a fraction of a cost cannot keep a programme on the air",
            ],
            correctIndex: 0,
            explanation:
              "Nobody else was covering any of it, so a fraction was decisive. Section 3 repeats the structure at national scale with a much larger cheque.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Who told George E. Johnson about the programme, according to his memoir?",
            options: [
              "An account executive at his agency",
              "The general manager of channel 26, who called on him to sell advertising time",
              "A distributor in Detroit who had seen the programme while travelling in Chicago",
              "The programme's talent coordinator, who was looking for a national sponsor",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says an account executive at his advertising agency told him about a friend who was a disc jockey at WVON with a dance programme on channel 26.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "On what day of the week does the memoir say Johnson watched a taping at the station?",
            options: [
              "A Thursday",
              "A Saturday, when the studio was closed and the crew worked on overtime rates",
              "A Sunday, the day the programme was recorded for broadcast the following week",
              "A Monday, before the week's schedule of programmes had been finalised",
            ],
            correctIndex: 0,
            explanation:
              "The memoir puts the visit on a Thursday at the station's studio. Saturday taping belongs to the later Los Angeles production arrangement.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What did Johnson say the black and white tape lacked?",
            options: [
              "The energy of the room",
              "A host capable of carrying an hour of programming without a studio audience",
              "Advertising time, since the station had already sold every available spot",
              "Music rights, which the station had not cleared for broadcast outside Chicago",
            ],
            correctIndex: 0,
            explanation:
              "He writes that the show was exciting in the room and did not carry that energy on the black and white tape, which is why he paid for a colour test.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What does the memoir say Johnson paid for after watching the taping?",
            options: [
              "A thirty-minute colour pilot",
              "A full season of the local programme, bought outright from the station",
              "A new studio for the station, equipped to record in colour every week",
              "A market research study measuring the programme's audience in Chicago",
            ],
            correctIndex: 0,
            explanation:
              "He writes that he bankrolled a thirty-minute colour pilot using the same concept, with Cornelius as host, before deciding to sponsor the programme.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "Who hosted the colour pilot described in the memoir?",
            options: [
              "Cornelius",
              "Redd Foxx, who had starred in the sponsor's earlier hour-long television special",
              "Buster Jones, the disc jockey who later hosted the 1973 network rival",
              "Roy Wood, the radio mentor who had brought Cornelius to the television station",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the colour pilot used the same concept with Cornelius as host. Redd Foxx belongs to the sponsor's earlier variety special.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What decision does the memoir say followed the colour pilot?",
            options: [
              "That the company would sponsor the show",
              "That the company would buy the programme outright from its creator",
              "That the company would produce a rival programme of its own for syndication",
              "That the company would wait a further year before committing any money",
            ],
            correctIndex: 0,
            explanation:
              "After seeing the colour pilot, Johnson writes, he decided Johnson Products would sponsor the programme.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "Why do the two accounts of who paid for a Soul Train pilot not contradict each other?",
            options: [
              "They describe two different pilots",
              "Because the memoir is a later recollection and the trade press account is wrong",
              "Because the station repaid the producer once the sponsor's money arrived",
              "Because both accounts describe the same payment, made jointly by two parties",
            ],
            correctIndex: 0,
            explanation:
              "One is the local pilot Cornelius made in exchange for studio space; the other is a later colour half-hour made to test the idea nationally.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What makes the two pilot accounts look like a disagreement?",
            options: [
              "Calling both of them the pilot",
              "The fact that the two sources were published fifty-one years apart from each other",
              "A difference of one year in the date each source gives for the same event",
              "The trade paper's refusal to name the sponsor that paid for the colour test",
            ],
            correctIndex: 0,
            explanation:
              "One word doing duty for two different objects, a year and a purpose apart, is what turns two compatible accounts into an apparent fight.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What name does the 1974 Billboard section give for the agency that introduced the sponsor to the show?",
            options: [
              "Niefeld, Paley & Kuhn",
              "Allen, Anderson, Niefeld & Paley, which the sponsor's memoir gives instead",
              "Vince Cullers Advertising, the agency that created the Afro Sheen campaigns",
              "Burrell McBain, the Black-owned agency the sponsor moved to in the early 1970s",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section names Niefeld, Paley & Kuhn, adding that it had since merged with Bozell & Jacobs.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What name does the sponsor's memoir give for that same agency?",
            options: [
              "Allen, Anderson, Niefeld & Paley",
              "Niefeld, Paley & Kuhn, which is also the name the 1974 trade section uses",
              "Bozell & Jacobs, the firm the agency is said to have merged into later",
              "Vince Cullers Advertising, which handled the company's Afro Sheen account",
            ],
            correctIndex: 0,
            explanation:
              "The memoir names the firm as Allen, Anderson, Niefeld & Paley, which overlaps with but does not match the trade section's version.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What does the memoir call the account executive who made the introduction?",
            options: [
              "Tom Kuehn",
              "Tom Burrell, who later founded the Black-owned agency that took over the account",
              "Vince Cullers, who had created the company's first consumer advertisement",
              "George O'Hare, the Sears manager who had committed the first advertising money",
            ],
            correctIndex: 0,
            explanation:
              "The memoir names Tom Kuehn as the account executive, which is notable because a similar name appears inside the agency title the trade section gives.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What does this course do about the two different agency names?",
            options: [
              "Prints both and files the question",
              "Adopts the memoir's version, since the sponsor knew his own agency's name",
              "Adopts the trade paper's version and leaves the memoir's name out entirely",
              "Treats the difference as proof that neither source can be relied upon",
            ],
            correctIndex: 0,
            explanation:
              "A name that stands in the firm's title in one account belongs to an employee in the other. The course prints both and records it as an open question.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What did Billboard report in 1972 that the sponsor had financed before Soul Train?",
            options: [
              "Two hour-long specials",
              "A weekly half-hour programme carried by nine stations in the Midwest",
              "A national radio series broadcast from Chicago five afternoons a week",
              "A series of cinema advertisements shown before films in Black neighbourhoods",
            ],
            correctIndex: 0,
            explanation:
              "Billboard reported in August 1972 that Johnson had bankrolled two hour-long specials before the Soul Train sponsorship began.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "How does Billboard print the title of those specials?",
            options: [
              "And Beautiful",
              "Soul Unlimited, which is the title of the network rival that appeared in 1973",
              "The Sound of Philadelphia, after the theme the programme later adopted",
              "Watu Wazuri, the phrase used in the sponsor's print advertising campaign",
            ],
            correctIndex: 0,
            explanation:
              "Billboard prints \"And Beautiful (I & II)\". The memoir spells the title differently, which is a small example of why the course names its source for spellings.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What cost does the memoir give for the first of those specials?",
            options: [
              "More than $300,000",
              "More than a million dollars, the same figure Billboard gives for the 1972 airtime",
              "About $100,000, the amount the memoir gives for each later Los Angeles taping",
              "About $12 million, which is the company's stated sales figure for 1971",
            ],
            correctIndex: 0,
            explanation:
              "The memoir gives more than $300,000 for the first special. The million-dollar figure belongs to the 1972 airtime commitment in section 3.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "In how many markets does the memoir say the second special ran?",
            options: [
              "25",
              "Seven, the number of cities that carried Soul Train at its national launch",
              "100, the number of markets the programme reached by 1974",
              "200, the eventual reach the memoir gives for the programme itself",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the second special ran in 25 markets. Seven, 100 and 200 all belong to Soul Train rather than to the specials.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What did Johnson say retailers would not do when he advertised on those specials?",
            options: [
              "Order extra stock in advance",
              "Accept his advertising posters for display in the windows of their shops",
              "Sell his products at the prices the company printed on its own packaging",
              "Allow his salesmen into the stores to count the stock on the shelves",
            ],
            correctIndex: 0,
            explanation:
              "He writes that most retailers would not order larger inventories ahead of the broadcasts, so the shelves emptied and the extra sales were lost.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What does this lesson say the sponsor was really buying when he backed the programme?",
            options: [
              "A lever on retailers",
              "A share of the programme's future syndication revenue in every market it reached",
              "Editorial control over which performers appeared on the programme each week",
              "An audience measurement he could sell on to other advertisers in the category",
            ],
            correctIndex: 0,
            explanation:
              "He had already learned that distribution could quietly refuse him. Demand created on television was pressure on the retailers who had said no.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Going national without a network
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-first-run-syndication-is",
      title: "7 · First-run syndication, and what it costs you to keep your show",
      section: "Section 3 · Going national without a network",
      body: `In 1971 there were three national television networks in the United States, and a programme that wanted the country usually went to one of them. Soul Train did not. Understanding why is the centre of this course.

**The definition, from a reference work on the industry.** The *Encyclopedia of Television* defines first-run syndication this way: a programme is first-run syndicated "If a program is initially made to be sold to programmers other than the major networks" (Fletcher, n.d.). The same entry defines barter syndication as an arrangement in which "an advertiser purchases in advance all or some part of the advertising opportunities ... in a syndicated program" (Fletcher, n.d.).

**The trade, put plainly.**

| | A network sale | First-run syndication |
|---|---|---|
| How many deals to reach the country | One | One per market, over and over |
| Who clears the time | The network, for its affiliates | You, station by station |
| Who pays for production | Usually the network | Usually you or your sponsor |
| Who owns the programme afterward | Usually the network | You |
| How fast you can be cancelled | One decision | One market at a time |

A network sale is convenient and it costs you the thing itself. Syndication is laborious and leaves the programme in your hands. That is not an abstract preference. In the 1974 *Billboard* section Cornelius put the stake in one sentence: "Control lies with the people behind the scenes, the decision-makers ... there is not one prime time show, on any of the networks that is produced by a black man, or woman" (Chapman, 1974).

**Why he might have had no choice anyway.** Both surviving accounts say the networks were asked and said no. Clarence Avant, then president of Sussex Records, wrote in the same 1974 section that he recalled "trying to get the three very prejudiced 'birds' (networks) to carry this show and they would not" (Chapman, 1974). The sponsor's memoir says the same thing from his own side: he tried to make a deal with each of the three networks and all three turned the programme down (Johnson & Beard, 2025). Two participants, two accounts, one direction. It still does not establish why any network declined, because neither man was inside the network.

**What this course cannot tell you.** Whether Soul Train was sold to stations on barter terms is not established by any source read for this course. The 1974 section says stations turned it down "regardless of the compensation being offered by the syndicator" (Chapman, 1974), which implies compensation moved somewhere, and the 1972 reporting shows two advertisers each holding a half-hour (Sippel, 1972). Those are consistent with barter and do not prove it. The question is filed as an open research check rather than answered here.

:::reveal What makes a programme first-run syndicated rather than a network programme? ||| It is initially made to be sold to programmers other than the major networks, rather than produced for or licensed to a national network.

:::reveal What does syndication cost a producer, and what does it preserve? ||| It costs one sale per market instead of one national deal, plus the work of clearing time station by station and usually paying for production. It preserves ownership of the programme itself.

## Vocabulary
- **First-run syndication**: making a programme to be sold directly to stations rather than to a network.
- **Barter syndication**: an arrangement in which an advertiser buys some or all of a syndicated programme's advertising slots in advance.
- **Affiliate**: a local station contracted to carry a network's schedule.
- **Compensation**: money a syndicator or network pays a station to carry a programme, as distinct from the money the station earns selling its own spots.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Fletcher, J. (n.d.). Syndication. In *Encyclopedia of Television*. Museum of Broadcast Communications. http://www.museum.tv/eotv/syndication.htm
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
Sippel, J. (1972, August 26). "Soul Train's" 45-mkt. $1 mil backing. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1972/BB-1972-08-26.pdf`,
    },
    {
      slug: "october-2-1971",
      title: "8 · Seven markets out of twenty-five, and what happened next",
      section: "Section 3 · Going national without a network",
      body: `The national Soul Train began on 2 October 1971 (Chapman, 1974; Shelton, n.d.; Wankoff, n.d.).

**Where it started.** Seven cities carried it that day, out of a target list of twenty-five: Atlanta, Cleveland, Detroit, Houston, Los Angeles, Philadelphia and San Francisco (Chapman, 1974; Shelton, n.d.). Read the ratio rather than the list. Twenty-five stations were asked. Seven said yes. The 1974 section reports that stations declined by telling the syndicator they had no open time periods (Chapman, 1974).

**Where it was made.** Production moved to Metromedia Studios in Hollywood, where four shows were taped on one weekend a month (Chapman, 1974; Sippel, 1972). Batching a month of episodes into two days is a cost decision, and the sponsor's memoir gives one reason it was expensive anyway: the studio was not normally operating at the weekend, so the crew was paid overtime, and he puts each taping at more than $100,000 (Johnson & Beard, 2025).

**A second list of cities.** The memoir gives a different launch line-up: Detroit, Cleveland, St. Louis, Philadelphia, Atlanta, Houston, Oakland and Los Angeles, plus channel 26 in Chicago, which makes nine (Johnson & Beard, 2025). Set it beside the trade record and the differences are specific rather than vague.

| Difference | The 1974 trade section | The 2025 memoir |
|---|---|---|
| Number of cities | Seven | Nine |
| The Bay Area | San Francisco | Oakland |
| St. Louis | Not listed | Listed |
| Chicago | Not listed among the national seven | Listed, as channel 26 |

Chicago already had the programme, so its presence on one list and not the other may simply be a difference between "markets carrying the show" and "markets added at the national launch". San Francisco and Oakland are one metropolitan area. St. Louis is the one real disagreement. The course names the difference and does not resolve it.

**How fast it grew.** The numbers come from four sources and they do not line up perfectly, which is what growth reporting usually looks like.

| When | Markets | Source |
|---|---|---|
| 2 October 1971 | 7 of 25 targeted | *Billboard* 1974; *Encyclopedia of Television* |
| Within eight months, or by May 1972 | 25 | *Billboard* 1974; *Encyclopedia of Television* |
| August 1972 | Over 30, with 40 expected | *Billboard* 1972 |
| By January 1973 | Reached San Juan, on WAPA-TV channel 4 | *Billboard* 1973 |
| 1974 | About 100 | *Billboard* 1974 |
| Eventually | 200, in the sponsor's account | Memoir, 2025 |

Note the headline problem. The August 1972 story is headed with a figure of 45 markets while its own text says over 30 with 40 expected (Sippel, 1972). A headline is written by somebody other than the reporter, and it rounds up. Read the body.

:::reveal How many stations carried the national Soul Train on 2 October 1971, and out of how many that were targeted? ||| Seven, out of a target list of twenty-five.

:::reveal What reason does the 1974 Billboard section give for stations declining to carry the programme? ||| They told the syndicator they had no open time periods.

## Vocabulary
- **Market**: a city and its surrounding area, treated as one unit for buying and selling television time.
- **Line-up**: the set of stations carrying a syndicated programme at a given moment.
- **Batching**: recording several episodes in one session to spread the studio and crew cost across them.
- **Headline figure**: the number printed above a story, often rounded or overstated relative to the text below it.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
San Juan [Column]. (1973, January 27). *Billboard*, 20. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1973/Billboard%201973-01-27.pdf
Shelton, M. (n.d.). Soul Train. In *Encyclopedia of Television*. Museum of Broadcast Communications. http://www.museum.tv/eotv/soultrain.htm
Sippel, J. (1972, August 26). "Soul Train's" 45-mkt. $1 mil backing. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1972/BB-1972-08-26.pdf
Wankoff, J. (n.d.). Cornelius, Don 1936-. In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cornelius-don-1936`,
    },
    {
      slug: "who-sold-the-time",
      title: "9 · Who sold the time, and who bought it",
      section: "Section 3 · Going national without a network",
      body: `A syndicated programme needs somebody to sell it to stations and somebody to buy the advertising inside it. Both jobs changed hands over the run, and the record of who held them is thinner than you would expect.

**The syndicators, in the order the documents show them.**

| When | Named as syndicator | Source |
|---|---|---|
| August 1972 | Media Affiliates, of Omaha | *Billboard*, 1972 |
| 30 July 1973 | Bozell & Jacobs, in a list of syndication arrangements | *Broadcasting*, 1973 |
| From 1985 | Tribune Entertainment, as exclusive distributor and syndicator | *Encyclopedia of Television*; *Contemporary Black Biography* |

*Billboard* in 1972 states plainly that the programme "is syndicated by Media Affiliates, Omaha" (Sippel, 1972). A year later *Broadcasting* prints the entry "Soul Train (Bozell & Jacobs)" in its trade listing (*Broadcasting*, 1973). Whether Media Affiliates was absorbed, replaced, or simply reported differently is not established by anything read for this course, and it is filed as an open check. Notice that Bozell & Jacobs is also the firm the 1974 section says the sponsor's original advertising agency had merged into, so the same name appears on both sides of the transaction.

**Who bought the advertising.** In August 1972 *Billboard* reported that Johnson Products "sponsors fully the first half-hour", that Sears bought spots weekly in the second half-hour, and that Johnson "reportedly has taken over a million dollars worth of time on the show over the next 12 months", with Johnson saying that his expenditure on the show was the largest ever for his firm (Sippel, 1972).

**A second description of the same inventory.** The memoir describes the arrangement by minutes rather than by half-hours: Johnson Products would run three minutes of advertising in each show, and Cornelius could sell the other three minutes for his own income (Johnson & Beard, 2025). These are not obviously the same deal. One divides the hour into halves by sponsor, the other divides six minutes of commercial time between two sellers. They may describe different years, or different things, and no document read here reconciles them.

**What the sponsor said he was buying.** Johnson told *Billboard* in 1972: "'Soul Train' delivers such a preponderence [sic] of the market we are interested in, that it makes TV affordable" (Sippel, 1972). The misspelling is in the printed page and is kept. His argument is not that the audience was large. It is that the audience was concentrated, so he stopped paying for viewers he did not want. That is the whole economic case for the sponsorship in one sentence.

**What nobody here can tell you.** What the syndicators earned on Soul Train is not stated in any source read for this course.

:::reveal Which firm does Billboard name as Soul Train's syndicator in August 1972, and which firm does Broadcasting list a year later? ||| Media Affiliates of Omaha in 1972, and Bozell & Jacobs in the trade listing of 30 July 1973.

:::reveal What was George E. Johnson's economic argument for buying time on Soul Train? ||| That the programme delivered such a concentration of the market he wanted that television became affordable, because he stopped paying to reach viewers he had no use for.

## Vocabulary
- **Syndicator**: the firm that sells a programme to stations market by market and handles the arrangements.
- **Spot**: a single advertising slot inside a programme.
- **Full sponsorship**: one advertiser buying all the advertising in a programme or a defined part of it.
- **Concentration**: the share of a programme's audience that belongs to the group an advertiser is trying to reach.

## Sources
*Broadcasting*. (1973, July 30), 5. https://www.worldradiohistory.com/Archive-BC/BC-1973/1973-07-30-BC.pdf
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
Shelton, M. (n.d.). Soul Train. In *Encyclopedia of Television*. Museum of Broadcast Communications. http://www.museum.tv/eotv/soultrain.htm
Sippel, J. (1972, August 26). "Soul Train's" 45-mkt. $1 mil backing. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1972/BB-1972-08-26.pdf
Wankoff, J. (n.d.). Cornelius, Don 1936-. In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cornelius-don-1936`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Going national without a network",
      section: "Section 3 · Going national without a network",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does the Encyclopedia of Television define first-run syndication?",
            options: [
              "Made to be sold to programmers other than the networks",
              "A programme sold to stations only after a network has finished running it",
              "A programme produced by a network and then licensed to stations outside its affiliates",
              "A programme whose advertising is sold nationally while its airtime is sold locally",
            ],
            correctIndex: 0,
            explanation:
              "The entry says a programme is first-run syndicated if it is initially made to be sold to programmers other than the major networks.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "How does the same entry define barter syndication?",
            options: [
              "An advertiser buys the slots in advance",
              "A station pays for a programme in advertising time instead of in money",
              "Two stations trade programmes with each other without either one paying a fee",
              "A syndicator pays a station to carry a programme it would otherwise refuse",
            ],
            correctIndex: 0,
            explanation:
              "The entry describes an advertiser purchasing in advance all or some part of the advertising opportunities in a syndicated programme.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "How many deals does a network sale take to reach the country?",
            options: [
              "One",
              "One for each of the network's affiliated stations in every individual market",
              "Two, one with the network and one with the advertiser who sponsors the programme",
              "Twenty-five, the number of markets a national launch was expected to cover",
            ],
            correctIndex: 0,
            explanation:
              "That is the convenience a network sells. The network then clears the time across its affiliates, which is work the producer does not have to do.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "How many deals does first-run syndication take to reach the country?",
            options: [
              "One per market, repeatedly",
              "One, with a syndicator who then guarantees national coverage in a single contract",
              "Three, one with each of the national networks that agrees to carry the programme",
              "None, because a syndicated programme is distributed free to any station that wants it",
            ],
            correctIndex: 0,
            explanation:
              "Syndication means selling the programme again in every market, which is why Soul Train started with seven stations rather than a national line-up.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "In first-run syndication, who clears the time on each station?",
            options: [
              "The producer's side, market by market",
              "The network, which assigns the programme a slot across its affiliated stations",
              "The advertiser, which buys the time directly from each station in the line-up",
              "The regulator, which allocates hours among competing syndicated programmes",
            ],
            correctIndex: 0,
            explanation:
              "Clearance is won one station at a time. The 1974 section records stations refusing by saying they had no open time periods.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "In first-run syndication, who usually pays for production?",
            options: [
              "The producer or the sponsor",
              "The network, which recovers the cost from the advertising it sells nationally",
              "The stations, which share the cost in proportion to the size of their markets",
              "The syndicator, which is repaid out of the programme's later licence fees",
            ],
            correctIndex: 0,
            explanation:
              "The money has to come from the producer's own side, which is why a sponsor willing to fund production is decisive rather than merely helpful.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "Who usually owns a programme made for a network?",
            options: [
              "The network",
              "The producer, who licenses each broadcast to the network for a fixed fee",
              "The sponsor, in proportion to the share of production costs it has covered",
              "The affiliated stations, jointly, for as long as they continue to carry it",
            ],
            correctIndex: 0,
            explanation:
              "That is the cost of the convenient route. The comparison table in the lesson sets it against syndication, where the programme stays with the producer.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "Who owns a first-run syndicated programme?",
            options: [
              "The producer",
              "The syndicator, which acquires the rights in exchange for selling it to stations",
              "The sponsor that funds the production, under standard broadcasting practice",
              "Each station, for the territory covered by its own transmitter",
            ],
            correctIndex: 0,
            explanation:
              "Ownership stays with the producer. That is what the laborious route buys, and it is why there was something for Cornelius to sell in 2008.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "How quickly can a network end a programme it carries?",
            options: [
              "In one decision",
              "Only at the end of a season, and only after consulting its affiliated stations",
              "One market at a time, as each affiliate decides whether to keep carrying it",
              "Never, once a full season has been ordered and paid for in advance",
            ],
            correctIndex: 0,
            explanation:
              "A single decision ends it everywhere. A syndicated programme is lost market by market instead, which is slower and survivable.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "Where did Cornelius say control lies, in the 1974 Billboard section?",
            options: [
              "With the decision-makers behind the scenes",
              "With the audience, whose viewing habits decide which programmes survive a season",
              "With the sponsor, because the advertiser funds the programme and can withdraw",
              "With the syndicator, because it chooses which stations are offered the programme",
            ],
            correctIndex: 0,
            explanation:
              "He said control lies with the people behind the scenes, the decision-makers, and went on to note who was not among them in network prime time.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "What did Cornelius say in 1974 about prime time programmes on the networks?",
            options: [
              "Not one was produced by a Black man or woman",
              "That every one of them was produced by the network rather than an outside company",
              "That none of them had a Black performer under contract as a regular cast member",
              "That all of them were sold on barter terms to the stations that carried them",
            ],
            correctIndex: 0,
            explanation:
              "His sentence is that there is not one prime time show on any of the networks produced by a Black man or woman, which is what he meant by control.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "What position did Clarence Avant hold when he wrote in the 1974 Billboard section?",
            options: [
              "President of Sussex Records",
              "Chairman of Johnson Products Company, the programme's national sponsor",
              "Head of programming at the network that declined to carry the show",
              "Talent coordinator for the programme and its creator's business partner",
            ],
            correctIndex: 0,
            explanation:
              "The section identifies him as president of Sussex Records. His account of approaching the networks is his own recollection, printed in a tribute.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "What did Avant say about his approaches to the networks?",
            options: [
              "They would not carry it",
              "That two of them offered terms he judged unacceptable to the programme's creator",
              "That the programme was carried for a season before the network dropped it",
              "That he never approached them, because the sponsor had already done so",
            ],
            correctIndex: 0,
            explanation:
              "He recalled trying to get the three networks to carry the show and being refused. The sponsor's memoir gives the same outcome from his own side.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "What does the sponsor's memoir say about approaching the three networks?",
            options: [
              "All three turned the programme down",
              "That he never approached them, because syndication was always the plan",
              "That one of them offered a slot the programme's creator declined to accept",
              "That the networks agreed but wanted the sponsor's name removed from the show",
            ],
            correctIndex: 0,
            explanation:
              "He writes that he tried to strike a deal with each of the three and that all three refused, which matches Avant's 1974 recollection in direction.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "Do those two accounts establish why any network declined?",
            options: [
              "No",
              "Yes, because both men were present when the decisions were taken",
              "Yes, because the two accounts agree on the reason as well as the outcome",
              "Yes, because a refusal by all three networks can only have one explanation",
            ],
            correctIndex: 0,
            explanation:
              "Neither man was inside a network. Two participants agreeing that they were refused does not document the reasoning of whoever refused them.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "Is it established that Soul Train was sold to stations on barter terms?",
            options: [
              "No",
              "Yes, because the sponsor bought a full half-hour of the programme's advertising",
              "Yes, because the 1974 section describes the compensation offered to stations",
              "Yes, because every first-run syndicated programme of the period used barter",
            ],
            correctIndex: 0,
            explanation:
              "The evidence is consistent with barter and does not prove it. The question is filed as an open research check rather than answered.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "What does the 1974 section's phrase about stations refusing \"regardless of the compensation being offered by the syndicator\" imply?",
            options: [
              "That money was moving toward stations",
              "That stations were paying the syndicator a licence fee for each episode carried",
              "That the sponsor was paying stations directly rather than through the syndicator",
              "That the syndicator had no money and was offering only the programme itself",
            ],
            correctIndex: 0,
            explanation:
              "Compensation offered by the syndicator means the syndicator's side was paying something to stations. What exactly, and on what terms, is not established.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "What is an affiliate?",
            options: [
              "A station contracted to carry a network's schedule",
              "A firm that sells a syndicated programme to stations in exchange for a commission",
              "An advertiser that has bought all the commercial time in a single programme",
              "A second station owned by the same company as an existing one in another market",
            ],
            correctIndex: 0,
            explanation:
              "Affiliates are how a network reaches the country in a single deal, and clearing time across them is the work a syndicated producer must do alone.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "What is compensation, in this lesson's vocabulary?",
            options: [
              "Money paid to a station to carry a programme",
              "The fee an advertiser pays for a single slot inside a syndicated programme",
              "A payment a producer makes to performers who appear without a separate fee",
              "The refund a sponsor receives when a station fails to air a scheduled programme",
            ],
            correctIndex: 0,
            explanation:
              "It is money moving from the syndicator or network to the station, as distinct from what the station earns selling its own spots.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "On what date did the national Soul Train begin?",
            options: [
              "2 October 1971",
              "17 August 1970, the date usually given for the local Chicago programme's debut",
              "10 December 1969, the date the memoir gives for the sponsor's first share trading",
              "10 March 1973, the first broadcast of the competing network programme",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 Billboard section, the Encyclopedia of Television and the Contemporary Black Biography entry all give 2 October 1971.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "How many stations carried the programme on its first national broadcast?",
            options: [
              "Seven",
              "Nine, which is the number the sponsor's memoir gives for the launch line-up",
              "Twenty-five, the number of markets the syndicator had targeted in advance",
              "Thirty, the figure Billboard reported for the line-up in August 1972",
            ],
            correctIndex: 0,
            explanation:
              "Seven, out of a target list of twenty-five. The memoir's nine includes Chicago and St. Louis, which is the difference the lesson sets out.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "How many markets had the syndicator targeted for the national launch?",
            options: [
              "Twenty-five",
              "Seven, the same number that actually carried the first national broadcast",
              "One hundred, the figure the programme reached about three years later",
              "Forty-five, the number printed in a Billboard headline in August 1972",
            ],
            correctIndex: 0,
            explanation:
              "Twenty-five were targeted and seven said yes. Reading the ratio rather than the list is what makes the launch a business fact rather than trivia.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Which Bay Area city appears on the 1974 trade section's launch list?",
            options: [
              "San Francisco",
              "Oakland, which is the city the sponsor's 2025 memoir names instead",
              "San Jose, added when the line-up expanded during the programme's first year",
              "Sacramento, the only northern California market on the original target list",
            ],
            correctIndex: 0,
            explanation:
              "The trade section says San Francisco and the memoir says Oakland. They are one metropolitan area, so this is a difference of naming rather than of fact.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Where was the national programme taped?",
            options: [
              "Metromedia Studios in Hollywood",
              "WCIU's studio in Chicago's Financial Exchange Building, where the local show was made",
              "A network facility in New York, rented by the syndicator for one weekend a month",
              "Tribune Entertainment's Chicago studios, which also handled its distribution",
            ],
            correctIndex: 0,
            explanation:
              "Metromedia Studios in Hollywood. The Chicago studio belongs to the local run, and Tribune Entertainment did not arrive until 1985.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "How many episodes were taped in each session?",
            options: [
              "Four",
              "One, recorded on the same weekday each week throughout the production year",
              "Thirteen, a full quarter of a season recorded in a single continuous block",
              "Two, one for broadcast and one held in reserve in case of a scheduling change",
            ],
            correctIndex: 0,
            explanation:
              "Four shows were taped on one weekend a month, which spreads the studio and crew cost across four episodes instead of one.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "How often were those taping sessions held?",
            options: [
              "One weekend a month",
              "Every weekend, producing four episodes a week for the syndicated line-up",
              "Twice a year, in blocks long enough to record an entire season at once",
              "Whenever a sponsor confirmed the funding for the next group of episodes",
            ],
            correctIndex: 0,
            explanation:
              "One weekend a month, four shows at a time. Batching is a cost decision, and the memoir explains why it was still expensive.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Why does the memoir say the studio crew was paid overtime?",
            options: [
              "The studio was closed at weekends",
              "Because the episodes overran, forcing the crew to work beyond scheduled hours",
              "Because the crew was hired from a different city and paid travelling time",
              "Because the sponsor insisted on recording each episode more than once",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the studio was not normally operating on a Saturday, so the union crew earned overtime for working the taping weekend.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "What figure does the memoir give for the cost of each taping session?",
            options: [
              "More than $100,000",
              "More than $300,000, which is the figure it gives for the first hour-long special",
              "About $12 million, which is its figure for the sponsor's sales in one year",
              "Over a million dollars, which is Billboard's figure for a year of airtime",
            ],
            correctIndex: 0,
            explanation:
              "The memoir puts each taping at more than $100,000. The other figures belong to the specials, to company sales and to the 1972 airtime commitment.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "How many cities are on the memoir's launch line-up?",
            options: [
              "Nine",
              "Seven, the same number the 1974 trade section gives for the first broadcast",
              "Twenty-five, matching the syndicator's original list of target markets",
              "Two hundred, the eventual reach the memoir gives elsewhere for the programme",
            ],
            correctIndex: 0,
            explanation:
              "Eight cities plus channel 26 in Chicago makes nine. The trade section's seven does not include Chicago or St. Louis.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Which city is the one real disagreement between the two launch lists?",
            options: [
              "St. Louis",
              "Chicago, because no source records the programme airing there before 1971",
              "Detroit, which appears on the memoir's list but not on the trade section's",
              "Houston, which the trade section lists and the memoir leaves out",
            ],
            correctIndex: 0,
            explanation:
              "San Francisco and Oakland are one area and Chicago already had the show, so St. Louis is the city one list carries and the other does not.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Why might Chicago appear on one launch list and not the other?",
            options: [
              "It already had the programme",
              "Because the Chicago station dropped the programme shortly before the national launch",
              "Because the trade section counted only markets where the sponsor bought time",
              "Because the memoir confused the local station with one in another market",
            ],
            correctIndex: 0,
            explanation:
              "The difference may simply be between markets carrying the show and markets added at the national launch, since Chicago had carried it since 1970.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "What reason does the 1974 section give for stations declining the programme?",
            options: [
              "No open time periods",
              "That the programme's sponsor was a competitor of an advertiser they already carried",
              "That the syndicator would not guarantee a full season of episodes in advance",
              "That the programme was produced in black and white and they broadcast in colour",
            ],
            correctIndex: 0,
            explanation:
              "Stations told the syndicator they had no open time periods, which is the standard refusal a first-run syndicated show has to overcome.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "How many markets did the programme reach within about eight months of the national launch?",
            options: [
              "25",
              "Seven, the number that carried the first national broadcast in October 1971",
              "45, the figure printed in a Billboard headline in August 1972",
              "100, the number the 1974 section gives for the programme's reach that year",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section says 25 within eight months, and the Encyclopedia of Television puts the same figure at May 1972.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "What market figure does the text of the August 1972 Billboard story give?",
            options: [
              "Over 30, with 40 expected",
              "Exactly 45, which is also the number printed in the story's own headline",
              "Seven, unchanged since the national launch the previous October",
              "About 100, which is the figure the 1974 special section repeats",
            ],
            correctIndex: 0,
            explanation:
              "The body of the story says over 30 with 40 expected, while the headline above it uses 45.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "What market figure appears in the headline of that same August 1972 story?",
            options: [
              "45",
              "30, the same number the body of the story gives for the current line-up",
              "25, the number of markets the syndicator had originally targeted",
              "100, the reach the programme would not reach for another two years",
            ],
            correctIndex: 0,
            explanation:
              "The headline says 45 while the text says over 30 with 40 expected. The lesson uses this as a reminder to read the body rather than the headline.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Why does the lesson say a headline figure and a story's text can differ?",
            options: [
              "A headline is written by someone else and rounds up",
              "Because headlines are printed before the reporting is finished and cannot be corrected",
              "Because a headline gives a projection while the text always gives a historical figure",
              "Because the two numbers count different things, one markets and one stations",
            ],
            correctIndex: 0,
            explanation:
              "A headline is usually written by somebody other than the reporter, and it rounds up. The instruction that follows is simply to read the body.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Which city outside the mainland United States had the programme by January 1973?",
            options: [
              "San Juan",
              "Kingston, where a Caribbean station added it during the programme's second year",
              "Honolulu, reached when the syndicator extended the line-up across the Pacific",
              "Toronto, the first market outside the United States to carry the programme",
            ],
            correctIndex: 0,
            explanation:
              "A January 1973 Billboard column records the programme making its debut in San Juan on WAPA-TV, channel 4.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Which firm does Billboard name as the programme's syndicator in August 1972?",
            options: [
              "Media Affiliates",
              "Bozell & Jacobs, which appears in a Broadcasting trade listing a year afterward",
              "Tribune Entertainment, which took the role as exclusive distributor from 1985",
              "Metromedia, the company whose Hollywood studios recorded the national episodes",
            ],
            correctIndex: 0,
            explanation:
              "Billboard states that the programme is syndicated by Media Affiliates. Bozell & Jacobs appears in 1973 and Tribune Entertainment much later.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "Where was Media Affiliates based?",
            options: [
              "Omaha",
              "Chicago, the city where both the programme and its national sponsor began",
              "Hollywood, alongside the studio where the national episodes were recorded",
              "New York, where most syndication firms of the period kept their sales offices",
            ],
            correctIndex: 0,
            explanation:
              "Billboard gives Omaha. The detail matters only because it makes the firm identifiable if anyone wants to trace what happened to it.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "Which firm does Broadcasting list against Soul Train on 30 July 1973?",
            options: [
              "Bozell & Jacobs",
              "Media Affiliates, the Omaha firm Billboard had named the previous August",
              "Don Cornelius Productions, which by then handled its own syndication",
              "Metromedia, which had moved from producing the programme to distributing it",
            ],
            correctIndex: 0,
            explanation:
              "The trade listing prints the entry \"Soul Train (Bozell & Jacobs)\", a year after Billboard had named Media Affiliates.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "Which firm became the programme's exclusive distributor and syndicator from 1985?",
            options: [
              "Tribune Entertainment",
              "Bozell & Jacobs, which had been named in the trade listings from 1973 onward",
              "Media Affiliates, restored to the role after a decade under other management",
              "Black Entertainment Television, which also began airing the awards show",
            ],
            correctIndex: 0,
            explanation:
              "Tribune Entertainment took the role from 1985 and helped launch the Soul Train Music Awards two years later.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "Is the relationship between Media Affiliates and Bozell & Jacobs established by the sources read for this course?",
            options: [
              "No",
              "Yes, the 1973 listing states that one firm had acquired the other",
              "Yes, the 1974 special section describes the change of syndicator in detail",
              "Yes, the sponsor's memoir explains that he moved the account between the two",
            ],
            correctIndex: 0,
            explanation:
              "Whether one absorbed the other, replaced it, or was simply reported differently is not established, and it is filed as an open research check.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "Why is the appearance of the name Bozell & Jacobs in the 1973 syndication listing worth noticing?",
            options: [
              "It is also named as the agency's merger partner",
              "Because it is the firm that produced the competing network programme that year",
              "Because it was the advertising agency that created the sponsor's Afro Sheen campaign",
              "Because it later bought the programme's library and sold it on at a profit",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section says the sponsor's original agency had since merged with Bozell & Jacobs, so the same name turns up on both sides of the transaction.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What did Johnson Products sponsor fully, according to Billboard in August 1972?",
            options: [
              "The first half-hour",
              "The whole hour, leaving the programme's creator with no advertising to sell",
              "The second half-hour, with the retail chain taking the first half of the programme",
              "Three minutes of each episode, with the creator selling the remaining three",
            ],
            correctIndex: 0,
            explanation:
              "Billboard reports that Johnson Products sponsored the first half-hour fully, while Sears bought spots weekly in the second half-hour.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What did Sears buy in the programme in 1972, according to Billboard?",
            options: [
              "Weekly spots in the second half-hour",
              "Full sponsorship of the second half-hour, matching the hair-care company's deal",
              "A one-off package of advertising covering the programme's national launch only",
              "Nothing, having ended its involvement when the programme left Chicago",
            ],
            correctIndex: 0,
            explanation:
              "Billboard says Sears was still buying spots weekly in the second half-hour in 1972, two years after its first local commitment.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "How much airtime had Johnson Products reportedly taken over the coming twelve months, as of August 1972?",
            options: [
              "Over a million dollars worth",
              "About $300,000, the figure the memoir gives for an earlier television special",
              "About $100,000, the figure the memoir gives for a single taping session",
              "About $12 million, which is the company's reported sales for that year",
            ],
            correctIndex: 0,
            explanation:
              "Billboard reports that the company had reportedly taken over a million dollars worth of time on the show over the next twelve months.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What did Johnson say about that advertising expenditure in 1972?",
            options: [
              "It was the largest ever for his firm",
              "That it would be recovered within a single quarter of increased retail sales",
              "That it was smaller than the sum he had spent on his two earlier specials",
              "That it had been matched dollar for dollar by the programme's syndicator",
            ],
            correctIndex: 0,
            explanation:
              "Billboard quotes him saying his expenditure on the show was the largest ever for his firm, which is a claim about his own company, not about the industry.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "How does the sponsor's memoir describe the division of advertising time?",
            options: [
              "Three minutes each",
              "By half-hours, matching the description Billboard printed in August 1972",
              "As a single block of six minutes bought entirely by the hair-care company",
              "As time sold separately by each station in the syndicated line-up",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the company ran three minutes of advertising in each show and Cornelius could sell the other three minutes for his own income.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "Who sold the other three minutes, according to the memoir?",
            options: [
              "Cornelius",
              "The syndicator, which kept the proceeds as its fee for placing the programme",
              "Sears, which retained the second half of the programme's advertising time",
              "Each station, which sold the remaining time locally and kept the revenue",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says Cornelius could sell the other three minutes for his income, which makes the programme's creator an advertising seller as well as its host.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "Do the two descriptions of the programme's advertising inventory reconcile?",
            options: [
              "No document read here reconciles them",
              "Yes, because three minutes is exactly the advertising load of a half-hour programme",
              "Yes, because the memoir is describing the local run and Billboard the national one",
              "Yes, because both accounts come from the same participant at different times",
            ],
            correctIndex: 0,
            explanation:
              "One divides the hour into halves by sponsor and the other divides six minutes between two sellers. They may be different years or different things.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What was George E. Johnson's stated argument for why television became affordable for his firm?",
            options: [
              "The audience was concentrated",
              "That the programme's production costs were shared with a second national sponsor",
              "That syndicated airtime cost less per viewer than network airtime of the same length",
              "That the programme reached more households than any network variety show",
            ],
            correctIndex: 0,
            explanation:
              "He said the programme delivered such a concentration of the market he wanted that it made television affordable. He stopped paying for viewers he had no use for.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What does the notation [sic] mark in the quotation from Johnson's 1972 remarks?",
            options: [
              "A misspelling in the printed page",
              "A word the course has substituted for one that could not be read in the scan",
              "A passage the reporter paraphrased rather than quoting directly",
              "A sentence that was later corrected by the magazine in a subsequent issue",
            ],
            correctIndex: 0,
            explanation:
              "The misspelling is in the original print and is kept, with [sic] marking it so a reader knows it was not introduced here.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What is a spot, in advertising?",
            options: [
              "A single advertising slot",
              "The whole block of commercial time available inside one programme",
              "A station's position in the ratings for a particular time period",
              "A programme's regular place in a station's weekly schedule",
            ],
            correctIndex: 0,
            explanation:
              "One slot. Sears buying spots weekly is a different commitment from Johnson Products sponsoring a whole half-hour.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What is full sponsorship?",
            options: [
              "One advertiser buying all the time in a segment",
              "An advertiser paying the whole cost of producing a programme as well as airing it",
              "A sponsor that also owns a share of the programme it advertises in",
              "An arrangement in which a sponsor's name appears in the programme's title",
            ],
            correctIndex: 0,
            explanation:
              "One advertiser buying all the advertising in a programme or a defined part of it, which is what Billboard describes for the first half-hour in 1972.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What do the sources read for this course establish about what the syndicators earned?",
            options: [
              "Nothing",
              "That they took a fixed commission of fifteen percent on every station sale",
              "That they were paid in advertising time rather than in money",
              "That their fee was covered entirely by the programme's national sponsor",
            ],
            correctIndex: 0,
            explanation:
              "No source read for this course states what Media Affiliates, Bozell & Jacobs or Tribune Entertainment earned on the programme.",
            sourceLessonSlug: "who-sold-the-time",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The sponsor was a business too
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "two-hundred-fifty-dollars",
      title: "10 · The company that bought the time",
      section: "Section 4 · The sponsor was a business too",
      body: `A sponsor is not a background detail. Johnson Products had a founding, a product line, an advertising agency and a market position, and every one of them shaped what the sponsorship was for.

**Before the company.** George E. Johnson worked for S. B. Fuller's Fuller Products, first selling and then in the laboratory, where he developed Ultra Wave, a relaxer for men (Hershey, 2026; Wilson, n.d.).

**The $250, in three versions.** The company was founded in Chicago in 1954. The starting money is told three ways, and the differences are worth keeping.

| Source | What it says |
|---|---|
| *New York Times* obituary | One branch of a finance company refused the idea as ridiculous; another lent the money when he said it was for a vacation |
| NBC News obituary | A bank loan |
| The 2025 memoir | A neighbourhood loan company he had used before refused him at one branch; days later a different branch of the same firm lent him the $250, and his barber partner put in the other $250 |

Two of the three say finance company and one says bank, which is not a small difference: a finance company lending at finance-company rates is a different fact about access to capital than a bank loan. The memoir agrees with the *Times* on the kind of lender and on the refusal, and the passage read for this course does not give the vacation reason.

**The products.** Ultra Sheen arrived in 1957 (Wilson, n.d.). Afro Sheen followed in the 1960s as the Afro rose, and Johnson later acknowledged that the first reformulation produced a poor result for long, curly hair (Wilson, n.d.; Hershey, 2026). Sales ran from about $4 million in 1967 to about $40 million in 1976, with roughly 500 employees in Chicago (Wilson, n.d.).

**The advertising, which is where the show comes in.** Vince Cullers opened his agency in 1956 after working as promotional art director at *Ebony* from 1953 to 1956, and a reference work describes it as "the first black-owned advertising agency in the United States" (*Cullers, Vince*, n.d.). The same entry records that Johnson Products hired him for Afro Sheen and that he filled the advertisements with the tag line "Watu Wazuri," Swahili for "beautiful people". *Block Club Chicago* reports that the watu wazuri advertisement appeared in *Ebony*, *Beauty Trade*, *Essence* and *Black Enterprise*, and that the commercials "played during commercial breaks for 'Soul Train'" (Reed, 2025).

**What the memoir adds.** Johnson writes that Cullers proposed the name Afro Sheen, trademarked it and gave it to the company, and that in the early 1970s the account moved to a Black-owned agency, Burrell McBain, where Tom Burrell made the television commercials showing Black women in professions (Johnson & Beard, 2025). Burrell's specific work for Johnson Products was not established before this memoir, so it now stands as Johnson's account rather than as an open question.

:::reveal What do the three accounts of the company's $250 of starting money disagree about? ||| What kind of lender supplied it. Two accounts say a finance or loan company and one says a bank, and a finance-company loan says something different about access to capital than a bank loan does.

:::reveal What does the sponsor's memoir add about Tom Burrell's work for Johnson Products? ||| That the account moved to the Black-owned agency Burrell McBain in the early 1970s and that Burrell made the television commercials showing Black women in professions, which stands as Johnson's own account.

## Vocabulary
- **Relaxer**: a chemical hair straightener, the product category at the centre of this company's business and of its later regulatory trouble.
- **Finance company**: a lender that is not a bank, typically charging more and asking less.
- **Tag line**: the short phrase repeated across a campaign, here "Watu Wazuri".
- **Account**: a client's business at an advertising agency, which can move between agencies while the client stays the same.

## Sources
*Cullers, Vince*. (n.d.). In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cullers-vince
Hershey, R. D., Jr. (2026, July 7). George E. Johnson, who built a Black hair care empire, dies at 99. *The New York Times* [Republished by *The Philadelphia Inquirer*]. https://www.inquirer.com/obituaries/obit-george-johson-20260707.html
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
Reed, A. (2025, February 28). The birth of Afro Sheen. *Block Club Chicago*. https://blockclubchicago.org/2025/02/28/the-birth-of-afro-sheen-how-chicagos-george-e-johnson-changed-the-black-hair-game-forever/
Wilson, M. R. (n.d.). Johnson Products Co. In *Encyclopedia of Chicago*. Chicago Historical Society. http://www.encyclopedia.chicagohistory.org/pages/2729.html`,
    },
    {
      slug: "going-public-twice",
      title: "11 · Where the money for a million dollars of airtime came from",
      section: "Section 4 · The sponsor was a business too",
      body: `In August 1972 *Billboard* reported that Johnson Products had reportedly taken over a million dollars worth of time on Soul Train over the coming year (Sippel, 1972). A family firm founded on $250 does not write that cheque out of its cash box. Something happened in between, and it is the part of the story most retellings skip.

**Two separate events, in the sponsor's own account.** The memoir describes investment bankers approaching the company in the late 1960s, a year of preparation, a board of directors, new auditors and a chief financial officer, and then two dates that are usually collapsed into one (Johnson & Beard, 2025):

| Date | What the memoir says happened |
|---|---|
| 10 December 1969 | The company's shares were publicly traded for the first time; they opened at $19 and he recalls closing near $22, raising more than $7 million |
| January 1971 | The company listed on the American Stock Exchange |
| January 1972 | A second offering of a further 15 percent, opening at $35, leaving the family with 70 percent |

The *New York Times*, NBC News and *Time* all put the American Stock Exchange listing in January 1971, so that date does not rest on the memoir alone (Hershey, 2026; *Business: Black beauty*, 1980).

**What he says he insisted on.** Johnson writes that his bankers wanted him to end the company's profit-sharing plan, which paid employees 15 percent of profits before taxes, because investors would treat it as money taken out of their returns. He says he refused, and that the prospectus disclosed the plan so buyers knew what they were purchasing. He also says he made one third of his own shares non-dividend-bearing and set his salary at $200,000 (Johnson & Beard, 2025). These are his statements about his own conduct, and the course marks them as such. They are also checkable, because a prospectus is a filed document.

**A figure that does not line up.** The memoir gives 1970 sales of $11.2 million and 1971 sales of a little over $12 million. The *New York Times* gives annual sales of $12.6 million for 1970 (Hershey, 2026). Somebody's year is off by one, or somebody is measuring a different thing.

**And the claim the sponsorship is usually credited with.** In the 1974 *Billboard* section Johnson signed a statement saying that Soul Train had been the backbone of the company's advertising and promotion since the show's inception, and that in that two-year span company sales had almost doubled, going from $17 million to in excess of $30 million (Chapman, 1974). Read what it asserts: two things happened at the same time. It does not, and does not claim to, show that one caused the other. The *Encyclopedia of Chicago*'s independent span, about $4 million in 1967 to about $40 million in 1976, covers a period much longer than the sponsorship (Wilson, n.d.).

:::reveal Which two events does the sponsor's memoir separate that retellings usually merge? ||| A first public trading of the company's shares on 10 December 1969, and the American Stock Exchange listing in January 1971.

:::reveal What does Johnson's signed 1974 statement about doubling sales actually establish? ||| That the sponsorship and a near doubling of sales happened in the same two years. It asserts timing, not cause, and it is his own statement in a tribute section.

## Vocabulary
- **Prospectus**: the document a company files describing itself to potential investors before selling shares.
- **Profit sharing**: a plan paying employees a set share of profits, here 15 percent before taxes.
- **Non-dividend-bearing shares**: shares whose holder receives no dividend, used here by the founder to reduce his own payout.
- **Correlation**: two things moving together, which is not by itself evidence that one produced the other.

## Sources
*Business: Black beauty*. (1980, April 28). *Time*. https://time.com/archive/6857938/business-black-beauty/
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Hershey, R. D., Jr. (2026, July 7). George E. Johnson, who built a Black hair care empire, dies at 99. *The New York Times* [Republished by *The Philadelphia Inquirer*]. https://www.inquirer.com/obituaries/obit-george-johson-20260707.html
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
Sippel, J. (1972, August 26). "Soul Train's" 45-mkt. $1 mil backing. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1972/BB-1972-08-26.pdf
Wilson, M. R. (n.d.). Johnson Products Co. In *Encyclopedia of Chicago*. Chicago Historical Society. http://www.encyclopedia.chicagohistory.org/pages/2729.html`,
    },
    {
      slug: "the-order-and-the-opinion",
      title: "12 · A regulator, a court opinion, and a memory that differs",
      section: "Section 4 · The sponsor was a business too",
      body: `This is the lesson the whole course has been building toward, because here a participant's account and a primary document can be set side by side and read against each other.

**What the court opinion records.** *Johnson Products Co. v. Federal Trade Commission*, 549 F.2d 35, was decided by the United States Court of Appeals for the Seventh Circuit on 16 February 1977. From the opinion itself: the company executed a consent agreement on 9 June 1975; the Federal Trade Commission accepted it on 19 November 1975; the company sought to withdraw on 19 January 1976, citing the unexpected delay in reaching similar agreements with the balance of the industry; the Commission entered its order on 10 February 1976 as Docket C-2788; the order required the company to make warnings in connection with its hair relaxer products; a later order against Revlon was less restrictive, reaching hair-care products where the company's own order reached all cosmetics. The court held that the company had no right to withdraw unilaterally, found the record too thin to judge whether the Commission had abused its discretion, stayed enforcement and sent the case back (*Johnson Products Co. v. FTC*, 1977).

**What the memoir records.** Johnson writes that a Federal Trade Commission letter reached the company in 1974 from the Seattle office; that his team flew to Seattle and was told the concern was sodium hydroxide, which the officials kept calling lye; that he told them whatever was applied to his company must be applied to Revlon; that he first learned of a decision from a network evening news broadcast on 15 June 1975; that the label had to read "This product contains lye"; that he sued in what he calls the "Ninth Circuit Court in Detroit"; and that in early 1977 the court decided in the company's favour and required Revlon to carry the same warning (Johnson & Beard, 2025).

**Where the two differ, precisely.**

| Point | The published opinion | The memoir |
|---|---|---|
| The court | Seventh Circuit, which sits in Chicago | Ninth Circuit, in Detroit |
| Sequence | Consent agreement executed 9 June 1975 | First heard of a decision on 15 June 1975 |
| Outcome | No right to withdraw; record too thin; enforcement stayed; case remanded | A win that required Revlon to carry the warning |
| Revlon | A later, less restrictive order against Revlon | A court order requiring Revlon to match the warning |

**How to hold both.** A published opinion carries a volume and page number and can be read by anyone. A memoir written about fifty years later is a person's memory of a grievance that was real: the record confirms that the company's complaint was precisely about the delay in reaching similar agreements with the rest of the industry, which is the same grievance in the same words. The course does not choose. It tells you where each statement comes from and invites you to read 549 F.2d 35 yourself, which is free.

**One more set of numbers that do not match.** The memoir says the company went from 85 percent of the relaxer market to about 40 percent. The *New York Times* says its relaxer share skidded to 45 percent from 85 percent in two years. *Time* reported a fall from 60 percent to about 40 percent since 1975 (Hershey, 2026; *Business: Black beauty*, 1980). These percentages measure different markets over different periods, and a lesson that averaged them would be inventing a number.

:::reveal Which court decided Johnson Products Co. v. Federal Trade Commission, and what did it actually order? ||| The Seventh Circuit, on 16 February 1977. It held the company had no right to withdraw from the consent agreement unilaterally, found the record too thin to judge abuse of discretion, stayed enforcement and remanded the case.

:::reveal Why does this course print both the court opinion and the memoir's different account rather than choosing one? ||| Because a published opinion and a fifty-year-old recollection are different kinds of evidence, and naming what each says, with its source, teaches more than quietly dropping the one that loses.

## Vocabulary
- **Consent agreement**: a settlement in which a company agrees to an order without the regulator proving its case.
- **Remand**: a higher court sending a case back to the body that decided it, for further proceedings.
- **Stay**: an order pausing enforcement while a question is resolved.
- **Docket number**: the identifier a regulator or court assigns to a matter, here C-2788, which makes it findable.

## Sources
*Business: Black beauty*. (1980, April 28). *Time*. https://time.com/archive/6857938/business-black-beauty/
Hershey, R. D., Jr. (2026, July 7). George E. Johnson, who built a Black hair care empire, dies at 99. *The New York Times* [Republished by *The Philadelphia Inquirer*]. https://www.inquirer.com/obituaries/obit-george-johson-20260707.html
*Johnson Products Co. v. Federal Trade Commission*, 549 F.2d 35 (7th Cir. 1977). Caselaw Access Project. https://static.case.law/f2d/549/cases/0035-01.json
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.`,
    },
    {
      slug: "what-happened-to-the-brands",
      title: "13 · What happened to the sponsor, and to its names",
      section: "Section 4 · The sponsor was a business too",
      body: `The sponsorship ended long before the company did, and what happened afterward is a second lesson in who owns a name.

**The founder leaves.** The *New York Times* records a divorce in 1989, after which Joan Johnson gained control of the company and George Johnson resigned (Hershey, 2026). The memoir gives the date he signed the settlement and resigned as 10 October 1989 (Johnson & Beard, 2025).

**The 1993 sale, and two numbers that turn out to be one.** The *Times* says Joan Johnson sold the company to Ivax, netting about $32 million. *Black Enterprise* describes a $67 million stock swap and reports a call for a boycott by an Operation PUSH official, along with a statement from George Johnson Sr. that after the deal, money made at Johnson Products would no longer stay in the Black community (Hershey, 2026; McKinney, 2017). Those look like rival figures. The memoir reconciles them: he writes that the transaction was $67 million in total and that $32 million of it was hers (Johnson & Beard, 2025). One number is the deal, the other is one seller's share of it, and a reader who assumed they were competing claims would have thrown away a true fact.

**Where the names went next.**

| When | What happened | Source |
|---|---|---|
| 1998 | Carson Inc. acquired the Gentle Treatment and Ultra Sheen brands from Johnson Products Co. Inc. | U.S. Department of Justice, 2000 |
| July 2000 | The Justice Department required L'Oreal to divest those two brands as a condition of buying Carson, about 14 percent of retail relaxer-kit sales against the roughly 50 percent the deal as proposed would have given it | U.S. Department of Justice, 2000 |
| December 2000 | L'Oreal contracted to sell "the Gentle Treatment and Ultra Sheen Supreme brands along with the Johnson Products name" to Wella AG, and to make the products for Wella "for up to 12 months at the Johnson plant in Chicago" | L'Oreal, 2000 |
| 2003 | Procter & Gamble is reported to have acquired the business through its purchase of Wella. This route is reported rather than documented here | Reported only |
| 2009 | Procter & Gamble sold its Johnson Products unit to a buyer formed by two investment firms with an African American management team led by two former Pro-Line executives; terms were not disclosed, and the unit's annualised sales were reported at over $23 million | MediaPost, 2009 |

**Two accounts that do not match, again.** The memoir's epilogue says Ivax sold to L'Oreal in 1997 and that Wella bought brands Ivax divested (Johnson & Beard, 2025). The Justice Department and L'Oreal documents put Carson Inc. in between, date L'Oreal's purchase of Carson to 2000, and make the divestiture L'Oreal's rather than Ivax's. Separately, the *New York Times* says Ivax sold the company to Procter & Gamble in 2004, which those same two documents contradict, so this course does not use that line.

**What is still not established.** Whether Afro Sheen travelled with Ultra Sheen through the 2000 divestiture, and who owns Johnson Products now, are not settled by anything read for this course.

:::reveal How does the sponsor's memoir reconcile the $67 million and $32 million figures reported for the 1993 sale? ||| It says the whole transaction was $67 million and that $32 million of it was Joan Johnson's share, so the two figures describe the deal and one seller's part of it rather than contradicting each other.

:::reveal Why does this course not use the New York Times line that Ivax sold the company to Procter & Gamble in 2004? ||| Because the Justice Department's 2000 release and L'Oreal's own release describe a different route, through Carson Inc. and then L'Oreal and Wella, and two primary documents outrank a single later summary.

## Vocabulary
- **Divestiture**: a sale a company is required to make, often by a competition regulator, as a condition of a larger purchase.
- **Stock swap**: a purchase paid for in the buyer's shares rather than in cash.
- **Brand versus company**: a name can be sold separately from the business that built it, which is why the names here outlive their owners.
- **Terms not disclosed**: a public statement that a price exists and will not be published.

## Sources
Greenberg, K. (2009, March 31). P&G sells Johnson Products unit. *MediaPost*. https://www.mediapost.com/publications/article/103243/pg-sells-johnson-products-unit.html
Hershey, R. D., Jr. (2026, July 7). George E. Johnson, who built a Black hair care empire, dies at 99. *The New York Times* [Republished by *The Philadelphia Inquirer*]. https://www.inquirer.com/obituaries/obit-george-johson-20260707.html
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
L'Oreal. (2000, December 15). *L'Oreal announces divestiture of Johnson Product brands to Wella AG* [Press release]. https://www.loreal.com/-/media/project/loreal/brand-sites/corp/master/lcorp/press-releases/group/historical-press-releases/loral-announces-divestiture-of-johnson-product-brands-to-wella-ag/tt3ntc1214pz-1-851.pdf
McKinney, J. (2017, December 28). 45 great moments in Black business, No. 18. *Black Enterprise*. https://www.blackenterprise.com/45-great-moments-in-black-business-no-18-johnson-products-controversy-when-company-sold-to-whites/
U.S. Department of Justice. (2000, July 31). *Justice Department requires L'Oreal and Carson Inc. to divest two brands of retail hair relaxers* [Press release]. https://www.justice.gov/archive/opa/pr/2000/July/440at.htm`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The sponsor was a business too",
      section: "Section 4 · The sponsor was a business too",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where did George E. Johnson work before founding his own company?",
            options: [
              "Fuller Products",
              "Johnson Publishing Company, where he worked in the magazine advertising department",
              "Sears, Roebuck, as a merchandise manager for a group of Chicago stores",
              "Revlon, in the laboratory that developed its permanent wave treatments",
            ],
            correctIndex: 0,
            explanation:
              "He worked at S. B. Fuller's Fuller Products, first selling and then in the laboratory, which is where his first product came from.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What product did Johnson develop in the Fuller Products laboratory?",
            options: [
              "Ultra Wave",
              "Ultra Sheen, which the company he later founded introduced in 1957",
              "Afro Sheen, the brand created when the Afro hairstyle became popular",
              "Creme of Nature, the relaxer a rival company marketed from the 1970s",
            ],
            correctIndex: 0,
            explanation:
              "Ultra Wave, a relaxer for men, came out of the Fuller laboratory and became the first product of his own company.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What kind of product was Ultra Wave?",
            options: [
              "A relaxer for men",
              "A conditioning spray for natural hair, aimed at customers wearing an Afro",
              "A shampoo sold only through the professional barbershop trade in Chicago",
              "A facial cosmetic line developed for customers the mainstream brands ignored",
            ],
            correctIndex: 0,
            explanation:
              "A relaxer for men. The natural-hair spray came later, as Afro Sheen, when the market moved.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "In what year was Johnson Products founded?",
            options: [
              "1954",
              "1957, the year the company introduced the Ultra Sheen brand to the market",
              "1969, the year the memoir gives for the first public trading of its shares",
              "1971, the year the company became Soul Train's national sponsor",
            ],
            correctIndex: 0,
            explanation:
              "1954, in Chicago. 1957 is Ultra Sheen, 1969 and 1971 are the two share events, and the sponsorship begins in 1971.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "How much was the starting money Johnson borrowed?",
            options: [
              "$250",
              "$500, the full amount deposited when the company opened its first bank account",
              "$2,500, borrowed against the value of the company's first product formula",
              "$7 million, the sum the memoir says the first share offering raised",
            ],
            correctIndex: 0,
            explanation:
              "He borrowed $250, which was his half. The $500 is the total the partners deposited, and the larger figures belong to much later.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What kind of lender do two of the three accounts of the starting loan name?",
            options: [
              "A finance or loan company",
              "A bank, which is the description the New York Times obituary gives",
              "A relative, who lent the money against the value of the family's furniture",
              "A supplier, who extended credit against the first order of ingredients",
            ],
            correctIndex: 0,
            explanation:
              "The New York Times and the memoir both describe a finance or loan company. NBC News is the account that says a bank loan.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Which account of the starting loan says it came from a bank?",
            options: [
              "NBC News",
              "The New York Times, which also describes the refusal at the first branch",
              "The 2025 memoir, which names the neighbourhood firm he had used before",
              "The Encyclopedia of Chicago, in its entry on the company",
            ],
            correctIndex: 0,
            explanation:
              "NBC News describes a bank loan, against the finance or loan company in the other two accounts.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Why does the kind of lender matter in this story?",
            options: [
              "It says something different about access to capital",
              "Because a bank loan would have been repayable over a longer period than a company loan",
              "Because only a bank loan would have had to be disclosed when the company sold shares",
              "Because the lender's name determines who owned a share of the new business",
            ],
            correctIndex: 0,
            explanation:
              "A finance company lending at finance-company rates is a different fact about who could get money than a bank loan is.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What happened at the first lender's branch, in both the New York Times account and the memoir?",
            options: [
              "He was refused",
              "He was granted the loan but at a rate he considered too high to accept",
              "He was offered a larger sum on condition that a partner guaranteed it",
              "He was told to return once the company had made its first sale",
            ],
            correctIndex: 0,
            explanation:
              "Both accounts have a refusal at one branch and a loan at another, which is the part of the story the two sources agree on.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Which detail of the second loan appears in the New York Times account but not in the memoir passage read for this course?",
            options: [
              "That he said it was for a vacation",
              "That the lender was a finance company rather than a bank",
              "That he had done business with the same firm before applying",
              "That his business partner contributed the other half of the money",
            ],
            correctIndex: 0,
            explanation:
              "The Times says he obtained the loan by giving a vacation as the reason. The memoir passage read here does not give that reason.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Who supplied the other half of the $500, according to the memoir?",
            options: [
              "His barber partner",
              "His wife, out of the savings the couple had set aside for a house",
              "The finance company, which lent the full amount in a single transaction",
              "A distributor in Detroit, who advanced the money against future orders",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says his barber partner wrote a cheque for $250 and the two of them deposited $500 at a South Side bank.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "When was Ultra Sheen introduced?",
            options: [
              "1957",
              "1954, the same year the company itself was founded in Chicago",
              "1967, the first year for which the Encyclopedia of Chicago gives a sales figure",
              "1971, the year the company began sponsoring a national television programme",
            ],
            correctIndex: 0,
            explanation:
              "The Encyclopedia of Chicago dates Ultra Sheen to 1957, three years after the company was founded.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What prompted the company to create Afro Sheen?",
            options: [
              "The Afro's popularity",
              "A Federal Trade Commission requirement that it stop selling chemical relaxers",
              "The loss of its professional barbershop trade to a competitor in Atlanta",
              "A request from the television programme it was preparing to sponsor",
            ],
            correctIndex: 0,
            explanation:
              "Afro Sheen followed in the 1960s as the Afro rose, because the company's relaxer business was going to lose customers to the natural style.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What did Johnson later acknowledge about the first Afro Sheen reformulation?",
            options: [
              "It worked poorly on long, curly hair",
              "That it had been copied from a formula developed by a rival Chicago company",
              "That it had to be withdrawn after a regulator objected to one of its ingredients",
              "That it was sold at a loss for its first two years on the market",
            ],
            correctIndex: 0,
            explanation:
              "The New York Times paraphrases his acknowledgment that the first reformulation resulted in a poor product for long, curly hair.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What sales figures does the Encyclopedia of Chicago give for 1967 and 1976?",
            options: [
              "About $4 million and about $40 million",
              "About $17 million and just over $30 million, the span the sponsor's 1974 statement uses",
              "About $11 million and about $12 million, the two years the memoir describes",
              "About $23 million and about $67 million, the figures from the later sales of the business",
            ],
            correctIndex: 0,
            explanation:
              "The Encyclopedia of Chicago gives about $4 million in 1967 rising to about $40 million in 1976, a span far longer than the sponsorship.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Roughly how many people did the company employ in Chicago?",
            options: [
              "About 500",
              "About 25, which is why its advertising had to do the work a sales force could not",
              "About 5,000, making it the largest private employer on Chicago's South Side",
              "About 100, one for each market the programme reached by 1974",
            ],
            correctIndex: 0,
            explanation:
              "The Encyclopedia of Chicago gives about 500 Chicago employees during the company's growth years.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "When did Vince Cullers open his advertising agency?",
            options: [
              "1956",
              "1953, the year he began working as promotional art director at a Chicago magazine",
              "1971, the year the company became a national television sponsor",
              "1965, when the company's television advertising budget first became substantial",
            ],
            correctIndex: 0,
            explanation:
              "He opened it in 1956, after three years as promotional art director at Ebony, and a reference work calls it the first Black-owned agency in the United States.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Where had Vince Cullers worked from 1953 to 1956?",
            options: [
              "Ebony",
              "Johnson Products, in the department that designed its product packaging",
              "Burrell McBain, the Black-owned agency that later took over the account",
              "Sears, Roebuck, designing display materials for its Chicago stores",
            ],
            correctIndex: 0,
            explanation:
              "He was promotional art director at Ebony, so the man who made the sponsor's advertisements came out of Johnson Publishing, the other Chicago Johnson firm.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What does the tag line \"Watu Wazuri\" mean?",
            options: [
              "Beautiful people",
              "Black is beautiful, translated into Swahili for the campaign's print advertisements",
              "Our own hair, a phrase used in the company's barbershop posters",
              "Love, peace and soul, the sign-off the programme's host used on air",
            ],
            correctIndex: 0,
            explanation:
              "A reference work gives it as Swahili for beautiful people. The sign-off belongs to the programme, not to the advertising campaign.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Where does Block Club Chicago report the Afro Sheen commercials played?",
            options: [
              "In Soul Train's commercial breaks",
              "Only in cinemas, before films shown in Black neighbourhoods across the Midwest",
              "During network evening news broadcasts, which reached the widest national audience",
              "On radio stations in the nine markets where the programme had cleared time",
            ],
            correctIndex: 0,
            explanation:
              "The article reports that the commercials played during commercial breaks for Soul Train, which is the direct link between the advertising and the programme.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "To which agency does the memoir say the account moved in the early 1970s?",
            options: [
              "Burrell McBain",
              "Vince Cullers Advertising, which had held the account since the middle of the 1950s",
              "Bozell & Jacobs, the firm named in the trade listings as the programme's syndicator",
              "Allen, Anderson, Niefeld & Paley, the mainstream firm that made the introduction",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the account moved to the Black-owned agency Burrell McBain, where Tom Burrell made the commercials showing Black women in professions.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What is an account, in advertising?",
            options: [
              "A client's business at an agency",
              "The ledger an agency keeps of the advertising time it has bought for a client",
              "A single campaign, which ends when the advertisements stop running",
              "The commission an agency earns on the media it places for a client",
            ],
            correctIndex: 0,
            explanation:
              "An account can move between agencies while the client stays the same, which is exactly what happened here in the early 1970s.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "What did Billboard report in August 1972 about the sponsor's commitment to the programme?",
            options: [
              "Over a million dollars of time in twelve months",
              "That it had bought the programme outright from its creator for an undisclosed sum",
              "That it had reduced its commitment after the first year of national syndication",
              "That it was paying the stations directly rather than buying through the syndicator",
            ],
            correctIndex: 0,
            explanation:
              "Billboard reported that the company had reportedly taken over a million dollars worth of time on the show over the next twelve months.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "Who does the memoir say approached the company in the late 1960s?",
            options: [
              "Investment bankers",
              "The Federal Trade Commission, opening the inquiry that led to the consent order",
              "A television syndicator looking for a sponsor for a new programme",
              "Revlon, seeking to buy the company before entering the market itself",
            ],
            correctIndex: 0,
            explanation:
              "The memoir describes investment bankers noticing the company's revenue and cash, and proposing that it sell shares to the public.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What does the memoir date to 10 December 1969?",
            options: [
              "The first public trading of its shares",
              "The listing of the company's shares on the American Stock Exchange",
              "The second share offering, which the memoir places in January 1972",
              "The first broadcast of the company's hour-long television variety special",
            ],
            correctIndex: 0,
            explanation:
              "The memoir puts the first public trading on 10 December 1969 and keeps the American Stock Exchange listing as a separate event in January 1971.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "At what price does the memoir say the shares opened on that first day?",
            options: [
              "$19",
              "$35, which is the price the memoir gives for the second offering in January 1972",
              "$70, the price it reports the shares reached within six months of the second offering",
              "$2.50, the price it gives for the shares at the end of the 1980s",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says they opened at $19 and he recalls closing near $22. The other prices belong to 1972 and to the end of the 1980s.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "How much does the memoir say the first offering raised?",
            options: [
              "More than $7 million",
              "More than a million dollars, the figure Billboard gives for a year of airtime",
              "About $10.2 million, which the memoir gives as the company's sales for 1969",
              "About $67 million, the figure reported for the sale of the company in 1993",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says more than $7 million was raised in a single day. The $10.2 million is that year's sales, a different number entirely.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What does the memoir date to January 1971?",
            options: [
              "The American Stock Exchange listing",
              "The first public trading of the company's shares to outside investors",
              "The start of the company's sponsorship of the national programme",
              "The second offering of a further 15 percent of the company",
            ],
            correctIndex: 0,
            explanation:
              "January 1971 is the American Stock Exchange listing, and the New York Times, NBC News and Time all place it in the same month.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "Which other sources place the American Stock Exchange listing in January 1971?",
            options: [
              "The New York Times, NBC News and Time",
              "Billboard, Broadcasting and Record World, the three trade papers used in this course",
              "The Federal Trade Commission's order and the Seventh Circuit's 1977 opinion",
              "The Encyclopedia of Chicago and the Encyclopedia of Television",
            ],
            correctIndex: 0,
            explanation:
              "Those three put the listing in January 1971, so that date does not rest on the memoir alone.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What does the memoir say happened in January 1972?",
            options: [
              "A second offering of a further 15 percent",
              "The company's first public trading, a little over a year after the Amex listing",
              "The Federal Trade Commission opened its inquiry into the company's relaxers",
              "The company ended its profit-sharing plan at the insistence of its investors",
            ],
            correctIndex: 0,
            explanation:
              "A second offering of another 15 percent, which the memoir says opened at $35 and left the family holding 70 percent.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "At what price does the memoir say the second offering opened?",
            options: [
              "$35",
              "$19, the price it gives for the first day of public trading in December 1969",
              "$22, the price it recalls for the close of that same first day",
              "$33.50, the price on the souvenir ticker tape from the exchange listing",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the second offering opened at $35. The lower prices belong to the 1969 trading day.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What share of the company does the memoir say the family kept after the second offering?",
            options: [
              "70 percent",
              "85 percent, the share held after the first offering of 15 percent in 1969",
              "51 percent, the minimum needed to retain control of a publicly traded company",
              "100 percent, since the offerings sold only non-voting shares to outsiders",
            ],
            correctIndex: 0,
            explanation:
              "Two offerings of 15 percent each left 30 percent with shareholders and 70 percent with the family.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What did the bankers want the company to end before it sold shares?",
            options: [
              "The profit-sharing plan",
              "Its advertising in Black-owned magazines, which they considered too narrow a market",
              "Its practice of selling directly to barbers rather than through retail distributors",
              "Its television sponsorship, on the ground that it committed too much cash",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says they wanted the profit-sharing plan ended because investors would treat it as money taken out of their returns.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What share of profits did the company's profit-sharing plan pay employees?",
            options: [
              "15 percent before taxes",
              "30 percent of net profits, matching the share of the company sold to the public",
              "5 percent of sales, paid as an annual bonus rather than as a share of profit",
              "70 percent, the same proportion of the company the family retained",
            ],
            correctIndex: 0,
            explanation:
              "The memoir gives 15 percent of profits before taxes, and says the prospectus disclosed it so buyers knew what they were purchasing.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "Where does the memoir say the profit-sharing plan was disclosed?",
            options: [
              "In the prospectus",
              "In the company's advertising, as part of its appeal to Black consumers",
              "In a letter sent to employees rather than in any document filed publicly",
              "Nowhere, because the plan was ended before the shares were offered",
            ],
            correctIndex: 0,
            explanation:
              "He says it went into the prospectus so investors could buy or not buy on that basis, which also makes the claim checkable against a filed document.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What does the memoir say Johnson did with a third of his own shares?",
            options: [
              "Made them non-dividend-bearing",
              "Placed them in a trust for the company's employees under the profit-sharing plan",
              "Sold them in the second offering, reducing the family holding to 70 percent",
              "Pledged them as security for the loan that funded the television sponsorship",
            ],
            correctIndex: 0,
            explanation:
              "He writes that one third of his shares carried no dividend, which reduced his own payout, and that he could convert them back at any time.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What salary does the memoir say was set for Johnson at the time of the offering?",
            options: [
              "$200,000",
              "$400,000, which the memoir gives as a salary paid at the end of the 1980s",
              "Nothing, because he continued to take no salary after the company went public",
              "$150,000, the figure it gives for the company's department heads",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says his salary was set at a flat $200,000 and that he kept it there. Department heads are given a lower range.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What sales figure does the memoir give for 1970?",
            options: [
              "$11.2 million",
              "$12.6 million, which is the figure the New York Times gives for the same year",
              "$10.2 million, which the memoir gives for 1969 rather than for 1970",
              "$17 million, the starting figure in the sponsor's signed 1974 statement",
            ],
            correctIndex: 0,
            explanation:
              "The memoir gives $11.2 million for 1970 and a little over $12 million for 1971.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What sales figure does the New York Times give for 1970?",
            options: [
              "$12.6 million",
              "$11.2 million, which is the figure the sponsor's own memoir gives for that year",
              "$37 million, the figure the memoir gives for the company's sales in 1975",
              "$4 million, the figure the Encyclopedia of Chicago gives for 1967",
            ],
            correctIndex: 0,
            explanation:
              "The Times gives $12.6 million for 1970 against the memoir's $11.2 million, so one of them is off by a year or measuring a different thing.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What does Johnson's signed statement in the 1974 Billboard section claim about sales?",
            options: [
              "They almost doubled in two years",
              "That they trebled in the first year of the sponsorship alone",
              "That they would have fallen without the programme's advertising",
              "That the programme accounted for exactly half of the company's growth",
            ],
            correctIndex: 0,
            explanation:
              "He wrote that during the sponsorship's first two years company sales almost doubled, and that the programme had been the backbone of the company's advertising.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "Between which two figures does that signed statement say sales moved?",
            options: [
              "$17 million to over $30 million",
              "$4 million to $40 million, which is the Encyclopedia of Chicago's independent span",
              "$11.2 million to $37 million, the span the memoir gives for 1970 to 1975",
              "$10.2 million to $12 million, the memoir's figures for 1969 and 1971",
            ],
            correctIndex: 0,
            explanation:
              "The statement gives $17 million to in excess of $30 million. The other spans come from different sources and cover different years.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What does that signed statement actually establish?",
            options: [
              "Timing, not cause",
              "That the programme produced the growth, since no other advertising ran in those years",
              "That the company's growth would have been faster without the sponsorship",
              "Nothing at all, since a company cannot report its own sales figures",
            ],
            correctIndex: 0,
            explanation:
              "Two things happened in the same two years. The statement does not claim to show that one produced the other, and a lesson should not add that claim.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What is a prospectus?",
            options: [
              "A filed document describing an offering to investors",
              "A regulator's order setting out what a company must put on its product labels",
              "A trade paper's annual survey of the companies advertising in a given category",
              "The internal plan a company writes before deciding whether to sell shares",
            ],
            correctIndex: 0,
            explanation:
              "It is the document a company files describing itself to potential investors, which is why a claim about what it contained can be checked.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "Which court decided Johnson Products Co. v. Federal Trade Commission?",
            options: [
              "The Seventh Circuit",
              "The Ninth Circuit, sitting in Detroit, as the sponsor's memoir describes it",
              "The Federal Trade Commission itself, acting as the reviewing body for its own order",
              "The Supreme Court of the United States, on appeal from a Chicago district court",
            ],
            correctIndex: 0,
            explanation:
              "The United States Court of Appeals for the Seventh Circuit, which sits in Chicago. The memoir names a different circuit and a different city.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "On what date was that appeal decided?",
            options: [
              "16 February 1977",
              "10 February 1976, the date the Commission entered its order against the company",
              "15 June 1975, the date the memoir gives for the news broadcast it describes",
              "9 June 1975, the date the company executed the consent agreement",
            ],
            correctIndex: 0,
            explanation:
              "16 February 1977. The other dates are the Commission's order, the broadcast the memoir describes, and the execution of the agreement.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What is the published citation of that opinion?",
            options: [
              "549 F.2d 35",
              "Docket C-2788, which is the Commission's own identifier for the matter",
              "1:24-cv-00335, the number of the federal case discussed in section 7",
              "The opinion was never published, which is why accounts of it differ",
            ],
            correctIndex: 0,
            explanation:
              "549 F.2d 35, a volume and page number anybody can use to read the document for themselves. C-2788 is the Commission's docket.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "When did the company execute the consent agreement, according to the opinion?",
            options: [
              "9 June 1975",
              "19 November 1975, which is when the Commission accepted the agreement",
              "19 January 1976, which is when the company asked to withdraw from it",
              "10 February 1976, which is when the Commission entered its final order",
            ],
            correctIndex: 0,
            explanation:
              "The opinion records execution on 9 June 1975, acceptance on 19 November 1975, the withdrawal request on 19 January 1976 and the order on 10 February 1976.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "When did the Commission accept the consent agreement?",
            options: [
              "19 November 1975",
              "9 June 1975, the same day the company signed and delivered the agreement",
              "16 February 1977, the day the appeal was decided against the Commission's position",
              "15 June 1975, the date the memoir gives for a network news broadcast about it",
            ],
            correctIndex: 0,
            explanation:
              "Acceptance came on 19 November 1975, more than five months after the company executed the agreement.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "When did the company seek to withdraw from the agreement?",
            options: [
              "19 January 1976",
              "9 June 1975, before the Commission had accepted the agreement at all",
              "16 February 1977, on the same day the appeal was finally decided",
              "10 February 1976, the same day the Commission entered its order",
            ],
            correctIndex: 0,
            explanation:
              "The withdrawal request came on 19 January 1976, between the Commission's acceptance and its entry of the order.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What reason did the company give for wanting to withdraw?",
            options: [
              "Delay in agreements with the rest of the industry",
              "That the warning required was scientifically inaccurate for its own formulation",
              "That the Commission had opened the inquiry from an office outside its region",
              "That the cost of relabelling exceeded the value of the products affected",
            ],
            correctIndex: 0,
            explanation:
              "The opinion records the unexpected delay in reaching similar agreements with the balance of the industry, which is the same grievance the memoir describes.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "Under what docket number did the Commission enter its order?",
            options: [
              "C-2788",
              "549 F.2d 35, which is the citation of the court of appeals opinion instead",
              "1:24-cv-00335, which belongs to a federal case filed decades later",
              "The order carried no docket number, being a consent matter rather than a contested one",
            ],
            correctIndex: 0,
            explanation:
              "Docket C-2788. Knowing the number is what makes a regulatory matter findable rather than merely described.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What did the Commission's order require the company to do?",
            options: [
              "Make warnings on its hair relaxer products",
              "Withdraw its relaxer products from sale until the formulation had been changed",
              "Stop advertising its relaxer products on television for a period of two years",
              "Pay a penalty calculated as a share of the revenue from the products concerned",
            ],
            correctIndex: 0,
            explanation:
              "The order required warnings in connection with its hair relaxer products. The opinion itself does not use the word lye.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "How did the later order against Revlon compare, according to the opinion?",
            options: [
              "It was less restrictive",
              "It was identical, which is what the company had asked the Commission for",
              "It was more restrictive, covering cosmetics as well as hair-care products",
              "There was no order against Revlon at any point in the proceedings",
            ],
            correctIndex: 0,
            explanation:
              "The opinion records that Revlon's order reached hair-care products while the company's own order reached all cosmetics.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What did the court hold about the company's attempt to withdraw?",
            options: [
              "It had no unilateral right to withdraw",
              "That it was entitled to withdraw at any time before the order was entered",
              "That the question could not be decided without further evidence from the Commission",
              "That the withdrawal had already taken effect when the request was filed",
            ],
            correctIndex: 0,
            explanation:
              "The court held there was no right to withdraw unilaterally, which is the part of the ruling that went against the company.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What did the court find about the record before it?",
            options: [
              "Too thin to judge abuse of discretion",
              "Sufficient to decide every question the company had raised on appeal",
              "Improperly assembled, so the whole proceeding had to begin again",
              "Complete on the facts but silent on the law, so it certified the question upward",
            ],
            correctIndex: 0,
            explanation:
              "The court found the record too thin to judge whether the Commission had abused its discretion, which is why it sent the case back.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What did the court do about enforcement of the order?",
            options: [
              "Stayed it",
              "Enforced it immediately, requiring the warnings to appear within thirty days",
              "Set it aside permanently, leaving the company under no labelling obligation",
              "Transferred enforcement to the Commission's Seattle office, which had begun the inquiry",
            ],
            correctIndex: 0,
            explanation:
              "It stayed enforcement and remanded the case, which is a pause with further proceedings, not a final win for either side.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "Which court does the memoir name as the one that heard the company's challenge?",
            options: [
              "The Ninth Circuit, in Detroit",
              "The Seventh Circuit, in Chicago, which is the court named in the published opinion",
              "The Federal Trade Commission's own administrative law division",
              "The Supreme Court of Illinois, sitting in Springfield",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the Ninth Circuit Court in Detroit. The published opinion is from the Seventh Circuit, and Detroit is in neither circuit.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "Where does the Seventh Circuit sit?",
            options: [
              "Chicago",
              "Detroit, which is the city the sponsor's memoir names for the court",
              "San Francisco, where the circuit the memoir names actually sits",
              "Seattle, where the Commission office that opened the inquiry was located",
            ],
            correctIndex: 0,
            explanation:
              "The Seventh Circuit sits in Chicago. The Ninth sits in San Francisco, and Detroit belongs to a third circuit altogether.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What does the memoir say the product label had to read?",
            options: [
              "This product contains lye",
              "Warning: may cause irritation to the scalp and injury to the eyes",
              "Contains sodium hydroxide, the wording the Commission's order itself used",
              "For professional use only, to be applied by a licensed cosmetologist",
            ],
            correctIndex: 0,
            explanation:
              "The memoir gives the required wording as \"This product contains lye\". The published opinion speaks only of warnings, without naming lye.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "How does the memoir say Johnson first learned of the Commission's decision?",
            options: [
              "From an evening news broadcast",
              "From a letter sent by the Commission's Seattle office to the company's president",
              "From his own lawyer, who had been informed by the Commission that morning",
              "From a competitor's sales representative calling on one of his distributors",
            ],
            correctIndex: 0,
            explanation:
              "He writes that he heard it on a network evening news programme, before any notice reached him, which is the grievance the chapter is built around.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What date does the memoir give for that broadcast?",
            options: [
              "15 June 1975",
              "9 June 1975, the date the opinion gives for execution of the consent agreement",
              "19 November 1975, the date the Commission accepted the agreement",
              "16 February 1977, the date the court of appeals decided the case",
            ],
            correctIndex: 0,
            explanation:
              "The memoir gives 15 June 1975, which falls six days after the date the opinion records for execution of the agreement.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "Why is the memoir's broadcast date notable when set against the opinion?",
            options: [
              "The agreement was executed six days earlier",
              "Because the broadcast took place before the Commission had opened its inquiry",
              "Because the opinion says the company was notified by letter on the same day",
              "Because no network news programme was broadcast on that date that year",
            ],
            correctIndex: 0,
            explanation:
              "The opinion records the company executing the consent agreement on 9 June 1975, which sits awkwardly with a 15 June broadcast being the first news of a decision.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What outcome does the memoir describe for the court case?",
            options: [
              "A win that required Revlon to match the warning",
              "A defeat, after which the company complied with the order as originally entered",
              "A settlement in which the Commission withdrew its order entirely",
              "A dismissal on the ground that the company had signed the agreement voluntarily",
            ],
            correctIndex: 0,
            explanation:
              "The memoir describes a decision in the company's favour that required Revlon to carry the same warning. The opinion records a stay and a remand instead.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What does this course do with the two accounts of the case?",
            options: [
              "Prints both with their sources",
              "Adopts the opinion and leaves the memoir's version out of the lesson",
              "Adopts the memoir, because its author was present and the court was not",
              "Presents a combined version that removes the points of disagreement",
            ],
            correctIndex: 0,
            explanation:
              "It says what each document contains and where each comes from, and points the learner at the published opinion, which is free to read.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What market-share change does the memoir describe?",
            options: [
              "From 85 percent to about 40",
              "From 85 percent to 45 percent in two years, which is the New York Times figure",
              "From 60 percent to about 40 percent since 1975, which is Time's figure",
              "From 100 percent to 60 percent, before the arrival of any national competitor",
            ],
            correctIndex: 0,
            explanation:
              "The memoir gives 85 percent falling to about 40 percent of the relaxer market by early 1977.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "Why does this lesson refuse to average the three market-share figures?",
            options: [
              "They measure different markets and dates",
              "Because averaging percentages is never mathematically valid in any circumstance",
              "Because two of the three sources have been withdrawn by their publishers",
              "Because the company never published any market-share figures of its own",
            ],
            correctIndex: 0,
            explanation:
              "The memoir, the Times and Time measure different markets over different periods, so a single averaged number would be an invention.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What is a remand?",
            options: [
              "A case sent back for further proceedings",
              "An order pausing enforcement while a separate question is resolved",
              "A settlement in which a company accepts an order without a finding against it",
              "The identifier a regulator assigns to a matter it has opened",
            ],
            correctIndex: 0,
            explanation:
              "A higher court sending a case back to the body that decided it. The pause is a stay, and the settlement is a consent agreement.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "What is a consent agreement?",
            options: [
              "A settlement without the regulator proving its case",
              "A court order issued after a full trial on the merits of a regulator's complaint",
              "A private contract between two competing companies about how they will advertise",
              "A regulator's promise not to investigate a company for a fixed period of years",
            ],
            correctIndex: 0,
            explanation:
              "The company agrees to an order without the regulator having to prove its case, which is why the question of withdrawing from one arose at all.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "In what year did the divorce that changed control of Johnson Products take place?",
            options: [
              "1989",
              "1993, the year the company was sold to a pharmaceutical group",
              "1977, the year the court of appeals decided the regulatory case",
              "1987, the year the founder's son became the company's president",
            ],
            correctIndex: 0,
            explanation:
              "The New York Times records a divorce in 1989, after which Joan Johnson gained control and George Johnson resigned.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Who gained control of the company after that divorce?",
            options: [
              "Joan Johnson",
              "The founder's eldest son, who had been made president of the company two years earlier",
              "Ivax Corporation, which bought a controlling stake as part of the settlement",
              "The company's outside investors, who by then held a majority of the shares",
            ],
            correctIndex: 0,
            explanation:
              "Joan Johnson gained control and George Johnson resigned, which is the change that made the 1993 sale hers to make.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What date does the memoir give for signing the settlement and resigning?",
            options: [
              "10 October 1989",
              "15 June 1993, the date it gives for learning the company was being sold",
              "10 December 1969, the date it gives for the first public trading of the shares",
              "16 February 1977, the date the court of appeals decided the regulatory case",
            ],
            correctIndex: 0,
            explanation:
              "The memoir gives 10 October 1989 for signing the settlement papers and resigning his role at the company.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Who bought Johnson Products in 1993?",
            options: [
              "Ivax",
              "Carson Inc., which acquired two of its brands five years afterward",
              "L'Oreal, which acquired the brands directly from the founding family",
              "Procter & Gamble, which the New York Times names as the 1993 buyer",
            ],
            correctIndex: 0,
            explanation:
              "Ivax bought the company in 1993. Carson, L'Oreal and Procter & Gamble all come later and by a different route.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What figure does the New York Times give for the 1993 sale?",
            options: [
              "About $32 million",
              "$67 million, which is the figure Black Enterprise gives for the same transaction",
              "Over $23 million, the annualised sales figure reported for the unit in 2009",
              "About $30 million, the sales figure in the sponsor's signed 1974 statement",
            ],
            correctIndex: 0,
            explanation:
              "The Times says Joan Johnson netted about $32 million, while Black Enterprise describes a $67 million stock swap.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "How does the memoir reconcile the two figures reported for the 1993 sale?",
            options: [
              "One is the deal, one is a seller's share",
              "By showing that the lower figure was an early offer later raised to the higher one",
              "By explaining that the difference is the value of the shares rather than the cash",
              "It does not, and simply repeats the higher of the two published figures",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the whole transaction was $67 million and that $32 million of it was hers, so the two published numbers describe different things.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What does Black Enterprise report an Operation PUSH official called for after the 1993 sale?",
            options: [
              "A boycott",
              "A federal investigation into the terms on which the company was sold",
              "A new tax on transactions transferring Black-owned firms to other owners",
              "A public share offering to keep the company in community ownership",
            ],
            correctIndex: 0,
            explanation:
              "Black Enterprise reports a call for a boycott, along with a statement from George Johnson Sr. about money no longer staying in the Black community.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Which company acquired the Gentle Treatment and Ultra Sheen brands in 1998?",
            options: [
              "Carson Inc.",
              "Wella AG, which acquired them at the end of 2000 rather than in 1998",
              "Ivax, which had bought the whole company five years earlier",
              "Procter & Gamble, which the New York Times names as the eventual buyer in 2004",
            ],
            correctIndex: 0,
            explanation:
              "The Justice Department's release records Carson Inc. acquiring the two brands from Johnson Products Co. Inc. in 1998.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What did the Justice Department require when L'Oreal bought Carson in 2000?",
            options: [
              "A divestiture of two brands",
              "That the Chicago plant stay open for at least a further five years",
              "That the combined company keep its African American management team in place",
              "That the price be reduced to reflect the competitive harm the deal would cause",
            ],
            correctIndex: 0,
            explanation:
              "It required L'Oreal to divest Gentle Treatment and Ultra Sheen, which it described as about 14 percent of retail relaxer-kit sales.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What share of retail relaxer-kit sales did the two divested brands represent?",
            options: [
              "About 14 percent",
              "About 50 percent, which is the share the deal as proposed would have given the buyer",
              "About 40 percent, the company's own share of the relaxer market in the late 1970s",
              "About 85 percent, the share the memoir says the company once held",
            ],
            correctIndex: 0,
            explanation:
              "About 14 percent, against the roughly 50 percent the deal as proposed would have given L'Oreal overall.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Who agreed in December 2000 to buy those brands and the Johnson Products name?",
            options: [
              "Wella AG",
              "Carson Inc., which had held the brands since acquiring them in 1998",
              "Procter & Gamble, buying directly from L'Oreal rather than through an intermediary",
              "Ivax, buying back the brands it had sold two years earlier",
            ],
            correctIndex: 0,
            explanation:
              "L'Oreal's own release records a contract to sell the Gentle Treatment and Ultra Sheen Supreme brands along with the Johnson Products name to Wella AG.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "For how long did L'Oreal agree to keep making the products at the Chicago plant?",
            options: [
              "Up to 12 months",
              "Up to five years, under a supply agreement covering the whole divested range",
              "Indefinitely, since the buyer had no manufacturing capacity of its own",
              "Not at all, because production moved with the brands on the day of the sale",
            ],
            correctIndex: 0,
            explanation:
              "The release says L'Oreal would make the products for Wella for up to 12 months at the Johnson plant in Chicago.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What is the evidential status of Procter & Gamble's 2003 route to Johnson Products in this course?",
            options: [
              "Reported, not documented here",
              "Verified from the company's own filings, which were read for this course",
              "Contradicted by the Justice Department release and therefore not used at all",
              "Confirmed by the sponsor's memoir, which gives the same date and route",
            ],
            correctIndex: 0,
            explanation:
              "The route through the purchase of Wella is reported rather than documented by anything read here, so the course attributes it rather than asserting it.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Who led the management team that bought the Johnson Products unit in 2009?",
            options: [
              "Two former Pro-Line executives",
              "Members of the founding family, buying the business back after sixteen years",
              "The management of Wella, which had held the brands since the end of 2000",
              "An investor group assembled by the company's original advertising agency",
            ],
            correctIndex: 0,
            explanation:
              "The 2009 report describes a buyer formed by two investment firms with an African American management team led by two former Pro-Line executives.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What annualised sales figure was reported for the Johnson Products unit in 2009?",
            options: [
              "Over $23 million",
              "About $40 million, the figure the Encyclopedia of Chicago gives for 1976",
              "About $67 million, the figure reported for the whole 1993 transaction",
              "About $12 million, the figure the memoir gives for the company's sales in 1971",
            ],
            correctIndex: 0,
            explanation:
              "The 2009 report gives annualised sales of over $23 million, and says the terms of the transaction were not disclosed.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What route does the memoir's epilogue give for the brands after 1993?",
            options: [
              "Ivax sold to L'Oreal in 1997",
              "Ivax sold to Carson Inc. in 1998, which L'Oreal then bought in 2000",
              "Ivax sold directly to Wella, which held the brands until Procter & Gamble bought it",
              "Ivax kept the brands until the management buyout of 2009",
            ],
            correctIndex: 0,
            explanation:
              "The epilogue says Ivax sold to L'Oreal in 1997 and that Wella bought brands Ivax divested. The government and company documents describe a different route.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Which company do the Justice Department and L'Oreal documents place between Ivax and L'Oreal?",
            options: [
              "Carson Inc.",
              "Wella AG, which those documents place before rather than after L'Oreal",
              "Procter & Gamble, which the New York Times names as the eventual owner",
              "Revlon, which had entered the relaxer market in the early 1970s",
            ],
            correctIndex: 0,
            explanation:
              "Carson acquired the brands in 1998 and L'Oreal acquired Carson in 2000, which makes the divestiture L'Oreal's rather than Ivax's.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Why does this course not use the New York Times line that Ivax sold the company to Procter & Gamble in 2004?",
            options: [
              "Two primary documents contradict it",
              "Because the Times later published a correction retracting that sentence",
              "Because the memoir gives a different date for the same transaction",
              "Because the course does not cite newspaper obituaries for any business fact",
            ],
            correctIndex: 0,
            explanation:
              "The Justice Department's 2000 release and L'Oreal's own release describe a route through Carson, L'Oreal and Wella, which that sentence does not fit.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What is still not established about Afro Sheen at the end of this section?",
            options: [
              "Whether it travelled with Ultra Sheen in 2000",
              "Whether it was ever sold outside the United States during the company's growth years",
              "Whether the brand name was owned by the company or by its advertising agency",
              "Whether the product was ever advertised during the programme it sponsored",
            ],
            correctIndex: 0,
            explanation:
              "Whether Afro Sheen went with Ultra Sheen through the 2000 divestiture, and who owns Johnson Products now, are not settled by anything read here.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "What is a divestiture?",
            options: [
              "A sale a company is required to make",
              "A voluntary decision to close a division rather than sell it to a competitor",
              "The transfer of a brand name without the business that produced it",
              "A purchase paid for in the buyer's shares rather than in cash",
            ],
            correctIndex: 0,
            explanation:
              "It is a sale required of a company, often by a competition regulator, as a condition of a larger purchase. The share-paid purchase is a stock swap.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The business around the show
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-partner-the-label-and-the-club",
      title: "14 · A show is a brand, and a brand throws off businesses",
      section: "Section 5 · The business around the show",
      body: `By the middle of the 1970s Soul Train was not one business. It was a cluster of them, and the trade record names most of the pieces.

| Business | What it was | Source |
|---|---|---|
| Don Cornelius Productions | The production company, credited in the 1974 special section and sold in 2008 | *Billboard*, 1974; *Variety*, 2016 |
| Soul Train Products, Inc. | A merchandising wing, described in 1972 as already selling ready to wear | *Billboard*, 1972 |
| The Soul Train Club | A night club in the North Beach area of San Francisco, co-owned with Dick Griffey and described in 1974 as breaking even | *Billboard*, 1974 |
| Soul Train Records | A label founded in 1975 and distributed by RCA | *Contemporary Black Biography* |
| The Soul Train Music Awards | An awards show launched in 1987, with the programme's distributor | *Encyclopedia of Television*; *Hollywood Reporter*, 2012 |

**The partner.** Dick Griffey was the programme's talent coordinator, and in the 1974 section he describes himself as Cornelius's "business partner" (Chapman, 1974). He was also co-owner of the club. The reference work records that he co-founded Soul Train Records, that the label folded after three years, and that he left to form SOLAR Records (Wankoff, n.d.). SOLAR's founding year and its later artist roster are reported in secondary summaries rather than established here, so this course does not state them.

**Why the cluster matters.** A television programme earns from advertising, and advertising is capped by how much time exists in an hour. Everything in the table above is an attempt to earn from the same audience without buying more airtime: sell them clothing, sell them records, sell them a night out, sell an event back to television. That is a brand strategy, and it is the same logic the 2016 buyer used when it described what it was purchasing, which section 7 reaches.

**What the trade record does not say.** It does not say what any of these earned. The club is described as breaking even, which is the only profitability statement in the set, and it comes from a tribute section. The label's end is dated only as after three years. No source read for this course states Cornelius's own income from the programme, or Griffey's share of anything.

**A useful habit.** When you read that somebody "built an empire", ask for the list. A list of named companies with dates and sources is a different kind of claim from a word like empire, and it is the only version you can check.

:::reveal What five businesses around Soul Train does the trade record name, and what was each one? ||| Don Cornelius Productions, the production company; Soul Train Products, a merchandising wing; the Soul Train Club, a San Francisco night club; Soul Train Records, a label distributed by RCA; and the Soul Train Music Awards, an event launched in 1987.

:::reveal Why does a television programme build businesses around itself rather than simply selling more advertising? ||| Because an hour contains a fixed amount of advertising time, so the only way to earn more from the same audience is to sell that audience something other than spots.

## Vocabulary
- **Merchandising**: selling goods that carry a programme's name, as a revenue source separate from advertising.
- **Distribution deal**: an arrangement in which a larger company handles getting a small label's records into shops.
- **Ancillary business**: a business built beside a main one to earn from the same audience or brand.
- **Profitability statement**: a claim about whether a business made money, which is worth far more than a claim about its size.

## Sources
Carlson, E. (2012, February 22). Magic Johnson mulling "Soul Train" revival. *The Hollywood Reporter*. https://www.hollywoodreporter.com/tv/tv-news/magic-johnson-soul-train-aspire-293797/
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Littleton, C. (2016, April 4). BET acquires "Soul Train" franchise from InterMedia Partners, Ron Burkle's Yucaipa. *Variety*. https://variety.com/2016/tv/news/soul-train-bet-don-cornelius-acquire-1201744886/
Shelton, M. (n.d.). Soul Train. In *Encyclopedia of Television*. Museum of Broadcast Communications. http://www.museum.tv/eotv/soultrain.htm
Sippel, J. (1972, August 26). "Soul Train's" 45-mkt. $1 mil backing. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1972/BB-1972-08-26.pdf
Wankoff, J. (n.d.). Cornelius, Don 1936-. In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cornelius-don-1936`,
    },
    {
      slug: "labels-as-suppliers-and-buyers",
      title: "15 · The record labels were on both sides of the deal",
      section: "Section 5 · The business around the show",
      body: `Record companies supplied Soul Train with performers and bought advertising on it. Being both a supplier and a customer is an unusual position, and it explains a good deal about how the programme worked.

**As suppliers.** In August 1972 Cornelius told *Billboard* that "Motown, Stax, Columbia, Atlantic, Mercury and UA have been most helpful" in providing talent (Sippel, 1972). Two years later he put the value of the arrangement from the other side: for many Black acts, he said, their only chance for national television exposure was Soul Train (Chapman, 1974). If that is right, the labels were not doing him a favour. They were using the one national outlet available to them.

**As customers.** *Billboard* reported in April 1973 that a Columbia promotion included spots on the programme (*Record label TV promotion*, 1973). In July 1973 it reported that Adam VIII, Ltd., headed by Roulette's Morris Levy, was running an eight-track series on the programme (Sippel, 1973). And the 1974 special section carries paid congratulatory advertisements from a long list of labels, among them CBS Records, A&M, London, Motown, Sussex, Buddah, Curtom, Scepter and Wand, Westbound and Eastbound, and Fantasy (Chapman, 1974).

**A marketplace hiding inside a tribute.** The same 1974 section carries a full-page advertisement from *Essence*, selling its readership to record companies on the figure of 3,277,000 Black women described as heavy purchasers of records (Chapman, 1974). Stop on that for a moment. A magazine bought space in a tribute to a television programme in order to sell its own audience to the advertisers reading it. The special section is not only a celebration. It is a trade floor.

**The Motown sequence, from two accounts.** The sponsor's memoir describes going to Motown before the national launch, being received by an executive who doubted the founder's interest, asking to see him directly, and being turned down: the programme had no track record, and an unproven concept was a risk for the label's artists. Johnson writes that he then hired and paid a performer of his own for the first episode (Johnson & Beard, 2025).

Set that beside the trade record. In August 1972, ten months after the launch, Cornelius names Motown first among the labels that had been most helpful (Sippel, 1972). In September 1974 Motown bought a congratulatory advertisement in the special section (Chapman, 1974). Nothing here contradicts anything. It is a sequence: a refusal before there was evidence, and a relationship once there was. The lesson is not that anyone was wrong. It is that a business decision has a date, and quoting it without one turns a moment into a character.

:::reveal In what two ways were record labels involved in Soul Train's business? ||| As suppliers of performers and as buyers of advertising on and around the programme, which put them on both sides of the same transaction.

:::reveal What does the Essence advertisement inside the 1974 tribute section show about what that section was? ||| That it was a trade floor as well as a celebration, with a magazine buying space in it to sell its own readership to the record companies reading it.

## Vocabulary
- **Exposure**: appearances that build an audience, treated here as a thing of value exchanged between parties.
- **Congratulatory advertisement**: an advertisement whose text praises a subject and whose purpose is to be seen by the industry reading it.
- **Readership figure**: a number a publication sells to advertisers, which is a claim made by the seller.
- **Dating a decision**: attaching a date to a business choice so that a later change of position reads as a sequence rather than a contradiction.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
*Record label TV promotion*. (1973, April 14). *Billboard*, 50. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1973/Billboard%201973-04-14.pdf
Sippel, J. (1972, August 26). "Soul Train's" 45-mkt. $1 mil backing. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1972/BB-1972-08-26.pdf
Sippel, J. (1973, July 21). TV promo firm boosting 8-track. *Billboard*, 4. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1973/Billboard%201973-07-21.pdf`,
    },
    {
      slug: "who-else-got-paid",
      title: "16 · Who else got something, and what the record will not say",
      section: "Section 5 · The business around the show",
      body: `Follow the value out from the programme and it reaches people who were never on its payroll.

**Performers.** In the 1974 special section Gladys Knight & the Pips wrote that the programme "has been a big help in building our career" (Chapman, 1974). That is a tribute page, so read it as a statement of their view rather than as a measurement. It is also consistent with Cornelius's own claim in the same section that the programme was the only national television available to many Black acts.

**Dancers.** The Television Academy's 2021 essay reports that many of the programme's dancers were themselves aspiring performers, and names several who went on to careers in music, film and television, including two who became part of a recording group and members of a dance troupe drawn from the show (Deggans, 2021). It is a personal essay, so the course reports it without quoting it and does not turn it into a count.

**A check worth doing here.** The *Contemporary Black Biography* entry places one of those performers in the wrong group, which the Television Academy essay corrects (Wankoff, n.d.; Deggans, 2021). This course does not print either name attached to a group, because the two sources disagree and neither is a primary record of who was signed to what. That is a small decision and it is the whole method: when two secondary sources disagree on a checkable fact and you have no primary source, the honest move is to say less.

**Advertising agencies.** Two firms held the sponsor's account across this period, and a third built its business partly on the same client. The reference work on Vince Cullers gives his agency billings of $2.5 million by 1973, a figure that is not tied to Johnson Products alone (*Cullers, Vince*, n.d.).

**An organisation.** In the 1974 section Jesse Jackson wrote that "We are glad he has used P.U.S.H. as a vehicle to express his social concern" (Chapman, 1974), and the reference work says Operation PUSH was regularly boosted on the programme (Wankoff, n.d.). Airtime given to a cause is a transfer of value, even when no money moves, and it belongs on the list.

**What the record will not tell you.** No source read for this course states what the syndicators earned on the programme, what Cornelius earned from it, or what Dick Griffey's share of the club or the label was worth. Those are not small gaps. They are the three numbers a business history would most want, and their absence is the honest ending of this section: the programme's revenue is documented from the buyer's side, in what advertisers spent, and almost nowhere from the seller's.

:::reveal Why does this lesson decline to print which recording group a former Soul Train dancer joined? ||| Because a reference work and a later essay disagree about it and neither is a primary record of who was signed to what, so the honest move is to say less.

:::reveal Which three figures would a business history most want here, and what does the record say about them? ||| What the syndicators earned, what Cornelius earned, and what Dick Griffey's share was worth. No source read for this course states any of the three.

## Vocabulary
- **Tribute page**: a paid or solicited page of praise, useful as evidence of who wanted to be associated with a subject.
- **Billings**: the total value of the advertising an agency places for its clients, which is not the same as its own income.
- **Transfer of value**: a benefit passed from one party to another without money changing hands.
- **Documented from one side**: a transaction recorded only by the buyer or only by the seller, leaving half the picture missing.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
*Cullers, Vince*. (n.d.). In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cullers-vince
Deggans, E. (2021, September 2). *Cool train running*. Television Academy. https://www.televisionacademy.com/features/news/features/cool-train-running
Wankoff, J. (n.d.). Cornelius, Don 1936-. In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cornelius-don-1936`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · The business around the show",
      section: "Section 5 · The business around the show",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was Don Cornelius Productions?",
            options: [
              "The programme's production company",
              "The firm that syndicated the programme to stations from 1972 onward",
              "The merchandising wing that sold clothing carrying the programme's name",
              "The record label the programme's talent coordinator founded in 1975",
            ],
            correctIndex: 0,
            explanation:
              "It is credited in the 1974 special section, appears in the reference work with a Sunset Boulevard address, and was sold in 2008.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What was Soul Train Products, Inc.?",
            options: [
              "A merchandising wing",
              "The production company that made the programme's national episodes in Hollywood",
              "The label that released records by artists who had appeared on the programme",
              "The company that bought the brand and the library in 2008",
            ],
            correctIndex: 0,
            explanation:
              "Billboard described it in 1972 as a merchandising wing already selling ready to wear, which is a business earning from the brand rather than from airtime.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "Where was the Soul Train Club?",
            options: [
              "In San Francisco",
              "In Chicago, close to the station that had carried the local programme",
              "In Los Angeles, next to the studio where the national episodes were taped",
              "In New York, where most of the record labels had their head offices",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section places it in the North Beach area of San Francisco, co-owned with the programme's talent coordinator.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "How does the 1974 section describe the club's finances?",
            options: [
              "Breaking even",
              "Highly profitable, returning more than the programme itself in its first full year",
              "Losing money, which is why it closed before the section went to press",
              "Not discussed at all, since the section printed no financial detail",
            ],
            correctIndex: 0,
            explanation:
              "Breaking even is the only profitability statement in the whole cluster of businesses, and it comes from a tribute section.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "In what year was Soul Train Records founded?",
            options: [
              "1975",
              "1971, at the same time the programme began its national syndicated run",
              "1987, the same year the programme's awards show was launched",
              "1985, when a new distributor took over syndication of the programme",
            ],
            correctIndex: 0,
            explanation:
              "The reference work dates the label to 1975 and says it was distributed by RCA.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "Which company distributed Soul Train Records?",
            options: [
              "RCA",
              "Motown, whose founder had declined to supply artists before the national launch",
              "Columbia, which also bought advertising spots on the programme in 1973",
              "Tribune Entertainment, which distributed the programme itself from 1985",
            ],
            correctIndex: 0,
            explanation:
              "The reference work says the label was distributed by RCA. Tribune Entertainment distributed the television programme, which is a different thing.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "In what year were the Soul Train Music Awards launched?",
            options: [
              "1987",
              "1975, the year the programme's record label was founded",
              "1971, the year the programme began its national syndicated run",
              "2009, the year a cable network began carrying the awards",
            ],
            correctIndex: 0,
            explanation:
              "1987, with the programme's distributor involved. A reference work says 1986 in one place and 1987 in another, and the course uses the corroborated year.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What role did Dick Griffey hold on the programme?",
            options: [
              "Talent coordinator",
              "Executive producer, credited on every national episode from 1971 onward",
              "Syndicator, responsible for clearing the programme in individual markets",
              "Account executive at the sponsor's advertising agency in Chicago",
            ],
            correctIndex: 0,
            explanation:
              "He was the talent coordinator, and in the 1974 section he also describes himself as Cornelius's business partner.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "How does Griffey describe his relationship with Cornelius in the 1974 section?",
            options: [
              "As his business partner",
              "As his employee, working under contract to the production company",
              "As a supplier, booking acts for a fee on each episode he filled",
              "As a competitor, since he was building a rival programme of his own",
            ],
            correctIndex: 0,
            explanation:
              "He uses the words business partner. It is his own description of the relationship, printed in a tribute section.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What does the reference work say happened to Soul Train Records?",
            options: [
              "It folded after three years",
              "It was sold to RCA, which continued releasing records under the same name",
              "It became the foundation of the programme's later awards show",
              "It was absorbed into the production company when the programme moved distributors",
            ],
            correctIndex: 0,
            explanation:
              "The entry says the label folded after three years, when Griffey left to form a label of his own.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "Why does this course decline to state SOLAR Records' founding year?",
            options: [
              "It is reported rather than established",
              "Because the label is outside the period this course covers",
              "Because two primary documents give conflicting years for the same event",
              "Because naming it would identify a private individual by name",
            ],
            correctIndex: 0,
            explanation:
              "SOLAR's founding year and its later roster appear in secondary summaries rather than in anything read for this course, so they are not asserted.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "Why does a television programme build businesses around itself?",
            options: [
              "An hour holds a fixed amount of advertising",
              "Because regulators cap the revenue a single programme is permitted to earn",
              "Because a syndicator takes a share of advertising revenue but not of other income",
              "Because sponsors require a programme to diversify before renewing a contract",
            ],
            correctIndex: 0,
            explanation:
              "Advertising revenue is capped by the time available, so earning more from the same audience means selling that audience something other than spots.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What is an ancillary business?",
            options: [
              "One built beside a main business to earn from the same brand",
              "A business a company is required to sell off by a competition regulator",
              "A second company formed to hold the assets of the first for tax purposes",
              "A supplier that depends on a single customer for most of its revenue",
            ],
            correctIndex: 0,
            explanation:
              "The merchandising arm, the club and the label are all attempts to earn from the same audience without buying more airtime.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What habit does this lesson recommend when you read that somebody built an empire?",
            options: [
              "Ask for the list",
              "Compare the claim against the size of competitors in the same industry",
              "Look for the year the word empire was first used about that person",
              "Treat the claim as a superlative and discard it entirely",
            ],
            correctIndex: 0,
            explanation:
              "A list of named companies with dates and sources is a checkable claim. The word empire is not.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What does the trade record say about what these businesses earned?",
            options: [
              "Almost nothing",
              "That together they earned more than the programme's advertising revenue by 1974",
              "That each one returned a profit within its first two years of trading",
              "That the merchandising wing was the most profitable of the group",
            ],
            correctIndex: 0,
            explanation:
              "The only profitability statement in the set is that the club was breaking even, and that comes from a tribute section.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "Which labels did Cornelius name in 1972 as having been most helpful in providing talent?",
            options: [
              "Motown, Stax, Columbia, Atlantic, Mercury and UA",
              "CBS, A&M, London, Sussex, Buddah and Curtom, the labels in the 1974 tribute pages",
              "RCA and Roulette, the two companies with distribution ties to the programme",
              "Essence and Ebony, the magazines that advertised alongside the record companies",
            ],
            correctIndex: 0,
            explanation:
              "That is his own list, given to Billboard in August 1972. The second list is of congratulatory advertisers two years later.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What did Cornelius say in 1974 about national television for many Black acts?",
            options: [
              "Soul Train was their only chance at it",
              "That the networks had begun booking them regularly by the middle of the decade",
              "That local stations gave them more exposure than any national programme could",
              "That record labels preferred radio and declined television appearances",
            ],
            correctIndex: 0,
            explanation:
              "He said that for many Black acts their only chance for national television exposure was Soul Train, which reframes the labels as users rather than benefactors.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "If that claim is right, how should the labels' cooperation be read?",
            options: [
              "As using the one outlet available",
              "As a favour done for a struggling programme at no benefit to themselves",
              "As a contractual obligation imposed by the programme's syndicator",
              "As evidence that the labels controlled which performers appeared",
            ],
            correctIndex: 0,
            explanation:
              "If the programme was the only national television open to their artists, supplying it was in the labels' own interest, not a kindness.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What did Billboard report in April 1973 about a Columbia promotion?",
            options: [
              "It included spots on the programme",
              "That the label had bought a full half-hour of the programme's advertising time",
              "That the label had withdrawn its artists from the programme over a fee dispute",
              "That the label was launching a competing programme for the following season",
            ],
            correctIndex: 0,
            explanation:
              "Billboard reported that the promotion included spots on the television programme, which puts a supplier of talent on the advertising side as well.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What did Billboard report in July 1973 about Adam VIII, Ltd.?",
            options: [
              "It ran an eight-track series on the programme",
              "That it had acquired a stake in the programme's merchandising company",
              "That it was distributing the programme to stations in eight additional markets",
              "That it had signed the programme's dancers to a recording contract",
            ],
            correctIndex: 0,
            explanation:
              "Billboard reported an eight-track series on the television show, run by a firm headed by Morris Levy of Roulette.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What kind of advertisements did record labels buy in the 1974 special section?",
            options: [
              "Congratulatory advertisements",
              "Classified listings offering artists for booking on future episodes",
              "Coupons redeemable against records at shops in the programme's markets",
              "Recruitment notices seeking promotion staff in the programme's markets",
            ],
            correctIndex: 0,
            explanation:
              "Paid congratulatory pages, whose text praises the subject and whose purpose is to be seen by the industry reading the section.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What did Essence advertise in the 1974 special section?",
            options: [
              "Its own readership, to record companies",
              "Its coverage of the programme's dancers and their fashions that season",
              "Subscriptions, offered at a discount to the programme's viewers",
              "A joint venture with the programme to produce a fashion special",
            ],
            correctIndex: 0,
            explanation:
              "It ran a full page selling its readership to record companies, on a figure of 3,277,000 Black women described as heavy purchasers of records.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What readership figure did that Essence advertisement use?",
            options: [
              "3,277,000",
              "1,100, the number of hours of archival footage sold with the brand in 2008",
              "3,000,000 exactly, rounded for use in advertising to the record trade",
              "500,000, the circulation the magazine reported at its founding in 1970",
            ],
            correctIndex: 0,
            explanation:
              "The figure is 3,277,000 Black women described as heavy purchasers of records. It is a number the seller supplies, which is worth remembering.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What does the Essence advertisement show about the 1974 special section?",
            options: [
              "It was a trade floor as well as a tribute",
              "That the magazine had a financial interest in the programme itself",
              "That the section was produced independently of the programme's owners",
              "That record companies were refusing to advertise in Black-owned magazines",
            ],
            correctIndex: 0,
            explanation:
              "A magazine bought space in a tribute to a television programme in order to sell its own audience to the advertisers reading it.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What does the sponsor's memoir say happened when he approached Motown before the national launch?",
            options: [
              "Its founder declined",
              "Its founder agreed immediately and supplied the acts for the first four episodes",
              "Its founder offered to co-produce the programme in exchange for a share",
              "The company refused to receive him and he never met anyone there",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says the founder declined because the programme had no track record, and that an unproven concept was a risk for the label's artists.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What reason does the memoir give for that refusal?",
            options: [
              "The programme had no track record",
              "That the label's artists were already committed to a competing network programme",
              "That the programme's sponsor was a competitor of one of the label's own advertisers",
              "That the label objected to a hair-care company sponsoring a music programme",
            ],
            correctIndex: 0,
            explanation:
              "The memoir gives the risk to the label's artists from an unproven concept, which is an ordinary commercial reason rather than a personal one.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What does the memoir say the sponsor did about performers for the first episode?",
            options: [
              "He hired and paid one himself",
              "He postponed the launch until a label agreed to supply acts",
              "He used only the studio dancers, with recorded music and no live performance",
              "He asked the station to provide performers from its own local programmes",
            ],
            correctIndex: 0,
            explanation:
              "The memoir says he brought in and paid a performer of his own, which is the sponsor funding content as well as advertising.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "Where does Motown appear in the trade record ten months after the national launch?",
            options: [
              "First on the list of labels that had been most helpful",
              "In a Billboard report of a dispute with the programme over artist fees",
              "As the buyer of the programme's second half-hour of advertising time",
              "Nowhere, since the label did not deal with the programme until after 1974",
            ],
            correctIndex: 0,
            explanation:
              "In August 1972 Cornelius named Motown first among the labels that had been most helpful in providing talent.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What did Motown do in the September 1974 special section?",
            options: [
              "Bought a congratulatory advertisement",
              "Published a statement declining any association with the programme",
              "Announced a distribution deal with the programme's own record label",
              "Purchased a stake in the programme's merchandising company",
            ],
            correctIndex: 0,
            explanation:
              "Motown is among the labels that bought congratulatory advertisements in the 1974 section, three years after the refusal the memoir describes.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What does the Motown sequence illustrate about quoting a business decision?",
            options: [
              "A decision has a date",
              "That later statements always cancel earlier ones on the same subject",
              "That a refusal recorded in a memoir cannot be checked against any document",
              "That participants change their accounts once a venture becomes successful",
            ],
            correctIndex: 0,
            explanation:
              "A refusal before there was evidence and a relationship once there was are a sequence, not a contradiction. Quoting either without its date turns a moment into a character.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What is a congratulatory advertisement?",
            options: [
              "A paid page of praise aimed at the industry reading it",
              "A free notice a magazine prints when one of its advertisers reaches a milestone",
              "An advertisement placed by a programme to thank the stations that carry it",
              "A discount offered to advertisers who renew for a second year",
            ],
            correctIndex: 0,
            explanation:
              "Its text praises the subject and its purpose is visibility among the trade readers of the publication, which is why such pages cluster in special sections.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What did Gladys Knight & the Pips write in the 1974 special section?",
            options: [
              "That it had helped build their career",
              "That they had been paid a standard union fee for each appearance they made",
              "That they had appeared more often than any other act on the programme",
              "That they had declined other television offers in order to appear on it",
            ],
            correctIndex: 0,
            explanation:
              "They wrote that it had been a big help in building their career. It is a tribute page, so it records their view rather than measuring anything.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "How should a tribute page be read as evidence?",
            options: [
              "As evidence of who wanted the association",
              "As an independent measurement of the subject's commercial performance",
              "As a legal statement, since a signed tribute carries the signer's liability",
              "As worthless, since no paid page can contain any usable information",
            ],
            correctIndex: 0,
            explanation:
              "It is useful evidence of who wanted to be associated with a subject, and of what they were willing to say in print, not of the effect they describe.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "What does the Television Academy essay report about the programme's dancers?",
            options: [
              "Many were themselves aspiring performers",
              "That all of them were paid a weekly retainer by the production company",
              "That they were selected by the sponsor rather than by the production staff",
              "That none of them went on to careers in entertainment after leaving the show",
            ],
            correctIndex: 0,
            explanation:
              "The essay reports that many were aspiring performers and names several who went on to careers in music, film and television.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "Why does this course report the Television Academy essay without quoting it?",
            options: [
              "It was read only through a summarising tool",
              "Because the essay is still in copyright and cannot be quoted at any length",
              "Because its author was employed by the programme and is not independent",
              "Because the course quotes only sources published before 1980",
            ],
            correctIndex: 0,
            explanation:
              "The course quotes directly only from sources read in their own text. Anything read through a summarising fetch is reported in the course's own words.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "Why does this lesson decline to say which recording group a former dancer joined?",
            options: [
              "Two secondary sources disagree",
              "Because naming the group would identify a private individual by name",
              "Because the group's own records are sealed under a confidentiality agreement",
              "Because the fact is irrelevant to a course about the programme's business",
            ],
            correctIndex: 0,
            explanation:
              "A reference work and a later essay disagree, and neither is a primary record of who was signed to what, so the honest move is to say less.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "What billings figure does the reference work give for Vince Cullers Advertising by 1973?",
            options: [
              "$2.5 million",
              "$2.5 billion, which would have made it the largest agency in the United States",
              "Over a million dollars, the figure Billboard gives for a year of the sponsor's airtime",
              "$200,000, the salary the memoir says was set for the sponsor's own post",
            ],
            correctIndex: 0,
            explanation:
              "The entry gives billings of $2.5 million by 1973, and that figure is not tied to a single client.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "What are billings, in advertising?",
            options: [
              "The value of advertising an agency places for clients",
              "The fees an agency charges its clients for creative work each year",
              "The profit an agency reports after paying for the media it has bought",
              "The amount a client owes an agency at the end of a campaign",
            ],
            correctIndex: 0,
            explanation:
              "Billings measure what an agency places, not what it keeps, so a billings figure is not a statement about an agency's income.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "What did Jesse Jackson write in the 1974 special section?",
            options: [
              "That the programme had been used as a vehicle for social concern",
              "That the programme should be boycotted until its ownership changed hands",
              "That his organisation had invested in the programme's merchandising company",
              "That the networks should be compelled to carry the programme nationally",
            ],
            correctIndex: 0,
            explanation:
              "He wrote that they were glad the programme's creator had used the organisation as a vehicle to express his social concern.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "What does the reference work say about Operation PUSH and the programme?",
            options: [
              "It was regularly boosted on the show",
              "That it bought advertising time on the programme every week from 1972",
              "That it owned a minority share of the programme's production company",
              "That it organised a protest against the programme's national sponsor",
            ],
            correctIndex: 0,
            explanation:
              "The entry says the organisation was regularly boosted on Soul Train, which is airtime given to a cause.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "Why does this lesson count airtime given to an organisation as a business fact?",
            options: [
              "It is a transfer of value",
              "Because charitable airtime is deductible against a broadcaster's tax liability",
              "Because regulators required every syndicated programme to carry public service time",
              "Because the organisation paid for the time at a discounted rate",
            ],
            correctIndex: 0,
            explanation:
              "Value passed from one party to another even though no money changed hands, which belongs on a list of who got something from the programme.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "Which three figures does this lesson say a business history would most want?",
            options: [
              "The syndicators', Cornelius's and Griffey's earnings",
              "The sponsor's sales, the programme's ratings and the number of markets it reached",
              "The cost of each taping, the price of a spot and the size of the studio audience",
              "The club's revenue, the label's sales and the merchandising arm's profit",
            ],
            correctIndex: 0,
            explanation:
              "What the syndicators earned, what Cornelius earned, and what Griffey's share was worth. No source read for this course states any of the three.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "From which side is the programme's revenue documented?",
            options: [
              "The buyer's side",
              "The seller's side, through the production company's own annual accounts",
              "Both sides equally, through the trade press and the company filings together",
              "Neither, since no figure of any kind survives from the period",
            ],
            correctIndex: 0,
            explanation:
              "It is documented in what advertisers spent and almost nowhere in what the programme received, which is half a picture and should be described as half.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "What does it mean that a transaction is documented from one side only?",
            options: [
              "Half the picture is missing",
              "That the transaction did not actually take place as described",
              "That the missing side can be calculated from the side that survives",
              "That the surviving record is unreliable and should not be used",
            ],
            correctIndex: 0,
            explanation:
              "A record kept only by the buyer or only by the seller leaves the other half unknown, and saying so is more useful than estimating it.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "What is merchandising, as this section uses the word?",
            options: [
              "Selling goods that carry a programme's name",
              "Arranging the display of products on a retailer's shelves and aisles",
              "Selling a programme to stations in markets it does not yet reach",
              "Buying advertising time inside a programme on behalf of a client",
            ],
            correctIndex: 0,
            explanation:
              "Goods carrying the programme's name, sold as a revenue source separate from advertising. Soul Train Products was described as already selling ready to wear in 1972.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What is a distribution deal, for a record label?",
            options: [
              "A larger company handles getting its records into shops",
              "An agreement to sell the label outright once it reaches a set level of sales",
              "A contract under which a label supplies artists to a television programme",
              "An arrangement in which a label pays a retailer for shelf position",
            ],
            correctIndex: 0,
            explanation:
              "A small label makes the records and a larger one gets them into shops, which is what RCA did for the programme's label.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What is exposure, as this section treats it?",
            options: [
              "Appearances that build an audience, exchanged as value",
              "The share of a programme's viewers who belong to an advertiser's target group",
              "The risk a sponsor takes when it funds an unproven programme",
              "The number of markets in which a programme has cleared time",
            ],
            correctIndex: 0,
            explanation:
              "It is treated as a thing of value passing between parties, which is why acts, labels and an organisation all appear on the list of who got something.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What makes a readership figure different from a measurement?",
            options: [
              "It is a claim made by the seller",
              "It counts households rather than individual readers of a publication",
              "It is audited annually by the publication's own advertising agency",
              "It can only be published once a magazine has been in print for five years",
            ],
            correctIndex: 0,
            explanation:
              "A publication selling space supplies the number it wants buyers to use, which is worth noting before repeating the figure as a fact.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What does this section say about the claim that the programme made careers?",
            options: [
              "The evidence for it is participants' own statements",
              "That it is confirmed by contract records held by the production company",
              "That it is contradicted by the recording industry's own sales data",
              "That no source of any kind makes the claim about anyone",
            ],
            correctIndex: 0,
            explanation:
              "A tribute page from one act and a later essay about the dancers are statements of view, and the course reports them as such rather than as measurement.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "Why is the programme's cluster of businesses relevant to the 2016 sale in section 7?",
            options: [
              "The buyer described the same kind of revenue",
              "Because the buyer acquired each of those businesses along with the programme",
              "Because the merchandising company was the only asset that survived to 2016",
              "Because the awards show was the only part of the cluster ever sold",
            ],
            correctIndex: 0,
            explanation:
              "The 2016 buyer described live events and consumer products as revenue opportunities, which is the same logic the 1970s cluster followed.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What does the reference work give as Don Cornelius Productions' address?",
            options: [
              "An address on Sunset Boulevard",
              "The station's Chicago studio in the Financial Exchange Building",
              "The Metromedia lot where the national episodes were recorded",
              "A post office box in Omaha, shared with the programme's syndicator",
            ],
            correctIndex: 0,
            explanation:
              "The entry places the company at a Sunset Boulevard address, which is a small detail that makes the company traceable in other records.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "In which year was Don Cornelius Productions sold?",
            options: [
              "2008",
              "2016, when the brand and library were bought by a cable network division",
              "2011, when investors took a stake in the parent company that held the library",
              "1987, the year the programme's awards show was launched",
            ],
            correctIndex: 0,
            explanation:
              "Variety's 2016 report says he sold the production company in 2008. The 2011 and 2016 events concern later owners of the brand.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "What is a profitability statement, and why does this lesson value it?",
            options: [
              "A claim about whether a business made money",
              "A regulator's certification that a company's accounts are accurate",
              "A projection of what a business expects to earn in a coming year",
              "A public statement of how much revenue a business collected",
            ],
            correctIndex: 0,
            explanation:
              "It is worth far more than a claim about size, and in this whole cluster of businesses the only one on record is that the club was breaking even.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "Which firm is named in this course as holding the sponsor's account before Bozell & Jacobs?",
            options: [
              "Niefeld, Paley & Kuhn",
              "Burrell McBain, the Black-owned agency the memoir says took the account later",
              "Vince Cullers Advertising, which the memoir credits with naming Afro Sheen",
              "Media Affiliates, the Omaha firm that syndicated the programme in 1972",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section names Niefeld, Paley & Kuhn as the agency that made the introduction and says it had since merged with Bozell & Jacobs.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "Is the billings figure for Vince Cullers Advertising attributable to the sponsor alone?",
            options: [
              "No",
              "Yes, because the agency handled no other account of any size in that period",
              "Yes, because the reference work states that the client supplied all of it",
              "Yes, because billings by definition measure a single client's spending",
            ],
            correctIndex: 0,
            explanation:
              "The reference work gives the agency's billings without tying them to one client, so the figure cannot be read as the sponsor's spending.",
            sourceLessonSlug: "who-else-got-paid",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The copy
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-the-1973-trade-press-shows",
      title: "17 · What a network did in March 1973, from the pages of the week",
      section: "Section 6 · The copy",
      body: `In March 1973 a network put a similar programme on the air. Most retellings of what happened next run on memory. This lesson runs on three pages printed at the time.

**17 March 1973, *Billboard*.** "ABC-TV kicked off the first of its once-per-month soul shows, alternating with Dick Clark's longtime 'Bandstand,' Saturday (10). Shows, which are produced by Super Soul Productions, are already taped for three months, with a cast that includes: Gladys Knight and the Pips; Eddie Kendricks, the Sylvers, Rufus Thomas, Ronnie Dyson and Malo ... Host is Buster Jones" (*ABC-TV soul sub for Clark*, 1973). Note what is missing: the story gives no title for the programme.

**24 March 1973, *Record World*.** Its column reports "Buster Jones of KGFJ who has hooked up with Dick Clark, who has produced the show 'Soul' shown on the ABC network. His first show was seen Saturday (10) with the second two weeks from that date" (*R&B column*, 1973).

**14 April 1973, *Billboard*.** A photograph caption: "BUSTER JONES (right), host of the ABC-TV special 'Soul Unlimited,' talks with Ronnie Dyson ... during taping of program. Show will be aired May 5" (*Soul sauce*, 1973).

**What those three pages settle.**

| Question | Answer from print |
|---|---|
| First broadcast | Saturday 10 March 1973, in both trade papers |
| Host | Buster Jones, a disc jockey at KGFJ in Los Angeles |
| Title | Not given in March; printed as *Soul Unlimited* by 14 April |
| Slot | Alternating with an established Saturday programme |

The date matters because a common retelling gives a premiere later in March. On the evidence of two independent trade papers printed within a fortnight of the event, that later date is at most the second broadcast.

**The business shape of the move.** Read what the network did as a business decision rather than an insult. It did not create a new hour, did not seek new clearances and did not build a new franchise. It alternated a second programme into a slot an existing franchise already held. That is the cheapest possible response to a competitor: it borrows the incumbent's time period, its production relationship and its audience habit. A syndicated programme cannot answer in kind, because it has no slot of its own to lend.

:::reveal On what date did the network's soul programme first go to air, and how is that established? ||| Saturday 10 March 1973, reported independently by Billboard on 17 March and by Record World on 24 March, both within a fortnight of the broadcast.

:::reveal Why is alternating a new programme into an existing slot the cheapest way for a network to answer a competitor? ||| Because it requires no new hour, no new clearances and no new franchise. It borrows the incumbent programme's time period, production relationship and audience habit.

## Vocabulary
- **Slot**: a fixed position in a schedule, which is the scarce thing a network controls and a syndicated programme does not.
- **Alternating**: two programmes sharing one slot on different weeks.
- **Incumbent**: the programme already holding a time period, whose habit and clearances a new entrant can borrow.
- **Caption evidence**: a fact established by a photograph's caption, which is often the earliest place a new title appears in print.

## Sources
*ABC-TV soul sub for Clark*. (1973, March 17). *Billboard*, 24. https://www.worldradiohistory.com/hd2/IDX-Business/Music/Billboard-Index/IDX/1973/1973-03-17-Billboard-Page-0024.pdf
*R&B column*. (1973, March 24). *Record World*, 46. https://www.worldradiohistory.com/Archive-All-Music/Record-World/70s/73/RW-1973-03-24.pdf
*Soul sauce* [Photo caption]. (1973, April 14). *Billboard*, 26. https://www.worldradiohistory.com/hd2/IDX-Business/Music/Billboard-Index/IDX/1973/1973-04-14-Billboard-Page-0026.pdf`,
    },
    {
      slug: "where-the-1973-sources-disagree",
      title: "18 · Two trade papers, two different programmes",
      section: "Section 6 · The copy",
      body: `The two trade papers that reported the same broadcast disagree about two facts, and neither disagreement is resolved by anything read for this course.

| Question | *Billboard*, 17 March 1973 | *Record World*, 24 March 1973 |
|---|---|---|
| How often | Once per month | The second show two weeks after the first |
| Who produced it | Super Soul Productions | Dick Clark |

Whether Super Soul Productions was a company connected to Clark is not established here. If it was, the two reports are compatible and one is naming the corporate producer while the other names the person. If it was not, they are describing different arrangements. The course does not guess, and files the question.

**The only contemporaneous public response found.** On 12 May 1973 the *Record World* columnist Dede Dabney wrote: "Opinions have flared with reference to the new black show entitled 'Soul Unlimited.' There are many black oriented variety shows but none comparable to 'Soul Train' ... why is it necessary for veteran Dick Clark, whose ratings for American Bandstand have allegedly gone down considerably since the inception of 'Soul Train,' to join in? ... The most disturbing factor is that Clark hired the talents of Buster Jones, seemingly a direct attempt at the age old situation, playing black against black. Network responsibility is a necessity in this serious situation" (Dabney, 1973).

**Read the column carefully, because it is doing three different things.** It reports that opinions have flared, which is a claim about other people. It makes a comparative judgment about the programmes. And it passes on a ratings claim with the word *allegedly* attached, which is the columnist telling you she has not verified it. A reader who quotes "ratings for American Bandstand have gone down considerably since the inception of Soul Train" without that word has upgraded somebody else's hedge into a fact, which is exactly the move section 1 warned about.

**What this column is and is not.** It is a contemporaneous record that a controversy existed in May 1973, in the trade press, and that at least one columnist framed it as a network hiring a Black host to compete against a Black-owned programme. It is not evidence of what the network intended, what the audience did, or how the programme ended. Those are three separate questions and the next lesson keeps them separate.

:::reveal On what two facts do the two trade papers disagree about the 1973 network programme? ||| How often it ran, monthly in Billboard and every two weeks by Record World's account, and who produced it, Super Soul Productions in Billboard and Dick Clark in Record World.

:::reveal What does the word "allegedly" do in the May 1973 Record World column's ratings claim? ||| It marks the claim as unverified by the columnist, so anybody who repeats the sentence without it has turned someone else's hedge into an assertion.

## Vocabulary
- **Corporate producer**: the company credited with making a programme, which may not be the person the press names.
- **Contemporaneous controversy**: evidence that a dispute existed at a given date, which is different from evidence about who was right.
- **Upgrading a hedge**: repeating a hedged claim without its hedge, so that a reported rumour becomes a stated fact.
- **Comparative judgment**: a writer's opinion that one thing is better than another, which is not a measurement.

## Sources
*ABC-TV soul sub for Clark*. (1973, March 17). *Billboard*, 24. https://www.worldradiohistory.com/hd2/IDX-Business/Music/Billboard-Index/IDX/1973/1973-03-17-Billboard-Page-0024.pdf
Dabney, D. (1973, May 12). Issues and answers [R&B column]. *Record World*, 36, 38. https://www.worldradiohistory.com/Archive-All-Music/Record-World/70s/73/RW-1973-05-12.pdf
*R&B column*. (1973, March 24). *Record World*, 46. https://www.worldradiohistory.com/Archive-All-Music/Record-World/70s/73/RW-1973-03-24.pdf`,
    },
    {
      slug: "why-it-ended-stays-open",
      title: "19 · Why it ended is not settled, and here is what would settle it",
      section: "Section 6 · The copy",
      body: `The network programme did not last. Why it stopped is the one question this course leaves open on purpose, because the evidence to close it has not been read.

**What was searched, and what was not found.** For the brief behind this course, the text layers of 33 weekly issues of *Billboard* from 13 January to 25 August 1973, 35 issues of *Broadcasting* from 1 January to 27 August 1973, and 21 issues of *Record World* from 24 February to 14 July 1973 were searched. None of them yielded the network's own position, the number of episodes, a last air date, or any 1973 report of a protest to the network. *Broadcasting*'s report of the network's autumn Saturday line-up on 16 April 1973 names the established programme only, and its 18 June 1973 profile of Clark lists his programmes without this one. Those are absences. An absence in a scanned text search is not evidence of a cause, because a scan can garble a word and a trade paper does not print everything.

**What was not searchable at all.** *Jet* was not searched. Every attempt to reach it through Google Books was refused.

**The account that circulates, and whose it is.** The *Contemporary Black Biography* entry on Cornelius describes the ending, citing a *Rolling Stone* article of 7 June 1973 that was not read for this course. According to that entry, Jesse Jackson told *Rolling Stone* that Soul Train's success had partially been at the expense of *American Bandstand* and that Soul Train had consistently outrated and overshadowed it; that Clark first recruited Soul Train dancers for *Bandstand* and then produced the rival programme; that a *Rolling Stone* correspondent reported Cornelius calling Clark's action an overt attempt to seize control of Black-oriented television; and that Clark and Cornelius discussed the matter, after which Clark dropped the programme and offered to co-produce specials with him (Wankoff, n.d.). Count the layers: this course is reporting a reference work reporting a magazine reporting what people said. Nothing in that chain is asserted here.

**The sponsor's version, with his own hedge.** George E. Johnson writes that the programme was a knockoff, that it did not last long, and then introduces what follows with the words "Rumor has it" before describing a threatened boycott of the network (Johnson & Beard, 2025). He is telling you himself that he does not know. A participant flagging his own uncertainty is worth more than a confident secondhand sentence, and it is still not evidence.

**What a contemporaneous participant did say.** In the 1974 special section Clarence Avant describes trying to get the networks to carry Soul Train and being refused (Chapman, 1974). He does not mention the rival programme. A 2019 documentary is reported to contain a later recollection by him about the network, which was not viewed for this course and is therefore not used.

**What would settle it.** The *Rolling Stone* issue of 7 June 1973, read directly rather than through a reference work. The June 1973 issues of *Jet*. A network schedule or trade listing showing a last broadcast date. Until one of those is in hand, the honest sentence is the one this lesson ends with: the programme began on 10 March 1973, drew a trade-press objection in May, and stopped, and this course does not know why.

:::reveal How many layers of reporting stand between this course and Jesse Jackson's reported 1973 remarks about the rival programme? ||| Three. This course reports a reference work, which reports a Rolling Stone article, which reports what people said. The article itself was not read.

:::reveal What three things would settle why the 1973 network programme ended? ||| The 7 June 1973 Rolling Stone read directly, the June 1973 issues of Jet, and a network schedule or trade listing giving a last broadcast date.

## Vocabulary
- **Absence of evidence**: finding nothing in a search, which is not the same as finding that nothing happened.
- **Chain of attribution**: the sequence of sources between a reader and an original statement, each of which can lose or change something.
- **Self-flagged rumour**: an account whose teller marks it as unverified, which is more useful than a confident claim with no source.
- **Open question**: a question a course declines to answer, naming the document that would answer it.

## Sources
Chapman, A. (1974, September 28). Soul Train [Special section]. *Billboard*, ST-3 to ST-18. https://www.worldradiohistory.com/Archive-All-Music/Billboard/70s/1974/Billboard%201974-09-28.pdf
Johnson, G. E., & Beard, H. (2025). *Afro Sheen: How I revolutionized an industry with the Golden Rule, from Soul Train to Wall Street*. Little, Brown and Company.
Wankoff, J. (n.d.). Cornelius, Don 1936-. In *Contemporary Black Biography*. Encyclopedia.com. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/cornelius-don-1936`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · The copy",
      section: "Section 6 · The copy",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "On what date did the network's soul programme first go to air?",
            options: [
              "Saturday 10 March 1973",
              "Saturday 24 March 1973, the date most later retellings give for the premiere",
              "Saturday 5 May 1973, the date a Billboard caption gives for a coming broadcast",
              "Saturday 12 May 1973, the date of the trade column objecting to the programme",
            ],
            correctIndex: 0,
            explanation:
              "Billboard on 17 March and Record World on 24 March both give Saturday the tenth, each within a fortnight of the broadcast.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "How is the first broadcast date established?",
            options: [
              "Two trade papers reported it independently",
              "By a network press release reprinted in the trade papers of the following week",
              "By a reference work citing a magazine article published in June that year",
              "By the recollection of the programme's host, given many years afterward",
            ],
            correctIndex: 0,
            explanation:
              "Billboard and Record World each reported it separately within two weeks, which is the strongest kind of evidence this section has.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "Who hosted the network programme?",
            options: [
              "Buster Jones",
              "Dick Clark, who also hosted the established programme it alternated with",
              "Don Cornelius, hired by the network after the syndicated show was refused",
              "Ronnie Dyson, who appeared as a performer during one of the tapings",
            ],
            correctIndex: 0,
            explanation:
              "Both trade papers name Buster Jones as host. Dyson appears in the caption as a performer being interviewed, not as the host.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "Where did the host work as a disc jockey?",
            options: [
              "KGFJ",
              "WVON in Chicago, the station where the syndicated programme's creator had worked",
              "WCIU, the Chicago television station that carried the local programme",
              "WAPA, the San Juan station that added the syndicated programme in 1973",
            ],
            correctIndex: 0,
            explanation:
              "Record World identifies him as Buster Jones of KGFJ, a Los Angeles station.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What is notable about how the March 1973 Billboard story refers to the programme?",
            options: [
              "It gives no title",
              "It gives a title that no later source ever repeats in print",
              "It calls it by the name of the established programme it alternated with",
              "It refers to it only by the name of its host rather than by any title",
            ],
            correctIndex: 0,
            explanation:
              "The March story describes the programme without naming it. The title appears in print in a Billboard photograph caption on 14 April.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "Where does the title Soul Unlimited first appear in the sources read for this course?",
            options: [
              "In a Billboard photograph caption",
              "In the March 1973 Billboard news story about the first broadcast",
              "In the May 1973 Record World column objecting to the programme",
              "In a reference work published many years after the programme ended",
            ],
            correctIndex: 0,
            explanation:
              "The caption of 14 April 1973 names the programme and says a show would air on 5 May. A caption is often where a new title first reaches print.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What date does the April 1973 Billboard caption give for a coming broadcast?",
            options: [
              "5 May",
              "10 March, the date of the programme's first broadcast that year",
              "12 May, the date of the trade column objecting to the programme",
              "7 June, the date of the magazine article a reference work later cited",
            ],
            correctIndex: 0,
            explanation:
              "The caption says the show would be aired on 5 May, which places at least one more broadcast after the ones the March stories describe.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What did the network do with the new programme's schedule position?",
            options: [
              "Alternated it with an established programme",
              "Gave it a new hour of its own on a weekday afternoon across the country",
              "Placed it in prime time, opposite the syndicated programme in most markets",
              "Offered it to affiliates as an optional programme they could clear or decline",
            ],
            correctIndex: 0,
            explanation:
              "Billboard says it alternated with an established Saturday programme, which is a slot the network already controlled.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "Why is alternating a new programme into an existing slot cheap for a network?",
            options: [
              "It needs no new hour or clearances",
              "Because advertisers pay a premium for programmes that share a time period",
              "Because production costs are shared between the two alternating programmes",
              "Because regulators required networks to rotate programmes in every Saturday slot",
            ],
            correctIndex: 0,
            explanation:
              "It borrows the incumbent's time period, production relationship and audience habit, so almost nothing new has to be built or bought.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "Why can a syndicated programme not answer that move in kind?",
            options: [
              "It has no slot of its own to lend",
              "Because syndicated programmes are forbidden from alternating under trade practice",
              "Because its sponsor would have to approve any change to the schedule",
              "Because its episodes are taped months in advance and cannot be rescheduled",
            ],
            correctIndex: 0,
            explanation:
              "A slot is the scarce thing a network controls. A syndicated programme holds different hours in different markets and has no single position to share.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What does this lesson say about the later retelling that puts the premiere in the second half of March?",
            options: [
              "That date is at most the second broadcast",
              "That it is correct, and the trade papers printed the wrong day of the month",
              "That it refers to a different programme with a similar name on another network",
              "That it cannot be checked, because no contemporaneous record survives",
            ],
            correctIndex: 0,
            explanation:
              "Two independent trade papers give the tenth, so a later March date can only describe a subsequent broadcast.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What is a slot, in this section's vocabulary?",
            options: [
              "A fixed position in a schedule",
              "The advertising time available for sale inside a single programme",
              "The agreement by which a station carries a syndicated programme",
              "The market in which a programme has cleared time for broadcast",
            ],
            correctIndex: 0,
            explanation:
              "A slot is the scarce thing a network controls and a syndicated programme does not, which is the whole asymmetry of this section.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What is an incumbent programme?",
            options: [
              "The one already holding a time period",
              "The programme with the highest ratings in a given market that season",
              "A programme produced by the network rather than by an outside company",
              "The first programme a station clears when it joins a syndicated line-up",
            ],
            correctIndex: 0,
            explanation:
              "The incumbent holds the habit and the clearances, which a new entrant sharing its slot can borrow without building its own.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "How often did Billboard say the network programme would run?",
            options: [
              "Once per month",
              "Every two weeks, which is what Record World's account implies instead",
              "Every Saturday, replacing the established programme entirely",
              "Four times a year, as an occasional special rather than a series",
            ],
            correctIndex: 0,
            explanation:
              "Billboard says once per month. Record World says the second show came two weeks after the first, which is a different frequency.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What frequency does Record World's account imply?",
            options: [
              "Every two weeks",
              "Once per month, which agrees with Billboard's description of the arrangement",
              "Every week, alternating with the established programme on the same day",
              "Twice a year, as a pair of specials rather than a continuing series",
            ],
            correctIndex: 0,
            explanation:
              "It says the first show was seen on the tenth with the second two weeks from that date, which is a fortnightly pattern rather than a monthly one.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "Who does Billboard credit as the programme's producer?",
            options: [
              "Super Soul Productions",
              "Dick Clark, whom Record World and a later reference work both name instead",
              "The network's own programming department in Los Angeles",
              "Don Cornelius Productions, under a co-production agreement",
            ],
            correctIndex: 0,
            explanation:
              "Billboard names Super Soul Productions. Record World names Dick Clark, and whether the two are connected is not established here.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "Who does Record World credit as the programme's producer?",
            options: [
              "Dick Clark",
              "Super Soul Productions, which is the company Billboard names",
              "Buster Jones, who also hosted the programme on air",
              "The network itself, with no outside production company involved",
            ],
            correctIndex: 0,
            explanation:
              "Record World says the host had hooked up with Dick Clark, who had produced the show. Billboard names a company instead.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What would reconcile the two accounts of who produced the programme?",
            options: [
              "If the company were connected to Clark",
              "If the two papers had been describing two different programmes entirely",
              "If the host had produced the programme himself under a company name",
              "Nothing could, because a company and a person cannot both be credited",
            ],
            correctIndex: 0,
            explanation:
              "If Super Soul Productions was a company connected to Clark, one paper names the corporate producer and the other the person. That is not established here.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "Who wrote the May 1973 Record World column objecting to the programme?",
            options: [
              "Dede Dabney",
              "Buster Jones, the programme's own host, writing in his own defence",
              "Don Cornelius, in a signed statement placed in the trade press",
              "Jesse Jackson, in a letter the magazine printed in its correspondence pages",
            ],
            correctIndex: 0,
            explanation:
              "Dede Dabney's column of 12 May 1973 is the only contemporaneous public response found in the issues searched for this course.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What did that column say about the hiring of the programme's host?",
            options: [
              "That it looked like playing Black against Black",
              "That the host had been underpaid relative to others in the same role",
              "That the host had been hired away from the syndicated programme's staff",
              "That the host was unqualified, having never worked in television before",
            ],
            correctIndex: 0,
            explanation:
              "The column calls it seemingly a direct attempt at the age old situation, playing black against black, and calls for network responsibility.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What ratings claim does the May 1973 column pass on?",
            options: [
              "That the established programme's ratings had fallen",
              "That the new network programme had outrated the syndicated one in its first month",
              "That the syndicated programme had lost half its audience since the rival appeared",
              "That the network had refused to release any ratings for the new programme",
            ],
            correctIndex: 0,
            explanation:
              "It says ratings for the established programme had allegedly gone down considerably since the syndicated show began, with the hedge attached.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What does the word \"allegedly\" do in that ratings claim?",
            options: [
              "Marks it as unverified by the columnist",
              "Signals that the figures came from the network's own research department",
              "Indicates that the claim had been disputed in print by another columnist",
              "Shows that the column is quoting a named source rather than paraphrasing",
            ],
            correctIndex: 0,
            explanation:
              "It is the columnist telling readers she has not verified it. Repeating the sentence without it turns her hedge into an assertion.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What is upgrading a hedge?",
            options: [
              "Repeating a hedged claim without its hedge",
              "Replacing a secondhand claim with the primary document behind it",
              "Adding a qualifier to a claim that was originally stated flatly",
              "Raising a claim's importance by placing it earlier in an article",
            ],
            correctIndex: 0,
            explanation:
              "A reported rumour becomes a stated fact, which is the same failure section 1 described for superlatives losing their qualifiers.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What are the three different things the May 1973 column is doing at once?",
            options: [
              "Reporting, judging and passing on a hedged claim",
              "Reporting, measuring audience share and naming a source for each figure",
              "Interviewing, editorialising and printing a correction to an earlier story",
              "Advertising, reviewing and announcing a forthcoming broadcast date",
            ],
            correctIndex: 0,
            explanation:
              "It reports that opinions have flared, makes a comparative judgment about the two programmes, and passes on an unverified ratings claim.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What does the May 1973 column establish?",
            options: [
              "That a controversy existed in the trade press",
              "That the network intended to damage the syndicated programme",
              "That the audience had begun leaving the established programme",
              "That the new programme was cancelled as a result of the objection",
            ],
            correctIndex: 0,
            explanation:
              "It records that a dispute existed at that date and how one columnist framed it. Intent, audience behaviour and the ending are separate questions.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "Which three trade papers were text-searched for the brief behind this course?",
            options: [
              "Billboard, Broadcasting and Record World",
              "Billboard, Jet and Rolling Stone, covering the whole of 1973",
              "Variety, Broadcasting and the Hollywood Reporter, for the same eight months",
              "Ebony, Essence and Black Enterprise, the magazines the sponsor advertised in",
            ],
            correctIndex: 0,
            explanation:
              "Thirty-three issues of Billboard, thirty-five of Broadcasting and twenty-one of Record World, all from 1973, were searched in their text layers.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "Which four things did that search fail to find?",
            options: [
              "The network's position, the episode count, a last air date, and a 1973 protest report",
              "The programme's title, its host, its first air date and its producer",
              "Any mention of the programme at all in any issue of any of the three papers",
              "The identities of the performers who appeared during the programme's run",
            ],
            correctIndex: 0,
            explanation:
              "The first broadcast, the host, the title and the producer were all found. The network's own position, the episode count, the last air date and a protest report were not.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What does Broadcasting's report of the network's autumn Saturday line-up on 16 April 1973 name?",
            options: [
              "The established programme only",
              "Both programmes, sharing the slot as they had done through the spring",
              "Neither programme, listing only the network's news and sport output",
              "The new programme only, with the established one moved to another day",
            ],
            correctIndex: 0,
            explanation:
              "It names the established programme and not the new one. That is an absence, and an absence in a schedule listing is not evidence of a cause.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "Why is an absence in a scanned text search not evidence of a cause?",
            options: [
              "A scan can garble a word and a paper prints selectively",
              "Because scanning technology cannot read magazine text from before 1980",
              "Because the searched papers had no reporters covering network television",
              "Because absences are only meaningful when a database is complete to the page",
            ],
            correctIndex: 0,
            explanation:
              "Not found by that search means not found by that search. A garbled scan or an unprinted story both look identical to a searcher.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "Which publication could not be searched at all for the brief behind this course?",
            options: [
              "Jet",
              "Broadcasting, whose 1973 issues are not held by any public archive",
              "Record World, whose scans stop before the relevant months of 1973",
              "Billboard, which restricts access to its issues from the 1970s",
            ],
            correctIndex: 0,
            explanation:
              "Every attempt to reach Jet through Google Books was refused, so that publication is simply unexamined rather than examined and empty.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "How many layers of reporting stand between this course and Jesse Jackson's reported 1973 remarks?",
            options: [
              "Three",
              "One, since the course quotes the magazine article directly from its own pages",
              "None, since the remarks were made in a document the course reproduces",
              "Two, since the reference work quotes him without an intermediate source",
            ],
            correctIndex: 0,
            explanation:
              "This course reports a reference work, which reports a magazine article of 7 June 1973, which reports what people said. The article was not read.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What does the reference work say Jackson told the magazine about the two programmes' ratings?",
            options: [
              "That the syndicated show had outrated the established one",
              "That the two programmes had drawn almost identical audiences all season",
              "That the network programme had beaten both of the others in its first month",
              "That no ratings had been published for any of the programmes involved",
            ],
            correctIndex: 0,
            explanation:
              "The entry reports him saying the syndicated programme had consistently outrated and overshadowed the established one. This course asserts none of it.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "According to the reference work's account, how did the rival programme end?",
            options: [
              "Clark dropped it after discussions with Cornelius",
              "The network cancelled it after a formal protest from a civil rights organisation",
              "It ran its full contracted season and was simply not renewed for a second",
              "Its host resigned, and no replacement could be found before the autumn schedule",
            ],
            correctIndex: 0,
            explanation:
              "The entry says the two men discussed the matter and that Clark dropped the programme while offering to co-produce specials. It is reported, not asserted here.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What words does the sponsor's memoir use before describing a threatened boycott of the network?",
            options: [
              "Rumor has it",
              "The record shows, introducing a document he had read himself",
              "I was told by the network, naming an executive as his source",
              "As I witnessed, placing himself in the room when it was discussed",
            ],
            correctIndex: 0,
            explanation:
              "He writes \"Rumor has it\" before the account, which is a participant flagging his own uncertainty rather than asserting a fact.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "Why does this lesson value a self-flagged rumour?",
            options: [
              "The teller marks it as unverified",
              "Because a participant's rumour is more likely to be true than a published report",
              "Because it can be cited without attribution once the teller has hedged it",
              "Because a flagged rumour counts as evidence when no document survives",
            ],
            correctIndex: 0,
            explanation:
              "It is more useful than a confident claim with no source, because the teller has told you what kind of statement it is. It is still not evidence.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What does Clarence Avant's 1974 account in the special section describe?",
            options: [
              "Trying to get the networks to carry Soul Train",
              "A meeting with the network about the rival programme in the spring of 1973",
              "The negotiation that ended the rival programme after two months on air",
              "His own role in producing the rival programme for the network",
            ],
            correctIndex: 0,
            explanation:
              "He describes approaching the three networks about carrying the syndicated show and being refused. He does not mention the rival programme at all.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "Why does this course not use the 2019 documentary account attributed to Avant?",
            options: [
              "It was not viewed for this course",
              "Because a documentary is never an acceptable source for a business claim",
              "Because it contradicts his own contemporaneous statement from 1974",
              "Because the film is no longer available and cannot be checked by a learner",
            ],
            correctIndex: 0,
            explanation:
              "It is reported rather than viewed, so it stays out. A later recollection by a participant would still need labelling as such even if it were seen.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "Which magazine issue does this lesson name as the first thing that would settle the question?",
            options: [
              "Rolling Stone of 7 June 1973",
              "Billboard of 17 March 1973, which reported the programme's first broadcast",
              "Record World of 12 May 1973, which carried the trade-press objection",
              "Billboard of 28 September 1974, the special section about the syndicated show",
            ],
            correctIndex: 0,
            explanation:
              "That is the issue the reference work cites and which was not read. Reading it directly would replace three layers of attribution with one.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What three things does this lesson say would settle why the rival programme ended?",
            options: [
              "The June 1973 magazine, the June 1973 Jet issues, and a last air date",
              "A network press release, a ratings report and an interview with the host",
              "The programme's production budget, its episode count and its advertising rates",
              "A court filing, a regulator's decision and a trade association ruling",
            ],
            correctIndex: 0,
            explanation:
              "The 7 June 1973 magazine read directly, the June 1973 issues of Jet, and a network schedule or trade listing showing a last broadcast date.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What is the honest sentence this section ends on?",
            options: [
              "The programme began, drew an objection, and stopped, and why is unknown",
              "The programme was cancelled after a boycott threat from civil rights leaders",
              "The programme ended when its host left to return to radio in Los Angeles",
              "The programme was never actually broadcast beyond its first two episodes",
            ],
            correctIndex: 0,
            explanation:
              "It began on 10 March 1973, drew a trade-press objection in May, and stopped. This course does not claim to know why, and says what would tell it.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What is a chain of attribution?",
            options: [
              "The sequence of sources between a reader and an original statement",
              "The list of people a journalist interviewed while preparing an article",
              "A publisher's record of who holds the rights to reprint a given article",
              "The order in which a claim was reported by competing publications",
            ],
            correctIndex: 0,
            explanation:
              "Each link can lose or change something, which is why counting the links is part of deciding how much weight a claim can carry.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What does this course mean by an open question?",
            options: [
              "One it declines to answer, naming what would answer it",
              "One that no source has ever addressed in print in any form",
              "One whose answer depends on a judgment rather than on evidence",
              "One a learner is asked to answer from their own reasoning",
            ],
            correctIndex: 0,
            explanation:
              "Leaving a question open and naming the document that would close it is more useful than filling the gap with the most repeated guess.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What does Broadcasting's 18 June 1973 profile of Clark do with the rival programme?",
            options: [
              "Lists his programmes without it",
              "Names it as the centrepiece of his coming autumn schedule",
              "Reports that he had sold it to another production company",
              "Quotes him explaining why he had decided to end it",
            ],
            correctIndex: 0,
            explanation:
              "The profile lists his programmes and this one is not among them. Like the April schedule listing, that is an absence rather than an explanation.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "What is caption evidence?",
            options: [
              "A fact established by a photograph's caption",
              "A quotation printed beneath an advertisement rather than in an article",
              "A correction a magazine prints under a photograph in a later issue",
              "The credit line naming the photographer who supplied an image",
            ],
            correctIndex: 0,
            explanation:
              "A caption is often where a new title or a new fact first reaches print, which is exactly what happened with this programme's name in April 1973.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What is a corporate producer, as this section uses the term?",
            options: [
              "The company credited with making a programme",
              "An executive employed by a network to oversee outside productions",
              "The sponsor that funds a programme and takes a credit for doing so",
              "The firm that sells a completed programme to individual stations",
            ],
            correctIndex: 0,
            explanation:
              "It may not be the person the press names, which is the likely explanation for the two trade papers crediting different producers.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What is a comparative judgment, in the May 1973 column?",
            options: [
              "The writer's opinion that one programme was better",
              "A ratings comparison drawn from the industry's published audience figures",
              "A side-by-side listing of the two programmes' production budgets",
              "A survey of readers asking which of the two they preferred",
            ],
            correctIndex: 0,
            explanation:
              "The column says there are many programmes of the kind but none comparable to the syndicated one. That is opinion, not measurement.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What does the phrase absence of evidence mean in this section?",
            options: [
              "Finding nothing, which is not finding that nothing happened",
              "A source that has been lost and can no longer be consulted at all",
              "A claim made without any citation attached to support it",
              "A document that exists but has been withheld from public access",
            ],
            correctIndex: 0,
            explanation:
              "The schedule listing and the profile both omit the programme. Neither omission tells you why it ended, or even that it had ended by then.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "Which performers does the March 1973 Billboard story list in the programme's taped cast?",
            options: [
              "Gladys Knight and the Pips, Eddie Kendricks and others",
              "The dancers from the syndicated programme, recruited for the network show",
              "No performers at all, since the story concerned only the schedule",
              "Only the host, with music supplied from recordings rather than in person",
            ],
            correctIndex: 0,
            explanation:
              "The story names a cast including Gladys Knight and the Pips, Eddie Kendricks, the Sylvers, Rufus Thomas, Ronnie Dyson and Malo.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "How far ahead had the network programme been taped, according to Billboard in March 1973?",
            options: [
              "Three months",
              "One week, with each episode recorded shortly before it was broadcast",
              "A full year, so that the whole season existed before the first broadcast",
              "Not at all, because the programme was transmitted live each time",
            ],
            correctIndex: 0,
            explanation:
              "Billboard says the shows were already taped for three months, which is a fact about commitment as well as about production.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "Why is it worth knowing that the programme had been taped three months ahead?",
            options: [
              "It shows how far the commitment already ran",
              "Because a taped programme cannot be cancelled once recording has finished",
              "Because it proves the network intended a full season of at least thirty episodes",
              "Because advance taping was unusual for any programme of that period",
            ],
            correctIndex: 0,
            explanation:
              "Episodes already recorded represent money already spent, which is a business fact about the network's position separate from anything said about intent.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What does this section keep separate from the question of why the rival programme ended?",
            options: [
              "Network intent and audience behaviour",
              "The programme's title and the name of its host",
              "The date of the first broadcast and the name of the producer",
              "The identity of the columnist and the magazine she wrote for",
            ],
            correctIndex: 0,
            explanation:
              "What the network intended, what the audience did, and how the programme ended are three separate questions, and the May column answers none of them.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7 — What a brand is worth after the show
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-2008-sale-and-the-library",
      title: "20 · What was left to sell, and why there was anything at all",
      section: "Section 7 · What a brand is worth after the show",
      body: `Don Cornelius was the programme's on-air host until 1993, and the programme itself stayed on the air until 2006 (Littleton, 2016). By 2008 it was no longer making new episodes. What he sold that year was therefore not a business in operation. It was property.

**The 2008 transaction.** CBS News reported in June 2008 that Cornelius had sold the brand and the production rights for the weekly Soul Train series, together with a catalogue of about 1,100 hours of archival footage, to MadVision Entertainment, a company backed by the private-equity firm InterMedia Partners. The price was not disclosed (Ali, 2008). MadVision's principals included Kenard Gibbs, described in that report as the group publisher of *Ebony* and *Jet*, along with Anthony Maddox and Peter Griffith.

**Three things changed hands, and they are not the same thing.**

| What was sold | What it is |
|---|---|
| The brand | The name and what a buyer may do with it |
| The production rights | The right to make new episodes of the weekly series |
| The library | About 1,100 hours of recorded programmes |

A buyer can want any one of these without the others. The 2016 buyer, eight years later, described its interest in terms that match the first and the third far more than the second.

**Why there was anything to sell.** Go back to section 3. A programme made for a network usually belongs to the network, and when it stops the producer has nothing left. Soul Train was first-run syndicated, which meant one sale per market, a sponsor rather than a network paying for production, and the programme staying in its producer's hands. The work of clearing a hundred markets one at a time is what created an asset that could still be sold thirty-seven years after the first local broadcast. That is the return on the difficult route, and it arrives decades late.

**A date that stays reported.** A May 2008 date for the sale circulates. The report used here is dated 19 June 2008, and no source read for this course establishes the earlier date, so this course does not print it as fact.

**Where this course's story ends.** The narrative arc of the sponsorship and the ownership closes here, with the 2008 sale. Don Cornelius died on 1 February 2012 (Yenigun, 2012). The lessons that follow deal with what happened to the property afterward, and with a claim about it that is still before a court.

:::reveal What three distinct things did the 2008 transaction transfer? ||| The brand, meaning the name and its uses; the production rights for the weekly series; and the library of about 1,100 hours of recorded programmes.

:::reveal Why was there anything left to sell in 2008, and what does that have to do with syndication? ||| Because first-run syndication left the programme in its producer's hands rather than a network's. The laborious route of clearing markets one at a time is what created an asset that outlived the show by decades.

## Vocabulary
- **Intellectual property**: rights in a name, a recording or a format, which can be sold separately from any operating business.
- **Private equity**: investment firms that buy companies or assets using pooled capital, often with the intention of selling them on.
- **Catalogue hours**: the total running time of recorded programmes held as an asset.
- **Price not disclosed**: a public statement that a price exists and will not be published.

## Sources
Ali, R. (2008, June 19). *Soul Train franchise bought by InterMedia-backed MadVision; multiplatform plans*. CBS News. https://www.cbsnews.com/news/soul-train-franchise-bought-by-intermedia-backed-madvision-multiplatform-plans/
Littleton, C. (2016, April 4). BET acquires "Soul Train" franchise from InterMedia Partners, Ron Burkle's Yucaipa. *Variety*. https://variety.com/2016/tv/news/soul-train-bet-don-cornelius-acquire-1201744886/
Yenigun, S. (2012, February 1). Soul Train creator Don Cornelius dies at 75. NPR. https://www.npr.org/sections/therecord/2012/02/01/146199087/soul-train-creator-don-cornelius-dies-at-75`,
    },
    {
      slug: "an-investment-is-not-a-sale",
      title: "21 · An investment in a parent company is not a sale of a show",
      section: "Section 7 · What a brand is worth after the show",
      body: `A widely repeated sentence says that in 2011 Magic Johnson bought Soul Train. Set the sentence beside the announcement it came from and three separate things are wrong with it.

**What the announcement said.** On 9 February 2011 Magic Johnson Enterprises and the Yucaipa Companies announced an investment in Vibe Holdings LLC, whose brands included the Soul Train television show and library. InterMedia Partners was named as an existing owner and stayed. Magic Johnson became Chairman of Vibe Holdings, Kenard Gibbs remained Soul Train's chief executive, and no amounts were stated (*Magic Johnson Enterprises and Yucaipa Companies announce investment*, 2011). The *Hollywood Reporter* describes Vibe Holdings as the parent company of Soul Train Holdings (Carlson, 2012).

**The three errors, named.**

| The sentence says | The document says |
|---|---|
| Bought | Invested in |
| Soul Train | Vibe Holdings, the parent company |
| Implies the previous owner left | The existing owner was named and remained |

Whether Magic Johnson still held a stake in 2016 is not established by anything read for this course.

**Why the correction matters rather than being pedantry.** Who sold the franchise in 2016 follows directly from who owned it in 2011, and the 2016 sellers were InterMedia Partners and the Yucaipa Companies. If the 2011 story were a sale, the 2016 sellers would be the wrong parties. The version that gets repeated is the version that cannot be reconciled with the next event in the sequence, which is usually how you catch one.

**The 2016 purchase.** BET Networks, a division of Viacom, acquired the Soul Train franchise from InterMedia Partners and the Yucaipa Companies, with financial details not disclosed (Littleton, 2016; *Soul Train acquired by Viacom's BET Networks*, 2016). *Variety* published its report on 4 April 2016 and TheWrap the same day; a 7 April date that circulates is the publication date of a later trade article, not the date of the announcement.

**What the buyer said it was buying.** *Music Business Worldwide* reports the library as "over 1,100 television episodes and 40 television specials", while *Variety* describes "more than 1,000 vintage episodes" (*Soul Train acquired by Viacom's BET Networks*, 2016; Littleton, 2016). The same report quotes BET describing "a host of ancillary revenue opportunities ranging from live events to consumer products". Look back at section 5. A merchandising arm, a club, a label and an awards show in the 1970s, and live events and consumer products in 2016, are the same idea forty years apart: earn from the brand without buying more airtime. BET had already been airing the Soul Train Awards since 2009 (Carlson, 2012; Littleton, 2016).

:::reveal In what three ways is the sentence "in 2011 Magic Johnson bought Soul Train" wrong? ||| It was an investment rather than a purchase, it was in the parent company Vibe Holdings rather than in the show, and the existing owner was named in the announcement and remained.

:::reveal Why does the 2011 correction matter for understanding the 2016 sale? ||| Because the 2016 sellers were InterMedia Partners and the Yucaipa Companies, which only makes sense if 2011 was an investment leaving the existing owner in place.

## Vocabulary
- **Parent company**: a company that owns another, so that buying into the parent is not the same as buying the subsidiary's assets.
- **Stake**: a share of ownership, which can be small and still be reported as involvement.
- **Announcement date**: the day a transaction was made public, which is not the same as the publication date of an article about it.
- **Ancillary revenue**: income from live events, consumer products and licensing, as distinct from advertising or broadcast fees.

## Sources
Carlson, E. (2012, February 22). Magic Johnson mulling "Soul Train" revival. *The Hollywood Reporter*. https://www.hollywoodreporter.com/tv/tv-news/magic-johnson-soul-train-aspire-293797/
Littleton, C. (2016, April 4). BET acquires "Soul Train" franchise from InterMedia Partners, Ron Burkle's Yucaipa. *Variety*. https://variety.com/2016/tv/news/soul-train-bet-don-cornelius-acquire-1201744886/
*Magic Johnson Enterprises and Yucaipa Companies announce investment in Vibe Holdings LLC*. (2011, February 9). PR Newswire. https://www.prnewswire.com/news-releases/magic-johnson-enterprises-and-yucaipa-companies-announce-investment-in-vibe-holdings-llc-115643964.html
*Soul Train acquired by Viacom's BET Networks*. (2016, April 7). *Music Business Worldwide*. https://www.musicbusinessworldwide.com/soul-train-acquired-viacoms-bet-networks/
Solsman, J. E. (2016, April 4). *BET Networks buys "Soul Train"*. TheWrap. https://www.thewrap.com/bet-networks-buys-soul-train/`,
    },
    {
      slug: "the-voice-and-the-open-case",
      title: "22 · The voice at the top of the show, and an open case",
      section: "Section 7 · What a brand is worth after the show",
      body: `Every section of this course has asked who paid and who owned. This lesson asks the question those two leave out: after a property is sold, who is still owed something?

**Read this lesson the way it is written.** What follows are one man's **allegations** in a case that is **unresolved**. Nothing here decides whether they are true, and nothing here states that any company did what he says it did. The case is public and he is a named plaintiff, which is why it can be taught at all.

**Who.** Joe Cobb is a retired Chicago radio broadcaster whose career included WVON and WGCI, and who created the spoken call at the top of the programme. The *Chicago Crusader* reported in 2019 that he said Cornelius had asked him to do voice-over work for the television show and that the two of them had an agreement (Gadlin, 2019).

**What he alleges.** WBEZ reported in 2024 that he says royalty payments stopped in 2008. The *Chicago Crusader* described skipped payments and a demand letter sent to Cornelius shortly before his death, and reported that Cobb says he was offered less than $15,000 as a buyout. WBEZ reported him saying he did not give permission for the use (Gadlin, 2019; WBEZ Chicago, 2024). Each of those is his account, reported by a news outlet, and none of it has been tested.

**The case.** *Cobb v. Paramount Global*, No. 1:24-cv-00335, was filed on 12 January 2024 in the United States District Court for the Northern District of Illinois against Paramount Global, CBS Entertainment Group and Black Entertainment Television, seeking at least $75,000 (WBEZ Chicago, 2024; *Cobb v. Paramount Global*, 2024). The docket shows a referral for a settlement conference in January 2025 and an order on a motion to stay on 16 May 2025, with no termination shown as of the last entry read, dated 5 January 2026 (*Cobb v. Paramount Global*, 2024). **The outcome is unknown.** WBEZ reported that the defendants could not be reached for comment.

**Why this belongs in a business course.** A sale transfers a brand, a set of rights and a library. The question a court is being asked here is whether it also carries an obligation to a person whose recorded voice is inside the property that changed hands. That is not a sentimental question. It is the same question as the one in section 3 about who owns a programme, asked one layer down, about a component of it.

**What a learner should do with an open case.** Not decide it. Read the docket, note the date of the last entry, and notice that a case with a settlement-conference referral and a motion to stay is a case in motion rather than a case that has gone away.

:::reveal How does this course describe Joe Cobb's statements about royalties, and what is the status of the case? ||| As his allegations, reported by news outlets and untested. The case, filed on 12 January 2024, is unresolved, and the outcome is unknown.

:::reveal What question does the case put that the rest of this course does not? ||| Whether selling a brand, its rights and its library also carries an obligation to a person whose recorded voice is part of the property that changed hands.

## Vocabulary
- **Allegation**: a claim a party makes in a legal proceeding, which has not been proved.
- **Docket**: the court's numbered record of everything filed in a case, which shows its status without deciding it.
- **Motion to stay**: a request to pause proceedings, usually while some other question is settled.
- **Unresolved**: a case with no final judgment or dismissal recorded, which is different from a case that was lost.

## Sources
*Cobb v. Paramount Global*, No. 1:24-cv-00335 (N.D. Ill. filed January 12, 2024) [Docket]. CourtListener. https://www.courtlistener.com/docket/68158537/cobb-v-paramount-global/
Gadlin, S. H. (2019, February 14). The voice of "Soooooooooul" Train says he's being ripped off by Viacom. *Chicago Crusader*. https://chicagocrusader.com/the-voice-of-soooooooooul-train-says-hes-being-ripped-off-by-viacom/
WBEZ Chicago. (2024, January 26). *Chicago voice behind "Soul Train" files federal lawsuit*. https://www.wbez.org/race-class-communities/2024/01/26/chicago-voice-behind-soul-train-files-federal-lawsuit`,
    },
    {
      slug: "who-says-it-mattered",
      title: "23 · Who says it mattered, and from which chair",
      section: "Section 7 · What a brand is worth after the show",
      body: `The last habit this course asks for is the hardest, because the claims it applies to are the ones everybody wants to be true.

**The rule: chronology is not influence.** That one thing came before another is a fact about calendars. That one thing caused another is a claim about the world, and it needs different evidence. Every statement below is true as a statement by the person named. None of them is treated here as proof of cause.

**On BET specifically, be careful, because a widely repeated claim is not supported.** A search made for exactly this question found **no statement by Robert L. Johnson or Sheila Johnson saying that Soul Train or Don Cornelius influenced or inspired BET**. This course therefore does not say there is one, and neither should anything built from it. What does exist is this:

- Debra L. Lee, then chairman and chief executive of BET Networks, said on 1 February 2012 that the company owed much of its success to Cornelius and that he had built the space in which a BET could be created (Pfeiffer, 2012). Read the chair she was sitting in: a chief executive paying tribute in the week of a death, describing what she considered her company's debt. That is not a founder's account of why the company was started.
- Robert L. Johnson's remarks reported in 2012 praise Cornelius for bringing the programme to television and keeping it running, and do not say it influenced BET. The job title given for him in that report is doubtful, since Lee held it at the time (VOA Learning English, 2012).
- The documented link between the two is ownership, not influence. BET aired the Soul Train Awards from 2009 and its parent bought the franchise in 2016 (Carlson, 2012; Littleton, 2016).

**Other statements, each with its speaker.** CNN reported in February 2012 that Quincy Jones said "Before MTV there was 'Soul Train,' that will be the great legacy of Don Cornelius", that Al Sharpton said that had it not been for Cornelius "we would not have ever transcended from the Chitlin circuit to become mainstream cultural trendsetters", and that Tavis Smiley called him a cultural ambassador at a time when Black music, dance and fashion were underappreciated (Hare, 2012). Jones's sentence is a chronology statement and reads as one. The other two are claims about cause, made by people who were not inside the businesses concerned.

**A reference work's claim, with a checkable flaw.** The *Encyclopedia of Television* says the programme's focus on individual performers "has been passed down to many music variety shows such as American Bandstand, Club MTV, and Solid Gold" (Shelton, n.d.). One of those three began broadcasting long before Soul Train existed. A sentence that lists a predecessor among the descendants is not a reason to throw the source away, and it is an excellent reason to check any influence claim against a calendar before repeating it.

**One more thing nobody can tell you.** CNN also reported Quincy Jones calling Cornelius his friend, colleague and business partner (Hare, 2012). What that partnership was is not established by anything read for this course.

:::reveal What did a search made specifically for it fail to find about BET and Soul Train? ||| Any statement by Robert L. Johnson or Sheila Johnson saying that Soul Train or Don Cornelius influenced or inspired BET. The course therefore does not claim one exists.

:::reveal What is checkably wrong with the Encyclopedia of Television's list of programmes that inherited Soul Train's approach? ||| One of the three programmes it names began broadcasting long before Soul Train existed, so the list puts a predecessor among the descendants.

## Vocabulary
- **Chronology**: the order in which things happened, which is evidence of sequence and not of cause.
- **Speaking position**: the role a person holds when they make a statement, which shapes what their statement can establish.
- **Tribute statement**: praise offered on an occasion such as a death, which records regard rather than measuring effect.
- **Negative finding**: the result of a search that looked for something specific and did not find it, which is worth recording.

## Sources
Carlson, E. (2012, February 22). Magic Johnson mulling "Soul Train" revival. *The Hollywood Reporter*. https://www.hollywoodreporter.com/tv/tv-news/magic-johnson-soul-train-aspire-293797/
Hare, B. (2012, February 2). "Soul Train" legend remembered as "pioneer". CNN. https://www.cnn.com/2012/02/02/showbiz/ent-cornelius-death-reactions
Littleton, C. (2016, April 4). BET acquires "Soul Train" franchise from InterMedia Partners, Ron Burkle's Yucaipa. *Variety*. https://variety.com/2016/tv/news/soul-train-bet-don-cornelius-acquire-1201744886/
Pfeiffer, J. (2012, February 1). *BET and Centric programming pays homage to Don Cornelius and Soul Train*. Staytuned. https://staytunedmag.com/tv-news/2012/02/01/bet-and-centric-programming-pays-homage-to-don-cornelius-and-soul-train/
Shelton, M. (n.d.). Soul Train. In *Encyclopedia of Television*. Museum of Broadcast Communications. http://www.museum.tv/eotv/soultrain.htm
VOA Learning English. (2012, February 9). *Remembering Soul Train creator Don Cornelius*. https://learningenglish.voanews.com/a/remembering-soul-train-creator-don-cornelius-139056269/114753.html`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · What a brand is worth after the show",
      section: "Section 7 · What a brand is worth after the show",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Until what year was Don Cornelius the programme's on-air host?",
            options: [
              "1993",
              "2006, the year the programme stopped producing new national episodes",
              "2008, the year he sold the brand, the rights and the library",
              "1985, the year a new distributor took over syndication of the programme",
            ],
            correctIndex: 0,
            explanation:
              "Variety gives 1993 for the end of his time as host, thirteen years before the programme itself ended.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "What was the state of the programme by 2008?",
            options: [
              "It was no longer making new episodes",
              "It was still producing a weekly edition carried in about a hundred markets",
              "It had moved to a cable network and was producing new episodes there",
              "It had been off the air for more than twenty years",
            ],
            correctIndex: 0,
            explanation:
              "The programme stayed on air until 2006, so what changed hands in 2008 was property rather than a business in operation.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "How many hours of archival footage were included in the 2008 sale?",
            options: [
              "About 1,100",
              "About 100, one for each market the programme reached in 1974",
              "About 40, matching the number of television specials in the library",
              "About 1,000, which is the figure a 2016 report gives for vintage episodes",
            ],
            correctIndex: 0,
            explanation:
              "The 2008 report describes a catalogue of about 1,100 hours of archival footage. The 1,000 figure in 2016 counts episodes rather than hours.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "Which company bought the franchise in 2008?",
            options: [
              "MadVision Entertainment",
              "InterMedia Partners, which backed the buyer rather than making the purchase itself",
              "Vibe Holdings, which held the brand at the time of the 2011 investment",
              "BET Networks, which acquired the franchise eight years afterward",
            ],
            correctIndex: 0,
            explanation:
              "MadVision Entertainment bought it, backed by the private-equity firm InterMedia Partners. Vibe Holdings and BET belong to 2011 and 2016.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "Which private-equity firm backed the 2008 buyer?",
            options: [
              "InterMedia Partners",
              "The Yucaipa Companies, which appears in the 2011 investment and the 2016 sale",
              "Magic Johnson Enterprises, which invested in the parent company in 2011",
              "Viacom, whose BET division bought the franchise in 2016",
            ],
            correctIndex: 0,
            explanation:
              "InterMedia Partners backed MadVision in 2008 and was still named as an existing owner in the 2011 announcement.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "How was Kenard Gibbs described in the 2008 report?",
            options: [
              "As the group publisher of Ebony and Jet",
              "As the chairman of the private-equity firm backing the purchase",
              "As the programme's long-serving talent coordinator and business partner",
              "As an executive of the network division that later bought the franchise",
            ],
            correctIndex: 0,
            explanation:
              "He was described as the group publisher of Ebony and Jet, which links this transaction to a different Chicago publishing business.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "Was the 2008 price disclosed?",
            options: [
              "No",
              "Yes, at about $30 million, reported in the trade press at the time",
              "Yes, at about $1.1 million, one thousand dollars per hour of footage",
              "Yes, but only to the buyer's investors rather than to the public",
            ],
            correctIndex: 0,
            explanation:
              "The report says the price was not disclosed, and no source read for this course gives a figure.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "Which three distinct things did the 2008 transaction transfer?",
            options: [
              "The brand, the production rights and the library",
              "The production company, its studio lease and its staff contracts",
              "The awards show, the merchandising arm and the record label",
              "The syndication contracts, the advertising inventory and the station line-up",
            ],
            correctIndex: 0,
            explanation:
              "The name and its uses, the right to make new weekly episodes, and about 1,100 hours of recorded programmes. A buyer can want any one without the others.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "Why was there anything left for Cornelius to sell in 2008?",
            options: [
              "Syndication left the programme in his hands",
              "Because the network that carried it returned the rights when the run ended",
              "Because the sponsor had transferred its share of the programme to him in 1980",
              "Because copyright in a television programme reverts to its host after fifty years",
            ],
            correctIndex: 0,
            explanation:
              "A programme made for a network usually belongs to the network. First-run syndication kept ownership with the producer, which is what made an asset decades later.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "What does this lesson call the return on the difficult route?",
            options: [
              "An asset that outlived the programme by decades",
              "A larger share of advertising revenue in every market the programme reached",
              "The ability to set the programme's schedule independently of any network",
              "A guaranteed payment from each station that carried the programme",
            ],
            correctIndex: 0,
            explanation:
              "Clearing a hundred markets one at a time is what created something still saleable thirty-seven years after the first local broadcast. The return arrives very late.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "Why does this course not print a May 2008 date for the sale?",
            options: [
              "No source read here establishes it",
              "Because the sale was announced in two stages and May is only the first of them",
              "Because the report used here was published in May and contradicts itself",
              "Because the exact month of a transaction is never material to a business history",
            ],
            correctIndex: 0,
            explanation:
              "A May date circulates, but the report used here is dated 19 June 2008 and nothing read for this course establishes the earlier one.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "On what date did Don Cornelius die?",
            options: [
              "1 February 2012",
              "2 February 2012, the date of the CNN report collecting tributes to him",
              "22 February 2012, the date of a trade report about a possible revival",
              "4 April 2016, the date the franchise purchase was announced",
            ],
            correctIndex: 0,
            explanation:
              "1 February 2012. The other dates belong to reports published in the days and years afterward.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "What is intellectual property, as this lesson uses the term?",
            options: [
              "Rights in a name, a recording or a format",
              "The physical tapes and films a production company keeps in storage",
              "A company's accumulated knowledge of how to make a particular programme",
              "The contracts binding performers to appear on a programme",
            ],
            correctIndex: 0,
            explanation:
              "Rights that can be sold separately from any operating business, which is exactly what the 2008 transaction was.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "What is private equity?",
            options: [
              "Firms buying assets with pooled capital, often to sell on",
              "Shares in a company that are held by its founders rather than the public",
              "The portion of a company's value not covered by its outstanding debt",
              "An investment made by an individual rather than by an institution",
            ],
            correctIndex: 0,
            explanation:
              "Investment firms buying companies or assets with pooled capital, often intending to sell them on, which is the pattern the next lesson follows.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "What did the announcement of 9 February 2011 actually describe?",
            options: [
              "An investment in Vibe Holdings",
              "A purchase of the Soul Train brand and library by a basketball star",
              "The sale of Vibe Holdings to a division of a large media company",
              "The launch of a revived weekly Soul Train series for cable",
            ],
            correctIndex: 0,
            explanation:
              "Magic Johnson Enterprises and the Yucaipa Companies announced an investment in Vibe Holdings LLC, whose brands included the Soul Train show and library.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "What was Vibe Holdings, in relation to Soul Train?",
            options: [
              "The parent company",
              "The syndicator that placed the programme with stations after 1985",
              "The production company Cornelius had sold in 2008",
              "The private-equity firm that had backed the 2008 purchase",
            ],
            correctIndex: 0,
            explanation:
              "The Hollywood Reporter describes Vibe Holdings as the parent company of Soul Train Holdings, which is why investing in it is not buying the show.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "What happened to the existing owner in the 2011 announcement?",
            options: [
              "It was named and remained",
              "It sold its whole position to the incoming investors and withdrew",
              "It was not mentioned, which is why the transaction is often misdescribed",
              "It became a minority holder in a newly created company",
            ],
            correctIndex: 0,
            explanation:
              "InterMedia Partners was named as an existing owner and stayed, which is precisely why it was still a seller in 2016.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "What role did Magic Johnson take in 2011?",
            options: [
              "Chairman of Vibe Holdings",
              "Chief executive of Soul Train, replacing the incumbent named in the release",
              "Sole owner of the Soul Train brand and its archival library",
              "Executive producer of a revived weekly edition of the programme",
            ],
            correctIndex: 0,
            explanation:
              "He became chairman of the parent company. Kenard Gibbs remained Soul Train's chief executive, which the same announcement states.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "Who remained Soul Train's chief executive after the 2011 investment?",
            options: [
              "Kenard Gibbs",
              "Magic Johnson, who took the role along with the chairmanship of the parent",
              "Ron Burkle, whose firm was one of the incoming investors",
              "Don Cornelius, who returned to the company he had sold in 2008",
            ],
            correctIndex: 0,
            explanation:
              "The announcement says Gibbs stayed as Soul Train's chief executive, another sign that this was an investment rather than a change of control.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "Were the amounts of the 2011 investment stated?",
            options: [
              "No",
              "Yes, at $30 million, reported in the announcement itself",
              "Yes, but only as a percentage of the parent company's equity",
              "Yes, in a filing the investors made the following week",
            ],
            correctIndex: 0,
            explanation:
              "No amounts were stated, which is common in announcements of this kind and is itself worth noting when a figure later appears in a retelling.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "In what three ways is the sentence \"in 2011 Magic Johnson bought Soul Train\" wrong?",
            options: [
              "Bought, Soul Train, and the implication the old owner left",
              "The year, the name of the investor and the name of the company involved",
              "It understates the price, the stake acquired and the scope of the assets",
              "It confuses the 2011 investment with the 2008 sale by the programme's creator",
            ],
            correctIndex: 0,
            explanation:
              "It was an investment rather than a purchase, in the parent company rather than the show, and the existing owner was named and remained.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "Is it established whether Magic Johnson still held a stake in 2016?",
            options: [
              "No",
              "Yes, the 2016 reports name him among the sellers of the franchise",
              "Yes, the 2011 announcement states the term of the investment",
              "Yes, a trade report in 2012 confirms he had sold his position",
            ],
            correctIndex: 0,
            explanation:
              "Nothing read for this course establishes it. The named 2016 sellers are InterMedia Partners and the Yucaipa Companies.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "Why does the 2011 correction matter rather than being pedantry?",
            options: [
              "The 2016 sellers only make sense if 2011 was an investment",
              "Because misdescribing an investment as a purchase is actionable under securities law",
              "Because the investors would otherwise be liable for the later claims against the brand",
              "Because the price of the 2011 transaction can be derived from the 2016 one",
            ],
            correctIndex: 0,
            explanation:
              "If 2011 had been a sale, the 2016 sellers would be the wrong parties. A version that cannot be reconciled with the next event is usually how you catch an error.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "Who sold the Soul Train franchise in 2016?",
            options: [
              "InterMedia Partners and the Yucaipa Companies",
              "Magic Johnson Enterprises, which had acquired it outright five years earlier",
              "MadVision Entertainment, which had bought it from its creator in 2008",
              "Don Cornelius Productions, which had retained the library after 2008",
            ],
            correctIndex: 0,
            explanation:
              "Those two firms were the sellers, which follows directly from the ownership the 2011 announcement describes.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "Who bought the franchise in 2016?",
            options: [
              "BET Networks, a division of Viacom",
              "Vibe Holdings, the parent company named in the 2011 announcement",
              "Tribune Entertainment, which had distributed the programme from 1985",
              "Paramount Global, under the name it uses in the 2024 federal case",
            ],
            correctIndex: 0,
            explanation:
              "BET Networks, then a division of Viacom, with financial details not disclosed.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "On what date was the 2016 purchase announced?",
            options: [
              "4 April 2016",
              "7 April 2016, the date that appears on a later trade article about the deal",
              "9 February 2011, the date of the investment in the parent company",
              "19 June 2008, the date of the report on the previous sale",
            ],
            correctIndex: 0,
            explanation:
              "Variety and TheWrap both reported it on 4 April 2016. The 7 April date is the publication date of a later trade article, not the announcement.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "What is the 7 April 2016 date that circulates for the BET purchase?",
            options: [
              "The publication date of a later article",
              "The date the transaction formally completed after the earlier announcement",
              "The date the seller's board approved the sale of the franchise",
              "The date the buyer first disclosed the price it had agreed to pay",
            ],
            correctIndex: 0,
            explanation:
              "It is when one trade outlet published its own report. Confusing a publication date with an announcement date is a common way a wrong date takes hold.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "How does Music Business Worldwide describe the library acquired in 2016?",
            options: [
              "Over 1,100 television episodes and 40 specials",
              "About 1,100 hours of archival footage, the figure used in the 2008 report",
              "More than 1,000 vintage episodes, which is Variety's description instead",
              "Every episode broadcast between 1971 and 1993, when the original host left",
            ],
            correctIndex: 0,
            explanation:
              "That outlet gives over 1,100 television episodes and 40 television specials, while Variety describes more than 1,000 vintage episodes.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "How does Variety describe the same library?",
            options: [
              "More than 1,000 vintage episodes",
              "Over 1,100 episodes and 40 specials, the wording another outlet uses",
              "About 1,100 hours, the measure used in the 2008 report",
              "A complete run of every programme made since the local Chicago launch",
            ],
            correctIndex: 0,
            explanation:
              "Variety says more than 1,000 vintage episodes. The two descriptions are close but not identical, and the course prints both rather than merging them.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "How did BET describe what it was acquiring, beyond the library?",
            options: [
              "Ancillary revenue from live events and consumer products",
              "The right to produce a new weekly series for syndication to independent stations",
              "The advertising inventory of every station still carrying repeats of the programme",
              "The music publishing rights to the songs performed across the programme's run",
            ],
            correctIndex: 0,
            explanation:
              "The report quotes BET describing a host of ancillary revenue opportunities ranging from live events to consumer products.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "What earlier part of this course does BET's 2016 description echo?",
            options: [
              "The 1970s cluster of businesses around the show",
              "The 1972 division of the programme's hour between two advertisers",
              "The 1973 network response of alternating a rival into an existing slot",
              "The 1971 refusal of all three networks to carry the programme",
            ],
            correctIndex: 0,
            explanation:
              "A merchandising arm, a club, a label and an awards show in the 1970s, and live events and consumer products in 2016, are the same idea forty years apart.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "Since what year had BET been airing the Soul Train Awards before the purchase?",
            options: [
              "2009",
              "1987, the year the awards show was launched by the programme's creator",
              "2011, the year investors took a stake in the parent company",
              "2016, the same year it bought the franchise outright",
            ],
            correctIndex: 0,
            explanation:
              "The awards had aired on BET since 2009, seven years before its parent bought the franchise. The awards themselves date from 1987.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "What is a parent company?",
            options: [
              "A company that owns another",
              "The original company from which a brand was first launched",
              "A holding vehicle created only to sell a business on to a third party",
              "The company that produces a programme, as distinct from the one that sells it",
            ],
            correctIndex: 0,
            explanation:
              "Buying into the parent is not the same as buying the subsidiary's assets, which is the whole distinction this lesson turns on.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "What is ancillary revenue?",
            options: [
              "Income from events, products and licensing",
              "The share of advertising revenue a syndicator keeps after paying stations",
              "Money a buyer sets aside to cover claims arising after a sale completes",
              "The interest earned on the proceeds of a sale before they are distributed",
            ],
            correctIndex: 0,
            explanation:
              "Income from live events, consumer products and licensing, as distinct from advertising or broadcast fees, which is what the brand was bought to produce.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "Which question does the open-case lesson ask that the rest of the course does not?",
            options: [
              "Who is still owed something after a sale",
              "Which buyer paid the highest price for the brand over four decades",
              "Whether a syndicated programme can ever be as profitable as a network one",
              "How a regulator decides whether a media sale should be permitted",
            ],
            correctIndex: 0,
            explanation:
              "Every earlier section asked who paid and who owned. This one asks who is still owed something after a property has changed hands.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "How does this course describe Joe Cobb's statements about royalties?",
            options: [
              "As his allegations, untested",
              "As established facts, since two separate news outlets reported them",
              "As findings of a court that has already ruled in the matter",
              "As admissions by the companies named in the complaint",
            ],
            correctIndex: 0,
            explanation:
              "They are his allegations, reported by news outlets, in a case that has not been decided. Nothing here states that any company did what he says.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What was Joe Cobb's profession?",
            options: [
              "A Chicago radio broadcaster",
              "A television producer who worked on the programme's national episodes",
              "An advertising executive at the agency that handled the sponsor's account",
              "A record company executive who supplied performers to the programme",
            ],
            correctIndex: 0,
            explanation:
              "He is a retired Chicago radio broadcaster whose career included WVON and WGCI, and he created the spoken call at the top of the programme.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "Which two Chicago stations are named in his career?",
            options: [
              "WVON and WGCI",
              "WCIU and WAPA, the two television stations that carried the programme",
              "KGFJ and WCIU, the stations the 1973 material names",
              "WVON and KGFJ, one in Chicago and one in Los Angeles",
            ],
            correctIndex: 0,
            explanation:
              "WVON and WGCI, both Chicago radio stations. WVON is also where the programme's creator worked before television.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What does Cobb say he created for the programme?",
            options: [
              "The spoken call at the top of the show",
              "The animated opening sequence that ran before each episode",
              "The theme music recorded for the programme in 1974",
              "The scramble board segment used in the studio each week",
            ],
            correctIndex: 0,
            explanation:
              "He created the spoken call heard at the top of the programme, which is the recorded element at the centre of his claim.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "In what year does he say royalty payments stopped?",
            options: [
              "2008",
              "2012, the year of the programme creator's death",
              "2016, the year the franchise was acquired by a network division",
              "2024, the year he filed his complaint in federal court",
            ],
            correctIndex: 0,
            explanation:
              "WBEZ reported him saying payments stopped in 2008, the same year the brand, rights and library were sold.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What buyout figure does the Chicago Crusader report he was offered?",
            options: [
              "Less than $15,000",
              "At least $75,000, the amount named in the complaint he later filed",
              "About $30 million, the figure reported for an earlier sale of a company",
              "Nothing at all, since no offer of any kind was ever made",
            ],
            correctIndex: 0,
            explanation:
              "The Crusader reports that he says he was offered less than $15,000. The $75,000 is the minimum sought in the 2024 complaint, a different figure.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What is the case number of the federal action?",
            options: [
              "1:24-cv-00335",
              "549 F.2d 35, the citation of the 1977 appeal involving the programme's sponsor",
              "Docket C-2788, the identifier of the 1976 regulatory order",
              "The case has no number, having been filed under seal",
            ],
            correctIndex: 0,
            explanation:
              "Cobb v. Paramount Global, No. 1:24-cv-00335. The other identifiers belong to the sponsor's regulatory matter in section 4.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "When was the case filed?",
            options: [
              "12 January 2024",
              "26 January 2024, the date of the news report describing the filing",
              "16 May 2025, the date of an order recorded on the docket",
              "5 January 2026, the date of the last docket entry read for this course",
            ],
            correctIndex: 0,
            explanation:
              "Filed on 12 January 2024. The later dates are the news report, a docket order, and the last entry read.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "In which court was the case filed?",
            options: [
              "The Northern District of Illinois",
              "The Seventh Circuit Court of Appeals, which decided the sponsor's case in 1977",
              "The Ninth Circuit, sitting in Detroit, as a memoir describes a different case",
              "A California state court, close to where the programme was recorded",
            ],
            correctIndex: 0,
            explanation:
              "The United States District Court for the Northern District of Illinois, which is a trial court rather than an appeals court.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "Which three defendants are named?",
            options: [
              "Paramount Global, CBS Entertainment Group and BET",
              "InterMedia Partners, the Yucaipa Companies and Vibe Holdings",
              "MadVision Entertainment, Tribune Entertainment and Media Affiliates",
              "Johnson Products, Bozell & Jacobs and Metromedia",
            ],
            correctIndex: 0,
            explanation:
              "Paramount Global, CBS Entertainment Group and Black Entertainment Television. The other groups are earlier owners and business partners.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What minimum amount does the complaint seek?",
            options: [
              "At least $75,000",
              "Less than $15,000, the figure reported as an earlier buyout offer",
              "About $30 million, matching an earlier valuation of a different business",
              "No specific amount, leaving damages entirely to the court",
            ],
            correctIndex: 0,
            explanation:
              "At least $75,000, as reported. The smaller figure is the buyout he says he was offered, which is a different number in a different context.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What does the docket show for January 2025?",
            options: [
              "A referral for a settlement conference",
              "A final judgment entered in favour of the defendants",
              "A voluntary dismissal of the complaint by the plaintiff",
              "The filing of the original complaint in the district court",
            ],
            correctIndex: 0,
            explanation:
              "The docket shows a referral for a settlement conference in January 2025 and an order on a motion to stay in May 2025.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What does the docket show for 16 May 2025?",
            options: [
              "An order on a motion to stay",
              "A trial date set for the following autumn",
              "The termination of the case by agreement between the parties",
              "The addition of a fourth defendant to the complaint",
            ],
            correctIndex: 0,
            explanation:
              "An order on a motion to stay, which is a request to pause proceedings while some other question is settled.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What is the outcome of the case, as of the last docket entry read for this course?",
            options: [
              "Unknown",
              "Decided for the plaintiff, with damages still to be assessed",
              "Dismissed, with the plaintiff ordered to pay the defendants' costs",
              "Settled confidentially, with the terms sealed by the court",
            ],
            correctIndex: 0,
            explanation:
              "No termination is shown as of the last entry read, dated 5 January 2026, so the outcome is unknown and the course says so.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What did WBEZ report about the defendants?",
            options: [
              "They could not be reached for comment",
              "That they had denied every allegation in a written statement",
              "That they had offered to settle before the complaint was filed",
              "That they had agreed to resume payments while the case proceeds",
            ],
            correctIndex: 0,
            explanation:
              "WBEZ reported that the defendants could not be reached for comment, which means the published account carries only one side.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "Why does this case belong in a course about a programme's business?",
            options: [
              "It asks whether a sale carries an obligation to a contributor",
              "Because the damages sought would exceed the value of the original sale",
              "Because it will determine who owns the programme's library going forward",
              "Because the plaintiff was an owner of the programme at the time of its sale",
            ],
            correctIndex: 0,
            explanation:
              "A sale transfers a brand, rights and a library. Whether it also carries an obligation to a person whose recorded voice is inside the property is what the court is being asked.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What does this lesson say a learner should do with an open case?",
            options: [
              "Read the docket and note the date of the last entry",
              "Assume the plaintiff is right, since the defendants did not comment",
              "Assume the case has failed, since it has not produced a judgment",
              "Wait for a news report before forming any view of the status",
            ],
            correctIndex: 0,
            explanation:
              "Not decide it. A case with a settlement-conference referral and a motion to stay is a case in motion rather than one that has gone away.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What is an allegation?",
            options: [
              "A claim in a legal proceeding that has not been proved",
              "A finding a court has made after hearing evidence from both sides",
              "A statement made to a journalist rather than filed in a court",
              "An accusation that a regulator rather than a private party has made",
            ],
            correctIndex: 0,
            explanation:
              "Unproved by definition. The course uses the word deliberately and repeatedly in this lesson for that reason.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What is a docket?",
            options: [
              "The court's numbered record of everything filed in a case",
              "The judge's written explanation of the reasoning behind a decision",
              "The list of cases a court expects to hear in a coming term",
              "A summary of a case prepared by one party for the other",
            ],
            correctIndex: 0,
            explanation:
              "It shows a case's status without deciding it, which is exactly what makes it the right source for an open matter.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What is the difference between an unresolved case and a lost one?",
            options: [
              "An unresolved case has no final judgment or dismissal",
              "There is none, since a case with no judgment has effectively been lost",
              "An unresolved case has been decided but not yet made public",
              "A lost case can be refiled, while an unresolved one cannot",
            ],
            correctIndex: 0,
            explanation:
              "No final judgment or dismissal is recorded, which is a completely different thing from a decision against the plaintiff.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What is this course's rule about chronology and influence?",
            options: [
              "Chronology is not influence",
              "Chronology establishes influence whenever the two events share an industry",
              "Influence can be assumed when enough people assert it independently",
              "Chronology is the only kind of evidence an influence claim can rest on",
            ],
            correctIndex: 0,
            explanation:
              "That one thing came before another is a fact about calendars. That one caused another is a claim about the world and needs different evidence.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What did a search made specifically for it fail to find about BET?",
            options: [
              "Any statement by its founders that Soul Train inspired it",
              "Any record of the price BET paid for the franchise in 2016",
              "Any confirmation that BET aired the Soul Train Awards before 2016",
              "Any statement by BET describing what it intended to do with the brand",
            ],
            correctIndex: 0,
            explanation:
              "No statement by Robert L. Johnson or Sheila Johnson saying Soul Train or Cornelius influenced or inspired BET was found, so the course does not claim one exists.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "Who made the 1 February 2012 statement about BET owing much of its success to Cornelius?",
            options: [
              "Debra L. Lee",
              "Robert L. Johnson, who co-founded the network in 1980",
              "Sheila Johnson, who is also described as a co-founder of the network",
              "Quincy Jones, who described himself as a business partner of Cornelius",
            ],
            correctIndex: 0,
            explanation:
              "Debra L. Lee, then chairman and chief executive of BET Networks, said it in the week of his death.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What does this lesson say about the chair from which that statement was made?",
            options: [
              "A chief executive paying tribute is not a founder's account",
              "A chief executive's statement is the most authoritative kind available",
              "A statement made in the week of a death cannot be used as evidence at all",
              "A chief executive speaking about the past is bound by the company's filings",
            ],
            correctIndex: 0,
            explanation:
              "She was describing what she considered her company's debt. That is different from a founder's account of why the company was started.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What do Robert L. Johnson's reported 2012 remarks actually say?",
            options: [
              "Praise for Cornelius, with no claim about BET",
              "That Soul Train was the direct model for the network he founded",
              "That he had tried to buy the programme before starting his own network",
              "That the programme's syndication strategy shaped the network's business plan",
            ],
            correctIndex: 0,
            explanation:
              "They praise Cornelius for bringing the programme to television and keeping it running, and do not say it influenced BET.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "Why is the job title given for Robert L. Johnson in that 2012 report doubtful?",
            options: [
              "Someone else held it at the time",
              "Because the report does not name the network he was said to lead",
              "Because he had retired from the industry more than a decade earlier",
              "Because the report gives two different titles in the same paragraph",
            ],
            correctIndex: 0,
            explanation:
              "Debra L. Lee held the chairman and chief executive title at BET Networks in February 2012, so the clip may be older or the title may be wrong.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What is the documented link between Soul Train and BET?",
            options: [
              "Ownership",
              "A founding agreement signed when the network launched in 1980",
              "A shared production company that made programmes for both",
              "A licensing deal under which the programme supplied BET with content from 1971",
            ],
            correctIndex: 0,
            explanation:
              "BET aired the Soul Train Awards from 2009 and its parent bought the franchise in 2016. That is ownership, which is documented, rather than influence, which is not.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What kind of statement is Quincy Jones's remark that before MTV there was Soul Train?",
            options: [
              "A chronology statement",
              "A measurement of the two programmes' relative audiences",
              "A legal claim about who originated a television format",
              "An account of a business relationship between the two companies",
            ],
            correctIndex: 0,
            explanation:
              "It places one thing before another and reads as exactly that, which is why the lesson uses it to illustrate the difference from a cause claim.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What is checkably wrong with the Encyclopedia of Television's list of programmes said to have inherited Soul Train's approach?",
            options: [
              "One of them began broadcasting long before Soul Train",
              "None of the three programmes it names ever existed under those titles",
              "All three of them were produced by the same company as Soul Train",
              "Two of the three were cancelled before Soul Train went national",
            ],
            correctIndex: 0,
            explanation:
              "The list puts a predecessor among the descendants, which is a reason to check any influence claim against a calendar before repeating it.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What does this lesson recommend doing with an influence claim before repeating it?",
            options: [
              "Check it against a calendar",
              "Find a second source that makes the same claim in different words",
              "Ask whether the person making it is famous enough to be reliable",
              "Discard it, since influence can never be established from any source",
            ],
            correctIndex: 0,
            explanation:
              "Checking dates catches the most common failure, which is naming something that came earlier as a descendant of something that came later.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What did Quincy Jones call Cornelius, according to CNN in 2012?",
            options: [
              "His friend, colleague and business partner",
              "The man who had bought his record label in the middle of the 1970s",
              "The producer of every television special he had made in that decade",
              "A rival whose programme had taken artists away from his own projects",
            ],
            correctIndex: 0,
            explanation:
              "CNN reported that description. What the business partnership actually was is not established by anything read for this course.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What is a negative finding, as this lesson uses the term?",
            options: [
              "The result of a search that looked for something and did not find it",
              "A source that contradicts a claim another source has made",
              "A court decision against the party that brought a case",
              "A statement in which a person denies something attributed to them",
            ],
            correctIndex: 0,
            explanation:
              "It is worth recording, because knowing that somebody looked for a statement and did not find it is different from nobody having looked.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What is a tribute statement, as evidence?",
            options: [
              "It records regard rather than measuring effect",
              "It carries more weight than a contemporaneous document about the same events",
              "It is inadmissible in any account, because it is always exaggerated",
              "It establishes a business relationship between the speaker and the subject",
            ],
            correctIndex: 0,
            explanation:
              "Praise offered on an occasion such as a death tells you what the speaker wanted said, and it does not measure the effect it describes.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What kind of evidence does this lesson say a documented ownership link is, compared with an influence claim?",
            options: [
              "It is documented, where influence is not",
              "It is weaker, because a purchase says nothing about a company's origins",
              "It is identical, since buying a brand proves it shaped the buyer",
              "It is irrelevant, because ownership came decades after the claims were made",
            ],
            correctIndex: 0,
            explanation:
              "BET aired the awards from 2009 and its parent bought the franchise in 2016. Those are records. An influence claim about why BET exists has no such record behind it.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What is a speaking position?",
            options: [
              "The role a person holds when they make a statement",
              "The physical setting in which a statement was recorded or written",
              "The order in which competing statements were made about an event",
              "The audience a statement was intended to reach when it was made",
            ],
            correctIndex: 0,
            explanation:
              "It shapes what a statement can establish. A chief executive's tribute, a founder's account and a commentator's opinion are three different things.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "Why does this lesson say the influence claims are the hardest habit to apply?",
            options: [
              "They are the claims everybody wants to be true",
              "Because the sources that make them are the least accessible to check",
              "Because influence can be measured but only with data nobody has kept",
              "Because the people who make them are usually anonymous",
            ],
            correctIndex: 0,
            explanation:
              "Wanting a claim to be true is the condition under which checking gets skipped, which is why the rule is stated plainly and applied to a flattering case.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What did Al Sharpton say in 2012, as CNN reported it?",
            options: [
              "That without Cornelius a transition to the mainstream would not have happened",
              "That the programme's business model should be studied by every broadcaster",
              "That the network rival of 1973 had been cancelled after his own intervention",
              "That BET had been founded in direct imitation of the programme",
            ],
            correctIndex: 0,
            explanation:
              "He said that had it not been for Cornelius they would not have transcended the Chitlin circuit to become mainstream cultural trendsetters. It is a cause claim by an outside observer.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "How does this lesson classify Tavis Smiley's 2012 remark?",
            options: [
              "As a statement by a named speaker, not proof of cause",
              "As a measurement of the programme's cultural reach in its own time",
              "As a business record, since he had worked with the programme's owners",
              "As a correction to the claims the other speakers had made that week",
            ],
            correctIndex: 0,
            explanation:
              "Every statement in this lesson is true as a statement by the person named, and none is treated as proof of cause.",
            sourceLessonSlug: "who-says-it-mattered",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — placed last, pooling 41 and serving 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "soul-train-the-business-final",
      title: "Final assessment · Soul Train, as a business",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which question organises this whole course?",
            options: [
              "Who paid, who owned, who got paid",
              "Which performances and dances mattered most across the programme's run",
              "How a syndicated programme should be scheduled to win a time period",
              "Whether the programme deserved the awards and honours it received",
            ],
            correctIndex: 0,
            explanation:
              "Who paid for the first tape, who owned the show, who sold its advertising, and who was still owed something after it was sold.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "What relationship connects the three men named Johnson in this course?",
            options: [
              "None",
              "They were partners in a single Chicago holding company from the late 1960s",
              "Two were brothers and the third married into the same family",
              "All three sat on the board of the same Chicago bank",
            ],
            correctIndex: 0,
            explanation:
              "George E. Johnson of Johnson Products, John H. Johnson of Johnson Publishing and Robert L. Johnson of BET are unrelated, and the New York Times prints a parenthesis saying so.",
            sourceLessonSlug: "a-show-as-a-business",
          },
          {
            prompt: "How should the 1974 Billboard special section be read?",
            options: [
              "As the creator's own account and his partners' tributes",
              "As the most independent reporting available on the programme's first years",
              "As a government filing, since trade papers registered their contents",
              "As a reference work, summarising other publications of the period",
            ],
            correctIndex: 0,
            explanation:
              "Its credits say it was produced in coordination with his production company, and it carries paid congratulatory advertisements from business partners.",
            sourceLessonSlug: "how-to-read-these-sources",
          },
          {
            prompt: "What happens to a superlative each time it is repeated?",
            options: [
              "It tends to lose a qualifier",
              "It gains a citation naming the source that repeated it last",
              "It becomes narrower, as each repeater adds a further limitation",
              "It is verified, because no claim can be repeated without checking",
            ],
            correctIndex: 0,
            explanation:
              "The shorter version is easier to say, so a narrow claim becomes a broad one. That is why this course prints every first in the wording of whoever makes it.",
            sourceLessonSlug: "firsts-that-sound-alike",
          },
          {
            prompt: "Why could an ultra high frequency station in Chicago afford to carry an unproven programme in 1970?",
            options: [
              "Its weaker signal meant less revenue and less to lose",
              "Because regulators subsidised programming aimed at particular communities",
              "Because it was contractually required to carry a quota of local productions",
              "Because a network paid it to fill the hour with any available programme",
            ],
            correctIndex: 0,
            explanation:
              "Fewer viewers meant less revenue, fewer network obligations meant genuinely open hours, and a Black Chicago audience fitted its stated plan.",
            sourceLessonSlug: "wvon-to-wciu",
          },
          {
            prompt: "Who paid for the local Soul Train pilot, and on what terms?",
            options: [
              "Cornelius, in exchange for studio space",
              "Sears, which covered the whole cost of production and airtime",
              "The station, which recovered the cost from later advertising sales",
              "Johnson Products, which was already the national sponsor at that point",
            ],
            correctIndex: 0,
            explanation:
              "The station agreed to him producing the pilot at his own expense in exchange for studio space, a trade in kind with no cash moving.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "How much of the cost of airing the local show did the Sears commitment cover?",
            options: [
              "Only a fraction",
              "All of it, which is why the chain is often called the programme's founder",
              "Rather more than half, with the producer covering the remainder",
              "None, because the commitment was made in merchandise rather than money",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section calls it a small commitment amounting to only a fraction of the actual cost, and a fraction was still decisive because nobody else was paying.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "How long did Cornelius work on the local programme without a salary?",
            options: [
              "Ten weeks",
              "Two years, until the national sponsorship money began arriving",
              "Ten months, from the local launch to the first national broadcast",
              "Three weeks, after which the station put him on its payroll",
            ],
            correctIndex: 0,
            explanation:
              "Ten weeks as the unsalaried host, producer and salesman, which is a founder financing a business out of his own wages.",
            sourceLessonSlug: "who-paid-for-the-pilot",
          },
          {
            prompt: "Why do the two accounts of who paid for a Soul Train pilot not contradict each other?",
            options: [
              "They describe two different pilots",
              "Because the later account was written by someone who was not present",
              "Because the station reimbursed the producer once the sponsor arrived",
              "Because the two payments were made jointly under one agreement",
            ],
            correctIndex: 0,
            explanation:
              "One is the local pilot Cornelius made for studio space; the other is a colour half-hour the sponsor says he paid for to test the idea nationally.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What did the sponsor say he learned from his two hour-long specials before Soul Train?",
            options: [
              "Retailers would not stock ahead of the broadcast",
              "That television audiences preferred comedy to music programming",
              "That syndicated time cost more per viewer than network time did",
              "That his products sold better in print advertising than on television",
            ],
            correctIndex: 0,
            explanation:
              "He writes that most retailers refused to order larger inventories, so shelves emptied when the specials aired and the extra sales were lost.",
            sourceLessonSlug: "a-second-pilot-in-color",
          },
          {
            prompt: "What makes a programme first-run syndicated?",
            options: [
              "It is made to be sold to programmers other than the networks",
              "It is sold to stations only after a network has finished with it",
              "It is produced by a network and licensed outside its own affiliates",
              "Its advertising is sold nationally while its time is sold locally",
            ],
            correctIndex: 0,
            explanation:
              "That is the Encyclopedia of Television's definition, and it is the arrangement that left the programme in its producer's hands.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "What does first-run syndication cost a producer, and what does it preserve?",
            options: [
              "One sale per market, and ownership of the programme",
              "One national sale, and the right to schedule the programme freely",
              "A share of advertising revenue, and control over the programme's content",
              "A licence fee to each station, and a guaranteed place in the schedule",
            ],
            correctIndex: 0,
            explanation:
              "Selling the programme again in every market, plus paying for production, in exchange for the programme staying the producer's property.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "Where did Cornelius say control lies, in 1974?",
            options: [
              "With the decision-makers behind the scenes",
              "With the audience, whose viewing decides which programmes survive",
              "With the sponsor, which can withdraw its money at any time",
              "With the syndicator, which chooses which stations are offered a show",
            ],
            correctIndex: 0,
            explanation:
              "He said control lies with the people behind the scenes, and added that no prime time network programme was produced by a Black man or woman.",
            sourceLessonSlug: "what-first-run-syndication-is",
          },
          {
            prompt: "How many stations carried the national programme on 2 October 1971, and out of how many targeted?",
            options: [
              "Seven out of twenty-five",
              "Nine out of twenty-five, counting the Chicago station that already had it",
              "Twenty-five out of a hundred markets the syndicator hoped to reach",
              "Thirty out of forty-five, the figures in a Billboard headline the next year",
            ],
            correctIndex: 0,
            explanation:
              "Seven of twenty-five. The nine belongs to the memoir's list, which adds Chicago and St. Louis.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "What reason did stations give for refusing the programme in 1971?",
            options: [
              "No open time periods",
              "That its sponsor competed with an advertiser they already carried",
              "That no syndicator would guarantee a full season of episodes",
              "That the programme was produced in black and white",
            ],
            correctIndex: 0,
            explanation:
              "The 1974 section records stations telling the syndicator they had no open time periods, which is the standard obstacle for a syndicated programme.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "What lesson does the August 1972 Billboard headline teach about reading trade press?",
            options: [
              "Read the body, because a headline rounds up",
              "Trust the headline, because it is written after the story is filed",
              "Ignore the story, because a headline error invalidates the reporting",
              "Average the two figures, since neither is reliable on its own",
            ],
            correctIndex: 0,
            explanation:
              "The headline says 45 markets while the text says over 30 with 40 expected. A headline is written by somebody else and it rounds up.",
            sourceLessonSlug: "october-2-1971",
          },
          {
            prompt: "Which firm does Billboard name as the programme's syndicator in 1972?",
            options: [
              "Media Affiliates",
              "Bozell & Jacobs, which appears in a trade listing the following year",
              "Tribune Entertainment, which took the role from 1985",
              "Metromedia, whose studios recorded the national episodes",
            ],
            correctIndex: 0,
            explanation:
              "Media Affiliates of Omaha in 1972, with Bozell & Jacobs appearing in the Broadcasting listing of 30 July 1973.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What was George E. Johnson's economic argument for buying time on the programme?",
            options: [
              "The audience was concentrated, so television became affordable",
              "The airtime was cheaper than network time of the same length",
              "The programme reached more households than any network variety show",
              "The production costs were shared with a second national sponsor",
            ],
            correctIndex: 0,
            explanation:
              "He said the programme delivered such a concentration of the market he wanted that it made television affordable, because he stopped paying for viewers he had no use for.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "How do the two accounts of the programme's advertising inventory differ?",
            options: [
              "One divides it by half-hour, the other by minutes",
              "One names the sponsor and the other names the syndicator as the buyer",
              "One covers the local run and the other the national syndicated run",
              "One gives a price per spot and the other a total annual commitment",
            ],
            correctIndex: 0,
            explanation:
              "Billboard describes full sponsorship of the first half-hour with spots in the second; the memoir describes three minutes each for the sponsor and the creator.",
            sourceLessonSlug: "who-sold-the-time",
          },
          {
            prompt: "What do the three accounts of the sponsor's $250 of starting money disagree about?",
            options: [
              "What kind of lender supplied it",
              "The year the company was founded in Chicago",
              "Whether the money was ever repaid to the lender",
              "How much of the total the founder himself contributed",
            ],
            correctIndex: 0,
            explanation:
              "Two say a finance or loan company and one says a bank, and a finance-company loan says something different about access to capital.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Where does Block Club Chicago report that the Afro Sheen commercials played?",
            options: [
              "In Soul Train's commercial breaks",
              "Only in cinemas serving Black neighbourhoods across the Midwest",
              "During network evening news broadcasts across the country",
              "On radio in the markets where the programme had cleared time",
            ],
            correctIndex: 0,
            explanation:
              "The article reports that the commercials played during commercial breaks for Soul Train, which is the direct link between the campaign and the programme.",
            sourceLessonSlug: "two-hundred-fifty-dollars",
          },
          {
            prompt: "Which two events does the sponsor's memoir separate that retellings usually merge?",
            options: [
              "A first public trading in 1969 and the Amex listing in 1971",
              "The founding of the company in 1954 and the launch of Ultra Sheen in 1957",
              "The start of the sponsorship in 1971 and its end in 1980",
              "The consent agreement of 1975 and the court decision of 1977",
            ],
            correctIndex: 0,
            explanation:
              "A first public trading on 10 December 1969 and the American Stock Exchange listing in January 1971, which is why two different firsts can both be true.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "What does the sponsor's signed 1974 statement about doubling sales establish?",
            options: [
              "Timing, not cause",
              "That the programme produced the growth in those two years",
              "That the growth would have happened without the programme",
              "Nothing, since a company may not report its own sales figures",
            ],
            correctIndex: 0,
            explanation:
              "Two things happened in the same two years. The statement does not claim one produced the other, and a lesson should not add the claim for it.",
            sourceLessonSlug: "going-public-twice",
          },
          {
            prompt: "Which court decided Johnson Products Co. v. Federal Trade Commission, and what did it do?",
            options: [
              "The Seventh Circuit, which stayed enforcement and remanded",
              "The Ninth Circuit, which ordered a competitor to carry the same warning",
              "The Supreme Court, which set the Commission's order aside entirely",
              "The Commission itself, reviewing its own order on the company's request",
            ],
            correctIndex: 0,
            explanation:
              "The Seventh Circuit held there was no unilateral right to withdraw, found the record too thin to judge abuse of discretion, stayed enforcement and remanded.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "On what four points do the court opinion and the memoir differ about the regulatory case?",
            options: [
              "The court, the sequence, the outcome and what happened to Revlon",
              "The date of the order, the docket number, the product and the regulator",
              "The company's name, the lawyer's name, the year and the city",
              "The warning's wording, the penalty, the appeal date and the judge",
            ],
            correctIndex: 0,
            explanation:
              "Which circuit heard it and where, whether the agreement preceded the broadcast, what the court actually ordered, and whether a competitor was required to match the warning.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "Why does this course print both the court opinion and the memoir's different account?",
            options: [
              "They are different kinds of evidence and naming both teaches more",
              "Because the court's own record of its decision is known to be unreliable",
              "Because a participant's memory outranks a document about his own case",
              "Because the two accounts agree on everything except a single date",
            ],
            correctIndex: 0,
            explanation:
              "A published opinion carries a citation anyone can check; a memoir written about fifty years later is a memory of a grievance the record confirms was real.",
            sourceLessonSlug: "the-order-and-the-opinion",
          },
          {
            prompt: "How does the memoir reconcile the $67 million and $32 million figures for the 1993 sale?",
            options: [
              "One is the whole deal, the other one seller's share",
              "One is in cash and the other in the buyer's shares",
              "One is the asking price and the other the price finally agreed",
              "One includes the brands and the other only the operating company",
            ],
            correctIndex: 0,
            explanation:
              "The transaction was $67 million and $32 million of it was Joan Johnson's share, so two figures that looked like rival claims describe different things.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Why does this course not use the New York Times line that Ivax sold the company to Procter & Gamble in 2004?",
            options: [
              "Two primary documents describe a different route",
              "Because the Times published a correction withdrawing that sentence",
              "Because the memoir gives a different year for the same transaction",
              "Because obituaries are never cited for business facts in this course",
            ],
            correctIndex: 0,
            explanation:
              "The Justice Department's 2000 release and L'Oreal's own release describe a route through Carson, L'Oreal and Wella that the sentence does not fit.",
            sourceLessonSlug: "what-happened-to-the-brands",
          },
          {
            prompt: "Why did the programme build a merchandising arm, a club, a label and an awards show?",
            options: [
              "An hour holds a fixed amount of advertising",
              "Because a syndicator required a programme to diversify its revenue",
              "Because regulators capped what a single programme could earn from advertising",
              "Because the sponsor insisted on new ventures as a condition of renewal",
            ],
            correctIndex: 0,
            explanation:
              "Advertising revenue is capped by time, so earning more from the same audience means selling that audience something other than spots.",
            sourceLessonSlug: "the-partner-the-label-and-the-club",
          },
          {
            prompt: "In what two ways were record labels involved in the programme's business?",
            options: [
              "As suppliers of talent and as buyers of advertising",
              "As owners of the programme and as distributors of its library",
              "As syndicators in some markets and as sponsors in others",
              "As producers of the programme and as competitors to its awards show",
            ],
            correctIndex: 0,
            explanation:
              "They supplied performers and bought advertising on and around the programme, which put them on both sides of the same transaction.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "What does the Motown sequence in this course illustrate?",
            options: [
              "A business decision has a date",
              "That a refusal recorded in a memoir can never be checked",
              "That participants revise their accounts once a venture succeeds",
              "That later statements always cancel earlier ones on the same subject",
            ],
            correctIndex: 0,
            explanation:
              "A refusal before there was evidence and a relationship once there was are a sequence. Quoting either without its date turns a moment into a character.",
            sourceLessonSlug: "labels-as-suppliers-and-buyers",
          },
          {
            prompt: "Which three figures does this course say a business history would most want, and cannot supply?",
            options: [
              "The syndicators' earnings, Cornelius's and Griffey's",
              "The programme's ratings, its production budget and its advertising rates",
              "The 2008 price, the 2011 investment and the 2016 price",
              "The sponsor's sales, its market share and its advertising spend",
            ],
            correctIndex: 0,
            explanation:
              "No source read for this course states what the syndicators earned, what Cornelius earned, or what Griffey's share of the club or the label was worth.",
            sourceLessonSlug: "who-else-got-paid",
          },
          {
            prompt: "On what date did the 1973 network programme first go to air, and how is that known?",
            options: [
              "10 March 1973, reported independently by two trade papers",
              "24 March 1973, the date most later retellings give for the premiere",
              "5 May 1973, the date given in a Billboard photograph caption",
              "7 June 1973, the date of the magazine article a reference work cites",
            ],
            correctIndex: 0,
            explanation:
              "Billboard on 17 March and Record World on 24 March both give Saturday the tenth, each within a fortnight of the broadcast.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "Why was alternating a rival into an existing slot the cheapest possible network response?",
            options: [
              "It needs no new hour, clearances or franchise",
              "Because two alternating programmes share their production costs",
              "Because advertisers pay a premium for a shared time period",
              "Because affiliates are paid less for an alternating programme",
            ],
            correctIndex: 0,
            explanation:
              "It borrows the incumbent's time period, production relationship and audience habit. A syndicated programme has no single slot of its own to lend in return.",
            sourceLessonSlug: "what-the-1973-trade-press-shows",
          },
          {
            prompt: "What does the word \"allegedly\" do in the May 1973 trade column's ratings claim?",
            options: [
              "Marks it as unverified by the columnist",
              "Shows that the figures came from the network's research department",
              "Signals that another columnist had already disputed the claim",
              "Indicates the column is quoting a named source rather than paraphrasing",
            ],
            correctIndex: 0,
            explanation:
              "Repeating the sentence without it turns her hedge into an assertion, which is the same failure as a superlative losing its qualifier.",
            sourceLessonSlug: "where-the-1973-sources-disagree",
          },
          {
            prompt: "What does this course say about why the 1973 network programme ended?",
            options: [
              "It does not know, and names what would settle it",
              "That a threatened boycott of the network forced its cancellation",
              "That it was dropped after private discussions between two producers",
              "That the network cancelled it once its ratings fell below the incumbent's",
            ],
            correctIndex: 0,
            explanation:
              "It began on 10 March 1973, drew a trade-press objection in May, and stopped. The 7 June 1973 magazine, the June 1973 Jet issues, or a last air date would settle it.",
            sourceLessonSlug: "why-it-ended-stays-open",
          },
          {
            prompt: "Why was there anything left for Cornelius to sell in 2008?",
            options: [
              "Syndication had left the programme in his hands",
              "Because the network that carried it returned the rights when it ended",
              "Because the sponsor gave him its half of the programme in 1980",
              "Because television copyrights revert to a host after fifty years",
            ],
            correctIndex: 0,
            explanation:
              "A network programme usually belongs to the network. Clearing a hundred markets one at a time is what produced an asset still saleable decades later.",
            sourceLessonSlug: "the-2008-sale-and-the-library",
          },
          {
            prompt: "In what three ways is the sentence \"in 2011 Magic Johnson bought Soul Train\" wrong?",
            options: [
              "It was an investment, in the parent, and the owner stayed",
              "It was a year later, by a different investor, and for a different brand",
              "It was a loan, to the syndicator, and it was never completed",
              "It confuses the 2011 event with the 2008 sale by the creator",
            ],
            correctIndex: 0,
            explanation:
              "An investment rather than a purchase, in Vibe Holdings rather than the show, with InterMedia Partners named as an existing owner and remaining.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "On what date was BET's purchase of the franchise announced?",
            options: [
              "4 April 2016",
              "7 April 2016, which is the publication date of a later trade article",
              "9 February 2011, the date of the investment in the parent company",
              "19 June 2008, the date of the report on the earlier sale",
            ],
            correctIndex: 0,
            explanation:
              "Variety and TheWrap both reported it on 4 April 2016. Confusing a publication date with an announcement date is how the wrong date took hold.",
            sourceLessonSlug: "an-investment-is-not-a-sale",
          },
          {
            prompt: "How does this course describe the 2024 federal case over the programme's spoken opening?",
            options: [
              "As one man's allegations in an unresolved case",
              "As a decided matter in which the plaintiff prevailed",
              "As a settled dispute whose terms were made public in 2025",
              "As a dismissed complaint that the plaintiff chose not to appeal",
            ],
            correctIndex: 0,
            explanation:
              "Allegations, untested, in a case with no termination shown as of the last docket entry read. Nothing in the course decides whether they are true.",
            sourceLessonSlug: "the-voice-and-the-open-case",
          },
          {
            prompt: "What did a search made specifically for it fail to find about Soul Train and BET?",
            options: [
              "Any founder's statement that Soul Train inspired BET",
              "Any record that BET aired the Soul Train Awards before 2016",
              "Any confirmation that BET's parent completed the 2016 purchase",
              "Any description by BET of what it planned to do with the brand",
            ],
            correctIndex: 0,
            explanation:
              "No statement by Robert L. Johnson or Sheila Johnson saying the programme influenced or inspired BET was found. The documented link is ownership, not influence.",
            sourceLessonSlug: "who-says-it-mattered",
          },
          {
            prompt: "What is this course's rule about chronology and influence?",
            options: [
              "Chronology is not influence",
              "Chronology proves influence when both parties are in one industry",
              "Influence follows from chronology once enough people assert it",
              "Chronology is the only admissible evidence for an influence claim",
            ],
            correctIndex: 0,
            explanation:
              "One thing preceding another is a fact about calendars. One thing causing another is a claim about the world, and it needs different evidence.",
            sourceLessonSlug: "who-says-it-mattered",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts. I do not own that file; these are for
// whoever registers the course. Each is written in the ResearchCheck shape, `course` is the slug
// to be registered, `soul-train-the-business`, and each one corresponds to a hedge that is
// actually printed in a lesson. Every hedge in this course has a check here.
//
//  A. key "st-barter-terms" · severity medium · lesson "what-first-run-syndication-is"
//     quote: "Whether Soul Train was sold to stations on barter terms is not established by any
//            source read for this course."
//     claim: The Encyclopedia of Television defines barter syndication; the 1974 section refers to
//            "compensation being offered by the syndicator" and 1972 shows two advertisers holding
//            a half-hour each. Consistent with barter, not proof of it.
//     needs: a station contract, a syndicator's rate card, or a trade report naming the terms.
//     where: Broadcasting Yearbook 1972-1974; Television/Radio Age; station files.
//
//  B. key "st-syndicator-succession" · severity medium · lesson "who-sold-the-time"
//     quote: "Whether Media Affiliates was absorbed, replaced, or simply reported differently is
//            not established by anything read for this course."
//     claim: Billboard (26 Aug 1972) says Media Affiliates, Omaha; Broadcasting (30 Jul 1973)
//            lists "Soul Train (Bozell & Jacobs)". Bozell & Jacobs is ALSO named in BB74 as the
//            firm the sponsor's original ad agency merged into, so one name sits on both sides.
//     needs: a trade report of the change, or a corporate record for Media Affiliates.
//
//  C. key "st-ad-inventory-split" · severity medium · lesson "who-sold-the-time"
//     quote: "These are not obviously the same deal ... no document read here reconciles them."
//     claim: BB72 describes Johnson Products fully sponsoring the first half-hour with Sears in the
//            second; the 2025 memoir describes three minutes for the sponsor and three for
//            Cornelius to sell.
//     needs: the sponsorship contract, a rate card, or a dated trade report of either arrangement.
//
//  D. key "st-syndicator-earnings" · severity low · lesson "who-else-got-paid"
//     quote: "No source read for this course states what the syndicators earned on the programme,
//            what Cornelius earned from it, or what Dick Griffey's share ... was worth."
//     needs: any of the three. A company filing, a court exhibit, or a trade report.
//
//  E. key "st-launch-market-list" · severity low · lesson "october-2-1971"
//     quote: "St. Louis is the one real disagreement. The course names the difference and does not
//            resolve it."
//     claim: BB74 and MBC give seven cities including San Francisco; the memoir gives nine
//            including Oakland, St. Louis and Chicago.
//     needs: a 1971 station line-up, or a St. Louis listing for 2 October 1971.
//
//  F. key "st-agency-name" · severity low · lesson "a-second-pilot-in-color"
//     quote: "This course does not pick. It prints both and files the question."
//     claim: BB74 names "Niefeld, Paley & Kuhn"; the memoir names "Allen, Anderson, Niefeld &
//            Paley" and gives the account executive as Tom Kuehn.
//     needs: a Chicago agency directory (Standard Directory of Advertising Agencies) for 1969-1971.
//
//  G. key "jpc-first-trading-1969" · severity medium · lessons "firsts-that-sound-alike" and
//     "going-public-twice"
//     quote: "If he is right, a source that says 'first listed on the Amex' and a source that says
//            'first publicly traded' are describing two different days more than a year apart."
//     claim: The memoir dates a first public trading to 10 December 1969 and the AMEX listing to
//            January 1971; NYT/NBC/TIME corroborate only the January 1971 listing. The memoir also
//            names a New York Times financial-section article by Marilyn Bender about the listing,
//            which was NOT read for this build.
//     needs: the 1969 offering prospectus or a contemporaneous trade report, and the Bender article.
//
//  H. key "jpc-1970-sales" · severity low · lesson "going-public-twice"
//     quote: "Somebody's year is off by one, or somebody is measuring a different thing."
//     claim: The memoir gives 1970 sales of $11.2m; the NYT obituary gives $12.6m for 1970.
//     needs: the company's own annual report for fiscal 1970 or 1971.
//
//  I. key "jpc-ftc-court-discrepancy" · severity HIGH · lesson "the-order-and-the-opinion"
//     quote: the whole comparison table. The course prints both and chooses neither.
//     claim: 549 F.2d 35 is a SEVENTH Circuit decision of 16 Feb 1977 that found no unilateral
//            right to withdraw, held the record too thin on abuse of discretion, stayed enforcement
//            and REMANDED, and notes a LATER, LESS RESTRICTIVE order against Revlon. The memoir
//            says Ninth Circuit, in Detroit, decided in the company's favour, requiring Revlon to
//            carry the same warning; and dates first notice to an NBC broadcast on 15 June 1975,
//            six days after the opinion's date for execution of the consent agreement.
//     stakes: this is the course's central "document versus memory" lesson. If a SECOND proceeding
//            exists that the memoir is describing, the lesson must say so.
//     needs: the FTC docket C-2788 file; any other Johnson Products v. FTC proceeding; the June
//            1975 NBC Nightly News rundown.
//
//  J. key "jpc-afro-sheen-2000" · severity low · lesson "what-happened-to-the-brands"
//     quote: "Whether Afro Sheen travelled with Ultra Sheen through the 2000 divestiture, and who
//            owns Johnson Products now, are not settled by anything read for this course."
//     needs: the L'Oreal/Wella asset schedule, or the current trademark registrations.
//
//  K. key "jpc-pg-2003-route" · severity low · lesson "what-happened-to-the-brands"
//     quote: "This route is reported rather than documented here."
//     claim: P&G is reported to have acquired the business through its purchase of Wella in 2003.
//     needs: P&G's own filing or a contemporaneous report, fetched and read.
//
//  L. key "soul-unlimited-ending" · severity HIGH · lesson "why-it-ended-stays-open"
//     quote: "the programme began on 10 March 1973, drew a trade-press objection in May, and
//            stopped, and this course does not know why."
//     claim: CBB-C describes the ending citing Rolling Stone, 7 June 1973, which was NOT read. The
//            memoir prefaces a boycott account with "Rumor has it". Avant's 2019 documentary
//            account was not viewed.
//     needs: Rolling Stone, 7 June 1973, read directly; the June 1973 issues of Jet (BAM is looking
//            for these); a network schedule or trade listing giving a last broadcast date.
//     NOTE FOR BAM: this is the check his answer 5 asked for. The lesson already names all three.
//
//  M. key "soul-unlimited-producer" · severity low · lesson "where-the-1973-sources-disagree"
//     quote: "Whether Super Soul Productions was a company connected to Clark is not established
//            here. ... The course does not guess, and files the question."
//     needs: a corporate record for Super Soul Productions, or a 1973 credit listing.
//
//  N. key "st-2008-price-and-date" · severity low · lesson "the-2008-sale-and-the-library"
//     quote: "The price was not disclosed" and "this course does not print it as fact" (the May
//            2008 date).
//     needs: an InterMedia or MadVision filing; a dated announcement.
//
//  O. key "st-magic-johnson-2016-stake" · severity low · lesson "an-investment-is-not-a-sale"
//     quote: "Whether Magic Johnson still held a stake in 2016 is not established by anything read
//            for this course."
//     needs: a Vibe Holdings ownership record, or a 2016 report naming every selling party.
//
//  P. key "cobb-v-paramount-outcome" · severity medium · lesson "the-voice-and-the-open-case"
//     quote: "The outcome is unknown."
//     claim: Cobb v. Paramount Global, No. 1:24-cv-00335 (N.D. Ill., filed 12 Jan 2024). Docket
//            read to an entry of 5 January 2026 with no termination shown.
//     needs: a re-read of the docket. THIS CHECK SHOULD BE RE-RUN BEFORE ANY PUBLIC RELEASE of the
//            course, because the lesson asserts the case is unresolved and that can change.
//
//  Q. key "quincy-jones-cornelius-partnership" · severity low · lesson "who-says-it-mattered"
//     quote: "What that partnership was is not established by anything read for this course."
//     needs: a company record or a contemporaneous report naming the venture.
//
//  R. key "solar-records-founding" · severity low · lesson "the-partner-the-label-and-the-club"
//     quote: "SOLAR's founding year and its later artist roster are reported in secondary
//            summaries rather than established here, so this course does not state them."
//     needs: a label discography or a contemporaneous trade report.
//
//  S. key "st-last-national-episode" · severity low · lesson "the-2008-sale-and-the-library"
//     claim: The course says the programme stayed on air until 2006 (Variety). A specific last
//            national episode date of 25 March 2006 circulates and is REPORTED only; the course
//            does not print it.
//     needs: a station log or a trade listing for March 2006.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts. I do not own that file.
//
//   import { SOUL_TRAIN_THE_BUSINESS_COURSE } from "./data/soul-train-the-business-course";
//
//   // "Soul Train: Who Paid, Who Owned, Who Got Paid". PRIVATE UNTIL VETTED, by BAM's approval of
//   // plans/future-courses/culture/2026-09-18-soul-train-brief.md (rubric 36/36) and his five
//   // answers of 2026-09-20. Careers & Media primary, Culture & History second, because it is a
//   // media-business course that a history learner should also find. NO series code: BAM,
//   // 2026-09-19, private courses carry none, so the proposed "who-owned-it" / MEDIA track in the
//   // companion brief stays unregistered until the course goes public. NO migration: the
//   // additionalCategories column already exists (migration 0062). Run: pnpm seed:courses.
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "soul-train-the-business",
//     course: SOUL_TRAIN_THE_BUSINESS_COURSE,
//     category: "Careers & Media",
//     additionalCategories: ["Culture & History"],
//     navigationMode: "linear",
//     price: 0,
//     priceType: "free",
//     visibility: "private",
//     publishHoldReason:
//       "Private until vetted. A business history of Soul Train built from 1972 to 1974 trade press, a federal appeals court opinion, government and company releases, an open 2024 federal docket and the sponsor's own 2025 memoir. Three things are still open and are filed as research checks: why ABC's 1973 rival ended, the discrepancy between the 1977 court opinion and the sponsor's account of the same case, and the outcome of Cobb v. Paramount Global, which lesson 22 states is unresolved and which must be re-checked before any public release.",
//   });
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// FOR THE REGISTERING AGENT (all outside this file)
//  - CITATIONS: add `soul-train-the-business` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once seeded. Every lesson carries an APA 7 `## Sources` block.
//  - STANDARDS: this is a primary-source media-business history (sourcing, corroboration,
//    chronology, claim versus evidence, reading a regulatory and court record), so per the repo
//    rule it should be MAPPED in src/lib/standards/ rather than BACKLOGged. Until it is mapped it
//    needs a BACKLOG line in scripts/check-standards-coverage.ts, or `pnpm lint` fails.
//  - SERIES: none. Do not add a seriesSlug either; the companion media-business track brief
//    (plans/future-courses/culture/2026-09-18-media-business-track-brief.md) proposes
//    `who-owned-it` / MEDIA / order 1, and that is a decision for the public flip, if ever.
//  - GUARDS: check-em-dashes, check-longest-option, check-quiz-balance, check-reveals and
//    check-assessment-fit all read `git ls-files`, so this file is only scanned once it is tracked.
//    It was checked directly at build time; see the handoff for the measured numbers.
//  - THE OUTLINE IS PROVISIONAL. BAM said on 2026-09-20 that he will review it.
