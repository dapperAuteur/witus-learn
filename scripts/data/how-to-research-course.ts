import type { AuthoredCourse } from "./authored-course";

// How to Research: Finding Out Whether It's True.
//
// Plan: plans/55-how-to-research-course.md. The spine is the Trusted Documentation Rubric already
// shipped in src/lib/field-log-rubric.ts: eight criteria, five pillars, and the instrument reviewers
// actually score against. The course teaches that instrument one criterion at a time, so the course
// and its assessment are the same object and cannot drift apart.
//
// TWO RULES THIS FILE FOLLOWS AND THE NEXT AUTHOR SHOULD NOT BREAK:
//
// 1. The capstone NEVER implies the learner has earned a credential. The rubric's credential needs
//    self-attestation plus at least two endorsements, so finishing a course cannot mint it. A course
//    that let a learner believe otherwise would be making exactly the unverified claim it spends
//    eleven lessons teaching them not to make. Lesson 13 says plainly what "in review" means.
// 2. Assessment is scenario multiple-choice and `:::reveal` self-checks, not typed fill-ins. Nearly
//    every judgement here has more than one defensible wording, and a string-equality grader would
//    be testing phrasing rather than thinking.

export const HOW_TO_RESEARCH_COURSE: AuthoredCourse = {
  title: "How to Research: Finding Out Whether It's True",
  description:
    "The discipline underneath every documentary, oral history, news piece and civic record: how to ask a question that can be answered, find sources worth trusting, corroborate what matters, and be honest in public about what you could not settle. Built on the Trusted Documentation Rubric this platform grades real work against.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "why-research-fails",
      title: "1 · Why careful people still get it wrong",
      section: "Section 1 · The problem, and the instrument",
      body: `Most bad research is not done by liars. It is done by people who were interested, worked hard, and never noticed the moment they stopped checking.

Three habits do most of the damage.

**Looking for confirmation instead of evidence.** You form a view early, and every search after that is shaped to find support for it. The tell is that you can remember what you found but not what would have changed your mind.

**Treating one source as settled.** A single account is a claim. It might be right. You do not yet know, and reporting it as though you do transfers your uncertainty to your reader without telling them.

**Mistaking repetition for corroboration.** Five results saying the same thing feels overwhelming. Then you follow the links and all five trace back to one wire story, one press release, or one confident post. That is one source wearing five coats.

There is a fourth failure, and it is the one this course cares about most, because it is invisible: **asserting what you merely believe.** Not inventing, not lying. Just writing the sentence without the hedge because the hedge felt awkward, and the reader has no way to tell which of your sentences were checked.

Everything in this course is aimed at that gap between what you know and what you wrote.

## What we are aiming at

You are not being asked to be certain. Certainty is rare and pretending to it is the failure. You are being asked to be **legible**: to make it possible for a reader to see which claims are sourced, which are corroborated, which are still open, and what you did about it.

That is a skill, it can be practised, and by the end of this course it will be scored against a real instrument used on real work.

:::reveal Somebody sends you five links that all say the same thing. What is the first question to ask? ||| Where did each one get it? If they all trace to one original, you have one source, not five.

:::reveal What is the difference between being uncertain and being unreliable? ||| An unreliable writer hides uncertainty. A reliable one states it, so the reader can weigh the claim properly.`,
    },
    {
      slug: "the-instrument",
      title: "2 · The instrument you will be scored against",
      section: "Section 1 · The problem, and the instrument",
      body: `Most research advice is a list of virtues. Be curious. Be sceptical. Be fair. True, and useless the moment you have to decide whether a specific paragraph is good enough to publish.

This course uses something narrower: the **Trusted Documentation Rubric**, the instrument reviewers on this platform actually score submitted work against. Eight criteria, grouped under five pillars.

| Criterion | Pillar | Bar |
|---|---|---|
| Focused question | Planning | Developing is acceptable |
| Sourced and corroborated | Seek truth | Must be Met |
| Verified and flagged | Seek truth | Must be Met |
| Consent and fair representation | Minimize harm | Must be Met, or genuinely not applicable |
| Cultural and linguistic fidelity | Seek truth, minimize harm | Must be Met, or genuinely not applicable |
| Transparent | Accountable | Must be Met |
| Disclosure of interests | Act independently | Must be Met |
| Craft for the medium | Craft | Developing is acceptable |

Read the bars carefully, because they encode a judgement worth understanding.

**Craft can be merely Developing. Sourcing cannot.** A rough, plain, unpolished piece of work whose claims are sourced and whose uncertainties are flagged will pass. A beautiful one that asserts things nobody checked will not. That ordering is deliberate: craft failures are visible to the reader, and sourcing failures are not.

**Two criteria allow "not applicable", and only two.** If your work has no identifiable people in it, consent genuinely does not apply. If it involves no other language or culture, fidelity does not apply. Nothing else can be waived, and "not applicable" is a claim you should be prepared to defend rather than a way out.

One criterion per lesson from here. By the end you will have met the instrument eight times and used it once on your own work.

## Why teach the rubric rather than a philosophy

Because you can fail a rubric, and failing is how you learn where your habits are weak. A philosophy you can agree with all day without changing anything you do.`,
      recallContent: [
        {
          prompt: "Which two rubric criteria may be scored 'not applicable', and when?",
          answer:
            "Consent and fair representation, when no identifiable people appear. Cultural and linguistic fidelity, when no other language or culture is involved. Nothing else can be waived.",
        },
        {
          prompt: "Why can craft be merely Developing while sourcing must be Met?",
          answer:
            "A reader can see craft problems for themselves. They cannot see that a claim was never checked, so the sourcing bar has to be higher.",
        },
      ],
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-focused-question",
      title: "3 · A question you could be wrong about",
      section: "Section 2 · Asking, and finding",
      body: `The first rubric criterion is a **focused question**, and it is first because everything downstream inherits its shape. A vague question cannot be answered, so it cannot be answered wrongly, so nothing you find can ever correct you.

Compare these.

- "The history of the river." That is a subject, not a question. There is no finding that would count as an answer.
- "Why did the town move away from the river after 1950?" Better. It can be answered, and it can be answered wrong.
- "Which decisions between 1948 and 1962 moved the town's main street three blocks east, and who made them?" Now you know what a source would have to say to settle it.

The test is not "is this interesting". The test is: **can I describe, right now, what evidence would prove me wrong?** If you cannot, keep narrowing.

## Narrowing without shrinking

Beginners fear that a narrow question is a small one. Usually the opposite happens. "Why did the town move" produces a paragraph of generalities. The three-blocks-east version produces council minutes, a highway plan, named people, and an argument. Specific questions attract specific evidence, and specific evidence is what makes writing worth reading.

## Where questions come from

Good ones usually come from a gap rather than a topic. Something you were told that does not fit something else you were told. A number everybody repeats and nobody sources. A date that is oddly precise. A person who appears in one account and vanishes from the next.

Write the question down before you start looking. Then, when you are deep in material and everything seems relevant, you have something to check your drift against.

:::reveal What single test tells you a question is focused enough? ||| You can say what evidence would prove you wrong. If nothing could, it is a topic and not yet a question.

:::reveal Why does a narrower question usually produce a bigger piece of work? ||| Specific questions attract specific evidence: records, names, dates and disagreements. Broad questions attract generalities.`,
    },
    {
      slug: "what-a-source-is",
      title: "4 · What a source actually is",
      section: "Section 2 · Asking, and finding",
      body: `A source is not "a place I read it". It is a thing that has a relationship to the fact.

**Primary** means the record was made by someone with direct access, at the time, as part of the event itself. A statute. A court filing. A census return. A ship's manifest. A letter. An interview with a participant. A dataset published by the agency that collected it.

**Secondary** means someone read primary material and wrote about it. A history book. A journal article. A news report.

**Tertiary** means someone read secondary material and summarised it. An encyclopedia entry. A syllabus. Most of what a search engine puts at the top.

None of these is disgraceful. Secondary work is where you learn what questions have already been asked, and skipping it wastes months. But the rule is:

**A claim that matters gets traced back to primary material, or it gets marked as unverified.**

## The habit that separates people who find things

When a secondary source states a fact, look for its citation and follow it. Do this four or five times and you will discover something uncomfortable: a surprising share of confident claims trace back to nothing, or to a source that says something slightly different, or to a source that says the opposite and was misread once in 1974 and copied ever since.

That experience does more for your judgement than any amount of advice.

## Values owned by somebody else

There is a category of fact you must never reason your way to: values owned by an external system. A price. A statute's current text. An agency's requirement. A company's terms. A model number.

For these, there is exactly one acceptable move: **read it from the system that owns it, and record the date you read it.** Not what it was last year, not what it probably is, not what a summary says it is. These change without announcement, and a confident wrong number is worse than an admitted gap.

:::reveal A news article states a striking statistic with no citation. What do you do? ||| Treat it as an unverified claim and go looking for whoever produced the number. If you cannot find them, say so rather than repeating it.

:::reveal Why is a price or a legal requirement handled differently from a historical fact? ||| It is owned by an external system and changes without notice, so it must be read from that system and dated, never inferred.`,
      recallContent: [
        {
          prompt: "Define primary, secondary and tertiary sources in one line each.",
          answer:
            "Primary: made by someone with direct access at the time. Secondary: written by someone who read primary material. Tertiary: a summary of secondary material.",
        },
        {
          prompt: "What is the one acceptable way to establish a value owned by an external system?",
          answer: "Read it from that system and record the date you read it.",
        },
      ],
    },
    {
      slug: "quiz-asking-and-finding",
      title: "5 · Knowledge check: asking and finding",
      section: "Section 2 · Asking, and finding",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which of these is a focused research question?",
            options: [
              "The economic history of river towns in the Midwest",
              "Which council decisions between 1948 and 1962 relocated the town's main street, and who made them",
              "Everything worth knowing about how towns and rivers interact",
              "Whether rivers were important to the development of towns",
            ],
            correctIndex: 1,
            explanation:
              "It names a period, an outcome and the kind of actor involved, so you can say what evidence would settle it. The others describe subjects, and no finding would count as answering them.",
            sourceLessonSlug: "the-focused-question",
          },
          {
            prompt:
              "You find four articles making the same claim. Following their links, all four cite the same press release. How many sources do you have?",
            options: [
              "Four, because four outlets published it independently",
              "One, because every article traces back to a single origin",
              "Two, counting the press release and the earliest article",
              "Three, since one of the four added its own analysis",
            ],
            correctIndex: 1,
            explanation:
              "Corroboration requires independence. Four outlets repeating one press release is one source reprinted four times, and the apparent weight of numbers is an illusion.",
            sourceLessonSlug: "why-research-fails",
          },
          {
            prompt: "A census return recording a household in 1880 is which kind of source?",
            options: [
              "Primary, because it was created at the time as part of the event itself",
              "Secondary, because a government official wrote it rather than the household",
              "Tertiary, because it summarises the population of a whole district",
              "It depends entirely on whether a historian has already cited it",
            ],
            correctIndex: 0,
            explanation:
              "It was made contemporaneously by someone with direct access, which is what makes a record primary. Who physically wrote it, and whether anyone has cited it since, do not change its category.",
            sourceLessonSlug: "what-a-source-is",
          },
          {
            prompt:
              "You need the current fee a state charges for a licence. What is the correct way to establish it?",
            options: [
              "Use the figure given in a recent, well-edited news article about the licence",
              "Read it from the issuing agency's own published schedule and record the date you read it",
              "Average the figures given by the three most authoritative sources you can find",
              "Use last year's published figure and note that fees generally rise",
            ],
            correctIndex: 1,
            explanation:
              "The agency owns the value, so only the agency can state it, and it can change without notice. Recording the date is what lets a later reader judge whether it is still current.",
            sourceLessonSlug: "what-a-source-is",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "sourced-and-corroborated",
      title: "6 · Sourced, and corroborated",
      section: "Section 3 · Seeking truth",
      body: `This is the second rubric criterion and one of the ones that must be **Met**. It has two halves, and people routinely do the first while believing they have done both.

**Sourced** means every central claim ties to something a reader could go and check. Not "I read this somewhere". A named, findable thing.

**Corroborated** means the important claims are supported by more than one **independent** source.

## What independence actually means

Two sources are independent when neither got it from the other, and neither got it from a common third place. That is a higher bar than it sounds, and checking it is mostly mechanical: follow each source's own citation, and see where they land.

Watch for these:

- **The syndication chain.** Many outlets, one wire service.
- **The press-release echo.** Many articles, one organisation's announcement.
- **The single expert.** Many quotes, one person, in some cases repeating something they read.
- **The circular citation.** A cites B, B cites C, C cites A. This happens more than seems possible.

## Which claims need corroboration

Not all of them, and pretending otherwise leads to work nobody finishes. Corroborate the claims that are **load-bearing**: the ones your conclusion rests on, the ones that would change a reader's mind, the ones about a named person, and any number you are asking anyone to act on.

Colour and context can rest on a single decent source, as long as you have not dressed it up as more than it is.

## What to do when corroboration is not available

Sometimes there is one record and there will never be another. That is a normal condition of real research, not a failure. The correct move is not to drop the claim, and not to assert it as settled. It is to say what you have: one source, what kind of source it is, and what would confirm it.

That sentence costs you nothing and buys the reader everything.

:::reveal What makes two sources independent? ||| Neither took the claim from the other, and neither took it from a common third source. Following each one's citations is how you check.

:::reveal Which claims must be corroborated? ||| The load-bearing ones: what your conclusion rests on, anything about a named person, and any number you are asking someone to act on.`,
    },
    {
      slug: "verified-and-flagged",
      title: "7 · Verified, and flagged",
      section: "Section 3 · Seeking truth",
      body: `The third criterion, also a **Met** bar, and the one this platform is most opinionated about. It has an easy half and a hard half.

The easy half is **verification**. Does the quote say what you say it says, in context. Does the photograph show what the caption claims, taken where and when it claims. Does the number in your sentence match the number in the table. Does the date survive a calendar check. Does the person hold the title you gave them, still, today.

Most verification is not clever. It is looking again, slowly, at the thing you already have.

The hard half is **flagging**, and almost nobody does it well, because it feels like admitting weakness in public.

## Flagging is a promise, not an apology

To flag is to tell the reader precisely where the floor gets thin. "One source reports X; we could not confirm it." "The figure is widely repeated but we could not find its origin." "The family's account and the official record disagree about the date, and both are given here."

Writers resist this because it looks like they failed. It is the opposite. **An unflagged uncertainty is a lie of confidence**, and it is undetectable, which is precisely what makes it serious.

## The practice that makes flagging real

A flag that lives only in a sentence is a flag nobody will ever clear. It ships, and it stays there forever, because there is no list, nothing records whether anyone looked, and the next person to touch the piece assumes it was already checked.

This platform's answer is a committed, public list of open questions: what the work currently claims, what is not established, what would settle it, and where to look. When one gets answered, the text changes and the entry is deleted. The list shrinking is the measure of progress.

You do not need this platform's version. You need **a version**: a file, a page, a document, anything durable and separate from the prose. The rule is what matters.

**A hedge with no check attached is a hedge nobody will ever clear.**

:::reveal Why is an unflagged uncertainty worse than a visible mistake? ||| A visible mistake can be caught and corrected by a reader. An unflagged uncertainty is invisible, so it never gets caught at all.

:::reveal What has to exist for a flag to be more than a phrase? ||| A durable list, separate from the prose, saying what is unresolved and what would settle it, with entries deleted as they are answered.`,
      recallContent: [
        {
          prompt: "Name three things worth re-checking during verification.",
          answer:
            "Whether a quote says what you claim in context, whether an image shows what the caption says, and whether the number in your sentence matches the number in the source.",
        },
        {
          prompt: "State the rule about hedges.",
          answer: "A hedge with no check attached is a hedge nobody will ever clear.",
        },
      ],
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "consent-and-representation",
      title: "8 · Consent, and representing people fairly",
      section: "Section 4 · Minimizing harm",
      body: `The fourth criterion. It must be **Met** unless your work genuinely contains no identifiable people.

## Consent is informed, specific, and revocable in practice

Informed means they understood what they were agreeing to: what it is for, where it will appear, who will see it, and that it may persist. "Can I record this" is not informed consent. "Can I record this for a course that will be published online and may be paid for" is.

Specific means consent to one use is not consent to all uses. Agreeing to an interview for a written piece is not agreement to appear in a film.

And in practice, people change their minds. You are not always legally obliged to honour that. You should decide, in advance and in writing, what you will do when it happens, because deciding in the moment favours whoever wants the material most.

**Log it.** Who, when, what for, in what form. A consent you cannot evidence is one you will eventually be asked to prove and cannot.

## A refusal ends it

If someone declines, that is the end. Not a negotiation, not a softer version, not "we will use it without naming you" unless that is exactly what they agreed to. This sounds obvious and is broken constantly, usually by someone who has convinced themselves the story matters more than the person in it.

## Fair representation

Consent covers whether you may use someone's words. Fairness covers whether what you made would be **recognisable to them**.

A useful test: if this person read your piece, would they say "that is not what I meant" or "that is not what I am like"? You are not obliged to flatter anyone, and unflattering true things are part of honest work. But there is a large difference between an unwelcome truth and a portrayal built by selection: the one quote out of two hours, the photograph taken mid-blink, the anecdote with its context removed.

## People who cannot consent for themselves

Minors need a guardian's consent as well as their own agreement. People in a dependent relationship with you, in crisis, or in custody are in a position where "no" is expensive, which means a "yes" carries less weight and you should require more of yourself, not less.

:::reveal Someone consents to an interview for an article, and later you want it in a film. What do you need? ||| Fresh consent. Consent is specific to a use, and a new medium and a new audience is a new use.

:::reveal What is the difference between an unflattering portrayal and an unfair one? ||| An unflattering one shows something true the subject would rather not see. An unfair one is built by selection, so the subject would not recognise themselves in it.`,
    },
    {
      slug: "cultural-and-linguistic-fidelity",
      title: "9 · Getting other people's words and worlds right",
      section: "Section 4 · Minimizing harm",
      body: `The fifth criterion, a **Met** bar, and the one people are most likely to fail while being careful, polite and well intentioned.

## Translation

A translation is a claim. "She said X" asserts that X is what she said, and if your translation is loose, you have put words in a real person's mouth in public.

The rule is straightforward: **a translation that carries meaning gets checked by someone fluent, ideally a native speaker of the variety actually spoken.** Not a machine alone. Machine translation is a fine first pass and a poor final one, especially with idiom, register, humour, and anything said obliquely on purpose.

When you cannot get a check, say so. "Translated by the author; not independently checked" is a normal, honourable sentence.

## Framing

Fidelity is not only about words. It is about whether a community's story is told in terms that community would recognise.

The common failure is not hostility. It is **explaining a group's practice using a framework from outside it**, applied so naturally that you never notice you chose it. A ceremony described purely as economics. A belief described purely as psychology. A survival strategy described as a quirk. Every one of those may contain something true, and every one can produce an account that is accurate in its parts and wrong as a whole.

The failure mode to watch for is a piece of work that is **technically accurate and unrecognisable to the people in it.**

## What to actually do

- Ask people how they describe the thing, and use their words where you reasonably can.
- Name your framework instead of hiding it. "Read as an economic exchange, this looks like…" is honest. Silently doing it is not.
- Get a read from someone inside before you publish, and take a "that is not how we would put it" seriously.
- Where accounts differ, say they differ. You do not have to adjudicate everything.

:::reveal When is a machine translation acceptable as a final translation? ||| When nothing depends on the meaning. If it carries meaning, especially a quote from a real person, it needs a fluent human check or an explicit note that it did not get one.

:::reveal Describe the failure mode this criterion exists to catch. ||| Work that is accurate in its individual facts but frames a community's life in outside terms, so the people in it would not recognise themselves.`,
      recallContent: [
        {
          prompt: "What must accompany a translation you could not get checked?",
          answer:
            "A plain note that it was not independently checked, so the reader can weigh the quote accordingly.",
        },
      ],
    },
    {
      slug: "quiz-truth-and-harm",
      title: "10 · Knowledge check: truth and harm",
      section: "Section 4 · Minimizing harm",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt:
              "Your central claim rests on a single archival record, and no second record exists. What does the rubric expect?",
            options: [
              "Drop the claim, since a single source can never support a conclusion",
              "State the claim, name the single source, and say plainly what would confirm it",
              "Present it as established, since an archival record is primary evidence",
              "Find a secondary source that repeats it and cite that as corroboration",
            ],
            correctIndex: 1,
            explanation:
              "Single-source claims are a normal condition of real research. What the rubric requires is that the reader can see it is single-sourced and knows what would settle it. Citing a repetition would manufacture false corroboration.",
            sourceLessonSlug: "sourced-and-corroborated",
          },
          {
            prompt:
              "A person you interviewed for a written article asks, before publication, that you not use their interview. What is the right response?",
            options: [
              "Honour it and do not publish the interview",
              "Publish it without their name, since anonymity resolves the concern",
              "Publish it, because they consented at the time it was recorded",
              "Publish the parts that are already corroborated by other sources",
            ],
            correctIndex: 0,
            explanation:
              "A refusal ends the matter. Anonymising, or keeping the corroborated parts, are both ways of using material the person asked you not to use, and neither is what they agreed to.",
            sourceLessonSlug: "consent-and-representation",
          },
          {
            prompt:
              "Which situation most clearly fails the cultural and linguistic fidelity criterion?",
            options: [
              "A piece that quotes a community's own description of a practice alongside an outside analysis",
              "A piece that notes its translation was not independently checked",
              "A piece whose facts are all correct but which explains a ceremony purely as an economic transaction, without saying so",
              "A piece that reports two community accounts disagreeing without deciding between them",
            ],
            correctIndex: 2,
            explanation:
              "Accurate in its parts and unrecognisable as a whole is exactly the failure this criterion catches, and the unstated framework is what makes it invisible. Naming a framework, flagging an unchecked translation and reporting disagreement are all honest moves.",
            sourceLessonSlug: "cultural-and-linguistic-fidelity",
          },
          {
            prompt:
              "You write 'reportedly' into a sentence because you could not confirm a claim. What else does the course require?",
            options: [
              "Nothing further, since the hedge already signals the uncertainty to readers",
              "A note in your own working files so you remember it later",
              "An entry on a durable list saying what is unresolved and what would settle it",
              "A second hedge later in the piece so the doubt is unmistakable",
            ],
            correctIndex: 2,
            explanation:
              "A hedge with no check attached is one nobody will ever clear: it ships and stays forever because nothing records that it is open. Private notes and extra hedges do not create the durable, separate record that gets the question answered.",
            sourceLessonSlug: "verified-and-flagged",
          },
        ],
      },
    },

    // ── Section 5 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "transparent",
      title: "11 · Showing your work, and correcting it",
      section: "Section 5 · Being accountable",
      body: `The sixth criterion, a **Met** bar, and the most mechanical one in the rubric. It is also the one that makes every other criterion checkable by somebody else.

## The bibliography is the deliverable

Every substantive claim carries an in-line citation, and the work ends with a full list of sources. On this platform that is APA 7, in-line plus a \`## Sources\` section, but the format matters far less than the property it creates: **a reader can go and look.**

Two practical points people get wrong.

**Cite what you actually used.** Not the canonical work you ought to have read. If you used a summary, cite the summary. Inflating a bibliography is a small dishonesty that quietly misrepresents how well established your claims are.

**Include the date you accessed anything that can change.** Web pages, agency schedules, statutes, prices. Without a date, a reader who finds something different cannot tell whether you were wrong or the world moved.

## Corrections are a practice, not an embarrassment

You will publish something wrong. Everyone who publishes enough does.

The reflexes to resist are the quiet fix and the silent deletion. Both leave a reader who saw the original with no way to know it changed, and both destroy the record of what was claimed.

A correction that works has three parts: **what was wrong, what is right, and when it changed.** That is all. No lengthy apology, no defensiveness, no explanation of how understandable the error was.

Doing this consistently has an effect that surprises people: it makes the rest of your work more credible, not less. A body of work with visible corrections is one where errors get found. A body of work with none is either perfect or unexamined, and readers can tell which is likelier.

:::reveal What three things does a good correction contain? ||| What was wrong, what is right, and when it changed.

:::reveal Why cite the summary you actually read rather than the original work it summarises? ||| Because citing what you did not read misrepresents how well established the claim is, and sends the reader somewhere your understanding did not come from.`,
    },
    {
      slug: "disclosure-of-interests",
      title: "12 · Saying what you stand to gain",
      section: "Section 5 · Being accountable",
      body: `The seventh criterion, a **Met** bar, and the shortest to state: **tell the reader anything that could reasonably be thought to bias the work.**

Funding. Employment. A relationship with someone in the piece. A financial stake in an outcome. A product you own. A gift, a free trip, a review unit you kept.

## The test is not whether you were influenced

That is the mistake almost everyone makes. "It did not affect my judgement" may be entirely true and is not the question.

The question is whether **a reasonable reader would want to know**. Disclosure exists so they can weigh the work themselves rather than trusting your self-assessment of your own objectivity, which is the one assessment you are least able to make.

## A worked example from this platform

The Imaging and Drone Services course on this platform teaches WanderLearn as its primary tour-publishing tool. WanderLearn is owned by the same person who owns this platform.

That course is required to say so, in the lesson, at the point of recommendation. Not in a footer. Not in a terms page. In the lesson where the recommendation is made, where a learner deciding what tool to buy will actually see it. And the comparison section is written to be genuinely useful to someone who picks a competitor.

Using our own conflict as the teaching example is deliberate. It is easy to teach disclosure with somebody else's conflict.

## How to disclose

Plainly, early, and in the same place as the claim it affects. One or two sentences. No performance of agonised soul-searching, which reads as a bid for credit rather than information.

"This work was funded by X." "The author previously worked for Y." "The platform recommending this tool also owns it."

Then get on with the work.

:::reveal What is the test for whether something needs disclosing? ||| Whether a reasonable reader would want to know, not whether you believe it influenced you.

:::reveal Where does a disclosure belong? ||| With the claim it affects, where the reader will actually encounter it, not buried in a footer or a separate policy page.`,
      recallContent: [
        {
          prompt: "Why is 'it did not affect my judgement' not a reason to skip disclosure?",
          answer:
            "Disclosure exists so the reader can weigh the work themselves. Your own objectivity is the thing you are least able to assess.",
        },
      ],
    },

    // ── Section 6 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "craft-and-choosing-the-medium",
      title: "13 · Craft, and choosing the right form",
      section: "Section 6 · Craft, AI, and your own work",
      body: `The eighth criterion is **craft for the medium**, and its bar is only Developing, which tells you where it sits in the ordering: competence matters, but not more than truth.

The more useful question is upstream of craft. **Which form should this be at all?**

Most people never choose. They make the thing they always make.

## What each form is for

**Writing** carries argument and evidence better than anything else. Complexity, qualification, citation, a claim that needs three conditions attached: prose handles all of it. Choose it when the thinking is the point.

**Audio** carries voice, and voice carries what a transcript loses: hesitation, warmth, the pause before a hard answer. Choose it when how something was said matters as much as what was said.

**Photography** carries the specific and the physical. A condition, a place, a face, a scale you cannot convey in a sentence.

**Film** carries process and time. Something unfolding, something changing, something a person does rather than describes.

**Records and archives** carry proof. They persuade nobody on their own and settle arguments permanently.

If you want to go deeper into any of these, this platform has courses on each: documentary, oral history, news storytelling, and civic documentation. This lesson is the hub; those are the depth.

## The one question to ask

**What does this story do that a written version could not?** If you cannot answer, write it. Prose is cheaper, faster, easier to correct and easier to cite, and choosing a richer medium without a reason usually costs you rigour without buying anything.

Choosing wrong is not a craft failure. It is a planning failure that shows up as a craft failure, which is why it is worth deciding on purpose.

:::reveal What question decides whether a story needs a medium richer than prose? ||| What does this do that a written version could not? If there is no answer, write it.

:::reveal Why does the rubric let craft sit at Developing when sourcing must be Met? ||| Craft failures are visible to the reader and sourcing failures are not, so the invisible one carries the higher bar.`,
    },
    {
      slug: "researching-with-ai",
      title: "14 · Researching with AI without laundering its mistakes",
      section: "Section 6 · Craft, AI, and your own work",
      body: `An AI assistant is genuinely useful for research and introduces one specific danger, which is not the one people usually name.

The danger is not that it invents things. It does, and you will learn to expect that. The danger is **laundering**: a claim enters your work with no source, gets written in your confident voice, and by the time you review the draft you cannot remember whether you checked it or the machine simply said it.

The claim has been washed clean of its origin. That is a sourcing failure with no fingerprints, and it will pass a casual read.

## What these tools are good at

Genuinely good: orienting you in an unfamiliar field, generating candidate questions, suggesting what kind of record might exist, summarising something you already have, and criticising your draft's reasoning.

Notice what those have in common. **None of them is "tell me a fact I will publish."**

## The rule

**Nothing an AI told you enters your work as a claim until you have verified it against a source you can cite.**

Not "it sounded right". Not "it gave a very specific citation", which is exactly what a fabricated citation looks like. Verified: you found the source, it exists, and it says what you were told it says.

Two habits make this practical.

**Keep AI output in a separate place from your draft.** The laundering happens at the moment of copy and paste, when unverified text acquires the authority of your own prose. If it lives in a different file until it is checked, that moment does not arrive by accident.

**Check every citation it hands you.** Fabricated references are frequently plausible: real journal, real author, real-sounding title, wrong or nonexistent article. A citation you did not open is not a citation.

## Disclosure

If AI did substantial work in your research or drafting, say so. It falls under the same test as any other interest: a reasonable reader would want to know.

:::reveal What is 'laundering' in this context? ||| An unverified claim entering your work with no source and acquiring the authority of your own voice, so nobody can tell it was never checked.

:::reveal Why is a specific, plausible citation from an AI not reassuring? ||| Fabricated citations are usually plausible by construction. A citation you have not opened tells you nothing.`,
      recallContent: [
        {
          prompt: "State the rule for AI-supplied claims.",
          answer:
            "Nothing an AI told you enters your work as a claim until you have verified it against a source you can cite.",
        },
        {
          prompt: "What are AI tools genuinely good at in research?",
          answer:
            "Orienting you in an unfamiliar field, generating candidate questions, suggesting what records might exist, summarising material you already have, and criticising your reasoning.",
        },
      ],
    },
    {
      slug: "capstone-and-what-happens-next",
      title: "15 · Capstone, and what happens next",
      section: "Section 6 · Craft, AI, and your own work",
      body: `Time to use the instrument on your own work.

## The brief

Pick a real question you can answer with what you can reach: a local decision, a family account you have never checked, a claim in your field everyone repeats, a place that changed. Small is good. Answerable is essential.

Produce a short piece of work, in whatever medium you chose in lesson 13, that satisfies all eight criteria:

1. **Focused question.** Stated at the top, narrow enough that you could be proved wrong.
2. **Sourced and corroborated.** Central claims cited; load-bearing ones supported by genuinely independent sources.
3. **Verified and flagged.** Quotes, numbers and dates re-checked. Every uncertainty stated in the text, and listed separately with what would settle it.
4. **Consent and fair representation.** For anyone identifiable: consent obtained, logged, and honoured. Or genuinely not applicable, and you can say why.
5. **Cultural and linguistic fidelity.** Translations checked or marked unchecked. Frameworks named. Or genuinely not applicable.
6. **Transparent.** In-line citations and a full source list, with access dates on anything that can change.
7. **Disclosure of interests.** Anything a reasonable reader would want to know, stated where it is relevant.
8. **Craft for the medium.** Competently made, and made in a form you chose on purpose.

Then score yourself against the rubric, honestly, before anyone else sees it. Where you scored yourself below the bar, write one line about why.

## What happens when you submit it

Read this part carefully, because it is the difference between what you have done and what you have earned.

Submitting the capstone places your project **in review**. That is a status, not a result. It means the work is complete enough to be looked at by other people.

**Finishing this course does not award you a credential.** The Trusted Documentation credential requires your own attestation **plus endorsement from at least two reviewers**, who read the work and score it against the same eight criteria you just used. They may score it below the bar. That outcome is normal, and the notes you get back are worth more than a pass.

We are explicit about this for a reason that should now be familiar. A course that let you believe finishing it had earned you something would be asserting a claim nobody verified, in the exact place it spent fourteen lessons telling you not to.

**The endorsement path, in order:**

1. You submit, and self-attest against the rubric.
2. The work enters review and becomes visible to reviewers.
3. Two or more reviewers score it independently.
4. Every "must be Met" criterion has to be Met or genuinely not applicable.
5. If it falls short, you get the scores and the notes, and you may revise and resubmit.

## The habit worth keeping

If you keep one thing, keep this: **write down what you do not know, where somebody else can see it.**

Everything else in this course is technique. That one is character, and it is the only part that keeps working when nobody is checking.

## Sources

American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7th ed.). American Psychological Association.

Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/ethicscode.asp

Oral History Association. (2018). *Principles and best practices for oral history*. https://oralhistory.org/principles-and-best-practices-revised-2018/

International Federation of Library Associations and Institutions. (2017). *How to spot fake news*. https://www.ifla.org/publications/node/11174

Note on this list: it is deliberately short and every entry was consulted directly. Per lesson 11, a bibliography states what the work actually used rather than what it might have.`,
    },
  ],
};
