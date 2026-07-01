// Authored "Washington Civics: How Your State Government Works" — the Washington
// entry in the per-state Civics layer on Learn.WitUS. State-level companion to the
// general Civics courses: those teach the SYSTEM; this teaches Washington's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to WASHINGTON'S OWN OFFICIAL SOURCES: the Legislature
// (leg.wa.gov), the Secretary of State / elections (sos.wa.gov), the Courts
// (courts.wa.gov), and the Washington State Constitution (1889).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Washington is
// a heavy direct-democracy state and runs all-mail elections; its tax structure is
// litigated. Time-sensitive items (the income-tax/capital-gains question, registration
// and ballot deadlines) are flagged and point learners to sos.wa.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_WA_COURSE: AuthoredCourse = {
  title: "Washington Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Washington governs itself — and how you take part where you live. You'll learn Washington's Constitution of 1889 and its strong direct democracy (initiatives to the people AND to the legislature, referendum, recall); a notably 'plural' executive in which voters elect NINE separate statewide officials; a Legislature of 49 senators and 98 representatives elected from 49 shared districts; a Supreme Court of nine justices elected on a nonpartisan ballot; and Washington's distinctive elections — an all-mail (vote-by-mail) system statewide and a 'top-two' primary in which the two leading candidates advance regardless of party. It flags time-sensitive facts — including Washington's contested no-income-tax tradition — and points to sos.wa.gov. Cited to Washington's own official sources (leg.wa.gov, sos.wa.gov, courts.wa.gov).",
  lessons: [
    // ── Section 1: The Washington Constitution ───────────────────────────
    {
      slug: "wa-constitution",
      title: "1 · Washington's Constitution of 1889 and its direct democracy",
      section: "The Washington Constitution",
      body: `Washington governs under its original **Constitution of 1889**, adopted when Washington became the **42nd state on November 11, 1889** (Washington State Legislature, n.d.). It has been amended many times but never fully replaced.

Like several Western states shaped by the **Progressive Era**, Washington built **direct-democracy tools** into its constitution (added by amendment in 1912) and uses them heavily (Washington Secretary of State, n.d.):

- **Initiative** — citizens can gather signatures to make law directly. Washington has **two kinds**: an **Initiative to the People** (goes straight to the ballot) and an **Initiative to the Legislature** (goes to lawmakers first, who may enact it, reject it — sending it to voters — or offer an alternative).
- **Referendum** — voters can **reject** a law the Legislature passed by petitioning it onto the ballot.
- **Recall** — voters can petition to remove most elected officials for cause.

This is the through-line of Washington civics: **voters are a lawmaking body**, not just an electorate. That single design choice explains many of Washington's distinctive features.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Washington's own government (leg.wa.gov, sos.wa.gov, courts.wa.gov) is the authoritative source. When a fact is time-sensitive — especially Washington's contested tax structure — we say so.

**Check yourself.** When did Washington become a state, and what is the difference between an "Initiative to the People" and an "Initiative to the Legislature"?

## Sources
- Washington State Legislature. (n.d.). *Washington State Constitution (1889)*. leg.wa.gov. https://leg.wa.gov/
- Washington Secretary of State. (n.d.). *Initiatives and referenda*. sos.wa.gov. https://www.sos.wa.gov/`,
    },

    // ── Section 2: The plural executive ──────────────────────────────────
    {
      slug: "wa-executive",
      title: "2 · Washington's 'plural' executive — nine elected statewide officials",
      section: "The Three Branches",
      body: `Here is one of Washington's most distinctive features. Where many states elect only a Governor (and maybe one or two others), Washington voters elect a **large, 'plural' executive** — **nine separate statewide officials**, each on their own ballot line (Washington Secretary of State, n.d.):

1. **Governor** — chief executive.
2. **Lieutenant Governor** — presides over the Senate; elected **separately** (can be from a different party than the Governor).
3. **Secretary of State** — runs elections and corporations.
4. **Attorney General** — the state's lawyer.
5. **State Treasurer** — manages state funds.
6. **State Auditor** — audits government.
7. **Superintendent of Public Instruction** — leads K–12 education; this office is **nonpartisan.**
8. **Commissioner of Public Lands** — manages state lands and forests (a distinctively Western office).
9. **Insurance Commissioner** — regulates insurance.

Why it matters: executive power in Washington is **divided among many independently elected officials**, not concentrated in one governor's appointees. Voters — not the Governor — pick the Attorney General, the elections chief, the schools chief, and more, so these officials answer directly to the public and can check one another.

The **Judicial** branch runs from trial courts up to the **Court of Appeals** and the **Washington Supreme Court** (nine justices) — covered next. The **Legislative** branch is the Legislature, covered after that.

**Check yourself.** Name three statewide executive officials Washington voters elect besides the Governor.

## Sources
- Washington Secretary of State. (n.d.). *Statewide elected officials*. sos.wa.gov. https://www.sos.wa.gov/
- Washington State Legislature. (n.d.). *Washington State Constitution, Article III (The Executive)*. leg.wa.gov. https://leg.wa.gov/`,
    },

    // ── Section 3: Courts + Legislature ──────────────────────────────────
    {
      slug: "wa-courts-legislature",
      title: "3 · The courts and the Legislature",
      section: "The Three Branches",
      body: `**Judicial — the Washington courts.** Washington's judges are **elected by the voters on a NONPARTISAN ballot** — no party label appears next to their names (Washington Courts, n.d.):
- The **Washington Supreme Court** has **nine justices**, elected statewide to **6-year terms.**
- **Court of Appeals** and **Superior Court** judges are likewise elected on nonpartisan ballots.
- When a seat opens mid-term, the **Governor appoints** an interim judge who must then stand for election.

**Legislative — the Washington State Legislature.** A part-time "citizen legislature" that meets in **Olympia** (Washington State Legislature, n.d.):
- **Senate — 49 senators**, elected to **4-year terms.**
- **House of Representatives — 98 representatives**, elected to **2-year terms.**
- Washington has **49 legislative districts**, and here's a twist it shares with Arizona: **each district elects ONE senator and TWO representatives.** So your senator and your two House members all represent the *same* district.
- Washington has **no legislative term limits** — a 1992 voter-passed limit was struck down by the state Supreme Court as unconstitutional.

**Veto and override.** The Governor may veto bills and, notably, use a **line-item veto** on parts of bills (broad in Washington). An override requires a **two-thirds vote of each chamber.**

**Check yourself.** How many justices sit on the Washington Supreme Court, and how many representatives does each of the 49 districts elect?

## Sources
- Washington Courts. (n.d.). *Washington State court system and judicial elections*. courts.wa.gov. https://www.courts.wa.gov/
- Washington State Legislature. (n.d.). *About the Legislature; Constitution Article II*. leg.wa.gov. https://leg.wa.gov/`,
    },

    // ── Section 4: How a bill becomes law ────────────────────────────────
    {
      slug: "wa-bill-to-law",
      title: "4 · How a bill becomes a Washington law",
      section: "Making Law",
      body: `In Washington a law can be made **two ways** — through the Legislature, or directly by the voters.

**Path 1 — through the Legislature** (Washington State Legislature, n.d.):
1. **Introduction.** A legislator introduces a bill in the House or Senate.
2. **Committee.** It goes to committee for hearings, amendment, and a vote.
3. **Floor votes.** The full chamber votes; the bill then crosses to the **other chamber** and repeats.
4. **Reconciliation.** Differences are resolved (often in a conference committee).
5. **Governor.** The Governor may **sign**, **veto**, or **line-item veto** appropriations; a two-thirds vote of each chamber overrides.

**Path 2 — directly by the voters:**
- **Initiative to the People** — signatures put a proposed law straight on the ballot.
- **Initiative to the Legislature** — signatures send a proposed law to lawmakers first; if they don't enact it, it goes to the voters (sometimes alongside a legislative alternative).
- **Referendum** — voters can veto a statute the Legislature passed.

The takeaway: in Washington, **the Legislature is the usual road, but the voters have their own on-ramps** — a recurring theme of this course.

**Check yourself.** Name the two forms of initiative Washington voters can use, and say what makes them different.

## Sources
- Washington State Legislature. (n.d.). *How a bill becomes law*. leg.wa.gov. https://leg.wa.gov/
- Washington Secretary of State. (n.d.). *Initiatives to the People vs. to the Legislature*. sos.wa.gov. https://www.sos.wa.gov/`,
    },

    // ── Section 5: Elections — all-mail + top-two ────────────────────────
    {
      slug: "wa-elections",
      title: "5 · Elections: all-mail voting and the 'top-two' primary",
      section: "Elections",
      body: `Washington's elections have **two headline features** that set it apart from most states.

**1. All-mail (vote-by-mail) voting, statewide.** Washington is one of a small group of states that conducts **all elections by mail.** Every registered voter is **automatically mailed a ballot** for each election; there are **no traditional polling places** for most voters (Washington Secretary of State, n.d.):
- You can return your ballot **by mail (postage prepaid)** or drop it in an official **ballot drop box.**
- Washington also offers **same-day and automatic voter registration**, and ballots postmarked by Election Day count.

**2. The 'top-two' primary.** Washington uses a **top-two (nonpartisan) primary**: **all candidates for an office appear on ONE primary ballot regardless of party, and the two candidates with the most votes advance to the general election** — even if they belong to the **same** party (Washington Secretary of State, n.d.). Candidates may state a party they "prefer," but parties do not control who advances. (California later adopted a similar system; Washington's was upheld by the U.S. Supreme Court in 2008.)

⚠️ **Time-sensitive.** Registration deadlines, drop-box locations, and ballot-return rules are administered by county auditors and can change. Confirm the **current** rules and your ballot status at **sos.wa.gov** (or your county elections office) before each election.

**Check yourself.** How does a Washington voter receive their ballot, and how does the "top-two" primary decide who advances?

## Sources
- Washington Secretary of State. (n.d.). *Vote by mail; the top-two primary*. sos.wa.gov. https://www.sos.wa.gov/`,
    },

    // ── Section 6: Taxes, local government, getting involved ─────────────
    {
      slug: "wa-local-and-involved",
      title: "6 · Taxes, local government, and how to take part",
      section: "Get Involved",
      body: `**A distinctive tax structure (and a live legal question).** Washington has **no personal state income tax** — a long tradition rooted in the state constitution's **uniformity clause**, which courts have historically read to bar a graduated income tax (Washington State Legislature, n.d.). ⚠️ **Time-sensitive and contested:** the question periodically returns to court and the ballot. For example, Washington's **capital-gains tax** (enacted 2021) was challenged and **upheld by the state Supreme Court in 2023** as an excise tax, not an income tax. Because this area is actively litigated, **do not assume a fixed answer — check leg.wa.gov / sos.wa.gov for current law.** Washington instead leans on **sales tax and property tax.**

**Local government** (Washington State Legislature, n.d.):
- **39 counties**, each governed by an elected board (commissioners or, in **home-rule charter counties** like King, Pierce, and Snohomish, an elected council and executive).
- **Cities and towns** (many are **code cities** with broad home-rule powers) plus **special districts** (schools, ports, fire, water).
- Washington grants substantial **home rule** — charter counties and code cities set much of their own structure, in contrast to Dillon's Rule states like Virginia.

**How to take part:**
- **Vote — it's mailed to you.** Track your ballot at sos.wa.gov; return it by mail or drop box.
- **Use direct democracy.** Sign, circulate, or file **initiatives and referenda** — Washington's on-ramps are among the most open in the country.
- **Show up locally.** County councils, city councils, school boards, and port districts hold public meetings with comment time.
- **Contact your legislators** — you have one Senator and two Representatives from your district in Olympia.
- **Run** — school board, city council, port commission, and county offices are reachable local starting points.

**Check yourself.** Does Washington levy a personal state income tax, and why does this course say to VERIFY the current answer?

## Sources
- Washington State Legislature. (n.d.). *Washington tax structure; local government (counties, code cities)*. leg.wa.gov. https://leg.wa.gov/
- Washington Secretary of State. (n.d.). *Get involved: voting, initiatives, local offices*. sos.wa.gov. https://www.sos.wa.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "wa-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Washington state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Washington governs under its original Constitution of ___.",
            answer: "1889",
            explanation:
              "Washington adopted its constitution in 1889, the year it became the 42nd state.",
          },
          {
            prompt:
              "Washington voters elect ___ separate statewide executive officials (a 'plural' executive).",
            answer: "nine",
            accept: ["9"],
            explanation:
              "Governor, Lt. Governor, Secretary of State, Attorney General, Treasurer, Auditor, Superintendent of Public Instruction, Commissioner of Public Lands, and Insurance Commissioner — nine in all.",
          },
          {
            prompt:
              "Washington's Legislature has 49 senators and ___ representatives.",
            answer: "98",
            explanation:
              "Each of the 49 districts elects one senator and two representatives — 49 senators and 98 representatives.",
          },
          {
            prompt:
              "Washington conducts its elections almost entirely by ___ (every voter is sent a ballot).",
            answer: "mail",
            explanation:
              "Washington is an all-mail (vote-by-mail) state; ballots are mailed to every registered voter and returned by mail or drop box.",
          },
          {
            prompt:
              "In Washington's 'top-___' primary, the two leading candidates advance regardless of party.",
            answer: "two",
            accept: ["2"],
            explanation:
              "All candidates share one primary ballot; the top two advance to the general election even if they share a party.",
          },
          {
            prompt:
              "TRUE or FALSE: Washington levies a personal state income tax.",
            answer: "false",
            explanation:
              "False. Washington has no personal state income tax (its uniformity clause has barred a graduated one); it relies on sales and property taxes. This area is litigated — verify current law.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "wa-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which constitution governs Washington today?",
            options: [
              "The Constitution of 1889",
              "The Constitution of 1963",
              "The Constitution of 1912",
              "Washington uses the federal constitution only",
            ],
            correctIndex: 0,
            explanation:
              "Washington still governs under its original Constitution of 1889 (heavily amended).",
            sourceLessonSlug: "wa-constitution",
          },
          {
            prompt: "What is distinctive about Washington's executive branch?",
            options: [
              "The Governor appoints all other officials",
              "Voters elect nine separate statewide officials (a 'plural' executive)",
              "There is only one elected official statewide",
              "The Legislature chooses the Governor",
            ],
            correctIndex: 1,
            explanation:
              "Washington voters elect nine statewide executives independently, dividing executive power widely.",
            sourceLessonSlug: "wa-executive",
          },
          {
            prompt: "Which office in Washington's executive is nonpartisan?",
            options: [
              "Attorney General",
              "Governor",
              "Superintendent of Public Instruction",
              "State Treasurer",
            ],
            correctIndex: 2,
            explanation:
              "The Superintendent of Public Instruction (leading K–12 education) is elected on a nonpartisan basis.",
            sourceLessonSlug: "wa-executive",
          },
          {
            prompt: "How are Washington Supreme Court justices chosen?",
            options: [
              "Appointed for life by the Governor",
              "Elected by voters on a nonpartisan ballot to 6-year terms",
              "Elected by the Legislature",
              "Chosen by a citizens' commission",
            ],
            correctIndex: 1,
            explanation:
              "Washington's nine justices are elected statewide on a nonpartisan ballot to 6-year terms.",
            sourceLessonSlug: "wa-courts-legislature",
          },
          {
            prompt: "How are Washington's 49 legislative districts represented?",
            options: [
              "Each elects two senators and one representative",
              "Each elects one senator and two representatives",
              "Senators are statewide; representatives by district",
              "Each elects three senators",
            ],
            correctIndex: 1,
            explanation:
              "Like Arizona, each of Washington's 49 districts elects one senator and two representatives — 49 senators, 98 representatives.",
            sourceLessonSlug: "wa-courts-legislature",
          },
          {
            prompt: "Besides passing a bill through the Legislature, how else can a law be made in Washington?",
            options: [
              "By the Governor alone",
              "By voters directly, through initiative and referendum",
              "By a single county",
              "By the state Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "Washington voters can use an Initiative to the People, an Initiative to the Legislature, or a referendum.",
            sourceLessonSlug: "wa-bill-to-law",
          },
          {
            prompt: "How does most voting happen in Washington?",
            options: [
              "In person at polling places only",
              "Entirely by mail — a ballot is sent to every registered voter",
              "Online through a state website",
              "By telephone",
            ],
            correctIndex: 1,
            explanation:
              "Washington is an all-mail state: every voter receives a ballot to return by mail or drop box.",
            sourceLessonSlug: "wa-elections",
          },
          {
            prompt: "How does Washington's 'top-two' primary work?",
            options: [
              "Each party's top candidate advances",
              "The two candidates with the most votes advance, even if from the same party",
              "Only the incumbent advances",
              "The Governor selects the finalists",
            ],
            correctIndex: 1,
            explanation:
              "All candidates share one primary ballot; the two highest vote-getters advance regardless of party.",
            sourceLessonSlug: "wa-elections",
          },
          {
            prompt: "What is true about Washington's personal state income tax?",
            options: [
              "It has a high graduated income tax",
              "It has no personal state income tax; it relies on sales and property taxes (and the issue is litigated)",
              "Only counties levy income tax",
              "The income tax funds all schools",
            ],
            correctIndex: 1,
            explanation:
              "Washington has no personal income tax; its uniformity clause has barred a graduated one, and related questions (e.g., the 2021 capital-gains tax) are actively litigated.",
            sourceLessonSlug: "wa-local-and-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Washington's tax and voting rules?",
            options: [
              "Because Washington has no official website",
              "Because tax questions are actively litigated and election rules are set locally and change — confirm at leg.wa.gov / sos.wa.gov",
              "Because only Congress sets them",
              "Because the rules are secret",
            ],
            correctIndex: 1,
            explanation:
              "Washington's tax structure is in active litigation and county auditors run elections, so the current, authoritative source is the state's own sites.",
            sourceLessonSlug: "wa-local-and-involved",
          },
        ],
      },
    },
  ],
};
