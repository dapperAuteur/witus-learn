// gen:tpt-bundle-standards, write the two mechanical pages of a TpT BUNDLE packet straight from the
// authoritative data, so a bundle can never claim a standard the catalog does not actually carry.
//
//   pnpm gen:tpt-bundle-standards            # every bundle in TPT_PLAN that has a packetDir
//   pnpm gen:tpt-bundle-standards <dir>      # just one, e.g. state-civics-bundle
//
// WHY THIS EXISTS
// A bundle is a compilation of already-built unit packets, so its standards claim is the UNION of its
// members' claims, deduped per jurisdiction. Typing that union by hand (171 codes across 34 states for
// the state-civics bundle) is exactly the place a wrong or invented code gets shown to a teacher, which
// CLAUDE.md calls worse than a missing one. So the two pages that are pure fact get generated:
//
//   02-included-units.md      the manifest: which units are inside, at what recommended price, and
//                             which codes each one carries. Members come from TPT_PLAN.bundleSlugs.
//   03-standards-alignment.md the combined coverage: every jurisdiction, every framework, every code,
//                             with the standard's text quoted VERBATIM from src/lib/standards/data
//                             (never retyped here) and coverage graded exactly as the unit graded it.
//
// The remaining packet pages (00-cover, 01-how-to-use-this-bundle, 04-attribution, 05-tpt-listing) are
// hand-authored like every other packet, because they are voice, not data.
//
// The OUTPUT is gitignored (plans/ is local working material); this generator is not. Re-run it after
// any change to src/lib/standards or to a bundle's member list, then reprint the PDF.
//
// ON DASHES: unlike gen-future-work.ts, this generator does NOT strip em/en dashes from what it
// copies. Everything it copies comes from src/lib/standards/data, which check-em-dashes.ts
// deliberately excludes: the codes themselves carry dashes as printed (Connecticut prints
// its CIV 9 to 12 codes with an en dash), the standard text is a verbatim transcription, and coverage
// notes sit inline with it. A blanket regex over that directory is exactly the mechanical rewrite the
// exclusion exists to prevent, so the text is reproduced as the publisher printed it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ALIGNMENTS, FRAMEWORKS, standardsForCourse } from "../src/lib/standards/index";
import { TPT_PLAN, type TptPlanItem } from "../src/lib/tpt-plan";

const ROOT = join(import.meta.dirname, "..");
const PACKETS = join(ROOT, "plans", "future-courses", "tpt-packets");

const FW = new Map(FRAMEWORKS.map((f) => [f.id, f]));

/** The TpT product row for a member course, for its title and recommended price. */
function memberItem(slug: string): TptPlanItem | undefined {
  return TPT_PLAN.find((i) => i.courseSlug === slug);
}

function memberTitle(slug: string): string {
  return memberItem(slug)?.title ?? slug;
}

// ── 02-included-units.md, the manifest ───────────────────────────────────────

function manifest(bundle: TptPlanItem): string {
  const slugs = bundle.bundleSlugs ?? [];
  const rows = slugs.map((slug, n) => {
    const item = memberItem(slug);
    const s = standardsForCourse(slug);
    // Name the jurisdictions while the list is short (a state unit lands in one or two); past that,
    // the count is what a teacher can actually read in a table cell.
    const named = [...s.jurisdictions].sort((a, b) => a.jurisdiction.localeCompare(b.jurisdiction));
    const where =
      s.total === 0
        ? "not mapped yet"
        : named.length <= 3
          ? `${s.total} in ${named.map((j) => j.jurisdiction).join(" and ")}`
          : `${s.total} across ${named.length} jurisdictions`;
    return `| ${n + 1} | ${memberTitle(slug)} | ${item?.price ?? "n/a"} | ${where} |`;
  });

  const codeBlocks = slugs.map((slug) => {
    const mine = ALIGNMENTS.filter((a) => a.courseSlugs.includes(slug));
    const byState = new Map<string, string[]>();
    for (const a of mine) {
      const f = FW.get(a.frameworkId);
      if (!f) continue;
      const list = byState.get(f.jurisdiction) ?? [];
      if (!list.includes(a.code)) list.push(a.code);
      byState.set(f.jurisdiction, list);
    }
    const lines = [...byState.entries()]
      .sort((x, y) => x[0].localeCompare(y[0]))
      .map(([j, codes]) => `- **${j}:** ${codes.sort((a, b) => a.localeCompare(b)).join(", ")}`);
    return [`### ${memberTitle(slug)}`, "", ...(lines.length ? lines : ["- Not mapped yet."]), ""].join("\n");
  });

  const dirs = slugs
    .map((slug) => memberItem(slug)?.packetDir)
    .filter((d): d is string => Boolean(d))
    .map((d) => `- \`${d}/\``);

  return [
    "# What is in this bundle",
    "",
    `This bundle is a compilation: it collects **${slugs.length} complete units** that are also sold`,
    "separately. It adds no new lessons of its own. Every unit arrives exactly as its standalone",
    "listing describes it, with its own teacher guide, student reader, worksheets, quiz, answer keys,",
    "standards page, and attribution page.",
    "",
    "## The units, at a glance",
    "",
    "| # | Unit | Listed separately at | Standards it carries |",
    "|---|---|---|---|",
    ...rows,
    "",
    `*Prices shown are the recommended standalone prices for the individual listings, not a promise` +
      ` about what anything sells for. The bundle price is set on the listing itself.*`,
    "",
    "## Exactly which codes each unit carries",
    "",
    "Use this to find the unit that answers your own state's standards. Every code below is quoted in",
    "full, with its coverage graded, on the combined standards page in this packet.",
    "",
    ...codeBlocks,
    "---",
    "",
    "*(BAM: this page is generated from the live plan and standards data. Regenerate with",
    "`pnpm gen:tpt-bundle-standards` after changing a member list or a standards claim, rather than",
    "editing it here. Member packet folders to assemble into the bundle download:*",
    "",
    ...dirs,
    "",
    "*)*",
    "",
  ].join("\n");
}

