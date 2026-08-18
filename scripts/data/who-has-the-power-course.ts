// Authored "Who Has the Power to Do This?" — the METHOD course of Path A ("Who Has the Power?
// Governments From the Block to the Globe"), planned in
// plans/46-structures-paths-government-and-business.md as course 1 of nine.
//
// WHAT THIS COURSE IS
// -------------------
// The general theory of which the route series is fourteen worked examples. The route series'
// whole move is "find the instrument": a 1910 ordinance, a blight designation, a school-district
// line, an annexation. Every one is a question about WHICH BODY had the power to do that and WHERE
// the power came from. This course teaches that question as a repeatable, four-step method and
// tests it somewhere new. It is US civics/constitutional-law content, so it is written to a legal
// standard of precision, and it says plainly, more than once, that it teaches how to READ authority
// and is NOT legal advice.
//
// THE LOAD-BEARING CONTENT (from the plan)
// ----------------------------------------
//   * Cities are creatures of the state. Dillon's Rule vs the Cooley Doctrine (a genuine
//     disagreement, taught as one), home rule, and state preemption. Hunter v. City of Pittsburgh
//     (1907) is the anchor; City of Clinton v. Cedar Rapids (1868) is where Dillon stated the rule.
//   * The vertical stack of authority: nation -> state -> local -> special districts, with the
//     Census fact that special districts OUTNUMBER municipalities.
//   * Tribal nations are a SEPARATE sovereign, not a rung on the ladder. Sovereignty pre-existing
//     and inherent, not delegated; government-to-government; treaties as supreme law. Worcester v.
//     Georgia (1832) and Cherokee Nation v. Georgia (1831). Introduced here as part of the method;
//     course 6 develops it. The map renders it as a differently-styled layer, which is the point.
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * Court cases are cited by reporter (authoritative on their own); constitutional text is quoted
//     verbatim by article/amendment. Justia URLs are given only for the older US Reports cases whose
//     volume/page URL pattern is stable and confirmed.
//   * Every external statistic is verified: the 2017 Census of Governments counts, Missouri's 1875
//     constitutional home rule (St. Louis, the first home-rule city), and the case cites were all
//     checked against the sources listed in each lesson's `## Sources` block before shipping.
//   * WHERE AUTHORITIES DISAGREE, THE DISAGREEMENT IS THE LESSON. Dillon's Rule vs the Cooley
//     Doctrine is taught as a live split, not a settled rule. The famous line "John Marshall has
//     made his decision; now let him enforce it" is taught as APOCRYPHAL (no contemporaneous source;
//     Jackson's documented words were that the decision "fell still born"), which is a worked example
//     of refusing an unverifiable quotation rather than laundering it into the narration.
//   * NO fabricated case, character, quotation, date, or statistic. Coordinates on the map lesson
//     are approximate points placed to show a pattern, and the body says so.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens only.

import type { AuthoredCourse } from "./authored-course";

