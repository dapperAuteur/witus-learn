// Authored "How to Run for Office" — a practical, strictly non-partisan course in
// the Civics curriculum on Learn.WitUS (sibling of US Civics 101 and US Constitution
// 101). It teaches the *process* of running — deciding, getting on the ballot, the
// rules that govern money, building a campaign — not who should win or which party
// to join.
//
// Citation standard (APA 7 in-line + a `## Sources` bibliography) to authoritative,
// non-partisan sources: the FEC (federal campaign rules and limits), USA.gov (the
// federal plain-language guide), the National Conference of State Legislatures
// (NCSL — the canonical source for state-by-state variation), and Ballotpedia
// (ballot-access overviews). Every URL was verified at authoring time.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): eligibility, ballot-access
// requirements (signatures / filing fees), and state/local contribution limits VARY
// by office and by state. This course never states a single signature count, filing
// fee, or state contribution limit as universal — it names the rule, says it varies,
// and points to the authoritative source the reader must check. The only fixed
// numbers asserted are *federal* values published by the FEC (and the uniform
// constitutional age/citizenship minimums for federal office), and even the federal
// individual-contribution limit is flagged as indexed for inflation (it changes each
// cycle), so it's attributed to "the FEC's current limits" rather than frozen here.
//
// Ends with a quiz whose every question links back to the lesson that teaches the
// answer (the quiz standard) — and whose answers are about the *process*, never a
// partisan judgment.

import type { AuthoredCourse } from "./authored-course";

