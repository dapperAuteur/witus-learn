// Authored "Mockumentary" — STORY-99, the Storytelling series capstone (docs/storytelling-curriculum.md).
//
// WHY IT IS LAST, and this is the load-bearing pedagogical claim of the whole series. Mockumentary
// works by exploiting conventions the learner has to already believe in. Taught early it is a
// gimmick: a learner who has not internalised WHY a handheld camera and a talking head read as true
// can only copy the surface. Taught after the True track it becomes the course that explains why
// documentary conventions are persuasive in the first place, which makes a learner better at BOTH
// tracks. It is the only course in the series that requires the others.
//
// THE BRIDGE, per the curriculum map: it borrows the FORM of True to serve the intent of Performed.
// So the permission ladder from How Stories Work is the spine here: this is invented work wearing
// the clothes of work that may not invent, and the entire ethical content of the course is the
// difference between an audience that is IN on it and one that is not.
//
// The Orson Welles 1938 broadcast is handled carefully rather than repeated as received wisdom: the
// "mass panic" story is itself substantially a media myth, and getting that right in a course about
// how audiences read documentary conventions matters more than the anecdote does. Sourced to
// Pooley & Socolow's reassessment and to Schwartz.
//
// The six spine terms are used unchanged.

import type { AuthoredCourse } from "./authored-course";

