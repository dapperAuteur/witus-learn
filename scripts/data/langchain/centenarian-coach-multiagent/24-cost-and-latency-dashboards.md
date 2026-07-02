Goal: After this lesson you can read a deployed coach's cost and latency from the traces it already emits, and compare providers with real numbers.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/lib/langsmith.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-24/src/lib/langsmith.ts) and a project view in [LangSmith](https://docs.langchain.com/langsmith).

## The payoff of tracing from the first run

A deployed coach makes six or more LLM calls per question (supervisor, one per specialist, synthesizer). In production you need to see what that costs and how long it takes, per question and over time. That's the payoff of the tracing you wired in Module 0: the same traces feed LangSmith's monitoring.

## The traces you already emit are the data

Every coach query writes a LangSmith trace (Module 0), and the graph is tagged and named so runs are findable ([`src/lib/langsmith.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-24/src/lib/langsmith.ts)). You didn't add anything new for monitoring; the dashboards read the runs you're already producing (LangChain, 2025). From them, LangSmith surfaces per-run latency, token counts, and cost, and aggregates them across a project over time.

## What to watch, and what it tells you

- **Latency per node.** The trace tree shows where time goes. Fan-out to three specialists runs them in parallel (Module 1), so wall-clock is the slowest specialist plus the supervisor and synthesizer, not the sum. If one specialist dominates, that's where to optimize.
- **Tokens and cost per run.** The composer and synthesizer carry the largest prompts (retrieved sources plus findings). Watching cost per question is how you decide whether a cheaper model on a role is worth it.
- **Cost by provider.** The coach's provider is runtime configuration (the admin dashboard and `COACH_LLM_PROVIDER`, Module 0). Tagging experiments with the provider (the eval runner already sets `metadata: { provider }`, Module 4) lets you compare cost and quality across providers on the same dataset, not by anecdote.

## Observability is the deployment story, not an add-on

The reason this is a deployment lesson and not a footnote: a multi-agent system's cost and latency are emergent. They come from the fan-out, the tool calls, and the model choice per role, so you can't reason about them from the code alone. You have to measure the running system. Because tracing was wired in from the first run, the deployed coach is observable by default, and the dashboards are a view onto data you already have rather than instrumentation you scramble to add after an incident.

## In practice

Open your LangSmith project and find a recent cross-domain run. Read its total latency and token count, then expand the tree and see which node spent the most of each. Now change the provider in the admin dashboard, ask the same question, and compare the two runs' cost and latency in the dashboard. You've just done provider A/B testing with real numbers, which is the deployment-grade version of "which model should we use."

## Key Takeaways

- The cost and latency dashboards read the LangSmith traces every query already emits; nothing new is added for monitoring.
- Watch latency per node, tokens and cost per run, and cost by provider.
- Under parallel fan-out, wall-clock latency is the slowest specialist plus supervisor and synthesizer, not the sum.
- Tagging runs with the provider lets you compare cost and quality on the same dataset instead of by anecdote.
- A multi-agent system's cost and latency are emergent, so you measure the running system, which the from-day-one tracing makes free.

## References

LangChain. (2025). *LangSmith documentation: Monitoring, tracing, and dashboards*. https://docs.langchain.com/langsmith
