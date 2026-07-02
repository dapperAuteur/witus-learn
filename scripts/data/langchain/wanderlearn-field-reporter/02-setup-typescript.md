Goal: After this lesson you can run the reflection loop on your own machine offline, with no API key, Docker, or LangGraph server.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the loop running in [the deployed app](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/graph.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-0/examples/support-reply-loop/graph.ts) and [`examples/support-reply-loop/run.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-0/examples/support-reply-loop/run.ts), and runs [`tests/course/module-0-loop.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-0/tests/course/module-0-loop.test.ts).

## What you need first

The runnable artifact for this course is TypeScript, so every lesson points at a real file you open and a real loop you run. You need three things and no more:

- Node 20 or newer (check with `node --version`).
- This repository, cloned.
- Nothing else. The first runnable lesson uses a deterministic stub critic and a canned writer, so nothing here calls a model or the network. You add a real chat model later, in Lesson 6's bonus footage and then Module 2.

No Docker. Some [LangGraph](https://langchain-ai.github.io/langgraphjs/) tutorials reach for `langgraph up`, which builds a Docker image. This course never does. The loop is plain `@langchain/langgraph` run with `npx tsx` and exercised with `npm run test`. If you've wrestled with Docker Desktop on an older macOS, you can ignore it here.

## Install and run

```bash
npm install
# watch the loop converge (offline, no key):
npx tsx examples/support-reply-loop/run.ts
# the success signal:
npm run test -- tests/course/module-0-loop.test.ts
```

The demo prints two revisions of a support reply and a final critique that has flipped to `PASSED`. The test asserts the same thing deterministically. That's the verifiable success signal you rebuild yourself in this module's lab.

## What the loop files contain

The loop lives in `examples/support-reply-loop/`:

- [`graph.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-0/examples/support-reply-loop/graph.ts) is the `StateGraph`: a `write_reply` node, a `critique_reply` node, a conditional edge, and the `MAX_REVISIONS` cap. That's the whole pattern.
- [`run.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-0/examples/support-reply-loop/run.ts) is an offline entrypoint with a canned writer.

You read `graph.ts` line by line in Lesson 6. For now, confirm it runs.

## Jump to any point by git tag

Each module is pinned to a git tag, so you can jump to the exact state a lesson describes and then return to your own work:

```bash
git tag --list 'course/*'
git checkout course/module-0   # the repo state for this module
git switch -                   # back to your branch
```

## The optional LangSmith key

Tracing enters in Module 3. If you want to set it up now, copy `.env.example` to `.env.local` and add `LANGSMITH_API_KEY`. The loop runs fine without it. The app is built to fail soft when the key is absent, a property Module 3 relies on. This step is optional, and this lesson's bonus footage walks through it. The full [LangSmith documentation](https://docs.smith.langchain.com/) covers the rest when you get there.

## In practice

Run the test once so you see it pass, then break it on purpose. Open [`run.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-0/examples/support-reply-loop/run.ts) and make the revised draft as weak as the first. Re-run the demo and read which of the three checks now fails, then put it back. You just used the success signal to catch a regression, which is the entire premise of Module 4, two modules early. Setup friction is where courses lose people, and this one asks only for Node and a clone.

## Key Takeaways

- The whole loop runs offline with no API key, no Docker, and no LangGraph server; you need Node 20 or newer and the cloned repo.
- `npx tsx examples/support-reply-loop/run.ts` runs the demo, and `npm run test -- tests/course/module-0-loop.test.ts` is the deterministic success signal.
- `graph.ts` holds the entire pattern: a `write_reply` node, a `critique_reply` node, a conditional edge, and a `MAX_REVISIONS` cap.
- Each module is pinned to a git tag, so `git checkout course/module-0` jumps to this module's exact state.
- A LangSmith key is optional until Module 3, and the app fails soft when it's absent.

## References

LangChain. (n.d.-a). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

LangChain. (n.d.-b). *LangSmith documentation*. https://docs.smith.langchain.com/
