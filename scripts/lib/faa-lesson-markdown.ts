// Pure audio-beat -> published-markdown conversion for the FAA import (scripts/seed-faa.ts),
// split out so it can be unit-tested (tests/faa-lesson-markdown.test.ts) without importing the
// seed script, which runs its `main()` on load and would read content/ and touch the DB. Same
// reason and same shape as scripts/lib/faa-quiz-placement.ts.
//
// ---------------------------------------------------------------------------
// Lesson markdown: audio beats -> published prose + real interactive features.
// ---------------------------------------------------------------------------
// GUIDE-01 hard rule: NO stage tags in published lesson text. Each audio beat marker
// becomes a descriptive heading and inline cues ([Beat], [Sound: ...]) are stripped.
//
// Two beats get special treatment instead of becoming plain prose, because as prose they
// hand the learner the answer before they have tried to recall it:
//   [CHECK]  -> `:::reveal <question> ||| <answer>` (click-to-reveal; see lesson-body.tsx)
//   [RECALL] -> lessons.recall_content cards (RecallPlayer: hidden answer + self-grade)
// Either one only converts when an answer is actually recoverable from the source (the text
// after the beat's inline [Beat] cue). If it is not, the beat stays prose under its heading —
// we never ship an invented or placeholder answer for FAA test prep.

export interface QaPair {
  prompt: string;
  answer: string;
}

const BEAT_HEADINGS: Record<string, string> = {
  RECALL: "Quick recall",
  WELCOME: "Welcome",
  HOOK: "Why this matters",
  TEACH: "The idea",
  PICTURE: "Picture it",
  "ON THE TEST": "On the test",
  "WATCH OUT": "Watch out",
  CHECK: "Quick check",
};
const BEAT_TAG_RE = /\[(RECALL|WELCOME|HOOK|TEACH|PICTURE|ON THE TEST|WATCH OUT|CHECK)\]/g;
// The narrator's lead-in to each prompt: "First question.", "Here's your question.", "Second:".
// Every alternative is anchored to a SENTENCE START. That anchor is load-bearing: without it
// "…so move to the next question without worrying" matches "next question" mid-answer and the
// answer gets chopped in half.
// The sentence anchor tolerates a closing quote — the narrator ends an answer with
// `… "Taking chances is foolish." Second question. …`, and without the quote in the lookbehind
// that next question leaks into the previous answer.
// It also tolerates a RUN of whitespace, not a single space. The lessons keep a prompt inline
// (`… question? [Beat] answer`), but the module reviews put every question on its own line after a
// blank line — with a one-character `\s` the anchor never fires there and the whole rapid-fire
// review silently falls back to prose, publishing each answer directly under its own question.
//
// A LINE start counts as a sentence start too. `^` alone anchors only at index 0 of the string
// being searched, and a beat segment always begins with the newline that followed its `[TEACH]`
// tag, so the run's FIRST prompt ("Question one. …" on the line under the tag) had no preceding
// `.?!` and never matched. splitQaRun then started the run at "Question two.", leaving question
// one and its answer in the head, which is published as prose with the answer in plain sight.
// That silently downgraded the opening question of most module reviews.
const SENTENCE_START = "(?:^|(?<=\\n)|(?<=[.?!][)\"'’”]?\\s{1,8}))";
const LEAD_IN_RE = new RegExp(
  SENTENCE_START +
    "(?:(?:so|okay|ok|alright|all right|now)[,]?\\s+)?" + // "So, first question: …"
    "(?:" +
    "here(?:'|’)?s your (?:one |first )?question" +
    "|here is your (?:one )?question" +
    "|quick question(?: one)?" +
    "|quick check(?: on (?:the )?last (?:lesson|time))?" +
    // The module reviews are rapid-fire recaps that run to eight or nine questions, so the
    // ordinals go well past "fourth" — a shorter list silently drops the back half of a review.
    "|(?:first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|next|last) question" +
    "|question (?:one|two|three|four|five|six|seven|eight|nine|ten)" +
    "|question(?=[:.])" + // "Question: which one is the Part 107 limit?"
    // Half the reviews count off "Fact one. … Fact seven." instead of "Question one." Same
    // rapid-fire shape, different noun — without it those reviews convert nothing.
    "|fact (?:one|two|three|four|five|six|seven|eight|nine|ten)" +
    "|(?:first|second|third|fourth|last|next|final) one" +
    "|(?:first|second|third|fourth)(?=[:.,])" + // "First, what is load factor?"
    "|one more" +
    ")[.:,!]?\\s*",
  "gi",
);
// "Hold on to that, because today's lesson…" — the segue OUT of an answer and back into the
// lesson. Not part of the answer, so it is trimmed off the card. Sentence-anchored for the same
// reason as above (so it can't fire inside a sentence that happens to contain the words).
const SEGUE_RE = new RegExp(`${SENTENCE_START}hold on(?:to| to)?\\b`, "i");

