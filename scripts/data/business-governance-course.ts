// Authored "Governance: Who Actually Decides" - course 6 of the "How a Business Is Formed"
// learning path (plans/46, Path B, course 6). A cited, high-school-and-up course on Learn.WitUS.
//
// WHY THIS COURSE EXISTS (the structural argument, from plans/46)
// --------------------------------------------------------------
// Course 1, "What a Business Entity Actually Is," taught that any entity is a bundle of FOUR
// decisions: liability, taxation, ownership and transfer, and GOVERNANCE. Governance got one lesson
// there, enough to state the question ("who gets to decide?") and the one distinction that defines a
// cooperative (one share one vote vs one member one vote). THIS course takes decision four, and only
// decision four, to its depth. It does not re-derive the four decisions, and it does not re-teach
// cooperatives (course 3) or the foreign-forms survey (course 5); it develops the GOVERNANCE LAYER
// that runs underneath all of them.
//
// THE SPINE: the gap between OWNING and DECIDING.
//     Section 1  governance is decision four; deciding is not owning; the separation of ownership
//                and control (Berle & Means, 1932) is the central problem the rest of the course
//                answers.
//     Section 2  the board of directors (what it does, how directors are elected, inside vs
//                independent directors, committees) and the SHAREHOLDERS-vs-STAKEHOLDERS debate over
//                whose interests a company serves.
//     Section 3  FIDUCIARY DUTY (the duty of care and the business judgment rule; the duty of
//                loyalty and conflicts) and how control CONCENTRATES (dual-class / super-voting stock).
//     Section 4  governance designed differently: the German two-tier board and codetermination;
//                one share one vote vs one member one vote; boards without shareholders (nonprofit
//                and co-op boards).
//     Section 5  a capstone: read a real governance structure, say who actually decides, and locate
//                where a minority owner's protection comes from.
//
// THE HARD RULE, which is the ethical spine of the file
// -----------------------------------------------------
// NOT LEGAL OR FINANCIAL ADVICE, stated plainly and repeatedly. This course teaches what to ASK a
// lawyer, an accountant, or a governance professional, not the answer for a real company or a real
// investment. It invents no statute section, no company's exact voting ratio, and no case it cannot
// state precisely. Where it touches doctrine (fiduciary duty, the business judgment rule, the
// Delaware framework) it stays CONCEPTUAL AND ACCURATE. Two US cases are named precisely because
// their gist is settled and teachable (Dodge v. Ford, 1919; eBay v. Newmark, Del. Ch. 2010); the
// German two-tier board and codetermination are taught in GENERAL terms, and dual-class ratios are
// described as a common pattern, never pinned to a named company from memory.
//
// House rule: NO em-dashes or en-dashes in prose. A hyphen-minus is fine; verbatim cited titles and
// case names in a `## Sources` block are the only place a dash could survive, and none here carry one.

import type { AuthoredCourse } from "./authored-course";

