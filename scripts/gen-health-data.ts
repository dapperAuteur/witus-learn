// One-shot GENERATOR (not a seeder). Reads the real CentOS health/fitness course
// content (read-only, from a sibling checkout) and emits committed witus
// AuthoredCourse data modules under scripts/data/. The generated modules are what
// `pnpm seed:health` / `pnpm seed:speedway` import — so the migrated content
// survives a fresh clone and never needs CentOS at seed time.
//
// Re-run only when re-importing from CentOS (point CENTOS_DIR at the checkout):
//   CENTOS_DIR=/path/to/centenarian-os tsx scripts/gen-health-data.ts
//
// It does NOT touch the database. Stage tags are stripped, APA in-line citations
// and `## Sources` bibliographies are preserved (these are CITED courses).

import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "csv-parse/sync";
import type { AuthoredCourse, AuthoredLesson } from "./data/authored-course";
import type { QuizContent } from "../src/lib/quiz";

// CentOS source checkout (read-only). Override with CENTOS_DIR.
const CENTOS =
  process.env.CENTOS_DIR ??
  "/Users/bam/Code_NOiCloud/ai-builds/gemini/centenarian-os";
const DATA_DIR = join(process.cwd(), "scripts", "data");

if (!existsSync(CENTOS)) {
  console.error(`CentOS source not found at ${CENTOS}. Set CENTOS_DIR.`);
  process.exit(1);
}

// ── cleaning ────────────────────────────────────────────────────────────────
// CentOS health content uses several families of stage tags we must strip while
// KEEPING the prose and the APA in-line citations:
//   • "Read Your Body's Data" / CES / CNC / CPT: audio beats [HOOK]/[TEACH]/
//     [PICTURE]/[RECALL]/[CHECK]/[Beat]/[Sound:…] (turned into headings/removed).
//   • ECS: video-script tags **[VISUAL: …]**, **[SLIDE NOTES: …]**, **[VISUAL CUE: …]**,
//     **[SCRIPT:]**, **[PAUSE - N seconds]**, **[Knowledge Check…]**, **[Evidence Level: X]**,
//     **[Complexity Note: …]**, and **[Citation: Author, Year]** (unwrapped → "(Author, Year)").
//   • speedway: narration tags *[Beat]*, *[Pause]*, *[Sound: …]*, *[Transition: …]*,
//     *[Theme music …]*, **HOST:** speaker labels and *[delivery cue]* asides.

const BEAT_HEADINGS: Record<string, string> = {
  RECALL: "Quick recall",
  WELCOME: "Welcome",
  HOOK: "Why this matters",
  TEACH: "The idea",
  PICTURE: "Picture it",
  "ON THE TEST": "On the test",
  "WATCH OUT": "Watch out",
  CHECK: "Quick check",
  REMEMBER: "Remember this",
  STORY: "Story",
  SOURCES: "Sources",
};

// Normalise line endings up front so per-line ^/$ anchors behave (CentOS CSVs mix
// CRLF and LF inside fields).
const crlf = (s: string) => (s ?? "").replace(/\r\n?/g, "\n");

function stripBeats(md: string): string {
  let out = crlf(md);
  for (const [tag, heading] of Object.entries(BEAT_HEADINGS)) {
    out = out.split(`[${tag}]`).join(`\n## ${heading}\n`);
  }
  return out
    .replace(/\[Sound:[^\]]*\]/gi, "")
    .replace(/\[Music:[^\]]*\]/gi, "")
    .replace(/\[Beat\]/gi, "")
    .replace(/\[tone\]/gi, "");
}

// Drop the named ECS video-production tags (visual/slide/timing/meta cues) but
// PRESERVE citations by unwrapping **[Citation: X]** -> (X).
// Whole-line production labels (a bold "**Label:**" at the start of a line). These
// are slide-deck/recording directions, not lesson prose, so the entire line goes.
const ECS_PROD_LINE_LABELS = [
  "VISUAL CUE",
  "VISUAL",
  "SLIDE NOTES",
  "SLIDE",
  "SCRIPT",
  "Target Duration",
  "Audience",
  "Reading Level",
  "Duration",
  "Timing",
];

