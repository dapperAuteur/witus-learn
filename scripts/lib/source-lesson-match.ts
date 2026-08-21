/**
 * Assign each quiz question the lesson that teaches its answer.
 *
 * WHY. Every question in this catalog is supposed to carry `sourceLessonSlug`: it is what turns a
 * wrong answer into "reread this lesson" instead of "you got it wrong". The health and speedway
 * courses were migrated from CentOS, whose quiz files carry no lesson association at all, so 880 of
 * their questions shipped without one. `pnpm audit:course` made that visible.
 *
 * HOW. Two mechanisms, in order of confidence:
 *
 *  1. **Structural.** When a quiz's section contains exactly one teaching lesson, that lesson IS the
 *     source. No inference, no chance of being wrong. This covers the ECS and speedway courses,
 *     where the generator emits one quiz per lesson or per episode.
 *  2. **BM25 over the candidate lessons**, for a chapter quiz whose section holds several lessons.
 *     The query is the question's prompt plus its CORRECT option plus its explanation, because those
 *     three name the thing being taught; the distractors deliberately name things that are not.
 *     BM25 rather than raw overlap because lesson lengths vary by an order of magnitude and a plain
 *     term count hands every question to the longest lesson in the chapter.
 *
 * WHEN IT DECLINES. If the best candidate does not beat the runner-up by `MARGIN`, nothing is
 * assigned. A wrong "reread this lesson" link is worse than no link: it sends a learner who already
 * got the question wrong to a lesson that does not contain the answer, and they have no reason to
 * doubt it. Leaving it unset keeps the honest status quo for that question.
 */

import type { AuthoredLesson } from "../data/authored-course";

/** How far ahead of the runner-up the winner must be, as a share of the winner's score. */
const MARGIN = 0.15;
/** Standard BM25 constants. k1 damps term-frequency saturation, b controls length normalization. */
const K1 = 1.5;
const B = 0.75;

const STOP = new Set(
  ("a an the and or but of to in on for with without from by as at is are was were be been being " +
    "this that these those it its which what who whom whose how why when where than then there here " +
    "not no nor do does did doing done can could should would may might must will shall have has had " +
    "you your yours they them their we our us he she his her him one two both each any all most more " +
    "less least best better worst about into over under between during before after above below up " +
    "down out off again further once only own same so too very just also").split(/\s+/),
);

/** Words worth matching on: numbers survive whole, because a figure is the most distinctive token a
 *  lesson can share with a question about it. */
function tokens(text: string): string[] {
  return (text.toLowerCase().match(/[a-z][a-z-]{2,}|\d[\d.,%]*/g) ?? []).filter(
    (t) => !STOP.has(t) && t.length >= 3,
  );
}

interface Doc {
  slug: string;
  tf: Map<string, number>;
  length: number;
}

function buildDocs(lessons: AuthoredLesson[]): Doc[] {
  return lessons.map((l) => {
    const ts = tokens(`${l.title} ${l.body ?? ""}`);
    const tf = new Map<string, number>();
    for (const t of ts) tf.set(t, (tf.get(t) ?? 0) + 1);
    return { slug: l.slug, tf, length: ts.length };
  });
}

/** Classic BM25 scoring of one query against one corpus. */
function bm25(query: string[], docs: Doc[]): { slug: string; score: number }[] {
  const n = docs.length;
  const avg = docs.reduce((a, d) => a + d.length, 0) / Math.max(1, n);
  const df = new Map<string, number>();
  for (const t of new Set(query)) {
    df.set(t, docs.filter((d) => d.tf.has(t)).length);
  }
  return docs
    .map((d) => {
      let score = 0;
      for (const t of new Set(query)) {
        const f = d.tf.get(t);
        if (!f) continue;
        const idf = Math.log(1 + (n - df.get(t)! + 0.5) / (df.get(t)! + 0.5));
        score += idf * ((f * (K1 + 1)) / (f + K1 * (1 - B + (B * d.length) / avg)));
      }
      return { slug: d.slug, score };
    })
    .sort((a, b) => b.score - a.score);
}

export interface MatchStats {
  structural: number;
  matched: number;
  declined: number;
}

/**
 * Fill in `sourceLessonSlug` on every question of `quiz` that lacks one, using `candidates` (the
 * teaching lessons of the quiz's own section) and falling back to `wider` (the whole course) when
 * the section holds no teaching lesson, which is how a standalone final is laid out.
 *
 * Mutates the quiz in place and returns what it did, so the generator can report coverage rather
 * than claim it.
 */
export function attachSourceLessons(
  quiz: { questions: { prompt: string; options: string[]; correctIndex: number; explanation?: string; sourceLessonSlug?: string }[] },
  candidates: AuthoredLesson[],
  wider: AuthoredLesson[] = [],
): MatchStats {
  const stats: MatchStats = { structural: 0, matched: 0, declined: 0 };
  const pool = candidates.length > 0 ? candidates : wider;
  if (pool.length === 0) {
    stats.declined += quiz.questions.filter((q) => !q.sourceLessonSlug).length;
    return stats;
  }

  // The unambiguous case: one teaching lesson in this section, so it IS the source.
  if (pool.length === 1) {
    for (const q of quiz.questions) {
      if (q.sourceLessonSlug) continue;
      q.sourceLessonSlug = pool[0].slug;
      stats.structural++;
    }
    return stats;
  }

  const docs = buildDocs(pool);
  for (const q of quiz.questions) {
    if (q.sourceLessonSlug) continue;
    // The correct option and the explanation name what is taught; the distractors name what is not,
    // so including them would pull the match toward whichever lesson covers the wrong answer.
    const correct = q.options[q.correctIndex] ?? "";
    const explanation = (q.explanation ?? "").split(/\n\nReference:/)[0];
    const ranked = bm25(tokens(`${q.prompt} ${correct} ${explanation}`), docs);
    const [top, second] = ranked;
    if (!top || top.score <= 0) {
      stats.declined++;
      continue;
    }
    if (second && second.score > 0 && (top.score - second.score) / top.score < MARGIN) {
      stats.declined++;
      continue;
    }
    q.sourceLessonSlug = top.slug;
    stats.matched++;
  }
  return stats;
}
