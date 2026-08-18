// Authored "Cooperatives" — course 3 of the "How a Business Is Formed" learning path (plans/46,
// Path B, course 3). A cited, high-school-and-up course on Learn.WitUS.
//
// WHY THIS COURSE EXISTS (the structural argument, from plans/46)
// --------------------------------------------------------------
// "What a Business Entity Actually Is" (course 1) taught that any entity is a bundle of FOUR
// decisions: liability, taxation, ownership and transfer, and governance. It named the single line
// that separates a cooperative from an ordinary corporation and then handed it forward: ONE SHARE
// ONE VOTE versus ONE MEMBER ONE VOTE. "Financing Without Access" (course 4) ran one member, one
// vote through its whole account of mutual aid, and it deliberately did NOT teach the credit union,
// naming it as "the building and loan's sibling" and handing it to THIS course. So this course owns
// two inheritances: it is the general theory of member ownership that course 1 pointed at, and it is
// the home of the credit union that course 4 refused to teach twice.
//
// The organising claim, stated in lesson 1 and tested to the capstone: a cooperative answers the
// ownership-and-governance decisions with ONE MEMBER, ONE VOTE, which makes capital the servant and
// the members (as users, not investors) the masters. Everything else (patronage dividends, the
// member-capital problem, demutualisation) follows from that one answer.
//
// THE HARD RULES, which are the ethical spine of the file
// -------------------------------------------------------
//   * NOT LEGAL, TAX OR FINANCIAL ADVICE. Stated plainly in lesson 1 and wherever the stakes rise
//     (credit unions, patronage, member capital, demutualisation, the capstone).
//   * EVERY factual claim ties to a REAL, verifiable source: APA 7 in-line plus a `## Sources` block
//     per lesson. No invented dates, statistics, characters or quotations. Membership totals and a
//     specific co-op's numbers are kept CONCEPTUAL where a verified figure was not to hand.
//   * Where accounts DISAGREE, the disagreement is taught, not smoothed: the Rochdale founder count
//     (traditionally 28), whether Rochdale was the "first" co-op (it was not, but its principles
//     endured), the Desjardins Levis date (1900 vs 1901), the St. Mary's Bank date (1908 vs 1909),
//     and the live debate over whether Mondragon still lives up to its own ideals.
//
// House rule: NO em-dashes or en-dashes in prose. Number ranges use a plain hyphen. Verbatim cited
// titles in a `## Sources` block are the only place a dash could survive, and none here carry one.

import type { AuthoredCourse } from "./authored-course";

