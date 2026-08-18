// Authored "Forms of Government, Honestly" — course 2 of Path A ("Who Has the Power? Governments
// From the Block to the Globe"), planned in plans/46-structures-paths-government-and-business.md.
//
// WHAT THIS COURSE IS
// -------------------
// The course that teaches classification of governments as a CONTESTED exercise, not a vocabulary
// quiz. Its one load-bearing claim: the major measurement projects (V-Dem, Polity, Freedom House,
// and the EIU Democracy Index) rank the same countries DIFFERENTLY, on PUBLISHED methodologies,
// because they define "democracy" differently and measure different things. The real skill this
// course teaches is not "name the six forms"; it is reading a classification critically: who made
// the index, what it measures, and where it disagrees with another index. It covers the classical
// forms (democracy, republic, monarchy, autocracy, oligarchy, theocracy) as vocabulary you must
// know, then shows why the vocabulary is not enough, and hands the learner the four measurement
// projects and the structure of their disagreement.
//
// RELATIONSHIP TO COURSE 1 (do not repeat it)
// -------------------------------------------
//   * Course 1, "Who Has the Power to Do This?", shipped the METHOD (four questions: who acted,
//     under what authority, where the power comes from, who can overturn it) and the vertical stack.
//     This course reuses course 1's habit of "where authorities disagree, the disagreement is the
//     lesson" and its refusal to launder an unverifiable claim, but it does NOT re-teach the four
//     questions or the US local/state material. Its subject is CLASSIFICATION, one level up.
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * Every measurement project is described from its OWN published methodology (indices, scales,
//     categories, coders), which is stable and verifiable, and cited to the project. NO country's
//     current index score or category is asserted from memory: the course repeatedly tells the
//     learner to read the current report for any live figure, and the capstone is built around that.
//   * Classical forms are cited to primary/foundational sources (Aristotle's Politics; Madison's
//     Federalist No. 10; Dahl's Polyarchy; Schumpeter; Przeworski). The disagreement between indices
//     is cited to the comparison literature (Munck & Verkuilen 2002; Hogstrom 2013; the V-Dem
//     Regimes of the World construct; Giannone 2010 on the Freedom House critique). No fabricated
//     score, date, quotation, or statistic. Living governments and contested classifications are
//     treated neutrally: the course defines concepts and points to current reports rather than
//     ranking any present-day state from memory. A defunct state (the German Democratic Republic) is
//     used where a self-description-versus-classification example is needed, because it is fully
//     historical and safe.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens only. Verbatim cited titles inside
// a `## Sources` block are the only place a dash may survive.

import type { AuthoredCourse } from "./authored-course";

export const FORMS_OF_GOVERNMENT_COURSE: AuthoredCourse = {
  title: "Forms of Government, Honestly",
  description:
    "A course about the labels we put on governments, and why sorting the world's states into 'democracy,' 'autocracy,' 'monarchy,' or 'republic' is a contested argument, not a vocabulary quiz. It is course 2 of the path whose method course, Who Has the Power to Do This?, taught you to read authority from the primary record. Here you learn the classical forms and what they actually mean (democracy, republic, monarchy, autocracy, oligarchy, theocracy), and then the harder and more useful skill: how to read a classification critically. The heart of the course is that the four major measurement projects, V-Dem at the University of Gothenburg, the Polity project, Freedom House, and the Economist Intelligence Unit's Democracy Index, rank the same countries differently, on published methodologies, because they define democracy differently and measure different things. You will learn what each project measures, who codes it, and the four reasons their rankings diverge, especially for the hard cases in the middle: hybrid regimes, competitive authoritarianism, one-party states, and constitutional monarchies that are functionally democracies. It closes with a map of who measures democracy and from where, and a capstone: classify one real country by two different indices and explain the gap between them from the published methodologies. The course never asserts a country's current score from memory; it teaches you to read the current report yourself.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Why classification is contested
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "forms-what-this-is",
      title: "1 · Classification is an argument, not a vocabulary quiz",
      section: "Section 1 · Why classification is contested",
      body: `Most people learn "forms of government" as a list to memorize: democracy, monarchy, oligarchy, theocracy, republic, autocracy. You match the word to the definition, you pass the test, and you carry away the idea that every country has one true label sitting on it like a name tag. **This course exists to replace that idea with a more honest and far more useful one: which label a government gets is a contested argument, and learning to read the argument is the real skill.**

## First, what this builds on

This is course 2 of the path "Who Has the Power? Governments From the Block to the Globe." **Course 1, "Who Has the Power to Do This?", taught you the method**: given any government action, find the body that acted, its authority, the document behind it, and who can overturn it. This course does not re-teach that. It moves one level up, from a single action to the whole system: **once you can read a government, how do you classify it, and why do careful, honest experts classify the same government differently?**

## The claim this whole course defends

Here is the sentence the course is built to prove, stated plainly so you can hold it from the start:

**The four best-known projects that rank the world's governments, V-Dem, Polity, Freedom House, and the Economist Intelligence Unit's Democracy Index, do not agree with each other. They place the same countries in different categories, on methodologies each one has published in full.** That is not because three of them are wrong and one is right. It is because they **define democracy differently and measure different things**, and once you see that, "is country X a democracy?" stops being a fact to look up and becomes a question you have to ask more precisely: "a democracy by whose definition, measured how?"

## Why this is worth a whole course

Because the label does real work in the world. Aid decisions, investment risk ratings, news framing, and political argument all lean on these classifications, and people quote a country's "democracy score" as if it fell from the sky. **A learner who knows the scores are built, by named people, on stated definitions, with published methods and known disagreements, reads the news differently from one who thinks the label is just true.** The goal is not cynicism. Two of these projects agreeing is real evidence; the point is to know what kind of evidence it is.

## What you will and will not get here

**You will get** the classical vocabulary done properly, the four measurement projects and what each actually measures, the four reasons they disagree, and the hard cases where the disagreement is sharpest.

**You will not get** a ranked list of which countries are democracies, and that is deliberate. **Classifications change, and this course refuses to assert any country's current score or category from memory.** Every time you need a live figure, the course sends you to the current published report, and the capstone is built entirely around reading those reports yourself. **A course that handed you a table of scores would be teaching you to trust a number; this one teaches you to interrogate one.**

## Sources
- Coppedge, M., Gerring, J., Knutsen, C. H., Lindberg, S. I., Teorell, J., et al. (2024). V-Dem methodology v14. Varieties of Democracy (V-Dem) Project, University of Gothenburg. https://www.v-dem.net/documents/
- Munck, G. L., & Verkuilen, J. (2002). Conceptualizing and measuring democracy: Evaluating alternative indices. Comparative Political Studies, 35(1), 5-34.
- Aristotle. (c. 350 BCE/2009). Politics (B. Jowett, Trans.), Book III. http://classics.mit.edu/Aristotle/politics.html`,
    },
    {
      slug: "forms-why-definitions-differ",
      title: "2 · Why honest experts define democracy differently",
      section: "Section 1 · Why classification is contested",
      body: `If the projects disagree, the first question is why, and the answer is not sloppiness. It is that **"democracy" has more than one respectable definition**, and which one you pick decides what you measure and therefore how you rank. This lesson gives you the two main definitions and the three questions you ask of any classification. The rest of the course is these tools used over and over.

## Two respectable definitions of democracy

There is a genuine, centuries-old split in political thought about what the word means, and both sides have serious defenders.

| | The MINIMALIST (electoral) view | The THICKER (liberal) view |
|---|---|---|
| **Democracy is** | A method for choosing rulers | A method plus a set of protections |
| **The test** | Are there real, contested elections that can remove rulers? | That, PLUS rule of law, rights, and checks |
| **Associated with** | Schumpeter; Przeworski | Dahl's polyarchy; the "liberal democracy" idea |

**The minimalist view**, argued by Joseph Schumpeter and later defended by Adam Przeworski and colleagues, says democracy is essentially a competitive method: a system in which rulers are chosen through contested elections and can actually be voted out (Schumpeter, 1942; Przeworski et al., 2000). On this view the key test is alternation: do incumbents ever lose and leave?

**The thicker, liberal view** says elections are necessary but not sufficient. Robert Dahl argued that real-world "democracies" are better called **polyarchies**, and that they require a bundle of institutional guarantees, free expression, alternative sources of information, associational freedom, alongside contested elections (Dahl, 1971). On this view a country can hold elections and still fail to be a democracy if rights and the rule of law are absent.

**Neither is a mistake.** They are answers to a real question, and a project that adopts one will rank a rights-poor but election-holding country higher than a project that adopts the other. **The disagreement between indices starts here, in the dictionary, before any data is collected.**

## The three questions you ask of any classification

Whenever you meet a claim that a country "is" some form of government, ask these three, in order. They are to this course what the four questions were to course 1.

1. **Who made this classification?** A university project, a US-based advocacy organization, a business intelligence unit, a single researcher. The maker has a definition, a vantage point, and a purpose.
2. **What does it actually measure?** Elections only, or rights too? Formal rules, or how they work in practice? A single score, or many sub-scores?
3. **Where does it disagree with another classification?** The most informative fact about a ranking is often the case where it splits from a rival, because the split shows you exactly what each one values.

**A classification you cannot answer those three questions about is one you should not repeat.** The course spends Section 3 answering all three for the four big projects.

## Why "it depends on the definition" is not a dodge

It can feel like a cop-out to say "well, it depends what you mean by democracy." It is not. **"It depends on the definition" is only a dodge when you stop there.** The honest move is to go on: name the definitions, say which one a given project uses, and show what changes when you switch. That is precise, not evasive, and it is the difference between "nobody really knows" (false and lazy) and "here is exactly what is contested and why" (true and useful).

## Sources
- Schumpeter, J. A. (1942). Capitalism, socialism and democracy. Harper & Brothers.
- Dahl, R. A. (1971). Polyarchy: Participation and opposition. Yale University Press.
- Przeworski, A., Alvarez, M. E., Cheibub, J. A., & Limongi, F. (2000). Democracy and development: Political institutions and well-being in the world, 1950-1990. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "State the one claim this whole course is built to defend.",
          answer: "The four major projects that rank governments (V-Dem, Polity, Freedom House, and the EIU Democracy Index) classify the same countries differently, on fully published methodologies, because they define democracy differently and measure different things. So 'is country X a democracy?' becomes 'by whose definition, measured how?'",
        },
        {
          prompt: "Why does this course refuse to hand you a table of which countries are democracies?",
          answer: "Because classifications change and the course will not assert any country's current score or category from memory. A table would teach you to trust a number; the course instead teaches you to interrogate one and sends you to the current published report for any live figure.",
        },
        {
          prompt: "How does this course relate to course 1, and how is it different?",
          answer: "Course 1 taught the method for reading a single government action (the four questions and the vertical stack). This course moves one level up, to classifying a whole system, and asks why honest experts classify the same system differently. It reuses course 1's 'the disagreement is the lesson' habit but does not re-teach the four questions.",
        },
      ],
    },
    {
      slug: "forms-a-form-is-a-claim",
      title: "3 · A form of government is a claim about power",
      section: "Section 1 · Why classification is contested",
      body: `Before the vocabulary, one reframing that makes the whole course easier. **A form of government is not a decoration on a country; it is a compressed claim about how power is held and checked there.** When you name a form, you are asserting answers to a small set of questions, and different forms are just different answers. This is course 1's habit carried up a level: instead of reading one action, you are reading the whole arrangement of power.

## The questions a "form" secretly answers

Every classical form and every modern category is, underneath, an answer to questions like these:

| The question | What the answer tells you |
|---|---|
| **How many people rule?** | One, a few, or many (the oldest axis, from Aristotle) |
| **How do rulers get power?** | Inheritance, force, election, religious claim |
| **Can rulers be removed, and how?** | Never, by coup, by vote, by term limit |
| **What limits the rulers?** | Nothing, a constitution, courts, rights, other bodies |

**Read the table and you can already see why one label is not enough.** "Monarchy" answers the second question (inheritance) but says almost nothing about the fourth (a monarch can be absolute or tightly limited). "Democracy" answers the third (removal by vote) but two democracies can differ hugely on the fourth. **A single word compresses several answers into one, and the compression is where the disagreements hide.**

## Why the count-of-rulers axis is not enough on its own

The oldest classification, which you will meet properly next lesson, sorts governments by **how many rule**: one, few, or many. It is a real and useful axis, and it is where our vocabulary comes from. **But it misses the question that turns out to matter most for the modern indices: not how many rule, but whether the rulers can be removed and what checks them.** A country ruled by "the many" through elections that never change anything is very different from one where elections genuinely turn out incumbents, even though the count-of-rulers axis calls both "rule by the many."

**So the classical vocabulary is necessary and insufficient at the same time.** You need it, because it is the language everyone uses and the root of the modern terms. And you cannot stop at it, because the modern measurement projects are built to capture exactly the things a single count-of-rulers label leaves out. Section 2 gives you the vocabulary. Section 3 shows what it misses and how the projects try to measure the gap.

## The move you will make all course

Here is the habit to build now: **when you hear a form-of-government label, unfold it back into the claims it is making, and then ask whether those claims are true of the actual country.** "It is a republic" unfolds into "it has no monarch and it governs through representatives." Is that all true? Does it also protect rights, hold real elections, limit its rulers? The label answered two questions and stayed silent on the rest, and the silence is where you do your work. **A form is a claim; your job is to check the claim, not to file the country under the word.**

## Sources
- Aristotle. (c. 350 BCE/2009). Politics (B. Jowett, Trans.), Book III. http://classics.mit.edu/Aristotle/politics.html
- Dahl, R. A. (1971). Polyarchy: Participation and opposition. Yale University Press.
- Finer, S. E. (1997). The history of government from the earliest times. Oxford University Press.`,
      recallContent: [
        {
          prompt: "Name the two respectable definitions of democracy and how they differ.",
          answer: "The minimalist (electoral) view (Schumpeter; Przeworski): democracy is a method for choosing rulers, tested by whether contested elections can actually remove incumbents. The thicker liberal view (Dahl's polyarchy): elections are necessary but not sufficient; democracy also requires rights, free information, and the rule of law. Neither is a mistake, and picking one changes the ranking.",
        },
        {
          prompt: "State the three questions you ask of any classification.",
          answer: "1) Who made this classification (their definition, vantage point, and purpose)? 2) What does it actually measure (elections only or rights too, formal rules or practice, one score or many)? 3) Where does it disagree with another classification? These are to this course what the four questions were to course 1.",
        },
        {
          prompt: "Why is 'it depends on the definition' NOT a dodge here?",
          answer: "It is only a dodge if you stop there. The honest move is to go on: name the definitions, say which one a project uses, and show what changes when you switch. That is the difference between 'nobody really knows' (false) and 'here is exactly what is contested and why' (true and useful).",
        },
      ],
    },
    {
      slug: "forms-quiz-contested",
      title: "4 · Quiz: why classification is contested",
      section: "Section 1 · Why classification is contested",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The central claim this course is built to defend is that the four big projects:",
            options: [
              "Agree on nearly every country",
              "Rank the same countries differently",
              "Use one shared official method",
              "Refuse to publish their methods",
            ],
            correctIndex: 1,
            explanation: "V-Dem, Polity, Freedom House, and the EIU Democracy Index place the same countries in different categories, on fully published methodologies, because they define democracy differently and measure different things.",
            sourceLessonSlug: "forms-what-this-is",
          },
          {
            prompt: "The projects disagree mainly because they:",
            options: [
              "Collect data in different years",
              "Are funded by rival governments",
              "Define democracy in different ways",
              "Count the population differently",
            ],
            correctIndex: 2,
            explanation: "The disagreement starts in the dictionary: 'democracy' has more than one respectable definition, and the definition a project adopts decides what it measures and how it ranks.",
            sourceLessonSlug: "forms-why-definitions-differ",
          },
          {
            prompt: "The MINIMALIST (electoral) definition of democracy tests above all whether:",
            options: [
              "Rights and courts are protected",
              "The country has a written charter",
              "The economy is growing steadily",
              "Elections can remove the rulers",
            ],
            correctIndex: 3,
            explanation: "Schumpeter and Przeworski treat democracy as a competitive method; the key test is alternation, whether incumbents ever lose contested elections and leave office.",
            sourceLessonSlug: "forms-why-definitions-differ",
          },
          {
            prompt: "Robert Dahl argued real-world democracies are better called:",
            options: [
              "Polyarchies, needing rights too",
              "Republics, needing a senate",
              "Autocracies, needing a strong ruler",
              "Monarchies, needing a crown",
            ],
            correctIndex: 0,
            explanation: "Dahl's polyarchy (1971) is the thicker, liberal view: contested elections PLUS institutional guarantees like free expression and alternative information. Elections alone are not enough.",
            sourceLessonSlug: "forms-why-definitions-differ",
          },
          {
            prompt: "The FIRST of the three questions to ask of any classification is:",
            options: [
              "How old is the country itself?",
              "Who made this classification?",
              "How large is its population?",
              "When was the country founded?",
            ],
            correctIndex: 1,
            explanation: "Who made it: a university, an advocacy body, a business unit, a lone researcher. The maker carries a definition, a vantage point, and a purpose, all of which shape the ranking.",
            sourceLessonSlug: "forms-why-definitions-differ",
          },
          {
            prompt: "The course says the MOST informative fact about a ranking is often:",
            options: [
              "The country ranked at the very top",
              "The average score across the world",
              "The case where it splits from a rival",
              "The year the project was founded",
            ],
            correctIndex: 2,
            explanation: "The third question, where does it disagree with another classification, is the most revealing, because a split shows you exactly what each project values differently.",
            sourceLessonSlug: "forms-why-definitions-differ",
          },
          {
            prompt: "'It depends on the definition' becomes a dodge only when you:",
            options: [
              "Name which definition is used",
              "Show what switching would change",
              "Stop there without going on",
              "Compare two rival projects",
            ],
            correctIndex: 2,
            explanation: "Stopping there is the dodge. The honest move is to name the definitions, say which one a project uses, and show what changes when you switch, which is precise rather than evasive.",
            sourceLessonSlug: "forms-why-definitions-differ",
          },
          {
            prompt: "This course reframes a 'form of government' as fundamentally:",
            options: [
              "A claim about how power is held",
              "A permanent name for a country",
              "A style of national flag design",
              "A ranking of a country's wealth",
            ],
            correctIndex: 0,
            explanation: "A form is a compressed claim about how power is held and checked. Naming a form asserts answers to a set of questions, and different forms are just different answers.",
            sourceLessonSlug: "forms-a-form-is-a-claim",
          },
          {
            prompt: "The oldest classification axis sorts governments by:",
            options: [
              "How rich the rulers are",
              "How many people rule",
              "How large the army is",
              "How old the state is",
            ],
            correctIndex: 1,
            explanation: "The count-of-rulers axis (one, few, or many) comes from Aristotle and is where our vocabulary starts, but it misses whether rulers can be removed and what checks them.",
            sourceLessonSlug: "forms-a-form-is-a-claim",
          },
          {
            prompt: "The label 'monarchy' answers 'how do rulers get power?' but stays silent on:",
            options: [
              "Whether power passes by birth",
              "Whether a crown is involved",
              "Whether the ruler is one person",
              "Whether the monarch is limited",
            ],
            correctIndex: 3,
            explanation: "A monarch can be absolute or tightly limited. The label compresses several answers into one word, and the silence about limits is exactly where the disagreements hide.",
            sourceLessonSlug: "forms-a-form-is-a-claim",
          },
          {
            prompt: "The classical vocabulary is described as:",
            options: [
              "Necessary and also insufficient",
              "Completely useless to modern work",
              "The only tool a reader needs",
              "A recent twentieth-century idea",
            ],
            correctIndex: 0,
            explanation: "You need the vocabulary (it is the shared language and the root of modern terms), and you cannot stop at it, because the measurement projects exist to capture what a single label leaves out.",
            sourceLessonSlug: "forms-a-form-is-a-claim",
          },
          {
            prompt: "The question that matters most to the modern indices is not how many rule, but:",
            options: [
              "How grand the capital city is",
              "How the rulers dress in public",
              "Whether rulers can be removed",
              "How long the country has existed",
            ],
            correctIndex: 2,
            explanation: "A country where 'the many' vote but elections never change anything differs sharply from one where elections truly turn out incumbents, though the count-of-rulers label calls both 'rule by the many.'",
            sourceLessonSlug: "forms-a-form-is-a-claim",
          },
          {
            prompt: "The habit the course tells you to build with any label is to:",
            options: [
              "File the country under the word",
              "Unfold it into checkable claims",
              "Trust whoever published it first",
              "Pick the shortest word available",
            ],
            correctIndex: 1,
            explanation: "Unfold the label back into the claims it makes ('a republic' means no monarch and rule through representatives), then check whether those claims are true of the actual country.",
            sourceLessonSlug: "forms-a-form-is-a-claim",
          },
          {
            prompt: "Two projects agreeing on a country is treated by this course as:",
            options: [
              "Proof the label is simply true",
              "A meaningless coincidence",
              "Real evidence worth weighing",
              "A sign both are biased",
            ],
            correctIndex: 2,
            explanation: "The goal is not cynicism. Agreement between independently built measures is genuine evidence; the point is to know what kind of evidence it is, not to dismiss it.",
            sourceLessonSlug: "forms-what-this-is",
          },
          {
            prompt: "The reason classification is worth a whole course is that the label:",
            options: [
              "Never affects anything real",
              "Is fixed once and never changes",
              "Is decided by the United Nations",
              "Drives aid, risk, and news framing",
            ],
            correctIndex: 3,
            explanation: "Aid decisions, investment risk ratings, and news framing all lean on these classifications, so a reader who knows the scores are built by named people on stated definitions reads the world differently.",
            sourceLessonSlug: "forms-what-this-is",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The classical forms and what they really mean
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "forms-classical-typology",
      title: "5 · The oldest map: rule by one, few, or many",
      section: "Section 2 · The classical forms and what they really mean",
      body: `The vocabulary everyone still uses is roughly 2,400 years old, and knowing where it comes from makes it far easier to keep straight. **Aristotle sorted governments on two axes at once: how many people rule, and whether they rule for the common good or for themselves.** Two axes, six boxes, and most of our words fall out of the grid.

## Aristotle's grid

In the Politics, Aristotle crossed the count of rulers (one, few, many) with the purpose of rule (the common good, or the rulers' own interest), and named the six results (Aristotle, Politics, Book III).

| Rule by | For the common good (the "correct" form) | For the rulers themselves (the "deviant" form) |
|---|---|---|
| **One** | Monarchy (kingship) | Tyranny |
| **A few** | Aristocracy (rule of the best) | Oligarchy (rule of the wealthy few) |
| **The many** | Polity (constitutional rule) | Democracy (in Aristotle's own, negative sense) |

**Read the grid carefully, because it holds two surprises for a modern reader.**

## Surprise one: the good/bad pairs

Aristotle did not think "rule by one" was automatically bad or "rule by many" automatically good. Each count of rulers had a **healthy version and a corrupted twin.** Monarchy is the good rule of one; tyranny is its corruption. Aristocracy is the good rule of a few; oligarchy is its corruption. **The count of rulers tells you the form; the purpose of rule tells you whether it is the healthy or the corrupted version.** That second axis, are the rulers serving everyone or themselves, never went away; it is the ancestor of the modern question about whether rulers are truly accountable.

## Surprise two: "democracy" was a negative word

To Aristotle, **"democracy" was the deviant form of rule by the many**, rule by the poor majority in their own interest, and the healthy version of popular rule he called **"polity."** This is jarring now, when "democracy" is the word almost every state wants. **The meaning of the word flipped over the centuries**, from a suspect form to the aspiration nearly everyone claims. That flip is itself a lesson in how contested this vocabulary is: the single most important word in the modern debate meant close to the opposite when it was coined.

## The words you actually keep

From this grid the modern vocabulary keeps six terms, though it uses several differently from Aristotle:

- **Monarchy**: rule where the head of state holds the position by inheritance or for life. Modern usage drops Aristotle's "for the common good" requirement.
- **Autocracy**: a modern umbrella term (not one of Aristotle's six) for rule by one person or a tight group with unchecked power. It overlaps Aristotle's tyranny.
- **Oligarchy**: rule by a small group, often defined by wealth. Kept close to Aristotle's meaning.
- **Aristocracy**: literally "rule of the best"; in practice it came to mean rule by a hereditary noble class.
- **Democracy** and **polity**: modern usage merges these and reverses Aristotle's judgment, making "democracy" the aspirational term for popular self-rule.

**Notice that "republic" and "theocracy" are not on Aristotle's grid at all.** They answer different questions, and they are the next lesson and the one after. For now, hold the grid: two axes, count of rulers and purpose of rule, and the fact that our most important word once meant its near-opposite. **The vocabulary is a historical artifact, not a clean logical system, which is one more reason no single label settles anything.**

## Sources
- Aristotle. (c. 350 BCE/2009). Politics (B. Jowett, Trans.), Book III, chs. 6-8. http://classics.mit.edu/Aristotle/politics.html
- Finer, S. E. (1997). The history of government from the earliest times. Oxford University Press.
- Hansen, M. H. (1991). The Athenian democracy in the age of Demosthenes. Blackwell.`,
      recallContent: [
        {
          prompt: "Why is a 'form of government' best understood as a claim rather than a name tag?",
          answer: "Because a form is a compressed claim about how power is held and checked: it asserts answers to how many rule, how rulers get power, whether they can be removed, and what limits them. Naming a form asserts those answers, and the compression into one word is where disagreements hide.",
        },
        {
          prompt: "Why is the count-of-rulers axis necessary but not sufficient?",
          answer: "It is the shared language and the root of the modern terms, so you need it. But it misses the question the modern indices care about most: not how many rule, but whether rulers can be removed and what checks them. A country where the many vote but elections change nothing differs sharply from one where elections truly remove incumbents.",
        },
        {
          prompt: "What is the habit to build when you hear a form-of-government label?",
          answer: "Unfold the label back into the claims it is making, then check whether those claims are true of the actual country. 'It is a republic' unfolds into 'no monarch, governed through representatives'; the label answered two questions and stayed silent on the rest, and the silence is where you do your work.",
        },
      ],
    },
    {
      slug: "forms-democracy-republic",
      title: "6 · Democracy and republic: the definition fight",
      section: "Section 2 · The classical forms and what they really mean",
      body: `No two words in this subject are argued over more, or more heatedly, than "democracy" and "republic," and the argument is almost entirely a **definition fight**: people using the same two words to mean different things and then disagreeing about a country. This lesson is the purest example in the course of the claim from Section 1, that the disagreement lives in the dictionary. Handle it neutrally and you will handle the whole rest of the course.

## What each word means, at the root

**"Democracy"** comes from the Greek demos (the people) and kratos (power or rule): rule by the people. **"Republic"** comes from the Latin res publica, "the public thing" or "the public affair": a state that is not a private possession of a monarch, in which public office is a public trust rather than personal property.

**Notice the two words answer different questions.** "Democracy" answers *who holds power* (the people). "Republic" answers *whose the state is* (the public, not a king). A country can be one, both, or neither, because the questions are not the same question.

## The famous American distinction

Much of the modern English-language argument traces to one source: James Madison, writing in Federalist No. 10, drew a sharp line between what he called a "pure democracy" and a "republic." By a **pure democracy** he meant a small society that "assemble and administer the government in person," that is, direct democracy. By a **republic** he meant "a government in which the scheme of representation takes place," that is, representative government (Madison, 1787). **On Madison's definitions, the contrast is real and the United States is a republic and not a pure democracy**, because it governs through elected representatives rather than by the whole people assembling.

## Why the slogan "a republic, not a democracy" is a definition fight

You will hear it asserted that a given country "is a republic, not a democracy." **Whether that is true depends entirely on which definitions you are using, which is the whole point.**

| If "democracy" means... | ...then the claim is |
|---|---|
| **Direct democracy** (Madison's "pure democracy") | Often TRUE: most large states are representative, not direct |
| **Popular self-rule of any kind, including representative** | Usually FALSE: a representative democracy is still a democracy |

**Under Madison's narrow definition, "a republic, not a (pure) democracy" is simply accurate.** Under the modern comparative-politics definition, in which "democracy" includes **representative** democracy, a country can be a republic and a democracy at once, and most stable ones are both. **The two sides are not disagreeing about any fact in the world; they are using "democracy" to mean two different things.** Name the definitions and the heat drains out of the argument, which is exactly the move Section 1 taught.

## Where the measurement projects land

This matters for Section 3 because **the modern projects overwhelmingly use "democracy" in the broad, representative sense.** When V-Dem or the EIU calls a country a democracy, they are not claiming it is a direct democracy; they are asking whether it has genuine, contested, representative self-rule with (depending on the project) the rights and checks that go with it. **So a reader who insists "democracy means only direct democracy" is not catching the indices in an error; they are using a different dictionary.** And "republic" barely appears in these indices at all, because whether a state has a monarch turns out to say little about how democratic it is, which is the subject of the next lesson.

## Sources
- Madison, J. (1787). The Federalist No. 10. https://avalon.law.yale.edu/18th_century/fed10.asp
- Dahl, R. A. (1998). On democracy. Yale University Press.
- Hansen, M. H. (1991). The Athenian democracy in the age of Demosthenes. Blackwell.`,
      recallContent: [
        {
          prompt: "What are Aristotle's two axes, and what six forms do they produce?",
          answer: "Axis one: how many rule (one, few, many). Axis two: rule for the common good (correct forms) or for the rulers themselves (deviant forms). The six: monarchy/tyranny (one), aristocracy/oligarchy (few), polity/democracy (many), where democracy was Aristotle's negative form of popular rule.",
        },
        {
          prompt: "What are the two surprises in Aristotle's grid for a modern reader?",
          answer: "First, each count of rulers has a healthy version and a corrupted twin (monarchy/tyranny, aristocracy/oligarchy), so the purpose of rule, not just the number, decides which. Second, 'democracy' was a NEGATIVE word for Aristotle (the deviant rule of the poor many); the healthy popular form was 'polity.' The word's meaning later flipped.",
        },
        {
          prompt: "Where do 'republic' and 'theocracy' sit on Aristotle's grid, and what does that tell you?",
          answer: "Neither is on the grid at all: they answer different questions from the count-of-rulers/purpose axes. That is a sign the classical vocabulary is a historical artifact, not a clean logical system, which is one more reason no single label settles a classification.",
        },
      ],
    },
    {
      slug: "forms-monarchy-theocracy",
      title: "7 · Monarchy, autocracy, oligarchy, theocracy: labels that hide as much as they show",
      section: "Section 2 · The classical forms and what they really mean",
      body: `This lesson finishes the vocabulary and drives home the course's central caution: **these labels describe how power is acquired or justified, and tell you surprisingly little about how democratic a country actually is.** Two monarchies can be opposites. A "theocracy" and a secular autocracy can behave alike. The label is a starting point, never a verdict.

## Monarchy: the label that hides the most

A **monarchy** is a state whose head of state holds the office by inheritance or for life. That is all the word tells you. **What it does NOT tell you is who actually governs**, and that varies so widely that "monarchy" and "how democratic is it?" are almost independent questions.

| Type of monarchy | Who actually governs | Democratic? |
|---|---|---|
| **Absolute monarchy** | The monarch holds real governing power | Usually classified as authoritarian |
| **Constitutional monarchy** | Elected government rules; the monarch reigns but does not rule | Can be a full democracy |

**In a constitutional monarchy the monarch is a ceremonial head of state and the real power sits with an elected parliament and government.** The United Kingdom, Sweden, Norway, the Netherlands, Japan, and Spain are widely classified as parliamentary democracies that happen to keep a crowned, largely ceremonial head of state (this is a structural fact about their systems; for any current democracy rating, read the current report). **So "it is a monarchy" and "it is a democracy" are not opposites.** A constitutional monarchy can score as democratic as any republic, and an absolute monarchy will not. **The crown is nearly irrelevant to the democracy question, which is exactly why the modern indices barely track it.**

## Autocracy and oligarchy: rule without accountability

**Autocracy** is the modern umbrella term for rule by one person or a small group whose power is not effectively checked and who cannot be removed through fair competition. It is the broad opposite of democracy on the modern spectrum, and the measurement projects in Section 3 are largely built to place countries somewhere between "democracy" and "autocracy."

**Oligarchy** is rule by a small group, classically the wealthy. It rarely appears as an official self-description; instead it is an analytical charge, that behind a country's formal form, real power sits with a narrow elite. **Because oligarchy is about who really decides rather than the formal rules, it is exactly the kind of thing a formal-rules reading misses and a practice-focused index tries to catch.**

## Theocracy: defined by the source of authority

A **theocracy** is a state in which ultimate political authority is claimed to rest on religious grounds, and religious leaders or religious law hold decisive governing power. **The defining feature is the claimed source of authority, not merely the presence of an official religion.** Many democracies have an established church or a religious majority and are not theocracies, because ultimate authority still rests on popular sovereignty and law, not on clergy or sacred law.

**Whether any given present-day state is "a theocracy" is often itself contested**, because states mix religious and secular authority in different degrees, and observers weigh the mix differently. That contest is the course's whole theme: even this seemingly clear label has disputed edges, and the honest move is to describe the actual arrangement of authority rather than reach for the one word. **Treat "theocracy," like every label here, as a claim to be checked against how the state's authority actually works, not a verdict to be applied from the outside.**

## The through-line into Section 3

Pull the section together. **Every classical label answers one narrow question (how many rule, how they got there, what justifies them) and leaves the accountability question, can the rulers be removed and what checks them, largely open.** That open question is precisely what the modern measurement projects were built to answer, and precisely where they disagree with one another. You now have the vocabulary. Section 3 shows you the four projects that try to measure what the vocabulary cannot.

## Sources
- Finer, S. E. (1997). The history of government from the earliest times. Oxford University Press.
- Bogdanor, V. (1995). The monarchy and the constitution. Oxford University Press.
- Aristotle. (c. 350 BCE/2009). Politics (B. Jowett, Trans.), Book III. http://classics.mit.edu/Aristotle/politics.html`,
      recallContent: [
        {
          prompt: "At the root, what does 'democracy' mean and what does 'republic' mean, and why is that a definition fight?",
          answer: "'Democracy' (demos + kratos) answers WHO holds power: the people. 'Republic' (res publica) answers WHOSE the state is: the public, not a monarch's private possession. They answer different questions, so a country can be one, both, or neither, and arguments about 'republic vs democracy' are usually people using the same words to mean different things.",
        },
        {
          prompt: "What did Madison mean by 'republic' versus 'pure democracy' in Federalist No. 10?",
          answer: "A 'pure democracy' was a small society that assembles and governs in person (direct democracy). A 'republic' was 'a government in which the scheme of representation takes place' (representative government). On those definitions the US is a republic and not a pure democracy, because it governs through elected representatives.",
        },
        {
          prompt: "Which definition of 'democracy' do the modern measurement projects use, and why does that defuse the slogan 'a republic, not a democracy'?",
          answer: "They use the broad, representative sense: genuine, contested, representative self-rule (plus rights and checks, depending on the project). Under that dictionary a country can be a republic AND a democracy at once. Someone insisting 'democracy means only direct democracy' is not catching the indices in an error, just using a different definition.",
        },
      ],
    },
    {
      slug: "forms-quiz-classical",
      title: "8 · Quiz: the classical forms",
      section: "Section 2 · The classical forms and what they really mean",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Aristotle sorted governments on two axes at once, which were:",
            options: [
              "Wealth of rulers and size of army",
              "Age of the state and its religion",
              "How many rule and for whose benefit",
              "Land area and total population",
            ],
            correctIndex: 2,
            explanation: "He crossed the count of rulers (one, few, many) with the purpose of rule (the common good, or the rulers' own interest), producing six forms.",
            sourceLessonSlug: "forms-classical-typology",
          },
          {
            prompt: "For Aristotle, the corrupted twin of monarchy (good rule of one) was:",
            options: [
              "Oligarchy, the rule of wealth",
              "Tyranny, rule of one for self",
              "Polity, constitutional rule",
              "Aristocracy, rule of the best",
            ],
            correctIndex: 1,
            explanation: "Each count of rulers had a healthy version and a corrupted twin. Monarchy is the good rule of one; tyranny is its self-serving corruption.",
            sourceLessonSlug: "forms-classical-typology",
          },
          {
            prompt: "For Aristotle himself, the word 'democracy' referred to:",
            options: [
              "The ideal government of all",
              "The good rule of a wise few",
              "The deviant rule of the poor many",
              "The rule of a single hereditary king",
            ],
            correctIndex: 2,
            explanation: "Democracy was his negative form of rule by the many, in the poor majority's own interest. He called the healthy popular form 'polity.' The word's meaning later flipped.",
            sourceLessonSlug: "forms-classical-typology",
          },
          {
            prompt: "'Autocracy' relates to Aristotle's grid how?",
            options: [
              "A modern umbrella term near tyranny",
              "One of his six original forms",
              "His word for the good rule of one",
              "The same as his term aristocracy",
            ],
            correctIndex: 0,
            explanation: "Autocracy is a modern umbrella term (not one of Aristotle's six) for rule by one person or a tight group with unchecked power, overlapping his 'tyranny.'",
            sourceLessonSlug: "forms-classical-typology",
          },
          {
            prompt: "At the root, the word 'democracy' (demos + kratos) answers the question:",
            options: [
              "Whose property the state is",
              "Who holds the power to rule",
              "How old the constitution is",
              "How wealthy the rulers are",
            ],
            correctIndex: 1,
            explanation: "Demos (the people) plus kratos (rule): rule by the people. It answers WHO holds power, a different question from what 'republic' answers.",
            sourceLessonSlug: "forms-democracy-republic",
          },
          {
            prompt: "The word 'republic' (res publica) at root answers the question:",
            options: [
              "How many citizens may vote",
              "Which party controls congress",
              "How the army is organized",
              "Whose the state is, public or king's",
            ],
            correctIndex: 3,
            explanation: "Res publica, 'the public thing': a state that is not a monarch's private possession, in which office is a public trust. It answers WHOSE the state is, not who holds power.",
            sourceLessonSlug: "forms-democracy-republic",
          },
          {
            prompt: "In Federalist No. 10, Madison defined a 'republic' as a government:",
            options: [
              "In which representation takes place",
              "Ruled directly by all citizens",
              "Without any elections at all",
              "Led by a single strong president",
            ],
            correctIndex: 0,
            explanation: "By 'republic' Madison meant 'a government in which the scheme of representation takes place,' contrasted with a 'pure democracy' where citizens govern in person.",
            sourceLessonSlug: "forms-democracy-republic",
          },
          {
            prompt: "Whether 'a republic, not a democracy' is true depends on:",
            options: [
              "Which definitions you are using",
              "The size of the country's army",
              "The year the country was founded",
              "The number of political parties",
            ],
            correctIndex: 0,
            explanation: "Under Madison's narrow definition (democracy = direct democracy) it is accurate; under the modern definition (democracy includes representative democracy) a country can be both. It is a definition fight, not a fact dispute.",
            sourceLessonSlug: "forms-democracy-republic",
          },
          {
            prompt: "The modern measurement projects use 'democracy' mainly in the sense of:",
            options: [
              "Only direct, in-person rule",
              "Representative self-rule",
              "Any state without a monarch",
              "Rule by a single party",
            ],
            correctIndex: 1,
            explanation: "They ask whether a country has genuine, contested, representative self-rule (plus rights and checks, depending on the project), not whether it is a direct democracy.",
            sourceLessonSlug: "forms-democracy-republic",
          },
          {
            prompt: "In a CONSTITUTIONAL monarchy, real governing power sits with:",
            options: [
              "The monarch, ruling directly",
              "An unelected council of nobles",
              "The elected government",
              "The national high court alone",
            ],
            correctIndex: 2,
            explanation: "The monarch reigns but does not rule; an elected parliament and government hold power. Such a state can be classified as a full democracy.",
            sourceLessonSlug: "forms-monarchy-theocracy",
          },
          {
            prompt: "'It is a monarchy' and 'it is a democracy' are, the course says:",
            options: [
              "Exact opposites of each other",
              "Not opposites; both can be true",
              "The same claim in two words",
              "Both meaningless as labels",
            ],
            correctIndex: 1,
            explanation: "A constitutional monarchy can be as democratic as any republic, while an absolute monarchy is not. The crown is nearly irrelevant to the democracy question, so the indices barely track it.",
            sourceLessonSlug: "forms-monarchy-theocracy",
          },
          {
            prompt: "The defining feature of a theocracy is:",
            options: [
              "That most citizens are religious",
              "That it has an official state church",
              "The claimed source of its authority",
              "That it bans all other religions",
            ],
            correctIndex: 2,
            explanation: "Ultimate authority is claimed to rest on religious grounds, with clergy or religious law holding decisive power. Merely having an established religion does not make a democracy a theocracy.",
            sourceLessonSlug: "forms-monarchy-theocracy",
          },
          {
            prompt: "'Oligarchy' usually appears in analysis as:",
            options: [
              "An official self-description",
              "A synonym for constitutional rule",
              "A formal category in every index",
              "A charge about who really decides",
            ],
            correctIndex: 3,
            explanation: "It is rarely a self-description; it is the analytical claim that behind the formal form, real power sits with a narrow elite, which a practice-focused index tries to catch.",
            sourceLessonSlug: "forms-monarchy-theocracy",
          },
          {
            prompt: "The question every classical label leaves largely open is:",
            options: [
              "Which flag the country flies",
              "How many people live there",
              "How old the ruling family is",
              "Can rulers be removed, and what checks them",
            ],
            correctIndex: 3,
            explanation: "Labels answer how many rule, how they got there, or what justifies them, but leave accountability open. That open question is exactly what the modern projects were built to measure.",
            sourceLessonSlug: "forms-monarchy-theocracy",
          },
          {
            prompt: "Whether a given present-day state is 'a theocracy' is:",
            options: [
              "Always perfectly clear-cut",
              "Decided by the United Nations",
              "Often itself contested",
              "Fixed in its constitution's title",
            ],
            correctIndex: 2,
            explanation: "States mix religious and secular authority in different degrees and observers weigh the mix differently, so even this seemingly clear label has disputed edges. Describe the actual arrangement rather than reach for one word.",
            sourceLessonSlug: "forms-monarchy-theocracy",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · The measurement projects: V-Dem, Polity, Freedom House, EIU
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "forms-from-forms-to-measures",
      title: "9 · From boxes to scores: why the field started measuring",
      section: "Section 3 · The measurement projects: V-Dem, Polity, Freedom House, EIU",
      body: `Sections 1 and 2 gave you the boxes: democracy, autocracy, monarchy, and the rest. This section is about the modern response to those boxes, which was to stop sorting countries into a few categories and start **scoring them on continua** instead. To read any country's classification today, you need to know the four projects that do this scoring, and this lesson introduces all four and the shared idea behind them.

## Why categories alone stopped being enough

A small set of boxes runs into two problems fast.

1. **The interesting cases are on the borders.** A handful of countries are obvious democracies and a handful are obvious autocracies, but a large group sits in between, holding elections that are real but unfair, or protecting some rights and not others. **Boxes force a yes/no on cases that are genuinely partial.**
2. **Boxes hide movement.** A country sliding from democratic toward authoritarian looks identical in a box until it crosses the line, at which point it appears to jump. **A score can show the slide while it happens; a box only shows the jump.**

So the field moved to **measurement**: break "democracy" into components, score each component, and combine the scores. Every project in this section does a version of that, and they differ in exactly the ways Section 1 predicted: **what they include, who does the scoring, and how they combine it.**

## The four projects, at a glance

You will meet each in detail in the next two lessons. Here they are together, so the landscape is clear.

| Project | Who runs it | Headline output |
|---|---|---|
| **V-Dem** | University of Gothenburg (Sweden) | Multiple democracy indices, expert-coded |
| **Polity (Polity5)** | Center for Systemic Peace (US) | A single score from -10 to +10 |
| **Freedom House** | Freedom House (US) | Free / Partly Free / Not Free |
| **EIU Democracy Index** | Economist Intelligence Unit (UK) | Full / flawed / hybrid / authoritarian |

**Read the "who runs it" column first, because it is the answer to Section 1's first question.** One is a large academic project; one grew from a political scientist's dataset; one is a US-based organization that began in the 1940s; one is the research arm of a business publication. Four different makers, four different purposes, four different vantage points. **None of that makes them worthless, and none of it makes them interchangeable.**

## What "measure democracy" even means

A crucial point before the details: **you cannot measure democracy without first defining it, so every score is a definition made numerical.** When a project turns "democracy" into a number, it has already decided what democracy is, whether elections are enough or rights are required, whether to judge formal rules or actual practice. **The number looks objective and the definition inside it is a choice.** That is not a scandal; it is unavoidable. The skill is to read the number as "this is how democratic the country is, according to THIS definition and THIS method," never as a bare fact.

## What to carry into the next two lessons

Hold three questions ready for each project: **what does it count as democracy, who assigns the scores, and what does its output look like (a single number, a set of categories, many sub-scores)?** Those three are the whole of Section 3, and once you can answer them for all four projects, the disagreements in Lesson 12 will look inevitable rather than surprising.

## Sources
- Munck, G. L., & Verkuilen, J. (2002). Conceptualizing and measuring democracy: Evaluating alternative indices. Comparative Political Studies, 35(1), 5-34.
- Coppedge, M., Gerring, J., Knutsen, C. H., Lindberg, S. I., Teorell, J., et al. (2024). V-Dem methodology v14. V-Dem Institute, University of Gothenburg. https://www.v-dem.net/documents/
- Boese, V. A. (2019). How (not) to measure democracy. International Area Studies Review, 22(2), 95-127.`,
      recallContent: [
        {
          prompt: "Why does 'monarchy' tell you so little about how democratic a country is?",
          answer: "Monarchy only says the head of state holds office by inheritance or for life. In an absolute monarchy the monarch really governs (usually authoritarian); in a constitutional monarchy the monarch reigns but an elected government rules (can be a full democracy). So the crown is nearly irrelevant to the democracy question, and the indices barely track it.",
        },
        {
          prompt: "How does a theocracy differ from a democracy that merely has an established religion?",
          answer: "A theocracy claims its ultimate political authority rests on religious grounds, with clergy or religious law holding decisive power. A democracy with an established church still grounds ultimate authority in popular sovereignty and law, not in sacred law or clergy, so it is not a theocracy.",
        },
        {
          prompt: "What single question do all the classical labels leave largely open, and who tries to answer it?",
          answer: "Accountability: can the rulers be removed, and what checks them? The classical labels answer how many rule, how they got there, or what justifies them, but leave accountability open. The modern measurement projects were built to answer exactly that, and it is where they disagree most.",
        },
      ],
    },
    {
      slug: "forms-vdem-polity",
      title: "10 · V-Dem and Polity: two ways to score a government",
      section: "Section 3 · The measurement projects: V-Dem, Polity, Freedom House, EIU",
      body: `Take the four projects in two pairs. This lesson does V-Dem and Polity, which sit at opposite ends of a design choice: V-Dem measures many things in fine detail with a large crowd of expert coders, while Polity measures a few core institutional features and boils them to one number. **Same subject, opposite strategies, and knowing both makes the disagreements later legible.**

## V-Dem: measure everything, disaggregated

**V-Dem (Varieties of Democracy)** is a large academic project based at the University of Gothenburg in Sweden. Its defining idea is that "democracy" is not one thing, so it should not be one number. V-Dem publishes **several distinct high-level democracy indices**, each capturing a different conception (Coppedge et al., 2024):

| V-Dem index | The conception it captures |
|---|---|
| **Electoral democracy** | Are elections free, fair, and meaningful? (its base measure) |
| **Liberal democracy** | Electoral, PLUS rule of law and limits on power |
| **Participatory democracy** | How much direct citizen participation? |
| **Deliberative democracy** | Are decisions reached by reasoned public discussion? |
| **Egalitarian democracy** | Are rights and resources spread across groups? |

**The point of publishing several is that a country can rank well on one and poorly on another**, and V-Dem shows that rather than hiding it in a single total. Its scores are built from hundreds of specific indicators coded by **thousands of country experts**, combined through a statistical measurement model that estimates how reliable each coder is (Coppedge et al., 2024). V-Dem also offers a category scheme called **Regimes of the World**, which sorts countries into closed autocracy, electoral autocracy, electoral democracy, and liberal democracy (Luhrmann, Tannenberg, & Lindberg, 2018).

## Polity: measure the core, in one number

**The Polity project** (its current version is Polity5, produced by the Center for Systemic Peace in the United States) takes the opposite path. It focuses on a few **core institutional features of how authority is organized**, and combines them into a single score on a **21-point scale from -10 to +10** (Marshall & Gurr, 2020).

| Polity band | Score range | Label |
|---|---|---|
| **Autocracy** | -10 to -6 | Authoritarian |
| **Anocracy** | -5 to +5 | Mixed / incoherent |
| **Democracy** | +6 to +10 | Democratic |

Polity builds that score from features such as **how the chief executive is recruited, the constraints on the executive's power, and how open and competitive political participation is** (Marshall & Gurr, 2020). Its distinctive middle category, **"anocracy,"** is the important one: a name for regimes that are neither clearly democratic nor clearly autocratic, mixing features of both. **Anocracy is Polity admitting, in its own vocabulary, that the interesting cases are in the middle**, which is exactly where the projects will disagree.

## The design contrast, and why it matters

| | V-Dem | Polity |
|---|---|---|
| **Detail** | Hundreds of indicators, many indices | A few core features, one score |
| **Who codes** | Thousands of country experts + a model | A coding scheme applied by researchers |
| **Output** | Multiple scores plus categories | One number from -10 to +10 |
| **Strength** | Nuance; shows internal trade-offs | Simplicity; long historical reach |

**Neither design is better in the abstract.** V-Dem's detail is invaluable when you want to know *how* a country is or is not democratic; Polity's single score and long time span (it reaches back through modern history) are invaluable for tracking change over centuries. **But two projects measuring different features, with different coders, on different scales, will not produce identical rankings, and now you can see why in the design itself.** For any country's current V-Dem index value or Polity score, read the current dataset or report; this lesson teaches the methods, not today's numbers.

## Sources
- Coppedge, M., Gerring, J., Knutsen, C. H., Lindberg, S. I., Teorell, J., et al. (2024). V-Dem methodology v14. V-Dem Institute, University of Gothenburg. https://www.v-dem.net/documents/
- Luhrmann, A., Tannenberg, M., & Lindberg, S. I. (2018). Regimes of the World (RoW): Opening new avenues for the comparative study of political regimes. Politics and Governance, 6(1), 60-77.
- Marshall, M. G., & Gurr, T. R. (2020). Polity5: Political regime characteristics and transitions, 1800-2018, dataset users' manual. Center for Systemic Peace. https://www.systemicpeace.org/inscrdata.html`,
      recallContent: [
        {
          prompt: "Why did political science move from category 'boxes' to continuous 'scores'?",
          answer: "Two reasons: the interesting cases sit on the borders (many countries are genuinely partial, and a box forces a false yes/no), and boxes hide movement (a country sliding toward authoritarianism looks unchanged until it crosses the line and appears to jump, while a score shows the slide as it happens).",
        },
        {
          prompt: "Why is every democracy score 'a definition made numerical'?",
          answer: "You cannot measure democracy without first defining it, so turning democracy into a number already decides what democracy is (elections enough, or rights required; formal rules, or actual practice). The number looks objective but a definitional choice sits inside it. Read it as 'democratic according to THIS definition and method,' not as a bare fact.",
        },
        {
          prompt: "Name the four projects and who runs each.",
          answer: "V-Dem (University of Gothenburg, Sweden), Polity/Polity5 (Center for Systemic Peace, US), Freedom House (Freedom House, US), and the Democracy Index (Economist Intelligence Unit, UK). Four different makers, purposes, and vantage points.",
        },
      ],
    },
    {
      slug: "forms-freedomhouse-eiu",
      title: "11 · Freedom House and the EIU Democracy Index",
      section: "Section 3 · The measurement projects: V-Dem, Polity, Freedom House, EIU",
      body: `Now the other pair. Freedom House and the EIU Democracy Index are the two classifications a general reader is most likely to have heard quoted, because both produce a clean, headline-friendly label for every country each year. Both are useful and both have been criticized, and knowing what each actually measures is what lets you read a headline that cites them.

## Freedom House: measuring freedom, not just democracy

**Freedom House** is a US-based organization, founded in the 1940s, whose annual report **Freedom in the World** rates countries on political rights and civil liberties. Note the framing: its subject is **freedom**, which is broader than democratic procedure. A country is scored on two clusters (Freedom House, 2024):

| Cluster | Points | Covers |
|---|---|---|
| **Political rights** | Up to 40 | Elections, pluralism, functioning government |
| **Civil liberties** | Up to 60 | Expression, association, rule of law, personal rights |

The two combine into a **0 to 100 global freedom score**, and each country is given a status of **Free, Partly Free, or Not Free** (Freedom House, 2024). The methodology is grounded in the rights framework of the Universal Declaration of Human Rights, and scores are set by analysts and outside advisers rather than by a large expert crowd or a single algorithm.

**Freedom House has also been criticized, and the critique is part of reading it honestly.** Scholars have questioned its transparency and argued that its choices reflect a particular, US-associated vantage point (Giannone, 2010). **Naming that is not dismissing the source**; it is exactly Section 1's first question (who made this, and from what vantage point?) applied to a specific project. Weigh Freedom House as what it is: a serious, long-running, rights-focused rating produced by an organization with a mission and a location, not a neutral instrument that fell from the sky.

## The EIU Democracy Index: five categories, four regime types

**The Economist Intelligence Unit**, the research arm of the company that publishes The Economist, produces an annual **Democracy Index**. It scores each country from **0 to 10** across **five categories** (Economist Intelligence Unit, 2024):

1. Electoral process and pluralism
2. Functioning of government
3. Political participation
4. Political culture
5. Civil liberties

From the combined score, the EIU sorts every country into **one of four regime types** (Economist Intelligence Unit, 2024):

| Regime type | Roughly |
|---|---|
| **Full democracy** | Highest band |
| **Flawed democracy** | Democratic but with real weaknesses |
| **Hybrid regime** | Serious flaws, mixing democratic and authoritarian traits |
| **Authoritarian regime** | Lowest band |

Its scoring draws on expert assessment and, where available, public-opinion survey data, and it is distinctive for including **political culture** as a category, which most others do not. **That inclusion is a definitional choice with consequences**: a country strong on elections but weak on democratic political culture can be marked down in a way another index would not mark it down.

## Reading the pair together

**Freedom House and the EIU produce similar-looking outputs (a tidy label per country) from different definitions and methods.** Freedom House measures freedom on a rights framework and labels Free/Partly Free/Not Free; the EIU measures democracy across five categories including political culture and labels full/flawed/hybrid/authoritarian. **A country can land in adjacent-but-different buckets across the two, and the reason is always traceable to what each chose to measure.** For any country's current status or score in either, read this year's report: both publish annually and both can move a country year to year.

## Sources
- Freedom House. (2024). Freedom in the world 2024: Methodology. https://freedomhouse.org/reports/freedom-world/freedom-world-research-methodology
- Economist Intelligence Unit. (2024). Democracy index 2023. https://www.eiu.com/n/campaigns/democracy-index-2023/
- Giannone, D. (2010). Political and ideological aspects in the measurement of democracy: The Freedom House case. Democratization, 17(1), 68-97.`,
      recallContent: [
        {
          prompt: "How do V-Dem and Polity differ in design?",
          answer: "V-Dem measures many things in fine detail (hundreds of indicators, several distinct indices like electoral, liberal, participatory, deliberative, egalitarian) coded by thousands of country experts plus a statistical model. Polity measures a few core institutional features and combines them into one number from -10 to +10. Detail versus simplicity.",
        },
        {
          prompt: "What is Polity's 'anocracy' band, and why does it matter for this course?",
          answer: "Anocracy (roughly -5 to +5 on the -10 to +10 scale) is Polity's middle category for regimes that are neither clearly democratic nor clearly autocratic, mixing features of both. It matters because it is Polity admitting, in its own vocabulary, that the interesting cases are in the middle, which is exactly where the projects disagree.",
        },
        {
          prompt: "What are V-Dem's several high-level indices, and why publish several instead of one?",
          answer: "Electoral, liberal, participatory, deliberative, and egalitarian democracy indices. V-Dem publishes several because 'democracy' is not one thing: a country can rank well on one conception and poorly on another, and showing that is more honest than hiding it inside a single total.",
        },
      ],
    },
    {
      slug: "forms-why-they-disagree",
      title: "12 · The four reasons the rankings diverge",
      section: "Section 3 · The measurement projects: V-Dem, Polity, Freedom House, EIU",
      body: `This is the load-bearing lesson of the course. You now know the four projects; here is **why they place the same country in different categories, laid out as four specific, structural reasons.** None of the four is a mistake or a bias in the ordinary sense. They are built into what measuring a contested concept requires. Learn these four and you can explain almost any gap between two indices.

## Reason 1: they define democracy differently

This is the deepest reason and you already have it from Section 1. **A minimalist, elections-first definition and a thicker, rights-included definition will rank a rights-poor but election-holding country differently.** V-Dem even builds this into its structure by publishing separate electoral and liberal indices; a country can be high on one and lower on the other. **When two projects disagree, the first thing to check is whether they are measuring the same concept**, because often they are not: one is scoring "are the elections real?" and the other "are the elections real AND are rights protected?"

## Reason 2: they measure different things

Even given a definition, projects choose different indicators. **Freedom House measures freedom on a rights framework; Polity focuses on core institutions of executive recruitment and constraint; the EIU uniquely includes political culture; V-Dem tracks hundreds of specific practices.** A country strong on formal institutions but weak on political culture is scored one way by a project that counts culture and another way by one that does not. **The gap is not error; it is the two projects looking at partly different features of the same country.**

## Reason 3: different people (or models) assign the scores

**Who codes changes the code.** V-Dem uses thousands of country experts aggregated through a measurement model that weights reliability. Freedom House uses in-house analysts and outside advisers. Polity applies a coding scheme through its researchers. The EIU uses expert assessment plus some survey data. **These are different judgment processes, and on the hard, in-between cases, different judges reach different calls.** A crowd-plus-model and a small analyst team can look at the same messy country and land a notch apart, honestly.

## Reason 4: different scales and thresholds

Finally, the outputs are shaped differently. **Polity gives a single -10 to +10 number; V-Dem gives continuous indices plus a four-way category scheme; Freedom House gives three statuses; the EIU gives four regime types.** Wherever a project draws a **threshold** between categories, countries near the line get sorted differently by projects that draw the line in a different place. **A country just above one project's "democracy" cutoff can sit just below another's**, so the two disagree on the label while barely disagreeing on the underlying country. **Much apparent disagreement is threshold disagreement**, two projects that nearly agree on how democratic a country is, split by where each chose to cut.

## The pattern the comparison literature finds

Put the four reasons together and a consistent empirical pattern appears, documented by scholars who compare the indices directly: **the projects agree strongly at the extremes and disagree most in the middle.** Clear democracies and clear autocracies get similar treatment everywhere; the **hybrid regimes, the countries mixing real elections with serious unfairness, are where the indices split** (Munck & Verkuilen, 2002; Hogstrom, 2013; Boese, 2019). That is not a flaw to be fixed. It is the true shape of the problem: the middle is genuinely ambiguous, and honest measures built on different definitions will read an ambiguous case differently.

## How to use this

When you see two projects disagree about a country, **run the four reasons as a checklist**: Are they using different definitions (Reason 1)? Measuring different features (Reason 2)? Coded by different judges (Reason 3)? Split by a threshold (Reason 4)? Usually one or two of the four explain the whole gap, and naming which is the entire skill. **You will not resolve the disagreement, and you are not supposed to. You are supposed to explain it**, which is far more useful than pretending one number is the truth. That is the capstone.

## Sources
- Munck, G. L., & Verkuilen, J. (2002). Conceptualizing and measuring democracy: Evaluating alternative indices. Comparative Political Studies, 35(1), 5-34.
- Hogstrom, J. (2013). Does the choice of democracy measure matter? Comparisons between the two leading democracy indices, Freedom House and Polity IV. Government and Opposition, 48(2), 201-221.
- Boese, V. A. (2019). How (not) to measure democracy. International Area Studies Review, 22(2), 95-127.`,
      recallContent: [
        {
          prompt: "What does Freedom House measure, what is its output, and what is one documented critique?",
          answer: "It rates political rights (up to 40) and civil liberties (up to 60) for a 0 to 100 freedom score, with a Free / Partly Free / Not Free status, grounded in the Universal Declaration of Human Rights and scored by analysts and advisers. A documented critique (Giannone, 2010) questions its transparency and argues its choices reflect a US-associated vantage point.",
        },
        {
          prompt: "What does the EIU Democracy Index measure, and what makes it distinctive?",
          answer: "It scores five categories (electoral process and pluralism, functioning of government, political participation, political culture, civil liberties) 0 to 10 and sorts countries into full democracy, flawed democracy, hybrid regime, or authoritarian regime. It is distinctive for including political culture, a definitional choice that can mark down a country strong on elections but weak on culture.",
        },
        {
          prompt: "Why can a country land in adjacent-but-different buckets across Freedom House and the EIU?",
          answer: "Because they produce similar-looking labels from different definitions and methods: Freedom House measures freedom on a rights framework (Free/Partly Free/Not Free), the EIU measures democracy across five categories including political culture (full/flawed/hybrid/authoritarian). The gap is always traceable to what each chose to measure.",
        },
      ],
    },
    {
      slug: "forms-quiz-measures",
      title: "13 · Quiz: the measurement projects",
      section: "Section 3 · The measurement projects: V-Dem, Polity, Freedom House, EIU",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Political science moved from category boxes to continuous scores partly because boxes:",
            options: [
              "Cost too much money to print",
              "Hide a country's gradual slide",
              "Were banned by the United Nations",
              "Are harder to read on a screen",
            ],
            correctIndex: 1,
            explanation: "A country sliding toward authoritarianism looks unchanged in a box until it crosses the line and appears to jump; a score shows the slide as it happens. Boxes also force a false yes/no on genuinely partial cases.",
            sourceLessonSlug: "forms-from-forms-to-measures",
          },
          {
            prompt: "Every democracy score is described as 'a definition made numerical' because:",
            options: [
              "The math is always incorrect",
              "Numbers cannot measure politics",
              "You must define democracy to score it",
              "Scores are chosen at random",
            ],
            correctIndex: 2,
            explanation: "You cannot measure democracy without first defining it, so the number already contains a definitional choice (elections enough, or rights required; rules, or practice). It looks objective but a choice sits inside it.",
            sourceLessonSlug: "forms-from-forms-to-measures",
          },
          {
            prompt: "V-Dem's defining design choice is to:",
            options: [
              "Reduce democracy to one number",
              "Rate only the wealthiest states",
              "Score just national elections",
              "Publish several distinct indices",
            ],
            correctIndex: 3,
            explanation: "V-Dem treats democracy as not one thing, publishing separate electoral, liberal, participatory, deliberative, and egalitarian indices so a country can rank well on one and poorly on another.",
            sourceLessonSlug: "forms-vdem-polity",
          },
          {
            prompt: "V-Dem's scores are assigned mainly by:",
            options: [
              "Thousands of country experts",
              "A single lead researcher",
              "Automated news scraping",
              "Votes of the public online",
            ],
            correctIndex: 0,
            explanation: "Hundreds of indicators are coded by thousands of country experts, combined through a measurement model that estimates each coder's reliability.",
            sourceLessonSlug: "forms-vdem-polity",
          },
          {
            prompt: "The Polity project reports its headline result as:",
            options: [
              "A Free / Partly Free label",
              "One score from -10 to +10",
              "Five separate sub-indices",
              "A full-to-authoritarian scale",
            ],
            correctIndex: 1,
            explanation: "Polity focuses on a few core institutional features and combines them into a single 21-point score from -10 (autocracy) to +10 (democracy).",
            sourceLessonSlug: "forms-vdem-polity",
          },
          {
            prompt: "Polity's middle category, 'anocracy,' names regimes that are:",
            options: [
              "Ruled by a religious authority",
              "Governed by a hereditary king",
              "Neither clearly democratic nor autocratic",
              "Too small to be scored at all",
            ],
            correctIndex: 2,
            explanation: "Anocracy is the in-between band, mixing democratic and autocratic features. It is Polity admitting, in its own vocabulary, that the interesting cases sit in the middle.",
            sourceLessonSlug: "forms-vdem-polity",
          },
          {
            prompt: "Freedom House's subject, broader than democratic procedure, is:",
            options: [
              "The size of the economy",
              "Freedom (rights and liberties)",
              "The strength of the military",
              "The age of the constitution",
            ],
            correctIndex: 1,
            explanation: "Freedom in the World rates political rights (up to 40) and civil liberties (up to 60) for a 0 to 100 freedom score. Its frame is freedom, which is wider than elections alone.",
            sourceLessonSlug: "forms-freedomhouse-eiu",
          },
          {
            prompt: "Freedom House assigns each country a status of:",
            options: [
              "Full, flawed, or hybrid",
              "Autocracy or anocracy",
              "Liberal or electoral",
              "Free, Partly Free, or Not Free",
            ],
            correctIndex: 3,
            explanation: "The two clusters combine into a 0 to 100 score and a status of Free, Partly Free, or Not Free, grounded in the Universal Declaration of Human Rights framework.",
            sourceLessonSlug: "forms-freedomhouse-eiu",
          },
          {
            prompt: "The EIU Democracy Index is distinctive for including the category:",
            options: [
              "Political culture",
              "Military spending",
              "National religion",
              "Population size",
            ],
            correctIndex: 0,
            explanation: "Among its five categories, political culture is one most other projects do not measure. Including it can mark down a country strong on elections but weak on democratic culture.",
            sourceLessonSlug: "forms-freedomhouse-eiu",
          },
          {
            prompt: "The EIU sorts every country into one of:",
            options: [
              "Three freedom statuses",
              "Four regime types",
              "A single -10 to +10 score",
              "Two liberal indices",
            ],
            correctIndex: 1,
            explanation: "Full democracy, flawed democracy, hybrid regime, and authoritarian regime, derived from a 0 to 10 score across five categories.",
            sourceLessonSlug: "forms-freedomhouse-eiu",
          },
          {
            prompt: "The DEEPEST reason the projects disagree is that they:",
            options: [
              "Publish in different months",
              "Employ different numbers of staff",
              "Use different data centers",
              "Define democracy differently",
            ],
            correctIndex: 3,
            explanation: "A minimalist elections-first definition and a thicker rights-included definition rank a rights-poor but election-holding country differently. The first check on any gap is whether the two measure the same concept.",
            sourceLessonSlug: "forms-why-they-disagree",
          },
          {
            prompt: "'Much apparent disagreement is threshold disagreement' means the projects:",
            options: [
              "Nearly agree but cut the line differently",
              "Disagree about basic facts on the ground",
              "Refuse to classify any country",
              "Always place a country identically",
            ],
            correctIndex: 0,
            explanation: "A country just above one project's democracy cutoff can sit just below another's, so they split on the label while barely disagreeing on the underlying country. That is Reason 4, different scales and thresholds.",
            sourceLessonSlug: "forms-why-they-disagree",
          },
          {
            prompt: "'Who codes changes the code' refers to which reason for disagreement?",
            options: [
              "Different definitions of democracy",
              "Different features being measured",
              "Different judges assigning the scores",
              "Different thresholds between categories",
            ],
            correctIndex: 2,
            explanation: "Reason 3: a crowd-plus-model, a small analyst team, and a coding scheme are different judgment processes, and on the hard in-between cases different judges reach different calls.",
            sourceLessonSlug: "forms-why-they-disagree",
          },
          {
            prompt: "The comparison literature finds the projects agree most and disagree least:",
            options: [
              "For the very largest countries",
              "At the extremes of the spectrum",
              "For the newest independent states",
              "For the wealthiest economies",
            ],
            correctIndex: 1,
            explanation: "Clear democracies and clear autocracies get similar treatment everywhere; the splits come for hybrid regimes in the middle, where an ambiguous case is genuinely read differently.",
            sourceLessonSlug: "forms-why-they-disagree",
          },
          {
            prompt: "When two projects disagree about a country, your job is to:",
            options: [
              "Explain the gap, not resolve it",
              "Declare the higher score correct",
              "Average the two into one number",
              "Discard both classifications",
            ],
            correctIndex: 0,
            explanation: "Run the four reasons as a checklist to name what drives the gap. You are not meant to resolve the disagreement; explaining it is far more useful than pretending one number is the truth, and it is the capstone.",
            sourceLessonSlug: "forms-why-they-disagree",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Hard cases: where the labels break
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "forms-hybrid-competitive-auth",
      title: "14 · Hybrid regimes and competitive authoritarianism",
      section: "Section 4 · Hard cases: where the labels break",
      body: `Section 3 ended on the finding that the indices split hardest in the middle. This section is that middle. The countries that break the neat labels are not exotic edge cases; there are a lot of them, and political scientists built new vocabulary specifically to describe them. This lesson gives you the two most important terms: **hybrid regime** and **competitive authoritarianism.**

## Why a middle category was needed

For a long time the debate ran between two boxes, democracy and authoritarianism. But by the 1990s and 2000s a large group of countries fit neither: they held **real, competitive elections and also systematically tilted the field** so the incumbents almost never lost. Calling them democracies missed the unfairness; calling them dictatorships missed the genuine competition. **The response was a set of in-between concepts**, and Larry Diamond gave the umbrella its common name: the **hybrid regime** (Diamond, 2002).

## Competitive authoritarianism: the sharpest version

The most influential precise concept came from Steven Levitsky and Lucan Way, who named **competitive authoritarianism** (Levitsky & Way, 2002, 2010). Their definition is worth holding exactly, because its precision is the point:

**A competitive authoritarian regime is one where formal democratic institutions exist and are seen as the main route to power, elections are real and seriously contested, but incumbents abuse the power of the state, control of the media, the courts, and public resources, so heavily that the competition is unfair.** The elections are not for show; oppositions sometimes win. But the playing field is tilted steeply enough that it is not a democracy either.

**Read the two halves together, because both must be true.** If elections are pure theatre, it is not competitive authoritarianism; it is plain authoritarianism. If the field is basically fair, it is a (perhaps flawed) democracy. **Competitive authoritarianism is the specific combination of real contestation and structural unfairness**, and it names a huge share of the world's genuinely ambiguous regimes.

## A related idea: illiberal democracy

A neighboring concept is Fareed Zakaria's **illiberal democracy**: a country that holds real elections but does not protect the liberal package of rights, rule of law, and limits on power (Zakaria, 1997). **Notice how illiberal democracy maps onto Section 1's two definitions.** By the minimalist, elections-first definition it counts as a democracy; by the thicker, liberal definition it does not. **The term illiberal democracy is that disagreement compressed into two words**, which is why it is so useful and so argued over.

## Why this is exactly where the indices split

Now connect it back. **A hybrid or competitive authoritarian regime is, by construction, the case the four reasons from Lesson 12 tear apart.** A definition that counts elections will rank it higher; a definition that requires a fair field and rights will rank it lower. A project measuring formal institutions sees the elections; a project measuring practice sees the tilt. And because these regimes cluster right around every project's threshold, small differences in where the line is drawn flip the label. **The hard cases are not where the measurement projects fail; they are where the projects reveal exactly what they each mean by democracy.** When you want to understand two indices, look at how they each classify the hybrid regimes, because that is where their definitions are doing the most work.

## A note on care

These are living governments, and their people experience them as home, not as data points. **Treat a classification as a claim about a system's institutions, argued from evidence, not as an insult to a country or its citizens**, and hold the same neutrality the whole course asks: report what a definition establishes, name what is contested, and do not reach past the evidence. Whether a specific present-day country is "competitive authoritarian" or "a flawed democracy" is often genuinely disputed, and the honest classification says so.

## Sources
- Levitsky, S., & Way, L. A. (2002). The rise of competitive authoritarianism. Journal of Democracy, 13(2), 51-65.
- Levitsky, S., & Way, L. A. (2010). Competitive authoritarianism: Hybrid regimes after the Cold War. Cambridge University Press.
- Diamond, L. (2002). Thinking about hybrid regimes. Journal of Democracy, 13(2), 21-35.
- Zakaria, F. (1997). The rise of illiberal democracy. Foreign Affairs, 76(6), 22-43.`,
      recallContent: [
        {
          prompt: "Name the four structural reasons the rankings diverge.",
          answer: "1) They define democracy differently (elections-first vs rights-included). 2) They measure different things (freedom, core institutions, political culture, hundreds of practices). 3) Different people or models assign the scores (expert crowd, analyst team, coding scheme, surveys). 4) Different scales and thresholds, so cases near a cutoff get sorted differently.",
        },
        {
          prompt: "What empirical pattern does the comparison literature find, and why is it not a flaw?",
          answer: "The projects agree strongly at the extremes (clear democracies and clear autocracies) and disagree most in the middle (hybrid regimes mixing real elections with serious unfairness). It is not a flaw but the true shape of the problem: the middle is genuinely ambiguous, and honest measures on different definitions read an ambiguous case differently.",
        },
        {
          prompt: "When two projects disagree about a country, what should you do with the four reasons?",
          answer: "Run them as a checklist: different definitions, different features measured, different judges coding, or a threshold split? Usually one or two explain the whole gap. You are not meant to resolve the disagreement, only to explain it by naming which reason drives it, which is the capstone task.",
        },
      ],
    },
    {
      slug: "forms-one-party-and-names",
      title: "15 · One-party states and the gap between a name and a classification",
      section: "Section 4 · Hard cases: where the labels break",
      body: `This lesson takes on a specific trap: **a country's official name and self-description are not a classification, and sometimes they are close to the opposite of one.** Learning to hold a state's own words apart from an evidence-based classification is a core skill, and it comes up most sharply with one-party states, many of which describe themselves as democratic.

## The trap: a name is a claim, not a finding

States name themselves, and the name is chosen by the government, so it is a **self-description**, exactly the kind of claim Section 1 told you to unfold and check rather than accept. **Many governments that the measurement projects classify as authoritarian include "democratic," "people's," or "republic" in their official names.** The word in the title is asserting something; whether the assertion holds is a separate question answered by evidence, not by reading the letterhead.

**The safest illustration is a state that no longer exists**, so nothing turns on a current dispute. The **German Democratic Republic (East Germany, 1949 to 1990)** called itself democratic in its very name and was, on the evidence, a one-party socialist state controlled by a single ruling party, not a democracy in any of Section 1's senses. **The word "Democratic" in the name did no descriptive work at all**; it was aspirational or rhetorical. That gap, between the name and the classification, is the whole lesson, and it recurs with living states whose names likewise contain democratic language. **For any current state, the rule is the same: read the classification from the evidence and the current reports, not from the country's chosen name.**

## What a one-party state actually is

A **one-party state** is a system in which a single party holds power by law or in effect, and no genuine competition for power through other parties is permitted. The key point for classification is that **elections can still occur in a one-party state, but they do not offer a real choice that could remove the ruling party.** That is what separates it from a competitive system.

**Connect this to the minimalist definition from Section 1.** The minimalist, elections-first test of democracy was: can incumbents actually lose and leave? **A one-party state fails that test even when it holds elections**, because the elections are structured so the ruling party cannot lose power through them. So one-party states are generally classified as authoritarian by every project, minimalist and thick alike, which is why they are a clearer case than the hybrid regimes of the last lesson. **The hard part is not classifying them; it is refusing to let the official name do the classifying.**

## Why some one-party states use the language of democracy

Without endorsing or attacking any specific government, it is worth understanding the pattern neutrally: **many one-party and authoritarian states genuinely claim to embody a form of democracy**, often arguing that their single party represents the people's real interests better than competitive elections would, or invoking a different theory of democracy (for example "people's democracy" or a party that claims to fuse with the nation). **You do not have to accept that claim to take it seriously as a claim.** The scholarly and index response is consistent: apply a stated definition and stated evidence, and if the system does not let the people remove their rulers through a fair contest, it is not classified as a democracy regardless of the theory offered. **Report the state's self-understanding accurately, then classify by the evidence, and keep the two clearly apart.**

## The rule to carry

**A state's name, its constitution's preamble, and its official self-description are evidence about what it claims, not about what it is.** Sometimes they match the classification; sometimes they are opposite to it. **The moment you let the name settle the classification, you have stopped doing the course's one skill**, which is checking the claim against the evidence. Hold the name at arm's length, always.

## Sources
- Linz, J. J. (2000). Totalitarian and authoritarian regimes. Lynne Rienner.
- Brooker, P. (2014). Non-democratic regimes (3rd ed.). Palgrave Macmillan.
- Przeworski, A., Alvarez, M. E., Cheibub, J. A., & Limongi, F. (2000). Democracy and development. Cambridge University Press.`,
      recallContent: [
        {
          prompt: "Define competitive authoritarianism (Levitsky and Way), holding both halves.",
          answer: "A regime where formal democratic institutions exist and are the main route to power and elections are real and seriously contested (oppositions sometimes win), BUT incumbents abuse state power, media, courts, and public resources so heavily that the competition is unfair. Both halves must hold: pure-theatre elections are plain authoritarianism, a fair field is a (flawed) democracy.",
        },
        {
          prompt: "What is 'illiberal democracy' (Zakaria), and how does it map onto Section 1's two definitions?",
          answer: "A country that holds real elections but does not protect the liberal package of rights, rule of law, and limits on power. By the minimalist elections-first definition it counts as a democracy; by the thicker liberal definition it does not. The term is that very disagreement compressed into two words.",
        },
        {
          prompt: "Why are hybrid and competitive authoritarian regimes exactly where the indices split?",
          answer: "By construction they combine real elections with structural unfairness, so an elections-counting definition ranks them higher and a fair-field-and-rights definition ranks them lower; a formal-rules index sees the elections, a practice index sees the tilt; and they cluster around every threshold, so small line-drawing differences flip the label. The hard cases reveal what each project means by democracy.",
        },
      ],
    },
    {
      slug: "forms-labels-hide-reality",
      title: "16 · When the label and the reality come apart",
      section: "Section 4 · Hard cases: where the labels break",
      body: `The last hard-cases lesson pulls the section's lesson to its sharpest point: **the formal label a country wears and how it actually works can point in opposite directions, in BOTH directions.** A government that looks authoritarian on paper can be a working democracy, and a government that looks democratic on paper can be an autocracy in practice. This is the final reason a single label is never a verdict.

## Direction one: looks less democratic on paper, is a democracy in practice

The clearest example is the one from Section 2: a **constitutional monarchy.** On paper it has an unelected, hereditary head of state, which sounds pre-democratic. In practice the monarch is ceremonial and an elected parliament holds power, so the country functions as a full parliamentary democracy. **The formal feature (a crown) points one way; the working reality (elected government) points the other, and the reality is what the classification follows.** A reader who stopped at "it has a king or queen" would misjudge it completely.

The same direction appears with the word "republic." A state can carry "republic" in its name (no monarch, in principle public rule) and be an autocracy, and a monarchy next door can be more democratic in practice. **The formal label ran ahead of the reality, and the reality is what matters.**

## Direction two: looks democratic on paper, is an autocracy in practice

This is the more dangerous direction, and it is where Section 4's earlier lessons live. A country can have a democratic constitution, regular elections, a parliament, and a bill of rights **on paper**, and still be, in practice, a competitive authoritarian regime or an electoral autocracy where the elections cannot remove the rulers. **V-Dem's category "electoral autocracy" names exactly this: a state with the outer forms of electoral democracy whose elections are not free and fair enough to make it a democracy** (Luhrmann et al., 2018). The forms are present; the substance is absent.

## The skill: read practice, not just the parchment

Put both directions together and the rule is one sentence: **classify a government by how power actually works there, not by the formal features it displays.** This is why the measurement projects work so hard to code **practice**, whether elections are actually fair, whether courts are actually independent, whether the press can actually criticize, rather than just reading the constitution. A constitution can promise everything and deliver nothing, or look austere and house a thriving democracy. **The parchment is evidence; the practice is the finding.**

| The formal label says | The reality can be | The lesson |
|---|---|---|
| Monarchy (a crown) | A full parliamentary democracy | Forms can understate democracy |
| Republic / "democratic" in the name | An autocracy in practice | Names can overstate democracy |
| A democratic constitution on paper | An electoral autocracy | Substance, not text, decides |

## Where this leaves you for the capstone

You now have the whole course. **The classical vocabulary (Section 2) names the formal features. The measurement projects (Section 3) try to score the practice. The hard cases (Section 4) are where formal features and practice come apart, and where the projects disagree because the reality is genuinely ambiguous.** The capstone puts it to work: you take one real country, look at how two different projects classify it, and explain the gap using everything here, the definitions, the four reasons, and the discipline of reading practice over parchment and evidence over names. **You are not going to decide the country's one true label. You are going to explain, precisely, why two careful projects see it differently, which is the honest and the harder thing.**

## Sources
- Luhrmann, A., Tannenberg, M., & Lindberg, S. I. (2018). Regimes of the World (RoW): Opening new avenues for the comparative study of political regimes. Politics and Governance, 6(1), 60-77.
- Levitsky, S., & Way, L. A. (2010). Competitive authoritarianism: Hybrid regimes after the Cold War. Cambridge University Press.
- Bogdanor, V. (1995). The monarchy and the constitution. Oxford University Press.`,
      recallContent: [
        {
          prompt: "Why is a country's official name a trap for classification, and what safe example shows it?",
          answer: "A name is a government-chosen self-description, a claim to be checked, not a finding. Many states the projects classify as authoritarian include 'democratic,' 'people's,' or 'republic' in their names. The safe example is the defunct German Democratic Republic (East Germany, 1949-1990): democratic in name, a one-party socialist state on the evidence. The word did no descriptive work.",
        },
        {
          prompt: "How does a one-party state fail even the minimalist definition of democracy?",
          answer: "The minimalist test is whether incumbents can actually lose and leave through fair competition. A one-party state permits no genuine competition from other parties, so even when it holds elections they cannot remove the ruling party. It fails the test whether you use the minimalist or the thicker definition, which is why it is a clearer case than a hybrid regime.",
        },
        {
          prompt: "How should you treat a one-party state's own claim to be a democracy?",
          answer: "Report the self-understanding accurately and take it seriously as a claim, but classify by a stated definition and stated evidence: if the system does not let the people remove their rulers through a fair contest, it is not classified as a democracy regardless of the theory offered. Keep the state's words and the evidence-based classification clearly apart.",
        },
      ],
    },
    {
      slug: "forms-quiz-hard-cases",
      title: "17 · Quiz: the hard cases",
      section: "Section 4 · Hard cases: where the labels break",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A 'hybrid regime' (Diamond's umbrella term) names a country that:",
            options: [
              "Has no elections whatsoever",
              "Is clearly a full democracy",
              "Mixes real elections with unfairness",
              "Is ruled by a hereditary king",
            ],
            correctIndex: 2,
            explanation: "Hybrid regimes hold real, competitive elections and also tilt the field so incumbents rarely lose. Calling them democracies misses the unfairness; calling them dictatorships misses the competition.",
            sourceLessonSlug: "forms-hybrid-competitive-auth",
          },
          {
            prompt: "In competitive authoritarianism (Levitsky and Way), BOTH of these are true:",
            options: [
              "Elections are real, but the field is tilted",
              "There are no parties and no votes",
              "The field is fair and rights are secure",
              "A monarch holds all governing power",
            ],
            correctIndex: 0,
            explanation: "Formal democratic institutions exist and elections are seriously contested (oppositions sometimes win), but incumbents abuse state power so heavily the competition is unfair. Both halves must hold.",
            sourceLessonSlug: "forms-hybrid-competitive-auth",
          },
          {
            prompt: "If a regime's elections are pure theatre, Levitsky and Way would call it:",
            options: [
              "A flawed but real democracy",
              "Plain authoritarianism",
              "Competitive authoritarianism",
              "An illiberal democracy",
            ],
            correctIndex: 1,
            explanation: "Competitive authoritarianism requires REAL contestation plus structural unfairness. If elections are pure theatre, the competitive half is missing and it is plain authoritarianism.",
            sourceLessonSlug: "forms-hybrid-competitive-auth",
          },
          {
            prompt: "Zakaria's 'illiberal democracy' describes a country that has:",
            options: [
              "No elections but strong courts",
              "A monarch and a noble class",
              "Neither elections nor any rights",
              "Real elections but weak rights",
            ],
            correctIndex: 3,
            explanation: "It holds real elections but does not protect the liberal package of rights, rule of law, and limits on power. It is a democracy by the minimalist definition and not by the thicker one.",
            sourceLessonSlug: "forms-hybrid-competitive-auth",
          },
          {
            prompt: "Hybrid regimes are exactly where the indices split because they:",
            options: [
              "Are always the largest countries",
              "Cluster around every project's threshold",
              "Refuse to publish any data",
              "Have no constitution at all",
            ],
            correctIndex: 1,
            explanation: "They combine real elections with unfairness, so different definitions rank them differently, and they sit near every cutoff, so small line-drawing differences flip the label.",
            sourceLessonSlug: "forms-hybrid-competitive-auth",
          },
          {
            prompt: "A country's official name (for example, one containing 'democratic') is best treated as:",
            options: [
              "A verified classification",
              "A ruling by the United Nations",
              "A claim to be checked",
              "Proof of free elections",
            ],
            correctIndex: 2,
            explanation: "A name is a government-chosen self-description, exactly the kind of claim to unfold and check against evidence rather than accept. Many authoritarian states include 'democratic' in their names.",
            sourceLessonSlug: "forms-one-party-and-names",
          },
          {
            prompt: "The course uses the defunct German Democratic Republic to show that:",
            options: [
              "The name did no descriptive work",
              "East Germany was a real democracy",
              "All republics are authoritarian",
              "Names always match the reality",
            ],
            correctIndex: 0,
            explanation: "East Germany (1949-1990) was 'democratic' in name and a one-party socialist state on the evidence. A safely historical case where the name and the classification came apart.",
            sourceLessonSlug: "forms-one-party-and-names",
          },
          {
            prompt: "A one-party state fails the minimalist test of democracy because its elections:",
            options: [
              "Are held far too frequently",
              "Cannot remove the ruling party",
              "Are open to every party equally",
              "Are supervised by outside judges",
            ],
            correctIndex: 1,
            explanation: "The minimalist test asks whether incumbents can actually lose and leave. A one-party state permits no genuine competition, so its elections cannot remove the ruling party from power.",
            sourceLessonSlug: "forms-one-party-and-names",
          },
          {
            prompt: "The course says to handle a one-party state's claim to be a democracy by:",
            options: [
              "Accepting the state's own theory",
              "Ignoring the claim completely",
              "Classifying by evidence, reporting the claim",
              "Ranking it above all rivals",
            ],
            correctIndex: 2,
            explanation: "Report the self-understanding accurately and take it seriously as a claim, but classify by a stated definition and the evidence, keeping the two clearly apart.",
            sourceLessonSlug: "forms-one-party-and-names",
          },
          {
            prompt: "A constitutional monarchy shows that a formal feature can:",
            options: [
              "Understate how democratic a state is",
              "Guarantee an authoritarian state",
              "Replace the need for elections",
              "Prove the state is a theocracy",
            ],
            correctIndex: 0,
            explanation: "On paper it has an unelected hereditary head of state, but in practice the monarch is ceremonial and an elected parliament rules. The crown understates the democracy; reality is what the classification follows.",
            sourceLessonSlug: "forms-labels-hide-reality",
          },
          {
            prompt: "V-Dem's category 'electoral autocracy' names a state that:",
            options: [
              "Has no elections of any kind",
              "Is a fully liberal democracy",
              "Bans political parties outright",
              "Has election forms but unfair votes",
            ],
            correctIndex: 3,
            explanation: "It has the outer forms of electoral democracy, but its elections are not free and fair enough to make it a democracy. The forms are present; the substance is absent.",
            sourceLessonSlug: "forms-labels-hide-reality",
          },
          {
            prompt: "The one-sentence rule of the hard-cases section is: classify a government by:",
            options: [
              "The features it displays on paper",
              "The wording of its constitution",
              "The name it gives itself",
              "How power actually works there",
            ],
            correctIndex: 3,
            explanation: "Read practice, not just parchment. A constitution can promise everything and deliver nothing, or look austere and house a thriving democracy. The practice is the finding.",
            sourceLessonSlug: "forms-labels-hide-reality",
          },
          {
            prompt: "The formal label and the reality can come apart:",
            options: [
              "Only for very small countries",
              "In both directions, over- and under-stating",
              "Only toward looking more democratic",
              "Only in countries with a monarch",
            ],
            correctIndex: 1,
            explanation: "A crown can understate democracy (a real parliamentary democracy) and a democratic constitution can overstate it (an electoral autocracy). Both directions occur, which is why a label is never a verdict.",
            sourceLessonSlug: "forms-labels-hide-reality",
          },
          {
            prompt: "The projects code 'practice' rather than just the constitution because a constitution:",
            options: [
              "Is always written in secret",
              "Is the same in every country",
              "Cannot be read by outsiders",
              "Can promise what it never delivers",
            ],
            correctIndex: 3,
            explanation: "A constitution can promise everything and deliver nothing, so the projects work to code whether elections are actually fair, courts actually independent, and the press actually free.",
            sourceLessonSlug: "forms-labels-hide-reality",
          },
          {
            prompt: "A classification of a living government should be treated as:",
            options: [
              "An insult to the country's people",
              "A permanent, unchangeable fact",
              "A claim about institutions from evidence",
              "A statement about a nation's worth",
            ],
            correctIndex: 2,
            explanation: "It is a claim about a system's institutions argued from evidence, not an insult to a country or its citizens. Report what a definition establishes, name what is contested, and stay neutral.",
            sourceLessonSlug: "forms-hybrid-competitive-auth",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · See who measures, then classify one
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "forms-map-who-measures",
      title: "18 · Map: who measures democracy, and from where",
      section: "Section 5 · See who measures, then classify one",
      body: `**Read this before the map, because the map's limits are the lesson.** This platform draws markers as fixed-size dots on a world projection, so the coordinates below are **approximate points placed to show a pattern, not addresses.** And this map deliberately does NOT plot any country's democracy score. It plots something else: **the four institutions that produce the classifications, so you can see the answer to Section 1's first question, "who made this?", as geography.**

## What the map shows, and why that is the point

Each marker is the home of one of the four measurement projects. **Read them together and one fact stands out: all four are based in wealthy, long-established Western democracies, and three of the four are in just two countries, the United States and the United Kingdom.**

That is not an accusation; it is a fact to hold while you read any of their rankings. **The people who define and measure democracy for the world are concentrated in a few Western institutions**, and scholars have argued this vantage point shapes the choices they make (Giannone, 2010). It does not make the measures worthless, and it does not make them neutral either. It makes them what Section 1 said every classification is: **a product of a specific maker, with a specific location and purpose.** Seeing the makers clustered on the map is that idea made literal.

## What the map cannot show

**It cannot show the scores, and that is on purpose.** A map colored by each country's "democracy score" would quietly pick ONE project's classification and present it as the truth, which is the exact error this whole course exists to prevent. The plan for this path notes these comparative courses are the first content that will need a polygon (choropleth) map layer; even when that ships, a responsible version would have to show **which project's** classification it is drawing, and ideally let you switch between them to see the disagreement. **A single-source democracy map is a definition wearing the costume of a fact.** Until the layer exists that can show the disagreement honestly, this map shows the makers instead, which is the more important lesson anyway.

## What the map cannot show, part two

**It cannot show that these four are not the only measures**, only the four this course teaches. Others exist, and a full picture would add them. The four here are chosen because they are the most cited and because, between them, they illustrate every one of the four reasons for disagreement. Now go classify one country yourself, and read the actual current reports rather than any number from memory.

## Sources
- Coppedge, M., Gerring, J., Knutsen, C. H., Lindberg, S. I., Teorell, J., et al. (2024). V-Dem methodology v14. V-Dem Institute, University of Gothenburg. https://www.v-dem.net/documents/
- Giannone, D. (2010). Political and ideological aspects in the measurement of democracy: The Freedom House case. Democratization, 17(1), 68-97.
- Munck, G. L., & Verkuilen, J. (2002). Conceptualizing and measuring democracy: Evaluating alternative indices. Comparative Political Studies, 35(1), 5-34.`,
      mapContent: {
        markers: [
          {
            id: "forms-map-vdem",
            lat: 57.6969,
            lng: 11.9865,
            title: "V-Dem (University of Gothenburg, Sweden)",
            color: "#1d4ed8",
            description:
              "The Varieties of Democracy project, an academic project at the University of Gothenburg. It measures democracy in fine detail, publishing several distinct indices (electoral, liberal, participatory, deliberative, egalitarian) built from hundreds of indicators coded by thousands of country experts and combined through a statistical measurement model. Of the four, it is the only one based outside the US or UK. Coordinates are approximate points placed to show the pattern, not an address.",
          },
          {
            id: "forms-map-polity",
            lat: 38.9012,
            lng: -77.2653,
            title: "Polity project (Center for Systemic Peace, United States)",
            color: "#047857",
            description:
              "The Polity project (current version Polity5) is produced by the Center for Systemic Peace in the United States. It scores a few core institutional features (how the executive is recruited and constrained, and how open political competition is) into a single number from -10 to +10, with an autocracy, anocracy, and democracy band. Its long historical reach is its distinctive strength. Coordinates are approximate and mark the project as US-based, not an exact office.",
          },
          {
            id: "forms-map-freedom-house",
            lat: 38.9026,
            lng: -77.0353,
            title: "Freedom House (Washington, D.C., United States)",
            color: "#b45309",
            description:
              "Freedom House, a US-based organization founded in the 1940s, publishes Freedom in the World, rating political rights (up to 40) and civil liberties (up to 60) for a 0 to 100 freedom score and a Free, Partly Free, or Not Free status. Its subject is freedom, broader than elections. Scholars have critiqued its transparency and vantage point (Giannone, 2010), which is Section 1's first question applied to one project. Coordinates are approximate.",
          },
          {
            id: "forms-map-eiu",
            lat: 51.5203,
            lng: -0.0979,
            title: "EIU Democracy Index (Economist Intelligence Unit, London, UK)",
            color: "#7c3aed",
            description:
              "The Economist Intelligence Unit, the research arm of the company behind The Economist, publishes the Democracy Index: a 0 to 10 score across five categories (electoral process and pluralism, functioning of government, political participation, political culture, and civil liberties) sorting each country into full democracy, flawed democracy, hybrid regime, or authoritarian regime. It uniquely counts political culture. Coordinates are approximate points placed to show the pattern.",
          },
        ],
      },
    },
    {
      slug: "forms-capstone",
      title: "19 · Capstone: classify one country by two indices, then explain the gap",
      section: "Section 5 · See who measures, then classify one",
      lessonType: "assignment",
      body: `You have the whole course: the classical vocabulary, the four measurement projects, the four reasons they diverge, and the hard cases where they diverge most. Now use all of it on one real country. **Pick a country, find how two of the four projects currently classify it, and explain the gap between them from the published methodologies.** The finding is not a verdict on the country. **The finding is the explanation of why two careful projects see it differently.**

**One boundary before you start, and it is the heart of this course: use the CURRENT published reports, not any number from memory, including any number you think you remember from this course.** This course taught you methods on purpose and withheld scores on purpose. Your job is to go read the live classifications yourself and reason about them. Treat the country and its people with neutrality throughout: you are analyzing institutions, not judging a nation.

## The assignment

Produce a **one-page classification note** on a country of your choice. Name it, record how two different projects currently classify it (with the report and year you read), and explain the gap using the four reasons from Lesson 12. **Aim for an explanation you could defend to someone who used a different pair of projects.**

## Step 1. Pick a country where the gap is likely to be interesting

The extremes are less instructive, because the projects mostly agree there. **Choose a country somewhere in the middle**, one you suspect is a hybrid or borderline case, because that is where the projects split and where the explanation has something to chew on. If you are unsure, a country you have seen described with hedged language ("increasingly authoritarian," "a flawed democracy," "democratic backsliding") is a good candidate.

## Step 2. Read TWO projects' current classifications, from the source

Go to two of the four projects and read this year's actual result for your country. **Record four things for each:**

| Record | For each of the two projects |
|---|---|
| **The project and the report year** | e.g. "V-Dem Democracy Report 2024" |
| **The classification it gives** | The category or score, quoted from the source |
| **What that project defines/measures** | From Section 3, in your own words |
| **Who codes it** | Expert crowd, analyst team, coding scheme, survey |

**Do not use a number from this course or your memory. If you cannot access a current report, say so, and classify only what you can actually source.** A blank you label honestly is worth more than a figure you half-remember.

## Step 3. Explain the gap with the four reasons

This is the core of the capstone. If the two projects classify your country differently (or place it at noticeably different levels), **work through Lesson 12's four reasons and identify which ones drive the gap:**

1. **Different definitions?** Is one counting elections only and the other requiring rights too?
2. **Different features measured?** Does one count something (say, political culture) the other ignores?
3. **Different coders?** Could an expert crowd and an analyst team reach different calls on this ambiguous case?
4. **A threshold split?** Are the two actually close on the underlying country but divided by where each draws its category line?

**Name which reasons apply and which do not.** Usually one or two carry most of the gap. If the two projects actually agree closely, say that too, and explain why this country is NOT one of the ambiguous middle cases.

## Step 4. State what is contested, and stop there

**If the classification is genuinely disputed, say so, name exactly what is disputed, and do not invent a resolution.** You are explaining a disagreement between measures, not settling the country's "true" nature, and you are not advocating any political position about the country. Where the honest answer is "these two careful projects read this ambiguous case differently, and here is precisely why," that is a complete and correct answer, not a failure.

## Rules you do not get to break

1. **Current reports, not memory.** Every classification ties to a named report and year you actually read. No score from this course, no number from recall.
2. **No invented figure, category, or quote.** If you cannot source it, it does not go in, or it goes in flagged "not verified."
3. **Explain the gap; do not resolve it.** The deliverable is the explanation via the four reasons, not a verdict on which project is right.
4. **Neutral on the country.** Analyse institutions from evidence; do not judge a nation or advocate a political side.
5. **Keep the name apart from the classification.** The country's self-description is a claim, not your finding.

## What good looks like

A one-page note in which a country is named, two current classifications are recorded with their sources and what each project measures, and the gap between them is explained by naming which of the four reasons drive it, with contested points flagged as contested. **If you took a country you thought "just is" a democracy or "just is" an autocracy and showed, from two live reports, that the label depends on who is measuring and how, then you have done exactly what this course set out to teach: you learned to read a classification as an argument, not a fact.**

## Sources
- Munck, G. L., & Verkuilen, J. (2002). Conceptualizing and measuring democracy: Evaluating alternative indices. Comparative Political Studies, 35(1), 5-34.
- Coppedge, M., Gerring, J., Knutsen, C. H., Lindberg, S. I., Teorell, J., et al. (2024). V-Dem methodology v14. V-Dem Institute, University of Gothenburg. https://www.v-dem.net/documents/
- Hogstrom, J. (2013). Does the choice of democracy measure matter? Comparisons between the two leading democracy indices, Freedom House and Polity IV. Government and Opposition, 48(2), 201-221.`,
    },
  ],
};
