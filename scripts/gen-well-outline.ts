import { WELL_ORIENTATION_SCOPE_COURSE } from "./data/well-orientation-scope-course";
import { WELL_COACHING_PSYCHOLOGY_COURSE } from "./data/well-coaching-psychology-course";
import { WELL_COACHING_MOVEMENT_COURSE } from "./data/well-coaching-movement-course";
import { WELL_COACHING_NUTRITION_COURSE } from "./data/well-coaching-nutrition-course";
import { WELL_RECOVERY_STRESS_COURSE } from "./data/well-recovery-stress-course";
import { WELL_SLEEP_COURSE } from "./data/well-sleep-course";
import { WELL_MENTAL_WELLBEING_COURSE } from "./data/well-mental-wellbeing-course";
import { WELL_MOVEMENT_LONGEVITY_COURSE } from "./data/well-movement-longevity-course";
import { WELL_CENTENARIAN_CAPSTONE_COURSE } from "./data/well-centenarian-capstone-course";

const COURSES = [
  ["00", WELL_ORIENTATION_SCOPE_COURSE],
  ["01", WELL_COACHING_PSYCHOLOGY_COURSE],
  ["02", WELL_COACHING_MOVEMENT_COURSE],
  ["03", WELL_COACHING_NUTRITION_COURSE],
  ["04", WELL_RECOVERY_STRESS_COURSE],
  ["05", WELL_SLEEP_COURSE],
  ["06", WELL_MENTAL_WELLBEING_COURSE],
  ["07", WELL_MOVEMENT_LONGEVITY_COURSE],
  ["99", WELL_CENTENARIAN_CAPSTONE_COURSE],
] as const;

const out: string[] = [];
let totalLessons = 0, totalQuestions = 0, totalSources = 0;

for (const [pos, course] of COURSES) {
  out.push(`\n## WELL-${pos} · ${course.title}\n`);
  out.push(`**Description:** ${course.description}\n`);
  let section = "";
  for (const l of course.lessons) {
    totalLessons++;
    if (l.section && l.section !== section) { section = l.section; out.push(`\n### ${section}\n`); }
    if (l.quiz) {
      const n = l.quiz.questions.length;
      totalQuestions += n;
      const serve = l.quiz.questionsPerAttempt ?? Math.min(10, n);
      out.push(`- **${l.title}** — QUIZ: ${n} questions pooled, ${serve} served, pass ${l.quiz.passingScore}%`);
      continue;
    }
    out.push(`- **${l.title}**`);
    const body = l.body ?? "";
    // Bold lead-ins are the lesson's claim structure.
    const beats = [...body.matchAll(/^\*\*(.+?)\*\*/gm)].map(m => m[1].replace(/\.$/, ""));
    if (beats.length) out.push(`  - Beats: ${beats.join(" · ")}`);
    const vocab = body.match(/## Vocabulary\n([\s\S]*?)(?=\n## |$)/);
    if (vocab) {
      const terms = [...vocab[1].matchAll(/^- \*\*(.+?)\*\*/gm)].map(m => m[1]);
      if (terms.length) out.push(`  - Vocabulary: ${terms.join(", ")}`);
    }
    const src = body.match(/## Sources\n([\s\S]*?)$/);
    if (src) {
      const cites = src[1].split("\n\n").map(s => s.trim()).filter(Boolean);
      totalSources += cites.length;
      out.push(`  - Sources (${cites.length}): ${cites.map(c => c.replace(/\s+/g, " ").slice(0, 120)).join(" | ")}`);
    }
    const reveals = [...body.matchAll(/^:::reveal (.+?) \|\|\|/gm)].map(m => m[1]);
    if (reveals.length) out.push(`  - Self-checks: ${reveals.map(r => `"${r}"`).join(" ")}`);
  }
}

console.log(`# WELL Program — full outline for adversarial review

Generated ${new Date === undefined ? "" : ""}from the committed course data, so it matches what is actually seeded.

**Program:** 9 courses, ${totalLessons} lessons, ${totalQuestions} pooled quiz questions, ${totalSources} lesson-level source blocks.
${out.join("\n")}
`);
