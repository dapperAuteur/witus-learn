# Codeless sales and promotions — handoff notes

Branch: `feat/codeless-promotions`. From BAM's in-app feedback (2026-08-18, `/admin/marketing`):
promotions that do not require a promo code, for a discount or a free course or bundle, with start
and end dates or running indefinitely until ended by hand, shown as a struck-through old price
beside the new one.

`plans/` does not exist in this worktree and is gitignored anyway, so the operator task that would
normally live in `plans/user-tasks/NN-run-migration-*.md` is written out here instead.

---

## 1. OPERATOR TASK: run the migration before/at deploy

**Scope tag:** database · deploy-blocking

**What + why.** This branch adds one Drizzle migration, `0054_needy_marauders.sql`, creating the
`promotions` table. **What this blocks:** without it, every catalog page, the course page, the
bundle page, `/admin/marketing`, `/api/admin/sales`, `/api/courses/[id]/enroll` and
`/api/bundles/[slug]/buy` will 500 on the missing table, because they all read it. There is no
graceful degradation, so run it as part of merging, not after.

**Steps (in this order, after merging):**

```bash
pnpm db:migrate          # local/dev, needs .env.local
pnpm db:migrate:prod     # production
```

No seed script needs re-running: promotions are created by hand in the admin UI, and there are
none until BAM makes one.

**How to mark done.** Open `/admin/marketing` on the live site, create a sale on one course, and
confirm the course page shows the struck price. Then press **End now** and confirm it goes back.

**Not yet applied to dev.** This worktree has no `.env.local`, so `pnpm db:migrate` could not be
run here. The migration was generated offline (drizzle-kit's offline diff) and is committed; it has
not been executed against any database yet.

---

## 2. README sentences (paste into the feature list; README.md deliberately untouched)

> **Sales and promotions (no code needed).** Brand admins can put a course, a bundle, or the whole
> school on sale from `/admin/marketing`: percent off, dollars off, or free, starting now or on a
> date, ending on a date or running indefinitely until ended by hand. The catalog shows the list
> price struck through beside the new one, and checkout re-resolves the price on the server, so the
> amount charged is always the amount shown. The course's list price is never overwritten, so
> ending a sale restores it exactly. Promo codes still work alongside sales.

## 3. Roadmap sentence (for `src/lib/roadmap.ts`; deliberately untouched per the brief)

> Codeless sales and promotions — shipped 2026-08-18. Per-course, per-bundle and brand-wide price
> cuts with optional windows and a manual "End now", resolved server-side at checkout. Subscription
> pricing is deliberately out of scope until the recurring-discount rule is decided.

---

## 4. What was built

| Piece | File |
| --- | --- |
| Schema + CHECK constraints | `src/db/schema/promotions.ts`, `src/db/migrations/0054_needy_marauders.sql` |
| Pure resolution (no DB, no Stripe) | `src/lib/sale-pricing.ts` |
| Tenant-scoped queries | `src/db/queries/promotions.ts`, exposed via `src/db/scoped.ts` |
| Price display | `src/components/price-tag.tsx`, `src/components/course-card.tsx` |
| Surfaces | `(tenant)/page.tsx`, `(tenant)/courses`, `(tenant)/instructors/[username]`, `(tenant)/[username]/[courseSlug]`, `(tenant)/bundles/[slug]` |
| Checkout | `src/app/api/courses/[id]/enroll/route.ts`, `src/app/api/bundles/[slug]/buy/route.ts`, `src/lib/stripe.ts` |
| Admin UI + API | `src/components/sales-admin.tsx`, `src/app/api/admin/sales/route.ts`, `src/app/api/admin/sales/[id]/route.ts`, panel on `(tenant)/admin/marketing` |
| Help | `sales-and-promotions` article in `src/lib/help-articles.ts` (+ a pointer from `marketing-tools`) |
| Tests | `tests/sale-pricing.test.ts` (42), `tests/isolation/promotions.test.ts`, `tests/isolation/promotions.db.test.ts` |

### Decisions worth re-reading before extending this

- **Precedence:** most specific scope wins (a course/bundle sale beats a brand-wide one in BOTH
  directions, deeper or shallower), then the largest discount, then newest `created_at`, then id.
  The last two tie-breaks exist so the same inputs always pick the same row and the price cannot
  flicker between renders.
- **Never written back to `courses.price` / `bundles.price`.** A discounted checkout uses an ad-hoc
  `price_data` line item on the Checkout Session against the course's existing Stripe *product*
  (`ensureCourseProduct` / `ensureBundleProduct`). The cached `stripe_price_id` still represents the
  list price and is untouched.
- **Connect payouts and the platform fee follow the amount actually charged**, not the list price;
  a fee computed on $19 for a $9 sale would overdraw the payment.
- **Subscriptions are excluded.** "Discount a recurring price" has no agreed answer (first period
  only? every period? for how long?) and guessing would charge people something nobody decided.
  `resolvePrice` returns the list price for `priceType === "subscription"`.
- **A free-by-sale purchase never touches Stripe**: the enroll/buy routes enroll directly, the same
  path a genuinely free course uses.
- **Colours:** old price `text-red-700 dark:text-red-400` (about 6.3:1 light, 6.9:1 dark), new price
  `text-emerald-700 dark:text-emerald-300` (about 5.6:1 light, 12:1 dark) on this app's white and
  neutral-900 surfaces. Raw `red-600`/`green-500` were rejected: they fail AA on the dark surface.
  Colour is never the only signal (strike-through, bold weight, and the "was/now" text carry it too).
- **Screen readers:** the struck price is `aria-hidden` inside `<s>`, and a `sr-only` span reads
  "was $19, now $9". `<s>` rather than `<del>`: this is a price that no longer applies, not an edit.

### Known gaps (deliberate, not oversights)

- The paste-anywhere embed card (`/embed/card/[id]`, `src/lib/embed-card.ts`) still shows the list
  price. It is a separate marketing surface with its own price label; wiring promotions into it is a
  small follow-up, and showing the list price there under-promises rather than over-promises.
- `/admin/pricing` shows proposed LIST prices and is unaware of sales, which is correct: it is a
  pricing-strategy page, not a live-price page.
- No usage cap or per-learner limit on a sale (promo codes have `max_uses`). A public sale with a
  cap would need a "first N buyers" story that nobody has asked for yet.
