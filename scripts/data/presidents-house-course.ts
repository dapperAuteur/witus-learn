// Authored "The President's House" — a cited, high-school-and-up SITE course on Learn.WitUS
// (Culture & History), and COURSE 5 of the Indianapolis cluster planned in
// plans/39-indianapolis-pilot-cluster.md. It runs the same six-beat site template as course 1
// (scripts/data/indiana-avenue-course.ts), one beat per section: Then, Built, Powers, Now, Next,
// Write.
//
// Prerequisite: `green-book-how-to-read-a-route` teaches the METHOD (read a listing, chain a
// route, research an address forward). This course applies it to a house, and then to a bill.
//
// What makes this course the odd one in the cluster: every other site course studies a place that
// lost an argument. This one studies a man who HELD the power and lost anyway. The subject is a
// presidency, and the civic question is: what could a presidency do about voting rights, and what
// happened when it tried?
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * PRIMARY SOURCES ARE PREFERRED AND USED: Harrison's inaugural address (Avalon Project) and
//     his first, third and fourth annual messages (Miller Center, American Presidency Project) are
//     quoted verbatim from the documents, not paraphrased from biographies.
//   * NO INVENTED STATISTIC, QUOTATION, CHARACTER, OR ADDRESS.
//
// WHAT WAS VERIFIED, AND WHAT WAS COMPLICATED (plans/39 §4 listed the Harrison items as leads to
// verify, not as facts; here is the result):
//   * VERIFIED. The legislation is the Federal Elections Bill of 1890, H.R. 11045, 51st Congress,
//     drafted by Rep. Henry Cabot Lodge (R-MA) and carried in the Senate by Sen. George Frisbie
//     Hoar (R-MA). Opponents called it the "Force Bill." It passed the House 155-149 on 2 July
//     1890 with no Democratic votes, was filibustered in the Senate from December 1890, and on
//     22 January 1891 the Senate voted 35-34 to set it aside. It was never taken up again.
//   * VERIFIED. Harrison asked for it, in writing, in his own messages, repeatedly, before and
//     after it died. The quotations in lessons 8 and 12 are from the documents.
//   * COMPLICATED, and taught as such. Plan 39 called this "a direct and losing fight." The fight
//     is documented; the word "direct" is doing work the sources will not fully carry. Two things
//     cut against a flattering story and BOTH are in the course:
//       1. The "Compromise of 1890" reading, in which Republicans traded the elections bill for
//          the McKinley Tariff and the Sherman Silver Purchase Act, is an INTERPRETATION with a
//          literature, not a settled finding. Lesson 11 says so and names the literature.
//       2. Harrison's record does not resolve into a hero. He signed the Geary Act on 5 May 1892,
//          extending Chinese exclusion and requiring Chinese residents to carry a certificate of
//          residence. He ordered troops to Pine Ridge in November 1890, five weeks before the
//          Wounded Knee massacre. And he reached the presidency through an 1888 Indiana campaign
//          shadowed by a documented vote-buying circular, in a state whose city he did not carry.
//          Lessons 3 and 12 teach all of it.
//   * THE CLUSTER CONNECTION, stated with its limit. Lesson 13 puts the failed federal remedy of
//     1891 next to the Unigov boundary decision of 1970 (courses 2 and 4): national power and
//     local boundaries are two levers on one question, who can effectively vote. It does NOT claim
//     one caused the other. Eighty years and a different mechanism separate them.
//   * DISAGREEMENTS ARE KEPT, not smoothed: the house's cost (three figures), the year Mary Lord
//     Harrison sold it (two), the year the front porch was built (two), and the petition threshold
//     in the bill (two). Each is reported with its owner, the way course 1 handled Lockefield's
//     unit count.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles and page ranges inside a
// `## Sources` block are the only place a dash survives.

import type { AuthoredCourse } from "./authored-course";

