// Authored "Wisconsin Civics: How Your State Government Works" — the Wisconsin entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Wisconsin's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to WISCONSIN'S OWN OFFICIAL SOURCES: the Legislature
// (legis.wisconsin.gov), the Elections Commission (elections.wi.gov), the Court System
// (wicourts.gov), and the Wisconsin Constitution (1848).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Wisconsin's
// famously broad partial veto has been narrowed by amendments over time. Time-sensitive
// items are flagged and point learners to elections.wi.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_WI_COURSE: AuthoredCourse = {
  title: "Wisconsin Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Wisconsin governs itself — and how you take part where you live. Wisconsin was a Progressive-Era 'laboratory of democracy' — home of the 'Wisconsin Idea' that state government and its university should serve everyone. You'll learn Wisconsin's Constitution of 1848, its plural executive, its Legislature of 33 senators and 99 Assembly members, its unusually powerful gubernatorial PARTIAL VETO, its nonpartisan spring elections for a high-profile Supreme Court, its strong recall power, and its 72 counties. It also notes Wisconsin has no statewide citizen initiative. Time-sensitive facts are flagged, pointing to elections.wi.gov. Cited to Wisconsin's own official sources (legis.wisconsin.gov, elections.wi.gov, wicourts.gov).",
  lessons: [
    // ── Section 1: The Wisconsin Idea + Progressive lab ──────────────────
    {
      slug: "wi-wisconsin-idea",
      title: "1 · The 'Wisconsin Idea': a laboratory of democracy",
      section: "What Makes Wisconsin Unique",
      body: `Wisconsin's civic identity was forged in the **Progressive Era**, when it became known as a **"laboratory of democracy"** — a state that **experimented with reforms later copied nationwide** (Wisconsin State Legislature, n.d.).

Wisconsin governs under its **Constitution of 1848**, adopted when it became the **30th state on May 29, 1848.** But its fame comes from the early 1900s, led by figures like **Robert "Fighting Bob" La Follette**, when Wisconsin pioneered reforms such as an early **state income tax (1911)**, workers' compensation, the direct primary, and strong regulation of railroads and utilities.

At the heart of it is **"the Wisconsin Idea"** — the principle that **the boundaries of the university are the boundaries of the state**, meaning **state government and the University of Wisconsin should put expertise to work for the good of all residents**, not just campus (Wisconsin State Legislature, n.d.). It shaped a tradition of **expert, reform-minded government** and public engagement that still colors Wisconsin's civic culture.

This is the through-line: Wisconsin sees itself as a place where **government is a tool for practical problem-solving and reform** — and several of its distinctive features (a powerful partial veto, high-profile nonpartisan court elections, a strong recall) fit that experimental, participatory tradition.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Wisconsin's own government (legis.wisconsin.gov, elections.wi.gov, wicourts.gov) is the authoritative source. When something is time-sensitive — like limits on the partial veto — we say so.

**Check yourself.** What is "the Wisconsin Idea," and why was Wisconsin called a "laboratory of democracy"?

## Sources
- Wisconsin State Legislature. (n.d.). *The Wisconsin Idea; Progressive-Era reforms; the 1848 Constitution*. legis.wisconsin.gov. https://legis.wisconsin.gov/
- Wisconsin Elections Commission. (n.d.). *Wisconsin government overview*. elections.wi.gov. https://elections.wi.gov/`,
    },

    // ── Section 2: The executive + the powerful partial veto ─────────────
    {
      slug: "wi-partial-veto",
      title: "2 · The executive and Wisconsin's uniquely powerful partial veto",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** Wisconsin voters elect several statewide officials (Wisconsin Elections Commission, n.d.):
- The **Governor** and **Lieutenant Governor** (nominated separately in the primary, then running **together** in the general election),
- the **Attorney General**,
- the **Secretary of State**,
- the **State Treasurer**, and
- the **Superintendent of Public Instruction** (a **nonpartisan** office leading K–12 education).

**Wisconsin's famous PARTIAL VETO.** Here is a genuine Wisconsin distinctive: its Governor has one of the **most powerful partial (line-item) veto powers in the nation.** On **spending bills**, the Wisconsin Governor can veto **not just whole line items, but individual parts of them** — historically even **striking individual words, letters, or digits** to change a bill's meaning (Wisconsin State Legislature, n.d.). Creative use of this power earned nicknames like the **"Vanna White veto"** and the **"Frankenstein veto,"** because a governor could assemble new sentences or numbers from what remained.

⚠️ **Time-sensitive:** voters have **amended the constitution to limit** this power over time — for example, barring the old trick of striking individual letters to create new words, and (in a 2008 amendment) preventing the governor from combining parts of two or more sentences. The partial veto remains strong but **narrower than it once was**, so confirm the **current** limits at legis.wisconsin.gov.

The **Legislative** and **Judicial** branches complete the three (next lessons).

**Check yourself.** What makes Wisconsin's partial veto unusually powerful, and how has it been limited over time?

## Sources
- Wisconsin State Legislature. (n.d.). *The partial (line-item) veto and constitutional limits*. legis.wisconsin.gov. https://legis.wisconsin.gov/
- Wisconsin Elections Commission. (n.d.). *Statewide elected officials*. elections.wi.gov. https://elections.wi.gov/`,
    },

    // ── Section 3: Legislature + nonpartisan Supreme Court elections ─────
    {
      slug: "wi-legislature-courts",
      title: "3 · The Legislature and Wisconsin's high-profile Supreme Court elections",
      section: "The Three Branches",
      body: `**Legislative — the Wisconsin Legislature.** A bicameral body meeting in Madison (Wisconsin State Legislature, n.d.):
- **State Assembly — 99 members**, elected to **2-year terms.**
- **State Senate — 33 senators**, elected to **4-year terms.**
- Wisconsin has **no legislative term limits.**

**Judicial — nonpartisan spring elections.** Wisconsin **elects** its judges on a **NONPARTISAN ballot** — no party label appears next to their names — and it does so in **spring elections** (held in the first part of the year, separate from the November general) (Wisconsin Court System, n.d.):
- The **Wisconsin Supreme Court** has **7 justices**, elected statewide to **10-year terms** (one seat at a time, so a single justice is on the spring ballot in most years).
- Court of Appeals and Circuit Court judges are also elected on nonpartisan spring ballots.

Although officially nonpartisan, Wisconsin's **Supreme Court elections have become some of the most expensive and closely watched in the country**, because the court's balance can decide major statewide questions. So these low-turnout **spring** races carry outsized importance — a civic fact worth knowing: **your spring vote for a "nonpartisan" judge can be one of your most consequential.**

**Veto and override.** Beyond the partial veto (Lesson 2), the Governor may veto whole bills; the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** When and how does Wisconsin elect its Supreme Court justices, and why do those races matter so much?

## Sources
- Wisconsin State Legislature. (n.d.). *The Legislature: Assembly and Senate*. legis.wisconsin.gov. https://legis.wisconsin.gov/
- Wisconsin Court System. (n.d.). *Nonpartisan spring judicial elections; the Supreme Court*. wicourts.gov. https://www.wicourts.gov/`,
    },

    // ── Section 4: How a bill becomes law + recall (no initiative) ───────
    {
      slug: "wi-lawmaking-recall",
      title: "4 · How a bill becomes law, the strong recall, and no initiative",
      section: "Making Law",
      body: `**How a bill becomes law** (Wisconsin State Legislature, n.d.):
1. **Introduction.** A legislator introduces a bill in the Assembly or Senate.
2. **Committee.** Hearings, amendments, and a committee vote.
3. **Floor votes.** Both chambers must pass the bill.
4. **Governor.** The Governor may sign, veto (two-thirds override), or use the **partial veto** on appropriations (Lesson 2).

**No statewide citizen initiative.** Despite its reform reputation, Wisconsin has **no citizen initiative** for statewide statutes or constitutional amendments. **Amendments** are proposed by the **Legislature** — which must pass them in **two consecutive sessions** — and then ratified by the **voters.** So Wisconsin voters have the **final say on amendments**, but cannot **start** one by petition (Wisconsin State Legislature, n.d.).

**A strong recall power.** What Wisconsin *does* give citizens is a robust **recall**: voters can petition to force a **recall election** of state and local elected officials (Wisconsin Elections Commission, n.d.). Wisconsin used this power in a nationally famous way — including a **2012 gubernatorial recall election** — making recall a real, consequential feature of Wisconsin civics rather than a theoretical one. ⚠️ Recall rules (signature thresholds, timing) are specific; confirm current requirements at elections.wi.gov.

The takeaway: in Wisconsin, citizens **can't start laws by initiative**, but they **can remove officials by recall** — an unusual mix.

**Check yourself.** Can Wisconsin citizens put a law on the ballot by initiative? What direct citizen power did Wisconsin use famously in 2012?

## Sources
- Wisconsin State Legislature. (n.d.). *How a bill becomes law; amending the constitution*. legis.wisconsin.gov. https://legis.wisconsin.gov/
- Wisconsin Elections Commission. (n.d.). *Recall of elected officials*. elections.wi.gov. https://elections.wi.gov/`,
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "wi-local-involved",
      title: "5 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government.** Wisconsin's local layers include (Wisconsin State Legislature, n.d.):
- **72 counties**, governed by elected **county boards of supervisors** (larger counties, like Milwaukee, also have an elected **county executive**).
- **Cities, villages, and towns** — Wisconsin distinguishes **"towns"** (rural, general-purpose units, similar to townships) from **incorporated villages and cities.** Wisconsin has a strong **home-rule** tradition for cities and villages.
- **School districts** and **special districts** round out local government.

**Voting.** ⚠️ **Time-sensitive:** Wisconsin offers **same-day (Election-Day) registration** and **early in-person absentee voting**, and requires a **photo ID** to vote. These rules change and are administered by **municipal clerks** (Wisconsin runs elections at the city/village/town level, with over 1,800 local clerks). Confirm the **current** rules at **elections.wi.gov** or your municipal clerk before you vote.

**How to take part:**
- **Register and vote** — you can register on Election Day; bring photo ID; and **don't skip the spring elections**, where consequential judicial and local races are decided.
- **Use recall** — if you believe an official should answer to voters before their term ends, Wisconsin's recall is a real tool.
- **Show up locally.** County boards, city/village/town meetings, and school boards hold public meetings.
- **Contact your legislators** in Madison — you have one Assembly member and one Senator.
- **Run** — town board, school board, city council, and county board are reachable local starting points.

**Check yourself.** Name one voting feature Wisconsin offers, and one reason spring elections deserve your attention.

## Sources
- Wisconsin State Legislature. (n.d.). *Local government: counties, cities, villages, and towns*. legis.wisconsin.gov. https://legis.wisconsin.gov/
- Wisconsin Elections Commission. (n.d.). *Registering and voting: same-day registration, photo ID, early voting*. elections.wi.gov. https://elections.wi.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "wi-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Wisconsin state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "The principle that state government and its university should serve all residents is called the Wisconsin ___.",
            answer: "Idea",
            accept: ["idea"],
            explanation:
              "The Wisconsin Idea holds that 'the boundaries of the university are the boundaries of the state' — expertise serving everyone.",
          },
          {
            prompt:
              "Wisconsin's Governor has an unusually powerful partial (line-item) ___ on spending bills.",
            answer: "veto",
            explanation:
              "The Wisconsin partial veto historically let a governor strike parts of items — nicknamed the 'Frankenstein' veto — though amendments have narrowed it.",
          },
          {
            prompt:
              "Wisconsin elects its Supreme Court justices on a ___ ballot in spring elections.",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "The 7 justices are elected nonpartisan to 10-year terms in spring elections that have become nationally significant.",
          },
          {
            prompt:
              "Wisconsin's current constitution is the Constitution of ___.",
            answer: "1848",
            explanation:
              "Wisconsin adopted its constitution in 1848, the year it became the 30th state.",
          },
          {
            prompt:
              "In 2012 Wisconsin held a famous ___ election of its Governor (a direct citizen power).",
            answer: "recall",
            explanation:
              "Wisconsin's strong recall lets voters petition to force a recall election; the 2012 gubernatorial recall drew national attention.",
          },
          {
            prompt:
              "TRUE or FALSE: Wisconsin has a statewide citizen initiative that lets voters propose new laws.",
            answer: "false",
            explanation:
              "False. Wisconsin has no statewide initiative; amendments come from the Legislature (two sessions) then voters. It does have a strong recall.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "wi-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is 'the Wisconsin Idea'?",
            options: [
              "A tax cut plan",
              "The principle that state government and the university should serve all residents",
              "A highway project",
              "A ban on voting",
            ],
            correctIndex: 1,
            explanation:
              "The Wisconsin Idea holds that the university's expertise and state government should benefit the whole state.",
            sourceLessonSlug: "wi-wisconsin-idea",
          },
          {
            prompt: "What is distinctive about Wisconsin's gubernatorial veto?",
            options: [
              "The Governor cannot veto anything",
              "An unusually powerful partial veto that can strike parts of spending items (nicknamed the 'Frankenstein veto')",
              "Only the Legislature can veto",
              "Vetoes require a court order",
            ],
            correctIndex: 1,
            explanation:
              "Wisconsin's partial veto lets the Governor strike parts of appropriations items — a strong power, since narrowed by amendments.",
            sourceLessonSlug: "wi-partial-veto",
          },
          {
            prompt: "How and when does Wisconsin elect its Supreme Court justices?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot in spring elections, to 10-year terms",
              "Elected by the Legislature",
              "Elected in November partisan races",
            ],
            correctIndex: 1,
            explanation:
              "Wisconsin's 7 justices are elected nonpartisan in spring elections to 10-year terms — races that have become nationally significant.",
            sourceLessonSlug: "wi-legislature-courts",
          },
          {
            prompt: "Why do Wisconsin's spring Supreme Court elections matter so much?",
            options: [
              "They are ceremonial",
              "The court's balance can decide major statewide questions, so these low-turnout races are highly consequential",
              "They pick the Governor",
              "They set the school calendar",
            ],
            correctIndex: 1,
            explanation:
              "Because the court decides big statewide issues, its nonpartisan spring races draw heavy attention and spending.",
            sourceLessonSlug: "wi-legislature-courts",
          },
          {
            prompt: "How many members are in the Wisconsin Assembly and Senate?",
            options: [
              "99 Assembly / 33 Senate",
              "100 Assembly / 40 Senate",
              "150 Assembly / 50 Senate",
              "80 Assembly / 40 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Wisconsin Assembly has 99 members (2-year terms) and the Senate has 33 (4-year terms).",
            sourceLessonSlug: "wi-legislature-courts",
          },
          {
            prompt: "Can Wisconsin citizens put a new law on the ballot by initiative?",
            options: [
              "Yes, a strong initiative",
              "No — Wisconsin has no statewide initiative, though it has a strong recall",
              "Only in spring",
              "Only for schools",
            ],
            correctIndex: 1,
            explanation:
              "Wisconsin has no statewide initiative; amendments run through the Legislature, but citizens have a robust recall power.",
            sourceLessonSlug: "wi-lawmaking-recall",
          },
          {
            prompt: "What direct citizen power did Wisconsin use famously in 2012?",
            options: [
              "A citizen initiative",
              "A recall election of the Governor",
              "A constitutional convention",
              "A jury nullification",
            ],
            correctIndex: 1,
            explanation:
              "Wisconsin's strong recall produced a nationally watched 2012 gubernatorial recall election.",
            sourceLessonSlug: "wi-lawmaking-recall",
          },
          {
            prompt: "What is a 'town' in Wisconsin's local-government system?",
            options: [
              "The state capital",
              "A rural, general-purpose local unit (similar to a township), distinct from incorporated villages and cities",
              "A private company",
              "A federal district",
            ],
            correctIndex: 1,
            explanation:
              "Wisconsin distinguishes rural 'towns' from incorporated villages and cities; all sit within its 72 counties.",
            sourceLessonSlug: "wi-local-involved",
          },
          {
            prompt: "Which voting feature does Wisconsin offer?",
            options: [
              "No registration ever",
              "Same-day (Election-Day) registration, with a photo-ID requirement",
              "Voting only by the Legislature",
              "Property-owners-only voting",
            ],
            correctIndex: 1,
            explanation:
              "Wisconsin offers same-day registration and early absentee voting and requires photo ID; municipal clerks run elections.",
            sourceLessonSlug: "wi-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Wisconsin's partial-veto limits and voting rules?",
            options: [
              "Because Wisconsin has no government website",
              "Because amendments have narrowed the partial veto and voting rules are run by municipal clerks and change — confirm at legis.wisconsin.gov / elections.wi.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Wisconsin has amended the partial veto over time and administers voting locally, so the state's own sites are the authoritative source.",
            sourceLessonSlug: "wi-partial-veto",
          },
        ],
      },
    },
  ],
};
