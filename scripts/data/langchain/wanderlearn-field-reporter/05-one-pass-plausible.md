Goal: After this lesson you can explain why a single model call stops at plausible instead of good.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the loop running in [the deployed app](https://wanderlearn.field.reporter.witus.online/).

## A ticket and a one-pass reply

Here's the thread domain for the next five modules, a customer support reply. Take a real ticket:

> "My blender arrived with a cracked jar and won't seal. I need it for a catering job this weekend."

Ask a model, in a single call, to "write a friendly support reply," and you get something like:

> "Thanks so much for reaching out! We're really sorry to hear about your experience and we completely understand your frustration. Your satisfaction is our top priority and we're here to help. Please let us know if there's anything else we can do!"

It's grammatical, warm, and useless. Read it against the ticket and notice what's missing. It never names the cracked jar. It never acknowledges the weekend deadline. Worst of all, it tells the customer nothing about what happens next. There's no replacement, no timeline, no action. The model had no signal about what a good support reply is, so it stopped at plausible: fluent, on-topic, and empty.

## Why the model stops at plausible

This isn't a small or careless model failing. Plausible is simply where next-token prediction ends. A model trained to continue text will produce text that reads like a support reply, because that's the most probable continuation of "write a support reply." Nothing in that objective rewards resolving the customer's problem. It only rewards sounding like a reply that might. Left ungrounded, models produce fluent text that's confidently incomplete or wrong, a well-documented failure mode of natural-language generation (Ji et al., 2023).

A longer, sterner prompt ("be specific! include a next step!") helps a little and fails the same way. You're still asking one call to both write and hold the bar, and when those compete inside a single forward pass, the bar loses. The quality bar has to live outside the generator.

## The prompt-harder anti-pattern

Name it, because you'll be tempted by it for the rest of your career. The prompt-harder anti-pattern is trying to close the plausible-to-good gap by piling requirements into the generation prompt. It conflates generation and judgment, it has no measurable success signal, and it degrades as you add requirements, because each new clause competes with the others for the model's attention. The fix is structural, not textual: a second step whose only job is to judge the first.

Generation and judgment are different tasks, and a model is often a better critic of a finished draft than a first-pass author of one. It's easier to notice that a reply names no next step than to never omit one in the first place (Madaan et al., 2023). Reflexion frames that judgment as "verbal reinforcement" that conditions the next attempt (Shinn et al., 2023). Either way, the move is the same: externalize the bar.

## What a good reply would do

Hold the bad reply against three checks you can verify by reading the text:

1. Does it name the specific issue (the cracked jar, the broken seal)?
2. Does it give a concrete next step (a replacement, a timeline)?
3. Does it close properly (a sign-off, not a trailing pleasantry)?

The plausible reply fails all three. A good reply passes all three: "Hi, I'm sorry your blender arrived with a cracked jar and won't seal. We'll ship a replacement today with overnight delivery so you have it before the weekend, and email you tracking. Best, ..." The difference isn't warmth or word count. It's whether the reply did the job. Those three checks are the seed of a critic.

## In practice

Write the worst plausible-but-empty support reply you can for the blender ticket: maximally warm, zero substance. Then score it against the three checks above by hand. Keep both the reply and the scores. In Lesson 6 the stub critic should reproduce your hand-scoring exactly, which is how you'll know the critic encodes the standard you actually meant. One pass gives you plausible. Good needs a target the generator doesn't hold on its own, plus a second attempt at hitting it. That's a loop, and a loop needs a thing that judges.

## Key Takeaways

- A single model call returns a plausible reply, fluent and on-topic, but often empty of the specific issue, a next step, or a proper close.
- Plausible is where next-token prediction ends; the objective rewards sounding like a reply, not resolving the customer's problem (Ji et al., 2023).
- The prompt-harder anti-pattern piles requirements into the generation prompt; it conflates writing with judging, has no measurable success signal, and degrades as clauses compete.
- The fix is structural, not textual: a second step whose only job is to judge the first, because a model critiques a finished draft better than it authors a perfect first pass.
- Three text-verifiable checks separate plausible from good: names the specific issue, gives a concrete next step, and closes properly.

## References

Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. *ACM Computing Surveys, 55*(12), 1 to 38. https://doi.org/10.1145/3571730

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). *Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366). arXiv. https://arxiv.org/abs/2303.11366
