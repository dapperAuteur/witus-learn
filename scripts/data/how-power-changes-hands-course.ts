// Authored "How Power Changes Hands" — course 8 of Path A ("Who Has the Power? Governments From the
// Block to the Globe"), planned in plans/46-structures-paths-government-and-business.md (Path A, row 8).
//
// WHAT THIS COURSE IS
// -------------------
// The course about the moment authority moves from one set of hands to another. It has two halves.
//   * FIRST, elections as MACHINES that turn the same ballots into different winners. The claim the
//     whole first three sections defend is that the counting RULE, not the votes alone, picks the
//     winner: first-past-the-post (FPTP), party-list proportional representation, ranked-choice /
//     instant-runoff (IRV), and mixed-member proportional (MMP) can each seat a different candidate
//     from one identical set of ballots. Duverger's law, wasted votes, the spoiler effect, district
//     magnitude, thresholds, and the leverage of the district line are taught as the moving parts.
//   * SECOND, the routes by which power changes hands OUTSIDE the ballot: coups, revolutions,
//     negotiated transitions (Poland's Round Table 1989, South Africa 1990-1994), and term limits as
//     a design choice that schedules the handover in advance.
//
// RELATIONSHIP TO OTHER SHIPPED COURSES IN THIS PATH (do not contradict, do not repeat)
// ------------------------------------------------------------------------------------
//   * Course 1, "Who Has the Power to Do This?", shipped the METHOD (who acted, under what authority,
//     where the power comes from, WHO CAN OVERTURN IT). This course is the general case of that fourth
//     question at the scale of a whole government: who can overturn not one ordinance but the rulers
//     themselves, and by what mechanism. It reuses the method's habit of reading a rule as a rule.
//   * Course 3, "How Countries Constitute Themselves", covers how CONSTITUTIONS get made (constituent
//     assembly, negotiated transition, imposition after defeat). This course does NOT re-teach
//     constitution drafting. Where the two touch (negotiated transitions), this course reads the
//     TRANSFER OF POWER (who ends up governing, by what bargain), and points to course 3 for the
//     document-making side.
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * The worked example in Section 1 that yields three different winners from one set of ballots is a
//     CLEARLY HYPOTHETICAL, mathematically checked illustration, and the body says so in those words.
//     It is not a real election.
//   * Only two specific real results are cited, both heavily documented: the 1994 South African
//     election (ANC about 62.6 percent) and the June 1989 partly-free Polish election (Solidarity 99
//     of 100 Senate seats, and all 161 freely contested Sejm seats). Every "which country uses which
//     system" claim is a structural fact from that country's own electoral authority or a standard
//     comparative reference, not a vote total.
//   * Mechanisms are stated precisely: Duverger's law is a TENDENCY with a standard counterexample
//     (India), IRV eliminates the lowest and TRANSFERS to next preferences (it is not PR), and MMP
//     seats district winners first and adds LIST TOP-UP seats to make each party's total proportional.
//   * Contested or recent political events (the spoiler debate, gerrymandering, secession disputes)
//     are reported neutrally and attributed, with the mechanism taught rather than a verdict asserted.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens only. Verbatim cited titles inside a
// `## Sources` block are the only place a dash may survive.

import type { AuthoredCourse } from "./authored-course";

