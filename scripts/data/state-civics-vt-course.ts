// Authored "Vermont Civics: How Your State Government Works" — the Vermont entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Vermont's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to VERMONT'S OWN OFFICIAL SOURCES: the Legislature
// (legislature.vermont.gov), the Secretary of State / elections (sos.vermont.gov), the
// Judiciary (vermontjudiciary.org), and the Vermont Constitution (1793).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules) are flagged and point learners to sos.vermont.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_VT_COURSE: AuthoredCourse = {
  title: "Vermont Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Vermont governs itself — and how you take part where you live. Vermont has deep small-d democratic roots: it was an independent republic before statehood, its 1777 constitution was the first in America to ban adult slavery and drop property requirements for voting, and it still celebrates Town Meeting Day as a civic holiday. You'll learn Vermont's Constitution of 1793, its 2-year terms for the Governor and all statewide officers, the unusual rule that the Legislature elects the Governor if no candidate wins a majority, its Legislature of 30 senators and 150 representatives, its viable third party, and its 14 counties. Time-sensitive facts are flagged, pointing to sos.vermont.gov. Cited to Vermont's own official sources (legislature.vermont.gov, sos.vermont.gov, vermontjudiciary.org).",
  lessons: [
    // ── Section 1: The independent republic + 1777 firsts ────────────────
    {
      slug: "vt-republic-firsts",
      title: "1 · Vermont's roots: an independent republic and America's first reforms",
      section: "What Makes Vermont Unique",
      body: `Vermont's civic story starts before it was even a state. From **1777 to 1791, Vermont was an independent republic** — with its own constitution, currency, and postal service — before joining the Union as the **14th state on March 4, 1791** (Vermont Secretary of State, n.d.).

That **1777 Vermont Constitution** was genuinely ahead of its time. It was the **first constitution in America to:**
- **Ban adult slavery**, and
- **Drop property-ownership requirements for (adult male) voting** — extending the vote well beyond landowners (Vermont Secretary of State, n.d.).

Vermont adopted its current **Constitution of 1793** shortly after statehood; it remains in force (the **shortest state constitution** in the country). Vermont's founding reforms set a tone of **small-d democratic, town-centered self-government** that still defines its civic life — from Town Meeting Day to a strong independent streak in its politics.

This is the through-line: Vermont sees government as **close, local, and participatory** — and several of its distinctive rules (Town Meeting Day, 2-year terms, a legislature that picks the governor in a tie) flow from that heritage.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Vermont's own government (legislature.vermont.gov, sos.vermont.gov, vermontjudiciary.org) is the authoritative source. When something is time-sensitive — like voting rules — we say so.

**Check yourself.** What two American "firsts" did Vermont's 1777 constitution achieve, and what was Vermont before it became a state?

## Sources
- Vermont Secretary of State. (n.d.). *Vermont's history: the independent republic and the 1777 Constitution*. sos.vermont.gov. https://sos.vermont.gov/
- Vermont General Assembly. (n.d.). *Constitution of the State of Vermont (1793)*. legislature.vermont.gov. https://legislature.vermont.gov/`,
    },

    // ── Section 2: 2-year terms + the legislature-elected governor ───────
    {
      slug: "vt-terms-governor",
      title: "2 · Two-year terms and the Legislature-elected Governor",
      section: "The Three Branches",
      body: `Vermont's executive has two distinctive features.

**Everyone runs every two years.** Vermont's **Governor serves a 2-year term** — one of only **two states** (with **New Hampshire**) that elect a governor every two years — and there is **no term limit.** In fact, **all** of Vermont's statewide officers (Lieutenant Governor, Secretary of State, Treasurer, Auditor, and Attorney General) also serve **2-year terms**, and each is **elected separately** (they are not on a joint ticket) — so Vermont can, and often does, elect a Governor and Lieutenant Governor of **different parties** (Vermont Secretary of State, n.d.).

**If no one gets a majority, the LEGISLATURE picks the Governor.** ⚠️ Here's a genuine Vermont rule: to win statewide office outright, a candidate must receive a **majority (over 50%)** of the vote. If **no candidate for Governor (or another statewide office) gets a majority** — which can happen when a strong third-party or independent candidate splits the vote — the **Legislature (General Assembly) chooses the winner** from the top finishers, by secret ballot (Vermont General Assembly, n.d.). This has actually happened in Vermont's history, and it reflects the state's viable **third party** tradition (Vermont has an active **Progressive Party** alongside Democrats and Republicans).

The **Legislative** and **Judicial** branches complete the three (next lessons).

**Check yourself.** How long is Vermont's gubernatorial term, and what happens if no candidate for Governor wins a majority?

## Sources
- Vermont Secretary of State. (n.d.). *Statewide elected officials and two-year terms*. sos.vermont.gov. https://sos.vermont.gov/
- Vermont General Assembly. (n.d.). *Election of the Governor by the General Assembly when no majority*. legislature.vermont.gov. https://legislature.vermont.gov/`,
    },

    // ── Section 3: The Legislature + courts ──────────────────────────────
    {
      slug: "vt-legislature-courts",
      title: "3 · The Legislature and how Vermont picks its judges",
      section: "The Three Branches",
      body: `**Legislative — the Vermont General Assembly.** A part-time **citizen legislature** meeting in Montpelier (Vermont General Assembly, n.d.):
- **House of Representatives — 150 members**, and **Senate — 30 senators**, all serving **2-year terms.**
- With 150 House members for a small-population state, your representative is often a **neighbor** — the same accessible, participatory spirit as Vermont's town meetings.

**Judicial — appointment with legislative retention.** Vermont does **not** elect its judges in ordinary campaigns. Instead (Vermont Judiciary, n.d.):
1. A **Judicial Nominating Board** screens applicants and sends the Governor a list.
2. The **Governor appoints** a judge **from that list**, and the **Senate confirms.**
3. For retention, ⚠️ Vermont does something unusual: the **General Assembly (the Legislature) votes on whether to RETAIN** sitting judges — **not the voters.** (A judge is retained unless a majority of the Legislature, meeting jointly, votes against them.) The **Vermont Supreme Court** has **5 justices** on 6-year terms.

So Vermont blends **merit appointment** (nominating board + Governor + Senate) with **legislative retention** — keeping judges out of both partisan campaigns and public retention elections. It's a distinctive middle path.

**Veto and override.** The Governor may veto bills; the General Assembly overrides with a **two-thirds vote of each chamber.**

**Check yourself.** How many members sit in each chamber, and who decides whether a Vermont judge is retained?

## Sources
- Vermont General Assembly. (n.d.). *The General Assembly: House and Senate*. legislature.vermont.gov. https://legislature.vermont.gov/
- Vermont Judiciary. (n.d.). *Judicial selection and legislative retention*. vermontjudiciary.org. https://www.vermontjudiciary.org/`,
    },

    // ── Section 4: Town Meeting Day ──────────────────────────────────────
    {
      slug: "vt-town-meeting",
      title: "4 · Town Meeting Day: direct democracy as a civic holiday",
      section: "Local Government",
      body: `If one image captures Vermont civics, it's **Town Meeting Day** (Vermont Secretary of State, n.d.).

**What it is.** On the **first Tuesday in March**, Vermont towns hold their annual **town meeting**, where **any registered voter can attend, speak, debate, and vote** directly on the **town budget, local officers, school matters, and even resolutions on statewide or national issues.** It is one of the **purest surviving forms of direct democracy in America** — residents literally govern their town in one room (or, increasingly, by an "Australian ballot" over a day). **Town Meeting Day is recognized in Vermont as a civic occasion**, and turnout and participation are a point of local pride.

**How local government is organized** (Vermont General Assembly, n.d.):
- Vermont is a **town-based** state: **towns** (and cities) run most local services, led by an elected **select board.**
- Vermont has **14 counties**, but ⚠️ **county government is very limited** — counties are mainly **judicial districts** with a few offices (like the sheriff and the state's attorney). The **town**, not the county, is the center of Vermont local government.
- **School districts** operate locally (Vermont has consolidated many in recent years).

So in Vermont, "local government" means your **town** — and once a year, on Town Meeting Day, **you are the local government.**

**Check yourself.** What can any registered voter do on Town Meeting Day, and why is county government minor in Vermont?

## Sources
- Vermont Secretary of State. (n.d.). *Town Meeting Day and local government*. sos.vermont.gov. https://sos.vermont.gov/
- Vermont General Assembly. (n.d.). *Towns, cities, and the limited role of counties*. legislature.vermont.gov. https://legislature.vermont.gov/`,
    },

    // ── Section 5: Lawmaking, voting, getting involved ───────────────────
    {
      slug: "vt-lawmaking-involved",
      title: "5 · How a bill becomes law, voting, and getting involved",
      section: "Get Involved",
      body: `**How a bill becomes law** (Vermont General Assembly, n.d.):
1. **Introduction** in the House or Senate, **committee** review, and **floor votes** in both chambers.
2. **Governor** — sign, veto (two-thirds override), or let it become law.
Vermont has **no statewide citizen initiative**; direct democracy in Vermont happens at the **town** level (town meeting), not through statewide ballot measures.

**Voting.** Vermont is among the **most accessible** states to vote in (Vermont Secretary of State, n.d.): it offers **same-day (Election-Day) registration**, mails **general-election ballots to all active registered voters**, and has **no photo-ID requirement** for most voters. ⚠️ **Time-sensitive:** details and deadlines are administered by **town clerks** and can change — confirm the **current** rules at **sos.vermont.gov** or your town clerk before you vote.

**How to take part:**
- **Go to Town Meeting Day.** This is Vermont's signature civic act — show up in March and vote on your town's budget and questions directly.
- **Register and vote** — even on Election Day; watch for your mailed ballot.
- **Contact your legislators** in Montpelier — you have one Representative (or two, in multi-member districts) and one Senator; the citizen legislature is very accessible.
- **Consider third parties.** Vermont's **Progressive Party** and strong independent tradition mean your vote — and your candidacy — need not fit the two-party mold.
- **Run** — select board, school board, and other town offices are among the most reachable in the country.

**Check yourself.** Does Vermont have a statewide citizen initiative, and where does Vermont's direct democracy actually happen?

## Sources
- Vermont General Assembly. (n.d.). *How a bill becomes law*. legislature.vermont.gov. https://legislature.vermont.gov/
- Vermont Secretary of State. (n.d.). *Registering and voting: same-day registration, mailed ballots*. sos.vermont.gov. https://sos.vermont.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "vt-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Vermont state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Vermont's 1777 constitution was the first in America to ban adult ___.",
            answer: "slavery",
            explanation:
              "The 1777 Vermont Constitution was the first to ban adult slavery and to drop property requirements for (adult male) voting.",
          },
          {
            prompt:
              "Vermont's Governor serves a ___-year term (one of only two states with such short gubernatorial terms).",
            answer: "2",
            accept: ["two"],
            explanation:
              "Vermont and New Hampshire elect governors every two years; in Vermont ALL statewide officers serve 2-year terms.",
          },
          {
            prompt:
              "If no candidate for Governor wins a majority, the ___ chooses the winner in Vermont.",
            answer: "Legislature",
            accept: ["legislature", "General Assembly", "general assembly"],
            explanation:
              "Vermont requires a majority to win statewide; otherwise the General Assembly elects the Governor from the top finishers.",
          },
          {
            prompt:
              "Vermont's signature civic holiday, held the first Tuesday in March, is ___ Meeting Day.",
            answer: "Town",
            accept: ["town"],
            explanation:
              "On Town Meeting Day any registered voter can debate and vote directly on the town budget and local questions.",
          },
          {
            prompt:
              "In Vermont, judges are retained not by voters but by a vote of the ___.",
            answer: "Legislature",
            accept: ["legislature", "General Assembly", "general assembly"],
            explanation:
              "Vermont judges are appointed (nominating board → Governor → Senate) and retained by a vote of the General Assembly.",
          },
          {
            prompt:
              "TRUE or FALSE: Vermont has a statewide citizen initiative for ballot measures.",
            answer: "false",
            explanation:
              "False. Vermont has no statewide initiative; its direct democracy happens locally, on Town Meeting Day.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "vt-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What was Vermont before it became a state in 1791?",
            options: [
              "A British colony until 1791",
              "An independent republic (1777–1791) with its own constitution",
              "Part of Canada",
              "A territory of New York with no government",
            ],
            correctIndex: 1,
            explanation:
              "Vermont was an independent republic for 14 years before joining the Union as the 14th state.",
            sourceLessonSlug: "vt-republic-firsts",
          },
          {
            prompt: "What did Vermont's 1777 constitution do first in America?",
            options: [
              "Created a unicameral legislature",
              "Banned adult slavery and dropped property requirements for voting",
              "Abolished courts",
              "Created a state income tax",
            ],
            correctIndex: 1,
            explanation:
              "Vermont's 1777 constitution was the first to ban adult slavery and extend voting beyond property owners.",
            sourceLessonSlug: "vt-republic-firsts",
          },
          {
            prompt: "How long is Vermont's gubernatorial term?",
            options: ["2 years", "4 years", "6 years", "8 years"],
            correctIndex: 0,
            explanation:
              "Vermont (with New Hampshire) elects its Governor every two years; all statewide officers serve 2-year terms.",
            sourceLessonSlug: "vt-terms-governor",
          },
          {
            prompt: "What happens if no candidate for Vermont Governor wins a majority?",
            options: [
              "The top vote-getter wins anyway",
              "The Legislature (General Assembly) chooses the winner from the top finishers",
              "A new election is held immediately",
              "The office stays vacant",
            ],
            correctIndex: 1,
            explanation:
              "Vermont requires a majority; otherwise the General Assembly elects the Governor — a rule tied to its viable third-party tradition.",
            sourceLessonSlug: "vt-terms-governor",
          },
          {
            prompt: "How are Vermont's judges retained?",
            options: [
              "By yes/no votes of the people",
              "By a vote of the General Assembly (the Legislature)",
              "By the Governor alone",
              "They serve for life with no review",
            ],
            correctIndex: 1,
            explanation:
              "Vermont judges are appointed and then retained by a vote of the Legislature — not by voters.",
            sourceLessonSlug: "vt-legislature-courts",
          },
          {
            prompt: "What is Town Meeting Day in Vermont?",
            options: [
              "A closed session of the Legislature",
              "An annual March gathering where any registered voter can debate and vote on the town budget and local questions",
              "A meeting only for town officials",
              "A statewide primary",
            ],
            correctIndex: 1,
            explanation:
              "Town Meeting Day is direct democracy: residents decide town budgets and questions in person — a Vermont hallmark.",
            sourceLessonSlug: "vt-town-meeting",
          },
          {
            prompt: "Why is county government minor in Vermont?",
            options: [
              "Vermont has no counties",
              "Counties are mainly judicial districts; the town is the center of local government",
              "The Governor runs every county",
              "Counties were sold to private companies",
            ],
            correctIndex: 1,
            explanation:
              "Vermont's 14 counties are mostly judicial districts; towns handle most local government.",
            sourceLessonSlug: "vt-town-meeting",
          },
          {
            prompt: "How many members are in the Vermont House and Senate?",
            options: [
              "150 House / 30 Senate",
              "100 House / 40 Senate",
              "400 House / 24 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Vermont House has 150 members and the Senate has 30 — all serving 2-year terms in a citizen legislature.",
            sourceLessonSlug: "vt-legislature-courts",
          },
          {
            prompt: "Does Vermont have a statewide citizen initiative?",
            options: [
              "Yes, a strong one",
              "No — its direct democracy happens locally, on Town Meeting Day",
              "Only for taxes",
              "Only in leap years",
            ],
            correctIndex: 1,
            explanation:
              "Vermont has no statewide initiative; direct democracy lives at the town level.",
            sourceLessonSlug: "vt-lawmaking-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Vermont's voting rules?",
            options: [
              "Because Vermont has no elections office",
              "Because details and deadlines are administered by town clerks and can change — confirm at sos.vermont.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Vermont administers voting through town clerks and rules can change, so sos.vermont.gov is the authoritative source.",
            sourceLessonSlug: "vt-lawmaking-involved",
          },
        ],
      },
    },
  ],
};
