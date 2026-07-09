// Authored "How a Bill Becomes Law (Federal): From Idea to Public Law", a sibling of
// US Civics 101 and US Constitution 101 in the Civics curriculum on Learn.WitUS.
// US Civics 101's "How a bill becomes a law" lesson is a six-step summary; this
// course is the deep version of that one lesson: committee process, the House
// vs. Senate floor rules (the Rules Committee's "special rule" vs. Senate
// unanimous consent / the filibuster / cloture / the reconciliation exception),
// conference committees, presentment, veto/pocket veto/override, and how a
// citizen actually tracks and engages with a bill. Strictly non-partisan: this
// is the PROCESS, described the same way regardless of which party or bill is
// involved, with no position on any bill's merits.
//
// Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography) to
// primary/authoritative sources: Congress.gov (the Library of Congress's official
// legislative-process pages and Congressional Research Service reports),
// house.gov / history.house.gov / rules.house.gov, senate.gov, USA.gov, and the
// National Archives (for the constitutional text). Quotations are verbatim from
// the National Archives transcript. Ends with a quiz whose every question links
// back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const HOW_A_BILL_BECOMES_LAW_COURSE: AuthoredCourse = {
  title: "How a Bill Becomes Law (Federal): From Idea to Public Law",
  description:
    "A non-partisan, step-by-step deep dive into how a bill actually becomes federal law: who can introduce a bill and how, the committee process (hearings, markup, discharge petitions), the different floor rules in the House (the Rules Committee's 'special rule') and the Senate (unanimous consent, the filibuster, cloture, and the budget-reconciliation exception), how the two chambers reconcile different versions, what happens when a bill reaches the President's desk (sign, veto, pocket veto, override), how it's published as a Public Law, and how you can track and weigh in on a real bill. Cited to Congress.gov, the House and Senate, and the National Archives. This is the process, not an argument for or against any bill.",
  lessons: [
    // ── Section 1: Starting a Bill ────────────────────────────────────────
    {
      slug: "introducing-a-bill",
      title: "1 · Introducing a bill: who, how, and what kind",
      section: "Starting a Bill",
      body: `Only a **member of Congress** can introduce a bill, not the President and not a member of the public directly, though anyone can ask their member to introduce one on their behalf (Congress.gov, n.d.-a). The member who introduces a bill is its **sponsor**; other members who sign on in support become **cosponsors** (Congressional Research Service, n.d.-a).

Bills are numbered by chamber of origin: **H.R.** for a bill starting in the House, **S.** for one starting in the Senate, followed by a sequential number for that two-year Congress (Congress.gov, n.d.-a). In the House, a member introduces a bill by physically placing it in the **"hopper,"** a wooden box on the House floor at the Bill Clerk's desk, or, since the mid-2010s, by submitting it electronically to the Clerk's "eHopper" (History, Art & Archives, U.S. House of Representatives, n.d.). In the Senate, a bill is introduced by being formally presented on the floor.

Not everything introduced is a "bill" in the strict sense. Congress also uses **resolutions**: a simple resolution affects only one chamber, a concurrent resolution expresses something both chambers agree on without the force of law, and a joint resolution is treated almost the same as a bill and can become law (used, notably, to propose constitutional amendments) (Congress.gov, n.d.-a). This course focuses on the ordinary bill path, since it's the one nearly every new federal law follows.

Once introduced, a bill is **read by title** and referred to the committee (or committees) with jurisdiction over its subject, decided by the presiding officer with the chamber parliamentarian's advice (Congress.gov, n.d.-b).

:::reveal Who is allowed to introduce a federal bill, and what do H.R. and S. mean? ||| Only a member of Congress can introduce a bill. H.R. means the bill originated in the House; S. means it originated in the Senate.

## Sources
- Congress.gov. (n.d.-a). *The legislative process: Overview*. Library of Congress. https://www.congress.gov/legislative-process
- Congress.gov. (n.d.-b). *The legislative process: Introduction and referral of bills*. Library of Congress. https://www.congress.gov/legislative-process/introduction-and-referral-of-bills
- Congressional Research Service. (n.d.-a). *Sponsorship and cosponsorship of House bills* (Report No. RS22477). Congress.gov. https://www.congress.gov/crs-product/RS22477
- History, Art & Archives, U.S. House of Representatives. (n.d.). *Bill hopper*. https://history.house.gov/Collection/Listing/2004/2004-019-000/`,
    },
    {
      slug: "committee-process",
      title: "2 · The committee process: hearings, markup, and where most bills die",
      section: "Starting a Bill",
      recallContent: [
        {
          prompt: "Who is allowed to introduce a federal bill?",
          answer: "Only a member of Congress (the House or Senate), though anyone can ask their member to do it.",
        },
        {
          prompt: "What do the prefixes H.R. and S. on a bill number mean?",
          answer: "H.R. means the bill started in the House; S. means it started in the Senate.",
        },
      ],
      body: `Most of a bill's fate is decided in **committee**, before most members of Congress ever vote on it. The committee (or, often, a subcommittee first) examines the bill, may hold **hearings** where witnesses testify and members ask questions, and then, if it wants to move the bill forward, conducts a **markup**: a session where the committee debates the bill line by line and votes on amendments (Congress.gov, n.d.-c).

**Most bills never leave committee.** A committee chair controls the agenda and can simply decline to schedule a bill for action; committees typically act on only a small share of what's referred to them (Congress.gov, n.d.-c). This is normal, not a scandal, committees are the chamber's way of filtering thousands of bills down to what has real support.

There is a way around a committee that refuses to act: a **discharge petition**. In the House, if a majority of members (218) sign a discharge petition, the bill can be forced to the floor over the committee's objection, though this succeeds rarely because it requires openly breaking with your own committee leadership (Congress.gov, n.d.-c).

If the committee does act favorably, it votes to **report** the bill to the full chamber, usually along with a **written committee report** explaining the bill and the committee's reasoning, an important document for later interpreting what the law means (Congress.gov, n.d.-c).

:::reveal What is a "markup," and what is a "discharge petition" for? ||| A markup is the committee session where members debate a bill line by line and vote on amendments. A discharge petition is a way to force a bill to the floor over a committee's objection, in the House it requires a majority (218) of members to sign.

## Sources
- Congress.gov. (n.d.-c). *The legislative process: Committee consideration*. Library of Congress. https://www.congress.gov/legislative-process`,
    },

    // ── Section 2: The Floor ─────────────────────────────────────────────
    {
      slug: "house-floor-rules",
      title: "3 · The House floor: the Rules Committee's 'special rule'",
      section: "The Floor",
      recallContent: [
        {
          prompt: "What happens during a committee 'markup'?",
          answer: "The committee debates the bill line by line and votes on amendments.",
        },
        {
          prompt: "What is a discharge petition, and how many House members' signatures does it take?",
          answer:
            "A way to force a bill out of committee to the floor over the committee's objection; it takes a majority of the House (218 members) to sign.",
        },
      ],
      body: `Before most major bills reach the House floor, the **House Committee on Rules** writes a **"special rule"**: a resolution that governs how the bill will be debated, how much time is allotted, and, critically, **which amendments may be offered** (Committee on Rules, U.S. House of Representatives, n.d.-a). The Rules Committee decides the rule in consultation with the majority leadership and the bill's own committee (Committee on Rules, U.S. House of Representatives, n.d.-b).

Special rules come in a few standard flavors (Committee on Rules, U.S. House of Representatives, n.d.-a):

- **Open rule.** Any member may offer an amendment that follows the House's standing rules.
- **Modified open / structured rule.** Only amendments that were pre-filed (printed in the Congressional Record in advance) may be offered, sometimes with a time cap.
- **Closed rule.** No floor amendments at all, other than what the reporting committee itself already approved.

The full House must first vote to **adopt the rule** before debating the bill itself, so the rule vote is itself a real vote that shapes everything downstream. Once the rule is adopted, the House debates and votes under its terms, and, if it passes, sends the bill on (Committee on Rules, U.S. House of Representatives, n.d.-a).

:::reveal What does a House "special rule" control, and what's the difference between an open rule and a closed rule? ||| It controls debate time and which amendments may be offered. An open rule lets any member offer a standing-rules-compliant amendment; a closed rule allows no floor amendments beyond what the committee already approved.

## Sources
- Committee on Rules, U.S. House of Representatives. (n.d.-a). *Special rule types*. https://rules.house.gov/about/special-rule-types
- Committee on Rules, U.S. House of Representatives. (n.d.-b). *Special rule process*. https://rules.house.gov/about/special-rule-process`,
    },
    {
      slug: "senate-floor-filibuster-cloture",
      title: "4 · The Senate floor: unanimous consent, the filibuster, and cloture",
      section: "The Floor",
      recallContent: [
        {
          prompt: "What is a House 'special rule,' and who writes it?",
          answer:
            "A resolution governing debate time and which amendments may be offered on a bill; the House Committee on Rules writes it.",
        },
        {
          prompt: "Name the three standard types of special rule.",
          answer: "Open, modified open (or structured), and closed.",
        },
      ],
      body: `The Senate has no equivalent of the Rules Committee's special rule, and its default rules put almost no limit on debate. In practice, the Senate runs on **unanimous consent agreements**: informal deals, agreed to by every senator present, that set the terms for considering a bill. If even one senator objects, that shortcut is gone (Congress.gov, n.d.-d).

Without unanimous consent, debate can continue indefinitely, the **filibuster**. The Senate's only formal way to force an end to debate is **cloture**, under **Senate Rule XXII**. Invoking cloture on most legislation requires the votes of **three-fifths of senators duly chosen and sworn**, normally **60 of the 100 senators** (United States Senate, n.d.-a). Even after cloture is invoked, up to 30 additional hours of consideration are allowed before a final vote (United States Senate, n.d.-a). Because of this, most ordinary legislation that lacks broad, bipartisan support simply cannot reach a final vote.

There is one major structural exception: **budget reconciliation**. Under the Congressional Budget Act of 1974, certain bills implementing a budget resolution's spending, revenue, or debt-limit instructions get **expedited Senate consideration**, debate is capped (traditionally 20 hours) and a simple majority passes the bill, no 60-vote cloture required (Congressional Research Service, n.d.-b). Reconciliation is narrow by design: the **"Byrd Rule"** bars provisions that are "extraneous" to the budgetary instructions, so it cannot be used for just any bill (Congressional Research Service, n.d.-c).

:::reveal How many votes does it normally take to invoke cloture and end a Senate filibuster, and what is the one major exception that only needs a simple majority? ||| Normally 60 votes (three-fifths of the Senate) under Rule XXII. Budget reconciliation bills, which implement a budget resolution's spending/revenue/debt-limit instructions, need only a simple majority, subject to the narrowing "Byrd Rule."

## Sources
- United States Senate. (n.d.-a). *About filibusters and cloture*. https://www.senate.gov/about/powers-procedures/filibusters-cloture.htm
- Congress.gov. (n.d.-d). *The legislative process: Floor consideration*. Library of Congress. https://www.congress.gov/legislative-process
- Congressional Research Service. (n.d.-b). *The reconciliation process: Frequently asked questions* (Report No. R48444). Congress.gov. https://www.congress.gov/crs-product/R48444
- Congressional Research Service. (n.d.-c). *The budget reconciliation process: The Senate's "Byrd Rule"* (Report No. RL30862). Congress.gov. https://www.congress.gov/crs-product/RL30862`,
    },

    // ── Section 3: Getting to One Bill ───────────────────────────────────
    {
      slug: "reconciling-differences",
      title: "5 · Reconciling differences: when the House and Senate don't match",
      section: "Getting to One Bill",
      recallContent: [
        {
          prompt: "What is a Senate unanimous consent agreement?",
          answer:
            "An informal agreement, accepted by every senator present, that sets the terms for considering a bill without going through the full floor process.",
        },
        {
          prompt: "What is budget reconciliation, and why does it matter for the 60-vote threshold?",
          answer:
            "A special process for bills implementing a budget resolution's spending/revenue/debt-limit instructions; it caps debate and only needs a simple majority, bypassing the normal 60-vote cloture requirement.",
        },
      ],
      body: `For a bill to reach the President, the **House and Senate must pass identical text**. If each chamber passes its own version of a bill, there are two ways to reconcile them (Congress.gov, n.d.-e):

- **Amendment between the houses ("ping-ponging").** One chamber sends the other its version; the second chamber can amend it and send it back; this continues until both chambers agree on identical language, without ever meeting formally.
- **Conference committee.** Each chamber appoints members, called **conferees** or **managers**, usually senior members of the relevant committees, to meet and negotiate a single compromise text. Their agreement is written up as a **conference report**, which then goes back to both chambers for an up-or-down vote (no further amendments allowed) (Congress.gov, n.d.-e).

Once both chambers have agreed to identical text, the bill is **enrolled**: printed in its final, official form, certified by the Clerk of the House and Secretary of the Senate, and signed by the Speaker of the House and the President of the Senate (the Vice President, or in practice usually the presiding officer) before being sent to the President (Congress.gov, n.d.-e).

:::reveal What must be true of the bill text before it can go to the President, and name the two ways the chambers reconcile differing versions. ||| The House and Senate must have passed identical text. They reconcile differences either by amending the bill back and forth between the chambers, or by sending it to a conference committee that negotiates a single compromise text (the conference report).

## Sources
- Congress.gov. (n.d.-e). *The legislative process: Resolving differences*. Library of Congress. https://www.congress.gov/legislative-process`,
    },

    // ── Section 4: The President Decides ─────────────────────────────────
    {
      slug: "presentment-and-veto",
      title: "6 · Presentment: the President signs, ignores, or vetoes",
      section: "The President Decides",
      recallContent: [
        {
          prompt: "What is a conference committee, and who serves on it?",
          answer:
            "A group of members (conferees/managers) appointed by each chamber to negotiate a single compromise version of a bill when the House and Senate versions differ.",
        },
        {
          prompt: "What does it mean for a bill to be 'enrolled'?",
          answer:
            "It's printed in its final official form, certified by the Clerk of the House and Secretary of the Senate, and signed by the chambers' presiding officers before going to the President.",
        },
      ],
      body: `Article I, Section 7 of the Constitution requires that "Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a Law, be presented to the President of the United States" (U.S. Const. art. I, § 7). This step is called **presentment**, and it has three possible outcomes:

1. **The President signs it.** It becomes law immediately.
2. **The President does nothing for 10 days** (excluding Sundays) **while Congress is in session.** The bill becomes law automatically without a signature (U.S. Const. art. I, § 7).
3. **The President vetoes it**, returning it to the originating chamber unsigned along with a written statement of objections (Congressional Research Service, n.d.-d).

There is a fourth, special case: the **pocket veto**. If the President does not sign a bill within the 10-day window **and Congress has adjourned** so that the bill cannot be returned to it, the bill dies without becoming law, and unlike a regular veto, a pocket veto **cannot be overridden**, because there's no bill in Congress's hands to act on (Congressional Research Service, n.d.-d; History, Art & Archives, U.S. House of Representatives, n.d.).

:::reveal What are a President's three ordinary options when a bill is presented, and what makes a "pocket veto" different from a regular veto? ||| Sign it (it becomes law), do nothing for 10 days while Congress is in session (it becomes law anyway), or veto it and return it with objections. A pocket veto happens when the President doesn't sign within 10 days AND Congress has adjourned, so the bill dies and, unlike a regular veto, cannot be overridden.

## Sources
- U.S. Const. art. I, § 7. National Archives. https://www.archives.gov/founding-docs/constitution-transcript
- Congressional Research Service. (n.d.-d). *Regular vetoes and pocket vetoes: In brief* (Report No. RS22188). Congress.gov. https://www.congress.gov/crs-product/RS22188
- History, Art & Archives, U.S. House of Representatives. (n.d.). *Presidential vetoes*. https://history.house.gov/Institution/Presidential-Vetoes/Presidential-Vetoes/`,
    },
    {
      slug: "override-and-public-law",
      title: "7 · Overriding a veto, and becoming a Public Law",
      section: "The President Decides",
      recallContent: [
        {
          prompt: "How many days does the President have to act on a bill, and what happens if that time passes while Congress is in session?",
          answer: "Ten days (excluding Sundays); if the President does nothing, the bill becomes law without a signature.",
        },
        {
          prompt: "Why can't a pocket veto be overridden?",
          answer: "Because the bill never gets returned to a sitting Congress to hold an override vote on.",
        },
      ],
      body: `A regular veto is not the end of a bill. Congress can **override** it and make the bill law anyway, but the bar is high: a **two-thirds vote in both the House and the Senate** (U.S. Const. art. I, § 7). Because two-thirds is a much bigger margin than the simple majority (or even 60 votes) it took to pass the bill originally, most vetoes stand; overrides are relatively rare (Congressional Research Service, n.d.-d).

Once a bill becomes law, by presidential signature, the 10-day lapse, or a successful override, it is assigned a **Public Law number** (formatted like "Pub. L. 118-1," for the 1st law of the 118th Congress) and is eventually printed in the **Statutes at Large**, the permanent, official record of every law Congress passes, and later organized by subject into the **United States Code**, the ongoing compilation of federal law in force (Congress.gov, n.d.-f).

:::reveal What vote is required in each chamber to override a presidential veto, and what is a bill called, and numbered, once it becomes law? ||| A two-thirds vote in both the House and the Senate. It becomes a Public Law and is assigned a Public Law number (e.g., Pub. L. 118-1), later printed in the Statutes at Large and organized into the United States Code.

## Sources
- U.S. Const. art. I, § 7. National Archives. https://www.archives.gov/founding-docs/constitution-transcript
- Congressional Research Service. (n.d.-d). *Regular vetoes and pocket vetoes: In brief* (Report No. RS22188). Congress.gov. https://www.congress.gov/crs-product/RS22188
- Congress.gov. (n.d.-f). *The legislative process: Enrollment*. Library of Congress. https://www.congress.gov/legislative-process`,
    },

    // ── Section 5: Citizen Engagement ────────────────────────────────────
    {
      slug: "tracking-and-engaging",
      title: "8 · Tracking a bill and making your voice heard",
      section: "Citizen Engagement",
      recallContent: [
        {
          prompt: "What vote does it take to override a presidential veto?",
          answer: "A two-thirds vote in both the House and the Senate.",
        },
        {
          prompt: "What is a bill called once it becomes law, and what two publications eventually record it?",
          answer:
            "A Public Law (with a number like Pub. L. 118-1); it's printed in the Statutes at Large and organized by subject into the United States Code.",
        },
      ],
      body: `Every step you just learned is publicly trackable. **Congress.gov**, the Library of Congress's official site, publishes each bill's full text, sponsor and cosponsor list, committee referral, actions taken, and status in real time, free, and searchable by bill number, keyword, or member (Congress.gov, n.d.-g). USA.gov's plain-language legislative-process guide is a good companion overview if the official site feels dense (USAGov, n.d.).

If you want to weigh in on a bill, the process gives you several honest entry points, regardless of your position on the bill's substance (Congress.gov, n.d.-c; USAGov, n.d.):

- **Contact your own member of Congress** (House and Senate). Staff track constituent contact by position on specific bills; a specific, respectful message referencing the bill number carries more weight than a form letter.
- **Submit input during a committee hearing's public-comment window**, when a committee is actively considering related legislation.
- **Track the bill's status on congress.gov** so you know when it actually matters to speak up, e.g., before a markup or a floor vote, not after it's already law.
- **Follow the committee, not just the floor.** Since most bills die in committee, that's usually the stage where engagement has the most realistic chance of mattering.

None of this requires any particular party affiliation or position, the process works the same for a bill you support or one you oppose.

:::reveal Name two specific, official ways to track a real bill's status, and one honest way to weigh in on it while it's still moving. ||| Congress.gov (the Library of Congress's official bill tracker) and USA.gov's legislative-process overview are two ways to track a bill. Contacting your own member of Congress, ideally referencing the bill number and while it's still in committee or before a floor vote, is a direct way to weigh in.

## Sources
- Congress.gov. (n.d.-g). *Congress.gov: Legislation search*. Library of Congress. https://www.congress.gov/
- USAGov. (n.d.). *How laws are made*. U.S. General Services Administration. https://www.usa.gov/how-laws-are-made`,
    },

    // ── Section 6: Practice ──────────────────────────────────────────────
    {
      slug: "practice-committee-and-floor",
      title: "9 · Practice: committees and the floor",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "A House bill number starts with the letters ___.",
            answer: "H.R.",
            accept: ["HR", "H.R"],
            explanation: "H.R. marks a bill that originated in the House of Representatives.",
          },
          {
            prompt: "The committee session where members debate a bill line by line and vote on amendments is called a ___.",
            answer: "markup",
            explanation: "Markup is where a committee shapes a bill's text before deciding whether to report it to the floor.",
          },
          {
            prompt: "In the House, the committee that writes the 'special rule' governing debate and amendments is the Committee on ___.",
            answer: "Rules",
            explanation: "The House Committee on Rules decides debate time and which amendments (if any) may be offered.",
          },
          {
            prompt: "Ending a Senate filibuster normally requires ___ votes (a number).",
            answer: "60",
            accept: ["sixty", "three-fifths"],
            explanation: "Cloture under Senate Rule XXII normally requires three-fifths of the Senate, 60 of 100 senators.",
          },
          {
            prompt: "The special budget process that lets certain bills pass the Senate with only a simple majority is called ___.",
            answer: "reconciliation",
            accept: ["budget reconciliation"],
            explanation: "Budget reconciliation implements a budget resolution's spending/revenue/debt-limit instructions and bypasses the 60-vote cloture rule, subject to the Byrd Rule.",
          },
        ],
      },
    },
    {
      slug: "practice-presentment-and-tracking",
      title: "10 · Practice: presentment and tracking a bill",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          {
            prompt: "The step where a passed bill is sent to the President is called ___.",
            answer: "presentment",
            explanation: "Article I, Section 7 requires every passed bill to be presented to the President.",
          },
          {
            prompt: "If the President does nothing for 10 days while Congress is in session, the bill ___ (becomes law / dies).",
            answer: "becomes law",
            accept: ["becomes a law", "becomes law automatically"],
            explanation: "Article I, Section 7 lets a bill become law without a signature after 10 days if Congress is still in session.",
          },
          {
            prompt: "If the President doesn't sign within 10 days AND Congress has adjourned, that's called a ___ veto.",
            answer: "pocket",
            explanation: "A pocket veto kills the bill and, unlike a regular veto, cannot be overridden.",
          },
          {
            prompt: "Overriding a veto requires a ___-thirds vote in both chambers (a fraction).",
            answer: "two",
            accept: ["2", "2/3", "two-thirds"],
            explanation: "Article I, Section 7 sets a two-thirds vote in both the House and Senate as the override threshold.",
          },
          {
            prompt: "The official, free site for tracking any federal bill's real-time status is ___.gov.",
            answer: "congress",
            accept: ["congress.gov"],
            explanation: "Congress.gov, run by the Library of Congress, publishes every bill's text, status, and actions.",
          },
        ],
      },
    },

    // ── Section 7: Final Quiz ────────────────────────────────────────────
    {
      slug: "how-a-bill-becomes-law-quiz",
      title: "11 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Who is allowed to introduce a federal bill?",
            options: [
              "Any registered voter",
              "Only a member of Congress",
              "Only the President",
              "Only a state governor",
            ],
            correctIndex: 1,
            explanation:
              "Only a member of the House or Senate can formally introduce a bill, though anyone can ask their member to do it.",
            sourceLessonSlug: "introducing-a-bill",
          },
          {
            prompt: "Where do most bills that never become law actually die?",
            options: ["On the House or Senate floor", "In committee", "At presentment", "In a conference committee"],
            correctIndex: 1,
            explanation:
              "Most bills never leave the committee they're referred to; a committee chair controls whether a bill gets a hearing or markup at all.",
            sourceLessonSlug: "committee-process",
          },
          {
            prompt: "What does a House 'closed rule' do?",
            options: [
              "Bars the bill from getting a floor vote at all",
              "Allows no floor amendments beyond what the committee already approved",
              "Requires a two-thirds vote to pass",
              "Sends the bill straight to the Senate",
            ],
            correctIndex: 1,
            explanation:
              "A closed rule, written by the House Rules Committee, effectively eliminates floor amendments other than the committee's own.",
            sourceLessonSlug: "house-floor-rules",
          },
          {
            prompt: "How many votes does it normally take to invoke cloture and end a Senate filibuster?",
            options: ["A simple majority (51)", "Two-thirds (67)", "Three-fifths (60)", "Unanimous (100)"],
            correctIndex: 2,
            explanation:
              "Senate Rule XXII normally requires three-fifths of senators duly chosen and sworn, 60 of 100, to invoke cloture.",
            sourceLessonSlug: "senate-floor-filibuster-cloture",
          },
          {
            prompt: "What lets certain budget-related bills pass the Senate with only a simple majority?",
            options: ["A discharge petition", "A pocket veto", "Budget reconciliation", "A conference report"],
            correctIndex: 2,
            explanation:
              "Budget reconciliation caps debate and needs only a simple majority, bypassing the normal 60-vote cloture requirement, subject to the Byrd Rule's limits.",
            sourceLessonSlug: "senate-floor-filibuster-cloture",
          },
          {
            prompt: "When the House and Senate pass different versions of the same bill, how is that resolved?",
            options: [
              "The bill automatically dies",
              "The President chooses one version",
              "By amending the bill between the chambers, or by a conference committee",
              "The Supreme Court decides",
            ],
            correctIndex: 2,
            explanation:
              "The chambers reconcile differing text either by passing amendments back and forth, or by sending it to a conference committee for a single compromise text.",
            sourceLessonSlug: "reconciling-differences",
          },
          {
            prompt: "What happens if the President does nothing for 10 days (excluding Sundays) while Congress is in session?",
            options: [
              "The bill dies automatically",
              "The bill becomes law without a signature",
              "It requires a new vote in both chambers",
              "It automatically becomes a pocket veto",
            ],
            correctIndex: 1,
            explanation:
              "Article I, Section 7 lets a bill become law without a presidential signature after 10 days if Congress remains in session.",
            sourceLessonSlug: "presentment-and-veto",
          },
          {
            prompt: "What makes a pocket veto different from a regular veto?",
            options: [
              "It requires a three-fourths override vote",
              "It can be overridden by the Senate alone",
              "It happens automatically after any veto",
              "It cannot be overridden, because Congress has adjourned and the bill can't be returned",
            ],
            correctIndex: 3,
            explanation:
              "A pocket veto occurs when the President doesn't sign within 10 days and Congress has adjourned; because the bill is never returned to a sitting Congress, there's no override vote available.",
            sourceLessonSlug: "presentment-and-veto",
          },
          {
            prompt: "What vote does it take in each chamber to override a regular presidential veto?",
            options: ["A simple majority", "Three-fifths", "Two-thirds", "Unanimous consent"],
            correctIndex: 2,
            explanation:
              "Article I, Section 7 requires a two-thirds vote in both the House and the Senate to override a veto.",
            sourceLessonSlug: "override-and-public-law",
          },
          {
            prompt: "What is the official, free federal government site for tracking a real bill's status?",
            options: ["Congress.gov", "Ballotpedia", "USA.gov's homepage", "The Federal Register"],
            correctIndex: 0,
            explanation:
              "Congress.gov, run by the Library of Congress, is the official site for bill text, sponsors, actions, and real-time status.",
            sourceLessonSlug: "tracking-and-engaging",
          },
        ],
      },
    },
  ],
};
