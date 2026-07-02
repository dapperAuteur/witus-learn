Goal: After this lesson you can see the whole reflection-loop stack as one composed system and name what a new domain reuses versus what it writes fresh.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/capstone-plain-language/index.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/capstone-plain-language/index.ts), which imports the scorer from [`rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/rubric.ts), the router from [`termination.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/termination.ts), the comparisons from [`eval.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/eval.ts), and the metrics from [`production.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/production.ts) in `support-reply-loop`. The capstone test is [`tests/course/module-6-capstone.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/tests/course/module-6-capstone.test.ts).

## What the capstone tests

The capstone has one belief, and it's the whole course's test. You can redeploy the reflection-loop pattern without the notes, on a domain you've never seen. Five modules built the stack on customer-support replies. This module composes all of it, the primitive, the termination, the rubric, the tracing, the eval, and the production metrics, on a different domain: rewriting dense legal clauses into plain language. If the patterns only worked on support replies, the capstone exposes that. By the end you can see the entire stack as one composed system on new ground.

## Why a new domain on purpose

A course that taught reflection loops on one domain and tested you on the same domain would prove only that you can follow a recipe. The point of a foundation course is a durable mental model you carry to new problems. So the capstone switches domains deliberately (Madaan et al., 2023, frame transfer as the real test of a learned method): legal clause to plain-language rewrite, a task with nothing in common with support replies except the shape of the loop.

The corpus is dense regulatory text. Here's a real public-domain clause from U.S. federal plain-language materials:

> "When the process of freeing a vehicle that has been stuck results in ruts or holes, the operator will fill the rut or hole created by such activity before removing the vehicle from the immediate area."

The loop's job: turn that into something a person can read.

## The transfer is the import list

Here's the proof that the pattern transfers, and it's mechanical. Open `examples/capstone-plain-language/index.ts` and read what it imports:

```ts
import { scoreAgainstRubric } from "../support-reply-loop/rubric";                                          // M2: the scorer
import { routeWithAllPatterns, TerminatingReplyStateAnnotation } from "../support-reply-loop/termination";  // M1: the router
import { pairwise, meetsThreshold, assertNoInfraErrors } from "../support-reply-loop/eval";                 // M4: the comparisons
import { computeMetrics, paretoFrontier } from "../support-reply-loop/production";                          // M5: the metrics
```

Everything structural is reused unchanged. The capstone writes only domain data: a new rubric, a new corpus, and offline stand-ins. That's the entire deliverable, and it's the entire point. The machinery is domain-independent; only the rubric and the data are domain-specific. If you understood the five modules, you can build this capstone by writing a rubric and a dataset and wiring the parts you already have.

## What composes, and where it came from

| Capstone piece | Reused from | Module |
|---|---|---|
| write, critique, revise cycle | the graph shape | 0 |
| bounded router (counter, convergence, escalation) | `routeWithAllPatterns` | 1 |
| rubric scorer plus pass rule | `scoreAgainstRubric`, `applyPassRule` | 2 |
| trace diagnostics (run records) | the trace shape | 3 |
| pairwise, threshold, loud-fail | `pairwise`, `meetsThreshold`, `assertNoInfraErrors` | 4 |
| convergence, cost, Pareto | `computeMetrics`, `paretoFrontier` | 5 |
| the rubric plus the corpus | new, written for this domain | n/a |

## In practice

The capstone isn't a seventh new idea. It's the six you already have, composed on new ground. You can run the whole stack on legal-clause rewriting by writing only a rubric and a dataset, and that fact is the durable mental model the course set out to install.

To see it for yourself, run the capstone test: `npm run test -- tests/course/module-6-capstone.test.ts`. Notice it imports from `support-reply-loop` for everything structural and from `capstone-plain-language` only for the domain data. Then open `examples/capstone-plain-language/index.ts` and count how many new structural functions it defines. It's the loop builder and a couple of thin wrappers. The engine is imported.

The next lessons build the new rubric (39), compose the graph (40), run the eval and dashboard (41), push to a third domain (42), and close the loop back to Module 0 (43).

## Key Takeaways

- The capstone's test is transfer: redeploy the reflection loop, without the notes, on a domain you've never seen.
- It switches from support replies to legal-clause plain-language rewriting on purpose, because same-domain testing only proves you can follow a recipe.
- The proof is the import list. Everything structural comes from `support-reply-loop`; only the rubric, corpus, and stand-ins are new.
- The machinery is domain-independent, so a new domain costs you a rubric and a dataset, not a new engine.
- The capstone test imports structure from the five modules and domain data from the capstone, which makes what actually transferred easy to see.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651

Plain Language Action and Information Network. (n.d.). *Federal plain language guidelines* [Public domain]. https://www.plainlanguage.gov/
