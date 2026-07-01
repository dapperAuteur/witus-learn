// Authored "Montana Civics: How Your State Government Works" — the Montana entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Montana's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to MONTANA'S OWN OFFICIAL SOURCES: the Legislature
// (leg.mt.gov), the Secretary of State / elections (sosmt.gov), the Judicial Branch
// (courts.mt.gov), and the Montana Constitution (1972).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules) are flagged and point learners to sosmt.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_MT_COURSE: AuthoredCourse = {
  title: "Montana Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Montana governs itself — and how you take part where you live. Montana rewrote its constitution in 1972 into one of the most distinctive in the country — it guarantees a 'right to a clean and healthful environment,' unusually strong individual privacy rights, and a right to know and to participate in government. You'll also learn Montana's part-time Legislature of 50 senators and 100 representatives, which meets only every other year for 90 days; its plural executive; its strong direct democracy; its nonpartisan elected judiciary; and its 56 counties. Time-sensitive facts are flagged, pointing to sosmt.gov. Cited to Montana's own official sources (leg.mt.gov, sosmt.gov, courts.mt.gov).",
  lessons: [
    // ── Section 1: The 1972 constitution ─────────────────────────────────
    {
      slug: "mt-1972-constitution",
      title: "1 · Montana's remarkable 1972 constitution",
      section: "What Makes Montana Unique",
      body: `Montana's civic identity rests on a document rewritten in living memory: its **Constitution of 1972.** In the early 1970s, an elected **constitutional convention** of ordinary citizens (not sitting politicians) rewrote Montana's old 1889 constitution into one of the most **distinctive and rights-focused** state constitutions in the country (Montana Legislature, n.d.).

Several provisions are genuinely unusual (Montana Legislature, n.d.):
- **A right to a clean and healthful environment.** Montana's constitution explicitly guarantees every person the **"right to a clean and healthful environment"** — one of the strongest environmental-rights clauses in any U.S. constitution, and one courts have enforced in real cases.
- **Strong individual privacy rights.** The constitution protects **individual privacy** in explicit terms — going beyond the federal Constitution — a provision Montana courts have used to strike down laws.
- **The right to know and to participate.** Montanans have an express **"right to know"** (access to government documents and meetings) and a **"right of participation"** in government decisions — unusually strong open-government guarantees.

Montana became the **41st state on November 8, 1889**, but it's the **1972 rewrite** that defines its modern government. This is the through-line: Montana's constitution puts **individual rights, the environment, and open government** front and center — and those choices show up throughout its civics.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Montana's own government (leg.mt.gov, sosmt.gov, courts.mt.gov) is the authoritative source.

**Check yourself.** Name two distinctive rights guaranteed by Montana's 1972 constitution.

## Sources
- Montana Legislature. (n.d.). *The 1972 Montana Constitution: environment, privacy, and the right to know*. leg.mt.gov. https://leg.mt.gov/
- Montana Secretary of State. (n.d.). *Montana government and history*. sosmt.gov. https://sosmt.gov/`,
    },

    // ── Section 2: The 90-day biennial legislature ───────────────────────
    {
      slug: "mt-biennial-legislature",
      title: "2 · A citizen Legislature that meets 90 days every other year",
      section: "The Three Branches",
      body: `Montana has one of the **truest "citizen legislatures"** in the country (Montana Legislature, n.d.):
- **House of Representatives — 100 members**, elected to **2-year terms**, and **Senate — 50 senators**, elected to **4-year terms.**
- ⚠️ **It meets only every OTHER year — for 90 days.** Montana's Legislature holds a regular session in **odd-numbered years, limited to 90 legislative days.** That's it: for roughly **18 months out of every 24**, the Legislature is **not in session**, and lawmakers live and work in their communities as ranchers, teachers, small-business owners, and retirees. (Interim committees do work between sessions.)

Why it matters: this design keeps the Legislature **close to ordinary life** and **inexpensive**, but it also means the state must plan its budget and laws in **two-year cycles** and pack a lot into a short window. It reflects Montana's preference for **part-time, accessible government** — you might well **know your legislator personally.**

**Term limits.** Montana voters imposed **term limits** (via initiative) on legislators and statewide officers — generally **8 years in a 16-year period** for a given office.

**Veto and override.** The Governor may veto bills; the Legislature overrides with a **two-thirds vote** — and because sessions are biennial, Montana even allows a **mail poll of legislators** to consider overriding vetoes issued after the session ends.

**Check yourself.** How often and for how long does Montana's Legislature meet, and what does that say about who serves in it?

## Sources
- Montana Legislature. (n.d.). *The biennial 90-day session; term limits; veto override*. leg.mt.gov. https://leg.mt.gov/`,
    },

    // ── Section 3: The executive + the courts ────────────────────────────
    {
      slug: "mt-executive-courts",
      title: "3 · The executive and how Montana picks its judges",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** Montana voters elect several statewide officials (Montana Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** run **together on a joint ticket.**
- Voters separately elect the **Secretary of State**, the **Attorney General**, the **State Auditor** (who also serves as Commissioner of Securities and Insurance), and the **Superintendent of Public Instruction.**
Statewide officers serve **4-year terms** with **term limits.**

**Judicial — the Montana courts.** District courts and the **Montana Supreme Court** (7 justices — a Chief Justice and six others). Montana **elects** its judges on a **NONPARTISAN** ballot — Supreme Court justices to **8-year terms**, district judges to 6-year terms (Montana Judicial Branch, n.d.). When a seat opens mid-term, the Governor appoints a replacement (from a Judicial Nomination Commission's list, with Senate confirmation) who then must stand for election. Given the 1972 constitution's strong rights provisions, Montana's courts are frequently where **environmental, privacy, and right-to-know** cases are decided — so those nonpartisan judicial elections carry real weight.

**Veto and override** are covered in Lesson 2.

**Check yourself.** Name two statewide executive officers Montanans elect besides the Governor, and say how Montana chooses its Supreme Court justices.

## Sources
- Montana Secretary of State. (n.d.). *Statewide elected officials*. sosmt.gov. https://sosmt.gov/
- Montana Judicial Branch. (n.d.). *Nonpartisan judicial elections; the Supreme Court*. courts.mt.gov. https://courts.mt.gov/`,
    },

    // ── Section 4: Direct democracy + how a bill becomes law ─────────────
    {
      slug: "mt-direct-democracy",
      title: "4 · Direct democracy and how a bill becomes law",
      section: "Making Law",
      body: `Montana makes law **two ways** — through the Legislature, or directly by the voters (Montana Secretary of State, n.d.).

**Direct democracy.** Montana's 1972 constitution keeps **strong citizen tools:**
- **Initiative** — citizens gather signatures to put a **statute** or a **constitutional amendment** on the ballot. (Montanans have used it for term limits and many other measures.)
- **Referendum** — voters can **reject** a law the Legislature passed, and the Legislature can also refer measures to voters.
- Montana even allows **"the right to know" and "right of participation"** to shape lawmaking, since the public must be able to observe and take part in government decisions.

**How a bill becomes law** (Montana Legislature, n.d.):
1. **Introduction** during the biennial 90-day session; **committee** hearings (open to the public, consistent with the right to participate); **floor votes** in both chambers.
2. **Governor** — sign, veto (two-thirds override, sometimes by mail poll after the session), or **amendatory veto** (return a bill with suggested changes).

The takeaway: Montana combines a **short, part-time Legislature** with **robust citizen lawmaking** and **strong open-government rights** — so the public can both **watch** and **participate in** the process.

**Check yourself.** What can Montana citizens put on the ballot by initiative, and what open-government rights shape how laws are made?

## Sources
- Montana Secretary of State. (n.d.). *Initiative and referendum in Montana*. sosmt.gov. https://sosmt.gov/
- Montana Legislature. (n.d.). *How a bill becomes law; the amendatory veto*. leg.mt.gov. https://leg.mt.gov/`,
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "mt-local-involved",
      title: "5 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government.** Montana's local layers include (Montana Legislature, n.d.):
- **56 counties**, governed by elected **boards of county commissioners**, plus other elected county officials. Montana's counties are geographically **huge** and sparsely populated.
- **Cities and towns** provide municipal services; some have adopted **self-government (home-rule) charters**, and Montana's constitution encourages local self-government.
- **School districts** and **special districts** round out local government.
- A distinctive Montana feature: the 1972 constitution required **periodic local "voter review" of government structure**, letting communities revisit how they're organized.

**Voting.** ⚠️ **Time-sensitive:** Montana offers **absentee/mail voting** and has at times offered **Election-Day registration** (rules here have changed and been litigated), and requires **ID** to vote. These rules are administered by **county election offices** and can change — confirm the **current** details at **sosmt.gov** before you vote.

**How to take part:**
- **Register and vote** — check current registration and ID rules at sosmt.gov; use absentee voting given Montana's distances.
- **Use direct democracy.** Sign or circulate an **initiative or referendum** — Montanans use these regularly.
- **Exercise your right to know.** Montana's constitution gives you strong access to **government documents and meetings** — use it to follow decisions.
- **Show up locally.** County commissions, city/town councils, and school boards hold public meetings.
- **Contact your legislators** in Helena — you have one Representative and one Senator; note the Legislature meets mainly in odd years.
- **Run** — school board, city council, and county commission are reachable local starting points.

**Check yourself.** Name one Montana open-government right you can use, and one voting detail to verify before an election.

## Sources
- Montana Legislature. (n.d.). *Local government: counties, home rule, voter review*. leg.mt.gov. https://leg.mt.gov/
- Montana Secretary of State. (n.d.). *Registering and voting: absentee, ID, deadlines*. sosmt.gov. https://sosmt.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "mt-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Montana state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Montana's 1972 constitution guarantees a right to a clean and healthful ___.",
            answer: "environment",
            explanation:
              "Montana's constitution has one of the strongest environmental-rights clauses in any U.S. constitution.",
          },
          {
            prompt:
              "Montana's constitution also gives strong individual ___ rights (going beyond the federal Constitution).",
            answer: "privacy",
            explanation:
              "Montana courts have used the explicit privacy right to strike down laws — a distinctive feature of the 1972 constitution.",
          },
          {
            prompt:
              "Montana's Legislature meets only every other year, for ___ legislative days.",
            answer: "90",
            accept: ["ninety"],
            explanation:
              "The biennial 90-day session (odd years) makes Montana's a true citizen legislature.",
          },
          {
            prompt:
              "Montana's Legislature has a 50-member Senate and a ___-member House.",
            answer: "100",
            accept: ["one hundred"],
            explanation:
              "The Montana House has 100 members (2-year terms) and the Senate has 50 (4-year terms).",
          },
          {
            prompt:
              "Montana's constitution gives citizens a 'right to ___' — access to government documents and meetings.",
            answer: "know",
            explanation:
              "The 'right to know' and 'right of participation' are unusually strong open-government guarantees in Montana.",
          },
          {
            prompt:
              "TRUE or FALSE: Montana's Legislature is in session year-round.",
            answer: "false",
            explanation:
              "False. Montana's Legislature meets only in odd years, for 90 days — a part-time citizen legislature.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "mt-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is distinctive about Montana's 1972 constitution?",
            options: [
              "It has no bill of rights",
              "It guarantees a clean-and-healthful environment, strong privacy, and a right to know",
              "It bans elections",
              "It created a unicameral legislature",
            ],
            correctIndex: 1,
            explanation:
              "Montana's 1972 constitution is notable for its environmental, privacy, and open-government rights.",
            sourceLessonSlug: "mt-1972-constitution",
          },
          {
            prompt: "Which environmental guarantee does Montana's constitution include?",
            options: [
              "A right to pollute freely",
              "A right to a clean and healthful environment",
              "A ban on all industry",
              "No environmental provisions",
            ],
            correctIndex: 1,
            explanation:
              "Montana explicitly guarantees the right to a clean and healthful environment, enforced in real cases.",
            sourceLessonSlug: "mt-1972-constitution",
          },
          {
            prompt: "How often and for how long does Montana's Legislature meet?",
            options: [
              "Year-round",
              "Every other year (odd years), for 90 legislative days",
              "Once a decade",
              "Only during emergencies",
            ],
            correctIndex: 1,
            explanation:
              "Montana's citizen legislature meets biennially in odd years, limited to 90 days.",
            sourceLessonSlug: "mt-biennial-legislature",
          },
          {
            prompt: "How many members are in the Montana House and Senate?",
            options: [
              "100 House / 50 Senate",
              "150 House / 30 Senate",
              "99 House / 33 Senate",
              "400 House / 24 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Montana House has 100 members and the Senate has 50.",
            sourceLessonSlug: "mt-biennial-legislature",
          },
          {
            prompt: "How does Montana choose its Supreme Court justices?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot to 8-year terms",
              "Elected by the Legislature",
              "Chosen by a citizens' commission with no election",
            ],
            correctIndex: 1,
            explanation:
              "Montana elects its 7 justices nonpartisan to 8-year terms (appointment fills mid-term vacancies).",
            sourceLessonSlug: "mt-executive-courts",
          },
          {
            prompt: "Which statewide officer in Montana also serves as Commissioner of Securities and Insurance?",
            options: [
              "The Secretary of State",
              "The State Auditor",
              "The Attorney General",
              "The Governor",
            ],
            correctIndex: 1,
            explanation:
              "Montana's elected State Auditor also serves as Commissioner of Securities and Insurance.",
            sourceLessonSlug: "mt-executive-courts",
          },
          {
            prompt: "What can Montana citizens put on the ballot by initiative?",
            options: [
              "Nothing",
              "A statute or a constitutional amendment",
              "Only local ordinances",
              "Only tax cuts",
            ],
            correctIndex: 1,
            explanation:
              "Montana's initiative lets citizens propose statutes and constitutional amendments (e.g., term limits).",
            sourceLessonSlug: "mt-direct-democracy",
          },
          {
            prompt: "Which open-government rights shape Montana lawmaking?",
            options: [
              "A right to secrecy",
              "The 'right to know' and the 'right of participation'",
              "A right to skip taxes",
              "No such rights exist",
            ],
            correctIndex: 1,
            explanation:
              "Montana's constitution guarantees access to documents and meetings (right to know) and participation in decisions.",
            sourceLessonSlug: "mt-direct-democracy",
          },
          {
            prompt: "How many counties does Montana have?",
            options: ["10", "56", "159", "254"],
            correctIndex: 1,
            explanation:
              "Montana has 56 large, sparsely populated counties governed by elected commissioners.",
            sourceLessonSlug: "mt-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Montana's voting rules?",
            options: [
              "Because Montana has no elections office",
              "Because registration and ID rules have changed and been litigated and are run by county offices — confirm at sosmt.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Montana's registration and ID rules have shifted and are administered locally, so sosmt.gov is the authoritative source.",
            sourceLessonSlug: "mt-local-involved",
          },
        ],
      },
    },
  ],
};
