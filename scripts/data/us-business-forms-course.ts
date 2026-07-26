// Authored "The US Forms: Sole Prop to Corporation" — course 2 of the "How a Business Is Formed"
// learning path (plans/46, Path B, course 2). A cited, high-school-and-up course on Learn.WitUS.
//
// WHY THIS COURSE EXISTS (the structural argument, from plans/46)
// --------------------------------------------------------------
// Course 1, "What a Business Entity Actually Is," taught the METHOD: an entity is a bundle of FOUR
// decisions (liability, taxation, ownership and transfer, governance), and you read a form by
// reading its formation documents. THIS course does not re-derive the method. It APPLIES the method
// across the actual US menu of forms, one form at a time:
//     the unincorporated defaults (sole proprietorship, general partnership),
//     the two partnership variants that add a wall (limited partnership, LLP),
//     the LLC (the modern default),
//     the S-corp ELECTION (a federal tax election, NOT an entity type: its own full lesson),
//     the C-corporation,
//     the nonprofits (501(c)(3) vs (c)(4) vs (c)(6)), and
//     the benefit corporation (a legal form) vs the Certified B Corp (a private certification).
//
// THE ORGANISING NEW IDEA for course 2 (lesson 3, the spine of the whole file):
// the "list of business types" most people carry mixes THREE DIFFERENT KINDS OF THING:
//     (a) an ENTITY, created under state law, which answers all four decisions;
//     (b) a TAX ELECTION or tax STATUS, laid on top of an entity by the federal tax authority,
//         which answers only ONE decision (taxation) and leaves the other three to the entity; and
//     (c) a private CERTIFICATION, a badge from a private organisation, which answers NONE of the
//         four by itself.
// The S-corp is (b). The 501(c) exemptions are (b). The Certified B Corp is (c). The benefit
// corporation is (a). Holding that three-way distinction dissolves the two biggest confusions in
// the subject: "S-corp is an entity type" and "benefit corporation = B Corp."
//
// THE HARD RULE, which is the ethical spine of the file
// -----------------------------------------------------
// NOT LEGAL OR TAX ADVICE, stated plainly and repeatedly. This course teaches what to ASK. It
// invents no statute section, tax rate, threshold or filing fee from memory. Where it touches law
// (the S election under Subchapter S, the check-the-box regime, the LLC and the benefit corporation
// as creatures of STATE law, the 501(c) categories) it stays CONCEPTUAL AND ACCURATE and cites the
// real agency page. Where states or accounts differ (the LP "control rule," the scope of the LLP
// shield, the name and availability of the benefit-corporation form) it SAYS SO and routes the
// learner to the state's Secretary of State or the IRS. It does not contradict course 1; it builds
// on it.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles in a `## Sources` block are
// the only place a dash could survive, and none of the sources here carry one.

import type { AuthoredCourse } from "./authored-course";

