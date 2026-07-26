// Authored "Capstone: Choose a Form and Defend It" — course 7, the CAPSTONE and final course of
// the "How a Business Is Formed" learning path (plans/46, Path B, course 7). A cited,
// high-school-and-up course on Learn.WitUS.
//
// WHY THIS COURSE EXISTS (the structural argument, from plans/46)
// --------------------------------------------------------------
// This is the LAST course of Path B, so it does not teach a new form. It teaches the learner to
// REASON: given a real scenario, pick a business form and DEFEND it against the four decisions
// (liability, taxation, ownership and transfer, governance) AND against one specific named
// alternative (why not an LLC here, why not a co-op there). It pulls the whole path together:
//     course 1  the four decisions and reading formation documents (the method);
//     course 2  the US forms, and the S-corp as a tax ELECTION, not an entity type;
//     course 3  cooperatives, and one member one vote;
//     course 4  financing without access (when the capital system excludes you, you invent an entity);
//     course 5  how other countries form businesses (the American set is not universal);
//     course 6  governance, boards, and one share one vote vs one member one vote.
// The signature move is course 1's capstone widened to the whole menu and made GRADED: the learner
// reasons from scenario to form to a written, rubric-scored defense.
//
// THE HARD RULE, which is the ethical spine of the file
// -----------------------------------------------------
// NOT LEGAL, TAX, OR FINANCIAL ADVICE, stated plainly and repeatedly, and repeated inside the graded
// assignment itself. This course teaches what to ASK a licensed professional. It invents no statute
// section, tax rate, threshold or filing fee from memory. Where it touches law (pass-through vs
// entity-level tax, limited vs unlimited liability, the S election under Subchapter S, one share one
// vote vs one member one vote, the 501(c) categories) it stays CONCEPTUAL AND ACCURATE and routes
// specifics to a professional and the primary source. It does not re-derive the earlier courses; it
// USES them.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles in a `## Sources` block are
// the only place a dash could survive, and none of the sources here carry one.

import type { AuthoredCourse } from "./authored-course";

