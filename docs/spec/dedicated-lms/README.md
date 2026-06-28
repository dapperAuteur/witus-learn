# Dedicated LMS — Build Documentation Bundle

This folder is a **complete, portable specification** for building a new, standalone, **multi-tenant Learning Management System (LMS)** in a fresh repository. It captures everything from the **CentenarianOS "Academy"** — a mature LMS built as a module inside a personal‑OS app — and re‑frames it as an independent product that follows the WitUS ecosystem's *target* architecture.

> **Goal:** A fresh Claude chat in the new repo can build the LMS from these docs **without reading the CentenarianOS source.** Everything here is self‑contained. References to CentOS files appear only as "current implementation reference" and are never required reading.

**Provenance:** Extracted from `centenarian-os` at migration **195**, June 2026, via three exhaustive read‑only exploration passes (data model, API/pages, integrations/coupling) plus an architecture pass.

---

## Why this exists

The CentOS Academy hosts **Better Vice Club (BVC)** — a cited, audio‑first vice/drug‑education curriculum (coffee → cannabis → coca → khat, across 3 seasons / 21 episodes). That content does **not** fit the CentOS longevity‑wellness brand and needs its **own domain**, with end users unaware of the parent app — while reusing the Academy's hard‑won features.

We evaluated white‑labeling inside CentOS vs. extracting a new app against the WitUS ecosystem rules:

- **One job:** *"Every platform has one job. If a feature belongs to another platform's job, do not build it here."*
- **No shared DB:** *"Each app has its OWN database instance. Never share databases across apps."* (CentOS currently shares a Supabase DB with contractor‑os — documented as **architectural debt**, not the target.)

The decision: **build a dedicated LMS as the ecosystem's learning platform.** This is the ecosystem‑*compliant* path — it resolves the shared‑DB debt instead of deepening it, and lets the new app adopt the target architecture from day one.

---

## Locked decisions (do not re‑litigate; see PRD §Decision Log)

1. **The new LMS owns "teaching" for the ecosystem.** Real courses (BVC, etc.) migrate to it. CentOS keeps only its in‑app tutorials, or links out to the LMS. One app owns teaching.
2. **Multi‑tenant from day one.** N brands/domains, white‑label, **strictly isolated** — a user on one brand's domain must never see another brand's content, branding, or existence. First tenant = **Better Vice Club**.
3. **Target stack:** **Neon Postgres** + **Better Auth** (magic‑link) + **own Stripe** + **own Resend**, keeping **Next.js App Router + Tailwind + Gemini**. (A separate Postgres of any kind already satisfies "no shared DB"; the deliberate upgrade here is Better Auth over Supabase Auth.)

---

## Reading order

| # | Doc | What it answers |
|---|-----|-----------------|
| 1 | **`PRD.md`** | What we're building, for whom, why, and the v1 scope. Start here. |
| 2 | **`FEATURE_INVENTORY.md`** | Every capability the Academy has today, each tagged **v1 / later / drop**. The "everything we know" core. |
| 3 | **`DATA_MODEL.md`** | The complete schema (≈38 tables) re‑expressed as a **multi‑tenant Neon + Better Auth** target schema. |
| 4 | **`API_SURFACE.md`** | Every endpoint (method, path, purpose, auth, payloads), grouped by domain. |
| 5 | **`CONTENT_AND_PEDAGOGY.md`** | The learning model: lesson types, CYOA, embeddings, quizzes, assignments, certificates, paths, tours, glossary/citations, + the **BVC content rules**. |
| 6 | **`AUTH_BILLING_INTEGRATIONS.md`** | Auth/roles, Stripe (per‑course + Connect + per‑tenant), Resend, Gemini, Cloudinary, ecosystem integrations. |
| 7 | **`MULTITENANCY_AND_BRANDING.md`** | The tenant model, per‑brand theming/legal/age‑gate, and the **isolation/leak‑surface rules** (the hard‑won part). |
| 8 | **`MIGRATION_AND_EXTRACTION.md`** | Getting existing BVC data **out of the shared Supabase DB** into the new LMS: export, identity remap, cutover. |

**The signature feature** — the **BVC Commodity Map** (an interactive world map that is the curriculum's primary discovery surface) — is specified in `FEATURE_INVENTORY.md` (overview) and `CONTENT_AND_PEDAGOGY.md` (full spec + improvements). Preserve and improve it; do not reduce it to a generic catalog.

---

## How to use this in the new repo

1. Copy this entire folder into the new repo as `/docs/spec/` (or keep it at the root as `/spec/`).
2. Open a fresh Claude Code chat in that repo.
3. Paste the kickoff prompt below.
4. Build in the phase order the PRD lays out (foundation → tenancy → content → learning → billing → signature map → polish). Verify each phase before moving on.

### Kickoff prompt (paste into the new repo's chat)

```
You are building a new, standalone, multi-tenant Learning Management System (LMS)
from a complete spec in /docs/spec/. Read these in order before writing any code:
PRD.md, FEATURE_INVENTORY.md, DATA_MODEL.md, API_SURFACE.md,
CONTENT_AND_PEDAGOGY.md, AUTH_BILLING_INTEGRATIONS.md,
MULTITENANCY_AND_BRANDING.md, MIGRATION_AND_EXTRACTION.md.

Stack (non-negotiable per the PRD): Next.js App Router + TypeScript + Tailwind,
Neon Postgres, Better Auth (magic-link), own Stripe account, own Resend account,
Gemini for embeddings + recommendations, Cloudinary for media.

Hard requirement: MULTI-TENANT and STRICTLY ISOLATED. Every content query is
tenant-scoped; by-id/by-slug detail must 404 across tenants; AI/CYOA/embeddings
and SEO/sitemap/OG must never leak another tenant's content. The first tenant is
"Better Vice Club" (vice/drug education) and requires an age-gate + its own legal pages.

Propose a phased implementation plan based on the PRD's milestones, confirm the
data model and tenancy approach with me, then build phase by phase, verifying each
phase end-to-end before continuing. Preserve and improve the BVC Commodity Map —
it is the signature discovery surface, not a generic catalog.
```

---

## Conventions used in these docs

- **"Current"** = how CentOS Academy does it today (reference / fidelity baseline).
- **"Target"** = how the new LMS should do it (the actual build instruction).
- **Disposition tags:** `[v1]` ship in first release · `[later]` post‑v1 · `[drop]` CentOS‑specific, do not port.
- **`tenant_id`** is the multi‑tenant scoping key introduced throughout (CentOS has no equivalent — it is single‑tenant today).
- Code paths like `app/api/academy/...` refer to the **current** CentOS repo, for traceability only.