export const PRESIDENTS_HOUSE_COURSE: AuthoredCourse = {
  title: "The President's House",
  description:
    "A cited, high-school-and-up site course on the Benjamin Harrison house at 1230 North Delaware Street in Indianapolis, and on the question a president's house is the right place to ask: what could a presidency do about voting rights, and what happened when it tried? This is course 5 of the Indianapolis cluster and its civics anchor, and it is the one course in the series whose subject is a person with power rather than a place that lost it. Benjamin Harrison, the 23rd president, lived and died in this house. During his single term a bill to put federal supervisors on congressional elections passed the House, was filibustered in a Senate that had no way to end a filibuster, and was set aside by one vote. You will read the bill, read Harrison's own messages, watch a bill die by the ordinary machinery rather than by a losing vote, and then test the flattering version of the story against the parts of his record that do not fit it, including the Geary Act and Wounded Knee. You will read the house itself as architecture and as a museum, and learn the difference between what a building is and what a preserved building has been chosen to show. Finally you will connect a failed federal remedy in 1891 to a local boundary decision in this same city in 1970, because national power and local boundaries are two levers on the same question. A 360 tour of the site is planned and will be added to the Now section when its embed URL exists. The prerequisite course, The Green Book: How to Read a Route, teaches the research method this course applies.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: the man, the house, the era)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ph-then-the-man",
      title: "1 · The man, the house, and why this course is different",
      section: "Section 1 · Then",
      body: `**Start with the prerequisite.** This course assumes you have finished *The Green Book: How to Read a Route*. That course taught a method: read a document down to its abbreviations and its silences, corroborate a name before you believe it, and research an address forward to what stands there now. **This course applies that method to a house and then to a bill**, which is a harder target, because a bill leaves more paper than a building does and most of it has never been read by the people who argue about it.

**Why this course is the odd one in the Indianapolis series.** Every other course in this cluster studies a place that lost an argument: a corridor that was cleared, a school that was segregated, a boundary that was drawn around somebody. **This one studies a man who held the largest office in the country and lost anyway.** That difference is the whole point. If you want to know what power can and cannot do, the useful case is not the powerless one. It is the case where someone had the office, asked for the thing, and did not get it.

**The man, in the plainest terms the sources support.** Benjamin Harrison was born in 1833 in North Bend, Ohio, into what the Miller Center describes as "a prominent family that had a legacy of political activism" (Miller Center, n.d.-a). That family had already produced a president: his grandfather, William Henry Harrison, held the office in 1841. Benjamin Harrison moved to Indianapolis in **1854**, joined the **Seventieth Regiment of the Indiana Volunteers in 1862** and rose to brigadier general, was **chosen for the United States Senate by the Indiana state legislature and served until 1887**, was elected president in 1888, served **from 1889 to 1893**, and **died of pneumonia on March 13, 1901** (Miller Center, n.d.-a).

**Stop on one clause in that paragraph, because it is a civics lesson hiding in a biography.** *Chosen for the United States Senate by the Indiana state legislature.* **Harrison was never elected to the Senate by voters, because until the Seventeenth Amendment was ratified in 1913 no senator was.** State legislatures picked them. Hold that thought: the man who would ask Congress to protect the ballot in congressional elections reached the Senate by a route that involved no ballot at all.

**The house.** **1230 North Delaware Street, Indianapolis**, in the neighbourhood now called the **Old Northside**. Harrison and his wife Caroline began building it in **1874**; it was finished in the spring of **1875**. He lived in it before and after the presidency and he died in it (Encyclopedia of Indianapolis, n.d.-a; Benjamin Harrison Presidential Site, n.d.-a). Section 2 reads the building. Section 5 reads the museum.

**The civic question this course carries.** *What could a presidency do about voting rights, and what happened when it tried?* Notice that it is two questions welded together, and that the first one is about structure while the second one is about a specific year. **You cannot answer the second honestly until you have answered the first**, which is why Section 3 spends a whole lesson on what an American president is actually able to do before it goes anywhere near the bill.

**A warning about tone, which is a research instruction and not a courtesy.** Benjamin Harrison is easy to write badly in either direction. There is a version of him that is a forgotten civil rights hero, and a version that is a Gilded Age placeholder who signed whatever crossed the desk. **This course teaches neither, because the record supports neither.** It teaches a man with a record: things he said, things he signed, things he asked for and did not get, and things he did that sit badly beside the things he said. **Where the record is mixed, this course says so and gives you both halves.** That is the standard the rest of the cluster is held to, and a president does not get an exemption from it.

## Sources
- Benjamin Harrison Presidential Site. (n.d.-a). *The house*. https://bhpsite.org/learn/the-house/
- Encyclopedia of Indianapolis. (n.d.-a). *Benjamin Harrison Presidential Site*. https://indyencyclopedia.org/benjamin-harrison-presidential-site/
- Miller Center. (n.d.-a). *Benjamin Harrison: Life in brief*. University of Virginia. https://millercenter.org/president/bharrison/life-in-brief
- U.S. Const. amend. XVII.`,
      recallContent: [
        {
          prompt: "Why is this course structurally different from the other Indianapolis site courses?",
          answer: "Its subject is a person who held power rather than a place that lost an argument. The useful case for learning what power can and cannot do is the one where someone had the office, asked for the thing, and did not get it.",
        },
        {
          prompt: "Give Harrison's Indianapolis dates: arrival, Civil War regiment, Senate, presidency, death.",
          answer: "Moved to Indianapolis in 1854; joined the Seventieth Regiment of the Indiana Volunteers in 1862 and became a brigadier general; served in the United States Senate until 1887; president from 1889 to 1893; died March 13, 1901.",
        },
        {
          prompt: "How did Harrison get to the United States Senate, and why does that matter here?",
          answer: "The Indiana state legislature chose him. Until the Seventeenth Amendment was ratified in 1913, state legislatures picked senators. The man who would ask Congress to protect the congressional ballot reached the Senate without one.",
        },
        {
          prompt: "Where is the house, when was it built, and what is the neighbourhood called?",
          answer: "1230 North Delaware Street, Indianapolis, in the Old Northside. Begun in 1874 by Benjamin and Caroline Harrison and finished in the spring of 1875.",
        },
        {
          prompt: "State the civic question this course carries, and why it is really two questions.",
          answer: "What could a presidency do about voting rights, and what happened when it tried? The first is structural, about the powers of the office; the second is about one specific fight. You cannot answer the second honestly without the first.",
        },
      ],
    },
    {
      slug: "ph-then-the-era",
      title: "2 · The era: what had already happened to the ballot",
      section: "Section 1 · Then",
      body: `A president does not act on a blank page. By the time Harrison took office in March 1889, **American voting rights law had already been built, used, cut down, and mostly abandoned once**, and knowing that sequence is the difference between reading the 1890 fight as a beginning and reading it as a last attempt.

**The short version of the twenty years before Harrison.**
1. **The Fifteenth Amendment was ratified in 1870.** It says the right to vote shall not be denied or abridged on account of race, colour, or previous condition of servitude, and it gives Congress power to enforce that by appropriate legislation (U.S. Const. amend. XV).
2. **Congress used that power.** The Enforcement Acts of 1870 and 1871 made interference with voting a federal crime and put federal officers into the machinery of federal elections.
3. **Enforcement faded.** By the 1880s prosecutions were sporadic, and the federal apparatus built in the early 1870s was largely unused.
4. **And in 1894, three years after this course's central fight, Congress finished the job.** With Democrats holding the presidency and both chambers, Congress passed what is generally called the **Repeal Act of 1894 (28 Stat. 36)**, rescinding almost all of the remaining Reconstruction voting rights enforcement provisions. The entry in *Encyclopedia of American Constitutional Law* records that it "repealed portions of the Enforcement Act of 1870 and the force act of 1871," and describes the result as eliminating most civil rights measures the courts had not already undermined (*Civil rights repeal act*, n.d.).

**So the 1890 bill was not an opening move.** It was an attempt to restart a machine that had been running and had been switched off. **That framing changes what its failure means**, and it is the frame Section 3 will use.

**What was happening at the same time, in the other direction.** While Congress argued, states acted. **Mississippi's constitutional convention of 1890 wrote disfranchisement into a state constitution** using a literacy test with an "understanding clause" and a poll tax, a design that let registrars pass white applicants and fail Black ones on the same question (Mississippi Encyclopedia, n.d.). Other southern states copied the design over the following two decades. In **1898 the Supreme Court upheld the Mississippi scheme in *Williams v. Mississippi*, 170 U.S. 213**, on the ground that the provisions did not on their face discriminate by race.

**Read the two timelines side by side and the shape of the decade appears.** **1890 is the year the Senate filibustered a federal elections bill and the year Mississippi adopted a disfranchising constitution.** Neither of those is a footnote to the other. They are two governments moving in opposite directions in the same twelve months, and the one that acted decisively won.

**Now bring it home, because Indiana is not a bystander here.** Indiana's own record on Black political rights is documented and it is not clean.
- **Article XIII of Indiana's 1851 constitution said "No negro or mulatto shall come into or settle in the State, after the adoption of this Constitution."** The Indiana Supreme Court held it invalid in **1866** after the Thirteenth Amendment (Indiana Historical Bureau, n.d.-a).
- **In 1869, when the Fifteenth Amendment came before the Indiana General Assembly, seventeen senators and thirty-seven representatives, all Democrats, resigned their seats to break the quorum and stop the vote.** Special elections returned them, and they prepared to do it again. Senator **Oliver P. Morton** then reinterpreted the quorum rule so that a quorum meant two thirds of the members who had **not** resigned, rather than two thirds of the full chamber, and "the General Assembly then ratified the Fifteenth Amendment over Democratic protests" (Indiana Historical Bureau, n.d.-b).

**Do not skim that second bullet.** It is the same lesson Section 3 teaches about the United States Senate in 1891, twenty-two years earlier and one state government down. **A voting rights measure was blocked not by being voted down but by a procedural manoeuvre that prevented a vote from happening at all**, and it advanced only when somebody reinterpreted a procedural rule. **Procedure is where these fights are actually decided.** Learn to look there first.

## Sources
- *Civil rights repeal act, 28 Stat. 36 (1894)*. (n.d.). In *Encyclopedia of the American Constitution*. Encyclopedia.com. https://www.encyclopedia.com/politics/encyclopedias-almanacs-transcripts-and-maps/civil-rights-repeal-act-28-stat-36-1894
- Indiana Historical Bureau. (n.d.-a). *Article 13: Negroes and mulattoes, Constitution of 1851*. Indiana State Library and Historical Bureau. https://www.in.gov/history/about-indiana-history-and-trivia/explore-indiana-history-by-topic/indiana-documents-leading-to-statehood/constitution-of-1851/article-13-negroes-and-mulattoes/
- Indiana Historical Bureau. (n.d.-b). *The legacy of the Civil War in Indiana*. Indiana State Library and Historical Bureau. https://www.in.gov/history/about-indiana-history-and-trivia/annual-commemorations/civil-war-150th/hoosier-voices-now/the-legacy-of-the-civil-war-in-indiana/
- Mississippi Encyclopedia. (n.d.). *Mississippi Constitutional Convention of 1890*. Center for Study of Southern Culture, University of Mississippi. https://mississippiencyclopedia.org/entries/mississippi-constitutional-convention-of-1890/
- U.S. Const. amend. XV.
- Williams v. Mississippi, 170 U.S. 213 (1898).`,
      recallContent: [
        {
          prompt: "Why is it wrong to read the 1890 federal elections bill as an opening move?",
          answer: "Because Congress had already built federal enforcement machinery in the Enforcement Acts of 1870 and 1871 and then let it fall into disuse. The 1890 bill was an attempt to restart a machine that had been switched off, and in 1894 Congress repealed most of what was left.",
        },
        {
          prompt: "What is the Repeal Act of 1894, and who passed it?",
          answer: "28 Stat. 36, passed when Democrats held the presidency and both chambers of Congress. It rescinded most of the remaining Reconstruction voting rights enforcement provisions from the 1870 Enforcement Act and the 1871 force act.",
        },
        {
          prompt: "What two opposite things happened in 1890, and what does the pairing show?",
          answer: "The United States Senate filibustered a federal elections bill, and Mississippi adopted a constitution that disfranchised Black voters through a literacy test with an understanding clause and a poll tax. Two governments moved in opposite directions in the same year, and the one that acted decisively won.",
        },
        {
          prompt: "What did Article XIII of Indiana's 1851 constitution say, and when did it fall?",
          answer: "'No negro or mulatto shall come into or settle in the State, after the adoption of this Constitution.' The Indiana Supreme Court held it invalid in 1866 after the Thirteenth Amendment.",
        },
        {
          prompt: "How did Indiana Democrats try to block the Fifteenth Amendment in 1869, and how was it ratified anyway?",
          answer: "Seventeen senators and thirty-seven representatives resigned to break the quorum. Oliver P. Morton reinterpreted the quorum rule to mean two thirds of the members who had not resigned, and the General Assembly ratified over Democratic protests. The fight was decided on procedure, not on the merits.",
        },
      ],
    },
    {
      slug: "ph-then-how-he-got-here",
      title: "3 · How he got the office, and why that complicates the story",
      section: "Section 1 · Then",
      body: `The 1888 campaign happened largely **at the house you are studying**, and it is also the first place the flattering version of this story runs into trouble. Take both together, because they are the same event.

**The campaign at the house.** Harrison ran what is now called a **front porch campaign**: rather than travelling to voters, he stayed in Indianapolis and the voters came to him. The Miller Center puts it plainly: "Harrison limited his speeches to front porch receptions in Indianapolis for a stream of carefully selected delegations and press reporters" (Miller Center, n.d.-b). **The two words worth underlining are "carefully selected."** A campaign in which the candidate does not travel is also a campaign in which the candidate controls the audience, the setting, and the record. **That is a media strategy, and it was a new one.**

**The result, with its numbers.** **Harrison carried the electoral college 233 to 168 while receiving roughly 90,000 fewer popular votes than President Grover Cleveland** (Miller Center, n.d.-b). The Miller Center also records the swing states that decided it: **New York and Indiana**. And it records a detail most retellings drop: **"Harrison had failed to carry his home city of Indianapolis"** (Miller Center, n.d.-b).

**Now the part that complicates everything after it.** In October 1888 **William Wade Dudley**, whom Harrison had made **treasurer of the Republican National Committee**, sent a circular letter to Indiana Republican workers containing this instruction: **"Divide the floaters into blocks of five, and put a trusted man with the necessary funds in charge of these five, and make them responsible that none get away and that all vote our ticket."** A "floater" was a voter understood to be available to whoever paid. The letter became public before election day and Democrats reprinted it nationally. The phrase **"blocks of five"** entered American political vocabulary as a synonym for electoral corruption.

**Handle that carefully, in the way this whole cluster handles evidence.**
1. **The letter is documented.** It is quoted, reproduced and discussed in the historical literature, and its author held a named position in Harrison's campaign organisation.
2. **What the letter proves is that an instruction was written.** It does not by itself establish how many votes were bought, or whether Harrison knew. The Miller Center's own careful phrasing is that "for years after the election, there was political talk suggesting that his supporters had purchased votes in Indiana to win the state" (Miller Center, n.d.-b). **"Political talk" is the honest description of a claim that circulated widely and was never adjudicated.**
3. **This course does not assert that Benjamin Harrison bought the presidency**, because the record read here does not establish it. **It does assert that the most famous vote-buying document in nineteenth century American politics was written by his campaign's treasurer, in his home state, in the election he won.** Those are different sentences and you should be able to feel the difference.

**Why this belongs in a voting rights course rather than in a footnote.** In December 1889 Harrison would ask Congress to protect the honesty of the ballot. **The best argument against him at the time was that his own election had been dishonest**, and his opponents made exactly that argument. You cannot understand why the word "Force Bill" worked so well as a slur, or why southern Democrats could posture as defenders of clean elections, without knowing that the charge of election fraud in 1888 ran in both directions. **A course that gives you Harrison's fine sentences about the ballot without giving you this is selling you a hero.**

**One more fact for the pile, because it cuts the other way.** Harrison **lost** the 1892 election to Cleveland, by roughly **375,000 popular votes** and by close to a two-to-one margin in the electoral college, with Cleveland carrying Indiana among the swing states (Miller Center, n.d.-b). **The man who asked for federal supervision of elections was turned out of office by an election, decisively, and left.** That is also part of the record, and it is not nothing.

## Sources
- Miller Center. (n.d.-b). *Benjamin Harrison: Campaigns and elections*. University of Virginia. https://millercenter.org/president/bharrison/campaigns-and-elections
- Fischer, R. A. (1991). "Blocks of five" Dudley, cartoon celebrity. *Indiana Magazine of History, 87*(4). https://scholarworks.iu.edu/journals/index.php/imh/article/view/11170
- Library of Congress. (n.d.). *Presidential election of 1888: A resource guide*. https://guides.loc.gov/presidential-election-1888`,
      recallContent: [
        {
          prompt: "What was the 1888 front porch campaign, and what do the words 'carefully selected' tell you?",
          answer: "Harrison stayed in Indianapolis and delegations came to him. The Miller Center says he spoke to carefully selected delegations and reporters, which means the candidate controlled the audience, the setting and the record. It was a media strategy.",
        },
        {
          prompt: "Give the 1888 result, including the detail most retellings drop.",
          answer: "Harrison carried the electoral college 233 to 168 while receiving about 90,000 fewer popular votes than Cleveland. New York and Indiana were the swing states, and Harrison failed to carry his home city of Indianapolis.",
        },
        {
          prompt: "Who was William Wade Dudley, what did his circular say, and what phrase did it leave behind?",
          answer: "Treasurer of the Republican National Committee, appointed by Harrison. His October 1888 circular told Indiana workers to divide the floaters into blocks of five with a trusted man and the necessary funds in charge of each. 'Blocks of five' became shorthand for electoral corruption.",
        },
        {
          prompt: "State precisely what the Dudley letter does and does not establish.",
          answer: "It establishes that the instruction was written by a named officer of Harrison's campaign in his home state in the election he won. It does not establish how many votes were bought or whether Harrison knew. The Miller Center calls the vote-buying claim 'political talk' that circulated for years.",
        },
        {
          prompt: "Why does the 1888 fraud question belong in a voting rights course?",
          answer: "Because it explains why the 'Force Bill' slur worked and why southern Democrats could posture as defenders of clean elections. The charge of election fraud in 1888 ran in both directions, and a course that omits it is selling a hero.",
        },
      ],
    },
    {
      slug: "ph-quiz-then",
      title: "4 · Quiz: the man and the era",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What makes this course structurally different from the other Indianapolis site courses?",
            options: [
              "It covers a longer time period",
              "Its subject is a person who held power rather than a place that lost an argument",
              "It has no primary sources",
              "It is about architecture only",
            ],
            correctIndex: 1,
            explanation: "The useful case for learning the limits of power is the one where someone had the office, asked for the thing, and did not get it.",
            sourceLessonSlug: "ph-then-the-man",
          },
          {
            prompt: "How did Benjamin Harrison reach the United States Senate?",
            options: [
              "By statewide popular election",
              "By appointment from the president",
              "The Indiana state legislature chose him",
              "By winning a special election in Indianapolis",
            ],
            correctIndex: 2,
            explanation: "Until the Seventeenth Amendment was ratified in 1913, state legislatures chose senators. No senator of that era was elected by voters directly.",
            sourceLessonSlug: "ph-then-the-man",
          },
          {
            prompt: "The house at the centre of this course is at:",
            options: [
              "1230 North Delaware Street, Indianapolis",
              "617 Indiana Avenue, Indianapolis",
              "North Bend, Ohio",
              "1600 Pennsylvania Avenue, Washington",
            ],
            correctIndex: 0,
            explanation: "Harrison and his wife Caroline began building it in 1874; it was finished in spring 1875, and he died there in 1901.",
            sourceLessonSlug: "ph-then-the-man",
          },
          {
            prompt: "Which statement best describes the state of federal voting rights enforcement when Harrison took office in 1889?",
            options: [
              "No federal enforcement law had ever existed",
              "Federal enforcement was at its strongest point",
              "Enforcement was constitutionally forbidden",
              "Machinery built by the Enforcement Acts of 1870 and 1871 existed but had largely fallen into disuse",
            ],
            correctIndex: 3,
            explanation: "That is why the 1890 bill is best read as an attempt to restart a switched-off machine rather than as an opening move.",
            sourceLessonSlug: "ph-then-the-era",
          },
          {
            prompt: "The Repeal Act of 1894, 28 Stat. 36, did what?",
            options: [
              "Created federal election supervisors",
              "Rescinded most of the remaining Reconstruction voting rights enforcement provisions",
              "Extended the Fifteenth Amendment to state elections",
              "Established the poll tax",
            ],
            correctIndex: 1,
            explanation: "It passed when Democrats held the presidency and both chambers, three years after the federal elections bill died.",
            sourceLessonSlug: "ph-then-the-era",
          },
          {
            prompt: "In the same year the Senate filibustered the federal elections bill, what did Mississippi do?",
            options: [
              "Adopted a constitution disfranchising Black voters through a literacy test with an understanding clause and a poll tax",
              "Ratified the Fifteenth Amendment",
              "Abolished its poll tax",
              "Elected its first Black governor",
            ],
            correctIndex: 0,
            explanation: "The 1890 Mississippi convention's design was copied across the South, and the Supreme Court upheld it in Williams v. Mississippi, 170 U.S. 213 (1898).",
            sourceLessonSlug: "ph-then-the-era",
          },
          {
            prompt: "Article XIII of Indiana's 1851 constitution did what, and when did it fall?",
            options: [
              "Guaranteed Black suffrage; repealed in 1870",
              "Created a poll tax; struck down in 1900",
              "Barred Black people from coming into or settling in the state; held invalid by the Indiana Supreme Court in 1866",
              "Established township schools; amended in 1851",
            ],
            correctIndex: 2,
            explanation: "The court held it invalid after the Thirteenth Amendment. Indiana's own record on Black political rights is documented and it is not clean.",
            sourceLessonSlug: "ph-then-the-era",
          },
          {
            prompt: "How did Indiana Democrats attempt to stop ratification of the Fifteenth Amendment in 1869?",
            options: [
              "They filed a lawsuit",
              "They voted it down twice",
              "They asked the governor to veto it",
              "Seventeen senators and thirty-seven representatives resigned their seats to break the quorum",
            ],
            correctIndex: 3,
            explanation: "Oliver P. Morton then reinterpreted the quorum rule as two thirds of the members who had not resigned, and the General Assembly ratified over Democratic protests.",
            sourceLessonSlug: "ph-then-the-era",
          },
          {
            prompt: "The Indiana 1869 quorum fight teaches which general lesson?",
            options: [
              "Voting rights fights are usually decided on the merits in open debate",
              "These fights are often decided by procedure, so look at procedure first",
              "State legislatures cannot ratify amendments",
              "Resignations are always illegal",
            ],
            correctIndex: 1,
            explanation: "The measure was blocked by preventing a vote rather than by losing one, and it advanced only when somebody reinterpreted a procedural rule.",
            sourceLessonSlug: "ph-then-the-era",
          },
          {
            prompt: "What was Harrison's 1888 'front porch campaign'?",
            options: [
              "A whistle-stop train tour of the Midwest",
              "A campaign run entirely through newspaper advertising",
              "A refusal to campaign at all",
              "He stayed in Indianapolis and spoke to carefully selected delegations who came to him",
            ],
            correctIndex: 3,
            explanation: "A candidate who does not travel controls the audience, the setting and the record. It was a media strategy and a new one.",
            sourceLessonSlug: "ph-then-how-he-got-here",
          },
          {
            prompt: "What was the 1888 election result?",
            options: [
              "Harrison carried the electoral college 233 to 168 while receiving about 90,000 fewer popular votes than Cleveland",
              "Harrison won both the popular vote and the electoral college",
              "Cleveland won the electoral college but lost the popular vote",
              "The election was decided in the House of Representatives",
            ],
            correctIndex: 0,
            explanation: "New York and Indiana were the swing states, and Harrison failed to carry his home city of Indianapolis.",
            sourceLessonSlug: "ph-then-how-he-got-here",
          },
          {
            prompt: "Who wrote the 'blocks of five' circular, and what position did he hold?",
            options: [
              "Henry Cabot Lodge, a member of the House",
              "George Frisbie Hoar, a senator",
              "William Wade Dudley, treasurer of the Republican National Committee",
              "Oliver P. Morton, a former governor",
            ],
            correctIndex: 2,
            explanation: "The October 1888 circular told Indiana workers to divide the floaters into blocks of five with a trusted man and the necessary funds in charge of each.",
            sourceLessonSlug: "ph-then-how-he-got-here",
          },
          {
            prompt: "What does the Dudley circular establish, stated precisely?",
            options: [
              "That Harrison personally directed vote buying",
              "That the 1888 election was legally overturned",
              "That no votes were bought in Indiana",
              "That the instruction was written by a named officer of Harrison's campaign in his home state in the election he won",
            ],
            correctIndex: 3,
            explanation: "It does not establish how many votes were bought or whether Harrison knew. The Miller Center calls the vote-buying claim 'political talk' that circulated for years.",
            sourceLessonSlug: "ph-then-how-he-got-here",
          },
          {
            prompt: "Why does this course put the 1888 fraud allegation in a voting rights lesson?",
            options: [
              "Because the charge of election fraud in 1888 ran in both directions, which is why southern Democrats could posture as defenders of clean elections",
              "To discredit Harrison",
              "Because it was the only issue in the campaign",
              "Because the courts resolved it",
            ],
            correctIndex: 0,
            explanation: "A course that gives you Harrison's fine sentences about the ballot without giving you this is selling a hero rather than teaching a record.",
            sourceLessonSlug: "ph-then-how-he-got-here",
          },
          {
            prompt: "How did Harrison's presidency end?",
            options: [
              "He declined to run again",
              "He was defeated for renomination",
              "He lost the 1892 election to Cleveland by roughly 375,000 popular votes and by close to two to one in the electoral college",
              "He died in office",
            ],
            correctIndex: 2,
            explanation: "Cleveland carried Indiana among the swing states. The man who asked for federal supervision of elections was turned out by an election, decisively, and left.",
            sourceLessonSlug: "ph-then-how-he-got-here",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture, and what a preserved house chooses to show)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ph-built-typology",
      title: "5 · What kind of house this is",
      section: "Section 2 · Built",
      body: `Beat 2 of the site template asks: **why does it look like that?** For a house the answer starts with **typology**, which is what kind of building a building is, and then with the far more interesting question of **what the fabric cost and who it took**.

**The building, from the record.** The Benjamin Harrison house is a **16-room, three-storey brick Italianate residence with a basement**, roughly **10,000 square feet**, designed by the Indianapolis architect **Herman T. Brandt**, with **Petrie and Cummings** as excavators. It has **a three-storey bay window and the bracketed cornices typical of the style**, **parquet floors, butternut woodwork, and a walnut staircase with oak trim**. The basement is **two feet of Indiana limestone**, and **380,550 bricks** completed the house. It was begun in **1874** and finished in the spring of **1875** (Encyclopedia of Indianapolis, n.d.-a; Benjamin Harrison Presidential Site, n.d.-a).

**Italianate, defined so you can recognise it anywhere.** It is the dominant American domestic style of roughly the 1850s through the 1870s: low-pitched roof, tall narrow windows often paired, heavy **bracketed cornices** under wide eaves, and frequently a bay or a tower. The Old Northside around this house also holds **Gothic Revival, Second Empire, Queen Anne, Eastlake and Stick style** examples from the same decades (Encyclopedia of Indianapolis, n.d.-b). **Standing on that street you are looking at a catalogue of what money built in an American city between 1870 and 1914**, which is exactly what the Encyclopedia gives as the range for the neighbourhood's houses.

**Now the part that tells you more than the style does: the systems.** The site's own account lists three conveniences "not enjoyed by most Victorians": **running water in the kitchen, washroom and second-floor bathroom; a coal-fed furnace; and 23 working gaslight fixtures**, under **12-foot ceilings** (Benjamin Harrison Presidential Site, n.d.-a).

**Read that as a class statement, because that is what it is.** Every item on that list is a purchase of something a poorer household supplied with labour.
1. **Running water replaces carrying water.**
2. **A coal furnace replaces tending several fires.**
3. **Gas fixtures replace filling, trimming and cleaning lamps.**
4. **Twelve-foot ceilings buy air and light, and they cost fuel to heat.**

**A building's plumbing is a truer statement of its owner's position than its cornice is.** Style is a taste choice available at several price points. **A second-floor bathroom in 1875 Indianapolis is not.**

**And the labour did not disappear, it moved.** The original **carriage house had upstairs quarters for the coachman** (Benjamin Harrison Presidential Site, n.d.-a). **Somebody lived over the horses.** That single sentence in a museum's building description is the thread you pull if you want to know who else this house contained, and it is the sort of thread that the interpretation lesson in Section 5 asks you to follow.

**The three cost figures, and why this course will not average them.** The record gives three different numbers for what the house cost, and they are not the same measurement.

| Figure | Source | What it appears to count |
|---|---|---|
| **$24,008.59** | Encyclopedia of Indianapolis (n.d.-a) | The house, finished spring 1875 |
| **$24,818.67** | The Wikipedia article on the site, a TERTIARY source with its own footnote to check | The house, finished 1874-1875 |
| **about $29,000** | Benjamin Harrison Presidential Site (n.d.-a) | Everything from the empty lot's purchase through the last room painted |

**The third one is explicitly a different scope**, since it includes the land, and that is probably most of the gap. **The first two differ by about 810 dollars and this course cannot tell you why.** Note also that one of the three is a **tertiary** source: an encyclopaedia article summarising other people's work. **A tertiary source is a finding aid, not a citation.** When you use one, follow its footnote to the thing it is summarising and cite that instead. So the rule from course 1 applies unchanged: **give a figure its owner, say what it counts, and do not average two numbers you do not understand.** If you write about this house, name your figure's source in the sentence.

**The lot date disagrees too.** One account has Harrison buying the double lot at auction in **1867**; the site's own account says he purchased the empty lot in **1868**. **A one-year disagreement in a purchase date is settled in a deed record**, which is a Marion County document, which is exactly the kind of lookup Section 5 of course 1 taught you to do.

## Sources
- Benjamin Harrison Presidential Site. (n.d.-a). *The house*. https://bhpsite.org/learn/the-house/
- Encyclopedia of Indianapolis. (n.d.-a). *Benjamin Harrison Presidential Site*. https://indyencyclopedia.org/benjamin-harrison-presidential-site/
- Encyclopedia of Indianapolis. (n.d.-b). *Old Northside*. https://indyencyclopedia.org/old-northside/
- National Park Service. (n.d.-a). *National Register of Historic Places*. https://www.nps.gov/subjects/nationalregister/index.htm
- Wikipedia. (n.d.). *Benjamin Harrison Presidential Site*. Cited here only as the tertiary source of a competing cost figure; follow its footnote before using the number. https://en.wikipedia.org/wiki/Benjamin_Harrison_Presidential_Site`,
      recallContent: [
        {
          prompt: "Describe the house as a survey form would: style, size, architect, materials.",
          answer: "A 16-room, three-storey brick Italianate residence with a basement, roughly 10,000 square feet, by architect Herman T. Brandt, with a three-storey bay window, bracketed cornices, parquet floors, butternut woodwork, a walnut staircase with oak trim, a two-foot Indiana limestone basement and 380,550 bricks. Begun 1874, finished spring 1875.",
        },
        {
          prompt: "Name the three conveniences the site lists and explain what each one really bought.",
          answer: "Running water, a coal-fed furnace, and 23 gaslight fixtures, under 12-foot ceilings. Each replaces labour a poorer household supplied by hand: carrying water, tending fires, filling and trimming lamps. Ceiling height buys air and light and costs fuel.",
        },
        {
          prompt: "Why is plumbing a better class indicator than a cornice?",
          answer: "Style is a taste choice available at several price points, but a second-floor bathroom in 1875 Indianapolis is not. Systems tell you the owner's position more reliably than ornament does.",
        },
        {
          prompt: "What does the carriage house tell you, and why does it matter?",
          answer: "It had upstairs quarters for the coachman, so somebody lived over the horses. The labour the house required did not disappear, it moved, and that sentence is the thread to pull when you ask who else this house contained.",
        },
        {
          prompt: "Three sources give three costs for the house. What is the rule?",
          answer: "Give a figure its owner and say what it counts. $24,008.59 and $24,818.67 are both offered for the house itself; about $29,000 is the site's figure covering the lot purchase through the last room painted, which is a different scope. Do not average numbers you do not understand.",
        },
      ],
    },
    {
      slug: "ph-built-the-porch",
      title: "6 · The porch problem: reading a building against a story",
      section: "Section 2 · Built",
      body: `Here is a small fact that will change how you look at every restored building you ever visit.

**The story.** Benjamin Harrison won the presidency in 1888 with a **front porch campaign**, delegation after delegation coming to the house on Delaware Street to hear him speak (Miller Center, n.d.-b).

**The building.** The two most accessible published accounts of the house both date the front porch to **after** the presidency. The Encyclopedia of Indianapolis says "a front porch was added by Harrison in 1895." The site's own description places it in an **1896** round of changes that also brought **electricity and updated plumbing**, and calls it an **English Regency front porch** (Encyclopedia of Indianapolis, n.d.-a; Benjamin Harrison Presidential Site, n.d.-a).

**So the famous front porch campaign of 1888 was not run from the porch that is famous.** Work carefully through what that does and does not prove, because this is the exact skill beat 2 exists to teach.

1. **It does not prove there was no porch in 1888.** Neither source says what stood at the front door in 1888. **This course does not assert that the 1888 house had no porch, because the sources read here do not say.**
2. **It does prove that the visible fabric a visitor sees today postdates the event the house is famous for.** Whatever the campaign happened on, **it was not this.**
3. **It means "front porch campaign" is a description of a campaign method, not a claim about carpentry.** The phrase names a strategy: the candidate stays home and the country comes to him. **The porch in the phrase is a metaphor that happens to also be a building part**, and confusing the two is how people end up asserting things about wood that the record is silent on.
4. **It gives you a research question with a known answer somewhere.** Photographs of the 1888 delegations exist in collections; so do insurance maps and the building's own restoration files. **A question like this is settled by looking, and you now know exactly what to look at.**

**The general rule, which is worth more than the Harrison example.** **A historic building is not a photograph of the year it is famous for.** It is the sum of everything done to it, including everything done to it by the people who preserved it. Every restored house you visit contains at least four layers:
- **What was originally built.**
- **What the original owners changed while they lived there**, which here includes an 1895 or 1896 porch, electricity and plumbing.
- **What later owners changed for a completely different use**, which here means the years it held music students.
- **What restorers removed, replaced or invented to return it to a chosen date.**

**That fourth layer is the one visitors never see and never think about, and it is the subject of the next lesson.**

**Two more disagreements in the record, kept rather than smoothed.**
- **When the porch was added: 1895 or 1896**, depending on which of two sources you read. Both agree it was after the presidency.
- **When Mary Lord Harrison sold the house: 1937 or 1939.** The National Park Service's own summary of the property says the Arthur Jordan Foundation purchased it in **1937**; the Encyclopedia of Indianapolis and the site's account of the sale to the Arthur Jordan School of Music give **1939** (National Park Service, n.d.-b; Encyclopedia of Indianapolis, n.d.-a). **A two-year gap in the transfer date of a National Historic Landmark is a deed question**, and the deed is in Marion County.

**Why a course insists on this level of fuss about a porch.** Because the habit generalises. **If you will accept "the front porch campaign was run from that porch" without checking, you will accept much larger claims the same way.** The corridor course in this series killed an entire thesis with a table of dates. **This is the same move at the scale of a piece of a building.**

## Sources
- Benjamin Harrison Presidential Site. (n.d.-a). *The house*. https://bhpsite.org/learn/the-house/
- Encyclopedia of Indianapolis. (n.d.-a). *Benjamin Harrison Presidential Site*. https://indyencyclopedia.org/benjamin-harrison-presidential-site/
- Miller Center. (n.d.-b). *Benjamin Harrison: Campaigns and elections*. University of Virginia. https://millercenter.org/president/bharrison/campaigns-and-elections
- National Park Service. (n.d.-b). *Benjamin Harrison Home* [National Historic Landmark listing]. https://www.nps.gov/subjects/nationalhistoriclandmarks/index.htm`,
      recallContent: [
        {
          prompt: "State the porch problem in one sentence.",
          answer: "The house is famous for an 1888 front porch campaign, but both published accounts date the front porch a visitor sees to 1895 or 1896, after the presidency.",
        },
        {
          prompt: "What does the porch date prove, and what does it NOT prove?",
          answer: "It proves the visible fabric postdates the event the house is famous for. It does not prove there was no porch in 1888, because neither source says what stood at the front door then.",
        },
        {
          prompt: "What does the phrase 'front porch campaign' actually name?",
          answer: "A campaign method: the candidate stays home and the country comes to him. The porch in the phrase is a metaphor that happens to also be a building part, and confusing the two produces claims about wood the record does not support.",
        },
        {
          prompt: "Name the four layers present in any restored historic house.",
          answer: "What was originally built; what the original owners changed while living there; what later owners changed for a different use; and what restorers removed, replaced or invented to return it to a chosen date. The fourth is the layer visitors never see.",
        },
        {
          prompt: "Give the two dating disagreements this lesson keeps rather than smooths.",
          answer: "The porch was added in 1895 or 1896 depending on the source, and Mary Lord Harrison's sale is dated 1937 by the National Park Service summary and 1939 by the Encyclopedia of Indianapolis and the site. Both are deed questions answerable in Marion County records.",
        },
      ],
    },
    {
      slug: "ph-built-what-a-museum-shows",
      title: "7 · What a preserved house chooses to show",
      section: "Section 2 · Built",
      body: `A house museum is not a house. **It is an argument about a house, built out of a house**, and every argument has an author, a date, and things it leaves out. This lesson teaches you to see the argument.

**This building's own second life, with dates.**
- **1937 or 1939** (the sources disagree, see lesson 6): **Mary Lord Harrison sold the house to the Arthur Jordan School of Music**, with the condition that it would always serve as a memorial to Benjamin Harrison (Encyclopedia of Indianapolis, n.d.-a).
- **After the sale**: the school **turned the first floor into a museum and used the second and third floors as student housing**, a dormitory for the school's students (Encyclopedia of Indianapolis, n.d.-a).
- **1964, January 29**: designated a **National Historic Landmark**.
- **1966, October 15**: listed on the **National Register of Historic Places**, reference number **66000010**. In the same year **a not-for-profit operating foundation was established** to run the house as a historic site open to the public (Benjamin Harrison Presidential Site, n.d.-b).
- **1974**: after a renovation by the **Arthur Jordan Foundation**, **the entire house opened as a museum for regular daily tours** (Encyclopedia of Indianapolis, n.d.-a).
- **2003**: the museum earned **accreditation from the American Alliance of Museums** (Benjamin Harrison Presidential Site, n.d.-b).
- **2021 to 2022**: a major renovation following a **$6 million capital campaign** (Encyclopedia of Indianapolis, n.d.-a).
- **Today**: the Encyclopedia records the site receiving **up to 35,000 people annually** (Encyclopedia of Indianapolis, n.d.-a).

**Look at the shape of that list.** For roughly thirty five years, the second and third floors of a president's house were **student bedrooms**. **That is not a failure of preservation, it is the reason there is anything to preserve**: a use that pays for a roof is what keeps a building standing long enough for anyone to decide it is important. Whenever you find a landmark that survived, ask what it was doing for a living in the decades before anybody called it a landmark.

**Now the decision that governs everything a visitor sees: the restoration date.** Every house museum picks a moment to represent. The site describes preserving "the Victorian time period as Harrison and his family might have experienced it" (Benjamin Harrison Presidential Site, n.d.-b). **Notice the two hedges in that sentence, "time period" and "might have," and respect them: they are honest.** But the choice still has consequences, and they are the same everywhere:
1. **Everything after the chosen date becomes clutter to be removed**, including the dormitory years, which were a third of the building's life.
2. **Everything before it that was already gone cannot come back**, so the earliest layers are represented by inference.
3. **Rooms get assigned to a purpose the family may have used flexibly.** A period room is a claim.
4. **Absent people stay absent unless somebody decides otherwise.** A coachman's quarters over a carriage house is the sort of space that gets used for storage, and the person who lived there is not represented by furniture.

**What designation does here, since it is the same law course 1 taught.** The Harrison house is a **National Historic Landmark**, the highest federal recognition, and it is on the **National Register**. Carry the rule forward without changing it: **federal listing is recognition plus review leverage when there is federal money or a federal permit, and it is not by itself a demolition veto for a private owner.** The regulation that can stop a demolition is normally **local**. And this house has that too: the **Old Northside** was listed on the National Register in **1978** and **designated an official Indianapolis historic district by the Indianapolis Historic Preservation Commission in the same year** (Encyclopedia of Indianapolis, n.d.-b).

**One geographic fact about that district you should not skip past.** The Encyclopedia gives the Old Northside's boundaries as **16th Street, Bellefontaine Street, I-65, and Pennsylvania Street** (Encyclopedia of Indianapolis, n.d.-b). **An interstate highway is one of the four sides of the neighbourhood a president's house stands in.** Course 1 of this cluster taught the alignment decision as an instrument. **Here it is again, on the other side of town, as a property line.**

**And the neighbourhood's own arc, which is the ordinary American one.** After the First World War residents moved north. During the Second World War large houses were subdivided into apartments and rooming houses. **"By the 1960s and 1970s, the neighbourhood suffered from poverty, neglect, and commercial intrusion."** Homeowners founded **Old Northside, Inc. in 1975**, and the district was listed and locally designated in **1978** (Encyclopedia of Indianapolis, n.d.-b). **The president's house was in a distressed neighbourhood during the same decades that Indiana Avenue was being cleared and Unigov was being written.** Those are different stories with different outcomes, and putting them on one timeline is what Section 3 does next.

## Sources
- Benjamin Harrison Presidential Site. (n.d.-b). *About*. https://bhpsite.org/about/
- Encyclopedia of Indianapolis. (n.d.-a). *Benjamin Harrison Presidential Site*. https://indyencyclopedia.org/benjamin-harrison-presidential-site/
- Encyclopedia of Indianapolis. (n.d.-b). *Old Northside*. https://indyencyclopedia.org/old-northside/
- National Park Service. (n.d.-c). *National Historic Landmarks program*. https://www.nps.gov/subjects/nationalhistoriclandmarks/index.htm
- National Park Service. (n.d.-d). *National Register of Historic Places: Frequently asked questions*. https://www.nps.gov/subjects/nationalregister/faqs.htm`,
      recallContent: [
        {
          prompt: "What did the upper floors of the president's house hold for roughly thirty five years, and why is that not a failure?",
          answer: "Student housing for the Arthur Jordan School of Music. A use that pays for a roof is what keeps a building standing long enough for anyone to decide it is important.",
        },
        {
          prompt: "Give the designation dates for the house and the neighbourhood.",
          answer: "National Historic Landmark January 29, 1964; National Register October 15, 1966, reference 66000010. The Old Northside was listed on the National Register in 1978 and designated an official Indianapolis historic district by the city's preservation commission in the same year.",
        },
        {
          prompt: "Name the four consequences of choosing a restoration date.",
          answer: "Everything after the date becomes clutter to remove; the earliest layers can only be inferred; rooms get assigned a single purpose the family may have used flexibly; and absent people stay absent unless somebody decides otherwise.",
        },
        {
          prompt: "Restate the designation rule this course carries from the Indiana Avenue course.",
          answer: "Federal listing, including National Historic Landmark status, is recognition plus review leverage when federal money or a permit is involved. It is not a demolition veto for a private owner. Local designation under a local ordinance is what regulates.",
        },
        {
          prompt: "What are the Old Northside's boundaries, and which one should stop you?",
          answer: "16th Street, Bellefontaine Street, I-65, and Pennsylvania Street. An interstate is one of the four sides of the neighbourhood, which is the alignment instrument from course 1 reappearing as a property line.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: THE LOAD-BEARING SECTION. What an office can do, what the
    // bill would have done, how a bill actually dies, what was traded, what the record holds.)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ph-powers-what-a-president-can-do",
      title: "8 · What a president can and cannot do",
      section: "Section 3 · Powers",
      body: `**This is the section the whole course exists for**, and it starts with the question people skip: **before asking what Harrison did about voting rights, ask what the office he held was able to do at all.**

**The presidency's actual toolkit, in the Constitution's own words.**

| Tool | Text | What it really means |
|---|---|---|
| **Recommend** | "he shall from time to time give to the Congress Information of the State of the Union, and recommend to their Consideration such Measures as he shall judge necessary and expedient" (U.S. Const. art. II, § 3) | **He can ask. That is all this clause does.** Congress is under no obligation to consider, schedule, debate or vote. |
| **Veto** | Art. I, § 7 | **A negative, never a positive.** A veto stops a bill Congress passed. It cannot start one. |
| **Execute** | "he shall take Care that the Laws be faithfully executed" (U.S. Const. art. II, § 3) | **He can enforce a law that exists.** If Congress has repealed the enforcement statute, there is nothing to execute. |
| **Appoint** | Art. II, § 2 | **He can choose who runs the departments and who prosecutes**, subject to Senate confirmation. This is the most underrated tool on the list. |
| **Convene** | Art. II, § 3 | He may convene Congress on extraordinary occasions. **He cannot make it pass anything once it arrives.** |

**Now the clause that makes federal election law possible at all**, because without it none of this course happens. **Article I, Section 4, Clause 1**: "The Times, Places and Manner of holding Elections for Senators and Representatives, shall be prescribed in each State by the Legislature thereof; **but the Congress may at any time by Law make or alter such Regulations**, except as to the Places of chusing Senators."

**Read the "but" clause slowly, because it is doing enormous work.** States run elections by default. **Congress may override the state rules for congressional elections whenever it chooses.** That is the constitutional hook for every federal elections bill in American history, including the one this course is about, and it is why the 1890 bill covers **congressional** elections rather than all elections. **It is a power of Congress, not of the president.** The president's role in it is the first row of the table above: he can ask.

**And one more clause, which explains the bill's strangest feature.** **Article I, Section 5**: "Each House shall be the Judge of the Elections, Returns and Qualifications of its own Members." **The House decides who is seated in the House.** So a federal supervisor's certified count is not merely evidence for a court, it is evidence for the chamber that decides whether to seat a member. That is why the fight over the 1890 bill was so bitter: **it was a fight about who controls the documentation that decides who sits in Congress.**

**Put the pieces together and you get the honest answer to this course's first question.**

**What a presidency could do about voting rights in 1889:**
1. **Ask Congress, publicly and repeatedly, in documents that become part of the permanent record.**
2. **Lobby members privately** and spend political capital on it.
3. **Appoint people** who would enforce whatever law existed, and appoint Black Americans to visible federal office.
4. **Sign the bill if it ever reached the desk.**

**What a presidency could not do about voting rights in 1889:**
1. **Introduce a bill.** Only a member of Congress can.
2. **Schedule floor time**, in either chamber.
3. **End a filibuster**, then or for the next twenty-six years, for reasons the next lessons make painfully clear.
4. **Order a state to register anybody.**
5. **Enforce a statute that Congress had not passed, or had repealed.**

**Hold that second list in mind for the rest of this course, because it is the answer to the exam question people usually get wrong.** When a president asks for something and does not get it, **the interesting question is almost never "did he want it enough."** It is: **which body had the power, what procedure did it use, and who was in the room.** That is the same question course 1 of this cluster asked about a blight designation. **The instrument matters more than the intention**, and the instrument is always written down.

## Sources
- U.S. Const. art. I, § 4.
- U.S. Const. art. I, § 5.
- U.S. Const. art. I, § 7.
- U.S. Const. art. II, §§ 2-3.
- National Archives. (n.d.). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript`,
      recallContent: [
        {
          prompt: "What does Article II, Section 3 actually let a president do about legislation?",
          answer: "Recommend to Congress's consideration such measures as he judges necessary and expedient. He can ask. Congress is under no obligation to consider, schedule, debate or vote.",
        },
        {
          prompt: "Quote the clause that makes federal election law possible, and say what it does.",
          answer: "Article I, Section 4: the times, places and manner of holding elections for senators and representatives shall be prescribed by each state legislature, 'but the Congress may at any time by Law make or alter such Regulations.' States run elections by default; Congress may override for congressional elections. It is a power of Congress, not of the president.",
        },
        {
          prompt: "Why does Article I, Section 5 make the 1890 fight so bitter?",
          answer: "Because each house is the judge of the elections, returns and qualifications of its own members. A federal supervisor's certified count would be evidence for the chamber that decides who gets seated, so the fight was about who controls the documentation that decides who sits in Congress.",
        },
        {
          prompt: "List what a presidency could NOT do about voting rights in 1889.",
          answer: "Introduce a bill, schedule floor time, end a filibuster, order a state to register anyone, or enforce a statute Congress had not passed or had repealed.",
        },
        {
          prompt: "When a president asks for something and does not get it, what is the useful question?",
          answer: "Not whether he wanted it enough, but which body had the power, what procedure it used, and who was in the room. The instrument matters more than the intention, and the instrument is written down.",
        },
      ],
    },
    {
      slug: "ph-powers-the-bill",
      title: "9 · The bill itself: what H.R. 11045 would have done",
      section: "Section 3 · Powers",
      body: `Now read the thing. **Most arguments about the 1890 federal elections bill are conducted by people who have never read a description of its provisions**, which is how a bill about paperwork became known as a bill about bayonets.

**Identification, so you can find it.** The **Federal Elections Bill of 1890**, **H.R. 11045**, **51st Congress**. Drafted and introduced in the House by Representative **Henry Cabot Lodge**, Republican of Massachusetts, and carried in the Senate by Senator **George Frisbie Hoar**, Republican of Massachusetts. **Its opponents called it the "Force Bill," and that name won.** You will still see the phrase used as if it were the bill's title. **It was a slur, adopted from the Reconstruction era, and it did more work than any speech.**

**What it would have done, in the order the machinery runs.**
1. **A petition starts it.** Federal supervision was not automatic and not nationwide. **Citizens in a district had to ask for it**, in writing.
2. **A federal court appoints.** On that petition, **a federal circuit court** would appoint supervisors of elections for congressional elections in that district.
3. **The supervisors watch, and they are bipartisan by design.** The chief supervisor would select officials "of different political faiths," who would **attend voter registration, inspect registration lists, judge voter qualifications, administer oaths to challenged voters, conduct house-to-house canvasses, and observe the count**.
4. **They certify.** The supervisors' certified count goes into the record, and under Article I, Section 5 the House judges the elections of its own members.
5. **Criminal penalties back it up.** The bill carried fines and imprisonment for election officials who committed fraud, took bribes or accepted illegal ballots, and for voters who voted more than once or engaged in intimidation.
6. **Federal marshals were available** to secure an election if a supervisor requested it. **This is the single provision that produced the "Force Bill" name**, and it is one clause of a bill that is otherwise about registration lists and paperwork.

**A live disagreement in the secondary literature, kept rather than smoothed.** **How many citizens had to sign the petition?** Published accounts give **two different numbers**: some say **one hundred voters**, others say **five hundred citizens** in a district. **This course does not pick one**, because the two figures come from different summaries and neither summary is the bill.

**Here is what to do about that, and it is the most useful paragraph in this lesson.** **The bill's text is not lost.** It is printed in the **Congressional Record** of the 51st Congress, which is digitised and public at congress.gov, and the House debate on the bill runs through late June and early July 1890. **If you want to know the threshold, you can read the section that sets it, today, for free.** Anyone who tells you the number without telling you where they read it is repeating a summary. **So is this course, and it says so.**

**Two things the bill was not, which you need in order to argue about it honestly.**
- **It was not a bill about the South by its text.** It applied to congressional elections generally. **Its supporters intended it to reach southern disfranchisement, and its opponents said so loudly**, but the text does not name a region. **A statute that is general on its face and targeted in its purpose is a recurring American design**, and course 1 of this cluster met the same technique in a population threshold that named exactly one city.
- **It was not a bill about presidential elections or state elections.** **Article I, Section 4 gets Congress into congressional elections and no further.** The scope limit is constitutional, not timid.

**Why the naming fight matters more than it looks.** "Federal Elections Bill" describes supervisors with clipboards. **"Force Bill" describes soldiers.** Both phrases point at the same document, and the second one is the one that survived into the textbooks. **Whoever names a bill has already half-argued it**, and noticing the naming is a skill you should now carry into any legislative fight you read about, including current ones.

## Sources
- McConarty, C. (2020). The Federal Elections Bill of 1890: The continuation of Reconstruction in America. *The Journal of the Gilded Age and Progressive Era, 19*(3), 390-405. https://doi.org/10.1017/S1537781420000067
- U.S. Congress. (1890). *Congressional Record*, 51st Congress, 1st Session [House proceedings, July 1890]. https://www.congress.gov/congressional-record
- U.S. Const. art. I, §§ 4-5.
- U.S. Senate. (n.d.). *About filibusters and cloture: Historical overview*. https://www.senate.gov/about/powers-procedures/filibusters-cloture/overview.htm`,
      recallContent: [
        {
          prompt: "Identify the bill precisely.",
          answer: "The Federal Elections Bill of 1890, H.R. 11045, 51st Congress. Drafted and introduced by Representative Henry Cabot Lodge of Massachusetts and carried in the Senate by Senator George Frisbie Hoar of Massachusetts.",
        },
        {
          prompt: "Walk the bill's machinery in order.",
          answer: "Citizens petition; a federal circuit court appoints supervisors of elections for congressional elections in that district; supervisors of different political faiths attend registration, inspect lists, judge qualifications, canvass and observe the count; they certify, and the House judges the elections of its own members; criminal penalties cover fraud, bribery and intimidation; federal marshals are available on request.",
        },
        {
          prompt: "What is the unresolved detail about the petition, and what should you do about it?",
          answer: "Published summaries disagree on whether one hundred voters or five hundred citizens had to sign. The bill's text is in the Congressional Record of the 51st Congress, digitised and public, so the threshold is checkable rather than arguable.",
        },
        {
          prompt: "Which single provision produced the 'Force Bill' name, and how big a part of the bill was it?",
          answer: "The availability of federal marshals to secure an election on a supervisor's request. It is one clause of a bill otherwise about registration lists, canvassing and certification.",
        },
        {
          prompt: "Why does the naming fight matter?",
          answer: "'Federal Elections Bill' describes supervisors with clipboards; 'Force Bill' describes soldiers. Both name the same document, and the slur is the name that survived into the textbooks. Whoever names a bill has already half-argued it.",
        },
      ],
    },
    {
      slug: "ph-powers-how-a-bill-dies",
      title: "10 · How a bill dies, which is almost never by losing a vote",
      section: "Section 3 · Powers",
      body: `**If you learn one thing from this course, learn this lesson.** Americans are taught that a bill fails when a majority votes it down. **That is the rarest way a bill dies.** Here is what actually happened to H.R. 11045, with dates, and then the general rule it illustrates.

**The chronology.**

| Date | What happened |
|---|---|
| **June 1890** | Lodge introduces the federal elections bill in the House |
| **July 2, 1890** | **The House passes it, 155 to 149, with no Democrats voting in favour** |
| **November 4, 1890** | **Republicans lose the House badly in the midterm elections** |
| **December 2, 1890** | The Senate takes it up; **Democrats begin a filibuster** |
| **December 1890 to January 1891** | The filibuster runs for weeks; a minority caucus makes it a public fight |
| **January 22, 1891** | **The Senate votes 35 to 34 to set the bill aside.** It is never taken up again |
| **March 4, 1891** | The 51st Congress ends. **Every unpassed bill dies automatically** |

**Now count how many of those lines are a vote against the bill on its merits.** **Zero.** The House passed it. The Senate never voted on whether to enact it. **The decisive vote, 35 to 34, was a vote about what the Senate would spend its time on.** A one-vote margin on a scheduling question ended federal protection of Black voting rights for seventy-four years.

**Four mechanisms killed this bill, and every one of them is still in the toolkit.**

**1. The filibuster, in a chamber that could not stop one.** In 1890 and 1891 **the Senate had no cloture rule at all.** The Senate's own history is explicit that the first formal cloture rule came much later: "In 1917, with frustration mounting and at the urging of President Woodrow Wilson, senators adopted a rule (Senate Rule 22) that allowed the Senate to invoke cloture and limit debate with a two-thirds majority vote" (U.S. Senate, n.d.). **Twenty-six years after this bill died, the Senate acquired the tool that might have saved it.** A majority that cannot close debate is not a majority in any operative sense.

**2. The motion to displace.** The January 22 vote did not reject the bill. **It replaced it as the pending business.** This is the quietest and most effective legislative weapon there is: **you do not have to defeat a bill if you can make the chamber do something else instead.** Nobody has to go on record voting against voting rights. They vote for a silver bill.

**3. The calendar.** Congresses expire. **The 51st Congress ended on March 4, 1891, and everything not passed died with it**, requiring reintroduction from scratch in a new Congress with a new membership. **Running out the clock is not a failure to act, it is an action**, and it leaves almost no fingerprints.

**4. The next election, which had already happened.** The **November 1890 midterms** were a catastrophe for Republicans; Democrats took the House by a very large margin, and the 52nd Congress convened with a Democratic majority. **So even if the Senate had passed the bill in January 1891, the fight would have restarted in a House that was about to change hands.** A bill's prospects are set partly by an election that occurs while it is pending, which is why the calendar and the campaign are the same subject.

**Now generalise, because this is the transferable part.** **Ask of any bill that "failed": did it lose a vote, or did it never get one?** The answers look identical in a summary and are completely different as civics.

| Way a bill dies | Who is on the record | How visible |
|---|---|---|
| **Voted down on final passage** | Everyone, by name | Fully visible |
| **Filibustered with no cloture available** | Nobody has to vote at all | Nearly invisible |
| **Displaced by a motion to take up other business** | Members vote for something else, not against this | Deniable |
| **Left to expire when the Congress ends** | No one | Invisible |
| **Never scheduled by leadership** | No one | Invisible |
| **Killed in committee** | A handful of members | Low |

**Compare that table with what you learned two lessons ago about Indiana in 1869**, where a voting rights measure was blocked by legislators resigning to break a quorum. **Different chamber, different century, same family of move: prevent the vote rather than lose it.** Anybody who tells you a legislature "rejected" something has an obligation to say which row of that table they mean, and if they cannot, they have not read the record.

## Sources
- Library of America. (2024, October). *The Federal Elections Bill of 1890*. Story of the Week. https://storyoftheweek.loa.org/2024/10/the-federal-elections-bill-of-1890.html
- McConarty, C. (2020). The Federal Elections Bill of 1890: The continuation of Reconstruction in America. *The Journal of the Gilded Age and Progressive Era, 19*(3), 390-405. https://doi.org/10.1017/S1537781420000067
- U.S. Senate. (n.d.). *About filibusters and cloture: Historical overview*. https://www.senate.gov/about/powers-procedures/filibusters-cloture/overview.htm
- Welch, R. E., Jr. (1965). The Federal Elections Bill of 1890: Postscripts and prelude. *The Journal of American History, 52*(3), 511-526.`,
      recallContent: [
        {
          prompt: "Give the four dates that matter in the bill's death.",
          answer: "July 2, 1890, the House passes it 155 to 149 with no Democratic votes. December 2, 1890, the Senate takes it up and Democrats begin a filibuster. January 22, 1891, the Senate votes 35 to 34 to set it aside. March 4, 1891, the 51st Congress ends and unpassed bills die.",
        },
        {
          prompt: "How many times did the Senate vote on whether to enact the bill?",
          answer: "None. The decisive 35 to 34 vote was about what the Senate would spend its time on, not about the merits of the bill.",
        },
        {
          prompt: "What cloture rule existed in 1891?",
          answer: "None. The Senate's own history dates the first cloture rule to 1917, Rule 22, adopted at Woodrow Wilson's urging. A majority that cannot close debate is not an operative majority.",
        },
        {
          prompt: "Why is a motion to displace such an effective weapon?",
          answer: "You do not have to defeat a bill if you can make the chamber do something else instead. Nobody goes on record voting against the bill; they vote for the other business.",
        },
        {
          prompt: "Name the six ways a bill can die and say which ones leave a public record.",
          answer: "Voted down on final passage (fully visible), filibustered with no cloture (nearly invisible), displaced by a motion to take up other business (deniable), left to expire when the Congress ends (invisible), never scheduled (invisible), killed in committee (low visibility). Only the first puts everyone on the record.",
        },
      ],
    },
    {
      slug: "ph-powers-the-trade",
      title: "11 · The trade that may or may not have happened",
      section: "Section 3 · Powers",
      body: `You will read, in a great many places, that Republicans **traded** the federal elections bill away for two economic laws. **That claim is important, it is popular, and it is an interpretation rather than a finding.** This lesson teaches the difference, which is the same skill lesson 13 of the Indiana Avenue course used to break a thesis with a calendar.

**The claim, stated in its strongest form.** In 1890 three things wanted the Senate's time: **the federal elections bill**, the **McKinley Tariff**, and the **Sherman Silver Purchase Act**. Two of them passed. The one that did not was the elections bill. The usual name for this is **"the Compromise of 1890,"** and the reference works state it plainly: Republicans allowed the silver and tariff measures through, western Republicans got their silver, industrial Republicans got their tariff, **and support for the elections bill was withdrawn**, marking the end of the Republican Party's commitment to Black suffrage (*Compromise of 1890*, n.d.).

**What is solidly established, and you can rely on it.**
1. **All three measures were live in the same Senate in the same year.** That is a calendar fact.
2. **The McKinley Tariff and the Sherman Silver Purchase Act became law in 1890, and the elections bill did not.** That is an outcome fact.
3. **On January 22, 1891, eight or so silver Republicans joined Democrats to set the elections bill aside 35 to 34**, which is why the compromise reading exists at all. **A one-vote margin with defectors from the majority party is precisely the shape a bargain would leave.**

**What is NOT established by anything this course has read.**
1. **That a bargain was struck, by named people, at a named time, on named terms.** A pattern of votes is consistent with a deal and also consistent with senators voting their own state's interests without any deal at all.
2. **That Harrison was party to any such trade.** He signed the tariff and the silver act, which is what a president does with bills his own party passes, and he kept asking for the elections bill afterwards, which is the opposite of what a man who had traded it away would do. **Lesson 12 gives you the December 1892 text.**

**So here is the honest formulation, and you should steal it for your own writing.** **"The elections bill died in a Senate that had just passed the tariff and the silver act, and a handful of silver Republicans supplied the margin that set it aside. Whether that was a bargain or a convergence of interests is contested."** That sentence is defensible. **"Republicans traded Black voting rights for a tariff" is a stronger, better-sounding sentence, and this course cannot verify it.**

**Who has actually done the work, so you can go past this course.**
- **Welch, R. E., Jr. (1965).** "The Federal Elections Bill of 1890: Postscripts and prelude," *Journal of American History* 52(3), 511-526. **The article the compromise argument is usually traced to.**
- **Hirshson, S. P. (1962).** *Farewell to the Bloody Shirt: Northern Republicans and the Southern Negro, 1877-1893*. **The book-length account of the Republican retreat.**
- **Perman, M. (2001).** *Struggle for Mastery: Disfranchisement in the South, 1888-1908*. University of North Carolina Press. **What the southern states did while Congress argued.**
- **McConarty, C. (2020).** "The Federal Elections Bill of 1890: The Continuation of Reconstruction in America," *Journal of the Gilded Age and Progressive Era* 19(3), 390-405. **The most recent of the four, and the most interesting methodologically**: it reads **202 letters sent to Senator Hoar during the bill's nine months** and argues from them that "issues historians traditionally have limited to the Reconstruction Era, in fact, still mattered profoundly to Americans in 1890" (McConarty, 2020, abstract).

**Look at what McConarty did, because it is a method you can copy.** He did not argue about motives in the abstract. **He found a body of two hundred and two letters that ordinary people wrote to the senator carrying the bill, and counted what was in them.** That is the difference between an opinion about the past and a finding about it. **Somebody's correspondence, somebody's minutes, somebody's ledger: the unopened box is where the new argument lives**, in exactly the way course 1 named the Indianapolis Redevelopment Commission's minutes as the next real work on that question.

**What would settle the compromise question.** The **Congressional Record** for the 51st Congress. **Hoar's papers**, and Lodge's. The **private correspondence of the silver Republicans who supplied the margin.** Harrison's own papers. **None of that has been read into this course**, and this course therefore reports the compromise as a contested reading rather than as a fact, and tells you where to go if you want to settle it.

## Sources
- *Compromise of 1890*. (n.d.). In *Dictionary of American History*. Encyclopedia.com. https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/compromise-1890
- Hirshson, S. P. (1962). *Farewell to the bloody shirt: Northern Republicans and the southern Negro, 1877-1893*. Indiana University Press.
- McConarty, C. (2020). The Federal Elections Bill of 1890: The continuation of Reconstruction in America. *The Journal of the Gilded Age and Progressive Era, 19*(3), 390-405. https://doi.org/10.1017/S1537781420000067
- Perman, M. (2001). *Struggle for mastery: Disfranchisement in the South, 1888-1908*. University of North Carolina Press.
- Welch, R. E., Jr. (1965). The Federal Elections Bill of 1890: Postscripts and prelude. *The Journal of American History, 52*(3), 511-526.`,
      recallContent: [
        {
          prompt: "State the 'Compromise of 1890' claim in its strongest form.",
          answer: "That Republicans let the McKinley Tariff and the Sherman Silver Purchase Act through and withdrew support from the federal elections bill, ending the party's commitment to Black suffrage.",
        },
        {
          prompt: "What are the three solidly established facts underneath that claim?",
          answer: "All three measures were live in the same Senate in the same year; the tariff and the silver act became law and the elections bill did not; and on January 22, 1891 a group of silver Republicans joined Democrats to set the bill aside 35 to 34.",
        },
        {
          prompt: "What does the record read here NOT establish?",
          answer: "That a bargain was struck by named people at a named time on named terms, and that Harrison was party to it. He kept asking for the bill afterwards, which is the opposite of what a man who had traded it away would do.",
        },
        {
          prompt: "Give the defensible formulation you should steal for your own writing.",
          answer: "The elections bill died in a Senate that had just passed the tariff and the silver act, and a handful of silver Republicans supplied the margin that set it aside; whether that was a bargain or a convergence of interests is contested.",
        },
        {
          prompt: "What did McConarty do that makes his article methodologically interesting?",
          answer: "He read 202 letters sent to Senator Hoar during the bill's nine months and argued from them that Reconstruction-era issues still mattered profoundly to Americans in 1890. He found a body of evidence and counted what was in it rather than arguing about motives.",
        },
      ],
    },
    {
      slug: "ph-powers-the-record",
      title: "12 · The record: his own words, and the parts that do not fit",
      section: "Section 3 · Powers",
      body: `This lesson gives you Harrison in his own words and then gives you the parts of his record that make the flattering version impossible. **Take both. A person with power is not a verdict, it is a file.**

## What he actually said, from the documents

**Inaugural address, March 4, 1889.** "The freedom of the ballot is a condition of our national life, and no power vested in Congress or in the Executive to secure or perpetuate it should remain unused upon occasion" (Harrison, 1889a). In the same address he asked southern business interests a pointed question: "Is it not quite possible that the farmers and the promoters of the great mining and manufacturing enterprises which have recently been established in the South may yet find that the free ballot of the workingman, without distinction of race, is needed for their defense as well as for his own?" (Harrison, 1889a).

**First annual message, December 3, 1889.** He states the problem: "in many parts of our country where the colored population is large the people of that race are by various devices deprived of any effective exercise of their political rights." He asks the question directly: "When and under what conditions is the black man to have a free ballot?" And he makes the request: "I earnestly invoke the attention of Congress to the consideration of such measures within its well-defined constitutional powers as will secure to all our people a free exercise of the right of suffrage and every other civil right" (Harrison, 1889b).

**Third annual message, December 9, 1891**, eleven months after the bill died: "If I were called upon to declare wherein our chief national danger lies, I should say without hesitation in the overthrow of majority control by the suppression or perversion of the popular suffrage" (Harrison, 1891).

**Fourth annual message, December 6, 1892**, a month after he lost re-election, on lynching: "The frequent lynching of colored people accused of crime is without the excuse, which has sometimes been urged by mobs for a failure to pursue the appointed methods for the punishment of crime, that the accused have an undue influence over courts and juries. Such acts are a reproach to the community where they occur, and so far as they can be made the subject of Federal jurisdiction the strongest repressive legislation is demanded" (Harrison, 1892). And, in the same message: "Is it not time that we should come together upon the high plane of patriotism while we devise methods that shall secure the right of every man qualified by law to cast a free ballot and give to every such ballot an equal value in choosing our public officers and in directing the policy of the Government?" (Harrison, 1892).

**Notice the dates on those four quotations.** 1889, 1889, 1891, 1892. **Before the bill, during the bill, after the bill failed, and after he had personally lost an election.** Whatever else is arguable, **the claim that Harrison went quiet on this after 1891 is refuted by his own messages**, and you can check every sentence above against a published text in minutes.

## What he did, beyond talking

- **Appointments.** He appointed **Frederick Douglass** as United States minister resident and consul general to **Haiti** in 1889. Douglass **resigned in July 1891**, in disagreement with the administration over its pursuit of a naval base at Môle Saint-Nicolas. Harrison also appointed **Blanche K. Bruce**, the former Mississippi senator, to the federal post of **Recorder of Deeds for the District of Columbia**, which Douglass had previously held. (Published accounts differ on the exact year of the Bruce appointment, so this course gives none.)
- **Lobbying.** The Miller Center describes Harrison as engaging in "vigorous presidential lobbying" for the federal elections bill and for the **Blair Education Bill**, a proposal for federal aid to schools that would have benefited Black schools in particular. **Both failed** (Miller Center, n.d.-c).

## The parts that do not fit

**1. He signed the Geary Act.** On **May 5, 1892**, Harrison signed legislation extending Chinese exclusion for ten years and **requiring Chinese residents of the United States to obtain and carry a certificate of residence**, with deportation or a year of hard labour for those found without one. **A president who spent four years asking Congress to protect one group's political rights signed a law that stripped another group's ordinary liberty and made them carry papers.** Both things are true and they were nineteen months apart.

**2. Wounded Knee happened on his watch, after an order he gave.** On **November 13, 1890**, Harrison ordered that a "body of troops sufficiently large to be impressive" be sent to the Lakota reservations. On **December 29, 1890**, the Seventh Cavalry killed Lakota men, women and children at Wounded Knee Creek. **Casualty estimates vary substantially across sources and this course does not adopt a number.** Soldiers of the Seventh Cavalry subsequently received the Medal of Honor for the engagement, an award that remains contested today. **Five weeks separate that massacre from the Senate vote that killed the elections bill.**

**3. His own election.** Lesson 3 covered it. **The "blocks of five" circular was written by his campaign's treasurer, in his home state, in the election he won**, and he did not carry his own city.

## How to hold all of that at once

**Do not average it.** A record is not a score. **The correct output of this lesson is a list, not a verdict**, and the list looks like this: he said the right thing repeatedly and on the record; he asked Congress for the right thing and could not make Congress act; he appointed Black Americans to visible federal office; he signed a law of racial exclusion aimed at Chinese residents; he ordered the deployment that preceded a massacre of Lakota people; and he reached office through a campaign with a documented corruption problem.

**The test of whether you have understood this lesson is whether both of the following sentences make you uncomfortable.**
- **"Benjamin Harrison was a champion of civil rights."**
- **"Benjamin Harrison did nothing for civil rights."**

**If only one of them bothers you, go back and read the parts you skipped.**

## Sources
- Harrison, B. (1889a, March 4). *Inaugural address*. The Avalon Project, Yale Law School. https://avalon.law.yale.edu/19th_century/harris.asp
- Harrison, B. (1889b, December 3). *First annual message*. Miller Center, University of Virginia. https://millercenter.org/the-presidency/presidential-speeches/december-3-1889-first-annual-message
- Harrison, B. (1891, December 9). *Third annual message*. The American Presidency Project, University of California, Santa Barbara. https://www.presidency.ucsb.edu/documents/third-annual-message-14
- Harrison, B. (1892, December 6). *Fourth annual message*. The American Presidency Project, University of California, Santa Barbara. https://www.presidency.ucsb.edu/documents/fourth-annual-message-13
- Geary Act, ch. 60, 27 Stat. 25 (1892). https://immigrationhistory.org/item/geary-act/
- Miller Center. (n.d.-c). *Benjamin Harrison: Domestic affairs*. University of Virginia. https://millercenter.org/president/bharrison/domestic-affairs
- National Museum of the American Indian. (n.d.). *Wounded Knee*. Smithsonian Institution. https://americanindian.si.edu/`,
      recallContent: [
        {
          prompt: "Quote Harrison's inaugural line about the ballot and give its date.",
          answer: "March 4, 1889: 'The freedom of the ballot is a condition of our national life, and no power vested in Congress or in the Executive to secure or perpetuate it should remain unused upon occasion.'",
        },
        {
          prompt: "Why do the dates of the four quoted documents matter?",
          answer: "They run 1889, 1889, 1891 and 1892, which is before the bill, during it, eleven months after it died, and a month after Harrison lost re-election. The claim that he went quiet after 1891 is refuted by his own messages.",
        },
        {
          prompt: "What did Harrison say about lynching in December 1892?",
          answer: "That the frequent lynching of colored people accused of crime is without the excuse mobs have sometimes urged, that such acts are a reproach to the community where they occur, and that so far as they can be made the subject of federal jurisdiction the strongest repressive legislation is demanded.",
        },
        {
          prompt: "Name the three parts of the record that do not fit a flattering story.",
          answer: "He signed the Geary Act on May 5, 1892, extending Chinese exclusion and requiring Chinese residents to carry certificates of residence; he ordered troops to the Lakota reservations in November 1890, five weeks before the Wounded Knee massacre; and his own 1888 election carried the 'blocks of five' vote-buying circular written by his campaign treasurer.",
        },
        {
          prompt: "What is the test of whether you have understood this lesson?",
          answer: "Both 'Harrison was a champion of civil rights' and 'Harrison did nothing for civil rights' should make you uncomfortable. If only one does, you skipped part of the record.",
        },
      ],
    },
    {
      slug: "ph-powers-two-levers",
      title: "13 · Two levers on one question: national power and local boundaries",
      section: "Section 3 · Powers",
      body: `**This is the lesson that ties this course to the rest of the Indianapolis cluster, and it is also the lesson where this course states its own limit.**

**The question the whole cluster is really about is not "who may vote."** It is **"whose vote decides anything."** Those are different questions and the second one is the one governments have actually spent a century and a half managing. **There are two levers on it, and this cluster shows you one of each.**

**Lever one: national power over the machinery of an election.** That is this course. **Federal supervisors, appointed by a federal court on a citizen petition, watching registration and certifying counts.** It reaches into a state's election process and audits it. **It failed on January 22, 1891, by one vote on a scheduling motion**, and three years later Congress repealed most of what remained of the earlier machinery (*Civil rights repeal act*, n.d.).

**Lever two: the boundary of the jurisdiction itself.** That is courses 2 and 4 of this cluster, and it happened in this same city. In **1969** the Indiana General Assembly passed **Unigov**, consolidating Indianapolis with Marion County effective **January 1, 1970**. It is recorded as **the only major postwar city and county consolidation accomplished without a voter referendum**. **The school districts were deliberately excluded**, a decision the mayor and the school board president both explained at the time as the price of passage. **The Black share of the city's population fell immediately from about 27 percent of the old city to about 17 percent of the consolidated city, and did not recover until the 2010 census.** Judge S. Hugh Dillin later found that Unigov fostered segregation by taking in the predominantly white townships while leaving the school district boundaries where they were (Wachter, 2014; Encyclopedia of Indianapolis, n.d.-c).

**Now put the two side by side, because the comparison is the lesson.**

| | Lever one (this course) | Lever two (courses 2 and 4) |
|---|---|---|
| **What it changes** | How an election is run and audited | **Who is inside the electorate** |
| **Level of government** | Federal | State statute, applied to one city |
| **Instrument** | A bill: H.R. 11045 | A bill: the 1969 Unigov act |
| **How it resolved** | **Died on a 35 to 34 procedural vote** | **Passed, without a referendum** |
| **Visible to a voter?** | Yes: supervisors show up at the polls | **Barely: the map changes** |
| **Reversible?** | Reintroduce and pass a statute | Requires undoing a jurisdiction |

**The point of the table is the last three rows.** **The lever that failed is the loud one, and the lever that worked is the quiet one.** Supervisors at a polling place are a visible federal presence that opponents could call an army. **A boundary change is a line on a map that most residents never see drawn**, and it lasts.

**Now the limit, stated as plainly as this cluster states everything.** **These two events are not a causal chain, and this course does not claim they are.** Eighty years separate them. Different governments, different parties, different instruments, different stated purposes. **Nobody in the Indiana General Assembly in 1969 was finishing what the United States Senate started in 1891.** Anyone who tells you otherwise is doing the thing course 1 of this cluster caught itself doing with Unigov and the Indiana Avenue clearance, and had to publicly weaken.

**What IS defensible, and it is enough.** **Both are instruments aimed at the same variable, which is the effective weight of a vote.** Learning to see them as members of one family is the transferable skill, because **the family is still in use**: registration rules, precinct consolidation, districting, annexation, at-large versus district elections, and the composition of the body that decides any of it. **When somebody proposes a change to an election, ask which lever it is. Is it about the machinery, or is it about the boundary?** Then ask the question this whole cluster keeps asking: **who decided, under what statute, on what record, and who was in the room.**

**One honest asymmetry worth noticing.** Lever one required Congress to act and it did not. **Lever two required a state legislature to act and it did.** **Doing nothing is a decision that favours whatever the status quo already produces**, which is why the calendar mechanisms in lesson 10 are not a technicality. **In a system with many veto points, the party that wants nothing to change has to win once, and the party that wants change has to win at every stage.**

## Sources
- *Civil rights repeal act, 28 Stat. 36 (1894)*. (n.d.). In *Encyclopedia of the American Constitution*. Encyclopedia.com. https://www.encyclopedia.com/politics/encyclopedias-almanacs-transcripts-and-maps/civil-rights-repeal-act-28-stat-36-1894
- Encyclopedia of Indianapolis. (n.d.-c). *Structure of Unigov*. https://indyencyclopedia.org/structure-of-unigov/
- U.S. Senate. (n.d.). *About filibusters and cloture: Historical overview*. https://www.senate.gov/about/powers-procedures/filibusters-cloture/overview.htm
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "What is the question the whole cluster is really about?",
          answer: "Not who may vote, but whose vote decides anything. Governments have spent a century and a half managing the second question, and there are two levers on it.",
        },
        {
          prompt: "Describe the two levers.",
          answer: "Lever one is national power over the machinery of an election: federal supervisors watching registration and certifying counts, which failed on a 35 to 34 procedural vote in 1891. Lever two is the boundary of the jurisdiction itself: the 1969 Unigov act, effective January 1, 1970, which passed without a referendum and moved the Black share of the city's population from about 27 percent to about 17 percent.",
        },
        {
          prompt: "Which lever is loud and which is quiet, and why does that matter?",
          answer: "Supervisors at a polling place are visible and opponents could call them an army, so the loud lever failed. A boundary change is a line on a map that most residents never see drawn, so the quiet lever passed and lasted.",
        },
        {
          prompt: "State the limit this lesson puts on the comparison.",
          answer: "The two events are not a causal chain. Eighty years, different governments, parties, instruments and stated purposes separate them. Nobody in the 1969 Indiana General Assembly was finishing what the Senate started in 1891.",
        },
        {
          prompt: "What is the honest asymmetry between the two cases?",
          answer: "Lever one required Congress to act and it did not; lever two required a state legislature to act and it did. Doing nothing favours whatever the status quo already produces, so in a system with many veto points the side wanting no change has to win once and the side wanting change has to win at every stage.",
        },
      ],
    },
    {
      slug: "ph-quiz-powers",
      title: "14 · Quiz: what the office could do",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Under Article II, Section 3, a president's power over legislation amounts to what?",
            options: [
              "Introducing bills in either chamber",
              "Setting the Senate's calendar",
              "Recommending measures to Congress's consideration",
              "Requiring a committee vote",
            ],
            correctIndex: 2,
            explanation: "He can ask. Congress is under no obligation to consider, schedule, debate or vote on what he asks for.",
            sourceLessonSlug: "ph-powers-what-a-president-can-do",
          },
          {
            prompt: "Which constitutional clause makes a federal elections law possible at all?",
            options: [
              "Article I, Section 4, which lets Congress make or alter state regulations for congressional elections",
              "The Tenth Amendment",
              "Article II, Section 2, the appointment power",
              "The Commerce Clause",
            ],
            correctIndex: 0,
            explanation: "States run elections by default, but Congress may override for congressional elections. It is a power of Congress, not of the president, which is why the president could only ask.",
            sourceLessonSlug: "ph-powers-what-a-president-can-do",
          },
          {
            prompt: "Why does Article I, Section 5 make certified election returns so valuable?",
            options: [
              "It gives the president a veto over returns",
              "It requires the Supreme Court to review every count",
              "It bars states from counting ballots",
              "Each house is the judge of the elections, returns and qualifications of its own members",
            ],
            correctIndex: 3,
            explanation: "A supervisor's certified count would be evidence for the chamber that decides who gets seated, so the fight was over who controls the documentation that decides who sits in Congress.",
            sourceLessonSlug: "ph-powers-what-a-president-can-do",
          },
          {
            prompt: "Which of these was NOT within a president's power in 1889?",
            options: [
              "Appointing officials subject to Senate confirmation",
              "Ending a Senate filibuster",
              "Recommending legislation in an annual message",
              "Signing a bill that reached the desk",
            ],
            correctIndex: 1,
            explanation: "No one could end a filibuster in 1889. The Senate had no cloture rule until 1917.",
            sourceLessonSlug: "ph-powers-what-a-president-can-do",
          },
          {
            prompt: "Identify the bill at the centre of this course.",
            options: [
              "The Blair Education Bill of 1890",
              "The Enforcement Act of 1871",
              "The Federal Elections Bill of 1890, H.R. 11045, drafted by Rep. Henry Cabot Lodge and carried in the Senate by Sen. George Frisbie Hoar",
              "The Sherman Silver Purchase Act",
            ],
            correctIndex: 2,
            explanation: "Opponents called it the 'Force Bill', a slur borrowed from Reconstruction, and that name is the one that survived into the textbooks.",
            sourceLessonSlug: "ph-powers-the-bill",
          },
          {
            prompt: "How would federal supervision of an election have been triggered under the bill?",
            options: [
              "By a petition from citizens in a district, on which a federal circuit court would appoint supervisors",
              "Automatically in every southern district",
              "By presidential proclamation",
              "By a vote of the state legislature",
            ],
            correctIndex: 0,
            explanation: "Supervision was neither automatic nor nationwide. Published summaries disagree on whether the petition needed one hundred voters or five hundred citizens, and the bill's text in the Congressional Record settles it.",
            sourceLessonSlug: "ph-powers-the-bill",
          },
          {
            prompt: "Which provision of the bill produced the nickname 'Force Bill'?",
            options: [
              "The availability of federal marshals to secure an election on a supervisor's request",
              "The requirement that supervisors be of different political faiths",
              "The house-to-house canvass",
              "The criminal penalties for bribery",
            ],
            correctIndex: 0,
            explanation: "It is one clause of a bill otherwise about registration lists, canvassing and certification, and the slur outperformed the bill's actual name.",
            sourceLessonSlug: "ph-powers-the-bill",
          },
          {
            prompt: "What happened to the bill in the House of Representatives?",
            options: [
              "It was defeated by six votes",
              "It never came to a vote",
              "It passed on July 2, 1890, by 155 to 149, with no Democrats voting in favour",
              "It was referred back to committee",
            ],
            correctIndex: 2,
            explanation: "The bill's only fatal problem was in the Senate, where it never received a vote on the merits at all.",
            sourceLessonSlug: "ph-powers-how-a-bill-dies",
          },
          {
            prompt: "What did the Senate's January 22, 1891 vote of 35 to 34 actually decide?",
            options: [
              "That the bill was unconstitutional",
              "That the bill should be set aside as the pending business, not whether to enact it",
              "That the bill was enacted",
              "That the Senate would adjourn for the year",
            ],
            correctIndex: 1,
            explanation: "A motion to displace is the quietest legislative weapon there is: nobody has to go on record against the bill, they vote for other business.",
            sourceLessonSlug: "ph-powers-how-a-bill-dies",
          },
          {
            prompt: "What cloture rule was available to break the 1890-91 filibuster?",
            options: [
              "A simple majority rule adopted in 1806",
              "A three-fifths rule adopted in 1875",
              "The Reed Rules, adopted in 1890",
              "None. The Senate's first cloture rule, Rule 22, came in 1917",
            ],
            correctIndex: 3,
            explanation: "The Senate's own history dates Rule 22 to 1917, adopted at Woodrow Wilson's urging. A majority that cannot close debate is not an operative majority.",
            sourceLessonSlug: "ph-powers-how-a-bill-dies",
          },
          {
            prompt: "Which of these ways of killing a bill puts every member on the public record?",
            options: [
              "A filibuster with no cloture available",
              "Letting the Congress expire",
              "A motion to displace the bill with other business",
              "A vote against it on final passage",
            ],
            correctIndex: 3,
            explanation: "Every other route leaves few or no fingerprints, which is exactly why they are used more often.",
            sourceLessonSlug: "ph-powers-how-a-bill-dies",
          },
          {
            prompt: "How should the 'Compromise of 1890' be described?",
            options: [
              "As a contested interpretation: three measures were live at once, two passed, and whether a bargain was struck by named people on named terms is not established by the record read here",
              "As a signed written agreement between Harrison and Senate Democrats",
              "As a myth with no supporting evidence at all",
              "As a Supreme Court decision",
            ],
            correctIndex: 0,
            explanation: "A pattern of votes is consistent with a deal and equally consistent with senators voting their own state's interests. Welch, Hirshson, Perman and McConarty are where the work has been done.",
            sourceLessonSlug: "ph-powers-the-trade",
          },
          {
            prompt: "What makes McConarty's 2020 article methodologically interesting?",
            options: [
              "It relies entirely on later biographies",
              "It reads 202 letters sent to Senator Hoar during the bill's nine months and argues from what is in them",
              "It uses census data only",
              "It is a work of fiction based on the period",
            ],
            correctIndex: 1,
            explanation: "The difference between an opinion about the past and a finding about it is a body of evidence somebody actually counted. The unopened box is where the new argument lives.",
            sourceLessonSlug: "ph-powers-the-trade",
          },
          {
            prompt: "Which of these is a documented part of Harrison's record that complicates a flattering story?",
            options: [
              "He vetoed the Sherman Antitrust Act",
              "He refused to appoint any Black Americans to federal office",
              "He never mentioned voting rights after 1891",
              "He signed the Geary Act on May 5, 1892, extending Chinese exclusion and requiring Chinese residents to carry certificates of residence",
            ],
            correctIndex: 3,
            explanation: "He also ordered troops to the Lakota reservations in November 1890, five weeks before the Wounded Knee massacre. A record is a list, not a score.",
            sourceLessonSlug: "ph-powers-the-record",
          },
          {
            prompt: "This course compares the 1890 elections bill with the 1969 Unigov consolidation. What is the claim, and what is the limit?",
            options: [
              "That Unigov was a direct continuation of the Senate's 1891 vote",
              "That both are instruments aimed at the effective weight of a vote, but they are not a causal chain and eighty years and different governments separate them",
              "That the two events happened in the same decade",
              "That neither had any effect on voting",
            ],
            correctIndex: 1,
            explanation: "One lever changes how an election is run; the other changes who is inside the electorate. The loud lever failed and the quiet lever passed, which is the transferable observation.",
            sourceLessonSlug: "ph-powers-two-levers",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
