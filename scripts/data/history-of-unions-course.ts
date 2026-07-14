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

    // ── Section 4 · Industrial unionism, backlash, and the long decline ───────
    {
      slug: "the-cio-and-industrial-unionism",
      section: "Section 4 · Industrial unionism, backlash, and the long decline",
      title: "12 · The CIO: organizing everybody in the building",
      recallContent: [
        {
          prompt: "Which two groups of workers does 29 U.S.C. § 152(3) cut out of the NLRA?",
          answer: "Agricultural laborers and domestic workers.",
        },
        {
          prompt: "Why did the United Farm Workers have to use a nationwide consumer boycott instead of an NLRB election?",
          answer:
            "Because farm workers are excluded from the NLRA, they had no NLRB election, no protection from being fired for organizing, and no employer duty to bargain. The boycott was a workaround for a legal exclusion.",
        },
      ],
      body: `The Wagner Act handed American workers a right. It did not hand them an organization capable of using it.

The AFL was still built on craft. Its unions organized the skilled electrician in an auto plant and had no interest in the 3,000 people on the line beside him. In an industry like auto or steel or rubber, that was useless: the assembly line is the point, and the assembly line is unskilled.

In November 1935 — four months after the Wagner Act — a group inside the AFL led by **John L. Lewis** of the United Mine Workers set up the **Committee for Industrial Organization** to do the thing the AFL would not: organize **entire industries**, everyone in the plant, skilled and unskilled together. The AFL threw them out. In 1938 they reconstituted as an independent federation, the **Congress of Industrial Organizations (CIO)**.

This is the Knights of Labor's old idea — organize everybody — except now it had the Wagner Act behind it. That combination is what made the late 1930s the most explosive decade in American labor history.

**Flint, 1936–37.** On December 30, 1936, autoworkers at General Motors plants in Flint, Michigan did something new: instead of walking out, they **sat down** — occupied the plants and stopped production from inside, where strikebreakers could not replace them. The **Flint sit-down strike** held for 44 days. On **February 11, 1937**, General Motors — then the largest manufacturing company in the world — recognized the **United Auto Workers**. Weeks later, **US Steel** signed with the CIO's steel committee without a strike at all, having watched what happened to GM (Library of Congress, n.d.).

**And it was not all victories.** The smaller "Little Steel" companies fought. On **May 30, 1937**, Chicago police fired on a crowd of striking Republic Steel workers and their families marching toward the plant. **Ten people were killed.** It is remembered as the **Memorial Day massacre**, and Little Steel was not organized until the war.

**One thing the CIO did that the AFL had not.** The CIO organized **Black workers**, deliberately and at scale — in steel, in auto, in meatpacking. Not out of pure idealism: in an industry-wide union you cannot leave a quarter of the workforce outside, because the employer will simply hire them as strikebreakers, as employers had been doing for fifty years. But the effect was real, and it made CIO unions a genuine base of the mid-century civil-rights movement in a way most AFL craft unions never were. **Hold that comparison.** It is the setup for Section 5, which is about what those AFL craft unions were doing instead.

The two federations finally merged in **December 1955** into the **AFL-CIO**, which remains the largest American labor federation today.

By the mid-1950s, roughly a third of American wage and salary workers were union members — the high-water mark. (That figure comes from historical estimates, not from the Bureau of Labor Statistics' modern series, which only begins in 1983. You will see why that distinction matters in lesson 14.)

:::reveal What was the CIO's core strategic idea, and how did it differ from the AFL's? ||| Industrial unionism: organize EVERYONE in an industry — skilled and unskilled, in one union — rather than only skilled workers grouped by craft. It was the Knights of Labor's old idea, but now with the Wagner Act behind it.

## Sources
- Library of Congress. (n.d.). *The Flint sit-down strike*. This Month in Business History. https://guides.loc.gov/this-month-in-business-history/december/flint-sit-down-strike
- AFL-CIO. (n.d.). *Our history*. https://aflcio.org/about-us/history
- Illinois Labor History Society. (n.d.). *The Memorial Day massacre of 1937*. https://www.illinoislaborhistory.org/the-memorial-day-massacre
- National Archives. (n.d.). *Records of the National Labor Relations Board* (Record Group 25). https://www.archives.gov/research/guide-fed-records/groups/025.html`,
    },
    {
      slug: "taft-hartley-1947",
      section: "Section 4 · Industrial unionism, backlash, and the long decline",
      title: "13 · Taft-Hartley, 1947: what the law took back",
      recallContent: [
        {
          prompt: "What happened at Flint, Michigan between December 1936 and February 1937?",
          answer:
            "Autoworkers occupied General Motors plants in a 44-day sit-down strike. On February 11, 1937, GM — then the largest manufacturer in the world — recognized the United Auto Workers.",
        },
        {
          prompt: "Name one reason the CIO organized Black workers at scale when most AFL craft unions did not.",
          answer:
            "In an industry-wide union you cannot leave a large share of the workforce outside, because the employer will hire them as strikebreakers. The effect was real regardless of motive: CIO unions became a genuine base of the mid-century civil-rights movement.",
        },
      ],
      body: `The Wagner Act was written by people who thought labor was too weak. By 1947, a lot of Americans thought labor had become too strong. There had been a huge strike wave after the war. Congress had swung.

The result was the **Labor Management Relations Act of 1947** — the **Taft-Hartley Act**. President Truman vetoed it. **Congress overrode the veto**, and it became law on **June 23, 1947** (National Labor Relations Board, n.d.).

If the Wagner Act is a list of things employers may not do, Taft-Hartley is the list of things **unions** may not do — plus a set of tools handed to employers and to the government. It is still the framework you live under.

**What it took away, and what it added:**

| Change | What it means |
|---|---|
| **Union unfair labor practices** (§ 8(b)) | For the first time, unions could be found to have violated the law — e.g. by coercing workers, or refusing to bargain in good faith. |
| **The closed shop banned** | An employer may no longer agree to hire *only* people who are already union members. |
| **Secondary boycotts banned** (§ 8(b)(4)) | A union may not pressure a *neutral* business to stop dealing with the employer it has a dispute with. This removed one of labor's most powerful weapons. |
| **§ 14(b): state "right-to-work" laws** | States may ban union-security agreements — the clauses that require workers covered by a union contract to pay dues or fees. Roughly half the states have such laws. |
| **National-emergency injunctions** (§§ 206–210) | The President may go to court for an **80-day injunction** — a "cooling-off period" — halting a strike said to imperil national health or safety. |
| **Employer "free speech"** (§ 8(c)) | Employers gained explicit latitude to campaign against a union before an election. |
| **Supervisors excluded** | Supervisors were written out of the Act's protection — enlarging the hole from lesson 10. |
| **§ 9(h): non-communist affidavits** | Union officers had to swear they were not Communists, or the union lost access to the NLRB. Repealed in 1959. |

**Now the irony you should not miss.**

Taft-Hartley banned the secondary boycott. But the secondary boycott ban lives *inside* the NLRA — and **farm workers are not covered by the NLRA**. So when the United Farm Workers ran a nationwide consumer boycott of table grapes in the late 1960s, pressuring supermarkets that had no dispute with anyone, they were doing something that would have been **illegal for an autoworkers' or steelworkers' union** — and was perfectly lawful for them, precisely *because* they had been excluded from the law in 1935 (National Park Service, n.d.).

Sit with that. The same clause that stripped farm workers of every protection also placed them outside the law's biggest restriction, and they turned it into their most effective weapon. That is not a happy ending — they still had no right to an election, no protection from firing, no duty on the grower to bargain. But it is a real, verifiable, deeply strange fact, and it is the kind of thing you only see if you read the statute instead of the slogan.

:::reveal Name three things the Taft-Hartley Act (1947) did to restrict unions. ||| Any three of: created union unfair labor practices (§ 8(b)); banned the closed shop; banned secondary boycotts (§ 8(b)(4)); allowed states to pass "right-to-work" laws (§ 14(b)); gave the President an 80-day national-emergency injunction; gave employers explicit latitude to campaign against unions (§ 8(c)); excluded supervisors from protection; required non-communist affidavits from union officers (§ 9(h), repealed 1959).

## Sources
- Labor Management Relations Act (Taft-Hartley Act), 29 U.S.C. §§ 141–197 (1947). Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?path=/prelim@title29/chapter7&edition=prelim
- National Labor Relations Board. (n.d.). *1947 Taft-Hartley passage and NLRB structural changes*. Our history. https://www.nlrb.gov/about-nlrb/who-we-are/our-history/1947-taft-hartley-passage-and-nlrb-structural-changes
- Truman, H. S. (1947, June 20). *Veto of the Taft-Hartley labor bill* [Message to Congress]. Harry S. Truman Presidential Library. https://www.trumanlibrary.gov/library/public-papers/120/veto-taft-hartley-labor-bill
- National Park Service. (n.d.). *Workers united: The Delano grape strike and boycott*. https://www.nps.gov/articles/000/workers-united-the-delano-grape-strike-and-boycott.htm`,
    },
    {
      slug: "patco-and-the-long-decline",
      section: "Section 4 · Industrial unionism, backlash, and the long decline",
      title: "14 · PATCO, 1981 — and reading the decline honestly",
      recallContent: [
        {
          prompt: "What is a \"right-to-work\" law, and what part of Taft-Hartley allows it?",
          answer:
            "A state law banning union-security agreements — the clauses requiring workers covered by a union contract to pay dues or fees. Section 14(b) of Taft-Hartley permits states to pass them.",
        },
        {
          prompt: "Why was the UFW's nationwide grape boycott lawful when the same tactic would have been illegal for the autoworkers?",
          answer:
            "Taft-Hartley's secondary-boycott ban lives inside the NLRA, and farm workers are excluded from the NLRA. The clause that stripped them of protection also placed them outside the law's biggest restriction.",
        },
      ],
      body: `**August 3, 1981.** The Professional Air Traffic Controllers Organization — **PATCO** — went on strike over pay, hours, and the crushing stress of the job. Roughly 13,000 controllers walked out.

Two facts, and you need both.

**Fact one: the strike was illegal, and everyone knew it.** Federal employees are prohibited by statute from striking against the United States government (5 U.S.C. § 7311; 18 U.S.C. § 1918). PATCO struck anyway.

**Fact two: what happened next was not legally required.** President Reagan gave the controllers 48 hours to return. On **August 5, 1981**, he **fired the 11,345 who did not**, and barred them from federal employment for life. On **October 22, 1981**, the Federal Labor Relations Authority **decertified** the union (Miller Center, n.d.).

**Why this is the hinge of modern American labor history — and why the usual explanation is wrong.**

The usual explanation is: "Reagan made it legal to permanently replace strikers." **That is false**, and you should stop people who say it. Permanently replacing workers who go on an economic strike had been lawful in the *private* sector since **NLRB v. Mackay Radio & Telegraph Co., 304 U.S. 333 (1938)** — a Supreme Court decision handed down under Franklin Roosevelt, three years after the Wagner Act. The legal power was forty-three years old.

What changed in 1981 was not the law. It was **the norm.** Employers had the power and mostly had not used it, because using it was seen as beyond the pale. Then the President of the United States used it — on live television, against a union that had endorsed him — and it turned out you could. Through the 1980s, private employers began permanently replacing strikers in a way they simply had not before, and the American strike became a far more dangerous thing for a worker to do.

**Now the numbers — with their years, and their caveats.**

The Bureau of Labor Statistics publishes the union membership rate every year. Its **comparable series begins in 1983**, so it cannot tell you about 1955 (BLS, 2026).

| | 1983 (first comparable year) | 2025 |
|---|---|---|
| Union membership rate | **20.1%** | **10.0%** |
| Union members | **17.7 million** | **14.7 million** |
| Public-sector rate | — | **32.9%** |
| Private-sector rate | — | **5.9%** |
| Represented by a union (members + covered non-members) | — | **11.2%** |

*(Bureau of Labor Statistics, 2026, released February 18, 2026.)*

**Read the caveat, because it is exactly the sort of thing a careless course drops.** BLS states that the 2025 annual figures are **11-month averages that exclude October 2025**, because October data were not collected during the federal government shutdown — so the 2025 estimates are **not strictly comparable** with other years (BLS, 2026). The rate has been near 10% for several years; do not build an argument on a one-year move.

Three things the table is telling you:

1. **The rate halved**, from 20.1% to 10.0%, in about forty years.
2. **The absolute number fell far less** — 17.7 million to 14.7 million — because the workforce grew. Union membership did not so much collapse as fail to grow with the country.
3. **The public/private gap is enormous**: 32.9% versus 5.9% in 2025. Modern American unionism is overwhelmingly a *public-sector* phenomenon — teachers, firefighters, postal workers, city employees. That is a completely different labor movement from the one that shut down General Motors in 1937, and it is why fights over public-sector unions are now the loudest fights in American labor.

**And now the honest part: WHY did it fall?** The candidate explanations are: the shift from manufacturing to services; globalization and offshoring; automation; more aggressive and more sophisticated employer opposition; the spread of state right-to-work laws under § 14(b); weak penalties for illegal firings; and unions' own strategic failures. **Serious people weight these differently, and this course is not going to pretend the question is settled.** Anyone who gives you one cause and no others is selling you something.

One last number, because it complicates every story: in Gallup's August 2025 poll, **68% of Americans said they approve of labor unions** — near the highest level in more than fifty years — in a year when 10.0% of them belonged to one (Gallup, 2025). Whatever is driving the decline, it does not appear to be that Americans have decided they dislike unions. That gap is the most interesting open question in American labor today.

:::reveal What is the most common false claim about PATCO, and what is the accurate version? ||| The false claim is that Reagan made it legal to permanently replace strikers. Permanent replacement of economic strikers had been lawful in the private sector since NLRB v. Mackay Radio (1938). What changed in 1981 was not the law but the NORM — employers had long had the power and had largely declined to use it, and after PATCO they used it.

## Sources
- Bureau of Labor Statistics. (2026, February 18). *Union members — 2025*. U.S. Department of Labor. https://www.bls.gov/news.release/pdf/union2.pdf
- Bureau of Labor Statistics. (2026). *Union membership rate 10.0 percent in 2025*. The Economics Daily. https://www.bls.gov/opub/ted/2026/union-membership-rate-10-0-percent-in-2025.htm
- Miller Center, University of Virginia. (n.d.). *Reagan vs. air traffic controllers*. https://millercenter.org/reagan-vs-air-traffic-controllers
- NLRB v. Mackay Radio & Telegraph Co., 304 U.S. 333 (1938). Library of Congress. https://www.loc.gov/item/usrep304333/
- 5 U.S.C. § 7311; 18 U.S.C. § 1918. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section7311&edition=prelim
- Gallup. (2025, August). *Labor union approval relatively steady at 68% in U.S.* https://news.gallup.com/poll/694472/labor-union-approval-relatively-steady.aspx`,
    },
    {
      slug: "section-4-quiz",
      section: "Section 4 · Industrial unionism, backlash, and the long decline",
      title: "15 · Check yourself: rise, backlash, decline",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was the CIO's core strategic idea?",
            options: [
              "Organize only skilled workers, grouped by craft",
              "Organize entire industries — everyone in the plant, skilled and unskilled, in one union",
              "Organize only public employees",
              "Replace collective bargaining with legislation",
            ],
            correctIndex: 1,
            explanation:
              "Industrial unionism — the Knights of Labor's old idea, but now with the Wagner Act behind it. That combination made the late 1930s explosive.",
            sourceLessonSlug: "the-cio-and-industrial-unionism",
          },
          {
            prompt: "What was new about the tactic autoworkers used at Flint in 1936–37?",
            options: [
              "They walked out and picketed the gates",
              "They SAT DOWN — occupied the plants and stopped production from inside, where strikebreakers could not replace them",
              "They filed a lawsuit against General Motors",
              "They ran a consumer boycott of Chevrolets",
            ],
            correctIndex: 1,
            explanation:
              "The sit-down held 44 days. On February 11, 1937, GM recognized the United Auto Workers — and US Steel signed with the CIO weeks later without a strike at all.",
            sourceLessonSlug: "the-cio-and-industrial-unionism",
          },
          {
            prompt: "What was the Memorial Day massacre of May 30, 1937?",
            options: [
              "A bombing at a labor rally in Chicago",
              "Chicago police fired on marching Republic Steel strikers and their families, killing ten",
              "A fire in a garment factory",
              "The Pinkertons' assault on Homestead",
            ],
            correctIndex: 1,
            explanation:
              "The CIO's 1937 was not all victories. 'Little Steel' fought, and was not organized until the war.",
            sourceLessonSlug: "the-cio-and-industrial-unionism",
          },
          {
            prompt: "The Taft-Hartley Act became law in 1947 how?",
            options: [
              "President Truman signed it enthusiastically",
              "Congress overrode Truman's veto",
              "It was imposed by executive order",
              "The Supreme Court ordered Congress to pass it",
            ],
            correctIndex: 1,
            explanation:
              "Truman vetoed it; Congress overrode the veto and it became law on June 23, 1947.",
            sourceLessonSlug: "taft-hartley-1947",
          },
          {
            prompt: "Section 14(b) of Taft-Hartley permits states to:",
            options: [
              "Ban strikes outright",
              "Pass \"right-to-work\" laws banning union-security agreements — the clauses that require workers covered by a union contract to pay dues or fees",
              "Require every worker to join a union",
              "Set their own minimum wage",
            ],
            correctIndex: 1,
            explanation:
              "Roughly half the states have such laws. This is one of the most consequential single subsections in American labor law.",
            sourceLessonSlug: "taft-hartley-1947",
          },
          {
            prompt: "What is a \"secondary boycott,\" and what did Taft-Hartley do about it?",
            options: [
              "A second strike at the same employer; Taft-Hartley encouraged it",
              "Pressuring a NEUTRAL business to stop dealing with the employer a union has a dispute with; Taft-Hartley banned it (§ 8(b)(4))",
              "A boycott organized by consumers rather than workers; Taft-Hartley protected it",
              "A union refusing to bargain; Taft-Hartley legalized it",
            ],
            correctIndex: 1,
            explanation:
              "Banning it removed one of labor's most powerful weapons — pressure on the supermarkets, suppliers and customers of the employer.",
            sourceLessonSlug: "taft-hartley-1947",
          },
          {
            prompt: "Why was the United Farm Workers' nationwide grape boycott LAWFUL when the identical tactic would have been illegal for a steelworkers' union?",
            options: [
              "Because agricultural boycotts have a special exemption written into Taft-Hartley",
              "Because the secondary-boycott ban lives inside the NLRA, and farm workers are excluded from the NLRA",
              "Because the Supreme Court granted the UFW an exception",
              "Because California law overrode federal law",
            ],
            correctIndex: 1,
            explanation:
              "The same clause that stripped farm workers of every protection also placed them outside the law's biggest restriction — and they turned it into their most effective weapon.",
            sourceLessonSlug: "taft-hartley-1947",
          },
          {
            prompt: "What did the Taft-Hartley Act's § 8(b) create for the first time?",
            options: [
              "Employer unfair labor practices",
              "UNION unfair labor practices — things a union itself could be found to have done illegally",
              "The National Labor Relations Board",
              "The right to strike",
            ],
            correctIndex: 1,
            explanation:
              "The Wagner Act listed what employers may not do. Taft-Hartley added a list of what unions may not do.",
            sourceLessonSlug: "taft-hartley-1947",
          },
          {
            prompt: "The PATCO strike of August 3, 1981 was:",
            options: [
              "Legal, and Reagan's response was unlawful",
              "Illegal — federal employees are barred by statute from striking against the government (5 U.S.C. § 7311)",
              "Legal under Taft-Hartley's national-emergency provisions",
              "Authorized in advance by the FAA",
            ],
            correctIndex: 1,
            explanation:
              "Both facts matter: the strike was illegal AND what happened next was not legally required. Reagan chose to fire 11,345 controllers on August 5, 1981.",
            sourceLessonSlug: "patco-and-the-long-decline",
          },
          {
            prompt: "What is the most common FALSE claim about PATCO?",
            options: [
              "That the strike was illegal",
              "That Reagan MADE IT LEGAL to permanently replace strikers — in fact that had been lawful in the private sector since NLRB v. Mackay Radio (1938)",
              "That PATCO was decertified",
              "That the controllers were barred from federal employment",
            ],
            correctIndex: 1,
            explanation:
              "The legal power was 43 years old, granted under FDR. What changed in 1981 was the NORM: employers had the power and had largely declined to use it. After PATCO, they used it.",
            sourceLessonSlug: "patco-and-the-long-decline",
          },
          {
            prompt: "According to the Bureau of Labor Statistics, what was the US union membership rate in 2025?",
            options: ["5.9%", "10.0%", "20.1%", "32.9%"],
            correctIndex: 1,
            explanation:
              "10.0% in 2025, with 14.7 million members — down from 20.1% and 17.7 million in 1983, the first year of BLS's comparable series (BLS, 2026).",
            sourceLessonSlug: "patco-and-the-long-decline",
          },
          {
            prompt: "What caveat does BLS attach to the 2025 union figures?",
            options: [
              "They exclude workers under age 25",
              "They are 11-month averages excluding October 2025 (data were not collected during the federal shutdown), so they are not strictly comparable with other years",
              "They cover only the private sector",
              "They are projections, not measurements",
            ],
            correctIndex: 1,
            explanation:
              "Exactly the sort of caveat a careless course drops. The rate has been near 10% for several years; do not build an argument on a one-year move.",
            sourceLessonSlug: "patco-and-the-long-decline",
          },
          {
            prompt: "In 2025 the US public-sector union membership rate was 32.9% and the private-sector rate was 5.9%. What does that tell you?",
            options: [
              "Private-sector unions are growing faster",
              "Modern American unionism is overwhelmingly a PUBLIC-sector phenomenon — a very different labor movement from the one that shut down GM in 1937",
              "Public employees are barred from unionizing",
              "The two sectors are converging",
            ],
            correctIndex: 1,
            explanation:
              "Teachers, firefighters, postal workers, city employees. It is why fights over public-sector unions are now the loudest fights in American labor.",
            sourceLessonSlug: "patco-and-the-long-decline",
          },
          {
            prompt: "How does this course treat the question of WHY US union density fell?",
            options: [
              "It identifies employer opposition as the single proven cause",
              "It identifies globalization as the single proven cause",
              "It lists the serious candidate explanations and says the question is not settled — warning that anyone offering one cause and no others is selling you something",
              "It says the decline never happened",
            ],
            correctIndex: 2,
            explanation:
              "Deindustrialization, globalization, automation, employer opposition, right-to-work laws, weak penalties, and unions' own strategic failures. Serious people weight these differently.",
            sourceLessonSlug: "patco-and-the-long-decline",
          },
          {
            prompt: "In Gallup's August 2025 poll, roughly what share of Americans said they approve of labor unions?",
            options: ["10%", "34%", "51%", "68%"],
            correctIndex: 3,
            explanation:
              "68% approved — near the highest in over fifty years — in a year when 10.0% of workers belonged to a union. That gap is the most interesting open question in American labor today.",
            sourceLessonSlug: "patco-and-the-long-decline",
          },
        ],
      },
    },

    // ── Section 5 · The parts a comfortable course skips ──────────────────────
    {
      slug: "unions-own-exclusion-history",
      section: "Section 5 · The parts a comfortable course skips",
      title: "16 · The colour bar: unions' own history of exclusion",
      recallContent: [
        {
          prompt: "What was the US union membership rate in 2025, and what was it in 1983?",
          answer: "10.0% in 2025; 20.1% in 1983, the first year of BLS's comparable series (BLS, 2026).",
        },
        {
          prompt: "What actually changed after PATCO in 1981 — the law, or the norm?",
          answer:
            "The norm. Permanent replacement of economic strikers had been lawful since NLRB v. Mackay Radio (1938). Employers had the power and had largely declined to use it; after PATCO they used it.",
        },
      ],
      body: `Everything you have read has been the story of workers shut out by employers and by the state.

This lesson is about workers shut out **by other workers.**

If a course tells you unions were always the good guys, close the course. This part is documented, it is not marginal, and leaving it out is the single fastest way to lose a student who has heard the real version at home.

**The exclusion was written down.**

It was not a matter of tone or atmosphere. It was in the rulebooks:

- Several **railroad brotherhoods** — among the most powerful unions in America — carried explicit whites-only clauses in their constitutions well into the twentieth century.
- The AFL's craft unions often kept Black workers out of **apprenticeships**, which were the only door into a skilled trade. If you cannot become an apprentice, you cannot become a journeyman, and the union does not have to say a word about race.
- Where Black workers *were* admitted, they were frequently placed in **segregated "auxiliary" locals** — a separate local with no vote, no full membership, and no say in the contract that governed their own jobs. During the Second World War, the Boilermakers ran exactly such auxiliaries; in **James v. Marinship Corp. (Cal. 1944)**, the California Supreme Court held that a union with a closed shop could not simultaneously keep Black workers in a subordinate auxiliary — you cannot control who gets hired *and* refuse people full membership.
- And in **Steele v. Louisville & Nashville Railroad Co., 323 U.S. 192 (1944)**, the Supreme Court dealt with a union that had bargained *against* its own Black workers. Bester Steele was a Black locomotive fireman. His craft's exclusive bargaining representative — a union he was not allowed to join — negotiated with the railroad to push Black firemen out of the better jobs. The Court held that a union which holds the legal power to speak for **all** workers in a craft owes them all a **duty of fair representation**, and may not discriminate by race.

Read that holding carefully. The Supreme Court in 1944 had to *invent a rule* that a union may not use its legal monopoly as a weapon against its own members' race — because a union was doing it.

**And women.**

The pattern is different but the mechanism is the same. Women were kept out of the craft apprenticeships that led to skilled, well-paid trades. Contracts negotiated by unions maintained **separate seniority lines** by sex, so a woman could not bid on a "man's" job no matter how long she had been there. Unions bargained for a "family wage" — a wage for a male breadwinner — which was an argument *for* paying women less. And some of the largest unions in the country were majority-women organizations run almost entirely by men.

**When did this become illegal?** Not in 1935. **Title VII of the Civil Rights Act of 1964** made it an unlawful employment practice for a **labor organization** — expressly, not just an employer — to exclude or segregate members, or to classify them, on the basis of race, colour, religion, sex, or national origin (42 U.S.C. § 2000e-2(c)). Congress had to name unions in the statute.

**And it goes right to the top.** In August 1963, the AFL-CIO's executive council **declined to endorse the March on Washington for Jobs and Freedom.** Walter Reuther of the United Auto Workers moved for a strong endorsement; among the federation's leadership only **A. Philip Randolph** — whom you meet in the next lesson — supported him. AFL-CIO president George Meany would not back the march. The UAW endorsed it anyway, and Reuther spoke from the podium (King Institute, Stanford, n.d.).

**The honest summary.** The industrial unions of the CIO organized Black workers at scale; the craft unions of the AFL were often the mechanism that kept them out. Both are "the labor movement." A student who is told only the first half will, sooner or later, learn the second half from someone who will use it to tell them the whole thing was a fraud. It wasn't. But it also wasn't clean, and you are old enough to hold both.

:::reveal What did Steele v. Louisville & Nashville Railroad Co. (1944) establish, and why did the Court have to establish it? ||| That a union holding the legal power to bargain for everyone in a craft owes all of them a "duty of fair representation" and may not discriminate by race. The Court had to say so because a union — which Black firemen were not even allowed to join — had bargained with the railroad to push them out of the better jobs.

## Sources
- Steele v. Louisville & Nashville Railroad Co., 323 U.S. 192 (1944). Cornell Law School, Legal Information Institute. https://www.law.cornell.edu/supremecourt/text/323/192
- James v. Marinship Corp., 25 Cal. 2d 721 (1944). California Courts. https://scocal.stanford.edu/opinion/james-v-marinship-corp-27849
- Civil Rights Act of 1964, Title VII, 42 U.S.C. § 2000e-2(c). U.S. Equal Employment Opportunity Commission. https://www.eeoc.gov/statutes/title-vii-civil-rights-act-1964
- Martin Luther King, Jr. Research and Education Institute, Stanford University. (n.d.). *American Federation of Labor and Congress of Industrial Organizations (AFL-CIO)*. https://kinginstitute.stanford.edu/encyclopedia/american-federation-labor-and-congress-industrial-organizations-afl-cio
- National Archives. (n.d.). *Chinese Exclusion Act (1882)*. Milestone Documents. https://www.archives.gov/milestone-documents/chinese-exclusion-act`,
    },
    {
      slug: "randolph-to-memphis",
      section: "Section 5 · The parts a comfortable course skips",
      title: "17 · Randolph to Memphis: the labor half of the civil-rights movement",
      recallContent: [
        {
          prompt: "How did craft unions exclude Black workers without writing a racial rule about jobs?",
          answer:
            "By keeping them out of apprenticeships — the only door into a skilled trade — and by placing them in segregated 'auxiliary' locals with no vote and no say in the contract governing their own jobs.",
        },
        {
          prompt: "Which 1964 statute made it illegal for a LABOR ORGANIZATION to exclude or segregate members by race or sex?",
          answer: "Title VII of the Civil Rights Act of 1964 (42 U.S.C. § 2000e-2(c)). Congress had to name unions in the statute.",
        },
      ],
      body: `Everything in the last lesson is true. So is this.

**A. Philip Randolph** spent his life fighting the exclusion you just read about — from *inside* the labor movement — and in doing so built the bridge between organized labor and the civil-rights movement.

**1925.** Randolph founds the **Brotherhood of Sleeping Car Porters**. Pullman porters were Black men who made up the beds and served the passengers on the sleeping cars of America's railroads. It was one of the largest employers of Black men in the country, and one of the most humiliating jobs available: porters were routinely called "George," after George Pullman, rather than by their names.

**1937.** After twelve years — twelve — the Brotherhood wins a contract with the Pullman Company. It is **the first collective bargaining agreement between a major American corporation and a Black-led union.** It brought pay increases, a shorter work month, and overtime.

**1941.** Randolph threatens to march tens of thousands of Black Americans on Washington to demand jobs in the defense plants gearing up for war, and an end to segregation in the armed forces. Roosevelt does not want that march. On **June 25, 1941**, days before it was to happen, he issues **Executive Order 8802**, barring discrimination in defense industries and government, and creating the **Fair Employment Practice Committee** — the first presidential directive on race since Reconstruction (National Archives, n.d.). Randolph calls off the march.

Notice the mechanism. **He got it by threatening to withhold and to mobilize.** That is a labor tactic, applied to a civil-rights demand, by a union president.

**1963.** Randolph is the chief architect of the **March on Washington for Jobs and Freedom** — and his lieutenant Bayard Rustin organizes it. Look at the name. **"For Jobs and Freedom."** The economic half is in the title, and it is the half that gets dropped. It was a march for a higher minimum wage, for a jobs programme, for the right to work, as much as for the right to vote.

---

**And then Memphis.**

**February 1, 1968.** Two Memphis sanitation workers, **Echol Cole and Robert Walker**, take shelter from the rain in the back of a garbage truck, because Black sanitation workers were not permitted to shelter in white neighbourhoods. The compactor malfunctions and crushes them to death. The city pays their families almost nothing.

**February 12, 1968.** Roughly 1,300 Black sanitation workers walk out. They are asking for union recognition — **AFSCME Local 1733** — for a living wage, and for the city to stop treating them as disposable. Mayor Henry Loeb refuses to recognize the union.

They carry signs that say four words:

> ### I AM A MAN

That is the entire demand. It is a wage demand and it is a demand to be recognised as a human being, and the strikers understood — better than most people who quote them now — that in their lives those were the same demand.

**Martin Luther King Jr. came to Memphis to support that strike.** He came in March. He came back on **April 3, 1968**, and delivered the speech remembered as "I've Been to the Mountaintop" — to a hall of striking sanitation workers.

**On April 4, 1968, he was assassinated on the balcony of the Lorraine Motel in Memphis.**

He was there **for a strike**. He was in the middle of organizing the Poor People's Campaign, an economic campaign. And that fact is severed from his memory with astonishing consistency — the Nobel laureate, the dreamer, the marcher, and then, somehow, a man who happened to be standing on a motel balcony in Tennessee for no stated reason.

He was there because 1,300 garbage collectors wanted a union.

**April 16, 1968**, twelve days after the assassination, the City of Memphis recognized AFSCME Local 1733 and agreed to wage increases (AFSCME, n.d.).

**Hold this next to the previous lesson, and do not resolve it.** The same labor movement whose craft unions kept Black workers out of apprenticeships also produced Randolph, the Brotherhood, and Local 1733. The AFL-CIO would not endorse the 1963 march that A. Philip Randolph — an AFL-CIO vice-president — had designed. **Both of those sentences are true at the same time.** Holding two true and contradictory things is not confusion. It is what history actually feels like.

:::reveal Why was Martin Luther King Jr. in Memphis in April 1968? ||| He was there to support the strike of roughly 1,300 Black sanitation workers, who had walked out on February 12, 1968 seeking recognition of AFSCME Local 1733, a living wage, and safe conditions after two workers were crushed to death by a garbage truck. He was assassinated there on April 4, 1968; the city recognized the union on April 16.

## Sources
- Martin Luther King, Jr. Research and Education Institute, Stanford University. (n.d.). *Randolph, A. Philip*. https://kinginstitute.stanford.edu/randolph-philip
- National Archives. (n.d.). *Executive Order 8802: Prohibition of discrimination in the defense industry (1941)*. Milestone Documents. https://www.archives.gov/milestone-documents/executive-order-8802
- American Federation of State, County and Municipal Employees. (n.d.). *1968 AFSCME Memphis sanitation workers' strike chronology*. https://www.afscme.org/about/history/mlk/1968-afscme-memphis-sanitation-workers-strike-chronology
- Library of Congress. (n.d.). *A. Philip Randolph papers*. https://hdl.loc.gov/loc.mss/eadmss.ms005004
- National Park Service. (n.d.). *Martin Luther King, Jr. and the Memphis sanitation strike*. https://www.nps.gov/articles/000/mlk-memphis-sanitation-strike.htm`,
    },
    {
      slug: "corruption-and-the-mob",
      section: "Section 5 · The parts a comfortable course skips",
      title: "18 · Corruption, the mob, and how the story got used",
      recallContent: [
        {
          prompt: "What did the Brotherhood of Sleeping Car Porters achieve in 1937?",
          answer:
            "The first collective bargaining agreement between a major American corporation (the Pullman Company) and a Black-led union — after twelve years of organizing.",
        },
        {
          prompt: "What is the full name of the 1963 March on Washington, and why does the course insist on it?",
          answer:
            "The March on Washington for Jobs and Freedom. The economic half is in the title and is the half routinely dropped — it was a march for a higher minimum wage and a jobs programme as well as for voting rights.",
        },
      ],
      body: `There is one more thing a comfortable course leaves out, and this one is uncomfortable in the other direction.

**Some American unions were genuinely corrupt, and some were genuinely controlled by organized crime.** Not as a smear. As a matter of federal court record.

**What happened.**

In 1957 the Senate created a select committee, chaired by Senator **John McClellan** with **Robert F. Kennedy** as chief counsel, to investigate racketeering in labor and management. It ran for two years, on television. Its central target was the **International Brotherhood of Teamsters** — the truck drivers' union, one of the largest in the country. Its president, Dave Beck, was convicted of embezzlement. His successor, **Jimmy Hoffa**, was convicted in the 1960s of jury tampering and of fraud involving the union's pension fund, and went to prison. In 1975 Hoffa disappeared. He has never been found. **This course is not going to tell you what happened to him, because nobody has established what happened to him** — and the internet is full of people who will.

The AFL-CIO **expelled the Teamsters** in December 1957.

**What it produced legally.** The McClellan hearings led directly to the **Labor-Management Reporting and Disclosure Act of 1959** — the **Landrum-Griffin Act**. It:

- Created a **bill of rights for union members** (Title I): free speech in union meetings, equal voting rights, protection against arbitrary discipline by your own union, and the right to sue it.
- Required unions to file **public financial reports** with the federal government.
- Regulated **union elections**, so officers had to face their members.

**And in 1989**, the US government brought a civil racketeering (RICO) case against the Teamsters that ended in a **consent decree**: the union accepted federal court supervision, an Independent Review Board with power to expel corrupt officials, and — this is the important part — **direct, one-member-one-vote election of its international officers**, supervised by a court-appointed monitor. The union operated under that court supervision for decades; a 2015 settlement began winding it down (U.S. Department of Justice, 2015).

**Now the four things you have to hold at once.** This is the whole lesson.

1. **The corruption was real.** People stole pension money that belonged to truck drivers. Some union officials worked with organized crime, and some workers were beaten. Denying it is not solidarity; it is just lying.
2. **It was not universal.** It was concentrated in specific unions and specific locals, in industries — trucking, longshore, construction, waste — where controlling access to work is enormously valuable to a criminal organization. Most unions were not mobbed up, and the vast majority of union members were being robbed by nobody.
3. **The story was also a weapon.** "Union boss" as an image — the cigar, the sedan, the shakedown — did a great deal of political work far beyond anything the McClellan Committee found, and it is still doing that work today. Notice when someone reaches for it, and notice whether they have a case or a caricature.
4. **The cure is being used by the workers.** Landrum-Griffin's union-democracy provisions and the Teamsters' court-ordered direct elections were meant to police corrupt unions. Rank-and-file reformers have used those same rules to take unions back from their own leaderships and run them differently. The tool built to discipline unions became a tool workers used inside them.

That is what a real institution looks like: capable of theft and capable of Memphis, sometimes in the same decade, sometimes in the same building. **Your job is not to decide whether unions are Good. Your job is to be able to look at a specific union, in a specific place, in a specific year, and find out what is actually true about it.**

Which is exactly the skill the rest of this course is going to make you use on six countries.

:::reveal Name the four things this course says you must hold at once about union corruption. ||| (1) It was real — pensions were stolen, some officials worked with organized crime. (2) It was not universal — it concentrated in industries where controlling access to work is valuable to criminals. (3) The story was also used as a political weapon far beyond what was ever proved. (4) The cure — Landrum-Griffin's union-democracy rules and court-ordered direct elections — has been used by rank-and-file members to reform their own unions.

## Sources
- Labor-Management Reporting and Disclosure Act of 1959, 29 U.S.C. §§ 401–531. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?path=/prelim@title29/chapter11&edition=prelim
- National Labor Relations Board. (n.d.). *1959 Landrum-Griffin Act*. Our history. https://www.nlrb.gov/about-nlrb/who-we-are/our-history/1959-landrum-griffin-act
- U.S. Department of Labor, Office of Labor-Management Standards. (n.d.). *Union member rights and officer responsibilities under the LMRDA*. https://www.dol.gov/agencies/olms/compliance-assistance/members
- U.S. Department of Justice, U.S. Attorney's Office, Southern District of New York. (2015, January 14). *Manhattan U.S. Attorney announces proposed settlement agreement in landmark civil RICO action* [Press release]. https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-proposed-settlement-agreement-landmark-civil-rico
- U.S. Senate. (n.d.). *Select Committee on Improper Activities in the Labor or Management Field (McClellan Committee)*. https://www.senate.gov/about/powers-procedures/investigations/mcclellan-committee.htm`,
    },
    {
      slug: "section-5-quiz",
      section: "Section 5 · The parts a comfortable course skips",
      title: "19 · Check yourself: the parts that get skipped",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How did AFL craft unions commonly exclude Black workers WITHOUT writing a racial rule about jobs?",
            options: [
              "By requiring a college degree",
              "By keeping them out of apprenticeships — the only door into a skilled trade",
              "By charging higher dues",
              "By moving all work out of state",
            ],
            correctIndex: 1,
            explanation:
              "No apprenticeship, no journeyman. The union never has to say a word about race. Several railroad brotherhoods also carried explicit whites-only clauses in their constitutions.",
            sourceLessonSlug: "unions-own-exclusion-history",
          },
          {
            prompt: "What was a segregated \"auxiliary\" local?",
            options: [
              "A local for retired members",
              "A separate local for Black workers with no vote, no full membership, and no say in the contract governing their own jobs",
              "An overseas branch of an American union",
              "A local for supervisors",
            ],
            correctIndex: 1,
            explanation:
              "James v. Marinship Corp. (Cal. 1944) held that a union running a closed shop could not simultaneously keep Black workers in a subordinate auxiliary.",
            sourceLessonSlug: "unions-own-exclusion-history",
          },
          {
            prompt: "What did Steele v. Louisville & Nashville Railroad Co. (1944) establish?",
            options: [
              "That unions may not strike against railroads",
              "That a union with the exclusive legal power to bargain for a craft owes ALL workers in it a duty of fair representation and may not discriminate by race",
              "That Black workers must form separate unions",
              "That the Railway Labor Act does not apply to firemen",
            ],
            correctIndex: 1,
            explanation:
              "The Court had to invent the rule because a union — which Bester Steele was not even allowed to join — had bargained with the railroad to push Black firemen out of the better jobs.",
            sourceLessonSlug: "unions-own-exclusion-history",
          },
          {
            prompt: "Which 1964 statute made it an unlawful employment practice for a LABOR ORGANIZATION to exclude or segregate members by race or sex?",
            options: [
              "The National Labor Relations Act",
              "Title VII of the Civil Rights Act of 1964 (42 U.S.C. § 2000e-2(c))",
              "The Fair Labor Standards Act",
              "The Landrum-Griffin Act",
            ],
            correctIndex: 1,
            explanation:
              "Congress had to name unions expressly in the statute — employers alone were not enough.",
            sourceLessonSlug: "unions-own-exclusion-history",
          },
          {
            prompt: "What did the AFL-CIO's executive council do about the 1963 March on Washington?",
            options: [
              "Organized and funded it",
              "Declined to endorse it — only A. Philip Randolph supported Walter Reuther's motion for a strong endorsement; the UAW endorsed it anyway",
              "Voted to oppose it publicly",
              "Endorsed it unanimously",
            ],
            correctIndex: 1,
            explanation:
              "The federation would not back a march its own vice-president, A. Philip Randolph, had designed.",
            sourceLessonSlug: "unions-own-exclusion-history",
          },
          {
            prompt: "What did the Brotherhood of Sleeping Car Porters win in 1937, twelve years after it was founded?",
            options: [
              "A seat on the Pullman Company's board",
              "The first collective bargaining agreement between a major American corporation and a Black-led union",
              "A federal law banning racial discrimination",
              "Membership in the CIO",
            ],
            correctIndex: 1,
            explanation:
              "Twelve years of organizing. It brought pay increases, a shorter work month, and overtime.",
            sourceLessonSlug: "randolph-to-memphis",
          },
          {
            prompt: "How did A. Philip Randolph obtain Executive Order 8802 in 1941?",
            options: [
              "By winning a lawsuit against the federal government",
              "By threatening to march tens of thousands of Black Americans on Washington — a labor tactic applied to a civil-rights demand",
              "By lobbying Congress for five years",
              "By calling a nationwide general strike",
            ],
            correctIndex: 1,
            explanation:
              "EO 8802 barred discrimination in defense industries and created the Fair Employment Practice Committee — the first presidential directive on race since Reconstruction. Randolph called off the march.",
            sourceLessonSlug: "randolph-to-memphis",
          },
          {
            prompt: "What is the FULL name of the 1963 March on Washington?",
            options: [
              "The March on Washington for Civil Rights",
              "The March on Washington for Jobs and Freedom",
              "The March on Washington for Voting Rights",
              "The National March for Equality",
            ],
            correctIndex: 1,
            explanation:
              "The economic half is in the title, and it is the half that gets dropped. It was a march for a higher minimum wage and a jobs programme as well as for the vote.",
            sourceLessonSlug: "randolph-to-memphis",
          },
          {
            prompt: "What triggered the Memphis sanitation strike that began on February 12, 1968?",
            options: [
              "A pay cut announced by the mayor",
              "Two workers, Echol Cole and Robert Walker, were crushed to death by a garbage truck compactor on February 1 — having sheltered inside it because Black sanitation workers were not permitted to shelter in white neighbourhoods",
              "A federal court order",
              "The assassination of Martin Luther King Jr.",
            ],
            correctIndex: 1,
            explanation:
              "The city paid their families almost nothing. Roughly 1,300 workers walked out seeking recognition of AFSCME Local 1733, a living wage, and safe conditions.",
            sourceLessonSlug: "randolph-to-memphis",
          },
          {
            prompt: "Why was Martin Luther King Jr. in Memphis when he was assassinated on April 4, 1968?",
            options: [
              "For a voter-registration rally",
              "To support the sanitation workers' strike — he had spoken to a hall of strikers the night before",
              "He was passing through on his way to Atlanta",
              "To testify before a congressional committee",
            ],
            correctIndex: 1,
            explanation:
              "He was there for a strike. That fact is severed from his memory with astonishing consistency. The city recognized AFSCME Local 1733 on April 16, twelve days later.",
            sourceLessonSlug: "randolph-to-memphis",
          },
          {
            prompt: "What did the Memphis strikers' placards say?",
            options: ["WE SHALL OVERCOME", "I AM A MAN", "UNION NOW", "JOBS AND FREEDOM"],
            correctIndex: 1,
            explanation:
              "Four words that were simultaneously a wage demand and a demand to be recognised as a human being. The strikers understood those were the same demand.",
            sourceLessonSlug: "randolph-to-memphis",
          },
          {
            prompt: "The McClellan Committee (1957–59), with Robert F. Kennedy as chief counsel, primarily investigated:",
            options: [
              "The Congress of Industrial Organizations",
              "Racketeering in labor and management — centrally, the International Brotherhood of Teamsters",
              "The National Labor Relations Board",
              "The United Farm Workers",
            ],
            correctIndex: 1,
            explanation:
              "It ran for two years, on television. The AFL-CIO expelled the Teamsters in December 1957.",
            sourceLessonSlug: "corruption-and-the-mob",
          },
          {
            prompt: "What did the Landrum-Griffin Act of 1959 create?",
            options: [
              "A federal ban on strikes",
              "A bill of rights for UNION MEMBERS — free speech in meetings, equal voting rights, protection from arbitrary discipline by their own union — plus public financial reporting and regulated union elections",
              "The National Labor Relations Board",
              "State right-to-work laws",
            ],
            correctIndex: 1,
            explanation:
              "It was aimed at corrupt unions. Rank-and-file reformers have since used those same rules to take unions back from their own leaderships.",
            sourceLessonSlug: "corruption-and-the-mob",
          },
          {
            prompt: "What did the 1989 Teamsters consent decree require?",
            options: [
              "That the union dissolve",
              "Federal court supervision, an Independent Review Board that could expel corrupt officials, and direct one-member-one-vote election of international officers",
              "That the union rejoin the AFL-CIO",
              "That all Teamster contracts be renegotiated",
            ],
            correctIndex: 1,
            explanation:
              "The union operated under court supervision for decades; a 2015 settlement began winding it down.",
            sourceLessonSlug: "corruption-and-the-mob",
          },
          {
            prompt: "What does the course say about what happened to Jimmy Hoffa?",
            options: [
              "He was killed by a rival Teamster faction, as court records show",
              "It refuses to say — he disappeared in 1975 and nobody has established what happened to him",
              "He fled to Brazil",
              "He died of natural causes in prison",
            ],
            correctIndex: 1,
            explanation:
              "Same rule as Haymarket. The record does not settle it, so the course does not pretend it does — and notes that the internet is full of people who will.",
            sourceLessonSlug: "corruption-and-the-mob",
          },
        ],
      },
    },

    // ── Section 6 · There is no single union model ────────────────────────────
    {
      slug: "nordics-ghent-and-sectoral-bargaining",
      section: "Section 6 · There is no single union model: six countries",
      title: "20 · The Nordics: when the union pays your unemployment cheque",
      recallContent: [
        {
          prompt: "Name two ways American unions themselves excluded workers.",
          answer:
            "Any two of: whites-only clauses in union constitutions; blocking Black workers from apprenticeships; segregated 'auxiliary' locals with no vote; sex-segregated seniority lines; bargaining for a 'family wage' that justified paying women less.",
        },
        {
          prompt: "What four things does the course say you must hold at once about union corruption?",
          answer:
            "It was real; it was not universal; the story was also used as a political weapon far beyond what was proved; and the union-democracy rules created to cure it are now used by rank-and-file members to reform their own unions.",
        },
      ],
      body: `Everything you have learned so far is **one country's answer**. Now the point of the course: **there is no single "union" model.** The American system — company-by-company elections, a federal referee, a contract for that workplace — is one design among many, and by world standards it is an unusual one.

Six countries. Same four questions each time.

---

**The Nordics: Denmark, Sweden, Finland, Iceland, Norway.**

Start with the number, because it is startling. In 2024, trade union density was around **65% in Sweden, Denmark and Finland**, and about **91% in Iceland** — against **10.0%** in the United States in 2025 (OECD, 2025; BLS, 2026).

Why?

**Q1 — Who may organise?** Everyone, easily. But that is true in a lot of countries with 10% density, so it is not the explanation.

**The real explanation is a piece of plumbing called the Ghent system.** In Denmark, Sweden, Finland, Iceland — and partly Belgium — **unemployment insurance is administered by union-affiliated funds**, not (only) by the state. To be insured against losing your job, you deal with an institution linked to your union, and joining the union is the natural, socially default step. The OECD (2025) is blunt about it: the countries where union membership is at or near 50% are essentially *the Ghent countries*, plus Norway.

That is a devastating little fact, and you should let it change how you think. **Density in these countries is not primarily a story about how much workers love unions. It is a story about who runs the unemployment system.** Institutions shape behaviour. If you want to explain a country's union numbers, look for the plumbing before you reach for the culture.

**Q3 — Who bargains with whom?** **Sectoral bargaining.** A union federation and an employers' federation negotiate for an entire *industry* at once, and the resulting agreement covers the firms in it. The consequence is remarkable: **Denmark and Sweden have no statutory national minimum wage at all.** Not because they don't believe in wage floors — because the wage floor is set by collective agreement, industry by industry, and covers nearly everybody without a law being needed (European Commission, 2022).

**And now the honesty.** The Ghent system is **eroding.** Private unemployment-insurance funds that do *not* require union membership have been growing, and Nordic union density has been declining for decades from a much higher peak (Nordic Council of Ministers, 2025). "Nordic unions are strong" is true, and "Nordic unions are weakening" is also true, and a course that gives you only the first has given you a postcard.

:::reveal What is the Ghent system, and why does it explain Nordic union density better than culture does? ||| A system in which unemployment insurance is administered by union-affiliated funds rather than by the state alone. To be insured against job loss you deal with a union-linked institution, so joining is the default. The OECD finds that the countries with union membership near or above 50% are essentially the Ghent countries — which means the density is largely explained by who runs the unemployment system, not by how much workers like unions.

## Sources
- OECD. (2025). *Membership of unions and employers' organisations, and bargaining coverage*. OECD Publishing. https://www.oecd.org/en/publications/membership-of-unions-and-employers-organisations-and-bargaining-coverage_fe47107c-en.html
- Bureau of Labor Statistics. (2026, February 18). *Union members — 2025*. U.S. Department of Labor. https://www.bls.gov/news.release/pdf/union2.pdf
- European Commission. (2022). *Directive (EU) 2022/2041 on adequate minimum wages in the European Union*. EUR-Lex. https://eur-lex.europa.eu/eli/dir/2022/2041/oj
- Nordic Council of Ministers. (2025). *Changes in union density in the Nordic countries*. Nordic Economic Policy Review 2025. https://pub.norden.org/nord2025-001/changes-in-union-density-in-the-nordic-countries.html`,
    },
    {
      slug: "germany-codetermination",
      section: "Section 6 · There is no single union model: six countries",
      title: "21 · Germany: workers on the board",
      recallContent: [
        {
          prompt: "Roughly what were trade union density rates in Sweden, Denmark and Iceland in 2024, and in the US in 2025?",
          answer:
            "Around 65% in Sweden and Denmark, about 91% in Iceland (OECD, 2025) — against 10.0% in the United States in 2025 (BLS, 2026).",
        },
        {
          prompt: "Why do Denmark and Sweden have no statutory national minimum wage?",
          answer:
            "Because the wage floor is set by sectoral collective agreements, industry by industry, which cover nearly everybody — so no statute is needed.",
        },
      ],
      body: `Germany is the country that will most confuse an American, because on paper its unions look *weak* and its workers have *more power* than almost anywhere else.

**The numbers first.** German trade union density was about **14.1% in 2024** — barely above the US **10.0%** in 2025. But **collective bargaining coverage in Germany is roughly 49–50%** (2022–2024 estimates), against **11.2%** in the US in 2025 (ETUI/Worker Participation, 2024; BLS, 2026).

Stop and look at that.

| | Germany | United States |
|---|---|---|
| Union **members** | ~14.1% (2024) | 10.0% (2025) |
| Workers **covered** by a union contract | ~49–50% (2022–24) | 11.2% (2025) |

Roughly the same share of workers *join*. **Roughly five times the share are covered.** Now go back to Question 3 from lesson 2 — *who bargains with whom, and at what level* — because it is the entire answer. German bargaining happens at the **sector** level, between an industry union and an employers' association, and the agreement covers the firms in that association whether or not a given worker ever signed anything.

**And then Germany does something no American workplace does. Twice.**

**Channel one: the works council (*Betriebsrat*).** Under the Works Constitution Act (*Betriebsverfassungsgesetz*), employees in a workplace can elect a works council. Note who elects it: **all the employees, not just union members.** It is not the union — it is a *statutory* body of the workforce. It has real **co-determination rights**: on things like working hours, overtime, shift patterns, holiday scheduling and disciplinary procedures, the employer generally cannot act **without the works council's agreement**. On restructuring and redundancies it has strong information and consultation rights.

**Channel two: the supervisory board (*Aufsichtsrat*).** German companies have a two-tier board: a management board that runs the company, and a supervisory board that appoints and oversees it. Under the **Co-determination Act of 1976 (*Mitbestimmungsgesetz*)**, a company with **more than 2,000 employees** must fill **half** the seats on that supervisory board with **employee representatives**. Smaller companies (roughly 500–2,000 employees) have **one-third** employee representation.

Read that again. **Half the supervisory board.** Workers, in the room where the CEO is hired and fired.

**Now the catch, because there is always a catch and the caricature usually omits it.** The chair of the supervisory board comes from the shareholder side and holds a **casting vote** in a tie. So it is parity *of seats*, not parity *of power* — shareholders retain ultimate control. (The exception is the coal and steel industries, where a 1951 law gave genuinely full parity.) German co-determination is not workers running the company. It is workers being **structurally, legally, permanently in the room** — with a vote, a veto over a defined list of workplace decisions, and access to the information.

**Does it work?** That is a live argument and this course will not settle it for you. Supporters point to Germany's manufacturing base, its low strike rates, and how German firms handled the 2008–09 crisis (cutting hours rather than jobs, with union agreement). Critics argue co-determination slows decisions and can entrench insiders — workers with permanent contracts — against everyone else. Both camps have evidence. **What is not arguable is that it exists**, and that it is a completely different answer to Question 3 than anything in American law.

:::reveal Germany and the US have similar union MEMBERSHIP rates. Why is German bargaining COVERAGE roughly five times higher? ||| Because German bargaining happens at the SECTOR level — an industry union negotiates with an employers' association, and the agreement covers the firms in it whether or not a given worker ever joined a union. American bargaining happens workplace by workplace, so coverage can barely exceed membership.

## Sources
- ETUI / Worker Participation. (n.d.). *Germany: National industrial relations*. European Trade Union Institute. https://www.worker-participation.eu/national-industrial-relations/countries/germany
- Mitbestimmungsgesetz [Co-determination Act] of 4 May 1976 (Germany). Gesetze im Internet, Federal Ministry of Justice. https://www.gesetze-im-internet.de/mitbestg/
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany). Gesetze im Internet, Federal Ministry of Justice. https://www.gesetze-im-internet.de/betrvg/
- OECD. (2025). *Membership of unions and employers' organisations, and bargaining coverage*. OECD Publishing. https://www.oecd.org/en/publications/membership-of-unions-and-employers-organisations-and-bargaining-coverage_fe47107c-en.html
- Bureau of Labor Statistics. (2026, February 18). *Union members — 2025*. U.S. Department of Labor. https://www.bls.gov/news.release/pdf/union2.pdf`,
    },
    {
      slug: "japan-enterprise-unions",
      section: "Section 6 · There is no single union model: six countries",
      title: "22 · Japan: the union inside the company",
      recallContent: [
        {
          prompt: "What is a German works council, and who elects it?",
          answer:
            "A statutory body of the workforce, elected by ALL employees in a workplace — not just union members. It has co-determination rights: on working hours, overtime, shifts and discipline the employer generally cannot act without its agreement.",
        },
        {
          prompt: "Under the German Co-determination Act of 1976, what share of the supervisory board of a company with over 2,000 employees must be employee representatives — and what is the catch?",
          answer:
            "Half. The catch is that the board's chair comes from the shareholder side and holds a casting vote in a tie, so it is parity of seats, not parity of power.",
        },
      ],
      body: `In America a union is usually organized by **craft** (the electricians) or by **industry** (all autoworkers). In Japan, the dominant form is neither. It is the **enterprise union**: the union of *this company*.

Toyota's workers have a Toyota union. Its members are the regular employees of Toyota. Its officers are Toyota employees, often on leave from their jobs, and many will return to management careers at Toyota afterwards.

**Ask Question 3.** Who bargains with whom? The company's union bargains with the company. So the union's fortunes are tied, tightly and directly, to the firm's fortunes. If the company does badly, the union does badly. **This produces cooperation.** Japan's strike rates are among the lowest in the industrialized world, and Japanese unions have historically accepted restructuring in exchange for protecting the jobs of their members.

**Then how does anyone get a raise?** Through a mechanism with no American equivalent: the **shuntō**, the "spring labour offensive." Every spring, enterprise unions across the whole economy bargain at roughly the same time. The national federation — **RENGO**, the Japanese Trade Union Confederation, formed in 1989 — sets a target, big exporters settle first, and their settlement becomes the benchmark everyone else negotiates against. It is a way of getting *coordinated*, economy-wide wage-setting out of a movement organized company by company. In the 2024 shuntō, RENGO reported an average wage increase above **5%** — its highest in over three decades, after decades of near-flat wages (JILPT, 2025).

**And now Question 2, which is where the model bleeds.**

The enterprise union is the union of the company's **regular employees**. Japan has an enormous **non-regular** workforce — part-time, fixed-term, and dispatched (agency) workers — who are, roughly speaking, not the people the enterprise union was built to protect. A union whose entire structure is "we are the company's people" struggles by design to defend the workers the company treats as *not* its people.

Japan's estimated unionization rate was **16.1% as of June 30, 2024** — the lowest on record, down from around 30% in 1990 (Ministry of Health, Labour and Welfare, 2024).

**The lesson.** Enterprise unionism buys cooperation, stability, and low conflict — and pays for it by drawing a line around who counts as "us." That is not a Japanese quirk. **It is the same trade-off you saw the AFL make in 1886**, and the same one the CIO refused in 1935. The question of *who is in the union* is never a detail. It is the whole design.

:::reveal What is an enterprise union, and which group of workers does that structure systematically leave out in Japan? ||| A union organized at a single company, whose members are that company's regular employees. It systematically leaves out non-regular workers — part-time, fixed-term and dispatched (agency) workers — because a union built on "we are the company's people" struggles by design to defend the workers the company treats as not its people.

## Sources
- Ministry of Health, Labour and Welfare (Japan). (2024). *Basic survey on labour unions, 2024*. Reported in Japan Institute for Labour Policy and Training, *Japan Labor Issues*. https://www.jil.go.jp/english/jli/documents/2025/054-02.pdf
- Japan Institute for Labour Policy and Training. (2025). *2024 shuntō: The first wage increase above 5%*. *Japan Labor Issues*. https://www.jil.go.jp/english/jli/documents/2025/051-03.pdf
- Japanese Trade Union Confederation (RENGO). (n.d.). *About RENGO*. https://www.jtuc-rengo.org/about/
- OECD. (2025). *Membership of unions and employers' organisations, and bargaining coverage*. OECD Publishing. https://www.oecd.org/en/publications/membership-of-unions-and-employers-organisations-and-bargaining-coverage_fe47107c-en.html`,
    },
    {
      slug: "china-acftu-a-different-object",
      section: "Section 6 · There is no single union model: six countries",
      title: "23 · China: when the union is an arm of the state",
      recallContent: [
        {
          prompt: "What is the shuntō, and what problem does it solve?",
          answer:
            "Japan's annual 'spring labour offensive': enterprise unions across the economy bargain at roughly the same time, with RENGO setting a target and big exporters' settlements becoming the benchmark. It produces coordinated, economy-wide wage-setting from a movement organized company by company.",
        },
        {
          prompt: "What was Japan's estimated unionization rate as of June 2024?",
          answer: "16.1% — the lowest on record, down from around 30% in 1990 (MHLW, 2024).",
        },
      ],
      body: `This lesson requires you to do something genuinely difficult: **stop assuming the word means what you think it means.**

China has a trade union. It has, by membership, the **largest trade union organization in the world**: the **All-China Federation of Trade Unions (ACFTU)**.

It is not a weak union. It is a **different kind of object**, and calling it a "union" without explanation will mislead you every time.

**Run the four questions, straight down the statute.**

**Q1 — Who is allowed to organise?** Under China's **Trade Union Law**, trade unions operate **under the leadership of the Communist Party of China**, and the ACFTU is the single, unified national trade union organization. A union at a workplace must **affiliate to the ACFTU**, and establishing one requires **approval from the trade union body at the next level up**.

So: you may join a union. You may not found an **independent** one. There is one union, its structure runs upward to a federation, and that federation's leadership relationship is defined by law as running to the party.

**Q2 — Who is excluded?** Anyone who wants a union that is not that one.

**Q3 — Who bargains with whom?** The workplace union is, structurally, part of an apparatus whose loyalties the law defines. When a dispute pits workers against an employer — particularly a state-linked employer, or a major local one — the union is not a straightforwardly independent party to it. In practice the ACFTU does a great deal of real work — welfare administration, legal aid, some wage negotiation — and it would be a caricature to say it does nothing for workers. **But it is not, and is not designed to be, an organization whose first duty is to its members against the state.**

**Q4 — What happens to you if you try?** The right to strike appeared in China's 1975 and 1978 constitutions. It was **removed from the 1982 Constitution** and is not a constitutional right today (Chang & Brown, 2017). Strikes still happen — a lot of them — but they happen *outside* any legal framework that protects the people who join them. Workers who attempt to organize independently, and the labour NGOs and activists who assist them, have been detained; international bodies including the ILO's supervisory machinery and the International Trade Union Confederation have raised this repeatedly (ITUC, n.d.).

**And the international marker.** China has **not ratified** ILO Convention No. **87** (Freedom of Association and Protection of the Right to Organise, 1948) or Convention No. **98** (Right to Organise and Collective Bargaining, 1949) — the two conventions that define the international floor you will meet in Section 7 (ILO NORMLEX, n.d.).

**Why this lesson is in the course.** Not to score a political point. Because it teaches you the sharpest possible version of **Question 1**. In most of this course, "who may organise?" has been a question about *obstacles* — cost, retaliation, exclusion, hostile employers. In China it is a question about **definition**: the thing you are permitted to join is not the thing an American or a Swede means by the word.

When you compare countries, the word "union" is not a fixed unit. **Check what the institution actually is before you compare the numbers.** A membership figure means nothing if you have not asked who the organization answers to.

> **Currency note.** Laws and enforcement change. Everything in this lesson is described as of **2026** and cited to the statute or to a dated source. If you use it in an argument, check whether it still holds.

:::reveal Under China's Trade Union Law, what makes the ACFTU a fundamentally different kind of institution from a Swedish or American union? ||| It is the single legal national trade union: unions operate under the leadership of the Communist Party, a workplace union must affiliate to the ACFTU, and forming one requires approval from the union body at the next level up. You may join a union; you may not found an independent one. So its first duty is not defined as running to its members against the state.

## Sources
- Trade Union Law of the People's Republic of China (as amended). National People's Congress. http://en.npc.gov.cn/2021-12/24/c_791373.htm
- International Labour Organization. (n.d.). *Ratifications for China*. NORMLEX. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:103404
- Chang, K., & Brown, W. (2017). *The emerging industrial relations of China*. Cambridge University Press. https://www.cambridge.org/core/books/emerging-industrial-relations-of-china/
- International Trade Union Confederation. (n.d.). *Global Rights Index*. https://www.ituc-csi.org/global-rights-index
- International Labour Organization. (n.d.). *Freedom of Association and Protection of the Right to Organise Convention, 1948 (No. 87)*. NORMLEX. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312232`,
    },
    {
      slug: "solidarity-and-cosatu",
      section: "Section 6 · There is no single union model: six countries",
      title: "24 · Poland and South Africa: when a union is the opposition",
      recallContent: [
        {
          prompt: "Which two ILO conventions has China not ratified, and what do they cover?",
          answer:
            "Convention No. 87 (freedom of association and the right to organise, 1948) and Convention No. 98 (the right to organise and bargain collectively, 1949).",
        },
        {
          prompt: "What happened to the right to strike in China's constitution?",
          answer:
            "It appeared in the 1975 and 1978 constitutions and was removed from the 1982 Constitution. It is not a constitutional right today. Strikes still occur, but outside any framework that protects the people who join them.",
        },
      ],
      body: `Sometimes a union is not primarily about wages at all. Sometimes it is the only organization a repressive state has failed to control — and it becomes the vehicle for overthrowing that state.

Two cases, on two continents, in the same decade.

---

**Poland: Solidarność.**

Poland in 1980 was a communist state that described itself as a *workers'* state. Which created a fascinating vulnerability: it could not easily explain why actual workers were not allowed to organize themselves.

In **August 1980**, workers at the Lenin Shipyard in **Gdańsk** occupied the yard, led by an electrician named **Lech Wałęsa**. They posted **21 Demands** on the shipyard gate. Demand number one was not about pay. It was the right to form **free trade unions, independent of the Communist Party**. (The handwritten boards are now inscribed on **UNESCO's Memory of the World** register.)

On **31 August 1980**, the government signed the **Gdańsk Agreement**, conceding an independent, self-governing trade union — the first in the Soviet bloc. **Solidarity** was born, and within about a year had grown to roughly **10 million members** — an extraordinary share of the country's working population.

The state's answer came on **13 December 1981**: **martial law**. Solidarity was banned, its leaders interned. It survived underground for most of a decade.

And then it won. The **Round Table talks** of February–April **1989** produced partly free elections in **June 1989**, which Solidarity's candidates swept. Poland became the first Soviet-bloc country to break, and the rest of the bloc followed within months.

**Sit with what that means.** A trade union — a *trade union* — was the instrument that ended communist rule in Poland. Question 1 ("who may organise?") turned out, in a one-party state, to be the same question as "who governs?"

---

**South Africa: COSATU.**

Under apartheid, Black South Africans could not vote. Black trade unions were, for most of the apartheid era, outside the legal industrial-relations system entirely.

In **1973**, a wave of strikes broke out in **Durban** — large, spreading, and impossible to ignore. In **1979**, the government-appointed **Wiehahn Commission** recommended that Black trade unions be granted **legal recognition** and brought into the registration system. The regime's reasoning was **control**: unregistered Black unions were growing anyway, and a registered union can be regulated. In **1985**, the **Congress of South African Trade Unions (COSATU)** was founded, and it turned that legal opening into a weapon.

Because Black workers had **no vote**, the union became the political vehicle. COSATU's strikes and "stayaways" were not only about wages; they were about apartheid. **In a country where you cannot vote, withdrawing your labour is the ballot you have.** COSATU, allied with the ANC and the United Democratic Front, became one of the central engines of the movement that ended apartheid in 1994.

**And then it got complicated — which is the part you must not skip.** After 1994 COSATU entered a formal governing alliance with the ANC, the party it had helped bring to power. A union federation allied to the governing party is in a genuinely difficult position: it must bargain with a state run by its own allies. That tension is live and **actively contested in South African politics today**, and it is not this course's job to adjudicate it. In **August 2012**, police killed **34 striking miners at Marikana**; a judicial commission of inquiry reported in **2015**, and responsibility for what happened remains politically contested and litigated. It is a reminder that a union movement's relationship to a state it helped create does not stay simple.

---

**What both cases teach.** When workers have no other legal channel — no vote, no party, no free press — **the union becomes the channel**, and the state understands that perfectly well. That is why authoritarian governments so often permit *a* union and forbid *an independent* one. They are not confused about what a union is. They know exactly what it is.

:::reveal Why did a trade union become the vehicle for democratic change in both Poland and apartheid South Africa? ||| Because in each case workers had no other legal channel — no free vote, no independent party, no free press. When the union is the only organization the state has failed to control, "who may organise?" becomes the same question as "who governs?" — which is precisely why authoritarian states permit a union but forbid an independent one.

## Sources
- UNESCO. (n.d.). *Twenty-one demands, Gdańsk, August 1980: The birth of the Solidarity trade union*. Memory of the World Register. https://www.unesco.org/en/memory-world/twenty-one-demands-gdansk-august-1980-birth-solidarity-trades-union-massive-social-movement
- International Center on Nonviolent Conflict. (n.d.). *Poland's Solidarity movement (1980–1989)*. https://www.nonviolent-conflict.org/polands-solidarity-movement-1980-1989/
- South African History Online. (n.d.). *Wiehahn Commission report tabled in parliament*. https://sahistory.org.za/dated-event/wiehahn-commission-report-tabled-parliament
- Nelson Mandela Foundation, O'Malley Archives. (n.d.). *Trade unions*. https://omalley.nelsonmandela.org/index.php/site/q/03lv02424/04lv02730/05lv03188/06lv03220.htm
- Republic of South Africa. (2015). *Report of the Marikana Commission of Inquiry*. https://www.gov.za/documents/marikana-commission-inquiry-report`,
    },
    {
      slug: "gulf-kafala",
      section: "Section 6 · There is no single union model: six countries",
      title: "25 · The Gulf: workers with almost no rights at all",
      recallContent: [
        {
          prompt: "What was the first of Solidarity's 21 Demands at Gdańsk in August 1980?",
          answer: "The right to form free trade unions, independent of the Communist Party. Not pay — the right to organise.",
        },
        {
          prompt: "Why did COSATU's strikes function as politics in apartheid South Africa?",
          answer:
            "Because Black South Africans could not vote. In a country where you cannot vote, withdrawing your labour is the ballot you have.",
        },
      ],
      body: `The last stop is the hardest, and the course would be dishonest without it. Everywhere else in this section, workers had *some* answer to Question 4 — *what happens if you try?* Here, for a very large number of people, the answer is close to: **everything you have.**

**The kafala system.**

Across much of the Gulf, migrant workers — who in several of these countries are the **overwhelming majority of the workforce** — enter under a sponsorship system known as **kafala**. A worker's legal status in the country is tied to a **specific employer**, the *kafeel*. Historically this meant that without the employer's permission you could not change jobs, and in some cases could not leave the country. Layer on top of that the standard pattern documented by the ILO and by rights organizations: **recruitment debt** (workers pay large fees to agents to get the job, arriving already in debt), **passport confiscation**, and wage theft.

**Run Question 4.** If your visa, your housing, your ability to change jobs, and your ability to go home all run through one man, then "I'd like to raise a grievance" is not a workplace conversation. It is a bet on the rest of your life.

**What has changed — and this is real, and you should say so.**

Qatar, under sustained international scrutiny and in a formal programme with the ILO, made substantial legal reforms in 2020:

- **Law No. 17 of 2020** introduced a **non-discriminatory minimum wage** — the first in the region — of **QAR 1,000 per month**, plus allowances for food and accommodation where the employer does not provide them.
- **Law No. 19 of 2020** **removed the No-Objection Certificate requirement**, so a migrant worker can change jobs without needing the employer's permission. Exit-permit requirements had been removed earlier.

The ILO described these as dismantling core elements of kafala (ILO, 2020). That is a genuine change, and pretending otherwise would be exactly the kind of dishonesty this course is against.

**What has NOT changed.**

**Migrant workers in Qatar still may not form or join trade unions.** The right to form workers' organizations is reserved to Qatari nationals. The main workplace mechanism available to migrants is an elected **"joint committee"** at the enterprise — a consultative body, not a union with the right to bargain and strike. Qatar has **not ratified** ILO Convention No. **87** or No. **98** (U.S. Department of State, 2025; ILO, n.d.).

So run the four questions honestly, as of **2026**:

| | Answer |
|---|---|
| **Q1 — who may organise?** | Nationals. Migrant workers, who are most of the workforce, may not form or join a trade union. |
| **Q2 — who is excluded?** | The majority of the people doing the work. |
| **Q3 — who bargains with whom?** | Largely, nobody bargains. There are consultative joint committees; there is a minimum wage set by law. |
| **Q4 — what happens if you try?** | Your legal presence in the country has historically depended on your employer. Reforms have loosened that; enforcement is contested. |

**Be careful here, in both directions.** Reporting on the Gulf runs to two failure modes: the promotional version, which recites the 2020 laws and stops; and the atrocity version, which recites abuses and ignores that the law changed. Both are propaganda. **The accurate statement is: the legal framework improved substantially in 2020, freedom of association for migrant workers did not, and independent monitors — including the ILO's own annual reporting — describe enforcement as uneven.** Date every claim. Check whether it still holds.

**And one last thought, which brings you home.** Look at the shape of what is happening here: a category of worker is defined *by law* as outside the system that protects everyone else, and the workers in that category are the ones doing the hardest, most dangerous work.

You have seen that shape before. It was in **lesson 10**, in a 1935 American statute, and the words were *"agricultural laborer"* and *"domestic service."*

The mechanism is not exotic. It is the oldest one there is.

:::reveal Under the kafala system, what is the practical consequence of tying a migrant worker's legal status to one specific employer? ||| Your visa, housing, ability to change jobs and ability to leave the country all run through one person — so raising a grievance is not a workplace conversation, it is a bet on the rest of your life. Qatar's 2020 reforms removed the No-Objection Certificate requirement and introduced a minimum wage, but migrant workers still may not form or join trade unions.

## Sources
- International Labour Organization. (2020, August 30). *Dismantling the kafala system and introducing a minimum wage mark new era for Qatar labour market*. https://www.ilo.org/resource/article/dismantling-kafala-system-and-introducing-minimum-wage-mark-new-era-qatar
- International Labour Organization. (2025). *ILO–Qatar annual report 2024*. https://www.ilo.org/sites/default/files/2025-02/ILO-Qatar%20Annual%20Report%202024.pdf
- U.S. Department of State. (2025). *2024 country reports on human rights practices: Qatar*. https://www.state.gov/reports/2024-country-reports-on-human-rights-practices/qatar
- International Labour Organization. (n.d.). *Ratifications for Qatar*. NORMLEX. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:103426
- National Labor Relations Act, 29 U.S.C. § 152(3) (1935). Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section152&edition=prelim`,
    },
    {
      slug: "section-6-quiz",
      section: "Section 6 · There is no single union model: six countries",
      title: "26 · Check yourself: six countries, four questions",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the \"Ghent system\"?",
            options: [
              "A system of sectoral bargaining used in Belgium",
              "A system in which UNEMPLOYMENT INSURANCE is administered by union-affiliated funds, making union membership the natural default",
              "A treaty setting minimum labour standards in Europe",
              "A form of board-level worker representation",
            ],
            correctIndex: 1,
            explanation:
              "Denmark, Sweden, Finland, Iceland and partly Belgium. The OECD (2025) finds the countries with membership near or above 50% are essentially the Ghent countries — density is largely explained by plumbing, not culture.",
            sourceLessonSlug: "nordics-ghent-and-sectoral-bargaining",
          },
          {
            prompt: "Roughly what was Iceland's trade union density in 2024, per the OECD?",
            options: ["About 25%", "About 50%", "About 65%", "About 91%"],
            correctIndex: 3,
            explanation:
              "About 91% in Iceland; around 65% in Sweden, Denmark and Finland — against 10.0% in the US in 2025 (OECD, 2025; BLS, 2026).",
            sourceLessonSlug: "nordics-ghent-and-sectoral-bargaining",
          },
          {
            prompt: "Why do Denmark and Sweden have NO statutory national minimum wage?",
            options: [
              "Because they do not believe in wage floors",
              "Because the wage floor is set by sectoral collective agreements, industry by industry, and covers nearly everybody without a law",
              "Because EU law forbids national minimum wages",
              "Because wages are set individually by each employer",
            ],
            correctIndex: 1,
            explanation:
              "A perfect illustration of Question 3 — bargaining LEVEL. The floor exists; it just isn't a statute.",
            sourceLessonSlug: "nordics-ghent-and-sectoral-bargaining",
          },
          {
            prompt: "What honest complication does the course add about the Nordic model?",
            options: [
              "That Nordic unions have never been strong",
              "That the Ghent system is ERODING — private unemployment funds not requiring union membership have grown, and Nordic density has declined for decades from a higher peak",
              "That Nordic countries have banned strikes",
              "That the OECD data are fabricated",
            ],
            correctIndex: 1,
            explanation:
              "\"Nordic unions are strong\" and \"Nordic unions are weakening\" are both true. A course that gives you only the first has given you a postcard.",
            sourceLessonSlug: "nordics-ghent-and-sectoral-bargaining",
          },
          {
            prompt: "Germany's union MEMBERSHIP rate (~14.1%, 2024) is close to the US rate (10.0%, 2025). What is dramatically different?",
            options: [
              "German unions have more money",
              "German bargaining COVERAGE is roughly 49–50%, versus 11.2% in the US — because German bargaining happens at the SECTOR level",
              "Germany has no strikes",
              "German unions are run by the government",
            ],
            correctIndex: 1,
            explanation:
              "Roughly the same share join; roughly five times the share are covered. Question 3 — who bargains with whom, and at what level — is the entire answer.",
            sourceLessonSlug: "germany-codetermination",
          },
          {
            prompt: "Under Germany's Co-determination Act of 1976, a company with more than 2,000 employees must fill what share of its SUPERVISORY BOARD with employee representatives?",
            options: ["One-tenth", "One-third", "Half", "All of it"],
            correctIndex: 2,
            explanation:
              "Half the seats. Workers in the room where the CEO is hired and fired. Companies of roughly 500–2,000 employees have one-third.",
            sourceLessonSlug: "germany-codetermination",
          },
          {
            prompt: "What is the \"catch\" in German board-level co-determination that the caricature usually omits?",
            options: [
              "Employee representatives cannot vote",
              "The board chair comes from the shareholder side and holds a CASTING VOTE in a tie — so it is parity of seats, not parity of power",
              "The law applies only to state-owned companies",
              "Workers must buy shares to qualify",
            ],
            correctIndex: 1,
            explanation:
              "Shareholders retain ultimate control (except in coal and steel, where a 1951 law gave full parity). Co-determination is not workers running the company — it is workers structurally, permanently in the room.",
            sourceLessonSlug: "germany-codetermination",
          },
          {
            prompt: "Who elects a German works council (Betriebsrat)?",
            options: [
              "The union's national leadership",
              "ALL the employees in a workplace — not just union members",
              "The company's shareholders",
              "The federal labour ministry",
            ],
            correctIndex: 1,
            explanation:
              "It is a statutory body of the workforce, not the union. It has co-determination rights over working hours, overtime, shifts and discipline.",
            sourceLessonSlug: "germany-codetermination",
          },
          {
            prompt: "What is an \"enterprise union\"?",
            options: [
              "A union of all workers in an industry",
              "A union organized at a single COMPANY, whose members are that company's regular employees",
              "A union organized by craft",
              "A union owned by the employer",
            ],
            correctIndex: 1,
            explanation:
              "Japan's dominant form. The union's fortunes are tied directly to the firm's, which produces cooperation and very low strike rates.",
            sourceLessonSlug: "japan-enterprise-unions",
          },
          {
            prompt: "Which workers does Japan's enterprise-union structure systematically leave out?",
            options: [
              "Senior managers",
              "Non-regular workers — part-time, fixed-term and dispatched (agency) workers",
              "Engineers",
              "Public employees",
            ],
            correctIndex: 1,
            explanation:
              "A union built on \"we are the company's people\" struggles by design to defend workers the company treats as NOT its people. It is the same trade-off the AFL made in 1886.",
            sourceLessonSlug: "japan-enterprise-unions",
          },
          {
            prompt: "What is Japan's shuntō?",
            options: [
              "A law requiring annual wage increases",
              "The 'spring labour offensive' — enterprise unions across the economy bargain at roughly the same time, with RENGO setting a target and big exporters' settlements setting the benchmark",
              "A ban on strikes during the spring",
              "A government wage board",
            ],
            correctIndex: 1,
            explanation:
              "It gets coordinated, economy-wide wage-setting out of a movement organized company by company. In 2024, RENGO reported an average increase above 5% — its highest in over three decades.",
            sourceLessonSlug: "japan-enterprise-unions",
          },
          {
            prompt: "Under China's Trade Union Law, what is true of the ACFTU?",
            options: [
              "It is one of several competing national federations",
              "It is the single legal national trade union: workplace unions must affiliate to it, forming one requires approval from the next-level union body, and unions operate under the leadership of the Communist Party",
              "It is a private organization independent of the state",
              "It is banned in mainland China",
            ],
            correctIndex: 1,
            explanation:
              "You may join a union. You may not found an independent one. The word 'union' is not a fixed unit across countries — check what the institution actually IS before comparing membership numbers.",
            sourceLessonSlug: "china-acftu-a-different-object",
          },
          {
            prompt: "What happened to the right to strike in China's constitution?",
            options: [
              "It was added in 1982",
              "It appeared in the 1975 and 1978 constitutions and was REMOVED from the 1982 Constitution",
              "It has been in every Chinese constitution",
              "It has never appeared in any Chinese constitution",
            ],
            correctIndex: 1,
            explanation:
              "Strikes still happen — many of them — but outside any legal framework that protects the people who join them. China has also not ratified ILO Conventions 87 or 98.",
            sourceLessonSlug: "china-acftu-a-different-object",
          },
          {
            prompt: "What was the FIRST of Solidarity's 21 Demands, posted on the Gdańsk shipyard gate in August 1980?",
            options: [
              "A wage increase",
              "The right to form FREE TRADE UNIONS, independent of the Communist Party",
              "Free elections for parliament",
              "Poland's withdrawal from the Warsaw Pact",
            ],
            correctIndex: 1,
            explanation:
              "Not pay — the right to organise. In a one-party state, Question 1 (\"who may organise?\") turned out to be the same question as \"who governs?\"",
            sourceLessonSlug: "solidarity-and-cosatu",
          },
          {
            prompt: "Why did the apartheid government's Wiehahn Commission (1979) recommend legally recognizing Black trade unions?",
            options: [
              "Out of a commitment to racial equality",
              "For CONTROL — unregistered Black unions were growing anyway, and a registered union can be regulated",
              "Because the ILO ordered it",
              "Because Black workers had won the vote",
            ],
            correctIndex: 1,
            explanation:
              "COSATU (founded 1985) turned that legal opening into a weapon. Because Black South Africans could not vote, withdrawing labour was the ballot they had.",
            sourceLessonSlug: "solidarity-and-cosatu",
          },
          {
            prompt: "What did Qatar's Law No. 19 of 2020 do?",
            options: [
              "Legalized trade unions for migrant workers",
              "Removed the No-Objection Certificate requirement, so a migrant worker can change jobs without the employer's permission",
              "Banned all foreign workers",
              "Required employers to pay recruitment fees",
            ],
            correctIndex: 1,
            explanation:
              "Paired with Law No. 17 of 2020, which set a non-discriminatory minimum wage — the first in the region. The ILO described these as dismantling core elements of kafala. That change is real.",
            sourceLessonSlug: "gulf-kafala",
          },
          {
            prompt: "What has NOT changed for migrant workers in Qatar as of 2026?",
            options: [
              "They still cannot be paid a minimum wage",
              "They still may not form or join TRADE UNIONS — that right is reserved to Qatari nationals; the main mechanism is a consultative 'joint committee'",
              "They still cannot leave the country under any circumstances",
              "They are still barred from any legal complaint",
            ],
            correctIndex: 1,
            explanation:
              "Qatar has not ratified ILO Convention 87 or 98. The accurate statement: the legal framework improved substantially in 2020, freedom of association did not, and monitors describe enforcement as uneven.",
            sourceLessonSlug: "gulf-kafala",
          },
          {
            prompt: "The course says the Gulf's exclusion of migrant workers has a shape you have already seen. Where?",
            options: [
              "In the Taft-Hartley Act's secondary-boycott ban",
              "In the NLRA's 1935 exclusion of \"agricultural laborers\" and workers \"in the domestic service\" — a category of worker defined BY LAW as outside the system that protects everyone else",
              "In the Chinese Trade Union Law",
              "In Germany's works councils",
            ],
            correctIndex: 1,
            explanation:
              "A category of worker is defined by law as outside the protections, and the workers in that category do the hardest, most dangerous work. The mechanism is not exotic. It is the oldest one there is.",
            sourceLessonSlug: "gulf-kafala",
          },
        ],
      },
    },
  ],
};