export const WHO_HAS_THE_POWER_COURSE: AuthoredCourse = {
  title: "Who Has the Power to Do This?",
  description:
    "A method course for reading government authority. Given any government action, a zoning change, an annexation, a school-district line, a police stop, a tax, a permit denied, you will learn to find four things from the public record: the BODY that acted, the ENABLING AUTHORITY it claimed, the DOCUMENT that grants that power (a constitution, a charter, a statute, an ordinance, or a treaty), and WHO CAN OVERTURN IT. It is the general case of which the route series is fourteen worked examples: find the instrument, then find its source. Along the way it teaches the fact most adults were never taught, that in the United States cities are creatures of the state (Dillon's Rule, the Cooley Doctrine, home rule, and preemption), the vertical stack of authority from the nation down to the special districts almost nobody votes for, and the idea that tribal nations are not a rung on that ladder at all but a separate sovereign whose authority predates the United States. This course teaches how to READ authority. It is not legal advice.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · The method and the four questions
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-what-this-is",
      title: "1 · What this course teaches, and what it is not",
      section: "Section 1 · The method and the four questions",
      body: `This course teaches one skill, and the skill is repeatable: **given any government action, find out who had the power to take it, and where that power came from.**

An action can be almost anything a government does. A city rezones your block. A county reassesses your taxes. A school board redraws an attendance line. A state legislature overrides a local ordinance the week after it passes. A federal agency issues a rule. An officer makes a stop. Each of those is an exercise of power by a body, and behind each one is a **document that either grants that power or does not.** The whole course is about finding that document and reading it.

## First, the boundary. This is not legal advice.

**This is a course about how to READ authority. It is not legal advice, and it cannot tell you whether any particular action was lawful in your situation.** It is not a substitute for a lawyer, and it does not create a lawyer-client relationship. What it teaches is the set of questions a lawyer, a journalist, or an organiser asks first, so that you can open a public record and get oriented before you ever pick up the phone. **Knowing which questions to ask is not the same as knowing the answer, and this course is careful about the difference the whole way through.**

## The method, in one sentence you will meet four more times

**Find the instrument, then find its source.**

The **instrument** is the specific thing the government did: the ordinance, the resolution, the permit, the order, the statute. The **source** is the document that gave the body the power to issue that instrument. A city cannot pass an ordinance out of thin air. It passes it under a charter, which it holds under a state constitution or a state law, which sits under the United States Constitution. **Every act of government is a link in a chain, and the method is learning to walk the chain in both directions.**

## You have already done this, if you took the route series

The route series is fourteen courses that each read one government action out of the primary record: a 1910 segregation ordinance, a blight designation used to condemn a block, an annexation that redrew a city's edge, a school-district boundary. **Every one of those courses is a worked example of this method, done one case at a time.** This course is the general case. When you finish it, you should be able to walk up to a government action the route series never covered, in a city you have never been to, and find the four things below.

## The four things (the rest of Section 1 is these)

| # | The question | What you are looking for |
|---|---|---|
| 1 | **Who acted?** | The specific body, named. Not "the government," but which one |
| 2 | **Under what authority?** | The power the body says it is using |
| 3 | **Where does the power come from?** | The document: constitution, charter, statute, ordinance, or treaty |
| 4 | **Who can overturn it?** | The court, higher body, or voters who could undo the act |

**A warning you will need in Section 3.** Most adults carry a mental picture of government as a neat pyramid: the nation on top, the states under it, cities under the states, all one ladder. That picture is wrong in two specific ways that this course exists to fix. **Cities are not junior states; in United States law they are creatures of the state, and the state can remake or abolish them.** And **tribal nations are not on the ladder at all; they are a separate sovereign.** Hold those two corrections loosely for now. Section 3 and Section 4 earn them.

## Sources
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/`,
    },
    {
      slug: "power-four-questions",
      title: "2 · The four questions, in order",
      section: "Section 1 · The method and the four questions",
      body: `Here is the whole method. Learn to ask these four questions in this order, of any government action, and you can read authority anywhere.

## Question 1. Who acted?

**Name the body.** Not "the city," but the City Council, or the zoning board of appeals, or the county commission, or the state department of transportation, or the school board, or a water district's board of directors. **Different bodies hold different powers, and the first error people make is stopping at "the government" when the government is dozens of separate bodies with separate authority.**

The tell that you have Question 1 right: you can say who voted, or who signed, and in what meeting or under what delegated authority. A single named official acting alone is a different fact from a body voting, and you should know which one you are looking at.

## Question 2. Under what authority?

**Ask what power the body says it is using.** A well-drafted ordinance usually tells you: it recites the authority in its own text ("pursuant to Section X of the charter," "under the police power," "as authorised by Chapter Y of the state code"). **That recital is a claim, not a proof.** The body is telling you where it thinks its power comes from. Your job in Question 3 is to check whether the claim holds.

The two broadest categories of authority you will meet: the **police power**, which is the general power to legislate for health, safety, morals, and welfare, and **specific delegated powers**, which are narrow grants to do one named thing. States hold a broad police power. Cities usually hold only what the state has handed down, which is the entire subject of Section 3.

## Question 3. Where does the power come from?

**Find the document.** This is the load-bearing question, and Section 1's next lesson is entirely about the five kinds of document you will find at the end of the chain: a **constitution**, a **charter**, a **statute**, an **ordinance**, or a **treaty**. Each grants power in a different way, and reading each one is a slightly different skill.

**The chain usually has several links.** An ordinance is authorised by a charter, which is granted under a state constitution or a state statute, which operates under the United States Constitution. **You walk down the chain until you reach a document that grants power on its own authority rather than borrowing it**, and in United States domestic law that terminal document is a constitution.

## Question 4. Who can overturn it?

**Ask who could undo the act, and how.** This question tells you what kind of power you are really looking at, because **a power that someone else can cancel at will is a weaker power than one that is entrenched.** The usual answers:

| Who | How |
|---|---|
| **A court** | Strikes the act as beyond the body's granted power (ultra vires) or unconstitutional |
| **A higher legislature** | Preempts or repeals the authority the lower body was using |
| **The body itself** | Amends or repeals its own act |
| **The voters** | A referendum, a recall, or an election that replaces the body |
| **An executive** | A veto, before the act takes effect |

**Question 4 is where the pyramid myth dies.** When you learn in Section 3 that a state legislature can wipe out a city ordinance by passing a preemption statute, you are answering Question 4 for a whole class of local acts at once: the city acted, under its charter, granted by the state, and **the state can overturn it**, because the city holds its power at the state's sufferance.

## Sources
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Marbury v. Madison, 5 U.S. (1 Cranch) 137 (1803). https://supreme.justia.com/cases/federal/us/5/137/
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/`,
      recallContent: [
        {
          prompt: "State this course's one-sentence method.",
          answer: "Find the instrument, then find its source. The instrument is the specific act (ordinance, permit, order); the source is the document that gave the body power to issue it.",
        },
        {
          prompt: "In one sentence, what is this course, and what is it not?",
          answer: "It teaches how to READ government authority (a repeatable method). It is not legal advice and cannot tell you whether a particular action was lawful in your situation.",
        },
        {
          prompt: "How does the route series relate to this course?",
          answer: "The route series is fourteen worked examples, each reading one government action from the record. This course is the general case behind all of them.",
        },
      ],
    },
    {
      slug: "power-reading-documents",
      title: "3 · Five documents: constitution, charter, statute, ordinance, treaty",
      section: "Section 1 · The method and the four questions",
      body: `Question 3 sends you to a document. In United States practice you will land on one of five kinds, and they do not all grant power the same way. Learn to tell them apart on sight.

## The five, and what each one does

| Document | Who makes it | What it does to power |
|---|---|---|
| **Constitution** | The people, through a convention or ratification | GRANTS power on its own authority; sits at the top of a chain |
| **Charter** | A state (by its constitution or a statute), for a locality | DELEGATES a bundle of power down to a city or county |
| **Statute** | A legislature (federal or state) | EXERCISES granted power to make general law |
| **Ordinance** | A local body, under its charter | EXERCISES delegated power to make local law |
| **Treaty** | The President with the Senate, or nation to nation | BINDS the nation; ranks as supreme law |

**Read the table as a chain, top to bottom.** A constitution grants. A charter passes a slice of that grant down to a city. A statute or an ordinance spends the power it was granted. **The verbs matter: only a constitution grants power to itself. Everything below it is spending an allowance.**

## The one asymmetry that explains the whole course

The federal government and a state government are built on **opposite default rules**, and this is the single most useful thing in the lesson.

**The federal government has only the powers the Constitution enumerates.** Article I, Section 8 lists them. If a power is not granted (expressly, or fairly implied, as McCulloch v. Maryland established for the Necessary and Proper Clause), the federal government does not have it (McCulloch v. Maryland, 1819; U.S. Const. art. I, § 8).

**A state government has every power that has not been taken away.** The Tenth Amendment states it in one sentence: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people" (U.S. Const. amend. X). A state does not need a grant to act; it needs only the absence of a prohibition. That reserved authority is the **police power**.

**So a federal body and a state body answer Question 2 in mirror-image ways.** Ask a federal body "where is your power granted?" Ask a state body "where is your power forbidden?" **Cities, you will see in Section 3, answer like the federal government and not like the state**: they have only what was handed to them, which is why the pyramid picture misleads.

## The Supremacy Clause, which sets the order

When two of these documents conflict, the order is set by Article VI: the Constitution, and the laws and treaties made under it, are "the supreme Law of the Land," binding on the states (U.S. Const. art. VI). **That is why the chain terminates where it does.** A city ordinance yields to a state statute yields to the state constitution yields to a valid federal law yields to the United States Constitution. **Treaties enter near the top, ranked with federal statutes as supreme law**, which is the doorway into Section 4, because tribal treaties live here.

## How to actually read one

1. **Find the enacting clause.** It names the body and often recites the authority (Question 1 and 2 in one line).
2. **Follow the recital up.** "Pursuant to" is a citation. Go read the thing it cites.
3. **Stop at a constitution**, or at a treaty, or at a statute you can trace no further, and you have found the source.
4. **Then look sideways for who can overturn it** (Question 4).

**This is exactly the route-series move**, applied to the authority instead of the map: read the record down to its own citations, and follow them.

## Sources
- U.S. Const. art. I, § 8. https://constitution.congress.gov/constitution/article-1/section-8/
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- McCulloch v. Maryland, 17 U.S. (4 Wheat.) 316 (1819). https://supreme.justia.com/cases/federal/us/17/316/`,
      recallContent: [
        {
          prompt: "Name the four questions of the method, in order.",
          answer: "1) Who acted (the body)? 2) Under what authority? 3) Where does the power come from (the document)? 4) Who can overturn it?",
        },
        {
          prompt: "What is the difference between the police power and a specific delegated power?",
          answer: "The police power is the broad, general power to legislate for health, safety, morals, and welfare (states hold it). A specific delegated power is a narrow grant to do one named thing (what cities usually hold).",
        },
        {
          prompt: "Why does the answer to Question 4 tell you how strong a power is?",
          answer: "A power someone else can cancel at will is weaker than one that is entrenched. Knowing who can overturn an act (court, higher legislature, the body, voters, executive) tells you what kind of power it really is.",
        },
      ],
    },
    {
      slug: "power-quiz-method",
      title: "4 · Quiz: the method and the four questions",
      section: "Section 1 · The method and the four questions",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "This course's one-sentence method is:",
            options: [
              "Follow the money until it stops moving",
              "Find the instrument, then find its source",
              "Trust the recital printed in the ordinance",
              "Ask a lawyer before reading any record",
            ],
            correctIndex: 1,
            explanation: "The instrument is the specific act; the source is the document that grants the power to issue it. You walk the chain in both directions.",
            sourceLessonSlug: "power-four-questions",
          },
          {
            prompt: "The four questions of the method, in order, are:",
            options: [
              "Who acted, under what authority, where is the power from, who can overturn it",
              "Who acted, who benefits from it, who financed it, and who was harmed by it",
              "What was done, when it was done, where it happened, and why it happened then",
              "Is the action legal, is it fair, is it popular, and is it entirely new law",
            ],
            correctIndex: 0,
            explanation: "Body, authority, document, and who can overturn it. The order matters: you name the body before you can find its authority.",
            sourceLessonSlug: "power-four-questions",
          },
          {
            prompt: "Question 1 of the method asks you to:",
            options: [
              "Decide whether the action was fair to residents",
              "Estimate the budget the action will require",
              "Name the specific body that acted",
              "Predict whether a court would uphold it",
            ],
            correctIndex: 2,
            explanation: "Name the body: the council, the zoning board, the county commission, the school board. Stopping at 'the government' is the first error.",
            sourceLessonSlug: "power-four-questions",
          },
          {
            prompt: "An ordinance's recital of its own authority ('pursuant to Section X') is best read as:",
            options: [
              "Conclusive proof the power exists",
              "Irrelevant boilerplate you can skip",
              "A claim you still have to check",
              "A binding order from a higher court",
            ],
            correctIndex: 2,
            explanation: "The recital tells you where the body THINKS its power comes from. Question 3 is checking whether that claim holds up the chain.",
            sourceLessonSlug: "power-four-questions",
          },
          {
            prompt: "This course states plainly that it is:",
            options: [
              "A dependable source of legal advice for your case",
              "A method for reading authority, not legal advice",
              "A full substitute for hiring your own attorney",
              "A guarantee that a given action was fully lawful",
            ],
            correctIndex: 1,
            explanation: "It teaches the questions a lawyer or journalist asks first. It does not tell you whether a particular action was lawful in your situation.",
            sourceLessonSlug: "power-what-this-is",
          },
          {
            prompt: "Which document GRANTS power on its own authority rather than borrowing it?",
            options: [
              "A municipal charter from the state",
              "A city ordinance passed by a council",
              "A statute passed by a legislature",
              "A constitution ratified by the people",
            ],
            correctIndex: 3,
            explanation: "Only a constitution grants power to itself. A charter delegates it downward; a statute or ordinance spends power already granted.",
            sourceLessonSlug: "power-reading-documents",
          },
          {
            prompt: "The federal government's default rule about its own powers is that it has:",
            options: [
              "Every power a state has, and more",
              "Only the powers the Constitution grants it",
              "Whatever power is not forbidden to it",
              "All powers the President chooses to use",
            ],
            correctIndex: 1,
            explanation: "The federal government is one of enumerated powers (Article I, Section 8). If a power is not granted or fairly implied, it does not have it.",
            sourceLessonSlug: "power-reading-documents",
          },
          {
            prompt: "The Tenth Amendment sets the states' default rule, which is that a state has:",
            options: [
              "Only powers Congress delegates to it",
              "Only powers listed in Article I",
              "Every power not delegated away or forbidden",
              "No power a federal court has reviewed",
            ],
            correctIndex: 2,
            explanation: "Powers not delegated to the United States nor prohibited to the states are reserved to the states or the people. A state needs no grant, only the absence of a bar. That reserved authority is the police power.",
            sourceLessonSlug: "power-reading-documents",
          },
          {
            prompt: "A federal body and a state body answer 'where is your power?' in mirror-image ways. You ask a STATE body:",
            options: [
              "Where is this power granted to you?",
              "Where is this power forbidden to you?",
              "Which agency approved this power?",
              "When did Congress hand you this power?",
            ],
            correctIndex: 1,
            explanation: "A state acts unless prohibited, so the question is where the power is forbidden. A federal body acts only if granted, so you ask where it is granted.",
            sourceLessonSlug: "power-reading-documents",
          },
          {
            prompt: "Under the Supremacy Clause, which ranks as 'the supreme Law of the Land'?",
            options: [
              "Any local ordinance that a city council passes",
              "A county charter along with its adopted bylaws",
              "The Constitution, and laws and treaties under it",
              "Whichever state statute the legislature passed last",
            ],
            correctIndex: 2,
            explanation: "Article VI makes the Constitution, and federal laws and treaties made under it, binding on the states. That is why the chain terminates at the Constitution.",
            sourceLessonSlug: "power-reading-documents",
          },
          {
            prompt: "McCulloch v. Maryland (1819) is cited in this course for the point that federal power:",
            options: [
              "Extends only to the thirteen original states",
              "Includes powers fairly implied, not just listed",
              "Can be overridden by any state statute",
              "Comes entirely from the state governments",
            ],
            correctIndex: 1,
            explanation: "McCulloch read the Necessary and Proper Clause to include fairly implied means, so 'enumerated' does not mean only the words on the page.",
            sourceLessonSlug: "power-reading-documents",
          },
          {
            prompt: "Which is the correct order of Question 4's possible answers to 'who can overturn it?'",
            options: [
              "Only the President, acting by executive order",
              "Only the body that passed it, by amendment",
              "A court, a higher legislature, the body, or voters",
              "Only the United States Supreme Court, on appeal",
            ],
            correctIndex: 2,
            explanation: "Several actors can overturn an act: a court (ultra vires or unconstitutional), a higher legislature (preemption or repeal), the body itself, the voters, or an executive veto before it takes effect.",
            sourceLessonSlug: "power-four-questions",
          },
          {
            prompt: "When you follow a 'pursuant to' recital in an ordinance, you are:",
            options: [
              "Walking up the chain to its source",
              "Filing a formal legal challenge",
              "Estimating the cost of the ordinance",
              "Counting the votes that passed it",
            ],
            correctIndex: 0,
            explanation: "'Pursuant to' is a citation. You go read the thing it cites, and keep going until you reach a document that grants power on its own authority.",
            sourceLessonSlug: "power-reading-documents",
          },
          {
            prompt: "The course warns the 'neat pyramid' picture of government is wrong in two specific ways. They are:",
            options: [
              "Cities outrank counties; states outrank courts",
              "Cities are creatures of the state; tribes are separate",
              "The nation is weak; the states are all-powerful",
              "Counties are federal; school boards are private",
            ],
            correctIndex: 1,
            explanation: "Cities are not junior states (they are creatures of the state), and tribal nations are not on the ladder at all (a separate sovereign). Sections 3 and 4 earn both corrections.",
            sourceLessonSlug: "power-what-this-is",
          },
          {
            prompt: "Treaties enter the chain of authority where?",
            options: [
              "Below every city ordinance in the state",
              "Near the top, ranked as supreme law",
              "Outside the chain of authority entirely",
              "Below all state statutes and county rules",
            ],
            correctIndex: 1,
            explanation: "Article VI ranks treaties with federal statutes as supreme law. That placement is the doorway into Section 4, because tribal treaties live here.",
            sourceLessonSlug: "power-reading-documents",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The vertical stack
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-the-stack",
      title: "5 · The vertical stack of authority",
      section: "Section 2 · The vertical stack",
      body: `Now assemble the layers. In the United States, domestic government stacks vertically, and the block you live on sits under several layers at once. Learning the stack is learning where to look when you ask Question 1.

## The stack, top to bottom

| Layer | Typical bodies | How it holds power |
|---|---|---|
| **Nation** | Congress, President, federal courts, agencies | Enumerated powers, granted by the U.S. Constitution |
| **State (or region)** | Legislature, governor, state courts | General police power, reserved by the Tenth Amendment |
| **Local** | County, municipality, township | DELEGATED power, handed down by the state |
| **Special district** | School, water, fire, transit, library boards | Narrow power from the statute that created it |

**Read it as a ladder of delegation, not a ladder of size.** Power flows down by grant. The nation holds enumerated powers; the state holds a broad reserved power; the local layer holds only what the state hands it; a special district holds only the one job its enabling statute names. **Each rung down is narrower and more specific, and answers to the rung above it.**

## The count almost nobody guesses right

Ask someone how many governments have authority over their home, and they will say three: city, state, nation. **The real number is usually six to twelve**, and the surplus is special districts, which is why Section 3 gives them a whole lesson. The 2017 Census of Governments counted **90,075 local governments in the United States**, on top of the 50 states and the federal government (U.S. Census Bureau, 2017). Most people have never heard of most of the ones that tax them.

## The one that is not a rung

**Tribal nations do not appear in the table above, and that is deliberate.** They are not a fourth-and-a-half layer between the state and the local. They are a **separate sovereign**, with a direct, government-to-government relationship to the federal government, and authority that comes from their own pre-existing sovereignty rather than from any grant in that stack (Worcester v. Georgia, 1832). Section 4 is entirely about why the ladder metaphor breaks here, and the map lesson draws the tribal layer in a different color on purpose, because rendering it as one more rung would be a factual error.

## Why the stack is the answer to Question 1

When you meet a government action, the stack tells you where to start looking for the body. A pothole, a permit, a parking rule: local. A criminal code, a driver's license, a school-funding formula: usually state. A passport, a tariff, an immigration rule, an interstate matter: federal. **Guessing the layer narrows the search from ninety thousand bodies to a handful**, and then Question 1 is just naming which body on that rung.

**But the stack only tells you where power SITS. It does not tell you how firmly it is held.** A state's authority is entrenched in the federal constitution; a city's authority is held at the pleasure of the state. Both sit on the ladder, but they are held on completely different terms, and that difference is Section 3.

## Sources
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/`,
      recallContent: [
        {
          prompt: "Name the five kinds of document Question 3 lands you on.",
          answer: "A constitution, a charter, a statute, an ordinance, and a treaty.",
        },
        {
          prompt: "What is the mirror-image asymmetry between federal and state default powers?",
          answer: "The federal government has only the powers the Constitution grants it (enumerated). A state has every power not delegated away or forbidden (the reserved police power, Tenth Amendment).",
        },
        {
          prompt: "Under the Supremacy Clause, what is 'the supreme Law of the Land'?",
          answer: "The Constitution, and the federal laws and treaties made under it (Article VI). This is why the chain of authority terminates at the Constitution.",
        },
      ],
    },
    {
      slug: "power-the-nation",
      title: "6 · The nation: enumerated powers, supremacy, and review",
      section: "Section 2 · The vertical stack",
      body: `Start at the top of the stack. The national government is the one most people picture when they hear "the government," and it is the one whose limits are least understood, because its defining feature is that it is limited by design.

## Three ideas hold the top of the stack together

**1. Enumerated powers.** Congress can act only where the Constitution grants it power. Article I, Section 8 is the list: taxing, borrowing, regulating commerce among the states and with the Indian tribes, coining money, declaring war, and the rest, closing with the power to make all laws "necessary and proper" for carrying the others out (U.S. Const. art. I, § 8). **The federal government is powerful, but it is powerful within a fence, and the fence is the enumeration.**

**2. Supremacy.** Within its lane, federal law wins. Article VI makes the Constitution and the laws and treaties made under it supreme, and binds state judges to them "any Thing in the Constitution or Laws of any State to the Contrary notwithstanding" (U.S. Const. art. VI). **Supremacy is not the claim that the nation can do anything; it is the claim that where the nation validly acts, the states must yield.** The two ideas work together: enumeration limits what the nation may do, supremacy makes what it validly does controlling.

**3. Judicial review.** Who decides whether the nation stayed inside the fence? The courts took that role in Marbury v. Madison: "It is emphatically the province and duty of the judicial department to say what the law is" (Marbury v. Madison, 1803). **Judicial review is the answer to Question 4 at the national level:** a federal act that exceeds the enumeration, or violates a right, can be struck by a court.

## How McCulloch stretched and bounded the fence at once

In McCulloch v. Maryland the Court did two things that look opposite and are not. It read the Necessary and Proper Clause **broadly**, upholding the national bank though no clause names a bank, because the power was a reasonable means to enumerated ends. And it held that a state could **not** tax the national bank, because "the power to tax involves the power to destroy" and a state may not destroy what the nation validly created (McCulloch v. Maryland, 1819). **Both halves are supremacy in action: the nation may use implied means, and the states may not sabotage them.**

## Reading a federal action with the method

- **Who acted?** Congress, or the President, or an agency exercising authority Congress delegated to it.
- **Under what authority?** A clause of Article I (for Congress), Article II (for the President), or a statute (for an agency).
- **Where is the power from?** The Constitution, directly, or a statute that traces to the Constitution.
- **Who can overturn it?** A court (judicial review), a later Congress (repeal), a constitutional amendment, or the President's veto before enactment.

**The federal layer is the cleanest place to practice the method**, because its authority is written down in one short document you can read in an afternoon. The lower you go in the stack, the more the documents multiply, which is exactly why the method matters more at the bottom than at the top.

## Sources
- U.S. Const. art. I, § 8. https://constitution.congress.gov/constitution/article-1/section-8/
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Marbury v. Madison, 5 U.S. (1 Cranch) 137 (1803). https://supreme.justia.com/cases/federal/us/5/137/
- McCulloch v. Maryland, 17 U.S. (4 Wheat.) 316 (1819). https://supreme.justia.com/cases/federal/us/17/316/`,
      recallContent: [
        {
          prompt: "In the vertical stack, name the four layers top to bottom and how each holds power.",
          answer: "Nation (enumerated powers, granted by the Constitution), state (general police power, reserved by the Tenth Amendment), local (delegated power handed down by the state), and special district (narrow power from the statute that created it).",
        },
        {
          prompt: "Roughly how many governments usually have authority over one home, and what is the surplus over the naive 'three'?",
          answer: "Usually six to twelve. The surplus over city, state, nation is mostly special districts. The 2017 Census counted 90,075 local governments.",
        },
        {
          prompt: "Why are tribal nations left off the vertical-stack table?",
          answer: "Because they are not a rung on the ladder. They are a separate sovereign with a government-to-government relationship to the federal government, whose authority is pre-existing, not delegated.",
        },
      ],
    },
    {
      slug: "power-the-state",
      title: "7 · The state: the police power and reserved authority",
      section: "Section 2 · The vertical stack",
      body: `The middle of the stack is where most of the government that touches daily life actually lives. Criminal law, property law, family law, most licensing, schools, roads, policing: these are overwhelmingly state functions, because the state holds the broad power and the nation holds the fenced one.

## The reserved power, stated once and worth memorizing

The Tenth Amendment is one sentence: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people" (U.S. Const. amend. X). **A state does not go looking for a clause that grants it power. It acts, and the only question is whether some higher rule forbids the action.** That default is the reason state government is the workhorse of the stack.

## The police power is a name, not a metaphor

The **police power** is the traditional name for a state's general authority to legislate for the health, safety, morals, and general welfare of its people. It has nothing to do with police officers specifically. It is the power behind a state's building codes, its speed limits, its professional licenses, its public-health orders, its zoning enabling laws, and its criminal statutes. **When a state body answers Question 2 with "the police power," it is claiming the broad reserved authority, and the burden is on whoever challenges it to find a prohibition, not on the state to find a grant.**

## What limits a state, since a grant does not

If a state acts unless forbidden, the interesting question is what forbids it. Three sources:

| Limit | Where it lives |
|---|---|
| **The U.S. Constitution** | Rights and structural bars binding on the states, made supreme by Article VI |
| **Federal law within its lane** | A valid federal statute or treaty preempts a conflicting state law |
| **The state's own constitution** | Often MORE detailed and restrictive than the federal one |

**That third row surprises people.** A state constitution is not a smaller copy of the federal one. It is usually longer, more specific, and more restrictive, and it can grant rights the federal constitution does not. **When you read a state action, read the state constitution, not just the federal one**, because the binding limit is frequently there.

## The crucial contrast, set up for Section 3

Here is the sentence the whole next section rests on. **A state's authority is entrenched: it is reserved by the federal constitution, and the federal government cannot simply abolish a state.** Compare that with a city, which you are about to learn holds its power at the pleasure of the state and can be reorganised or dissolved by the state. **Both sit on the ladder. One is bolted to it and one is resting on it.** The difference is not size or importance. It is the terms on which the power is held, and reading those terms is the skill of the next section.

## Reading a state action with the method

- **Who acted?** The legislature, the governor, a state agency, a state court.
- **Under what authority?** Usually the police power, or a specific article of the state constitution.
- **Where is the power from?** The state constitution, read against the federal one for any prohibition.
- **Who can overturn it?** A state or federal court, a later legislature, a state constitutional amendment, the voters by initiative or referendum where the state allows it, or a valid federal law that preempts it.

## Sources
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/`,
      recallContent: [
        {
          prompt: "Name the three ideas that hold the top of the stack together.",
          answer: "Enumerated powers (Congress acts only where granted, Article I, Section 8), supremacy (valid federal law binds the states, Article VI), and judicial review (courts say what the law is, Marbury v. Madison).",
        },
        {
          prompt: "What two opposite-looking things did McCulloch v. Maryland do?",
          answer: "It read the Necessary and Proper Clause broadly (upholding the national bank as an implied means to enumerated ends) and held a state could not tax that bank ('the power to tax involves the power to destroy'). Both are supremacy in action.",
        },
        {
          prompt: "Judicial review answers which of the four method questions, at the national level?",
          answer: "Question 4, who can overturn it. A federal act that exceeds the enumeration or violates a right can be struck by a court (Marbury v. Madison).",
        },
      ],
    },
    {
      slug: "power-quiz-stack",
      title: "8 · Quiz: the vertical stack",
      section: "Section 2 · The vertical stack",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The vertical stack, top to bottom, is:",
            options: [
              "State, nation, special district, local",
              "Nation, state, local, special district",
              "Local, county, state, nation, tribe",
              "Nation, tribe, state, city, county",
            ],
            correctIndex: 1,
            explanation: "Nation, state, local, special district. It is a ladder of delegation: each rung down is narrower and answers to the rung above.",
            sourceLessonSlug: "power-the-stack",
          },
          {
            prompt: "A special district holds power that comes from:",
            options: [
              "The narrow statute that created it",
              "The broad state police power directly",
              "The United States Constitution itself",
              "A treaty ratified by the Senate",
            ],
            correctIndex: 0,
            explanation: "A special district holds only the one job its enabling statute names: a school district schools, a water district water, and nothing wider.",
            sourceLessonSlug: "power-the-stack",
          },
          {
            prompt: "Asked how many governments have authority over one home, most people say three; the usual real number is:",
            options: [
              "Exactly three, as most people guess",
              "Only one, the federal government itself",
              "Six to twelve, mostly special districts",
              "Two, the city and county together",
            ],
            correctIndex: 2,
            explanation: "The surplus over city, state, and nation is mostly special districts. The 2017 Census counted 90,075 local governments nationwide.",
            sourceLessonSlug: "power-the-stack",
          },
          {
            prompt: "The stack tells you where power SITS. What does it NOT tell you?",
            options: [
              "Which layer to search first",
              "How firmly the power is held",
              "Whether the action is local",
              "Which body is on that rung",
            ],
            correctIndex: 1,
            explanation: "A state's authority is entrenched in the federal constitution; a city's is held at the state's pleasure. Both are on the ladder, on different terms. That is Section 3.",
            sourceLessonSlug: "power-the-stack",
          },
          {
            prompt: "The defining feature of the national government's power is that it is:",
            options: [
              "Unlimited within United States borders",
              "Limited to enumerated powers by design",
              "Delegated downward by the states",
              "Whatever the President decides it is",
            ],
            correctIndex: 1,
            explanation: "Congress acts only where the Constitution grants power (Article I, Section 8, closing with the Necessary and Proper Clause). It is powerful within a fence.",
            sourceLessonSlug: "power-the-nation",
          },
          {
            prompt: "The Supremacy Clause is best summarised as:",
            options: [
              "The nation may do anything it wants",
              "States outrank the nation on local matters",
              "Where the nation validly acts, states yield",
              "Treaties are below all state statutes",
            ],
            correctIndex: 2,
            explanation: "Supremacy is not unlimited national power; it is that where the nation validly acts, conflicting state law must give way. Enumeration limits, supremacy controls.",
            sourceLessonSlug: "power-the-nation",
          },
          {
            prompt: "Marbury v. Madison (1803) established that the power to say what the law is belongs to:",
            options: [
              "The President as chief executive",
              "The states, acting together",
              "Congress, which writes the law",
              "The courts (judicial review)",
            ],
            correctIndex: 3,
            explanation: "'It is emphatically the province and duty of the judicial department to say what the law is.' Judicial review is Question 4 answered at the national level.",
            sourceLessonSlug: "power-the-nation",
          },
          {
            prompt: "In McCulloch v. Maryland, the Court held that a state could not tax the national bank because:",
            options: [
              "Banks are exempt from all taxes",
              "The power to tax involves the power to destroy",
              "Maryland had no legislature that year",
              "The bank was located outside the state",
            ],
            correctIndex: 1,
            explanation: "A state may not destroy by taxation what the nation validly created. The case also read the Necessary and Proper Clause to allow implied means.",
            sourceLessonSlug: "power-the-nation",
          },
          {
            prompt: "The Tenth Amendment means a state, unlike the federal government, acts unless:",
            options: [
              "Congress votes to authorise it first",
              "A federal agency grants a permit",
              "Some higher rule forbids the action",
              "The President signs off on the plan",
            ],
            correctIndex: 2,
            explanation: "A state needs no grant, only the absence of a prohibition. That reserved default is the police power, the workhorse of the stack.",
            sourceLessonSlug: "power-the-state",
          },
          {
            prompt: "The 'police power' of a state refers to:",
            options: [
              "The authority over its police officers",
              "Its control of the state highway patrol",
              "Its power to run county jails only",
              "Its broad power over health and welfare",
            ],
            correctIndex: 3,
            explanation: "It has nothing to do with police officers specifically. It is the general power to legislate for health, safety, morals, and welfare, behind building codes, licenses, zoning, and criminal law.",
            sourceLessonSlug: "power-the-state",
          },
          {
            prompt: "When reading a state action, the course says to read the state constitution because it is often:",
            options: [
              "A shorter, simpler copy of the federal one",
              "Longer, more specific, and more restrictive",
              "Not binding on the state government at all",
              "Written entirely by the United States Congress",
            ],
            correctIndex: 1,
            explanation: "A state constitution is not a smaller federal one. The binding limit on a state action is frequently found there, and it can grant rights the federal one does not.",
            sourceLessonSlug: "power-the-state",
          },
          {
            prompt: "The contrast the course draws between a state and a city is that:",
            options: [
              "A state is bolted to the ladder; a city rests on it",
              "A city is larger and richer than a state",
              "A state answers to the city on local matters",
              "A city is a branch of the federal government",
            ],
            correctIndex: 0,
            explanation: "A state's authority is entrenched in the federal constitution and cannot simply be abolished; a city holds its power at the state's pleasure. The difference is the terms, not size.",
            sourceLessonSlug: "power-the-state",
          },
          {
            prompt: "Which is a limit on state power, since a grant is not required for a state to act?",
            options: [
              "A neighboring state's statutes",
              "A city ordinance passed nearby",
              "A valid federal law within its lane",
              "A private company's own rules",
            ],
            correctIndex: 2,
            explanation: "The limits are the U.S. Constitution, valid federal law that preempts within its lane, and the state's own (often stricter) constitution.",
            sourceLessonSlug: "power-the-state",
          },
          {
            prompt: "Reading the stack as 'a ladder of delegation, not of size' means:",
            options: [
              "The biggest government always wins",
              "Power flows down by grant, rung to rung",
              "Every rung has identical authority",
              "Only the top rung can pass any law",
            ],
            correctIndex: 1,
            explanation: "Power flows down by grant: the nation is enumerated, the state is reserved, the local layer is delegated, the district is single-purpose. Each rung answers to the one above.",
            sourceLessonSlug: "power-the-stack",
          },
          {
            prompt: "Enumeration and supremacy work together because:",
            options: [
              "Both let states nullify federal law",
              "One limits, the other makes valid acts control",
              "Both expand federal power without limit",
              "Neither applies to the states at all",
            ],
            correctIndex: 1,
            explanation: "Enumeration limits what the nation MAY do; supremacy makes what it validly does controlling over conflicting state law. Two ideas, one system.",
            sourceLessonSlug: "power-the-nation",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · The local layer
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-creatures-of-the-state",
      title: "9 · Cities are creatures of the state",
      section: "Section 3 · The local layer",
      body: `This is the lesson most adults were never taught, and it explains more about the route series than any single fact in this course. In the United States, a city is not a junior state and not a small nation. **It is a creature of the state that created it, and it holds only the power the state has handed down.**

## The rule, in the Supreme Court's own words

The clearest statement is Hunter v. City of Pittsburgh, where the Court described municipal corporations as "political subdivisions of the State, created as convenient agencies for exercising such of the governmental powers of the State as may be entrusted to them." The state, the Court continued, may "at its pleasure, modify or withdraw all such powers, ... expand or contract the territorial area, unite the whole or a part of it with another municipality, repeal the charter and destroy the corporation," and it may do all of this "with or without the consent of the citizens, or even against their protest" (Hunter v. City of Pittsburgh, 1907). **Read that list slowly. Modify, withdraw, expand, contract, merge, repeal, destroy. Those are the state's powers over a city, and the citizens' consent is not required.**

## What this means for Question 2 and Question 3

When a city body acts, its authority does not come from itself. It comes from a **charter**, and the charter comes from the state, either directly in the state constitution or through a state statute. **So a city's answer to "where is your power from?" always points upward to the state.** This is the opposite of a state, whose power is reserved to it by the federal constitution and cannot be handed back or taken away by an act of Congress.

| | A STATE holds power | A CITY holds power |
|---|---|---|
| **From** | Reserved by the U.S. Constitution | Delegated by the state |
| **Default** | Acts unless forbidden | Acts only if authorised |
| **Can the layer above abolish it?** | No | Yes, the state can |

## Why this is the engine of the route series

A city passing a 1910 segregation ordinance was exercising delegated power under its charter. A city using a blight designation to condemn a block was exercising delegated power. A city annexing its neighbor was exercising delegated power. **Every one of those route-series instruments traces up to a charter, and every charter traces up to a state.** And the same rule that let the state hand a city the power to zone lets the state, today, take that power back by preemption. **The mechanism that built the harms and the mechanism that can undo local action are the same mechanism, read in two directions.** That is why this lesson sits at the center of the course.

## The care this fact requires

**"Creatures of the state" is a legal description, not an insult and not the end of the story.** Cities do real and important work, and residents can have real democratic power inside them. The point of the doctrine is narrow and precise: **when you ask who can overturn a city's act, the state is almost always on the list, because the city's power was the state's to give.** Hold that precision. The next lesson shows that even this settled-sounding rule had a serious dissent, and that the dissent is worth understanding.

## Sources
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/`,
      recallContent: [
        {
          prompt: "State the Tenth Amendment's rule about state power in your own words.",
          answer: "Powers not delegated to the United States nor prohibited to the states are reserved to the states or the people. A state acts unless some higher rule forbids it; it needs no grant.",
        },
        {
          prompt: "What is the police power, and what does it NOT mean?",
          answer: "A state's broad general authority to legislate for health, safety, morals, and welfare. It does not mean authority over police officers specifically; it is behind building codes, licensing, zoning, public health, and criminal law.",
        },
        {
          prompt: "Why does the course tell you to read the STATE constitution when reading a state action?",
          answer: "Because a state constitution is usually longer, more specific, and more restrictive than the federal one, and the binding limit on the action is frequently found there.",
        },
      ],
    },
    {
      slug: "power-dillon-vs-cooley",
      title: "10 · Dillon's Rule versus the Cooley Doctrine",
      section: "Section 3 · The local layer",
      body: `The last lesson stated the rule that cities are creatures of the state. This lesson names it, sources it, and then does something the previous lesson only hinted at: it teaches the serious disagreement about whether the rule should be true at all. **Where authorities disagree, the disagreement is the lesson.**

## Dillon's Rule

The doctrine is named for **John Forrest Dillon**, an Iowa Supreme Court judge who stated it in City of Clinton v. Cedar Rapids and Missouri River Railroad Company, and then systematised it in his treatise on municipal corporations (City of Clinton v. Cedar Rapids & Missouri River R.R. Co., 1868). Dillon's Rule holds that a municipal corporation possesses only three kinds of power: those **granted in express words**, those **necessarily or fairly implied** in the powers expressly granted, and those **essential** to the declared purposes of the corporation. And it adds a tie-breaker that does most of the work: **where there is a reasonable, substantial doubt about whether a power was granted, the doubt is resolved against the city, and the power is denied** (Cornell Legal Information Institute, n.d.).

**That last clause is the whole doctrine in practice.** A city under a strict Dillon's Rule reading cannot act in a gray area. If the grant is unclear, the city loses. Dillon summed up the relationship by calling local governments the creatures, and in effect the tenants at will, of their legislatures.

## The Cooley Doctrine, the road not taken

Not every judge agreed. **Thomas M. Cooley**, of the Michigan Supreme Court, argued for the opposite starting point: that local self-government is an **inherent right**, not a gift from the legislature, and that municipalities have a sphere of local control the state should not invade (People ex rel. Le Roy v. Hurlbut, 1871). This is usually called the **Cooley Doctrine**, and it is a genuine competing theory, not a fringe view.

| | Dillon's Rule | The Cooley Doctrine |
|---|---|---|
| **Source of local power** | Delegated by the state | Inherent right of local self-government |
| **Doubt is resolved** | Against the city | In favor of local control |
| **The city is** | A creature of the legislature | A community with its own sphere |

**Which one won?** As a matter of general United States law, **Dillon's Rule prevailed.** Hunter v. City of Pittsburgh (last lesson) reflects the Dillon view, and it is the majority approach. But **Cooley's idea did not vanish; it went into the home-rule movement**, which is the next lesson. Home rule is, in a real sense, Cooley's argument written into state constitutions after Dillon won in the courts.

## How to use this when you read an action

When a city acts in a gray area and someone challenges it, **you are watching Dillon's Rule get applied.** The challenger says the power was never clearly granted; the city says it was fairly implied or essential. **Knowing the doctrine tells you what the fight is actually about:** not whether the city acted wisely, but whether the state's grant reaches this far. And knowing Cooley tells you that reasonable people built a whole alternative on the other premise, so the outcome is a policy choice a state made, not a law of nature.

## A precision note

**States are not simply "Dillon's Rule states" or "home-rule states" in a clean binary.** Most are hybrids: home rule for some powers or some cities, Dillon's Rule for the rest, with the details in each state's constitution and statutes. Scholars classify the states differently depending on what they measure. **When someone tells you a flat "your state is a Dillon's Rule state," treat it as a starting hypothesis to check against the actual documents, not a settled fact.**

## Sources
- City of Clinton v. Cedar Rapids & Missouri River R.R. Co., 24 Iowa 455 (1868). https://www.law.cornell.edu/wex/city_of_clinton_v._cedar_rapids_and_missouri_railroad_company_(1868)
- People ex rel. Le Roy v. Hurlbut, 24 Mich. 44 (1871).
- Cornell Legal Information Institute. (n.d.). Dillon's Rule. Wex. https://www.law.cornell.edu/wex/dillon's_rule
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/`,
      recallContent: [
        {
          prompt: "In the Supreme Court's own words in Hunter v. City of Pittsburgh, what may a state do to a city?",
          answer: "Modify or withdraw its powers, expand or contract its territory, merge it with another municipality, and repeal its charter to destroy the corporation, with or without the citizens' consent.",
        },
        {
          prompt: "Where does a city's answer to 'where is your power from?' always point, and how is that different from a state?",
          answer: "Upward, to the state (through its charter). A state's power is reserved to it by the federal constitution and cannot be handed back or taken away by Congress; a city's was delegated and can be reclaimed.",
        },
        {
          prompt: "Why is 'cities are creatures of the state' the engine of the route series?",
          answer: "Every route-series instrument (a 1910 ordinance, a blight designation, an annexation) traces up to a charter and then to the state. The same delegation that enabled those acts lets the state take the power back by preemption today.",
        },
      ],
    },
    {
      slug: "power-home-rule",
      title: "11 · Home rule and preemption",
      section: "Section 3 · The local layer",
      body: `If Dillon's Rule makes a city ask permission for everything, **home rule is the device states built to hand cities a broader, standing grant of local power.** It is Cooley's instinct turned into positive law. But it does not repeal the fact that cities are creatures of the state, and understanding exactly what it does and does not do is the point of this lesson.

## What home rule is

Under home rule, a state's constitution or statutes give qualifying local governments the authority to **adopt their own charter and to legislate on local matters without a specific grant for each act.** Instead of asking "did the state authorise this?" for every ordinance, a home-rule city can act on local affairs unless the state has forbidden it. **In effect, home rule flips the Dillon default for local matters: from "act only if authorised" toward "act unless prohibited."**

**Missouri built the first version of this into a state constitution.** The Missouri Constitution of 1875 let St. Louis frame its own charter, making St. Louis widely described as the first home-rule city, and Missouri the pioneer of constitutional (as opposed to purely legislative) home rule (Missouri Const. of 1875; Ballotpedia, n.d.). Other states followed, each on its own terms.

## The two flavors, because the difference matters for Question 4

| | Constitutional home rule | Legislative home rule |
|---|---|---|
| **Granted by** | The state constitution | An ordinary state statute |
| **How the state takes it back** | Requires a constitutional amendment | The legislature can amend the statute |
| **How secure it is** | Harder to reverse | Easier to reverse |

**This is Question 4 again.** A power a city holds under the state constitution is harder for the legislature to strip than a power it holds under a statute the legislature can rewrite next session. **Home rule is not one thing; it is a spectrum of how entrenched the local grant is.**

## Preemption: the limit that survives home rule

Here is the fact that keeps home rule honest. **Even a home-rule city can be overridden by the state through preemption.** When a state legislature passes a law on a subject and declares (or a court finds) that the state has occupied the field, a conflicting local ordinance falls, home rule or not. **The reason traces straight back to Lesson 9: the city is still a creature of the state, and the state's law outranks the city's within the state's own hierarchy.**

Preemption is why a home-rule city can pass a local minimum wage, a plastic-bag rule, a rent-control measure, or a local labor standard, and then watch the state legislature nullify it. **The city had the power to act; the state had the power to take the subject away.** Both facts are true at once, and the method reads them cleanly: the city acted under its charter (Questions 1 to 3), and the state overturned it by preemption (Question 4).

## Reading it in practice

When a local ordinance is challenged as preempted, the fight is about **whether the state has forbidden the field.** That can be explicit (a statute that says "no locality may regulate X") or implicit (a comprehensive state scheme a court reads as leaving no room). **You cannot answer it from memory, and this course will not let you pretend to.** You read the specific state statute and the specific charter, because preemption rules are state-by-state and change with each legislative session. The method points you at the two documents; the documents give the answer.

## Sources
- Missouri Constitution of 1875, art. IX. https://www.sos.mo.gov/archives/history/1875Constitution
- Ballotpedia. (n.d.). Home rule. https://ballotpedia.org/Home_rule
- Cornell Legal Information Institute. (n.d.). Dillon's Rule. Wex. https://www.law.cornell.edu/wex/dillon's_rule
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/`,
      recallContent: [
        {
          prompt: "Who was Dillon's Rule named for, and what does its tie-breaker clause do?",
          answer: "John Forrest Dillon, an Iowa Supreme Court judge (City of Clinton v. Cedar Rapids, 1868). Where there is reasonable, substantial doubt whether a power was granted to a city, the doubt is resolved against the city and the power is denied.",
        },
        {
          prompt: "What is the Cooley Doctrine, and where did its idea go after Dillon's Rule prevailed in the courts?",
          answer: "Thomas Cooley's view that local self-government is an inherent right, not a gift from the legislature (People ex rel. Le Roy v. Hurlbut, 1871). Its idea went into the home-rule movement, written into state constitutions.",
        },
        {
          prompt: "Why is 'your state is a Dillon's Rule state' only a starting hypothesis?",
          answer: "Because most states are hybrids (home rule for some powers or cities, Dillon's Rule for the rest), and scholars classify them differently. You check the actual state constitution and statutes rather than trusting the flat label.",
        },
      ],
    },
    {
      slug: "power-special-districts",
      title: "12 · Special districts: the layer nobody sees",
      section: "Section 3 · The local layer",
      body: `There is a whole layer of American government that taxes people, borrows money, owns property, and holds elections, and that most residents cannot name a single unit of. These are the **special districts**, and they are the reason the true count of governments over your home is closer to a dozen than to three.

## What a special district is

A **special district** is a unit of local government created to perform **one function, or a few related ones**, separate from the general-purpose city or county. Schools, water, sewer, fire protection, libraries, transit, ports, hospitals, cemeteries, mosquito abatement, soil conservation, drainage: each can be its own district, with its own governing board, its own boundary, its own budget, and often its own taxing power. **It answers Question 2 in the narrowest possible way: its authority is the single purpose named in the statute that created it, and nothing wider.**

## The count, which is the headline

The 2017 Census of Governments counted, in the United States:

| Type of local government | Count (2017) |
|---|---|
| **Special districts** | 38,542 |
| Township governments | 16,253 |
| **Municipalities** | 19,495 |
| County governments | 3,031 |
| Independent school districts | 12,754 |

(U.S. Census Bureau, 2017.)

**Read the top two bold rows against each other. There are more special districts (38,542) than there are municipalities (19,495).** Add independent school districts, which are themselves a kind of special-purpose government, and the special-purpose layer dwarfs the general-purpose one. **The layer of government with the least public attention is the largest by unit count.**

## Why they are invisible, and why that matters

Special districts are hard to see for structural reasons, not accidental ones:

1. **Their elections are low-turnout and off-cycle.** A water-district or mosquito-abatement board election rarely shares a ballot with a presidential race, so few people vote in it.
2. **Their boundaries do not match city lines**, so you cannot tell which districts you are in without checking a map or a tax bill.
3. **They appear on your property-tax bill as line items** most people never read, which is often the only place their power over you is visible.

**This invisibility is a civics problem, because a government you cannot name is a government you cannot hold accountable.** The special district is the sharpest test of this whole course: it is real authority, with real taxing power, sitting in plain sight on a document (the tax bill) that almost nobody reads with the method.

## Reading a special district with the method

- **Who acted?** The district's board, named. Find out how its members are chosen: elected, appointed, or in some cases self-perpetuating.
- **Under what authority?** The single function in its enabling statute.
- **Where is the power from?** The state statute (or general enabling law) that created the district, plus any local formation documents.
- **Who can overturn it?** The state (which authorised the district and can change the enabling law), sometimes the county or city, the district's own board, and voters, though turnout makes that last check weak in practice.

**When you do the capstone at the end of this course, the special districts are where you will find your surprises.** Most people who map their own block find governments they had no idea were taxing them, and they are almost always special districts.

## Sources
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/`,
      recallContent: [
        {
          prompt: "What is home rule, and how does it change a city's default compared with Dillon's Rule?",
          answer: "A standing grant (from a state constitution or statute) letting qualifying localities adopt their own charter and legislate on local matters without a specific grant for each act. It flips the Dillon default from 'act only if authorised' toward 'act unless prohibited.'",
        },
        {
          prompt: "What is the difference between constitutional and legislative home rule, and why does it matter for Question 4?",
          answer: "Constitutional home rule is granted by the state constitution (the state needs an amendment to take it back); legislative home rule is granted by an ordinary statute (the legislature can rewrite it). Constitutional home rule is more entrenched, so it is harder to overturn.",
        },
        {
          prompt: "How can a home-rule city pass a local minimum wage and still have it nullified?",
          answer: "Through state preemption. The city had power to act under its charter, but the state can occupy the field and override the local ordinance, because the city is still a creature of the state. Both facts are true at once.",
        },
      ],
    },
    {
      slug: "power-quiz-local",
      title: "13 · Quiz: the local layer",
      section: "Section 3 · The local layer",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "In United States law, a city is best described as:",
            options: [
              "A junior version of a state",
              "A small independent nation",
              "A creature of the state that made it",
              "A branch of the federal government",
            ],
            correctIndex: 2,
            explanation: "A city holds only the power the state hands down through its charter. Hunter v. City of Pittsburgh states it directly.",
            sourceLessonSlug: "power-creatures-of-the-state",
          },
          {
            prompt: "According to Hunter v. City of Pittsburgh, the state may repeal a city's charter and destroy the corporation:",
            options: [
              "Only with the citizens' consent",
              "Only after a federal court agrees",
              "Only during a state emergency",
              "With or without the citizens' consent",
            ],
            correctIndex: 3,
            explanation: "The Court listed modify, withdraw, expand, contract, merge, repeal, and destroy, and said the state may act even against the citizens' protest.",
            sourceLessonSlug: "power-creatures-of-the-state",
          },
          {
            prompt: "Dillon's Rule is named for John Forrest Dillon, who was:",
            options: [
              "A United States President",
              "An Iowa Supreme Court judge",
              "A Missouri state senator",
              "A federal Attorney General",
            ],
            correctIndex: 1,
            explanation: "He stated the rule in City of Clinton v. Cedar Rapids (1868) and systematised it in his treatise on municipal corporations.",
            sourceLessonSlug: "power-dillon-vs-cooley",
          },
          {
            prompt: "The tie-breaker clause that does most of Dillon's Rule's work is that reasonable doubt about a city's power is resolved:",
            options: [
              "In favor of the city always",
              "By a vote of local residents",
              "Against the city, denying the power",
              "By the governor's office directly",
            ],
            correctIndex: 2,
            explanation: "Under a strict Dillon's Rule reading, if the grant is unclear the city loses. A city cannot act in a genuine gray area.",
            sourceLessonSlug: "power-dillon-vs-cooley",
          },
          {
            prompt: "The Cooley Doctrine holds that local self-government is:",
            options: [
              "An inherent right, not a gift",
              "A power granted only by Congress",
              "A privilege the courts can revoke",
              "Identical to Dillon's Rule in effect",
            ],
            correctIndex: 0,
            explanation: "Thomas Cooley argued municipalities have a sphere of local control the state should not invade (People ex rel. Le Roy v. Hurlbut, 1871). Its idea later fed the home-rule movement.",
            sourceLessonSlug: "power-dillon-vs-cooley",
          },
          {
            prompt: "As a matter of general United States law, the contest between the two doctrines came out how?",
            options: [
              "The Cooley Doctrine clearly prevailed",
              "Neither was ever adopted anywhere",
              "Congress banned both of them",
              "Dillon's Rule prevailed as the majority view",
            ],
            correctIndex: 3,
            explanation: "Dillon's Rule is the majority approach, reflected in Hunter v. City of Pittsburgh. Cooley's idea survived in home rule rather than in the courts.",
            sourceLessonSlug: "power-dillon-vs-cooley",
          },
          {
            prompt: "Home rule changes a city's default toward:",
            options: [
              "Act only if the state authorised it",
              "Act on local matters unless forbidden",
              "Act only with a federal permit",
              "Act only after a public referendum",
            ],
            correctIndex: 1,
            explanation: "Home rule is a standing grant that flips the Dillon default for local matters, letting a qualifying city legislate without a specific grant for each act.",
            sourceLessonSlug: "power-home-rule",
          },
          {
            prompt: "The first home-rule city, under an 1875 state constitution, was:",
            options: [
              "Pittsburgh, Pennsylvania",
              "St. Louis, Missouri",
              "Cedar Rapids, Iowa",
              "Detroit, Michigan",
            ],
            correctIndex: 1,
            explanation: "The Missouri Constitution of 1875 let St. Louis frame its own charter, and Missouri pioneered constitutional (not merely legislative) home rule.",
            sourceLessonSlug: "power-home-rule",
          },
          {
            prompt: "Constitutional home rule is more secure than legislative home rule because taking it back requires:",
            options: [
              "A simple majority in one session",
              "The governor's signature only",
              "A vote of the city council",
              "A state constitutional amendment",
            ],
            correctIndex: 3,
            explanation: "A power held under the state constitution needs an amendment to strip; a power held under a statute can be rewritten by the legislature next session.",
            sourceLessonSlug: "power-home-rule",
          },
          {
            prompt: "A home-rule city passes a local minimum wage and the legislature nullifies it. This is an example of:",
            options: [
              "Judicial review by the courts",
              "State preemption of a local law",
              "A federal treaty taking effect",
              "The Cooley Doctrine in action",
            ],
            correctIndex: 1,
            explanation: "The city had power to act under its charter; the state occupied the field and overrode it. Both facts hold at once, because the city is still a creature of the state.",
            sourceLessonSlug: "power-home-rule",
          },
          {
            prompt: "A special district is a unit of local government created to perform:",
            options: [
              "One function, or a few related ones",
              "Every general-purpose city function",
              "All powers a county holds",
              "The full police power of a state",
            ],
            correctIndex: 0,
            explanation: "Schools, water, fire, transit, libraries, mosquito abatement: each can be its own district, with authority limited to the single purpose in its enabling statute.",
            sourceLessonSlug: "power-special-districts",
          },
          {
            prompt: "According to the 2017 Census of Governments, special districts (38,542) compared with municipalities (19,495) were:",
            options: [
              "Fewer than municipalities",
              "Roughly equal in number",
              "More numerous than municipalities",
              "Not counted by the Census",
            ],
            correctIndex: 2,
            explanation: "There are more special districts than municipalities. The least-watched layer of government is the largest by unit count.",
            sourceLessonSlug: "power-special-districts",
          },
          {
            prompt: "The course says special districts are hard to see mainly because:",
            options: [
              "They are secret and unlawful bodies",
              "They exist only in three states",
              "Their elections are low-turnout, off-cycle",
              "They never levy any taxes at all",
            ],
            correctIndex: 2,
            explanation: "Off-cycle low-turnout elections, boundaries that do not match city lines, and tax-bill line items nobody reads make real taxing authority nearly invisible.",
            sourceLessonSlug: "power-special-districts",
          },
          {
            prompt: "The reason 'cities are creatures of the state' is called the engine of the route series is that:",
            options: [
              "Cities never passed any ordinances",
              "The route series ignores local power",
              "Each instrument traces up to a charter",
              "Only states can be sued in the series",
            ],
            correctIndex: 2,
            explanation: "A 1910 ordinance, a blight designation, an annexation: each traces up to a charter and then to the state, and the same delegation lets the state reclaim the power by preemption.",
            sourceLessonSlug: "power-creatures-of-the-state",
          },
          {
            prompt: "Whether a state has 'occupied the field' by preemption is something you should:",
            options: [
              "Answer from memory, quickly",
              "Assume is always the case",
              "Read from the specific statute",
              "Ignore for home-rule cities",
            ],
            correctIndex: 2,
            explanation: "Preemption rules are state-by-state and change each session. The method points you at the state statute and the charter; the documents, not memory, give the answer.",
            sourceLessonSlug: "power-home-rule",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Tribal nations, a separate sovereign
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-separate-sovereign",
      title: "14 · Not a rung on the ladder",
      section: "Section 4 · Tribal nations, a separate sovereign",
      body: `Everything in Sections 2 and 3 was one ladder: power flowing down from a national constitution, through states, to localities and districts. This section is about a sovereign that is **not on that ladder at all.** Tribal nations are the sharpest correction to the pyramid picture, and getting it right is part of the method, not a footnote to it.

**This lesson introduces the idea. A later course in this path develops it in full, with the care such content requires.** Here the goal is narrow: to fix where tribal authority sits in your mental model, so you never again try to file it under "local government."

## Sovereignty that predates the United States

A tribal nation's authority does not come from the United States Constitution, a state constitution, or a charter. **It comes from the nation's own sovereignty, which existed before the United States existed.** This is the single most important idea in the section: tribal sovereignty is **inherent and pre-existing**, not delegated downward from the federal government the way a city's power is delegated from a state. The United States did not create tribal nations; it encountered them as nations and made treaties with them.

The Supreme Court said so early, in the Marshall Court's Cherokee cases. In Cherokee Nation v. Georgia, Chief Justice Marshall described the tribes as **"domestic dependent nations,"** a phrase that captures the tension exactly: nations (sovereign), but domestic and dependent (inside the United States and under its protection) (Cherokee Nation v. Georgia, 1831). A year later, in Worcester v. Georgia, the Court held that the Cherokee Nation was "a distinct community, occupying its own territory ... in which the laws of Georgia can have no force," and that dealings with the tribes were the business of the **federal government, not the states** (Worcester v. Georgia, 1832).

## Why "a separate sovereign," concretely

| The stack (Sections 2 to 3) | A tribal nation |
|---|---|
| Power flows DOWN by grant | Power is inherent and pre-existing |
| A city is created by the state | A tribal nation predates the United States |
| Authority is delegated | Authority is retained, except where limited by federal law |
| Relationship is hierarchical | Relationship is government-to-government |

**So a tribal nation is not "below" a state the way a city is.** It deals with the federal government directly, nation to nation. A state generally has no more authority over a tribal nation's internal affairs than it would over a foreign government's, which is what Worcester established when it kept Georgia's law off Cherokee land.

## The map makes this literal

The map lesson at the end of this course draws the tribal layer in a **different color** from the vertical stack, and it does so on purpose. In eastern Oklahoma, the same ground can sit inside a state, a county, a city, several special districts, **and** a tribal reservation at once. The stack layers are rungs of one ladder. **The tribal nation is a second ladder standing on the same floor.** Drawing it as one more rung would not be a simplification; it would be a factual error about where the authority comes from.

## Sources
- Cherokee Nation v. Georgia, 30 U.S. (5 Pet.) 1 (1831). https://supreme.justia.com/cases/federal/us/30/1/
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/
- U.S. Const. art. I, § 8. https://constitution.congress.gov/constitution/article-1/section-8/`,
      recallContent: [
        {
          prompt: "According to the 2017 Census, how did the number of special districts compare with municipalities?",
          answer: "There were more special districts (38,542) than municipalities (19,495). The special-purpose layer is the largest by unit count, and the least watched.",
        },
        {
          prompt: "Why are special districts so hard for residents to see or hold accountable?",
          answer: "Their elections are low-turnout and off-cycle, their boundaries do not match city lines, and they appear only as line items on a tax bill few people read. A government you cannot name is one you cannot hold accountable.",
        },
        {
          prompt: "How does a special district answer Question 2, 'under what authority?'",
          answer: "In the narrowest way: its authority is the single function named in the statute that created it (schools, water, fire, transit), and nothing wider.",
        },
      ],
    },
    {
      slug: "power-government-to-government",
      title: "15 · Treaties, the trust relationship, and a tension to hold",
      section: "Section 4 · Tribal nations, a separate sovereign",
      body: `The last lesson placed tribal nations off the ladder. This one shows how the relationship actually runs, why treaties sit so high in the chain of authority, and a genuine tension in the doctrine that you should hold rather than resolve. **This is an introduction; a later course in this path develops it with the fuller care the subject requires.**

## Treaties as supreme law

The Constitution names the tribes directly. The Indian Commerce Clause gives Congress power "to regulate Commerce ... with the Indian Tribes" (U.S. Const. art. I, § 8, cl. 3), and treaties made with tribal nations are, like all treaties, part of "the supreme Law of the Land" under Article VI (U.S. Const. art. VI). **This is why Section 1 put treaties near the top of the document chain.** A tribal treaty is not a contract a state can override or a policy an agency can rewrite at will. It ranks with federal statutes as supreme law, and courts read it as a binding promise of the United States.

The modern rule of interpretation follows from that. **Treaty rights, and reservations, persist until Congress clearly ends them.** In McGirt v. Oklahoma, the Court held that much of eastern Oklahoma remains a reservation for the purposes of federal criminal law, because Congress had never clearly disestablished it: "Because Congress has not said otherwise, we hold the government to its word" (McGirt v. Oklahoma, 2020). **That is the treaty-as-supreme-law principle doing work in the present, not the past.**

## The government-to-government relationship, and the trust duty

The federal government deals with tribal nations **nation to nation**, and it also carries what the law calls a **trust responsibility** toward them, a duty of protection that traces back to the "domestic dependent nations" framing of Cherokee Nation v. Georgia (1831). **Two things are true together:** a tribal nation is a sovereign with its own government, and the United States owes it duties of protection. The relationship is neither that of a superior to a subordinate agency nor that of two unrelated foreign states. It is its own category.

## The tension you should hold, not resolve

Here the honest teaching move is to name a disagreement rather than smooth it over. **Federal Indian law asserts both that tribal sovereignty is inherent and pre-existing, and that Congress holds broad ("plenary") power over tribal affairs.** Those two ideas pull against each other, and scholars, tribal governments, and courts have contested the balance for two centuries. **This course does not resolve that tension, because it is genuinely unresolved.** What the method asks of you is precision: when you read an action touching a tribal nation, notice which principle is being invoked (inherent sovereignty, or federal plenary power), because the whole dispute usually turns on that choice.

## A worked example of refusing an unverifiable quotation

You will often hear that when the Court decided Worcester v. Georgia, President Andrew Jackson said, "John Marshall has made his decision; now let him enforce it." **Do not repeat that line as a quotation.** It appears in no contemporaneous record, it surfaces only decades later, and historians treat it as apocryphal; Jackson's own documented words were that the decision "fell still born" and could not coerce Georgia (Federal Judicial Center, n.d.). **The underlying fact is real and grim:** the decision did not protect the Cherokee, the Indian Removal Act of 1830 had already passed, and forced removals followed. **But the famous quote is a fabrication, and this course refuses it** exactly the way it would refuse an invented statistic. The event is teachable without the false line.

## The care rule, stated plainly

This section introduces tribal sovereignty as a matter of authority: where it comes from, and why it is not a rung on the ladder. **It deliberately stops there.** It does not describe any nation's ceremonies, internal governance procedures, or restricted knowledge, and the fuller course in this path is written to lead with tribal nations' own words and Indigenous scholarship, and to treat the many federally recognized tribes as many distinct governments rather than one. **The silence about internal detail here is deliberate, and it is part of getting the subject right.**

## Sources
- U.S. Const. art. I, § 8, cl. 3. https://constitution.congress.gov/constitution/article-1/section-8/
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Cherokee Nation v. Georgia, 30 U.S. (5 Pet.) 1 (1831). https://supreme.justia.com/cases/federal/us/30/1/
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/
- McGirt v. Oklahoma, 140 S. Ct. 2452 (2020).
- Federal Judicial Center. (n.d.). Executive enforcement of judicial orders. https://www.fjc.gov/history/administration/executive-enforcement-judicial-orders`,
      recallContent: [
        {
          prompt: "Where does a tribal nation's authority come from, and how is that different from a city's?",
          answer: "From the nation's own inherent, pre-existing sovereignty, which existed before the United States. A city's power is delegated down from the state; a tribal nation's is retained, not granted, and the relationship is government-to-government, not hierarchical.",
        },
        {
          prompt: "What did Cherokee Nation v. Georgia and Worcester v. Georgia each establish?",
          answer: "Cherokee Nation v. Georgia (1831) called the tribes 'domestic dependent nations.' Worcester v. Georgia (1832) held the Cherokee Nation a distinct community on its own territory where Georgia's laws had no force, and that dealings with tribes were federal, not state, business.",
        },
        {
          prompt: "Why does the course say the tribal nation is 'a second ladder on the same floor'?",
          answer: "Because the same ground can sit inside a state, county, city, and districts AND a tribal reservation at once. The stack is one ladder of delegated power; the tribal nation is a separate sovereign, so the map draws it in a different color rather than as one more rung.",
        },
      ],
    },
    {
      slug: "power-quiz-tribal",
      title: "16 · Quiz: tribal nations as a separate sovereign",
      section: "Section 4 · Tribal nations, a separate sovereign",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A tribal nation's authority comes from:",
            options: [
              "A charter granted by the state",
              "A clause of the U.S. Constitution",
              "Its own pre-existing sovereignty",
              "A statute passed by Congress",
            ],
            correctIndex: 2,
            explanation: "Tribal sovereignty is inherent and pre-existing; it existed before the United States. It is retained, not delegated downward like a city's power.",
            sourceLessonSlug: "power-separate-sovereign",
          },
          {
            prompt: "In Cherokee Nation v. Georgia (1831), Chief Justice Marshall described the tribes as:",
            options: [
              "Ordinary foreign nations",
              "Domestic dependent nations",
              "Counties of the states",
              "Private membership clubs",
            ],
            correctIndex: 1,
            explanation: "The phrase captures the tension: nations (sovereign), yet domestic and dependent (inside the United States and under its protection).",
            sourceLessonSlug: "power-separate-sovereign",
          },
          {
            prompt: "Worcester v. Georgia (1832) held that dealings with the tribes were the business of:",
            options: [
              "The federal government, not states",
              "The state of Georgia alone",
              "County sheriffs and courts",
              "The United Nations later on",
            ],
            correctIndex: 0,
            explanation: "The Court held the Cherokee Nation a distinct community on its own territory where Georgia's laws had no force, and that tribal relations were federal, not state, business.",
            sourceLessonSlug: "power-separate-sovereign",
          },
          {
            prompt: "Why does the course call a tribal nation 'a second ladder on the same floor'?",
            options: [
              "It is taller than the federal ladder",
              "It has no government of its own",
              "It is a rung between state and city",
              "Its authority is separate, not delegated",
            ],
            correctIndex: 3,
            explanation: "The same ground can sit inside a state, county, city, and districts AND a reservation at once. The stack is delegated power; the tribal nation is a separate sovereign.",
            sourceLessonSlug: "power-separate-sovereign",
          },
          {
            prompt: "Treaties made with tribal nations rank, under Article VI, as:",
            options: [
              "Below every state statute",
              "Part of the supreme law of the land",
              "Advisory suggestions only",
              "Local ordinances of the reservation",
            ],
            correctIndex: 1,
            explanation: "Like all treaties, tribal treaties are supreme law. That is why Section 1 placed treaties near the top of the document chain.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "In McGirt v. Oklahoma (2020), the Court held that much of eastern Oklahoma remains a reservation because:",
            options: [
              "The state asked the Court to say so",
              "The tribe repurchased all the land",
              "Congress never clearly ended it",
              "A new treaty was signed in 2020",
            ],
            correctIndex: 2,
            explanation: "'Because Congress has not said otherwise, we hold the government to its word.' Reservations persist until Congress clearly disestablishes them.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "The famous line 'John Marshall has made his decision; now let him enforce it' should be treated as:",
            options: [
              "A verified Jackson quotation",
              "A ruling of the Supreme Court",
              "A line from the Worcester opinion",
              "Apocryphal, not a real quotation",
            ],
            correctIndex: 3,
            explanation: "It appears in no contemporaneous record and surfaces only decades later. Jackson's documented words were that the decision 'fell still born.' The course refuses the false quote.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "The 'tension to hold' in federal Indian law is between inherent tribal sovereignty and:",
            options: [
              "State control over reservations",
              "Broad federal plenary power",
              "County zoning authority",
              "The rules of private clubs",
            ],
            correctIndex: 1,
            explanation: "Federal Indian law asserts both inherent, pre-existing sovereignty and broad congressional power over tribal affairs. The course names the unresolved tension rather than smoothing it over.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "The 'trust responsibility' the federal government carries toward tribal nations traces back to:",
            options: [
              "The domestic dependent nations idea",
              "A statute passed in the 1950s",
              "The Cooley Doctrine of home rule",
              "The Supremacy Clause alone",
            ],
            correctIndex: 0,
            explanation: "It traces to the 'domestic dependent nations' framing of Cherokee Nation v. Georgia (1831): a sovereign with its own government, toward which the United States owes duties of protection.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "A state's authority over a tribal nation's internal affairs is generally:",
            options: [
              "The same as over its own cities",
              "Greater than the federal government's",
              "About as limited as over a foreign one",
              "Unlimited within the state border",
            ],
            correctIndex: 2,
            explanation: "Worcester kept Georgia's law off Cherokee land. A state generally has no more say over a tribal nation's internal affairs than over a foreign government's.",
            sourceLessonSlug: "power-separate-sovereign",
          },
          {
            prompt: "The Indian Commerce Clause (Article I, Section 8) gives the power over commerce with the tribes to:",
            options: [
              "The states individually",
              "The county governments",
              "Congress",
              "The tribal courts",
            ],
            correctIndex: 2,
            explanation: "It names the tribes directly and gives Congress power to regulate commerce with the Indian tribes, part of why tribal relations are federal business.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "When you read an action touching a tribal nation, the method asks you to notice:",
            options: [
              "Which principle is being invoked",
              "How old the reservation is",
              "Whether the state approves it",
              "The population of the county",
            ],
            correctIndex: 0,
            explanation: "Disputes usually turn on the choice between inherent sovereignty and federal plenary power. Precision means naming which principle the action rests on.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "Why does the underlying history of Worcester v. Georgia remain teachable even after refusing the false quote?",
            options: [
              "Because the quote was actually true",
              "The decision failed to protect the Cherokee",
              "Because Georgia obeyed the ruling",
              "The removals were later canceled",
            ],
            correctIndex: 1,
            explanation: "The real facts stand without the fabricated line: the decision did not protect the Cherokee, the Indian Removal Act of 1830 had passed, and forced removals followed.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "This introductory section deliberately stops short of describing:",
            options: [
              "Where tribal authority comes from",
              "Any nation's ceremonies or internal detail",
              "The holding of Worcester v. Georgia",
              "The government-to-government relationship",
            ],
            correctIndex: 1,
            explanation: "The care rule: teach where the authority comes from and why it is separate, then stop. It reproduces no ceremonial or restricted internal detail, and the deeper course leads with tribal nations' own words.",
            sourceLessonSlug: "power-government-to-government",
          },
          {
            prompt: "Compared with a city, a tribal nation's authority is best described as:",
            options: [
              "Delegated down from the state",
              "Created by an act of Congress",
              "Granted by the county it sits in",
              "Retained, not delegated to it",
            ],
            correctIndex: 3,
            explanation: "A city's power is delegated down from the state; a tribal nation retains inherent, pre-existing sovereignty except where federal law limits it. It is not a grant handed down the stack.",
            sourceLessonSlug: "power-separate-sovereign",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Put the method to work
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "power-worked-example",
      title: "17 · A worked example, start to finish",
      section: "Section 5 · Put the method to work",
      body: `Before the map and the capstone, run the whole method once, end to end, on a single realistic action. The example below is a composite illustration built to exercise all four questions, not a report of a specific enacted law; when you do the capstone you will use a real action from your own records.

## The action

Suppose a home-rule city passes an ordinance raising the local minimum wage inside city limits, and three weeks later the state legislature passes a statute declaring that wage regulation is a matter of statewide concern and that no locality may set a minimum wage above the state's. A worker's advocate and a business group each want to know: **who had the power to do what, here?**

## Run the four questions

**Question 1. Who acted?** Two bodies, and you must not blur them. The **city council** passed the ordinance. The **state legislature** passed the preemption statute. Two separate acts by two separate bodies on two rungs of the stack.

**Question 2. Under what authority?** The city council claims its **home-rule charter**, which lets it legislate on local matters without a specific grant. The state legislature claims the **police power**, the broad reserved authority to legislate for welfare, plus its position above the city in the stack.

**Question 3. Where is the power from?**
- The city's power traces up: ordinance to home-rule charter to the **state constitution or statute** that granted home rule to the **U.S. Constitution**.
- The state's power traces up: statute to the state's **police power**, reserved by the **Tenth Amendment**, limited only by the U.S. Constitution and valid federal law.

**Question 4. Who can overturn it?** This is the crux, and the method makes the answer clean rather than mysterious. **The city genuinely had the power to pass its ordinance.** And **the state genuinely had the power to preempt it**, because the city is a creature of the state and the state's law outranks the city's within the state hierarchy. So the ordinance most likely falls, not because the city acted improperly, but because a higher body on the same ladder took the subject away. **Both bodies acted within their authority; the higher one wins the conflict.**

## What the method bought you

Notice what you did not do. You did not decide whether raising the wage was a good idea. You did not guess. **You located each act on the stack, traced each to its document, and read the conflict as a question of hierarchy.** A person without the method argues about whether the wage increase was fair. A person with the method can say precisely why the city could act and why the state could undo it, which is a different and more useful kind of knowing.

## The one honest caveat, every time

**Whether a specific preemption statute actually reaches a specific ordinance is a question you answer from the documents, not from this course.** States differ, statutes differ, and courts read "statewide concern" narrowly in some places and broadly in others. The method is not a shortcut around reading the actual charter and the actual statute. **It is the thing that tells you which two documents to read, and what to look for in them.** That is the whole promise: find the instrument, then find its source, and this course is the general case of the fourteen worked examples in the route series.

**And once more, because it belongs next to a worked example: this is how to read authority, not legal advice.** If you have a real dispute, the method helps you arrive at a lawyer already knowing the right questions. It does not replace one.

## Sources
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- Ballotpedia. (n.d.). Home rule. https://ballotpedia.org/Home_rule`,
      recallContent: [
        {
          prompt: "Under Article VI, what rank do treaties made with tribal nations hold, and why does it matter?",
          answer: "They are part of the supreme law of the land, ranked with federal statutes. A tribal treaty is a binding promise of the United States, not something a state can override or an agency can rewrite at will.",
        },
        {
          prompt: "What was the holding logic of McGirt v. Oklahoma (2020)?",
          answer: "Much of eastern Oklahoma remains a reservation for federal criminal-law purposes because Congress never clearly disestablished it: 'Because Congress has not said otherwise, we hold the government to its word.' Reservations persist until Congress clearly ends them.",
        },
        {
          prompt: "Why does the course refuse the famous 'now let him enforce it' line, and what is the verified fact?",
          answer: "The line appears in no contemporaneous record and is treated as apocryphal; Jackson's documented words were that the decision 'fell still born.' The real, grim facts (the decision did not protect the Cherokee, removal followed) are teachable without the fabricated quote.",
        },
      ],
    },
    {
      slug: "power-map-the-stack",
      title: "18 · Map: the stack over one place",
      section: "Section 5 · Put the method to work",
      body: `**Read this before the map, because the map's limits are part of the lesson.** This platform draws markers as fixed-size dots on a world projection, so the coordinates below are **approximate points placed to show a pattern, not addresses.** Do not use them to find a building. The point of the map is the relationship between the markers, not their exact positions.

## What the map shows

The map places, over one region, the layers of government that can hold authority over the same ground, plus one marker that is deliberately a different color because it is a different KIND of thing.

**Blue markers: the vertical stack.** The national layer (shown at the U.S. Capitol to make the point that it is remote yet supreme within its enumerated powers), the state, the county, the city, and a special district. Read down the blue markers and you are reading Sections 2 and 3: enumerated, reserved, delegated, single-purpose. Each blue marker answers to the one above it.

**The green marker: a separate sovereign.** The Muscogee (Creek) Nation, seated at Okmulgee, Oklahoma, is not a rung on the blue ladder. It is drawn in a different color because its authority is inherent and pre-existing, not delegated down the stack. And it is placed in eastern Oklahoma on purpose: after McGirt v. Oklahoma (2020), much of that ground, including part of the city of Tulsa, lies within the Muscogee reservation AND within the State of Oklahoma at the same time. **Two sovereigns, one floor.** Rendering the green marker as one more shade of blue would be a factual error, which is exactly the claim Section 4 made in words and this map makes in color.

## What the map cannot show

**It cannot show overlap as area.** A reservation, a city, a county, and a water district are shapes that lie on top of one another, and a dot cannot draw a shape. The plan for this path notes that these courses are the first content that genuinely needs a polygon map layer rather than pins; until that ships, hold the overlap in your head while you read the dots.

**It cannot show how firmly each power is held.** The blue markers look alike, but the state is entrenched in the federal constitution and the city is a creature of the state. Colour shows the sovereign/stack distinction; it cannot show the entrenchment distinction inside the stack. That one you carry from Section 3.

## Sources
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- McGirt v. Oklahoma, 140 S. Ct. 2452 (2020).
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/`,
      mapContent: {
        markers: [
          {
            id: "power-map-nation",
            lat: 38.8899,
            lng: -77.0091,
            title: "The national layer (U.S. Capitol, Washington, D.C.)",
            color: "#1d4ed8",
            description:
              "The top of the vertical stack, shown at the U.S. Capitol to make the point that the national government is remote from your block yet supreme within its lane. Its power is enumerated: Congress acts only where the Constitution grants power (Article I, Section 8), and valid federal law binds the states through the Supremacy Clause (Article VI). This marker is a stand-in for the national layer, not a claim that federal authority is exercised only from this building. Coordinates are approximate.",
          },
          {
            id: "power-map-state",
            lat: 35.4923,
            lng: -97.5032,
            title: "The state layer (Oklahoma State Capitol, Oklahoma City)",
            color: "#1d4ed8",
            description:
              "The state holds the broad reserved police power (Tenth Amendment): it acts unless some higher rule forbids it. A state's authority is entrenched in the federal constitution, so the federal government cannot simply abolish it. Everything below this marker on the blue ladder, the county, the city, the special district, holds power the state delegated down. Coordinates are approximate points placed to show the pattern.",
          },
          {
            id: "power-map-county",
            lat: 36.1512,
            lng: -95.9922,
            title: "The county layer (Tulsa County, Oklahoma)",
            color: "#1d4ed8",
            description:
              "A county is a creature of the state, like a city: it holds delegated power handed down by the state, not power of its own. Counties often administer state functions locally (courts, records, elections, some roads). Ask a county body Question 2 and the answer points upward to the state statute or constitution that authorised it. Coordinates are approximate.",
          },
          {
            id: "power-map-city",
            lat: 36.1540,
            lng: -95.9928,
            title: "The local layer (City of Tulsa, Oklahoma)",
            color: "#1d4ed8",
            description:
              "A municipality passes ordinances under its charter, which the state granted. Even a home-rule city holds its power at the state's sufferance and can be overridden by state preemption, because it remains a creature of the state (Hunter v. City of Pittsburgh, 1907). The city marker sits almost on top of the county marker on purpose: the same ground is inside both at once, which a dot cannot draw and a polygon could. Coordinates are approximate.",
          },
          {
            id: "power-map-district",
            lat: 36.1298,
            lng: -95.9797,
            title: "A special district (an independent school district, Tulsa area)",
            color: "#1d4ed8",
            description:
              "The layer nobody sees. A special district (school, water, fire, transit, library) performs one function under the statute that created it, with its own board, boundary, and often taxing power. The 2017 Census counted more special districts nationwide (38,542) than municipalities (19,495). Its boundary rarely matches the city's, which is why residents cannot name the districts taxing them. Coordinates are approximate.",
          },
          {
            id: "power-map-tribal",
            lat: 35.6231,
            lng: -95.9605,
            title: "A separate sovereign (Muscogee (Creek) Nation, Okmulgee)",
            color: "#047857",
            description:
              "Drawn in a different color because it is a different kind of authority, not a rung on the blue ladder. The Muscogee (Creek) Nation's sovereignty is inherent and pre-existing, older than the United States, and the relationship is government-to-government, resting on treaties that rank as supreme law (Article VI). After McGirt v. Oklahoma (2020), much of eastern Oklahoma, including part of Tulsa, lies within the Muscogee reservation AND the State of Oklahoma at once: two sovereigns over one floor. Coordinates are approximate.",
          },
        ],
      },
    },
    {
      slug: "power-capstone",
      title: "19 · Capstone: map the governments over your block",
      section: "Section 5 · Put the method to work",
      lessonType: "assignment",
      body: `You have the method. Now use it on the one place you know best: the block you live on. **Document every government with authority over it, from the primary record.** Most people find six to twelve, and are surprised by half of them.

**One boundary before you start, restated because a capstone is where people forget it: this is a research exercise in reading authority, not legal advice.** You are building an inventory of who has power over your block and where that power comes from. You are not determining anyone's legal rights, including your own.

## The assignment

Produce a **stack map of your own block**: a labeled list (or an actual sketch) of every government with authority over it, each with its layer, its enabling document, and who can overturn its acts. Aim for **completeness over polish.** The finding is the count and the sources, not the prose.

## Step 1. List the layers, top to bottom

Start with the four you know, and name the specific body on each rung:

| Layer | The specific body over YOUR block | How to find it |
|---|---|---|
| **Nation** | The United States | Same for everyone |
| **State (or region)** | Your state | Same across the state |
| **County** | Your county | County assessor or elections site |
| **Municipality** | Your city, town, or "unincorporated" | City site, or the county if unincorporated |

**If your block is unincorporated, that is a real finding**: there is no city layer, and the county does more. Write it down.

## Step 2. Hunt the special districts (this is where the surprises are)

**Your property-tax bill is the single best primary source**, because every district that taxes you usually appears on it as a line item. Read it line by line. Then check your county's GIS or assessor site, which often lists the districts a parcel falls in. Look for:

- School district (and sometimes a separate community-college district)
- Water, sewer, and drainage or flood-control districts
- Fire protection district
- Library district
- Transit, park, hospital, cemetery, mosquito-abatement, or soil-conservation districts

**Write down each one you find, and note how its board is chosen** (elected, appointed, or self-perpetuating), because that is its accountability answer to Question 4.

## Step 3. Ask whether a separate sovereign is present

**Is your block within, or adjacent to, the territory of a tribal nation?** This is not a rung on your stack; it is a separate question with a separate answer. If yes, note the nation by name and record that its authority is inherent and government-to-government, not delegated from your state. **Do not attempt to describe its internal governance**; for this capstone, naming the sovereign and its separate status is the whole task, consistent with the care rule from Section 4.

## Step 4. For each government, fill the four columns

For every entry, answer the method:

| Column | What goes in it |
|---|---|
| **Body** | The named government (Question 1) |
| **Authority** | The power it uses (Question 2) |
| **Document** | Constitution, charter, statute, or enabling act (Question 3) |
| **Who can overturn it** | Court, higher legislature, the body, or voters (Question 4) |

**Leave a cell blank rather than guess.** A blank you can fill later by reading one more document is honest; a confident wrong answer is not. If you could not find a district's enabling statute, write "not yet found," and say which record would settle it.

## Rules you do not get to break

1. **From the record, not from memory.** Every entry ties to a document you can name: a tax bill, a charter, a state statute, a county GIS layer, a Census table.
2. **No invented body, boundary, or statute.** If you cannot source it, it does not go on the map, or it goes on with a clear "unverified" flag.
3. **Name the separate sovereign correctly, and stop there.** Present tribal authority as separate and pre-existing; reproduce no internal or ceremonial detail.
4. **Distinguish "did not find" from "does not exist."** They are different findings and you must not blur them.
5. **This is not legal advice**, and your map should say so at the top, because someone else may read it.

## What good looks like

A complete, sourced inventory in which every government over your block has a name, a layer, a document, and an overturn answer, and in which the blanks are labeled rather than filled with guesses. **If you found a district you had never heard of that taxes you, and you can name the document that created it, you have done exactly what this course set out to teach: you found the instrument, then you found its source.**

## Sources
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/`,
    },
  ],
};
