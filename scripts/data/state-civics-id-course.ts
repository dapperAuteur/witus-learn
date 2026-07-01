// Authored "Idaho Civics: How Your State Government Works" — the Idaho entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Idaho's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to IDAHO'S OWN OFFICIAL SOURCES: the Legislature
// (legislature.idaho.gov), the Secretary of State / elections (sos.idaho.gov), the
// Courts (isc.idaho.gov), and the Idaho Constitution (1890).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules, initiative thresholds) are flagged and point learners to
// sos.idaho.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_ID_COURSE: AuthoredCourse = {
  title: "Idaho Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Idaho governs itself — and how you take part where you live. You'll learn Idaho's Constitution of 1890; its plural executive; its part-time citizen Legislature of 35 senators and 70 representatives, elected from 35 shared districts (each district elects one senator and two representatives); its citizen initiative and referendum, which come with a demanding, geographically distributed signature requirement; its nonpartisan elected judiciary; and its 44 counties. Time-sensitive facts are flagged, pointing to sos.idaho.gov. Cited to Idaho's own official sources (legislature.idaho.gov, sos.idaho.gov, isc.idaho.gov).",
  lessons: [
    // ── Section 1: Constitution + shared districts ───────────────────────
    {
      slug: "id-constitution-districts",
      title: "1 · Idaho's Constitution of 1890 and its shared legislative districts",
      section: "The Idaho Constitution",
      body: `Idaho governs under its **Constitution of 1890**, adopted when Idaho became the **43rd state on July 3, 1890.** A rugged, mountainous state, Idaho built a **part-time "citizen legislature"** and strong **direct democracy** into its system (Idaho Legislature, n.d.).

**A distinctive district design.** Idaho shares an unusual structure with Arizona, Washington, New Mexico, and New Jersey: it uses **35 legislative districts, and EACH district elects ONE senator and TWO representatives** (Idaho Legislature, n.d.). So:
- The **Senate has 35 members** (one per district), and
- The **House of Representatives has 70 members** (two per district).
- Your **senator and your two representatives all represent the SAME district** — so you have **three legislators** sharing your exact geographic area, elected together. It's a design you don't see in most states (where House and Senate districts are drawn separately).

Idaho's Legislature is **part-time**, meeting in annual sessions of no fixed length (typically a few months in the winter/spring), so legislators are **citizen lawmakers** with regular jobs back home.

This is a through-line: Idaho keeps government **close to citizens** — through a part-time legislature, shared local districts, and (as you'll see) strong initiative rights.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Idaho's own government (legislature.idaho.gov, sos.idaho.gov, isc.idaho.gov) is the authoritative source.

**Check yourself.** How many legislators represent your Idaho district, and how are its 35 districts structured?

## Sources
- Idaho Legislature. (n.d.). *Idaho Constitution (1890); legislative districts (one senator, two representatives)*. legislature.idaho.gov. https://legislature.idaho.gov/
- Idaho Secretary of State. (n.d.). *Idaho government overview*. sos.idaho.gov. https://sos.idaho.gov/`,
    },

    // ── Section 2: The executive ─────────────────────────────────────────
    {
      slug: "id-executive",
      title: "2 · Idaho's plural executive",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** Idaho voters elect several statewide officials (Idaho Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** (elected **separately** — they can be from different parties),
- the **Secretary of State** (who runs elections),
- the **Attorney General**,
- the **State Controller** (the state's accountant),
- the **State Treasurer**, and
- the **Superintendent of Public Instruction** (leading K–12 education).
Because they're elected on their own, these officials answer **directly to voters**, and Idaho can end up with statewide officers of different parties who check one another. Statewide officers serve **4-year terms.**

The **Legislative** branch (the part-time Legislature from Lesson 1) and the **Judicial** branch (nonpartisan elected, covered later) complete the three.

**Veto and override.** The Governor may veto bills (and has a **line-item veto** on appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** Name three statewide executives Idahoans elect besides the Governor, and note whether the Governor and Lieutenant Governor run together.

## Sources
- Idaho Secretary of State. (n.d.). *Statewide elected officials*. sos.idaho.gov. https://sos.idaho.gov/
- Idaho Legislature. (n.d.). *Constitution of Idaho, Article IV (Executive)*. legislature.idaho.gov. https://legislature.idaho.gov/`,
    },

    // ── Section 3: Direct democracy + how a bill becomes law ─────────────
    {
      slug: "id-initiative",
      title: "3 · The citizen initiative — powerful, but hard to qualify",
      section: "Making Law",
      body: `Idaho gives citizens the **initiative and referendum** — but qualifying a measure for the ballot is deliberately **demanding** (Idaho Secretary of State, n.d.).

**The tools:**
- **Initiative** — gather signatures to put a **statute** on the ballot (Idaho's initiative is for **laws**, not constitutional amendments — amendments come from the Legislature).
- **Referendum** — voters can **reject** a law the Legislature passed.

**The catch — geographic distribution.** ⚠️ Idaho requires initiative signatures to be gathered **not just in large numbers, but spread across the state** — a set percentage of voters in a large share of Idaho's **legislative districts** (Idaho Secretary of State, n.d.). This **distribution requirement** means a measure can't qualify on the strength of the two or three biggest cities alone; organizers must build **statewide** support. Idaho has **debated making these thresholds even harder**, and such changes have been litigated — so confirm the **current** signature rules at sos.idaho.gov. The effect: Idaho's initiative is a **real but hard-to-use** citizen power.

**How a bill becomes law** (Idaho Legislature, n.d.):
1. **Introduction** in the House or Senate during the annual session; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto (two-thirds override), or line-item veto appropriations.

The takeaway: in Idaho, the **Legislature is the main road**, and the **citizen initiative is a genuine but demanding backup** — one that requires **statewide** organizing, by design.

**Check yourself.** What can Idaho citizens put on the ballot by initiative, and why is qualifying one difficult?

## Sources
- Idaho Secretary of State. (n.d.). *Initiative and referendum; signature distribution requirements*. sos.idaho.gov. https://sos.idaho.gov/
- Idaho Legislature. (n.d.). *How a bill becomes law*. legislature.idaho.gov. https://legislature.idaho.gov/`,
    },

    // ── Section 4: Courts, local government, getting involved ────────────
    {
      slug: "id-courts-involved",
      title: "4 · Judges, local government, and how to take part",
      section: "Get Involved",
      body: `**How Idaho picks its judges.** Idaho **elects** its judges on a **NONPARTISAN** ballot — no party label appears next to their names (Idaho Supreme Court, n.d.). The **Idaho Supreme Court** has **5 justices**, elected statewide to **6-year terms**; Court of Appeals and District judges are likewise elected nonpartisan. When a seat opens mid-term, the **Governor appoints** a replacement from an **Idaho Judicial Council** list, who then stands for election.

**Local government** (Idaho Legislature, n.d.):
- **44 counties**, governed by elected **boards of county commissioners**, plus other elected county officials (sheriff, clerk, assessor, treasurer, prosecutor).
- **Cities** provide municipal services; **highway districts, school districts, and other special districts** round out local government (special districts are common across Idaho's large rural areas).
- Idaho is also home to several **sovereign tribal nations** (such as the Nez Perce, Coeur d'Alene, and Shoshone-Bannock), governments with their own laws and courts.

**Voting.** ⚠️ **Time-sensitive:** Idaho offers **Election-Day (same-day) registration**, absentee voting, and requires **ID** (with alternatives). Rules are administered by **county clerks** and can change — confirm the **current** details at **sos.idaho.gov** before you vote.

**How to take part:**
- **Register and vote** — even on Election Day; check your status at sos.idaho.gov.
- **Organize statewide for an initiative** — remember the distribution rule; a successful Idaho initiative needs support **across** the state.
- **Show up locally.** County commissions, city councils, and school and highway district boards hold public meetings.
- **Contact your three legislators** — you have one senator and two representatives from your shared district.
- **Run** — school board, city council, and county commission are reachable local starting points.

**Check yourself.** How are Idaho's judges chosen, and how many legislators can you contact from your district?

## Sources
- Idaho Supreme Court. (n.d.). *Nonpartisan judicial elections; the Idaho Judicial Council*. isc.idaho.gov. https://isc.idaho.gov/
- Idaho Legislature. (n.d.). *Local government: counties, cities, and special districts*. legislature.idaho.gov. https://legislature.idaho.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "id-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Idaho state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Idaho's 35 legislative districts each elect one senator and ___ representatives.",
            answer: "two",
            accept: ["2"],
            explanation:
              "Each district elects 1 senator and 2 representatives, for 35 senators and 70 representatives — a shared-district design.",
          },
          {
            prompt:
              "Idaho's current constitution is the Constitution of ___.",
            answer: "1890",
            explanation:
              "Idaho adopted its constitution in 1890, the year it became the 43rd state.",
          },
          {
            prompt:
              "Idaho's initiative lets citizens put a ___ (not a constitutional amendment) on the ballot.",
            answer: "statute",
            accept: ["law"],
            explanation:
              "Idaho's initiative is for statutes; constitutional amendments come from the Legislature. Referendum lets voters reject laws.",
          },
          {
            prompt:
              "Idaho initiative signatures must be gathered across many legislative districts — a ___ requirement.",
            answer: "distribution",
            accept: ["geographic distribution", "geographic"],
            explanation:
              "The geographic distribution rule requires statewide support, making Idaho's initiative real but hard to qualify.",
          },
          {
            prompt:
              "Idaho elects its judges on a ___ ballot (no party labels).",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "Idaho's judges, including its 5 Supreme Court justices (6-year terms), are elected nonpartisan.",
          },
          {
            prompt:
              "TRUE or FALSE: In Idaho, your senator and two representatives all come from the same district.",
            answer: "true",
            explanation:
              "True. Idaho's shared-district design means you have three legislators representing your exact area.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "id-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How are Idaho's 35 legislative districts represented?",
            options: [
              "Each elects two senators and one representative",
              "Each elects one senator and two representatives",
              "Senators are statewide; representatives by district",
              "Each elects three senators",
            ],
            correctIndex: 1,
            explanation:
              "Each of Idaho's 35 districts elects one senator and two representatives — 35 senators, 70 representatives.",
            sourceLessonSlug: "id-constitution-districts",
          },
          {
            prompt: "Which constitution governs Idaho today?",
            options: [
              "The Constitution of 1890",
              "The Constitution of 1959",
              "The Constitution of 1972",
              "It uses the federal constitution only",
            ],
            correctIndex: 0,
            explanation:
              "Idaho adopted its constitution in 1890, the year of statehood.",
            sourceLessonSlug: "id-constitution-districts",
          },
          {
            prompt: "Do Idaho's Governor and Lieutenant Governor run together?",
            options: [
              "Yes, on a joint ticket",
              "No — they are elected separately and can be from different parties",
              "The Legislature picks both",
              "There is no Lieutenant Governor",
            ],
            correctIndex: 1,
            explanation:
              "Idaho elects the Governor and Lieutenant Governor separately, so they may be from different parties.",
            sourceLessonSlug: "id-executive",
          },
          {
            prompt: "What can Idaho citizens put on the ballot by initiative?",
            options: [
              "A constitutional amendment",
              "A statute (a law)",
              "A new Governor",
              "Nothing — Idaho has no initiative",
            ],
            correctIndex: 1,
            explanation:
              "Idaho's initiative is for statutes; amendments come from the Legislature. Referendum rejects laws.",
            sourceLessonSlug: "id-initiative",
          },
          {
            prompt: "Why is qualifying an Idaho initiative difficult?",
            options: [
              "It requires the Governor's approval",
              "Signatures must be distributed across many legislative districts (statewide support), not just big cities",
              "Only judges can file them",
              "They must be unanimous",
            ],
            correctIndex: 1,
            explanation:
              "Idaho's geographic distribution requirement forces statewide organizing, making qualification demanding.",
            sourceLessonSlug: "id-initiative",
          },
          {
            prompt: "How does Idaho choose its Supreme Court justices?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot to 6-year terms",
              "Elected by the Legislature",
              "In partisan races",
            ],
            correctIndex: 1,
            explanation:
              "Idaho elects its 5 justices nonpartisan to 6-year terms (appointment fills mid-term vacancies).",
            sourceLessonSlug: "id-courts-involved",
          },
          {
            prompt: "How many members are in the Idaho House and Senate?",
            options: [
              "70 House / 35 Senate",
              "100 House / 40 Senate",
              "150 House / 30 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Idaho House has 70 members and the Senate has 35, from 35 shared districts.",
            sourceLessonSlug: "id-constitution-districts",
          },
          {
            prompt: "How many legislators represent your Idaho district?",
            options: [
              "One",
              "Three — one senator and two representatives",
              "Five",
              "None; they are statewide",
            ],
            correctIndex: 1,
            explanation:
              "Idaho's shared-district design gives you three legislators representing your exact area.",
            sourceLessonSlug: "id-courts-involved",
          },
          {
            prompt: "How many counties does Idaho have?",
            options: ["10", "44", "99", "254"],
            correctIndex: 1,
            explanation:
              "Idaho has 44 counties, alongside its cities, special districts, and sovereign tribal nations.",
            sourceLessonSlug: "id-courts-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Idaho's initiative and voting rules?",
            options: [
              "Because Idaho has no elections office",
              "Because signature-distribution thresholds have been debated and litigated and voting is run by county clerks — confirm at sos.idaho.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Idaho's initiative thresholds are contested and voting is administered locally, so sos.idaho.gov is the authoritative source.",
            sourceLessonSlug: "id-courts-involved",
          },
        ],
      },
    },
  ],
};
