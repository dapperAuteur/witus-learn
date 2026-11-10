import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "csv-parse/sync";
import type { AuthoredCourse, AuthoredLesson } from "./data/authored-course";
import type { QuizContent } from "../src/lib/quiz";
import { allSeedEntries, loadCourse } from "./lib/seed-registry";
import { ALLOWED_AI_MENTIONS } from "./lib/no-ai-sources-allowlist";
import { formatHit, isAllowed, scanCourse, scanText, staleAllowlist, type AiSourceHit } from "./lib/no-ai-sources";
import { episodeFile } from "./lib/csv-quiz-balance";

/**
 * Guard: an AI tool is never a source (BAM, 2026-11-09: "no AI sources in courses").
 *
 *   pnpm check:no-ai-sources            # exit 1 on any unallowed citation or attribution of an AI
 *   pnpm check:no-ai-sources --list     # also print the protected (quoted, blockquote) and allowed hits
 *
 * WHAT IT READS, all offline, no DATABASE_URL:
 *   1. every course the seed registry knows (scripts/lib/seed-registry.ts), loaded from its data
 *      module under scripts/data/; gitignored generated modules that are not on this machine are
 *      counted as unreadable, never failed, the same as the other guards;
 *   2. the tracked JSON courses under scripts/data/langchain/<dir>/course.json, with each text
 *      lesson's .md file, built the way scripts/seed-langchain.ts builds them;
 *   3. when present on this machine only: the local private courses in content/private-courses/
 *      (`{ slug, course }` JSON, see scripts/seed-local-private.ts) and the Better Vice Club episode
 *      CSVs in content/bvc/ (text_content and the quiz JSON). Both are gitignored, so CI sees neither
 *      and the run here is the only check they get.
 *
 * WHAT COUNTS AS A HIT is in scripts/lib/no-ai-sources.ts: citation and attribution shapes, never a
 * bare name, so the AI courses can keep teaching about ChatGPT. Text inside quotation marks, a
 * blockquote or a code fence is protected and reported, not failed. A reviewed exception lives in
 * scripts/lib/no-ai-sources-allowlist.ts with course, lesson, the exact phrase and a reason; a stale
 * entry fails the run so the list cannot rot.
 *
 * WHY: the CREW research agents (2026-10-26) kept finding brief facts that came from an AI chat and
 * no source. Every other citation rule says fetch-or-do-not-cite; this one makes sure the AI itself
 * is never written down as the thing that was fetched.
 */

const listAll = process.argv.includes("--list");
const root = process.cwd();

interface Loaded {
  slug: string;
  course: AuthoredCourse;
  from: string;
}

