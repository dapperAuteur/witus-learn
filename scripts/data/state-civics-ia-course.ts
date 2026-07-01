// Authored "Iowa Civics: How Your State Government Works" — the Iowa entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Iowa's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to IOWA'S OWN OFFICIAL SOURCES: the Legislature
// (legis.iowa.gov), the Secretary of State / elections (sos.iowa.gov), the Judicial
// Branch (iowacourts.gov), and the Iowa Constitution (1857).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. The
// presidential nominating calendar has shifted recently. Time-sensitive items are
// flagged and point learners to sos.iowa.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_IA_COURSE: AuthoredCourse = {
  title: "Iowa Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Iowa governs itself — and how you take part where you live. Iowa is famous for going first: its precinct caucuses have traditionally opened the presidential nominating season, giving a small state outsized attention. Iowa is also admired for something quieter but important — a nonpartisan redistricting process widely held up as a national model. You'll learn Iowa's Constitution of 1857, its plural executive, its General Assembly of 50 senators and 100 representatives, its merit-selection judiciary, its nonpartisan redistricting, and its 99 counties. Time-sensitive facts are flagged, pointing to sos.iowa.gov. Cited to Iowa's own official sources (legis.iowa.gov, sos.iowa.gov, iowacourts.gov).",
  lessons: [
    // ── Section 1: The caucuses ──────────────────────────────────────────
    {
      slug: "ia-caucuses",
      title: "1 · The Iowa caucuses: going first in presidential politics",
      section: "What Makes Iowa Unique",
      body: `Iowa's best-known civic feature is its **precinct caucuses** — neighborhood gatherings that, for decades, opened the nation's **presidential nominating season** (Iowa Secretary of State, n.d.).

**What a caucus is.** Unlike a **primary** (where you quietly cast a ballot at a polling place), an Iowa **caucus** is a **meeting.** On caucus night, neighbors gather at local precinct sites — school gyms, libraries, community centers — to **discuss candidates and party business** and to register their **presidential preference** (Iowa Secretary of State, n.d.). It's a **participatory, in-person** form of politics, run by the **political parties**, not the state elections office.

**"First in the nation."** Iowa scheduled its caucuses **first on the presidential calendar**, so candidates spent enormous time meeting Iowans face-to-face — giving a small farm state **outsized influence** and a tradition of **retail, up-close campaigning.** ⚠️ **Time-sensitive:** the presidential nominating **calendar and party rules have changed recently** (the parties have reordered early contests), so Iowa's exact "first" status varies by party and year — confirm the **current** calendar at sos.iowa.gov and the parties. Whatever the order, the **caucus format** — neighbors meeting to do politics together — remains a distinctive Iowa civic institution.

Iowa governs under its **Constitution of 1857**, and became the **29th state on December 28, 1846.**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Iowa's own government (legis.iowa.gov, sos.iowa.gov, iowacourts.gov) is the authoritative source.

**Check yourself.** How is a caucus different from a primary, and why did Iowa's caucuses get so much attention?

## Sources
- Iowa Secretary of State. (n.d.). *The Iowa caucuses and elections*. sos.iowa.gov. https://sos.iowa.gov/
- Iowa Legislature. (n.d.). *Iowa Constitution (1857)*. legis.iowa.gov. https://www.legis.iowa.gov/`,
    },

    // ── Section 2: Nonpartisan redistricting ─────────────────────────────
    {
      slug: "ia-redistricting",
      title: "2 · Iowa's nonpartisan redistricting — a national model",
      section: "What Makes Iowa Unique",
      body: `Iowa's second distinctive feature is quieter but nationally admired: its **nonpartisan redistricting process** (Iowa Legislature, n.d.).

**The problem it solves.** In most states, the **Legislature draws its own district maps**, which invites **gerrymandering** — drawing lines to favor the party in power. Iowa does it differently (Iowa Legislature, n.d.):
- A **nonpartisan state agency — the Legislative Services Agency (LSA)** — draws Iowa's legislative and congressional maps using **neutral criteria** (equal population, compact districts, respect for county and city lines), and is **forbidden from considering** past election results, incumbents' addresses, or party registration.
- The **Legislature then votes the maps up or down** (with limited ability to amend), and if it rejects them, the LSA prepares another plan.

The result is districts drawn by **professionals following neutral rules**, not by politicians protecting themselves — which is why Iowa's system is frequently cited as a **model for reducing gerrymandering.** It reflects an Iowa preference for **fair, transparent process** over partisan advantage.

Why it matters: redistricting decides **which votes matter** for a decade. Iowa shows that a state can **take the pen out of politicians' hands** and hand it to a neutral agency — a reform other states study.

**Check yourself.** Who draws Iowa's district maps, and what is that body forbidden from considering?

## Sources
- Iowa Legislature. (n.d.). *Redistricting and the Legislative Services Agency (LSA)*. legis.iowa.gov. https://www.legis.iowa.gov/`,
    },

    // ── Section 3: The executive + the General Assembly ──────────────────
    {
      slug: "ia-executive-legislature",
      title: "3 · The executive and the General Assembly",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** Iowa voters elect several statewide officials (Iowa Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** run **together on a joint ticket.**
- Voters separately elect the **Secretary of State** (who runs elections), the **Attorney General**, the **State Treasurer**, the **State Auditor**, and the **Secretary of Agriculture** (a fitting office for a major farm state).
Statewide officers serve **4-year terms.**

**Legislative — the Iowa General Assembly.** A bicameral body meeting in Des Moines (Iowa Legislature, n.d.):
- **House of Representatives — 100 members** (2-year terms), and **Senate — 50 senators** (4-year terms).
- It is a part-time citizen legislature with annual sessions.

**Judicial — merit selection plus retention.** Iowa uses the **"Missouri Plan"** (Iowa Judicial Branch, n.d.):
1. A **State Judicial Nominating Commission** screens applicants and sends the Governor a list.
2. The **Governor appoints** a judge from that list.
3. The judge later faces voters in a **nonpartisan yes/no retention election.** The **Iowa Supreme Court** has **7 justices.** (Iowa's retention system drew national attention in 2010 when voters removed three justices — a reminder that retention votes are real.)

**Veto and override.** The Governor may veto bills (and has a strong **item veto** on appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** How many members are in each chamber of the Iowa General Assembly, and how does Iowa choose its Supreme Court justices?

## Sources
- Iowa Secretary of State. (n.d.). *Statewide elected officials*. sos.iowa.gov. https://sos.iowa.gov/
- Iowa Judicial Branch. (n.d.). *Judicial selection: merit selection and retention*. iowacourts.gov. https://www.iowacourts.gov/`,
    },

    // ── Section 4: Lawmaking, local government, getting involved ─────────
    {
      slug: "ia-lawmaking-involved",
      title: "4 · How a bill becomes law, local government, and getting involved",
      section: "Get Involved",
      body: `**How a bill becomes law** (Iowa Legislature, n.d.):
1. **Introduction** in the House or Senate; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto (two-thirds override), or **item veto** appropriations.
⚠️ A note on direct democracy: Iowa has **no statewide citizen initiative** for general laws — an unusual gap for a Midwestern state. Constitutional **amendments** are proposed by the **Legislature** (which must pass them in **two consecutive General Assemblies**) and then ratified by the **voters.**

**Local government** (Iowa Legislature, n.d.):
- **99 counties** — a famously large number for the state's size — governed by elected **boards of supervisors**, plus other elected county officials.
- **Cities** provide municipal services (Iowa has a strong tradition of city home rule); **townships** and **special districts** round things out.
- **School districts** are locally run.

**Voting.** ⚠️ **Time-sensitive:** Iowa offers **early/absentee voting** and requires **ID**; it has adjusted early-voting windows and deadlines in recent years, administered by **county auditors.** Confirm the **current** rules at **sos.iowa.gov** before you vote.

**How to take part:**
- **Caucus and vote.** Attend your **precinct caucus** (a hands-on way to shape party business and, in presidential years, register a preference), then vote in elections.
- **Register and vote** — check current early-voting and ID rules at sos.iowa.gov.
- **Show up locally.** County boards of supervisors, city councils, and school boards hold public meetings.
- **Contact your legislators** in Des Moines — you have one Representative and one Senator.
- **Run** — school board, city council, and county board of supervisors are reachable local starting points.

**Check yourself.** Does Iowa have a statewide citizen initiative, and what hands-on party event can you attend?

## Sources
- Iowa Legislature. (n.d.). *How a bill becomes law; amending the constitution; local government*. legis.iowa.gov. https://www.legis.iowa.gov/
- Iowa Secretary of State. (n.d.). *Registering and voting; caucuses*. sos.iowa.gov. https://sos.iowa.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ia-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Iowa state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Iowa's neighborhood meetings that open presidential nominating season are called ___.",
            answer: "caucuses",
            accept: ["caucus", "the Iowa caucuses"],
            explanation:
              "Iowa caucuses are in-person party meetings (not ballot primaries) that traditionally went first on the calendar.",
          },
          {
            prompt:
              "Iowa's district maps are drawn by the nonpartisan Legislative Services ___ (the LSA).",
            answer: "Agency",
            accept: ["agency"],
            explanation:
              "The LSA draws maps using neutral criteria and cannot consider election results, incumbents, or party — a model for reducing gerrymandering.",
          },
          {
            prompt:
              "Iowa's current constitution is the Constitution of ___.",
            answer: "1857",
            explanation:
              "Iowa adopted its constitution in 1857; it became the 29th state in 1846.",
          },
          {
            prompt:
              "Iowa's General Assembly has a 50-member Senate and a ___-member House.",
            answer: "100",
            accept: ["one hundred"],
            explanation:
              "The Iowa House has 100 members (2-year terms) and the Senate has 50 (4-year terms).",
          },
          {
            prompt:
              "Iowa chooses judges by merit selection, then keeps them by yes/no ___ elections.",
            answer: "retention",
            explanation:
              "A nominating commission → Governor appoints → voters hold retention elections (Iowa removed three justices in 2010).",
          },
          {
            prompt:
              "TRUE or FALSE: Iowa has a statewide citizen initiative to propose new laws.",
            answer: "false",
            explanation:
              "False. Iowa has no statewide initiative; amendments come from two consecutive General Assemblies, then voters.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "ia-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How is an Iowa caucus different from a primary?",
            options: [
              "It is a quiet ballot at a polling place",
              "It is an in-person neighborhood meeting run by the parties to discuss candidates and register a preference",
              "It is decided by the Governor",
              "It is held online only",
            ],
            correctIndex: 1,
            explanation:
              "A caucus is a participatory party meeting, not a ballot primary — a distinctive Iowa institution.",
            sourceLessonSlug: "ia-caucuses",
          },
          {
            prompt: "Why did Iowa's caucuses get outsized attention?",
            options: [
              "Iowa is the largest state",
              "They traditionally went first on the presidential calendar, drawing intense retail campaigning",
              "They pick the President directly",
              "They are the only elections in Iowa",
            ],
            correctIndex: 1,
            explanation:
              "Going first gave a small state huge influence and a culture of face-to-face campaigning (though the calendar has shifted).",
            sourceLessonSlug: "ia-caucuses",
          },
          {
            prompt: "Who draws Iowa's district maps?",
            options: [
              "The Governor",
              "The nonpartisan Legislative Services Agency (LSA), using neutral criteria",
              "The political parties",
              "The Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "The LSA draws maps on neutral criteria and cannot consider election results, incumbents, or party — a national model.",
            sourceLessonSlug: "ia-redistricting",
          },
          {
            prompt: "What is the LSA forbidden from considering when drawing maps?",
            options: [
              "Population",
              "Past election results, incumbents' addresses, and party registration",
              "County lines",
              "City boundaries",
            ],
            correctIndex: 1,
            explanation:
              "Iowa's neutral process bars the LSA from using partisan data — the heart of its anti-gerrymandering model.",
            sourceLessonSlug: "ia-redistricting",
          },
          {
            prompt: "How does Iowa choose its Supreme Court justices?",
            options: [
              "Partisan elections",
              "Merit selection (commission → Governor appoints) plus retention elections",
              "The Legislature elects them",
              "Lifetime appointment",
            ],
            correctIndex: 1,
            explanation:
              "Iowa uses the Missouri Plan; its 2010 retention votes (removing three justices) showed retention is real.",
            sourceLessonSlug: "ia-executive-legislature",
          },
          {
            prompt: "How many members are in the Iowa House and Senate?",
            options: [
              "100 House / 50 Senate",
              "150 House / 30 Senate",
              "99 House / 33 Senate",
              "203 House / 50 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Iowa House has 100 members and the Senate has 50.",
            sourceLessonSlug: "ia-executive-legislature",
          },
          {
            prompt: "Does Iowa have a statewide citizen initiative?",
            options: [
              "Yes, a strong one",
              "No — amendments come from two consecutive General Assemblies, then voters",
              "Only for taxes",
              "Only during caucuses",
            ],
            correctIndex: 1,
            explanation:
              "Iowa has no statewide initiative; constitutional amendments require two General Assemblies plus voter ratification.",
            sourceLessonSlug: "ia-lawmaking-involved",
          },
          {
            prompt: "How many counties does Iowa have?",
            options: ["10", "99", "159", "254"],
            correctIndex: 1,
            explanation:
              "Iowa has 99 counties, governed by elected boards of supervisors.",
            sourceLessonSlug: "ia-lawmaking-involved",
          },
          {
            prompt: "Which statewide office fits Iowa's identity as a major farm state?",
            options: [
              "The Secretary of Agriculture",
              "The Adjutant General",
              "The Insurance Commissioner",
              "The Chief Justice",
            ],
            correctIndex: 0,
            explanation:
              "Iowa elects a Secretary of Agriculture, a fitting statewide office for a leading agricultural state.",
            sourceLessonSlug: "ia-executive-legislature",
          },
          {
            prompt: "Why does this course tell you to VERIFY Iowa's caucus calendar and voting rules?",
            options: [
              "Because Iowa has no elections office",
              "Because the presidential nominating calendar has shifted and early-voting rules change and are run by county auditors — confirm at sos.iowa.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Iowa's caucus 'first' status varies by party/year and voting rules are administered locally, so sos.iowa.gov is authoritative.",
            sourceLessonSlug: "ia-lawmaking-involved",
          },
        ],
      },
    },
  ],
};
