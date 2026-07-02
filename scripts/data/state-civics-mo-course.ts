// Authored "Missouri Civics: How Your State Government Works", the Missouri entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Missouri's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to MISSOURI'S OWN OFFICIAL SOURCES: the General
// Assembly (house.mo.gov / senate.mo.gov), the Secretary of State / elections
// (sos.mo.gov), the Courts (courts.mo.gov), and the Missouri Constitution (1945).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Missouri gave
// the nation the "Missouri Plan" for judges and uses initiative + referendum. Time-
// sensitive items (voter ID, ballot measures) are flagged and point to sos.mo.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_MO_COURSE: AuthoredCourse = {
  title: "Missouri Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Missouri governs itself, and how you take part where you live. Missouri gave American government a nationally copied idea: the 'Missouri Plan' for choosing judges by merit selection plus retention elections, now used in some form by many states. You'll learn Missouri's Constitution of 1945, its plural executive of six statewide officers, its General Assembly of 34 senators and 163 representatives, its citizen initiative and referendum, and its counties and independent city of St. Louis. Time-sensitive facts (voter ID, ballot measures) are flagged, pointing to sos.mo.gov. Cited to Missouri's own official sources (house.mo.gov, senate.mo.gov, sos.mo.gov, courts.mo.gov).",
  lessons: [
    // ── Section 1: The Missouri Plan ─────────────────────────────────────
    {
      slug: "mo-missouri-plan",
      title: "1 · The 'Missouri Plan': how Missouri taught the nation to pick judges",
      section: "What Makes Missouri Unique",
      body: `Missouri's biggest contribution to American government is a way of **choosing judges**, so influential it carries the state's name nationwide: the **"Missouri Plan."**

Missouri governs under its **Constitution of 1945** (its fourth), and Missouri became the **24th state on August 10, 1821** (as part of the Missouri Compromise you may recall from Maine's lesson). But the idea that made Missouri famous came in **1940**, when Missouri voters adopted **merit selection with retention elections** for many judges (Missouri Courts, n.d.).

**How the Missouri Plan works** (Missouri Courts, n.d.):
1. **A nonpartisan nominating commission** reviews applicants for a judgeship and sends the Governor a short list of the most qualified.
2. The **Governor appoints** a judge **from that list**, not from the whole field.
3. After serving a short time, the judge faces voters in a **nonpartisan yes/no "retention" election**, and again periodically after that.

The goal is to blend **professional merit** (the commission screens for qualifications) with **public accountability** (voters can remove a judge), while avoiding big-money, openly partisan judicial campaigns. **Many states copied it**, which is why, when you studied Colorado, Nebraska, or Alaska, you met the same "commission → appoint → retain" method. It started here.

⚠️ In Missouri the Plan covers the **appellate courts and some large urban trial courts**; **many other Missouri trial judges are still elected** in partisan races, a split worth confirming at courts.mo.gov.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Missouri's own government (house.mo.gov, senate.mo.gov, sos.mo.gov, courts.mo.gov) is the authoritative source.

**Check yourself.** What are the three steps of the Missouri Plan, and why is it named for Missouri?

## Sources
- Missouri Courts. (n.d.). *The Missouri Nonpartisan Court Plan (merit selection and retention)*. courts.mo.gov. https://www.courts.mo.gov/
- Missouri Secretary of State. (n.d.). *Missouri government and the 1945 Constitution*. sos.mo.gov. https://www.sos.mo.gov/`,
    },

    // ── Section 2: The executive ─────────────────────────────────────────
    {
      slug: "mo-executive",
      title: "2 · Missouri's plural executive: six statewide officers",
      section: "The Three Branches",
      recallContent: [
        {
          prompt: "What are the three steps of the Missouri Plan for choosing judges?",
          answer:
            "A nonpartisan nominating commission sends the Governor a short list of the most qualified applicants, the Governor appoints a judge from that list, and the judge then faces voters in periodic nonpartisan yes/no retention elections.",
        },
        {
          prompt: "Why is this merit-selection method named the 'Missouri Plan'?",
          answer:
            "Missouri adopted it first, in 1940, and many other states later copied the same nominate, appoint, and retain model, so it kept Missouri's name.",
        },
      ],
      body: `Missouri has a **plural executive**: voters elect **six** separate statewide officials, so executive power is divided among independently elected officials (Missouri Secretary of State, n.d.):

1. **Governor**: the chief executive.
2. **Lieutenant Governor**: elected **separately** (can be a different party than the Governor); presides over the Senate.
3. **Secretary of State**: runs elections and keeps state records.
4. **State Auditor**: audits government (notably, in Missouri the Auditor is the **only statewide office regularly elected in a presidential-year cycle offset** from the others in some periods, but its core job is independent oversight).
5. **State Treasurer**: manages state funds.
6. **Attorney General**: the state's lawyer.

Because these officials are elected on their own, Missouri, like Washington or Illinois, can end up with a **Governor of one party and other statewide officers of another**, and they can check one another.

The **Judicial** branch (chosen largely by the Missouri Plan, Lesson 1) and the **Legislative** branch (the General Assembly, next) complete the three.

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the General Assembly overrides with a **two-thirds vote of each chamber**, sometimes in a dedicated **veto session** in September.

**Check yourself.** Name three of the six statewide executives Missouri voters elect, and explain why they can be from different parties.

## Sources
- Missouri Secretary of State. (n.d.). *Statewide elected officials*. sos.mo.gov. https://www.sos.mo.gov/
- Missouri General Assembly. (n.d.). *Constitution of Missouri, Article IV (Executive)*. house.mo.gov. https://house.mo.gov/`,
    },

    // ── Section 3: The Legislature + how a bill becomes law ──────────────
    {
      slug: "mo-legislature",
      title: "3 · The General Assembly and how a bill becomes law",
      section: "Making Law",
      recallContent: [
        {
          prompt: "How many statewide executive officers do Missouri voters elect, and what is that arrangement called?",
          answer:
            "Six, an arrangement called a plural executive: the Governor, Lieutenant Governor, Secretary of State, State Auditor, State Treasurer, and Attorney General.",
        },
        {
          prompt: "Why can Missouri's Governor and other statewide officers be from different parties?",
          answer:
            "Because voters elect each of the six officers separately rather than having the Governor choose them, so they can come from different parties and check one another.",
        },
      ],
      body: `**Legislative: the Missouri General Assembly.** A bicameral body meeting in Jefferson City (Missouri General Assembly, n.d.):
- **House of Representatives: 163 representatives**, elected to **2-year terms.**
- **Senate: 34 senators**, elected to **4-year terms.**
- Missouri has **term limits**: a total of **8 years in each chamber (16 years total)** in the General Assembly.

**How a bill becomes law:**
1. **Introduction.** A legislator introduces a bill in the House or Senate.
2. **Committee.** Hearings, amendments, and a committee vote.
3. **Floor votes.** Both chambers must pass the bill (the Missouri Senate is known for the **filibuster**, which shapes what passes).
4. **Governor.** The Governor may **sign**, **veto**, or **line-item veto** appropriations; a **two-thirds** override is possible in each chamber.

**Direct democracy, too.** Missouri pairs its Legislature with **citizen tools** (Missouri Secretary of State, n.d.):
- **Initiative**: citizens gather signatures to put a **statute or a constitutional amendment** on the ballot.
- **Referendum**: voters can **reject** a law the Legislature passed.
Missouri voters have used the initiative for major decisions, so **ballot measures are a real feature** of Missouri civics.

**Check yourself.** How many members sit in each chamber of the General Assembly, and what two direct-democracy tools do Missouri citizens have?

## Sources
- Missouri General Assembly. (n.d.). *How a bill becomes law; term limits*. senate.mo.gov. https://www.senate.mo.gov/
- Missouri Secretary of State. (n.d.). *Initiative and referendum in Missouri*. sos.mo.gov. https://www.sos.mo.gov/`,
    },

    // ── Section 4: Local government + independent St. Louis ──────────────
    {
      slug: "mo-local-government",
      title: "4 · Local government: counties, charters, and the independent city of St. Louis",
      section: "Local Government",
      recallContent: [
        {
          prompt: "How many members sit in each chamber of the Missouri General Assembly, and how long are their terms?",
          answer:
            "The House of Representatives has 163 members elected to 2-year terms, and the Senate has 34 members elected to 4-year terms, with a limit of 8 years per chamber.",
        },
        {
          prompt: "What two direct-democracy tools do Missouri citizens have?",
          answer:
            "The initiative, used to place a statute or constitutional amendment on the ballot, and the referendum, used to reject a law the Legislature passed.",
        },
      ],
      body: `Missouri's local government has a distinctive quirk in one of its biggest cities (Missouri General Assembly, n.d.):

- **114 counties**: governed by an elected **county commission** plus separately elected officials (sheriff, clerk, collector, assessor, prosecuting attorney). Some larger counties operate under **home-rule charters.**
- ⚠️ **Plus one independent city: St. Louis.** The **City of St. Louis is NOT part of any county**: it is an **independent city**, having separated from St. Louis County in **1876.** So Missouri has "114 counties and one independent city" (you'll sometimes see "115 first-class subdivisions"). This is the same independent-city idea you met in Virginia, but Missouri has essentially just **one**, St. Louis, which is why locals distinguish **"the City" (St. Louis City) from "the County" (St. Louis County)** as two separate governments.
- **Cities, towns, and villages** provide local services; Missouri has a strong tradition of municipal home rule for larger cities (including **Kansas City**).
- **School districts and special districts** round out local government.

The practical effect: in most of Missouri your county is a key unit, but if you live in **St. Louis City**, your city **is** your county-equivalent, a genuine local-government peculiarity.

**Check yourself.** How many counties does Missouri have, and what is unusual about the City of St. Louis?

## Sources
- Missouri General Assembly. (n.d.). *Local government: counties, home-rule charters, and the independent City of St. Louis*. house.mo.gov. https://house.mo.gov/
- Missouri Secretary of State. (n.d.). *Counties and the City of St. Louis*. sos.mo.gov. https://www.sos.mo.gov/`,
    },

    // ── Section 5: Elections & getting involved ──────────────────────────
    {
      slug: "mo-elections-involved",
      title: "5 · Elections and how to take part",
      section: "Get Involved",
      recallContent: [
        {
          prompt: "How many counties does Missouri have, and who governs a county?",
          answer:
            "Missouri has 114 counties, each governed by an elected county commission plus separately elected officials such as the sheriff, clerk, collector, assessor, and prosecuting attorney.",
        },
        {
          prompt: "What is unusual about the City of St. Louis?",
          answer:
            "It is an independent city that is not part of any county, having separated from St. Louis County in 1876, so 'the City' and 'the County' of St. Louis are two separate governments.",
        },
      ],
      body: `**Voting in Missouri.** ⚠️ **Time-sensitive:** Missouri requires a **photo ID** to vote in person (with provisional-ballot fallbacks), offers **in-person absentee/early voting** in the period before Election Day, and permits **absentee voting** under certain conditions. These rules have changed more than once and are administered by **county clerks and election boards.** Confirm the **current** ID, early-voting, and absentee rules at **sos.mo.gov** or your local election authority before you vote (Missouri Secretary of State, n.d.).

**How to take part:**
- **Register and vote**: bring photo ID for in-person voting; use early/absentee options if they fit; check your status at sos.mo.gov.
- **Use direct democracy.** Sign or circulate an **initiative** (statute or amendment) or a **referendum**. Missouri voters decide major questions this way.
- **Show up locally.** County commissions, city councils, and school boards hold public meetings; in St. Louis, remember the **City** and the **County** are separate governments.
- **Contact your legislators** in Jefferson City, you have one Representative and one Senator.
- **Weigh in on judges.** Because of the Missouri Plan, you get a **yes/no retention vote** on many judges, an often-overlooked part of your ballot worth researching.
- **Run**: school board, city council, and county offices are reachable local starting points.

**Check yourself.** What kind of vote does the Missouri Plan give you on many judges, and where should you confirm current voting rules?

## Sources
- Missouri Secretary of State. (n.d.). *Voting in Missouri: photo ID, absentee and early voting, registration*. sos.mo.gov. https://www.sos.mo.gov/
- Missouri Courts. (n.d.). *Retention elections under the Nonpartisan Court Plan*. courts.mo.gov. https://www.courts.mo.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "mo-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Missouri state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Missouri's nationally copied method of choosing judges by merit selection plus retention is called the Missouri ___.",
            answer: "Plan",
            accept: ["plan"],
            explanation:
              "The Missouri Plan (1940): a commission nominates, the Governor appoints, and voters retain or remove judges, copied by many states.",
          },
          {
            prompt:
              "Under the Missouri Plan, after a nominating commission's list, the ___ appoints the judge.",
            answer: "Governor",
            accept: ["governor"],
            explanation:
              "The Governor must choose from the commission's short list of the most qualified applicants.",
          },
          {
            prompt: "Missouri's current constitution is the Constitution of ___.",
            answer: "1945",
            explanation:
              "Missouri's fourth constitution, adopted in 1945, still governs the state.",
          },
          {
            prompt:
              "Missouri voters elect ___ statewide executive officers (a plural executive).",
            answer: "six",
            accept: ["6"],
            explanation:
              "Governor, Lieutenant Governor, Secretary of State, Auditor, Treasurer, and Attorney General.",
          },
          {
            prompt:
              "The City of St. Louis is unusual because it is not part of any ___.",
            answer: "county",
            explanation:
              "St. Louis City separated from St. Louis County in 1876 and is an independent city: 'the City' and 'the County' are separate governments.",
          },
          {
            prompt:
              "TRUE or FALSE: Missouri citizens can put a constitutional amendment on the ballot by initiative petition.",
            answer: "true",
            explanation:
              "True. Missouri's initiative lets citizens propose statutes AND constitutional amendments; the referendum lets them reject laws.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "mo-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the 'Missouri Plan'?",
            options: [
              "A state highway system",
              "A method of choosing judges: merit-selection nomination, gubernatorial appointment, then retention elections",
              "Missouri's tax code",
              "A plan to split the state in two",
            ],
            correctIndex: 1,
            explanation:
              "The Missouri Plan (1940) blends a nominating commission, gubernatorial appointment, and yes/no retention votes, copied nationwide.",
            sourceLessonSlug: "mo-missouri-plan",
          },
          {
            prompt: "Why is the plan named for Missouri?",
            options: [
              "Missouri banned it",
              "Missouri adopted it first (1940) and many states copied it",
              "It only works in Missouri",
              "It was named by Congress",
            ],
            correctIndex: 1,
            explanation:
              "Missouri pioneered merit selection with retention in 1940; the model spread, keeping Missouri's name.",
            sourceLessonSlug: "mo-missouri-plan",
          },
          {
            prompt: "How many statewide executive officers do Missouri voters elect?",
            options: ["One", "Three", "Six", "Twelve"],
            correctIndex: 2,
            explanation:
              "Missouri elects six: Governor, Lieutenant Governor, Secretary of State, Auditor, Treasurer, and Attorney General.",
            sourceLessonSlug: "mo-executive",
          },
          {
            prompt: "Which constitution governs Missouri today?",
            options: [
              "The Constitution of 1820",
              "The Constitution of 1945",
              "The Constitution of 1875",
              "It uses the federal constitution only",
            ],
            correctIndex: 1,
            explanation:
              "Missouri's fourth constitution, adopted in 1945, is in force.",
            sourceLessonSlug: "mo-missouri-plan",
          },
          {
            prompt: "How many members are in the Missouri House and Senate?",
            options: [
              "163 House / 34 Senate",
              "100 House / 40 Senate",
              "120 House / 60 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Missouri House has 163 members (2-year terms) and the Senate has 34 (4-year terms), with 8-year term limits per chamber.",
            sourceLessonSlug: "mo-legislature",
          },
          {
            prompt: "What direct-democracy tools do Missouri citizens have?",
            options: [
              "None",
              "Initiative (statutes and amendments) and referendum",
              "Only recall of the Governor",
              "Only advisory polls",
            ],
            correctIndex: 1,
            explanation:
              "Missouri citizens can initiate statutes and constitutional amendments and can reject laws by referendum.",
            sourceLessonSlug: "mo-legislature",
          },
          {
            prompt: "What is unusual about the City of St. Louis?",
            options: [
              "It is the state capital",
              "It is an independent city, not part of any county (separated from St. Louis County in 1876)",
              "It has no government",
              "It governs the whole state",
            ],
            correctIndex: 1,
            explanation:
              "St. Louis City is an independent city; 'the City' and 'the County' of St. Louis are separate governments.",
            sourceLessonSlug: "mo-local-government",
          },
          {
            prompt: "How many counties does Missouri have?",
            options: ["64", "95", "114", "254"],
            correctIndex: 2,
            explanation:
              "Missouri has 114 counties plus the independent City of St. Louis.",
            sourceLessonSlug: "mo-local-government",
          },
          {
            prompt: "What special vote does the Missouri Plan give citizens on many judges?",
            options: [
              "A vote to set their salary",
              "A nonpartisan yes/no retention vote",
              "A vote to write their opinions",
              "No vote at all",
            ],
            correctIndex: 1,
            explanation:
              "Under the Missouri Plan, voters cast a yes/no retention vote to keep or remove many judges.",
            sourceLessonSlug: "mo-elections-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Missouri's voting rules?",
            options: [
              "Because Missouri has no elections office",
              "Because photo-ID and early/absentee rules have changed and are run by county clerks (confirm at sos.mo.gov)",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Missouri's voting rules have changed and are administered locally, so sos.mo.gov is the authoritative, current source.",
            sourceLessonSlug: "mo-elections-involved",
          },
        ],
      },
    },
  ],
};
