import type { AuthoredCourse } from "./authored-course";

// How to Read a Number: Statistics for Citizens.
//
// Course 1 of the Science & Math track. Outline:
// plans/future-courses/sciences/outlines/01-how-to-read-a-number.md
// Track proposal: plans/future-courses/sciences/02-science-and-math-track-proposal.md
//
// WHY THIS COURSE EXISTS: the catalog has 34 civics courses and every one of them quotes numbers.
// None of them teaches a learner how to check one. This is the missing reading skill, and it is a
// READING skill, which is why it needs no math rendering and no numeric grading to be honest.
//
// FOUR RULES THIS FILE FOLLOWS AND THE NEXT AUTHOR SHOULD NOT BREAK:
//
// 1. NO INVENTED NUMBERS, anywhere, including in examples. Every figure is either real and cited,
//    or is visibly labelled as made up for the illustration. A statistics-literacy course that
//    fabricates its own statistics is a joke with a long fuse.
// 2. Assessment is scenario multiple-choice and `:::reveal` self-checks. Never a typed fill-in
//    whose answer is a number: `checkExerciseAnswer` grades by string equality, so it would be
//    testing formatting rather than thinking (and `check-assessment-fit.ts` fails it for exactly
//    that reason).
// 3. DISTRACTORS MUST BE DEFINITIVELY WRONG AND ROUGHLY AS LONG AS THE ANSWER. This course is
//    unusually exposed to the longest-option tell, because the true answer to "what is wrong with
//    this number?" naturally wants a because-clause. Give the wrong options real, checkable
//    specificity instead of padding.
// 4. The law lessons (13) state HOLDINGS, not vibes. Partisan-gerrymandering doctrine is easy to
//    get wrong in a way that misleads a learner about their own remedies. See the research checks
//    registered in src/lib/research-checks.ts.

