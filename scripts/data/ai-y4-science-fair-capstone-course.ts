// Authored "Y4: AI Science-Fair Project (Capstone)" — the young-makers CAPSTONE on the
// ElementaryMBA school. This is where F3 ("Young Makers: AI for Kids") and the Y1–Y3
// young-maker courses pay off: instead of learning *about* AI, the teen learner DOES a
// real science-fair project that uses AI honestly, end-to-end, following the scientific
// method. We walk every step — pick a question AI can help answer, do background research
// (and CITE it), write a testable hypothesis, plan the experiment with data ethics
// (consent, privacy, no personal data), build/run the AI part (a Google Teachable Machine
// model or careful AI-assisted analysis), measure results honestly (including when the
// model FAILS), check for bias and limitations, build a poster/presentation, and present
// with citations. Honesty and citation are the product's trust DNA, so they're foregrounded.
//
// Cited to real, verifiable, student-trustworthy sources you can open and check:
// Society for Science (Regeneron ISEF — student research + scientific-integrity/ethics
// rules), Science Buddies (Steps of the Scientific Method), Google Teachable Machine
// (train an image/sound/pose model in the browser, no code), MIT RAISE's Day of AI,
// UNICEF's Policy Guidance on AI for Children (privacy + fairness for kids), and Code.org's
// "How AI Works" (machine learning, computer vision, algorithmic bias).
//
// EXERCISE-UX NOTE: the platform's exercise checker does *literal* string matching
// (case/space-insensitive, see src/lib/exercise.ts). It cannot verify that a teen actually
// built a model or ran a poster session. So the two capstone "exercise" drills are written
// as DO-THEN-CONFIRM: the learner performs a real offline step (write the question, build the
// model, count right/wrong, draft the poster, do an ethics check) and then types a short
// guided keyword to confirm they did it. The final quiz (≤10 Q, every question has an
// explanation + sourceLessonSlug, passingScore 70) checks understanding of the method and
// the honesty/ethics rules.

import type { AuthoredCourse } from "./authored-course";

