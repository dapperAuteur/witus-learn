// Authored "L2: Detecting AI (Deepfakes, Synthetic Media & Provenance)", the second
// rung of the AI literacy mastery ladder on Learn.WitUS (builds on F1, "AI Literacy:
// Use It Well & Wisely"). The throughline: "spot the artifact" tips age out fast, so the
// DURABLE skill is provenance + lateral reading: who made it, where did it come from,
// does an independent source corroborate it. Empowering and practical, NOT fearmongering;
// honest that no detector is reliable (benchmark scores collapse in the real world) and
// that the "liar's dividend" cuts both ways. Cited to primary, verified sources only:
// C2PA / Content Credentials (c2pa.org), Google DeepMind SynthID, the Partnership on AI
// Responsible Practices for Synthetic Media, WITNESS ("Prepare, Don't Panic"), the FBI/IC3
// generative-AI fraud PSA (I-120324), NIST (AI RMF; GenAI Deepfakes media-forensics
// challenge), and Stanford Civic Online Reasoning / Digital Inquiry Group (lateral reading).
// Distinct from the sibling "Spotting Misleading Marketing" course: THAT one is about
// ad/marketing deception (puffery, dark patterns, fake reviews, FTC/FDA/FCC rules); THIS
// one is about AI-generated/synthetic MEDIA and how to establish provenance. Exercises +
// a quiz whose every question links to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const AI_L2_DETECTING_AI_COURSE: AuthoredCourse = {
  title: "L2: Detecting AI (Deepfakes, Synthetic Media & Provenance)",
  description:
    "Synthetic media (AI-generated text, images, voice, and video) is now cheap, fast, and convincing. This course skips the 'count the fingers' tricks that stop working within months and teaches the durable skill instead: provenance and lateral reading. Learn how content credentials (C2PA) and watermarking (SynthID) work, and where they fall short; how to run reverse-image and metadata checks; how to shut down voice-clone and video-call scams with a callback; what the 'liar's dividend' is; and how newsrooms actually verify before they publish. Empowering and practical, honest that detection is imperfect, and cited to C2PA, Google DeepMind, the Partnership on AI, WITNESS, the FBI, NIST, and Stanford's media-literacy research. Builds on AI Literacy (F1).",
  lessons: [
    {
      slug: "what-is-synthetic-media",
      title: "1 · What synthetic media is",
      section: "The landscape",
      body: `**Synthetic media** is any content that AI generated or substantially altered: text, images, audio, or video. A **deepfake** is the subset where synthetic media is used to make a real person appear to say or do something they didn't. It now spans every format:

- **Text**: articles, reviews, "comments," emails, and entire fake personas, produced instantly and at scale.
- **Images**: photorealistic "photos" of events that never happened and people who don't exist.
- **Audio**: **voice clones** that mimic a specific person from just a few seconds of sample audio.
- **Video**: face-swaps, lip-syncs, and fully generated clips, including live, real-time deepfakes on a video call.

Two facts set the tone for this whole course.

**First: most synthetic media is harmless or useful**: dubbing a film into another language, a voice for someone who lost theirs, concept art, a first draft. The problem isn't that media is synthetic; it's when it's used to **deceive** without disclosure. The Partnership on AI's *Responsible Practices for Synthetic Media* (backed by Adobe, the BBC, OpenAI, TikTok, WITNESS, and others) draws exactly this line: synthetic media is fine, **undisclosed deceptive** synthetic media is the harm.

**Second: the tech is getting better, fast.** That means this course can't just hand you a checklist of glitches. It has to teach you a way of thinking that survives the next model. That way of thinking is **provenance** (establishing where something came from) and you'll build it lesson by lesson.

:::reveal What's the difference between "synthetic media" and a "deepfake," and where does the real harm begin? ||| Synthetic media is any AI-generated or AI-altered content (text, image, audio, or video); a deepfake is the subset used to make a real person appear to say or do something they never did. Not with synthetic media itself, which is often harmless or useful, but when it is used to deceive without disclosure.

## Sources
- Partnership on AI. (2023). Responsible Practices for Synthetic Media: A Framework for Collective Action. https://syntheticmedia.partnershiponai.org/
- WITNESS. Prepare, Don't Panic: Synthetic Media and Deepfakes. https://lab.witness.org/projects/synthetic-media-and-deep-fakes/`,
    },
    {
      slug: "why-spot-the-artifact-fails",
      recallContent: [
        { prompt: "What is a deepfake, as distinct from synthetic media in general?", answer: "Synthetic media is any AI-generated or AI-altered content (text, image, audio, or video); a deepfake is the subset used to make a real person appear to say or do something they never did." },
        { prompt: "Where does the real harm from synthetic media begin?", answer: "Not with synthetic media itself, which is often harmless or useful, but when it is used to deceive without disclosure." },
      ],
      title: "2 · Why \"spot the artifact\" tips age out fast",
      section: "The landscape",
      body: `You've seen the listicles: count the fingers, check the teeth, look for weird ears, watch for unnatural blinking, find the garbled text in the background. A year ago some of those worked. Today most don't, and next year fewer will.

Here's why chasing artifacts is a losing game:

- **Generators improve continuously.** Every visible "tell" is a bug the next model is trained to fix. Hands and teeth (the classic giveaways) are largely solved in current top image models. A tip tied to a specific flaw has an expiration date.
- **The tells were never reliable.** Real photos have weird lighting and odd hands too; some fakes never had the flaw. So artifact-spotting produces both false alarms and false confidence.
- **It scales against you.** You can study one image closely, but you scroll past hundreds. Manual artifact-hunting doesn't survive contact with a real feed.

This is also why **AI "detector" tools can't be trusted as a verdict.** NIST, the U.S. standards agency that runs media-forensics evaluations, finds the gap brutal: detectors that score above 95% on clean benchmark images routinely **fall toward 50% (coin-flip territory) on real content** from social media, messaging apps, and video calls, once it's been compressed, cropped, and re-uploaded. A confident "98% AI" or "98% real" badge from a website is not proof.

So if looking *at* the pixels doesn't work, what does? Looking *around* the media: at its origin and its corroboration. That's the rest of this course.

:::reveal Give two reasons "count the fingers" stops working, and why a detector tool's confidence score isn't proof. ||| Generators are trained to fix every visible tell, the tells were never fully reliable, and manual spotting does not scale to a fast real feed.

## Sources
- National Institute of Standards and Technology. GenAI: Deepfakes - Media Forensics Challenge. https://ai-challenges.nist.gov/forensics
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "quiz-the-landscape",
      title: "Section 1 knowledge check · The landscape",
      section: "The landscape",
      body: `A graded check on what synthetic media is, where the harm actually begins, and why a checklist of visual glitches expires. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What counts as synthetic media?",
            options: [
              "Any image or video edited after the moment it was captured",
              "AI-generated or AI-altered content",
              "Content produced without a human involved at any stage",
              "Media posted by an account that does not name a real person",
            ],
            correctIndex: 1,
            explanation:
              "Text, images, audio or video, generated or substantially altered by AI. The category is defined by how it was made, not by whether it deceives anyone.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "How does the lesson distinguish a deepfake from synthetic media in general?",
            options: [
              "It is produced by a model trained on one single individual",
              "It is synthetic media distributed without a disclosure label",
              "It impersonates a real person",
              "It is video, whereas synthetic media covers every format",
            ],
            correctIndex: 2,
            explanation:
              "A deepfake is the subset used to make a real person appear to say or do something they never did. Every deepfake is synthetic media; most synthetic media is not a deepfake.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "How much sample audio does the lesson say a voice clone needs?",
            options: [
              "A few seconds",
              "Roughly an hour of clean recorded speech",
              "Enough recordings to cover a full range of emotion",
              "Several minutes of continuous natural conversation",
            ],
            correctIndex: 0,
            explanation:
              "Which is why anyone who has posted a video with their voice in it is already a candidate. The barrier that used to protect people is gone.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "In which format does the lesson say fakes now run live and in real time?",
            options: [
              "Audio messages sent through a messaging app",
              "Images posted to a social feed as breaking news",
              "Text conversations held with an invented persona",
              "Video calls",
            ],
            correctIndex: 3,
            explanation:
              "Face-swaps and lip-syncs are no longer only a post-production job. A live call is no longer evidence that you are speaking to who you think you are.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "What is the first of the two facts that set the tone for this course?",
            options: [
              "Most synthetic media is harmless",
              "Detection tools are improving faster than generators are",
              "Most people can still spot a fake if they look closely enough",
              "The largest platforms now label every AI-generated post",
            ],
            correctIndex: 0,
            explanation:
              "Dubbing a film, a voice for someone who lost theirs, concept art, a first draft. Treating the whole category as a threat is both wrong and useless.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "Where does the Partnership on AI framework draw the line?",
            options: [
              "At any use of a real person's likeness without their consent",
              "At undisclosed deception",
              "At media generated by a model trained on copyrighted work",
              "At content made for commercial rather than artistic purposes",
            ],
            correctIndex: 1,
            explanation:
              "Synthetic media is fine; undisclosed deceptive synthetic media is the harm. The framework is backed by Adobe, the BBC, OpenAI, TikTok and WITNESS among others.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "Which does the lesson name as a benign use of synthetic media?",
            options: [
              "Producing customer reviews at scale for a product launch",
              "Generating a persona to test how an audience reacts to it",
              "Dubbing a film",
              "Recreating a public figure's voice for a news segment",
            ],
            correctIndex: 2,
            explanation:
              "Alongside a synthetic voice for someone who lost theirs, concept art and a first draft. None of these hides what it is from anybody.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "What is the second fact that sets the tone?",
            options: [
              "Regulation is arriving faster than the technology itself",
              "Most harmful content now comes from a handful of known tools",
              "Public awareness of deepfakes is falling year over year",
              "The technology improves fast",
            ],
            correctIndex: 3,
            explanation:
              "Fast enough that anything tied to what today's models get wrong is already on a timer. That constraint is what shapes the rest of the course.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "What does the pace of improvement mean for how this course is built?",
            options: [
              "No checklist of glitches",
              "It focuses on the tools that detect the newest models",
              "It updates its examples every time a new model ships",
              "It teaches the specific flaws of today's leading generators",
            ],
            correctIndex: 0,
            explanation:
              "A course of glitch-spotting tips would be out of date before a learner finished it. It has to teach a way of thinking that survives the next model.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "What is the way of thinking the course says survives the next model?",
            options: [
              "Forensic analysis of compression and lighting patterns",
              "Detector tools benchmarked against the newest releases",
              "A running list of the tells each generator still shows",
              "Provenance",
            ],
            correctIndex: 3,
            explanation:
              "Establishing where something came from. It works on a flawless fake because a flawless fake still has an origin.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "Why does the lesson say every visible tell has an expiration date?",
            options: [
              "Platforms remove the media before the tell spreads widely",
              "The next model is trained to fix it",
              "The people sharing the tips stop repeating them after a year",
              "Compression hides the flaw once the file has been re-uploaded",
            ],
            correctIndex: 1,
            explanation:
              "Every visible tell is a bug from the developers' point of view, and bugs get fixed. A tip tied to a specific flaw is a tip with a countdown on it.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "Which classic giveaways does the lesson say are largely solved in current top image models?",
            options: [
              "Hands and teeth",
              "Lighting that does not match the claimed location",
              "Backgrounds where written text comes out garbled",
              "Blinking patterns slower than a real person's",
            ],
            correctIndex: 0,
            explanation:
              "The two tells every listicle led with. Their disappearance is the clearest demonstration of why the listicle approach cannot hold.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "Why were artifact tells unreliable even back when they sometimes worked?",
            options: [
              "They appeared only in images, never in audio or in video",
              "They needed software most people did not have access to",
              "Real photos have them too",
              "They were introduced deliberately by the generating tool",
            ],
            correctIndex: 2,
            explanation:
              "Real photographs have odd lighting and awkward hands, and some fakes never had the flaw at all. So the method produced false alarms and false confidence together.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "What does the lesson mean when it says artifact-spotting scales against you?",
            options: [
              "Each check takes longer as the models keep improving",
              "The tells get smaller with every generation of model",
              "You scroll past hundreds",
              "The number of tells you have to remember grows every year",
            ],
            correctIndex: 2,
            explanation:
              "You can study one image closely. You cannot study a feed. A method that only works under careful inspection does not survive contact with normal use.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "What does NIST find happens to AI-detector accuracy on real-world content?",
            options: [
              "It stays high but reports many more false alarms",
              "It drops on video while holding steady on still images",
              "It becomes unusable only on content older than a year",
              "It falls toward a coin flip",
            ],
            correctIndex: 3,
            explanation:
              "Detectors scoring above 95% on clean benchmarks routinely fall toward 50% once content has been compressed, cropped and re-uploaded through real platforms.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "What makes benchmark images different from the content you actually encounter?",
            options: [
              "They are clean",
              "They come from a wider range of generating tools",
              "They are labeled by experts rather than by an algorithm",
              "They hold a fixed proportion of real and fake items",
            ],
            correctIndex: 0,
            explanation:
              "Real content arrives compressed, cropped and re-uploaded through social platforms, messaging apps and video calls, which is exactly what the detectors struggle with.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "A website badge reads \"98% AI\". What does the lesson say that is?",
            options: [
              "A reliable verdict whenever the score is above ninety percent",
              "A measure of how much of the image was machine generated",
              "Not proof",
              "An estimate that improves each time the tool is retrained",
            ],
            correctIndex: 2,
            explanation:
              "The confidence figure describes the tool's own certainty, not the truth. On messy real content that certainty has been measured near chance.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "Which body runs the media-forensics evaluations the lesson cites?",
            options: [
              "The Federal Trade Commission, through its fraud division",
              "The Partnership on AI, through its synthetic media program",
              "The Coalition for Content Provenance and Authenticity",
              "NIST",
            ],
            correctIndex: 3,
            explanation:
              "The US standards agency, through its GenAI deepfakes media forensics challenge. Its measurements are why the detector caveat in this course is a fact rather than an opinion.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "If looking at the pixels does not work, what does the lesson say to look at?",
            options: [
              "Origin and corroboration",
              "The account's posting history and its follower growth",
              "The compression signature the file carries from its source",
              "The captions attached to it on every platform it reached",
            ],
            correctIndex: 0,
            explanation:
              "Looking around the media rather than at it. Where it came from and who else independently reports it are questions a better generator cannot answer away.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
        ],
      },
    },
    {
      slug: "provenance-and-lateral-reading",
      recallContent: [
        { prompt: "Why do 'count the fingers' style tips stop working?", answer: "Generators are trained to fix every visible tell, the tells were never fully reliable, and manual spotting does not scale to a fast real feed." },
        { prompt: "What happens to AI-detector accuracy on messy real-world content, per NIST?", answer: "Detectors that score above 95% on clean benchmarks can fall toward 50% (coin-flip territory) on compressed, re-uploaded real content, so a confidence badge is not proof." },
      ],
      title: "3 · The durable skill: provenance + lateral reading",
      section: "The durable skill",
      body: `If you remember one lesson from this course, make it this one. The skill that doesn't age out is asking three questions **about the content's origin**, not its pixels:

1. **Who made it?** Is there a named, accountable source (a person or outlet that stakes their reputation on it), or did it surface from an anonymous account?
2. **Where did it come from?** Trace it to the *earliest* version you can find. Memes and clips get re-cropped, re-captioned, and stripped of context as they spread.
3. **Who else confirms it?** Does an **independent, reputable source** report the same thing? One source (especially one you can't identify) is not corroboration.

The fact-checker's name for step 3 is **lateral reading**: instead of staying *on* a suspicious page and judging it by how slick it looks ("vertical" reading), you **open new tabs** and see what *trusted others* say about the source and the claim. Stanford's Civic Online Reasoning research found that professional fact-checkers do this reflexively, and that it beats the careful-reading habits most people are taught.

Why this is durable: it doesn't depend on any flaw in the media. **A perfect, artifact-free deepfake still has to come from somewhere and still fails to be corroborated by independent reporting.** Provenance and lateral reading work no matter how good the generator gets, which is exactly why newsrooms rely on them.

:::reveal Name the three provenance questions, and explain why lateral reading still works on a *flawless* fake. ||| Who made it (a named, accountable source)? Where did it come from (the earliest version)? Who else independently confirms it? Leaving the suspect page to open new tabs and check what trusted sources say about the source and claim; it works because even a perfect fake still has an origin and still lacks independent corroboration.

## Sources
- Stanford Civic Online Reasoning / Digital Inquiry Group. Lateral Reading vs. Vertical Reading. https://cor.inquirygroup.org/curriculum/lessons/lateral-vs-vertical-reading/
- Stanford Civic Online Reasoning. https://cor.stanford.edu/`,
    },
    {
      slug: "content-credentials-c2pa",
      recallContent: [
        { prompt: "What are the three provenance questions that make up the durable skill?", answer: "Who made it (a named, accountable source)? Where did it come from (the earliest version)? Who else independently confirms it?" },
        { prompt: "What is lateral reading, and why does it work even on a flawless fake?", answer: "Leaving the suspect page to open new tabs and check what trusted sources say about the source and claim; it works because even a perfect fake still has an origin and still lacks independent corroboration." },
      ],
      title: "4 · Content Credentials & watermarking (and their limits)",
      section: "The durable skill",
      body: `Two technologies try to attach provenance *to the file itself* so you don't have to reconstruct it by hand. Both are genuinely useful, and both have real limits you must understand to use them honestly.

**Content Credentials (C2PA).** The Coalition for Content Provenance and Authenticity, or C2PA (Adobe, Microsoft, the BBC, camera makers, and others), created an **open standard** that attaches a tamper-evident record to a piece of media: who/what created it, whether AI was involved, and what edits were made. C2PA describes it like a **"nutrition label" for digital content.** When you see the **"CR" Content Credentials marker**, you can inspect that history.

> **Limits (be honest):** credentials only help when (a) the tool that made the media *added* them, (b) they **survive** the trip (a screenshot, a re-upload, or a platform that strips metadata can erase them), and (c) the platform you're viewing on actually *displays* them. **Absence of a credential proves nothing**: most media today carries none. Credentials are a positive signal when present, not a test you can fail.

**Watermarking (e.g., SynthID).** Google DeepMind's **SynthID** embeds an *imperceptible* watermark directly into AI-generated images, audio, video, and text, so the content can later be identified as AI-made. It's designed to **survive common modifications** like cropping, filters, compression, or added noise.

> **Limits (be honest):** "designed to survive" is not "impossible to remove": heavy editing or deliberate attacks can degrade or strip a watermark, and SynthID only flags content from tools that *use* SynthID. Its public detector is still being rolled out and tested. So a negative result doesn't mean "real," and watermarking is one industry's tool, not a universal stamp.

The honest takeaway: **content credentials and watermarks are provenance you can sometimes read off the file: a strong signal when you find one, never a verdict when you don't.** They complement the who/where/corroborate habit; they don't replace it.

:::reveal Why does the *absence* of a Content Credential or SynthID watermark NOT prove a piece of media is real? ||| C2PA Content Credentials are an open-standard, tamper-evident 'nutrition label' attached to a file; SynthID is Google DeepMind's imperceptible watermark embedded in AI-generated content. Most media carries none, and a screenshot, re-upload, or metadata-stripping platform can erase them, so they are a positive signal when present, never a test you fail.

## Sources
- Coalition for Content Provenance and Authenticity (C2PA). Content Credentials. https://c2pa.org/
- Google DeepMind. SynthID. https://deepmind.google/technologies/synthid/`,
    },
    {
      slug: "quiz-the-durable-skill",
      title: "Section 2 knowledge check · The durable skill",
      section: "The durable skill",
      body: `A graded check on the three provenance questions, on lateral reading, and on what Content Credentials and watermarks can and cannot tell you. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What do the three durable questions ask about?",
            options: [
              "The visual quality of the file as it was delivered to you",
              "The content's origin",
              "The reputation of the platform it was published on",
              "The emotional reaction the content is designed to produce",
            ],
            correctIndex: 1,
            explanation:
              "Who made it, where did it come from, who else confirms it. Not one of them looks at the media itself, which is exactly why they do not age out.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "What makes a source accountable, in this lesson's terms?",
            options: [
              "They publish on a platform that verifies real identities",
              "They have posted reliably on the same subject before",
              "They hold credentials in the field they are reporting on",
              "They stake their reputation on it",
            ],
            correctIndex: 3,
            explanation:
              "A named person or outlet with something to lose if it turns out false. An anonymous account carries no such cost and therefore no such signal.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "Why does the second question ask for the earliest version you can find?",
            options: [
              "Later copies lose their context",
              "Earlier copies are the ones detectors were trained against",
              "The original is always posted by an identifiable account",
              "Search engines rank an original above the copies of it",
            ],
            correctIndex: 0,
            explanation:
              "Clips get re-cropped, re-captioned and stripped as they spread. The version that reached you may be several removes from what actually happened.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "What does the lesson say about a single source?",
            options: [
              "It is enough when the outlet reporting it is a reputable one",
              "It is not corroboration",
              "It is sufficient as long as the account can be identified",
              "It counts as partial confirmation pending a second source",
            ],
            correctIndex: 1,
            explanation:
              "Especially one you cannot identify. Corroboration means an independent source arriving at the same thing, not the same claim seen twice.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "What is lateral reading?",
            options: [
              "Reading a claim alongside the strongest argument against it",
              "Comparing several versions of the same clip side by side",
              "Opening new tabs about the source",
              "Reading a page's sources before you read the page itself",
            ],
            correctIndex: 2,
            explanation:
              "You leave the suspicious page and find out what trusted others say about it and about its claim. The judgment happens somewhere other than the page being judged.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "What does the lesson call the habit that lateral reading replaces?",
            options: [
              "Close reading, judging the argument on its internal logic",
              "Vertical reading",
              "Skim reading, forming a view from the headline alone",
              "Source reading, following each citation back to its origin",
            ],
            correctIndex: 1,
            explanation:
              "Staying on the page and reading down it. It is the habit most people were taught, and on the open web it is the weaker one.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "What mistake does vertical reading make?",
            options: [
              "Trusting whichever result a search engine returns first",
              "Believing the version of a claim that was published earliest",
              "Accepting a claim because a great many accounts repeat it",
              "Judging a page by how slick it looks",
            ],
            correctIndex: 3,
            explanation:
              "Design quality is cheap and says nothing about accuracy. Judging a page from inside it means judging it on the one thing its author fully controls.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "What did Stanford's Civic Online Reasoning research find about professional fact-checkers?",
            options: [
              "They read laterally by reflex",
              "They rely on detection tools before forming any judgment",
              "They spend longer than most people on each individual page",
              "They check an image's visual consistency before anything else",
            ],
            correctIndex: 0,
            explanation:
              "It is the first thing they do rather than a last resort, and the research found it beats the careful-reading habits most people are taught instead.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "Why does the durable skill still work on a flawless, artifact-free deepfake?",
            options: [
              "A flawless fake takes longer to make and so spreads slower",
              "Perfect renders leave a distinctive statistical signature",
              "The tools capable of it are few enough to be identified",
              "It still has to come from somewhere",
            ],
            correctIndex: 3,
            explanation:
              "And it still fails to be corroborated by independent reporting. Neither of those depends on the render being imperfect, which is the whole point.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "Which question does a fact-checker call lateral reading?",
            options: [
              "Who else confirms it",
              "Who made it, and can that person be held to account",
              "Where did it first appear, and how long ago was that",
              "What is this content trying to make me feel about it",
            ],
            correctIndex: 0,
            explanation:
              "The third of the three. Steps one and two trace the origin; step three is where you leave the page to check the claim against independent reporting.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "What does C2PA attach to a piece of media?",
            options: [
              "A cryptographic key that prevents any further editing",
              "A tamper-evident record",
              "A score estimating the likelihood it was AI generated",
              "A link to the account that first published the file",
            ],
            correctIndex: 1,
            explanation:
              "Tamper-evident means alteration shows. It does not mean alteration is impossible, which is a different and much stronger claim nobody is making.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What does C2PA call its own format?",
            options: [
              "A chain of custody, borrowed from evidence handling",
              "A birth certificate for a piece of digital content",
              "A nutrition label",
              "A passport, stamped at each platform it passes through",
            ],
            correctIndex: 2,
            explanation:
              "A nutrition label for digital content. The analogy is exact in the useful way: it tells you what went in, and it is only there if somebody put it there.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What does a Content Credential record?",
            options: [
              "Every account that has downloaded or reshared the file",
              "The rights held by the person who published the media",
              "How closely the file matches known generated content",
              "Who made it and what edits followed",
            ],
            correctIndex: 3,
            explanation:
              "Who or what created it, whether AI was involved, and the edit history since. That last part is why it is a record rather than a stamp.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "Which marker tells you Content Credentials are present?",
            options: [
              "CR",
              "A padlock icon shown beside the file's name",
              "A watermark visible in the corner of the image",
              "A verified badge attached to the posting account",
            ],
            correctIndex: 0,
            explanation:
              "Seeing it means there is a history you can inspect. Not seeing it means only that this platform is not showing you one.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "Which is one of the three conditions a Content Credential depends on?",
            options: [
              "The file has not been compressed since it was created",
              "The viewer has installed a tool that reads the standard",
              "The platform displays it",
              "The publisher registered with the coalition beforehand",
            ],
            correctIndex: 2,
            explanation:
              "Along with the creating tool having added it, and its surviving the trip. Three conditions is three chances for a genuine file to arrive with nothing attached.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What does the absence of a Content Credential prove?",
            options: [
              "That the file has passed through at least one platform",
              "Nothing",
              "That the tool which created it did not support the standard",
              "That the media was probably generated rather than captured",
            ],
            correctIndex: 1,
            explanation:
              "Most media today carries none at all. Credentials are a positive signal when present, never a test that a file can be said to have failed.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "Why can a credential vanish from a completely genuine file?",
            options: [
              "A screenshot or re-upload strips it",
              "Credentials expire a fixed period after they are issued",
              "The standard holds only on the platform that issued it",
              "Editing tools replace the record with one of their own",
            ],
            correctIndex: 0,
            explanation:
              "Plenty of platforms strip metadata on upload as a matter of course. The credential's disappearance says something about the pipeline, not the content.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What is SynthID?",
            options: [
              "A public database of content known to be AI generated",
              "A detector that scores an image for signs of generation",
              "An imperceptible watermark",
              "A standard governing how AI tools must label their output",
            ],
            correctIndex: 2,
            explanation:
              "Google DeepMind embeds it directly into generated images, audio, video and text, so the content can be identified as AI-made later on.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What is SynthID designed to survive?",
            options: [
              "A deliberate attempt to remove it from the file",
              "Conversion between entirely different media formats",
              "Being regenerated by a second AI model",
              "Cropping and compression",
            ],
            correctIndex: 3,
            explanation:
              "Along with filters and added noise. Designed to survive common modifications is a real property and is not the same as impossible to remove.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What does a negative SynthID result mean?",
            options: [
              "Not that the content is real",
              "That the file has been through more than one platform",
              "That the detector could not read the file's format",
              "That the media was captured by a camera rather than generated",
            ],
            correctIndex: 0,
            explanation:
              "SynthID only flags content from tools that use SynthID, and its public detector is still being rolled out. A negative is an absence of evidence.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What is the honest takeaway on credentials and watermarks together?",
            options: [
              "A reliable test once both are more widely adopted",
              "The most accurate check available for images and audio",
              "A signal when found, never a verdict",
              "A replacement for tracing origin whenever a marker is present",
            ],
            correctIndex: 2,
            explanation:
              "They are provenance you can sometimes read straight off the file. They complement the who, where and corroborate habit rather than replacing it.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
        ],
      },
    },
    {
      slug: "reverse-image-and-metadata",
      recallContent: [
        { prompt: "What are Content Credentials (C2PA) and SynthID?", answer: "C2PA Content Credentials are an open-standard, tamper-evident 'nutrition label' attached to a file; SynthID is Google DeepMind's imperceptible watermark embedded in AI-generated content." },
        { prompt: "Why does the absence of a credential or watermark not prove media is real?", answer: "Most media carries none, and a screenshot, re-upload, or metadata-stripping platform can erase them, so they are a positive signal when present, never a test you fail." },
      ],
      title: "5 · Reverse-image search & metadata checks",
      section: "Hands-on checks",
      body: `Provenance gets practical here. Two concrete moves let you trace a piece of media toward its origin.

**Reverse-image search.** Drop a suspect image (or a screenshot of a key video frame) into a reverse-image search to find **where else it has appeared and when**. This routinely cracks the most common deception, which is *not* a fancy deepfake but a **real old photo reused with a false caption**. If a "breaking news" photo turns out to be from a different country three years ago, you're done; you never needed to analyze a single pixel. Search a few frames of a video, not just one, since one frame can be misleading.

**Metadata: useful, but treat it as a clue, not proof.** A file can carry metadata (EXIF: camera, date, sometimes location; or a C2PA record from Lesson 4). When present and intact it can corroborate or contradict a story. **But metadata is fragile and forgeable:** most social platforms *strip* it on upload, editing tools rewrite it, and timestamps can be faked. So:

- **Metadata that's present can be a clue** (e.g., a C2PA edit history, or an EXIF date that contradicts the caption).
- **Missing metadata means nothing**: it usually just means the platform removed it.
- **Never treat metadata as a verdict on its own;** corroborate it with lateral reading.

The mindset: these tools help you **find the original and check the timeline** (which is provenance work, the durable skill), not magic "is-it-fake" detectors.

:::reveal What everyday deception does reverse-image search catch *without* any AI analysis, and why is missing metadata not evidence of a fake? ||| A real, old photo reused with a false caption; the search reveals where and when the image actually appeared before.

## Sources
- WITNESS Media Lab. OSINT Digital Forensics (verifying media). https://lab.witness.org/projects/osint-digital-forensics/
- Stanford Civic Online Reasoning / Digital Inquiry Group. https://cor.inquirygroup.org/`,
    },
    {
      slug: "voice-clone-and-video-scams",
      recallContent: [
        { prompt: "What everyday deception does a reverse-image search catch with no AI analysis?", answer: "A real, old photo reused with a false caption; the search reveals where and when the image actually appeared before." },
        { prompt: "How should you treat file metadata such as EXIF?", answer: "As a clue when present and intact, never as a verdict: it is fragile and forgeable, and missing metadata usually just means the platform stripped it." },
      ],
      title: "6 · Voice-clone & video-call scams: verify by callback",
      section: "Hands-on checks",
      body: `This is the synthetic-media threat most likely to hit you or someone you love directly, and the one with the cleanest defense.

**The scam.** Criminals clone a voice from a few seconds of audio scraped off social media, then call a parent or grandparent posing as a relative in crisis (a car accident, an arrest, a kidnapping), demanding money *right now*, in secret, by wire or gift cards. The same trick scales to video calls and to **business fraud**: an employee gets a call or video meeting from a "boss" or "vendor" authorizing an urgent payment. The FBI's Internet Crime Complaint Center (IC3) issued a public alert (I-120324) that criminals use generative AI (AI-generated text, images, **and cloned audio**) specifically to make these schemes more believable and harder to catch.

**Why your "I'd know their voice" instinct fails:** the whole point of a voice clone is that it *does* sound like them. Recognition is not verification anymore.

**The defense is procedural, and it's nearly foolproof:**

- **Hang up and call back** on a number you *already have*, never one the caller gives you. A clone can't answer the real person's actual phone.
- **Agree on a family code word** in advance: a word or phrase that's never appeared online and isn't guessable from social media (not a pet's name or street). In a real emergency, the real person can say it; a scammer can't.
- **Slow the urgency.** Manufactured panic and secrecy ("don't tell anyone") exist to stop you from making that callback. Real emergencies survive a two-minute verification.
- **For payments at work,** require **out-of-band confirmation** (a separate, known channel) before any urgent transfer, no matter how convincing the voice or face on the call.

:::reveal A caller has your relative's exact voice and says it's an emergency. What two steps verify it, and why doesn't recognizing the voice count? ||| Hang up and call back on a number you already have, and use a pre-agreed family code word; slow the manufactured urgency instead of paying right away.

## Sources
- FBI Internet Crime Complaint Center. (2024). Criminals Use Generative Artificial Intelligence to Facilitate Financial Fraud (Alert I-120324). https://www.ic3.gov/PSA/2024/PSA241203
- Federal Bureau of Investigation. Internet Crime Complaint Center. https://www.ic3.gov/`,
    },
    {
      slug: "the-liars-dividend",
      recallContent: [
        { prompt: "Why is 'I would recognize their voice' no longer a safe test?", answer: "A voice clone is built to sound exactly like the person, so recognition is not verification; the FBI (IC3 alert I-120324) warns criminals use cloned audio to commit fraud." },
        { prompt: "What two steps defend against a voice-clone emergency call?", answer: "Hang up and call back on a number you already have, and use a pre-agreed family code word; slow the manufactured urgency instead of paying right away." },
      ],
      title: "7 · The liar's dividend: real things called fake",
      section: "The two-sided problem",
      body: `So far the threat has been **fakes passed off as real**. But synthetic media creates a second, sneakier problem that runs the other direction, and it's the one most people miss.

The **liar's dividend** is this: once everyone knows deepfakes exist, a person caught on **real, genuine** video or audio can simply claim it's fake. The mere *possibility* of fakery hands the dishonest a built-in excuse, and it gets stronger the more people fear deepfakes. Researchers and groups like WITNESS warn this may be the **larger long-term danger**: not that we'll believe fakes, but that we'll **disbelieve the truth**, eroding shared reality so nothing can be trusted.

This is exactly why fearmongering backfires, and why this course refuses it. If your only message is "anything could be fake," you've *handed out* the liar's dividend: you've trained people to dismiss authentic evidence too. Reflexive cynicism is not the goal. **Calibrated** trust is:

- **Skepticism without nihilism.** "I'm not sure yet" is a verification step, not a verdict. The answer to "could be fake" is to *check provenance*, not to shrug.
- **"Fake" needs evidence too.** Dismissing real footage as fake is a claim that requires support, exactly like calling something real does. Don't let "it's probably a deepfake" be a free pass.
- **Corroboration cuts both ways.** Multiple independent sources, content credentials, and original-source tracing can *confirm* something is genuine, not just expose fakes.

The durable skill protects you from **both** errors: believing a convincing fake, and disbelieving an inconvenient truth.

:::reveal What is the "liar's dividend," and why does shouting "anything could be fake" actually make it worse? ||| Because deepfakes are known to exist, a person caught on real, genuine video or audio can dismiss it as fake, using the mere possibility of fakery as a built-in excuse. It hands out the liar's dividend by training people to dismiss authentic evidence; the goal is calibrated trust and checking provenance, not reflexive cynicism.

## Sources
- WITNESS. Prepare, Don't Panic: Synthetic Media and Deepfakes. https://lab.witness.org/projects/synthetic-media-and-deep-fakes/
- Partnership on AI. (2023). Responsible Practices for Synthetic Media. https://syntheticmedia.partnershiponai.org/`,
    },
    {
      slug: "how-newsrooms-verify",
      recallContent: [
        { prompt: "What is the liar's dividend?", answer: "Because deepfakes are known to exist, a person caught on real, genuine video or audio can dismiss it as fake, using the mere possibility of fakery as a built-in excuse." },
        { prompt: "Why does shouting 'anything could be fake' backfire?", answer: "It hands out the liar's dividend by training people to dismiss authentic evidence; the goal is calibrated trust and checking provenance, not reflexive cynicism." },
      ],
      title: "8 · How newsrooms and fact-checkers verify",
      section: "The two-sided problem",
      body: `You don't have to invent a method: professional verification desks (at major newsrooms, and human-rights groups like WITNESS) have refined one over years of checking viral media. It's the durable skill, formalized. Borrow their workflow:

1. **Find the original / earliest version.** Reverse-image-search frames; search keywords and dates; trace the post upstream. The earliest copy usually carries the real context that later re-posts stripped away.
2. **Identify and contact the source.** Who first posted it, and can they be reached? An uploader who won't or can't be identified is a major red flag.
3. **Read laterally for corroboration.** Are *independent, reputable* outlets reporting the same event? Verification desks trust a chain of sources, not one viral clip.
4. **Check internal consistency against the world.** Do the weather, shadows, signage, license plates, language, and landmarks match the claimed time and place? (This is *cross-checking against reality*, not artifact-hunting: it works even on a flawless render.)
5. **Use tools as inputs, hold judgment.** Content Credentials, watermark detectors, metadata, and AI-detector scores are **evidence to weigh, never the final word**: remember detectors collapse on real-world content (Lesson 2).
6. **When you can't confirm, say so, and don't amplify.** "Unverified" is an honest, publishable state. The professional default is **do not spread what you can't stand behind.**

Notice every step is **provenance and corroboration** (origin, source, independent confirmation), not "spot the glitch." That's why the method outlasts each new generation of models.

:::reveal Name three steps a newsroom takes to verify a viral video, and explain why "we couldn't confirm it" is a responsible outcome. ||| Find the earliest or original version, identify and contact the source, and read laterally for independent corroboration (then check internal consistency against the real world).

## Sources
- WITNESS Media Lab. OSINT Digital Forensics. https://lab.witness.org/projects/osint-digital-forensics/
- Stanford Civic Online Reasoning / Digital Inquiry Group. Teaching Lateral Reading. https://cor.inquirygroup.org/curriculum/collections/teaching-lateral-reading/`,
    },
    {
      slug: "before-you-share",
      recallContent: [
        { prompt: "Name three steps in a newsroom's verification workflow.", answer: "Find the earliest or original version, identify and contact the source, and read laterally for independent corroboration (then check internal consistency against the real world)." },
        { prompt: "What is the responsible action when a clip cannot be confirmed?", answer: "Label it unverified and do not amplify it; the professional default is not to spread what you cannot stand behind." },
      ],
      title: "9 · Before you share: your 30-second checklist",
      section: "Putting it together",
      body: `Most misinformation spreads because real people **reshare faster than they verify**, especially content that makes them angry, scared, or triumphant. Strong emotion is the carrier. So the single highest-impact habit in this whole course is also the simplest: **pause before you share.**

A 30-second gut-check, drawn from everything above:

1. **What is this trying to make me feel, and do?** Outrage, fear, and "you have to see this" are engineered to bypass your judgment. A strong reaction is your cue to *slow down*, not to hit share.
2. **Who made it, and where did it come from?** Named, accountable source? Can you find the original (reverse-image-search a frame)?
3. **Who else (independently) confirms it?** Lateral-read. If only the original account has it, treat it as unverified.
4. **Any provenance signals?** A Content Credential or watermark is a plus when present; their absence is *not* a strike.
5. **If you can't verify it, don't share it.** "I'm not sure this is real" is reason enough to hold. And avoid the **liar's-dividend trap** in reverse: don't declare something fake without checking either.

That's it. You will not catch every fake: **nobody can, and no tool can; detection is genuinely imperfect.** But you don't need perfection. By trading "spot the pixel flaw" for **provenance, lateral reading, and a callback for anything urgent**, you become dramatically harder to fool *and* you stop being a vector that fools others. That's the empowering truth this course is built on: you can't control what gets generated, but you fully control whether you verify before you believe, and before you share.

:::reveal What's the single most effective habit against misinformation, and what should you do when you genuinely can't tell if something is real? ||| The single most effective habit is to verify before you believe or share, check provenance and read laterally, especially for anything urgent. When you genuinely can't tell, don't share it: "I'm not sure this is real" is reason enough to hold (and don't declare it fake without checking either).

## Sources
- News Literacy Project. RumorGuard (tips before you share). https://www.rumorguard.org/
- WITNESS. Prepare, Don't Panic: Synthetic Media and Deepfakes. https://lab.witness.org/projects/synthetic-media-and-deep-fakes/`,
    },
    {
      slug: "practice-provenance",
      title: "10 · Practice: provenance over pixels",
      section: "Putting it together",
      exercise: {
        instructions:
          "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "The durable skill of establishing where a piece of media came from (who made it and how it got to you) is called ___.",
            answer: "provenance",
            explanation: "Provenance survives every new model because it doesn't depend on a flaw in the media.",
          },
          {
            prompt:
              "Opening new tabs to see what independent, trusted sources say about a claim (instead of staying on the suspect page) is called ___ reading.",
            answer: "lateral",
            explanation: "Stanford's Civic Online Reasoning found professional fact-checkers do this reflexively.",
          },
          {
            prompt:
              "Tips like \"count the fingers\" stop working because generators are trained to fix every visible ___.",
            answer: "artifact",
            accept: ["tell", "flaw", "glitch", "tells", "flaws", "artifacts"],
            explanation: "Each fixed tell expires the listicle that relied on it. Chase the origin, not the pixels.",
          },
          {
            prompt:
              "To find where an image really came from (often catching a real OLD photo with a false caption), do a reverse-___ search.",
            answer: "image",
            explanation: "The most common deception isn't a deepfake: it's a genuine photo reused out of context.",
          },
          {
            prompt:
              "If a caller has your relative's exact voice and demands urgent money, hang up and ___ them on a number you already have.",
            answer: "call back",
            accept: ["callback", "call", "call-back"],
            explanation: "A voice clone can't answer the real person's actual phone. The FBI recommends callback + a family code word.",
          },
        ],
      },
    },
    {
      slug: "practice-tools-and-traps",
      title: "11 · Practice: tools, limits, and the liar's dividend",
      section: "Putting it together",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          {
            prompt:
              "The open standard that attaches a tamper-evident 'nutrition label' (who made it, was AI used, what edits) to media is Content ___ (C2PA).",
            answer: "Credentials",
            explanation: "C2PA Content Credentials are a strong signal when present, but a screenshot or metadata-stripping upload can erase them.",
          },
          {
            prompt:
              "Google DeepMind's imperceptible watermark embedded in AI-generated images, audio, video, and text is called ___.",
            answer: "SynthID",
            accept: ["synth id", "synth-id"],
            explanation: "SynthID resists common edits but isn't impossible to remove, and only flags content from tools that use it.",
          },
          {
            prompt:
              "True or false: if media has NO content credential or watermark, that proves it's real.",
            answer: "false",
            explanation: "Most media carries no provenance signal at all. Absence proves nothing. Corroborate instead.",
          },
          {
            prompt:
              "When a person caught on REAL video dismisses it as a deepfake, they're exploiting the liar's ___.",
            answer: "dividend",
            explanation: "The mere existence of fakes gives liars an excuse to deny authentic evidence.",
          },
          {
            prompt:
              "NIST finds AI-detector tools that score ~95% on clean benchmarks can drop toward ___% on messy real-world content (write the number).",
            answer: "50",
            accept: ["50%", "fifty"],
            explanation: "Coin-flip territory, which is why a detector's confidence score is never proof on its own.",
          },
        ],
      },
    },
    {
      slug: "ai-l2-detecting-ai-quiz",
      title: "12 · Check your understanding",
      section: "Putting it together",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where does the real harm from synthetic media begin?",
            options: [
              "Whenever AI is used to make any media",
              "When it's used to deceive without disclosure",
              "Only in video, not text or audio",
              "Only when a celebrity is involved",
            ],
            correctIndex: 1,
            explanation:
              "Most synthetic media is harmless or useful; the harm is undisclosed, deceptive use, the line the Partnership on AI framework draws.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "Why do \"count the fingers / check the teeth\" tips stop working?",
            options: [
              "They were always a hoax right from the very beginning",
              "Generators are trained to fix each visible tell, so tips expire",
              "Only properly trained experts could ever see those flaws",
              "Cameras themselves simply got a great deal better than before",
            ],
            correctIndex: 1,
            explanation:
              "Every artifact is a bug the next model fixes; the tells were never reliable and don't scale to a real feed.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "An AI-detector website rates an image \"98% real.\" How much should that settle it?",
            options: [
              "It is outright proof that the image is real",
              "Not much; NIST finds detectors fall toward 50 percent",
              "It is proof only if the score is above 95 percent",
              "It depends entirely on the size of the file",
            ],
            correctIndex: 1,
            explanation:
              "Detector scores collapse from >95% on clean benchmarks toward coin-flip on compressed, re-uploaded real content. The score is an input, not a verdict.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "What is the durable skill that survives better AI models?",
            options: [
              "Memorizing an ever longer list of the visual artifacts",
              "Provenance and lateral reading: who made it and who confirms it",
              "Trusting whichever detector happens to give the highest score",
              "Only ever believing video footage, and never any photographs",
            ],
            correctIndex: 1,
            explanation:
              "A flawless fake still has an origin and still lacks independent corroboration, so provenance and lateral reading keep working.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "Why does the ABSENCE of a Content Credential (C2PA) or SynthID watermark NOT prove media is real?",
            options: [
              "Content credentials are always fake anyway",
              "Most media carries none, and uploads can strip them out",
              "Only video files are able to carry credentials",
              "It does prove it, since no credential means real",
            ],
            correctIndex: 1,
            explanation:
              "Credentials and watermarks are a positive signal when present, never a verdict when missing. Corroborate instead.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What everyday deception does a reverse-image search catch with no AI analysis at all?",
            options: [
              "A completely perfect deepfake video of someone",
              "A real but old photo reused with a false caption",
              "A cloned voice used during a phone call",
              "A watermark removed from a photograph",
            ],
            correctIndex: 1,
            explanation:
              "The most common deception is genuine media reused out of context. Reverse search finds where and when it really appeared.",
            sourceLessonSlug: "reverse-image-and-metadata",
          },
          {
            prompt: "A caller has your relative's exact voice and demands urgent money. What's the right move?",
            options: [
              "Trust it, because you recognized the voice",
              "Hang up and call back on a number you already have",
              "Send a small amount of money to be safe",
              "Stay on the line and ask them security questions",
            ],
            correctIndex: 1,
            explanation:
              "A voice clone sounds exactly like them, so recognition isn't verification. The FBI (alert I-120324) recommends callback on a known number plus a pre-agreed code word.",
            sourceLessonSlug: "voice-clone-and-video-scams",
          },
          {
            prompt: "What is the \"liar's dividend\"?",
            options: [
              "Money made from selling deepfake videos to people",
              "A person dismissing real footage as fake because fakes exist",
              "A discount offered on some detection software",
              "The profit made from running undisclosed AI ads",
            ],
            correctIndex: 1,
            explanation:
              "Once fakes are common, the dishonest can deny authentic evidence, which is why shouting 'anything could be fake' backfires.",
            sourceLessonSlug: "the-liars-dividend",
          },
          {
            prompt: "When a newsroom can't confirm a viral clip, the responsible action is to…",
            options: [
              "Publish it anyway with a question mark",
              "Label it unverified and not amplify it",
              "Declare it fake",
              "Wait for a detector tool to decide",
            ],
            correctIndex: 1,
            explanation:
              "\"Unverified\" is an honest state; the professional default is not to spread what you can't stand behind.",
            sourceLessonSlug: "how-newsrooms-verify",
          },
          {
            prompt: "What's the single most effective habit against misinformation?",
            options: [
              "Run every single image you see through a detector",
              "Pause before sharing; verify provenance and confirm it first",
              "Assume that absolutely everything you see is fake",
              "Only ever follow the accounts that are verified",
            ],
            correctIndex: 1,
            explanation:
              "Most misinformation spreads because people reshare emotionally charged content faster than they verify. Slowing down to check the origin breaks the chain.",
            sourceLessonSlug: "before-you-share",
          },
        ],
      },
    },
  ],
};
