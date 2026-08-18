# Docs notes: collapsed verification boards

Sentences for whoever next edits `README.md` and `src/lib/roadmap.ts`. This branch deliberately does
not touch either file.

## README (the citation-verification section, wherever `/admin/citations` is described)

> Both verification boards group by course and start collapsed. Each course's summary line carries
> its counts (`12 sources, 3 unverified` on `/admin/citations`, `5 checks, 3 open` on
> `/admin/research`), so a reviewer can pick the course with outstanding work without scrolling past
> the ones that are done. The per-course "show only unchecked" filter on the citation board is
> unchanged and lives inside the panel it filters.

## Roadmap (`src/lib/roadmap.ts`)

> Shipped: the citation and source-check boards collapse by course, with open counts on every
> summary line, so a board of several hundred citations is navigable on a phone.

## Not changed

- No help article covers `/admin/citations` or `/admin/research` today (both are owner-only boards
  reached from the admin nav), so there was no in-app help text to update. If one is written later,
  it should say that the courses start collapsed and that the counts live on the summary line.
- `/audit/citations` shares the same list component, so invited auditors get the same collapse. An
  auditor who holds exactly one course grant still lands on an expanded panel, because a one-group
  board that collapses to a single line reads as an empty page.
