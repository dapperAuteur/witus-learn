Goal: After this lesson you can detect two rubric criteria that test the same underlying property and collapse them into one independent check.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished agent running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/examples/support-reply-loop/rubric.ts) and [`tests/course/module-2-critique.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/tests/course/module-2-critique.test.ts).

## What overlap looks like

Consider a rubric with these three criteria:

- "Names the customer's problem."
- "Shows the customer they were understood."
- "Addresses the issue raised."

Read them again. They're three phrasings of one check: did the reply engage with the actual problem? A draft that names the cracked blender passes all three. A draft that doesn't, fails all three. The criteria aren't independent. They covary.

## Why overlap is a real bug, not a cosmetic one

Overlap quietly breaks both halves of the critic.

1. It distorts a weighted score. If three of your five criteria are secretly the same check, "the customer's problem is named" is worth 60% of the score and everything else splits 40%. You didn't decide that weighting. The redundancy decided it for you, invisibly. The Pareto and threshold tuning in Module 5 will be built on a scale that lies.
2. It triples the feedback. When the draft fails the shared property, the writer gets three failing checks that all say the same thing. The revision over-corrects on that one axis and ignores the criteria that only appeared once.

Overlap is dangerous precisely because each criterion passes the Lesson 14 test. Every one is observable and checkable. The defect isn't in any single criterion. It's in the relationship between them. That makes it the easiest failure mode to ship without noticing.

## The fix: independent criteria

A good rubric is a set of independent checks, each measuring something the others don't. The test for independence: can you imagine a draft that passes this criterion and fails that one, and vice versa? If two criteria always pass together and fail together, they're one criterion. Merge them.

Apply it to the support-reply rubric:

- `acknowledges_issue` and `gives_next_step` are independent. A reply can name the problem yet offer no action, and vice versa.
- `gives_next_step` and `states_timeline` are nearly independent. You can give an action with no timeframe, or, rarely, a timeframe with no action. They're kept separate deliberately, with the timeline as a 0.5 nudge so the near-overlap can't double-count as two blocking checks. That weighting choice (Lesson 18) is how you manage residual overlap you can't fully remove.

## Overlap versus compound criteria

Don't confuse this with the next lesson. Overlap is two criteria testing one property. Compound (Lesson 16) is one criterion testing two properties. They're mirror images: overlap over-counts, compound under-resolves. Both are fixed by the same north star: one criterion, one independent, observable property.

## In practice

A rubric isn't just a list of good checks. It's a list of good checks that don't secretly repeat each other. Independence is a property of the whole rubric, and you earn it by checking, for every pair, whether a draft could split them.

Try it yourself. Take the support-reply rubric and add "Engages with the customer's complaint." as a new criterion. By hand, score the STRONG and the weak reply from the tests against both it and `acknowledges_issue`. They pass and fail together on every draft. That's the overlap signature. Remove it. There's no automated linter here: overlap needs the imagine-a-splitting-draft judgment, which is the lesson.

## Key Takeaways

- Overlapping criteria test the same underlying property more than once, so one defect is counted two or three times.
- Overlap distorts the weighted score by silently over-weighting the repeated property, and it triples the feedback for a single fault.
- It's hard to catch because every criterion is individually observable; the defect lives in the relationship between criteria.
- Test for independence: imagine a draft that passes one criterion and fails the other; if none exists, merge them.
- Overlap over-counts and compound under-resolves; both resolve to one criterion, one independent, observable property.

## References

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153
