Goal: After this lesson you can pick one of five concrete extensions and know the exact file to open first and the honest difficulty.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/graph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/graph.ts), [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/state.ts), and [`src/app/api/coach/query/route.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/app/api/coach/query/route.ts).

## Not "go build something"

"Now go build something" is useless advice. This lesson is the opposite: five concrete extensions, each with the file you'd open first and an honest difficulty. Pick one and you're not staring at a blank page.

## 1. A new specialist (Easy)

The Lesson 25 checklist, applied to a domain you care about: Mindset, Labs, Mobility. Start by copying [`src/agents/corrective/`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/agents/corrective/subgraph.ts) as your template (it's the minimal one), then work the six-point checklist. Easy, because the shape is fixed and contained.

## 2. Stream partial findings to the UI (Medium)

Today the UI streams events as each specialist completes ([`src/app/api/coach/query/route.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/app/api/coach/query/route.ts) already uses `streamMode: "updates"`). Extend it to stream within a specialist, so a finding appears token by token. Start in the route handler's stream loop and the graph's stream mode. Medium: the plumbing exists, the work is in the event contract and the client.

## 3. Conversation memory across turns (Medium)

The coach answers one question per session (`sessionId` in [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/state.ts)). Add a LangGraph checkpointer so a follow-up question sees the prior turn, with user opt-in. Start in the graph compile call in [`src/graph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/graph.ts) (add a checkpointer) and the state shape (carry history). Medium: LangGraph checkpointers are built for this (LangChain, 2025), but you decide what persists and for how long.

## 4. Give a specialist an MCP tool (Medium to hard)

The specialists wire local tools today (the calorie calculator, the progression suggester). Connect one to an external tool over the Model Context Protocol so it can call, say, a real nutrition database (Anthropic, 2024). Start in a specialist's `assess` and `tools` nodes (for example [`src/agents/nutrition/subgraph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/agents/nutrition/subgraph.ts)), swapping a local tool for an MCP client. Medium to hard: the assess-or-tools pattern is the hook, the work is the MCP transport and auth.

## 5. Multi-tenant, per-user state (Hard)

Take the coach from single-admin demo to many users: a `userId` on the state, per-user session history, and optionally per-user knowledge namespaces. Start in [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/state.ts) and [`src/db/schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-26/src/db/schema.ts) (Lesson 23 sketched the diff). Hard, not because any one change is large but because tenancy touches state, storage, auth, and retrieval together.

## In practice

If you want to feel how much the architecture buys you fastest, build the new specialist: it's a contained afternoon. If you want production polish, the streaming or MCP extension. If you're building a real product on this, multi-tenant is the path, and the isolation work in Modules 2 to 3 is what makes it tractable. Whatever you pick, the next lesson is non-negotiable: when you extend the system, extend the evals with it.

## Key Takeaways

- Five concrete extensions, each with a starting file: new specialist, stream partial findings, conversation memory, an MCP tool, and multi-tenant state.
- A new specialist is the easiest (fixed, contained shape); multi-tenant is the hardest (it touches state, storage, auth, and retrieval at once).
- The streaming and memory extensions build on plumbing that already exists (`streamMode: "updates"`, `sessionId`).
- An MCP tool swaps a local tool in a specialist's assess-or-tools nodes for an external one over the Model Context Protocol.
- Whatever you pick, extend the evals with it, which is the next lesson.

## References

Anthropic. (2024). *Model Context Protocol*. https://modelcontextprotocol.io

LangChain. (2025). *LangGraph documentation: Persistence and checkpointers*. https://langchain-ai.github.io/langgraphjs/