function stripEcsTags(md: string): string {
  let out = crlf(md);
  // Unwrap citations first so we keep the APA reference inline.
  out = out.replace(/\*\*\[Citation:\s*([^\]]+)\]\*\*/gi, "($1)");
  // Drop slide headings ("### Slide 3: ...") — production scaffolding.
  out = out.replace(/^#{2,4}\s*Slide\s*\d+[^\n]*$/gim, "");
  // Drop the per-lecture production title/subtitle ("# Module 1, Lecture 1: ..." and
  // "## Video Lecture Script with Slide Notes & Timing") — the lesson has a title field.
  out = out.replace(/^#\s*Module\s*\d+,\s*Lecture\s*\d+:[^\n]*$/gim, "");
  out = out.replace(/^#{1,3}\s*Video Lecture Script[^\n]*$/gim, "");
  // Drop whole production-direction lines ("**VISUAL CUE:** ...", "**SCRIPT:** ...",
  // "**Target Duration:** ...", etc.) AND bare label lines ("**SCRIPT:**" alone).
  for (const label of ECS_PROD_LINE_LABELS) {
    // Match the label line itself, allowing an optional "(timecode)" or other
    // parenthetical between the label and the colon, e.g. "**SCRIPT (2:00-3:30):**".
    // No leading \s* — that would swallow the previous line's newline and break the
    // per-line ^ anchor across consecutive labels.
    const re = new RegExp(`^[ \\t]*\\*\\*${label}\\b[^\\n*]*:\\*\\*[^\\n]*$`, "gim");
    out = out.replace(re, "");
  }
  // Inline italic recording directions: *Pause here and ask: "..."*, *Beat*, etc.
  // (single-asterisk emphasis that is a stage cue, not prose). Only strip when the
  // italic span starts with a known cue verb so we don't eat ordinary emphasis.
  out = out.replace(
    /\*\s*(Pause|Beat|Transition|Note to narrator|Ask|Emphasize)\b[^*\n]*\*/gi,
    "",
  );
  // Drop every remaining **[ ... ]** production tag (PAUSE, Knowledge Check,
  // Evidence Level, Complexity Note, etc.).
  out = out.replace(/\*\*\[[^\]]*\]\*\*/g, "");
  // Normalise the bibliography heading to the platform convention.
  out = out.replace(/^#{1,3}\s*REFERENCES.*$/gim, "## Sources");
  // Section timing markers like "## OPENING HOOK (0:00-2:00)" -> drop the timecode.
  out = out.replace(/\s*\(\d{1,2}:\d{2}\s*[–-]\s*\d{1,2}:\d{2}\)/g, "");
  // A leading horizontal rule left after the metadata block is removed.
  out = out.replace(/^\s*---\s*$/m, "");
  return out;
}

// Clean the speedway PART 2 podcast script into a readable lesson body.
function stripSpeedwayScript(md: string): string {
  let out = crlf(md);
  // Remove speaker labels and the *[delivery cue]* that follows them on the line.
  out = out.replace(/\*\*HOST:\*\*\s*\*\[[^\]]*\]\*/g, "");
  out = out.replace(/\*\*HOST:\*\*/g, "");
  out = out.replace(/\*\*[A-Z][A-Z .'-]{1,30}:\*\*/g, ""); // other speakers (e.g. **NARRATOR:**)
  // Remove bracketed stage directions: **[Sound: …]**, *[Beat]*, *[Pause]*,
  // *[Transition: …]*, *[Theme music …]*, *[Sound: …]*, and bare [CUT-..]/[Beat].
  out = out.replace(/\*\*\[[^\]]*\]\*\*/g, "");
  out = out.replace(/\*\[[^\]]*\]\*/g, "");
  out = out.replace(/\[(Beat|Pause|CUT-[^\]]*|Sound:[^\]]*|Music:[^\]]*|Transition:[^\]]*)\]/gi, "");
  // Clean segment headings: '## SEGMENT 1: "Title" — SUBJECT (4 minutes) [CUT-1B]'
  out = out.replace(/^##\s*SEGMENT\s*\d+:\s*"?([^"\n—(]+)"?.*$/gim, "## $1");
  out = out.replace(/^##\s*COLD OPEN[^\n]*$/gim, "## Cold open");
  out = out.replace(/^##\s*CLOSING[^\n]*$/gim, "## Closing");
  return out;
}

function tidy(md: string): string {
  return md
    .replace(/\*\[Pause\]\*/gi, "")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ── quiz conversion ───────────────────────────────────────────────────────────
interface CentosQuiz {
  passingScore?: number;
  questions: {
    questionText: string;
    options: { id: string; text: string }[];
    correctOptionId: string;
    explanation?: string;
    citation?: string;
  }[];
}
function convertCentosQuiz(c: CentosQuiz): QuizContent {
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

// ECS quizzes use a witus-shaped schema already: {question, options:string[],
// correctIndex, explanation, citation}.
interface EcsQuiz {
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation?: string;
    citation?: string;
  }[];
}
function convertEcsQuiz(c: EcsQuiz): QuizContent {
  return {
    passingScore: 80,
    questions: (c.questions ?? []).map((q) => ({
      prompt: q.question,
      options: q.options,
      correctIndex: typeof q.correctIndex === "number" ? q.correctIndex : 0,
      explanation: q.citation
        ? `${q.explanation ?? ""}\n\nReference: ${q.citation}`.trim()
        : q.explanation,
    })),
  };
}

// speedway QUIZ.csv: question,option_a..d,correct_letter,explanation,subject_tag
function convertSpeedwayQuiz(rows: Record<string, string>[]): QuizContent {
  const letterIdx: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
  return {
    passingScore: 70,
    questions: rows
      .filter((r) => (r.question ?? "").trim())
      .map((r) => ({
        prompt: r.question.trim(),
        options: [r.option_a, r.option_b, r.option_c, r.option_d].map((o) => (o ?? "").trim()),
        correctIndex: letterIdx[(r.correct_letter ?? "A").trim().toUpperCase()] ?? 0,
        explanation: (r.explanation ?? "").trim() || undefined,
      })),
  };
}

// ── helpers ───────────────────────────────────────────────────────────────────
function slugify(s: string, max = 60): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, max);
}

function readCsvObjects(path: string): Record<string, string>[] {
  return parse(readFileSync(path, "utf-8"), {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
  }) as Record<string, string>[];
}

function emit(fileSlug: string, exportName: string, course: AuthoredCourse, note: string) {
  const banner = `// AUTO-GENERATED by scripts/gen-health-data.ts — migrated from CentOS.
// ${note}
// Stage tags stripped; APA in-line citations + \`## Sources\` preserved (cited course).
// To re-import: CENTOS_DIR=/path/to/centenarian-os tsx scripts/gen-health-data.ts

import type { AuthoredCourse } from "./authored-course";

export const ${exportName}: AuthoredCourse = ${JSON.stringify(course, null, 2)};
`;
  const out = join(DATA_DIR, `${fileSlug}.ts`);
  writeFileSync(out, banner);
  const quizzes = course.lessons.filter((l) => l.quiz).length;
  console.log(
    `wrote ${fileSlug}.ts — ${course.lessons.length} lessons (${quizzes} quizzes) — ${exportName}`,
  );
}

// ── 1. academy-import CSV courses (text_content + module structure) ────────────
// "Read Your Body's Data" and CES both ship a clean course-import.csv whose
// text_content is already audio-beat-clean. Quizzes ship in a sibling
// quizzes-import.csv keyed by module_order.
function buildFromAcademyCsv(opts: {
  courseCsv: string;
  quizzesCsv?: string;
  title: string;
  description: string;
}): AuthoredCourse {
  const rows = readCsvObjects(opts.courseCsv).filter((r) => (r.lesson_type ?? "text") !== "quiz");
  rows.sort(
    (a, b) =>
      Number(a.module_order) - Number(b.module_order) ||
      Number(a.lesson_order) - Number(b.lesson_order),
  );

  // Group quizzes by module_order to append at the end of each module.
  const quizByModule = new Map<number, QuizContent>();
  if (opts.quizzesCsv && existsSync(opts.quizzesCsv)) {
    for (const q of readCsvObjects(opts.quizzesCsv)) {
      if (!q.quiz_content?.trim()) continue;
      try {
        quizByModule.set(
          Number(q.module_order),
          convertCentosQuiz(JSON.parse(q.quiz_content) as CentosQuiz),
        );
      } catch {
        /* skip malformed */
      }
    }
  }

  const lessons: AuthoredLesson[] = [];
  let prevModule: number | null = null;
  const flushModuleQuiz = (mod: number | null) => {
    if (mod == null) return;
    const quiz = quizByModule.get(mod);
    if (quiz && quiz.questions.length) {
      lessons.push({ slug: `m${mod}-quiz`, title: `Module ${mod} Knowledge Check`, quiz });
    }
  };

  for (const r of rows) {
    const mod = Number(r.module_order);
    if (prevModule != null && mod !== prevModule) flushModuleQuiz(prevModule);
    prevModule = mod;
    const body = tidy(stripBeats(r.text_content ?? ""));
    if (!body) continue;
    lessons.push({
      slug: `m${mod}-l${r.lesson_order}-${slugify(r.title)}`.slice(0, 90),
      title: r.title,
      body,
    });
  }
  flushModuleQuiz(prevModule);

  return { title: opts.title, description: opts.description, lessons };
}

// ── 2. NASM CPT — chapter folders with lessons/*.md + _quiz-content.json ───────
function buildNasmCpt(): AuthoredCourse {
  const root = join(CENTOS, "docs", "nasm-curriculum");
  const chapters = readdirSync(root)
    .filter((d) => /^ch\d+/.test(d) || d === "ch13-pilot")
    .filter((d) => existsSync(join(root, d, "_manifest.json")))
    .sort(
      (a, b) =>
        (parseInt(a.replace(/\D+/g, ""), 10) || 0) - (parseInt(b.replace(/\D+/g, ""), 10) || 0),
    );

  const lessons: AuthoredLesson[] = [];
  for (const ch of chapters) {
    const dir = join(root, ch);
    const manifest = JSON.parse(readFileSync(join(dir, "_manifest.json"), "utf-8")) as {
      module?: { title?: string; order?: number };
      lessons?: { order: number; file: string; title: string; type?: string }[];
    };
    const order = manifest.module?.order ?? (parseInt(ch.replace(/\D+/g, ""), 10) || 0);
    for (const l of (manifest.lessons ?? []).sort((a, b) => a.order - b.order)) {
      // Skip manifest entries with no markdown file (e.g. the per-chapter quiz row,
      // which is built separately from _quiz-content.json below).
      if (!l.file) continue;
      const file = join(dir, l.file);
      if (!existsSync(file)) continue;
      const body = tidy(stripBeats(readFileSync(file, "utf-8")));
      if (!body) continue;
      lessons.push({
        slug: `ch${order}-l${l.order}-${slugify(l.title)}`.slice(0, 90),
        title: l.title,
        body,
      });
    }
    // One quiz per chapter from _quiz-content.json.
    const quizFile = join(dir, "_quiz-content.json");
    if (existsSync(quizFile)) {
      try {
        const quiz = convertCentosQuiz(JSON.parse(readFileSync(quizFile, "utf-8")) as CentosQuiz);
        if (quiz.questions.length) {
          lessons.push({
            slug: `ch${order}-quiz`,
            title: `${manifest.module?.title ?? `Chapter ${order}`} — Knowledge Check`,
            quiz,
          });
        }
      } catch {
        /* skip */
      }
    }
  }

  return {
    title: "NASM CPT: Pass the Personal Trainer Exam",
    description:
      "An audio-first study course for the NASM Certified Personal Trainer (CPT) exam. Work chapter by chapter through the science of training — anatomy, assessment, the OPT model, program design, nutrition, and special populations — then test yourself with a knowledge check after each chapter.",
    lessons,
  };
}

// ── 3. NASM CNC — per-chapter _chNN.json with lessonMarkdown ───────────────────
function buildNasmCnc(): AuthoredCourse {
  const dir = join(CENTOS, "docs", "nasm-cnc-curriculum", "academy-import");
  const files = readdirSync(dir)
    .filter((f) => /^_ch\d+\.json$/.test(f))
    .sort((a, b) => parseInt(a.replace(/\D+/g, ""), 10) - parseInt(b.replace(/\D+/g, ""), 10));

  const lessons: AuthoredLesson[] = [];
  for (const f of files) {
    const raw = JSON.parse(readFileSync(join(dir, f), "utf-8")) as
      | { module?: { title?: string; order?: number }; lessons?: { n: number; title: string; lessonMarkdown: string }[] }
      | { n: number; title: string; lessonMarkdown: string }[];
    const order = parseInt(f.replace(/\D+/g, ""), 10);
    const chapterLessons = Array.isArray(raw) ? raw : raw.lessons ?? [];
    for (const l of [...chapterLessons].sort((a, b) => a.n - b.n)) {
      const body = tidy(stripBeats(l.lessonMarkdown ?? ""));
      if (!body) continue;
      lessons.push({
        slug: `ch${order}-l${l.n}-${slugify(l.title)}`.slice(0, 90),
        title: l.title,
        body,
      });
    }
  }

  return {
    title: "NASM CNC: Nutrition Coaching Certification",
    description:
      "An audio-first study course for the NASM Certified Nutrition Coach (CNC) exam. Build the science of nutrition coaching — macronutrients, energy balance, supplements, behavior change, and real-world meal planning — lesson by lesson, with cited sources throughout.",
    lessons,
  };
}

// ── 4. ECS — Endocannabinoid System (Foundations + Fitness from CSV) ───────────
function buildEcsModule(opts: {
  csv: string;
  title: string;
  description: string;
}): AuthoredCourse {
  const rows = readCsvObjects(opts.csv).sort(
    (a, b) => Number(a.lesson_order) - Number(b.lesson_order),
  );
  const lessons: AuthoredLesson[] = [];
  for (const r of rows) {
    if (r.lesson_type === "quiz") {
      if (!r.quiz_content?.trim()) continue;
      try {
        const quiz = convertEcsQuiz(JSON.parse(r.quiz_content) as EcsQuiz);
        if (quiz.questions.length) {
          lessons.push({ slug: `l${r.lesson_order}-quiz`, title: r.title, quiz });
        }
      } catch {
        /* skip */
      }
      continue;
    }
    const body = tidy(stripBeats(stripEcsTags(r.text_content ?? "")));
    if (!body) continue;
    lessons.push({
      slug: `l${r.lesson_order}-${slugify(r.title)}`.slice(0, 90),
      title: r.title.replace(/^Lecture\s*\d+:\s*/i, "").trim() || r.title,
      body,
    });
  }
  return { title: opts.title, description: opts.description, lessons };
}

// ── 5. speedway — per-episode MASTER.md (PART 2 script) + QUIZ.csv ─────────────
function buildSpeedway(): AuthoredCourse {
  const root = join(CENTOS, "docs", "speedway-course");
  const dirs = readdirSync(root)
    .filter((d) => /^speedway s1e\d+/.test(d))
    .sort(
      (a, b) =>
        parseInt(a.match(/s1e(\d+)/)?.[1] ?? "0", 10) -
        parseInt(b.match(/s1e(\d+)/)?.[1] ?? "0", 10),
    );

  const lessons: AuthoredLesson[] = [];
  for (const d of dirs) {
    const dir = join(root, d);
    const files = readdirSync(dir);
    const masterFile = files.find((f) => /MASTER\.md$/.test(f));
    if (!masterFile) continue;
    const epNum = parseInt(d.match(/s1e(\d+)/)?.[1] ?? "0", 10);
    const md = readFileSync(join(dir, masterFile), "utf-8");

    // Episode title from the 3rd line: ### "The Race That Started It All (1911)"
    const titleLine = md.split("\n").find((l) => /^###\s+"/.test(l)) ?? "";
    const title = titleLine.replace(/^###\s+"?|"?\s*$/g, "").trim() || `Episode ${epNum}`;

    // Extract PART 2 (script) and PART 6 (bibliography).
    const part2 = sliceBetween(md, /^#\s*PART 2[^\n]*$/im, /^#\s*PART 3[^\n]*$/im);
    const bib = sliceAfter(md, /^#\s*PART 6[^\n]*$/im);

    let body = tidy(stripSpeedwayScript(part2));
    if (bib.trim()) {
      body += `\n\n## Sources\n\n${tidy(bib.replace(/^#\s*PART 6[^\n]*$/im, ""))}`;
    }
    lessons.push({
      slug: `e${epNum}-${slugify(title)}`.slice(0, 90),
      title: `Episode ${epNum}: ${title}`,
      body: body.trim(),
    });

    // Quiz CSV → quiz lesson.
    const quizFile = files.find((f) => /QUIZ.*\.csv$/i.test(f));
    if (quizFile) {
      try {
        const quiz = convertSpeedwayQuiz(readCsvObjects(join(dir, quizFile)));
        if (quiz.questions.length) {
          lessons.push({ slug: `e${epNum}-quiz`, title: `Episode ${epNum} — Quiz`, quiz });
        }
      } catch {
        /* skip */
      }
    }
  }

  return {
    title: "Speedway: The Greatest Spectacle in Learning",
    description:
      "An audio-first documentary course on the Indianapolis 500 and the Indianapolis Motor Speedway — history, engineering, physics, and the innovations that moved from the racetrack to your driveway. Each episode pairs a narrated story with a knowledge check, all cited.",
    lessons,
  };
}

function sliceBetween(md: string, start: RegExp, end: RegExp): string {
  const lines = md.split("\n");
  const s = lines.findIndex((l) => start.test(l));
  if (s < 0) return "";
  const rest = lines.slice(s + 1);
  const e = rest.findIndex((l) => end.test(l));
  return (e < 0 ? rest : rest.slice(0, e)).join("\n");
}
function sliceAfter(md: string, start: RegExp): string {
  const lines = md.split("\n");
  const s = lines.findIndex((l) => start.test(l));
  if (s < 0) return "";
  const rest = lines.slice(s + 1);
  const e = rest.findIndex((l) => /^#\s*DOCUMENT VERSION/i.test(l));
  return (e < 0 ? rest : rest.slice(0, e)).join("\n");
}

// ── run ────────────────────────────────────────────────────────────────────────
function main() {
  const ecsRoot = join(CENTOS, "content", "tutorials", "ecs");

  // 1. Read Your Body's Data (FDA & Metrics academy-import)
  const rybdDir = join(
    CENTOS,
    "docs",
    "CentOS Courses",
    "FDA and Metrics CentOS version",
    "academy-import",
  );
  emit(
    "read-your-body-course",
    "READ_YOUR_BODY_COURSE",
    buildFromAcademyCsv({
      courseCsv: join(rybdDir, "course-import.csv"),
      quizzesCsv: join(rybdDir, "quizzes-import.csv"),
      title: "Read Your Body's Data: A 5-Week Guide to Living",
      description:
        "A five-week, audio-first course that teaches you to read your own fitness-tracker data — resting heart rate, steps, sleep, and intensity minutes — and turn it into small, compounding habits backed by longevity research. You run an N-of-1 experiment and finish with a personal health blueprint.",
    }),
    "Source: docs/CentOS Courses/FDA and Metrics CentOS version/academy-import",
  );

  // 2. NASM CES (corrective exercise)
  const cesDir = join(CENTOS, "docs", "ces-curriculum", "academy-import");
  emit(
    "nasm-ces-course",
    "NASM_CES_COURSE",
    buildFromAcademyCsv({
      courseCsv: join(cesDir, "course-import.csv"),
      quizzesCsv: join(cesDir, "quizzes-import.csv"),
      title: "NASM CES: Corrective Exercise Specialist",
      description:
        "An audio-first study course for the NASM Corrective Exercise Specialist (CES) exam. Learn the Corrective Exercise Continuum — inhibit, lengthen, activate, integrate — plus assessment and joint-by-joint corrective strategies, with a cited knowledge check for each module.",
    }),
    "Source: docs/ces-curriculum/academy-import",
  );

  // 3. NASM CPT (personal trainer) — chapter folders
  emit("nasm-cpt-course", "NASM_CPT_COURSE", buildNasmCpt(), "Source: docs/nasm-curriculum");

  // 4. NASM CNC (nutrition coach) — chapter JSONs
  emit(
    "nasm-cnc-course",
    "NASM_CNC_COURSE",
    buildNasmCnc(),
    "Source: docs/nasm-cnc-curriculum/academy-import",
  );

  // 5. ECS — Endocannabinoid System (Foundations + Fitness, the two with clean CSVs)
  emit(
    "ecs-foundations-course",
    "ECS_FOUNDATIONS_COURSE",
    buildEcsModule({
      csv: join(ecsRoot, "ecs-foundations-module1-import-ver0.csv"),
      title: "The Endocannabinoid System: Foundations",
      description:
        "An audio-first introduction to the endocannabinoid system (ECS) — your body's own cannabis-like signaling network. Learn what the ECS is, the messengers and receptors it uses, and why it matters for health, with cited sources and a knowledge check per lesson.",
    }),
    "Source: content/tutorials/ecs/ecs-foundations-module1-import-ver0.csv",
  );
  emit(
    "ecs-fitness-course",
    "ECS_FITNESS_COURSE",
    buildEcsModule({
      csv: join(ecsRoot, "fitness-ecs-module1-import.csv"),
      title: "The Endocannabinoid System: Exercise & Fitness",
      description:
        "How movement tunes your endocannabinoid system (ECS). This audio-first course covers the 'runner's high', finding your intensity sweet spot, cardio and strength effects on ECS chemistry, and building a personal ECS-friendly fitness plan — cited throughout.",
    }),
    "Source: content/tutorials/ecs/fitness-ecs-module1-import.csv",
  );

  // 6. speedway (goes to ElementaryMBA, not health — but generated here)
  emit("speedway-course", "SPEEDWAY_COURSE", buildSpeedway(), "Source: docs/speedway-course");

  console.log("\nDone. Generated data modules in scripts/data/.");
}

main();