// ── 03-standards-alignment.md, the combined coverage ─────────────────────────

function alignment(bundle: TptPlanItem): string {
  const slugs = new Set(bundle.bundleSlugs ?? []);
  const mine = ALIGNMENTS.filter((a) => a.courseSlugs.some((s) => slugs.has(s)));

  // jurisdiction -> framework id -> codes (deduped: one code claimed by three units is ONE standard).
  const byJurisdiction = new Map<string, Map<string, typeof mine>>();
  for (const a of mine) {
    const f = FW.get(a.frameworkId);
    if (!f) continue;
    const frameworks = byJurisdiction.get(f.jurisdiction) ?? new Map<string, typeof mine>();
    const list = frameworks.get(f.id) ?? [];
    if (!list.some((x) => x.code === a.code)) list.push(a);
    frameworks.set(f.id, list);
    byJurisdiction.set(f.jurisdiction, frameworks);
  }

  const jurisdictions = [...byJurisdiction.entries()].sort((x, y) => x[0].localeCompare(y[0]));
  const totals = jurisdictions.map(([j, frameworks]) => {
    const codes = new Set([...frameworks.values()].flat().map((a) => a.code));
    return { jurisdiction: j, count: codes.size };
  });
  const total = totals.reduce((n, t) => n + t.count, 0);

  const sections = jurisdictions.map(([jurisdiction, frameworks]) => {
    const blocks = [...frameworks.entries()].map(([fid, list]) => {
      const f = FW.get(fid)!;
      const standards = [...list]
        .sort((a, b) => a.code.localeCompare(b.code))
        .map((a) => {
          const carriers = a.courseSlugs.filter((s) => slugs.has(s)).map(memberTitle);
          const grade = a.coverage === "partial" ? "**Partial coverage**" : "**Full coverage**";
          return [
            `#### ${a.code}: ${grade}`,
            "",
            `> ${a.text}`,
            "",
            ...(a.coverage === "partial" && a.note ? [`**What is and is not covered:** ${a.note}`, ""] : []),
            `**Taught by:** ${carriers.join("; ")}`,
            "",
          ].join("\n");
        });
      return [
        `### ${f.name}`,
        "",
        `**Publisher:** ${f.publisher} · **Version:** ${f.version} · **Retrieved:** ${f.fetchedOn}`,
        "",
        `**How it applies:** ${f.adoption}`,
        "",
        `**Source document:** ${f.sourceUrl}`,
        "",
        ...standards,
      ].join("\n");
    });
    return [`## ${jurisdiction}`, "", ...blocks].join("\n");
  });

  return [
    "# Standards alignment for the whole bundle (verified)",
    "",
    "**How we do alignment.** We map standards by reading each state's own published document and",
    "checking it against actual lesson content, never against lesson titles. Every entry below quotes",
    "the standard verbatim from that state's document, then grades our coverage honestly, **full** or",
    "**partial**, with any gap named. Where a standard asks for both the state and the federal side,",
    "the note says which half this unit contributes.",
    "",
    "**What a bundle claims.** A bundle claims exactly the union of what its member units claim and",
    "nothing more. A code claimed by three of the units is counted **once** here, because it is one",
    "standard the bundle covers, not three. If a code is not on this page, this bundle does not claim it.",
    "",
    `**Coverage:** ${total} distinct standards across ${totals.length} jurisdictions.`,
    "",
    "| Jurisdiction | Distinct standards |",
    "|---|---|",
    ...totals.map((t) => `| ${t.jurisdiction} | ${t.count} |`),
    "",
    "Standards get revised. Each framework below carries the date we retrieved it from the publisher;",
    "confirm against your own jurisdiction's current requirements before you file anything.",
    "",
    ...sections,
    "---",
    "",
    "*(BAM: this page is generated from src/lib/standards, the same data behind the public standards",
    "finder. Regenerate with `pnpm gen:tpt-bundle-standards` after any standards change rather than",
    "editing it here.)*",
    "",
  ].join("\n");
}

// ── Run ──────────────────────────────────────────────────────────────────────

const only = process.argv[2];
const bundles = TPT_PLAN.filter(
  (i) => i.tier === "bundle" && i.packetDir && i.bundleSlugs?.length && (!only || i.packetDir === only),
);

if (bundles.length === 0) {
  console.error(
    only
      ? `No bundle in TPT_PLAN with packetDir "${only}" (and a bundleSlugs list).`
      : "No bundles in TPT_PLAN have a packetDir yet, so there is nothing to generate.",
  );
  process.exit(1);
}

for (const bundle of bundles) {
  const dir = join(PACKETS, bundle.packetDir!);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "02-included-units.md"), manifest(bundle), "utf-8");
  writeFileSync(join(dir, "03-standards-alignment.md"), alignment(bundle), "utf-8");
  const unmapped = (bundle.bundleSlugs ?? []).filter((s) => standardsForCourse(s).total === 0);
  console.log(
    `${bundle.packetDir}: wrote 02-included-units.md + 03-standards-alignment.md ` +
      `(${bundle.bundleSlugs?.length} units)`,
  );
  if (unmapped.length) console.log(`  note: not mapped to any standard yet: ${unmapped.join(", ")}`);
}
