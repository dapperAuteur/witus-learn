import { parse } from "csv-parse/sync";
import { convertCentosQuiz, type CentosQuiz } from "./centos-content";
import { STRATEGIES, measureBank, optionLength, strategyValue, type BankMeasure, type Strategy } from "../../src/lib/quiz-integrity";

// The length measures, applied to the BVC episode quizzes that live in gitignored CSVs.
//
// scripts/check-length-balance.ts reads quiz banks out of the TypeScript course files under scripts/data/,
// so the 2026-10-14 length-balance sweep never saw the Better Vice Club episodes: those are seeded by
// scripts/seed-bvc-real.ts from content/bvc/bvc-episode-N-<slug>-lessons.csv, one quiz row per episode,
// through convertCentosQuiz. The same CSV is seeded into THREE schools (the BVC tenant, then Season 1 is
// shared with learn-witus and elementary-mba), so one unbalanced CSV is three unbalanced quizzes.
//
// Pure apart from csv-parse: scripts/check-csv-quiz-balance.ts does the file I/O, and the Vitest fixture
// is a CSV string, never the real content.

/** The filename the seed picks up. A backup copy (`...-lessons.bak-2026-11-09.csv`) does not match it. */
export const EPISODE_FILE = /^bvc-episode-(\d+)-(.+)-lessons\.csv$/;

/** Season the seed assigns: episodes 1-7 are Season 1 (open, shared with the other schools), 8-14 S2, 15-21 S3. */
export const seasonOf = (episode: number): number => Math.ceil(episode / 7);

/** Seasons shared beyond the BVC tenant by scripts/seed-bvc-real.ts (its `shares` block). */
export const SHARED_SEASONS: readonly number[] = [1];

export interface EpisodeFile {
  file: string;
  episode: number;
  slug: string;
  season: number;
}

export function episodeFile(file: string): EpisodeFile | null {
  const m = file.match(EPISODE_FILE);
  if (!m) return null;
  const episode = Number(m[1]);
  return { file, episode, slug: m[2], season: seasonOf(episode) };
}

/**
 * convertCentosQuiz caps a regular quiz at its first 10 questions and keeps every question only when
 * the title marks a final or exam. The seed passes no title, so the bank a learner meets is the first
 * 10; this title is used only to measure the WHOLE CSV bank as well, so a fix covers the questions the
 * cap hides too (a later re-title would otherwise ship them unbalanced).
 */
const UNCAPPED_TITLE = "comprehensive (every question, for measuring only)";

export interface MeasuredQuestion {
  prompt: string;
  lens: number[];
  correctIndex: number;
  /** 0 = the correct option is the shortest, options - 1 = the longest. */
  rank: number;
  values: Record<Strategy, number>;
}

export interface CsvQuizBank {
  file: string;
  episode: number;
  slug: string;
  season: number;
  lessonOrder: number;
  title: string;
  /** The bank as scripts/seed-bvc-real.ts stores it: convertCentosQuiz with no title, so at most 10 questions. */
  seeded: BankMeasure;
  /** Every question in the CSV, through the same converter. */
  full: BankMeasure;
  /** Per-question detail of the full bank, in CSV order; the first `seeded.size` are the seeded ones. */
  questions: MeasuredQuestion[];
}

interface Row {
  lesson_order?: string;
  title?: string;
  lesson_type?: string;
  quiz_content?: string;
}

function rankOf(lens: number[], correct: number): number {
  return lens.filter((l, i) => i !== correct && l < lens[correct]).length;
}

/** Every quiz row of one episode CSV, measured as the seed ships it and in full. */
export function banksFromCsv(file: string, csvText: string): CsvQuizBank[] {
  const ep = episodeFile(file);
  if (!ep) return [];
  const rows = parse(csvText, { columns: true, skip_empty_lines: true, relax_column_count: true }) as Row[];
  const out: CsvQuizBank[] = [];
  for (const r of rows) {
    if (r.lesson_type !== "quiz" || !r.quiz_content?.trim()) continue;
    const raw = JSON.parse(r.quiz_content) as CentosQuiz;
    const seededQuiz = convertCentosQuiz(raw);
    const fullQuiz = convertCentosQuiz(raw, UNCAPPED_TITLE);
    const questions: MeasuredQuestion[] = fullQuiz.questions.map((q) => {
      const lens = q.options.map(optionLength);
      return {
        prompt: q.prompt,
        lens,
        correctIndex: q.correctIndex,
        rank: rankOf(lens, q.correctIndex),
        values: Object.fromEntries(STRATEGIES.map((st) => [st, strategyValue(lens, q.correctIndex, st)])) as Record<
          Strategy,
          number
        >,
      };
    });
    out.push({
      ...ep,
      lessonOrder: Number(r.lesson_order ?? 0),
      title: r.title || "Knowledge Check",
      seeded: measureBank(seededQuiz.questions),
      full: measureBank(fullQuiz.questions),
      questions,
    });
  }
  return out;
}

export type Verdict = "pass" | "fail" | "small";

/** What the /teach warning would say about the bank the seed ships: small banks have no verdict. */
export function verdictOf(m: BankMeasure): Verdict {
  if (!m.measured) return "small";
  return m.pass ? "pass" : "fail";
}

export const pct = (n: number): string => `${Math.round(n * 100)}%`;

function describe(m: BankMeasure): string {
  const v = verdictOf(m);
  if (v === "small") return `${m.size} qs, too small to measure`;
  return `${m.size} qs, ${m.balance.strategy} ${pct(m.balance.score)} of limit ${pct(m.balance.limit)}, ${v.toUpperCase()}`;
}

/** One line per bank: episode, season, what the seed ships, and the whole CSV. */
export function formatBank(b: CsvQuizBank): string {
  const flag = verdictOf(b.seeded) === "fail" ? "FAIL" : verdictOf(b.seeded) === "pass" ? " ok " : " -- ";
  const shared = SHARED_SEASONS.includes(b.season) ? "shared" : "      ";
  return (
    `  ${flag}  ep ${String(b.episode).padStart(2)}  ${b.slug.padEnd(16)} S${b.season} ${shared}  ` +
    `seeded: ${describe(b.seeded)}  |  full: ${describe(b.full)}`
  );
}

/** Where the correct option sits, as the --detail view names it. */
export function positionName(q: MeasuredQuestion): string {
  const n = q.lens.length;
  if (q.rank === n - 1) return "longest";
  if (q.rank === 0) return "shortest";
  if (q.rank === 1) return "2nd shortest";
  if (q.rank === n - 2) return "2nd longest";
  return `rank ${q.rank + 1} of ${n}`;
}