/** A lead-in that starts a new numbered item no matter how it is punctuated. The reviews count
 *  their prompts off ("Question five. …", "Fact three. …") and some of those prompts are phrased as
 *  imperatives with no question mark at all ("Give me the clouds, the precipitation, and the
 *  visibility for each."). answerFrom's generic "is there a ? after it" test misses those, so the
 *  next question bleeds onto the end of the previous answer. These forms are unambiguous. */
export function isStrongLeadIn(s: string): boolean {
  return /^(?:(?:question|fact) (?:one|two|three|four|five|six|seven|eight|nine|ten)|(?:first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|next|last) question)\b/i.test(
    s.trim(),
  );
}

/** Prompts and answers get lifted mid-narration, so the first word can arrive lowercase. */
function sentenceCase(s: string): string {
  return s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s;
}

/** Strip the audio-only cues and normalise a beat's text to a single clean line. */
function toLine(s: string): string {
  return s
    .replace(/\[Sound:[^\]]*\]/gi, "")
    .replace(/\[tone\]/gi, "")
    .replace(/\|\|\|/g, "/") // never let source text forge the reveal delimiter
    .replace(/\s+/g, " ")
    .trim();
}

/** The prompt inside a chunk: everything after the LAST narrator lead-in, or the whole chunk. */
function questionFrom(chunk: string, requireLeadIn: boolean): string {
  const cleaned = toLine(chunk);
  const matches = [...cleaned.matchAll(LEAD_IN_RE)];
  if (matches.length === 0) return requireLeadIn ? "" : sentenceCase(cleaned);
  const last = matches[matches.length - 1];
  return sentenceCase(cleaned.slice(last.index + last[0].length).trim());
}

/** The answer inside a chunk: everything BEFORE the next lead-in (which starts the next
 *  question) and before the segue back into the lesson. */
function answerFrom(chunk: string): string {
  let out = toLine(chunk);
  // Cut where the NEXT question begins — but only at a lead-in that really does introduce a
  // question (something after it ends in "?"). An answer is allowed to enumerate ("First, check
  // the battery. Second, check the props.") without being chopped at "Second,".
  const nextQ = [...out.matchAll(LEAD_IN_RE)].find(
    (m) => m.index > 0 && (isStrongLeadIn(m[0]) || out.slice(m.index + m[0].length).includes("?")),
  );
  if (nextQ) out = out.slice(0, nextQ.index);
  const segue = out.match(SEGUE_RE);
  if (segue?.index != null && segue.index > 0) out = out.slice(0, segue.index);
  return sentenceCase(out.trim().replace(/[,;:]$/, ""));
}

/** Split a beat body on its inline [Beat] cues into question/answer pairs. The narrator's
 *  pattern is `<question> [Beat] <answer>`, sometimes twice in one beat. */
export function extractQaPairs(body: string): QaPair[] {
  const chunks = body.split(/\[Beat\]/gi);
  if (chunks.length < 2) return [];
  const pairs: QaPair[] = [];
  for (let i = 0; i + 1 < chunks.length; i++) {
    // The first chunk is the beat's own opening, so its prompt may have no lead-in phrase
    // ("Your drone clips a parked car … do you have to report it?"). Later chunks BEGIN with
    // the previous answer, so there a lead-in is the only safe way to find where the next
    // question starts — without one we skip the pair rather than guess.
    const prompt = questionFrom(chunks[i], i > 0);
    const answer = answerFrom(chunks[i + 1]);
    // A [Beat] with NO question after it is a dramatic pause inside an answer, not a new prompt
    // ("… stable is stratus and smooth with murky views. [Beat] A second to lock it in. Warm and
    // humid air tends to be unstable …"). Skipping the pair is right — there is no question to
    // ask — but the continuation is still part of the previous answer, and dropping the pair used
    // to drop that prose out of the lesson entirely. Fold it back onto the answer it belongs to.
    if (!prompt && i > 0 && answer && pairs.length > 0) {
      const prev = pairs[pairs.length - 1];
      prev.answer = `${prev.answer} ${answer}`.trim();
      continue;
    }
    if (prompt && answer) pairs.push({ prompt, answer });
  }
  return pairs;
}

