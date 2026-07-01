// Authored "Wyoming Civics: How Your State Government Works" — the Wyoming entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Wyoming's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to WYOMING'S OWN OFFICIAL SOURCES: the Legislature
// (wyoleg.gov), the Secretary of State / elections (sos.wyo.gov), the Judicial Branch
// (courts.state.wy.us), and the Wyoming Constitution (1889).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules) are flagged and point learners to sos.wyo.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_WY_COURSE: AuthoredCourse = {
  title: "Wyoming Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Wyoming governs itself — and how you take part where you live. Wyoming is 'The Equality State' for a landmark reason: it was the FIRST place in America to grant women the right to vote (1869), it elected the nation's first woman governor, and it entered the Union in 1890 refusing to give up women's suffrage. You'll learn Wyoming's Constitution of 1889, its plural executive (with NO lieutenant governor), its part-time Legislature of 31 senators and 62 representatives, its merit-selection judiciary, its lack of a state income tax, and its 23 counties. Time-sensitive facts are flagged, pointing to sos.wyo.gov. Cited to Wyoming's own official sources (wyoleg.gov, sos.wyo.gov, courts.state.wy.us).",
  lessons: [
    // ── Section 1: The Equality State ────────────────────────────────────
    {
      slug: "wy-equality-state",
      title: "1 · 'The Equality State': first to grant women the vote",
      section: "What Makes Wyoming Unique",
      body: `Wyoming's nickname — **"The Equality State"** — commemorates a genuine national first: Wyoming was the **FIRST place in America to grant women the right to vote** (Wyoming Secretary of State, n.d.).

**The firsts.** As a **territory in 1869**, Wyoming gave **women the right to vote and hold office** — decades before the 19th Amendment (1920) extended women's suffrage nationwide. Wyoming's commitment ran deep (Wyoming Secretary of State, n.d.):
- When Wyoming sought **statehood in 1890**, Congress pressured it to drop women's suffrage; Wyoming famously refused, reportedly telegraphing that it would **"remain out of the Union a hundred years rather than come in without the women."** It entered as the **44th state on July 10, 1890 — the first state with women's suffrage in its constitution.**
- Wyoming also produced the nation's **first female governor**, **Nellie Tayloe Ross** (1925), and early women jurors and justices of the peace.

Wyoming governs under its **Constitution of 1889**, whose very first article proclaims the **equal political rights of all citizens, including women** — the source of the nickname. Wyoming is also the **least populous state**, which shapes its **accessible, close-knit** civic culture.

This is the through-line: Wyoming's civic identity is built around **equal political rights**, established at its founding.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Wyoming's own government (wyoleg.gov, sos.wyo.gov, courts.state.wy.us) is the authoritative source.

**Check yourself.** Why is Wyoming called "The Equality State," and what did it refuse to give up to gain statehood?

## Sources
- Wyoming Secretary of State. (n.d.). *The Equality State: women's suffrage first, 1869; Nellie Tayloe Ross*. sos.wyo.gov. https://sos.wyo.gov/
- Wyoming Legislature. (n.d.). *Wyoming Constitution (1889): equal political rights*. wyoleg.gov. https://www.wyoleg.gov/`,
    },

    // ── Section 2: The executive (no Lt. Governor) ───────────────────────
    {
      slug: "wy-executive",
      title: "2 · Wyoming's executive — five elected officers, and no Lieutenant Governor",
      section: "The Three Branches",
      body: `**A plural executive with a distinctive gap.** Wyoming voters elect **five** statewide officials — but ⚠️ **Wyoming has NO Lieutenant Governor** (Wyoming Secretary of State, n.d.). The five elected statewide executives are:
1. **Governor** — the chief executive.
2. **Secretary of State** — who runs elections **and is first in line to succeed the Governor** (filling the role a lieutenant governor plays elsewhere).
3. **State Auditor.**
4. **State Treasurer.**
5. **Superintendent of Public Instruction** — leading K–12 education.
These five, elected separately to **4-year terms**, together also sit as important **state boards** (for example, the State Loan and Investment Board and the Board of Land Commissioners) — so in Wyoming the elected executives collectively govern much of state administration.

Because there's **no Lieutenant Governor**, the **Secretary of State** is Wyoming's designated successor to the Governor — a good example of how states solve succession differently (compare Oregon, which also uses its Secretary of State, versus states with a Lieutenant Governor).

The **Legislative** and **Judicial** branches complete the three (next lessons).

**Check yourself.** How many statewide executives does Wyoming elect, and who succeeds the Governor (since there's no Lieutenant Governor)?

## Sources
- Wyoming Secretary of State. (n.d.). *Statewide elected officials; succession*. sos.wyo.gov. https://sos.wyo.gov/`,
    },

    // ── Section 3: The Legislature + the courts ──────────────────────────
    {
      slug: "wy-legislature-courts",
      title: "3 · The part-time Legislature and how Wyoming picks its judges",
      section: "The Three Branches",
      body: `**Legislative — the Wyoming Legislature.** A part-time **citizen legislature** meeting in Cheyenne (Wyoming Legislature, n.d.):
- **House of Representatives — 62 members** (2-year terms), and **Senate — 31 senators** (4-year terms) — a small legislature for the least-populous state.
- It meets in **short sessions**: a longer **general session** in odd years and a shorter **budget session** in even years (roughly 40 and 20 days), so legislators are part-time citizen lawmakers — ranchers, business owners, and retirees who often know their constituents personally.

**No state income tax.** Wyoming levies **no state personal income tax**, funding government heavily through **mineral and energy** revenues (coal, oil, gas) and sales/property taxes — so its budget rises and falls with **energy markets.**

**Judicial — merit selection plus retention.** Wyoming uses the **"Missouri Plan"** (Wyoming Judicial Branch, n.d.):
1. A **Judicial Nominating Commission** sends the Governor a list of nominees.
2. The **Governor appoints** a judge from that list.
3. The judge later faces voters in a **nonpartisan yes/no retention election.** The **Wyoming Supreme Court** has **5 justices.**

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** How large is Wyoming's Legislature, and how does Wyoming choose its Supreme Court justices?

## Sources
- Wyoming Legislature. (n.d.). *The Legislature; sessions; the state tax structure*. wyoleg.gov. https://www.wyoleg.gov/
- Wyoming Judicial Branch. (n.d.). *Judicial selection: merit selection and retention*. courts.state.wy.us. https://www.courts.state.wy.us/`,
    },

    // ── Section 4: Lawmaking, local government, getting involved ─────────
    {
      slug: "wy-lawmaking-involved",
      title: "4 · How a bill becomes law, local government, and getting involved",
      section: "Get Involved",
      body: `**How a bill becomes law** (Wyoming Legislature, n.d.):
1. **Introduction** during the general (odd year) or budget (even year) session; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto (two-thirds override), or line-item veto appropriations.

**Direct democracy.** Wyoming citizens **do** have the **initiative and referendum**, but with comparatively **high signature and distribution requirements**, so statewide measures reach the ballot **less often** than in states like South Dakota or Colorado (Wyoming Secretary of State, n.d.). Constitutional **amendments** are proposed by the Legislature and ratified by the **voters** — and recall New Mexico's contrast: Wyoming's founding article is about **equal rights.**

**Local government** (Wyoming Legislature, n.d.):
- **23 counties**, governed by elected **boards of county commissioners**, plus other elected county officials.
- **Cities and towns** provide municipal services; **special districts** and **school districts** round things out.
- Wyoming is also home to the **Wind River Reservation** (the Eastern Shoshone and Northern Arapaho tribes), sovereign governments within the state.

**Voting.** ⚠️ **Time-sensitive:** Wyoming offers **Election-Day registration**, absentee voting, and requires **ID.** Rules are administered by **county clerks** and can change — confirm the **current** details at **sos.wyo.gov** before you vote.

**How to take part:**
- **Register and vote** — even on Election Day; bring ID; check your status at sos.wyo.gov.
- **Show up locally.** In a small state, county commissions, city/town councils, and school boards are especially accessible.
- **Contact your legislators** in Cheyenne — you have one Representative and one Senator; sessions are short, so timing matters.
- **Run** — school board, town council, and county commission are reachable local starting points.

**Check yourself.** Does Wyoming have a citizen initiative, and why do fewer statewide measures reach its ballot?

## Sources
- Wyoming Legislature. (n.d.). *How a bill becomes law; local government*. wyoleg.gov. https://www.wyoleg.gov/
- Wyoming Secretary of State. (n.d.). *Initiative and referendum; registering and voting*. sos.wyo.gov. https://sos.wyo.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "wy-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Wyoming state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Wyoming is nicknamed 'The ___ State' for being first to grant women the vote (1869).",
            answer: "Equality",
            accept: ["equality"],
            explanation:
              "Wyoming granted women's suffrage as a territory in 1869 and kept it to gain statehood in 1890.",
          },
          {
            prompt:
              "Wyoming produced the nation's first female ___ (Nellie Tayloe Ross, 1925).",
            answer: "governor",
            explanation:
              "Nellie Tayloe Ross became the first woman governor in the United States in 1925.",
          },
          {
            prompt:
              "Wyoming has no Lieutenant Governor; first in line to succeed the Governor is the Secretary of ___.",
            answer: "State",
            accept: ["state"],
            explanation:
              "Wyoming's elected Secretary of State runs elections and succeeds the Governor — there's no lieutenant governor.",
          },
          {
            prompt:
              "Wyoming levies no state ___ tax, funding government heavily through mineral and energy revenue.",
            answer: "income",
            explanation:
              "Wyoming has no personal state income tax; energy and mineral revenue plus sales/property taxes fund the state.",
          },
          {
            prompt:
              "Wyoming's Legislature has a 31-member Senate and a ___-member House.",
            answer: "62",
            accept: ["sixty-two"],
            explanation:
              "The Wyoming House has 62 members (2-year terms) and the Senate has 31 (4-year terms) — a small legislature.",
          },
          {
            prompt:
              "TRUE or FALSE: Wyoming was the first state to grant women the right to vote.",
            answer: "true",
            explanation:
              "True. Wyoming Territory granted women's suffrage in 1869 and entered the Union in 1890 as the first state with it.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "wy-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why is Wyoming called 'The Equality State'?",
            options: [
              "It has equal-sized counties",
              "It was the first place in America to grant women the right to vote (1869)",
              "It has no government",
              "It splits power equally with Congress",
            ],
            correctIndex: 1,
            explanation:
              "Wyoming granted women's suffrage in 1869 and enshrined equal political rights in its 1889 constitution.",
            sourceLessonSlug: "wy-equality-state",
          },
          {
            prompt: "What did Wyoming refuse to give up to gain statehood in 1890?",
            options: [
              "Its capital",
              "Women's suffrage",
              "Its courts",
              "Its borders",
            ],
            correctIndex: 1,
            explanation:
              "Wyoming refused to drop women's suffrage, entering the Union as the first state with it.",
            sourceLessonSlug: "wy-equality-state",
          },
          {
            prompt: "What is distinctive about Wyoming's executive branch?",
            options: [
              "It has nine elected officials",
              "It has five elected statewide officers and NO Lieutenant Governor (the Secretary of State succeeds the Governor)",
              "The Governor appoints everyone",
              "It has no Governor",
            ],
            correctIndex: 1,
            explanation:
              "Wyoming elects five statewide executives and has no lieutenant governor; the Secretary of State is next in succession.",
            sourceLessonSlug: "wy-executive",
          },
          {
            prompt: "Who succeeds the Governor in Wyoming?",
            options: [
              "The Lieutenant Governor",
              "The Secretary of State",
              "The Speaker of the House",
              "The Chief Justice",
            ],
            correctIndex: 1,
            explanation:
              "With no lieutenant governor, Wyoming's Secretary of State is first in line to succeed the Governor.",
            sourceLessonSlug: "wy-executive",
          },
          {
            prompt: "How large is Wyoming's Legislature?",
            options: [
              "62 House / 31 Senate",
              "100 House / 40 Senate",
              "150 House / 50 Senate",
              "400 House / 24 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Wyoming House has 62 members and the Senate has 31 — small, fitting the least-populous state.",
            sourceLessonSlug: "wy-legislature-courts",
          },
          {
            prompt: "How does Wyoming fund its government without a state income tax?",
            options: [
              "Federal grants only",
              "Heavily through mineral and energy revenue, plus sales and property taxes",
              "A state lottery",
              "It has no revenue",
            ],
            correctIndex: 1,
            explanation:
              "Wyoming relies on mineral/energy revenue and sales/property taxes; its budget tracks energy markets.",
            sourceLessonSlug: "wy-legislature-courts",
          },
          {
            prompt: "How does Wyoming choose its Supreme Court justices?",
            options: [
              "Partisan elections",
              "Merit selection (commission → Governor appoints) plus retention elections",
              "The Legislature elects them",
              "Lifetime appointment",
            ],
            correctIndex: 1,
            explanation:
              "Wyoming uses the Missouri Plan for its 5-justice Supreme Court.",
            sourceLessonSlug: "wy-legislature-courts",
          },
          {
            prompt: "Does Wyoming have a citizen initiative?",
            options: [
              "No, none at all",
              "Yes, but with high signature/distribution requirements, so fewer measures reach the ballot",
              "Only for taxes",
              "Only in cities",
            ],
            correctIndex: 1,
            explanation:
              "Wyoming has the initiative and referendum, but demanding thresholds mean statewide measures reach the ballot less often.",
            sourceLessonSlug: "wy-lawmaking-involved",
          },
          {
            prompt: "How many counties does Wyoming have?",
            options: ["10", "23", "67", "159"],
            correctIndex: 1,
            explanation:
              "Wyoming has 23 counties; it is also home to the Wind River Reservation's sovereign tribal governments.",
            sourceLessonSlug: "wy-lawmaking-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Wyoming's voting rules?",
            options: [
              "Because Wyoming has no elections office",
              "Because registration and ID rules are administered by county clerks and can change — confirm at sos.wyo.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Wyoming administers voting through county clerks and rules evolve, so sos.wyo.gov is the authoritative source.",
            sourceLessonSlug: "wy-lawmaking-involved",
          },
        ],
      },
    },
  ],
};