export const AI_Y4_SCIENCE_FAIR_CAPSTONE_COURSE: AuthoredCourse = {
  title: "Y4: AI Science-Fair Project (Capstone)",
  description:
    "Your young-maker capstone: design and run a REAL science-fair project that uses AI honestly, from your first question to your final presentation. You'll follow the scientific method like real scientists do — pick a question AI can help answer, research and cite your background, write a hypothesis you can actually test, plan an experiment with strong data ethics (consent, privacy, never any personal data), then build the AI part (a Google Teachable Machine model you train yourself, or careful AI-assisted analysis). You'll measure your results honestly — including the times the model gets it wrong — check your project for bias and limits, and build a poster and a talk that cite every source. Every step ties back to what you learned in F3 and Y1–Y3, and every claim here is tied to a real, trustworthy source you can open and check.",
  lessons: [
    // ── Part 1: Start Like a Scientist ─────────────────────────────────────────
    {
      slug: "what-is-a-capstone",
      title: "1 · Your capstone: a real project, done right",
      section: "Part 1: Start Like a Scientist",
      body: `Welcome to your **capstone** — the big project where you put everything together. In F3 you learned what AI *is* (a pattern-learner, not magic, not alive), and across Y1–Y3 you practiced making with it carefully. Now you stop *learning about* AI and start *doing* something real with it: a **science-fair project** that uses AI honestly, from your first question all the way to standing up and presenting it.

Here's the big idea that shapes this whole course:

> A science fair isn't about a flashy gadget. It's about asking a clear question, testing it fairly, and telling the truth about what you found — **even when the answer surprises you.**

That's exactly how real scientists work, and it's how real science fairs are judged. The **Society for Science** runs one of the biggest student science fairs in the world (the Regeneron International Science and Engineering Fair, or ISEF), and they expect students to "hold themselves to the highest ethical standards" — honesty and integrity come first, before any cool result.

**What you'll build.** By the end of this course you'll have a complete, fair-ready project:

| Piece | What it is |
| --- | --- |
| A **question** | Something you genuinely wonder, that AI can help test |
| **Background research** | What's already known — with real sources you cite |
| A **hypothesis** | Your testable, written-down guess |
| A **plan** | Steps, materials, and your data-ethics rules |
| The **AI part** | A model you train, or AI-assisted analysis you run carefully |
| **Honest results** | What happened, including the misses |
| A **poster + talk** | How you'll present and cite it |

**The tool you'll mostly use** is **Google Teachable Machine** — a free website where you can train a real AI model (to recognize images, sounds, or poses) right in your browser, with no coding. You give it examples, it finds the pattern — exactly the machine learning you learned about in F3. A grown-up should help you set it up and stay nearby.

> **Grown-up + safety note:** Do this capstone with a parent, teacher, or mentor. They'll help you choose safe tools, get any permissions you need, and check your sources. You bring the curiosity; they help with the guardrails.

**Think about it.** In one sentence, why does "telling the truth about what you found" matter more than "getting the answer you hoped for"?

## Sources
- Society for Science. *Regeneron International Science and Engineering Fair (ISEF)* — student research and scientific integrity. https://www.societyforscience.org/isef/
- Google. *Teachable Machine* — train image, sound, and pose models in your browser, no coding. https://teachablemachine.withgoogle.com/`,
    },
    {
      slug: "the-scientific-method",
      title: "2 · The scientific method (your map)",
      section: "Part 1: Start Like a Scientist",
      body: `Every good science project follows the same path. Scientists call it the **scientific method** — it's just a careful, step-by-step way to ask a question and find a trustworthy answer instead of guessing. **Science Buddies**, a site teachers and science-fair students use all over the world, lays the steps out like this:

| Step | What you do | In plain words |
| --- | --- | --- |
| 1. **Question** | Ask something you can test | "Can an AI tell my dog from my cat by photo?" |
| 2. **Background research** | Find out what's already known | Read trusted sources — and cite them |
| 3. **Hypothesis** | Write a testable guess | "I think it will be right at least 8 out of 10 times." |
| 4. **Experiment** | Test the hypothesis fairly | Train the model, then test it on *new* photos |
| 5. **Analyze + conclude** | Look honestly at the data | "It was right 7/10 — close, but not quite my guess." |
| 6. **Communicate** | Share results so others can check | Build a poster, present, and cite your sources |

Three things make this *the scientific method* and not just "doing a project":

- **Your guess is testable.** A good hypothesis can turn out *wrong* — and that's allowed. "AI is cool" can't be tested. "The model will be right at least 8 of 10 times on new photos" *can*.
- **You change one thing at a time.** That one thing you change is called the **variable**. If you change ten things at once, you won't know which one mattered.
- **You report what really happened.** Not what you wished happened. A surprising result is still a real result — sometimes the best ones.

Notice that **AI is a tool *inside* the method, not a replacement for it.** AI might help you research, train a model, or organize your data — but *you* ask the question, *you* run the test, and *you* decide what the results mean. That's the difference between a scientist who uses AI and someone who just lets AI do the thinking.

**Think about it.** Turn this into a testable hypothesis: "I think AI is good at sorting recycling." (Hint: how good? right how many times out of how many?)

## Sources
- Science Buddies. *Steps of the Scientific Method.* https://www.sciencebuddies.org/science-fair-projects/science-fair/steps-of-the-scientific-method
- Society for Science. *Regeneron ISEF* — scientific integrity as a core value. https://www.societyforscience.org/isef/`,
    },
    {
      slug: "pick-a-question",
      title: "3 · Pick a question AI can help answer",
      section: "Part 1: Start Like a Scientist",
      body: `Your whole project grows from one good **question**. The best science-fair questions are ones you *actually wonder about* — and that you can really test with the time, tools, and AI you have.

A strong question for an AI project usually asks the model to **sort, recognize, or predict** something — because that's what the AI you'll train (Google Teachable Machine) is good at. Some examples:

- "Can an AI tell **ripe** bananas from **unripe** ones by photo?"
- "Can an AI hear the difference between me **clapping** and **snapping**?"
- "Can an AI sort photos of **recyclables** from **trash**?"
- "Can an AI recognize my **good posture** vs. **slouching** at my desk?"

A good capstone question passes the **"Goldilocks" test** — not too big, not too small, just right:

| Too big | Too small | Just right |
| --- | --- | --- |
| "Can AI cure diseases?" | "Is this one photo a cat?" | "Can an AI tell cats from dogs in 20 new photos?" |
| (No way to test it) | (Nothing to discover) | (Testable, finishable, real) |

**The "can I actually test it?" checklist** — your question is ready when you can answer YES to all of these:

- ✅ Can I **collect examples** for it safely? (photos of leaves, sounds of instruments — *not* people's private info)
- ✅ Can I **measure** the answer with a number? (right how many times out of how many?)
- ✅ Can I **finish** it with my time and tools?
- ✅ Could the answer turn out to be **"no"**? (If it can only ever be "yes," it's not a real test.)

> **A note on what NOT to study:** avoid questions that need other people's faces, voices, names, or any private information — those raise privacy and consent problems you don't need. Study **objects, sounds, plants, or your *own* poses** instead. We'll dig into ethics in Lesson 6, but it starts here, with the question you pick.

You'll write your real question in the Lesson 4 checkpoint. Take your time — a clear question makes every later step easier.

**Think about it.** Write one question you genuinely wonder about that an AI could help test by sorting or recognizing things. Does it pass all four checklist items?

## Sources
- Science Buddies. *Steps of the Scientific Method* — start with a clear, testable question. https://www.sciencebuddies.org/science-fair-projects/science-fair/steps-of-the-scientific-method
- MIT RAISE. *Day of AI* — free K-12 activities, including training a model on your own examples. https://raise.mit.edu/`,
    },

    // ── Part 2: Plan It Honestly ───────────────────────────────────────────────
    {
      slug: "background-research",
      title: "4 · Background research (and cite it!)",
      section: "Part 2: Plan It Honestly",
      body: `Before you test anything, real scientists find out **what's already known**. That's **background research**, step 2 of the scientific method. It saves you from re-discovering something, gives you ideas for your experiment, and — most important on this platform — it lets you **cite real sources**, which is what makes a project trustworthy.

**Where to look (trusted places):**

- A real **book** or a kids'/teens' encyclopedia, or a **librarian's** help.
- **Trusted websites** — like Science Buddies for methods, or Code.org's "How AI Works" to understand machine learning, computer vision, and bias.
- A grown-up who knows the topic.

**Can I use AI to help research?** Yes — *carefully*, exactly the way F3 taught you:

- ✅ Use AI to **explain a hard idea** ("explain machine learning like I'm 12") or to **suggest where to look**.
- ❌ Don't paste an AI's "facts" straight into your project. Remember **hallucinations** — AI can make up a fact, a date, or even a fake source and say it confidently.
- **Always check** anything important in a trusted source, and **cite the trusted source, not the AI.** If AI helped you, just say so honestly (more on that in Lesson 9).

**How to cite — keep it simple and real.** A citation tells a reader exactly where your fact came from so *they* can check it too. Write down, for each source: **who** made it, **what** it's called, and **where** to find it (a link or book title). For example:

> Science Buddies. *Steps of the Scientific Method.* https://www.sciencebuddies.org/science-fair-projects/science-fair/steps-of-the-scientific-method

A few good citations beat a long list of fakes. **Never invent a source** — a made-up citation is worse than none, and judges (and your teacher) can tell. Honesty is the whole point.

Now it's time to lock in your question and your sources.

**Think about it.** Why is citing "the trusted book the AI pointed me to" honest, but citing "the AI itself" risky?

## Sources
- Code.org. *How AI Works* — machine learning, computer vision, and algorithmic bias for students. https://code.org/curriculum/how-ai-works
- Science Buddies. *Steps of the Scientific Method* — do background research before testing. https://www.sciencebuddies.org/science-fair-projects/science-fair/steps-of-the-scientific-method`,
    },
    {
      slug: "plan-checkpoint",
      title: "5 · Checkpoint: lock in your question, research & hypothesis",
      section: "Part 2: Plan It Honestly",
      exercise: {
        instructions:
          "This is a DO-IT-FOR-REAL checkpoint. Do each step away from the screen (in your science notebook or project doc), then type the short keyword to confirm you finished it. Spelling doesn't have to be perfect — the explanation shows what 'done' looks like.",
        items: [
          {
            prompt:
              "Write your project QUESTION in your notebook — one clear, testable question AI can help answer by sorting or recognizing things (e.g. 'Can an AI tell ripe from unripe bananas by photo?'). When it's written down, type: done",
            answer: "done",
            accept: ["done!", "i did it", "finished", "complete"],
            explanation:
              "A clear, testable question is the seed of the whole project. If yours could turn out 'no,' it's a real test — good.",
          },
          {
            prompt:
              "Do BACKGROUND RESEARCH: find at least two trusted sources about your topic and write each one down as who / what / where (a link or book title). When you've written two real citations, type: cited",
            answer: "cited",
            accept: ["cited!", "i cited", "two sources", "sources written"],
            explanation:
              "Real citations are the trust DNA of your project. Never invent a source — cite the trusted place, not the AI.",
          },
          {
            prompt:
              "Write your HYPOTHESIS — a testable guess with a number in it (e.g. 'I think the model will be right at least 8 out of 10 times on new photos'). When it's written down, type: hypothesis",
            answer: "hypothesis",
            accept: ["hypothesis!", "my hypothesis", "guess written", "done"],
            explanation:
              "A good hypothesis can be proven wrong. Putting a number in it ('8 out of 10') makes it something you can actually measure.",
          },
          {
            prompt:
              "Name the ONE thing you'll change or test — your variable — and confirm everything else stays the same. When you've written your variable down, type: variable",
            answer: "variable",
            accept: ["variable!", "one variable", "my variable", "done"],
            explanation:
              "Changing one thing at a time is what makes a test fair. If you change ten things, you won't know which one mattered.",
          },
        ],
      },
    },
    {
      slug: "data-and-ethics",
      title: "6 · Your plan + data ethics (consent, privacy, no personal data)",
      section: "Part 2: Plan It Honestly",
      body: `Now you'll write your **plan**: the steps you'll follow, the **materials** (or example photos/sounds) you need, and — just as important — your **data-ethics rules**. To train an AI you have to collect **examples** (this is your **data**). *How* you collect that data is a real part of doing science honestly.

Here are the rules that keep your project safe and fair. They aren't extra — for a science fair, ethics are part of being allowed to compete at all.

**1. No personal data.** Build your project around **objects, sounds, plants, or your *own* poses** — not other people's faces, voices, names, addresses, or anything private. This is the same privacy rule from F3: *if you wouldn't tell it to a stranger, don't put it in your data.* **UNICEF** lists protecting children's data and privacy as one of the most important rules for AI made for kids.

**2. Get consent.** **Consent** means *asking first and getting a clear yes.* If anyone or anything besides you is involved, ask permission:

- Photographing your family's pet? Ask the family.
- Recording sounds at home or school? Ask the grown-up in charge.
- Using a friend's drawing or voice? You'd need their (and a parent's) okay — which is exactly why studying objects is simpler.

**3. Keep your data private and safe.** Store your example files where only you and your grown-up can see them. Don't post other people's pictures or info online. Don't upload anything private to a public AI tool.

**4. Be fair to everyone your project might touch.** If your project involves people at all, ask: *could this be unfair to someone, or make them uncomfortable?* If yes, change the plan. The big student fairs (Society for Science / ISEF) have rules exactly like these — judges check that you treated data and people responsibly.

**Write your plan** with these headers: *Question · Hypothesis · Materials/Data · Steps · Data-ethics rules (consent + privacy + no personal data) · How I'll measure results.* A clear plan now makes the building easy.

**Think about it.** Why is studying *objects or your own poses* an easier, safer choice than studying other people's faces? Name two ethics rules your project will follow.

## Sources
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)* — protect children's data and privacy; be fair. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children
- Society for Science. *Regeneron ISEF* — rules and ethical standards for student research. https://www.societyforscience.org/isef/`,
    },

    // ── Part 3: Build, Run & Measure the AI Part ───────────────────────────────
    {
      slug: "build-the-ai-part",
      title: "7 · Build & run the AI part (Teachable Machine)",
      section: "Part 3: Build, Run & Measure",
      body: `Here's the fun part: **building and running your AI experiment.** For most capstones the easiest, safest tool is **Google Teachable Machine** — a free website where you train a real model in your browser by giving it **examples**, no coding needed. (If your project is AI-assisted *analysis* instead — like asking an AI helper to help organize data you collected — the same honesty and checking rules apply.)

> **Grown-up needed:** Set up the tool *with* a parent, teacher, or mentor. They help you start it and stay nearby.

**Train your model (the Teachable Machine recipe):**

1. **Make your classes.** A **class** is one group you want the AI to tell apart — e.g. "ripe" and "unripe," or "clap" and "snap." Most starter projects use **2–3 classes**.
2. **Add examples to each class.** This is the machine learning you learned in F3: the AI finds the **pattern** in your examples. Give it **lots** of examples per class — and make them varied (different angles, lighting, backgrounds) so it learns the real pattern, not a trick.
3. **Train.** Click train and let it learn the pattern from your examples.
4. **Test on *new* things.** This is the key step scientists never skip: test the model on examples it has **never seen before.** If you only test it on the same photos you trained it with, of course it looks perfect — that's not a fair test, it's just memorizing.

**Keep it a fair experiment** — remember Lesson 2:

- **Change one thing at a time** (your variable). Want to test if more examples help? Then change *only* the number of examples, nothing else.
- **Write down everything as you go** in your science notebook: how many examples per class, what you tested, what happened. Real data, recorded honestly.

**The "did it really learn?" rule:** a model that aces the training photos but flops on new ones didn't actually learn your pattern — it just **memorized** the examples (scientists call that "overfitting"). Always judge your model by how it does on **new** examples. That honesty is what makes it science.

You'll record your results next.

**Think about it.** Why must you test your model on photos it has *never seen* — not the same ones you trained it on? What would a "perfect" score on the training photos really mean?

## Sources
- Google. *Teachable Machine* — train image, sound, and pose models in your browser, no coding. https://teachablemachine.withgoogle.com/
- MIT RAISE. *Day of AI* — free, hands-on activities for training models from your own examples. https://raise.mit.edu/`,
    },
    {
      slug: "measure-results-honestly",
      title: "8 · Measure results honestly (yes, even the fails)",
      section: "Part 3: Build, Run & Measure",
      body: `You trained your model and tested it on new examples. Now comes the most important scientific habit of all: **measure what really happened — honestly — including the times it got things wrong.**

**Count, don't guess.** Test your model on a set of new examples and tally the results:

| What to count | Example |
| --- | --- |
| How many you tested | 20 new photos |
| How many it got **right** | 14 |
| How many it got **wrong** | 6 |
| Your **score** | 14 / 20 = 70% right |

That score is your **data** — the real answer to your question. Then compare it to your **hypothesis**: you guessed "at least 8 out of 10" (80%); you got 70%. So your hypothesis was **not** supported. **And that's a completely valid, real result.** In real science, a guess being wrong isn't failure — it's a finding. The Society for Science judges projects on honest, careful work, *not* on whether the result is impressive.

**When the model fails, get curious — that's science:**

- **Look at the misses.** *Which* examples did it get wrong? Are the wrong ones all dark photos? All blurry? All one class? That pattern is a real discovery about your model.
- **Ask why.** Maybe one class had fewer examples. Maybe the lighting was different. Maybe two classes look genuinely alike. Each "why" is something you learned.
- **Never fudge the numbers.** Do **not** quietly drop the photos it got wrong to make your score look better. That's the opposite of science, and it breaks the honesty rule this whole course is built on.

> **The honest-scientist promise:** I will report what actually happened — the hits *and* the misses — because the truth is the result, and the truth is what makes my project worth trusting.

Record your real numbers and your "why did it miss?" notes in your notebook. You'll use them in your poster.

**Think about it.** Your model scored lower than your hypothesis predicted. Why is reporting that honestly *better* science than changing the numbers to match your guess?

## Sources
- Society for Science. *Regeneron ISEF* — scientific integrity: report results honestly. https://www.societyforscience.org/isef/
- Science Buddies. *Steps of the Scientific Method* — analyze your data and draw an honest conclusion. https://www.sciencebuddies.org/science-fair-projects/science-fair/steps-of-the-scientific-method`,
    },
    {
      slug: "bias-and-limitations",
      title: "9 · Bias & limitations check",
      section: "Part 3: Build, Run & Measure",
      body: `Great scientists don't just report their score — they **tell you what their project's *limits* are**, and they check it for **bias**. Doing this makes your project *more* trustworthy, not less, because it shows you understand your own work.

**Check for bias (remember F3 and Code.org).** **Bias** is when a model leans one way unfairly because of its examples. Ask yourself:

- **Were my examples balanced?** If "ripe" had 100 photos and "unripe" had only 10, the model learned one class way better than the other. That's a kind of bias — fix it by balancing your examples.
- **Were my examples varied enough?** If every "dog" photo was a golden retriever, the model might fail on a poodle. It learned "golden retriever," not "dog."
- **Could my model be unfair if it touched people?** This is exactly why we studied objects and our own poses. Code.org's "How AI Works" covers **algorithmic bias** for students — the same idea you met in F3.

**Name your limitations (every honest project has them).** Limitations are the things your project *couldn't* do or check — and saying them out loud is a strength:

- "I only tested **20** photos — a bigger test might show a different score."
- "All my photos were taken in **my kitchen** — it might not work in different lighting."
- "I only used **2 classes** — real fruit ripeness is more of a slow change than two boxes."

**Did AI help? Say exactly how — that's honesty in action.** If an AI tool helped you (brainstorming, explaining an idea, helping organize data), write one honest line about it, e.g. *"I used an AI helper to suggest project ideas; I chose and tested the question myself and checked all facts in trusted sources."* **UNICEF** and good fair rules want AI used **transparently** — and you already know from F3 that being open about how you used a tool is the brave, right choice.

> A project that says "here's what worked, here's what didn't, and here's how I used AI" is *more* convincing than one that pretends to be perfect.

**Think about it.** Name one possible bias in your example data and one real limitation of your project. How could a future version fix each one?

## Sources
- Code.org. *How AI Works* — algorithmic bias and AI ethics for students. https://code.org/curriculum/how-ai-works
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)* — fairness, and transparency about how AI is used. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children`,
    },

    // ── Part 4: Present & Defend ───────────────────────────────────────────────
    {
      slug: "poster-and-presentation",
      title: "10 · Build your poster & presentation",
      section: "Part 4: Present & Defend",
      body: `The last step of the scientific method is **communicate** — share your project so others can understand and *check* it. At a science fair you do this two ways: a **poster** (or display board) and a short **talk** to a judge or your class.

**Your poster — the standard science-fair sections.** Lay them out left-to-right, top-to-bottom, so a reader can follow your thinking:

| Section | What goes here |
| --- | --- |
| **Title + your question** | Big and clear at the top |
| **Background** | The few key facts you found (with citations) |
| **Hypothesis** | Your testable, written-down guess |
| **Method** | How you trained and tested — including your data-ethics rules |
| **Results** | Your real numbers + a simple chart (e.g. 14/20 right) |
| **Conclusion** | Was the hypothesis supported? What did you learn? |
| **Limitations + bias** | What your project couldn't do; fairness check |
| **Sources** | Your citations, listed so anyone can check them |

**Make it honest *and* clear:**

- **Show the real results** — including the misses. A chart that shows "right vs. wrong" is honest and easy to read.
- **Put your sources right on the poster.** Citations are a *visible trust signal*: they tell a judge "you can check my facts." That's the same trust DNA as the rest of this course.
- **Say how AI helped**, in one honest line.
- **Keep it readable** — short sentences, big text, one simple chart beats a wall of words.

**Can AI help me make the poster?** It can help you *organize* or *tidy your wording* — but **you** write your own results and conclusion, in your own words, and you **check** anything it suggests. Never let it invent a result or a source. (Same rule as your homework in F3: use it to help you, not to do it for you.)

**Practice your talk:** be ready to explain, in about a minute, your question, what you did, what you found, and one thing you'd improve. Judges love when you can talk honestly about your limitations.

**Think about it.** Why does putting your sources right on the poster make a judge trust your project *more*?

## Sources
- Science Buddies. *Steps of the Scientific Method* — communicate your results so others can check them. https://www.sciencebuddies.org/science-fair-projects/science-fair/steps-of-the-scientific-method
- Society for Science. *Regeneron ISEF* — presenting student research with integrity. https://www.societyforscience.org/isef/`,
    },
    {
      slug: "present-checkpoint",
      title: "11 · Checkpoint: poster, ethics & honesty check",
      section: "Part 4: Present & Defend",
      exercise: {
        instructions:
          "Another DO-IT-FOR-REAL checkpoint. Finish each step on your actual project, then type the short keyword to confirm. Spelling doesn't have to be perfect — the explanation shows what 'done' looks like.",
        items: [
          {
            prompt:
              "Record your REAL results: count how many of your new test examples the model got right and wrong, and write the score (e.g. '14 out of 20 = 70%'). Include the misses — don't drop any. When your honest numbers are written down, type: results",
            answer: "results",
            accept: ["results!", "recorded", "scored", "done"],
            explanation:
              "Reporting the hits AND the misses is the honest-scientist promise. The real number is your result, whatever it is.",
          },
          {
            prompt:
              "Do your BIAS + LIMITATIONS check: write down one possible bias in your example data and one real limitation of your project. When both are written, type: checked",
            answer: "checked",
            accept: ["checked!", "i checked", "bias checked", "done"],
            explanation:
              "Naming your bias and limits makes the project MORE trustworthy. Balanced, varied examples reduce bias.",
          },
          {
            prompt:
              "Build your POSTER with the standard sections (Question, Background, Hypothesis, Method, Results, Conclusion, Limitations/Bias, Sources) and put your citations right on it. When your poster has all sections including Sources, type: poster",
            answer: "poster",
            accept: ["poster!", "poster done", "display board", "done"],
            explanation:
              "Citations on the poster are a visible trust signal — they tell a judge they can check your facts.",
          },
          {
            prompt:
              "Write your one honest AI-use line (e.g. 'I used an AI helper to suggest ideas; I tested everything myself and checked all facts'). When it's on your poster or notes, type: honest",
            answer: "honest",
            accept: ["honest!", "i was honest", "disclosed", "said how", "done"],
            explanation:
              "Saying exactly how AI helped is transparency in action — the brave, right choice from F3, now in your capstone.",
          },
        ],
      },
    },
    {
      slug: "ai-science-fair-quiz",
      title: "12 · Final quiz: the science-fair capstone",
      section: "Part 4: Present & Defend",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the scientific method, in plain words?",
            options: [
              "A way to make AI do your whole project for you",
              "A careful, step-by-step way to ask a question and find a trustworthy answer",
              "A rule that science projects must use a robot",
              "A trick to always get the result you hoped for",
            ],
            correctIndex: 1,
            explanation:
              "The scientific method is a step-by-step way to ask a question, test it fairly, and report what really happened.",
            sourceLessonSlug: "the-scientific-method",
          },
          {
            prompt: "Which of these is a good, testable hypothesis for an AI project?",
            options: [
              "AI is really cool and helpful.",
              "The model will be right at least 8 out of 10 times on new photos.",
              "I hope my project wins.",
              "Robots are the future.",
            ],
            correctIndex: 1,
            explanation:
              "A testable hypothesis has a number you can measure and could turn out wrong — like '8 out of 10 on new photos.'",
            sourceLessonSlug: "the-scientific-method",
          },
          {
            prompt: "What does Google Teachable Machine let you do?",
            options: [
              "Write your essay for you",
              "Train an image, sound, or pose model in your browser by giving it examples — no coding",
              "Find someone's home address",
              "Grade your science fair automatically",
            ],
            correctIndex: 1,
            explanation:
              "Teachable Machine trains a real model from your own examples in the browser, no coding — the machine learning from F3.",
            sourceLessonSlug: "build-the-ai-part",
          },
          {
            prompt: "Why must you test your model on examples it has NEVER seen before?",
            options: [
              "To make the score look as high as possible",
              "Because testing on the training examples just shows it memorized them, not that it learned the pattern",
              "Because new examples are easier",
              "There is no reason — any test is fine",
            ],
            correctIndex: 1,
            explanation:
              "A model that aces its training photos but flops on new ones just memorized them (overfitting). New examples are the fair test.",
            sourceLessonSlug: "build-the-ai-part",
          },
          {
            prompt:
              "Your hypothesis was '8 out of 10,' but the model scored 7 out of 10. What's the right thing to do?",
            options: [
              "Quietly remove the photos it got wrong so the score hits 8/10",
              "Report the real 7/10 honestly — a guess being wrong is a valid result",
              "Pretend you never made a hypothesis",
              "Say the AI cheated",
            ],
            correctIndex: 1,
            explanation:
              "Report what really happened. An unsupported hypothesis is a real finding; fudging the numbers breaks scientific integrity.",
            sourceLessonSlug: "measure-results-honestly",
          },
          {
            prompt: "Which project is the SAFEST and simplest choice for data ethics?",
            options: [
              "Collecting photos of your classmates' faces",
              "Recording strangers' voices at the store",
              "Sorting photos of objects (like ripe vs. unripe fruit) or your own poses",
              "Using people's names and addresses",
            ],
            correctIndex: 2,
            explanation:
              "Study objects, sounds, plants, or your own poses — no personal data, so no privacy or consent problems.",
            sourceLessonSlug: "data-and-ethics",
          },
          {
            prompt: "What does 'consent' mean in your project plan?",
            options: [
              "Asking first and getting a clear yes before involving anyone or anything that isn't yours",
              "Letting the AI decide everything",
              "Keeping your project a secret",
              "Copying another student's idea",
            ],
            correctIndex: 0,
            explanation:
              "Consent means asking permission first and getting a clear yes — for example, asking your family before photographing the pet.",
            sourceLessonSlug: "data-and-ethics",
          },
          {
            prompt: "Your model got 'ripe' right far more than 'unripe.' What likely caused this bias?",
            options: [
              "The model dislikes unripe fruit",
              "You probably gave it many more 'ripe' examples than 'unripe' ones",
              "Bias is impossible in AI",
              "The fruit was too colorful",
            ],
            correctIndex: 1,
            explanation:
              "Unbalanced examples cause bias — the model learns the class with more examples better. Balance and vary your examples.",
            sourceLessonSlug: "bias-and-limitations",
          },
          {
            prompt: "When you do background research and an AI helper gives you a 'fact,' what should you do?",
            options: [
              "Paste it straight into your project and cite the AI",
              "Check it in a trusted source and cite that trusted source — never invent a citation",
              "Always believe it because it sounded sure",
              "Skip citations entirely",
            ],
            correctIndex: 1,
            explanation:
              "AI can hallucinate facts and even fake sources. Check important facts in a trusted source and cite that, not the AI.",
            sourceLessonSlug: "background-research",
          },
          {
            prompt: "Why put your sources and limitations right on your science-fair poster?",
            options: [
              "To fill up empty space",
              "Because showing your sources and limits makes your project MORE trustworthy — judges can check your work",
              "To hide your real results",
              "Because the rules say to use big words",
            ],
            correctIndex: 1,
            explanation:
              "Citations are a visible trust signal, and naming your limits shows you understand your own work — both build trust.",
            sourceLessonSlug: "poster-and-presentation",
          },
        ],
      },
    },
  ],
};
