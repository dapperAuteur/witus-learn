// Authored "Governments Without States" — course 7 of Path A ("Who Has the Power? Governments From
// the Block to the Globe"), planned in plans/46-structures-paths-government-and-business.md
// (Path A, table row 7).
//
// WHAT THIS COURSE IS
// -------------------
// The course about governance that happens in bodies that are NOT sovereign states. It runs the
// method course's question ("find the instrument, then find its source": which body acted, under
// what authority, where the power comes from, who can overturn it) against authorities that sit
// ABOVE the state (the EU, the UN, the African Union), authorities whose very statehood is
// CONTESTED (unrecognised and contested states, and the recognition question underneath them), and
// authorities that sit BESIDE and BELOW the state without being government at all (HOAs, housing
// co-ops, unions, mutual-aid networks). That last section is the deliberate HAND-OFF to Path B
// ("How a Business Is Formed"), because a self-governing community holds its power through an entity
// and an instrument (a covenant, a corporate charter, a union constitution), which is exactly the
// subject Path B teaches in full. It is comparative civics / international-law content, written to a
// standard of precision, and it says plainly that it teaches how to READ authority and is NOT legal
// advice, and (for the contested-states section) NOT political advocacy.
//
// RELATIONSHIP TO OTHER SHIPPED COURSES IN THIS PATH (do not contradict)
// ---------------------------------------------------------------------
//   * Course 1, "Who Has the Power to Do This?", shipped the METHOD (the four questions), the
//     vertical stack, and the point that TRIBAL NATIONS are a separate sovereign off the ladder.
//     This course treats course 1 as its prerequisite and reuses the four questions on every page.
//   * Course 4, "The Middle Layer", taught ENTRENCHED versus DELEGATED for subnational units
//     (US state vs Scotland). This course does NOT re-teach that. It goes the other direction, to
//     bodies that are not on the national/subnational ladder at all: supranational, contested, and
//     private/communal. Where course 4 asked "on what terms does a region hold power under a state?",
//     this course asks "where does a body that is NOT a sovereign state get power over anyone?"
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * Treaties and conventions are cited by official name, article, and year (authoritative on their
//     own, like a court reporter), with a stable official host where the URL pattern is confirmed.
//     Court of Justice of the EU cases are cited by case number and date; US cases by reporter.
//   * CONTESTED STATES ARE TAUGHT NEUTRALLY. The course describes the recognition DISAGREEMENT,
//     attributes each claim to who makes it, reports documented facts flatly (a declaration was made
//     on date X; the ICJ issued opinion Y; the General Assembly passed resolution Z), and refuses to
//     declare any contested territory's status settled. It says out loud that it is not political
//     advocacy and does not adjudicate any sovereignty dispute.
//   * Verified specifics used: Montevideo Convention (1933), art. 1 (the four criteria) and art. 3
//     (the declarative principle); the EEC Treaty of Rome (1957), the Maastricht Treaty on European
//     Union (1992), the Treaty of Lisbon (2007); Van Gend en Loos, Case 26/62 (1963) and Costa v
//     ENEL, Case 6/64 (1964); the UN Charter (1945), arts. 2(1), 4, 25; the OAU (1963) and the AU
//     Constitutive Act (adopted 2000, in force 2001, AU launched 2002); the ICJ Kosovo advisory
//     opinion (22 July 2010); UN General Assembly Resolution 67/19 (2012) on Palestine's observer
//     status; Marsh v. Alabama, 326 U.S. 501 (1946); the NLRA (1935) exclusive-representation rule;
//     the Rochdale Pioneers (1844). Where a precise figure could not be verified, the concept is
//     taught without a fabricated citation.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens only. Verbatim cited titles inside
// a `## Sources` block are the only place a dash may survive.

import type { AuthoredCourse } from "./authored-course";

export const GOVERNMENTS_WITHOUT_STATES_COURSE: AuthoredCourse = {
  title: "Governments Without States",
  description:
    "Course 7 of the path whose method course, Who Has the Power to Do This?, taught the four questions (who acted, under what authority, where the power comes from, who can overturn it) and the vertical stack of national and subnational government. This course is about the authority that stack leaves out: governance that happens in bodies that are NOT sovereign states. It opens with the question underneath the whole subject, what even makes a state a state, teaching the Montevideo Convention's four criteria (1933) and the long argument between the declarative and constitutive theories of recognition. Then it climbs above the state to the supranational bodies: the European Union, which is neither a country nor an ordinary treaty organization but its own autonomous legal order (Van Gend en Loos, 1963; Costa v ENEL, 1964); the United Nations, an organization of sovereign equals rather than a world government (UN Charter, 1945); and the African Union (2002), successor to the OAU. Then it turns to the hardest case, unrecognised and contested states, taught neutrally: the course describes the recognition disagreement, attributes each claim, reports the documented facts, and does not adjudicate anyone's status. Finally it comes down BELOW the state to self-governing communities, the homeowners association that governs by covenant, the housing co-op that governs by membership, the union that governs by collective bargaining, and the mutual-aid network that governs by voluntary agreement, which is the hand-off to the business path, because each holds its power through an entity and an instrument rather than through sovereignty. It closes with a capstone: find a body with real authority over someone that is not a sovereign state, and map where its power comes from. This course teaches how to read authority. It is not legal advice, and it does not take sides in any sovereignty dispute.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · What even is a state?
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gws-what-this-is",
      title: "1 · Governance without a state, and what this course is not",
      section: "Section 1 · What even is a state?",
      body: `Every course in this path so far has been about states, and about the governments that sit inside them: the nation at the top of the stack, the states or provinces in the middle, the cities and districts at the bottom, and (off the ladder entirely) the tribal nations. This course is about the authority that stack leaves out. **Real power over real people is exercised every day by bodies that are not sovereign states at all.**

Some of those bodies sit ABOVE the state. The European Union writes law that binds inside its member countries. The United Nations Security Council can authorise force. Some are contested: an entity that governs a territory and a population, yet whose very statehood other governments dispute. And some sit BESIDE or BELOW the state, close to the ground: a homeowners association that can fine you and put a lien on your house, a housing co-operative that decides who may live in the building, a union that bargains the terms of your job, a mutual-aid network that organises who gets help. **None of those is a sovereign state, and all of them govern.**

## First, the boundary. This is not legal advice.

**This course teaches how to READ the authority of bodies that are not states. It is not legal advice, and it cannot tell you whether any particular action was lawful.** It creates no lawyer-client relationship. It teaches the questions a lawyer, a journalist, or an organiser asks first, so you can open a treaty, a charter, or a covenant and get oriented.

## A second boundary this course needs more than the others. This is not political advocacy.

Section 3 is about unrecognised and contested states, which are among the most charged disputes in world politics. **This course does not take sides in any of them.** Its job is to explain how the recognition question WORKS, to report documented facts (a declaration was made on a date; a court issued an opinion; an assembly passed a resolution), to attribute every contested claim to whoever makes it, and to leave the underlying status genuinely open, because it is. If you want the course to declare who is right, it will decline, on purpose.

## The method still works, which is the whole point

Course 1 gave you four questions to ask of any government action: **who acted, under what authority, where the power comes from, and who can overturn it.** The surprising thing about this course is that **the method does not break when you leave sovereign states behind.** A body without a state still acts under some authority, and that authority still traces to a document you can read:

| A body without a state | Where its power traces |
|---|---|
| The European Union | Its founding treaties, and its own legal order built on them |
| The United Nations | The UN Charter, a treaty among sovereign states |
| A contested state | Effective control on the ground, with recognition disputed |
| A homeowners association | A recorded covenant and the state's contract and property law |
| A union | A federal labor statute and the union's own constitution |

**Read the right-hand column as the spine of the course.** For every body we meet, the question is the same one course 1 asked of a city council: find the instrument, then find its source. What changes is that the source is a treaty, a covenant, or a recognition dispute, instead of a state constitution.

## Where this course goes

**(1)** The question underneath everything: what even makes a state a state (the Montevideo criteria, and the recognition argument). **(2)** Governance above the state: the EU, the UN, the African Union. **(3)** The hardest case, unrecognised and contested states, taught neutrally. **(4)** Governance beside and below the state: HOAs, co-ops, unions, mutual aid, which hands you off to the business path. Then you find one such body yourself and map where its power comes from.

## Sources
- Montevideo Convention on the Rights and Duties of States, art. 1 (1933). https://avalon.law.yale.edu/20th_century/intam03.asp
- Charter of the United Nations, art. 2(1) (1945). https://www.un.org/en/about-us/un-charter/full-text`,
    },
    {
      slug: "gws-montevideo",
      title: "2 · What makes a state a state: the Montevideo criteria",
      section: "Section 1 · What even is a state?",
      body: `Before you can study bodies that are NOT states, you need a working definition of the thing they are not. The most cited one is short, old, and came out of the Americas. **In 1933, at the Seventh International Conference of American States in Montevideo, Uruguay, the assembled states signed the Montevideo Convention on the Rights and Duties of States**, and its first article gives the definition that international lawyers still reach for first (Montevideo Convention, 1933, art. 1).

## The four criteria, in the Convention's own words

Article 1 says: "The state as a person of international law should possess the following qualifications." Then it lists four:

| # | Criterion | What it means in practice |
|---|---|---|
| 1 | **A permanent population** | People who live there on a settled basis, of any size |
| 2 | **A defined territory** | Land with borders, even if some borders are disputed |
| 3 | **A government** | An authority actually running the place |
| 4 | **Capacity to enter into relations with the other states** | The ability to conduct foreign affairs |

**Learn these four, because the rest of Section 1 turns on them.** The first three are about facts on the ground: are there people, is there territory, is someone governing. The fourth is subtler, and it is where the trouble starts, because "capacity to enter into relations with other states" depends partly on whether other states will actually deal with you.

## What the criteria deliberately leave out

Read the list again and notice what is NOT on it. **The Convention does not require a minimum size, a particular kind of government, a stable border, or the approval of any other country.** A microstate with a few thousand people qualifies on population. A state with a contested border can still have a "defined territory," because the criterion asks for territory, not for undisputed territory. And crucially, **nothing in Article 1 says a state must be recognized by anyone.** That omission is not an accident, and the next article makes it explicit.

## Article 3: statehood as a fact, not a permission

The Convention goes on, in Article 3, to state a principle that will run through this whole course: **"The political existence of the state is independent of recognition by the other states."** (Montevideo Convention, 1933, art. 3.) On this view, a state that meets the four criteria simply IS a state, whether or not its neighbors acknowledge it, the way a mountain is a mountain whether or not anyone has mapped it. **That is a bold claim, and it is contested**, which is exactly why the next lesson exists. For now, hold the Convention's own position: statehood is something you HAVE by meeting the criteria, not something you are GIVEN by being recognized.

## The honest caveat about Montevideo

Two precisions, because this course does not launder a tidy rule. First, **the Montevideo Convention was a regional treaty, signed by American states**, not a global statute, though its Article 1 definition has been so widely cited that it is treated as a statement of customary criteria far beyond the Americas. Second, **scholars disagree about whether the four criteria are sufficient**, and many argue that in the real world recognition matters much more than Montevideo admits. So use Montevideo as the starting definition every discussion begins from, not as the last word. The last word, if there is one, is the argument in the next lesson.

## Sources
- Montevideo Convention on the Rights and Duties of States, arts. 1, 3 (1933). https://avalon.law.yale.edu/20th_century/intam03.asp`,
      recallContent: [
        {
          prompt: "What is this course about, in one sentence, and how does it relate to the method from course 1?",
          answer: "It is about governance exercised by bodies that are NOT sovereign states (above, contested, and beside/below the state). The course 1 method still works: every such body acts under some authority that traces to a readable instrument (a treaty, a charter, a covenant), so you still find the instrument, then find its source.",
        },
        {
          prompt: "Name the two boundaries this course states about itself.",
          answer: "It is not legal advice (it teaches how to read authority, creates no lawyer-client relationship, and cannot say whether an action was lawful), and it is not political advocacy (it does not take sides in any recognition or sovereignty dispute; it explains how the recognition question works and leaves contested status open).",
        },
        {
          prompt: "For a body without a state, what does the course say you should still look for?",
          answer: "The same thing as for a city council: the instrument and its source. The EU traces to its treaties and its own legal order, the UN to the Charter, a contested state to effective control with recognition disputed, an HOA to a recorded covenant and state law, a union to a labor statute plus its own constitution.",
        },
      ],
    },
    {
      slug: "gws-recognition",
      title: "3 · Recognition: the declarative and constitutive theories",
      section: "Section 1 · What even is a state?",
      body: `The Montevideo Convention says a state's existence is "independent of recognition." A great many governments and scholars have never fully accepted that. **The disagreement has a name on each side, and learning the two names is the single most useful thing in Section 1**, because every contested state in Section 3 is an argument between these two positions. Where authorities disagree, the disagreement is the lesson.

## The declarative theory: recognition just acknowledges a fact

The **declarative theory** is Montevideo's own position. It holds that **statehood is a question of fact: an entity becomes a state the moment it meets the criteria, and recognition by other states merely ACKNOWLEDGES a state that already exists.** Recognition, on this view, is like a birth certificate. The certificate records the birth; it does not cause it. A declarativist looks at an entity with a population, a territory, a government, and the capacity to conduct foreign affairs, and says: this is a state, and other countries recognizing it only confirm what is already true.

## The constitutive theory: recognition helps MAKE the state

The **constitutive theory** holds the opposite. It says that **an entity becomes a state, as a full subject of international law, only insofar as it is RECOGNIZED by existing states.** Recognition does not acknowledge a fact; it helps constitute the fact. On this view, meeting the four criteria is necessary but not enough. Until the community of states accepts you, you are not yet fully a state in the eyes of the law, however effectively you govern. **The constitutivist looks at the same effective entity and says: it may govern, but whether it is a STATE depends on whether others treat it as one.**

## The two theories, side by side

| | Declarative theory | Constitutive theory |
|---|---|---|
| **What makes a state** | Meeting the criteria (a fact) | Meeting the criteria AND being recognized |
| **What recognition does** | Acknowledges an existing state | Helps bring the state into legal being |
| **Montevideo says** | This (art. 3) | Not this |
| **The weakness critics point to** | Ignores how much recognition matters in reality | Lets existing states gatekeep who counts |

## Why neither side simply wins

Each theory has a serious problem, and an honest course names both. **The declarative theory struggles with reality:** an entity that meets every Montevideo criterion but that no other state will deal with cannot open an embassy, join most organizations, sign most treaties, or borrow from most banks, so calling it a full state feels hollow. **The constitutive theory struggles with fairness and logic:** if recognition makes a state, then existing states are gatekeepers who can deny statehood for political reasons, and an entity could be a state to the countries that recognize it and not a state to the ones that do not, which is a strange thing for a fact of law to be.

**Most modern practice sits somewhere in between.** It leans declarative in principle (Montevideo's criteria are the starting test) while admitting that recognition has enormous practical weight, so an unrecognised entity may satisfy the criteria and still be locked out of the things statehood is supposed to buy. **That messy middle is not a failure to decide. It is the actual state of the law**, and Section 3 is where you will watch it operate on real, disputed cases, always attributing claims and never pretending the argument is settled.

## Sources
- Montevideo Convention on the Rights and Duties of States, art. 3 (1933). https://avalon.law.yale.edu/20th_century/intam03.asp`,
      recallContent: [
        {
          prompt: "Name the four Montevideo criteria for statehood.",
          answer: "A permanent population, a defined territory, a government, and the capacity to enter into relations with the other states (Montevideo Convention, 1933, art. 1).",
        },
        {
          prompt: "What does the Montevideo Convention's Article 3 say about recognition, and what theory does that express?",
          answer: "'The political existence of the state is independent of recognition by the other states.' That is the declarative theory: a state exists by meeting the criteria, and recognition only acknowledges it.",
        },
        {
          prompt: "What does Montevideo deliberately leave OUT of the definition of a state?",
          answer: "Any requirement of a minimum size, a particular form of government, an undisputed border, or the approval of any other country. Nothing in Article 1 requires recognition.",
        },
      ],
    },
    {
      slug: "gws-quiz-statehood",
      title: "4 · Quiz: what even is a state?",
      section: "Section 1 · What even is a state?",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "This course is about governance exercised by:",
            options: [
              "The three branches of one national government",
              "Bodies that are not sovereign states at all",
              "Only the fifty states of the United States",
              "Cities and counties inside a single nation",
            ],
            correctIndex: 1,
            explanation: "It covers authority above the state (the EU, UN, AU), contested states, and communities beside or below the state (HOAs, co-ops, unions, mutual aid), none of which is a sovereign state.",
            sourceLessonSlug: "gws-what-this-is",
          },
          {
            prompt: "Besides 'not legal advice', the second boundary this course states is that it is:",
            options: [
              "Not political advocacy in any dispute",
              "Not available to non-citizen learners",
              "Not concerned with any real country",
              "Not a course about any government body",
            ],
            correctIndex: 0,
            explanation: "The contested-states section is charged, so the course explains how recognition works, attributes claims, reports documented facts, and refuses to take sides.",
            sourceLessonSlug: "gws-what-this-is",
          },
          {
            prompt: "The course's central claim about the four-question method is that it:",
            options: [
              "Applies only to sovereign nation-states",
              "Must be replaced for supranational bodies",
              "Still works for bodies without a state",
              "Was disproved by the Montevideo treaty",
            ],
            correctIndex: 2,
            explanation: "A body without a state still acts under some authority that traces to a readable instrument, so you still find the instrument, then find its source.",
            sourceLessonSlug: "gws-what-this-is",
          },
          {
            prompt: "The Montevideo Convention that gives the standard definition of a state was signed in:",
            options: [
              "The city of Geneva in the year 1919",
              "The city of San Francisco in 1945",
              "The city of Vienna in the year 1961",
              "The city of Montevideo in the year 1933",
            ],
            correctIndex: 3,
            explanation: "It was signed in 1933 at the Seventh International Conference of American States in Montevideo, Uruguay. Its Article 1 definition is now cited far beyond the Americas.",
            sourceLessonSlug: "gws-montevideo",
          },
          {
            prompt: "Which set correctly lists all four Montevideo criteria for statehood?",
            options: [
              "Population, territory, government, foreign-relations capacity",
              "Population, army, currency, and a national flag",
              "Territory, a written constitution, its courts, and taxes",
              "A seat at the UN, borders, elections, a central bank",
            ],
            correctIndex: 0,
            explanation: "Article 1 lists a permanent population, a defined territory, a government, and the capacity to enter into relations with other states. Nothing about armies, currency, or a UN seat.",
            sourceLessonSlug: "gws-montevideo",
          },
          {
            prompt: "According to Montevideo, a valid 'defined territory' requires that the state's borders be:",
            options: [
              "Approved by all of its close neighbors",
              "Drawn by an international court order",
              "Present, even if some are disputed",
              "Larger than a stated minimum area",
            ],
            correctIndex: 2,
            explanation: "The criterion asks for territory, not undisputed territory. A state with a contested border can still satisfy it, and there is no minimum size.",
            sourceLessonSlug: "gws-montevideo",
          },
          {
            prompt: "Montevideo's Article 3 states that a state's political existence is:",
            options: [
              "Granted by a vote of the United Nations",
              "Independent of recognition by other states",
              "Dependent on approval from its region",
              "Decided by the strongest nearby power",
            ],
            correctIndex: 1,
            explanation: "'The political existence of the state is independent of recognition by the other states.' That sentence is the declarative theory in the treaty text.",
            sourceLessonSlug: "gws-montevideo",
          },
          {
            prompt: "The DECLARATIVE theory of recognition holds that recognition:",
            options: [
              "Creates a brand-new state from nothing",
              "Is required before a state can exist",
              "Can be withdrawn to abolish a state",
              "Only acknowledges a state that exists",
            ],
            correctIndex: 3,
            explanation: "On the declarative view, statehood is a fact established by meeting the criteria; recognition is like a birth certificate that records a birth rather than causing it.",
            sourceLessonSlug: "gws-recognition",
          },
          {
            prompt: "The CONSTITUTIVE theory of recognition holds that an entity becomes a full state:",
            options: [
              "The instant it meets the four criteria",
              "Only insofar as existing states recognize it",
              "As soon as it declares its own independence",
              "Whenever its population votes to become one",
            ],
            correctIndex: 1,
            explanation: "On the constitutive view, meeting the criteria is necessary but not enough; recognition by existing states helps bring the state into legal being.",
            sourceLessonSlug: "gws-recognition",
          },
          {
            prompt: "The main criticism of the CONSTITUTIVE theory is that it:",
            options: [
              "Lets existing states gatekeep who counts",
              "Ignores territory and population entirely",
              "Makes recognition completely meaningless",
              "Requires a state to have a large army",
            ],
            correctIndex: 0,
            explanation: "If recognition makes a state, existing states can deny statehood for political reasons, and an entity could be a state to some countries and not to others, an odd thing for a fact of law.",
            sourceLessonSlug: "gws-recognition",
          },
          {
            prompt: "The main criticism of the DECLARATIVE theory is that it:",
            options: [
              "Depends on approval by other countries",
              "Contradicts the Montevideo Convention",
              "Understates how much recognition matters",
              "Requires a state to have fixed borders",
            ],
            correctIndex: 2,
            explanation: "An entity meeting every criterion but which no state will deal with cannot open embassies, join organizations, or borrow abroad, so calling it a full state feels hollow.",
            sourceLessonSlug: "gws-recognition",
          },
          {
            prompt: "The course says modern practice on recognition mostly:",
            options: [
              "Fully adopts the constitutive theory alone",
              "Rejects the Montevideo criteria completely",
              "Has settled the debate once and for all",
              "Sits between the two theories, unresolved",
            ],
            correctIndex: 3,
            explanation: "Practice leans declarative in principle while admitting recognition has enormous practical weight. That messy middle is the actual state of the law, not a failure to decide.",
            sourceLessonSlug: "gws-recognition",
          },
          {
            prompt: "The Montevideo Convention itself is best described as originally:",
            options: [
              "A binding global statute on all nations",
              "A regional treaty signed by American states",
              "A ruling of the International Court",
              "A resolution of the UN General Assembly",
            ],
            correctIndex: 1,
            explanation: "It was a regional treaty signed by American states, though its Article 1 definition is now treated as a statement of customary criteria worldwide.",
            sourceLessonSlug: "gws-montevideo",
          },
          {
            prompt: "Under Montevideo, which of these is NOT required for statehood?",
            options: [
              "That the state have a permanent population",
              "That the state have some form of government",
              "That other states formally recognize it",
              "That the state have a defined territory",
            ],
            correctIndex: 2,
            explanation: "Population, territory, government, and foreign-relations capacity are the criteria. Recognition by other states is deliberately not on the Article 1 list.",
            sourceLessonSlug: "gws-montevideo",
          },
          {
            prompt: "Why does the course teach BOTH theories rather than picking a winner?",
            options: [
              "Because the two theories mean the same thing",
              "Because each has a serious, unresolved weakness",
              "Because the law formally adopted just one",
              "Because recognition never matters in practice",
            ],
            correctIndex: 1,
            explanation: "The declarative theory understates recognition's real weight; the constitutive theory lets states gatekeep and makes statehood relative. Section 3 watches the unresolved argument operate on real cases.",
            sourceLessonSlug: "gws-recognition",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Governance above the state: supranational bodies
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gws-supranational-spectrum",
      title: "5 · Treaty organization versus supranational body",
      section: "Section 2 · Governance above the state: supranational bodies",
      body: `Now climb ABOVE the state. When countries want to act together, they build organizations, and those organizations come in two very different kinds. **Telling the two kinds apart is the tool you need for the rest of Section 2**, because the European Union is famous precisely for being the second kind when almost everything else is the first.

## The ordinary kind: an intergovernmental organization

Most international bodies are **intergovernmental**: they are built by a treaty among sovereign states, and they act by the AGREEMENT of those states. The members send representatives who negotiate; decisions usually need consensus or a heavy majority; and, crucially, **the organization does not make law that reaches inside a member country and binds its citizens directly.** It binds the member STATES, on the international plane, and each state then decides how to carry the obligation out at home. The World Trade Organization, most UN bodies, and the great majority of alliances and unions work this way. **The sovereignty stays with the members; the organization is their shared instrument.**

## The rarer kind: a supranational body

A **supranational** body is different in degree so large it becomes a difference in kind. Its members have handed it authority to **make decisions that bind the members even when a particular member disagrees, and in the strongest cases to make law that takes effect INSIDE the member states, reaching their citizens directly, without each national parliament passing it again.** The members have not just agreed to cooperate; they have transferred a slice of sovereignty upward. **A supranational body can, within its granted fields, out-vote a member and still bind it.** That is a genuinely different animal from a club of sovereigns that acts by consensus.

## The two kinds, side by side

| | Intergovernmental organization | Supranational body |
|---|---|---|
| **Built by** | A treaty among states | A treaty among states |
| **Who it binds** | The member states, internationally | The states AND, in strong cases, their citizens directly |
| **How it decides** | Usually consensus or agreement | Can bind a member that voted no |
| **Sovereignty** | Stays with the members | A slice is transferred upward |

**Read the shared top row and the differing rows below it.** Both start from a treaty; every one of these bodies is built by sovereign states agreeing. The difference is what the states agreed TO. In an intergovernmental body they agreed to cooperate and keep their sovereignty. In a supranational body they agreed to hand some sovereignty up and be bound by the result.

## Why the distinction is the key to Section 2

The three bodies in this section sit at different points on this line, and naming the point is half of understanding each one:

- **The United Nations** is intergovernmental. It is built on the "sovereign equality" of its members, and (with one important exception you will meet) it acts by agreement rather than by ruling over its members' internal affairs.
- **The African Union** is largely intergovernmental too, though its founding act claims some powers that reach further than its predecessor's did.
- **The European Union** is the world's clearest supranational body, and the reason it gets its own lesson is that its own court declared, very early, that it is not an ordinary international organization at all. **That declaration is the next lesson**, and this spectrum is the frame you will read it against.

## Sources
- Charter of the United Nations, art. 2(1) (1945). https://www.un.org/en/about-us/un-charter/full-text`,
      recallContent: [
        {
          prompt: "State the difference between the declarative and constitutive theories of recognition in one sentence each.",
          answer: "Declarative: an entity becomes a state by meeting the Montevideo criteria, and recognition only acknowledges a state that already exists. Constitutive: an entity becomes a full state only insofar as existing states recognize it, so recognition helps constitute the state.",
        },
        {
          prompt: "Why does neither theory of recognition simply win?",
          answer: "The declarative theory understates how much recognition matters in reality (an unrecognised entity is locked out of embassies, organizations, and banks). The constitutive theory lets existing states gatekeep and makes statehood relative (a state to some, not to others). Practice sits in the unresolved middle.",
        },
        {
          prompt: "How does the course say it will handle contested states, given the recognition argument?",
          answer: "Neutrally: it describes the recognition disagreement, attributes each claim to whoever makes it, reports documented facts, and does not declare any contested territory's status settled.",
        },
      ],
    },
    {
      slug: "gws-eu-legal-order",
      title: "6 · The European Union: its own legal order",
      section: "Section 2 · Governance above the state: supranational bodies",
      body: `The European Union is the reason this section exists. **It is neither a country nor an ordinary treaty organization, and it has been telling the world so, through its own court, since the 1960s.** Getting this lesson right means holding two facts at once: the EU was built by sovereign states signing treaties, exactly like any international body, AND it grew into something no ordinary treaty organization is, a body whose law operates directly inside its members. How both can be true is the whole lesson.

## Built by treaties, like any organization

The EU's authority traces, in classic method-course fashion, to documents you can name and date. The three that matter most:

| Treaty | Year | What it did |
|---|---|---|
| **Treaty of Rome** | 1957 | Created the European Economic Community, the common market |
| **Maastricht Treaty** (Treaty on European Union) | 1992 | Created the European Union itself and EU citizenship |
| **Treaty of Lisbon** | 2007 | Restructured the Union and streamlined how it decides |

(Treaty of Rome, 1957; Treaty on European Union, 1992; Treaty of Lisbon, 2007.) **So far this looks intergovernmental:** sovereign states, signing treaties, building an organization. If the story stopped here, the EU would be a very ambitious version of the ordinary kind. It does not stop here, because of what its court did with those treaties.

## Van Gend en Loos (1963): a new legal order with direct effect

In 1963 a Dutch company argued that an EEC Treaty provision gave it rights a national customs authority had to respect. The question reached the European Court of Justice, and the Court's answer changed what the EU is. It held that the Treaty was **"a new legal order of international law for the benefit of which the states have limited their sovereign rights, albeit within limited fields,"** and that its provisions could create rights for individuals which national courts must protect (Van Gend en Loos, Case 26/62, 1963). **This is the doctrine of DIRECT EFFECT:** EU law does not just bind the member states as governments; it can reach their citizens directly and be enforced in their own national courts. **No ordinary treaty organization works this way.** A citizen normally cannot walk into a national court and enforce a treaty their government signed; after Van Gend en Loos, a citizen of a member state can do exactly that with much of EU law.

## Costa v ENEL (1964): the primacy of EU law

One year later the Court took the second decisive step. In a dispute over an Italian electricity nationalisation, it held that EU law has **PRIMACY**: a law "stemming from the treaty, an independent source of law, could not, because of its special and original nature, be overridden by domestic legal provisions" (Costa v ENEL, Case 6/64, 1964). **Where valid EU law and a national law conflict within the fields the treaties cover, the EU law prevails.** Put direct effect and primacy together and you have the supranational core: EU law operates inside the member states, reaches their citizens, and outranks conflicting national law in its own fields. **That is why the EU is not an ordinary treaty organization. Its members did not just agree to cooperate; they created a legal order that operates above their own.**

## But not a country either

Be equally precise the other way. **The EU is not a state, and does not claim to be one.** It has no general sovereignty; it holds only the powers ("competences") the member states conferred by treaty, and matters outside those fields stay national. Its members remain sovereign states with their own seats at the UN, their own armies, and the acknowledged right to leave, which one member exercised. **So the EU sits in a category almost by itself:** more than an international organization because its law binds inside its members, less than a state because it holds only conferred powers and its members remain sovereign. The word scholars use is **sui generis**, meaning "of its own kind." **It is the clearest real example of a government without a state**, and reading its authority is simply the method: find the instrument (a directive, a regulation, a treaty article), then find its source (the treaties, as read by the Court that built this legal order).

## Sources
- Treaty establishing the European Economic Community (Treaty of Rome), 1957. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:11957E
- Treaty on European Union (Maastricht), 1992. https://eur-lex.europa.eu/eli/treaty/teu/sign
- Treaty of Lisbon, 2007. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:12007L
- Van Gend en Loos v Nederlandse Administratie der Belastingen, Case 26/62 (1963). https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:61962CJ0026
- Costa v ENEL, Case 6/64 (1964). https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:61964CJ0006`,
      recallContent: [
        {
          prompt: "What is the difference between an intergovernmental organisation and a supranational body?",
          answer: "Both are built by a treaty among states. An intergovernmental organization binds the member states internationally and acts by agreement, with sovereignty staying with the members. A supranational body can bind a member that voted no, and in strong cases makes law that takes effect inside the member states and reaches their citizens directly, because a slice of sovereignty was transferred upward.",
        },
        {
          prompt: "Where do the UN, the AU, and the EU sit on that spectrum?",
          answer: "The UN is intergovernmental (built on sovereign equality). The African Union is largely intergovernmental, though its founding act claims some further-reaching powers. The EU is the clearest supranational body, and its own court declared it is not an ordinary international organization.",
        },
        {
          prompt: "Both kinds of body start from the same thing. What is it, and what differs?",
          answer: "Both start from a treaty among sovereign states. What differs is what the states agreed to: in an intergovernmental body they agreed to cooperate and keep sovereignty; in a supranational body they agreed to hand some sovereignty up and be bound by the result.",
        },
      ],
    },
    {
      slug: "gws-united-nations",
      title: "7 · The United Nations: an organization of sovereign equals",
      section: "Section 2 · Governance above the state: supranational bodies",
      body: `The United Nations is the body most people picture when they imagine a "world government," and the most important thing this lesson does is take that picture away. **The UN is not a world government. It is an organization OF sovereign states, built on their equality, and it was designed on purpose not to rule over them.** Understanding what it can and cannot do is a direct application of Section 2's spectrum: the UN is intergovernmental, with one sharp exception.

## Built on sovereign equality

The UN's authority traces to a single founding document: the **Charter of the United Nations, signed in San Francisco in 1945** (UN Charter, 1945). Read its second article and the design is explicit. Article 2(1): **"The Organization is based on the principle of the sovereign equality of all its Members."** (UN Charter, 1945, art. 2(1).) Every member state, large or small, is a sovereign equal. And Article 2(7) adds that nothing in the Charter authorises the UN to intervene "in matters which are essentially within the domestic jurisdiction of any state." **The Charter starts from the sovereignty of its members and protects it**, which is the intergovernmental signature from the last two lessons.

## The General Assembly recommends; it does not legislate

The **General Assembly** is where all members sit and each has one vote. But its resolutions on most matters are **recommendations, not binding law.** The Assembly can debate, condemn, propose, budget, and elect, and its resolutions carry great moral and political weight, but a General Assembly resolution telling a member to change a domestic policy does not, by itself, bind that member the way a national statute binds a citizen. **This is the opposite of the EU:** where EU law can reach inside a member and override national law, a General Assembly resolution generally cannot. The UN is a forum of sovereign equals, and the Assembly is that forum, not a legislature above them.

## The one place the UN can bind: the Security Council

Here is the exception that keeps the UN from being purely intergovernmental. Under **Chapter VII of the Charter, the Security Council can make DECISIONS that members are legally bound to carry out**, including sanctions and the authorisation of force, when it determines there is a threat to peace. Article 25 is the hook: members "agree to accept and carry out the decisions of the Security Council" (UN Charter, 1945, art. 25). **So the Security Council, unlike the General Assembly, can bind.** But notice the design around it: the Council has five permanent members (China, France, Russia, the United Kingdom, and the United States), and each holds a **veto**, so the one part of the UN that can truly command is deliberately gated by the agreement of the great powers. **The UN was built so that binding force requires the consent of the permanent five**, which is sovereignty reasserting itself at the very point where the organization is strongest.

## Reading the UN with the method

- **Who acted?** Name the organ: the General Assembly, the Security Council, the Secretariat, the International Court of Justice. They have very different powers.
- **Under what authority?** A specific chapter or article of the Charter.
- **Where is the power from?** The Charter, a treaty the member states signed. The UN has only the authority the Charter grants.
- **Who can overturn it?** For a Security Council measure, the Council itself (and any permanent member's veto shapes what it can do in the first place); for most Assembly action, the members, who are recommended to but not bound.

**The UN is a government without a state in a weaker sense than the EU:** it can bind its members only through the Security Council, and even then by the design the great powers accepted in 1945. It is a forum and, in one chamber, a limited commander, but it is not a legislature over the world.

## Sources
- Charter of the United Nations, arts. 2(1), 2(7), 25 (1945). https://www.un.org/en/about-us/un-charter/full-text`,
      recallContent: [
        {
          prompt: "Why is the EU 'not a country and not an ordinary treaty organisation'?",
          answer: "Not an ordinary treaty organization because its law has direct effect (it reaches citizens in national courts, Van Gend en Loos, 1963) and primacy over conflicting national law (Costa v ENEL, 1964), operating inside the members. Not a country because it holds only conferred competences, has no general sovereignty, and its members remain sovereign states that can leave. It is sui generis.",
        },
        {
          prompt: "Name the three EU founding treaties and their years.",
          answer: "The Treaty of Rome (1957, creating the European Economic Community), the Maastricht Treaty / Treaty on European Union (1992, creating the EU itself), and the Treaty of Lisbon (2007, restructuring the Union).",
        },
        {
          prompt: "What did Van Gend en Loos and Costa v ENEL each establish?",
          answer: "Van Gend en Loos (Case 26/62, 1963) established direct effect and called the Community a 'new legal order of international law' for which the states limited their sovereign rights. Costa v ENEL (Case 6/64, 1964) established the primacy of EU law over conflicting national law within the treaties' fields.",
        },
      ],
    },
    {
      slug: "gws-african-union",
      title: "8 · The African Union: a continent's shared body",
      section: "Section 2 · Governance above the state: supranational bodies",
      body: `The third body in this section shows that regional union is not a European invention, and that a shared body can be designed to reach further into its members than its predecessor did. **The African Union is the continent-wide organization of African states, launched in 2002 as the successor to an older body**, and reading its founding document against the UN and the EU is a good final exercise for Section 2.

## From the OAU to the AU

The AU has a direct ancestor. The **Organisation of African Unity (OAU) was established in 1963** in Addis Ababa, in the era of independence from colonial rule, and its guiding instinct was the protection of the new states' sovereignty and the principle of non-interference in one another's internal affairs (OAU Charter, 1963). Decades later, African governments decided the OAU was too limited for a continent that wanted deeper cooperation. They adopted the **Constitutive Act of the African Union (adopted in 2000, in force in 2001), and the African Union was formally launched in 2002**, replacing the OAU (Constitutive Act of the African Union, 2000). **So the AU is the OAU's deliberate upgrade**, built for closer union than the older body allowed.

## Mostly intergovernmental, with a notable claim

Place the AU on Section 2's spectrum. In its core design it is largely **intergovernmental**: it is built by a treaty among sovereign states, its Assembly is made up of heads of state and government, and it respects the sovereignty and borders of its members. But the Constitutive Act contains one provision that reaches further than the OAU ever claimed. **Article 4(h) asserts "the right of the Union to intervene in a Member State" in grave circumstances, namely war crimes, genocide, and crimes against humanity** (Constitutive Act, 2000, art. 4(h)). Set that beside the OAU's older instinct of strict non-interference, and beside the UN Charter's Article 2(7) protection of domestic jurisdiction, and you can see the design choice: **the AU wrote into its founding treaty a claimed power to cross a member's sovereignty in the worst cases**, which is a further-reaching claim than its predecessor made. Whether and how that power is used in practice is a separate question; what matters for reading authority is that the CLAIM is in the founding instrument.

## The AU next to the EU and the UN

| Body | Founding document | Where it sits on the spectrum |
|---|---|---|
| **United Nations** | UN Charter (1945) | Intergovernmental; binds only via the Security Council |
| **African Union** | Constitutive Act (2000) | Largely intergovernmental; claims a grave-crimes intervention right |
| **European Union** | Rome, Maastricht, Lisbon | Supranational; law with direct effect and primacy |

**Read the three together and Section 2's lesson is complete.** All three are built by sovereign states signing treaties. They differ in how far the states let the body reach back inside them: the UN mostly not at all except through the Security Council, the AU largely not except for a claimed intervention power in the gravest cases, and the EU very far indeed, all the way to the citizen and over national law. **None of the three is a state. Each is a government without a state, holding exactly the authority its founding treaty grants and no more**, which is the method course's rule applied one continent up.

## Sources
- Charter of the Organization of African Unity, 1963. https://au.int/en/treaties/oau-charter-addis-ababa-25-may-1963
- Constitutive Act of the African Union, arts. 3, 4(h) (2000). https://au.int/en/constitutive-act
- Charter of the United Nations, art. 2(7) (1945). https://www.un.org/en/about-us/un-charter/full-text`,
      recallContent: [
        {
          prompt: "Is the United Nations a world government? Explain using the method.",
          answer: "No. The UN is an organization of sovereign equals (Charter art. 2(1)), built by a treaty. The General Assembly generally only recommends; it does not legislate over members. Only the Security Council can bind members (art. 25, Chapter VII), and it is gated by the five permanent members' vetoes. The UN has only the authority the Charter grants.",
        },
        {
          prompt: "What is the one place the UN can make binding decisions, and how is it limited?",
          answer: "The Security Council, under Chapter VII, can make decisions members are bound to carry out (art. 25), including sanctions and authorising force. It is limited by its five permanent members (China, France, Russia, the UK, the US), each of whom holds a veto, so binding action requires their consent.",
        },
        {
          prompt: "How does a General Assembly resolution differ from EU law in reaching inside a member?",
          answer: "Most General Assembly resolutions are recommendations, not binding law, and generally cannot override a member's domestic policy. EU law, by contrast, can have direct effect and primacy inside a member state. The UN is a forum of sovereign equals; the Assembly is not a legislature above them.",
        },
      ],
    },
    {
      slug: "gws-quiz-supranational",
      title: "9 · Quiz: governance above the state",
      section: "Section 2 · Governance above the state: supranational bodies",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "An INTERGOVERNMENTAL organisation is one that:",
            options: [
              "Makes law binding citizens directly at home",
              "Can always out-vote and bind any member",
              "Binds member states and leaves sovereignty",
              "Replaces the governments of its members",
            ],
            correctIndex: 2,
            explanation: "It is built by a treaty, binds the member states on the international plane, usually acts by agreement, and leaves sovereignty with the members.",
            sourceLessonSlug: "gws-supranational-spectrum",
          },
          {
            prompt: "A SUPRANATIONAL body differs because its members have:",
            options: [
              "Transferred a slice of sovereignty upward",
              "Agreed to disband their own parliaments",
              "Kept every power they held before joining",
              "Promised only to consult one another first",
            ],
            correctIndex: 0,
            explanation: "A supranational body can bind a member that voted no, and in strong cases its law reaches citizens directly inside the members, because sovereignty was transferred upward.",
            sourceLessonSlug: "gws-supranational-spectrum",
          },
          {
            prompt: "What do intergovernmental and supranational bodies have in COMMON?",
            options: [
              "Both make law that binds citizens directly",
              "Both are built by a treaty among states",
              "Both can override any national parliament",
              "Both are sovereign states in their own right",
            ],
            correctIndex: 1,
            explanation: "Both begin from a treaty among sovereign states. The difference is what the states agreed to: cooperation with sovereignty kept, or a transfer of sovereignty upward.",
            sourceLessonSlug: "gws-supranational-spectrum",
          },
          {
            prompt: "The European Union is best described as:",
            options: [
              "An ordinary treaty organization like most",
              "A sovereign country in its own right",
              "A department of the United Nations",
              "A sui generis supranational legal order",
            ],
            correctIndex: 3,
            explanation: "It is more than an international organization (its law binds inside members) and less than a state (only conferred powers), so scholars call it sui generis, of its own kind.",
            sourceLessonSlug: "gws-eu-legal-order",
          },
          {
            prompt: "Van Gend en Loos (1963) established the doctrine of DIRECT EFFECT, meaning EU law can:",
            options: [
              "Be ignored by any national court freely",
              "Be enforced by citizens in national courts",
              "Only bind the member governments abroad",
              "Be changed by a single member at will",
            ],
            correctIndex: 1,
            explanation: "The Court called the Treaty a 'new legal order' and held its provisions can create rights for individuals that national courts must protect. No ordinary treaty works this way.",
            sourceLessonSlug: "gws-eu-legal-order",
          },
          {
            prompt: "Costa v ENEL (1964) established the PRIMACY of EU law, meaning that in the treaties' fields:",
            options: [
              "National law overrides conflicting EU law",
              "EU law and national law always agree",
              "EU law prevails over conflicting national law",
              "Only the UN can resolve any conflict",
            ],
            correctIndex: 2,
            explanation: "EU law, 'an independent source of law', cannot be overridden by domestic provisions. Direct effect plus primacy is the supranational core.",
            sourceLessonSlug: "gws-eu-legal-order",
          },
          {
            prompt: "Which set correctly lists three EU founding treaties with their years?",
            options: [
              "Rome 1957, Maastricht 1992, Lisbon 2007",
              "Rome 1919, Maastricht 1945, Lisbon 1961",
              "Paris 1951, Geneva 1973, Nice 2001",
              "Vienna 1815, Rome 1957, Berlin 1990",
            ],
            correctIndex: 0,
            explanation: "The Treaty of Rome (1957) created the EEC, Maastricht (1992) created the EU itself, and Lisbon (2007) restructured the Union.",
            sourceLessonSlug: "gws-eu-legal-order",
          },
          {
            prompt: "The UN Charter's Article 2(1) states that the Organization is based on:",
            options: [
              "The sovereign equality of all its members",
              "The military strength of the great powers",
              "The primacy of UN law over national law",
              "The population size of each member state",
            ],
            correctIndex: 0,
            explanation: "Every member, large or small, is a sovereign equal. That is the intergovernmental signature and the opposite of the EU's supranational design.",
            sourceLessonSlug: "gws-united-nations",
          },
          {
            prompt: "Most UN General Assembly resolutions are:",
            options: [
              "Binding statutes enforced in every member",
              "Rulings of the International Court of Justice",
              "Orders that override national parliaments",
              "Recommendations, not directly binding law",
            ],
            correctIndex: 3,
            explanation: "The Assembly can debate, condemn, propose, budget, and elect, and its resolutions carry weight, but they generally do not bind a member the way a statute binds a citizen.",
            sourceLessonSlug: "gws-united-nations",
          },
          {
            prompt: "The one UN organ that can make decisions members are bound to carry out is the:",
            options: [
              "General Assembly of all the members",
              "Security Council, under Chapter VII",
              "Secretariat led by the Secretary-General",
              "Economic and Social Council committee",
            ],
            correctIndex: 1,
            explanation: "Under Chapter VII and Article 25, members agree to carry out Security Council decisions, including sanctions and authorising force. It is gated by the permanent members' vetoes.",
            sourceLessonSlug: "gws-united-nations",
          },
          {
            prompt: "The African Union, launched in 2002, was the successor to the:",
            options: [
              "League of Arab States founded in 1945",
              "Economic Community of West Africa",
              "Organisation of African Unity of 1963",
              "Non-Aligned Movement of the 1950s",
            ],
            correctIndex: 2,
            explanation: "The OAU (1963) protected the new states' sovereignty and non-interference. The AU, under the Constitutive Act (2000, in force 2001), replaced it for closer union.",
            sourceLessonSlug: "gws-african-union",
          },
          {
            prompt: "The AU Constitutive Act's Article 4(h) is notable because it claims a right to:",
            options: [
              "Collect taxes directly from all citizens",
              "Elect the leaders of every member state",
              "Print a single currency for the continent",
              "Intervene in a member in grave circumstances",
            ],
            correctIndex: 3,
            explanation: "Article 4(h) asserts a right to intervene in a member for war crimes, genocide, and crimes against humanity, a further-reaching claim than the OAU's strict non-interference.",
            sourceLessonSlug: "gws-african-union",
          },
          {
            prompt: "On Section 2's spectrum, the UN, the AU, and the EU differ mainly in:",
            options: [
              "How far the body reaches back inside members",
              "Whether they were built by any treaty at all",
              "Which one is itself a sovereign country",
              "How many total members each of them has",
            ],
            correctIndex: 0,
            explanation: "All three are built by treaties among sovereign states; they differ in how far the states let the body reach inside them, from the UN (mostly not) to the EU (all the way to the citizen).",
            sourceLessonSlug: "gws-african-union",
          },
          {
            prompt: "The UN Security Council's binding power is deliberately limited by the:",
            options: [
              "Approval of the General Assembly first",
              "Veto held by each permanent member",
              "Consent of the state being acted upon",
              "Ruling of a regional body like the AU",
            ],
            correctIndex: 1,
            explanation: "The five permanent members (China, France, Russia, the UK, the US) each hold a veto, so the one part of the UN that can command requires the great powers' agreement.",
            sourceLessonSlug: "gws-united-nations",
          },
          {
            prompt: "The common thread across the EU, the UN, and the AU is that each:",
            options: [
              "Is a sovereign state with its own territory",
              "Can override every member without any limit",
              "Holds only the authority its treaty grants",
              "Was created without any founding document",
            ],
            correctIndex: 2,
            explanation: "None is a state. Each is a government without a state, holding exactly the authority its founding treaty grants and no more, which is the method course's rule one level up.",
            sourceLessonSlug: "gws-african-union",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Unrecognised and contested states
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gws-recognition-in-practice",
      title: "10 · When effectiveness and recognition come apart",
      section: "Section 3 · Unrecognised and contested states",
      body: `Section 1 taught the recognition argument as theory. This section watches it operate on real, disputed cases, and it does so under a strict rule stated up front and kept the whole way through: **this course describes the disagreement; it does not settle it.** It reports documented facts, attributes every contested claim to whoever makes it, and leaves each territory's status genuinely open, because that is what it is.

## The gap the whole section is about

Recall the two theories. The declarative theory says statehood is a fact you HAVE by meeting the Montevideo criteria; the constitutive theory says statehood is something existing states GIVE you by recognition. **Most of the time these point the same way:** an entity meets the criteria and is widely recognized, and it is simply a state, uncontroversially. The hard cases are the ones where the two come apart, **where an entity has EFFECTIVENESS (it controls a territory, governs a population, functions from day to day) but lacks RECOGNITION (many or all other states will not accept it as a state).** That gap between effectiveness and recognition is the entire subject of Section 3.

## Two words you need: de facto and de jure

International law borrows two Latin phrases to mark this gap, and they are worth holding precisely:

| Term | Rough meaning | In the recognition context |
|---|---|---|
| **De facto** | "In fact" | Governs and controls territory as a matter of fact |
| **De jure** | "In law / by right" | Accepted as a state as a matter of law and recognition |

**An entity can be one without the other.** A body can exercise de facto control over territory for decades while much of the world declines to recognize it de jure. And, more rarely, an entity can hold de jure recognition from some states while lacking effective control over the territory it claims. **The recognition disagreement lives in the space between these two words**, and naming which one a claim is about is half of thinking clearly here.

## Recognition is a spectrum, not a switch

The second correction to intuition: **recognition is not on-or-off.** Between "recognized by everyone" and "recognized by no one" lies a wide middle. An entity might be recognized by a handful of states, or by a large bloc but not by its immediate neighbor, or recognized at one time and de-recognized later as other governments change their positions. **Recognition is also bilateral and political:** each state decides for itself whom to recognize, and it can and does change its mind. So "is this a state?" often has no single global answer, only a map of which governments say yes, which say no, and which stay deliberately silent.

## The rule this section runs on

Because the subject is charged, the course fixes its method here and repeats it in every lesson that follows:

1. **Report documented facts flatly.** A declaration of independence was issued on a date; a court issued an opinion; an assembly passed a resolution. These are checkable events, and the course states them plainly.
2. **Attribute every contested claim.** Not "X is part of Y," but "Y regards X as part of its territory, while X's authorities assert independence, and other governments are divided." Whoever makes a claim is named.
3. **Do not adjudicate status.** The course will not tell you whether a contested entity "really" is a state. It will tell you what the recognition disagreement consists of and let the theory from Section 1 explain why the disagreement is hard.

**Hold that three-part rule. It is the difference between teaching this subject and taking a side in it**, and this course teaches it.

## Sources
- Montevideo Convention on the Rights and Duties of States, art. 3 (1933). https://avalon.law.yale.edu/20th_century/intam03.asp
- Charter of the United Nations, art. 2(1) (1945). https://www.un.org/en/about-us/un-charter/full-text`,
      recallContent: [
        {
          prompt: "Where does the African Union sit on the intergovernmental-to-supranational spectrum, and what makes it notable?",
          answer: "Largely intergovernmental (a treaty among sovereign states, an Assembly of heads of state, respect for members' sovereignty), but its Constitutive Act (2000) Article 4(h) claims a right to intervene in a member in grave circumstances (war crimes, genocide, crimes against humanity), a further-reaching claim than the OAU's strict non-interference.",
        },
        {
          prompt: "What is the through-line linking the UN, the AU, and the EU?",
          answer: "All three are built by sovereign states signing treaties, and none is a state. They differ only in how far the members let the body reach back inside them: the UN mostly not (except the Security Council), the AU largely not (except the claimed grave-crimes intervention), and the EU all the way to the citizen and over national law. Each holds only the authority its treaty grants.",
        },
        {
          prompt: "How did the AU come to exist, and from what predecessor?",
          answer: "It succeeded the Organisation of African Unity (OAU, 1963). African states adopted the Constitutive Act of the African Union (2000, in force 2001) and formally launched the AU in 2002 as a deeper-cooperation upgrade of the OAU.",
        },
      ],
    },
    {
      slug: "gws-contested-neutrally",
      title: "11 · Contested states, described not adjudicated",
      section: "Section 3 · Unrecognised and contested states",
      body: `This is the lesson the whole section has been building toward, and the one where the neutrality rule does the most work. **We look at real contested cases, and for each we do exactly three things: state the documented facts, attribute the competing claims, and stop.** The point is not to tell you who is right. The point is to show you the SHAPE of a recognition dispute, so you can read any of them, including ones this lesson does not mention.

## A neutral typology of the hard cases

Contested situations are not all alike. It helps to sort them by where the effectiveness-recognition gap falls:

| Pattern | The gap |
|---|---|
| **Functions, little or no recognition** | Effective de facto control, but few or no states recognize it as independent |
| **Recognized by many, not by all** | A large number of states recognize it; others, often including a claimant state, do not |
| **Recognized by one, or a few** | Recognized only by a single state or a small group, disputed by most |

**Read these as patterns, not rankings.** They describe how the recognition disagreement is distributed, not who deserves what. Now, cases, each stated under the three-part rule.

## Kosovo: recognized by many, and a narrow court opinion

The documented facts: **Kosovo's assembly issued a declaration of independence on 17 February 2008.** Many states have recognized Kosovo; others, including Serbia, do not, and Serbia regards Kosovo as part of its territory. In 2010 the International Court of Justice, asked by the UN General Assembly for an advisory opinion, found that **the declaration of independence "did not violate international law"** (ICJ, Kosovo advisory opinion, 22 July 2010). **The precise scope matters and is easy to overstate:** the Court answered a narrow question about the declaration itself. It expressly did not rule on whether Kosovo is a state, nor on the legality or consequences of other states recognizing it, treating recognition as a separate, largely political question. **So the documented facts are a declaration, a division among recognizing and non-recognizing states, and a narrowly framed court opinion. The status is contested, and this course does not resolve it.**

## Somaliland: effective function, minimal recognition

The documented facts: **Somaliland declared independence from Somalia in 1991** and has since operated with its own government, holding elections and running its own administration. As a matter of recognition, no UN member state has extended formal recognition of Somaliland as an independent state, and **Somalia regards Somaliland as part of Somalia.** This is the clearest illustration of the effectiveness-recognition gap: substantial de facto function alongside an absence of de jure recognition. **The course reports the function and the non-recognition as facts, attributes the competing claim to Somalia, and does not decide the question.**

## Taiwan: the recognition question shaped by "One China"

The documented facts, attributed carefully: **the authorities on Taiwan (the Republic of China) administer Taiwan with a permanent population, a defined territory, and a functioning government.** As a matter of recognition, only a small and changing number of governments maintain formal diplomatic recognition of the Republic of China as a state; **the People's Republic of China regards Taiwan as part of China's territory (the "One China" position), and most governments maintain unofficial relations with Taiwan while recognizing the PRC.** This is a case where the fourth Montevideo criterion, capacity to enter into relations with other states, is directly shaped by other states' recognition choices. **The course states the administration, states the competing positions, attributes each, and takes no side.**

## What the cases have in common

Strip away the specifics and every case has the same skeleton: **an entity with some degree of effective control, a set of documented events (a declaration, an opinion, a resolution), a claimant or objector who regards the territory differently, and a divided or absent field of recognition.** That skeleton is Section 1's theory made concrete: the declarative view sees the effective entity, the constitutive view sees the missing recognition, and the dispute is exactly the space between them. **You now have the tool to read a contested case honestly, which means describing that skeleton and declining to fill in the answer the sources do not give.**

## Sources
- Montevideo Convention on the Rights and Duties of States, arts. 1, 3 (1933). https://avalon.law.yale.edu/20th_century/intam03.asp
- International Court of Justice, Accordance with International Law of the Unilateral Declaration of Independence in Respect of Kosovo, Advisory Opinion, 22 July 2010. https://www.icj-cij.org/case/141`,
      recallContent: [
        {
          prompt: "What is the gap that all of Section 3 is about?",
          answer: "The gap between EFFECTIVENESS (an entity controls territory and governs a population as a matter of fact) and RECOGNITION (whether other states accept it as a state). Contested cases are the ones where these come apart: effective function without wide recognition, or recognition without full effective control.",
        },
        {
          prompt: "Define de facto and de jure in the recognition context.",
          answer: "De facto means 'in fact': the entity governs and controls territory as a matter of fact. De jure means 'in law / by right': it is accepted as a state as a matter of law and recognition. An entity can hold one without the other, and the recognition disagreement lives in that space.",
        },
        {
          prompt: "State the three-part rule this section runs on.",
          answer: "1) Report documented facts flatly (a declaration on a date, a court opinion, a resolution). 2) Attribute every contested claim to whoever makes it (not 'X is part of Y' but 'Y regards X as part of its territory, while X's authorities assert otherwise'). 3) Do not adjudicate status; describe the disagreement and let Section 1's theory explain why it is hard.",
        },
      ],
    },
    {
      slug: "gws-membership-not-statehood",
      title: "12 · Membership is not statehood",
      section: "Section 3 · Unrecognised and contested states",
      body: `People often use "is it a member of the UN?" as a shortcut for "is it a state?" **The shortcut is unreliable, and understanding why closes Section 3.** Membership in an organization and statehood are two different things, decided by two different processes, and pulling them apart is the last tool you need to read the recognition question clearly.

## How UN membership actually works

UN membership is not automatic for a state, and it is not a neutral registrar stamping a fact. Under the Charter, **admission of a new member requires a recommendation of the Security Council and then a two-thirds vote of the General Assembly** (UN Charter, 1945, arts. 4, 18). Because the Security Council recommendation is needed, **any of the five permanent members can block an applicant with a veto.** So UN membership runs through the same political gate you met in Section 2: the great powers' agreement. **An entity can satisfy the Montevideo criteria and still be kept out of the UN by that gate, and being outside the UN does not, by itself, mean an entity is not a state under the declarative theory.** Membership is a political outcome, not a statehood test.

## The in-between category: observer status

There is also a status short of membership. The UN recognises **permanent observers**, which can take part in some proceedings without being voting members. This matters for the recognition question because it is where some contested cases sit:

- **The Holy See** is a permanent observer, not a member. It is a long-standing subject of international law with diplomatic relations around the world, and it is distinct from the territory of Vatican City. It is a useful reminder that **the family of entities with international standing is broader than "UN member states."**
- **The State of Palestine** was accorded **non-member observer State status by the UN General Assembly in Resolution 67/19 (2012)** (UN General Assembly, 2012). That is a documented fact about a status within the UN. Whether Palestine is a state, and its recognition by individual governments, remains contested among states, and this course attributes those positions rather than resolving them.

**Observer status shows that the UN itself does not treat "member or nothing" as the only options**, which is another reason UN membership is a poor proxy for statehood.

## Why the shortcut fails, in one table

| The question | What it actually turns on |
|---|---|
| Is it a state? | The Montevideo criteria and the recognition disagreement (Section 1) |
| Is it a UN member? | A Security Council recommendation (with the veto) plus a two-thirds Assembly vote |
| Is it recognized by country Z? | Country Z's own political decision, which it can change |

**Read the three rows as three separate questions with three separate answers.** They often line up, which is why the shortcut feels reliable, but in exactly the contested cases where you most want an answer, they can come apart: an entity can be a UN member and still have its status disputed by some, or can govern effectively for decades and never be admitted. **The clean lesson to carry out of Section 3: "state," "UN member," and "recognized by country Z" are three different statuses, and treating any one as a stand-in for another is where clear thinking about the recognition question goes wrong.**

## Sources
- Charter of the United Nations, arts. 4, 18 (1945). https://www.un.org/en/about-us/un-charter/full-text
- United Nations General Assembly, Resolution 67/19, Status of Palestine in the United Nations (29 November 2012). https://documents.un.org
- Montevideo Convention on the Rights and Duties of States, art. 3 (1933). https://avalon.law.yale.edu/20th_century/intam03.asp`,
      recallContent: [
        {
          prompt: "In a contested case, what three things does the course do, using Kosovo as the example?",
          answer: "It states documented facts (a declaration of independence on 17 February 2008; the ICJ's 22 July 2010 advisory opinion that the declaration did not violate international law, on a narrow question that did not rule on statehood or recognition), attributes the competing claims (many states recognize Kosovo; Serbia and others do not, and Serbia regards it as part of its territory), and does not resolve the status.",
        },
        {
          prompt: "What does Somaliland illustrate about the effectiveness-recognition gap?",
          answer: "It declared independence from Somalia in 1991 and has operated with its own government and elections (substantial de facto function), while no UN member state has extended formal recognition and Somalia regards it as part of Somalia (absent de jure recognition). It is the clearest illustration of function without recognition, and the course does not decide the question.",
        },
        {
          prompt: "What do all the contested cases have in common, structurally?",
          answer: "The same skeleton: an entity with some degree of effective control, a set of documented events (a declaration, an opinion, a resolution), a claimant or objector who regards the territory differently, and a divided or absent field of recognition. That is Section 1's theory made concrete, and the course describes it rather than filling in an answer the sources do not give.",
        },
      ],
    },
    {
      slug: "gws-quiz-contested",
      title: "13 · Quiz: unrecognised and contested states",
      section: "Section 3 · Unrecognised and contested states",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Section 3's hard cases are the ones where effectiveness and recognition:",
            options: [
              "Always point in the very same direction",
              "Come apart from one another",
              "Are decided by a single global court",
              "Cannot be described at all",
            ],
            correctIndex: 1,
            explanation: "When an entity has effective control but lacks wide recognition, or holds recognition without full control, the two come apart. That gap is the whole subject.",
            sourceLessonSlug: "gws-recognition-in-practice",
          },
          {
            prompt: "In the recognition context, 'de facto' refers to an entity that:",
            options: [
              "Is accepted as a state by law and recognition",
              "Has a permanent seat on the Security Council",
              "Has signed the Montevideo Convention itself",
              "Governs and controls territory as a fact",
            ],
            correctIndex: 3,
            explanation: "De facto means 'in fact': it governs and controls territory in practice. De jure means accepted as a state in law and by recognition. An entity can hold one without the other.",
            sourceLessonSlug: "gws-recognition-in-practice",
          },
          {
            prompt: "The course says recognition is best understood as:",
            options: [
              "A simple on-or-off switch for every state",
              "A spectrum decided state by state",
              "A single answer set by the United Nations",
              "A permanent status that never changes",
            ],
            correctIndex: 1,
            explanation: "Between recognized by everyone and by no one lies a wide middle; each state decides for itself and can change its mind, so there is often no single global answer.",
            sourceLessonSlug: "gws-recognition-in-practice",
          },
          {
            prompt: "The three-part neutrality rule for this section is to report facts, attribute claims, and:",
            options: [
              "Decide which side is finally correct",
              "Recommend which states should recognize",
              "Not adjudicate the contested status",
              "Rank the entities by their strength",
            ],
            correctIndex: 2,
            explanation: "The course states documented events, names whoever makes each contested claim, and declines to say whether a contested entity 'really' is a state.",
            sourceLessonSlug: "gws-recognition-in-practice",
          },
          {
            prompt: "The documented fact about Kosovo's declaration of independence is that it was issued in:",
            options: [
              "The year 2008 by its assembly",
              "The year 1991 after a referendum",
              "The year 1945 at San Francisco",
              "The year 1963 in Addis Ababa",
            ],
            correctIndex: 0,
            explanation: "Kosovo's assembly issued a declaration of independence on 17 February 2008. Many states recognize Kosovo; others, including Serbia, do not.",
            sourceLessonSlug: "gws-contested-neutrally",
          },
          {
            prompt: "The ICJ's 2010 advisory opinion on Kosovo found that the declaration of independence:",
            options: [
              "Made Kosovo a full member of the UN",
              "Did not violate international law",
              "Settled Kosovo's statehood for good",
              "Bound every state to recognize Kosovo",
            ],
            correctIndex: 1,
            explanation: "The Court answered a narrow question: the declaration itself did not violate international law. It expressly did NOT rule on whether Kosovo is a state or on recognition.",
            sourceLessonSlug: "gws-contested-neutrally",
          },
          {
            prompt: "Somaliland is the course's clearest illustration of:",
            options: [
              "Recognition by every UN member state",
              "A supranational legal order at work",
              "Effective function with minimal recognition",
              "A body with no territory or population",
            ],
            correctIndex: 2,
            explanation: "It declared independence from Somalia in 1991 and functions with its own government and elections, while no UN member state formally recognises it and Somalia regards it as part of Somalia.",
            sourceLessonSlug: "gws-contested-neutrally",
          },
          {
            prompt: "On the Taiwan case, the course describes the 'One China' position as:",
            options: [
              "A neutral ruling by an international court",
              "The settled view of every government",
              "A requirement of the Montevideo treaty",
              "The People's Republic of China's position",
            ],
            correctIndex: 3,
            explanation: "The course attributes it: the PRC regards Taiwan as part of China's territory, while the authorities on Taiwan administer it; most governments keep unofficial relations. The course takes no side.",
            sourceLessonSlug: "gws-contested-neutrally",
          },
          {
            prompt: "Admission of a new UN member requires a two-thirds Assembly vote plus a:",
            options: [
              "Recommendation of the Security Council",
              "Ruling from the International Court",
              "Signature on the Montevideo Convention",
              "Petition from a neighboring state",
            ],
            correctIndex: 0,
            explanation: "Under Charter Articles 4 and 18, admission needs a Security Council recommendation (so any permanent member can veto) and a two-thirds General Assembly vote.",
            sourceLessonSlug: "gws-membership-not-statehood",
          },
          {
            prompt: "The course warns that UN membership is a poor proxy for statehood because it:",
            options: [
              "Is granted automatically to every state",
              "Is decided only by the applicant itself",
              "Runs through a political veto gate",
              "Has nothing to do with any treaty",
            ],
            correctIndex: 2,
            explanation: "Membership needs the Security Council's recommendation, so a permanent member's veto can block an applicant that meets the Montevideo criteria. Membership is a political outcome, not a statehood test.",
            sourceLessonSlug: "gws-membership-not-statehood",
          },
          {
            prompt: "In 2012, UN General Assembly Resolution 67/19 accorded Palestine:",
            options: [
              "Full voting membership in the UN",
              "A permanent seat on the Security Council",
              "Non-member observer State status",
              "A ruling that settled its statehood",
            ],
            correctIndex: 2,
            explanation: "The resolution accorded the State of Palestine non-member observer State status. Whether Palestine is a state, and its recognition by governments, remains contested; the course attributes those positions.",
            sourceLessonSlug: "gws-membership-not-statehood",
          },
          {
            prompt: "The Holy See is used in the lesson as an example of a body that is:",
            options: [
              "A voting UN member like any state",
              "A permanent observer, not a member",
              "A contested state with no recognition",
              "A supranational body like the EU",
            ],
            correctIndex: 1,
            explanation: "It is a permanent observer and a long-standing subject of international law, distinct from Vatican City, showing the family of entities with international standing is broader than UN member states.",
            sourceLessonSlug: "gws-membership-not-statehood",
          },
          {
            prompt: "'State', 'UN member', and 'recognised by country Z' are, the course says:",
            options: [
              "Three names for one identical status",
              "Three statuses that can never overlap",
              "Two statuses plus one meaningless label",
              "Three different statuses, not proxies",
            ],
            correctIndex: 3,
            explanation: "They often line up, which is why the shortcut feels reliable, but in contested cases they come apart. Treating one as a stand-in for another is where clear thinking goes wrong.",
            sourceLessonSlug: "gws-membership-not-statehood",
          },
          {
            prompt: "Why can an entity meet the Montevideo criteria and still not be a UN member?",
            options: [
              "Because membership runs through a political gate",
              "Because Montevideo bans UN membership",
              "Because only European states may join",
              "Because it must first join the African Union",
            ],
            correctIndex: 0,
            explanation: "Admission needs a Security Council recommendation subject to the veto, so the great-power gate can keep out an entity that satisfies the declarative criteria for statehood.",
            sourceLessonSlug: "gws-membership-not-statehood",
          },
          {
            prompt: "The common skeleton of every contested case in this section is:",
            options: [
              "A UN seat, a national anthem, and a standing army",
              "Some control, documented events, split recognition",
              "A single court ruling that ends every dispute",
              "Full recognition by every state in the world",
            ],
            correctIndex: 1,
            explanation: "Some effective control, a set of documented events, a claimant or objector who sees the territory differently, and a divided or absent field of recognition. That is Section 1's theory made concrete.",
            sourceLessonSlug: "gws-contested-neutrally",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Governance beside the state: self-governing communities
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gws-hoas-private-government",
      title: "14 · The homeowners association: government by covenant",
      section: "Section 4 · Governance beside the state: self-governing communities",
      body: `Now come all the way down from the United Nations to your own street. **Some of the most direct governance in most people's lives comes from a body that is not a government at all: the homeowners association (HOA).** It can make rules about what you do with your property, levy charges you must pay, fine you for breaking its rules, and in many places place a lien on your home and, in the hardest cases, foreclose. That is real authority over real people, exercised by a private organization. Section 4 is about bodies like this, and it is the deliberate hand-off to the business path, because their power comes from an ENTITY and an INSTRUMENT rather than from sovereignty.

## Where an HOA's power actually comes from

Run the method. **Who acted?** The association, usually a private nonprofit corporation, acting through its board. **Under what authority?** Not sovereignty, and not a delegation from the state the way a city's power is delegated. Its authority comes from a **recorded covenant**, commonly called the CC&Rs (covenants, conditions, and restrictions), which is filed against the land itself. **Where is the power from?** When you buy a home in the development, you take title subject to that recorded covenant, and by taking title you become bound by it and become a member of the association. **The instrument is a contract that runs with the land, backed by the state's ordinary law of property and contract.** That is a completely different SOURCE of power from anything in Sections 1 to 3: not a treaty, not recognition, not a constitution, but a private agreement the state's courts will enforce.

## Consent, and its fine print

The HOA's authority is often described as resting on CONSENT: you agreed to the rules when you bought in. **That is true, and it has real fine print worth stating plainly.** You consent to the covenant as a package, usually written before you arrived, and you are bound by rules you did not personally negotiate and by later amendments the membership adopts under the covenant's own procedures. **So the consent is genuine but thin:** it is the consent of accepting a standing set of terms, closer to signing up for a service than to voting in a legislature. This is exactly the kind of distinction the business path sharpens, because an HOA is, structurally, a membership corporation, and how such an entity governs its members is a question about its governing documents.

## The line that makes an HOA not a government: state action

Here is the legal boundary that keeps an HOA on the private side of the line, and it matters. **Most constitutional rights restrain GOVERNMENTS, not private parties.** The First Amendment binds the state; it does not, in general, bind your neighbor or a private club. Because an HOA is private, courts generally hold that **the constitutional limits that bind a city do not bind an HOA in the same way**, which is why an HOA can enforce rules (about signs, flags, or paint colors) that a city might not be able to impose.

**But the line is not absolute, and the leading case shows why.** In **Marsh v. Alabama (1946), the Supreme Court held that a company town, privately owned, could not use trespass law to bar someone from distributing literature on its streets, because the town performed the functions of an ordinary municipality and the more an owner opens property to public use the more its rights are bounded by the rights of those who use it** (Marsh v. Alabama, 326 U.S. 501, 1946). Marsh established that a private entity performing a **public function** can, in some circumstances, be treated as a **state actor** and held to constitutional limits. **Courts have generally been reluctant to extend Marsh broadly to ordinary HOAs**, so the usual rule stands that an HOA is private, but Marsh marks the edge: when a private government looks and acts enough like a public one, the private/public line can blur. **That blur is precisely the "governments without states" question, asked at the scale of a subdivision.**

## Why this opens the business path

Notice what reading an HOA required: not international law, but the law of **entities and instruments**. Its power traces to a corporation's structure and a recorded agreement, and the interesting questions (who is bound, by what document, amended how, enforced how) are questions about a governing instrument. **That is the entire subject of Path B, "How a Business Is Formed," which teaches that an entity is a bundle of decisions about liability, taxation, ownership, and governance, readable from its formation documents.** An HOA is one worked example. The next two lessons give you three more, and then the hand-off is complete.

## Sources
- Marsh v. Alabama, 326 U.S. 501 (1946). https://supreme.justia.com/cases/federal/us/326/501/`,
      recallContent: [
        {
          prompt: "Why is UN membership a poor proxy for statehood?",
          answer: "Membership requires a Security Council recommendation (subject to any permanent member's veto) plus a two-thirds General Assembly vote (Charter arts. 4, 18), so it runs through a political gate. An entity can meet the Montevideo criteria and be kept out, and being outside the UN does not by itself mean it is not a state. Membership is a political outcome, not a statehood test.",
        },
        {
          prompt: "What is observer status, and which two examples did the lesson give?",
          answer: "A status short of voting membership: permanent observers can take part in some UN proceedings without being members. Examples: the Holy See (a permanent observer and long-standing subject of international law, distinct from Vatican City) and the State of Palestine (accorded non-member observer State status by General Assembly Resolution 67/19 in 2012).",
        },
        {
          prompt: "Name the three separate statuses the course says must not be used as proxies for each other.",
          answer: "'State' (turns on the Montevideo criteria and the recognition disagreement), 'UN member' (turns on a Security Council recommendation plus a two-thirds Assembly vote), and 'recognized by country Z' (turns on Z's own political decision, which it can change). They often line up but can come apart in contested cases.",
        },
      ],
    },
    {
      slug: "gws-cooperatives",
      title: "15 · Cooperatives: government by membership",
      section: "Section 4 · Governance beside the state: self-governing communities",
      body: `The HOA governed by a covenant tied to property. A **cooperative** governs by MEMBERSHIP, and the difference between those two sources of authority is worth a lesson, because it introduces the rule that defines an entire family of organizations: **one member, one vote.** Co-ops are self-governing communities whose power comes from belonging, and reading them is again a matter of entity and instrument, deep in Path B's territory.

## What a cooperative is

A **cooperative** is an enterprise owned and governed by its members, who are the people who use it: its customers, its workers, its residents, or its producers, depending on the type. The member is not an outside investor hoping the value rises; the member is the user, and ownership and use are the same people. **The governing principle that sets co-ops apart is democratic member control**, classically expressed as **one member, one vote, regardless of how much money a member has put in.** That is the opposite of an ordinary business corporation, where voting power follows shares, so one large shareholder can outvote many small ones. **In a co-op, governance is by head, not by holding.**

## The idea has a birthplace and a date

This is not a modern slogan. The modern cooperative movement traces to the **Rochdale Society of Equitable Pioneers, a group of weavers and others who opened a member-owned store in Rochdale, England, in 1844**, and whose operating rules became the seed of the cooperative principles used worldwide (International Cooperative Alliance). **The Rochdale Pioneers are the same 1844 origin point the business path uses for its cooperatives course**, which is one of the seams where this course hands directly to Path B.

## The housing co-op: governing who lives in the building

Bring it home to housing, next to the HOA from the last lesson, because the contrast is exact. In a **housing cooperative**, you do not own your individual unit outright. Instead, **you own a share in the corporation that owns the whole building, together with a proprietary lease or occupancy right to your unit.** You belong to the entity that owns everything, and you hold a right to live in your part of it.

| | Homeowners association (Lesson 14) | Housing cooperative |
|---|---|---|
| **What you own** | Your own unit outright | A share in the corporation that owns the building |
| **Source of the rules** | A recorded covenant (CC&Rs) | The co-op's corporate documents and membership agreement |
| **How governance runs** | Membership through property ownership | Membership through a share, typically one member one vote |
| **A sharp power** | Assessments, fines, liens | Approving or refusing who may buy in and join |

**Read the bottom row.** A housing co-op commonly has the power to APPROVE or refuse the people who wish to buy a share and move in, because joining the co-op means joining the ownership entity. That is a striking governance power over a community, and it comes not from sovereignty but from the co-op's status as a member-owned corporation with its own admission rules. **Once again the source of authority is an entity plus an instrument**, exactly what Path B reads for a living.

## The through-line to the business path

Co-ops make the hand-off explicit, because a cooperative IS a business form. Whether an organization can even BE a co-op, and on what terms, depends on the entity types a given state or country recognises, which is a Path B question end to end. **The governance rule that defines a co-op, one member one vote versus one share one vote, is precisely the distinction Path B's governance course turns on.** So when you read a self-governing community that runs on membership rather than on property or sovereignty, you have already crossed into the business path, and this course is walking you to the door.

## Sources
- International Cooperative Alliance. Cooperative identity, values and principles. https://www.ica.coop/en/cooperatives/cooperative-identity`,
      recallContent: [
        {
          prompt: "Where does a homeowners association's authority come from, run through the method?",
          answer: "The association (usually a private nonprofit corporation) acts through its board under a recorded covenant, the CC&Rs, filed against the land. When you buy in, you take title subject to that covenant and become a bound member. The source is a contract that runs with the land, backed by the state's ordinary property and contract law, not sovereignty or a delegation.",
        },
        {
          prompt: "What is the 'state action' line, and what does Marsh v. Alabama (1946) show about it?",
          answer: "Most constitutional rights restrain governments, not private parties, so an HOA (being private) generally is not bound by constitutional limits the way a city is. Marsh v. Alabama held that a privately owned company town performing municipal functions could be treated as a state actor and held to the First Amendment. It marks the edge where a private government that acts enough like a public one can blur the private/public line; courts have been reluctant to extend it broadly to ordinary HOAs.",
        },
        {
          prompt: "Why does reading an HOA open the business path?",
          answer: "Because reading it required the law of entities and instruments, not international law: its power traces to a corporation's structure and a recorded agreement, and the interesting questions (who is bound, by what document, amended and enforced how) are questions about a governing instrument. That is exactly Path B, which reads an entity as a bundle of decisions from its formation documents.",
        },
      ],
    },
    {
      slug: "gws-unions-mutual-aid",
      title: "16 · Unions and mutual aid: government by agreement",
      section: "Section 4 · Governance beside the state: self-governing communities",
      body: `Two more self-governing communities complete the section, and complete the hand-off to the business path. A **labor union** governs the terms of work through collective bargaining backed by statute; a **mutual-aid network** governs a community's shared support through voluntary agreement backed by nothing but the members' commitment. They sit at opposite ends of how much the state stands behind a non-state community, which makes them the right pair to finish on.

## The union: real authority, backed by a statute

A union is a self-governing organization of workers, and in the United States its authority has a specific and readable legal source. The **National Labor Relations Act (the Wagner Act) of 1935** established a framework under which workers may organize and bargain collectively (National Labor Relations Act, 1935). Its most striking governance feature: **when a union is selected by the workers in a bargaining unit, it becomes their EXCLUSIVE bargaining representative, empowered to negotiate the terms and conditions of employment for everyone in the unit** (NLRA, 1935). **Read that carefully. A private membership organization gains, by federal statute, the authority to speak for an entire workplace in setting the terms of the job**, including for workers who did not personally vote for it. That is genuine governance, and its source is the classic pair: a statute (the NLRA) plus the union's own governing document (its constitution and bylaws). A union is a government-like body without a state, and the method reads it cleanly: the instrument is the collective bargaining agreement; the source is the NLRA and the union's constitution.

## Mutual aid: government by pure agreement

At the other end sits the **mutual-aid network**: people organizing to support one another directly, through voluntary, usually horizontal, cooperation, disaster relief, community food distribution, shared care, without necessarily forming any legal entity at all. The idea has a long lineage; the naturalist Peter Kropotkin argued in **Mutual Aid: A Factor of Evolution (1902)** that cooperation is as natural and important a force as competition (Kropotkin, 1902). **A mutual-aid network's authority rests on the thinnest possible source: the agreement and commitment of its participants.** No treaty, no recognition, no covenant tied to land, no enabling statute, often not even a corporation. **It governs a community only as far as the members choose to be governed by it**, which makes it the purest case in the whole course of authority that exists because people accept it, and stops the moment they do not.

## The whole section on one line

Line up the four communities of Section 4 by where their power comes from, and the section resolves into a single spectrum:

| Community | Source of authority | How much the state stands behind it |
|---|---|---|
| **Homeowners association** | A recorded covenant plus property and contract law | A great deal (courts enforce liens) |
| **Cooperative** | A member-owned entity and its governing documents | Substantial (recognized entity form) |
| **Union** | A federal statute plus the union's constitution | Substantial (statutory bargaining power) |
| **Mutual-aid network** | The voluntary agreement of its members | Little or none |

**Read the right-hand column top to bottom.** It runs from authority the state will actively enforce down to authority that lives entirely on consent. **Every one of these is a government without a state**, and every one of them holds its power through an entity or an agreement you can read, which is the door into the business path.

## The hand-off, stated plainly

Here is the seam. **Path A, this path, taught you to read the authority of governments, from the block to the globe, and this course extended that to bodies above, beside, and below sovereign states.** But the moment you ask HOW a self-governing community is structured, who owns it, who is liable, who decides, on what terms members join and leave, you have left the theory of government and entered the theory of the ENTITY. **That is Path B, "How a Business Is Formed," which teaches that every entity is a bundle of four decisions (liability, taxation, ownership and transfer, and governance) readable from its formation documents.** The HOA's corporation, the housing co-op's member-owned structure, the union's constitution, and even a mutual-aid group choosing whether to incorporate are all Path B questions. **You arrived at the border of the business path by following a single question all the way down: where does the power come from? For a self-governing community, the answer is an entity and an instrument, and reading those is the next path.**

## Sources
- National Labor Relations Act of 1935, 29 U.S.C. Section 159(a). https://www.nlrb.gov/guidance/key-reference-materials/national-labor-relations-act
- Kropotkin, P. (1902). Mutual Aid: A Factor of Evolution. https://www.gutenberg.org/ebooks/4341`,
      recallContent: [
        {
          prompt: "What is a cooperative, and what governing principle sets it apart from an ordinary corporation?",
          answer: "An enterprise owned and governed by its members, who are its users (customers, workers, residents, or producers), so ownership and use are the same people. It is set apart by democratic member control, classically one member, one vote regardless of money invested, the opposite of a corporation where voting follows shares.",
        },
        {
          prompt: "How does a housing co-op differ from an HOA in what you own and a sharp power it holds?",
          answer: "In a housing co-op you own a share in the corporation that owns the whole building plus a proprietary lease to your unit, rather than owning the unit outright as under an HOA. A sharp power: the co-op commonly can approve or refuse who may buy a share and move in, because joining means joining the ownership entity.",
        },
        {
          prompt: "Where does the modern cooperative movement trace from, and why does that matter to this path?",
          answer: "The Rochdale Society of Equitable Pioneers, who opened a member-owned store in Rochdale, England, in 1844, whose rules seeded the worldwide cooperative principles. It matters because 1844 is the same origin point Path B's cooperatives course uses, one of the seams where this course hands directly to the business path.",
        },
      ],
    },
    {
      slug: "gws-quiz-communities",
      title: "17 · Quiz: self-governing communities",
      section: "Section 4 · Governance beside the state: self-governing communities",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A homeowners association's authority over a homeowner comes from:",
            options: [
              "A delegation of the state's police power",
              "A recorded covenant plus contract law",
              "Recognition by other associations nearby",
              "A treaty signed with the city government",
            ],
            correctIndex: 1,
            explanation: "The association acts under CC&Rs recorded against the land; buying in binds you to that covenant. The source is contract and property law, not sovereignty or a delegation.",
            sourceLessonSlug: "gws-hoas-private-government",
          },
          {
            prompt: "The course calls an HOA member's consent 'genuine but thin' because you:",
            options: [
              "Never actually agreed to anything at all",
              "Can veto any rule you personally dislike",
              "Personally negotiated each rule in advance",
              "Accept a standing package written before you",
            ],
            correctIndex: 3,
            explanation: "You consent to a covenant written before you arrived and to later amendments the membership adopts, closer to signing up for a service than to voting in a legislature.",
            sourceLessonSlug: "gws-hoas-private-government",
          },
          {
            prompt: "Constitutional rights like the First Amendment generally restrain:",
            options: [
              "Governments, not private parties",
              "Private clubs, not governments",
              "Every organization without exception",
              "Only foreign states, not domestic ones",
            ],
            correctIndex: 0,
            explanation: "Most constitutional limits bind the state, not a private party, which is why an HOA can enforce some rules a city could not impose.",
            sourceLessonSlug: "gws-hoas-private-government",
          },
          {
            prompt: "Marsh v. Alabama (1946) held that a privately owned company town:",
            options: [
              "Could ban all speech on its private streets",
              "Was a full sovereign state under the law",
              "Could be treated as a state actor here",
              "Was exempt from every constitutional rule",
            ],
            correctIndex: 2,
            explanation: "Because the town performed municipal functions, it could not use trespass law to bar leafleting; a private entity performing a public function can be held to constitutional limits.",
            sourceLessonSlug: "gws-hoas-private-government",
          },
          {
            prompt: "The governing principle that defines a cooperative is:",
            options: [
              "One share of stock, one vote",
              "One member, one vote",
              "One dollar invested, one vote",
              "One board seat, one veto",
            ],
            correctIndex: 1,
            explanation: "Democratic member control: each member gets one vote regardless of money invested. That is the opposite of a corporation, where voting power follows shares.",
            sourceLessonSlug: "gws-cooperatives",
          },
          {
            prompt: "The modern cooperative movement traces to the Rochdale Pioneers, who opened their store in:",
            options: [
              "England in the year 1844",
              "Germany in the year 1919",
              "Uruguay in the year 1933",
              "Scotland in the year 1998",
            ],
            correctIndex: 0,
            explanation: "The Rochdale Society of Equitable Pioneers opened a member-owned store in Rochdale, England, in 1844; their rules seeded the worldwide cooperative principles.",
            sourceLessonSlug: "gws-cooperatives",
          },
          {
            prompt: "In a housing cooperative, what you actually own is:",
            options: [
              "Your individual unit outright, in full",
              "A share in the corporation plus a lease",
              "Nothing at all beyond a rental receipt",
              "The entire building by yourself alone",
            ],
            correctIndex: 1,
            explanation: "You own a share in the corporation that owns the whole building, together with a proprietary lease or occupancy right to your unit. You belong to the entity that owns everything.",
            sourceLessonSlug: "gws-cooperatives",
          },
          {
            prompt: "A sharp governance power a housing co-op commonly holds is the power to:",
            options: [
              "Levy federal income tax on residents",
              "Draft members into military service",
              "Approve or refuse who may buy in",
              "Issue passports to its own members",
            ],
            correctIndex: 2,
            explanation: "Because joining the co-op means joining the ownership entity, it can approve or refuse who may buy a share and move in, a power that comes from being a member-owned corporation.",
            sourceLessonSlug: "gws-cooperatives",
          },
          {
            prompt: "Under the National Labor Relations Act (1935), a union chosen by a bargaining unit becomes:",
            options: [
              "A branch of the federal government itself",
              "An advisory group with no real power",
              "The employer's own legal department",
              "The exclusive bargaining representative",
            ],
            correctIndex: 3,
            explanation: "It gains, by federal statute, authority to negotiate the terms of employment for everyone in the unit, including workers who did not vote for it. That is genuine governance.",
            sourceLessonSlug: "gws-unions-mutual-aid",
          },
          {
            prompt: "A union's authority, read with the method, traces to:",
            options: [
              "A labor statute plus the union's constitution",
              "A treaty ratified by the United Nations",
              "Recognition by other unions in the industry",
              "The inherent sovereignty of the workers",
            ],
            correctIndex: 0,
            explanation: "The instrument is the collective bargaining agreement; the source is the NLRA plus the union's own governing document, the classic statute-and-charter pair.",
            sourceLessonSlug: "gws-unions-mutual-aid",
          },
          {
            prompt: "A mutual-aid network's authority rests on:",
            options: [
              "A federal enabling statute and a charter",
              "The voluntary agreement of its members",
              "A covenant recorded against the land",
              "Recognition by the United Nations body",
            ],
            correctIndex: 1,
            explanation: "It governs only as far as the members choose to be governed by it, the purest case of authority that exists because people accept it and stops when they do not.",
            sourceLessonSlug: "gws-unions-mutual-aid",
          },
          {
            prompt: "Ranked by how much the state stands behind them, the four communities run from:",
            options: [
              "Mutual aid strongest to the HOA weakest",
              "All four backed by the state equally",
              "The HOA and union backed, mutual aid least",
              "None of the four backed by the state at all",
            ],
            correctIndex: 2,
            explanation: "The HOA (enforced liens), the co-op (recognized entity), and the union (statutory power) have substantial state backing; the mutual-aid network runs on consent with little or none.",
            sourceLessonSlug: "gws-unions-mutual-aid",
          },
          {
            prompt: "The idea of mutual aid was argued for in 1902 by Peter Kropotkin, who claimed that:",
            options: [
              "Competition is the only force in nature",
              "Cooperation is a natural, important force",
              "Only the state can organize any support",
              "Charity should replace all self-help",
            ],
            correctIndex: 1,
            explanation: "In Mutual Aid: A Factor of Evolution (1902), Kropotkin argued cooperation is as natural and important a force as competition.",
            sourceLessonSlug: "gws-unions-mutual-aid",
          },
          {
            prompt: "The hand-off to the business path happens the moment you ask, about a community:",
            options: [
              "Which sovereign state recognises it",
              "Whether it belongs to the United Nations",
              "How it is structured as an entity",
              "Which treaty first created it long ago",
            ],
            correctIndex: 2,
            explanation: "Asking who owns it, who is liable, who decides, and on what terms members join and leave moves you from the theory of government to the theory of the entity, which is Path B.",
            sourceLessonSlug: "gws-unions-mutual-aid",
          },
          {
            prompt: "What every Section 4 community shares is that its power comes from:",
            options: [
              "An entity or an agreement you can read",
              "The inherent sovereignty of a nation",
              "Recognition by other sovereign states",
              "A permanent seat in a world assembly",
            ],
            correctIndex: 0,
            explanation: "HOA, co-op, union, or mutual-aid network: each is a government without a state that holds power through an entity or an agreement, which is the door into the business path.",
            sourceLessonSlug: "gws-unions-mutual-aid",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Put it to work
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gws-worked-example",
      title: "18 · A worked example, start to finish",
      section: "Section 5 · Put it to work",
      body: `Before the capstone, run the whole course once, end to end, on a single body that is not a sovereign state. The example below is a composite illustration built to exercise the method, not a report about a specific named organization; when you do the capstone you will use a real body of your own choosing.

## The body

Suppose a large planned community is run by a homeowners association, incorporated as a private nonprofit, and suppose that same community also belongs to a regional water district and sits inside a country that is a member of a supranational union. A resident asks a simple question that this whole course was built to answer: **who actually has authority over me here, and where does each one's power come from?**

## Run the method on each layer

**The homeowners association.** Who acted? The association's board. Under what authority? Its recorded covenant, the CC&Rs. Where is the power from? A contract that runs with the land, backed by the state's property and contract law, which you accepted by taking title. Who can overturn it? A court (if the board exceeds the covenant), the membership (by amending the covenant under its own rules), and the state's ordinary law. **This is a government without a state whose source is an entity plus an instrument**, Section 4 exactly.

**The supranational union.** Who acted? An organ of the union, issuing a rule. Under what authority? The union's founding treaties, and, if it is a supranational body like the EU, its own legal order built on them. Where is the power from? Sovereign states that conferred competences by treaty, whose body can make law reaching inside them. Who can overturn it? The union's own court and lawmaking process, and, ultimately, the member states through the treaties. **This is a government without a state whose source is a treaty and a conferred competence**, Section 2 exactly.

**The contested edge, if one appears.** Suppose the community lies in a territory whose status is disputed. Then a fourth question enters, and the course's neutrality rule governs the answer: **state the documented facts, attribute the competing claims, and do not adjudicate the status.** You describe the recognition disagreement; you do not resolve it. That is Section 3 exactly.

## What the method bought you

Notice what you did NOT do. You did not decide whether the HOA's rule was fair, whether the union's policy was wise, or whose claim to the disputed territory is right. **You located each authority, traced each to its instrument, and named where each one's power comes from and who could overturn it.** A person without the method argues about whether a rule is good. A person with the method can say precisely which body holds which authority, on what document it rests, and how far it reaches, which is a different and more useful kind of knowing, and it is the same move whether the body is a city council, the European Union, or a housing co-op.

## The two boundaries, one last time

**This is how to read authority, not legal advice.** If you have a real dispute with an HOA, a union, or any body, the method helps you arrive at a lawyer already knowing the right questions; it does not replace one. **And on any contested-status question, this is description, not advocacy.** The course reads where power comes from; it does not tell you who ought to win a sovereignty dispute. Hold both boundaries into the capstone, where you take these tools to a body you choose yourself.

## Sources
- Montevideo Convention on the Rights and Duties of States, art. 1 (1933). https://avalon.law.yale.edu/20th_century/intam03.asp
- Marsh v. Alabama, 326 U.S. 501 (1946). https://supreme.justia.com/cases/federal/us/326/501/`,
      recallContent: [
        {
          prompt: "How does a union govern, and where does its authority come from?",
          answer: "A union is a self-governing organization of workers. Under the National Labor Relations Act (1935), a union chosen by a bargaining unit becomes the exclusive bargaining representative, empowered to negotiate the terms of employment for everyone in the unit, including those who did not vote for it. Its source is a statute (the NLRA) plus the union's own constitution; the instrument is the collective bargaining agreement.",
        },
        {
          prompt: "Rank the four Section 4 communities by how much the state stands behind them.",
          answer: "From most to least: the homeowners association (courts enforce liens), the cooperative (a recognized entity form) and the union (statutory bargaining power) both substantial, and the mutual-aid network (voluntary agreement of members) with little or no state backing. All four hold power through an entity or an agreement you can read.",
        },
        {
          prompt: "Where exactly is the hand-off to the business path?",
          answer: "The moment you ask how a self-governing community is structured (who owns it, who is liable, who decides, on what terms members join and leave), you leave the theory of government and enter the theory of the entity, which is Path B: every entity is a bundle of four decisions (liability, taxation, ownership and transfer, governance) readable from its formation documents.",
        },
      ],
    },
    {
      slug: "gws-capstone",
      title: "19 · Capstone: find a government without a state",
      section: "Section 5 · Put it to work",
      lessonType: "assignment",
      body: `You have the whole course now: the Montevideo criteria and the recognition argument, the supranational bodies above the state, the contested cases where statehood itself is disputed, and the self-governing communities beside and below the state that hand off to the business path. Use it on one real body. **Find a body with genuine authority over someone that is NOT a sovereign state, and map where its power comes from.**

**Two boundaries before you start, restated because a capstone is where people forget them.** First, **this is a research exercise in reading authority, not legal advice.** You are describing how a body holds power, not determining anyone's legal rights. Second, **if your body touches a contested-status question, you report and attribute, you do not adjudicate.** Describe the recognition disagreement and stop, exactly as Section 3 did.

## The assignment

Produce a **one-page map of one non-state authority.** Name the body, place it in one of the course's families, cite the instrument its power rests on, and answer the four method questions about it. **The finding is the map and the sources, not the prose.** Aim for a body whose power you can actually document.

## Step 1. Pick a body that is not a sovereign state

Choose one with real authority over someone. Good hunting grounds, one per section:

| Family | Examples to look for |
|---|---|
| **Above the state** | A supranational or international body: a regional union, an international organization |
| **Contested** | An entity whose statehood is disputed (handle under the neutrality rule) |
| **Beside or below** | An HOA, a housing co-op, a union, a professional licensing body, a mutual-aid group |

**A body you personally deal with is the best choice**, because you can find its actual governing documents. An HOA you live under, a union at your workplace, or a co-op you belong to will have a real, readable instrument.

## Step 2. Name the family and find the instrument

Say which family your body belongs to, then find the document its authority rests on: a treaty, a charter, a constitution, a recorded covenant, a set of bylaws, a membership agreement, a collective bargaining agreement. **Quote or cite the specific provision that grants the power.** That provision is where your map begins, and if you cannot find it, that is itself a finding: write down what you looked for and where.

## Step 3. Answer the four questions

For your body, fill the method:

| Question | What goes in it |
|---|---|
| **Who acts?** | The named body and the organ that exercises the power |
| **Under what authority?** | The power it claims and the kind of authority it is |
| **Where is the power from?** | The instrument: treaty, covenant, statute, charter, or agreement |
| **Who can overturn it?** | A court, the membership, a higher body, a legislature, or the members walking away |

**Leave a cell blank rather than guess.** A blank you can fill by reading one more document is honest; a confident wrong answer is not.

## Step 4. Say what KIND of non-state authority it is

Close by placing your body on the course's central idea: **it is a government without a state, so where does its power come from instead of sovereignty?** A treaty and conferred competences (above the state)? Effective control with recognition disputed (contested)? An entity and an instrument, a covenant, a corporate charter, a union constitution (beside or below)? **Naming the source of a non-state body's power is the whole skill this course set out to teach.**

## Rules you do not get to break

1. **From the instrument, not from memory.** Every claim ties to a document you can name: a treaty article, a covenant clause, a statute section, a set of bylaws.
2. **No invented body, clause, case, date, or figure.** If you cannot source it, it does not go on the map, or it goes on flagged "unverified."
3. **Report facts flatly; flag contested status as contested.** A declaration's date or a resolution's number is usually not disputed; a territory's ultimate status may be. Do not blur the two, and do not adjudicate the second.
4. **This is not legal advice, and not political advocacy.** Your page should say so at the top, because someone else may read it.

## What good looks like

A one-page map in which a real non-state body is named, its family identified, its governing instrument cited, and the four questions answered, with any contested-status point reported and attributed rather than decided. **If you took a body you deal with every day, an HOA, a union, a co-op, a regional union of nations, and showed from its own instrument exactly where its authority over people comes from, you did what this course set out to teach: you found a government without a state, and you mapped the source of its power.**

## Sources
- Montevideo Convention on the Rights and Duties of States, art. 1 (1933). https://avalon.law.yale.edu/20th_century/intam03.asp
- Charter of the United Nations, art. 2(1) (1945). https://www.un.org/en/about-us/un-charter/full-text
- Marsh v. Alabama, 326 U.S. 501 (1946). https://supreme.justia.com/cases/federal/us/326/501/`,
    },
  ],
};
