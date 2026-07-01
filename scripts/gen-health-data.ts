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
  "NARRATOR",
  "Target Duration",
  "Audience",
  "Audiences",
  "Reading Level",
  "Duration",
  "Timing",
  "Prerequisites",
  "Learning Objectives",
];

// Trailing production-scaffolding sections that are NOT lesson prose. Everything from
// the first such heading to (but not including) the bibliography is dropped; the
// bibliography is re-attached separately. These are author notes, embedded quizzes
// (extracted elsewhere), cross-promotion, ASCII pathway diagrams, transitions, etc.
const ECS_SCAFFOLD_SECTION =
  /^#{1,4}\s*(?:\*\*)?(?:LECTURE \d+\s+)?(LEARNING OBJECTIVES|CROSS-COURSE (?:PATHWAY DIAGRAM|CONNECTIONS?|INTEGRATION MAP)|[^\n]*(?:SUMMARY|CONNECTIONS?)\s*[&+]\s*CROSS-COURSE [^\n]*|[^\n]*[&+]\s*CROSS-COURSE CONNECTIONS?|AUDIENCE APPLICATION NOTES?|COMPLEXITY ADAPTATION NOTES?|SCIENTIFIC EVIDENCE AND CONTROVERS\w*|CONTROVERSY|EVIDENCE GRADING|(?:EMBEDDED )?KNOWLEDGE CHECKS?\s*\((?:Used|Embedded)[^\n]*|EMBEDDED KNOWLEDGE CHECKS?|POST-?LECTURE (?:QUIZ|MATERIALS?)|QUIZ QUESTIONS?|COMPREHENSIVE FINAL QUIZ|LECTURE TRANSITION|MODULE \d[^\n]*(?:OVERVIEW|COMPLETION|SUMMARY|STATEMENT)|PREVIEW OF|(?:CLOSING|WRAP-?UP|WHAT'?S COMING NEXT|COURSE PREVIEW|NEXT (?:WEEK|LECTURE|STEPS)|COMING UP)[^\n]*|[^\n]*&\s*KNOWLEDGE CHECK[^\n]*|[^\n]*KNOWLEDGE CHECKS?\s*(?:WITH ANSWERS)?[^\n]*\(Used[^\n]*)\b[^\n]*$/im;

