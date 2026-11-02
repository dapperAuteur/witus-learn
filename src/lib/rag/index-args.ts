// Argument parsing for `pnpm rag:index` (scripts/rag-index.ts), pure so it is unit-tested.

export type RagIndexMode =
  | { mode: "course"; course: string; tenant?: string; allTenants: boolean; sourceUrl?: string }
  | { mode: "courses-file"; path: string }
  | { mode: "needing"; changedOnly: boolean };

export const RAG_INDEX_USAGE = [
  "Usage:",
  "  pnpm rag:index --course <slug> [--tenant <slug> | --all-tenants] [--source-url <url>]",
  "  pnpm rag:index --courses-file <path.json>   # [{ \"tenantSlug\": \"...\", \"courseSlug\": \"...\" }]",
  "  pnpm rag:index --needing [--changed-only]    # every course never indexed or changed since",
].join("\n");

export function parseRagIndexArgs(argv: readonly string[]): RagIndexMode | { error: string } {
  const has = (n: string) => argv.includes(`--${n}`);
  const val = (n: string): string | undefined => {
    const i = argv.indexOf(`--${n}`);
    if (i === -1) return undefined;
    const v = argv[i + 1];
    return v && !v.startsWith("--") ? v : "";
  };
  const course = val("course");
  const file = val("courses-file");
  const picked = [course !== undefined, file !== undefined, has("needing")].filter(Boolean).length;
  if (picked !== 1) return { error: "Pick exactly one of --course, --courses-file or --needing." };

  if (course !== undefined) {
    if (!course) return { error: "--course needs a slug." };
    const tenant = val("tenant");
    if (tenant === "") return { error: "--tenant needs a slug." };
    if (tenant && has("all-tenants")) return { error: "Use --tenant or --all-tenants, not both." };
    const sourceUrl = val("source-url");
    if (sourceUrl === "") return { error: "--source-url needs a URL." };
    if (sourceUrl && !/^https?:\/\//.test(sourceUrl)) return { error: "--source-url must be an http(s) URL." };
    if (sourceUrl && has("all-tenants")) return { error: "--source-url applies to one course; pass --tenant." };
    return { mode: "course", course, tenant, allTenants: has("all-tenants"), sourceUrl };
  }
  if (file !== undefined) {
    if (!file) return { error: "--courses-file needs a path." };
    return { mode: "courses-file", path: file };
  }
  return { mode: "needing", changedOnly: has("changed-only") };
}

export interface CourseRef {
  tenantSlug: string;
  courseSlug: string;
}

/** Validate the JSON the post-merge workflow writes: an array of { tenantSlug, courseSlug }. */
export function parseCoursesFile(json: unknown): CourseRef[] | { error: string } {
  if (!Array.isArray(json)) return { error: "The courses file must hold a JSON array." };
  const out: CourseRef[] = [];
  for (const [i, v] of json.entries()) {
    const r = v as Record<string, unknown> | null;
    if (!r || typeof r.tenantSlug !== "string" || typeof r.courseSlug !== "string" || !r.tenantSlug || !r.courseSlug) {
      return { error: `Entry ${i} needs string tenantSlug and courseSlug.` };
    }
    if (!out.some((o) => o.tenantSlug === r.tenantSlug && o.courseSlug === r.courseSlug)) {
      out.push({ tenantSlug: r.tenantSlug, courseSlug: r.courseSlug });
    }
  }
  return out;
}
