// Future Classes & Features — the committed index of everything proposed but not yet built.
//
// The source notes live in the GITIGNORED `plans/future-courses/` dir, which does not exist in a
// deploy. `pnpm gen:future-work` reads them once at dev time and writes the plain-string modules
// under `src/lib/future-work-content/` that this file imports. Nothing here touches the filesystem, so
// /admin/future renders identically in production. To add a proposal: drop the markdown in
// `plans/future-courses/` and re-run the generator. That is the whole procedure — top-level `.md`
// files are AUTO-DISCOVERED. (They used to be two hardcoded filenames, which meant a note BAM filed
// was silently invisible in the app until someone edited the script. Never again.) Adding it to
// PROPOSAL_META below is optional and only curates which group/status it shows under.
//
// BAM reviews these at /admin/future and leaves notes per item; the notes go to the
// `future_work_notes` table and are readable from the CLI with `pnpm future:list`.

import { PROPOSAL_DOCS, SUBDIR_DOCS } from "@/lib/future-work-content/proposals";
import { SHE_DID_THE_WORK_PROPOSAL, SHE_DID_THE_WORK_SUBJECTS } from "@/lib/future-work-content/she-did-the-work";

export type FutureWorkKind = "course" | "feature";

export type FutureWorkStatus =
  | "proposed"
  | "recommended"
  | "researching"
  | "building"
  | "chapter"
  | "deferred"
  | "cut";

export const FUTURE_WORK_STATUS_LABEL: Record<FutureWorkStatus, string> = {
  proposed: "Proposed",
  recommended: "Recommended, carries a course",
  researching: "Researching",
  building: "Building now",
  chapter: "Chapter, not a course",
  deferred: "Deferred to another vertical",
  cut: "Cut",
};

export interface FutureWorkItem {
  /** Stable key — the join key for `future_work_notes.item_key`. Never renumber these. */
  key: string;
  title: string;
  kind: FutureWorkKind;
  status: FutureWorkStatus;
  /** Section heading on /admin/future. */
  group: string;
  /** One line, shown collapsed. */
  summary: string;
  /** The full note, rendered as markdown. */
  body: string;
  /** The local planning file this was generated from (gitignored; not read at runtime). */
  provenance: string;
}

// The proposal's own judgment about who carries a course alone, who is a chapter in someone else's,
// who is deferred to another vertical, and who is cut. Kept here (not in the generated file) so the
// editorial call is reviewable in a diff.
const CARRIES_A_COURSE = new Set([
  "gabriele-oettingen",
  "angela-duckworth",
  "ava-duvernay",
  "haben-girma",
  "mellody-hobson",
]);

function subjectStatus(key: string): FutureWorkStatus {
  if (CARRIES_A_COURSE.has(key)) return "recommended";
  if (key === "sage-steele") return "cut";
  if (key === "mary-bassett") return "deferred";
  // Not from the "She Clocked In" calendar — a standalone course idea BAM dropped in the same dir.
  if (key === "abigail-adams") return "proposed";
  return "chapter";
}

const SHE_DID_THE_WORK: FutureWorkItem[] = [
  {
    key: "she-did-the-work",
    title: "She Did the Work, course proposals",
    kind: "course",
    status: "proposed",
    group: "She Did the Work",
    summary:
      "Nine proposed courses (A-I) with a recommended build order, the 14 factual errors found in the source calendar, and the rights/permissions table.",
    body: SHE_DID_THE_WORK_PROPOSAL,
    provenance: "plans/future-courses/she-did-the-work/00-course-proposals.md",
  },
  ...SHE_DID_THE_WORK_SUBJECTS.map<FutureWorkItem>((s) => ({
    key: `sdtw-${s.key}`,
    title: s.name,
    kind: "course",
    status: subjectStatus(s.key),
    group: "She Did the Work, subject research",
    summary: s.summary,
    body: s.body,
    provenance: `plans/future-courses/she-did-the-work/${s.name}.md`,
  })),
];

/**
 * Per-doc metadata we can't infer from the markdown: which group it belongs to, and where it is.
 * A doc with no entry here still shows up — it just lands in "Proposals" as `proposed`. That is the
 * point: dropping a new note into `plans/future-courses/` must never require a code change to make
 * it VISIBLE. Curating where it sits is optional; being seen is not.
 */
const PROPOSAL_META: Record<
  string,
  { group?: string; status?: FutureWorkStatus; kind?: FutureWorkKind; key?: string }
> = {
  // `key` overrides exist ONLY to preserve keys that predate auto-discovery. `item_key` is the join
  // column for `future_work_notes` — renaming a key silently orphans every note filed against it.
  // Never change an existing key; add an override instead.
  "civics-more-proposal": { key: "civics-more", group: "Civics" },
  "travel-abroad-proposal": { key: "travel-abroad", group: "Travel & Living Abroad", status: "building" },
  "history-of-unions": { group: "Workers' Rights", status: "building" },
  "workers-rights-track-proposal": { group: "Workers' Rights" },
  // Dropped in while the union work was building — and picked up with no code change, which is the
  // whole point of auto-discovery. Under the old hardcoded generator it would have been invisible.
  world: { group: "World History" },
  // Not course proposals — a live sales asset and the market research behind it. They're `feature`
  // so they don't clutter the course list, but they stay visible: BAM asked for one place for
  // "this type of stuff", and pricing is exactly the kind of thing that goes stale unseen.
  "home-school-pricing": { group: "Pricing", kind: "feature" },
  "home-school-pricing-research": { group: "Pricing", kind: "feature" },
};

export const FUTURE_WORK: FutureWorkItem[] = [
  ...SHE_DID_THE_WORK,
  ...PROPOSAL_DOCS.map((p): FutureWorkItem => {
    const meta = PROPOSAL_META[p.key] ?? {};
    return {
      key: meta.key ?? p.key,
      title: p.title,
      kind: meta.kind ?? "course",
      status: meta.status ?? "proposed",
      group: meta.group ?? "Proposals",
      summary: p.summary,
      body: p.body,
      provenance: p.provenance,
    };
  }),
  // Subdirectory bundles (mansa-gold/, …) — multi-file research packs. `feature`, not course
  // proposals: they're reference material you read, grouped by their folder. Auto-discovered.
  ...SUBDIR_DOCS.map(
    (d): FutureWorkItem => ({
      key: d.key,
      title: d.title,
      kind: "feature",
      status: "researching",
      group: d.group,
      summary: d.summary,
      body: d.body,
      provenance: d.provenance,
    }),
  ),
];

export function getFutureWorkItem(key: string): FutureWorkItem | undefined {
  return FUTURE_WORK.find((i) => i.key === key);
}

export interface FutureWorkGroup {
  title: string;
  items: FutureWorkItem[];
}

/** Items of one kind, grouped by `group`, preserving declaration order. */
export function futureWorkGroups(kind: FutureWorkKind): FutureWorkGroup[] {
  const groups: FutureWorkGroup[] = [];
  for (const item of FUTURE_WORK) {
    if (item.kind !== kind) continue;
    const existing = groups.find((g) => g.title === item.group);
    if (existing) existing.items.push(item);
    else groups.push({ title: item.group, items: [item] });
  }
  return groups;
}