export const BUSINESS_GOVERNANCE_COURSE: AuthoredCourse = {
  title: "Governance: Who Actually Decides",
  description:
    "A cited, high-school-and-up course on corporate and organizational governance, and the sixth course in the 'How a Business Is Formed' path. It is not legal or financial advice, and it says so throughout: it teaches you what to ASK a lawyer or a governance professional, not the answer for a real company or a real investment. Course 1 taught that any entity is a bundle of four decisions, and governance was the fourth: who gets to decide? This course takes that one decision to its depth. The spine is the gap between OWNING a business and DECIDING for it. In a large company the owners are many and scattered, and the people who actually run it are few, so governance is the set of devices that keep the deciders answerable to the owners. You will learn what a board of directors is and does, how directors are elected, why independent directors and board committees exist, and the long argument over whose interests a company serves: shareholders alone, or a wider set of stakeholders. You will learn fiduciary duty, the highest obligation the law puts on a director, split into the duty of care (protected by the business judgment rule) and the duty of loyalty (which conflicts of interest test). You will see how founders concentrate control through dual-class, super-voting shares, and how other systems answer the same question differently: the German two-tier board with worker codetermination, the cooperative's one member one vote, and the nonprofit board that answers to a mission rather than to owners. The capstone asks you to read a real governance structure, say who actually decides, and find where a minority owner's protection comes from.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Governance is decision four  (deciding is not owning; ownership vs control)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bgov-what-this-is",
      title: "1 · What this course is for, and the rule it runs on",
      section: "Section 1 · Governance is decision four",
      body: `This is the sixth course in the "How a Business Is Formed" path, and it takes a single idea all the way down. Course 1 taught that any business entity is a bundle of **four decisions**: liability (who pays the debts), taxation (who pays the tax), ownership and transfer (who owns it and how a stake moves), and **governance** (who gets to decide). The first three courses filled in the first three decisions across the US forms, the cooperatives, and the foreign forms. **This course is the fourth decision, and only the fourth, taken to its depth.**

## The one question the whole course answers

Here it is, and everything else is a way of answering it more precisely:

**Who actually decides?**

Not who owns the business (that was decision three) and not who signs the checks day to day, but who holds the real power to set direction, hire and fire the people who run it, and approve the decisions that matter. In a one-person shop the answer is obvious: the owner decides. **The moment a business has many owners and a handful of people running it, the answer stops being obvious, and the gap between owning and deciding becomes the entire subject of this course.**

## The rule, stated first because it governs everything after it

**This course is not legal advice and it is not financial advice.** It cannot be. Whether a particular board acted properly, whether a particular investment protects you, whether a particular structure is right for a real company: those depend on facts this course does not know, on the state or country involved, and on documents you would have to read. What this course gives you is not a verdict. **It gives you the questions**, and it teaches you to read a governance structure and ask them well.

Because of that rule, this course refuses to invent. It names no statute section from memory, pins no company's exact voting ratio, and cites no case it cannot state precisely. Where it touches legal doctrine it stays **conceptual and accurate**, and it points you at the primary sources (the charter, the bylaws, the proxy statement, the agency page) so you can verify rather than trust.

## What you will learn, section by section

| Section | What you learn to read |
|---|---|
| **1. Governance is decision four** | Why deciding is not owning, and the separation of ownership and control |
| **2. The board and whose interests it serves** | What a board does, how directors are elected, and the shareholder vs stakeholder debate |
| **3. Fiduciary duty and concentrated control** | The duty of care, the business judgment rule, the duty of loyalty, and dual-class shares |
| **4. Governance designed differently** | The German two-tier board, one member one vote, and boards without shareholders |
| **5. The capstone** | Read a real structure, say who decides, and find the minority owner's protection |

**One last time, because it is the rule:** this is a course about how to read who holds power in an organization and how to ask about it. It is not advice about your company or your money. Keep a lawyer and a financial professional in the picture for anything real.

## Sources
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov*. https://www.investor.gov`,
    },
    {
      slug: "bgov-decides-not-owns",
      title: "2 · Deciding is not owning",
      section: "Section 1 · Governance is decision four",
      body: `Start with the distinction the whole course rests on, because most people run these two ideas together and they should not. **Owning a business and deciding for a business are different things.** Ownership is a claim on the value: the right to a share of the profit and of what is left if the business is sold or wound up. Governance is a claim on the choices: the right to set direction and to pick the people who act. **A form decides how tightly those two claims are tied together, and they can be pulled surprisingly far apart.**

## Two ends of the axis

Course 1 named these; this course lives in the space between them.

- **Direct governance.** The owners decide, themselves. A member-managed LLC and a general partnership work this way: the people who own it are the people in the room making the call. Simple, and it does not scale. Try running anything with two hundred owners all deciding directly.
- **Delegated governance.** The owners appoint deciders and step back. A corporation is the classic case: shareholders elect a board, the board hires officers, and the officers run the company. Delegated governance scales, which is why every large organization uses some version of it. **It also opens the gap this course is about**, because now the people deciding are not, mostly, the people who own the thing.

## Why the gap is the interesting part

Here is the uncomfortable fact delegated governance creates: **a person can own a large share and control almost nothing, or own a tiny share and control almost everything.** Ownership and control come apart, on purpose, because that is the price of letting a business have many owners and still be run by a few. Every device you will meet in this course (the board, fiduciary duty, voting rules, dual-class shares, the two-tier board, one member one vote) is a different answer to the same worry: **once you hand the deciding to a few people, how do the many owners make sure those few act for them and not for themselves?**

## The reading move

When you meet any organization, do not stop at "who owns it." Ask the second question:

1. **Who owns it?** Who has the claim on the value (shareholders, members, or, in a nonprofit, nobody)?
2. **Who decides for it?** Who holds the power to set direction and to hire and fire the people who run it (the owners directly, or a board they elect)?

**When the answers to those two questions are different people, you are looking at delegated governance**, and the rest of the course is about how the law and the documents try to keep the second group answerable to the first. That gap is not a flaw to be fixed; it is the deliberate design that makes large organizations possible, and reading it well is the skill.

**Not advice, as ever:** noticing that owning and deciding have come apart tells you what a structure is, not whether it is fair to you or good for your money. That judgment, for a real company, belongs with a professional.

## Sources
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov*. https://www.investor.gov`,
      recallContent: [
        {
          prompt: "What single question does this whole course answer?",
          answer: "Who actually decides? Not who owns the business or who signs the checks, but who holds the real power to set direction, hire and fire the people who run it, and approve the decisions that matter.",
        },
        {
          prompt: "Is this course legal or financial advice, and what does it give you instead?",
          answer: "No. It is not legal or financial advice. It gives you the questions and teaches you to read a governance structure and ask them well, then sends any real decision to a lawyer or financial professional.",
        },
        {
          prompt: "Which of the four decisions from course 1 does this course take to its depth?",
          answer: "The fourth, governance: who gets to decide. It does not re-derive the other three (liability, taxation, ownership and transfer); it develops the governance layer alone.",
        },
        {
          prompt: "Why does the course pin no company's exact voting ratio and cite no case it cannot state precisely?",
          answer: "Because it refuses to invent. It stays conceptual and accurate on doctrine and points you to the primary sources (charter, bylaws, proxy statement, agency page) so you can verify rather than trust.",
        },
      ],
    },
    {
      slug: "bgov-separation",
      title: "3 · The separation of ownership and control",
      section: "Section 1 · Governance is decision four",
      body: `The gap between owning and deciding has a name and a history, and naming it turns a vague worry into the exact problem the rest of the course solves. It is called **the separation of ownership and control**, and it is the central idea of corporate governance.

## The classic statement

Nearly a century ago, in **The Modern Corporation and Private Property**, Adolf Berle and Gardiner Means described what happens as a company's shares spread across thousands of owners (Berle & Means, 1932). No single shareholder owns enough to run the company or even to pay close attention. Ownership becomes **dispersed**, and with it, real control drifts away from the owners and into the hands of the managers who run the business day to day. The people who own the company and the people who control it are no longer the same people. That observation named the problem that every governance rule since has been trying to manage.

## Principals and agents

There is a clean way to picture the gap. Think of the owners as **principals**, the people on whose behalf the business is run, and the managers as **agents**, the people hired to run it. The trouble is that agents have their own interests, and those interests do not always line up with the principals'. A manager might want a bigger empire, a safer job, or a nicer office when the owners would rather have the profit. **The whole apparatus of governance exists because agents can, if nothing checks them, run a business for themselves instead of for the owners.** That risk even has a nickname in the field: the agency problem.

## The three devices that bridge the gap

Almost everything ahead is one of three answers to the separation of ownership and control. Hold this map, because the rest of the course fills it in:

| Device | What it does about the gap | Where you meet it |
|---|---|---|
| **The board** | The owners elect a small body to hire, fire, and oversee the managers on their behalf | Section 2 |
| **Fiduciary duty** | The law obliges the deciders to act in the organization's interest, not their own | Section 3 |
| **Voting** | The owners keep the power to choose the board and to approve the biggest decisions | Sections 2 and 4 |

**Read that table as the spine of the course.** The board is the standing overseer, fiduciary duty is the legal glue, and the vote is the lever the owners never fully give up. Weaken all three and the managers control the company outright; strengthen them and the owners keep a real leash. Every structure you read, foreign or domestic, corporate or cooperative, is some setting of those three dials.

## Why this matters beyond the boardroom

The separation of ownership and control is not only a big-company problem. Any time a group of people entrust a few of their number to run something, an HOA, a union local, a pension fund, a nonprofit, the same gap opens and the same three devices appear in some form. **Learn the pattern once and you can read the governance of almost any organization**, which is exactly the transferable skill this path is built to give.

**And the limit stands:** describing the gap is reading, not advising. Whether a particular board is actually keeping its managers honest is a question of fact and law for a professional, not a conclusion this lesson lets you draw about a real company.

## Sources
- Berle, A. A., & Means, G. C. (1932). *The Modern Corporation and Private Property*. Macmillan.
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.`,
      recallContent: [
        {
          prompt: "What is the difference between owning a business and deciding for it?",
          answer: "Ownership is a claim on the value (a share of the profit and of what is left on a sale or wind-up). Governance is a claim on the choices (the right to set direction and pick the people who act). A form decides how tightly the two are tied.",
        },
        {
          prompt: "What are the two ends of the governance axis, and which one this course lives in?",
          answer: "Direct governance, where the owners decide themselves (member-managed LLC, general partnership), and delegated governance, where owners elect a board and step back (a corporation). The course lives in delegated governance, where owning and deciding come apart.",
        },
        {
          prompt: "In delegated governance, what is the core worry every device tries to answer?",
          answer: "Once the deciding is handed to a few people, how do the many owners make sure those few act for them and not for themselves? A person can own much and control little, or own little and control much.",
        },
        {
          prompt: "What two questions do you ask any organization, and what does it mean when the answers differ?",
          answer: "Who owns it (who has the claim on the value)? Who decides for it (who can set direction and hire and fire the people who run it)? When the answers are different people, you are looking at delegated governance.",
        },
      ],
    },
    {
      slug: "bgov-quiz-decision-four",
      title: "4 · Quiz: governance is decision four",
      section: "Section 1 · Governance is decision four",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Governance is which of the four decisions from course 1?",
            options: ["the first one", "the second one", "the third one", "the fourth one"],
            correctIndex: 3,
            explanation: "Course 1 named four decisions: liability, taxation, ownership and transfer, and governance. This course takes the fourth to its depth.",
            sourceLessonSlug: "bgov-what-this-is",
          },
          {
            prompt: "The single question this whole course answers is:",
            options: ["who owns the shares", "who signs the checks", "who actually decides", "who pays the taxes"],
            correctIndex: 2,
            explanation: "Governance asks who holds the real power to set direction and to hire and fire the people who run the business.",
            sourceLessonSlug: "bgov-what-this-is",
          },
          {
            prompt: "This course describes itself as:",
            options: ["real legal advice", "not legal advice", "a lawyer swap-in", "a filing service"],
            correctIndex: 1,
            explanation: "It is not legal or financial advice. It teaches the questions and routes any real decision to a professional.",
            sourceLessonSlug: "bgov-what-this-is",
          },
          {
            prompt: "When it touches legal doctrine, the course keeps its references:",
            options: ["exact from memory", "hidden from you", "conceptual and true", "copied from ads"],
            correctIndex: 2,
            explanation: "It invents no statute, ratio, or case it cannot state precisely; it stays conceptual and accurate and points to primary sources.",
            sourceLessonSlug: "bgov-what-this-is",
          },
          {
            prompt: "Ownership is a claim on the value; governance is a claim on the:",
            options: ["yearly taxes", "brand and logo", "office space", "choices made"],
            correctIndex: 3,
            explanation: "Ownership gets a share of the profit and the proceeds; governance gets to set direction and pick the people who act.",
            sourceLessonSlug: "bgov-decides-not-owns",
          },
          {
            prompt: "When owners elect a board and step back, that is:",
            options: ["direct control", "delegated control", "public control", "no control"],
            correctIndex: 1,
            explanation: "Delegated governance hands the deciding to a few and opens the gap between owning and controlling that the course studies.",
            sourceLessonSlug: "bgov-decides-not-owns",
          },
          {
            prompt: "A member-managed LLC, where owners decide themselves, is an example of:",
            options: ["delegated control", "direct control", "hostile control", "foreign control"],
            correctIndex: 1,
            explanation: "In direct governance the people who own it are the people in the room making the call. It is simple but does not scale.",
            sourceLessonSlug: "bgov-decides-not-owns",
          },
          {
            prompt: "Under delegated governance, a person can own a large share and control:",
            options: ["everything too", "almost nothing", "only the tax", "only the debt"],
            correctIndex: 1,
            explanation: "Ownership and control come apart on purpose, so a big owner can hold little control and a small owner can hold much.",
            sourceLessonSlug: "bgov-decides-not-owns",
          },
          {
            prompt: "The gap between owners and managers is named the separation of ownership and:",
            options: ["control", "capital", "revenue", "custom"],
            correctIndex: 0,
            explanation: "As shares disperse, real control drifts from the owners to the managers who run the business day to day.",
            sourceLessonSlug: "bgov-separation",
          },
          {
            prompt: "Berle and Means described that gap in a 1932 book about the modern:",
            options: ["tax office", "trade union", "corporation", "county board"],
            correctIndex: 2,
            explanation: "The Modern Corporation and Private Property (1932) named the problem every governance rule since has tried to manage.",
            sourceLessonSlug: "bgov-separation",
          },
          {
            prompt: "Picturing owners as principals and managers as agents, the risk is that agents:",
            options: ["serve themselves", "quit too fast", "pay no taxes", "own no stock"],
            correctIndex: 0,
            explanation: "Agents have their own interests and, if nothing checks them, can run a business for themselves rather than for the owners.",
            sourceLessonSlug: "bgov-separation",
          },
          {
            prompt: "Which is NOT one of the three devices that bridge the ownership-control gap?",
            options: ["the board", "fiduciary duty", "the vote", "the logo"],
            correctIndex: 3,
            explanation: "The board oversees, fiduciary duty binds the deciders, and voting keeps the owners' lever. A logo governs nothing.",
            sourceLessonSlug: "bgov-separation",
          },
          {
            prompt: "In the three-device map, the board's job about the gap is to:",
            options: ["oversee managers", "set the tax rate", "sell the shares", "write the ads"],
            correctIndex: 0,
            explanation: "The owners elect a small body to hire, fire, and oversee the managers on their behalf. That is the standing overseer.",
            sourceLessonSlug: "bgov-separation",
          },
          {
            prompt: "The device that keeps owners able to choose the board is:",
            options: ["the audit", "the voting", "the payroll", "the lease"],
            correctIndex: 1,
            explanation: "Voting is the lever the owners never fully give up: they elect the board and approve the biggest decisions.",
            sourceLessonSlug: "bgov-separation",
          },
          {
            prompt: "The two questions to ask any organization are who owns it and who:",
            options: ["banks with it", "insures it", "decides for it", "advertises it"],
            correctIndex: 2,
            explanation: "When the owner and the decider are different people, you are looking at delegated governance, the course's home ground.",
            sourceLessonSlug: "bgov-decides-not-owns",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The board and whose interests it serves
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bgov-the-board",
      title: "5 · The board of directors: the owners' overseer",
      section: "Section 2 · The board and whose interests it serves",
      body: `The first and oldest device for bridging the ownership-control gap is a **board of directors**. Section 1 called it the standing overseer; this lesson says what it actually is and does. Get the board right and most of corporate governance falls into place, because the board is the hinge the whole structure turns on.

## Where the board sits

Picture three layers in a corporation, stacked:

- **The shareholders** own the company but do not run it. Their main power is to **elect the board.**
- **The board of directors** sits in the middle. Elected by the shareholders, it acts on their behalf: it does not run the company day to day, it **oversees** the people who do.
- **The officers** (the chief executive and the rest of management) run the company day to day, and they answer to the board.

**The board is the bridge between the owners and the managers**, which is exactly what the separation of ownership and control needs. It is elected by the first group to keep watch on the second.

## What a board actually does

A board is not a rubber stamp and it is not the management team. Its core jobs are few and heavy:

| Board job | What it means in practice |
|---|---|
| **Hire and fire the CEO** | The single most important power a board has: choose the chief executive and replace one who fails |
| **Set direction and approve big moves** | Strategy, major deals, big borrowing, issuing stock: the decisions above management's pay grade |
| **Oversee, not operate** | Monitor performance, finances, and risk on the owners' behalf, without running the business itself |
| **Answer to the shareholders** | Stand for election, report to the owners, and act in the company's interest |

**Hold the line between oversee and operate.** A board that starts running the company has stopped being a check on management and become management; a board that oversees nothing is a rubber stamp. The value of the board is precisely that it is neither.

## Composition: who sits on it

A board is made up of individual **directors**, led by a **chair** who runs the board's meetings. One live question of composition is whether the same person is both **chair of the board and chief executive**. When one person holds both roles, the individual who runs the company also runs the body that is supposed to oversee the company, which many governance reformers see as weakening the check. Splitting the two roles, or naming a strong lead independent director, is a common response. **There is no single right answer, and this course does not prescribe one; it teaches you to notice the question and ask it.**

## Reading a board

When you meet any corporation, ask three things about its board:

1. **Who elects it?** Usually the shareholders, but how (one share one vote, or something else) is a question Section 4 reopens.
2. **Does it oversee or operate?** Is this a real check on management, or a friendly rubber stamp?
3. **Are the top two roles split or combined?** Is the CEO also the chair, and if so, who keeps watch on the watcher?

**Not advice:** whether a specific board is doing its job is a judgment about real people and real conduct, and it belongs to professionals who can see the record. This lesson teaches you what a board is for, so you know what to look for.

## Sources
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov*. https://www.investor.gov`,
      recallContent: [
        {
          prompt: "What is the separation of ownership and control?",
          answer: "As a company's shares disperse among many owners, no single shareholder runs it or watches it closely, so real control drifts to the managers. Owners and controllers stop being the same people. Berle and Means named it in 1932.",
        },
        {
          prompt: "In the principal-agent picture, who is who, and what is the risk?",
          answer: "Owners are the principals, on whose behalf the business runs; managers are the agents hired to run it. The risk (the agency problem) is that agents have their own interests and can run the business for themselves.",
        },
        {
          prompt: "Name the three devices that bridge the ownership-control gap and what each does.",
          answer: "The board (owners elect a body to hire, fire, and oversee managers), fiduciary duty (the law obliges deciders to act in the organization's interest), and voting (owners keep the power to choose the board and approve the biggest decisions).",
        },
        {
          prompt: "Why does the separation of ownership and control matter beyond big companies?",
          answer: "Any time a group entrusts a few of its number to run something (an HOA, a union local, a pension fund, a nonprofit) the same gap opens and the same three devices appear, so the pattern reads across almost any organization.",
        },
      ],
    },
    {
      slug: "bgov-electing-directors",
      title: "6 · Electing directors, and the case for independence",
      section: "Section 2 · The board and whose interests it serves",
      body: `The board is only a real check on management if the owners genuinely choose it and if enough of its members are genuinely willing to say no. This lesson covers both: how directors are **elected**, and why so much governance turns on how many directors are **independent**.

## How directors are elected

In a typical corporation, the shareholders elect the directors, usually at an **annual meeting**, and usually on the principle that **votes follow shares**: the more shares you own, the more votes you cast. Most shareholders never attend in person; they vote by **proxy**, authorizing someone to cast their vote according to their instructions, off a document (the proxy statement) that lays out the candidates and the issues. **The proxy statement is a primary source**, in the sense course 1 taught: it is where a public company actually tells its owners who is standing for the board and why.

Two structural choices shape how much power the vote really carries:

- **Annual vs staggered boards.** If the whole board stands for election every year, shareholders can replace it quickly. If the board is **staggered** (also called classified), only a fraction of the seats are up each year, so replacing a majority takes multiple years. A staggered board insulates directors from a fast shareholder revolt, for better or worse.
- **How votes are counted.** The rules for how many votes elect a director, and whether shareholders can concentrate their votes, change how much say a minority owner has. These are details you read in the bylaws, not values this course asserts from memory.

## Inside, outside, and independent directors

Not all directors are the same, and the difference is the heart of modern board design:

| Kind of director | Who they are | The oversight worry |
|---|---|---|
| **Inside director** | An executive of the company (the CEO, a senior officer) | They cannot neutrally oversee management, because they are management |
| **Outside director** | Someone not employed by the company | Better placed to be objective, but may still have ties |
| **Independent director** | An outside director with no material relationship to the company beyond the board seat | Free enough of conflicts to say no to management |

**The reason independence matters is the whole point of the board.** A board exists to oversee management on the owners' behalf. A director who works for the CEO, sells to the company, or is the CEO's close business partner is compromised as an overseer, because the person they are supposed to check has a hold on them. **The more of the board that is genuinely independent, the more real the check.** That is why listing standards and governance codes push for a substantial share of independent directors and for the key oversight committees to be independent (Section 7).

## Reading an election

Ask, of any board:

1. **Do the owners really pick it?** One share one vote at an annual meeting is the baseline; anything that weakens it (a staggered board, a super-voting class) shifts power away from ordinary owners.
2. **How independent is it?** Count how many directors work for the company or do business with it. A board thick with insiders and friends is a weak check no matter how large.

**Not advice:** independence is a matter of specific relationships and specific rules, and whether a given director is truly independent is a factual and legal question for professionals. This lesson teaches you why the question is worth asking.

## Sources
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.
- U.S. Securities and Exchange Commission. (n.d.). *Spotlight on proxy matters*. https://www.sec.gov`,
      recallContent: [
        {
          prompt: "Where does a board sit in the three-layer corporate stack, and what is its core job?",
          answer: "Between the shareholders (who own but do not run) and the officers (who run it day to day). Elected by the shareholders, the board oversees management on their behalf rather than operating the company itself.",
        },
        {
          prompt: "What is the single most important power a board holds?",
          answer: "To hire and fire the chief executive: choose the CEO and replace one who fails. It also sets direction, approves big moves, oversees performance and risk, and answers to the shareholders.",
        },
        {
          prompt: "Why must a board neither operate nor rubber-stamp?",
          answer: "A board that runs the company has stopped being a check on management and become management; a board that oversees nothing is a rubber stamp. Its value is that it is neither, an overseer standing between owners and managers.",
        },
        {
          prompt: "What governance question does combining the chair and CEO roles raise?",
          answer: "When one person runs the company and also runs the body meant to oversee the company, the check is weakened. A common response is to split the roles or name a strong lead independent director. There is no single right answer.",
        },
      ],
    },
    {
      slug: "bgov-committees",
      title: "7 · Board committees: where the oversight actually happens",
      section: "Section 2 · The board and whose interests it serves",
      body: `A full board meets only occasionally and cannot do detailed work as a whole. So a board does most of its real oversight through **committees**: smaller groups of directors assigned to watch one thing closely and report back. Where the committees are, and who sits on them, is often where you learn whether a board's oversight is real.

## The three committees to know

Public-company boards commonly run three standing committees, each aimed at a place where management's interests and the owners' interests can pull apart:

| Committee | What it oversees | Why it exists |
|---|---|---|
| **Audit committee** | The financial statements, the outside auditor, and internal controls | Management prepares the numbers; someone independent must check that they are honest |
| **Compensation committee** | The pay of the CEO and top executives | If executives set their own pay, they will overpay themselves; an independent body should decide it |
| **Nominating committee** | Who is nominated to join the board | If management picks the directors, the directors cannot independently oversee management |

**Read the logic in that third column.** Each committee guards a decision that management should not make about itself: whether its own numbers are true, how much it is paid, and who gets to oversee it. That is the agency problem from Section 1, handled one committee at a time.

## Why these committees are pushed to be independent

For US public companies, an important reform after major accounting scandals was to require that the **audit committee be composed of independent directors** (the Sarbanes-Oxley Act of 2002 tied listing to audit-committee independence, described here in general terms rather than by section number). The reasoning is exact: an audit committee that includes the executives whose numbers it reviews is not a check at all. The same logic pushes the compensation and nominating committees toward independence. **A committee only overseeing management honestly if the people it oversees are not sitting on it.** This is why lesson 6's count of independent directors matters so much: without enough of them, you cannot staff independent committees.

## The nominating committee is quietly powerful

One committee deserves a second look, because it is where control can concentrate without anyone noticing. **The nominating committee decides who is put forward for the board.** Whoever controls the slate of nominees strongly shapes who ends up on the board, and therefore who oversees management, and therefore whether the oversight is real. If management effectively picks the nominees, the board that is supposed to check management has been chosen by the very people it is supposed to check. **Reading who controls nominations is reading where the real power sits.**

## Reading committees

Of any board, ask:

1. **Are there independent committees for audit, pay, and nominations?** Their existence and independence is a strong signal of whether oversight is genuine.
2. **Who controls the nominating process?** If it is management, treat the board's independence as weaker than the headcount suggests.

**Not advice:** the exact committee rules a company must follow depend on where it is listed and what law applies, and this course does not assert them from memory. It teaches you what the committees are for, so you can ask whether they are doing it.

## Sources
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov*. https://www.investor.gov`,
      recallContent: [
        {
          prompt: "How are directors typically elected, and what document lays out the choice?",
          answer: "By the shareholders, usually at an annual meeting on the principle that votes follow shares. Most vote by proxy off the proxy statement, a primary source that names the candidates and the issues.",
        },
        {
          prompt: "What is the difference between an annual and a staggered (classified) board?",
          answer: "In an annual board the whole board stands for election each year, so owners can replace it fast. In a staggered board only a fraction of seats are up each year, so replacing a majority takes multiple years, insulating directors from a fast revolt.",
        },
        {
          prompt: "Distinguish an inside, an outside, and an independent director.",
          answer: "An inside director is a company executive (cannot neutrally oversee management, being management). An outside director is not employed there. An independent director is an outside director with no material relationship beyond the board seat, free enough of conflicts to say no.",
        },
        {
          prompt: "Why does the share of independent directors matter so much?",
          answer: "A board exists to oversee management on the owners' behalf; a director beholden to the CEO cannot be a real check. The more of the board that is genuinely independent, the more real the oversight.",
        },
      ],
    },
    {
      slug: "bgov-shareholders-stakeholders",
      title: "8 · Whose interests? Shareholders versus stakeholders",
      section: "Section 2 · The board and whose interests it serves",
      body: `Everything so far assumed a settled answer to a question that is not, in fact, settled: **when the board decides, whose interests is it supposed to serve?** The owners who elected it, or a wider set of people the company affects? This is one of the genuinely open arguments in the field, and an honest course teaches the disagreement rather than pretending one side won.

## The two positions

- **Shareholder primacy.** The company is run **for its shareholders**, and the board's job is to advance the owners' interests, chiefly their financial return. Other groups matter, but as means to that end and through the constraints of law and contract, not as ends the board must serve directly. On this view, a board that spends the owners' money on goals the owners did not choose is exceeding its mandate.
- **Stakeholder theory.** The company is run for a wider set of **stakeholders**: not only shareholders but employees, customers, suppliers, the community, and, increasingly, the environment. On this view the board should weigh those interests directly, because the company depends on all of them and affects all of them, and a business run only for its shareholders can impose real harm on everyone else.

**Neither position is a fringe view.** Serious people, serious companies, and serious legal systems land in different places, and the same country can shift over time. That is why this belongs in the "teach the disagreement" category rather than the "here is the rule" category.

## Where US law has leaned, stated precisely

Two US cases mark the shareholder-primacy line clearly enough to name precisely:

- In **Dodge v. Ford Motor Co.** (1919), the Michigan Supreme Court, in a fight between Henry Ford and the Dodge brothers (minority shareholders) over Ford's plan to cut dividends and pour profits into expansion and lower prices, stated that a business corporation is organized primarily for the profit of its stockholders. The same opinion, notably, still gave directors wide latitude over business methods. It is the case most often quoted for shareholder primacy.
- In **eBay Domestic Holdings, Inc. v. Newmark** (Del. Ch. 2010), involving the online marketplace craigslist, the Delaware Court of Chancery held that directors of a Delaware for-profit corporation may not subordinate the financial interests of the stockholders to other, non-stockholder goals. It is a modern statement that a for-profit corporation, whatever its culture, still owes its duties to the owners.

**State those two as the doctrine leans, not as the last word.** They describe a real tendency in US corporate law toward shareholder primacy. They do not settle the moral or political argument, and they do not describe every jurisdiction.

## The forms that were built for the argument

Course 2 introduced a form invented to soften shareholder primacy: the **benefit corporation**, a legal corporate form whose charter commits it to a public benefit and gives its directors room to weigh stakeholders alongside shareholders. It is the argument turned into a form. (Remember course 2's warning: a benefit corporation, a legal form, is not the same as a Certified B Corp, a private certification.) Other countries build the wider answer straight into the board itself, which is where Section 4 is heading with the German two-tier board and worker codetermination.

## Reading the question

Of any company, ask:

1. **Whom does its charter say it serves?** An ordinary corporation leans to the shareholders; a benefit corporation names a broader purpose.
2. **What does the law where it sits require?** The default answer differs by country and can change over time.

**Not advice:** whether a board breached its duty by favoring or ignoring a group is a legal question about specific facts, and it is exactly the kind of thing this course sends to a lawyer. The lesson here is that the question is contested, and that you should notice which answer a given company is built on.

## Sources
- Dodge v. Ford Motor Co., 204 Mich. 459 (1919).
- eBay Domestic Holdings, Inc. v. Newmark, 16 A.3d 1 (Del. Ch. 2010).
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.`,
      recallContent: [
        {
          prompt: "Why does a board do most of its oversight through committees?",
          answer: "The full board meets only occasionally and cannot do detailed work as a whole, so smaller committees of directors each watch one thing closely and report back. Where the committees are, and who sits on them, shows whether oversight is real.",
        },
        {
          prompt: "Name the three common board committees and what each guards.",
          answer: "The audit committee (the financial statements and the outside auditor), the compensation committee (executive pay), and the nominating committee (who is put forward for the board). Each guards a decision management should not make about itself.",
        },
        {
          prompt: "Why are these committees pushed to be independent?",
          answer: "A committee only checks management honestly if the people it oversees are not sitting on it. US reform after accounting scandals required audit committees of independent directors (Sarbanes-Oxley, 2002), and the same logic pushes pay and nominating committees toward independence.",
        },
        {
          prompt: "Why is the nominating committee quietly powerful?",
          answer: "It decides who is put forward for the board, so whoever controls the slate shapes who oversees management. If management effectively picks the nominees, the board meant to check management has been chosen by the people it is supposed to check.",
        },
      ],
    },
    {
      slug: "bgov-quiz-the-board",
      title: "9 · Quiz: the board and whose interests it serves",
      section: "Section 2 · The board and whose interests it serves",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "In a corporation's three layers, the board sits between the officers and the:",
            options: ["auditors", "lenders", "shareholders", "customers"],
            correctIndex: 2,
            explanation: "Shareholders own but do not run the company; they elect the board, which oversees the officers who run it.",
            sourceLessonSlug: "bgov-the-board",
          },
          {
            prompt: "The single most important power a board holds is to:",
            options: ["set the prices", "hire the CEO", "sign each check", "pick the bank"],
            correctIndex: 1,
            explanation: "Choosing the chief executive, and replacing one who fails, is the board's heaviest power over management.",
            sourceLessonSlug: "bgov-the-board",
          },
          {
            prompt: "A board is supposed to oversee management, not:",
            options: ["operate it", "elect it", "audit it", "fund it"],
            correctIndex: 0,
            explanation: "A board that runs the company has become management; a board that oversees nothing is a rubber stamp. Its value is being neither.",
            sourceLessonSlug: "bgov-the-board",
          },
          {
            prompt: "Combining the chair and CEO roles worries reformers because it lets one person:",
            options: ["run and watch it", "skip all meetings", "avoid the tax", "sell more stock"],
            correctIndex: 0,
            explanation: "The person who runs the company also runs the body meant to oversee the company, which weakens the check.",
            sourceLessonSlug: "bgov-the-board",
          },
          {
            prompt: "Most shareholders cast their board votes by:",
            options: ["mailed cash", "in-person only", "proxy", "phone call"],
            correctIndex: 2,
            explanation: "They vote by proxy off the proxy statement, a primary source that names the candidates and the issues.",
            sourceLessonSlug: "bgov-electing-directors",
          },
          {
            prompt: "A staggered (classified) board is one where each year the owners can replace:",
            options: ["the whole board", "only a fraction", "no directors", "the auditor too"],
            correctIndex: 1,
            explanation: "Only a fraction of the seats are up each year, so taking a majority spans multiple years, insulating directors from a fast revolt.",
            sourceLessonSlug: "bgov-electing-directors",
          },
          {
            prompt: "An independent director is best described as one who:",
            options: ["runs the company", "owns no shares", "has no close ties", "attends by proxy"],
            correctIndex: 2,
            explanation: "An independent director is an outside director with no material relationship beyond the board seat, free enough to say no to management.",
            sourceLessonSlug: "bgov-electing-directors",
          },
          {
            prompt: "An inside director is compromised as an overseer because they are also:",
            options: ["a shareholder", "management", "an auditor", "a customer"],
            correctIndex: 1,
            explanation: "An inside director is a company executive, so they cannot neutrally oversee management: they are management.",
            sourceLessonSlug: "bgov-electing-directors",
          },
          {
            prompt: "The board committee that checks the company's financial statements is the:",
            options: ["pay committee", "audit committee", "risk committee", "board chair"],
            correctIndex: 1,
            explanation: "Management prepares the numbers, so an independent audit committee checks that they are honest.",
            sourceLessonSlug: "bgov-committees",
          },
          {
            prompt: "The committee that decides who is put forward for the board is the:",
            options: ["audit committee", "pay committee", "naming committee", "nominating committee"],
            correctIndex: 3,
            explanation: "The nominating committee shapes who ends up overseeing management, which is why controlling it can quietly concentrate power.",
            sourceLessonSlug: "bgov-committees",
          },
          {
            prompt: "US reform after accounting scandals required that the audit committee be:",
            options: ["all executives", "all independent", "picked by the CEO", "chosen by lot"],
            correctIndex: 1,
            explanation: "The Sarbanes-Oxley Act of 2002 tied listing to an independent audit committee, because a committee of the executives it reviews is no check.",
            sourceLessonSlug: "bgov-committees",
          },
          {
            prompt: "The view that a company is run chiefly for its owners' return is called shareholder:",
            options: ["primacy", "democracy", "immunity", "custody"],
            correctIndex: 0,
            explanation: "Shareholder primacy says the board advances the owners' interests; stakeholder theory says it should weigh a wider set directly.",
            sourceLessonSlug: "bgov-shareholders-stakeholders",
          },
          {
            prompt: "Stakeholder theory says a board should also weigh employees, customers, and the:",
            options: ["tax office", "stock price", "community", "auditor",],
            correctIndex: 2,
            explanation: "Stakeholders include employees, customers, suppliers, the community, and the environment, not only the shareholders.",
            sourceLessonSlug: "bgov-shareholders-stakeholders",
          },
          {
            prompt: "The 1919 case most quoted for shareholder primacy is:",
            options: ["eBay v. Newmark", "Dodge v. Ford", "Marbury v. Madison", "Brown v. Board"],
            correctIndex: 1,
            explanation: "Dodge v. Ford Motor Co. (1919) stated a business corporation is organized primarily for the profit of its stockholders.",
            sourceLessonSlug: "bgov-shareholders-stakeholders",
          },
          {
            prompt: "The legal form built to let directors weigh stakeholders is the:",
            options: ["benefit corp", "holding corp", "shell corp", "close corp"],
            correctIndex: 0,
            explanation: "A benefit corporation is a legal form committing its charter to a public benefit. It is not the same as a Certified B Corp certification.",
            sourceLessonSlug: "bgov-shareholders-stakeholders",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Fiduciary duty and concentrated control
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bgov-fiduciary-duty",
      title: "10 · Fiduciary duty: the highest obligation the law imposes",
      section: "Section 3 · Fiduciary duty and concentrated control",
      body: `The board is the standing overseer and the vote is the owners' lever, but neither works unless the law can reach inside a director's decisions and demand they be made for the company rather than for the director. That reach is **fiduciary duty**, the second of the three devices from Section 1, and it is the legal glue that makes delegated governance safe enough to use.

## What a fiduciary is

A **fiduciary** is someone the law trusts to act for another person's benefit rather than their own. A director is a fiduciary of the corporation and its shareholders; so, generally, are the officers, the trustees of a trust, and the general partner of a partnership. **Being a fiduciary is not the ordinary standard the law holds people to.** In an arm's-length deal, each side may look out for itself. A fiduciary may not: they must put the beneficiary's interest ahead of their own. It is, in general terms, the highest standard of conduct the law imposes, and it exists precisely because the beneficiary has handed over control and could otherwise be exploited.

## Why the deciders must be fiduciaries

Return to the agency problem. The owners handed control to a few managers and directors, who now make decisions with other people's money and could, if free to, decide for themselves. **Fiduciary duty is the law's answer: because you hold power over others' interests, the law binds you to use it for them.** It converts the moral hazard of the ownership-control gap into an enforceable legal obligation. A director who breaches it can be held to account, which is what gives the whole delegated structure its backbone.

## The two duties

Fiduciary duty is usually taught as two duties that answer two different failures, and keeping them straight is the point of the next two lessons:

| Duty | The question it asks | The failure it guards against |
|---|---|---|
| **Duty of care** | Did the director decide carefully and on an informed basis? | Carelessness: deciding lazily, uninformed, without attention |
| **Duty of loyalty** | Did the director act for the company rather than for themselves? | Self-dealing: putting personal gain ahead of the company |

**Care is about how well you decided; loyalty is about whom you decided for.** A director can satisfy one and breach the other: someone can be careful and disloyal (a well-researched deal that quietly enriches them) or loyal and careless (a decision made in good faith but with no diligence at all). Because the two failures are different, the law treats them differently, and the difference is exactly where the next two lessons live.

## The Delaware frame, stated in general

Much US corporate law, and much of the language of fiduciary duty, comes from Delaware, where a large share of US corporations are incorporated. This course refers to the Delaware framework in **general terms**, as the influential source of the duty-of-care, duty-of-loyalty, and business-judgment concepts, without asserting the holding of a specific case it cannot state precisely. **The concepts travel; the exact rule for a given company, in a given state, on given facts, is a lawyer's to supply.**

**Not advice, and it matters most here:** whether a real director breached a real duty is a legal conclusion that turns on evidence and jurisdiction, and it is precisely what you take to a lawyer. This lesson teaches you what the duties are, so you can see when the question has arisen.

## Sources
- Legal Information Institute. (n.d.). *Fiduciary duty*. Cornell Law School. https://www.law.cornell.edu/wex/fiduciary_duty
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.`,
      recallContent: [
        {
          prompt: "When a board decides, whose interests is it supposed to serve, and why is that contested?",
          answer: "Shareholder primacy says chiefly the owners and their financial return; stakeholder theory says a wider set (employees, customers, suppliers, community, environment) directly. Serious people, companies, and legal systems land differently, so the course teaches the disagreement.",
        },
        {
          prompt: "State precisely what Dodge v. Ford (1919) is quoted for.",
          answer: "The Michigan Supreme Court, in Henry Ford's fight with the Dodge brothers over cutting dividends to expand, stated that a business corporation is organized primarily for the profit of its stockholders, while still giving directors wide latitude over business methods.",
        },
        {
          prompt: "What did eBay v. Newmark (Del. Ch. 2010) hold?",
          answer: "In the craigslist case, the Delaware Court of Chancery held that directors of a Delaware for-profit corporation may not subordinate the financial interests of stockholders to other, non-stockholder goals. It is a modern statement of the shareholder-primacy lean.",
        },
        {
          prompt: "What legal form was built to let directors weigh stakeholders, and what is it not?",
          answer: "The benefit corporation, a legal form whose charter commits it to a public benefit and lets directors weigh stakeholders alongside shareholders. It is not the same as a Certified B Corp, which is a private certification, not a legal form.",
        },
      ],
    },
    {
      slug: "bgov-duty-of-care-bjr",
      title: "11 · The duty of care and the business judgment rule",
      section: "Section 3 · Fiduciary duty and concentrated control",
      body: `Take the first of the two fiduciary duties on its own. **The duty of care asks whether a director decided the way a careful person would**: informed, attentive, and deliberate. It says nothing about motive; that is the duty of loyalty. It is entirely about the quality of the decision-making.

## What care requires

A director meeting the duty of care gathers the relevant information, gives the decision real attention, and deliberates before acting, roughly the care a reasonably prudent person would use in like circumstances. In practice that looks like reading the materials, asking questions, relying appropriately on experts and management reports, and not simply rubber-stamping. **The duty of care is a duty of process and diligence, not of being right.** A careful decision can still turn out badly, and the duty of care does not punish a director for that.

## The business judgment rule

Here is the piece that surprises people, and it follows directly from the last sentence. Courts do not want to run companies from the bench, and they know that business decisions are risky and that hindsight is unfair. So the law protects honest, informed decisions with the **business judgment rule**: a presumption that, in making a decision, the directors acted on an **informed basis, in good faith, and in the honest belief that the action was in the best interests of the company.** When that presumption holds, courts will **not second-guess** the decision, even one that lost the company a great deal of money.

**Read what the rule does and does not do:**

- It **protects the process, not the outcome.** A director who was informed, acted in good faith, and honestly believed they were serving the company is shielded even if the decision was a disaster.
- It does **not protect** a director who was grossly uninformed, acted in bad faith, or had a conflict of interest. Bad faith and conflicts belong to the duty of loyalty, and the business judgment rule generally does not save a disloyal act.

The point of the rule is to let directors take reasonable business risks without fear that every loss becomes a lawsuit. **It is a shield for careful, honest, disinterested decisions, and only those.**

## Why this shape makes sense

Think about what the alternative would be. If courts second-guessed every decision that lost money, no sensible person would serve on a board, and boards that did serve would refuse every risk, which would ruin the companies they govern. **The business judgment rule buys the willingness to decide by promising not to punish honest, informed judgment for turning out wrong.** In exchange, it demands the process: be informed, act in good faith, believe you are serving the company. Meet the process and you are protected; skip it, or act for yourself, and the shield is gone.

## Reading for the duty of care

When a decision is questioned, the care question is about **how it was made**:

1. **Were the directors informed?** Did they have and consider the relevant facts, or decide blind?
2. **Did they act in good faith, believing it served the company?** If so, the business judgment rule generally shields the decision even if it failed.

**Not advice:** whether the business judgment rule protects a particular director on particular facts is a legal judgment, and courts and states differ in the details. This lesson teaches you the shape of the rule, not its application to any real case, which belongs to a lawyer.

## Sources
- Legal Information Institute. (n.d.). *Business judgment rule*. Cornell Law School. https://www.law.cornell.edu/wex/business_judgment_rule
- Legal Information Institute. (n.d.). *Duty of care*. Cornell Law School. https://www.law.cornell.edu/wex/duty_of_care`,
      recallContent: [
        {
          prompt: "What is a fiduciary, and how is the standard different from an arm's-length deal?",
          answer: "Someone the law trusts to act for another's benefit rather than their own. In an arm's-length deal each side may look out for itself; a fiduciary must put the beneficiary's interest ahead of their own. It is, in general terms, the highest standard the law imposes.",
        },
        {
          prompt: "Why does the law make directors fiduciaries?",
          answer: "The owners handed control to a few who now decide with other people's money and could decide for themselves. Fiduciary duty converts that moral hazard of the ownership-control gap into an enforceable legal obligation to use the power for the beneficiaries.",
        },
        {
          prompt: "What are the two fiduciary duties, and what does each ask?",
          answer: "The duty of care (did the director decide carefully and on an informed basis?) and the duty of loyalty (did the director act for the company rather than for themselves?). Care is about how well you decided; loyalty is about whom you decided for.",
        },
        {
          prompt: "Why does the course refer to the Delaware framework only in general terms?",
          answer: "Delaware is the influential source of the duty-of-care, duty-of-loyalty, and business-judgment concepts, and the concepts travel; but the exact rule for a given company, state, and set of facts is a lawyer's to supply, so the course does not assert a specific holding it cannot state precisely.",
        },
      ],
    },
    {
      slug: "bgov-duty-of-loyalty",
      title: "12 · The duty of loyalty and conflicts of interest",
      section: "Section 3 · Fiduciary duty and concentrated control",
      body: `The second fiduciary duty is the one people mean when they picture a corrupt director. **The duty of loyalty asks whom the director acted for**: the company, or themselves? Where the duty of care is about diligence, loyalty is about allegiance, and the business judgment rule that shields a careful decision generally does not shield a disloyal one.

## What loyalty requires

A loyal director puts the interest of the corporation and its shareholders **ahead of their own personal interest.** The duty shows up most sharply in three classic failures:

| Failure | What it looks like | Why it breaches loyalty |
|---|---|---|
| **Self-dealing** | The director is on both sides of a deal, for example selling their own property to the company | Their personal gain and the company's interest are in direct conflict |
| **Usurping a corporate opportunity** | The director takes for themselves a business chance that belonged to the company | They enrich themselves with what should have gone to the company |
| **Bad faith** | The director acts for a purpose other than the company's good | The decision is not really being made for the beneficiaries at all |

**All three are versions of the same wrong: the director let their own interest win.** That is what loyalty forbids.

## How conflicts are handled, in general

The duty of loyalty does not mean a director may never have an interest that touches the company; it means such conflicts must be **surfaced and handled**, not hidden. In general terms, a conflicted transaction is defensible when the conflict is fully **disclosed** and the deal is approved by people without the conflict (disinterested directors or shareholders) or is otherwise shown to be **fair** to the company. The unforgivable move is concealment: a director who hides a conflict and pushes through a deal that benefits them has breached loyalty regardless of how the deal turns out. **Sunlight is the mechanism; the secret self-dealing is the sin.** The exact procedure that cleanses a conflict varies by state and by facts, and this course does not assert it from memory.

## Why loyalty and the business judgment rule do not mix

Recall lesson 11: the business judgment rule shields a decision made on an informed basis, in good faith, and in the honest belief it served the company. **A conflicted or bad-faith decision fails those conditions by definition**, so the shield falls away and the transaction can be judged directly, often for its fairness to the company. This is why the care-versus-loyalty distinction is not academic: it determines whether the protective presumption even applies. Careless-but-honest decisions get the shield; disloyal ones do not.

## Reading for the duty of loyalty

When a decision smells wrong, the loyalty question is about **interest**:

1. **Did a decider stand to gain personally?** Were they on both sides, or taking something the company could have had?
2. **Was the conflict disclosed and cleared by disinterested people, or hidden?** Disclosure and disinterested approval defend a conflicted deal; concealment condemns it.

**Not advice:** whether a particular director breached the duty of loyalty is a fact-heavy legal conclusion, and the cleansing procedures differ by jurisdiction. This lesson teaches you to spot the conflict and know the right questions, which is what a good client and a careful reader can do. The verdict belongs to a court and a lawyer.

## Sources
- Legal Information Institute. (n.d.). *Duty of loyalty*. Cornell Law School. https://www.law.cornell.edu/wex/duty_of_loyalty
- Legal Information Institute. (n.d.). *Fiduciary duty*. Cornell Law School. https://www.law.cornell.edu/wex/fiduciary_duty`,
      recallContent: [
        {
          prompt: "What does the duty of care ask, and is it about being right?",
          answer: "Whether a director decided the way a careful person would: informed, attentive, deliberate, roughly the care a reasonably prudent person would use. It is a duty of process and diligence, not of being right; a careful decision can still turn out badly.",
        },
        {
          prompt: "State the business judgment rule and what it protects.",
          answer: "A presumption that directors acted on an informed basis, in good faith, and in the honest belief the action served the company. When it holds, courts will not second-guess the decision, even a costly one. It protects the process, not the outcome.",
        },
        {
          prompt: "What does the business judgment rule NOT protect?",
          answer: "A director who was grossly uninformed, acted in bad faith, or had a conflict of interest. Bad faith and conflicts belong to the duty of loyalty, and the rule generally does not save a disloyal act.",
        },
        {
          prompt: "Why is the shape of the business judgment rule sensible?",
          answer: "If courts punished every money-losing decision, no one would serve on a board and boards would refuse all risk. The rule buys the willingness to decide by not punishing honest, informed judgment for turning out wrong, in exchange for a real process.",
        },
      ],
    },
    {
      slug: "bgov-dual-class",
      title: "13 · Dual-class shares: founder control by design",
      section: "Section 3 · Fiduciary duty and concentrated control",
      body: `So far the owners' lever, the vote, has run on a simple rule: votes follow shares, so control tracks ownership. **Dual-class share structures break that link on purpose**, and they are the sharpest modern example of how a founder can hold control far out of proportion to how much of the company they own. This is decision four and decision three pulling apart, engineered.

## The mechanism

An ordinary corporation can create more than one **class of stock**, and the classes can carry different voting rights. A common design gives the public one class of shares with **one vote each**, while the founders hold a separate class of **super-voting shares** carrying many votes each, often ten votes per share in the structures people point to (described here as a common pattern, not pinned to any named company). The economic ownership can be split any way, but the votes are stacked toward the founders' class.

The result is stark. A founder can own a **minority of the company's economic value** and still command a **majority of the voting power**, because each of their shares outvotes an ordinary share several to one. **They sold the cash-flow claim to the public but kept the control**, which is exactly the ownership-versus-control gap turned into a deliberate tool.

## Why founders and companies do it

Dual-class structures are not simply a power grab, and the honest version teaches both sides:

- **The case for.** It lets a company **raise money from the public without the founders losing control.** Founders argue this frees them to pursue a long-term vision without being forced into short-term moves by outside shareholders or the threat of being voted out. Investors who dislike it can decline to buy.
- **The case against.** It **weakens the owners' central check.** The vote was the lever that kept the board answerable to the owners; a super-voting founder is very hard to vote out no matter how the company performs, which concentrates control and reduces accountability. Outside shareholders bear the economic risk without a proportionate say.

**One common compromise is a sunset provision**, a rule that the super-voting shares convert to ordinary one-vote shares after a set time or when the founder leaves, so the concentration is temporary rather than permanent. Whether a given structure has one, and on what terms, is something you read in the company's charter.

## Where this leaves fiduciary duty

Notice how the pieces fit. Dual-class stock lets a founder keep **control** through the vote; fiduciary duty still binds how that control may be **used**. A controlling founder is generally a fiduciary and cannot lawfully use their votes to loot the company or cheat the minority; the duty of loyalty does not evaporate because someone holds super-voting shares. **Concentrated control raises the stakes on fiduciary duty rather than removing it**, which is why the minority owner's protection in such a company leans heavily on the fiduciary duties from lessons 10 through 12, on disclosure, and on whatever the charter itself promises.

## Reading a dual-class company

Ask:

1. **Are there multiple classes with different votes?** If so, ownership and control have been separated on purpose, and you read the charter for the ratio and the classes.
2. **Where is a minority owner's protection?** Not mainly in the vote, which is stacked, but in fiduciary duty, disclosure, and any charter terms or sunset. This is the exact question the capstone will put to you.

**Not advice:** whether a specific dual-class structure is a good investment or is being abused is a financial and legal judgment about real facts, and it is not one this lesson lets you make. It teaches you to see the structure and locate where protection would have to come from.

## Sources
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov*. https://www.investor.gov
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.`,
      recallContent: [
        {
          prompt: "What does the duty of loyalty ask, and what three classic failures show it?",
          answer: "Whom the director acted for: the company or themselves. The classic failures are self-dealing (being on both sides of a deal), usurping a corporate opportunity (taking a business chance that belonged to the company), and bad faith (acting for a purpose other than the company's good).",
        },
        {
          prompt: "How is a conflict of interest properly handled, in general terms?",
          answer: "It must be surfaced, not hidden: fully disclosed and approved by disinterested directors or shareholders, or otherwise shown to be fair to the company. Concealment is the unforgivable move; sunlight is the mechanism.",
        },
        {
          prompt: "Why do the duty of loyalty and the business judgment rule not mix?",
          answer: "The rule shields decisions made in good faith and honestly believed to serve the company. A conflicted or bad-faith decision fails those conditions by definition, so the shield falls away and the transaction can be judged directly, often for fairness.",
        },
        {
          prompt: "What is the reading move when a decision looks like a loyalty problem?",
          answer: "Ask whether a decider stood to gain personally (on both sides, or taking something the company could have had), and whether the conflict was disclosed and cleared by disinterested people or hidden. Disclosure defends a conflicted deal; concealment condemns it.",
        },
      ],
    },
    {
      slug: "bgov-quiz-fiduciary",
      title: "14 · Quiz: fiduciary duty and concentrated control",
      section: "Section 3 · Fiduciary duty and concentrated control",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A fiduciary is someone the law trusts to act for:",
            options: ["their own gain", "another's benefit", "the tax office", "the lender first"],
            correctIndex: 1,
            explanation: "A fiduciary must put the beneficiary's interest ahead of their own, the highest standard the law generally imposes.",
            sourceLessonSlug: "bgov-fiduciary-duty",
          },
          {
            prompt: "A director is a fiduciary of the corporation and its:",
            options: ["shareholders", "competitors", "customers", "suppliers"],
            correctIndex: 0,
            explanation: "Directors owe fiduciary duties to the corporation and its shareholders, which binds their use of the power owners handed them.",
            sourceLessonSlug: "bgov-fiduciary-duty",
          },
          {
            prompt: "The two fiduciary duties are the duty of loyalty and the duty of:",
            options: ["candor", "profit", "notice", "care"],
            correctIndex: 3,
            explanation: "Care is about how well you decided; loyalty is about whom you decided for. They guard different failures.",
            sourceLessonSlug: "bgov-fiduciary-duty",
          },
          {
            prompt: "Fiduciary duty converts the agency problem into a legal obligation because the deciders hold:",
            options: ["too little stock", "power over others", "the tax return", "the company logo"],
            correctIndex: 1,
            explanation: "Because they decide with other people's money, the law binds them to use that power for the beneficiaries, not themselves.",
            sourceLessonSlug: "bgov-fiduciary-duty",
          },
          {
            prompt: "The duty of care asks whether a director decided in a way that was:",
            options: ["always correct", "cheap to run", "informed", "kept secret"],
            correctIndex: 2,
            explanation: "Care is a duty of process and diligence: be informed, attentive, and deliberate. It is not a duty of being right.",
            sourceLessonSlug: "bgov-duty-of-care-bjr",
          },
          {
            prompt: "The business judgment rule protects the decision's:",
            options: ["process", "outcome", "profit", "price"],
            correctIndex: 0,
            explanation: "It shields an informed, good-faith decision honestly believed to serve the company, even one that lost money. Process, not outcome.",
            sourceLessonSlug: "bgov-duty-of-care-bjr",
          },
          {
            prompt: "The business judgment rule does NOT protect a director who:",
            options: ["read the memo", "asked questions", "hired an expert", "had a conflict"],
            correctIndex: 3,
            explanation: "Bad faith and conflicts belong to the duty of loyalty, and the rule generally does not save a disloyal act.",
            sourceLessonSlug: "bgov-duty-of-care-bjr",
          },
          {
            prompt: "The duty of loyalty asks, above all, whom the director:",
            options: ["informed first", "reported to", "voted with", "acted for"],
            correctIndex: 3,
            explanation: "Loyalty is about allegiance: the company's interest must come ahead of the director's personal interest.",
            sourceLessonSlug: "bgov-duty-of-loyalty",
          },
          {
            prompt: "A director selling their own property to the company is a case of:",
            options: ["self-dealing", "due care", "good faith", "fair notice"],
            correctIndex: 0,
            explanation: "Being on both sides of a deal puts the director's personal gain in direct conflict with the company, breaching loyalty.",
            sourceLessonSlug: "bgov-duty-of-loyalty",
          },
          {
            prompt: "A conflict of interest is properly cleansed mainly by disclosure and approval by the:",
            options: ["conflicted ones", "outside lender", "disinterested", "state office"],
            correctIndex: 2,
            explanation: "A conflicted deal is defensible when fully disclosed and approved by disinterested directors or shareholders, or shown to be fair.",
            sourceLessonSlug: "bgov-duty-of-loyalty",
          },
          {
            prompt: "Taking for yourself a business chance that belonged to the company is called:",
            options: ["due diligence", "usurping it", "good faith", "fair dealing"],
            correctIndex: 1,
            explanation: "Usurping a corporate opportunity enriches the director with what should have gone to the company, breaching loyalty.",
            sourceLessonSlug: "bgov-duty-of-loyalty",
          },
          {
            prompt: "In a dual-class structure, founders typically hold shares that carry:",
            options: ["no votes each", "one vote each", "many votes each", "no dividends"],
            correctIndex: 2,
            explanation: "Super-voting shares carry many votes each, often ten to the public's one in the structures people point to, stacking control.",
            sourceLessonSlug: "bgov-dual-class",
          },
          {
            prompt: "Dual-class stock lets a founder own a minority of the value but hold a majority of the:",
            options: ["voting power", "yearly profit", "tax burden", "sale price"],
            correctIndex: 0,
            explanation: "They sold the cash-flow claim to the public but kept control, separating ownership from control on purpose.",
            sourceLessonSlug: "bgov-dual-class",
          },
          {
            prompt: "The main argument AGAINST dual-class shares is that they weaken the owners':",
            options: ["tax breaks", "dividend size", "central check", "share price"],
            correctIndex: 2,
            explanation: "The vote was the lever keeping the board answerable; a super-voting founder is hard to vote out, concentrating control.",
            sourceLessonSlug: "bgov-dual-class",
          },
          {
            prompt: "A rule converting super-voting shares to one-vote shares over time is a:",
            options: ["poison pill", "sunset clause", "proxy fight", "tender offer"],
            correctIndex: 1,
            explanation: "A sunset provision makes the concentration temporary, converting the super-voting class after a set time or when the founder leaves.",
            sourceLessonSlug: "bgov-dual-class",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Governance designed differently
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bgov-two-tier-board",
      title: "15 · The German two-tier board and codetermination",
      section: "Section 4 · Governance designed differently",
      body: `Everything so far assumed one board that both oversees and, through the officers it appoints, directs the company. That single-board design is called a **unitary board**, and it is the US and UK norm. It is not the only design. Germany, among others, splits the board in two, and builds worker representation into it. This lesson teaches that design in **general terms**, as course 5 flagged; the point is the shape, not the section numbers of German law.

## Two boards, not one

A large German stock corporation (the Aktiengesellschaft, or AG) has a **two-tier board**: two separate bodies, with separate people, that do different jobs.

| Board | German name | What it does |
|---|---|---|
| **Management board** | Vorstand | Runs the company: the executives who direct the business day to day |
| **Supervisory board** | Aufsichtsrat | Oversees the management board: appoints and removes it, and monitors it |

**The key rule is separation.** A person on the management board does **not** sit on the supervisory board at the same time; the overseers and the operators are different people in different bodies. Compare that with the US unitary board, where inside directors (executives) and outside directors sit together on one board, and you see the German answer to the same worry lesson 6 raised: it separates oversight from operation structurally, by building two boards, rather than by hoping for enough independent directors on one.

**Watch the trap:** it is easy to swap the two. The management board manages; the supervisory board supervises. The supervisory board is the senior overseer that hires and can fire the management board, the rough equivalent of the US board's power over the CEO, and the management board is the executive team it oversees.

## Codetermination: workers on the supervisory board

Here is the feature that most sharply distinguishes the German design, and the one course 5 tied to the unions track: **codetermination**, in German **Mitbestimmung**. In large German companies, a substantial share of the **supervisory board** seats are filled by **employee representatives**, elected by the workforce, sitting alongside the representatives of the shareholders. Workers, in other words, help oversee the company they work for, from inside the governance structure, not only through a union bargaining across the table.

This is a different answer to Section 2's shareholders-versus-stakeholders question. Where a US benefit corporation lets directors weigh employees, German codetermination **puts employees on the oversight board by law.** The exact proportion of employee seats and which companies are covered depend on German statutes that this course does not recite from memory; what travels is the concept: **in this system, labor has a structural seat in governance, not merely a contract with it.**

## Why this matters for reading any structure

The German design proves a general point worth more than the German details: **the board is a design choice, not a law of nature.** One board or two, shareholders only or workers too, oversight fused with operation or split from it: these are decisions a legal system makes, and different systems make them differently, with real consequences for who actually decides. A learner who can read the US unitary board and the German two-tier board can read a board anywhere, by asking the same questions about who oversees, who operates, and who gets a seat.

**Not advice:** how a specific German or other foreign company is governed depends on that country's law and that company's documents, which you would read or take to a professional there. This lesson teaches the shape so you recognize it.

## Sources
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov*. https://www.investor.gov`,
      recallContent: [
        {
          prompt: "How does a dual-class structure separate ownership from control?",
          answer: "The company creates classes of stock with different votes: the public holds one-vote shares while founders hold super-voting shares (often ten votes each). A founder can own a minority of the value yet command a majority of the voting power.",
        },
        {
          prompt: "Give the case for and the case against dual-class shares.",
          answer: "For: it lets a company raise public money without founders losing control, freeing a long-term vision from short-term pressure. Against: it weakens the owners' central check, since a super-voting founder is very hard to vote out, concentrating control and reducing accountability.",
        },
        {
          prompt: "Does concentrated control through super-voting shares remove fiduciary duty?",
          answer: "No. Dual-class stock affects control through the vote, but a controlling founder is generally still a fiduciary and cannot use their votes to loot the company or cheat the minority. Concentrated control raises the stakes on fiduciary duty rather than removing it.",
        },
        {
          prompt: "In a dual-class company, where does a minority owner's protection mainly come from?",
          answer: "Not mainly from the vote, which is stacked, but from fiduciary duty, disclosure, and whatever the charter promises, including any sunset provision that converts super-voting shares to one-vote shares over time.",
        },
      ],
    },
    {
      slug: "bgov-one-member-one-vote",
      title: "16 · One share one vote versus one member one vote",
      section: "Section 4 · Governance designed differently",
      body: `Course 1 named this distinction in a single line and promised the cooperatives course would build on it. This lesson develops it as pure governance, because it is the cleanest example in the whole subject of how the **voting rule** decides who actually controls an organization. Change one rule and you change everything about who holds power.

## The two rules

- **One share, one vote.** The corporate default. Votes follow shares, so the more of the company you own, the more of the deciding you do. **Capital controls.** Someone who buys half the shares controls half the votes, and this is exactly what makes a share a vehicle for investment: money buys a proportionate say.
- **One member, one vote.** The cooperative rule. Each member gets **exactly one vote**, regardless of how much money they put in or how much they use the co-op. **People control.** The largest patron and the smallest each have the same single vote, so control cannot be bought by putting in more capital.

**That single difference is the line between an ordinary corporation and a cooperative.** It is not the whole of what a co-op is (course 3 covered the worker, consumer, producer, housing, and purchasing types, the Rochdale roots, credit unions), but it is the governance heart: a co-op is, at the level of who decides, an organization that runs on one member one vote.

## Why the rule changes the whole character

The voting rule is not a detail; it determines what the organization is for and whom it answers to:

| Question | One share, one vote | One member, one vote |
|---|---|---|
| **Who controls?** | The largest capital holders | The members equally, as people |
| **What is it optimized for?** | Return to capital | Service to members |
| **Can control be bought?** | Yes, by buying more shares | No, extra money buys no extra votes |

**Read the middle row, because it is the deep point.** An organization where capital controls will tend to be run to reward capital; an organization where members control equally will tend to be run to serve members. The voting rule is upstream of almost everything else. This is the governance expression of what course 3 taught about cooperative identity: democratic member control is a founding principle, and one member one vote is how it is enforced (International Co-operative Alliance, n.d.).

## Variations you should expect

Reality is not always this clean, and reading well means expecting variation:

- Some cooperatives use **weighted or proportional voting** in limited ways, or give member classes different weights, especially larger producer or purchasing co-ops. The pure one-member-one-vote rule is the ideal type, and real bylaws can modify it.
- Some corporations voluntarily adopt structures that dilute pure one-share-one-vote (the dual-class shares of lesson 13 are the opposite move, concentrating rather than equalizing).

**So do not read the label; read the bylaws.** The question is always the same: does a vote track money, or does it track membership? The answer tells you who actually decides.

## Reading the voting rule

Of any member organization, ask:

1. **Does a vote follow capital or membership?** One share one vote means capital controls; one member one vote means people control.
2. **What do the actual bylaws say?** The ideal types are a starting point; the document is the authority, exactly as course 1 taught.

**Not advice:** whether a co-op or a corporation is the right vehicle for a real venture is a legal, financial, and strategic question for professionals. This lesson teaches you to read who the voting rule hands control to.

## Sources
- International Co-operative Alliance. (n.d.). *Cooperative identity, values and principles*. https://www.ica.coop/en/cooperatives/cooperative-identity
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.`,
      recallContent: [
        {
          prompt: "What is a unitary board, and how does the German two-tier board differ?",
          answer: "A unitary board is one board that oversees and, through the officers it appoints, directs the company (the US and UK norm). The German two-tier board splits it into two separate bodies with separate people: a management board that runs the company and a supervisory board that oversees it.",
        },
        {
          prompt: "Which German board manages and which supervises, and what is the key separation rule?",
          answer: "The management board (Vorstand) runs the company; the supervisory board (Aufsichtsrat) oversees it, appointing and removing it. A person cannot sit on both at once, so overseers and operators are structurally different people.",
        },
        {
          prompt: "What is codetermination (Mitbestimmung)?",
          answer: "In large German companies, a substantial share of the supervisory board seats are filled by employee representatives elected by the workforce, sitting alongside shareholder representatives. Labor gets a structural seat in governance, not merely a contract with it.",
        },
        {
          prompt: "What general point does the German design prove for reading any structure?",
          answer: "That the board is a design choice, not a law of nature: one board or two, shareholders only or workers too, oversight fused with operation or split from it. Different legal systems decide differently, with real consequences for who actually decides.",
        },
      ],
    },
    {
      slug: "bgov-nonprofit-coop-boards",
      title: "17 · Boards without shareholders: nonprofit and co-op boards",
      section: "Section 4 · Governance designed differently",
      body: `Every structure so far had owners at the top of the chain, whether they controlled by shares or by heads. This last teaching lesson removes the owners entirely, or replaces them with members, and asks the hardest version of the course's question: **when nobody owns the residual value, who actually decides, and who holds the deciders accountable?**

## The nonprofit: a board answering to a mission

A nonprofit corporation has **no owners** and **no shareholders.** Nobody holds a claim on its profits, and in fact it generally cannot distribute profits to insiders at all; a surplus must go back into the mission. So the top of the chain is not a group of owners but a **purpose**: the charitable, educational, or other mission in its founding documents. Who decides?

- **The board of directors (often called trustees) governs**, and here the board is even more central than in a company, because there are no shareholders standing behind it. The board holds the mission in trust.
- **Where do the board members come from?** Commonly a nonprofit board is **self-perpetuating**: the existing directors elect the new ones. In a membership nonprofit, members elect the board. Either way, **there is no shareholder vote to fall back on**, so the accountability that shares provide in a company has to come from elsewhere.
- **The directors are still fiduciaries**, owing duties of care and loyalty, but they owe them to the **organization and its mission** rather than to owners. A nonprofit director who diverts assets breaches loyalty just as a company director would, and state oversight (often through the attorney general) and the tax authority stand in for the missing shareholders (Internal Revenue Service, n.d.).

**The design tension is real:** a self-perpetuating board with no owners watching it can drift or entrench, which is why nonprofit governance leans so hard on independent directors, disclosure, and outside oversight.

## The cooperative board: elected one member one vote

A cooperative does have owners of a sort, its **members**, but from lesson 16 you know they control on **one member one vote.** So a co-op board is elected democratically by the members, each with an equal say, and it governs on their behalf. The chain looks like a company's (members elect a board that oversees management), but the electorate is equal people rather than weighted capital. **A co-op board answers to its members as a democracy, where a corporate board answers to its shareholders as an investment.**

## Putting the three chains side by side

The whole course fits in one comparison. Ask of each: who is at the top, and how do they control?

| Structure | Who is at the top | How they control | Who the board answers to |
|---|---|---|---|
| **Ordinary corporation** | Shareholders | One share, one vote | Owners, by weighted vote |
| **Cooperative** | Members | One member, one vote | Members, as equals |
| **Nonprofit** | A mission (no owners) | Board holds it in trust | The mission, under state and tax oversight |

**Read across the last column and you have the course.** In every case the board is the standing decider and fiduciary duty binds it; what changes is who elects the board and on what principle, which is what finally settles who actually decides.

## Reading a board with no shareholders

Ask:

1. **Is there an owner at all?** A nonprofit has none; a co-op has members, not shareholders. That changes where accountability comes from.
2. **Who elects the board, and who watches it?** Self-perpetuating trustees under state and tax oversight, or members voting as equals? The answer locates the real power.

**Not advice:** nonprofit and cooperative governance is governed by specific state statutes and, for nonprofits, tax rules this course does not assert from memory. It teaches you to find who decides when the familiar shareholders are missing.

## Sources
- Internal Revenue Service. (n.d.). *Charities and nonprofits*. https://www.irs.gov/charities-and-nonprofits
- International Co-operative Alliance. (n.d.). *Cooperative identity, values and principles*. https://www.ica.coop/en/cooperatives/cooperative-identity`,
      recallContent: [
        {
          prompt: "What are the two voting rules, and what does each hand control to?",
          answer: "One share, one vote (the corporate default): votes follow shares, so capital controls and control can be bought. One member, one vote (the cooperative rule): each member gets one vote regardless of stake, so people control and control cannot be bought.",
        },
        {
          prompt: "Why is the voting rule upstream of an organization's whole character?",
          answer: "An organization where capital controls tends to be run to reward capital; one where members control equally tends to be run to serve members. The rule determines whom the organization answers to and what it is optimized for.",
        },
        {
          prompt: "Why should you read the bylaws rather than the label on voting?",
          answer: "Reality varies: some cooperatives use limited weighted or proportional voting, and some corporations dilute pure one-share-one-vote. The document is the authority; the question is always whether a vote tracks money or membership.",
        },
        {
          prompt: "What single line captures the corporation-versus-cooperative governance difference?",
          answer: "In a corporation votes follow shares, so capital controls; in a cooperative each member has one vote, so people control. That difference is the governance line between the two.",
        },
      ],
    },
    {
      slug: "bgov-quiz-designed-differently",
      title: "18 · Quiz: governance designed differently",
      section: "Section 4 · Governance designed differently",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A single board that both oversees and directs the company is called a:",
            options: ["unitary board", "split board", "member board", "hidden board"],
            correctIndex: 0,
            explanation: "The unitary board is the US and UK norm; Germany instead splits the board into two separate bodies.",
            sourceLessonSlug: "bgov-two-tier-board",
          },
          {
            prompt: "In the German two-tier system, the body that runs the company is the:",
            options: ["management board", "supervisory board", "audit board", "member board"],
            correctIndex: 0,
            explanation: "The management board (Vorstand) directs the business; the supervisory board (Aufsichtsrat) oversees it.",
            sourceLessonSlug: "bgov-two-tier-board",
          },
          {
            prompt: "In the German two-tier system, the body that oversees is the:",
            options: ["management board", "operating board", "supervisory board", "founders board"],
            correctIndex: 2,
            explanation: "The supervisory board appoints, removes, and monitors the management board, the rough equal of a US board's power over the CEO.",
            sourceLessonSlug: "bgov-two-tier-board",
          },
          {
            prompt: "A German management-board member may also sit on the supervisory board:",
            options: ["always", "at no time", "if elected", "if a founder"],
            correctIndex: 1,
            explanation: "The two boards keep separate people, so overseers and operators are structurally distinct, unlike the mixed US board.",
            sourceLessonSlug: "bgov-two-tier-board",
          },
          {
            prompt: "German codetermination (Mitbestimmung) puts elected employee representatives on the:",
            options: ["management board", "works picket", "audit committee", "supervisory board"],
            correctIndex: 3,
            explanation: "In large German firms a substantial share of supervisory-board seats are filled by employee representatives, giving labor a structural seat.",
            sourceLessonSlug: "bgov-two-tier-board",
          },
          {
            prompt: "Codetermination is a structural answer to which Section 2 debate?",
            options: ["care vs loyalty duty", "annual vs staggered boards", "shareholders vs stakeholders", "audit vs pay committees"],
            correctIndex: 2,
            explanation: "Where a benefit corporation lets directors weigh employees, codetermination puts employees on the oversight board by law.",
            sourceLessonSlug: "bgov-two-tier-board",
          },
          {
            prompt: "Under one share, one vote, control belongs to whoever holds the most:",
            options: ["members", "capital", "seniority", "meetings"],
            correctIndex: 1,
            explanation: "Votes follow shares, so capital controls and control can be bought by buying more shares.",
            sourceLessonSlug: "bgov-one-member-one-vote",
          },
          {
            prompt: "Under one member, one vote, each member's votes equal:",
            options: ["their stake", "their tenure", "exactly one", "their usage"],
            correctIndex: 2,
            explanation: "Each member gets one vote regardless of money put in, so people control and extra capital buys no extra say.",
            sourceLessonSlug: "bgov-one-member-one-vote",
          },
          {
            prompt: "One member, one vote is the voting rule that defines a:",
            options: ["cooperative", "C-corporation", "partnership", "trust fund"],
            correctIndex: 0,
            explanation: "It is the governance heart of a co-op: democratic member control, enforced by giving each member a single equal vote.",
            sourceLessonSlug: "bgov-one-member-one-vote",
          },
          {
            prompt: "Because voting rules vary in practice, you should always read the:",
            options: ["press release", "share price", "bylaws", "logo",],
            correctIndex: 2,
            explanation: "Some co-ops weight votes and some corporations dilute one-share-one-vote, so the document, not the label, is the authority.",
            sourceLessonSlug: "bgov-one-member-one-vote",
          },
          {
            prompt: "A nonprofit corporation has no shareholders and no:",
            options: ["owners", "auditors", "expenses", "meetings"],
            correctIndex: 0,
            explanation: "Nobody holds a claim on its profits; surplus goes back to the mission, so the top of the chain is a purpose, not owners.",
            sourceLessonSlug: "bgov-nonprofit-coop-boards",
          },
          {
            prompt: "A common way a nonprofit board fills its own seats is by being:",
            options: ["state-appointed", "self-perpetuating", "donor-selected", "court-ordered"],
            correctIndex: 1,
            explanation: "In a self-perpetuating board the existing directors elect the new ones; a membership nonprofit instead has members elect them.",
            sourceLessonSlug: "bgov-nonprofit-coop-boards",
          },
          {
            prompt: "A nonprofit director owes fiduciary duties to the organization and its:",
            options: ["donors", "neighbors", "auditors", "mission"],
            correctIndex: 3,
            explanation: "With no owners, directors owe care and loyalty to the mission, with state and tax oversight standing in for shareholders.",
            sourceLessonSlug: "bgov-nonprofit-coop-boards",
          },
          {
            prompt: "A cooperative board is elected by its members on the principle of:",
            options: ["one share one vote", "one member one vote", "board appointment", "founder control"],
            correctIndex: 1,
            explanation: "Members control as equals, so a co-op board answers to them as a democracy, not as an investment.",
            sourceLessonSlug: "bgov-nonprofit-coop-boards",
          },
          {
            prompt: "Across corporation, co-op, and nonprofit, the constant is that the board is bound by:",
            options: ["one share one vote", "a labor union", "a stock exchange", "fiduciary duty"],
            correctIndex: 3,
            explanation: "What changes is who elects the board and on what principle; fiduciary duty binds the board in every case.",
            sourceLessonSlug: "bgov-nonprofit-coop-boards",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The capstone  (read a real structure; say who decides; find the protection)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bgov-capstone",
      title: "19 · Capstone: who actually decides, and where is the protection?",
      section: "Section 5 · Read a governance structure",
      lessonType: "assignment",
      body: `You have the method: governance is decision four, the gap between owning and deciding is bridged by the board, fiduciary duty, and the vote, and different systems set those dials differently. This capstone asks you to **use** the method on a real governance structure, not to give advice.

## The assignment

Pick **one structure** below (or find your own that is just as concrete, using public documents). In **700 to 1,100 words**, answer the course's two questions: **who actually decides**, and **where does a minority owner's (or member's, or stakeholder's) protection come from?** The deliverable is a reading, not a recommendation and not a rating of the organization.

**Read this line twice, because it is the point of the assignment and the rule of the course:** you are not giving legal or financial advice, and you must say so in your piece. You are demonstrating that you can read a governance structure. A real judgment about whether an organization is well run, or a safe investment, goes to a lawyer and a financial professional, and your piece should say that in as many words.

## The structures

1. **A dual-class technology company.** A founder holds a super-voting class of shares and the public holds one-vote shares. Use its charter and proxy statement (public documents) to describe who controls the vote.
2. **A worker or consumer cooperative.** A co-op governed one member one vote, with a member-elected board. Use its bylaws.
3. **A large German stock corporation (AG).** A company with a two-tier board and codetermination. Describe the management board, the supervisory board, and the employee representation, in general terms.
4. **A nonprofit organization.** A charity or foundation with a board of trustees and no shareholders. Describe how the board is filled and to whom it answers.

## What your piece must contain

**1. Name who actually decides, up front.** One or two sentences: who holds the real power to set direction and to hire and fire the people who run this organization. No suspense.

**2. Trace it through the three devices, one at a time.** A short paragraph each:

| Device | What your paragraph must answer |
|---|---|
| **The board** | Who elects it, is it independent or captured, and does it oversee or operate? |
| **The vote** | Does a vote follow shares, follow members, or (nonprofit) not exist for owners at all? Who wins a vote? |
| **Fiduciary duty** | Who are the fiduciaries here, and to whom do they owe their duties of care and loyalty? |

**3. Locate the minority's protection.** This is the heart of the assignment. If you are a small outside shareholder in the dual-class company, a single member in the co-op, an employee under codetermination, or a donor to the nonprofit, **where does your protection actually come from?** Name it specifically: the vote (and how much it is worth here), fiduciary duty, disclosure, a sunset provision, a supervisory-board seat, state or tax oversight, or the right to exit. Where the honest answer is "the vote gives me little, so my protection rests mostly on fiduciary duty and disclosure," say exactly that.

**4. Point at the primary source.** Say which document you would actually read to confirm this (the charter, the bylaws, the proxy statement, the annual report, the tax filing), because governance ideal types are universal but the real rules live in the documents.

**5. State the limit.** One clear sentence that your piece is a reading exercise, not legal or financial advice, and that a real judgment belongs with a licensed professional.

## Rules you do not get to break

1. **No invented specifics.** Do not assert a company's exact voting ratio, a statute section, or a case holding from memory. If your argument needs a specific value, say "I would confirm this in the charter" instead of asserting it. This is the course's rule and the professional habit.
2. **Answer both questions, every time.** Who decides, and where the minority's protection comes from. A piece that names the decider but never locates the protection is half done.
3. **Trace through the three devices.** Board, vote, fiduciary duty. If a claim about who decides does not touch one of the three, ask why it is there.
4. **Say it is not advice.** Not as a buried disclaimer, but as the frame: you are reading a structure, not steering a person.
5. **Where the honest answer is "it depends on the documents I would have to read," say that.** That is a professional sentence, not an evasion.

## What good looks like

A short piece in which a reader who never took this course could, from your paragraphs alone, say who holds power in the organization and what stands between a minority participant and being ignored or exploited, and in which you never once pretend to know a specific value you would actually have to look up. **You are not proving the organization is good or bad. You are proving you can read who actually decides, and that is the whole course.**

## Sources
- Organisation for Economic Co-operation and Development. (2023). *G20/OECD Principles of Corporate Governance 2023*. OECD Publishing.
- Legal Information Institute. (n.d.). *Fiduciary duty*. Cornell Law School. https://www.law.cornell.edu/wex/fiduciary_duty
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov*. https://www.investor.gov`,
    },
  ],
};
