Goal: After this lesson you can wire LangSmith so the loop runs identically whether tracing is on or off.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the deployed app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/tracing.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/examples/support-reply-loop/tracing.ts) for the `tracingConfig` function and runs [`tests/course/module-3-tracing.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/tests/course/module-3-tracing.test.ts).

## Observability must never become a dependency

Tracing is observability, and observability must never become a dependency. This lesson wires LangSmith so the loop runs identically whether tracing is on or off. Present keys light up the dashboards. Absent keys change nothing. By the end you can wire fail-soft tracing and explain why it's non-negotiable.

## The three environment variables

LangSmith is configured by three environment variables (LangChain, n.d.):

- `LANGSMITH_API_KEY` is the account key that authorizes uploading traces.
- `LANGSMITH_PROJECT` is the project the traces are grouped under.
- `LANGSMITH_TRACING`, set to `"true"`, actually emits traces.

## The config that decides without throwing

The course's config reads all three and decides, without ever throwing (`examples/support-reply-loop/tracing.ts`):

```ts
export function tracingConfig(env = process.env): TracingConfig {
  return {
    enabled: env.LANGSMITH_TRACING === "true" && Boolean(env.LANGSMITH_API_KEY),
    project: env.LANGSMITH_PROJECT ?? "wanderlearn-foundation-course",
  };
}
```

Two deliberate choices sit in that function. Tracing is enabled only when both the flag is `"true"` and a key is present. A flag with no key can't upload anything, so pretending it's on would be a lie. And the project name has a default, so a missing `LANGSMITH_PROJECT` is a harmless fallback, not a crash.

## Why fail-soft is non-negotiable

Make observability a hard dependency and you've built a system that goes down when its monitoring goes down. That's the opposite of what monitoring is for. Concretely, non-fail-soft tracing means:

- A developer who hasn't signed up for LangSmith can't run the app at all. Every lesson in this course would require an account. It doesn't.
- A LangSmith outage, an expired key, or a network blip takes down your product.
- CI can't run the suite without secrets.

So the rule: the absence of tracing config is a normal state, not an error. The Module 3 test asserts exactly this. `tracingConfig({})` returns `enabled: false` and does not throw, and the loop runs the same. This is the same fail-soft posture the field-reporter agent in this repo takes. Its instructions say the app must still run if `LANGSMITH_API_KEY` is missing.

## The same reflex is a foot-gun in your core logic

This is the tension the whole module turns on. Fail-soft is correct for infrastructure, like tracing or a flaky dependency. Fail-soft applied to your core logic is how bugs hide. A node that swallows an LLM error and returns a fallback keeps the graph moving, which is good, and can silently catch every call while the system looks healthy, which is catastrophic. Lesson 25 is a real production bug that was exactly this. Hold the distinction: fail soft on observability, fail loud on the work. At the very least, make the soft failure visible in the trace.

## In practice

If you have a LangSmith account, set the three variables and runs upload automatically. Open the project and you'll see the trace tree the next lessons read. If you don't, everything still runs. The course's diagnostics work on a local trace the loop records itself, so you learn to read the same signals offline.

To feel fail-soft working, run the Module 3 test with and without `LANGSMITH_TRACING` set in your shell: `npm run test -- tests/course/module-3-tracing.test.ts`. The result is identical, and that identical result is fail-soft doing its job.

```bash
npm run test -- tests/course/module-3-tracing.test.ts
```

Then read `tracingConfig` and trace the flag-but-no-key case, `tracingConfig({ LANGSMITH_TRACING: "true" })`. The flag is `"true"` but the key is absent, so `Boolean(undefined)` is `false`, and `enabled` comes back `false`. The flag alone can't turn tracing on, and nothing throws. Observability is a luxury the system must survive without, so wire it to enrich when present and stay silent when absent. But watch the mirror-image trap: the same reflex that's right for tracing is dangerous in your core nodes.

## Key Takeaways

- Observability must fail soft: present keys enrich, absent keys are silent, and a missing dashboard never breaks a running loop.
- `tracingConfig` enables tracing only when both `LANGSMITH_TRACING` is `"true"` and a key is present, and it defaults the project name so nothing crashes.
- A hard dependency on tracing means a monitoring outage takes down your product, blocks developers without accounts, and stops CI.
- The absence of tracing config is a normal state, not an error, and the Module 3 test asserts the loop runs the same either way.
- Fail-soft is right for infrastructure and dangerous in core logic: fail soft on observability, fail loud on the work.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/
