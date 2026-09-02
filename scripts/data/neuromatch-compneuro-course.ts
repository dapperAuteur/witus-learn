// Authored "Computational Neuroscience Foundations": the private study course BAM asked for
// (plans/74). It sits UNDERNEATH Neuromatch Academy's own Computational Neuroscience course rather
// than reproducing it, which is not modesty: their own pages size that course at three weeks, eight
// hours a day, five days a week, "Equivalent to 15 full days of instruction plus bonus materials".
// A reading course cannot be that, and one that pretended to be would waste a learner's time twice.
//
// PURPOSE, per BAM's 2026-08-30 correction: this is for his own KNOWLEDGE AND GROWTH, not TA
// application prep. So it teaches the material. There is no exam coaching in it, no advice about
// applications, and no teaching-sample rehearsal.
//
// SECTION ORDER tracks the module sequence on Neuromatch's own coursebook (Intro to Modeling ->
// Machine Learning: Model Fitting, GLMs, Dimensionality Reduction -> Dynamical Systems: Linear
// Systems, Biological Neuron Models, Dynamical Systems -> Stochastic Processes: Bayesian Decisions,
// Hidden Dynamics, Reinforcement Learning -> Network Causality), so a learner who finishes here can
// open their coursebook and recognise where they are. That ordering is the ONLY thing adapted from
// them. No text, code, figure, exercise or quiz question was copied or paraphrased; the CC BY 4.0
// attribution and the statement of modifications live in lesson 1, per their published guidance.
//
// EVERY IDENTIFIER IN THIS FILE WAS FETCHED BEFORE IT WAS CITED. The DOIs were resolved through
// doi.org content negotiation and checked against the returned title, authors, year, journal,
// volume and pages; the ISBNs were checked against Open Library; the Neuromatch pages and quoted
// sentences were fetched from neuromatch.io and compneuro.neuromatch.io on 2026-08-31. Nothing here
// carries an identifier that was not retrieved. Where a claim could not be settled against a
// primary source it is hedged in the lesson and a proposed research check is written at the BOTTOM
// of this file for the branch owner to move into src/lib/research-checks.ts.
//
// House style, matching deaf-america-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a
// quiz per teaching section (serving 5, passing 80, shuffled) plus a final serving 10; every
// question carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and
// distractors long and specifically wrong, so `check-longest-option` passes by construction.

import type { AuthoredCourse } from "./authored-course";

