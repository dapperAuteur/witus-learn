Goal: After this lesson you can move a loop's weights and pass rule into data, so you change which checks block and what threshold passes without touching node code.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished agent running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/examples/support-reply-loop/rubric.ts) and [`tests/course/module-2-critique.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/tests/course/module-2-critique.test.ts).

## Two things that must not live in the node

You have well-written, independent, grounded criteria. The last design decision is how their verdicts combine into a single pass, and that decision is data, not logic buried in the node. A critique node is tempted to grow an `if`:

```ts
// pass rule hard-coded in the node (avoid)
if (acknowledged && hasNextStep && hasSignoff) return { passed: true };
```

Every change to the bar now means editing node code, re-reading the control flow, and re-testing the graph. Worse, the same logic gets re-implemented when you reuse the rubric offline as an eval (Module 4), and the two copies drift. Both the weights and the pass rule belong in data, beside the rubric.

## Weights as data

Each criterion already carries a weight: `1` blocks, `0.5` nudges. The weight is a policy statement: "a missing next step should fail the reply; a missing timeline should not, on its own." Promoting `states_timeline` from a nudge to a blocker is a one-character data edit, and the Module 2 test proves the outcome flips with no code change:

```ts
const noTimeline = /* verdicts where states_timeline failed */;
applyPassRule(noTimeline, supportReplyRubric, { kind: "all-blocking" });   // true  (0.5 nudge)
const stricter = supportReplyRubric.map(c =>
  c.key === "states_timeline" ? { ...c, weight: 1 } : c);                  // promote in DATA
applyPassRule(noTimeline, stricter, { kind: "all-blocking" });            // false (now blocks)
```

Same verdicts, same node, different bar, because the weight is data.

## The pass rule as data

How weights combine is itself a choice, so it's also data:

```ts
export type PassRule =
  | { kind: "all-blocking" }                               // every weight-1 check must pass
  | { kind: "weighted-threshold"; threshold: number };     // earned / total weight >= threshold
```

`applyPassRule` reads the rule and the rubric. It hard-codes neither:

```ts
applyPassRule(verdicts, rubric, { kind: "all-blocking" });                  // strict
applyPassRule(verdicts, rubric, { kind: "weighted-threshold", threshold: 0.5 }); // lenient
```

The Module 2 test scores one partial reply and shows it fails `all-blocking` (it's missing a blocking check) yet passes `weighted-threshold` at 0.5. Same verdicts, different policy, zero code change. That's the whole point: the bar is a dial you turn in data.

## Why this separation matters for the rest of the course

- Module 4, evals. The offline regression test reuses this exact rubric and pass rule as its scorer. If the pass rule lived in the node, the eval would have to re-implement it and the two would drift. Data-as-policy is what lets "the runtime rubric is also the offline test" be literally true.
- Module 5, production. Tuning the threshold to trade quality against cost (fewer revisions) is a data change you can A/B and roll back, not a code deploy.

## Why policy in the node fails

There's an anti-pattern to name: policy baked into the node. That means hard-coding which criteria block and what counts as a pass inside the critique node's control flow. It can't be versioned or tuned without a code change, and it gets silently re-implemented (and desynced) the moment you reuse the rubric as an eval. Keep weights and the pass rule in data. Let the node only apply them.

## In practice

Look back at Lesson 13: the rubric is the lever. You now hold the whole lever, criteria, weights, and the pass rule, as data the node merely reads. The critic is auditable (evidence), improvable (suggestions), correct (no vague, overlap, or compound criteria), and tunable (data-driven weights and pass rule). The loop's quality is now something you edit, not something you hope for.

Because the rubric is data, it can be two things at once: the runtime critic, and the offline regression test. That double life is Module 4. First, Module 3 makes the loop's behavior visible, because a critic you can't trace is a critic you can't debug.

Try it yourself. Change `defaultPassRule` to `{ kind: "weighted-threshold", threshold: 0.75 }` and run the Module 2 suite. Some assertions written for `all-blocking` will shift. Read which, and reason about whether 0.75 is too strict or too lenient for support replies. Restore it. You just retuned the loop's bar without touching the graph.

## Key Takeaways

- How verdicts combine into one pass is a policy decision, so both weights and the pass rule belong in data, not in the node.
- A weight is policy: `1` blocks, `0.5` nudges; promoting a check is a one-character data edit that flips the outcome with no code change.
- The pass rule is data too: `all-blocking` requires every weight-1 check, `weighted-threshold` passes when earned over total weight clears the threshold.
- The same verdicts can pass under one rule and fail under another, so the bar is a dial you turn in data.
- Keeping policy in data lets the runtime rubric double as Module 4's offline eval and lets Module 5 tune the threshold without a code deploy.

## References

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/
