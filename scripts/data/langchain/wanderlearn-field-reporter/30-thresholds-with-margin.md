Goal: After this lesson you can set a CI threshold below the expected pass rate by a measured margin, so the gate catches real regressions without failing on ordinary judge noise.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens the threshold check in [`examples/support-reply-loop/eval.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/examples/support-reply-loop/eval.ts).

## The judge behaves like a distribution

An eval that gates CI needs a threshold: pass rate at or above X, or the build fails. But the scorer is an LLM judge, and an LLM judge is noisy. A threshold of 100% will fail your build on a good system the day the judge wobbles.

Module 3 named this critic drift: the same draft can score differently across runs, because the judge is nondeterministic. Even at temperature 0, an LLM judge isn't perfectly stable across inputs and versions. So your eval's pass rate is itself a noisy measurement. Run the same good system twice and you might get 0.92 one time and 0.88 the next. A threshold has to live below that wobble.

## Set the threshold below expected

The rule is trivial:

```ts
export function meetsThreshold(report, threshold) {
  return report.passRate >= threshold;
}
```

The machinery is nothing. The number you pass it is the lesson. The [Module 4 test](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/tests/course/module-4-evaluation.test.ts) sets it at 0.7, not 1.0, for a system that scores about 0.9:

```ts
expect(meetsThreshold(loop, 0.7)).toBe(true);    // good system clears it with room to spare
expect(meetsThreshold(single, 0.7)).toBe(false); // broken baseline cannot
```

The gap between the expected 0.9 and the 0.7 gate is the margin, the room you leave for judge noise so a good run on a bad judge-day doesn't redden CI. Set the threshold at roughly expected minus a few times the run-to-run wobble: high enough that a real regression drops below it, low enough that ordinary judge noise doesn't.

## Two ways the margin goes wrong

Threshold too high, with no margin: set it at 0.95 for a 0.9 system and CI fails randomly on good code. The team learns to ignore the eval, and a flaky gate is a disabled gate. This is the more common and more damaging mistake.

Threshold too low, with too much margin: set it at 0.3 and a real regression to 0.5 sails through. The gate stays green while the loop quietly degrades.

The margin is a calibration, and the only honest way to set it is to measure the noise. Run the eval several times on an unchanged good system, see the spread, and put the threshold a clear step below the bottom of it.

## Why the margin needs a big enough dataset

A three-example dataset makes every run 0%, 33%, 67%, or 100%. The pass rate jumps in huge steps, so there's no room to set a meaningful threshold between "good" and "regressed." A slightly larger dataset, which Lesson 31 defends, gives the pass rate finer resolution. That resolution is what makes a margin between expected and threshold expressible at all.

## The trap to avoid

The failure mode is the 100% gate: requiring a perfect pass rate from an LLM-judged eval. It fails on good systems whenever the judge wobbles, so the team disables or ignores it, and a gate no one trusts catches nothing. Set the threshold below expected, with margin sized to the measured noise.

## In practice

An LLM-judged eval is a noisy instrument, so its gate needs slack. Set the threshold below the expected pass rate by a margin you measured, not guessed: high enough to catch a real regression, low enough to survive an ordinary judge-day. The stand-ins in this suite are deterministic, so the loop's pass rate is stable here. Imagine instead that the judge were a real LLM and the rate wobbled between 0.85 and 0.95. Ask which threshold survives that, 0.95, 0.8, or 0.5, argue for one, then check it against the test's choice of 0.7.

## Key Takeaways

- An LLM judge is nondeterministic, so the eval's pass rate is a noisy measurement, not a fixed value.
- A CI gate needs a threshold set below the expected pass rate, with a margin for that noise.
- Too high a threshold fails on good code and trains the team to ignore the eval.
- Too low a threshold lets a real regression pass unnoticed.
- Size the margin by measuring the run-to-run spread on an unchanged good system, not by guessing.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153
