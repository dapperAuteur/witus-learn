import type { AuthoredCourse } from "./authored-course";

// REPORT-07 · The Pitch, and the Shapes a Story Can Take (plans/68).
//
// The last course before the capstone. plans/68: "Pitching an enterprise project. Newsletter,
// social-first, short video, and choosing among them for a reason." The Free Press Indiana posting
// that prompted the track asks for social and video literacy alongside quick-turn dailies and
// enterprise projects, which is why the format lessons are here rather than treated as somebody
// else's specialism.
//
// This is a craft course and it says so: almost nothing in it is a factual claim about the world,
// which is why it carries fewer citations than the rest of the track rather than manufacturing
// them. Where it does make a claim about how audiences behave, it declines to print a figure, for
// the same reason REPORT-06 declined: quoting an engagement statistic this pass could not read
// against a primary would be the failure REPORT-02 teaches learners to catch.
export const REPORTER_PITCH_AND_SHAPES_COURSE: AuthoredCourse = {
  title: "Reporter 07: The Pitch, and the Shapes a Story Can Take",
  description:
    "How to pitch an enterprise project so an editor can say yes, and how to choose the form a story takes for a reason rather than a habit. The five parts of a pitch, what a refusal actually tells you, matching a shape to the question rather than to the material, and what a newsletter, a social-first piece, and a short video each demand that the others do not.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "what-a-pitch-is",
      title: "1 · What a pitch is for, and who reads it",
      section: "Section 1 · The pitch",
      body: `A pitch is not a summary of what you know. It is a proposal an editor has to be able to act on, which means it answers a different set of questions from the ones a story answers.

**What an editor is actually deciding.** Whether this is a story, whether you can get it, what it will cost in time and money, when it will land, and what it displaces. A pitch that describes a fascinating subject and answers none of those has given a reader something interesting and given a decision-maker nothing.

**The single most common failure.** Pitching a topic rather than a question. Rural maternity care is a subject; whether the closures the state approved in 2023 lengthened the drive to a delivery room, and by how much, is a pitch. The beat-memo lesson in REPORT-00 already drew this distinction, and it reappears here because a topic cannot be commissioned.

**The second most common failure.** Pitching a conclusion you have not reported yet. Editors say yes to a question you can answer and no to a finding you are hoping for, and the difference is visible in one sentence: a pitch that says what you will establish is a promise you may not be able to keep, while a pitch that says what you will find out is a plan.

**Who reads it.** Usually one editor, often quickly, sometimes on a phone. It may be forwarded to somebody who has not met you, quoted in a budget meeting, or read three weeks later by a person who has forgotten the conversation. Write it to survive all of that: short, specific, and self-contained.

**Length, honestly.** Two hundred to four hundred words for an internal enterprise pitch. A freelance pitch to an outlet you have not worked with is longer only because it has to establish that you can do it, and even then the first paragraph carries the decision.

**What a pitch is not.** It is not a first draft, not a memo about how hard the reporting will be, and not a request for permission to look into something. If you genuinely do not know whether there is a story, that is a different and shorter conversation: ask for a week to find out, say what would make you drop it, and come back.

:::reveal What five things is an editor actually deciding when they read a pitch? ||| Whether it is a story, whether you can get it, what it costs in time and money, when it lands, and what it displaces.

:::reveal What is the difference between pitching a question and pitching a conclusion? ||| A question you can answer is a plan an editor can commission. A finding you are hoping for is a promise you may not be able to keep.

:::reveal Why must a pitch be self-contained? ||| It may be forwarded to somebody who has not met you, quoted in a budget meeting, or read three weeks later by a person who has forgotten the conversation.

## Vocabulary
- **Pitch**: a proposal an editor can act on, answering feasibility, cost, timing, and displacement rather than summarizing what you know.
- **Topic versus question**: a subject cannot be commissioned; a specific answerable question can.
- **Promised finding**: a pitch that states what you will establish before you have reported it.
- **The look-into conversation**: the shorter request for a week to find out, with a stated condition for dropping it.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-enterprise-pitch",
      title: "2 · The enterprise pitch, in five parts",
      section: "Section 1 · The pitch",
      body: `A working shape that fits in four hundred words and answers everything an editor needs. Write it in this order even though it will not be read in this order.

**One: the question, in one sentence.** Specific enough that somebody could tell you whether you had answered it. If you cannot get it into a sentence, you do not yet have a pitch, and the sentence is also the thing that gets quoted in the meeting you are not in.

**Two: why now, and why us.** Something has changed, a document exists, a deadline is approaching, or nobody else can do it because of the beat you hold. Absent a reason for now, an enterprise idea sits in a queue forever, and absent a reason for us, it sits in somebody else's.

**Three: what you already have.** The document, the data set, the two sources who have agreed to talk, the pattern you found in the file. This is the part that separates a pitch from an idea, and it is what makes the difference between an editor's yes and an editor's maybe.

**Four: what you need, and the plan to get it.** The records request, the analysis, the trip, the four interviews, in the order you will do them, with the kill check first as the verification course required. Say what would make you stop, because a pitch that includes its own failure condition is far more credible than one that cannot imagine failing.

**Five: cost and shape.** How many weeks of your time, what money it needs, roughly how long the piece runs, and what format it takes. If it should be a series, or a piece plus a newsletter and a short video, say so here, because that is a resourcing decision rather than a detail.

**And the sentence editors remember.** What the reader will be able to do or understand afterward that they cannot now. It is one line at the end and it is what gets the pitch approved in the room where you are not present.

**A note on the pitch you cannot yet write.** If part four is empty, you are not ready. That is not a failure; it is information, and the honest move is the shorter look-into conversation from the last lesson rather than a confident pitch resting on nothing.

:::reveal Which part of the pitch separates it from an idea? ||| What you already have: the document, the data set, the sources who agreed, the pattern in the file.

:::reveal Why does a pitch include its own failure condition? ||| Because a pitch that says what would make you stop is far more credible than one that cannot imagine failing, and it protects the editor's decision as much as yours.

:::reveal What is the last line of a pitch, and why does it matter? ||| What the reader will be able to do or understand afterward that they cannot now. It is the sentence that gets the pitch approved in a room you are not in.

## Vocabulary
- **The question sentence**: one sentence specific enough that somebody could say whether it had been answered.
- **Why now, why us**: the change, document, deadline, or beat position that makes this the moment and you the reporter.
- **Failure condition**: the stated circumstance under which you would stop, included deliberately in the pitch.
- **The reader line**: what a reader can do or understand afterward, written last and remembered first.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "pitching-and-refusal",
      title: "3 · Pitching internally, pitching cold, and being refused",
      section: "Section 1 · The pitch",
      body: `The same idea is pitched differently depending on whether the reader already knows you, and a refusal means different things in each case.

**Internally, the constraint is capacity rather than interest.** Your editor mostly believes you can do it; they are deciding what it displaces. So lead with cost and timing, be explicit about what you will not do while doing this, and offer the version that fits if the full one does not. An enterprise pitch with a smaller alternative attached gets said yes to far more often than one presented as all or nothing.

**Cold, the constraint is trust.** An editor who has not worked with you is deciding whether you will deliver at all. So the first paragraph carries the question and the strongest thing you already have, one line establishes why you can do it, and everything else is short. Do not attach a resume in place of a pitch, and do not pitch three ideas at once, which reads as having no strong one.

**Read what an outlet actually publishes before pitching it.** Length, form, what they have already covered, and whether your idea is a story they ran eight months ago. It takes twenty minutes and it is the difference between a pitch that is considered and one that is not.

**A refusal is data, and the kind matters.** Not a story is a judgment about the idea. Not for us is a judgment about fit and the idea may be fine elsewhere. Not now is about timing and is frequently an invitation. We already have this is about the outlet, not the reporting. And silence is usually capacity rather than a verdict, which is why one polite follow-up after two weeks is normal and a second is not.

**Ask one question after a refusal, and only one.** Was it the idea or the fit. The answer is usually a sentence, it costs the editor nothing, and it tells you whether to rework the pitch or send it somewhere else.

**Keep the refused pitches.** A file of them, dated, with the reason. Ideas refused for timing come back, ideas refused for fit find another home, and the file is also the honest record of what you have been trying to do with your beat, which is worth reading at the twice-yearly beat-memo revision.

**And do not pitch the same thing forever.** If an idea has been refused three times by people who understood it, the problem is probably the idea rather than the pitch, and a reporter who cannot hear that spends a year on something nobody will publish.

:::reveal What is the constraint on an internal pitch, and what follows for how it is written? ||| Capacity rather than interest, so lead with cost and timing, say what you will not do while doing this, and attach a smaller version that fits.

:::reveal What are the five kinds of refusal, and which is usually an invitation? ||| Not a story, not for us, not now, we already have this, and silence. Not now is about timing and is frequently an invitation.

:::reveal What one question do you ask after a refusal? ||| Was it the idea or the fit. It costs the editor a sentence and it tells you whether to rework the pitch or send it elsewhere.

## Vocabulary
- **Displacement**: what an enterprise project stops you doing, which is the real internal decision.
- **The smaller version**: an alternative scope attached to a pitch, which converts an all-or-nothing decision into a choice.
- **Kinds of refusal**: not a story, not for us, not now, we already have this, and silence, each meaning something different.
- **The refused-pitch file**: a dated record of what was declined and why, reread at the beat memo's revision.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-the-pitch",
      title: "4 · Knowledge check: the pitch",
      section: "Section 1 · The pitch",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is a pitch?",
            options: [
              "A proposal an editor can act on",
              "A summary of everything the reporter has learned about a subject so far",
              "A first draft of the opening section of the eventual piece",
              "A request for permission to begin looking into a subject",
            ],
            correctIndex: 0,
            explanation:
              "It answers a different set of questions from the ones a story answers.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What five things is an editor deciding?",
            options: [
              "Whether it is a story, whether you can get it, cost, timing, and displacement",
              "Whether it is accurate, balanced, fair, legally safe, and well written",
              "Which desk owns it, which editor handles it, and who copy-edits it",
              "How many sources it needs, how long it runs, and where it is placed",
            ],
            correctIndex: 0,
            explanation:
              "A pitch that describes a fascinating subject and answers none of those has given a decision-maker nothing.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What is the most common pitch failure?",
            options: [
              "Pitching a topic rather than a question",
              "Pitching to the wrong editor at the outlet",
              "Pitching before the reporting has been completed",
              "Pitching more words than the desk has space for",
            ],
            correctIndex: 0,
            explanation:
              "A topic cannot be commissioned. Whether approved closures lengthened the drive to a delivery room, and by how much, can be.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What is the second most common failure?",
            options: [
              "Pitching a conclusion you have not reported yet",
              "Pitching a story another outlet has already published",
              "Pitching without naming the sources who have agreed",
              "Pitching a piece longer than the outlet usually runs",
            ],
            correctIndex: 0,
            explanation:
              "Editors say yes to a question you can answer and no to a finding you are hoping for.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What is the difference visible in one sentence?",
            options: [
              "What you will establish is a promise; what you will find out is a plan",
              "What you know is a summary; what you need is a request",
              "What it costs is a budget; what it takes is a schedule",
              "What happened is news; what it means is analysis",
            ],
            correctIndex: 0,
            explanation:
              "A promise you may not be able to keep, against a plan an editor can commission.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "Why must a pitch be self-contained?",
            options: [
              "It may be forwarded, quoted in a meeting, or read three weeks later",
              "Because editors are prohibited from discussing pitches verbally",
              "Because the outlet archives every pitch it receives",
              "Because a pitch becomes the basis of a freelance contract",
            ],
            correctIndex: 0,
            explanation:
              "Sometimes by a person who has forgotten the conversation, which is why it is written short, specific, and complete.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "How long is an internal enterprise pitch?",
            options: [
              "Two hundred to four hundred words",
              "About a thousand words, so the reporting plan can be set out",
              "One page of bullet points with no continuous prose",
              "As long as it takes, since editors read the whole thing",
            ],
            correctIndex: 0,
            explanation:
              "A freelance pitch to an unfamiliar outlet is longer only because it must establish you can do it, and even then the first paragraph carries the decision.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What is the look-into conversation?",
            options: [
              "A shorter ask for a week, with a stated condition for dropping it",
              "A pitch submitted before the reporter has any material",
              "A request for the outlet to fund a records request",
              "A briefing given to an editor after the reporting is complete",
            ],
            correctIndex: 0,
            explanation:
              "If you genuinely do not know whether there is a story, that is the honest move rather than a confident pitch resting on nothing.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What is the first part of the five-part pitch?",
            options: [
              "The question, in one sentence",
              "What you already have in hand",
              "Why the story matters to the outlet's readers",
              "The cost in weeks and money",
            ],
            correctIndex: 0,
            explanation:
              "Specific enough that somebody could tell you whether you had answered it, and it is the sentence quoted in the meeting you are not in.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What does the second part establish?",
            options: [
              "Why now, and why us",
              "What the reader will be able to do afterward",
              "Which format the finished work will take",
              "Who has agreed to be interviewed",
            ],
            correctIndex: 0,
            explanation:
              "Absent a reason for now, an enterprise idea sits in a queue forever, and absent a reason for us, it sits in somebody else's.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "Which part separates a pitch from an idea?",
            options: [
              "What you already have",
              "The question sentence at the top",
              "The cost and shape at the end",
              "The reason it matters now",
            ],
            correctIndex: 0,
            explanation:
              "The document, the data set, the two sources who agreed, the pattern in the file. It is the difference between a yes and a maybe.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What order does the fourth part list the reporting in?",
            options: [
              "The order you will do it, with the kill check first",
              "The order of difficulty, hardest first",
              "The order sources become available",
              "The order the finished piece will present them",
            ],
            correctIndex: 0,
            explanation:
              "As the verification course required, so the check that could stop everything runs before the work that depends on it.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "Why does a pitch include its own failure condition?",
            options: [
              "A pitch that cannot imagine failing is less credible",
              "Because outlets require a written exit clause for enterprise work",
              "Because it limits the reporter's liability if the story collapses",
              "Because editors are obliged to record why a project ended",
            ],
            correctIndex: 0,
            explanation:
              "Saying what would make you stop protects the editor's decision as much as your own.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What does the fifth part cover?",
            options: [
              "Cost and shape: weeks, money, length, and format",
              "The sources who have agreed and those still to approach",
              "The competing coverage and how this differs",
              "The legal review the piece is likely to need",
            ],
            correctIndex: 0,
            explanation:
              "If it should be a series, or a piece plus a newsletter and a short video, that belongs here because it is a resourcing decision.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What is the sentence editors remember?",
            options: [
              "What the reader will be able to do or understand afterward",
              "How many weeks the reporting will take from approval",
              "Which competing outlet is working the same subject",
              "How many sources have already agreed to speak",
            ],
            correctIndex: 0,
            explanation:
              "One line at the end, and it is what gets the pitch approved in the room where you are not present.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What does an empty fourth part mean?",
            options: [
              "You are not ready, which is information rather than failure",
              "The pitch should be sent anyway to establish priority",
              "The reporting is complete and needs no further plan",
              "The story belongs to another desk within the outlet",
            ],
            correctIndex: 0,
            explanation:
              "The honest move is the shorter look-into conversation rather than a confident pitch resting on nothing.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What is the constraint on an internal pitch?",
            options: [
              "Capacity rather than interest",
              "Trust rather than capacity",
              "Legal risk rather than resources",
              "Audience demand rather than editorial judgment",
            ],
            correctIndex: 0,
            explanation:
              "Your editor mostly believes you can do it; they are deciding what it displaces.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What gets said yes to far more often, internally?",
            options: [
              "A pitch with a smaller alternative attached",
              "A pitch that specifies a publication date",
              "A pitch that names a competing outlet's coverage",
              "A pitch that includes a full source list",
            ],
            correctIndex: 0,
            explanation:
              "It converts an all-or-nothing decision into a choice, which is what an editor deciding about displacement actually needs.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What is the constraint on a cold pitch?",
            options: [
              "Trust",
              "Capacity, since the desk has a fixed budget",
              "Legal exposure, since the outlet does not know you",
              "Timing, since freelance work runs behind staff work",
            ],
            correctIndex: 0,
            explanation:
              "An editor who has not worked with you is deciding whether you will deliver at all.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What carries the decision in a cold pitch?",
            options: [
              "The first paragraph",
              "The attached clips and resume",
              "The closing paragraph about cost",
              "The list of sources already secured",
            ],
            correctIndex: 0,
            explanation:
              "The question and the strongest thing you already have, with one line on why you can do it and everything else short.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "Why not pitch three ideas at once?",
            options: [
              "It reads as having no strong one",
              "It exceeds the length most editors will read",
              "It commits you to reporting all three if any is accepted",
              "It prevents the editor from assigning the story internally",
            ],
            correctIndex: 0,
            explanation:
              "Along with attaching a resume in place of a pitch, which substitutes credentials for a proposal.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What takes twenty minutes and decides whether a pitch is considered?",
            options: [
              "Reading what the outlet actually publishes",
              "Finding the editor's direct contact details",
              "Checking whether the outlet pays freelancers on acceptance",
              "Confirming that no competitor has the story",
            ],
            correctIndex: 0,
            explanation:
              "Length, form, what they have already covered, and whether your idea is a story they ran eight months ago.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "Which refusal is a judgment about fit rather than the idea?",
            options: [
              "Not for us",
              "Not a story",
              "Not now",
              "We already have this",
            ],
            correctIndex: 0,
            explanation:
              "The idea may be fine elsewhere, which is why the single follow-up question separates the two.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "Which refusal is frequently an invitation?",
            options: [
              "Not now",
              "Not a story",
              "Not for us",
              "We already have this",
            ],
            correctIndex: 0,
            explanation:
              "It is about timing, which means the idea can come back rather than needing to be reworked or rehomed.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What does silence usually mean?",
            options: [
              "Capacity rather than a verdict",
              "A refusal the editor did not want to state",
              "That the pitch was never received",
              "That the outlet is considering it seriously",
            ],
            correctIndex: 0,
            explanation:
              "Which is why one polite follow-up after two weeks is normal and a second is not.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What single question do you ask after a refusal?",
            options: [
              "Was it the idea or the fit",
              "Would you consider a shorter version",
              "Who else at the outlet might take it",
              "What would you need to see to say yes",
            ],
            correctIndex: 0,
            explanation:
              "The answer is usually a sentence, and it tells you whether to rework the pitch or send it somewhere else.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "Why keep a file of refused pitches?",
            options: [
              "Timing refusals come back and fit refusals find another home",
              "Because outlets require a record of submitted work",
              "Because refused pitches can be republished as commentary",
              "Because editors expect resubmission after six months",
            ],
            correctIndex: 0,
            explanation:
              "It is also the honest record of what you have been trying to do with your beat, worth reading at the twice-yearly memo revision.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What does three refusals from people who understood an idea suggest?",
            options: [
              "The problem is probably the idea",
              "The pitch needs a stronger opening paragraph",
              "The idea should be taken to a national outlet",
              "The reporter should attach more supporting material",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who cannot hear that spends a year on something nobody will publish.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "Which lesson from REPORT-00 does the topic-versus-question distinction come from?",
            options: [
              "The beat memo",
              "Community listening",
              "The signal log",
              "Ground rules with sources",
            ],
            correctIndex: 0,
            explanation:
              "A question implies a document, a denominator, and a person who has to answer. A topic implies none of those.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What is a pitch not?",
            options: [
              "A memo about how hard the reporting will be",
              "A statement of what you already have in hand",
              "A plan for the order the reporting will run in",
              "An estimate of the weeks and money required",
            ],
            correctIndex: 0,
            explanation:
              "Nor a first draft, nor a request for permission to look into something.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What does an enterprise idea with no reason for now do?",
            options: [
              "Sits in a queue forever",
              "Gets reassigned to another reporter on the desk",
              "Runs as a shorter piece without the enterprise resourcing",
              "Becomes a newsletter item instead of a story",
            ],
            correctIndex: 0,
            explanation:
              "And without a reason for us, it sits in somebody else's queue instead.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "Which of these is an example of a why-now?",
            options: [
              "A document exists or a deadline is approaching",
              "The subject has been under-covered for several years",
              "The reporter has spare capacity this quarter",
              "A competing outlet has expressed interest",
            ],
            correctIndex: 0,
            explanation:
              "With something having changed, or nobody else being able to do it because of the beat you hold.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "Why is the question sentence written even though it is read first?",
            options: [
              "If it will not fit in a sentence, you do not yet have a pitch",
              "Because editors read only the first line of any pitch",
              "Because it becomes the headline of the finished piece",
              "Because the outlet's system requires a one-line summary",
            ],
            correctIndex: 0,
            explanation:
              "It is also the thing that gets quoted in the meeting you are not in.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What should an internal pitch be explicit about?",
            options: [
              "What you will not do while doing this",
              "Which colleagues could cover for you",
              "How the piece will be promoted after publication",
              "Which awards the finished work might qualify for",
            ],
            correctIndex: 0,
            explanation:
              "Displacement is the real internal decision, so naming it is what makes the pitch answerable.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What does an editor deciding on a cold pitch not yet know?",
            options: [
              "Whether you will deliver at all",
              "Whether the subject is of interest to their readers",
              "Whether the outlet has covered it before",
              "Whether the piece would need legal review",
            ],
            correctIndex: 0,
            explanation:
              "Which is why one line establishes why you can do it and the rest is kept short.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What is displacement, in pitch terms?",
            options: [
              "What an enterprise project stops you doing",
              "What a story costs the outlet in legal review",
              "What a piece replaces on the front page",
              "What the reporting requires in travel and fees",
            ],
            correctIndex: 0,
            explanation:
              "It is the real internal decision, which is why cost and timing lead an internal pitch.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What does a pitch that says what would make you stop protect?",
            options: [
              "The editor's decision as much as your own",
              "The reporter's contract with the outlet",
              "The sources who have agreed to participate",
              "The outlet's position if the story is challenged",
            ],
            correctIndex: 0,
            explanation:
              "Because an editor commissioning open-ended work is accepting an unbounded risk unless the bound is stated.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "Which is a question rather than a topic?",
            options: [
              "Whether approved closures lengthened the drive to a delivery room",
              "Rural maternity care across the state",
              "Access to health services in underserved areas",
              "The condition of the regional hospital system",
            ],
            correctIndex: 0,
            explanation:
              "Specific enough that somebody could say whether it had been answered, which is what makes it commissionable.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "How many follow-ups after silence does the lesson call normal?",
            options: [
              "One, after two weeks",
              "Two, a week apart",
              "Three, at increasing intervals",
              "None, since silence is a refusal",
            ],
            correctIndex: 0,
            explanation:
              "Silence is usually capacity rather than a verdict, which is why one polite follow-up is normal and a second is not.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What does the refused-pitch file feed into?",
            options: [
              "The twice-yearly beat memo revision",
              "The outlet's annual editorial planning",
              "The portfolio a reporter assembles for applications",
              "The signal log kept for emerging issues",
            ],
            correctIndex: 0,
            explanation:
              "It is the honest record of what you have been trying to do with your beat.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What kind of thing is the pitch's fifth part, in editorial terms?",
            options: [
              "A resourcing decision",
              "A stylistic preference",
              "A legal consideration",
              "A distribution question for the audience team",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the format set belongs in the pitch rather than being settled after the reporting.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What does the course say a pitch should survive?",
            options: [
              "Forwarding, quotation, and a three-week delay",
              "A legal review before commissioning",
              "A competing pitch on the same subject",
              "An editor's request to cut it in half",
            ],
            correctIndex: 0,
            explanation:
              "Short, specific, and self-contained is what makes that possible.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "Which refusal says nothing about the reporting?",
            options: [
              "We already have this",
              "Not a story",
              "Not now",
              "Not for us",
            ],
            correctIndex: 0,
            explanation:
              "It is about the outlet's existing plans rather than about the idea or the work behind it.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What does the lesson say about attaching a resume to a cold pitch?",
            options: [
              "It should not replace a pitch",
              "It is required by most outlets that commission freelancers",
              "It should lead, so the editor knows who is writing",
              "It should be sent separately after a response",
            ],
            correctIndex: 0,
            explanation:
              "One line establishing why you can do it is what the pitch needs. Credentials do not substitute for a proposal.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What makes an editor's yes different from an editor's maybe?",
            options: [
              "What you already have",
              "How much the project will cost",
              "How soon it can be published",
              "Which format it will take",
            ],
            correctIndex: 0,
            explanation:
              "The third part of the pitch is where a proposal stops being an idea.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What is written into a pitch about the order of reporting?",
            options: [
              "The kill check first",
              "The interviews first, since access takes longest",
              "The travel first, since it is the largest cost",
              "The writing first, so the shape is settled early",
            ],
            correctIndex: 0,
            explanation:
              "The check most likely to stop the story runs before the work that depends on it, which is the verification course's sequencing rule.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What does a pitch answering none of the editor's five questions provide?",
            options: [
              "Something interesting and nothing actionable",
              "A record the desk can return to later",
              "Grounds for a look-into conversation",
              "A basis for a freelance commission",
            ],
            correctIndex: 0,
            explanation:
              "It has given a reader something and given a decision-maker nothing.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What does the course say about pitching the same idea forever?",
            options: [
              "Three informed refusals suggest the idea rather than the pitch",
              "Persistence is the main determinant of whether enterprise work runs",
              "An idea should be pitched until an outlet explains its reasoning",
              "Refusals should be appealed to a more senior editor",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who cannot hear that spends a year on something nobody will publish.",
            sourceLessonSlug: "pitching-and-refusal",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "shape-follows-question",
      title: "5 · The shape follows the question, not the material",
      section: "Section 2 · Choosing a shape",
      body: `Reporters choose a form by habit, by what the desk expects, or by how much material they gathered. All three produce pieces that fight their own contents, and the fix is a single question asked before writing.

**The question that decides the shape.** What does the reader need to be able to do at the end? Understand a mechanism, weigh a dispute, recognize a pattern, feel the weight of a consequence, act on something, or simply know what happened. Each of those has a form that carries it well and several that do not.

**Why material is the wrong input.** Having six interviews does not mean the piece needs six voices, and a large data set does not make it a data story. The commonest version of this error is a reporter who did months of work producing a long piece because the work was long, which is a decision about the reporter rather than about the reader.

**Why habit is the wrong input.** The inverted pyramid exists because it survives being cut from the bottom and because a reader in a hurry gets the outcome first. Those are real reasons and they are not reasons for everything. A story whose point is that a sequence of decisions produced an outcome loses that point entirely when the outcome is stated first and the sequence is compressed into paragraph nine.

**Match the shape to the question, in five common cases.** A reader who needs to know what happened wants the news form. One who needs to understand a mechanism wants an explainer built around the mechanism rather than around the news peg. One who needs to weigh a dispute wants the evidence on each side laid out with its strength named, which the verification course already specified. One who needs to recognize a pattern wants the pattern shown, usually with data. And one who needs to feel a consequence wants narrative, with one situation followed closely.

**The test after drafting.** Read the piece and ask what a reader can do at the end. If the answer is not the one you started with, the shape is wrong, and that is a structural fix rather than a line-editing one.

**And say the shape in the pitch.** Choosing it at the pitch stage means the reporting is aimed at it: a narrative needs scenes and access, a data piece needs the export and the dictionary, and an explainer needs somebody who can explain. Deciding the form after the reporting is what produces a piece that cannot quite do what it wants to.

:::reveal What question decides a story's shape? ||| What the reader needs to be able to do at the end: understand a mechanism, weigh a dispute, recognize a pattern, feel a consequence, act, or know what happened.

:::reveal Why is the amount of material the wrong input? ||| Six interviews do not require six voices and a large data set does not make a data story. Producing a long piece because the work was long is a decision about the reporter.

:::reveal Why choose the shape at the pitch stage? ||| Because the reporting is then aimed at it: a narrative needs scenes and access, a data piece needs the export and the dictionary, and an explainer needs somebody who can explain.

## Vocabulary
- **Shape**: the form a piece takes, chosen from what the reader must be able to do rather than from habit or volume.
- **Inverted pyramid**: the outcome-first form, which survives cutting and serves a hurried reader, and is not right for everything.
- **The after-draft test**: reading the piece and asking what a reader can do at the end.
- **Aimed reporting**: gathering scenes, exports, or explainers because the chosen shape requires them.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-shapes",
      title: "6 · Six shapes, and what each one costs",
      section: "Section 2 · Choosing a shape",
      body: `Each form does something the others cannot, and each has a specific failure mode. Knowing the failure mode is more useful than knowing the form.

**The news story.** Outcome first, then how, then context. It serves a reader who needs to know what happened and it survives being cut. Its failure mode is flattening: a sequence, a mechanism, or a dispute compressed into the shape's back half, where a reader never reaches it.

**The explainer.** Built around a mechanism rather than an event, answering how something works and why it produces what it produces. Its failure mode is the news peg tail wagging the piece, so the explanation is bent around whatever happened this week rather than around the thing that needs explaining.

**The narrative.** One situation, followed closely, in sequence, so a reader experiences the weight of a consequence. It needs access nobody gives casually, and its failure mode is the anecdote that carries an argument it cannot support: one family's experience standing in for a population without the reporting that would justify it.

**The Q and A.** A single voice, edited for length and clarity, with the questions visible. It is honest about being one perspective, it is quick, and its failure mode is a platform: an unchallenged interview with somebody whose claims required checking.

**The data piece.** A pattern shown rather than asserted, with method and limits stated. Its failure mode is the finding that is really a definition, which REPORT-02 covered at length, and its cost is that it needs the export, the dictionary, and time.

**The live or running piece.** Continuous coverage of something unfolding, dated and corrected in place. Its failure mode is the early error that never catches up with the readers who saw it, which is why the verification course's confidence levels matter more here than anywhere.

**And the honest note about hybrids.** Most good pieces borrow: a narrative opening on a news story, a data section inside an explainer. That is fine. What is not fine is a piece that cannot say which shape it is, because that is usually a piece that has not decided what the reader needs.

:::reveal What is the news story's failure mode? ||| Flattening. A sequence, a mechanism, or a dispute compressed into the back half where a reader never reaches it.

:::reveal What is the narrative's failure mode, and what would justify the shape? ||| The anecdote carrying an argument it cannot support, with one family standing in for a population. It is justified by reporting that establishes the population claim separately.

:::reveal Why do confidence levels matter more in live coverage than anywhere else? ||| Because an early error never catches up with the readers who saw it, so the labeling has to be right at the moment of publication rather than at the end.

## Vocabulary
- **Flattening**: compressing a sequence or dispute into the back half of a news story, where readers do not reach it.
- **News peg tail**: an explainer bent around this week's event rather than around the mechanism it exists to explain.
- **Platform failure**: an unchallenged Q and A with somebody whose claims required checking.
- **Hybrid**: a piece borrowing from more than one shape, which is fine when it can still say which shape it is.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "length-and-attention",
      title: "7 · Length, attention, and what a reader actually does",
      section: "Section 2 · Choosing a shape",
      body: `Length is a decision, not a residue, and treating it as a residue is how a beat produces pieces nobody finishes.

**Decide the length before drafting.** From the shape and the question, not from the material. A mechanism a reader needs to understand takes as many words as the mechanism takes and no more. A narrative needs room for a scene to land. A news story is as long as the outcome, the how, and the necessary context.

**What long is for.** Sequence, accumulation, and the weight of a specific situation. Those genuinely require space, and a piece that needs them and does not get them fails. Length is not a reward for effort and it is not a signal of importance, and readers do not experience it as either.

**What short is for.** A single finding, a clear answer, or a piece a reader will act on. A short piece that answers one question completely is more useful than a long one that answers three partially, and it is harder to write, which is why the long version is the default.

**The structural discipline that makes either work.** A reader should be able to stop at any point and have gained something coherent. That is what the news form was designed for, and it applies to every shape: put the essential thing in the first quarter, and let the rest reward continuing rather than being required for comprehension.

**On audience behavior, this course declines to print numbers.** How far into a piece readers get, and on which devices, is measurable and is measured, and this course has not read those measurements against their sources. Your own outlet's analytics are the honest place to look, because they describe your readers rather than an aggregate somebody else published.

**The thing that reliably makes a piece too long.** Reporting that was hard to get and does not serve the question. Cut it, keep the file, and remember that the beat file from REPORT-00 is where unused material becomes the next story rather than padding for this one.

**And the headline and first sentence carry a disproportionate share.** More people read them than read anything else, which is a fact about how reading works rather than a complaint about it. Writing them last, from the finished piece, and checking that each is supported by what follows, is the small discipline that keeps a careful piece from being misrepresented by its own top.

:::reveal What are the three things long form is genuinely for? ||| Sequence, accumulation, and the weight of a specific situation. Length is not a reward for effort or a signal of importance.

:::reveal What structural discipline applies to every shape? ||| A reader should be able to stop at any point and have gained something coherent, so the essential thing goes in the first quarter.

:::reveal Why does this course decline to print audience-attention figures? ||| Because it has not read those measurements against their sources, and your own outlet's analytics describe your readers rather than an aggregate somebody else published.

## Vocabulary
- **Length as a decision**: choosing a word count from the shape and the question before drafting, rather than after.
- **Stop-anywhere structure**: putting the essential material early so continuing is rewarded rather than required.
- **Hard-won irrelevance**: reporting that took effort and does not serve the question, which is the usual cause of overlength.
- **Top-of-piece burden**: the disproportionate readership of the headline and first sentence, written last and checked against the piece.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-choosing-a-shape",
      title: "8 · Knowledge check: choosing a shape",
      section: "Section 2 · Choosing a shape",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What question decides a story's shape?",
            options: [
              "What the reader needs to be able to do at the end",
              "How much material the reporting produced in total",
              "Which form the desk usually expects from this beat",
              "How long the outlet allows for a piece of this kind",
            ],
            correctIndex: 0,
            explanation:
              "Understand a mechanism, weigh a dispute, recognize a pattern, feel a consequence, act, or know what happened.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "Which three inputs does the lesson call wrong?",
            options: [
              "Habit, desk expectation, and volume of material",
              "Deadline, word count, and available images",
              "Reader interest, competitor coverage, and timing",
              "Legal risk, source availability, and travel cost",
            ],
            correctIndex: 0,
            explanation:
              "All three produce pieces that fight their own contents.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "Why is the amount of material the wrong input?",
            options: [
              "Six interviews do not require six voices",
              "Because material is always cut during editing anyway",
              "Because volume is decided before the reporting begins",
              "Because editors judge a piece by its sources rather than its length",
            ],
            correctIndex: 0,
            explanation:
              "A reporter producing a long piece because the work was long has made a decision about themselves rather than about the reader.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What are the inverted pyramid's genuine reasons?",
            options: [
              "It survives cutting from the bottom and gives the outcome first",
              "It is the form readers say they prefer in audience surveys",
              "It places the most quotable material where editors look",
              "It is required by the professional style guides",
            ],
            correctIndex: 0,
            explanation:
              "Those are real reasons and they are not reasons for everything.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "Which story loses its point in the news form?",
            options: [
              "One whose point is that a sequence of decisions produced an outcome",
              "One whose point is that an official body made a decision this week",
              "One whose point is that a number has risen since last year",
              "One whose point is that two parties disagree about a fact",
            ],
            correctIndex: 0,
            explanation:
              "The outcome is stated first and the sequence is compressed into paragraph nine, where the reader never reaches it.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What does a reader who needs to weigh a dispute want?",
            options: [
              "The evidence on each side with its strength named",
              "A narrative following one participant through the disagreement",
              "An explainer describing how the underlying system works",
              "A data piece showing the pattern across comparable cases",
            ],
            correctIndex: 0,
            explanation:
              "Which the verification course already specified when it distinguished unknown from disputed.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What does a reader who needs to feel a consequence want?",
            options: [
              "Narrative, with one situation followed closely",
              "An explainer built around the mechanism producing the consequence",
              "A data piece establishing how widespread the consequence is",
              "A news story stating the outcome and its cause",
            ],
            correctIndex: 0,
            explanation:
              "Which is why narrative needs scenes and access, and why the shape has to be chosen before the reporting.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What is the after-draft test?",
            options: [
              "Read the piece and ask what a reader can do at the end",
              "Read the piece aloud to check the rhythm of the sentences",
              "Count the sources and check each is attributed",
              "Compare the length against the desk's allocation",
            ],
            correctIndex: 0,
            explanation:
              "If the answer is not the one you started with, the shape is wrong, and that is a structural fix rather than a line edit.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "Why say the shape in the pitch?",
            options: [
              "The reporting is then aimed at what the shape requires",
              "Because editors will not commission an unspecified form",
              "Because the shape determines the fee for freelance work",
              "Because the desk allocates space by format",
            ],
            correctIndex: 0,
            explanation:
              "A narrative needs scenes and access, a data piece needs the export and the dictionary, and an explainer needs somebody who can explain.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What is the news story's failure mode?",
            options: [
              "Flattening",
              "The news peg bending the explanation out of shape",
              "An anecdote carrying an argument it cannot support",
              "An unchallenged interview with somebody whose claims needed checking",
            ],
            correctIndex: 0,
            explanation:
              "A sequence, a mechanism, or a dispute compressed into the back half where a reader never reaches it.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is the explainer built around?",
            options: [
              "A mechanism rather than an event",
              "The most recent development on the beat",
              "The dispute between the parties involved",
              "A single situation followed closely",
            ],
            correctIndex: 0,
            explanation:
              "Answering how something works and why it produces what it produces.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is the explainer's failure mode?",
            options: [
              "The news peg tail wagging the piece",
              "Compressing the mechanism into the final paragraphs",
              "Following one situation too closely to generalize",
              "Publishing a single voice without challenge",
            ],
            correctIndex: 0,
            explanation:
              "The explanation gets bent around whatever happened this week rather than around the thing that needs explaining.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does the narrative require that the other shapes do not?",
            options: [
              "Access nobody gives casually",
              "A data export with its accompanying dictionary",
              "An expert able to explain a technical mechanism",
              "A dispute with two parties who will both speak",
            ],
            correctIndex: 0,
            explanation:
              "One situation, followed closely, in sequence, so the reader experiences the weight of a consequence.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is the narrative's failure mode?",
            options: [
              "An anecdote carrying an argument it cannot support",
              "A mechanism explained without a news peg",
              "A pattern asserted without the underlying data",
              "An outcome stated before the sequence that produced it",
            ],
            correctIndex: 0,
            explanation:
              "One family's experience standing in for a population without the reporting that would justify it.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is the Q and A honest about?",
            options: [
              "Being one perspective",
              "Being edited more heavily than a quoted story",
              "Being produced faster than any other shape",
              "Being unsuitable for contested subjects",
            ],
            correctIndex: 0,
            explanation:
              "A single voice, edited for length and clarity, with the questions visible.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is the Q and A's failure mode?",
            options: [
              "A platform, with claims that needed checking left unchallenged",
              "An edit so heavy the subject's meaning changes",
              "Questions long enough to overshadow the answers",
              "A single subject speaking about a contested dispute",
            ],
            correctIndex: 0,
            explanation:
              "Its honesty about being one perspective does not license publishing unchecked assertions inside it.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is the data piece's failure mode?",
            options: [
              "A finding that is really a definition",
              "A pattern too small to be visible in a chart",
              "A method section longer than the finding",
              "An export supplied without a data dictionary",
            ],
            correctIndex: 0,
            explanation:
              "Which the report-reading course covered at length, and its cost is that it needs the export, the dictionary, and time.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "Why do confidence levels matter most in live coverage?",
            options: [
              "An early error never catches up with the readers who saw it",
              "Because live pieces are corrected less often than filed ones",
              "Because editors cannot review live copy before publication",
              "Because live coverage attracts a larger audience",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the labeling has to be right at the moment of publication rather than at the end.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does the course say about hybrid shapes?",
            options: [
              "Fine, provided the piece can still say which shape it is",
              "Best avoided, because a piece should commit to one form",
              "Required for enterprise work, which is too complex for one shape",
              "Acceptable only where the desk has approved the combination",
            ],
            correctIndex: 0,
            explanation:
              "A piece that cannot say which shape it is has usually not decided what the reader needs.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does the course say about length?",
            options: [
              "A decision, not a residue",
              "A consequence of how much reporting was completed",
              "A limit set by the desk before assignment",
              "A function of the format the piece takes",
            ],
            correctIndex: 0,
            explanation:
              "Treating it as a residue is how a beat produces pieces nobody finishes.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What are the three things long form is genuinely for?",
            options: [
              "Sequence, accumulation, and the weight of a specific situation",
              "Context, background, and the history of the institution",
              "Multiple sources, multiple documents, and multiple jurisdictions",
              "Explanation, illustration, and repetition of the central claim",
            ],
            correctIndex: 0,
            explanation:
              "Length is not a reward for effort and it is not a signal of importance, and readers do not experience it as either.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What is short form for?",
            options: [
              "A single finding, a clear answer, or something a reader will act on",
              "A subject the reporter has not had time to develop fully",
              "A story that failed to reach the standard for a longer piece",
              "A piece filling space between larger investigations",
            ],
            correctIndex: 0,
            explanation:
              "A short piece answering one question completely is more useful than a long one answering three partially, and it is harder to write.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What is the stop-anywhere structure?",
            options: [
              "A reader can stop at any point and have gained something coherent",
              "A piece divided into sections a reader can read in any order",
              "A piece whose paragraphs each contain a complete claim",
              "A piece that repeats its central finding at intervals",
            ],
            correctIndex: 0,
            explanation:
              "Put the essential thing in the first quarter and let the rest reward continuing rather than being required for comprehension.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "Why does this course print no audience-attention figures?",
            options: [
              "It has not read those measurements against their sources",
              "Because such figures are proprietary to individual outlets",
              "Because attention cannot be measured reliably at all",
              "Because the professional code discourages audience metrics",
            ],
            correctIndex: 0,
            explanation:
              "Your own outlet's analytics are the honest place to look, because they describe your readers rather than an aggregate somebody else published.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What reliably makes a piece too long?",
            options: [
              "Reporting that was hard to get and does not serve the question",
              "Context the reader needs but the reporter finds obvious",
              "Quotations retained because the sources agreed to speak",
              "Sections added at an editor's request during revision",
            ],
            correctIndex: 0,
            explanation:
              "Cut it and keep the file, because the beat file is where unused material becomes the next story rather than padding for this one.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "Why do the headline and first sentence carry a disproportionate share?",
            options: [
              "More people read them than read anything else",
              "Because search engines weight them above the body text",
              "Because editors judge a piece by its opening",
              "Because they are the only parts that appear on social platforms",
            ],
            correctIndex: 0,
            explanation:
              "A fact about how reading works rather than a complaint about it, which is why they are written last and checked against the piece.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "When should the headline and first sentence be written?",
            options: [
              "Last, from the finished piece",
              "First, so the reporting is aimed at them",
              "During the structure pass of revision",
              "By the desk rather than the reporter",
            ],
            correctIndex: 0,
            explanation:
              "And checked so each is supported by what follows, which keeps a careful piece from being misrepresented by its own top.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What does the lesson say a reader who needs to recognize a pattern wants?",
            options: [
              "The pattern shown, usually with data",
              "A narrative that exemplifies the pattern",
              "An explainer describing the mechanism behind it",
              "A news story reporting the most recent instance",
            ],
            correctIndex: 0,
            explanation:
              "Shown rather than asserted, with method and limits stated, which is what the data piece is for.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What is the live piece corrected in place, and why does it matter?",
            options: [
              "Dated and corrected in place, because early readers never see the fix",
              "Republished as a new piece, so the correction is visible",
              "Corrected only at the end, when the situation has resolved",
              "Left uncorrected, because live coverage is understood as provisional",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the verification course's confidence levels apply harder here than anywhere else.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is the data piece's cost?",
            options: [
              "The export, the dictionary, and time",
              "Legal review before publication",
              "A statistician's involvement in the analysis",
              "An interactive presentation the desk must build",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the shape is decided at the pitch, when those can still be requested.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does knowing a form's failure mode give a reporter?",
            options: [
              "More than knowing the form does",
              "A reason to avoid that form entirely",
              "A justification for choosing a hybrid",
              "A checklist the desk can apply during editing",
            ],
            correctIndex: 0,
            explanation:
              "Each form does something the others cannot, and each fails in one characteristic way.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does the news form serve?",
            options: [
              "A reader who needs to know what happened",
              "A reader who needs to understand a mechanism",
              "A reader who needs to weigh a dispute",
              "A reader who needs to feel a consequence",
            ],
            correctIndex: 0,
            explanation:
              "Outcome first, then how, then context, and it survives being cut from the bottom.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What would justify a narrative's central anecdote?",
            options: [
              "Reporting that establishes the population claim separately",
              "A second family with a comparable experience",
              "A quotation from an official confirming the pattern",
              "A statement that the case is representative",
            ],
            correctIndex: 0,
            explanation:
              "Otherwise one family's experience is standing in for a population without the reporting that would justify it.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "Which shape is honest about being one perspective?",
            options: [
              "The Q and A",
              "The narrative",
              "The explainer",
              "The data piece",
            ],
            correctIndex: 0,
            explanation:
              "A single voice, edited for length and clarity, with the questions visible.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does aimed reporting mean?",
            options: [
              "Gathering scenes, exports, or explainers because the shape requires them",
              "Reporting only what supports the intended conclusion",
              "Targeting the sources most likely to cooperate",
              "Restricting the reporting to what the deadline allows",
            ],
            correctIndex: 0,
            explanation:
              "Deciding the form after the reporting is what produces a piece that cannot quite do what it wants to.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What happens to a mechanism placed in a news story's back half?",
            options: [
              "A reader never reaches it",
              "It becomes the strongest part of the piece",
              "It is cut during editing for length",
              "It is duplicated in the opening summary",
            ],
            correctIndex: 0,
            explanation:
              "Flattening is the failure mode, and it applies to sequences and disputes as much as to mechanisms.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does the lesson say about a piece that cannot say which shape it is?",
            options: [
              "It has usually not decided what the reader needs",
              "It is a hybrid, which is a legitimate form",
              "It should be split into two separate pieces",
              "It should be assigned to a different desk",
            ],
            correctIndex: 0,
            explanation:
              "Most good pieces borrow. What is not fine is a piece that cannot name its own shape.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does a mechanism a reader needs to understand take, in words?",
            options: [
              "As many as the mechanism takes and no more",
              "As many as the desk has allocated for the piece",
              "As many as the reporting produced material for",
              "As few as possible, since explanation loses readers",
            ],
            correctIndex: 0,
            explanation:
              "Length is decided from the shape and the question rather than from the material.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "Where does unused reporting belong?",
            options: [
              "The beat file, where it becomes the next story",
              "The published piece, since the work was done",
              "An appendix linked from the story",
              "The pitch for the following project",
            ],
            correctIndex: 0,
            explanation:
              "Rather than padding for this one, which is the usual cause of a piece running long.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What is the honest place to look for audience behavior?",
            options: [
              "Your own outlet's analytics",
              "Published industry benchmarks for the sector",
              "A platform's own reporting on content performance",
              "Academic studies of general reading habits",
            ],
            correctIndex: 0,
            explanation:
              "Because they describe your readers rather than an aggregate somebody else published.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "Which is harder to write, per the lesson?",
            options: [
              "A short piece answering one question completely",
              "A long piece answering several questions partially",
              "A hybrid drawing on two shapes at once",
              "A live piece corrected in place",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the long version is the default even when the short one would be more useful.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What is the structural discipline that makes any length work?",
            options: [
              "Essential material in the first quarter",
              "A summary paragraph at the halfway point",
              "Section headings every few hundred words",
              "A repeated statement of the central finding",
            ],
            correctIndex: 0,
            explanation:
              "It is what the news form was designed for, and it applies to every shape rather than only to that one.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What does the lesson say readers do not experience length as?",
            options: [
              "A reward for effort or a signal of importance",
              "A measure of the outlet's investment in a subject",
              "An indication of the story's complexity",
              "A guide to how much time the piece deserves",
            ],
            correctIndex: 0,
            explanation:
              "Which is why length is decided from the shape and the question rather than from how much work went in.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "Which failure does choosing a shape from desk expectation produce?",
            options: [
              "A piece that fights its own contents",
              "A piece that runs shorter than intended",
              "A piece the desk rejects at the editing stage",
              "A piece indistinguishable from a competitor's",
            ],
            correctIndex: 0,
            explanation:
              "Habit, expectation, and volume all produce that same result, which is why the reader question replaces all three.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What does an explainer need that a narrative does not?",
            options: [
              "Somebody who can explain",
              "Access nobody gives casually",
              "Scenes observed in sequence",
              "A data export with a dictionary",
            ],
            correctIndex: 0,
            explanation:
              "Which is one of the three examples of why the shape is chosen before the reporting rather than after it.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What kind of fix is a wrong shape?",
            options: [
              "Structural, not line editing",
              "A matter for the copy desk rather than the reporter",
              "A question of length rather than form",
              "Something to disclose in a closing note",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the structure pass comes first in the revision sequence.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What does the lesson say about music in reporting video, by analogy with length?",
            options: [
              "Both are choices about the reporter rather than the reader when unjustified",
              "Both should be decided by the desk rather than the reporter",
              "Both are governed by the outlet's style guide",
              "Both are settled during the line pass of revision",
            ],
            correctIndex: 0,
            explanation:
              "Choosing a length because the work was long is a decision about the reporter, which is the same error in a different medium.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "Which shape does the course say is decided by what the reader must do?",
            options: [
              "Every one of them",
              "Only the enterprise shapes, since dailies follow convention",
              "Only narrative and data pieces, which need aimed reporting",
              "Only the shapes that require an editor's approval",
            ],
            correctIndex: 0,
            explanation:
              "Each of the six has a form that carries a particular reader need well and several that do not.",
            sourceLessonSlug: "shape-follows-question",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "newsletter",
      title: "9 · Newsletter: a relationship with a list",
      section: "Section 3 · The formats",
      body: `A newsletter is not a story delivered by email. It is a recurring relationship with a specific group of people who agreed to hear from you, and treating it as distribution wastes what makes it different.

**What it does that a story cannot.** It arrives on a schedule, which lets a beat accumulate in public. It has a known audience, which lets you write for people rather than for everyone. It permits a voice, including uncertainty, which a news story's conventions largely exclude. And it makes the reporter reachable, which is where a surprising share of a beat's tips come from.

**What belongs in it that does not belong in a story.** What you are working on and what you have not been able to confirm. The document you obtained that does not carry a piece on its own. The correction, explained. The question you are asking readers for help with. And the context that a news story assumes and a newcomer does not have.

**A shape that works for a beat newsletter.** One thing explained properly, at the top, in a few hundred words. Then what happened this week on the beat, short, with links. Then what is coming, from the beat calendar. Then one thing you want from readers. It is repeatable, it takes a morning, and readers learn where to find what they want in it.

**The frequency question, answered honestly.** Whatever you can sustain for a year. A weekly that becomes fortnightly and then stops is worse than a fortnightly that runs for two years, because the value is entirely in the accumulation and the expectation.

**The reachability is the point, not a side effect.** A reply-to address that reaches a person, an explicit invitation to send things, and an actual response when somebody does. The listening lesson in REPORT-00 asked for time in the places people gather; a newsletter with an open reply address is one of those places, and it scales in a way a room does not.

**Two things that ruin one.** Writing it as though it were a press release for your own work, which readers detect immediately. And using it to publish things that did not meet the standard for the site, which is the fastest way to make a newsletter the place where your unverified material lives. Everything in a newsletter is published, and the confidence levels from the verification course apply unchanged.

:::reveal What does a newsletter permit that a news story's conventions largely exclude? ||| A voice, including uncertainty: what you are working on, what you could not confirm, and the correction explained.

:::reveal What is the honest answer to the frequency question? ||| Whatever you can sustain for a year, because the value is entirely in accumulation and expectation, and a weekly that stops is worse than a fortnightly that lasts.

:::reveal What are the two things that ruin a beat newsletter? ||| Writing it as a press release for your own work, which readers detect immediately, and using it for material that did not meet the site's standard.

## Vocabulary
- **Recurring relationship**: a newsletter's real product, which is the schedule and the known audience rather than the delivery.
- **Beat newsletter shape**: one thing explained, the week in short, what is coming, and one ask of readers.
- **Sustainable frequency**: the cadence you can hold for a year, which beats a faster one that stops.
- **Open reply address**: a contact that reaches a person, which turns a newsletter into a listening surface.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "social-first",
      title: "10 · Social-first: reporting that lands where it is read",
      section: "Section 3 · The formats",
      body: `Social-first means the reporting is built for the place it will be read rather than trimmed to fit it afterward. The Free Press Indiana posting asks for social literacy alongside enterprise work, and this is what that actually requires.

**The structural difference.** A social post is read without the context a site provides, out of order, by people who did not seek it, frequently without the piece it links to. So it has to be self-contained: what happened, who says so, and what is uncertain, inside the post rather than behind a link.

**Attribution has to survive the crop.** A screenshot of your post travels without your name, your outlet, or your caveats. Put the source inside the sentence rather than in a following line, and put the date inside the post rather than relying on a timestamp that will not travel with it.

**The uncertainty problem is sharper here.** A caveat in a second post is a caveat most people never see, which is the same argument the verification course made about closing paragraphs, in a harsher environment. If a claim is unconfirmed, it says so in the same post, or it waits.

**Do not launder a lower standard through a faster format.** The pressure to post early is real and the standard does not move. Confidence levels, attribution, and the decision not to publish all apply exactly as they do to a filed story, and a reporter who is careful on the site and loose on a platform has one reputation, not two.

**What social does that is genuinely valuable.** It reaches people who will never visit your site. It surfaces sources, because somebody who recognizes a detail will say so. It lets you show working: the document, the page, the thing you could not resolve. And it is where corrections have to go, because that is where the error travelled.

**Platforms change and the discipline does not.** This course names no platform and no format specification, because both date within a year, and a course that taught the current shape of a product would be teaching something wrong by the time somebody took it. What does not change: self-contained, sourced in-sentence, uncertainty in the same post, and the same standard as everything else.

**And write for a reader who is not on your beat.** The person who sees the post has not read the eleven pieces before it. One clause of context is the difference between a post that informs and a post that only makes sense to people who already knew.

:::reveal Why must a social post be self-contained? ||| It is read without the site's context, out of order, by people who did not seek it, and frequently without the piece it links to.

:::reveal Why does attribution go inside the sentence rather than on a following line? ||| Because a screenshot travels without your name, your outlet, or your caveats, so anything on a separate line does not survive the crop.

:::reveal Why does this course name no platform or format specification? ||| Both date within a year, and a course teaching the current shape of a product would be wrong by the time somebody took it. The discipline does not date.

## Vocabulary
- **Social-first**: reporting built for where it will be read rather than trimmed to fit afterward.
- **Surviving the crop**: putting source and date inside the sentence so a screenshot carries them.
- **Same-post uncertainty**: stating what is unconfirmed in the post carrying the claim, never in a follow-up.
- **Showing working**: publishing the document, the page, and the unresolved question alongside the claim.

## Sources
- Free Press Indiana. (n.d.). *Women and girls reporter* [Job posting]. https://www.freepressindiana.org/jobs/women-girls-reporter
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "short-video",
      title: "11 · Short video: what the camera has to be for",
      section: "Section 3 · The formats",
      body: `Video is the format reporters most often produce because it is expected rather than because the story needs it, and the result is a piece that would have been better as three sentences.

**The question that justifies the camera.** Is there something that must be seen? A place, a scale, a process, a document, a distance, an expression that a sentence cannot carry. If the answer is no, the video is a person reading a story aloud, and a reader who wanted the story would rather have read it.

**Five things video does that text cannot.** Show a place so a viewer understands its size or its emptiness. Show a process happening in sequence. Show scale by comparison, which numbers do badly. Show a document being handled, which makes its existence concrete. And carry a voice, where how something is said is part of what is being said.

**The interviewing course applies with an amplifier.** Somebody appearing on camera is identifiable permanently, to everybody, including people searching for them years later. The consent conversation therefore includes the camera specifically: that they will be recognizable, that it will be online indefinitely, and that you cannot remove it later. Somebody who agreed to be quoted has not agreed to be filmed.

**The minimum standard for a piece of short reporting video.** It states what it is about in the first few seconds, because most viewers decide there. It attributes on screen, because sound is frequently off. It carries the date. It does not use music to create an emotional register the reporting has not earned. And it is captioned, because captions are an accessibility requirement rather than a preference.

**What to shoot when you are not sure.** The place, wide and steady, for longer than feels necessary. The process, without narration. The document, on a flat surface. And an interview in a quiet room with the subject positioned so you could crop to any shape. Those four cover most of what a short piece needs and none of them require equipment beyond a phone and something to steady it.

**And do not let the format decide the finding.** A story with no visual is not a smaller story, and a story with a strong visual is not a bigger one. Choosing what to report because it will look good on camera is the same error as choosing a length because the work was long, arriving from a different direction.

:::reveal What question justifies the camera? ||| Is there something that must be seen: a place, a scale, a process, a document, a distance, an expression that a sentence cannot carry.

:::reveal How does the consent conversation change for video? ||| It names the camera specifically: that they will be recognizable, that it will be online indefinitely, and that it cannot be removed. Agreeing to be quoted is not agreeing to be filmed.

:::reveal Why must a short reporting video be captioned and attribute on screen? ||| Captions are an accessibility requirement, and sound is frequently off, so on-screen attribution is the only attribution many viewers receive.

## Vocabulary
- **The must-be-seen test**: whether the story contains something a sentence cannot carry, which is what justifies video.
- **Camera consent**: a consent conversation naming recognizability, permanence, and the impossibility of removal.
- **On-screen attribution**: sourcing shown visually, because sound is frequently off.
- **Format-led reporting**: choosing what to report because it will look good, which is a decision about the reporter.

## Sources
- Free Press Indiana. (n.d.). *Women and girls reporter* [Job posting]. https://www.freepressindiana.org/jobs/women-girls-reporter
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-the-formats",
      title: "12 · Knowledge check: the formats",
      section: "Section 3 · The formats",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is a newsletter, in this lesson's framing?",
            options: [
              "A recurring relationship with a list",
              "A distribution channel for stories already published on the site",
              "A summary of the week's coverage sent to subscribers",
              "A promotional product managed by the audience team",
            ],
            correctIndex: 0,
            explanation:
              "Treating it as distribution wastes what makes it different.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "Which of these does a newsletter do that a story cannot?",
            options: [
              "Arrive on a schedule, letting a beat accumulate in public",
              "Reach readers who have never visited the outlet's site",
              "Carry documents the site cannot host",
              "Publish material before it has been edited",
            ],
            correctIndex: 0,
            explanation:
              "With a known audience, a permitted voice including uncertainty, and reachability.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What belongs in a newsletter that does not belong in a story?",
            options: [
              "What you are working on and what you could not confirm",
              "Claims that did not meet the site's evidentiary standard",
              "The reporter's personal opinions about the subjects covered",
              "Material the desk declined to publish for legal reasons",
            ],
            correctIndex: 0,
            explanation:
              "With the document that does not carry a piece, the correction explained, the ask of readers, and context a newcomer lacks.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What is the four-part shape for a beat newsletter?",
            options: [
              "One thing explained, the week in short, what is coming, one ask",
              "A headline, three links, a photograph, and a sign-off",
              "An editorial, a news roundup, a reader letter, and a preview",
              "A long essay, a correction, an advertisement, and a subscribe link",
            ],
            correctIndex: 0,
            explanation:
              "It is repeatable, it takes a morning, and readers learn where to find what they want in it.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "How is the frequency question answered honestly?",
            options: [
              "Whatever you can sustain for a year",
              "Weekly, which is what subscribers expect",
              "Daily, since the beat produces material every day",
              "Whenever there is enough material to justify sending",
            ],
            correctIndex: 0,
            explanation:
              "A weekly that becomes fortnightly and then stops is worse than a fortnightly that runs for two years.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "Why is reachability the point rather than a side effect?",
            options: [
              "A newsletter with an open reply address is a listening surface that scales",
              "Because subscribers expect a personal response to every message",
              "Because reply rates are the measure most outlets track",
              "Because replies substitute for community meetings on a beat",
            ],
            correctIndex: 0,
            explanation:
              "The listening lesson asked for time where people gather. This is one of those places, and it scales in a way a room does not.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What are the two things that ruin a beat newsletter?",
            options: [
              "Writing it as a press release, and publishing sub-standard material in it",
              "Sending it too often, and writing it too long",
              "Using a personal voice, and admitting uncertainty",
              "Linking to competitors, and answering reader mail",
            ],
            correctIndex: 0,
            explanation:
              "Everything in a newsletter is published, and the confidence levels from the verification course apply unchanged.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What does social-first mean?",
            options: [
              "The reporting is built for the place it will be read",
              "The story is published on social platforms before the site",
              "The reporting is sourced primarily from social platforms",
              "The audience team distributes the piece before the desk edits it",
            ],
            correctIndex: 0,
            explanation:
              "Rather than trimmed to fit afterward, which is what the posting's request for social literacy actually requires.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "Why must a social post be self-contained?",
            options: [
              "It is read without the site's context, out of order, often without the link",
              "Because platforms penalize posts that carry external links",
              "Because outlets require each post to stand as a separate publication",
              "Because readers cannot access paywalled pieces from a post",
            ],
            correctIndex: 0,
            explanation:
              "What happened, who says so, and what is uncertain, inside the post rather than behind a link.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "Why does attribution go inside the sentence?",
            options: [
              "A screenshot travels without your name, outlet, or caveats",
              "Because platforms strip metadata from shared images",
              "Because a following line exceeds the character limit",
              "Because readers do not scroll past the first line",
            ],
            correctIndex: 0,
            explanation:
              "So the date goes inside the post too, rather than relying on a timestamp that will not travel with it.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "Where does uncertainty go in a social post?",
            options: [
              "In the same post as the claim",
              "In a following post in the same thread",
              "In the linked piece, where there is room to explain",
              "In a reply, once somebody questions the claim",
            ],
            correctIndex: 0,
            explanation:
              "A caveat in a second post is one most people never see, which is the closing-paragraph problem in a harsher environment.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What does the lesson say about the pressure to post early?",
            options: [
              "It is real and the standard does not move",
              "It justifies a lower confidence threshold for platform material",
              "It is managed by the audience team rather than the reporter",
              "It applies only to breaking news and not to beat coverage",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who is careful on the site and loose on a platform has one reputation, not two.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What does social genuinely do that is valuable?",
            options: [
              "Reaches people who will never visit your site and surfaces sources",
              "Increases the outlet's advertising revenue per published piece",
              "Substitutes for the community listening the beat course requires",
              "Establishes priority over competitors working the same story",
            ],
            correctIndex: 0,
            explanation:
              "With showing working, and being where corrections have to go because that is where the error travelled.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "Why does the course name no platform and no format specification?",
            options: [
              "Both date within a year",
              "Because platforms prohibit describing their features in training",
              "Because outlets choose platforms centrally rather than per reporter",
              "Because the professional code forbids endorsing commercial products",
            ],
            correctIndex: 0,
            explanation:
              "A course teaching the current shape of a product would be wrong by the time somebody took it. The discipline does not date.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What does the lesson say about writing for a reader not on your beat?",
            options: [
              "One clause of context separates informing from confusing",
              "Beat context should be omitted so the post stays short",
              "The linked piece supplies the context the post cannot",
              "Regular readers should be prioritized over incidental ones",
            ],
            correctIndex: 0,
            explanation:
              "The person who sees the post has not read the eleven pieces before it.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What question justifies the camera?",
            options: [
              "Is there something that must be seen",
              "Is the subject willing to appear on camera",
              "Does the desk expect video with this kind of story",
              "Will the piece perform better with a visual element",
            ],
            correctIndex: 0,
            explanation:
              "If the answer is no, the video is a person reading a story aloud, and a reader who wanted the story would rather have read it.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "Which of these does video do that text cannot?",
            options: [
              "Show scale by comparison, which numbers do badly",
              "Establish the sequence in which decisions were made",
              "Attribute a claim to its original source document",
              "Present the strongest available objection to a finding",
            ],
            correctIndex: 0,
            explanation:
              "With showing a place's size or emptiness, a process in sequence, a document being handled, and a voice where how something is said is part of what is said.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "How does the consent conversation change for video?",
            options: [
              "It names recognizability, permanence, and the impossibility of removal",
              "It requires a signed release before filming can begin",
              "It transfers to the outlet's legal team rather than the reporter",
              "It is unnecessary where filming occurs in a public place",
            ],
            correctIndex: 0,
            explanation:
              "Somebody who agreed to be quoted has not agreed to be filmed.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "Why must a short reporting video attribute on screen?",
            options: [
              "Sound is frequently off",
              "Because platforms require visible sourcing",
              "Because captions cannot carry attribution",
              "Because viewers cannot pause to read a description",
            ],
            correctIndex: 0,
            explanation:
              "On-screen attribution is the only attribution many viewers receive.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "Why must a short reporting video be captioned?",
            options: [
              "Captions are an accessibility requirement rather than a preference",
              "Because sound quality is unreliable on a phone recording",
              "Because platforms rank captioned material more highly",
              "Because captions substitute for on-screen attribution",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the five minimum standards, with stating the subject early, attributing on screen, carrying the date, and not using music to create an unearned register.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "What does the lesson say about music in a reporting video?",
            options: [
              "Do not use it to create a register the reporting has not earned",
              "Use it to hold attention through the opening seconds",
              "Use only music licensed by the outlet for editorial work",
              "Avoid it entirely, since any music is editorializing",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the five minimum standards for a piece of short reporting video.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "What four things does the lesson say to shoot when unsure?",
            options: [
              "The place wide, the process without narration, the document flat, an interview croppable",
              "The subject's face, their hands, the building exterior, and a wide street",
              "An establishing shot, a mid shot, a close-up, and a cutaway",
              "The reporter's introduction, the interview, the location, and a closing piece to camera",
            ],
            correctIndex: 0,
            explanation:
              "None of them require equipment beyond a phone and something to steady it.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "What error does format-led reporting repeat?",
            options: [
              "Choosing a length because the work was long",
              "Choosing a source because they were available",
              "Choosing a deadline because the desk set one",
              "Choosing a shape because the desk expects it",
            ],
            correctIndex: 0,
            explanation:
              "A story with no visual is not a smaller story, and a story with a strong visual is not a bigger one.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "Where does the first-few-seconds rule come from?",
            options: [
              "Most viewers decide there",
              "Platform algorithms weight the opening segment",
              "Captioning tools index only the opening text",
              "Editors review only the opening in the approval process",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the piece states what it is about immediately rather than building to it.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "What does a newsletter permit that news conventions largely exclude?",
            options: [
              "A voice, including uncertainty",
              "A longer word count for the same subject",
              "Unattributed material from confidential sources",
              "Advocacy for a position on the beat",
            ],
            correctIndex: 0,
            explanation:
              "What you are working on, what you could not confirm, and the correction explained.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What does a newsletter's known audience allow?",
            options: [
              "Writing for people rather than for everyone",
              "Publishing material the site would not carry",
              "Omitting attribution the audience already knows",
              "Assuming agreement with the beat's framing",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the four things the format does that a story cannot.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "Where does a surprising share of a beat's tips come from?",
            options: [
              "The reporter being reachable through the newsletter",
              "The comments section beneath published pieces",
              "The outlet's general tip line",
              "Sources introduced by other reporters",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the reply-to address reaching a person is part of the design rather than an afterthought.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "How long does the four-part newsletter take to produce?",
            options: [
              "A morning",
              "A full working day each week",
              "Two days, since it requires original reporting",
              "As long as a filed story of comparable length",
            ],
            correctIndex: 0,
            explanation:
              "Which is what makes it sustainable, and sustainability is the whole answer to the frequency question.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What is the fastest way to make a newsletter the place your unverified material lives?",
            options: [
              "Publishing things there that did not meet the site's standard",
              "Sending it more often than you can sustain",
              "Writing it in a personal voice rather than a reported one",
              "Answering reader replies individually",
            ],
            correctIndex: 0,
            explanation:
              "Everything in a newsletter is published, and the confidence levels apply unchanged.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What is showing working, on social?",
            options: [
              "Publishing the document, the page, and what you could not resolve",
              "Explaining the reporting process in a long thread",
              "Posting drafts before the piece is edited",
              "Naming the sources who declined to comment",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the four things social genuinely does well, with reach, source surfacing, and corrections.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "Why must corrections go to social?",
            options: [
              "That is where the error travelled",
              "Because platforms require correction of inaccurate posts",
              "Because the site's correction is not indexed by search",
              "Because readers expect corrections in the format they read",
            ],
            correctIndex: 0,
            explanation:
              "Which is the verification course's point about pushing a correction rather than posting one.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What does the lesson say about a reporter careful on the site and loose on a platform?",
            options: [
              "They have one reputation, not two",
              "They are following the outlet's separate standards for each",
              "They are correctly adapting to different audiences",
              "They are protected because platform posts are not published work",
            ],
            correctIndex: 0,
            explanation:
              "Confidence levels, attribution, and the decision not to publish all apply exactly as they do to a filed story.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What does social do that the beat course's listening work also does?",
            options: [
              "Surfaces sources, because somebody who recognizes a detail says so",
              "Establishes trust with communities over a period of years",
              "Provides material that can be quoted without further contact",
              "Replaces the need for a protected listening block",
            ],
            correctIndex: 0,
            explanation:
              "It reaches people who will never visit the site, which is a different reach from the room.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What is the must-be-seen test?",
            options: [
              "Whether the story contains something a sentence cannot carry",
              "Whether the subject will consent to being filmed",
              "Whether the outlet has equipment available",
              "Whether the desk has commissioned a visual element",
            ],
            correctIndex: 0,
            explanation:
              "A place, a scale, a process, a document, a distance, an expression.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "Which does video carry that text handles badly?",
            options: [
              "Scale by comparison",
              "The chronology of a decision",
              "The strength of competing evidence",
              "The provenance of a document",
            ],
            correctIndex: 0,
            explanation:
              "Numbers do scale badly, which is one of the five things video does that text cannot.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "Why does filming amplify the interviewing course's rules?",
            options: [
              "Somebody on camera is identifiable permanently, to everybody",
              "Because filmed interviews cannot be conducted off the record",
              "Because a camera changes what a source is willing to say",
              "Because outlets retain footage longer than written notes",
            ],
            correctIndex: 0,
            explanation:
              "Including people searching for them years later, which is the durability point the interviewing course made about names.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "What equipment do the four default shots require?",
            options: [
              "A phone and something to steady it",
              "A camera, a tripod, and an external microphone",
              "A two-camera setup for interviews",
              "A lighting kit and a lens set",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the four cover most of what a short piece needs without a production request.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "How should the interview be framed when you are not sure of the final shape?",
            options: [
              "So you could crop to any shape",
              "As tightly as possible on the subject's face",
              "Wide, to include the location behind them",
              "With the reporter visible in the frame",
            ],
            correctIndex: 0,
            explanation:
              "Because the format the piece finally takes may not be the one you expected when you shot it.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "What does the lesson say about a story with no visual?",
            options: [
              "It is not a smaller story",
              "It should be reshaped until a visual is available",
              "It should be published only as text and never promoted",
              "It should be handed to a colleague who can film it",
            ],
            correctIndex: 0,
            explanation:
              "And a story with a strong visual is not a bigger one, which is why format-led reporting is the same error as effort-led length.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "Which format lesson does the Free Press posting's social and video literacy request sit behind?",
            options: [
              "Both the social-first and short-video lessons",
              "Only the newsletter lesson, which covers direct audiences",
              "Only the short-video lesson, since video is the specialist skill",
              "None of them, since the posting concerns enterprise work",
            ],
            correctIndex: 0,
            explanation:
              "It is why the format lessons are in the track rather than treated as somebody else's specialism.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What kind of surface does an open reply address make a newsletter?",
            options: [
              "A listening surface",
              "A distribution surface",
              "A correction surface",
              "A verification surface",
            ],
            correctIndex: 0,
            explanation:
              "And it scales in a way a room does not, which is why it complements rather than replaces the protected listening block.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What does the newsletter's third section carry?",
            options: [
              "What is coming, from the beat calendar",
              "A summary of the previous edition",
              "Reader replies received during the week",
              "A list of the outlet's other newsletters",
            ],
            correctIndex: 0,
            explanation:
              "The beat calendar built in REPORT-00 supplies it, which is one more return on maintaining that inventory.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What is the fourth section of the beat newsletter shape?",
            options: [
              "One thing you want from readers",
              "A closing note about the reporter's week",
              "A link to the outlet's subscription page",
              "A correction to the previous edition",
            ],
            correctIndex: 0,
            explanation:
              "Which is what converts a broadcast into a relationship, and what makes the reply address worth having.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What does the lesson say a reader detects immediately?",
            options: [
              "A newsletter written as a press release for your own work",
              "A newsletter published on an irregular schedule",
              "A newsletter that admits what could not be confirmed",
              "A newsletter that links to a competitor's coverage",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the two things that ruin a beat newsletter.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What travels without a timestamp?",
            options: [
              "A screenshot of a post",
              "A link shared in a private message",
              "A quoted paragraph in another story",
              "A video clip uploaded by the outlet",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the date goes inside the post rather than being left to a platform's display.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What is the discipline that does not date, when platforms do?",
            options: [
              "Self-contained, sourced in-sentence, uncertainty in the same post, same standard",
              "Posting at times when the audience is most active",
              "Adapting each piece to the platform's current format specification",
              "Maintaining separate accounts for beat and personal material",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the course names no platform and no format specification.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What does a video that fails the must-be-seen test amount to?",
            options: [
              "A person reading a story aloud",
              "A shorter version of the filed piece",
              "An accessible alternative for some readers",
              "A promotional item for the main story",
            ],
            correctIndex: 0,
            explanation:
              "And a reader who wanted the story would rather have read it.",
            sourceLessonSlug: "short-video",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "one-story-many-shapes",
      title: "13 · One story, several shapes, one set of facts",
      section: "Section 4 · Holding it together",
      body: `A single piece of reporting frequently becomes a story, a newsletter, a set of posts, and a short video. Doing that well is a specific skill, and doing it badly produces four versions that disagree with each other.

**One fact base, versioned once.** Every output draws on the same decomposed claim list and the same confidence levels. When a fact changes, it changes in the list first and then in every output, which is why the list is the artifact rather than the draft.

**Each version answers the same question differently, not a different question.** The video shows what must be seen. The posts carry the finding and the source. The newsletter carries the working, the uncertainty, and the invitation. The story carries the whole thing with its evidence. If one of them is making a claim the others do not support, that is not a format difference, it is an error.

**Decide the set at the pitch.** Which outputs, in what order, and what each is for. This is a resourcing question, as the pitch lesson said, and it also decides what you gather: you cannot make the video afterward if nobody filmed the place.

**Sequencing that works.** The social posts and the story go together, because a post pointing at nothing wastes the attention it earned. The newsletter follows within a few days, carrying what did not fit and what you still want. The video runs whenever it is ready, because it is usually the slowest and it does not expire the way a news post does.

**The correction problem multiplies.** An error corrected in the story and not in the posts is still live where most people saw it. Keep a list of every place a version was published, and when something is corrected, correct all of them and say what changed. The verification course called this pushing a correction, and multi-format publishing is where the pushing actually matters.

**And do not produce a version that has nothing to do.** Four outputs are not a target. If the only reason for the video is that video was expected, it will be a person reading the story aloud, which the last lesson already ruled out. Three good versions and a fourth that was not made is a better week's work than four in which one is filler.

:::reveal What is the artifact that every version of a story draws on? ||| The decomposed claim list with its confidence levels, which is where a fact changes first and from which every output is updated.

:::reveal What is it when one version makes a claim the others do not support? ||| An error, rather than a difference of format. Each version answers the same question differently, not a different question.

:::reveal Why does the correction problem multiply across formats? ||| An error corrected in the story and not in the posts is still live where most people saw it, so every place a version was published has to be listed and corrected.

## Vocabulary
- **One fact base**: a single claim list with confidence levels, from which every format is derived.
- **Version set**: the outputs decided at the pitch, in order, each with a stated job.
- **Publication list**: the record of everywhere a version appeared, used when a correction has to be pushed.
- **Filler version**: an output produced because it was expected rather than because it has something to do.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "working-with-editors",
      title: "14 · Working with an editor, and the revision that improves it",
      section: "Section 4 · Holding it together",
      body: `Most reporters treat editing as something done to a piece. Treating it as a process you run is the difference between a draft that gets better and one that gets shorter.

**Tell the editor what you have before you file.** The question, what you established, what you could not, and where you are least sure. Two minutes, before they read it, and it converts their read from a hunt into an assessment. It also protects the piece: an editor who does not know a sentence is single-sourced may harden it.

**Ask for the kind of read you need.** Structure, accuracy, or line. Asking for all three at once produces a line edit on a piece whose shape is wrong, which wastes both of you. Structure first, always, because a shape change makes the line work moot.

**Distinguish an editor's three kinds of note.** This is unclear, which is nearly always right and is your problem to solve. This is wrong, which is a factual dispute and gets resolved against the file rather than by discussion. And I would have done it differently, which is a preference and can be discussed, agreed, or declined.

**Defend the load-bearing things and concede the rest.** A caveat that belongs in the sentence, a confidence level, an attribution, and the limitations section are load-bearing, and the earlier courses explain why each one is. A word choice, a paragraph order, and a headline you prefer are not. A reporter who fights everything loses the arguments that matter.

**Headlines are written by somebody else and are your problem anyway.** Ask to see it before publication, check that the piece supports it, and if it does not, say which sentence in the piece contradicts it. That is a factual objection rather than a preference, and it is treated differently.

**Revision that improves a piece, in three passes.** First, the structure pass: does the shape match what the reader must be able to do. Second, the evidence pass: is every claim at the confidence level the file supports and labeled accordingly. Third, the line pass: shorter, plainer, and with the qualifiers where they belong. Doing them in that order is what stops a beautifully written paragraph surviving into a piece it does not belong in.

**And ask afterward what would have made it better.** Once, after publication, without defending anything. It is the shortest professional development available and almost nobody does it.

:::reveal What should an editor be told before they read the draft? ||| The question, what you established, what you could not, and where you are least sure. It converts their read from a hunt into an assessment.

:::reveal Name the editor's three kinds of note and what each requires. ||| This is unclear, which is your problem to solve. This is wrong, resolved against the file. And I would have done it differently, which is a preference to discuss, agree, or decline.

:::reveal What are the three revision passes, in order? ||| Structure, evidence, then line. Doing them in that order stops a well-written paragraph surviving into a piece it does not belong in.

## Vocabulary
- **The pre-file briefing**: two minutes telling an editor the question, the findings, the gaps, and the least certain point.
- **Kind of read**: structure, accuracy, or line, requested one at a time and in that order.
- **Load-bearing note**: a caveat, confidence level, attribution, or limitation, defended because an earlier course explains why.
- **The three passes**: structure, evidence, line, run in that sequence.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-portfolio",
      title: "15 · A year of work, and what a beat looks like from outside",
      section: "Section 4 · Holding it together",
      body: `The last thing to say about form is that a beat is judged as a body of work, and a body of work has a shape nobody deliberately chose unless somebody looks at it.

**Read your own year, once a year.** Every piece, in order, with its shape and its subject. The pattern is visible immediately and it is almost never what the reporter expected: too many of one form, three months on a subject that produced nothing, a community named in the beat memo that appears twice.

**What the review catches that nothing else does.** Whether the year answered the beat memo's questions. Whether the quote audit's distribution held up over twelve months rather than one. Whether the response coverage and the accountability coverage actually paired the way REPORT-06 described. And whether anything you published would be worth revisiting because the situation moved.

**A portfolio is not a highlight reel.** For a job application it is five or six pieces that show range and rigor rather than the six that got the most attention, with a line on each saying what it required: this one is the records fight, this one is the data, this one is the interview nobody else got, this one is the thing I could not confirm and said so.

**What the Free Press posting is actually describing.** Quick-turn dailies and enterprise projects, social and video literacy, AP style, travel across a state, and relationships built on equal trust. Read as a portfolio requirement rather than a wish list, that is somebody asking for evidence of a beat held over time in more than one form, which is exactly what a year reviewed this way produces.

**Keep the artifacts, not only the clips.** The beat memo and its revisions, the request log, the signal log, the refused pitches, and the corrections. Together they are the honest record of the work, they are what makes the next year's planning real, and they are what a reporter has when the clips are behind a paywall at an outlet they no longer work for.

**Where the track ends.** The capstone asks you to run the whole method once, on a beat you choose: a records request, a data report read properly, two interviews, one quick-turn story, one enterprise pitch, and a written note of what you could not confirm. Everything in the seven courses before it exists to make that possible.

:::reveal What does the annual review of your own year catch that nothing else does? ||| Whether the year answered the beat memo's questions, whether the source distribution held over twelve months, whether the response and accountability coverage paired, and what is worth revisiting.

:::reveal What is a portfolio, if not a highlight reel? ||| Five or six pieces showing range and rigor, each with a line saying what it required: the records fight, the data, the interview nobody else got, the thing you could not confirm and said so.

:::reveal Which artifacts should a reporter keep besides clips, and why? ||| The beat memo and revisions, the request log, the signal log, the refused pitches, and the corrections. They are the honest record and they survive a paywall at a former employer.

## Vocabulary
- **Annual read**: reviewing every piece of a year in order, with its shape and subject, to see the pattern nobody chose.
- **Portfolio**: a selection showing range and rigor, annotated with what each piece required.
- **Artifacts**: the memo, logs, refused pitches, and corrections, which outlast access to the clips.
- **The capstone**: running the whole method once on a beat of your choosing, which the seven prior courses exist to enable.

## Sources
- Free Press Indiana. (n.d.). *Women and girls reporter* [Job posting]. https://www.freepressindiana.org/jobs/women-girls-reporter
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-holding-it-together",
      title: "16 · Knowledge check: holding it together",
      section: "Section 4 · Holding it together",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What do all versions of a story draw on?",
            options: [
              "One decomposed claim list with its confidence levels",
              "The filed draft of the main story, which the others summarize",
              "The reporter's notes from the original interviews",
              "The pitch, which specifies what each version will say",
            ],
            correctIndex: 0,
            explanation:
              "When a fact changes it changes in the list first, which is why the list is the artifact rather than the draft.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "How do the versions differ from each other?",
            options: [
              "They answer the same question differently, not a different question",
              "They report different findings suited to different audiences",
              "They carry different confidence levels for the same claims",
              "They cover different parts of the subject with no overlap",
            ],
            correctIndex: 0,
            explanation:
              "If one is making a claim the others do not support, that is an error rather than a format difference.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What does each version carry?",
            options: [
              "Video what must be seen, posts the finding, newsletter the working, story the evidence",
              "Video the interview, posts the headline, newsletter the links, story the quotes",
              "Video the emotion, posts the urgency, newsletter the opinion, story the facts",
              "Video the scene, posts the reaction, newsletter the analysis, story the context",
            ],
            correctIndex: 0,
            explanation:
              "Each does what its form does best, without any of them claiming something the fact base does not support.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "When is the version set decided?",
            options: [
              "At the pitch",
              "After the reporting, when the material is known",
              "At the editing stage, with the desk",
              "After publication, based on how the story performs",
            ],
            correctIndex: 0,
            explanation:
              "It is a resourcing question and it decides what you gather: you cannot make the video afterward if nobody filmed the place.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "Why do the social posts and the story go together?",
            options: [
              "A post pointing at nothing wastes the attention it earned",
              "Because platforms deprioritize posts published before the article",
              "Because the desk requires simultaneous publication",
              "Because a post published first cannot be corrected later",
            ],
            correctIndex: 0,
            explanation:
              "The newsletter follows within a few days and the video runs whenever it is ready, because it does not expire the way a news post does.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "Why does the correction problem multiply across formats?",
            options: [
              "An error fixed in the story is still live where most people saw it",
              "Because each format has a different correction policy",
              "Because platform corrections require the original to be deleted",
              "Because video cannot be edited once published",
            ],
            correctIndex: 0,
            explanation:
              "Keep a list of every place a version was published, correct all of them, and say what changed.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What is a filler version?",
            options: [
              "An output produced because it was expected rather than because it has a job",
              "A shortened version published while the main piece is edited",
              "A version produced by the audience team rather than the reporter",
              "A version that repeats the story with different quotations",
            ],
            correctIndex: 0,
            explanation:
              "Three good versions and a fourth that was not made is a better week's work than four in which one is filler.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What should an editor be told before they read a draft?",
            options: [
              "The question, what you established, what you could not, and where you are least sure",
              "The word count, the deadline, and the intended placement",
              "The sources used and whether each agreed to be named",
              "The competing coverage and how this piece differs from it",
            ],
            correctIndex: 0,
            explanation:
              "Two minutes, and it converts their read from a hunt into an assessment. It also stops an editor hardening a single-sourced sentence.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "Which kind of read is asked for first, and why?",
            options: [
              "Structure, because a shape change makes line work moot",
              "Accuracy, because errors are the most costly to fix",
              "Line, because it can be done fastest",
              "All three at once, to save the editor's time",
            ],
            correctIndex: 0,
            explanation:
              "Asking for all three at once produces a line edit on a piece whose shape is wrong, which wastes both of you.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What are the editor's three kinds of note?",
            options: [
              "This is unclear, this is wrong, and I would have done it differently",
              "Cut this, expand this, and move this",
              "Legal, factual, and stylistic",
              "Approved, revise, and reject",
            ],
            correctIndex: 0,
            explanation:
              "The first is nearly always right and is yours to solve, the second is resolved against the file, and the third is a preference.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "How is a this-is-wrong note resolved?",
            options: [
              "Against the file rather than by discussion",
              "By the editor's judgment, which is final",
              "By seeking a second opinion from the desk",
              "By softening the sentence until both agree",
            ],
            correctIndex: 0,
            explanation:
              "It is a factual dispute, and the decomposed claim list with its sourcing chain is what settles it.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "Which notes are load-bearing?",
            options: [
              "A caveat's placement, a confidence level, an attribution, and the limitations",
              "Word choice, paragraph order, and the headline",
              "Length, section breaks, and pull quotes",
              "Anything the reporter feels strongly about",
            ],
            correctIndex: 0,
            explanation:
              "Each has an earlier course explaining why. A reporter who fights everything loses the arguments that matter.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "How should a headline objection be framed?",
            options: [
              "As a factual objection, naming the sentence that contradicts it",
              "As a preference, so the desk can weigh it against theirs",
              "As a request to be consulted on future headlines",
              "As a legal concern, which gets priority attention",
            ],
            correctIndex: 0,
            explanation:
              "Headlines are written by somebody else and are your problem anyway, and a factual objection is treated differently from a preference.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What are the three revision passes, in order?",
            options: [
              "Structure, evidence, line",
              "Line, structure, evidence",
              "Evidence, line, structure",
              "Structure, line, evidence",
            ],
            correctIndex: 0,
            explanation:
              "Doing them in that order stops a beautifully written paragraph surviving into a piece it does not belong in.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What does the evidence pass check?",
            options: [
              "That every claim sits at the confidence level the file supports",
              "That every source has been contacted for comment",
              "That every document has been archived",
              "That every figure has been recalculated",
            ],
            correctIndex: 0,
            explanation:
              "And is labeled accordingly, which is the verification course's level-first wording applied at revision.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What is the shortest professional development available?",
            options: [
              "Asking afterward what would have made the piece better",
              "Reading the outlet's style guide once a year",
              "Attending an editing workshop",
              "Comparing your piece against a competitor's",
            ],
            correctIndex: 0,
            explanation:
              "Once, after publication, without defending anything, and almost nobody does it.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What does the annual read of your own year consist of?",
            options: [
              "Every piece, in order, with its shape and its subject",
              "The five strongest pieces, selected for a portfolio",
              "The pieces that attracted the largest audiences",
              "The corrections issued during the twelve months",
            ],
            correctIndex: 0,
            explanation:
              "The pattern is visible immediately and it is almost never what the reporter expected.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What does the annual review catch that nothing else does?",
            options: [
              "Whether the year answered the beat memo's questions",
              "Whether the outlet allocated enough space to the beat",
              "Whether competing outlets covered the same subjects",
              "Whether the reporter met the desk's output targets",
            ],
            correctIndex: 0,
            explanation:
              "With whether the quote audit's distribution held over twelve months, whether response and accountability coverage paired, and what is worth revisiting.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What is a portfolio, if not a highlight reel?",
            options: [
              "Five or six pieces showing range and rigor, each annotated",
              "Every piece published during the previous year",
              "The pieces that generated the most audience response",
              "The pieces the outlet promoted most heavily",
            ],
            correctIndex: 0,
            explanation:
              "With a line on each saying what it required: the records fight, the data, the interview nobody else got, the thing you could not confirm.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What is the Free Press posting describing, read as a portfolio requirement?",
            options: [
              "Evidence of a beat held over time in more than one form",
              "A preference for candidates from within the state",
              "A minimum number of published clips per year",
              "Familiarity with a particular content management system",
            ],
            correctIndex: 0,
            explanation:
              "Quick-turn dailies and enterprise projects, social and video literacy, style, travel, and relationships built on equal trust.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "Which artifacts should a reporter keep besides clips?",
            options: [
              "The beat memo and revisions, the request log, the signal log, refused pitches, corrections",
              "Interview recordings, transcripts, and source contact details",
              "Editor correspondence, contracts, and expense records",
              "Audience analytics, referral data, and engagement reports",
            ],
            correctIndex: 0,
            explanation:
              "They are the honest record of the work, and they are what a reporter has when the clips are behind a paywall at a former employer.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What does the capstone ask for?",
            options: [
              "A records request, a data report read properly, two interviews, a quick-turn, a pitch, and a note",
              "A single enterprise investigation with named sources",
              "A portfolio of six published pieces from one beat",
              "A beat memo and a year of maintained logs",
            ],
            correctIndex: 0,
            explanation:
              "On a beat you choose, and everything in the seven courses before it exists to make that possible.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What does the pre-file briefing protect the piece from?",
            options: [
              "An editor hardening a sentence they did not know was single-sourced",
              "A headline written without reference to the body",
              "A cut that removes the limitations section",
              "A legal review that delays publication",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the two minutes are spent before the read rather than in response to the notes.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What does asking for all three kinds of read at once produce?",
            options: [
              "A line edit on a piece whose shape is wrong",
              "A faster turnaround from a busy desk",
              "A more thorough review of the evidence",
              "An editor who understands the whole project",
            ],
            correctIndex: 0,
            explanation:
              "Which wastes both of you, and is why structure is asked for first.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "Which note is nearly always right?",
            options: [
              "This is unclear",
              "This is wrong",
              "I would have done it differently",
              "This should be shorter",
            ],
            correctIndex: 0,
            explanation:
              "And it is your problem to solve rather than a dispute to have.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "Which of these is not load-bearing?",
            options: [
              "A paragraph order you prefer",
              "A caveat that belongs in the sentence",
              "The confidence level of a claim",
              "The limitations section of a response piece",
            ],
            correctIndex: 0,
            explanation:
              "Concede the preferences and defend the things an earlier course explains the reason for.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What is the version set?",
            options: [
              "The outputs decided at the pitch, in order, each with a stated job",
              "The drafts a piece passes through during editing",
              "The formats the outlet publishes in each week",
              "The platforms a story is distributed to after publication",
            ],
            correctIndex: 0,
            explanation:
              "It is a resourcing question, and it decides what you gather.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "Which version does not expire the way a news post does?",
            options: [
              "The video",
              "The social posts",
              "The newsletter",
              "The filed story",
            ],
            correctIndex: 0,
            explanation:
              "Which is why it runs whenever it is ready, and it is usually the slowest to produce.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What is the publication list for?",
            options: [
              "Knowing everywhere a version appeared when a correction has to be pushed",
              "Reporting the story's reach to the desk after publication",
              "Establishing priority over competing outlets",
              "Satisfying the outlet's archiving requirements",
            ],
            correctIndex: 0,
            explanation:
              "Multi-format publishing is where the verification course's point about pushing a correction actually matters.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What does the newsletter carry in a multi-format set?",
            options: [
              "The working, the uncertainty, and the invitation",
              "The full evidence with its sourcing chain",
              "The visual material the video could not use",
              "A shortened version of the filed story",
            ],
            correctIndex: 0,
            explanation:
              "Which is what the format permits that the news conventions largely exclude.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What does the lesson say about four outputs as a target?",
            options: [
              "They are not a target",
              "They are the minimum for an enterprise project",
              "They are what the posting's format literacy requires",
              "They are what the desk expects from protected time",
            ],
            correctIndex: 0,
            explanation:
              "If the only reason for the video is that video was expected, it will be a person reading the story aloud.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What is almost never what the reporter expected?",
            options: [
              "The pattern in a year's work read in order",
              "The desk's assessment of the year's output",
              "The audience's response to the beat's coverage",
              "The subjects competitors chose to cover",
            ],
            correctIndex: 0,
            explanation:
              "Too many of one form, three months on a subject that produced nothing, a named community that appears twice.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What does the annual read check about the quote audit?",
            options: [
              "Whether its distribution held up over twelve months rather than one",
              "Whether the audit was run every month without exception",
              "Whether the categories were applied consistently",
              "Whether the desk agreed with the categorization",
            ],
            correctIndex: 0,
            explanation:
              "A monthly check can look fine and a year can still show a pattern the months did not.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What annotation belongs on each portfolio piece?",
            options: [
              "A line saying what it required",
              "The audience figures it achieved",
              "The editor who commissioned it",
              "The date and outlet of publication",
            ],
            correctIndex: 0,
            explanation:
              "The records fight, the data, the interview nobody else got, the thing you could not confirm and said so.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "Why do the artifacts matter more than the clips over time?",
            options: [
              "Clips end up behind a paywall at an outlet you no longer work for",
              "Clips are edited after publication without the reporter's knowledge",
              "Clips do not show which pieces required the most work",
              "Clips cannot be shared with prospective employers",
            ],
            correctIndex: 0,
            explanation:
              "And the artifacts are what makes the next year's planning real.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What does the course say every version's claim must be traceable to?",
            options: [
              "The same fact base",
              "The same named source",
              "The same published document",
              "The same editor's approval",
            ],
            correctIndex: 0,
            explanation:
              "Versioned once, so a change happens in the claim list and then propagates.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What follows the story within a few days in the recommended sequencing?",
            options: [
              "The newsletter",
              "The video",
              "A second round of social posts",
              "A follow-up piece",
            ],
            correctIndex: 0,
            explanation:
              "Carrying what did not fit and what you still want, which is what the format is for.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "How long is the pre-file briefing?",
            options: [
              "Two minutes",
              "A written memo of about a page",
              "A scheduled meeting with the desk",
              "As long as the editor needs to read the draft",
            ],
            correctIndex: 0,
            explanation:
              "Before they read it, and it converts the read from a hunt into an assessment.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What is the line pass for?",
            options: [
              "Shorter, plainer, and the qualifiers where they belong",
              "Checking every claim against the sourcing chain",
              "Confirming the shape matches the reader's need",
              "Writing the headline and the opening sentence",
            ],
            correctIndex: 0,
            explanation:
              "It is the third of the three passes, and doing it before the structure pass wastes it.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What is the structure pass asking?",
            options: [
              "Does the shape match what the reader must be able to do",
              "Are the sections in the order the desk expects",
              "Is every paragraph the same length",
              "Does the piece fit the allocated word count",
            ],
            correctIndex: 0,
            explanation:
              "Which is the after-draft test from the shape lesson, run as the first revision pass.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What does the lesson say about defending everything?",
            options: [
              "A reporter who fights everything loses the arguments that matter",
              "It establishes the reporter's authority over the piece",
              "It is expected in a healthy reporter-editor relationship",
              "It protects the piece against unnecessary cuts",
            ],
            correctIndex: 0,
            explanation:
              "Concede the preferences and defend the caveat, the confidence level, the attribution, and the limitations.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What is the honest way to ask for feedback after publication?",
            options: [
              "Once, without defending anything",
              "In writing, so the response can be filed",
              "During the next pitch conversation",
              "Only when the piece attracted criticism",
            ],
            correctIndex: 0,
            explanation:
              "Which is what makes it the shortest professional development available and why almost nobody does it.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What does a body of work have unless somebody looks at it?",
            options: [
              "A shape nobody deliberately chose",
              "A consistent standard across every piece",
              "A record the outlet maintains automatically",
              "An audience that follows it continuously",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the year is read once a year, in order, with each piece's shape and subject noted.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "Which artifact records what you tried to do and could not get published?",
            options: [
              "The refused-pitch file",
              "The signal log",
              "The request log",
              "The beat memo",
            ],
            correctIndex: 0,
            explanation:
              "It is the honest record of what you have been trying to do with your beat.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What is the last thing the course says about form?",
            options: [
              "A beat is judged as a body of work",
              "A beat is judged by its strongest single piece",
              "A beat is judged by how many formats it uses",
              "A beat is judged by the audience it reaches",
            ],
            correctIndex: 0,
            explanation:
              "And a body of work has a shape nobody deliberately chose unless somebody looks at it.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "Where does everything in the seven courses lead?",
            options: [
              "The capstone, run once on a beat of your choosing",
              "A published portfolio suitable for job applications",
              "A newsletter with a sustainable subscriber base",
              "A beat memo revised twice a year",
            ],
            correctIndex: 0,
            explanation:
              "A records request, a data report read properly, two interviews, one quick-turn story, one enterprise pitch, and a note of what you could not confirm.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "What does the course say a wrong shape costs at revision?",
            options: [
              "The line work done before the structure pass",
              "The evidence check, which has to be repeated",
              "The headline, which must be rewritten from scratch",
              "The version set, which was decided at the pitch",
            ],
            correctIndex: 0,
            explanation:
              "Which is why structure comes first and why asking an editor for all three reads at once wastes the line edit.",
            sourceLessonSlug: "working-with-editors",
          },
        ],
      },
    },
    {
      slug: "final-pitch-and-shapes",
      title: "17 · Final: the pitch, and the shapes a story can take",
      section: "Section 4 · Holding it together",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What is a pitch?",
            options: [
              "A proposal an editor can act on",
              "A summary of everything the reporter has learned about a subject so far",
              "A draft of the opening section of the piece the reporter intends to write",
              "A request for permission to begin looking into a promising subject",
            ],
            correctIndex: 0,
            explanation:
              "It answers feasibility, cost, timing, and displacement rather than summarizing what you know.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What five things is an editor deciding?",
            options: [
              "Story, gettability, cost, timing, displacement",
              "Accuracy, balance, fairness, legal safety, and quality of writing",
              "Which desk owns it, who edits it, and who will copy-edit the result",
              "Source count, word count, placement, and promotional support",
            ],
            correctIndex: 0,
            explanation:
              "A pitch answering none of them has given a reader something interesting and a decision-maker nothing.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "What are the two most common pitch failures?",
            options: [
              "A topic rather than a question, and a conclusion not yet reported",
              "Too much detail, and too little supporting material attached",
              "The wrong editor, and the wrong time of the publishing week",
              "Excessive length, and an unclear statement of the fee expected",
            ],
            correctIndex: 0,
            explanation:
              "A topic cannot be commissioned, and editors say yes to a question you can answer rather than a finding you are hoping for.",
            sourceLessonSlug: "what-a-pitch-is",
          },
          {
            prompt: "Which part of the five-part pitch separates it from an idea?",
            options: [
              "What you already have",
              "The question, stated in a single specific sentence at the top",
              "The cost in weeks and money, with the intended publication window",
              "The line about what a reader will understand afterward",
            ],
            correctIndex: 0,
            explanation:
              "The document, the data set, the sources who agreed, the pattern in the file.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "Why does a pitch include its own failure condition?",
            options: [
              "A pitch that cannot imagine failing is less credible",
              "Because outlets require a written exit clause before commissioning",
              "Because it limits the reporter's exposure if the project collapses",
              "Because editors must record why an enterprise project ended",
            ],
            correctIndex: 0,
            explanation:
              "Saying what would make you stop protects the editor's decision as much as your own.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What is the sentence editors remember?",
            options: [
              "What the reader will be able to do or understand afterward",
              "How many weeks the reporting will take once it is approved",
              "Which competing outlet is already working on the subject",
              "How many sources have already agreed to speak on the record",
            ],
            correctIndex: 0,
            explanation:
              "One line at the end, and it is what gets the pitch approved in a room you are not in.",
            sourceLessonSlug: "the-enterprise-pitch",
          },
          {
            prompt: "What is the constraint on an internal pitch, and on a cold one?",
            options: [
              "Capacity, and trust",
              "Trust, and capacity",
              "Legal risk, and audience demand",
              "Timing, and length",
            ],
            correctIndex: 0,
            explanation:
              "Which is why an internal pitch leads with cost and displacement and a cold one leads with the question and the strongest thing you have.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "Which refusal is frequently an invitation?",
            options: [
              "Not now",
              "Not a story, which is a judgment about the idea itself",
              "Not for us, which is a judgment about fit with the outlet",
              "We already have this, which is about the outlet's own plans",
            ],
            correctIndex: 0,
            explanation:
              "It is about timing, so the idea comes back rather than needing to be reworked or rehomed.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What single question follows a refusal?",
            options: [
              "Was it the idea or the fit",
              "Would you consider a substantially shorter version of it",
              "Is there another editor at the outlet who might take it",
              "What would you need to see before you would say yes",
            ],
            correctIndex: 0,
            explanation:
              "The answer is usually a sentence, and it tells you whether to rework the pitch or send it elsewhere.",
            sourceLessonSlug: "pitching-and-refusal",
          },
          {
            prompt: "What question decides a story's shape?",
            options: [
              "What the reader needs to be able to do at the end",
              "How much material the reporting produced across the whole project",
              "Which form the desk usually expects from stories on this beat",
              "How much space the outlet has allocated for the piece",
            ],
            correctIndex: 0,
            explanation:
              "Habit, desk expectation, and volume all produce pieces that fight their own contents.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "Why is volume of material the wrong input?",
            options: [
              "Six interviews do not require six voices",
              "Because material is cut during editing regardless of how much there is",
              "Because the desk decides length before the reporting begins",
              "Because editors judge a piece by its sourcing rather than its length",
            ],
            correctIndex: 0,
            explanation:
              "A long piece produced because the work was long is a decision about the reporter rather than about the reader.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "Why choose the shape at the pitch stage?",
            options: [
              "The reporting is then aimed at what the shape requires",
              "Because editors will not commission an unspecified form",
              "Because the shape determines the fee paid for freelance work",
              "Because the desk allocates its space by format in advance",
            ],
            correctIndex: 0,
            explanation:
              "A narrative needs scenes and access, a data piece needs the export and the dictionary, and an explainer needs somebody who can explain.",
            sourceLessonSlug: "shape-follows-question",
          },
          {
            prompt: "What is the news story's failure mode?",
            options: [
              "Flattening",
              "The news peg bending the explanation out of its proper shape",
              "An anecdote carrying an argument that it cannot actually support",
              "An unchallenged single voice whose claims required checking",
            ],
            correctIndex: 0,
            explanation:
              "A sequence, a mechanism, or a dispute compressed into the back half where a reader never reaches it.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is the narrative's failure mode?",
            options: [
              "An anecdote carrying an argument it cannot support",
              "A mechanism explained without any current news peg attached",
              "A pattern asserted without publishing the underlying data set",
              "An outcome stated before the sequence that actually produced it",
            ],
            correctIndex: 0,
            explanation:
              "One family's experience standing in for a population without the reporting that would justify it.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "Why do confidence levels matter most in live coverage?",
            options: [
              "An early error never catches up with the readers who saw it",
              "Because live pieces are corrected less frequently than filed ones",
              "Because editors cannot review live copy before it is published",
              "Because live coverage reaches a larger audience than filed work",
            ],
            correctIndex: 0,
            explanation:
              "So the labeling has to be right at the moment of publication rather than at the end.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What does the course say about hybrid shapes?",
            options: [
              "Fine, provided the piece can still say which shape it is",
              "Best avoided, because a piece should commit to a single form",
              "Required for enterprise work, which no single shape can carry",
              "Acceptable only where the desk has approved the combination",
            ],
            correctIndex: 0,
            explanation:
              "A piece that cannot name its own shape has usually not decided what the reader needs.",
            sourceLessonSlug: "the-shapes",
          },
          {
            prompt: "What is length, in this course?",
            options: [
              "A decision, not a residue",
              "A consequence of how much reporting was completed in the time",
              "A limit set by the desk before the assignment is made",
              "A function of which format the finished piece takes",
            ],
            correctIndex: 0,
            explanation:
              "Treating it as a residue is how a beat produces pieces nobody finishes.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What is the stop-anywhere structure?",
            options: [
              "A reader can stop at any point and have gained something coherent",
              "A piece divided into sections readable in any order the reader chooses",
              "A piece whose every paragraph contains one complete factual claim",
              "A piece that restates its central finding at regular intervals",
            ],
            correctIndex: 0,
            explanation:
              "Essential material in the first quarter, with the rest rewarding continuation rather than being required for comprehension.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "Why does the course print no audience-attention figures?",
            options: [
              "It has not read those measurements against their sources",
              "Because such measurements are proprietary to individual outlets",
              "Because reader attention cannot be measured reliably at all",
              "Because the professional code discourages the use of metrics",
            ],
            correctIndex: 0,
            explanation:
              "Your own outlet's analytics describe your readers rather than an aggregate somebody else published.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What reliably makes a piece too long?",
            options: [
              "Reporting that was hard to get and does not serve the question",
              "Context the reader needs that the reporter has come to find obvious",
              "Quotations kept because the sources agreed to speak on the record",
              "Sections the editor requested during the revision process",
            ],
            correctIndex: 0,
            explanation:
              "Cut it and keep the file, because the beat file is where unused material becomes the next story.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "When are the headline and first sentence written?",
            options: [
              "Last, from the finished piece",
              "First, so that the reporting can be aimed toward them",
              "During the structure pass of the revision sequence",
              "By the desk rather than by the reporter at any stage",
            ],
            correctIndex: 0,
            explanation:
              "And checked so each is supported by what follows, since more people read them than read anything else.",
            sourceLessonSlug: "length-and-attention",
          },
          {
            prompt: "What is a newsletter?",
            options: [
              "A recurring relationship with a list",
              "A distribution channel for stories already published on the site",
              "A weekly summary of the outlet's coverage sent to subscribers",
              "A promotional product owned by the audience development team",
            ],
            correctIndex: 0,
            explanation:
              "Treating it as distribution wastes the schedule, the known audience, the permitted voice, and the reachability.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What is the honest answer to the frequency question?",
            options: [
              "Whatever you can sustain for a year",
              "Weekly, because that is the cadence subscribers expect",
              "Daily, since a working beat produces material every day",
              "Whenever enough material has accumulated to justify sending",
            ],
            correctIndex: 0,
            explanation:
              "The value is entirely in accumulation and expectation, so a fortnightly that lasts beats a weekly that stops.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "What are the two things that ruin a beat newsletter?",
            options: [
              "Writing it as a press release, and publishing sub-standard material in it",
              "Sending it too frequently, and allowing it to run too long",
              "Using a personal voice, and admitting what could not be confirmed",
              "Linking to competitors, and replying to reader correspondence",
            ],
            correctIndex: 0,
            explanation:
              "Everything in a newsletter is published, and the confidence levels apply unchanged.",
            sourceLessonSlug: "newsletter",
          },
          {
            prompt: "Why must a social post be self-contained?",
            options: [
              "It is read without context, out of order, often without the link",
              "Because platforms penalize posts that carry external links",
              "Because outlets require every post to stand as separate publication",
              "Because paywalled pieces cannot be reached from a platform post",
            ],
            correctIndex: 0,
            explanation:
              "What happened, who says so, and what is uncertain, inside the post itself.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "Why does attribution go inside the sentence?",
            options: [
              "A screenshot travels without your name, outlet, or caveats",
              "Because platforms remove metadata from images that are shared",
              "Because a following line would exceed the character limit",
              "Because readers do not scroll beyond the opening line",
            ],
            correctIndex: 0,
            explanation:
              "The date goes inside the post for the same reason, rather than relying on a timestamp.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "Where does uncertainty go in a social post?",
            options: [
              "In the same post as the claim",
              "In a following post within the same published thread",
              "In the linked piece, where there is room to explain properly",
              "In a reply, once a reader has questioned the claim",
            ],
            correctIndex: 0,
            explanation:
              "A caveat in a second post is one most people never see, which is the closing-paragraph problem in a harsher environment.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "Why does the course name no platform or format specification?",
            options: [
              "Both date within a year",
              "Because platforms prohibit describing their features in training material",
              "Because outlets select platforms centrally rather than per reporter",
              "Because the professional code forbids endorsing commercial products",
            ],
            correctIndex: 0,
            explanation:
              "Self-contained, sourced in-sentence, uncertainty in the same post, and the same standard as everything else do not date.",
            sourceLessonSlug: "social-first",
          },
          {
            prompt: "What question justifies the camera?",
            options: [
              "Is there something that must be seen",
              "Is the subject willing to appear on camera for the piece",
              "Does the desk expect a video with this kind of story",
              "Will the piece perform better with a visual element attached",
            ],
            correctIndex: 0,
            explanation:
              "If not, the video is a person reading a story aloud, and a reader who wanted the story would rather have read it.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "How does the consent conversation change for video?",
            options: [
              "It names recognizability, permanence, and the impossibility of removal",
              "It requires a signed release before any filming can begin",
              "It transfers to the outlet's legal team rather than the reporter",
              "It is unnecessary where the filming takes place in public",
            ],
            correctIndex: 0,
            explanation:
              "Somebody who agreed to be quoted has not agreed to be filmed.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "Why must a short reporting video attribute on screen and carry captions?",
            options: [
              "Sound is frequently off, and captions are an accessibility requirement",
              "Because platforms rank captioned material more prominently",
              "Because the outlet's style guide requires visible sourcing",
              "Because viewers cannot pause the video to read a description",
            ],
            correctIndex: 0,
            explanation:
              "Two of the five minimum standards, with stating the subject early, carrying the date, and not using music to create an unearned register.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "What error does format-led reporting repeat?",
            options: [
              "Choosing a length because the work was long",
              "Choosing a source because they were the easiest to reach",
              "Choosing a deadline because the desk had already set one",
              "Choosing a shape because the desk habitually expects it",
            ],
            correctIndex: 0,
            explanation:
              "A story with no visual is not a smaller story, and a story with a strong visual is not a bigger one.",
            sourceLessonSlug: "short-video",
          },
          {
            prompt: "What do all versions of a story draw on?",
            options: [
              "One decomposed claim list with its confidence levels",
              "The filed draft of the main story, which the others condense",
              "The reporter's notes from the interviews conducted for it",
              "The pitch, which specifies in advance what each version says",
            ],
            correctIndex: 0,
            explanation:
              "A fact changes in the list first and then in every output, which is why the list is the artifact rather than the draft.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What is it when one version makes a claim the others do not support?",
            options: [
              "An error",
              "A legitimate difference between the demands of two formats",
              "A sign that the version was produced by a different person",
              "A consequence of the shorter formats losing necessary detail",
            ],
            correctIndex: 0,
            explanation:
              "Each version answers the same question differently, not a different question.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "Why does the correction problem multiply across formats?",
            options: [
              "An error fixed in the story is still live where most people saw it",
              "Because each format is governed by a separate correction policy",
              "Because platform corrections require deleting the original post",
              "Because video cannot be edited once it has been published",
            ],
            correctIndex: 0,
            explanation:
              "Keep a list of every place a version was published, correct all of them, and say what changed.",
            sourceLessonSlug: "one-story-many-shapes",
          },
          {
            prompt: "What should an editor be told before they read a draft?",
            options: [
              "The question, what you established, what you could not, and your least sure point",
              "The word count, the deadline, and the placement you would prefer",
              "The sources used, and whether each of them agreed to be named",
              "The competing coverage, and how this piece differs from it",
            ],
            correctIndex: 0,
            explanation:
              "It converts their read from a hunt into an assessment, and stops an editor hardening a single-sourced sentence.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What are the editor's three kinds of note?",
            options: [
              "This is unclear, this is wrong, and I would have done it differently",
              "Cut this, expand this, and move this to a different position",
              "Legal, factual, and stylistic, in descending order of priority",
              "Approved, revise before filing, and reject outright",
            ],
            correctIndex: 0,
            explanation:
              "The first is yours to solve, the second is resolved against the file, and the third is a preference to discuss.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What are the three revision passes, in order?",
            options: [
              "Structure, evidence, line",
              "Line, then structure, then a final evidence check",
              "Evidence, then line, then structure at the end",
              "Structure, then line, then evidence before filing",
            ],
            correctIndex: 0,
            explanation:
              "Doing them in that order stops a well-written paragraph surviving into a piece it does not belong in.",
            sourceLessonSlug: "working-with-editors",
          },
          {
            prompt: "What is a portfolio, if not a highlight reel?",
            options: [
              "Five or six pieces showing range and rigor, each annotated",
              "Every piece the reporter published during the previous year",
              "The pieces that generated the largest measured audience response",
              "The pieces the outlet chose to promote most heavily",
            ],
            correctIndex: 0,
            explanation:
              "With a line on each: the records fight, the data, the interview nobody else got, the thing you could not confirm and said so.",
            sourceLessonSlug: "the-portfolio",
          },
          {
            prompt: "Which artifacts outlast a reporter's access to their own clips?",
            options: [
              "The beat memo, the logs, the refused pitches, and the corrections",
              "The published pieces themselves, archived by the outlet indefinitely",
              "The interview recordings and transcripts held on personal devices",
              "The audience analytics showing how each piece performed",
            ],
            correctIndex: 0,
            explanation:
              "They are the honest record of the work, and they are what a reporter has when the clips sit behind a paywall at a former employer.",
            sourceLessonSlug: "the-portfolio",
          },
        ],
      },
    },
  ],
};