async function registeredCourses(): Promise<{ loaded: Loaded[]; unreadable: string[] }> {
  const loaded: Loaded[] = [];
  const unreadable: string[] = [];
  const seen = new Set<string>();
  for (const entry of allSeedEntries()) {
    const key = `${entry.slug}::${entry.modulePath ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const course = await loadCourse(entry);
    if (course) loaded.push({ slug: entry.slug, course, from: entry.modulePath ?? entry.file });
    else unreadable.push(entry.slug);
  }
  return { loaded, unreadable };
}

/** scripts/data/langchain/<dir>/course.json plus one .md per text lesson (scripts/seed-langchain.ts). */
function langchainCourses(): Loaded[] {
  const dir = join(root, "scripts", "data", "langchain");
  if (!existsSync(dir)) return [];
  const out: Loaded[] = [];
  for (const sub of readdirSync(dir, { withFileTypes: true })) {
    if (!sub.isDirectory()) continue;
    const manifestPath = join(dir, sub.name, "course.json");
    if (!existsSync(manifestPath)) continue;
    const manifest = JSON.parse(readFileSync(manifestPath, "utf-8")) as {
      slug: string;
      title: string;
      description: string;
      lessons: Array<
        | { type: "text"; slug: string; title: string; file: string; recall?: { prompt: string; answer: string }[] }
        | { type: "quiz"; slug: string; title: string; quiz: QuizContent }
      >;
    };
    const lessons: AuthoredLesson[] = manifest.lessons.map((l) =>
      l.type === "quiz"
        ? { slug: l.slug, title: l.title, quiz: l.quiz }
        : { slug: l.slug, title: l.title, body: readFileSync(join(dir, sub.name, l.file), "utf-8"), recallContent: l.recall },
    );
    out.push({
      slug: manifest.slug,
      course: { title: manifest.title, description: manifest.description, lessons },
      from: `scripts/data/langchain/${sub.name}/course.json`,
    });
  }
  return out;
}

/** content/private-courses/*.json: `{ slug, course }`, local only (scripts/seed-local-private.ts). */
function localPrivateCourses(): Loaded[] {
  const dir = join(root, "content", "private-courses");
  if (!existsSync(dir)) return [];
  const out: Loaded[] = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".json")).sort()) {
    try {
      const raw = JSON.parse(readFileSync(join(dir, file), "utf-8")) as { slug?: string; course?: AuthoredCourse };
      if (raw.slug && raw.course && Array.isArray(raw.course.lessons)) {
        out.push({ slug: raw.slug, course: raw.course, from: `content/private-courses/${file}` });
      }
    } catch {
      console.error(`  (could not read content/private-courses/${file}; skipped)`);
    }
  }
  return out;
}

/** content/bvc/bvc-episode-N-<slug>-lessons.csv: text_content and the quiz JSON, local only. */
function bvcEpisodeHits(): { hits: AiSourceHit[]; episodes: number } {
  const dir = join(root, "content", "bvc");
  if (!existsSync(dir)) return { hits: [], episodes: 0 };
  const hits: AiSourceHit[] = [];
  let episodes = 0;
  for (const file of readdirSync(dir).sort()) {
    const ep = episodeFile(file);
    if (!ep) continue;
    episodes++;
    type Row = { title?: string; lesson_order?: string; text_content?: string; quiz_content?: string };
    const rows = parse(readFileSync(join(dir, file), "utf-8"), {
      columns: true,
      skip_empty_lines: true,
      relax_column_count: true,
    }) as Row[];
    for (const r of rows) {
      const lesson = `${r.lesson_order ?? "?"} ${r.title ?? ""}`.trim();
      if (r.text_content) hits.push(...scanText(r.text_content, { course: `bvc:${ep.slug}`, lesson, field: "text_content" }));
      if (r.quiz_content?.trim()) {
        try {
          const quiz = JSON.parse(r.quiz_content) as {
            questions?: Array<{ questionText?: string; explanation?: string; options?: Array<{ text?: string }> }>;
          };
          quiz.questions?.forEach((q, i) => {
            const texts = [q.questionText, q.explanation, ...(q.options ?? []).map((o) => o.text)];
            for (const t of texts) if (t) hits.push(...scanText(t, { course: `bvc:${ep.slug}`, lesson, field: `quiz[${i}]` }));
          });
        } catch {
          // A quiz cell that is not JSON is the seed's problem, not this guard's.
        }
      }
    }
  }
  return { hits, episodes };
}

async function main(): Promise<number> {
  const { loaded, unreadable } = await registeredCourses();
  const langchain = langchainCourses();
  const local = localPrivateCourses();
  const bvc = bvcEpisodeHits();

  const hits: AiSourceHit[] = [...bvc.hits];
  for (const { slug, course } of [...loaded, ...langchain, ...local]) hits.push(...scanCourse(slug, course));

  const protectedHits = hits.filter((h) => h.protection !== null);
  const open = hits.filter((h) => h.protection === null);
  const allowed = open.filter((h) => isAllowed(h, ALLOWED_AI_MENTIONS));
  const violations = open.filter((h) => !isAllowed(h, ALLOWED_AI_MENTIONS));
  const stale = staleAllowlist(open, ALLOWED_AI_MENTIONS);

  console.log(
    `No AI sources: scanned ${loaded.length} registered course(s), ${langchain.length} JSON course(s)` +
      (local.length ? `, ${local.length} local private course(s)` : "") +
      (bvc.episodes ? `, ${bvc.episodes} BVC episode CSV(s)` : "") +
      `; ${unreadable.length} unreadable (gitignored module not on this machine). ` +
      `${hits.length} AI mention(s) in citation shape: ${protectedHits.length} protected, ${allowed.length} allowed, ${violations.length} violation(s).`,
  );

  if (listAll) {
    if (protectedHits.length) {
      console.log("\nProtected (quoted, blockquote or code block; a mention, not a citation):");
      for (const h of protectedHits) console.log(formatHit(h));
    }
    if (allowed.length) {
      console.log("\nAllowed by scripts/lib/no-ai-sources-allowlist.ts:");
      for (const h of allowed) console.log(`${formatHit(h)}\n      reason: ${isAllowed(h, ALLOWED_AI_MENTIONS)?.reason}`);
    }
    if (unreadable.length) console.log(`\nUnreadable here: ${unreadable.join(", ")}`);
  }

  let failed = false;

  if (stale.length) {
    failed = true;
    console.error("\nAllowlist entries that match nothing any more (fixed content, or a typo). Delete them from scripts/lib/no-ai-sources-allowlist.ts:");
    for (const a of stale) console.error(`  ${a.course} / ${a.lesson}: "${a.match}"`);
  }

  if (violations.length) {
    failed = true;
    console.error("\nAn AI tool is never a source. These lessons cite or attribute a fact to one:");
    for (const h of violations) console.error(formatHit(h));
    console.error(
      "\nFix the lesson: trace the fact to a fetched, human-authored source (a primary document, a book, an\n" +
        "article, a dataset, an official page) and cite that in APA 7, or drop the fact. If the line is a\n" +
        "quotation or an example of what not to do, put it in quotation marks or a blockquote. Only a reviewed\n" +
        "mention that is not a citation goes in scripts/lib/no-ai-sources-allowlist.ts, with the reason.\n" +
        "Rule: CLAUDE.md, \"No-AI-sources rule\".",
    );
  }

  return failed ? 1 : 0;
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(err);
    process.exit(2);
  },
);
