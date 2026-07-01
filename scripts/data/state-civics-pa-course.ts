// Authored "Pennsylvania Civics: How Your State Government Works" — the
// Pennsylvania entry in the per-state Civics layer on Learn.WitUS. It is the
// state-level companion to the general Civics courses (US Civics 101, US
// Constitution 101, State vs Federal Power, and US, State & Local Government:
// Who Does What): those teach the SYSTEM; this teaches ONE state's specific
// version of it.
//
// Factual and strictly non-partisan (how Pennsylvania's government works, not who
// should win). Every content lesson is cited (APA 7 in-line + a `## Sources`
// bibliography) to PENNSYLVANIA'S OWN OFFICIAL SOURCES: the Pennsylvania
// Constitution and statutes (legis.state.pa.us — the General Assembly's site),
// the Department of State / elections (pa.gov/vote, vote.pa.gov, dos.pa.gov),
// the Unified Judicial System (pacourts.us), and the Department of Community &
// Economic Development / Governor's Center for Local Government Services
// (dced.pa.gov) for the local-government structure.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Where a
// figure is time-sensitive, litigated, or count-dependent, the course SAYS SO and
// points the learner to Pennsylvania's own official source to confirm the current
// value, rather than freezing a number that could go stale. Pennsylvania-specific
// items flagged in-text include:
//   • Act 77's no-excuse MAIL-IN VOTING has been LITIGATED. The Commonwealth
//     Court struck it down in Jan. 2022, but the PA Supreme Court REVERSED and
//     UPHELD it on Aug. 2, 2022 (McLinko v. Dept. of State). It is in effect as of
//     authoring, but voting rules are actively contested — confirm at vote.pa.gov.
//   • VOTER ID rules differ (first-time voters at a new polling place must show ID;
//     mail-ballot applicants provide an ID number) and have been the subject of
//     guidance and litigation — confirm the current rule at pa.gov/vote.
//   • The exact COUNTS of municipalities (boroughs, 1st/2nd-class townships,
//     cities) and of home-rule municipalities shift as places incorporate, merge,
//     or adopt charters — treat any count as approximate (DCED municipal statistics).
//   • Registration/mail-ballot DEADLINES are set by law and by the election
//     calendar — confirm the current deadline at vote.pa.gov before relying on one.
//
// The course is organized into sections (course modules) and ends with a fill-in
// exercise + a final quiz whose every question links back to the lesson that
// teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_PA_COURSE: AuthoredCourse = {
  title: "Pennsylvania Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the Commonwealth of Pennsylvania governs itself — and how you take part where you live. You'll learn Pennsylvania's current 1968 constitution and its unusual amendment path (a proposed amendment must pass the General Assembly in TWO consecutive sessions and then be approved by the voters — and Pennsylvania has NO citizen initiative, so only the legislature can start the process); the three state branches, including a partly-plural executive (the Governor and Lieutenant Governor run as a JOINT TICKET in the general election, while the Attorney General, Auditor General, and Treasurer are each elected separately); the General Assembly — a 203-member House and a 50-member Senate, the largest full-time state legislature in the nation; and a court system whose appellate judges (Supreme, Superior, and Commonwealth courts) are ELECTED in partisan races to 10-year terms and then face nonpartisan yes/no RETENTION votes. You'll learn how a bill becomes a Pennsylvania law — including the Governor's line-item veto on appropriations and the two-thirds override — and Pennsylvania's local government (67 counties; home-rule charters; and a full set of active municipalities — cities, boroughs, and townships of the first and second class — Pennsylvania does NOT abolish townships). Finally you'll learn Pennsylvania's distinctive elections rules — no-excuse mail-in voting since Act 77 of 2019, voter ID for first-time voters, closed primaries, and no citizen initiative — before a lesson on how to get involved. Cited to Pennsylvania's own official sources (legis.state.pa.us, pa.gov/vote, pacourts.us, dced.pa.gov). Because state facts vary and change, the course flags time-sensitive and litigated items — like the ongoing court fights over mail-in voting and voter ID — and points you to Pennsylvania's own sources to confirm the current rule.",
  lessons: [
    // ── Section 1: The Pennsylvania Constitution ─────────────────────────
    {
      slug: "pa-constitution",
      title: "1 · Pennsylvania's constitution: the 1968 rulebook and a two-session amendment path",
      section: "The Pennsylvania Constitution",
      body: `Every U.S. state has its own constitution — its own top-level rulebook — layered *under* the U.S. Constitution but governing the daily machinery of the state. Pennsylvania calls itself a **Commonwealth**, but that's just a traditional name; it is a state like any other, and its current constitution dates to **1968** (Pennsylvania General Assembly, n.d.-a). It is Pennsylvania's fourth constitution, following those of 1776, 1790, 1838, and 1874 — the 1968 document was a major revision adopted through a limited constitutional convention.

A state constitution does for the state what the U.S. Constitution does for the nation: it creates the branches, distributes power, and sets limits the legislature can't cross by ordinary law. Two features of Pennsylvania's document stand out and shape everything else in this course:

- **A hard, two-session amendment path — and NO citizen initiative.** This is the single most important thing to know about changing Pennsylvania's constitution. Under **Article XI, Section 1**, an amendment must be **agreed to by a majority of the members elected to each house** of the General Assembly, then **published**, then **agreed to again by the General Assembly chosen at the next election** (i.e., in the following two-year session), then **published again**, and finally **submitted to the voters**, who approve it by a **majority**. In plain terms: the **legislature must pass it TWICE, in two consecutive sessions, and THEN the voters must approve it** (Pennsylvania Constitution, art. XI, §1). Crucially, **Pennsylvania has NO citizen initiative** — ordinary citizens cannot petition an amendment onto the ballot. Only the General Assembly can start the process. (There is a narrow exception: a single "emergency" amendment addressing a **major natural disaster** can be passed in one session, but that path is rarely used.)
- **A robust Declaration of Rights.** Article I of the Pennsylvania Constitution is a **Declaration of Rights** that in several places protects more than the federal Bill of Rights — for example, an explicit right to a remedy in the courts and, since a 1971 amendment, an **Environmental Rights Amendment** (Art. I, §27) guaranteeing a right to clean air, pure water, and the preservation of the environment (Pennsylvania Constitution, art. I).

⚠️ **A California-style contrast worth remembering.** Some states (like California) let citizens **write a law and pass it at the ballot box** through the initiative. **Pennsylvania does not.** Here, the only way ordinary voters directly decide a statewide question is when the **General Assembly refers something to them** — a proposed constitutional amendment or a statewide ballot question. So in Pennsylvania, "changing the law" almost always means **electing legislators and persuading them**, not signing a petition to make law yourself.

**A note this course keeps returning to:** state facts **vary and change**. Deadlines, court rulings, and rules described here are current as of authoring, but the authoritative source is always Pennsylvania's own government (the offices below), not a textbook. When something is time-sensitive or litigated, we say so.

**Check yourself.** In what year did Pennsylvania adopt its current constitution, what two steps must happen *before* voters ever see a proposed amendment, and what direct-democracy tool does Pennsylvania NOT give its citizens?

## Sources
- Pennsylvania General Assembly. (n.d.-a). *Constitution of Pennsylvania*. Legis.state.pa.us. https://www.legis.state.pa.us/cfdocs/legis/LI/consCheck.cfm?txtType=HTM&ttl=00
- Pennsylvania Constitution, art. XI, §1 (Proposal of amendments). https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.011..HTM
- Pennsylvania Constitution, art. I (Declaration of Rights). https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.001..HTM`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "pa-three-branches",
      title: "2 · The three branches — the joint-ticket Governor and the biggest legislature in the nation",
      section: "The Three Branches",
      body: `Like the federal government, Pennsylvania splits its power into three branches — but the balance between them is distinctly Pennsylvania's.

**Legislative — the General Assembly.** A two-chamber (bicameral) legislature that is the **largest full-time state legislature in the United States**, with **253 total members** (Pennsylvania General Assembly, n.d.-b; Pennsylvania Constitution, art. II):
- **House of Representatives — 203 members, 2-year terms.** Each represents one of 203 districts.
- **Senate — 50 members, 4-year terms** (roughly half the Senate is up every two years).
It writes state law and passes the budget. Pennsylvania has **no term limits** on legislators.

**Executive — a PARTLY-PLURAL executive.** The **Governor** is Pennsylvania's chief executive and may serve at most **two consecutive 4-year terms** (Pennsylvania Constitution, art. IV, §3). Pennsylvania's executive is **partly plural** — some officers are elected with the Governor and some independently, which is a detail people get wrong:
- ⚠️ **The Governor and Lieutenant Governor run as a JOINT TICKET *in the general election*.** In the general election, each voter casts **a single vote applicable to both offices**, so they win or lose together (Pennsylvania Constitution, art. IV, §4). But note the twist: in the **primary**, they are **nominated SEPARATELY** — each party's voters pick a governor nominee and a lieutenant-governor nominee in separate contests, and the two are then paired for the general. So a party's general-election ticket can pair a governor and lieutenant governor who **did not run together in the primary**.
- **Three other statewide "row officers" are elected SEPARATELY** by the voters, on their own, not on the Governor's ticket: the **Attorney General** (the state's chief law-enforcement officer, elected since a 1980 amendment), the **Auditor General** (the fiscal watchdog who audits state spending), and the **State Treasurer** (custodian of state funds) (Pennsylvania Constitution, art. IV, §§4.1, 18). Because these three answer directly to the voters, they can be from a **different party** than the Governor.

**Judicial — the Unified Judicial System.** Pennsylvania's courts run from local magisterial district judges and county trial courts up through three appellate courts to the Supreme Court of Pennsylvania. How Pennsylvania picks those judges — by **election**, not appointment — is distinctive and covered in the next lesson.

**Check yourself.** How many total members sit in the General Assembly, and why is it notable nationally? Explain the difference in how the Lieutenant Governor and the Attorney General each reach office in Pennsylvania.

## Sources
- Pennsylvania General Assembly. (n.d.-b). *The Pennsylvania General Assembly — House (203 members) and Senate (50 members)*. Legis.state.pa.us. https://www.legis.state.pa.us/
- Pennsylvania Constitution, art. II (The Legislature). https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.002..HTM
- Pennsylvania Constitution, art. IV (The Executive). https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.004..HTM`,
    },
    {
      slug: "pa-courts",
      title: "3 · Pennsylvania's courts: elected, then retained",
      section: "The Three Branches",
      body: `How does a state pick its judges? States do it very differently — some appoint judges, some use appoint-then-retain, and some **elect** them outright. Pennsylvania is an **elected-judiciary** state: judges first win a **partisan election**, then keep their seats through nonpartisan **retention** votes (Unified Judicial System of Pennsylvania, n.d.).

**The court system (Pennsylvania Constitution, art. V; Unified Judicial System of Pennsylvania, n.d.):**
1. **Minor courts** — **Magisterial District Judges** (and, in Philadelphia, Municipal Court) handle small cases, landlord-tenant matters, and preliminary criminal proceedings.
2. **Courts of Common Pleas** — the **general trial courts**, organized into **judicial districts** (most districts are a single county). This is where most serious civil and criminal cases are tried.
3. **Two intermediate appellate courts:**
   - The **Superior Court** (15 judges) hears most appeals in **criminal and civil** cases from the Courts of Common Pleas.
   - The **Commonwealth Court** (9 judges) is unusual — a court that hears cases **involving state and local government** (and it can act as a trial court in some government matters).
4. **The Supreme Court of Pennsylvania** — the state's highest court, with **seven justices**. It is one of the **oldest appellate courts in the nation**. It has final say on Pennsylvania law and supervises the whole Unified Judicial System.

**How judges reach and keep the bench (the two-step Pennsylvania model):**
1. **First term — a PARTISAN election.** To win a **full 10-year term**, a candidate for the Supreme, Superior, or Commonwealth court (or Common Pleas) runs **as the nominee of a political party** in a regular partisan election, appearing on the ballot with a party label like any other candidate (Unified Judicial System of Pennsylvania, n.d.).
2. **After that — a nonpartisan RETENTION vote.** When a judge's 10-year term is up, they don't run against an opponent. Instead, voters cast a simple **yes/no "shall this judge be retained?"** vote, with **no party label** on the ballot. A "yes" majority gives another 10-year term (Unified Judicial System of Pennsylvania, n.d.).

⚠️ **A California contrast.** In California, appellate justices are **appointed** and then merely confirmed by voters. In **Pennsylvania**, they win the seat in a **contested partisan election first** — so Pennsylvania's judicial races can be genuinely competitive, party-affiliated campaigns, unlike a pure retention-only system.

**Mandatory retirement.** Pennsylvania judges must retire at the **end of the year in which they turn 75** (Pennsylvania Constitution, art. V, §16(b)). Retired judges may return to work part-time as **senior judges**.

**Why this matters civically:** on your Pennsylvania ballot you may see judges running **with party labels** (first term) *and* judges listed for a **yes/no retention vote** (later terms). Knowing which is which — and that these are separate lines — means you can vote them thoughtfully instead of skipping them.

**Check yourself.** Name Pennsylvania's two intermediate appellate courts and what each mainly handles, and describe the TWO different ways a judge appears on your ballot over a career (first term vs. later terms).

## Sources
- Pennsylvania Constitution, art. V (The Judiciary). https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.005..HTM
- Unified Judicial System of Pennsylvania. (n.d.). *How judges are elected; Courts (Supreme, Superior, Commonwealth, Common Pleas)*. PACourts.us. https://www.pacourts.us/learn/how-judges-are-elected`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "pa-bill-to-law",
      title: "4 · How a bill becomes a Pennsylvania law",
      section: "How a Bill Becomes State Law",
      body: `A bill in the Pennsylvania General Assembly travels a path that rhymes with Congress but has its own steps — and a couple of powerful twists in the Governor's hands. Here's the route (Pennsylvania Constitution, art. III & art. IV, §§15–16).

1. **Introduction.** A legislator introduces a bill in their chamber (House or Senate); it is numbered and referred to a committee.
2. **Committee.** The bill goes to a **standing committee**, which studies it, holds hearings, may amend it, and votes on whether to report it out. **Most bills die in committee** — this is the biggest filter.
3. **Three considerations on the floor.** Pennsylvania's constitution requires that a bill be **considered on three different days in each house** (the "three readings" rule) before final passage — a deliberate slow-down that guards against rushed lawmaking (Pennsylvania Constitution, art. III, §4). On final passage a bill needs a **majority of the members elected** to that house — **102 votes in the 203-member House, 26 in the 50-member Senate**.
4. **The other chamber.** A bill that passes one chamber goes to the other and repeats the whole process. If the second chamber changes it, the two versions must be **reconciled** (the first chamber concurs in the amendments, or a **conference committee** resolves the differences) so both chambers pass **identical** text.
5. **The Governor.** Once both chambers pass the same bill, it goes to the Governor, who can **sign** it, **veto** it, or **let it become law without a signature** (a bill becomes law if the Governor does not act within the constitutional deadline — generally 10 days while the legislature is in session).
6. **The Pennsylvania twists.** Two features stand out:
   - **A two-thirds override.** If the Governor vetoes, the General Assembly can override with a **two-thirds vote of the members elected to each house** — the same supermajority Congress needs (Pennsylvania Constitution, art. IV, §15). In practice, overrides are **rare**.
   - **A line-item veto on spending.** Unlike the U.S. President, Pennsylvania's Governor has a **line-item veto**: on an **appropriations** (spending) bill with distinct items, the Governor may **reduce or strike individual items** while approving the rest. The disapproved items are void unless the General Assembly re-passes them over the veto by the same two-thirds rule (Pennsylvania Constitution, art. IV, §16). This gives the Governor real power over the state budget.

Note what Pennsylvania **lacks**: because there is **no citizen initiative** (Lesson 1), there is no way for citizens to make a *statute* by petition. The only measures that go straight to the voters are things the **General Assembly refers** to the ballot (a proposed constitutional amendment or a statewide ballot question).

**Check yourself.** Put these in order: committee, introduction, the Governor, the other chamber, three-readings floor consideration. Then name the two special powers a Pennsylvania governor has over legislation (hint: one is a supermajority the President also faces; the other is about spending and the President does not have it).

## Sources
- Pennsylvania Constitution, art. III (Legislation — including the three-considerations rule). https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.003..HTM
- Pennsylvania Constitution, art. IV, §§15–16 (Approval of bills; item veto). https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.004..HTM`,
    },

    // ── Section 4: Local government in Pennsylvania ──────────────────────
    {
      slug: "pa-local-government",
      title: "5 · Local government in Pennsylvania: 67 counties, and townships that are NOT abolished",
      section: "Local Government in Pennsylvania",
      body: `Pennsylvania's local government has a shape worth learning carefully — most notably, Pennsylvania has a **full, active layer of townships** (it does **not** abolish them the way some reform proposals in other states have), and it draws a line between "home-rule" and "code" (general-law) local governments (Pennsylvania Department of Community & Economic Development, n.d.).

**Counties — 67 of them.** Pennsylvania is divided into **67 counties**, and every square foot of the state is inside one. Counties handle courts, jails, elections, deeds/records, human services, and (outside cities) much of the public-safety and health infrastructure. Counties are grouped into **classes by population** (Philadelphia is a class of its own as a consolidated city-county) (Pennsylvania DCED, n.d.).

**A LIVE township layer — Pennsylvania does NOT abolish townships.** Below the county, Pennsylvania keeps a full set of active general-purpose **municipalities**, and townships are a major, functioning part of it:
- **Cities** (classified, e.g., first class = Philadelphia, second class = Pittsburgh, second class A = Scranton, and many third-class cities).
- **Boroughs** — smaller incorporated municipalities, the most numerous single type by count.
- **Townships of the FIRST class** — generally more densely populated townships.
- **Townships of the SECOND class** — the most common township type, covering much of Pennsylvania's land area, run by an elected **Board of Supervisors**.
- Plus **one incorporated town** (Bloomsburg), a historical oddity.

⚠️ **This is a key Pennsylvania point: townships here are real, active governments** with elected officials, budgets, roads, police/fire, and zoning — not vestigial lines on a map. Any state-civics lesson that says "townships were abolished" is describing a *different* state; **Pennsylvania has an active township layer.** (The exact *counts* of boroughs and first-/second-class townships shift over time as places incorporate, merge, or change class — treat any specific count as approximate and confirm current figures with DCED.)

**Home rule vs. "code" municipalities — Pennsylvania's version of "home rule."** This is the key distinction:
- A **"code" (general-law)** municipality operates under the default rules the **General Assembly** sets in the relevant municipal code (the Borough Code, the First/Second Class Township Codes, the Third Class City Code, etc.).
- A **home-rule** municipality has adopted its own **home-rule charter** — a local constitution approved by its voters — which lets it **"pick its own form of government and set its own rules"** beyond the codes, subject to state law. Pennsylvania's constitution authorizes home rule (Art. IX, §2), and a range of counties, cities, boroughs, and townships have adopted charters (Pennsylvania Constitution, art. IX; Pennsylvania DCED, n.d.). ⚠️ The number of home-rule municipalities grows as more adopt charters — confirm the current list with DCED.

The practical payoff: **who provides your service depends on where you live** — it might be your **township**, a **borough**, a **city**, your **county**, or a special-purpose authority (water, sewer, transit). But unlike some states, Pennsylvania's answer very often **is** a township.

**Check yourself.** How many counties does Pennsylvania have, what are the main types of general-purpose municipality (name at least three), and what is the one thing about **townships** that makes Pennsylvania different from a state that has abolished them?

## Sources
- Pennsylvania Department of Community & Economic Development. (n.d.). *Municipalities in Pennsylvania; municipal statistics; home rule*. DCED.pa.gov. https://dced.pa.gov/local-government/municipal-statistics/municipalities/
- Pennsylvania Constitution, art. IX (Local Government — home rule). https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/00/00.009..HTM`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "pa-elections",
      title: "6 · Elections in Pennsylvania: Act 77 mail-in voting, closed primaries, voter ID",
      section: "Elections & Ballot Access",
      body: `Elections are run by each state, so Pennsylvania's rules are specifically Pennsylvania's — and several of them have been **actively litigated**. (Because these rules are set by law, change, and are contested in court, the authoritative and current source is always the Department of State at **vote.pa.gov**.)

**No-excuse mail-in voting — Act 77 of 2019.** In **October 2019**, the General Assembly passed **Act 77**, a bipartisan election-reform law that created, for the first time, **no-excuse mail-in voting**: any registered voter may request a mail-in ballot **without giving a reason** (this is separate from the older "absentee" ballot, which requires a qualifying excuse) (Pennsylvania Department of State, n.d.-a). Act 77 also created a permanent mail-ballot request list and adjusted the registration deadline.
- ⚠️ **Act 77 has been LITIGATED — flag it.** In **January 2022**, the Commonwealth Court held (3–2) that Act 77's no-excuse mail-in voting violated the state constitution's in-person "offer to vote" language. But on **August 2, 2022**, the **Supreme Court of Pennsylvania REVERSED that ruling and UPHELD Act 77** as constitutional in *McLinko v. Department of State* (Unified Judicial System of Pennsylvania, n.d.-b). So no-excuse mail-in voting **is in effect as of authoring** — but election rules in Pennsylvania are actively contested, so **confirm the current rule at vote.pa.gov** rather than assuming.

**Closed primaries.** Pennsylvania has a **closed primary**: in the primary election, **only registered Democrats and Republicans may vote for their own party's nominees**. Voters registered as independent or with a third party generally **cannot** vote in the major-party primaries (they can still vote on any ballot questions) (Pennsylvania Department of State, n.d.-b). ⚠️ Bills to open Pennsylvania's primaries are periodically debated — confirm the current rule at vote.pa.gov.

**Voter ID — first-time voters and mail ballots.** Pennsylvania does **not** require photo ID from every in-person voter at every election. But there are two important ID rules:
- **First-time voters at a polling place** (or anyone voting for the first time at a **new** polling place) **must show ID** — which may be a **photo OR a non-photo** ID such as a current utility bill, bank statement, or paycheck (Pennsylvania Department of State, n.d.-c).
- **Mail-ballot applicants** must provide an **ID number** — a **PA driver's license / PennDOT ID number**, or if they have neither, the **last four digits of their Social Security number** (Pennsylvania Department of State, n.d.-a).
⚠️ Voter-ID rules have been the subject of state guidance and litigation — confirm the current requirement at pa.gov/vote.

**Registration — but NO same-day registration.** You must register **at least 15 days before an election** (Pennsylvania Department of State, n.d.-d). You can register **online**, by mail, or at PennDOT and other agencies. ⚠️ **Pennsylvania does NOT offer same-day (Election-Day) registration** — miss the deadline and you cannot register and vote that day, unlike states such as California. Confirm the exact deadline for a given election at vote.pa.gov.

**And still — NO citizen initiative.** As Lesson 1 stressed, Pennsylvania voters **cannot** put a law or constitutional amendment on the ballot by petition. Statewide ballot questions appear **only** when the **General Assembly** refers them.

**Check yourself.** What did Act 77 of 2019 create, and what happened when it was challenged in court? Explain what a "closed primary" means for an independent voter, and name one way Pennsylvania's registration rules are *stricter* than a same-day-registration state.

## Sources
- Pennsylvania Department of State. (n.d.-a). *Mail-in and absentee ballots (Act 77 no-excuse mail-in voting)*. Pa.gov/vote. https://www.pa.gov/agencies/vote/voter-support/mail-in-and-absentee-ballot
- Pennsylvania Department of State. (n.d.-b). *Types of elections (closed primary)*. Pa.gov/vote. https://www.pa.gov/agencies/vote/elections/types-of-elections
- Pennsylvania Department of State. (n.d.-c). *Voter ID for first-time voters*. Vote.pa.gov. https://www.vote.pa.gov/Register-to-Vote/Pages/Voter-ID-for-First-Time-Voters.aspx
- Pennsylvania Department of State. (n.d.-d). *Voter registration (register at least 15 days before the election)*. Pa.gov/vote. https://www.pa.gov/agencies/vote/voter-registration
- Unified Judicial System of Pennsylvania. (n.d.-b). *McLinko v. Commonwealth of Pennsylvania, Dept. of State (Aug. 2, 2022 — Act 77 upheld)*. PACourts.us. https://www.pacourts.us/news-and-statistics/cases-of-public-interest/doug-mclinko-v-commonwealth-of-pennsylvania-dept-of-state`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "pa-get-involved",
      title: "7 · Get involved where you live in Pennsylvania",
      section: "Get Involved Where You Live",
      body: `Knowing how Pennsylvania works only pays off when you **show up**. Because Pennsylvania has **no citizen initiative**, the main way to change state law here is to **elect and persuade legislators** — which makes ordinary participation especially important.

**Register and vote — use Pennsylvania's on-ramps.** Register **online** at **vote.pa.gov** (or at PennDOT), remembering the **15-day-before-the-election deadline** — Pennsylvania has **no same-day registration**, so don't wait. If you want to vote by mail, request a **no-excuse mail-in ballot** under Act 77 well ahead of the deadline, and return it by mail or drop-off per your county's rules (Pennsylvania Department of State, n.d.-a; n.d.-d).

**Vote the whole ballot — including judges and ballot questions.** Pennsylvania ballots include **partisan judicial races**, nonpartisan **retention** yes/no votes (Lesson 3), and, in some years, **statewide ballot questions** the General Assembly has referred (proposed amendments). Read up before you fill these in rather than leaving them blank.

**Contact your state legislators.** You have **one state Representative** and **one state Senator**, on top of your members of Congress. Look them up with the **"Find My Legislator"** tool at **legis.state.pa.us**, read bills, and track committee action — and remember that **most bills live or die in committee**, so a call or testimony **before** a committee vote carries the most weight (Pennsylvania General Assembly, n.d.-b).

**Show up locally — especially your township or borough.** Pennsylvania's real day-to-day government is often the **township board of supervisors**, the **borough council**, or the **city council**, plus your **county commissioners** and the school board. These smaller rooms set your local taxes, zoning, roads, and services — and they're where one person's comment moves things most (Pennsylvania DCED, n.d.).

**Because there's no initiative, elections and hearings ARE the lever.** In states with a citizen initiative, an organized group can write and pass a law at the ballot box. In Pennsylvania, that route doesn't exist — so **voting, contacting legislators, and testifying at hearings** are how citizens actually shape the law. Understanding that changes how you spend your civic energy here.

**Check yourself.** Name three specific ways to get involved in Pennsylvania government, and explain why the **absence of a citizen initiative** makes voting and contacting legislators *more* central here than in an initiative state like California.

## Sources
- Pennsylvania Department of State. (n.d.-a; n.d.-d). *Register to vote; mail-in ballots; deadlines*. Vote.pa.gov. https://www.pa.gov/agencies/vote/voter-registration
- Pennsylvania General Assembly. (n.d.-b). *Find My Legislator; the legislative process*. Legis.state.pa.us. https://www.legis.state.pa.us/cfdocs/legis/home/findyourlegislator/
- Pennsylvania Department of Community & Economic Development. (n.d.). *Local government in Pennsylvania (municipalities, counties)*. DCED.pa.gov. https://dced.pa.gov/local-government/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "pa-practice",
      title: "8 · Practice: Pennsylvania civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Pennsylvania state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Pennsylvania's current constitution was adopted in the year ___.",
            answer: "1968",
            explanation:
              "Pennsylvania's current (fourth) constitution dates to 1968, adopted through a limited constitutional convention.",
          },
          {
            prompt:
              "To amend Pennsylvania's constitution, the General Assembly must pass the amendment in ___ consecutive sessions before it goes to the voters.",
            answer: "two",
            accept: ["2", "2 (two)"],
            explanation:
              "Under Article XI, §1, an amendment must be agreed to by the General Assembly in two consecutive sessions, then approved by a majority of voters. Pennsylvania has no citizen initiative.",
          },
          {
            prompt:
              "The Pennsylvania House has 203 members and the Pennsylvania ___ has 50 members.",
            answer: "senate",
            explanation:
              "The General Assembly is a 203-member House (2-year terms) and a 50-member Senate (4-year terms) — 253 seats, the largest full-time state legislature in the nation.",
          },
          {
            prompt: "Pennsylvania is divided into ___ counties.",
            answer: "67",
            accept: ["sixty-seven", "sixty seven"],
            explanation:
              "Pennsylvania has 67 counties. Below them it keeps an active layer of cities, boroughs, and townships — Pennsylvania does NOT abolish townships.",
          },
          {
            prompt:
              "In the GENERAL election, Pennsylvania's Governor and Lieutenant Governor run together as a joint ___.",
            answer: "ticket",
            explanation:
              "In the general election each voter casts one vote for both offices (a joint ticket). But they are nominated SEPARATELY in the primary.",
          },
          {
            prompt:
              "Pennsylvania's appellate judges first win a partisan election to a full 10-year term, then keep their seats through a nonpartisan yes/no ___ vote.",
            answer: "retention",
            explanation:
              "Judges are elected in partisan races to 10-year terms, then face nonpartisan yes/no retention votes (no party label) to keep the seat.",
          },
          {
            prompt:
              "The 2019 law that created no-excuse mail-in voting in Pennsylvania is Act ___ of 2019.",
            answer: "77",
            explanation:
              "Act 77 of 2019 created no-excuse mail-in voting. The PA Supreme Court upheld it as constitutional on Aug. 2, 2022 (McLinko v. Dept. of State).",
          },
          {
            prompt:
              "TRUE or FALSE: in Pennsylvania, ordinary citizens can put a law on the ballot by gathering petition signatures (a citizen initiative).",
            answer: "false",
            explanation:
              "False. Pennsylvania has NO citizen initiative. Only the General Assembly can refer a constitutional amendment or ballot question to voters.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "pa-quiz",
      title: "9 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "When was Pennsylvania's current constitution adopted, and how is it amended?",
            options: [
              "1776 — by a simple majority of one legislative session",
              "1968 — the General Assembly must pass it in two consecutive sessions, then voters approve it",
              "1968 — citizens gather petition signatures to put it on the ballot",
              "1874 — only the Governor may propose amendments",
            ],
            correctIndex: 1,
            explanation:
              "Pennsylvania's 1968 constitution is amended under Article XI, §1: the General Assembly passes an amendment in two consecutive sessions, then a majority of voters approves it. There is no citizen initiative.",
            sourceLessonSlug: "pa-constitution",
          },
          {
            prompt: "Which direct-democracy tool does Pennsylvania NOT give its citizens?",
            options: [
              "The right to vote",
              "The citizen initiative (petitioning a law or amendment onto the ballot)",
              "The right to a jury trial",
              "The right to contact legislators",
            ],
            correctIndex: 1,
            explanation:
              "Pennsylvania has no citizen initiative. Statewide questions reach the ballot only when the General Assembly refers them.",
            sourceLessonSlug: "pa-constitution",
          },
          {
            prompt: "How large is the Pennsylvania General Assembly, and why is it notable?",
            options: [
              "120 members — the smallest legislature in the nation",
              "A single unicameral house of 49 members",
              "253 members (a 203-member House and 50-member Senate) — the largest full-time state legislature in the nation",
              "435 members, mirroring the U.S. House",
            ],
            correctIndex: 2,
            explanation:
              "The General Assembly is a 203-member House and a 50-member Senate — 253 seats total — the largest full-time state legislature in the United States.",
            sourceLessonSlug: "pa-three-branches",
          },
          {
            prompt: "How do Pennsylvania's Governor and Lieutenant Governor reach office?",
            options: [
              "The Lieutenant Governor is appointed by the Governor",
              "They run as a joint ticket in the general election (but are nominated separately in the primary)",
              "The Legislature chooses both",
              "They are elected in completely separate general elections and can be from different parties",
            ],
            correctIndex: 1,
            explanation:
              "In the general election, one vote elects both as a joint ticket. In the primary they are nominated separately, so a ticket can pair candidates who didn't run together in the primary.",
            sourceLessonSlug: "pa-three-branches",
          },
          {
            prompt: "Which three statewide officers are elected SEPARATELY from the Governor in Pennsylvania?",
            options: [
              "Secretary of State, Insurance Commissioner, and Controller",
              "Attorney General, Auditor General, and State Treasurer",
              "Lieutenant Governor, Speaker of the House, and Chief Justice",
              "Governor, Lieutenant Governor, and President pro tempore",
            ],
            correctIndex: 1,
            explanation:
              "The Attorney General, Auditor General, and State Treasurer are each elected separately (not on the Governor's ticket) and can be from a different party.",
            sourceLessonSlug: "pa-three-branches",
          },
          {
            prompt: "How does a Pennsylvania appellate judge reach and keep the bench?",
            options: [
              "Appointed by the Governor for life",
              "Chosen by the Legislature every two years",
              "Wins a partisan election to a 10-year term, then keeps the seat through nonpartisan yes/no retention votes",
              "Appointed, then confirmed by voters (never elected)",
            ],
            correctIndex: 2,
            explanation:
              "Pennsylvania elects judges: a partisan election for the first 10-year term, then nonpartisan yes/no retention votes for later terms.",
            sourceLessonSlug: "pa-courts",
          },
          {
            prompt: "What power does Pennsylvania's Governor have over the BUDGET that the U.S. President lacks?",
            options: [
              "The power to raise taxes without a vote",
              "A line-item veto to reduce or strike individual appropriation items",
              "The power to dissolve the General Assembly",
              "The power to appoint all legislators",
            ],
            correctIndex: 1,
            explanation:
              "Pennsylvania's Governor has a line-item veto (Art. IV, §16) to reduce or strike individual items in an appropriations bill while approving the rest.",
            sourceLessonSlug: "pa-bill-to-law",
          },
          {
            prompt: "To override a Pennsylvania Governor's veto, the General Assembly needs:",
            options: [
              "A simple majority of each house",
              "A two-thirds vote of the members elected to each house (rare in practice)",
              "Approval of the state Supreme Court",
              "A statewide referendum",
            ],
            correctIndex: 1,
            explanation:
              "A veto override requires a two-thirds vote of the members elected to each house — the same supermajority Congress needs — and it is rare.",
            sourceLessonSlug: "pa-bill-to-law",
          },
          {
            prompt: "Which statement about Pennsylvania local government is correct?",
            options: [
              "Pennsylvania has 67 counties and an active layer of townships (first and second class)",
              "Pennsylvania abolished all its townships",
              "Pennsylvania has no counties, only special districts",
              "Every Pennsylvania municipality must adopt a home-rule charter",
            ],
            correctIndex: 0,
            explanation:
              "Pennsylvania has 67 counties plus active cities, boroughs, and first- and second-class townships. It does NOT abolish townships; home rule is optional.",
            sourceLessonSlug: "pa-local-government",
          },
          {
            prompt: "What is true of Pennsylvania's Act 77 no-excuse mail-in voting?",
            options: [
              "It was struck down permanently and no longer exists",
              "It lets any registered voter vote by mail without an excuse, and the PA Supreme Court upheld it in 2022",
              "It requires every in-person voter to show photo ID at every election",
              "It created a citizen-initiative process",
            ],
            correctIndex: 1,
            explanation:
              "Act 77 of 2019 created no-excuse mail-in voting; after a Commonwealth Court ruling against it, the PA Supreme Court reversed and upheld it on Aug. 2, 2022 (McLinko v. Dept. of State). Confirm current rules at vote.pa.gov.",
            sourceLessonSlug: "pa-elections",
          },
        ],
      },
    },
  ],
};
