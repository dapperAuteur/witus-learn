// Authored "How Countries Constitute Themselves" — course 3 of Path A ("Who Has the Power?
// Governments From the Block to the Globe"), planned in
// plans/46-structures-paths-government-and-business.md as course 3 of nine.
//
// WHAT THIS COURSE IS
// -------------------
// The course about the CONSTITUTION itself: the terminal document course 1 kept walking the chain
// of authority up to. It teaches how to read a constitution on three axes and how constitutions are
// actually made. Axis 1 (the horizontal question): who holds executive power and how it links to the
// legislature — presidential, parliamentary, or semi-presidential. Axis 2 (the territorial
// question): federal or unitary. Axis 3 (the form question): codified in one written document or
// uncodified and scattered, and rigid or flexible to amend. Then the load-bearing half: how a
// constitution gets made, taught through four real cases on four routes — the United States 1787
// (convention), South Africa 1996 (negotiated transition), Japan 1947 (imposed after defeat), and
// Germany 1949 (drafted at home under occupation). It builds on course 1's METHOD (the four
// questions, the document chain) and treats course 1 as its prerequisite. It does NOT depend on
// course 2 ("Forms of Government"), which is being authored in parallel.
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * Constitutional text is cited by its official name, article, and year, which is authoritative on
//     its own (like a court reporter), with a stable official/host URL where the pattern is confirmed.
//     Scholarly claims are cited to the author, year, and work.
//   * WHERE SCHOLARS CLASSIFY DIFFERENTLY, THE DISAGREEMENT IS THE LESSON. Taught as live questions:
//     whether "semi-presidential" is a coherent third type or a label for two different systems
//     (Duverger vs Shugart & Carey); whether presidentialism is more failure-prone than
//     parliamentarism (Linz vs Cheibub); whether "unwritten" or "uncodified" is the right word for the
//     UK; whether the US Convention was authorized or a runaway; and, hardest of all, how "imposed"
//     Japan's 1947 constitution really was, and how it differs from Germany's home-drafted Basic Law.
//   * NO invented case, clause, date, quote, or statistic. Verified specifics used: US Convention
//     signed 17 September 1787; ratification required 9 of 13 states (art. VII); New Hampshire the 9th
//     on 21 June 1788; Bill of Rights ratified 1791. South Africa's interim Constitution (Act 200 of
//     1993) and its 34 Constitutional Principles; the Constitutional Court's first certification (6
//     September 1996) declining to certify, and certification of the amended text in December 1996;
//     final Constitution of 1996 in force 4 February 1997. Japan's GHQ draft (February 1946),
//     promulgation 3 November 1946, effect 3 May 1947. Germany's Frankfurt Documents (1 July 1948),
//     the Parlamentarischer Rat, Basic Law adopted 8 May 1949, promulgated 23 May 1949. Where a
//     precise figure could not be verified, the concept is taught without a fabricated citation.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens, commas, colons, parentheses only.
// A dash may survive only inside a `## Sources` block (verbatim cited titles) or a // code comment.

import type { AuthoredCourse } from "./authored-course";

