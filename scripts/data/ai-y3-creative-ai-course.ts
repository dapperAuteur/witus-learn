// Authored "Y3: Creative AI — Art, Music & Stories, Responsibly" — the creative-track
// young-makers AI course on the ElementaryMBA school, written for teens (~grades 6-12).
// Sibling to F3 ("Young Makers: AI for Kids", grades 3-8) and F4 ("AI for Entrepreneurs",
// teen/young-adult), it goes deeper on the part of AI teens actually reach for: making
// images, music, and stories with generative tools. Playful but honest about the ethics
// that come with creative AI — copyright and whose art trained the model, giving credit,
// "is it cheating?", deepfakes and consent, bias in generated content, and being upfront
// that you used AI. Carries the platform's trust DNA: cite, verify, respect creators,
// don't pass off a tool's work as wholly your own. Grouped into four sections (How
// Creative AI Works · Creating With AI · The Big Ethics Questions · Make Something Real).
// Two fill-in exercises + a final quiz whose every question links to the lesson that
// teaches its answer. Cited to real, verifiable, teen-appropriate sources: Common Sense
// Education (AI literacy for grades 6-12), MIT RAISE / Day of AI, the U.S. Copyright
// Office's AI guidance (human-authorship requirement, kept high-level), UNICEF's policy
// guidance on AI for children, and C2PA / Content Credentials (content provenance).

import type { AuthoredCourse } from "./authored-course";