export const NEUROMATCH_COMPNEURO_COURSE: AuthoredCourse = {
  title: "Computational Neuroscience Foundations",
  description:
    "An independent, private companion to Neuromatch Academy's Computational Neuroscience course, built to make their material followable rather than to replace it. Be clear about the boundary before you start. Neuromatch runs three weeks, eight hours a day, five days a week, in a pod with a teaching assistant, and their own open-education page sizes the published coursebook at fifteen full days of instruction plus bonus materials. This course is not that and could not be: it is the substrate underneath it. You will learn what a model of a neuron actually is and which parts of a real cell it throws away, the difference between a what, a how and a why model, and why the leaky integrate-and-fire neuron is the workhorse it is. Then the mathematics at exactly the level the field uses it: vectors, matrices, rank, eigenvalues, means and variances, the normal and Poisson distributions, derivatives, integrals and what a differential equation says. Then model fitting, which means least squares, maximum likelihood, generalized linear models for spike counts, overfitting, the bias-variance trade-off and cross-validation. Then dimensionality reduction and what a low-dimensional picture of a population is and is not claiming, dynamical systems, fixed points, stability and attractors. It closes on decision-making and the drift-diffusion model, Bayesian inference in perception, and an honest map of the parts it does not cover. There is no code to run here, no notebook, no dataset, no project and no certificate. This course is not affiliated with, endorsed by or reviewed by Neuromatch; their materials are CC BY 4.0, and the attribution, the links and the statement of what was changed are in lesson 1.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — What a model is, and what it leaves out
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "scope-and-attribution",
      title: "1 · What this course is, and what it is not",
      section: "Section 1 · What a model is, and what it leaves out",
      body: `Neuromatch Academy's Computational Neuroscience course describes itself on its own course page as "A three-week, immersive course every July", run at a "Full-time effort of 8 hours per day, 5 days per week", with students working "in a pod of ~15 students and a dedicated Teaching Assistant" and code taught "through Google Colab or Kaggle using Python" (Neuromatch, n.d.-a). Their open-education page sizes the published coursebook the same way: "Equivalent to 15 full days of instruction plus bonus materials" (Neuromatch, n.d.-b).

**This course is not that, and could not be.** Fifteen full days of tutorial work does not compress into a few hours of reading, and a companion course that pretends otherwise wastes your time twice: once while you take it, and again when you hit the gap.

**What this course is.** The concepts, the vocabulary and the small amount of mathematics that make their notebooks legible rather than intimidating. When a tutorial tells you to fit a generalized linear model and check the log-likelihood, you should already know what an encoding model is, why spike counts are not treated as Gaussian, and what a likelihood is a function of. When another tells you to project onto the first two principal components, you should already know that those are eigenvectors of a covariance matrix, and that variance is not the same thing as meaning.

**What it deliberately leaves out.** Code you run. There is no notebook here, no Colab session, no dataset, no project, no pod and no certificate. Reading about a model fit is not the same as fitting one and watching it fail. This is the map. Their notebooks are the territory.

## Attribution and licence

This course is **independent**. Neuromatch's own guidance is explicit that reuse is welcome and is not a stamp of approval: "While we encourage this, external uses aren't officially reviewed or endorsed by Neuromatch" (Neuromatch, n.d.-b).

Neuromatch publishes its course content under the **Creative Commons Attribution 4.0 International licence (CC BY 4.0)**, which carries no NonCommercial and no ShareAlike clause. Every coursebook page carries the line "The contents of this repository are shared under the Creative Commons Attribution 4.0 International License. Software elements are additionally licensed under the BSD (3-Clause) License." Their attribution guidance asks reusers to "include attribution, a link to the source materials, and a link to the CC-BY 4.0 license" and, on modification, to "indicate what you changed" (Neuromatch, n.d.-b).

- **Source materials:** the coursebook at https://compneuro.neuromatch.io/tutorials/intro.html and the content repository at https://github.com/NeuromatchAcademy/course-content
- **Licence:** https://creativecommons.org/licenses/by/4.0/

**What was adapted, and what was changed.** Only the **order and grouping of topics**, which tracks their module sequence so that finishing here leaves you able to open their coursebook and know where you are. Nothing else. No text, code, figure, exercise or quiz question was copied or paraphrased from their materials. Every sentence here was written from scratch, and every factual claim carries a primary source of its own. The topic set is also **narrowed**: their causality module, their projects, their pods and all hands-on coding are absent by design.

:::reveal Name three things this course explicitly does not give you that the Neuromatch course does. ||| Code you actually run in a notebook, a collaborative research project, and a pod with a teaching assistant. It also gives no dataset and no certificate.

:::reveal Neuromatch's materials are CC BY 4.0. What four things does their guidance ask a reuser to do? ||| Include attribution, link to the source materials, link to the CC-BY 4.0 licence, and, if you modified anything, indicate what you changed.

## Vocabulary
- **Companion course**: a course built to make another body of material followable, which succeeds when you leave it and go read that material.
- **CC BY 4.0**: a Creative Commons licence permitting reuse and adaptation, including commercially, on condition of attribution, a link to the licence, and an indication of changes.
- **Coursebook**: Neuromatch's published, browsable set of tutorial notebooks, the thing this course is a companion to.
- **Pod**: the small group of roughly fifteen students and one teaching assistant that Neuromatch's synchronous course is organised around.

## Sources
- Neuromatch. (n.d.-a). *Computational neuroscience course*. https://neuromatch.io/computational-neuroscience-course/
- Neuromatch. (n.d.-b). *Open education resources*. https://neuromatch.io/open-education-resources/
- Neuromatch Academy. (n.d.). *Neuromatch Academy: Computational neuroscience* [course content]. https://compneuro.neuromatch.io/tutorials/intro.html
- Creative Commons. (n.d.). *Attribution 4.0 International (CC BY 4.0)*. https://creativecommons.org/licenses/by/4.0/`,
    },
    {
      slug: "what-how-why-models",
      title: "2 · What, how, and why: three kinds of model",
      section: "Section 1 · What a model is, and what it leaves out",
      body: `A model is not a small copy of the brain. It is a claim about which details matter for one question, and therefore a claim about which details can be thrown away. The single most useful habit in this field is to ask, of any model you meet, what question it was built to answer, because two models of the same neuron can disagree completely and both be right.

**Neuromatch organises its first teaching day around exactly this.** Their introduction states the taxonomy in one sentence: "we classify models into 'what', 'how', and 'why' models, not based on the toolkit used, but on the questions asked!" (Neuromatch Academy, n.d.). The distinction is about the question, not the mathematics. A regression can be any of the three.

**A what model describes.** It summarises what the system does, compactly and accurately, without saying how. A tuning curve is a what model: it tells you a V1 cell's firing rate as a function of the orientation of a bar, and it commits to no mechanism at all. Hubel and Wiesel's (1962) description of orientation-selective receptive fields in cat visual cortex is the founding example, and it is still true regardless of which circuit turns out to produce it.

**A how model explains the mechanism.** It is built from known anatomy and physiology and it says, in equations, how the thing happens. Hodgkin and Huxley's (1952) conductance-based description of the action potential is the canonical how model: sodium and potassium conductances, voltage-dependent gates, four coupled differential equations. A how model can be wrong in an interesting way, because it makes claims about parts.

**A why model asks what the system is for.** It starts from a principle, such as efficiency, optimality or minimal error, and derives what a system obeying that principle ought to do, then checks. Olshausen and Field (1996) trained a model to encode natural images sparsely and found that the learned basis functions came out localised, oriented and bandpass, which is to say they came out looking like the receptive fields Hubel and Wiesel had described. That is a why model landing on a what model, and it is one of the field's most quoted results.

**The same three-way split is old and appears under other names.** Dayan and Abbott (2001) divide models into descriptive, mechanistic and interpretive, which map onto what, how and why respectively. Marr (1982/2010) drew a related but not identical distinction between the computational level (what problem is being solved and why), the algorithmic level (what representation and procedure), and the implementational level (what physical machinery). Marr's levels are about levels of description of one system; the what, how and why split is about the question you are asking. They are often conflated, and it is worth keeping them apart.

:::reveal A tuning curve relating a V1 cell's firing rate to bar orientation is which kind of model, and what does it deliberately not claim? ||| It is a what model, a description. It says what the cell does across orientations and commits to no mechanism, so it stays true whatever circuit turns out to produce it.

:::reveal What did Olshausen and Field's sparse coding result show, and why is it called a why model? ||| A model trained to code natural images sparsely produced basis functions that were localised, oriented and bandpass, resembling simple-cell receptive fields. It starts from a principle and derives what the system ought to do, rather than describing or mechanising it.

## Vocabulary
- **What model**: a compact description of what a system does, with no claim about mechanism, such as a tuning curve.
- **How model**: an account of the mechanism, built from known anatomy and physiology, such as the Hodgkin-Huxley equations.
- **Why model**: a derivation of what a system should do if it obeys some principle, such as efficient or sparse coding, checked against what it does do.
- **Marr's levels**: the computational, algorithmic and implementational levels of describing one system, a related but distinct idea from the what, how and why split.
- **Receptive field**: the region of stimulus space, and the pattern within it, that drives a sensory neuron.

## Sources
- Neuromatch Academy. (n.d.). *Neuromatch Academy: Computational neuroscience* [course content]. https://compneuro.neuromatch.io/tutorials/intro.html
- Hubel, D. H., & Wiesel, T. N. (1962). Receptive fields, binocular interaction and functional architecture in the cat's visual cortex. *The Journal of Physiology, 160*(1), 106-154. https://doi.org/10.1113/jphysiol.1962.sp006837
- Olshausen, B. A., & Field, D. J. (1996). Emergence of simple-cell receptive field properties by learning a sparse code for natural images. *Nature, 381*(6583), 607-609. https://doi.org/10.1038/381607a0
- Dayan, P., & Abbott, L. F. (2001). *Theoretical neuroscience: Computational and mathematical modeling of neural systems*. MIT Press. ISBN 9780262041997
- Marr, D. (2010). *Vision: A computational investigation into the human representation and processing of visual information*. MIT Press. ISBN 9780262514620 (Original work published 1982)`,
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The neuron a model keeps
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-neuron-a-model-keeps",
      title: "3 · The neuron a model keeps, and the parts it throws away",
      section: "Section 2 · The neuron a model keeps",
      body: `Start from the cell. A neuron's membrane separates charge, so it behaves like a capacitor, and ion channels let charge leak across it, so it behaves like a resistor in parallel. Everything in this lesson follows from that one picture plus a decision about how much of the biology to keep.

**The full-biology answer is Hodgkin and Huxley.** Working on the squid giant axon, they described the action potential as the interaction of a voltage-dependent sodium conductance and a voltage-dependent potassium conductance, with gating variables that themselves obey differential equations. The result is four coupled ordinary differential equations, one for the membrane potential and three for the gates, and it reproduces the shape and the threshold of a real spike rather than assuming them (Hodgkin & Huxley, 1952). Hodgkin and Huxley shared the 1963 Nobel Prize in Physiology or Medicine with John Eccles for this line of work (Nobel Prize Outreach, n.d.).

**The workhorse answer is leaky integrate-and-fire.** Keep the capacitor and the leak, delete the channels, and you get one equation: the membrane time constant times the rate of change of voltage equals the leak pulling the voltage back to rest, plus the input current. Then add a rule that is not physics at all: if the voltage reaches a threshold, record a spike and reset the voltage. The idea goes back to Lapicque in 1907, whose paper was translated into English a century later by Brunel and van Rossum (2007). Neuromatch teaches Python itself on this model, stating that "You will learn how to code in Python from scratch using a simple neural model, the leaky integrate-and-fire model, as a motivation" (Neuromatch Academy, n.d.).

**What the leaky integrate-and-fire model throws away, specifically.** Five things, and it is worth being able to list them. The **shape** of the action potential, which is asserted by the reset rule rather than produced. The **spatial extent** of the cell, because this is a point neuron with no dendrites and no axon, so nothing about where a synapse lands can matter. The **identity of the ion channels**, and with it every question about pharmacology or channelopathy. **Adaptation and refractoriness**, unless you add them by hand. And the **dynamics of synapses**, which arrive as a bare current unless you model them separately.

**Between the two extremes are the reduced models.** FitzHugh (1961), and independently Nagumo, Arimoto and Yoshizawa (1962) with an electrical circuit, cut Hodgkin-Huxley down to two variables, which matters because a two-dimensional system can be drawn on a plane and reasoned about geometrically. Izhikevich (2003) published a different two-variable model, deliberately cheap to simulate, that reproduces a large catalogue of cortical firing patterns.

**The lesson underneath all of this.** There is no single correct level of detail. Which parts a model throws away is the model's central claim, and the honest question about any model is never "is it realistic" but "is what it discarded irrelevant to the question I am asking".

:::reveal List the five things the leaky integrate-and-fire model throws away. ||| The shape of the action potential, which its reset rule asserts instead of producing; the spatial extent of the cell, since it is a point neuron; the identity of the ion channels; adaptation and refractoriness unless added by hand; and synaptic dynamics.

:::reveal Why does reducing Hodgkin-Huxley to two variables, as FitzHugh and Nagumo did, buy you something a four-equation model cannot give? ||| A two-dimensional system can be drawn on a plane, so you can see its nullclines, fixed points and trajectories and reason about it geometrically rather than only simulating it.

## Vocabulary
- **Membrane potential**: the voltage difference across a neuron's membrane, the state variable nearly every single-neuron model tracks.
- **Conductance-based model**: a model in which current flows through explicitly represented, usually voltage-dependent, ion channels, as in Hodgkin-Huxley.
- **Leaky integrate-and-fire**: a point-neuron model that integrates input current through a leaky membrane and emits a spike by a threshold-and-reset rule rather than by producing one.
- **Membrane time constant**: the product of membrane resistance and capacitance, setting how fast the voltage relaxes back toward rest.
- **Point neuron**: a model with no spatial extent, so dendritic location, cable filtering and axonal delay cannot appear in it.

## Sources
- Hodgkin, A. L., & Huxley, A. F. (1952). A quantitative description of membrane current and its application to conduction and excitation in nerve. *The Journal of Physiology, 117*(4), 500-544. https://doi.org/10.1113/jphysiol.1952.sp004764
- Brunel, N., & van Rossum, M. C. W. (2007). Quantitative investigations of electrical nerve excitation treated as polarization. *Biological Cybernetics, 97*(5-6), 341-349. https://doi.org/10.1007/s00422-007-0189-6
- FitzHugh, R. (1961). Impulses and physiological states in theoretical models of nerve membrane. *Biophysical Journal, 1*(6), 445-466. https://doi.org/10.1016/S0006-3495(61)86902-6
- Izhikevich, E. M. (2003). Simple model of spiking neurons. *IEEE Transactions on Neural Networks, 14*(6), 1569-1572. https://doi.org/10.1109/TNN.2003.820440
- Nagumo, J., Arimoto, S., & Yoshizawa, S. (1962). An active pulse transmission line simulating nerve axon. *Proceedings of the IRE, 50*(10), 2061-2070. https://doi.org/10.1109/JRPROC.1962.288235
- Neuromatch Academy. (n.d.). *Neuromatch Academy: Computational neuroscience* [course content]. https://compneuro.neuromatch.io/tutorials/intro.html
- Nobel Prize Outreach. (n.d.). *The Nobel Prize in Physiology or Medicine 1963*. https://www.nobelprize.org/prizes/medicine/1963/summary/`,
    },
    {
      slug: "spike-trains-and-variability",
      title: "4 · Spike trains, Poisson counting, and irregular firing",
      section: "Section 2 · The neuron a model keeps",
      body: `Action potentials are close to stereotyped, so almost nothing is carried by the shape of any one of them. What varies, and therefore what can carry information, is when they happen and how many there are. That makes a spike train a sequence of event times, and the mathematics for sequences of event times is the theory of point processes.

**A firing rate is a construct, not a measurement.** You never observe a rate; you observe spikes and choose a window. Count the spikes in a window and divide by its width and you have a rate estimate that depends entirely on the width you chose. Average across repeated trials at each moment and you have a peristimulus time histogram, which is a rate for the average trial and may resemble no single trial. Keeping this straight prevents a whole class of confusion later, because most models are written about rates while all data arrives as spikes.

**The Poisson process is the default null model.** Assume spikes occur independently at some rate. Then the number of spikes in a window of a given width follows a Poisson distribution whose variance equals its mean, and the gaps between spikes follow an exponential distribution. Two summary numbers fall straight out and both are worth memorising. The **Fano factor**, the variance of the spike count divided by its mean, equals one for a Poisson process. The **coefficient of variation** of the interspike intervals, their standard deviation divided by their mean, also equals one.

**Real cortical neurons are close enough to that to be surprising.** Softky and Koch (1993) made the sharp version of the point: the observed irregularity of cortical firing is inconsistent with a neuron that simply integrates many random excitatory inputs, because averaging many independent inputs should produce regular, not irregular, output. Shadlen and Newsome (1998) answered that an integrate-and-fire neuron receiving roughly balanced excitation and inhibition operates on the fluctuations rather than the mean, and that this reproduces the observed irregularity. Both papers are worth reading as an example of what a real argument in this field looks like.

**The variability has physical sources.** It is not a modelling fiction. Faisal, Selen and Wolpert (2008) review where it comes from, including the stochastic opening and closing of individual ion channels and the probabilistic release of synaptic vesicles.

**Why this matters two sections early.** When you fit a model to spike counts, you have to state what you think the noise is, and that choice is not cosmetic. Counts are non-negative integers, so a Gaussian noise model is the wrong shape; Poisson is the simplest one that is the right shape. That decision is the hinge of the encoding models in Section 4.

:::reveal What are the Fano factor and the coefficient of variation, and what value does each take for a Poisson process? ||| The Fano factor is spike-count variance divided by spike-count mean, and the coefficient of variation is the standard deviation of the interspike intervals divided by their mean. Both equal one for a Poisson process.

:::reveal What was Softky and Koch's objection, and what was Shadlen and Newsome's reply? ||| Softky and Koch argued that cortical firing is too irregular to come from a neuron integrating many random excitatory inputs, because averaging many inputs should make output regular. Shadlen and Newsome replied that roughly balanced excitation and inhibition make the neuron respond to fluctuations rather than the mean, which reproduces the irregularity.

## Vocabulary
- **Point process**: a probabilistic description of a sequence of event times, the natural mathematics for a spike train.
- **Peristimulus time histogram**: a firing rate estimated by averaging spike counts across repeated trials in successive time bins.
- **Fano factor**: spike-count variance divided by spike-count mean, equal to one for a Poisson process and often above one in cortex.
- **Coefficient of variation**: the standard deviation of interspike intervals divided by their mean, equal to one for a Poisson process.
- **Balanced excitation and inhibition**: a regime in which excitatory and inhibitory input roughly cancel, so the neuron is driven by fluctuations rather than by the mean input.

## Sources
- Softky, W. R., & Koch, C. (1993). The highly irregular firing of cortical cells is inconsistent with temporal integration of random EPSPs. *The Journal of Neuroscience, 13*(1), 334-350. https://doi.org/10.1523/JNEUROSCI.13-01-00334.1993
- Shadlen, M. N., & Newsome, W. T. (1998). The variable discharge of cortical neurons: Implications for connectivity, computation, and information coding. *The Journal of Neuroscience, 18*(10), 3870-3896. https://doi.org/10.1523/JNEUROSCI.18-10-03870.1998
- Faisal, A. A., Selen, L. P. J., & Wolpert, D. M. (2008). Noise in the nervous system. *Nature Reviews Neuroscience, 9*(4), 292-303. https://doi.org/10.1038/nrn2258`,
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The mathematics you actually need
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "linear-algebra-you-need",
      title: "5 · Linear algebra, at the level actually used",
      section: "Section 3 · The mathematics you actually need",
      body: `Neuromatch states its own mathematical entry bar plainly: "Students should know linear algebra, probability, basic statistics, and calculus (derivatives and ODEs)" (Neuromatch, n.d.). Their prerequisites page is more specific about the first of those: "You need to know vector and matrix addition and multiplication, rank, bases, determinants, inverses, and eigenvalue decomposition" (Neuromatch Academy, n.d.). This lesson says what each item on that list is actually for, because the list on its own reads like a syllabus and not like a reason.

**Everything starts with a data matrix.** Record from many neurons over many time bins and you have a rectangular array: one row per neuron, one column per time bin, or the transpose, and the field is inconsistent about which. A single column is then the state of the whole population at one instant, which is a point in a space with one axis per neuron. Two hundred neurons means a two-hundred-dimensional space, and every idea in Section 5 is geometry in that space.

**Matrix multiplication is a weighted sum, and the shape rule is not negotiable.** A matrix of shape n by k times a matrix of shape k by m gives a matrix of shape n by m, and the two inner numbers must agree. A decoder that reads a behavioural variable off a population is a vector of weights multiplying the population vector, which is exactly one row of such a product. Most beginner errors in this material are shape errors, and the habit that cures them is to write the expected shape beside every line while you are learning.

**Rank is the honest count of dimensions.** The rank of a matrix is the number of linearly independent directions in it. A recording from two hundred neurons whose activity matrix has rank three is a three-dimensional signal wearing two hundred coordinates, and noticing that is what dimensionality reduction is for.

**Determinants and inverses tell you when a fit is impossible.** A square matrix has a determinant of zero exactly when its columns are linearly dependent, and exactly then it has no inverse. This is not trivia. The closed-form solution to linear regression requires inverting a matrix built from the predictors, so when two predictors are collinear that matrix is singular and the fit has no unique answer. Regularisation exists in large part to make that matrix invertible again.

**Eigenvalue decomposition earns its place twice.** An eigenvector of a matrix is a direction the matrix does not rotate, only rescales, and the eigenvalue is the scale factor. First, principal component analysis: the principal axes of a cloud of data are the eigenvectors of its covariance matrix, and the eigenvalues are the variance along each axis. Because a covariance matrix is symmetric, those eigenvalues are real and the eigenvectors are orthogonal, which is why the axes come out at right angles. Second, linear dynamics: for a system whose rate of change is a matrix times its state, the eigenvalues of that matrix decide the behaviour. Negative real parts mean the state decays back toward the fixed point, positive real parts mean it runs away, and imaginary parts mean it rotates. Section 5 uses that sentence constantly.

:::reveal A recording from 200 neurons produces an activity matrix of rank 3. What does that mean, and why does it matter? ||| It means only three linearly independent directions are present, so a three-dimensional signal is wearing 200 coordinates. It matters because that is exactly the redundancy dimensionality reduction is built to find.

:::reveal For a linear system whose rate of change is a matrix times its state, what do the eigenvalues of that matrix tell you? ||| Negative real parts mean the state decays back toward the fixed point, positive real parts mean it grows away from it, and imaginary parts mean it rotates.

## Vocabulary
- **Data matrix**: the rectangular array holding a recording, conventionally one row per neuron and one column per time bin, whose columns are population states.
- **Rank**: the number of linearly independent directions a matrix contains, which is the honest dimensionality of the signal it holds.
- **Singular matrix**: a square matrix with determinant zero and no inverse, the situation that makes a regression fit non-unique.
- **Eigenvector and eigenvalue**: a direction a matrix only rescales, and the factor by which it rescales it.
- **Covariance matrix**: the symmetric matrix of pairwise covariances between variables, whose eigenvectors are the principal components.

## Sources
- Neuromatch. (n.d.). *Computational neuroscience course*. https://neuromatch.io/computational-neuroscience-course/
- Neuromatch Academy. (n.d.). *Prerequisites and preparatory materials for NMA Computational Neuroscience*. https://compneuro.neuromatch.io/prereqs/ComputationalNeuroscience.html
- Dayan, P., & Abbott, L. F. (2001). *Theoretical neuroscience: Computational and mathematical modeling of neural systems*. MIT Press. ISBN 9780262041997`,
    },
    {
      slug: "probability-calculus-and-odes",
      title: "6 · Probability, derivatives, and what a differential equation says",
      section: "Section 3 · The mathematics you actually need",
      body: `The other two items on Neuromatch's list are stated just as concretely. On statistics: "you should be comfortable with means and variances, and the normal distribution." On calculus: "you should know what integrals and derivatives are, and understand what a differential equation means" (Neuromatch Academy, n.d.-b). Again, here is what each is for.

**A distribution, a mean and a variance.** A random variable is a quantity whose value is uncertain, and its distribution says how the probability is spread. The mean is where the distribution balances. The variance is the average squared distance from the mean, and its square root, the standard deviation, is in the same units as the thing itself. The normal distribution matters more than the others because it is completely determined by those two numbers, and because sums of independent normal variables are normal with their variances adding. Its reciprocal variance is called **precision**, and precision is the quantity that adds when you combine independent estimates, which is the whole mechanism of Section 6.

**Conditional probability and Bayes' rule.** The probability of the stimulus given the response equals the probability of the response given the stimulus, times the probability of the stimulus, divided by the probability of the response. Read left to right that is inference; read right to left it is a generative model. The rule is three symbols long and the entire final section of this course is an unpacking of it.

**Likelihood is not a distribution over parameters.** Take the probability of the observed data given some parameters, then hold the data fixed and let the parameters vary. What you now have is the likelihood, a function of parameters. It does not integrate to one over the parameters and it is not a probability of the parameters. Confusing those two is the most common error in this material, and being able to say the difference out loud is a real checkpoint.

**A derivative is a rate, and that is why fitting is calculus.** The derivative of a function is how fast it changes. At a smooth minimum the derivative is zero, so "find the parameters that minimise the error" becomes "find where the derivative vanishes", either by solving for it or by walking downhill. An integral is the mirror image: accumulation. When Section 6 describes a decision as the accumulation of evidence, that is an integral in the literal sense.

**A differential equation is a rule for change, not a formula for the answer.** It says how fast the state moves as a function of where the state currently is. The leaky integrate-and-fire membrane equation is exactly that, and it does not hand you the voltage at a given time; it hands you a rule you have to follow forward. For a first-order system relaxing to a steady value, the **time constant** is the natural unit of that relaxation: after one time constant the system has covered about 63 percent of the distance to its asymptote, because that is one minus the reciprocal of Euler's number.

**Following the rule forward is a loop.** The simplest numerical method, Euler's, says the next state equals the current state plus the step size times the current rate of change. That is it. Simulating a neuron model is a for-loop over that line. The step size is a real choice: too large and the simulation becomes inaccurate or unstable, which is a numerical artefact and not a discovery about neurons.

:::reveal What is the difference between a probability distribution over data and a likelihood? ||| They are the same expression read in opposite directions. A distribution holds the parameters fixed and varies the data; a likelihood holds the data fixed and varies the parameters, so it is a function of parameters and does not integrate to one over them.

:::reveal What does a differential equation give you, and what does it not give you? ||| It gives a rule for how fast the state changes as a function of the current state. It does not give the value of the state at a given time; you get that only by following the rule forward, analytically or numerically.

## Vocabulary
- **Variance and precision**: the mean squared deviation from the mean, and its reciprocal, which is the quantity that adds when independent estimates are combined.
- **Bayes' rule**: the identity relating the probability of a cause given an observation to the probability of the observation given the cause, the prior, and the evidence.
- **Likelihood**: the probability of the observed data read as a function of the parameters, with the data held fixed.
- **Time constant**: the natural timescale of a first-order relaxation, after which about 63 percent of the distance to the asymptote has been covered.
- **Euler's method**: the simplest numerical integration rule, taking the next state as the current state plus the step size times the current rate of change.

## Sources
- Neuromatch Academy. (n.d.-b). *Prerequisites and preparatory materials for NMA Computational Neuroscience*. https://compneuro.neuromatch.io/prereqs/ComputationalNeuroscience.html
- Neuromatch Academy. (n.d.-a). *Neuromatch Academy: Computational neuroscience* [course content]. https://compneuro.neuromatch.io/tutorials/intro.html
- Gerstner, W., Kistler, W. M., Naud, R., & Paninski, L. (2014). *Neuronal dynamics: From single neurons to networks and models of cognition*. Cambridge University Press. ISBN 9781107635197`,
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Fitting a model, and what fitting means
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "least-squares-and-likelihood",
      title: "7 · Least squares, likelihood, and what best fit asserts",
      section: "Section 4 · Fitting a model, and what fitting means",
      body: `Fitting a model means choosing its parameters so that it accounts for the data according to some stated criterion. The criterion is a choice, and it is the part people forget they made.

**Least squares is the first criterion everyone meets.** Pick the parameters that minimise the sum of the squared differences between what the model predicts and what was observed. For a model that is linear in its parameters this has a closed-form answer, obtained by setting the derivative of the squared error to zero and solving. That solution requires inverting a matrix built from the predictors, which is where the singularity from Section 3 comes back: collinear predictors make the matrix non-invertible and the best fit non-unique.

**Maximum likelihood is the second, and it is more general.** Write down the probability of the observed data under the model, treat it as a function of the parameters, and choose the parameters that make it largest. In practice you maximise the logarithm of the likelihood instead, for two entirely practical reasons: a product of thousands of small probabilities underflows to zero in floating-point arithmetic, and a sum is much easier to differentiate than a product.

**The two are the same answer under one assumption.** If the model is linear and the noise on each observation is independent, normally distributed and of constant variance, then maximising the likelihood is algebraically identical to minimising the sum of squared errors. That is the important sentence in this lesson. Least squares is not a neutral default that makes no assumptions; it is a Gaussian noise model wearing a different name. Change the noise, for instance to counts of spikes, and least squares stops being the right criterion. Neuromatch's model-fitting day makes the same point structurally, running linear regression with squared error as its first tutorial and linear regression by maximum likelihood as its second (Neuromatch Academy, n.d.).

**What a best fit does and does not assert.** It asserts: within the family of models I chose, and under the noise model I assumed, these parameters are the best. It does not assert that the family was the right family, that a better model does not exist, or that the fitted parameters correspond to anything in the brain. A model can fit beautifully and be mechanistically empty, which is why Section 1's what, how and why distinction is worth carrying into every fit you see.

**A parameter without an uncertainty is half an answer.** Two estimates that differ by a factor of two might be a real difference or might be within the noise, and the fitted number alone cannot tell you which. The general-purpose tool is the **bootstrap**: resample your data with replacement many times, refit each resample, and look at the spread of the resulting estimates. It needs no formula for the sampling distribution, which is why it survives contact with the awkward estimators real data forces on you.

**When there is no closed form, you walk downhill.** Most interesting models have no algebraic solution, so you start from a guess, compute the gradient of the loss with respect to the parameters, and step against it. Whether that finds the best answer or merely a locally good one depends on the shape of the loss surface, which is exactly the question the next lesson answers for one important model family.

:::reveal Under what assumption is minimising squared error identical to maximising likelihood? ||| When the model is linear in its parameters and the noise on each observation is independent, normally distributed and of constant variance. Least squares is therefore a Gaussian noise assumption, not a neutral default.

:::reveal Why is the log-likelihood maximised rather than the likelihood itself? ||| A product of thousands of small probabilities underflows to zero in floating-point arithmetic, and a sum of logarithms is far easier to differentiate than a product.

## Vocabulary
- **Residual**: the difference between an observed value and the value the model predicts for it.
- **Least squares**: choosing parameters to minimise the summed squared residuals, equivalent to maximum likelihood under independent Gaussian noise of constant variance.
- **Maximum likelihood estimation**: choosing the parameters that make the observed data most probable under the model.
- **Log-likelihood**: the logarithm of the likelihood, used because it avoids numerical underflow and turns products into sums.
- **Bootstrap**: resampling the data with replacement, refitting each resample, and using the spread of estimates as an uncertainty.

## Sources
- Neuromatch Academy. (n.d.). *Neuromatch Academy: Computational neuroscience* [course content]. https://compneuro.neuromatch.io/tutorials/intro.html
- Dayan, P., & Abbott, L. F. (2001). *Theoretical neuroscience: Computational and mathematical modeling of neural systems*. MIT Press. ISBN 9780262041997
- Murphy, K. P. (2012). *Machine learning: A probabilistic perspective*. MIT Press. ISBN 9780262018029`,
    },
    {
      slug: "encoding-models-and-generalisation",
      title: "8 · Encoding models, overfitting, and cross-validation",
      section: "Section 4 · Fitting a model, and what fitting means",
      body: `Two directions, two different questions. An **encoding model** predicts neural activity from the stimulus, and asks what the neuron represents. A **decoding model** predicts the stimulus or the behaviour from the neural activity, and asks what an observer could recover. They are not inverses of each other, and a decoder that works well is not evidence that the brain does the decoding.

**Spike counts break the Gaussian assumption, so the model family changes.** Counts are non-negative integers, often small, and their variance grows with their mean. The standard repair is a **generalized linear model**: pass the stimulus through a linear filter, push the result through a fixed nonlinearity that keeps it positive, and treat the output as the rate of a Poisson process. The linear filter is the neuron's receptive field, and the crudest useful estimate of it is the spike-triggered average, the mean stimulus preceding a spike, which Chichilnisky (2001) set out as a simple white-noise analysis.

**The reason this family and not a more expressive one is mathematical, not conservative.** Paninski (2004) gave a condition on the nonlinearity under which the likelihood of such a cascade model has no non-global local maxima. That is the property that matters in practice: gradient ascent cannot get stuck partway, so it reaches the global answer and two people fitting the same data agree. Pillow and colleagues (2008) then fit a version with coupling filters between cells to a complete population of retinal ganglion cells, and found that the model captured correlated firing across the population rather than just each cell alone.

**Now the failure mode.** Any model with enough free parameters can fit any dataset exactly, including its noise, and a model that has fit the noise will predict the next dataset worse than a simpler one would. Training error falls monotonically as you add parameters. Error on data the model has not seen falls, then rises. The gap between those two curves is overfitting, and closing your eyes to it is the single most common way to publish something that does not replicate.

**The bias-variance trade-off names the two ways to be wrong.** Expected squared error on new data splits into three parts: bias, the error from a model class too rigid to represent the truth; variance, the error from a model class flexible enough that it swings around with whichever sample you happened to draw; and irreducible noise. Simpler models buy less variance with more bias. There is no setting where both go to zero.

**Cross-validation measures it instead of arguing about it.** Split the data, fit on one part, score on the part the fit never saw, and rotate the held-out block through the data so every point is held out exactly once. The rule that makes it honest is that the held-out data must be held out **before** you look at it, including before you choose which features to use.

**Two traps that are specific to neural data.** First, trials are not independent: firing rates drift, animals adapt, electrodes move, so a random split can put two nearly identical adjacent trials on opposite sides of the divide and leak the answer across it. Splitting by block or by session is often the honest choice. Second, with many neurons and few trials a decoder can reach impressive accuracy on incidental structure, so the number to report is performance on genuinely held-out data, not on the data the decoder was tuned on.

**When you cannot afford to hold data out**, information criteria approximate the same idea analytically by penalising complexity. Akaike's (1974) criterion takes twice the number of parameters minus twice the maximised log-likelihood, with lower being better, so adding a parameter has to buy enough likelihood to pay for itself.

:::reveal What does a generalized linear model for spike counts do differently from ordinary linear regression, and why? ||| It passes a linear filter output through a positive-valued nonlinearity and treats the result as a Poisson rate, because spike counts are non-negative integers whose variance grows with their mean, so Gaussian noise is the wrong shape.

:::reveal Why does a random train-test split sometimes leak information in neural data, and what is the usual fix? ||| Trials are not independent: rates drift, animals adapt and recordings shift, so adjacent near-identical trials can land on opposite sides of a random split. Splitting by block or by session instead keeps the held-out data genuinely unseen.

## Vocabulary
- **Encoding model**: a model predicting neural activity from the stimulus, asking what a neuron represents.
- **Decoding model**: a model predicting the stimulus or behaviour from neural activity, asking what an observer could recover.
- **Spike-triggered average**: the mean stimulus preceding a spike, the simplest estimate of a neuron's linear filter.
- **No non-global local maxima**: the property Paninski's condition on the nonlinearity guarantees, so gradient ascent on the likelihood reliably reaches the best fit.
- **Overfitting**: fitting the noise in the training data, which lowers training error while raising error on data the model has not seen.
- **Cross-validation**: rotating a held-out block through the data so every point is scored once by a model that never saw it.

## Sources
- Chichilnisky, E. J. (2001). A simple white noise analysis of neuronal light responses. *Network: Computation in Neural Systems, 12*(2), 199-213. https://doi.org/10.1080/713663221
- Paninski, L. (2004). Maximum likelihood estimation of cascade point-process neural encoding models. *Network: Computation in Neural Systems, 15*(4), 243-262. https://doi.org/10.1088/0954-898X_15_4_002
- Pillow, J. W., Shlens, J., Paninski, L., Sher, A., Litke, A. M., Chichilnisky, E. J., & Simoncelli, E. P. (2008). Spatio-temporal correlations and visual signalling in a complete neuronal population. *Nature, 454*(7207), 995-999. https://doi.org/10.1038/nature07140
- Akaike, H. (1974). A new look at the statistical model identification. *IEEE Transactions on Automatic Control, 19*(6), 716-723. https://doi.org/10.1109/TAC.1974.1100705`,
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Dimensions and dynamics
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "dimensionality-reduction",
      title: "9 · What PCA does, and what a low-dimensional picture claims",
      section: "Section 5 · Dimensions and dynamics",
      body: `Record two hundred neurons and every instant of the recording is a point in a two-hundred-dimensional space. Watch it over time and the population traces out a trajectory in that space. Nobody can look at a two-hundred-dimensional trajectory, which is the entire motivation for dimensionality reduction.

**Principal component analysis is a rotation, not a discovery.** Centre the data, compute its covariance matrix, and take the eigenvectors of that matrix. Those are the principal components: orthogonal directions ordered by how much of the variance lies along them, with the eigenvalues giving the amounts. Projecting onto the first few is simply looking at the cloud along its longest axes. No information is created by this, and some is thrown away by construction, which is the point.

**Why the field cares.** Cunningham and Yu (2014) review the methods and make the practical case: averaging over trials destroys exactly the single-trial structure that population analysis exists to see, and reduction lets you keep individual trials while still being able to plot them. Churchland and colleagues (2012) then showed what that buys, finding that motor cortical population activity during reaching contains a rotational structure visible in the population trajectory that is not apparent from single-neuron tuning. Vyas and colleagues (2020) survey what a decade of this approach settled and what it did not.

**Three caveats, all of which are routinely ignored.**

*Variance is not meaning.* Principal component analysis is unsupervised: it finds the directions of largest variance, and nothing forces those to be the directions carrying the variable you care about. The largest component in an awake recording is often slow drift, arousal, or movement of the animal. If you want the direction that predicts a behavioural variable, ask for that directly rather than assuming it is the first component.

*It is linear.* A principal component is a fixed weighted sum of neurons. If the population's activity lies on a curved surface, no linear projection captures it, and the curvature shows up as extra components that are geometry rather than signal. Nonlinear methods exist for that reason, and Neuromatch's own dimensionality-reduction day ends on them.

*Low-dimensional is a statement about a dataset, not about cortex.* Stringer and colleagues (2019) analysed the encoding of natural images by large visual cortical populations in awake mice and found evoked activity was high dimensional, with the variance of the nth principal component scaling as one over n, a power law that survived whitening the stimuli. That is a direct corrective to the habit of concluding, from a task with three conditions, that the brain is three-dimensional. A simple task can only ever produce a low-dimensional answer.

**The honest summary.** A low-dimensional projection is a claim that most of the variance in this recording, in this task, lies in this many directions. It is not a claim that the underlying system has that many degrees of freedom, and treating the two as the same is the most common overreach in the population-dynamics literature.

:::reveal In one sentence, what are the principal components of a dataset? ||| They are the eigenvectors of its covariance matrix, orthogonal directions ordered by how much variance lies along them, with the eigenvalues giving those variances.

:::reveal Why is the largest principal component of an awake recording often not the variable you care about? ||| Because the method is unsupervised and finds variance, not meaning, and the biggest source of variance is frequently slow drift, arousal or the animal's movement rather than the task variable.

## Vocabulary
- **Population trajectory**: the path traced over time by the whole population's state in a space with one axis per neuron.
- **Principal component**: an eigenvector of the data's covariance matrix, a direction of maximal remaining variance.
- **Variance explained**: the eigenvalue attached to a component, expressed as a share of the total variance in the data.
- **Unsupervised**: fitted without reference to any target variable, which is why the components track variance rather than meaning.
- **Power-law spectrum**: an eigenvalue spectrum whose values fall off as a power of their rank, as reported for visual cortical population responses.

## Sources
- Cunningham, J. P., & Yu, B. M. (2014). Dimensionality reduction for large-scale neural recordings. *Nature Neuroscience, 17*(11), 1500-1509. https://doi.org/10.1038/nn.3776
- Churchland, M. M., Cunningham, J. P., Kaufman, M. T., Foster, J. D., Nuyujukian, P., Ryu, S. I., & Shenoy, K. V. (2012). Neural population dynamics during reaching. *Nature, 487*(7405), 51-56. https://doi.org/10.1038/nature11129
- Stringer, C., Pachitariu, M., Steinmetz, N., Carandini, M., & Harris, K. D. (2019). High-dimensional geometry of population responses in visual cortex. *Nature, 571*(7765), 361-365. https://doi.org/10.1038/s41586-019-1346-5
- Vyas, S., Golub, M. D., Sussillo, D., & Shenoy, K. V. (2020). Computation through neural population dynamics. *Annual Review of Neuroscience, 43*(1), 249-275. https://doi.org/10.1146/annurev-neuro-092619-094115`,
    },
    {
      slug: "dynamics-and-attractors",
      title: "10 · Fixed points, stability, and attractors",
      section: "Section 5 · Dimensions and dynamics",
      body: `A dynamical system is a state plus a rule for how the state changes. The rule assigns a direction and speed to every point in the state space, which is a vector field, and a trajectory is what you get by following it. That geometric picture is worth more than any particular equation.

**Fixed points and stability.** A fixed point is a state where the rate of change is zero, so the system left exactly there stays there. What matters is what happens nearby. Linearise the dynamics around the fixed point, take the eigenvalues of the resulting matrix, and read them the way Section 3 said: all real parts negative means small perturbations decay and the fixed point is stable; any positive real part means some perturbation grows and it is not.

**Two dimensions can be drawn, which is why reduced models exist.** In a two-variable system you can plot the state space as a plane, draw the curves on which each variable stops changing, and read off the fixed points where they cross. That is why the FitzHugh-Nagumo reduction of Hodgkin-Huxley from Section 2 is taught: not because two variables are more realistic, but because two variables can be seen.

**Bifurcations are qualitative changes.** Turn a parameter slowly, such as the injected current into a neuron model, and for a while the picture just shifts. Then at some value the number or the stability of the fixed points changes, and the behaviour changes in kind rather than in degree: a resting cell begins to fire repetitively. Which bifurcation a model undergoes determines observable things, including whether firing begins at an arbitrarily low rate or jumps straight to a finite one (Izhikevich, 2007; Strogatz, 2015).

**Populations get the same treatment.** Wilson and Cowan (1972) wrote coupled equations for the activity of an excitatory and an inhibitory population and analysed the resulting two-dimensional system, which remains the template for rate models of cortical circuits. Amari (1977) extended the idea to continuous neural fields with lateral inhibition, where a localised bump of activity can be stable.

**An attractor is a set of states the system falls into from a neighbourhood.** A point attractor is a single stable state, and Hopfield's (1982) network is the classic example: a recurrent network with an energy function, in which stored patterns are minima, so a partial or noisy cue rolls downhill into the complete stored pattern. That is memory as content-addressability rather than as an address lookup.

**A continuous attractor is a whole connected set of stable states**, and it is the standard model for holding a graded quantity. Seung (1996) analysed how the oculomotor system holds the eyes still at any of a continuum of positions, which requires a line of stable states rather than one. Zhang (1996) proposed a ring of stable states for head direction, and Burak and Fiete (2009) analysed grid-cell firing as path integration on a continuous attractor. Chaudhuri and Fiete (2016) review the family.

**What an attractor claim commits you to, and why that is a virtue.** It is a falsifiable claim. If a network holds a value on a line of stable states, then perturbations along the line should persist while perturbations across it should decay, and accumulated noise should show up as slow drift along the line rather than as random error. Those are measurable predictions, which is what separates an attractor model from a metaphor.

**Settling is not automatic.** Sompolinsky, Crisanti and Sommers (1988) showed that randomly connected networks can be chaotic rather than convergent above a coupling strength, and Brunel (2000) mapped the regimes of sparsely connected networks of excitatory and inhibitory spiking neurons, including an asynchronous irregular state that connects directly back to the irregular cortical firing of Section 2.

:::reveal How do you decide whether a fixed point is stable? ||| Linearise the dynamics around it and take the eigenvalues of the resulting matrix. If every eigenvalue has a negative real part, small perturbations decay and the point is stable; any positive real part makes it unstable.

:::reveal What measurable predictions does modelling a system as a continuous attractor commit you to? ||| Perturbations along the attractor should persist while perturbations across it decay, and accumulated noise should appear as slow drift along the attractor rather than as unstructured error.

## Vocabulary
- **Fixed point**: a state at which the rate of change is zero, so the system remains there once exactly there.
- **Bifurcation**: a qualitative change in the number or stability of fixed points as a parameter is varied, such as the onset of repetitive firing.
- **Point attractor**: a single stable state that nearby trajectories fall into, the shape of memory in a Hopfield network.
- **Continuous attractor**: a connected set of stable states, used to hold a graded quantity such as eye position or head direction.
- **Asynchronous irregular state**: a network regime in which neurons fire irregularly and without population-wide synchrony.

## Sources
- Wilson, H. R., & Cowan, J. D. (1972). Excitatory and inhibitory interactions in localized populations of model neurons. *Biophysical Journal, 12*(1), 1-24. https://doi.org/10.1016/S0006-3495(72)86068-5
- Amari, S. (1977). Dynamics of pattern formation in lateral-inhibition type neural fields. *Biological Cybernetics, 27*(2), 77-87. https://doi.org/10.1007/BF00337259
- Hopfield, J. J. (1982). Neural networks and physical systems with emergent collective computational abilities. *Proceedings of the National Academy of Sciences, 79*(8), 2554-2558. https://doi.org/10.1073/pnas.79.8.2554
- Seung, H. S. (1996). How the brain keeps the eyes still. *Proceedings of the National Academy of Sciences, 93*(23), 13339-13344. https://doi.org/10.1073/pnas.93.23.13339
- Burak, Y., & Fiete, I. R. (2009). Accurate path integration in continuous attractor network models of grid cells. *PLoS Computational Biology, 5*(2), e1000291. https://doi.org/10.1371/journal.pcbi.1000291
- Zhang, K. (1996). Representation of spatial orientation by the intrinsic dynamics of the head-direction cell ensemble: A theory. *The Journal of Neuroscience, 16*(6), 2112-2126. https://doi.org/10.1523/JNEUROSCI.16-06-02112.1996
- Sompolinsky, H., Crisanti, A., & Sommers, H. J. (1988). Chaos in random neural networks. *Physical Review Letters, 61*(3), 259-262. https://doi.org/10.1103/PhysRevLett.61.259
- Brunel, N. (2000). Dynamics of sparsely connected networks of excitatory and inhibitory spiking neurons. *Journal of Computational Neuroscience, 8*(3), 183-208. https://doi.org/10.1023/A:1008925309027
- Chaudhuri, R., & Fiete, I. (2016). Computational principles of memory. *Nature Neuroscience, 19*(3), 394-403. https://doi.org/10.1038/nn.4237
- Izhikevich, E. M. (2007). *Dynamical systems in neuroscience: The geometry of excitability and bursting*. MIT Press. ISBN 9780262090438
- Strogatz, S. H. (2015). *Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering* (2nd ed.). Westview Press. ISBN 9780813349107`,
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Decisions and inference
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "drift-diffusion-and-decisions",
      title: "11 · Accumulating evidence: the drift-diffusion model",
      section: "Section 6 · Decisions and inference",
      body: `Put an observer in front of a noisy display and ask a two-way question. Is the cloud of dots drifting left or right? Every instant gives a little evidence, and no instant settles it. The standard account of what happens next is the simplest one that could work: add the evidence up over time and commit when the running total reaches a threshold.

**That is the drift-diffusion model.** The accumulated evidence moves with a constant average drift plus noise, and the decision is made when it hits one of two bounds. Ratcliff (1978) introduced the diffusion model in the context of memory retrieval; Ratcliff and McKoon (2008) review its use for two-choice tasks generally. It has four parameters that each mean something separable: the **drift rate**, which is how good the evidence is; the **boundary separation**, which is how much evidence you demand before committing; the **starting point**, which is any prior bias toward one answer; and the **non-decision time**, which absorbs sensory encoding and motor execution.

**Why it is a strong model rather than a curve fit.** It has to predict, from those few numbers at once, the accuracy, the full shape of the reaction-time distribution for correct answers, and the full shape of the distribution for errors. Those are strongly constrained together, and a model that gets accuracy right while producing the wrong distribution shape is caught immediately.

**The speed-accuracy trade-off stops being a separate phenomenon.** It is boundary separation. Widen the bounds and you wait for more evidence, so you are slower and more accurate; narrow them and the reverse. One parameter, not a second mechanism.

**There is an optimality argument underneath.** Wald (1945) introduced the sequential probability ratio test, and Wald and Wolfowitz (1948) proved that it reaches a specified pair of error rates with the fewest observations on average. The drift-diffusion model is its continuous-time counterpart. Stone (1960) brought this line of reasoning into choice reaction time, and Bogacz and colleagues (2006) worked out the formal relationships among the competing two-alternative models. Neuromatch's own hidden-dynamics day opens on the sequential probability ratio test for this reason (Neuromatch Academy, n.d.).

**And there is neural evidence, of an unusually direct kind.** Newsome, Britten and Movshon (1989) recorded from motion-sensitive cortex while monkeys performed the dot task and found single neurons whose sensitivity was comparable to the animal's own. Britten and colleagues (1992) made that neuronal-versus-psychophysical comparison systematic. Roitman and Shadlen (2002) then recorded in parietal cortex during a version where the animal chose when to respond, and found firing rates that ramped at a rate scaling with motion strength toward a common level just before the response, which is what an accumulator hitting a bound looks like. Gold and Shadlen (2007) review the whole line. Wang (2002) supplied a recurrent circuit model showing how slow reverberation can implement both the accumulation and the categorical commitment.

**The caveat that should travel with all of this.** Fitting reaction-time distributions well does not prove the mechanism. Several accumulation schemes produce similar distributions, the parameters are estimated per subject rather than measured, and a ramping average firing rate can also arise from averaging over trials in which the activity stepped at different times. The model is excellent and it is still a model.

:::reveal Name the four parameters of the drift-diffusion model and what each one means. ||| Drift rate, the quality of the evidence; boundary separation, how much evidence is demanded before committing; starting point, any prior bias toward one answer; and non-decision time, covering sensory encoding and motor execution.

:::reveal In this model, what is the speed-accuracy trade-off? ||| It is boundary separation. Wider bounds mean waiting for more evidence, so slower and more accurate; narrower bounds mean the reverse. It is one parameter, not a second mechanism.

## Vocabulary
- **Drift rate**: the average rate at which evidence accumulates, standing for the quality of the evidence.
- **Boundary separation**: the distance between the two decision thresholds, which sets the speed-accuracy trade-off.
- **Non-decision time**: the part of the reaction time attributable to sensory encoding and motor execution rather than to deciding.
- **Sequential probability ratio test**: the procedure that reaches a specified error rate with the fewest observations on average, the discrete ancestor of the drift-diffusion model.
- **Neurometric comparison**: setting a single neuron's discrimination sensitivity against the behavioural sensitivity of the animal recorded from.

## Sources
- Ratcliff, R. (1978). A theory of memory retrieval. *Psychological Review, 85*(2), 59-108. https://doi.org/10.1037/0033-295X.85.2.59
- Ratcliff, R., & McKoon, G. (2008). The diffusion decision model: Theory and data for two-choice decision tasks. *Neural Computation, 20*(4), 873-922. https://doi.org/10.1162/neco.2008.12-06-420
- Wald, A. (1945). Sequential tests of statistical hypotheses. *The Annals of Mathematical Statistics, 16*(2), 117-186. https://doi.org/10.1214/aoms/1177731118
- Wald, A., & Wolfowitz, J. (1948). Optimum character of the sequential probability ratio test. *The Annals of Mathematical Statistics, 19*(3), 326-339. https://doi.org/10.1214/aoms/1177730197
- Roitman, J. D., & Shadlen, M. N. (2002). Response of neurons in the lateral intraparietal area during a combined visual discrimination reaction time task. *The Journal of Neuroscience, 22*(21), 9475-9489. https://doi.org/10.1523/JNEUROSCI.22-21-09475.2002
- Gold, J. I., & Shadlen, M. N. (2007). The neural basis of decision making. *Annual Review of Neuroscience, 30*(1), 535-574. https://doi.org/10.1146/annurev.neuro.29.051605.113038
- Stone, M. (1960). Models for choice-reaction time. *Psychometrika, 25*(3), 251-260. https://doi.org/10.1007/BF02289729
- Bogacz, R., Brown, E., Moehlis, J., Holmes, P., & Cohen, J. D. (2006). The physics of optimal decision making: A formal analysis of models of performance in two-alternative forced-choice tasks. *Psychological Review, 113*(4), 700-765. https://doi.org/10.1037/0033-295X.113.4.700
- Newsome, W. T., Britten, K. H., & Movshon, J. A. (1989). Neuronal correlates of a perceptual decision. *Nature, 341*(6237), 52-54. https://doi.org/10.1038/341052a0
- Britten, K. H., Shadlen, M. N., Newsome, W. T., & Movshon, J. A. (1992). The analysis of visual motion: A comparison of neuronal and psychophysical performance. *The Journal of Neuroscience, 12*(12), 4745-4765. https://doi.org/10.1523/JNEUROSCI.12-12-04745.1992
- Neuromatch Academy. (n.d.). *Neuromatch Academy: Computational neuroscience* [course content]. https://compneuro.neuromatch.io/tutorials/intro.html
- Wang, X.-J. (2002). Probabilistic decision making by slow reverberation in cortical circuits. *Neuron, 36*(5), 955-968. https://doi.org/10.1016/S0896-6273(02)01092-9`,
    },
    {
      slug: "bayes-in-perception",
      title: "12 · Bayes in perception: prior, likelihood, posterior",
      section: "Section 6 · Decisions and inference",
      body: `Perception is inference under uncertainty. The world state is not observed; only noisy, ambiguous measurements of it are, and many world states could have produced the measurement you got. Bayes' rule from Section 3 is the formal statement of what to do about that: the probability of the state given the measurement is proportional to the probability of the measurement given the state, times the prior probability of the state.

**In the Gaussian case the arithmetic is memorable.** If the prior and the likelihood are both normal, the posterior is normal, its precision is the sum of the two precisions, and its mean is the average of the two means weighted by their precisions. Two consequences follow immediately. Combining information never makes you less certain. And the less reliable source gets the smaller weight automatically, without anyone deciding on a weighting.

**That prediction has been tested directly.** Ernst and Banks (2002) had people judge the height of an object using vision, touch, or both, and measured the reliability of each channel separately. The weight given to each in the combined judgement matched the statistically optimal weighting by reliability, and the weights shifted in the predicted direction when the visual signal was degraded. This is one of the cleanest results in the area because the prediction was quantitative and made in advance.

**Priors are learned, not just assumed.** Körding and Wolpert (2004) had people reach under an imposed and unseen visual displacement drawn from a distribution they were never told about, with feedback of varying reliability. Behaviour matched a Bayesian observer who had learned the distribution of displacements and weighted it against the reliability of the feedback.

**Priors also explain errors, which is the more surprising use.** Weiss, Simoncelli and Adelson (2002) showed that a family of classic motion illusions falls out of an optimal estimator carrying a prior that favours slow speeds. Lower contrast makes the likelihood broader, so the slow-speed prior pulls the estimate further, and low-contrast patterns look slower. The illusion is not a bug in the system. It is what an optimal estimator with that prior is supposed to do.

**Now the caution that keeps this honest.** Knill and Pouget (2004) set out the Bayesian brain hypothesis and are careful about its status. Showing that behaviour is close to optimal is a claim at the computational level, in Marr's sense from Section 1: it says what problem is being solved, and it does not by itself say what is represented or how any circuit implements it. Many mechanisms can approximate the same optimum, including some that never represent a probability at all.

**And a methodological caution.** A model with a freely fitted prior and a freely fitted likelihood can accommodate a great deal. The strong versions of these results are the ones where the prior was measured independently, or imposed by the experimenter, or predicted in advance, as in the three studies above. When you meet a claim that some behaviour is Bayes-optimal, the first question to ask is where the prior came from.

:::reveal When a prior and a likelihood are both Gaussian, what are the posterior's precision and mean? ||| Its precision is the sum of the two precisions, and its mean is the precision-weighted average of the two means, so the less reliable source automatically gets the smaller weight.

:::reveal Why does a prior favouring slow speeds make low-contrast patterns appear to move more slowly? ||| Low contrast makes the likelihood broader, so the measurement constrains the estimate less and the slow-speed prior pulls the posterior further toward zero.

:::reveal What is the first question to ask about a claim that some behaviour is Bayes-optimal? ||| Where the prior came from. A freely fitted prior and a freely fitted likelihood can accommodate almost any data, so the strong results are those where the prior was imposed, measured independently, or predicted in advance.

## Vocabulary
- **Prior**: the probability assigned to a world state before the current measurement is taken into account.
- **Likelihood function**: the probability of the measurement you got, read as a function of the possible world states.
- **Posterior**: the probability of the world state after combining prior and likelihood, which is what an ideal observer bases its estimate on.
- **Cue combination**: forming a single estimate from two or more sensory channels, weighted by their reliabilities.
- **Computational level**: Marr's level of description that states what problem is being solved and why, without specifying representation or implementation.

## Sources
- Ernst, M. O., & Banks, M. S. (2002). Humans integrate visual and haptic information in a statistically optimal fashion. *Nature, 415*(6870), 429-433. https://doi.org/10.1038/415429a
- Körding, K. P., & Wolpert, D. M. (2004). Bayesian integration in sensorimotor learning. *Nature, 427*(6971), 244-247. https://doi.org/10.1038/nature02169
- Weiss, Y., Simoncelli, E. P., & Adelson, E. H. (2002). Motion illusions as optimal percepts. *Nature Neuroscience, 5*(6), 598-604. https://doi.org/10.1038/nn0602-858
- Knill, D. C., & Pouget, A. (2004). The Bayesian brain: The role of uncertainty in neural coding and computation. *Trends in Neurosciences, 27*(12), 712-719. https://doi.org/10.1016/j.tins.2004.10.007`,
    },
    {
      slug: "where-this-course-stops",
      title: "13 · Where this course stops, and what comes next",
      section: "Section 6 · Decisions and inference",
      body: `This is a foundations course and it ends well before Neuromatch's own material does. Here is the honest map of what it left out, so you know what you are walking into rather than discovering it in week two.

**Not covered here, and covered there.** Signal processing: sampling, Fourier analysis, filtering and time-frequency methods, which is how any recorded signal gets prepared before anything else happens to it. Linear systems and Markov processes, and the stochastic versions of both. Hidden dynamics: hidden Markov models and the Kalman filter, which are Section 6's inference problem extended to a world state that changes while you watch. Reinforcement learning, including temporal-difference learning and the result that made it famous in neuroscience, Schultz, Dayan and Montague's (1997) finding that midbrain dopamine responses behave like a reward prediction error. Optimal control, where the question shifts from estimating the world to acting on it (Todorov, 2004). Deep networks used as encoding models, and the argument for treating them as a framework for neuroscience rather than a tool (Richards et al., 2019). And an entire module on causality, on when a correlation licenses a causal claim and what an intervention or an instrumental variable buys you (Neuromatch Academy, n.d.).

**What to do next, concretely.** Their coursebook is open and free. Work the prerequisite refresher days first, in their order: two Python workshops, then linear algebra, then calculus, then statistics. Then start at the modelling day. Everything in this course was written to make those days readable rather than to replace them.

**One closing warning.** Reading about a model is not the same as fitting one. The gap between recognising a term and being able to produce the thing is wide, and it closes only by writing code that fails and then fixing it. Treat this course as having done its job at the moment it becomes unnecessary.

:::reveal Name three topics Neuromatch's course covers that this one does not. ||| Any three of: signal processing and Fourier analysis, hidden Markov models and the Kalman filter, reinforcement learning, optimal control, deep networks as encoding models, and the causality module.

:::reveal What did Schultz, Dayan and Montague report about midbrain dopamine? ||| That dopamine neuron responses behave like a reward prediction error, the quantity temporal-difference learning uses, rather than simply signalling reward itself.

## Vocabulary
- **Reward prediction error**: the difference between reward received and reward expected, the learning signal in temporal-difference learning.
- **Kalman filter**: the optimal recursive estimator for a linear system with Gaussian noise whose state changes over time.
- **Optimal control**: choosing actions to minimise an expected cost, the acting counterpart to estimating.
- **Instrumental variable**: a variable that influences a cause but not the outcome directly, used to identify a causal effect from observational data.

## Sources
- Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. *Science, 275*(5306), 1593-1599. https://doi.org/10.1126/science.275.5306.1593
- Todorov, E. (2004). Optimality principles in sensorimotor control. *Nature Neuroscience, 7*(9), 907-915. https://doi.org/10.1038/nn1309
- Richards, B. A., Lillicrap, T. P., Beaudoin, P., Bengio, Y., Bogacz, R., Christensen, A., Clopath, C., Costa, R. P., de Berker, A., Ganguli, S., Gillon, C. J., Hafner, D., Kepecs, A., Kriegeskorte, N., Latham, P., Lindsay, G. W., Miller, K. D., Naud, R., Pack, C. C., … Kording, K. P. (2019). A deep learning framework for neuroscience. *Nature Neuroscience, 22*(11), 1761-1770. https://doi.org/10.1038/s41593-019-0520-2
- Neuromatch Academy. (n.d.). *Neuromatch Academy: Computational neuroscience* [course content]. https://compneuro.neuromatch.io/tutorials/intro.html`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · What a model is, and what it leaves out",
      section: "Section 1 · What a model is, and what it leaves out",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How long does Neuromatch's own course page say its Computational Neuroscience course runs?",
            options: [
              "Three weeks, every July",
              "Five weeks each summer, opened by a two-week asynchronous preparation block",
              "Ten days in July, followed by a self-paced project term running into September",
              "A full academic semester, delivered asynchronously with weekly synchronous check-ins",
            ],
            correctIndex: 0,
            explanation:
              "Their course page describes it as a three-week immersive course held every July, which is why a reading course cannot substitute for it.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What daily commitment does Neuromatch state for that course?",
            options: [
              "Three hours a day on weekday evenings, with optional weekend project sessions",
              "Eight hours a day, five days a week",
              "Twenty hours a week, spread however the student prefers across all seven days",
              "Four hours a day for six days a week, with Sundays reserved for pod meetings",
            ],
            correctIndex: 1,
            explanation:
              "The course page states a full-time effort of eight hours per day, five days per week, which is the constraint that makes it a job rather than a hobby.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "How does Neuromatch's open-education page size the published Computational Neuroscience coursebook?",
            options: [
              "Roughly forty hours of reading, excluding the optional tutorial notebooks",
              "Five partial days of content, the same figure they give for Open Science 101",
              "Fifteen full days of instruction",
              "Ten full days of instruction, the same figure they give for NeuroAI",
            ],
            correctIndex: 2,
            explanation:
              "Their open-education page gives fifteen full days of instruction plus bonus materials for this course. The ten-day figure is the one they publish for NeuroAI, and the five-day figure is the one they publish for Open Science 101.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "In what environment does Neuromatch say the course code is taught?",
            options: [
              "A managed JupyterHub server that Neuromatch hosts separately for each pod",
              "Local Anaconda installations that students set up during the prerequisite week",
              "A browser-based MATLAB environment provided under an academic site licence",
              "Google Colab or Kaggle",
            ],
            correctIndex: 3,
            explanation:
              "Their course page says code is taught through Google Colab or Kaggle using Python, so nothing has to be installed locally.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What is a pod in Neuromatch's course format?",
            options: [
              "About fifteen students and one teaching assistant",
              "A cohort of roughly a hundred students sharing one lecturer and a discussion forum",
              "A pair of students assigned to co-author a single project under a mentor's supervision",
              "A regional chapter that meets in person at a partner university for the three weeks",
            ],
            correctIndex: 0,
            explanation:
              "Their course page describes working in a pod of about fifteen students with a dedicated teaching assistant, and a separate project teaching assistant for the group project.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which of these does this course explicitly not provide?",
            options: [
              "An explanation of what a generalized linear model does to spike counts",
              "A notebook you run",
              "A statement of which parts a leaky integrate-and-fire neuron throws away",
              "A description of what the eigenvalues of a dynamics matrix tell you",
            ],
            correctIndex: 1,
            explanation:
              "Lesson 1 lists what is absent by design: no notebook, no Colab session, no dataset, no project, no pod and no certificate. The other three are things this course does cover.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Under which licence does Neuromatch publish its course content?",
            options: [
              "CC BY-NC-SA 4.0, which bars commercial reuse and requires the same licence downstream",
              "The MIT licence, applied uniformly to the prose and the software elements alike",
              "CC BY 4.0",
              "A bespoke academic-use licence requiring written permission for any adaptation",
            ],
            correctIndex: 2,
            explanation:
              "Their coursebook footer states Creative Commons Attribution 4.0 International for the contents, with software elements additionally under the BSD three-clause licence. There is no NonCommercial and no ShareAlike clause.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Neuromatch's attribution guidance asks a reuser who modifies the material to do one extra thing. What?",
            options: [
              "Submit the modified version back to their content repository for review",
              "Obtain written approval from the course lead before publishing the adaptation",
              "Remove all Neuromatch branding and rename the derived course entirely",
              "Indicate what you changed",
            ],
            correctIndex: 3,
            explanation:
              "Their guidance asks for attribution, a link to the source materials and a link to the licence, and adds that if you make modifications you should indicate what you changed.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does Neuromatch's guidance say about the status of external reuses of their material?",
            options: [
              "They are not reviewed or endorsed",
              "They are reviewed annually by a curriculum committee before being listed publicly",
              "They become officially endorsed once an attribution notice has been filed with Neuromatch",
              "They are permitted only for non-profit educational institutions and registered charities",
            ],
            correctIndex: 0,
            explanation:
              "Their wording is that while they encourage reuse, external uses are not officially reviewed or endorsed by Neuromatch. That is why lesson 1 states this course is independent.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which clause is absent from the licence covering Neuromatch's course content?",
            options: [
              "Attribution, which is why no citation is needed when the material is reused",
              "NonCommercial",
              "The requirement to link to the licence when redistributing an adaptation",
              "The requirement to state that modifications have been made to the original",
            ],
            correctIndex: 1,
            explanation:
              "CC BY 4.0 has no NonCommercial and no ShareAlike clause. Attribution, the licence link and the statement of modifications are all still required.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What, specifically, did this course adapt from Neuromatch?",
            options: [
              "Several tutorial notebooks, rewritten as prose but keeping their worked examples",
              "Its quiz questions, rewritten from the self-check cells inside the coursebook",
              "The order and grouping of topics",
              "The figures from the model-fitting and dimensionality-reduction days",
            ],
            correctIndex: 2,
            explanation:
              "Only the sequence of topics was adapted, so that finishing here leaves you able to open their coursebook and know where you are. No text, code, figure, exercise or question was copied.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which Neuromatch module is deliberately absent from this course?",
            options: [
              "Causality",
              "Model fitting, on the grounds that the linear algebra section already covers it",
              "Dimensionality reduction, which is left to the deep learning companion course instead",
              "Biological neuron models, which are treated only in the Neuromatch prerequisites",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 1 names the causality module, the projects and the pods as narrowed away. Model fitting, dimensionality reduction and neuron models all have sections here.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which source repository does this course link to in order to satisfy the licence?",
            options: [
              "A mirror of the coursebook hosted on the Learn.WitUS content server",
              "The Neuromatch student portal, which requires a registered account to browse",
              "The Creative Commons directory of openly licensed neuroscience curricula",
              "The NeuromatchAcademy course-content repository",
            ],
            correctIndex: 3,
            explanation:
              "The licence requires a link to the source materials, so lesson 1 links both the coursebook and the course-content repository on GitHub.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Why does lesson 1 say a companion course that pretends to be the real thing wastes your time twice?",
            options: [
              "You lose the hours, then hit the gap",
              "Because you end up paying for two courses when one properly scoped course would do",
              "Because the reading duplicates material that the prerequisite refresher days already cover",
              "Because the certificate such a course issues is not recognised by the original provider",
            ],
            correctIndex: 0,
            explanation:
              "The two costs are the time spent taking it and the later discovery that the preparation was not what it claimed.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Lesson 1 says that when a tutorial tells you to project onto the first two principal components, you should already know what?",
            options: [
              "That two components are always enough to summarise a population recording",
              "That the projection recovers whichever stimulus variable the experimenter manipulated",
              "That they are eigenvectors of a covariance matrix",
              "That the components are chosen to maximise decoding accuracy on held-out trials",
            ],
            correctIndex: 2,
            explanation:
              "That, and the separate point that variance is not the same thing as meaning. Section 5 develops both.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which metaphor does lesson 1 use for the relation between this course and Neuromatch's notebooks?",
            options: [
              "A rehearsal and the performance that follows it in front of an audience",
              "The map and the territory",
              "A translation and the original text it was rendered from",
              "A scaffold that is taken down once the building can stand on its own",
            ],
            correctIndex: 1,
            explanation:
              "This course is the map, and their notebooks are the territory. The point is that reading a map is not walking the ground.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which of these is NOT one of the things Neuromatch's guidance asks a reuser to do?",
            options: [
              "Include an attribution to Neuromatch in the derived material",
              "Provide a link to the source materials being reused",
              "Provide a link to the CC BY 4.0 licence itself",
              "Pay a licensing fee",
            ],
            correctIndex: 3,
            explanation:
              "CC BY 4.0 carries no fee. The three obligations are attribution, a link to the sources and a link to the licence, plus a statement of changes if you modified anything.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "According to lesson 1, what does every factual claim in this course carry?",
            options: [
              "A primary source of its own",
              "A cross-reference to the corresponding tutorial notebook in Neuromatch's coursebook",
              "A confidence rating assigned by the author on a published five-point scale",
              "An endorsement from a researcher working in the relevant subfield of neuroscience",
            ],
            correctIndex: 0,
            explanation:
              "Citing back to Neuromatch would inherit their framing rather than check it, so each claim here is cited to the paper, book or page that established it.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "On what basis does Neuromatch classify models as what, how or why models?",
            options: [
              "The mathematical toolkit each one is built and fitted with",
              "The question asked",
              "The scale of the system modelled, from ion channel to circuit to behaviour",
              "Whether the model is fitted to data or derived from theoretical first principles",
            ],
            correctIndex: 1,
            explanation:
              "Their own wording is that models are classified not based on the toolkit used but on the questions asked, which is why the same regression can be any of the three.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "A tuning curve relating a cell's firing rate to bar orientation is which kind of model?",
            options: [
              "A how model, because it explains the circuit producing orientation selectivity",
              "A why model, because it derives selectivity from a coding efficiency principle",
              "An implementational model in Marr's sense, because it concerns cortical machinery",
              "A what model",
            ],
            correctIndex: 3,
            explanation:
              "It describes what the cell does across orientations and commits to no mechanism, which is exactly why it stays true whichever circuit turns out to produce it.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Which is the lesson's canonical example of a how model?",
            options: [
              "The Hodgkin-Huxley equations",
              "The orientation tuning curves Hubel and Wiesel measured in cat visual cortex",
              "The sparse coding model Olshausen and Field trained on natural image patches",
              "The drift-diffusion account of reaction times in two-alternative forced choice",
            ],
            correctIndex: 0,
            explanation:
              "It is built from known physiology, with voltage-dependent sodium and potassium conductances and gating variables obeying their own differential equations.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "What did Olshausen and Field's 1996 model do, and what came out of it?",
            options: [
              "It classified images by category and produced centre-surround retinal filters",
              "It encoded natural images sparsely and produced oriented filters",
              "It reconstructed images from noisy input and produced a bank of unoriented blob detectors",
              "It predicted the next frame of a movie and produced direction-selective motion filters",
            ],
            correctIndex: 1,
            explanation:
              "The learned basis functions came out localised, oriented and bandpass, which is to say they resembled the simple-cell receptive fields that had been described experimentally.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Why is sparse coding described as a why model?",
            options: [
              "It measures what cells do across many stimuli without proposing any mechanism at all",
              "It builds the circuit from the known anatomy and physiology of visual cortex",
              "It fits its parameters to recorded spike trains and reports the best-fitting values",
              "It starts from a principle and derives what should follow",
            ],
            correctIndex: 3,
            explanation:
              "The principle is efficient, sparse representation of natural images; the derived consequence is then checked against measured receptive fields.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Which three-way division of models do Dayan and Abbott use?",
            options: [
              "Descriptive, mechanistic, interpretive",
              "Computational, algorithmic and implementational, following Marr's original scheme",
              "Biophysical, statistical and normative, in the order the field developed them",
              "Encoding, decoding and generative, following the direction of the inference",
            ],
            correctIndex: 0,
            explanation:
              "Those map onto what, how and why respectively. The computational, algorithmic and implementational triad is Marr's, and it is a related but different idea.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "What are Marr's three levels?",
            options: [
              "Descriptive, mechanistic and interpretive, the same triad under different names",
              "Molecular, cellular and systems, matching the scale of the biology described",
              "Computational, algorithmic, implementational",
              "What, how and why, which Neuromatch took over directly from his book",
            ],
            correctIndex: 2,
            explanation:
              "The computational level states the problem and why it is worth solving, the algorithmic level the representation and procedure, the implementational level the physical machinery.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "How does the lesson distinguish Marr's levels from the what, how and why split?",
            options: [
              "Marr's scheme applies only to vision, while the other applies across all of neuroscience",
              "Levels of description versus questions asked",
              "Marr's scheme concerns the scale of the system, from synapse to whole brain",
              "Marr's scheme ranks models by how much biological detail each one manages to retain",
            ],
            correctIndex: 1,
            explanation:
              "Marr's levels are three descriptions of one system; the what, how and why split is about which question a model was built to answer. The two are often conflated.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "What did Hubel and Wiesel describe in the cat's visual cortex in 1962?",
            options: [
              "Sparse population codes whose basis functions were localised and bandpass",
              "Voltage-dependent sodium and potassium conductances underlying the action potential",
              "A ring of stable states representing the animal's current head direction",
              "Orientation-selective receptive fields",
            ],
            correctIndex: 3,
            explanation:
              "Their paper on receptive fields, binocular interaction and functional architecture is the founding description that later why models had to land on.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Why does the lesson say a what model can survive being wrong about mechanism?",
            options: [
              "It makes no claim about mechanism",
              "Because its parameters are refitted whenever a new mechanism is proposed for it",
              "Because it is stated in words rather than in equations that could be falsified",
              "Because it describes only the average across a population rather than single cells",
            ],
            correctIndex: 0,
            explanation:
              "A tuning curve stays an accurate description of what a cell does whatever circuit turns out to produce that behaviour, because it never asserted a circuit.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "According to the lesson, what is a model, most usefully understood?",
            options: [
              "A simplified physical replica of the system under study, built to a known scale",
              "A claim about which details matter",
              "A set of equations chosen to fit the available data as closely as it can",
              "A prediction about an experiment that has not yet been carried out",
            ],
            correctIndex: 1,
            explanation:
              "And therefore a claim about which details can be thrown away, which is why the useful question is always what a model discarded rather than whether it is realistic.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Can one and the same regression be a what, a how, or a why model?",
            options: [
              "No, a regression is always a what model, because all it can do is describe",
              "No, a regression is always a how model, because it posits a linear mechanism",
              "Only when it is fitted by maximum likelihood rather than by least squares",
              "Yes, depending on the question asked",
            ],
            correctIndex: 3,
            explanation:
              "The taxonomy is about questions, not toolkits, which is precisely the point Neuromatch's own statement of it emphasises.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "In Dayan and Abbott's scheme, what does an interpretive model do?",
            options: [
              "It asks what the system is for",
              "It summarises large amounts of recorded data compactly and accurately",
              "It derives circuit behaviour from measured anatomy and physiology",
              "It converts a mechanistic model into a form that can be fitted to recorded data",
            ],
            correctIndex: 0,
            explanation:
              "Interpretive models use computational and information-theoretic principles to ask why a system operates as it does, which is the why question under another name.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Two models of the same neuron disagree completely. What does the lesson say you should ask first?",
            options: [
              "Which one has more free parameters and therefore more explanatory power",
              "Which one was published more recently in a higher-impact journal",
              "What question each was built to answer",
              "Which one uses a more biologically detailed description of the ion channels",
            ],
            correctIndex: 2,
            explanation:
              "Two models built for different questions can both be right, because each keeps only the details its own question needs.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Which pairing correctly matches a model to its category, as the lesson sets them out?",
            options: [
              "Hodgkin-Huxley as a how model",
              "The orientation tuning curve as a why model, since it explains what vision is for",
              "Sparse coding as a what model, since it describes the statistics of natural images",
              "Marr's implementational level as a what model, since it describes physical machinery",
            ],
            correctIndex: 0,
            explanation:
              "Hodgkin-Huxley explains the mechanism. The tuning curve is a what model and sparse coding is a why model, and Marr's levels are a separate scheme rather than categories in this one.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Why is it a strong result that sparse coding produced filters resembling simple-cell receptive fields?",
            options: [
              "Because a why model landed on an independently measured what model",
              "Because it showed that natural images can be compressed more efficiently than was thought",
              "Because it proved that visual cortex implements the specific algorithm the model used",
              "Because it fit the recorded spike trains of simple cells better than any earlier model had",
            ],
            correctIndex: 0,
            explanation:
              "The description was already in the literature from Hubel and Wiesel, and the principle-based derivation arrived at it independently. It does not establish that cortex uses that algorithm.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "A researcher claims their model is realistic because it includes more biological detail. What does the lesson say the honest question is instead?",
            options: [
              "Whether the discarded details are irrelevant to the question asked",
              "Whether the extra detail improves the fit to held-out data by a statistically reliable margin",
              "Whether every parameter in the model has been measured directly in the animal being modelled",
              "Whether the model can be simulated fast enough to run the full experiment in reasonable time",
            ],
            correctIndex: 0,
            explanation:
              "There is no single correct level of detail. What a model throws away is its central claim, so the test is whether what it threw away mattered for the question.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Which of these is the clearest example of a what model in the lesson's terms?",
            options: [
              "A conductance-based description of how a spike is generated at the membrane",
              "A description of firing rate as a function of stimulus orientation",
              "A derivation of receptive field shape from a principle of coding efficiency",
              "A recurrent network whose stable states are proposed to store learned memories",
            ],
            correctIndex: 1,
            explanation:
              "A tuning curve is a compact and accurate description of what the cell does, with no mechanism attached. The other three are a how model, a why model and a how model respectively.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Neuromatch's stated taxonomy includes an emphasis that the lesson repeats. What is it?",
            options: [
              "That the toolkit does not determine the category",
              "That why models are more scientifically valuable than what or how models are",
              "That every model should be built at the lowest biologically plausible level of detail",
              "That the categories were taken directly from Marr and mean exactly what his levels mean",
            ],
            correctIndex: 0,
            explanation:
              "Their sentence is explicit that the classification is by the question asked, not by the tools used, which is the part most often lost when the taxonomy is repeated second-hand.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "What does the lesson identify as the founding example of a description that survived every later mechanistic account?",
            options: [
              "Hubel and Wiesel's orientation-selective receptive fields",
              "Hodgkin and Huxley's four coupled equations for the squid giant axon membrane",
              "Hopfield's energy function for a recurrent network storing multiple patterns",
              "Wilson and Cowan's coupled equations for excitatory and inhibitory populations",
            ],
            correctIndex: 0,
            explanation:
              "It is a what model, so it makes no mechanistic commitment and cannot be overturned by a new mechanism. The other three are all mechanistic accounts.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "How does the lesson describe the relationship between a why model and the data it is checked against?",
            options: [
              "The principle predicts a form, which is then compared with measurement",
              "The data are used to fit the principle's free parameters before any comparison is possible",
              "The principle is inferred from the data by regression and then restated as a theory",
              "The data are only used to select among why models that all fit the measurements equally",
            ],
            correctIndex: 0,
            explanation:
              "You start from a principle such as efficiency or optimality, derive what a system obeying it ought to do, and then check. Fitting to the data first would dissolve the argument.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Which statement about the Hodgkin-Huxley model does the lesson make in its role as an example of a how model?",
            options: [
              "It reproduces the spike rather than assuming it",
              "It describes firing rate as a smooth function of injected current across the whole range",
              "It was derived from a principle of energy efficiency in axonal signalling",
              "It applies only to mammalian cortical neurons and not to invertebrate preparations",
            ],
            correctIndex: 0,
            explanation:
              "Because the gating variables and conductances are represented explicitly, the shape and threshold of the action potential come out of the model rather than being written into it.",
            sourceLessonSlug: "what-how-why-models",
          },
        ],
      },
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The neuron a model keeps",
      section: "Section 2 · The neuron a model keeps",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which two ionic conductances does the Hodgkin-Huxley model represent explicitly?",
            options: [
              "Sodium and potassium",
              "Calcium and chloride, which between them set the resting potential of the axon",
              "Sodium and calcium, which together carry the rising phase of the action potential",
              "Potassium and chloride, whose combined leak sets the membrane time constant",
            ],
            correctIndex: 0,
            explanation:
              "Each is voltage-dependent and carries its own gating variables, which is what produces three of the model's four coupled equations.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Under the Poisson benchmark, what distribution does the number of spikes in a fixed window follow?",
            options: [
              "Poisson",
              "Exponential, which is also the distribution of the gaps between successive spikes",
              "Gaussian, with a variance set independently of the mean firing rate of the cell",
              "Uniform over the range from zero to twice the expected count in that window",
            ],
            correctIndex: 0,
            explanation:
              "Exponential is the distribution of the intervals rather than of the counts, and mixing the two up is a common slip when the Fano factor and the coefficient of variation are introduced together.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Why does a neuron's membrane behave like a capacitor in parallel with a resistor?",
            options: [
              "It separates charge, and ion channels let charge leak across it",
              "Because the axon carries current along its length while the dendrites store it at the tips",
              "Because myelin insulates the axon while the nodes of Ranvier conduct between segments",
              "Because the sodium pump stores energy chemically and releases it as a current on demand",
            ],
            correctIndex: 0,
            explanation:
              "Charge separation across an insulating membrane is capacitance, and channels that pass ions are a conductance in parallel with it. Every single-neuron model in this section is built on that picture.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "What preparation did Hodgkin and Huxley work on?",
            options: [
              "The rat hippocampal slice, which allows stable intracellular recording for hours",
              "The squid giant axon",
              "The frog neuromuscular junction, where transmitter release can be measured directly",
              "The cat lateral geniculate nucleus, recorded while the animal viewed drifting gratings",
            ],
            correctIndex: 1,
            explanation:
              "Its unusual diameter made it possible to insert electrodes and clamp the voltage, which is what let them separate the sodium and potassium currents.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "How many coupled differential equations does the Hodgkin-Huxley model comprise, and what do they describe?",
            options: [
              "Two, one for the membrane potential and one for a combined recovery variable",
              "Six, one per ion species plus one for the membrane and one for temperature",
              "One, giving membrane potential directly as a function of the injected current",
              "Four, one for the membrane potential and three for gating variables",
            ],
            correctIndex: 3,
            explanation:
              "The gating variables have their own voltage-dependent kinetics, which is precisely why the model produces the shape and threshold of a spike instead of assuming them.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "With whom did Hodgkin and Huxley share the 1963 Nobel Prize in Physiology or Medicine?",
            options: [
              "John Eccles",
              "Bernard Katz, for his work on quantal transmitter release at the synapse",
              "Ragnar Granit, for his work on the primary physiology of vision in the retina",
              "Santiago Ramon y Cajal, whose neuron doctrine underpinned the whole programme",
            ],
            correctIndex: 0,
            explanation:
              "The 1963 prize was shared by Sir John Eccles, Alan Hodgkin and Andrew Huxley. Cajal's prize was in 1906, long before this work.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "In the leaky integrate-and-fire model, what happens when the membrane potential reaches threshold?",
            options: [
              "The sodium conductance opens and the model computes the spike waveform explicitly",
              "A spike is recorded and the voltage is reset",
              "The membrane time constant shortens until the input current stops driving the cell",
              "The model switches to a second set of equations describing the repolarisation phase",
            ],
            correctIndex: 1,
            explanation:
              "That rule is not physics; it is a stipulation standing in for the spike-generating machinery the model deliberately omits.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Whose 1907 work is the ancestor of the leaky integrate-and-fire model, and how did it reach English-speaking readers a century later?",
            options: [
              "Lapicque's, translated by Brunel and van Rossum",
              "Adrian's, republished with commentary in a centenary issue of the Journal of Physiology",
              "Sherrington's, summarised in the introduction to a modern textbook on neural dynamics",
              "Cajal's, reissued in a bilingual edition prepared by the Spanish Society for Neuroscience",
            ],
            correctIndex: 0,
            explanation:
              "Brunel and van Rossum published an English translation of Lapicque's paper in Biological Cybernetics in 2007, which is why the model is often called the Lapicque model.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "What does Neuromatch use the leaky integrate-and-fire model to teach in its Python workshop days?",
            options: [
              "Python itself, from scratch",
              "The numerical stability of stiff differential equation solvers under large time steps",
              "The statistics of interspike interval distributions in awake behaving animals",
              "The difference between encoding and decoding models in a population recording",
            ],
            correctIndex: 0,
            explanation:
              "Their own text says students learn to code in Python from scratch using the leaky integrate-and-fire model as a motivation, which is why it is the first model most of their students meet.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Which of these does the leaky integrate-and-fire model throw away?",
            options: [
              "The spatial extent of the cell",
              "The membrane time constant, which is replaced by a fixed refractory period instead",
              "The distinction between excitatory and inhibitory input currents arriving at the soma",
              "The dependence of the membrane potential on the total input current over time",
            ],
            correctIndex: 0,
            explanation:
              "It is a point neuron, so dendritic location, cable filtering and axonal delay cannot appear in it. The time constant and the integration of input are exactly what it does keep.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Why can a leaky integrate-and-fire model say nothing about a channelopathy?",
            options: [
              "It represents no individual ion channels",
              "Because it treats the membrane as purely capacitive with no conductance at all",
              "Because it models only populations of neurons rather than any individual cell",
              "Because its threshold is fitted to data rather than derived from membrane biophysics",
            ],
            correctIndex: 0,
            explanation:
              "The channels are collapsed into a single leak, so questions about a specific channel's kinetics or pharmacology have nothing in the model to attach to.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "What did FitzHugh, and independently Nagumo, Arimoto and Yoshizawa, contribute?",
            options: [
              "A two-variable reduction of the Hodgkin-Huxley system",
              "A stochastic version of the Hodgkin-Huxley model with individually simulated channels",
              "The first intracellular recordings of action potentials from mammalian cortical neurons",
              "A proof that the Hodgkin-Huxley equations have a unique solution for any input current",
            ],
            correctIndex: 0,
            explanation:
              "FitzHugh published the mathematical reduction and Nagumo and colleagues built an equivalent electrical circuit. The point of two variables is that the state space can be drawn.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "What does reducing a neuron model to two variables actually buy you?",
            options: [
              "A state space you can draw and reason about geometrically",
              "A closed-form solution for the membrane potential at any future time",
              "A guarantee that the reduced model fits recorded spike trains better than the full one",
              "The ability to represent dendritic filtering that the four-variable model leaves out",
            ],
            correctIndex: 0,
            explanation:
              "Two variables means a plane, so nullclines, fixed points and trajectories can be seen rather than only simulated. It buys insight, not extra realism.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "What is distinctive about Izhikevich's 2003 spiking model?",
            options: [
              "Two variables, cheap to simulate, many firing patterns",
              "It derives every parameter from measured channel kinetics in cortical pyramidal cells",
              "It abandons the differential equation entirely in favour of a lookup table of spike times",
              "It is the first model to reproduce the action potential waveform from first principles",
            ],
            correctIndex: 0,
            explanation:
              "Its selling point is the combination: a large catalogue of cortical firing patterns at a computational cost close to integrate-and-fire rather than to Hodgkin-Huxley.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "According to the lesson, what is the honest question to ask about any neuron model?",
            options: [
              "Whether what it discarded matters for your question",
              "Whether it includes enough of the underlying biophysics to be called realistic",
              "Whether it can be simulated quickly enough to run a full behavioural experiment",
              "Whether its parameters have all been measured in the species being modelled",
            ],
            correctIndex: 0,
            explanation:
              "There is no single correct level of detail. What a model throws away is its central claim, so realism is the wrong axis to judge it on.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "What is a point neuron?",
            options: [
              "A model with no spatial extent",
              "A model that emits spikes only at discrete, evenly spaced points in simulated time",
              "A model of a single neuron rather than of a population of interconnected cells",
              "A model whose parameters are set from one recorded cell rather than from an average",
            ],
            correctIndex: 0,
            explanation:
              "Having no spatial extent is what makes dendritic location, cable filtering and axonal conduction delay invisible to the model.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "What does the membrane time constant equal?",
            options: [
              "Membrane resistance times capacitance",
              "The reciprocal of the peak sodium conductance during the rising phase of a spike",
              "The interval between threshold crossing and the return of the voltage to rest",
              "The ratio of the injected current to the resulting steady-state membrane potential",
            ],
            correctIndex: 0,
            explanation:
              "It sets how fast the voltage relaxes back toward rest, which is the only timescale a leaky integrate-and-fire neuron has of its own.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "In the leaky integrate-and-fire equation, what are the two things acting on the membrane potential?",
            options: [
              "A leak pulling it toward rest, and the input current",
              "A sodium conductance driving it up and a potassium conductance driving it down",
              "A capacitive charging term and an explicit refractory conductance that follows each spike",
              "A stochastic diffusion term and a deterministic drift term set by the stimulus",
            ],
            correctIndex: 0,
            explanation:
              "The named conductances belong to Hodgkin-Huxley. In the leaky model there is only the leak and the drive, plus the threshold-and-reset rule bolted on top.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "A modeller wants to ask whether the location of a synapse on the dendritic tree changes its effect. Which model can address that?",
            options: [
              "None of the models in this lesson, because all of them are point neurons",
              "The leaky integrate-and-fire model, by shortening the membrane time constant for distal inputs",
              "The Izhikevich model, whose second variable represents dendritic filtering directly",
              "The FitzHugh-Nagumo model, whose two variables are the soma and the dendrite",
            ],
            correctIndex: 0,
            explanation:
              "Every model discussed here has no spatial extent, so the question has nothing in them to attach to. Answering it needs a multi-compartment or cable model.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Why does the lesson describe the reset rule as not being physics?",
            options: [
              "It is a stipulation standing in for omitted machinery",
              "Because it violates conservation of charge across the membrane during the spike",
              "Because the reset voltage is chosen to match the data rather than measured in a cell",
              "Because no real neuron ever returns to exactly the same voltage after a spike",
            ],
            correctIndex: 0,
            explanation:
              "Hodgkin-Huxley produces repolarisation from represented conductances. The integrate-and-fire model deletes those and asserts the outcome by decree instead.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Which pair correctly matches a model to what it represents explicitly?",
            options: [
              "Hodgkin-Huxley represents voltage-dependent gating variables",
              "Integrate-and-fire represents the sodium and potassium conductances separately from the leak",
              "FitzHugh-Nagumo represents the spatial spread of current along the axon over distance",
              "Izhikevich represents the individual stochastic opening of each membrane channel",
            ],
            correctIndex: 0,
            explanation:
              "The gating variables with their own kinetics are exactly what Hodgkin-Huxley adds and what the reduced and integrate-and-fire models remove.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Adaptation and refractoriness are on the list of things the leaky integrate-and-fire model omits. What does the lesson say about that?",
            options: [
              "They can be added by hand if you need them",
              "They are impossible to represent in any point-neuron model whatever you add to it",
              "They emerge automatically once the input current exceeds the firing threshold",
              "They are already present, because the reset itself acts as an absolute refractory period",
            ],
            correctIndex: 0,
            explanation:
              "Adding them is routine, and doing so is a modelling decision you are making explicitly rather than something the base model gives you.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Because action potentials are close to stereotyped, what carries information in a spike train?",
            options: [
              "When the spikes happen and how many there are",
              "The height and width of each individual action potential waveform recorded",
              "The resting membrane potential between successive spikes in the same train",
              "The ratio of sodium to potassium current flowing during each spike's rising phase",
            ],
            correctIndex: 0,
            explanation:
              "That is why a spike train is treated as a sequence of event times, and why the relevant mathematics is the theory of point processes.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Why does the lesson call a firing rate a construct rather than a measurement?",
            options: [
              "You observe spikes and choose a window",
              "Because rates are always estimated from model fits rather than from recorded data",
              "Because the electrode measures voltage rather than current and so cannot report a rate",
              "Because rates only exist for populations, never for individual neurons in isolation",
            ],
            correctIndex: 0,
            explanation:
              "The number you get depends entirely on the window width you picked, so the rate is something you computed rather than something you observed.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "What is a peristimulus time histogram?",
            options: [
              "A trial-averaged spike count in successive time bins",
              "A histogram of the intervals between successive spikes recorded in one long trial",
              "The distribution of spike counts across neurons at a single moment in one trial",
              "A plot of firing rate against stimulus intensity, averaged over a population of cells",
            ],
            correctIndex: 0,
            explanation:
              "It is a rate for the average trial, which is useful and which may resemble no individual trial, and that gap is one reason single-trial population methods exist.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "For a Poisson process, how does the variance of the spike count relate to its mean?",
            options: [
              "They are equal",
              "The variance is the square of the mean, so it grows much faster than the mean does",
              "The variance is half the mean, which is what makes the process regular rather than random",
              "The variance is independent of the mean and set only by the length of the counting window",
            ],
            correctIndex: 0,
            explanation:
              "That equality is what makes the Fano factor, the ratio of the two, equal to one for a Poisson process.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "What is the Fano factor?",
            options: [
              "Spike-count variance divided by spike-count mean",
              "The standard deviation of the interspike intervals divided by their arithmetic mean",
              "The ratio of evoked firing rate to spontaneous firing rate in the same neuron",
              "The proportion of trials on which a neuron fires at least one spike to a given stimulus",
            ],
            correctIndex: 0,
            explanation:
              "The standard deviation of the intervals divided by their mean is the coefficient of variation, a different quantity that also equals one for a Poisson process.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "What distribution do the intervals between spikes follow for a Poisson process?",
            options: [
              "Exponential",
              "Gaussian, with a mean equal to the reciprocal of the firing rate and small variance",
              "Uniform between zero and twice the mean interval, which is what makes it maximally random",
              "Gamma with shape parameter two, which is why cortical firing looks slightly regularised",
            ],
            correctIndex: 0,
            explanation:
              "Exponential intervals have a standard deviation equal to their mean, which is exactly why the coefficient of variation comes out at one.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "What was Softky and Koch's 1993 objection?",
            options: [
              "Cortical firing is too irregular for simple integration of many random inputs",
              "Cortical firing is too regular to be produced by any stochastic synaptic process at all",
              "Interspike interval distributions in cortex are too heavy-tailed to be fitted by a gamma model",
              "Spike counts in cortex have a Fano factor far below one, which no point process can produce",
            ],
            correctIndex: 0,
            explanation:
              "Their argument was an averaging argument: a cell summing many independent excitatory inputs should produce regular output, and cortical cells do not.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "How did Shadlen and Newsome answer that objection in 1998?",
            options: [
              "Balanced excitation and inhibition leave the cell driven by fluctuations",
              "They showed that cortical neurons receive far fewer independent inputs than had been assumed",
              "They argued that the recordings were contaminated by spikes from neighbouring cells",
              "They replaced the integrate-and-fire model with a conductance-based model of the same cell",
            ],
            correctIndex: 0,
            explanation:
              "If excitation and inhibition roughly cancel, the mean input is near threshold and the crossings are driven by the noise, which reproduces the observed irregularity.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Which sources of neural noise does the review by Faisal, Selen and Wolpert identify?",
            options: [
              "Stochastic channel gating and probabilistic vesicle release",
              "Thermal drift in the recording amplifier and movement of the electrode in the tissue",
              "Rounding error accumulated during the numerical integration of neuron models",
              "Trial-to-trial changes in the experimenter's stimulus presentation timing",
            ],
            correctIndex: 0,
            explanation:
              "The point of citing them is that the variability has identifiable physical origins in the cell, so it is not merely a modelling convenience.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Why is a Gaussian noise model the wrong shape for spike counts?",
            options: [
              "Counts are non-negative integers whose variance grows with their mean",
              "Because spike counts are bounded above by the absolute refractory period of the cell",
              "Because the Gaussian has two parameters and a spike count distribution has only one",
              "Because counts are measured on an ordinal scale with no meaningful arithmetic mean",
            ],
            correctIndex: 0,
            explanation:
              "A Gaussian is continuous, unbounded below, and has a variance unrelated to its mean, so it puts probability where counts cannot go. Section 4 builds on this.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "What is a point process?",
            options: [
              "A probabilistic description of a sequence of event times",
              "A model of a neuron that has no spatial extent and therefore no dendritic structure",
              "A method of estimating firing rate by counting spikes in a sliding window of fixed width",
              "A statistical test for whether two spike trains were generated by the same underlying rate",
            ],
            correctIndex: 0,
            explanation:
              "A model with no spatial extent is a point neuron, a different idea that happens to share a word. A point process is the mathematics for when things happen.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Why does the choice of counting window matter so much for a firing rate estimate?",
            options: [
              "The estimate depends entirely on the width you chose",
              "Because a window shorter than the refractory period cannot contain more than one spike",
              "Because windows must be aligned to stimulus onset or the estimate becomes biased upward",
              "Because the Poisson assumption only holds for windows longer than the membrane time constant",
            ],
            correctIndex: 0,
            explanation:
              "That is what makes the rate a construct. It is worth stating out loud because most models are written about rates while all data arrives as spikes.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "A cell's interspike intervals have a coefficient of variation close to one. What does that suggest?",
            options: [
              "Firing close to Poisson, so quite irregular",
              "Firing that is highly regular, close to a metronome with a fixed interval between spikes",
              "That the cell is bursting, with tight clusters of spikes separated by long silences",
              "That the recording contains spikes from at least two cells that have not been separated",
            ],
            correctIndex: 0,
            explanation:
              "A regular train has a coefficient of variation near zero, and bursting typically pushes it above one. A value near one is the Poisson benchmark.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "The Softky and Koch versus Shadlen and Newsome exchange is offered in the lesson as an example of what?",
            options: [
              "What a real argument in this field looks like",
              "A case where the original recordings turned out to be an artefact of the electrode used",
              "A dispute that was settled only by the arrival of large-scale population recordings",
              "A disagreement about statistics rather than about any physiological mechanism at all",
            ],
            correctIndex: 0,
            explanation:
              "One paper poses a quantitative objection to a mechanism, the other proposes a specific regime that answers it, and both are checkable. That is the shape worth learning from.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "In the balanced regime Shadlen and Newsome describe, what drives the neuron across threshold?",
            options: [
              "Fluctuations in the input rather than its mean",
              "A slow depolarising ramp produced by the accumulation of unbalanced excitation over time",
              "Periodic synchronised volleys arriving from a shared presynaptic population",
              "The gradual failure of inhibitory synapses over the course of a sustained stimulus",
            ],
            correctIndex: 0,
            explanation:
              "Excitation and inhibition roughly cancel, so the mean sits near threshold and it is the variance that produces the crossings, which is why the output looks irregular.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Why does the lesson introduce the noise model two sections before it is needed?",
            options: [
              "Fitting spike counts requires choosing a noise model first",
              "Because the Poisson process is the only distribution the course will use anywhere else",
              "Because the variability has to be removed by trial averaging before any model can be fitted",
              "Because the Fano factor is the standard measure of goodness of fit for an encoding model",
            ],
            correctIndex: 0,
            explanation:
              "The generalized linear model in Section 4 turns on treating counts as Poisson rather than Gaussian, and that decision is a claim about the noise made here.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "What does it mean to say the spikes in a Poisson process are independent?",
            options: [
              "One spike makes the next neither more nor less likely",
              "That each spike is generated by a different presynaptic input acting alone",
              "That the spike times are uncorrelated across trials but correlated within a single trial",
              "That the process has no absolute refractory period, so two spikes can coincide exactly",
            ],
            correctIndex: 0,
            explanation:
              "That independence is exactly what real neurons violate through refractoriness, adaptation and bursting, which is why the Poisson process is a null model rather than a description.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "A recording shows a Fano factor well above one. What does that rule out?",
            options: [
              "A pure Poisson process at a fixed rate",
              "Any contribution from balanced excitation and inhibition to the cell's input",
              "The use of a generalized linear model to fit the cell's responses to a stimulus",
              "Bursting, since bursts always reduce spike-count variance relative to the mean",
            ],
            correctIndex: 0,
            explanation:
              "A Poisson process at a fixed rate has a Fano factor of exactly one, so a higher value means something else is happening, commonly rate variation across trials or bursting.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Which statement about the relationship between spikes and rates does the lesson emphasise?",
            options: [
              "Models are written about rates while data arrives as spikes",
              "Rates and spike trains carry exactly the same information once the window is chosen well",
              "Spike trains are the model and rates are the measurement, which is why rates are primary",
              "A rate can be measured directly from a single trial without any averaging or binning",
            ],
            correctIndex: 0,
            explanation:
              "Keeping that mismatch in view prevents a class of confusion, because every conversion between the two involves a choice that someone made.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Why is the shape of an individual action potential of little interest for coding?",
            options: [
              "Action potentials are close to stereotyped",
              "Because extracellular recording cannot resolve the waveform accurately enough to use it",
              "Because the waveform varies so much between trials that it carries only noise",
              "Because the waveform depends on the electrode position rather than on the cell's state",
            ],
            correctIndex: 0,
            explanation:
              "If every spike looks much like every other, the only things left to vary are when they occur and how many there are.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "What does the lesson say a Poisson process is, in the context of cortical data?",
            options: [
              "A default null model",
              "An accurate description of cortical firing that later recordings have repeatedly confirmed",
              "A model that only applies to sensory periphery, where inputs are genuinely independent",
              "A deterministic model whose randomness comes entirely from measurement error",
            ],
            correctIndex: 0,
            explanation:
              "It is the simplest thing that respects the data type, so it is what you compare against, and departures from it are the interesting measurements.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
        ],
      },
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · The mathematics you actually need",
      section: "Section 3 · The mathematics you actually need",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does it mean for a set of vectors to form a basis for a space?",
            options: [
              "Every vector in the space is a unique combination of them",
              "Every vector in the space is orthogonal to at least one of them and parallel to none",
              "They are the eigenvectors of the covariance matrix computed from the recorded data",
              "There are more of them than the dimension of the space, so nothing is left uncovered",
            ],
            correctIndex: 0,
            explanation:
              "Uniqueness is what makes a basis useful: it gives each vector one set of coordinates. Principal component analysis hands you a particular basis chosen by variance.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What is the expectation of a random variable?",
            options: [
              "Its probability-weighted average value",
              "The value it takes most often across a large number of independent observations",
              "The midpoint between the smallest and the largest value the variable can take",
              "The value at which the probability of exceeding it is exactly one half",
            ],
            correctIndex: 0,
            explanation:
              "The most frequent value is the mode and the halfway point of the probability is the median, and for a skewed distribution all three differ.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "Which four areas of mathematics does Neuromatch name as its entry bar for the Computational Neuroscience course?",
            options: [
              "Linear algebra, probability, basic statistics, and calculus",
              "Real analysis, measure theory, stochastic processes, and functional analysis",
              "Discrete mathematics, graph theory, information theory, and numerical optimisation",
              "Differential geometry, topology, group theory, and partial differential equations",
            ],
            correctIndex: 0,
            explanation:
              "Their course page states exactly those four, with calculus specified as derivatives and ordinary differential equations. Nothing on the more advanced lists is required.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Which linear algebra topics does Neuromatch's prerequisites page list by name?",
            options: [
              "Addition and multiplication, rank, bases, determinants, inverses, eigenvalue decomposition",
              "Singular value decomposition, tensor products, Jordan normal form, and matrix exponentials",
              "Vector calculus, the divergence theorem, and the properties of orthogonal projections",
              "Convex sets, dual spaces, spectral theorems for unbounded operators, and matrix norms",
            ],
            correctIndex: 0,
            explanation:
              "That list is quoted directly from their prerequisites page, and every item on it is used somewhere in this course.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "In a data matrix with one row per neuron and one column per time bin, what is a single column?",
            options: [
              "The population state at one instant",
              "One neuron's entire firing rate time course across the whole recording session",
              "The average activity of all neurons across the whole recording, one value per neuron",
              "The covariance between every pair of neurons, evaluated at a single moment in time",
            ],
            correctIndex: 0,
            explanation:
              "It is a point in a space with one axis per neuron, and following it over time traces the population trajectory that Section 5 works with.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "A matrix of shape n by k multiplies a matrix of shape k by m. What shape results?",
            options: [
              "n by m",
              "k by k, since the inner dimensions are the ones that survive the multiplication",
              "n by k, since the shape of the left-hand matrix is always preserved by the product",
              "m by n, because matrix multiplication reverses the order of the outer dimensions",
            ],
            correctIndex: 0,
            explanation:
              "The two inner numbers must agree and then disappear; the outer two survive. Most beginner errors in this material are violations of that rule.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What is a linear decoder that reads a behavioural variable off a population, in matrix terms?",
            options: [
              "A vector of weights multiplying the population vector",
              "The inverse of the covariance matrix applied to the difference between two population means",
              "An eigenvector of the data matrix scaled by the corresponding eigenvalue",
              "A projection onto the subspace spanned by the slowest principal components of the data",
            ],
            correctIndex: 0,
            explanation:
              "It is one row of a matrix product, which is why the shape rule is the first thing to check when a decoder will not run.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What is the rank of a matrix?",
            options: [
              "The number of linearly independent directions in it",
              "The number of rows it has, which for a recording is the number of neurons involved",
              "The largest eigenvalue of the matrix, expressed as a fraction of the sum of all of them",
              "The number of nonzero entries it contains, divided by the total number of entries",
            ],
            correctIndex: 0,
            explanation:
              "It is the honest dimensionality of the signal a matrix holds, which is why noticing a low rank is the starting point for dimensionality reduction.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "A 200-neuron recording produces an activity matrix of rank 3. What follows?",
            options: [
              "A three-dimensional signal is wearing 200 coordinates",
              "Only three of the 200 neurons are active and the remaining 197 are silent throughout",
              "The recording lasted only three time bins, so no more directions could be present",
              "Three neurons are perfectly correlated with each other and the rest are independent",
            ],
            correctIndex: 0,
            explanation:
              "Rank counts independent directions, not active neurons, so all 200 cells can be firing while their activity lies in a three-dimensional subspace.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "When does a square matrix have no inverse?",
            options: [
              "When its determinant is zero",
              "When it has more rows than columns, so the system it represents is overdetermined",
              "When any of its entries is zero, since a zero entry breaks the elimination procedure",
              "When its eigenvalues are complex rather than real, so no real inverse can exist",
            ],
            correctIndex: 0,
            explanation:
              "A zero determinant means the columns are linearly dependent, and exactly then there is no inverse. Individual zero entries are irrelevant.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Why does collinearity among predictors break the closed-form solution to linear regression?",
            options: [
              "The matrix that has to be inverted becomes singular",
              "Because the residuals become correlated with each other, violating the independence assumption",
              "Because the number of parameters then exceeds the number of observations available",
              "Because collinear predictors produce negative variance estimates, which have no meaning",
            ],
            correctIndex: 0,
            explanation:
              "The normal equations require inverting a matrix built from the predictors, and dependent columns make it singular, so there is no unique best fit. Regularisation exists partly to repair this.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What is an eigenvector of a matrix?",
            options: [
              "A direction the matrix only rescales",
              "The row of the matrix with the largest sum of absolute values across its entries",
              "A vector that the matrix maps exactly onto the zero vector, defining the null space",
              "The direction along which the matrix has the fastest changing derivative",
            ],
            correctIndex: 0,
            explanation:
              "The eigenvalue is the factor it is rescaled by. The vectors mapped to zero define the null space, which is a related but different idea.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "In principal component analysis, what are the principal axes?",
            options: [
              "The eigenvectors of the covariance matrix",
              "The rows of the data matrix with the largest total variance across time bins",
              "The directions along which the data have the smallest variance, so noise is removed first",
              "The axes chosen to maximise the correlation between the data and the stimulus variable",
            ],
            correctIndex: 0,
            explanation:
              "The eigenvalues attached to them give the variance along each axis, which is why they come ordered by variance explained.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Why do principal components come out at right angles to each other?",
            options: [
              "A covariance matrix is symmetric, so its eigenvectors are orthogonal",
              "Because the algorithm rotates each new component by ninety degrees from the previous one",
              "Because the data are whitened before the decomposition, which forces orthogonality",
              "Because the number of components is always chosen to equal the number of variables",
            ],
            correctIndex: 0,
            explanation:
              "Symmetry also guarantees the eigenvalues are real, which is what lets you speak of variance along each axis at all.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "For a linear system whose rate of change is a matrix times its state, what does an eigenvalue with a negative real part mean?",
            options: [
              "That component of the state decays",
              "That component of the state grows without bound as time increases",
              "The system oscillates at a frequency set by the size of that negative number",
              "The system has no fixed point at all, so no long-run behaviour can be described",
            ],
            correctIndex: 0,
            explanation:
              "Positive real parts mean growth and imaginary parts mean rotation. Section 5 uses this reading constantly to classify fixed points.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What does an imaginary part in an eigenvalue of a dynamics matrix indicate?",
            options: [
              "Rotation",
              "An unstable fixed point that repels every nearby trajectory in every direction",
              "That the matrix is singular and therefore that the system has no unique trajectory",
              "That the system's state is complex-valued and therefore not physically realisable",
            ],
            correctIndex: 0,
            explanation:
              "The real part still decides growth or decay; the imaginary part adds rotation on top of it, which is how a spiral fixed point arises.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What practical habit does the lesson recommend for avoiding shape errors?",
            options: [
              "Write the expected shape beside every line",
              "Convert every matrix to a square matrix before performing any multiplication",
              "Always transpose the data matrix so that neurons run along the columns instead",
              "Use only square matrices in analysis code, padding with zeros where necessary",
            ],
            correctIndex: 0,
            explanation:
              "It is a cheap habit that experienced practitioners keep, they just do it faster, and it turns a class of runtime errors into something you catch while writing.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "The field is inconsistent about one convention for the data matrix. Which?",
            options: [
              "Whether neurons are rows or columns",
              "Whether the entries are firing rates or raw spike counts in each time bin",
              "Whether time is measured from stimulus onset or from the start of the recording",
              "Whether the matrix is centred before analysis or left with its means intact",
            ],
            correctIndex: 0,
            explanation:
              "Both orientations appear in the literature and in code, which is one more reason to check shapes rather than trust a remembered convention.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Two hundred simultaneously recorded neurons define a space of what dimension?",
            options: [
              "Two hundred",
              "Two, since a population is conventionally visualised in the plane of its top components",
              "The number of time bins in the recording, since each bin contributes one dimension",
              "The rank of the covariance matrix, which is always smaller than the neuron count",
            ],
            correctIndex: 0,
            explanation:
              "One axis per neuron. The rank tells you how much of that space the data actually occupy, which is a separate question from how many axes exist.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Why does the lesson say the prerequisites list on its own reads like a syllabus rather than a reason?",
            options: [
              "It names topics without saying what each is for",
              "Because it omits the probability and statistics that the course actually depends on most",
              "Because it lists topics in an order that does not match the order the course teaches them",
              "Because it is aimed at students with a physics background rather than a biology one",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's job is to attach each item to the place it earns its keep, so that rank, determinants and eigenvalues stop being vocabulary and become tools.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What does the covariance matrix of a dataset contain?",
            options: [
              "The pairwise covariances between the variables",
              "The pairwise correlations, each already normalised to lie between minus one and one",
              "The eigenvalues of the data matrix arranged along its main diagonal in decreasing order",
              "The residuals left after fitting the best linear model to each variable in turn",
            ],
            correctIndex: 0,
            explanation:
              "It is symmetric because covariance is symmetric, and that symmetry is what makes principal component analysis behave as nicely as it does.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Where does the lesson say eigenvalue decomposition earns its place a second time, besides principal component analysis?",
            options: [
              "Deciding the behaviour of a linear dynamical system",
              "Inverting the covariance matrix when computing an optimal linear decoder from data",
              "Choosing the number of latent variables to retain in a factor analysis of a recording",
              "Testing whether two populations of neurons are statistically distinguishable from each other",
            ],
            correctIndex: 0,
            explanation:
              "For a system whose rate of change is a matrix times its state, the eigenvalues of that matrix decide decay, growth and rotation, which is the whole of local stability analysis.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What is a singular matrix?",
            options: [
              "A square matrix with determinant zero and no inverse",
              "A matrix with exactly one nonzero eigenvalue, so it projects onto a single direction",
              "A matrix of rank one, which is therefore the outer product of two vectors",
              "A non-square matrix, which has no determinant and so cannot be inverted at all",
            ],
            correctIndex: 0,
            explanation:
              "Rank-one matrices are a special case rather than a definition, and non-square matrices are a separate situation with its own pseudo-inverse machinery.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Which statement about matrix multiplication as a weighted sum is correct?",
            options: [
              "Each output entry is a weighted sum of one row and one column",
              "Each output entry is the product of the corresponding entries of the two matrices",
              "Each output entry is the largest of the products formed from the matching row and column",
              "Each output entry is the average of the row entries and the column entries combined",
            ],
            correctIndex: 0,
            explanation:
              "Entry-by-entry multiplication is a different operation, and confusing the two is a common source of results that run without error and mean nothing.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "What does Neuromatch's prerequisites page say a student should be comfortable with in statistics?",
            options: [
              "Means and variances, and the normal distribution",
              "Hypothesis testing, confidence intervals, and the analysis of variance for factorial designs",
              "Bayesian model comparison, marginal likelihoods, and Markov chain Monte Carlo sampling",
              "Nonparametric rank tests, bootstrapping, and correction for multiple comparisons",
            ],
            correctIndex: 0,
            explanation:
              "The stated bar is deliberately low, and this course takes it as the floor rather than the ceiling, adding likelihood and Bayes' rule on top of it.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What is the variance of a random variable?",
            options: [
              "The average squared distance from the mean",
              "The largest distance between any two observed values of the variable in a sample",
              "The difference between the highest and the lowest value the variable can take",
              "The average absolute distance from the median, which is why it is always positive",
            ],
            correctIndex: 0,
            explanation:
              "Its square root, the standard deviation, is in the same units as the variable itself, which is why the standard deviation is usually what gets reported.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What is precision, in the sense used in this course?",
            options: [
              "The reciprocal of the variance",
              "The number of significant digits to which a measurement can be reported reliably",
              "The proportion of an estimator's predictions that fall within one standard deviation",
              "The ratio of the signal variance to the total variance in a recorded quantity",
            ],
            correctIndex: 0,
            explanation:
              "It matters because precisions add when independent estimates are combined, which is the mechanism behind cue combination in Section 6.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "Why does the normal distribution matter more than other distributions in this material?",
            options: [
              "It is fully determined by its mean and variance",
              "Because it is the only distribution for which a maximum likelihood estimate can be computed",
              "Because neural firing rates are normally distributed whenever enough trials are collected",
              "Because it is the only distribution whose samples can be generated on a computer exactly",
            ],
            correctIndex: 0,
            explanation:
              "Two numbers describe it completely, and sums of independent normal variables stay normal with their variances adding, which keeps the algebra tractable.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "When independent normal variables are added, what happens to their variances?",
            options: [
              "They add",
              "They multiply, which is why sums of many variables have very large spread",
              "They average, so the sum is no more variable than the most variable component",
              "The largest one dominates and the others make no measurable contribution at all",
            ],
            correctIndex: 0,
            explanation:
              "Standard deviations do not add, which is why the spread of a sum grows with the square root of the number of terms rather than in proportion to it.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What does Bayes' rule relate?",
            options: [
              "The probability of a state given data to the probability of data given the state",
              "The mean of a distribution to its variance, under the assumption of normality",
              "The likelihood of a model to the number of parameters it uses, penalising complexity",
              "The rate of a Poisson process to the variance of the counts it produces per window",
            ],
            correctIndex: 0,
            explanation:
              "Together with the prior and a normalising term. Read one way it is inference; read the other way it is a generative model of how the data arose.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What is a likelihood?",
            options: [
              "The probability of the observed data, read as a function of the parameters",
              "The probability of the parameters, given the data that were actually observed",
              "The probability that a model is correct, evaluated against all competing models",
              "The expected value of the data under the model, given the fitted parameter values",
            ],
            correctIndex: 0,
            explanation:
              "The probability of the parameters given the data is the posterior, a different object. A likelihood does not integrate to one over the parameters and is not a distribution over them.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "Which statement about a likelihood function is true?",
            options: [
              "It does not integrate to one over the parameters",
              "It integrates to one over the parameters, which is what makes it a probability density",
              "It equals the posterior whenever the prior is uniform over a bounded parameter range",
              "It is always maximised at the true parameter values whenever the model is correct",
            ],
            correctIndex: 0,
            explanation:
              "With a uniform prior the posterior is proportional to the likelihood rather than equal to it, and the maximum of a likelihood is an estimate rather than the truth.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "Why is fitting a model a calculus problem?",
            options: [
              "At a smooth minimum the derivative is zero",
              "Because the model's predictions have to be integrated over the whole stimulus space first",
              "Because every loss function used in practice is defined as an integral over the data",
              "Because parameters are continuous, and only calculus can handle continuous quantities",
            ],
            correctIndex: 0,
            explanation:
              "So minimising an error becomes either solving for where the derivative vanishes or walking downhill along it, which is what every fitting procedure in Section 4 does.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What does a differential equation give you?",
            options: [
              "A rule for how fast the state changes given the current state",
              "The value of the state at any chosen future time, computed directly from the parameters",
              "The steady state the system will eventually settle into, whatever it started from",
              "The probability distribution over states after a long time has passed",
            ],
            correctIndex: 0,
            explanation:
              "You get the trajectory only by following that rule forward, analytically where possible and numerically otherwise. The equation itself is the rule, not the answer.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "After one time constant, how far has a first-order system moved toward its asymptote?",
            options: [
              "About 63 percent of the way",
              "All the way, since the time constant is defined as the time to reach the steady state",
              "About 95 percent of the way, which is why two time constants are usually enough",
              "Exactly half of the way, which is why the quantity is also called the half-life",
            ],
            correctIndex: 0,
            explanation:
              "The figure is one minus the reciprocal of Euler's number. Half-life is a different constant, and roughly 95 percent takes about three time constants.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What does Euler's method say?",
            options: [
              "Next state equals current state plus step size times current rate of change",
              "Next state equals the average of the current state and the predicted steady state value",
              "Next state equals current state times one minus the step size divided by the time constant",
              "Next state is obtained by solving the differential equation exactly over each interval",
            ],
            correctIndex: 0,
            explanation:
              "It is the simplest numerical integration rule, and it means simulating a neuron model is a loop over that one line.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What happens if the step size in a numerical simulation is too large?",
            options: [
              "The simulation becomes inaccurate or unstable",
              "The simulation runs more slowly, because more correction steps are needed per interval",
              "The simulated neuron fires at a lower rate but is otherwise unaffected by the change",
              "The differential equation is solved exactly but on a coarser grid of output times",
            ],
            correctIndex: 0,
            explanation:
              "And the resulting behaviour is a numerical artefact rather than a discovery about neurons, which is why step size is a parameter you should always know the value of.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What does Neuromatch's prerequisites page say about calculus specifically?",
            options: [
              "Know what integrals and derivatives are, and what a differential equation means",
              "Be able to solve second-order partial differential equations by separation of variables",
              "Be able to derive the Euler-Lagrange equations and apply them to a control problem",
              "Be fluent with contour integration in the complex plane and residue calculus",
            ],
            correctIndex: 0,
            explanation:
              "The bar is understanding rather than technique, which is consistent with a course where the differential equations are integrated numerically rather than solved by hand.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "Where does the lesson say an integral appears literally in this course?",
            options: [
              "In the accumulation of evidence during a decision",
              "In the normalisation of a tuning curve so that its area equals one across orientations",
              "In the computation of a covariance matrix from a continuously recorded voltage trace",
              "In the conversion of a spike train into a firing rate by summing over a fixed window",
            ],
            correctIndex: 0,
            explanation:
              "Section 6 describes a decision as the running total of noisy evidence, which is an integral in the ordinary sense of accumulation.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "What does the lesson identify as the most common error in this material?",
            options: [
              "Confusing a likelihood with a distribution over parameters",
              "Confusing the mean of a distribution with the mode of the same distribution",
              "Confusing the variance of a sample with the variance of the population it came from",
              "Confusing a differential equation with a difference equation on a discrete time grid",
            ],
            correctIndex: 0,
            explanation:
              "The lesson treats being able to state the difference out loud as a genuine checkpoint, because so much of Section 4 depends on it.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "Reading Bayes' rule from right to left, what do you have?",
            options: [
              "A generative model",
              "A hypothesis test comparing two competing accounts of the same observation",
              "A decision rule that selects the state with the highest prior probability",
              "A regression of the observed data onto the unobserved state variable",
            ],
            correctIndex: 0,
            explanation:
              "Left to right it is inference from an observation to a cause; right to left it describes how the cause would have produced the observation.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "Why is the standard deviation usually reported rather than the variance?",
            options: [
              "It is in the same units as the quantity itself",
              "Because it is always smaller and therefore makes results look more precise than they are",
              "Because variances cannot be compared between two datasets of different sizes",
              "Because the standard deviation is unbiased while the variance is not",
            ],
            correctIndex: 0,
            explanation:
              "Variance is in squared units, which makes it awkward to interpret directly even though it is the quantity that adds for independent sums.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "In the leaky integrate-and-fire equation, which mathematical object from this section appears?",
            options: [
              "An ordinary differential equation",
              "A conditional probability, relating the voltage to the input current stochastically",
              "An eigenvalue decomposition of the matrix describing the cell's channel kinetics",
              "A definite integral of the input current over the whole duration of the trial",
            ],
            correctIndex: 0,
            explanation:
              "It states the rate of change of the voltage as a function of the current voltage and the input, which is exactly the definition of an ordinary differential equation.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "The lesson says combining independent estimates never makes you less certain. Which quantity is behind that?",
            options: [
              "Precision, because precisions add",
              "The mean, because averaging two means always produces a value between them",
              "The variance, because variances add whenever independent quantities are combined",
              "The standard deviation, because it grows only as the square root of the sample size",
            ],
            correctIndex: 0,
            explanation:
              "Adding a non-negative precision to an existing one cannot decrease it, so the combined estimate is at least as precise as either input. Section 6 uses this directly.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
        ],
      },
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Fitting a model, and what fitting means",
      section: "Section 4 · Fitting a model, and what fitting means",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does fitting a model mean?",
            options: [
              "Choosing parameters by a stated criterion",
              "Selecting the model family that best represents the biology of the system studied",
              "Collecting enough data that the parameters can be measured rather than estimated",
              "Adjusting the data until the model's predictions match the observed measurements",
            ],
            correctIndex: 0,
            explanation:
              "The criterion is a choice the modeller makes, and forgetting that it was a choice is the failure this whole section is written against.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What does least squares minimise?",
            options: [
              "The summed squared residuals",
              "The largest single discrepancy between any prediction and its matching observation",
              "The sum of the absolute differences between predictions and observations",
              "The number of observations the model fails to predict within a stated tolerance",
            ],
            correctIndex: 0,
            explanation:
              "Minimising the largest error and minimising absolute error are both real alternatives with different properties. Squared error is a choice, not the only option.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Why does the closed-form solution to linear regression connect back to Section 3?",
            options: [
              "It requires inverting a matrix built from the predictors",
              "Because the residuals have to be projected onto the eigenvectors of the covariance matrix",
              "Because it is derived by taking the rank of the data matrix and subtracting the parameters",
              "Because the predictors must first be orthogonalised using a determinant calculation",
            ],
            correctIndex: 0,
            explanation:
              "Collinear predictors make that matrix singular, which is precisely the situation the determinant discussion in Section 3 described.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What does maximum likelihood estimation choose?",
            options: [
              "The parameters that make the observed data most probable",
              "The parameters most probable given the data, after weighting by a prior distribution",
              "The model family whose predictions have the smallest average error on new data",
              "The parameters that minimise the number of assumptions the model has to make",
            ],
            correctIndex: 0,
            explanation:
              "Choosing the parameters most probable given the data, after weighting by a prior, is maximum a posteriori estimation, a different procedure that needs that prior.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Why is the log of the likelihood maximised rather than the likelihood itself?",
            options: [
              "To avoid underflow and to turn products into sums",
              "Because the logarithm removes the dependence on the number of observations in the sample",
              "Because only the logarithm of a likelihood can be compared between different model families",
              "Because taking logarithms makes the maximum easier to find by removing local optima",
            ],
            correctIndex: 0,
            explanation:
              "Both reasons are practical: a product of thousands of small probabilities underflows in floating point, and sums are far easier to differentiate. The location of the maximum is unchanged.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Under what conditions is minimising squared error identical to maximising likelihood?",
            options: [
              "A linear model with independent Gaussian noise of constant variance",
              "Any model at all, since squared error is the definition of a likelihood in the general case",
              "A linear model with Poisson noise, provided the mean count in every bin is large enough",
              "Any model whose parameters have been given a uniform prior over a bounded range",
            ],
            correctIndex: 0,
            explanation:
              "Change the noise model, for instance to spike counts, and least squares stops being the maximum likelihood criterion.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "The lesson says least squares is not a neutral default. Why not?",
            options: [
              "It is a Gaussian noise assumption under a different name",
              "Because it always underestimates the uncertainty attached to the fitted parameters",
              "Because it can only be applied to models that are linear in their input variables",
              "Because it requires the predictors to be uncorrelated, which is rarely the case in practice",
            ],
            correctIndex: 0,
            explanation:
              "Using it commits you to independent, constant-variance Gaussian errors whether or not you say so, which is why the noise model deserves to be stated explicitly.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What does a best fit assert?",
            options: [
              "Best within the chosen family, under the assumed noise model",
              "That the fitted parameters correspond to measurable quantities in the real system",
              "That no other model of any kind could account for these data more accurately",
              "That the model would generalise to a new dataset drawn from the same experiment",
            ],
            correctIndex: 0,
            explanation:
              "It says nothing about whether the family was the right family, and a model can fit beautifully while being mechanistically empty.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Why is a fitted parameter without an uncertainty described as half an answer?",
            options: [
              "You cannot tell a real difference from noise",
              "Because the parameter cannot be compared with values published by other laboratories",
              "Because the fitting procedure is not reproducible without the uncertainty being reported",
              "Because uncertainty is required to compute the model's predictions on new data",
            ],
            correctIndex: 0,
            explanation:
              "Two estimates differing by a factor of two might be a genuine effect or might be within the sampling noise, and the point estimate alone cannot separate those.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What is the bootstrap?",
            options: [
              "Resample the data with replacement, refit, and look at the spread",
              "Fit the model repeatedly from different random starting points and keep the best result",
              "Split the data into training and test halves and report the difference between them",
              "Add simulated noise to the predictions and see how much the fit deteriorates",
            ],
            correctIndex: 0,
            explanation:
              "It needs no formula for the sampling distribution, which is why it survives contact with the awkward estimators real data forces on you.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Neuromatch's model-fitting day runs two tutorials in a particular order. What does that order illustrate?",
            options: [
              "Squared error first, then the likelihood view of the same regression",
              "Cross-validation first, then the bias-variance decomposition that explains it",
              "Generalized linear models first, then ordinary regression as a special case of them",
              "Bootstrapping first, then the closed-form solution it is used to check",
            ],
            correctIndex: 0,
            explanation:
              "Linear regression with mean squared error comes first and linear regression with maximum likelihood second, which is the same pairing this lesson makes.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What do you do when a model has no closed-form solution?",
            options: [
              "Start from a guess and step against the gradient",
              "Reduce the model until an algebraic solution becomes available for the simpler version",
              "Fit each parameter separately while holding all the others at their measured values",
              "Search the whole parameter space exhaustively on a fine grid and keep the best point",
            ],
            correctIndex: 0,
            explanation:
              "Whether that finds the global best or merely a local one depends on the shape of the loss surface, which is exactly what the next lesson takes up.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What is a residual?",
            options: [
              "The difference between an observation and the model's prediction for it",
              "The part of the model's prediction that cannot be attributed to any single parameter",
              "The variance left in the data after the largest principal component has been removed",
              "The difference between the fitted parameter and its true value in the generating process",
            ],
            correctIndex: 0,
            explanation:
              "Least squares works with the squares of these, and the noise model in a likelihood approach is a statement about how they are distributed.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "A model fits the data extremely well. What does the lesson say you should still ask?",
            options: [
              "Whether the family was right and whether it means anything mechanistically",
              "Whether the sample size was large enough for the fit to be statistically significant",
              "Whether the parameters were fitted by least squares rather than maximum likelihood",
              "Whether the residuals were computed before or after the data were normalised",
            ],
            correctIndex: 0,
            explanation:
              "A good fit is evidence about parameters within a family, not evidence about the family, and Section 1's what, how and why distinction is the tool for asking the second question.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Why does maximum likelihood generalise beyond least squares?",
            options: [
              "It works for any noise model you can write down",
              "Because it is guaranteed to find the global optimum for any model whatsoever",
              "Because it needs no assumptions about how the data were generated at all",
              "Because it produces unbiased estimates even when the model family is wrong",
            ],
            correctIndex: 0,
            explanation:
              "Once the noise is Poisson or binomial or anything else, you can still write down the probability of the data and maximise it, whereas squared error is tied to one assumption.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What happens to the location of the maximum when you take the logarithm of a likelihood?",
            options: [
              "It stays in the same place",
              "It shifts toward smaller parameter values because the logarithm compresses large numbers",
              "It becomes unique even when the original likelihood had several equal maxima",
              "It changes only if the likelihood takes values below one somewhere in the range",
            ],
            correctIndex: 0,
            explanation:
              "The logarithm is monotonic, so it preserves the ordering of values and therefore the position of the maximum. That is what makes the substitution free.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Which of these is a real alternative criterion to squared error that the lesson mentions?",
            options: [
              "Maximum likelihood under a different noise model",
              "Maximising the number of observations that fall inside the model's confidence band",
              "Minimising the number of free parameters regardless of how badly the model then fits",
              "Choosing parameters so that the mean residual is exactly zero across the dataset",
            ],
            correctIndex: 0,
            explanation:
              "Once you say what you believe the noise to be, the likelihood tells you what to maximise, and for Gaussian constant-variance noise that turns out to be squared error.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Why would two predictors that are nearly identical cause trouble in a regression?",
            options: [
              "The fit becomes non-unique because the matrix is near-singular",
              "Because the model would need twice as many observations to estimate them both",
              "Because the residuals would become correlated with each other across observations",
              "Because the likelihood would then have several distinct local maxima to choose between",
            ],
            correctIndex: 0,
            explanation:
              "Weight can be shifted between them almost freely without changing the predictions, so many different parameter sets fit equally well and the inversion is unstable.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What is the practical reason a product of thousands of probabilities is avoided in code?",
            options: [
              "It underflows to zero in floating-point arithmetic",
              "It takes far longer to compute than the equivalent sum of logarithms would take",
              "It cannot be differentiated analytically, so no gradient method could be applied to it",
              "It produces a different maximum from the sum of logarithms, so the answers disagree",
            ],
            correctIndex: 0,
            explanation:
              "Once the product is numerically zero, every parameter value looks equally good and the optimiser has nothing to work with.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "In the likelihood, which part is held fixed and which part varies?",
            options: [
              "The data are fixed and the parameters vary",
              "The parameters are fixed and the data vary, which is what makes it a distribution",
              "Both vary together, which is why the likelihood surface is two-dimensional",
              "Neither varies, since the likelihood is a single number summarising the fit",
            ],
            correctIndex: 0,
            explanation:
              "Holding the parameters fixed and varying the data gives a probability distribution instead, which is the same expression read in the other direction.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Why does the lesson say the criterion is the part people forget they chose?",
            options: [
              "Squared error is used by default without stating its noise assumption",
              "Because most software reports the criterion only in the documentation rather than in the output",
              "Because the criterion is usually chosen by a supervisor rather than by the analyst",
              "Because changing the criterion never changes the fitted parameters in practice",
            ],
            correctIndex: 0,
            explanation:
              "Reaching for least squares feels like doing nothing, and it is in fact committing to independent constant-variance Gaussian errors.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "What is the difference between an encoding model and a decoding model?",
            options: [
              "Encoding predicts activity from stimulus, decoding predicts stimulus from activity",
              "Encoding uses generalized linear models while decoding uses classifiers and regularisers",
              "Encoding is fitted on training data while decoding is evaluated on held-out data",
              "Encoding applies to single neurons while decoding applies only to whole populations",
            ],
            correctIndex: 0,
            explanation:
              "They answer different questions, and they are not inverses of each other, which is why a decoder that works well is not evidence that the brain does any decoding.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What are the three stages of the cascade model used for spike counts?",
            options: [
              "Linear filter, positive nonlinearity, Poisson spiking",
              "Poisson spiking, linear filter, and then a Gaussian smoothing of the resulting rate",
              "Whitening, principal component projection, and logistic regression on the components",
              "Convolution, rectification, and cross-validation against a held-out stimulus set",
            ],
            correctIndex: 0,
            explanation:
              "The filter is the receptive field, the nonlinearity keeps the rate positive, and the Poisson stage respects the fact that counts are non-negative integers.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What is the spike-triggered average?",
            options: [
              "The mean stimulus preceding a spike",
              "The mean firing rate averaged across all trials at each moment after stimulus onset",
              "The average interval between spikes, computed across the whole recording session",
              "The average response of a population of neurons to a single stimulus presentation",
            ],
            correctIndex: 0,
            explanation:
              "Chichilnisky set it out as a simple white-noise analysis, and it is the crudest useful estimate of a neuron's linear filter.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What did Paninski show about cascade point-process encoding models?",
            options: [
              "The likelihood has no non-global local maxima",
              "That they cannot be fitted reliably unless the stimulus is white noise with equal power",
              "That their parameters are only identifiable when at least two neurons are fitted jointly",
              "That maximum likelihood fitting of them is equivalent to the spike-triggered average",
            ],
            correctIndex: 0,
            explanation:
              "Under the condition Paninski gives on the nonlinearity, gradient ascent cannot get stuck partway, so it reaches the global answer and two people fitting the same data get the same result.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Why does the absence of non-global local maxima matter practically?",
            options: [
              "There are no local maxima to get stuck in",
              "Because the fitted parameters are then guaranteed to be unbiased estimates of the truth",
              "Because it allows the model to be fitted without any numerical optimisation at all",
              "Because it means the model will generalise well to data it was not fitted on",
            ],
            correctIndex: 0,
            explanation:
              "It is a claim about the optimisation, not about the truth of the model or its ability to generalise, both of which remain separate questions.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What did Pillow and colleagues add to the encoding model in their 2008 study?",
            options: [
              "Coupling filters between cells",
              "A second nonlinearity applied after the Poisson stage to model refractoriness explicitly",
              "A recurrent network layer that allowed the model to hold information across trials",
              "A Bayesian prior over receptive field shapes estimated from a separate population",
            ],
            correctIndex: 0,
            explanation:
              "Fitting a complete population of retinal ganglion cells with coupling terms let the model capture correlated firing across cells rather than each cell alone.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "As a model gains parameters, what happens to training error and to error on unseen data?",
            options: [
              "Training error falls throughout, unseen error falls then rises",
              "Both fall throughout, which is why more parameters are always preferable in practice",
              "Both rise throughout, because extra parameters add variance without adding structure",
              "Training error rises while unseen error falls, which is the definition of regularisation",
            ],
            correctIndex: 0,
            explanation:
              "The gap between the two curves is overfitting, and the minimum of the second curve is where the model class is doing as well as it can.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What are the three parts of the bias-variance decomposition?",
            options: [
              "Bias, variance, and irreducible noise",
              "Bias, variance, and the number of parameters the model class contains",
              "Training error, validation error, and the gap between the two curves",
              "Systematic error, random error, and the error introduced by numerical rounding",
            ],
            correctIndex: 0,
            explanation:
              "Bias comes from a class too rigid to represent the truth, variance from a class flexible enough to swing with the sample, and the third part cannot be removed by any model.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Can bias and variance both be driven to zero?",
            options: [
              "No, reducing one generally increases the other",
              "Yes, with enough data both go to zero for any model class whatsoever",
              "Yes, provided the model class contains the true generating process exactly",
              "Only for linear models, where the decomposition has a closed-form solution",
            ],
            correctIndex: 0,
            explanation:
              "Simpler classes buy less variance at the cost of more bias, which is why the trade-off is a trade-off and not a problem waiting to be solved.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What makes cross-validation honest?",
            options: [
              "The held-out data are held out before you look at them",
              "The number of folds is chosen in advance and reported alongside the final score",
              "The same random seed is used for every split so the result can be reproduced exactly",
              "The training and test sets are made exactly equal in size so neither dominates",
            ],
            correctIndex: 0,
            explanation:
              "That includes holding them out before you choose which features to use, which is the step most often skipped without anyone noticing.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Why can a random train-test split leak information in neural recordings?",
            options: [
              "Trials are not independent, so adjacent near-identical trials land on both sides",
              "Because random splits give the training set more trials than the test set on average",
              "Because spike counts are integers and cannot be divided evenly between two sets",
              "Because the model sees the whole stimulus set during training regardless of the split",
            ],
            correctIndex: 0,
            explanation:
              "Rates drift, animals adapt and electrodes move, so nearby trials resemble each other. Splitting by block or by session is often the honest choice.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What is the second neural-data trap the lesson names for decoders?",
            options: [
              "Many neurons and few trials inflate accuracy on incidental structure",
              "Decoders cannot be fitted at all when the number of neurons exceeds the number of trials",
              "Decoding accuracy is always higher than encoding accuracy on the same dataset",
              "Decoders require the stimulus to be discrete, so continuous variables must be binned first",
            ],
            correctIndex: 0,
            explanation:
              "With enough dimensions and few examples, something will separate the classes, so the number worth reporting is performance on genuinely held-out data.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What does Akaike's information criterion do?",
            options: [
              "Penalises the maximised log-likelihood by the number of parameters",
              "Estimates the probability that each candidate model is the true generating process",
              "Measures the correlation between predicted and observed values on held-out trials",
              "Selects the model whose residuals are closest to normally distributed",
            ],
            correctIndex: 0,
            explanation:
              "Twice the parameter count minus twice the maximised log-likelihood, with lower being better, so a new parameter has to buy enough likelihood to pay for itself.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "When is an information criterion particularly useful?",
            options: [
              "When you cannot afford to hold data out",
              "When the model has more parameters than the dataset has observations to constrain them",
              "When the noise model is unknown, since the criterion does not depend on the likelihood",
              "When comparing models fitted to two entirely different datasets from separate experiments",
            ],
            correctIndex: 0,
            explanation:
              "It approximates analytically what cross-validation measures empirically, which matters when data are scarce enough that holding a block out is costly.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Why is a Poisson stage used rather than Gaussian noise in an encoding model of spikes?",
            options: [
              "Counts are non-negative integers with mean-dependent variance",
              "Because the Poisson distribution has fewer parameters and therefore fits more quickly",
              "Because Poisson noise makes the log-likelihood concave regardless of the nonlinearity",
              "Because Gaussian noise would require the stimulus to be Gaussian as well",
            ],
            correctIndex: 0,
            explanation:
              "A Gaussian is continuous, unbounded below and has a variance unrelated to its mean, so it puts probability where counts cannot go.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What does the linear filter in a cascade encoding model correspond to?",
            options: [
              "The neuron's receptive field",
              "The refractory period, expressed as a suppression of firing immediately after a spike",
              "The coupling between one neuron and the rest of the recorded population",
              "The baseline firing rate observed in the absence of any stimulus at all",
            ],
            correctIndex: 0,
            explanation:
              "It says which parts of the stimulus, in space and in recent time, the cell weights and how, which is exactly what a receptive field is.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "A decoder achieves high accuracy on a population recording. What does that establish?",
            options: [
              "That the information is present in the recorded population",
              "That downstream areas read the population out using the same weights the decoder learned",
              "That the encoding model for those neurons must also fit their responses well",
              "That the variable decoded is the one the population evolved to represent",
            ],
            correctIndex: 0,
            explanation:
              "Decoding shows what an observer with access to those signals could recover. Whether the brain does that, and how, are separate questions the decoder cannot answer.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What is the definition of overfitting used in this lesson?",
            options: [
              "Fitting the noise in the training data",
              "Using more parameters than the number of observations in the dataset being fitted",
              "Reporting a result that fails to replicate in an independent laboratory",
              "Choosing a nonlinear model when a linear one would have described the data adequately",
            ],
            correctIndex: 0,
            explanation:
              "The observable consequence is that training error keeps falling while error on unseen data starts to rise, which is why the two must be measured separately.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What does k-fold cross-validation do with the held-out block?",
            options: [
              "Rotates it so every point is scored once by a model that never saw it",
              "Keeps it fixed throughout, so the same points always serve as the test set",
              "Discards it after the first fold and refits on the whole dataset for the final model",
              "Uses it to select the model family before any parameters are estimated at all",
            ],
            correctIndex: 0,
            explanation:
              "Rotating the block uses all the data for both purposes without ever scoring a point with a model that had seen it.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Why is the generalized linear model family described as chosen for a mathematical reason rather than a conservative one?",
            options: [
              "Its likelihood shape rules out local maxima",
              "Because it is the only family that can represent a nonlinear stimulus response function",
              "Because it requires fewer parameters than any competing model of the same responses",
              "Because it is the only family for which cross-validation is theoretically justified",
            ],
            correctIndex: 0,
            explanation:
              "More expressive families exist and may fit better, but they trade away the guarantee that two people fitting the same data reach the same parameters.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What does the lesson say happens if you choose your features after looking at the test data?",
            options: [
              "The held-out score is no longer honest",
              "The model becomes biased toward the training set and underfits the test set instead",
              "The cross-validation folds become correlated and the variance estimate is inflated",
              "Nothing, provided the parameters themselves are still fitted only on the training data",
            ],
            correctIndex: 0,
            explanation:
              "Feature selection is part of fitting, so doing it with the test data in view leaks exactly the information holding data out was meant to protect.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What kind of structure did the coupled population model capture that a single-cell model could not?",
            options: [
              "Correlated firing across cells",
              "The absolute latency of each cell's response relative to stimulus onset",
              "The dependence of each cell's receptive field on the animal's behavioural state",
              "The slow drift in firing rate over the course of a long recording session",
            ],
            correctIndex: 0,
            explanation:
              "Coupling filters let one cell's recent spiking influence another's predicted rate, which is what correlated firing across a population requires.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Which situation would make a model class high in bias?",
            options: [
              "The class is too rigid to represent the true relationship",
              "The class has so many parameters that it fits a different curve for every sample drawn",
              "The training data contain more noise than the test data do",
              "The parameters are fitted by maximum likelihood rather than by least squares",
            ],
            correctIndex: 0,
            explanation:
              "A class flexible enough to fit a different curve for every sample is high in variance, the opposite failure. Both are ways of being wrong, and reducing one usually increases the other.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "What is the generalisation claim a cross-validated score supports?",
            options: [
              "A statement about data the model has not seen",
              "A statement about the true parameter values in the system that generated the data",
              "A statement that the model family contains the correct mechanistic account",
              "A statement about how well the model fits the trials it was actually fitted on",
            ],
            correctIndex: 0,
            explanation:
              "That is the whole point of holding data out, and it is a weaker and more useful claim than any statement about mechanism.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
        ],
      },
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Dimensions and dynamics",
      section: "Section 5 · Dimensions and dynamics",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which two textbooks does the lesson cite for the dynamical systems material?",
            options: [
              "Izhikevich (2007) and Strogatz (2015)",
              "Dayan and Abbott (2001) and Gerstner and colleagues (2014), the two neuroscience texts",
              "Murphy (2012) and Marr (1982), for machine learning and for levels of description",
              "Rieke and colleagues (1997) and Hopfield (1982), for coding and for memory",
            ],
            correctIndex: 0,
            explanation:
              "Izhikevich's book is specifically about the geometry of excitability and bursting in neuron models, and Strogatz is the standard general text on nonlinear dynamics.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What kind of variable is head direction, and what does that force about the attractor representing it?",
            options: [
              "Circular, so the attractor is a ring",
              "Bounded but not circular, so the attractor is a line segment with two stable endpoints",
              "Discrete, so the attractor is a finite set of isolated stable points, one per heading",
              "Unbounded, so the attractor is an infinite line with no repeating structure at all",
            ],
            correctIndex: 0,
            explanation:
              "Rotating all the way round returns you to where you started, so the topology of the representation has to close on itself. Zhang proposed exactly that in 1996.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "How does rank, from the linear algebra lesson, relate to dimensionality reduction?",
            options: [
              "Rank counts the independent directions a reduction is looking for",
              "Rank sets the maximum number of trials that can be included in the analysis",
              "Rank is the number of neurons that must be recorded before a reduction is valid",
              "Rank measures how much variance the first principal component explains overall",
            ],
            correctIndex: 0,
            explanation:
              "A low-rank activity matrix is precisely the redundancy the method exploits, which is why the two lessons use the same geometric picture of the data.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "Why is a principal component described as a fixed weighted sum of neurons?",
            options: [
              "It assigns one weight per neuron and keeps those weights for the whole projection",
              "It selects a single neuron at each moment and follows whichever is most active",
              "It changes its weights over time to track the largest variance at each instant",
              "It weights each time bin rather than each neuron, which is why it is called fixed",
            ],
            correctIndex: 0,
            explanation:
              "Being fixed is exactly what makes the method linear, and being linear is why a curved manifold cannot be captured by any single projection.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What is the state space of a dynamical system?",
            options: [
              "The set of all possible states the system can occupy",
              "The set of stable fixed points the system can settle into over long times",
              "The range of parameter values over which the system's behaviour stays qualitatively fixed",
              "The sequence of states the system actually visits during one particular simulation",
            ],
            correctIndex: 0,
            explanation:
              "The rule assigns a direction and speed to every point in it, and a trajectory is one path through it, so the space is larger than anything a single run visits.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What is the entire motivation for dimensionality reduction in population recordings?",
            options: [
              "Nobody can look at a 200-dimensional trajectory",
              "Reducing the data speeds up the fitting of encoding models by several orders of magnitude",
              "Recording equipment cannot store the full activity of a large population for long sessions",
              "Statistical tests are invalid when the number of variables exceeds the number of trials",
            ],
            correctIndex: 0,
            explanation:
              "The population state is a point in a space with one axis per neuron, so seeing it at all requires projecting it into two or three dimensions.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "How does the lesson characterise principal component analysis?",
            options: [
              "A rotation, not a discovery",
              "A statistical test of whether the population has more structure than chance predicts",
              "A nonlinear embedding that preserves the local neighbourhood structure of the data",
              "A supervised method that finds the directions best predicting the stimulus variable",
            ],
            correctIndex: 0,
            explanation:
              "Centring the data and taking eigenvectors of the covariance matrix is just looking at the cloud along its longest axes. No information is created, and some is deliberately dropped.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What is the first step before computing principal components?",
            options: [
              "Centre the data",
              "Sort the neurons by their mean firing rate so the largest contributors come first",
              "Bin the spikes at exactly the same width used for the peristimulus time histogram",
              "Discard any neuron whose firing rate varies less than a fixed threshold across trials",
            ],
            correctIndex: 0,
            explanation:
              "Without centring, the first component tends to point at the mean rather than at the direction of greatest variation about the mean.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What practical case do Cunningham and Yu make for population methods?",
            options: [
              "Trial averaging destroys the single-trial structure these methods exist to see",
              "Population methods require fewer neurons to be recorded than single-cell analyses do",
              "Population methods remove the need to choose a binning width for spike counts",
              "Population methods can be applied to data with no stimulus or task variable at all",
            ],
            correctIndex: 0,
            explanation:
              "Reduction lets you keep individual trials and still be able to plot them, which is exactly what an average over trials makes impossible.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What did Churchland and colleagues report about motor cortex during reaching?",
            options: [
              "A rotational structure in the population trajectory",
              "That single-neuron tuning to reach direction fully explained the population's behaviour",
              "That the population activity collapsed to a single dimension just before movement onset",
              "That population activity was indistinguishable from a random walk during preparation",
            ],
            correctIndex: 0,
            explanation:
              "The structure is visible at the population level and is not apparent from single-neuron tuning, which is the general case for wanting a population view at all.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "Why is the first principal component of an awake recording often not the variable of interest?",
            options: [
              "The method finds variance, and the biggest variance is often drift or movement",
              "Because the first component is by construction orthogonal to any stimulus variable",
              "Because the first component always captures the mean rather than any variation",
              "Because principal components are computed on shuffled data as a control by default",
            ],
            correctIndex: 0,
            explanation:
              "It is unsupervised, so nothing forces the largest-variance direction to be the one carrying the task variable. If you want that direction, ask for it directly.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What is the second caveat the lesson gives about principal component analysis?",
            options: [
              "It is linear, so a curved manifold cannot be captured by any single projection",
              "It requires at least as many trials as neurons or the covariance matrix is singular",
              "It cannot be applied to spike counts because they are not normally distributed",
              "It assumes the neurons are independent, which is never true in a real recording",
            ],
            correctIndex: 0,
            explanation:
              "A principal component is a fixed weighted sum of neurons, so curvature in the data shows up as extra components that are geometry rather than signal.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What did Stringer and colleagues report about visual cortical population responses?",
            options: [
              "They were high dimensional, with component variance scaling as one over its rank",
              "They collapsed onto three dimensions that corresponded to orientation, contrast and phase",
              "They were dominated by a single component reflecting the animal's running speed",
              "They were indistinguishable from the responses of a randomly connected network",
            ],
            correctIndex: 0,
            explanation:
              "The power law survived whitening the stimuli, so it was not simply inherited from the statistics of the natural images used.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "Why does the lesson say a simple task can only ever produce a low-dimensional answer?",
            options: [
              "The dimensionality found is a property of the dataset, not of cortex",
              "Because simple tasks are typically run with fewer neurons recorded simultaneously",
              "Because principal component analysis caps the number of components at the number of conditions",
              "Because the variance explained by later components is always statistically insignificant",
            ],
            correctIndex: 0,
            explanation:
              "With three conditions there is very little for the population to vary along, so concluding that the brain is three-dimensional confuses the experiment with the system.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What is a population trajectory?",
            options: [
              "The path the population's state traces over time in neuron space",
              "The sequence of stimuli presented over the course of one experimental session",
              "The change in a single neuron's firing rate over the duration of one trial",
              "The set of weights a decoder assigns to each neuron in a population readout",
            ],
            correctIndex: 0,
            explanation:
              "Each instant is one point in a space with one axis per neuron, and following those points in order gives the trajectory that Section 5's dynamics language applies to.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What does the eigenvalue attached to a principal component tell you?",
            options: [
              "The variance along that direction",
              "The number of neurons that contribute non-zero weight to that component",
              "The statistical significance of that component against a shuffled baseline",
              "The correlation between that component and the stimulus variable being studied",
            ],
            correctIndex: 0,
            explanation:
              "Expressed as a share of the total, that is what variance explained means, and it says nothing at all about whether the direction is meaningful.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What does the lesson call the most common overreach in the population dynamics literature?",
            options: [
              "Treating a dataset's dimensionality as the system's degrees of freedom",
              "Reporting rotational structure without first testing it against a shuffled control",
              "Fitting nonlinear methods to data that a linear projection would have handled",
              "Averaging across trials before performing any dimensionality reduction at all",
            ],
            correctIndex: 0,
            explanation:
              "A low-dimensional projection is a claim about this recording in this task. It is not a claim about how many degrees of freedom the underlying system has.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What does unsupervised mean in this context?",
            options: [
              "Fitted without reference to any target variable",
              "Fitted without any human choosing the number of components to keep",
              "Fitted on data from an animal performing no task, so there is no stimulus to reference",
              "Fitted without cross-validation, since there is no prediction to evaluate",
            ],
            correctIndex: 0,
            explanation:
              "It is why the components track variance rather than meaning, and why asking for a task-predictive direction requires a different, supervised method.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "Where does Neuromatch's dimensionality reduction day end, according to the lesson?",
            options: [
              "On nonlinear methods",
              "On a comparison between principal components and independent components analysis",
              "On the use of dimensionality reduction as a preprocessing step for decoding",
              "On the relationship between rank and the number of trials in the recording",
            ],
            correctIndex: 0,
            explanation:
              "Their fourth tutorial covers nonlinear dimensionality reduction, which exists precisely because a linear projection cannot represent a curved manifold.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "A researcher reports that their population is two-dimensional. What should you ask?",
            options: [
              "What task and what recording produced that number",
              "Whether the two components were computed before or after the data were centred",
              "Whether the second component explained more than five percent of the variance",
              "Whether the neurons were recorded simultaneously or across separate sessions",
            ],
            correctIndex: 0,
            explanation:
              "Dimensionality found is a joint property of the system, the task and the recording, so the number means little without those three stated.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "Why does curvature in the data inflate the apparent number of components?",
            options: [
              "A linear projection needs extra axes to approximate a curved surface",
              "Because curvature increases the total variance and therefore the eigenvalues",
              "Because curved data violate the assumption that the covariance matrix is symmetric",
              "Because nonlinear structure makes the eigenvalues complex rather than real",
            ],
            correctIndex: 0,
            explanation:
              "Those extra components describe the geometry of the fit rather than independent signals, which is a real risk when reporting a dimensionality count.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What survives whitening in the Stringer and colleagues result, and why does that matter?",
            options: [
              "The power law, so it was not inherited from the image statistics",
              "The rotational structure, so it was not an artefact of the trial averaging",
              "The dimensionality estimate, so it did not depend on the number of neurons recorded",
              "The correlation between components, so the components were not truly orthogonal",
            ],
            correctIndex: 0,
            explanation:
              "Natural images have their own falling spectrum, so the obvious objection is that the neural spectrum simply copies it. Whitening the stimuli removes that objection.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What is the honest summary of what a low-dimensional projection claims?",
            options: [
              "Most variance in this recording, in this task, lies in this many directions",
              "The underlying neural circuit has exactly this many independent degrees of freedom",
              "Any decoder built on more than this many dimensions will overfit the data",
              "The remaining directions contain only measurement noise and can be safely discarded",
            ],
            correctIndex: 0,
            explanation:
              "Everything stronger than that is an extrapolation from a particular dataset to a claim about the system, and the two are routinely conflated.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "If you want the population direction that predicts a behavioural variable, what should you do?",
            options: [
              "Ask for it directly with a supervised method",
              "Take the first principal component, which by construction maximises that prediction",
              "Take the last principal component, since the largest ones capture noise and drift",
              "Average the components weighted by their eigenvalues to form a combined direction",
            ],
            correctIndex: 0,
            explanation:
              "Principal component analysis optimises variance and knows nothing about your variable, so any alignment between the two is a coincidence you should test rather than assume.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What does the term variance explained refer to?",
            options: [
              "A component's eigenvalue as a share of the total variance",
              "The proportion of trials on which the model predicted the correct behavioural response",
              "The amount of firing rate variability removed by subtracting the population mean",
              "The reduction in prediction error when a component is added to a decoding model",
            ],
            correctIndex: 0,
            explanation:
              "It is a geometric statement about the data cloud, and a component can explain a great deal of variance while explaining nothing about the task.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "Which review does the lesson cite as surveying what a decade of population dynamics work settled?",
            options: [
              "Vyas, Golub, Sussillo and Shenoy",
              "Softky and Koch, whose exchange with Shadlen and Newsome framed the debate",
              "Knill and Pouget, whose Bayesian brain review covers population coding generally",
              "Faisal, Selen and Wolpert, whose noise review covers population variability",
            ],
            correctIndex: 0,
            explanation:
              "Their annual review on computation through neural population dynamics is the survey of that literature; the other three are cited elsewhere in this course for different points.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "What is a dynamical system?",
            options: [
              "A state plus a rule for how the state changes",
              "A system whose parameters change over the course of an experiment",
              "A network of neurons connected recurrently rather than in a feedforward chain",
              "Any model whose behaviour cannot be predicted without numerical simulation",
            ],
            correctIndex: 0,
            explanation:
              "The rule assigns a direction and speed to every point in the state space, which is a vector field, and a trajectory is what you get by following it.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What is a fixed point?",
            options: [
              "A state at which the rate of change is zero",
              "The state the system occupies at the start of every trial before any input arrives",
              "A state the system can never leave once it has entered it, whatever the input",
              "The point in the state space where the trajectory crosses itself exactly once",
            ],
            correctIndex: 0,
            explanation:
              "A system placed exactly there stays there. What matters practically is what happens nearby, which is the stability question.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "How do you determine whether a fixed point is stable?",
            options: [
              "Linearise nearby and check the eigenvalues' real parts",
              "Simulate from many starting points and see whether the trajectories eventually converge",
              "Compute the determinant of the state matrix and check whether it is positive",
              "Compare the fixed point's value with the resting state of the biological system",
            ],
            correctIndex: 0,
            explanation:
              "All negative real parts means small perturbations decay and the point is stable; any positive real part means some perturbation grows.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "Why does the lesson say two-variable models are worth having?",
            options: [
              "A plane can be drawn, so the geometry can be seen",
              "Two variables are enough to reproduce every firing pattern real neurons display",
              "Two-variable systems are the only ones with closed-form analytical solutions",
              "Two variables minimise the number of parameters that have to be fitted to data",
            ],
            correctIndex: 0,
            explanation:
              "You can plot the state space, draw the curves on which each variable stops changing, and read off the fixed points where they cross. It buys insight rather than realism.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What is a bifurcation?",
            options: [
              "A qualitative change in the number or stability of fixed points as a parameter varies",
              "A branching of the trajectory into two paths that the system follows simultaneously",
              "A sudden increase in the firing rate of a neuron model past its threshold current",
              "The point at which a numerical simulation becomes unstable due to the step size",
            ],
            correctIndex: 0,
            explanation:
              "Behaviour changes in kind rather than in degree, which is how a resting neuron model starts firing repetitively as the injected current is raised.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What observable consequence does the type of bifurcation have in a neuron model?",
            options: [
              "Whether firing starts at an arbitrarily low rate or jumps to a finite one",
              "Whether the model reproduces the shape of the action potential correctly",
              "Whether the model can be fitted to recorded data by maximum likelihood",
              "Whether the membrane time constant is short enough to follow fast inputs",
            ],
            correctIndex: 0,
            explanation:
              "That is a measurable property of a real cell, which is why the classification of bifurcations is not merely mathematical bookkeeping.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What did Wilson and Cowan write equations for?",
            options: [
              "Coupled excitatory and inhibitory population activity",
              "The gating kinetics of sodium and potassium channels in a single cortical neuron",
              "The propagation of an action potential along a myelinated axon over distance",
              "The trial-to-trial variability of spike counts in a population of sensory neurons",
            ],
            correctIndex: 0,
            explanation:
              "The resulting two-dimensional system can be analysed in the phase plane, and it remains the template for rate models of cortical circuits.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What did Amari extend the rate-model idea to?",
            options: [
              "Continuous neural fields with lateral inhibition",
              "Spiking networks with sparse random connectivity and balanced input",
              "Networks whose synaptic weights change according to a spike-timing rule",
              "Populations of neurons whose firing rates follow a Poisson distribution exactly",
            ],
            correctIndex: 0,
            explanation:
              "In such a field a localised bump of activity can be stable, which is the continuous-space ancestor of the attractor models later in the lesson.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What is an attractor?",
            options: [
              "A set of states the system falls into from a neighbourhood",
              "The state with the highest firing rate anywhere in the network's repertoire",
              "A stimulus that reliably drives a population into a particular activity pattern",
              "The direction in state space along which perturbations grow most quickly",
            ],
            correctIndex: 0,
            explanation:
              "Falling in from a neighbourhood is the defining property, and it is what makes an attractor a claim about a basin rather than about a single trajectory.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What is the computational function of a Hopfield network?",
            options: [
              "Content-addressable memory",
              "Sequence generation, producing an ordered chain of patterns from a single cue",
              "Path integration, converting velocity signals into an estimate of current position",
              "Evidence accumulation, summing noisy inputs until a decision threshold is crossed",
            ],
            correctIndex: 0,
            explanation:
              "Stored patterns are minima of an energy function, so a partial or noisy cue rolls downhill into the complete pattern rather than being looked up at an address.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What is a continuous attractor used to represent?",
            options: [
              "A graded quantity, held anywhere on a connected set of stable states",
              "A discrete choice between two alternatives, with one stable state for each",
              "A sequence of discrete memories recalled in the order they were stored",
              "The variability of spike counts around a mean firing rate over many trials",
            ],
            correctIndex: 0,
            explanation:
              "Eye position, head direction and location are all graded, so representing them stably needs a whole line, ring or sheet of stable states rather than one point.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What problem did Seung analyse in 1996?",
            options: [
              "How the oculomotor system holds the eyes still at any of many positions",
              "How the visual system estimates the speed of a moving pattern under low contrast",
              "How the hippocampus stores and retrieves sequences of remembered places",
              "How a spiking network can produce irregular firing from regular inputs",
            ],
            correctIndex: 0,
            explanation:
              "Holding any of a continuum of positions requires a line of stable states, which is the canonical biological example of a continuous attractor.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What did Zhang propose in 1996 for head direction?",
            options: [
              "A ring of stable states",
              "A line of stable states running from zero to three hundred and sixty degrees",
              "A Hopfield network storing a discrete set of remembered compass headings",
              "A drift-diffusion process accumulating vestibular evidence toward a decision bound",
            ],
            correctIndex: 0,
            explanation:
              "A ring is the right topology because head direction is a circular variable: rotating all the way round brings you back where you started.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What did Burak and Fiete analyse as a continuous attractor?",
            options: [
              "Grid cell firing as path integration",
              "The storage of episodic memories in a recurrent hippocampal network",
              "The maintenance of eye position by the oculomotor integrator over long fixations",
              "The propagation of activity bumps across primary visual cortex during stimulation",
            ],
            correctIndex: 0,
            explanation:
              "Their model asks how a network can integrate velocity accurately enough to keep a positional representation from drifting, which is a demanding test of the attractor idea.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What predictions does modelling something as a continuous attractor commit you to?",
            options: [
              "Perturbations along it persist, perturbations across it decay, noise causes drift",
              "The system settles into exactly one state whatever perturbation it receives",
              "Firing rates are Poisson distributed with a Fano factor of exactly one",
              "The network's connectivity must be symmetric and its weights all positive",
            ],
            correctIndex: 0,
            explanation:
              "Those are measurable, which is precisely what separates an attractor model from a metaphor about the system settling into a state.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What did Sompolinsky, Crisanti and Sommers show about randomly connected networks?",
            options: [
              "Above a coupling strength they can be chaotic rather than convergent",
              "That they always converge to a single fixed point regardless of the coupling strength",
              "That their firing rates follow a power law distribution across the population",
              "That they can store a number of patterns proportional to the number of neurons",
            ],
            correctIndex: 0,
            explanation:
              "It is why the lesson says settling is not automatic. A recurrent network is not guaranteed to have the well-behaved attractor structure a model may assume.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What did Brunel map out in 2000?",
            options: [
              "The regimes of sparsely connected excitatory and inhibitory spiking networks",
              "The bifurcation structure of the Hodgkin-Huxley equations under injected current",
              "The relationship between grid cell spacing and the size of the attractor sheet",
              "The optimal weighting of visual and haptic cues in a combined perceptual estimate",
            ],
            correctIndex: 0,
            explanation:
              "One of the regimes is asynchronous irregular activity, which connects the network story directly back to the irregular cortical firing of Section 2.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What is the asynchronous irregular state?",
            options: [
              "Neurons firing irregularly and without population-wide synchrony",
              "Neurons firing regularly but at different phases, so the population average looks flat",
              "A network in which excitation and inhibition are entirely uncoupled from each other",
              "A transient regime that occurs only during the first moments after stimulus onset",
            ],
            correctIndex: 0,
            explanation:
              "It is the regime that reconciles a network model with the irregular single-cell firing that Softky and Koch drew attention to.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What is a nullcline?",
            options: [
              "The curve on which one variable stops changing",
              "The trajectory a system follows when it starts exactly at a fixed point",
              "The boundary separating two basins of attraction in the state space",
              "The set of states from which the system diverges to infinity rather than settling",
            ],
            correctIndex: 0,
            explanation:
              "Fixed points sit where nullclines cross, because that is where every variable's rate of change is zero at once.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "Why is memory in a Hopfield network described as content-addressable?",
            options: [
              "A partial or noisy version of a pattern retrieves the whole pattern",
              "Because each stored pattern is indexed by a unique numerical address in the weights",
              "Because the network can store only as many patterns as it has neurons",
              "Because retrieval requires the cue to match the stored pattern exactly",
            ],
            correctIndex: 0,
            explanation:
              "The cue does not have to be an address; the dynamics do the work by rolling downhill from wherever the cue puts the state.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "In the vector field picture, what is a trajectory?",
            options: [
              "What you get by following the assigned direction and speed from a starting state",
              "The set of all fixed points of the system, joined in the order of their stability",
              "The projection of the population state onto its first two principal components",
              "A single neuron's firing rate plotted against time over one trial",
            ],
            correctIndex: 0,
            explanation:
              "Thinking of the rule as a field of arrows and the trajectory as following them is worth more, for building intuition, than any specific set of equations.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "Why is a bump of activity in a neural field a useful object?",
            options: [
              "It can be stable and located anywhere, which represents a continuous variable",
              "It synchronises the whole population so that spikes arrive in tight volleys",
              "It reduces the network's dimensionality to exactly one at every moment",
              "It ensures the network's firing rates stay Poisson distributed under any input",
            ],
            correctIndex: 0,
            explanation:
              "Lateral inhibition keeps the bump localised while translation invariance lets it sit anywhere, which is exactly the structure a continuous attractor needs.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "The lesson calls the falsifiability of attractor claims a virtue. Why?",
            options: [
              "It turns a description into predictions that can be measured and can fail",
              "Because falsifiable models are easier to fit to data than descriptive ones are",
              "Because a falsified model can be discarded without rerunning the experiment",
              "Because falsifiability guarantees that the model is mechanistically correct",
            ],
            correctIndex: 0,
            explanation:
              "Recovery from perturbation along some directions but not others, and drift rather than random error, are specific enough to be looked for and not found.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
        ],
      },
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Decisions and inference",
      section: "Section 6 · Decisions and inference",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In the reaction-time version of the motion discrimination task, who determines when the response happens?",
            options: [
              "The animal",
              "The experimenter, who imposes a fixed viewing duration on every trial alike",
              "The stimulus, which terminates as soon as the motion strength threshold is passed",
              "The recording system, which triggers the response once firing crosses a set rate",
            ],
            correctIndex: 0,
            explanation:
              "Letting the subject choose when to commit is what makes the reaction time a measurement of the decision rather than of the trial structure, which is why Roitman and Shadlen used that design.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What does an ideal observer base its estimate on?",
            options: [
              "The posterior",
              "The likelihood alone, since the prior would bias an otherwise unbiased estimate",
              "The prior alone, since the measurement is noisy and therefore not to be trusted",
              "The measurement itself, corrected afterwards for any known systematic error",
            ],
            correctIndex: 0,
            explanation:
              "The posterior is what you get after combining prior and likelihood, and using either one alone throws away information the other carries.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "According to the closing lesson, what closes the gap between recognising a term and producing the thing?",
            options: [
              "Writing code that fails and then fixing it",
              "Reading the primary sources behind each claim until the terminology becomes automatic",
              "Repeating the assessments until every question can be answered without hesitation",
              "Discussing the material with a pod of other learners and a teaching assistant",
            ],
            correctIndex: 0,
            explanation:
              "The lesson is blunt that reading about a model is not the same as fitting one, which is why it treats the coursebook's runnable notebooks as the real next step.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "Who proved that the sequential probability ratio test is optimal, and in what year?",
            options: [
              "Wald and Wolfowitz, in 1948",
              "Wald alone, in the 1945 paper that introduced the test in the first place",
              "Stone, in the 1960 paper that brought the test into choice reaction time",
              "Bogacz and colleagues, in the 2006 analysis of two-alternative decision models",
            ],
            correctIndex: 0,
            explanation:
              "Wald introduced the test in 1945; the optimality result came three years later in the joint paper with Wolfowitz, and both are cited in the lesson.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Which module does the closing lesson name as covering how a recorded signal is prepared before anything else happens to it?",
            options: [
              "Signal processing",
              "Linear systems, where stochastic and deterministic dynamics are combined",
              "Network causality, which distinguishes intervention from observation",
              "Model fitting, where the noise assumptions behind a criterion are made explicit",
            ],
            correctIndex: 0,
            explanation:
              "Sampling, Fourier analysis, filtering and time-frequency methods are the tools that turn a raw recording into something the later analyses can be run on.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "In the drift-diffusion model, what determines which of the two answers the observer gives?",
            options: [
              "Which bound the accumulated evidence reaches first",
              "Which alternative had the higher average evidence over the whole stimulus duration",
              "Whether the accumulated evidence is positive or negative at a fixed response deadline",
              "Which alternative the starting point was closer to when the stimulus first appeared",
            ],
            correctIndex: 0,
            explanation:
              "The starting point biases which bound is easier to reach, and a fixed deadline describes a different family of models, but the commitment itself is the first bound crossing.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What is a posterior?",
            options: [
              "The probability of the state after prior and likelihood are combined",
              "The probability of the measurement, read as a function of the possible states",
              "The probability assigned to each state before any measurement is taken",
              "The proportion of trials on which the observer's report matched the true state",
            ],
            correctIndex: 0,
            explanation:
              "The probability of the measurement as a function of the states is the likelihood, and the probability of a state before any measurement is the prior. Bayes' rule combines those two.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What is the core mechanism of the drift-diffusion model?",
            options: [
              "Add up noisy evidence and commit when the total reaches a bound",
              "Compare the current sensory sample with a stored template and respond if they match",
              "Wait a fixed interval, then choose whichever alternative has more accumulated support",
              "Sample one alternative at random and accept it unless the evidence contradicts it",
            ],
            correctIndex: 0,
            explanation:
              "The accumulated evidence moves with a constant average drift plus noise, and the decision is made at whichever of the two bounds it reaches first.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "In the drift-diffusion model, what does the drift rate represent?",
            options: [
              "The quality of the evidence",
              "The amount of evidence required before the observer is willing to commit",
              "The time taken by sensory encoding and by executing the motor response",
              "Any prior bias the observer holds toward one of the two alternatives",
            ],
            correctIndex: 0,
            explanation:
              "The other three options name boundary separation, non-decision time and starting point, which are the model's other three parameters.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What does boundary separation control?",
            options: [
              "How much evidence is demanded before committing",
              "The rate at which evidence accumulates once the stimulus has been encoded",
              "The proportion of trials on which the observer responds before any evidence arrives",
              "The variability of the evidence signal from one moment to the next within a trial",
            ],
            correctIndex: 0,
            explanation:
              "Widening the bounds means waiting longer and being more accurate; narrowing them means the reverse. That single parameter is the speed-accuracy trade-off.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What does non-decision time absorb?",
            options: [
              "Sensory encoding and motor execution",
              "The time spent accumulating evidence before the first bound is approached",
              "The delay caused by the observer's prior bias toward one alternative",
              "The trials on which the observer failed to respond within the allowed window",
            ],
            correctIndex: 0,
            explanation:
              "It is the part of a reaction time that is not deciding, and separating it out is what lets the remaining parameters be about the decision itself.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Why does the lesson call the drift-diffusion model strong rather than merely flexible?",
            options: [
              "It must fit accuracy and both reaction-time distributions at once",
              "It has fewer parameters than any competing account of two-alternative decisions",
              "It was derived from the anatomy of parietal cortex rather than fitted to behaviour",
              "It predicts the neural firing rates directly without any free parameters at all",
            ],
            correctIndex: 0,
            explanation:
              "Accuracy, the shape of the correct-response distribution and the shape of the error distribution are tightly linked, so a model that gets one right and the others wrong is caught.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What did Wald introduce in 1945?",
            options: [
              "The sequential probability ratio test",
              "A proof that reaction times in two-choice tasks follow a log-normal distribution",
              "A recurrent circuit model in which slow excitation implements evidence accumulation",
              "A decision rule that ignores the prior whenever the evidence is strong enough",
            ],
            correctIndex: 0,
            explanation:
              "Wald and Wolfowitz proved its optimality three years later, in 1948, and the drift-diffusion model is its continuous-time counterpart, which is how the optimality argument transfers across.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Whose 1960 paper brought sequential testing into the study of choice reaction time?",
            options: [
              "Stone",
              "Ratcliff, whose diffusion model followed almost two decades later in 1978",
              "Bogacz, whose formal comparison of the models appeared much later in 2006",
              "Shadlen, whose parietal recordings supplied the neural evidence for the idea",
            ],
            correctIndex: 0,
            explanation:
              "Stone's models for choice-reaction time is the link between Wald's statistics and the psychological modelling that Ratcliff later developed.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What did Bogacz and colleagues contribute in 2006?",
            options: [
              "A formal analysis of the relations among two-alternative decision models",
              "The first recordings from parietal cortex during a reaction-time discrimination task",
              "A demonstration that dopamine encodes a reward prediction error during choices",
              "An implementation of evidence accumulation in a spiking network of excitatory cells",
            ],
            correctIndex: 0,
            explanation:
              "Their paper on the physics of optimal decision making works out how the competing accumulation schemes relate to each other and to the optimal test.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What did Newsome, Britten and Movshon report in 1989?",
            options: [
              "Single motion-sensitive neurons whose sensitivity rivalled the animal's own",
              "That parietal neurons ramp toward a common firing level before the response",
              "That motion perception depends on a prior favouring slow speeds",
              "That decisions are made by comparing two populations of mutually inhibiting cells",
            ],
            correctIndex: 0,
            explanation:
              "The comparison of a single neuron's discrimination performance with the behaving animal's is what makes this line of work unusually direct evidence.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What did Roitman and Shadlen find in parietal cortex in 2002?",
            options: [
              "Firing rates ramping at a rate that scaled with motion strength",
              "Firing rates that dropped to baseline immediately before the animal responded",
              "Firing rates that encoded the reward magnitude rather than the sensory evidence",
              "Firing rates that were identical on correct and error trials at every moment",
            ],
            correctIndex: 0,
            explanation:
              "They also converged toward a common level just before the response, which is what an accumulator approaching a fixed bound would look like.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What did Wang's 2002 model supply?",
            options: [
              "A recurrent circuit in which slow reverberation implements accumulation and commitment",
              "A statistical proof that the diffusion model is optimal for any error rate",
              "A method for fitting the diffusion model to reaction-time data efficiently",
              "A demonstration that the drift rate can be read directly from motion strength",
            ],
            correctIndex: 0,
            explanation:
              "It bridges the levels: the behavioural model says what is computed, and the circuit model proposes machinery that could compute it.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Which caveat does the lesson attach to the whole drift-diffusion literature?",
            options: [
              "Fitting reaction-time distributions well does not prove the mechanism",
              "The model applies only to visual motion and not to any other kind of evidence",
              "The parameters cannot be estimated from behavioural data without neural recordings",
              "The model cannot account for errors, only for correct responses and their timing",
            ],
            correctIndex: 0,
            explanation:
              "Several accumulation schemes produce similar distributions, the parameters are estimated rather than measured, and a ramping average can arise from trials that stepped at different times.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "How can a ramping trial-averaged firing rate arise without any ramp on single trials?",
            options: [
              "Steps occurring at different times average into a ramp",
              "Slow drift in the electrode position produces a spurious upward trend across trials",
              "Poisson variability in the spike counts always produces an apparent upward slope",
              "The peristimulus histogram is normalised in a way that introduces a positive bias",
            ],
            correctIndex: 0,
            explanation:
              "This is why the caveat matters: the average is compatible with more than one single-trial process, and distinguishing them needs single-trial analysis.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Which Neuromatch tutorial does the lesson connect the drift-diffusion model to?",
            options: [
              "Their hidden dynamics day, which opens on the sequential probability ratio test",
              "Their model fitting day, which opens on linear regression with mean squared error",
              "Their dimensionality reduction day, which opens on a geometric view of data",
              "Their biological neuron models day, which opens on the leaky integrate-and-fire cell",
            ],
            correctIndex: 0,
            explanation:
              "Their first tutorial on that day is literally the sequential probability ratio test, which is the discrete ancestor of the model this lesson describes.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What task does the lesson use to introduce evidence accumulation?",
            options: [
              "Judging the direction of a noisy cloud of moving dots",
              "Recalling a list of words after a delay of several minutes",
              "Estimating the height of an object using vision and touch together",
              "Holding the eyes still at an eccentric position without visual feedback",
            ],
            correctIndex: 0,
            explanation:
              "Every instant of the display gives a little evidence and no instant settles it, which is exactly the situation accumulation is designed for.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What does the starting point parameter capture?",
            options: [
              "A prior bias toward one alternative",
              "The amount of evidence available at the moment the stimulus appears",
              "The delay before the accumulation process begins after stimulus onset",
              "The threshold that must be crossed before a response is initiated",
            ],
            correctIndex: 0,
            explanation:
              "Shifting the start closer to one bound means less evidence is needed for that answer, which produces the asymmetries seen when one response is more probable or better rewarded.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "An observer becomes slower and more accurate. Which parameter change does the model attribute that to?",
            options: [
              "Wider boundary separation",
              "A higher drift rate, since better evidence produces both slower and more accurate choices",
              "A longer non-decision time, since sensory encoding has become more thorough",
              "A starting point shifted further from the correct alternative's bound",
            ],
            correctIndex: 0,
            explanation:
              "A higher drift rate makes responses faster and more accurate together, so it cannot produce this pattern. Only caution does.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What does Britten and colleagues' 1992 paper add to the 1989 result?",
            options: [
              "A systematic comparison of neuronal and psychophysical performance",
              "A recording from parietal rather than motion-sensitive cortex during the same task",
              "A circuit model showing how the comparison could be implemented in cortex",
              "A demonstration that the effect disappears when the animal is not rewarded",
            ],
            correctIndex: 0,
            explanation:
              "Turning a striking observation into a systematic quantitative comparison is what made the neurometric approach usable by others.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Which review does the lesson name for the neural basis of decision making?",
            options: [
              "Gold and Shadlen",
              "Ratcliff and McKoon, whose review covers the behavioural modelling side",
              "Knill and Pouget, whose review covers uncertainty in neural coding",
              "Cunningham and Yu, whose review covers analysis of population recordings",
            ],
            correctIndex: 0,
            explanation:
              "Ratcliff and McKoon is the behavioural review cited alongside it; the other two are cited elsewhere in this course for different topics.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "In what year and in what context did Ratcliff introduce the diffusion model?",
            options: [
              "1978, for memory retrieval",
              "1998, for the modelling of two-choice reaction times in perceptual tasks",
              "2002, for the interpretation of parietal recordings in monkeys",
              "2008, in a review consolidating three decades of two-choice modelling",
            ],
            correctIndex: 0,
            explanation:
              "It arrived as a theory of memory retrieval and was later applied far more widely, with the 2008 review consolidating the two-choice case.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What is the relationship between the sequential probability ratio test and the drift-diffusion model?",
            options: [
              "The model is the continuous-time counterpart of the test",
              "The test is a special case of the model that applies only when errors are impossible",
              "They are unrelated procedures that happen to produce similar reaction-time predictions",
              "The test was derived from the model after the neural recordings were published",
            ],
            correctIndex: 0,
            explanation:
              "That relationship is what lets an optimality argument from statistics carry over into a psychological and neural model.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Why is perception described as inference in this section?",
            options: [
              "The world state is not observed, only noisy ambiguous measurements of it",
              "Because perception requires conscious reasoning about what the stimulus might be",
              "Because sensory receptors compute probabilities directly rather than firing rates",
              "Because every percept is the output of a learned decision rule rather than a measurement",
            ],
            correctIndex: 0,
            explanation:
              "Many world states could have produced the measurement you got, so recovering the state is an inference problem rather than a reading-off problem.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "In the Gaussian case, what is the posterior's precision?",
            options: [
              "The sum of the prior and likelihood precisions",
              "The average of the prior and likelihood precisions, weighted by their means",
              "The smaller of the two precisions, since the weakest source limits the estimate",
              "The product of the two precisions, divided by the difference between the means",
            ],
            correctIndex: 0,
            explanation:
              "Adding a non-negative precision cannot decrease the total, which is the formal reason combining information never makes you less certain.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "In the Gaussian case, what is the posterior mean?",
            options: [
              "A precision-weighted average of the two means",
              "The mean of whichever source has the larger variance, since it carries more information",
              "The arithmetic average of the prior mean and the measurement, regardless of reliability",
              "The measurement, with the prior affecting only the width of the posterior",
            ],
            correctIndex: 0,
            explanation:
              "The less reliable source automatically receives the smaller weight, without anyone having to decide on a weighting.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What did Ernst and Banks measure in 2002?",
            options: [
              "How vision and touch are weighted when judging an object's height",
              "How a prior over movement displacements is learned during reaching",
              "How motion illusions arise from an estimator favouring slow speeds",
              "How parietal neurons accumulate evidence during a motion discrimination task",
            ],
            correctIndex: 0,
            explanation:
              "They measured each channel's reliability separately and found the combined judgement used the statistically optimal weighting, including when vision was degraded.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Why is the Ernst and Banks result described as unusually clean?",
            options: [
              "The prediction was quantitative and made in advance",
              "Because the experiment was run on a very large number of participants",
              "Because it required no assumptions about the distribution of the measurement noise",
              "Because it was replicated in a different sensory modality by the same authors",
            ],
            correctIndex: 0,
            explanation:
              "The reliabilities were measured first, which fixed the predicted weights before the combined condition was run, so nothing was fitted after the fact.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What did Körding and Wolpert's 2004 study show?",
            options: [
              "People learn a prior over an unseen displacement and weight it against feedback reliability",
              "People weight visual and haptic estimates by their measured reliabilities when judging size",
              "People perceive low-contrast motion as slower because of a prior favouring slow speeds",
              "People accumulate evidence to a bound whose height they adjust with task instructions",
            ],
            correctIndex: 0,
            explanation:
              "The displacement was drawn from a distribution the participants were never told about, so the prior had to be learned from experience during the task.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What did Weiss, Simoncelli and Adelson explain in 2002?",
            options: [
              "A family of motion illusions as the output of an optimal estimator",
              "The optimal combination of visual and haptic cues in a height judgement task",
              "The variability of cortical firing as the result of balanced excitation and inhibition",
              "The accumulation of sensory evidence toward a decision threshold in parietal cortex",
            ],
            correctIndex: 0,
            explanation:
              "The estimator carries a prior favouring slow speeds, and several long-standing illusions fall out of that single assumption.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Why do low-contrast patterns appear to move more slowly?",
            options: [
              "A broader likelihood lets the slow-speed prior pull the estimate further",
              "Because low contrast reduces the firing rates of motion-sensitive neurons proportionally",
              "Because the visual system samples low-contrast stimuli for a shorter time before deciding",
              "Because the prior over speeds shifts toward zero when contrast is reduced",
            ],
            correctIndex: 0,
            explanation:
              "The prior itself does not change. What changes is how much the measurement constrains the estimate, and a weaker constraint means the prior dominates more.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "How does the lesson describe motion illusions in this framework?",
            options: [
              "As what an optimal estimator with that prior is supposed to do",
              "As a failure of the visual system that a better-designed estimator would avoid",
              "As evidence that perception is not Bayesian, since an optimal observer would not err",
              "As artefacts of the laboratory displays rather than features of natural vision",
            ],
            correctIndex: 0,
            explanation:
              "Being wrong in a specific, predictable way is a signature of an inference process with a prior, not a bug, which is what makes the account explanatory.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What is Knill and Pouget's careful point about the Bayesian brain hypothesis?",
            options: [
              "Near-optimal behaviour is a computational-level claim about the problem, not the machinery",
              "Near-optimal behaviour proves that neurons represent probability distributions explicitly",
              "Near-optimal behaviour is impossible given the measured noise in the nervous system",
              "Near-optimal behaviour can only be established by recording from the relevant neurons",
            ],
            correctIndex: 0,
            explanation:
              "Many mechanisms can approximate the same optimum, including some that never represent a probability at all, which is why the implementation remains an open question.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What methodological caution does the lesson give about Bayesian models of behaviour?",
            options: [
              "A freely fitted prior and likelihood can accommodate a great deal",
              "Bayesian models cannot be compared with non-Bayesian models on the same data",
              "Bayesian models require far more trials per participant than other model families",
              "Bayesian models can only be applied when the stimulus distribution is Gaussian",
            ],
            correctIndex: 0,
            explanation:
              "That is why the strong results are the ones where the prior was imposed by the experimenter, measured independently, or predicted in advance.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What is the first question to ask about a claim that behaviour is Bayes-optimal?",
            options: [
              "Where the prior came from",
              "Whether the participants were told the distribution of the stimulus in advance",
              "Whether the likelihood was assumed to be Gaussian rather than measured directly",
              "Whether the result was replicated in a second independent group of participants",
            ],
            correctIndex: 0,
            explanation:
              "A prior fitted after the fact makes the model nearly unfalsifiable, so its provenance is what determines how much the result establishes.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What is a likelihood function in the perceptual setting?",
            options: [
              "The probability of the measurement you got, as a function of possible world states",
              "The probability of each world state before any measurement has been taken",
              "The probability of the world state after the measurement has been incorporated",
              "The proportion of trials on which the observer reported each possible state",
            ],
            correctIndex: 0,
            explanation:
              "The probability of each state before measurement is the prior, and the probability after the measurement is incorporated is the posterior. Those are the other two terms in Bayes' rule.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Why does combining independent estimates never make an observer less certain?",
            options: [
              "Precisions add, and a precision cannot be negative",
              "Because the estimate with the smaller variance is always the one adopted",
              "Because averaging two numbers always produces a value between them",
              "Because independent measurements cannot disagree by more than their combined error",
            ],
            correctIndex: 0,
            explanation:
              "It follows directly from the Gaussian arithmetic in Section 3, which is why precision was introduced there rather than here.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Which of these three studies imposed the prior experimentally rather than fitting it?",
            options: [
              "Körding and Wolpert's displacement distribution",
              "Weiss, Simoncelli and Adelson's slow-speed prior over image motion",
              "Knill and Pouget's account of uncertainty in neural coding and computation",
              "Ernst and Banks's measurement of visual and haptic reliability",
            ],
            correctIndex: 0,
            explanation:
              "The experimenters drew displacements from a distribution they controlled. Ernst and Banks measured reliabilities rather than a prior, and the slow-speed prior is inferred rather than imposed.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "How does this section connect back to Marr's levels from Section 1?",
            options: [
              "Optimality is a computational-level claim, silent about algorithm and implementation",
              "Optimality is an implementational claim, since it constrains the circuits involved",
              "Optimality is an algorithmic claim, since it specifies the steps the brain performs",
              "Optimality spans all three levels at once, which is why it is such a strong result",
            ],
            correctIndex: 0,
            explanation:
              "Saying what problem is being solved leaves open both what is represented and what machinery does the representing, which is precisely Knill and Pouget's caution.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What happens to the weight given to a sensory channel when that channel is degraded?",
            options: [
              "It falls, in proportion to the loss of reliability",
              "It rises, because the observer compensates by attending to it more closely",
              "It stays the same, because weights are learned over long experience and change slowly",
              "It falls to zero, because an unreliable channel is excluded from the estimate entirely",
            ],
            correctIndex: 0,
            explanation:
              "That reweighting is exactly what Ernst and Banks demonstrated when they degraded the visual signal and watched the weights shift as predicted.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "In Bayes' rule as applied to perception, what plays the role of the prior?",
            options: [
              "The probability of a world state before the current measurement",
              "The noise added to the measurement by the sensory receptors themselves",
              "The observer's confidence in their final report, expressed as a probability",
              "The frequency with which each response was rewarded in previous trials",
            ],
            correctIndex: 0,
            explanation:
              "It encodes what the observer expected before looking, which is what makes it possible for an estimate to be pulled away from the measurement.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Why is it significant that an optimal estimator can produce a systematic error?",
            options: [
              "It shows an error can be evidence about the inference rather than about a defect",
              "It shows that optimality is the wrong framework for describing perception",
              "It shows that priors must be incorrect if they lead to a misperception",
              "It shows that the likelihood must have been mis-measured in those experiments",
            ],
            correctIndex: 0,
            explanation:
              "The pattern of errors becomes a measurement of the prior, which is how a why model earns its keep against data it did not fit.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "What does the lesson say about how many mechanisms could produce near-optimal behaviour?",
            options: [
              "Many, including some that represent no probability at all",
              "Exactly one, which is why optimality implies a specific neural implementation",
              "Two, corresponding to sampling-based and parametric probabilistic codes",
              "None that are biologically plausible given the noise levels measured in cortex",
            ],
            correctIndex: 0,
            explanation:
              "That multiplicity is the reason a computational-level result does not settle the algorithmic or implementational levels underneath it.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Which Neuromatch module does this lesson correspond to?",
            options: [
              "Bayesian decisions, in their stochastic processes module",
              "Model fitting, in their machine learning module",
              "Dynamical systems, in the module of the same name",
              "Network causality, which closes their curriculum",
            ],
            correctIndex: 0,
            explanation:
              "Their Bayesian decisions day teaches estimating a state of the world from measurements, which is exactly the problem this lesson sets up.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Which topic does this course leave to Neuromatch rather than covering itself?",
            options: [
              "Signal processing, including Fourier analysis and filtering",
              "The distinction between what, how and why models",
              "The bias-variance trade-off and cross-validation",
              "Fixed points, stability and continuous attractors",
            ],
            correctIndex: 0,
            explanation:
              "Sampling, Fourier analysis, filtering and time-frequency methods are named in the closing lesson as covered there and not here. The other three all have sections in this course.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What are hidden Markov models and the Kalman filter described as, in this course's terms?",
            options: [
              "Section 6's inference problem extended to a world state that changes",
              "Two alternative methods for reducing the dimensionality of a population recording",
              "Two ways of fitting an encoding model when the stimulus is continuous",
              "Two network architectures for storing sequences of remembered patterns",
            ],
            correctIndex: 0,
            explanation:
              "Bayes with a static state is Section 6; letting the state evolve while you keep measuring is what those two methods add.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What did Schultz, Dayan and Montague report about midbrain dopamine in 1997?",
            options: [
              "Responses that behave like a reward prediction error",
              "Responses that scale with the physical magnitude of the reward delivered",
              "Responses that predict the animal's reaction time on the following trial",
              "Responses that accumulate toward a threshold during the decision period",
            ],
            correctIndex: 0,
            explanation:
              "That is the quantity temporal-difference learning uses as its teaching signal, which is why the result connected reinforcement learning theory to physiology.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "How does the closing lesson describe optimal control relative to inference?",
            options: [
              "The question shifts from estimating the world to acting on it",
              "It is the same problem with the prior and the likelihood exchanged",
              "It replaces the posterior with a point estimate to make the computation tractable",
              "It applies only to motor tasks, whereas inference applies only to perception",
            ],
            correctIndex: 0,
            explanation:
              "Todorov's work on optimality principles in sensorimotor control is cited for that shift from estimation to action.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What does the causality module ask, according to the closing lesson?",
            options: [
              "When a correlation licenses a causal claim",
              "How to fit a causal model to spike counts using maximum likelihood",
              "Whether neural activity causes behaviour or merely accompanies it in time",
              "How to estimate the direction of information flow between two brain areas",
            ],
            correctIndex: 0,
            explanation:
              "And what an intervention or an instrumental variable buys you, which is why the module is separate from the fitting material.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "In what order does the closing lesson tell you to work Neuromatch's prerequisite refresher days?",
            options: [
              "Two Python workshops, then linear algebra, then calculus, then statistics",
              "Statistics first, then calculus, then linear algebra, then the two Python workshops",
              "Linear algebra and calculus together, then Python, then statistics last of all",
              "Whichever order suits you, since the refreshers are entirely independent of each other",
            ],
            correctIndex: 0,
            explanation:
              "That is their own published sequence, and the Python workshops come first because the later refreshers are themselves taught as notebooks.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What is the closing warning of the course?",
            options: [
              "Reading about a model is not the same as fitting one",
              "Neuromatch's material changes each year, so this course will go out of date quickly",
              "The mathematics here is a simplification that will mislead you in a research setting",
              "Applying to the Neuromatch course requires more preparation than this course provides",
            ],
            correctIndex: 0,
            explanation:
              "The gap between recognising a term and producing the thing closes only by writing code that fails and then fixing it.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "When does the closing lesson say this course has done its job?",
            options: [
              "When it becomes unnecessary",
              "When the learner can restate every definition in the vocabulary sections from memory",
              "When the learner passes the final assessment at the stated passing score",
              "When the learner has read every cited paper in the sources sections",
            ],
            correctIndex: 0,
            explanation:
              "A companion course succeeds when you leave it and go read the material it was written to make followable.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What role does the closing lesson assign to deep networks in Neuromatch's curriculum?",
            options: [
              "Encoding models, and a proposed framework for neuroscience",
              "A replacement for generalized linear models in all fitting applications",
              "A method of dimensionality reduction that supersedes principal component analysis",
              "A simulation tool for generating synthetic spike trains to test analyses on",
            ],
            correctIndex: 0,
            explanation:
              "Richards and colleagues argue for treating deep learning as a framework for neuroscience rather than only as a tool, which is a stronger claim than using it to fit responses.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What is an instrumental variable, as the closing lesson's vocabulary defines it?",
            options: [
              "A variable influencing a cause but not the outcome directly",
              "A variable measured to control for confounding in a regression analysis",
              "A variable the experimenter manipulates directly in a randomised intervention",
              "A variable that mediates the effect of the cause on the outcome",
            ],
            correctIndex: 0,
            explanation:
              "That structure is what lets a causal effect be identified from observational data when a direct intervention is not possible.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What is a reward prediction error?",
            options: [
              "The difference between reward received and reward expected",
              "The difference between the reward delivered and the maximum reward available",
              "The probability that the chosen action was the one with the highest expected value",
              "The variance of the reward across repetitions of the same action",
            ],
            correctIndex: 0,
            explanation:
              "It is the learning signal in temporal-difference learning, and the reason the dopamine result mattered so much to the theory.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What is a Kalman filter?",
            options: [
              "The optimal recursive estimator for a linear system with Gaussian noise",
              "A method for removing line noise from an extracellular voltage recording",
              "An algorithm for finding the principal components of a streaming dataset",
              "A procedure for estimating a neuron's receptive field from white noise stimuli",
            ],
            correctIndex: 0,
            explanation:
              "Recursive means it updates its estimate as each new measurement arrives rather than reprocessing the whole history, which is what makes it usable online.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "Why does the closing lesson list what it left out rather than simply ending?",
            options: [
              "So you know what you are walking into rather than discovering it later",
              "Because the omitted topics are the ones most likely to appear in an assessment",
              "Because Neuromatch requires derived courses to enumerate their omissions",
              "Because the omitted topics were removed for licensing reasons rather than by choice",
            ],
            correctIndex: 0,
            explanation:
              "An honest map of the boundary is the same commitment lesson 1 made about scope, restated at the point where it becomes actionable.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "Which pair of topics does the closing lesson group together as the stochastic side of the curriculum?",
            options: [
              "Hidden dynamics and reinforcement learning",
              "Signal processing and linear algebra",
              "Model fitting and dimensionality reduction",
              "Biological neuron models and dynamical systems",
            ],
            correctIndex: 0,
            explanation:
              "Estimating a changing world state and learning to act on it are both parts of Neuromatch's stochastic processes module.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What does the closing lesson say about the coursebook's availability?",
            options: [
              "It is open and free",
              "It requires a registered student account on the Neuromatch portal to read",
              "It is available only during the three weeks the course is running each July",
              "It is free for the tutorials but paid for the project templates and datasets",
            ],
            correctIndex: 0,
            explanation:
              "That is the practical consequence of the CC BY licensing described in lesson 1, and it is why the next step costs nothing but time.",
            sourceLessonSlug: "where-this-course-stops",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "compneuro-foundations-final",
      title: "Final assessment · Computational Neuroscience Foundations",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "A colleague says this course prepares you to skip Neuromatch's own tutorials. What is wrong with that?",
            options: [
              "It is a companion, and their course is fifteen full days of instruction",
              "Nothing, since the topics covered here match their published module list exactly",
              "Only the causality module would be missing, and it can be read separately in an afternoon",
              "The certificate this course issues is not recognised, but the content is equivalent",
            ],
            correctIndex: 0,
            explanation:
              "Their open-education page gives fifteen full days plus bonus materials, run at eight hours a day in a pod. This course exists to make that followable, not to replace it.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "A course reuses Neuromatch material, credits them, links the source and links the licence, but says nothing about its own edits. What is missing?",
            options: [
              "A statement of what was changed",
              "A licence fee payment, which CC BY 4.0 requires for commercial reuse",
              "Written permission from Neuromatch, which their guidance requires before adaptation",
              "A NonCommercial notice, since CC BY 4.0 forbids charging for derived works",
            ],
            correctIndex: 0,
            explanation:
              "Their guidance asks for attribution, a source link and a licence link, plus an indication of what you changed if you modified anything. There is no fee and no permission step.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which statement about this course's relationship to Neuromatch is accurate?",
            options: [
              "Independent, and neither reviewed nor endorsed by them",
              "Officially endorsed, once the required attribution notice was filed with them",
              "Produced under contract to Neuromatch as a preparatory companion for their students",
              "Reviewed by Neuromatch for accuracy but not formally affiliated with the Academy",
            ],
            correctIndex: 0,
            explanation:
              "Their own guidance says external uses are not officially reviewed or endorsed, which is why lesson 1 states the independence rather than implying an association.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "You are asked whether a model of a neuron is realistic. What does this course say the better question is?",
            options: [
              "Whether what it left out matters for the question asked",
              "Whether every parameter has been measured in the same species and preparation",
              "Whether it reproduces the action potential waveform as well as Hodgkin-Huxley does",
              "Whether it has been fitted to data using maximum likelihood rather than least squares",
            ],
            correctIndex: 0,
            explanation:
              "Which details a model discards is its central claim, so there is no single correct level of detail and realism is the wrong axis.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "A model derives receptive field shape from an efficiency principle and then compares it with measurements. Which kind of model is that?",
            options: [
              "A why model",
              "A what model, because its output is a description of receptive field shape",
              "A how model, because it specifies a procedure that produces the receptive fields",
              "An implementational model, because it concerns the machinery of visual cortex",
            ],
            correctIndex: 0,
            explanation:
              "Starting from a principle and deriving what a system obeying it ought to do is the definition of a why model, and Olshausen and Field's sparse coding is the example.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Which is a correct statement about Marr's levels?",
            options: [
              "They are three descriptions of one system",
              "They are three categories of model, distinguished by the question each one asks",
              "They rank models by how much biological detail each one preserves",
              "They apply only to vision, which is the domain his book was written about",
            ],
            correctIndex: 0,
            explanation:
              "The what, how and why split is about questions; Marr's levels are about levels of description of a single system. Conflating the two is common and worth resisting.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Why can Hodgkin and Huxley's model be wrong in an interesting way, in the lesson's phrasing?",
            options: [
              "It makes claims about parts",
              "Because it was fitted to a single preparation and may not generalise to other species",
              "Because it has four equations, so there are four places an error could hide",
              "Because it describes only the average behaviour of many cells rather than one",
            ],
            correctIndex: 0,
            explanation:
              "A mechanistic model asserts specific components with specific behaviour, and each of those assertions is something an experiment can contradict.",
            sourceLessonSlug: "what-how-why-models",
          },
          {
            prompt: "Which question can a leaky integrate-and-fire model not address at all?",
            options: [
              "Whether a synapse on a distal dendrite has a weaker effect than a proximal one",
              "How the firing rate changes as the injected current is increased",
              "How the membrane potential relaxes toward rest after an input ends",
              "How often the cell fires when the input current is held just above threshold",
            ],
            correctIndex: 0,
            explanation:
              "It is a point neuron with no spatial extent, so dendritic location has nothing in the model to attach to. The other three are exactly what it does describe.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "Which model would you reach for if you needed many cortical firing patterns at low computational cost?",
            options: [
              "Izhikevich's two-variable model",
              "The full Hodgkin-Huxley system, since it reproduces every firing pattern exactly",
              "A multi-compartment cable model, which captures dendritic contributions to bursting",
              "A Wilson-Cowan rate model, which describes populations rather than single cells",
            ],
            correctIndex: 0,
            explanation:
              "That combination, a large catalogue of firing patterns at a cost close to integrate-and-fire, is precisely what the model was designed to provide.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "What is asserted rather than produced in a leaky integrate-and-fire neuron?",
            options: [
              "The spike itself",
              "The membrane time constant, which is imposed rather than derived from resistance and capacitance",
              "The input current, which is set by the experimenter rather than by the network",
              "The resting potential, which the leak drives the voltage toward over time",
            ],
            correctIndex: 0,
            explanation:
              "The threshold-and-reset rule stands in for the conductances that generate and terminate a real action potential, which is the model's biggest single omission.",
            sourceLessonSlug: "the-neuron-a-model-keeps",
          },
          {
            prompt: "A recording has a spike-count Fano factor of 1.0 and an interval coefficient of variation of 1.0. What is the natural first description?",
            options: [
              "Poisson-like firing",
              "Highly regular firing, close to a fixed interval between successive spikes",
              "Bursting, with tight clusters of spikes separated by long silent periods",
              "A cell driven entirely by the mean of its input rather than by fluctuations",
            ],
            correctIndex: 0,
            explanation:
              "Both statistics equal one for a Poisson process, which is why it is the benchmark you compare against rather than a claim about the cell.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "Why does the course introduce the Poisson process before it introduces model fitting?",
            options: [
              "Fitting spike counts requires stating what you believe the noise to be",
              "Because the Poisson distribution is the only one whose likelihood is concave",
              "Because trial averaging must be justified before any fitting can be attempted",
              "Because the Fano factor is the standard goodness-of-fit statistic for encoding models",
            ],
            correctIndex: 0,
            explanation:
              "The generalized linear model in Section 4 treats counts as Poisson rather than Gaussian, and that is a claim about the noise made in Section 2.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "In the balanced regime, why is a cell's output irregular?",
            options: [
              "Excitation and inhibition cancel, so fluctuations drive the threshold crossings",
              "Because the cell receives too few inputs for the law of large numbers to apply",
              "Because the refractory period prevents the cell from firing at a steady rate",
              "Because the input itself is irregular and the cell simply copies its statistics",
            ],
            correctIndex: 0,
            explanation:
              "That was Shadlen and Newsome's answer to Softky and Koch's averaging argument, and it is why a balanced network can produce cortical-looking variability.",
            sourceLessonSlug: "spike-trains-and-variability",
          },
          {
            prompt: "A regression will not run because of a shape mismatch. What should you check first?",
            options: [
              "That the inner dimensions of the two matrices agree",
              "That the data have been centred before the multiplication is attempted",
              "That the covariance matrix has been inverted rather than transposed",
              "That the number of trials exceeds the number of neurons in the recording",
            ],
            correctIndex: 0,
            explanation:
              "An n by k matrix times a k by m matrix gives n by m, and the two inner numbers must match. Most beginner errors in this material are violations of that rule.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Two predictors in a regression are almost perfectly correlated. What is the consequence?",
            options: [
              "The matrix to invert is near-singular and the fit is unstable",
              "The residuals become correlated, which biases the estimate of the noise variance",
              "The likelihood acquires several local maxima that gradient methods may get stuck in",
              "The model overfits, because two predictors carry the information of one",
            ],
            correctIndex: 0,
            explanation:
              "Weight can be traded between them almost freely without changing the predictions, so many parameter sets fit equally well. Regularisation exists partly to repair this.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Which fact links eigenvalues to Section 5's stability analysis?",
            options: [
              "Negative real parts mean the state decays back toward the fixed point",
              "Zero eigenvalues mean the fixed point is stable in every direction at once",
              "Large eigenvalues mean the fixed point attracts trajectories from further away",
              "Complex eigenvalues mean the system has no fixed point in the real state space",
            ],
            correctIndex: 0,
            explanation:
              "Positive real parts mean growth and imaginary parts mean rotation. That reading of the eigenvalues is the whole of local stability analysis.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "A recording of 300 neurons has an activity matrix of rank 5. What can you conclude?",
            options: [
              "Its variation lies in a five-dimensional subspace",
              "Only five of the neurons carry any signal and the rest are recording noise",
              "The recording contains only five distinct stimulus conditions",
              "The covariance matrix has exactly five nonzero entries on its diagonal",
            ],
            correctIndex: 0,
            explanation:
              "Rank counts independent directions rather than active neurons, so all 300 cells can be firing while their joint activity occupies a five-dimensional subspace.",
            sourceLessonSlug: "linear-algebra-you-need",
          },
          {
            prompt: "Someone describes a likelihood as the probability that the parameters are correct. What is the error?",
            options: [
              "That describes a posterior, which needs a prior",
              "There is no error, since a likelihood is a probability distribution over parameters",
              "The error is only in the wording, since the two quantities are always proportional",
              "That describes a prior, which is what you hold before seeing the data",
            ],
            correctIndex: 0,
            explanation:
              "A likelihood is the probability of the data read as a function of the parameters. It does not integrate to one over the parameters and is not a distribution over them.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "A first-order system is 63 percent of the way to its asymptote. How much time has passed?",
            options: [
              "One time constant",
              "Half a time constant, which is why the quantity is sometimes called the half-life",
              "Three time constants, at which point the system is close to fully settled",
              "It depends on the size of the step input rather than on the time constant",
            ],
            correctIndex: 0,
            explanation:
              "The figure is one minus the reciprocal of Euler's number. About three time constants gets you to roughly 95 percent.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "A simulation of a neuron model produces oscillations that vanish when the step size is halved. What happened?",
            options: [
              "A numerical artefact of the integration step",
              "A genuine bifurcation that the finer simulation moved past",
              "A rounding error in the computation of the membrane time constant",
              "An instability in the model's threshold-and-reset rule at high firing rates",
            ],
            correctIndex: 0,
            explanation:
              "Too large a step makes Euler integration inaccurate or unstable, and the resulting behaviour tells you about your solver rather than about neurons.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "Why does the course introduce precision alongside variance?",
            options: [
              "Precisions add when independent estimates are combined",
              "Because precision is the quantity reported in the neuroscience literature by convention",
              "Because precision has the same units as the measured quantity while variance does not",
              "Because precision is required to convert spike counts into firing rates correctly",
            ],
            correctIndex: 0,
            explanation:
              "That additivity is the mechanism behind Gaussian cue combination in Section 6, which is why the term is introduced two sections earlier.",
            sourceLessonSlug: "probability-calculus-and-odes",
          },
          {
            prompt: "You fit a model by least squares without stating a noise model. What have you assumed anyway?",
            options: [
              "Independent Gaussian noise of constant variance",
              "Nothing, because least squares is a purely geometric criterion with no probability attached",
              "Poisson noise, which is the default for count data in most software packages",
              "That the residuals are uncorrelated with each other but may have any distribution",
            ],
            correctIndex: 0,
            explanation:
              "Under exactly that noise model, minimising squared error is maximising likelihood. Reaching for least squares feels like doing nothing and is in fact a commitment.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Two estimates of the same parameter differ by a factor of two. What do you need before you can call that a difference?",
            options: [
              "An uncertainty on each estimate",
              "A larger dataset, since a factor of two is never reliable in small samples",
              "A likelihood ratio test comparing the two models that produced the estimates",
              "A cross-validated score for each model on the same held-out data",
            ],
            correctIndex: 0,
            explanation:
              "A point estimate alone cannot separate a real difference from sampling noise, and the bootstrap gives you the spread without needing a formula for it.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Why is a best fit not evidence that the model family was the right one?",
            options: [
              "It is a comparison among parameters, not among families",
              "Because best fit is defined only up to the numerical tolerance of the optimiser used",
              "Because families can only be compared using an information criterion, never a fit",
              "Because the fit was computed on training data and families must be compared on test data",
            ],
            correctIndex: 0,
            explanation:
              "Within the family you chose and under the noise you assumed, these parameters are best. Whether a better family exists is a question the fit never asked.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "Why does maximum likelihood extend to cases where least squares does not?",
            options: [
              "Any noise model you can write down gives you a likelihood to maximise",
              "Because maximum likelihood needs no assumption about how the data were generated",
              "Because likelihoods can be compared across datasets while squared errors cannot",
              "Because likelihood estimates are unbiased even when the model family is wrong",
            ],
            correctIndex: 0,
            explanation:
              "Squared error is tied to the Gaussian constant-variance case. Once counts are Poisson or responses are binary, you can still write the probability of the data and maximise it.",
            sourceLessonSlug: "least-squares-and-likelihood",
          },
          {
            prompt: "You are modelling spike counts and reach for ordinary linear regression. What is the specific problem?",
            options: [
              "Counts are non-negative integers with mean-dependent variance",
              "Counts cannot be predicted from a stimulus without a nonlinear filter stage first",
              "Counts are correlated across neighbouring time bins, which regression cannot handle",
              "Counts must be converted to rates before any statistical model can be applied",
            ],
            correctIndex: 0,
            explanation:
              "A Gaussian is continuous, unbounded below, and has a variance unrelated to its mean, so it puts probability where counts cannot go. That is what the generalized linear model fixes.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Why does the field default to generalized linear models rather than something more expressive?",
            options: [
              "The likelihood has no local maxima, so fitting is reliable",
              "Because more expressive models cannot represent a receptive field at all",
              "Because generalized linear models always predict held-out data better in practice",
              "Because they require no choice of nonlinearity, which removes an arbitrary decision",
            ],
            correctIndex: 0,
            explanation:
              "Paninski's condition on the nonlinearity rules out non-global local maxima, so gradient ascent reaches the global answer and two people fitting the same data agree.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "A decoder trained on 400 neurons and 40 trials reports 95 percent accuracy on the training set. What should you say?",
            options: [
              "Report the held-out score, because that number is uninformative",
              "That the population clearly represents the decoded variable very strongly",
              "That the model must be underfitting, since accuracy is below one hundred percent",
              "That the result is fine as long as the decoder used a linear rather than nonlinear readout",
            ],
            correctIndex: 0,
            explanation:
              "With many dimensions and few examples, something will separate the classes. Only performance on genuinely held-out data says anything.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Why can splitting neural data by block be more honest than splitting it at random?",
            options: [
              "Adjacent trials resemble each other, so a random split leaks across the divide",
              "Because block splits give the training set more data than random splits do",
              "Because random splits cannot be reproduced without recording the random seed",
              "Because block splits guarantee that each fold contains every stimulus condition",
            ],
            correctIndex: 0,
            explanation:
              "Rates drift, animals adapt and recordings shift, so nearby trials are not independent and a random split can put near-duplicates on opposite sides.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "Adding a parameter improves the training fit slightly. What does Akaike's criterion ask?",
            options: [
              "Whether the likelihood gained pays for the parameter added",
              "Whether the new parameter is statistically significant at the conventional threshold",
              "Whether the improvement survives when the data are resampled with replacement",
              "Whether the parameter has a plausible biological interpretation in the system studied",
            ],
            correctIndex: 0,
            explanation:
              "Twice the parameter count minus twice the maximised log-likelihood, lower being better, so the fit has to improve by enough to cover the penalty.",
            sourceLessonSlug: "encoding-models-and-generalisation",
          },
          {
            prompt: "A paper reports that a population is three-dimensional in a task with three conditions. What is the concern?",
            options: [
              "A simple task can only produce a low-dimensional answer",
              "Three dimensions is too few for any principal component analysis to be meaningful",
              "The components should have been computed on single trials rather than trial averages",
              "The eigenvalues were probably not tested against a shuffled control distribution",
            ],
            correctIndex: 0,
            explanation:
              "Dimensionality found is a joint property of system, task and recording. Stringer and colleagues found high-dimensional responses with a much richer stimulus set.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "Which claim does a two-dimensional projection of a population recording actually support?",
            options: [
              "Most variance in this recording lies along two directions",
              "The underlying circuit has two independent degrees of freedom",
              "Any further components consist entirely of measurement noise",
              "A decoder using more than two dimensions would necessarily overfit",
            ],
            correctIndex: 0,
            explanation:
              "Anything stronger extrapolates from one dataset to a claim about the system, which the lesson names as the most common overreach in this literature.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "You want the population direction most predictive of reach speed. Why is the first principal component the wrong tool?",
            options: [
              "It is unsupervised and finds variance, not your variable",
              "It is computed on centred data, so it cannot represent an absolute speed",
              "It is orthogonal to every other component, which prevents it from being predictive",
              "It requires more trials than neurons, which population recordings rarely provide",
            ],
            correctIndex: 0,
            explanation:
              "Any alignment between the largest-variance direction and your variable is a coincidence you should test rather than assume, and a supervised method asks for it directly.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "A population's activity lies on a curved surface. What does that do to a principal component analysis of it?",
            options: [
              "Extra components appear that describe curvature rather than signal",
              "The eigenvalues become complex, so variance explained cannot be computed",
              "The covariance matrix becomes singular and cannot be decomposed at all",
              "The first component captures the curvature and the rest capture the signal",
            ],
            correctIndex: 0,
            explanation:
              "Each component is a fixed weighted sum of neurons, so a linear method needs additional axes to approximate a curve, which inflates any dimensionality count.",
            sourceLessonSlug: "dimensionality-reduction",
          },
          {
            prompt: "How do you tell whether a fixed point of a nonlinear system is stable?",
            options: [
              "Linearise around it and check the real parts of the eigenvalues",
              "Simulate from that exact point and see whether the system stays there",
              "Compute the determinant of the system matrix and check that it is positive",
              "Check whether the fixed point lies inside the region the trajectories occupy",
            ],
            correctIndex: 0,
            explanation:
              "Starting exactly at a fixed point tells you nothing, because the system stays there whether the point is stable or not. Stability is about what happens nearby.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "A model of head direction should use which structure?",
            options: [
              "A ring of stable states",
              "A single point attractor, since the animal faces one direction at a time",
              "A line of stable states running between the two extremes of the range",
              "A chaotic regime, which allows the representation to explore all directions",
            ],
            correctIndex: 0,
            explanation:
              "Head direction is circular, so the topology of the attractor has to be circular too. Zhang proposed exactly that in 1996.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "What would falsify a continuous attractor account of a neural representation?",
            options: [
              "Perturbations along the attractor decaying like those across it",
              "The representation being maintained accurately for many seconds without input",
              "Firing rates varying smoothly as the represented variable is changed",
              "The network containing both excitatory and inhibitory connections",
            ],
            correctIndex: 0,
            explanation:
              "The account predicts asymmetry: persistence along the attractor and decay across it, with noise showing up as drift. Symmetric decay would contradict it.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "Why does the lesson say that a recurrent network settling into a stable state is not automatic?",
            options: [
              "Random networks can be chaotic above a coupling strength",
              "Because recurrent networks always oscillate unless inhibition is added deliberately",
              "Because settling requires the connectivity matrix to be symmetric, which is rare",
              "Because spiking networks cannot have fixed points, only continuous attractors",
            ],
            correctIndex: 0,
            explanation:
              "Sompolinsky, Crisanti and Sommers showed exactly that, which is why a model asserting an attractor structure is making a claim rather than describing a default.",
            sourceLessonSlug: "dynamics-and-attractors",
          },
          {
            prompt: "An observer is told to respond as accurately as possible rather than as quickly as possible. Which drift-diffusion parameter changes?",
            options: [
              "Boundary separation",
              "Drift rate, because instructions change how informative the stimulus is",
              "Non-decision time, because a careful observer encodes the stimulus for longer",
              "Starting point, because caution shifts the accumulator away from both bounds",
            ],
            correctIndex: 0,
            explanation:
              "Caution is boundary separation. The stimulus has not changed, so the quality of the evidence and the encoding and motor delays should not change either.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Why is a model that fits reaction-time distributions well still not proof of a mechanism?",
            options: [
              "Several accumulation schemes produce similar distributions",
              "Because reaction times are too variable for any model to be distinguished from another",
              "Because the model has four parameters, which is too few to constrain a mechanism",
              "Because the fit is computed on the same data used to estimate the parameters",
            ],
            correctIndex: 0,
            explanation:
              "The parameters are also estimated per subject rather than measured, and a ramping trial average can come from trials that stepped at different times.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "What is the connection between Wald's sequential test and the psychology of decisions?",
            options: [
              "The drift-diffusion model is its continuous-time counterpart",
              "Wald's test was derived from reaction-time data collected in the 1940s",
              "The test predicts firing rates in parietal cortex directly without free parameters",
              "The test applies only when the two alternatives are equally probable in advance",
            ],
            correctIndex: 0,
            explanation:
              "That correspondence is what carries an optimality argument from statistics into a model of behaviour and, later, of neural firing.",
            sourceLessonSlug: "drift-diffusion-and-decisions",
          },
          {
            prompt: "Vision is degraded in a cue combination task. What does an optimal observer do?",
            options: [
              "Shift weight toward touch, in proportion to the reliabilities",
              "Ignore vision entirely, since a degraded channel adds no usable information",
              "Keep the weights fixed, since they are learned over long experience",
              "Increase the weight on vision to compensate for the reduced signal quality",
            ],
            correctIndex: 0,
            explanation:
              "Weights follow precision, and Ernst and Banks measured that shift experimentally by degrading the visual signal and watching the combined estimate move.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "A claim is made that some perceptual behaviour is Bayes-optimal. What is the sharpest question to ask?",
            options: [
              "Where did the prior come from",
              "How many participants were tested and was the effect statistically significant",
              "Whether the likelihood was assumed Gaussian rather than measured empirically",
              "Whether the behaviour was measured in a laboratory or in a natural setting",
            ],
            correctIndex: 0,
            explanation:
              "A freely fitted prior with a freely fitted likelihood can accommodate a great deal. The strong results imposed, measured or predicted the prior in advance.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Why is a systematic perceptual error compatible with optimal inference?",
            options: [
              "A prior pulls the estimate in a predictable direction",
              "Because optimal inference minimises error only on average across all stimuli",
              "Because the likelihood is always biased by the noise in the sensory receptors",
              "Because optimality applies to the decision rule but not to the perceptual estimate",
            ],
            correctIndex: 0,
            explanation:
              "That is why the pattern of errors becomes a measurement of the prior, as in the slow-speed prior that accounts for low-contrast motion illusions.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Showing that behaviour is near-optimal establishes a claim at which of Marr's levels?",
            options: [
              "The computational level",
              "The algorithmic level, since optimality specifies the steps performed",
              "The implementational level, since it constrains which circuits are possible",
              "All three at once, which is what makes optimality results so powerful",
            ],
            correctIndex: 0,
            explanation:
              "It says what problem is being solved. Many mechanisms can approximate the same optimum, including some that never represent a probability, which is Knill and Pouget's point.",
            sourceLessonSlug: "bayes-in-perception",
          },
          {
            prompt: "Which topic would you have to go to Neuromatch's own material for?",
            options: [
              "The Kalman filter",
              "The bias-variance trade-off, which this course leaves to their model fitting day",
              "The leaky integrate-and-fire neuron, which is only covered in their Python workshops",
              "Principal component analysis, which this course mentions without explaining",
            ],
            correctIndex: 0,
            explanation:
              "Hidden dynamics, reinforcement learning, optimal control, signal processing and causality are the named omissions. The other three all have sections here.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What does the course say you should do immediately after finishing it?",
            options: [
              "Work Neuromatch's prerequisite refresher days in their published order",
              "Apply for a place on the next Neuromatch course as soon as applications open",
              "Read every cited paper in the sources sections before touching any code",
              "Repeat the final assessment until every question has been answered correctly",
            ],
            correctIndex: 0,
            explanation:
              "Two Python workshops, then linear algebra, then calculus, then statistics, and then the modelling day. The coursebook is open and free, so the next step costs only time.",
            sourceLessonSlug: "where-this-course-stops",
          },
          {
            prompt: "What did the dopamine result of Schultz, Dayan and Montague connect?",
            options: [
              "Temporal-difference learning theory to recorded physiology",
              "Attractor network theory to the maintenance of working memory in prefrontal cortex",
              "Bayesian inference to the combination of visual and haptic sensory cues",
              "Evidence accumulation to the ramping of firing rates in parietal cortex",
            ],
            correctIndex: 0,
            explanation:
              "Dopamine responses behaving like a reward prediction error tied the learning signal used in the theory to a measurable neural response.",
            sourceLessonSlug: "where-this-course-stops",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════
// RESEARCH CHECKS FILED 2026-08-31 in src/lib/research-checks.ts:
//   compneuro-dayan-abbott-triad, compneuro-paninski-2004-result,
//   compneuro-ernst-banks-degraded-vision, compneuro-cunningham-yu-motivation
