# Handoff notes: feat/library-pdf-download (for the orchestrator — not for merge)

This file exists because the worktree has no `plans/` directory (gitignored). The orchestrator
should file the user-task below in `plans/user-tasks/` and apply the doc sentences, then this file
can be deleted; it is not meant to ship.

## Migration reminder (file as plans/user-tasks/NN-run-migration-library-pdf.md)

- **Scope tag**: witus-learn (repo-local)
- **What + why**: Branch `feat/library-pdf-download` adds Drizzle migration
  `src/db/migrations/0052_cloudy_bill_hollister.sql` (nullable `pdf` text + `pdf_bytes` integer
  columns on `library_documents`). It is already applied to the DEV database. **What this blocks**:
  the next prod deploy after merging 500s on `/admin/library` (the queries select `pdf_bytes` and
  `pdf IS NOT NULL`) until the columns exist in prod.
- **Steps**:
  1. Merge `feat/library-pdf-download` via the GitHub UI.
  2. From the repo root with prod `DATABASE_URL` (or `DATABASE_URL_UNPOOLED`) exported in the
     shell (`pnpm db:migrate:prod` does not auto-load any .env file): `pnpm db:migrate:prod`
  3. Re-run the library sync so the PDFs upload next to the markdown:
     `node scripts/sync-library.mjs <path>/<name>.md [...]` — the script now uploads the sibling
     `<name>.pdf` when one sits next to each markdown file (the typeset A5 PDFs live at
     `gemini/witus/plans/playbook/*.pdf`). No sibling PDF clears the column.
- **What Claude will use**: nothing further; the feature reads whatever the sync uploaded.
- **How to mark done**: `/admin/library` list rows and the reader header show "Download PDF (size)"
  for synced documents, and the download opens as an attachment.
- **Related**: `plans/future/12-library-pdf-download.md` (spec);
  `plans/user-tasks/241-run-migration-library-documents.md` (the original library migration).

## README sentence (orchestrator applies; README.md deliberately untouched on this branch)

In the admin/library feature blurb: "The owner can also download each document's typeset PDF
(uploaded by `scripts/sync-library.mjs` from the sibling `<name>.pdf`) from the list rows or the
reader header."

## Roadmap sentence (orchestrator applies to src/lib/roadmap.ts; untouched on this branch)

Shipped: "Library PDF download — each owner-library ebook is downloadable as its typeset PDF from
/admin/library (synced alongside the markdown, owner-only)."
