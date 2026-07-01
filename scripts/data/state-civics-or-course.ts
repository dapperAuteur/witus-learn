// Authored "Oregon Civics: How Your State Government Works" — the Oregon entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Oregon's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to OREGON'S OWN OFFICIAL SOURCES: the Legislature
// (oregonlegislature.gov), the Secretary of State / elections (sos.oregon.gov), the
// Judicial Branch (courts.oregon.gov), and the Oregon Constitution (1859).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Oregon
// pioneered the initiative/referendum ("the Oregon System") and all-mail voting, and
// automatic registration. Time-sensitive items are flagged and point learners to
// sos.oregon.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_OR_COURSE: AuthoredCourse = {
  title: "Oregon Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Oregon governs itself — and how you take part where you live. Oregon shaped American democracy twice over: it gave the nation the 'Oregon System' — the modern citizen initiative and referendum, copied by states everywhere — and it was the FIRST state to run all its elections entirely by mail, later pioneering automatic voter registration too. You'll learn Oregon's Constitution of 1859, its plural executive (no Lieutenant Governor), its Legislature of 30 senators and 60 representatives, how it elects judges on a nonpartisan ballot, and its counties, cities, and nationally known land-use planning. Time-sensitive facts are flagged, pointing to sos.oregon.gov. Cited to Oregon's own official sources (oregonlegislature.gov, sos.oregon.gov, courts.oregon.gov).",
  lessons: [
    // ── Section 1: Constitution + the Oregon System ──────────────────────
    {
      slug: "or-oregon-system",
      title: "1 · The 'Oregon System': how Oregon gave the nation direct democracy",
      section: "What Makes Oregon Unique",
      body: `Oregon governs under its **Constitution of 1859**, adopted when Oregon became the **33rd state on February 14, 1859.** But Oregon's biggest mark on American government came a bit later — and it spread nationwide.

**The Oregon System.** In **1902**, Oregon voters amended their constitution to add the **initiative and referendum** — the power for **citizens to make and repeal laws directly at the ballot.** This package became famous as **"the Oregon System,"** and it was so influential that **states across the country copied it** in the Progressive Era (Oregon Secretary of State, n.d.). When you studied direct democracy in California, Colorado, or Washington, you were looking at Oregon's idea, exported.

Oregon's direct-democracy tools include (Oregon Secretary of State, n.d.):
- **Initiative** — citizens gather signatures to put a **statute or a constitutional amendment** directly on the ballot.
- **Referendum** — voters can **reject** a law the Legislature passed (and the Legislature can also refer measures to voters).
- **Recall** — voters can petition to remove elected officials.

This is the through-line of Oregon civics: **Oregon didn't just adopt direct democracy — it invented the modern American version of it**, and its ballots still carry many measures each cycle.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Oregon's own government (oregonlegislature.gov, sos.oregon.gov, courts.oregon.gov) is the authoritative source. When something is time-sensitive, we say so.

**Check yourself.** What is "the Oregon System," and why does it matter beyond Oregon?

## Sources
- Oregon Secretary of State. (n.d.). *The Oregon System: initiative, referendum, and recall*. sos.oregon.gov. https://sos.oregon.gov/
- Oregon State Legislature. (n.d.). *Oregon Constitution (1859) and direct democracy*. oregonlegislature.gov. https://www.oregonlegislature.gov/`,
    },

    // ── Section 2: All-mail voting + automatic registration ──────────────
    {
      slug: "or-vote-by-mail",
      title: "2 · Oregon went first: all-mail voting and automatic registration",
      section: "Elections",
      body: `Oregon changed how Americans vote — twice.

**The first all vote-by-mail state.** Oregon was the **FIRST state to conduct all its elections entirely by mail.** After years of experiments, Oregon voters approved all-mail elections by **initiative in 1998**, and Oregon has run its elections by mail ever since — the model **Washington and Colorado later followed** (Oregon Secretary of State, n.d.). Every registered voter is **mailed a ballot**; you return it **by mail (postage prepaid) or at an official drop box** by Election Day.

**"Motor Voter" automatic registration.** In **2016**, Oregon became the **first state to launch automatic voter registration** — often called **"Oregon Motor Voter."** When eligible residents interact with the DMV, they are **automatically registered to vote** (with a chance to opt out), rather than having to fill out a separate form. This too has since spread to other states (Oregon Secretary of State, n.d.).

⚠️ **Time-sensitive.** Registration details, drop-box locations, and deadlines are administered by **county clerks** and can change. Confirm the **current** rules and your ballot status at **sos.oregon.gov** or your county clerk before each election.

The takeaway: on the *mechanics* of voting — all-mail ballots and automatic registration — **Oregon has repeatedly gone first**, and much of the country followed.

**Check yourself.** What two national "firsts" did Oregon achieve in how people register and vote?

## Sources
- Oregon Secretary of State. (n.d.). *Vote by mail and automatic voter registration (Oregon Motor Voter)*. sos.oregon.gov. https://sos.oregon.gov/`,
    },

    // ── Section 3: The executive + legislature ───────────────────────────
    {
      slug: "or-executive-legislature",
      title: "3 · The executive (no Lieutenant Governor) and the Legislature",
      section: "The Three Branches",
      body: `**Executive — a plural executive with a twist.** Oregon voters elect several statewide officials, but with a notable gap (Oregon Secretary of State, n.d.):
- **Governor** — the chief executive.
- **Secretary of State**, **State Treasurer**, and **Attorney General** are each **elected separately.**
- ⚠️ **Oregon has NO Lieutenant Governor.** Instead, the **Secretary of State is first in line** to succeed the Governor — a Constitution-of-1859 arrangement that has actually mattered (Oregon has seen the Secretary of State become Governor on a vacancy). (Voters approved *creating* a Lieutenant Governor in concept in a past measure, but confirm the **current** succession law at sos.oregon.gov.)

**Legislative — the Oregon Legislative Assembly.** A bicameral body meeting in Salem (Oregon State Legislature, n.d.):
- **House of Representatives — 60 representatives**, elected to **2-year terms.**
- **Senate — 30 senators**, elected to **4-year terms.**
- It is a **citizen legislature** without long sessions; Oregon added **annual** sessions (a short session in even years) by a 2010 measure.

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** Who is first in line to succeed Oregon's Governor, and how many members sit in each legislative chamber?

## Sources
- Oregon Secretary of State. (n.d.). *Statewide elected officials and succession*. sos.oregon.gov. https://sos.oregon.gov/
- Oregon State Legislature. (n.d.). *The Legislative Assembly*. oregonlegislature.gov. https://www.oregonlegislature.gov/`,
    },

    // ── Section 4: How a bill becomes law ────────────────────────────────
    {
      slug: "or-bill-to-law",
      title: "4 · How a bill becomes an Oregon law",
      section: "Making Law",
      body: `Oregon makes law **two ways** — through the Legislature, or directly by the voters (the Oregon System).

**Path 1 — the Legislature** (Oregon State Legislature, n.d.):
1. **Introduction.** A legislator introduces a bill in the House or Senate.
2. **Committee.** Hearings, amendments, and a committee vote.
3. **Floor votes.** Both chambers must pass the bill.
4. **Governor.** The Governor may sign, veto (two-thirds override), or let it become law.

A distinctive Oregon wrinkle: because Oregon requires a **two-thirds "quorum"** to do business, a **minority of legislators can block action by walking out** and denying quorum — Oregon has seen high-profile legislative **walkouts** used as a tactic. (A 2022 ballot measure now disqualifies legislators with many unexcused absences from re-election — a change worth verifying for current effect.)

**Path 2 — the voters (the Oregon System):**
- **Initiative** — put a statute or constitutional amendment directly on the ballot.
- **Referendum** — reject a law the Legislature passed, or vote on one the Legislature refers.

Oregon voters see **many ballot measures** each cycle — reading them is a real civic task here, exactly as the Oregon System's designers intended.

**Check yourself.** What is a legislative "walkout," and what are the two Oregon-System tools voters can use to make or unmake law?

## Sources
- Oregon State Legislature. (n.d.). *How a bill becomes law; quorum rules*. oregonlegislature.gov. https://www.oregonlegislature.gov/
- Oregon Secretary of State. (n.d.). *Initiative and referendum*. sos.oregon.gov. https://sos.oregon.gov/`,
    },

    // ── Section 5: Courts, local government, land-use planning ───────────
    {
      slug: "or-courts-local",
      title: "5 · Nonpartisan judges, counties, and Oregon's famous land-use planning",
      section: "Local Government & Courts",
      body: `**How Oregon picks its judges.** Oregon **elects** its judges on a **NONPARTISAN ballot** — no party label appears next to their names (Oregon Judicial Department, n.d.). The **Oregon Supreme Court** has **7 justices**, elected statewide to **6-year terms**; Court of Appeals and Circuit judges are elected similarly. When a seat opens mid-term, the **Governor appoints** a replacement who then stands for election.

**Local government** (Oregon State Legislature, n.d.):
- **36 counties**, governed by elected **boards of commissioners**, with many Oregon counties (and cities) operating under **home-rule charters.**
- **Cities** run local services; Oregon has a strong home-rule tradition.
- **Special districts** handle schools, fire, water, and transit.

**A national first in land-use planning.** Oregon is famous for its **statewide land-use planning system**, created in **1973 (Senate Bill 100)**. It requires cities to draw **urban growth boundaries** — lines that concentrate development inside cities and **protect surrounding farmland and forests from sprawl.** It's one of the most distinctive local-government features in the country and a recurring subject of Oregon ballot measures (so, ⚠️ time-sensitive — confirm current rules). It's a good example of how Oregon's civic choices (planning, the environment) show up concretely in how communities grow.

**Check yourself.** How are Oregon judges chosen, and what does an "urban growth boundary" do?

## Sources
- Oregon Judicial Department. (n.d.). *Oregon courts and judicial elections*. courts.oregon.gov. https://www.courts.oregon.gov/
- Oregon State Legislature. (n.d.). *Local government and statewide land-use planning (SB 100, 1973)*. oregonlegislature.gov. https://www.oregonlegislature.gov/`,
    },

    // ── Section 6: Getting involved ──────────────────────────────────────
    {
      slug: "or-get-involved",
      title: "6 · How to take part where you live",
      section: "Get Involved",
      body: `Oregon's civic tools are among the most open in the nation — use them (Oregon Secretary of State, n.d.):

- **Vote — it's mailed to you, and you're likely already registered.** Thanks to all-mail voting and automatic registration, participating is easy: watch for your ballot, mark it, and return it by mail or drop box by Election Day. Verify your status at sos.oregon.gov.
- **Read the measures.** Oregon ballots carry **many initiatives and referendums** — the Oregon System in action. Your vote on them directly makes or unmakes law.
- **Start something.** Sign or circulate an **initiative** (statute or amendment) or a **referendum** to challenge a law — Oregon's on-ramps are wide open.
- **Show up locally.** County commissions, city councils, and school boards meet publicly; land-use and growth decisions are especially active in Oregon.
- **Contact your legislators** in Salem — you have one Representative and one Senator.
- **Run** — school board, city council, special-district, and county offices are reachable local starting points.

**The habit to build:** pick **one** ballot measure this cycle and follow it — who's behind it, what it does, how it's funded. In Oregon, that measure might become law by your vote.

**Check yourself.** Name two reasons voting is unusually easy in Oregon, and one direct-democracy action you can start.

## Sources
- Oregon Secretary of State. (n.d.). *Get involved: voting by mail, initiatives, referendums, and local offices*. sos.oregon.gov. https://sos.oregon.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "or-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Oregon state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "The famous 1902 package of citizen initiative and referendum that spread nationwide is called the Oregon ___.",
            answer: "System",
            accept: ["system"],
            explanation:
              "The 'Oregon System' gave the nation the modern citizen initiative and referendum, copied by many states.",
          },
          {
            prompt:
              "Oregon was the FIRST state to conduct all its elections entirely by ___.",
            answer: "mail",
            explanation:
              "Oregon adopted all vote-by-mail by initiative in 1998; Washington and Colorado later followed.",
          },
          {
            prompt:
              "In 2016 Oregon became the first state to launch ___ voter registration ('Oregon Motor Voter').",
            answer: "automatic",
            explanation:
              "Oregon Motor Voter automatically registers eligible residents through DMV interactions, with a chance to opt out.",
          },
          {
            prompt:
              "Oregon has no Lieutenant Governor; first in line to succeed the Governor is the Secretary of ___.",
            answer: "State",
            accept: ["state"],
            explanation:
              "Under Oregon's constitution the Secretary of State is first in the line of succession — and has become Governor on a vacancy.",
          },
          {
            prompt:
              "Oregon's 1973 land-use law requires cities to draw urban ___ boundaries to limit sprawl.",
            answer: "growth",
            explanation:
              "Senate Bill 100 (1973) created statewide planning with urban growth boundaries that protect farmland and forests.",
          },
          {
            prompt:
              "TRUE or FALSE: Oregon elects its judges in openly partisan (party-labeled) elections.",
            answer: "false",
            explanation:
              "False. Oregon elects judges on a NONPARTISAN ballot — no party label appears next to their names.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "or-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is 'the Oregon System'?",
            options: [
              "A public transit network",
              "The 1902 citizen initiative and referendum, copied by states nationwide",
              "Oregon's tax code",
              "A judicial appointment method",
            ],
            correctIndex: 1,
            explanation:
              "The Oregon System is the modern citizen initiative and referendum Oregon added in 1902 and exported across the country.",
            sourceLessonSlug: "or-oregon-system",
          },
          {
            prompt: "What voting 'first' did Oregon achieve in 1998?",
            options: [
              "The first online voting",
              "The first state to conduct all elections entirely by mail",
              "The first to ban absentee voting",
              "The first to require property ownership",
            ],
            correctIndex: 1,
            explanation:
              "Oregon became the first all vote-by-mail state by initiative in 1998; Washington and Colorado followed.",
            sourceLessonSlug: "or-vote-by-mail",
          },
          {
            prompt: "What did Oregon pioneer in 2016?",
            options: [
              "Automatic voter registration ('Oregon Motor Voter')",
              "A state income tax",
              "Ranked-choice voting statewide",
              "A unicameral legislature",
            ],
            correctIndex: 0,
            explanation:
              "Oregon became the first state to launch automatic voter registration through the DMV in 2016.",
            sourceLessonSlug: "or-vote-by-mail",
          },
          {
            prompt: "Who is first in line to succeed Oregon's Governor?",
            options: [
              "The Lieutenant Governor",
              "The Secretary of State (Oregon has no Lieutenant Governor)",
              "The Speaker of the House",
              "The Chief Justice",
            ],
            correctIndex: 1,
            explanation:
              "Oregon has no Lieutenant Governor; the separately elected Secretary of State is first in the line of succession.",
            sourceLessonSlug: "or-executive-legislature",
          },
          {
            prompt: "How many members are in the Oregon House and Senate?",
            options: [
              "40 House / 20 Senate",
              "60 House / 30 Senate",
              "100 House / 40 Senate",
              "151 House / 35 Senate",
            ],
            correctIndex: 1,
            explanation:
              "The Oregon House has 60 members (2-year terms); the Senate has 30 (4-year terms).",
            sourceLessonSlug: "or-executive-legislature",
          },
          {
            prompt: "What is a legislative 'walkout' in Oregon?",
            options: [
              "A labor strike by state workers",
              "Legislators denying the two-thirds quorum by leaving, blocking action",
              "A vote to expel a member",
              "A type of ballot measure",
            ],
            correctIndex: 1,
            explanation:
              "Because Oregon requires a two-thirds quorum, a minority can block business by walking out — a tactic used in high-profile disputes.",
            sourceLessonSlug: "or-bill-to-law",
          },
          {
            prompt: "How are Oregon's judges chosen?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot (Supreme Court justices to 6-year terms)",
              "Elected by the Legislature",
              "Chosen by a citizens' commission with no election",
            ],
            correctIndex: 1,
            explanation:
              "Oregon elects judges on a nonpartisan ballot; its 7 Supreme Court justices serve 6-year terms.",
            sourceLessonSlug: "or-courts-local",
          },
          {
            prompt: "What does Oregon's 1973 land-use law (SB 100) require?",
            options: [
              "That all land be publicly owned",
              "Urban growth boundaries that concentrate development and protect farmland and forests",
              "A ban on all new housing",
              "That counties merge into the state",
            ],
            correctIndex: 1,
            explanation:
              "SB 100 created statewide planning with urban growth boundaries — a nationally distinctive land-use system.",
            sourceLessonSlug: "or-courts-local",
          },
          {
            prompt: "Which pair of direct-democracy tools defines the Oregon System?",
            options: [
              "Appointment and confirmation",
              "Initiative and referendum",
              "Veto and override",
              "Census and apportionment",
            ],
            correctIndex: 1,
            explanation:
              "The Oregon System is the citizen initiative (make law) and referendum (reject/refer law), plus recall.",
            sourceLessonSlug: "or-oregon-system",
          },
          {
            prompt: "Why does this course tell you to VERIFY Oregon's voting and land-use rules?",
            options: [
              "Because Oregon has no elections office",
              "Because registration/ballot details are run by county clerks and land-use rules recur on ballots and change — confirm at sos.oregon.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Oregon administers elections locally and revisits land-use rules by ballot measure, so sos.oregon.gov is the authoritative, current source.",
            sourceLessonSlug: "or-courts-local",
          },
        ],
      },
    },
  ],
};
