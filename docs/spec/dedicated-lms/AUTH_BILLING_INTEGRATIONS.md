# Auth, Billing & Integrations

Auth/roles, payments, AI, email, media, and ecosystem hooks. "Current" = CentOS; "Target" = new LMS.

---

## 1. Auth & roles

### Current (CentOS)
- Identity = Supabase `auth.users`; profile = shared `profiles` (`role ∈ member|teacher|admin`). Admin = `user.email === process.env.ADMIN_EMAIL`. Teacher = `role='teacher'` + a `teacher_profiles` row.
- Server pattern: `const supabase = await createClient(); const { data:{ user } } = await supabase.auth.getUser();` + a service‑role client (`getDb()`) for privileged writes. RLS keys on `auth.uid()`.

### Target (new LMS)
- **Better Auth + magic‑link** (ecosystem auth target). Better Auth owns `users`; the LMS owns `user_profiles` (username/display_name/avatar/bio + `is_platform_owner`).
- **Roles are per‑tenant** via `tenant_memberships(tenant_id, user_id, role ∈ learner|instructor|brand_admin)`. **Platform owner** is global (`user_profiles.is_platform_owner`).
- **Auth helpers to build:** `getSession()` → `{ user }` from Better Auth; `getMembership(userId, tenantId)` → role; guards `requireInstructor(courseId)`, `requireBrandAdmin()`, `requirePlatformOwner()`.
- **Admin determination** is no longer an env email — it's `is_platform_owner` (seed your own account at bootstrap) + per‑tenant `brand_admin`.
- **RLS:** do **not** copy CentOS `auth.uid()` policies. Enforce tenancy/ownership in the data‑access layer; optionally add Postgres RLS via request‑scoped GUCs (`SET app.user_id`, `SET app.tenant_id`).

### Instructor onboarding
1. `/teach` → instructor subscribes (platform subscription, separate from any course price) via Stripe Checkout (`plan = instructor | instructor-annual`).
2. Stripe webhook on completion → upsert `instructor_profiles` + grant `tenant_memberships.role='instructor'`.
3. **Stripe Connect:** instructor links a Connect account from their dashboard → populate `stripe_connect_account_id` + `stripe_connect_onboarded`. Required before publishing paid courses (unless platform‑owned).

---

## 2. Billing (Stripe)

### Enrollment flow (`POST /courses/[id]/enroll`)
- **Free course:** insert `enrollments` directly (idempotent). Guests allowed (`{enrolled:true, guest:true}`).
- **Paid course:** create a Stripe Checkout session → return `{ url }`. One‑time vs subscription by `price_type`; subscriptions honor `trial_period_days` (`trial_settings.end_behavior.missing_payment_method='cancel'`).
- **Stripe products/prices** are **lazy‑created** on first paid enroll and cached on `courses.stripe_product_id/stripe_price_id`, with `metadata.course_id`.
- **Re‑enrollment:** `reattempt` increments `attempt_number`; `metric_slots = min(attempt, 3)` (CentOS health tie‑in — keep as a generic attempt counter or drop). Stripe metadata carries `attempt_number` so the webhook upserts the right row.
- **Success/cancel URLs** use the site URL (per‑tenant deployment/domain), e.g. `/{courseRoute}?enrolled=true&session_id={CHECKOUT_SESSION_ID}`; client confirms via `/my-courses`.

### Payout routing (platform vs Connect)
```
isPlatformInstructor(user, tenant):
  current: email === ADMIN_EMAIL || email ∈ PLATFORM_TEACHER_EMAILS
  target:  user.is_platform_owner || membership flag 'platform_instructor' on the tenant
```
- **Platform instructor:** payment → platform Stripe account; no application fee.
- **Connect instructor:** payment → their `stripe_connect_account_id` via `transfer_data.destination` + `payment_intent_data.application_fee_amount = round(priceCents * feePercent/100)`. `feePercent` from `platform_settings.teacher_fee_percent` (default **15**; can be per‑tenant).

### Promo codes
`promo_codes` (code, discount_percent, max_uses, uses_count, expires_at, course_id?) ↔ a Stripe coupon. For Connect instructors, a **matching coupon is created on their Connect account**. Validated at enroll; `uses_count` incremented by the webhook.

### Webhook (`POST /api/stripe/webhook`; CentOS: `/api/stripe/academy-webhook`)
- `checkout.session.completed` → upsert enrollment (by metadata: course_id, user_id, attempt_number), increment promo usage.
- `customer.subscription.deleted` → set enrollment `status='cancelled'`.

### Per‑tenant billing (NEW)
- **Statement descriptor / receipt branding** per tenant (`tenants.stripe.statement_descriptor`). Vice content especially should not show a wellness brand on a card statement.
- **Account mode:** start **single Stripe account + per‑tenant descriptors** (simplest); design for **per‑tenant Stripe account** later (store account refs on the tenant) — see PRD OQ2.
- **Stripe customer id** is per‑tenant (`tenant_stripe_customers`), not on the global profile.

---

