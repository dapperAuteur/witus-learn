// Authored "Minnesota Civics: How Your State Government Works" — the Minnesota entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Minnesota's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to MINNESOTA'S OWN OFFICIAL SOURCES: the Legislature
// (leg.mn.gov), the Secretary of State / elections (sos.mn.gov), the Judicial Branch
// (mncourts.gov), and the Minnesota Constitution (1858).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules, turnout figures) are flagged and point learners to sos.mn.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_MN_COURSE: AuthoredCourse = {
  title: "Minnesota Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Minnesota governs itself — and how you take part where you live. Minnesota has two civic signatures: it usually leads the nation in voter turnout — powered by being an early adopter of same-day (Election-Day) registration — and its major left-of-center party is the uniquely named Democratic-Farmer-Labor (DFL) party. You'll also learn that Minnesota's Legislature was officially NONPARTISAN for 60 years (1913–1973); Minnesota's Constitution of 1858; its plural executive; its Legislature of 67 senators and 134 representatives; its judiciary; and its 87 counties. It notes Minnesota has no statewide initiative. Time-sensitive facts are flagged, pointing to sos.mn.gov. Cited to Minnesota's own official sources (leg.mn.gov, sos.mn.gov, mncourts.gov).",
  lessons: [
    // ── Section 1: Turnout + same-day registration ───────────────────────
    {
      slug: "mn-turnout",
      title: "1 · Why Minnesota leads the nation in voter turnout",
      section: "What Makes Minnesota Unique",
      body: `Minnesota's proudest civic statistic: it **frequently has the HIGHEST voter turnout of any state.** Election after election, a larger share of eligible Minnesotans vote than almost anywhere else in the country (Minnesota Secretary of State, n.d.).

**Why? Same-day registration, for one.** Minnesota was an **early adopter of Election-Day (same-day) voter registration**, adopting it in **1974.** That means an eligible Minnesotan can **register AND vote on the same day**, at the polls — removing the "I missed the registration deadline" barrier that lowers turnout elsewhere (Minnesota Secretary of State, n.d.). Minnesota pairs this with **no-excuse early/absentee voting** and a strong civic culture.

Minnesota governs under its **Constitution of 1858**, adopted when it became the **32nd state on May 11, 1858.**

Why this leads the course: Minnesota's whole civic identity leans **participatory** — high turnout, easy registration, and (as you'll see) a distinctive party system and an unusual history of nonpartisan government. The lesson to carry: **rules about *how easy it is to register and vote* directly shape *who participates*** — and Minnesota's choices push participation up.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Minnesota's own government (leg.mn.gov, sos.mn.gov, mncourts.gov) is the authoritative source. When something is time-sensitive — like registration or turnout details — we say so.

**Check yourself.** What voting rule (adopted in 1974) helps explain Minnesota's high turnout, and why does it matter?

## Sources
- Minnesota Secretary of State. (n.d.). *Voter turnout and Election-Day registration in Minnesota*. sos.mn.gov. https://www.sos.mn.gov/
- Minnesota State Legislature. (n.d.). *Minnesota Constitution (1858)*. leg.mn.gov. https://www.leg.mn.gov/`,
    },

    // ── Section 2: The DFL + a 60-year nonpartisan legislature ──────────
    {
      slug: "mn-dfl-nonpartisan",
      title: "2 · Two Minnesota distinctives: the DFL and a nonpartisan legislature (1913–1973)",
      section: "What Makes Minnesota Unique",
      body: `Minnesota has **two political peculiarities** you won't find elsewhere.

**1. The DFL — the Democratic-Farmer-Labor Party.** In most states, the two major parties are simply "Democratic" and "Republican." In Minnesota, the main left-of-center party is the **Democratic-Farmer-Labor Party (DFL)** — the product of a **1944 merger** between the Minnesota Democratic Party and the state's strong, independent **Farmer-Labor Party** (Minnesota Secretary of State, n.d.). So a Minnesota "Democrat" is officially a **"DFLer,"** and the ballot and news say **DFL.** (Similarly, the state Republican Party is formally the "Republican Party of Minnesota.") It's a living reminder of Minnesota's distinctive farmer-and-labor political history.

**2. A nonpartisan Legislature for 60 years (1913–1973).** Here's a fact that surprises people: from **1913 to 1973, the Minnesota Legislature was officially NONPARTISAN** — legislators ran and served **without party labels**, a rare experiment among the states (Minnesota State Legislature, n.d.). Minnesota returned to a **partisan** Legislature in **1973.** (Nebraska remains the only *currently* nonpartisan state legislature — but Minnesota did it for six decades.) It's a piece of Minnesota's reform-minded, "good government" tradition.

Why it matters: both features show Minnesota's independent streak — a state that built its **own** party (DFL) and, for a long time, tried to keep **party out of** its Legislature entirely.

**Check yourself.** What does "DFL" stand for, and what was unusual about the Minnesota Legislature from 1913 to 1973?

## Sources
- Minnesota Secretary of State. (n.d.). *Minnesota's political parties, including the DFL*. sos.mn.gov. https://www.sos.mn.gov/
- Minnesota State Legislature. (n.d.). *History of the Legislature: the nonpartisan era (1913–1973)*. leg.mn.gov. https://www.leg.mn.gov/`,
    },

    // ── Section 3: The executive + the Legislature ───────────────────────
    {
      slug: "mn-executive-legislature",
      title: "3 · The executive and the Legislature",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** Minnesota voters elect several statewide officials (Minnesota Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** run **together on a joint ticket.**
- Voters separately elect the **Attorney General**, the **Secretary of State**, and the **State Auditor.**
So Minnesota's elected executive is moderate in size, with the Governor as the clear head.

**Legislative — the Minnesota Legislature.** A bicameral body meeting in St. Paul (Minnesota State Legislature, n.d.):
- **House of Representatives — 134 members**, elected to **2-year terms.**
- **Senate — 67 senators**, elected to **4-year terms** (with one 2-year term each decade around redistricting).
- Note the DFL/partisan point from Lesson 2: today the Legislature is **partisan** (it was nonpartisan 1913–1973).

**Judicial — the Minnesota courts.** District courts up through the Court of Appeals and the **Minnesota Supreme Court** (7 justices). Minnesota **elects** its judges on a **nonpartisan** ballot to **6-year terms** — but in practice, **most judges first reach the bench by gubernatorial appointment** to fill a vacancy and then run as incumbents, a common pattern worth knowing (Minnesota Judicial Branch, n.d.).

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** How many members sit in each chamber of the Minnesota Legislature, and how do most Minnesota judges first reach the bench?

## Sources
- Minnesota Secretary of State. (n.d.). *Statewide elected officials*. sos.mn.gov. https://www.sos.mn.gov/
- Minnesota Judicial Branch. (n.d.). *Judicial selection in Minnesota*. mncourts.gov. https://www.mncourts.gov/`,
    },

    // ── Section 4: How a bill becomes law ────────────────────────────────
    {
      slug: "mn-bill-to-law",
      title: "4 · How a bill becomes a Minnesota law",
      section: "Making Law",
      body: `Minnesota makes law **through the Legislature** — there is **no statewide citizen initiative** (Minnesota State Legislature, n.d.).

**How a bill becomes law:**
1. **Introduction.** A legislator introduces a bill in the House or Senate.
2. **Committee.** Hearings, amendments, and a committee vote.
3. **Floor votes.** Both chambers must pass the bill.
4. **Governor.** The Governor may **sign**, **veto**, or **line-item veto** appropriations; the Legislature overrides with a **two-thirds vote of each chamber.**

**No citizen initiative.** Minnesota citizens **cannot** put a statute or a constitutional amendment on the ballot by petition. **Amendments** are proposed by the **Legislature** and then go to the **voters** — with a distinctive Minnesota rule: to pass, an amendment needs a **majority of everyone voting in that election**, not just a majority of those who marked the amendment question. That means **leaving the amendment blank effectively counts as a "no,"** a quirk that has defeated amendments that a majority of voters on the question actually supported. It's a good example of a rule worth knowing precisely.

The takeaway: in Minnesota, the **Legislature and Governor make the law**, and citizens' direct role is **ratifying amendments** (under that strict majority rule), not starting them.

**Check yourself.** Can Minnesota citizens propose a law by initiative? Why does leaving an amendment question blank count as a "no"?

## Sources
- Minnesota State Legislature. (n.d.). *How a bill becomes law; amending the constitution*. leg.mn.gov. https://www.leg.mn.gov/`,
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "mn-local-involved",
      title: "5 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government.** Minnesota's local layers include (Minnesota State Legislature, n.d.):
- **87 counties**, governed by elected **county boards of commissioners**, plus separately elected officials (sheriff, attorney, auditor).
- **Cities and townships** — Minnesota keeps active **townships** in rural areas alongside incorporated **cities**; larger cities operate under **home-rule charters.**
- **School districts** and **special districts** (including the distinctive **Metropolitan Council** governing regional planning and transit in the Twin Cities area) round out local government.

**Voting.** ⚠️ **Time-sensitive:** Minnesota offers **same-day (Election-Day) registration**, **no-excuse absentee/early voting**, and (unlike some states) has **no strict photo-ID requirement** to vote — but rules change and are administered by **county and city election officials.** Confirm the **current** details at **sos.mn.gov** before you vote.

**How to take part:**
- **Register and vote — even on Election Day.** Minnesota's same-day registration is a big reason turnout is high; use it.
- **Attend the caucuses.** Minnesota has a strong **precinct caucus** tradition (including for the DFL and Republican parties) where neighbors gather to discuss issues and pick delegates — an accessible entry point into party politics.
- **Show up locally.** County boards, city councils, township meetings, and school boards hold public meetings; in the Twin Cities, watch the **Metropolitan Council.**
- **Contact your legislators** in St. Paul — you have one Representative and one Senator.
- **Run** — school board, township board, city council, and county board are reachable local starting points.

**Check yourself.** Name a voting feature that boosts Minnesota turnout, and one local body unique to the Twin Cities region.

## Sources
- Minnesota State Legislature. (n.d.). *Local government: counties, cities, townships, the Metropolitan Council*. leg.mn.gov. https://www.leg.mn.gov/
- Minnesota Secretary of State. (n.d.). *Registering and voting: same-day registration, absentee voting, caucuses*. sos.mn.gov. https://www.sos.mn.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "mn-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Minnesota state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Minnesota often leads the nation in voter ___, helped by Election-Day registration (adopted 1974).",
            answer: "turnout",
            explanation:
              "Same-day registration removes the missed-deadline barrier, helping Minnesota post the nation's highest turnout in many elections.",
          },
          {
            prompt:
              "Minnesota's main left-of-center party is uniquely named the Democratic-Farmer-___ Party (DFL).",
            answer: "Labor",
            accept: ["labor"],
            explanation:
              "The DFL formed from a 1944 merger of the Minnesota Democratic Party and the Farmer-Labor Party; a Minnesota 'Democrat' is a 'DFLer.'",
          },
          {
            prompt:
              "From 1913 to 1973, the Minnesota Legislature was officially ___ (no party labels).",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "Minnesota ran a nonpartisan Legislature for 60 years before returning to a partisan one in 1973.",
          },
          {
            prompt:
              "Minnesota's Legislature has a 67-member Senate and a ___-member House.",
            answer: "134",
            explanation:
              "The Minnesota House has 134 members (2-year terms); the Senate has 67 (mostly 4-year terms).",
          },
          {
            prompt:
              "Because a constitutional amendment needs a majority of ALL voters in the election, leaving it blank counts as a ___.",
            answer: "no",
            accept: ["no vote", "'no'"],
            explanation:
              "Minnesota requires a majority of everyone voting, so a blank on the amendment question effectively counts against it.",
          },
          {
            prompt:
              "TRUE or FALSE: Minnesota has a statewide citizen initiative to propose new laws.",
            answer: "false",
            explanation:
              "False. Minnesota has no statewide initiative; the Legislature proposes amendments, which voters then ratify.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "mn-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why does Minnesota often lead the nation in voter turnout?",
            options: [
              "It requires everyone to vote by law",
              "It was an early adopter of same-day (Election-Day) registration and offers easy voting",
              "It has the smallest population",
              "It only counts some votes",
            ],
            correctIndex: 1,
            explanation:
              "Minnesota's 1974 Election-Day registration and easy voting options remove barriers and boost turnout.",
            sourceLessonSlug: "mn-turnout",
          },
          {
            prompt: "What does 'DFL' stand for in Minnesota politics?",
            options: [
              "Democratic Free Labor",
              "Democratic-Farmer-Labor Party",
              "Direct Federal League",
              "Duluth-Fargo League",
            ],
            correctIndex: 1,
            explanation:
              "The Democratic-Farmer-Labor Party formed from a 1944 merger; a Minnesota Democrat is a 'DFLer.'",
            sourceLessonSlug: "mn-dfl-nonpartisan",
          },
          {
            prompt: "What was unusual about the Minnesota Legislature from 1913 to 1973?",
            options: [
              "It had only one house",
              "It was officially nonpartisan — legislators served without party labels",
              "It never met",
              "It was appointed by the Governor",
            ],
            correctIndex: 1,
            explanation:
              "Minnesota ran a nonpartisan Legislature for 60 years before returning to partisanship in 1973.",
            sourceLessonSlug: "mn-dfl-nonpartisan",
          },
          {
            prompt: "Which statewide officers do Minnesota voters elect?",
            options: [
              "Only the Governor",
              "Governor/Lt. Governor (joint ticket), Attorney General, Secretary of State, and State Auditor",
              "Nine officials",
              "The Legislature elects them all",
            ],
            correctIndex: 1,
            explanation:
              "Minnesota elects the Governor/Lt. Governor jointly, plus the Attorney General, Secretary of State, and State Auditor.",
            sourceLessonSlug: "mn-executive-legislature",
          },
          {
            prompt: "How do most Minnesota judges first reach the bench?",
            options: [
              "By legislative election",
              "By gubernatorial appointment to fill a vacancy, then running as incumbents",
              "By lifetime appointment",
              "By lottery",
            ],
            correctIndex: 1,
            explanation:
              "Though judges are elected nonpartisan to 6-year terms, most first reach the bench via gubernatorial appointment to a vacancy.",
            sourceLessonSlug: "mn-executive-legislature",
          },
          {
            prompt: "How many members are in the Minnesota House and Senate?",
            options: [
              "134 House / 67 Senate",
              "100 House / 40 Senate",
              "99 House / 33 Senate",
              "150 House / 50 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Minnesota House has 134 members and the Senate has 67.",
            sourceLessonSlug: "mn-executive-legislature",
          },
          {
            prompt: "Can Minnesota citizens propose a new law by initiative?",
            options: [
              "Yes, a strong initiative",
              "No — Minnesota has no statewide initiative; the Legislature proposes amendments for voters",
              "Only in even years",
              "Only for taxes",
            ],
            correctIndex: 1,
            explanation:
              "Minnesota has no statewide initiative; citizens ratify amendments the Legislature refers.",
            sourceLessonSlug: "mn-bill-to-law",
          },
          {
            prompt: "Why does leaving a Minnesota amendment question blank effectively count as a 'no'?",
            options: [
              "Because blanks are discarded",
              "Because an amendment needs a majority of ALL voters in the election, not just those marking the question",
              "Because only the Governor counts blanks",
              "Because blanks are counted as 'yes'",
            ],
            correctIndex: 1,
            explanation:
              "Minnesota requires a majority of everyone voting, so skipping the question lowers the 'yes' share and works against passage.",
            sourceLessonSlug: "mn-bill-to-law",
          },
          {
            prompt: "Which regional body is distinctive to Minnesota's Twin Cities area?",
            options: [
              "The Governor's Council",
              "The Metropolitan Council (regional planning and transit)",
              "The Board of Chosen Freeholders",
              "The Permanent Fund",
            ],
            correctIndex: 1,
            explanation:
              "The Metropolitan Council governs regional planning and transit for the Twin Cities region — a distinctive Minnesota body.",
            sourceLessonSlug: "mn-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Minnesota's voting rules?",
            options: [
              "Because Minnesota has no elections office",
              "Because registration and absentee rules change and are administered by county/city officials — confirm at sos.mn.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Minnesota's voting rules are administered locally and can change, so sos.mn.gov is the authoritative, current source.",
            sourceLessonSlug: "mn-local-involved",
          },
        ],
      },
    },
  ],
};
