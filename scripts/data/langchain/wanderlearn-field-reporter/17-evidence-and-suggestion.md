Goal: After this lesson you can design a verdict schema that forces the judge to return grounded evidence and a concrete suggestion with every score.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished agent running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/examples/support-reply-loop/rubric.ts) and [`tests/course/module-2-critique.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/tests/course/module-2-critique.test.ts).

## Why a bare boolean isn't enough

Ask an LLM "does this reply name the customer's problem? true or false" and you get a boolean with no accountability. You can't tell whether it actually read the draft or pattern-matched the question, and the writer gets a `false` with no idea what to change. That's two failures in one:

- No grounding, so you can't trust the verdict. LLM judges are more accurate and more self-consistent when required to explain against the text rather than emit a bare label (Liu et al., 2023).
- No actionability, so the loop can't improve. The writer revises against the critique, and a verdict with no suggestion is a closed door.

## The verdict schema

Module 2 makes both fields mandatory and non-empty in the schema:

```ts
export const CriterionVerdictSchema = z.object({
  key: z.string(),
  passed: z.boolean(),
  evidence: z.string().min(1),    // grounds the verdict IN the draft
  suggestion: z.string().min(1),  // a concrete fix if it failed
});
```

`z.string().min(1)` is doing real work. The judge can't return an empty evidence or suggestion, because `model.withStructuredOutput(CriterionVerdictSchema)` validates against the schema and rejects a malformed verdict. The Module 2 test asserts exactly this: an empty-evidence verdict throws on `parse`. The schema is the contract that forces the judge to do its job.

## Evidence: grounding you can audit

Good evidence quotes or points at the draft: "'cracked jar' appears in sentence one," not "it seems to acknowledge the issue." The difference is auditability. With grounded evidence you can read the critique and verify the verdict yourself, which is what makes the critic trustworthy enough to route on. It's also your vagueness detector from Lesson 14: when the evidence just restates the verdict, the criterion was vague.

## Suggestion: the loop's fuel

The suggestion is what the writer actually consumes. `scoreAgainstRubric` collects the failed criteria's suggestions into the feedback string:

```ts
const failed = verdicts.filter((v) => !v.passed);
const feedback = failed.map((v) => `- ${v.key}: ${v.suggestion}`).join("\n");
```

That feedback is handed to the writer on the next pass, which is precisely the "verbal reinforcement" Reflexion describes: the critique conditions the next attempt (Shinn et al., 2023). A good suggestion is specific and imperative, like "add a sign-off naming the sender," not a restatement of the failure. Vague suggestions produce vague revisions.

## Why the score-only critic fails

There's an anti-pattern worth naming: the score-only critic, a judge that returns pass or fail with no evidence and no suggestion. You can't audit its verdicts, so you can't trust the routing, and the writer can't act on them, so the loop can't improve. It looks like a critic and functions like a coin flip with extra steps. Require evidence and suggestion in the schema.

## In practice

A verdict is three things, not one: a judgment, the grounds for it, and the fix. Force all three in the schema and your critic becomes auditable and your loop becomes improvable. The boolean is the least important field.

Try it yourself. In a copy of the fake judge from the Module 2 test, make `suggestion` return `""` for a failed criterion and run the suite. Watch the schema-validation expectations, and imagine that empty suggestion reaching the writer. Restore it to a specific, imperative fix. You just felt why the schema requires it.

## Key Takeaways

- A bare boolean verdict can't be trusted (no grounding) and can't be acted on (no suggestion).
- Require two extra fields per criterion: evidence that grounds the verdict in the draft, and a suggestion that says how to fix it.
- `z.string().min(1)` makes both fields non-empty, and structured-output validation rejects a verdict that omits them.
- Grounded evidence makes verdicts auditable; a specific, imperative suggestion is the fuel the writer revises against.
- A score-only critic looks like a critic but works like a coin flip; the schema is what forces the judge to do its job.

## References

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). *Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366). arXiv. https://arxiv.org/abs/2303.11366
