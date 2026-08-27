// pnpm cross-links [--course <slug>] [--json]
//
// Finds where one course TALKS ABOUT another and does not LINK to it.
//
// WHY THIS EXISTS. The catalog is past 200 courses, and its value is increasingly in the connections
// rather than the individual courses: the architecture course teaches Robert R. Taylor at Tuskegee,
// the construction research names the McKissack contract at the same field, and a learner on either
// page has no way to reach the other. Finding those by memory does not scale, and a missed link is
// invisible: nothing renders, nothing fails, the learner simply never learns the thing connects.
//
// WHAT COUNTS AS A MENTION. A course B is "mentioned" by course A when B's exact TITLE appears in
// A's lesson text, or B's slug appears. Title matching is what prose actually does ("as
// `Who Gets Named` shows"), so it finds more than slug matching alone.
//
// WHAT COUNTS AS A LINK. Any of B's slug inside a markdown link target, since the app builds course
// URLs several ways (/course/<id>, /<username>/<slug>, /series/<slug>). A mention that sits inside
// or beside a link is satisfied; the report is only about mentions with NO link anywhere in the
// lesson.
//
// FALSE POSITIVES ARE THE FAILURE MODE, not false negatives. A guard that cries wolf gets ignored,
// so titles shorter than MIN_TITLE_WORDS words, and titles that are common English phrases, are
// skipped rather than reported. This is deliberately a REPORT, never a lint gate: whether two
// courses should link is a judgment call, and per CLAUDE.md a judgment call must not block a commit.
import { detectMentions, eligibleTargets } from "../src/lib/cross-link-detect";
import { allSeedEntries, loadCourse, type SeedEntry } from "./lib/seed-registry";

// The RULES (what counts as a mention, what counts as an already-made link) live in
// src/lib/cross-link-detect.ts, shared with `pnpm gen:cross-links`, which builds the owner's
// approval queue at /admin/cross-links from the same definitions. Two producers with two slightly
// different ideas of "a mention" would give the owner a queue that disagrees with this report, and
// neither would be wrong enough for anyone to notice.

interface Mention {
  from: string;
  fromLesson: string;
  to: string;
  toTitle: string;
  via: "title" | "slug";
}

function lessonText(lesson: { content?: string; body?: string }): string {
  return String(lesson.content ?? lesson.body ?? "");
}

async function main() {
  const args = process.argv.slice(2);
  const only = args.includes("--course") ? args[args.indexOf("--course") + 1] : null;
  const asJson = args.includes("--json");

  const entries = allSeedEntries();
  const loaded: { entry: SeedEntry; title: string; lessons: { slug: string; text: string }[] }[] = [];
  for (const entry of entries) {
    const course = await loadCourse(entry);
    if (!course) continue; // generated modules are gitignored; skip rather than fail
    loaded.push({
      entry,
      title: String(course.title ?? ""),
      lessons: (course.lessons ?? []).map((l: { slug: string }) => ({
        slug: String(l.slug),
        text: lessonText(l as { content?: string; body?: string }),
      })),
    });
  }

  const targets = eligibleTargets(loaded.map((c) => ({ slug: c.entry.slug, title: c.title })));

  const mentions: Mention[] = [];
  for (const source of loaded) {
    if (only && source.entry.slug !== only) continue;
    for (const lesson of source.lessons) {
      for (const m of detectMentions(lesson.text, source.entry.slug, targets)) {
        mentions.push({
          from: source.entry.slug,
          fromLesson: lesson.slug,
          to: m.targetSlug,
          toTitle: m.targetTitle,
          via: m.via,
        });
      }
    }
  }

  if (asJson) {
    console.log(JSON.stringify(mentions, null, 2));
    return;
  }

  const byCourse = new Map<string, Mention[]>();
  for (const m of mentions) {
    const list = byCourse.get(m.from) ?? [];
    list.push(m);
    byCourse.set(m.from, list);
  }

  const ordered = [...byCourse.entries()].sort((a, b) => b[1].length - a[1].length);
  for (const [course, list] of ordered) {
    console.log(`\n${course}  (${list.length} unlinked mention${list.length === 1 ? "" : "s"})`);
    const seen = new Set<string>();
    for (const m of list) {
      const key = `${m.to}|${m.fromLesson}`;
      if (seen.has(key)) continue;
      seen.add(key);
      console.log(`  ${m.fromLesson}  mentions  ${m.to}  (${m.via})`);
    }
  }
  console.log(
    `\nScanned ${loaded.length} loadable course(s): ${mentions.length} unlinked mention(s) across ${byCourse.size} course(s).`,
  );
  console.log("A REPORT, not a gate. Whether two courses should link is a judgment call.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
