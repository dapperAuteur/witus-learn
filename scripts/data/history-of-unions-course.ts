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

    // ── Section 2 · America before the law protected you (1869–1914) ──────────
    {
      slug: "knights-of-labor-and-the-afl",
      section: "Section 2 · America before the law protected you (1869–1914)",
      title: "4 · Two ideas about who a union is for: the Knights and the AFL",
      recallContent: [
        {
          prompt: "Which of the four questions asks whether the exclusion of a group of workers was an accident or a decision?",
          answer: "Question 2 — who is excluded?",
        },
        {
          prompt: "Why is bargaining LEVEL (company, sector, national) one of the four questions?",
          answer:
            "Because it explains how a country with fewer union members than the US can have far more workers covered by union contracts.",
        },
      ],
      body: `Before you can understand any American labor fight, you need to understand a fight *inside* the labor movement — about who a union is even for.

**The Knights of Labor** were founded in Philadelphia in 1869, originally as a secret society of garment cutters, and grew into something much stranger and more ambitious under Terence V. Powderly, who led them from 1879. Their answer to "who is a union for?" was: **almost everybody who works.** Skilled and unskilled. Factory hands and shopkeepers. They admitted women. They admitted Black workers, and by the mid-1880s tens of thousands of Black members had joined — remarkable for the era. At their 1886 peak, the Knights claimed on the order of 700,000 members (Library of Congress, n.d.-a).

And they excluded Chinese workers.

That is not a footnote. The Knights, and the broader white labor movement of the 1870s and 1880s, were among the loudest supporters of Chinese exclusion — the campaign that produced the **Chinese Exclusion Act of 1882**, the first US law to bar an entire nationality from immigrating (National Archives, n.d.). "Almost everybody who works" had a hard edge on it, and it was drawn by race. Hold that thought; you will see the same edge in Section 5, drawn against Black workers, by the very organization that replaced the Knights.

**The American Federation of Labor (AFL)** was founded in 1886 and led for most of its first four decades by Samuel Gompers. Its answer to "who is a union for?" was almost the opposite: **skilled workers, organized by craft.** Cigar makers with cigar makers, carpenters with carpenters. The AFL was not trying to remake society. Gompers' approach — later nicknamed "pure and simple unionism" — was to use the leverage skilled workers actually had to win concrete, immediate things: higher wages, shorter hours, better conditions. Not a new economic order. A better contract.

The two strategies have real trade-offs, and both are still alive today:

| | Knights of Labor | American Federation of Labor |
|---|---|---|
| Founded | 1869 | 1886 |
| Who it organized | Skilled *and* unskilled, across trades | Skilled workers, by craft |
| Goal | Broad social reform | Concrete gains: wages, hours, conditions |
| Strength | Enormous potential numbers | Real leverage — skilled labor is hard to replace |
| Weakness | Hard to hold together; collapsed fast | Left most workers — unskilled, Black, women, immigrant — outside |

The Knights collapsed within a few years. The AFL lasted, and its craft model dominated American unionism until the 1930s. That victory has a cost that shows up all through this course: **the strategy that won was the one that organized the fewest people.**

The AFL's most important early demand was the **eight-hour day**. In 1884 the Federation of Organized Trades and Labor Unions — the AFL's immediate predecessor — resolved that from **May 1, 1886**, eight hours would constitute a legal day's work, and called for strikes to make it real (Library of Congress, n.d.-b).

On May 1, 1886, hundreds of thousands of American workers walked out.

Three days later, a bomb went off in Chicago.

:::reveal What was the fundamental disagreement between the Knights of Labor and the AFL? ||| Who a union is for. The Knights tried to organize nearly all workers, skilled and unskilled, across trades, in service of broad social reform. The AFL organized skilled workers by craft and focused narrowly on wages, hours and conditions — leaving most workers outside.

## Sources
- Library of Congress. (n.d.-a). *Knights of Labor*. Library of Congress Web Guides / Chronicling America. https://guides.loc.gov/chronicling-america-knights-of-labor
- Library of Congress. (n.d.-b). *Haymarket Riot*. Chronicling America topics in the news. https://guides.loc.gov/chronicling-america-haymarket-riot
- National Archives. (n.d.). *Chinese Exclusion Act (1882)*. Milestone Documents. https://www.archives.gov/milestone-documents/chinese-exclusion-act
- AFL-CIO. (n.d.). *Our history*. https://aflcio.org/about-us/history`,
    },
    {
      slug: "haymarket-1886",
      section: "Section 2 · America before the law protected you (1869–1914)",
      title: "5 · Haymarket, 1886: a killing nobody was ever proved to have committed",
      recallContent: [
        {
          prompt: "Who did the Knights of Labor organize, and who did they exclude?",
          answer:
            "They organized skilled and unskilled workers across trades, including women and tens of thousands of Black members — but they excluded Chinese workers and supported the Chinese Exclusion Act of 1882.",
        },
        {
          prompt: "What was the AFL's strategy, and what did it cost?",
          answer:
            "Craft unionism for skilled workers, focused on concrete gains in wages, hours and conditions. It won and lasted — but it left most workers, including unskilled, Black, women and many immigrant workers, outside the union movement.",
        },
      ],
      body: `This is the lesson where this course does something you should demand of every history you read: **it refuses to tell you something it does not know.**

**What is not in dispute.**

The eight-hour strikes began on May 1, 1886. On **May 3**, police fired on strikers outside the McCormick Harvesting Machine Company in Chicago and killed several of them. Anarchist organizers called a protest rally for the next evening at **Haymarket Square**.

On the evening of **May 4, 1886**, the rally was small and, by the account of the mayor of Chicago — who attended and then went home — peaceable. As it was breaking up in the rain, a large body of police advanced to disperse the remaining crowd. **Someone threw a bomb into the police ranks.** Officer Mathias Degan was killed. In the gunfire that followed, more police died — seven officers in total — and an unknown number of civilians were killed and wounded. Some of the police casualties are believed to have been caused by police fire in the chaos (Library of Congress, n.d.; Chicago Historical Society & Northwestern University, n.d.).

Eight anarchists were put on trial for murder. Seven were sentenced to death and one, Oscar Neebe, to fifteen years. On **November 11, 1887**, four men — August Spies, Albert Parsons, Adolph Fischer and George Engel — were hanged. Louis Lingg died by suicide in his cell the day before. Two sentences were commuted to life imprisonment. On **June 26, 1893**, Illinois Governor John Peter Altgeld **pardoned** the three surviving prisoners — Samuel Fielden, Oscar Neebe and Michael Schwab — and issued a written pardon message attacking the fairness of the trial itself. It ended his political career.

**What IS in dispute — and was never resolved.**

**Nobody knows who threw the bomb.** The state never identified the bomb-thrower. It never produced the bomb-thrower. It never claimed to have produced the bomb-thrower.

Read that again, because it is the whole point of this lesson. The prosecution's theory was **conspiracy**: that the defendants' speeches and writings had incited an unknown person to throw the bomb, and that this made them responsible for the murder. The trial judge instructed the jury, in effect, that the identity of the actual bomber did not matter. Most of the defendants were not even at the square when the bomb went off (Chicago Historical Society & Northwestern University, n.d.).

Historians have argued about the bomb-thrower for well over a century. Names have been proposed. None has ever been established. **This course is not going to tell you who did it, because the historical record does not tell us who did it.**

Be suspicious of any source that does tell you, on either side. You will meet confident accounts that the bomb was thrown by a police agent to discredit the labor movement, and confident accounts that it was thrown by an anarchist exactly as the prosecution claimed. Both are *possible*. Neither is *proved*. Watch which one a given author happens to need to be true.

**What is not in dispute is what the trial did.**

Four men were executed for a killing the state never proved any of them committed or ordered, in a proceeding a sitting governor later condemned in writing. The Chicago police, in the raids that followed, arrested and beat labor organizers across the city. The eight-hour movement collapsed. The Knights of Labor, wrongly associated with the anarchists in the public mind, went into a decline they never recovered from.

And **May 1** became **International Workers' Day** across much of the world, in memory of Haymarket — which is why most countries mark labor's holiday on May 1 and the United States, which is where it happened, does not.

> **A word on that last fact**, because it is a favourite of confident people. You will hear that an American president deliberately moved the labor holiday to September to bury the memory of Haymarket. Be careful. The **September** date came from union parades and state holiday laws in the 1880s — Oregon passed the first state Labor Day law in 1887 — well before Congress made the first Monday in September a federal holiday on **June 28, 1894** (U.S. Department of Labor, n.d.). The *motives* of the men who voted for it are a matter of interpretation. The *dates* are not. Keep those apart.

:::reveal Who threw the bomb at Haymarket on May 4, 1886? ||| Nobody knows. The state never identified or produced the bomb-thrower; the prosecution's theory was that the defendants had incited an unknown person, and the judge instructed the jury that the bomber's identity did not matter. Four men were executed anyway. Any source that names the bomber with confidence is going beyond the evidence.

## Sources
- Library of Congress. (n.d.). *Haymarket Riot: Topics in Chronicling America*. https://guides.loc.gov/chronicling-america-haymarket-riot
- Chicago Historical Society & Northwestern University. (n.d.). *The Haymarket Affair Digital Collection*. https://www.chicagohistory.org/haymarket-affair/
- Altgeld, J. P. (1893, June 26). *Reasons for pardoning Fielden, Neebe and Schwab*. Illinois Executive Office. Reproduced in the Haymarket Affair Digital Collection, Chicago Historical Society. https://www.chicagohistory.org/haymarket-affair/
- U.S. Department of Labor. (n.d.). *History of Labor Day*. https://www.dol.gov/general/laborday/history`,
    },
    {
      slug: "homestead-pullman-and-the-injunction",
      section: "Section 2 · America before the law protected you (1869–1914)",
      title: "6 · Homestead, Pullman, and the weapon that actually broke strikes",
      recallContent: [
        {
          prompt: "Who threw the bomb at Haymarket?",
          answer:
            "It was never established. The state never identified or produced the bomb-thrower, and the judge told the jury the bomber's identity did not matter. Four men were hanged on a conspiracy theory of the case.",
        },
        {
          prompt: "What did Governor Altgeld do in 1893, and why does it matter?",
          answer:
            "He pardoned the three surviving Haymarket prisoners and issued a written message attacking the fairness of the trial — a sitting governor's judgment that the proceeding itself was unjust. It ended his political career.",
        },
      ],
      body: `Two strikes, six years apart, taught American workers the same lesson from two directions.

**Homestead, 1892 — losing to private force.**

Andrew Carnegie's steel works at Homestead, Pennsylvania was one of the few big mills where a union — the Amalgamated Association of Iron and Steel Workers — had real strength. Carnegie left for Scotland and handed the plant to Henry Clay Frick with a clear mandate. Frick cut wages, and when the union refused, he locked the workers out and ringed the plant with a barbed-wire fence.

In the dark of **July 6, 1892**, roughly 300 armed **Pinkerton** agents — a *private* detective force, hired by the company — came up the Monongahela River on barges to retake the plant. The town was waiting. A gun battle went on for most of a day. **Seven workers and three Pinkertons were killed** (Library of Congress, n.d.). The workers won the battle: the Pinkertons surrendered.

Then the Governor of Pennsylvania sent roughly 8,500 state militia, the plant reopened with replacement workers, and the union was destroyed. Frick said the company would never again deal with the Amalgamated Association, and it did not. **Steel in America stayed effectively non-union for the next forty years.**

**Pullman, 1894 — losing to the courts.**

George Pullman built railcars outside Chicago, in a company town he also owned, where his workers rented his houses and bought from his stores. In the depression of 1893 he cut wages by about 25% — and did not cut the rents (Britannica, n.d.). Workers struck on May 11, 1894.

The **American Railway Union**, led by **Eugene V. Debs**, backed them with a boycott: from late June 1894, ARU members refused to handle any train carrying a Pullman car. It was enormously effective. Rail traffic across the country stopped.

And here is the part to remember. The strike was not broken by Pinkertons. It was broken by a **court order**.

US Attorney General Richard Olney went to federal court and obtained an **injunction** — a judge's order — against Debs and the ARU, forbidding them from doing essentially anything to continue the boycott. The legal hooks were that the boycott obstructed the US mail and restrained interstate commerce under the Sherman Antitrust Act, a law written to control monopolies. President Cleveland sent federal troops to Chicago to enforce it. Debs kept going, was jailed for **contempt of court** — not for any crime of violence — and in **In re Debs, 158 U.S. 564 (1895)**, the Supreme Court unanimously upheld the government's power to get that injunction and jail him for defying it (Federal Judicial Center, n.d.).

Two days into the boycott, on **June 28, 1894**, Congress made Labor Day a federal holiday (U.S. Department of Labor, n.d.). Weeks later the strike was crushed.

**The weapon.**

For the next four decades, the **labor injunction** was the most effective anti-union tool in America. A judge could order a strike stopped, usually without a trial and often without hearing the union at all; defy it and you went to jail. Two other legal facts stacked on top of it:

- **Unions could be treated as illegal restraints of trade.** In **Loewe v. Lawlor, 208 U.S. 274 (1908)** — the "Danbury Hatters" case — the Supreme Court held the **Sherman Antitrust Act** applied to a union boycott, and individual union members were held personally liable for damages.
- **You could be made to promise not to join.** A **"yellow-dog contract"** was a condition of hire: sign a paper agreeing you would not join a union. Courts enforced them.

It took an act of Congress to blunt this. The **Norris-LaGuardia Act of 1932** sharply limited federal courts' power to issue injunctions in labor disputes and made yellow-dog contracts unenforceable in federal court (29 U.S.C. §§ 101–115).

Notice what has *not* happened yet, in 1932. Nothing in this lesson gave workers a **right** to organize. Norris-LaGuardia just told the federal courts to stop helping the other side. The right itself arrives in the next section — and it arrives with a hole cut in it.

:::reveal What actually broke the Pullman strike of 1894, and why is that significant? ||| A federal court injunction. Attorney General Olney obtained a court order against Debs and the American Railway Union; Debs was jailed for contempt of court, and In re Debs (1895) upheld it. For the next forty years the labor injunction — not private guards — was the most effective anti-union weapon in America.

## Sources
- Library of Congress. (n.d.). *1892 Homestead Strike*. This Month in Business History. https://guides.loc.gov/this-month-in-business-history/july/1892-homestead-strike
- Federal Judicial Center. (n.d.). *The Debs case: Labor, capital, and the federal courts of the 1890s*. https://www.fjc.gov/history/famous-federal-trials/debs-case-labor-capital-and-federal-courts-1890s
- In re Debs, 158 U.S. 564 (1895). Library of Congress. https://www.loc.gov/item/usrep158564/
- Loewe v. Lawlor, 208 U.S. 274 (1908). Library of Congress. https://www.loc.gov/item/usrep208274/
- Norris-LaGuardia Act, 29 U.S.C. §§ 101–115 (1932). Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?path=/prelim@title29/chapter6&edition=prelim
- Britannica. (n.d.). *Pullman Strike*. https://www.britannica.com/event/Pullman-Strike
- U.S. Department of Labor. (n.d.). *History of Labor Day*. https://www.dol.gov/general/laborday/history`,
    },
    {
      slug: "section-2-quiz",
      section: "Section 2 · America before the law protected you (1869–1914)",
      title: "7 · Check yourself: before the law protected you",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was the Knights of Labor's answer to \"who is a union for?\"",
            options: [
              "Only skilled craftsmen",
              "Almost everybody who works — skilled and unskilled, across trades",
              "Only workers in a single company",
              "Only union officers",
            ],
            correctIndex: 1,
            explanation:
              "The Knights organized broadly across skill lines, admitted women, and had tens of thousands of Black members — while excluding Chinese workers.",
            sourceLessonSlug: "knights-of-labor-and-the-afl",
          },
          {
            prompt: "Which group did the Knights of Labor and much of the white labor movement of the 1880s actively work to EXCLUDE?",
            options: ["Irish workers", "Chinese workers", "Women", "Coal miners"],
            correctIndex: 1,
            explanation:
              "White labor organizations were among the loudest supporters of Chinese exclusion, the campaign behind the Chinese Exclusion Act of 1882 — the first US law barring an entire nationality from immigrating.",
            sourceLessonSlug: "knights-of-labor-and-the-afl",
          },
          {
            prompt: "The AFL, founded in 1886 and led by Samuel Gompers, organized workers primarily:",
            options: [
              "By craft — skilled workers grouped by trade",
              "By industry — everyone in a factory in one union",
              "By political party",
              "By state of residence",
            ],
            correctIndex: 0,
            explanation:
              "Craft unionism: cigar makers with cigar makers, carpenters with carpenters. Skilled workers had leverage because they were hard to replace.",
            sourceLessonSlug: "knights-of-labor-and-the-afl",
          },
          {
            prompt: "What does the course say was the cost of the AFL's strategy winning?",
            options: [
              "It made unions illegal",
              "The strategy that won was the one that organized the FEWEST people — leaving unskilled, Black, women and many immigrant workers outside",
              "It forced all unions to merge",
              "It ended collective bargaining in the US",
            ],
            correctIndex: 1,
            explanation:
              "Craft unionism dominated American labor until the 1930s. Its leverage was real, and so was its narrowness — which is why the CIO had to be invented.",
            sourceLessonSlug: "knights-of-labor-and-the-afl",
          },
          {
            prompt: "What demand brought hundreds of thousands of American workers into the streets on May 1, 1886?",
            options: ["The right to vote", "The eight-hour day", "A federal minimum wage", "An end to child labor"],
            correctIndex: 1,
            explanation:
              "The eight-hour movement had set May 1, 1886 as the date from which eight hours would constitute a legal day's work — and called strikes to make it real.",
            sourceLessonSlug: "knights-of-labor-and-the-afl",
          },
          {
            prompt: "Who threw the bomb at Haymarket Square on May 4, 1886?",
            options: [
              "August Spies, who was later hanged for it",
              "A Chicago police agent, as historians have proven",
              "It was never established — the state never identified or produced the bomb-thrower",
              "An unnamed Pinkerton detective, per the trial record",
            ],
            correctIndex: 2,
            explanation:
              "This is the point of the lesson. The record does not settle it. Confident claims in either direction go beyond the evidence — watch which version a given author needs to be true.",
            sourceLessonSlug: "haymarket-1886",
          },
          {
            prompt: "On what legal theory were the eight Haymarket defendants convicted of murder?",
            options: [
              "Eyewitness identification of the bomb-thrower",
              "Conspiracy — that their speeches and writings incited an unknown person to throw the bomb",
              "Their fingerprints on the bomb casing",
              "A confession from one of them",
            ],
            correctIndex: 1,
            explanation:
              "The judge instructed the jury that the identity of the actual bomber did not matter. Most defendants were not even at the square when it exploded.",
            sourceLessonSlug: "haymarket-1886",
          },
          {
            prompt: "What did Illinois Governor John Peter Altgeld do on June 26, 1893?",
            options: [
              "Ordered the National Guard into Chicago",
              "Pardoned the three surviving Haymarket prisoners and attacked the trial's fairness in writing",
              "Signed the Chinese Exclusion Act",
              "Founded the American Federation of Labor",
            ],
            correctIndex: 1,
            explanation:
              "Altgeld pardoned Fielden, Neebe and Schwab and condemned the proceeding itself. It ended his political career.",
            sourceLessonSlug: "haymarket-1886",
          },
          {
            prompt: "Why do most countries mark labor's holiday on May 1 while the United States does not?",
            options: [
              "May 1 became International Workers' Day in memory of Haymarket — which happened in the US",
              "May 1 is a European agricultural festival unrelated to labor",
              "The US never had a labor holiday",
              "The ILO ordered the US to use September",
            ],
            correctIndex: 0,
            explanation:
              "The world commemorates a Chicago event the US itself marks in September. The dates are documented; the motives of the men who chose September are interpretation — keep those apart.",
            sourceLessonSlug: "haymarket-1886",
          },
          {
            prompt: "At Homestead in 1892, who came up the river on barges to retake Carnegie's plant?",
            options: [
              "Federal troops",
              "Roughly 300 armed Pinkerton agents — a PRIVATE detective force hired by the company",
              "The Pennsylvania state police",
              "Members of a rival union",
            ],
            correctIndex: 1,
            explanation:
              "Seven workers and three Pinkertons were killed. The workers actually won that battle — then the state militia arrived and the union was destroyed anyway.",
            sourceLessonSlug: "homestead-pullman-and-the-injunction",
          },
          {
            prompt: "What was the long-run result of the Homestead strike for the American steel industry?",
            options: [
              "Steel became the most heavily unionized industry in America",
              "Steel stayed effectively non-union for roughly the next forty years",
              "Carnegie recognized the union and raised wages",
              "Congress banned private detective agencies",
            ],
            correctIndex: 1,
            explanation:
              "Frick said the company would never deal with the Amalgamated Association again, and it did not. Steel was not seriously reorganized until the 1930s.",
            sourceLessonSlug: "homestead-pullman-and-the-injunction",
          },
          {
            prompt: "What actually broke the Pullman strike of 1894?",
            options: [
              "Pinkerton guards",
              "A federal court injunction, enforced by troops, with Debs jailed for contempt of court",
              "A vote of the American Railway Union to give up",
              "A settlement in which Pullman restored wages",
            ],
            correctIndex: 1,
            explanation:
              "Attorney General Olney got a court order; Debs was jailed for contempt — not for violence. In re Debs (1895) upheld the whole apparatus unanimously.",
            sourceLessonSlug: "homestead-pullman-and-the-injunction",
          },
          {
            prompt: "In Loewe v. Lawlor (1908), the \"Danbury Hatters\" case, the Supreme Court held that:",
            options: [
              "Unions have a constitutional right to strike",
              "The Sherman Antitrust Act — a law aimed at monopolies — applied to a union boycott, and individual members could be personally liable",
              "Yellow-dog contracts were unconstitutional",
              "Federal courts could not issue labor injunctions",
            ],
            correctIndex: 1,
            explanation:
              "An antitrust statute written to control corporate monopolies was turned on organized workers, with personal liability for members.",
            sourceLessonSlug: "homestead-pullman-and-the-injunction",
          },
          {
            prompt: "What was a \"yellow-dog contract\"?",
            options: [
              "A contract requiring union membership as a condition of employment",
              "A condition of hire under which a worker signed a promise NOT to join a union",
              "A union's agreement not to strike for a fixed term",
              "A federal court order ending a strike",
            ],
            correctIndex: 1,
            explanation:
              "Courts enforced them. The Norris-LaGuardia Act of 1932 finally made them unenforceable in federal court.",
            sourceLessonSlug: "homestead-pullman-and-the-injunction",
          },
          {
            prompt: "What did the Norris-LaGuardia Act of 1932 do — and what did it NOT do?",
            options: [
              "It gave workers a legal right to organize and required employers to bargain",
              "It limited federal courts' power to issue labor injunctions and made yellow-dog contracts unenforceable — but it did NOT give workers a right to organize",
              "It created the National Labor Relations Board",
              "It banned strikes in interstate commerce",
            ],
            correctIndex: 1,
            explanation:
              "Norris-LaGuardia told the federal courts to stop helping the other side. It did not create a right. That arrives in 1935 — with a hole cut in it.",
            sourceLessonSlug: "homestead-pullman-and-the-injunction",
          },
        ],
      },
    },

    // ── Section 3 · Fire, law, and the New Deal (1911–1938) ───────────────────
    {
      slug: "triangle-shirtwaist-1911",
      section: "Section 3 · Fire, law, and the New Deal (1911–1938)",
      title: "8 · The Triangle fire, 1911 — and what it actually changed",
      recallContent: [
        {
          prompt: "What was a labor injunction, and why was it so effective against strikes?",
          answer:
            "A judge's order — often issued without a trial and sometimes without hearing the union at all — forbidding a strike or boycott. Defy it and you went to jail for contempt, as Eugene Debs did in 1894.",
        },
        {
          prompt: "What did the Norris-LaGuardia Act of 1932 do?",
          answer:
            "It sharply limited federal courts' power to issue injunctions in labor disputes and made yellow-dog contracts unenforceable in federal court. It did NOT give workers any right to organize.",
        },
      ],
      body: `On the afternoon of **Saturday, March 25, 1911**, a fire started on the eighth floor of the Triangle Waist Company, a garment factory occupying the top three floors of a building just off Washington Square in New York City. **One hundred and forty-six workers died** — most of them young immigrant women and girls, many Italian and Eastern European Jewish, some as young as fourteen.

They died because of the building, not the fire. The stairway door to Washington Place was locked — a common practice, to stop workers stealing and to funnel them past an inspection point at the end of a shift. The single fire escape buckled and collapsed. The fire department's ladders reached only to about the sixth floor. Workers who could not get out jumped from the ninth-floor windows, in view of a crowd on the street.

**Three things about this story that get left out, and shouldn't be.**

**One: the workers had already asked.** In 1909–1910, tens of thousands of New York shirtwaist makers — overwhelmingly young immigrant women — walked out in a strike remembered as the **Uprising of the 20,000**, demanding better pay, shorter hours, *and safety conditions*. Many shops settled. **Triangle was one of the shops that refused.** The women who died had already tried to fix this the peaceful, organized, legal way, and had been beaten.

**Two: nobody went to prison.** The owners, Max Blanck and Isaac Harris, were tried for manslaughter and, on **December 27, 1911, acquitted** — the jury was not satisfied it had been proved they *knew* the door was locked. A civil settlement years later paid the families a token sum per life.

**Three: what changed was state law, not federal law, and it took politics.** The fire produced the **New York State Factory Investigating Commission** (1911), which spent years inspecting workplaces and produced dozens of new **New York State** laws on fire safety, machinery guarding, and hours for women and children.

Look at who ran that commission. Its leaders were state senator **Robert F. Wagner** and assemblyman **Alfred E. Smith**. One of its investigators was a young reformer named **Frances Perkins**, who had watched the fire from the street.

Twenty-four years later, Robert Wagner would be the United States Senator who wrote the **National Labor Relations Act**. Frances Perkins would be Franklin Roosevelt's **Secretary of Labor** — the first woman in a US Cabinet — and one of the architects of Social Security and the Fair Labor Standards Act.

So the honest version of "the Triangle fire changed America" is not that horror alone produced reform. It is that **146 deaths radicalized a specific set of politicians who were standing there, and those people were still in the room twenty-four years later when the law got written.** Outrage does not become law by itself. It becomes law when it lands on someone who later holds a pen.

:::reveal What did the Triangle fire actually change, immediately — and how did it eventually reach federal law? ||| Immediately, it produced the New York State Factory Investigating Commission and dozens of NEW YORK STATE laws on fire safety, machinery and hours — not federal law. It reached federal law through people: the commission's leaders included Robert F. Wagner, who later wrote the National Labor Relations Act, and its investigators included Frances Perkins, who became FDR's Secretary of Labor.

## Sources
- Cornell University ILR School, Kheel Center. (n.d.). *The 1911 Triangle Factory Fire*. https://trianglefire.ilr.cornell.edu/
- Cornell University ILR School, Kheel Center. (n.d.). *The trial*. The 1911 Triangle Factory Fire. https://trianglefire.ilr.cornell.edu/story/theTrial.html
- New York State Department of Labor. (n.d.). *The Triangle Shirtwaist Factory fire and the New York State Factory Investigating Commission*. https://dol.ny.gov/triangle-factory-fire
- U.S. Department of Labor. (n.d.). *Frances Perkins*. https://www.dol.gov/general/aboutdol/hallofsecretaries/perkins`,
    },
    {
      slug: "the-wagner-act-1935",
      section: "Section 3 · Fire, law, and the New Deal (1911–1938)",
      title: "9 · 1935: the year organizing became a right",
      recallContent: [
        {
          prompt: "What happened to the owners of the Triangle Waist Company?",
          answer:
            "Max Blanck and Isaac Harris were tried for manslaughter and acquitted on December 27, 1911. A civil settlement years later paid the families a token sum per life lost.",
        },
        {
          prompt: "Who ran the New York Factory Investigating Commission, and why does that matter for the 1930s?",
          answer:
            "Robert F. Wagner and Alfred E. Smith led it, and Frances Perkins investigated for it. Wagner later wrote the National Labor Relations Act; Perkins became FDR's Secretary of Labor.",
        },
      ],
      body: `Everything you have read so far happened in a country where organizing a union was **not a right**. It was, at best, something the law had stopped actively punishing.

That changed on **July 5, 1935**, when President Roosevelt signed the **National Labor Relations Act** — the **Wagner Act**, after the senator from the last lesson.

**What Section 7 says.** This is the sentence the rest of American labor law hangs on:

> "Employees shall have the right to self-organization, to form, join, or assist labor organizations, to bargain collectively through representatives of their own choosing, and to engage in other concerted activities for the purpose of collective bargaining or other mutual aid or protection..." (National Labor Relations Act, 29 U.S.C. § 157)

Read the last part again: **"other concerted activities... for mutual aid or protection."** That phrase reaches beyond unions. Two coworkers talking about their pay are engaged in concerted activity. It is the legal root of a lot of what your companion course, *Know Your Rights at Work*, teaches about what you may do on the job **today** — which is where you should go for how it applies to you now.

**What the Act actually did, in plain terms:**

1. **It made organizing a legal right**, not merely a tolerated activity.
2. **It made it an "unfair labor practice" for an employer to interfere** — to fire you for organizing, to threaten you, to run a company-controlled fake union, to refuse to bargain with a union your coworkers chose (29 U.S.C. § 158(a)).
3. **It created the National Labor Relations Board (NLRB)** — a federal agency to run union elections and enforce those rules. The government now had a referee, and a *process* replaced the street.
4. **It required the employer to bargain** with the union a majority of workers chose. Not to agree — to bargain, in good faith.

**Did it survive?** Nobody was sure. The Supreme Court had been striking down New Deal laws. In **NLRB v. Jones & Laughlin Steel Corp., 301 U.S. 1 (1937)**, the Court upheld the Wagner Act, holding that Congress could regulate labor relations in manufacturing under its power over interstate commerce (Constitution Annotated, n.d.).

The effect was fast and enormous. Union membership in the United States roughly tripled between the mid-1930s and the mid-1940s. The strikes and organizing drives of that decade — you will meet them in Section 4 — were possible because, for the first time, **a worker who got fired for organizing had somewhere to go.**

Which raises the obvious question, and it is the question the next lesson exists to answer:

**Everyone?**

:::reveal What is the single most important thing the Wagner Act (1935) did that no earlier US law had done? ||| It made organizing an affirmative legal RIGHT — Section 7 — and backed it with a federal agency (the NLRB) that could run union elections and punish employers who interfered. Earlier laws had at most stopped the courts from helping the employer; none had created a right.

## Sources
- National Labor Relations Act, 29 U.S.C. §§ 151–169 (1935). Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?path=/prelim@title29/chapter7/subchapter2&edition=prelim
- National Labor Relations Board. (n.d.). *National Labor Relations Act*. https://www.nlrb.gov/guidance/key-reference-materials/national-labor-relations-act
- National Labor Relations Board. (n.d.). *1935 passage of the Wagner Act*. Our history. https://www.nlrb.gov/about-nlrb/who-we-are/our-history/1935-passage-of-the-wagner-act
- NLRB v. Jones & Laughlin Steel Corp., 301 U.S. 1 (1937). Constitution Annotated, Congress.gov. https://constitution.congress.gov/browse/essay/artI-S8-C3-7-3/ALDE_00013310/`,
    },
    {
      slug: "who-the-wagner-act-left-out",
      section: "Section 3 · Fire, law, and the New Deal (1911–1938)",
      title: "10 · The hole in the law: who the Wagner Act left out",
      recallContent: [
        {
          prompt: "Quote the core right created by Section 7 of the National Labor Relations Act.",
          answer:
            "Employees have the right to self-organization, to form, join, or assist labor organizations, to bargain collectively through representatives of their own choosing, and to engage in other concerted activities for the purpose of collective bargaining or other mutual aid or protection.",
        },
        {
          prompt: "What case upheld the Wagner Act, and in what year?",
          answer: "NLRB v. Jones & Laughlin Steel Corp., 301 U.S. 1 (1937).",
        },
      ],
      body: `Section 7 gives rights to "**employees**." So the whole Act turns on one definition — and the definition has a list of people it says are not employees.

Here is the operative text. It is still the law today, and it has never been amended on this point:

> "The term 'employee' shall include any employee... **but shall not include any individual employed as an agricultural laborer, or in the domestic service of any family or person at his home**, or any individual employed by his parent or spouse, or any individual having the status of an independent contractor, or any individual employed as a supervisor, or any individual employed by an employer subject to the Railway Labor Act..." (National Labor Relations Act, 29 U.S.C. § 152(3))

Farm workers. Domestic workers — housekeepers, cooks, nannies, care workers in the home.

Cut out. Not by an oversight. **By a clause.**

**Why this is not a technicality.**

In the 1930s, agricultural and domestic labour were the occupations in which Black Americans — the great majority of whom still lived in the rural South — were overwhelmingly concentrated. To write "not agricultural laborers, not domestic servants" into a statute in 1935 was to write a very large share of Black workers out of the country's central labor law without ever using a racial word. Mexican and Mexican-American farm workers in the Southwest were removed by the same clause.

The same exclusions appear in the **Social Security Act of 1935** and, in a different form, the **Fair Labor Standards Act of 1938** — the minimum-wage and overtime law. It is a pattern, not a coincidence.

**Now: how sure can we be about *why*?** This is where the course makes you do the harder thing.

- **The text is not in dispute.** You just read it.
- **The effect is not in dispute.** It excluded a disproportionate share of Black and Latino workers, and that is measurable.
- **The motive is a historical argument.** The most influential scholarly case that the exclusion was a deliberate, race-conscious concession is Juan Perea's *The Echoes of Slavery* (2011), which traces the price Southern Democrats — who chaired the key congressional committees — demanded for supporting New Deal legislation. Other scholars point out that similar exclusions existed in earlier labour statutes and were also defended on administrative grounds. **You do not have to resolve that to see clearly.** A law can be racially devastating in effect whether or not you can prove what was in a particular senator's head, and the effect is what the workers lived.

**The consequence: organizing outside the law.**

Because farm workers had no NLRA rights, they had no NLRB election, no protection from being fired for organizing, and no legal duty on the grower to bargain. So the great farmworker organizing of the 1960s — the grape strike and boycott led by the United Farm Workers, Cesar Chavez and Dolores Huerta — could not use the machinery every factory worker had. It had to be built out of strikes, marches, fasts, and a **consumer boycott** that reached shoppers in supermarkets thousands of miles away. That was not a stylistic choice. **It was a workaround for a legal exclusion**, and it is the direct reason farmworker organizing looks so different from auto or steel organizing.

It eventually produced a law — a **state** one. California's **Agricultural Labor Relations Act of 1975** gave farm workers in that state the collective-bargaining rights the federal law had denied them for forty years. Most states still have no equivalent. **The federal exclusion is still there.**

Domestic workers took even longer. New York passed the first state **Domestic Workers' Bill of Rights** in **2010**; a handful of other states have followed. The federal carve-out remains.

> Dolores Huerta appears in your companion course, *Know Your Rights at Work*, among the people who changed what workers can do. Here, notice the structural point rather than the biography: **she had to invent a different kind of organizing because a clause in a 1935 statute said the ordinary kind did not apply to the people she represented.**

:::reveal Which two large groups of workers does the NLRA's definition of "employee" (29 U.S.C. § 152(3)) explicitly exclude, and what is the practical consequence? ||| Agricultural laborers and domestic workers. They have no federally protected right to organize, no NLRB election, no protection from being fired for organizing, and no employer duty to bargain — which is why farmworker organizing had to be built outside the law, on strikes, marches and consumer boycotts.

## Sources
- National Labor Relations Act, 29 U.S.C. § 152(3) (1935). Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section152&edition=prelim
- National Labor Relations Board. (n.d.). *Are you covered?* https://www.nlrb.gov/about-nlrb/rights-we-protect/the-law/employees/are-you-covered
- Perea, J. F. (2011). The echoes of slavery: Recognizing the racist origins of the agricultural and domestic worker exclusion from the National Labor Relations Act. *Ohio State Law Journal, 72*(1), 95–138. https://lawecommons.luc.edu/facpubs/151/
- California Agricultural Labor Relations Board. (n.d.). *The Agricultural Labor Relations Act of 1975*. State of California. https://www.alrb.ca.gov/resources/the-alra/
- Library of Congress. (n.d.). *Dolores Huerta and the United Farm Workers*. https://guides.loc.gov/latinx-civil-rights/labor-rights`,
    },
    {
      slug: "section-3-quiz",
      section: "Section 3 · Fire, law, and the New Deal (1911–1938)",
      title: "11 · Check yourself: fire, law, and the hole in the law",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How many workers died in the Triangle Waist Company fire on March 25, 1911?",
            options: ["46", "146", "246", "1,146"],
            correctIndex: 1,
            explanation:
              "146 workers died, most of them young immigrant women and girls. They died because of the building — a locked stairway door, a collapsing fire escape, ladders that reached only to about the sixth floor.",
            sourceLessonSlug: "triangle-shirtwaist-1911",
          },
          {
            prompt: "What is the \"Uprising of the 20,000,\" and why does the course insist on mentioning it in the Triangle lesson?",
            options: [
              "A 1911 protest march held after the fire",
              "A 1909–1910 shirtwaist workers' strike demanding pay, hours AND safety — which Triangle refused to settle",
              "The union that organized the Homestead steelworkers",
              "A Chicago rally that preceded Haymarket",
            ],
            correctIndex: 1,
            explanation:
              "The women who died had already tried to fix this the organized, legal way, and Triangle was one of the shops that refused to settle. The strike came BEFORE the fire.",
            sourceLessonSlug: "triangle-shirtwaist-1911",
          },
          {
            prompt: "What happened to Triangle's owners, Max Blanck and Isaac Harris?",
            options: [
              "Both were convicted of manslaughter and imprisoned",
              "Both were acquitted of manslaughter on December 27, 1911",
              "Both fled the country before trial",
              "They were never charged",
            ],
            correctIndex: 1,
            explanation:
              "They were tried and acquitted; the jury was not satisfied it had been proved they knew the door was locked. A later civil settlement paid families a token sum per life.",
            sourceLessonSlug: "triangle-shirtwaist-1911",
          },
          {
            prompt: "What did the Triangle fire produce IMMEDIATELY?",
            options: [
              "The National Labor Relations Act",
              "The New York State Factory Investigating Commission and dozens of NEW YORK STATE safety and hours laws",
              "The federal Occupational Safety and Health Administration",
              "The Fair Labor Standards Act",
            ],
            correctIndex: 1,
            explanation:
              "State law, not federal. The federal consequences came later, through the PEOPLE the commission trained — Wagner and Perkins.",
            sourceLessonSlug: "triangle-shirtwaist-1911",
          },
          {
            prompt: "What is the connection between the Triangle fire and the National Labor Relations Act of 1935?",
            options: [
              "The Act was named after a Triangle victim",
              "Robert F. Wagner led the Factory Investigating Commission created after the fire, and 24 years later wrote the NLRA",
              "The Act was passed in 1911 in direct response to the fire",
              "There is no connection; the course invented it",
            ],
            correctIndex: 1,
            explanation:
              "Frances Perkins, who watched the fire from the street and investigated for the commission, became FDR's Secretary of Labor. Outrage becomes law when it lands on someone who later holds a pen.",
            sourceLessonSlug: "triangle-shirtwaist-1911",
          },
          {
            prompt: "Section 7 of the NLRA gives employees the right to self-organize, to bargain collectively, AND to engage in what else?",
            options: [
              "\"Other concerted activities... for mutual aid or protection\"",
              "\"Any lawful protest against the government\"",
              "\"Political campaign contributions\"",
              "\"Refusal to work for any reason\"",
            ],
            correctIndex: 0,
            explanation:
              "That phrase reaches beyond formal unions — two coworkers discussing their pay are engaged in concerted activity. It is the root of much of what the companion course, *Know Your Rights at Work*, teaches.",
            sourceLessonSlug: "the-wagner-act-1935",
          },
          {
            prompt: "Which federal agency did the Wagner Act create?",
            options: [
              "The Department of Labor",
              "The National Labor Relations Board (NLRB)",
              "The Occupational Safety and Health Administration",
              "The Federal Mediation and Conciliation Service",
            ],
            correctIndex: 1,
            explanation:
              "The NLRB runs union elections and enforces the Act's unfair-labor-practice rules. A federal process replaced the street.",
            sourceLessonSlug: "the-wagner-act-1935",
          },
          {
            prompt: "Under the Wagner Act, an employer who bargains with a union chosen by a majority of workers must:",
            options: [
              "Agree to whatever the union demands",
              "Bargain in good faith — but is not required to agree",
              "Recognize the union only if the government approves each term",
              "Pay the union's legal costs",
            ],
            correctIndex: 1,
            explanation:
              "The duty is to bargain, not to concede. This distinction matters enormously in practice — and it is why an employer can bargain lawfully and still never sign a contract.",
            sourceLessonSlug: "the-wagner-act-1935",
          },
          {
            prompt: "In NLRB v. Jones & Laughlin Steel Corp. (1937), the Supreme Court:",
            options: [
              "Struck down the Wagner Act as unconstitutional",
              "Upheld the Wagner Act under Congress's power over interstate commerce",
              "Held that unions violate the Sherman Antitrust Act",
              "Ordered the NLRB abolished",
            ],
            correctIndex: 1,
            explanation:
              "Nobody was sure the Act would survive — the Court had been striking down New Deal laws. It held.",
            sourceLessonSlug: "the-wagner-act-1935",
          },
          {
            prompt: "Which two large groups of workers does the NLRA's definition of \"employee\" (29 U.S.C. § 152(3)) explicitly exclude?",
            options: [
              "Teachers and nurses",
              "Agricultural laborers and domestic workers",
              "Steelworkers and miners",
              "Railroad engineers and pilots only",
            ],
            correctIndex: 1,
            explanation:
              "Written into the statute as a clause, not left out by oversight. It has never been amended on this point.",
            sourceLessonSlug: "who-the-wagner-act-left-out",
          },
          {
            prompt: "Why does the exclusion of agricultural and domestic workers have a racial dimension, even though the statute uses no racial word?",
            options: [
              "It doesn't; the course overstates it",
              "In the 1930s those were the occupations in which Black Americans — mostly still in the rural South — were overwhelmingly concentrated; Mexican-American farm workers were removed by the same clause",
              "Because the NLRB refused to register Black unions",
              "Because the Supreme Court later added a racial requirement",
            ],
            correctIndex: 1,
            explanation:
              "A law can be racially devastating in effect without using a racial word. The same exclusions appear in the Social Security Act of 1935 — a pattern, not a coincidence.",
            sourceLessonSlug: "who-the-wagner-act-left-out",
          },
          {
            prompt: "How does this course handle the question of WHY the agricultural/domestic exclusion was written?",
            options: [
              "It states as settled fact that every legislator involved was motivated by racism",
              "It separates three things: the TEXT (not in dispute), the EFFECT (not in dispute), and the MOTIVE (a historical argument, with Perea (2011) the leading case that it was deliberate)",
              "It avoids the question entirely",
              "It says the exclusion was purely administrative and had no racial effect",
            ],
            correctIndex: 1,
            explanation:
              "You do not have to prove what was in a senator's head to see clearly. The effect is what the workers lived.",
            sourceLessonSlug: "who-the-wagner-act-left-out",
          },
          {
            prompt: "Why did farmworker organizing in the 1960s rely on marches, fasts and a nationwide CONSUMER BOYCOTT rather than NLRB elections?",
            options: [
              "Because those tactics are more effective in every industry",
              "Because farm workers were excluded from the NLRA, so they had no NLRB election, no protection from being fired for organizing, and no employer duty to bargain",
              "Because the UFW chose not to use the law available to it",
              "Because boycotts were the only tactic allowed under Taft-Hartley",
            ],
            correctIndex: 1,
            explanation:
              "It was a workaround for a legal exclusion — the direct reason farmworker organizing looks so different from auto or steel organizing.",
            sourceLessonSlug: "who-the-wagner-act-left-out",
          },
          {
            prompt: "What was the California Agricultural Labor Relations Act of 1975?",
            options: [
              "A federal law extending NLRA rights to all farm workers",
              "A STATE law giving California farm workers the collective-bargaining rights federal law had denied them — most states still have no equivalent",
              "A law banning farmworker unions in California",
              "A Supreme Court decision on farm labor",
            ],
            correctIndex: 1,
            explanation:
              "A state fix for a federal hole. The federal exclusion in 29 U.S.C. § 152(3) is still there.",
            sourceLessonSlug: "who-the-wagner-act-left-out",
          },
          {
            prompt: "Which state passed the first Domestic Workers' Bill of Rights, and in what year?",
            options: ["California, 1975", "New York, 2010", "Illinois, 1935", "Texas, 1994"],
            correctIndex: 1,
            explanation:
              "New York, in 2010 — seventy-five years after the federal carve-out. A handful of states have followed; the federal exclusion remains.",
            sourceLessonSlug: "who-the-wagner-act-left-out",
          },
        ],
      },
    },
  ],
};
