// Authored "Maine Civics: How Your State Government Works" — the Maine entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Maine's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to MAINE'S OWN OFFICIAL SOURCES: the Legislature
// (legislature.maine.gov), the Secretary of State / elections (maine.gov/sos), the
// Judicial Branch (courts.maine.gov), and the Maine Constitution (1820).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Maine was the
// first state to adopt ranked-choice voting, and the exact offices it applies to depend
// on a constitutional nuance. Time-sensitive items are flagged and point learners to
// maine.gov/sos.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_ME_COURSE: AuthoredCourse = {
  title: "Maine Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Maine governs itself — and how you take part where you live. You'll learn Maine's Constitution of 1820 (when Maine separated from Massachusetts); why the Governor is the ONLY official Mainers elect statewide, while the Attorney General, Secretary of State, and Treasurer are chosen BY THE LEGISLATURE; that Maine was the FIRST state to adopt ranked-choice voting; its strong direct democracy (the citizen initiative and the 'people's veto'); how Maine appoints (not elects) its judges; and its New England traditions of town meeting and 16 counties. It also notes that Maine, with Nebraska, splits its presidential electoral votes by district. Time-sensitive facts are flagged, pointing to maine.gov/sos. Cited to Maine's own official sources (legislature.maine.gov, maine.gov/sos, courts.maine.gov).",
  lessons: [
    // ── Section 1: The Constitution + Maine's break from Massachusetts ───
    {
      slug: "me-constitution",
      title: "1 · Maine's Constitution of 1820 (and its split from Massachusetts)",
      section: "The Maine Constitution",
      body: `Maine governs under its **Constitution of 1820** — and that date tells a story. Until 1820, **Maine was part of Massachusetts** (the "District of Maine"). Maine separated and was admitted as the **23rd state on March 15, 1820**, as part of the **Missouri Compromise** (Maine entered as a free state, balancing Missouri as a slave state) (Maine Legislature, n.d.).

Because of that heritage, Maine shares some **New England traditions** with Massachusetts — most visibly the **town meeting** (covered later). But Maine wrote its own constitution and built several distinctive features this course highlights:
- The **Governor is the only official elected statewide** — Maine has **no Lieutenant Governor**, and its Attorney General, Secretary of State, and Treasurer are chosen **by the Legislature.**
- Maine was the **first state to adopt ranked-choice voting.**
- Maine keeps strong **direct democracy** — the citizen initiative and the "people's veto."

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Maine's own government (legislature.maine.gov, maine.gov/sos, courts.maine.gov) is the authoritative source. When something is time-sensitive — like exactly which elections use ranked-choice voting — we say so.

**Check yourself.** What state was Maine part of before 1820, and what national compromise accompanied its statehood?

## Sources
- Maine Legislature. (n.d.). *Constitution of the State of Maine (1820); Maine statehood*. legislature.maine.gov. https://legislature.maine.gov/
- Maine Secretary of State. (n.d.). *Maine government and history*. maine.gov/sos. https://www.maine.gov/sos/`,
    },

    // ── Section 2: The executive — one elected official ──────────────────
    {
      slug: "me-executive",
      title: "2 · Maine's executive: the Governor is the only statewide-elected official",
      section: "The Three Branches",
      body: `Here is a Maine surprise: **the Governor is the ONLY executive official Mainers elect statewide** (Maine Legislature, n.d.).

**No Lieutenant Governor.** Maine has **no Lieutenant Governor.** If the governorship becomes vacant, the **President of the Senate** is next in line — so, as in Tennessee, a legislative leader stands in the succession.

**Officers chosen by the Legislature.** Three key statewide officers are **elected by the Legislature**, not by the voters (Maine Legislature, n.d.):
- **Attorney General** — Maine is one of only a **handful of states where the Legislature elects the Attorney General.**
- **Secretary of State** — who oversees elections.
- **State Treasurer.**
- (The **State Auditor** is likewise chosen by the Legislature.)

So Maine concentrates statewide **elected** authority in the single office of Governor, while routing the other constitutional offices through the **Legislature's** choice. The Governor serves a **4-year term**, limited to **two consecutive terms.**

The **Judicial** branch (appointed, covered later) and the **Legislative** branch round out the three. This "Governor is the only one voters pick" design is a genuine Maine distinctive — keep it in mind alongside Tennessee, which shares the pattern.

**Check yourself.** Which statewide executive officials do Maine voters elect, and who chooses the Attorney General, Secretary of State, and Treasurer?

## Sources
- Maine Legislature. (n.d.). *Constitutional officers; election of the Attorney General, Secretary of State, and Treasurer by the Legislature*. legislature.maine.gov. https://legislature.maine.gov/
- Maine Secretary of State. (n.d.). *About the office; statewide officers*. maine.gov/sos. https://www.maine.gov/sos/`,
    },

    // ── Section 3: Ranked-choice voting ──────────────────────────────────
    {
      slug: "me-ranked-choice",
      title: "3 · Ranked-choice voting: Maine went first",
      section: "Elections",
      body: `Maine made national history in elections: it was the **FIRST state to adopt ranked-choice voting (RCV)** statewide, approved by citizen **initiative in 2016** (Maine Secretary of State, n.d.).

**How ranked-choice voting works.** Instead of picking just one candidate, voters **rank the candidates in order of preference** (1st, 2nd, 3rd…). Then (Maine Secretary of State, n.d.):
- If a candidate wins an outright **majority of first choices**, they win.
- If **no one** has a majority, the **last-place candidate is eliminated**, and each of their ballots transfers to that voter's **next choice.**
- The count repeats, round by round, until a candidate has a **majority.**

The idea is to ensure winners have **broad support** and to let voters back a favorite without "spoiling" the race.

**⚠️ An important Maine nuance — which elections use RCV.** Maine's own constitution requires that **some** state general elections (Governor and the state Legislature) be decided by a simple **plurality** (whoever gets the most votes). Because of that, Maine uses ranked-choice voting for (Maine Secretary of State, n.d.):
- **All primary elections** (state and federal), and
- **Federal general elections** (U.S. House, U.S. Senate, and — for president — its electors),
- **but NOT the general election for Governor or state legislature**, which remain plurality unless the constitution is amended.

This split is exactly the kind of time-sensitive, easy-to-get-wrong detail to **confirm at maine.gov/sos** rather than assume.

**Check yourself.** In ranked-choice voting, what happens if no candidate has a majority of first choices — and which Maine general elections do NOT use RCV?

## Sources
- Maine Secretary of State. (n.d.). *Ranked-choice voting in Maine*. maine.gov/sos. https://www.maine.gov/sos/
- Maine Legislature. (n.d.). *Constitutional plurality requirement for state general elections*. legislature.maine.gov. https://legislature.maine.gov/`,
    },

    // ── Section 4: Direct democracy + how a bill becomes law ─────────────
    {
      slug: "me-bill-and-initiative",
      title: "4 · How a bill becomes law — plus the initiative and 'people's veto'",
      section: "Making Law",
      body: `Maine makes law **two ways** — through the Legislature, or directly by the voters.

**Path 1 — the Legislature.** Maine's **Legislature** is a part-time "citizen legislature" (Maine Legislature, n.d.):
- **House of Representatives — 151 members**, and **Senate — 35 members**, serving **2-year terms** with a **term limit of four consecutive terms (8 years)** per chamber.
- A bill is introduced, reviewed in **joint standing committees** (shared by both chambers), passed by both chambers, and sent to the **Governor**, who may sign, veto (a **two-thirds** override), or let it become law.

**Path 2 — the voters** (Maine Secretary of State, n.d.):
- **Direct initiative.** Maine citizens can gather signatures to propose a **law**, which — after the Legislature has a chance to act — goes to the **voters** on the ballot. (Maine's initiative is often described as "indirect" because the Legislature gets a look first, and may enact it or offer a competing measure.)
- **People's veto (referendum).** Maine citizens can gather signatures to **suspend a law the Legislature just passed and send it to the voters** to accept or reject — a direct citizen check on the Legislature, named the "people's veto."

Maine has used both tools often — including to adopt ranked-choice voting itself. The takeaway: in Maine, **the Legislature is the usual road, but citizens can both start laws and veto them.**

**Check yourself.** What is Maine's "people's veto," and how is it different from the citizen initiative?

## Sources
- Maine Legislature. (n.d.). *How a bill becomes law; the Legislature*. legislature.maine.gov. https://legislature.maine.gov/
- Maine Secretary of State. (n.d.). *Citizen initiative and people's veto*. maine.gov/sos. https://www.maine.gov/sos/`,
    },

    // ── Section 5: Courts, local government, split electoral votes ────────
    {
      slug: "me-courts-local",
      title: "5 · Appointed judges, town meetings, and split electoral votes",
      section: "Local Government & Courts",
      body: `**How Maine picks its judges — appointment, not election.** Maine does **not** elect its judges. The **Governor nominates** judges, the **Legislature confirms** them, and they serve fixed **7-year terms** (renewable by reappointment) (Maine Judicial Branch, n.d.). Maine's highest court is the **Supreme Judicial Court**, which when hearing appeals is called the **"Law Court."** Keeping judges appointed (and out of campaigns) is the New England pattern Maine shares with Massachusetts.

**Local government — towns, town meetings, and 16 counties** (Maine Legislature, n.d.):
- Maine is a **town-based** state. Many communities still govern by **open town meeting**, where **any registered voter can attend, speak, and vote** on the town budget and ordinances — direct democracy at the local level.
- Maine has **16 counties**, which handle courts, jails, sheriffs, and registries, but the **town or city** is the center of daily local government.
- Much of Maine's north woods lies in **"unorganized territory"** with no local municipal government — there, **the state (and county) provides services** directly, a distinctive feature of a large, rural state.

**Splitting presidential electoral votes.** Like **Nebraska**, Maine **splits its presidential electoral votes by congressional district**: two electors go to the statewide winner and **one to the winner of each of Maine's two congressional districts** — so Maine's electors can divide between candidates (Maine Secretary of State, n.d.).

**Check yourself.** How are Maine's judges chosen, and how does Maine award its presidential electoral votes?

## Sources
- Maine Judicial Branch. (n.d.). *The Maine courts; judicial appointment and the Law Court*. courts.maine.gov. https://www.courts.maine.gov/
- Maine Secretary of State. (n.d.). *Counties, unorganized territory, and presidential electors*. maine.gov/sos. https://www.maine.gov/sos/`,
    },

    // ── Section 6: Getting involved ──────────────────────────────────────
    {
      slug: "me-get-involved",
      title: "6 · How to take part where you live",
      section: "Get Involved",
      body: `Maine gives ordinary people unusually direct levers. Concrete ways to take part (Maine Secretary of State, n.d.):

- **Register and vote — and rank.** Maine offers **same-day (Election-Day) registration** and, in the elections that use it, lets you **rank candidates** in order of preference. ⚠️ Because which elections use ranked-choice voting depends on the constitutional nuance from Lesson 3, and because deadlines change, confirm the **current** rules at **maine.gov/sos**.
- **Go to town meeting.** If your town holds open town meeting, **show up and vote** directly on the budget and local ordinances — few states offer this.
- **Use direct democracy.** Sign or circulate a **citizen initiative** to propose a law, or a **people's veto** petition to challenge one the Legislature passed.
- **Contact your legislators** — you have one Representative and one Senator in Augusta; Maine's citizen legislature is famously accessible.
- **Run** — select board, school board, town/city council, and county offices are reachable local starting points.

**The habit to build:** pick **one** measure — a town-meeting article, a statewide question, or a bill in Augusta — and follow it start to finish. Maine's direct-democracy tools mean your follow-through can actually change an outcome.

**Check yourself.** Name two direct-democracy actions a Maine citizen can take, and one thing to verify before you vote.

## Sources
- Maine Secretary of State. (n.d.). *Registering and voting in Maine; same-day registration; ranked-choice voting*. maine.gov/sos. https://www.maine.gov/sos/
- Maine Legislature. (n.d.). *Find your legislator; initiative and people's veto*. legislature.maine.gov. https://legislature.maine.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "me-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Maine state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Before 1820, Maine was part of the state of ___.",
            answer: "Massachusetts",
            accept: ["massachusetts"],
            explanation:
              "Maine was the 'District of Maine' within Massachusetts until it became the 23rd state in 1820 under the Missouri Compromise.",
          },
          {
            prompt:
              "In Maine, the only official elected statewide is the ___.",
            answer: "Governor",
            accept: ["governor"],
            explanation:
              "Maine has no Lieutenant Governor; the Attorney General, Secretary of State, and Treasurer are chosen by the Legislature.",
          },
          {
            prompt:
              "Maine was the FIRST state to adopt ranked-___ voting (approved by initiative in 2016).",
            answer: "choice",
            explanation:
              "Ranked-choice voting lets voters rank candidates; if no one has a majority, last place is eliminated and votes transfer until someone wins a majority.",
          },
          {
            prompt:
              "Maine's citizen tool to suspend and reject a law the Legislature just passed is called the people's ___.",
            answer: "veto",
            explanation:
              "The people's veto (a referendum) lets citizens petition to send a newly passed law to the voters to accept or reject.",
          },
          {
            prompt:
              "Like Nebraska, Maine splits its presidential ___ votes by congressional district.",
            answer: "electoral",
            accept: ["electoral college", "Electoral College"],
            explanation:
              "Two electors go to the statewide winner and one to each of Maine's two districts, so its electors can divide between candidates.",
          },
          {
            prompt:
              "TRUE or FALSE: Maine elects its judges in partisan elections.",
            answer: "false",
            explanation:
              "False. Maine's Governor nominates judges and the Legislature confirms them for 7-year terms — judges are appointed, not elected.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "me-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What was Maine before it became a state in 1820?",
            options: [
              "A separate country",
              "Part of Massachusetts (the District of Maine)",
              "Part of Canada",
              "A territory of New York",
            ],
            correctIndex: 1,
            explanation:
              "Maine was part of Massachusetts until admitted as the 23rd state in 1820 under the Missouri Compromise.",
            sourceLessonSlug: "me-constitution",
          },
          {
            prompt: "Which statewide executive official do Maine voters elect?",
            options: [
              "The Attorney General",
              "Only the Governor",
              "The Secretary of State",
              "The Treasurer",
            ],
            correctIndex: 1,
            explanation:
              "The Governor is Maine's only statewide-elected official; the AG, Secretary of State, and Treasurer are elected by the Legislature.",
            sourceLessonSlug: "me-executive",
          },
          {
            prompt: "Who chooses Maine's Attorney General?",
            options: [
              "The voters",
              "The Governor alone",
              "The Legislature",
              "The Supreme Judicial Court",
            ],
            correctIndex: 2,
            explanation:
              "Maine is one of the few states where the Legislature elects the Attorney General (and the Secretary of State and Treasurer).",
            sourceLessonSlug: "me-executive",
          },
          {
            prompt: "What distinction does Maine hold in elections?",
            options: [
              "It banned voting by mail",
              "It was the first state to adopt ranked-choice voting (2016)",
              "It has no elections",
              "It requires unanimous votes",
            ],
            correctIndex: 1,
            explanation:
              "Maine was the first state to adopt ranked-choice voting, by citizen initiative in 2016.",
            sourceLessonSlug: "me-ranked-choice",
          },
          {
            prompt: "In ranked-choice voting, what happens if no candidate has a majority of first choices?",
            options: [
              "The election is voided",
              "The last-place candidate is eliminated and their ballots transfer to next choices, repeating until someone has a majority",
              "The Legislature picks the winner",
              "The oldest candidate wins",
            ],
            correctIndex: 1,
            explanation:
              "Ranked-choice voting eliminates the last-place candidate and transfers votes round by round until a candidate reaches a majority.",
            sourceLessonSlug: "me-ranked-choice",
          },
          {
            prompt: "Which Maine general elections do NOT use ranked-choice voting?",
            options: [
              "U.S. House and Senate",
              "The general election for Governor and state legislature (a constitutional plurality requirement)",
              "Primary elections",
              "Presidential electors",
            ],
            correctIndex: 1,
            explanation:
              "Maine's constitution requires plurality for state general elections (Governor, Legislature), so RCV applies to primaries and federal general elections, not those.",
            sourceLessonSlug: "me-ranked-choice",
          },
          {
            prompt: "What is Maine's 'people's veto'?",
            options: [
              "The Governor's veto power",
              "A citizen petition to suspend a newly passed law and send it to the voters to accept or reject",
              "A court's power to strike laws",
              "A federal override",
            ],
            correctIndex: 1,
            explanation:
              "The people's veto is a citizen referendum that can reject a law the Legislature just passed.",
            sourceLessonSlug: "me-bill-and-initiative",
          },
          {
            prompt: "How are Maine's judges chosen?",
            options: [
              "Elected in partisan races",
              "Nominated by the Governor and confirmed by the Legislature for 7-year terms",
              "Elected by the Legislature",
              "Chosen by a citizens' commission with no confirmation",
            ],
            correctIndex: 1,
            explanation:
              "Maine judges are appointed: the Governor nominates and the Legislature confirms them for renewable 7-year terms.",
            sourceLessonSlug: "me-courts-local",
          },
          {
            prompt: "How does Maine award its presidential electoral votes?",
            options: [
              "Winner-take-all",
              "By congressional district (with Nebraska) — two statewide, one per district",
              "By the Legislature",
              "It has none",
            ],
            correctIndex: 1,
            explanation:
              "Maine and Nebraska split electoral votes by district, so Maine's electors can divide between candidates.",
            sourceLessonSlug: "me-courts-local",
          },
          {
            prompt: "Why does this course tell you to VERIFY which Maine elections use ranked-choice voting?",
            options: [
              "Because Maine has no elections office",
              "Because a constitutional nuance limits RCV to primaries and federal general elections (not the governor/legislature general) and rules change — confirm at maine.gov/sos",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Maine's plurality requirement for state general elections makes the RCV scope easy to get wrong, so maine.gov/sos is the authoritative source.",
            sourceLessonSlug: "me-ranked-choice",
          },
        ],
      },
    },
  ],
};
