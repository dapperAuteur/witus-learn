// PURE: arguments for scripts/cyoa-index.ts (the CYOA crossroads backfill). Kept apart so it is unit-tested.

export const CYOA_INDEX_USAGE = `Usage:
  pnpm cyoa:index --list                   # read-only: every CYOA course, its lessons and how many need embedding
  pnpm cyoa:index --needing                # embed the missing or changed lessons of every CYOA course (default)
  pnpm cyoa:index --all                    # re-embed every published lesson of every CYOA course
  pnpm cyoa:index --course <slug> [--tenant <slug>] [--force]   # one course (any navigation mode)`;

export type CyoaIndexArgs =
  | { mode: "list" }
  | { mode: "needing" }
  | { mode: "all" }
  | { mode: "course"; course: string; tenant?: string; force: boolean };

export function parseCyoaIndexArgs(argv: readonly string[]): CyoaIndexArgs | { error: string } {
  let mode: "list" | "needing" | "all" | null = null;
  let course: string | undefined;
  let tenant: string | undefined;
  let force = false;
  const setMode = (m: "list" | "needing" | "all") => {
    if (mode && mode !== m) return `Pass only one of --list, --needing and --all.`;
    mode = m;
    return null;
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    let err: string | null = null;
    if (a === "--list") err = setMode("list");
    else if (a === "--needing") err = setMode("needing");
    else if (a === "--all") err = setMode("all");
    else if (a === "--force") force = true;
    else if (a === "--course" || a === "--tenant") {
      const v = argv[++i];
      if (!v || v.startsWith("--")) return { error: `${a} needs a value.` };
      if (a === "--course") course = v;
      else tenant = v;
    } else return { error: `Unknown argument: ${a}` };
    if (err) return { error: err };
  }
  if (course) {
    if (mode) return { error: "--course cannot be combined with --list, --needing or --all." };
    return { mode: "course", course, tenant, force };
  }
  if (tenant) return { error: "--tenant needs --course." };
  if (force) return { error: "--force needs --course (use --all for every CYOA course)." };
  return { mode: mode ?? "needing" };
}
