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
              "Harrison won both the popular vote and the electoral college",
              "Harrison carried the electoral college 233 to 168 while receiving about 90,000 fewer popular votes than Cleveland",
              "Cleveland won the electoral college but lost the popular vote",
              "The election was decided in the House of Representatives",
            ],
            correctIndex: 1,
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
              "To discredit Harrison",
              "Because the charge of election fraud in 1888 ran in both directions, which is why southern Democrats could posture as defenders of clean elections",
              "Because it was the only issue in the campaign",
              "Because the courts resolved it",
            ],
            correctIndex: 1,
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
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
