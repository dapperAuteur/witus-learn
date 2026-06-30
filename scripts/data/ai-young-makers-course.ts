// Authored "Young Makers: AI for Kids" — F3, the kid-level AI foundation on the
// ElementaryMBA school (alongside the Speedway docuseries and Intro to Robotics &
// STEAM). Sibling, at a grade 3-8 reading level, to F1 (AI Literacy) and F2 (Building
// with AI) on the Trade School. Warm, concrete, and playful — every term is explained
// in plain words, and safety + honesty are foregrounded: AI is a pattern-learner, not
// magic and not alive; it can be wrong, so always check; be kind, private, and honest
// with it. Cited to authoritative, kid-trustworthy sources you can open and verify
// (the platform's trust DNA): UNICEF's Policy Guidance on AI for Children, Common
// Sense Media / Common Sense Education's AI literacy lessons, MIT RAISE's Day of AI,
// Code.org's "How AI Works," and the NIST AI Risk Management Framework. Two fill-in
// exercises + a final quiz whose every question links to the lesson that teaches it.

import type { AuthoredCourse } from "./authored-course";

export const AI_YOUNG_MAKERS_COURSE: AuthoredCourse = {
  title: "Young Makers: AI for Kids",
  description:
    "A friendly first look at artificial intelligence — for curious kids. What is AI, really? (Hint: it's a pattern-learner, not magic, and not alive.) How do computers \"learn\" from examples? How do you ask an AI helper a good question — and why must you always check its answers, because AI can be wrong? We'll talk about fairness, keeping your secrets private, and being kind and honest with AI (use it to learn, never to cheat). Then we'll make something fun together with a grown-up. Every big idea is explained in plain words and tied to a real, trustworthy source you can check.",
  lessons: [
    // ── Part 1: What AI Is ─────────────────────────────────────────────────────
    {
      slug: "what-is-ai",
      title: "1 · What is AI? (not magic, not alive)",
      section: "Part 1: What AI Is",
      body: `You've probably heard people talk about **AI**. Those two letters stand for **artificial intelligence**. "Artificial" means *made by people* — like an artificial flower is a flower people made. "Intelligence" means *being able to think and figure things out*. So AI is a computer program that people built to do jobs that usually need a thinking brain — like answering questions, drawing a picture, or telling a robot where to go.

Here's the most important thing to remember, and we'll come back to it again and again:

> **AI is not magic, and it is not alive.** It can't feel happy or sad. It doesn't want anything. It doesn't *know* you. It is a very fast, very fancy computer program — and a program is just a set of instructions a computer follows.

When a chat helper writes you a friendly message, it can *feel* like talking to a person. But there is no person and no creature in there. It's a tool, like a calculator that works with words and pictures instead of numbers. Tools are great helpers — and you are always the one in charge of the tool.

| What people sometimes think | What's really true |
| --- | --- |
| "AI is alive / a robot friend" | It's a computer program — no feelings, no body, not awake |
| "AI knows everything" | It can be wrong, and sometimes makes things up (you'll see how soon) |
| "AI is magic" | It's math and patterns — clever, but not magic |

Grown-up groups that study AI to keep kids safe, like **UNICEF** (a part of the United Nations that protects children all over the world), say it's important that kids understand what AI is and how it works — so you can use it well and stay safe. That's exactly what this course is for.

**Think about it.** In your own words, why is it better to call AI a "tool" than a "friend"?

## Sources
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)*. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children
- Common Sense Education. *What Is AI?* (lesson). https://www.commonsense.org/education/digital-citizenship/lesson/what-is-ai`,
    },
    {
      slug: "how-computers-learn",
      title: "2 · How computers \"learn\" from examples",
      section: "Part 1: What AI Is",
      body: `If AI isn't magic, how does it get good at things? The secret is **examples**. AI learns a lot like you do — by seeing many, many examples until it spots the **pattern**.

Imagine you wanted to teach a little kid the difference between a **cat** and a **dog**. You wouldn't write down rules like "a cat is exactly this wide." You'd just point at lots of cats and say "cat," and lots of dogs and say "dog." After enough examples, the kid starts to *guess* on their own — "that fluffy one is a cat!" They learned the pattern from examples.

AI does the same thing, just with a giant pile of examples — sometimes millions of pictures, or huge amounts of writing. People call those examples the **training data** ("training" like training for a sport; "data" just means *information*). The AI looks for patterns in the training data, and then it can make a guess about something new it has never seen.

Here's the simple loop:

| Step | What happens | Kid example |
| --- | --- | --- |
| 1. Examples | Show the AI lots of training data | Thousands of cat and dog photos, each labeled |
| 2. Find the pattern | The AI notices what's usually true | "Pointy ears + whiskers → cat" |
| 3. Make a guess | Show it a *new* thing; it predicts | New photo → "I think that's a cat!" |

Two important things follow from this:

- **AI is really making a smart guess.** A good guess, often — but a guess, not a fact it looked up in a book.
- **AI is only as good as its examples.** If the examples are messy, missing, or unfair, the guesses will be too. (We'll come back to that in the fairness lesson.)

You can even try this yourself. Free school programs from **Code.org** and **MIT's Day of AI** let kids train a real model — for example, teaching a computer to tell sea animals from trash — just by giving it examples. That's machine learning, and now you know the trick behind it.

**Think about it.** If you trained an AI on photos of *only* tiny puppies, what might it get wrong when it sees a big grown dog?

## Sources
- Code.org. *How AI Works* (curriculum & videos for students). https://code.org/curriculum/how-ai-works
- MIT RAISE. *Day of AI — free K-12 AI literacy curriculum*. https://raise.mit.edu/`,
    },

    // ── Part 2: Talking to AI ──────────────────────────────────────────────────
    {
      slug: "talking-to-ai",
      title: "3 · Talking to AI helpers (asking good questions)",
      section: "Part 2: Talking to AI",
      body: `Some AI tools are **chat helpers** — you type a question or a request, and they write something back. The message you give them is called a **prompt** (it's just a fancy word for *what you ask*). A good prompt gets a good answer. A fuzzy prompt gets a fuzzy answer.

Think about asking a grown-up for help. If you say "help," they don't know what you need. If you say, "Can you help me think of three ideas for a science project about plants, for a 4th grader?" — now they can really help. AI is the same way. The more clearly you say what you want, the better.

A simple recipe for a strong prompt — remember **"Who, What, How":**

- **Who** should the AI pretend to be, and who is it for? ("Pretend you're a friendly tutor helping a 3rd grader.")
- **What** do you actually want? ("Explain why the sky is blue.")
- **How** should the answer look? ("Use short sentences and one example.")

Putting it together: *"Pretend you're a friendly tutor for a 3rd grader. Explain why the sky is blue. Use short sentences and one example."* That's a great prompt!

Two more friendly tips:

- **Keep talking.** If the first answer is too long, or you don't get it, just say so: "Can you make that shorter?" or "I don't understand — can you say it a different way?" Good prompting is a *conversation*, not one try.
- **Be polite and clear.** You don't *have* to be polite to a tool, but saying clearly what you want (and being kind) is a good habit — and it makes your prompt clearer too.

> **Safety first:** before you use a chat helper, check with a parent or teacher. Many AI tools are made for grown-ups, and a trusted adult should help you pick a safe one and be nearby.

**Think about it.** Turn this fuzzy prompt into a strong one using Who/What/How: *"Tell me about space."*

## Sources
- Common Sense Education. *AI literacy lessons* (what AI is and how to use it responsibly). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)*. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children`,
    },
    {
      slug: "ai-can-be-wrong",
      title: "4 · AI can be wrong — always check!",
      section: "Part 2: Talking to AI",
      body: `This might be the most important lesson in the whole course, so read it twice:

> **AI can be wrong — even when it sounds totally sure.** Always check what it tells you.

Remember from Lesson 2 that an AI chat helper is really making a *smart guess* about what words come next. It's trying to sound right, but sounding right and *being* right are not the same thing. Sometimes an AI will make up something that is completely false and say it with a big confident smile. Grown-ups have a funny word for that: they call it a **hallucination** (say it: huh-loo-sih-NAY-shun). It means the AI "saw" something that isn't there — like a made-up fact, a fake book title, or a wrong date.

Here's the tricky part: a hallucination doesn't *look* like a mistake. It looks neat and sure, just like a true answer. That's exactly why you have to check.

**How to check — be a fact detective:**

- **Ask a grown-up.** A parent, teacher, or librarian can help you check.
- **Look in a trusted place.** A real book, a kids' encyclopedia, or a trusted website. If the AI and a trusted source disagree, the trusted source wins.
- **Use AI for the easy stuff, double-check the important stuff.** Spelling help or brainstorming? Less risky. A fact for your homework, or anything you'll really count on? Check it.
- **Never just trust a number, a date, or a "fact"** an AI gives you without checking. Numbers are easy for AI to get wrong.

The grown-ups who write safety rules for AI (at a U.S. group called **NIST**) say good AI should be **"valid and reliable"** — fancy words that just mean *correct and trustworthy.* Until you've checked, treat an AI's answer like a clue, not the final answer.

**Think about it.** An AI tells you a "fact" for your report and sounds very sure. What are two things you could do before you write it down?

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — see "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework
- Common Sense Education. *AI literacy lessons* (think critically about AI's risks). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "practice-talking-to-ai",
      title: "5 · Practice: good prompts & checking",
      section: "Part 2: Talking to AI",
      exercise: {
        instructions:
          "Fill in the missing word from Part 2. Spelling doesn't have to be perfect — the explanation shows the idea.",
        items: [
          {
            prompt: "The message you type to a chat helper — what you ask it — is called a ___.",
            answer: "prompt",
            accept: ["prompts"],
            explanation: "A prompt is just what you ask. A clear prompt gets a better answer.",
          },
          {
            prompt: "A strong prompt usually says Who, ___, and How.",
            answer: "what",
            explanation: "Who it should be / who it's for, What you want, and How the answer should look.",
          },
          {
            prompt: "When an AI makes up something false but says it confidently, that's called a ___.",
            answer: "hallucination",
            accept: ["hallucinations"],
            explanation: "It 'saw' something that isn't there — always check facts before you trust them.",
          },
          {
            prompt: "If the AI and a trusted book disagree about a fact, you should believe the ___.",
            answer: "book",
            accept: ["trusted book", "trusted source", "source", "grown-up", "grownup", "adult"],
            explanation: "A trusted source (or a grown-up) wins over an AI's guess.",
          },
          {
            prompt: "Good prompting is a conversation — if the answer is confusing, you can ___ for a clearer one.",
            answer: "ask",
            accept: ["ask again", "keep asking", "try again"],
            explanation: "Just say 'make it shorter' or 'say it a different way.' One try is rarely the best try.",
          },
        ],
      },
    },

    // ── Part 3: Being Fair, Safe & Honest ──────────────────────────────────────
    {
      slug: "fairness-and-bias",
      title: "6 · Fairness & bias (AI learns our mistakes too)",
      section: "Part 3: Being Fair, Safe & Honest",
      body: `Remember that AI learns from examples — the training data. That's powerful, but it has a catch: **AI learns the unfair stuff in the examples, too.** If the examples are missing some people, or they show old unfair ideas, the AI can pick up those same problems. Grown-ups call an unfair pattern like this **bias** (say it: BYE-us). Bias just means *leaning one way unfairly,* like a seesaw that's stuck on one side.

Here are two ways bias can sneak in:

- **Missing examples.** Imagine an AI learned to recognize "a doctor" from photos, but almost all the photos were of men. It might wrongly guess that a woman in a white coat is *not* a doctor — just because it didn't see enough examples. The AI isn't being mean on purpose; it only learned from what it was shown.
- **Unfair examples.** People write all kinds of things on the internet, including unkind or untrue ideas about groups of people. If an AI learns from that, it can repeat those unfair ideas.

So when an AI says something about *people* — who's good at what, what someone "should" look like, who belongs — be extra careful. That's a moment to stop and think: *Is that actually fair and true?* Often a grown-up can help you talk it through.

The good news: knowing about bias is the first step to spotting it. **UNICEF** says AI made for kids should be **fair and not leave anyone out**, and the **NIST** safety rules list **"fair — with harmful bias managed"** as a goal for trustworthy AI. You can help by noticing unfairness and speaking up — because *you* know that everyone deserves to be treated fairly, even if a computer program hasn't learned that yet.

**Think about it.** If an AI only saw pictures of one kind of person doing a job, what unfair guess might it make? How could more, fairer examples help?

## Sources
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)* — fairness and non-discrimination for children. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — "Fair – with Harmful Bias Managed." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "privacy-and-secrets",
      title: "7 · Privacy (keep your secrets secret)",
      section: "Part 3: Being Fair, Safe & Honest",
      body: `When you type something into a public AI tool, those words don't just vanish. The company that made the tool might **save** what you typed, and sometimes even use it to help train the AI later. So here's a simple, important rule:

> **Don't tell an AI your secrets or private information.**

**Private information** means anything that could tell a stranger who you are or where to find you. Keep these *off* the screen:

- Your **full name**, address, or the name of your school.
- Your **phone number** or **email**.
- A **photo** of yourself, your family, or your home.
- **Passwords** — ever, to anyone or anything.
- Anything about your family you wouldn't shout out in a crowded park.

A good test: *"Would I tell this to a stranger on the street?"* If the answer is no, don't tell it to an AI either. Remember, the AI isn't a trusted friend — it's a tool, and you don't know everyone who might see what you type.

What you *can* do:

- **Ask in a general way.** Instead of "Help me get to 123 Maple Street," ask "How do maps help people find places?"
- **Use a pretend name** if a tool asks for one and a grown-up says it's okay.
- **Check with a parent or teacher first**, and let them know what tools you're using.

**UNICEF** lists **protecting children's privacy** as one of the most important rules for AI made for kids — because keeping your private life private helps keep you safe. You're the guard of your own secrets, and that's a job to be proud of.

**Think about it.** Name three things you should never type into an AI tool. Why does the "stranger on the street" test work so well?

## Sources
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)* — protect children's data and privacy. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children
- Common Sense Education. *AI literacy lessons* (responsible, safe use). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "kind-and-honest",
      title: "8 · Being kind & honest (use AI to learn, not to cheat)",
      section: "Part 3: Being Fair, Safe & Honest",
      body: `AI can help you do amazing things — and how you use it says a lot about the kind of maker you are. Two rules make all the difference: **be honest**, and **be kind**.

**Be honest — use AI to *learn*, not to cheat.** It might feel tempting to have an AI just *do* your homework and hand it in as your own. But think about what really happens:

- **You don't actually learn it.** The whole point of practice is to grow *your* brain. If the AI does it, your brain misses the workout — like having a robot lift weights *for* you and wondering why your arms aren't stronger.
- **It isn't truthful.** Turning in AI's work as if it's yours is a kind of fibbing, and at school that can be against the rules.

So what's the honest way? Use AI as a **tutor and a helper**, not a cheat sheet:

- "Explain this math step so I understand it" ✅ (then *you* do the problem)
- "Quiz me on my spelling words" ✅
- "Give me three ideas to get started, then I'll write it myself" ✅
- "Do my whole worksheet and I'll copy it" ❌

If you *do* use AI to help, **say so** — tell your teacher how you used it. Honesty is always the brave, right choice. (Always follow your own teacher's rules about AI, too.)

**Be kind — with AI and with people.** Don't use AI to be mean: no making fun of people, no fake mean messages, no pretending to be someone else to trick or hurt them. A good maker uses powerful tools to *help*, never to harm. The **NIST** safety rules even say people should always stay **responsible and accountable** for what AI is used to do — and that includes you.

> **The maker's promise:** I'll use AI to learn and create, I'll be honest about my work, and I'll be kind to everyone — online and off.

**Think about it.** What's the difference between "AI, teach me how to do this" and "AI, do this for me"? Why does the first one make you smarter?

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — "Accountable and Transparent." https://www.nist.gov/itl/ai-risk-management-framework
- Common Sense Education. *AI literacy lessons* (be a responsible, ethical user of AI). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },

    // ── Part 4: Make Something! ─────────────────────────────────────────────────
    {
      slug: "make-something",
      title: "9 · Make something! (a project with a grown-up)",
      section: "Part 4: Make Something!",
      body: `You've learned what AI is, how it learns, how to talk to it, how to check it, and how to be fair, private, kind, and honest. Now for the best part: **let's make something!**

> **Grown-up needed:** Do this lesson *with* a parent or teacher. They'll pick a safe, kid-friendly AI tool and sit with you. You bring the ideas — they bring the tool.

Pick one of these maker projects (or dream up your own):

**Project A — Write a silly story.** Together, prompt a chat helper using **Who/What/How** from Lesson 3. Try: *"Pretend you're a funny storyteller. Write a short, silly story for a 9-year-old about a penguin who wants to fly a kite. Use simple words and a happy ending."* Then make it *yours*: change the penguin's name, add a friend, draw a picture of your favorite part. **You** are the author — the AI is just a helper.

**Project B — Make a picture (with a grown-up).** If your adult has a safe image tool, describe a fun scene clearly: *"A friendly robot watering a garden of giant sunflowers, bright and cartoon-style."* See how your *words* (your prompt!) change the picture. Try it again with one word different and watch what happens.

**Project C — Build a mini quiz.** Ask the AI to help you make 5 quiz questions about something *you* love — dinosaurs, soccer, space. Then do the most important step: **be a fact detective from Lesson 4** and check each answer in a real book or with your grown-up. Did the AI get anything wrong? Finding a mistake means you're an excellent checker!

**Whichever you pick, use your checklist:**

- ✅ A grown-up is helping and the tool is safe.
- ✅ My prompt is clear (Who / What / How).
- ✅ I kept my private info secret.
- ✅ I checked any facts before trusting them.
- ✅ The final project is really *mine* — I added my own ideas, and I'm honest that AI helped.

That's it — you used AI the **Young Maker way**: curious, careful, kind, and honest. High five! 🙌

**Think about it.** After your project, tell a grown-up: one thing AI helped with, and one thing *you* did that the AI could not.

## Sources
- MIT RAISE. *Day of AI — free, hands-on K-12 AI activities*. https://raise.mit.edu/
- Common Sense Education. *AI Literacy Toolkit for Families* (explore AI together with a grown-up). https://www.commonsense.org/education/families-ai-literacy-toolkit`,
    },
    {
      slug: "practice-make-something",
      title: "10 · Practice: be a safe, smart maker",
      section: "Part 4: Make Something!",
      exercise: {
        instructions:
          "Fill in the missing word from Parts 3 and 4. Spelling doesn't have to be perfect.",
        items: [
          {
            prompt: "When an AI leans one way unfairly because of its examples, that's called ___.",
            answer: "bias",
            explanation: "Bias means leaning one way unfairly. AI can learn it from unfair or missing examples.",
          },
          {
            prompt: "Before you type something private, ask: 'Would I tell this to a ___ on the street?'",
            answer: "stranger",
            explanation: "If you wouldn't tell a stranger, don't tell an AI tool either.",
          },
          {
            prompt: "Using AI to teach you a step, then doing the work yourself, is honest. Having it do the whole thing and copying it is ___.",
            answer: "cheating",
            accept: ["cheat", "dishonest", "lying"],
            explanation: "Use AI to learn, not to cheat — and your brain gets the workout it needs.",
          },
          {
            prompt: "Before you start a maker project with an AI tool, you should do it with a trusted ___.",
            answer: "grown-up",
            accept: ["grownup", "adult", "parent", "teacher"],
            explanation: "A grown-up picks a safe tool and helps keep you safe while you create.",
          },
          {
            prompt: "After the AI helps with a quiz, you should be a fact detective and ___ each answer.",
            answer: "check",
            accept: ["check it", "verify", "double-check", "double check"],
            explanation: "Always check facts in a real book or with a grown-up — AI can be wrong.",
          },
        ],
      },
    },
    {
      slug: "young-makers-ai-quiz",
      title: "11 · Check what you learned",
      section: "Part 4: Make Something!",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which is the best way to describe what AI really is?",
            options: [
              "A living creature with feelings",
              "Magic that knows everything",
              "A computer program — a tool that's good at finding patterns",
              "A real friend who knows you",
            ],
            correctIndex: 2,
            explanation: "AI is a computer program — a tool. It's not alive, not magic, and doesn't truly know you.",
            sourceLessonSlug: "what-is-ai",
          },
          {
            prompt: "How does an AI mainly \"learn\" to do something?",
            options: [
              "It is born knowing it",
              "It learns patterns from lots of examples (training data)",
              "It guesses with no help at all",
              "A wizard teaches it",
            ],
            correctIndex: 1,
            explanation: "AI finds patterns in many examples (training data), then makes a smart guess about something new.",
            sourceLessonSlug: "how-computers-learn",
          },
          {
            prompt: "What is a \"prompt\"?",
            options: [
              "A mistake the AI makes",
              "The message you give the AI — what you ask it",
              "A kind of robot",
              "A password",
            ],
            correctIndex: 1,
            explanation: "A prompt is what you ask. A clear prompt (Who / What / How) gets a better answer.",
            sourceLessonSlug: "talking-to-ai",
          },
          {
            prompt: "An AI tells you a fact for your report and sounds very sure. What should you do?",
            options: [
              "Believe it right away — it sounded sure",
              "Check it in a trusted book or with a grown-up before trusting it",
              "Never use AI again",
              "Ask the AI if it's really, really sure",
            ],
            correctIndex: 1,
            explanation: "AI can be wrong even when it sounds sure (a hallucination). Always check important facts.",
            sourceLessonSlug: "ai-can-be-wrong",
          },
          {
            prompt: "When an AI makes up something false but says it confidently, grown-ups call that a…",
            options: ["Glitch", "Hallucination", "Password", "Pattern"],
            correctIndex: 1,
            explanation: "A hallucination — the AI 'saw' something that isn't there. That's why you check.",
            sourceLessonSlug: "ai-can-be-wrong",
          },
          {
            prompt: "Why can an AI sometimes be unfair (biased)?",
            options: [
              "It is trying to be mean on purpose",
              "It learned from examples that were unfair or left some people out",
              "It is broken",
              "It doesn't like certain kids",
            ],
            correctIndex: 1,
            explanation: "Bias comes from unfair or missing examples — not from the AI choosing to be mean. Notice it and speak up.",
            sourceLessonSlug: "fairness-and-bias",
          },
          {
            prompt: "Which of these should you NEVER type into a public AI tool?",
            options: [
              "A made-up story idea",
              "A question about how rainbows work",
              "Your home address, password, or full name",
              "A request to quiz you on spelling",
            ],
            correctIndex: 2,
            explanation: "Keep private info secret. If you wouldn't tell a stranger on the street, don't tell an AI tool.",
            sourceLessonSlug: "privacy-and-secrets",
          },
          {
            prompt: "Which is the honest, smart way to use AI for schoolwork?",
            options: [
              "Have it do the whole worksheet and copy it",
              "Ask it to explain a step so you understand, then do the work yourself",
              "Turn in its work and say you did it all alone",
              "Use it to write mean messages",
            ],
            correctIndex: 1,
            explanation: "Use AI to learn, not to cheat — and tell your teacher how you used it. Honesty is the brave choice.",
            sourceLessonSlug: "kind-and-honest",
          },
          {
            prompt: "Before you make a project with an AI tool, the very first step is to…",
            options: [
              "Type in your home address",
              "Do it with a trusted grown-up using a safe tool",
              "Believe everything it makes",
              "Keep it a secret from your parents",
            ],
            correctIndex: 1,
            explanation: "A grown-up picks a safe tool and stays nearby — that keeps you safe while you create.",
            sourceLessonSlug: "make-something",
          },
          {
            prompt: "After an AI helps you make a quiz about dinosaurs, the most important next step is to…",
            options: [
              "Share it before checking it",
              "Check each answer in a real book or with a grown-up",
              "Trust it because it sounded smart",
              "Add your address so people know it's yours",
            ],
            correctIndex: 1,
            explanation: "Be a fact detective! AI can be wrong, so check the answers before you trust them.",
            sourceLessonSlug: "make-something",
          },
        ],
      },
    },
  ],
};