## 3. AI (Gemini)

| Use | Current | Notes |
|---|---|---|
| **Lesson embeddings** | `POST /courses/[id]/generate-embeddings` → `gemini-embedding-001` pinned **768d** → `lesson_embeddings` (ivfflat cosine) | New build may adopt the latest Gemini embedding model; keep the vector dim consistent with the index. |
| **CYOA crossroads** | `match_lessons` / `match_lessons_global` RPCs over embeddings | ⚠️ add `tenant_filter` to the global RPC (isolation). |
| **AI course recs** `[later]` | `GET/POST /courses/[id]/ai-recommendations` → `gemini-2.5-flash`, 24h cache in `courses.ai_recommendations` | prompt includes other courses' titles → ⚠️ tenant‑scope the candidate list (leaks titles otherwise). |
| **Path recommend** `[later]` | `GET /paths/recommend` → `gemini-2.5-flash`, top‑3 | tenant‑scope candidates. |

- **Env:** `GOOGLE_GEMINI_API_KEY` (sent as `x-goog-api-key`). Optionally route via **Vercel AI Gateway** for observability/failover, but the existing integration is direct Gemini — keep it unless you want the gateway.

---

## 4. Email (Resend)

- **Only user‑facing send:** the **completion certificate email** (`POST /courses/[id]/complete`) — `from = RESEND_FROM_EMAIL` (default `admin@centenarianos.com`), body has student/course/instructor + verification link.
- **Target:** sender is **per‑tenant** (`tenants.email.{from, reply_to, from_name}`) so BVC mail never says CentenarianOS. Verify each tenant's sending domain in Resend (operator task).
- **Lead notifications** are non‑user‑facing: `notifyLead()` → `sendToInbox()` HMAC‑POSTs to the WitUS Inbox (`INBOX_INGEST_URL`, `INBOX_SOURCE_SLUG`, `INBOX_INGEST_SECRET`). `[later]`/behind a tenant flag — the standalone LMS may not wire the WitUS Inbox at all.
- **Env:** `RESEND_API_KEY`, per‑tenant from‑addresses (in tenant config, not env).

---

## 5. Media (Cloudinary)

- **Library:** `media_assets` per owner (public_id, resource_type, secure_url, kind, name, tags, dims, duration). Registered via `POST /media` after a client‑side **unsigned upload** to Cloudinary.
- **Lessons** reference Cloudinary `secure_url` in `content_url` (video/audio/image/360). 360 poster derived via `so_0` transform.
- **Document proxy** `GET /document-proxy?url=` forces `inline` disposition for Cloudinary PDFs (host‑whitelisted: `res.cloudinary.com`, `cloudinary.com`); cache `public, max-age=60, s-maxage=300`.
- **Env:** `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` (+ unsigned preset). Cloudinary may stay shared across the ecosystem (per ecosystem infra rules) or be per‑app — decide at setup.

---

## 6. Ecosystem integrations (BVC) — `[later]`, behind tenant flags

These exist as CentOS scripts; in the standalone LMS they become optional, tenant‑gated features.

- **FlashLearnAI flashcards.** `scripts/build-bvc-flashcards.mjs <slug>` builds term cards (glossary) + quiz cards (stable `externalId`: `bvc:ep<N>:term:<slug>`, `bvc:ep<N>:q<n>`); `bvc-flashlearn-push.mjs` POSTs sets to `https://flashlearnai.witus.online/api/v1/sets` (`FLASHLEARN_ECO_API_KEY`); `bvc-flashlearn-feedback.mjs` feeds Academy quiz results to `/study/external-results` (wrong answers reschedule cards). → A "Export glossary/quiz to FlashLearn" feature.
- **Wanderlearn 360 previews.** BVC 360 assets push to Wanderlearn for immersive lessons (shared Cloudinary).
- **Instructor profiles on witus.online/learn.** Planned ecosystem profile link.
- **Pricing alignment:** ecosystem standard $10.60/mo · $103.29/yr · $103.29 lifetime — align tenant pricing if it's a paid WitUS brand.

---

## 7. Environment variables (new LMS)

```
# Core
DATABASE_URL=                      # Neon Postgres (pooled)
DATABASE_URL_UNPOOLED=             # Neon direct (migrations)
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
NEXT_PUBLIC_APP_URL=               # default/marketing host

# Stripe (own account)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
# (per-tenant descriptors live in the tenants table; per-tenant accounts later)

# AI
GOOGLE_GEMINI_API_KEY=

# Email
RESEND_API_KEY=
# per-tenant from/reply-to live in the tenants table

# Media
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_UPLOAD_PRESET=          # unsigned

# Ecosystem (optional, per-tenant flag)
FLASHLEARN_ECO_API_KEY=
INBOX_INGEST_URL=  INBOX_SOURCE_SLUG=  INBOX_INGEST_SECRET=
```
Per‑tenant branding/legal/Stripe‑descriptor/email‑sender live in the **`tenants`** table (DB), not env — so adding a brand is a DB row, not a redeploy.
