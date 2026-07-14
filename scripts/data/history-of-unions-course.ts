// Authored "The History of Unions: America and the World" — the HISTORY anchor of the
// workers'-rights track on Learn.WitUS. Written for high school students.
//
// Companion, NOT duplicate, to "Know Your Rights at Work": that course answers "what are my
// rights right now?" This one answers "how did we get here, and why is it different
// somewhere else?" Where they touch (the NLRA, farmworker organizing, Dolores Huerta), this
// course stays on the historical/legal-origin side and points across.
//
// Content standard (non-negotiable, because labor history is politically contested and full
// of confidently-repeated folklore):
//   * APA 7 in-line citations + a `## Sources` bibliography on EVERY teaching lesson.
//   * Primary/official sources wherever they exist: BLS, NLRB, ILO, OECD, Library of
//     Congress, National Archives, Truman Library, statute text, court opinions.
//   * No statistic without a YEAR and a SOURCE. Union-density figures are dated and their
//     caveats stated (the 2025 BLS figure is an 11-month average — the course says so).
//   * Where the historical record is genuinely unresolved — above all, WHO THREW THE BOMB AT
//     HAYMARKET — the course teaches the dispute instead of picking a side.
//   * The uncomfortable parts are taught, not skipped: unions' own history of racial and
//     gender exclusion, the NLRA's deliberate agricultural/domestic carve-out, and the
//     corruption chapters.
//   * No invented quotes, no invented statute sections, no invented case citations.
//
// The spine is a transferable analytical frame — the "four questions" (who may organise, who
// is excluded, who bargains with whom, what happens to you if you try) — introduced in
// Section 1, used on the US in Sections 2–5, and used on six very different countries in
// Section 6, so a student finishes able to read a country they have never studied.

import type { AuthoredCourse } from "./authored-course";

