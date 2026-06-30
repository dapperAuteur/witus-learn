// Authored "Train Your Own Model" — Y1, the entry course on the AI young-makers ladder
// for the ElementaryMBA school. Teen-level (roughly grades 6-12), hands-on, and playful,
// it's the older sibling to F3 ("Young Makers: AI for Kids"): where F3 explains what AI is,
// Y1 lets teens BUILD one. The throughline is the demystifying idea that machines learn from
// EXAMPLES, not magic — so the quality of your examples decides the quality of your model
// ("garbage in, garbage out"). Teens meet the real vocabulary makers use (features, labels,
// training data, accuracy, bias, overfitting), then train a real image classifier in the
// browser with Google's free, no-code Teachable Machine — no account, no purchase, data
// stays on their own device. Every term is explained in plain words, safety + honesty are
// foregrounded, and every claim ties to an authoritative, kid-trustworthy source you can
// open and verify (the platform's trust DNA): Google's Teachable Machine, MIT RAISE's Day
// of AI, Code.org's "How AI Works," Common Sense Education's AI-literacy lessons, and
// UNICEF's Policy Guidance on AI for Children. Two fill-in exercises + a final quiz whose
// every question links to the lesson that teaches it.

import type { AuthoredCourse } from "./authored-course";

export const AI_Y1_TRAIN_YOUR_MODEL_COURSE: AuthoredCourse = {
  title: "Train Your Own Model",
  description:
    "Machines don't learn by magic — they learn from EXAMPLES. In this hands-on course you'll go from \"how does that even work?\" to training your very own AI model in your web browser, no coding and no account needed. You'll learn the real words that makers use — features, labels, training data, accuracy, bias, and overfitting — and you'll see the single most important rule in machine learning: garbage in, garbage out. Your examples decide how good (and how fair) your model turns out. Using Google's free Teachable Machine, you'll teach a computer to tell two things apart, test how well it learned, and figure out how to make it better. Along the way we'll talk about where this shows up in real life, how models pick up our mistakes, and how to be honest and responsible with what you build. Every big idea is explained in plain words and tied to a real source you can check.",
  lessons: [
    // ── Part 1: How Machines Actually Learn ────────────────────────────────────
    {
      slug: "learning-from-examples",
      title: "1 · Machines learn from examples (not magic)",
      section: "Part 1: How Machines Actually Learn",
      body: `When a phone unlocks by recognizing your face, or an app guesses what's in a photo, it can feel like magic. It isn't. Here's the big idea behind this whole course, and we'll keep coming back to it:

> **Machines learn from examples — not magic, and not rules someone typed in.**

Think about how *you* learned to tell a cat from a dog. Nobody handed you a rulebook that said "a cat is exactly 9 inches tall with these exact whiskers." You just saw a bunch of cats and a bunch of dogs, someone told you which was which, and after enough examples your brain figured out the pattern on its own. Now you can spot a cat you've never seen before.

Teaching a computer this way is called **machine learning** (often shortened to **ML**). Instead of a programmer writing step-by-step rules, you show the computer **lots of examples** and let it find the pattern itself. The finished pattern-finder it builds is called a **model** — that's the thing you "train," and that's what this course is named after.

Here's the difference, side by side:

| Old way: rules | ML way: examples |
| --- | --- |
| A human writes every rule by hand | A human collects examples; the computer finds the rules |
| "IF pointy ears AND whiskers THEN cat" | Show it 200 cat photos and 200 dog photos, labeled |
| Breaks on anything the rules didn't cover | Can handle new, never-seen examples — by pattern |

One thing to keep straight: the model is **making a guess**, a really educated guess based on patterns it saw — not looking up a fact in a book. That's why a model can be confident *and* wrong, something we'll dig into later.

The best news: you don't need to be a programmer to do this. Free school programs from **Code.org** and **MIT's Day of AI** teach exactly this idea, and by the end of this course *you* will have trained a real model yourself.

**Think about it.** Describe something *you* learned from examples instead of from a rulebook — like recognizing a friend's voice, or knowing when a song is "your kind of music." How is that like machine learning?

## Sources
- Code.org. *How AI Works* (curriculum & videos for grades 6-12). https://code.org/curriculum/how-ai-works
- MIT RAISE. *Day of AI — free K-12 AI literacy curriculum*. https://raise.mit.edu/`,
    },
    {
      slug: "features-and-labels",
      title: "2 · Features & labels (the words makers use)",
      section: "Part 1: How Machines Actually Learn",
      body: `To train a model, you need two simple ideas. Once you have these, the rest of the course is mostly practice. Meet **features** and **labels**.

**A feature is a clue the model looks at.** It's one piece of information about an example. If you were sorting fruit, the features might be *color*, *size*, and *shape*. For a photo, the features are really the pixels — the tiny colored dots — and the patterns inside them (edges, blobs, textures). You usually don't pick pixel-features by hand; the model finds useful ones itself. The point to remember: **features are the "what it notices."**

**A label is the right answer you're teaching.** It's the name of the category an example belongs to. If you're teaching "apple vs. banana," then *apple* and *banana* are your two labels. Labels are how the model knows it guessed right or wrong while it's learning. The point to remember: **labels are the "what it should say."**

Put them together and you get one **training example**: some features (the clues) plus a label (the right answer).

| Example | Features (clues) | Label (right answer) |
| --- | --- | --- |
| A photo of a red round fruit | color: red, shape: round | apple |
| A photo of a long yellow fruit | color: yellow, shape: long | banana |
| A clip of a barking sound | the sound's pitch & rhythm | dog |

Two flavors of ML you'll hear about:

- **Supervised learning** — you give examples *with* labels, like the table above. "Supervised" just means a human supplied the right answers. This is what you'll do in this course, and it's the most common kind.
- **Unsupervised learning** — you give examples with *no* labels and ask the model to group similar ones on its own. Useful, but harder to steer. We'll stick with supervised.

So your whole job as a trainer is: **gather good examples, label them correctly, and let the model find the pattern.** Simple to say — and the next lessons are all about doing it *well*.

**Think about it.** You want to teach a model "cat vs. dog" from photos. What are your two **labels**? Name two **features** (clues) the model might use to tell them apart.

## Sources
- Code.org. *How AI Works* (machine learning, training data). https://code.org/curriculum/how-ai-works
- Common Sense Education. *AI literacy lessons* (how AI is trained on data). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "training-data-gigo",
      title: "3 · Training data & \"garbage in, garbage out\"",
      section: "Part 1: How Machines Actually Learn",
      body: `All those labeled examples you gather have a name: the **training data**. It's the most important ingredient in the whole process, and it leads to the single most useful rule in machine learning:

> **Garbage in, garbage out.** (Makers shorten it to "GIGO.") A model is only as good as the examples you train it on. Messy, lopsided, or wrong examples make a messy, lopsided, or wrong model — no matter how fancy the computer is.

A model can't learn something you never showed it. It can't fix examples that were labeled wrong. It just faithfully copies the patterns in whatever you feed it. So a huge part of being a good maker is being **picky about your training data.** Here's what "good" looks like:

| Good training data | Why it matters |
| --- | --- |
| **Enough examples** of each label | A handful isn't enough to find a real pattern |
| **Balanced** — roughly the same amount per label | 200 cats and 5 dogs teaches "everything is a cat" |
| **Correctly labeled** | One mislabeled photo teaches the wrong lesson |
| **Variety** that matches real life | Different angles, lighting, backgrounds — not all identical |
| **Examples that look like what you'll actually use it on** | Train on bright daytime photos, and it'll struggle at night |

A quick story of GIGO in action: imagine you train a "is this a cat?" model, but every single cat photo you used had a comfy couch in the background. The model might secretly learn "couch = cat." Then you show it a dog *on a couch* and it confidently says "cat!" It didn't do anything wrong — it learned exactly the pattern you accidentally gave it. **Garbage in, garbage out.**

This is why makers spend more time collecting and cleaning examples than almost anything else. When you train your own model later in this course, the quality of your photos will matter more than any setting you click.

**Think about it.** You're training "happy face vs. sad face," but all your happy photos are of *you* and all your sad photos are of your *little brother*. What sneaky wrong pattern (instead of the expression) might the model learn?

## Sources
- Common Sense Education. *AI literacy lessons* (how training data shapes AI). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12
- Code.org. *How AI Works* (training data and how models learn). https://code.org/curriculum/how-ai-works`,
    },
    {
      slug: "practice-ml-basics",
      title: "4 · Practice: the ML vocabulary",
      section: "Part 1: How Machines Actually Learn",
      exercise: {
        instructions:
          "Fill in the missing word from Part 1. Spelling doesn't have to be perfect — the explanation shows the idea.",
        items: [
          {
            prompt: "Teaching a computer by showing it lots of examples (instead of typing rules) is called machine ___.",
            answer: "learning",
            accept: ["learning (ml)", "ml"],
            explanation: "Machine learning: the computer finds the pattern in your examples, instead of a human writing every rule.",
          },
          {
            prompt: "The finished pattern-finder you train — the thing this course is named after — is called a ___.",
            answer: "model",
            accept: ["models"],
            explanation: "A model is the trained pattern-finder. You train it, then it makes guesses about new examples.",
          },
          {
            prompt: "A clue the model looks at, like color or shape, is called a ___.",
            answer: "feature",
            accept: ["features"],
            explanation: "Features are the 'what it notices.' Labels are the 'what it should say.'",
          },
          {
            prompt: "The right-answer category you teach, like 'apple' or 'banana', is called a ___.",
            answer: "label",
            accept: ["labels"],
            explanation: "A label is the correct answer for an example. Labeling examples correctly is your job as the trainer.",
          },
          {
            prompt: "The rule 'a model is only as good as its examples' is summed up as: garbage in, garbage ___.",
            answer: "out",
            explanation: "Garbage in, garbage out (GIGO). Messy or lopsided training data makes a messy, lopsided model.",
          },
        ],
      },
    },

    // ── Part 2: Build It! ──────────────────────────────────────────────────────
    {
      slug: "train-with-teachable-machine",
      title: "5 · Hands-on: train a model in your browser",
      section: "Part 2: Build It!",
      body: `Time to actually do it. You're going to train a real image model — no coding, no app to install, and **no account needed** — using a free tool from Google called **Teachable Machine**. It runs right in your web browser at **teachablemachine.withgoogle.com**.

> **Good to know (privacy + cost):** Teachable Machine is free, and Google says your images, sounds, and poses **stay on your own computer** while you train — they don't get uploaded unless *you* choose to save your project to Google Drive. Nothing to buy. (Do this with a parent or teacher nearby, and use your own safe, non-private examples — see Lesson 10.)

Teachable Machine can train three kinds of models: **Image** (recognize pictures or webcam frames), **Audio** (recognize short sounds), and **Pose** (recognize body positions from a camera). We'll do an **Image** project because it's the easiest to see working. A fun first goal: teach it to tell **"thumbs up" vs. "thumbs down."**

**The steps (this is the whole game — features, labels, training data, all in action):**

1. **Open the tool.** Go to teachablemachine.withgoogle.com and choose **Get Started → Image Project → Standard image model.**
2. **Name your labels.** You'll see two empty classes ("Class 1," "Class 2"). Rename them to your two **labels** — for example, *Thumbs Up* and *Thumbs Down*. (Labels, from Lesson 2!)
3. **Collect training data.** Under *Thumbs Up*, click **Webcam** and hold the pose while it captures a bunch of frames. Aim for **lots and varied** — different distances, angles, and backgrounds (remember Lesson 3: variety matters). Do the same for *Thumbs Down*. Try to keep the two roughly **balanced** in count.
4. **Train.** Click **Train Model** and wait a few seconds while it learns the pattern. *Don't switch browser tabs* during training — it pauses.
5. **Try it live.** A **Preview** panel turns on your webcam and shows its guess plus a confidence bar for each label. Give it a thumbs up — does the right bar shoot up?

That's it — you trained a model! The bars you see are the model's confidence: how *sure* it is, shown as a percentage. In the next lesson we'll test it properly and learn what those numbers really mean.

> **Maker tip:** If you don't have a webcam, you can upload image files instead. And you can add a *third* label (like "no hands") to make it smarter about when neither pose is showing.

**Think about it.** Before you train, predict: which two **labels** did you pick, and what kind of **variety** will you add to your examples so the model doesn't accidentally learn your background instead of your hands?

## Sources
- Google. *Teachable Machine* — train image, sound & pose models in your browser, no coding required. https://teachablemachine.withgoogle.com/
- Google. *Teachable Machine 2.0 makes AI easier for everyone* (overview & how it works). https://blog.google/innovation-and-ai/products/teachable-machine/`,
    },
    {
      slug: "testing-and-accuracy",
      title: "6 · Testing your model & what \"accuracy\" means",
      section: "Part 2: Build It!",
      body: `You trained a model. But is it any *good*? Don't guess — **test it.** And here's the golden rule of testing, used by every real ML maker:

> **Test on examples the model has never seen before.** If you only check it on the exact photos you trained it with, of course it looks perfect — it basically memorized those. The real question is how it does on *new* stuff.

So make some fresh test examples. Give a thumbs up you didn't capture during training — maybe with your other hand, or standing somewhere new — and watch the confidence bars. **Accuracy** is just the score for *how often the model gets the right answer.* If you test it 10 times and it's right 9 times, that's 90% accuracy. Higher is better; nothing real is ever perfect.

A couple of words you'll see while testing:

- **Confidence** — how *sure* the model is about one guess, shown as a percent. High confidence is **not** the same as being correct! A model can be 99% confident and still wrong. (Sound familiar? That's the same trap as an AI sounding sure but being wrong.)
- **Prediction** — the model's actual answer (the label with the highest confidence).

When your model gets something wrong, you've found gold — because now you can **make it better.** This is the real maker loop:

| Step | What you do |
| --- | --- |
| 1. Test on new examples | Find where it gets confused |
| 2. Diagnose | *Why?* Bad lighting? A label it rarely saw? A sneaky background clue? |
| 3. Add better training data | More variety, more examples of the confusing case |
| 4. Re-train and test again | See if accuracy went up |

Notice that fixing the model almost always means **fixing the training data**, not clicking a magic "be smarter" button. Back to Lesson 3: garbage in, garbage out — and *better* in, *better* out.

**Think about it.** Your "thumbs up vs. thumbs down" model nails it at your desk but fails by the window. What's probably different there (hint: a feature you didn't mean to teach), and what new examples would you add to fix it?

## Sources
- MIT RAISE. *Day of AI — hands-on activities on training and testing models*. https://raise.mit.edu/
- Code.org. *How AI Works* (how models are evaluated and improved). https://code.org/curriculum/how-ai-works`,
    },
    {
      slug: "overfitting",
      title: "7 · Overfitting: memorizing vs. learning",
      section: "Part 2: Build It!",
      body: `Here's a sneaky problem that trips up even grown-up engineers. Imagine a student who, instead of *understanding* math, just memorizes the exact answers to the practice test. They ace the practice test — then bomb the real exam, because the questions are a little different. The model version of this has a name:

> **Overfitting** is when a model *memorizes* its training examples instead of *learning* the general pattern. It looks amazing on the data it trained with, but flops on new, real examples.

That gap is the tell: **great on training data, bad on new data = overfitting.** It's the opposite of what you want. A good model **generalizes** — it handles things it never saw before, because it learned the *idea* ("this is a thumbs up") rather than memorizing specific photos.

Why does overfitting happen? Usually because the training data was too small or too samey:

- **Too few examples.** With only 5 photos, the easiest "pattern" to find is just *those 5 photos*, not the real idea.
- **Too little variety.** If every thumbs-up photo is you, same shirt, same wall, the model can memorize *that exact scene* and call it a day.
- **A lucky shortcut.** Remember the "couch = cat" trick? That's overfitting to an accidental clue.

How makers fight overfitting — and you can do all of these in Teachable Machine:

| Fix | How it helps |
| --- | --- |
| **More examples** | Harder to memorize a big, varied pile |
| **More variety** | Different angles, light, backgrounds force it to learn the real idea |
| **Test on fresh examples** | The only way to *catch* overfitting (Lesson 6) |
| **Don't over-train tiny data** | Cramming hard on a few examples just memorizes them |

The opposite mistake is **underfitting** — too few or too sloppy examples so the model never even learns the pattern (it's bad at *everything*, training data included). The sweet spot is in the middle: enough good, varied examples to learn the real idea and generalize.

**Think about it.** A model is 100% right on its training photos but only 40% right on new ones. What's the one-word diagnosis — and what's the first thing you'd change about the *training data* to fix it?

## Sources
- MIT RAISE. *Day of AI — training, testing, and how models generalize*. https://raise.mit.edu/
- Code.org. *How AI Works* (machine learning concepts). https://code.org/curriculum/how-ai-works`,
    },

    // ── Part 3: Use It Wisely ──────────────────────────────────────────────────
    {
      slug: "bias-from-your-examples",
      title: "8 · Bias: the model learns your examples' mistakes",
      section: "Part 3: Use It Wisely",
      body: `Now that you've trained a model, this lesson hits different — because you've *felt* how much the examples matter. Here's the serious version of "garbage in, garbage out," and it's one of the most important ideas in all of AI:

> **A model learns whatever is in your examples — including the unfair stuff.** If your training data leaves people out or reflects old unfair ideas, the model copies those mistakes. That unfair leaning is called **bias** (say it: BYE-us).

The hard part is that bias usually isn't on purpose. The model isn't being mean — it's faithfully learning the pattern you gave it, *exactly* like your couch-equals-cat model did. Watch how easily it sneaks in:

- **Who's missing?** Train a face-detector mostly on light-skinned faces, and it works worse on darker-skinned faces — not out of malice, but because it barely saw them. This has actually happened in real face-recognition systems, and researchers have measured it.
- **What's lopsided?** Train a "doctor" image model on photos that are almost all men, and it may wrongly doubt that a woman in a white coat is a doctor.
- **What unfairness did the data carry?** If examples came from the internet, they can carry the internet's unkind or untrue ideas about groups of people — and the model soaks those up too.

Because *you* control the examples, *you* have real power here — and real responsibility:

| To make a fairer model | Do this |
| --- | --- |
| Include the variety of people/things it'll meet | Don't train on just one kind |
| Balance your labels and groups | Lopsided data → lopsided model |
| Ask "who might this fail for?" *before* you ship it | Test on people/cases unlike your examples |

**UNICEF** — the part of the United Nations that protects children worldwide — says AI that affects kids must **prioritize fairness and non-discrimination**, and that's on the people who build it. When you train a model, you're one of those builders now. Choosing fair, inclusive examples is how you live up to that.

**Think about it.** You build a model to recognize "a kid raising their hand" for a classroom app, but all your training photos are from *your* class. Who or what might it fail on in a *different* school — and how would you fix your training data?

## Sources
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)* — prioritize fairness and non-discrimination for children. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children
- Common Sense Education. *AI literacy lessons* (AI bias and its real-world impacts). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "where-this-is-used",
      title: "9 · Where trained models show up in real life",
      section: "Part 3: Use It Wisely",
      body: `The same kind of model you just trained — examples in, pattern out — is running quietly all around you. Once you can spot it, you'll see it everywhere. Every one of these is "features in, label out," scaled up:

| Where you've seen it | What it's classifying | Features → Label |
| --- | --- | --- |
| Phone unlocking by your face | Is this the owner? | camera pixels → "match / no match" |
| Photos app finding "all dogs" | What's in each picture? | image pixels → object labels |
| Email spam filter | Junk or real? | the email's words → "spam / not spam" |
| Voice assistant hearing "hey ___" | Did someone say the wake word? | microphone sound → "wake word / not" |
| Video captions / "what song is this?" | Which words? Which song? | audio → text or a song label |
| A bank flagging a weird charge | Is this purchase suspicious? | spending pattern → "ok / check this" |

Some of these do real good — captions help people who are deaf or hard of hearing; medical models can help doctors spot problems earlier. And every one carries the lessons you just learned:

- Each was **trained on examples**, so each can be **wrong**, and each can pick up **bias** from its data. A face-unlock that saw few darker-skinned faces, or a voice assistant trained mostly on one accent, will work worse for the people it didn't see enough of.
- The stakes are higher than your thumbs-up demo. When a model helps decide things like loans, jobs, or who gets flagged by police, a biased model can hurt real people. That's why grown-ups push hard for **fairness and accountability** in these systems.

Knowing how these are built makes you a sharper, safer user of them. When an app's AI gets something wrong, you won't think it's broken or magic — you'll think, *"its training data probably didn't cover this case,"* which is usually exactly right.

**Think about it.** Pick one model from the table. What examples do you think it was trained on — and who might it work *worse* for if those examples left some people out?

## Sources
- Common Sense Education. *AI literacy lessons* (where AI shows up; facial recognition's benefits and risks). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12
- Code.org. *How AI Works* (real-world AI: computer vision, chatbots, and ethics). https://code.org/curriculum/how-ai-works`,
    },
    {
      slug: "using-models-responsibly",
      title: "10 · Build it responsibly & honestly",
      section: "Part 3: Use It Wisely",
      body: `You can now build something genuinely powerful. How you use that power is what makes you a *good* maker — not just a capable one. Three habits to carry out of this course:

**1. Be honest about what your model can (and can't) do.** Your model makes *guesses*, and it can be confidently wrong. So don't oversell it. If you made a "is this fruit fresh?" demo, say "it's right about 9 times out of 10," not "it always knows." Claiming a model is more accurate or more fair than you actually tested is a kind of fibbing — and it can lead people to trust it where they shouldn't.

- ✅ "I trained this on 200 photos; it works best in good lighting."
- ❌ "My AI is never wrong."

**2. Know its limits — and don't use it where it can hurt.** A thumbs-up classifier is a great toy. But a model trained on your few examples should **never** be used to make serious decisions about real people — who's "trustworthy," who looks "suspicious," who's "in" or "out." Those uses can be unfair and harmful, especially because of the **bias** we covered in Lesson 8. The people who write AI safety rules, and **UNICEF's** guidance for AI that affects kids, stress **transparency and accountability** — meaning a human stays responsible for what the model is used to do. That human is you.

**3. Respect people's data and consent.** The examples you collect are *data about people*:

- Use **your own** examples, or things that aren't private — not secret photos of classmates.
- **Ask first.** If you want to train on a friend's face or voice, get their okay (and a grown-up's). People have a right to say no.
- Don't post or share a model in a way that exposes someone's private images or info. **UNICEF** lists **protecting children's data and privacy** as a core requirement for AI — and that includes the data *you* gather.

> **The maker's promise:** I'll be honest about what my model does, I'll use it where it helps and never where it harms, and I'll respect the people whose examples I learn from.

You've gone from "AI is magic" to training, testing, and thinking hard about a model of your own. That's real maker skill — use it to build things that are clever, fair, and kind.

**Think about it.** Name one good use and one harmful use for a face-recognition model someone could train. What makes the difference between them?

## Sources
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)* — transparency, accountability, and protecting children's data and privacy. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children
- Common Sense Education. *AI literacy lessons* (be a responsible, ethical user of AI). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "practice-build-responsibly",
      title: "11 · Practice: testing, bias & honesty",
      section: "Part 3: Use It Wisely",
      exercise: {
        instructions:
          "Fill in the missing word from Parts 2 and 3. Spelling doesn't have to be perfect — the explanation shows the idea.",
        items: [
          {
            prompt: "To really know if your model is good, you should test it on examples it has ___ seen before.",
            answer: "never",
            accept: ["not", "not yet"],
            explanation: "Testing on brand-new examples is the only honest test. Old training examples just show what it memorized.",
          },
          {
            prompt: "The score for how often a model gets the right answer is called its ___.",
            answer: "accuracy",
            explanation: "Accuracy = how often it's right. Right 9 of 10 times is 90%. Nothing real is ever 100%.",
          },
          {
            prompt: "When a model memorizes its training examples but flops on new ones, that's called ___.",
            answer: "overfitting",
            accept: ["over-fitting", "overfit"],
            explanation: "Overfitting is memorizing instead of learning. Fix it with more examples and more variety.",
          },
          {
            prompt: "When a model learns unfair patterns because its examples left people out, that unfairness is called ___.",
            answer: "bias",
            explanation: "Bias comes from lopsided or non-inclusive training data — not from the model choosing to be mean.",
          },
          {
            prompt: "A good maker is ___ about what a model can do — saying 'right about 9 of 10 times,' not 'never wrong.'",
            answer: "honest",
            accept: ["truthful"],
            explanation: "Models guess and can be confidently wrong, so don't oversell them. Honesty keeps people from over-trusting.",
          },
        ],
      },
    },
    {
      slug: "train-your-model-quiz",
      title: "12 · Check what you learned",
      section: "Part 3: Use It Wisely",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the core idea behind machine learning?",
            options: [
              "A programmer types in every rule by hand",
              "The computer finds patterns from lots of examples",
              "The computer already knows everything when it's built",
              "It's magic that can't really be explained",
            ],
            correctIndex: 1,
            explanation: "Machines learn from examples, not from hand-typed rules and not by magic. The trained pattern-finder is the model.",
            sourceLessonSlug: "learning-from-examples",
          },
          {
            prompt: "In ML terms, what is a \"label\"?",
            options: [
              "A clue the model looks at, like color",
              "The right-answer category you're teaching, like 'apple'",
              "A bug in the model",
              "The webcam button",
            ],
            correctIndex: 1,
            explanation: "A label is the correct answer/category. A feature is a clue the model looks at. You supply both while training.",
            sourceLessonSlug: "features-and-labels",
          },
          {
            prompt: "\"Garbage in, garbage out\" means…",
            options: [
              "A faster computer always makes a smarter model",
              "A model is only as good as the examples you train it on",
              "You should delete your training data when done",
              "Models work better with no examples",
            ],
            correctIndex: 1,
            explanation: "Messy, lopsided, or wrong training data makes a bad model. Good, balanced, varied data makes a better one.",
            sourceLessonSlug: "training-data-gigo",
          },
          {
            prompt: "Using Teachable Machine, what do you need to start training an image model?",
            options: [
              "A paid account and a coding background",
              "Nothing but a browser — it's free, no code, and no account needed",
              "Special hardware you have to buy",
              "Permission from Google for each project",
            ],
            correctIndex: 1,
            explanation: "Teachable Machine is free and runs in your browser with no coding or account; your data stays on your device.",
            sourceLessonSlug: "train-with-teachable-machine",
          },
          {
            prompt: "What's the honest way to test how good your model is?",
            options: [
              "Re-check it on the exact photos you trained it with",
              "Test it on new examples it has never seen",
              "Trust the highest confidence bar and skip testing",
              "Only test it once, then never again",
            ],
            correctIndex: 1,
            explanation: "Testing on fresh examples shows real accuracy. Re-using training examples just shows what it memorized.",
            sourceLessonSlug: "testing-and-accuracy",
          },
          {
            prompt: "A model scores 100% on its training photos but only 40% on new ones. What's the problem?",
            options: ["Underfitting", "Overfitting", "Perfect accuracy", "Garbage out"],
            correctIndex: 1,
            explanation: "Overfitting: it memorized the training examples instead of learning the real pattern. Add more varied examples.",
            sourceLessonSlug: "overfitting",
          },
          {
            prompt: "Why might a face-recognition model work worse for some groups of people?",
            options: [
              "The model dislikes them on purpose",
              "Its training data didn't include enough examples of them (bias)",
              "Faces are impossible for any model",
              "It ran out of battery",
            ],
            correctIndex: 1,
            explanation: "Bias comes from lopsided or non-inclusive training data, not malice. Fair, inclusive examples reduce it.",
            sourceLessonSlug: "bias-from-your-examples",
          },
          {
            prompt: "Which of these is a real-world example of a trained model — 'features in, label out'?",
            options: [
              "A spam filter sorting junk from real email",
              "A light switch turning on",
              "A calculator adding two numbers",
              "A printed paper map",
            ],
            correctIndex: 0,
            explanation: "A spam filter is trained on example emails to classify junk vs. real — the same idea as your image model, scaled up.",
            sourceLessonSlug: "where-this-is-used",
          },
          {
            prompt: "A model gives a confident guess. Confidence means…",
            options: [
              "It is definitely correct",
              "How sure the model is — which is NOT the same as being right",
              "The model is broken",
              "It has finished training",
            ],
            correctIndex: 1,
            explanation: "Confidence is how sure the model is, shown as a percent. A model can be 99% confident and still wrong.",
            sourceLessonSlug: "testing-and-accuracy",
          },
          {
            prompt: "Which is the most responsible, honest way to share a model you trained?",
            options: [
              "Say 'my AI is never wrong' to impress people",
              "Be honest about its accuracy and limits, and respect people's data and consent",
              "Use it to secretly decide who looks 'trustworthy'",
              "Train it on classmates' photos without asking",
            ],
            correctIndex: 1,
            explanation: "Honest about accuracy and limits, used where it helps not harms, and respectful of people's data and consent.",
            sourceLessonSlug: "using-models-responsibly",
          },
        ],
      },
    },
  ],
};