/** One line per pair, blank-line separated — lesson-body.tsx matches `:::reveal` per line. */
function revealBlock(pairs: QaPair[]): string {
  return pairs.map((p) => `:::reveal ${p.prompt} ||| ${p.answer}`).join("\n\n");
}

/** A rapid-fire "Question one. … [Beat] … answer" run, with the prose that introduces it.
 *
 *  The module REVIEWS are built entirely out of these runs, and they sit in two different places
 *  depending on the module: inside a [TEACH] beat (most modules) or bare in the preamble with no
 *  beat tag at all (modules 7 and 8). Both feed the SAME extractor the [CHECK]/[RECALL] beats use
 *  — the only extra job here is to keep the intro prose ("This is a rapid-fire review. Six
 *  questions.") instead of swallowing it into the first question.
 *
 *  If no pair comes back, the caller keeps the text as prose. We never invent an answer. */
export function splitQaRun(text: string): { head: string; pairs: QaPair[] } {
  const first = [...text.matchAll(LEAD_IN_RE)][0];
  if (!first) return { head: text, pairs: [] };
  const pairs = extractQaPairs(text.slice(first.index));
  if (pairs.length === 0) return { head: text, pairs: [] };
  return { head: text.slice(0, first.index), pairs };
}

/** True when a chunk *looks* like Q/A (it has the narrator's think-about-it beat) but yielded no
 *  pair — the one case worth reporting, since it means an answer sits in prose under its question. */
function looksLikeQa(s: string): boolean {
  return /\[Beat\]/i.test(s);
}

