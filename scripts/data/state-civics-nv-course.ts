// Authored "Nevada Civics: How Your State Government Works", the Nevada entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Nevada's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to NEVADA'S OWN OFFICIAL SOURCES: the Legislature
// (leg.state.nv.us), the Secretary of State / elections (nvsos.gov), the Judiciary
// (nvcourts.gov), and the Nevada Constitution (1864).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules, amendment process) are flagged and point learners to nvsos.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_NV_COURSE: AuthoredCourse = {
  title: "Nevada Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Nevada governs itself, and how you take part where you live. Nevada is the ONLY state that lets you vote for 'None of These Candidates' on its statewide ballots, a real protest option found nowhere else. You'll also learn how gaming (casino) regulation and revenue let Nevada run with NO state income tax; Nevada's Constitution of 1864 ('Battle Born'); its plural executive; its Legislature of 21 senators and 42 Assembly members that meets only every other year; its two-election rule for citizen constitutional amendments; its elected judiciary; and its 16 counties plus Carson City. Time-sensitive facts are flagged, pointing to nvsos.gov. Cited to Nevada's own official sources (leg.state.nv.us, nvsos.gov, nvcourts.gov).",
  lessons: [
    // ── Section 1: None of These Candidates ──────────────────────────────
    {
      slug: "nv-none-of-these",
      title: "1 · 'None of These Candidates': a ballot option found only in Nevada",
      section: "What Makes Nevada Unique",
      body: `Nevada offers voters something **no other state does**: on statewide ballots, you can vote for **"None of These Candidates."**

**What it is.** Since **1976**, Nevada has printed **"None of These Candidates"** as an actual choice in races for **statewide office** (Governor, U.S. Senate, President, and other statewide contests). It lets a voter formally register **"I reject all of these options"** rather than skipping the race or holding their nose (Nevada Secretary of State, n.d.).

**How it works: an important nuance.** ⚠️ The option is **non-binding**: even if **"None of These Candidates" receives the most votes**, the **highest-finishing actual candidate still wins** the office (Nevada does not hold a re-vote or leave the seat empty). So it's a **protest and accountability signal**, not a veto. It has occasionally **out-polled every named candidate** in a Nevada primary (a striking public message) without changing who takes office.

Why it matters: it's a genuinely **unique piece of American ballot design**, expressing a very Nevada idea: give voters a way to say **"none of the above."** It's a great civics-trivia fact and a real (if symbolic) tool.

Nevada governs under its **Constitution of 1864**, adopted when Nevada became a state on **October 31, 1864**, rushed into the Union during the Civil War to support the Union, which is why Nevada is called **"Battle Born."**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Nevada's own government (leg.state.nv.us, nvsos.gov, nvcourts.gov) is the authoritative source.

**Check yourself.** What can Nevada voters do that no other state's voters can, and does that option decide the winner?

## Sources
- Nevada Secretary of State. (n.d.). *'None of These Candidates' on statewide ballots*. nvsos.gov. https://www.nvsos.gov/
- Nevada Legislature. (n.d.). *Nevada Constitution (1864)*. leg.state.nv.us. https://www.leg.state.nv.us/`,
    },

    // ── Section 2: Gaming + no income tax ────────────────────────────────
    {
      slug: "nv-gaming-taxes",
      title: "2 · Gaming regulation and why Nevada has no income tax",
      section: "What Makes Nevada Unique",
      body: `Nevada's economy (and its government's finances) are shaped by one industry more than any other: **legal gaming** (casinos).

**A whole branch of government for gaming.** Nevada legalized casino gambling in **1931** and built a sophisticated regulatory system to keep it clean and trusted (Nevada Legislature, n.d.):
- The **Nevada Gaming Control Board** investigates and enforces, and
- the **Nevada Gaming Commission** licenses casinos and sets policy.
Nevada's gaming regulation became the **model copied by other states and countries.** Being licensed in Nevada is a mark of credibility across the global gaming industry.

**No state income tax.** Because casinos generate large **gaming taxes and fees**, plus sales and other taxes tied to tourism, **Nevada levies NO state personal income tax** (Nevada Legislature, n.d.). This shapes Nevada politics: debates over funding schools and services often turn on **gaming and sales taxes** rather than an income tax, and the state's fortunes rise and fall with **tourism.**

Why it matters for civics: Nevada is a case study in how a **single industry** can shape a state's **tax structure, budget, and even its regulatory institutions.** The Gaming Control Board is, in effect, one of the most powerful bodies in Nevada government.

**Check yourself.** Which two bodies regulate Nevada's casinos, and why does Nevada have no state income tax?

## Sources
- Nevada Legislature. (n.d.). *Gaming regulation (Gaming Control Board and Gaming Commission); Nevada's tax structure*. leg.state.nv.us. https://www.leg.state.nv.us/`,
      recallContent: [
        { prompt: "What ballot option can Nevada voters choose that no other state offers, and since when?", answer: "'None of These Candidates,' printed as a real choice on statewide ballots since 1976." },
        { prompt: "If 'None of These Candidates' gets the most votes, who takes office?", answer: "The highest-finishing actual candidate still wins; the option is non-binding, so no seat is left empty and no re-vote is held." },
      ],
    },

    // ── Section 3: The executive + biennial legislature ──────────────────
    {
      slug: "nv-executive-legislature",
      title: "3 · The executive and a Legislature that meets every other year",
      section: "The Three Branches",
      body: `**Executive: a plural executive.** Nevada voters elect several statewide officials (Nevada Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** (elected **separately**, can be different parties),
- the **Secretary of State** (who runs elections),
- the **Attorney General**,
- the **State Treasurer**, and
- the **State Controller.**
Statewide officers serve **4-year terms** with **term limits** (two terms).

**Legislative: the Nevada Legislature.** A distinctive **part-time, biennial** body meeting in Carson City (Nevada Legislature, n.d.):
- **Assembly: 42 members**, elected to **2-year terms**, and **Senate: 21 senators**, elected to **4-year terms.**
- ⚠️ **It meets only every OTHER year.** Nevada's Legislature holds a regular session in **odd-numbered years**, **constitutionally limited to 120 days.** So Nevada lawmakers are **citizen legislators** who spend most of their time in regular jobs. Legislators also face **term limits** (12 years per house).

**Judicial: the Nevada courts.** District courts, an intermediate Court of Appeals, and the **Nevada Supreme Court** (7 justices). Nevada **elects** its judges on a **nonpartisan** ballot to **6-year terms** (Nevada Judiciary, n.d.).

**Veto and override.** The Governor may veto bills; the Legislature overrides with a **two-thirds vote of each house**, but note that with a biennial session, an override often can't happen until the next session unless a special session is called.

**Check yourself.** How often does Nevada's Legislature meet and for how long, and how are Nevada's judges chosen?

## Sources
- Nevada Secretary of State. (n.d.). *Statewide elected officials*. nvsos.gov. https://www.nvsos.gov/
- Nevada Legislature. (n.d.). *The biennial 120-day session; term limits*. leg.state.nv.us. https://www.leg.state.nv.us/`,
      recallContent: [
        { prompt: "Which two bodies regulate Nevada's casinos, and what does each do?", answer: "The Gaming Control Board investigates and enforces; the Gaming Commission licenses casinos and sets policy." },
        { prompt: "Why does Nevada have no state personal income tax?", answer: "Gaming taxes and fees, plus sales and other taxes tied to tourism, raise enough revenue that Nevada levies no state income tax." },
      ],
    },

    // ── Section 4: Direct democracy (two-election amendments) ────────────
    {
      slug: "nv-direct-democracy",
      title: "4 · Direct democracy: the two-election rule for citizen amendments",
      section: "Making Law",
      body: `Nevada gives citizens **strong direct-democracy tools**, with one distinctive twist (Nevada Secretary of State, n.d.):

- **Initiative**: citizens can gather signatures to propose a **statute** or a **constitutional amendment.**
- **Referendum**: voters can **reject** a law the Legislature passed.
- ⚠️ **The two-election rule.** Here's Nevada's twist: a **citizen-initiated constitutional amendment must be approved by the voters in TWO consecutive general elections** before it takes effect. Passing once isn't enough: the same amendment must **win twice**, two years apart. This makes amending Nevada's constitution by initiative deliberately **slow and deliberate**, guarding against passing sweeping changes on a single wave of enthusiasm (statutory initiatives, by contrast, generally need only one vote, but the Legislature gets a chance to act first).

**How a bill becomes law** (Nevada Legislature, n.d.):
1. **Introduction** during the biennial session; **committee** review; **floor votes** in both houses.
2. **Governor**: sign, veto (two-thirds override), or let it become law.
Remember the **citizen backstop**: Nevadans can **initiate** their own laws and **refer** the Legislature's laws to a vote.

The takeaway: Nevada pairs a **short, every-other-year Legislature** with **strong citizen lawmaking**, but makes constitutional change by initiative pass the unusual **"twice, two years apart"** test.

**Check yourself.** How many times must a citizen-initiated constitutional amendment pass in Nevada before it takes effect?

## Sources
- Nevada Secretary of State. (n.d.). *Initiative, referendum, and the two-election amendment rule*. nvsos.gov. https://www.nvsos.gov/
- Nevada Legislature. (n.d.). *How a bill becomes law*. leg.state.nv.us. https://www.leg.state.nv.us/`,
      recallContent: [
        { prompt: "How often and for how long does Nevada's Legislature meet, and how big are its two houses?", answer: "It meets every other year, in odd-numbered years, limited to 120 days; the Assembly has 42 members and the Senate has 21 senators." },
        { prompt: "How are Nevada's judges chosen, and how many justices sit on the state Supreme Court?", answer: "Judges are elected on a nonpartisan ballot to 6-year terms; the Nevada Supreme Court has 7 justices." },
      ],
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "nv-local-involved",
      title: "5 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government.** Nevada's local layers include (Nevada Legislature, n.d.):
- **16 counties** **plus Carson City**, which is an **independent "consolidated municipality"** (a combined city-county), so Nevada has 16 counties and one Carson City. Counties are governed by elected **boards of county commissioners** (Clark County, home to Las Vegas, is one of the most populous counties in the nation).
- **Cities** provide municipal services; unincorporated **towns** exist in some counties.
- **School districts** in Nevada are **county-based** (each county is essentially one school district), and **special districts** round things out.

**Voting.** ⚠️ **Time-sensitive:** Nevada offers **same-day (Election-Day) registration**, **automatic voter registration** (through the DMV), and mails **ballots to all active registered voters**, plus early voting. Rules and deadlines are administered by **county clerks/registrars** and can change. Confirm the **current** details at **nvsos.gov** before you vote. (And remember: you can vote **"None of These Candidates"** in statewide races.)

**How to take part:**
- **Register and vote**: even on Election Day; watch for your mailed ballot; use the "None of These Candidates" option if you wish to register protest in a statewide race.
- **Use direct democracy.** Sign or circulate an **initiative or referendum**, but recall a constitutional amendment must pass **twice.**
- **Show up locally.** County commissions, city councils, and county school boards hold public meetings.
- **Contact your legislators** in Carson City: you have one Assembly member and one Senator; note the Legislature meets mainly in odd years.
- **Run**: school board, city council, and county commission are reachable local starting points.

**Check yourself.** What is unusual about Carson City's status, and name one voting feature Nevada offers.

## Sources
- Nevada Legislature. (n.d.). *Local government: counties, Carson City, county school districts*. leg.state.nv.us. https://www.leg.state.nv.us/
- Nevada Secretary of State. (n.d.). *Registering and voting: same-day/automatic registration, mailed ballots*. nvsos.gov. https://www.nvsos.gov/`,
      recallContent: [
        { prompt: "Under Nevada's two-election rule, how many times must a citizen-initiated constitutional amendment pass before it takes effect?", answer: "Twice: it must win in two consecutive general elections, two years apart." },
        { prompt: "In Nevada, what is the difference between an initiative and a referendum?", answer: "An initiative lets citizens propose a new statute or constitutional amendment; a referendum lets voters reject a law the Legislature already passed." },
      ],
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "nv-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Nevada state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Nevada is the only state that offers '___ of These Candidates' on statewide ballots.",
            answer: "None",
            accept: ["none"],
            explanation:
              "Since 1976, Nevada lets voters choose 'None of These Candidates' in statewide races (a protest option, though non-binding).",
          },
          {
            prompt:
              "Because casino gaming generates so much revenue, Nevada has no state ___ tax.",
            answer: "income",
            explanation:
              "Gaming taxes and tourism-related revenue let Nevada operate with no state personal income tax.",
          },
          {
            prompt:
              "Nevada's Legislature meets only every ___ year (an odd-year session limited to 120 days).",
            answer: "other",
            accept: ["two years", "second"],
            explanation:
              "Nevada's citizen legislature meets biennially in odd years, capped at 120 days, with term limits.",
          },
          {
            prompt:
              "A citizen-initiated constitutional amendment must pass in ___ consecutive general elections in Nevada.",
            answer: "two",
            accept: ["2"],
            explanation:
              "Nevada's distinctive rule requires an initiated amendment to win twice, two years apart, before taking effect.",
          },
          {
            prompt:
              "Nevada is nicknamed '___ Born' because it joined the Union during the Civil War.",
            answer: "Battle",
            accept: ["battle"],
            explanation:
              "Nevada was admitted October 31, 1864, during the Civil War, to support the Union, hence 'Battle Born.'",
          },
          {
            prompt:
              "TRUE or FALSE: If 'None of These Candidates' wins the most votes in Nevada, the office stays empty.",
            answer: "false",
            explanation:
              "False. The option is non-binding: the highest-finishing actual candidate still wins the office.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "nv-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What can Nevada voters do that no other state's voters can?",
            options: [
              "Vote twice",
              "Vote for 'None of These Candidates' in statewide races",
              "Elect the Governor for life",
              "Skip all taxes",
            ],
            correctIndex: 1,
            explanation:
              "Since 1976 Nevada offers 'None of These Candidates' on statewide ballots, unique in the nation.",
            sourceLessonSlug: "nv-none-of-these",
          },
          {
            prompt: "If 'None of These Candidates' gets the most votes, what happens?",
            options: [
              "The seat stays vacant",
              "The highest-finishing actual candidate still wins (the option is non-binding)",
              "A new election is held",
              "The Governor appoints someone",
            ],
            correctIndex: 1,
            explanation:
              "'None of These Candidates' is a non-binding protest option; the top real candidate takes office.",
            sourceLessonSlug: "nv-none-of-these",
          },
          {
            prompt: "Why does Nevada have no state income tax?",
            options: [
              "It is banned by Congress",
              "Gaming (casino) taxes and tourism revenue fund the state",
              "Nevada has no government",
              "Only counties tax income",
            ],
            correctIndex: 1,
            explanation:
              "Casino gaming taxes and tourism-related revenue let Nevada skip a state income tax.",
            sourceLessonSlug: "nv-gaming-taxes",
          },
          {
            prompt: "Which bodies regulate Nevada's casinos?",
            options: [
              "The Legislature alone",
              "The Gaming Control Board and the Gaming Commission",
              "The federal government",
              "The Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "The Gaming Control Board investigates/enforces and the Gaming Commission licenses, a model copied elsewhere.",
            sourceLessonSlug: "nv-gaming-taxes",
          },
          {
            prompt: "How often does Nevada's Legislature meet?",
            options: [
              "Year-round",
              "Every other year (odd years), limited to 120 days",
              "Once a decade",
              "Only during elections",
            ],
            correctIndex: 1,
            explanation:
              "Nevada's citizen legislature meets biennially in odd years, capped at 120 days.",
            sourceLessonSlug: "nv-executive-legislature",
          },
          {
            prompt: "How are Nevada's judges chosen?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot to 6-year terms",
              "Elected by the Legislature",
              "Chosen by the Gaming Commission",
            ],
            correctIndex: 1,
            explanation:
              "Nevada elects its judges nonpartisan; the Supreme Court has 7 justices on 6-year terms.",
            sourceLessonSlug: "nv-executive-legislature",
          },
          {
            prompt: "How many times must a citizen-initiated constitutional amendment pass in Nevada?",
            options: [
              "Once",
              "Twice, in two consecutive general elections",
              "Three times",
              "It cannot be done by initiative",
            ],
            correctIndex: 1,
            explanation:
              "Nevada requires an initiated amendment to win in two consecutive general elections before it takes effect.",
            sourceLessonSlug: "nv-direct-democracy",
          },
          {
            prompt: "What is unusual about Carson City?",
            options: [
              "It is in another state",
              "It is an independent consolidated municipality (a combined city-county)",
              "It has no residents",
              "It is a national park",
            ],
            correctIndex: 1,
            explanation:
              "Carson City is a consolidated city-county, so Nevada has 16 counties plus Carson City.",
            sourceLessonSlug: "nv-local-involved",
          },
          {
            prompt: "Which voting feature does Nevada offer?",
            options: [
              "No registration ever",
              "Same-day and automatic registration, plus mailed ballots to active voters",
              "Voting only for casino owners",
              "In-person Election-Day voting only",
            ],
            correctIndex: 1,
            explanation:
              "Nevada offers same-day and automatic registration and mails ballots to active registered voters.",
            sourceLessonSlug: "nv-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Nevada's voting and amendment rules?",
            options: [
              "Because Nevada has no elections office",
              "Because registration/ballot rules are run by county clerks and the two-election amendment process is specific: confirm at nvsos.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Nevada administers voting locally and its amendment process is distinctive, so nvsos.gov is the authoritative source.",
            sourceLessonSlug: "nv-local-involved",
          },
        ],
      },
    },
  ],
};
