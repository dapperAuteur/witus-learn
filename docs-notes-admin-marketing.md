# Admin marketing notes (branch `feat/admin-marketing`)

Two things live here: (1) the campaign-engine decisions BAM must make before real in-app email
sending ships, and (2) the README/roadmap sentences for the session that owns those files
(this branch deliberately does not touch `README.md` or `src/lib/roadmap.ts`).

## 1. What shipped on this branch

`/admin/marketing` (brand_admin+, tenant-scoped) now consolidates every marketing lever that
actually exists:

- **Signals**: captured leads (links to `/admin/leads`), top courses by people waiting
  (reuses `src/lib/lead-interest.ts`), and social-share counts by channel
  (`src/db/queries/social-shares.ts`).
- **Course announcements**: which published courses have no `announced_at` yet, a link to the
  existing batch tool at `/teach/announce` (WitUS Outbox drafts, nothing auto-publishes), and a
  new **Compose announcement** form that drafts a course-announcement email (subject + body from
  the course's real title/description via `src/lib/marketing/announcement-email.ts`) with
  copy-to-clipboard and a `mailto:` fallback. Sending happens through BAM's own email tool for
  now; the form says so in its own copy.
- **Promo codes**: the existing management UI (create/list/remove, Stripe coupon mirror).
- **Email campaign drafts**: the existing composer with live audience counts. The Send button
  stays inert on purpose; see the decisions below. (The page used to point at
  `docs/DECISIONS-NEEDED.md`, which does not exist in the repo; it now points here.)

No migration, no new dependency. The `email_campaigns` table already exists (migration 0013,
merged earlier).

## 2. Campaign-engine decisions needed before real sending ships

This repo currently sends **transactional Mailgun email only**. A bulk "Send campaign" button is
not an engineering task first; it is these product decisions. Nothing below should be guessed by
a coding session.

1. **Audience source of truth.** Who can a campaign go to: rows in `leads`, active enrollees
   (`enrollments` joined to users), both, or per-campaign segments (for example "leads waiting on
   course X", which `lead-interest.ts` can already compute)? Leads captured via "notify me" have a
   narrow implied consent ("tell me when this course opens"); a general newsletter to them is a
   different consent than the one they gave.
2. **Consent + unsubscribe model (legal, not optional).** CAN-SPAM/GDPR require a working
   unsubscribe in every bulk message. That means: a suppression table (or a `unsubscribed_at`
   column on `leads` and a per-user email preference), a signed one-click unsubscribe URL, honoring
   it across ALL tenants or per tenant (decide: does unsubscribing from one school unsubscribe from
   every school on the platform?), and List-Unsubscribe headers.
3. **Sender identity + deliverability.** Which domain sends: one shared Mailgun domain for the
   platform, or per-tenant sending domains (SPF/DKIM per school)? Per-tenant is the brand-correct
   answer for a white-label LMS but each school then needs DNS records. Also: dedicated vs shared
   IP, and warm-up if volume grows.
4. **List hygiene.** Bounce/complaint webhooks from Mailgun must mark addresses undeliverable, or
   sender reputation decays and transactional mail (magic links!) starts landing in spam. This is
   the strongest reason NOT to bolt bulk sending onto the transactional path casually.
5. **Sending mechanics.** Batch size and throttle, retry policy, and where the send runs (a
   Vercel function will time out on a large list; likely needs chunked sends via a queue or cron).
   Campaign status transitions (draft, scheduled, sending, sent, failed) and a per-recipient send
   log for "who got this".
6. **Content + tracking.** Plain text vs branded HTML template (per-tenant branding), open/click
   tracking on or off (privacy stance so far has been privacy-light; shares are counted without
   user ids), and whether course links carry UTM parameters.
7. **Who may send.** brand_admin per school, or platform owner only at first? A wrong-audience
   send is irreversible; a second-person confirm step ("type the audience count") is cheap
   insurance.

Suggested next slice, once decided: unsubscribe model + suppression table first (it is the legal
gate), then a per-recipient send log, then a chunked Mailgun sender behind an owner-only confirm.

## 3. Sentences for the owning sessions (do not apply here)

README, feature list bullet:

> **Marketing console**: `/admin/marketing` gathers promo codes, course announcements (WitUS
> Outbox batch + a copy/mailto email draft composer), campaign drafts with live audience counts,
> and demand/share signals on one tenant-scoped page. Bulk email sending is intentionally not
> built yet; the open decisions live in `docs-notes-admin-marketing.md`.

Roadmap (`src/lib/roadmap.ts`), for the "email campaigns beyond promo codes" item: mark the
consolidation + draft-composer slice shipped, and keep a separate not-done item for real sending,
for example:

> Marketing console shipped (promo codes, announcements, email draft composer, demand + share
> signals). Real campaign sending remains open pending audience/consent/unsubscribe decisions
> (docs-notes-admin-marketing.md).
