// Authored "Short-Form Drama: Constraint as a Structural Tool" — course #3 of the Storytelling
// series (docs/storytelling-curriculum.md).
//
// The series' spine vocabulary is fixed and this course may not invent synonyms: the change, the
// owner, want and obstacle, withholding, scene and summary, the turn. Where a form has its own
// traditional term, the course names it and maps it back.
//
// WHY THIS COURSE EXISTS ALONGSIDE THE MONODRAMAS. Monodrama teaches structure by removing the
// crutches. Short form teaches it by removing the TIME, which is a different pressure and produces a
// different discipline: in ten minutes you cannot establish, develop and resolve, so you have to
// learn what can be assumed. Both are ways of making the six terms unavoidable.
//
// SOURCING: real plays with writer and first-production year, and real craft literature. Every play
// named can be read. The ten-minute play festival ecosystem is described as it works, without naming
// specific competitions' current rules, which change annually and would date the course.

import type { AuthoredCourse } from "./authored-course";

export const SHORT_FORM_DRAMA_COURSE: AuthoredCourse = {
  title: "Short-Form Drama: Constraint as a Structural Tool",
  description:
    "Ten minutes is not a shortened play. It is a different machine, and the constraint is the teacher. This course covers what actually fits in ten minutes and what never will, how to start a story that is already in motion, the single-situation principle that makes short work possible, why most short pieces fail at the ending rather than the beginning, the one-act as a longer but still single-pressure form, and how short-form video drama inherits the same structure under different delivery. It teaches adaptation between runtimes in both directions, the production realities that decide whether a short play ever gets staged, and how to use the form as a laboratory: a ten-minute piece is the cheapest way to test a structural idea before spending a year on it. Real plays throughout, from Glaspell to Ives to Albee.",
  lessons: [
    {
      slug: "sfd-what-fits",
      title: "1 · What actually fits in ten minutes",
      section: "Module 1 · The constraint",
      body: `A ten-minute play is not a two-hour play with the boring parts removed. It is a different machine, and writers who treat it as compression produce work that feels rushed rather than short.

**What the constraint takes away:** development. You cannot establish a world, develop a relationship, complicate it, and resolve it. There is not room, and attempting it produces the commonest failure in the form, which is a piece that is all setup and then a sudden ending.

**What the constraint gives you, which is the thing worth learning:** you are forced to discover **what an audience will assume without being told.** That is a genuinely useful skill and long-form writers are usually bad at it, because they have never had to find out.

**What fits, reliably**

- **One situation.** A single continuous pressure, usually in one place, usually in real time.
- **Two people**, or one, or occasionally three. Each additional person costs enormous time, because each needs a want.
- **One change.** Not a subplot. Not a second change for a second character.
- **A relationship the audience recognises within a line or two.** Not because clichés are good, but because you are spending your first thirty seconds and cannot spend more.

**What never fits**

- **A journey.** Anything requiring the passage of significant time.
- **A world that needs explaining.** If the audience must learn rules before the story can start, ten minutes is gone.
- **A twist that recontextualises everything**, unless the setup for it is very cheap. Twists need planting, and planting needs time.
- **Two protagonists.** Someone has to own the change.

**The test to apply to an idea before writing:** can you state the situation in one sentence, and does that sentence already contain the pressure? *"Two strangers keep meeting at the same table and starting the conversation over"* is David Ives's **Sure Thing** (1988), and the situation contains its own engine. *"A woman thinks about her childhood"* is not a situation; it is a subject.

**Start in motion.** The single most reliable structural instruction in short form: **begin after the beginning.** The argument is underway. The decision has already been made and is being announced. Susan Glaspell's **Trifles** (1916) opens with people already arriving at a house where something has already happened, and the play is the discovery, not the event.

:::reveal Why is "a woman thinks about her childhood" an unusable premise for a ten-minute play, when it might work at ninety minutes? ||| Because it is a subject rather than a situation: it contains no pressure and nothing that has to resolve, so nothing makes minute four necessary after minute three. At ninety minutes you can afford to build a situation around a subject; at ten the situation has to be there in the premise itself. The usable version names a pressure, something like "a woman has forty minutes to decide whether to sign the papers her brother is holding," where the sentence already contains the engine.

## Sources
- Glaspell, S. (1916). *Trifles*. Frank Shay.
- Ives, D. (1994). *All in the timing: Fourteen plays*. Vintage Books.
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.`,
    },
    {
      slug: "sfd-single-situation",
      title: "2 · The single-situation principle",
      section: "Module 1 · The constraint",
      recallContent: [
        {
          prompt: "What is the most reliable structural instruction for short form, and what does it mean in practice?",
          answer:
            "Begin after the beginning: start in motion. The argument is already underway, the decision has already been made and is being announced, the people have already arrived. You skip the establishing and let the audience assemble the situation from what is happening.",
        },
      ],
      body: `**One situation, one place, one continuous pressure.** Nearly every short play that works obeys this, and the ones that appear not to are usually a single situation with a frame around it.

**Why it holds.** A change of location costs you the audience's re-orientation, and in ten minutes you cannot afford it twice. A change of time costs the same. Staying put means every second of attention is spent on the pressure rather than on keeping up.

**The pressure has to be live.** Not a topic being discussed: something that must be resolved before the characters can leave. Ask of your situation: **what stops them walking out of the room?** If nothing does, the audience will feel that even if they cannot name it.

Reliable sources of pressure, and they are ordinary:

- **A deadline inside the scene.** The taxi is coming. The meeting starts in ten minutes.
- **A thing that must be said**, and the difficulty of saying it.
- **A decision that must be made jointly**, where the parties want different outcomes.
- **A physical necessity.** Something is being packed, dismantled, or cleaned up, and it will be finished.

**That last one is underused and very strong**, because it gives the scene a clock the audience can see. When the box is packed, the scene is over. Glaspell's *Trifles* (1916) uses exactly this: two women tidy a kitchen while the men search the house, and the tidying is how they find what the men miss.

**The applied test for want and obstacle**, from the series vocabulary: in a short piece, both must be visible almost immediately, and the obstacle should preferably be **the other person**. An external obstacle needs establishing. A person standing in the way is legible instantly.

**Where the single-situation principle can be broken.** Two structures survive it:

- **The repeating situation.** The same scene, restarted with variations, as in Ives's *Sure Thing* (1988), where a bell resets a conversation. The repetition IS the situation.
- **The frame.** A present-tense situation containing a told story. The frame must still have its own pressure or it is decoration.

**The failure that follows from ignoring this** is the piece that has three short scenes in three locations. It reads as an outline for something longer, and it is the single most common thing that gets rejected from short-play festivals.

:::reveal Name the strongest kind of pressure for a ten-minute play and say why it works better than a deadline mentioned in dialogue. ||| A physical necessity underway on stage: something being packed, dismantled or cleaned up that will visibly be finished. It works better than a mentioned deadline because the audience can SEE the clock rather than having to remember it, so the tension is continuously present rather than dependent on a line they may have half-heard. When the box is packed, the scene is over, and everyone in the room knows it without being told again.

## Sources
- Glaspell, S. (1916). *Trifles*. Frank Shay.
- Ives, D. (1994). *All in the timing: Fourteen plays*. Vintage Books.`,
    },
    {
      slug: "sfd-endings",
      title: "3 · Why short pieces fail at the end",
      section: "Module 1 · The constraint",
      body: `Most rejected short plays are competent for eight minutes and fall apart in the last two. The beginning is the part writers rehearse; the ending is the part they run out of time for, both in the writing and on the page.

**The four failed endings, all recognisable**

**1. The blackout gag.** A joke, a reversal, or a shock in the final line, unearned by anything before it. Feels like a sketch. The tell: you could delete the previous eight minutes and the last line would still land the same way, which means the play was not doing anything.

**2. The unearned reconciliation.** The obstacle simply dissolves. Somebody decides to be reasonable. **Nothing has changed; someone has just stopped wanting.** This is the commonest one and it comes from writers who are kind.

**3. The escape.** Someone leaves, or the phone rings, or an outside event ends the scene. **An interruption is not a resolution.** It can be the ending only if the interruption is what the piece was about.

**4. The stop.** It simply ends, usually because the writer hit ten minutes. The audience sits waiting for one more beat that does not come.

**What a working short ending does**, and it is the same rule as the monodrama: it says what the change means, and the change has to have happened.

Three shapes that work at this length:

- **The cost, paid.** Someone gets what they wanted and you see what it took. Fast, and it lands because the audience does the arithmetic themselves.
- **The refusal.** Someone declines to do the thing the whole scene has been pushing toward. Powerful because a want abandoned deliberately is still a change.
- **The object.** A physical thing set up early returns and carries the meaning without a line. In ten minutes you can plant and pay off ONE object, and doing it well is close to the whole craft of the form.

**The practical test.** Cover the last thirty seconds and ask: **is it obvious what has changed?** If the change only becomes clear in the final lines, the piece is back-loaded and the ending is doing work the body should have done. If the change is clear, the ending's only job is to say what it costs, which is a much easier job.

**And the turn, from the series vocabulary,** should sit around two thirds through. Earlier and the last third has nothing to do; later and there is no room to land it. That is a rule of thumb rather than a law, and in ten minutes the room for variation is genuinely small.

:::reveal Your ten-minute play ends with the phone ringing and the characters leaving. Diagnose it. ||| It is the escape ending: an outside interruption stopping the scene rather than resolving it. Nothing about the pressure has been settled, so the audience is left with an ending in the clock sense rather than in the story sense. It can only work if the interruption is what the piece was actually about, for instance if the whole scene was about waiting for that call. Otherwise the fix is to make somebody decide something, even if what they decide is to refuse.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Ives, D. (1994). *All in the timing: Fourteen plays*. Vintage Books.`,
    },
    {
      slug: "sfd-quiz-1",
      title: "4 · Knowledge check: the constraint",
      section: "Module 1 · The constraint",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the ten-minute constraint force a writer to learn?",
            options: [
              "What an audience will assume without being told",
              "How to write dialogue more quickly under time pressure",
              "How to reduce the number of words in every speech",
              "Which scenes can be cut from a longer existing play",
            ],
            correctIndex: 0,
            explanation:
              "That skill is genuinely useful and long-form writers are usually bad at it, because they have never been forced to find out. Compression is not the same as short.",
            sourceLessonSlug: "sfd-what-fits",
          },
          {
            prompt: "Why is 'a woman thinks about her childhood' unusable as a short-play premise?",
            options: [
              "Childhood material is overused in short-play festivals",
              "It is a subject rather than a situation, so it contains no pressure",
              "It requires a single performer, which limits casting",
              "It cannot be staged without a significant set budget",
            ],
            correctIndex: 1,
            explanation:
              "Nothing makes minute four necessary after minute three. A usable premise names a pressure, so the sentence itself contains the engine.",
            sourceLessonSlug: "sfd-what-fits",
          },
          {
            prompt: "What is the single-situation principle?",
            options: [
              "Every character should want one thing and nothing else",
              "The play should contain only one line of dialogue per beat",
              "One situation, one place, one continuous pressure",
              "A short play should be staged in a single lighting state",
            ],
            correctIndex: 2,
            explanation:
              "Changing location or time costs the audience's re-orientation, and ten minutes cannot afford it twice. Staying put spends every second on the pressure.",
            sourceLessonSlug: "sfd-single-situation",
          },
          {
            prompt: "Which source of pressure does the course call underused and very strong?",
            options: [
              "A deadline mentioned by a character in dialogue",
              "A secret one character is keeping from another",
              "An offstage event the characters are waiting to hear about",
              "A physical necessity underway on stage that will visibly finish",
            ],
            correctIndex: 3,
            explanation:
              "Packing, dismantling or cleaning gives the audience a clock they can see, so the tension is continuously present rather than dependent on remembering a line. Trifles uses exactly this.",
            sourceLessonSlug: "sfd-single-situation",
          },
          {
            prompt: "In a short play, what should the obstacle preferably be?",
            options: [
              "The other person in the scene",
              "An external circumstance beyond anyone's control",
              "The protagonist's own internal hesitation",
              "A rule of the fictional world established early",
            ],
            correctIndex: 0,
            explanation:
              "A person standing in the way is legible instantly, where an external obstacle needs establishing and establishing costs time you do not have.",
            sourceLessonSlug: "sfd-single-situation",
          },
          {
            prompt: "What is the 'unearned reconciliation' failure?",
            options: [
              "Two characters agree before the audience knows what is at stake",
              "The obstacle dissolves because someone simply stops wanting",
              "The play resolves in a location the audience has not seen",
              "The ending repeats a line from the opening exchange",
            ],
            correctIndex: 1,
            explanation:
              "Nothing has changed; someone has just stopped wanting. The course notes it is the commonest failed ending and that it comes from writers who are kind.",
            sourceLessonSlug: "sfd-endings",
          },
          {
            prompt: "How can you tell a short play has a blackout-gag ending?",
            options: [
              "The final line is funnier than anything preceding it",
              "The lights cut before the characters finish speaking",
              "You could delete the previous eight minutes and it would land the same",
              "It ends on a question rather than a statement",
            ],
            correctIndex: 2,
            explanation:
              "That test reveals the play was not doing anything: if the body of the piece is not required for the ending to work, the body was decoration.",
            sourceLessonSlug: "sfd-endings",
          },
          {
            prompt: "What is the practical test for whether an ending is doing too much work?",
            options: [
              "Read it aloud and time whether it exceeds ten minutes",
              "Cover the last thirty seconds and ask whether the change is obvious",
              "Remove the final stage direction and see if it still stages",
              "Check whether every character speaks in the closing exchange",
            ],
            correctIndex: 1,
            explanation:
              "If the change only becomes clear in the final lines, the piece is back-loaded. When the change is already clear, the ending only has to say what it cost, which is far easier.",
            sourceLessonSlug: "sfd-endings",
          },
          {
            prompt: "Roughly where should the turn sit in a ten-minute play?",
            options: [
              "In the opening ninety seconds, to establish stakes early",
              "Exactly halfway, dividing the piece into equal parts",
              "In the final thirty seconds, as the climax",
              "Around two thirds through",
            ],
            correctIndex: 3,
            explanation:
              "Earlier and the last third has nothing to do; later and there is no room to land it. A rule of thumb rather than a law, but the room for variation at this length is genuinely small.",
            sourceLessonSlug: "sfd-endings",
          },
          {
            prompt: "Which structure legitimately breaks the single-situation principle?",
            options: [
              "The repeating situation, where the scene resets with variations",
              "The travelogue, where each scene occurs in a new place",
              "The ensemble piece, where four characters each get a want",
              "The flashback structure, alternating past and present",
            ],
            correctIndex: 0,
            explanation:
              "In Ives's Sure Thing a bell resets the conversation, so the repetition is the situation. The other survivor is a frame containing a told story, provided the frame has its own pressure.",
            sourceLessonSlug: "sfd-single-situation",
          },
        ],
      },
    },
    {
      slug: "sfd-one-act",
      title: "5 · The one-act: longer, still single-pressure",
      section: "Module 2 · Longer and other media",
      recallContent: [
        {
          prompt: "Name two of the four failed endings in short form, and what each one actually is.",
          answer:
            "Any two of: the blackout gag (an unearned final reversal you could reach without the preceding eight minutes), the unearned reconciliation (the obstacle dissolves because someone stops wanting), the escape (an interruption ends the scene without resolving it), and the stop (it simply ends because the writer hit the runtime).",
        },
      ],
      body: `A one-act is usually twenty to fifty minutes and it is not a short play with more room. **It is the longest form that can still run on a single pressure**, which is what makes it a distinct machine rather than a small full-length.

**What the extra time buys**

- **A second want for the same character**, in tension with the first. Not a subplot: a complication of the one want.
- **A genuine reversal before the turn.** In ten minutes you get one movement; here you can afford a false resolution that then collapses.
- **A third character** who changes the dynamic, usually by arriving.
- **Actual development of the relationship**, which ten minutes cannot do.

**What it still cannot do:** carry two independent storylines, or move through significant time. The moment a piece needs a second timeframe it is asking to be a full-length.

**Edward Albee's *The Zoo Story* (first produced 1959) is the standard study.** Two men, one bench, one continuous conversation, and a pressure that escalates without a location change or a time jump. It demonstrates the form's whole thesis: a single situation, given forty minutes instead of ten, can go somewhere a short play cannot reach while still obeying the same rule.

**The commonest one-act failure is different from the short-play one.** Short plays fail at the ending. One-acts fail in the **middle**, at around the twenty-minute mark, where the initial pressure has been established and explored and the writer has not yet introduced the complication. The audience feels the piece flatten. The fix is structural rather than linear: something must **change the terms** somewhere around the halfway point, whether an arrival, a revelation, or a want that turns out to be a different want.

**The two-hander is the natural shape** at this length, and worth understanding as an economic fact as well as an artistic one: it is the most producible serious theatre there is. Two actors, one set, no interval. **A large proportion of new work that actually gets staged is in this shape**, and a writer who can build one well has a real advantage.

:::reveal A one-act flattens around twenty minutes in. What has gone wrong structurally, and what is the fix? ||| The initial pressure has been established and fully explored, and nothing has yet complicated it, so the piece is repeating rather than developing. The fix is not to write more of the same but to change the TERMS around the halfway point: someone arrives, something is revealed, or the want turns out to be a different want than it appeared. That is exactly what the extra time over a ten-minute play buys, and a one-act that does not use it is a short play stretched.

## Sources
- Albee, E. (1960). *The zoo story*. Coward-McCann.
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.`,
    },
    {
      slug: "sfd-short-video",
      title: "6 · Short-form video drama, and what it inherits",
      section: "Module 2 · Longer and other media",
      body: `Short-form video drama, including the vertical and social-platform kind, is a delivery change rather than a craft change. **Everything from Module 1 applies**, and three things are genuinely different.

**What carries over unchanged:** the single situation, starting in motion, the obstacle being another person, one plantable object, the turn around two thirds, and every one of the four failed endings. A piece that fails on stage for the escape ending fails on a phone for the same reason.

**Difference 1: the first three seconds are structural, not decorative.** On stage the audience has committed by being in the room. On a feed they have committed to nothing, and the cost of leaving is zero. **Starting in motion stops being good advice and becomes the whole opening.** The situation and its pressure have to be legible almost immediately, which is the ten-minute discipline intensified rather than a new skill.

**Difference 2: the frame is the stage, and it is small.** A phone screen holds one face well, two faces badly, and a wide shot almost not at all. This pushes hard toward two-handers and toward faces, and it makes the physical-necessity pressure from Lesson 2 harder, because you cannot easily show a box being packed and a face at the same time.

**Difference 3: sound is doing more than you think, and often being ignored.** Much of the audience watches without sound at first. Whether that argues for captions or for a piece that works silently for a few seconds is a decision to make deliberately rather than to discover.

**What does not change and is worth being blunt about:** none of this removes the need for a change. **A short video with no change is a mood, and moods do not accumulate into a story** however well shot. The structural failure rate in short-form video is high for exactly this reason: the delivery rewards attention-grabbing openings, and an opening is not a piece.

**Serialisation is the real difference in kind.** A series of short pieces can do what a single short cannot, if each instalment has its own small change while a larger one accumulates. That is a genuinely different structure and it is closest to the list form from Monodrama I: the individual items must be satisfying AND the sequence must be necessary. **If episode nine could be episode two, there is no series, only a collection.**

:::reveal A short-form video has a strong hook, beautiful images and a strong mood, and viewers do not finish it. What is most likely missing? ||| A change. Mood and images buy the first few seconds, which is what the delivery rewards, but nothing after that makes the next moment necessary unless something is different at the end from the beginning. This is the same diagnosis as an anecdote on stage, and the platform disguises it because a strong opening produces good early metrics while people still leave before the end.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Ives, D. (1994). *All in the timing: Fourteen plays*. Vintage Books.`,
    },
    {
      slug: "sfd-adaptation",
      title: "7 · Moving between runtimes in both directions",
      section: "Module 2 · Longer and other media",
      body: `Writers are routinely asked to make something longer or shorter, and both directions have a right and a wrong method.

**Cutting a long piece down to ten minutes.** The wrong method is trimming everywhere, which produces a thin version of the same shape. The right method:

1. **Find the single situation** the piece contains. Usually one scene is already the play.
2. **Throw away everything else**, including material you like.
3. **Start after the beginning** of that scene.
4. **Rebuild the ending**, because the original ending resolved things this version never raised.

**The hardest part is step 2**, and the test is the same one Monodrama I applies to real events: material earns its place against the change, and being good writing is not the same as earning it.

**Expanding a short piece.** The wrong method is adding scenes before and after, which produces a short play with padding. What actually works is finding the **complication the short version could not afford**: a second want in tension with the first, a third character, a false resolution that collapses. That is genuine growth rather than extension, and it is why Lesson 5's account of what a one-act buys is the map for expansion.

**The honest warning:** not every short piece wants to be longer. A ten-minute play that works completely is a finished thing. **The pressure to expand is usually commercial rather than artistic**, and a good short made into a mediocre one-act is a common and avoidable loss.

**Short form as a laboratory, which is the argument for writing them even if you want to write full-lengths.** A ten-minute play is the cheapest possible test of a structural idea. You can find out whether a premise has an engine, whether a relationship is legible, and whether an ending shape works, in a week rather than a year. **Writers who work only at full length find out the same things after twelve months of investment**, when it is much more expensive to abandon.

**The production reality**, which is genuinely relevant to what you choose to write. Short plays get staged through festivals and evenings of short work, and those programs generally favor small casts, minimal sets, and pieces that need almost no technical support, because ten pieces share one stage in one night. A ten-minute play with six actors and a set change is a good play that will be produced rarely. **That is a constraint worth knowing before you write rather than after**, and it is not an argument for writing worse plays, only for knowing what the form's economics reward.

:::reveal You are asked to expand a working ten-minute play into a one-act. What is the right move, and what is the warning attached? ||| The right move is to find the complication the short version could not afford: a second want in tension with the first, a third character who changes the dynamic, or a false resolution that then collapses. Adding scenes before and after just produces a short play with padding. The warning is that not every short piece wants to be longer: a ten-minute play that works completely is a finished thing, the pressure to expand is usually commercial, and a good short turned into a mediocre one-act is a common and avoidable loss.

## Sources
- Albee, E. (1960). *The zoo story*. Coward-McCann.
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Ives, D. (1994). *All in the timing: Fourteen plays*. Vintage Books.`,
    },
    {
      slug: "sfd-quiz-2",
      title: "8 · Knowledge check: longer and other media",
      section: "Module 2 · Longer and other media",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does a one-act's extra time over a ten-minute play buy?",
            options: [
              "A second independent storyline running alongside the first",
              "A complication of the one want, and a reversal before the turn",
              "The ability to move through several years of story time",
              "Room for a larger cast with four or five equal parts",
            ],
            correctIndex: 1,
            explanation:
              "It is the longest form that still runs on a single pressure. Two independent storylines or a second timeframe means the piece is asking to be a full-length.",
            sourceLessonSlug: "sfd-one-act",
          },
          {
            prompt: "Where do one-acts typically fail, and how does that differ from short plays?",
            options: [
              "In the middle, where short plays fail at the ending",
              "At the ending, exactly as short plays do",
              "In the opening, because they establish too slowly",
              "In casting, because the parts are unequally weighted",
            ],
            correctIndex: 0,
            explanation:
              "Around the twenty-minute mark the initial pressure has been explored and nothing has complicated it yet, so the piece flattens. The fix is to change the terms at roughly the halfway point.",
            sourceLessonSlug: "sfd-one-act",
          },
          {
            prompt: "Why is the two-hander described as an economic fact as well as an artistic one?",
            options: [
              "Two-handers reliably command higher royalties than ensemble plays do",
              "Festival programs require every submission to have exactly two speaking roles",
              "Two actors, one set and no interval make it the most producible serious theatre",
              "Two-person scenes are considerably quicker to write than group scenes are",
            ],
            correctIndex: 2,
            explanation:
              "A large proportion of new work that actually gets staged has this shape, so a writer who can build one well has a real advantage in getting produced.",
            sourceLessonSlug: "sfd-one-act",
          },
          {
            prompt: "What is genuinely different about short-form video drama?",
            options: [
              "The change becomes optional because the runtime is shorter",
              "The obstacle should be circumstance rather than another person",
              "Endings can rely on interruption because viewers expect it",
              "The first seconds are structural, since the cost of leaving is zero",
            ],
            correctIndex: 3,
            explanation:
              "On stage the audience has committed by being in the room. On a feed they have committed to nothing, so starting in motion stops being advice and becomes the entire opening.",
            sourceLessonSlug: "sfd-short-video",
          },
          {
            prompt: "A short video has a strong hook and beautiful images, and viewers do not finish it. What is missing?",
            options: [
              "A change, without which it is a mood rather than a story",
              "Captions, without which the sound-off audience disengages",
              "A second character to create dialogue",
              "A longer runtime to develop the premise",
            ],
            correctIndex: 0,
            explanation:
              "The platform disguises this because a strong opening produces good early metrics while people still leave. Moods do not accumulate into a story however well shot.",
            sourceLessonSlug: "sfd-short-video",
          },
          {
            prompt: "What makes a series of short pieces a series rather than a collection?",
            options: [
              "A consistent cast and a consistent visual style maintained across instalments",
              "Each instalment has its own change while a larger one accumulates",
              "A cliffhanger placed at the end of every single instalment",
              "Release on a fixed weekly schedule the audience can rely on",
            ],
            correctIndex: 1,
            explanation:
              "If episode nine could be episode two, there is no series. It is the same requirement as the list form: items satisfying individually, and the sequence necessary.",
            sourceLessonSlug: "sfd-short-video",
          },
          {
            prompt: "What is the right method for cutting a long piece down to ten minutes?",
            options: [
              "Trim proportionally across every scene to preserve the shape",
              "Keep the first and last scenes and cut the middle",
              "Find the single situation, discard the rest, and rebuild the ending",
              "Convert the dialogue to summary and narrate the connections",
            ],
            correctIndex: 2,
            explanation:
              "Usually one scene is already the play. Trimming everywhere produces a thin version of the same shape, and the original ending resolved things the new version never raised.",
            sourceLessonSlug: "sfd-adaptation",
          },
          {
            prompt: "What is the warning attached to expanding a working short play?",
            options: [
              "Longer plays are considerably harder to place with festival programs",
              "Expansion requires the existing dialogue to be rewritten entirely",
              "Audiences now prefer short work in most contemporary theatre venues",
              "Not every short wants to be longer; the pressure is usually commercial",
            ],
            correctIndex: 3,
            explanation:
              "A ten-minute play that works completely is a finished thing, and a good short turned into a mediocre one-act is a common and avoidable loss.",
            sourceLessonSlug: "sfd-adaptation",
          },
          {
            prompt: "Why does the course recommend short form as a laboratory?",
            options: [
              "It tests a structural idea in a week rather than a year",
              "Short plays are more likely to win competitions",
              "It is the only form that permits experimental structure",
              "Short work requires no revision before submission",
            ],
            correctIndex: 0,
            explanation:
              "You find out whether a premise has an engine and whether an ending shape works cheaply. Writers who work only at full length learn the same things after twelve months, when abandoning is far more expensive.",
            sourceLessonSlug: "sfd-adaptation",
          },
          {
            prompt: "What production reality shapes what short plays get staged?",
            options: [
              "Festival programs require every play to run under eight minutes",
              "Programs favor small casts, minimal sets and little technical support",
              "Only plays whose scripts are already published are eligible for programming",
              "Venues require a director to already be attached at the point of submission",
            ],
            correctIndex: 1,
            explanation:
              "Ten pieces share one stage in one night. A ten-minute play with six actors and a set change is a good play that will be produced rarely, which is worth knowing before writing rather than after.",
            sourceLessonSlug: "sfd-adaptation",
          },
        ],
      },
    },
    {
      slug: "sfd-capstone",
      title: "9 · Capstone: one ten-minute play, tested",
      section: "Module 3 · Close",
      lessonType: "assignment",
      body: `One ten-minute play, plus evidence that you tested it rather than only wrote it.

**What to submit.**

**1. The premise in one sentence**, containing the pressure. If your sentence names a subject rather than a situation, fix that before writing anything else. This is the highest-leverage line in the whole assignment.

**2. The play.** Ten minutes, which is roughly ten pages of standard format. One situation. Two or three characters at most.

**3. The structural note**, four short answers:
   - What is **the change**, and who is **the owner**?
   - What is the **want** and what is the **obstacle**, and is the obstacle a person?
   - Where is **the turn**, by line, and is it around two thirds through?
   - What **stops them walking out of the room**?

**4. A read-aloud, with people.** Get at least two people to read it aloud to you, or read it with them. You are listening for two things: **where they stumble**, which is usually a line that is written rather than spoken, and **where the pressure drops**.

**5. What the read taught you**, specifically. Where did it drag? Did the ending land, and if not, which of the four failed endings is yours? Naming your own failure mode by its name is most of the fix.

**6. The revision.** At least three changes with the evidence behind them. **At least one must be a cut.**

**7. The producibility check.** How many actors, how much set, how many technical cues? If it needs more than a couple of actors and a chair, say why the play genuinely requires it. That is an allowed answer, and it should be a considered one.

**Optional, and worth doing:** write a second ten-minute play from a premise you already know does not work. Ten minutes is cheap, and finding out fast is the point of the form.

**What a strong submission looks like.** A premise sentence with an engine in it, a turn you can point to by line number, an ending that is not one of the four, and a cut you can justify. **A play that failed in the read and was diagnosed accurately scores higher than one nobody has read aloud**, because only the first one has been tested.`,
    },
    {
      slug: "sfd-review-and-sources",
      title: "10 · Cumulative review and sources",
      section: "Module 3 · Close",
      body: `**Ten minutes is a different machine, not a compressed play.** The constraint teaches you what an audience will assume without being told.

**A premise must be a situation, not a subject.** The sentence should contain the pressure.

**Begin after the beginning.** Start in motion. The argument is underway.

**One situation, one place, one continuous pressure.** Ask what stops them walking out of the room. The strongest pressure is a physical necessity the audience can watch finish.

**Make the obstacle a person.** External obstacles need establishing and establishing costs time.

**Plant one object and pay it off.** In ten minutes you get one, and doing it well is close to the whole craft.

**The four failed endings:** the blackout gag, the unearned reconciliation, the escape, and the stop. The working shapes are the cost paid, the refusal, and the object returning.

**Test the ending by covering the last thirty seconds.** If the change is not already obvious, the piece is back-loaded.

**The turn sits around two thirds through.**

**A one-act is the longest form that still runs on a single pressure.** It buys a complication, a reversal, and a third character. It fails in the middle, and the fix is to change the terms at the halfway point.

**Short-form video inherits all of it.** The difference is that the first seconds are structural, the frame is small, and a mood is not a story. A series needs each instalment to change something while a larger change accumulates.

**Cutting down: find the single situation, discard the rest, rebuild the ending. Expanding: find the complication the short version could not afford**, and be honest that not every short wants to be longer.

**Short form is a laboratory.** A week to learn what would otherwise cost a year.

:::reveal Without looking back, name the four failed endings and the test that catches a back-loaded piece. ||| The blackout gag, the unearned reconciliation, the escape, and the stop. The test is to cover the last thirty seconds and ask whether it is obvious what has changed: if the change only becomes clear in the final lines, the ending is doing work the body of the play should have done, and the fix belongs earlier rather than in the ending itself.

## Sources
- Albee, E. (1960). *The zoo story*. Coward-McCann.
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.
- Glaspell, S. (1916). *Trifles*. Frank Shay.
- Ives, D. (1994). *All in the timing: Fourteen plays*. Vintage Books.`,
    },
  ],
};
