Goal: After this lesson you can split a compound rubric criterion into atomic checks and run a linter that flags the conjunctions before they ship.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished agent running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/examples/support-reply-loop/rubric.ts) and [`tests/course/module-2-critique.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/tests/course/module-2-critique.test.ts).

## What compound looks like

Here's a compound criterion:

> "Acknowledges the issue and gives a next step and ends politely."

One key, one boolean, three questions. Now a draft that names the problem and signs off but offers no next step gets a single `false`. What does the writer do with that? It can't tell which of the three parts it missed, so its revision is a guess. The verdict is technically correct and operationally useless.

Compound criteria are seductive because they read like a summary of quality: "the reply should acknowledge, act, and close." That sentence is a fine description of the rubric. It's a terrible single criterion. The rubric should be three checks. The compound version describes three checks while scoring as one.

## Why it breaks the loop specifically

A reflection loop's feedback channel is the critique's per-criterion failures. The writer revises against what failed. Collapse three checks into one and you collapse three independent pieces of feedback into one ambiguous bit:

- Lost localization. "This compound check failed" doesn't say where, so the revision can't target the actual gap.
- Lost partial credit. A draft that fixed two of the three parts still shows the same single `false`, so the loop can't see it made progress. Convergence detection (Module 1) may misfire because the visible verdict didn't move.
- Lost weighting. You can't weight "has a sign-off" differently from "gives a next step" if they're the same criterion. Lesson 18's data-driven weights become impossible.

## The fix, and a linter to enforce it

Split every compound criterion into its atoms, one check each:

```
Compound:  "Acknowledges the issue and gives a next step and ends politely."

Split into three atomic checks:
  acknowledges_issue : "Names the specific problem the customer reported."
  gives_next_step    : "States one concrete action that resolves the problem."
  has_signoff        : "Ends with a sign-off naming the sender."
```

Compoundness has a textual signature: conjunctions and comma-joined clauses. So you can lint for it. The Module 2 code ships exactly that:

```ts
export function findCompoundCriteria(rubric: RubricCriterion[]): string[] {
  return rubric
    .filter((c) => /\b(and|or)\b/i.test(c.description) || c.description.includes(","))
    .map((c) => c.key);
}
```

Run it over any rubric you write. The support-reply rubric returns `[]`. A rubric with "Is professional and friendly." returns `["tone"]`. It's a smell detector, not a proof. A criterion can be compound without the word "and" ("a timely, on-brand reply"). But it catches the common case automatically and cheaply, and the Module 2 test asserts the clean rubric stays clean.

## The limit of automation

The linter catches compound. It can't catch vague (Lesson 14) or overlap (Lesson 15), because those have no reliable textual signature. They need the judgment calls "could two readers disagree?" and "could a draft split these?" That boundary is the whole reason this module is a craft and not a checklist: automate the mechanical failure mode, and reserve your attention for the two that need a human.

## In practice

One criterion, one question. If a criterion contains an "and," it's two criteria wearing one key. Split it, and lint to keep it split. The verdict you want from a critic isn't "is this good" but "which specific thing is missing," and only atomic criteria can answer that.

Try it yourself. Add `{ key: "complete", description: "Names the issue and the fix and the timeline.", weight: 1 }` to a rubric copy and run `npm run test -- tests/course/module-2-critique.test.ts` after extending the linter test to include it. Watch `findCompoundCriteria` flag it. Then split it into the three atomic checks and watch the flag clear.

## Key Takeaways

- A compound criterion bundles several checks into one pass or fail, so its verdict can't say which part failed.
- Compoundness costs the loop localization, partial credit, and the ability to weight the parts separately.
- Fix it by splitting into atomic checks: one criterion, one question.
- `findCompoundCriteria` lints for conjunctions and commas, catching the common case cheaply.
- The linter is a smell detector, not a proof, and it can't catch vague or overlap, which need human judgment.

## References

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/
