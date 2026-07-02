Goal: After this lesson you can spot a vague rubric criterion, one two careful readers could score differently, and rewrite it to name something observable in the draft.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished agent running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-2/examples/support-reply-loop/rubric.ts).

## What vague means precisely

A criterion is vague when two careful readers, or two runs of the same model, could reasonably disagree on pass or fail for the same draft. The classic offenders:

- "Is engaging."
- "Sounds professional."
- "Is high quality."
- "Demonstrates empathy."

None of these point at anything in the draft you can confirm. "Engaging" is a property of a reader's experience, not a fact about the text. The judge has nothing to ground a verdict on, so you get what ungrounded LLM judgment gives you: scores that wobble run to run on identical input (Liu et al., 2023).

## How a vague criterion poisons the loop

A reflection loop routes on `critique.passed`. If a criterion is vague, `passed` becomes partly random, and three bad things follow:

1. False passes. A weak draft gets waved through because the judge happened to feel generous, and the loop ships it.
2. False fails and wasted revisions. A good draft gets rejected on a coin flip, so the loop burns a revision (and an LLM call) chasing a phantom defect.
3. Useless feedback. "Make it more engaging" tells the writer nothing it can act on, so the next draft changes at random rather than improving.

The termination patterns from Module 1 will still stop the loop, but they can't make a vibe-based critic correct. Garbage standard in, garbage loop out.

## The fix: name the observable

Rewrite every criterion so its pass or fail is decided by something you can point at in the draft. The test: could you highlight the words that make this pass?

| Vague (unscoreable) | Checkable (observable) |
|---|---|
| "Sounds professional." | "Uses no slang or all-caps words." |
| "Is engaging." | "Opens with the customer's specific situation, not a generic greeting." |
| "Demonstrates empathy." | "Acknowledges the specific problem the customer reported." |
| "Is high quality." | (split it: quality is many checks, see Lesson 16) |

The support-reply rubric was written this way already. `acknowledges_issue` is "Names the specific problem the customer reported," and you can highlight the words that satisfy it. That's the difference between a criterion an LLM can score and one it can only guess at.

## Evidence doubles as a vagueness detector

Module 2's judge must return evidence per criterion (Lesson 17). That requirement is also a vagueness detector. If a criterion is checkable, the judge can quote the words that pass or fail it. If it's vague, the "evidence" comes back as a restatement of the verdict ("it seems professional"). When you see evidence that just paraphrases the criterion, the criterion is vague. Fix it.

## In practice

A criterion the judge can't ground isn't a weak check. It's no check, a random number wearing a rubric's clothes. Every criterion must name something observable in the draft. If you can't say what would make it pass, the LLM can't either.

Try it yourself. Add a deliberately vague criterion to a copy of the rubric, `{ key: "is_friendly", description: "Is friendly and warm.", weight: 1 }`, and run the compound-criteria linter from Lesson 16 on it (`findCompoundCriteria`). It flags the "and." But note that even the single-word version ("Is friendly") is vague in a way the linter can't catch. Vagueness is a judgment call the linter can only partly automate, which is why this is a craft.

## Key Takeaways

- A criterion is vague when two careful readers could disagree on pass or fail for the same draft.
- Vague criteria make `critique.passed` partly random, which causes false passes, wasted revisions, and feedback the writer can't act on.
- Fix a vague criterion by naming something observable: could you highlight the words that make it pass?
- Required evidence per criterion doubles as a vagueness detector; paraphrased evidence means the criterion was vague.
- A linter catches some problems but not vagueness, which needs the "could two readers disagree?" judgment call.

## References

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems 36* (pp. 46595 to 46623). Curran Associates. https://arxiv.org/abs/2306.05685
