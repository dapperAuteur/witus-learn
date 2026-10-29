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

Migrations now run **by themselves** after a merge to `main` that changes `src/db/migrations/`
(GitHub Actions, "Migrate production database"; see §3a). Check that run went green. Seeds are still
run by hand:

```bash
pnpm db:migrate:prod        # only if the automatic run failed or the secret is not set yet (§3a)
pnpm seed:<the affected seed(s)>   # re-seed the courses/content you changed
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

**Seeds are NOT automated.** Every seeder upserts lesson titles and text, and teachers can edit
lesson text in the app (`/teach/<course>`), so a seed on merge would silently overwrite their edits.
Seeds stay manual (§1, §4) until that is decided.

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

---

## 4. Which seed owns which course (so you know what to re-run)

| Seed | Owns |
|---|---|
| `seed:courses` | Civics (101, US Constitution, state-vs-federal, all `state-civics-*`), AI ladders (`ai-*`), Hoodoo, Ed.L.D., cyber, knots, survival, broadcasting, how-to-run, help-a-campaign, learning-how-to-learn, course-creation, robotics-steam, spotting-misleading-marketing |
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
