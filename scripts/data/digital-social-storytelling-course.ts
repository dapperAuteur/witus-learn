// Authored "Digital and social storytelling" — STORY-D1, the Distributed track
// (docs/storytelling-curriculum.md).
//
// THE TRACK'S DISCIPLINE, per the curriculum map: attention is not given, it is re-earned every few
// seconds. That is a genuinely different craft problem from the True and Performed tracks, where the
// audience has committed by sitting down or pressing play on something long.
//
// THE TRAP THIS COURSE HAD TO AVOID, and it is the reason the course is built the way it is. A
// course about "social media storytelling" naturally becomes a course about a platform, and a course
// about a platform is obsolete in eighteen months and teaches nothing transferable. So the spine
// here is the STRUCTURAL consequence of distribution — the algorithmic middle, the cold open, the
// loop, the sound-off default, serialization, the comment section as part of the text — and platform
// specifics appear only as illustrations, labelled as of 2026-08 and framed as instances of a
// durable constraint. No follower counts, no growth tactics, no "the algorithm rewards X" claims
// dressed as fact: those are the parts that rot, and the catalog's marketing rule forbids
// fabricated efficacy claims anyway.
//
// The six spine terms are used unchanged. Where the field has its own word (hook, retention, the
// loop) it is named and mapped back rather than replacing them.

import type { AuthoredCourse } from "./authored-course";

