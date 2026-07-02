Goal: After this lesson you can add a max-iteration counter to a loop in code and explain why the cap never belongs in the prompt.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see it running in [the deployed app](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/graph.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/examples/support-reply-loop/graph.ts) and [`tests/course/module-1-termination.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/tests/course/module-1-termination.test.ts).

## Why this matters

The first and most important termination pattern is a plain integer counter that the graph increments and the router checks. It's unglamorous, and it's the one you must never skip. You already wrote it in Module 0. Here it is again, named.

## The pattern

```ts
// in the write node, the graph increments the counter:
const revisionNumber = state.revisionNumber + 1;
return { draft, revisionNumber, history: [{ revisionNumber, draft }] };

// in the router, the graph checks the bound:
if (state.revisionNumber >= MAX_REVISIONS) return "flag_for_human";
```

Two halves: the write node increments a counter on every pass, and the router compares it to a constant. Because the counter strictly increases and the router exits at the bound, the loop halts in at most `MAX_REVISIONS` passes, regardless of the rubric, the writer, or the model's mood. This is a guarantee, not a tendency.

## Why the cap can't live in the prompt

Here's the version that looks equivalent and isn't: telling the model, in the prompt, "revise at most three times, then stop." It reads like a cap. It isn't one. Three reasons it fails, concretely:

- **The model can't reliably count its own turns.** It has no durable, trustworthy view of how many times the loop has run. "Third revision" is a thing you know from state, not a thing the model knows from text.
- **It's one jailbreak or one confused completion from ignoring you.** A prompt instruction is a suggestion the sampler can override. A `>=` in code can't be argued with.
- **It's invisible to your guards.** You can't alert on, trace, or test a bound that lives inside a paragraph. A counter in state shows up in every trace and every test.

The cap is a control-flow decision, and control flow belongs in the graph, not in the generator you're trying to control. Putting the safety bound inside the thing it's supposed to bound is the category error this whole module exists to prevent.

## Choosing the bound

`MAX_REVISIONS` is a budget, so set it like one. Most reflection loops that are going to converge do so within two or three revisions. Past that, more passes rarely help, and the convergence and escalation patterns (Lessons 9 and 10) should be catching the run anyway. Start at 3, measure (Module 4 gives you the eval to do it honestly), and adjust. The point of Pattern 1 isn't the exact number. It's that some finite number is enforced in code.

## In practice

The hard counter is the floor under every reflection loop. It's in code, it's checked by the router, and it's non-negotiable. Every other pattern in this module makes the loop smarter about stopping. The counter makes it safe. Never ship without it.

Run the first Module 1 test to watch it work:

```bash
npm run test -- tests/course/module-1-termination.test.ts
```

It drives the bounded loop with a writer that never passes but always changes its draft, so convergence never fires and only the counter can stop it. It asserts the run ends escalated at exactly `MAX_REVISIONS`. To feel the budget move, set `MAX_REVISIONS` to 1 in `examples/support-reply-loop/graph.ts` and re-run. The counter test's expected revision count changes, and the success test still passes, because a one-revision win still wins. Put it back to 3. You just tuned a budget by editing one constant.

## Key Takeaways

- Pattern 1 is a plain integer counter: the write node increments it, the router checks it against `MAX_REVISIONS`.
- Because the counter strictly increases and the router exits at the bound, the loop halts in at most `MAX_REVISIONS` passes.
- Counting in the prompt isn't a cap: the model can't reliably count its turns, a sampler can ignore the instruction, and you can't trace or test it.
- The cap is a control-flow decision, so it belongs in the graph, not in the generator you're trying to bound.
- `MAX_REVISIONS` is a budget; start around 3, measure, and adjust. Enforcing some finite number in code matters more than the exact number.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651