export const HOW_TO_READ_A_NUMBER_COURSE: AuthoredCourse = {
  title: "How to Read a Number: Statistics for Citizens",
  description:
    "Every civics argument arrives with a number attached. This course teaches you to check one: what was counted, who counted it, when, and compared to what. Polls and margins of error, rates versus counts, the denominator that decides the story, charts built to mislead, and the arithmetic of representation itself. No calculations required, and none of the numbers in it are invented.",
  lessons: [
    // ── Section 1 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-four-questions",
      title: "1 · The four questions",
      section: "Section 1 · What a number has to have",
      body: `A number in public is not a fact. It is a claim, and like any claim it can be checked.

Four questions do most of the checking. Ask them in order, every time, until you stop having to think about it.

**What was counted?** Not what the sentence says was counted: what the person doing the counting actually wrote down. "Crime" is not a thing anyone counts. Reported incidents are counted. Arrests are counted. Convictions are counted. Those three numbers move independently, and they can move in opposite directions at the same time.

**Who counted it?** An agency with a statistical method and a published methodology, a campaign with a press release, and an advocacy group with a cause are three different sources. None of them is automatically wrong. All of them are answerable for how they got the number, and the good ones publish it.

**When?** A number describes a moment. "Unemployment is 4 percent" was true of some month. Whether it is true now is a separate question that the sentence quietly declines to answer.

**Compared to what?** This is the one people skip, and it is the one that does the most damage. A number alone means almost nothing. Forty thousand of something is enormous or trivial depending entirely on what it sits next to.

## Running it on a real sentence

Take a headline shape you have seen a hundred times: *Crime is up 40 percent.*

- **What was counted?** Unstated. Reported incidents? Which categories? A 40 percent rise in car break-ins and a 40 percent rise in homicides are not the same news.
- **Who counted it?** Unstated. A police department's own quarterly release and an independent analysis of the same underlying records can disagree, and the disagreement is usually about categories.
- **When?** Unstated. Compared with last month, last year, or the same month five years ago?
- **Compared to what?** Unstated. Forty percent of a small base is a small change wearing a big number. If a category went from 10 incidents to 14, that is a 40 percent rise and also four incidents.

Notice what just happened. We did not decide the headline was false. We decided that **as written it does not yet say anything**, and we know exactly which four things would make it say something.

That is the whole course. The rest is practice.

:::reveal A city reports that opioid overdose deaths rose 12 percent last year. Which of the four questions is most urgent here, and why? ||| "Compared to what." A 12 percent rise means one thing against a stable decade and something very different against three consecutive years of steep decline, where it might be a levelling off. The trend line, not the single step, carries the meaning.

## Why this is a civics skill and not a math skill

You will not calculate anything in this course. Every question above is a question about **provenance and comparison**, and both are reading skills. The arithmetic in public arguments is almost never wrong. What is wrong is what got counted, who is missing from the count, and what the number is placed beside.

That is good news, because it means the skill is available to you today, with no calculator and no formula.

## Sources

Bureau of Labor Statistics. (n.d.). *Handbook of methods*. U.S. Department of Labor. https://www.bls.gov/opub/hom/

U.S. Census Bureau. (n.d.). *Understanding and using American Community Survey data*. https://www.census.gov/programs-surveys/acs/library/handbooks.html`,
    },
    {
      slug: "counts-rates-per-capita",
      title: "2 · Counts, rates, and per-capita",
      section: "Section 1 · What a number has to have",
      recallContent: [
        {
          prompt: "The four questions you ask of any number in public are: what was counted, who counted it, when, and what else?",
          answer: "Compared to what. It is the one people skip, and the one that does the most damage.",
        },
      ],
      body: `Big places have more of everything. More crime, more restaurants, more librarians, more potholes, more of every single thing you could count. This is not a finding. It is what "big" means.

So a **count** (how many) almost always ranks places by population, no matter what it claims to rank them by. Converting a count into a **rate** (how many per some number of people) is the fix.

| Form | What it answers | Where it misleads |
|---|---|---|
| Count | How many in total | Ranks by population, wearing a costume |
| Rate per capita | How common, per person | Meaningless when the base is small or the wrong population |
| Rate per exposure | How common, per chance to happen | Harder to compute; usually the honest one |

## The third row is the one worth learning

Per capita is better than a raw count, and it is still often the wrong denominator.

Consider traffic deaths. Deaths per resident tells you something. Deaths per **mile driven** tells you much more, because it divides by the number of chances for a crash to happen rather than by the number of people who exist. A rural county with few residents and enormous driving distances looks catastrophic per capita and ordinary per mile. Neither number is false. They answer different questions, and only one of them is about road safety.

The move generalises. When you see a per-capita rate, ask: *per capita of whom, and is being a person the thing that creates the risk?*

- Workplace injuries: per worker beats per resident, and per hour worked beats per worker.
- School outcomes: per enrolled student beats per resident.
- Hospital deaths: per admitted patient beats per resident, and even that needs adjusting for how sick the patients were on arrival, because the best hospitals take the sickest people.

:::reveal A state proudly reports the lowest number of workplace fatalities in the country. What should you ask before believing the state is unusually safe? ||| Whether it is a count or a rate, and per what. A small state will have few fatalities simply by having few workers. The comparable figure is fatalities per hours worked, and it also depends on the mix of industries: a state with little construction or agriculture starts with a structural advantage that has nothing to do with its safety policy.

## The trap in the other direction

Rates can mislead too, and the usual way is a **small base**. A county with 400 residents that had two of something has a per-capita rate that will top any national ranking, and next year it will have zero and rank last. Nothing changed except that small numbers bounce.

When a rate ranking is topped by places you have never heard of, suspect the base before you suspect the finding.

## Sources

Bureau of Labor Statistics. (n.d.). *Census of Fatal Occupational Injuries: Methodology*. U.S. Department of Labor. https://www.bls.gov/iif/oshcfoi1.htm

National Center for Health Statistics. (n.d.). *Age-adjusted death rates*. Centers for Disease Control and Prevention. https://www.cdc.gov/nchs/`,
    },
    {
      slug: "percent-point-change",
      title: "3 · Percent, percentage point, and percent change",
      section: "Section 1 · What a number has to have",
      recallContent: [
        {
          prompt: "Why does ranking places by a raw count almost always just rank them by population?",
          answer: "Because bigger places have more of everything. A count has to be turned into a rate before it says anything about how common something is.",
        },
      ],
      body: `Three different things share one symbol, and political copy exploits the overlap constantly.

**A percent** is a share of a whole. Forty percent of voters.

**A percentage point** is the gap between two percents. Going from 40 percent to 44 percent is a rise of four **percentage points**.

**A percent change** is that gap expressed as a share of where you started. Going from 40 percent to 44 percent is a **10 percent increase**, because four is a tenth of forty.

Both of the last two sentences describe the identical event. One of them will be chosen, and the choice is made to persuade you.

## Where it gets sharp

The smaller the starting number, the more dramatic the percent change, which is why percent change is the preferred form for anything rare.

- A rise from 1 percent to 2 percent is one percentage point. It is also a **100 percent increase**, and it will be printed that way.
- A drop from 50 percent to 49 percent is one percentage point, and only a 2 percent decrease. Nobody will print that one as a percent change, because it sounds like nothing.

Same size of movement. Opposite rhetorical value. The writer picks the framing that fits the argument, and both framings are technically true, which is what makes this so effective.

:::reveal A drug trial reports that the treatment "cut the risk by half." What single further number do you need before you know whether that matters? ||| The starting risk, in absolute terms. Halving a risk from 8 in 100 to 4 in 100 is a major result. Halving it from 2 in 100,000 to 1 in 100,000 is real and almost irrelevant to any individual decision. Relative risk without absolute risk is unreadable.

## The reading habit

When you see a percent, decide which of the three it is before you decide how you feel about it. Usually the sentence will tell you if you read it slowly, and when it does not, that is itself information about who wrote it.

A rule that works: **if a change is reported only as a percent change, go find the two raw numbers.** The gap between how the change sounds and how the raw numbers look tells you how hard someone is working.

## Sources

Spiegelhalter, D. (2019). *The art of statistics: Learning from data*. Pelican.

National Cancer Institute. (n.d.). *Absolute risk and relative risk*. U.S. National Institutes of Health. https://www.cancer.gov/publications/dictionaries/cancer-terms`,
    },
    {
      slug: "the-denominator-is-the-argument",
      title: "4 · The denominator is the argument",
      section: "Section 1 · What a number has to have",
      recallContent: [
        {
          prompt: "Support moves from 40 percent to 44 percent. Give both honest ways to describe that change.",
          answer: "A rise of four percentage points, and a 10 percent increase. Both are correct; a campaign will print the second.",
        },
      ],
      body: `This is the most political lesson in the course, and it contains no politics.

Voter turnout is a fraction. The top of the fraction is the number of people who voted, which is counted carefully and rarely disputed. The bottom is a choice, and there are at least three defensible ones:

| Denominator | What it means | Effect on the turnout figure |
|---|---|---|
| Registered voters | People on the rolls | Highest, because registering is already a filter for intent |
| Voting-eligible population (VEP) | Adults legally able to vote | Middle |
| Voting-age population (VAP) | Everyone old enough | Lowest, because it includes people who legally cannot vote |

The same election produces three different turnout numbers. All three are honest. They answer three different questions, and choosing among them is choosing what story to tell.

- **Registered voters** answers: of the people already in the system, how many showed up? It makes turnout look strong and hides everyone who never registered.
- **VAP** answers: of all the adults here, how many voted? It makes turnout look weak, and it counts people who are not permitted to vote as though they abstained, which is a different thing entirely.
- **VEP** answers: of the people legally able to vote, how many did? It is usually the most informative, and it is the hardest to compute, because it requires estimating who is ineligible.

Notice that the denominator is where the disenfranchised go. Whether someone barred from voting appears in your turnout statistic as an abstention or does not appear at all is not a technical choice. It is an argument about what turnout is measuring.

## The same move, elsewhere

Once you see it, it is everywhere.

**Unemployment.** The headline rate (which the Bureau of Labor Statistics labels U-3) counts people without work who are actively looking. It excludes people who gave up looking, and it counts someone working part-time who wants full-time work as employed. BLS also publishes a broader measure, U-6, which includes those groups. Both are real, both are published monthly by the same agency, and they tell different stories about the same labor market.

**Graduation rates.** Out of students who started, or students who were still enrolled at the end? A school that loses students improves on the second measure by losing them.

**Conviction rates.** Out of arrests, out of charges filed, or out of cases that went to trial? Each answers a different question about the system.

:::reveal Two candidates cite turnout in the same district and give numbers ten points apart. Neither is lying. What is the most likely explanation? ||| They are dividing by different denominators, most likely registered voters versus the voting-eligible or voting-age population. Ask each one what is on the bottom of their fraction and the disagreement usually dissolves.

## The habit

**Find the denominator before you react to the number.** If the source does not say what it divided by, that absence is the finding.

## Sources

Bureau of Labor Statistics. (n.d.). *Alternative measures of labor underutilization (Table A-15)*. U.S. Department of Labor. https://www.bls.gov/news.release/empsit.t15.htm

McDonald, M. P. (n.d.). *United States Elections Project: Voter turnout methodology*. University of Florida. https://www.electproject.org/`,
    },
    {
      slug: "check-section-1",
      title: "5 · Knowledge check: what a number has to have",
      section: "Section 1 · What a number has to have",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A press release ranks states by the total number of small businesses that opened last year. What is the strongest objection to using that ranking to identify the best states for founders?",
            options: [
              "The ranking mostly reflects how many people live in each state, not how easy it is to start a business there",
              "Business openings are only recorded once a company files its first tax return, which happens the following year",
              "State business registries use incompatible category codes, so the totals cannot be added together at all",
              "Openings are a lagging measure, so the ranking describes the previous administration rather than the current one",
            ],
            correctIndex: 0,
            explanation:
              "A count ranks by population unless it is converted to a rate. The other three options describe real data problems that exist in other contexts, but none of them is the objection that this particular ranking invites: a big state will top a count of almost anything.",
            sourceLessonSlug: "counts-rates-per-capita",
          },
          {
            prompt: "A campaign says its candidate's support 'surged 50 percent' after a debate. Polling before the debate had the candidate at 4 percent. What is the most accurate description of what happened?",
            options: [
              "Support rose by two percentage points, from 4 percent to 6 percent",
              "Support rose by 50 percentage points, from 4 percent to 54 percent",
              "Support rose to half of all voters polled, from a starting share of 4 percent",
              "Support rose by 50 percent of the undecided voters, who were 4 percent of the sample",
            ],
            correctIndex: 0,
            explanation:
              "A 50 percent increase applied to a base of 4 percent is a rise of two percentage points, to 6 percent. Percent change is the preferred framing for movements from a small base precisely because it sounds so much larger than the underlying shift.",
            sourceLessonSlug: "percent-point-change",
          },
          {
            prompt: "Two analysts report turnout for the same election as 68 percent and 56 percent. Both used official vote totals. What is the most likely source of the gap?",
            options: [
              "One divided by registered voters and the other by the voting-eligible or voting-age population",
              "One counted only votes cast in person and the other included every mail ballot returned",
              "One used the certified count and the other used election-night returns before canvassing finished",
              "One counted every contest on the ballot and the other counted only the top race",
            ],
            correctIndex: 0,
            explanation:
              "The top of the turnout fraction is rarely disputed; the bottom is a choice. Registering is already a filter for intent, so a registered-voter denominator always produces the highest figure. The other three options describe genuine sources of small discrepancies, not a twelve-point one.",
            sourceLessonSlug: "the-denominator-is-the-argument",
          },
          {
            prompt: "A rural county tops the national ranking for per-capita rate of a rare disease, then falls to the bottom the following year. What most likely happened?",
            options: [
              "The county has a very small population, so one or two cases swing its rate enormously in either direction",
              "The county changed which laboratory processes its tests, so cases were classified under a different code",
              "The county began including non-residents treated at its hospital, which inflated the first year's count",
              "The county's reporting deadline moved, so one year's cases were recorded in the following year",
            ],
            correctIndex: 0,
            explanation:
              "Small bases bounce. When a per-capita ranking is topped by places you have never heard of, suspect the size of the denominator before you suspect the finding. The other options are real reporting artifacts, but none of them explains a swing from first to last in a single year.",
            sourceLessonSlug: "counts-rates-per-capita",
          },
          {
            prompt: "Which question does the headline 'Crime is up 40 percent' leave unanswered in a way that could reverse its meaning entirely?",
            options: [
              "Which offences were counted, since a rise in one narrow category is not a rise in crime",
              "Which police department released it, since departments compete for funding on these figures",
              "Whether the increase is statistically significant at the conventional threshold",
              "Whether the figure was seasonally adjusted before the comparison was made",
            ],
            correctIndex: 0,
            explanation:
              "'Crime' is not a quantity anyone counts. Reported incidents, arrests and convictions are counted separately and can move in opposite directions at once. The other three are worth asking, but none of them can flip the meaning the way the category definition can.",
            sourceLessonSlug: "the-four-questions",
          },
        ],
      },
    },
    // ── Section 2 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "averages-that-hide",
      title: "6 · Averages that hide",
      section: "Section 2 · What the number hides",
      body: `An average is a compression, and every compression loses something. The question is always what.

**The mean** adds everything up and divides by how many. It is pulled hard by extreme values.

**The median** is the middle value: half above, half below. It ignores how extreme the extremes are.

**The mode** is the most common value. It can sit nowhere near either of the others.

For a symmetric spread these three land close together and the choice does not matter. For anything skewed, they diverge, and the divergence is the story.

## Income is the standard example because it is the clearest

Income distributions are skewed: most people are clustered fairly low, and a long thin tail runs far to the right. The mean sits well above the median, because the tail drags it there.

So "average income rose" can be true in a year when most people got poorer, if the top of the distribution rose enough. The mean did what it was designed to do. It just answered a question nobody asked.

The habit that follows: **when you see "average," ask whether the thing being averaged is skewed.** Income, wealth, house prices, waiting times, company sizes, and social media followers all are. Heights and test scores mostly are not.

:::reveal A town reports that average household wealth is high, and also that most households are struggling. Can both be true at once? ||| Yes, easily. If a small number of very wealthy households live there, the mean is pulled far above what a typical household holds. The median would show the ordinary experience. Whenever mean and median disagree sharply, the gap is telling you the distribution is skewed.

## Which one is honest?

There is no universally honest average. There is only the right one for the question:

- **Typical experience** wants the median. What is life like for someone in the middle?
- **Totals and budgets** want the mean, because the mean times the count is the total, which is what a budget needs.
- **Most common case** wants the mode, which matters for planning around the usual rather than the middle.

The failure is not picking the wrong one. It is picking one silently, and reporting it as "the average" as though there were only one.

## Sources

U.S. Census Bureau. (n.d.). *Income and poverty: Definitions and methodology*. https://www.census.gov/topics/income-poverty.html

Spiegelhalter, D. (2019). *The art of statistics: Learning from data*. Pelican.`,
    },
    {
      slug: "spread-and-outliers",
      title: "7 · Spread, outliers, and the number that is not there",
      section: "Section 2 · What the number hides",
      recallContent: [
        {
          prompt: "Average household wealth in a town is high, yet most households are struggling. What explains it?",
          answer: "A skewed distribution. A few very wealthy households pull the mean far above the median, which is what a typical household actually holds.",
        },
      ],
      body: `Two school districts report the same average test score. In one, nearly every student is close to that average. In the other, half the students are far above it and half are far below. Those are not similar places, and the average cannot tell them apart.

**Spread** is what the average threw away.

- **Range** is the distance from lowest to highest. Simple, and completely at the mercy of one weird value.
- **Interquartile range** is the middle half: the distance from the 25th to the 75th percentile. It ignores the extremes on purpose, which is sometimes right and sometimes exactly wrong.
- **Standard deviation** describes typical distance from the mean. Useful, and it assumes a shape the data may not have.

## Outliers are not errors

The instinct to remove an outlier is often wrong. An outlier can be:

- **A mistake.** A typed extra zero, a misplaced decimal, a unit confusion.
- **A different population that got mixed in.** One hospital in a dataset of clinics.
- **The actual finding.** The thing you should be studying.

Deciding which one it is requires knowing the subject, not knowing statistics. That is worth sitting with, because it means no amount of statistical sophistication rescues you from having to understand what you are measuring.

:::reveal A county's average commute time is unremarkable, but residents describe the traffic as intolerable. What is the average likely hiding? ||| The spread. If a large share of commutes are very short and a large share are extremely long, the mean lands somewhere in the middle where almost nobody actually lives. The two groups have opposite experiences and the average describes neither.

## What to ask for

When you are given an average and nothing else, the useful request is not "is that right?" It is:

> "What did the distribution look like?"

A source that can answer that has looked at its own data. A source that cannot has computed one number and stopped.

## Sources

National Center for Education Statistics. (n.d.). *Statistical standards*. U.S. Department of Education. https://nces.ed.gov/statprog/

Spiegelhalter, D. (2019). *The art of statistics: Learning from data*. Pelican.`,
    },
    {
      slug: "where-the-number-came-from",
      title: "8 · Where the number came from",
      section: "Section 2 · What the number hides",
      recallContent: [
        {
          prompt: "Two districts report the same average test score. What could still make them completely different places?",
          answer: "The spread. One may cluster tightly around the average while the other splits into a high group and a low group, and the mean cannot tell them apart.",
        },
      ],
      body: `Five very different objects get printed in the same typeface, and telling them apart is most of the work.

| Kind | How it is made | What it is good for | Where it fails |
|---|---|---|---|
| Census | Attempted count of everyone | Small areas, small groups | Expensive, rare, and undercounts some populations |
| Sample survey | Ask a subset, generalise | Frequent measurement, attitudes | Depends entirely on who answered |
| Administrative record | A by-product of running a system | Complete within the system | Only sees people the system touches |
| Estimate | Model applied to partial data | Filling gaps between measurements | Inherits every assumption of the model |
| Projection | Estimate extended into the future | Planning | Not a measurement at all |

The last two are the ones most often mistaken for the first three. A projection is an argument about the future dressed in the clothes of a measurement.

## Administrative data has a specific blind spot

Records generated by running a system only see people the system touched. Emergency-room records show injuries that reached an emergency room. Complaint databases show people who knew how to complain and believed it would help.

This is not a flaw to correct. It is the definition of the data. But it means the phrase "the data shows" often means "the data shows, among the people this system already reaches."

## Why the census is a civics issue and not a clerical one

A census undercount is not a footnote. Congressional apportionment and the distribution of large amounts of federal funding are built on census counts, so an undercount moves seats and money away from the places it happens in.

The Census Bureau measures its own accuracy afterwards, through a post-enumeration survey, and publishes what it finds. That is a genuinely unusual institutional habit: an agency systematically documenting its own error. It is also why anyone can check.

The Bureau's post-enumeration work has repeatedly found that undercounts and overcounts are not spread evenly across groups. Before quoting any specific figure, go to the Bureau's own release for the census year in question and quote that, because the estimates are revised.

:::reveal A city says complaints about a service fell by a third after it launched a new complaints website. What is the most important thing to check? ||| Whether the new website made complaining harder or easier. Complaint counts measure the complaining process at least as much as they measure the underlying problem. If the old system took a phone call and the new one takes an account and a login, a drop in complaints is a measure of friction.

## Sources

U.S. Census Bureau. (n.d.). *Post-enumeration survey and demographic analysis*. https://www.census.gov/programs-surveys/decennial-census/about/coverage-measurement.html

U.S. Census Bureau. (n.d.). *Congressional apportionment*. https://www.census.gov/topics/public-sector/congressional-apportionment.html`,
    },
    // ── Section 3 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-a-margin-of-error-covers",
      title: "9 · What a margin of error actually covers",
      section: "Section 3 · Polls",
      recallContent: [
        {
          prompt: "What is the built-in blind spot of any administrative dataset, such as emergency-room records or complaint logs?",
          answer: "It only sees people the system touched. It describes who reached the system as much as it describes the underlying problem.",
        },
      ],
      body: `A poll reports a result and a margin of error. The margin describes **one** source of error: the fact that a random sample of a population will differ from the population by chance.

It does not cover:

- **A badly worded question.** Wording moves answers, sometimes by a lot.
- **Who could be reached.** If a whole group is hard to contact, no sample size fixes it.
- **Who chose to answer.** People who agree to a survey differ from people who decline, and the difference is not random.
- **Who is modeled as likely to vote.** In election polling this is a judgment call by the pollster, and reasonable pollsters make it differently.
- **Anything that went wrong in processing.**

So the margin of error is a **lower bound on uncertainty**, computed under an assumption of pure random sampling that no real survey achieves. A poll with a margin of plus or minus three points is uncertain by at least three points, and probably more.

## The misreading

The most common misuse is treating the margin as a bright line. Suppose a poll has one candidate at 48 and the other at 45, with a margin of plus or minus three points.

You will hear this reported as a lead, because "three points is exactly the margin." That reasoning does not hold. The margin applies to each estimate separately, and the uncertainty in a *difference* between two estimates is larger than the uncertainty in either one. Two numbers three points apart in a poll like that are much closer to a tie than the headline suggests.

The habit: **when two poll numbers are within roughly twice the margin of each other, treat them as not clearly distinguished.** That is a rough rule and it is far closer to right than the bright-line reading.

:::reveal A poll shows a candidate rising from 44 to 47 percent across two waves, with a margin of plus or minus 4 points. A commentator calls it momentum. What is the more honest reading? ||| That the poll cannot distinguish those two numbers. A three-point move inside a four-point margin is entirely consistent with nothing having changed. Momentum requires either a much larger move or the same direction of movement across many independent polls.

## What good pollsters publish

A pollster working to professional standards will tell you the field dates, the population sampled, how people were contacted, the sample size, the margin, how the data were weighted, and the exact question wording. The American Association for Public Opinion Research maintains standards for exactly this disclosure.

When those details are absent, the number is not checkable, and an uncheckable poll is a press release.

## Sources

American Association for Public Opinion Research. (n.d.). *Standard definitions and transparency initiative*. https://aapor.org/standards-and-ethics/

Pew Research Center. (n.d.). *U.S. survey methodology*. https://www.pewresearch.org/methods/`,
    },
    {
      slug: "who-is-not-in-the-sample",
      title: "10 · Who is not in the sample",
      section: "Section 3 · Polls",
      recallContent: [
        {
          prompt: "A margin of error covers one source of uncertainty. Which one, and name two it does not cover.",
          answer: "It covers random sampling error only. It does not cover question wording, who could be reached, who chose to answer, or likely-voter modeling.",
        },
      ],
      body: `This catalog asks one question of every archive it touches: *whose voice is missing from this record, and why?* A survey is an archive built on purpose, and the question works identically.

Three distinct ways people go missing:

**Coverage error.** Your method cannot reach them at all. A landline-only survey cannot reach a household without a landline. Anyone who has never been on the frame was never at risk of being sampled.

**Nonresponse.** You reached them and they declined. This matters only if the people who decline differ from the people who answer, and they usually do. Response rates for telephone polls have fallen dramatically over recent decades, which makes this a bigger question than it was when the classic methods were developed.

**Screening.** You reached them, they answered, and you decided not to count them. Likely-voter models do this deliberately: a pollster predicts who will actually vote and weights accordingly. Two honest pollsters with the same raw data can publish different results purely from this step.

## Weighting, and what it can and cannot fix

Pollsters correct known imbalances by weighting: if a sample has too few young respondents relative to the population, young respondents count for more.

Weighting fixes **what you can measure and know the true value of**, such as age, region, education, and race. It cannot fix a difference along a dimension you did not measure. If the people who decline to answer differ in political attitude in a way not captured by any demographic you weight on, weighting reproduces the problem while making the sample look correct on paper.

That is the honest core of the difficulty, and it is why polling error is not simply a matter of larger samples.

## Reading polling misses fairly

After polls miss, two bad readings compete: "polls are broken and meaningless," and "nothing to see here." Both are lazy.

The professional bodies investigate publicly. AAPOR convened task forces to examine the 2016 and 2020 U.S. pre-election polls and published its findings, including where the causes could and could not be identified. Read the actual reports rather than the commentary about them, and note carefully which conclusions the investigators stated confidently and which they left open. That distinction is the most useful thing in the documents.

:::reveal A pollster weights their sample so it matches the population on age, race, region and education, and the poll still misses badly. What does that rule out, and what does it leave open? ||| It rules out the miss being caused by imbalance on those four measured characteristics. It leaves open that the people who declined to answer differed on something not measured, including political attitude itself. Weighting can only correct dimensions you both measured and know the true population value for.

## Sources

American Association for Public Opinion Research. (2021). *Task force report: 2020 pre-election polling*. https://aapor.org/

Pew Research Center. (n.d.). *Why survey response rates matter*. https://www.pewresearch.org/methods/`,
    },
    {
      slug: "correlation-and-causation",
      title: "11 · Correlation and causation",
      section: "Section 3 · Polls",
      recallContent: [
        {
          prompt: "Weighting a survey fixes imbalance on measured characteristics. What can it never fix?",
          answer: "A difference along a dimension nobody measured. Weighting then hides the problem while making the sample look correct on paper.",
        },
      ],
      body: `Two things move together. Four explanations compete, and only one of them is the exciting one.

**1. A causes B.** The interesting case, and the rarest to establish from observation alone.

**2. B causes A.** Reverse causation. Police numbers correlate with crime rates, and cities hire more police because crime rose, not only the other way around. Both directions can operate at once, which makes the tangle worse rather than better.

**3. Something else causes both.** A confounder. Ice cream sales correlate with drowning deaths, and neither causes the other: hot weather drives both. The example is a cliché because it is unusually clean, and real confounders are rarely so obliging.

**4. Coincidence.** With enough variables compared, some will move together for no reason at all. This is not a remote possibility; it is a mathematical certainty once you compare enough pairs.

## The civic version

Suppose districts with more of some public program show better outcomes on some measure. Before concluding the program works, ask:

- Did the program go to places that were **already** doing better, or already doing worse? Programmes are rarely assigned at random, and how they were assigned usually explains a lot.
- Did the same places also change something else at the same time?
- Is the measured outcome the thing you care about, or a proxy that could move independently of it?

This is the same discipline the catalog's research course applies to historical claims, pointed at a different kind of evidence.

## What actually establishes causation

- **Randomised assignment**, where practical and ethical, because randomising breaks the link between who gets the treatment and what they were like beforehand.
- **A natural experiment**, where something outside the system assigned the treatment in a way unrelated to the outcome.
- **A mechanism**, checked independently, that explains how A would produce B.
- **Repetition** in different places with different confounders present.

None of these is available from a single correlation, and no amount of statistical adjustment substitutes for them.

:::reveal A study finds that people who take a particular supplement live longer than those who do not. What is the most likely confounder, before anything about the supplement is considered? ||| The kind of person who takes supplements. People who buy and consistently take a daily supplement tend to differ in income, healthcare access, diet and exercise. Any of those could produce the survival difference on its own, and none of them is the pill.

## Sources

Pearl, J., & Mackenzie, D. (2018). *The book of why: The new science of cause and effect*. Basic Books.

National Institutes of Health. (n.d.). *Understanding clinical studies*. https://www.nih.gov/health-information/nih-clinical-research-trials-you`,
    },
    {
      slug: "check-sections-2-3",
      title: "12 · Knowledge check: what is hidden, and what polls can say",
      section: "Section 3 · Polls",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A poll has one candidate at 47 percent and another at 44 percent, with a margin of error of plus or minus 3 points. What is the most defensible reading?",
            options: [
              "The poll cannot clearly distinguish the two candidates, because uncertainty in the difference exceeds the margin on either figure",
              "The first candidate leads, because the three-point gap exactly equals the stated margin of error",
              "The poll is invalid, because a result inside the margin of error cannot be reported",
              "The first candidate leads by between zero and six points, which is the full range the margin permits",
            ],
            correctIndex: 0,
            explanation:
              "The margin applies to each estimate separately, and the uncertainty in the difference between two estimates is larger than the uncertainty in either. A useful rough rule is to treat numbers within roughly twice the margin as not clearly distinguished.",
            sourceLessonSlug: "what-a-margin-of-error-covers",
          },
          {
            prompt: "A pollster weights their sample to match the population on age, race, region and education, and the poll still misses by a wide margin. What does that result rule out?",
            options: [
              "That the miss was caused by the sample being unbalanced on those four measured characteristics",
              "That the miss was caused by respondents changing their minds after being surveyed",
              "That the miss was caused by the sample being too small for the population surveyed",
              "That the miss was caused by an error in tabulating the responses after collection",
            ],
            correctIndex: 0,
            explanation:
              "Weighting corrects imbalance on the dimensions you measured and know population values for, so those are ruled out. It leaves open that nonrespondents differed on something unmeasured, including political attitude itself.",
            sourceLessonSlug: "who-is-not-in-the-sample",
          },
          {
            prompt: "Neighbourhoods that received a new city programme show better outcomes than those that did not. Before crediting the programme, what is the first thing to establish?",
            options: [
              "How neighborhoods were selected for the program, since selection rarely happens at random",
              "Whether the outcome difference is large enough to be visible on a chart of both groups",
              "Whether the program was funded from local or federal sources during the study period",
              "Whether residents in both groups were aware that the program was being evaluated",
            ],
            correctIndex: 0,
            explanation:
              "Programmes are almost never assigned at random. If they went to places already improving, or already struggling, the assignment rule explains part or all of the gap. How the treatment was assigned is the question that has to be answered first.",
            sourceLessonSlug: "correlation-and-causation",
          },
          {
            prompt: "A report gives the mean of a variable and nothing else. Which single follow-up request recovers the most of what the mean discarded?",
            options: [
              "The shape of the distribution, including the median and a measure of spread",
              "The exact date the underlying measurements were collected in the field",
              "The number of decimal places used when the mean was originally calculated",
              "The name of the software package used to compute the summary figure",
            ],
            correctIndex: 0,
            explanation:
              "A mean is a compression, and shape and spread are what it threw away. A source that can describe its own distribution has looked at its data; a source that cannot has computed one number and stopped.",
            sourceLessonSlug: "spread-and-outliers",
          },
          {
            prompt: "Which of these is a projection rather than a measurement?",
            options: [
              "A model's figure for how many residents a county will have in fifteen years",
              "A count of births registered in a county during the previous calendar year",
              "A survey estimate of how many county residents rent rather than own",
              "An administrative tally of building permits issued by the county last quarter",
            ],
            correctIndex: 0,
            explanation:
              "A projection extends a model into the future and is an argument about what will happen, not a measurement of what did. The other three are all measurements, though each carries its own limits: a survey estimate has sampling error, and an administrative tally only sees what the system recorded.",
            sourceLessonSlug: "where-the-number-came-from",
          },
        ],
      },
    },
    // ── Section 4 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "charts-that-lie",
      title: "13 · Charts that lie",
      section: "Section 4 · Pictures and power",
      body: `A chart is an argument with the persuasion built into the geometry. Six moves account for most of the damage.

**The truncated axis.** A vertical axis that starts partway up turns a small change into a cliff. Sometimes this is legitimate: for a variable that never goes near zero, a zero baseline wastes the whole chart. The test is whether the truncation is disclosed and whether the visual impression matches the size of the change.

**The dual axis.** Two series, two different vertical scales, one picture. The apparent relationship between the lines can be manufactured entirely by choosing the two scales, and a different pair of scales makes the same data tell the opposite story.

**Area used where length was meant.** A quantity doubles, so the illustrator doubles the width and height of a picture. The area is now four times larger, and area is what the eye reads.

**The chosen window.** Start the time series in a trough and every trend is a recovery. Start it at a peak and every trend is a decline. The data are unaltered.

**The choropleth trap.** A map shaded by raw counts is a population map. Shading by rate fixes it, but a map still gives large empty areas more visual weight than dense populated ones, because the eye reads square inches and not people.

**The missing baseline.** A percentage with no comparison group, a change with no prior period, a rate with no other rate beside it.

## The general test

Ask one question of any chart: **would a reasonable alternative choice have produced a noticeably different impression?**

If the answer is yes, the chart is making an argument through those choices, and you are entitled to know why they were made. That is not an accusation of bad faith. Every chart requires choices; the good ones can defend theirs.

:::reveal A chart shows two lines rising together over a decade on separate vertical axes, presented as evidence that one drives the other. What is the strongest objection? ||| That the visual relationship is manufactured by the choice of the two scales. Any two series that both trend upward can be made to appear to track each other closely by picking the axes to suit, and a different pair of scales would pull them apart. The chart shows that both rose, which is all it shows.

## Sources

Cairo, A. (2019). *How charts lie: Getting smarter about visual information*. W. W. Norton.

U.S. Census Bureau. (n.d.). *Guidance for mapping rates and counts*. https://www.census.gov/`,
    },
    {
      slug: "apportionment-the-math-of-representation",
      title: "14 · Apportionment: the math of representation",
      section: "Section 4 · Pictures and power",
      recallContent: [
        {
          prompt: "Why is a map shaded by raw counts usually just a population map?",
          answer: "Because bigger populations produce bigger counts of nearly everything. Shading by rate fixes that, though the eye still gives large empty areas more weight than dense ones.",
        },
      ],
      body: `The House of Representatives has 435 seats. States must receive whole seats, and state populations do not divide evenly into 435. Something has to give, and what gives is decided by a formula that Congress chooses.

That is the entire subject, and it is more consequential than it sounds: the choice of formula has changed which states gained and lost seats.

## Why there is no perfect method

Several properties all seem obviously required of a fair apportionment:

- A state's seat count should track its share of the population.
- No state should lose a seat because the total number of seats **increased**.
- No state should lose a seat because its population **grew** faster than another's.

Different methods satisfy different subsets of these, and mathematicians studying the problem, notably Balinski and Young, established that certain combinations of these desirable properties cannot all be satisfied at once. This is not a failure of cleverness. It is a property of the problem.

So "fair apportionment" is not a single well-defined target that a good enough formula would hit. It is a set of competing goods, and picking a method means deciding which of them to sacrifice.

## What the United States uses

Apportionment among the states currently uses the method of equal proportions, also called the Huntington-Hill method, adopted by Congress in the 1940s. The Census Bureau publishes the method and the resulting calculations after each decennial census.

Two things follow that are worth holding onto:

1. **The method is a statute, not a law of nature.** Congress chose it and could choose differently.
2. **The census count is the input.** Everything in lesson 8 about who gets undercounted feeds directly into this, which is why an undercount is a transfer of political power and not a clerical matter.

## The other apportionment

Seats are apportioned among states by formula. Districts are then drawn *within* states by state processes, which is a different problem with different rules, and it is the subject of the next lesson.

:::reveal Congress could change the apportionment formula by statute. Why is that fact worth knowing, if the current formula is a reasonable one? ||| Because it locates the decision in politics rather than in mathematics. If someone tells you the allocation of seats is simply what the math requires, that is not accurate: the math tells you what each method produces, and the choice among methods was and remains a legislative decision with winners and losers.

## Sources

U.S. Census Bureau. (n.d.). *Congressional apportionment: About the method of equal proportions*. https://www.census.gov/topics/public-sector/congressional-apportionment/about.html

Balinski, M. L., & Young, H. P. (2001). *Fair representation: Meeting the ideal of one man, one vote* (2nd ed.). Brookings Institution Press.`,
    },
    {
      slug: "redistricting-arithmetic",
      title: "15 · Redistricting arithmetic",
      section: "Section 4 · Pictures and power",
      recallContent: [
        {
          prompt: "Why can no apportionment formula be fair by every reasonable standard at once?",
          answer: "Because the desirable properties conflict. Balinski and Young showed certain combinations cannot all be satisfied together, so choosing a method means choosing what to sacrifice.",
        },
      ],
      body: `Once a state knows how many seats it has, someone draws the lines. Two techniques describe most of what a line-drawer can do to a group of voters:

**Packing.** Concentrate a group into as few districts as possible, so their votes pile up far beyond what winning requires. Enormous margins in a small number of districts.

**Cracking.** Split a group across many districts, so they are a minority in each and win none.

Both waste votes, in opposite ways: packing wastes votes cast for winners beyond the threshold needed, cracking wastes votes cast for losers.

## Measures, and their limits

Several numbers try to capture how skewed a map is.

**Compactness** measures how geometrically tidy a district is. It is easy to compute and a weak proxy, because a district can be compact and severely skewed, or sprawling for entirely legitimate reasons like following a river or keeping a community together.

**The efficiency gap**, proposed by Stephanopoulos and McGhee, compares wasted votes between parties and expresses the difference as a share of total votes. It is a genuine attempt to put a number on partisan skew.

Be careful how you hold this one. **The efficiency gap is a proposed academic measure, not an adopted legal standard.** It has been criticized on technical grounds, and courts have not made it a test.

## What the Supreme Court actually held

This matters because a learner could otherwise leave with a false picture of their own remedies.

- In *Gill v. Whitford* (2018), the Court did not adopt the efficiency gap or any other statewide partisan-symmetry standard. It resolved the case on standing, holding that the plaintiffs had not established the individual, district-specific injury required, and remanded.
- In *Rucho v. Common Cause* (2019), the Court held that claims of **partisan** gerrymandering present political questions beyond the reach of the **federal** courts.

Two consequences follow, and both are practical:

1. Federal courts are not the venue for a partisan-gerrymandering claim.
2. **Racial** gerrymandering claims are a separate matter and were not what *Rucho* addressed. State courts applying state constitutions, state redistricting commissions, and ballot initiatives all remain live avenues.

The number, in other words, did not become the law. It remains a useful analytical tool and a poor description of what a court will do.

:::reveal A map produces lopsided results for one party. Why is a low compactness score weak evidence that the map was drawn to do that? ||| Because compactness measures shape, not effect. A district can be geometrically tidy and severely skewed, and it can be sprawling for entirely innocent reasons: following a coastline, a river, or a county boundary, or keeping a community of interest together. Shape and partisan effect are different properties and only loosely related.

## Sources

*Gill v. Whitford*, 585 U.S. 48 (2018). https://www.supremecourt.gov/opinions/17pdf/16-1161_dc8f.pdf

*Rucho v. Common Cause*, 588 U.S. 684 (2019). https://www.supremecourt.gov/opinions/18pdf/18-422_9ol1.pdf

Stephanopoulos, N. O., & McGhee, E. M. (2015). Partisan gerrymandering and the efficiency gap. *University of Chicago Law Review, 82*(2), 831-900.`,
    },
    {
      slug: "capstone-take-a-number-apart",
      title: "16 · Capstone: take a number apart",
      section: "Section 4 · Pictures and power",
      lessonType: "assignment",
      body: `Find one real number, in public, that is being used to support an argument. A government press release, a campaign page, a news story, an advocacy report, a company announcement. It must be real and you must link it.

Then take it apart and write it up. Aim for roughly 400 to 800 words.

## What to submit

**1. The number, quoted exactly, with a link.** Quote the sentence it appeared in, not your summary of it.

**2. The four questions, answered or marked unanswerable.**
- What was counted? Name the actual quantity, not the topic.
- Who counted it, and did they publish a methodology?
- When does it describe?
- Compared to what?

An honest "the source does not say" is a real finding. Say which of the four are missing, because that absence is itself the result.

**3. The denominator.** What is on the bottom of any rate or share? Would another defensible denominator change the impression? If the figure is a raw count, say what it should be divided by to be meaningful.

**4. One thing the number hides.** Spread behind an average, a group excluded from a sample, a category definition doing quiet work, a window chosen to flatter.

**5. The honest version.** Rewrite the original sentence so that it claims exactly what the evidence supports, no more and no less. This is the hardest part and the point of the whole exercise. The honest version is usually less exciting and more useful.

**6. What would settle it.** Name the specific thing you would need: a methodology statement, the raw counts behind a percentage, the question wording, a comparison period. Be concrete enough that someone could go and get it.

## How this is assessed

Not on whether you found something scandalous. Most numbers in public are roughly fine, and correctly concluding "this holds up, and here is why" is a full-credit answer.

You are assessed on whether the four questions were actually run rather than gestured at, whether the denominator was identified, whether the honest rewrite is genuinely supported by the evidence you cite, and whether you distinguished what you checked from what you assumed.

One rule, and it is the same one the course teaches: **do not assert what you did not check.** If you could not find the methodology, write that you could not find it. Do not write a sentence that implies you read it.

## Sources

American Association for Public Opinion Research. (n.d.). *Standard definitions and transparency initiative*. https://aapor.org/standards-and-ethics/

U.S. Census Bureau. (n.d.). *Understanding and using American Community Survey data*. https://www.census.gov/programs-surveys/acs/library/handbooks.html`,
    },
  ],
};
