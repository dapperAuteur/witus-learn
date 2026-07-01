// Authored "Kentucky Civics: How Your State Government Works" — the Kentucky entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Kentucky's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to KENTUCKY'S OWN OFFICIAL SOURCES: the Legislature
// (legislature.ky.gov), the Secretary of State / elections (sos.ky.gov, elect.ky.gov),
// the Judiciary (kycourts.gov), and the Kentucky Constitution (1891).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules) are flagged and point learners to sos.ky.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_KY_COURSE: AuthoredCourse = {
  title: "Kentucky Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the Commonwealth of Kentucky governs itself — and how you take part where you live. Kentucky has some distinctive traits: it is one of only four 'Commonwealths'; it elects its Governor in odd-numbered years (separate from the presidential cycle); and it has 120 counties — the third-most of any state, so county government is a big part of civic life. You'll learn Kentucky's Constitution of 1891, its large plural executive, its General Assembly of 38 senators and 100 representatives, its nonpartisan elected judiciary, and its many counties. Time-sensitive facts are flagged, pointing to sos.ky.gov. Cited to Kentucky's own official sources (legislature.ky.gov, sos.ky.gov, kycourts.gov).",
  lessons: [
    // ── Section 1: Commonwealth, odd-year elections, 120 counties ────────
    {
      slug: "ky-commonwealth-counties",
      title: "1 · A Commonwealth of odd-year elections and 120 counties",
      section: "What Makes Kentucky Unique",
      body: `Kentucky has a few distinctive traits worth knowing up front.

**A Commonwealth.** Kentucky is one of only **four states officially called a "Commonwealth"** (with Virginia, Massachusetts, and Pennsylvania) — reflecting the old idea of government for the **common good.** It carries no special legal power today but is part of Kentucky's identity. Kentucky became the **15th state on June 1, 1792** (the first state west of the Appalachians), and governs under its **Constitution of 1891** (its fourth) (Kentucky Legislature, n.d.).

**Odd-year statewide elections.** ⚠️ Like Virginia, New Jersey, Louisiana, and Mississippi, Kentucky elects its **Governor and other statewide officers in ODD-numbered years** — for example **2023 and 2027** — separate from the presidential cycle (Kentucky Secretary of State, n.d.). This gives Kentucky's state races their own spotlight and calendar.

**120 counties.** Kentucky has **120 counties — the third-most of any state** (behind only Texas's 254 and Georgia's 159). For a mid-sized state, that's a lot — many are small and rural, a legacy of an era when people needed a **county seat within a day's travel.** The practical effect: **county government is a big, close-to-home part of Kentucky civic life**, and the elected **county judge/executive** and **fiscal court** matter a great deal locally.

This is the through-line: Kentucky's civic life is shaped by its **Commonwealth tradition, its off-cycle elections, and its many small counties.**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Kentucky's own government (legislature.ky.gov, sos.ky.gov, kycourts.gov) is the authoritative source.

**Check yourself.** In which years does Kentucky elect its Governor, and how many counties does it have?

## Sources
- Kentucky Legislature. (n.d.). *Kentucky as a Commonwealth; the Constitution of 1891*. legislature.ky.gov. https://legislature.ky.gov/
- Kentucky Secretary of State. (n.d.). *Odd-year elections; Kentucky's 120 counties*. sos.ky.gov. https://www.sos.ky.gov/`,
    },

    // ── Section 2: The executive + the General Assembly ──────────────────
    {
      slug: "ky-executive-legislature",
      title: "2 · The executive and the General Assembly",
      section: "The Three Branches",
      body: `**Executive — a large plural executive.** Kentucky voters elect several statewide officials (Kentucky Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** run **together on a joint ticket.**
- Voters separately elect the **Secretary of State** (who runs elections), the **Attorney General**, the **State Treasurer**, the **State Auditor**, and the **Commissioner of Agriculture.**
Because so many officials are elected on their own, Kentucky — like many states — can end up with a **Governor of one party and other statewide officers of another**, and they can check one another. Statewide officers serve **4-year terms.**

**Legislative — the Kentucky General Assembly.** A bicameral body meeting in Frankfort (Kentucky Legislature, n.d.):
- **House of Representatives — 100 members** (2-year terms), and **Senate — 38 senators** (4-year terms).
- It is a part-time citizen legislature with **short annual sessions** (longer 60-day sessions in even years, shorter 30-day sessions in odd years).

**Judicial** (nonpartisan, covered next) completes the three branches.

**Veto and override.** ⚠️ Note a Kentucky quirk: the Governor's veto is comparatively **weak** — the General Assembly can **override a veto with a simple majority** (like Tennessee, Alabama, and West Virginia). The Governor also has a **line-item veto** on appropriations.

**Check yourself.** Which statewide executive officers do Kentuckians elect, and how strong is the Governor's veto?

## Sources
- Kentucky Secretary of State. (n.d.). *Statewide elected officials*. sos.ky.gov. https://www.sos.ky.gov/
- Kentucky Legislature. (n.d.). *The General Assembly; sessions; veto and override*. legislature.ky.gov. https://legislature.ky.gov/`,
    },

    // ── Section 3: The courts + how a bill becomes law ───────────────────
    {
      slug: "ky-courts-lawmaking",
      title: "3 · How Kentucky picks its judges, and how a bill becomes law",
      section: "Making Law",
      body: `**How Kentucky chooses its judges.** Kentucky **elects** its judges on a **NONPARTISAN** ballot — no party label appears next to their names (Kentucky Court of Justice, n.d.):
- The **Supreme Court of Kentucky** has **7 justices**, elected from districts to **8-year terms.**
- Court of Appeals, Circuit, and District judges are likewise elected on nonpartisan ballots.
- When a seat opens mid-term, the **Governor appoints** a replacement from a **Judicial Nominating Commission's** list, who then must stand for election.
So Kentucky keeps judicial races **nonpartisan** (a contrast with, say, Alabama's partisan judicial elections).

**How a bill becomes law** (Kentucky Legislature, n.d.):
1. **Introduction** in the House or Senate during the short annual session; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, weak veto (simple-majority override), or line-item veto appropriations.

**No statewide citizen initiative.** Kentucky citizens **cannot** put a statute or amendment on the ballot by petition. **Constitutional amendments** are proposed by the **General Assembly** (by a three-fifths vote) and then ratified by the **voters** — so the citizen role is **ratification**, not initiation.

**Check yourself.** How are Kentucky's Supreme Court justices chosen, and can Kentucky citizens start a law by initiative?

## Sources
- Kentucky Court of Justice. (n.d.). *Nonpartisan judicial elections; the Supreme Court of Kentucky*. kycourts.gov. https://www.kycourts.gov/
- Kentucky Legislature. (n.d.). *How a bill becomes law; amending the constitution*. legislature.ky.gov. https://legislature.ky.gov/`,
    },

    // ── Section 4: Local government + getting involved ───────────────────
    {
      slug: "ky-local-involved",
      title: "4 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government — where the 120 counties matter.** Kentucky's local layers include (Kentucky Legislature, n.d.):
- **120 counties**, each governed by an elected **county judge/executive** and a **fiscal court** (a board of magistrates or commissioners), plus other elected county officials (sheriff, clerk, jailer, property valuation administrator). With so many counties, **county government is unusually prominent** in Kentucky daily life.
- **Cities**, classified by size, provide municipal services (Louisville merged with Jefferson County into a consolidated **"Louisville Metro"** government — a distinctive Kentucky example of city-county consolidation).
- **School districts** (county and independent) and **special districts** round out local government.

**Voting.** ⚠️ **Time-sensitive:** Kentucky **expanded voting access** in recent years, adding **early in-person voting** and more absentee options, and requires **photo ID** (with alternatives). Rules and deadlines are administered by **county clerks and boards of elections** and can change — confirm the **current** details at **sos.ky.gov** (or elect.ky.gov) before you vote.

**How to take part:**
- **Register and vote** — bring ID; use early voting; check your status at sos.ky.gov. Remember Kentucky's big elections fall in **odd years.**
- **Show up locally.** Your **fiscal court**, county judge/executive, city council, and school board hold public meetings — county government is especially reachable in Kentucky.
- **Contact your legislators** in Frankfort — you have one Representative and one Senator; sessions are short, so timing matters.
- **Run** — school board, city council, magistrate/fiscal court, and county offices are reachable local starting points.

**Check yourself.** What elected officials run a Kentucky county, and in which years are Kentucky's big statewide elections held?

## Sources
- Kentucky Legislature. (n.d.). *Local government: counties, fiscal courts, and city-county consolidation*. legislature.ky.gov. https://legislature.ky.gov/
- Kentucky State Board of Elections. (n.d.). *Registering and voting: early voting, photo ID*. elect.ky.gov. https://elect.ky.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ky-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Kentucky state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Kentucky is one of only four states officially called a ___.",
            answer: "Commonwealth",
            accept: ["commonwealth"],
            explanation:
              "Kentucky, Virginia, Massachusetts, and Pennsylvania are the four Commonwealths — reflecting government for the common good.",
          },
          {
            prompt:
              "Kentucky elects its Governor in ___-numbered years (e.g., 2023, 2027).",
            answer: "odd",
            explanation:
              "Kentucky holds statewide elections off the presidential cycle, in odd years — like Virginia and New Jersey.",
          },
          {
            prompt:
              "Kentucky has 120 counties — the ___-most of any state.",
            answer: "third",
            accept: ["3rd"],
            explanation:
              "Only Texas (254) and Georgia (159) have more counties than Kentucky's 120.",
          },
          {
            prompt:
              "A Kentucky county is run by an elected county judge/executive and a ___ court.",
            answer: "fiscal",
            explanation:
              "The fiscal court (magistrates or commissioners) plus the county judge/executive govern each Kentucky county.",
          },
          {
            prompt:
              "Kentucky elects its judges on a ___ ballot (no party labels).",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "Kentucky's judges, including its 7 Supreme Court justices (8-year terms), are elected nonpartisan.",
          },
          {
            prompt:
              "TRUE or FALSE: Kentucky has a statewide citizen initiative to propose new laws.",
            answer: "false",
            explanation:
              "False. Kentucky has no statewide initiative; the General Assembly proposes amendments, which voters ratify.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "ky-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Kentucky is one of only four states officially called what?",
            options: ["A Republic", "A Commonwealth", "A Territory", "A Province"],
            correctIndex: 1,
            explanation:
              "Kentucky is a Commonwealth, along with Virginia, Massachusetts, and Pennsylvania.",
            sourceLessonSlug: "ky-commonwealth-counties",
          },
          {
            prompt: "In which years does Kentucky elect its Governor?",
            options: [
              "The same year as the President",
              "Odd-numbered years (e.g., 2023, 2027)",
              "Every two years",
              "Only in leap years",
            ],
            correctIndex: 1,
            explanation:
              "Kentucky holds its statewide elections in odd years, off the presidential cycle.",
            sourceLessonSlug: "ky-commonwealth-counties",
          },
          {
            prompt: "How many counties does Kentucky have, and how does that rank?",
            options: [
              "10 — the fewest",
              "120 — the third-most of any state",
              "254 — the most",
              "50 — average",
            ],
            correctIndex: 1,
            explanation:
              "Kentucky has 120 counties, third only to Texas (254) and Georgia (159).",
            sourceLessonSlug: "ky-commonwealth-counties",
          },
          {
            prompt: "How strong is the Kentucky Governor's veto?",
            options: [
              "Impossible to override",
              "Weak — the General Assembly overrides with a simple majority",
              "The Governor cannot veto",
              "Only courts can override it",
            ],
            correctIndex: 1,
            explanation:
              "Kentucky's veto is overridden by a simple majority, like Tennessee, Alabama, and West Virginia.",
            sourceLessonSlug: "ky-executive-legislature",
          },
          {
            prompt: "How does Kentucky choose its Supreme Court justices?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot from districts to 8-year terms",
              "Elected by the Legislature",
              "In partisan races",
            ],
            correctIndex: 1,
            explanation:
              "Kentucky elects its 7 justices nonpartisan to 8-year terms (appointment fills mid-term vacancies).",
            sourceLessonSlug: "ky-courts-lawmaking",
          },
          {
            prompt: "How many members are in the Kentucky House and Senate?",
            options: [
              "100 House / 38 Senate",
              "150 House / 50 Senate",
              "99 House / 33 Senate",
              "203 House / 40 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Kentucky House has 100 members and the Senate has 38.",
            sourceLessonSlug: "ky-executive-legislature",
          },
          {
            prompt: "Can Kentucky citizens put a law on the ballot by initiative?",
            options: [
              "Yes, a strong initiative",
              "No — there is no statewide initiative; the General Assembly proposes amendments for voters",
              "Only in even years",
              "Only for bourbon policy",
            ],
            correctIndex: 1,
            explanation:
              "Kentucky has no statewide initiative; citizens ratify amendments the Legislature refers.",
            sourceLessonSlug: "ky-courts-lawmaking",
          },
          {
            prompt: "What officials run a Kentucky county?",
            options: [
              "A mayor and city council",
              "An elected county judge/executive and a fiscal court",
              "A governor-appointed board",
              "No one — counties have no government",
            ],
            correctIndex: 1,
            explanation:
              "Each Kentucky county has an elected county judge/executive and a fiscal court of magistrates or commissioners.",
            sourceLessonSlug: "ky-local-involved",
          },
          {
            prompt: "Which Kentucky city merged with its county into a consolidated 'Metro' government?",
            options: ["Lexington only", "Louisville (Louisville Metro / Jefferson County)", "Frankfort", "Bowling Green"],
            correctIndex: 1,
            explanation:
              "Louisville merged with Jefferson County into Louisville Metro — a Kentucky city-county consolidation.",
            sourceLessonSlug: "ky-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Kentucky's voting rules?",
            options: [
              "Because Kentucky has no elections office",
              "Because early-voting and ID rules changed recently and are run by county clerks — confirm at sos.ky.gov / elect.ky.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Kentucky expanded voting access recently and administers elections locally, so the state's own sites are authoritative.",
            sourceLessonSlug: "ky-local-involved",
          },
        ],
      },
    },
  ],
};