export const HISTORY_OF_UNIONS_COURSE: AuthoredCourse = {
  title: "The History of Unions: America and the World",
  description:
    "How working people organized — and what it cost them. The American arc from the Knights of Labor and Haymarket through the Triangle fire, the Wagner Act, Taft-Hartley, Memphis, and PATCO to today's union density, told with the parts a comfortable course skips: the law's deliberate exclusion of farm and domestic workers, unions' own record of racial and gender exclusion, and the corruption chapters. Then the world: there is no single \"union\" model. Nordic sectoral bargaining, German co-determination, Japanese enterprise unions, China's state-run federation, Solidarity and COSATU as democratic opposition, and the Gulf's migrant workers, who have almost no rights at all. You finish able to look at any country and ask the right four questions. Cited throughout to BLS, the NLRB, the ILO, the OECD, the Library of Congress, and the statutes themselves.",
  lessons: [
    // ── Section 1 · What a union is, and how to read any country ──────────────
    {
      slug: "what-is-a-union",
      section: "Section 1 · What a union is, and how to read any country",
      title: "1 · What a union actually is",
      body: `A **union** is a group of workers who deal with their employer *together* instead of one at a time.

That is the whole idea. Everything else — the strikes, the laws, the songs, the arguments — comes out of that one sentence.

Think about what happens without a union. You want a raise. You go to your boss alone. Your boss has one job to give and, in most cases, other people who would take it. You have one job to lose and, in most cases, rent due. That imbalance has a name in economics: the two of you are not bargaining from equal positions, even though you are both technically free to walk away.

Now imagine every worker in the building goes to the boss with the same request, at the same time, and agrees in advance that none of them will accept less. The boss cannot replace one person; the boss would have to replace everyone. The balance of the conversation changes. That is **collective bargaining**, and a union is the machinery that makes it possible: it elects representatives, negotiates a written contract, and enforces the contract when the employer breaks it.

A union contract — often called a **collective bargaining agreement** — typically covers pay, hours, benefits, safety rules, how discipline and firing work, and a **grievance procedure**: an agreed process for challenging a decision you think broke the contract.

Two things a union is *not*:

- **A union is not the government.** In most of the world it is a private organization, and it can only get what it can negotiate or force.
- **A union is not automatically good or automatically bad.** Unions have won the eight-hour day and fought to keep Black workers out of skilled trades. This course will show you both, because a course that only tells the heroic half is not a history course; it is an advertisement, and you would be right not to trust it.

One more distinction, because it matters for reading numbers later. **Union membership** means you have joined and (usually) pay dues. **Union coverage** means a union contract governs your job — whether or not you joined. In the United States, those two numbers are close. In France, as you will see in Section 6, they are wildly different, and the gap tells you something important about how that country works.

> **This course is the history.** Its companion course, *Know Your Rights at Work*, covers what your rights are on the job **today** — what the law protects when you speak up, and what to do about retaliation. This course explains where those rights came from, who was left out of them, and why the answers change the moment you cross a border.

:::reveal In one sentence, what is the core function of a union? ||| It lets workers deal with their employer collectively — bargaining as a group instead of one at a time — which changes the balance of power, because an employer can replace one worker far more easily than all of them.

## Sources
- National Labor Relations Board. (n.d.). *National Labor Relations Act*. https://www.nlrb.gov/guidance/key-reference-materials/national-labor-relations-act
- International Labour Organization. (n.d.). *Collective bargaining and labour relations*. https://www.ilo.org/topics/collective-bargaining-and-labour-relations
- Bureau of Labor Statistics. (2026, February 18). *Union members — 2025* (USDL-26-0200). U.S. Department of Labor. https://www.bls.gov/news.release/pdf/union2.pdf`,
    },
    {
      slug: "the-four-questions",
      section: "Section 1 · What a union is, and how to read any country",
      title: "2 · The four questions (the skill you are actually here for)",
      recallContent: [
        {
          prompt: "What is collective bargaining?",
          answer:
            "Workers negotiating with an employer as a group, through elected representatives, and agreeing in advance not to accept less — instead of each worker bargaining alone.",
        },
        {
          prompt: "What is the difference between union MEMBERSHIP and union COVERAGE?",
          answer:
            "Membership means you have joined the union. Coverage means a union contract governs your job, whether or not you joined. In the US the two numbers are close; in some countries they are very far apart.",
        },
      ],
      body: `You are going to meet a lot of countries in this course, and you will not remember all of them. That is fine. What you should walk out with is a **tool** — four questions that work on any country, in any year, including ones this course never mentions.

Here they are.

**1. Who is allowed to organise?**
Is forming a union legal? For everyone, or only for some people? Can you form *your own* union, or must you join the one the state already runs? Can you form more than one? (Hold on to that last one. It is the question that separates Sweden from China.)

**2. Who is excluded?**
Every labor system has people it leaves outside the fence. The interesting question is never "is anyone excluded" — someone always is. It is *who*, and *whether the exclusion was an accident or a decision*. In the United States, as you will see in Section 3, the exclusion of farm and domestic workers from the main labor law was a decision, and you can name the workers it removed.

**3. Who bargains with whom, and at what level?**
Does a union bargain with one company, one factory, or an entire industry at once? Does the government sit at the table? Do workers sit on the company's board? These sound like technical details. They are the single biggest reason a country with *fewer* union members than the US can have *far more* workers covered by union contracts.

**4. What happens to you if you try?**
The honest one. Can you be fired? Sued? Blacklisted? Arrested? Deported? Killed? Every country has a legal answer to this question and a real answer, and in a lot of places they are not the same answer. When they are not, say so — and say how you know.

---

Practise on a country you already live in or have heard of. You will not have the answers yet. Notice which of the four you cannot answer — that is the shape of what you are about to learn.

A note on evidence, since we are about to spend a course on a subject people argue about. **Labor history is politically contested.** Both "unions built the middle class" and "unions destroyed American industry" are things adults will say to you with total confidence. This course's rule, which you should steal: *every number gets a year and a source; where the record genuinely does not settle a question, we say that it does not, rather than picking the version we like.* You will see that rule get its hardest test in the very next section.

:::reveal Name the four questions you can ask about labor in any country. ||| (1) Who is allowed to organise? (2) Who is excluded? (3) Who bargains with whom, and at what level? (4) What happens to you if you try?

## Sources
- International Labour Organization. (n.d.). *Freedom of association*. https://www.ilo.org/topics/freedom-association-and-collective-bargaining
- OECD. (2025). *Membership of unions and employers' organisations, and bargaining coverage*. OECD Publishing. https://www.oecd.org/en/publications/membership-of-unions-and-employers-organisations-and-bargaining-coverage_fe47107c-en.html
- International Labour Organization. (2022). *Freedom of Association and Protection of the Right to Organise Convention, 1948 (No. 87)*. NORMLEX. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312232`,
    },
    {
      slug: "section-1-quiz",
      section: "Section 1 · What a union is, and how to read any country",
      title: "3 · Check yourself: what a union is",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the core function of a union?",
            options: [
              "To run the government's labor department",
              "To let workers deal with an employer collectively rather than one at a time",
              "To set the national minimum wage",
              "To provide health insurance to the unemployed",
            ],
            correctIndex: 1,
            explanation:
              "A union is the machinery of collective bargaining: workers negotiate as a group, which changes the balance of power because an employer can replace one worker far more easily than all of them.",
            sourceLessonSlug: "what-is-a-union",
          },
          {
            prompt: "What is a \"collective bargaining agreement\"?",
            options: [
              "A law passed by Congress setting workplace rules",
              "A written contract negotiated between a union and an employer covering pay, hours, safety, discipline and grievances",
              "An agreement between two unions not to compete",
              "A court order ending a strike",
            ],
            correctIndex: 1,
            explanation:
              "A collective bargaining agreement is the contract a union negotiates with an employer. It typically covers pay, hours, benefits, safety, how discipline works, and a grievance procedure.",
            sourceLessonSlug: "what-is-a-union",
          },
          {
            prompt: "What is a \"grievance procedure\"?",
            options: [
              "A union's process for expelling a member",
              "An agreed process for challenging an employer decision that a worker believes broke the union contract",
              "The government's process for certifying a union",
              "A vote to authorize a strike",
            ],
            correctIndex: 1,
            explanation:
              "The grievance procedure is how a contract gets enforced day to day: an agreed process to challenge a decision that appears to violate the agreement.",
            sourceLessonSlug: "what-is-a-union",
          },
          {
            prompt: "What is the difference between union MEMBERSHIP and union COVERAGE?",
            options: [
              "They mean the same thing",
              "Membership means you joined the union; coverage means a union contract governs your job, whether or not you joined",
              "Coverage means you joined; membership means the contract applies to you",
              "Membership applies to public workers; coverage applies to private workers",
            ],
            correctIndex: 1,
            explanation:
              "Membership = you joined. Coverage = a union contract governs your job regardless. The gap between the two is small in the US and enormous in some other countries — a clue to how their systems work.",
            sourceLessonSlug: "what-is-a-union",
          },
          {
            prompt: "Why does bargaining alone put an individual worker at a disadvantage?",
            options: [
              "Because individual workers are legally banned from negotiating",
              "Because the employer typically has one job to give and other applicants, while the worker has one job to lose",
              "Because employers are always dishonest",
              "Because federal law forbids one-on-one salary talks",
            ],
            correctIndex: 1,
            explanation:
              "The two sides are both free to walk away, but they are not walking away from the same thing. That asymmetry is the problem collective bargaining is designed to address.",
            sourceLessonSlug: "what-is-a-union",
          },
          {
            prompt: "Which of these is the FIRST of the four questions this course teaches you to ask about any country?",
            options: [
              "How many union members does it have?",
              "Who is allowed to organise?",
              "Is the country rich or poor?",
              "Does it have a minimum wage?",
            ],
            correctIndex: 1,
            explanation:
              "Question 1 is \"Who is allowed to organise?\" — including whether workers may form their own union, or must join one the state already runs.",
            sourceLessonSlug: "the-four-questions",
          },
          {
            prompt: "The second of the four questions asks \"Who is excluded?\" What does the course say is the interesting part of that question?",
            options: [
              "Whether anybody at all is excluded",
              "Who is excluded, and whether the exclusion was an accident or a deliberate decision",
              "How many people are excluded, as a percentage",
              "Whether the excluded workers voted in the last election",
            ],
            correctIndex: 1,
            explanation:
              "Someone is always excluded. The question that teaches you something is WHO — and whether the exclusion was designed. In the US, the carve-out of farm and domestic workers was a decision, not an oversight.",
            sourceLessonSlug: "the-four-questions",
          },
          {
            prompt: "Question 3 asks who bargains with whom, and at what level. Why does the course say this is not just a technical detail?",
            options: [
              "Because bargaining level determines a country's tax rate",
              "Because it explains how a country with FEWER union members than the US can still have FAR MORE workers covered by union contracts",
              "Because only sector-level bargaining is legal under international law",
              "Because company-level bargaining is always illegal",
            ],
            correctIndex: 1,
            explanation:
              "Bargaining level is the main reason density and coverage can diverge. A sector-wide agreement can cover workers who never joined anything.",
            sourceLessonSlug: "the-four-questions",
          },
          {
            prompt: "Question 4 — \"What happens to you if you try?\" — comes with a warning. What is it?",
            options: [
              "That the answer is the same in every country",
              "That a country's LEGAL answer and its REAL answer are often not the same, and you should say so and say how you know",
              "That the answer is never knowable",
              "That only lawyers may ask it",
            ],
            correctIndex: 1,
            explanation:
              "Every country has a legal answer to what happens when you organise, and a real one. Where they diverge, an honest course says so and shows its evidence.",
            sourceLessonSlug: "the-four-questions",
          },
          {
            prompt: "Which statement best describes this course's stance on unions?",
            options: [
              "Unions are always good and criticism of them is anti-worker",
              "Unions are always bad and destroyed American industry",
              "Unions have both won major protections and, at times, excluded workers by race and sex — the course teaches both, with sources",
              "The course takes no position on any factual question",
            ],
            correctIndex: 2,
            explanation:
              "The course teaches the eight-hour day AND the segregated locals. A history that tells only the heroic half is an advertisement, and students are right not to trust it.",
            sourceLessonSlug: "what-is-a-union",
          },
          {
            prompt: "The course says a union is NOT the government. What follows from that?",
            options: [
              "A union can pass laws directly",
              "In most of the world a union is a private organization, and can only get what it can negotiate or force",
              "A union cannot be sued",
              "A union's contract has no legal effect",
            ],
            correctIndex: 1,
            explanation:
              "That distinction matters enormously in Section 6, where you will meet a \"union\" that IS an arm of the state and therefore a genuinely different kind of object.",
            sourceLessonSlug: "what-is-a-union",
          },
          {
            prompt: "This course's rule about numbers is:",
            options: [
              "Round every statistic to the nearest whole number",
              "Every number gets a year and a source",
              "Only use numbers from the last twelve months",
              "Avoid statistics entirely because they are contested",
            ],
            correctIndex: 1,
            explanation:
              "Union-density and strike figures move, and are quoted without dates constantly. A number without a year is not evidence; it is a vibe.",
            sourceLessonSlug: "the-four-questions",
          },
          {
            prompt: "How does this course relate to its companion, *Know Your Rights at Work*?",
            options: [
              "They cover the same material at different reading levels",
              "This one is the history — how we got here and why it differs abroad; the companion covers what your rights are on the job today",
              "The companion is about union leadership elections",
              "This course replaces the companion",
            ],
            correctIndex: 1,
            explanation:
              "History versus present-day rights. This course explains where today's rights came from and who was left out of them.",
            sourceLessonSlug: "what-is-a-union",
          },
          {
            prompt: "What does the course say you should do when the historical record genuinely does not settle a question?",
            options: [
              "Pick the version most people believe",
              "Pick the version that fits the argument you are making",
              "Say that the record does not settle it, rather than picking a side",
              "Leave the question out of the course",
            ],
            correctIndex: 2,
            explanation:
              "That rule gets its hardest test in the very next section, with the Haymarket bombing — a killing whose perpetrator was never established.",
            sourceLessonSlug: "the-four-questions",
          },
          {
            prompt: "Which question would you ask to figure out why some workers in a country have no union protection AT ALL, even though unions are legal there?",
            options: [
              "Question 1 — who is allowed to organise?",
              "Question 2 — who is excluded?",
              "Question 3 — who bargains with whom?",
              "Question 4 — what happens to you if you try?",
            ],
            correctIndex: 1,
            explanation:
              "Unions being legal in general tells you nothing about who was carved out of the law. That is Question 2, and it is the one comfortable courses skip.",
            sourceLessonSlug: "the-four-questions",
          },
        ],
      },
    },
  ],
};
