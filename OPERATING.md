# Operating Learn.WitUS — migrate, seed, keep content current

The one place for the commands to run the app and keep courses/content correct. Same content is
in the in-app **Help Center** (`/help` → "Keeping courses & content current"). Update this file
whenever a migration or seed is added.

All commands run from the repo root. Local uses `.env.local`; prod uses the deploy's env
(the `:prod` variants skip `--env-file`). `pnpm` is the package manager.

---

## 1. The golden rule after merging any branch

**Migrate first, then seed.** Code alone never changes what learners see — courses render from the
**database**, so a content edit only goes live after its seed re-runs.

Migrations run **by themselves** after a merge to `main` that changes `src/db/migrations/`
(GitHub Actions, "Migrate production database"; see §3a). `seed:courses` and the RAG index run **by
themselves** after a merge that changes a course file (GitHub Actions, "Seed production courses"; see
§3b). Check both runs went green. The other seeds (§4) are still run by hand:

```bash
pnpm db:migrate:prod        # only if the automatic run failed or the secret is not set yet (§3a)
pnpm seed:courses:prod      # only if the automatic seed run failed (§3b)
pnpm seed:<another seed>    # seeds other than seed:courses (§4)
```

If you're not sure which seed owns a course, see the reference in §4.

---

## 2. Fresh database, in order

```bash
pnpm db:migrate:prod        # 1. schema (all migrations, currently through 0024)
pnpm seed:tenants           # 2. tenants FIRST (BVC + Learn.WitUS + test tenant). Everything needs this.
pnpm seed:owner             # 3. platform owner / instructor (BAM)
pnpm seed:map               # 4. Commodity Map + growing belts + languages atlas
pnpm seed:languages         # 5. language courses
pnpm seed:courses           # 6. civics, AI ladders, hoodoo, Ed.L.D., etc. (most authored courses)
pnpm seed:langchain         # 7. the 3 LangGraph courses (AI & Technology)
pnpm seed:health            # 8. NASM / ECS / Read-Your-Body
pnpm seed:faa               # 9. FAA Part 107 (needs the gitignored content/drone-curriculum/)
pnpm seed:bvc:real          # 10. real BVC episode content
pnpm seed:speedway          # 11. ElementaryMBA: Speedway, Robotics/STEAM, Young Makers
pnpm seed:demo              # 12. demo account (brand_admin on Acme) + baseline — needs
                            #     DEMO_VISITOR_USER_EMAIL set; re-run after reseeding Acme content
```

Every seed is **idempotent** (upserts by slug), so re-running is always safe. `seed:tenants` must
come before any content seed.

---

## 3. Migrations

- **Apply pending:** `pnpm db:migrate:prod` (drizzle-kit applies each `src/db/migrations/NNNN_*.sql`
  in number order; already-applied ones are skipped).
- **After changing the schema** (`src/db/schema/*.ts`): `pnpm db:generate` creates the next
  migration; commit it; then `db:migrate:prod` on deploy. **Never** ship a schema change without its
  migration, or the next prod deploy 500s on the missing column.
- Current head: the last entry in `src/db/migrations/meta/_journal.json`.

### 3a. Automatic migrations (`.github/workflows/migrate-production.yml`)

**The automatic path.** A push to `main` that changes anything under `src/db/migrations/` (the
`out` folder in `drizzle.config.ts`; `tests/migrate-workflow.test.ts` fails if the two drift apart)
runs the workflow **Migrate production database**. It installs the app, then runs
`scripts/migrate.ts` (the script behind `pnpm db:migrate:prod`) with the repository secret
`NEON_DIRECT_URL` mapped onto `DATABASE_URL_UNPOOLED`. Drizzle applies only the pending migrations
and records each in `drizzle.__drizzle_migrations`, so a second run is a no-op. The run's summary
page says how many it applied, how many the database records, and the latest migration in the repo.
Runs never overlap and are never cancelled midway (a second merge waits). Vercel deploys the same
push at the same time, so keep migrations additive: the old code must keep working on the new schema
for the minute the job takes.

**Seeds are not run by this workflow;** `seed:courses` has its own (§3b), which waits for this one.

**The secret, set once** (no value is pasted anywhere; GitHub masks it in every log):

```bash
neon connection-string --project-id <witus-learn Neon project id> \
  | gh secret set NEON_DIRECT_URL --repo dapperAuteur/witus-learn
```

- `neon connection-string` prints the **direct** (unpooled) string unless you pass `--pooled`
  (`--pooled` defaults to false), for the project's default branch. That is production unless the
  Neon console shows a different default; check before setting the secret. Migrations need the
  direct string.
