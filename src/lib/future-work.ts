// Future Classes & Features — the committed index of everything proposed but not yet built.
//
// The source notes live in the GITIGNORED `plans/future-courses/` dir, which does not exist in a
// deploy. `pnpm gen:future-work` reads them once at dev time and writes the plain-string modules
// under `src/lib/future-work-content/` that this file imports. Nothing here touches the filesystem, so
// /admin/future renders identically in production. To add a proposal: drop the markdown in
// `plans/future-courses/`, extend the generator if needed, re-run it, and add an entry below.
//
// BAM reviews these at /admin/future and leaves notes per item; the notes go to the
// `future_work_notes` table and are readable from the CLI with `pnpm future:list`.

import {
  CIVICS_MORE_PROPOSAL,
  TRAVEL_ABROAD_PROPOSAL,
  WORKERS_RIGHTS_TRACK_PROPOSAL,
} from "@/lib/future-work-content/proposals";
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
  recommended: "Recommended — carries a course",
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
    title: "She Did the Work — course proposals",
    kind: "course",
    status: "proposed",
    group: "She Did the Work",
    summary:
      "Nine proposed courses (A–I) with a recommended build order, the 14 factual errors found in the source calendar, and the rights/permissions table.",
    body: SHE_DID_THE_WORK_PROPOSAL,
    provenance: "plans/future-courses/she-did-the-work/00-course-proposals.md",
  },
  ...SHE_DID_THE_WORK_SUBJECTS.map<FutureWorkItem>((s) => ({
    key: `sdtw-${s.key}`,
    title: s.name,
    kind: "course",
    status: subjectStatus(s.key),
    group: "She Did the Work — subject research",
    summary: s.summary,
    body: s.body,
    provenance: `plans/future-courses/she-did-the-work/${s.name}.md`,
  })),
];

export const FUTURE_WORK: FutureWorkItem[] = [
  ...SHE_DID_THE_WORK,
  {
    key: "civics-more",
    title: "More civics courses",
    kind: "course",
    status: "proposed",
    group: "Civics",
    summary:
      "Six candidate courses filling gaps in the shipped civics catalog; two are already drafted, four await a pick (Know Your Rights and Voting & Elections 101 recommended next).",
    body: CIVICS_MORE_PROPOSAL,
    provenance: "plans/future-courses/civics-more-proposal.md",
  },
  {
    key: "travel-abroad",
    title: "Travel & Living Abroad — course track",
    kind: "course",
    status: "building",
    group: "Travel & Living Abroad",
    summary:
      "A new category: 16 courses from passports and visas (building now) through taxes, healthcare, and retiring abroad — all cited to authoritative government sources.",
    body: TRAVEL_ABROAD_PROPOSAL,
    provenance: "plans/future-courses/travel-abroad-proposal.md",
  },
  {
    key: "workers-rights-track",
    title: "Workers' Rights Around the World — course track",
    kind: "course",
    status: "proposed",
    group: "Culture & History",
    summary:
      "Eleven country courses anchored on the built History of Unions course, chosen to span the real spectrum of state–labor relations — from workers on the German board to the Gulf's kafala system — with a build order, the sourcing difficulty of each, and an honest list of which ones need a reviewer.",
    body: WORKERS_RIGHTS_TRACK_PROPOSAL,
    provenance: "plans/future-courses/workers-rights-track-proposal.md",
  },
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
