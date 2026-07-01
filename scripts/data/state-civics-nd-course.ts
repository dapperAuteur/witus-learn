// Authored "North Dakota Civics: How Your State Government Works" — the North Dakota
// entry in the per-state Civics layer on Learn.WitUS. State-level companion to the
// general Civics courses: those teach the SYSTEM; this teaches North Dakota's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to NORTH DAKOTA'S OWN OFFICIAL SOURCES: the Legislative
// Assembly (ndlegis.gov), the Secretary of State / elections (sos.nd.gov), the Courts
// (ndcourts.gov), and the North Dakota Constitution (1889).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voter ID) are flagged and point learners to sos.nd.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_ND_COURSE: AuthoredCourse = {
  title: "North Dakota Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of North Dakota governs itself — and how you take part where you live. North Dakota does two things no other state does: it is the ONLY state with NO voter registration (eligible residents just show up with ID and vote), and it runs the ONLY state-owned bank in the nation (the Bank of North Dakota) plus a state-owned mill — legacies of its farmer-populist Nonpartisan League. You'll learn North Dakota's Constitution of 1889, its strong direct democracy, its large plural executive, its Legislative Assembly of 47 senators and 94 representatives that meets only every other year, its elected judiciary, and its 53 counties. Time-sensitive facts are flagged, pointing to sos.nd.gov. Cited to North Dakota's own official sources (ndlegis.gov, sos.nd.gov, ndcourts.gov).",
  lessons: [
    // ── Section 1: No voter registration ─────────────────────────────────
    {
      slug: "nd-no-registration",
      title: "1 · The only state with no voter registration",
      section: "What Makes North Dakota Unique",
      body: `North Dakota's most distinctive civic feature is one word long: **none.** North Dakota is the **ONLY state in the nation with NO voter registration** (North Dakota Secretary of State, n.d.).

**What that means.** In all 49 other states, you must **register** before you can vote — filling out a form, meeting a deadline, getting on the rolls. In North Dakota, **there is no registration step at all.** An eligible resident simply **shows up at the polls (or votes absentee) with acceptable ID proving identity and residence, and votes** (North Dakota Secretary of State, n.d.). North Dakota abolished voter registration in **1951**, relying instead on **small communities, poll workers who often know their neighbors, and an ID requirement** to confirm eligibility.

Why it matters: it removes the single most common barrier to voting — the registration deadline — and reflects North Dakota's small-town, high-trust civic culture. ⚠️ **Time-sensitive:** because there's no registration, the **voter-ID rules** (what documents prove your identity and residence) do the work of confirming eligibility, and those rules have been **litigated and adjusted** — so confirm the **current** ID requirements at **sos.nd.gov** before you vote.

North Dakota governs under its **Constitution of 1889**, adopted as it became a state on **November 2, 1889** (admitted the same day as South Dakota).

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but North Dakota's own government (ndlegis.gov, sos.nd.gov, ndcourts.gov) is the authoritative source.

**Check yourself.** What does North Dakota NOT require that every other state does, and what confirms a voter's eligibility instead?

## Sources
- North Dakota Secretary of State. (n.d.). *No voter registration in North Dakota; voter ID*. sos.nd.gov. https://www.sos.nd.gov/
- North Dakota Legislative Assembly. (n.d.). *North Dakota Constitution (1889)*. ndlegis.gov. https://www.ndlegis.gov/`,
    },

    // ── Section 2: The state-owned bank and mill ─────────────────────────
    {
      slug: "nd-state-bank",
      title: "2 · The only state-owned bank (and a state-owned mill)",
      section: "What Makes North Dakota Unique",
      body: `North Dakota's second national "only": it **owns and operates the only state-owned bank in the United States** — the **Bank of North Dakota** — plus a **state-owned flour mill and grain elevator** (North Dakota Legislative Assembly, n.d.).

**Where these came from.** In the 1910s, North Dakota farmers, frustrated by out-of-state banks, railroads, and grain dealers, built a powerful farmer-populist movement — the **Nonpartisan League (NPL)** — that swept state government. In **1919**, they created two enterprises still running today (North Dakota Legislative Assembly, n.d.):
- The **Bank of North Dakota** — a **state-owned bank** that holds state deposits, partners with local banks, and finances farming, students, and economic development. It is the **only bank of its kind in the country.**
- The **North Dakota Mill and Elevator** — a **state-owned** flour mill, giving farmers a state-run buyer and processor for their wheat.

Why it matters: North Dakota decided that certain **economic functions should be run by the public**, through **elected accountability**, rather than left entirely to private markets — a distinctive answer to "what is government for?" The NPL legacy also gave North Dakota **strong direct-democracy tools** (next lessons). ⚠️ These institutions evolve; confirm current roles at the state's sites.

**Check yourself.** What two public enterprises did North Dakota's Nonpartisan League create in 1919, and why?

## Sources
- North Dakota Legislative Assembly. (n.d.). *The Bank of North Dakota and the North Dakota Mill and Elevator; the Nonpartisan League*. ndlegis.gov. https://www.ndlegis.gov/
- Bank of North Dakota. (n.d.). *About BND: the nation's only state-owned bank*. bnd.nd.gov. https://bnd.nd.gov/`,
    },

    // ── Section 3: Direct democracy + the executive ──────────────────────
    {
      slug: "nd-direct-democracy-executive",
      title: "3 · Strong direct democracy and a large plural executive",
      section: "The Three Branches",
      body: `**Strong direct democracy.** The same populist movement gave North Dakotans **robust citizen tools** (North Dakota Secretary of State, n.d.):
- **Initiative** — citizens gather signatures to put a **statute OR a constitutional amendment** directly on the ballot. North Dakota's signature thresholds are comparatively **low**, so measures reach the ballot regularly.
- **Referendum** — voters can **reject** a law the Legislature passed.
- **Recall** — voters can remove elected officials (North Dakota famously **recalled its governor in 1921**, an early use).

**A large plural executive.** North Dakota voters elect **many** statewide officials — one of the larger plural executives in the country (North Dakota Secretary of State, n.d.): the **Governor** and **Lieutenant Governor** (joint ticket), plus the **Secretary of State**, **Attorney General**, **State Treasurer**, **State Auditor**, **Agriculture Commissioner**, **Insurance Commissioner**, **Tax Commissioner**, the three-member **Public Service Commission**, and the **Superintendent of Public Instruction.** Executive power is spread widely across independently elected officials.

The **Legislative** and **Judicial** branches complete the three (next lesson).

**Check yourself.** Name the three direct-democracy tools North Dakotans have, and describe how big North Dakota's elected executive is.

## Sources
- North Dakota Secretary of State. (n.d.). *Initiative, referendum, recall; statewide elected officials*. sos.nd.gov. https://www.sos.nd.gov/`,
    },

    // ── Section 4: The part-time legislature + courts + lawmaking ────────
    {
      slug: "nd-legislature-courts",
      title: "4 · A Legislature that meets every other year, and the courts",
      section: "Making Law",
      body: `**Legislative — the North Dakota Legislative Assembly.** A distinctive **part-time, biennial** body meeting in Bismarck (North Dakota Legislative Assembly, n.d.):
- **House of Representatives — 94 members**, and **Senate — 47 senators**, serving **4-year terms.**
- ⚠️ **It meets only every OTHER year.** North Dakota's Legislature holds a regular session in **odd-numbered years**, limited to **80 days per two-year period (biennium)** — so lawmakers are **citizen legislators** who spend most of their time in their regular jobs. (Between sessions, interim committees do much of the work.)

**How a bill becomes law:**
1. **Introduction** in the House or Senate during the biennial session; **committee** hearings (every bill gets a hearing); **floor votes** in both chambers.
2. **Governor** — sign, veto (a **two-thirds** override), or line-item veto appropriations.
Remember the citizen backstop: if the people dislike a law, they can **refer it to a vote** (referendum), and they can **initiate** their own laws.

**Judicial — the North Dakota courts.** District courts and the **North Dakota Supreme Court** (5 justices). North Dakota **elects** its judges on a **nonpartisan** ballot to **10-year terms** (Supreme Court); vacancies may be filled by gubernatorial appointment from a nominating-committee list, after which the judge stands for election (North Dakota Courts, n.d.).

**Check yourself.** How often does North Dakota's Legislature meet, and how are its Supreme Court justices chosen?

## Sources
- North Dakota Legislative Assembly. (n.d.). *The biennial Legislative Assembly; how a bill becomes law*. ndlegis.gov. https://www.ndlegis.gov/
- North Dakota Courts. (n.d.). *Judicial selection and the Supreme Court*. ndcourts.gov. https://www.ndcourts.gov/`,
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "nd-local-involved",
      title: "5 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government.** North Dakota's local layers include (North Dakota Legislative Assembly, n.d.):
- **53 counties**, governed by elected **county commissions**, plus separately elected officials (sheriff, auditor, treasurer, state's attorney).
- **Cities and townships** — North Dakota keeps active **townships** in rural areas alongside incorporated **cities.**
- **School districts** and **special districts** round out local government.

**Voting.** ⚠️ **Time-sensitive:** remember North Dakota has **no voter registration** (Lesson 1) — you just show up with **acceptable ID** proving identity and North Dakota residence, and vote (early in-person and absentee options are available). Because the **ID rules are what confirm eligibility**, and they have been litigated and adjusted, confirm the **current** acceptable-ID list at **sos.nd.gov** or your county auditor before you vote.

**How to take part:**
- **Just show up and vote** — no registration; bring valid ID. Use early or absentee voting if it fits.
- **Use direct democracy.** North Dakota's **low initiative thresholds** mean citizen measures are a real, frequent tool — sign, circulate, or organize an initiative or referendum.
- **Show up locally.** County commissions, city councils, township meetings, and school boards hold public meetings.
- **Contact your legislators** in Bismarck — you have one Representative-district team and one Senator; note the Legislature meets mainly in odd years.
- **Run** — school board, township board, city council, and county commission are reachable local starting points.

**Check yourself.** What do you bring to vote in North Dakota (since there's no registration), and why are citizen initiatives especially common here?

## Sources
- North Dakota Legislative Assembly. (n.d.). *Local government: counties, cities, townships*. ndlegis.gov. https://www.ndlegis.gov/
- North Dakota Secretary of State. (n.d.). *Voting without registration; voter ID; initiatives*. sos.nd.gov. https://www.sos.nd.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "nd-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about North Dakota state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "North Dakota is the only state with NO voter ___ — eligible residents just show up with ID and vote.",
            answer: "registration",
            explanation:
              "North Dakota abolished voter registration in 1951; acceptable ID proving identity and residence confirms eligibility instead.",
          },
          {
            prompt:
              "North Dakota runs the only state-owned ___ in the nation (created in 1919).",
            answer: "bank",
            explanation:
              "The Bank of North Dakota, created by the Nonpartisan League in 1919, is the only state-owned bank in the U.S.",
          },
          {
            prompt:
              "The farmer-populist movement behind North Dakota's public enterprises was the Nonpartisan ___.",
            answer: "League",
            accept: ["league"],
            explanation:
              "The Nonpartisan League (NPL) created the Bank of North Dakota and the state Mill and Elevator and expanded direct democracy.",
          },
          {
            prompt:
              "North Dakota's Legislature meets only every ___ year (a biennial session in odd years).",
            answer: "other",
            accept: ["two years", "second"],
            explanation:
              "The Legislative Assembly meets in odd years, limited to 80 days per two-year biennium — a citizen legislature.",
          },
          {
            prompt:
              "North Dakota's current constitution is the Constitution of ___.",
            answer: "1889",
            explanation:
              "North Dakota adopted its constitution in 1889, becoming a state that year alongside South Dakota.",
          },
          {
            prompt:
              "TRUE or FALSE: North Dakota requires voters to register before an election.",
            answer: "false",
            explanation:
              "False. North Dakota is the only state with no voter registration; voters simply bring acceptable ID.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "nd-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is unique about voting in North Dakota?",
            options: [
              "Voting is mandatory",
              "It is the only state with no voter registration — eligible residents just bring ID and vote",
              "Only landowners may vote",
              "Voting is done by the Legislature",
            ],
            correctIndex: 1,
            explanation:
              "North Dakota abolished voter registration in 1951; ID confirms eligibility at the polls.",
            sourceLessonSlug: "nd-no-registration",
          },
          {
            prompt: "Since there's no registration, what confirms a North Dakota voter's eligibility?",
            options: [
              "A party membership card",
              "Acceptable ID proving identity and North Dakota residence",
              "A letter from the Governor",
              "Nothing is required",
            ],
            correctIndex: 1,
            explanation:
              "Voter-ID rules do the work of confirming eligibility, which is why those rules matter (and are litigated).",
            sourceLessonSlug: "nd-no-registration",
          },
          {
            prompt: "What national 'only' does North Dakota's government own and operate?",
            options: [
              "The only state airline",
              "The only state-owned bank (the Bank of North Dakota), plus a state-owned mill",
              "The only state-owned oil company",
              "The only state casino",
            ],
            correctIndex: 1,
            explanation:
              "The Bank of North Dakota (1919) is the only state-owned bank in the U.S.; the state also owns a flour mill and elevator.",
            sourceLessonSlug: "nd-state-bank",
          },
          {
            prompt: "Which movement created North Dakota's state bank and mill?",
            options: [
              "The Tea Party",
              "The Nonpartisan League (a farmer-populist movement)",
              "The Progressive Party of Vermont",
              "The DFL",
            ],
            correctIndex: 1,
            explanation:
              "The farmer-populist Nonpartisan League swept North Dakota government and created these public enterprises in 1919.",
            sourceLessonSlug: "nd-state-bank",
          },
          {
            prompt: "What direct-democracy tools do North Dakotans have?",
            options: [
              "None",
              "Initiative (statutes and amendments), referendum, and recall — with comparatively low thresholds",
              "Only recall of judges",
              "Only advisory votes",
            ],
            correctIndex: 1,
            explanation:
              "North Dakota has strong initiative, referendum, and recall powers, a legacy of its populist movement.",
            sourceLessonSlug: "nd-direct-democracy-executive",
          },
          {
            prompt: "How often does North Dakota's Legislative Assembly meet?",
            options: [
              "Year-round",
              "Only every other year (odd years), limited to 80 days per biennium",
              "Once a decade",
              "Only when the Governor calls it",
            ],
            correctIndex: 1,
            explanation:
              "North Dakota's citizen legislature meets biennially in odd years, capped at 80 days per two-year period.",
            sourceLessonSlug: "nd-legislature-courts",
          },
          {
            prompt: "How are North Dakota's Supreme Court justices chosen?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot to 10-year terms (vacancies may be filled by appointment, then election)",
              "Elected by the Legislature",
              "Chosen by the Bank of North Dakota",
            ],
            correctIndex: 1,
            explanation:
              "North Dakota elects its 5 justices nonpartisan to 10-year terms, with appointment to fill vacancies.",
            sourceLessonSlug: "nd-legislature-courts",
          },
          {
            prompt: "How many members are in the North Dakota House and Senate?",
            options: [
              "94 House / 47 Senate",
              "100 House / 40 Senate",
              "150 House / 30 Senate",
              "203 House / 50 Senate",
            ],
            correctIndex: 0,
            explanation:
              "North Dakota has 94 representatives and 47 senators, all serving 4-year terms.",
            sourceLessonSlug: "nd-legislature-courts",
          },
          {
            prompt: "Why are citizen initiatives especially common in North Dakota?",
            options: [
              "They are required by Congress",
              "North Dakota's initiative signature thresholds are comparatively low, so measures reach the ballot regularly",
              "The Governor writes them",
              "Only judges can file them",
            ],
            correctIndex: 1,
            explanation:
              "Low signature thresholds — a populist legacy — make North Dakota's initiative a frequently used tool.",
            sourceLessonSlug: "nd-direct-democracy-executive",
          },
          {
            prompt: "Why does this course tell you to VERIFY North Dakota's voter-ID rules?",
            options: [
              "Because North Dakota has no elections office",
              "Because with no registration, ID rules confirm eligibility and they have been litigated and adjusted — confirm at sos.nd.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Since ID does the work registration does elsewhere, North Dakota's evolving ID rules are the key thing to verify at sos.nd.gov.",
            sourceLessonSlug: "nd-local-involved",
          },
        ],
      },
    },
  ],
};
