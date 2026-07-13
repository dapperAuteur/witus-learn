import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { parse } from "csv-parse/sync";
import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { AUTHORED_FAA_QUIZZES } from "./data/faa-part-107-quizzes";
import type { AuthoredCourse, AuthoredLesson } from "./data/authored-course";
import type { QuizContent } from "../src/lib/quiz";

// Imports the FAA Part 107 course (authored by CentOS, audio-first) from the
// gitignored content/drone-curriculum/academy-import/ into Learn.WitUS. Reads the
// per-module lesson JSONs (both their `lessons` AND their `review`) + quizzes CSV +
// glossary CSV, converts the CentOS quiz schema to ours, and seeds via the re-seedable
// importer.
//   pnpm seed:faa              # seed
//   pnpm seed:faa --dry-run    # print the module -> lesson/quiz/reveal breakdown, NO DB
//
// The dry run touches no database (Neon bills data transfer), so grouping and content
// transforms can be verified without a seed.

const CONTENT = join(process.cwd(), "content", "drone-curriculum", "academy-import");
const DRY_RUN = process.argv.includes("--dry-run");
const DUMP = process.argv.includes("--dump");

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

// Authoritative module titles, from content/.../00-course-metadata.md ("Module list (order)")
// and README-import.md. These become the course's SECTIONS: seed-authored-course.ts turns each
// distinct `section` label into a course_module, which the course page renders as a collapsible
// <details>. Without them FAA had zero modules and fell back to one flat list of ~90 lessons.
const MODULE_TITLES: Record<number, string> = {
  0: "Module 0 — Start Here",
  1: "Module 1 — Loading and Performance",
  2: "Module 2 — Regulations",
  3: "Module 3 — Airport Operations",
  4: "Module 4 — Radio Communications",
  5: "Module 5 — Airspace",
  6: "Module 6 — Sectional Charts",
  7: "Module 7 — Weather Theory",
  8: "Module 8 — Weather Services",
  9: "Module 9 — Aeronautical Decision Making",
  10: "Module 10 — Physiology and Night Operations",
  11: "Module 11 — Procedures and Maintenance",
  12: "Module 12 — Practice Exam",
  13: "Module 13 — Apply for Your Certificate",
};
function sectionFor(moduleOrder: number): string {
  return MODULE_TITLES[moduleOrder] ?? `Module ${moduleOrder}`;
}
/** "Module 5 — Airspace" -> "Airspace", for the review lesson's title. */
function topicFor(moduleOrder: number): string {
  return sectionFor(moduleOrder).replace(/^Module \d+\s*—\s*/, "");
}

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
const SENTENCE_START = "(?:^|(?<=[.?!][)\"'’”]?\\s{1,8}))";
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
function isStrongLeadIn(s: string): boolean {
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
function extractQaPairs(body: string): { prompt: string; answer: string }[] {
  const chunks = body.split(/\[Beat\]/gi);
  if (chunks.length < 2) return [];
  const pairs: { prompt: string; answer: string }[] = [];
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
function revealBlock(pairs: { prompt: string; answer: string }[]): string {
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
function splitQaRun(text: string): { head: string; pairs: { prompt: string; answer: string }[] } {
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
const OUTRO_RE = /(?:^|(?<=[.?!]\s{1,8}))(?:that(?:'|’)?s (?:it for )?module \d|next up[,:]?\s+(?:is\s+)?module \d)/i;
function splitOutro(spoken: string): { qa: string; outro: string } {
  const m = spoken.match(OUTRO_RE);
  if (m?.index == null || m.index === 0) return { qa: spoken, outro: "" };
  return { qa: spoken.slice(0, m.index), outro: spoken.slice(m.index).trim() };
}

interface CleanedLesson {
  body: string;
  recall: { prompt: string; answer: string }[];
  reveals: number;
  /** Q/A beats whose answer could not be recovered — left as prose, reported, never invented. */
  unconvertedQa: number;
}

interface CleanOptions {
  /** A module review: its body IS a rapid-fire quiz, so the [TEACH] beat and the untagged
   *  preamble are Q/A runs too — not exposition. In a normal lesson they are prose, untouched. */
  review?: boolean;
}

function cleanLessonMarkdown(md: string, opts: CleanOptions = {}): CleanedLesson {
  const tags = [...md.matchAll(BEAT_TAG_RE)];
  const recall: { prompt: string; answer: string }[] = [];
  let reveals = 0;
  let unconvertedQa = 0;

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

  if (tags.length === 0) return { body: finalTidy(preamble), recall, reveals, unconvertedQa };

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

  return { body: finalTidy(out.join("")), recall, reveals, unconvertedQa };
}

function finalTidy(md: string): string {
  return md
    .replace(/\[Sound:[^\]]*\]/gi, "")
    .replace(/\[Beat\]/gi, "")
    .replace(/\[tone\]/gi, "")
    .replace(/[^\S\n]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ---------------------------------------------------------------------------
// Source files
// ---------------------------------------------------------------------------

interface ModuleLesson {
  n: number;
  title: string;
  lessonMarkdown: string;
}

/** Each module JSON carries a `review` key BESIDE `lessons` — a ready-made recap of the module,
 *  same audio-beat markdown as any other lesson. The import ignored it for months and published
 *  the course without a single review. Modules 0, 12 and 13 ship `review: null` (course intro,
 *  practice exam, certificate paperwork — nothing to recap), so 11 modules have one. */
interface ModuleReview {
  lessonMarkdown: string;
  runTimeSec?: number;
}

interface SourceModule {
  moduleOrder: number;
  lessons: ModuleLesson[];
  review: ModuleReview | null;
}

function readModuleLessons(): SourceModule[] {
  const files = readdirSync(CONTENT).filter((f) => /^_module\d+-lessons\.json$/.test(f));
  return files
    .map((f) => {
      const moduleOrder = parseInt(f.match(/_module(\d+)/)![1], 10);
      const data = JSON.parse(readFileSync(join(CONTENT, f), "utf-8")) as {
        lessons?: ModuleLesson[];
        review?: ModuleReview | null;
      };
      return { moduleOrder, lessons: data.lessons ?? [], review: data.review ?? null };
    })
    .sort((a, b) => a.moduleOrder - b.moduleOrder);
}

// CentOS quiz schema -> witus QuizContent (options become a string[]; correctOptionId
// becomes the matching index; the citation is folded into the explanation).
interface CentOSQuiz {
  passingScore?: number;
  questions: {
    questionText: string;
    options: { id: string; text: string }[];
    correctOptionId: string;
    explanation?: string;
    citation?: string;
  }[];
}
function convertQuiz(c: CentOSQuiz): QuizContent {
  return {
    passingScore: c.passingScore ?? 80,
    questions: (c.questions ?? []).map((q) => {
      const idx = q.options.findIndex((o) => o.id === q.correctOptionId);
      const explanation = q.citation
        ? `${q.explanation ?? ""}\n\nReference: ${q.citation}`.trim()
        : q.explanation;
      return {
        prompt: q.questionText,
        options: q.options.map((o) => o.text),
        correctIndex: idx < 0 ? 0 : idx,
        explanation,
      };
    }),
  };
}

interface QuizRow {
  module_order: string;
  lesson_order: string;
  title: string;
  quiz_content: string;
}
interface ModuleQuiz {
  moduleOrder: number;
  lessonOrder: number;
  title: string;
  quiz: QuizContent;
  origin: "csv" | "authored";
}
function readQuizzes(): ModuleQuiz[] {
  let rows: QuizRow[];
  try {
    const raw = readFileSync(join(CONTENT, "quizzes-import.csv"), "utf-8");
    rows = parse(raw, { columns: true, skip_empty_lines: true, relax_column_count: true }) as QuizRow[];
  } catch {
    return [];
  }
  return rows
    .filter((r) => r.quiz_content?.trim())
    .map((r) => ({
      moduleOrder: parseInt(r.module_order, 10),
      lessonOrder: parseInt(r.lesson_order, 10),
      title: r.title,
      quiz: convertQuiz(JSON.parse(r.quiz_content) as CentOSQuiz),
      origin: "csv" as const,
    }));
}

function readGlossary(): { term: string; definition: string }[] {
  try {
    const raw = readFileSync(join(CONTENT, "glossary.csv"), "utf-8");
    const rows = parse(raw, { columns: true, skip_empty_lines: true, relax_column_count: true }) as {
      term: string;
      definition: string;
    }[];
    const seen = new Set<string>();
    const out: { term: string; definition: string }[] = [];
    for (const r of rows) {
      const term = (r.term ?? "").trim();
      const key = term.toLowerCase();
      if (!term || seen.has(key)) continue;
      seen.add(key);
      out.push({ term, definition: (r.definition ?? "").trim() || term });
    }
    return out;
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Course assembly
// ---------------------------------------------------------------------------

interface BuildStats {
  modules: {
    order: number;
    section: string;
    lessons: number;
    /** The module's review lesson, when the source has one (modules 0/12/13 do not). */
    review: { title: string; reveals: number; recallCards: number } | null;
    quizzes: { title: string; questions: number; origin: "csv" | "authored" }[];
    reveals: number;
    recallCards: number;
    unconvertedQa: number;
  }[];
}

function buildCourse(): { course: AuthoredCourse; stats: BuildStats } {
  const modules = readModuleLessons();
  const csvQuizzes = readQuizzes();
  const lessons: AuthoredLesson[] = [];
  const stats: BuildStats = { modules: [] };

  for (const m of modules) {
    const section = sectionFor(m.moduleOrder);
    const ordered = [...m.lessons].sort((a, b) => a.n - b.n);
    // n -> slug, so an authored quiz question can point at the lesson that teaches its answer.
    const slugByLessonNumber = new Map<number, string>();
    let reveals = 0;
    let recallCards = 0;
    let unconvertedQa = 0;

    for (const l of ordered) {
      const slug = `m${m.moduleOrder}-l${l.n}-${slugify(l.title)}`.slice(0, 100);
      slugByLessonNumber.set(l.n, slug);
      const cleaned = cleanLessonMarkdown(l.lessonMarkdown);
      reveals += cleaned.reveals;
      recallCards += cleaned.recall.length;
      unconvertedQa += cleaned.unconvertedQa;
      lessons.push({
        slug,
        title: l.title,
        section,
        body: cleaned.body,
        ...(cleaned.recall.length > 0 ? { recallContent: cleaned.recall } : {}),
      });
    }

    // Then the module REVIEW — last lesson of the module, before the quiz: review, then test.
    // Same `section` as the module's other lessons, so it lands inside the existing collapsible
    // section rather than orphaning itself into a new one.
    let review: BuildStats["modules"][number]["review"] = null;
    if (m.review?.lessonMarkdown?.trim()) {
      const cleaned = cleanLessonMarkdown(m.review.lessonMarkdown, { review: true });
      reveals += cleaned.reveals;
      recallCards += cleaned.recall.length;
      unconvertedQa += cleaned.unconvertedQa;
      const title = `Module ${m.moduleOrder} Review — ${topicFor(m.moduleOrder)}`;
      lessons.push({
        slug: `m${m.moduleOrder}-review`,
        title,
        section,
        body: cleaned.body,
        ...(cleaned.recall.length > 0 ? { recallContent: cleaned.recall } : {}),
      });
      review = { title, reveals: cleaned.reveals, recallCards: cleaned.recall.length };
    }

    // Every module ends with a quiz: the imported ones where the CSV has them, our authored
    // ones (scripts/data/faa-part-107-quizzes.ts) everywhere else.
    const fromCsv = csvQuizzes
      .filter((q) => q.moduleOrder === m.moduleOrder)
      .sort((a, b) => a.lessonOrder - b.lessonOrder);
    const authored: ModuleQuiz[] = fromCsv.length
      ? []
      : AUTHORED_FAA_QUIZZES.filter((q) => q.moduleOrder === m.moduleOrder).map((q, i) => ({
          moduleOrder: q.moduleOrder,
          lessonOrder: 1000 + i,
          title: q.title,
          origin: "authored" as const,
          quiz: {
            passingScore: q.passingScore ?? 80,
            questions: q.questions.map((qq) => ({
              prompt: qq.prompt,
              options: qq.options,
              correctIndex: qq.correctIndex,
              explanation: qq.explanation,
              ...(slugByLessonNumber.has(qq.sourceLessonNumber)
                ? { sourceLessonSlug: slugByLessonNumber.get(qq.sourceLessonNumber) }
                : {}),
            })),
          },
        }));

    const quizzes = [...fromCsv, ...authored];
    for (const q of quizzes) {
      lessons.push({
        slug: `m${m.moduleOrder}-quiz-${q.lessonOrder}`,
        title: q.title,
        section,
        quiz: q.quiz,
      });
    }

    stats.modules.push({
      order: m.moduleOrder,
      section,
      lessons: ordered.length,
      review,
      quizzes: quizzes.map((q) => ({
        title: q.title,
        questions: q.quiz.questions.length,
        origin: q.origin,
      })),
      reveals,
      recallCards,
      unconvertedQa,
    });
  }

  return {
    course: {
      title: "FAA Part 107: Pass the Remote Pilot Exam",
      description:
        "An audio-first course to earn your commercial drone license. Learn the knowledge behind the FAA Part 107 rules, module by module, then pass the written test. Some questions reference the official FAA figure supplement (FAA-CT-8080-2H) the test uses, so keep it handy for those. Connects to FlyWitUS for pre-flight checklists and flight records.",
      lessons,
    },
    stats,
  };
}

function printBreakdown(course: AuthoredCourse, stats: BuildStats): void {
  console.log(`\n${course.title}`);
  console.log(`${stats.modules.length} sections, ${course.lessons.length} lessons+quizzes\n`);
  let totalQuestions = 0;
  let authoredQuizzes = 0;
  let csvQuizzes = 0;
  let reveals = 0;
  let recall = 0;
  let unconverted = 0;
  let reviews = 0;
  for (const m of stats.modules) {
    const quizLabel = m.quizzes.length
      ? m.quizzes.map((q) => `${q.title} (${q.questions}q, ${q.origin})`).join(", ")
      : "!! NO QUIZ !!";
    console.log(`  ${m.section}`);
    console.log(`    lessons: ${m.lessons}  reveals: ${m.reveals}  recall cards: ${m.recallCards}`);
    // The review sits between the lessons and the quiz — review, then test.
    console.log(
      `    review: ${
        m.review
          ? `${m.review.title} (${m.review.reveals} reveals, ${m.review.recallCards} recall cards)`
          : "none in source"
      }`,
    );
    console.log(`    quiz: ${quizLabel}`);
    if (m.unconvertedQa) console.log(`    Q/A beats left as prose (no answer recovered): ${m.unconvertedQa}`);
    for (const q of m.quizzes) {
      totalQuestions += q.questions;
      if (q.origin === "authored") authoredQuizzes++;
      else csvQuizzes++;
    }
    reveals += m.reveals;
    recall += m.recallCards;
    unconverted += m.unconvertedQa;
    if (m.review) reviews++;
  }
  const noQuiz = stats.modules.filter((m) => m.quizzes.length === 0);
  console.log(
    `\n  totals: ${reviews} module reviews; ${csvQuizzes} imported + ${authoredQuizzes} authored quizzes, ` +
      `${totalQuestions} questions; ${reveals} click-to-reveal checks; ${recall} recall cards; ` +
      `${unconverted} Q/A beats left as prose`,
  );
  console.log(`  modules with no quiz: ${noQuiz.length ? noQuiz.map((m) => m.order).join(", ") : "none"}`);
  console.log(
    `  modules with no review in source: ${
      stats.modules.filter((m) => !m.review).map((m) => m.order).join(", ") || "none"
    }`,
  );
  // Guard the strict shape the renderer needs: one line, exactly one ||| delimiter.
  const bad = course.lessons.flatMap((l) =>
    (l.body ?? "")
      .split("\n")
      .filter((line) => line.startsWith(":::reveal"))
      .filter((line) => (line.match(/\|\|\|/g) ?? []).length !== 1 || !/^:::reveal\s+.+?\s*\|\|\|\s*.+$/.test(line))
      .map((line) => `${l.slug}: ${line.slice(0, 80)}`),
  );
  console.log(`  malformed :::reveal lines: ${bad.length ? `\n    ${bad.join("\n    ")}` : "none"}`);

  // GUIDE-01: no audio stage directions may survive into published lesson text.
  const tagged = course.lessons
    .filter((l) => /\[(?:Beat|Sound:|tone|RECALL|CHECK|HOOK|TEACH|PICTURE|WELCOME|ON THE TEST|WATCH OUT)\b/i.test(l.body ?? ""))
    .map((l) => l.slug);
  console.log(`  lessons with leftover stage tags: ${tagged.length ? tagged.join(", ") : "none"}`);

  // --dump prints every converted card so a human can read what the learner will see. The
  // counts above prove the transform RAN; only reading the text proves it produced sense.
  if (!DUMP) return;
  for (const l of course.lessons) {
    const reveals = (l.body ?? "").split("\n").filter((line) => line.startsWith(":::reveal"));
    if (!reveals.length && !l.recallContent?.length) continue;
    console.log(`\n--- ${l.slug}`);
    for (const r of reveals) console.log(`  REVEAL ${r.slice("::: reveal".length)}`);
    for (const c of l.recallContent ?? []) console.log(`  RECALL Q: ${c.prompt}\n         A: ${c.answer}`);
  }
}

async function main() {
  const { course, stats } = buildCourse();
  if (course.lessons.length === 0) {
    console.error("No FAA content found — copy the academy-import into content/drone-curriculum/.");
    process.exit(1);
  }
  printBreakdown(course, stats);

  if (DRY_RUN) {
    console.log("\nDry run — no database was touched. Re-run without --dry-run to seed.\n");
    return;
  }

  neonConfig.webSocketConstructor = ws;
  const connectionString = resolveDbUrl(true);
  if (!connectionString || connectionString.includes("placeholder")) {
    console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
    process.exit(1);
  }
  const pool = new Pool({ connectionString });
  const db = drizzle(pool, { schema, casing: "snake_case" });

  try {
    // FAA Part 107 (the "drone" course) is consolidated onto Learn.WitUS with the other
    // former Trade School courses (was previously seeded into the standalone trade-school
    // tenant, which is why it wasn't showing on Learn.WitUS).
    const t = await db
      .select({ id: schema.tenants.id })
      .from(schema.tenants)
      .where(eq(schema.tenants.slug, "learn-witus"))
      .limit(1);
    const tenantId = t[0]?.id;
    if (!tenantId) {
      console.error("Learn.WitUS tenant missing — run `pnpm seed:tenants` first.");
      process.exit(1);
    }

    const instructorId = "seed-trade-faculty";
    await db
      .insert(schema.users)
      .values({ id: instructorId, email: "faculty@trade.witus.online", emailVerified: true, name: "WitUS Trade Faculty" })
      .onConflictDoNothing();
    await db
      .insert(schema.userProfiles)
      .values({ userId: instructorId, username: "trade-faculty", displayName: "WitUS Trade Faculty" })
      .onConflictDoNothing();
    await db
      .insert(schema.tenantMemberships)
      .values({ tenantId, userId: instructorId, role: "instructor" })
      .onConflictDoNothing();

    await db
      .insert(schema.courseCategories)
      .values({ tenantId, name: "Aviation", sortOrder: 2 })
      .onConflictDoNothing();

    const courseId = await seedAuthoredCourse(db, {
      tenantId,
      instructorId,
      slug: "faa-part-107",
      course,
      category: "Aviation",
      navigationMode: "linear",
    });

    const glossary = readGlossary().slice(0, 200);
    if (glossary.length) {
      await db
        .insert(schema.courseGlossaryTerms)
        .values(glossary.map((g, i) => ({ courseId, term: g.term, definition: g.definition, sortOrder: i })))
        .onConflictDoUpdate({
          target: [schema.courseGlossaryTerms.courseId, schema.courseGlossaryTerms.term],
          set: { definition: sql`excluded.definition` },
        });
      console.log(`  glossary: ${glossary.length} terms`);
    }
    console.log(`Done. FAA course: ${course.lessons.length} lessons/quizzes.`);
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
