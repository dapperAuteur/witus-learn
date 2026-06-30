// Authored "Learning How to Learn" — a study-skills foundation on Learn.WitUS.
// Teaches the cognitive science of durable learning: how memory works, retrieval
// practice (the testing effect), spaced repetition, interleaving, focused vs.
// diffuse thinking, sleep-dependent consolidation, deliberate practice, beating
// procrastination, and metacognition — then assembles them into a study system.
// Every claim ties to a verified primary source (Roediger & Karpicke 2006;
// Karpicke & Blunt 2011; Cepeda et al. 2006; Rohrer & Taylor 2007; Dunlosky et al.
// 2013; Bjork & Bjork 2011; Diekelmann & Born 2010; Ericsson et al. 1993;
// Flavell 1979; Oakley & Sejnowski 2018). APA 7 in-line + a `## Sources` block per
// lesson. Points learners to FlashLearn for spaced recall. Exercises + a final quiz
// whose every question links to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const LEARNING_HOW_TO_LEARN_COURSE: AuthoredCourse = {
  title: "Learning How to Learn",
  description:
    "Most of us were never taught how to study — so we reread, highlight, and cram, which feel productive but fade fast. This course replaces those habits with what cognitive science actually shows works: retrieval practice, spaced repetition, interleaving, sleep, and deliberate practice. Each lesson is cited to the original research. By the end you'll have a study system you can run on any subject — and know why each piece earns its place.",
  lessons: [
    // ── Section 1: How Memory Works ───────────────────────────────────────────
    {
      slug: "how-memory-works",
      title: "1 · How memory works: encoding, storage, retrieval",
      section: "How Memory Works",
      body: `Before you can study well, it helps to know what you're actually trying to do. Memory runs in three steps:

- **Encoding** — getting information *in*. You turn what you see, hear, or do into a memory trace. Encoding is stronger when you process meaning (not just words) and connect new material to what you already know.
- **Storage** — holding it *over time*. A freshly made memory is fragile; it gets stabilized over hours and days (a process called consolidation — see the sleep lesson).
- **Retrieval** — getting it *back out*. This is the step that actually matters on a test, in a conversation, or on the job. And — this is the key insight of the whole course — **retrieval is not just a readout of memory; the act of retrieving changes the memory, making it easier to retrieve again** (Roediger & Karpicke, 2006).

Here's the trap. Most popular study methods — rereading, highlighting, copying notes — are **encoding-heavy and retrieval-light**. They make material feel familiar, and familiarity feels like knowing. But on a delayed test, students who only restudied did far worse than students who practiced *recalling* the material (Roediger & Karpicke, 2006). Familiarity is a feeling; retrieval is the skill.

A large review of study techniques reached the same verdict: rereading and highlighting are among the **least** effective strategies students rely on, while practice testing is among the **most** effective (Dunlosky et al., 2013).

**Mindset for this course:** study time is best spent **getting information out of your head**, not just putting it in. Every technique ahead is a way to do that.

**Check yourself.** Which of the three steps — encoding, storage, retrieval — does rereading mostly exercise, and which one do tests actually measure?

## Sources
- Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science, 17*(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. *Psychological Science in the Public Interest, 14*(1), 4–58. https://doi.org/10.1177/1529100612453266`,
    },
    {
      slug: "focused-and-diffuse-thinking",
      title: "2 · Two modes: focused and diffuse thinking",
      section: "How Memory Works",
      body: `When you learn, your brain works in two complementary modes (Oakley & Sejnowski, 2018):

- **Focused mode** — tight, deliberate concentration on the thing in front of you. This is where you work problems, follow a derivation, and deliberately retrieve facts. It's powerful but narrow: it tends to run along paths you've already built.
- **Diffuse mode** — a relaxed, wandering state your brain slips into when you step away: on a walk, in the shower, falling asleep. In this mode it makes loose, big-picture connections across ideas that focused mode can't reach.

The practical point: **hard problems often get solved by switching between the two.** You work in focused mode until you're stuck, then you stop and let diffuse mode take over. The classic move is to load a problem into your mind, deliberately do something else, and come back — the answer is often waiting. This is also why **cramming fails**: stay in focused mode for hours and you never give diffuse mode the gap it needs, and you never let the material consolidate.

This connects directly to two later lessons: **spacing** your study (so diffuse mode and consolidation can act between sessions) and **sleep** (the deepest form of diffuse-mode processing). Oakley and Sejnowski built their widely taken course *Learning How to Learn* around exactly this idea — pairing the two modes, and using short bursts of focus rather than marathon sessions (Oakley & Sejnowski, 2018).

**Check yourself.** You've been stuck on the same problem for 30 minutes. Based on the two-modes idea, what should you do?

## Sources
- Oakley, B., & Sejnowski, T. (2018). *Learning how to learn: How to succeed in school without spending all your time studying; a guide for kids and teens.* TarcherPerigee.`,
    },

    // ── Section 2: Practice That Sticks ───────────────────────────────────────
    {
      slug: "retrieval-practice",
      title: "3 · Retrieval practice (the testing effect)",
      section: "Practice That Sticks",
      body: `If you remember one thing from this course, make it this: **trying to recall something is one of the most powerful ways to learn it.** Psychologists call this the *testing effect* or *retrieval practice*.

In a landmark study, students read prose passages and then either restudied them or took recall tests with no feedback. On an immediate test, restudying looked slightly better. But after a delay of two to seven days — the timescale that actually matters — the students who had **practiced retrieving** the material retained substantially more than those who had reread it (Roediger & Karpicke, 2006). The act of pulling a memory out makes that memory stronger and more durable.

It even beats strategies that *feel* more sophisticated. In a study published in *Science*, students who studied a science text by **practicing retrieval** outperformed students who built elaborate **concept maps** of the same text — and the retrieval advantage held even when the final test was itself making a concept map (Karpicke & Blunt, 2011). Effortful recall beat rich, organized restudy.

How to use it:

- **Close the book and ask yourself what you just learned.** Write or say it from memory before checking.
- **Use questions, flashcards, and practice problems** instead of rereading.
- **Let it feel hard.** The struggle to recall *is* the mechanism — if it were easy, no learning would be happening. (More on this "desirable difficulty" idea in the interleaving lesson.)
- **Tools help.** A flashcard app like **FlashLearn** turns any set of facts into retrieval practice, so you're recalling rather than rereading — and, as the next lesson shows, it can schedule that recall over time for you.

This is why every quiz in Learn.WitUS courses links each question back to the lesson that teaches it: the quiz isn't just a grade, it's a learning tool.

**Check yourself.** Why did rereading look *better* than testing on an immediate test but *worse* after a week?

## Sources
- Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science, 17*(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. *Science, 331*(6018), 772–775. https://doi.org/10.1126/science.1199327`,
    },
    {
      slug: "spaced-repetition",
      title: "4 · Spaced repetition",
      section: "Practice That Sticks",
      body: `Now add *timing* to retrieval practice. **Spacing your study sessions out over time beats packing them together** ("massed" practice, a.k.a. cramming), even when the total study time is identical. This is one of the most robust findings in all of learning science.

A meta-analysis pulled together **839 comparisons from 317 experiments** and found a clear, consistent advantage for **distributed (spaced) practice** over massed practice on later memory (Cepeda et al., 2006). The same review surfaced a crucial wrinkle: the *best* gap between sessions grows as the gap to your final test grows. Roughly — if you need to remember something for a long time, you should space your reviews further apart.

The classic pattern is **expanding intervals**: review something after a day, then a few days, then a week, then a couple of weeks. Each successful recall buys you a longer gap before the next one. Independent reviews of effective study techniques rate distributed practice as one of the highest-utility strategies there is (Dunlosky et al., 2013).

How to use it:

- **Plan to revisit material on a schedule**, not in one sitting. Three 30-minute sessions across a week beat one 90-minute block.
- **Combine spacing with retrieval** — each review should be a *recall* attempt, not a reread. This is "spaced retrieval," and it's the engine behind every good flashcard system.
- **Let software do the scheduling.** A spaced-repetition tool like **FlashLearn** tracks each card and resurfaces it right around when you're about to forget it — automating the expanding-interval pattern so you don't have to plan it by hand.

**Check yourself.** You have four hours to prepare for a test next week. What's the better plan: one four-hour session tonight, or four one-hour sessions across the week — and why?

## Sources
- Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin, 132*(3), 354–380. https://doi.org/10.1037/0033-2909.132.3.354
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. *Psychological Science in the Public Interest, 14*(1), 4–58. https://doi.org/10.1177/1529100612453266`,
    },
    {
      slug: "interleaving",
      title: "5 · Interleaving (mix it up)",
      section: "Practice That Sticks",
      body: `When you practice several related skills or topics, you can **block** them (all of topic A, then all of B, then all of C) or **interleave** them (A, C, B, A, B, C…). Blocking feels smoother and more productive. Interleaving feels harder and more confusing — and it produces better learning.

In a clean demonstration, students practiced math problems either blocked by type or interleaved. During practice, the blocked group looked better. But on a test **one day later, the interleaved group's scores were roughly double** the blocked group's (Rohrer & Taylor, 2007). Mixing the problems forced students to do the hardest part of real problem-solving: figuring out *which* approach a given problem needs — a skill blocked practice quietly skips, because the answer type is given away by the worksheet heading.

Why does the harder-feeling method win? Because of **desirable difficulties** — the idea that certain challenges *during* study, by forcing more effortful encoding and retrieval, make memory stronger and more flexible *afterward*, even though they slow you down and feel worse in the moment (Bjork & Bjork, 2011). Retrieval practice, spacing, and interleaving are all desirable difficulties. The discomfort isn't a bug; it's the work.

How to use it:

- **Mix problem types or topics** within a study session instead of doing one kind to exhaustion.
- **Shuffle your flashcards** rather than reviewing in a fixed, predictable order.
- **Expect it to feel worse** than blocking — and trust the delayed payoff, not the in-session feeling.

**Check yourself.** Interleaving made practice *feel* harder and look worse that day. Why is that a sign it's working, not failing?

## Sources
- Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. *Instructional Science, 35*(6), 481–498. https://doi.org/10.1007/s11251-007-9015-8
- Bjork, E. L., & Bjork, R. A. (2011). Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning. In M. A. Gernsbacher, R. W. Pew, L. M. Hough, & J. R. Pomerantz (Eds.), *Psychology and the real world: Essays illustrating fundamental contributions to society* (pp. 56–64). Worth Publishers.`,
    },
    {
      slug: "practice-name-the-technique",
      title: "6 · Practice: name the technique",
      section: "Practice That Sticks",
      body: "You've met the three core 'practice that sticks' techniques — retrieval practice, spaced repetition, and interleaving — plus the idea that ties them together. Recall each one from a short description. Spelling is forgiving.",
      exercise: {
        instructions:
          "Each item describes a study technique or idea from this section. Name it. Type your answer, then check.",
        items: [
          {
            prompt: "Closing the book and trying to recall what you just learned, instead of rereading it. This is called ___ practice.",
            answer: "retrieval",
            accept: ["retrieval practice", "testing", "the testing effect"],
            explanation: "Retrieval practice (the testing effect): recalling strengthens memory more than restudying (Roediger & Karpicke, 2006).",
          },
          {
            prompt: "Spreading three short study sessions across a week instead of cramming them into one night. This is ___ (or distributed) practice.",
            answer: "spaced",
            accept: ["spacing", "distributed", "spaced repetition", "distributed practice"],
            explanation: "Spaced / distributed practice beats massed practice across hundreds of experiments (Cepeda et al., 2006).",
          },
          {
            prompt: "Mixing different problem types together (A, C, B, A…) rather than doing all of one type, then all of the next. This is ___.",
            answer: "interleaving",
            accept: ["interleaved practice", "interleave"],
            explanation: "Interleaving roughly doubled next-day test scores versus blocked practice (Rohrer & Taylor, 2007).",
          },
          {
            prompt: "The umbrella idea that some challenges during study feel worse but make learning stronger afterward: ___ difficulties.",
            answer: "desirable",
            accept: ["desirable difficulty", "desirable difficulties"],
            explanation: "Bjork & Bjork (2011): effortful conditions during learning improve long-term retention.",
          },
          {
            prompt: "Cramming all your study into one long block the night before is called ___ practice (the thing all three techniques beat).",
            answer: "massed",
            accept: ["massed practice", "cramming"],
            explanation: "Massed practice feels efficient but fades fast; spacing and retrieval beat it on delayed tests.",
          },
        ],
      },
    },

    // ── Section 3: The Brain Behind Learning ──────────────────────────────────
    {
      slug: "sleep-and-consolidation",
      title: "7 · Sleep and memory consolidation",
      section: "The Brain Behind Learning",
      body: `A memory you form today is not finished today. Over the hours and nights that follow, the brain **consolidates** it — stabilizing it, strengthening the useful connections, and integrating it with what you already know. **Sleep is when much of this happens.**

Reviewing the evidence, Diekelmann and Born (2010) describe how, during sleep, newly formed memories are **reactivated and reorganized**: slow-wave (deep) sleep supports the transfer and strengthening of memories, and sleep as a whole improves the consolidation of both facts (declarative memory) and skills. Across many studies, people who sleep after learning remember more than equally-trained people who stay awake — sleep doesn't just protect a memory from interference, it actively transforms and integrates it.

The implications for studying are direct:

- **Sleep is part of studying, not a competitor to it.** Pulling an all-nighter trades away the exact process that would have locked in what you crammed.
- **Spacing wins partly because of sleep.** Study across several days and you get several nights of consolidation working on the material — another reason distributed practice beats massed practice.
- **A short study session before sleep, then a quick review on waking,** lets consolidation do work for you overnight.

This is also the deepest form of the **diffuse mode** from Lesson 2 — your brain making connections while you're not consciously working.

**Check yourself.** Give two reasons an all-nighter is a poor way to prepare, in terms of consolidation and the modes of thinking.

## Sources
- Diekelmann, S., & Born, J. (2010). The memory function of sleep. *Nature Reviews Neuroscience, 11*(2), 114–126. https://doi.org/10.1038/nrn2762`,
    },
    {
      slug: "deliberate-practice",
      title: "8 · Deliberate practice (not just more reps)",
      section: "The Brain Behind Learning",
      body: `Not all practice is equal. Doing something you can already do, on autopilot, for hours, barely improves you. What separates experts is **deliberate practice**: focused, effortful work aimed squarely at the edge of your ability, with immediate feedback and constant correction (Ericsson, Krampe, & Tesch-Römer, 1993).

In their study of expert musicians, Ericsson and colleagues found that differences in skill tracked the accumulated amount of this *specific kind* of practice — not just total time spent, and not raw talent alone (Ericsson et al., 1993). (You may have heard this distorted into a "10,000-hour rule"; the careful finding is about the *quality and structure* of practice, not a magic number of hours.)

The ingredients of deliberate practice:

- **A specific target just beyond your current reach** — not the whole skill, but the precise sub-skill you're weak on.
- **Full concentration** — short, focused efforts, not distracted marathons (this is the focused mode at work).
- **Immediate feedback** — you find out quickly whether you got it right, so you can correct.
- **Repetition with refinement** — you redo the hard part, adjusting each time, rather than starting over from the top.

For studying, this means: **don't practice what you already know.** Find your error-prone spots, drill those specifically, check answers immediately, and keep nudging the difficulty up. Note how naturally this pairs with retrieval practice (testing finds your weak spots) and interleaving (it keeps you at the edge).

**Check yourself.** What two features turn ordinary repetition into deliberate practice?

## Sources
- Ericsson, K. A., Krampe, R. Th., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review, 100*(3), 363–406. https://doi.org/10.1037/0033-295X.100.3.363`,
    },

    // ── Section 4: Habits & Systems ───────────────────────────────────────────
    {
      slug: "beating-procrastination",
      title: "9 · Beating procrastination (Pomodoro)",
      section: "Habits & Systems",
      body: `The best study techniques are useless if you never start. Procrastination is rarely laziness — more often, the *thought* of a big task triggers real discomfort, and putting it off relieves that discomfort, which trains you to do it again. The fix is to make starting small and to attack the feeling, not your character.

The simplest, most durable tool is the **Pomodoro Technique**, created by Francesco Cirillo in the late 1980s (Cirillo, 2018). It's almost embarrassingly simple:

1. Pick one task.
2. Set a timer for **25 minutes** and work with full focus until it rings — no checking your phone, no task-switching.
3. Take a **5-minute break**.
4. After about four rounds, take a longer break (15–30 minutes).

Why it works, in terms of this course:

- **It lowers the cost of starting.** You're not committing to "finish the chapter," only to "focus for 25 minutes" — small enough to begin, which is the hardest part.
- **It protects focused mode** by walling off distractions for a bounded stretch.
- **The breaks feed diffuse mode and prevent the burnout** of marathon sessions — and they fit naturally with spacing rather than cramming.
- **It targets the *process*, not the *outcome*.** You promise yourself effort (25 focused minutes), not a result (a finished essay). Outcomes cause anxiety; process is doable.

**Check yourself.** Procrastination is often about avoiding a *feeling*, not avoiding *work*. How does committing to 25 minutes of effort (rather than to finishing) defuse that feeling?

## Sources
- Cirillo, F. (2018). *The Pomodoro Technique: The acclaimed time-management system that has transformed how we work.* Currency.`,
    },
    {
      slug: "metacognition-and-self-testing",
      title: "10 · Metacognition: knowing what you know",
      section: "Habits & Systems",
      body: `**Metacognition** is thinking about your own thinking — knowing what you know, noticing what you don't, and steering your study accordingly. Flavell (1979) introduced the term, describing how we monitor and regulate our own cognition. It's the skill that makes every other technique in this course pay off, because it's how you aim your effort at the right targets.

The central problem metacognition solves is the **illusion of knowing**. Rereading and highlighting make material feel *fluent and familiar*, and our brains read that fluency as "I've got this" — right up until the test proves otherwise (Dunlosky et al., 2013). Your *feeling* of how well you know something is an unreliable gauge; it's systematically too optimistic for material you've merely reviewed.

The cure is to **replace the feeling with a measurement** — and the measurement is **self-testing**:

- **Before reviewing**, try to recall the key ideas cold. Whatever you *can't* produce is exactly what to study. (This is retrieval practice doing double duty: it both *teaches* and *diagnoses*.)
- **Trust performance over familiarity.** "This looks familiar" is not "I can explain this without looking." Demand the second.
- **Use the Feynman move:** explain the idea simply, out loud or on paper, as if teaching it. The moment you stall is a precise map of your gap.
- **Calibrate after every quiz.** Compare what you *predicted* you'd get to what you *actually* got. Over time this tightens your self-assessment, so you stop wasting time on what you already know.

The Learn.WitUS quiz design is built for exactly this: each result links to the lesson behind the answer, so a miss isn't a grade — it's a pointer to your next study target.

**Check yourself.** Why is "this feels familiar" a dangerous signal — and what should you do instead of trusting it?

## Sources
- Flavell, J. H. (1979). Metacognition and cognitive monitoring: A new area of cognitive–developmental inquiry. *American Psychologist, 34*(10), 906–911. https://doi.org/10.1037/0003-066X.34.10.906
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. *Psychological Science in the Public Interest, 14*(1), 4–58. https://doi.org/10.1177/1529100612453266`,
    },
    {
      slug: "practice-spot-the-mistake",
      title: "11 · Practice: spot the study mistake",
      section: "Habits & Systems",
      body: "Each item describes a common study habit. Name the better technique it should be replaced with, based on this course. Spelling is forgiving.",
      exercise: {
        instructions:
          "For each weak study habit, type the technique that fixes it. One or two words. Then check.",
        items: [
          {
            prompt: "\"I read the chapter four times in a row.\" Better: close the book and try to ___ it from memory.",
            answer: "recall",
            accept: ["retrieve", "retrieval", "test", "self-test"],
            explanation: "Swap rereading for retrieval practice — recalling beats restudying on delayed tests (Roediger & Karpicke, 2006).",
          },
          {
            prompt: "\"I'll do all six hours of studying the night before.\" Better: ___ the sessions across several days.",
            answer: "space",
            accept: ["spacing", "spread", "distribute", "spaced"],
            explanation: "Spaced practice beats cramming, and gives you several nights of consolidation (Cepeda et al., 2006; Diekelmann & Born, 2010).",
          },
          {
            prompt: "\"I'll pull an all-nighter to finish.\" Better: study earlier and get ___, because that's when memories consolidate.",
            answer: "sleep",
            explanation: "Sleep actively consolidates memory; an all-nighter trades away that process (Diekelmann & Born, 2010).",
          },
          {
            prompt: "\"It all looks familiar, so I must know it.\" Better: ___ yourself to find out what you actually know.",
            answer: "test",
            accept: ["self-test", "quiz", "recall"],
            explanation: "Familiarity is an illusion of knowing; self-testing measures real understanding (Dunlosky et al., 2013; Flavell, 1979).",
          },
          {
            prompt: "\"I keep redrilling the part I'm already good at.\" Better: aim ___ practice at the edge of your ability instead.",
            answer: "deliberate",
            explanation: "Deliberate practice targets your weak spots with feedback, not the parts you've mastered (Ericsson et al., 1993).",
          },
          {
            prompt: "\"I can't even start the assignment.\" Better: commit to one ___ — a 25-minute focused block — to lower the cost of starting.",
            answer: "pomodoro",
            accept: ["pomodoro session", "25 minutes", "focused block"],
            explanation: "The Pomodoro Technique shrinks the commitment to 25 focused minutes, defusing procrastination (Cirillo, 2018).",
          },
        ],
      },
    },
    {
      slug: "building-a-study-system",
      title: "12 · Building a study system",
      section: "Habits & Systems",
      body: `You now have the pieces. A study *system* is just a repeatable way to combine them so you don't have to decide from scratch each time. Here's one durable loop — adapt it to any subject:

1. **Pre-test, then study (metacognition + retrieval).** Before opening the material, try to recall what you already know and jot questions. Whatever you can't answer is your study target — you've aimed your effort before spending it.
2. **Learn actively, in focused bursts (Pomodoro + focused mode).** Work in 25-minute blocks. As you go, turn key ideas into questions or flashcards rather than just underlining them.
3. **Practice by retrieving, mixed and spaced (retrieval + interleaving + spacing).** Quiz yourself instead of rereading. Shuffle topics together. Schedule the next review for a later day, not the same sitting. A spaced-repetition app like **FlashLearn** automates the scheduling and the shuffling, so each review is timed recall.
4. **Drill your weak spots (deliberate practice).** Use your quiz results to find error-prone areas and attack those specifically, with immediate feedback. Don't re-practice what you've mastered.
5. **Sleep on it, then review (consolidation).** End a session before sleep when you can, and do a quick recall the next morning. Let several nights work on important material by starting early — never cram.
6. **Step away when stuck (diffuse mode).** If a problem won't budge, take a real break and come back; the answer often arrives once focused mode lets go.

Notice that the system isn't a pile of separate tricks — the techniques **reinforce each other**. Spacing gives consolidation time to work. Retrieval finds the gaps that deliberate practice fills. Interleaving and spacing are both "desirable difficulties" that feel worse and work better (Bjork & Bjork, 2011). Metacognition steers the whole thing. And every one of them is more effective than the rereading-and-highlighting most people default to (Dunlosky et al., 2013).

The discomfort is the tell. If your studying feels smooth and easy, you're probably building familiarity, not memory. If it feels effortful — recalling, mixing, spacing, drilling the hard parts — that's the sound of learning that lasts.

**Check yourself.** Pick a subject you're learning now. Write the one step of this loop you're currently *skipping*, and how you'll add it this week.

## Sources
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. *Psychological Science in the Public Interest, 14*(1), 4–58. https://doi.org/10.1177/1529100612453266
- Bjork, E. L., & Bjork, R. A. (2011). Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning. In M. A. Gernsbacher, R. W. Pew, L. M. Hough, & J. R. Pomerantz (Eds.), *Psychology and the real world: Essays illustrating fundamental contributions to society* (pp. 56–64). Worth Publishers.`,
    },

    // ── Final quiz ────────────────────────────────────────────────────────────
    {
      slug: "learning-how-to-learn-quiz",
      title: "13 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which step of memory does a graded test actually measure — and which step does plain rereading mostly exercise?",
            options: [
              "Tests measure encoding; rereading exercises retrieval",
              "Tests measure retrieval; rereading mostly exercises encoding",
              "Both measure storage equally",
              "Neither involves retrieval",
            ],
            correctIndex: 1,
            explanation: "Tests require retrieval (getting it back out); rereading is encoding-heavy and builds familiarity, not recall.",
            sourceLessonSlug: "how-memory-works",
          },
          {
            prompt: "You've been stuck on one problem for 30 minutes. What does the two-modes idea suggest?",
            options: [
              "Push harder in focused mode for another hour",
              "Step away and let diffuse mode make connections, then return",
              "Switch to a brand-new subject permanently",
              "Reread the textbook chapter twice",
            ],
            correctIndex: 1,
            explanation: "Hard problems often yield when you leave focused mode and let diffuse mode work, then come back.",
            sourceLessonSlug: "focused-and-diffuse-thinking",
          },
          {
            prompt: "In Roediger & Karpicke (2006), why did testing beat rereading?",
            options: [
              "Tests gave students the answers to memorize",
              "On a delayed test, students who practiced retrieving retained far more than those who reread",
              "Rereading caused students to forget everything",
              "Testing only helped on immediate tests",
            ],
            correctIndex: 1,
            explanation: "Retrieval practice produced substantially better retention after a delay — the testing effect.",
            sourceLessonSlug: "retrieval-practice",
          },
          {
            prompt: "You have four hours to study for a test next week. Which plan does the research favor?",
            options: [
              "One four-hour block tonight",
              "Four one-hour sessions spread across the week",
              "Eight hours the night before",
              "It makes no difference",
            ],
            correctIndex: 1,
            explanation: "Spaced (distributed) practice beats massed practice across hundreds of experiments (Cepeda et al., 2006).",
            sourceLessonSlug: "spaced-repetition",
          },
          {
            prompt: "Interleaving made practice feel harder and look worse that day, yet doubled next-day scores. Why?",
            options: [
              "It is a desirable difficulty: effortful practice improves long-term retention",
              "The students cheated on the later test",
              "Blocked practice is always better",
              "The in-session feeling is the best guide to learning",
            ],
            correctIndex: 0,
            explanation: "Interleaving is a desirable difficulty — harder in the moment, stronger afterward (Rohrer & Taylor, 2007; Bjork & Bjork, 2011).",
            sourceLessonSlug: "interleaving",
          },
          {
            prompt: "Why is pulling an all-nighter a poor way to prepare?",
            options: [
              "It gives you too much diffuse-mode time",
              "Sleep is when memories consolidate, so skipping it undermines what you studied",
              "Caffeine erases memories",
              "It counts as massed practice, which is ideal",
            ],
            correctIndex: 1,
            explanation: "Sleep actively consolidates and reorganizes memory; an all-nighter trades away that process (Diekelmann & Born, 2010).",
            sourceLessonSlug: "sleep-and-consolidation",
          },
          {
            prompt: "What turns ordinary repetition into deliberate practice?",
            options: [
              "Doing more total hours of anything",
              "Targeting a skill just beyond your reach, with full focus and immediate feedback",
              "Repeating only what you already do well",
              "Practicing while distracted to build toughness",
            ],
            correctIndex: 1,
            explanation: "Deliberate practice aims at the edge of your ability with feedback and correction (Ericsson et al., 1993).",
            sourceLessonSlug: "deliberate-practice",
          },
          {
            prompt: "How does committing to a 25-minute Pomodoro help you beat procrastination?",
            options: [
              "It guarantees you finish the whole task",
              "It lowers the cost of starting by promising effort, not an outcome",
              "It removes the need for breaks",
              "It works only for people who aren't busy",
            ],
            correctIndex: 1,
            explanation: "Procrastination avoids a feeling; committing to 25 focused minutes (process, not outcome) makes starting easy (Cirillo, 2018).",
            sourceLessonSlug: "beating-procrastination",
          },
          {
            prompt: "Why is \"this feels familiar\" a dangerous signal when studying?",
            options: [
              "Familiarity guarantees you'll pass",
              "Fluency from rereading creates an illusion of knowing; self-testing reveals the truth",
              "It means you've already mastered the material",
              "Familiar material is never on tests",
            ],
            correctIndex: 1,
            explanation: "Familiarity is an unreliable gauge; replace the feeling with a measurement — self-testing (Dunlosky et al., 2013; Flavell, 1979).",
            sourceLessonSlug: "metacognition-and-self-testing",
          },
          {
            prompt: "Across this whole course, what does it usually mean if your studying feels smooth and easy?",
            options: [
              "You're learning efficiently and can stop early",
              "You're probably building familiarity, not durable memory",
              "The material is too advanced",
              "You should reread it once more to lock it in",
            ],
            correctIndex: 1,
            explanation: "Effortful methods (retrieval, spacing, interleaving) feel harder but last; easy studying tends to build familiarity, not memory.",
            sourceLessonSlug: "building-a-study-system",
          },
        ],
      },
    },
  ],
};
