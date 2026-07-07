// Single source of truth for the operator/admin CLI reference. Rendered in-app at /admin/commands
// and mirrored in docs/OPERATOR_COMMANDS.md. These run in a TERMINAL (not the browser) from the repo
// root with pnpm. Keep in sync with package.json "scripts".

export type CommandImpact = "read" | "build" | "write-dev" | "write-prod";

export interface OperatorCommand {
  cmd: string;
  desc: string;
  impact: CommandImpact;
}

export interface CommandGroup {
  title: string;
  blurb?: string;
  commands: OperatorCommand[];
}

// impact legend: read = safe/read-only · build = compiles, no DB · write-dev = changes your LOCAL DB
// (via .env.local) · write-prod = changes PRODUCTION data.
export const COMMAND_IMPACT_LABEL: Record<CommandImpact, string> = {
  read: "read-only",
  build: "build",
  "write-dev": "writes dev DB",
  "write-prod": "writes PROD",
};

export const OPERATOR_COMMANDS: CommandGroup[] = [
  {
    title: "Develop & ship",
    commands: [
      { cmd: "pnpm dev", desc: "Start the local dev server (Next + webpack) on http://localhost:3040.", impact: "build" },
      { cmd: "pnpm build", desc: "Production build — exactly what deploys. Run before pushing anything non-trivial.", impact: "build" },
      { cmd: "pnpm start", desc: "Serve the production build locally on :3040 (after pnpm build).", impact: "build" },
      { cmd: "pnpm lint", desc: "Run ESLint across the repo.", impact: "read" },
      { cmd: "pnpm typecheck", desc: "Next typegen + tsc --noEmit (full type check).", impact: "read" },
      { cmd: "pnpm test", desc: "Run the Vitest unit tests once.", impact: "read" },
    ],
  },
  {
    title: "Database & migrations",
    blurb: "Migrations are Drizzle-generated SQL in src/db/migrations. Generate → review → apply.",
    commands: [
      { cmd: "pnpm db:generate", desc: "Generate a new migration from schema changes (offline diff → writes src/db/migrations/NNNN_*.sql). Run after editing src/db/schema/*.", impact: "read" },
      { cmd: "pnpm db:migrate", desc: "Apply pending migrations to your LOCAL/dev DB (uses .env.local). Additive + safe.", impact: "write-dev" },
      { cmd: "pnpm db:migrate:prod", desc: "Apply pending migrations to PRODUCTION (ambient env, no .env.local). ⚠️ Run right after merging a branch/bundle that adds a migration — otherwise the next deploy 500s on the missing column/table.", impact: "write-prod" },
      { cmd: "pnpm db:push", desc: "Push the schema straight to the DB with NO migration file (dev convenience only — no history; don't use on prod).", impact: "write-dev" },
      { cmd: "pnpm db:studio", desc: "Open Drizzle Studio to browse/edit the DB in a browser.", impact: "read" },
    ],
  },
  {
    title: "Inspect (read-only helpers)",
    blurb: "Dump DB state to the terminal so you can read it without the UI. All safe.",
    commands: [
      { cmd: "pnpm feedback:list", desc: "Learner curriculum feedback (comments/corrections/questions on lessons), with course › lesson titles. Flags: --tenant <slug> · --status open|reviewed|resolved · --kind correction|comment|question · --limit N.", impact: "read" },
      { cmd: "pnpm reports:list", desc: "In-app 'Report a problem' submissions (bug/feedback/idea) for triage. Flags: --tenant <slug> · --status new|triaged|closed · --limit N.", impact: "read" },
      { cmd: "pnpm tracker:show", desc: "Print the Documentarian program build tracker (checkboxes + notes + comments) from /admin/documentarian. Flags: --tenant <slug>.", impact: "read" },
    ],
  },
  {
    title: "Content tools",
    commands: [
      { cmd: "pnpm reassign:instructor", desc: "Bulk-reassign course instructors to the owner. Dry-run by default; add --apply to write.", impact: "write-dev" },
      { cmd: "pnpm reveal:audit", desc: "Inventory every inline \"Check yourself\" prompt across the authored courses and whether a recall-card answer exists to reuse (for the :::reveal rollout). Flags: --list · --course <substr>.", impact: "read" },
      { cmd: "pnpm reveal:convert <course…>", desc: "Convert a course's \"Check yourself\" prompts to :::reveal, reusing each lesson's answer from the next lesson's matching recall cards. Dry-run by default; add --write. Prompts with no clear recall match are left for manual authoring. Reseed after (pnpm seed:courses).", impact: "read" },
      { cmd: "pnpm srt:transcript", desc: "Convert an .srt caption file into a lesson's synced transcript_content.", impact: "read" },
      { cmd: "pnpm course:script", desc: "Export a course to a flat teleprompter script (for recording).", impact: "read" },
    ],
  },
  {
    title: "Seed content",
    blurb: "Populate courses/data. By default they target your LOCAL DB (.env.local). Re-runnable.",
    commands: [
      { cmd: "pnpm seed:tenants", desc: "Seed the tenants (schools) + their domains.", impact: "write-dev" },
      { cmd: "pnpm seed:owner", desc: "Re-home all courses to the platform owner + set the instructor byline. Set PLATFORM_OWNER_EMAIL first.", impact: "write-dev" },
      { cmd: "pnpm seed:bvc  ·  pnpm seed:bvc:real", desc: "Seed BVC content (seed:bvc:real = the real 21-episode curriculum + quizzes + maps).", impact: "write-dev" },
      { cmd: "pnpm seed:map", desc: "Seed the Commodity Map / Growing Belts geo data.", impact: "write-dev" },
      { cmd: "pnpm seed:languages", desc: "Seed the language courses (es/fr/pt/it + dialogues).", impact: "write-dev" },
      { cmd: "pnpm seed:courses", desc: "Seed the general authored courses.", impact: "write-dev" },
      { cmd: "pnpm seed:langchain", desc: "Seed the LangChain/LangGraph courses (auto-discovers scripts/data/langchain/*).", impact: "write-dev" },
      { cmd: "pnpm seed:faa", desc: "Seed the FAA Part 107 course.", impact: "write-dev" },
      { cmd: "pnpm gen:health  →  pnpm seed:health", desc: "Generate the health-course data (from CentOS), then seed it. Run gen first.", impact: "write-dev" },
      { cmd: "pnpm seed:speedway", desc: "Seed the Speedway course.", impact: "write-dev" },
    ],
  },
  {
    title: "AI / retrieval",
    blurb: "Builds the search corpus for the per-course 'chat with the sources' feature.",
    commands: [
      { cmd: "pnpm rag:index --course <slug>", desc: "Chunk + embed (Gemini 768-dim) a course's lesson bodies + bibliography citations into source_chunks (a clean rebuild). Add --source-url <url> to also ingest a PUBLIC-DOMAIN full text (e.g. Puckett on archive.org); --tenant <slug> to disambiguate a shared slug. Needs GOOGLE_GEMINI_API_KEY.", impact: "write-dev" },
    ],
  },
];
