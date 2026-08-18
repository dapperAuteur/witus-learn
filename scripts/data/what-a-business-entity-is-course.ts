// Authored "What a Business Entity Actually Is" — the METHOD course of the "How a Business Is
// Formed" learning path (plans/46, Path B, course 1). A cited, high-school-and-up course on
// Learn.WitUS.
//
// WHY THIS COURSE EXISTS (the structural argument, from plans/46)
// --------------------------------------------------------------
// "What They Built: Black Business Districts" (shipped) taught that fraternal orders, industrial
// insurance companies and building-and-loan associations were not colour or charity: they were
// ENTITY TYPES, chosen because of what the law let each one do. That course is a worked example.
// THIS course is the general theory of which it is the example. The organising idea is that an
// entity is a bundle of FOUR decisions:
//     (1) LIABILITY   — who pays the business's debts
//     (2) TAXATION    — who pays the tax on its income
//     (3) OWNERSHIP AND TRANSFER — who owns it, and how ownership moves
//     (4) GOVERNANCE  — who gets to decide
// Every form on earth is a different answer to those four, so a learner who holds the four
// questions can read a form they have never seen, including a foreign one. The primary sources are
// the FORMATION DOCUMENTS: articles of organization/incorporation, the operating agreement, the
// bylaws, and the state's own filing portal.
//
// THE HARD RULE, which is the ethical spine of the file
// -----------------------------------------------------
// NOT LEGAL OR TAX ADVICE, stated plainly and repeatedly. This course teaches what to ASK a lawyer
// or accountant, not the answer for your situation. It invents no statutes, section numbers, tax
// rates or citations. Where it touches law (the S-corp as a federal tax ELECTION, the LLC as a
// creature of STATE law, the check-the-box regime that made tax classification a separate choice)
// it keeps the reference CONCEPTUAL AND ACCURATE and cites the real agency page. Where sources or
// states genuinely differ, it says so and sends the learner to the primary source.
//
// Later courses in Path B cover cooperatives, financing-without-access, and foreign forms in depth.
// This one is deliberately kept to the METHOD.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles in a `## Sources` block are
// the only place a dash could survive, and none of the sources here carry one.

import type { AuthoredCourse } from "./authored-course";