export const US_BUSINESS_FORMS_COURSE: AuthoredCourse = {
  title: "The US Forms: Sole Prop to Corporation",
  description:
    "A cited, high-school-and-up survey of the US business forms, and the direct sequel to 'What a Business Entity Actually Is.' It is not legal or tax advice, and it says so throughout: it teaches you what to ASK a lawyer or accountant, not the answer for your situation. Course 1 gave you the method, that any entity is a bundle of FOUR decisions (who pays the debts, who pays the tax, who owns it and how ownership moves, and who decides). This course applies that method across the actual US menu: the sole proprietorship and general partnership you can fall into without filing, the limited partnership and the LLP that add a liability wall, the LLC that became the modern default, the C-corporation built to raise money, and the nonprofits, where 501(c)(3), (c)(4) and (c)(6) are three different deals with three different rules on donations and politics. Two ideas get a full lesson each because they are the most misunderstood in the subject. First, the S-corp is a TAX ELECTION, not an entity type: it changes only how a business is taxed and leaves liability, ownership and governance to the entity underneath it. Second, a benefit corporation (a legal form a state recognises) is not the same thing as a Certified B Corp (a private certification granted by the nonprofit B Lab), two different things that most content blurs. The organising insight is that a real menu mixes three kinds of thing, an entity, a tax status, and a private certification, and telling them apart is most of the skill. The capstone asks you to match a real scenario to a form and defend it against the four decisions, and against a specific alternative you rejected.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · How to read the US menu  (recap the four decisions; the three-kinds-of-thing frame)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "usf-recap-and-rule",
      title: "1 · What this course surveys, and the rule it still runs on",
      section: "Section 1 · How to read the US menu",
      body: `This is the second course in the "How a Business Is Formed" path, and it assumes the first one. Course 1, **"What a Business Entity Actually Is,"** taught a method: any business entity is a bundle of **four decisions**, and you read a form by reading its formation documents rather than trusting a summary. **This course does not re-teach that method. It uses it**, walking the actual US menu of forms and filling in the four decisions for each one.

## The one rule, restated first because it still governs everything

**This course is not legal advice and it is not tax advice.** It cannot be. The right form for a real business depends on facts this course does not know, and on the state you are in. What this course gives you is the ability to **read the menu**: to know what each form is, what question it answers, and what to ask a professional before you pick one. Every time the stakes rise, it will remind you to take the decision to a licensed lawyer or accountant.

Because of that rule, this course keeps its promise from course 1: **it invents nothing.** It names no statute section, quotes no tax rate, and makes up no filing fee. Where the law matters, it stays **conceptual and accurate** and points you at the primary source, the state's Secretary of State or the IRS, so you can verify rather than trust. Where states genuinely differ, it says so and sends you to look.

## The menu you are about to read

Here is the whole survey in one table. Notice that the rows are not all the same kind of thing, which is the single most important idea in the course and the subject of lesson 3.

| Form | What it is, in one line |
|---|---|
| **Sole proprietorship** | One person in business, no separate entity, no wall |
| **General partnership** | Two or more people in business, no wall, formed by acting |
| **Limited partnership (LP)** | A managing general partner plus passive limited partners |
| **Limited liability partnership (LLP)** | A partnership where partners get a liability shield |
| **LLC** | The flexible, limited-liability default for new small business |
| **S-corp election** | Not an entity: a federal tax election laid on an entity |
| **C-corporation** | The separate taxpayer built to raise money widely |
| **Nonprofit, 501(c)(3), (c)(4), (c)(6)** | A no-owner entity plus a federal tax-exempt status |
| **Benefit corporation** | A legal corporate form with a public-benefit purpose |
| **Certified B Corp** | Not an entity: a private certification from B Lab |

Two of those rows, the **S-corp election** and the **Certified B Corp**, are printed here on purpose next to the entities they are constantly confused with, because settling those two confusions is half of what this course is for.

## What you will do, section by section

| Section | What you learn to read |
|---|---|
| **1. How to read the menu** | Recap the four decisions; separate entity, tax status, and certification |
| **2. The unincorporated forms** | Sole proprietorship, general partnership, LP, and LLP |
| **3. The LLC and the S election** | The modern default, and the tax election people mistake for an entity |
| **4. Corporations and nonprofits** | The C-corp, and the 501(c)(3) / (c)(4) / (c)(6) distinctions |
| **5. Benefit corporation vs B Corp** | A legal form and a private certification, told apart |
| **6. The capstone** | Match a real scenario to a form and defend it against the four |

**One last time, because it is the rule:** this is a course about how to read a menu and how to ask. It is not advice about your business. Keep a lawyer and an accountant in the picture for anything real.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
    },
    {
      slug: "usf-four-decisions-recap",
      title: "2 · The four decisions, used as columns",
      section: "Section 1 · How to read the US menu",
      body: `Course 1 spent five lessons deriving the four decisions and proving they are separate levers. This course takes that as settled and turns the four into a **reading tool**: four columns you fill in for any form on the menu. Here they are, compressed into the table you will use for the rest of the course.

## The four decisions, as a reading grid

| # | Decision | The question you ask the form | The two ends |
|---|---|---|---|
| **1** | **Liability** | If it owes money it cannot pay, whose money pays? | Owners personally, or the business alone (the wall) |
| **2** | **Taxation** | When it earns a dollar, on whose return does it land? | The owners (pass-through), or the business too (entity-level) |
| **3** | **Ownership and transfer** | Who owns it, and can a share move? | One owner, unmovable, or many owners trading freely |
| **4** | **Governance** | Who actually gets to decide? | The owners directly, or a board and officers |

**A form is just one row filled across those four columns.** That is the whole trick, and course 1 earned it. From here on, every lesson fills the row for one form.

## The reading drill, applied to the menu

For each form ahead, run the four questions in order and write the answer in plain words:

1. **Liability.** Is there a separate legal person with a wall, or not? A filing usually means a wall; no filing usually means none.
2. **Taxation.** Pass-through to the owners, or a tax at the entity level, and is that fixed by the form or chosen by a separate election?
3. **Ownership and transfer.** What is an owner called here, what is a stake called, and can an owner sell, and to whom?
4. **Governance.** Do the owners run it directly, or do they appoint someone, and how are votes counted?

**Two reminders course 1 proved, because the US forms lean on them hard:**

- **Liability and taxation are separate questions.** The clearest proof is the LLC, which holds a wall while letting owners choose the tax. Keep the two columns apart in your head or the S-corp lesson will not land.
- **Ownership and transfer is set mostly in the private rulebook.** Two businesses in the same form can be built oppositely. The form sets the default; the operating agreement or bylaws set the detail.

## Why the grid beats a memorised list

You are about to meet ten-odd rows. **Do not memorise them as a list.** A list goes stale, varies by state, and does not travel to a foreign form. The grid does not, because the four columns are the questions the forms are answers to. If you finish this course able to fill the four columns for any form you are handed, you have the transferable skill, and the specific US names are just this country's labels on a universal set of choices.

And the limit, one more time: filling the grid tells you what a form **is**, not what you **should** form. That second question depends on facts this course cannot see, and it belongs to a professional.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "What did course 1 teach, and what does this course do with it?",
          answer: "Course 1 taught the method: an entity is a bundle of four decisions (liability, taxation, ownership and transfer, governance), read from its formation documents. This course does not re-teach the method; it applies it across the actual US menu of forms.",
        },
        {
          prompt: "Is this course legal or tax advice, and what does it give you instead?",
          answer: "No. It gives you the ability to read the menu: what each form is, what question it answers, and what to ask a professional before picking one. Any real decision goes to a licensed lawyer or accountant.",
        },
        {
          prompt: "Which two rows on the menu are printed next to the entities they are confused with, and why?",
          answer: "The S-corp election (confused with an entity) and the Certified B Corp (confused with a benefit corporation). Settling those two confusions is half of what the course is for.",
        },
        {
          prompt: "Why does the course invent no statute section, tax rate, or filing fee?",
          answer: "Those are values owned by external systems that change, so asserting one from memory would break the course's rule. It stays conceptual and accurate and routes you to the primary source (the Secretary of State or the IRS) to verify.",
        },
      ],
    },
    {
      slug: "usf-three-kinds-of-thing",
      title: "3 · Entity, tax status, certification: three different things",
      section: "Section 1 · How to read the US menu",
      body: `This is the lesson the whole course turns on. Ask most people to list the "types of business" and you will hear a jumble: "LLC, S-corp, nonprofit, B Corp, C-corp, partnership." That list sounds like one category. **It is not.** It secretly mixes **three different kinds of thing**, and almost every confusion in the subject comes from treating them as one. Learn to sort the menu into three piles and the hard lessons ahead become easy.

## The three piles

**Pile one: an ENTITY.** A legal form, created under state law (or arising by default when you just start doing business). An entity answers **all four decisions**: it sets liability, it has a default tax treatment, it defines ownership, and it fixes governance. Sole proprietorships, partnerships, LLCs, corporations, and benefit corporations are entities. **This is the pile that actually is a "type of business."**

**Pile two: a TAX STATUS you elect.** Not a business at all, but a **tax treatment laid on top of an entity** by the federal tax authority. It answers **one decision, taxation**, and leaves the other three to the entity underneath. The **S-corp election** is this. So is a **501(c) tax-exempt status** for a nonprofit. You cannot "be" only a tax status any more than you can be only a coat of paint; there has to be an entity under it.

**Pile three: a private CERTIFICATION.** A **badge granted by a private organisation**, not by any government. It answers **none of the four decisions** by itself. A **Certified B Corp** is this: a certification from a nonprofit called B Lab. It says the business met a private standard. It does not change what the business legally is.

## The one table to keep

| Kind of thing | Who confers it | How many of the four decisions it sets | Menu examples |
|---|---|---|---|
| **Entity** | The state (or default) | All four | Sole prop, partnership, LLC, C-corp, benefit corp |
| **Tax status you elect** | The federal tax authority | One (taxation) | S-corp election, 501(c) exemption |
| **Private certification** | A private organisation | None | Certified B Corp |

**Read the middle and bottom rows twice.** A tax status and a certification each ride on an entity; neither is an entity. That is why two sentences you will hear constantly are both broken:

- **"I set up an S-corp."** Incomplete. An S-corp is a tax status. Set up on *what*? Until you name the entity underneath (usually an LLC or a corporation), you do not know its liability or its governance.
- **"We are a B Corp, so we are a benefit corporation."** False. One is a private certification; the other is a legal entity form. A company can hold one, both, or neither, and they are conferred by completely different bodies.

## Why this frame is the spine of the course

Every hard lesson ahead is really this frame applied once:

- The **S-corp lesson** is pile two: a tax status people mistake for pile one.
- The **nonprofit lesson** is pile one plus pile two: a no-owner entity, with a 501(c) tax status bolted on.
- The **benefit corporation vs B Corp lesson** is pile one versus pile three: a legal form set beside a private badge.

So when a form confuses you, **ask which pile it is in first.** Is this a legal entity the state creates, a tax status you elect, or a private certification you earn? That single question, asked before any other, unlocks the rest. And it keeps the not-advice rule intact, because sorting the piles is reading, not advising: which pile a thing is in is a fact you can check, not a recommendation you are making.

## Sources
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures
- Internal Revenue Service. (n.d.). *Types of tax-exempt organizations*. https://www.irs.gov/charities-non-profits/types-of-tax-exempt-organizations
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What are the four decisions, and how are they used in this course?",
          answer: "Liability, taxation, ownership and transfer, and governance. They are used as four columns you fill in for each form on the menu. A form is just one row filled across the four.",
        },
        {
          prompt: "Which two reminders from course 1 do the US forms lean on hardest?",
          answer: "That liability and taxation are separate questions (the LLC proves it), and that ownership and transfer is set mostly in the private rulebook, so two businesses in the same form can be built oppositely.",
        },
        {
          prompt: "Why should you not memorise the menu as a list?",
          answer: "A list goes stale, varies by state, and does not travel to a foreign form. The four-column grid does, because the columns are the questions every form answers. The US names are just this country's labels.",
        },
        {
          prompt: "What are the four steps of the reading drill, in order?",
          answer: "Liability (separate person with a wall, or not?), taxation (pass-through or entity-level, fixed or elected?), ownership and transfer (who owns it, can a stake move and to whom?), and governance (owners run it or an appointed layer, how are votes counted?).",
        },
      ],
    },
    {
      slug: "usf-quiz-reading-the-menu",
      title: "4 · Quiz: reading the menu",
      section: "Section 1 · How to read the US menu",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "This course, unlike course 1, mainly:",
            options: [
              "re-derives the method",
              "gives real tax advice",
              "applies the method",
              "drops the four decisions",
            ],
            correctIndex: 2,
            explanation: "Course 1 taught the method; this course applies it across the actual US menu of forms, filling the four decisions for each.",
            sourceLessonSlug: "usf-recap-and-rule",
          },
          {
            prompt: "The course's standing rule is that it is:",
            options: [
              "a full tax plan",
              "not legal advice",
              "a lawyer substitute",
              "a state filing form",
            ],
            correctIndex: 1,
            explanation: "It teaches what to ASK and routes real decisions to a licensed professional. It is not legal or tax advice.",
            sourceLessonSlug: "usf-recap-and-rule",
          },
          {
            prompt: "When the law matters, the course keeps its references:",
            options: [
              "exact and cited",
              "hidden from you",
              "guessed from memory",
              "conceptual and cited",
            ],
            correctIndex: 3,
            explanation: "It invents no statute, rate or fee; it stays conceptual and accurate and points you to the primary source to verify.",
            sourceLessonSlug: "usf-recap-and-rule",
          },
          {
            prompt: "A business form, in this course, is best pictured as:",
            options: [
              "a memorised name",
              "a marketing label",
              "a row of four cells",
              "a single tax rate",
            ],
            correctIndex: 2,
            explanation: "A form is one row filled across the four columns: liability, taxation, ownership and transfer, and governance.",
            sourceLessonSlug: "usf-four-decisions-recap",
          },
          {
            prompt: "The reading drill's four questions cover liability, taxation, governance, and:",
            options: [
              "ownership and transfer",
              "profit and payroll",
              "branding and pricing",
              "location and hours",
            ],
            correctIndex: 0,
            explanation: "Ownership and transfer (who owns it and how a stake moves) is the third of the four decisions.",
            sourceLessonSlug: "usf-four-decisions-recap",
          },
          {
            prompt: "The clearest proof that liability and taxation are separate levers is the:",
            options: [
              "sole proprietorship",
              "general partnership",
              "LLC",
              "board of directors",
            ],
            correctIndex: 2,
            explanation: "The LLC holds a liability wall fixed while letting the owners choose how it is taxed, keeping the two columns apart.",
            sourceLessonSlug: "usf-four-decisions-recap",
          },
          {
            prompt: "Most people's list of 'business types' secretly mixes how many kinds of thing?",
            options: ["two", "three", "four", "one"],
            correctIndex: 1,
            explanation: "It mixes entities, tax statuses you elect, and private certifications. Sorting the menu into those three piles is the course's spine.",
            sourceLessonSlug: "usf-three-kinds-of-thing",
          },
          {
            prompt: "How many of the four decisions does a private certification set by itself?",
            options: ["all four", "just one", "exactly two", "none"],
            correctIndex: 3,
            explanation: "A certification is a private badge; it answers none of the four decisions on its own. Only an entity sets all four.",
            sourceLessonSlug: "usf-three-kinds-of-thing",
          },
          {
            prompt: "A tax status you elect, like the S election, is laid on top of:",
            options: [
              "an entity",
              "a certification",
              "a marketing plan",
              "a bank account",
            ],
            correctIndex: 0,
            explanation: "A tax status answers only taxation and rides on an entity, which still sets liability, ownership and governance.",
            sourceLessonSlug: "usf-three-kinds-of-thing",
          },
          {
            prompt: "'I set up an S-corp' is called incomplete because it never names the:",
            options: [
              "tax status chosen",
              "state it filed in",
              "underlying entity",
              "yearly tax rate",
            ],
            correctIndex: 2,
            explanation: "An S-corp is a tax status set on some entity, so you still must ask what the entity is to know liability and governance.",
            sourceLessonSlug: "usf-three-kinds-of-thing",
          },
          {
            prompt: "Which kind of thing on the menu actually is a 'type of business'?",
            options: [
              "the tax status",
              "the entity",
              "the certification",
              "the annual return",
            ],
            correctIndex: 1,
            explanation: "The entity answers all four decisions. A tax status and a certification each ride on an entity; neither is one.",
            sourceLessonSlug: "usf-three-kinds-of-thing",
          },
          {
            prompt: "Which body confers a Certified B Corp badge?",
            options: [
              "a private group",
              "the home state",
              "the IRS office",
              "the county clerk",
            ],
            correctIndex: 0,
            explanation: "A private nonprofit called B Lab grants the certification. No government confers it, which is why it is pile three.",
            sourceLessonSlug: "usf-three-kinds-of-thing",
          },
          {
            prompt: "The first question to ask a confusing form is which:",
            options: [
              "logo it uses",
              "pile it is in",
              "price it charges",
              "state it likes",
            ],
            correctIndex: 1,
            explanation: "Ask whether it is an entity, a tax status, or a certification first; that single question unlocks the rest.",
            sourceLessonSlug: "usf-three-kinds-of-thing",
          },
          {
            prompt: "You should NOT memorise the menu as a list because a list:",
            options: [
              "is hard to print",
              "looks too short",
              "goes stale and varies",
              "has no real names",
            ],
            correctIndex: 2,
            explanation: "A list goes stale, varies by state, and does not travel abroad. The four-column grid does, because the columns are universal.",
            sourceLessonSlug: "usf-four-decisions-recap",
          },
          {
            prompt: "Filling the four-column grid tells you what a form IS, not:",
            options: [
              "what it is named",
              "which pile it fits",
              "what you should form",
              "who confers it",
            ],
            correctIndex: 2,
            explanation: "Reading a form is not choosing one. What you should form depends on facts the course cannot see and belongs to a professional.",
            sourceLessonSlug: "usf-four-decisions-recap",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The unincorporated and partnership forms  (sole prop, GP, LP, LLP)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "usf-sole-prop",
      title: "5 · Sole proprietorship: you, doing business",
      section: "Section 2 · The unincorporated and partnership forms",
      body: `Start where every menu starts, with the form you can be **without deciding to be it.** A **sole proprietorship** is one person carrying on a business with no separate entity formed. There is no wall, no container, no second legal person. There is you, doing business.

## The sole proprietorship against the four decisions

- **Liability: unlimited.** Because there is no separate person, the business's debts are your debts. If it is sued or cannot pay, your personal assets are exposed: savings, car, sometimes the house. This is the headline risk, and it is the reason most of the fancier forms exist.
- **Taxation: pass-through.** The business is not a separate taxpayer. You report its profit on your personal return. Simple, and often the appeal.
- **Ownership and transfer: one owner, nothing clean to sell.** You can sell the assets (the cart, the client list), but "the business" is you, so it does not transfer as a unit the way shares do.
- **Governance: you decide, because there is no one else.**

## The fact people miss: you become one by acting, not by filing

**Start selling on your own and you are a sole proprietor already**, with unlimited liability, whether or not you ever thought about structure. There is no birth certificate to file, which is exactly why the form is a trap: **the wall you did not build is not there.** Course 1 called this out, and it bears repeating because it is the baseline the whole menu is defined against.

## A common confusion: a trade name is not an entity

Here is a mix-up worth clearing now. A **trade name**, often filed as a "doing business as" or DBA registration, lets a sole proprietor operate under a business name instead of their own. **A trade name is not an entity.** Registering "Riverside Bakes" as your DBA does not create a separate legal person, does not raise a wall, and changes none of the four decisions. It is a label, not a form. Many new owners believe registering a business name "made it official" and are surprised to learn they are still a sole proprietor with unlimited liability. Ask which pile a thing is in: a DBA is not even on the three-pile chart, because it is only a name.

## Reading a sole proprietorship on sight

One person, in business, **no entity filed with the state**: that is a sole proprietorship, which means **unlimited liability and pass-through tax**, with ownership and governance held informally by the one owner. That single read, done fast, tells you the most important thing about the owner's risk. Whether they *should* form something with a wall is a professional's question that depends on their exposure, their state, and their money, and it is not one this lesson answers.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Sole proprietorships*. https://www.irs.gov/businesses/small-businesses-self-employed/sole-proprietorships`,
      recallContent: [
        {
          prompt: "What are the three piles a business menu really mixes?",
          answer: "Entities (a state-law legal form that answers all four decisions), tax statuses you elect (laid on an entity, answering only taxation, like the S election or a 501(c) exemption), and private certifications (a badge from a private group, answering none, like a Certified B Corp).",
        },
        {
          prompt: "Why are 'I set up an S-corp' and 'we are a B Corp so we are a benefit corporation' both broken sentences?",
          answer: "An S-corp is a tax status with no named entity underneath, so you do not yet know its liability or governance. A Certified B Corp is a private certification, not the legal entity form called a benefit corporation; the two are conferred by different bodies and a company can hold one, both, or neither.",
        },
        {
          prompt: "What is the first question to ask about any confusing form?",
          answer: "Which pile is it in: a legal entity the state creates, a tax status you elect, or a private certification you earn? Asking that before anything else unlocks the rest.",
        },
        {
          prompt: "Which pile sets all four decisions, and which set one or none?",
          answer: "An entity sets all four. A tax status you elect sets one (taxation) and leaves the other three to the entity. A private certification sets none by itself.",
        },
      ],
    },
    {
      slug: "usf-general-partnership",
      title: "6 · The general partnership: shared work, shared liability",
      section: "Section 2 · The unincorporated and partnership forms",
      body: `Add a second person to the sole proprietorship and, if nobody files anything, you get a **general partnership**: two or more people carrying on a business together for profit. Like the sole proprietorship, it is a form **you can fall into by accident**, and its liability rule is the sharpest surprise on the whole menu.

## The general partnership against the four decisions

- **Liability: unlimited, and worse than it looks.** Each general partner is typically personally on the hook for the partnership's debts. Worse, partners are usually **agents of the partnership**, so one partner can bind the others: a deal or a debt another partner creates in the course of the business can land on you personally. **You can be personally liable for your partner's decisions.** That surprise has ended friendships and drained savings.
- **Taxation: pass-through.** The partnership files an informational return, but the profit lands on the partners' personal returns. The partnership itself pays no income tax.
- **Ownership and transfer: partners hold partnership interests, and interests do not trade like shares.** A partnership interest is set by the agreement, or by the state's default rules if the partners never wrote one, and you usually cannot simply sell your share to a stranger. This is one reason partnerships stay small and personal.
- **Governance: the partners decide, usually together.** Under the partnership agreement, or under the state's default rules in its absence, which frequently give each partner an equal say no matter what they each put in.

## The default-rules trap

Here is the quiet danger. **A general partnership formed by accident is governed by the state's default rules**, not by any deal the partners think they have. If two people shake hands on "we are in this together" and never write an agreement, the state's off-the-shelf rules fill every gap: how profits split, who can act, what happens when one wants out. Those defaults may be nothing like what either partner imagined, and they surface at the worst moment, in the first serious fight. **Reading a general partnership means asking a second question after "is there a wall": is there a written agreement, or are the state's defaults quietly running this business?**

## Reading a general partnership on sight

More than one person, in business together, **no entity filed**: that is very likely a general partnership, which means **unlimited liability for each partner, exposure to the other partners' acts, and pass-through tax**, with ownership and governance either written down or left to state defaults. The most important thing to flag is the shared, personal, and mutual liability, because it is the feature people least expect. Whether these partners should have raised a wall, and how, is a lawyer's question, not this lesson's.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Partnerships*. https://www.irs.gov/businesses/partnerships`,
      recallContent: [
        {
          prompt: "How does a sole proprietorship answer the four decisions?",
          answer: "Liability: unlimited, no separate person and no wall. Taxation: pass-through. Ownership: one owner, nothing clean to sell. Governance: you decide. And you become one by acting, not by filing.",
        },
        {
          prompt: "Why is a trade name (a DBA) not an entity?",
          answer: "It is only a label letting a sole proprietor use a business name. It creates no separate legal person, raises no wall, and changes none of the four decisions. Registering a name does not make the owner anything other than a sole proprietor.",
        },
        {
          prompt: "How do you read an unfiled one-person business on sight?",
          answer: "No entity filed means a sole proprietorship: unlimited liability and pass-through tax, with ownership and governance held informally by the one owner. That fast read tells you the owner's key risk.",
        },
        {
          prompt: "Why is the sole proprietorship called the baseline of the whole menu?",
          answer: "Every fancier form is in part a fix for its unlimited liability. Because you can fall into it by accident, doing nothing is a choice that usually chooses personal exposure.",
        },
      ],
    },
    {
      slug: "usf-limited-partnership",
      title: "7 · The limited partnership: a manager and passive investors",
      section: "Section 2 · The unincorporated and partnership forms",
      body: `The next two forms are partnerships that **add a wall**, and the first is the **limited partnership**, or **LP**. Unlike the general partnership, an LP is a **filed** entity: it exists because someone filed a formation document with the state. Its defining move is that it splits the partners into two classes with two very different deals.

## Two classes of partner

- **The general partner.** At least one is required. The general partner **runs the business** and carries **unlimited personal liability** for the partnership's debts, exactly like a partner in a general partnership. This is the person or entity holding the risk and the controls.
- **The limited partners.** One or more passive investors. A limited partner's liability is **limited to what they invested**: they can lose their stake, but generally not their personal assets beyond it. In exchange for the wall, the classic bargain is that they **stay out of management.**

## The LP against the four decisions

- **Liability: split.** Unlimited for the general partner, limited for the limited partners. The wall protects the investors, not the manager.
- **Taxation: pass-through**, like other partnerships. Profit flows to the partners' returns.
- **Ownership and transfer: general and limited partnership interests**, with transfer governed by the partnership agreement, usually with real restrictions. This structure is common in **investment funds and real-estate deals**, where a managing general partner raises money from many passive limited partners.
- **Governance: the general partner decides.** Limited partners are, by design, largely passive; their power is usually limited to major, defined votes rather than daily control.

## The control rule, and why states disagree about it

Here is a place to teach a genuine disagreement rather than a clean rule. **Traditionally, a limited partner who took an active hand in managing the business could lose the liability shield** and be treated like a general partner, on the theory that the wall was the price of staying passive. This was often called the **control rule.** But **modern statutes in many states have narrowed or eliminated it**, so that limited partners can do more without forfeiting protection. **The rule is not the same everywhere.** How much a limited partner can safely do, in a given state, under that state's current statute, is exactly the kind of specific question this course refuses to answer from memory and sends to the state's own law and a lawyer. What travels is the concept: the LP trades a wall for passivity, and how strict that trade is depends on the state.

## Reading an LP on sight

A filed partnership with a **managing general partner who carries the risk** and **passive limited partners whose loss is capped at their investment**: that is a limited partnership, pass-through for tax, governed by the general partner, and common wherever a manager gathers money from investors who do not want to run anything. The moment you see "general partner" and "limited partner" as named roles, you are looking at an LP.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Partnerships*. https://www.irs.gov/businesses/partnerships`,
      recallContent: [
        {
          prompt: "Why is a general partnership's unlimited liability worse than it looks?",
          answer: "Each partner is personally on the hook, and because partners are agents of the partnership, one partner can bind the others. A deal or debt another partner creates in the business can land on you personally.",
        },
        {
          prompt: "What is the default-rules trap in a general partnership?",
          answer: "A partnership formed by accident is run by the state's off-the-shelf default rules, not by any deal the partners assume they have. Those defaults fill every gap and surface at the worst moment, in the first serious fight.",
        },
        {
          prompt: "How is a general partnership taxed, and how does ownership move?",
          answer: "Pass-through: the partnership files an informational return but profit lands on the partners' personal returns. Partnership interests do not trade like shares, so partnerships stay small and personal.",
        },
        {
          prompt: "What second question do you ask when reading a general partnership, after 'is there a wall'?",
          answer: "Is there a written partnership agreement, or are the state's default rules quietly running this business? The answer decides how profits split, who can act, and what happens when a partner leaves.",
        },
      ],
    },
    {
      slug: "usf-llp",
      title: "8 · The LLP: partners who all get a shield",
      section: "Section 2 · The unincorporated and partnership forms",
      body: `The second wall-adding partnership is the **limited liability partnership**, or **LLP**. Where the LP protects only its passive investors, the LLP is built so that **the working partners themselves get a liability shield**, which is why it is the form you find behind so many **professional firms**: law firms, accounting firms, medical and architecture practices.

## The LLP against the four decisions

- **Liability: shielded, but read the scope.** In an LLP, a partner is generally protected from the partnership's debts and, importantly, from liability for **another partner's malpractice or negligence.** A partner remains responsible for their **own** wrongful acts; the shield does not turn your own mistake into someone else's problem. This is the exact protection a professional partnership wants: a colleague's error should not reach your personal assets.
- **Taxation: pass-through**, like the other partnerships. Profit flows to the partners.
- **Ownership and transfer: partnership interests**, set by the agreement, usually restricted. Partners are still partners.
- **Governance: the partners run it**, together, under their agreement. Unlike the LP, there is no required class of passive owners; the people doing the work are the people deciding.

## Why the shield's scope is a "read the state" question

Here the honest answer is that **states genuinely differ**, and a responsible course says so instead of stating a single rule:

- In some states the LLP shield is **narrow**, protecting partners mainly from co-partners' malpractice while leaving them exposed on ordinary business debts. In others it is **broad**, closer to the full wall an LLC or corporation gives.
- Some states **restrict the LLP form to licensed professions**, so not every business can use it.
- The filing that creates and maintains an LLP, and what it is called, **varies by state.**

Because of that, this course will not tell you what your LLP shield covers, or whether your business may use the form: those are state-specific rules that change. **The method sends you to the state's own statute and a lawyer.** What you carry away is the shape: the LLP is the partnership where the working partners share a shield, the shield's exact reach depends on the state, and it is the classic home of professional firms.

## The three partnerships, side by side

Set the section's three partnership forms against decision one and the design becomes clear:

| Form | Who carries unlimited liability |
|---|---|
| **General partnership** | Every partner, personally, and for each other's acts |
| **Limited partnership** | The general partner only; limited partners are shielded |
| **Limited liability partnership** | Generally none, though the shield's scope varies by state |

**All three are pass-through for tax and run by their partners; they differ almost entirely on liability**, which is a clean illustration of the four decisions doing their job: hold three columns steady, move one, and you have three different forms.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Partnerships*. https://www.irs.gov/businesses/partnerships`,
      recallContent: [
        {
          prompt: "What two classes of partner define a limited partnership, and how does liability split?",
          answer: "At least one general partner, who runs the business and carries unlimited personal liability, and one or more limited partners, passive investors whose loss is capped at what they invested. The wall protects the investors, not the manager.",
        },
        {
          prompt: "What is the traditional control rule, and why does the course not state it as a fixed rule?",
          answer: "Traditionally a limited partner who actively managed could lose the shield and be treated as a general partner. Modern statutes in many states have narrowed or eliminated it, so the rule is not the same everywhere; the specifics go to the state's law and a lawyer.",
        },
        {
          prompt: "Where are limited partnerships commonly used, and why?",
          answer: "In investment funds and real-estate deals, where a managing general partner gathers money from many passive limited partners who want a capped-loss investment without running anything.",
        },
        {
          prompt: "How is an LP created, unlike a general partnership?",
          answer: "An LP is a filed entity: it exists because someone filed a formation document with the state. A general partnership can arise by conduct with no filing at all.",
        },
      ],
    },
    {
      slug: "usf-quiz-unincorporated",
      title: "9 · Quiz: the unincorporated and partnership forms",
      section: "Section 2 · The unincorporated and partnership forms",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "You become a sole proprietor by:",
            options: [
              "filing a charter",
              "electing at the IRS",
              "acting, not filing",
              "hiring a first worker",
            ],
            correctIndex: 2,
            explanation: "Start selling on your own and you are one already, with unlimited liability, whether or not you planned it.",
            sourceLessonSlug: "usf-sole-prop",
          },
          {
            prompt: "A trade name, or DBA, gives a sole proprietor:",
            options: [
              "a business name",
              "a liability wall",
              "a separate entity",
              "a tax election",
            ],
            correctIndex: 0,
            explanation: "A DBA is only a label. It creates no separate person, raises no wall, and changes none of the four decisions.",
            sourceLessonSlug: "usf-sole-prop",
          },
          {
            prompt: "A sole proprietorship's liability is:",
            options: ["limited", "shielded", "unlimited", "elected"],
            correctIndex: 2,
            explanation: "There is no separate person and no wall, so the business's debts are the owner's debts and personal assets are exposed.",
            sourceLessonSlug: "usf-sole-prop",
          },
          {
            prompt: "In a general partnership, one partner can usually:",
            options: [
              "bind the others",
              "avoid all tax",
              "issue real stock",
              "escape the deal",
            ],
            correctIndex: 0,
            explanation: "Partners are agents of the partnership, so a debt or deal one partner makes in the business can land on the others personally.",
            sourceLessonSlug: "usf-general-partnership",
          },
          {
            prompt: "A general partnership with no written agreement is run by:",
            options: [
              "the senior partner",
              "the state defaults",
              "the local bank",
              "the newest partner",
            ],
            correctIndex: 1,
            explanation: "The state's off-the-shelf default rules fill every gap, and they surface at the worst moment, in the first serious fight.",
            sourceLessonSlug: "usf-general-partnership",
          },
          {
            prompt: "Every partnership form in this section is taxed as:",
            options: [
              "entity-level tax",
              "a tax-free body",
              "a double-taxed firm",
              "a pass-through",
            ],
            correctIndex: 3,
            explanation: "General, limited, and limited liability partnerships all pass profit through to the partners' personal returns.",
            sourceLessonSlug: "usf-general-partnership",
          },
          {
            prompt: "A limited partnership must always have at least one:",
            options: [
              "passive investor",
              "outside auditor",
              "general partner",
              "public shareholder",
            ],
            correctIndex: 2,
            explanation: "The general partner runs the business and carries unlimited liability; limited partners are the passive, shielded investors.",
            sourceLessonSlug: "usf-limited-partnership",
          },
          {
            prompt: "In a limited partnership, a limited partner's loss is generally capped at:",
            options: [
              "their home value",
              "their yearly pay",
              "the firm's debts",
              "what they invested",
            ],
            correctIndex: 3,
            explanation: "The wall protects the passive investor: they can lose their stake but generally not their other personal assets.",
            sourceLessonSlug: "usf-limited-partnership",
          },
          {
            prompt: "The traditional control rule warned that a limited partner who managed could:",
            options: [
              "gain more votes",
              "lose the shield",
              "skip the taxes",
              "buy the firm",
            ],
            correctIndex: 1,
            explanation: "Actively managing could reclassify a limited partner as a general one. Modern statutes vary, so the course routes it to the state.",
            sourceLessonSlug: "usf-limited-partnership",
          },
          {
            prompt: "Limited partnerships are especially common in:",
            options: [
              "corner grocers",
              "solo freelancing",
              "investment funds",
              "public charities",
            ],
            correctIndex: 2,
            explanation: "A managing general partner gathers money from many passive limited partners, the shape investment funds and real-estate deals use.",
            sourceLessonSlug: "usf-limited-partnership",
          },
          {
            prompt: "The LLP is the partnership built so that the shield protects the:",
            options: [
              "passive investors",
              "state regulator",
              "outside lenders",
              "working partners",
            ],
            correctIndex: 3,
            explanation: "In an LLP the working partners share protection, notably from a co-partner's malpractice, which is why professional firms use it.",
            sourceLessonSlug: "usf-llp",
          },
          {
            prompt: "Even in an LLP, a partner stays responsible for:",
            options: [
              "their own wrongdoing",
              "no debts at all",
              "every co-partner error",
              "the state filing fee",
            ],
            correctIndex: 0,
            explanation: "The shield covers a colleague's negligence, not your own; the LLP does not turn your own mistake into someone else's problem.",
            sourceLessonSlug: "usf-llp",
          },
          {
            prompt: "The exact reach of an LLP's liability shield is decided by:",
            options: [
              "the partners' logo",
              "the state's law",
              "the federal code",
              "the client roster",
            ],
            correctIndex: 1,
            explanation: "Some states make the shield narrow, others broad, and some limit LLPs to certain professions, so you read the state's own statute.",
            sourceLessonSlug: "usf-llp",
          },
          {
            prompt: "Across the three partnership forms, the column that changes most is:",
            options: [
              "the taxation",
              "the ownership name",
              "the liability",
              "the profit split",
            ],
            correctIndex: 2,
            explanation: "All three are pass-through and run by their partners; they differ almost entirely on who carries unlimited liability.",
            sourceLessonSlug: "usf-llp",
          },
          {
            prompt: "Which partnership form can arise with no state filing at all?",
            options: [
              "the general one",
              "the limited one",
              "the LLP form",
              "the benefit one",
            ],
            correctIndex: 0,
            explanation: "A general partnership can form by conduct. An LP and an LLP are filed entities that exist only after a state filing.",
            sourceLessonSlug: "usf-limited-partnership",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · The LLC and the S-corp election
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "usf-llc",
      title: "10 · The LLC: the modern default",
      section: "Section 3 · The LLC and the S-corp election",
      body: `The **limited liability company**, or **LLC**, is the form a huge share of new US small businesses reach for first, and it earned that place by giving a reliable wall while leaving the other three decisions flexible. Course 1 introduced it as the proof that the four decisions are separate levers. This lesson positions it as the **default** and sets up the election that so often rides on it.

## The LLC against the four decisions

- **Liability: limited, by design.** That is the "LL" in the name. The LLC is a separate legal person with a wall, subject to the same gaps every wall has (personal guarantees you sign, your own wrongful acts, a court piercing the veil if you treat the entity as a sham). Owners are called **members.**
- **Taxation: flexible, and this is the headline.** By default a single-member LLC is taxed like a sole proprietorship and a multi-member LLC like a partnership, both **pass-through.** But the members can **elect** to have the LLC taxed as a corporation instead, and can even layer an S election on top (the next lesson). **The LLC holds decision one fixed and lets you move decision two**, which is the separate-levers idea made concrete.
- **Ownership and transfer: membership interests**, usually stated as percentages, with the transfer rules set in the **operating agreement.** Transfer is typically restricted by default, which suits closely held businesses.
- **Governance: flexible.** An LLC can be **member-managed**, where the owners run it, or **manager-managed**, where they appoint a manager. The operating agreement sets the voting and deadlock rules.

## Why the LLC became the default

Look at that row. A dependable liability wall, plus your choice on taxation and governance, plus a private rulebook you can tune: **flexibility on three of the four decisions with certainty on the one people care about most.** That combination fits an enormous range of small and mid-sized businesses, which is why the LLC spread so fast once it existed. Its cost is that the flexibility has to be *used well*: an LLC's operating agreement is worth reading closely, because two LLCs with identical charters can be built oppositely.

## A creature of state law, and a recent one

Two facts course 1 established, worth carrying into this course because they anchor how you read the form:

- **The LLC exists only because state legislatures created it.** There is no federal LLC. Each state has its own LLC statute, its own forms, and its own fees, so when you read an LLC the primary source is **that state's statute and filing portal**, not a national rule.
- **The LLC is a recent invention.** Wyoming enacted the first US LLC statute in 1977, and it was only through the mid-1990s that every state had one and the form became widely usable (Internal Revenue Service, n.d.). The default form for new American small business is younger than the Rubik's Cube, which reframes the whole menu as recent, revisable policy rather than natural law.

And the rule, because a real choice is near: whether an LLC is right for you, in your state, taxed which way, is a legal and tax question for professionals. This lesson teaches you to read the LLC. It does not tell you to form one.

## Sources
- Internal Revenue Service. (n.d.). *Limited liability company (LLC)*. https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What protection does an LLP give, and who is it for?",
          answer: "The working partners share a liability shield, notably from a co-partner's malpractice or negligence, while remaining responsible for their own wrongful acts. It is the classic home of professional firms such as law and accounting practices.",
        },
        {
          prompt: "Why is the LLP shield's scope a 'read the state' question?",
          answer: "States differ: some make the shield narrow (mainly against co-partners' malpractice), others broad; some restrict LLPs to licensed professions; and the filing varies. The course sends the specifics to the state's statute and a lawyer.",
        },
        {
          prompt: "Set side by side, how do the three partnership forms differ on liability?",
          answer: "General partnership: every partner personally, and for each other's acts. Limited partnership: the general partner only, with limited partners shielded. LLP: generally none, though the shield's scope varies by state. All three are pass-through and partner-run.",
        },
        {
          prompt: "How does an LLP handle governance compared with an LP?",
          answer: "The partners run the LLP together under their agreement, with no required class of passive owners. An LP, by contrast, is run by the general partner while limited partners stay passive.",
        },
      ],
    },
    {
      slug: "usf-s-corp-election",
      title: "11 · The S-corp is a tax election, not an entity type",
      section: "Section 3 · The LLC and the S-corp election",
      body: `This is the single most misunderstood point in the whole subject, and it gets its own lesson because getting it wrong quietly corrupts everything else on the menu. Course 1 planted the sentence; this course drives it home in the middle of the real forms, where it does the most work. Memorise it:

**An S-corp is not a type of entity. It is a federal tax election that an eligible entity makes.**

## Sort it into the piles and the confusion dissolves

Lesson 3 gave you three piles: entity, tax status, certification. **An S-corp is pile two.** An LLC and a corporation are pile one. People say "I set up an S-corp" the way they say "I set up an LLC," as if the two were the same kind of thing. **They are not.** An LLC or a corporation is a legal **entity**, formed under state law by filing a charter. An "S-corp" is a **tax status**, granted by the federal tax authority when an eligible entity elects to be taxed under the part of the Internal Revenue Code called **Subchapter S** (which is where the "S" comes from). One is a state-law creature; the other is a federal tax choice laid on top of it.

Run it through the four decisions:

| Decision | Set by the ENTITY (LLC or corporation) | Set by the S ELECTION |
|---|---|---|
| **Liability** | Yes, the entity has the wall | No, the election does nothing to liability |
| **Taxation** | The default | This is the whole point of the election |
| **Ownership** | Yes, the entity defines it | The election adds eligibility limits |
| **Governance** | Yes, the entity defines it | No |

**The S election touches exactly one of the four decisions, taxation, and leaves the other three to the entity underneath it.** That is precisely why it cannot be an entity type: an entity type has to answer all four, and this answers one.

## What the S election actually does

An eligible entity, commonly a corporation or an LLC that meets the requirements, can **elect** S treatment by filing an election with the IRS. Broadly, the effect is that the business is taxed as a **pass-through**: profit flows to the owners rather than being taxed at the entity level, which sidesteps the C-corporation's double tax, while the business keeps the liability and governance of whatever entity it actually is. There are **eligibility limits**, for example on the number and type of owners and the kinds of ownership interest allowed, and this course states them **only in the general**, because the specifics are federal tax rules that change and that it refuses to assert from memory (Internal Revenue Service, n.d.-a). To pin any of them, read the IRS page and Form 2553, and ask an accountant.

## The honest description of a business "that is an S-corp"

It is a **two-part sentence**: it is *some entity* (usually an LLC or a corporation), *and* it has *made the S election* for tax. If you only heard "S-corp," you do not yet know the underlying entity, which means **you do not yet know its liability or its governance**, and you have to ask. This is the exact broken sentence lesson 3 flagged, now explained.

## Why this is the load-bearing lesson

Get this right and the separate-levers idea clicks: **the entity is one decision-bundle, and the tax election is a separate choice bolted on.** Get it wrong and you will keep believing the form dictates the tax, which is the error that ripples through every remaining lesson. **The S-corp is not an exception to the four decisions. It is the four decisions caught in the act of separating**, with taxation pulling away from the entity that sets the other three.

And the not-advice rule is at maximum volume here, because this is where people hurt themselves with half-knowledge. Whether to make an S election, whether your entity is eligible, and what it would do to your taxes are questions with real money and real deadlines attached, and they are an accountant's to answer. This lesson teaches you what the S-corp *is*, so you stop mis-reading it. It does not tell you to elect it.

## Sources
- Internal Revenue Service. (n.d.-a). *S corporations*. https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations
- Internal Revenue Service. (n.d.-b). *About Form 2553, Election by a Small Business Corporation*. https://www.irs.gov/forms-pubs/about-form-2553
- Internal Revenue Service. (n.d.-c). *Overview of entity classification regulations* [International practice unit]. https://www.irs.gov/pub/fatca/int_practice_units/ore_c_19_02_01.pdf`,
      recallContent: [
        {
          prompt: "How does the LLC answer the four decisions?",
          answer: "Liability: limited, by design (the wall, with the usual gaps). Taxation: flexible, pass-through by default but electable as a corporation. Ownership: membership interests, transfer set in the operating agreement. Governance: member-managed or manager-managed.",
        },
        {
          prompt: "Why did the LLC become the modern default?",
          answer: "It gives a dependable liability wall with flexibility on taxation and governance and a tunable private rulebook: certainty on the decision people care about most, plus choice on the others, fitting a huge range of businesses.",
        },
        {
          prompt: "Why does it matter that the LLC is a creature of state law, and how recent is it?",
          answer: "There is no federal LLC; each state has its own statute, forms and fees, so the primary source is that state's statute and portal. Wyoming enacted the first in 1977 and every state had one only by the mid-1990s, making it younger than the Rubik's Cube.",
        },
        {
          prompt: "What are an LLC's two management options?",
          answer: "Member-managed, where the owners run it directly, and manager-managed, where the members appoint a manager. The operating agreement sets which, plus voting and deadlock rules.",
        },
      ],
    },
    {
      slug: "usf-quiz-llc-and-s",
      title: "12 · Quiz: the LLC and the S election",
      section: "Section 3 · The LLC and the S-corp election",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The 'LL' in LLC refers to its:",
            options: [
              "limited liability",
              "large ledger",
              "local license",
              "long lease",
            ],
            correctIndex: 0,
            explanation: "The LLC is a separate legal person with a liability wall, subject to the usual gaps every wall has.",
            sourceLessonSlug: "usf-llc",
          },
          {
            prompt: "An LLC's owners are called:",
            options: [
              "shareholders",
              "members",
              "trustees",
              "partners",
            ],
            correctIndex: 1,
            explanation: "LLC owners are members, holding membership interests, with transfer rules set in the operating agreement.",
            sourceLessonSlug: "usf-llc",
          },
          {
            prompt: "By default, a multi-member LLC is taxed like a:",
            options: [
              "C-corporation",
              "public charity",
              "partnership",
              "trust estate",
            ],
            correctIndex: 2,
            explanation: "A single-member LLC defaults to sole-proprietor tax and a multi-member LLC to partnership tax, both pass-through, unless it elects otherwise.",
            sourceLessonSlug: "usf-llc",
          },
          {
            prompt: "The LLC is created by:",
            options: [
              "federal charter",
              "an IRS election",
              "common law",
              "state statute",
            ],
            correctIndex: 3,
            explanation: "There is no federal LLC. Each state created the form by statute, with its own forms and fees, so you read that state's law.",
            sourceLessonSlug: "usf-llc",
          },
          {
            prompt: "An LLC can be run as member-managed or:",
            options: [
              "manager-managed",
              "court-managed",
              "donor-managed",
              "state-managed",
            ],
            correctIndex: 0,
            explanation: "Governance is flexible: the members run it, or they appoint a manager. The operating agreement sets voting and deadlock rules.",
            sourceLessonSlug: "usf-llc",
          },
          {
            prompt: "The first US LLC statute was enacted in Wyoming in:",
            options: ["1958", "1977", "1997", "2010"],
            correctIndex: 1,
            explanation: "Wyoming enacted it in 1977, and every state had one only by the mid-1990s, making the LLC younger than the Rubik's Cube.",
            sourceLessonSlug: "usf-llc",
          },
          {
            prompt: "An S-corp is best described as a:",
            options: [
              "state entity type",
              "federal tax election",
              "private certification",
              "kind of nonprofit",
            ],
            correctIndex: 1,
            explanation: "It is a federal tax election an eligible entity makes, not a type of entity formed with a state.",
            sourceLessonSlug: "usf-s-corp-election",
          },
          {
            prompt: "In the three-pile frame, an S-corp sits in the pile for a:",
            options: [
              "state entity",
              "tax status",
              "private badge",
              "trade name",
            ],
            correctIndex: 1,
            explanation: "It is pile two: a tax status laid on top of an entity, which still sets liability, ownership and governance.",
            sourceLessonSlug: "usf-s-corp-election",
          },
          {
            prompt: "The S election changes which of the four decisions?",
            options: [
              "liability only",
              "governance only",
              "taxation only",
              "all four at once",
            ],
            correctIndex: 2,
            explanation: "It changes only taxation and leaves liability, ownership and governance to the entity underneath it.",
            sourceLessonSlug: "usf-s-corp-election",
          },
          {
            prompt: "Electing S treatment broadly makes the business taxed as a:",
            options: [
              "double-taxed firm",
              "tax-exempt body",
              "foreign branch",
              "pass-through",
            ],
            correctIndex: 3,
            explanation: "Profit flows to the owners rather than being taxed at the entity level, sidestepping the C-corp's double tax.",
            sourceLessonSlug: "usf-s-corp-election",
          },
          {
            prompt: "The 'S' in S-corp comes from:",
            options: [
              "a small-firm size",
              "a subchapter of the code",
              "a single shareholder",
              "a state of filing",
            ],
            correctIndex: 1,
            explanation: "It refers to Subchapter S of the Internal Revenue Code, the part under which the election is made.",
            sourceLessonSlug: "usf-s-corp-election",
          },
          {
            prompt: "The course states the S election's eligibility limits only:",
            options: [
              "in the general",
              "as exact counts",
              "with a fee list",
              "by state law",
            ],
            correctIndex: 0,
            explanation: "The specifics are federal tax rules that change, so the course keeps them conceptual and routes you to the IRS and Form 2553.",
            sourceLessonSlug: "usf-s-corp-election",
          },
          {
            prompt: "If you hear only that a business 'is an S-corp,' you still do not know its:",
            options: [
              "tax election",
              "federal status",
              "underlying entity",
              "yearly profit",
            ],
            correctIndex: 2,
            explanation: "The honest description is a two-part sentence: some entity, plus an S election. You must ask the entity to know liability and governance.",
            sourceLessonSlug: "usf-s-corp-election",
          },
          {
            prompt: "Which entities commonly make the S election?",
            options: [
              "only sole props",
              "only charities",
              "an LLC or corporation",
              "only partnerships",
            ],
            correctIndex: 2,
            explanation: "An eligible corporation or LLC that meets the requirements can elect S treatment; the election rides on that entity.",
            sourceLessonSlug: "usf-s-corp-election",
          },
          {
            prompt: "The LLC is the clearest proof that the four decisions are:",
            options: [
              "always the same",
              "fixed by tax",
              "separate levers",
              "set by size",
            ],
            correctIndex: 2,
            explanation: "It holds a liability wall fixed while letting members move the tax and governance decisions independently.",
            sourceLessonSlug: "usf-llc",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Corporations and nonprofits
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "usf-c-corp",
      title: "13 · The C-corporation: the investment machine",
      section: "Section 4 · Corporations and nonprofits",
      body: `The **C-corporation** is the form most people picture when they hear "corporation," and it is the one built to raise money from many investors. Like the S-corp, the "C" refers to how it is taxed by default, under the part of the code called **Subchapter C**, which is a neat reinforcement of lesson 3: **the "C" and the "S" are both tax labels**, one the default and one an election, sitting on the corporate entity.

## The C-corporation against the four decisions

- **Liability: limited.** The corporation is a separate legal person with a wall; owners, called **shareholders**, are generally not personally liable for its debts, subject to the usual gaps.
- **Taxation: entity-level, and this is what "C" means.** A C-corporation is its own taxpayer: it pays tax on its profit, and when it distributes profit as dividends, **shareholders may be taxed again.** That is the **double taxation** from course 1, the C-corp's defining tax feature. Whether it is a drawback depends on facts an accountant weighs.
- **Ownership and transfer: shareholders holding shares of stock.** Shares are standardised and, in principle, freely transferable, which is exactly why the corporation is the vehicle for wide outside investment. A private corporation can still restrict transfer through a shareholder agreement, but the share is built to move.
- **Governance: delegated, in a three-layer shape.** **Shareholders elect a board of directors; the board sets direction and hires officers; the officers run the company.** This separation of ownership from control is what lets a corporation have thousands of owners and still function.

## Why the C-corp exists

Its combination, a hard wall, standardised tradeable shares, and delegated governance, is exactly what large-scale outside investment needs. **Investors want to buy a clean unit (a share), risk only what they paid (limited liability), and not have to run the company (delegated governance).** The C-corp gives all three, which is why nearly every company that raises significant venture capital or goes public is one. Its cost is the entity-level tax and more formality: a board, meetings, records. **The form is a trade: more tax and more paperwork in exchange for the ability to raise money widely.**

## C-corp beside LLC, one more time

| Decision | LLC | C-corporation |
|---|---|---|
| **Liability** | Limited | Limited |
| **Taxation** | Flexible, pass-through by default | Entity-level by default (the double tax) |
| **Ownership** | Membership interests, transfer often restricted | Shares, built to be transferable |
| **Governance** | Member- or manager-managed | Shareholders elect a board that hires officers |

**They share an answer on liability and diverge on the other three.** An LLC and a C-corp are not "small version" and "big version" of one thing; they are different answers to decisions two, three and four. And the not-advice rule is loud here: choosing a C-corp, especially for a company that will raise money, carries large tax and legal consequences, is made with a lawyer and an accountant, and is expensive to unwind. This lesson teaches you to read a C-corp. It does not tell you to be one.

## Sources
- Internal Revenue Service. (n.d.-a). *Forming a corporation*. https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation
- Internal Revenue Service. (n.d.-b). *Corporations*. https://www.irs.gov/corporations
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "State the sentence that settles the S-corp confusion.",
          answer: "An S-corp is not a type of entity; it is a federal tax election that an eligible entity makes. It is pile two, a tax status laid on an entity, not pile one.",
        },
        {
          prompt: "Which of the four decisions does the S election set, and which does the entity keep?",
          answer: "The S election sets only taxation (making the business a pass-through). The entity underneath keeps liability, ownership and governance. That is why an S-corp cannot be an entity type: it answers one decision, not four.",
        },
        {
          prompt: "Why is 'that business is an S-corp' an incomplete description?",
          answer: "The honest description is a two-part sentence: it is some entity (usually an LLC or a corporation) and it has made the S election for tax. Hearing only 'S-corp,' you do not yet know its liability or governance, so you must ask the entity.",
        },
        {
          prompt: "Why does the S-corp lesson state eligibility limits only in the general?",
          answer: "The number and type of owners, and the ownership interests allowed, are federal tax rules that change, so the course refuses to assert them from memory and routes you to the IRS page and Form 2553 and an accountant.",
        },
      ],
    },
    {
      slug: "usf-nonprofits",
      title: "14 · Nonprofits: the 501(c) family",
      section: "Section 4 · Corporations and nonprofits",
      body: `Nonprofits are where the three-pile frame pays off most, because a nonprofit is **two things stacked**: a state-law entity in pile one, plus a federal tax-exempt status in pile two. Keep the layers apart and the 501(c) alphabet stops being intimidating.

## Layer one: the entity, and the non-distribution constraint

Most nonprofits are organised as a **nonprofit corporation** under state law: a corporation formed the usual way, with a board, that has agreed to a defining limit. That limit is the **non-distribution constraint**: a nonprofit may earn a surplus, but it **cannot distribute profit to owners**, because it has **no owners** in the equity sense. There are no shares and no members taking dividends; any surplus must go back into the mission. Run it through the four decisions and it reads cleanly: **liability** is limited like any corporation, **governance** is a board, **ownership** is nobody (the non-distribution constraint replaces owners), and **taxation** is the second layer.

**"Nonprofit" does not mean "makes no profit."** It means no one gets to pocket the surplus. That single correction clears up most of the public confusion about the form.

## Layer two: the federal tax-exempt status, 501(c)

A nonprofit entity can apply to the IRS for **tax-exempt status** under a paragraph of Internal Revenue Code section 501(c). Exemption broadly means the organisation does not pay federal income tax on income tied to its exempt purpose. Which paragraph it qualifies under decides what it may do and how donations are treated. Three matter most.

| Status | Typical purpose | Are donations deductible as charity? | Political campaign activity |
|---|---|---|---|
| **501(c)(3)** | Charitable, religious, educational, scientific | Generally **yes**, to the donor | **Absolutely barred** from campaign intervention |
| **501(c)(4)** | Social welfare organisations | Generally **no** | **May** take part, within limits, if not its primary activity |
| **501(c)(6)** | Business leagues, chambers, trade associations | Generally **no** as charity | **May** take part, within limits |

## The two distinctions that carry the whole lesson

**First: tax-EXEMPT is not tax-DEDUCTIBLE.** These are different questions about different taxpayers. *Exempt* asks whether the **organisation** pays tax on its own income; all three of the above are broadly exempt. *Deductible* asks whether a **donor** can subtract a gift on their own return; generally only a gift to a **501(c)(3)** is deductible as a charitable contribution. So a social-welfare group and a chamber of commerce can be tax-exempt organisations while gifts to them are **not** charitable deductions for the giver. Confusing the two is the most common nonprofit error, and it is exactly the "who pays the tax" column asked twice, once of the entity and once of the donor.

**Second: the campaign line.** A **501(c)(3) is absolutely prohibited from intervening in a political campaign**, which means it **cannot endorse or oppose candidates for office.** This is a bright line, not a soft guideline (Internal Revenue Service, n.d.-c). A (c)(4) or a (c)(6) has more room and **may** engage in some political campaign activity within limits, as long as it is not the organisation's primary activity. So the idea that a charity can endorse a candidate is simply wrong for a (c)(3); it is the classic distractor, and now you know why it fails.

The specific limits, on lobbying amounts, on how much political activity a (c)(4) may do, on what qualifies for each status, are federal rules with detail this course will not assert from memory. Read the IRS pages below and, for a real organisation, work with a professional. What you carry away is the shape: **a nonprofit is an owner-less entity plus a 501(c) status, the letter after 501(c) changes the donation and political rules, and exempt is not the same as deductible.**

## Sources
- Internal Revenue Service. (n.d.-a). *Exemption requirements: 501(c)(3) organizations*. https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations
- Internal Revenue Service. (n.d.-b). *Social welfare organizations*. https://www.irs.gov/charities-non-profits/other-non-profits/social-welfare-organizations
- Internal Revenue Service. (n.d.-c). *The restriction of political campaign intervention by section 501(c)(3) tax-exempt organizations*. https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations
- Internal Revenue Service. (n.d.-d). *Business leagues*. https://www.irs.gov/charities-non-profits/other-non-profits/business-leagues`,
      recallContent: [
        {
          prompt: "How does the C-corporation answer the four decisions?",
          answer: "Liability: limited. Taxation: entity-level, the double tax, which is what 'C' means. Ownership: shareholders holding transferable shares. Governance: delegated, shareholders elect a board that hires officers.",
        },
        {
          prompt: "Why does the C-corp exist, and what is its trade?",
          answer: "It is the investment machine: a hard wall, standardised tradeable shares, and delegated governance are exactly what wide outside investment needs. The trade is entity-level tax and more formality in exchange for the ability to raise money widely.",
        },
        {
          prompt: "How do the 'C' and 'S' labels reinforce lesson 3's frame?",
          answer: "Both are tax labels on the corporate entity, referring to subchapters of the code: 'C' is the default entity-level treatment and 'S' is an election. Neither is a separate kind of entity; they are tax statuses sitting on a corporation.",
        },
        {
          prompt: "Where do the LLC and C-corp agree, and where do they diverge?",
          answer: "They agree on liability (both limited) and diverge on taxation, ownership and governance. They are different answers to decisions two, three and four, not a small version and a big version of one thing.",
        },
      ],
    },
    {
      slug: "usf-quiz-corps-nonprofits",
      title: "15 · Quiz: corporations and nonprofits",
      section: "Section 4 · Corporations and nonprofits",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A C-corporation's owners are called:",
            options: [
              "members",
              "trustees",
              "shareholders",
              "partners",
            ],
            correctIndex: 2,
            explanation: "Shareholders hold shares of stock, a standardised unit built to move, which is why the corporation suits wide investment.",
            sourceLessonSlug: "usf-c-corp",
          },
          {
            prompt: "The 'C' in C-corporation refers to its default:",
            options: [
              "capital rules",
              "tax treatment",
              "charter class",
              "company size",
            ],
            correctIndex: 1,
            explanation: "A C-corporation is its own taxpayer under Subchapter C, paying entity-level tax with a possible second tax on dividends.",
            sourceLessonSlug: "usf-c-corp",
          },
          {
            prompt: "'Double taxation' means the profit can be taxed at the:",
            options: [
              "state and county",
              "entity and owner",
              "buyer and seller",
              "bank and broker",
            ],
            correctIndex: 1,
            explanation: "The corporation pays tax on its profit, and shareholders may be taxed again on dividends, because the corporation is a separate taxpayer.",
            sourceLessonSlug: "usf-c-corp",
          },
          {
            prompt: "In a corporation, shareholders mainly govern by:",
            options: [
              "running it daily",
              "signing each deal",
              "one head, one vote",
              "electing a board",
            ],
            correctIndex: 3,
            explanation: "Shareholders elect a board, which sets direction and hires officers who run the company. That is delegated governance.",
            sourceLessonSlug: "usf-c-corp",
          },
          {
            prompt: "The C-corporation is the vehicle built for:",
            options: [
              "wide outside investment",
              "avoiding all tax",
              "one-person shops",
              "charitable giving",
            ],
            correctIndex: 0,
            explanation: "A hard wall, standardised tradeable shares, and delegated governance are exactly what large-scale outside investment needs.",
            sourceLessonSlug: "usf-c-corp",
          },
          {
            prompt: "A nonprofit's defining limit is the non-distribution constraint, meaning it cannot:",
            options: [
              "earn any surplus",
              "hire any staff",
              "pay out profit",
              "own a building",
            ],
            correctIndex: 2,
            explanation: "It may earn a surplus but cannot distribute profit to owners, because it has no owners in the equity sense.",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "'Nonprofit' most accurately means the organisation:",
            options: [
              "never earns money",
              "pockets no surplus",
              "pays no salaries",
              "avoids all taxes",
            ],
            correctIndex: 1,
            explanation: "It can run a surplus; the constraint is that no one gets to pocket it. 'Nonprofit' does not mean 'makes no profit.'",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "A 501(c) status is best described as a:",
            options: [
              "state entity form",
              "private badge",
              "trade name",
              "federal tax status",
            ],
            correctIndex: 3,
            explanation: "It is pile two: a federal tax-exempt status laid on top of the state-law nonprofit entity underneath it.",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "Donations are generally deductible as charity only to a:",
            options: [
              "501(c)(3)",
              "501(c)(4)",
              "501(c)(6)",
              "limited partner",
            ],
            correctIndex: 0,
            explanation: "A (c)(4) and a (c)(6) can be tax-exempt, but gifts to them are generally not charitable deductions for the donor.",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "Tax-exempt asks if the organisation pays; tax-deductible asks if the:",
            options: [
              "state waives fees",
              "donor can subtract",
              "board draws pay",
              "profit is shared",
            ],
            correctIndex: 1,
            explanation: "Exempt is about the entity's own income; deductible is about the donor's return. Confusing the two is the classic nonprofit error.",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "On endorsing or opposing candidates, a 501(c)(3) is:",
            options: [
              "free to endorse",
              "absolutely barred",
              "required to vote",
              "taxed per race",
            ],
            correctIndex: 1,
            explanation: "A (c)(3) is absolutely prohibited from campaign intervention. The idea that a charity can endorse a candidate is simply wrong.",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "A 501(c)(6) is typically a:",
            options: [
              "public charity",
              "social club",
              "business league",
              "family trust",
            ],
            correctIndex: 2,
            explanation: "Business leagues, chambers of commerce and trade associations organise under (c)(6) to promote a common business interest.",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "Compared with a (c)(3), a 501(c)(4) has more room to:",
            options: [
              "pocket its surplus",
              "skip its board",
              "take charity gifts",
              "engage in politics",
            ],
            correctIndex: 3,
            explanation: "A (c)(4) social welfare group may take part in some political campaign activity within limits, if it is not the primary activity.",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "A nonprofit corporation's owners, in the equity sense, are:",
            options: [
              "the donors",
              "the officers",
              "nobody",
              "the state",
            ],
            correctIndex: 2,
            explanation: "There are no equity owners; the non-distribution constraint replaces owners, and a board governs the mission.",
            sourceLessonSlug: "usf-nonprofits",
          },
          {
            prompt: "The exact lobbying and political limits for each 501(c) status are:",
            options: [
              "set by the donor",
              "routed to the IRS",
              "fixed by the state",
              "listed in full here",
            ],
            correctIndex: 1,
            explanation: "Those are federal rules with detail the course will not assert from memory, so it routes you to the IRS pages and a professional.",
            sourceLessonSlug: "usf-nonprofits",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Benefit corporation vs Certified B Corp
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "usf-benefit-corporation",
      title: "16 · The benefit corporation: a legal form",
      section: "Section 5 · Benefit corporation vs Certified B Corp",
      body: `The last two lessons take on the confusion that most content blurs, and lesson 3 already armed you for it: a **benefit corporation** is pile one (an entity), and a **Certified B Corp** is pile three (a certification). They sound alike, and people use "B Corp" for both, but they are conferred by different bodies and are different kinds of thing. This lesson is the entity. The next is the certification.

## What a benefit corporation is

A **benefit corporation** is a **corporate entity form recognised by state statute.** It is a corporation, formed by filing with the state like any other, with one built-in difference: its charter commits it to pursuing a **public benefit** alongside profit, and its **directors are legally allowed, and generally required, to weigh the interests of people beyond the shareholders** (workers, community, environment) when they make decisions. An ordinary corporation's board is usually focused on shareholder interests; a benefit corporation's board is given a broader mandate by law.

Most benefit-corporation statutes also add an **accountability element**: the company must consider its stated benefit and, in many statutes, report on it. The details of that reporting are state-specific and this course will not assert them from memory; the point that travels is that the public-benefit purpose is written into the **legal** structure, not just the marketing.

## The benefit corporation against the four decisions

- **Liability: limited**, like any corporation. The wall is standard.
- **Taxation: ordinary corporate taxation.** A benefit corporation is **not** a tax status and gets **no special tax treatment** for being one. This is worth saying plainly: choosing the benefit-corporation form does not, by itself, change decision two.
- **Ownership and transfer: shareholders holding shares**, like a normal corporation.
- **Governance: the one modified column.** The board's duties are widened by statute to include the public benefit, which changes who the directors may lawfully serve. **Governance is where the benefit corporation actually differs from a plain corporation**, which is a tidy last example of a single decision-column being moved while the others hold.

## A "read the state" form

Two honest notes, because this form varies:

- **The name varies.** Many states call it a **benefit corporation**; some, including Delaware, use **public benefit corporation** (PBC). Same family, different label. Confirm your state's term with its Secretary of State.
- **Availability and details vary.** The first US benefit-corporation law took effect in 2010, and most states have since enacted some version, but not all, and the exact duties and reporting differ (as commonly documented). Whether the form exists where you are, and what it requires, is a state question you take to the primary source.

So the benefit corporation is a genuine entity: a corporation with a legally widened purpose, granted by a state, answering all four decisions with only governance changed. Keep that in mind for the next lesson, where a thing with a very similar name turns out not to be an entity at all. And, as always, whether this form fits a real mission-driven business is a lawyer's question, not this lesson's.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- B Lab. (n.d.). *Benefit corporations and Certified B Corporations*. https://www.bcorporation.net/`,
      recallContent: [
        {
          prompt: "What are the two layers stacked in a nonprofit?",
          answer: "Layer one is a state-law entity, usually a nonprofit corporation with a board and the non-distribution constraint (no owners taking profit). Layer two is a federal tax-exempt status under section 501(c), applied on top.",
        },
        {
          prompt: "Explain the difference between tax-exempt and tax-deductible.",
          answer: "Tax-exempt asks whether the organisation pays tax on its own income; all three main 501(c) types broadly do not. Tax-deductible asks whether a donor can subtract a gift on their return; generally only gifts to a 501(c)(3) qualify as charitable deductions.",
        },
        {
          prompt: "On endorsing candidates, how do (c)(3), (c)(4) and (c)(6) differ?",
          answer: "A 501(c)(3) is absolutely barred from campaign intervention and cannot endorse or oppose candidates. A (c)(4) or (c)(6) may take part in some political campaign activity within limits, as long as it is not the organisation's primary activity.",
        },
        {
          prompt: "What is a typical 501(c)(6), and what is a typical 501(c)(3)?",
          answer: "A (c)(6) is a business league, chamber of commerce or trade association promoting a common business interest. A (c)(3) is a charitable, religious, educational or scientific organisation, and gifts to it are generally deductible.",
        },
      ],
    },
    {
      slug: "usf-certified-b-corp",
      title: "17 · The Certified B Corp: a private certification",
      section: "Section 5 · Benefit corporation vs Certified B Corp",
      body: `Now the thing with the confusingly similar name. A **Certified B Corporation**, or **Certified B Corp**, is **not a legal form.** It is a **private certification** granted by a nonprofit organisation called **B Lab** to companies that meet its standard for social and environmental performance, accountability, and transparency. It is pile three: a badge, conferred by a private body, that by itself answers **none** of the four decisions.

## What the certification is, and is not

- **What it is:** a mark that an independent private organisation has assessed the company against a published standard (commonly known as the B Impact Assessment) and found it meets the bar. It functions as a **trust signal**, like other private certifications a company might display.
- **What it is not:** it is **not granted by any government**, it does **not** create or change a legal entity, and it does **not** by itself alter liability, taxation, ownership, or governance. A company does not "become" anything legally new by earning it.

Because the certification rides on top of whatever the company already is, **any entity type can hold it.** A Certified B Corp might be an LLC, a C-corporation, or a benefit corporation underneath. When you meet one, you still have to ask which pile-one entity it actually is before you know its liability or governance. The badge tells you it met a standard, not what it legally is.

## The blur, told apart

Here is the whole confusion in one table. Read it twice; it is the payoff of the section.

| Question | Benefit corporation | Certified B Corp |
|---|---|---|
| **Which pile?** | Entity (pile one) | Certification (pile three) |
| **Who confers it?** | The state, by statute | B Lab, a private nonprofit |
| **Is it a legal form?** | Yes | No |
| **Does it set any of the four decisions?** | Yes, all four (governance modified) | None by itself |
| **Can any entity type hold it?** | No, it is its own corporate form | Yes, it rides on an existing entity |

**A company can be one, both, or neither.** It can be a benefit corporation without B Lab certification, a Certified B Corp organised as a plain LLC, both at once, or neither. They are independent because one is a legal status from a government and the other is a private assessment.

## One genuine connection, kept conceptual

There is a real link worth naming carefully. B Lab's certification includes a **legal-accountability requirement**: to keep the badge, a company is expected to bake stakeholder consideration into its governing documents, which **in places where the benefit-corporation form exists can mean adopting it.** So the two things touch. But touching is not being the same: the **requirement to adopt stakeholder governance** comes from a private certifier's rules, while the **legal form** comes from a state. The exact current requirement is B Lab's to set and change, so confirm it with B Lab rather than trusting a remembered version. The distinction to keep is clean: **one name is a legal entity a state creates; the other is a certification a private organisation grants**, and blurring them is the error this section exists to fix.

## Sources
- B Lab. (n.d.). *B Corp certification*. https://www.bcorporation.net/
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What is a benefit corporation, and which pile is it in?",
          answer: "It is a corporate entity form recognised by state statute (pile one): a corporation, formed by filing with the state, whose charter commits it to a public benefit and whose directors are legally allowed and generally required to weigh interests beyond shareholders.",
        },
        {
          prompt: "Which single decision-column does the benefit corporation change, and which does it not?",
          answer: "It modifies governance, widening the board's duties to include the public benefit. It does not change taxation: a benefit corporation is not a tax status and gets no special tax treatment, and its liability and ownership are those of an ordinary corporation.",
        },
        {
          prompt: "Why is the benefit corporation a 'read the state' form?",
          answer: "The name varies (some states, including Delaware, say 'public benefit corporation'), and availability, duties and reporting differ by state. The first US law took effect in 2010 and most states now have a version, but you confirm with the Secretary of State.",
        },
        {
          prompt: "Is the public-benefit purpose of a benefit corporation in its marketing or its legal structure?",
          answer: "In its legal structure. The commitment to a public benefit and the widened director duties are written into the entity by statute, not merely stated in marketing.",
        },
      ],
    },
    {
      slug: "usf-quiz-benefit-vs-bcorp",
      title: "18 · Quiz: benefit corporation vs Certified B Corp",
      section: "Section 5 · Benefit corporation vs Certified B Corp",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A benefit corporation is best described as a:",
            options: [
              "private badge",
              "federal tax status",
              "legal entity form",
              "trade name filing",
            ],
            correctIndex: 2,
            explanation: "It is pile one: a corporate entity form recognised by state statute, formed by filing with the state.",
            sourceLessonSlug: "usf-benefit-corporation",
          },
          {
            prompt: "A benefit corporation's directors are legally allowed to weigh:",
            options: [
              "only the shareholders",
              "more than shareholders",
              "only the lenders' terms",
              "no one's interests",
            ],
            correctIndex: 1,
            explanation: "Its charter commits it to a public benefit, and the board's duties are widened by statute to consider workers, community and environment.",
            sourceLessonSlug: "usf-benefit-corporation",
          },
          {
            prompt: "For being a benefit corporation, the special tax treatment it gets is:",
            options: [
              "none at all",
              "a full exemption",
              "a lower rate",
              "a pass-through",
            ],
            correctIndex: 0,
            explanation: "A benefit corporation is not a tax status; it pays ordinary corporate tax. Choosing the form does not by itself change decision two.",
            sourceLessonSlug: "usf-benefit-corporation",
          },
          {
            prompt: "Which of the four decisions does the benefit corporation actually modify?",
            options: [
              "the liability",
              "the taxation",
              "the ownership",
              "the governance",
            ],
            correctIndex: 3,
            explanation: "Governance is the changed column: the board's duties are widened to include the public benefit, while the others hold like a corporation.",
            sourceLessonSlug: "usf-benefit-corporation",
          },
          {
            prompt: "Some states, including Delaware, call the form a:",
            options: [
              "public benefit corp",
              "certified B corp",
              "charitable trust",
              "social S-corp",
            ],
            correctIndex: 0,
            explanation: "The name varies: many states say 'benefit corporation,' some say 'public benefit corporation.' Confirm the term with the state.",
            sourceLessonSlug: "usf-benefit-corporation",
          },
          {
            prompt: "A Certified B Corp is granted by:",
            options: [
              "the home state",
              "the IRS office",
              "B Lab, a nonprofit",
              "a county court",
            ],
            correctIndex: 2,
            explanation: "It is a private certification from the nonprofit B Lab, not conferred by any government. That makes it pile three.",
            sourceLessonSlug: "usf-certified-b-corp",
          },
          {
            prompt: "By itself, a Certified B Corp badge sets how many of the four decisions?",
            options: ["all four", "just two", "only one", "none"],
            correctIndex: 3,
            explanation: "It is a certification, a trust signal, that rides on an entity. It does not alter liability, taxation, ownership or governance by itself.",
            sourceLessonSlug: "usf-certified-b-corp",
          },
          {
            prompt: "A Certified B Corp underneath the badge might legally be:",
            options: [
              "no entity at all",
              "an LLC or corporation",
              "a federal agency",
              "a tax election",
            ],
            correctIndex: 1,
            explanation: "Any entity type can hold the certification, so you still must ask which pile-one entity it is to know its liability and governance.",
            sourceLessonSlug: "usf-certified-b-corp",
          },
          {
            prompt: "The benefit corporation and the Certified B Corp differ most in:",
            options: [
              "who confers them",
              "their exact names",
              "their color scheme",
              "their founding year",
            ],
            correctIndex: 0,
            explanation: "One is a legal form conferred by a state; the other is a certification conferred by a private nonprofit. That is the core distinction.",
            sourceLessonSlug: "usf-certified-b-corp",
          },
          {
            prompt: "Regarding the two, a single company can be:",
            options: [
              "only ever one",
              "one, both, or neither",
              "neither, ever",
              "both by default",
            ],
            correctIndex: 1,
            explanation: "They are independent: a legal status from a state and a private assessment. A company can hold either, both, or neither.",
            sourceLessonSlug: "usf-certified-b-corp",
          },
          {
            prompt: "B Lab's legal-accountability requirement comes from:",
            options: [
              "a state statute",
              "the tax code",
              "a private certifier",
              "a court ruling",
            ],
            correctIndex: 2,
            explanation: "The requirement to bake in stakeholder governance is B Lab's own certification rule, not a law, even where it means adopting a legal form.",
            sourceLessonSlug: "usf-certified-b-corp",
          },
          {
            prompt: "The public-benefit purpose of a benefit corporation lives in its:",
            options: [
              "marketing copy",
              "legal structure",
              "annual ads",
              "logo design",
            ],
            correctIndex: 1,
            explanation: "The commitment and the widened director duties are written into the entity by statute, not merely stated in marketing.",
            sourceLessonSlug: "usf-benefit-corporation",
          },
          {
            prompt: "Saying 'we are a B Corp, so we are a benefit corporation' is:",
            options: [
              "always exactly right",
              "a legal state filing",
              "false; different things",
              "a federal tax election",
            ],
            correctIndex: 2,
            explanation: "One is a private certification and the other a legal entity form, conferred by different bodies; a company can hold one without the other.",
            sourceLessonSlug: "usf-certified-b-corp",
          },
          {
            prompt: "To confirm B Lab's current certification requirements, you should ask:",
            options: [
              "the state office",
              "the IRS help line",
              "an old blog post",
              "B Lab itself",
            ],
            correctIndex: 3,
            explanation: "The requirement is B Lab's to set and change, so you confirm it with B Lab rather than trusting a remembered version.",
            sourceLessonSlug: "usf-certified-b-corp",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · The capstone  (match a scenario to a form and defend it against the four)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "usf-capstone",
      title: "19 · Capstone: match a scenario to a form and defend it",
      section: "Section 6 · Match a scenario and defend it",
      lessonType: "assignment",
      body: `You have read the whole US menu and sorted it into three piles: entities, tax statuses, and certifications. This capstone asks you to **use** that, not to give advice. It is course 1's capstone with a bigger menu and one added trap: you now have to place the S election and the Certified B Corp correctly as things that are **not** entity types.

## The assignment

Pick **one scenario** below (or write your own that is just as concrete). In **700 to 1,100 words**, **choose a plausible form for it and defend that choice against the four decisions**, then defend it against **one specific alternative** you rejected. The deliverable is an argument, not a recommendation to a real person.

**Read this line twice, because it is the point of the assignment and the rule of the course:** you are not giving legal or tax advice, and you must say so in your piece. You are demonstrating that you can *reason with the four decisions* across the real US forms. A real version of this choice goes to a lawyer and an accountant, and your piece should say so in as many words.

## The scenarios

1. **Three lawyers opening a firm.** Three licensed attorneys want to practise together and share profits, and each is worried about being personally ruined if a different partner is sued for malpractice.
2. **A fund manager and passive investors.** One experienced operator wants to run a small real-estate fund, raising money from a handful of investors who want to put in cash, cap their downside, and stay out of management.
3. **A mission-driven products company that will raise money.** Founders want to sell goods, commit the company in law to an environmental mission, and eventually take outside investment, and they keep hearing the phrase "B Corp."
4. **A neighborhood group serving the community.** Residents want to run a food-and-tutoring program funded by donations, and they are arguing about whether they will be allowed to endorse candidates in the next local election.

## What your piece must contain

**1. Name the form, up front, and its pile.** One sentence: the entity you are choosing and, if relevant, any tax status or certification that rides on top of it. Be explicit that a tax election or a certification is not itself the entity. No suspense.

**2. Defend it against all four decisions, one at a time.** A short paragraph each, in order:

| Decision | What your paragraph must answer |
|---|---|
| **Liability** | Who pays if the business cannot? Does your form put up a wall, and where might that wall leak for this scenario (a personal guarantee, thin records, an active limited partner, a partner's own malpractice)? |
| **Taxation** | On whose return does the profit land? Is the tax treatment set by the form or by a separate election, and does that matter here? |
| **Ownership and transfer** | Who owns it, what is a stake called, and can an owner leave or sell? For a nonprofit, note there are no equity owners. |
| **Governance** | Who decides? Direct or delegated? For a benefit corporation, name the widened director duty; for a co-op-style choice, note one member one vote. |

**3. Defend it against one specific alternative.** Name a different form you seriously considered and say, in the language of the four decisions, why you rejected it for this scenario. Be specific: a real alternative, a real reason.

**4. Handle any tax status or certification correctly.** If your scenario tempts an S election, a 501(c) status, or a Certified B Corp, say plainly which pile it is in and what it does and does not change. Getting the pile right is graded as heavily as the entity choice.

**5. Point at the primary source.** Say which document or portal you would actually read to confirm the form works in a real state (the state's Secretary of State, the articles or operating agreement, the relevant IRS page), because the four decisions are universal but the paperwork is local.

**6. State the limit.** One clear sentence that your piece is an exercise in reasoning, not legal or tax advice, and that a real decision belongs with a licensed professional.

## Rules you do not get to break

1. **No invented law.** Do not cite a statute section, a tax rate, a fee, an income threshold, a shareholder cap or a deadline from memory. If your argument needs a specific value, write "I would confirm this at [the primary source]" instead of asserting a number. This is the course's rule and it is the professional habit.
2. **Place the piles correctly.** An S-corp is a tax election, a Certified B Corp is a certification, and a benefit corporation is an entity. Treating any of them as the wrong kind of thing is the one error the capstone most wants you to avoid.
3. **Reason with the four, every time.** Every claim about your form should trace to liability, taxation, ownership and transfer, or governance. If a sentence does not touch one of the four, ask why it is there.
4. **The alternative must be real.** Rejecting "doing nothing" or a made-up form does not count. Pick a form from this course and argue against it honestly.
5. **Where the honest answer is 'it depends on facts I do not have,' say that.** "It depends on the state," "it depends on whether they take outside money," "an accountant would weigh this," and "I would confirm the LLP shield's scope in this state" are professional sentences, not evasions.

## What good looks like

A short piece in which someone who has never taken this course could, from your four paragraphs alone, reconstruct what the form is and why it fits, in which you never once pretend to know a legal or tax value you would actually have to look up, and in which every tax status or certification is filed in the correct pile. **You are not proving you know the answer. You are proving you know the questions, and that you can tell an entity from a tax status from a badge, which is the whole course.**

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.-a). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures
- Internal Revenue Service. (n.d.-b). *Types of tax-exempt organizations*. https://www.irs.gov/charities-non-profits/types-of-tax-exempt-organizations`,
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
