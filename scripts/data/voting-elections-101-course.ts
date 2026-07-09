// Authored "Voting & Elections 101", a Civics-category companion to US Civics 101 on
// Learn.WitUS. Plain-language, strictly non-partisan MECHANICS: how registration, primaries,
// ballots, the Electoral College, ballot measures, and vote counting/certification actually
// work. It never argues who should win, which party or candidate is better, or whether any
// rule is good or bad policy — it explains the process and points to the authoritative source
// (the U.S. Election Assistance Commission, the National Archives, Congress.gov/CRS, and the
// National Conference of State Legislatures for state-by-state variation) for the reader to
// verify against their own state.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): registration deadlines, ID rules, primary
// type, mail/early-voting rules, ballot-measure signature thresholds, and certification
// timelines all VARY BY STATE and can change. This course never states a single number or
// rule as universal where the source says it varies — it names the rule, says it varies, and
// points to the state's own election office as the authority.
//
// Citation standard (APA 7 in-line + a `## Sources` bibliography), all verified live via
// WebSearch/WebFetch at authoring time. Ends with a quiz whose every question links back to
// the lesson that teaches the answer (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const VOTING_ELECTIONS_101_COURSE: AuthoredCourse = {
  title: "Voting & Elections 101",
  description:
    "A clear, non-partisan guide to how U.S. elections actually work: registering to vote, primaries vs. caucuses vs. the general election, how ballots and polling places work (including early and mail voting), the Electoral College, ballot measures, and how votes are counted, canvassed, and certified. Cited to the U.S. Election Assistance Commission, the National Archives, Congress.gov/CRS, and the National Conference of State Legislatures. It teaches the mechanics, not who should win.",
  lessons: [
    {
      slug: "registering-to-vote",
      title: "1 · Registering to vote",
      body: `To vote in a U.S. election, you generally must **register** first (except North Dakota, which has no voter registration at all). To register, you must typically be a **U.S. citizen**, at least **18 years old by Election Day**, and meet your **state's residency requirement** (EAC, n.d.-a).

There are three common ways to register:

- **Online**, in most states.
- **In person**, at your state or local election office, or often at the motor-vehicles office.
- **By mail**, using the National Mail Voter Registration Form (accepted everywhere except New Hampshire, North Dakota, Wisconsin, and Wyoming, which use their own state forms or, for North Dakota, no registration) (EAC, n.d.-a, n.d.-b).

**Deadlines vary by state**, and they are firm. Some states require you to register weeks before an election; about two dozen states plus D.C. instead offer **same-day registration**, letting you register and vote at the same time, often during early voting and/or on Election Day itself (NCSL, n.d.-a). There is no single nationwide deadline: you must check **your** state's rule.

:::reveal Name the three common ways to register to vote, and explain why there is no single nationwide registration deadline. ||| Online, in person (often at your state/local election office or the DMV), and by mail using the National Mail Voter Registration Form. There is no single deadline because each state sets its own registration deadline (and some states allow same-day registration instead of a deadline at all), so you must check your own state's rule.

## Sources
- EAC. (n.d.-a). *Register and vote in your state*. U.S. Election Assistance Commission. https://www.eac.gov/voters/register-and-vote-in-your-state
- EAC. (n.d.-b). *How do I register to vote?* U.S. Election Assistance Commission. https://www.eac.gov/how-do-i-register-to-vote
- NCSL. (n.d.-a). *Same-day voter registration*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/same-day-voter-registration`,
    },
    {
      slug: "primaries-caucuses-general",
      title: "2 · Primaries, caucuses, and the general election",
      body: `Most offices are filled through two stages: a **primary** (or caucus) that narrows each party's field, and a **general election** that decides who actually holds the office.

**Primaries** are run **by the state**, using the state's regular election machinery (polling places, mail ballots, etc.). States vary in **who may vote** in each party's primary (NCSL, n.d.-b, n.d.-c):

- **Closed primary**: only voters registered with that party may vote in it.
- **Open primary**: voters may participate regardless of party registration (sometimes choosing which party's ballot to take on the spot).
- **Semi-closed / partially open primary**: unaffiliated voters may participate, but voters already registered with a party generally must stay in their own party's primary.

**Caucuses** are different: they are **run by the political party itself**, not by state election officials, usually as in-person meetings on a set day where attendees debate and select delegates. Over the past century, most parties and states have shifted from caucuses to primaries specifically to let more people participate, since a primary lets you vote privately rather than attend a meeting (NCSL, n.d.-b).

The **general election** is the one that fills the office. Every eligible voter may participate, regardless of party, and the general election's rules (who can vote, how ballots work) don't depend on party registration the way a closed primary's do.

:::reveal What is the key difference between how a primary and a caucus are run, and which election actually decides who holds the office? ||| A primary is run by the state using its regular election system; a caucus is run by the political party itself, usually as an in-person meeting. The general election is the one that actually decides who holds the office, and every eligible voter may participate in it regardless of party.

## Sources
- NCSL. (n.d.-b). *Open, closed, hybrid? State primary elections come in assorted flavors*. National Conference of State Legislatures. https://www.ncsl.org/resources/details/open-closed-hybrid-state-primary-elections-come-in-assorted-flavors
- NCSL. (n.d.-c). *State primary election types*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-primary-election-types`,
      recallContent: [
        {
          prompt: "What are the three common ways to register to vote?",
          answer:
            "Online (in most states), in person (at a state/local election office or often the DMV), and by mail using the National Mail Voter Registration Form.",
        },
        {
          prompt: "Why isn't there one nationwide voter-registration deadline?",
          answer:
            "Each state sets its own deadline, and some states allow same-day registration instead of a fixed deadline, so you must confirm the rule for your own state.",
        },
      ],
    },
    {
      slug: "how-you-vote",
      title: "3 · How you vote: polling places, early voting, and mail voting",
      body: `There is more than one way to cast a ballot, and **which options exist, and their rules, vary by state**.

- **In person on Election Day**, at your assigned **polling place**.
- **Early voting**: many states let you cast an in-person ballot before Election Day at a designated location (EAC, n.d.-c).
- **Mail / absentee voting**: a ballot is mailed to you (or you request one), you mark it privately, and return it by mail or drop box. Some states require an excuse to vote absentee; others mail every registered voter a ballot automatically; the rules differ by state (EAC, n.d.-d).
- **Provisional ballot**: cast when a poll worker cannot immediately confirm your eligibility (for example, your name doesn't appear on the roster). It's a federal fail-safe created by the Help America Vote Act: your ballot is set aside, and election officials determine after Election Day, under state law, whether it is fully counted, partially counted, or not counted (EAC, n.d.-e).

**Voter ID rules also vary by state.** As of recent NCSL tracking, most states request or require some form of ID at the polls (photo or non-photo, and some strictly require it while others accept alternatives like a signature affidavit if you lack ID), while a minority of states require no ID at all (NCSL, n.d.-d). **Don't assume your state's rule**: confirm it with your own state or local election office before you go to vote.

:::reveal What is a provisional ballot, and why does it exist? ||| A provisional ballot is cast when a poll worker can't immediately confirm a voter's eligibility (for example, the voter's name isn't on the roster). It exists as a federal fail-safe under the Help America Vote Act so the vote isn't simply turned away; it's set aside and election officials decide after Election Day, under state law, whether to count it.

## Sources
- EAC. (n.d.-c). *How do I vote early?* U.S. Election Assistance Commission. https://www.eac.gov/how-do-i-vote-early
- EAC. (n.d.-d). *Voting by mail / absentee voting*. U.S. Election Assistance Commission. https://www.eac.gov/election-officials/voting-mail-absentee-voting
- EAC. (n.d.-e). *Provisional voting*. U.S. Election Assistance Commission. https://www.eac.gov/research-and-data/provisional-voting
- NCSL. (n.d.-d). *Voter ID*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/voter-id`,
      recallContent: [
        {
          prompt: "What is the key difference between how a primary and a caucus are run?",
          answer:
            "A primary is run by the state using its regular election system. A caucus is run by the political party itself, usually as an in-person meeting.",
        },
        {
          prompt: "Which election actually decides who holds the office, and who may vote in it?",
          answer:
            "The general election decides who holds the office, and every eligible voter may participate regardless of party.",
        },
      ],
    },
    {
      slug: "electoral-college-how",
      title: "4 · The Electoral College: how it works",
      body: `The President is elected through the **Electoral College**, not a direct national popular vote. It's a **process**, not a place, with three stages: states **select electors**, the electors **meet and vote** for President and Vice President, and **Congress counts** the votes (National Archives, n.d.-a).

The numbers:

- There are **538 total electors**; a candidate needs a **majority of 270** to win.
- Each state gets electors equal to its **total congressional delegation**: one for each U.S. House seat, plus **two** for its Senators. The **23rd Amendment** gives the **District of Columbia 3 electors**, even though it has no voting members of Congress (National Archives, n.d.-a, n.d.-b).

How states award their electors:

- **48 states** use **winner-take-all**: whichever candidate wins the statewide popular vote gets **all** of that state's electors.
- **Maine and Nebraska** use a **congressional-district method** instead: one elector goes to the popular-vote winner in **each congressional district**, and the remaining **2 at-large electors** go to the statewide popular-vote winner. This means these two states can (rarely) split their electoral votes between candidates (National Archives, n.d.-c).

After Election Day, each state's governor signs a **Certificate of Ascertainment** naming the appointed electors (by mid-December); the electors then **meet in their states in mid-December** to cast their votes; and **Congress counts the electoral votes** in a joint session on **January 6** (National Archives, n.d.-a).

:::reveal How many total electors are there, how many does a candidate need to win, and how do Maine and Nebraska allocate their electors differently from every other state? ||| There are 538 total electors, and a candidate needs a majority of 270 to win. Every other state uses winner-take-all (all electors go to the statewide popular-vote winner), but Maine and Nebraska award one elector per congressional-district winner plus 2 at-large electors to the statewide winner, so they can split their electoral votes.

## Sources
- National Archives. (n.d.-a). *The Electoral College*. https://www.archives.gov/electoral-college
- National Archives. (n.d.-b). *What is the Electoral College?* https://www.archives.gov/electoral-college/about
- National Archives. (n.d.-c). *Distribution of electoral votes*. https://www.archives.gov/electoral-college/allocation`,
      recallContent: [
        {
          prompt: "What is a provisional ballot, and why does it exist?",
          answer:
            "It's a ballot cast when a poll worker can't immediately confirm a voter's eligibility. It's a federal fail-safe (Help America Vote Act) so the voter isn't simply turned away; officials decide after Election Day whether to count it.",
        },
        {
          prompt: "Name one thing that varies by state when it comes to how you cast a ballot.",
          answer:
            "Any of: whether early voting exists and how it works, whether mail/absentee voting requires an excuse, or what ID (if any) is required at the polls.",
        },
      ],
    },
    {
      slug: "electoral-college-why",
      title: "5 · Why the Electoral College exists",
      body: `The Electoral College came out of a genuine **compromise** at the 1787 Constitutional Convention. The framers had debated for months how to choose a president and couldn't agree between two options: having **Congress** elect the president, or having the president elected by a **direct national popular vote**. A committee (one member per state) proposed the elector system as a middle path (National Archives, n.d.-d).

Two reasons commonly cited for the compromise: it preserved a role for the **states** (including smaller ones) in choosing the president, consistent with the young country's federal structure, and some framers were wary of pure direct democracy at national scale, worried that voters spread across a large country would lack enough shared information about candidates from other states (National Archives, n.d.-d).

**The system is still debated today**, and this course takes no position on whether it should change; it only reports the facts:

- **Faithless electors** (electors who vote against the candidate they were pledged to) have occurred but have **never changed the outcome** of a presidential election. In *Chiafalo v. Washington* (2020), the U.S. Supreme Court unanimously upheld a state's authority to penalize faithless electors (Congressional Research Service [CRS], 2024).
- Changing the system nationwide would require a **constitutional amendment**. Short of that, the **National Popular Vote Interstate Compact** is a state-by-state proposal in which participating states would agree to award their electors to the national popular-vote winner; as of the compact's own recent count, it has not yet reached the 270 electoral votes needed for it to take effect (CRS, 2024).

:::reveal What two options did the Electoral College compromise between at the Constitutional Convention, and has a faithless elector ever changed the outcome of a presidential election? ||| It compromised between having Congress elect the president and having the president chosen by a direct national popular vote. No: faithless electors have occurred, but none has ever changed the outcome of a presidential election.

## Sources
- National Archives. (n.d.-d). *Electoral College history*. https://www.archives.gov/electoral-college/history
- Congressional Research Service. (2024). *Electoral College overview* (IF12682). Congress.gov, Library of Congress. https://www.congress.gov/crs-product/IF12682`,
      recallContent: [
        {
          prompt: "How many total electors are there, and how many does a candidate need to win?",
          answer: "538 total electors; a candidate needs a majority of 270 to win.",
        },
        {
          prompt: "How do Maine and Nebraska allocate electors differently from every other state?",
          answer:
            "Every other state uses winner-take-all. Maine and Nebraska award one elector per congressional-district winner plus 2 at-large electors to the statewide winner, so they can split their electoral votes.",
        },
      ],
    },
    {
      slug: "ballot-measures",
      title: "6 · Ballot measures: initiatives and referendums",
      body: `A **ballot measure** is a question put directly to voters, instead of (or in addition to) being decided by the legislature. Not every state has every kind, and the details **vary by state**; NCSL's Statewide Ballot Measures Database tracks every statewide measure back more than a century (NCSL, n.d.-e).

Two main mechanisms, both citizen-driven:

- **Initiative**: citizens draft a proposed **law or constitutional amendment** themselves and collect a set number of **voter signatures** to put it directly on the ballot (a **direct initiative**), or to first send it to the legislature for consideration (an **indirect initiative**) (NCSL, n.d.-e, n.d.-f).
- **Referendum**: two distinct uses of the word. A **popular** (or **veto**) **referendum** lets citizens petition to send a law the legislature already passed to a public vote, to approve or reject it. A **legislative referral** is when the **legislature itself** refers a measure, most commonly a proposed constitutional amendment, to the voters (NCSL, n.d.-e, n.d.-f).

**Don't assume a signature count or process from one state applies to another.** The number of signatures required, what subjects may be put to a vote, and whether the citizen-initiative process exists at all are all set **by each state**, so they vary; confirm the specifics for your state with NCSL's process pages or your state's election office (NCSL, n.d.-f).

:::reveal What is the difference between an initiative and a referendum, and which one is proposed by the legislature itself rather than by citizen petition? ||| An initiative is a law or constitutional amendment citizens draft themselves and place on the ballot by petition. A referendum can mean citizens petitioning to send an already-passed law to a public vote (a popular/veto referendum), or the legislature itself referring a measure, often a constitutional amendment, to voters (a legislative referral) — that legislative referral is the one that comes from the legislature, not a citizen petition.

## Sources
- NCSL. (n.d.-e). *Initiative and referendum overview and resources*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/initiative-and-referendum-overview-and-resources
- NCSL. (n.d.-f). *Initiative and referendum processes*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/initiative-and-referendum-processes`,
      recallContent: [
        {
          prompt: "What two options did the Electoral College compromise between at the Constitutional Convention?",
          answer:
            "Having Congress elect the president, or having the president chosen by a direct national popular vote.",
        },
        {
          prompt: "Has a faithless elector ever changed the outcome of a U.S. presidential election?",
          answer:
            "No. Faithless electors have occurred, but none has ever changed the outcome, and the Supreme Court (Chiafalo v. Washington, 2020) upheld states' authority to penalize them.",
        },
      ],
    },
    {
      slug: "counting-canvassing-certifying",
      title: "7 · Counting, canvassing, and certifying the vote",
      body: `What you see on the news on election night is **not the official result**. Media race calls are projections, and election-night tallies are **preliminary**: they don't yet include every ballot (EAC, n.d.-f).

Three distinct stages happen after the polls close:

1. **Unofficial results.** Election officials report running totals as ballots are tabulated, but this is not final.
2. **The canvass.** This is the official process where election officials **reconcile** every ballot cast (Election Day, early, and mail) against voter records, resolve issues like signature problems or provisional-ballot eligibility, and make sure every valid vote is included. Most states also require a **post-election audit** to check that voting equipment counted correctly; the audit's method and timing vary by state (EAC, n.d.-f).
3. **Certification.** After the canvass (and any required audits) is complete, election officials issue a **written, signed statement of certification**, attesting that the results are a true and accurate accounting of every vote cast. This is the **official** result (EAC, n.d.-f).

**Certification deadlines vary by state**, from about a week after Election Day in some states to several weeks in others, and a close race can trigger a **recount** under state law, which extends the timeline further (EAC, n.d.-f).

:::reveal Are election-night results official? Name the two steps that happen between election night and an official, certified result. ||| No, election-night results are unofficial and preliminary. Between election night and certification, election officials complete the canvass (reconciling every valid ballot against voter records, often with a post-election audit) and then certification (a signed statement attesting the results are a true and accurate count).

## Sources
- EAC. (n.d.-f). *Election results, canvass, and certification*. U.S. Election Assistance Commission. https://www.eac.gov/election-officials/election-results-canvass-and-certification`,
      recallContent: [
        {
          prompt: "What is the difference between an initiative and a legislative referral?",
          answer:
            "An initiative is a law or amendment citizens draft themselves and place on the ballot by petition. A legislative referral is a measure the legislature itself sends to voters.",
        },
        {
          prompt: "What determines whether a signature count for a ballot initiative in one state tells you anything about another state?",
          answer:
            "Nothing — signature thresholds and initiative rules are set individually by each state, so they vary and must be confirmed for your specific state.",
        },
      ],
    },
    {
      slug: "verify-your-own-registration",
      title: "8 · Verify your own registration and rules",
      body: `Every rule in this course, registration deadlines, ID requirements, primary type, early/mail-voting options, ballot-measure processes, and certification timelines, **varies by state**. The single most useful habit this course can teach is: **verify it yourself, from your state's own authoritative source, before every election.**

Where to check:

- **Your state or local election office's official website** is the authority on your specific rules, deadlines, and polling place (EAC, n.d.-a).
- **Vote.gov**, the federal government's official voter-registration portal, links out to your state's own registration and lookup tools (Vote.gov, n.d.).
- **USA.gov's "Confirm your voter registration status" page** is a neutral federal starting point that routes you to your state's lookup tool, where you can typically confirm your name, address, and assigned polling place (USA.gov, n.d.).

A simple pre-election checklist: confirm you're **registered** at your **current address**, confirm your state's **registration and mail-ballot deadlines**, confirm what (if any) **ID** you'll need, and confirm your **polling place** or how to request/return a mail ballot. None of these are guesswork: they're all published by your state's own election office.

:::reveal Name the three practical steps this lesson recommends before every election, and where you go to do them. ||| Confirm you're registered at your current address, confirm your state's deadlines (registration and, if applicable, mail-ballot), and confirm any ID requirement and your polling place. Do all of this through your state or local election office's official website, or a federal portal like Vote.gov or USA.gov that routes you there.

## Sources
- EAC. (n.d.-a). *Register and vote in your state*. U.S. Election Assistance Commission. https://www.eac.gov/voters/register-and-vote-in-your-state
- Vote.gov. (n.d.). *Register to vote in U.S. elections*. https://vote.gov/
- USA.gov. (n.d.). *How to confirm your voter registration status*. https://www.usa.gov/confirm-voter-registration`,
      recallContent: [
        {
          prompt: "Are election-night results official?",
          answer:
            "No. They are unofficial and preliminary; the canvass and certification that follow produce the official result.",
        },
        {
          prompt: "What are the two steps between election night and a certified result?",
          answer:
            "The canvass (reconciling every valid ballot, often with a post-election audit) and certification (the signed, official attestation of the true count).",
        },
      ],
    },
    {
      slug: "practice-voting-mechanics",
      title: "9 · Practice: registration, voting, and the Electoral College",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "A ballot cast when a poll worker can't confirm your eligibility is called a ___ ballot.",
            answer: "provisional",
            explanation: "It's a federal fail-safe under the Help America Vote Act; officials decide after Election Day whether it counts.",
          },
          {
            prompt: "A primary where only voters registered with that party may vote is called a ___ primary.",
            answer: "closed",
            explanation: "Open and semi-closed primaries allow broader participation; the exact type varies by state.",
          },
          {
            prompt: "The total number of presidential electors is ___ (number).",
            answer: "538",
            explanation: "A candidate needs a majority — 270 — to win.",
          },
          {
            prompt: "Maine and Nebraska award electors by congressional ___, unlike every other state's winner-take-all system.",
            answer: "district",
            explanation: "One elector per district winner, plus 2 at-large electors to the statewide winner.",
          },
          {
            prompt: "The official, signed attestation that election results are a true and accurate count is called ___.",
            answer: "certification",
            explanation: "It comes after the canvass, which reconciles every valid ballot cast.",
          },
        ],
      },
    },
    {
      slug: "voting-elections-101-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which state has no voter registration system at all?",
            options: ["North Dakota", "New Hampshire", "Wisconsin", "Wyoming"],
            correctIndex: 0,
            explanation:
              "North Dakota is the one state with no voter registration; the other three listed use their own state-specific mail registration forms rather than the national one.",
            sourceLessonSlug: "registering-to-vote",
          },
          {
            prompt: "Is there a single nationwide voter-registration deadline?",
            options: [
              "Yes, 30 days before every election",
              "No, deadlines are set by each state and some states offer same-day registration",
              "Yes, it's set by the FEC",
              "No, there is no deadline anywhere",
            ],
            correctIndex: 1,
            explanation:
              "Registration deadlines are set by each state and vary; about two dozen states plus D.C. offer same-day registration instead.",
            sourceLessonSlug: "registering-to-vote",
          },
          {
            prompt: "What is the key difference between a primary and a caucus?",
            options: [
              "A primary is run by the party; a caucus is run by the state",
              "A primary is run by the state; a caucus is run by the political party",
              "There is no difference",
              "Caucuses decide the general election winner",
            ],
            correctIndex: 1,
            explanation:
              "A primary uses the state's regular election system. A caucus is a party-run, typically in-person meeting.",
            sourceLessonSlug: "primaries-caucuses-general",
          },
          {
            prompt: "What is a provisional ballot?",
            options: [
              "A ballot cast only by mail",
              "A ballot cast when a poll worker can't immediately confirm the voter's eligibility",
              "A ballot used only in caucuses",
              "An early-voting ballot",
            ],
            correctIndex: 1,
            explanation:
              "It's a federal fail-safe (Help America Vote Act) so a voter isn't simply turned away; it's reviewed and counted or rejected after Election Day under state law.",
            sourceLessonSlug: "how-you-vote",
          },
          {
            prompt: "How many total presidential electors are there, and how many does a candidate need to win?",
            options: [
              "435 total, 218 to win",
              "538 total, 270 to win",
              "100 total, 51 to win",
              "270 total, 135 to win",
            ],
            correctIndex: 1,
            explanation: "There are 538 total electors; a candidate needs a majority, 270, to win.",
            sourceLessonSlug: "electoral-college-how",
          },
          {
            prompt: "How do Maine and Nebraska allocate their electoral votes differently from other states?",
            options: [
              "They don't participate in the Electoral College",
              "They use a congressional-district method instead of winner-take-all",
              "They let Congress choose their electors",
              "They award electors by county population only",
            ],
            correctIndex: 1,
            explanation:
              "Every other state is winner-take-all. Maine and Nebraska award one elector per congressional district plus 2 at-large electors to the statewide winner.",
            sourceLessonSlug: "electoral-college-how",
          },
          {
            prompt: "Why was the Electoral College created?",
            options: [
              "It was always the only option ever proposed",
              "As a compromise between Congress electing the president and a direct national popular vote",
              "To guarantee the largest states always decide the winner",
              "It was invented by the Supreme Court in the 1900s",
            ],
            correctIndex: 1,
            explanation:
              "It resulted from a Constitutional Convention compromise between having Congress choose the president and a direct national popular vote.",
            sourceLessonSlug: "electoral-college-why",
          },
          {
            prompt: "What is a legislative referral?",
            options: [
              "A citizen petition to overturn a law",
              "A measure, often a constitutional amendment, that the legislature itself refers to voters",
              "A type of caucus",
              "A federal court ruling on a ballot measure",
            ],
            correctIndex: 1,
            explanation:
              "Unlike a citizen initiative or popular referendum (both petition-driven), a legislative referral comes from the legislature itself.",
            sourceLessonSlug: "ballot-measures",
          },
          {
            prompt: "Are election-night results the official outcome?",
            options: [
              "Yes, they are final and certified",
              "No, they are unofficial; the canvass and certification that follow produce the official result",
              "Only in presidential elections",
              "Only if there's no recount",
            ],
            correctIndex: 1,
            explanation:
              "Election-night tallies are preliminary. The canvass reconciles every valid ballot, and certification is the official, signed result.",
            sourceLessonSlug: "counting-canvassing-certifying",
          },
          {
            prompt: "What is the best way to confirm the voting rules that apply to you specifically?",
            options: [
              "Assume every state follows the same rules",
              "Check your state or local election office's official website (or a federal portal like Vote.gov that routes you there)",
              "Ask a caucus organizer",
              "Rely on last election's rules without checking",
            ],
            correctIndex: 1,
            explanation:
              "Because deadlines, ID rules, and voting methods vary by state and can change, your state or local election office is the authoritative source.",
            sourceLessonSlug: "verify-your-own-registration",
          },
        ],
      },
    },
  ],
};
