Goal: After this lesson you can defend a small ten-example dataset as a regression eval and say clearly what it does and doesn't buy you.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens the regression check in [`examples/support-reply-loop/eval.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/examples/support-reply-loop/eval.ts).

## What a regression eval is really for

Be precise about the job. A regression eval isn't trying to measure absolute quality to two decimal places. It's trying to answer one question on every change: did this make the loop worse? That's a differential question. You compare the new pass rate to the old one. Differential questions need far fewer examples than absolute measurement, because you're looking for a drop, not a precise level.

The [Module 4 test](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/tests/course/module-4-evaluation.test.ts) shows this with ten examples:

```ts
const good      = await runEval(dataset, loopTarget(templatedWriter, judge), judge);  // ~0.9
const regressed = await runEval(dataset, loopTarget(weakWriter, judge), judge);       // ~0.0
expect(meetsThreshold(good, 0.7)).toBe(true);
expect(meetsThreshold(regressed, 0.7)).toBe(false);   // the regression is caught
```

Ten examples were enough to turn "someone broke the writer" into a red build.

## Why ten examples is enough

Real regressions aren't subtle. A broken prompt, a bad model swap, a rubric edit gone wrong: each tanks the pass rate across many examples at once, not one. You don't need a big sample to see a cliff. Ten examples show it plainly.

Curation beats volume. Ten examples chosen to span the failure modes, the way Lesson 27 built them, carry more signal than a thousand random ones, most of which are easy and redundant. Each curated case tests something distinct.

Cheap enough to run always. A ten-example LLM-judged eval is a handful of calls, small enough to run on every commit. A thousand-example eval runs nightly at best, so a regression lives for a day. An eval you run on every change catches more than a big one you run rarely.

## The limits of a small dataset

Be honest about the limits, so you don't over-claim.

It's not a precise quality number. Ten examples give you about 10% resolution at best, so the pass rate is coarse. That's also why the threshold needs margin, from Lesson 30. For "is it 87% or 91% good?" you need more data.

It's not coverage of rare inputs. A regression that only shows on a one-in-500 input won't appear in ten examples. Those you catch in production, in Module 5, and then add to the dataset. The dataset grows precisely along the failures it missed.

## Grow the dataset from misses

The ten examples are a starting point, not a ceiling. Every production failure the eval didn't catch becomes example eleven. Over time the dataset accretes exactly the cases that matter, each one a regression test for a bug you've already paid for once. Small but growing, curated from reality, run on every change: that's the eval that actually protects a loop.

The failure mode is the opposite: a big eval you never run. A thousand-example dataset so slow it runs nightly or by hand, so regressions live for hours before anyone sees red. A small eval on every commit catches more, sooner. Optimize for how often you run it, not for size.

## Looking back and ahead

Look back at Lesson 26: the runtime rubric is also the offline test. You've now built the whole eval around that reused rubric: a small curated dataset, an evaluator that fails loudly, pairwise proof the loop beats one pass, and a margin-aware threshold. The dataset is small on purpose, because regressions are cliffs, curation beats volume, and an eval you run on every change is the one that protects you. Module 5 takes this offline eval online: the same rubric watching convergence rate, cost, and quality on live traffic, reflection as a budget you allocate, not a magic wand.

## In practice

A small, curated dataset catches the regressions that matter and stays cheap enough to run on every change. To feel its floor, trim `supportReplyDataset` to its first three examples and re-run the regression test. Watch the pass rate go coarse, only 0, 0.33, 0.67, or 1.0, and reason about whether you could still set a threshold with margin between "good" and "regressed." Then restore the ten. You just felt how small a dataset can go before it stops working.

## Key Takeaways

- A regression eval answers a differential question, did this get worse, which needs far fewer examples than measuring absolute quality.
- Real regressions tank many examples at once, so ten curated cases show the cliff plainly.
- Curated examples carry more signal than a large random sample, and a small eval is cheap enough to run on every commit.
- A small dataset won't give a precise quality number or cover rare inputs.
- Grow the dataset from the production failures it missed, so each becomes a permanent regression test.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems 36* (pp. 46595 to 46623). Curran Associates. https://arxiv.org/abs/2306.05685
