# Docs notes: school roll-up + roster CRUD (feat/school-rollup-and-roster-crud)

Text for the bundler to place — this branch deliberately does not touch `README.md` or
`src/lib/roadmap.ts` (another session owns them right now).

## README (feature list)

- **School gradebook roll-up** (plans/50, Phase 3 read-only half): `/admin/gradebook` shows the
  tenant admin one row per learner across the whole school (courses enrolled, lessons completed,
  best-quiz average, cohort membership), with a CSV export at `/api/admin/gradebook.csv`
  (attachment download, `Cache-Control: no-store` — exports are student PII). Tenant-scoped like
  every other read; brand_admin/platform-owner only.
- **Roster CRUD completed** on `/cohorts/[id]`: alongside the existing invite-by-email and
  remove-member controls, the roster now lists **pending invites** with a copyable join link and
  a **Resend** action (`POST /api/cohorts/[id]/invites/[inviteId]/resend`). Resending re-delivers
  the same token (nothing already shared is invalidated) and surfaces the link when email is
  unconfigured, mirroring the create flow.

## Roadmap (src/lib/roadmap.ts)

Mark plans/50 Phase 3 as PARTIALLY shipped: roster CRUD (add / remove / resend) and the
tenant-wide school roll-up + CSV are done; grade/score editing (override/annotation rows) is
deliberately NOT built — it awaits a BAM decision per plans/50.

## Grade-edit scope boundary (state wherever Phase 3 is described)

Editing grades, quiz attempts, or completions is out of scope on this branch by design; plans/50
defers destructive edits in favor of a future override/annotation row so the audit trail stays
honest.
