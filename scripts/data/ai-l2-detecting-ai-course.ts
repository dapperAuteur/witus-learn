// Authored "L2: Detecting AI — Deepfakes, Synthetic Media & Provenance" — the second
// rung of the AI literacy mastery ladder on Learn.WitUS (builds on F1, "AI Literacy:
// Use It Well & Wisely"). The throughline: "spot the artifact" tips age out fast, so the
// DURABLE skill is provenance + lateral reading — who made it, where did it come from,
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
  title: "L2: Detecting AI — Deepfakes, Synthetic Media & Provenance",
  description:
    "Synthetic media — AI-generated text, images, voice, and video — is now cheap, fast, and convincing. This course skips the 'count the fingers' tricks that stop working within months and teaches the durable skill instead: provenance and lateral reading. Learn how content credentials (C2PA) and watermarking (SynthID) work — and where they fall short; how to run reverse-image and metadata checks; how to shut down voice-clone and video-call scams with a callback; what the 'liar's dividend' is; and how newsrooms actually verify before they publish. Empowering and practical, honest that detection is imperfect, and cited to C2PA, Google DeepMind, the Partnership on AI, WITNESS, the FBI, NIST, and Stanford's media-literacy research. Builds on AI Literacy (F1).",
  lessons: [
    {
      slug: "what-is-synthetic-media",
      title: "1 · What synthetic media is",
      section: "The landscape",
      body: `**Synthetic media** is any content that AI generated or substantially altered — text, images, audio, or video. A **deepfake** is the subset where synthetic media is used to make a real person appear to say or do something they didn't. It now spans every format:

- **Text** — articles, reviews, "comments," emails, and entire fake personas, produced instantly and at scale.
- **Images** — photorealistic "photos" of events that never happened and people who don't exist.
- **Audio** — **voice clones** that mimic a specific person from just a few seconds of sample audio.
- **Video** — face-swaps, lip-syncs, and fully generated clips, including live, real-time deepfakes on a video call.

Two facts set the tone for this whole course.

**First: most synthetic media is harmless or useful** — dubbing a film into another language, a voice for someone who lost theirs, concept art, a first draft. The problem isn't that media is synthetic; it's when it's used to **deceive** without disclosure. The Partnership on AI's *Responsible Practices for Synthetic Media* — backed by Adobe, the BBC, OpenAI, TikTok, WITNESS, and others — draws exactly this line: synthetic media is fine, **undisclosed deceptive** synthetic media is the harm.

**Second: the tech is getting better, fast.** That means this course can't just hand you a checklist of glitches. It has to teach you a way of thinking that survives the next model. That way of thinking is **provenance** — establishing where something came from — and you'll build it lesson by lesson.

**Check yourself.** What's the difference between "synthetic media" and a "deepfake," and where does the real harm begin?

## Sources
- Partnership on AI. (2023). Responsible Practices for Synthetic Media: A Framework for Collective Action. https://syntheticmedia.partnershiponai.org/
- WITNESS. Prepare, Don't Panic: Synthetic Media and Deepfakes. https://lab.witness.org/projects/synthetic-media-and-deep-fakes/`,
    },
    {
      slug: "why-spot-the-artifact-fails",
      title: "2 · Why \"spot the artifact\" tips age out fast",
      section: "The landscape",
      body: `You've seen the listicles: count the fingers, check the teeth, look for weird ears, watch for unnatural blinking, find the garbled text in the background. A year ago some of those worked. Today most don't, and next year fewer will.

Here's why chasing artifacts is a losing game:

- **Generators improve continuously.** Every visible "tell" is a bug the next model is trained to fix. Hands and teeth — the classic giveaways — are largely solved in current top image models. A tip tied to a specific flaw has an expiration date.
- **The tells were never reliable.** Real photos have weird lighting and odd hands too; some fakes never had the flaw. So artifact-spotting produces both false alarms and false confidence.
- **It scales against you.** You can study one image closely, but you scroll past hundreds. Manual artifact-hunting doesn't survive contact with a real feed.

This is also why **AI "detector" tools can't be trusted as a verdict.** NIST, the U.S. standards agency that runs media-forensics evaluations, finds the gap brutal: detectors that score above 95% on clean benchmark images routinely **fall toward 50% — coin-flip territory — on real content** from social media, messaging apps, and video calls, once it's been compressed, cropped, and re-uploaded. A confident "98% AI" or "98% real" badge from a website is not proof.

So if looking *at* the pixels doesn't work, what does? Looking *around* the media — at its origin and its corroboration. That's the rest of this course.

**Check yourself.** Give two reasons "count the fingers" stops working, and why a detector tool's confidence score isn't proof.

## Sources
- National Institute of Standards and Technology. GenAI: Deepfakes — Media Forensics Challenge. https://ai-challenges.nist.gov/forensics
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "provenance-and-lateral-reading",
      title: "3 · The durable skill: provenance + lateral reading",
      section: "The durable skill",
      body: `If you remember one lesson from this course, make it this one. The skill that doesn't age out is asking three questions **about the content's origin**, not its pixels:

1. **Who made it?** Is there a named, accountable source — a person or outlet that stakes their reputation on it — or did it surface from an anonymous account?
2. **Where did it come from?** Trace it to the *earliest* version you can find. Memes and clips get re-cropped, re-captioned, and stripped of context as they spread.
3. **Who else confirms it?** Does an **independent, reputable source** report the same thing? One source — especially one you can't identify — is not corroboration.

The fact-checker's name for step 3 is **lateral reading**: instead of staying *on* a suspicious page and judging it by how slick it looks ("vertical" reading), you **open new tabs** and see what *trusted others* say about the source and the claim. Stanford's Civic Online Reasoning research found that professional fact-checkers do this reflexively — and that it beats the careful-reading habits most people are taught.

Why this is durable: it doesn't depend on any flaw in the media. **A perfect, artifact-free deepfake still has to come from somewhere and still fails to be corroborated by independent reporting.** Provenance and lateral reading work no matter how good the generator gets — which is exactly why newsrooms rely on them.

**Check yourself.** Name the three provenance questions, and explain why lateral reading still works on a *flawless* fake.

## Sources
- Stanford Civic Online Reasoning / Digital Inquiry Group. Lateral Reading vs. Vertical Reading. https://cor.inquirygroup.org/curriculum/lessons/lateral-vs-vertical-reading/
- Stanford Civic Online Reasoning. https://cor.stanford.edu/`,
    },
    {
      slug: "content-credentials-c2pa",
      title: "4 · Content Credentials & watermarking — and their limits",
      section: "The durable skill",
      body: `Two technologies try to attach provenance *to the file itself* so you don't have to reconstruct it by hand. Both are genuinely useful — and both have real limits you must understand to use them honestly.

**Content Credentials (C2PA).** The Coalition for Content Provenance and Authenticity (C2PA) — Adobe, Microsoft, the BBC, camera makers, and others — created an **open standard** that attaches a tamper-evident record to a piece of media: who/what created it, whether AI was involved, and what edits were made. C2PA describes it like a **"nutrition label" for digital content.** When you see the **"CR" Content Credentials marker**, you can inspect that history.

> **Limits (be honest):** credentials only help when (a) the tool that made the media *added* them, (b) they **survive** the trip — a screenshot, a re-upload, or a platform that strips metadata can erase them, and (c) the platform you're viewing on actually *displays* them. **Absence of a credential proves nothing** — most media today carries none. Credentials are a positive signal when present, not a test you can fail.

**Watermarking (e.g., SynthID).** Google DeepMind's **SynthID** embeds an *imperceptible* watermark directly into AI-generated images, audio, video, and text, so the content can later be identified as AI-made. It's designed to **survive common modifications** like cropping, filters, compression, or added noise.

> **Limits (be honest):** "designed to survive" is not "impossible to remove" — heavy editing or deliberate attacks can degrade or strip a watermark, and SynthID only flags content from tools that *use* SynthID. Its public detector is still being rolled out and tested. So a negative result doesn't mean "real," and watermarking is one industry's tool, not a universal stamp.

The honest takeaway: **content credentials and watermarks are provenance you can sometimes read off the file — a strong signal when you find one, never a verdict when you don't.** They complement the who/where/corroborate habit; they don't replace it.

**Check yourself.** Why does the *absence* of a Content Credential or SynthID watermark NOT prove a piece of media is real?

## Sources
- Coalition for Content Provenance and Authenticity (C2PA). Content Credentials. https://c2pa.org/
- Google DeepMind. SynthID. https://deepmind.google/technologies/synthid/`,
    },
    {
      slug: "reverse-image-and-metadata",
      title: "5 · Reverse-image search & metadata checks",
      section: "Hands-on checks",
      body: `Provenance gets practical here. Two concrete moves let you trace a piece of media toward its origin.

**Reverse-image search.** Drop a suspect image (or a screenshot of a key video frame) into a reverse-image search to find **where else it has appeared and when**. This routinely cracks the most common deception — which is *not* a fancy deepfake but a **real old photo reused with a false caption**. If a "breaking news" photo turns out to be from a different country three years ago, you're done; you never needed to analyze a single pixel. Search a few frames of a video, not just one, since one frame can be misleading.

**Metadata — useful, but treat it as a clue, not proof.** A file can carry metadata (EXIF: camera, date, sometimes location; or a C2PA record from Lesson 4). When present and intact it can corroborate or contradict a story. **But metadata is fragile and forgeable:** most social platforms *strip* it on upload, editing tools rewrite it, and timestamps can be faked. So:

- **Metadata that's present can be a clue** (e.g., a C2PA edit history, or an EXIF date that contradicts the caption).
- **Missing metadata means nothing** — it usually just means the platform removed it.
- **Never treat metadata as a verdict on its own;** corroborate it with lateral reading.

The mindset: these tools help you **find the original and check the timeline** — which is provenance work, the durable skill — not magic "is-it-fake" detectors.

**Check yourself.** What everyday deception does reverse-image search catch *without* any AI analysis, and why is missing metadata not evidence of a fake?

## Sources
- WITNESS Media Lab. OSINT Digital Forensics (verifying media). https://lab.witness.org/projects/osint-digital-forensics/
- Stanford Civic Online Reasoning / Digital Inquiry Group. https://cor.inquirygroup.org/`,
    },
    {
      slug: "voice-clone-and-video-scams",
      title: "6 · Voice-clone & video-call scams: verify by callback",
      section: "Hands-on checks",
      body: `This is the synthetic-media threat most likely to hit you or someone you love directly — and the one with the cleanest defense.

**The scam.** Criminals clone a voice from a few seconds of audio scraped off social media, then call a parent or grandparent posing as a relative in crisis — a car accident, an arrest, a kidnapping — demanding money *right now*, in secret, by wire or gift cards. The same trick scales to video calls and to **business fraud**: an employee gets a call or video meeting from a "boss" or "vendor" authorizing an urgent payment. The FBI's Internet Crime Complaint Center (IC3) issued a public alert (I-120324) that criminals use generative AI — AI-generated text, images, **and cloned audio** — specifically to make these schemes more believable and harder to catch.

**Why your "I'd know their voice" instinct fails:** the whole point of a voice clone is that it *does* sound like them. Recognition is not verification anymore.

**The defense is procedural, and it's nearly foolproof:**

- **Hang up and call back** on a number you *already have*, never one the caller gives you. A clone can't answer the real person's actual phone.
- **Agree on a family code word** in advance — a word or phrase that's never appeared online and isn't guessable from social media (not a pet's name or street). In a real emergency, the real person can say it; a scammer can't.
- **Slow the urgency.** Manufactured panic and secrecy ("don't tell anyone") exist to stop you from making that callback. Real emergencies survive a two-minute verification.
- **For payments at work,** require **out-of-band confirmation** — a separate, known channel — before any urgent transfer, no matter how convincing the voice or face on the call.

**Check yourself.** A caller has your relative's exact voice and says it's an emergency. What two steps verify it, and why doesn't recognizing the voice count?

## Sources
- FBI Internet Crime Complaint Center. (2024). Criminals Use Generative Artificial Intelligence to Facilitate Financial Fraud (Alert I-120324). https://www.ic3.gov/PSA/2024/PSA241203
- Federal Bureau of Investigation. Internet Crime Complaint Center. https://www.ic3.gov/`,
    },
    {
      slug: "the-liars-dividend",
      title: "7 · The liar's dividend: real things called fake",
      section: "The two-sided problem",
      body: `So far the threat has been **fakes passed off as real**. But synthetic media creates a second, sneakier problem that runs the other direction — and it's the one most people miss.

The **liar's dividend** is this: once everyone knows deepfakes exist, a person caught on **real, genuine** video or audio can simply claim it's fake. The mere *possibility* of fakery hands the dishonest a built-in excuse, and it gets stronger the more people fear deepfakes. Researchers and groups like WITNESS warn this may be the **larger long-term danger**: not that we'll believe fakes, but that we'll **disbelieve the truth** — eroding shared reality so nothing can be trusted.

This is exactly why fearmongering backfires, and why this course refuses it. If your only message is "anything could be fake," you've *handed out* the liar's dividend — you've trained people to dismiss authentic evidence too. Reflexive cynicism is not the goal. **Calibrated** trust is:

- **Skepticism without nihilism.** "I'm not sure yet" is a verification step, not a verdict. The answer to "could be fake" is to *check provenance*, not to shrug.
- **"Fake" needs evidence too.** Dismissing real footage as fake is a claim that requires support, exactly like calling something real does. Don't let "it's probably a deepfake" be a free pass.
- **Corroboration cuts both ways.** Multiple independent sources, content credentials, and original-source tracing can *confirm* something is genuine, not just expose fakes.

The durable skill protects you from **both** errors: believing a convincing fake, and disbelieving an inconvenient truth.

**Check yourself.** What is the "liar's dividend," and why does shouting "anything could be fake" actually make it worse?

## Sources
- WITNESS. Prepare, Don't Panic: Synthetic Media and Deepfakes. https://lab.witness.org/projects/synthetic-media-and-deep-fakes/
- Partnership on AI. (2023). Responsible Practices for Synthetic Media. https://syntheticmedia.partnershiponai.org/`,
    },
    {
      slug: "how-newsrooms-verify",
      title: "8 · How newsrooms and fact-checkers verify",
      section: "The two-sided problem",
      body: `You don't have to invent a method — professional verification desks (at major newsrooms, and human-rights groups like WITNESS) have refined one over years of checking viral media. It's the durable skill, formalized. Borrow their workflow:

1. **Find the original / earliest version.** Reverse-image-search frames; search keywords and dates; trace the post upstream. The earliest copy usually carries the real context that later re-posts stripped away.
2. **Identify and contact the source.** Who first posted it, and can they be reached? An uploader who won't or can't be identified is a major red flag.
3. **Read laterally for corroboration.** Are *independent, reputable* outlets reporting the same event? Verification desks trust a chain of sources, not one viral clip.
4. **Check internal consistency against the world.** Do the weather, shadows, signage, license plates, language, and landmarks match the claimed time and place? (This is *cross-checking against reality*, not artifact-hunting — it works even on a flawless render.)
5. **Use tools as inputs, hold judgment.** Content Credentials, watermark detectors, metadata, and AI-detector scores are **evidence to weigh, never the final word** — remember detectors collapse on real-world content (Lesson 2).
6. **When you can't confirm, say so — and don't amplify.** "Unverified" is an honest, publishable state. The professional default is **do not spread what you can't stand behind.**

Notice every step is **provenance and corroboration** — origin, source, independent confirmation — not "spot the glitch." That's why the method outlasts each new generation of models.

**Check yourself.** Name three steps a newsroom takes to verify a viral video, and explain why "we couldn't confirm it" is a responsible outcome.

## Sources
- WITNESS Media Lab. OSINT Digital Forensics. https://lab.witness.org/projects/osint-digital-forensics/
- Stanford Civic Online Reasoning / Digital Inquiry Group. Teaching Lateral Reading. https://cor.inquirygroup.org/curriculum/collections/teaching-lateral-reading/`,
    },
    {
      slug: "before-you-share",
      title: "9 · Before you share: your 30-second checklist",
      section: "Putting it together",
      body: `Most misinformation spreads because real people **reshare faster than they verify** — especially content that makes them angry, scared, or triumphant. Strong emotion is the carrier. So the single highest-impact habit in this whole course is also the simplest: **pause before you share.**

A 30-second gut-check, drawn from everything above:

1. **What is this trying to make me feel — and do?** Outrage, fear, and "you have to see this" are engineered to bypass your judgment. A strong reaction is your cue to *slow down*, not to hit share.
2. **Who made it, and where did it come from?** Named, accountable source? Can you find the original (reverse-image-search a frame)?
3. **Who else — independently — confirms it?** Lateral-read. If only the original account has it, treat it as unverified.
4. **Any provenance signals?** A Content Credential or watermark is a plus when present; their absence is *not* a strike.
5. **If you can't verify it, don't share it.** "I'm not sure this is real" is reason enough to hold. And avoid the **liar's-dividend trap** in reverse: don't declare something fake without checking either.

That's it. You will not catch every fake — **nobody can, and no tool can; detection is genuinely imperfect.** But you don't need perfection. By trading "spot the pixel flaw" for **provenance, lateral reading, and a callback for anything urgent**, you become dramatically harder to fool *and* you stop being a vector that fools others. That's the empowering truth this course is built on: you can't control what gets generated, but you fully control whether you verify before you believe — and before you share.

**Check yourself.** What's the single most effective habit against misinformation, and what should you do when you genuinely can't tell if something is real?

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
              "The durable skill of establishing where a piece of media came from — who made it and how it got to you — is called ___.",
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
            explanation: "Each fixed tell expires the listicle that relied on it — chase the origin, not the pixels.",
          },
          {
            prompt:
              "To find where an image really came from (often catching a real OLD photo with a false caption), do a reverse-___ search.",
            answer: "image",
            explanation: "The most common deception isn't a deepfake — it's a genuine photo reused out of context.",
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
            explanation: "C2PA Content Credentials are a strong signal when present — but a screenshot or metadata-stripping upload can erase them.",
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
            explanation: "Most media carries no provenance signal at all. Absence proves nothing — corroborate instead.",
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
            explanation: "Coin-flip territory — which is why a detector's confidence score is never proof on its own.",
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
              "Most synthetic media is harmless or useful; the harm is undisclosed, deceptive use — the line the Partnership on AI framework draws.",
            sourceLessonSlug: "what-is-synthetic-media",
          },
          {
            prompt: "Why do \"count the fingers / check the teeth\" tips stop working?",
            options: [
              "They were always a hoax",
              "Generators are trained to fix every visible tell, so each tip expires",
              "Only experts could ever see the flaws",
              "Cameras got better",
            ],
            correctIndex: 1,
            explanation:
              "Every artifact is a bug the next model fixes; the tells were never reliable and don't scale to a real feed.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "An AI-detector website rates an image \"98% real.\" How much should that settle it?",
            options: [
              "It's proof the image is real",
              "Not much — NIST finds detectors can fall toward 50% on real-world content",
              "It's proof only if the score is above 95%",
              "It depends on the file size",
            ],
            correctIndex: 1,
            explanation:
              "Detector scores collapse from >95% on clean benchmarks toward coin-flip on compressed, re-uploaded real content. The score is an input, not a verdict.",
            sourceLessonSlug: "why-spot-the-artifact-fails",
          },
          {
            prompt: "What is the durable skill that survives better AI models?",
            options: [
              "Memorizing a longer list of visual artifacts",
              "Provenance + lateral reading: who made it, where it came from, who independently confirms it",
              "Trusting whichever detector scores highest",
              "Only believing video, never photos",
            ],
            correctIndex: 1,
            explanation:
              "A flawless fake still has an origin and still lacks independent corroboration — so provenance and lateral reading keep working.",
            sourceLessonSlug: "provenance-and-lateral-reading",
          },
          {
            prompt: "Why does the ABSENCE of a Content Credential (C2PA) or SynthID watermark NOT prove media is real?",
            options: [
              "Credentials are always fake",
              "Most media carries none, and screenshots/uploads can strip them — absence is not a test you fail",
              "Only video can carry credentials",
              "It does prove it — no credential means real",
            ],
            correctIndex: 1,
            explanation:
              "Credentials and watermarks are a positive signal when present, never a verdict when missing — corroborate instead.",
            sourceLessonSlug: "content-credentials-c2pa",
          },
          {
            prompt: "What everyday deception does a reverse-image search catch with no AI analysis at all?",
            options: [
              "A perfect deepfake video",
              "A real, old photo reused with a false caption",
              "A cloned voice on a phone call",
              "A watermark removal",
            ],
            correctIndex: 1,
            explanation:
              "The most common deception is genuine media reused out of context — reverse search finds where and when it really appeared.",
            sourceLessonSlug: "reverse-image-and-metadata",
          },
          {
            prompt: "A caller has your relative's exact voice and demands urgent money. What's the right move?",
            options: [
              "Trust it — you recognized the voice",
              "Hang up and call back on a number you already have, and use a family code word",
              "Send a small amount to be safe",
              "Stay on the line and ask security questions",
            ],
            correctIndex: 1,
            explanation:
              "A voice clone sounds exactly like them, so recognition isn't verification. The FBI (alert I-120324) recommends callback on a known number plus a pre-agreed code word.",
            sourceLessonSlug: "voice-clone-and-video-scams",
          },
          {
            prompt: "What is the \"liar's dividend\"?",
            options: [
              "Money made selling deepfakes",
              "A person dismissing REAL footage as fake because deepfakes exist",
              "A discount on detection software",
              "The profit from undisclosed AI ads",
            ],
            correctIndex: 1,
            explanation:
              "Once fakes are common, the dishonest can deny authentic evidence — which is why shouting 'anything could be fake' backfires.",
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
              "Run every image through a detector",
              "Pause before you share — verify provenance first, and don't share what you can't confirm",
              "Assume everything is fake",
              "Only follow verified accounts",
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