export const COOPERATIVES_COURSE: AuthoredCourse = {
  title: "Cooperatives",
  description:
    "A cited, high-school-and-up course on the business form most people have used without ever reading: the cooperative. It is not legal, tax or financial advice, and it says so throughout. The organizing idea is one line, and the whole course is a consequence of it: a cooperative answers the ownership and governance questions with ONE MEMBER, ONE VOTE, not one share, one vote, which makes capital the servant of the members rather than their master. You will read the co-op against the four decisions from course 1 (liability, taxation, ownership and transfer, governance), then meet the Rochdale Pioneers who opened a store in 1844 and left behind the principles the world still uses, codified today as the seven cooperative principles of the International Co-operative Alliance. You will learn the five main types, worker, consumer, producer, housing and purchasing, and then study three worked cases that prove the form is not a curiosity: Mondragon, one of the largest worker cooperatives in the world, and the honest debate about whether it still lives up to its ideals; the rural electric cooperatives that, under the Rural Electrification Act of 1936, brought power to an America the private utilities would not serve; and the credit union, a financial cooperative built under the Federal Credit Union Act of 1934 that a large share of Americans belong to without thinking of it as a co-op at all. The last section takes on the money and governance question head on: how a co-op shares surplus through patronage dividends, why raising member capital is its hardest problem, and how the whole structure can be reversed through demutualization, the same move the building societies made in the financing course. The capstone asks you to design a cooperative for a real scenario and defend its member governance against a plain corporation, in the language of the four decisions. Where accounts disagree, this course teaches the disagreement rather than smoothing it over.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · What a cooperative is  (the four decisions, and the one-member-one-vote answer)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "coop-what-this-is",
      title: "1 · What a cooperative is, and the rule this course runs on",
      section: "Section 1 · What a cooperative is",
      body: `You have almost certainly done business with a cooperative this month. If you bank at a credit union, buy from a farm brand owned by its growers, get your electricity from a rural power line, or shop at an outdoor store that calls you a member, you have used one. **Yet most people could not say what makes a cooperative different from an ordinary company**, and the difference is not soft or cultural. It is a hard structural choice, and this course is about reading it.

## The one rule, stated first because it governs everything after it

**This course is not legal, tax or financial advice, and it cannot be.** It describes how cooperatives are built and how to read them. It does not tell you to join one, start one, invest in one, or arrange your affairs around one. Some of what follows (member capital that is committed rather than liquid, for instance) carries **real financial consequences**, and the course will say so plainly when it reaches them. When a real decision is on the line, you take it to a licensed professional.

Because of that rule, this course also refuses to invent. It names no statute section from memory, quotes no membership total it cannot source, and makes up no citation. Where a figure is not verified, it teaches the concept without a number. Where the record disagrees with itself, it reports the disagreement.

## The idea this whole course is built on

Here it is in one sentence, and everything else is a consequence of it.

**A cooperative is a business owned and controlled by the people who use it, and it counts votes by members, not by shares: one member, one vote.**

That single choice is the whole subject. In an ordinary corporation, votes follow capital: own more shares, control more of the company (**one share, one vote**). In a cooperative, votes follow membership: each member gets **one vote**, no matter how much money they put in. **Capital is the servant, not the master.** The people the business serves are the people who own it and the people who decide, and those three groups are the same group.

## Where you have already met this, if you took the earlier courses

**Course 1, *What a Business Entity Actually Is*, gave you the tool.** It taught that any entity is a bundle of **four decisions**: who pays the debts (liability), who pays the tax (taxation), who owns it and how ownership moves (ownership and transfer), and who gets to decide (governance). It then pointed straight at this course: "one share one vote versus one member one vote" is **pure decision four**, and it said the cooperatives course is built on it. This is that course.

**Course 4, *Financing Without Access*, ran the same idea underneath its whole account.** The friendly societies, fraternal orders and building and loans it studied were **member-owned, one-member-one-vote mutuals**, chosen because there was no outside owner willing to invest. That course named the credit union as "the building and loan's sibling" and deliberately handed it here rather than teaching it twice. **So this course inherits the credit union**, and you will meet it in Section 3.

## Why "one member, one vote" is not a slogan

It has consequences you can predict before you read another word:

| Because a co-op runs on one member one vote... | ...this follows |
|---|---|
| Votes cannot be bought | No one can take control by buying up shares |
| Owners are the users | The business is run for member benefit, not outside profit |
| Capital gets a limited return | Surplus goes back to members by use, not to investors by stake |
| Outside investors get no control | Raising large capital is genuinely harder (Section 4) |

**Read that table as a set of trade-offs, not a set of virtues.** The co-op form buys democratic control and member benefit, and it pays for them in a harder time raising money and a slower way of deciding. This course teaches both halves.

## What you will do, section by section

| Section | What you learn to do |
|---|---|
| **1. The concept** | Read a co-op against the four decisions, with one member one vote as the answer |
| **2. Principles and types** | The Rochdale Pioneers, the seven principles, and the five main co-op types |
| **3. Worked cases** | Mondragon, rural electric co-ops, and the credit union |
| **4. Money and governance** | Patronage dividends, member capital, and demutualization risk |
| **5. The capstone** | Design a co-op for a scenario and defend its member governance against a corporation |

**One more time, because it is the rule:** this is a course about how to read a business form, not advice about your money or your business. Keep a professional in the picture for anything real.

## Sources
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity
- NCBA CLUSA. (n.d.). *7 cooperative principles*. https://ncbaclusa.coop/resources/7-cooperative-principles/`,
    },
    {
      slug: "coop-one-member-one-vote",
      title: "2 · One member, one vote, and the dual identity of a member",
      section: "Section 1 · What a cooperative is",
      body: `Lesson 1 gave you the one idea. This lesson takes it apart slowly, because it hides a second idea inside it that people miss, and the second idea is what actually makes a cooperative behave the way it does.

## One share one vote versus one member one vote

Set the two rules side by side, because the contrast is the definition:

| | Ordinary corporation | Cooperative |
|---|---|---|
| **How votes are counted** | One share, one vote | One member, one vote |
| **What controls the business** | Capital: more money, more say | People: one member, one say |
| **Who the owners are** | Investors seeking a return | Users of the business |
| **Who the surplus goes to** | Shareholders, by size of stake | Members, by their use of the co-op |

**In a corporation, a person who buys half the shares controls half the company.** In a cooperative, a person who buys ten times the average member's stake still gets exactly one vote. **You cannot buy control of a co-op.** That is not an accident or a nicety; it is the load-bearing structural fact, and every other feature of the form follows from it.

## The second idea: a member wears two hats at once

Here is the part people miss. In a corporation, the owner and the customer are usually **different people**: shareholders in one place, customers in another, and the company's job is to take money from the customers and return profit to the shareholders. **In a cooperative, the owner and the user are the same person.** A member of a credit union is both an owner of the credit union and a borrower or saver at it. A member of a farm co-op both owns it and sells crops through it. A member of a consumer co-op both owns the store and shops at it.

**This dual identity is why a co-op is run for member benefit rather than for outside profit.** There is no separate group of investors to satisfy, because the members are the investors, and what the members want is not a dividend on capital but a good deal as users: fair prices, a fair market for their crop, a loan they can get, a service that exists at all. **The co-op does not maximize profit extracted from its users, because its users own it.** That single sentence explains most of what co-ops do differently.

## What this does to "profit"

A cooperative can and often does run a surplus (it takes in more than it spends). But because the members are the users, **that surplus is money the members overpaid or underearned in the first place**, so returning it to them is not a dividend on investment. It is a **refund on use**. You will meet this in Section 4 as the **patronage dividend**, and it is the direct descendant of the very first thing the Rochdale Pioneers did in 1844. Hold the idea now: **in a co-op, the surplus belongs to the members as users, in proportion to how much they used the co-op, not in proportion to how much they invested.**

## Reading the two decisions this settles

Run the co-op through the two decisions it answers most distinctively:

- **Ownership and transfer (decision 3).** Members own it, usually through a membership share that is not a tradeable stock. You **join** a co-op; you do not buy your way to control of it, and you usually cannot sell your membership to an outsider the way you would sell shares. Ownership is tied to use, not to a market in stock.
- **Governance (decision 4).** Members control it, **one vote each**, typically by electing a board from among themselves. Big co-ops delegate day-to-day running to managers, exactly as a corporation delegates to officers, but the ultimate control stays one-member-one-vote and cannot be bought away.

**Notice that the co-op's distinctiveness lives in decisions 3 and 4.** On liability and taxation it can look much like other forms, which is the next lesson. **The co-op is not a different animal on all four decisions. It is a specific, deliberate answer on ownership and governance**, and that is enough to change everything downstream. None of this is advice about whether a co-op is right for anything you are doing; it is how the form is built.

## Sources
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity
- Birchall, J. (2011). *People-centred businesses: Co-operatives, mutuals and the idea of membership*. Palgrave Macmillan.`,
      recallContent: [
        {
          prompt: "State the one idea this whole course is built on.",
          answer: "A cooperative is a business owned and controlled by the people who use it, and it counts votes by members, not by shares: one member, one vote. Capital is the servant, not the master.",
        },
        {
          prompt: "Is this course legal, tax or financial advice, and what does it give you instead?",
          answer: "No. It is not legal, tax or financial advice. It describes how cooperatives are built and how to read them, and it sends you to a licensed professional for any real decision.",
        },
        {
          prompt: "How do the two earlier courses in the path connect to this one?",
          answer: "Course 1, What a Business Entity Actually Is, supplies the four decisions and pointed at this course as pure decision four (one share vote versus one member vote). Course 4, Financing Without Access, ran one member one vote through its mutuals and handed the credit union to this course.",
        },
        {
          prompt: "Name two consequences that follow from one member, one vote.",
          answer: "Any two: control cannot be bought by buying shares; the owners are the users, so the business is run for member benefit not outside profit; capital gets a limited return with surplus going back by use; and raising large outside capital is genuinely harder.",
        },
      ],
    },
    {
      slug: "coop-four-decisions",
      title: "3 · The co-op read against all four decisions",
      section: "Section 1 · What a cooperative is",
      body: `You know the co-op's distinctive answer lives in ownership and governance. Now run it through **all four** decisions from course 1, because a reader who only knows the famous half will misread the form. The full picture is what lets you place a co-op you have never seen.

## The co-op against the four

| Decision | The cooperative's usual answer |
|---|---|
| **Liability** | Usually limited. Most incorporated co-ops are separate legal persons with a wall, like an LLC or a corporation |
| **Taxation** | Often a special category. Surplus returned to members as patronage is frequently taxed to the members, not the co-op, but the rules are jurisdiction-specific |
| **Ownership and transfer** | The members own it, through membership shares tied to use, not tradeable stock |
| **Governance** | The members control it, one member one vote, usually electing a board from among themselves |

**Read the top two rows carefully, because they are where beginners over-claim.** People assume a cooperative must be an informal, unincorporated, high-risk arrangement. **It usually is not.** A modern co-op is typically **incorporated under a specific cooperative statute**, which gives it a liability wall just like other incorporated forms. The co-op difference is not "no legal protection." The co-op difference is who owns and who votes.

## Liability: usually a wall, for the same reason other forms have one

An incorporated cooperative is a **separate legal person**, so its debts are generally the co-op's debts, not the personal debts of the members, subject to the same gaps every liability wall has (personal guarantees, a member's own wrongful acts, treating the entity as a sham). This is the same wall course 1 taught, reached through a cooperative statute instead of an LLC or corporation statute. **Do not assume a co-op member is personally on the hook just because the co-op is member-owned.** Whether they are is a legal question that depends on the statute and the facts, and it goes to a lawyer.

## Taxation: distinctive, and exactly the kind of thing this course will not assert from memory

Cooperatives are frequently taxed under **special rules** built around the patronage idea: broadly, surplus that is returned to members in proportion to their use can be treated as belonging to the members and taxed to them rather than to the co-op, which avoids taxing the same money twice. **But the specifics (which co-ops qualify, on what conditions, in which country and under which section) are tax rules that change**, and asserting one from memory would break this course's rule. What matters for the method is the shape: **the co-op's tax treatment follows from patronage, and patronage follows from members being users.** For the actual rules, a co-op talks to an accountant, and so does this course's reader.

## Ownership and transfer, and governance: the half you already know

- **Ownership** sits with the members, usually through a **membership share** that is a ticket to belong rather than a unit of stock to trade. Its value does not usually float on a market, an outsider cannot usually buy it to gain control, and it is tied to use.
- **Governance** is **one member, one vote**, typically exercised by electing a board of directors from the membership. Large co-ops delegate operations to hired managers, so a co-op can be professionally run and still be member-controlled, because the board the managers answer to is elected one-member-one-vote.

## Why the full read matters

Handed any organization that calls itself a co-op, run the four:

1. **Liability.** Is it incorporated under a co-op statute (usually a wall) or an informal arrangement (maybe not)?
2. **Taxation.** Is surplus returned to members by patronage, and taxed to whom? (Then send the specifics to a professional.)
3. **Ownership and transfer.** Is ownership a membership tied to use, or has it quietly become tradeable stock? (If it has, ask whether it is still really a co-op.)
4. **Governance.** One member one vote, or has voting drifted toward one share one vote?

**That last parenthetical in questions 3 and 4 is a real test**, not a formality. An organization can wear the word "co-op" and have quietly become something else, and Section 4's lesson on demutualization is exactly that story. The four decisions are how you check whether the label still fits. And, as always, reading the form is not advice about using it.

## Sources
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity
- NCBA CLUSA. (n.d.). *7 cooperative principles*. https://ncbaclusa.coop/resources/7-cooperative-principles/
- Birchall, J. (2011). *People-centred businesses: Co-operatives, mutuals and the idea of membership*. Palgrave Macmillan.`,
      recallContent: [
        {
          prompt: "What is the difference between one share one vote and one member one vote, and which controls each form?",
          answer: "One share one vote lets capital control a corporation: more shares, more say. One member one vote lets people control a cooperative: each member gets one vote regardless of how much they put in, so control cannot be bought.",
        },
        {
          prompt: "What is the dual identity of a co-op member, and why does it matter?",
          answer: "A member is both an owner of the co-op and a user of it (a saver at the credit union, a seller through the farm co-op, a shopper at the store). Because owner and user are the same person, the co-op is run for member benefit rather than for outside profit.",
        },
        {
          prompt: "In a co-op, who does a surplus belong to, and on what basis?",
          answer: "The members, as users, in proportion to how much they used the co-op, not in proportion to how much they invested. Returning it is a refund on use (a patronage dividend), not a dividend on capital.",
        },
        {
          prompt: "Which two of the four decisions carry the co-op's distinctiveness, and which two can look ordinary?",
          answer: "Ownership and transfer, and governance, carry the distinctiveness (members own it, one member one vote). Liability and taxation can look much like other forms: an incorporated co-op usually has a liability wall.",
        },
      ],
    },
    {
      slug: "coop-quiz-what-a-coop-is",
      title: "4 · Quiz: what a cooperative is",
      section: "Section 1 · What a cooperative is",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The single idea this whole course is built on is that a co-op:",
            options: [
              "pays the highest dividend",
              "avoids all taxon profit",
              "counts votes by members",
              "never files with a state",
            ],
            correctIndex: 2,
            explanation: "A cooperative is owned and controlled by the people who use it and votes one member, one vote, so capital is the servant, not the master.",
            sourceLessonSlug: "coop-what-this-is",
          },
          {
            prompt: "This course states plainly that it is NOT:",
            options: [
              "about real co-ops",
              "legal or money advice",
              "based on any sources",
              "meant for beginners",
            ],
            correctIndex: 1,
            explanation: "It is not legal, tax or financial advice; it describes how co-ops are built and sends a real decision to a licensed professional.",
            sourceLessonSlug: "coop-what-this-is",
          },
          {
            prompt: "In an ordinary corporation, votes follow:",
            options: ["the members", "the shares", "the workers", "the board"],
            correctIndex: 1,
            explanation: "One share, one vote: capital controls, so a person who buys more shares controls more of the company.",
            sourceLessonSlug: "coop-one-member-one-vote",
          },
          {
            prompt: "Which course handed the credit union to this one to teach?",
            options: [
              "Financing Without Access",
              "What They Built district",
              "The US Forms overview",
              "How Countries Form firms",
            ],
            correctIndex: 0,
            explanation: "Financing Without Access named the credit union the building and loan's sibling and passed it here rather than teaching it twice.",
            sourceLessonSlug: "coop-what-this-is",
          },
          {
            prompt: "You cannot take control of a cooperative by:",
            options: [
              "joining as a member",
              "using its services",
              "buying up its shares",
              "running for its board",
            ],
            correctIndex: 2,
            explanation: "Votes follow members, not shares, so buying a larger stake still gets exactly one vote. Control cannot be bought.",
            sourceLessonSlug: "coop-one-member-one-vote",
          },
          {
            prompt: "The 'dual identity' of a co-op member means the member is both:",
            options: [
              "a worker and a boss",
              "an owner and a user",
              "a buyer and a seller",
              "a voter and a guest",
            ],
            correctIndex: 1,
            explanation: "The owner and the user are the same person, which is why the co-op is run for member benefit rather than outside profit.",
            sourceLessonSlug: "coop-one-member-one-vote",
          },
          {
            prompt: "In a co-op, a surplus is returned to members in proportion to their:",
            options: ["use of the co-op", "money invested", "years enrolled", "hours worked"],
            correctIndex: 0,
            explanation: "The surplus is money members overpaid or underearned as users, so it comes back as a refund on use (patronage), not a dividend on capital.",
            sourceLessonSlug: "coop-one-member-one-vote",
          },
          {
            prompt: "A member usually owns a co-op through a membership share that is:",
            options: [
              "traded on a market",
              "sold to outsiders",
              "worth the most votes",
              "tied to use, not stock",
            ],
            correctIndex: 3,
            explanation: "You join a co-op; the share is a ticket to belong tied to use, not a tradeable unit of stock that carries control.",
            sourceLessonSlug: "coop-one-member-one-vote",
          },
          {
            prompt: "On liability, a modern incorporated cooperative usually has:",
            options: [
              "a liability wall",
              "no legal person",
              "unlimited member risk",
              "a federal charter",
            ],
            correctIndex: 0,
            explanation: "Most co-ops are incorporated under a cooperative statute, making them a separate legal person with a wall, like an LLC or corporation.",
            sourceLessonSlug: "coop-four-decisions",
          },
          {
            prompt: "The biggest over-claim beginners make about a co-op is that it must be:",
            options: [
              "run for its members",
              "an informal, unwalled setup",
              "voting one member one vote",
              "owned by its own users",
            ],
            correctIndex: 1,
            explanation: "People assume a co-op is informal and high-risk; usually it is incorporated under a co-op statute with a liability wall.",
            sourceLessonSlug: "coop-four-decisions",
          },
          {
            prompt: "Why does this course refuse to state a co-op's exact tax rule?",
            options: [
              "The rules never matter",
              "Co-ops pay no tax at all",
              "They change, so it asks a pro",
              "Only lawyers may read them",
            ],
            correctIndex: 2,
            explanation: "Tax specifics are jurisdiction-bound and change; the course teaches the shape (patronage) and sends the rules to an accountant.",
            sourceLessonSlug: "coop-four-decisions",
          },
          {
            prompt: "A co-op's tax treatment is built around the idea of:",
            options: ["patronage", "dividends", "franchising", "depreciation"],
            correctIndex: 0,
            explanation: "Surplus returned by patronage can be treated as belonging to the members and taxed to them, which follows from members being users.",
            sourceLessonSlug: "coop-four-decisions",
          },
          {
            prompt: "The co-op's distinctiveness lives mainly in which two decisions?",
            options: [
              "liability and taxation",
              "taxation and transfer",
              "liability and governance",
              "ownership and governance",
            ],
            correctIndex: 3,
            explanation: "Members own it and vote one member one vote; on liability and taxation a co-op can look much like other forms.",
            sourceLessonSlug: "coop-four-decisions",
          },
          {
            prompt: "Reading the four decisions on a self-described 'co-op' can reveal that it has:",
            options: [
              "quietly become other",
              "the best possible prices",
              "too many active members",
              "a very large surplus",
            ],
            correctIndex: 0,
            explanation: "If ownership has become tradeable stock or voting has drifted to one share one vote, the label may no longer fit; the four decisions are the test.",
            sourceLessonSlug: "coop-four-decisions",
          },
          {
            prompt: "A large co-op can be professionally run and still member-controlled because:",
            options: [
              "managers own the shares",
              "the board is elected by members",
              "members never vote at all",
              "the state runs the co-op",
            ],
            correctIndex: 1,
            explanation: "Day-to-day running is delegated to hired managers, but they answer to a board the members elect one member, one vote.",
            sourceLessonSlug: "coop-four-decisions",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The Rochdale Principles and the co-op types
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "coop-rochdale",
      title: "5 · The Rochdale Pioneers and where the principles came from",
      section: "Section 2 · Principles and types",
      body: `The modern cooperative movement has a founding story, and it is a real one, in a real place, on a real date. Getting it right (including the parts that are contested) is how you understand what the principles are actually for.

## Toad Lane, 1844

**On 21 December 1844, a group of working people in Rochdale, in the north of England, opened a small store at 31 Toad Lane** (Encyclopaedia Britannica, n.d.). They were the **Rochdale Society of Equitable Pioneers**, and they were mostly weavers and other tradesmen squeezed by low wages and by shops that sold adulterated goods on credit at high prices. They pooled small amounts of capital, opened a shop stocked at first with a few staples (butter, sugar, flour, oatmeal), and sold to themselves and their neighbors.

**The founder count is traditionally given as 28**, and you will see that number everywhere, but treat it as the traditional figure rather than a precise headcount, because accounts of exactly who counted as a founder vary (Encyclopaedia Britannica, n.d.). This course carries the figure with its owner: **traditionally 28**, not "exactly 28 and no argument."

## The one move that changed everything: the dividend on purchases

Plenty of shops have opened. What made Rochdale the seed of a worldwide movement was **how they handled the surplus.** Instead of keeping the store's profit or paying it out on invested capital, **they returned it to members in proportion to how much each had bought**, a payment that became famous as the **dividend on purchases**, or in the members' own word, the **"divi"** (Fairbairn, 1994).

**Read that against Section 1 and it is the patronage dividend, invented.** The surplus went back to members **as users, by their use**, not to investors by their stake. That is one member, one vote's economic twin: if the members own and control the business as people, then the surplus belongs to them as users, and Rochdale is where that idea took a durable, copyable form.

## They were not the first, and saying so is the honest version

Here is a place the tidy story oversells, and this course will not. **The Rochdale Pioneers were not the first cooperative.** Earlier consumer and worker cooperatives existed (the Fenwick Weavers' Society in Scotland is often dated to 1769, and the manufacturer and reformer Robert Owen had promoted cooperative communities decades before Rochdale), and many early co-ops had opened and then failed (Birchall, 1997). **What Rochdale did that lasted was write down a set of working rules that other societies could copy and that actually held up in practice.** The Pioneers' importance is not "they were first." It is "their principles endured," and confusing the two is a common mistake worth avoiding.

## The original Rochdale rules

The practices the Pioneers followed, refined over their first years, became known as the **Rochdale Principles.** In their early form they included, among others (Fairbairn, 1994):

| Rochdale practice | What it meant |
|---|---|
| **Open membership** | Anyone could join, not a closed club |
| **Democratic control** | One member, one vote, regardless of stake |
| **Dividend on purchases** | Surplus returned by how much you bought, not by capital |
| **Limited return on capital** | Money invested earned a fixed, modest interest, no more |
| **Cash trading** | Sell for cash, avoid the debt trap that ruined poor families |
| **Political and religious neutrality** | The society did not take sides, so anyone could belong |
| **Promotion of education** | Set aside funds to educate members |

**Notice how many of these are the four decisions in plain clothes.** Democratic control is governance. Open membership and the dividend on purchases are ownership tied to use. Limited return on capital is the deliberate demotion of the investor. **The Pioneers were answering the same four questions this whole path is built on**, and they answered ownership and governance the co-op way.

## Why the shape held

The Rochdale rules spread because they were **practical, not just principled.** Cash trading kept societies solvent; the dividend gave members a concrete reason to stay loyal and to bring their custom; open membership kept the pool growing; democratic control kept any faction from capturing the store. **A set of rules that keeps a member-owned business alive is worth more than a set of noble sentiments that lets one fail**, and that is why the world copied Rochdale rather than the co-ops that came before it. The next lesson follows those rules to the form they take today. None of this is advice; it is where the model came from.

## Sources
- Encyclopaedia Britannica. (n.d.). *Rochdale Equitable Pioneers Society*. https://www.britannica.com/topic/Rochdale-Equitable-Pioneers-Society
- Fairbairn, B. (1994). *The meaning of Rochdale: The Rochdale Pioneers and the co-operative principles*. Centre for the Study of Co-operatives, University of Saskatchewan.
- Birchall, J. (1997). *The international co-operative movement*. Manchester University Press.`,
      recallContent: [
        {
          prompt: "Run any self-described co-op through the four decisions. What does each ask?",
          answer: "Liability: incorporated under a co-op statute (a wall) or informal (maybe not)? Taxation: is surplus returned by patronage, and taxed to whom? Ownership and transfer: is ownership a membership tied to use, or tradeable stock? Governance: one member one vote, or drifting to one share one vote?",
        },
        {
          prompt: "Why should you not assume a co-op member is personally on the hook for the co-op's debts?",
          answer: "Most co-ops are incorporated under a cooperative statute, which makes the co-op a separate legal person with a liability wall, subject to the same gaps as any wall. Whether a member is personally liable is a legal question for a lawyer.",
        },
        {
          prompt: "Why does this course not state a co-op's exact tax rule?",
          answer: "Because the specifics (which co-ops qualify, on what conditions, in which country and section) are tax rules that change, and asserting one from memory would break the course's rule. It teaches the shape (patronage) and sends the rules to an accountant.",
        },
        {
          prompt: "What real test hides in the ownership and governance questions when reading a co-op?",
          answer: "Whether the label still fits. An organization can call itself a co-op while ownership has quietly become tradeable stock or voting has drifted to one share one vote. The four decisions are how you check, and demutualization is exactly that story.",
        },
      ],
    },
    {
      slug: "coop-seven-principles",
      title: "6 · The seven cooperative principles",
      section: "Section 2 · Principles and types",
      body: `The Rochdale rules did not stay a local list. They were carried worldwide, debated, and eventually codified into a formal international standard. Today that standard is the **seven cooperative principles**, and knowing them lets you check any organization's claim to be a co-op against a definition, not a vibe.

## Where the seven come from

The **International Co-operative Alliance (ICA)**, founded in 1895, is the global federation of cooperatives. In 1995, at its congress in Manchester, England, the ICA adopted the **Statement on the Cooperative Identity**, which for the first time set out, together, a formal definition of a cooperative, its shared values, and **seven guiding principles** descended directly from the Rochdale rules (International Co-operative Alliance, n.d.). **These seven are the modern, official form of what the Pioneers wrote down**, and they are the reference this course means whenever it says "the principles."

## The seven principles

| # | Principle | What it commits a co-op to |
|---|---|---|
| **1** | **Voluntary and open membership** | Open to all who can use it and accept the responsibilities, without discrimination |
| **2** | **Democratic member control** | Members control it, and in a primary co-op that means one member, one vote |
| **3** | **Member economic participation** | Members contribute capital and control it democratically; surplus is used for the co-op and returned by patronage, with limited return on capital |
| **4** | **Autonomy and independence** | The co-op stays a self-governing, member-controlled body, even when it deals with outsiders or raises outside money |
| **5** | **Education, training and information** | The co-op educates members, staff and the public about cooperation |
| **6** | **Cooperation among cooperatives** | Co-ops work together through local, national and international structures |
| **7** | **Concern for community** | The co-op works for the sustainable development of its community |

**Principle 2 is the one member, one vote from Section 1, stated as a rule the world signed up to.** Principle 3 is the dividend on purchases and the limited return on capital from Rochdale, generalised. **The seven are not new. They are the Rochdale rules, tested for 150 years and written for every kind of co-op**, not just a shop.

## The one that was added, and why it tells you something

The seventh principle, **concern for community**, was **added in the 1995 revision** (International Co-operative Alliance, n.d.). That is worth pausing on, because it shows the principles are a **living standard, revised over time**, not stone tablets. A movement that adds a principle is a movement deciding, at a moment in its history, that something had been left implicit and should be made explicit. **Treat the seven as the current settled version of a document that has changed before and could change again**, which is the same reframing course 1 made about the LLC and course 4 made about the mutual form: these structures are chosen and revisable, not natural law.

## How to use the seven as a test

The principles turn "is this really a co-op?" from an opinion into a checklist. Ask:

1. **Can anyone eligible join** (principle 1), or is membership rigged to keep control in a few hands?
2. **Is control one member one vote** (principle 2), or has it drifted toward one share one vote?
3. **Does surplus come back by patronage with limited return on capital** (principle 3), or does it flow to investors by stake?
4. **Is the co-op still self-governing** (principle 4), or has an outside funder taken effective control?

**If an organization fails principles 1 through 4, calling it a co-op is a stretch**, whatever its name says. Principles 5, 6 and 7 are about how a genuine co-op behaves in the world; principles 1 through 4 are the structural core that the four decisions from course 1 test directly. **The seven principles and the four decisions are two views of the same object**, and a reader who holds both can check a claim from either side. This is a definition to read with, not advice to act on.

## Sources
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity
- NCBA CLUSA. (n.d.). *7 cooperative principles*. https://ncbaclusa.coop/resources/7-cooperative-principles/`,
      recallContent: [
        {
          prompt: "What happened at Toad Lane in 1844, and who were the people involved?",
          answer: "On 21 December 1844 the Rochdale Society of Equitable Pioneers, mostly weavers and tradesmen squeezed by low wages and high-priced adulterated goods, opened a small store at 31 Toad Lane in Rochdale, England, pooling small capital to sell staples to themselves and their neighbors.",
        },
        {
          prompt: "What was the dividend on purchases, and why was it the move that mattered?",
          answer: "Instead of keeping profit or paying it on invested capital, the Pioneers returned surplus to members in proportion to how much each had bought (the divi). It is the patronage dividend invented: surplus back to members as users, by use, which is one member one vote's economic twin.",
        },
        {
          prompt: "Were the Rochdale Pioneers the first cooperative, and what were they actually first at?",
          answer: "No. Earlier co-ops existed (the Fenwick Weavers' Society is often dated to 1769, and Robert Owen promoted cooperative communities earlier), and many had failed. Rochdale's importance is that it wrote down working rules that others could copy and that held up in practice.",
        },
        {
          prompt: "How do the original Rochdale rules map onto the four decisions?",
          answer: "Democratic control is governance (one member one vote); open membership and the dividend on purchases are ownership tied to use; limited return on capital is the deliberate demotion of the investor. The Pioneers answered the same four questions the co-op way.",
        },
      ],
    },
    {
      slug: "coop-types-worker-consumer",
      title: "7 · Worker and consumer cooperatives",
      section: "Section 2 · Principles and types",
      body: `One member, one vote is the constant. **What changes from one kind of co-op to the next is who the members are**, and that single variable produces the five main types. This lesson covers the first two, and the trick to keeping them straight is to ask, every time: **who uses this co-op, and therefore who owns and votes in it?**

## The organizing question: who are the members?

| Type | The members are... | So they own and control it as... |
|---|---|---|
| **Worker co-op** | The people who work there | Employees who own their own jobs |
| **Consumer co-op** | The people who buy from it | Customers who own the store they shop at |
| **Producer co-op** | The producers who supply it | Independent producers who own their shared processor or marketer |
| **Housing co-op** | The people who live there | Residents who own the entity that owns the housing |
| **Purchasing co-op** | The businesses that buy through it | Independent firms who own their shared buying power |

**Read down the middle column: worker, consumer, producer, housing, purchasing.** The type is just the answer to "who are the members," and once you know that, one member one vote tells you who votes and patronage tells you how surplus comes back. This lesson takes the first two.

## Worker cooperatives: the workers are the members

**In a worker cooperative, the members are the employees.** The people who do the work own the business and control it one member, one vote, and they elect the board that hires and directs management. **The dual identity from Section 1 here is worker and owner**: the same people who earn wages also share the surplus and cast the votes.

Run it against the four decisions:

- **Ownership and transfer:** owned by the workers, usually through a membership that comes with the job and cannot be sold to an outsider. You become an owner by being hired and accepted as a member, not by buying in from the market.
- **Governance:** one worker, one vote. Management is usually hired and delegated to, but it answers to a worker-elected board.
- **Patronage:** surplus is typically shared among worker-members by their labor (for example by hours worked or pay), because **their "use" of the co-op is their work.**

**The point a worker co-op proves** is that a firm does not have to separate the people who do the work from the people who own it. Most companies put labor on one side and capital on the other; a worker co-op puts them in the same hands. The largest and most studied example, Mondragon, gets its own lesson in Section 3.

## Consumer cooperatives: the customers are the members

**In a consumer cooperative, the members are the customers.** The people who buy from the business own it and control it one member, one vote. **This is the direct descendant of Rochdale**, which was a consumer co-op: a shop owned by the people who shopped there. Consumer co-ops are common in grocery, food and retail, and in the United States the outdoor retailer REI is a well-known consumer cooperative owned by its member-customers (NCBA CLUSA, n.d.).

Against the four decisions:

- **Ownership and transfer:** owned by the shopping members, usually through a modest membership share you buy once to join, not a tradeable stock. You own the store because you shop there.
- **Governance:** one member, one vote, electing a board; day-to-day retail is run by hired staff.
- **Patronage:** surplus comes back to members by **how much they bought**, exactly the Rochdale divi. The more you shopped, the larger your share of the refund, because the surplus is money you overpaid as a customer.

## Telling the two apart when they blur

Worker and consumer co-ops can sit in the same industry and get confused, so use the members test. **A bakery owned by its bakers is a worker co-op; a grocery owned by its shoppers is a consumer co-op.** If a food store is owned by the staff who run it, it is a worker co-op; if it is owned by the community that buys groceries there, it is a consumer co-op; and some are hybrids that give both groups membership, which is exactly the kind of design question the capstone will ask you to reason through. **The word "co-op" on the sign does not tell you the type. The membership does.** And, as always, naming the type is reading, not advice.

## Sources
- NCBA CLUSA. (n.d.). *7 cooperative principles*. https://ncbaclusa.coop/resources/7-cooperative-principles/
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity
- Birchall, J. (2011). *People-centred businesses: Co-operatives, mutuals and the idea of membership*. Palgrave Macmillan.`,
      recallContent: [
        {
          prompt: "Where do the seven cooperative principles come from, and when were they codified?",
          answer: "They descend from the Rochdale rules. The International Co-operative Alliance, founded in 1895, adopted the Statement on the Cooperative Identity at its 1995 Manchester congress, setting out a definition, shared values, and the seven guiding principles together for the first time.",
        },
        {
          prompt: "Which principle is one member, one vote, and which one is Rochdale's dividend and limited return on capital?",
          answer: "Principle 2, democratic member control, is one member one vote. Principle 3, member economic participation, generalises the dividend on purchases and the limited return on capital: surplus is returned by patronage and capital earns a limited return.",
        },
        {
          prompt: "Which principle was added in 1995, and what does that tell you about the seven?",
          answer: "Concern for community (principle 7) was added in the 1995 revision. It shows the principles are a living standard revised over time, not stone tablets: chosen and revisable, like the LLC and the mutual form in the earlier courses.",
        },
        {
          prompt: "How can the seven principles be used as a test of whether something is really a co-op?",
          answer: "Ask whether anyone eligible can join (1), whether control is one member one vote (2), whether surplus comes back by patronage with limited return on capital (3), and whether it stays self-governing (4). Fail 1 through 4 and calling it a co-op is a stretch.",
        },
      ],
    },
    {
      slug: "coop-types-producer-housing-purchasing",
      title: "8 · Producer, housing, and purchasing cooperatives",
      section: "Section 2 · Principles and types",
      body: `The members test carries you the rest of the way. **These three types confuse people because in each one the members are themselves businesses or households, not individual customers or workers**, but the rule is unchanged: find who uses the co-op, and you have found who owns and votes in it.

## Producer cooperatives: the suppliers are the members

**In a producer cooperative, the members are independent producers who band together to process, market or sell what they make.** The classic case is farming: individual farms stay separate businesses, but they jointly own a cooperative that does the thing no single farm can do alone (process the milk, market the cranberries, run the grain elevator, reach the national buyer). In the United States, farmer-owned brands such as Ocean Spray, a cooperative of cranberry growers, and Land O'Lakes, a dairy cooperative, are well-known producer co-ops (Ocean Spray, n.d.; NCBA CLUSA, n.d.).

**The key to reading a producer co-op is that the members' "use" is selling through it.** Against the four decisions:

- **Ownership and transfer:** owned by the member-producers, typically tied to the volume they deliver, not to tradeable stock.
- **Governance:** one member, one vote in the classic form, though some large agricultural co-ops weight voting by volume delivered, which is a real and contested departure from the pure principle.
- **Patronage:** surplus comes back to members by **how much each delivered or sold through the co-op**, because that is their use.

**A producer co-op does not replace its members' businesses; it pools one function of them.** Each farm still runs itself; the co-op is the shared processor or marketer they all own. That is the opposite of a worker co-op, where the members are inside one firm, and the distinction is worth holding.

## Housing cooperatives: the residents are the members

**In a housing cooperative, the members are the residents, and what they own is not their individual unit but a share in the entity that owns the whole property.** That share gives them the right to occupy a unit and a vote in running the building, one member, one vote. **This is different from a condominium**, where each owner holds title to their own unit outright; in a housing co-op you own a piece of the co-op and hold an occupancy right, not a deed to your specific apartment.

- **Ownership and transfer:** owned collectively through the co-op; a member holds a share plus an occupancy right. Transfer is often restricted (the co-op may approve new members), which keeps the building in the hands of people who will live there rather than absentee investors.
- **Governance:** one member, one vote on the affairs of the building.
- **A design choice worth naming:** some housing co-ops are **limited-equity**, meaning a member can only resell their share for a restricted price, which keeps the housing permanently affordable but caps the member's gain. Others are market-rate. **That single dial, how much a departing member can profit, is a governance-and-ownership decision with large social consequences**, and it is a good example of the four decisions doing real work.

## Purchasing cooperatives: the buyers are the members

**In a purchasing cooperative (also called a shared-services or buying co-op), the members are independent businesses that pool their buying power** to get the wholesale prices, brand and services that only a large buyer can command, while each stays an independent, separately owned business. In the United States, retailer-owned cooperatives such as Ace Hardware, owned by the independent hardware stores that buy through it, are a familiar example (NCBA CLUSA, n.d.).

- **Ownership and transfer:** owned by the member-businesses that buy through it.
- **Governance:** one member, one vote among the member firms.
- **Patronage:** surplus comes back by **how much each member purchased through the co-op.**

**A purchasing co-op is the mirror image of a producer co-op.** A producer co-op pools members' selling; a purchasing co-op pools members' buying. In both, independent businesses own a shared entity that does one job at a scale none of them could reach alone, and in both the surplus returns by use. **Hold the pattern across all five types: the members change, one member one vote does not, and patronage always follows use.** That is the whole taxonomy, and none of it is advice about forming one.

## Sources
- NCBA CLUSA. (n.d.). *7 cooperative principles*. https://ncbaclusa.coop/resources/7-cooperative-principles/
- Ocean Spray. (n.d.). *Ocean Spray (cooperative)*. In *Wikipedia*. Retrieved from https://en.wikipedia.org/wiki/Ocean_Spray_(cooperative)
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity`,
      recallContent: [
        {
          prompt: "What is the organising question that produces the five co-op types?",
          answer: "Who are the members? The type is just the answer to who uses the co-op, and therefore who owns and votes in it: workers, consumers, producers, residents, or buying businesses.",
        },
        {
          prompt: "In a worker co-op, who are the members, and how is surplus typically shared?",
          answer: "The employees are the members: the people who do the work own the business and vote one worker, one vote, electing the board that hires management. Surplus is typically shared by their labor (hours worked or pay), because their use of the co-op is their work.",
        },
        {
          prompt: "How is a consumer co-op the direct descendant of Rochdale, and how does surplus come back?",
          answer: "A consumer co-op is a business owned by the people who buy from it, exactly like the Rochdale shop owned by its shoppers. Surplus comes back to members by how much they bought, which is the Rochdale dividend on purchases.",
        },
        {
          prompt: "How do you tell a worker co-op from a consumer co-op in the same industry?",
          answer: "Use the members test. A bakery owned by its bakers is a worker co-op; a grocery owned by its shoppers is a consumer co-op. The word co-op on the sign does not tell you the type; the membership does. Some are hybrids giving both groups membership.",
        },
      ],
    },
    {
      slug: "coop-quiz-principles-types",
      title: "9 · Quiz: principles and types",
      section: "Section 2 · Principles and types",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The Rochdale Society of Equitable Pioneers opened its store in:",
            options: ["1769", "1844", "1895", "1936"],
            correctIndex: 1,
            explanation: "On 21 December 1844 the Pioneers opened a store at 31 Toad Lane in Rochdale, England, the seed of the modern movement.",
            sourceLessonSlug: "coop-rochdale",
          },
          {
            prompt: "The Rochdale move that made the store the seed of a movement was the:",
            options: [
              "dividend on purchases",
              "sale of tradeable stock",
              "ban on new members",
              "one share, one vote rule",
            ],
            correctIndex: 0,
            explanation: "Surplus was returned to members by how much each had bought (the divi), which is the patronage dividend invented.",
            sourceLessonSlug: "coop-rochdale",
          },
          {
            prompt: "Were the Rochdale Pioneers the first cooperative ever?",
            options: [
              "Yes, none came before",
              "No, but their rules lasted",
              "Yes, in the year 1769",
              "No, and they soon failed",
            ],
            correctIndex: 1,
            explanation: "Earlier co-ops existed and many failed; Rochdale's importance is that it wrote down working rules others could copy and that held up.",
            sourceLessonSlug: "coop-rochdale",
          },
          {
            prompt: "The Rochdale founder count is best described as:",
            options: [
              "exactly 28, undisputed",
              "unknown to any record",
              "traditionally about 28",
              "well over one hundred",
            ],
            correctIndex: 2,
            explanation: "The figure of 28 is traditional; accounts of exactly who counted as a founder vary, so the course carries it as traditional.",
            sourceLessonSlug: "coop-rochdale",
          },
          {
            prompt: "The seven cooperative principles were codified by the ICA in:",
            options: ["1844", "1895", "1934", "1995"],
            correctIndex: 3,
            explanation: "The ICA adopted the Statement on the Cooperative Identity at its 1995 Manchester congress, setting out the seven principles together.",
            sourceLessonSlug: "coop-seven-principles",
          },
          {
            prompt: "Democratic member control, principle 2, means a primary co-op runs on:",
            options: [
              "one share, one vote",
              "one member, one vote",
              "a board with no vote",
              "the largest investor",
            ],
            correctIndex: 1,
            explanation: "Principle 2 is one member, one vote, the same rule Section 1 built the course on.",
            sourceLessonSlug: "coop-seven-principles",
          },
          {
            prompt: "The principle added in the 1995 revision was:",
            options: [
              "open membership",
              "cooperation among co-ops",
              "concern for community",
              "member economic input",
            ],
            correctIndex: 2,
            explanation: "Concern for community (principle 7) was added in 1995, showing the principles are a living standard revised over time.",
            sourceLessonSlug: "coop-seven-principles",
          },
          {
            prompt: "In a worker cooperative, the members are the:",
            options: ["customers", "suppliers", "residents", "employees"],
            correctIndex: 3,
            explanation: "The people who do the work own the business and vote one worker, one vote, electing the board that hires management.",
            sourceLessonSlug: "coop-types-worker-consumer",
          },
          {
            prompt: "A consumer cooperative is owned by its:",
            options: [
              "outside shareholders",
              "shopping members",
              "hired managers",
              "wholesale suppliers",
            ],
            correctIndex: 1,
            explanation: "The customers are the members; it is the direct descendant of the Rochdale shop owned by the people who shopped there.",
            sourceLessonSlug: "coop-types-worker-consumer",
          },
          {
            prompt: "To tell a worker co-op from a consumer co-op, you check:",
            options: [
              "who the members are",
              "which is more profitable",
              "the sign on the door",
              "how old the co-op is",
            ],
            correctIndex: 0,
            explanation: "The word co-op does not name the type; the membership does. Bakers owning a bakery is worker; shoppers owning a grocery is consumer.",
            sourceLessonSlug: "coop-types-worker-consumer",
          },
          {
            prompt: "In a producer cooperative, the members are independent:",
            options: [
              "renters of one building",
              "shoppers at one store",
              "producers who supply it",
              "workers inside one firm",
            ],
            correctIndex: 2,
            explanation: "Producers stay separate businesses but jointly own a co-op that processes or markets what they make, such as a growers' brand.",
            sourceLessonSlug: "coop-types-producer-housing-purchasing",
          },
          {
            prompt: "A housing cooperative differs from a condominium because a member owns:",
            options: [
              "a share plus occupancy",
              "the deed to a unit",
              "nothing at all here",
              "the whole building alone",
            ],
            correctIndex: 0,
            explanation: "In a housing co-op you own a share in the entity that owns the property and hold an occupancy right, not a deed to your specific unit.",
            sourceLessonSlug: "coop-types-producer-housing-purchasing",
          },
          {
            prompt: "A limited-equity housing co-op caps the price a departing member can:",
            options: [
              "pay in monthly dues",
              "resell their share for",
              "vote on at meetings",
              "borrow from the co-op",
            ],
            correctIndex: 1,
            explanation: "Restricting the resale price keeps the housing permanently affordable but caps the member's gain: a real ownership-and-governance dial.",
            sourceLessonSlug: "coop-types-producer-housing-purchasing",
          },
          {
            prompt: "A purchasing cooperative is best described as the mirror image of a:",
            options: [
              "producer cooperative",
              "housing cooperative",
              "credit union charter",
              "single sole trader",
            ],
            correctIndex: 0,
            explanation: "A producer co-op pools members' selling; a purchasing co-op pools members' buying. In both, independent firms own a shared entity.",
            sourceLessonSlug: "coop-types-producer-housing-purchasing",
          },
          {
            prompt: "Across all five types, the constant is that a co-op is controlled by:",
            options: [
              "its biggest investor",
              "an outside parent firm",
              "one member, one vote",
              "the wealthiest members",
            ],
            correctIndex: 2,
            explanation: "The members change from type to type, but one member one vote does not, and patronage always follows use.",
            sourceLessonSlug: "coop-types-producer-housing-purchasing",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Worked cases  (Mondragon, rural electric co-ops, credit unions)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "coop-mondragon",
      title: "10 · Mondragon: a worker-cooperative complex, and the honest debate",
      section: "Section 3 · Worked cases",
      body: `The first worked case answers a fair objection: **can a worker co-op actually run at industrial scale, or is it only ever a small bakery?** Mondragon is the standing evidence that it can, and it is also the standing evidence that doing so is hard, contested, and full of trade-offs. An honest course teaches both.

## What Mondragon is

**Mondragon is a large federation of worker cooperatives based in the town of Mondragon (Arrasate) in the Basque Country of Spain.** It began with a Catholic priest, **Jose Maria Arizmendiarrieta, who arrived in the town in 1941** and set up a technical school to train young people out of poverty and unemployment. In **1956**, five of his graduates founded the first cooperative, **ULGOR**, which made paraffin heaters and cookers and became known for the brand **Fagor** (MONDRAGON Corporation, n.d.; Whyte & Whyte, 1991).

From that one workshop grew a network that today spans industry, retail, finance and education, described as one of the largest worker cooperatives in the world and among the largest private employers in Spain (MONDRAGON Corporation, n.d.). **This course keeps the headcount conceptual** (tens of thousands of people across the group), because exact employment figures change year to year and asserting a precise one from memory would break the course's rule. The point does not need a precise number: **a worker co-op grew into a major industrial group, which many people believe is impossible.**

## The features worth knowing

Mondragon is not just "a big worker co-op." It built institutions to solve the problems worker co-ops hit:

| Feature | What it does |
|---|---|
| **Worker-ownership** | Members own their jobs and vote one member, one vote |
| **A cooperative bank (Caja Laboral)** | Provided the capital that individual worker co-ops struggle to raise |
| **A pay ratio** | Limits the gap between the highest and lowest paid, by policy |
| **Inter-cooperative solidarity** | Co-ops in the group support one another, including relocating workers when one fails |
| **Its own university** | Trains members and renews the model |

**The cooperative bank is the clever part**, and it connects straight to Section 4: a worker co-op cannot easily sell shares to outside investors without giving away the control that makes it a co-op, so Mondragon **built its own financial institution** to fund its co-ops from within. Hold that; it is the member-capital problem, solved by one federation, in one place.

## The debate, taught rather than hidden

Mondragon is admired, and it is also seriously criticized, and you do not understand it if you only hear the praise. The genuine debates include (Whyte & Whyte, 1991):

- **Non-member workers.** Mondragon's retail and international operations have employed many people who are **not worker-members**, which critics argue dilutes the very principle the group is famous for. How many workers are true members, versus employees of co-op-owned but non-cooperative subsidiaries, is a real and recurring criticism.
- **Global subsidiaries.** As the group expanded abroad, it acquired conventional (non-cooperative) companies, raising the question of whether a co-op that owns ordinary firms abroad is still living its model.
- **Market discipline is still market discipline.** Being a co-op does not exempt a business from competition, and that is where the sharpest lesson comes in.

## Fagor, and what a co-op does when it fails

**In 2013, Fagor Electrodomesticos, the appliance business descended from that original 1956 workshop, filed for bankruptcy** after years of losses in a brutal global appliance market (MONDRAGON Corporation, n.d.). It was one of the group's largest and oldest cooperatives, and its collapse was a real blow, proof that **worker-ownership is not a magic shield against market forces.** A co-op can go broke like any firm.

But watch what the federation did next, because it is the co-op difference made concrete: **the group worked to relocate Fagor's displaced worker-members into other cooperatives in the network**, and reporting from the cooperative sector documented that hundreds were moved into other group co-ops within months, with the great majority eventually placed (CECOP, n.d.). **An ordinary company lays workers off; a cooperative federation that had built inter-cooperative solidarity tried to move them.** Neither sentence cancels the other: the failure was real and the solidarity response was real, and holding both is the honest reading this whole path insists on. None of this is a recommendation about Mondragon or worker co-ops; it is a case, read against the form.

## Sources
- MONDRAGON Corporation. (n.d.). *About us / History*. https://www.mondragon-corporation.com/en/about-us/
- Whyte, W. F., & Whyte, K. K. (1991). *Making Mondragon: The growth and dynamics of the worker cooperative complex* (2nd ed.). ILR Press.
- CECOP. (n.d.). *The Mondragon Corporation has already relocated 417 worker-members from Fagor Electrodomesticos*. https://www.cecop.coop/works/the-mondragon-corporation-has-already-relocated-417-worker-members-from-fagor-electrodomesticos`,
      recallContent: [
        {
          prompt: "In a producer co-op, what is the members' use, and how does the co-op relate to their own businesses?",
          answer: "The members are independent producers whose use is selling through the co-op. The co-op does not replace their businesses; it pools one function (processing, marketing, reaching a national buyer) that no single producer could do alone, and surplus returns by how much each delivered.",
        },
        {
          prompt: "How does a housing co-op differ from a condominium?",
          answer: "In a condo each owner holds the deed to their own unit. In a housing co-op a member owns a share in the entity that owns the whole property plus an occupancy right, and votes one member one vote; transfer is often restricted so the co-op can approve new residents.",
        },
        {
          prompt: "Why is a purchasing co-op called the mirror image of a producer co-op?",
          answer: "A producer co-op pools members' selling; a purchasing co-op pools members' buying. In both, independent businesses own a shared entity that does one job at a scale none could reach alone, and surplus returns by use (how much each bought or delivered).",
        },
        {
          prompt: "State the pattern that holds across all five co-op types.",
          answer: "The members change (workers, consumers, producers, residents, buying businesses), but one member one vote does not, and patronage always follows use. Find who the members are and the rest of the structure follows.",
        },
      ],
    },
    {
      slug: "coop-rural-electric",
      title: "11 · Rural electric cooperatives and the reason rural America has power",
      section: "Section 3 · Worked cases",
      body: `The second worked case is the one hiding in the wall of half of rural America, and it is the clearest proof that a cooperative can do what a market would not. **If you get electricity in the American countryside, there is a good chance it reaches you through a cooperative you help own.**

## The problem the market would not solve

In the mid-1930s, most of rural America had no electricity. **Roughly one in ten rural households had electric power, which means nearly ninety percent did not** (U.S. Department of Agriculture, n.d.). This was not because the technology did not exist; cities had been electrified for decades. It was because **private utilities would not build lines to farms.** Rural customers are spread far apart, so the cost of poles and wire per customer is high and the profit is low, and an investor-owned utility answering to shareholders had no business reason to serve them. **The door was closed for exactly the reason course 4 taught: the capital system will not serve a market it cannot profit from.**

## The cooperative answer, backed by federal loans

The response was a cooperative one, enabled by New Deal policy. President Franklin D. Roosevelt created the **Rural Electrification Administration (REA) by executive order in 1935**, and Congress gave it a statutory basis with the **Rural Electrification Act of 1936** (U.S. Department of Agriculture, n.d.; Rural Electrification Act, 1936). The REA did not build the lines itself. Instead it **made low-cost loans to cooperatives that farmers formed to build and run their own electric systems** (America's Electric Cooperatives, n.d.).

**Read the structure against the four decisions and it is a consumer cooperative for electricity:**

- **Ownership and transfer:** owned by the members it serves, the rural households and farms on the lines.
- **Governance:** one member, one vote, electing a board of local members.
- **Patronage:** a nonprofit that returns margins to members over time (often called capital credits) by how much power each used.
- **The reason it worked where a company would not:** a co-op did not need the line to be profitable to a distant shareholder. It only needed the line to serve its members, who were also its owners, so the "unprofitable" customer and the owner were the same person. **The dual identity from Section 1 is why the lights came on.**

## What it accomplished

The result was one of the fastest infrastructure transformations in American history. Rural electrification went from that small minority of farms in the 1930s to the great majority within about two decades, as cooperative lines reached places no company had wired (U.S. Department of Agriculture, n.d.; America's Electric Cooperatives, n.d.). **This course keeps the later percentages and the count of co-ops general rather than pinned to a memorized figure**, because the exact numbers vary by source and year, but the shape is not in doubt: **a form of business that a market rejected as unprofitable electrified a continent's countryside, because the members served it themselves.**

## Why this case matters to the whole path

The rural electric co-op is the cleanest demonstration of the co-op's core claim. **An investor-owned utility optimises for return to shareholders, and rural lines fail that test. A cooperative optimises for benefit to members, and rural lines pass that test, because the members are the customers.** Same wires, same cost, opposite decision, and the difference is entirely in the answer to "who owns and controls this, and for whose benefit." That is decisions three and four doing the most consequential work in this whole course. **This is history and structure, not advice**, and the specifics of any particular co-op belong to that co-op's own records.

## Sources
- U.S. Department of Agriculture. (n.d.). *Celebrating the 80th anniversary of the Rural Electrification Administration*. https://www.usda.gov/about-usda/news/blog/celebrating-80th-anniversary-rural-electrification-administration
- America's Electric Cooperatives (NRECA). (n.d.). *History*. https://www.electric.coop/our-organization/history
- Rural Electrification Act of 1936, Pub. L. No. 74-605, 49 Stat. 1363 (1936).`,
      recallContent: [
        {
          prompt: "What is Mondragon, and how did it begin?",
          answer: "A large federation of worker cooperatives in the Basque Country of Spain. It began with the priest Jose Maria Arizmendiarrieta, who arrived in Mondragon in 1941 and started a technical school; in 1956 five graduates founded the first co-op, ULGOR, maker of the Fagor brand.",
        },
        {
          prompt: "Why did Mondragon build its own cooperative bank, and what problem did that solve?",
          answer: "A worker co-op cannot easily sell shares to outside investors without giving away the control that makes it a co-op, so raising capital is hard. Mondragon built its own financial institution (Caja Laboral) to fund its co-ops from within: the member-capital problem, solved by one federation.",
        },
        {
          prompt: "Name two genuine criticisms of Mondragon that the course teaches rather than hides.",
          answer: "Any two: many workers in its retail and international operations are not worker-members, which dilutes the principle; expansion abroad meant owning conventional non-cooperative companies; and being a co-op does not exempt it from market competition.",
        },
        {
          prompt: "What happened to Fagor in 2013, and how does it show the co-op difference and its limits together?",
          answer: "Fagor Electrodomesticos filed for bankruptcy after years of losses, proving worker-ownership is no shield against market forces. But the federation worked to relocate its displaced worker-members into other group co-ops, with hundreds moved within months. The failure and the solidarity response are both real.",
        },
      ],
    },
    {
      slug: "coop-credit-unions",
      title: "12 · Credit unions, the co-op most Americans belong to without knowing",
      section: "Section 3 · Worked cases",
      body: `The third worked case is the one course 4 handed here on purpose. **The credit union is a financial cooperative, and it is very likely the co-op nearest to you**, because a large share of Americans belong to one without ever thinking of it as a cooperative at all. This lesson develops it properly rather than repeating course 4's building-and-loan material.

## What a credit union is

**A credit union is a member-owned, not-for-profit financial cooperative.** Its members pool their savings, and the pooled money is lent back out to members. That is the same pool-and-lend idea course 4 studied in the building and loan, aimed here at **general saving and borrowing** rather than housing specifically. **The people who save at a credit union and the people who borrow from it are its owners**, which is the dual identity from Section 1 applied to a bank.

Against the four decisions:

- **Ownership and transfer:** owned by the members, through a small share you buy to join, not tradeable stock.
- **Governance:** one member, one vote, electing a volunteer board from the membership, regardless of how large a member's balance is.
- **Taxation and status:** a not-for-profit cooperative, which in the United States is treated differently from an investor-owned bank (the specifics are regulatory and beyond this course).
- **The membership rule:** a credit union serves a defined **field of membership**, historically a **common bond**, such as an employer, an occupation, a church, or a geographic community. You have to be eligible to join, which is what makes it a members' club rather than an open-market bank.

## Where credit unions came from

The idea is older than the American version and was imported. **Credit cooperatives were pioneered in nineteenth-century Germany**, where Friedrich Wilhelm Raiffeisen built rural credit cooperatives (his Heddesdorf society dates to the 1860s) and Hermann Schulze-Delitzsch built urban ones (Moody & Fite, 1984). The model reached North America through **Alphonse Desjardins, a Quebec journalist who founded a caisse populaire in Levis, Quebec**, at the turn of the twentieth century. **Sources differ on the exact date, commonly given as 1900, with its first transactions in 1901**, and this course carries the disagreement rather than picking one silently (Moody & Fite, 1984).

Desjardins then helped a group in the United States organize the first American credit union, **St. Mary's Bank in Manchester, New Hampshire, whose founding is commonly dated to 1908, though some sources give 1909** (Moody & Fite, 1984; NCUA, n.d.). The movement was championed in the United States by the Boston merchant **Edward Filene** and the organiser **Roy Bergengren**, whose work led to state credit union laws and then a federal one.

## The Federal Credit Union Act of 1934

**The Federal Credit Union Act, signed into law in 1934, created a federal system for chartering credit unions across the United States** (NCUA, n.d.). It gave the movement a national legal home, the way course 4 showed the Friendly Societies Act had done in Britain a century earlier for friendly societies: **a legal category built specifically to hold the pooled savings of ordinary people.** Today federal credit unions are overseen by the **National Credit Union Administration (NCUA)**, and members' deposits are insured through a federal share-insurance fund, the credit-union counterpart to the protection bank depositors get (NCUA, n.d.).

## Why it is the co-op you already use

Put it together and the credit union is the answer to "name a cooperative." **Tens of millions of Americans are credit-union members**, and this course states that as a scale, not a precise count, because the exact membership total is published by regulators and trade bodies and changes constantly. **A member saving there is an owner; the board is elected one member, one vote; the surplus supports better rates and services for members rather than a return to outside shareholders.** It is the Rochdale idea, applied to money, sitting in plain sight on a strip mall. **And here the not-advice rule matters most of all**: whether a credit union or a bank is right for your money is a financial decision that depends on your situation, and it belongs to you and, if you want one, a professional. This lesson teaches you what a credit union **is**, so you can finally see the co-op you were already using.

## Sources
- NCUA. (n.d.). *Historical timeline*. https://ncua.gov/about/historical-timeline
- Moody, J. C., & Fite, G. C. (1984). *The credit union movement: Origins and development, 1850-1980* (2nd ed.). Kendall/Hunt.
- Federal Credit Union Act of 1934, Pub. L. No. 73-467, 48 Stat. 1216 (1934).`,
      recallContent: [
        {
          prompt: "Why did private utilities not build electric lines to farms in the 1930s, and what was different about a co-op?",
          answer: "Rural customers are spread far apart, so cost per customer is high and profit low; an investor-owned utility had no business reason to serve them. A co-op did not need the line profitable to a distant shareholder, only useful to its members, who were also its owners.",
        },
        {
          prompt: "What did the Rural Electrification Act of 1936 and the REA actually do?",
          answer: "The REA, created by executive order in 1935 and given statutory basis by the 1936 Act, made low-cost loans to cooperatives that farmers formed to build and run their own electric systems, rather than building the lines itself.",
        },
        {
          prompt: "Read a rural electric co-op against the four decisions.",
          answer: "It is a consumer cooperative for electricity: owned by the members it serves, governed one member one vote by a board of local members, returning margins to members by how much power each used (capital credits), serving customers a company found unprofitable because the customers were also the owners.",
        },
        {
          prompt: "What is the cleanest single lesson the rural electric co-op teaches about the co-op form?",
          answer: "Same wires, same cost, opposite decision: an investor-owned utility optimises for shareholder return and rural lines fail that test, while a cooperative optimises for member benefit and rural lines pass, because the members are the customers. It is decisions three and four doing consequential work.",
        },
      ],
    },
    {
      slug: "coop-quiz-worked-cases",
      title: "13 · Quiz: worked cases",
      section: "Section 3 · Worked cases",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Mondragon is best described as a large federation of:",
            options: [
              "worker cooperatives",
              "investor-owned banks",
              "consumer grocery stores",
              "government agencies",
            ],
            correctIndex: 0,
            explanation: "Based in the Basque Country of Spain, it grew from one 1956 workshop into one of the largest worker cooperatives in the world.",
            sourceLessonSlug: "coop-mondragon",
          },
          {
            prompt: "Mondragon's first cooperative, ULGOR, was founded in:",
            options: ["1844", "1934", "1956", "2013"],
            correctIndex: 2,
            explanation: "Five graduates of Arizmendiarrieta's technical school founded ULGOR in 1956; it made the Fagor brand of appliances.",
            sourceLessonSlug: "coop-mondragon",
          },
          {
            prompt: "Mondragon built its own cooperative bank mainly to:",
            options: [
              "sell shares to outsiders",
              "avoid paying any wages",
              "escape all competition",
              "fund its co-ops from within",
            ],
            correctIndex: 3,
            explanation: "A worker co-op cannot easily sell shares to outside investors without losing control, so Mondragon financed its co-ops internally.",
            sourceLessonSlug: "coop-mondragon",
          },
          {
            prompt: "The 2013 Fagor bankruptcy shows that worker-ownership is:",
            options: [
              "a shield from markets",
              "no shield from markets",
              "banned in modern Spain",
              "always more profitable",
            ],
            correctIndex: 1,
            explanation: "Fagor failed in a brutal appliance market like any firm; but the federation then worked to relocate its worker-members into other group co-ops.",
            sourceLessonSlug: "coop-mondragon",
          },
          {
            prompt: "A genuine criticism of Mondragon the course teaches is that it employs many:",
            options: [
              "non-member workers",
              "retired volunteers",
              "government auditors",
              "part-time students",
            ],
            correctIndex: 0,
            explanation: "Many workers in its retail and international operations are not worker-members, which critics argue dilutes the principle it is famous for.",
            sourceLessonSlug: "coop-mondragon",
          },
          {
            prompt: "In the mid-1930s, the share of rural America with electric power was about:",
            options: [
              "one in ten households",
              "half of all households",
              "nine in ten households",
              "every rural household",
            ],
            correctIndex: 0,
            explanation: "Roughly one in ten rural households had power; nearly ninety percent did not, because private utilities would not build the lines.",
            sourceLessonSlug: "coop-rural-electric",
          },
          {
            prompt: "Private utilities would not electrify farms because rural lines were:",
            options: [
              "banned by federal law",
              "unprofitable to build",
              "technically impossible",
              "opposed by the farmers",
            ],
            correctIndex: 1,
            explanation: "Customers were spread far apart, so cost per customer was high and profit low; an investor-owned utility had no business reason to serve them.",
            sourceLessonSlug: "coop-rural-electric",
          },
          {
            prompt: "Under the Rural Electrification Act of 1936, the REA mainly:",
            options: [
              "built the lines itself",
              "seized private utilities",
              "loaned to member co-ops",
              "taxed rural households",
            ],
            correctIndex: 2,
            explanation: "The REA made low-cost loans to cooperatives that farmers formed to build and run their own electric systems.",
            sourceLessonSlug: "coop-rural-electric",
          },
          {
            prompt: "A rural electric co-op could serve farms a company would not because its customers were also its:",
            options: ["regulators", "suppliers", "employees", "owners"],
            correctIndex: 3,
            explanation: "The dual identity: the co-op needed the line only useful to its members, not profitable to a distant shareholder, because members owned it.",
            sourceLessonSlug: "coop-rural-electric",
          },
          {
            prompt: "A credit union is best described as a member-owned:",
            options: [
              "not-for-profit financial co-op",
              "investor-owned retail bank",
              "government lending agency",
              "for-profit insurance firm",
            ],
            correctIndex: 0,
            explanation: "Members pool savings that are lent back to members; the savers and borrowers are the owners, and it votes one member, one vote.",
            sourceLessonSlug: "coop-credit-unions",
          },
          {
            prompt: "The US law that created a federal system for chartering credit unions was the:",
            options: [
              "Rochdale Act of 1844",
              "Rural Electric Act 1936",
              "Federal Credit Union Act",
              "Friendly Societies Act",
            ],
            correctIndex: 2,
            explanation: "The Federal Credit Union Act, signed in 1934, gave the movement a national legal home for its members' pooled savings.",
            sourceLessonSlug: "coop-credit-unions",
          },
          {
            prompt: "The date of the first North American credit union in Levis, Quebec, is:",
            options: [
              "fixed with certainty at 1908",
              "commonly 1900, some say 1901",
              "always given as exactly 1934",
              "unknown and never recorded",
            ],
            correctIndex: 1,
            explanation: "Alphonse Desjardins founded the caisse populaire in Levis around 1900, with first transactions in 1901; the course carries the disagreement.",
            sourceLessonSlug: "coop-credit-unions",
          },
          {
            prompt: "A credit union serves a defined field of membership, historically a:",
            options: ["common bond", "stock listing", "tax bracket", "credit score"],
            correctIndex: 0,
            explanation: "A common bond such as an employer, occupation, church or community is what makes it a members' club rather than an open-market bank.",
            sourceLessonSlug: "coop-credit-unions",
          },
          {
            prompt: "Credit cooperatives were pioneered in the nineteenth century in:",
            options: ["Germany", "Spain", "Quebec", "England"],
            correctIndex: 0,
            explanation: "Raiffeisen built rural credit cooperatives and Schulze-Delitzsch urban ones in Germany; the model later reached North America through Desjardins.",
            sourceLessonSlug: "coop-credit-unions",
          },
          {
            prompt: "A nonprofit rural electric co-op returns its margins to members over time as:",
            options: [
              "a market dividend",
              "a yearly bonus",
              "a state grant",
              "capital credits",
            ],
            correctIndex: 3,
            explanation: "As a consumer cooperative for electricity it returns margins to members by how much power each used, often called capital credits.",
            sourceLessonSlug: "coop-rural-electric",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · The money and governance question  (patronage, member capital, demutualisation)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "coop-patronage",
      title: "14 · Patronage dividends: how a co-op shares its surplus",
      section: "Section 4 · The money and governance question",
      body: `You have met the patronage idea three times now (in Section 1, at Rochdale, and in every worked case). This lesson makes it precise, because how a co-op shares its surplus is where "one member, one vote" turns into real money, and it is the feature people most often get backwards.

## Surplus, not profit, and why the word matters

A co-op that takes in more than it spends has a **surplus.** It is tempting to call it profit, but the co-op difference hides in that word. **In a corporation, profit belongs to the shareholders as a return on their investment.** In a co-op, the surplus is, in effect, **money the members overpaid or underearned as users**: the consumer co-op charged its shopping members a little more than it needed to; the producer co-op paid its farmer-members a little less than it could; the credit union earned a bit more from its borrowing members than its costs required. **Since the members generated the surplus by using the co-op, the surplus is theirs to get back, by use.** That return is the **patronage dividend** (also called a patronage refund or, at some co-ops, capital credits).

## Patronage follows use, not investment

This is the sentence to hold, because it is the exact inversion of a corporate dividend:

> **A patronage dividend is paid in proportion to how much a member used the co-op, not how much they invested in it.**

Compare the two side by side:

| | Corporate dividend | Patronage dividend |
|---|---|---|
| **Paid in proportion to** | Shares owned (capital) | Use of the co-op (patronage) |
| **Rewards** | Investing money | Doing business with the co-op |
| **Bigger for** | The larger investor | The more active member |

**A member who shopped twice as much, delivered twice the crop, or borrowed and saved twice as much gets roughly twice the patronage dividend**, regardless of who put in more capital. That is one member, one vote's economic partner: control follows membership, and surplus follows use, and **neither follows the size of your investment.** Capital is the servant in both the vote and the payout.

## How it actually reaches members

Co-ops handle the mechanics differently, and two details are worth knowing so you can read a real one:

- **Cash now versus retained equity.** A co-op often pays **part** of the patronage dividend in cash and **keeps part** as the member's equity in the co-op, to fund operations and growth. The retained part is credited to the member and typically paid out later. This is normal, and it is also the seed of the member-capital problem in the next lesson: a co-op grows partly by keeping members' surplus in the business.
- **Limited return on capital, separately.** Any actual capital a member contributed earns, by principle, only a **limited, fixed return** (Rochdale principle, generalised as ICA principle 3). The real reward for belonging is the patronage dividend on use, not a market return on capital. **A co-op deliberately makes capital a poor way to profit and use a good one**, which is precisely how it keeps investors from taking over.

## The tax shape, kept conceptual on purpose

Patronage is also why co-op taxation is distinctive. Broadly, because a patronage dividend is treated as **the members' own money returned to them**, it can be taxed to the members rather than taxed again at the co-op, which avoids the double taxation a C-corporation faces on dividends. **But the exact rules (which co-ops qualify, what must be paid in cash, the timing and the notices) are tax law that changes**, and this course states only the shape and sends the specifics to an accountant, exactly as it promised in Section 1. **This is not tax advice.** It is the logic: surplus generated by members, returned to members, taxed to members, in proportion to use.

## Reading patronage on any co-op

Ask three questions and you can read the money side of a co-op you have never seen:

1. **Is surplus returned by use or by investment?** By use means it is behaving like a co-op; by investment means check whether it still is one.
2. **How much is paid in cash and how much retained as member equity?** The split tells you how the co-op funds itself.
3. **What return does contributed capital earn?** A limited, fixed return is the co-op signature; a market return on capital is a warning sign.

**Get these three and you have read the co-op's economics**, which is half of what makes the form different. The other half, where that retained equity comes from and why it is so hard to raise, is the next lesson. None of this is advice about your money.

## Sources
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity
- NCBA CLUSA. (n.d.). *7 cooperative principles*. https://ncbaclusa.coop/resources/7-cooperative-principles/
- Birchall, J. (2011). *People-centred businesses: Co-operatives, mutuals and the idea of membership*. Palgrave Macmillan.`,
      recallContent: [
        {
          prompt: "What is a credit union, and how does it relate to the building and loan from course 4?",
          answer: "A member-owned, not-for-profit financial cooperative: members pool savings that are lent back to members. It is the building and loan's sibling, aimed at general saving and borrowing rather than housing, with savers and borrowers as the owners voting one member, one vote.",
        },
        {
          prompt: "Trace where credit unions came from, naming the key figures and the disputed dates.",
          answer: "Credit cooperatives were pioneered in nineteenth-century Germany by Raiffeisen (rural) and Schulze-Delitzsch (urban). Desjardins founded the first North American one in Levis, Quebec, around 1900 (first transactions 1901). The first US one, St. Mary's Bank in Manchester NH, is commonly dated 1908, some sources 1909. Filene and Bergengren championed the US movement.",
        },
        {
          prompt: "What did the Federal Credit Union Act of 1934 do?",
          answer: "It created a federal system for chartering credit unions across the United States, giving the movement a national legal home, much as the Friendly Societies Act had for British friendly societies. Federal credit unions are overseen by the NCUA, with members' deposits federally insured.",
        },
        {
          prompt: "What is the credit union's membership rule, and why does it matter?",
          answer: "A credit union serves a defined field of membership, historically a common bond such as an employer, occupation, church or community. You must be eligible to join, which makes it a members' club rather than an open-market bank.",
        },
      ],
    },
    {
      slug: "coop-member-capital",
      title: "15 · Member capital: the cooperative's hardest problem",
      section: "Section 4 · The money and governance question",
      body: `Every advantage has a bill attached, and here is the co-op's. **The same rule that makes a cooperative democratic, one member one vote with a limited return on capital, makes it genuinely hard to raise large amounts of money.** This lesson is the honest cost side of the form, and skipping it would leave you admiring co-ops without understanding why there are not more of them.

## Why raising capital is the co-op's structural weakness

Think about how an ordinary company raises serious money: **it sells equity.** An investor hands over capital and, in exchange, gets ownership, a share of the profits proportional to their investment, and voting control proportional to their stake. That trade is the engine of the C-corporation from course 1, and it works because the investor gets **control and an uncapped return** in proportion to the money they put in.

**A cooperative cannot offer that trade without ceasing to be a cooperative.** Its two core rules forbid it:

- **One member, one vote** means an outside investor's money buys **no extra control.** A person who invests ten times as much still gets one vote, or as a non-member, none.
- **Limited return on capital** means the investor's money earns only a **fixed, modest return**, not the uncapped share of profits a shareholder chases.

**So the co-op is structurally unattractive to the exact investor an ordinary company relies on.** Why would a profit-seeking investor put large capital into a business that gives them no control and a capped return? Usually they would not, and that is not a flaw to be fixed so much as the **price of the democratic structure.** You cannot keep control away from capital and also invite capital in on capital's terms.

## Where a co-op's capital actually comes from

Denied the equity engine, co-ops fund themselves from their members and their own earnings:

| Source | What it is |
|---|---|
| **Membership shares** | The modest amount each member pays to join |
| **Retained patronage** | The part of each year's surplus kept as member equity instead of paid in cash (Lesson 14) |
| **Member loans and deposits** | Members lending to, or saving in, their own co-op |
| **Retained earnings over time** | Surplus accumulated across years, built slowly |
| **Outside debt** | Borrowing from lenders (including cooperative banks), which unlike equity does not hand over control |

**Read that list and two things jump out.** First, **it is slow.** A co-op builds capital patiently, out of members and retained surplus, rather than raising a large sum quickly by selling equity. Second, **it explains Mondragon.** Section 3 showed Mondragon building its own cooperative bank, and now you can see exactly why: **a federation of worker co-ops that could not sell equity to outsiders built an internal financial institution to supply the capital the equity markets would not give it on co-op terms.** The clever institution was a direct answer to this exact problem.

## The workarounds, and their limits

Co-ops have invented ways to attract capital without giving away control, and each is a compromise:

- **Non-voting preferred shares.** Some co-ops issue shares that pay a return but carry **no vote**, so capital comes in without touching control. This works, within limits, but the return must be attractive enough to draw investors while staying consistent with the co-op's principles, which is a narrow band.
- **Cooperative banks and funds.** Institutions like Mondragon's, or credit unions' own leagues, pool cooperative capital to lend to co-ops, keeping the money inside the movement.
- **Patient retained equity.** Growing slowly out of retained patronage, accepting that a co-op may simply expand more slowly than an equity-funded competitor.

**None of these fully closes the gap**, and that is the honest conclusion: **a cooperative trades away easy access to large outside capital in exchange for keeping control with its members.** Whether that trade is worth it depends entirely on what the members are trying to do, which is a judgment, not a fact, and certainly not this course's advice to give. **The point is that you now understand the trade**, and you will not mistake the scarcity of huge co-ops for evidence that the form does not work. It works; it just cannot buy growth with other people's control the way a corporation can.

## Sources
- Birchall, J. (2011). *People-centred businesses: Co-operatives, mutuals and the idea of membership*. Palgrave Macmillan.
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity
- NCBA CLUSA. (n.d.). *7 cooperative principles*. https://ncbaclusa.coop/resources/7-cooperative-principles/`,
      recallContent: [
        {
          prompt: "What is a surplus in a co-op, and why is it not the same as corporate profit?",
          answer: "It is money members overpaid or underearned as users (the consumer co-op charged a bit more, the producer co-op paid a bit less, the credit union earned a bit more from borrowers). Since members generated it by using the co-op, it is theirs to get back by use, as a patronage dividend, not a return on investment.",
        },
        {
          prompt: "State the rule that inverts a corporate dividend.",
          answer: "A patronage dividend is paid in proportion to how much a member used the co-op, not how much they invested. A member who did twice the business gets roughly twice the dividend, regardless of who contributed more capital. Control follows membership; surplus follows use.",
        },
        {
          prompt: "What is the difference between the cash and retained portions of a patronage dividend?",
          answer: "A co-op often pays part of the dividend in cash and keeps part as the member's equity in the co-op to fund operations and growth, crediting it to the member and paying it out later. The retained part is the seed of the member-capital problem: a co-op grows partly by keeping members' surplus.",
        },
        {
          prompt: "Why is co-op taxation distinctive, and why won't this course state the exact rules?",
          answer: "Because a patronage dividend is treated as members' own money returned to them, it can be taxed to the members rather than taxed again at the co-op, avoiding a corporation's double taxation. The exact rules are tax law that changes, so the course states only the shape and sends specifics to an accountant.",
        },
      ],
    },
    {
      slug: "coop-demutualisation",
      title: "16 · Demutualisation: the entity choice reversed",
      section: "Section 4 · The money and governance question",
      body: `The last teaching lesson closes a loop the financing course opened. **A cooperative is a choice, and a choice can be un-made.** The reversal has a name, demutualization, and understanding it is the final test of whether you can read the co-op form, because it is the moment a co-op stops being one.

## What demutualization is

**Demutualisation is the conversion of a member-owned cooperative or mutual into an investor-owned company.** The members who used to own the business one-member-one-vote are converted into ordinary shareholders (or bought out), and control passes from members-as-users to shareholders-as-investors. **In the language of the four decisions, demutualization rewrites decisions three and four**: ownership changes from a membership tied to use into tradeable stock, and governance changes from one member, one vote into one share, one vote. **The label "co-op" comes off, whatever the sign still says.**

Course 4 already showed you this happening. Its lesson on building societies taught that many British building societies and American savings and loans **demutualised**, converting from member-owned mutuals into shareholder-owned banks and distributing windfalls to members in the process (Mason, 2004). **This course is naming the general move that case was an instance of.**

## Why it happens: the member-capital problem, cashed out

Demutualisation is usually driven by the exact tension the last lesson described. A mutual that has accumulated capital over generations sits on a large pool of value, and:

- **Managers may want access to equity markets** that the mutual form denies them, to grow or compete, and demutualising opens that door.
- **Members may be offered a windfall**, a payout of shares or cash, for voting to convert, which can be individually tempting.
- **The accumulated common capital becomes distributable.** A mutual's reserves were built by many members over many years, held in common. Demutualisation is, in part, the moment that common wealth gets divided up among whoever happens to be a member at the time.

**Hold that last point, because it is the heart of the ethical question.** The capital a century of members built up was **held in common for future members too.** When it is cashed out to the current members, they gain, but the cooperative that would have served the next generation is gone. Whether that is a fair release of trapped value or a raid on a common inheritance is a genuine debate, and this course does not settle it (Birchall, 2011). **What the course insists on is that you see the move for what it is: a transfer of a form from members-as-users to shareholders-as-investors.**

## The reframing this completes

Section 1 said the co-op form buys democratic control and pays for it in harder access to capital. Demutualisation is what happens when an organization decides **it would rather have the capital.** And that is exactly the reframing course 1 made about the LLC and course 4 made about the mutual:

> **These structures are choices, not facts of nature, and a choice can be un-made.**

The LLC was invented recently; limited liability was a policy decision; the mutual form was a response to exclusion; and the cooperative is a deliberate answer on ownership and governance that a co-op can, by a members' vote, decide to stop giving. **Nothing about a co-op is permanent.** It persists only as long as its members choose the co-op answer over the investor answer, which is why the seven principles include autonomy and independence, and why reading the four decisions on a self-described co-op is a live test and not a formality.

## Reading for demutualization risk

When you look at any large, old, capital-rich mutual or co-op, you can now ask the question that predicts its future:

1. **Who benefits if this converts, and who decides?** If managers gain access to markets and members are offered a windfall, the pressure to demutualise is real.
2. **What happens to the accumulated common capital?** Follow it: to current members as a windfall, and away from future ones.
3. **Do the four decisions still read as a co-op today?** One member one vote and ownership tied to use mean it is still a co-op. Tradeable stock and one share one vote mean it already converted, whatever it is called.

**This is analysis, not advice**, and certainly not a prediction about any particular institution. It is the final skill of the course: you can now read not just what a co-op **is**, but whether it is **staying** one. The capstone asks you to defend a co-op you design against exactly this pressure.

## Sources
- Mason, D. L. (2004). *From buildings and loans to bail-outs: A history of the American savings and loan industry, 1831-1995*. Cambridge University Press.
- Birchall, J. (2011). *People-centred businesses: Co-operatives, mutuals and the idea of membership*. Palgrave Macmillan.
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity`,
      recallContent: [
        {
          prompt: "Why is raising large capital the cooperative's structural weakness?",
          answer: "An ordinary company raises money by selling equity, giving investors control and an uncapped return in proportion to their money. A co-op cannot: one member one vote means capital buys no extra control, and limited return on capital means it earns only a fixed return. So the co-op is unattractive to the very investor a corporation relies on.",
        },
        {
          prompt: "Where does a co-op's capital actually come from?",
          answer: "Membership shares, retained patronage (surplus kept as member equity), member loans and deposits, retained earnings built slowly over years, and outside debt (which, unlike equity, does not hand over control). It is slow, patient capital rather than a large sum raised quickly.",
        },
        {
          prompt: "How does the member-capital problem explain Mondragon's cooperative bank?",
          answer: "A federation of worker co-ops that could not sell equity to outsiders built its own internal financial institution to supply the capital the equity markets would not give it on co-op terms. The clever institution was a direct answer to the capital problem.",
        },
        {
          prompt: "What is the honest conclusion about a co-op's capital trade-off?",
          answer: "None of the workarounds (non-voting preferred shares, cooperative banks, patient retained equity) fully closes the gap. A cooperative trades away easy access to large outside capital in exchange for keeping control with its members. It works; it just cannot buy growth with other people's control.",
        },
      ],
    },
    {
      slug: "coop-quiz-money-governance",
      title: "17 · Quiz: the money and governance question",
      section: "Section 4 · The money and governance question",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A patronage dividend is paid to a member in proportion to their:",
            options: [
              "capital invested",
              "use of the co-op",
              "years of membership",
              "seat on the board",
            ],
            correctIndex: 1,
            explanation: "It is the inversion of a corporate dividend: surplus follows use, not investment, so the more active member gets more back.",
            sourceLessonSlug: "coop-patronage",
          },
          {
            prompt: "A co-op's surplus is best understood as money the members:",
            options: [
              "borrowed from a bank",
              "were given by the state",
              "invested as shareholders",
              "overpaid or underearned",
            ],
            correctIndex: 3,
            explanation: "Members generated it by using the co-op, so it is theirs to get back by use, as a patronage refund, not a return on investment.",
            sourceLessonSlug: "coop-patronage",
          },
          {
            prompt: "A corporate dividend, unlike a patronage dividend, rewards:",
            options: [
              "investing money",
              "using the firm",
              "attending meetings",
              "years of service",
            ],
            correctIndex: 0,
            explanation: "A corporate dividend is paid in proportion to shares owned (capital); a patronage dividend is paid in proportion to use.",
            sourceLessonSlug: "coop-patronage",
          },
          {
            prompt: "Capital a member contributes to a co-op earns, by principle, a return that is:",
            options: [
              "the whole surplus",
              "limited and fixed",
              "set by the market",
              "larger each year",
            ],
            correctIndex: 1,
            explanation: "Limited return on capital is a Rochdale principle: the reward for belonging is patronage on use, which keeps investors from taking over.",
            sourceLessonSlug: "coop-patronage",
          },
          {
            prompt: "A co-op often pays part of a patronage dividend in cash and keeps part as:",
            options: [
              "a tax to the state",
              "a bonus for managers",
              "the member's equity",
              "an outside loan",
            ],
            correctIndex: 2,
            explanation: "The retained part is credited to the member as equity to fund the co-op and paid out later; it is the seed of the member-capital problem.",
            sourceLessonSlug: "coop-patronage",
          },
          {
            prompt: "Raising large capital is hard for a co-op because it cannot offer investors:",
            options: [
              "any product to buy",
              "a place to save money",
              "control and uncapped gain",
              "membership of any kind",
            ],
            correctIndex: 2,
            explanation: "One member one vote means capital buys no extra control, and limited return caps the gain, so the co-op is unattractive to a profit-seeking investor.",
            sourceLessonSlug: "coop-member-capital",
          },
          {
            prompt: "The hard-to-raise-capital problem is best described as the co-op's:",
            options: [
              "price for democracy",
              "proof it cannot work",
              "worst tax mistake",
              "reason to demutualise",
            ],
            correctIndex: 0,
            explanation: "You cannot keep control away from capital and also invite capital in on capital's terms; the difficulty is the price of the democratic structure.",
            sourceLessonSlug: "coop-member-capital",
          },
          {
            prompt: "A co-op mainly funds itself from members and retained surplus, which makes its capital:",
            options: [
              "fast and unlimited",
              "slow and patient",
              "free of any cost",
              "owned by outsiders",
            ],
            correctIndex: 1,
            explanation: "Denied the equity engine, a co-op builds capital patiently from membership shares, retained patronage, member loans and debt, rather than a quick equity sale.",
            sourceLessonSlug: "coop-member-capital",
          },
          {
            prompt: "One workaround lets capital in without touching control:",
            options: [
              "non-voting preferred shares",
              "one share, one vote stock",
              "selling the whole co-op",
              "a public share offering",
            ],
            correctIndex: 0,
            explanation: "Non-voting preferred shares pay a return but carry no vote, so capital comes in without changing who controls the co-op, within limits.",
            sourceLessonSlug: "coop-member-capital",
          },
          {
            prompt: "Demutualisation is the conversion of a co-op or mutual into a(n):",
            options: [
              "investor-owned company",
              "government department",
              "larger member co-op",
              "tax-exempt charity",
            ],
            correctIndex: 0,
            explanation: "Members who owned it one member one vote become ordinary shareholders, and control passes from members-as-users to shareholders-as-investors.",
            sourceLessonSlug: "coop-demutualisation",
          },
          {
            prompt: "In the four decisions, demutualisation mainly rewrites:",
            options: [
              "liability and taxation",
              "ownership and governance",
              "taxation and liability",
              "nothing at all changes",
            ],
            correctIndex: 1,
            explanation: "Ownership shifts from a membership tied to use into tradeable stock, and governance shifts from one member one vote to one share one vote.",
            sourceLessonSlug: "coop-demutualisation",
          },
          {
            prompt: "The ethical heart of demutualisation is what happens to the:",
            options: [
              "managers' annual pay",
              "co-op's brand name",
              "accumulated common capital",
              "price of the product",
            ],
            correctIndex: 2,
            explanation: "Reserves built by many members over many years, held in common for future members, get divided among whoever is a member at the time of conversion.",
            sourceLessonSlug: "coop-demutualisation",
          },
          {
            prompt: "Which earlier case did the course cite as a real instance of demutualisation?",
            options: [
              "rural electric co-ops",
              "the Rochdale store",
              "Mondragon's ULGOR",
              "building societies",
            ],
            correctIndex: 3,
            explanation: "Course 4 showed British building societies and American savings and loans demutualising into shareholder-owned banks, distributing windfalls to members.",
            sourceLessonSlug: "coop-demutualisation",
          },
          {
            prompt: "The reframing demutualisation completes is that a co-op is:",
            options: [
              "a fact of nature",
              "permanent once formed",
              "a choice that can be un-made",
              "always the best form",
            ],
            correctIndex: 2,
            explanation: "Like the LLC and the mutual form, a co-op is a deliberate answer that persists only as long as members choose it over the investor answer.",
            sourceLessonSlug: "coop-demutualisation",
          },
          {
            prompt: "The co-op capital problem is exactly what Mondragon solved by building:",
            options: [
              "a public stock sale",
              "a bigger factory",
              "a tax shelter",
              "its own bank",
            ],
            correctIndex: 3,
            explanation: "A federation of worker co-ops that could not sell equity built its own financial institution to fund its co-ops from within.",
            sourceLessonSlug: "coop-member-capital",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The capstone  (design a co-op and defend its member governance against a corporation)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "coop-capstone",
      title: "18 · Capstone: design a co-op and defend it against a corporation",
      section: "Section 5 · Design and defend a cooperative",
      lessonType: "assignment",
      body: `You have the whole picture now: the co-op answers ownership and governance with one member, one vote; its surplus returns by patronage; its capital is patient and member-built; and its structure can be reversed by demutualization. This capstone asks you to **use** all of it, not to give advice.

## The assignment

Pick **one scenario** below (or write your own that is just as concrete). In **700 to 1,100 words**, **design a cooperative for it and defend that design against a plain corporation**, in the language of the four decisions. The deliverable is an argument, not a recommendation to a real group of people.

**Read this line twice, because it is the point of the assignment and the rule of the course:** you are not giving legal, tax or financial advice, and you must say so in your piece. You are demonstrating that you can *reason with the co-op form*. A real version of this choice, for a real group, goes to a lawyer and an accountant, and your piece should say that in as many words.

## The scenarios

1. **A town's only grocery is closing.** Residents want to reopen it so that each household has an equal say in what it stocks and how it is run, regardless of who can chip in more money.
2. **Gig drivers want to own the app.** A group of drivers is tired of an app that takes a large cut and sets rules they cannot change. They want to run the platform themselves.
3. **Small farms cannot reach a national buyer.** A dozen independent farms each grow the same crop but are too small individually to sell to a big distributor.
4. **Renters want out of an absentee landlord's building.** The tenants want to collectively own their building and keep it permanently affordable, so no future resident is priced out.

## What your piece must contain

**1. Name the type and the form, up front.** One or two sentences: which of the five co-op types this is (worker, consumer, producer, housing, purchasing), who the members are, and that you are proposing a cooperative. No suspense.

**2. Defend the design against all four decisions, one at a time.** A short paragraph each, in order:

| Decision | What your paragraph must answer |
|---|---|
| **Liability** | Would you incorporate under a co-op statute for a liability wall, or stay informal? Where might the wall leak? |
| **Taxation** | How does surplus come back (patronage by use), and to whom would it be taxed? Say you would confirm the specifics with a professional. |
| **Ownership and transfer** | Who are the members, what is a membership, and can it be sold? Would you restrict transfer, and why? |
| **Governance** | One member, one vote: how is the board elected, how are big decisions made, and what is your deadlock or minority-protection plan? |

**3. Defend it against a plain corporation, explicitly.** Name the ordinary investor-owned company you are rejecting and say, in the language of the four decisions, why the co-op serves these members better. **Your strongest argument is almost always decision four**: in a corporation, control follows capital (one share, one vote), so whoever puts in the most money runs it; in your co-op, control follows membership (one member, one vote), so the members it exists to serve keep control. Make that argument concretely for your scenario.

**4. Answer the money question honestly.** Say where your co-op's capital comes from (membership shares, retained patronage, member loans, outside debt, a cooperative lender) and **admit the trade**: it cannot sell equity to outside investors without giving away the control that makes it a co-op, so it will grow more slowly than a venture-funded competitor. A piece that pretends the co-op has no cost has not understood the course.

**5. Defend it against demutualization.** In one short paragraph, say how your design guards against the day some future members are offered a windfall to convert the co-op into an investor-owned company and cash out the common capital. (Limited-equity rules, a strong autonomy clause, member education, an asset lock: name at least one and say what it does.)

**6. State the limit.** One clear sentence that your piece is an exercise in reasoning, not legal, tax or financial advice, and that a real decision belongs with licensed professionals.

## Rules you do not get to break

1. **No invented law or figures.** Do not cite a statute section, a tax rule, a fee, or a membership statistic from memory. If your argument needs a specific value, say "I would confirm this at [the primary source]" instead of asserting a number. This is the course's rule and it is the professional habit.
2. **Reason with the four, every time.** Every claim about your design should trace to liability, taxation, ownership and transfer, or governance. If a sentence does not touch one of the four, ask why it is there.
3. **One member, one vote must earn its place.** Do not just assert it is fairer; show, for your specific members, why control-by-membership serves them better than control-by-capital would.
4. **Say it is not advice.** Not as a disclaimer buried at the end, but as an understood frame: you are showing method, not steering a real group.
5. **Where the honest answer is "it depends on facts I do not have," say that.** "It depends on the state's co-op statute," "an accountant would weigh the patronage tax treatment," "the members would have to decide the transfer rule" are professional sentences, not evasions.

## What good looks like

A short piece in which someone who has never taken this course could, from your paragraphs alone, reconstruct what your co-op is, who its members are, how its surplus and its votes work, and why control-by-membership fits these people better than control-by-capital, and in which you never once pretend to know a legal, tax or financial value you would actually have to look up. **You are not proving a co-op is always right. You are proving you can read and defend the form, in the language of the four decisions, and that is the whole course.**

## Sources
- International Co-operative Alliance. (n.d.). *Cooperative identity, values & principles*. https://ica.coop/en/cooperatives/cooperative-identity
- NCBA CLUSA. (n.d.). *7 cooperative principles*. https://ncbaclusa.coop/resources/7-cooperative-principles/
- Birchall, J. (2011). *People-centred businesses: Co-operatives, mutuals and the idea of membership*. Palgrave Macmillan.`,
    },
  ],
};
