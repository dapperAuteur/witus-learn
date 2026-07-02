// Authored "South Dakota Civics: How Your State Government Works", the South Dakota
// entry in the per-state Civics layer on Learn.WitUS. State-level companion to the
// general Civics courses: those teach the SYSTEM; this teaches South Dakota's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to SOUTH DAKOTA'S OWN OFFICIAL SOURCES: the Legislature
// (sdlegislature.gov), the Secretary of State / elections (sdsos.gov), the Unified
// Judicial System (ujs.sd.gov), and the South Dakota Constitution (1889).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules) are flagged and point learners to sdsos.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_SD_COURSE: AuthoredCourse = {
  title: "South Dakota Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of South Dakota governs itself, and how you take part where you live. South Dakota holds a national first: in 1898 it became the FIRST state to give citizens the initiative and referendum (the power to make and repeal laws directly), years before Oregon's more famous system. You'll learn South Dakota's Constitution of 1889, its plural executive, its Legislature of 35 senators and 70 representatives, its merit-selection Supreme Court, its lack of a state income tax, and its 66 counties. Time-sensitive facts are flagged, pointing to sdsos.gov. Cited to South Dakota's own official sources (sdlegislature.gov, sdsos.gov, ujs.sd.gov).",
  lessons: [
    // ── Section 1: First initiative and referendum state ─────────────────
    {
      slug: "sd-first-initiative",
      title: "1 · South Dakota went first: the birthplace of the initiative and referendum",
      section: "What Makes South Dakota Unique",
      body: `South Dakota's claim to civic fame is a genuine national first: in **1898, South Dakota became the FIRST state in the nation to adopt the citizen initiative and referendum**: the power for **voters to make and repeal laws directly** (South Dakota Secretary of State, n.d.).

**What that means.** Years **before** Oregon's more famous "Oregon System" (1902), South Dakota amended its constitution to give citizens (South Dakota Secretary of State, n.d.):
- **Initiative:** gather signatures to put a **law** (and later a **constitutional amendment**) directly on the ballot, and
- **Referendum:** gather signatures to **reject** a law the Legislature passed.
Driven by the **Populist and farmer movements** of the 1890s (frustrated by railroads and distant power), South Dakotans decided the **people themselves should be able to legislate**, and every initiative state that followed built on what South Dakota did first.

South Dakota governs under its **Constitution of 1889**, adopted when it became a state on **November 2, 1889** (admitted the same day as North Dakota). South Dakotans still use their pioneering tools **regularly**: ballot measures are a familiar feature of elections here.

This is the through-line: South Dakota sees **direct citizen lawmaking** as a founding feature of its government, not an add-on.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but South Dakota's own government (sdlegislature.gov, sdsos.gov, ujs.sd.gov) is the authoritative source.

**Check yourself.** What national first does South Dakota hold, and in what year, and how does that compare to Oregon?

## Sources
- South Dakota Secretary of State. (n.d.). *The initiative and referendum: South Dakota's 1898 first*. sdsos.gov. https://sdsos.gov/
- South Dakota Legislature. (n.d.). *South Dakota Constitution (1889); direct democracy*. sdlegislature.gov. https://sdlegislature.gov/`,
    },

    // ── Section 2: The executive + the Legislature ───────────────────────
    {
      slug: "sd-executive-legislature",
      title: "2 · The executive and the Legislature",
      section: "The Three Branches",
      body: `**Executive: a plural executive.** South Dakota voters elect several statewide officials (South Dakota Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** run **together on a joint ticket.**
- Voters separately elect the **Secretary of State**, the **Attorney General**, the **State Treasurer**, the **State Auditor**, the **Commissioner of School and Public Lands**, and the **Public Utilities Commission.**
Statewide officers serve **4-year terms** with **term limits** (two consecutive terms for Governor).

**Legislative: the South Dakota Legislature.** A part-time **citizen legislature** meeting in Pierre (South Dakota Legislature, n.d.):
- **House of Representatives: 70 members**, and **Senate: 35 senators**, all serving **2-year terms.**
- It meets in a **short annual session** (about 40 days in the main year, fewer in the other), so legislators are part-time citizen lawmakers. Term limits apply (four consecutive 2-year terms per chamber).

**No state income tax.** Like several plains and western states, South Dakota levies **no state personal income tax**, relying on sales and other taxes, a fact that shapes its budget debates.

**Judicial: the Unified Judicial System.** Circuit courts and the **South Dakota Supreme Court** (5 justices). How South Dakota selects its justices is covered next.

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** How many members are in each chamber of the South Dakota Legislature, and does South Dakota have a state income tax?

## Sources
- South Dakota Secretary of State. (n.d.). *Statewide elected officials*. sdsos.gov. https://sdsos.gov/
- South Dakota Legislature. (n.d.). *The Legislature; sessions and term limits*. sdlegislature.gov. https://sdlegislature.gov/`,
      recallContent: [
        {
          prompt:
            "In what year did South Dakota become the first state to adopt the citizen initiative and referendum?",
          answer:
            "1898, years before Oregon's more famous 1902 system.",
        },
        {
          prompt:
            "What is the difference between the initiative and the referendum?",
          answer:
            "The initiative lets voters gather signatures to put a law or constitutional amendment on the ballot; the referendum lets voters gather signatures to reject a law the Legislature already passed.",
        },
      ],
    },

    // ── Section 3: The courts + how a bill becomes law ───────────────────
    {
      slug: "sd-courts-lawmaking",
      title: "3 · How South Dakota picks its justices, and how a bill becomes law",
      section: "Making Law",
      body: `**How South Dakota chooses its Supreme Court justices: merit selection plus retention.** South Dakota uses the **"Missouri Plan"** for its highest court (South Dakota Unified Judicial System, n.d.):
1. A **Judicial Qualifications Commission** screens applicants and recommends nominees.
2. The **Governor appoints** a justice **from that list.**
3. The justice later faces voters in a **nonpartisan yes/no retention election** (and periodically after). The **South Dakota Supreme Court** has **5 justices**, elected from districts for retention. (South Dakota **Circuit Court** trial judges, by contrast, are **elected** by voters.)

**How a bill becomes law** (South Dakota Legislature, n.d.):
1. **Introduction** in the House or Senate during the short annual session; **committee** review; **floor votes** in both chambers.
2. **Governor:** sign, veto (two-thirds override), or line-item veto appropriations.

**And remember the citizen path (Lesson 1).** As the **first initiative and referendum state**, South Dakota lets citizens **make law directly**: gather signatures to put a **statute or constitutional amendment** on the ballot (initiative), or to **reject** a law the Legislature passed (referendum). ⚠️ South Dakota has debated **raising signature or approval thresholds** for measures in recent years, so confirm the **current** rules at sdsos.gov. The takeaway: in South Dakota, the **Legislature and the voters both make law**, and the voters have done so since 1898.

**Check yourself.** How does South Dakota choose its Supreme Court justices, and what are the two ways law gets made here?

## Sources
- South Dakota Unified Judicial System. (n.d.). *Judicial selection: merit selection and retention*. ujs.sd.gov. https://ujs.sd.gov/
- South Dakota Legislature. (n.d.). *How a bill becomes law; initiative and referendum*. sdlegislature.gov. https://sdlegislature.gov/`,
      recallContent: [
        {
          prompt:
            "How many members are in South Dakota's House and Senate, and how long are their terms?",
          answer:
            "The House has 70 members and the Senate has 35, all serving 2-year terms in a part-time citizen legislature.",
        },
        {
          prompt: "Does South Dakota have a state personal income tax?",
          answer:
            "No. South Dakota levies no state personal income tax and relies on sales and other taxes.",
        },
      ],
    },

    // ── Section 4: Local government + getting involved ───────────────────
    {
      slug: "sd-local-involved",
      title: "4 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government.** South Dakota's local layers include (South Dakota Legislature, n.d.):
- **66 counties**, governed by elected **boards of county commissioners**, plus other elected county officials (sheriff, auditor, treasurer, state's attorney).
- **Cities and townships:** South Dakota keeps active **townships** in rural areas alongside incorporated **cities.**
- **School districts** and **special districts** round out local government.
- A note on tribal governments: South Dakota is home to **nine federally recognized Native American tribal nations** (including several Sioux/Lakota, Dakota, and Nakota nations), which are **sovereign governments** with their own constitutions and courts, an important part of the civic landscape, distinct from state and local government.

**Voting.** ⚠️ **Time-sensitive:** South Dakota offers **absentee/early voting**, requires **ID** (with alternatives) at the polls, and administers elections through **county auditors.** Rules and deadlines can change. Confirm the **current** details at **sdsos.gov** before you vote.

**How to take part:**
- **Register and vote:** bring ID; use absentee/early voting if it fits; check your status at sdsos.gov.
- **Use direct democracy: South Dakota's founding tool.** Sign, circulate, or organize an **initiative or referendum**; South Dakotans do so regularly.
- **Show up locally.** County commissions, city councils, township meetings, and school boards hold public meetings.
- **Contact your legislators** in Pierre, you have one Representative-district team and one Senator; note the short annual session.
- **Run:** school board, township board, city council, and county commission are reachable local starting points.

**Check yourself.** What founding-era tool can South Dakotans use to make law directly, and what sovereign governments are part of South Dakota's civic landscape?

## Sources
- South Dakota Legislature. (n.d.). *Local government: counties, cities, townships; tribal nations*. sdlegislature.gov. https://sdlegislature.gov/
- South Dakota Secretary of State. (n.d.). *Registering and voting: absentee, ID, county auditors*. sdsos.gov. https://sdsos.gov/`,
      recallContent: [
        {
          prompt: "How does South Dakota select its Supreme Court justices?",
          answer:
            "By merit selection (the Missouri Plan): a commission screens applicants, the Governor appoints from the list, and justices later face nonpartisan yes/no retention elections.",
        },
        {
          prompt: "What are the two ways law gets made in South Dakota?",
          answer:
            "Through the Legislature passing bills, and directly by the voters using the initiative and referendum.",
        },
      ],
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "sd-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about South Dakota state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "In 1898, South Dakota became the FIRST state to adopt the citizen initiative and ___.",
            answer: "referendum",
            explanation:
              "South Dakota pioneered statewide initiative and referendum in 1898, before Oregon's 1902 system.",
          },
          {
            prompt:
              "South Dakota's current constitution is the Constitution of ___.",
            answer: "1889",
            explanation:
              "South Dakota adopted its constitution in 1889, becoming a state that year alongside North Dakota.",
          },
          {
            prompt:
              "South Dakota's Legislature has a 35-member Senate and a ___-member House.",
            answer: "70",
            accept: ["seventy"],
            explanation:
              "The South Dakota House has 70 members and the Senate has 35, all on 2-year terms.",
          },
          {
            prompt:
              "South Dakota levies no state ___ tax, relying on sales and other taxes.",
            answer: "income",
            explanation:
              "South Dakota is one of the states with no personal state income tax.",
          },
          {
            prompt:
              "South Dakota's Supreme Court justices are chosen by merit selection, then kept by yes/no ___ elections.",
            answer: "retention",
            explanation:
              "A Judicial Qualifications Commission → Governor appoints → voters hold retention elections (Circuit trial judges are elected).",
          },
          {
            prompt:
              "TRUE or FALSE: Oregon adopted the initiative and referendum before South Dakota.",
            answer: "false",
            explanation:
              "False. South Dakota went first, in 1898; Oregon's more famous system came in 1902.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "sd-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What national first does South Dakota hold?",
            options: [
              "The first state income tax",
              "The first state to adopt the citizen initiative and referendum (1898)",
              "The first unicameral legislature",
              "The first to abolish courts",
            ],
            correctIndex: 1,
            explanation:
              "South Dakota was the first state to give citizens the initiative and referendum, in 1898.",
            sourceLessonSlug: "sd-first-initiative",
          },
          {
            prompt: "How does South Dakota's first compare to Oregon?",
            options: [
              "Oregon went first in 1902",
              "South Dakota went first (1898), before Oregon's more famous 1902 system",
              "They adopted it the same year",
              "Neither has initiative",
            ],
            correctIndex: 1,
            explanation:
              "South Dakota pioneered I&R in 1898, four years before Oregon's system.",
            sourceLessonSlug: "sd-first-initiative",
          },
          {
            prompt: "How many members are in the South Dakota House and Senate?",
            options: [
              "70 House / 35 Senate",
              "100 House / 40 Senate",
              "150 House / 30 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The South Dakota House has 70 members and the Senate has 35, on 2-year terms.",
            sourceLessonSlug: "sd-executive-legislature",
          },
          {
            prompt: "Does South Dakota have a state income tax?",
            options: [
              "Yes, a high one",
              "No, it relies on sales and other taxes",
              "Only for corporations",
              "Only in cities",
            ],
            correctIndex: 1,
            explanation:
              "South Dakota levies no state personal income tax.",
            sourceLessonSlug: "sd-executive-legislature",
          },
          {
            prompt: "How does South Dakota choose its Supreme Court justices?",
            options: [
              "Partisan elections",
              "Merit selection (commission → Governor appoints) plus retention elections",
              "The Legislature elects them",
              "Lifetime appointment",
            ],
            correctIndex: 1,
            explanation:
              "South Dakota uses the Missouri Plan for its Supreme Court; Circuit trial judges are elected.",
            sourceLessonSlug: "sd-courts-lawmaking",
          },
          {
            prompt: "What are the two ways law gets made in South Dakota?",
            options: [
              "Only by the Governor",
              "Through the Legislature, and directly by the voters (initiative and referendum)",
              "Only by the courts",
              "Only by counties",
            ],
            correctIndex: 1,
            explanation:
              "South Dakota's Legislature makes law, and (since 1898) so do the voters directly.",
            sourceLessonSlug: "sd-courts-lawmaking",
          },
          {
            prompt: "Which sovereign governments are part of South Dakota's civic landscape?",
            options: [
              "None",
              "Nine federally recognized Native American tribal nations with their own constitutions and courts",
              "Only city governments",
              "Only the federal government",
            ],
            correctIndex: 1,
            explanation:
              "South Dakota is home to nine tribal nations, sovereign governments distinct from state and local government.",
            sourceLessonSlug: "sd-local-involved",
          },
          {
            prompt: "How many counties does South Dakota have?",
            options: ["10", "66", "159", "254"],
            correctIndex: 1,
            explanation:
              "South Dakota has 66 counties, governed by elected commissioners.",
            sourceLessonSlug: "sd-local-involved",
          },
          {
            prompt: "What kind of legislature does South Dakota have?",
            options: [
              "A full-time, year-round legislature",
              "A part-time citizen legislature with a short annual session and term limits",
              "A unicameral legislature",
              "An appointed legislature",
            ],
            correctIndex: 1,
            explanation:
              "South Dakota's part-time citizen legislature meets in a short annual session, with term limits.",
            sourceLessonSlug: "sd-executive-legislature",
          },
          {
            prompt: "Why does this course tell you to VERIFY South Dakota's ballot-measure and voting rules?",
            options: [
              "Because South Dakota has no elections office",
              "Because signature/approval thresholds have been debated and voting is run by county auditors and can change: confirm at sdsos.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "South Dakota has revisited ballot-measure thresholds and administers voting locally, so sdsos.gov is the authoritative source.",
            sourceLessonSlug: "sd-local-involved",
          },
        ],
      },
    },
  ],
};
