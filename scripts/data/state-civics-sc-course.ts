// Authored "South Carolina Civics: How Your State Government Works", the South Carolina
// entry in the per-state Civics layer on Learn.WitUS. State-level companion to the
// general Civics courses: those teach the SYSTEM; this teaches South Carolina's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to SOUTH CAROLINA'S OWN OFFICIAL SOURCES: the Legislature
// (scstatehouse.gov), the Election Commission / Secretary of State (scvotes.gov,
// sos.sc.gov), the Judicial Branch (sccourts.org), and the SC Constitution (1895).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. South Carolina
// has been reforming its historically legislature-dominated system (e.g., joining the
// Governor and Lt. Governor on a ticket in 2018). Time-sensitive items are flagged and
// point learners to scvotes.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_SC_COURSE: AuthoredCourse = {
  title: "South Carolina Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of South Carolina governs itself, and how you take part where you live. South Carolina is the classic 'legislative state': for most of its history the General Assembly dominated government, and it still ELECTS the state's judges (South Carolina and Virginia are the two states that do). You'll learn South Carolina's Constitution of 1895, its historically weak-but-strengthening governor, its unusually large plural executive of separately elected officials, its General Assembly of 46 senators and 124 representatives, how the legislature screens and elects judges, and its 46 counties. It also notes South Carolina has no citizen initiative. Time-sensitive facts are flagged, pointing to scvotes.gov. Cited to South Carolina's own official sources (scstatehouse.gov, scvotes.gov, sccourts.org).",
  lessons: [
    // ── Section 1: The legislative state ─────────────────────────────────
    {
      slug: "sc-legislative-state",
      title: "1 · The 'legislative state': where the General Assembly long ruled",
      section: "What Makes South Carolina Unique",
      body: `South Carolina's defining civic feature is the historic **dominance of its Legislature.** For most of its history, South Carolina has been the classic **"legislative state"**, a place where the **General Assembly**, not the Governor, held most of the power (South Carolina Legislature, n.d.).

South Carolina governs under its **Constitution of 1895** (its seventh), and it became the **8th state on May 23, 1788.** The 1895 constitution deliberately created a **very weak Governor** and concentrated authority in the Legislature. The legacy is still visible today (South Carolina Legislature, n.d.):
- The **General Assembly elects the state's judges** (you'll see this in a later lesson): South Carolina and **Virginia** are the only two states that do.
- Many boards and offices were long filled by the Legislature, and the Governor historically shared executive power with **many separately elected officials** rather than controlling the branch.

Over recent decades South Carolina has **reformed** toward a stronger Governor (for example, in **2018 the Governor and Lieutenant Governor began running together on a single ticket**, rather than being elected separately). ⚠️ **Time-sensitive:** these reforms are ongoing, so confirm the **current** structure at scstatehouse.gov rather than assuming.

Why this leads the course: nearly every distinctive feature of South Carolina government (legislature-elected judges, a diffuse elected executive) traces to this **legislative-supremacy** tradition. Keep it in mind as the through-line.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but South Carolina's own government (scstatehouse.gov, scvotes.gov, sccourts.org) is the authoritative source.

**Check yourself.** What does it mean that South Carolina is a "legislative state," and name one lasting sign of that tradition.

## Sources
- South Carolina Legislature. (n.d.). *Constitution of South Carolina (1895); the General Assembly*. scstatehouse.gov. https://www.scstatehouse.gov/
- South Carolina Judicial Branch. (n.d.). *Judicial selection by the General Assembly*. sccourts.org. https://www.sccourts.org/`,
    },

    // ── Section 2: The plural executive ──────────────────────────────────
    {
      slug: "sc-executive",
      title: "2 · A large plural executive (a legacy of the weak governor)",
      section: "The Three Branches",
      recallContent: [
        {
          prompt:
            "What does it mean that South Carolina is a 'legislative state'?",
          answer:
            "For most of its history the General Assembly, not the Governor, held most of the power. The Constitution of 1895 deliberately created a very weak Governor and concentrated authority in the Legislature.",
        },
        {
          prompt:
            "Name one lasting sign of South Carolina's legislative tradition.",
          answer:
            "The General Assembly elects the state's judges (South Carolina and Virginia are the only two states that do), and the Governor historically shared executive power with many separately elected officials.",
        },
      ],
      body: `Because the 1895 constitution distrusted a strong Governor, South Carolina spreads executive power across **many separately elected statewide officials**, a large **plural executive** (South Carolina Legislature, n.d.). Voters elect the:
- **Governor** (and, since 2018, the **Lieutenant Governor** on the same ticket),
- **Attorney General**,
- **Secretary of State**,
- **State Treasurer**,
- **Comptroller General**,
- **Superintendent of Education**,
- **Commissioner of Agriculture**,
- and (historically) the **Adjutant General**, though that office was **changed to a gubernatorial appointment** by a recent reform (a good example of the ongoing move toward a stronger Governor).

Because so many officials are elected on their own, the Governor has historically **not controlled** the executive branch the way a governor does in, say, New Jersey. Reforms have **strengthened** the office over time (joining the Lt. Governor to the ticket, making the Adjutant General appointed), but South Carolina still has one of the **more fragmented elected executives** in the country.

The **Judicial** branch (elected by the Legislature, next) and the **Legislative** branch (the General Assembly) complete the three.

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the General Assembly overrides with a **two-thirds vote of each chamber.**

**Check yourself.** Why does South Carolina elect so many separate statewide officials, and name one recent reform that strengthened the Governor.

## Sources
- South Carolina Legislature. (n.d.). *Statewide elected officials; executive-branch reforms*. scstatehouse.gov. https://www.scstatehouse.gov/`,
    },

    // ── Section 3: The Legislature elects the judges ─────────────────────
    {
      slug: "sc-courts",
      title: "3 · How South Carolina picks its judges (the Legislature elects them)",
      section: "The Three Branches",
      recallContent: [
        {
          prompt:
            "Why does South Carolina have such a large 'plural executive'?",
          answer:
            "Because the 1895 constitution distrusted a strong Governor, executive power is spread across many separately elected statewide officials (Attorney General, Secretary of State, Treasurer, Comptroller General, and more), so the Governor historically did not control the branch.",
        },
        {
          prompt:
            "What vote does the General Assembly need to override the Governor's veto?",
          answer:
            "A two-thirds vote of each chamber. The Governor may sign, veto, or line-item veto appropriations.",
        },
      ],
      body: `Here is the clearest living sign of South Carolina's legislative tradition: **the General Assembly elects the state's judges** (South Carolina Judicial Branch, n.d.).

**How it works.** South Carolina and **Virginia** are the only two states where the **Legislature** is the primary body that chooses judges, but South Carolina adds a **screening step**:
1. A **Judicial Merit Selection Commission** reviews and screens candidates for qualifications and reports those it finds qualified.
2. The **General Assembly then elects** the judge from among the screened candidates, by a vote of both houses meeting together.
- The **South Carolina Supreme Court** has **5 justices**, elected to **10-year terms**; Court of Appeals and Circuit judges are likewise elected by the General Assembly.
- (Some lower-court judges, like magistrates, are appointed by the Governor with Senate advice.)

Why it matters: it means South Carolina judges answer, for re-election, to the **legislators**, not to the voters and not to the Governor. Combined with the historically weak Governor, this is why South Carolina is called a **legislative state.** If you're comparing states, note the pairing: **South Carolina and Virginia elect judges through the Legislature; almost everyone else elects them at the ballot or appoints them.**

**Check yourself.** Who elects South Carolina's Supreme Court justices, and what screening step comes first?

## Sources
- South Carolina Judicial Branch. (n.d.). *Judicial selection: the Judicial Merit Selection Commission and legislative election*. sccourts.org. https://www.sccourts.org/
- South Carolina Legislature. (n.d.). *Constitution of South Carolina, Article V (Judicial)*. scstatehouse.gov. https://www.scstatehouse.gov/`,
    },

    // ── Section 4: How a bill becomes law ────────────────────────────────
    {
      slug: "sc-bill-to-law",
      title: "4 · How a bill becomes a South Carolina law",
      section: "Making Law",
      recallContent: [
        {
          prompt:
            "Who elects South Carolina's judges, and what screening step comes first?",
          answer:
            "The General Assembly elects them. First a Judicial Merit Selection Commission screens candidates for qualifications and reports those it finds qualified, and then the Assembly elects a judge from that screened list.",
        },
        {
          prompt:
            "How many justices sit on the South Carolina Supreme Court, and for how long?",
          answer:
            "Five justices, elected by the General Assembly to 10-year terms. South Carolina and Virginia are the only two states where the Legislature elects the judges.",
        },
      ],
      body: `In South Carolina, laws are made **through the General Assembly**. There is **no citizen initiative** to go around it (South Carolina Legislature, n.d.).

**How a bill becomes law:**
1. **Introduction.** A member introduces a bill in the House or Senate.
2. **Committee.** Hearings, amendments, and a committee vote.
3. **Floor votes.** Both chambers must pass the bill (the South Carolina Senate has a strong tradition of the **filibuster** and individual senators' influence).
4. **Governor.** The Governor may **sign**, **veto**, or **line-item veto** appropriations; the General Assembly overrides with a **two-thirds vote of each chamber.**

**The General Assembly.** South Carolina's Legislature is bicameral (South Carolina Legislature, n.d.):
- **House of Representatives: 124 members**, elected to **2-year terms.**
- **Senate: 46 senators**, elected to **4-year terms.**

**No citizen initiative or statewide referendum by petition.** South Carolina citizens **cannot** put a statute or amendment on the ballot by gathering signatures. Constitutional **amendments** run through the Legislature: the General Assembly proposes an amendment by a **two-thirds vote**, voters ratify it, and then the Legislature **re-ratifies** it, a distinctive extra step. So South Carolina voters have a **final say** on amendments the Legislature sends, but cannot **start** one themselves.

**Check yourself.** Can South Carolina citizens put a law on the ballot by petition? How many members are in the House and Senate?

## Sources
- South Carolina Legislature. (n.d.). *How a bill becomes law; amending the constitution; the General Assembly*. scstatehouse.gov. https://www.scstatehouse.gov/`,
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "sc-local-involved",
      title: "5 · Local government and how to take part",
      section: "Get Involved",
      recallContent: [
        {
          prompt:
            "How many members are in the South Carolina House and Senate, and what are their terms?",
          answer:
            "The House has 124 members elected to 2-year terms; the Senate has 46 senators elected to 4-year terms.",
        },
        {
          prompt:
            "Can South Carolina citizens put a law on the ballot by petition?",
          answer:
            "No. There is no citizen initiative. Amendments run through the General Assembly (proposed by a two-thirds vote), voters ratify them, and then the Legislature re-ratifies, a distinctive extra step.",
        },
      ],
      body: `**Local government.** South Carolina's local layers include (South Carolina Legislature, n.d.):
- **46 counties**, governed by elected **county councils** (South Carolina moved toward "home rule" for counties with the **Home Rule Act of 1975**, giving counties more self-governing power after the legislative era), plus separately elected officials (sheriff, clerk, auditor, treasurer).
- **Municipalities** (cities and towns) with council forms of government.
- **School districts** and **special-purpose districts**. South Carolina historically had many special districts, a legacy of the legislative-state era.

**Voting.** ⚠️ **Time-sensitive:** South Carolina requires **photo ID** to vote in person (with a reasonable-impediment affidavit option), offers **early in-person voting**, and permits **absentee** voting under qualifying reasons. These rules change and are administered by **county election offices.** Confirm the **current** rules at **scvotes.gov** before you vote.

**How to take part:**
- **Register and vote**: bring photo ID; use early voting; check your status at scvotes.gov.
- **Show up locally.** County councils, city councils, and school boards hold public meetings, and since Home Rule, counties decide more locally than in the legislative-state past.
- **Contact your legislators** in Columbia: you have one Representative and one Senator; given the Legislature's power, this matters especially in South Carolina.
- **Watch judicial elections**: because the General Assembly elects judges, following those votes is a real (if often overlooked) part of civic life here.
- **Run**: school board, city council, and county council are reachable local starting points.

**Check yourself.** What did the Home Rule Act of 1975 change, and where should you confirm current voting rules?

## Sources
- South Carolina Legislature. (n.d.). *Local government and the Home Rule Act (1975)*. scstatehouse.gov. https://www.scstatehouse.gov/
- South Carolina Election Commission. (n.d.). *Voting in South Carolina: photo ID, early and absentee voting*. scvotes.gov. https://www.scvotes.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "sc-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about South Carolina state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "South Carolina is the classic '___ state,' where the General Assembly historically held most power.",
            answer: "legislative",
            explanation:
              "The 1895 constitution created a weak governor and concentrated power in the Legislature, the 'legislative state.'",
          },
          {
            prompt:
              "South Carolina and Virginia are the only two states where the ___ elects the judges.",
            answer: "legislature",
            accept: ["Legislature", "General Assembly", "general assembly"],
            explanation:
              "After a Judicial Merit Selection Commission screens candidates, the General Assembly elects judges (SC Supreme Court: 10-year terms).",
          },
          {
            prompt:
              "South Carolina's current constitution is the Constitution of ___.",
            answer: "1895",
            explanation:
              "The 1895 constitution, South Carolina's seventh, deliberately created a weak governor.",
          },
          {
            prompt:
              "In 2018 South Carolina joined the Governor and ___ Governor on a single ticket (a step toward a stronger governor).",
            answer: "Lieutenant",
            accept: ["lieutenant", "Lt.", "Lt"],
            explanation:
              "Previously elected separately, the Governor and Lieutenant Governor now run together, one of several reforms strengthening the office.",
          },
          {
            prompt:
              "The 1975 Home ___ Act gave South Carolina counties more self-governing power.",
            answer: "Rule",
            accept: ["rule"],
            explanation:
              "The Home Rule Act of 1975 shifted authority toward elected county councils, moving away from the legislative-state model.",
          },
          {
            prompt:
              "TRUE or FALSE: South Carolina citizens can put a new law on the ballot through a citizen initiative.",
            answer: "false",
            explanation:
              "False. South Carolina has no citizen initiative; the General Assembly proposes amendments (with an unusual re-ratification step) for voters.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "sc-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What does it mean that South Carolina is a 'legislative state'?",
            options: [
              "It has no legislature",
              "The General Assembly has historically dominated government, with a weak governor",
              "Only the Governor makes law",
              "Judges write all laws",
            ],
            correctIndex: 1,
            explanation:
              "The 1895 constitution concentrated power in the Legislature and created a weak governor, the 'legislative state.'",
            sourceLessonSlug: "sc-legislative-state",
          },
          {
            prompt: "Which states elect their judges through the Legislature?",
            options: [
              "Every state",
              "South Carolina and Virginia",
              "Only California",
              "No states do this",
            ],
            correctIndex: 1,
            explanation:
              "South Carolina and Virginia are the two states where the Legislature elects judges (South Carolina adds a screening commission first).",
            sourceLessonSlug: "sc-courts",
          },
          {
            prompt: "What screening step precedes a South Carolina judicial election?",
            options: [
              "A public referendum",
              "The Judicial Merit Selection Commission screens candidates for qualifications",
              "A gubernatorial veto",
              "A jury trial",
            ],
            correctIndex: 1,
            explanation:
              "The Judicial Merit Selection Commission reports qualified candidates before the General Assembly elects a judge.",
            sourceLessonSlug: "sc-courts",
          },
          {
            prompt: "Why does South Carolina elect so many separate statewide officials?",
            options: [
              "To make the Governor stronger",
              "Because its tradition of a weak governor spread executive power across many elected officers",
              "Because the federal government requires it",
              "Because it has no Governor",
            ],
            correctIndex: 1,
            explanation:
              "Distrust of a strong governor produced a large plural executive of independently elected officials.",
            sourceLessonSlug: "sc-executive",
          },
          {
            prompt: "Which reform strengthened South Carolina's Governor in 2018?",
            options: [
              "Abolishing the Legislature",
              "Joining the Governor and Lieutenant Governor on a single ticket",
              "Making the Governor a judge",
              "Ending elections",
            ],
            correctIndex: 1,
            explanation:
              "Since 2018 the Governor and Lieutenant Governor run together, one of several steps toward a stronger executive.",
            sourceLessonSlug: "sc-executive",
          },
          {
            prompt: "How many members are in the South Carolina House and Senate?",
            options: [
              "124 House / 46 Senate",
              "100 House / 40 Senate",
              "150 House / 50 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The South Carolina House has 124 members (2-year terms) and the Senate has 46 (4-year terms).",
            sourceLessonSlug: "sc-bill-to-law",
          },
          {
            prompt: "Can South Carolina citizens put a law on the ballot by petition?",
            options: [
              "Yes, a strong initiative",
              "No, there is no citizen initiative; amendments run through the General Assembly",
              "Only in even years",
              "Only for schools",
            ],
            correctIndex: 1,
            explanation:
              "South Carolina has no citizen initiative; the Legislature proposes amendments (with a re-ratification step) for voter approval.",
            sourceLessonSlug: "sc-bill-to-law",
          },
          {
            prompt: "What did the Home Rule Act of 1975 do?",
            options: [
              "Abolished counties",
              "Gave South Carolina counties more self-governing power through elected county councils",
              "Created a state income tax",
              "Made the Governor a judge",
            ],
            correctIndex: 1,
            explanation:
              "The Home Rule Act shifted authority to elected county councils, easing the legislative-state control of local matters.",
            sourceLessonSlug: "sc-local-involved",
          },
          {
            prompt: "Which constitution governs South Carolina today?",
            options: [
              "The Constitution of 1776",
              "The Constitution of 1895",
              "The Constitution of 1970",
              "It uses the federal constitution only",
            ],
            correctIndex: 1,
            explanation:
              "South Carolina's seventh constitution, adopted in 1895, created its weak-governor, legislature-centered system.",
            sourceLessonSlug: "sc-legislative-state",
          },
          {
            prompt: "Why does this course tell you to VERIFY South Carolina's structure and voting rules?",
            options: [
              "Because South Carolina has no government website",
              "Because the state is actively reforming its executive branch and voting rules change and are run by counties: confirm at scstatehouse.gov / scvotes.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "South Carolina's move toward a stronger governor is ongoing and voting rules are administered locally, so the state's own sites are authoritative.",
            sourceLessonSlug: "sc-legislative-state",
          },
        ],
      },
    },
  ],
};