export const HOW_TO_RUN_COURSE: AuthoredCourse = {
  title: "How to Run for Office: A Practical, Non-Partisan Guide",
  description:
    "A clear, non-partisan, step-by-step guide to running for elected office in the United States — deciding whether and which office to run for (local to federal), the eligibility basics (which vary by office and state), how to get on the ballot, the rules that govern campaign money (the FEC for federal races vs. state and local rules), building a campaign, fundraising ethics, finance disclosure, and what happens on Election Day and after. Cited to the FEC, USA.gov, NCSL, and Ballotpedia. It teaches you the process — not who should win.",
  lessons: [
    // ── Section 1: Deciding to run ───────────────────────────────────────
    {
      slug: "deciding-to-run-and-which-office",
      title: "1 · Deciding to run — and which office",
      section: "Deciding to Run",
      body: `Running for office in the U.S. almost always starts **local**. The country elects roughly half a million offices — school boards, city and town councils, county commissions, sheriffs, judges, state legislators, statewide offices, U.S. House and Senate, and the presidency. Most first-time candidates run for a **local or state** seat, where a real campaign is possible on a small budget and a small team.

A useful way to choose an office is to work **up** the ladder, matching the office to your goal and your capacity:

- **Local** (school board, city/town council, county board) — closest to daily life (schools, roads, zoning, local budgets); smallest electorate; lowest cost; often non-partisan ballots.
- **State** (state legislature, statewide offices like secretary of state) — sets state law, which governs much of daily life (elections administration, education, criminal law, licensing).
- **Federal** (U.S. House, U.S. Senate, President) — national in scope; the most regulated and most expensive; governed by the **Federal Election Commission (FEC)**.

Two practical questions before you commit: **Is the seat actually open or competitive?** (an incumbent changes the math), and **what does this office actually decide?** Run for the office that controls the thing you want to change.

USA.gov's plain-language election guides are a good neutral starting point for how federal offices are filled, and your **state and local election office** is the authoritative source for the offices on your local ballot (USA.gov, n.d.-a; USA.gov, n.d.-b).

**Check yourself.** Name one reason most first-time candidates start with a local or state office rather than a federal one.

## Sources
- USA.gov. (n.d.-a). *How the president is elected*. https://www.usa.gov/election
- USA.gov. (n.d.-b). *State and local election offices*. https://www.usa.gov/state-election-office`,
    },

    // ── Section 2: Can you run? ──────────────────────────────────────────
    {
      slug: "eligibility-basics",
      title: "2 · Eligibility basics (and why they vary)",
      section: "Can You Run?",
      body: `Before anything else, confirm you are **eligible** for the specific seat. Eligibility is set by **different sources of law depending on the office**, so there is no single nationwide answer — this is the first place the "it varies" rule bites.

**Federal offices** have eligibility fixed in the U.S. Constitution, and these are uniform:

- **U.S. House** — at least **25** years old, a U.S. citizen for **7** years, and an inhabitant of the state when elected (U.S. Const. art. I, § 2).
- **U.S. Senate** — at least **30** years old, a U.S. citizen for **9** years, and an inhabitant of the state (U.S. Const. art. I, § 3).
- **President** — a **natural-born citizen**, at least **35** years old, and a U.S. resident for **14** years (U.S. Const. art. II, § 1; USA.gov, n.d.-c).

**State and local offices are different.** Age, residency, and other qualifications for state and local seats are set by **each state's constitution and statutes**, so they **vary from state to state and from office to office**. For example, the minimum age and the length and type of residency required to run for a state legislature differ across states — NCSL maintains the state-by-state breakdown (NCSL, n.d.-a). Some offices also carry job-specific requirements (e.g., a law license for certain judgeships, or being a registered voter in the district).

**Do not assume.** Check the eligibility rules for *your* office with the authoritative source: your **state or local election office** (USA.gov, n.d.-b), and for state legislatures, NCSL's eligibility table (NCSL, n.d.-a).

**Check yourself.** For a *state* legislative seat, are the age and residency rules the same in every state? Where would you confirm the rule for your state?

## Sources
- U.S. Const. art. I, §§ 2–3; art. II, § 1. Constitution Annotated, Congress.gov. https://constitution.congress.gov/
- USA.gov. (n.d.-b). *State and local election offices*. https://www.usa.gov/state-election-office
- USA.gov. (n.d.-c). *Constitutional requirements for presidential candidates*. https://www.usa.gov/requirements-for-presidential-candidates
- NCSL. (n.d.-a). *Eligibility requirements to run for the state legislature*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/eligibility-requirements-to-run-for-the-state-legislature`,
    },
    {
      slug: "getting-on-the-ballot",
      title: "3 · Getting on the ballot (petitions and filing fees)",
      section: "Can You Run?",
      body: `Being eligible doesn't put your name on the ballot — **ballot access** is a separate step, and it is run **by the states**, so the exact requirements **vary by state and by office** (Ballotpedia, n.d.-a).

There are generally **three paths** onto the ballot:

1. **Party nomination** — win a party's **primary** or be nominated at a **convention** (you typically must be a registered member of that party).
2. **Independent / unaffiliated** — usually qualify by **petition**, collecting a set number of valid signatures from voters in the district.
3. **Write-in** — in many states you must **file a declaration** in advance to have write-in votes counted.

Whichever path, expect some combination of:

- A **filing form / declaration of candidacy** by a **deadline** (deadlines are firm and easy to miss).
- A **filing fee**, **a signature petition**, or **sometimes a choice between them** — and the required **number of signatures** and **fee amount vary widely** by state and office.

**Do not state a single number.** The signature count and filing fee for, say, a city council seat in one state tell you nothing about another state — or even another office in the same state. Get the exact petition rules, signature threshold, fee, and deadline for *your* office from your **state or local election office** (USA.gov, n.d.-b), and use Ballotpedia's per-state ballot-access overviews to understand the landscape (Ballotpedia, n.d.-a; Ballotpedia, n.d.-b).

**Check yourself.** Name the three general paths onto the ballot, and name the authoritative place to get the exact signature and fee requirements for your office.

## Sources
- Ballotpedia. (n.d.-a). *Ballot access*. https://ballotpedia.org/Ballot_access
- Ballotpedia. (n.d.-b). *Ballot access for major and minor party candidates*. https://ballotpedia.org/Ballot_access_for_major_and_minor_party_candidates
- USA.gov. (n.d.-b). *State and local election offices*. https://www.usa.gov/state-election-office`,
    },

    // ── Section 3: The money rules ───────────────────────────────────────
    {
      slug: "fec-basics-for-federal-races",
      title: "4 · The FEC: money rules for federal races",
      section: "The Money Rules",
      body: `If you run for a **federal** office (U.S. House, U.S. Senate, or President), your campaign's money is governed by the **Federal Election Campaign Act** and the **Federal Election Commission (FEC)**. The core steps:

- **You become a "candidate" once money crosses a threshold.** Under FEC rules you become a candidate when you (or people you've authorized) **raise or spend more than $5,000** in contributions or expenditures (FEC, n.d.-a).
- **File a Statement of Candidacy (Form 2)** within **15 days** of crossing that threshold (FEC, n.d.-b).
- **Designate a principal campaign committee**, which must then **register with the FEC** by filing a **Statement of Organization (Form 1)** within **10 days** of being designated (FEC, n.d.-b; FEC, n.d.-c). Practical prerequisites: get a **tax ID** and a **campaign bank account**, and **appoint a treasurer** (the legally responsible record-keeper) (FEC, n.d.-a).

**Contribution limits — a federal value that still changes.** The FEC sets how much each source may give. The **individual-to-candidate** limit is **per election** (a primary, general, runoff, and special each count separately) and is **indexed for inflation in odd-numbered years**, so the dollar amount **changes each cycle**. Rather than freeze a number here, check the **FEC's current contribution-limit chart** for the cycle you're running in (FEC, n.d.-d).

**State and local races are NOT under the FEC.** A school-board, city-council, or state-legislative campaign follows **state law**, not the FEC — different registration, different (or no) committee forms, and different contribution limits. Some states cap contributions; others don't; the caps that exist vary widely (NCSL, n.d.-b). Confirm which regime applies to *your* race before you raise a dollar.

**Check yourself.** What dollar amount of raising or spending makes you a federal "candidate," and which body's rules govern a *state* legislative race instead of the FEC?

## Sources
- FEC. (n.d.-a). *Registering as a candidate*. Federal Election Commission. https://www.fec.gov/help-candidates-and-committees/registering-candidate/
- FEC. (n.d.-b). *House, Senate and presidential candidate registration*. https://www.fec.gov/help-candidates-and-committees/registering-candidate/house-senate-president-candidate-registration/
- FEC. (n.d.-c). *Registering a committee*. https://www.fec.gov/help-candidates-and-committees/filing-reports/registering-committee/
- FEC. (n.d.-d). *Contribution limits*. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/contribution-limits/
- NCSL. (n.d.-b). *State limits on contributions to candidates*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-limits-on-contributions-to-candidates`,
    },
    {
      slug: "fundraising-rules-and-ethics",
      title: "5 · Fundraising: rules and ethics",
      section: "The Money Rules",
      body: `Raising money legally is mostly about **who may give**, **how much**, and **keeping clean records**. The specifics differ between federal and state/local races, but the structure is similar.

For **federal** races, the FEC sets limits **and prohibitions** on sources:

- **Prohibited sources** include **corporations and labor unions** (from their treasury funds), **federal government contractors**, and **foreign nationals** — these may **not** contribute to a candidate's campaign (FEC, n.d.-e).
- **Cash** contributions are limited (large gifts must be by traceable means), and contributions over a threshold must be **itemized** with the donor's information in your reports.
- The **per-election limits** apply per source and per election, and as noted they're indexed for inflation — use the FEC's current chart (FEC, n.d.-d).

For **state and local** races, **state law** governs who may give and how much. Many states allow some corporate or union giving that federal law forbids; many set their own (varying) limits, and some set **no limit** at all (NCSL, n.d.-b). The only safe move is to read **your** state's rules.

**Ethics — the part no form enforces for you.** Beyond the letter of the law: don't accept money in exchange for an official act (that's bribery), don't disguise the true source of a contribution (a "straw donor" scheme is illegal), keep **campaign funds separate from personal funds**, and **never spend campaign money on personal expenses** — the FEC's **personal-use ban** prohibits using campaign funds for expenses that would exist regardless of the campaign (FEC, n.d.-f). Transparency is the campaign-finance system's core safeguard: when in doubt, disclose.

**Check yourself.** Name one source that is *prohibited* from contributing to a *federal* campaign, and state the rule about spending campaign funds on personal expenses.

## Sources
- FEC. (n.d.-d). *Contribution limits*. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/contribution-limits/
- FEC. (n.d.-e). *Who can and can't contribute*. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/who-can-and-cant-contribute/
- FEC. (n.d.-f). *Personal use*. https://www.fec.gov/help-candidates-and-committees/making-disbursements/personal-use/
- NCSL. (n.d.-b). *State limits on contributions to candidates*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-limits-on-contributions-to-candidates`,
    },
    {
      slug: "campaign-finance-disclosure",
      title: "6 · Campaign finance disclosure",
      section: "The Money Rules",
      body: `**Disclosure** — publicly reporting the money you raise and spend — is the backbone of U.S. campaign-finance law. It doesn't cap anything by itself; it makes the money **visible** so voters and regulators can see who funds a campaign.

For **federal** campaigns:

- Your committee files periodic **reports of receipts and disbursements** with the FEC. House and Senate committees report on **Form 3**; presidential committees on **Form 3P** (FEC, n.d.-g).
- Reports run on a **schedule** (e.g., quarterly, with additional pre- and post-election reports), and **contributions and expenditures above a threshold must be itemized** with names and details. Keep records — for each disbursement over a set amount you must retain a receipt or invoice (FEC, n.d.-g).
- The FEC **publishes** these reports, so federal campaign finance is searchable by the public.

For **state and local** campaigns, a parallel system exists under **state law**, usually run by a **state agency** (a secretary of state, board of elections, or ethics commission). What must be reported, how often, and to whom **varies by state** — NCSL summarizes state disclosure requirements, but your state's filing agency is the authority (NCSL, n.d.-c). Many local races have their own forms and deadlines on top of state rules.

The practical takeaway: **identify your reporting body and your deadlines on day one.** Missed or late reports are one of the most common ways a well-meaning first-time campaign gets into legal and reputational trouble.

**Check yourself.** What is the purpose of disclosure, and where does a *state* legislative candidate file finance reports (vs. a federal candidate)?

## Sources
- FEC. (n.d.-g). *Filing candidate reports*. Federal Election Commission. https://www.fec.gov/help-candidates-and-committees/filing-reports/
- NCSL. (n.d.-c). *Contribution disclosure requirements*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/contribution-disclosure-requirements`,
    },

    // ── Section 4: Running the campaign ──────────────────────────────────
    {
      slug: "building-a-campaign",
      title: "7 · Building a campaign: message, volunteers, outreach",
      section: "Running the Campaign",
      body: `A campaign is an organization built fast to do three things: **define a message**, **build a team**, and **reach voters**.

- **Message.** Voters decide on a small number of clear reasons. Pick a short, honest message that says **who you are, what you'll do, and why it matters for this office** — and that fits the seat (a school-board race is about schools, not foreign policy). Keep it consistent across every door, flyer, and forum.
- **Volunteers and team.** Most local campaigns run on volunteers. Early roles to fill: a **campaign manager** (or you, at first), a **treasurer** (legally required to handle money and reports), and volunteer **leads** for canvassing, phones, and events. Treat volunteers' time as your scarcest resource.
- **Voter outreach.** Direct **voter contact** — knocking on doors and phone calls — is the workhorse of local campaigns, supported by literature, local forums/debates, earned media (local press), and digital outreach. Campaigns target their effort using the **voter file** (the public list of registered voters), available through your state or local election office (USA.gov, n.d.-b).

A simple plan: estimate the **votes you need to win** (turnout times your target share), then work backward to how many voters you must **contact**, and build a weekly schedule to hit that number before Election Day.

This lesson is about **mechanics**, not persuasion tactics for any party or position — the same nuts and bolts serve any candidate.

**Check yourself.** Name the three things a campaign is built to do, and name the public dataset campaigns use to target voter contact.

## Sources
- USA.gov. (n.d.-b). *State and local election offices*. https://www.usa.gov/state-election-office
- USA.gov. (n.d.-a). *How the president is elected*. https://www.usa.gov/election`,
    },
    {
      slug: "election-day-and-after",
      title: "8 · Election Day — and what happens after",
      section: "Running the Campaign",
      body: `**Election Day** is an operations day, not a persuasion day. The work shifts to **getting your identified supporters to vote** ("get out the vote," or GOTV): reminding supporters, helping with rides or information, and — where allowed — having trained **poll watchers** observe the process. Know your state's rules for **early voting** and **mail/absentee ballots**, since many votes are cast before Election Day; deadlines and rules vary by state, so confirm them with your election office (USA.gov, n.d.-b).

**After the polls close:**

- **Counting and certification.** Results are **unofficial** on election night. Election officials **count, canvass, and certify** the results over the following days or weeks. Close races may trigger a **recount** under state law (rules and triggers vary by state) (USA.gov, n.d.-b).
- **If you win.** You'll be **sworn in**, and your **reporting duties continue** — post-election finance reports are still required, and you must wind down or carry forward the campaign committee under the applicable FEC or state rules (FEC, n.d.-g).
- **If you lose.** You still must **file final disclosure reports**, **settle debts**, and properly **close the committee**. Leftover campaign funds are subject to strict use rules — they **cannot** be converted to personal use (FEC, n.d.-f).
- **Either way:** thank your volunteers and donors. Many strong officeholders lost their first race; the list, the relationships, and the experience carry forward.

**Check yourself.** Are election-night results official? And name one duty a candidate still has *after* the election, win or lose.

## Sources
- USA.gov. (n.d.-b). *State and local election offices*. https://www.usa.gov/state-election-office
- FEC. (n.d.-f). *Personal use*. https://www.fec.gov/help-candidates-and-committees/making-disbursements/personal-use/
- FEC. (n.d.-g). *Filing candidate reports*. https://www.fec.gov/help-candidates-and-committees/filing-reports/`,
    },

    // ── Section 5: Practice ──────────────────────────────────────────────
    {
      slug: "practice-eligibility-and-ballot",
      title: "9 · Practice: eligibility and getting on the ballot",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank, then check. Spelling and capitalization are forgiving. Where a rule varies by state, the answer is about the federal rule or the general process.",
        items: [
          {
            prompt: "The minimum age to run for the U.S. House of Representatives is ___ (number).",
            answer: "25",
            accept: ["twenty-five", "twenty five"],
            explanation: "The Constitution sets it at 25 (art. I, § 2). The U.S. Senate minimum is 30; the presidency is 35.",
          },
          {
            prompt: "Age and residency rules for STATE legislative seats are set by each ___ (so they vary).",
            answer: "state",
            explanation: "State and local eligibility comes from each state's constitution and statutes, so it varies — check NCSL or your election office.",
          },
          {
            prompt: "Collecting voter signatures to qualify for the ballot is called filing a ___.",
            answer: "petition",
            explanation: "Independent and many other candidates qualify by petition; the required signature count varies by state and office.",
          },
          {
            prompt: "The required number of signatures and the filing fee VARY by state and ___.",
            answer: "office",
            explanation: "Never assume one office's threshold applies to another — confirm with your state or local election office.",
          },
          {
            prompt: "The authoritative place to confirm ballot rules for your local office is your state or local ___ office.",
            answer: "election",
            accept: ["elections"],
            explanation: "Your state/local election office (linked from USA.gov) is the authority on deadlines, forms, fees, and signatures.",
          },
        ],
      },
    },
    {
      slug: "practice-the-money-rules",
      title: "10 · Practice: the money rules",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          {
            prompt: "You become a federal 'candidate' once you raise or spend more than $___ (number).",
            answer: "5000",
            accept: ["5,000", "5 000"],
            explanation: "Crossing the $5,000 threshold triggers FEC candidate status — then file Form 2 within 15 days.",
          },
          {
            prompt: "The federal agency that governs money in U.S. House, Senate, and presidential races is the ___ (abbreviation).",
            answer: "FEC",
            accept: ["federal election commission"],
            explanation: "The Federal Election Commission. State and local races follow state law, not the FEC.",
          },
          {
            prompt: "The legally responsible record-keeper a campaign committee must appoint is the ___.",
            answer: "treasurer",
            explanation: "Every federal committee must appoint a treasurer before raising or spending money.",
          },
          {
            prompt: "Publicly reporting the money a campaign raises and spends is called ___.",
            answer: "disclosure",
            explanation: "Disclosure makes campaign money visible; the FEC publishes federal reports, and states run parallel systems.",
          },
          {
            prompt: "Spending campaign funds on expenses that would exist anyway is banned — the FEC's ban on ___ use.",
            answer: "personal",
            explanation: "The personal-use ban keeps campaign money out of a candidate's pocket, during and after the race.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "how-to-run-for-office-quiz",
      title: "11 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Most first-time candidates run for which kind of office, and why?",
            options: [
              "President — it gets the most attention",
              "A local or state office — smaller electorate, lower cost, more winnable",
              "U.S. Senate — the rules are simplest",
              "It doesn't matter; all races cost the same",
            ],
            correctIndex: 1,
            explanation:
              "Local and state races have smaller electorates and lower costs, making a real campaign possible for a first-timer.",
            sourceLessonSlug: "deciding-to-run-and-which-office",
          },
          {
            prompt: "Are the age and residency rules to run for a STATE legislature the same in every state?",
            options: [
              "Yes — the Constitution sets one nationwide rule",
              "No — each state sets its own, so they vary; check NCSL or your election office",
              "Yes — the FEC sets them",
              "Only the age varies, never residency",
            ],
            correctIndex: 1,
            explanation:
              "State and local eligibility is set by each state's constitution and statutes, so it varies by state and office. (Federal offices, by contrast, have uniform constitutional minimums.)",
            sourceLessonSlug: "eligibility-basics",
          },
          {
            prompt: "What is the minimum age to run for the U.S. House of Representatives?",
            options: ["18", "21", "25", "30"],
            correctIndex: 2,
            explanation:
              "The Constitution sets the U.S. House minimum at 25 (art. I, § 2). The Senate is 30 and the presidency is 35 — these federal minimums are uniform nationwide.",
            sourceLessonSlug: "eligibility-basics",
          },
          {
            prompt: "Who sets ballot-access requirements like petition signature counts and filing fees?",
            options: [
              "The FEC, uniformly nationwide",
              "The states — so the exact requirements vary by state and office",
              "The U.S. Constitution, with one fixed number",
              "Political parties only",
            ],
            correctIndex: 1,
            explanation:
              "Ballot access is run by the states, so signature counts and filing fees vary by state and office. Confirm the exact rule with your state or local election office.",
            sourceLessonSlug: "getting-on-the-ballot",
          },
          {
            prompt: "At what point do you become a 'candidate' under FEC rules for a federal race?",
            options: [
              "When you announce on social media",
              "When you raise or spend more than $5,000",
              "When you win a primary",
              "When you turn 25",
            ],
            correctIndex: 1,
            explanation:
              "Crossing $5,000 in contributions or expenditures triggers FEC candidate status; you then file a Statement of Candidacy (Form 2) within 15 days.",
            sourceLessonSlug: "fec-basics-for-federal-races",
          },
          {
            prompt: "A campaign for a state legislature or city council is governed by…",
            options: [
              "The FEC, just like a federal race",
              "State (and sometimes local) law — not the FEC",
              "No rules at all",
              "The U.S. Senate",
            ],
            correctIndex: 1,
            explanation:
              "The FEC governs only federal races. State and local campaigns follow state law, which has its own registration, forms, and (varying) contribution limits.",
            sourceLessonSlug: "fec-basics-for-federal-races",
          },
          {
            prompt: "Which source is PROHIBITED from contributing to a federal campaign?",
            options: [
              "An individual U.S. citizen",
              "A foreign national",
              "A small-dollar online donor",
              "A candidate's own funds",
            ],
            correctIndex: 1,
            explanation:
              "Foreign nationals — along with corporations and unions (from treasury funds) and federal contractors — may not contribute to a federal campaign.",
            sourceLessonSlug: "fundraising-rules-and-ethics",
          },
          {
            prompt: "What is the purpose of campaign finance disclosure?",
            options: [
              "To cap how much anyone can raise",
              "To make the money a campaign raises and spends publicly visible",
              "To choose the winner",
              "To replace the need for a treasurer",
            ],
            correctIndex: 1,
            explanation:
              "Disclosure doesn't cap money by itself — it makes it visible so voters and regulators can see who funds a campaign. The FEC publishes federal reports; states run parallel systems.",
            sourceLessonSlug: "campaign-finance-disclosure",
          },
          {
            prompt: "On a typical local campaign, the workhorse of voter outreach is…",
            options: [
              "National TV ads",
              "Direct voter contact — door-knocking and phone calls",
              "Buying the voter file from a foreign vendor",
              "Waiting for the press to call",
            ],
            correctIndex: 1,
            explanation:
              "Direct voter contact (canvassing and phones), targeted using the public voter file, is the workhorse of local campaigns.",
            sourceLessonSlug: "building-a-campaign",
          },
          {
            prompt: "Are election-night results official, and do a candidate's duties end on Election Day?",
            options: [
              "Yes and yes — it's all over that night",
              "No — results are unofficial until canvassed/certified, and reporting and committee duties continue after the election",
              "Results are official, but you can stop filing reports",
              "Only winners have any further duties",
            ],
            correctIndex: 1,
            explanation:
              "Election-night results are unofficial until officials canvass and certify them. Win or lose, candidates must still file final reports and properly handle the committee and any leftover funds.",
            sourceLessonSlug: "election-day-and-after",
          },
        ],
      },
    },
  ],
};
