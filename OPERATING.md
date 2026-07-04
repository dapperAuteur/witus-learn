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

```bash
pnpm db:migrate:prod        # apply any new migrations (safe to re-run; only pending ones apply)
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
- Current head: **0024** (`quiz_attempts`). Recent: 0021/0022 (`recall_content`), 0023 (`media_parts`).

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
