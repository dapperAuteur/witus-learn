Goal: After this lesson you can name the three failure axes of a supervisor-and-specialists system and say why you measure each one separately.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`evals/dataset.json`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-16/evals/dataset.json), the cases the next four lessons score against.

## The failure you don't see

A multi-agent system fails quietly. A misrouted question still produces a confident, fluent answer. A paragraph with no supporting source looks exactly like one that has support. Nothing throws. You only find out when a user does. Large language models are fluent by default and produce plausible, unsupported text when ungrounded (Ji et al., 2023), so "it sounds right" is not evidence that it is right. Evaluation is how you turn silent failures into a number you can watch.

## Three things fail independently, so measure them independently

For a supervisor-and-specialists system, three failures have different causes and different fixes:

1. **Routing accuracy.** Did the supervisor consult the right specialists? A pure-nutrition question that also wakes Workout wastes budget; a cross-domain question sent to one specialist gives half an answer.
2. **Citation coverage.** Does every specialist finding carry at least one citation, and does the final answer? This is a structural promise the design makes; coverage checks the promise is kept.
3. **Grounding.** Is the answer actually supported by the retrieved sources, or did the model add plausible facts no source backs?

Routing and citation coverage are checkable with plain code. Grounding needs a judge, usually a model scoring the answer against its sources (Zheng et al., 2023). The next three lessons build exactly these three evaluators against the coach's real `evals/` suite.

## Read the scores as a set, not a number

The reason to decompose quality into three scores instead of one blended "quality" number is that the decomposition tells you where to look:

- Low routing, high grounding: the specialists are good, the supervisor is sending them the wrong questions. Fix the supervisor prompt or schema.
- High routing, low grounding: the right specialist is answering, but not from its sources. Fix retrieval or the composer.
- High routing and grounding, low citation coverage: a node is dropping citations on the floor. Fix the finding or synthesis plumbing.

A single blended score hides all of this. Three scores point at the broken part.

## In practice

The coach ships its evaluators in `evals/` and its dataset in [`evals/dataset.json`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-16/evals/dataset.json), wired to a gate (`pnpm eval`) and to LangSmith (`pnpm eval:langsmith`). Evals you run once and admire are worth little; evals that gate a pull request and grow as you find bugs are worth a lot. Before writing any evaluator, predict the three scores for one cross-domain question you've already run. Then in the later lessons, run the real evaluators and compare. The gap between your guess and the measured scores is the value evaluation adds: it replaces "I think it's fine" with "here's the number."

## Key Takeaways

- Multi-agent systems fail quietly: a misroute or an ungrounded claim still reads as a confident answer, and nothing throws.
- Three failures have different causes and fixes: routing accuracy, citation coverage, and grounding.
- Routing and citation coverage are checkable with plain code; grounding needs an LLM judge.
- Reading the three scores as a set points at the broken part; a single blended score hides it.
- Evaluation is part of the artifact (a gate plus a growing dataset), not a report you run once.

## References

Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. *ACM Computing Surveys, 55*(12), 1-38. https://doi.org/10.1145/3571730

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems* (Vol. 36). Curran Associates.
