# API Surface

Every Academy endpoint, re‑expressed as the new LMS's API. CentOS prefixes routes with `/api/academy/*`; the standalone LMS can drop that prefix (`/api/*`). Paths below are the **target**; the CentOS origin is noted where the name changed.

## Conventions (apply to every route)
- **Auth:** Better Auth session (magic‑link). Helpers: `getSession()` (current user) + a service/admin client for privileged ops.
- **Tenant:** resolved from request host → `tenant_id` (middleware). **Every handler scopes to the resolved tenant.**
- **Isolation (hard rule):** list/catalog queries filter `tenant_id = current`. By‑id / by‑slug reads **return 404** when the row's tenant ≠ current (except owner/platform‑owner tooling). Applies to courses, lessons, paths, assignments, messages, certificates, map — everything.
- **Auth levels:** `public` · `authed` · `instructor` (owns the course) · `brand_admin` (tenant) · `platform_owner` (global).
- **Errors:** `404` for cross‑tenant or not‑found (never reveal existence); `403` for wrong role within tenant; `401` unauthenticated.

---

## Courses & catalog
| Method | Path | Purpose | Auth | Notes |
|---|---|---|---|---|
| GET | `/api/courses` | Catalog list | public | filters: `q`, `category`, `sort` (name/created/category/price), `dir`, `mine=true` (instructor's own). Tenant‑scoped + visibility rules. |
| POST | `/api/courses` | Create course | instructor | body: title, description?, cover?, category?, tags?, price?, price_type, navigation_mode. Sets `tenant_id`, auto‑slug. |
| GET | `/api/courses/[id]` | Course detail (modules+lessons tree, prereqs, recs, enrollment status, `is_new/is_updated` flags) | public* | 404 cross‑tenant; owners see drafts. |
| PATCH | `/api/courses/[id]` | Update course | instructor/admin | field whitelist; admin‑only: `is_featured`,`featured_order`; tenant‑move only by platform_owner. |
| DELETE | `/api/courses/[id]` | Delete course | instructor/admin | |
| GET | `/api/series?slug=` | Courses in a series by season | public | tenant‑scoped |
| GET/POST/DELETE | `/api/course-categories` | List / add / remove categories | GET authed; mutate admin | per‑tenant |

## Modules & lessons
| Method | Path | Purpose | Auth |
|---|---|---|---|
| POST | `/api/courses/[id]/modules` | Create module | instructor |
| PATCH/DELETE | `/api/courses/[id]/modules/[moduleId]` | Update/delete module | instructor |
| GET/POST | `/api/courses/[id]/lessons` | List (gated) / create lesson | GET public*(gated) / POST instructor |
| GET/PATCH/DELETE | `/api/courses/[id]/lessons/[lessonId]` | Lesson detail (access‑gated) / update / delete | mixed |
| GET/POST | `/api/courses/[id]/lessons/[lessonId]/progress` | Read / upsert progress; quiz submit (auto‑score); tour progress merge | authed (enrolled) |
| GET | `/api/courses/[id]/lessons/[lessonId]/crossroads` | CYOA next options (linear/semantic/random/cross‑course) | authed |
| GET/POST/DELETE | `/api/courses/[id]/lessons/[lessonId]/discussions[/...]` | Lesson discussion threads | authed |
| POST | `/api/courses/[id]/lessons/[lessonId]/captions` | Captions/transcript mgmt | instructor |
| GET/POST | `/api/courses/[id]/lessons/[lessonId]/tour` | Virtual‑tour scenes/hotspots | mixed |

**Lesson gating (GET lesson/lessons):** owner / enrolled / `is_free_preview` / free‑course pass; otherwise `{error, locked, login_required?, module_locked?}`. For `is_sequential` courses, lock non‑free lessons until prior module complete.

## Enrollment, completion & billing
| Method | Path | Purpose | Auth | Notes |
|---|---|---|---|---|
| POST | `/api/courses/[id]/enroll` | Enroll | public(free)/authed(paid) | free → insert; paid → Stripe Checkout `{url}`. Body: `reattempt?`, `promo_code?`. Prereq enforcement; platform vs Connect payout; guest free access. **404 if course tenant ≠ current.** |
| POST | `/api/courses/[id]/complete` | Mark complete when all lessons done | authed | idempotent; issues `course_completions` + sends certificate email. |
| POST | `/api/courses/[id]/dismiss-updates` | Dismiss "new lesson" badges | authed |
| GET | `/api/my-courses` | Enrolled courses + progress %, new/updated counts, certificate token | authed | tenant‑scoped enrollments |
| POST | `/api/stripe/webhook` | `checkout.session.completed` → enrollment; `customer.subscription.deleted` → cancel; promo increment | Stripe sig | CentOS: `/api/stripe/academy-webhook` |
| GET/POST | `/api/instructor/connect` | Stripe Connect onboarding/status | instructor |
| GET/POST/DELETE | `/api/courses/[id]/promo-codes` | Manage promo codes | instructor |

## Prerequisites & recommendations
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET/POST/DELETE | `/api/courses/[id]/prerequisites` | List (w/ completion) / add / remove prereqs + recommendations | GET authed / mutate instructor |
| GET/POST | `/api/courses/[id]/prerequisites/overrides` | Grant/list overrides | instructor/admin |
| GET/POST | `/api/courses/[id]/prerequisites/requests` | Student request / teacher decide | mixed |

## Assessment
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET/POST | `/api/courses/[id]/assignments` | List (gated) / create | GET authed / POST instructor |
| GET/POST | `/api/assignments/[assignmentId]/submissions` | List (teacher all / student own) / submit (draft/submitted) | authed |
| GET/POST | `/api/assignments/[assignmentId]/submissions/[submissionId]/messages` | Threaded feedback | authed |

## Rigor: glossary, sources, claims
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET/POST | `/api/courses/[id]/glossary` | List (lesson‑filterable) / create term | GET public*(gated) / POST instructor |
| GET/PATCH/DELETE | `/api/courses/[id]/glossary/[termId]` | Manage term | instructor |
| POST | `/api/courses/[id]/glossary/import` | Bulk import (CSV) | instructor |
| GET/POST | `/api/courses/[id]/sources` + `/claims` | Manage sources & claims ledger | instructor |
| POST | `/api/sources/resolve` | Resolve DOI/URL → `{inText, apa, doi, url, pdfUrl, title, journal, year}` via Crossref + Unpaywall | instructor |
| GET | `/api/document-proxy?url=` | Serve Cloudinary PDF inline (host‑whitelisted) | public |

## Social
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET/POST/DELETE | `/api/courses/[id]/reviews` | List (+avg/count) / upsert / delete | GET public / mutate enrolled |
| POST | `/api/courses/[id]/like` | Toggle like → `{liked, like_count}` | authed |
| POST | `/api/courses/[id]/save` | Toggle save | authed |
| GET/POST | `/api/courses/[id]/messages` | Course DMs | authed |
| GET | `/api/messages` | Unified DM inbox (grouped by course+partner, unread counts) | authed |

## Learning paths
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET/POST | `/api/paths` | List (published + `mine`) / create | GET public / POST instructor |
| GET/PATCH/DELETE | `/api/paths/[id]` | Detail (+completion status) / update (incl. course list) / delete | mixed |
| GET | `/api/paths/recommend` | `[later]` Gemini top‑3 path recs | authed |

## AI & embeddings
| Method | Path | Purpose | Auth |
|---|---|---|---|
| POST | `/api/courses/[id]/generate-embeddings` | Embed all lessons (Gemini → pgvector) | instructor/admin |
| GET/POST | `/api/courses/[id]/ai-recommendations` | `[later]` "take before/after" (Gemini 2.5 Flash, 24h cache) / force refresh | GET public / POST instructor |

## Media
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET/POST | `/api/media` | List / register Cloudinary asset | instructor |
| GET/PATCH/DELETE | `/api/media/[id]` | Manage asset | instructor |
| GET | `/api/media/[id]/references` | Lessons/assignments using asset | instructor |

## Lead funnel
| Method | Path | Purpose | Auth |
|---|---|---|---|
| POST | `/api/lead-email` | Capture consented email (idempotent) | public | per‑tenant; best‑effort; optional WitUS Inbox notify |
| POST | `/api/track/download` | Log download event | public |

## ⭐ Commodity Map
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET | `/api/map/commodities` | Tenant's map dataset (pins) `?season=` | public | from `map_commodities`; tenant‑scoped |
| GET | `/api/map/belts` | Growing‑belt dataset | public | from `map_belts` |
| GET/POST/PATCH/DELETE | `/api/admin/map/*` | Brand‑admin map dataset editor | brand_admin |

## Instructor & directory
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET | `/api/instructors/[username]` | Instructor profile + their courses | public | ⚠️ course list tenant‑scoped |
| GET | `/api/instructor/students` | Instructor's enrolled students | instructor |

## Admin & platform
| Method | Path | Purpose | Auth |
|---|---|---|---|
| GET | `/api/admin/courses` | All courses + enrollment counts | brand_admin (tenant) / platform_owner (all) |
| GET | `/api/admin/lead-funnel` | Lead metrics | brand_admin |
| GET/PATCH | `/api/admin/settings` | Platform/tenant settings (fee, price IDs) | brand_admin/platform_owner |
| GET/POST/PATCH | `/api/platform/tenants` | **NEW** Tenant registry CRUD, domains, branding | platform_owner |
| GET/POST | `/api/platform/memberships` | **NEW** Assign per‑tenant roles | platform_owner / brand_admin |

## Auth (Better Auth)
| Path | Purpose |
|---|---|
| `/api/auth/*` | Better Auth handlers (magic‑link request/verify, session, sign‑out). Replaces CentOS Supabase auth + `/auth/callback`. |

---

### Page routes (student/instructor/admin) — for reference
**Student:** `/` (catalog), `/explore` (Commodity Map), `/my-courses` (+`/messages`), `/{username}/{courseSlug}` (+`/lesson/{lessonSlug}`, `/assignments/{id}`), `/paths` (+`/[id]`), `/instructors` (+`/[username]`), `/verify/[token]`, `/offline`.
**Instructor:** `/teach` (landing/onboarding), instructor dashboard (course/lesson/quiz/assignment/glossary/source authoring, enrollments, payouts).
**Admin:** `/admin` (tenant dashboard), `/admin/courses`, `/admin/lead-funnel`, `/admin/map`, `/admin/categories`; **platform:** `/platform/tenants`.

All page routes render with the **resolved tenant's** branding; non‑surface routes redirect to the tenant home (see MULTITENANCY doc).
