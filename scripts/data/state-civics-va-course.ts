// Authored "Virginia Civics: How Your State Government Works" — the Virginia entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses (US Civics 101, US Constitution 101, State vs Federal Power, and US,
// State & Local Government: Who Does What): those teach the SYSTEM; this teaches
// Virginia's specific version of it.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to VIRGINIA'S OWN OFFICIAL SOURCES: the General
// Assembly and the Code of Virginia (law.lis.virginia.gov), the Department of
// Elections (elections.virginia.gov), the Judicial System (vacourts.gov), and the
// Constitution of Virginia (1971).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Virginia has
// several genuinely distinctive rules the course leans into — the Governor's one-term
// (no consecutive terms) limit (Virginia is the ONLY state with this rule), judges
// ELECTED BY THE LEGISLATURE, Dillon's Rule, and independent cities separate from
// counties. Time-sensitive items (voter-ID/early-voting rules, the redistricting
// commission) are flagged and point learners to elections.virginia.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_VA_COURSE: AuthoredCourse = {
  title: "Virginia Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the Commonwealth of Virginia governs itself — and how you take part where you live. You'll learn Virginia's Constitution of 1971; its General Assembly (the oldest continuous law-making body in the New World, dating to 1619) of 100 delegates and 40 senators; a genuinely unusual executive — the Governor is the ONLY governor in the nation who cannot serve two consecutive terms; a judiciary whose judges are ELECTED BY THE LEGISLATURE rather than by voters or the governor; Virginia's status as a Dillon's Rule state; and its distinctive local map of 95 counties PLUS 38 independent cities that belong to no county. It also covers elections (odd-year statewide races, no-excuse early voting) and the redistricting commission, flagging time-sensitive rules to confirm at elections.virginia.gov. Cited to Virginia's own official sources (law.lis.virginia.gov, elections.virginia.gov, vacourts.gov).",
  lessons: [
    // ── Section 1: The Virginia Constitution ─────────────────────────────
    {
      slug: "va-constitution",
      title: "1 · Virginia's constitution and 'the Commonwealth'",
      section: "The Virginia Constitution",
      body: `Virginia calls itself a **Commonwealth** — one of only four states that do (with Kentucky, Massachusetts, and Pennsylvania). The word carries no special legal power today; it simply reflects the old idea of government founded on the **common weal**, the common good (Constitution of Virginia; Virginia General Assembly, n.d.).

Virginia governs under its **Constitution of 1971**, which took effect **July 1, 1971.** It's actually Virginia's **seventh** constitution — the Commonwealth has a very long constitutional history stretching back to its first constitution in **1776** (the year Virginia declared independence, alongside George Mason's famous Virginia Declaration of Rights). Virginia became the **10th state on June 25, 1788**, when it ratified the U.S. Constitution.

A few things make Virginia's setup distinctive from the very start, and this course returns to each:
- The **Governor cannot serve two terms in a row** — unique in the nation.
- **Judges are chosen by the Legislature**, not elected by the public or appointed by the Governor.
- Virginia is a **Dillon's Rule** state — local governments have only the powers the state explicitly grants.
- Virginia has **independent cities** that are not part of any county.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Virginia's own government (law.lis.virginia.gov, elections.virginia.gov, vacourts.gov) is the authoritative source. When a fact is time-sensitive — voter ID, early voting, redistricting — we say so and point you there.

**Check yourself.** What is Virginia's current constitution, and what does calling Virginia a "Commonwealth" actually mean?

## Sources
- Virginia General Assembly. (n.d.). *Constitution of Virginia (1971); Code of Virginia*. law.lis.virginia.gov. https://law.lis.virginia.gov/
- Virginia Department of Elections. (n.d.). *About Virginia elections and government*. elections.virginia.gov. https://www.elections.virginia.gov/`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "va-three-branches",
      title: "2 · The three branches of Virginia government",
      section: "The Three Branches",
      body: `Virginia divides power into three branches, with several Virginia-specific twists this course covers in depth.

**Legislative — the General Assembly.** The **oldest continuous law-making body in the New World**, tracing to the **House of Burgesses of 1619.** It is bicameral (Virginia General Assembly, n.d.):
- **House of Delegates — 100 delegates**, elected to **2-year terms.**
- **Senate — 40 senators**, elected to **4-year terms.**
- The General Assembly meets in **Richmond** for a fixed, comparatively **short annual session** (longer in even years for the two-year budget) — a "citizen legislature" tradition.

**Executive — three statewide officers, elected separately.** Virginia voters elect **three** statewide executives, each **on their own** (NOT on a joint ticket): the **Governor**, the **Lieutenant Governor** (who presides over the Senate), and the **Attorney General.** This means Virginia can — and often does — elect a Governor of one party and a Lieutenant Governor or Attorney General of another. ⚠️ **The Governor's term is unique** and gets its own lesson next: **no two consecutive terms.**

**Judicial — the Virginia courts.** From General District and Circuit courts up to the **Court of Appeals** and the **Supreme Court of Virginia** (7 justices). *How* Virginia selects these judges is one of its most distinctive features — covered in its own lesson (Supreme Court of Virginia, n.d.).

**Veto and override.** The Governor may veto bills (and use a line-item veto on appropriations). An override requires a **two-thirds vote of the members present in each chamber.**

**Check yourself.** How many members are in the House of Delegates versus the Senate, and which three statewide executive officers do Virginia voters elect?

## Sources
- Virginia General Assembly. (n.d.). *The General Assembly of Virginia; the Code of Virginia*. law.lis.virginia.gov. https://law.lis.virginia.gov/
- Supreme Court of Virginia. (n.d.). *Virginia's Judicial System*. vacourts.gov. https://www.vacourts.gov/`,
    },

    // ── Section 3: The one-term Governor ─────────────────────────────────
    {
      slug: "va-governor",
      title: "3 · The Governor who cannot serve two terms in a row",
      section: "The Three Branches",
      body: `Here is Virginia's single most famous civics fact — and it is genuinely unique.

**The Governor of Virginia may NOT serve two consecutive terms.** A Virginia Governor is elected to a **4-year term** and then **cannot immediately run for re-election.** Virginia is the **only state in the nation** with this rule — every other state either allows consecutive re-election or has no such consecutive-term bar (Constitution of Virginia, Article V; Virginia General Assembly, n.d.).

An important nuance: the ban is on **consecutive** terms, not on ever serving again. A former Governor **can** run again after sitting out — and it has happened. **Mills Godwin** famously served two **non-consecutive** terms (once as a Democrat, later as a Republican). So the precise rule is: **one term, then you must step away; you may return later.**

Why does this matter beyond trivia? It shapes Virginia politics profoundly:
- Every Governor is, in effect, a **single-term Governor** focused on getting things done in four years.
- The other statewide officers — the **Lieutenant Governor** and **Attorney General** — become the natural next candidates, so Virginia's "bench" politics run through those offices.

Contrast this with the separately elected Lieutenant Governor and Attorney General, who do **not** face the same consecutive-term ban. It's a distinctive design choice rooted in Virginia's long suspicion of concentrated executive power.

**Check yourself.** Can a Virginia Governor run for re-election immediately after their term — and is Virginia unique in this rule?

## Sources
- Virginia General Assembly. (n.d.). *Constitution of Virginia, Article V (Executive)*. law.lis.virginia.gov. https://law.lis.virginia.gov/
- Virginia Department of Elections. (n.d.). *Statewide offices and terms*. elections.virginia.gov. https://www.elections.virginia.gov/`,
    },

    // ── Section 4: How Virginia picks its judges ─────────────────────────
    {
      slug: "va-courts",
      title: "4 · How Virginia chooses its judges (elected by the Legislature)",
      section: "The Three Branches",
      body: `Most Americans assume judges are either **elected by voters** or **appointed by a governor**. Virginia does **neither** for most of its judiciary — and that makes it one of the most distinctive judicial systems in the country.

**In Virginia, judges are elected by the General Assembly** — the Legislature itself (Supreme Court of Virginia, n.d.; Virginia General Assembly, n.d.):
- **Supreme Court of Virginia** justices are **elected by a majority vote of both houses** of the General Assembly to **12-year terms.**
- **Court of Appeals** and **Circuit Court** judges are likewise **elected by the General Assembly** (Circuit judges to 8-year terms).
- **General District** and **Juvenile & Domestic Relations** judges are also chosen by the Legislature (to 6-year terms).

Only **two states** — **Virginia and South Carolina** — use legislative election as the primary way to choose judges. (When the General Assembly is out of session, the Governor may make a temporary interim appointment, but the Legislature makes the lasting choice when it returns.)

Why it matters: it means Virginia judges answer, for reappointment, to the **legislators** rather than to voters or the governor. If you're comparing states, do **not** assume Virginia elects judges at the ballot box — it emphatically does not.

**Check yourself.** Who elects Virginia's Supreme Court justices, and how long is their term?

## Sources
- Supreme Court of Virginia. (n.d.). *Judicial selection in Virginia*. vacourts.gov. https://www.vacourts.gov/
- Virginia General Assembly. (n.d.). *Constitution of Virginia, Article VI (Judiciary)*. law.lis.virginia.gov. https://law.lis.virginia.gov/`,
    },

    // ── Section 5: How a bill becomes law + no initiative ────────────────
    {
      slug: "va-bill-to-law",
      title: "5 · How a bill becomes a Virginia law (and why there's no citizen initiative)",
      section: "Making Law",
      body: `In Virginia, the road to a new law runs **through the General Assembly** — and, unlike many states, there is **no citizen initiative** to go around it.

**How a bill becomes law** (Virginia General Assembly, n.d.):
1. **Introduction.** A Delegate or Senator introduces a bill during the annual session in Richmond.
2. **Committee.** It goes to a committee for hearings, amendment, and a vote.
3. **Floor votes.** The full chamber votes; then the **other chamber** repeats the process.
4. **Reconciliation.** Differences are resolved (often in a conference committee).
5. **Governor.** The Governor may **sign**, **veto** (a two-thirds override is possible), or — distinctively — **propose amendments** and send the bill back to the Assembly for reconsideration.

**No citizen initiative or statewide referendum by petition.** Virginia is **not** an initiative state: ordinary citizens **cannot** gather signatures to put a new law or a constitutional amendment directly on the ballot. Instead, **amending the Constitution of Virginia** requires a deliberately slow, legislature-driven path (Constitution of Virginia, Article XII):
- The General Assembly must **pass the proposed amendment in two separate sessions** with a **general election of the House of Delegates in between**, and
- then the amendment goes to the **voters in a referendum** for final ratification.

That two-sessions-plus-a-vote requirement makes Virginia's constitution comparatively **hard to change** — a strong contrast with initiative-heavy states like Arizona or California.

**Check yourself.** Can Virginia citizens put a law on the ballot by petition? What must happen before a proposed constitutional amendment reaches the voters?

## Sources
- Virginia General Assembly. (n.d.). *How a bill becomes law; Constitution of Virginia, Article XII (Future Changes)*. law.lis.virginia.gov. https://law.lis.virginia.gov/`,
    },

    // ── Section 6: Local government — Dillon's Rule + independent cities ──
    {
      slug: "va-local-government",
      title: "6 · Local government: Dillon's Rule and Virginia's independent cities",
      section: "Local Government",
      body: `Virginia's local government has **two features that trip up newcomers** — and both are genuinely distinctive.

**1. Virginia is a Dillon's Rule state.** Under **Dillon's Rule**, a local government has **only the powers the state has expressly granted it** (plus those necessarily implied). If the Code of Virginia doesn't clearly give a county or city a power, the locality generally **cannot** exercise it — it must ask the General Assembly. This is the **opposite** of a strong "home rule" state (like Michigan or Illinois), where localities start with broad authority. In practice it means Virginia localities frequently go to Richmond for permission to act (Virginia General Assembly, n.d.).

**2. Independent cities separate from counties.** In most states, a city sits **inside** a county. In Virginia, an **independent city is NOT part of any county** — it is a separate, county-equivalent unit with its own government, courts, and services (Virginia Department of Elections, n.d.):
- Virginia has **95 counties** **and 38 independent cities** (a total that shifts occasionally as cities revert to town status).
- Virginia contains the large majority of all independent cities in the entire United States — this is very much a Virginia thing.
- Confusingly, some cities share a name with a neighboring county (e.g., the City of Richmond is separate from surrounding counties). A **town**, by contrast, **is** part of a county; only a **city** is independent.

So "what governs where I live?" in Virginia depends on whether you're in a **county**, an **independent city**, or a **town within a county** — three different answers.

**Check yourself.** What does Dillon's Rule mean for a Virginia locality's powers, and how is an independent city different from a town?

## Sources
- Virginia General Assembly. (n.d.). *Local government and the Code of Virginia (Dillon's Rule)*. law.lis.virginia.gov. https://law.lis.virginia.gov/
- Virginia Department of Elections. (n.d.). *Counties and independent cities of Virginia*. elections.virginia.gov. https://www.elections.virginia.gov/`,
    },

    // ── Section 7: Elections & getting involved ──────────────────────────
    {
      slug: "va-elections",
      title: "7 · Elections, redistricting, and how to take part",
      section: "Get Involved",
      body: `Virginia runs elections on an unusual calendar and has expanded voting access recently — and there are real ways to take part.

**Odd-year statewide elections.** Virginia elects its Governor, Lieutenant Governor, and Attorney General in **odd-numbered years, the year AFTER a presidential election** (for example 2025, 2029). Combined with the one-term governor rule, this gives Virginia a political rhythm all its own — national commentators watch Virginia's odd-year races as early signals (Virginia Department of Elections, n.d.).

**Expanded access.** In 2020 Virginia adopted **no-excuse early voting** (roughly 45 days before Election Day), made Election Day a state holiday, and moved toward **same-day registration.** ⚠️ **Time-sensitive:** Virginia's **voter-ID** rules have changed more than once (a strict photo-ID law was repealed in 2020, with acceptable-ID and no-photo affidavit options), and early-voting windows can be adjusted. **Confirm the current ID and deadline rules at elections.virginia.gov before you vote.**

**Redistricting by commission.** A 2020 constitutional amendment created the **Virginia Redistricting Commission** — a bipartisan body of **legislators and citizens** — to draw legislative and congressional maps. If the commission deadlocks, the **Supreme Court of Virginia draws the maps.** ⚠️ Its composition and outcomes evolve; check elections.virginia.gov for the current status.

**How to take part:**
- **Register and vote** — use early voting or Election Day; verify your registration at elections.virginia.gov.
- **Contact your Delegate and Senator** in Richmond — the short session means bills move fast, so timely input matters.
- **Show up locally** — county boards of supervisors, city councils, and school boards hold public meetings; because of Dillon's Rule, big local changes often need action in Richmond too, so following both levels pays off.
- **Run** — soil and water boards, town councils, school boards, and boards of supervisors are reachable local starting points.

**Check yourself.** In which years does Virginia elect its Governor, and who draws Virginia's district maps?

## Sources
- Virginia Department of Elections. (n.d.). *Voting in Virginia: early voting, ID, registration; the Virginia Redistricting Commission*. elections.virginia.gov. https://www.elections.virginia.gov/
- Virginia General Assembly. (n.d.). *Constitution of Virginia, Article II (Franchise) and redistricting*. law.lis.virginia.gov. https://law.lis.virginia.gov/`,
    },

    // ── Section 8: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "va-exercise",
      title: "8 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Virginia state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Virginia's current constitution is the Constitution of ___.",
            answer: "1971",
            explanation:
              "Virginia's seventh constitution, the Constitution of 1971, took effect July 1, 1971.",
          },
          {
            prompt:
              "Virginia's Governor may NOT serve two ___ terms — a rule unique to Virginia among the states.",
            answer: "consecutive",
            explanation:
              "The Governor is limited to one term at a time and cannot run for immediate re-election, though a former Governor may return after sitting out.",
          },
          {
            prompt:
              "Virginia judges are unusual because they are elected by the ___ (the General Assembly), not by voters or the governor.",
            answer: "legislature",
            accept: ["Legislature", "General Assembly", "general assembly"],
            explanation:
              "Virginia and South Carolina are the two states that primarily elect judges by legislative vote; Virginia Supreme Court justices serve 12-year terms.",
          },
          {
            prompt:
              "Because Virginia follows ___'s Rule, localities have only the powers the state expressly grants them.",
            answer: "Dillon",
            accept: ["dillon", "Dillon"],
            explanation:
              "Dillon's Rule is the opposite of home rule: a Virginia locality must find its power granted in the Code of Virginia or ask the General Assembly.",
          },
          {
            prompt:
              "In Virginia, a city that is NOT part of any county is called an ___ city.",
            answer: "independent",
            explanation:
              "Virginia has 95 counties plus 38 independent cities — county-equivalent units belonging to no county, most of the nation's independent cities.",
          },
          {
            prompt:
              "TRUE or FALSE: Virginia citizens can put a new law on the ballot by gathering signatures (a citizen initiative).",
            answer: "false",
            explanation:
              "False. Virginia has no citizen initiative; amending its constitution requires the General Assembly to pass it in two sessions (with an election between) and then a voter referendum.",
          },
        ],
      },
    },

    // ── Section 9: Final quiz ────────────────────────────────────────────
    {
      slug: "va-quiz",
      title: "9 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which constitution governs Virginia today?",
            options: [
              "The Constitution of 1776",
              "The Constitution of 1902",
              "The Constitution of 1971",
              "Virginia uses the U.S. Constitution only",
            ],
            correctIndex: 2,
            explanation:
              "Virginia's seventh constitution, the Constitution of 1971, took effect July 1, 1971.",
            sourceLessonSlug: "va-constitution",
          },
          {
            prompt: "What is unique about the Governor of Virginia's term?",
            options: [
              "The Governor serves a 6-year term",
              "The Governor cannot serve two consecutive terms — the only state with this rule",
              "The Governor is appointed by the Legislature",
              "There is no term limit at all",
            ],
            correctIndex: 1,
            explanation:
              "Virginia is the only state that bars its Governor from serving two consecutive terms, though a former Governor may return after sitting out.",
            sourceLessonSlug: "va-governor",
          },
          {
            prompt: "Which three statewide executive officers do Virginia voters elect (separately)?",
            options: [
              "Governor, Treasurer, Secretary of State",
              "Governor, Lieutenant Governor, Attorney General",
              "Governor and two U.S. Senators",
              "Only the Governor",
            ],
            correctIndex: 1,
            explanation:
              "Virginia elects the Governor, Lieutenant Governor, and Attorney General separately — they need not be from the same party.",
            sourceLessonSlug: "va-three-branches",
          },
          {
            prompt: "How are Virginia's Supreme Court justices chosen?",
            options: [
              "Elected by voters in partisan races",
              "Appointed for life by the Governor",
              "Elected by the General Assembly (the Legislature) to 12-year terms",
              "Chosen by a citizens' commission",
            ],
            correctIndex: 2,
            explanation:
              "Virginia (with South Carolina) elects judges by legislative vote; its Supreme Court justices serve 12-year terms.",
            sourceLessonSlug: "va-courts",
          },
          {
            prompt: "How many members are in the Virginia House of Delegates and Senate?",
            options: [
              "110 Delegates / 38 Senators",
              "100 Delegates / 40 Senators",
              "150 Delegates / 50 Senators",
              "99 Delegates / 33 Senators",
            ],
            correctIndex: 1,
            explanation:
              "The House of Delegates has 100 members (2-year terms); the Senate has 40 members (4-year terms).",
            sourceLessonSlug: "va-three-branches",
          },
          {
            prompt: "Can Virginia citizens put a new law on the ballot by gathering signatures?",
            options: [
              "Yes, Virginia has a strong initiative process",
              "No — Virginia has no citizen initiative; law is made through the General Assembly",
              "Only in even-numbered years",
              "Only for tax measures",
            ],
            correctIndex: 1,
            explanation:
              "Virginia is not an initiative state; constitutional amendments require two legislative sessions plus a referendum.",
            sourceLessonSlug: "va-bill-to-law",
          },
          {
            prompt: "What does it mean that Virginia is a 'Dillon's Rule' state?",
            options: [
              "Localities have broad home-rule powers by default",
              "Localities have only the powers the state expressly grants them",
              "The Governor controls all local budgets",
              "Counties can secede from the state",
            ],
            correctIndex: 1,
            explanation:
              "Under Dillon's Rule a Virginia locality must find its authority granted in state law — the opposite of home rule.",
            sourceLessonSlug: "va-local-government",
          },
          {
            prompt: "What is a Virginia 'independent city'?",
            options: [
              "A city that governs the surrounding county",
              "A city that is not part of any county — a separate, county-equivalent unit",
              "A city with no elected officials",
              "The state capital only",
            ],
            correctIndex: 1,
            explanation:
              "Virginia has 95 counties plus 38 independent cities that belong to no county — most of the nation's independent cities are in Virginia.",
            sourceLessonSlug: "va-local-government",
          },
          {
            prompt: "In which years does Virginia elect its Governor?",
            options: [
              "The same year as the U.S. President",
              "Odd-numbered years, the year after a presidential election (e.g., 2025, 2029)",
              "Every two years",
              "Only in leap years",
            ],
            correctIndex: 1,
            explanation:
              "Virginia holds statewide elections in odd years following a presidential election, giving it a distinctive political calendar.",
            sourceLessonSlug: "va-elections",
          },
          {
            prompt: "Why does this course tell you to VERIFY Virginia's voter-ID and early-voting rules?",
            options: [
              "Because Virginia has no elections office",
              "Because those rules have changed more than once recently, so older sources may be out of date — confirm at elections.virginia.gov",
              "Because only Congress sets them",
              "Because the rules are secret",
            ],
            correctIndex: 1,
            explanation:
              "Virginia repealed a strict photo-ID law in 2020 and adjusted early voting; the authoritative, current source is elections.virginia.gov.",
            sourceLessonSlug: "va-elections",
          },
        ],
      },
    },
  ],
};