// Every review signs off by naming the next module ("That's Module 1. The forces, the stall … Next
// up is Module 2, Regulations …"). That narration trails the FINAL answer with no beat between
// them, so the extractor reads it as part of the answer and the learner reveals a correct answer
// with a module outro stapled to the end of it. Cut it off the answer and re-emit it as prose.
//
// "That's the module." (module 2's review) and "That's Module 3 in your pocket." are the same
// sign-off with a different tail, so the module NUMBER cannot be required after the word.
const OUTRO_RE =
  /(?:^|(?<=[.?!]\s{1,8}))(?:that(?:'|’)?s (?:it for )?(?:the )?module\b|next up[,:]?\s+(?:is\s+)?module \d)/i;
export function splitOutro(spoken: string): { qa: string; outro: string } {
  const m = spoken.match(OUTRO_RE);
  if (m?.index == null || m.index === 0) return { qa: spoken, outro: "" };
  return { qa: spoken.slice(0, m.index), outro: spoken.slice(m.index).trim() };
}

// ---------------------------------------------------------------------------
// "Carried Forward (earlier modules)" — the cross-module spaced-repetition block
// ---------------------------------------------------------------------------
// Every module review from 2 on ends with a `## Carried Forward (earlier modules)` section: four
// high-yield questions pulled from EARLIER modules, each written `<prompt> [Beat] <answer>`.
//
// It is the last markdown section of the review, which is exactly why it shipped broken. A beat
// segment stops at its first markdown heading and everything from there on is passed through
// verbatim as `tail`; finalTidy then strips the `[Beat]` cue, so all four answers published as
// prose sitting directly under their own questions. Nothing counted it, so the dry run reported
// zero unconverted Q/A. That is the learner-reported bug on /bam/faa-part-107/lesson/m2-review.
//
// These become RECALL CARDS rather than `:::reveal` lines, for two reasons. They are cross-module
// spaced repetition, which is what recall_content is for, and every one of them is introduced with
// "Before we dig into the rules…" / "Before we dive into airspace…" — in the audio they play at the
// TOP of the review, which is precisely where RecallPlayer renders. Publishing them as cards puts
// them back where the narrator put them, with a hidden answer and an "I got it / Missed it" grade
// that feeds the instructor's recall-accuracy panel.
//
// The section is paragraph-shaped, not lead-in-shaped, so extractQaPairs is the wrong tool: only
// module 2 numbers its prompts ("Question one."), the rest just ask. Two block layouts appear:
//   modules 2 to 10   one paragraph per item, `<prompt> [Beat] <answer>`
//   module 11         three paragraphs per item: prompt, a bare `[Beat]`, then the answer
// Both are unambiguous, so both convert. Anything else is left as prose and reported.
const CARRIED_FORWARD_RE = /^#{1,6}[^\S\n]*Carried Forward\b.*$/m;

/** Blocks (blank-line separated) of a Carried Forward section, split into cards and leftovers. */
function carriedForwardPairs(sectionBody: string): { pairs: QaPair[]; leftovers: string[] } {
  const blocks = sectionBody.split(/\n[^\S\n]*\n/).map((b) => b.trim());
  const pairs: QaPair[] = [];
  const used = new Array(blocks.length).fill(false);

  blocks.forEach((block, i) => {
    if (used[i] || !/\[Beat\]/i.test(block)) return;
    const bare = block.replace(/\[Beat\]/gi, "").trim() === "";
    if (bare) {
      // Module 11's layout: the previous block asked, this block is the pause, the next answers.
      const before = i > 0 && !used[i - 1] ? blocks[i - 1] : "";
      const after = i + 1 < blocks.length ? blocks[i + 1] : "";
      const prompt = toLine(before);
      const answer = toLine(after);
      if (!prompt || !answer || /\[Beat\]/i.test(after)) return;
      pairs.push({ prompt: sentenceCase(prompt), answer: sentenceCase(answer) });
      used[i - 1] = true;
      used[i] = true;
      used[i + 1] = true;
      return;
    }
    // The inline layout. Split once: text before the cue asks, text after it answers.
    const at = block.search(/\[Beat\]/i);
    const prompt = questionFrom(block.slice(0, at), false);
    const answer = toLine(block.slice(at).replace(/\[Beat\]/i, ""));
    if (!prompt || !answer) return;
    pairs.push({ prompt, answer: sentenceCase(answer) });
    used[i] = true;
  });

  const leftovers = blocks.filter((b, i) => !used[i] && b.length > 0);
  return { pairs, leftovers };
}

/**
 * Lift the review's Carried Forward section out of the body and into recall cards.
 *
 * Returns the body with the section removed when EVERY question in it converted (the heading and
 * its intro line go too: RecallPlayer supplies its own heading and instructions, so leaving them
 * behind would publish an empty section). If any question could not convert, the whole section is
 * left exactly as it was and reported through `unconverted`, so a half-converted block never
 * publishes some answers as cards and the rest as prose.
 *
 * Pure, and a no-op on any markdown with no Carried Forward heading.
 */
export function liftCarriedForward(md: string): {
  body: string;
  pairs: QaPair[];
  unconverted: number;
} {
  const heading = md.match(CARRIED_FORWARD_RE);
  if (heading?.index == null) return { body: md, pairs: [], unconverted: 0 };
  const start = heading.index;
  const afterHeading = start + heading[0].length;
  // The section runs to the next heading of any level, or to the end of the review.
  const rel = md.slice(afterHeading).search(/^#{1,6} /m);
  const end = rel >= 0 ? afterHeading + rel : md.length;
  const sectionBody = md.slice(afterHeading, end);

  const { pairs, leftovers } = carriedForwardPairs(sectionBody);
  // A leftover that still carries the narrator's think-about-it cue is a question whose answer we
  // could not recover. Never guess one: keep the section as it was and say so.
  const stranded = leftovers.filter((b) => looksLikeQa(b)).length;
  if (pairs.length === 0 || stranded > 0) {
    return { body: md, pairs: [], unconverted: stranded > 0 ? stranded : looksLikeQa(sectionBody) ? 1 : 0 };
  }
  return { body: `${md.slice(0, start)}${md.slice(end)}`, pairs, unconverted: 0 };
}

// ---------------------------------------------------------------------------

export interface CleanedLesson {
  body: string;
  recall: QaPair[];
  reveals: number;
  /** Q/A beats whose answer could not be recovered — left as prose, reported, never invented. */
  unconvertedQa: number;
}

export interface CleanOptions {
  /** A module review: its body IS a rapid-fire quiz, so the [TEACH] beat and the untagged
   *  preamble are Q/A runs too — not exposition. In a normal lesson they are prose, untouched. */
  review?: boolean;
}

export function cleanLessonMarkdown(source: string, opts: CleanOptions = {}): CleanedLesson {
  const recall: QaPair[] = [];
  let reveals = 0;
  let unconvertedQa = 0;

  // Pull the Carried Forward block out FIRST, before the beat walk, so its questions never reach
  // the pass-through `tail` that published them as prose.
  let md = source;
  let carried: QaPair[] = [];
  if (opts.review) {
    const lifted = liftCarriedForward(source);
    md = lifted.body;
    carried = lifted.pairs;
    unconvertedQa += lifted.unconverted;
  }

  const tags = [...md.matchAll(BEAT_TAG_RE)];

  // The preamble (before the first beat tag). Normally just the H1 + goal line. In the module 7
  // and 8 reviews it is the ENTIRE rapid-fire quiz, untagged — ship it raw and every answer is
  // published in plain prose directly under its question.
  const preambleRaw = tags.length ? md.slice(0, tags[0].index) : md;
  let preamble = preambleRaw;
  if (opts.review) {
    const { qa, outro } = splitOutro(preambleRaw);
    const { head, pairs } = splitQaRun(qa);
    if (pairs.length > 0) {
      reveals += pairs.length;
      preamble = `${head.trim()}\n\n${revealBlock(pairs)}\n\n${outro ? `${outro}\n\n` : ""}`;
    } else if (looksLikeQa(preambleRaw)) {
      unconvertedQa++;
    }
  }

  if (tags.length === 0) {
    return {
      body: finalTidy(preamble),
      recall: [...recall, ...carried],
      reveals,
      unconvertedQa,
    };
  }

  const out: string[] = [preamble];
  tags.forEach((tag, i) => {
    const name = tag[1];
    const start = tag.index + tag[0].length;
    const end = i + 1 < tags.length ? tags[i + 1].index : md.length;
    const segment = md.slice(start, end);
    // A markdown heading (## Key Takeaways) ends the spoken beat and starts ordinary prose;
    // keep that tail exactly as it is.
    const headingAt = segment.search(/^#{1,6} /m);
    const spoken = headingAt >= 0 ? segment.slice(0, headingAt) : segment;
    const tail = headingAt >= 0 ? segment.slice(headingAt) : "";

    if (name === "CHECK") {
      const { qa, outro } = opts.review ? splitOutro(spoken) : { qa: spoken, outro: "" };
      const pairs = extractQaPairs(qa);
      if (pairs.length > 0) {
        reveals += pairs.length;
        out.push(`\n\n${revealBlock(pairs)}\n\n${outro ? `${outro}\n\n` : ""}${tail}`);
        return;
      }
      unconvertedQa++;
      out.push(`\n## ${BEAT_HEADINGS.CHECK}\n${spoken}\n${tail}`);
      return;
    }

    // In a REVIEW, [TEACH] is not exposition — it is the rapid-fire quiz itself ("Question one.
    // Name the four forces of flight. [Beat] Lift, weight, thrust, and drag…"). Left alone it
    // publishes six-to-eight answers as prose, each sitting one line under its own question, which
    // is exactly the failure the [CHECK] conversion exists to prevent. Same extractor, same output.
    if (name === "TEACH" && opts.review) {
      const { qa, outro } = splitOutro(spoken);
      const { head, pairs } = splitQaRun(qa);
      if (pairs.length > 0) {
        reveals += pairs.length;
        out.push(
          `\n## ${BEAT_HEADINGS.TEACH}\n${head.trim()}\n\n${revealBlock(pairs)}\n\n${outro ? `${outro}\n\n` : ""}${tail}`,
        );
        return;
      }
      if (looksLikeQa(spoken)) unconvertedQa++;
      out.push(`\n## ${BEAT_HEADINGS.TEACH}\n${spoken}\n${tail}`);
      return;
    }

    if (name === "RECALL") {
      const pairs = extractQaPairs(spoken);
      if (pairs.length > 0) {
        // Lift the whole beat OUT of the body into recall cards, so the answer is hidden
        // until the learner reveals it instead of sitting in prose two lines below the question.
        recall.push(...pairs);
        out.push(tail ? `\n${tail}` : "");
        return;
      }
      out.push(`\n## ${BEAT_HEADINGS.RECALL}\n${spoken}\n${tail}`);
      return;
    }

    out.push(`\n## ${BEAT_HEADINGS[name] ?? name}\n${spoken}\n${tail}`);
  });

  // The [RECALL] beat quizzes the previous lesson; the carried-forward block reaches further back.
  // Nearest material first, so the panel reads newest to oldest.
  return {
    body: finalTidy(out.join("")),
    recall: [...recall, ...carried],
    reveals,
    unconvertedQa,
  };
}

export function finalTidy(md: string): string {
  return md
    .replace(/\[Sound:[^\]]*\]/gi, "")
    .replace(/\[Beat\]/gi, "")
    .replace(/\[tone\]/gi, "")
    .replace(/[^\S\n]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