export const MOCKUMENTARY_COURSE: AuthoredCourse = {
  title: "Mockumentary",
  description:
    "The capstone of the Storytelling series, and the only course in it that requires the others. A mockumentary is invented work wearing the clothes of work that may not invent, which means you cannot make one well without knowing exactly why documentary conventions persuade. This course reads the True track backwards: what each convention promises, how a fiction borrows it, and where the borrowing becomes a lie. It covers the persuasion grammar of documentary, comedy and satire as separate engines, the character who does not know they are being watched, the frame of an audience that is in on it, the 1938 Welles broadcast and the panic that mostly did not happen, deepfakes and synthetic media as the same problem at industrial scale, and the one line that separates satire from fraud. Ends by asking you to make both a real documentary segment and a false one about the same subject.",
  lessons: [
    {
      slug: "mock-why-last",
      title: "1 · Why this course is last",
      section: "Module 1 · Reading the conventions backwards",
      body: `**A mockumentary is a fiction that borrows documentary's form.** That is the entire definition, and every difficulty in it comes from the word *borrows*.

**Why you could not have taken this first.** The form works by exploiting conventions an audience believes in. **A learner who has not internalised why a handheld camera reads as true can only copy the surface**, which produces the shaky-cam-and-talking-heads pastiche that is the genre's floor rather than its work. Having done the True track, you know what those conventions were FOR, which is the only way to use them deliberately.

**And the payoff runs backwards too.** After this course you will watch actual documentaries differently, because you will have spent time engineering the persuasion. **A learner who can fake it can also see it being done**, which is the strongest argument for teaching this at all, and it is why the capstone of a storytelling series is a course about deception.

**Where it sits on the permission ladder**, which is the spine from How Stories Work:

| Form | May |
| --- | --- |
| Fiction | Invent freely |
| Performed work | Shape, compress, stage |
| Journalism | Select and arrange, never invent |
| Documentation | Record, not shape |

**Mockumentary sits in the first row and dresses as the third.** That is the bridge the curriculum map names: **the FORM of True in service of the intent of Performed.** It is legitimate, it is old, and it has one hard requirement, which is the whole ethical content of this course.

**The requirement: the audience must be able to know.** Not necessarily immediately, and not necessarily from the first frame. **But knowable.** A mockumentary whose audience cannot ever find out it is fiction is not a mockumentary; it is a hoax, and the difference is not tone or intent. It is whether the frame exists.

**Three things frequently confused, and the distinctions do real work later:**

- **Mockumentary**: fiction in documentary form, and the audience can know. *This Is Spinal Tap* (Reiner, 1984), *What We Do in the Shadows* (Clement & Waititi, 2014).
- **Docufiction / drama-documentary**: real events restaged with actors, presented as reconstruction. Not this, and it depends on the signalling the documentary course covered.
- **Hoax**: fiction in documentary form where the audience is NOT meant to know. Not a genre. **A separate act, with separate consequences.**

**The six decisions apply unchanged**, and there is one addition specific to the form: **you are designing two experiences at once.** What the piece is about, and what the piece is DOING to a viewer as they work out what they are watching. The second one is the craft that is unique here.

:::reveal What is the one hard requirement that separates a mockumentary from a hoax? ||| That the audience must be able to know it is fiction. Not necessarily immediately and not necessarily from the first frame, but knowable: the frame has to exist somewhere a viewer can reach it. The difference is not tone, intent or quality, which is why a well-meaning piece with no discoverable frame is still a hoax, and a savage satire with a clear one is not.

## Sources
- Roscoe, J., & Hight, C. (2001). *Faking it: Mock-documentary and the subversion of factuality*. Manchester University Press. https://lccn.loc.gov/2001055895
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press. https://doi.org/10.2307/j.ctt2005t6j`,
    },
    {
      slug: "mock-persuasion-grammar",
      title: "2 · The grammar of persuasion, read backwards",
      section: "Module 1 · Reading the conventions backwards",
      recallContent: [
        {
          prompt: "Where does mockumentary sit on the permission ladder, and what does it dress as?",
          answer:
            "It sits in the fiction row, which may invent freely, and dresses as journalism or documentation, which may not. That is the bridge: the FORM of the True track in service of the intent of the Performed track.",
        },
      ],
      body: `Documentary developed its conventions to solve real problems. **Then audiences learned to read them as truth signals, which is what makes them borrowable**, and every one of them is a technique before it is evidence.

**The signals, what each originally solved, and what it now connotes**

| Convention | Solved | Now reads as |
| --- | --- | --- |
| **Handheld, unstable frame** | Small crews, unrepeatable events | Nobody had time to set up, so this is real |
| **Imperfect focus, reframing** | Unpredictable subjects | Not staged, caught |
| **Talking head, off-axis eyeline** | Interview to camera reads as address | A person answering a real question |
| **Available light** | No time or budget to light | Not art-directed |
| **Audio imperfection** | Location sound | Not a studio |
| **Archive and titles** | Establishing time and place | Somebody researched this |
| **Narration, measured** | Compressing what is not filmable | An institution stands behind it |
| **Lower thirds with name and role** | Identifying speakers | This person exists and was checked |
| **Timecode, date stamps** | Working artifacts | A record, not a composition |
| **The subject looking at the crew** | An accident of live shooting | The camera did not control the event |

**Read that table twice, because it is the whole course in one object.** Left to right, it is the documentary course. **Right to left, it is a toolkit for making a fiction feel unstaged.**

**The most important item is the last one.** A subject acknowledging the crew, a boom dipping into frame, someone asking "should I start again?": **each is an accident that certifies non-staging, and each is therefore trivially stageable.** The genre's best jokes and its most persuasive deceptions both live here.

**The general principle worth carrying**, and it applies far beyond this form: **every signal of authenticity is a signal, which means it can be produced.** Roughness is a style. Imperfection is a choice available to anyone with an editor. **A thing that looks unproduced was produced to look unproduced.**

**Which is exactly why documentary makers who care about honesty ALSO need this course.** If your evidence of truthfulness is that a piece looks rough, you have no evidence. **The actual grounds are sourcing, disclosure, method and accountability**, all of which are unfilmable and none of which can be faked by a camera move.

**Two practical notes for making it**

- **Commit to one documentary mode.** Observational and expository make different promises (documentary course, Lesson 1), and a piece that drifts between them reads as incompetent rather than as fiction.
- **Get the technical grammar of your specific era right.** A period mockumentary that uses modern stabilisation is broken in a way an audience feels before it can name.

:::reveal What does the course mean by "a thing that looks unproduced was produced to look unproduced", and what follows for documentary? ||| That every signal of authenticity, including shaky framing, missed focus, boom dips and a subject acknowledging the crew, is a technique before it is evidence, so any of them can be manufactured deliberately. What follows is that roughness is worthless as grounds for believing a documentary: if that is your evidence of truthfulness you have none. The real grounds are sourcing, disclosure, method and accountability, all of which are unfilmable and none of which any camera move can fake.

## Sources
- Roscoe, J., & Hight, C. (2001). *Faking it: Mock-documentary and the subversion of factuality*. Manchester University Press. https://lccn.loc.gov/2001055895
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press. https://doi.org/10.2307/j.ctt2005t6j`,
    },
    {
      slug: "mock-comedy-and-satire",
      title: "3 · Comedy, satire, and the character who does not know",
      section: "Module 1 · Reading the conventions backwards",
      body: `**Most mockumentaries are funny, and the reason is structural rather than a preference.** The form generates a specific comic engine that nothing else produces as cleanly.

**The engine: the gap between self-presentation and observed reality.** Documentary's central promise is that we are watching someone as they are. Fiction lets you build a person whose self-account is wrong. **Put them together and the camera contradicts the speaker**, continuously and without anyone in the piece having to point at it.

Every great mockumentary character runs on this. **They believe they are being documented because they are impressive.** The audience sees otherwise. Nobody in the film says so. **The comedy is entirely in the audience's superior view**, which the documentary form supplies for free.

**Why the talking head is the most efficient device in the genre:** it lets a character state their self-image directly, on the record, moments before or after the material that contradicts it. **The cut does the joke.** No line has to be written.

**Comedy and satire are different engines and the distinction matters when you write.**

- **Comedy** finds people funny. It can be affectionate, and the best of the genre usually is: *Spinal Tap* likes its band.
- **Satire** targets something beyond the character. **The form is unusually good at this** because the target is frequently a genre of self-presentation, and a mockumentary about a corporate video is attacking corporate video by being one.

**Both are legitimate. Confusing them produces the genre's commonest failure**, which is a piece that punches down while believing it is satire: it targets people for being ordinary and mistakes contempt for critique. **Ask what your target is, name it in a sentence, and check that the sentence is not "these people are stupid."**

**And the harder craft problem: comedy is not enough for length.** The gap is a joke generator and a joke generator is not a story. **You still need the six decisions**, and the specific trap of the form is a piece with excellent bits and no change: the character at the end is exactly who they were, having learned nothing, and the audience leaves feeling nothing.

**The strongest work in the genre solves that the same way:** the gap narrows or costs something. **The character's self-image collides with reality and something breaks.** That is your turn, and it is why the funniest mockumentaries frequently end sadly.

**The non-comic branch.** The conventions work as well for horror and for drama, and the mechanism is the same one inverted: **found-footage horror uses documentary form to make a viewer believe just enough to be frightened**, and its ethical questions are this course's questions with the laughs removed.

:::reveal What is the comic engine of the mockumentary form, and what is the specific structural trap that comes with it? ||| The gap between a character's self-presentation and the reality the camera observes: documentary promises we see people as they are, fiction lets you build someone whose self-account is wrong, and the cut between the talking head and the contradicting material does the joke without a line being written. The trap is that a gap is a joke generator rather than a story, so the form produces pieces with excellent bits and no change, where the character ends exactly who they began. The fix is to make the gap narrow or cost something, which is why the funniest mockumentaries often end sadly.

## Sources
- Roscoe, J., & Hight, C. (2001). *Faking it: Mock-documentary and the subversion of factuality*. Manchester University Press. https://lccn.loc.gov/2001055895
- Mittell, J. (2015). *Complex TV: The poetics of contemporary television storytelling*. New York University Press. https://doi.org/10.18574/nyu/9780814744963.001.0001`,
    },
    {
      slug: "mock-quiz-1",
      title: "4 · Knowledge check: reading the conventions",
      section: "Module 1 · Reading the conventions backwards",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does this course come last in the series rather than earlier?",
            options: [
              "It works by exploiting conventions the learner must already believe in",
              "Its production requirements exceed those of the other storytelling forms",
              "Its subject matter is unsuitable for learners new to the series",
              "It synthesises the writing skills the Performed track teaches first",
            ],
            correctIndex: 0,
            explanation:
              "Taught early it is a gimmick, because a learner can only copy the surface. Taught after the True track it explains why documentary conventions persuade, which improves work in both tracks.",
            sourceLessonSlug: "mock-why-last",
          },
          {
            prompt: "On the permission ladder, what does a mockumentary do?",
            options: [
              "Records without shaping, then adds an invented commentary afterwards",
              "Selects and arranges real material to serve an invented argument",
              "Sits in the fiction row while dressing as journalism or documentation",
              "Shapes real events with actors, presented openly as reconstruction",
            ],
            correctIndex: 2,
            explanation:
              "That is the bridge the curriculum names: the form of the True track in service of the intent of the Performed track. Restaging real events with actors and presenting them openly as reconstruction is docufiction, which is a different thing.",
            sourceLessonSlug: "mock-why-last",
          },
          {
            prompt: "What separates a mockumentary from a hoax?",
            options: [
              "The hoax is intended to cause harm and the mockumentary is not",
              "Whether the audience is able to know the piece is fiction",
              "Whether professional actors or non-actors appear on camera",
              "Whether the piece is comic in tone or presented seriously",
            ],
            correctIndex: 1,
            explanation:
              "Not necessarily immediately, but knowable: the frame has to exist somewhere a viewer can reach it. Tone, intent and quality do not settle it.",
            sourceLessonSlug: "mock-why-last",
          },
          {
            prompt: "What did handheld, unstable framing originally solve in documentary?",
            options: [
              "A stylistic preference for immediacy over composition",
              "A requirement imposed by broadcasters on factual programming",
              "The difficulty of lighting interiors without a full crew",
              "Small crews shooting unrepeatable events with no time to set up",
            ],
            correctIndex: 3,
            explanation:
              "It solved a production problem first and became a truth signal second, which is what makes it borrowable by a fiction.",
            sourceLessonSlug: "mock-persuasion-grammar",
          },
          {
            prompt: "Why is a subject acknowledging the crew the most important item in the table?",
            options: [
              "It is an accident certifying non-staging, and so is trivially stageable",
              "It is the only convention documentary makers agree should be avoided",
              "It reveals the size of the crew, which dates the footage precisely",
              "It is the only convention that survives being shot on modern equipment",
            ],
            correctIndex: 0,
            explanation:
              "The boom dipping into frame and the request to start again are the genre's best jokes and its most persuasive deceptions both live here.",
            sourceLessonSlug: "mock-persuasion-grammar",
          },
          {
            prompt: "What follows for documentary from 'roughness is a style'?",
            options: [
              "Documentaries should be polished so roughness cannot be mistaken for proof",
              "Looking unproduced is no evidence of truthfulness; sourcing and method are",
              "Audiences should be trained to distrust any handheld footage they see",
              "Documentary makers should disclose their equipment in the credits",
            ],
            correctIndex: 1,
            explanation:
              "The real grounds are sourcing, disclosure, method and accountability, all of which are unfilmable and none of which a camera move can fake.",
            sourceLessonSlug: "mock-persuasion-grammar",
          },
          {
            prompt: "What is the comic engine the form generates?",
            options: [
              "The absurdity of ordinary people placed in extraordinary circumstances",
              "The contrast between amateur production values and serious subject matter",
              "The gap between a character's self-presentation and observed reality",
              "The tension between an unreliable narrator and a reliable interviewer",
            ],
            correctIndex: 2,
            explanation:
              "The camera contradicts the speaker continuously, without anyone in the piece pointing at it. The audience's superior view is supplied free by the documentary form.",
            sourceLessonSlug: "mock-comedy-and-satire",
          },
          {
            prompt: "Why is the talking head the most efficient device in the genre?",
            options: [
              "It lets a character state a self-image the surrounding material contradicts",
              "It is the cheapest documentary convention to shoot convincingly",
              "It allows exposition to be delivered without a narrator",
              "It gives non-professional actors a fixed position to perform from",
            ],
            correctIndex: 0,
            explanation:
              "The cut does the joke, so no line has to be written.",
            sourceLessonSlug: "mock-comedy-and-satire",
          },
          {
            prompt: "What is the genre's commonest failure when comedy and satire are confused?",
            options: [
              "A piece too gentle on its target to register as criticism at all",
              "A piece that punches down while believing it is satire",
              "A piece whose jokes depend on knowledge the audience lacks",
              "A piece that abandons documentary form once the joke is established",
            ],
            correctIndex: 1,
            explanation:
              "It targets people for being ordinary and mistakes contempt for critique. Name your target in a sentence and check the sentence is not 'these people are stupid.'",
            sourceLessonSlug: "mock-comedy-and-satire",
          },
          {
            prompt: "What is the structural trap of building a piece on the self-presentation gap?",
            options: [
              "The gap closes too early, leaving the second half without an engine",
              "Audiences tire of the same character being wrong repeatedly",
              "The gap is only sustainable at short-film length, never at feature length",
              "A gap generates jokes but not a change, so nothing happens across the piece",
            ],
            correctIndex: 3,
            explanation:
              "The fix is to make the gap narrow or cost something, so the collision between self-image and reality becomes the turn. It is why the funniest mockumentaries often end sadly.",
            sourceLessonSlug: "mock-comedy-and-satire",
          },
        ],
      },
    },
    {
      slug: "mock-the-frame",
      title: "5 · The frame: how an audience knows",
      section: "Module 2 · The frame and its failure",
      recallContent: [
        {
          prompt: "State the general principle behind 'every signal of authenticity is a signal'.",
          answer:
            "That each authenticity marker is a technique before it is evidence, so it can be produced deliberately. A thing that looks unproduced was produced to look unproduced, which means roughness is no grounds for believing anything.",
        },
      ],
      body: `**The frame is everything that lets an audience know this is fiction.** It is the single design problem this form has that no other form in the series does, and it is not one decision, it is a layered set.

**Where the frame can live**, roughly in order of how much of the joke it costs:

1. **Outside the work entirely.** A cast list, a label, a genre tag, a platform category. **Cheap, robust, and it survives being shared**, which is the property that matters most.
2. **The credits.** Standard, and weak alone: credits are the part most often removed when a clip travels.
3. **In the work, early.** An opening title, an absurd premise stated in the first minute. Costs the most surprise, and buys the most safety.
4. **In the work, escalating.** The piece starts plausible and becomes progressively impossible. **The most artful option** and the one that fails most interestingly, because people stop watching at different points.
5. **Recognisable performers.** Real, and completely dependent on the audience knowing them.
6. **Tone.** The weakest of all, and the one makers most over-rely on. **Tone does not survive translation, decontextualisation, a bad speaker, or someone watching at 2x with the sound off.**

**The design question, and it is a real design question rather than a compliance step:** **what is the LATEST point at which a viewer can find out, and what happens to someone who never gets there?** Answer it about your specific piece and your specific distribution, and answer it honestly.

**The clip problem, which has changed the calculus of this entire genre.** Your piece will be excerpted, and the excerpt will lose the frame. **A forty-second cut of a mockumentary, stripped of titles, credits, context and platform, is indistinguishable from a document.** That is not hypothetical and it is not rare; it is the default fate of anything that travels.

**So the modern practical answer is layering.** Do not rely on one signal. **A piece that is labeled outside, framed inside, and escalating within is robust to losing any single layer**, and a piece whose only frame is tone is one screenshot away from being evidence of something that did not happen.

**The Welles case, and get it right, because a course about how audiences read conventions cannot afford a lazy anecdote.** On 30 October 1938, the Mercury Theatre broadcast *The War of the Worlds* as simulated news bulletins, with an announced frame at the start and during the program. **The famous "mass panic" is substantially a media myth.** Newspaper accounts the next day were dramatic; subsequent scholarship found the audience was small and the evidence of widespread panic thin, and there are good reasons to think print outlets had an interest in a story about radio's dangers (Pooley & Socolow, 2013; Schwartz, 2015).

**Three lessons from it, all better than the myth:**

1. **The frame existed and some people missed it**, because they arrived late. **Frames must be repeated, not stated once**, which is the single most useful production note in this lesson.
2. **The panic story spread further than the broadcast did.** A story about media effects outran the media effect, and that is the more interesting finding.
3. **Be suspicious of the received account of an audience being fooled.** Including this one, and including any you are told about a recent case, for exactly the reasons the news course gave.

:::reveal Why is layering the frame the modern practical answer, and what fact makes it necessary? ||| Because your piece will be excerpted and the excerpt will lose the frame: a forty-second cut stripped of titles, credits, platform and context is indistinguishable from a document, and that is the default fate of anything that travels rather than a rare accident. Layering means labeling outside the work, framing inside it early, and escalating within, so the piece survives losing any single layer. A piece whose only frame is tone is one screenshot away from being evidence of something that never happened.

## Sources
- Pooley, J., & Socolow, M. (2013, October 28). The myth of the War of the Worlds panic. *Slate*. https://slate.com/culture/2013/10/orson-welles-war-of-the-worlds-panic-myth-the-infamous-radio-broadcast-did-not-cause-a-nationwide-hysteria.html
- Schwartz, A. B. (2015). *Broadcast hysteria: Orson Welles's War of the Worlds and the art of fake news*. Hill and Wang. https://lccn.loc.gov/2014040510`,
    },
    {
      slug: "mock-when-it-breaks",
      title: "6 · When the frame fails, and the line to fraud",
      section: "Module 2 · The frame and its failure",
      body: `**Sometimes the frame fails and people believe it.** This lesson is about what that means, what you owe, and where the line to something else actually is.

**Failure is normal, not exceptional.** Somebody always arrives late, sees only a clip, or does not share the reference. **The question is never whether anyone will be fooled. It is how many, how badly, and whether you built for it.**

**Where the harm concentrates, and it is not evenly spread:**

- **A piece about a real, named, identifiable person or organization.** The invented material attaches to them and outlives your piece.
- **A piece about something people act on.** Health, money, safety, an election. **Being fooled has a cost beyond embarrassment.**
- **A piece that travels into a context you did not imagine.** Another country, another language, a different platform, five years later.
- **A piece where the target is also the audience.** Satire aimed at a group, consumed sincerely by that group, does something you did not intend.

**What you owe when it fails, and it is not much, which is why there is no excuse for skipping it:**

1. **Correct where the confusion is happening**, not only where you published. That is the distributed-storytelling lesson exactly.
2. **Do not enjoy it.** "People fell for it" as a brag converts a craft outcome into contempt for your audience, and it is the tell that you were never making a mockumentary.
3. **Strengthen the frame.** Add the layer that was missing. **You now have evidence about which layer failed**, which is more than you had before.
4. **If a real person is being harmed by a belief you created, that is yours to fix**, urgently and publicly, whatever the frame said.

**The line to fraud, stated as precisely as this can be stated.** It is not tone, not quality, not whether anyone was actually deceived, and not your private intent. **It is whether the audience was given a real chance to know, and whether you benefited from them not knowing.**

- **Satire with a discoverable frame**: legitimate, however sharp, however many people missed it.
- **Fiction designed so the audience cannot know**: a hoax.
- **A hoax you profit from, or that induces someone to act to their detriment**: fraud, and the fact that it is well made is not a defense.

**And the case where the genre earns its place**, which is worth stating so this does not read as a list of prohibitions: a mockumentary that shows an audience how easily they can be persuaded, **with a frame that lets them find out, does something no essay about media literacy can do.** It makes the experience of being persuaded available for inspection from the inside. **That is the strongest argument for the form, and it depends entirely on the frame existing.**

:::reveal Where exactly is the line between satire and fraud, and what does NOT determine it? ||| The line is whether the audience was given a real chance to know, and whether you benefited from them not knowing. Satire with a discoverable frame is legitimate however sharp it is and however many people missed it; fiction designed so the audience cannot know is a hoax; a hoax you profit from, or that induces someone to act to their detriment, is fraud. What does not determine it: tone, craft quality, whether anyone was actually deceived, and your private intent, none of which are available to the person watching.

## Sources
- Roscoe, J., & Hight, C. (2001). *Faking it: Mock-documentary and the subversion of factuality*. Manchester University Press. https://lccn.loc.gov/2001055895
- Society of Professional Journalists. (2014). *SPJ code of ethics*. Society of Professional Journalists. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "mock-synthetic-media",
      title: "7 · Deepfakes: the same problem, industrialised",
      section: "Module 2 · The frame and its failure",
      body: `Everything in this course was written when faking documentary form required a crew, a camera and time. **Synthetic media removes all three**, and the honest thing a capstone can do is say what changes and what does not.

**What changes, and it is only these:**

1. **Cost.** Persuasive fake footage is now cheap and fast. The bar was never craft; now there is barely a bar.
2. **The performer's consent.** A mockumentary needs actors who agreed. **A synthetic one can use a real person's face and voice without asking**, which is a genuinely new harm rather than an old one scaled.
3. **Volume.** Individually detectable fakes at sufficient volume are a different problem, because verification does not scale the way generation does.

**What does NOT change, and this is the part worth carrying out of the series:**

- **The permission ladder.** Fiction may invent; work presenting itself as documentation may not. **Nothing about the tool alters the row you are in.**
- **The frame requirement.** Fiction wearing documentary clothes must be knowable. That is the same rule, and it is now harder to satisfy and more important.
- **The line to fraud.** Real chance to know, plus benefit from not knowing.
- **The grounds for belief.** Sourcing, disclosure, method, accountability. **These were never visible in the footage, so footage becoming untrustworthy does not remove them.** It removes a shortcut people were relying on that was never sound.

**The liar's dividend, which is the second-order effect and the one most people miss.** As fakes become plausible, **real footage becomes deniable.** Someone caught on camera can now say it was generated, and that claim is no longer absurd. **The damage is not only that false things are believed; it is that true things can be dismissed.** A course about faking documentary form has an obligation to name this, because makers of convincing fakes contribute to it whatever their intent.

**What a maker should actually do, concretely:**

- **Disclose synthetic elements.** In the work, not only in a description that clips will strip.
- **Do not synthesise a real person without consent.** Not for satire, not for a good cause. **The consent question is the documentary course's question and there is no version where "it is obviously a joke" answers it**, because obviousness is exactly what does not survive a clip.
- **Assume every layer will be stripped**, then design the frame accordingly.
- **Keep and publish your method.** Being able to show how a thing was made is the one form of credibility that does not degrade as generation improves.

**And the sentence to leave this lesson with:** the answer to synthetic media is not better detection, which is losing and will keep losing. **It is provenance and accountability**, which is the same answer this catalog's citation and source-verification work gives, and the same answer the documentary course gave about disclosure. **The response to unverifiable footage is verifiable making.**

:::reveal What is the liar's dividend, and why does it obligate a maker of convincing fakes? ||| It is the second-order effect of plausible synthetic media: as fakes become credible, real footage becomes deniable, so anyone caught on camera can claim it was generated and the claim is no longer absurd. The damage is not only that false things get believed but that true things can be dismissed. It obligates makers because contributing convincing fakes to the environment feeds that deniability whatever the maker's intent, which is why disclosure, refusing to synthesise a real person without consent, and publishing your method are obligations rather than courtesies.

## Sources
- Chesney, R., & Citron, D. (2019). Deep fakes: A looming challenge for privacy, democracy, and national security. *California Law Review, 107*(6), 1753-1820. https://www.californialawreview.org/print/deep-fakes-a-looming-challenge-for-privacy-democracy-and-national-security
- Roscoe, J., & Hight, C. (2001). *Faking it: Mock-documentary and the subversion of factuality*. Manchester University Press. https://lccn.loc.gov/2001055895`,
    },
    {
      slug: "mock-quiz-2",
      title: "8 · Knowledge check: the frame",
      section: "Module 2 · The frame and its failure",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which place for the frame does the course call cheap, robust, and survives sharing?",
            options: [
              "Outside the work: a cast list, a label, a genre tag, a platform category",
              "The closing credits, which name the writers, the performers and the production company",
              "The tone of the piece, which signals its comic intent consistently from the opening shot",
              "Recognisable performers whom the intended audience will already know from other work",
            ],
            correctIndex: 0,
            explanation:
              "Credits are the part most often stripped when a clip travels, and tone is the weakest signal of all.",
            sourceLessonSlug: "mock-the-frame",
          },
          {
            prompt: "Why does the course call tone the weakest frame?",
            options: [
              "Comic tone is inappropriate for serious subject matter",
              "Audiences trained on documentary read tone as authorial rather than fictional",
              "It does not survive translation, decontextualisation, or a muted 2x watch",
              "It only works for viewers already familiar with the maker's other work",
            ],
            correctIndex: 2,
            explanation:
              "It is also the signal makers most over-rely on, which is why a piece framed only by tone is one screenshot from being evidence.",
            sourceLessonSlug: "mock-the-frame",
          },
          {
            prompt: "What is the clip problem?",
            options: [
              "Short excerpts cannot convey the comic timing on which a mockumentary depends entirely",
              "Platform compression degrades the deliberate authenticity signals the piece was built around",
              "Excerpts are shared and reshared faster than any complete work can be watched through",
              "An excerpt stripped of titles and context is indistinguishable from a document",
            ],
            correctIndex: 3,
            explanation:
              "It is the default fate of anything that travels, not a rare accident, and it is why the modern answer is layering rather than any single signal.",
            sourceLessonSlug: "mock-the-frame",
          },
          {
            prompt: "What does current scholarship say about the 1938 War of the Worlds panic?",
            options: [
              "It was substantially a media myth: the audience was small and evidence thin",
              "It was larger than the papers reported, since most local incidents went entirely unrecorded",
              "It occurred because the broadcast carried no announced frame at any point in the hour",
              "It has since been confirmed by contemporary police, hospital and telephone-exchange records",
            ],
            correctIndex: 0,
            explanation:
              "The broadcast did carry an announced frame; some listeners arrived late and missed it. The panic story spread further than the broadcast did.",
            sourceLessonSlug: "mock-the-frame",
          },
          {
            prompt: "What is the single most useful production note the Welles case yields?",
            options: [
              "Broadcast fiction should avoid simulated news formats entirely",
              "Frames must be repeated, not stated once, because people arrive late",
              "Frames should be placed only at the end so surprise is preserved",
              "A frame is unnecessary when the premise is obviously impossible",
            ],
            correctIndex: 1,
            explanation:
              "The frame existed and some listeners missed it because they tuned in after it. Repetition is what fixes that.",
            sourceLessonSlug: "mock-the-frame",
          },
          {
            prompt: "Where does the course say the harm from a failed frame concentrates?",
            options: [
              "In pieces whose production values are highest and hardest to detect",
              "In pieces distributed on platforms with the largest audiences",
              "In pieces about real named people, or about things people act on",
              "In pieces whose satire targets institutions rather than individuals",
            ],
            correctIndex: 2,
            explanation:
              "Invented material attaches to a named person and outlives the piece; on health, money, safety or an election, being fooled has a cost beyond embarrassment.",
            sourceLessonSlug: "mock-when-it-breaks",
          },
          {
            prompt: "What determines the line between satire and fraud?",
            options: [
              "Whether the piece is played for comedy or presented throughout in a serious documentary register",
              "Whether anyone in the actual audience was in fact deceived by the finished piece",
              "Whether the maker privately intended any part of the audience to be deceived by it",
              "Whether the audience had a real chance to know, and you benefited from them not knowing",
            ],
            correctIndex: 3,
            explanation:
              "Tone, craft quality, actual deception and private intent are all irrelevant, and none of them is available to the person watching.",
            sourceLessonSlug: "mock-when-it-breaks",
          },
          {
            prompt: "What does synthetic media genuinely change about this form?",
            options: [
              "Cost, the performer's consent, and volume",
              "The permission ladder, which no longer distinguishes fiction from documentation",
              "The frame requirement, which detection tools now satisfy automatically",
              "The grounds for believing a documentary, which shift to technical analysis",
            ],
            correctIndex: 0,
            explanation:
              "Using a real person's face and voice without asking is a genuinely new harm. The ladder, the frame requirement and the grounds for belief are unchanged.",
            sourceLessonSlug: "mock-synthetic-media",
          },
          {
            prompt: "What is the liar's dividend?",
            options: [
              "The profit a hoaxer earns from an audience that never learns the piece was invented",
              "That plausible fakes make real footage deniable, so true things can be dismissed",
              "The advantage a convincing fake holds over its correction in reaching the same audience",
              "The tendency of automated detection tools to flag authentic footage as machine-generated",
            ],
            correctIndex: 1,
            explanation:
              "The damage is not only that false things are believed. Makers of convincing fakes feed that deniability whatever their intent, which is why the obligations in this lesson are obligations.",
            sourceLessonSlug: "mock-synthetic-media",
          },
          {
            prompt: "What does the course offer as the answer to synthetic media?",
            options: [
              "Better detection tools, developed faster than generation improves",
              "Platform rules requiring generated content to be labeled at upload",
              "Audience training in spotting the artifacts generators leave behind",
              "Provenance and accountability: verifiable making, not unverifiable footage",
            ],
            correctIndex: 3,
            explanation:
              "Detection is losing and will keep losing. It is the same answer the citation work and the documentary disclosure lesson give.",
            sourceLessonSlug: "mock-synthetic-media",
          },
        ],
      },
    },
    {
      slug: "mock-capstone",
      title: "9 · Series capstone: the true one and the false one",
      section: "Module 3 · Close",
      lessonType: "assignment",
      body: `**This is the capstone of the whole series, so it asks for both halves of what you learned.**

**Make two short pieces about the SAME subject: one true, one false.** Three to five minutes each. The subject should be something you can genuinely document: a place, a small organization, a hobby, a person who consents, a local ritual.

**Piece 1: the true one.** An actual documentary segment. Real people, real consent, real sourcing, no invention. **Every rule from the True track applies**: consent as a process, no frankenbite, no false chronology, signalled archive, disclosed method.

**Piece 2: the false one.** A mockumentary about the same subject, using the conventions from Lesson 2 deliberately, **with a layered frame.**

**Then the document, which is where the series is actually assessed.**

**1. The convention inventory.** List every documentary convention you used in Piece 2. For each: what it originally solved, what it now connotes, and **whether you also used it in Piece 1.** The overlaps are the interesting part and you should say so.

**2. Your frame design.** Every layer, where it lives, and **what happens to a viewer who encounters only forty seconds of the middle.** Answer that honestly rather than optimistically.

**3. The six, twice.** Change, owner, want, obstacle, withholding, turn, for each piece. **Then: whose change was easier to find, and why?** There is a real answer and it is worth arriving at yourself.

**4. Your target, in one sentence.** What is Piece 2 satirising or finding funny? **Check the sentence is not "these people are stupid"**, and if it is, say so and rewrite the piece or the sentence.

**5. The ethics comparison.** What did you owe the real people in Piece 1? What do you owe them in Piece 2? **If the same people appear in both, that is the hardest and most interesting version of this assignment, and it needs a paragraph of its own.**

**6. The permission ladder, applied to yourself.** For each piece, which row are you in, what did you invent, what did you select and arrange, and what did you merely record? **Be exact. This is the series' central idea and this is where you show you have it.**

**7. What making the false one taught you about the true one.** The point of the whole capstone. Answer with something specific you noticed while shooting Piece 2 that changed how you see Piece 1.

**What a strong submission looks like.** The two pieces can be rough. **The document is where the series is graded**, and the single strongest thing it can contain is an honest account of a moment in Piece 1 where you were tempted to use a technique from Piece 2, and what you did about it.`,
    },
    {
      slug: "mock-review-and-sources",
      title: "10 · Cumulative review, and the end of the series",
      section: "Module 3 · Close",
      body: `**A mockumentary is a fiction that borrows documentary's form**: the form of the True track in service of the intent of the Performed track. **It comes last because it works by exploiting conventions you had to believe in first.**

**Documentary conventions are techniques before they are evidence.** Handheld solved small crews, available light solved budget, the acknowledged crew was an accident of live shooting. **Every one now reads as truth, and every one can therefore be produced.** A thing that looks unproduced was produced to look unproduced.

**Which means roughness is not grounds for belief.** The actual grounds are **sourcing, disclosure, method and accountability**, none of them visible in the footage.

**The comic engine is the gap** between self-presentation and observed reality, and the talking head is its most efficient device because the cut does the joke. **A gap is not a story**: make it narrow or cost something, or you have bits and no change.

**The frame is the design problem.** Outside the work, early inside it, escalating, repeated. **Tone is the weakest layer and the most over-used.** Layer it, because your piece will be excerpted and the excerpt loses everything.

**Frames fail; that is normal.** Correct where the confusion is, do not enjoy it, add the missing layer, and fix any harm to a real person urgently. **The line to fraud: a real chance to know, and whether you benefited from them not knowing.**

**Synthetic media changes cost, consent and volume. It changes nothing about the ladder, the frame or the grounds for belief.** The answer is provenance, not detection.

**And the end of the series.** Ten courses, one vocabulary, one idea underneath all of them: **know what you are permitted to invent, and tell the audience where you stand.** Everything else is craft, and craft is learnable. **That is the part that has to be chosen.**

:::reveal Without looking back, state the series' central idea in one sentence and name the four grounds for believing a documentary. ||| Know what you are permitted to invent, and tell the audience where you stand: the permission ladder runs from fiction, which may invent freely, through performed work that may shape, to journalism that may select and arrange but never invent, to documentation that records rather than shapes. The four grounds for believing a documentary are sourcing, disclosure, method and accountability, none of which appears in the footage, which is exactly why roughness proves nothing and why synthetic media does not remove them.

## Sources
- Chesney, R., & Citron, D. (2019). Deep fakes: A looming challenge for privacy, democracy, and national security. *California Law Review, 107*(6), 1753-1820. https://www.californialawreview.org/print/deep-fakes-a-looming-challenge-for-privacy-democracy-and-national-security
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press. https://doi.org/10.2307/j.ctt2005t6j
- Pooley, J., & Socolow, M. (2013, October 28). The myth of the War of the Worlds panic. *Slate*. https://slate.com/culture/2013/10/orson-welles-war-of-the-worlds-panic-myth-the-infamous-radio-broadcast-did-not-cause-a-nationwide-hysteria.html
- Roscoe, J., & Hight, C. (2001). *Faking it: Mock-documentary and the subversion of factuality*. Manchester University Press. https://lccn.loc.gov/2001055895
- Schwartz, A. B. (2015). *Broadcast hysteria: Orson Welles's War of the Worlds and the art of fake news*. Hill and Wang. https://lccn.loc.gov/2014040510`,
    },
  ],
};
