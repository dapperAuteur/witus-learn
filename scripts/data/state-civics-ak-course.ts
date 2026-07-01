// Authored "Alaska Civics: How Your State Government Works" — the Alaska entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Alaska's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to ALASKA'S OWN OFFICIAL SOURCES: the Legislature
// (akleg.gov), the Division of Elections (elections.alaska.gov), the Court System
// (courts.alaska.gov), and the Alaska Constitution (1959).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Alaska's
// top-four/ranked-choice system was adopted in 2020 and has faced repeal efforts, and
// the Permanent Fund Dividend amount changes yearly. Time-sensitive items are flagged
// and point learners to elections.alaska.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_AK_COURSE: AuthoredCourse = {
  title: "Alaska Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Alaska governs itself — and how you take part where you live. Alaska is unlike any other state: it uses BOROUGHS instead of counties, and most of its vast area lies in a single 'Unorganized Borough' with no local government at all; it elects officials through a 'top-four' open primary followed by a ranked-choice general election; and it pays residents an annual Permanent Fund Dividend from its oil-wealth savings — while collecting NO state income tax and NO statewide sales tax. You'll learn Alaska's modern Constitution of 1959, its strong governor and small executive, its Legislature of 20 senators and 40 representatives, its merit-selection judiciary, and its powerful citizen initiative. Time-sensitive facts (the voting system, the dividend) are flagged, pointing to elections.alaska.gov. Cited to Alaska's own official sources (akleg.gov, elections.alaska.gov, courts.alaska.gov).",
  lessons: [
    // ── Section 1: Constitution + boroughs ───────────────────────────────
    {
      slug: "ak-constitution-boroughs",
      title: "1 · Alaska's 1959 Constitution — and boroughs instead of counties",
      section: "What Makes Alaska Unique",
      body: `Alaska governs under its **Constitution of 1959**, adopted as Alaska became the **49th state on January 3, 1959.** Written in the 1950s, it is often praised as one of the **best-designed modern state constitutions** — clean, concise, and built for a brand-new state (Alaska State Legislature, n.d.).

**Boroughs, not counties.** Here is Alaska's most distinctive structural feature: **Alaska has no counties.** Its county-level units are called **boroughs** — and Alaska is one of only two states that doesn't use the word "county" (Louisiana, with its **parishes**, is the other) (Alaska State Legislature, n.d.).

**The Unorganized Borough.** Even more unusual: **most of Alaska's enormous land area is not part of any organized borough at all.** Alaska is divided into a set of **organized boroughs** (about 19, each with its own local government) **plus a single, gigantic "Unorganized Borough"** that covers roughly half the state's area, where **there is no borough-level local government.** In the Unorganized Borough, **the STATE provides the services** a county would elsewhere, and cities and special "**census areas**" handle the rest. This reflects Alaska's reality — vast distances, small and remote populations — and it means "what does my local government do?" has a genuinely different answer depending on whether you live in an organized borough or the Unorganized Borough.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Alaska's own government (akleg.gov, elections.alaska.gov, courts.alaska.gov) is the authoritative source. When something is time-sensitive — like the voting system or the dividend — we say so.

**Check yourself.** What does Alaska call its counties, and what is the "Unorganized Borough"?

## Sources
- Alaska State Legislature. (n.d.). *The Constitution of the State of Alaska (1959); boroughs and the Unorganized Borough*. akleg.gov. https://www.akleg.gov/
- Alaska Division of Elections. (n.d.). *About Alaska government*. elections.alaska.gov. https://www.elections.alaska.gov/`,
    },

    // ── Section 2: The executive + legislature ───────────────────────────
    {
      slug: "ak-executive-legislature",
      title: "2 · A strong Governor, a small executive, and the Legislature",
      section: "The Three Branches",
      body: `Alaska's 1959 constitution deliberately built a **strong Governor** and a **small, streamlined executive** (Alaska State Legislature, n.d.).

**Executive.** Alaska voters elect only **two** statewide officials:
- The **Governor**, and
- The **Lieutenant Governor** — who run **together on a joint ticket.**

That's it. Unlike states with a big "plural executive" (Washington elects nine officials), Alaska's constitution gives the **Governor** appointment power over the rest of the executive branch — the **Attorney General** and department heads are **appointed by the Governor** (with legislative confirmation), not elected. This makes Alaska's Governor comparatively **powerful**, controlling a compact executive.

**Legislative — the Alaska Legislature.** A bicameral body meeting in **Juneau** (Alaska State Legislature, n.d.):
- **House of Representatives — 40 members**, elected to **2-year terms.**
- **Senate — 20 senators**, elected to **4-year terms.**
- Alaska has **no legislative term limits**, and its part-time Legislature is known for **bipartisan coalitions** that sometimes cross party lines to organize a chamber — a practical Alaska habit worth knowing.

**Veto and override.** Alaska's Governor has **strong veto powers**, including a **line-item veto** on appropriations. Overrides are demanding: a regular veto needs **two-thirds**, and overriding a veto of **appropriations** requires a **three-quarters** vote — one of the highest override bars in the country.

**Check yourself.** How many statewide executives do Alaskans elect, and how many members are in each chamber of the Legislature?

## Sources
- Alaska State Legislature. (n.d.). *The executive and legislative branches; veto and override*. akleg.gov. https://www.akleg.gov/`,
    },

    // ── Section 3: Top-four primary + ranked-choice general ──────────────
    {
      slug: "ak-top-four-rcv",
      title: "3 · Alaska's 'top-four' primary and ranked-choice general election",
      section: "Elections",
      body: `Alaska adopted one of the most distinctive election systems in the country — a **"top-four" open primary paired with a ranked-choice general election** — approved by ballot measure in **2020** and first used in **2022** (Alaska Division of Elections, n.d.).

**How it works.**
- **Open 'top-four' primary.** **All candidates for an office — of every party — appear on ONE primary ballot**, and every voter uses the same ballot. The **top FOUR finishers advance** to the general election, regardless of party.
- **Ranked-choice general election.** In November, voters **rank** the (up to four) candidates in order of preference. If no one has a majority of first choices, the **last-place candidate is eliminated** and their votes transfer to next choices, repeating until someone has a **majority.**

This differs from every other system you've met: it's **not** Washington's "top-two," **not** Louisiana's "jungle primary" (where 50% wins outright), and **not** Maine's plain ranked-choice — Alaska **combines** an open top-four primary **with** ranked-choice in the general.

⚠️ **Time-sensitive and contested.** Alaska's system is **relatively new and has faced repeal efforts** at the ballot. Its future could change, and the mechanics are easy to misstate. **Confirm the current system and rules at elections.alaska.gov** rather than assuming.

**Check yourself.** How many candidates advance from Alaska's open primary, and how are the winners then decided in the general election?

## Sources
- Alaska Division of Elections. (n.d.). *Open primary and ranked-choice voting in Alaska*. elections.alaska.gov. https://www.elections.alaska.gov/`,
    },

    // ── Section 4: The Permanent Fund Dividend + no income/sales tax ─────
    {
      slug: "ak-permanent-fund",
      title: "4 · The Permanent Fund Dividend, and why Alaska has no income or sales tax",
      section: "What Makes Alaska Unique",
      body: `Alaska funds its government in a way found nowhere else — and it even **pays its residents** each year.

**The Alaska Permanent Fund.** When oil began flowing from the North Slope, Alaska voters amended the constitution in **1976** to create the **Alaska Permanent Fund** — a **state savings and investment fund** into which a share of **oil and mineral revenue** is deposited and invested for the long term (Alaska State Legislature, n.d.). The idea: turn a one-time, non-renewable resource into a **permanent** source of wealth for current and future Alaskans.

**The Permanent Fund Dividend (PFD).** Each year, a portion of the fund's earnings is distributed as the **Permanent Fund Dividend — an annual cash payment to virtually every eligible Alaska resident** (Alaska Department of Revenue, n.d.). ⚠️ **The amount changes every year** (it depends on fund earnings and legislative decisions), so this is a classic value to **verify** rather than memorize — check the state for the current figure.

**No state income tax, no statewide sales tax.** Because oil revenue and the Permanent Fund do so much of the work, **Alaska levies no state personal income tax and no statewide sales tax** — one of the few states with **neither.** (Local governments may impose **local** sales taxes.) This shapes Alaska politics profoundly: debates over the size of the **dividend** and how much oil money to spend versus save are central civic questions.

**Check yourself.** What is the Permanent Fund Dividend, and what two big taxes does Alaska NOT collect at the state level?

## Sources
- Alaska State Legislature. (n.d.). *The Alaska Permanent Fund (constitutional amendment, 1976)*. akleg.gov. https://www.akleg.gov/
- Alaska Department of Revenue, Permanent Fund Dividend Division. (n.d.). *The Permanent Fund Dividend*. pfd.alaska.gov. https://pfd.alaska.gov/`,
    },

    // ── Section 5: Courts, initiative, getting involved ──────────────────
    {
      slug: "ak-courts-involved",
      title: "5 · Judges, direct democracy, and how to take part",
      section: "Get Involved",
      body: `**How Alaska picks its judges — merit selection plus retention.** Alaska uses the **"Missouri Plan"** (Alaska Court System, n.d.):
1. The **Alaska Judicial Council** (a nonpartisan body of lawyers and citizens) screens applicants and sends the Governor a list of the most qualified.
2. The **Governor appoints** from that list.
3. The judge later faces voters in a **nonpartisan yes/no retention election.** The **Alaska Supreme Court** has **5 justices.** This keeps judges out of partisan campaigns while preserving public accountability.

**Direct democracy.** Alaska's constitution gives citizens **strong tools** (Alaska Division of Elections, n.d.):
- **Initiative** — gather signatures to put a **law** on the ballot (Alaska's top-four/RCV system itself came this way, in 2020).
- **Referendum** — reject a law the Legislature passed.
- **Recall** — remove many elected officials.
(Note: Alaska's initiative can make **statutes**, but not directly amend the constitution — amendments come from the Legislature or a convention, then voters.)

**How to take part:**
- **Register and vote** — learn your ballot: an **open top-four primary** then a **ranked-choice general** (verify at elections.alaska.gov). Alaska also has broad **absentee/by-mail** options given its geography.
- **Show up locally.** In an **organized borough**, attend borough assembly and city council meetings; in the **Unorganized Borough**, your **city** and the **state** are your points of contact.
- **Use the initiative.** Alaska's citizen initiative is a real, frequently used lever.
- **Contact your legislators** in Juneau — you have one Representative and one Senator.
- **Run** — city council, school board, and (in organized boroughs) borough assembly are reachable local starting points.

**Check yourself.** How does Alaska choose its judges, and what is one thing to verify before voting in Alaska?

## Sources
- Alaska Court System. (n.d.). *Judicial selection: the Alaska Judicial Council and retention elections*. courts.alaska.gov. https://courts.alaska.gov/
- Alaska Division of Elections. (n.d.). *Initiative, referendum, recall; registering and voting*. elections.alaska.gov. https://www.elections.alaska.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ak-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Alaska state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Instead of counties, Alaska's county-level units are called ___.",
            answer: "boroughs",
            accept: ["borough"],
            explanation:
              "Alaska has organized boroughs plus a single Unorganized Borough; it is one of two states (with Louisiana's parishes) that doesn't use 'county.'",
          },
          {
            prompt:
              "Most of Alaska's land lies in a single ___ Borough, where the STATE provides county-type services.",
            answer: "Unorganized",
            accept: ["unorganized"],
            explanation:
              "The Unorganized Borough covers roughly half the state's area and has no borough-level government; the state and cities provide services.",
          },
          {
            prompt:
              "Alaska's open primary sends the top ___ candidates to a ranked-choice general election.",
            answer: "four",
            accept: ["4"],
            explanation:
              "Adopted in 2020 and first used in 2022: an open top-four primary, then a ranked-choice general election.",
          },
          {
            prompt:
              "Alaska pays residents an annual Permanent Fund ___ from its oil-wealth savings.",
            answer: "Dividend",
            accept: ["dividend"],
            explanation:
              "The Permanent Fund Dividend (PFD) is a yearly cash payment to eligible residents; the amount changes each year.",
          },
          {
            prompt:
              "Alaska levies NO state personal income tax and NO statewide ___ tax.",
            answer: "sales",
            explanation:
              "Oil revenue and the Permanent Fund let Alaska skip both a state income tax and a statewide sales tax (localities may levy local sales taxes).",
          },
          {
            prompt:
              "TRUE or FALSE: Alaska voters elect many separate statewide executive officers, like a big plural executive.",
            answer: "false",
            explanation:
              "False. Alaskans elect only the Governor and Lieutenant Governor (joint ticket); the Attorney General and department heads are appointed by the Governor.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "ak-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What does Alaska use instead of counties?",
            options: ["Parishes", "Boroughs", "Shires", "Cantons"],
            correctIndex: 1,
            explanation:
              "Alaska uses boroughs; it and Louisiana (parishes) are the two states that don't use 'county.'",
            sourceLessonSlug: "ak-constitution-boroughs",
          },
          {
            prompt: "What is Alaska's 'Unorganized Borough'?",
            options: [
              "A failed city",
              "A single vast area covering much of the state with no borough government, where the state provides services",
              "The state capital",
              "A federal military zone",
            ],
            correctIndex: 1,
            explanation:
              "The Unorganized Borough covers roughly half of Alaska's area and has no borough-level local government; the state and cities provide services.",
            sourceLessonSlug: "ak-constitution-boroughs",
          },
          {
            prompt: "How many statewide executive officials do Alaskans elect?",
            options: [
              "Nine, a large plural executive",
              "Only two — the Governor and Lieutenant Governor (joint ticket)",
              "None; the Legislature picks them",
              "Five",
            ],
            correctIndex: 1,
            explanation:
              "Alaskans elect only the Governor and Lieutenant Governor; the Attorney General and department heads are appointed by the Governor.",
            sourceLessonSlug: "ak-executive-legislature",
          },
          {
            prompt: "How does Alaska's election system work (adopted 2020)?",
            options: [
              "Separate party primaries and winner-take-all",
              "An open 'top-four' primary, then a ranked-choice general election",
              "The Legislature elects all officials",
              "A jungle primary where 50% wins outright",
            ],
            correctIndex: 1,
            explanation:
              "Alaska uses an open top-four primary followed by a ranked-choice general — distinct from top-two, jungle primary, or plain RCV.",
            sourceLessonSlug: "ak-top-four-rcv",
          },
          {
            prompt: "How is Alaska's system different from Louisiana's jungle primary?",
            options: [
              "They are identical",
              "Louisiana lets a 50%+ candidate win outright in round one; Alaska sends the top four to a ranked-choice general",
              "Alaska has no primary",
              "Louisiana uses ranked-choice voting",
            ],
            correctIndex: 1,
            explanation:
              "Louisiana's open primary can end with an outright majority winner; Alaska always advances four candidates to a ranked-choice general.",
            sourceLessonSlug: "ak-top-four-rcv",
          },
          {
            prompt: "What is the Alaska Permanent Fund Dividend (PFD)?",
            options: [
              "A tax Alaskans pay each year",
              "An annual cash payment to eligible residents from the state's invested oil wealth",
              "A federal welfare program",
              "A loan that must be repaid",
            ],
            correctIndex: 1,
            explanation:
              "The PFD distributes a share of Permanent Fund earnings to eligible residents each year; the amount varies annually.",
            sourceLessonSlug: "ak-permanent-fund",
          },
          {
            prompt: "Which taxes does Alaska NOT collect at the state level?",
            options: [
              "Property tax and income tax",
              "State personal income tax and statewide sales tax",
              "All taxes of any kind",
              "Only the gas tax",
            ],
            correctIndex: 1,
            explanation:
              "Alaska has neither a state personal income tax nor a statewide sales tax, thanks to oil revenue and the Permanent Fund (localities may levy local sales taxes).",
            sourceLessonSlug: "ak-permanent-fund",
          },
          {
            prompt: "How does Alaska choose its judges?",
            options: [
              "Partisan elections",
              "Merit selection via the Alaska Judicial Council, gubernatorial appointment, then retention elections",
              "The Legislature elects them",
              "The Permanent Fund board appoints them",
            ],
            correctIndex: 1,
            explanation:
              "Alaska uses the Missouri Plan: the Judicial Council vets applicants, the Governor appoints, and voters retain or remove judges.",
            sourceLessonSlug: "ak-courts-involved",
          },
          {
            prompt: "What can Alaska's citizen initiative do?",
            options: [
              "Nothing; Alaska has no initiative",
              "Put a statute on the ballot (as with the 2020 election-system measure), though not directly amend the constitution",
              "Only raise taxes",
              "Only remove judges",
            ],
            correctIndex: 1,
            explanation:
              "Alaska's initiative can enact statutes (the top-four/RCV system came this way in 2020) but cannot directly amend the constitution.",
            sourceLessonSlug: "ak-courts-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Alaska's voting system and dividend?",
            options: [
              "Because Alaska has no elections office",
              "Because the top-four/RCV system is new and has faced repeal efforts, and the PFD amount changes yearly — confirm at elections.alaska.gov / the state",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Alaska's election system is recent and contested and the dividend varies each year, so the state's own sites are the authoritative, current source.",
            sourceLessonSlug: "ak-top-four-rcv",
          },
        ],
      },
    },
  ],
};