export const DIGITAL_SOCIAL_STORYTELLING_COURSE: AuthoredCourse = {
  title: "Digital and social storytelling",
  description:
    "Every other form in this series gets an audience that has already agreed to pay attention. This one does not: attention is re-earned every few seconds, by someone holding a phone, sound off, mid-scroll, who did not choose your story and can leave at no cost. This course teaches what that constraint does to structure rather than what any platform currently rewards. The cold open and why the first three seconds are a structural problem and not a trick, the loop, designing for sound-off, the algorithmic middle that stands between a maker and an audience, serialization and the promise a series makes, comments as part of the text rather than a reaction to it, the ethics of a form built for spread including the corrections problem, and what survives a platform's death. Built on the six decisions from How Stories Work, with platform specifics labeled and dated because they are the part that rots.",
  lessons: [
    {
      slug: "ds-the-constraint",
      title: "1 · The constraint: attention is re-earned, not given",
      section: "Module 1 · The constraint",
      body: `Every other form in this series starts with an audience who has already agreed. Someone bought a ticket, sat down in a theatre, opened an archive, pressed play on a ninety-minute film. **That agreement is worth more than any technique**, and this form does not have it.

**Your actual audience, described honestly:** one person, holding a phone, probably in bed or in a queue, **sound off**, who did not choose your story, who was shown it, and who can leave at zero cost by moving a thumb a few millimetres.

**What that changes, and each one is structural rather than stylistic**

| Constraint | Structural consequence |
| --- | --- |
| They did not choose it | You have no credit. **Every second is auditioned** |
| Leaving is free | There is no sunk cost holding them. A slow patch is not a slow patch, it is an exit |
| Sound is off by default | **Meaning must survive muting** |
| The container repeats | The end is adjacent to the beginning, which is a structural fact you can use |
| An algorithm chose them | You are not addressing an audience you assembled |

**The thing to get straight immediately: this is a CONSTRAINT, not a lower standard.** Constraint is what the short-form drama course was about, and the argument is the same one. **A sonnet is not a degraded poem.** The six-second attention budget is a formal limit, and formal limits produce the most disciplined work in any medium because there is no room to be vague.

**And the corollary that runs through the whole course:** the techniques here are structural responses to a real constraint, and the moment you use them without the constraint they become tics. A cold open on a form nobody scrolls is just an abrupt start.

**Where the six decisions land, compressed.** All of them apply and the budget is brutal:

- **The change** must be visible, not inferred. There is no room for a change a viewer has to reconstruct afterwards.
- **The owner** must be identifiable in the first shot. **A viewer who cannot tell whose story this is has no reason to stay.**
- **Want and obstacle** in one line or one image, frequently before any dialogue.
- **Withholding** is the entire engine, and this is the form where it is most naked: a question opened in second one, answered in second twenty, is the whole architecture.
- **Scene almost always.** Summary is a luxury of forms with runtime.
- **The turn** arrives early and hard, usually well before the midpoint.

**What this course will NOT teach**, stated up front so you know what you are getting: how to grow an account, what any platform currently rewards, or the optimal posting hour. **Those are true for about eighteen months and they are not craft.** The structural problems here have been the same since the form existed and will outlive every app named in it.

:::reveal Why does this course call the short attention budget a constraint rather than a lower standard? ||| Because a formal limit is not a degradation: a sonnet is not a degraded poem, and the short-form drama course made the same argument, that constraint forces structure because there is no room to be vague. The audience's freedom to leave at no cost removes every place a maker could have been slack, which is a harder discipline than a committed audience imposes rather than an easier one. The corollary is that these techniques are responses to a real constraint, so using them where the constraint is absent turns them into tics.

## Sources
- Jenkins, H., Ford, S., & Green, J. (2013). *Spreadable media: Creating value and meaning in a networked culture*. New York University Press. https://lccn.loc.gov/2012028526
- Bordwell, D., & Thompson, K. (2020). *Film art: An introduction* (12th ed.). McGraw-Hill. https://lccn.loc.gov/2018039565`,
    },
    {
      slug: "ds-cold-open-and-loop",
      title: "2 · The cold open, the loop, and the sound-off default",
      section: "Module 1 · The constraint",
      recallContent: [
        {
          prompt: "Name three structural consequences of an audience that did not choose your story and can leave for free.",
          answer:
            "Any three of: every second is auditioned because you have no credit; a slow patch is an exit rather than a slow patch, since there is no sunk cost; meaning must survive muting because sound is off by default; the end sits next to the beginning because the container repeats; you are not addressing an audience you assembled.",
        },
      ],
      body: `Three techniques, each a direct structural answer to a constraint from Lesson 1, and each ruined by being applied as a formula.

**1. The cold open.** Begin inside the situation. No throat-clearing, no "hi everyone", no logo, no explanation of what you are about to do. **The first frame contains the owner and the want, or it contains a question.**

Why it works structurally rather than as a trick: **a viewer who does not know what is at stake has no reason to spend the next second finding out.** The cold open supplies stakes before it supplies context, and context is retrofitted while they are already watching.

The commonest failure: **the setup that explains the setup.** "So today I want to talk about something that happened to me last week" is four seconds spent telling someone that something is coming, which is four seconds they could have spent watching it.

**A better test than any rule:** cut your first five seconds and see whether anything is lost. Frequently the piece starts better. Do it again.

**2. The loop.** Short-form containers replay. **The end is adjacent to the beginning**, which means the join is a location in the work and you can either ignore it or compose it.

- **The clean loop:** the last frame matches the first, so a rewatch is seamless. Novelty, and it works once per audience.
- **The productive loop, which is the real one:** the ending gives the viewer information that changes what the opening meant, **so the rewatch is a different experience.** This is withholding used across the join, and it is the most sophisticated move the form has.
- **The false loop:** withholding the payoff so a viewer has to rewatch to catch it. **It buys a second view and spends trust**, and audiences have learned to recognize it. Use once, if at all.

**3. Sound-off design.** Assume muted. Not because sound does not matter, but because **the first decision to keep watching is made before anyone turns it on.**

- **Captions, always**, and this is an accessibility floor before it is a retention technique. Get them right rather than autogenerated: a wrong caption is worse than none because it asserts something false.
- **Meaning in the image.** If the joke is in the audio, the joke does not exist for most of your audience.
- **Text on screen, but early and short.** Text that arrives after the decision point is decoration.
- **Design for sound when it IS on.** Muted is the default, not the ceiling: a piece that rewards unmuting is better than one that ignores audio.

**And the honest caveat about all three.** These are responses to constraints, and constraints differ by container and change over time. **When the constraint changes, the technique should change with it**, which is why this lesson taught the constraint first and the technique second, and why you should be suspicious of anyone teaching the reverse.

:::reveal What is a productive loop, and how does it differ from a false one? ||| A productive loop is an ending that gives the viewer information which changes what the opening meant, so a rewatch is a genuinely different experience: it is withholding used across the join between end and beginning, and it is the most sophisticated move the form has. A false loop withholds the payoff so the viewer must rewatch to catch it at all, which buys a second view at the cost of trust, and audiences have learned to recognize the manoeuvre. The first rewards the rewatch; the second requires it.

## Sources
- Bordwell, D., & Thompson, K. (2020). *Film art: An introduction* (12th ed.). McGraw-Hill. https://lccn.loc.gov/2018039565
- World Wide Web Consortium. (2023). *Web content accessibility guidelines (WCAG) 2.2*. W3C. https://www.w3.org/TR/WCAG22/`,
    },
    {
      slug: "ds-algorithmic-middle",
      title: "3 · The algorithmic middle",
      section: "Module 1 · The constraint",
      body: `Between you and your audience sits a system that decides who sees your work. **It is not a distribution channel. It is an editor you cannot talk to**, and understanding it structurally matters more than knowing any current rule.

**What is durably true, whatever any platform is doing this year:**

1. **You do not choose your audience; a system selects it.** So you cannot assume shared context, and a piece that requires knowing who you are will fail with most of the people shown it.
2. **The selection optimises for something, and it is not your goal.** Platforms optimise for engagement of some kind. **Your goals and that objective overlap partially, never completely**, and the gap is where the pressure lives.
3. **The pressure is real and it is on the WORK.** The form that gets distributed gets imitated, which is how an entire medium comes to sound the same. Naming it is the defense.
4. **It changes without notice, and nobody outside knows why.** Which is exactly why a course built on current rules would be worthless to you.

**What follows for the work, and this is the practical content:**

- **Assume no shared context.** Every piece stands alone. A serialised story still needs each part to be comprehensible cold.
- **Do not build a body of work on one platform's mechanics.** They change, and the work does not port.
- **Notice when you are optimising against your own point.** The sharpest version of this: **the change your story is about and the reaction the system rewards are not always the same change.** A piece about ambivalence performs worse than a piece about certainty. That is a real pressure toward certainty, and it is the mechanism, not a conspiracy.
- **Metrics measure the system's objective, not your work's quality.** A piece that reached few people may be the best thing you made. **This is not consolation, it is a measurement fact**: you are reading the optimiser's scorecard, not an audience's verdict.

**On "the algorithm rewards X" claims.** Treat every one you hear as unverified. They come from small samples, they conflate correlation with mechanism, they are frequently sold, and they were true for a different version of the system. **This course makes no claims about what any platform currently rewards**, and you should hold every course that does to the question: how do you know, and when did you check?

**The one durable strategic answer**, and it is unglamorous: **build something that survives the middle.** An audience that follows you somewhere you control, a body of work that means something as a body, a craft that transfers. Everything else is renting.

:::reveal What does it mean to say the metrics measure the system's objective rather than your work's quality? ||| That the number you are shown is the optimiser's scorecard for its own goal, usually engagement of some kind, and your goal overlaps with that partially and never completely. So a piece that reached few people may be the best thing you made, and this is a measurement fact rather than consolation. The practical consequence is noticing when you start optimising against your own point: a story about ambivalence tends to perform worse than one about certainty, which is a real structural pressure toward certainty rather than a conspiracy.

## Sources
- Jenkins, H., Ford, S., & Green, J. (2013). *Spreadable media: Creating value and meaning in a networked culture*. New York University Press. https://lccn.loc.gov/2012028526
- Gillespie, T. (2018). *Custodians of the internet: Platforms, content moderation, and the hidden decisions that shape social media*. Yale University Press. https://doi.org/10.12987/9780300235029`,
    },
    {
      slug: "ds-quiz-1",
      title: "4 · Knowledge check: the constraint",
      section: "Module 1 · The constraint",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course say is worth more than any technique, and which this form lacks?",
            options: [
              "An audience who has already agreed to pay attention",
              "A budget large enough to hire an experienced production crew",
              "A platform account with an established following",
              "Enough runtime to establish characters before the story begins",
            ],
            correctIndex: 0,
            explanation:
              "Someone bought a ticket, sat down, pressed play on ninety minutes. Without that agreement you have no credit and every second is auditioned.",
            sourceLessonSlug: "ds-the-constraint",
          },
          {
            prompt: "Why is a slow patch a structural problem rather than a pacing one here?",
            options: [
              "Platforms penalise pieces that lose viewers partway through",
              "There is no sunk cost holding a viewer, so a slow patch is an exit",
              "Short pieces have no room for variation in pace at all",
              "Viewers rewatch slow sections, which distorts the loop",
            ],
            correctIndex: 1,
            explanation:
              "Leaving is free. In a form the audience has committed to, a slow patch is endured; here it is the moment they go.",
            sourceLessonSlug: "ds-the-constraint",
          },
          {
            prompt: "Which of the six decisions does this course call the entire engine of the form?",
            options: [
              "The change, which must be visible rather than inferred",
              "Scene and summary, since summary is a luxury of longer forms",
              "The turn, which arrives well before the midpoint",
              "Withholding: a question opened in second one, answered in second twenty",
            ],
            correctIndex: 3,
            explanation:
              "It is the form where withholding is most naked, because the whole architecture is one question held open across a very short span.",
            sourceLessonSlug: "ds-the-constraint",
          },
          {
            prompt: "What does a cold open supply before it supplies context?",
            options: [
              "Stakes, which context is then retrofitted around while they watch",
              "Production credits, so authorship is established immediately",
              "A statement of what the piece is going to be about",
              "The setting, so the viewer can orient themselves geographically",
            ],
            correctIndex: 0,
            explanation:
              "A viewer who does not know what is at stake has no reason to spend the next second finding out. The commonest failure is the setup that explains the setup.",
            sourceLessonSlug: "ds-cold-open-and-loop",
          },
          {
            prompt: "What is a productive loop?",
            options: [
              "A last frame that matches the first, so the replay is seamless",
              "An ending that changes what the opening meant, so a rewatch differs",
              "A payoff withheld so the viewer must watch twice to catch it",
              "A piece edited to a length that divides evenly into the container",
            ],
            correctIndex: 1,
            explanation:
              "It is withholding used across the join between end and beginning. The false loop, by contrast, requires the rewatch rather than rewarding it, and spends trust to buy a view.",
            sourceLessonSlug: "ds-cold-open-and-loop",
          },
          {
            prompt: "Why does the course say to design for sound off?",
            options: [
              "Audio compression degrades sound quality on most platforms",
              "Music rights make original audio impractical for most makers",
              "Captions rank a piece higher in platform recommendation systems",
              "The decision to keep watching is made before anyone unmutes",
            ],
            correctIndex: 3,
            explanation:
              "Muted is the default rather than the ceiling: a piece that rewards unmuting is better than one that ignores audio. Captions are an accessibility floor before they are a retention technique.",
            sourceLessonSlug: "ds-cold-open-and-loop",
          },
          {
            prompt: "Why does the course call the recommendation system an editor rather than a channel?",
            options: [
              "It decides who sees the work, and you cannot talk to it",
              "It applies published editorial standards to every submission",
              "It commissions work directly from established creators",
              "It requires makers to submit pieces for approval before posting",
            ],
            correctIndex: 0,
            explanation:
              "Understanding it structurally matters more than knowing any current rule, because the rules change without notice and nobody outside knows why.",
            sourceLessonSlug: "ds-algorithmic-middle",
          },
          {
            prompt: "What is the durable relationship between a platform's objective and yours?",
            options: [
              "They are aligned, since platforms want creators to succeed",
              "They overlap partially and never completely, and the gap is the pressure",
              "They are opposed, so any platform success indicates weak work",
              "They are unrelated, so the objective can safely be ignored",
            ],
            correctIndex: 1,
            explanation:
              "The clearest instance: a piece about ambivalence performs worse than one about certainty, which is a real pressure toward certainty rather than a conspiracy.",
            sourceLessonSlug: "ds-algorithmic-middle",
          },
          {
            prompt: "How should you treat a claim that 'the algorithm rewards X'?",
            options: [
              "As reliable if it comes from a creator with a large following",
              "As reliable if several independent creators report the same effect",
              "As unverified: ask how they know and when they last checked",
              "As reliable for the platform's current version but not future ones",
            ],
            correctIndex: 2,
            explanation:
              "Such claims come from small samples, conflate correlation with mechanism, are frequently sold, and were true for a different version of the system.",
            sourceLessonSlug: "ds-algorithmic-middle",
          },
          {
            prompt: "What does the course offer as the one durable strategic answer?",
            options: [
              "Post consistently enough that the system learns your account",
              "Build something that survives the middle: an audience and body of work you control",
              "Specialize in whichever format the platforms currently favor",
              "Match your output to the length the container is optimised for",
            ],
            correctIndex: 1,
            explanation:
              "An audience you can reach elsewhere, work that means something as a body, and craft that transfers. Everything else is renting.",
            sourceLessonSlug: "ds-algorithmic-middle",
          },
        ],
      },
    },
    {
      slug: "ds-serialization",
      title: "5 · Serialization, and the promise a series makes",
      section: "Module 2 · Structure and audience",
      recallContent: [
        {
          prompt: "State the two structural facts about the recommendation system that follow for the work itself.",
          answer:
            "Assume no shared context, because a system selected your audience rather than you assembling it, so every piece must stand alone. And do not build a body of work on one platform's mechanics, because they change without notice and the work does not port.",
        },
      ],
      body: `A single piece is one problem. **A series is a different one**, because it makes a promise, and every subsequent part is either keeping it or breaking it.

**Two shapes, and choosing the wrong one is the commonest serialization mistake**

**The anthology.** Each part is complete. The promise is *a kind of thing*: the same voice, the same subject, the same reliable pleasure. **Order does not matter**, which suits the algorithmic middle exactly, because a viewer will meet part fourteen first.

**The serial.** Parts build; there is one change across the whole. The promise is *the resolution*. **Order matters, and that is a real cost** in a distribution system that will show someone part seven with no idea part one exists.

**The hybrid, which is what most work that survives actually is:** each part self-contained, with an accumulating story for people who follow. It costs more to write. It is nearly always right.

**Structuring a serial for a system that ignores your order**

- **Number the parts, visibly.** Cheap, and it tells a stranger there is a shape.
- **Re-establish in the first seconds, every time.** Who this is and what is at stake. **Regulars tolerate a five-second recap far better than strangers tolerate confusion.**
- **Make every part contain its own change.** Even inside one arc, a part with no change is an episode that gives a first-time viewer nothing.
- **Say where it is going, at least loosely.** "Six parts" is a promise a viewer can hold.

**The promise, and this is the ethical content of the lesson.** A series says: keep watching and you will get something. **The failures are all breaches of that promise:**

- **The one that never ends.** A hook extended indefinitely for attention. This is the false loop scaled up, and it burns an audience permanently.
- **The bait ending.** Building to a resolution that arrives as an ad, or does not arrive.
- **The abandoned serial.** Sometimes unavoidable. **Say so rather than trailing off**, which costs you almost nothing and preserves the relationship.
- **The retroactive shape.** Claiming a plan you did not have. Audiences find out and it reads as contempt.

**And the useful reframe:** a series is a relationship with a duration, and the six decisions apply to the WHOLE as well as to each part. **What is the change across the series? Who owns it? Where does it turn?** A series that cannot answer those is a collection.

:::reveal Why is the hybrid shape "nearly always right" for a distributed series? ||| Because the recommendation system will show a stranger part seven with no idea part one exists, so a pure serial pays a real cost for depending on order, while a pure anthology gives a committed follower nothing to accumulate. The hybrid makes each part self-contained so a cold viewer gets a whole thing, and carries an accumulating story so a returning viewer is rewarded for staying. It costs more to write, which is the whole reason people avoid it.

## Sources
- Jenkins, H., Ford, S., & Green, J. (2013). *Spreadable media: Creating value and meaning in a networked culture*. New York University Press. https://lccn.loc.gov/2012028526
- Mittell, J. (2015). *Complex TV: The poetics of contemporary television storytelling*. New York University Press. https://doi.org/10.18574/nyu/9780814744963.001.0001`,
    },
    {
      slug: "ds-comments-as-text",
      title: "6 · The comment section is part of the text",
      section: "Module 2 · Structure and audience",
      body: `In every other form in this series, the audience's response happens elsewhere. **Here it is attached**, permanently, visible to everyone who arrives after, and frequently read before the work itself.

**Which means it is not a reaction to the text. It is part of it**, and treating it as separate is the mistake that makes people miserable in this medium.

**What the attached response actually does**

1. **It frames the work for later arrivals.** A viewer who reads three comments first watches a different piece. You cannot control this and you can anticipate it.
2. **It completes some work.** A piece that opens a question and lets an audience answer is using the form's own structure, and that is a legitimate and distinctive design.
3. **It is real feedback, mixed into noise.** The signal is there. So is a great deal that is not signal.
4. **It arrives without the buffer every other form has.** A novelist reads a review months later. Here it is instant, direct, and personal.

**Designing for it, deliberately**

- **Decide what you want the response to be**, before publishing. Recognition, argument, an answer, nothing? **A piece that ends on a genuine question gets answers; one that ends on a verdict gets argument.** That is a choice you are making whether or not you notice.
- **Do not manufacture argument.** Deliberately posting something wrong to farm replies works and it is the cheapest thing available in this medium. **It also teaches your audience that you are unreliable**, which is a slow, total cost.
- **Pin what you want read first** if the platform allows it, since the top comment is part of the opening.

**The maker's side, and this is the part nobody puts in a craft course**

- **Read them in a batch, later.** Not while publishing, not at night.
- **Separate three things**: is this about the work, about the subject, or about me? Only the first is craft feedback, and the three arrive mixed.
- **Volume is not weight.** Twenty people repeating one misreading is one misreading.
- **Some pieces should have comments off.** Not weakness, and sometimes it is care: a piece about a vulnerable person can attract a response that harms them and not you.

**And the responsibility that comes with the attachment.** If your work is about a real, identifiable person, **the comment section is something you brought to their door.** The documentary course asked who bears the consequences; this is that question with a mechanism. **Consider it before publishing, not after**, because you cannot unattach it.

:::reveal Why does this course treat the comment section as part of the text rather than as a reaction to it? ||| Because it is permanently attached, visible to everyone who arrives later, and frequently read before the work itself, so a viewer who reads three comments first genuinely watches a different piece. That makes it a design surface: you decide before publishing what response you want, since a piece ending on a real question gets answers and one ending on a verdict gets argument. It also carries a responsibility, because if the work is about a real identifiable person, the comment section is something you brought to their door.

## Sources
- Gillespie, T. (2018). *Custodians of the internet: Platforms, content moderation, and the hidden decisions that shape social media*. Yale University Press. https://doi.org/10.12987/9780300235029
- Jenkins, H., Ford, S., & Green, J. (2013). *Spreadable media: Creating value and meaning in a networked culture*. New York University Press. https://lccn.loc.gov/2012028526`,
    },
    {
      slug: "ds-ethics-of-spread",
      title: "7 · The ethics of a form built to spread",
      section: "Module 2 · Structure and audience",
      body: `This form's defining property is that things travel. **Everything difficult about its ethics follows from one asymmetry: the correction never travels as far as the claim.**

**The corrections problem, stated concretely.** A piece reaches a hundred thousand people. It contains an error. You post a correction. The correction reaches the people who follow you, which is a fraction, and none of the people who were shown the original and moved on. **The error stays in circulation, unattached to its correction, indefinitely.**

**So the practice has to be front-loaded**, which is a different discipline from the one the news course taught:

1. **Check before, at a standard higher than the form's norms.** Distribution is the reason, not fussiness.
2. **Correct in the ORIGINAL where the platform allows it.** Editing the caption, replacing the file, pinning a correction. **This is the only move that reaches anyone who arrives later**, and it is the one people skip because a separate post feels more like accountability.
3. **Then post the correction too.** Both, not either.
4. **Never quietly delete.** The news course's rule holds and matters more here: the piece has been seen, and deletion is a false claim that it never existed.

**Whose story is it to tell, which this form makes acute.** You can publish anything about anyone in seconds, to an audience neither of you chose. **The permission ladder from How Stories Work still applies**, with fiction inventing, performed work shaping, journalism selecting and arranging, and documentation recording, and it applies at speed, without an editor, without a lawyer, and without the pause that used to be built into publishing.

**The specific cases worth naming:**

- **Filming strangers.** Legal in many public places and frequently indefensible. **A person who becomes a character in a stranger's piece did not consent to an audience of any size**, and there is no take-back.
- **Screenshotting private conversations.** The other person's words, an audience they never agreed to, and the context stripped by definition.
- **The pile-on.** Naming a person means directing an audience at them. **The audience is the consequence, not the post**, and intent does not modify it.
- **Recording during a crisis.** Being the person filming instead of the person helping is a decision, and it is worth having decided in advance.

**The test this course offers**, and it is one you can actually run in the seconds this form gives you: **can the person in this piece answer it?** Someone with a comparable audience effectively can. A stranger, a private individual, a person in distress, cannot. **The bigger the asymmetry, the higher the bar** for publishing at all.

**And the thing this form makes easy that is worth resisting.** The pieces that travel furthest are frequently the ones that make an audience feel certain about someone they have never met. **You will notice, if you watch your own metrics, that your most-shared work is your most confident work.** That is a pressure, it is measurable, and being able to name it is most of the defense.

:::reveal What is the corrections asymmetry in this form, and what practice does it require? ||| A correction never travels as far as the claim: the original reached a hundred thousand people selected by a recommendation system, while the correction reaches only the fraction who follow you, so the error stays in circulation unattached to it indefinitely. The practice is front-loaded: check before publishing to a higher standard than the form's norms, and then correct in the ORIGINAL where the platform allows it, by editing the caption or replacing the file, because that is the only move that reaches anyone arriving later. Post the separate correction as well, and never quietly delete.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. Society of Professional Journalists. https://www.spj.org/spj-code-of-ethics/
- Gillespie, T. (2018). *Custodians of the internet: Platforms, content moderation, and the hidden decisions that shape social media*. Yale University Press. https://doi.org/10.12987/9780300235029`,
    },
    {
      slug: "ds-what-survives",
      title: "8 · What survives a platform",
      section: "Module 2 · Structure and audience",
      body: `**Platforms end.** They shut down, change their terms, delete archives, lose acquisitions, or simply stop showing your work to anyone. **A body of work that exists only inside one is on loan**, and this lesson is about what you own.

**What you do not own, however it feels:** your account, your followers, your archive as hosted, your reach, your comment history. **All of it is a license, revocable, and the terms can change without your agreement.** This is not cynicism; it is what the terms of service say.

**What you do own, and it is the whole list:**

1. **The files.** Masters, off the platform, backed up. **The single most-skipped step in the medium**, and it is the difference between a body of work and a memory of one.
2. **A way to reach your audience that you control.** An email list, most durably. A website. Somewhere that does not require permission.
3. **The craft.** Which transfers, and is the reason this course taught constraints rather than platforms.
4. **The relationships.** People who will look for you.

**Practical preservation, and it is unglamorous on purpose**

- **Keep masters at full quality**, not the re-encoded version the platform hands back.
- **Keep the text too**: scripts, captions, descriptions. They are the searchable part.
- **Export periodically.** Most platforms offer it, most people never do it, and the ones who need it needed it yesterday.
- **Name files so they sort.** *YYYY-MM-DD_series_partNN*. The oral-history lesson said the same thing for the same reason.
- **Three copies, two media, one off site.** Also from that lesson, and it is the standard because it works.

**The strategic version.** Treat every platform as **rented distribution and never as your archive.** Publish there because that is where people are, and let the work exist independently of it.

**What this means for the work itself**, which is the craft point rather than the housekeeping one: **make things that mean something outside their container.** A piece whose entire point is a platform-specific format is disposable by design, and that is a legitimate choice for something disposable. **A piece that would still work as a short film, an essay, an audio piece, will outlive the app it was made for**, and the discipline of asking that question improves the work while the platform is still alive.

**And the closing note this whole track has been building toward.** Attention here is rented, from the platform and from the viewer, seconds at a time. **The work does not have to be.** The constraint shapes the form; it does not have to shape the ambition.

:::reveal List what a maker actually owns, and the strategic rule that follows. ||| The files, kept as full-quality masters off the platform and backed up; a way to reach the audience that you control, most durably an email list or your own site; the craft, which transfers between platforms; and the relationships with people who will look for you. Everything else, including the account, the followers, the hosted archive and the reach, is a revocable license whose terms can change without your agreement. The rule: treat every platform as rented distribution and never as your archive, and make work that means something outside its container.

## Sources
- Jenkins, H., Ford, S., & Green, J. (2013). *Spreadable media: Creating value and meaning in a networked culture*. New York University Press. https://lccn.loc.gov/2012028526
- Gillespie, T. (2018). *Custodians of the internet: Platforms, content moderation, and the hidden decisions that shape social media*. Yale University Press. https://doi.org/10.12987/9780300235029`,
    },
    {
      slug: "ds-quiz-2",
      title: "9 · Knowledge check: structure and audience",
      section: "Module 2 · Structure and audience",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What promise does an anthology series make, compared with a serial?",
            options: [
              "A kind of thing: the same voice and reliable pleasure, in any order",
              "A resolution that arrives at a stated point in the run",
              "A fixed release schedule the maker commits to in advance",
              "That every part will be longer than the one before it",
            ],
            correctIndex: 0,
            explanation:
              "Order does not matter, which suits a distribution system that will show a viewer part fourteen first. A serial promises the resolution, and pays a real cost for depending on order.",
            sourceLessonSlug: "ds-serialization",
          },
          {
            prompt: "Why does the course call the hybrid shape nearly always right?",
            options: [
              "It is cheaper to produce than either a pure serial or an anthology",
              "Platforms distribute self-contained parts more widely than serials",
              "Each part stands alone for a cold viewer while an arc rewards followers",
              "It allows the maker to abandon the arc without breaking a promise",
            ],
            correctIndex: 2,
            explanation:
              "It costs more to write, which is the whole reason people avoid it. A pure serial fails the stranger; a pure anthology gives the follower nothing to accumulate.",
            sourceLessonSlug: "ds-serialization",
          },
          {
            prompt: "Which serialization failure does the course describe as the false loop scaled up?",
            options: [
              "A serial abandoned without any announcement to the audience",
              "A hook extended indefinitely, so the promised resolution never comes",
              "A shape claimed retroactively that the maker never actually planned",
              "A resolution that arrives in the form of an advertisement",
            ],
            correctIndex: 1,
            explanation:
              "It burns an audience permanently, because the promise a series makes is that continued attention will eventually be paid off.",
            sourceLessonSlug: "ds-serialization",
          },
          {
            prompt: "Why is a comment section part of the text rather than a reaction to it?",
            options: [
              "Platforms count comments toward how widely a piece is distributed",
              "Makers are expected to reply to every comment they receive",
              "Comments can be edited by the maker after publication",
              "It is permanently attached and often read before the work itself",
            ],
            correctIndex: 3,
            explanation:
              "A viewer who reads three comments first watches a different piece. You cannot control that, and you can anticipate it.",
            sourceLessonSlug: "ds-comments-as-text",
          },
          {
            prompt: "How should a maker separate craft feedback from the rest of a comment section?",
            options: [
              "Ask whether it is about the work, about the subject, or about you",
              "Discard anything that is not phrased as constructive criticism",
              "Weight comments by how many replies or likes they attracted",
              "Consider only comments from people who follow the account",
            ],
            correctIndex: 0,
            explanation:
              "Only the first is craft feedback, and the three arrive mixed. Volume is also not weight: twenty people repeating one misreading is one misreading.",
            sourceLessonSlug: "ds-comments-as-text",
          },
          {
            prompt: "What is the corrections asymmetry?",
            options: [
              "Platforms remove corrections faster than they remove original claims",
              "A correction reaches your followers; the original reached everyone shown it",
              "Corrections must be issued within a fixed window or they cannot be posted",
              "Audiences distrust corrections more than they distrust original claims",
            ],
            correctIndex: 1,
            explanation:
              "So the error stays in circulation, unattached to its correction, indefinitely. That is why the practice has to be front-loaded.",
            sourceLessonSlug: "ds-ethics-of-spread",
          },
          {
            prompt: "Which correction move actually reaches people who arrive later?",
            options: [
              "Posting a separate correction, which feels more like accountability",
              "Replying to comments that pointed out the error",
              "Correcting the original: editing the caption or replacing the file",
              "Deleting the original so the error stops circulating",
            ],
            correctIndex: 2,
            explanation:
              "It is the one people skip. Do both, and never quietly delete: the piece has been seen, and deletion is a false claim that it never existed.",
            sourceLessonSlug: "ds-ethics-of-spread",
          },
          {
            prompt: "What test does the course offer before publishing about a real person?",
            options: [
              "Whether the material is already publicly available elsewhere",
              "Whether the person would consent if you were able to ask them",
              "Whether the piece names them explicitly or only describes them",
              "Whether the person can answer it: the bigger the asymmetry, the higher the bar",
            ],
            correctIndex: 3,
            explanation:
              "Someone with a comparable audience effectively can answer. A stranger, a private individual, or a person in distress cannot.",
            sourceLessonSlug: "ds-ethics-of-spread",
          },
          {
            prompt: "Which of these does a maker actually own?",
            options: [
              "The full-quality master files, kept off the platform and backed up",
              "The follower list as it exists inside the platform's account system",
              "The hosted archive of published work and its comment history",
              "The reach a piece achieved, as recorded in the platform's analytics",
            ],
            correctIndex: 0,
            explanation:
              "Everything else on that list is a revocable license whose terms can change without your agreement. Keeping masters is the most-skipped step in the medium.",
            sourceLessonSlug: "ds-what-survives",
          },
          {
            prompt: "What is the craft consequence of treating a platform as rented distribution?",
            options: [
              "Publish the same piece simultaneously across every available platform",
              "Make work that means something outside its container",
              "Avoid formats that are specific to any one platform entirely",
              "Delay publishing until the work has been archived independently",
            ],
            correctIndex: 1,
            explanation:
              "A piece that would still work as a short film, an essay or an audio piece outlives the app it was made for, and asking the question improves the work while the platform is still alive.",
            sourceLessonSlug: "ds-what-survives",
          },
        ],
      },
    },
    {
      slug: "ds-capstone",
      title: "10 · Capstone: three pieces and a plan that outlives the platform",
      section: "Module 3 · Close",
      lessonType: "assignment",
      body: `**Make three pieces and one document.** Three, not one, because the interesting problems in this form are about relationship and repetition rather than about a single hit.

**Choose a subject you could keep making things about for a year.** Not a one-off idea. **The point is the body, not the piece.**

**What to submit.**

**1. Three finished pieces**, each under two minutes.
- **Piece A: a cold open.** Cut the first five seconds after you finish and submit the cut version. Say in one line what was lost, if anything.
- **Piece B: a productive loop.** The ending must change what the opening meant. **Say in one line what a rewatch reveals**, and be honest if it does not work: a failed productive loop analyzed is worth more than a clean loop that was easy.
- **Piece C: your choice of technique**, with the constraint it is answering named explicitly.

**All three must work with the sound off**, with correct captions you wrote rather than accepted.

**2. The six, per piece and for the set.** Change, owner, want, obstacle, withholding, turn, in a line each. **Then the same six for the three pieces AS A SET**: what is the change across them, who owns it, where does it turn? If they do not form a set, say so and say what would make them one.

**3. Your series shape.** Anthology, serial, or hybrid, and **what promise you are making.** Then: what would count as breaking it, in your specific case?

**4. Your comment plan.** What response do you want, what did you build into the pieces to get it, and what will you do with what arrives? **Include your rule for when comments should be off.**

**5. Your ethics note.** Is any real, identifiable person in these pieces, and can they answer? What is your correction procedure, written as steps, before you need it?

**6. The survival plan**, and this is the section that is graded hardest because it is the one everyone treats as optional:
- Where are your masters, in what format, in how many places?
- What is your way of reaching an audience that no platform controls, and does it exist yet?
- **What of this work would still mean something if the platform ended tomorrow?** A real answer, including "none of it" where that is true.

**What a strong submission looks like.** The three pieces can be modest. **The analysis cannot be.** A submission that names a technique that failed and explains why beats one that reports three successes, because this form gives you fast, cheap feedback and the whole point of working in it is learning from that.`,
    },
    {
      slug: "ds-review-and-sources",
      title: "11 · Cumulative review and sources",
      section: "Module 3 · Close",
      body: `**Attention is re-earned, not given.** No committed audience, no sunk cost, sound off, free exit. That is a constraint and not a lower standard, exactly as in short-form drama.

**The six, compressed:** visible change, owner identifiable in the first shot, want and obstacle in one line, **withholding as the engine**, scene almost always, turn early.

**Cold open**: stakes before context, and cut your first five seconds. **The loop**: the productive one changes what the opening meant; the false one requires the rewatch instead of rewarding it. **Sound off** is the default, captions are an accessibility floor, and a piece that rewards unmuting is better than one that ignores audio.

**The algorithmic middle is an editor you cannot talk to.** Assume no shared context. **Metrics measure the system's objective, not your work's quality.** Treat "the algorithm rewards X" as unverified, always.

**A series is a promise.** Anthology promises a kind of thing, serial promises resolution, and **the hybrid is nearly always right** because a stranger will meet part seven first. Failures are breaches: the endless hook, the bait ending, the abandoned serial nobody was told about.

**The comment section is part of the text.** Design for the response you want, do not manufacture argument, read in batches, separate work from subject from self, and remember that volume is not weight.

**The correction never travels as far as the claim.** So check first, **correct in the original**, post the correction too, and never quietly delete. Before publishing about a real person: **can they answer?**

**Platforms end.** You own the files, a channel you control, the craft, and the relationships. Everything else is rented. **Make things that mean something outside their container.**

:::reveal Without looking back, name the one durable fact about metrics and the one durable strategic answer. ||| Metrics measure the platform's objective rather than your work's quality, because the system optimises for engagement of some kind and your goals overlap with that partially and never completely; a piece that reached few people may be the best thing you made, which is a measurement fact rather than consolation. The durable strategic answer is to build something that survives the middle: masters you keep, a way to reach your audience that no platform controls, craft that transfers, and work that means something outside its container.

## Sources
- Bordwell, D., & Thompson, K. (2020). *Film art: An introduction* (12th ed.). McGraw-Hill. https://lccn.loc.gov/2018039565
- Gillespie, T. (2018). *Custodians of the internet: Platforms, content moderation, and the hidden decisions that shape social media*. Yale University Press. https://doi.org/10.12987/9780300235029
- Jenkins, H., Ford, S., & Green, J. (2013). *Spreadable media: Creating value and meaning in a networked culture*. New York University Press. https://lccn.loc.gov/2012028526
- Mittell, J. (2015). *Complex TV: The poetics of contemporary television storytelling*. New York University Press. https://doi.org/10.18574/nyu/9780814744963.001.0001
- Society of Professional Journalists. (2014). *SPJ code of ethics*. Society of Professional Journalists. https://www.spj.org/spj-code-of-ethics/
- World Wide Web Consortium. (2023). *Web content accessibility guidelines (WCAG) 2.2*. W3C. https://www.w3.org/TR/WCAG22/`,
    },
  ],
};