export const CHOOSE_A_FORM_CAPSTONE_COURSE: AuthoredCourse = {
  title: "Capstone: Choose a Form and Defend It",
  description:
    "The final course of the 'How a Business Is Formed' path, and its graded capstone. It is not legal, tax, or financial advice, and it says so throughout, including inside the assignment: it teaches you what to ASK a lawyer or accountant, not the answer for your situation. This course does not teach a new form. It teaches you to REASON: given a real scenario, read it into the four decisions (who pays the debts, who pays the tax, who owns it and how ownership moves, and who decides), choose a plausible form, and defend that choice against all four decisions and against one specific alternative you rejected. It pulls the whole path together, the four decisions and the formation documents from course 1, the US forms and the S-corp-as-a-tax-election from course 2, cooperatives and one member one vote from course 3, the invent-an-entity story of financing without access from course 4, the foreign forms from course 5, and governance from course 6. You will work three or four scenarios end to end, a solo freelancer, a founder raising venture money, a worker collective, and a community nonprofit, watching the trade-offs and the honest 'it depends' at each step, without asserting a single invented statute, rate, or fee. Then the graded capstone asks you to do it yourself: pick a scenario, name a form, and defend it against the four and against a named alternative, to a rubric. You are not proving you know the one right answer. You are proving you know the questions.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · From scenario to a defended form  (the reasoning method, the whole path recapped)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "cfc-what-this-is",
      title: "1 · What this capstone is, and the rule it still runs on",
      section: "Section 1 · From scenario to a defended form",
      body: `This is the last course of the path, and it is different from the six before it. It does not teach you a new business form. **It teaches you to reason**: to take a real situation, work out what it actually needs, choose a form, and then defend that choice out loud so that someone could check your thinking. Everything the path built is a tool you now pick up and use.

## The one rule, stated first because it governs everything after it

**This course is not legal advice, it is not tax advice, and it is not financial advice.** It cannot be. Your situation has facts this course does not know, and the right answer depends on those facts and on the state and country you are in. What this course gives you is not the answer. **It gives you the questions, and it teaches you to ask and defend them well** (U.S. Small Business Administration, n.d.).

You will see that line again, including inside the graded assignment, because the whole point of the capstone is to demonstrate reasoning, not to steer a real person. **When a real decision is on the line, you take these questions to a licensed professional**, a lawyer and an accountant, and this course says so every time the stakes rise.

Because of that rule, this course also refuses to invent. It names no statute section from memory, quotes no tax rate, asserts no filing fee, and makes up no citation. Where it touches the law it stays **conceptual and accurate**, and it points you at the primary source so you can verify rather than trust.

## The idea the whole path is built on, in one sentence

**A business entity is a bundle of four decisions**, and every form on earth is a different answer to them:

1. **Liability.** If the business cannot pay its debts, who does? The business only, or the owners personally?
2. **Taxation.** When the business earns, who pays the tax? The business, the owners, or some mix?
3. **Ownership and transfer.** Who owns it, and how does a piece move from one person to another?
4. **Governance.** Who gets to decide? The owners directly, a manager, a board?

You do not have to memorise a menu of forms. You hold four questions, and the forms become readable, including forms you have never seen and foreign ones.

## What the path handed you, and what you do with it now

You arrive at this capstone carrying the whole path:

| Course | What it gave you |
|---|---|
| **1. The method** | The four decisions, and reading formation documents as primary sources |
| **2. The US forms** | Sole prop, partnership, LLC, C-corp, nonprofits, and the S-corp as a tax election |
| **3. Cooperatives** | Member ownership and one member one vote |
| **4. Financing without access** | When the capital system excludes you, you invent an entity |
| **5. Foreign forms** | The American set is not universal; the four decisions still place any of them |
| **6. Governance** | Boards, fiduciary duty, one share one vote vs one member one vote |

**This course turns that knowledge into a skill.** Knowing what an LLC is, is course 2. Looking at a specific situation and arguing that an LLC fits it better than a C-corp, against the four decisions, is this course. That second thing is what a good client can do in a room with a lawyer, and it is what the capstone grades.

## Where this is going

The rest of Section 1 teaches the reasoning method: that a scenario rarely has one right form, how to read a scenario into the four decisions, how to build a defense, and a recap of the whole menu you now carry. Section 2 works three or four scenarios end to end so you can see the method run. Then the graded capstone asks you to do it yourself.

**One more time, because it is the rule:** this is a course about how to reason and how to defend, not advice about your business. Keep a lawyer and an accountant in the picture for anything real.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
    },
    {
      slug: "cfc-rarely-one-form",
      title: "2 · There is rarely one right form: the facts decide",
      section: "Section 1 · From scenario to a defended form",
      body: `Before you learn to choose a form, unlearn the thing that makes people choose badly: **the belief that every situation has one correct answer, waiting to be looked up.** It almost never does. Two thoughtful people can read the same scenario, pick different forms, and both be defensible, because they read the facts differently or weighed the four decisions differently.

## Why there is rarely one answer

The four decisions pull in different directions, and a real situation usually has facts pushing toward more than one form. A founder who wants a liability wall **and** wants to keep taxes simple **and** wants to raise outside money is being pulled by three decisions at once, and no single form is perfect on all three. **A choice is a set of trade-offs, not a lookup**, and the honest version says which trade-offs it accepted.

That is not a weakness of the method. It is the subject. **What makes a form choice strong is not that it is "the" answer. It is that it is well defended:** argued against each of the four decisions, and argued against the specific alternatives someone might reasonably prefer (U.S. Small Business Administration, n.d.).

## The facts that actually move the answer

Most of the story in a scenario is not structural. Branding, the product, the store hours, the founder's résumé: interesting, but they rarely change the form. **A small set of facts does move it**, and learning to spot them is half the skill:

| A fact like this... | ...pushes on this decision |
|---|---|
| "Someone could get hurt and sue" | Liability (wants a wall) |
| "They want to raise money from investors" | Ownership and transfer (wants tradeable shares) |
| "Each member gets an equal say, whatever they put in" | Governance (one member one vote) |
| "It runs on donations and a mission, not on profit" | Ownership and taxation (a nonprofit has no owners) |
| "It is small, simple, and just starting" | Taxation and governance (keep it light) |

**One fact can flip a whole decision.** "They want outside investors" turns the ownership question from "keep it in known hands" to "standardised, tradeable shares," and that alone can change the recommended form. Reading for the flipping fact is what you practise next.

## "It depends" is a professional sentence, not a dodge

Because the facts decide, the most honest thing a defense can say is often **"it depends,"** followed by what it depends on. "It depends on whether they take outside money." "It depends on the state, because cooperative statutes differ." "An accountant would weigh the entity-level tax here." **Those are not evasions. They are the sentences a good professional actually says**, because they name the missing fact instead of pretending to know it. A defense that never once says "it depends" is usually hiding an assumption it did not check.

**The not-advice rule, in this lesson's terms:** you are learning to argue a defensible choice, not to declare the choice for a real person. The person who declares it, for a real business with real money, is a licensed professional who knows the facts you do not.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "What is the one idea the whole path is built on, and what does this capstone add?",
          answer: "A business entity is a bundle of four decisions (liability, taxation, ownership and transfer, governance), and every form is a different answer to them. The capstone turns knowing the forms into the skill of reasoning from a scenario to a form to a defended choice.",
        },
        {
          prompt: "Is this course legal, tax, or financial advice, and what does it give instead?",
          answer: "No. It gives you the questions to ask and teaches you to defend them, then sends you to a licensed professional (a lawyer and an accountant) for any real decision. It repeats this even inside the graded assignment.",
        },
        {
          prompt: "Name three of the six courses this capstone pulls together, and one thing each gave you.",
          answer: "Any three of: course 1 the four decisions and reading formation documents; course 2 the US forms and the S-corp as a tax election; course 3 cooperatives and one member one vote; course 4 invent-an-entity financing without access; course 5 foreign forms; course 6 governance and one share vs one member vote.",
        },
      ],
    },
    {
      slug: "cfc-read-scenario",
      title: "3 · Reading a scenario into the four decisions",
      section: "Section 1 · From scenario to a defended form",
      body: `Here is the first concrete move of the method: **turn a story into four questions.** A scenario arrives as a paragraph about people and a plan. Before you name any form, you sort what matters in that paragraph under the four decisions, and you notice what does not matter at all.

## The move, step by step

1. **Read for the risk (liability).** Could this business hurt someone, owe money it cannot pay, or get sued? The more real that risk, the more the scenario is asking for a liability wall.
2. **Read for the money flow (taxation).** How big and how simple is it? Is anyone talking about outside investors or reinvesting profit? You are not computing a tax bill (you never do that from memory); you are noticing whether the situation wants pass-through simplicity or is heading somewhere the tax question gets weighed by an accountant.
3. **Read for the owners (ownership and transfer).** How many owners, and do they need to bring in or buy out others? "They want investors" and "each person owns an equal, permanent stake" point to opposite answers here.
4. **Read for who decides (governance).** Do the owners want to run it themselves, appoint someone, or give every member an equal vote? Watch for the deadlock trap: two owners, fifty-fifty, no tie-breaker.

## A worked mini-read

Take a plain scenario: **two friends want to sell food from a cart on weekends, splitting everything evenly.** Sort it:

| Decision | What the facts say |
|---|---|
| **Liability** | Food, a cart, the public: someone could get sick or slip and sue. Real risk, so a wall matters. |
| **Taxation** | Small and simple. Pass-through would keep it easy. Nobody mentioned investors. |
| **Ownership and transfer** | Two equal owners. No talk of selling stakes or bringing in outsiders. |
| **Governance** | They split everything evenly, which is fifty-fifty, which is a deadlock risk with no tie-breaker. |

Notice you have not named a form yet, and you already know the two things that matter most: **this scenario wants a liability wall and needs a deadlock plan.** That is the read doing its job.

## Set aside what is not structural

The same scenario probably mentions the food being great, a catchy cart name, and weekend hours. **None of that touches the four decisions**, so it does not change the form. A common beginner error is to let colourful facts drive a structural choice. Discipline is sorting the paragraph into "moves a decision" and "does not," and only the first pile chooses a form.

## Name the flipping fact

Finally, look for the one fact that would change everything if it were there. Add "and they want to raise money from investors next year" and the ownership decision flips toward tradeable shares, which can change the whole recommendation. Add "and each member should get one equal vote no matter what they put in" and governance flips toward a cooperative. **Reading for the flipping fact is what lets you defend a choice against an alternative later**, because you can say exactly which fact you were serving.

**Not advice, as always:** this read tells you what the situation is asking for. It does not tell a real person what to file. That is a professional's call, made with facts a scenario leaves out.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "Why is there rarely one right form for a scenario?",
          answer: "The four decisions pull in different directions and a real situation has facts pushing toward more than one form, so a choice is a set of trade-offs, not a lookup. Two thoughtful people can pick different forms and both be defensible.",
        },
        {
          prompt: "What actually makes a form choice strong, if not being 'the' answer?",
          answer: "That it is well defended: argued against each of the four decisions and against the specific alternatives someone might reasonably prefer. Strength is in the defense, not in there being one correct answer.",
        },
        {
          prompt: "Why is 'it depends' often the most honest sentence in a defense?",
          answer: "Because the facts decide, and 'it depends on the state,' 'it depends on whether they take outside money,' and 'an accountant would weigh this' name the missing fact instead of pretending to know it. They are professional sentences, not evasions.",
        },
      ],
    },
    {
      slug: "cfc-defense-method",
      title: "4 · The defense: name it, defend the four, beat one alternative",
      section: "Section 1 · From scenario to a defended form",
      body: `You have read the scenario into the four decisions. Now build the defense, which is the deliverable this whole course is training you to produce. A defense has a fixed shape, and the shape is what makes it checkable by someone else.

## The five parts of a defense

**1. Name the form, up front.** One sentence: the form you are choosing and, if relevant, any tax status or certification that rides on top of it. No suspense, no burying it. If a tax election or a certification is involved, say plainly that it is not itself the entity (course 2's point).

**2. Defend it against all four decisions, one at a time, for THIS scenario.** Not "an LLC has limited liability" in the abstract, but "for these two friends and this cart, the wall matters because of the slip-and-sue risk, and here is where it could still leak." A short paragraph each, in order: liability, taxation, ownership and transfer, governance.

**3. Defend it against one specific alternative.** This is the part that separates a defense from a preference. **Name one form you seriously considered and rejected, and beat it in the language of the four.** "Why not a C-corp here? Because on taxation and governance, its entity-level tax and board formality buy nothing for a two-person cart." "Why not a plain LLC there? Because on governance, it does not give the members the one-vote-each rule they asked for." A defense with no named alternative is just a favourite.

**4. Point at the primary source.** Say which document or portal you would actually read to confirm the form works in a real state: the state's filing portal, the articles or operating agreement, the relevant agency page. **The four decisions are universal; the paperwork is local**, and you close that gap by naming where you would verify, not by asserting a local detail from memory.

**5. State the limit.** One clear sentence that your piece is reasoning, not legal, tax, or financial advice, and that a real decision belongs with a licensed professional.

## Why the alternative is the load-bearing part

Anyone can say "I would form an LLC." That is a preference. **A defense earns its name when it can say why the obvious runner-up loses**, in decision language, for these specific facts. Beating the alternative forces you to have actually weighed the trade-offs instead of reaching for the form you already liked. It is also exactly what a good adviser does in a real conversation: not "here is a form," but "here is why this form beats the one you were about to pick, given what you told me."

## Reason with the four, every time

A discipline that keeps a defense honest: **every claim you make about your form should trace to one of the four decisions.** If a sentence in your defense does not touch liability, taxation, ownership and transfer, or governance, ask why it is there. That rule keeps the argument from drifting into branding, vibes, or "everyone uses this one."

## Never assert a value you would have to look up

The defense method has one absolute rule, carried from the whole path: **when your argument needs a specific tax rate, fee, income threshold, or statute section, you do not supply it from memory.** You write "I would confirm this at the primary source" and name the source. Asserting a number you are not sure of is exactly the failure the not-advice rule exists to prevent, and in a real defense it is the fastest way to be wrong (Internal Revenue Service, n.d.).

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "What is the first move of the method, before naming any form?",
          answer: "Turn the story into four questions: read the scenario for risk (liability), money flow (taxation), owners (ownership and transfer), and who decides (governance), and set aside facts like branding and hours that do not move a decision.",
        },
        {
          prompt: "What is a 'flipping fact,' and why does it matter for the defense?",
          answer: "A single fact that changes a whole decision, such as 'they want outside investors' (flips ownership toward tradeable shares) or 'each member gets one equal vote' (flips governance toward a co-op). It matters because you can then defend a choice by naming exactly which fact you were serving.",
        },
        {
          prompt: "In the worked cart read, which two things mattered most before any form was named?",
          answer: "That the scenario wants a liability wall (food and the public means slip-and-sue risk) and needs a deadlock plan (two owners splitting evenly is fifty-fifty with no tie-breaker).",
        },
      ],
    },
    {
      slug: "cfc-the-menu",
      title: "5 · The menu you carry into the defense",
      section: "Section 1 · From scenario to a defended form",
      body: `A defense is only as good as the options you can compare. So before the worked scenarios, here is the whole menu the path handed you, laid out as answers to the four decisions. **You are not memorising it. You are confirming you can place any of these with the four questions**, because the alternative you beat in a defense will come from this menu.

## The US forms (course 2)

| Form | Liability | Taxation | Ownership | Governance |
|---|---|---|---|---|
| **Sole proprietorship** | none (unlimited) | pass-through | one owner, no share | you decide |
| **General partnership** | none (unlimited) | pass-through | partners, informal | partners decide |
| **LLC** | a wall | flexible (pass-through by default) | membership interests, often restricted | member- or manager-managed |
| **C-corporation** | a wall | entity-level (the double tax) | shares, built to trade | shareholders elect a board |
| **Nonprofit corporation** | a wall | may apply for tax-exempt status | no equity owners at all | a board with fiduciary duty |

And the trap course 2 spent a whole lesson on: **the S-corp is not an entity type. It is a federal tax election** (under Subchapter S) that an eligible entity lays on top of itself. It changes only taxation and leaves the other three decisions to the entity underneath. When you reach for it in a defense, name the entity first, then the election (Internal Revenue Service, n.d.-a).

## Cooperatives (course 3)

A cooperative is member-owned, and its defining answer is on governance: **one member one vote**, not one share one vote. People control, not capital. Ownership is tied to participation rather than tradeable shares. When a scenario says "everyone gets an equal say regardless of what they put in," this is the part of the menu it is pointing at.

## Financing without access (course 4)

Course 4's lesson is less a form than a principle you can carry into any defense: **when the capital system excludes a community, that community invents an entity to do the job the banks would not.** Mutual benefit societies, building and loans, and rotating savings circles were all entity choices made for what the law let each one do. In a defense, this is the reminder that the "obvious" form is not the only tool, and that member-based and mutual structures are real options with real histories.

## Foreign forms (course 5)

The American menu is not universal. Other countries have their own forms, their own names, and sometimes rules the US does not have, such as mandatory worker representation on a board. **The four decisions still place every one of them**, because a foreign form is just a different set of answers to the same four questions. In a cross-border scenario, the discipline is to read the foreign form with the four and to name what does not translate, rather than forcing it into a US label.

## Governance (course 6)

Course 6 went deep on decision four: boards, the difference between serving shareholders and serving stakeholders, **fiduciary duty** (the legal obligation of those in control to act in the interest of the business and its owners), and the sharp line between **one share one vote** and **one member one vote** (Legal Information Institute, n.d.). Governance is where a co-op and a corporation truly diverge, and where a two-owner deadlock lives or dies.

## Using the menu

In a defense you will do two things with this table: **place your chosen form** in it, and **place the alternative you beat.** Both come from here. The skill the capstone grades is not reciting the table; it is picking the right two rows for a specific scenario and arguing between them in the language of the four decisions.

**The rule, once more:** this menu is conceptual and accurate, and it names no rate, fee, or threshold, because those are values a professional and the primary source own, not a course.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.-a). *S corporations*. https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations
- Internal Revenue Service. (n.d.-b). *Types of tax-exempt organizations*. https://www.irs.gov/charities-non-profits/types-of-tax-exempt-organizations
- International Cooperative Alliance. (n.d.). *Cooperative identity, values & principles*. https://www.ica.coop/en/cooperatives/cooperative-identity
- Legal Information Institute. (n.d.). *Fiduciary duty*. https://www.law.cornell.edu/wex/fiduciary_duty`,
      recallContent: [
        {
          prompt: "What are the five parts of a defense, in order?",
          answer: "Name the form up front; defend it against all four decisions for this scenario; defend it against one specific alternative in decision language; point at the primary source you would verify with; and state the limit that it is not legal, tax, or financial advice.",
        },
        {
          prompt: "Why is defending against a named alternative the load-bearing part?",
          answer: "Anyone can state a preferred form; a defense earns its name when it can say why the obvious runner-up loses, in decision language, for these facts. Beating the alternative forces you to have actually weighed the trade-offs, which is what a good adviser does.",
        },
        {
          prompt: "What do you do when a defense needs a specific rate, fee, threshold, or statute section?",
          answer: "You never supply it from memory. You write 'I would confirm this at the primary source' and name the source. Asserting an unsure number is exactly the failure the not-advice rule exists to prevent.",
        },
      ],
    },
    {
      slug: "cfc-quiz-method",
      title: "6 · Quiz: the reasoning method",
      section: "Section 1 · From scenario to a defended form",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "This capstone course mainly teaches you to:",
            options: ["reason to a form", "list every form", "give legal advice", "avoid all forms"],
            correctIndex: 0,
            explanation: "It does not teach new forms. It teaches reasoning from a scenario to a form to a defended choice, and it is not legal advice.",
            sourceLessonSlug: "cfc-what-this-is",
          },
          {
            prompt: "The rule this whole course runs on is that it is:",
            options: ["the final exam", "a form directory", "not legal advice", "a state statute"],
            correctIndex: 2,
            explanation: "It teaches what to ask a licensed professional; a real decision belongs with a lawyer and an accountant, and it repeats this even in the assignment.",
            sourceLessonSlug: "cfc-what-this-is",
          },
          {
            prompt: "The four decisions are liability, taxation, governance, and:",
            options: ["profit margin", "ownership", "brand voice", "market size"],
            correctIndex: 1,
            explanation: "The four are liability, taxation, ownership and transfer, and governance. Profit is an outcome, not a structural choice.",
            sourceLessonSlug: "cfc-what-this-is",
          },
          {
            prompt: "A single scenario usually has:",
            options: ["one legal form", "zero real forms", "a secret form", "a defensible form"],
            correctIndex: 3,
            explanation: "The facts rarely force one answer. A strong choice is one defended against the four decisions and against the alternatives.",
            sourceLessonSlug: "cfc-rarely-one-form",
          },
          {
            prompt: "What most makes a form choice strong is that it is:",
            options: ["well defended", "the cheapest", "the newest", "the biggest"],
            correctIndex: 0,
            explanation: "Strength comes from defending the choice against the four decisions and a named alternative, not from it being the single right answer.",
            sourceLessonSlug: "cfc-rarely-one-form",
          },
          {
            prompt: "Saying 'it depends on the state' in a defense is:",
            options: ["a weak dodge", "an honest limit", "always wrong", "never allowed"],
            correctIndex: 1,
            explanation: "Naming what the answer depends on is a professional habit, not an evasion. The paperwork is local even when the four decisions are universal.",
            sourceLessonSlug: "cfc-rarely-one-form",
          },
          {
            prompt: "The first move of the method is to turn a scenario into:",
            options: ["a sales pitch", "a business plan", "the four questions", "a single form"],
            correctIndex: 2,
            explanation: "You sort the facts under liability, taxation, ownership and transfer, and governance before naming any form.",
            sourceLessonSlug: "cfc-read-scenario",
          },
          {
            prompt: "In a scenario, facts about branding and store hours are usually:",
            options: ["the key facts", "the tax facts", "liability facts", "not structural"],
            correctIndex: 3,
            explanation: "They rarely map to any of the four decisions, so you set them aside and focus on facts that move a decision.",
            sourceLessonSlug: "cfc-read-scenario",
          },
          {
            prompt: "'They want outside investors' most flips which decision?",
            options: ["ownership", "liability", "taxation", "location"],
            correctIndex: 0,
            explanation: "Outside investment pushes ownership and transfer toward standardised, tradeable shares, which is a corporate feature.",
            sourceLessonSlug: "cfc-read-scenario",
          },
          {
            prompt: "A real defense argues the form against the four and against:",
            options: ["the newest law", "one alternative", "the founder", "the logo"],
            correctIndex: 1,
            explanation: "Naming one specific rejected form and beating it in the language of the four is what separates a defense from a preference.",
            sourceLessonSlug: "cfc-defense-method",
          },
          {
            prompt: "In the defense, you name the chosen form:",
            options: ["at the very end", "in a footnote", "up front, first", "only if asked"],
            correctIndex: 2,
            explanation: "You state the form and any tax status on top of it at the start, then defend it decision by decision. No suspense.",
            sourceLessonSlug: "cfc-defense-method",
          },
          {
            prompt: "When a defense needs a specific tax rate or fee, you should:",
            options: ["guess a number", "recall a rate", "cite a statute", "confirm at source"],
            correctIndex: 3,
            explanation: "You never assert a legal or tax value from memory. You point at the primary source where you would verify it.",
            sourceLessonSlug: "cfc-defense-method",
          },
          {
            prompt: "Across the whole path, the four decisions work as a:",
            options: ["shared frame", "new statute", "secret code", "tax bracket"],
            correctIndex: 0,
            explanation: "US forms, cooperatives, financing structures and foreign forms are all just different answers to the same four decisions.",
            sourceLessonSlug: "cfc-the-menu",
          },
          {
            prompt: "A foreign business form, on this path, is read as:",
            options: ["untranslatable", "a US form", "the same four", "always illegal"],
            correctIndex: 2,
            explanation: "A form you have never seen is just a different set of answers to liability, taxation, ownership and governance.",
            sourceLessonSlug: "cfc-the-menu",
          },
          {
            prompt: "The line between a co-op and an ordinary corporation is:",
            options: ["profit vs loss", "member vs share", "big vs small", "old vs new"],
            correctIndex: 1,
            explanation: "One member one vote (people control) versus one share one vote (capital controls) is pure decision four, governance.",
            sourceLessonSlug: "cfc-the-menu",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Four worked scenarios, end to end  (the method run, with the trade-offs named)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "cfc-scenario-freelancer",
      title: "7 · Worked scenario: the solo freelancer",
      section: "Section 2 · Four worked scenarios, end to end",
      body: `Now watch the method run all the way through. **The scenario:** one person does design work from home, has a handful of clients, wants to look professional and limit personal exposure, has no employees yet, and is not raising money from anyone. Read it into the four, choose a plausible form, defend it, and beat one alternative. This is a demonstration of reasoning, not advice to a real freelancer.

## Read it into the four

| Decision | What the facts say |
|---|---|
| **Liability** | A client could be unhappy with the work and sue. One person wants to keep personal savings out of reach, so a wall matters. |
| **Taxation** | Small and simple. No investors, no talk of reinvesting profit. Pass-through keeps it easy. |
| **Ownership and transfer** | One owner. No need to sell shares or bring anyone in. |
| **Governance** | Decides alone. No co-owner, so no deadlock risk. |

The read is clean: **the scenario wants a liability wall and otherwise wants to stay simple.**

## Name the form

A plausible choice is a **single-member LLC**: a form that provides a liability wall and is, by default, taxed as pass-through, so it stays simple. Note the shape of the sentence, entity first: it is an LLC, taxed the default way, not an "S-corp" or any tax label pretending to be an entity. **Not advice**, a demonstration.

## Defend it against the four

- **Liability.** The LLC is a separate legal person with a wall, which is the main thing the freelancer wanted. **Where it could leak:** if the freelancer signs a personal guarantee, or is personally negligent in the work, or treats the company as a personal wallet with no records, the wall gives way. A wall is real, not absolute, and the defense should say so.
- **Taxation.** By default the single-member LLC is pass-through, so profit lands on the owner's personal return and there is no separate entity tax to manage. That matches "small and simple." Whether a different tax election would ever help is an accountant's question, and the defense names it as one rather than answering it.
- **Ownership and transfer.** One member holds the whole interest. There is no need for tradeable shares because nobody is buying in. Transfer can stay restricted, which suits a one-person shop.
- **Governance.** Member-managed: the owner runs it. With one owner there is no deadlock to plan for, so governance is the easy decision here.

## Beat one alternative

**Why not a C-corporation?** On taxation and governance, the C-corp brings entity-level tax and board-and-officer formality, and for a solo freelancer with no outside investors and no shares to trade, that overhead buys almost nothing. The corporate machine is built to raise money widely; this freelancer is not raising money. **Why not just stay a sole proprietor?** Because a sole proprietorship has no wall at all, and limiting personal exposure was the whole reason to form something. The sole prop loses on decision one, which is the decision the scenario cared about most.

## Point at the source, and state the limit

To confirm this works, you would read **the state's business filing portal** (LLCs are creatures of state law, so the rules and fees are the state's, not something to assert from memory) and draft an **operating agreement**. And the limit: this is an exercise in reasoning, not legal, tax, or financial advice. A real freelancer takes this to a lawyer and an accountant.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures`,
      recallContent: [
        {
          prompt: "What are the five rows of the US-forms menu you carry into a defense, by liability?",
          answer: "Sole proprietorship and general partnership (no wall, unlimited), the LLC (a wall, flexible tax), the C-corporation (a wall, entity-level tax, tradeable shares), and the nonprofit corporation (a wall, no equity owners). The S-corp is not on it: it is a tax election on top of an entity.",
        },
        {
          prompt: "What is the cooperative's defining answer, and which decision is it?",
          answer: "One member one vote rather than one share one vote: people control, not capital, and ownership is tied to participation rather than tradeable shares. It is decision four, governance.",
        },
        {
          prompt: "What principle does course 4 (financing without access) carry into any defense?",
          answer: "When the capital system excludes a community, that community invents an entity to do the job banks would not. It is a reminder that the obvious form is not the only tool and that member-based and mutual structures are real options.",
        },
      ],
    },
    {
      slug: "cfc-scenario-venture",
      title: "8 · Worked scenario: the founder raising venture money",
      section: "Section 2 · Four worked scenarios, end to end",
      body: `A very different scenario, because a different fact is doing the work. **The scenario:** three founders are building software, plan to raise money from outside investors within a year, expect to grant equity to early employees, and assume shares will change hands. Read it into the four, choose a form, defend it, beat one alternative. A demonstration, not advice.

## Read it into the four

| Decision | What the facts say |
|---|---|
| **Liability** | Real business, real contracts, real risk. A wall is wanted, though nobody named it first. |
| **Taxation** | This is where the trade-off lives. The fundraising path points to a form whose tax cost the founders will knowingly accept. |
| **Ownership and transfer** | The flipping fact: outside investors, employee equity, shares changing hands. This decision is driving. |
| **Governance** | Investors will expect board seats and a familiar structure. Delegated governance, not run-it-yourselves. |

The read has a clear driver: **ownership and transfer, because of the fundraising.**

## Name the form

A plausible choice is a **C-corporation**, often formed in a state chosen for its well-developed corporate law. **Not advice**, a demonstration. The reason is not that the C-corp is "better," it is that it answers the decision this scenario is built around.

## Defend it against the four

- **Liability.** The corporation is a separate legal person with a wall, the same protection an LLC would give. Liability is not where this choice is won or lost; it is a floor both candidates clear.
- **Taxation.** Here is the honest cost: a C-corporation is its own taxpayer, so its profit is taxed at the entity level, the double-tax feature from course 2. The defense does not hide this. It says the founders accept an entity-level tax cost in exchange for the fundraising fit, and that an accountant weighs how much that cost bites.
- **Ownership and transfer.** This is why the C-corp wins. Standardised, tradeable **shares** are what priced investment rounds, employee option pools, and later share transfers all assume. Investors know how to buy shares; they do not want to negotiate a membership interest in an operating agreement.
- **Governance.** Delegated, in the board-and-officers shape investors expect: shareholders elect a board, the board hires officers. Investors typically want a board seat, and this structure gives them the familiar mechanism.

## Beat one alternative

**Why not an LLC?** The LLC's tax flexibility is genuinely attractive, and for many small businesses it wins. But **on ownership and transfer, the LLC fits venture fundraising poorly**: membership interests and a custom operating agreement are awkward for standard priced rounds and standard employee option grants, and many venture investors simply prefer not to invest through one. The LLC's strength (tax flexibility) does not solve the problem this scenario actually has (raising money on standard terms), and its weakness sits exactly on the driving decision. That is a real defense: not "the C-corp is best," but "the C-corp beats the LLC on the decision that is driving, and here is the tax cost I accepted to get there."

## Point at the source, and state the limit

You would confirm the choice against **the state's corporation statute and the charter**, and, because raising money from investors carries its own rules, read the relevant securities-regulator guidance rather than assume it (U.S. Securities and Exchange Commission, n.d.). And the limit: this is reasoning, not legal, tax, or financial advice. A real founding team makes this call early, with a lawyer and an accountant, because it is expensive to unwind.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.). *Forming a corporation*. https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov: Introduction to investing*. https://www.investor.gov/`,
      recallContent: [
        {
          prompt: "How did the solo-freelancer scenario read into the four decisions?",
          answer: "Liability: a client could sue, so a wall matters. Taxation: small and simple, pass-through fits. Ownership: one owner, no shares to sell. Governance: decides alone, no deadlock. The read wanted a wall and otherwise wanted to stay simple.",
        },
        {
          prompt: "Which form did the freelancer defense choose, and where could its wall still leak?",
          answer: "A single-member LLC (a wall, pass-through by default). The wall can leak through a personal guarantee, the owner's own negligence, or treating the company as a personal wallet with no records. A wall is real, not absolute.",
        },
        {
          prompt: "In the freelancer defense, why was the C-corp rejected and why not stay a sole proprietor?",
          answer: "The C-corp adds entity-level tax and board formality that buy almost nothing with no outside investors and no shares to trade. A sole proprietorship has no wall at all, and limiting personal exposure was the whole point, so it loses on liability.",
        },
      ],
    },
    {
      slug: "cfc-scenario-collective",
      title: "9 · Worked scenario: the worker collective",
      section: "Section 2 · Four worked scenarios, end to end",
      body: `Now a scenario where the driving decision is governance, and the menu you reach into is course 3, not course 2. **The scenario:** a group of workers wants to run a business together where the people who do the work are the owners, and where each member has an equal say regardless of how much money they put in. Read it into the four, choose a form, defend it, beat one alternative. A demonstration, not advice.

## Read it into the four

| Decision | What the facts say |
|---|---|
| **Liability** | A real operating business, so the members want a wall. Points to an incorporated form. |
| **Taxation** | Conceptual here: it depends on how the cooperative is organised and what it elects, an accountant's question. |
| **Ownership and transfer** | Member ownership, tied to working there, not tradeable shares sold to outsiders. |
| **Governance** | The flipping fact: an equal say for each member regardless of money. This is one member one vote, and it is driving. |

The driver is unmistakable: **governance, one member one vote.**

## Name the form

A plausible choice is a **worker cooperative**, where the state recognises a cooperative form, or a cooperative organised under another available statute where it does not. **Not advice**, a demonstration. The choice follows the driving decision: the members asked for one vote each, and the cooperative is the form built around exactly that.

## Defend it against the four

- **Liability.** Organised as an incorporated cooperative, it is a separate legal person with a wall, so the members are generally shielded from the business's debts, subject to the usual gaps.
- **Taxation.** The defense stays honest and conceptual: cooperative taxation has its own rules, and how this one is taxed depends on its structure and elections. This is a place to say "an accountant would confirm this," not to assert a rate.
- **Ownership and transfer.** Members own the cooperative through their participation, not through shares bought and sold on a market. Ownership is tied to being a worker there, which is exactly what "the people who do the work are the owners" asked for.
- **Governance.** This is where the choice is won. **One member one vote** gives each worker an equal say regardless of how much capital they contributed. People control, not capital. That single rule is the reason the cooperative beats the alternatives, and it is pure decision four (International Cooperative Alliance, n.d.).

## Beat one alternative

**Why not an ordinary corporation with equal shares?** At first it looks equivalent: give every worker the same number of shares and everyone is equal. But that is still **one share one vote**, and shares can be bought, sold, and accumulated, so over time control can concentrate in whoever ends up holding more, which is exactly what the members did not want. **The cooperative's one member one vote is durable and tied to participation**, not to a share count that can drift. On decisions three and four, the equal-shares corporation quietly fails the requirement the cooperative meets by design. That is the defense: same first impression, opposite behaviour on the decisions the members cared about.

## Point at the source, and state the limit

**Availability varies**, which is a course-5 lesson applied at home: cooperative statutes differ by state, so you would confirm the form exists and works where the collective is, reading the state's cooperative statute or the cooperative principles, with a lawyer who knows co-op law (International Cooperative Alliance, n.d.). And the limit: this is reasoning, not legal, tax, or financial advice, and a real worker collective takes it to professionals.

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- International Cooperative Alliance. (n.d.). *Cooperative identity, values & principles*. https://www.ica.coop/en/cooperatives/cooperative-identity`,
      recallContent: [
        {
          prompt: "What was the driving decision in the venture-founder scenario, and why?",
          answer: "Ownership and transfer, because the flipping fact was outside investors, employee equity, and shares changing hands. Priced rounds and option pools assume standardised, tradeable shares.",
        },
        {
          prompt: "Which form did the venture defense choose, and what honest cost did it name?",
          answer: "A C-corporation. The honest cost is entity-level tax (the double-tax feature), which the founders accept in exchange for the fundraising fit, and which an accountant weighs.",
        },
        {
          prompt: "In the venture defense, why was the LLC rejected despite its tax flexibility?",
          answer: "On ownership and transfer, membership interests and a custom operating agreement fit standard priced rounds and option grants poorly, and many venture investors prefer not to invest through one. Its strength does not solve the problem the scenario has, and its weakness sits on the driving decision.",
        },
      ],
    },
    {
      slug: "cfc-scenario-nonprofit",
      title: "10 · Worked scenario: the community nonprofit",
      section: "Section 2 · Four worked scenarios, end to end",
      body: `The last worked scenario, and the one where getting the "pile" right matters most: entity versus tax status. **The scenario:** residents want to run a donation-funded tutoring-and-food program, and they are arguing about whether they will be allowed to endorse candidates in the next local election. Read it into the four, choose a form, defend it, beat one alternative. A demonstration, not advice.

## Read it into the four

| Decision | What the facts say |
|---|---|
| **Liability** | Volunteers and the public, real activity, so a wall is wanted. Points to a nonprofit corporation. |
| **Taxation** | Two-layer: tax-exempt status is a separate application, and the category chosen controls the politics question. |
| **Ownership and transfer** | The structural surprise: a nonprofit has no equity owners. Nobody owns it. |
| **Governance** | A board with fiduciary duty runs it; there may or may not be voting members. |

The driver here is **taxation-as-status plus the no-owners fact**, and they are linked.

## Name the form

A plausible choice is a **nonprofit corporation that then applies for federal tax-exempt status**. **Not advice**, a demonstration. Say the pile out loud: the nonprofit corporation is the entity; tax-exempt status is a separate thing granted by the tax authority on application, laid on top, and the specific category matters (Internal Revenue Service, n.d.-a).

## Defend it against the four

- **Liability.** A nonprofit corporation is a separate legal person with a wall, so the volunteers and board are generally shielded from the organisation's debts, subject to the usual gaps.
- **Taxation.** This is the load-bearing part, and it has two moves. First, **tax-exempt status is not automatic**: the organisation applies, and the tax authority grants it, so "we are a nonprofit" and "we are tax-exempt" are different sentences. Second, **the category controls the politics fight.** The tutoring-and-food charity path and a more advocacy-and-politics path fall under different parts of the 501(c) family, and those categories differ in what political activity they permit. So the residents' argument about endorsing candidates is really an argument about **which tax-exempt category** they want, and it is answered by that choice, not by the entity. The defense names the categories generally and routes the exact rules to the primary source, never asserting a threshold (Internal Revenue Service, n.d.-b).
- **Ownership and transfer.** The structural fact: **a nonprofit has no equity owners.** Nobody owns it, no shares, no membership interests to sell. That is why donations, not investment, fund it, and why there is no "cashing out." Getting this right is most of understanding a nonprofit.
- **Governance.** A board runs it, under fiduciary duty, and any voting members have the say the bylaws give them. Governance looks like a corporation's delegated shape, minus the shareholders, because there are no shareholders.

## Beat one alternative

**Why not a for-profit LLC or corporation with a strong mission?** Because on taxation and ownership, a for-profit is the wrong pile for this scenario. It cannot offer donors the treatment a tax-exempt organisation can, it is built around owners who take profit (which this program does not have), and a mission statement is not the same thing as tax-exempt status. **The residents do not want a mission-flavoured business; they want an organisation with no owners that runs on donations**, and that is the nonprofit, not a for-profit wearing a mission. The alternative fails on decision three (owners) and on the taxation-as-status point.

## Point at the source, and state the limit

You would read the **state's nonprofit corporation statute** to form the entity and the tax authority's guidance on **types of tax-exempt organisations** to place the category, then take the politics question to a lawyer, because the exact rules are specific and change (Internal Revenue Service, n.d.-b). And the limit: this is reasoning, not legal, tax, or financial advice.

## Sources
- Internal Revenue Service. (n.d.-a). *Charities and nonprofits*. https://www.irs.gov/charities-and-nonprofits
- Internal Revenue Service. (n.d.-b). *Types of tax-exempt organizations*. https://www.irs.gov/charities-non-profits/types-of-tax-exempt-organizations
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "What was the driving decision in the worker-collective scenario, and what form did it choose?",
          answer: "Governance, one member one vote (each member an equal say regardless of money). It chose a worker cooperative, where the state recognises the form, because the cooperative is built around exactly that rule.",
        },
        {
          prompt: "In the collective defense, why does an ordinary corporation with equal shares fail the requirement?",
          answer: "Equal shares are still one share one vote, and shares can be bought, sold and accumulated, so control can concentrate over time. The cooperative's one member one vote is durable and tied to participation, which is what the members asked for.",
        },
        {
          prompt: "What course-5 lesson did the collective defense apply at home, and how?",
          answer: "That availability varies: cooperative statutes differ by jurisdiction, so you confirm the form exists and works where the collective is, rather than assuming it, and you route the specifics to the state's statute and a lawyer who knows co-op law.",
        },
      ],
    },
    {
      slug: "cfc-quiz-scenarios",
      title: "11 · Quiz: the worked scenarios",
      section: "Section 2 · Four worked scenarios, end to end",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The solo freelancer's main worry that drives the form is:",
            options: ["outside money", "personal risk", "board seats", "member votes"],
            correctIndex: 1,
            explanation: "One person wanting to limit personal exposure points toward a form with a liability wall, such as a single-member LLC.",
            sourceLessonSlug: "cfc-scenario-freelancer",
          },
          {
            prompt: "For the solo freelancer, why not a C-corporation?",
            options: ["no wall at all", "it is illegal", "no tax at all", "overhead buys little"],
            correctIndex: 3,
            explanation: "With no outside investors and no shares to trade, the C-corp's entity tax and board formality add cost without a matching benefit.",
            sourceLessonSlug: "cfc-scenario-freelancer",
          },
          {
            prompt: "Even inside an LLC, the freelancer's wall can still leak through:",
            options: ["a guarantee", "a new logo", "a tax return", "a slow month"],
            correctIndex: 0,
            explanation: "A personal guarantee, or the owner's own negligence, reaches the owner despite the wall, so limited liability is never absolute.",
            sourceLessonSlug: "cfc-scenario-freelancer",
          },
          {
            prompt: "The venture-track founders most need ownership that is:",
            options: ["locked down", "member based", "tradeable stock", "donation based"],
            correctIndex: 2,
            explanation: "Priced rounds, employee option grants and outside investors call for standardised, transferable shares, a corporate feature.",
            sourceLessonSlug: "cfc-scenario-venture",
          },
          {
            prompt: "For the venture founders, the weakness of an LLC is mainly:",
            options: ["no liability", "too much tax", "weak mission", "its ownership fit"],
            correctIndex: 3,
            explanation: "Membership interests and an operating agreement fit priced venture rounds and standard option pools poorly, whatever the LLC's tax flexibility.",
            sourceLessonSlug: "cfc-scenario-venture",
          },
          {
            prompt: "The C-corp's honest cost the founders must weigh is its:",
            options: ["entity-level tax", "missing wall", "banned shares", "lack of board"],
            correctIndex: 0,
            explanation: "A C-corporation is its own taxpayer, so its profit is taxed to it, a real cost an accountant weighs against the fundraising fit.",
            sourceLessonSlug: "cfc-scenario-venture",
          },
          {
            prompt: "The worker collective's load-bearing decision is its:",
            options: ["taxation", "governance", "branding", "location"],
            correctIndex: 1,
            explanation: "They want each member to have an equal say regardless of money, which is one member one vote, pure decision four.",
            sourceLessonSlug: "cfc-scenario-collective",
          },
          {
            prompt: "Why not give the collective equal shares in a corporation?",
            options: ["it pays no tax", "it needs no wall", "shares can shift", "shares are free"],
            correctIndex: 2,
            explanation: "Even equal shares are one share one vote and can concentrate as people buy and sell; the co-op's one member one vote is durable and tied to participation.",
            sourceLessonSlug: "cfc-scenario-collective",
          },
          {
            prompt: "The structural fact that defines the community nonprofit is that it has:",
            options: ["one big owner", "tradeable stock", "many partners", "no equity owner"],
            correctIndex: 3,
            explanation: "A nonprofit has no owners of equity; nobody owns it, which shapes ownership, transfer, and how it can raise money.",
            sourceLessonSlug: "cfc-scenario-nonprofit",
          },
          {
            prompt: "For the nonprofit, whether it may endorse candidates turns on its:",
            options: ["tax status", "liability", "member list", "office lease"],
            correctIndex: 0,
            explanation: "The category within the 501(c) family is a tax status on top of the entity, and it, not the entity itself, controls the political-activity question.",
            sourceLessonSlug: "cfc-scenario-nonprofit",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · The graded capstone  (choose a form, defend it against the four and an alternative)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "cfc-capstone",
      title: "12 · Capstone: choose a form and defend it",
      section: "Section 3 · The graded capstone",
      lessonType: "assignment",
      body: `This is the graded capstone of the whole path. You have the method (read a scenario into the four decisions, name a form, defend it against the four and against one alternative), you have watched it run through four worked scenarios, and you carry the whole menu. Now you do it yourself, in writing, to a rubric.

**Read this line first, because it is the point of the assignment and the rule of the course:** this piece is an exercise in reasoning. **It is not legal, tax, or financial advice, and you must say so in your piece.** You are demonstrating that you can reason with the four decisions, not steering a real person. A real version of this choice, for a real business, goes to a lawyer and an accountant, and your piece should say that in as many words.

## The assignment

Pick **one scenario** below (or write your own that is just as concrete). In **700 to 1,100 words**, **choose a plausible form for it and defend that choice against all four decisions**, then defend it against **one specific alternative** you rejected. The deliverable is an argument, not a recommendation to a real person.

## The scenarios

1. **A solo consultant going pro.** One person leaves a job to consult full time, wants to look established and keep personal savings out of reach, and is not raising any outside money.
2. **A team building software for investors.** Three founders expect to raise from outside investors within a year, grant equity to early employees, and see shares change hands.
3. **A shop the workers want to own.** A group wants to run a business together where the people who do the work are the owners and each member has an equal say regardless of how much they put in.
4. **A neighborhood program on donations.** Residents want to run a donation-funded tutoring-and-food program and are debating whether they can endorse candidates in a local election.
5. **A maker who might expand abroad.** A products company is US-based today but expects to open in another country within two years, and wants to reason now about what will and will not carry over.

## What your piece must contain

**1. Name the form, up front, and its pile.** One sentence: the entity you are choosing and, if relevant, any tax status or certification that rides on top of it. Be explicit that a tax election (such as the S election) or a certification is not itself the entity. No suspense.

**2. Defend it against all four decisions, one at a time, for this scenario.** A short paragraph each, in order:

| Decision | What your paragraph must answer |
|---|---|
| **Liability** | Who pays if the business cannot? Does your form put up a wall, and where might that wall leak for this scenario (a personal guarantee, thin records, the owner's own negligence)? |
| **Taxation** | On whose return does the profit land, pass-through or entity-level? Is the treatment set by the form or by a separate election, and does that matter here? Name no rate. |
| **Ownership and transfer** | Who owns it, what is a stake called, and can an owner leave or sell? For a nonprofit, note there are no equity owners. Does this scenario want tight transfer or loose? |
| **Governance** | Who decides, direct or delegated? What is your deadlock plan if owners are even? For a co-op, name one member one vote; for a corporation, one share one vote. |

**3. Defend it against one specific alternative.** Name a different form you seriously considered and say, in the language of the four decisions, why you rejected it for this scenario. "I chose X over Y because on decision three, Y would have..." Be specific: a real alternative from the path's menu, a real reason. This is the load-bearing part.

**4. Point at the primary source.** Say which document or portal you would actually read to confirm the form works in a real state (the state's filing portal, the articles, the operating agreement or bylaws, the relevant agency page), because the four decisions are universal but the paperwork is local.

**5. State the limit.** One clear sentence that your piece is an exercise in reasoning, not legal, tax, or financial advice, and that a real decision belongs with a licensed professional.

## The rubric (how it is scored)

| Weight | Criterion |
|---|---|
| **10%** | Form named clearly up front, with any tax status or certification placed in the correct pile (entity vs status vs badge) |
| **15%** | Liability defended for this scenario, including where the wall could leak |
| **15%** | Taxation defended, distinguishing form-set from elected, with no invented rate, threshold, or fee |
| **15%** | Ownership and transfer defended for this scenario's actual needs |
| **15%** | Governance defended, including deadlock or the voting rule (one share vs one member) where relevant |
| **20%** | Defense against one specific, real alternative, argued in the language of the four decisions |
| **10%** | Primary source named, the not-advice limit stated, and an honest "it depends" wherever the answer truly turns on a missing fact |

A passing piece clears every row. The **20% alternative row is where most of the thinking shows**, because it is the part that proves you weighed a real trade-off rather than reached for a favourite.

## Rules you do not get to break

1. **No invented law.** Do not cite a statute section, a tax rate, a fee, an income threshold, a shareholder cap, or a deadline from memory. If your argument needs a specific value, write "I would confirm this at [the primary source]" instead of asserting a number. This is the course's rule and the professional habit.
2. **Place the piles correctly.** An S-corp is a tax election, a Certified B Corp is a certification, and a benefit corporation is an entity. Treating any of them as the wrong kind of thing is a graded error.
3. **Reason with the four, every time.** Every claim about your form should trace to liability, taxation, ownership and transfer, or governance. If a sentence does not touch one of the four, ask why it is there.
4. **The alternative must be real.** Rejecting "doing nothing" or a made-up form does not count. Pick a form from the path's menu and argue against it honestly.
5. **Say it is not advice.** Not only as a closing disclaimer, but as an understood frame: you are showing method, not steering a person.
6. **Where the honest answer is 'it depends on facts I do not have,' say that.** "It depends on the state," "it depends on whether they take outside money," and "an accountant would weigh this" are professional sentences, not evasions.

## What good looks like

A short piece in which someone who has never taken this course could, from your four paragraphs alone, reconstruct what the form is and why it fits this scenario, in which you beat a real alternative on the decision that actually drives the choice, and in which you never once pretend to know a legal or tax value you would have to look up. **You are not proving you know the one right answer. You are proving you know the questions, and that is the whole path.**

## Sources
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure
- Internal Revenue Service. (n.d.-a). *Business structures*. https://www.irs.gov/businesses/small-businesses-self-employed/business-structures
- Internal Revenue Service. (n.d.-b). *Types of tax-exempt organizations*. https://www.irs.gov/charities-non-profits/types-of-tax-exempt-organizations
- International Cooperative Alliance. (n.d.). *Cooperative identity, values & principles*. https://www.ica.coop/en/cooperatives/cooperative-identity`,
    },
  ],
};
