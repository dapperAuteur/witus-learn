Goal: After this lesson you can move a reflection loop's standard out of the prompt and into a rubric: a list of single, weighted checks the critique node reads as data.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished agent running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/examples/support-reply-loop/rubric.ts) and [`tests/course/module-2-critique.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/tests/course/module-2-critique.test.ts).

## Where loop quality comes from

You've spent two modules on the loop's structure: the cycle, the router, the termination patterns. None of it improves a single draft. The draft improves because the critic tells the writer, specifically and correctly, what's wrong. Turn the critic up and the loop gets better. Turn it down and the loop spins, producing junk it keeps approving.

So the highest-impact thing you can edit in a reflection loop isn't the graph and isn't the generation prompt. It's the rubric the critic scores against. That's why critique design is its own module. Termination keeps the loop safe. The rubric makes it good.

## The rubric as data

Here's the support-reply rubric, a plain array where each entry is one check:

```ts
export const supportReplyRubric: RubricCriterion[] = [
  { key: "acknowledges_issue", description: "Names the specific problem the customer reported.", weight: 1 },
  { key: "gives_next_step",    description: "States one concrete action that resolves the problem.", weight: 1 },
  { key: "states_timeline",    description: "Gives a specific timeframe for that action.", weight: 0.5 },
  { key: "has_signoff",        description: "Ends with a sign-off naming the sender.", weight: 1 },
];
```

Three properties carry the rest of the module:

1. It's data, separate from the node. The critique node reads this array. It doesn't contain it. To change what "good" means, you edit the data, never the code. The field reporter agent keeps its own rubric the same way: as data, apart from the node that scores it.
2. Each entry is one check. Not "is it clear and complete and friendly." `acknowledges_issue` is a single question with a single answer.
3. Each has a weight. Blocking (1) versus a nudge (0.5). Lesson 18 makes weights and the pass rule fully data-driven.

## The critic reads the rubric, the judge scores one check at a time

The judge is injected: a function that scores one criterion against the draft.

```ts
export type RubricJudge = (input: {
  ticket: string; draft: string; criterion: RubricCriterion;
}) => CriterionVerdict | Promise<CriterionVerdict>;
```

In production it's `model.withStructuredOutput(CriterionVerdictSchema)`. In the tests it's a deterministic fake, so the loop runs offline. Either way, the node walks the rubric, asks the judge per criterion, and combines the verdicts in code. The LLM judges. It doesn't decide policy.

## Why the rubric-in-the-prompt fails

There's a tempting shortcut: embed the standard as prose inside the critique prompt ("make sure it's clear, complete, and friendly"). Avoid it. A rubric buried in a prompt can't be versioned, weighted, linted, or reused as an eval, and Module 4 needs exactly that reuse. Because it's prose, the model scores it inconsistently run to run. Promote the rubric to data and the LLM's job shrinks to one verifiable judgment at a time.

## In practice

The rubric is the control surface of a reflection loop. Keep it as data, a list of single, weighted checks, and the loop becomes tunable, testable, and reusable. The next three lessons are the craft of writing those checks well: the three ways a criterion goes wrong, and how to fix each.

Try it yourself. Open `examples/support-reply-loop/rubric.ts` and add a fifth criterion, say `offers_apology` at weight 0.5. Run `npm run test -- tests/course/module-2-critique.test.ts` and watch the rubric-length assertion. You just changed what the loop considers "good" by editing data, with no node touched.

## Key Takeaways

- The rubric, not the graph or the generation prompt, is the highest-impact thing you can edit in a reflection loop.
- Keep the rubric as data: a plain array the critique node reads, so changing "good" is a data edit, not a code change.
- Each entry is one check with one weight; blocking checks weigh 1, nudges weigh 0.5.
- The judge is injected and scores one criterion at a time; the node combines verdicts in code, so the LLM judges but doesn't set policy.
- A rubric written as prose inside the prompt can't be versioned, weighted, linted, or reused as an eval, and it scores inconsistently.

## References

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/