export const WHAT_A_BUSINESS_ENTITY_IS_COURSE: AuthoredCourse = {
  title: "What a Business Entity Actually Is",
  description:
    "A cited, high-school-and-up method course on how a business is formed. It is not legal or tax advice, and it says so throughout: it teaches you what to ASK a lawyer or accountant, not the answer for your situation. The organizing idea is that any business entity is a bundle of FOUR decisions: who pays the debts (liability), who pays the tax (taxation), who owns it and how ownership moves (ownership and transfer), and who gets to decide (governance). Every form on earth, in every country, is a different answer to those four, so a learner who holds the four questions can read a form they have never seen. You will learn to read the FORMATION DOCUMENTS as primary sources: the articles of organization or incorporation, the operating agreement or bylaws, and the state's own filing portal. Then you take a first pass over the US forms (sole proprietorship, partnership, LLC and C-corporation) and settle the single most common misunderstanding in the subject: the S-corp is a TAX ELECTION, not an entity type. This is the general case of which the shipped course 'What They Built' is a worked example, where fraternal orders and building-and-loan associations turned out to be entity choices. The capstone asks you to pick a form for a real scenario and defend it against the four decisions.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · What an entity actually is  (the concept, the four decisions, the not-advice rule)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wbe-what-this-is",
      title: "1 · What this course is for, and the rule it runs on",
      section: "Section 1 · What an entity actually is",
      body: `Most writing about business structure hands you a verdict: "form an LLC," "you should be an S-corp." This course does the opposite. It teaches you to **read** a business form, any business form, the way you would read any other document, so that you can hold your own in a conversation with a lawyer or an accountant instead of just accepting a verdict you cannot check.

## The one rule, stated first because it governs everything after it

**This course is not legal advice and it is not tax advice.** It cannot be. Your situation has facts this course does not know, and the right answer depends on those facts and on the state and country you are in. What this course gives you is not the answer. **It gives you the questions**, and it teaches you to ask them well.

Read that as a promise and as a limit at the same time. The promise: by the end you will be able to open a form you have never seen and know what to look for. The limit: **when a real decision is on the line, you take these questions to a licensed professional**, and this course will remind you of that every time the stakes rise.

Because of that rule, this course also refuses to invent. It names no statute section from memory, quotes no tax rate, and makes up no citation. Where it touches the law it stays **conceptual and accurate**, and it points you at the primary source (the agency page, the state statute, the filing portal) so you can verify rather than trust.

## The idea the whole course is built on

Here it is in one sentence, and everything else is a consequence of it.

**A business entity is a bundle of four decisions.**

1. **Liability.** If the business cannot pay its debts, who does? The business only, or the owners personally?
2. **Taxation.** When the business earns money, who pays the tax on it? The business, the owners, or some mix?
3. **Ownership and transfer.** Who owns the business, and how does a piece of it move from one person to another?
4. **Governance.** Who gets to decide? The owners directly, a manager, a board?

**Every business form that has ever existed, anywhere, is a different set of answers to those four questions.** That is not a simplification for beginners. It is the actual structure of the subject. A sole proprietorship, a Delaware corporation, a German GmbH, a worker cooperative, a nineteenth-century building-and-loan association: each one is a different row in a table whose columns are liability, taxation, ownership, and governance.

## Why this matters, and where it came from

If the four decisions are universal, then **you do not have to memorize a list of forms.** You have to hold four questions. Handed a form you have never seen, in a state you have never worked in or a country whose language you do not read, you ask the four and you can place it. That is the transferable skill this course exists to give you.

There is a worked example already in this catalog. The course **"What They Built: Black Business Districts"** taught that when banks would not lend to Black communities, those communities financed themselves through **fraternal orders, industrial insurance companies, and building-and-loan associations**. Those were not just cultural institutions. **They were entity choices**, picked because of what the law let each form do: a mutual benefit society could pool many small dues into investable reserves, an insurer was legally required to hold assets, a building-and-loan could take deposits and make loans. **Read that course again after this one** and you will see the four decisions running underneath every institution in it.

## What you will do, section by section

| Section | What you learn to do |
|---|---|
| **1. The concept** | See an entity as a separate legal person, and as a bundle of four decisions |
| **2. The documents** | Read the formation documents (articles, operating agreement, bylaws) as primary sources |
| **3. The four, one at a time** | Work liability, taxation, ownership and transfer, and governance in depth |
| **4. The US forms** | Place the common US forms, and settle the S-corp misunderstanding for good |
| **5. The capstone** | Pick a form for a real scenario and defend it against the four decisions |

**One last time, because it is the rule:** this is a course about how to read and how to ask. It is not advice about your business. Keep a lawyer and an accountant in the picture for anything real.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
    },
    {
      slug: "wbe-separate-person",
      title: "2 · An entity is a separate legal person you create",
      section: "Section 1 · What an entity actually is",
      body: `Before the four decisions make sense, you need the thing they are decisions about. So: what is an entity, actually?

## The core idea, which is stranger than it sounds

**A business entity is a separate legal person.** Not a person the way you are, but a person the way the law counts persons: something that can, **in its own name**, own property, owe money, sign a contract, sue, and be sued. When you form an entity you are, quite literally, **creating a new legal person** that did not exist yesterday and that is not the same as you.

That is the move at the center of this whole subject. A business is not automatically a separate person. Some forms make it one and some do not, and **that single difference drives most of the four decisions.** A form where the business is a fully separate person can shield you from its debts, be taxed on its own, be owned in shares, and be governed by a board. A form where the business is just **you, doing business** cannot do any of those things, because there is no second person there to do them.

## Two ways to picture it

- **The wall.** A separate entity puts a wall between the business and the people who own it. Money, debts, lawsuits and taxes on one side do not automatically cross to the other. How high that wall is, and where it has gaps, is Section 3.
- **The container.** An entity is a container you pour a business into. The container has a name, it can hold assets, it can sign its own agreements, and it can outlive the person who created it. A sole proprietorship has no container: the business and the person are the same thing.

## How an entity comes into existence

This is the part beginners get wrong, so hold it carefully:

- **Some entities you have to file for.** An LLC or a corporation legally exists only when **the state accepts a formation document.** Until the state says yes, there is no separate person, no wall, no container. The filing is the birth certificate.
- **Some entities exist the moment you act.** If you start selling things on your own, you are a **sole proprietor** without filing anything, and if you go into business with someone else without filing, you may be a **general partnership** by default, whether you meant to or not. These forms have no wall, because you never built one.

**So the first question you ask about any business is: is there a separate legal person here, or not?** If someone filed something with a state, there probably is. If two people just started working together and split the money, there may not be, and Section 4 will show you why that is riskier than it looks.

## Why "separate person" is not a technicality

A separate legal person can do things a human owner would not want to do personally. It can **owe a debt that the owner does not owe.** It can **be sued without the owner being sued.** It can **keep operating after an owner dies or sells out.** It can **be owned in pieces** by people who have never met. Every one of those is a business superpower, and every one of them exists only because the law is willing to treat the business as its own person. **The four decisions are really four questions about how much of a separate person you want, and on what terms.**

None of this is advice about what you should form. It is the vocabulary you need before the four decisions can mean anything. Keep the lawyer and accountant in the picture for the real choice.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "State the one idea the whole course is built on.",
          answer: "A business entity is a bundle of four decisions: liability (who pays the debts), taxation (who pays the tax), ownership and transfer (who owns it and how ownership moves), and governance (who decides). Every form is a different set of answers to those four.",
        },
        {
          prompt: "Is this course legal or tax advice, and what does it give you instead?",
          answer: "No. It is not legal or tax advice. It gives you the questions to ask, and teaches you to ask them well, then sends you to a licensed professional for any real decision.",
        },
        {
          prompt: "What did the 'What They Built' course reveal that fraternal orders and building-and-loans actually were?",
          answer: "Entity choices, picked because of what the law let each form do, not just cultural institutions. That course is a worked example of the general theory this one teaches.",
        },
        {
          prompt: "Why do you not have to memorise a list of business forms?",
          answer: "Because the four decisions are universal. Holding four questions lets you place any form you have never seen, in any state or country, by asking how it answers each one.",
        },
      ],
    },
    {
      slug: "wbe-four-decisions",
      title: "3 · The four decisions, and how to hold them",
      section: "Section 1 · What an entity actually is",
      body: `You have the concept: an entity is a separate legal person. Now the master frame that carries the rest of the course. Learn this table and you can read a form you have never seen.

## The four decisions in full

| # | Decision | The question in plain words | The extremes it runs between |
|---|---|---|---|
| **1** | **Liability** | If the business cannot pay, who does? | Owners are personally on the hook, or the business alone is |
| **2** | **Taxation** | When it earns, who pays the tax? | The owners pay (pass-through), or the business pays too |
| **3** | **Ownership and transfer** | Who owns it, and how does a share move? | One person, unmovable, or many owners trading shares freely |
| **4** | **Governance** | Who gets to decide? | The owners decide directly, or a board and officers decide |

**A form is just a point in that four-dimensional space.** Move along one axis and you have a different form. That is genuinely all a business form is.

## How the four hang together (and where they come apart)

Beginners assume the four move as a set: pick "small and simple" and you get informal on all four, pick "big and serious" and you get formal on all four. **That assumption is wrong, and unlearning it is half of what this course is for.** The four decisions are **separate levers.** A form can give you a high liability wall and still pass its income straight through to the owners for tax. A business can have hundreds of owners and still be run by two of them. **The most important single fact in the whole subject is that liability and taxation are different questions with different answers**, and Section 4 shows you the form that proves it: the LLC, which lets you choose them almost independently.

## The reading drill

Here is the move you will run for the rest of your life. Handed any form (a US LLC, a French SAS, a co-op, a charter from 1888), you ask, in order:

1. **Liability.** "If this thing owes money it cannot pay, whose house is at risk?"
2. **Taxation.** "When this thing earns a dollar, on whose tax return does that dollar land?"
3. **Ownership and transfer.** "Who are the owners, what does their ownership look like on paper, and can they sell it, and to whom?"
4. **Governance.** "Who actually gets to decide? The owners in a room, or someone they appointed?"

Four questions. **You do not need the form's name, its country, or its century.** The building-and-loan associations in "What They Built" answer these four just as cleanly as a modern startup does. That is the point of a method: it travels.

## Why this beats a list of forms

A list of forms goes stale. New forms get invented (the benefit corporation is younger than most people reading this), old forms fall out of use, and every country has its own set with its own names. **The four decisions do not go stale, because they are the questions the forms are answers to.** Learn the questions and the forms become readable instead of memorisable.

**A reminder that will recur:** knowing how to read a form is not the same as knowing which form is right for you. That second question is legal and tax advice, it depends on facts this course cannot see, and it belongs to a professional. This course makes you a good reader and a good client. It does not make you your own lawyer.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "What is an entity, in the sense this course means it?",
          answer: "A separate legal person: something that can, in its own name, own property, owe money, sign contracts, sue and be sued. Forming one creates a new legal person distinct from you.",
        },
        {
          prompt: "What is the first question you ask about any business, and what does the answer turn on?",
          answer: "Is there a separate legal person here, or not? If someone filed a formation document with a state there probably is; if people just started working together with no filing, there may not be.",
        },
        {
          prompt: "Name two things a separate legal person can do that its human owner might not want to do personally.",
          answer: "Any two of: owe a debt the owner does not owe, be sued without the owner being sued, keep operating after an owner dies or sells, and be owned in pieces by people who have never met.",
        },
        {
          prompt: "What is the difference between the 'wall' picture and the 'container' picture of an entity?",
          answer: "The wall separates the business's money, debts, lawsuits and taxes from the owners personally. The container is a named thing that holds assets, signs its own agreements and can outlive its creator. A sole proprietorship has neither.",
        },
      ],
    },
    {
      slug: "wbe-quiz-what-an-entity-is",
      title: "4 · Quiz: what an entity is",
      section: "Section 1 · What an entity actually is",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "This course is best described as teaching you to:",
            options: [
              "replace hiring any lawyer",
              "ask a lawyer better questions",
              "pick the cheapest legal form",
              "skip the state filing step",
            ],
            correctIndex: 1,
            explanation: "It teaches what to ASK a lawyer or accountant, not the answer for your situation. It is not legal or tax advice.",
            sourceLessonSlug: "wbe-what-this-is",
          },
          {
            prompt: "The course states plainly that it is NOT:",
            options: [
              "a way to read forms",
              "about US forms at all",
              "for brand-new founders",
              "legal or tax advice",
            ],
            correctIndex: 3,
            explanation: "It gives you the questions and sends you to a licensed professional for any real decision. That limit is repeated throughout.",
            sourceLessonSlug: "wbe-what-this-is",
          },
          {
            prompt: "An entity, this course says, is a bundle of how many core decisions?",
            options: ["three", "six", "four", "five"],
            correctIndex: 2,
            explanation: "Liability, taxation, ownership and transfer, and governance. Every form is a different set of answers to those four.",
            sourceLessonSlug: "wbe-four-decisions",
          },
          {
            prompt: "Which of these is NOT one of the four decisions?",
            options: ["liability", "taxation", "profitability", "governance"],
            correctIndex: 2,
            explanation: "Profitability is an outcome, not a structural choice. The four are liability, taxation, ownership and transfer, and governance.",
            sourceLessonSlug: "wbe-four-decisions",
          },
          {
            prompt: "Besides liability and taxation, the other two decisions are:",
            options: [
              "profit and payroll",
              "branding and hiring",
              "ownership and governance",
              "location and size",
            ],
            correctIndex: 2,
            explanation: "Ownership and transfer (who owns it and how a share moves) and governance (who decides) complete the four.",
            sourceLessonSlug: "wbe-four-decisions",
          },
          {
            prompt: "Holding the four questions mainly lets a learner:",
            options: [
              "memorize every US form",
              "read an unfamiliar form",
              "avoid reading any form",
              "file without a state",
            ],
            correctIndex: 1,
            explanation: "The four decisions are universal, so they let you place a form you have never seen, in any state or country.",
            sourceLessonSlug: "wbe-four-decisions",
          },
          {
            prompt: "An entity, in this course's sense, is best described as:",
            options: [
              "the owner's nickname",
              "a federal tax bracket",
              "a business bank account",
              "a separate legal person",
            ],
            correctIndex: 3,
            explanation: "It can own property, owe money, sign contracts, sue and be sued, all in its own name.",
            sourceLessonSlug: "wbe-separate-person",
          },
          {
            prompt: "A separate legal person can, in its own name:",
            options: [
              "cast a ballot to vote",
              "own things and owe debts",
              "carry its own passport",
              "enter into a marriage",
            ],
            correctIndex: 1,
            explanation: "Legal personhood here is about property, contracts and lawsuits, not the civil rights of a human being.",
            sourceLessonSlug: "wbe-separate-person",
          },
          {
            prompt: "The main point of making the business a separate person is to:",
            options: [
              "separate it from its owner",
              "raise the owner's salary",
              "lower the sale price",
              "shorten the tax return",
            ],
            correctIndex: 0,
            explanation: "The separation is what lets the business owe debts, be sued, be owned in pieces and outlive its owner without those things landing on the owner automatically.",
            sourceLessonSlug: "wbe-separate-person",
          },
          {
            prompt: "The 'What They Built' course showed fraternal orders and building-and-loans were, at bottom:",
            options: ["charities only", "entity choices", "federal agencies", "modern startups"],
            correctIndex: 1,
            explanation: "They were picked for what the law let each form do, which makes that course a worked example of the four decisions.",
            sourceLessonSlug: "wbe-what-this-is",
          },
          {
            prompt: "Because the four decisions are universal, the method also helps you read a:",
            options: [
              "US form and no other",
              "purely verbal deal",
              "form from another country",
              "personal tax return",
            ],
            correctIndex: 2,
            explanation: "A foreign form is just a different set of answers to the same four questions, so the questions still place it.",
            sourceLessonSlug: "wbe-four-decisions",
          },
          {
            prompt: "A filed entity, such as an LLC or corporation, legally exists when:",
            options: [
              "the state accepts a filing",
              "you open for business",
              "you print your first logo",
              "you hire your first worker",
            ],
            correctIndex: 0,
            explanation: "The state's acceptance of the formation document is the entity's birth certificate. Before that there is no separate person.",
            sourceLessonSlug: "wbe-separate-person",
          },
          {
            prompt: "Two businesses with the same product but different forms differ because they chose:",
            options: [
              "different logos entirely",
              "different store hours",
              "different price points",
              "different answers to the four",
            ],
            correctIndex: 3,
            explanation: "A form is just a point in the four-dimensional space of liability, taxation, ownership and governance.",
            sourceLessonSlug: "wbe-four-decisions",
          },
          {
            prompt: "When this course mentions a law, it deliberately keeps the reference:",
            options: [
              "conceptual, not exact",
              "exact section numbers",
              "hidden from learners",
              "copied from a blog",
            ],
            correctIndex: 0,
            explanation: "It invents no statute, section number or rate; it stays conceptual and accurate and points you to the primary source to verify.",
            sourceLessonSlug: "wbe-what-this-is",
          },
          {
            prompt: "Which is the clearest sign a business is its own legal person?",
            options: [
              "it has a nice sign",
              "it has some employees",
              "it can be sued by name",
              "it has a live website",
            ],
            correctIndex: 2,
            explanation: "Being sued in its own name, rather than the owner being sued, is a direct sign the business is a separate legal person.",
            sourceLessonSlug: "wbe-separate-person",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Reading the formation documents  (the primary sources)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wbe-primary-sources",
      title: "5 · The formation documents are the primary sources",
      section: "Section 2 · Reading the formation documents",
      body: `You have the four decisions. Now: where are the answers actually written down? Not in a blog, not in a marketing page, not in what a founder tells you at a party. **The answers live in the formation documents**, and this section teaches you to read them as primary sources.

## Why the document beats the summary

"What They Built" taught this discipline on charters and directories, and it transfers exactly: **read the record, not the retelling.** A blog post about "the best structure for freelancers" is a retelling, written by someone who does not know your facts, often written to sell you something. **A formation document is the record.** It is the thing the state actually has on file, the thing a court actually reads, the thing that actually decides who pays and who owns and who governs when there is a dispute. When the summary and the document disagree, **the document wins**, every time.

## The three primary sources you will read

For almost any entity, three documents (or their local equivalents) hold the answers to the four decisions:

| Document | Also called | Public or private? | What it settles |
|---|---|---|---|
| **The public charter** | Articles of organization (LLC), articles of incorporation (corporation), certificate of formation | **Public**, filed with the state | That the entity exists, its name, and the basics the state requires |
| **The internal rulebook** | Operating agreement (LLC), bylaws + shareholder agreement (corporation), partnership agreement | Usually **private**, kept by the owners | Most of ownership, transfer and governance, in detail |
| **The state's filing portal** | Secretary of State business search (names vary by state) | **Public**, searchable online | Whether the entity is real, active, and who is on record |

**Two layers, public and private.** The state has the skeleton (the charter). The owners keep the muscle (the internal rulebook). To answer the four decisions fully you usually need both, and beginners forget the private one exists.

## The habit this section drills

**When you want to know how a business is structured, go to the document, and name which document you read.** Not "I heard it's an LLC" but "the articles of organization filed with the state say it is an LLC, and the operating agreement says the two founders split it sixty-forty and neither can sell without the other's consent." The second version is longer and it is the only one you can defend, which is exactly the lesson "What They Built" drilled about giving every figure an owner, a date and a scope.

## Where states differ, and why that is a feature of the method

Here is a place to be honest: **the details differ by state and by country.** The document that creates an LLC is called "articles of organization" in many US states and "certificate of formation" in others. Filing fees differ, the exact required contents differ, and some states publish more than others. **This course will not give you your state's fee or its exact form, because those are state-specific values that change, and asserting one from memory would break this course's own rule.** What the method gives you instead is **where to look**: your state's business filing office, usually reachable as the Secretary of State business search, publishes the authoritative version. Read it there.

That is not a weakness of the method. It is the method. **The four decisions are universal; the paperwork is local; and the way you bridge the two is by going to the local primary source instead of trusting a remembered detail.** Keep a lawyer in the loop for anything that matters.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Forming a corporation*. https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation`,
      recallContent: [
        {
          prompt: "What are the four decisions, in order, and why do they beat a list of forms?",
          answer: "Liability, taxation, ownership and transfer, and governance. They beat a list because they are the questions the forms are answers to: forms go stale and vary by country, the questions do not.",
        },
        {
          prompt: "Why is it wrong to assume the four decisions move as a single set?",
          answer: "They are separate levers. A form can give a high liability wall and still pass income straight through for tax, or have many owners but be run by two. Liability and taxation especially are different questions with different answers.",
        },
        {
          prompt: "What four questions do you run, in order, on any form you are handed?",
          answer: "If it owes money it cannot pay, whose house is at risk (liability)? When it earns a dollar, on whose return does it land (taxation)? Who owns it, and can they sell (ownership and transfer)? Who actually gets to decide (governance)?",
        },
        {
          prompt: "Why does the method travel to a form's name, country and century you have never seen?",
          answer: "Because the four decisions are the questions every form answers, regardless of its name, jurisdiction or era. An 1888 building-and-loan answers them as cleanly as a modern startup.",
        },
      ],
    },
    {
      slug: "wbe-articles",
      title: "6 · The public charter: articles of organization and incorporation",
      section: "Section 2 · Reading the formation documents",
      body: `Start with the public document, because it is the one anybody can pull up and the one that proves the entity is real. Depending on the form and the state it is called the **articles of organization** (for an LLC), the **articles of incorporation** (for a corporation), or a **certificate of formation**. Different names, same job.

## What the charter actually does

**The charter creates the separate legal person.** Filing it, and the state accepting it, is the moment the entity comes into existence. That is its first and most important function, and it is why Section 1 called the filing a birth certificate. Before the charter is accepted, there is no wall and no container. After, there is.

## What you will find in it, and what you will not

A public charter is usually short. It carries the **skeleton** the state requires and little else:

| Typically in the charter | Usually NOT in the charter |
|---|---|
| The entity's legal name | How the owners split profits |
| Its type (LLC, corporation, and so on) | Who can sell their stake, and to whom |
| Its registered agent and address (who receives legal papers) | The day-to-day decision rules |
| For a corporation, the shares it is authorised to issue | Any private deal between the owners |

**Read that right-hand column, because it is the trap.** Beginners expect the public charter to answer all four decisions. It does not. It reliably answers "does this entity exist and what type is it," and for a corporation it hints at ownership by stating authorised shares. **Most of ownership, transfer and governance is deliberately kept out of the public charter and put in the private rulebook**, which is the next lesson. If you read only the charter, you know the entity is real and you know almost nothing about how it is run.

## Reading a charter against the four decisions

Run the drill on what a charter can tell you:

- **Liability.** The **type** stated in the charter is your first liability signal. "LLC" or "corporation" points toward a liability wall; the absence of any filing points toward no wall. The charter names the form; the form implies the default liability rule.
- **Taxation.** The charter usually says **little to nothing** about tax, because in the US, tax treatment is often a **separate choice made with the IRS**, not with the state (Section 3 and the S-corp lesson return to this). Do not expect the charter to answer decision two.
- **Ownership and transfer.** For a corporation, the charter's **authorised shares** are a first clue to ownership, but the real ownership rules are in the private documents. For an LLC, the charter is usually silent on ownership.
- **Governance.** The charter may name a registered agent and sometimes managers or directors, but the real governance rules live in the bylaws or operating agreement.

## The public part you can check today

Because the charter is public, **you can verify any US company's existence right now**, without permission, through the state's business filing office (commonly the Secretary of State business search). That record tells you whether the entity is real, active or dissolved, and often who filed it and when. **This is the single most under-used research tool in the subject**, and it is the direct descendant of the "go find the primary record" move from the route series and "What They Built."

**A caution consistent with this course's rule:** what the portal shows, and what a charter must contain, differ by state, and this course will not assert your state's specifics from memory. Go to your state's official portal and read what it actually says. And remember: reading a charter tells you what the entity is, not what you should form. That second question is for a professional.

## Sources
- Internal Revenue Service. (n.d.). *Forming a corporation*. https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "Name the three primary sources that hold the answers to the four decisions.",
          answer: "The public charter (articles of organization or incorporation), the internal rulebook (operating agreement, or bylaws plus a shareholder agreement), and the state's filing portal (the Secretary of State business search).",
        },
        {
          prompt: "Why does the document beat the summary when they disagree?",
          answer: "The document is the record the state has on file and the court actually reads; the summary is a retelling by someone who does not know your facts. When they disagree, the document wins every time.",
        },
        {
          prompt: "Which of the two layers, public or private, do beginners forget, and what does it hold?",
          answer: "The private layer, the internal rulebook. It holds most of ownership, transfer and governance in detail. The public charter is only the skeleton the state requires.",
        },
        {
          prompt: "Why will this course not give you your state's exact filing fee or form contents?",
          answer: "Those are state-specific values that change, and asserting one from memory would break the course's own rule. The method sends you to your state's official filing portal to read the authoritative version.",
        },
      ],
    },
    {
      slug: "wbe-internal-rulebook",
      title: "7 · The internal rulebook: operating agreements and bylaws",
      section: "Section 2 · Reading the formation documents",
      body: `The public charter proves the entity exists. **The internal rulebook says how it actually runs**, and it is where most of the four decisions are really settled. For an LLC this is the **operating agreement**. For a corporation it is the **bylaws**, usually alongside a **shareholder agreement**. For a partnership it is the **partnership agreement**. Different names, same job: the private contract among the owners.

## Why the private document carries the weight

The state only needs the skeleton, so the charter is thin. **Everything the owners care about, they put in the rulebook**, because that is where the law lets them customise. Two LLCs with identical one-line charters can be run in completely opposite ways because their operating agreements are opposite. **If you want to know how a business is really structured, this is the document to read**, and it is usually the one outsiders never see, which is exactly why reading it is a skill worth having.

## What the rulebook settles, mapped to the four decisions

This is where three of the four decisions actually get their detail:

- **Ownership and transfer (decision 3).** Who owns what percentage. What an ownership stake is called here (membership interests in an LLC, shares in a corporation). **The transfer rules**: can an owner sell, to whom, and does anyone get a veto or a right of first refusal? These are almost always in the rulebook, not the charter.
- **Governance (decision 4).** Who decides what. In an LLC, whether it is **member-managed** (the owners run it) or **manager-managed** (they appoint a manager). In a corporation, how the **board** is elected and what the **officers** may do. Voting thresholds, deadlock rules, what needs unanimous consent.
- **Money among the owners.** How profits and losses are split, when distributions are made. This is not one of the four decisions by itself, but it is where owners fight most, so the rulebook spends the most words here.

**Notice which decision is mostly absent: liability and taxation are set by the FORM and by tax law, not by the private agreement.** You cannot give yourself a liability wall by writing "we have limited liability" into an operating agreement; the wall comes from validly forming an entity that has one and respecting it. And you cannot rewrite your tax treatment in the rulebook; that is between the entity and the tax authority. **The rulebook is powerful for ownership and governance and nearly powerless for liability and taxation**, and knowing that division is exactly the kind of thing that keeps you from being fooled by a document.

## Reading a rulebook the way a professional does

Three habits, all descendants of the "read the record" discipline:

1. **Find the transfer clause first.** How ownership can move is where the real control lives. A form with a tight transfer clause is a very different business from one with a loose one, even if the charters are identical.
2. **Find who decides, and find deadlock.** In a two-owner business with a fifty-fifty split and no tie-breaker, the rulebook's deadlock clause (or its absence) can matter more than the whole rest of the document.
3. **Match it against the charter and the portal.** If the rulebook names owners the state's record does not, or claims a form the charter does not, you have found a discrepancy, and discrepancies are findings.

**The limit, stated again because the stakes are high here:** a real operating agreement or set of bylaws is a legal instrument, and drafting or signing one is a decision for a lawyer, not for a course. This lesson teaches you to **read** one and know what it is doing. It does not teach you to write your own, and you should not.

## Sources
- Internal Revenue Service. (n.d.). *Forming a corporation*. https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What does the public charter do, and what is it usually silent about?",
          answer: "It creates the separate legal person and states the entity's name and type (and, for a corporation, authorised shares). It is usually silent on profit splits, transfer rules and day-to-day governance, which live in the private rulebook.",
        },
        {
          prompt: "Which decision does the charter's stated type give you a first signal about, and which does it barely address?",
          answer: "The stated type (LLC, corporation) is the first liability signal. The charter says little to nothing about taxation, because in the US tax treatment is often a separate choice made with the IRS, not the state.",
        },
        {
          prompt: "What public tool lets you verify any US company's existence today, and what does it show?",
          answer: "The state's business filing office, commonly the Secretary of State business search. It shows whether the entity is real, active or dissolved, and often who filed it and when.",
        },
        {
          prompt: "Why should you not expect the public charter to answer all four decisions?",
          answer: "It reliably answers only that the entity exists and what type it is. Most of ownership, transfer and governance is deliberately kept out of the public charter and placed in the private rulebook.",
        },
      ],
    },
    {
      slug: "wbe-quiz-reading-documents",
      title: "8 · Quiz: reading the documents",
      section: "Section 2 · Reading the formation documents",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "When a marketing summary and the formation document disagree, which wins?",
            options: ["the summary", "neither one", "the newer one", "the document"],
            correctIndex: 3,
            explanation: "The document is what the state has on file and the court reads. Read the record, not the retelling.",
            sourceLessonSlug: "wbe-primary-sources",
          },
          {
            prompt: "The three primary sources for the four decisions are the charter, the state portal, and the:",
            options: [
              "internal rulebook",
              "founder's blog post",
              "annual sales report",
              "business card set",
            ],
            correctIndex: 0,
            explanation: "The operating agreement or bylaws hold most of ownership, transfer and governance in detail.",
            sourceLessonSlug: "wbe-primary-sources",
          },
          {
            prompt: "The public charter and the private rulebook split into which two layers?",
            options: [
              "old and the new",
              "cheap and expensive",
              "skeleton and the muscle",
              "state and the federal",
            ],
            correctIndex: 2,
            explanation: "The state has the skeleton (the charter); the owners keep the muscle (the internal rulebook).",
            sourceLessonSlug: "wbe-primary-sources",
          },
          {
            prompt: "Filing rules, fees and exact form contents mainly differ by:",
            options: ["the weather", "state", "the founder", "the bank"],
            correctIndex: 1,
            explanation: "The four decisions are universal but the paperwork is local, so you read your own state's official portal rather than trusting a remembered detail.",
            sourceLessonSlug: "wbe-primary-sources",
          },
          {
            prompt: "The single most important thing the public charter does is:",
            options: [
              "list the profit splits",
              "set the tax rate owed",
              "create the legal person",
              "name every past owner",
            ],
            correctIndex: 2,
            explanation: "The state's acceptance of the charter is the moment the separate legal person comes into existence.",
            sourceLessonSlug: "wbe-articles",
          },
          {
            prompt: "Which of these is usually NOT found in the public charter?",
            options: [
              "how owners split profit",
              "the entity's legal name",
              "its registered agent",
              "its type of entity",
            ],
            correctIndex: 0,
            explanation: "Profit splits, transfer rules and governance are kept out of the public charter and placed in the private rulebook.",
            sourceLessonSlug: "wbe-articles",
          },
          {
            prompt: "The public charter says little about taxation because, in the US, tax treatment is often:",
            options: [
              "set by the charter",
              "printed on the logo",
              "fixed by the bank",
              "a choice made with the IRS",
            ],
            correctIndex: 3,
            explanation: "Tax classification is frequently a separate choice made with the tax authority, not the state that issues the charter.",
            sourceLessonSlug: "wbe-articles",
          },
          {
            prompt: "You can verify any US company's existence today, for free, through the:",
            options: [
              "state filing portal",
              "company's own website",
              "local newspaper ad",
              "founder's business card",
            ],
            correctIndex: 0,
            explanation: "The Secretary of State business search shows whether an entity is real, active or dissolved, and often who filed it and when.",
            sourceLessonSlug: "wbe-articles",
          },
          {
            prompt: "For an LLC, the private internal rulebook is called the:",
            options: [
              "shareholder bylaws",
              "operating agreement",
              "articles of the state",
              "certificate of tax",
            ],
            correctIndex: 1,
            explanation: "The operating agreement is the LLC's internal rulebook. A corporation uses bylaws, usually with a shareholder agreement.",
            sourceLessonSlug: "wbe-internal-rulebook",
          },
          {
            prompt: "Most of the detail on ownership, transfer and governance is settled in the:",
            options: [
              "public state charter",
              "private rulebook",
              "annual tax return",
              "business bank file",
            ],
            correctIndex: 1,
            explanation: "The charter is only the skeleton; the operating agreement or bylaws carry the detail the owners actually care about.",
            sourceLessonSlug: "wbe-internal-rulebook",
          },
          {
            prompt: "Which pair is NOT really set by the private rulebook?",
            options: [
              "profit and voting",
              "transfer and governance",
              "managers and officers",
              "liability and taxation",
            ],
            correctIndex: 3,
            explanation: "Liability comes from validly forming and respecting an entity that has a wall; taxation is between the entity and the tax authority. You cannot write either into an operating agreement.",
            sourceLessonSlug: "wbe-internal-rulebook",
          },
          {
            prompt: "In an LLC, the choice between member-managed and manager-managed is a question of:",
            options: ["taxation", "liability", "governance", "the logo"],
            correctIndex: 2,
            explanation: "Who runs the LLC, the owners themselves or an appointed manager, is decision four, governance, and it lives in the operating agreement.",
            sourceLessonSlug: "wbe-internal-rulebook",
          },
          {
            prompt: "A professional reading a rulebook is told to find, first, the:",
            options: [
              "company slogan",
              "office lease term",
              "transfer clause",
              "past sales totals",
            ],
            correctIndex: 2,
            explanation: "How ownership can move is where real control lives, so the transfer clause is read first.",
            sourceLessonSlug: "wbe-internal-rulebook",
          },
          {
            prompt: "You cannot give yourself a liability wall simply by writing 'we have limited liability' into the:",
            options: [
              "operating agreement",
              "state's own statute",
              "federal tax code",
              "court's final ruling",
            ],
            correctIndex: 0,
            explanation: "The wall comes from validly forming an entity that has one and respecting it, not from a sentence in the private agreement.",
            sourceLessonSlug: "wbe-internal-rulebook",
          },
          {
            prompt: "Reading the formation documents is the direct descendant of which earlier course move?",
            options: [
              "guess from the vibe",
              "go find the record",
              "trust the retelling",
              "ask a stranger first",
            ],
            correctIndex: 1,
            explanation: "It is the same 'go find the primary record' discipline the route series and 'What They Built' drilled.",
            sourceLessonSlug: "wbe-primary-sources",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · The four decisions, one at a time
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wbe-liability",
      title: "9 · Decision one: liability, or who pays the debts",
      section: "Section 3 · The four decisions, one at a time",
      body: `The first decision, and the one people usually mean when they say "I should probably form something." **Liability answers a single question: if the business owes money it cannot pay, whose money pays it?**

## The two ends of the axis

- **Unlimited (personal) liability.** The business and the owner are the same legal person, so the business's debts are the owner's debts. If the business is sued or cannot pay, **the owner's personal assets are on the line**: savings, car, sometimes the house. Sole proprietorships and general partnerships sit here by default.
- **Limited liability.** The business is a separate legal person with a wall around it. If it fails, **creditors can reach what the business owns, but generally not the owners' personal assets.** The owner can lose what they put in, and usually no more. LLCs and corporations are built to sit here.

**This is the liability wall from Section 1, made concrete.** Limited liability is the single most common reason people form an entity at all.

## Limited liability is a recent, deliberate invention, not a law of nature

Hold this, because it reframes the whole subject: **limited liability was invented, and relatively recently.** For most of commercial history, if your venture failed, you paid, personally and completely. The idea that an owner could risk only what they invested and walk away from the rest is a **policy choice** that societies made on purpose, to encourage people to start risky ventures. **It can be, and in places has been, made differently.** Treating it as natural is a mistake; it is a lever someone pulled.

This course will not hang that history on a memorized date, because dates are exactly what the course refuses to assert from memory. What matters for the method is the concept: **the wall is granted by law, on conditions, and the conditions matter.**

## The wall has gaps, and pretending it does not is dangerous

Limited liability is real, but it is **not absolute**, and a responsible course has to say so plainly:

- **Personal guarantees.** Lenders to a small business often require the owner to **personally guarantee** the loan. When you sign a personal guarantee, you voluntarily step around the wall for that debt. Many new owners have "limited liability" and a stack of personal guarantees at the same time, and are surprised to learn the guarantees win.
- **Your own wrongful acts.** The wall protects you from the business's debts. It does not turn your own negligence or fraud into someone else's problem.
- **Respecting the entity.** Courts can, in some cases, look past the wall (often called "piercing the veil") when owners treat the entity as a sham: mixing personal and business money, not keeping records, using the company as a personal wallet. **The wall protects owners who treat the entity as a real separate person; it protects much less for owners who do not.**
- **Taxes and specific obligations.** Certain obligations can reach owners personally regardless of the form. Which ones, and when, is exactly the kind of specific question this course sends to a professional.

## Reading liability on any form

Ask: **is there a separate legal person here, and does its form grant a wall?** No filing usually means no wall. A filed LLC or corporation usually means a wall, **subject to the gaps above.** Then ask the follow-up that catches people out: **have the owners signed personal guarantees that step around it?** The form sets the default; the guarantees and the owners' conduct decide how much wall is really left.

**Not advice, said where it matters most:** whether you personally are protected, in your state, for your specific debts, is a legal question with real consequences, and it is precisely the question to take to a lawyer. This lesson teaches you what the wall is and where it leaks. It does not tell you that yours will hold.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "For an LLC, what is the internal rulebook, and name two things it settles.",
          answer: "The operating agreement. It settles ownership percentages and what a stake is called, the transfer rules (who can sell and to whom), and governance (member-managed vs manager-managed, voting and deadlock).",
        },
        {
          prompt: "Which two decisions are NOT really set by the private rulebook, and why?",
          answer: "Liability and taxation. Liability comes from validly forming and respecting an entity that has a wall, not from a clause; taxation is between the entity and the tax authority. You cannot rewrite either in an operating agreement.",
        },
        {
          prompt: "Name two habits a professional uses when reading a rulebook.",
          answer: "Any two of: find the transfer clause first (that is where control lives), find who decides and find the deadlock rule, and match the rulebook against the charter and the state portal to catch discrepancies.",
        },
        {
          prompt: "Why can two LLCs with identical one-line charters be run in opposite ways?",
          answer: "Because their operating agreements can be opposite. The state only needs the skeleton, so nearly everything the owners care about lives in the private rulebook.",
        },
      ],
    },
    {
      slug: "wbe-taxation",
      title: "10 · Decision two: taxation, or who pays the tax",
      section: "Section 3 · The four decisions, one at a time",
      body: `The second decision, and the one where beginners make their biggest error. **Taxation answers: when the business earns a dollar, on whose tax return does that dollar land, and does anyone get taxed twice?**

## The two ends of the axis

- **Pass-through.** The business itself pays no income tax. Its profit "passes through" to the owners, who report it on their **personal** returns and pay tax there. The business files an informational return, but the tax lands on the owners. Sole proprietorships, partnerships, and many LLCs work this way.
- **Entity-level tax.** The business is its own taxpayer and pays tax on its profit. Then, if it distributes profit to owners, **the owners may be taxed again** on what they receive. This is the famous **double taxation**, and it is the classic feature of the C-corporation.

**"Double taxation" is not a scandal; it is a design.** The corporation is a fully separate taxpayer, so its income is taxed to it, and a dividend is separate income taxed to the shareholder. Whether that is bad for a given business depends on facts this course cannot see.

## The big idea: taxation is often a SEPARATE choice from the form

Here is the error to unlearn, and it is the most important idea in this section. **Beginners assume the form dictates the tax.** For part of the US system, that assumption is false, and the whole point of Section 4's S-corp lesson depends on getting this straight now.

In the United States, for many entities, **how you are taxed is a separate election you make with the IRS, not something the state's charter locks in.** The federal rules let many eligible businesses **choose** their tax classification, which is why an LLC can be taxed like a sole proprietorship, like a partnership, or like a corporation, depending on what its owners elect. This regime is often called **"check-the-box,"** because the business effectively checks a box to pick its tax treatment. Those regulations became effective at the start of 1997 (Internal Revenue Service, n.d.-a).

**So decision one (liability) and decision two (taxation) really are separate levers**, which is what Section 1 promised. The clearest proof is the LLC: it can hold a liability wall while its owners pick, within limits, how it is taxed. **Hold this idea, because the single most common misunderstanding in the whole subject, the S-corp, is nothing but this idea applied.**

## Reading taxation on any form

Ask: **when this business earns, does the tax land on the business, on the owners, or both?** Pass-through means the owners; entity-level means the business, with a possible second tax on distributions. Then ask the US follow-up: **is the tax treatment fixed by the form, or is it an election the owners made separately?** For many US entities it is an election, and you cannot know which one without asking.

**This is the lesson where the not-advice rule is loudest.** This course names **no** tax rate, no bracket, no threshold, and no deadline, on purpose, because those are values owned by the tax authority, they change, and asserting one from memory would be exactly the failure this course is built to avoid. **What is the right tax classification for your business is an accountant's question, full stop.** This lesson teaches you the shape of decision two. It does not do your taxes, and neither should you, alone.

## Sources
- Internal Revenue Service. (n.d.-a). *Overview of entity classification regulations* [International practice unit]. https://www.irs.gov/pub/fatca/int_practice_units/ore_c_19_02_01.pdf
- Internal Revenue Service. (n.d.-b). *S corporations*. https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What single question does the liability decision answer?",
          answer: "If the business owes money it cannot pay, whose money pays it: the owners personally (unlimited liability) or the business alone (limited liability, the wall).",
        },
        {
          prompt: "Why is limited liability described as an invention rather than a law of nature?",
          answer: "For most of commercial history a failed venture cost the owner personally and completely. Letting an owner risk only what they invested is a deliberate policy choice made to encourage risky ventures, and it can be made differently.",
        },
        {
          prompt: "Name two ways the liability wall can leak.",
          answer: "Any two of: personal guarantees the owner signs for a loan, the owner's own negligence or fraud, courts piercing the veil when the entity is treated as a sham, and specific obligations (such as certain taxes) that can reach owners regardless of form.",
        },
        {
          prompt: "After confirming a form grants a wall, what follow-up question catches owners out?",
          answer: "Have the owners signed personal guarantees that step around the wall? Many new owners have limited liability and a stack of personal guarantees at once, and the guarantees win for those debts.",
        },
      ],
    },
    {
      slug: "wbe-ownership-transfer",
      title: "11 · Decision three: ownership and transfer",
      section: "Section 3 · The four decisions, one at a time",
      body: `The third decision has two halves that people run together and should not. **Ownership** asks who owns the business and what their ownership looks like on paper. **Transfer** asks how a piece of it moves from one person to another. A form can make ownership easy to hold and hard to move, or the reverse, and the difference shapes the whole business.

## What ownership looks like, by form

Ownership has different names and different shapes depending on the form, and the name tells you something:

| Form | An owner is called | Ownership is measured in |
|---|---|---|
| **Sole proprietorship** | the proprietor | there is one owner and no share to speak of |
| **Partnership** | a partner | a partnership interest set by the agreement |
| **LLC** | a member | a membership interest, often a percentage |
| **Corporation** | a shareholder | shares of stock |

**Shares are the invention that makes wide ownership possible.** Dividing ownership into standardized shares is what lets a business have hundreds or millions of owners who never meet, because a share is a clean, countable, tradeable unit. A partnership interest is not standardized the same way, which is one reason partnerships stay small.

## Transfer is where control actually lives

Read this twice, because it is the counterintuitive part. **How ownership can move often matters more than who owns it today.** Consider:

- **Free transfer.** Public-company shares trade freely; an owner can sell to a stranger without asking anyone. That liquidity is a feature for investors and a loss of control for the business, because you cannot choose your new co-owners.
- **Restricted transfer.** Many private businesses lock transfer down hard: an owner cannot sell without the others' consent, or the other owners get a **right of first refusal**, or a departing owner must sell back to the company on a set formula. This keeps ownership in known hands and is exactly why the transfer clause is the first thing a professional reads in a rulebook.

**The same form can sit at either extreme depending on its private documents.** Two LLCs, one where members can sell to anyone and one where no member can sell without unanimous consent, are structurally very different businesses with identical charters. **Transfer is a private-document decision far more than a form decision.**

## Why this connects to "What They Built"

The building-and-loan associations and mutual benefit societies in that course were, in part, **ownership-and-transfer designs.** A mutual society is owned by its members, and membership does not trade like stock; it is tied to participation. That choice, member ownership rather than tradeable shares, is decision three, and it is the same decision that separates a cooperative from an ordinary corporation. **You will meet it again in the cooperatives course, but you can already read it now with the four questions.**

## Reading ownership and transfer on any form

Ask two questions, not one:

1. **Ownership:** who owns it, what is a stake called, and how is it measured (shares, membership interests, partnership interests)?
2. **Transfer:** can an owner sell, to whom, and who can stop them? Is there a right of first refusal, a consent requirement, a buy-back on exit?

The charter and the state portal give you the first hints; **the real transfer rules are in the rulebook.** And the usual limit applies: how ownership should be split and locked among real people, with real money and real relationships at stake, is a question for a lawyer drafting real documents, not for a course.

## Sources
- Internal Revenue Service. (n.d.). *Forming a corporation*. https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What question does the taxation decision answer, and what are its two ends?",
          answer: "When the business earns a dollar, on whose return does it land? Pass-through (the owners pay on their personal returns, the business pays no income tax) or entity-level (the business pays, and distributions may be taxed again, the double taxation).",
        },
        {
          prompt: "What is the biggest error beginners make about taxation and the form?",
          answer: "Assuming the form dictates the tax. In the US, for many entities, tax treatment is a separate election made with the IRS (the check-the-box regime effective at the start of 1997), so liability and taxation are separate levers.",
        },
        {
          prompt: "Why is 'double taxation' a design rather than a scandal?",
          answer: "A C-corporation is a fully separate taxpayer, so its income is taxed to it, and a dividend is separate income taxed to the shareholder. Whether that is bad for a given business depends on facts a course cannot see.",
        },
        {
          prompt: "Why does the taxation lesson name no tax rate, bracket or deadline?",
          answer: "Those are values owned by the tax authority, they change, and asserting one from memory would break the course's rule. The right tax classification for a business is an accountant's question.",
        },
      ],
    },
    {
      slug: "wbe-governance",
      title: "12 · Decision four: governance, or who decides",
      section: "Section 3 · The four decisions, one at a time",
      body: `The fourth decision is the one people notice last and feel first. **Governance answers: who actually gets to decide?** Not who owns the business (that was decision three) but who has the power to act for it, day to day and on the big questions.

## Ownership and control are not the same thing

Start here, because it is the whole lesson in one line: **owning a business and running a business are different, and the form sets how tightly they are tied.** In some forms the owners decide directly. In others, the owners choose a small group to decide for them and then mostly stay out of it. **A person can own a huge share and control nothing, or own a small share and control everything**, and which one happens is a governance design, written into the rulebook.

## The two ends of the axis

- **Direct governance.** The owners run the business themselves. A **member-managed LLC** works this way: the members make the decisions. A general partnership does too. This is simple and it does not scale: try running anything with two hundred owners all deciding directly.
- **Delegated governance.** The owners appoint deciders and step back. A corporation is the classic case: **shareholders elect a board of directors, the board sets direction and hires officers, and the officers run the company.** A **manager-managed LLC** does a lighter version, where the members appoint a manager. Delegated governance scales, which is why every large company uses some form of it.

## Voting, and the difference that defines a cooperative

How votes are counted is part of governance, and one distinction matters enough to name now:

- **One share, one vote.** In a typical corporation, votes follow shares. Own more, decide more. Capital controls.
- **One member, one vote.** In a cooperative, each member gets one vote regardless of how much they put in. People control, not capital.

**That single difference, one-share-one-vote versus one-member-one-vote, is the line between an ordinary corporation and a cooperative**, and it is pure decision four. The cooperatives course in this path is built on it; you can already see it with the four questions.

## Where governance gets dangerous: deadlock and thin rules

Two failure modes worth flagging, both descendants of reading the rulebook carefully:

- **Deadlock.** Two owners, fifty-fifty, no tie-breaker: the first serious disagreement can freeze the business, because no one can outvote the other. The governance rules (or their absence) decide whether the business survives its founders' first real fight.
- **Vague authority.** If the rulebook does not say clearly who may sign a contract, borrow money, or hire, then either nothing happens or the wrong person acts. **Clear governance is boring right up until the day it is the only thing that matters.**

## Reading governance on any form

Ask: **who decides, for day-to-day matters and for the big ones?** The owners directly (member-managed, partnership), or an appointed layer (board and officers, a manager)? Then ask **how votes are counted** (by share or by head) and **what happens in a tie.** The charter may hint at governance; the real rules are in the bylaws or operating agreement.

**The not-advice rule, one more time:** how to allocate control among real co-owners, and how to guard against deadlock, are decisions with money and relationships riding on them, and they belong in documents a lawyer drafts. This lesson teaches you to read who holds the power. It does not tell you how to hold it.

## Sources
- Internal Revenue Service. (n.d.). *Forming a corporation*. https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What are the two halves of decision three, and how do they differ?",
          answer: "Ownership (who owns the business and what a stake looks like on paper: shares, membership interests, partnership interests) and transfer (how a piece moves from one person to another, and who can stop it).",
        },
        {
          prompt: "Why does how ownership can move often matter more than who owns it today?",
          answer: "Transfer is where control lives. Free transfer gives liquidity but you cannot choose new co-owners; restricted transfer (consent, right of first refusal, buy-back) keeps ownership in known hands. It is set mostly in the private rulebook.",
        },
        {
          prompt: "What makes shares the invention that allows wide ownership?",
          answer: "Shares are a standardized, countable, tradeable unit, so a business can have many owners who never meet. A partnership interest is not standardized the same way, which is one reason partnerships stay small.",
        },
        {
          prompt: "How were the mutual benefit societies in 'What They Built' an ownership-and-transfer design?",
          answer: "They were owned by their members, and membership did not trade like stock; it was tied to participation. Member ownership rather than tradeable shares is decision three, the same choice that separates a cooperative from an ordinary corporation.",
        },
      ],
    },
    {
      slug: "wbe-quiz-four-decisions",
      title: "13 · Quiz: the four decisions",
      section: "Section 3 · The four decisions, one at a time",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The liability decision answers the question:",
            options: [
              "who owns the shares",
              "who signs contracts",
              "who files the taxes",
              "who pays the debts",
            ],
            correctIndex: 3,
            explanation: "If the business owes money it cannot pay, whose money pays it? That is decision one.",
            sourceLessonSlug: "wbe-liability",
          },
          {
            prompt: "Under limited liability, an owner can usually lose:",
            options: [
              "what they put in",
              "their family home",
              "their future wages",
              "nothing they own",
            ],
            correctIndex: 0,
            explanation: "Creditors can generally reach what the business owns, but not the owners' personal assets, so the owner risks their investment and usually no more.",
            sourceLessonSlug: "wbe-liability",
          },
          {
            prompt: "Limited liability is best described as:",
            options: [
              "a law of nature",
              "a religious rule",
              "a policy invention",
              "a banking secret",
            ],
            correctIndex: 2,
            explanation: "It is a deliberate policy choice, granted by law on conditions, made to encourage risky ventures, and it can be made differently.",
            sourceLessonSlug: "wbe-liability",
          },
          {
            prompt: "A lender that makes an owner personally guarantee a loan has, for that debt:",
            options: [
              "raised the tax rate",
              "dissolved the entity",
              "bought the company",
              "stepped around the wall",
            ],
            correctIndex: 3,
            explanation: "A personal guarantee voluntarily steps around the liability wall, and the guarantee wins for that debt.",
            sourceLessonSlug: "wbe-liability",
          },
          {
            prompt: "In a pass-through business, the income tax is paid by the:",
            options: ["business only", "owners", "state office", "customers"],
            correctIndex: 1,
            explanation: "The business pays no income tax; profit passes through to the owners, who report it on their personal returns.",
            sourceLessonSlug: "wbe-taxation",
          },
          {
            prompt: "'Double taxation' is the classic feature of the:",
            options: ["sole prop", "partnership", "C-corporation", "member LLC"],
            correctIndex: 2,
            explanation: "A C-corporation pays tax on its profit, and shareholders may be taxed again on distributions, because the corporation is a fully separate taxpayer.",
            sourceLessonSlug: "wbe-taxation",
          },
          {
            prompt: "The biggest beginner error about taxation is assuming the tax is:",
            options: [
              "always paid twice",
              "set by the customer",
              "the same each year",
              "dictated by the form",
            ],
            correctIndex: 3,
            explanation: "In the US, for many entities, tax treatment is a separate election made with the IRS, not something the form locks in.",
            sourceLessonSlug: "wbe-taxation",
          },
          {
            prompt: "The US regime that lets many entities pick their tax treatment is nicknamed:",
            options: ["pass-the-buck", "check-the-box", "veil-piercing", "double-dip"],
            correctIndex: 1,
            explanation: "Under the check-the-box regulations, effective at the start of 1997, an eligible entity effectively checks a box to choose its classification.",
            sourceLessonSlug: "wbe-taxation",
          },
          {
            prompt: "In a corporation, an owner's stake is measured in:",
            options: ["shares of stock", "membership units", "partner points", "voting halls"],
            correctIndex: 0,
            explanation: "Shares are a standardized, countable, tradeable unit, which is what allows a corporation to have many owners who never meet.",
            sourceLessonSlug: "wbe-ownership-transfer",
          },
          {
            prompt: "A right of first refusal is a feature of a form's:",
            options: [
              "transfer rules",
              "tax election",
              "liability wall",
              "annual report",
            ],
            correctIndex: 0,
            explanation: "It restricts how ownership can move by giving existing owners the chance to buy before an outsider can, which is decision three.",
            sourceLessonSlug: "wbe-ownership-transfer",
          },
          {
            prompt: "Two LLCs with identical charters differ most in ownership because of their:",
            options: [
              "office locations",
              "private transfer rules",
              "company logos",
              "product prices",
            ],
            correctIndex: 1,
            explanation: "Transfer is set mostly in the private rulebook, so one LLC can allow free sale and another require unanimous consent with the same charter.",
            sourceLessonSlug: "wbe-ownership-transfer",
          },
          {
            prompt: "The governance decision answers the question:",
            options: [
              "who pays the tax",
              "who owns the shares",
              "who gets to decide",
              "who owes the debt",
            ],
            correctIndex: 2,
            explanation: "Governance is about who has the power to act for the business, day to day and on the big questions.",
            sourceLessonSlug: "wbe-governance",
          },
          {
            prompt: "In a typical corporation, the shareholders decide by:",
            options: [
              "electing a board",
              "running it daily",
              "one head, one vote",
              "signing the charter",
            ],
            correctIndex: 0,
            explanation: "Shareholders elect a board of directors, which sets direction and hires officers who run the company. That is delegated governance.",
            sourceLessonSlug: "wbe-governance",
          },
          {
            prompt: "The line between an ordinary corporation and a cooperative is:",
            options: [
              "profit versus loss",
              "big versus small",
              "share vote versus member vote",
              "public versus private",
            ],
            correctIndex: 2,
            explanation: "One share one vote lets capital control; one member one vote lets people control. That is pure decision four, governance.",
            sourceLessonSlug: "wbe-governance",
          },
          {
            prompt: "Two owners, fifty-fifty, with no tie-breaker are exposed to:",
            options: ["double tax", "deadlock", "free transfer", "dissolution"],
            correctIndex: 1,
            explanation: "With no way to outvote each other, the first serious disagreement can freeze the business. The governance rules decide whether it survives.",
            sourceLessonSlug: "wbe-governance",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · A first pass over the US forms  (and the S-corp misunderstanding, settled)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wbe-sole-prop-and-partnership",
      title: "14 · The default forms: sole proprietorship and partnership",
      section: "Section 4 · A first pass over the US forms",
      body: `Now take the four questions to the actual US forms. Start with the two you can end up in **without deciding to**, which is exactly why they are dangerous.

## The sole proprietorship: you, doing business

A **sole proprietorship** is one person in business, with no separate entity formed. Read it against the four:

- **Liability:** **unlimited.** There is no separate person and no wall. The business's debts are your debts, and your personal assets are exposed. This is the big one.
- **Taxation:** **pass-through** by default. The business is not a separate taxpayer; you report its profit on your personal return.
- **Ownership and transfer:** one owner, and there is no clean share to sell. You can sell the assets, but the "business" is you, so it does not transfer as a unit the way shares do.
- **Governance:** you decide, because there is no one else.

**The key fact: you become a sole proprietor by acting, not by filing.** Start selling on your own and you are one, with unlimited liability, whether or not you ever thought about structure. Simplicity is its selling point; the missing wall is its cost.

## The general partnership: a sole proprietorship with company

A **general partnership** is two or more people carrying on a business together, and like the sole proprietorship, **you can form one by accident.** Go into business with a friend, split the money, never file anything, and you may be a general partnership by default. Against the four:

- **Liability:** **unlimited, and worse than it looks.** Each general partner is typically on the hook for the partnership's debts, and often for obligations another partner creates in the course of the business. **You can be personally liable for your partner's business decisions.** That surprise ruins friendships.
- **Taxation:** **pass-through.** The partnership files an informational return, but the profit lands on the partners' personal returns.
- **Ownership and transfer:** owners are partners with partnership interests set by the agreement (or by default rules if there is no agreement). Interests do not trade like shares, so partnerships stay small and personal.
- **Governance:** the partners decide, usually together, under the partnership agreement, or under the state's default rules if they never wrote one.

## Why the defaults matter even if you never choose them

These two forms are the **baseline the others are defined against.** Every fancier form is, in part, a fix for the sole proprietorship's and partnership's unlimited liability. And because you can fall into them by accident, **the most important practical point in this lesson is that doing nothing is a choice**: it usually chooses unlimited personal liability. That is not a recommendation to form something else; whether you should is a professional's call. It is a warning that "I haven't set anything up" is not the same as "I have no exposure."

## Reading these two on sight

If someone is in business and **no entity was filed**, you are almost certainly looking at a sole proprietorship (one person) or a general partnership (more than one), which means **unlimited liability and pass-through tax**, with governance and ownership set informally. That single read, done fast, tells you the most important thing about their risk. The formal alternatives are the next three lessons.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "What question does governance answer, and how does it differ from ownership?",
          answer: "Who actually gets to decide and act for the business. Ownership is who owns it; governance is who holds the power. A person can own much and control nothing, or own little and control everything.",
        },
        {
          prompt: "What are the two ends of the governance axis?",
          answer: "Direct governance, where the owners run it themselves (member-managed LLC, general partnership), and delegated governance, where owners appoint deciders and step back (shareholders elect a board that hires officers; a manager-managed LLC).",
        },
        {
          prompt: "What single voting difference separates a cooperative from an ordinary corporation?",
          answer: "One member, one vote (people control) versus one share, one vote (capital controls). It is pure decision four, governance.",
        },
        {
          prompt: "Why is clear governance described as boring until the day it matters?",
          answer: "Deadlock (fifty-fifty with no tie-breaker) can freeze a business, and vague authority means either nothing happens or the wrong person acts. The rules decide whether the business survives its founders' first real fight.",
        },
      ],
    },
    {
      slug: "wbe-llc",
      title: "15 · The LLC: a state-law creature that separates the four",
      section: "Section 4 · A first pass over the US forms",
      body: `The **limited liability company**, or LLC, is the default form for a huge share of new US small businesses, and it is the clearest proof that the four decisions are separate levers. Read it against the four and you see why people reach for it.

## The LLC against the four decisions

- **Liability:** **limited**, by design. That is the "LL" in the name. The LLC is a separate legal person with a wall, subject to the same gaps every wall has (personal guarantees, your own wrongful acts, veil-piercing when you treat it as a sham). Owners are called **members.**
- **Taxation:** **flexible**, and this is the headline. By default a single-member LLC is taxed like a sole proprietorship and a multi-member LLC like a partnership, both **pass-through**. But under the check-the-box regime, the members can **elect** to have the LLC taxed as a corporation instead, and even elect S-corp treatment on top (next lesson). **The LLC lets you hold decision one fixed and move decision two**, which is exactly the "separate levers" idea made real.
- **Ownership and transfer:** members hold **membership interests**, usually stated as percentages, and the transfer rules live in the **operating agreement**. Transfer is typically restricted by default, which suits closely held businesses.
- **Governance:** flexible again. An LLC can be **member-managed** (the owners run it) or **manager-managed** (they appoint a manager), and the operating agreement sets voting and deadlock rules.

**Flexibility on three of the four is the LLC's whole pitch:** a reliable liability wall, plus your choice on taxation and governance. That flexibility is also why an LLC's operating agreement is worth reading closely, because two LLCs can be built completely differently.

## The LLC is a creature of STATE law, and that matters

Here is a fact that reframes the form: **the LLC exists only because state legislatures created it.** It is not a federal entity and it was not handed down from old common law. Each state has its own LLC statute, the forms and fees differ by state, and the LLC in one state is not identical to the LLC in another. **When you read an LLC, you are reading a state-law creature, so the primary source is that state's statute and filing portal**, which is the method from Section 2 applied.

## The LLC is a recent invention, younger than the Rubik's Cube

This lands with almost everyone: **the LLC, the default form for new American small business, is a very recent invention.** Wyoming enacted the first US LLC statute in 1977, the IRS took years to settle how it would be taxed, and it was not until the mid-1990s that every US state had an LLC statute and the form became widely usable (Wyoming State Legislature history as commonly documented; Internal Revenue Service, n.d.). To put the date in perspective, the LLC statute is younger than the Rubik's Cube, which the world met in the 1970s as well.

**Why teach the date? Because it reframes the whole subject from natural law to recent, revisable policy.** Business forms are not eternal categories; they are things legislatures invented, recently, and can change. That is the same lesson limited liability taught in Section 3, and it is why this course teaches you to read forms rather than to worship them.

**And the rule, because a real choice is near:** whether an LLC is right for you, in your state, taxed which way, is a legal and tax question for professionals. This lesson teaches you to read the LLC. It does not tell you to form one.

## Sources
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "How does a sole proprietorship answer the four decisions?",
          answer: "Liability: unlimited, no separate person, no wall. Taxation: pass-through. Ownership: one owner, no clean share to sell. Governance: you decide. And you become one by acting, not by filing.",
        },
        {
          prompt: "Why is a general partnership's unlimited liability worse than it looks?",
          answer: "Each general partner is typically on the hook for the partnership's debts and often for obligations another partner creates in the business, so you can be personally liable for your partner's decisions.",
        },
        {
          prompt: "Why is 'I haven't set anything up' not the same as 'I have no exposure'?",
          answer: "Doing nothing is a choice: it usually chooses a sole proprietorship or general partnership, which means unlimited personal liability. You can fall into those forms by accident.",
        },
        {
          prompt: "How do you read an unfiled business on sight?",
          answer: "No entity filed means a sole proprietorship (one person) or a general partnership (more than one): unlimited liability, pass-through tax, with ownership and governance set informally.",
        },
      ],
    },
    {
      slug: "wbe-c-corp",
      title: "16 · The C-corporation: the separate taxpayer built for investment",
      section: "Section 4 · A first pass over the US forms",
      body: `The **C-corporation** is the form most people picture when they hear "corporation," and it is the one built for raising money from many investors. "C" refers to how it is taxed by default; hold that, because the next lesson turns on it. Read the C-corp against the four decisions.

## The C-corp against the four decisions

- **Liability:** **limited.** Like the LLC, the corporation is a separate legal person with a wall; owners (shareholders) are generally not personally liable for its debts, subject to the usual gaps.
- **Taxation:** **entity-level, and this is what "C" means.** A C-corporation is its own taxpayer: it pays tax on its profit, and when it distributes profit as dividends, **shareholders may be taxed again.** That is the double taxation from Section 3, and it is the C-corp's defining tax feature. Whether it is a drawback depends on facts an accountant weighs.
- **Ownership and transfer:** owners are **shareholders** holding **shares of stock.** Shares are standardized and, in principle, freely transferable, which is precisely why the corporation is the vehicle for wide outside investment. A private corporation can still restrict transfer through a shareholder agreement, but the share is built to move.
- **Governance:** **delegated**, in a standard three-layer shape. **Shareholders elect a board of directors; the board sets direction and hires officers; the officers run the company.** This separation of ownership from control is what lets a corporation have thousands of owners and still function.

## Why the C-corp exists: it is the investment machine

The C-corp's combination, a hard liability wall, standardized tradeable shares, and delegated governance, is exactly what large-scale outside investment needs. **Investors want to buy a clean unit (a share), risk only what they paid (limited liability), and not have to run the company (delegated governance).** The C-corp gives all three, which is why nearly every company that raises significant venture capital or goes public is one. Its cost is the entity-level tax and more formality (a board, meetings, records). **The form is a trade: more tax and more paperwork in exchange for the ability to raise money widely.**

## Reading a C-corp against the others

Set it beside the LLC and the difference is clean:

| Decision | LLC | C-corporation |
|---|---|---|
| **Liability** | limited | limited |
| **Taxation** | flexible, pass-through by default | entity-level by default (the double tax) |
| **Ownership** | membership interests, transfer often restricted | shares, built to be transferable |
| **Governance** | member- or manager-managed | shareholders elect a board that hires officers |

**Liability is the same; the other three diverge**, which is a perfect illustration of the separate-levers idea. An LLC and a C-corp are not "small version" and "big version" of one thing; they are different answers to decisions two, three and four, sharing an answer to decision one.

**Not advice, at the form where the stakes are highest:** choosing a C-corp, especially for a company that will raise money, has large tax and legal consequences and is a decision made with a lawyer and an accountant, often early, because it is expensive to unwind. This lesson teaches you to read a C-corp. It does not tell you to be one.

## Sources
- Internal Revenue Service. (n.d.-a). *Forming a corporation*. https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation
- Internal Revenue Service. (n.d.-b). *Corporations*. https://www.irs.gov/corporations
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What does the LLC's flexibility on taxation prove about the four decisions?",
          answer: "That they are separate levers. The LLC holds a limited-liability wall fixed (decision one) while its members choose how it is taxed (decision two), by default pass-through or by election as a corporation.",
        },
        {
          prompt: "Why does it matter that the LLC is a creature of state law?",
          answer: "It exists only because state legislatures created it; there is no federal LLC. Each state has its own statute, forms and fees, so the primary source when reading an LLC is that state's statute and filing portal.",
        },
        {
          prompt: "How recent is the LLC, and why teach the date?",
          answer: "Wyoming enacted the first US LLC statute in 1977, and every state had one only by the mid-1990s, making it younger than the Rubik's Cube. The date reframes business forms as recent, revisable policy rather than natural law.",
        },
        {
          prompt: "What are an LLC's two management options?",
          answer: "Member-managed, where the owners run it directly, and manager-managed, where the members appoint a manager. The operating agreement sets which, plus voting and deadlock rules.",
        },
      ],
    },
    {
      slug: "wbe-s-corp-election",
      title: "17 · The S-corp is a tax election, not an entity type",
      section: "Section 4 · A first pass over the US forms",
      body: `This is the single most misunderstood point in the entire subject, and it gets its own lesson because getting it wrong quietly corrupts everything else. Here is the sentence to memorize:

**An S-corp is not a type of entity. It is a federal tax election that an eligible entity makes.**

## Why the confusion happens, and why it is wrong

People say "I set up an S-corp" the way they say "I set up an LLC," as if the two were the same kind of thing. **They are not.** An LLC is an **entity**, formed under state law by filing a charter with the state. An "S-corp" is a **tax status**, granted by the federal tax authority when an eligible entity elects to be taxed under a particular part of the Internal Revenue Code (the part called Subchapter S, which is where the "S" comes from). **One is a state-law creature; the other is a federal tax choice laid on top of it.** They answer different decisions: the entity answers liability and governance; the election answers taxation.

Run it through the four decisions and the confusion dissolves:

| Decision | Set by the ENTITY (LLC, corporation) | Set by the S ELECTION |
|---|---|---|
| **Liability** | yes, the entity has the wall | no, the election does nothing to liability |
| **Taxation** | the default | this is the whole point of the election |
| **Ownership** | yes, the entity defines it | the election adds eligibility limits |
| **Governance** | yes, the entity defines it | no |

**The S election touches exactly one of the four decisions, taxation, and leaves the other three to the entity underneath it.** That is why "S-corp" cannot be an entity type: an entity type has to answer all four, and the S election answers one.

## What the S election actually does

An eligible entity (commonly an LLC or a corporation that meets the requirements) can **elect** S treatment by filing an election with the IRS. Broadly, the effect is that the business is taxed as a **pass-through**: profit flows to the owners rather than being taxed at the entity level, which avoids the C-corporation's double tax, while the business keeps the liability and governance of whatever entity it actually is. There are **eligibility limits** (for example, caps on the number and type of owners) that this course states only in the general, because the specifics are federal tax rules that change and that this course refuses to assert from memory (Internal Revenue Service, n.d.-a).

**So the honest description of a business "that is an S-corp" is a two-part sentence:** it is *some entity* (usually an LLC or a corporation), *and* it has *made the S election* for tax. If you only heard "S-corp," you do not yet know what the underlying entity is, which means **you do not yet know its liability or governance**, and you have to ask.

## Why this is the load-bearing lesson

Get this right and the separate-levers idea from the whole course clicks into place: **the entity is one decision-bundle, and the tax election is a separate choice you can bolt on.** Get it wrong and you will keep believing the form dictates the tax, which is the exact error Section 3 warned about. **The S-corp is not an exception to the four decisions. It is the four decisions caught in the act of separating**, with taxation pulling away from the entity that sets the other three.

**And the not-advice rule is at maximum volume here**, because this is where people hurt themselves with half-knowledge. Whether to make an S election, whether your entity is eligible, and what it would do to your taxes are questions with real money attached and real deadlines, and they are an accountant's to answer. This lesson teaches you what the S-corp *is*, so you stop mis-reading it. It does not tell you to elect it.

## Sources
- Internal Revenue Service. (n.d.-a). *S corporations*. https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations
- Internal Revenue Service. (n.d.-b). *About Form 2553, Election by a Small Business Corporation*. https://www.irs.gov/forms-pubs/about-form-2553
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "How does the C-corporation answer the four decisions?",
          answer: "Liability: limited. Taxation: entity-level, the double tax, which is what 'C' means. Ownership: shareholders holding transferable shares. Governance: delegated, shareholders elect a board that hires officers.",
        },
        {
          prompt: "Why does the C-corp exist, and what is its trade?",
          answer: "It is the investment machine: a hard liability wall, standardized tradeable shares, and delegated governance are exactly what wide outside investment needs. The trade is entity-level tax and more formality in exchange for the ability to raise money widely.",
        },
        {
          prompt: "Set beside each other, where do the LLC and the C-corp agree and where do they diverge?",
          answer: "They agree on liability (both limited) and diverge on taxation, ownership and governance. They are different answers to decisions two, three and four, not a small version and a big version of one thing.",
        },
        {
          prompt: "What does 'freely transferable shares' let a corporation do?",
          answer: "Have thousands of owners who never meet, because a share is a clean, standardized, tradeable unit, which is why the corporation is the vehicle for wide outside investment.",
        },
      ],
    },
    {
      slug: "wbe-quiz-us-forms",
      title: "18 · Quiz: the US forms",
      section: "Section 4 · A first pass over the US forms",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "You become a sole proprietor by:",
            options: [
              "acting, not filing",
              "filing with a state",
              "electing with the IRS",
              "signing a charter",
            ],
            correctIndex: 0,
            explanation: "Start selling on your own and you are one, with unlimited liability, whether or not you ever thought about structure.",
            sourceLessonSlug: "wbe-sole-prop-and-partnership",
          },
          {
            prompt: "A sole proprietorship's liability is:",
            options: ["limited", "elected", "delegated", "unlimited"],
            correctIndex: 3,
            explanation: "There is no separate person and no wall, so the business's debts are the owner's debts and personal assets are exposed.",
            sourceLessonSlug: "wbe-sole-prop-and-partnership",
          },
          {
            prompt: "In a general partnership, a partner can be personally liable for:",
            options: [
              "only their own acts",
              "nothing at all",
              "a partner's decisions",
              "just the filing fee",
            ],
            correctIndex: 2,
            explanation: "Each general partner is typically on the hook for the partnership's debts and often for obligations another partner creates in the business.",
            sourceLessonSlug: "wbe-sole-prop-and-partnership",
          },
          {
            prompt: "For a business owner, doing nothing to set up a form usually chooses:",
            options: [
              "a tax-free status",
              "a public offering",
              "corporate governance",
              "unlimited liability",
            ],
            correctIndex: 3,
            explanation: "No filing means a sole proprietorship or general partnership by default, which carries unlimited personal liability.",
            sourceLessonSlug: "wbe-sole-prop-and-partnership",
          },
          {
            prompt: "The 'LL' in LLC refers to its:",
            options: [
              "limited liability",
              "large ledger",
              "local license",
              "legal literacy",
            ],
            correctIndex: 0,
            explanation: "The LLC is a separate legal person with a liability wall, subject to the usual gaps every wall has.",
            sourceLessonSlug: "wbe-llc",
          },
          {
            prompt: "The LLC best proves that the four decisions are:",
            options: [
              "always the same",
              "set by the state",
              "never movable",
              "separate levers",
            ],
            correctIndex: 3,
            explanation: "An LLC can hold a liability wall fixed while its members choose, within limits, how it is taxed and governed.",
            sourceLessonSlug: "wbe-llc",
          },
          {
            prompt: "The LLC is a creature of:",
            options: ["state law", "federal law", "common law", "tax law"],
            correctIndex: 0,
            explanation: "It exists only because state legislatures created it. There is no federal LLC, and each state has its own statute.",
            sourceLessonSlug: "wbe-llc",
          },
          {
            prompt: "The first US LLC statute was enacted in Wyoming in:",
            options: ["1955", "1977", "1997", "2010"],
            correctIndex: 1,
            explanation: "Wyoming enacted it in 1977, and every state had one only by the mid-1990s, making the LLC younger than the Rubik's Cube.",
            sourceLessonSlug: "wbe-llc",
          },
          {
            prompt: "The 'C' in C-corporation refers to its default:",
            options: ["capital rules", "charter class", "tax treatment", "company size"],
            correctIndex: 2,
            explanation: "A C-corporation is its own taxpayer and pays entity-level tax, with a possible second tax on dividends.",
            sourceLessonSlug: "wbe-c-corp",
          },
          {
            prompt: "The C-corporation is the vehicle built for:",
            options: [
              "wide outside investment",
              "avoiding all tax",
              "one-person shops",
              "skipping the board",
            ],
            correctIndex: 0,
            explanation: "A hard wall, standardized tradeable shares, and delegated governance are exactly what large-scale outside investment needs.",
            sourceLessonSlug: "wbe-c-corp",
          },
          {
            prompt: "Set beside each other, the LLC and C-corp share the same answer on:",
            options: ["taxation", "liability", "ownership", "governance"],
            correctIndex: 1,
            explanation: "Both give limited liability; they diverge on taxation, ownership and governance.",
            sourceLessonSlug: "wbe-c-corp",
          },
          {
            prompt: "The single most misunderstood point in the subject is that an S-corp is:",
            options: [
              "an entity type",
              "a state charter",
              "a tax election",
              "a kind of bank",
            ],
            correctIndex: 2,
            explanation: "It is a federal tax election an eligible entity makes, not a type of entity formed with a state.",
            sourceLessonSlug: "wbe-s-corp-election",
          },
          {
            prompt: "The S election touches which of the four decisions?",
            options: [
              "liability only",
              "taxation only",
              "governance only",
              "all four at once",
            ],
            correctIndex: 1,
            explanation: "It changes only taxation, and leaves liability, ownership and governance to the entity underneath it.",
            sourceLessonSlug: "wbe-s-corp-election",
          },
          {
            prompt: "If you hear only that a business 'is an S-corp,' you still do not know its:",
            options: [
              "tax status",
              "S election",
              "underlying entity",
              "federal choice",
            ],
            correctIndex: 2,
            explanation: "The S-corp is a tax status bolted onto some entity, so you must still ask what the entity is to know its liability and governance.",
            sourceLessonSlug: "wbe-s-corp-election",
          },
          {
            prompt: "The 'S' in S-corp comes from:",
            options: [
              "small business size",
              "the state of filing",
              "a single shareholder",
              "a subchapter of the code",
            ],
            correctIndex: 3,
            explanation: "It refers to Subchapter S of the Internal Revenue Code, the part under which the election is made.",
            sourceLessonSlug: "wbe-s-corp-election",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The capstone  (choose a form for a scenario and defend it against the four)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wbe-capstone",
      title: "19 · Capstone: choose a form and defend it against the four",
      section: "Section 5 · Choose a form and defend it",
      lessonType: "assignment",
      body: `You have the method: an entity is a bundle of four decisions, the answers live in the formation documents, and you can now read the common US forms and the S election. This capstone asks you to **use** the method, not to give advice.

## The assignment

Pick **one scenario** below (or write your own that is just as concrete). In **700 to 1,100 words**, **choose a plausible form for it and defend that choice against the four decisions**, then defend it against **one specific alternative** you rejected. The deliverable is an argument, not a recommendation to a real person.

**Read this line twice, because it is the point of the assignment and the rule of the course:** you are not giving legal or tax advice, and you must say so in your piece. You are demonstrating that you can *reason with the four decisions*. A real version of this choice, for a real business, goes to a lawyer and an accountant, and your piece should say that in as many words.

## The scenarios

1. **Two friends, a food cart.** Two people want to sell food from a cart on weekends, splitting everything evenly. Low money, real risk of someone slipping and suing.
2. **A solo freelance designer.** One person doing design work from home, a handful of clients, wants to look professional and limit personal exposure.
3. **A startup that will raise money.** Three founders building software they intend to fund with outside investors within a year, everyone expecting to trade shares and hire fast.
4. **A neighborhood grocery the shoppers want to own.** A group of residents wants to run a grocery where each member gets an equal say regardless of how much they put in.

## What your piece must contain

**1. Name the form, up front.** One sentence: the form you are choosing and, if relevant, whether a tax election rides on top of it. No suspense.

**2. Defend it against all four decisions, one at a time.** A short paragraph each, in order:

| Decision | What your paragraph must answer |
|---|---|
| **Liability** | Who pays if the business cannot? Does your form put up a wall, and where might that wall leak for this scenario (a personal guarantee, thin records)? |
| **Taxation** | On whose return does the profit land? Is the tax treatment set by the form or by a separate election, and does that matter here? |
| **Ownership and transfer** | Who owns it, what is a stake called, and can an owner leave or sell? Does your scenario need tight transfer or loose? |
| **Governance** | Who decides? Direct or delegated? What is your deadlock plan if owners are even? |

**3. Defend it against one specific alternative.** Name a different form you seriously considered and say, in the language of the four decisions, why you rejected it for this scenario. "I chose X over Y because on decision two, Y would have..." Be specific; a real alternative, a real reason.

**4. Point at the primary source.** Say which document or portal you would actually read to confirm the form works in a real state (the state's filing portal, the articles, the operating agreement or bylaws), because the four decisions are universal but the paperwork is local.

**5. State the limit.** One clear sentence that your piece is an exercise in reasoning, not legal or tax advice, and that a real decision belongs with a licensed professional.

## Rules you do not get to break

1. **No invented law.** Do not cite a statute section, a tax rate, a fee, an income threshold or a deadline from memory. If your argument needs a specific value, say "I would confirm this at [the primary source]" instead of asserting a number. This is the course's rule and it is the professional habit.
2. **Reason with the four, every time.** Every claim about your form should trace to liability, taxation, ownership and transfer, or governance. If a sentence does not touch one of the four, ask why it is there.
3. **The alternative must be real.** Rejecting "doing nothing" or "a made-up form" does not count. Pick a form from Section 4 and argue against it honestly.
4. **Say it is not advice.** Not as a disclaimer buried at the end, but as an understood frame: you are showing method, not steering a person.
5. **Where the honest answer is 'it depends on facts I do not have,' say that.** "It depends on the state," "it depends on whether they take outside money," "an accountant would weigh this" are professional sentences, not evasions.

## What good looks like

A short piece in which someone who has never taken this course could, from your four paragraphs alone, reconstruct what the form is and why it fits, and in which you never once pretend to know a legal or tax value you would actually have to look up. **You are not proving you know the answer. You are proving you know the questions, and that is the whole course.**

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.-a). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures
- Internal Revenue Service. (n.d.-b). *S corporations*. https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations`,
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
