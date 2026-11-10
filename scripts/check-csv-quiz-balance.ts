import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { MIN_BANK, STRATEGIES } from "../src/lib/quiz-integrity";
import { SHARED_SEASONS, banksFromCsv, episodeFile, formatBank, pct, positionName, verdictOf, type CsvQuizBank } from "./lib/csv-quiz-balance";

/**
 * Length balance for the Better Vice Club episode quizzes, which live in gitignored CSVs
 * (content/bvc/bvc-episode-N-<slug>-lessons.csv) and so were never seen by the lint guards that read
 * scripts/data/. Each episode's quiz is converted exactly as scripts/seed-bvc-real.ts converts it
 * (convertCentosQuiz, no title, so the first 10 questions) and scored with the same functions as
 * scripts/check-length-balance.ts and the /teach "Quiz checks" section (src/lib/quiz-integrity.ts).
 * A FAIL here is the "N quizzes do not pass the length check yet" warning on /teach, in every school
 * the episode is seeded into: Season 1 goes to the BVC tenant, learn-witus and elementary-mba.
 *
 * Fix by editing option TEXT in the CSV's quiz_content JSON, in place: never reorder options, move the
 * correct option, or edit a prompt (questionKey hashes the prompt, so an edit resets every learner's
 * history for that question). Then re-run until the seeded bank passes, and re-seed
 * (`pnpm seed:bvc:real:prod`, from the machine that holds the CSVs).
 *
 *   pnpm check:csv-quiz-balance                   # every episode; exit 1 if any seeded bank fails
 *   pnpm check:csv-quiz-balance --season 1        # only that season
 *   pnpm check:csv-quiz-balance --detail coffee   # per question: where the correct option sits
 *   pnpm check:csv-quiz-balance --dir <folder>    # CSVs elsewhere than ./content/bvc
 *
 * Not part of `pnpm lint`: the CSVs are not in the repository, so CI has nothing to read.
 */

const argv = process.argv.slice(2);
const argAfter = (flag: string): string | undefined => {
  const i = argv.indexOf(flag);
  return i === -1 ? undefined : argv[i + 1];
};

const dir = argAfter("--dir") ?? join(process.cwd(), "content", "bvc");
const season = argAfter("--season");
const detail = argAfter("--detail");

let files: string[];
try {
  files = readdirSync(dir)
    .map(episodeFile)
    .filter((f): f is NonNullable<typeof f> => f !== null)
    .sort((a, b) => a.episode - b.episode)
    .map((f) => f.file);
} catch {
  console.error(`Cannot read ${dir}. The BVC CSVs are gitignored; run this where they live, or pass --dir <folder>.`);
  process.exit(2);
}
if (files.length === 0) {
  console.error(`No bvc-episode-N-<slug>-lessons.csv files in ${dir}.`);
  process.exit(2);
}

const banks: CsvQuizBank[] = files
  .flatMap((file) => banksFromCsv(file, readFileSync(join(dir, file), "utf-8")))
  .filter((b) => season === undefined || String(b.season) === season);

if (detail !== undefined) {
  const mine = banks.filter((b) => b.slug === detail || String(b.episode) === detail);
  if (mine.length === 0) {
    console.error(`No episode matched ${detail}. Episodes: ${banks.map((b) => `${b.episode} ${b.slug}`).join(", ")}`);
    process.exit(2);
  }
  for (const b of mine) {
    console.log(`\n${b.file}  lesson ${b.lessonOrder}  ${b.title}`);
    console.log(formatBank(b));
    for (const [label, m, qs] of [
      ["seeded (what the seed ships)", b.seeded, b.questions.slice(0, b.seeded.size)],
      ["full CSV bank", b.full, b.questions],
    ] as const) {
      console.log(`\n  ${label}: ${m.size} questions, limit ${pct(m.balance.limit)}`);
      const by = STRATEGIES.map((st) => `${st} ${pct(qs.reduce((a, q) => a + q.values[st], 0) / Math.max(1, qs.length))}`);
      console.log(`  strategies: ${by.join(" · ")}  -> best: always-pick-${m.balance.strategy} ${pct(m.balance.score)}`);
    }
    console.log("");
    b.questions.forEach((q, i) => {
      const inSeed = i < b.seeded.size ? "seeded" : "      ";
      console.log(`    Q${String(i + 1).padStart(2)}  ${inSeed}  ${positionName(q).padEnd(12)}  lens ${q.lens.join("/")}  (correct #${q.correctIndex + 1})  ${q.prompt.slice(0, 70)}`);
    });
  }
  process.exit(0);
}

for (const b of banks) console.log(formatBank(b));

const failing = banks.filter((b) => verdictOf(b.seeded) === "fail");
const failingShared = failing.filter((b) => SHARED_SEASONS.includes(b.season));
const small = banks.filter((b) => verdictOf(b.seeded) === "small");
console.log(
  `\n${files.length} episode files, ${banks.length} quiz banks` +
    (small.length ? ` (${small.length} under ${MIN_BANK} questions, not judged)` : "") +
    `: ${failing.length} seeded bank${failing.length === 1 ? "" : "s"} fail the length check` +
    (failingShared.length
      ? `, ${failingShared.length} of them in Season 1 (seeded into the BVC tenant, learn-witus and elementary-mba).`
      : "."),
);
if (failing.length > 0) {
  console.error(
    "\nEach FAIL is the '... does not pass the length check yet' warning on /teach for that course, in every school\n" +
      "it is seeded into. Edit option text in the CSV's quiz_content (never reorder options or edit a prompt), re-run\n" +
      "with --detail <slug>, then re-seed with `pnpm seed:bvc:real:prod` from the machine that holds the CSVs.",
  );
  process.exit(1);
}