export const HOW_COUNTRIES_CONSTITUTE_COURSE: AuthoredCourse = {
  title: "How Countries Constitute Themselves",
  description:
    "The course about the constitution itself: the document course 1 kept walking the chain of authority up to, and the machinery every country builds to say who holds power and how it is limited. It is course 3 of the path whose method course, Who Has the Power to Do This?, already taught the four questions and the vertical stack, and it treats that course as its prerequisite. You will learn to read any constitution on three axes. The first is the horizontal question: who holds executive power, and how is it linked to the legislature? That is the difference between a parliamentary system (where the executive sits in the legislature and survives on its confidence), a presidential system (where a separately elected president holds executive power for a fixed term), and a semi-presidential system (a president and a prime minister at once), and you will learn the trade-offs and the genuine scholarly fight over whether presidentialism is more fragile and whether semi-presidential is even a coherent category. The second axis is territorial: federal or unitary. The third is the form: codified into one written document or uncodified and scattered, as in the United Kingdom, New Zealand, and Israel, and rigid or flexible to amend. Then the course turns to how constitutions are actually made, taught through four real cases on four routes: the United States in 1787 by a convention that then had to be ratified, South Africa in 1996 by a negotiated transition a court had to certify, Japan in 1947 by a text the occupying power largely wrote, and Germany in 1949 by Germans drafting at home inside limits the Allies set. It closes with a world map of constitutional systems and a capstone: trace how one real constitution was made and classify its system from the primary documents. This course teaches how to read authority. It is not legal advice.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · What a constitution is, and how to read one
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "constitute-what-this-is",
      title: "1 · What this course teaches, and what it is not",
      section: "Section 1 · What a constitution is, and how to read one",
      body: `Course 1 taught you to walk a chain of authority: an ordinance rests on a charter, the charter on a state constitution, the state constitution under the national one. **You kept walking up until you reached a document that grants power on its own authority rather than borrowing it, and that document was a constitution.** This course is about that terminal document. What is a constitution, how do you read one, and where does it itself come from?

## First, the boundary. This is not legal advice.

**This course teaches how to READ constitutions and how they are made. It is not legal advice, and it cannot tell you whether any particular government action was lawful under any constitution.** It creates no lawyer-client relationship. It teaches the questions a comparative-law scholar, a journalist, or a constitution-drafter asks first, so you can open a founding document and get oriented. That boundary matters more here than usual, because this course compares many countries whose law you would each read very differently in practice.

## What you already have, if you took course 1

This is course 3 of the path "Who Has the Power? Governments From the Block to the Globe." **Course 1, "Who Has the Power to Do This?", gave you the method**: four questions to ask of any government action (who acted, under what authority, where the power comes from, and who can overturn it), the vertical stack, and the idea that a constitution sits at the top of the chain as the document that grants power to itself. **This course opens that top document and reads it.** A companion course in this path looks at how outsiders rank and label whole governments; this one looks instead at the constitutional machinery underneath.

## A constitution is not the same as a country's goodness

The single most useful habit this course builds is to **separate the machinery from the merits.** A constitution can be beautifully written and ignored, or plain and fiercely obeyed. **A written bill of rights on the page is not the same as a right you can actually claim in a court.** So this course reads the machinery precisely (who holds power, how it is divided, how it is changed) and stays careful about the gap between the text and the practice, exactly the way course 1 stayed careful about the gap between an ordinance's recital and whether the power really existed.

## Where this course goes

Two halves. **The first half teaches you to READ a constitution on three axes:**

| Axis | The question | Where in the course |
|---|---|---|
| **Horizontal** | Who holds executive power, and how is it tied to the legislature? | Section 2 |
| **Territorial** | Is power divided across territory (federal) or held at the centre (unitary)? | Section 3 |
| **Form** | Is it one written, hard-to-change document, or scattered and easily changed? | Section 3 |

**The second half teaches you how a constitution gets MADE**, through four real cases on four different routes (Section 4), before you see the whole world on a map and classify one yourself (Section 5). Read the machinery first, then watch it being built.

## Sources
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Elkins, Z., Ginsburg, T., & Melton, J. (2009). The endurance of national constitutions. Cambridge University Press.`,
    },
    {
      slug: "constitute-what-it-does",
      title: "2 · What a constitution actually does",
      section: "Section 1 · What a constitution is, and how to read one",
      body: `Before you can classify constitutions, know what the thing is FOR. A constitution is not a mission statement and not a list of a country's values. **It is a working document that does four specific jobs**, and every axis you will learn in this course is a way of asking how it does one of them.

## The four jobs

| Job | What it means | The verb |
|---|---|---|
| **Constitute** | It creates the state's institutions: a legislature, an executive, courts | MAKES |
| **Distribute** | It hands specific powers to each institution and level | DIVIDES |
| **Limit** | It fences the state off from the people through rights and rules | RESTRAINS |
| **Entrench** | It puts itself above ordinary law, so a mere statute cannot override it | PROTECTS |

**The word "constitution" is the first job wearing its own name.** To constitute is to bring into being. Before the document, there is no legislature and no presidency as legal entities; the constitution calls them into existence and says what each one is. Course 1's "who acted?" has an answer only because some constitution constituted that body.

## Distribute and limit: the two directions of power

The middle two jobs point in opposite directions and it is worth holding them apart.

**Distribute is about power BETWEEN state bodies.** It says the legislature makes law, the executive carries it out, the courts judge disputes, and (in a federation) the centre does these things and the regions do those. This is the machinery Sections 2 and 3 take apart.

**Limit is about power BETWEEN the state and the person.** A bill of rights, due-process guarantees, and hard limits on what any branch may do are the state fencing itself in. **A constitution that only distributes power and never limits it can organise a very efficient tyranny.** The two jobs are separate achievements, and a country can be strong on one and weak on the other.

## Entrench: the job that makes it a constitution and not a statute

The fourth job is the quiet one that makes the other three stick. **A constitution claims to be higher law**: ordinary legislation that conflicts with it is invalid, and the constitution can be changed only by some harder process than passing a normal law. **Take entrenchment away and you do not have a constitution; you have a statute with a grand title**, because the next ordinary majority could rewrite it on a Tuesday. How strongly a constitution is entrenched (how much harder it is to amend than an ordinary law) is a whole axis of its own, and Section 3 measures it.

## Why the jobs come before the types

Every classification in this course is really a question about one of these jobs:
- **Presidential versus parliamentary** is a question about how the constitution DISTRIBUTES executive power and ties it to the legislature.
- **Federal versus unitary** is a question about how it DISTRIBUTES power across territory.
- **Codified versus uncodified, rigid versus flexible** are questions about how, and how hard, it ENTRENCHES.

**Learn the jobs, and the types stop being vocabulary and start being answers.** This is analysis of structure, not legal advice.

## Sources
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Elkins, Z., Ginsburg, T., & Melton, J. (2009). The endurance of national constitutions. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "How does this course connect to course 1's chain of authority?",
          answer: "Course 1 had you walk up a chain (ordinance to charter to state constitution to national constitution) until you reached the document that grants power on its own authority. That terminal document is the constitution, and this course opens and reads it.",
        },
        {
          prompt: "What is this course, and what is it not?",
          answer: "It teaches how to READ constitutions and how they are made. It is not legal advice, creates no lawyer-client relationship, and cannot tell you whether any particular action was lawful under any constitution.",
        },
        {
          prompt: "Why does the course insist on separating 'the machinery from the merits'?",
          answer: "A constitution can be beautifully written and ignored, or plain and fiercely obeyed. A right on the page is not the same as a right you can claim in court, so the course reads the machinery precisely while staying careful about the gap between text and practice.",
        },
      ],
    },
    {
      slug: "constitute-three-questions",
      title: "3 · Three questions that classify any constitution",
      section: "Section 1 · What a constitution is, and how to read one",
      body: `You now know what a constitution does. Here is how to read one fast. **Ask three questions, in this order, of any constitution on earth, and you can place it.** The rest of the course is these three questions, each opened up.

## Question 1 (horizontal): who holds executive power, and how is it tied to the legislature?

This is the question that sorts the world's democracies into the three big families, and it is Section 2.

| Family | Who runs the executive | How it links to the legislature |
|---|---|---|
| **Parliamentary** | A prime minister and cabinet | They SIT IN the legislature and survive only on its confidence |
| **Presidential** | A separately elected president | SEPARATE from the legislature, fixed term, cannot be voted out politically |
| **Semi-presidential** | A president AND a prime minister | The president is separately elected; the premier answers to the legislature |

**The whole question is the relationship between the person who runs the government day to day and the assembly that makes the law.** Are they fused or separated? Can one dismiss the other? Section 2 is that relationship, three ways.

## Question 2 (territorial): federal or unitary?

Does the constitution divide power across territory so that regional governments hold guaranteed powers of their own (**federal**), or does it keep sovereignty at the centre and let regions exist on the centre's terms (**unitary**)? Course 1 taught that in the United States "cities are creatures of the state." This question asks the level up: are the STATES creatures of the nation, or co-sovereigns the nation cannot abolish? **A later course in this path develops the middle layer in depth; here you learn to spot which model a constitution chose**, in Section 3.

## Question 3 (form): codified or uncodified, rigid or flexible?

Two sub-questions, both about the physical and legal SHAPE of the constitution.
- **Codified or uncodified.** Is it gathered into one written, capital-C document (most countries), or scattered across statutes, court decisions, and conventions with no single text (the United Kingdom, New Zealand, and Israel)?
- **Rigid or flexible.** How much harder is it to change the constitution than to pass an ordinary law? A little (flexible) or a lot (rigid)?

These are also Section 3.

## Read all three, because a country is all three at once

A real constitution answers all three questions simultaneously, and the answers are independent.

| Country | Horizontal | Territorial | Form |
|---|---|---|---|
| **United States** | Presidential | Federal | Codified, rigid |
| **United Kingdom** | Parliamentary | Unitary (with devolution) | Uncodified, flexible |
| **Germany** | Parliamentary | Federal | Codified, rigid |
| **France** | Semi-presidential | Unitary | Codified |

**No single answer tells you much; the combination is the portrait.** The United States and Germany are both federal and both codified, yet one is presidential and one parliamentary. France and the United Kingdom are both unitary at heart, yet one is codified and semi-presidential and the other uncodified and parliamentary. Learn to read all three axes, and any constitution becomes legible. This is comparative description, not legal advice.

## Sources
- Lijphart, A. (1999). Patterns of democracy: Government forms and performance in thirty-six countries. Yale University Press.
- Elkins, Z., Ginsburg, T., & Melton, J. (2009). The endurance of national constitutions. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "Name the four jobs a constitution does, and the verb for each.",
          answer: "Constitute (MAKES the state's institutions), distribute (DIVIDES powers among institutions and levels), limit (RESTRAINS the state through rights and rules), and entrench (PROTECTS itself as higher law above ordinary statute).",
        },
        {
          prompt: "What is the difference between the 'distribute' job and the 'limit' job?",
          answer: "Distribute is about power BETWEEN state bodies (which branch or level does what). Limit is about power BETWEEN the state and the person (rights and hard limits). A constitution that distributes but never limits can organise an efficient tyranny.",
        },
        {
          prompt: "Why does entrenchment 'make it a constitution and not a statute'?",
          answer: "Entrenchment makes the document higher law: conflicting ordinary legislation is invalid, and it can be changed only by a harder process than a normal law. Without it you have a statute with a grand title that the next ordinary majority could rewrite at will.",
        },
      ],
    },
    {
      slug: "constitute-quiz-basics",
      title: "4 · Quiz: what a constitution is",
      section: "Section 1 · What a constitution is, and how to read one",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "In course 1's chain of authority, a constitution is the document that:",
            options: [
              "Borrows its power from a charter",
              "Grants power on its own authority",
              "Ranks below an ordinary statute",
              "Is issued by a city council vote",
            ],
            correctIndex: 1,
            explanation: "You walk the chain up until you reach a document that grants power to itself rather than borrowing it. That terminal document is a constitution, and this course reads it.",
            sourceLessonSlug: "constitute-what-this-is",
          },
          {
            prompt: "This course states plainly that it is:",
            options: [
              "A guarantee an action was lawful",
              "A full replacement for a lawyer",
              "A method to read law, not advice",
              "Reliable legal advice for your case",
            ],
            correctIndex: 2,
            explanation: "It teaches how to read constitutions and how they are made, and the questions to ask first. It is not legal advice and creates no lawyer-client relationship.",
            sourceLessonSlug: "constitute-what-this-is",
          },
          {
            prompt: "'Separate the machinery from the merits' means a constitution can be:",
            options: [
              "Only good or only very bad",
              "Read without any close care",
              "Judged solely by its length",
              "Beautifully written yet ignored",
            ],
            correctIndex: 3,
            explanation: "A right on the page is not the same as a right you can claim in court. The course reads the machinery precisely while watching the gap between the text and the practice.",
            sourceLessonSlug: "constitute-what-this-is",
          },
          {
            prompt: "The four jobs a constitution does are to:",
            options: [
              "Tax, spend, borrow, and audit",
              "Elect, campaign, poll, and vote",
              "Constitute, distribute, limit, entrench",
              "Advise, suggest, propose, and hope",
            ],
            correctIndex: 2,
            explanation: "It makes the institutions, divides powers among them, restrains the state through rights, and protects itself as higher law. Every classification is a question about one of these jobs.",
            sourceLessonSlug: "constitute-what-it-does",
          },
          {
            prompt: "The 'distribute' job of a constitution is about power:",
            options: [
              "Between state bodies",
              "Held by foreign states",
              "Owned by private firms",
              "Given away to no one",
            ],
            correctIndex: 0,
            explanation: "Distribute assigns powers among state institutions and levels (which branch or region does what). It is separate from 'limit', which is about power between the state and the person.",
            sourceLessonSlug: "constitute-what-it-does",
          },
          {
            prompt: "A constitution that distributes power but never limits it can:",
            options: [
              "Never actually be obeyed",
              "Organise an efficient tyranny",
              "Only ever be a short text",
              "Not create any institutions",
            ],
            correctIndex: 1,
            explanation: "Distributing and limiting are separate achievements. Limit is the state fencing itself off from the person; without it, an efficient distribution of power can still be tyrannical.",
            sourceLessonSlug: "constitute-what-it-does",
          },
          {
            prompt: "Take entrenchment away from a constitution and you are left with:",
            options: [
              "A binding higher law",
              "A treaty between nations",
              "A statute with a grand title",
              "An unchangeable document",
            ],
            correctIndex: 2,
            explanation: "Entrenchment makes it higher law, changeable only by a harder process than an ordinary statute. Without it, the next ordinary majority could rewrite it on a Tuesday.",
            sourceLessonSlug: "constitute-what-it-does",
          },
          {
            prompt: "The course's first (horizontal) classification question asks:",
            options: [
              "How old the country's flag is",
              "How many people live there",
              "How rich the central bank is",
              "Who holds executive power, and how",
            ],
            correctIndex: 3,
            explanation: "The horizontal question is the relationship between the person who runs the government and the assembly that makes law, which sorts democracies into parliamentary, presidential, and semi-presidential.",
            sourceLessonSlug: "constitute-three-questions",
          },
          {
            prompt: "The territorial question (Question 2) asks whether a constitution is:",
            options: [
              "Federal or unitary",
              "Long or fairly short",
              "Signed or still in draft",
              "Popular or unpopular",
            ],
            correctIndex: 0,
            explanation: "Federal divides power across territory so regions hold guaranteed powers of their own; unitary keeps sovereignty at the centre and lets regions exist on the centre's terms.",
            sourceLessonSlug: "constitute-three-questions",
          },
          {
            prompt: "The 'form' question (Question 3) splits into codified-or-uncodified and:",
            options: [
              "Rigid or flexible",
              "Rich or fairly poor",
              "Old or brand new",
              "Local or national",
            ],
            correctIndex: 0,
            explanation: "Codified asks whether it is one written document or scattered; rigid-or-flexible asks how much harder it is to amend than an ordinary law. Both are covered in Section 3.",
            sourceLessonSlug: "constitute-three-questions",
          },
          {
            prompt: "The course insists you read all three axes because:",
            options: [
              "Only one axis ever matters",
              "The axes always give one answer",
              "The combination is the portrait",
              "Every country answers the same",
            ],
            correctIndex: 2,
            explanation: "The answers are independent. The US and Germany are both federal and codified yet one is presidential and one parliamentary; the combination, not any single answer, is the portrait.",
            sourceLessonSlug: "constitute-three-questions",
          },
          {
            prompt: "On the three axes, the United States is:",
            options: [
              "Parliamentary, unitary, uncodified",
              "Presidential, federal, codified",
              "Semi-presidential, federal, flexible",
              "Parliamentary, federal, uncodified",
            ],
            correctIndex: 1,
            explanation: "A separately elected president (presidential), states with guaranteed powers (federal), and one written, hard-to-amend document (codified, rigid). Germany shares two of those but is parliamentary.",
            sourceLessonSlug: "constitute-three-questions",
          },
          {
            prompt: "The word 'constitution' names which of the four jobs directly?",
            options: [
              "The job of limiting the state",
              "The job of entrenching itself",
              "The job of distributing power",
              "The job of creating institutions",
            ],
            correctIndex: 3,
            explanation: "To constitute is to bring into being. Before the document there is no legislature or presidency as legal entities; the constitution calls them into existence.",
            sourceLessonSlug: "constitute-what-it-does",
          },
          {
            prompt: "The 'limit' job of a constitution concerns power between:",
            options: [
              "The state and the person",
              "One court and another court",
              "Two neighbouring countries",
              "The capital and the regions",
            ],
            correctIndex: 0,
            explanation: "Limit is a bill of rights and hard rules fencing the state off from the individual. Power between the capital and the regions is the 'distribute' job, read on the territorial axis.",
            sourceLessonSlug: "constitute-what-it-does",
          },
          {
            prompt: "On the three axes, the United Kingdom is:",
            options: [
              "Presidential, federal, codified",
              "Semi-presidential, unitary, rigid",
              "Parliamentary, unitary, uncodified",
              "Presidential, unitary, uncodified",
            ],
            correctIndex: 2,
            explanation: "A prime minister who sits in and answers to Parliament (parliamentary), sovereignty at the centre (unitary, with devolution), and no single written document (uncodified, flexible).",
            sourceLessonSlug: "constitute-three-questions",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Who holds executive power
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "constitute-parliamentary",
      title: "5 · Parliamentary systems: fused power and confidence",
      section: "Section 2 · Who holds executive power",
      body: `Start with the most common design in the world's democracies. In a **parliamentary system, the executive is drawn from the legislature and lives or dies by its confidence.** There is no separately elected chief executive; the assembly you vote for produces the government from within itself.

## The mechanism: fusion, not separation

The defining feature is **fusion of the executive and the legislature.** The head of government (usually called the prime minister) is a member of the legislature, chosen because they command a majority there, and the cabinet is drawn from the legislature too. **You do not vote for a prime minister directly.** You vote for a legislature; whoever can command its majority becomes prime minister. Power flows through the assembly, not around it.

## The load-bearing rule: confidence

The whole system turns on one rule. **The government stays in office only as long as it holds the "confidence" of the legislature.** If the legislature passes a vote of no confidence (or defeats a matter the government has declared one of confidence), the government must resign or call an election. This is the opposite of a fixed term. **The executive can be removed politically, at any time, without any crime, simply because it has lost its majority.**

Confidence cuts the other way too. Many parliamentary systems let the prime minister ask the head of state to **dissolve the legislature and call an early election**, so the two branches hold a mutual threat: the assembly can end the government, and the government can (often) end the assembly. **Fusion plus mutual dismissal is the parliamentary signature.**

## Head of state versus head of government

Parliamentary systems almost always **split the two top roles.** The **head of government** (prime minister) runs the country and answers to the legislature. The **head of state** (a monarch, as in the United Kingdom, Japan, or Sweden, or a mostly ceremonial president, as in Germany, Italy, or India) represents the nation, performs formal acts, and by convention stays above day-to-day politics.

| Role | Who holds it | What they do |
|---|---|---|
| **Head of government** | Prime minister | Runs the executive; answers to the legislature |
| **Head of state** | Monarch or ceremonial president | Formal, symbolic, mostly above politics |

**Do not let a ceremonial president fool you into calling a system presidential.** Germany, Italy, and India all have a president AND are parliamentary, because that president is a figurehead and the prime minister runs the government on the confidence of the legislature. The label follows the machinery, not the job titles.

## The trade-off, stated fairly

Parliamentary government is often praised for **flexibility and accountability**: a government that loses its majority or its competence can be replaced quickly, without waiting years for a fixed term to run out, and the executive can almost always pass its programme because it holds a legislative majority by definition. The classic worry is the mirror image: **where majorities are unstable, governments can fall often and rule briefly**, and a prime minister with a solid majority faces fewer of the hard checks a separate legislature imposes. Section 2's next lesson puts the presidential answer beside it. This is structural description, not legal advice.

## Sources
- Lijphart, A. (1999). Patterns of democracy: Government forms and performance in thirty-six countries. Yale University Press.
- Cheibub, J. A. (2007). Presidentialism, parliamentarism, and democracy. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "State the three axes this course reads a constitution on.",
          answer: "Horizontal (who holds executive power and how it links to the legislature: presidential, parliamentary, semi-presidential), territorial (federal or unitary), and form (codified or uncodified, and rigid or flexible to amend).",
        },
        {
          prompt: "Why does no single axis tell you much about a constitution?",
          answer: "The answers are independent, so the combination is the portrait. The US and Germany are both federal and codified yet differ on the horizontal axis (presidential vs parliamentary); France and the UK are both unitary yet differ on form and executive.",
        },
        {
          prompt: "Which classification question does 'federal versus unitary' answer, and which job of a constitution does it probe?",
          answer: "The territorial question (Question 2). It probes the 'distribute' job: whether power is divided across territory so regions hold guaranteed powers of their own, or kept at the centre with regions on the centre's terms.",
        },
      ],
    },
    {
      slug: "constitute-presidential",
      title: "6 · Presidential systems: separated power and fixed terms",
      section: "Section 2 · Who holds executive power",
      body: `Now the opposite design. In a **presidential system, a president is elected separately from the legislature, holds executive power in their own right, and serves a fixed term neither branch can cut short for political reasons.** Where parliamentary fuses the two branches, presidential pulls them apart on purpose.

## The mechanism: separation, not fusion

Three features define it, and they are the mirror image of the last lesson.

| Feature | Parliamentary | Presidential |
|---|---|---|
| **How the executive is chosen** | By the legislature, from within it | Separately elected, by the voters or an electoral body |
| **The executive's term** | Lasts only while it holds confidence | A FIXED term, set in advance |
| **Membership** | The executive SITS IN the legislature | The president is OUTSIDE the legislature |

**A president is both head of state and head of government at once.** There is no split ceremonial role; the one office does both jobs. And crucially, **the legislature cannot remove a president over mere policy or a lost majority.** Removal is reserved for serious wrongdoing through a high-bar process (impeachment), not a political vote of no confidence. The fixed term is the point: it buys stability at the cost of the quick replacement parliamentary systems allow.

## The United States is the model case

The framers built the first modern presidential system, and its parts are worth naming with the method. **Article I vests legislative power in Congress; Article II vests "the executive Power" in a President; Article III vests the judicial power in the courts** (U.S. Const. arts. I, II, III). The President is chosen separately (through the Electoral College, not by Congress), serves a fixed four-year term, and can be removed before it ends only by impeachment and conviction for "Treason, Bribery, or other high Crimes and Misdemeanors" (U.S. Const. art. II, s. 4). **Congress cannot fire the President for pursuing policies it dislikes, and the President cannot dissolve Congress and call an election.** Each is stuck with the other for the fixed term, which is exactly what "separation of powers" buys and costs.

## The trade-off, and a real scholarly fight

Here the honest move is to teach a genuine disagreement rather than a settled verdict. **The political scientist Juan Linz argued in "The Perils of Presidentialism" that presidential systems are more prone to breakdown than parliamentary ones** (Linz, 1990). His reasons: a separately elected president and legislature can BOTH claim a popular mandate, and when they deadlock there is no constitutional way to break the tie the way a no-confidence vote or dissolution breaks it in a parliamentary system; and a fixed term makes politics rigid, keeping a failed or dangerous president in office until the clock runs out. **The fixed term is a virtue (stability) and a vice (rigidity) at the same time.**

**But the verdict is contested.** José Cheibub, re-examining the evidence, argued that the higher breakdown rate of presidential democracies is better explained by the fact that **many of them emerged from military dictatorships**, a fragile starting point, than by the presidential form itself (Cheibub, 2007). **So the live question is whether presidentialism is dangerous by design or merely dangerous by the company it has kept.** This course does not resolve it. It teaches you to notice which claim an argument rests on, exactly as course 1 taught you to hold a contested question. This is structural description, not legal advice.

## Sources
- U.S. Const. arts. I, II, III; art. II, s. 4. https://constitution.congress.gov/
- Linz, J. J. (1990). The perils of presidentialism. Journal of Democracy, 1(1), 51-69.
- Cheibub, J. A. (2007). Presidentialism, parliamentarism, and democracy. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "What is the defining mechanism of a parliamentary system?",
          answer: "Fusion of the executive and legislature: the prime minister and cabinet are drawn from the legislature and hold office only while they command its confidence. You vote for a legislature, not a prime minister, and the government can be removed politically at any time.",
        },
        {
          prompt: "What is the 'confidence' rule, and how does dissolution cut the other way?",
          answer: "The government stays in office only while it holds the legislature's confidence; a no-confidence vote forces resignation or an election. In return, the prime minister can often ask to dissolve the legislature and call an early election, so each branch holds a mutual threat.",
        },
        {
          prompt: "Why does a ceremonial president not make a system presidential?",
          answer: "Because the label follows the machinery. Germany, Italy, and India each have a president AND are parliamentary, because that president is a figurehead head of state while the prime minister runs the government on the legislature's confidence.",
        },
      ],
    },
    {
      slug: "constitute-semi-presidential",
      title: "7 · Semi-presidential systems, and a contested category",
      section: "Section 2 · Who holds executive power",
      body: `The two clean types are not the whole world. Many countries run a **semi-presidential system: a separately elected president AND a prime minister who answers to the legislature, both holding real executive power at once.** It is the design that most resists a tidy label, which is exactly why it is the most instructive one to end Section 2 on.

## The mechanism: two executives, sharing the job

A semi-presidential system has the parts of both other types running at the same time.
- A **president**, elected separately by the voters for a fixed term (the presidential part), and
- a **prime minister and cabinet**, who sit in the legislature and can be removed by a vote of no confidence (the parliamentary part).

**Executive power is split between them**, and the constitution (and practice) decides who does what. The term was coined by the French scholar **Maurice Duverger**, who defined a semi-presidential regime as one combining a popularly elected fixed-term president with a prime minister and cabinet responsible to parliament (Duverger, 1980). **France under the 1958 Constitution of the Fifth Republic is the standard example**: a president elected by the voters, plus a prime minister the president appoints but who must retain the confidence of the National Assembly (Constitution of 4 October 1958).

## Cohabitation: the tell that a system is really semi-presidential

The sharpest feature to watch for is **cohabitation**: when the president belongs to one party and the legislative majority (and therefore the prime minister) belongs to another. **In those periods the system tilts parliamentary**, because the prime minister, backed by the hostile legislative majority, controls domestic policy while the president's power narrows. When the president's party also holds the legislature, the system tilts presidential. **The same constitution behaves like two different systems depending on who controls the assembly**, which is what makes semi-presidential genuinely its own category and not just "a bit of both."

## The disagreement this lesson exists to teach

Scholars do not agree that "semi-presidential" names one coherent thing, and the honest teaching move is to lay the dispute out.

| The position | The claim |
|---|---|
| **It is one real type** | Duverger's definition captures a genuine family: elected president plus a premier responsible to parliament |
| **It is really two types** | Shugart and Carey split it into "premier-presidential" (the premier answers only to the assembly) and "president-parliamentary" (the premier answers to BOTH the president and the assembly), which behave very differently |
| **The label misleads** | Some argue that on any given day these systems ACT presidential or parliamentary, so classifying by the fixed rules can hide how power really flows |

**All three positions have serious support.** Shugart and Carey's distinction matters because a president-parliamentary system, where the president can dismiss a premier who still holds the assembly's confidence, concentrates far more power in the president than the premier-presidential version does (Shugart & Carey, 1992). Robert Elgie, who catalogued these systems, defines them by the constitutional rules (an elected fixed-term president plus a premier and cabinet accountable to the legislature) precisely so the category does not dissolve into case-by-case judgment calls (Elgie, 2011). **So is France "semi-presidential"? Yes under Duverger's and Elgie's rule-based definition; and the more useful answer names WHICH sub-type and notes that cohabitation makes it behave differently at different times.** State the definition, name the dispute, keep them apart. This is comparative description, not legal advice.

## Sources
- Duverger, M. (1980). A new political system model: Semi-presidential government. European Journal of Political Research, 8(2), 165-187.
- Constitution of 4 October 1958 (France). https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur
- Shugart, M. S., & Carey, J. M. (1992). Presidents and assemblies: Constitutional design and electoral dynamics. Cambridge University Press.
- Elgie, R. (2011). Semi-presidentialism: Sub-types and democratic performance. Oxford University Press.`,
      recallContent: [
        {
          prompt: "Name the three defining features of a presidential system.",
          answer: "A separately elected executive (not chosen by the legislature), a fixed term neither branch can cut short for political reasons, and a president who sits outside the legislature and is both head of state and head of government. Removal is only by a high-bar process like impeachment.",
        },
        {
          prompt: "How does the US Constitution build separation of powers, and what can each branch NOT do?",
          answer: "Article I vests legislative power in Congress, Article II the executive in a President, Article III the judicial power in the courts. Congress cannot fire the President over policy (only impeach for high crimes), and the President cannot dissolve Congress. Each is stuck with the other for the fixed term.",
        },
        {
          prompt: "State the Linz-versus-Cheibub disagreement about presidentialism.",
          answer: "Linz (1990) argued presidential systems break down more often, because dual mandates can deadlock with no tie-breaker and fixed terms are rigid. Cheibub (2007) argued the higher breakdown rate is better explained by many presidential democracies emerging from military rule, not the form itself. The course names the dispute rather than resolving it.",
        },
      ],
    },
    {
      slug: "constitute-quiz-executive",
      title: "8 · Quiz: executive-legislative systems",
      section: "Section 2 · Who holds executive power",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The defining feature of a parliamentary system is:",
            options: [
              "A fixed term for the chief",
              "Fusion of executive and assembly",
              "A wholly separate president",
              "No legislature of any kind",
            ],
            correctIndex: 1,
            explanation: "The executive is drawn from the legislature and holds office only on its confidence. You vote for a legislature, and whoever commands its majority becomes prime minister.",
            sourceLessonSlug: "constitute-parliamentary",
          },
          {
            prompt: "In a parliamentary system, a government falls when it:",
            options: [
              "Reaches its fixed end date",
              "Is impeached for a real crime",
              "Loses the legislature's confidence",
              "Is dissolved by a foreign power",
            ],
            correctIndex: 2,
            explanation: "A no-confidence vote (or a lost confidence matter) forces the government to resign or call an election. It can be removed politically, at any time, with no crime.",
            sourceLessonSlug: "constitute-parliamentary",
          },
          {
            prompt: "A ceremonial president in Germany or India does NOT make it presidential because:",
            options: [
              "The label follows the machinery",
              "Germany has no president at all",
              "India bans the very word",
              "Presidents are always monarchs",
            ],
            correctIndex: 0,
            explanation: "That president is a figurehead head of state while the prime minister runs the government on the legislature's confidence. The system is parliamentary; job titles do not override the machinery.",
            sourceLessonSlug: "constitute-parliamentary",
          },
          {
            prompt: "Parliamentary systems usually split which two roles?",
            options: [
              "The state governor and the mayor",
              "The trial judge and the jury foreman",
              "A senator and a representative",
              "Head of state and head of government",
            ],
            correctIndex: 3,
            explanation: "A head of government (prime minister) runs the country and answers to the legislature; a head of state (monarch or ceremonial president) is symbolic and mostly above politics.",
            sourceLessonSlug: "constitute-parliamentary",
          },
          {
            prompt: "A presidential system's three defining features are separate election, an outside president, and:",
            options: [
              "A confidence vote monthly",
              "A fixed, set-in-advance term",
              "A purely symbolic office",
              "A premier chosen by courts",
            ],
            correctIndex: 1,
            explanation: "The president is elected separately, sits outside the legislature, and holds a fixed term neither branch can cut short for political reasons. Removal is only by a high-bar process.",
            sourceLessonSlug: "constitute-presidential",
          },
          {
            prompt: "In the US model, Congress cannot remove the President merely for:",
            options: [
              "Treason proven at a trial",
              "Bribery taken in office",
              "Pursuing policies it dislikes",
              "High crimes and misdemeanors",
            ],
            correctIndex: 2,
            explanation: "Removal is reserved for impeachment and conviction for treason, bribery, or other high crimes and misdemeanors, not a political vote over policy or a lost majority.",
            sourceLessonSlug: "constitute-presidential",
          },
          {
            prompt: "In the US Constitution, executive power is vested by which article?",
            options: [
              "Article I, in the Congress",
              "Article II, in a President",
              "Article III, in the courts",
              "Article V, in the states",
            ],
            correctIndex: 1,
            explanation: "Article I vests legislative power in Congress, Article II the executive in a President, and Article III the judicial power in the courts. Separation of powers, three articles.",
            sourceLessonSlug: "constitute-presidential",
          },
          {
            prompt: "Linz's 'perils of presidentialism' argument is that presidential systems:",
            options: [
              "Never fail under any strain",
              "Are cheaper to run than others",
              "Always produce a coalition",
              "Break down more than parliamentary",
            ],
            correctIndex: 3,
            explanation: "Linz (1990) argued dual mandates can deadlock with no tie-breaker and fixed terms are rigid, making presidential systems more breakdown-prone. Cheibub contested the causal claim.",
            sourceLessonSlug: "constitute-presidential",
          },
          {
            prompt: "Cheibub (2007) answered Linz by arguing the breakdown rate reflects:",
            options: [
              "Origins in military dictatorship",
              "The design of the office itself",
              "The size of the population",
              "The wording of the preamble",
            ],
            correctIndex: 0,
            explanation: "Cheibub argued many presidential democracies emerged from military rule, a fragile starting point, which better explains the breakdowns than the presidential form itself. The dispute is live.",
            sourceLessonSlug: "constitute-presidential",
          },
          {
            prompt: "A semi-presidential system combines a separately elected president with:",
            options: [
              "A premier answering to the assembly",
              "A monarch chosen by lottery",
              "No legislature at all",
              "A second elected president",
            ],
            correctIndex: 0,
            explanation: "It runs both types at once: a fixed-term elected president plus a prime minister and cabinet who sit in the legislature and can be removed by a no-confidence vote (Duverger, 1980).",
            sourceLessonSlug: "constitute-semi-presidential",
          },
          {
            prompt: "The term 'semi-presidential' was coined by:",
            options: [
              "Juan Linz, in 1990",
              "Arend Lijphart, in 1999",
              "Maurice Duverger, in 1980",
              "James Madison, in 1788",
            ],
            correctIndex: 2,
            explanation: "Duverger (1980) defined it as a popularly elected fixed-term president plus a prime minister and cabinet responsible to parliament. France's 1958 Fifth Republic is the standard example.",
            sourceLessonSlug: "constitute-semi-presidential",
          },
          {
            prompt: "'Cohabitation' in France is when the president and the legislative majority are:",
            options: [
              "From the same party",
              "From opposing parties",
              "Elected the very same day",
              "Both purely ceremonial",
            ],
            correctIndex: 1,
            explanation: "When they are from opposing parties, the system tilts parliamentary: the premier backed by the hostile majority controls domestic policy while the president's power narrows.",
            sourceLessonSlug: "constitute-semi-presidential",
          },
          {
            prompt: "Shugart and Carey split semi-presidentialism into premier-presidential and:",
            options: [
              "Purely presidential",
              "Fully parliamentary",
              "President-parliamentary",
              "Ceremonial-monarchical",
            ],
            correctIndex: 2,
            explanation: "In president-parliamentary systems the premier answers to BOTH the president and the assembly, concentrating far more power in the president than the premier-presidential version does.",
            sourceLessonSlug: "constitute-semi-presidential",
          },
          {
            prompt: "On whether 'semi-presidential' is one coherent type, the course teaches you to:",
            options: [
              "Declare it a total myth",
              "Ignore all the scholars",
              "Assume France is presidential",
              "State the rule, name the dispute",
            ],
            correctIndex: 3,
            explanation: "France is semi-presidential under Duverger's and Elgie's rule-based definitions; the more useful answer names the sub-type and notes cohabitation. State the definition, name the disagreement, keep them apart.",
            sourceLessonSlug: "constitute-semi-presidential",
          },
          {
            prompt: "The parliamentary trade-off is flexibility and accountability against the risk of:",
            options: [
              "A president who never leaves",
              "Frequent falls where majorities shift",
              "No elections being held at all",
              "Courts writing every statute",
            ],
            correctIndex: 1,
            explanation: "Quick replacement is the virtue; where majorities are unstable, governments can fall often and rule briefly, and a strong-majority premier faces fewer separate-branch checks.",
            sourceLessonSlug: "constitute-parliamentary",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Written or unwritten, federal or unitary
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "constitute-written-uncodified",
      title: "9 · Codified and uncodified constitutions",
      section: "Section 3 · Written or unwritten, federal or unitary",
      body: `Most constitutions are one document you can hold: a single written text called "The Constitution of ...", adopted on a date, amended by numbered changes. A few of the world's oldest democracies have no such document at all, and reading them is a different skill. This is the **form** axis, first sub-question: **codified or uncodified.**

## Codified: the single-document model

A **codified** constitution gathers the fundamental rules into one written instrument that is higher law and follows a special amendment process. The United States, Germany, Japan, South Africa, France, and the great majority of countries are codified. **When you want to know the rule, you go to the document, find the article, and read it**, which is exactly the move course 1 taught for finding the source of a power.

## Uncodified: no single text, in three real countries

An **uncodified** constitution has no single governing document. The constitutional rules are real and binding, but they are **scattered across ordinary statutes, court decisions, and unwritten conventions**, and no one text sits above the rest as "the constitution." Three democracies are the standard examples:

| Country | Where the constitution lives |
|---|---|
| **United Kingdom** | Landmark statutes, common-law court decisions, and political conventions, with no single document and Parliament legally supreme |
| **New Zealand** | The Constitution Act 1986 plus other statutes, conventions, and the Cabinet Manual, none of it entrenched above ordinary law |
| **Israel** | A set of "Basic Laws" enacted over decades, meant to add up to a constitution that was never adopted as one document |

**Each is uncodified for its own historical reason.** The United Kingdom never had a single founding rupture that produced one text; its constitution grew by accretion over centuries. **New Zealand has a Constitution Act (1986), but that Act is not entrenched higher law**; it can be changed like an ordinary statute, so New Zealand has a written core without a rigid capital-C constitution. Israel's first Knesset could not agree on a full constitution in 1948 to 1950 and adopted the **Harari Resolution (1950)**, deciding to build the constitution piece by piece through Basic Laws over time (Knesset, Basic Laws).

## Teach the word: "unwritten" is the wrong term, "uncodified" is right

Here is a small but real correction the course insists on. **People often call the UK constitution "unwritten." That is misleading.** Enormous parts of it are written down, in statutes like the Bill of Rights 1689, the Acts of Union, and the devolution Acts you met in the middle-layer course. **What it lacks is not writing; it is CODIFICATION, the gathering of the rules into one supreme document.** So the accurate contrast is codified versus uncodified, not written versus unwritten. Getting the word right is getting the concept right: the issue is whether there is one entrenched text, not whether anything is on paper.

## Why the difference is not just filing

An uncodified constitution changes the answer to course 1's fourth question, "who can overturn it?" In a codified, entrenched system, an ordinary statute that violates the constitution can be struck down. **Where the constitution is uncodified and Parliament is legally supreme, as in the United Kingdom, there may be no higher text to strike a statute against**, so the ultimate check is political and conventional rather than judicial. **The form of the constitution decides what kind of protection its limits actually have**, which is why this axis leads straight into the next lesson on rigidity. This is comparative description, not legal advice.

## Sources
- Constitution Act 1986 (New Zealand). https://www.legislation.govt.nz/act/public/1986/0114/latest/DLM94204.html
- Knesset. (n.d.). The existing Basic Laws: Summary. https://www.knesset.gov.il/description/eng/eng_mimshal_yesod.htm
- Dicey, A. V. (1885). Introduction to the study of the law of the constitution. Macmillan.`,
      recallContent: [
        {
          prompt: "What makes a system 'semi-presidential', and what is cohabitation?",
          answer: "A separately elected fixed-term president AND a prime minister and cabinet who answer to the legislature, both holding real executive power (Duverger, 1980). Cohabitation is when the president and the legislative majority are from opposing parties, which tilts the system parliamentary.",
        },
        {
          prompt: "How do Shugart and Carey split semi-presidentialism, and why does it matter?",
          answer: "Into premier-presidential (the premier answers only to the assembly) and president-parliamentary (the premier answers to both the president and the assembly). It matters because president-parliamentary systems, where the president can dismiss a premier who still holds the assembly's confidence, concentrate far more power in the president.",
        },
        {
          prompt: "Is a country with a ceremonial president presidential? Give the rule and an example.",
          answer: "No; the label follows the machinery, not job titles. Germany, Italy, and India each have a president yet are parliamentary, because the president is a figurehead head of state while a prime minister runs the government on the legislature's confidence.",
        },
      ],
    },
    {
      slug: "constitute-rigid-flexible",
      title: "10 · Rigid and flexible: how a constitution is changed",
      section: "Section 3 · Written or unwritten, federal or unitary",
      body: `The last lesson asked whether a constitution is gathered into one document. This lesson asks the other form question: **how hard is it to change?** This is the measure of entrenchment (job four from Lesson 2) turned into a dial, and it decides how much the constitution can really resist an ordinary majority.

## The spectrum: rigid to flexible

- A **rigid** constitution is much harder to amend than to pass an ordinary law. It demands some extra hurdle: a supermajority, approval by regional units, a referendum, a delay, or several of these at once.
- A **flexible** constitution can be changed by roughly the same process as any other law, so an ordinary legislative majority can alter it.

**Rigidity is the practical strength of entrenchment.** A constitution that promises a right but can be amended away by tonight's majority protects that right weakly; one that demands a nationwide supermajority to touch the same right protects it strongly. **The dial runs from "just another statute" (fully flexible) to "almost impossible to change" (deeply rigid).**

## The United States is near the rigid end

Article V makes the US Constitution genuinely hard to change. An amendment must be **proposed by two-thirds of both houses of Congress (or a convention called by two-thirds of the states) and then ratified by three-quarters of the states** (U.S. Const. art. V). Both stages need large supermajorities, and the second runs through the states, not Congress. **The result is visible in the count: in more than two centuries the Constitution has been amended only 27 times**, and the first 10 of those (the Bill of Rights) arrived together in 1791. A rule that demands three-quarters of the states is a rule most proposals never clear.

## The flexible end, and the uncodified link

At the other end sit constitutions an ordinary majority can change. **The United Kingdom is the extreme case**: because it is uncodified and Parliament is legally sovereign, there is no special amendment process at all, and a constitutional rule can in principle be changed by the same simple majority that passes any statute (Dicey, 1885). **This is why the two form sub-questions are linked**: an uncodified constitution is usually flexible (no single entrenched text to make rigid), while a codified one CAN be rigid but does not have to be. New Zealand, from the last lesson, shows the in-between: written in part, but not entrenched, so still flexible.

## The Goldilocks problem: too rigid and too flexible both fail

Amendment difficulty is a genuine design trade-off, and neither extreme is safe.

| If a constitution is | The danger |
|---|---|
| **Too flexible** | Its limits are hollow; a passing majority can erase a right or a check at will |
| **Too rigid** | It cannot adapt, so pressure that should reform it instead builds until it breaks or is ignored |

**A constitution too easy to change cannot bind; one too hard to change cannot bend.** Scholars who study how long constitutions survive find that endurance depends partly on getting this balance right, along with how inclusively the document was made and how well it fits its country (Elkins, Ginsburg, & Melton, 2009). **So when you read the amendment article, you are reading the constitution's estimate of how much it should resist its own people**, which is one of the most revealing clauses in any founding document. This is structural description, not legal advice.

## Sources
- U.S. Const. art. V. https://constitution.congress.gov/constitution/article-5/
- Dicey, A. V. (1885). Introduction to the study of the law of the constitution. Macmillan.
- Elkins, Z., Ginsburg, T., & Melton, J. (2009). The endurance of national constitutions. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "What is the difference between a codified and an uncodified constitution?",
          answer: "A codified constitution gathers the fundamental rules into one written, higher-law document with a special amendment process. An uncodified one has no single governing text; the rules are scattered across statutes, court decisions, and conventions, as in the UK, New Zealand, and Israel.",
        },
        {
          prompt: "Why is 'unwritten' the wrong word for the UK constitution, and what is the right word?",
          answer: "Much of the UK constitution IS written down (the Bill of Rights 1689, the Acts of Union, the devolution Acts). What it lacks is codification into one supreme document, so the accurate term is 'uncodified', not 'unwritten'.",
        },
        {
          prompt: "How does an uncodified, Parliament-supreme system change the answer to 'who can overturn it?'",
          answer: "In a codified, entrenched system a statute that violates the constitution can be struck down. Where the constitution is uncodified and Parliament is legally supreme (the UK), there may be no higher text to strike a statute against, so the ultimate check is political and conventional rather than judicial.",
        },
      ],
    },
    {
      slug: "constitute-federal-unitary",
      title: "11 · Federal and unitary: dividing power across territory",
      section: "Section 3 · Written or unwritten, federal or unitary",
      body: `The last two lessons read a constitution's form. This one reads its territorial axis: **does the constitution divide power across the map, or keep it at the centre?** Course 1 taught the vertical stack inside one country; this lesson asks the constitutional question one level up, and a later course in this path takes the middle layer apart in full. Here you learn to spot the model from the document.

## The two models

| Model | Where sovereignty sits | The regional layer's power |
|---|---|---|
| **Federal** | Divided by the constitution between centre and regions | Guaranteed by the constitution; the region is a co-sovereign the centre cannot abolish |
| **Unitary** | At the centre | Whatever the centre grants; the region exists on the centre's terms |

**In a federal system the constitution itself splits authority**, so states, provinces, or Laender hold powers of their own that the national government cannot simply take away, and changing the split requires amending the constitution. The United States, Germany, Canada, India, Brazil, and Australia are federal. **In a unitary system sovereignty stays with the central government**, which may create regions and hand them tasks but can also reorganise or abolish them by ordinary law. France, Japan, and New Zealand are unitary.

## The test: what happens to the region in a fight with the centre?

The clean way to tell them apart is course 1's fourth question aimed at the region's very existence. **Ask: can the centre, acting alone, abolish the region or strip its powers?**
- If **no**, because the region's powers are entrenched in the constitution and only a constitutional amendment could remove them, the system is **federal.**
- If **yes**, because the region holds its powers by ordinary grant the centre can revoke, the system is **unitary.**

This is the same move course 1 made about US cities ("creatures of the state"), lifted to the national level. **In a federation the states are NOT creatures of the nation; in a unitary state the regions ARE creatures of the centre.** The territorial axis is that contrast, written into the constitution.

## A caution: the label can hide the practice

Federal and unitary are the poles, and real countries blur toward the middle in ways worth flagging rather than smoothing over.
- A unitary state can **devolve** sweeping powers to regional parliaments (the United Kingdom gave Scotland, Wales, and Northern Ireland real legislatures) and still be unitary, because those powers were granted by ordinary statute the centre could in principle reclaim. **Devolution is not federalism**: the test is whether the grant is entrenched or revocable.
- Some federal constitutions centralise heavily in practice, and some countries (Spain is the standard hard case) genuinely resist the label, which is exactly the kind of contested classification this path teaches you to hold rather than force. **Report what the document entrenches; flag what is disputed.**

## Why this axis sits beside the others

A constitution's territorial choice interacts with everything else in the course. **A rigid, codified, federal constitution (Germany, the United States) locks the centre-region split into hard higher law**; a flexible, uncodified, unitary arrangement (the United Kingdom) leaves even the existence of a regional parliament ultimately in the centre's hands. **The three axes are one portrait**: how executive power is held, how territory is divided, and how firmly the whole thing is fixed. Section 4 now turns from reading constitutions to watching them get made. This is comparative description, not legal advice.

## Sources
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- Basic Law for the Federal Republic of Germany (Grundgesetz), arts. 20, 30, 70 (1949). https://www.gesetze-im-internet.de/englisch_gg/
- Watts, R. L. (2008). Comparing federal systems (3rd ed.). McGill-Queen's University Press.`,
      recallContent: [
        {
          prompt: "What does it mean for a constitution to be rigid versus flexible?",
          answer: "A rigid constitution is much harder to amend than to pass an ordinary law (it demands a supermajority, regional approval, a referendum, or a delay). A flexible one can be changed by roughly the same process as any other law, so an ordinary majority can alter it.",
        },
        {
          prompt: "How does US Article V make the Constitution rigid, and what is the visible result?",
          answer: "An amendment must be proposed by two-thirds of both houses of Congress (or a convention) and ratified by three-quarters of the states, both large supermajorities. The result is visible in the count: only 27 amendments in more than two centuries, the first 10 arriving together in 1791.",
        },
        {
          prompt: "Why do 'too flexible' and 'too rigid' both fail?",
          answer: "A constitution too easy to change cannot bind (a passing majority can erase a right at will); one too hard to change cannot bend (pressure that should reform it builds until it breaks or is ignored). Endurance depends partly on getting the balance right (Elkins, Ginsburg, & Melton, 2009).",
        },
      ],
    },
    {
      slug: "constitute-quiz-form",
      title: "12 · Quiz: form and territory",
      section: "Section 3 · Written or unwritten, federal or unitary",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A codified constitution gathers the fundamental rules into:",
            options: [
              "Many unrelated ordinary laws",
              "One written higher-law document",
              "A set of court rulings alone",
              "Nothing written down at all",
            ],
            correctIndex: 1,
            explanation: "A codified constitution is one written instrument that is higher law and follows a special amendment process. Most countries, including the US, Germany, and Japan, are codified.",
            sourceLessonSlug: "constitute-written-uncodified",
          },
          {
            prompt: "Which three democracies are the standard examples of UNcodified constitutions?",
            options: [
              "France, Japan, and Brazil",
              "The US, Canada, and India",
              "Germany, Italy, and Spain",
              "The UK, New Zealand, and Israel",
            ],
            correctIndex: 3,
            explanation: "Each has no single supreme document: the UK by centuries of accretion, New Zealand with a non-entrenched Constitution Act, and Israel with Basic Laws built up over time.",
            sourceLessonSlug: "constitute-written-uncodified",
          },
          {
            prompt: "The course says the UK constitution is better called 'uncodified' than 'unwritten' because:",
            options: [
              "Much of it IS written down",
              "None of it is written down",
              "It was written just recently",
              "Only judges may read it",
            ],
            correctIndex: 0,
            explanation: "The Bill of Rights 1689, the Acts of Union, and the devolution Acts are all written. What it lacks is codification into one supreme document, not writing itself.",
            sourceLessonSlug: "constitute-written-uncodified",
          },
          {
            prompt: "Israel's 1950 Harari Resolution decided to build its constitution:",
            options: [
              "By one text in a single year",
              "Piece by piece via Basic Laws",
              "By copying the US document",
              "Only through the courts alone",
            ],
            correctIndex: 1,
            explanation: "The first Knesset could not agree on a full constitution, so it resolved to construct one over time through Basic Laws rather than adopt a single codified text.",
            sourceLessonSlug: "constitute-written-uncodified",
          },
          {
            prompt: "A rigid constitution is one that is:",
            options: [
              "Changed like any statute",
              "Never able to be amended",
              "Much harder to amend than a law",
              "Written in a foreign language",
            ],
            correctIndex: 2,
            explanation: "A rigid constitution demands an extra hurdle to amend (a supermajority, regional approval, a referendum, or a delay), so it can resist an ordinary majority. Flexible means changeable like any law.",
            sourceLessonSlug: "constitute-rigid-flexible",
          },
          {
            prompt: "US Article V requires an amendment to be ratified by:",
            options: [
              "A simple majority of voters",
              "Two-thirds of the Senate only",
              "The President and the courts",
              "Three-quarters of the states",
            ],
            correctIndex: 3,
            explanation: "It must be proposed by two-thirds of both houses (or a convention) and ratified by three-quarters of the states. That double supermajority is why the count sits at only 27 amendments.",
            sourceLessonSlug: "constitute-rigid-flexible",
          },
          {
            prompt: "The US Constitution has been amended, in more than two centuries, only:",
            options: [
              "27 times in total",
              "Over 200 times",
              "Exactly 10 times",
              "Not once since 1791",
            ],
            correctIndex: 0,
            explanation: "27 amendments, the first 10 (the Bill of Rights) ratified together in 1791. A rule demanding three-quarters of the states is one most proposals never clear.",
            sourceLessonSlug: "constitute-rigid-flexible",
          },
          {
            prompt: "Why are the two 'form' sub-questions linked?",
            options: [
              "Uncodified is usually flexible",
              "Codified means always rigid",
              "Flexible means always federal",
              "They are exactly the same test",
            ],
            correctIndex: 0,
            explanation: "An uncodified constitution is usually flexible, having no single entrenched text to make rigid. A codified one CAN be rigid but need not be, as New Zealand's non-entrenched written core shows.",
            sourceLessonSlug: "constitute-rigid-flexible",
          },
          {
            prompt: "In a FEDERAL system, the regional layer holds power that is:",
            options: [
              "Granted by ordinary central law",
              "Guaranteed by the constitution",
              "Borrowed from a foreign state",
              "Held only during emergencies",
            ],
            correctIndex: 1,
            explanation: "The constitution itself splits authority, so the region is a co-sovereign whose powers the centre cannot simply take; changing the split needs a constitutional amendment.",
            sourceLessonSlug: "constitute-federal-unitary",
          },
          {
            prompt: "The test that tells federal from unitary asks whether the centre, alone, can:",
            options: [
              "Hold a national election",
              "Collect any taxes at all",
              "Abolish the region or its powers",
              "Sign a treaty with a neighbour",
            ],
            correctIndex: 2,
            explanation: "If no (powers are entrenched, removable only by amendment), it is federal. If yes (powers are an ordinary revocable grant), it is unitary. It is course 1's 'creatures of the state', one level up.",
            sourceLessonSlug: "constitute-federal-unitary",
          },
          {
            prompt: "Devolution (as in the UK) is NOT federalism because the regional powers are:",
            options: [
              "Entrenched in a constitution",
              "Older than the central state",
              "Granted by revocable statute",
              "Identical in every region",
            ],
            correctIndex: 2,
            explanation: "The UK gave Scotland, Wales, and NI real legislatures by ordinary statute the centre could in principle reclaim. The test is whether the grant is entrenched or revocable, not how much power it holds.",
            sourceLessonSlug: "constitute-federal-unitary",
          },
          {
            prompt: "Which set of countries is FEDERAL?",
            options: [
              "France, Japan, New Zealand",
              "The US, Germany, Canada",
              "Israel, the UK, Sweden",
              "Italy, Spain, Portugal",
            ],
            correctIndex: 1,
            explanation: "The US, Germany, Canada, India, Brazil, and Australia entrench a centre-region split. France, Japan, and New Zealand keep sovereignty at the centre and are unitary.",
            sourceLessonSlug: "constitute-federal-unitary",
          },
          {
            prompt: "New Zealand shows the in-between on the form axis because it is:",
            options: [
              "Written in part, but not entrenched",
              "Fully codified and deeply rigid",
              "Entirely unwritten and secret",
              "A federal state with strong regions",
            ],
            correctIndex: 0,
            explanation: "Its Constitution Act 1986 is a written core, but it is not entrenched above ordinary law, so it can be changed like any statute. Written, yet still flexible and uncodified overall.",
            sourceLessonSlug: "constitute-written-uncodified",
          },
          {
            prompt: "On a genuinely contested territorial case (Spain), the course says to:",
            options: [
              "Force it into 'federal' anyway",
              "Report entrenchment, flag disputes",
              "Call every country federal",
              "Ignore the constitution's text",
            ],
            correctIndex: 1,
            explanation: "Some countries resist the federal-or-unitary label. Report what the document actually entrenches and flag what scholars dispute, rather than forcing a clean answer.",
            sourceLessonSlug: "constitute-federal-unitary",
          },
          {
            prompt: "The extreme FLEXIBLE case, changeable by an ordinary majority, is:",
            options: [
              "The United States",
              "Germany's Basic Law",
              "Japan's 1947 charter",
              "The United Kingdom",
            ],
            correctIndex: 3,
            explanation: "Because the UK is uncodified and Parliament is legally sovereign, there is no special amendment process; a constitutional rule can in principle change by the same simple majority that passes any statute.",
            sourceLessonSlug: "constitute-rigid-flexible",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · How constitutions are made
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "constitute-routes",
      title: "13 · Founding moments: the four routes to a constitution",
      section: "Section 4 · How constitutions are made",
      body: `The first half of this course read finished constitutions. The second half asks the harder question: **where does a constitution come from in the first place?** A constitution is the document that grants power to itself, so its own origin is a puzzle. It cannot be authorised by a higher law, because it IS the higher law. **Something has to bring it into being from outside the ordinary legal order**, and this section is about the four main ways that happens.

## The bootstrap problem

Here is the puzzle in one line. **A statute is valid because the constitution authorised it. What authorises the constitution?** There is no document above it to point to. The answer is that a constitution rests not on a higher LAW but on a founding act, an exercise of what scholars call **constituent power**, the raw authority of a people (or whoever is actually in charge at the moment) to establish a new legal order. **Who exercises that constituent power, and how, is the whole story of how a constitution is made**, and it is why the maker matters as much as the text.

## The four routes

Constitutions are made in recognisable ways. This course teaches four, each illustrated by one real case you will study next.

| Route | Who exercises constituent power | The case you will study |
|---|---|---|
| **Convention / constituent assembly** | A body of delegates gathered to draft, with ratification following | United States, 1787 |
| **Negotiated transition** | Old rulers and rising opponents, bargaining a settlement together | South Africa, 1993 to 1996 |
| **Imposition after defeat** | An occupying power, writing the text of the defeated nation | Japan, 1947 |
| **Reconstruction under occupation** | The defeated nation's own delegates, drafting inside limits set by occupiers | Germany, 1949 |

**Read the last two rows against each other, because they are the subtle pair.** Both Japan and Germany were defeated and occupied, yet they sit on two different routes: in Japan the occupier largely WROTE the text, while in Germany Germans drafted their own document within a framework the Allies set. **How much the defeated nation authored its own constitution is a real and contested difference**, and Lesson 16 teaches exactly that disagreement.

## Two things to watch for in every case

As you study the four cases, hold two questions from the reading half of the course.

**First, who really held the constituent power?** "The people" is the usual claim, but look closer: at Philadelphia it was delegates the states sent; in South Africa it was negotiating parties plus an elected assembly plus a court; in Japan it was an occupying general's staff. **The gap between "we the people" as a phrase and who actually drafted and adopted the text is one of the most honest things you can notice about any constitution.**

**Second, what system did they build?** Each of these founding moments produced a constitution you can now classify on the three axes: the US built presidential and federal; Japan and Germany built parliamentary; South Africa built a parliamentary system with a strong bill of rights and a powerful constitutional court. **The capstone will ask you to do both at once: trace how a constitution was made AND classify the system it produced.** This is comparative description, not legal advice.

## Sources
- Elster, J. (1995). Forces and mechanisms in the constitution-making process. Duke Law Journal, 45(2), 364-396.
- Elkins, Z., Ginsburg, T., & Melton, J. (2009). The endurance of national constitutions. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "State the federal-versus-unitary test using course 1's fourth question.",
          answer: "Ask whether the centre, acting alone, can abolish the region or strip its powers. If no (powers entrenched, removable only by amendment), it is federal. If yes (powers a revocable ordinary grant), it is unitary. It is 'creatures of the state' lifted to the national level.",
        },
        {
          prompt: "Why is devolution not the same as federalism?",
          answer: "Devolved powers (Scotland, Wales, Northern Ireland) are granted by ordinary statute the centre could in principle reclaim, so the region is still the centre's creature. Federalism entrenches the region's powers in the constitution. The test is whether the grant is entrenched or revocable.",
        },
        {
          prompt: "How do the three axes combine into 'one portrait'?",
          answer: "They read how executive power is held (horizontal), how territory is divided (federal or unitary), and how firmly the whole thing is fixed (codified/uncodified, rigid/flexible). A rigid codified federal constitution locks in a centre-region split; a flexible uncodified unitary one leaves even a regional parliament in the centre's hands.",
        },
      ],
    },
    {
      slug: "constitute-united-states-1787",
      title: "14 · The convention route: the United States, 1787",
      section: "Section 4 · How constitutions are made",
      body: `The first case is the oldest codified national constitution still in force, and it is the model of the **convention route**: a gathering of delegates drafts a text, and a separate ratification process turns the draft into higher law. **The two-step shape, draft then ratify, is the lesson.**

## The setting: a convention that exceeded its instructions

By the mid-1780s the United States was governed under the **Articles of Confederation**, a weak league of states with no real central executive or power to tax. In May 1787, delegates gathered in Philadelphia. **Their official charge was narrow: to REVISE the Articles.** Instead, behind closed doors over the summer, they scrapped the Articles and drafted an entirely new frame of government. The Convention finished and the delegates signed the text on **17 September 1787** (U.S. Const.; The Federalist, 1788).

**This is the first place to teach a contested point rather than smooth it.** Because the Convention was authorised only to amend the Articles and instead replaced them, and because the Articles required unanimous consent of all thirteen states to change while the new Constitution declared it would take effect among nine, **some at the time (and some scholars since) argue the Convention acted beyond its lawful authority, a "runaway convention."** The counter-argument is that ratification by specially elected state conventions, going straight to the people rather than the state legislatures, supplied a fresh and higher source of authority, which is the constituent-power idea from Lesson 13 in action. **State the fact plainly: the Convention exceeded its instructions, and whether that was a lawful revolution or an unlawful coup dressed as drafting is a genuine and old debate.**

## Ratification: the second step that made it law

A drafted text is not yet a constitution. The Framers wrote the rule for turning it into one into the document itself. **Article VII provided that "the Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same"** (U.S. Const. art. VII). Ratification ran through specially elected state conventions, not the existing legislatures, and it was a real fight:

| Beat | What happened |
|---|---|
| **The debate** | Federalists (for) and Anti-Federalists (against) argued it out in print and in the state conventions |
| **The Federalist** | Hamilton, Madison, and Jay published essays defending the plan (The Federalist, 1787 to 1788) |
| **The ninth state** | New Hampshire ratified on 21 June 1788, meeting the Article VII threshold |
| **The Bill of Rights** | To answer Anti-Federalist fears, the first ten amendments were ratified in 1791 |

**New Hampshire, the ninth state, is the moment the Constitution became law**, though the large states of Virginia and New York ratified soon after and mattered enormously to whether it would actually work.

## What the convention route teaches

Three transferable lessons. **First, drafting and ratifying are separate acts**, and a constitution needs both: a text, and a legitimate process that adopts it. **Second, the ratification rule lives inside the document**, so the Constitution partly authorised its own coming-into-force (Article VII), which is the bootstrap problem being solved in real time. **Third, the Bill of Rights shows a constitution can be completed in stages**: the original 1787 text distributed power, and the 1791 amendments added the "limit" job (Lesson 2) that ratification had demanded. **A convention produced the machine; ratification switched it on; amendment finished it.** This is historical and structural description, not legal advice.

## Sources
- U.S. Const. art. VII; art. V. https://constitution.congress.gov/
- The Federalist Papers (1787 to 1788). https://guides.loc.gov/federalist-papers
- U.S. National Archives. (n.d.). The Constitution: How did it happen? https://www.archives.gov/founding-docs`,
      recallContent: [
        {
          prompt: "What is the 'bootstrap problem' of constitution-making, and how is it answered?",
          answer: "A statute is valid because the constitution authorised it, but nothing higher authorises the constitution. It rests not on a higher LAW but on a founding act, an exercise of constituent power: the raw authority of a people (or whoever is in charge) to establish a new legal order.",
        },
        {
          prompt: "Name the four routes to a constitution and one case for each.",
          answer: "Convention/constituent assembly (United States 1787), negotiated transition (South Africa 1993 to 1996), imposition after defeat (Japan 1947), and reconstruction under occupation (Germany 1949).",
        },
        {
          prompt: "Why are the Japan and Germany routes the 'subtle pair'?",
          answer: "Both nations were defeated and occupied, but in Japan the occupier largely WROTE the constitution, while in Germany Germans drafted their own text within limits the Allies set. How much the defeated nation authored its own constitution is the real and contested difference.",
        },
      ],
    },
    {
      slug: "constitute-south-africa-1996",
      title: "15 · The negotiated transition: South Africa, 1993 and 1996",
      section: "Section 4 · How constitutions are made",
      body: `The second case is the model of the **negotiated transition**: not a convention of allies drafting a fresh start, and not a text handed down by a victor, but **old rulers and rising opponents bargaining a new order together, because neither side could simply impose one.** South Africa's move out of apartheid is the clearest modern example, and it added an innovation no other country had tried.

## The problem: how do enemies write one constitution?

By the early 1990s apartheid was ending, but the transition faced a trust problem. **The governing National Party feared that a democratic majority would write a constitution to crush the old minority; the African National Congress and its allies feared that leaving the old government in charge of the process would entrench white power under a new name.** Neither side trusted the other to hold the pen. The answer was a two-stage design that let them proceed without either side having to trust the other's good faith.

## Stage one: an interim constitution and 34 principles

Multiparty negotiations produced an **interim Constitution (the Constitution of the Republic of South Africa Act 200 of 1993)**, which took effect for the first democratic elections in **April 1994** that brought Nelson Mandela's government to power. But the interim constitution did something unusual: it did not settle the final text. Instead it **fixed 34 Constitutional Principles that the eventual final constitution would HAVE to satisfy**, covering democracy, rights, the rule of law, and the basic shape of the state (Constitution of the Republic of South Africa Act 200 of 1993).

**This is the negotiated-transition innovation.** The parties could not agree on every detail of a final constitution up front, so they agreed instead on the PRINCIPLES the final document must honour, and then let a democratically elected body write the details, bound by those principles. **They locked in the guardrails before they knew who would win.**

## Stage two: an elected assembly, and a court that had to certify

The 1994 elections produced a **Constitutional Assembly**, which drafted the final constitution. Then came the step that is genuinely unique in constitutional history. **The final text could not simply take effect; the Constitutional Court had to CERTIFY that it actually complied with all 34 agreed principles.** A court, not a vote, held the last gate.

And the court used it. **In its first certification judgment, delivered on 6 September 1996, the Constitutional Court DECLINED to certify the text**, holding that several provisions failed to comply with the Constitutional Principles (Certification of the Constitution of the Republic of South Africa, 1996 [1996] ZACC 26). The Constitutional Assembly amended the text to fix the defects, and the Court **certified the amended text in December 1996.** The final **Constitution of the Republic of South Africa, 1996** then took effect on **4 February 1997** (Constitution of the Republic of South Africa, 1996).

## What the negotiated route teaches

**A negotiated transition substitutes agreed principles and an impartial umpire for the trust that adversaries do not have.** The 34 principles were the pre-agreed guardrails; the Constitutional Court was the umpire that enforced them, and its willingness to refuse certification the first time proved the umpire was real rather than a rubber stamp. **The system South Africa built is parliamentary** (the President is elected by and accountable to the National Assembly) **with a powerful constitutional court and an entrenched bill of rights**, a design shaped by the very fear of majority power that made the negotiation necessary. **Where the US convention route went draft-then-ratify, South Africa went negotiate-principles, elect-an-assembly, draft, then certify.** This is historical and structural description, not legal advice.

## Sources
- Constitution of the Republic of South Africa Act 200 of 1993 (interim Constitution).
- Certification of the Constitution of the Republic of South Africa, 1996 (CCT 23/96) [1996] ZACC 26; 1996 (4) SA 744 (CC). https://www.saflii.org/za/cases/ZACC/1996/26.html
- Constitution of the Republic of South Africa, 1996. https://www.gov.za/documents/constitution-republic-south-africa-1996`,
      recallContent: [
        {
          prompt: "What was the US Convention of 1787 officially charged to do, and what did it actually do?",
          answer: "It was charged only to REVISE the Articles of Confederation. Instead it scrapped them and drafted an entirely new frame of government, signed on 17 September 1787, which is why some argue it was a 'runaway convention' that exceeded its lawful authority.",
        },
        {
          prompt: "What did Article VII provide, and when did the Constitution become law?",
          answer: "Article VII provided that ratification by the conventions of nine states would establish the Constitution among the ratifying states. New Hampshire, the ninth state, ratified on 21 June 1788, which is the moment it became law.",
        },
        {
          prompt: "What three transferable lessons does the convention route teach?",
          answer: "Drafting and ratifying are separate acts (a constitution needs both a text and a legitimate adopting process); the ratification rule lives inside the document (Article VII, the bootstrap solved in real time); and a constitution can be completed in stages (the 1791 Bill of Rights added the 'limit' job).",
        },
      ],
    },
    {
      slug: "constitute-after-defeat",
      title: "16 · After defeat: Japan 1947 and Germany 1949",
      section: "Section 4 · How constitutions are made",
      body: `The last two cases share a starting point, total defeat in the Second World War and occupation by the victors, and split into two different routes from there. **The comparison is the lesson: how much did the defeated nation write its own constitution?** Japan and Germany answered differently, and the difference is contested enough to teach with care.

## Japan, 1947: imposition after defeat

After Japan's surrender, the country was occupied under General Douglas MacArthur as Supreme Commander for the Allied Powers (SCAP). When the Japanese government's own draft revision (the Matsumoto draft) was judged too conservative to satisfy the Allies, **SCAP's own staff drafted a model constitution in about a week in February 1946**, and pressed the Japanese government to adopt it. The draft was translated, revised, and passed through the Diet with some amendments, then promulgated on **3 November 1946** and took effect on **3 May 1947** (The Constitution of Japan, 1947; National Diet Library, Birth of the Constitution of Japan).

The text broke sharply with the old order: **sovereignty moved from the Emperor to the people, the Emperor became "the symbol of the State,"** and Article 9 renounced war, with the people forever renouncing "war as a sovereign right of the nation" (Constitution of Japan, 1947, art. 9). **This is the imposition route: the core text originated with the occupier, not the occupied.**

## The disagreement you must teach: how "imposed" was it?

Here the honest move is to hold a real dispute rather than pick a side.

| The position | The case for it |
|---|---|
| **Imposed (the "oshitsuke" thesis)** | SCAP wrote the draft, on a deadline, and pressed it on a defeated government with little real choice; the initiative and the pen were the occupier's |
| **More Japanese than it looks** | Japanese officials negotiated changes, the Diet debated and amended it (including the Ashida amendment to Article 9), and Japanese reformers had floated similar liberal ideas; and the people have kept it, unamended, for generations |

**Both readings rest on real facts, and serious scholars hold each.** The course does not declare the Japanese constitution simply "illegitimate because imposed" or simply "freely chosen," because neither is the whole truth. What it insists on is precision: the DRAFTING initiative was the occupier's, AND there was genuine Japanese input and lasting Japanese acceptance. **A constitution's origin and its legitimacy are different questions, and a document can begin under pressure and still be owned by a people over time.**

## Germany, 1949: reconstruction under occupation

Germany was defeated and occupied too, but its western zones took a different route. In July 1948 the Western Allies handed the German state minister-presidents the **"Frankfurt Documents,"** authorising them to convene a body to draft a democratic, federal constitution. **The drafting was done by Germans**: a convention of experts prepared a draft at Herrenchiemsee in August 1948, and then the **Parliamentary Council (Parlamentarischer Rat)**, made up of delegates chosen by the Land parliaments and chaired by Konrad Adenauer, wrote the text in Bonn. It was adopted on **8 May 1949**, approved by the Allied military governors, ratified by the Laender, and promulgated on **23 May 1949** (Basic Law for the Federal Republic of Germany, 1949).

**Two deliberate choices mark it as reconstruction rather than pure imposition.** The Germans called it the **"Basic Law" (Grundgesetz), not "Constitution" (Verfassung)**, on purpose, to signal that it was provisional pending the reunification of a divided Germany, and its original closing article looked forward to a future constitution adopted by the whole German people once reunited. **Germans drafted their own text, inside a framework the Allies set and subject to Allied approval.**

## The comparison, which is the whole point

Put the two side by side and the four-route taxonomy earns its fourth row.

| | Japan, 1947 | Germany, 1949 |
|---|---|---|
| **Who drafted the core text** | The occupier's staff (SCAP) | The defeated nation's own delegates |
| **The occupier's role** | Wrote and pressed the draft | Set the framework and approved the result |
| **The route** | Imposition after defeat | Reconstruction under occupation |

**Neither nation was free the way the US Convention or the South African assembly was free; both drafted under a victor's power.** But the DEGREE of that power differed, and pretending Japan and Germany sit on the same route would flatten a real distinction, just as pretending they sit on the same route as an uncoerced convention would flatten another. **Both constitutions, once made, produced durable parliamentary democracies**, which is its own comment on how far a constitution's later life can outgrow the conditions of its birth. This is historical and comparative description, not legal advice.

## Sources
- The Constitution of Japan (1947), art. 9. National Diet Library, Birth of the Constitution of Japan. https://www.ndl.go.jp/constitution/e/
- Basic Law for the Federal Republic of Germany (Grundgesetz), 1949. https://www.gesetze-im-internet.de/englisch_gg/
- Elster, J. (1995). Forces and mechanisms in the constitution-making process. Duke Law Journal, 45(2), 364-396.`,
      recallContent: [
        {
          prompt: "What problem did South Africa's negotiated transition have to solve, and how?",
          answer: "Enemies had to write one constitution without trusting each other: the old government feared a crushing majority, the ANC feared entrenched white power. The answer was a two-stage design: an interim constitution fixing 34 Constitutional Principles the final text had to satisfy, then an elected assembly to draft the details within those guardrails.",
        },
        {
          prompt: "What was unique about the role of South Africa's Constitutional Court, and what did it do in September 1996?",
          answer: "The final text could not take effect until the Court CERTIFIED it complied with all 34 agreed principles. In its first certification judgment (6 September 1996) the Court DECLINED to certify, finding several provisions non-compliant; the assembly amended the text and the Court certified the amended version in December 1996.",
        },
        {
          prompt: "How did the negotiated route differ in shape from the US convention route?",
          answer: "The US route went draft-then-ratify. South Africa went negotiate-principles, elect-an-assembly, draft, then certify, substituting pre-agreed principles and an impartial court umpire for the trust that adversaries lacked.",
        },
      ],
    },
    {
      slug: "constitute-quiz-making",
      title: "17 · Quiz: how constitutions are made",
      section: "Section 4 · How constitutions are made",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The 'bootstrap problem' of a constitution is that:",
            options: [
              "It is written far too quickly",
              "Nothing higher authorises it",
              "It cannot ever be amended",
              "It has too many articles",
            ],
            correctIndex: 1,
            explanation: "A statute is valid because the constitution authorised it, but no document sits above the constitution. It rests on a founding act, an exercise of constituent power, not on a higher law.",
            sourceLessonSlug: "constitute-routes",
          },
          {
            prompt: "The case for the CONVENTION route in this course is:",
            options: [
              "South Africa, 1996",
              "Germany's Basic Law",
              "The United States, 1787",
              "Japan under occupation",
            ],
            correctIndex: 2,
            explanation: "A body of delegates drafts a text and a separate ratification process adopts it. The US 1787 Convention plus Article VII ratification is the model of draft-then-ratify.",
            sourceLessonSlug: "constitute-routes",
          },
          {
            prompt: "Japan and Germany are called the 'subtle pair' of routes because both nations were:",
            options: [
              "Founded by a single convention",
              "Defeated and occupied, but differed",
              "Never occupied by any power",
              "Governed by identical documents",
            ],
            correctIndex: 1,
            explanation: "Both were defeated and occupied, but in Japan the occupier largely wrote the text while in Germany Germans drafted their own within Allied limits. How much each authored its own is the contested difference.",
            sourceLessonSlug: "constitute-routes",
          },
          {
            prompt: "The 1787 Philadelphia Convention was officially charged only to:",
            options: [
              "Revise the Articles of Confederation",
              "Elect the very first President",
              "Declare independence from Britain",
              "Write a bill of rights alone",
            ],
            correctIndex: 0,
            explanation: "It was authorised to revise the Articles but instead scrapped them and drafted a new frame of government, which is why some call it a 'runaway convention' that exceeded its authority.",
            sourceLessonSlug: "constitute-united-states-1787",
          },
          {
            prompt: "Under Article VII, the US Constitution took effect once ratified by:",
            options: [
              "All thirteen of the states",
              "A simple majority of voters",
              "The Confederation Congress",
              "The conventions of nine states",
            ],
            correctIndex: 3,
            explanation: "Article VII set nine states as the threshold. New Hampshire, the ninth, ratified on 21 June 1788, the moment the Constitution became law among the ratifying states.",
            sourceLessonSlug: "constitute-united-states-1787",
          },
          {
            prompt: "The US Bill of Rights, added in 1791, shows a constitution can be:",
            options: [
              "Written by a foreign power",
              "Completed in stages over time",
              "Changed with no process at all",
              "Adopted without any drafting",
            ],
            correctIndex: 1,
            explanation: "The 1787 text distributed power; the 1791 amendments added the 'limit' job that Anti-Federalists had demanded. A convention built the machine, ratification switched it on, amendment finished it.",
            sourceLessonSlug: "constitute-united-states-1787",
          },
          {
            prompt: "South Africa's interim constitution (1993) fixed 34 Constitutional Principles that:",
            options: [
              "The final constitution had to satisfy",
              "Only the courts could ever read",
              "Banned all future amendments",
              "Applied to Germany and Japan too",
            ],
            correctIndex: 0,
            explanation: "The parties could not agree every detail up front, so they locked in the principles the final text must honour, then let an elected assembly draft the details bound by those guardrails.",
            sourceLessonSlug: "constitute-south-africa-1996",
          },
          {
            prompt: "What was unique about South Africa's Constitutional Court in the process?",
            options: [
              "It appointed the whole assembly",
              "It wrote the entire final text",
              "It had to certify the final text",
              "It vetoed the 1994 elections",
            ],
            correctIndex: 2,
            explanation: "The final text could not take effect until the Court certified it complied with all 34 agreed principles, a step unique in constitutional history: a court, not a vote, held the last gate.",
            sourceLessonSlug: "constitute-south-africa-1996",
          },
          {
            prompt: "In its first certification judgment (6 September 1996) the Constitutional Court:",
            options: [
              "Certified the text at once",
              "Declined to certify the text",
              "Dissolved the whole assembly",
              "Rewrote the text on its own",
            ],
            correctIndex: 1,
            explanation: "It DECLINED to certify, finding several provisions failed the Constitutional Principles. The assembly amended the text, and the Court certified the amended version in December 1996.",
            sourceLessonSlug: "constitute-south-africa-1996",
          },
          {
            prompt: "Japan's 1947 constitution is the model of which route?",
            options: [
              "A freely called convention",
              "A negotiated transition",
              "Imposition after defeat",
              "Reconstruction at home",
            ],
            correctIndex: 2,
            explanation: "SCAP's staff drafted the model text in about a week in February 1946 and pressed it on the government. The drafting initiative and pen were the occupier's.",
            sourceLessonSlug: "constitute-after-defeat",
          },
          {
            prompt: "On how 'imposed' Japan's constitution was, the course teaches that:",
            options: [
              "It was purely freely chosen",
              "The Diet played no part at all",
              "Both readings rest on real facts",
              "No scholar has ever studied it",
            ],
            correctIndex: 2,
            explanation: "The drafting initiative was the occupier's, AND there was genuine Japanese input, Diet amendment, and lasting acceptance. Origin and legitimacy are different questions; the course holds the dispute rather than picking a side.",
            sourceLessonSlug: "constitute-after-defeat",
          },
          {
            prompt: "Germany's 1949 Basic Law differs from Japan's route mainly because it was:",
            options: [
              "Drafted by the Germans themselves",
              "Written by the Allied generals",
              "Never approved by any occupier",
              "Adopted before the war ended",
            ],
            correctIndex: 0,
            explanation: "A German Parliamentary Council drafted the text within a framework the Allies set (the Frankfurt Documents) and subject to their approval. That is reconstruction under occupation, not pure imposition.",
            sourceLessonSlug: "constitute-after-defeat",
          },
          {
            prompt: "Germany called its 1949 document the 'Basic Law', not 'Constitution', to signal that it was:",
            options: [
              "Written by foreign lawyers",
              "Provisional pending reunification",
              "Weaker than an ordinary statute",
              "Meant to expire in one year",
            ],
            correctIndex: 1,
            explanation: "The name Grundgesetz rather than Verfassung marked it as provisional pending the reunification of a divided Germany, with a future constitution envisaged for the whole reunited people.",
            sourceLessonSlug: "constitute-after-defeat",
          },
          {
            prompt: "The negotiated transition substituted, for the trust adversaries lacked:",
            options: [
              "A single ruling political party",
              "A foreign occupying army",
              "Agreed principles and an umpire",
              "A monarch chosen by lottery",
            ],
            correctIndex: 2,
            explanation: "The 34 principles were the pre-agreed guardrails and the Constitutional Court was the impartial umpire that enforced them, proven real by its willingness to refuse certification the first time.",
            sourceLessonSlug: "constitute-south-africa-1996",
          },
          {
            prompt: "A shared comment on both Japan and Germany is that their constitutions, once made:",
            options: [
              "Collapsed within a few years",
              "Were quickly imposed elsewhere",
              "Produced durable democracies",
              "Were never actually obeyed",
            ],
            correctIndex: 2,
            explanation: "Both produced durable parliamentary democracies, showing how far a constitution's later life can outgrow the coerced conditions of its birth. Origin and endurance are different questions.",
            sourceLessonSlug: "constitute-after-defeat",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · See it, then trace and classify one
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "constitute-map",
      title: "18 · Map: constitutional systems of the world",
      section: "Section 5 · See it, then trace and classify one",
      body: `**Read this before the map, because the map's limits are part of the lesson.** A constitutional system is a property of a whole country, an AREA, not a point, so this map fills each country's area by its executive family (the choropleth layer), with a capital-city marker on top that carries the detail. Read the fills first, then tap a marker. The dots are **approximate points placed to show a pattern, not addresses**, so do not use them to find a building.

## What the colours mean

The fills, and the markers on them, are grouped by the course's FIRST axis, how executive power is held, because that is the sharpest single sorter of the world's democracies:

**Blue markers: presidential.** A separately elected president holds executive power for a fixed term, separate from the legislature. The United States and Brazil.

**Amber markers: parliamentary.** The executive is drawn from the legislature and survives on its confidence. The United Kingdom, Germany, Japan, South Africa, and New Zealand. Notice how different these five are on the OTHER axes, which is the point: same executive family, very different constitutions.

**Purple marker: semi-presidential.** A separately elected president and a prime minister answerable to the legislature at once, drawn in its own colour because Section 2 taught that this category is genuinely contested. France.

## Read the other two axes in the descriptions

Colour carries only the first axis. Each marker's description carries the other two (territorial and form) plus, where relevant, the MAKING route from Section 4, so the map ties the whole course together:

- The **federal** cases (the United States, Germany, Brazil) against the **unitary** ones (France, Japan, New Zealand, and the United Kingdom at its centre).
- The **uncodified** cluster (the United Kingdom and New Zealand here, with Israel the third from Lesson 9) against the codified majority.
- The four **making** cases sit on the map too: the United States (convention, 1787), South Africa (negotiated, 1996), Japan (imposed, 1947), and Germany (reconstruction, 1949).

## What the map cannot show, and what that proves

**It cannot show that two same-coloured dots are opposite in every other way.** Amber Germany and amber New Zealand are both parliamentary, yet one is federal, codified, and rigid, and the other is unitary, uncodified, and flexible. **Colour carries one axis; the portrait needs all three**, which is exactly why the capstone asks you to write all three out for a country of your choosing, from its documents. Read the legend, then go classify one. This is comparative description, not legal advice.

## Sources
- Lijphart, A. (1999). Patterns of democracy: Government forms and performance in thirty-six countries. Yale University Press.
- Elkins, Z., Ginsburg, T., & Melton, J. (2009). The endurance of national constitutions. Cambridge University Press.`,
      mapContent: {
        markers: [
          {
            id: "constitute-map-us",
            lat: 38.8899,
            lng: -77.0091,
            title: "Presidential: United States (Washington, D.C.)",
            color: "#1d4ed8",
            description:
              "Presidential (a separately elected president, fixed term, Article II), federal (states with entrenched powers, Tenth Amendment), and codified and rigid (one 1787 document amended only 27 times under Article V). Made by the convention route: drafted at Philadelphia in 1787 and ratified by nine state conventions under Article VII, New Hampshire the ninth on 21 June 1788. Coordinates are approximate points placed to show the pattern, not an address.",
          },
          {
            id: "constitute-map-brazil",
            lat: -15.7997,
            lng: -47.8645,
            title: "Presidential: Brazil (Brasilia)",
            color: "#1d4ed8",
            description:
              "Presidential and federal, included to show that the presidential family is not only the United States: a separately elected president and a constitutionally entrenched division between the union, the states, and municipalities, under the codified 1988 Constitution. Same executive family as the US, a different country and document. Coordinates are approximate.",
          },
          {
            id: "constitute-map-uk",
            lat: 51.4995,
            lng: -0.1248,
            title: "Parliamentary: United Kingdom (London)",
            color: "#b45309",
            description:
              "Parliamentary (a prime minister who sits in and survives on the confidence of Parliament), unitary at its core but with devolution, and the leading UNCODIFIED case: no single supreme document, with the rules spread across statutes, court decisions, and conventions and Parliament legally sovereign. 'Uncodified', not 'unwritten', because much of it is written down. Coordinates are approximate.",
          },
          {
            id: "constitute-map-germany",
            lat: 52.5186,
            lng: 13.3762,
            title: "Parliamentary: Germany (Berlin)",
            color: "#b45309",
            description:
              "Parliamentary (a chancellor holding the confidence of the Bundestag; the president is a ceremonial head of state), federal (the Laender, Basic Law arts. 30 and 70), and codified and rigid. Made by reconstruction under occupation: Germans drafted the Basic Law in the Parliamentary Council within the Allies' Frankfurt Documents framework, adopted 8 May 1949, named 'Basic Law' to mark it provisional pending reunification. Coordinates are approximate.",
          },
          {
            id: "constitute-map-japan",
            lat: 35.6764,
            lng: 139.7509,
            title: "Parliamentary: Japan (Tokyo)",
            color: "#b45309",
            description:
              "Parliamentary (a prime minister answerable to the Diet; the Emperor is the symbol of the State), unitary, and codified. Made by imposition after defeat: SCAP's staff drafted the core text in about a week in February 1946, which the Diet then amended and adopted, promulgated 3 November 1946 and in force 3 May 1947. How 'imposed' it really was is the contested question of Lesson 16. Coordinates are approximate.",
          },
          {
            id: "constitute-map-south-africa",
            lat: -33.9249,
            lng: 18.4241,
            title: "Parliamentary: South Africa (Cape Town, seat of Parliament)",
            color: "#b45309",
            description:
              "Parliamentary in structure (the President is elected by and accountable to the National Assembly, a combined head of state and government, which some call a hybrid), unitary-leaning with strong provinces, codified and rigid, with a powerful Constitutional Court and entrenched bill of rights. Made by negotiated transition: an interim constitution's 34 principles, an elected Constitutional Assembly, and Court certification (first declined September 1996, granted for the amended text December 1996). Coordinates are approximate.",
          },
          {
            id: "constitute-map-new-zealand",
            lat: -41.2786,
            lng: 174.7757,
            title: "Parliamentary: New Zealand (Wellington)",
            color: "#b45309",
            description:
              "Parliamentary and unitary, and the second UNCODIFIED case beside the United Kingdom: a written core (the Constitution Act 1986) that is NOT entrenched above ordinary law, plus other statutes, conventions, and the Cabinet Manual. Written in part, yet flexible, so still uncodified overall. Israel, with its Basic Laws, is the third of the uncodified trio. Coordinates are approximate.",
          },
          {
            id: "constitute-map-france",
            lat: 48.8566,
            lng: 2.3522,
            title: "Semi-presidential: France (Paris)",
            color: "#7c3aed",
            description:
              "Drawn in its own colour because semi-presidential is a genuinely contested category (Lesson 7). Under the 1958 Constitution of the Fifth Republic a separately elected president shares executive power with a prime minister who must hold the confidence of the National Assembly; in 'cohabitation' the system tilts parliamentary. Unitary and codified. Scholars dispute whether 'semi-presidential' names one type or two. Coordinates are approximate.",
          },
        ],
        // The choropleth (plans/49): fill the whole country AREA by executive family, because a
        // constitutional system is a property of an area, not a point. These are exactly the eight
        // countries this lesson already discusses, filled with the same sourced classifications the
        // markers carry; France keeps its own colour because Section 2 taught the category is contested.
        regionLegend: [
          { category: "presidential", color: "#1d4ed8", label: "Presidential" },
          { category: "parliamentary", color: "#b45309", label: "Parliamentary" },
          { category: "semi-presidential", color: "#7c3aed", label: "Semi-presidential (a contested category)" },
        ],
        regions: [
          { featureId: "840", category: "presidential", label: "United States: presidential, federal" },
          { featureId: "076", category: "presidential", label: "Brazil: presidential, federal" },
          { featureId: "826", category: "parliamentary", label: "United Kingdom: parliamentary, uncodified" },
          { featureId: "276", category: "parliamentary", label: "Germany: parliamentary, federal" },
          { featureId: "392", category: "parliamentary", label: "Japan: parliamentary, unitary" },
          { featureId: "710", category: "parliamentary", label: "South Africa: parliamentary in structure" },
          { featureId: "554", category: "parliamentary", label: "New Zealand: parliamentary, uncodified" },
          { featureId: "250", category: "semi-presidential", label: "France: semi-presidential (contested)" },
        ],
      },
    },
    {
      slug: "constitute-capstone",
      title: "19 · Capstone: trace one constitution's making and classify its system",
      section: "Section 5 · See it, then trace and classify one",
      lessonType: "assignment",
      body: `You can now read a constitution on three axes and name the four routes by which one gets made. Use both on a single real country. **Pick one national constitution, trace HOW it was made, and classify the SYSTEM it produced, all from the primary documents.**

**One boundary before you start, restated because a capstone is where people forget it: this is a research exercise in reading authority, not legal advice.** You are building an account of how a constitution came to be and how it holds power. You are not determining anyone's legal rights, and you are not opining on any live constitutional or political dispute; where a classification or an origin is contested, your job is to report what the documents establish and to flag what is disputed, exactly as the course did for semi-presidentialism, for the US 'runaway convention' question, and for how imposed Japan's constitution was.

## The assignment

Produce a **one-page constitutional profile** of a country of your choice. It has two parts: a MAKING story (which route, from the record) and a CLASSIFICATION (the three axes, from the text). **The finding is the argument and the sources, not the prose.** Aim for a profile you could defend to someone who picked the opposite reading on any contested point.

## Part A. Trace the making

Answer, from the historical and documentary record:

| Question | What you are looking for |
|---|---|
| **Which route?** | Convention, negotiated transition, imposition after defeat, or reconstruction under occupation (or a mix, or another route entirely) |
| **Who held the constituent power?** | A convention of delegates, negotiating parties, an elected assembly, an occupier, a court, or some combination |
| **What were the steps and dates?** | Drafting, adoption, ratification or certification, coming into force, with the documents that record each |

**Name the gap between "the people" and who actually drafted and adopted the text**, the honest observation from Lesson 13. If your case does not fit one clean route, say so and say why; a mixed or novel route is a real finding, not a failure.

## Part B. Classify the system

Place the constitution on the three axes, citing the clause for each:

| Axis | What to determine, and where to look |
|---|---|
| **Horizontal** | Presidential, parliamentary, or semi-presidential: who holds executive power and how it links to the legislature |
| **Territorial** | Federal or unitary: can the centre, alone, abolish the region or strip its powers? |
| **Form** | Codified or uncodified, and rigid or flexible: is it one entrenched document, and how hard is it to amend? |

**Quote the clause that settles each axis** where you can (the article vesting executive power, the amendment article, the provision dividing the centre from the regions). If your country is a hard case on any axis (a contested semi-presidential label, a federal-or-unitary blur), do not fake a clean answer: state what the document establishes and name precisely what is disputed.

## Rules you do not get to break

1. **From the documents, not from memory.** Every claim ties to something you can cite: a constitutional article, a founding statute, a court judgment, a national archive record.
2. **No invented clause, case, date, or figure.** If you cannot source it, it does not go in the profile, or it goes in flagged "unverified."
3. **Report facts flatly; flag disputes as disputes.** A date of ratification is usually settled; whether a system is 'semi-presidential' or how 'imposed' a constitution was can be contested. Do not blur the two.
4. **Origin and legitimacy are different questions.** A constitution can begin under pressure and be owned by a people over time (Japan), or be made by an unauthorised convention and endure (the United States). Describe the origin; do not use it to score the country.
5. **This is not legal advice**, and your page should say so at the top, because someone else may read it.

## What good looks like

A one-page profile in which the making route is named and dated from the record, the system is placed on all three axes with a clause cited for each, and every contested point is labelled as contested rather than smoothed over. **If you took a constitution you thought you understood and showed, from its own text and its own founding record, both HOW it was made and exactly WHAT kind of system it is, you have done what this course set out to teach: you learned to read the document course 1 kept walking the chain up to, and to see where it came from.**

## Sources
- U.S. Const. art. V; art. VII. https://constitution.congress.gov/
- Constitution of the Republic of South Africa, 1996. https://www.gov.za/documents/constitution-republic-south-africa-1996
- Elkins, Z., Ginsburg, T., & Melton, J. (2009). The endurance of national constitutions. Cambridge University Press.`,
    },
  ],
};