export const AI_Y3_CREATIVE_AI_COURSE: AuthoredCourse = {
  title: "Y3: Creative AI — Art, Music & Stories, Responsibly",
  description:
    "Generative AI can help you draw, compose, and write — but the interesting questions aren't technical, they're about credit, honesty, and respect. This course is for teens who want to actually *make* things with AI tools and do it right. You'll learn, in plain words, how AI generates images, music, and text by learning patterns from huge piles of human-made work; how to prompt and direct it like a creative collaborator instead of a vending machine; and how to keep your own voice instead of handing it over. Then we go straight at the hard stuff: whose art trained the model and why that matters, copyright and what AI-made work can (and can't) own, how to give credit and be honest you used AI, deepfakes and consent, and bias in what AI generates. You'll finish by making something genuinely original *with* AI — and labeling it honestly. Every key idea is tied to a real source you can open and check.",
  lessons: [
    // ── Section 1 · How Creative AI Works ──────────────────────────────────────
    {
      slug: "how-generative-ai-creates",
      title: "1 · How AI makes images, music & text",
      section: "How Creative AI Works",
      body: `You type a sentence and a few seconds later there's a painting, a song, or a finished paragraph. It feels like magic. It isn't — and understanding what's actually happening underneath is what separates someone who *uses* creative AI well from someone who just gets surprised by it.

The tools that make new pictures, sounds, or words are called **generative AI** ("generative" just means *it generates — it makes new stuff*, instead of only sorting or labeling things). Underneath, they all run on the same basic idea: **learn patterns from a huge pile of examples, then produce something new that fits those patterns.**

- **Text** tools (chatbots) read enormous amounts of human writing and learn which words tend to follow which. When you prompt one, it predicts likely next words, over and over, until it has a reply. It's a very sophisticated **next-word predictor**.
- **Image** tools learn from huge collections of pictures paired with descriptions. They learn what "a golden retriever" or "a watercolor sunset" tends to *look* like, then build a new image that matches your words — usually by starting from visual noise and refining it step by step.
- **Music/audio** tools learn patterns in sound — melody, rhythm, instruments, style — from large collections of recordings, then generate new audio that fits the style you ask for.

Notice the thread running through all three: **every one of them learned from work that humans made.** The paintings, songs, photos, and writing in that training data came from real artists, musicians, photographers, and writers. Hold onto that fact — it's the root of almost every ethics question later in this course.

| If you remember one thing per type | Text | Images | Music |
| --- | --- | --- | --- |
| What it learned from | mountains of human writing | images + their descriptions | recordings + their styles |
| What it's really doing | predicting likely next words | building an image to match words | generating audio to match a style |
| What it is *not* doing | "knowing" facts | "drawing from imagination" | "feeling" the music |

> **Plain-words summary:** generative AI is a pattern machine. It's not imagining, feeling, or understanding — it's recombining patterns it learned from human-made work into something new that fits your request.

**Think about it.** All three tools "learned from examples." In one sentence, where did all those examples actually come from — and why might that matter to the people who made them?

## Sources
- Common Sense Education. *How Is AI Trained?* (lesson, grades 6–12). https://www.commonsense.org/education/digital-citizenship/lesson/how-is-ai-trained
- MIT RAISE. *Day of AI — free K–12 AI literacy curriculum*. https://raise.mit.edu/`,
    },
    {
      slug: "patterns-not-imagination",
      title: "2 · Patterns, not imagination (what AI can't do)",
      section: "How Creative AI Works",
      body: `It's easy to say an AI "imagined" a dragon or "wrote a poem from the heart." Those phrases feel right because the output looks creative. But they hide what's really going on, and the difference matters for how you use the tool — and how much credit you can honestly claim.

**An AI doesn't have ideas, taste, or intent.** It has *patterns*. When you ask for "a sad song about leaving home," it isn't sad and has never left home. It's assembling sounds that statistically resemble the sad-leaving-home songs in its training data. The feeling you hear comes from the humans whose work it learned from — and from *you*, the listener, bringing your own meaning.

This leads to a few things that trip up people who don't understand it:

- **AI gravitates toward the average.** Because it's built from patterns, it's great at producing something *typical* — a competent, familiar-looking result. The genuinely surprising, weird, personal stuff? That usually has to come from *you*, in how you push and edit it.
- **AI can't tell you what's *good* — only what's *likely*.** It has no taste. Deciding that one version is better, funnier, or more honest than another is a human job. That judgment is a real part of being a creator, and AI can't do it for you.
- **AI can confidently produce nonsense.** A text tool can make up a fake quote; an image tool can give a person six fingers; a music tool can wander off-key. It's optimizing for "looks/sounds plausible," not "is correct." So you check, just like you would any draft.

Here's the upside of understanding all this: it tells you exactly where *you* belong in the process. The original idea, the point of view, the taste to know when it's right, the willingness to throw out the boring version — that's the human part. The AI is a fast, tireless, sometimes-wrong collaborator that can't lead. **You lead.**

> **Plain-words summary:** AI generates what's *likely*, not what's *good* or *true* or *original*. Ideas, taste, and judgment are still your job — which is exactly why your creative work still matters.

**Think about it.** Name one thing in a creative project that an AI genuinely *cannot* do for you. Why does that part have to be yours?

## Sources
- Common Sense Education. *AI literacy lessons* (think critically about how AI works and its limits, grades 6–12). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12
- MIT RAISE. *Day of AI — free K–12 AI literacy curriculum*. https://raise.mit.edu/`,
    },

    // ── Section 2 · Creating With AI ───────────────────────────────────────────
    {
      slug: "prompting-for-creative-work",
      title: "3 · Prompting like a creative director",
      section: "Creating With AI",
      body: `Most people type a vague request, get a generic result, shrug, and decide AI "isn't that good." The people who get striking results aren't using a secret tool — they're *directing* it. A **prompt** (what you ask the AI for) is a creative brief, and a clear brief gets a better result.

A strong creative prompt usually names four things — remember **S.T.A.R.**:

- **Subject** — what's actually in it. ("A lighthouse on a cliff at dawn.")
- **Tone/Style** — the mood and the look or sound. ("Moody, painterly, muted blue-grey palette." Or for music: "slow, hopeful, solo piano.")
- **Audience/Purpose** — who it's for and why. ("Cover art for a short story about loneliness.")
- **Restrictions** — what to include or avoid, length, format. ("No text in the image. Vertical. Keep it simple.")

Compare: *"a lighthouse"* versus *"A lighthouse on a cliff at dawn, moody and painterly, muted blue-grey, as cover art for a short story about loneliness — vertical, no text, keep it simple."* Same tool, completely different result.

Two habits separate good creative AI work from lazy creative AI work:

- **Iterate — it's a conversation, not a slot machine.** Your first result is a *draft*. Change one thing and run it again: "warmer light," "more empty space," "a verse before the chorus." Directing through several rounds is where the result starts to feel like *yours* instead of the tool's default.
- **Bring a specific point of view.** Generic in, generic out. The more your prompt reflects *your* actual idea — a particular feeling, an odd detail, a personal angle — the less the result looks like everyone else's. The AI supplies competence; you supply originality.

> **A note before you generate:** stick to AI tools your school or a parent/guardian approves, and check the tool's age rules — many are built for adults. Direct the tool; don't let it direct you.

**Think about it.** Take a flat prompt — *"a song about summer"* — and rewrite it using S.T.A.R. What did you have to *decide* that the AI couldn't decide for you?

## Sources
- Common Sense Education. *AI literacy lessons* (using AI tools thoughtfully and responsibly, grades 6–12). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12
- MIT RAISE. *Day of AI — free K–12 AI literacy curriculum*. https://raise.mit.edu/`,
    },
    {
      slug: "tool-not-replacement",
      title: "4 · AI is a tool, not a replacement for your ideas",
      section: "Creating With AI",
      body: `There's a tempting shortcut with creative AI: let it do the whole thing. Type "write me a song," paste the result, done. It works — and it quietly costs you the two things that actually make creative work worth doing: **getting better**, and **making something that's really yours.**

Think of AI like any powerful tool a creator uses. A camera doesn't make you a photographer — *seeing* the shot does. Autotune doesn't make you a singer. A word processor doesn't make you a writer. The tool removes friction; the vision, taste, and effort are still yours. Creative AI is the same, just more powerful — which makes it more tempting to hand over the whole job.

Here's what you lose if you let it lead:

- **You stop growing.** Skill comes from doing the hard part yourself — wrestling with a melody, cutting a paragraph that isn't working, figuring out why a drawing feels off. If AI does that part every time, that's the muscle that never develops.
- **Your voice disappears.** AI defaults to the *average*. Hand it the whole job and you get competent, forgettable, looks-like-everyone-else work. Your weird specific taste — the thing that makes your work *yours* — only shows up when you steer hard and edit ruthlessly.

So what's the healthy way to work? Treat AI as a **collaborator you direct**, not a replacement:

- ✅ "Give me ten title ideas, then I'll pick and rework one."
- ✅ "Here's my rough draft — suggest where the pacing drags." (Then *you* decide and rewrite.)
- ✅ "Generate three background options for the scene *I* sketched."
- ❌ "Write the whole story and I'll submit it as mine."

The goal isn't to avoid AI — it's to stay the **author**. Use it to get unstuck, explore options fast, and handle grunt work, while the idea, the choices, and the final call stay with you.

> **Plain-words summary:** let AI assist your vision, never replace it. If you can't point to the parts that are genuinely *yours*, you didn't make it — you ordered it.

**Think about it.** Describe one way to use an AI tool that makes you a *better* creator, and one way that makes you a *lazier* one. What's the actual difference between them?

## Sources
- Common Sense Education. *AI literacy lessons* (be an empowered, ethical creator with AI, grades 6–12). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)*. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children`,
    },
    {
      slug: "practice-creating-with-ai",
      title: "5 · Practice: how creative AI works & directing it",
      section: "Creating With AI",
      exercise: {
        instructions:
          "Fill in the missing word from Sections 1–2. Spelling doesn't have to be perfect — the explanation shows the idea.",
        items: [
          {
            prompt: "AI that makes new images, music, or text is called ___ AI.",
            answer: "generative",
            accept: ["generative ai", "gen", "gen ai"],
            explanation: "'Generative' means it generates new content — it makes new stuff, not just sorts or labels.",
          },
          {
            prompt: "All these tools learn from a huge pile of ___ — work that humans originally made.",
            answer: "examples",
            accept: ["training data", "data", "examples (training data)"],
            explanation: "They learn patterns from training data — and that data came from real human artists, writers, and musicians.",
          },
          {
            prompt: "AI produces what's likely or typical, so it tends to pull toward the ___ rather than the surprising.",
            answer: "average",
            accept: ["typical", "ordinary", "generic", "middle"],
            explanation: "Because it's built from patterns, AI is good at typical results. The surprising, personal part comes from you.",
          },
          {
            prompt: "AI can tell you what's *likely*, but it has no taste — deciding what's *good* is a ___ job.",
            answer: "human",
            accept: ["your", "yours", "person", "people"],
            explanation: "Judgment and taste are human. AI optimizes for plausible, not for good, true, or original.",
          },
          {
            prompt: "What you ask the AI for — your creative brief — is called the ___.",
            answer: "prompt",
            accept: ["prompts"],
            explanation: "A clear prompt (Subject, Tone/Style, Audience/Purpose, Restrictions) gets a far better result.",
          },
        ],
      },
    },

    // ── Section 3 · The Big Ethics Questions ───────────────────────────────────
    {
      slug: "whose-art-trained-it",
      title: "6 · Whose art trained it? (copyright & respect)",
      section: "The Big Ethics Questions",
      body: `Back in Lesson 1 you learned that every generative tool learned from human-made work. Now we sit with what that means, because it's the question artists care about most: **the images, songs, and writing an AI learned from were created by real people — often without being asked, paid, or credited.**

That's why so many artists, musicians, and writers have strong feelings (and some are in court) about AI trained on their work. You don't have to have the legal answer to grasp the human one: *somebody made the stuff this model learned from, and they matter.* Respecting that is part of being a good creator.

A second, separate question is **copyright** — the legal protection that says the person who *creates* something gets to control how it's copied and used. Here's the part that surprises people, and it's worth knowing:

> In the United States, the **Copyright Office** has said that copyright protects **human authorship**. Material a person *creates* can be protected — but content a machine generates **on its own**, with no meaningful human creativity behind it, generally **can't be copyrighted** by you. When you genuinely shape and arrange AI output with your own creative choices, *that human contribution* is what can be protected.

In plain words: you can't just type one prompt, accept whatever pops out, and "own" it like a painting you made by hand. The more it's truly *your* creative work — your arrangement, edits, and choices — the more it's actually yours.

What this means for how you act:

- **Respect the artists whose work made these tools possible.** Don't treat "AI made it, so it's free and nobody's involved" as true. Real people are.
- **Don't copy a specific living artist's style and pass it off as your own thing,** especially "in the style of [a named artist]" to imitate or replace them. That's the kind of move that hurts working creators.
- **Know that AI output isn't automatically yours to own.** If that matters for your project, your *own* creative contribution is what counts.

**Think about it.** Why might an artist be upset that an AI learned from their paintings without asking? And why can't you fully "own" something an AI generated entirely on its own?

## Sources
- U.S. Copyright Office. *Copyright and Artificial Intelligence* — human-authorship requirement and registration guidance. https://www.copyright.gov/ai/
- Common Sense Education. *AI literacy lessons* (ethics, fairness, and impact of AI, grades 6–12). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "credit-and-is-it-cheating",
      title: "7 · Giving credit & “is it cheating?”",
      section: "The Big Ethics Questions",
      body: `Two questions hit every teen who uses creative AI: *Do I have to say I used it?* and *Is using it cheating?* The honest answers are simpler than people pretend — and they come down to one word: **honesty.**

**"Is it cheating?" depends on the rules and on honesty.** Using AI isn't automatically cheating — and it isn't automatically fine. The deciding questions are:

- **What were the rules?** If a teacher said "no AI on this assignment" and you used it anyway, that's cheating — same as any rule you break. If AI is allowed (or even encouraged), using it openly is fine. When you're not sure, *ask first.* Don't guess in your own favor.
- **Whose work is it really?** The point of most assignments is for *your* brain to do the work and grow. If AI did the thinking and you put your name on it as if you did, you cheated yourself out of the learning *and* misled your teacher — even if no rule named "AI" specifically.

**Giving credit: when AI helps, say so.** This is the simplest honesty rule there is. If AI meaningfully helped make something, disclose it:

- ✅ "Cover art generated with [tool name], directed and edited by me."
- ✅ "Brainstormed with an AI assistant; written and revised by me."
- ✅ In a class: tell your teacher exactly how you used it.

Why bother? Because passing off AI's contribution as 100% your own is a kind of lying — about who made what. Disclosure isn't an admission of weakness; it's what honest creators do, the same way a film lists everyone who worked on it. And here's the quiet bonus: when you're upfront about how you used AI, the parts that are genuinely *yours* stand out more, not less.

> **The creator's honesty rule:** follow the rules you're given, ask when you're unsure, and never present AI's work as entirely your own. If AI helped, say how.

**Think about it.** A friend says "everyone uses AI, so I don't need to mention it." What's wrong with that reasoning — and what would *honest* use look like instead?

## Sources
- Common Sense Education. *AI literacy lessons* (academic integrity and responsible use, grades 6–12). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12
- MIT RAISE. *Day of AI — free K–12 AI literacy curriculum*. https://raise.mit.edu/`,
    },
    {
      slug: "deepfakes-consent-bias",
      title: "8 · Deepfakes, consent & bias",
      section: "The Big Ethics Questions",
      body: `Generative AI can do something genuinely dangerous: make fake images, video, or audio of **real people** doing or saying things they never did. These are **deepfakes**, and being able to spot the problem — and refuse to be part of it — is one of the most important things in this whole course.

**Deepfakes and consent.** Making a realistic fake of a real person without their permission can be cruel, harmful, and in many places illegal — and that's true even of "just a joke" about a classmate. The rule is short and firm:

- **Consent first, always.** Never create AI images, video, or voice of a real person — a friend, a classmate, a celebrity, anyone — without their clear permission. Their face and voice are *theirs.*
- **Never use it to harm, humiliate, deceive, or bully.** Fake "embarrassing" content, fake voices to trick someone, fake nudes (which are abuse, full stop) — none of it is a prank. If something would hurt or fool someone, don't make it, don't share it, and tell a trusted adult if you see it.
- **Be skeptical of what you see, too.** Because fakes are now easy, a realistic image or clip isn't proof something happened. Check before you believe — or reshare.

**Bias in what AI generates.** Remember that AI learned from human-made data — which means it absorbs human bias too. Ask an image tool for "a CEO," "a nurse," or "a criminal" and it may keep showing the same narrow, stereotyped kinds of people, because that's what dominated its training data. It's not choosing to be unfair on purpose — it's repeating a lopsided pattern. Your job as a creator:

- **Notice the stereotype.** When generated content quietly assumes who "a scientist" or "a beautiful person" looks like, that's bias showing.
- **Push against it on purpose,** and don't let AI's defaults shrink how you see the world.

**UNICEF** is clear that AI involving children should protect them, avoid discrimination, and never be used to harm — and consent and dignity are central to that.

**Think about it.** A classmate wants to make a funny deepfake of another student "as a joke." Give two real reasons that's not okay — and what you'd say.

## Sources
- UNICEF Office of Global Insight & Policy. (2021). *Policy guidance on AI for children (2.0)* — protection, non-discrimination, and children's rights. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children
- Common Sense Education. *AI literacy lessons* (deepfakes, media literacy, and bias, grades 6–12). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "practice-ethics",
      title: "9 · Practice: credit, consent & honesty",
      section: "The Big Ethics Questions",
      exercise: {
        instructions:
          "Fill in the missing word from Section 3. Spelling doesn't have to be perfect — the explanation shows the idea.",
        items: [
          {
            prompt: "The legal protection that lets the creator of something control how it's copied is called ___.",
            answer: "copyright",
            accept: ["copy right"],
            explanation: "Copyright protects human authorship. Content a machine generates on its own generally can't be copyrighted by you.",
          },
          {
            prompt: "A realistic AI-made fake of a real person doing or saying something they never did is a ___.",
            answer: "deepfake",
            accept: ["deep fake", "deepfakes"],
            explanation: "Never make one of a real person without their permission, and never to harm, humiliate, or deceive.",
          },
          {
            prompt: "Before making any AI image or voice of a real person, you must have their ___.",
            answer: "consent",
            accept: ["permission", "consent (permission)", "okay"],
            explanation: "Their face and voice are theirs. Consent first, always — no exceptions for 'just a joke.'",
          },
          {
            prompt: "When AI keeps showing the same stereotyped kind of person for 'a CEO' or 'a nurse,' that's ___ from its training data.",
            answer: "bias",
            accept: ["biased", "stereotype", "stereotyping"],
            explanation: "AI repeats lopsided patterns it learned. Notice the stereotype and push against it on purpose.",
          },
          {
            prompt: "If AI meaningfully helped make your project, the honest thing to do is to ___ it.",
            answer: "disclose",
            accept: ["credit", "say so", "mention", "label", "disclose it", "acknowledge"],
            explanation: "Disclosing how you used AI is what honest creators do — it never makes your own work look smaller.",
          },
        ],
      },
    },

    // ── Section 4 · Make Something Real ─────────────────────────────────────────
    {
      slug: "be-honest-you-used-ai",
      title: "10 · Being honest you used AI (labels & provenance)",
      section: "Make Something Real",
      body: `You've met the honesty rule in a few lessons now. This one gives you the *tools* to do it well — including a real technology built for exactly this problem.

**Why labeling matters.** As AI content gets more convincing, people increasingly can't tell what's real, what's AI, and who made it. When you label your AI-assisted work, you're doing two good things at once: being honest about your own process, and helping keep the whole information space trustworthy. It's the same instinct as citing your sources — which you already know is this platform's whole trust DNA.

**Simple ways to label, depending on where it lives:**

- **In a caption or description:** "Image generated with AI and edited by me," or "AI-assisted; final choices and edits are mine."
- **In schoolwork:** a short note on how you used AI — which tool, for what part — wherever your teacher wants it.
- **In a credits list:** treat the AI tool like any contributor you'd name.

**Content Credentials — a "nutrition label" for media.** There's an open industry standard, built by a group called **C2PA** (the Coalition for Content Provenance and Authenticity), that attaches tamper-evident information to a piece of media showing where it came from and how it was edited — including whether AI was involved. They describe it as *"a nutrition label for digital content."* It's backed by major tech and media companies, and a growing number of cameras and creative tools can add it automatically.

You don't need to be an expert in it. The point is: **provenance — a trustworthy record of where content came from — is becoming part of being a responsible creator,** and tools are being built to make honesty the easy default. Knowing it exists puts you ahead.

> **Plain-words summary:** if AI helped, say so, simply and clearly. Labeling and provenance aren't admissions — they're how trustworthy creators operate, and the tools (like Content Credentials) are catching up to make it effortless.

**Think about it.** Why does honestly labeling AI-assisted work help *everyone*, not just you? How is it like citing a source?

## Sources
- C2PA / Content Credentials. *Coalition for Content Provenance and Authenticity* — an open standard for content provenance ("a nutrition label for digital content"). https://c2pa.org/
- Common Sense Education. *AI literacy lessons* (media literacy and responsible creation, grades 6–12). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "make-something-original",
      title: "11 · Make something original — with AI",
      section: "Make Something Real",
      body: `Time to put it all together. The goal of this project is the whole point of the course: **make something that is genuinely *yours*, using AI as a collaborator you direct — and label it honestly.**

> **Tool check:** use an AI tool your school or a parent/guardian approves, and follow its age rules. If you're under the tool's age limit, do this with an adult.

**Step 1 — Start with *your* idea.** Before you touch the AI, decide the thing only you can decide: the idea, the feeling, the point of view. A story only you would tell. A song about something real to you. Cover art for something you care about. Write your idea in one sentence. *This is the part the AI cannot do, and it's why the result will be yours.*

**Step 2 — Direct the AI (S.T.A.R. from Lesson 3).** Pick one:
- **Story:** prompt with Subject, Tone/Style, Audience/Purpose, Restrictions. Then **rewrite** it in your own voice — change what's generic, cut what's boring, add the detail only you'd think of.
- **Image:** describe *your* scene precisely. Generate, then iterate ("warmer," "more empty space") until it matches what's in your head — not the tool's default.
- **Music:** describe the mood, instruments, and structure of *your* song idea, generate options, and choose and shape the one that fits your vision.

**Step 3 — Make it unmistakably yours.** Iterate. Edit hard. Combine pieces. Add something handmade. If you can't point to the parts that are clearly your choices and your work, go back and push further. *Directing and editing through several rounds is what turns a generic output into your creation.*

**Step 4 — Check it.** Facts accurate? No accidental copy of a specific living artist's style passed off as your own? No real person used without consent? Any stereotypes you should push back on?

**Step 5 — Label it honestly.** Add a clear note: which tool you used, for what, and what *you* did. (Lesson 10.)

**Your responsible-creator checklist:**
- ✅ The core idea and point of view are mine.
- ✅ I directed the AI (S.T.A.R.) and iterated — it didn't just hand me a default.
- ✅ I edited hard; I can point to what's genuinely mine.
- ✅ No real person without consent; no copying a living artist to replace them.
- ✅ I checked it, and I labeled honestly that AI helped.

That's creating with AI the right way: **your vision, AI's help, your honesty.** 🎨🎵✍️

**Think about it.** When your project's done, name one thing AI helped with — and one thing *you* did that the AI never could have.

## Sources
- MIT RAISE. *Day of AI — free, hands-on K–12 AI activities*. https://raise.mit.edu/
- Common Sense Education. *AI literacy lessons* (create responsibly and credit your tools, grades 6–12). https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12`,
    },
    {
      slug: "creative-ai-quiz",
      title: "12 · Check what you learned",
      section: "Make Something Real",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How does generative AI mainly create a new image, song, or paragraph?",
            options: [
              "It imagines it from its own feelings",
              "It learns patterns from huge amounts of human-made work, then produces something new that fits",
              "It copies one existing file and renames it",
              "It looks the answer up in a single book",
            ],
            correctIndex: 1,
            explanation: "Generative AI learns patterns from large piles of human-made examples, then generates new content that matches your prompt.",
            sourceLessonSlug: "how-generative-ai-creates",
          },
          {
            prompt: "Because AI is built from patterns, what does it tend to produce — and what stays a human job?",
            options: [
              "It produces genius-level originality; humans just watch",
              "It produces what's *typical*; taste and judgment about what's *good* stay human",
              "It produces perfect facts every time; humans do nothing",
              "It produces only random noise; humans fix all of it",
            ],
            correctIndex: 1,
            explanation: "AI gravitates toward the average and can't judge quality. Ideas, taste, and the call on what's good are still yours.",
            sourceLessonSlug: "patterns-not-imagination",
          },
          {
            prompt: "What's the difference between a lazy creative prompt and a strong one?",
            options: [
              "A strong prompt is just longer",
              "A strong prompt directs the AI — subject, tone/style, purpose, restrictions — and reflects your point of view",
              "A strong prompt uses fancier words the AI prefers",
              "There's no difference; results are random",
            ],
            correctIndex: 1,
            explanation: "Direct it like a creative brief (S.T.A.R.) and iterate. Generic in, generic out — your specific point of view is what makes it yours.",
            sourceLessonSlug: "prompting-for-creative-work",
          },
          {
            prompt: "What's the healthiest way to think about an AI creative tool?",
            options: [
              "A replacement for your own ideas and effort",
              "A collaborator you direct — it assists your vision, you stay the author",
              "A machine that should do the whole project so you don't have to",
              "Something to avoid completely",
            ],
            correctIndex: 1,
            explanation: "Use AI to assist your vision, never replace it. If you can't point to what's genuinely yours, you ordered it — you didn't make it.",
            sourceLessonSlug: "tool-not-replacement",
          },
          {
            prompt: "Why do many artists object to AI being trained on their work?",
            options: [
              "Artists dislike all new technology",
              "Their real, human-made work was used to train the model — often without being asked, paid, or credited",
              "The AI pays them too much",
              "There's no real reason; it's imaginary",
            ],
            correctIndex: 1,
            explanation: "Every generative tool learned from human-made work. Real people made it, often without consent or credit — that's the root of the ethics.",
            sourceLessonSlug: "whose-art-trained-it",
          },
          {
            prompt: "Under U.S. Copyright Office guidance, can you fully 'own' something an AI generated entirely on its own from one prompt?",
            options: [
              "Yes, anything an AI makes for you is automatically yours",
              "Generally no — copyright protects human authorship; your own creative contribution is what can be protected",
              "Only if you paid for the tool",
              "Only if you keep it secret",
            ],
            correctIndex: 1,
            explanation: "Copyright protects human authorship. Pure machine output with no meaningful human creativity generally isn't yours to copyright.",
            sourceLessonSlug: "whose-art-trained-it",
          },
          {
            prompt: "When is using AI on schoolwork actually cheating?",
            options: [
              "Always — any AI use is cheating",
              "Never — using AI is always fine",
              "When you break the rules you were given, or present AI's work as your own thinking",
              "Only if the AI gets the answer wrong",
            ],
            correctIndex: 2,
            explanation: "It depends on the rules and on honesty. Follow the rules, ask when unsure, and never pass AI's work off as entirely your own.",
            sourceLessonSlug: "credit-and-is-it-cheating",
          },
          {
            prompt: "A classmate wants to make a realistic AI fake of another student 'as a joke.' What's the right call?",
            options: [
              "Fine, since it's just a joke",
              "Not okay — deepfakes of real people need consent and must never be used to harm, humiliate, or deceive",
              "Fine, as long as it looks real",
              "Only okay if you don't post it publicly",
            ],
            correctIndex: 1,
            explanation: "Never make an AI fake of a real person without consent, and never to harm. A person's face and voice are theirs.",
            sourceLessonSlug: "deepfakes-consent-bias",
          },
          {
            prompt: "An image tool keeps showing the same stereotyped person for 'a scientist.' Why — and what should you do?",
            options: [
              "It hates certain people; ignore it",
              "It's repeating biased patterns from its training data; notice the stereotype and push against it on purpose",
              "It's broken; stop using AI",
              "It's correct and you should accept it",
            ],
            correctIndex: 1,
            explanation: "AI absorbs human bias from its training data. It's not being mean on purpose — notice the stereotype and steer against it.",
            sourceLessonSlug: "deepfakes-consent-bias",
          },
          {
            prompt: "What is Content Credentials (from C2PA), and why does it matter for honest creators?",
            options: [
              "A way to hide that AI was used",
              "An open standard that attaches a tamper-evident record of where media came from and how it was edited — like a 'nutrition label' for content",
              "A tool that makes AI art for free",
              "A password manager",
            ],
            correctIndex: 1,
            explanation: "Content Credentials records provenance — where content came from and whether AI was involved — making honest labeling the easy default.",
            sourceLessonSlug: "be-honest-you-used-ai",
          },
        ],
      },
    },
  ],
};
