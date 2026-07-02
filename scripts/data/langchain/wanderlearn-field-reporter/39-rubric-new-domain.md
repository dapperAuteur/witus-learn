Goal: After this lesson you can design a rubric for a brand-new domain by keeping criteria single, observable, independent, and weighted, and encoding its central tension as two blocking criteria.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/capstone-plain-language/index.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/capstone-plain-language/index.ts), where `plainLanguageRubric` lives, and lints it with `findCompoundCriteria` from [`rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/rubric.ts). The capstone test is [`tests/course/module-6-capstone.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/tests/course/module-6-capstone.test.ts).

## Start from what "good" means here

A good plain-language rewrite isn't "friendly" or "clear." Those are vague (Lesson 14). Ask a sharper question: what can a reader verify in the rewritten text? That gives four checkable properties (`examples/capstone-plain-language/index.ts`):

```ts
export const plainLanguageRubric: RubricCriterion[] = [
  { key: "preserves_obligation", description: "Keeps the core obligation or action of the original clause.", weight: 1 },
  { key: "plain_language",       description: "Uses short sentences a non-lawyer can read.",                  weight: 1 },
  { key: "no_legalese",          description: "Contains no legalese (shall, herein, pursuant, etc.).",        weight: 1 },
  { key: "direct_address",       description: "Addresses the reader directly as 'you'.",                      weight: 0.5 },
];
```

Each criterion passes Module 2's tests:

- **Single, not compound (Lesson 16).** "preserves the obligation" and "no legalese" are separate keys, not one "faithful and readable." Run `findCompoundCriteria` on this rubric and it returns `[]`.
- **Observable, not vague (Lesson 14).** "no legalese" is checkable by scanning for a word list; "plain_language" is checkable by sentence length. Neither asks the judge to feel anything.
- **Independent, not overlapping (Lesson 15).** A rewrite can be faithful but still legalese-laden (`preserves_obligation` passes, `no_legalese` fails), or plain but unfaithful. So the criteria split real drafts apart.
- **Weighted as policy (Lesson 18).** `direct_address` is a 0.5 nudge. Preferring "you" is good plain-language practice, but a rewrite that's faithful, short, and legalese-free shouldn't fail merely for phrasing in the third person. The blocking checks are the three that define correctness.

## The domain-specific tension: fidelity versus simplicity

Every domain has a central tension the rubric must encode, and naming it is the design work. For plain language it's fidelity versus simplicity. The easiest way to make a clause readable is to drop its hard parts, which destroys its legal meaning. So `preserves_obligation` (fidelity) and `plain_language` (simplicity) are both blocking and deliberately in tension. A good rewrite has to satisfy both at once, which is exactly the hard part of the task. A rubric that only rewarded simplicity would pass a rewrite that lost the obligation; one that only rewarded fidelity would pass the original untouched. Encoding the tension is what makes the critic steer toward good.

For support replies, the central tension was completeness versus brevity. For commit messages it would be informativeness versus conciseness. Find your domain's tension and make both sides blocking.

## The hard case the rubric must catch

The corpus includes a legalese-saturated clause, "Pursuant hereto, remittance shall be tendered forthwith," that a naive rewrite can't make plain without either dropping the obligation or keeping a legalese term. The rubric catches this. A rewrite that echoes "pursuant" passes fidelity but fails `no_legalese`, so it doesn't slip through. A rubric that couldn't tell this case apart from a genuinely plain rewrite would be useless, and the capstone test asserts the `remittance` clause fails. That's proof the rubric discriminates.

## In practice

Writing a rubric for a new domain is the same craft as Module 2, applied to a new sense of "good." Find the verifiable properties, keep them single and independent, weight the nudges below the blockers, and then make the domain-specific move: encode the central tension as two blocking criteria that pull against each other. The craft transfers; only the criteria change.

Try it on this rubric. Add a fifth criterion, `defines_terms` ("explains any technical term it keeps"), weight 0.5, and decide whether it's blocking or a nudge. Run `findCompoundCriteria` to confirm it's atomic, then re-run the capstone test and see whether the pass rate moves. You just extended a new-domain rubric using Module 2's rules.

The next lesson composes the graph around this rubric, and you'll see how little new graph code the domain actually needs.

## Key Takeaways

- The rubric is the only genuinely domain-specific artifact in the capstone, so writing it is where Module 2's craft transfers.
- Start from what a reader can verify, not from vague words like "clear" or "friendly."
- The four criteria stay single, observable, independent, and weighted, so they pass Module 2's own lint (`findCompoundCriteria` returns `[]`).
- Name the domain's central tension and make both sides blocking. For plain language that's fidelity versus simplicity.
- Test the rubric on a hard case. The legalese-saturated `remittance` clause must fail, which proves the rubric discriminates.

## References

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153

Plain Language Action and Information Network. (n.d.). *Federal plain language guidelines* [Public domain]. https://www.plainlanguage.gov/
