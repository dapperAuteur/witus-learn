Goal: After this lesson you can look at a problem and say, with evidence, whether it needs one agent or several, and defend the call.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/graph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-05/src/graph.ts), the top-level graph with its supervisor and specialists.

## The problem a single agent has

Multi-agent systems are fashionable, and that's a problem. Most agent tutorials reach for a supervisor and a swarm of sub-agents before they have a reason to. This lesson is about the reason.

The coach answers health questions. Early versions were one prompt: a long system message that made the model a nutrition expert, a strength expert, a recovery expert, and a synthesizer all at once. It worked for narrow questions and fell apart on:

> "I slept six hours and feel tired, should I still train legs today, and what should I eat afterward?"

One agent must judge recovery, judge training, judge nutrition, and weave the three into one answer in a single pass. Each sub-judgement competes for the same context window and the same attention. The retrieval call is worse: one query against one pile of documents returns a blurry mix of sleep science, training theory, and macronutrient guidance, and the model grounds its answer in whatever floated to the top. The failure isn't that the model is dumb. It's that the architecture gave it no seam along which to divide the work.

## What multi-agent actually buys you

A multi-agent system splits one large prompt into a supervisor that routes and a set of specialists that each own a slice of the problem, the coordinator pattern that lets specialized agents each hold a narrower competence (Wu et al., 2023). In this repo (`src/graph.ts`) the coach has a supervisor plus Nutrition, Workout, Recovery, and Corrective specialists. The split buys three concrete things:

1. **Isolated retrieval.** The Nutrition specialist queries only the `nutrition_kb` namespace; Workout queries only `workout_kb`. A training question never wades through recipe text (Module 2).
2. **Isolated tools.** Nutrition has a calorie calculator; Workout has a progression calculator and a mobility lookup. Neither model sees the other's tools.
3. **Attributable answers.** Each specialist returns a structured finding with its own citations, so the final answer can say which specialist said what and link the source, the grounding discipline from Lesson 1. A single agent can only gesture at "the documents."

None of this requires the specialists to be clever. It requires them to be separate: separate context, separate retrieval, separate tools.

## The anti-pattern: routing for routing's sake

Multi-agent isn't free. Every request now costs a supervisor call, one call per specialist, and a synthesizer call, six calls where a single agent made one. Latency stacks, there's more state to thread, and there are more ways to misroute. If your specialists all read the same knowledge base and call the same tools, you haven't built a multi-agent system. You've built a single agent with extra network hops and a routing-bug surface. That's the most common way these systems go wrong.

## A decision checklist

Before you split one agent into many, answer these:

- **Genuinely different knowledge sources?** If two domains are answered from one combined doc set, one retriever is fine.
- **Different tools?** A calorie calculator is useless to a mobility lookup. Different tool sets is a strong signal to split.
- **Cross-domain questions often enough to need synthesis?** If 95% of questions are single-domain, a router in front of one agent may be enough, and you may not need a synthesizer at all.
- **Per-domain attribution required?** If users or auditors must see which source supports which claim, separate specialists make that natural. In a health domain, that traceability is the difference between advice and liability.

Two or more "yes" answers, and multi-agent earns its cost. Mostly "no," and you're about to add complexity that buys nothing.

## In practice

Run the checklist against a new specialist you might add, say a Mindset agent (stress, motivation, adherence) or a Labs agent (bloodwork interpretation). Write two or three sentences per checklist question. Would it earn its place, or would it share Recovery's corpus and tools? Keep your notes; Module 6 turns "add a specialist" into a worked lesson, and this is the decision that should precede it. For the coach itself the answer is a clear "yes": nutrition and workout have distinct knowledge bases, distinct tools, and distinct citation trails, and cross-domain questions are common, so the supervisor plus specialist split is the only architecture that answers the six-hours-of-sleep question cleanly.

## Key Takeaways

- A single agent conflates domains: one context window and one blurry retrieval call for questions that span several fields.
- Multi-agent buys three things: isolated retrieval, isolated tools, and attributable, cited answers.
- Multi-agent costs six or more model calls per question, plus latency and misroute surface, so it must earn its place.
- If your specialists share a corpus and tools, you've built a single agent with extra hops, which is the routing-for-routing's-sake anti-pattern.
- Two or more "yes" answers on the checklist (different sources, different tools, cross-domain synthesis, per-domain attribution) justify the split.

## References

LangChain. (2025). *LangGraph documentation: Multi-agent systems*. https://langchain-ai.github.io/langgraphjs/

Wu, Q., Bansal, G., Zhang, J., Wu, Y., Li, B., Zhu, E., Jiang, L., Zhang, X., Zhang, S., Liu, J., Awadallah, A. H., White, R. W., Burger, D., & Wang, C. (2023). *AutoGen: Enabling next-gen LLM applications via multi-agent conversation* (arXiv:2308.08155). arXiv. https://doi.org/10.48550/arXiv.2308.08155