// Promotional / hedging "AI-tell" phrasings carried over from the marketing video
// scripts. We rewrite or delete each so the prose reads like a textbook, not an ad.
// Each entry is [pattern, replacement]; order matters (most-specific first).
const ECS_AI_TELLS: [RegExp, string][] = [
  [/Welcome to the most important discovery in modern medicine that most people have never heard of\.?\s*/gi, "This course introduces a body system most people have never heard of. "],
  [/the most important discovery in modern medicine that most people have never heard of/gi, "a system most people have never heard of"],
  [/,?\s*and why this knowledge could change your life/gi, ""],
  [/but here'?s what blew everyone'?s minds:?\s*/gi, "Notably, "],
  [/here'?s what blew everyone'?s minds:?\s*/gi, ""],
  [/but here'?s what(?:'?s)? (revolutionary|exciting|shocking|surprising|fascinating|wild|mind-blowing)[:,]?\s*/gi, ""],
  [/here'?s what(?:'?s)? (revolutionary|exciting|shocking|surprising|fascinating|wild|mind-blowing)[:,]?\s*/gi, ""],
  [/you'?ll understand your body better than many doctors\.?/gi, ""],
  [/\bThis was HUGE\.?\s*/g, ""],
  [/\b(it'?s|this is) (truly )?(revolutionary|remarkable|incredible|amazing|astonishing|game-changing)\b/gi, "it is significant"],
  [/\bgame-changing\b/gi, "important"],
  [/\bmind-?blowing\b/gi, "striking"],
  [/\blet me tell you\b[:,]?\s*/gi, ""],
  [/\bbelieve it or not[:,]?\s*/gi, ""],
  [/\bthink about it[—,:]?\s*/gi, ""],
];

// Fact-accuracy corrections (NOT style). The ECS Foundations script asserts a flat
// "500 million years" twice for the ECS's evolutionary age. The literature supports
// only a hedged lower bound (the cannabinoid-receptor lineage is conserved for *at
// least* ~500–600 million years; e.g. Elphick & Egertová; McPartland et al.), so the
// false precision is softened to "hundreds of millions of years" — a claim the
// sources unambiguously support — without inventing a more specific figure. Applies
// to both occurrences (Foundations L1 and L5).
const ECS_ACCURACY_FIXES: [RegExp, string][] = [
  [/\bfor (?:over|more than) 500 million years of evolution\b/gi, "for hundreds of millions of years"],
  [/\b500 million years of evolution\b/gi, "hundreds of millions of years"],
  [/\bfor (?:over|more than) 500 million years\b/gi, "for hundreds of millions of years"],
  [/\b(?:over|more than) 500 million years\b/gi, "hundreds of millions of years"],
  [/\b500 million years\b/gi, "hundreds of millions of years"],
  // Neuroscience (~L20–21): the source's clause "not because CECD is proven to
  // Grade A, but because …" is grammatically broken ("proven to Grade A") and hard
  // to parse. Rewrite for readability while keeping the source's exact meaning: the
  // CECD hypothesis is only Grade B, but the lifestyle interventions independently
  // carry Grade A evidence and the ECS provides the mechanistic bridge.
  [
    /\bnot because CECD is proven to Grade A,\s*but because\b/gi,
    "not because the CECD hypothesis itself has Grade A proof (it is only Grade B), but because",
  ],
];

// Pull the bibliography ("## REFERENCES (APA Format)") off the end so the rest of the
// body can be aggressively trimmed without touching the citations (which use en-dashes
// in page ranges and must survive verbatim). Returns [bodyWithoutRefs, refs].
function splitEcsReferences(md: string): [string, string] {
  const lines = crlf(md).split("\n");
  const i = lines.findIndex((l) => /^#{1,4}\s*(REFERENCES|References|Bibliography|Sources)\b/.test(l));
  if (i < 0) return [md, ""];
  const after = lines.slice(i + 1);
  // Stop the bibliography at the next heading (a trailing author-note section).
  const stop = after.findIndex((l) => /^#{1,4}\s/.test(l));
  const refs = (stop < 0 ? after : after.slice(0, stop)).join("\n").trim();
  return [lines.slice(0, i).join("\n"), refs];
}

// Title-Case-ish ALL-CAPS heading → sentence case, keeping obvious acronyms upper.
const KEEP_UPPER = new Set([
  "ECS", "CB1", "CB2", "THC", "CBD", "AEA", "BBB", "HPA", "DNA", "RNA",
  "BDNF", "GI", "HRV", "LTP", "LTD", "ATP", "FAAH", "MAGL", "PEA", "2-AG",
]);
function toSentenceCase(s: string): string {
  return s
    .split(/\s+/)
    .map((w, i) => {
      const bare = w.replace(/[^A-Za-z0-9-]/g, "");
      if (KEEP_UPPER.has(bare.toUpperCase())) return w;
      if (i === 0) return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      return w.toLowerCase();
    })
    .join(" ");
}

// Convert a video-script em-dash to the punctuation that reads best. The ECS scripts
// use the em-dash almost exclusively for asides/appositives (" — ") and a few tight
// noun pairings ("word—word"). A comma reads correctly for both, EXCEPT when the dash
// sits between a complete clause and a following capitalised independent clause, where
// a period is cleaner. References are handled separately, so page-range EN-dashes
// ("381–382") are never touched here.
function deDash(text: string): string {
  let out = text;
  // " — Capital..." that ends one independent clause and starts another → ". "
  out = out.replace(/([^\s—])\s+—\s+([A-Z][a-z])/g, (_m, before: string, after: string) =>
    /[a-z0-9'")!?]/.test(before) ? `${before}. ${after}` : `${before}, ${after}`,
  );
  // Spaced em-dash mid-sentence → comma.
  out = out.replace(/\s+—\s+/g, ", ");
  // Tight em-dash "word—word" → comma+space (appositive).
  out = out.replace(/([A-Za-z0-9'")])—(?=[A-Za-z0-9'"(])/g, "$1, ");
  // Any survivors (around punctuation / line edges) → comma.
  out = out.replace(/\s*—\s*/g, ", ");
  // Tidy up commas we may have produced next to existing punctuation.
  out = out.replace(/,\s*([.,;:!?])/g, "$1");
  out = out.replace(/,\s+,/g, ",");
  return out;
}

function stripEcsTags(md: string): string {
  // 1. Peel off the bibliography so it survives all the aggressive trimming below.
  const [bodyRaw, refs] = splitEcsReferences(md);
  let out = crlf(bodyRaw);

  // 2. Unwrap citations first so we keep the APA reference inline: **[Citation: X]** -> (X).
  out = out.replace(/\*\*\[Citation:\s*([^\]]+)\]\*\*/gi, "($1)");

  // 3. Excise every scaffolding section INDIVIDUALLY (each runs from its heading to the
  //    next heading of the same-or-higher level). These appear both before the lesson
  //    body (LEARNING OBJECTIVES, CROSS-COURSE PATHWAY DIAGRAM) and after it (EMBEDDED
  //    KNOWLEDGE CHECKS, LECTURE TRANSITION, etc.), so a blanket truncate-to-end would
  //    eat real prose. We drop each block in place and keep iterating.
  {
    const headingLevel = (l: string) => {
      const m = l.match(/^(#{1,4})\s/);
      return m ? m[1].length : 0;
    };
    for (let guard = 0; guard < 50; guard++) {
      const lines = out.split("\n");
      const start = lines.findIndex((l) => ECS_SCAFFOLD_SECTION.test(l));
      if (start < 0) break;
      const level = headingLevel(lines[start]) || 2;
      let end = lines.length;
      for (let i = start + 1; i < lines.length; i++) {
        const lvl = headingLevel(lines[i]);
        if (lvl > 0 && lvl <= level) {
          end = i;
          break;
        }
      }
      out = [...lines.slice(0, start), ...lines.slice(end)].join("\n");
    }
  }

  // 4. Drop fenced ASCII-art / diagram code blocks (CROSS-COURSE pathway boxes).
  out = out.replace(/```[\s\S]*?```/g, "");

  // 5. Drop slide headings ("### Slide 3: ...") — production scaffolding.
  out = out.replace(/^#{2,4}\s*Slide\s*\d+[^\n]*$/gim, "");

  // 6. Drop the per-lecture production title/subtitle lines. The lesson carries a title
  //    field, so the leading "# Module 1, Lecture 1: ...", "## Module 1a: ... | Lecture 1",
  //    "## <Course> Course - Module N, (Mini-)Lecture X", "## Video Lecture Script ...",
  //    "### \"Quoted subtitle\"", "#### Integrated Discovery Approach" all go.
  out = out.replace(/^#\s*Module\s*\d+,\s*Lecture\s*\d+:[^\n]*$/gim, "");
  out = out.replace(/^#{1,4}\s*Module\s*\d+[a-z]?:[^\n]*Lecture[^\n]*$/gim, "");
  out = out.replace(/^#{1,4}\s*[^\n]*Course\s*[-–]\s*Module\s*\d+[^\n]*$/gim, "");
  // Top-of-file course/section name H1s ("# Neuroscience for ECS Optimization",
  // "# Nutrition Foundation Course - Module 1, Mini-Lecture 1.1"). The lesson title
  // already carries this; the H1 is production scaffolding.
  out = out.replace(/^#\s+(Neuroscience for ECS Optimization|[A-Z][^\n]*(Foundation Course|for ECS Optimization))[^\n]*$/gim, "");
  out = out.replace(/^#{1,3}\s*Video Lecture Script[^\n]*$/gim, "");
  out = out.replace(/^#{3,4}\s*Integrated Discovery Approach\s*$/gim, "");
  // A heading whose entire content is a quoted string is the script echoing the lesson
  // title ('## "Micronutrients: ECS Enzyme Helpers ..."'). The lesson has a title field.
  out = out.replace(/^#{1,4}\s*"[^"\n]+"\s*$/gim, "");
  // A "**Learning Objectives:**" / "**Prerequisites:**" bold label followed by its bullet
  // list is front-matter scaffolding (Nutrition uses inline labels, not headings). Drop
  // the label line AND the contiguous bullet block that follows it.
  out = out.replace(
    /^[ \t]*\*\*(Learning Objectives|Prerequisites|Objectives)\s*:?\s*\*\*:?[^\n]*\n(?:[ \t]*[-*][^\n]*\n?)*/gim,
    "",
  );
  // An inline "Cross-course connections for this lecture:" label followed by its arrow
  // ("**→ ECS Foundations:** ...") block is cross-promotional scaffolding, not lesson
  // prose. Drop the label line and the contiguous arrow/bullet block beneath it.
  out = out.replace(
    /^[ \t]*(?:\*\*)?Cross-course connections[^\n]*:?(?:\*\*)?[^\n]*\n(?:[ \t]*(?:\*\*)?[-*→][^\n]*\n?|[ \t]*\n)*/gim,
    "",
  );

  // 7. Drop whole production-direction lines ("**VISUAL CUE:** ...", "**SCRIPT:** ...",
  //    "**Target Duration:** ...") AND bare label lines ("**SCRIPT:**" alone).
  for (const label of ECS_PROD_LINE_LABELS) {
    const re = new RegExp(`^[ \\t]*\\*\\*${label}\\b[^\\n*]*:\\*\\*[^\\n]*$`, "gim");
    out = out.replace(re, "");
  }

  // 8. Inline italic recording directions (*Pause here and ask: "..."*, *Beat*, etc.)
  //    plus the embedded-knowledge-check Q/A lines (*Question: ...* / *Answer: ...*).
  out = out.replace(
    /\*\s*(Pause|Beat|Transition|Note to narrator|Ask|Emphasize)\b[^*\n]*\*/gi,
    "",
  );
  out = out.replace(/^[ \t]*\*\s*(Question|Answer)\s*:[^\n]*$/gim, "");
  // Inline embedded knowledge-check answers "*(Answer: ...)*" and bolded question
  // prompts "- **Question:** ...?" interleaved with prose (the real quiz is extracted
  // separately). Remove the whole span / line.
  // "*(Answer: ...)*" — answer text may itself contain "(...)" so match lazily up to
  // the closing ")*" rather than the first ")".
  out = out.replace(/\*\(\s*Answer:[\s\S]*?\)\*/gi, "");
  out = out.replace(/^[ \t]*[-*]?\s*\*\*Question:?\*\*[^\n]*$/gim, "");
  out = out.replace(/^[ \t]*\(\s*Answer:[^\n]*\)\s*$/gim, "");

  // 9. Drop remaining bracketed production tags in all the bold shapes the scripts use:
  //    "**[Knowledge Check]**", "**[Preview Hook]:**" (colon before the closing **), and
  //    "**[Historical Context]:**". Then drop bare inline tags "[Evidence Grade B]",
  //    "[Citation: ...]" and standalone "[LABEL]" lines.
  out = out.replace(/\*\*\[[^\]]*\]\s*:?\s*\*\*\s*:?/g, "");
  out = out.replace(/\*\*\[[^\]]*\]\*\*\s*:?/g, "");
  out = out.replace(/\[(?:Evidence Grade[^\]]*|Grade [A-D]|Citation:[^\]]*|Scientific Evidence[^\]]*)\]/gi, "");
  out = out.replace(/^\s*\[[A-Z][^\]\n]*\]\s*$/gm, "");

  // 10. Remove footnote-superscript citation markers ("endocannabinoids¹") — the APA
  //     bibliography is the citation of record; the superscripts dangle without it.
  out = out.replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]+/g, "");

  // 11. Drop section timing markers ("(0:00-2:00)", "(0:00–2:30)") off heading lines
  //     FIRST so the ALL-CAPS heading converter below sees a clean heading.
  out = out.replace(/\s*\(\d{1,2}:\d{2}\s*[–—-]\s*\d{1,2}:\d{2}\)/g, "");

  //     ALL-CAPS script section headings ("## OPENING HOOK", "## SECTION 2: ...") →
  //     sentence case so they read as lesson subheads; drop "SECTION N:" prefixes and
  //     production-y suffixes ("& Recap", "& Knowledge Check"); rename script "hooks"
  //     to a neutral "Introduction".
  out = out.replace(/^(#{2,4})\s+([A-Z][A-Z0-9 ,&'/.:()–—\-]{4,})\s*$/gm, (_m, hashes: string, text: string) => {
    let cleaned = text
      .replace(/^SECTION\s*\d+\s*:?\s*/i, "")
      .replace(/\s*&\s*(RECAP|KNOWLEDGE CHECK|FOUNDATION SETTING|WRAP-?UP|NEXT STEPS?|HOOK)\b/gi, "")
      .trim();
    if (/^OPENING\b/i.test(cleaned)) cleaned = "Introduction";
    return `${hashes} ${toSentenceCase(cleaned)}`;
  });

  // 12. Strip the wrapping double-quotes the script puts around every spoken paragraph.
  //     A line that is entirely "..." is narration, not a real quotation; unwrap it.
  out = out.replace(/^[ \t]*"([^"\n][^\n]*?)"[ \t]*$/gm, "$1");
  // Orphan OPEN-quote at the very start of a line when the rest of the line has no
  // closing quote (script narration that opens a quote and runs into a list/paragraph).
  out = out.replace(/^[ \t]*"(?=[A-Za-z0-9])([^"\n]*)$/gm, "$1");
  // Orphan CLOSE-quote at the very end of a line when that line has no opening quote
  // (the script's multi-paragraph narration leaves a dangling close-quote). A line
  // with a balanced pair (e.g. a real inline "term") keeps both.
  out = out.replace(/^([^"\n]*)"[ \t]*$/gm, "$1");

  // 13. Normalise the bibliography heading + drop stray horizontal rules.
  out = out.replace(/^#{1,4}\s*REFERENCES.*$/gim, "## Sources");
  out = out.replace(/^\s*---\s*$/gm, "");

  // 14. Remove the marketing AI-tell phrasings.
  for (const [re, rep] of ECS_AI_TELLS) out = out.replace(re, rep);

  // 14b. Fact-accuracy corrections (soften the flat "500 million years" age claim).
  for (const [re, rep] of ECS_ACCURACY_FIXES) out = out.replace(re, rep);

  // 15. First-person narrator self-introductions → third-person framing.
  out = out.replace(
    /I'?m Brand Anthony McDonald,?\s*and I'?ve studied (over )?(\d+\+? years of )?research on\s*/gi,
    "Researchers have spent decades studying ",
  );
  out = out.replace(/\bI'?m Brand Anthony McDonald[.,]?\s*/gi, "");

  // 16. Em-dash → reader-friendly punctuation (body only; refs untouched).
  out = deDash(out);

  // 16b. Re-capitalise a sentence start that was lower-cased when an AI-tell clause was
  //      deleted mid-sentence ("... of the decade. what the study ..." → "... What the
  //      study ..."). Only fires right after sentence-ending punctuation, so it can't
  //      touch legitimate lowercase mid-sentence words.
  out = out.replace(/([.!?]["')]?\s+)([a-z])/g, (_m, sep: string, ch: string) => sep + ch.toUpperCase());

  // 17. Re-attach the (verbatim) bibliography under the platform heading.
  if (refs) out = `${out.trim()}\n\n## Sources\n\n${refs}`;
  return out;
}

// Clean the speedway PART 2 podcast script into a readable lesson body.
// Speedway is a narrated documentary podcast: alongside the bracketed stage
// directions it carries broadcast framing (a spoken title card, a host self-
// intro, and a sign-off teasing the next episode) that is not lesson prose. We
// strip those the way the ECS converter strips its narrator self-introductions,
// then de-dash the body so the appositive em-dashes read with commas/periods.
function stripSpeedwayScript(md: string): string {
  let out = crlf(md);
  // Production "content integrity" note (a leading blockquote about the script's
  // sourcing) is an author note, not lesson prose. Drop the whole blockquote line.
  out = out.replace(/^>\s*(?:\*\*CONTENT INTEGRITY NOTE:\*\*\s*)?This script uses[^\n]*$/gim, "");
  // Remove speaker labels and the *[delivery cue]* that follows them on the line.
  out = out.replace(/\*\*HOST:\*\*\s*\*\[[^\]]*\]\*/g, "");
  out = out.replace(/\*\*HOST:\*\*/g, "");
  out = out.replace(/\*\*[A-Z][A-Z .'-]{1,30}:\*\*/g, ""); // other speakers (e.g. **NARRATOR:**)
  // Remove bracketed stage directions: **[Sound: …]**, *[Beat]*, *[Pause]*,
  // *[Transition: …]*, *[Theme music …]*, *[Sound: …]*, and bare [CUT-..]/[Beat].
  out = out.replace(/\*\*\[[^\]]*\]\*\*/g, "");
  out = out.replace(/\*\[[^\]]*\]\*/g, "");
  out = out.replace(/\[(Beat|Pause|CUT-[^\]]*|Sound:[^\]]*|Music:[^\]]*|Transition:[^\]]*)\]/gi, "");

  // Broadcast title card spoken at the top of the cold open: "This is Speedway:
  // The Greatest Spectacle in Learning. Episode N: Title." (or the "I'm Anthony
  // McDonald. This is *Speedway…*. Episode N. "Title." Let's go." variant). The
  // lesson carries its own title field; this is podcast framing, so drop the line.
  out = out.replace(
    /^[ \t]*(?:I'?m Anthony McDonald\.\s*)?This is \*?Speedway[^\n]*?(?:Let'?s go\.?|Episode\s*\d+[:.][^\n]*)\s*$/gim,
    "",
  );
  // Closing sign-off: "I am your host. … Next episode: …" / "I'm Anthony McDonald.
  // Thanks for listening. New episodes … Episode N is next." — broadcast outro.
  out = out.replace(/^[ \t]*(?:I am your host\.|I'?m Anthony McDonald\.)[^\n]*$/gim, "");

  // Clean segment headings: '## SEGMENT 1: "Title" — SUBJECT (4 minutes) [CUT-1B]'
  out = out.replace(/^##\s*SEGMENT\s*\d+:\s*"?([^"\n—(]+)"?.*$/gim, "## $1");
  // Broadcast structural headings → neutral lesson subheads (matches the ECS
  // "OPENING HOOK" → "Introduction" rename).
  out = out.replace(/^##\s*COLD OPEN[^\n]*$/gim, "## Introduction");
  out = out.replace(/^##\s*CLOSING[^\n]*$/gim, "## Wrap-up");
  // Drop stray horizontal rules left between segments (as the ECS strip does).
  out = out.replace(/^\s*---\s*$/gm, "");

  // Em-dash → reader-friendly punctuation. Episode scripts use it for appositive
  // asides; the bibliography is sliced off before this runs, so page-range
  // EN-dashes in citations are never touched.
  out = deDash(out);
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
// House rule (BAM): a REGULAR quiz is 10 questions or fewer; only finals/exams may run
// longer. We cap any converted quiz to the first 10 questions unless its title marks it
// as a final/exam/comprehensive/midterm. `capQuiz` is applied to every quiz the
// generator emits (ECS, NASM, speedway); the title is passed where one is available.
const REGULAR_QUIZ_MAX = 10;
const isExamTitle = (title?: string) => /final|exam|comprehensive|midterm/i.test(title ?? "");
function capQuiz(quiz: QuizContent, title?: string): QuizContent {
  if (isExamTitle(title) || quiz.questions.length <= REGULAR_QUIZ_MAX) return quiz;
  return { ...quiz, questions: quiz.questions.slice(0, REGULAR_QUIZ_MAX) };
}

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

  // Section title per module (use the CSV's module_title when present).
  const modTitles = new Map<number, string>();
  for (const r of rows) {
    const m = Number(r.module_order);
    if (!modTitles.has(m)) modTitles.set(m, (r.module_title ?? "").trim() || `Module ${m}`);
  }
  const sectionFor = (mod: number) => modTitles.get(mod) ?? `Module ${mod}`;

  const lessons: AuthoredLesson[] = [];
  let prevModule: number | null = null;
  const flushModuleQuiz = (mod: number | null) => {
    if (mod == null) return;
    const quiz = quizByModule.get(mod);
    if (quiz && quiz.questions.length) {
      const title = `${sectionFor(mod)} — Knowledge Check`;
      lessons.push({ slug: `m${mod}-quiz`, title, section: sectionFor(mod), quiz: capQuiz(quiz, title) });
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
      section: sectionFor(mod),
      body,
    });
  }
  flushModuleQuiz(prevModule);

  return { title: opts.title, description: opts.description, lessons };
}

// NASM CPT carries a boilerplate `## Sources` line on EVERY lesson:
//   "- The peer-reviewed science behind leading science-based fitness
//    certifications. See the course Sources page for the full study list."
// This is NOT a real citation. Per the CentOS authoring rule
// (docs/nasm-curriculum/_VOICE-AND-TEMPLATE.md): the CPT build deliberately does
// NOT cite the NASM textbook, and — unlike the CES/CNC builds, which DO pull real
// per-lesson APA studies + DOIs from the shared open-access bibliography — the CPT
// lessons never attached inline study citations to any specific claim. The shared
// bibliography (docs/CentenarianAcademy/shared-sources/bibliography.json) is tagged
// only by broad topic ("workout"/"corrective"/...), not mapped to CPT chapters or
// claims, so attaching studies here would FABRICATE a claim-source link the source
// never made. We therefore replace the boilerplate with an explicit NEEDS-SOURCE
// flag (an HTML comment, invisible in rendered markdown) for BAM to resolve, rather
// than inventing citations. Re-run the generator after real refs are added upstream.
const CPT_SOURCE_BOILERPLATE =
  /^##\s*Sources\s*\n+(?:[-*]\s*)?The peer-reviewed science behind leading science-based fitness certifications\. See the course Sources page for the full study list\.\s*$/im;
function flagCptSources(body: string): string {
  if (!CPT_SOURCE_BOILERPLATE.test(body)) return body;
  // BAM's decision: a course-level Sources note rather than per-claim citations (which we can't
  // add without fabricating a study→claim link the CentOS source never made). Honest: NASM is
  // the primary source; the science is consistent with the shared open-access research base.
  return body.replace(
    CPT_SOURCE_BOILERPLATE,
    "## Sources & Further Reading\n\n" +
      "This course follows the **NASM Certified Personal Trainer (CPT)** curriculum, which is its " +
      "primary source — see the National Academy of Sports Medicine (https://www.nasm.org). The " +
      "exercise-science principles here are consistent with the peer-reviewed, open-access research " +
      "compiled for the WitUS health courses — the shared study bibliography that the CES and CNC " +
      "courses cite per lesson. (Per-claim study citations are a planned enhancement.)",
  );
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
    const section = manifest.module?.title ?? `Chapter ${order}`;
    for (const l of (manifest.lessons ?? []).sort((a, b) => a.order - b.order)) {
      // Skip manifest entries with no markdown file (e.g. the per-chapter quiz row,
      // which is built separately from _quiz-content.json below).
      if (!l.file) continue;
      const file = join(dir, l.file);
      if (!existsSync(file)) continue;
      const body = flagCptSources(tidy(stripBeats(readFileSync(file, "utf-8"))));
      if (!body) continue;
      lessons.push({
        slug: `ch${order}-l${l.order}-${slugify(l.title)}`.slice(0, 90),
        title: l.title,
        section,
        body,
      });
    }
    // One quiz per chapter from _quiz-content.json — kept inside its chapter's section.
    const quizFile = join(dir, "_quiz-content.json");
    if (existsSync(quizFile)) {
      try {
        const quiz = convertCentosQuiz(JSON.parse(readFileSync(quizFile, "utf-8")) as CentosQuiz);
        if (quiz.questions.length) {
          const title = `${manifest.module?.title ?? `Chapter ${order}`} — Knowledge Check`;
          lessons.push({ slug: `ch${order}-quiz`, title, section, quiz: capQuiz(quiz, title) });
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
    const section = (Array.isArray(raw) ? undefined : raw.module?.title) ?? `Chapter ${order}`;
    const chapterLessons = Array.isArray(raw) ? raw : raw.lessons ?? [];
    for (const l of [...chapterLessons].sort((a, b) => a.n - b.n)) {
      const body = tidy(stripBeats(l.lessonMarkdown ?? ""));
      if (!body) continue;
      lessons.push({
        slug: `ch${order}-l${l.n}-${slugify(l.title)}`.slice(0, 90),
        title: l.title,
        section,
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
// Extract the multiple-choice "Post-Lecture Quiz" embedded in the raw lesson markdown
// of the Nutrition + Neuroscience CSVs (those CSVs leave the quiz_content column empty
// and ship the quiz inside text_content). Across the 42 lessons the scripts use several
// shapes, all handled here:
//   • question marker:  "**Question 1:**"  OR  "**Q1:**"
//   • options per line:  "- a) text ✓"  or  "- b) **text** ✓"
//   • options one line:  "a) text  b) **text** ✓  c) text  d) text"
//   • answer line:       "*Answer: c — ...*"  or  "**Answer:** c) text - ..."
// The correct option is taken from the ✓/bold marker if present, else from the answer
// line's letter. Open-ended "comprehensive" questions (no a)/b) options) are skipped.
// Returns null when no parseable multiple-choice quiz is present.
function extractEmbeddedQuiz(rawMd: string): QuizContent | null {
  const md = crlf(rawMd);
  const start = md.search(/^#{1,4}\s*(POST-?LECTURE QUIZ|QUIZ QUESTIONS?)\b/im);
  if (start < 0) return null;
  // Quiz region runs from the heading to the bibliography / next major author section.
  const tail = md.slice(start);
  const stopAt = tail.slice(2).search(
    /^#{1,4}\s*(REFERENCES|References|Bibliography|AUDIENCE APPLICATION|COMPLEXITY|CROSS-COURSE|LECTURE TRANSITION|MODULE \d)/m,
  );
  const region = stopAt < 0 ? tail : tail.slice(0, stopAt + 2);

  const letterIdx: Record<string, number> = { a: 0, b: 1, c: 2, d: 3, e: 4 };
  const stripOpt = (s: string) =>
    s
      .replace(/\s*(✓|✔|\(correct\)|←\s*correct)\s*/gi, " ")
      .replace(/\*\*/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();

  const questions: QuizContent["questions"] = [];
  // Split on each question marker ("**Question 3:**" or "**Q3:**"); keep text after it.
  const blocks = region.split(/^\*\*(?:Question\s*\d+|Q\d+):?\*\*/im).slice(1);
  for (const block of blocks) {
    const lines = block.split("\n");
    const prompt = (lines.shift() ?? "").replace(/\*\*/g, "").trim();
    if (!prompt) continue;
    const rest = lines.join("\n");

    const options: string[] = [];
    let correctFromMark = -1;
    const pushOpt = (raw: string) => {
      const isCorrect = /✓|✔|\(correct\)|^\*\*[^*]+\*\*$/.test(raw.trim());
      const text = stripOpt(raw);
      if (!text) return;
      if (isCorrect && correctFromMark < 0) correctFromMark = options.length;
      options.push(text);
    };

    // Per-line options: "- a) text" / "a) text" each on its own line.
    const perLine = [...rest.matchAll(/^[ \t]*[-*]?\s*([a-e])\)\s*(.+?)\s*$/gim)];
    if (perLine.length >= 2) {
      for (const m of perLine) pushOpt(m[2]);
    } else {
      // Inline options on a single line: "a) .. b) .. c) .. d) ..". Split on the
      // " <letter>) " boundaries (letter must be followed by ")" and a space).
      const inlineLine =
        lines.find((l) => (l.match(/\b[a-e]\)\s/g) ?? []).length >= 2) ?? "";
      const parts = inlineLine.split(/(?=(?:^|\s)[a-e]\)\s)/);
      for (const p of parts) {
        const m = p.match(/^\s*([a-e])\)\s*([\s\S]+)$/);
        if (m) pushOpt(m[2]);
      }
    }
    if (options.length < 2) continue;

    // Answer line: letter + explanation.
    const ans = rest.match(/(?:\*Answer:|\*\*Answer:\*\*)\s*([a-e])\)?\s*[—–-]?\s*([^\n*]*)/i);
    let correctIndex = correctFromMark;
    let explanation: string | undefined;
    if (ans) {
      if (correctIndex < 0) correctIndex = letterIdx[ans[1].toLowerCase()] ?? -1;
      explanation = ans[2].trim() || undefined;
    }
    if (correctIndex < 0 || correctIndex >= options.length) continue;
    questions.push({ prompt, options, correctIndex, explanation });
  }
  return questions.length ? { passingScore: 80, questions } : null;
}

function buildEcsModule(opts: {
  csv: string;
  title: string;
  description: string;
  /** When true, mine each text lesson's body for an embedded Post-Lecture Quiz
   *  (Nutrition + Neuroscience CSVs ship quizzes inline, not as separate rows). */
  embeddedQuizzes?: boolean;
}): AuthoredCourse {
  const rows = readCsvObjects(opts.csv).sort(
    (a, b) => Number(a.lesson_order) - Number(b.lesson_order),
  );
  // Drop the "Lecture N:" / "Quiz:" prefix and convert the first " — " separator to a
  // colon so titles read "Topic: Subtitle" instead of the script's em-dash style.
  const cleanEcsTitle = (t: string): string => {
    const base = (t ?? "")
      .replace(/^(Lecture|Mini-Lecture)\s*[\d.]+:\s*/i, "")
      .replace(/^Quiz:\s*/i, "")
      .trim();
    const colonised = base.includes(": ") ? base : base.replace(/\s+—\s+/, ": ");
    return colonised.replace(/\s+—\s+/g, ", ").trim() || (t ?? "");
  };

  const lessons: AuthoredLesson[] = [];
  for (const r of rows) {
    if (r.lesson_type === "quiz") {
      if (!r.quiz_content?.trim()) continue;
      try {
        const quiz = convertEcsQuiz(JSON.parse(r.quiz_content) as EcsQuiz);
        if (quiz.questions.length) {
          const section = cleanEcsTitle(r.title);
          const title = `${section} (Knowledge Check)`;
          lessons.push({ slug: `l${r.lesson_order}-quiz`, title, section, quiz: capQuiz(quiz, title) });
        }
      } catch {
        /* skip */
      }
      continue;
    }
    const raw = r.text_content ?? "";
    const body = tidy(stripBeats(stripEcsTags(raw)));
    if (!body) continue;
    const cleanTitle = cleanEcsTitle(r.title);
    lessons.push({
      slug: `l${r.lesson_order}-${slugify(cleanTitle)}`.slice(0, 90),
      title: cleanTitle,
      section: cleanTitle,
      body,
    });
    if (opts.embeddedQuizzes) {
      const quiz = extractEmbeddedQuiz(raw);
      if (quiz) {
        const title = `${cleanTitle} (Knowledge Check)`;
        lessons.push({ slug: `l${r.lesson_order}-quiz`, title, section: cleanTitle, quiz: capQuiz(quiz, title) });
      }
    }
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
    const section = `Episode ${epNum}: ${title}`;

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
      section,
      body: body.trim(),
    });

    // Quiz CSV → quiz lesson.
    const quizFile = files.find((f) => /QUIZ.*\.csv$/i.test(f));
    if (quizFile) {
      try {
        const quiz = convertSpeedwayQuiz(readCsvObjects(join(dir, quizFile)));
        if (quiz.questions.length) {
          const title = `Episode ${epNum} — Quiz`;
          lessons.push({ slug: `e${epNum}-quiz`, title, section, quiz: capQuiz(quiz, title) });
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

  // 5c. ECS Nutrition — 18 mini-lectures, clean CSV, quizzes embedded in the body.
  const ecsCoursesRoot = join(
    CENTOS,
    "docs",
    "CentOS Courses",
    "ECS CentOS version",
    "ECS Courses",
  );
  emit(
    "ecs-nutrition-course",
    "ECS_NUTRITION_COURSE",
    buildEcsModule({
      csv: join(
        ecsCoursesRoot,
        "ECS Course 3 Nutrition Documents",
        "ECS_Nutrition_Course_Import.csv",
      ),
      title: "The Endocannabinoid System: Nutrition",
      embeddedQuizzes: true,
      description:
        "How the food you eat builds and tunes your endocannabinoid system (ECS). This audio-first course covers the macronutrients and micronutrients behind endocannabinoid synthesis, the omega-6 to omega-3 balance, cannabimimetic foods like cacao, and how to build anti-inflammatory, ECS-supporting meals. Cited throughout, with a knowledge check per lesson.",
    }),
    "Source: docs/CentOS Courses/ECS CentOS version/ECS Courses/ECS Course 3 Nutrition Documents/ECS_Nutrition_Course_Import.csv",
  );

  // 5d. ECS Neuroscience — 24 lectures (4 modules), clean CSV, quizzes embedded in body.
  emit(
    "ecs-neuroscience-course",
    "ECS_NEUROSCIENCE_COURSE",
    buildEcsModule({
      csv: join(ecsCoursesRoot, "files1", "Neuroscience_ECS_Course_Import.csv"),
      title: "The Endocannabinoid System: Neuroscience",
      embeddedQuizzes: true,
      description:
        "Where the endocannabinoid system (ECS) lives and works in the brain. This audio-first course maps CB1 and CB2 receptors across brain regions, walks through synaptic transmission and neuroplasticity, and connects the ECS to mood, pain, sleep, the gut-brain axis, and healthy aging. Cited throughout, with a knowledge check per lesson.",
    }),
    "Source: docs/CentOS Courses/ECS CentOS version/ECS Courses/files1/Neuroscience_ECS_Course_Import.csv",
  );

  // 6. speedway (goes to ElementaryMBA, not health — but generated here)
  emit("speedway-course", "SPEEDWAY_COURSE", buildSpeedway(), "Source: docs/speedway-course");

  console.log("\nDone. Generated data modules in scripts/data/.");
}

main();
