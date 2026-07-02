Goal: After this lesson you can triage a non-converged run from its score trajectory and pick the fix that matches the cause.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the deployed app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/tracing.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/examples/support-reply-loop/tracing.ts) for the `didNotConverge` function and the escalated-run fixtures in [`tests/course/module-3-tracing.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/tests/course/module-3-tracing.test.ts).

## The third trouble-shape: a run that never reached a passing draft

The third trouble-shape is non-convergence: a run that never reached a passing draft and exited by escalation or cap. Non-convergence isn't itself a bug, because Module 1 made it a designed outcome, but a rate of non-convergence is a signal, and the trace tells you whether the cause is the writer, the rubric, or the input. By the end you can triage a non-converged run.

## What non-convergence looks like in the trace

Non-convergence is the simplest shape to spot. The terminal span is `flag_for_human`, not `mark_resolved`:

```
write_reply / critique_reply   rev 1   2/4
write_reply / critique_reply   rev 2   2/4
write_reply / critique_reply   rev 3   2/4
flag_for_human                         never passed, escalated
```

## The one-line detector

The diagnostic is a one-liner, because the outcome already carries it:

```ts
export function didNotConverge(trace: RunTrace): boolean {
  return trace.outcome === "escalated";
}
```

The Module 3 test asserts it's `true` for an escalated run and `false` for a resolved one. The interesting work isn't detecting non-convergence. It's reading the trace to learn why this run didn't converge, because the fix differs entirely by cause.

## Three causes, three opposite fixes

A non-converged trace falls into one of three shapes, and you tell them apart by the score trajectory, the same `passedChecks` column from Lessons 22 and 23:

- **Score climbs but ran out of passes** (one, then two, then three, cap hit). The loop needed more budget. Fix: raise `MAX_REVISIONS`. It was converging, just slowly.
- **Score flat the whole way** (two, then two, then two). The writer or rubric is stuck, the Lesson 22 and 23 failures. Fix: fix the suggestions or the writer. Do not just raise the cap.
- **Score is zero of four on every pass, even on good drafts.** Something is broken upstream. That's Lesson 25: the critic itself is failing.

This is the payoff of the whole module. "The loop escalated" is one outcome, but the trace splits it into three causes with three opposite fixes. Raising `MAX_REVISIONS` rescues the first case and wastes money on the second, and you can only tell which you're in by reading the trajectory in the trace.

## The rate is the real signal, and the cap is not a cure

A single escalation is fine. That's the loop being honest about a hard ticket. A rising rate of escalations across many runs means something changed: a model regression, a rubric edit that raised the bar, a shift in the inputs. That's why Module 5 puts non-convergence rate on a dashboard with an alert. The per-run trace tells you the cause of one escalation. The aggregate tells you when to go look.

There's a standing anti-pattern here: reflexively bumping `MAX_REVISIONS` whenever runs escalate. It rescues only the genuinely slow case. For a flat-trajectory stall it just buys more identical failing passes at full price. Read the trajectory first. Raise the cap only when the score was actually climbing.

## In practice

Build three traces by hand, the way the Module 3 test does: one climbing then capped, one flat, one all zeros. Run `didNotConverge` on each and all three come back `true`. Then notice it can't tell them apart, which is the point. Detection is trivial. Triage is the skill, and triage lives in the trajectory.

Escalation is one outcome hiding three causes that demand opposite fixes: more budget, a better writer or rubric, or an upstream repair. The score trajectory in the trace is the triage tool, and the rate of non-convergence, not any single run, is what tells you the system changed. Lesson 25 is that all-zeros case, in the wild.

## Key Takeaways

- Non-convergence is a run that never reached a passing draft and exited by escalation; it's a designed outcome, not a bug by itself.
- The detector is trivial (`outcome === "escalated"`); the real work is triage from the score trajectory.
- Three trajectories mean three opposite fixes: climbing-then-capped needs more budget, flat needs a writer or rubric fix, all-zeros means something upstream is broken.
- Raising `MAX_REVISIONS` rescues only the genuinely slow case and wastes money on a flat stall, so read the trajectory before bumping the cap.
- A single escalation is fine; a rising rate across runs is the signal that something changed, which is why Module 5 alerts on the rate.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023).
*Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366).
arXiv. https://arxiv.org/abs/2303.11366
