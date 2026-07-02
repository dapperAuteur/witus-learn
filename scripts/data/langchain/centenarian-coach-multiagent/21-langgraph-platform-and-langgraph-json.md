Goal: After this lesson you can declare the coach as a deployable graph with `langgraph.json` and run it on the LangGraph Platform surface locally, with no Docker.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`langgraph.json`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-21/langgraph.json) and [`src/deployment/graph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-21/src/deployment/graph.ts).

## A second front door onto the same graph

Until now the coach graph has run inside the Next.js app's API routes. This module also makes it deployable as a standalone graph on [LangGraph Platform](https://docs.langchain.com/langgraph-platform/) (LangSmith Deployment), and the good news for this lesson is that you can run that surface locally with no Docker and no spend.

## Two files declare the deployment

[`langgraph.json`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-21/langgraph.json) is the whole declaration:

```json
{
  "node_version": "20",
  "dependencies": ["."],
  "graphs": { "coach": "./src/deployment/graph.ts:coachGraph" },
  "env": ".env"
}
```

It names one graph, `coach`, and points at an export. That export is a deliberately thin file, [`src/deployment/graph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-21/src/deployment/graph.ts):

```ts
export { coachGraph } from "@/graph";
```

Why a thin re-export instead of pointing `langgraph.json` straight at `src/graph.ts`? It isolates the single import the Platform build must resolve. The whole graph tree imports through the `@/` path alias, and alias resolution inside the Platform build isn't guaranteed. If the build fails with `ERR_MODULE_NOT_FOUND` on `@/graph`, this one file is where you switch to a relative import (`export { coachGraph } from "../graph";`). One known risk, localized to one line (LangChain, 2025a).

## Run it locally with no Docker

```bash
pnpm deploy:dev   # runs `langgraphjs dev`
```

`langgraphjs dev` starts the Agent Server in memory, in your environment, with no Docker and no Postgres or Redis (LangChain, 2025b). It boots in seconds, hot reloads, and exercises the exact `langgraph.json` resolution, so it surfaces the `@/` alias risk before any cloud step. This matters for this build specifically: the dev machine can't run Docker Desktop, and `pnpm deploy:dev` needs none. The only CLI command that requires Docker is `langgraph up` (the standalone container), which this course doesn't use.

## The deployed graph is a distinct surface

The Next.js app keeps importing `@/graph` exactly as before; nothing about the running app changes. `langgraph.json` adds a second way to run the same compiled graph, as a managed Agent Server with its own API, persistence, and streaming. The app and the platform deployment are two front doors onto one graph, which is why the re-export is pure: every test, eval, and the app all keep exercising the same `coachGraph`.

## In practice

Run `pnpm deploy:dev` and open the local Agent Server it prints. Send the coach a question through it and confirm you get the same routed, cited answer the app gives. You've now run the LangGraph Platform surface end to end, locally, for free, before touching any cloud account. The next lesson covers what changes when the graph runs somewhere other than your laptop.

## Key Takeaways

- `langgraph.json` declares the deployment: node version, dependencies, one graph named `coach`, and the env file.
- `src/deployment/graph.ts` is a one-line re-export, kept thin to isolate the single import the Platform build must resolve.
- If the `@/` alias fails in the Platform build, that one line switches to a relative import.
- `pnpm deploy:dev` runs the Agent Server in memory with no Docker, Postgres, or Redis, and surfaces the alias risk early.
- The app and the platform deployment are two front doors onto the same compiled `coachGraph`.

## References

LangChain. (2025a). *LangGraph Platform documentation: Deployment options*. https://docs.langchain.com/langgraph-platform/

LangChain. (2025b). *LangGraph CLI documentation: Local development server*. https://docs.langchain.com/langsmith/cli
