// Authored "Michigan Civics: How Your State Government Works" — the Michigan entry
// in the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses (US Civics 101, US Constitution 101, State vs Federal Power, and US,
// State & Local Government: Who Does What): those teach the SYSTEM; this teaches
// Michigan's specific version of it.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to MICHIGAN'S OWN OFFICIAL SOURCES: the Legislature
// (legislature.mi.gov), the Department of State / elections (michigan.gov/sos), the
// Judicial Branch (courts.michigan.gov), and the state's Constitution of 1963.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Michigan is a
// heavy user of direct democracy, so its rules move relatively often. Two recent voter
// changes are flagged PROMINENTLY: (1) the Independent Citizens Redistricting Commission
// created by Proposal 2 of 2018 — Michigan took map-drawing away from the Legislature, a
// national first of its kind; and (2) the voting-access and term-limit changes of the
// 2018 and 2022 ballot proposals. Where a fact is time-sensitive, the course tells
// learners to confirm the CURRENT status at michigan.gov/sos rather than asserting it.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_MI_COURSE: AuthoredCourse = {
  title: "Michigan Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Michigan governs itself — and how you take part where you live. You'll learn Michigan's Constitution of 1963; its strong direct democracy (initiative, referendum, and recall); the three state branches; how a bill becomes a Michigan law in a Legislature of 38 senators and 110 representatives; local government across Michigan's 83 counties, cities, villages, and townships; and Michigan's elections — including two recent, voter-approved changes flagged prominently: the Independent Citizens Redistricting Commission (Proposal 2 of 2018), which took district-drawing away from the Legislature, and the expanded voting access of the 2018 and 2022 proposals (no-reason absentee, automatic and same-day registration, nine days of early voting). It closes on how to get involved. Cited to Michigan's own official sources (legislature.mi.gov, michigan.gov/sos, courts.michigan.gov).",
  lessons: [
    // ── Section 1: The Michigan Constitution ─────────────────────────────
    {
      slug: "mi-constitution",
      title: "1 · Michigan's Constitution of 1963 and its direct democracy",
      section: "The Michigan Constitution",
      body: `Michigan governs itself under its **Constitution of 1963** — the state's **fourth** constitution, ratified by voters in 1963 and taking effect **January 1, 1964** (earlier Michigan constitutions were adopted in 1835 at statehood, then 1850 and 1908) (Michigan Legislature, n.d.). Michigan became the **26th state on January 26, 1837.**

A defining feature runs through Michigan civics: **voters themselves hold real lawmaking power.** The 1963 Constitution keeps a strong set of direct-democracy tools (Michigan Department of State, n.d.):

- **Initiative** — citizens can gather signatures to propose a **new law** (an "initiated law," which the Legislature may adopt or send to the ballot) or even a **constitutional amendment** placed directly before voters.
- **Referendum** — voters can **reject** a law the Legislature passed by petitioning to put it on the ballot.
- **Recall** — voters can petition to **remove** most elected officials before their term ends.

This is the through-line: in Michigan, "the government" is not only the officials in Lansing — **the voters are a lawmaking body too.** That single design choice explains several of Michigan's most distinctive modern features, including the citizen-run redistricting commission you'll meet later, which was itself created *by* an initiative.

**A note this course keeps returning to:** state facts **vary and change**, and Michigan — precisely because voters can amend the constitution by petition — changes its rules relatively often. Everything here is current as of authoring, but Michigan's own government (legislature.mi.gov, michigan.gov/sos, courts.michigan.gov) is the authoritative source. When something is time-sensitive, we say so.

**Check yourself.** When did Michigan's current constitution take effect, and name the three direct-democracy tools it gives voters.

## Sources
- Michigan Legislature. (n.d.). *Michigan Constitution of 1963*. legislature.mi.gov. https://www.legislature.mi.gov/
- Michigan Department of State. (n.d.). *Elections and voter information*. michigan.gov/sos. https://www.michigan.gov/sos`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "mi-three-branches",
      title: "2 · The three branches of Michigan government",
      section: "The Three Branches",
      body: `Michigan divides power into the familiar three branches, with a few Michigan-specific twists.

**Legislative — the Michigan Legislature.** A bicameral body (Michigan Legislature, n.d.):
- **Senate — 38 senators**, elected to **4-year terms.**
- **House of Representatives — 110 representatives**, elected to **2-year terms.**
- ⚠️ **Term limits changed recently.** For decades Michigan had among the strictest limits (3 House terms / 2 Senate terms). **Proposal 1 of 2022** replaced that with a combined limit of **12 total years** served in the Legislature (in either chamber, in any combination) — and added financial-disclosure rules. Because this is time-sensitive, confirm the current rule at michigan.gov/sos or legislature.mi.gov.

**Executive — the Governor and separately elected officers.** The **Governor** is the chief executive. The **Lieutenant Governor** runs on a **joint ticket** with the Governor in the general election (so a vote for Governor is a vote for the pair). Two other statewide executives are **elected on their own**: the **Secretary of State** (who runs elections) and the **Attorney General.** Note a Michigan quirk: these down-ballot statewide officers are **nominated at party conventions**, not by primary election. The **State Treasurer** is **appointed** by the Governor, not elected.

**Judicial — the Michigan courts.** Trial courts up through the **Court of Appeals** and the **Michigan Supreme Court** (7 justices). Michigan's method for choosing Supreme Court justices is genuinely distinctive and gets its **own lesson** next (Michigan Courts, n.d.).

**Veto and override.** The Governor may veto bills — and, on spending bills, use a **line-item veto** to strike individual appropriations. The Legislature can override a veto only by a **two-thirds vote of each chamber** (Michigan Legislature, n.d.).

**Check yourself.** How long is a Michigan Senate term versus a House term, and which two statewide executive officers (besides Governor/Lt. Governor) do voters elect directly?

## Sources
- Michigan Legislature. (n.d.). *How the Legislature works; the Michigan Constitution of 1963*. legislature.mi.gov. https://www.legislature.mi.gov/
- Michigan Courts. (n.d.). *Michigan Supreme Court and Court of Appeals*. courts.michigan.gov. https://www.courts.michigan.gov/`,
    },

    // ── Section 3: How Michigan picks its judges ─────────────────────────
    {
      slug: "mi-courts",
      title: "3 · How Michigan chooses its judges (the nonpartisan-ballot quirk)",
      section: "The Three Branches",
      body: `Here is one of Michigan's most distinctive rules — and a favorite trivia trap.

Michigan **Supreme Court** justices are **elected by the voters to 8-year terms** — but on a ballot that is officially **NONPARTISAN**: when you vote for a justice, **no party label appears next to the name** (Michigan Courts, n.d.).

The twist: those "nonpartisan" candidates are actually **nominated by the political parties at their state conventions** (or reach the ballot by petition). So Michigan runs a hybrid system often described as **"partisan nomination, nonpartisan election"** — the parties pick the candidates, but the party labels are stripped off the ballot voters see. It's a genuine Michigan peculiarity worth remembering.

Lower courts:
- **Court of Appeals** judges and **Circuit / District / Probate** court judges are also **elected on nonpartisan ballots.**
- When a judicial seat opens mid-term, the **Governor appoints** a replacement, who then must run at the next election to keep the seat.

**Why this matters.** Different states pick judges in very different ways — some by partisan election, some by pure appointment, some by "merit selection" commissions. Michigan's answer is this nonpartisan-ballot-but-party-nominated hybrid. If you compare states, don't assume Michigan's method from another state's.

**Check yourself.** Do party labels appear next to Michigan Supreme Court candidates on the ballot — and who actually nominates them?

## Sources
- Michigan Courts. (n.d.). *Judicial selection and the Michigan Supreme Court*. courts.michigan.gov. https://www.courts.michigan.gov/
- Michigan Legislature. (n.d.). *Michigan Constitution of 1963, Article VI (Judicial)*. legislature.mi.gov. https://www.legislature.mi.gov/`,
    },

    // ── Section 4: How a bill becomes a Michigan law ─────────────────────
    {
      slug: "mi-bill-to-law",
      title: "4 · How a bill becomes a Michigan law",
      section: "Making Law",
      body: `A Michigan law can be made **two ways** — through the Legislature, or directly by the voters.

**Path 1 — through the Legislature** (Michigan Legislature, n.d.):
1. **Introduction.** A legislator introduces a bill in the House or Senate.
2. **Committee.** The bill goes to a committee, which holds hearings, amends it, and votes on whether to send it forward.
3. **Floor votes.** The full chamber debates and votes. It then goes to the **other chamber** and repeats the process.
4. **Reconciliation.** If the two chambers pass different versions, a **conference committee** works out one text both must approve.
5. **Governor.** The Governor can **sign** it, **veto** it (a two-thirds vote of each chamber overrides), or use a **line-item veto** on appropriations. A bill the Governor neither signs nor returns becomes law after the constitutional waiting period.

**Path 2 — directly by the voters:**
- **Initiated law.** Citizens gather signatures to propose a statute. Unusually, in Michigan an initiated law goes **to the Legislature first**: lawmakers may **enact it as written** (in which case it does not go to the ballot), or decline — and then it goes to the voters.
- **Constitutional amendment by petition** and **referendum** let voters change the constitution or veto a statute directly.

The takeaway: **the Legislature is the usual road, but not the only road.** Michigan voters can make law themselves — a recurring theme of this course.

**Check yourself.** In Michigan, what happens to a citizen "initiated law" *before* it could go on the ballot?

## Sources
- Michigan Legislature. (n.d.). *How a bill becomes law; initiative and referendum*. legislature.mi.gov. https://www.legislature.mi.gov/`,
    },

    // ── Section 5: Redistricting — the citizens' commission ───────────────
    {
      slug: "mi-redistricting",
      title: "5 · Redistricting: Michigan's Independent Citizens Redistricting Commission",
      section: "Elections & Redistricting",
      body: `This is Michigan's headline modern civics story — and a genuine **national first.**

In most states, the **Legislature draws its own district maps** every ten years after the census, which lets the party in power shape districts to its advantage (gerrymandering). **Michigan voters changed that.** **Proposal 2 of 2018** amended the constitution to create the **Independent Citizens Redistricting Commission (ICRC)** and hand it the job of drawing Michigan's **state House, state Senate, and U.S. Congressional** district maps (Michigan Department of State, n.d.).

What makes the ICRC distinctive (Michigan Department of State, n.d.):
- **13 randomly selected citizens** — **4 who affiliate with the Democratic Party, 4 with the Republican Party, and 5 who affiliate with neither** — chosen from applicants by the Secretary of State's office.
- **Politicians and insiders are excluded.** Current and recent officeholders, lobbyists, candidates, and their close relatives generally **cannot serve**, keeping the mapmakers independent of the officials whose districts they draw.
- The commission works in **public**, with required hearings and transparency, and adopting a map needs support **across the partisan groups** — not just one side.

Why it matters: Michigan **took a core power away from the Legislature and gave it to a randomly chosen citizen body** — precisely the kind of reform this course's "voters are a lawmaking body" theme predicts. It's one of the clearest real-world examples of direct democracy reshaping how a state governs itself.

⚠️ **Time-sensitive.** The commission's composition, its maps, and related court rulings evolve over time. For the current commissioners and maps, confirm at **michigan.gov/sos** rather than assuming.

**Check yourself.** Who draws Michigan's legislative and congressional districts, and how many members does that body have?

## Sources
- Michigan Department of State. (n.d.). *Independent Citizens Redistricting Commission*. michigan.gov/sos. https://www.michigan.gov/sos
- Michigan Legislature. (n.d.). *Michigan Constitution of 1963, Article IV, §6 (Independent Citizens Redistricting Commission)*. legislature.mi.gov. https://www.legislature.mi.gov/`,
    },

    // ── Section 6: Elections & voting in Michigan ────────────────────────
    {
      slug: "mi-elections",
      title: "6 · Elections and voting in Michigan",
      section: "Elections & Redistricting",
      body: `Michigan has **expanded voting access substantially** through two voter-approved ballot proposals — a good example of the direct-democracy theme in action (Michigan Department of State, n.d.).

**Proposal 3 of 2018 ("Promote the Vote")** put several voting rights into the **constitution**, including:
- **No-reason absentee (mail) voting** — any registered voter may vote by mail without an excuse.
- **Automatic voter registration** through the Secretary of State, and **same-day / Election-Day registration.**
- **Straight-ticket voting** and the right to a secret ballot.

**Proposal 2 of 2022** expanded access further:
- **Nine days of early in-person voting** before Election Day.
- **State-funded postage** for absentee ballots and **secure drop boxes.**
- A **photo-ID requirement** with the option to sign an **affidavit** if a voter lacks ID (so eligible voters are not turned away).

Michigan's elections are administered by the **Secretary of State** at the state level and run locally by **city and township clerks** — Michigan famously conducts elections through **more than 1,500 local clerks**, a very decentralized system.

⚠️ **Time-sensitive.** Registration deadlines, ID rules, early-voting days, and drop-box locations change and are administered locally. Always confirm the **current** rules and your clerk's details at **michigan.gov/sos** before an election.

**Check yourself.** Name two voting-access changes Michigan voters approved (2018 or 2022), and say who runs elections at the local level.

## Sources
- Michigan Department of State. (n.d.). *Voting in Michigan: registration, absentee, early voting, ID*. michigan.gov/sos. https://www.michigan.gov/sos
- Michigan Legislature. (n.d.). *Michigan Constitution of 1963, Article II (Elections)*. legislature.mi.gov. https://www.legislature.mi.gov/`,
    },

    // ── Section 7: Local government in Michigan ──────────────────────────
    {
      slug: "mi-local-government",
      title: "7 · Local government: counties, cities, villages, and townships",
      section: "Local Government",
      body: `Most of the government you actually touch — roads, police and sheriffs, schools, water, zoning — is **local.** Michigan has an unusually full set of local layers (Michigan Legislature, n.d.):

- **83 counties.** Each is governed by an elected **Board of Commissioners**, plus separately elected county officials (sheriff, clerk, treasurer, prosecuting attorney, register of deeds). Counties handle courts, jails, elections administration, and county roads.
- **Townships** — Michigan keeps **strong townships** (general-law and charter townships) that provide services in areas outside cities. This is a real Michigan feature: townships are active units of government, not just map lines. Every part of Michigan outside a city is in a township.
- **Cities and villages.** Michigan is a strong **home-rule** state: under the **Home Rule City Act (1909)**, cities adopt their own charters and exercise broad local powers. **Villages** are smaller incorporated communities that remain part of their township for some purposes.
- **Special districts and school districts** run schools, transit, and utilities.

Because Michigan layers **county + township + city/village** together, "who do I call?" depends on where you live and which service you need — the county sheriff and the city police are different, and your township or city handles zoning and local roads.

**Check yourself.** How many counties does Michigan have, and what local unit governs the areas *outside* cities?

## Sources
- Michigan Legislature. (n.d.). *Local government: counties, townships, and home-rule cities (Home Rule City Act, 1909)*. legislature.mi.gov. https://www.legislature.mi.gov/`,
    },

    // ── Section 8: Getting involved ──────────────────────────────────────
    {
      slug: "mi-get-involved",
      title: "8 · How to take part where you live",
      section: "Get Involved",
      body: `Civics is not a spectator sport — and in Michigan, ordinary people have unusually direct levers. Here are concrete ways to take part (Michigan Department of State, n.d.):

- **Register and vote — and use the options.** Register (even on Election Day), then choose what fits you: **vote by mail** with no excuse, vote **early in person**, or vote on Election Day. Confirm your registration and clerk at **michigan.gov/sos**.
- **Contact your legislators.** You have **one state Representative and one state Senator.** Find them at legislature.mi.gov and weigh in on bills in committee — where much of the real shaping happens.
- **Show up locally.** County commission, city council, township board, and school-board meetings are **public**, and public-comment time is built in. Local boards decide roads, zoning, and school policy.
- **Use direct democracy.** Michigan lets citizens **initiate laws, amend the constitution, hold referendums, and recall officials** by petition. You can sign, circulate, or organize petitions — a power many states don't grant.
- **Apply to serve.** Citizens can apply for boards and commissions — including, in redistricting years, the **Independent Citizens Redistricting Commission** itself.
- **Run for office.** Township trustee, school board, city council, county commission — local seats are reachable starting points.

**The habit to build:** pick **one** race or issue and follow it from proposal to decision. You'll learn more civics from tracking a single local zoning fight or ballot proposal than from any lecture.

**Check yourself.** Name two direct-democracy actions a Michigan citizen can start by petition.

## Sources
- Michigan Department of State. (n.d.). *Get involved: voting, petitions, and boards and commissions*. michigan.gov/sos. https://www.michigan.gov/sos
- Michigan Legislature. (n.d.). *Find your legislator; initiative, referendum, and recall*. legislature.mi.gov. https://www.legislature.mi.gov/`,
    },

    // ── Section 9: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "mi-exercise",
      title: "9 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Michigan state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Michigan's current constitution, the Constitution of 1963, took effect in the year ___.",
            answer: "1964",
            explanation:
              "The Constitution of 1963 was ratified by voters in 1963 and took effect January 1, 1964 — Michigan's fourth constitution.",
          },
          {
            prompt: "Michigan's Legislature has 38 senators and ___ representatives.",
            answer: "110",
            explanation:
              "The Michigan House has 110 members (2-year terms); the Senate has 38 members (4-year terms).",
          },
          {
            prompt:
              "The 13-member body that draws Michigan's district maps is the Independent Citizens ___ Commission.",
            answer: "redistricting",
            accept: ["Redistricting"],
            explanation:
              "Proposal 2 of 2018 created the Independent Citizens Redistricting Commission — 13 randomly selected citizens (4 Democrats, 4 Republicans, 5 unaffiliated) — taking map-drawing from the Legislature.",
          },
          {
            prompt:
              "On the ballot, Michigan Supreme Court candidates appear WITHOUT a party label — the election is officially ___.",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "Michigan justices are nominated by the parties at convention but elected on a nonpartisan ballot — a distinctive 'partisan nomination, nonpartisan election' hybrid.",
          },
          {
            prompt: "Michigan is divided into ___ counties.",
            answer: "83",
            accept: ["eighty-three"],
            explanation:
              "Michigan has 83 counties, each governed by an elected Board of Commissioners; areas outside cities are governed by townships.",
          },
          {
            prompt:
              "TRUE or FALSE: In Michigan, a citizen 'initiated law' goes to the Legislature first, which may enact it before it would reach the ballot.",
            answer: "true",
            explanation:
              "True. Michigan's initiated-law process routes a petition to the Legislature first; lawmakers may adopt it as written, or it proceeds to the voters.",
          },
        ],
      },
    },

    // ── Section 10: Final quiz ───────────────────────────────────────────
    {
      slug: "mi-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which constitution governs Michigan today, and when did it take effect?",
            options: [
              "The Constitution of 1908, effective 1910",
              "The Constitution of 1963, effective January 1, 1964",
              "The Constitution of 1835, effective at statehood",
              "Michigan has no written constitution",
            ],
            correctIndex: 1,
            explanation:
              "Michigan's fourth constitution — the Constitution of 1963 — was ratified in 1963 and took effect January 1, 1964.",
            sourceLessonSlug: "mi-constitution",
          },
          {
            prompt: "How large are the two chambers of the Michigan Legislature?",
            options: [
              "100 House / 40 Senate",
              "110 House / 38 Senate",
              "150 House / 50 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 1,
            explanation:
              "The Michigan House has 110 members (2-year terms) and the Senate has 38 members (4-year terms).",
            sourceLessonSlug: "mi-three-branches",
          },
          {
            prompt: "How are Michigan Supreme Court justices chosen?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot, though nominated by the parties at convention",
              "Elected in openly partisan races with party labels on the ballot",
              "Chosen by the Legislature",
            ],
            correctIndex: 1,
            explanation:
              "Michigan uses a hybrid: parties nominate candidates at convention, but they appear on a nonpartisan ballot with no party label, elected to 8-year terms.",
            sourceLessonSlug: "mi-courts",
          },
          {
            prompt: "What did Proposal 2 of 2018 create?",
            options: [
              "A state income tax",
              "The Independent Citizens Redistricting Commission",
              "A Lieutenant Governor's office",
              "A unicameral legislature",
            ],
            correctIndex: 1,
            explanation:
              "Proposal 2 of 2018 created the 13-member Independent Citizens Redistricting Commission and moved district-drawing from the Legislature to citizens — a national first of its kind.",
            sourceLessonSlug: "mi-redistricting",
          },
          {
            prompt: "How is the Independent Citizens Redistricting Commission composed?",
            options: [
              "13 members appointed by the Governor",
              "4 Democrats, 4 Republicans, and 5 members affiliated with neither party, randomly selected",
              "All sitting legislators",
              "The state Supreme Court justices",
            ],
            correctIndex: 1,
            explanation:
              "The ICRC is 13 randomly selected citizens — 4 Democrats, 4 Republicans, 5 unaffiliated — with politicians and lobbyists excluded.",
            sourceLessonSlug: "mi-redistricting",
          },
          {
            prompt: "Besides passing a bill through the Legislature, how else can a law be made in Michigan?",
            options: [
              "By the Governor alone",
              "By voters directly, through the initiative and referendum",
              "By a single county board",
              "By the Michigan Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "Michigan voters can initiate laws, amend the constitution by petition, and veto statutes by referendum — direct democracy alongside the Legislature.",
            sourceLessonSlug: "mi-bill-to-law",
          },
          {
            prompt: "What happens to a Michigan citizen 'initiated law' before it could go on the ballot?",
            options: [
              "It goes to the Governor for signature first",
              "It goes to the Legislature first, which may enact it as written",
              "It is decided by the Supreme Court",
              "It is automatically added to the constitution",
            ],
            correctIndex: 1,
            explanation:
              "An initiated law is presented to the Legislature first; if lawmakers adopt it as written it becomes law without a public vote, otherwise it proceeds to the voters.",
            sourceLessonSlug: "mi-bill-to-law",
          },
          {
            prompt: "Which voting-access change did Michigan voters approve?",
            options: [
              "A ban on absentee voting",
              "No-reason absentee voting and automatic/same-day registration (Proposal 3 of 2018)",
              "Ending all early voting",
              "Requiring voters to own property",
            ],
            correctIndex: 1,
            explanation:
              "Proposal 3 of 2018 added no-reason absentee voting, automatic and same-day registration; Proposal 2 of 2022 added nine days of early voting and drop boxes.",
            sourceLessonSlug: "mi-elections",
          },
          {
            prompt: "How many counties does Michigan have, and what governs areas outside cities?",
            options: [
              "50 counties; parishes",
              "83 counties; townships",
              "100 counties; boroughs",
              "23 counties; independent cities",
            ],
            correctIndex: 1,
            explanation:
              "Michigan has 83 counties; every area outside a city lies within a township, a strong local unit in Michigan.",
            sourceLessonSlug: "mi-local-government",
          },
          {
            prompt: "Why does this course tell you to VERIFY Michigan's term-limit and voting rules rather than memorize them?",
            options: [
              "Because Michigan has no official website",
              "Because voter-approved proposals (e.g., 2018 and 2022) changed them recently, so older sources are out of date",
              "Because only Congress sets them",
              "Because the rules are secret",
            ],
            correctIndex: 1,
            explanation:
              "Michigan changes rules by ballot proposal relatively often (term limits in 2022, voting access in 2018 and 2022), so confirm the current status at michigan.gov/sos.",
            sourceLessonSlug: "mi-elections",
          },
        ],
      },
    },
  ],
};
