Goal: After this lesson you can build a supervisor that returns a typed, structured routing decision, and explain why that beats parsing prose.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/agents/supervisor/routing.schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-06/src/agents/supervisor/routing.schema.ts) and [`src/agents/supervisor/supervisor.node.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-06/src/agents/supervisor/supervisor.node.ts).

## What the supervisor decides

A supervisor's job sounds simple, pick which specialists answer the question, and most implementations get it subtly wrong. They ask the model, in prose, which agents to use, then parse the prose. For each question the coach's supervisor instead decides three things:

1. **Which specialists to consult**, one, two, or more.
2. **A focused sub-question per chosen specialist**, the user's question rewritten into that specialist's domain.
3. **A one-sentence rationale**, for the UI and for debugging routing.

It decides all of this before any specialist runs, enforced by the graph's shape, which is Lesson 7.

## Structured output beats prose routing

The naive prompt ends with "respond with the names of the agents to use," and you parse the text. It fails in boring, frequent ways: the model says "Nutrition and Workout specialists" (now you're string-matching), adds a caveat sentence, or picks an agent that doesn't exist. Constraining a model to emit a typed object, structured output, removes that whole failure class by making the output conform to a schema (LangChain, 2025). This repo uses Zod (Colinhacks, 2025) plus LangChain's `withStructuredOutput`:

```ts
// src/agents/supervisor/routing.schema.ts
export const AgentEnum = z.enum(["nutrition", "workout", "recovery", "corrective"]);

export const RoutingSchema = z.object({
  agents: z.array(AgentEnum).min(1)
    .describe("Specialist(s) that should answer this question."),
  primaryAgent: AgentEnum
    .describe("The single most relevant specialist. Must be one of `agents`."),
  subQuestions: z.array(z.object({ agent: AgentEnum, question: z.string().min(1) })),
  rationale: z.string().min(1).max(500),
});
```

`AgentEnum` makes an invalid agent name unrepresentable: the model can't route to a specialist that doesn't exist. `agents.min(1)` makes "route to nobody" unrepresentable. The shape is the contract. The `.describe()` strings aren't decoration; they're serialized into the JSON Schema the model sees, so they're how you steer the field's meaning.

## The supervisor node

A LangGraph node is a function from state to a state update. The supervisor node binds the model to the schema:

```ts
const router = await withRoleFallback(
  { role: "supervisor", temperature: 0 },
  (m) => m.withStructuredOutput(RoutingSchema, { name: "route_to_specialists" }),
);
const decision = await router.invoke([
  { role: "system", content: SUPERVISOR_SYSTEM },
  { role: "user", content: state.userQuery },
]);
```

`withStructuredOutput` returns a runnable whose `.invoke()` resolves to a value typed as `z.infer<typeof RoutingSchema>`: no parsing, no `any`. If the output doesn't satisfy the schema it throws here, loudly, at the boundary, instead of producing a plausible-looking wrong object that breaks three nodes later.

## Normalize what the schema can't express

A schema enforces field types; it can't enforce relationships between fields. `RoutingSchema` can't say "`primaryAgent` must be a member of `agents`," so the node does that itself:

```ts
const agents = [...new Set(decision.agents)];
const primaryAgent = agents.includes(decision.primaryAgent)
  ? decision.primaryAgent : agents[0];
```

Small thing, large payoff: every downstream node can now trust the routing object completely. Cross-field invariants belong in one place, the node that produces the value, not scattered through the consumers.

## In practice

There's a provider trap worth knowing before you extend this schema. A Zod schema that round-trips cleanly through one provider's structured-output API may not survive another's. This repo hit it: `.positive()` compiles to JSON Schema's `exclusiveMinimum`, which Gemini's structured-output subset rejected while Claude accepted it. Keep router schemas to the common subset. To feel how the schema is the contract every other node reads, sketch adding a `confidence` field between 0 and 1 that the prompt sets low when a question is ambiguous, then ask where a downstream node would use it (perhaps to ask a clarifying question before fanning out). You don't have to wire it; the point is that the schema, not a prompt, is what the rest of the graph depends on.

## Key Takeaways

- The supervisor decides which specialists to consult, a rewritten sub-question per specialist, and a one-sentence rationale, all before any specialist runs.
- Structured output makes an invalid agent name and "route to nobody" unrepresentable, removing a whole class of prose-parsing bugs.
- `withStructuredOutput` returns a typed value and throws at the boundary if the model's output breaks the schema.
- `.describe()` strings ship to the model as JSON Schema, so they steer each field's meaning.
- Cross-field invariants the schema can't express (primaryAgent must be in agents) belong in the producing node, so consumers can fully trust the object.

## References

Colinhacks. (2025). *Zod: TypeScript-first schema validation* [Computer software]. https://zod.dev

LangChain. (2025). *LangGraph documentation: Structured output*. https://langchain-ai.github.io/langgraphjs/