- The project id is in the Neon console (project settings). The repository variable
  `NEON_PROJECT_ID`, set for the preview-branch cleanup workflow, names the same project, so
  `--project-id "$(gh variable get NEON_PROJECT_ID --repo dapperAuteur/witus-learn)"` works too.
- If the project has more than one database or role, pass `--database-name` and `--role-name` with
  the names the Neon console shows, so the string points at the app's database.
- Without the secret the job fails at its first step with
  `::error::Set the repository secret NEON_DIRECT_URL ...`, and nothing else runs.

**Run it by hand (no merge needed).** GitHub, the repository's **Actions** tab, **Migrate production
database**, **Run workflow** on `main`. Or from a terminal: `gh workflow run migrate-production.yml
--repo dapperAuteur/witus-learn --ref main`, then `gh run watch`. (A witus.online admin page with a
Run button for every app's post-deploy steps is planned; until it ships, this button is the trigger.)

**Manual fallback (the laptop).** The same thing the job does, from `.env.prod`:

```bash
pnpm install --frozen-lockfile
pnpm db:migrate:prod        # tsx --env-file=.env.prod scripts/migrate.ts
```

`.env.prod` needs `DATABASE_URL_UNPOOLED` (preferred) or `DATABASE_URL` for production; see
`scripts/db-url.ts` for every name it accepts. Expected output ends with a line like
`Migrations applied: 1 new this run; N recorded in drizzle.__drizzle_migrations; N in the repo (latest 00NN_name).`
A second run says `0 new this run`.

**Check what production has applied** (read-only):

```sql
SELECT count(*) AS applied, max(created_at) AS latest_ms FROM drizzle.__drizzle_migrations;
```

### 3b. Automatic seeds and RAG index (`.github/workflows/seed-production.yml`)

**Why it is safe now.** Seeds used to overwrite lessons teachers edited in the app. The seeder now
records what it last wrote to each lesson (`lessons.seed_hash`). A lesson edited in the app since then
is **left alone and reported**: the seed log says `edited in the app: <course>/<lesson>`, and the
lesson's instructor and the platform owner see a warning on `/teach` (and the owner on `/admin`) on
every visit until they open the course's Teach page, compare the app's text with the file's, and
choose **Keep the app edit** (quiet until the course file changes again) or **Take the course file's
version**. A lesson with no `seed_hash` yet (the first seed after migration 0074) is written as seeds
always did, so an in-app edit made before that first run is not protected. The code is
`src/lib/seed-drift.ts`.

**The automatic path.** A push to `main` that changes `scripts/data/**`, `scripts/seed-courses.ts`
or the seeding code runs **Seed production courses**: it waits for this commit's migration run,
applies pending migrations (a no-op when §3a already did), runs `scripts/seed-courses.ts` (the script
behind `pnpm seed:courses:prod`), then re-indexes exactly the courses whose content that seed changed
with `scripts/rag-index.ts --courses-file` (the script behind `pnpm rag:index:prod`; throttled, see
§5a). The run summary lists the drift and one `ok`/`FAILED` line per indexed course. Re-running it is
safe: unchanged lessons are rewritten with the same content and nothing is re-indexed.

**Run it by hand.** Actions, **Seed production courses**, **Run workflow** (inputs: whether to seed,
and which courses to index: `seeded`, `changed-only` for every previously indexed course that is
stale, `needing` for every course never indexed or stale, or `none`). Or
`gh workflow run seed-production.yml --repo dapperAuteur/witus-learn --ref main -f rag=changed-only`.

**The secrets, set once** (piped, never pasted; GitHub masks them). `NEON_DIRECT_URL` is the same
secret as §3a. The Mistral key (embeddings since migration 0076; the old `GOOGLE_GEMINI_API_KEY`
secret is no longer read by this workflow):

```bash
grep '^MISTRAL_API_KEY=' .env.prod | cut -d= -f2- | tr -d '"' \
  | gh secret set MISTRAL_API_KEY --repo dapperAuteur/witus-learn
```

Without either, the job stops at its first step with `::error::Set the repository secret ...`.

**Manual fallback (the laptop).**

```bash
pnpm install --frozen-lockfile
pnpm db:migrate:prod
SEED_REPORT_PATH=/tmp/seed-report.json pnpm seed:courses:prod   # prints "Seed drift: N course(s) changed, ..."
pnpm rag:index:prod --courses-file /tmp/seed-report.courses.json  # or --course <slug> [--tenant <slug>]
pnpm rag:list:prod                                               # what still needs indexing
```

Expected seed output ends with `Seed drift: ... course(s) changed, ... lesson(s) left as edited in the
app ..., ... lesson(s) baselined.` and `Done.`

### 3c. CYOA crossroads index (the last step of `seed-production.yml`)

The "where next" crossroads on a CYOA course's lesson player read `lesson_embeddings.embedding_v2`,
Mistral `mistral-embed` vectors (1024 dimensions) **since migration 0079** (BAM, 2026-11-03: "move CYOA
to Mistral"; it was Gemini `gemini-embedding-001`, 768, and production has no Gemini key). Each row also
stores `content_hash`, the md5 of the title and text it embedded, so a lesson **needs embedding** when it
is published and has no v2 vector or its title or text changed since. A lesson that needs one still shows
**Continue** and **Unexpected path**, just no **Related** or cross-course picks. The legacy 768-dim
`embedding` column stays for the deployed code during the switch and is dropped later (plan 99).

**The automatic path.** Every **Seed production courses** run (§3b) ends with
`scripts/cyoa-index.ts --needing` (the script behind `pnpm cyoa:index:prod`), after the migrations and
even when the seed or the RAG step failed. It embeds only the missing or changed lessons of courses
whose navigation is CYOA, so a run with nothing changed embeds nothing. Same embedder, pacing and 429
retries as §5a. Publishing a course and the course page's **Re-index crossroads** button run the same
indexer for one course.

**The one-time backfill after 0079.** Every CYOA lesson needs a v2 vector once. Actions, **Seed
production courses**, **Run workflow** with seed off, rag `none`, cyoa `needing`:

```bash
gh workflow run seed-production.yml --repo dapperAuteur/witus-learn --ref main -f seed=false -f rag=none -f cyoa=needing
```

The run summary prints `CYOA courses: N; published lessons: M; needing embedding: K.`, one `ok`/`FAILED`
line per course and a `Done:` line. Run it again and K is 0.

**Manual fallback (the laptop).**

```bash
pnpm db:migrate:prod                 # applies 0079 if it hasn't run
pnpm cyoa:index:prod --list          # read-only: every CYOA course and how many lessons need embedding
pnpm cyoa:index:prod --needing       # the backfill; --all re-embeds everything
pnpm cyoa:index:prod --course <slug> [--tenant <slug>] [--force]   # one course
```

Needs `MISTRAL_API_KEY` in `.env.prod` (for everything but `--list`). Exit code 1 when any course
failed, after trying all of them.

---

## 4. Which seed owns which course (so you know what to re-run)

| Seed | Owns |
|---|---|
| `seed:courses` | Civics (101, US Constitution, state-vs-federal, all `state-civics-*`), AI ladders (`ai-*`), Hoodoo, Ed.L.D., cyber, knots, survival, broadcasting, how-to-run, help-a-campaign, learning-how-to-learn, course-creation, robotics-steam, spotting-misleading-marketing, the Work.WitUS guides (`work-witus-*`, series WORK; born private, BAM opens each with Make public) |
| `seed:languages` | Spanish, French, Portuguese, Italian |
| `seed:langchain` | LangGraph: Triage Agent, Reflection Loops, Per-Agent RAG (auto-discovers `scripts/data/langchain/*`) |
| `seed:health` | NASM CPT/CES/CNC, Read-Your-Body, ECS Foundations/Fitness/Nutrition/Neuroscience |
| `seed:speedway` | ElementaryMBA: Speedway docuseries, Intro to Robotics & STEAM, Young Makers, AI for Entrepreneurs |
| `seed:faa` | FAA Part 107 |
| `seed:bvc:real` | Better Vice Club real episodes |
| `seed:map` | Commodity Map, growing belts, languages atlas |

Course source lives in `scripts/data/<slug>-course.ts` (or `scripts/data/langchain/<repo>/` for the
LangGraph courses). **Edit the source → re-run that seed** to push it live.

---

## 5. Keeping content current (typical loop)

1. Edit the course in `scripts/data/…` (or the LangGraph `course.json` + `.md`).
2. `pnpm typecheck` and `pnpm test` locally.
3. Commit + push; merge to `main`.
4. On the deploy: `pnpm db:migrate:prod` (if the schema changed) then the owning seed from §4.
5. Verify: open the course; check lessons render, quizzes score, recall cards reveal.

Teachers can also edit lesson text, glossary, sources, and recall prompts **in-app** on the
**Curriculum** tab under `/teach/<courseId>` — those save straight to the DB (no seed needed).

### 5a. RAG index (embeddings)

A course's **course chat** (one tool since 2026-11-03; it replaced the tutor and "Chat with the sources") answers from `source_chunks`, built by `indexCourse` in
`src/lib/rag/index-course.ts`, which three things call: the admin page **`/admin/rag`** (platform owner:
every course never indexed or changed since, each with **Run**, plus **Run all**, which works through
the list one course per request from the browser), `pnpm rag:index` (`scripts/rag-index.ts`), and
`seed-production.yml` (§3b). A seed that changes lesson text leaves that index stale until it is rebuilt.
(The CYOA crossroads index is a different table with the same embedder: §3c.)

**Embeddings are Mistral's `mistral-embed` (1024 dimensions) since migration 0076** (BAM, 2026-11-02;
it was Gemini `gemini-embedding-001`, 768, whose free tier failed `rag:index:prod` with 429s). They live
in `source_chunks.embedding_v2`; retrieval embeds the question with the same model and reads only that
column, so a chunk indexed before 0076 is not returned until its course is re-indexed. The model is in
the content hash's header, so **every course shows as "changed" after 0076 deploys: open `/admin/rag`
and press Run all.** The legacy 768-dim `embedding` column is left in place for the deployed code during
the switch and dropped by a later cleanup migration (plan 99).

```bash
pnpm rag:list:prod                                   # every course: never indexed / changed / current
pnpm rag:index:prod --course <slug>                  # one course (add --tenant <slug> for a shared slug)
pnpm rag:index:prod --course <slug> --all-tenants    # that slug in every school
pnpm rag:index:prod --needing --changed-only         # every course indexed before and changed since
pnpm rag:index:prod --needing                        # ...plus every course never indexed (many Mistral calls)
pnpm rag:index:prod --courses-file changed.json      # [{ "tenantSlug": "...", "courseSlug": "..." }]
```

- **Rate limits.** Learn's Mistral key reported `x-ratelimit-limit-req-minute: 60` on 2026-11-02, so
  the indexer paces requests to 60 a minute, and when a response says
  `x-ratelimit-remaining-req-minute: 0` it waits for the minute to turn. It sends chunks in batches
  (`POST https://api.mistral.ai/v1/embeddings`, at most 64 texts and about 8,000 estimated tokens per
  request: our own caps, since Mistral's API reference states none; one input may hold 8k tokens).
  On a 429 it waits the `Retry-After` header (or backs off 2 s, 4 s, 8 s... with jitter, capped at
  60 s) and retries the same batch. Progress prints as `batch 7/40, rate limited, waiting 16 s (retry 1/8)`.
  Price: USD 0.1 per million tokens (Mistral's model card, read 2026-11-02).
- **Env vars:** `MISTRAL_API_KEY` (required, sent only in the `Authorization: Bearer` header; Vercel
  production already has it), `RAG_EMBED_REQUESTS_PER_MINUTE` (default `60`),
  `RAG_EMBED_TOKENS_PER_MINUTE` (optional, no default), `RAG_EMBED_MAX_RETRIES` (default `8`
  consecutive 429s on one batch before that course fails).
- **Safe to re-run.** Everything is embedded before anything is deleted; the old chunks are swapped for
  the new ones in one transaction, so a failure leaves the previous index in place. A public-domain
  full text ingested with `--source-url` is kept on later runs without the flag, and a kept one with no
  1024-dim vector yet is embedded from its stored text (not fetched again).
- **What was indexed** is recorded per course in `course_rag_index` (content hash, `indexed_at`, chunk
  count). The hash covers the lesson titles and bodies and the citation text, so `rag:list` and
  `--needing` know which courses changed. A course indexed before this record existed shows as
  "changed" until it is indexed once more.
- Exit code 1 when any course failed (after trying all of them); each course prints one `ok` or
  `FAILED` line.

---

## 6. Other operator tasks

- **In-app bug reports / feedback:** `pnpm reports:list` prints what learners filed via the
  "Report a problem" button (also at `/admin/reports`).
- **Deploy:** Vercel (Next.js App Router). Env vars in Vercel → Settings → Environment Variables.
- **Streaming:** paste a Viloud/Wave.Video embed at `/admin/live`, or set `RTMP_STREAM_PLAYBACK_URL`
  / `STREAM_EMBED_CODE` once as env vars (the app falls back to them).
- **Operator to-dos from a session** land in `plans/user-tasks/NN-*.md` (local, gitignored).
- **Demo account** ("Try the demo" on the Acme login page + its nightly reset cron): set
  `CRON_SECRET` / `DEMO_VISITOR_PASSWORD` / `DEMO_VISITOR_USER_EMAIL` in Vercel, add the Acme
  tenant's public host, then `pnpm seed:demo` once. See `plans/user-tasks/62-demo-account-setup.md`.
