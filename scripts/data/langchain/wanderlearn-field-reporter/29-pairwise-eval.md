Goal: After this lesson you can run a pairwise eval that compares the reflection loop against a single pass on the same inputs, so you can prove the loop earns its cost or decide it doesn't.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens the pairwise comparison in [`examples/support-reply-loop/eval.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/examples/support-reply-loop/eval.ts).

## The question you should have asked first

You've spent four modules building a reflection loop. Here's the question you should have demanded at the start: does it actually beat writing once? A pairwise eval answers it. Run two systems on the same dataset and compare them example by example. By the end you can prove the loop earns its extra cost, and know when it doesn't.

## Why compare on the same input

You could run the loop, get 90%, run single-shot, get 10%, and call it done. But two isolated numbers hide where the difference is, and they're noisy when an LLM judge is scoring. Pairwise compares the two systems on each same input and counts wins. That's both more informative and more stable. It's the methodology MT-Bench and Chatbot Arena use to rank models, because relative judgments on the same input are more reliable than absolute scores (Zheng et al., 2023).

The comparison joins the two runs by example id:

```ts
export function pairwise(a, b) {
  const byId = new Map(b.results.map((r) => [r.id, r.passed]));
  let aWins = 0, bWins = 0, ties = 0;
  for (const r of a.results) {
    const bPassed = byId.get(r.id);
    if (r.passed === bPassed) ties++;
    else if (r.passed) aWins++;
    else bWins++;
  }
  return { aWins, bWins, ties };
}
```

## The loop earns its cost

The [Module 4 test](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/tests/course/module-4-evaluation.test.ts) runs both targets on the dataset and compares them:

```ts
const loop   = await runEval(dataset, loopTarget(templatedWriter, judge), judge);     // 9/10
const single = await runEval(dataset, singleShotTarget(weakWriter), judge);           //  0/10
const cmp = pairwise(loop, single);
expect(cmp.aWins).toBeGreaterThanOrEqual(9);   // loop wins at least 9 cases
expect(cmp.bWins).toBe(0);                       // single-shot wins none
```

The loop wins nine cases and loses none. That's the empirical justification for the whole course: write, critique, revise produces materially better support replies than a single pass, on the same inputs, measured by the same rubric. Without this comparison, "reflection is better" is a belief. With it, it's a number.

## When pairwise tells you not to loop

Pairwise isn't a victory lap. It's a decision tool, and sometimes it tells you to stop looping. If the loop wins only one case out of ten over single-shot, you're paying two to five times the LLM calls for a 10% quality gain, and the right engineering call may be to ship single-shot. Module 5's "is single-pass good enough?" check is exactly this comparison, run continuously. A pairwise eval that shows a small margin is doing its most valuable job: stopping you from spending reflection's cost where reflection doesn't pay.

## The trap to avoid

The failure mode is assuming the loop is worth it: shipping a reflection loop because the pattern is sophisticated, without ever comparing it head-to-head against a single pass. The loop costs multiples of the calls. If the pairwise margin is thin, that cost buys little. Always run the baseline, and let the comparison decide.

## In practice

"Is the loop better than one pass?" is an empirical question, and pairwise eval answers it on the same inputs with the same rubric. A wide margin justifies the loop's cost. A thin one tells you to ship the baseline. To feel the other side, change the loop target's writer to `weakWriter` in the Module 4 suite, so the loop revises but never improves, and re-run the pairwise test. `aWins` collapses toward zero, because the loop now costs more than single-shot for no gain. That collapsed margin is exactly the signal that would tell you, in production, to stop looping.

## Key Takeaways

- A pairwise eval compares two systems on the same inputs and counts wins, ties, and losses.
- Relative judgments on the same input are more reliable than two isolated absolute scores.
- On this dataset the loop wins nine of ten and loses none, which is the empirical case for reflection.
- A thin pairwise margin is a signal to ship the cheaper single pass, not to loop.
- Never assume reflection is worth it. Run the baseline and let the comparison decide.

## References

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems 36* (pp. 46595 to 46623). Curran Associates. https://arxiv.org/abs/2306.05685

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651
