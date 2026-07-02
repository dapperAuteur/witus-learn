Goal: After this lesson you can say exactly what tenancy and auth the coach ships today, and sketch the additive change that makes it multi-tenant.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-23/src/state.ts) and [`src/db/schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-23/src/db/schema.ts).

## The two questions a deployed coach raises

A deployed coach faces real users, which raises two questions the local demo could ignore: who's allowed to use it, and how do you keep one user's data separate from another's. This lesson is honest about what the repo ships today and what multi-tenancy would add, because the gap is itself instructive.

## What ships today: single-tenant, admin-gated

The state is single-tenant by design. [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-23/src/state.ts) says so in a comment: "Demo mode is single-tenant: no userId." Each query gets a `sessionId`, and completed runs are persisted to `coach_sessions` and `coach_specialist_calls` ([`src/db/schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-23/src/db/schema.ts)), but there's no per-user partition because the live demo is gated to one operator.

Access control is an admin gate, not open sign-up. Auth.js (NextAuth) backs a magic-link flow, and only `ADMIN_EMAIL` is allowed to sign in; everyone else who tries lands on a waitlist (Auth.js, 2025). That's the right amount of auth for a gated portfolio demo: the public can see it exists, and one person can run it.

## What multi-tenancy adds

To serve many users, you thread identity through the same structures you already have:

1. **A `userId` on the state.** Add it to `CoachState` and stamp it on each `coach_sessions` row, so history and analytics partition by user.
2. **Per-user data scoping.** Reads of sessions and any per-user knowledge filter by `userId`. This is the principle of least privilege again (Saltzer & Schroeder, 1975), now at the tenant boundary: a user's queries can reach only that user's data. If you let users bring their own corpus, the namespace pattern from Module 2 extends naturally to per-user namespaces, for example `nutrition_kb:<userId>`.
3. **Real authorization.** The single-`ADMIN_EMAIL` check becomes per-user sessions with the same Auth.js machinery already wired; the tables (`user`, `account`, `session`) are standard adapter tables and already exist.

The point of naming this gap rather than hiding it: the architecture is ready for multi-tenancy (sessionId, session persistence, an auth layer, namespaced retrieval), and the work to get there is additive, not a rewrite. That makes "per-user state" a natural Module 6 extension rather than a missing feature.

## In practice

Open `src/state.ts` and `src/db/schema.ts` and sketch the diff for adding `userId`: which type gains a field, which table gains a column, and which query gains a `WHERE userId = ...`. You don't have to implement it. Seeing how small the diff is, that's the lesson: good isolation at the specialist level (Module 2) and a real auth layer make tenancy an extension, not a redesign.

## Key Takeaways

- The coach ships single-tenant by design: a `sessionId` per query, sessions persisted, and no `userId`.
- Access is an admin gate, an Auth.js magic-link flow where only `ADMIN_EMAIL` signs in and everyone else joins a waitlist.
- Going multi-tenant means a `userId` on the state, per-user scoping of reads, and per-user sessions on the existing auth tables.
- Per-user knowledge extends the Module 2 namespace pattern to per-user namespaces.
- The change is additive because the architecture (sessions, persistence, auth, namespaced retrieval) is already tenancy-ready.

## References

Auth.js. (2025). *Auth.js documentation: Email (magic link) provider*. https://authjs.dev

Saltzer, J. H., & Schroeder, M. D. (1975). The protection of information in computer systems. *Proceedings of the IEEE, 63*(9), 1278-1308. https://doi.org/10.1109/PROC.1975.9939