export const HOW_POWER_CHANGES_HANDS_COURSE: AuthoredCourse = {
  title: "How Power Changes Hands",
  description:
    "The course about the moment authority moves from one set of hands to another, and it has two halves. The first half treats elections as machines: the same ballots, counted under different rules, produce different winners. You will see one identical set of votes seat three different candidates under three different systems, and then learn the moving parts that make that happen: first-past-the-post and the two-party pull of Duverger's law, wasted votes and the spoiler effect, party-list proportional representation, district magnitude and thresholds, ranked-choice or instant-runoff, and mixed-member proportional. The claim underneath all of it is that the counting rule, not the votes alone, picks the winner, which is why changing the rule is itself a way of changing who holds power. The second half leaves the ballot box for the routes power takes when elections are not the mechanism: coups seized from inside the state, revolutions driven from below, negotiated transitions like Poland's Round Table in 1989 and South Africa between 1990 and 1994, and term limits as a design choice that schedules the handover in advance. It is course 8 of the path whose method course, Who Has the Power to Do This?, taught the four questions, and it is the general case of that course's fourth question, who can overturn it, asked about the rulers themselves. It builds on that method and complements the constitution course without repeating it. This course teaches how to read the rules by which power changes hands. It is not legal or political advice, and it takes no side in any contested election or dispute.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · The rule, not the votes, picks the winner
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-changes-what-this-is",
      title: "1 · What this course teaches, and what it is not",
      section: "Section 1 · The rule, not the votes, picks the winner",
      body: `Power changes hands. A president leaves and another arrives. A parliament flips. A ruler is overthrown. This course is about the **mechanisms** by which that happens, and about a fact most people never stop to notice: **the same set of votes can hand power to different people, depending only on the rule used to count them.**

## First, the boundary. This is not advice, and it takes no side.

**This course teaches how to READ the rules by which power changes hands. It is not legal or political advice**, and it does not tell you which system is best or who should have won any real contest. Where a real election or transition is contested, the course reports what the record establishes, attributes the claim, and teaches the mechanism rather than delivering a verdict. That discipline runs the whole way through, because the subject is one where it is easy to smuggle a preference in as if it were a fact.

## The one idea, stated once and defended for three sections

Here is the claim the first half of this course exists to prove: **an election system is a machine, and the machine, not the votes alone, chooses the winner.** Feed one fixed set of ballots into first-past-the-post and you may get one winner. Feed the *same* ballots into ranked-choice, or party-list proportional representation, or a mixed-member system, and you can get a *different* winner, or no single winner at all. Nobody changed their mind. Nobody miscounted. **The rule changed, and the rule is part of the outcome.**

That is why this belongs in a path about power. **Choosing the counting rule is itself an exercise of power**, made long before any vote is cast, usually by the people who wrote the constitution or the election law. When you learn to read the rule, you learn to see a decision that shaped the result before the campaign even began.

## Two halves, because power leaves office two ways

| Half | The mechanism | Sections |
|---|---|---|
| **The ballot** | Elections, and how the counting rule picks the winner | 1, 2, 3 |
| **Not the ballot** | Coups, revolutions, negotiated transitions, term limits | 4 |

The first half is the larger one, because elections are the ordinary way power changes hands in a functioning democracy, and their machinery is genuinely counterintuitive. The second half is about the other ways: seizure, upheaval, bargain, and the clock. **Both halves answer the same question in the end: when the people in charge stop being in charge, what was the mechanism?**

## How this sits on the path

This is course 8 of "Who Has the Power? Governments From the Block to the Globe." **Course 1, "Who Has the Power to Do This?", taught the method**: given any government action, find the body, its authority, the document, and **who can overturn it.** This course is the general case of that fourth question, asked at the largest scale. Not "who can overturn this ordinance?" but **"who can overturn the government itself, and by what mechanism?"** And where this course reaches negotiated transitions in Section 4, it reads them as transfers of power; **course 3, "How Countries Constitute Themselves", handles the constitution-making side**, so this course does not repeat it.

## What you will be able to do

By the end you should be able to take a real multi-candidate contest, look at the counting rule, and say how the outcome might differ under a different rule; and you should be able to name, for any change of ruler, which of the mechanisms in this course did the work. **That is the capstone: one contest, two systems, from the record.**

## Sources
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Farrell, D. M. (2011). Electoral systems: A comparative introduction (2nd ed.). Palgrave Macmillan.`,
    },
    {
      slug: "power-changes-same-ballots",
      title: "2 · The same ballots, three different winners",
      section: "Section 1 · The rule, not the votes, picks the winner",
      body: `Before any vocabulary, see the claim happen. This lesson runs **one fixed set of ballots** through three different counting rules and gets three different winners. **The example is a clearly hypothetical illustration**, built and checked to make the point cleanly; it is not a real election. But the arithmetic is real, and you can verify every step yourself.

## The ballots

Imagine 100 voters choosing among three candidates, **A**, **B**, and **C**, and suppose each voter ranks all three. The 100 ballots come in exactly three shapes:

| How many voters | Their ranking (first to last) |
|---|---|
| **40** | A, then B, then C |
| **35** | C, then B, then A |
| **25** | B, then C, then A |

These 100 ballots never change in what follows. **Only the rule changes.**

## Rule 1: first-past-the-post. Winner: A.

Under **first-past-the-post (FPTP)**, only first choices count, and whoever has the most first choices wins, even without a majority. First choices: **A has 40, C has 35, B has 25.** A has the most, so **A wins with 40 percent.** Notice what just happened: **60 of the 100 voters ranked A dead last**, and A still won, because the 60 who opposed A split their first choices between C and B (Reynolds et al., 2005).

## Rule 2: ranked-choice (instant-runoff). Winner: C.

Under **ranked-choice voting, also called instant-runoff (IRV)**, if no candidate has a majority of first choices you eliminate the candidate with the fewest and transfer those ballots to their next choice, repeating until someone has a majority. No one has 51 here, so eliminate the lowest, **B (25).** B's voters ranked C second, so their 25 ballots move to **C**. Now **C has 35 + 25 = 60, and A still has 40. C wins with a majority (Reynolds et al., 2005).** The same ballots, a different rule, a different winner.

## Rule 3: a pairwise (Condorcet) count. Winner: B.

Now ask a third question: **is there a candidate who would beat each of the others one-on-one?** Check every pair using the full rankings.

| Match-up | Who each voter prefers | Result |
|---|---|---|
| **A vs B** | 40 prefer A; 35 + 25 = 60 prefer B | **B beats A, 60 to 40** |
| **B vs C** | 40 + 25 = 65 prefer B; 35 prefer C | **B beats C, 65 to 35** |

**B beats both A and C head-to-head**, which makes B the "beats-everyone" winner, named after the Marquis de Condorcet. Yet B came *last* under FPTP and was *eliminated first* under IRV. **The candidate a majority prefers over each rival can be the candidate the common rules throw out first (Riker, 1982).**

## And under proportional representation, there is no single winner at all

One more rule changes the question itself. Under **party-list proportional representation**, if A, B, and C were parties, the 100 votes would buy seats roughly in proportion: about **40, 35, and 25 percent of the seats.** PR does not crown one winner; it seats all three and makes them bargain afterward. **So the rule decides not only WHO wins but WHETHER "a winner" is even the right word (Farrell, 2011).**

## The lesson in one line

Three rules, three winners, and a fourth rule with no single winner, from **one unchanging set of ballots.** Hold onto this the whole course: **when you hear an election result, you are hearing the votes AND the rule, and you cannot separate them after the fact.** The rest of Section 1 gives you the vocabulary to say exactly why.

## Sources
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Riker, W. H. (1982). The two-party system and Duverger's law: An essay on the history of political science. American Political Science Review, 76(4), 753-766.
- Farrell, D. M. (2011). Electoral systems: A comparative introduction (2nd ed.). Palgrave Macmillan.`,
      recallContent: [
        {
          prompt: "State this course's one central claim about elections in a sentence.",
          answer: "An election system is a machine, and the machine, not the votes alone, chooses the winner: the same set of ballots counted under different rules can seat different candidates, or no single winner at all. Choosing the counting rule is itself an exercise of power.",
        },
        {
          prompt: "What are the two halves of this course, and what does each cover?",
          answer: "The ballot (elections, and how the counting rule picks the winner, Sections 1 to 3) and NOT the ballot (coups, revolutions, negotiated transitions, and term limits, Section 4). Both answer: when the people in charge stop being in charge, what was the mechanism?",
        },
        {
          prompt: "How is this course the general case of course 1's fourth question?",
          answer: "Course 1's method asked, of any government action, who can overturn it. This course asks that at the largest scale: who can overturn the government itself, and by what mechanism (a counting rule, a coup, a revolution, a bargain, or a term limit).",
        },
      ],
    },
    {
      slug: "power-changes-vocabulary",
      title: "3 · The moving parts: majority, plurality, wasted votes, district magnitude",
      section: "Section 1 · The rule, not the votes, picks the winner",
      body: `The last lesson showed the effect. This lesson names the parts, because you cannot compare two systems until you can say precisely how each one counts. Five terms carry most of the weight in this whole course. Learn them here and the rest is application.

## Majority versus plurality

A **majority** is more than half: 51 of 100. A **plurality** is simply the most, even if it is far short of half: A's 40 in the last lesson was a plurality, not a majority. **The single most consequential design choice in an election rule is whether winning requires a majority or only a plurality.** FPTP asks only for a plurality, which is exactly how a candidate 60 percent of voters ranked last can win. Runoffs and ranked-choice exist to force a **majority** before someone takes the seat (Reynolds et al., 2005).

## Wasted votes

A **wasted vote** is a vote that elects nobody. Under FPTP there are two kinds: votes for losing candidates, and **surplus** votes for a winner beyond the number needed to win. In the last lesson, the 60 votes not for A elected no one; they were wasted. **The share of wasted votes is a measure of how much of the electorate the result simply ignores**, and it is the number proportional systems are built to shrink (Gallagher & Mitchell, 2008). Keep the term precise: a wasted vote is not a mistaken vote, it is a vote the *rule* discards.

## Proportionality and disproportionality

**Proportionality** measures how closely each party's share of seats matches its share of votes. A perfectly proportional result gives a party with 30 percent of the votes 30 percent of the seats. **Disproportionality** is the gap between the two, and it is not an accident or a flaw; it is produced by the rule. FPTP is highly disproportional by design: it manufactures majorities out of pluralities. PR is built to be proportional. **Neither is broken; they are answers to different questions (Lijphart, 1994).**

## District magnitude

**District magnitude** is the number of seats elected from one district. This one number does more to shape an outcome than almost anything else. A **single-member district** (magnitude 1) elects one person and is the home of FPTP and instant-runoff. A **multi-member district** (magnitude 5, 10, 150) elects many and is where proportional representation lives, because you cannot divide one seat proportionally. **The larger the district magnitude, the more proportional the result can be**, and the political scientist Gary Cox summarized the ceiling as a rule of thumb: the number of viable competitors tends toward **district magnitude plus one** (Cox, 1997).

## Threshold

A **threshold** is the minimum share of the vote a party must clear to win any seats at all. Germany uses 5 percent; Israel uses 3.25 percent; the Netherlands has effectively only the "natural" threshold of one seat, about 0.67 percent. **A threshold is a deliberate dial: raise it and you keep small parties out and push the system toward fewer, larger blocs; lower it and you let more voices in and accept a more fragmented parliament (Farrell, 2011).**

## Why these five, and in this order

Put them together and you can describe any system in one breath. **Does winning need a majority or a plurality? How many votes does the rule waste? How proportional is the seats-to-votes match? What is the district magnitude? Is there a threshold?** Answer those five and you have read the machine. Section 2 takes the system that answers "plurality, many wasted votes, low proportionality, magnitude one, no threshold", which is FPTP, and shows what that combination does to a whole country's politics.

## Sources
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Cox, G. W. (1997). Making votes count: Strategic coordination in the world's electoral systems. Cambridge University Press.
- Lijphart, A. (1994). Electoral systems and party systems: A study of twenty-seven democracies, 1945-1990. Oxford University Press.
- Gallagher, M., & Mitchell, P. (Eds.). (2008). The politics of electoral systems. Oxford University Press.
- Farrell, D. M. (2011). Electoral systems: A comparative introduction (2nd ed.). Palgrave Macmillan.`,
      recallContent: [
        {
          prompt: "In the worked example, name the winner under FPTP, under instant-runoff, and under a pairwise (Condorcet) count.",
          answer: "FPTP: A wins with 40 first choices (a plurality). Instant-runoff: B is eliminated and transfers to C, so C wins with 60. Pairwise: B beats both A and C head-to-head, so B is the Condorcet winner. One set of ballots, three winners.",
        },
        {
          prompt: "Why did candidate A win under FPTP despite most voters opposing A?",
          answer: "FPTP counts only first choices and needs only a plurality, not a majority. The 60 voters who ranked A last split their first choices between C (35) and B (25), so A's 40 was the largest single bloc and won.",
        },
        {
          prompt: "Under party-list proportional representation, what happens to A, B, and C, and why is that different in kind?",
          answer: "PR does not crown one winner; it seats all three roughly in proportion to their votes (about 40, 35, 25 percent of seats) and makes them bargain afterward. The rule decides not only who wins but whether 'a winner' is even the right word.",
        },
      ],
    },
    {
      slug: "power-changes-quiz-rule",
      title: "4 · Quiz: the rule picks the winner",
      section: "Section 1 · The rule, not the votes, picks the winner",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "This course's central claim about elections is that:",
            options: [
              "The most popular person always wins",
              "The rule, not just votes, picks winners",
              "Every counting rule gives one winner",
              "Vote totals alone settle the outcome",
            ],
            correctIndex: 1,
            explanation: "An election system is a machine, and the counting rule is part of the outcome: the same ballots under different rules can seat different candidates, or none.",
            sourceLessonSlug: "power-changes-what-this-is",
          },
          {
            prompt: "In the worked example, the winner under first-past-the-post is:",
            options: [
              "Candidate C, with sixty votes",
              "Candidate B, the pairwise pick",
              "Candidate A, with forty votes",
              "No single winner is chosen",
            ],
            correctIndex: 2,
            explanation: "FPTP counts only first choices and needs a plurality. A had the most first choices (40), so A won even though 60 voters ranked A last.",
            sourceLessonSlug: "power-changes-same-ballots",
          },
          {
            prompt: "Under instant-runoff, the same ballots elect:",
            options: [
              "Candidate C, after a transfer",
              "Candidate A, on first choices",
              "All three in fixed proportion",
              "Candidate B, eliminated early",
            ],
            correctIndex: 0,
            explanation: "No one had a majority, so B (lowest) was eliminated and B's ballots transferred to C. C then reached 60 and won. Same ballots, different rule, different winner.",
            sourceLessonSlug: "power-changes-same-ballots",
          },
          {
            prompt: "Candidate B is the pairwise (Condorcet) winner in the example because B:",
            options: [
              "Had the most first-choice votes",
              "Was eliminated in the first round",
              "Took a plurality under FPTP",
              "Beats each rival one-on-one",
            ],
            correctIndex: 3,
            explanation: "B beats A (60 to 40) and beats C (65 to 35) head-to-head, so a majority prefers B over each rival. Yet B came last under FPTP and was cut first under IRV.",
            sourceLessonSlug: "power-changes-same-ballots",
          },
          {
            prompt: "Under party-list proportional representation, the example's votes would:",
            options: [
              "Crown a single outright winner",
              "Seat the three roughly in proportion",
              "Give every seat to candidate A",
              "Waste most of the ballots cast",
            ],
            correctIndex: 1,
            explanation: "PR does not pick one winner; it seats all three roughly by vote share (about 40, 35, 25 percent) and makes them bargain. The rule even decides whether 'a winner' fits.",
            sourceLessonSlug: "power-changes-same-ballots",
          },
          {
            prompt: "A plurality differs from a majority in that a plurality is:",
            options: [
              "More than half of all votes",
              "Exactly fifty percent of votes",
              "The most votes, not over half",
              "Always a two-thirds share",
            ],
            correctIndex: 2,
            explanation: "A majority is more than half; a plurality is merely the most, even far short of half. FPTP needs only a plurality, which is how a widely disliked candidate can win.",
            sourceLessonSlug: "power-changes-vocabulary",
          },
          {
            prompt: "A 'wasted vote', defined precisely, is a vote that:",
            options: [
              "Was cast for the wrong reason",
              "Was miscounted by officials",
              "Went to the eventual winner",
              "Elects nobody under the rule",
            ],
            correctIndex: 3,
            explanation: "A wasted vote elects nobody: a vote for a loser, or a surplus vote beyond what the winner needed. It is a vote the rule discards, not a mistaken vote.",
            sourceLessonSlug: "power-changes-vocabulary",
          },
          {
            prompt: "District magnitude is best defined as the number of:",
            options: [
              "Seats elected from one district",
              "Voters living in one district",
              "Parties allowed on the ballot",
              "Rounds a runoff can take",
            ],
            correctIndex: 0,
            explanation: "Magnitude is how many seats a district elects. Magnitude 1 is single-member (FPTP, IRV); higher magnitude allows proportional representation, since one seat cannot be split.",
            sourceLessonSlug: "power-changes-vocabulary",
          },
          {
            prompt: "Cox's rule of thumb about district magnitude is that viable competitors tend toward:",
            options: [
              "Twice the district magnitude",
              "Exactly two, in every case",
              "The magnitude, minus one",
              "The magnitude, plus one",
            ],
            correctIndex: 3,
            explanation: "Cox (1997) summarized the ceiling as district magnitude plus one. A single-member district (magnitude 1) tends toward two viable competitors; larger magnitudes allow more.",
            sourceLessonSlug: "power-changes-vocabulary",
          },
          {
            prompt: "An electoral threshold is the minimum vote share a party needs to:",
            options: [
              "Nominate its own candidates",
              "Win any seats at all",
              "Form a coalition later",
              "Appear on the printed ballot",
            ],
            correctIndex: 1,
            explanation: "A threshold sets the floor for winning seats: 5 percent in Germany, 3.25 in Israel, about 0.67 in the Netherlands. Raise it to exclude small parties; lower it to admit them.",
            sourceLessonSlug: "power-changes-vocabulary",
          },
          {
            prompt: "Disproportionality, the gap between seat share and vote share, is:",
            options: [
              "Produced by the rule itself",
              "A counting error in the tally",
              "Illegal in every democracy",
              "Unique to ranked-choice votes",
            ],
            correctIndex: 0,
            explanation: "The seats-to-votes gap is produced by the rule, not an error. FPTP manufactures majorities from pluralities by design; PR is built to shrink the gap. Different answers, not a flaw.",
            sourceLessonSlug: "power-changes-vocabulary",
          },
          {
            prompt: "Choosing the counting rule is an exercise of power mainly because it is:",
            options: [
              "Decided before votes are cast",
              "Chosen by the voters each time",
              "Always changed after an election",
              "Set by the losing candidates",
            ],
            correctIndex: 0,
            explanation: "The rule is usually fixed in a constitution or election law long before any campaign, so it shapes the result before a single vote is cast. That choice is itself power.",
            sourceLessonSlug: "power-changes-what-this-is",
          },
          {
            prompt: "The course says the second half (Section 4) covers power changing hands through:",
            options: [
              "Only scheduled fair elections",
              "Court rulings and appeals only",
              "Census counts and redistricting",
              "Coups, revolts, bargains, term limits",
            ],
            correctIndex: 3,
            explanation: "The non-electoral half covers coups, revolutions, negotiated transitions, and term limits: the ways power leaves office when the ballot is not the mechanism.",
            sourceLessonSlug: "power-changes-what-this-is",
          },
          {
            prompt: "The five terms that describe any system are majority-or-plurality, wasted votes, proportionality, threshold, and:",
            options: [
              "Voter turnout on the day",
              "The color of the ballot",
              "District magnitude, the seats",
              "The age of the constitution",
            ],
            correctIndex: 2,
            explanation: "District magnitude, the number of seats per district, is the fifth. Answer all five questions and you have read the machine before comparing any two systems.",
            sourceLessonSlug: "power-changes-vocabulary",
          },
          {
            prompt: "The worked example in Section 1 is presented as:",
            options: [
              "A real national election result",
              "A hypothetical, checked illustration",
              "A disputed and unverified case",
              "A quotation from a court ruling",
            ],
            correctIndex: 1,
            explanation: "It is a clearly hypothetical illustration, built and checked so the arithmetic is real, but it is not a real election. The mechanism is the point, not any actual contest.",
            sourceLessonSlug: "power-changes-same-ballots",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The majoritarian systems
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-changes-fptp",
      title: "5 · First-past-the-post: how it works and what it rewards",
      section: "Section 2 · The majoritarian systems",
      body: `Start with the system most English-speaking readers were born under, and the one the worked example already caught misbehaving. **First-past-the-post (FPTP)** is the simplest election rule there is, and its simplicity is exactly what makes its consequences hard to see. This lesson takes it apart.

## The rule, in one sentence

**Divide the country into single-member districts; in each one, whoever gets the most votes wins the single seat, majority or not.** That is the entire rule. It is also called single-member plurality. The United States House of Commons in Britain, the United States House of Representatives, Canada's House of Commons, and India's Lok Sabha are all elected this way (Reynolds et al., 2005). No transfers, no second round, no proportional top-up. Most votes in the district, take the seat.

## What the rule rewards, and what it discards

Run the five questions from Lesson 3 against it:

| Question | FPTP's answer |
|---|---|
| **Majority or plurality?** | Plurality; a winner can have well under half |
| **Wasted votes?** | Many; every vote for a loser elects no one |
| **Proportional?** | No; it manufactures majorities from pluralities |
| **District magnitude?** | One; a single seat per district |
| **Threshold?** | No formal one, but a steep informal one |

**Read that column as a personality.** FPTP rewards being the largest single bloc in a place and punishes being spread thinly everywhere. A party that comes a close second in every district can win many votes nationally and almost no seats. **The rule does not care how many people support you; it cares how many *districts* you can top.**

## The manufactured majority

Here is FPTP's signature effect, and its defenders count it as a feature. Because the rule converts a plurality of votes into the whole seat, and does this district after district, **it routinely turns a party with, say, 40-something percent of the national vote into a majority of the seats.** The gap between vote share and seat share is large and predictable. Supporters call this a **manufactured majority** and prize it: it tends to produce single-party governments that can act without a coalition, and a clear pair of hands to vote out next time (Lijphart, 1994). Critics call the same number **disproportionality** and count it as votes ignored. **Both are describing the identical arithmetic; they disagree about whether to applaud it.** This course teaches you to see the number first and argue about it second.

## The geography trap

FPTP has a feature no other system shares so sharply: **where the district lines are drawn changes who wins from the exact same votes.** Because everything depends on topping individual districts, a party's votes can be efficiently placed or wastefully clumped. This is the door through which gerrymandering walks, and it is why Lesson 7 is about the district line. **Hold the thought: under FPTP, the map is part of the machine.**

## Why simplicity is the catch

FPTP's great virtue is that a voter marks one name and a child can understand the count. Its great cost is that all its complexity is hidden downstream, in the seat totals, where it is hard to trace back to the rule. **A system whose ballot is simple can still produce results that are strange, and FPTP is the standard case: easy to vote, hard to read.** The next lesson shows the most famous of its downstream effects, the pull toward exactly two parties.

## Sources
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Lijphart, A. (1994). Electoral systems and party systems: A study of twenty-seven democracies, 1945-1990. Oxford University Press.
- Farrell, D. M. (2011). Electoral systems: A comparative introduction (2nd ed.). Palgrave Macmillan.`,
      recallContent: [
        {
          prompt: "Name the five questions that describe any electoral system.",
          answer: "Does winning need a majority or a plurality? How many votes does the rule waste? How proportional is the seats-to-votes match? What is the district magnitude (seats per district)? Is there a threshold to win any seats?",
        },
        {
          prompt: "What is district magnitude, and why does it decide whether a system can be proportional?",
          answer: "District magnitude is the number of seats elected from one district. You cannot split a single seat proportionally, so magnitude 1 (single-member) rules out PR; higher magnitude allows it. Cox's rule of thumb: viable competitors tend toward magnitude plus one.",
        },
        {
          prompt: "What is a threshold, and what does raising or lowering it do?",
          answer: "The minimum vote share a party needs to win any seats. Raising it keeps small parties out and pushes toward fewer, larger blocs; lowering it admits more voices and accepts a more fragmented parliament (Germany 5 percent, Israel 3.25, Netherlands about 0.67).",
        },
      ],
    },
    {
      slug: "power-changes-duverger",
      title: "6 · Duverger's law: why first-past-the-post pulls toward two parties",
      section: "Section 2 · The majoritarian systems",
      body: `The most famous generalisation in this whole subject is a claim about what FPTP does to a party system over time. It is called **Duverger's law**, and it is both real and routinely misstated. This lesson gets it right, including its limits, because a misstated law is a bad tool.

## The law, stated correctly

The French scholar Maurice Duverger put it plainly: **the simple-majority single-ballot system**, which is FPTP, **favors the two-party system** (Duverger, 1954). That is the law. Read what it does and does not claim. It says FPTP *tends toward* two dominant parties. **It does not say proportional representation causes two parties (PR does the opposite), and it does not say FPTP guarantees exactly two parties everywhere (it does not).** Getting the direction right is half the battle: **FPTP pushes toward few, PR permits many.**

## The two engines behind it

Duverger identified two forces, and they work together.

**The mechanical effect.** FPTP's own arithmetic, from Lesson 5, punishes third parties: coming second or third in district after district wins votes but almost no seats. **The rule mechanically converts a broad but thin third party into a handful of seats**, so third parties stay small regardless of what anyone intends (Duverger, 1954; Cox, 1997).

**The psychological effect.** Voters and donors watch the mechanical effect and adjust. A voter who prefers a third party but sees it cannot win locally may vote for their more-preferred of the two front-runners to avoid "wasting" the vote. Candidates and money flee the doomed third option too. **The psychological effect is the mechanical effect anticipated**, and it is self-reinforcing: expecting two parties helps produce two parties (Cox, 1997).

## The spoiler is Duverger's law in a single race

You now have the worked example's mystery explained. When B split the anti-A vote and let A win with 40 percent, that was the **mechanical effect in one district.** A voter who saw it coming and switched from B to their preferred front-runner would be showing the **psychological effect.** The whole two-party pull is this same dynamic, repeated across every district and every election. **Duverger's law is the spoiler effect grown into a party system.**

## The honest limit: it is a tendency, not a machine

Here is where careful teaching matters. **Duverger's law is a strong tendency, not an iron rule, and it has a standard counterexample: India.** India uses FPTP and yet sustains many parties, because its parties are **regionally concentrated.** Duverger's law pushes toward two viable options *within each district's competition*; where different regions have different pairs of front-runners, the national parliament can hold many parties even though each district looks like a two-way fight (Riker, 1982; Cox, 1997). **So state the law as Riker refined it: FPTP tends toward two-party competition at the district level, which produces two national parties only when the same two compete everywhere.** That precision is the difference between understanding the law and reciting a slogan.

## Why this belongs in a course about power changing hands

Because the electoral rule quietly decides **how many real options a voter has when power is up for grabs.** A two-party system and a six-party system offer different kinds of change: one swaps a governing team for its single rival, the other reshuffles a coalition. **Neither is more democratic in the abstract, but they are genuinely different machines for changing hands**, and Duverger's law is the reason FPTP tends to build the first kind. Section 3 shows the systems built deliberately to produce the second.

## Sources
- Duverger, M. (1954). Political parties: Their organization and activity in the modern state (B. North & R. North, Trans.). Wiley.
- Riker, W. H. (1982). The two-party system and Duverger's law: An essay on the history of political science. American Political Science Review, 76(4), 753-766.
- Cox, G. W. (1997). Making votes count: Strategic coordination in the world's electoral systems. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "State the rule of first-past-the-post in one sentence, and name two countries that use it.",
          answer: "Divide the country into single-member districts; in each, whoever gets the most votes (a plurality, majority or not) wins the one seat. Used for the UK House of Commons, the US House, Canada's House of Commons, and India's Lok Sabha.",
        },
        {
          prompt: "What is a 'manufactured majority', and why do supporters and critics both point to the same number?",
          answer: "FPTP converts a plurality of votes into a majority of seats, turning roughly 40-something percent of the vote into over half the seats. Supporters prize it for producing single-party governments; critics call the same gap disproportionality, votes ignored. Same arithmetic, opposite verdicts.",
        },
        {
          prompt: "Why is 'the map is part of the machine' true under FPTP but not under proportional representation?",
          answer: "Because FPTP depends on topping individual single-member districts, where the lines are drawn changes who wins from the identical votes. That dependence is the door gerrymandering walks through; proportional systems with large multi-member districts do not turn on the line-drawing the same way.",
        },
      ],
    },
    {
      slug: "power-changes-spoilers-gerrymander",
      title: "7 · Spoilers, wasted votes, and the leverage of the district line",
      section: "Section 2 · The majoritarian systems",
      body: `Two consequences of FPTP deserve their own lesson because they are where the system's abstract features become concrete power. The **spoiler effect** shows how a third candidate can flip a result without winning; **gerrymandering** shows how moving the district line can flip a result without changing a single vote. Both are the same theme as the worked example: the rule, not the votes, deciding.

## The spoiler effect, precisely

A **spoiler** is a candidate who cannot win but whose presence changes which of the front-runners does. The mechanism is the one from Lesson 2: under FPTP, a third candidate who draws votes mostly from one front-runner can hand the seat to the other, even though a majority preferred the front-runner who lost. **The spoiler wins nothing and decides everything.** This is not a moral failing of the candidate or the voters; **it is the mechanical effect operating in one race (Cox, 1997).**

Keep this neutral and attributed. Analysts have long **debated** whether particular third-party candidacies changed specific national outcomes, and discussions of the 2000 United States presidential contest in Florida are the standard example cited in that debate (Reynolds et al., 2005). **This course does not adjudicate any single real case.** What it teaches is the mechanism, which is not in dispute: under a plurality rule with no transfers, splitting a bloc can defeat that bloc's preferred candidate. Ranked-choice, in Section 3, is largely a response to exactly this.

## Wasted votes, revisited as leverage

The wasted vote from Lesson 3 is not only a fairness complaint; it is the raw material of manipulation. Because FPTP wastes every vote beyond the plurality a winner needs, and every vote for a loser, **a mapmaker who can decide which voters sit in which district can decide how many of a rival's votes are wasted.** That is the hinge. The two classic moves have names:

| Move | What it does | Effect on the rival's votes |
|---|---|---|
| **Cracking** | Splits a bloc across many districts | Makes it a losing minority everywhere, all wasted |
| **Packing** | Crams a bloc into few districts | Wins those few by huge margins, the surplus wasted |

**Both moves work by engineering wasted votes**, and both are only possible because FPTP counts single-member districts (Gallagher & Mitchell, 2008).

## Gerrymandering: the word and the mechanism

The practice is old and the word is documented. In **1812**, Massachusetts Governor **Elbridge Gerry** signed a redistricting plan containing a district so contorted that a cartoonist drew it as a salamander, and the blend of his name with "salamander" gave the word **gerrymander** (Reynolds et al., 2005). The mechanism has not changed since: **draw the lines to crack and pack, and you can shift seats without shifting a single voter's opinion.** In the United States the Supreme Court held in Rucho v. Common Cause (2019) that claims of purely partisan gerrymandering present a political question federal courts will not decide, leaving the remedy to states and Congress (Rucho v. Common Cause, 2019). **State that as the documented legal position, not as approval or complaint.**

## The through-line

Spoilers and gerrymanders look like different problems and are the same one wearing two coats. **Both take a fixed set of voters and change the winner by changing something other than the votes**: in the spoiler case, who else is on the ballot; in the gerrymander case, where the lines fall. That is Section 1's claim at full strength. **A single-member plurality rule makes the winner unusually sensitive to things that are not the electorate's preferences**, which is precisely the sensitivity the proportional and ranked systems of Section 3 were designed to reduce.

## Sources
- Cox, G. W. (1997). Making votes count: Strategic coordination in the world's electoral systems. Cambridge University Press.
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Gallagher, M., & Mitchell, P. (Eds.). (2008). The politics of electoral systems. Oxford University Press.
- Rucho v. Common Cause, 588 U.S. 684 (2019). https://supreme.justia.com/cases/federal/us/588/18-422/`,
      recallContent: [
        {
          prompt: "State Duverger's law correctly, including the direction of the effect.",
          answer: "The simple-majority single-ballot system (FPTP) favors the two-party system: FPTP tends toward few parties. It does NOT say PR causes two parties (PR permits many), nor that FPTP guarantees exactly two everywhere.",
        },
        {
          prompt: "Name and describe the two engines behind Duverger's law.",
          answer: "The mechanical effect: FPTP's arithmetic converts broad-but-thin third parties into almost no seats. The psychological effect: voters and donors anticipate that and desert third parties to avoid wasting votes. The psychological effect is the mechanical effect anticipated, and it is self-reinforcing.",
        },
        {
          prompt: "Why is India the standard counterexample to a naive reading of Duverger's law?",
          answer: "India uses FPTP yet sustains many parties, because its parties are regionally concentrated. The law pushes toward two viable options within each district's contest; two national parties result only when the same two compete everywhere. India has different front-runners in different regions.",
        },
      ],
    },
    {
      slug: "power-changes-quiz-majoritarian",
      title: "8 · Quiz: the majoritarian systems",
      section: "Section 2 · The majoritarian systems",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The rule of first-past-the-post is that, in each single-member district:",
            options: [
              "A candidate needs half the votes",
              "Seats are split by vote share",
              "The most votes takes the one seat",
              "Two rounds are always required",
            ],
            correctIndex: 2,
            explanation: "FPTP is single-member plurality: the most votes wins the one seat, majority or not. No transfers, no second round, no proportional top-up.",
            sourceLessonSlug: "power-changes-fptp",
          },
          {
            prompt: "Which set of countries elects its main chamber by first-past-the-post?",
            options: [
              "Germany, New Zealand, Scotland",
              "Netherlands, Israel, Sweden",
              "Australia, Ireland, Malta",
              "UK, US House, Canada, India",
            ],
            correctIndex: 3,
            explanation: "The UK House of Commons, the US House, Canada's House of Commons, and India's Lok Sabha all use single-member plurality (FPTP).",
            sourceLessonSlug: "power-changes-fptp",
          },
          {
            prompt: "A 'manufactured majority' under FPTP is when the rule turns:",
            options: [
              "A vote plurality into a seat majority",
              "A seat majority into a vote majority",
              "A coalition into a single party",
              "A minority of seats into power",
            ],
            correctIndex: 0,
            explanation: "FPTP converts a plurality of votes (often 40-something percent) into a majority of seats. Supporters prize it; critics call the gap disproportionality. Same arithmetic.",
            sourceLessonSlug: "power-changes-fptp",
          },
          {
            prompt: "FPTP rewards a party for being:",
            options: [
              "Popular thinly everywhere",
              "The largest bloc in a place",
              "Second in every district",
              "Spread evenly across the map",
            ],
            correctIndex: 1,
            explanation: "The rule cares how many districts you can top, not how many people back you nationally. A party second everywhere wins many votes and almost no seats.",
            sourceLessonSlug: "power-changes-fptp",
          },
          {
            prompt: "Duverger's law, stated correctly, holds that first-past-the-post:",
            options: [
              "Guarantees exactly two parties",
              "Favors a two-party system",
              "Causes many small parties",
              "Has no effect on parties",
            ],
            correctIndex: 1,
            explanation: "FPTP favors (tends toward) two parties. It does not guarantee exactly two everywhere, and it is the opposite of PR, which permits many parties.",
            sourceLessonSlug: "power-changes-duverger",
          },
          {
            prompt: "The 'mechanical effect' in Duverger's law is that FPTP's arithmetic:",
            options: [
              "Makes voters desert small parties",
              "Adds seats for small parties",
              "Gives third parties few seats",
              "Splits the two big parties apart",
            ],
            correctIndex: 2,
            explanation: "The mechanical effect is the rule itself converting a broad but thin third party into almost no seats. The psychological effect is voters anticipating that and deserting them.",
            sourceLessonSlug: "power-changes-duverger",
          },
          {
            prompt: "The 'psychological effect' in Duverger's law describes:",
            options: [
              "Voters deserting a doomed third party",
              "Officials miscounting the ballots",
              "Parties merging after the vote",
              "The law failing to apply at all",
            ],
            correctIndex: 0,
            explanation: "Voters and donors anticipate the mechanical effect and abandon a third party to avoid wasting a vote. It is self-reinforcing: expecting two parties helps produce two.",
            sourceLessonSlug: "power-changes-duverger",
          },
          {
            prompt: "India is the standard counterexample to a naive Duverger's law because it has FPTP yet:",
            options: [
              "Uses proportional seat top-ups",
              "Bans all regional parties",
              "Holds only two-round runoffs",
              "Sustains many regional parties",
            ],
            correctIndex: 3,
            explanation: "India's parties are regionally concentrated, so different regions have different front-runners. The law pushes toward two per district contest, not two nationwide, when the same two do not compete everywhere.",
            sourceLessonSlug: "power-changes-duverger",
          },
          {
            prompt: "A spoiler, defined precisely, is a candidate who:",
            options: [
              "Wins the seat with a plurality",
              "Cannot win but changes who does",
              "Always forces a second round",
              "Tops the poll in every district",
            ],
            correctIndex: 1,
            explanation: "A spoiler wins nothing but, by drawing votes mostly from one front-runner, hands the seat to the other. It is the mechanical effect operating in a single race.",
            sourceLessonSlug: "power-changes-spoilers-gerrymander",
          },
          {
            prompt: "On whether a specific real candidacy 'spoiled' an election, this course:",
            options: [
              "Names the true spoiler outright",
              "Declares the debate fully settled",
              "Teaches the mechanism, not a verdict",
              "Blames the third-party voters",
            ],
            correctIndex: 2,
            explanation: "The course reports that analysts debate specific cases (such as discussions of Florida in 2000) and attributes it, but teaches only the undisputed mechanism, not any verdict.",
            sourceLessonSlug: "power-changes-spoilers-gerrymander",
          },
          {
            prompt: "'Cracking' a bloc of voters means to:",
            options: [
              "Cram them into a few districts",
              "Split them across many districts",
              "Move them out of the state",
              "Give them their own new seat",
            ],
            correctIndex: 1,
            explanation: "Cracking splits a bloc across many districts so it is a losing minority everywhere and its votes are all wasted. Packing does the opposite: crams them into few districts.",
            sourceLessonSlug: "power-changes-spoilers-gerrymander",
          },
          {
            prompt: "'Packing' a bloc of voters means to:",
            options: [
              "Scatter them thinly everywhere",
              "Delete them from the rolls",
              "Cram them into few districts",
              "Split them down the middle",
            ],
            correctIndex: 2,
            explanation: "Packing crams a bloc into few districts, which it wins by huge margins, so the surplus votes are wasted. Both cracking and packing work by engineering wasted votes.",
            sourceLessonSlug: "power-changes-spoilers-gerrymander",
          },
          {
            prompt: "The word 'gerrymander' comes from an 1812 redistricting signed by:",
            options: [
              "Governor Elbridge Gerry",
              "President James Madison",
              "Senator Henry Clay",
              "Justice John Marshall",
            ],
            correctIndex: 0,
            explanation: "Massachusetts Governor Elbridge Gerry signed a plan with a salamander-shaped district; the blend of his name and 'salamander' gave the word. The mechanism, cracking and packing, is unchanged.",
            sourceLessonSlug: "power-changes-spoilers-gerrymander",
          },
          {
            prompt: "In Rucho v. Common Cause (2019), the US Supreme Court held that partisan gerrymandering claims are:",
            options: [
              "Always unconstitutional at once",
              "A political question courts decline",
              "Required in every single state",
              "Banned by a federal statute",
            ],
            correctIndex: 1,
            explanation: "The Court held purely partisan gerrymandering presents a political question federal courts will not decide, leaving remedies to states and Congress. Stated as the legal position, not approval.",
            sourceLessonSlug: "power-changes-spoilers-gerrymander",
          },
          {
            prompt: "Spoilers and gerrymanders are 'the same problem' because both:",
            options: [
              "Require paper ballots to work",
              "Change the winner without new votes",
              "Only occur under proportional rules",
              "Depend on a very high turnout",
            ],
            correctIndex: 1,
            explanation: "Both take a fixed electorate and change the winner by changing something other than the votes: who else is on the ballot, or where the lines fall. That is Section 1's claim at full strength.",
            sourceLessonSlug: "power-changes-spoilers-gerrymander",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · The proportional and mixed systems
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-changes-party-list",
      title: "9 · Party-list proportional representation: seats in proportion to votes",
      section: "Section 3 · The proportional and mixed systems",
      body: `Section 2 was about a rule that manufactures majorities. This section is about the family of rules built to do the opposite: **make the seat shares mirror the vote shares.** The workhorse of that family is **party-list proportional representation (list PR)**, used across most of continental Europe and much of Latin America. It answers a different question than FPTP, so it produces a different kind of politics.

## The rule

Instead of single-member districts, list PR uses **multi-member districts** (often large, sometimes the whole country) and asks each voter to choose a **party** (in some versions a candidate within a party). Seats in the district are then **allocated to parties in proportion to their votes.** A party with 30 percent of the votes in a 10-seat district wins about 3 seats. **The whole design goal is to shrink the gap between votes and seats to near zero (Farrell, 2011).**

## Closed lists and open lists

The one wrinkle worth knowing now: **who decides the order in which a party's candidates take its seats?**

| Type | Who orders the candidates | What the voter picks |
|---|---|---|
| **Closed list** | The party, in advance | Just the party |
| **Open list** | The voters, by preference votes | The party and a candidate |

**A closed list hands the party leadership real power** over which of its members get in; an open list gives that power to voters. Both are "PR"; they distribute a different kind of influence inside the winning party (Gallagher & Mitchell, 2008). Keep the distinction, because "proportional representation" names a large family, not one rule.

## The natural threshold, before any legal one

Even with no legal threshold, PR has a **natural threshold** set by district magnitude: to win one of, say, 10 seats you need roughly a tenth of the vote. **The larger the district, the lower the natural threshold, and the more proportional the result.** The Netherlands is the extreme case: it treats the entire country as a **single 150-seat district**, so the natural threshold is about **0.67 percent**, one seat's worth, and almost any organized group can win representation (Kiesraad, n.d.). That is proportionality turned nearly all the way up.

## What PR does to how power changes hands

This is the part that matters for the course. Under FPTP, an election usually **hands power to one party outright.** Under PR, an election usually hands out **shares**, and then the government is formed by **negotiation among parties afterward.** Power changes hands less like a light switch and more like a renegotiated contract. Two consequences follow directly:

- **Coalitions are normal, not a crisis.** Most PR democracies are governed by multi-party coalitions, because it is rare for one party to win half the seats outright (Lijphart, 1994).
- **The decisive moment can move from the voter to the coalition talks.** Who governs may be settled in the weeks *after* the count, when parties bargain. Critics see a loss of voter control; defenders see broader representation. **Report both; the mechanism is that PR splits the choice of government into two steps, the vote and the deal.**

## The trade PR makes

State it flatly, because the next lessons tune it. **PR buys proportionality and broad representation at the cost of the clear, single-party accountability FPTP manufactures.** Neither is free. FPTP gives you a clear winner and wastes many votes; PR wastes few votes and often gives you a coalition no one voted for as a package. **The dials that decide how far a country sits along that trade are district magnitude and the threshold, which is the next lesson.**

## Sources
- Farrell, D. M. (2011). Electoral systems: A comparative introduction (2nd ed.). Palgrave Macmillan.
- Gallagher, M., & Mitchell, P. (Eds.). (2008). The politics of electoral systems. Oxford University Press.
- Lijphart, A. (1994). Electoral systems and party systems: A study of twenty-seven democracies, 1945-1990. Oxford University Press.
- Kiesraad [Electoral Council of the Netherlands]. (n.d.). Electoral system. https://www.kiesraad.nl/english`,
      recallContent: [
        {
          prompt: "What is the spoiler effect, and why is it 'the mechanical effect in one race'?",
          answer: "A spoiler is a candidate who cannot win but, by drawing votes mostly from one front-runner, changes which front-runner wins. It is FPTP's mechanical penalty on splitting a bloc, operating in a single contest rather than across a whole party system.",
        },
        {
          prompt: "Explain cracking and packing, and what they have in common.",
          answer: "Cracking splits a bloc across many districts so it loses everywhere (all votes wasted); packing crams a bloc into few districts it wins by huge margins (the surplus wasted). Both change seats without changing votes by engineering wasted votes, only possible under single-member districts.",
        },
        {
          prompt: "Why are spoilers and gerrymanders 'the same problem in two coats'?",
          answer: "Both take a fixed electorate and change the winner by changing something other than the votes: who else is on the ballot (spoiler) or where the district lines fall (gerrymander). Both are the course's Section 1 claim that the rule, not the votes alone, picks the winner.",
        },
      ],
    },
    {
      slug: "power-changes-magnitude-thresholds",
      title: "10 · District magnitude and thresholds: the dials that tune proportionality",
      section: "Section 3 · The proportional and mixed systems",
      body: `Proportional representation is not one setting; it is a **range**, and two dials set where a country lands on it. This lesson turns the two dials from Lesson 3, district magnitude and threshold, and shows that they are how a designer chooses between broad representation and a manageable parliament. **The dials, not slogans about "fair" or "stable", decide the outcome.**

## Dial one: district magnitude, the accelerator

District magnitude controls how proportional PR actually is. **The more seats in a district, the more finely the seats can be split to match the votes, and the smaller a party can be and still win one.**

| District magnitude | Roughly the smallest winning share | Effect |
|---|---|---|
| **3 seats** | About a quarter | Only larger parties get in |
| **10 seats** | About a tenth | Mid-size parties get in |
| **150 seats (one national district)** | Under 1 percent | Almost anyone gets in |

So two countries can both call themselves "PR" and behave very differently, because one uses small districts and the other one big one. **Low magnitude makes PR behave a little more like FPTP (favouring big parties); high magnitude makes it fully proportional (Cox, 1997).** Magnitude is the accelerator.

## Dial two: the threshold, the brake

If magnitude decides how low a party can go by arithmetic, the **legal threshold** is a deliberate floor placed on top. A party below the threshold wins **no seats even if its vote share would otherwise earn some.** It is the brake on fragmentation.

- **Germany: 5 percent.** A party under 5 percent of the national list vote (with a narrow exception) wins no list seats, which keeps very small parties out of the Bundestag (Bundeswahlleiter, n.d.).
- **Israel: 3.25 percent.** Raised from 2 percent in 2014; still low, so the Knesset holds many parties and coalitions are large and complex (Knesset, n.d.).
- **The Netherlands: about 0.67 percent** in practice, the natural one-seat threshold with no higher legal bar, so the parliament is highly fragmented (Kiesraad, n.d.).

**Read those three as one dial at three settings.** The higher the threshold, the fewer parties and the easier the coalition maths; the lower the threshold, the more voices and the more complicated the government. **Germany and the Netherlands are both PR, and their politics differ substantially because their brakes are set differently.**

## The two dials together

Magnitude and threshold interact, and a designer uses both. **You can build a system that is technically PR but favors big parties (small districts, high threshold), or one that represents nearly everyone (one big district, tiny threshold).** Most real PR systems sit somewhere in between, and where they sit is a **policy choice with consequences**, not a fact of nature. This is the same lesson the whole course keeps teaching: **the rule is a set of dials someone turned on purpose, and turning them changes who ends up in the room when power is shared out.**

## Why the dials matter for power changing hands

Because they set **how many hands power is shared among.** A high-threshold, low-magnitude PR system hands power to a few large parties that alternate in coalitions; a low-threshold, high-magnitude one spreads it across many parties that must assemble broad coalitions to govern. **The dials decide whether "changing hands" means swapping two big blocs or reshuffling a crowd.** Section 3's remaining lessons cover two systems, ranked-choice and mixed-member, that reach for specific points on this range by other means.

## Sources
- Cox, G. W. (1997). Making votes count: Strategic coordination in the world's electoral systems. Cambridge University Press.
- Der Bundeswahlleiter [Federal Returning Officer, Germany]. (n.d.). The German electoral system. https://www.bundeswahlleiterin.de/en/
- Knesset. (n.d.). The electoral system in Israel. https://www.knesset.gov.il/description/eng/eng_mimshal_beh.htm
- Kiesraad [Electoral Council of the Netherlands]. (n.d.). Electoral system. https://www.kiesraad.nl/english`,
      recallContent: [
        {
          prompt: "State the rule of party-list proportional representation and its design goal.",
          answer: "Use multi-member districts and allocate each district's seats to parties in proportion to their votes (a party with 30 percent of votes in a 10-seat district wins about 3). The goal is to shrink the gap between vote share and seat share to near zero.",
        },
        {
          prompt: "What is the difference between a closed list and an open list?",
          answer: "A closed list is ordered by the party in advance, so the voter picks only the party and the leadership decides which members get in. An open list lets voters order the candidates by preference votes. Both are PR; they place influence inside the winning party differently.",
        },
        {
          prompt: "How does PR change the moment power changes hands, compared with FPTP?",
          answer: "FPTP usually hands power to one party outright; PR hands out shares and the government is formed by negotiation among parties afterward. Coalitions are normal, and the decisive choice of government can move from the voter to the post-election coalition talks.",
        },
      ],
    },
    {
      slug: "power-changes-ranked-choice",
      title: "11 · Ranked-choice / instant-runoff: building a majority by transfer",
      section: "Section 3 · The proportional and mixed systems",
      body: `Ranked-choice voting appeared in the worked example, where it seated C. Now meet it properly, because it is widely misunderstood, and the most common error is filing it under "proportional representation", which it is not. **Ranked-choice voting for a single seat is a majoritarian system, a smarter cousin of FPTP, not a member of the PR family.**

## The rule, step by step

**Ranked-choice voting (RCV), also called the alternative vote or instant-runoff voting (IRV)**, is used for a single seat and works like a series of runoffs held instantly on the ballots you already cast:

1. Voters **rank** the candidates: first choice, second, third, and so on.
2. Count everyone's **first** choice. If a candidate has a **majority** (over half), they win.
3. If not, **eliminate the candidate with the fewest** first choices, and **transfer** each of their ballots to the next choice still standing.
4. **Repeat** until someone has a majority.

That is the whole rule. It reruns the worked example exactly: no majority, eliminate the lowest (B), transfer B's ballots to C, and C crosses 50 percent (Reynolds et al., 2005).

## What IRV fixes, and what it does not

IRV is a direct answer to the **spoiler effect.** Because a vote for a doomed candidate **transfers** to your next choice instead of vanishing, you can rank a small party first without fear of splitting your side and electing your last choice. **The transfer is the anti-spoiler device (Farrell, 2011).** That is its main selling point, and it is real.

But be precise about its limits, because overselling it is the usual mistake. **IRV elects one person per district, so it is still majoritarian and still not proportional.** A country that used IRV in single-member districts everywhere could still produce a lopsided, disproportional parliament, much like FPTP; **Australia's House of Representatives, elected by IRV since 1918, is the standing example of a majoritarian, largely two-bloc parliament under ranked ballots (Australian Electoral Commission, n.d.).** IRV changes *how* the single winner is chosen; it does not turn a single-seat system into a proportional one.

## The honest complication

Teach the wrinkle rather than hide it, in the spirit of Section 1. **IRV does not guarantee the Condorcet winner.** Recall that in the worked example the pairwise winner was B, yet IRV eliminated B first and elected C. So IRV reliably produces a **majority** for the winner after transfers, but that winner is not always the candidate who would beat every rival head-to-head (Riker, 1982). **No single-winner rule satisfies every fairness criterion at once**, a result formalised in social-choice theory, so every system in this course is a set of trade-offs, not a perfect answer. IRV's trade is: it kills the spoiler and guarantees a final majority, and in exchange it can still pass over a Condorcet winner and stays non-proportional.

## Where it fits in the family

| System | Seats per district | Family | Fixes the spoiler? | Proportional? |
|---|---|---|---|---|
| **FPTP** | One | Majoritarian | No | No |
| **IRV / RCV** | One | Majoritarian | Yes | No |
| **List PR** | Many | Proportional | Not applicable | Yes |

**Read the middle row as the point of the lesson.** IRV sits beside FPTP, not beside PR: same single-seat family, better handling of third candidates. The next lesson takes the obvious question, "can you get both a local representative and proportionality?", and answers it with the mixed-member system.

## Sources
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Farrell, D. M. (2011). Electoral systems: A comparative introduction (2nd ed.). Palgrave Macmillan.
- Riker, W. H. (1982). The two-party system and Duverger's law: An essay on the history of political science. American Political Science Review, 76(4), 753-766.
- Australian Electoral Commission. (n.d.). Preferential voting. https://www.aec.gov.au/learn/preferential-voting.htm`,
      recallContent: [
        {
          prompt: "How do district magnitude and the legal threshold each tune proportionality?",
          answer: "District magnitude is the accelerator: more seats per district lets seats match votes more finely and lets smaller parties win. The threshold is the brake: a legal floor (Germany 5 percent, Israel 3.25, Netherlands about 0.67) below which a party wins no seats. Together they set how many hands share power.",
        },
        {
          prompt: "Why do Germany and the Netherlands, both PR, have such different party systems?",
          answer: "Their dials are set differently. Germany combines a 5 percent threshold that keeps small parties out; the Netherlands uses one 150-seat national district with only a natural 0.67 percent threshold, so it is highly fragmented. Same family, different brake settings.",
        },
        {
          prompt: "Why is where a PR system sits on the range a 'policy choice, not a fact of nature'?",
          answer: "Because a designer sets magnitude and threshold on purpose, and those settings decide whether power is shared among a few large parties or many small ones. The rule is a set of dials someone turned, which is the course's recurring point.",
        },
      ],
    },
    {
      slug: "power-changes-mmp",
      title: "12 · Mixed-member proportional: a local seat and a proportional total",
      section: "Section 3 · The proportional and mixed systems",
      body: `The last lesson ended on a question: can a country keep the single local representative that FPTP and IRV give, and still get a parliament proportional overall? **Mixed-member proportional representation (MMP) is the "yes" to that question**, and it is the most elegant machine in the course, because it bolts a majoritarian tier and a proportional tier together and lets the proportional tier win.

## The two votes

Under MMP, each voter casts **two votes**:

1. A vote for a **local candidate** in a single-member district, counted by FPTP: most votes wins the local seat.
2. A vote for a **party**, across a larger region or the whole country.

The first vote fills the **district seats.** The second vote is the one that decides the shape of the parliament (Bundeswahlleiter, n.d.).

## The top-up: the move that makes it proportional

Here is the mechanism, and it is worth reading slowly because it is the whole idea. **The party (second) vote sets each party's TOTAL entitlement of seats, proportionally.** Then:

1. Each party first receives the district seats its candidates won outright.
2. The party is then given enough **additional "list" or "top-up" seats** to raise its total up to the proportional entitlement its party vote earned.

So a party that wins few district seats but a large party vote is **topped up** with list seats until its total is proportional. **The local seats are real, but the party vote governs the final totals.** A voter gets a named local member *and* a parliament whose party balance matches the national vote. Germany's Bundestag and New Zealand's House of Representatives are the standard examples: **New Zealand adopted MMP in a 1993 referendum and first used it in 1996**, replacing FPTP precisely to end the large disproportionality FPTP had produced there (Electoral Commission New Zealand, n.d.).

## Why MMP is not the same as "FPTP plus a few PR seats"

A common confusion is to picture MMP as mostly-FPTP with a proportional garnish. **It is the reverse.** Because the top-up is calculated to make the *total* proportional, **the party vote effectively controls the outcome, and the district seats are subtracted from what a party would get anyway.** Winning more districts does not usually make a party bigger overall; it just fills more of its proportional entitlement with local members instead of list members. **MMP is a proportional system with a local face, not a majoritarian system with a proportional trim (Farrell, 2011).**

## The honest complication: overhang

Teach the wrinkle. Occasionally a party wins **more district seats than its proportional entitlement.** Those extra seats are called **overhang seats**, and different countries handle them differently: some let the party keep them (making the parliament slightly disproportional and larger), some add compensating seats to other parties to restore proportionality, which can enlarge the chamber (Bundeswahlleiter, n.d.). **The existence of overhang is a reminder that even the elegant machine has seams**, and that a real system has to make a further rule for the edge case. Precision about the seams is the difference between understanding MMP and admiring it from a distance.

## The family, completed

| System | The voter gets | The parliament is |
|---|---|---|
| **FPTP** | One local member | Majoritarian, disproportional |
| **IRV** | One local member (by ranking) | Majoritarian, disproportional |
| **List PR** | Party representation | Proportional, no single local member |
| **MMP** | A local member AND a party vote | Proportional overall |

**MMP is the row that refuses the trade-off** the rest of the family accepts, by running two tiers and letting the proportional one set the totals. That is why designers reaching for "the best of both" so often reach for it. Section 3's quiz tests the whole family; then the course leaves the ballot box entirely.

## Sources
- Der Bundeswahlleiter [Federal Returning Officer, Germany]. (n.d.). The German electoral system. https://www.bundeswahlleiterin.de/en/
- Electoral Commission New Zealand. (n.d.). MMP voting system. https://elections.nz/democracy-in-nz/what-is-new-zealands-system-of-government/mmp-voting-system/
- Farrell, D. M. (2011). Electoral systems: A comparative introduction (2nd ed.). Palgrave Macmillan.`,
      recallContent: [
        {
          prompt: "State the steps of ranked-choice / instant-runoff voting for a single seat.",
          answer: "Voters rank the candidates. Count first choices; if someone has a majority they win. If not, eliminate the candidate with the fewest first choices and transfer those ballots to the next choice still standing. Repeat until someone has a majority.",
        },
        {
          prompt: "Why is IRV majoritarian and not proportional, and what real parliament shows this?",
          answer: "IRV elects one person per single-member district, so it cannot be proportional; it just chooses that single winner better than FPTP by transferring votes. Australia's House of Representatives, elected by IRV since 1918, is a majoritarian, largely two-bloc parliament under ranked ballots.",
        },
        {
          prompt: "What does IRV fix, and what does it fail to guarantee?",
          answer: "It fixes the spoiler effect: a vote for a doomed candidate transfers to your next choice instead of vanishing. It does not guarantee the Condorcet winner (in the worked example it elected C, not the pairwise winner B) and it is not proportional. No single-winner rule satisfies every criterion.",
        },
      ],
    },
    {
      slug: "power-changes-quiz-proportional",
      title: "13 · Quiz: the proportional and mixed systems",
      section: "Section 3 · The proportional and mixed systems",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Party-list proportional representation allocates a district's seats:",
            options: [
              "All to the single top party",
              "In proportion to each party's votes",
              "By an instant-runoff of lists",
              "One per elimination round",
            ],
            correctIndex: 1,
            explanation: "List PR uses multi-member districts and gives each party seats in proportion to its votes, so a party with 30 percent of a 10-seat district wins about 3. The goal is to shrink the votes-to-seats gap.",
            sourceLessonSlug: "power-changes-party-list",
          },
          {
            prompt: "A closed party list differs from an open list in that a closed list is ordered by:",
            options: [
              "The party, not the voters",
              "The voters, not the party",
              "The election officials",
              "A random draw of names",
            ],
            correctIndex: 0,
            explanation: "A closed list is ordered by the party in advance, so the voter picks only the party. An open list lets voters order the candidates. Both are PR; they place influence inside the party differently.",
            sourceLessonSlug: "power-changes-party-list",
          },
          {
            prompt: "The Netherlands reaches near-total proportionality mainly by treating the country as:",
            options: [
              "Many tiny single-seat areas",
              "Two large regional blocs",
              "One 150-seat national district",
              "A ranked-choice single seat",
            ],
            correctIndex: 2,
            explanation: "One 150-seat national district gives a natural threshold of about 0.67 percent (one seat), so almost any organized group wins representation. Proportionality turned nearly all the way up.",
            sourceLessonSlug: "power-changes-party-list",
          },
          {
            prompt: "Under PR, the government is usually formed by:",
            options: [
              "One party winning outright",
              "A court appointing ministers",
              "The largest party alone always",
              "Negotiation among parties after",
            ],
            correctIndex: 3,
            explanation: "PR hands out seat shares, and coalitions are normal because one party rarely wins half. The decisive choice of government can move from the voter to the post-election coalition talks.",
            sourceLessonSlug: "power-changes-party-list",
          },
          {
            prompt: "Raising the district magnitude (seats per district) tends to make PR:",
            options: [
              "Less proportional overall",
              "More proportional overall",
              "Exactly like plain FPTP",
              "Unable to seat any party",
            ],
            correctIndex: 1,
            explanation: "More seats per district lets the seats match the votes more finely and lets smaller parties win. Magnitude is the accelerator; low magnitude makes PR behave more like FPTP.",
            sourceLessonSlug: "power-changes-magnitude-thresholds",
          },
          {
            prompt: "A legal electoral threshold acts as the:",
            options: [
              "Accelerator of the system",
              "Brake on fragmentation",
              "Ballot design standard",
              "Turnout requirement rule",
            ],
            correctIndex: 1,
            explanation: "The threshold is a deliberate floor: a party below it wins no seats even if its share would otherwise earn some. It brakes fragmentation, keeping small parties out (Germany 5 percent).",
            sourceLessonSlug: "power-changes-magnitude-thresholds",
          },
          {
            prompt: "Germany's list threshold of 5 percent, versus the Netherlands' 0.67, shows that the two countries:",
            options: [
              "Use entirely different families",
              "Have identical party systems",
              "Set the same dial differently",
              "Both actually use plain FPTP",
            ],
            correctIndex: 2,
            explanation: "Both are PR; their politics differ because the threshold dial is set differently. Higher threshold means fewer parties and simpler coalition maths; lower means more voices and more fragmentation.",
            sourceLessonSlug: "power-changes-magnitude-thresholds",
          },
          {
            prompt: "Ranked-choice / instant-runoff voting for a single seat belongs to which family?",
            options: [
              "The proportional family",
              "The mixed-member family",
              "The majoritarian family",
              "No family at all",
            ],
            correctIndex: 2,
            explanation: "IRV elects one person per district, so it is majoritarian, a smarter cousin of FPTP, not PR. Filing it under proportional representation is the most common error about it.",
            sourceLessonSlug: "power-changes-ranked-choice",
          },
          {
            prompt: "In instant-runoff, when no one has a majority, the rule:",
            options: [
              "Declares the plurality the winner",
              "Cuts the lowest and transfers ballots",
              "Splits the seat among parties",
              "Ends the count with no winner",
            ],
            correctIndex: 1,
            explanation: "Eliminate the candidate with the fewest first choices and transfer their ballots to the next choice still standing, repeating until someone crosses a majority. That transfer is the anti-spoiler device.",
            sourceLessonSlug: "power-changes-ranked-choice",
          },
          {
            prompt: "Australia's House of Representatives, elected by IRV since 1918, shows that IRV:",
            options: [
              "Makes a parliament proportional",
              "Forces a many-party coalition",
              "Bans all major parties",
              "Stays majoritarian, not proportional",
            ],
            correctIndex: 3,
            explanation: "IRV in single-member districts still produces a majoritarian, largely two-bloc parliament. It changes how the single winner is chosen; it does not make the chamber proportional.",
            sourceLessonSlug: "power-changes-ranked-choice",
          },
          {
            prompt: "The honest limit of IRV taught in this course is that it does not guarantee the:",
            options: [
              "Winner reaches a majority",
              "Spoiler effect is reduced",
              "Condorcet (pairwise) winner",
              "Count finishes in one round",
            ],
            correctIndex: 2,
            explanation: "IRV guarantees a final majority and kills the spoiler, but it can pass over the candidate who beats every rival head-to-head (in the worked example it elected C, not the pairwise winner B).",
            sourceLessonSlug: "power-changes-ranked-choice",
          },
          {
            prompt: "Under mixed-member proportional (MMP), each voter casts:",
            options: [
              "One ranked ballot only",
              "Two votes, local and party",
              "One party vote only",
              "Three separate rankings",
            ],
            correctIndex: 1,
            explanation: "MMP gives two votes: one for a local single-member candidate (counted by FPTP) and one for a party. The party vote governs the final proportional totals.",
            sourceLessonSlug: "power-changes-mmp",
          },
          {
            prompt: "In MMP, the 'top-up' seats are added so that each party's:",
            options: [
              "Local members all keep seats",
              "District wins are canceled out",
              "Leader picks the whole list",
              "Total matches its party vote",
            ],
            correctIndex: 3,
            explanation: "A party first takes its won district seats, then receives extra list seats to raise its total up to the proportional entitlement its party vote earned. The party vote governs; districts fill part of the total.",
            sourceLessonSlug: "power-changes-mmp",
          },
          {
            prompt: "MMP is best described as a proportional system with a local face because:",
            options: [
              "The party vote sets the totals",
              "It ignores the party vote",
              "It elects only list members",
              "It is really just FPTP",
            ],
            correctIndex: 0,
            explanation: "The top-up makes the total proportional, so the party vote effectively controls the outcome while district seats fill part of it. It is not FPTP with a proportional trim; it is the reverse.",
            sourceLessonSlug: "power-changes-mmp",
          },
          {
            prompt: "New Zealand adopted MMP, replacing FPTP, in order to:",
            options: [
              "Increase disproportional results",
              "End FPTP's large disproportionality",
              "Abolish its local districts",
              "Copy Australia's ranked ballot",
            ],
            correctIndex: 1,
            explanation: "New Zealand adopted MMP in a 1993 referendum and first used it in 1996, precisely to end the large disproportionality FPTP had produced there. It kept local members and made the total proportional.",
            sourceLessonSlug: "power-changes-mmp",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · When power changes hands outside elections
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-changes-outside-elections",
      title: "14 · When the ballot is not the mechanism",
      section: "Section 4 · When power changes hands outside elections",
      body: `Everything so far assumed an election. But power changes hands in many places where no valid election decides it, and pretending otherwise leaves half the subject untaught. This section is the second half of the course: **the routes power takes when the ballot is not the mechanism.** This lesson maps the four routes; the rest of the section takes them one at a time.

## The four routes

| Route | Direction of the push | Who drives it |
|---|---|---|
| **Coup** | From inside the state | Elites already holding some power (often the military) |
| **Revolution** | From below | A mass movement outside the state |
| **Negotiated transition** | By agreement | The old rulers and the opposition, at a table |
| **Term limit** | By prior design | A rule written in advance that forces the handover |

**Read the middle column.** A coup pushes from *inside* the existing apparatus; a revolution pushes from *below* it; a negotiated transition is a *bargain* between the two; a term limit is a *rule* that removes the ruler on schedule without any push at all. These are genuinely different mechanisms, and confusing them is the most common error in talking about how governments fall.

## Coup versus revolution: the distinction that gets blurred

Because the two dramatic routes are often used loosely, fix the difference now, and precisely. A **coup d'etat** is a seizure of the central state by people **already inside it**, typically fast, typically leaving the deeper structures of society intact and only swapping who sits at the top. A widely used scholarly definition treats a coup as an illegal and overt attempt by the military or other elites within the state to unseat the sitting leader (Powell & Thyne, 2011). A **revolution**, by contrast, is a **mass-based transformation from below** that replaces not merely the rulers but the political and often social order itself; the sociologist Theda Skocpol defined social revolutions as rapid, basic transformations of a society's state and class structures, carried through by class-based upheavals from below (Skocpol, 1979). **A coup changes the driver; a revolution rebuilds the car.**

## Why "who can overturn it" is the same question, scaled up

Course 1's fourth method question was **"who can overturn it?"** for a single government act. This whole section is that question asked about a **regime**: who can overturn the people in power, and how? The answers here, a faction inside the state, a movement in the streets, a negotiated deal, a clock, are the largest-scale answers to the same question you learned to ask of an ordinance. **The method did not change; only the size of the thing being overturned did.**

## The boundary with course 3

One of these routes, the negotiated transition, is also a way new **constitutions** get made, and course 3, "How Countries Constitute Themselves", covers that document-making side. **This course reads the same events for a different fact: the transfer of power itself**, who stops governing and who starts, and by what bargain. When you reach the Poland and South Africa cases in Lesson 16, you are studying how *power* moved, not how the *constitution* was drafted. Keeping those two questions apart is what lets the two courses complement each other instead of repeating.

## What to carry forward

Hold the four routes and the two distinctions: **inside (coup) versus below (revolution), and push (coup, revolution) versus agreement (transition) versus schedule (term limit).** The next three lessons give each route its own treatment, with the same discipline the election half used: teach the mechanism, cite the real cases precisely, and take no side in any contested one.

## Sources
- Powell, J. M., & Thyne, C. L. (2011). Global instances of coups from 1950 to 2010: A new dataset. Journal of Peace Research, 48(2), 249-259.
- Skocpol, T. (1979). States and social revolutions: A comparative analysis of France, Russia, and China. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "In MMP, explain the 'top-up' and why the party vote governs the outcome.",
          answer: "Each voter casts a local vote and a party vote. A party first takes the district seats its candidates won, then receives extra list (top-up) seats until its total matches the proportional entitlement its party vote earned. So the party vote sets the totals; district seats just fill part of them.",
        },
        {
          prompt: "Why is MMP 'a proportional system with a local face', not 'FPTP with a proportional trim'?",
          answer: "Because the top-up is calculated to make the total proportional, so the party vote effectively controls the outcome, and winning more districts mostly fills a party's entitlement with local members rather than making it bigger. The proportional tier sets the result; the local tier is subtracted from it.",
        },
        {
          prompt: "What are overhang seats, and why do they matter?",
          answer: "When a party wins more district seats than its proportional entitlement, the extra seats are overhang. Countries handle them differently (keep them, making the chamber slightly disproportional and larger, or add compensating seats to others). They show even the elegant machine has seams needing an extra rule.",
        },
      ],
    },
    {
      slug: "power-changes-coups-revolutions",
      title: "15 · Coups and revolutions: seizure from inside and upheaval from below",
      section: "Section 4 · When power changes hands outside elections",
      body: `The last lesson drew the distinction; this one develops the two forceful routes, because each has its own logic, and each is routinely described in language borrowed from the other. **A coup is a seizure from inside the state. A revolution is a transformation from below.** Getting them right is not pedantry; the two produce different kinds of change and call for different analysis.

## The coup: a swift seizure from within

A **coup d'etat** is an attempt by actors **already inside the state**, most often the military, to remove the sitting leadership and take control, usually quickly and usually outside any legal procedure (Powell & Thyne, 2011). Its defining features:

- **The movers already hold state power** (troops, ministries, the presidential guard). They do not build power from nothing; they redirect power the state already has.
- **It is fast and narrow.** A coup typically targets the top: seize the capital, the broadcast stations, the leader, and announce that the government has changed.
- **It often leaves the deeper order intact.** The class structure, the economy, and much of the bureaucracy can survive a coup unchanged; what changes is who commands them.

Because coups are a recognisable, recurring event, scholars have built **datasets** of them. The Powell and Thyne dataset catalogs coup attempts worldwide since 1950 using a consistent definition, which is what makes cross-country comparison possible in the first place (Powell & Thyne, 2011). **The point for this course: a coup is a change of controllers, not a change of the system they control.**

## The revolution: transformation from below

A **revolution** in the strong sense is not a fast palace seizure but a **mass-based upheaval that remakes the political and social order.** Skocpol's influential definition treats social revolutions as rapid, basic transformations of a society's state and class structures, accomplished through class-based revolts from below (Skocpol, 1979). Its features are the mirror of the coup's:

- **The movers come from outside the state**, a broad movement rather than a faction of insiders.
- **It is comparatively slow and wide.** Revolutions unfold over months or years and reach past the leadership into institutions, property, and social relations.
- **It replaces the order, not just the rulers.** The old regime's structures are torn down, not merely re-staffed.

**A coup changes the driver; a revolution rebuilds the car.** That single contrast is the most useful thing in the lesson.

## Why the labels are contested, and how to handle it

Here is where care is required, because **the words "coup" and "revolution" carry judgment.** Calling an event a "revolution" tends to legitimise it as the people rising; calling the same event a "coup" tends to delegitimise it as an illegitimate seizure, and partisans of every stripe choose the word that flatters their side. **This course's discipline is the one from the election half: describe the mechanism, attribute the label, and do not launder a preference as a fact.** For any specific modern case, note who moved (insiders or a mass movement), how fast, and how deep the change went, and report that competing actors call it different things. **The analysis is in the mechanism; the label is often the fight.**

## The shared trait, and the limit

Coups and revolutions share one thing that separates them from the rest of the course: **they change power outside the rules, by force or the threat of it, rather than through a procedure the previous order accepted.** That is exactly why the next lesson matters. **Not every extra-electoral change of power is a seizure.** Sometimes the old rulers and their opponents sit down and *agree* to hand power over, which is a third route with a logic all its own, and some of the most consequential changes of the last fifty years took it.

## Sources
- Powell, J. M., & Thyne, C. L. (2011). Global instances of coups from 1950 to 2010: A new dataset. Journal of Peace Research, 48(2), 249-259.
- Skocpol, T. (1979). States and social revolutions: A comparative analysis of France, Russia, and China. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "Name the four non-electoral routes power takes, with the direction of each.",
          answer: "Coup (from inside the state, driven by elites already holding power), revolution (from below, a mass movement outside the state), negotiated transition (by agreement between old rulers and opposition), and term limit (by prior design, a rule that forces the handover on schedule).",
        },
        {
          prompt: "How does 'who can overturn it?' from course 1 apply to a whole regime?",
          answer: "Course 1 asked who can overturn a single government act. This section asks it of the rulers themselves: who can overturn the people in power, and how? The answers (a faction inside the state, a mass movement, a negotiated deal, or a clock) are the same question scaled up.",
        },
        {
          prompt: "How does this course's reading of a negotiated transition differ from course 3's?",
          answer: "Course 3, How Countries Constitute Themselves, covers how the constitution gets drafted. This course reads the same events for the transfer of power itself: who stops governing and who starts, and by what bargain. Keeping the two questions apart lets the courses complement rather than repeat.",
        },
      ],
    },
    {
      slug: "power-changes-negotiated",
      title: "16 · Negotiated transitions: Poland 1989 and South Africa 1990-1994",
      section: "Section 4 · When power changes hands outside elections",
      body: `Not every change of regime is a seizure. Some of the most significant transfers of power in modern history happened because the people holding power and the people demanding it **sat down and negotiated the handover.** A **negotiated transition** is a change of regime by agreement, and this lesson teaches it through two documented cases: Poland in 1989 and South Africa from 1990 to 1994. **The mechanism is a bargain, not a battle.**

## The logic of a negotiated transition

A negotiated transition tends to happen when **neither side can simply win.** The old regime is too weak to crush the opposition but too strong to be swept away; the opposition is too strong to be ignored but too weak to seize power outright. **Stalemate, not victory, is the usual precondition.** Both sides then face a choice between an uncertain, possibly ruinous fight and a negotiated settlement that guarantees each some of what it wants, and sometimes they choose the table. The settlement usually trades **the old regime's exit for guarantees**, on amnesty, property, minority protection, or a share of the transition, and it is precisely this exchange that distinguishes a negotiated transition from a revolution that dictates terms to the defeated.

## Poland 1989: the Round Table

Poland's transition is the model of a negotiated one. In early 1989, faced with economic crisis and the enduring strength of the Solidarity movement, Poland's communist government held the **Round Table Talks** (Rozmowy Okraglego Stolu) with the opposition, from February to April 1989. The bargain included **partly free elections** held in June 1989: the opposition was allowed to contest all seats in a newly created Senate and a limited share (35 percent) of the seats in the lower house, the Sejm. **The result exceeded any expectation: Solidarity candidates won 99 of the 100 Senate seats and all 161 of the Sejm seats open to free competition** (Reynolds et al., 2005). The partly free election, agreed at a table, cascaded into the end of communist rule in Poland. **Power changed hands through a negotiated rule, not a shot.**

## South Africa 1990-1994: from release to one-person-one-vote

South Africa's transition from apartheid is the other landmark case, and its sequence is a matter of record. **Nelson Mandela was released in February 1990**; the government and the African National Congress and other parties then negotiated over several years, through talks that included the Convention for a Democratic South Africa; those negotiations produced an **interim constitution in 1993** (the Constitution of the Republic of South Africa Act 200 of 1993); and under it South Africa held its **first non-racial, universal-franchise election in April 1994**, in which the ANC won about **62.6 percent** of the vote and Mandela became president of a Government of National Unity (Constitution of the Republic of South Africa Act 200 of 1993; Reynolds et al., 2005). **A system of racial minority rule was replaced by universal-franchise democracy through a negotiated settlement**, and the negotiation deliberately included power-sharing and minority guarantees to make the handover possible.

## Reading these cases with discipline

Two guardrails. **First, this course reads these events as transfers of power, not as constitution-drafting**; the document-making details belong to course 3. Second, and this is the honest note: **negotiated transitions involve compromises that remain genuinely debated.** Amnesties, power-sharing guarantees, and economic settlements often protect members of the old regime, and reasonable people disagree about whether those bargains were the necessary price of a peaceful handover or an unjust shielding of the powerful. **State the documented sequence flatly; flag the moral assessment as contested.** The mechanism is not in dispute: power moved by agreement. The verdict on the terms is a live argument, and this course does not settle it.

## Why this route matters most for the course's theme

Because it shows that **the alternative to seizing power is designing its transfer**, and that the same skill runs through the whole course. An election rule is a designed transfer of power on a schedule; a negotiated transition is a designed transfer of power in a crisis; and the last route, the term limit, is a designed transfer of power written in *advance*. **The through-line of the entire course is that power changing hands is usually the output of a rule someone chose**, and the negotiated transition is that truth at its most dramatic: adversaries choosing a rule together rather than fighting to the end.

## Sources
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Constitution of the Republic of South Africa Act 200 of 1993 (interim constitution). https://www.gov.za/documents/constitution/constitution-republic-south-africa-act-200-1993
- Skocpol, T. (1979). States and social revolutions: A comparative analysis of France, Russia, and China. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "Distinguish a coup from a revolution on the two axes this course uses.",
          answer: "A coup is from INSIDE the state (elites, often the military) and is fast and narrow, usually changing only who is at the top while leaving the deeper order intact. A revolution is from BELOW (a mass movement) and is slower and wider, replacing the political and social order, not just the rulers. A coup changes the driver; a revolution rebuilds the car.",
        },
        {
          prompt: "Why can scholars build datasets of coups, and what makes that possible?",
          answer: "Because a coup is a recognisable, recurring event with a consistent definition (an illegal, overt attempt by the military or other state elites to unseat the sitting leader). Powell and Thyne's dataset catalogs coup attempts worldwide since 1950 using that definition, which enables cross-country comparison.",
        },
        {
          prompt: "How should this course handle the contested labels 'coup' versus 'revolution' for a modern case?",
          answer: "Describe the mechanism (who moved, insiders or a mass movement; how fast; how deep the change went), attribute the label to whoever uses it, and report that competing actors call it different things. Do not launder a preference as a fact; the analysis is in the mechanism, the label is often the fight.",
        },
      ],
    },
    {
      slug: "power-changes-term-limits",
      title: "17 · Term limits: designing the handover in advance",
      section: "Section 4 · When power changes hands outside elections",
      body: `The last three routes were events: a seizure, an upheaval, a bargain, each triggered by a crisis. The final route is the opposite. A **term limit** changes power on a schedule set **before anyone knew who would hold the office.** It is the quietest mechanism in the course and, in a stable democracy, the most common way the top job actually changes hands. **A term limit is a rule that fires on time, not on crisis.**

## What a term limit is, and what it does

A **term limit** is a rule capping how long a person may hold an office, or how many terms they may serve, forcing a departure regardless of popularity. Its logic is preventive: **it removes the incumbency question before it can arise**, so that no election, negotiation, or seizure is needed to make the office change hands. The office turns over because the clock says so.

Its purpose is to guard against one specific danger: **the entrenchment of a single leader.** A popular incumbent with the powers of office can be very hard to defeat at the ballot box, and history is full of leaders who used the advantages of incumbency to stay indefinitely. **A term limit is a pre-commitment against that**, a rule the polity binds itself with in advance, in calmer times, to force a handover that heated times might not produce.

## The United States: the 22nd Amendment

The clearest example is the American presidency. For most of American history a two-term custom, begun by George Washington's voluntary departure, held without any written rule. After Franklin Roosevelt was elected four times, the custom was written into law: the **22nd Amendment, ratified in 1951, limits a president to two elected terms** (U.S. Const. amend. XXII). **A convention became a hard rule**, and since then the American presidency has changed hands on a strict schedule that no incumbent's popularity can extend. That is the term limit doing its one job: forcing the handover.

## A different design: single-term limits

Not all term limits allow two terms. Some offices are capped at a **single term with no re-election at all**, a stricter design used precisely where the fear of entrenchment is greatest. **Mexico's presidency is the standard example: a single six-year term (the sexenio) with no re-election**, a rule rooted in reaction against long personal rule and carried in the Mexican constitution (Political Constitution of the United Mexican States, art. 83). The single-term design trades away the voters' ability to reward a good president with a second term, in exchange for an absolute guarantee against one person holding the office for long. **Different dial setting, same purpose: schedule the handover so no one can refuse it.**

## Term limits as the course's argument in miniature

A term limit is the purest illustration of this course's whole thesis. **It is a rule, chosen in advance, that determines how power changes hands**, and changing the rule changes the outcome as surely as changing a counting method does. Extend the limit and you let a leader stay; abolish it and you remove the scheduled handover entirely; tighten it to a single term and you force turnover harder. **The debate over term limits is therefore never really about one leader; it is about who the rule will remove, and when, for every holder of the office to come.** That is exactly the lens Section 1 built for elections, applied to the calendar.

## The honest caveat

Two cautions. **First, a term limit only works if the rest of the system enforces it**; a rule on paper that an incumbent can rewrite or ignore is not a functioning limit, and whether a given country's limit is real is a question of practice, not just text. **Second, term limits trade off against voter choice**: they can remove a leader the public would freely re-elect, which is a genuine cost that reasonable people weigh differently. **Report the mechanism and the trade-off; do not pretend the design question has a single right answer.** With that, the four non-electoral routes are complete, and the course turns to putting the whole toolkit to work.

## Sources
- U.S. Const. amend. XXII. https://constitution.congress.gov/constitution/amendment-22/
- Political Constitution of the United Mexican States, art. 83. https://www.diputados.gob.mx/LeyesBiblio/ref/cpeum.htm
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook`,
      recallContent: [
        {
          prompt: "What is a negotiated transition, and what precondition usually makes one happen?",
          answer: "A change of regime by agreement between the old rulers and the opposition, trading the regime's exit for guarantees. The usual precondition is stalemate: neither side can simply win, so both choose a negotiated settlement over an uncertain, ruinous fight.",
        },
        {
          prompt: "State the documented outcome of Poland's June 1989 partly free election.",
          answer: "After the Round Table Talks agreed partly free elections, Solidarity candidates won 99 of the 100 Senate seats and all 161 of the Sejm seats open to free competition. The partly free election, agreed at a table, cascaded into the end of communist rule in Poland.",
        },
        {
          prompt: "Summarise South Africa's 1990 to 1994 transition as a transfer of power.",
          answer: "Nelson Mandela was released in February 1990; multi-party negotiations produced an interim constitution in 1993; and in April 1994 South Africa held its first non-racial, universal-franchise election, in which the ANC won about 62.6 percent and Mandela became president of a Government of National Unity. Racial minority rule gave way to universal-franchise democracy by negotiated settlement.",
        },
      ],
    },
    {
      slug: "power-changes-quiz-outside",
      title: "18 · Quiz: power changing hands outside elections",
      section: "Section 4 · When power changes hands outside elections",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The four non-electoral routes power takes are coup, revolution, term limit, and:",
            options: [
              "A recount of the ballots",
              "A negotiated transition",
              "A change of the currency",
              "A national opinion poll",
            ],
            correctIndex: 1,
            explanation: "The four routes are coup (inside the state), revolution (from below), negotiated transition (by agreement), and term limit (by prior design). Each is a genuinely different mechanism.",
            sourceLessonSlug: "power-changes-outside-elections",
          },
          {
            prompt: "A coup pushes from _____; a revolution pushes from _____.",
            options: [
              "below the state; inside it",
              "a foreign power; a court",
              "inside the state; below it",
              "the voters; the calendar",
            ],
            correctIndex: 2,
            explanation: "A coup is a seizure by elites already inside the state (often the military); a revolution is a mass-based push from below. Direction is the first thing to get right.",
            sourceLessonSlug: "power-changes-outside-elections",
          },
          {
            prompt: "'A coup changes the driver; a revolution rebuilds the car' means a coup:",
            options: [
              "Swaps rulers, keeps the order",
              "Rebuilds the whole society",
              "Always fails within a year",
              "Needs a mass movement below",
            ],
            correctIndex: 0,
            explanation: "A coup typically changes only who is at the top and leaves the deeper social and economic order intact; a revolution transforms the order itself, not just the rulers.",
            sourceLessonSlug: "power-changes-coups-revolutions",
          },
          {
            prompt: "Scholars can build datasets of coups because a coup is:",
            options: [
              "A slow, decades-long process",
              "Legal in most countries",
              "Always led from below",
              "A recognisable, defined event",
            ],
            correctIndex: 3,
            explanation: "A consistent definition (an illegal, overt attempt by the military or other state elites to unseat the leader) lets datasets like Powell and Thyne's catalog coups since 1950 for comparison.",
            sourceLessonSlug: "power-changes-coups-revolutions",
          },
          {
            prompt: "On whether a contested modern event is a 'coup' or a 'revolution', this course:",
            options: [
              "Picks the one correct label firmly now",
              "Describes mechanism, attributes labels",
              "Always calls the event a revolution",
              "Refuses to discuss the event at all",
            ],
            correctIndex: 1,
            explanation: "The words carry judgment, so the course describes the mechanism (who moved, how fast, how deep), attributes the label to whoever uses it, and does not launder a preference as a fact.",
            sourceLessonSlug: "power-changes-coups-revolutions",
          },
          {
            prompt: "A negotiated transition is a change of regime by:",
            options: [
              "Agreement between the two sides",
              "A military seizure at dawn",
              "A single national referendum",
              "A foreign army's invasion",
            ],
            correctIndex: 0,
            explanation: "It trades the old regime's exit for guarantees, agreed between the rulers and the opposition. The usual precondition is stalemate: neither side can simply win.",
            sourceLessonSlug: "power-changes-negotiated",
          },
          {
            prompt: "Poland's 1989 Round Table produced partly free elections in which Solidarity won:",
            options: [
              "A bare third of the Senate",
              "99 of 100 Senate seats",
              "No seats in either house",
              "Only the presidency itself",
            ],
            correctIndex: 1,
            explanation: "Solidarity won 99 of the 100 Senate seats and all 161 Sejm seats open to free competition. The agreed partly free election cascaded into the end of communist rule in Poland.",
            sourceLessonSlug: "power-changes-negotiated",
          },
          {
            prompt: "South Africa's transition (1990-1994) reached universal-franchise democracy through:",
            options: [
              "A sudden military coup",
              "An armed revolution alone",
              "A negotiated settlement",
              "An outside occupation",
            ],
            correctIndex: 2,
            explanation: "Mandela's 1990 release, multi-party negotiations, a 1993 interim constitution, and the first non-racial election in 1994 (ANC about 62.6 percent) replaced minority rule by negotiated settlement.",
            sourceLessonSlug: "power-changes-negotiated",
          },
          {
            prompt: "On the compromises inside negotiated transitions (amnesties, power-sharing), the course:",
            options: [
              "Declares them all plainly unjust and wrong",
              "Declares them all plainly just and fair",
              "Reports facts, flags the verdict debated",
              "Ignores that the compromises happened",
            ],
            correctIndex: 2,
            explanation: "It states the documented sequence flatly and flags the moral assessment as genuinely contested: reasonable people disagree whether the bargains were a necessary price or an unjust shield.",
            sourceLessonSlug: "power-changes-negotiated",
          },
          {
            prompt: "A term limit changes power on a schedule set:",
            options: [
              "During the next crisis",
              "Before anyone holds the office",
              "By the sitting incumbent",
              "By the losing opposition",
            ],
            correctIndex: 1,
            explanation: "A term limit is a rule fixed in advance that forces a departure regardless of popularity, so the office turns over on the clock, without an election, bargain, or seizure being needed.",
            sourceLessonSlug: "power-changes-term-limits",
          },
          {
            prompt: "The specific danger a term limit is designed to guard against is:",
            options: [
              "Low turnout in elections",
              "A tie in the vote count",
              "One leader's entrenchment",
              "A weak minor party",
            ],
            correctIndex: 2,
            explanation: "A popular incumbent can use the advantages of office to stay indefinitely. A term limit is a pre-commitment, made in calmer times, against that entrenchment.",
            sourceLessonSlug: "power-changes-term-limits",
          },
          {
            prompt: "The US 22nd Amendment (1951) limits the president to:",
            options: [
              "One six-year term only",
              "Three elected terms total",
              "Unlimited terms if popular",
              "Two elected terms",
            ],
            correctIndex: 3,
            explanation: "After Franklin Roosevelt's four elections, the two-term custom became a hard rule in 1951, so the presidency changes hands on a schedule no incumbent's popularity can extend.",
            sourceLessonSlug: "power-changes-term-limits",
          },
          {
            prompt: "Mexico's presidency uses a stricter term-limit design, namely:",
            options: [
              "A single term, no re-election",
              "Two terms like the US",
              "No limit of any kind",
              "A lifetime appointment",
            ],
            correctIndex: 0,
            explanation: "Mexico caps the presidency at a single six-year term (the sexenio) with no re-election, trading a second term away for an absolute guarantee against long personal rule.",
            sourceLessonSlug: "power-changes-term-limits",
          },
          {
            prompt: "A term limit illustrates the whole course because it is a rule that:",
            options: [
              "Counts the votes more fairly",
              "Removes all political parties",
              "Decides how power changes hands",
              "Applies only to elections",
            ],
            correctIndex: 2,
            explanation: "Like a counting method, a term limit is a rule chosen in advance that determines how power changes hands; changing it (extend, abolish, tighten) changes who is removed, and when.",
            sourceLessonSlug: "power-changes-term-limits",
          },
          {
            prompt: "The course's honest caveat about term limits is that they:",
            options: [
              "Never fail once written down",
              "Trade off against voter choice",
              "Always cause a civil war",
              "Only exist in the US",
            ],
            correctIndex: 1,
            explanation: "A term limit can remove a leader the public would freely re-elect, a genuine cost, and it works only if the rest of the system enforces it. The design question has no single right answer.",
            sourceLessonSlug: "power-changes-term-limits",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Put the machine to work
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-changes-map",
      title: "19 · Map: the world's electoral systems, by family",
      section: "Section 5 · Put the machine to work",
      body: `**Read this before the map, because the map's limits are part of the lesson.** This platform draws markers as fixed-size dots on a world projection, so the coordinates below are **approximate points placed at capitals to show a pattern, not addresses.** Each marker stands for a whole country's system for its main elected chamber, which is a national rule and not a single building. Read the colors, not the positions.

## What the colors mean

The markers are grouped by the **family** each country uses for its principal legislative chamber, which is the whole first half of the course expressed as a legend:

**Blue markers: the majoritarian family (most votes wins the seat).** The United States (House, by first-past-the-post), the United Kingdom (House of Commons, FPTP), and France (National Assembly, by a two-round majoritarian runoff). Blue is the family of single-winner, plurality-or-runoff rules, the one Duverger's law pulls toward two parties.

**Green markers: the proportional family (seats in proportion to votes).** The Netherlands (one 150-seat national district, near-total proportionality) and Israel (nationwide list PR with a 3.25 percent threshold). Green is the family built to shrink the votes-to-seats gap, where coalitions are the normal way a government forms.

**Amber marker: ranked-choice / instant-runoff.** Australia (House of Representatives, by the alternative vote since 1918). Amber sits beside blue, not green: it is majoritarian, a single-seat rule that fixes the spoiler by transfer, but it is drawn in its own color to make the point that it is not proportional.

**Purple markers: mixed-member proportional.** Germany (the Bundestag) and New Zealand (which adopted MMP in 1993 and first used it in 1996). Purple is the family that runs a local tier and a proportional tier together and lets the party vote set the totals, refusing the trade-off the others accept.

## What the map cannot show

**It cannot show the family as a shape.** An electoral system is a national rule, not a place, so a single dot at a capital is a stand-in for a whole country's law. The plan for this path notes that comparative courses like this one are the first content that genuinely wants a polygon (choropleth) layer, a country filled by the color of its system, rather than pins; until that ships, read each dot as "this country's rule", not "this spot".

**It cannot show the dials.** Two green PR countries can behave very differently because their magnitude and threshold are set differently (the Netherlands at about 0.67 percent, Israel at 3.25), and the color cannot show that. **The color tells you the family; the dials you carry from Section 3.** With the families in view, close the course by taking one real contest and re-running it under a second rule.

## Sources
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Der Bundeswahlleiter [Federal Returning Officer, Germany]. (n.d.). The German electoral system. https://www.bundeswahlleiterin.de/en/
- Electoral Commission New Zealand. (n.d.). MMP voting system. https://elections.nz/democracy-in-nz/what-is-new-zealands-system-of-government/mmp-voting-system/
- Australian Electoral Commission. (n.d.). Preferential voting. https://www.aec.gov.au/learn/preferential-voting.htm`,
      mapContent: {
        markers: [
          {
            id: "power-changes-map-us",
            lat: 38.8899,
            lng: -77.0091,
            title: "Majoritarian: United States (House, first-past-the-post)",
            color: "#1d4ed8",
            description:
              "The US House of Representatives is elected by single-member plurality (FPTP): in each district, the most votes wins the one seat, majority or not. It is the classic case of the majoritarian family Duverger's law pulls toward two parties, and the family whose winner is unusually sensitive to spoilers and to where the district line is drawn. Coordinates are approximate, placed at the Capitol to stand for a national rule.",
          },
          {
            id: "power-changes-map-uk",
            lat: 51.4995,
            lng: -0.1248,
            title: "Majoritarian: United Kingdom (House of Commons, FPTP)",
            color: "#1d4ed8",
            description:
              "The UK House of Commons is elected by first-past-the-post in single-member constituencies. Like the US House, it routinely manufactures a seat majority out of a vote plurality, which supporters prize for single-party government and critics call disproportionality. Note New Zealand, on this same map, left FPTP for MMP in the 1990s. Coordinates are approximate, at Westminster.",
          },
          {
            id: "power-changes-map-france",
            lat: 48.862,
            lng: 2.3186,
            title: "Majoritarian: France (National Assembly, two-round runoff)",
            color: "#1d4ed8",
            description:
              "France elects its National Assembly by a two-round majoritarian system in single-member districts: a candidate winning an absolute majority in the first round is elected, otherwise qualifying candidates go to a second-round runoff. It is majoritarian like FPTP but forces a majority through a real second round rather than an instant one. Coordinates are approximate, at the Palais Bourbon.",
          },
          {
            id: "power-changes-map-netherlands",
            lat: 52.0799,
            lng: 4.3113,
            title: "Proportional: Netherlands (one national list-PR district)",
            color: "#047857",
            description:
              "The Netherlands elects its 150-seat lower house by party-list PR treating the whole country as a single district, so the natural threshold is about 0.67 percent (one seat) and there is no higher legal bar. The result is near-total proportionality and a highly fragmented, coalition-governed parliament. Proportionality turned nearly all the way up. Coordinates are approximate, at The Hague.",
          },
          {
            id: "power-changes-map-israel",
            lat: 31.7767,
            lng: 35.2054,
            title: "Proportional: Israel (nationwide list PR, 3.25 percent threshold)",
            color: "#047857",
            description:
              "Israel elects its 120-seat Knesset by nationwide party-list PR with a legal threshold of 3.25 percent (raised from 2 percent in 2014). It is the proportional family with the brake set higher than the Netherlands, yet still low, so the Knesset holds many parties and coalitions are large and complex. Same family, different dial. Coordinates are approximate, at the Knesset.",
          },
          {
            id: "power-changes-map-australia",
            lat: -35.3081,
            lng: 149.1245,
            title: "Ranked-choice: Australia (House of Reps, instant-runoff)",
            color: "#b45309",
            description:
              "Australia's House of Representatives has used ranked-choice (the alternative vote, an instant-runoff) in single-member districts since 1918: voters rank candidates, the lowest is eliminated and transferred until someone has a majority. Drawn apart from the blue family to show it fixes the spoiler by transfer, yet is still majoritarian and not proportional. Coordinates are approximate, at Parliament House, Canberra.",
          },
          {
            id: "power-changes-map-germany",
            lat: 52.5186,
            lng: 13.3762,
            title: "Mixed-member proportional: Germany (the Bundestag)",
            color: "#7c3aed",
            description:
              "Germany elects the Bundestag by mixed-member proportional representation: each voter casts a local (district) vote and a party vote, and top-up list seats are added so each party's total matches its party vote, subject to a 5 percent threshold. A local member and a proportional parliament at once: the proportional tier sets the totals. Coordinates are approximate, at the Reichstag.",
          },
          {
            id: "power-changes-map-new-zealand",
            lat: -41.2785,
            lng: 174.7762,
            title: "Mixed-member proportional: New Zealand (adopted 1993)",
            color: "#7c3aed",
            description:
              "New Zealand adopted MMP in a 1993 referendum and first used it in 1996, replacing first-past-the-post specifically to end the large disproportionality FPTP had produced. It keeps a local member per district and uses the party vote plus top-up seats to make the House proportional overall. A country that changed its own machine on the record. Coordinates are approximate, at Parliament, Wellington.",
          },
        ],
      },
    },
    {
      slug: "power-changes-capstone",
      title: "20 · Capstone: one contest, two systems, from the record",
      section: "Section 5 · Put the machine to work",
      lessonType: "assignment",
      body: `You have the whole machine now: the five moving parts, the majoritarian family, the proportional and mixed families, and the four non-electoral routes. Use it on one real thing. **Take a single real multi-candidate or multi-party contest, and show, from the public record, how its outcome could differ under a second counting rule.** This is the course's whole claim made concrete: the rule, not the votes alone, picks the winner.

**One boundary before you start, restated because a capstone is where people forget it: this is a research exercise in reading rules, not advocacy.** You are showing how a mechanism works, not arguing who should have won or which system is best. Where a case is contested, report what the record establishes and flag what is disputed, exactly as the course did for spoilers, gerrymanders, and negotiated transitions.

## The assignment

Produce a **one-page rule-comparison** of a real contest: name it, give its actual result under the rule that was actually used, then re-run it under a second rule and show whether the winner changes and why. **The finding is the comparison and the sources, not the prose.** Aim for a comparison you could defend to someone who wanted the opposite conclusion.

## Step 1. Pick a contest, and get its real numbers

Choose a real election with results on the public record: a legislative election with party vote shares, or a multi-candidate single-seat race with candidate vote totals. **Cite the official source** (an electoral commission, an official gazette, a returns database). Write down the actual rule used and the actual result. **No invented totals**; if you cannot source a number, pick a different contest.

## Step 2. Choose a second rule to test, and match it to your data

Be honest about what your data can support, because this is where the discipline lives:

| If you have... | You can fairly re-run it under... | You cannot fairly claim... |
|---|---|---|
| **Party vote shares** | Party-list PR (apportion seats by share) | An IRV or Condorcet result (needs rankings) |
| **Published ranked ballots** | IRV, and a pairwise (Condorcet) check | More than the rankings actually show |
| **Only first-choice totals** | FPTP vs a simple PR apportionment | Any transfer-based outcome |

**The most defensible comparison is FPTP versus PR using real vote shares**, because it needs only numbers that are widely published. Anything that needs voters' second and third choices requires an election that actually published ranked ballots (some real ranked-choice elections do); if you assume preferences that were not recorded, **you must label them as assumptions, clearly, and show how the result depends on them.**

## Step 3. Do the arithmetic, and show your work

Re-run the contest under the second rule the way Lesson 2 did: state the rule, apply it step by step to the real numbers, and reach the outcome. For a PR re-run, apportion the seats by vote share and report the new seat totals. For an IRV re-run on real ranked data, eliminate and transfer round by round. **Every step must be reproducible from the numbers you cited.**

## Step 4. Say what changed, and why the rule caused it

State plainly whether the winner or the seat balance changed, and **name the mechanism** from the course that did the work: a manufactured majority, wasted votes, a threshold that excluded a party, a transfer that rescued one, a district magnitude that favored the big parties. **The explanation is the point.** "It changed" is a result; "it changed because the 5 percent threshold denied party X its proportional seats" is an analysis.

## Rules you do not get to break

1. **From the record, not from memory.** Every real number ties to an official source you can name.
2. **No invented result, and no fabricated rankings.** If the ranked data does not exist, do not manufacture it; either pick a ranked-ballot election or label every assumed preference as an assumption and test how much the outcome depends on it.
3. **Match the claim to the data.** Do not report an IRV or Condorcet "winner" from vote shares alone; that needs rankings you do not have.
4. **Report facts flatly; flag disputes as disputes.** A vote total is usually not contested; whether a third candidate "spoiled" a race is. Do not blur the two, and take no side on any contested case.
5. **This is a comparison of rules, not advice or advocacy**, and your page should say so at the top, because someone else may read it.

## What good looks like

A one-page comparison in which a real contest is named and sourced, its actual result is stated under the real rule, a second rule is applied step by step to the same real numbers, the change (or the absence of change) is shown, and the mechanism that caused it is named, with every assumption labeled. **If you took a real election whose winner everyone thinks of as simply "the winner", and showed from the official returns that a different rule would have seated someone else, you have proved the thing this course set out to teach: the winner is the votes AND the rule, and you cannot separate them after the fact.**

## Sources
- Reynolds, A., Reilly, B., & Ellis, A. (2005). Electoral system design: The new International IDEA handbook. International Institute for Democracy and Electoral Assistance. https://www.idea.int/publications/catalogue/electoral-system-design-new-international-idea-handbook
- Farrell, D. M. (2011). Electoral systems: A comparative introduction (2nd ed.). Palgrave Macmillan.
- Gallagher, M., & Mitchell, P. (Eds.). (2008). The politics of electoral systems. Oxford University Press.`,
    },
  ],
};
