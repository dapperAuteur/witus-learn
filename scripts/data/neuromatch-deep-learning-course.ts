// Authored "Deep Learning Foundations": the private companion course BAM asked for (plans/74),
// sitting UNDERNEATH Neuromatch Academy's own Deep Learning course rather than reproducing it.
// NMA Deep Learning is three weeks of full-time tutorials; this is the substrate that makes those
// tutorials followable: tensors and shapes, reverse-mode autodiff, the training loop, linear models
// as networks, MLPs and activations, optimizers, generalization and regularization, convnets,
// recurrence, attention and transformers, and an honest map of generative models and RL.
//
// Section order deliberately tracks the module list on Neuromatch's own coursebook (Basics and
// PyTorch, Linear Deep Learning, Multi Layer Perceptrons, Optimization, Regularization, Convnets,
// Generative Models, Diffusion, Time Series and NLP, Attention and Transformers, Unsupervised and
// Self Supervised, Basic and Advanced RL) so a learner who finishes here can open their coursebook
// and recognise where they are. NO text, code, figures or exercises were copied: every word here is
// original, and the CC BY 4.0 attribution + modification notice lives in lesson 1.
//
// Sources are primary and every one was fetched before it was cited: Rumelhart, Hinton & Williams
// (1986), Cybenko (1989), LeCun et al. (1998), Krizhevsky et al. (2012), Srivastava et al. (2014),
// Kingma & Ba (2014), He et al. (2015), Ioffe & Szegedy (2015), Goodfellow et al. (2016), Vaswani
// et al. (2017), Ho et al. (2020), the PyTorch autograd notes, and the NMA coursebook itself.

import type { AuthoredCourse } from "./authored-course";

export const NEUROMATCH_DEEP_LEARNING_COURSE: AuthoredCourse = {
  title: "Deep Learning Foundations",
  description:
    "An independent, private companion to Neuromatch Academy's Deep Learning course, built to make their material followable rather than to replace it. Neuromatch runs three weeks of full-time tutorials; this course is the substrate underneath them. You will learn what a tensor is and why shape errors dominate a beginner's day, how reverse-mode automatic differentiation turns the chain rule into a computational graph, and the five lines of the training loop that every deep learning script is a variation on. Then the model families in the order Neuromatch teaches them: linear models as one-layer networks, why stacking linear layers without a nonlinearity collapses back to a single layer, multilayer perceptrons and activation functions, optimizers from plain SGD to Adam, the train/validation/test discipline that separates a real result from a memorized one, weight decay and dropout and augmentation, convolutional networks, recurrence and its vanishing-gradient problem, and self-attention and the transformer. It closes with an honest, non-hand-waving map of generative models and reinforcement learning, which are whole courses of their own. This is NOT Neuromatch's curriculum, is not affiliated with or endorsed by Neuromatch, and does not include their notebooks, projects, pods or teaching assistants. It adapts nothing verbatim: their materials are CC BY 4.0, the attribution and the statement of what was changed are in lesson 1, and every claim here carries its own primary source.",
  lessons: [
    // ── Section 1 · Orientation and the training loop ─────────────────────────
    {
      slug: "scope-and-attribution",
      title: "1 · What this course is, and what it is not",
      section: "Orientation and the training loop",
      body: `You are about to spend a few hours on the ideas that Neuromatch Academy's Deep Learning course assumes you already have. That is the whole design. It is worth being blunt about the boundary before you start, because a companion course that pretends to be the real thing wastes your time twice: once while you take it, and again when you discover the gap.

**What Neuromatch Deep Learning actually is.** Three weeks, full time, in a small pod with a teaching assistant, working through Jupyter notebooks in Python. Their published module list runs: Basics and PyTorch, Linear Deep Learning, Multi Layer Perceptrons, Optimization, Regularization, Convnets, Generative Models, Diffusion Generative Models, Time Series and Natural Language Processing, Attention and Transformers, Unsupervised and Self Supervised Learning, Basic Reinforcement Learning, Advanced Reinforcement Learning, plus a bonus day on deploying models and a group project (Neuromatch Academy, n.d.). You cannot compress that into a reading course, and this one does not try.

**What this course is.** The concepts, the vocabulary, and the small amount of mathematics that make those notebooks legible instead of intimidating. When their tutorial says "detach the tensor before you log it", you will know what a tensor is, what detaching does, and why leaving it attached quietly grows a graph until you run out of memory. When a cell says \`optimizer.zero_grad()\`, you will know that PyTorch accumulates gradients by default and what breaks if you forget. That is the job here: not to teach you deep learning end to end, but to remove the layer of unexplained machinery that makes a first pass through their material feel like reading a foreign language.

**What it deliberately leaves out.** Hands-on coding. There is no notebook here, no GPU, no dataset to download, no project. Reading about a training loop is not the same as debugging one at two in the morning, and anyone who tells you otherwise is selling something. Treat this as the map, and treat Neuromatch's tutorials, or any other set of notebooks you can actually run, as the territory.

## Attribution and licence

This course is **independent**. It is not produced by, endorsed by, affiliated with, or reviewed by Neuromatch.

Neuromatch publishes its course content under the **Creative Commons Attribution 4.0 International licence (CC BY 4.0)**, which carries no NonCommercial and no ShareAlike clause. Their own statement, quoted exactly as it appears on the coursebook and the content repository, reads: "The contents of this repository are shared under under a Creative Commons Attribution 4.0 International License. Software elements are additionally licensed under the BSD (3-Clause) License." (The doubled "under" is theirs; it is reproduced rather than silently corrected because this is a quotation.) Their attribution page asks reusers to "include attribution, a link to the source materials, and a link to the CC-BY 4.0 license" and, if you modify anything, to "indicate what you changed" (Neuromatch, n.d.).

- **Source materials:** the Neuromatch Academy Deep Learning coursebook, https://deeplearning.neuromatch.io/tutorials/intro.html , and its content repository, https://github.com/NeuromatchAcademy/course-content-dl
- **Licence:** https://creativecommons.org/licenses/by/4.0/

**What was taken, and what was changed.** What is adapted from Neuromatch is the **order and grouping of topics**: this course's four sections track their module sequence so that finishing here leaves you able to open their coursebook and know where you are. Nothing else was taken. No text, code, notebook, figure, exercise or quiz question was copied or paraphrased from their materials. Every sentence, every quiz question and every explanation in this course was written from scratch, and every factual claim is cited to a primary source of its own (the original papers, the PyTorch documentation, the Goodfellow, Bengio and Courville textbook), not to Neuromatch. The topic set is also **narrowed**: their projects, pods, teaching assistants, deployment day and all hands-on coding are absent here by design.

## Vocabulary
- **Companion course**: a course built to make another body of material followable, which succeeds when you leave it and go read that material.
- **CC BY 4.0**: a Creative Commons licence permitting reuse and adaptation, including commercially, on condition of attribution, a link to the licence, and an indication of changes.
- **Coursebook**: Neuromatch's published, browsable set of tutorial notebooks, the thing this course is a companion to.

## Sources
- Neuromatch Academy. (n.d.). *Neuromatch Academy: Deep Learning* [course content]. https://deeplearning.neuromatch.io/tutorials/intro.html
- Neuromatch. (n.d.). *Open education resources* (licence and attribution guidance). https://neuromatch.io/open-education-resources/
- Creative Commons. (n.d.). *Attribution 4.0 International (CC BY 4.0)*. https://creativecommons.org/licenses/by/4.0/`,
    },
    {
      slug: "tensors-and-shapes",
      recallContent: [
        { prompt: "What is this course for, and what is it explicitly not?", answer: "It is the concepts, vocabulary and small amount of maths that make Neuromatch's Deep Learning notebooks legible. It is not their curriculum, is not affiliated with them, and contains no hands-on coding, no projects and no pods." },
        { prompt: "Under what licence does Neuromatch publish its course content, and what does reusing it oblige you to do?", answer: "CC BY 4.0, with no NonCommercial and no ShareAlike clause. You must give attribution, link to the source materials, link to the licence, and indicate what you changed." },
      ],
      title: "2 · Tensors, shapes, and the errors you will actually hit",
      section: "Orientation and the training loop",
      body: `A **tensor** is an array of numbers with a shape. That is nearly the whole definition. A scalar is a tensor of shape \`()\`, a vector of length 3 has shape \`(3,)\`, a greyscale image might be \`(28, 28)\`, a batch of 64 colour images is commonly \`(64, 3, 224, 224)\` meaning batch, channels, height, width. Deep learning frameworks call them tensors rather than arrays for two reasons that matter: a tensor can live on a GPU, and a tensor can carry a record of how it was computed so that gradients can flow back through it.

**Shape is the thing you will fight.** In practice most of a beginner's error messages are shape mismatches, and they are not a sign of confusion about deep learning. They are a sign that matrix multiplication has rules. If \`A\` is \`(n, k)\` and \`B\` is \`(k, m)\`, then \`A @ B\` is \`(n, m)\`, and the two inner dimensions must agree. A linear layer that expects 128 features will refuse a batch of 256-feature vectors, and it should. The habit that fixes this permanently is to write the expected shape as a comment on every line while you are learning, and to print \`x.shape\` constantly. Experienced practitioners do not stop doing this; they just do it faster.

**Broadcasting** is the rule that lets tensors of different shapes combine without an explicit loop. Align the shapes from the right; a dimension of size 1 stretches to match, a missing dimension is treated as 1, and anything else is an error. So \`(64, 10)\` plus \`(10,)\` works and adds the same bias vector to all 64 rows. \`(64, 10)\` plus \`(64,)\` does not, because aligning from the right compares 10 against 64. This is the single most common silent bug in numerical code: a shape that broadcasts when you did not intend it to produces a wrong answer rather than an exception. If you meant to add a per-row value, you say so explicitly by reshaping to \`(64, 1)\`.

**Dtype and device.** Every tensor also has a data type (usually 32-bit float for training, sometimes 16-bit for speed and memory) and a device (CPU or a particular GPU). Two tensors must agree on both before they can be combined. "Expected all tensors to be on the same device" is not a deep problem; it means you moved the model to the GPU and forgot the batch, or the reverse.

**Why not just use NumPy.** You can, and for anything without gradients you probably should. What a deep learning framework adds is the two things above: transparent execution on accelerators, and automatic differentiation, which is the subject of the next lesson. Everything else in PyTorch's tensor interface was deliberately made to look like NumPy so that the knowledge transfers.

:::reveal A batch of tensors has shape (64, 10) and you add a tensor of shape (64,). Why does that fail, and what shape did you actually want? ||| Broadcasting aligns shapes from the right, so it compares 10 against 64 and they do not match. To add one value per row you reshape to (64, 1), which then stretches across the 10 columns.

## Vocabulary
- **Tensor**: an array of numbers with a shape, a data type and a device, able to live on a GPU and to carry a record of how it was computed.
- **Shape**: the tuple giving the size of each dimension, for example (64, 3, 224, 224) for a batch of 64 three-channel 224 by 224 images.
- **Broadcasting**: the rule that combines differently shaped tensors by aligning dimensions from the right and stretching any dimension of size 1.
- **Dtype**: the numeric type of a tensor's entries, typically 32-bit float in training and sometimes 16-bit to save memory and time.

## Sources
- Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep learning*. MIT Press. https://www.deeplearningbook.org/
- PyTorch. (n.d.). *Autograd mechanics*. PyTorch documentation. https://docs.pytorch.org/docs/stable/notes/autograd.html`,
    },
    {
      slug: "autograd-and-the-chain-rule",
      recallContent: [
        { prompt: "State the broadcasting rule in one sentence.", answer: "Align the shapes from the right, stretch any dimension of size 1 to match, treat a missing dimension as 1, and raise an error on anything else." },
        { prompt: "Name the two things a deep learning framework adds on top of a NumPy-style array.", answer: "Transparent execution on accelerators such as GPUs, and automatic differentiation, which records how a tensor was computed so gradients can flow back through it." },
      ],
      title: "3 · Autograd: the chain rule, kept as a graph",
      section: "Orientation and the training loop",
      body: `Training a network means adjusting its parameters to reduce a loss. To adjust them sensibly you need to know, for every single parameter, how the loss would change if that parameter changed slightly. That is the **gradient**, and computing it by hand for a network with a hundred million parameters is not on the table. **Automatic differentiation** does it for you, exactly, and it is the reason the field looks the way it does.

**The mechanism is the chain rule plus bookkeeping.** As your code runs, the framework records each operation into a directed acyclic graph whose leaves are the inputs and parameters and whose root is the loss. PyTorch's own documentation describes the payoff precisely: "By tracing this graph from roots to leaves, you can automatically compute the gradients using the chain rule" (PyTorch, n.d.). Note the direction. The graph is built forwards while you compute, then traversed backwards to get the derivatives. This is **reverse-mode** automatic differentiation, and it is the right choice here for a structural reason: reverse mode computes the derivative of one output with respect to many inputs in roughly the cost of one forward pass, and a loss is exactly one output with respect to very many parameters.

**Backpropagation is this idea, named earlier.** Rumelhart, Hinton and Williams described the procedure in 1986 in terms that still read as a definition of training: it "repeatedly adjusts the weights of the connections in the network so as to minimize a measure of the difference between the actual output vector of the net and the desired output vector" (Rumelhart et al., 1986). Backpropagation is the application of reverse-mode differentiation to a layered network; autograd is the general machinery that makes it automatic for whatever you happened to write.

**The three practical facts that follow.**

1. **Gradients accumulate.** Calling backward twice adds the second set of gradients on top of the first. That is a deliberate feature (it lets you sum gradients over several small batches when a big one will not fit in memory), and it is why every training loop zeroes the gradients before each step. Forgetting is a classic bug: the loss wanders, nothing errors.
2. **The graph costs memory.** Every intermediate value needed for the backward pass is held until the backward pass happens. This is why you wrap evaluation in a no-gradient context, and why accumulating a running loss without detaching it keeps the whole history alive and eventually exhausts memory.
3. **Only floating-point leaves that ask for gradients get them.** Parameters do by default; your input data usually does not, because you are not trying to improve the data.

:::reveal Why is reverse-mode automatic differentiation the right choice for training a network, rather than forward mode? ||| Reverse mode gets the derivative of ONE output with respect to MANY inputs for roughly the cost of one forward pass. A loss is a single scalar output and a network has very many parameters, which is exactly that case.

## Vocabulary
- **Gradient**: the vector of partial derivatives of the loss with respect to each parameter, telling you how the loss responds to a small change in each one.
- **Automatic differentiation**: computing exact derivatives by recording the operations a program performs and applying the chain rule to that record.
- **Reverse mode**: traversing the recorded graph from the loss backwards to the parameters, cheap when there are many inputs and one output.
- **Backpropagation**: reverse-mode differentiation applied to a layered neural network, described by Rumelhart, Hinton and Williams in 1986.

## Sources
- Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. *Nature, 323*, 533-536. https://doi.org/10.1038/323533a0
- PyTorch. (n.d.). *Autograd mechanics*. PyTorch documentation. https://docs.pytorch.org/docs/stable/notes/autograd.html`,
    },
    {
      slug: "the-training-loop",
      recallContent: [
        { prompt: "Why do training loops zero the gradients before each step?", answer: "Because gradients accumulate by default. Calling backward twice adds the second set on top of the first, which is useful for summing over small batches but silently corrupts an ordinary step if you forget." },
        { prompt: "What did Rumelhart, Hinton and Williams describe backpropagation as doing?", answer: "Repeatedly adjusting the weights of the connections in the network so as to minimize a measure of the difference between the actual output vector and the desired output vector." },
      ],
      title: "4 · The training loop, which every script is a variation on",
      section: "Orientation and the training loop",
      body: `Almost every deep learning script you will ever read is the same five steps in a loop. Learn the skeleton once and unfamiliar code stops being unfamiliar.

\`\`\`
for each epoch:
  for each batch of (inputs, targets):
    predictions = model(inputs)          # 1. forward
    loss = loss_fn(predictions, targets) # 2. score the prediction
    optimizer.zero_grad()                # 3. clear last step's gradients
    loss.backward()                      # 4. backward, fills .grad on every parameter
    optimizer.step()                     # 5. update parameters using .grad
\`\`\`

**Forward.** The model turns inputs into predictions, and autograd records the graph as it goes.

**Loss.** A single number saying how wrong the batch was. Which loss you choose is a modelling decision, not a detail: mean squared error for regression, cross-entropy for classification. Cross-entropy is the one to internalise, because it is the standard classification loss and it pairs with a softmax output. It is small when the model puts high probability on the true class and grows without bound as that probability approaches zero, which is what makes confident wrong answers expensive.

**Zero, backward, step.** Zeroing clears the previous iteration's accumulated gradients. Backward walks the graph and deposits a gradient on every parameter. Step applies the update rule. Getting these three out of order, or dropping the first, is the most common structural bug in a hand-written loop.

**Epochs and batches.** One **epoch** is one pass over the whole training set. A **batch** is the subset used for one update. Batch size is a real tradeoff and not a free parameter: bigger batches give a less noisy gradient estimate and use the hardware better, smaller batches give more updates per epoch and their noise acts as a mild regularizer. There is no universally correct value, which is why it is one of the first things people tune.

**Two more habits from the start.** Put the model in training mode while training and evaluation mode while evaluating, because layers like dropout and batch normalisation behave differently in the two (both appear later in this course). And evaluate under a no-gradient context, which skips the graph bookkeeping entirely and is both faster and lighter.

**What "learning" means here.** Nothing mystical. Gradient descent takes a step downhill on the loss surface, proportional to the gradient and scaled by the **learning rate**. Too large and the step overshoots and the loss diverges. Too small and training crawls or stalls in a flat region. Almost every "the model will not train" story ends at the learning rate, and that is the subject of a later lesson.

:::reveal Write out the five steps of a training loop in order, and say what goes wrong if you drop the zeroing step. ||| Forward, compute the loss, zero the gradients, backward, then step. Without zeroing, gradients from previous batches accumulate on top of the current ones, so each update is based on a stale sum. Nothing errors, the loss just fails to converge sensibly.

## Vocabulary
- **Epoch**: one complete pass over the training set; a batch is the subset of examples used for a single parameter update.
- **Loss function**: the single number scoring how wrong a batch of predictions was, for example mean squared error for regression or cross-entropy for classification.
- **Cross-entropy**: the standard classification loss, small when the true class gets high probability and growing without bound as that probability approaches zero.
- **Learning rate**: the scale factor on each gradient step, the parameter most often responsible for a model that will not train.

## Sources
- Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep learning*. MIT Press. https://www.deeplearningbook.org/
- PyTorch. (n.d.). *Autograd mechanics*. PyTorch documentation. https://docs.pytorch.org/docs/stable/notes/autograd.html`,
    },
    {
      slug: "quiz-orientation",
      title: "5 · Section quiz: orientation and the training loop",
      section: "Orientation and the training loop",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What licence does Neuromatch publish its course content under?",
            options: [
              "CC BY 4.0",
              "CC BY-NC-SA 4.0, which forbids commercial reuse and requires derivatives to carry the same licence",
              "A bespoke academic licence permitting classroom use only, with written permission needed for anything else",
              "The BSD 3-Clause licence applied to both the written content and the software elements",
            ],
            correctIndex: 0,
            explanation: "Neuromatch shares its content under Creative Commons Attribution 4.0 International, with no NonCommercial and no ShareAlike clause. BSD 3-Clause applies additionally to the software elements only, not to the written content.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Reusing Neuromatch material under CC BY 4.0 obliges you to do three things. Which set is correct?",
            options: [
              "Attribute, link the source materials, link the licence, and indicate any changes",
              "Obtain written permission, pay a licence fee scaled to audience size, and file an annual usage report",
              "Release your derivative under the identical licence and make it available at no charge to all users",
              "Restrict the derivative to non-commercial educational settings and remove any Neuromatch branding entirely",
            ],
            correctIndex: 0,
            explanation: "CC BY 4.0 requires attribution, a link to the source materials, a link to the licence, and an indication of what you changed. ShareAlike and NonCommercial obligations belong to other Creative Commons licences and do not apply here.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which is an accurate statement of this course's scope?",
            options: [
              "A companion that teaches the substrate under Neuromatch's tutorials",
              "An official Neuromatch preparatory track, reviewed and endorsed by their curriculum committee before publication",
              "A condensed but complete reproduction of the three-week Deep Learning curriculum, notebooks and projects included",
              "A hands-on coding course in which you build and train the same models Neuromatch assigns to its pods",
            ],
            correctIndex: 0,
            explanation: "It is independent, unaffiliated, unendorsed, and deliberately contains no notebooks, projects or pods. Its job is to make their material legible, not to substitute for it.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "A tensor of shape (64, 10) is added to a tensor of shape (10,). What happens?",
            options: [
              "It works, adding the same 10 values to every row",
              "It raises a shape error, because a two-dimensional tensor can never be combined with a one-dimensional one",
              "It works, but only after the smaller tensor is silently transposed into a column of length 10",
              "It works and produces a tensor of shape (64, 10, 10), forming the outer sum of the two operands",
            ],
            correctIndex: 0,
            explanation: "Broadcasting aligns shapes from the right, so 10 matches 10 and the missing leading dimension is treated as 1 and stretched to 64. The result keeps shape (64, 10).",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "A tensor of shape (64, 10) is added to a tensor of shape (64,). What happens?",
            options: [
              "It fails, because aligning from the right compares 10 against 64",
              "It works, adding one value per row, because the leading dimensions match at 64 in both operands",
              "It works after an automatic transpose, because frameworks reorder operands to make dimensions agree",
              "It works but produces a scalar, because a one-dimensional operand is summed before broadcasting begins",
            ],
            correctIndex: 0,
            explanation: "Broadcasting always aligns from the RIGHT, so the 64 in the second operand is compared with the 10 in the first. To add one value per row you reshape to (64, 1).",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Why is a silent broadcast considered more dangerous than a shape error?",
            options: [
              "It produces a wrong answer instead of an exception",
              "It permanently corrupts the stored parameters of the model, requiring the whole training run to be restarted",
              "It converts the tensor to a lower precision data type, which compounds rounding error across every later layer",
              "It moves the tensor back to the CPU, so training continues correctly but many times more slowly than expected",
            ],
            correctIndex: 0,
            explanation: "An exception stops you and tells you where. A shape that broadcasts when you did not intend it to computes something plausible and keeps going, so the bug survives into your results.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Two properties beyond shape must match before two tensors can be combined. Which pair?",
            options: [
              "Data type and device",
              "Gradient requirement and the number of times each tensor has been used in a backward pass",
              "Memory layout order and whether each tensor was created inside or outside a no-gradient context",
              "Batch dimension size and the name of the layer that most recently produced each tensor",
            ],
            correctIndex: 0,
            explanation: "Every tensor carries a dtype (usually 32-bit float in training) and a device (CPU or a specific GPU). Mismatches in either produce the familiar device and type errors.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What does PyTorch's documentation say tracing the graph from roots to leaves lets you do?",
            options: [
              "Compute the gradients automatically using the chain rule",
              "Reorder the recorded operations into the fastest equivalent sequence before the forward pass is executed",
              "Discard intermediate values that are no longer required, which is what keeps memory use constant during training",
              "Convert the recorded graph into a static computation plan that can be exported and run without Python",
            ],
            correctIndex: 0,
            explanation: "The documentation states that by tracing the graph from roots to leaves you can automatically compute the gradients using the chain rule. The graph is built forwards and traversed backwards.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why is REVERSE-mode automatic differentiation the right choice for training a network?",
            options: [
              "One output, many inputs, at about one forward pass of cost",
              "It avoids storing intermediate activations, which is what allows very deep networks to fit into limited GPU memory",
              "It computes second derivatives as a by-product, and optimizers need curvature information at every step",
              "It differentiates the loss exactly while forward mode can only approximate it by finite differences",
            ],
            correctIndex: 0,
            explanation: "Reverse mode is efficient when there are many inputs and one output. A loss is a single scalar and a network has millions of parameters, which is exactly that shape. Both modes are exact; the difference is cost.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "In the 1986 Nature paper, what did the described procedure repeatedly adjust, and toward what end?",
            options: [
              "The connection weights, to minimize output error",
              "The number of hidden units, to find the smallest network that still separated the training classes correctly",
              "The learning rate schedule, to keep the size of each update proportional to the remaining training time",
              "The ordering of the training examples, to prevent the network from memorizing the sequence it was shown",
            ],
            correctIndex: 0,
            explanation: "Rumelhart, Hinton and Williams described a procedure that repeatedly adjusts the weights of the connections so as to minimize a measure of the difference between the actual and desired output vectors.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why does calling backward twice without zeroing produce a wrong update?",
            options: [
              "Gradients accumulate rather than replace",
              "The second call frees the graph, so the parameters receive gradients computed from uninitialised memory",
              "The optimizer halves the learning rate on every extra backward call, so the second update is too small to matter",
              "Each backward call re-runs the forward pass, so the second gradient describes a different set of predictions",
            ],
            correctIndex: 0,
            explanation: "Accumulation is deliberate: it lets you sum gradients over several small batches when one large batch will not fit in memory. It also means an ordinary loop must clear them explicitly each step.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why does accumulating a running loss without detaching it eventually exhaust memory?",
            options: [
              "The graph for every batch stays alive",
              "Each addition allocates a new tensor and the framework never reclaims tensors created inside a training loop",
              "Loss values are stored in double precision by default, so the running total grows in size with every batch",
              "The optimizer keeps a copy of every loss it has seen in order to compute an adaptive learning rate",
            ],
            correctIndex: 0,
            explanation: "An undetached loss tensor keeps a reference to the graph that produced it, and to every intermediate value that graph needs. Summing them chains the whole epoch's graphs together.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Which sequence is the correct order inside one training iteration?",
            options: [
              "Forward, loss, zero, backward, step",
              "Zero, step, forward, loss, backward, so that the parameters are already updated before the batch is scored",
              "Forward, backward, loss, step, zero, because the gradients must exist before the loss can be evaluated",
              "Loss, forward, step, backward, zero, which is the order used when gradients are accumulated across batches",
            ],
            correctIndex: 0,
            explanation: "Predict, score, clear the previous gradients, compute new ones, then apply the update. Zeroing may sit anywhere before backward, but it must come after the previous step and before the new backward.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What is one epoch?",
            options: [
              "One full pass over the training set",
              "One parameter update computed from a single batch of examples drawn from the training set",
              "One complete evaluation of the model on the held-out validation set, used to decide whether to stop training",
              "One repetition of the whole experiment with a different random seed, used to estimate run-to-run variance",
            ],
            correctIndex: 0,
            explanation: "An epoch is one pass over the whole training set; a batch is the subset used for a single update. A typical epoch therefore contains many updates.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "Which is a genuine tradeoff of a LARGER batch size?",
            options: [
              "Less gradient noise, but fewer updates per epoch",
              "Guaranteed faster convergence in wall-clock time, because the hardware is fully occupied on every single step",
              "Better final accuracy in every case, since the gradient estimate is closer to the true full-dataset gradient",
              "Lower memory use, because the framework can discard intermediate activations sooner within a larger batch",
            ],
            correctIndex: 0,
            explanation: "Bigger batches give a less noisy gradient and use hardware better, but yield fewer updates per epoch, and the noise of small batches acts as a mild regularizer. There is no universally correct value.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "Cross-entropy loss grows without bound in which situation?",
            options: [
              "The probability assigned to the true class approaches zero",
              "The model assigns equal probability to every class, since an entirely uninformative prediction carries infinite cost",
              "The predicted probabilities fail to sum to one, which the loss penalises in proportion to the size of the discrepancy",
              "The number of classes increases, because the loss is summed over classes rather than averaged across them",
            ],
            correctIndex: 0,
            explanation: "Cross-entropy is the negative log of the probability given to the correct class, so a confident wrong answer is extremely expensive while a uniform guess costs a finite amount.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "Why must a model be switched between training and evaluation mode?",
            options: [
              "Dropout and batch normalisation behave differently in each",
              "Gradient tracking is only possible in training mode, so evaluating without switching would silently corrupt the parameters",
              "The loss function is replaced by an accuracy metric in evaluation mode, which requires a different internal state",
              "Evaluation mode moves every tensor to the CPU, which is required before any metric can be computed",
            ],
            correctIndex: 0,
            explanation: "Dropout must be active while training and inactive while evaluating, and batch normalisation uses batch statistics while training and running estimates afterwards. Forgetting the switch changes the numbers you report.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What is the effect of a learning rate that is far too large?",
            options: [
              "Steps overshoot and the loss diverges",
              "Training slows to a crawl and stalls in flat regions of the loss surface without ever reaching a minimum",
              "The model converges to a solution that fits the training data perfectly but generalises poorly to new data",
              "Gradients stop being computed at all, because the optimizer detects the instability and halts the backward pass",
            ],
            correctIndex: 0,
            explanation: "Too large overshoots and diverges; too small crawls or stalls. The crawling failure is the small-learning-rate symptom, and the two are often confused.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "Why is evaluation normally run inside a no-gradient context?",
            options: [
              "No graph is recorded, so it is faster and lighter",
              "It prevents the evaluation batches from leaking into the training set, which would otherwise inflate the reported score",
              "It forces the model into evaluation mode automatically, which is why an explicit mode switch is unnecessary",
              "It converts the model to half precision, which is safe at evaluation time because no updates are applied",
            ],
            correctIndex: 0,
            explanation: "Without gradient tracking the framework skips the bookkeeping and the retained intermediates entirely. It is a performance and memory decision, not a correctness one, and it does not change the model's mode.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "Which best describes what a tensor is?",
            options: [
              "An array with a shape, a dtype and a device",
              "A matrix restricted to two dimensions, which is why images must be flattened before a network can process them",
              "A symbolic expression that is only evaluated once the backward pass requests a concrete numerical value",
              "A list of parameters belonging to one layer, bundled together so the optimizer can update them as a unit",
            ],
            correctIndex: 0,
            explanation: "A tensor is an array of numbers with a shape, plus a data type and a device, and optionally a record of how it was computed. Tensors have any number of dimensions, not two.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What is this course, relative to Neuromatch's own Deep Learning course?",
            options: [
              "A companion, not a replacement",
              "An officially endorsed preparatory track",
              "A condensed version of the same notebooks",
              "A faster route to the same certificate",
            ],
            correctIndex: 0,
            explanation:
              "Neuromatch runs full time for weeks with notebooks, pods and projects. This teaches the concepts that make that material followable.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Under which licence does Neuromatch publish its material?",
            options: [
              "CC BY 4.0",
              "CC BY-NC-SA 4.0, barring commercial use",
              "All rights reserved",
              "Public domain with no conditions",
            ],
            correctIndex: 0,
            explanation:
              "There is no NonCommercial clause, which is why adaptation is legitimate given attribution, links to source and licence, and marked modifications.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What must accompany a CC BY 4.0 adaptation?",
            options: [
              "Attribution, links to source and licence, and marked modifications",
              "Only a mention of the original author",
              "Written permission from the licensor",
              "A share-alike licence on the derivative",
            ],
            correctIndex: 0,
            explanation:
              "Share-alike belongs to a different licence and is not required here.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does this course deliberately leave out?",
            options: [
              "Notebooks, datasets, projects and pods",
              "The mathematics of backpropagation",
              "Any treatment of optimizers",
              "The vocabulary of tensors and shapes",
            ],
            correctIndex: 0,
            explanation:
              "Those parts need the full-time course structure; what remains is the conceptual scaffolding.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Does Neuromatch review or endorse external uses of its material?",
            options: [
              "No, and this course reproduces that wording",
              "Yes, every adaptation is reviewed",
              "Only commercial adaptations",
              "Only those on their own domain",
            ],
            correctIndex: 0,
            explanation:
              "Stating it is part of being honest about what an adaptation is.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "How does broadcasting align shapes?",
            options: [
              "From the right",
              "From the left",
              "By total element count",
              "By declaration order",
            ],
            correctIndex: 0,
            explanation:
              "Which is why (64, 10) plus (10,) works and (64, 10) plus (64,) does not.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "A (64, 10) tensor plus a (10,) tensor yields what?",
            options: [
              "(64, 10)",
              "A rank error",
              "(64, 10, 10)",
              "(10,)",
            ],
            correctIndex: 0,
            explanation:
              "The missing leading dimension is treated as 1 and stretched to 64, adding the same bias vector to every row.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Why does (64, 10) plus (64,) fail?",
            options: [
              "Aligning from the right compares 10 against 64",
              "Ranks must always match",
              "64 can never broadcast",
              "The larger operand must come first",
            ],
            correctIndex: 0,
            explanation:
              "To add one value per row, reshape to (64, 1).",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What makes an unintended broadcast dangerous?",
            options: [
              "It returns a wrong answer instead of raising",
              "It always crashes unhelpfully",
              "It silently changes dtype",
              "It moves data to the CPU",
            ],
            correctIndex: 0,
            explanation:
              "It is the single most common silent bug in numerical code, and it can survive a whole training run.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What does a dimension of size 1 do under broadcasting?",
            options: [
              "Stretches to match",
              "Raises an error",
              "Is dropped from the result",
              "Is treated as zero",
            ],
            correctIndex: 0,
            explanation:
              "A missing dimension is treated as 1 and behaves identically.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What must two tensors agree on before combining?",
            options: [
              "Dtype and device",
              "Rank only",
              "Gradient state",
              "Variable name",
            ],
            correctIndex: 0,
            explanation:
              "The same-device error usually means the model moved to the GPU and the batch did not.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What is the usual training dtype?",
            options: [
              "32-bit float",
              "64-bit integer",
              "8-bit unsigned integer",
              "Boolean",
            ],
            correctIndex: 0,
            explanation:
              "16-bit is used deliberately for speed and memory rather than by default.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Why not just use NumPy?",
            options: [
              "No GPU execution and no automatic differentiation",
              "NumPy has no shape attribute",
              "NumPy cannot hold floats",
              "NumPy is slower at everything",
            ],
            correctIndex: 0,
            explanation:
              "Those two capabilities are the reason a separate tensor library exists.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "How do you add one value per row to a (64, 10) tensor?",
            options: [
              "Reshape it to (64, 1)",
              "Reshape it to (1, 64)",
              "Transpose the operand",
              "Match the dtypes",
            ],
            correctIndex: 0,
            explanation:
              "A trailing dimension of 1 stretches across the 10 columns, which is what per-row means.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What does a tensor carry beyond its numbers?",
            options: [
              "A shape, dtype, device and a record of its computation",
              "Only a shape",
              "Only a device",
              "Only its gradient",
            ],
            correctIndex: 0,
            explanation:
              "That computation record is what distinguishes it from a plain array.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What underlies automatic differentiation?",
            options: [
              "The chain rule plus bookkeeping",
              "Finite differences",
              "Symbolic algebra over source code",
              "Random parameter search",
            ],
            correctIndex: 0,
            explanation:
              "Backpropagation is that idea, named earlier, applied to the recorded graph.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "What happens when backward is called twice without zeroing?",
            options: [
              "Gradients add together",
              "An error is raised",
              "The first set is overwritten",
              "The graph rebuilds itself",
            ],
            correctIndex: 0,
            explanation:
              "That accumulation is deliberate: it lets you sum over small batches when a large one will not fit in memory.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why do training loops zero gradients before stepping?",
            options: [
              "Because gradients accumulate by default",
              "Because the optimizer demands a reset flag",
              "Because the loss would go negative",
              "Because the graph is freed each pass",
            ],
            correctIndex: 0,
            explanation:
              "Forgetting produces a wandering loss and no error at all.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "What symptom does forgetting to zero produce?",
            options: [
              "A wandering loss with no error",
              "An immediate shape mismatch",
              "A device mismatch",
              "A halt on the first batch",
            ],
            correctIndex: 0,
            explanation:
              "Silence is what makes it a classic bug rather than an obvious one.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why does the graph cost memory?",
            options: [
              "Intermediates are held until backward runs",
              "It stores a copy of the dataset",
              "Gradients are kept at double precision",
              "Each operation is logged to disk",
            ],
            correctIndex: 0,
            explanation:
              "Which is why evaluation is wrapped in a no-gradient context.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why detach a running loss before accumulating it?",
            options: [
              "Otherwise the whole history stays alive",
              "Otherwise it rounds to 16-bit",
              "Otherwise the optimizer updates it",
              "Otherwise it cannot be printed",
            ],
            correctIndex: 0,
            explanation:
              "An attached loss keeps every intermediate from every batch reachable, and memory runs out.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why wrap evaluation in a no-gradient context?",
            options: [
              "No backward pass is coming, so the graph is waste",
              "It would otherwise update weights",
              "It is required to compute accuracy",
              "It switches the model to inference dtype",
            ],
            correctIndex: 0,
            explanation:
              "The saving is memory and bookkeeping; accuracy is unchanged.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "What is held until the backward pass?",
            options: [
              "Every intermediate needed for gradients",
              "Only the final loss",
              "The optimizer's state",
              "The whole dataset",
            ],
            correctIndex: 0,
            explanation:
              "Long evaluation loops without a no-gradient context therefore exhaust memory.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "What is the relationship between backpropagation and the chain rule?",
            options: [
              "Backpropagation applies the chain rule with bookkeeping",
              "They are unrelated",
              "Backpropagation replaced it",
              "The chain rule suits only linear models",
            ],
            correctIndex: 0,
            explanation:
              "The idea predates the name; the bookkeeping is what autograd supplies.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why is gradient accumulation across small batches useful?",
            options: [
              "It simulates a batch too large for memory",
              "It reduces the epochs needed",
              "It removes the optimizer",
              "It prevents overfitting",
            ],
            correctIndex: 0,
            explanation:
              "Since accumulation is the default, this use only requires deferring the zeroing.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Which loop order is correct?",
            options: [
              "Zero, forward, loss, backward, step",
              "Forward, step, backward, zero, loss",
              "Backward, forward, zero, step, loss",
              "Loss, zero, step, forward, backward",
            ],
            correctIndex: 0,
            explanation:
              "Zeroing first stops the previous iteration's gradients contaminating this one.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What is an epoch?",
            options: [
              "One pass over the training set",
              "One parameter update",
              "One batch",
              "One evaluation run",
            ],
            correctIndex: 0,
            explanation:
              "Many batches make an epoch.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What is a batch?",
            options: [
              "A subset of examples processed together",
              "A full pass through the data",
              "A group of parameters",
              "A saved checkpoint",
            ],
            correctIndex: 0,
            explanation:
              "Batching is what makes gradient descent stochastic and keeps memory bounded.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What does learning mean here?",
            options: [
              "Adjusting parameters to reduce a loss",
              "Storing examples for retrieval",
              "Discovering the architecture",
              "Adding layers over time",
            ],
            correctIndex: 0,
            explanation:
              "The loss defines better; the optimizer moves the parameters that way.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What does the loss function supply?",
            options: [
              "A number saying how wrong the output is",
              "The gradient directly",
              "The learning rate",
              "The batch size",
            ],
            correctIndex: 0,
            explanation:
              "Its gradient with respect to the parameters is what backward computes.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What does the optimizer's step do?",
            options: [
              "Applies the stored gradients to the parameters",
              "Computes the gradients",
              "Zeroes the gradients",
              "Runs validation",
            ],
            correctIndex: 0,
            explanation:
              "Backward computes them; step applies them.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What happens if backward is never called?",
            options: [
              "No gradients exist and step does nothing useful",
              "The loss cannot be computed",
              "The graph is never built",
              "The forward pass errors",
            ],
            correctIndex: 0,
            explanation:
              "Step would apply nothing, or stale values from an earlier iteration.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "Why teach the training loop before architectures?",
            options: [
              "Every architecture uses the same loop",
              "Architectures matter less",
              "The loop is harder",
              "Architectures need CUDA first",
            ],
            correctIndex: 0,
            explanation:
              "The loop is the invariant; the model inside it is what changes.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What does zeroing gradients NOT reset?",
            options: [
              "The optimizer's momentum state",
              "Accumulated gradients",
              "Contamination from the last step",
              "The ability to run backward again",
            ],
            correctIndex: 0,
            explanation:
              "Momentum persists across steps by design; zeroing touches gradients only.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What is the purpose of the forward pass?",
            options: [
              "Compute the output from the input",
              "Update parameters",
              "Compute gradients",
              "Zero accumulated state",
            ],
            correctIndex: 0,
            explanation:
              "The loss is computed from that output, and backward follows.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What does a device mismatch usually mean?",
            options: [
              "One of the two operands was not moved",
              "A corrupted checkpoint",
              "An unsupported dtype",
              "A missing gradient",
            ],
            correctIndex: 0,
            explanation:
              "Either the model moved and the batch did not, or the reverse. It is bookkeeping, not depth.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What does 16-bit float buy?",
            options: [
              "Speed and memory at some numerical cost",
              "Higher accuracy",
              "Automatic gradient scaling",
              "Device independence",
            ],
            correctIndex: 0,
            explanation:
              "It is a deliberate trade rather than a free upgrade.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Which of these fails silently?",
            options: [
              "An unintended broadcast",
              "A device mismatch",
              "A dtype mismatch",
              "A missing argument",
            ],
            correctIndex: 0,
            explanation:
              "The other three raise; a broadcast you did not intend returns a plausible number.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Why does the course teach shapes first?",
            options: [
              "Shape is the thing you will fight",
              "Shapes fix the learning rate",
              "Shapes cannot change",
              "Shapes determine the activation",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says exactly that, and the broadcasting rule is why.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What happens to the graph after backward?",
            options: [
              "Its intermediates are freed",
              "It is kept for the next epoch",
              "It moves to the CPU",
              "It converts to 16-bit",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a second backward on the same graph needs it explicitly retained.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why does the course state what it took and changed?",
            options: [
              "CC BY requires modifications to be marked",
              "The licence forbids adaptation",
              "Neuromatch reviews derivatives",
              "The material is public domain",
            ],
            correctIndex: 0,
            explanation:
              "Marking modifications is one of the licence's conditions.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What is the practical value of knowing gradients accumulate?",
            options: [
              "It explains a feature and a classic bug at once",
              "It sets the batch size",
              "It fixes the learning rate",
              "It controls dtype",
            ],
            correctIndex: 0,
            explanation:
              "The feature is large-batch simulation; the bug is a silently wandering loss.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "What does a tensor's shape describe?",
            options: [
              "The size along each dimension",
              "Its numeric type",
              "Its device",
              "Whether it tracks gradients",
            ],
            correctIndex: 0,
            explanation:
              "Those other three are separate attributes of the same object.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Which is NOT a reason for a no-gradient context?",
            options: [
              "It improves numerical accuracy",
              "It saves memory",
              "No backward pass is coming",
              "It avoids an unused graph",
            ],
            correctIndex: 0,
            explanation:
              "Accuracy is unchanged; the benefit is memory and bookkeeping.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "What does the loop's invariance mean for a learner?",
            options: [
              "Learn it once and it transfers",
              "Rewrite it per architecture",
              "It applies only to small models",
              "It changes with each optimizer",
            ],
            correctIndex: 0,
            explanation:
              "What varies between projects is the model inside the loop.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What is the risk of an unintended broadcast in a loss?",
            options: [
              "A plausible number that is silently wrong",
              "An immediate crash",
              "A device transfer",
              "Doubled memory",
            ],
            correctIndex: 0,
            explanation:
              "Because it does not raise, it can reach a written-up result.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What does dtype record?",
            options: [
              "The numeric type of the entries",
              "The device",
              "The gradient",
              "The shape",
            ],
            correctIndex: 0,
            explanation:
              "Typically 32-bit float in training, sometimes 16-bit.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Why is the training loop called the invariant?",
            options: [
              "It stays the same as models change",
              "It never needs debugging",
              "It is fixed by the framework",
              "It cannot be modified",
            ],
            correctIndex: 0,
            explanation:
              "Which is why it is worth learning carefully once.",
            sourceLessonSlug: "the-training-loop",
          },
        ],
      },
    },

    // ── Section 2 · From linear models to deep networks ───────────────────────
    {
      slug: "linear-models-as-networks",
      recallContent: [
        { prompt: "List the five steps of one training iteration, in order.", answer: "Forward, compute the loss, zero the gradients, backward, then step." },
        { prompt: "What goes wrong with a learning rate that is far too large, and with one that is far too small?", answer: "Too large and the steps overshoot and the loss diverges. Too small and training crawls or stalls in a flat region." },
      ],
      title: "6 · Linear models are one-layer networks",
      section: "From linear models to deep networks",
      body: `The fastest way into deep learning is to notice that you already know the smallest possible network. **Linear regression** predicts a number as a weighted sum of the inputs plus a bias: one matrix multiply, one addition. In network vocabulary that is a single **fully connected layer** with no activation function. **Logistic regression** is the same layer with a sigmoid on the output, turning the number into a probability. Nothing new has been introduced yet; the vocabulary has just been swapped.

**Why start here.** Because everything that is hard about deep networks is already present in this tiny case, in a form you can reason about. There is a parameter vector. There is a loss. There is a gradient. There is a learning rate that can be wrong. And there is the question of whether the model has enough capacity for the pattern in the data, which for a linear model has a sharp answer: it can only represent relationships that are a weighted sum of the inputs. Give it data that lives on a circle and it will fail, no matter how long you train.

**The result that motivates every nonlinearity you will ever use.** Stack two linear layers with nothing in between and you have not gained anything. Applying a matrix W1 and then a matrix W2 is the same as applying the single matrix W2 W1, which is itself a linear map. A hundred stacked linear layers still compute a linear function. This is not a subtlety, it is the whole reason **activation functions** exist: without a nonlinearity between layers, depth is free but worthless. Neuromatch devotes a full day to "Linear Deep Learning" precisely so this collapse is felt rather than asserted.

**What a linear model buys you as a baseline.** It trains in seconds, it has few enough parameters to be understood, and it gives you a number to beat. A depressing number of published deep learning results would not survive being compared honestly against a well-tuned linear model on the same features. Fitting one first is not a formality; it is how you find out whether the problem needs a network at all.

**Features are where linearity hides.** A linear model on *raw pixels* is weak. A linear model on *good features* can be excellent, which is why the decades before deep learning were spent on feature engineering. The bet deep learning makes is that a network can learn the features and the classifier together, from the data, rather than having a human design the features first. That bet does not always pay off; it pays off when you have enough data and enough compute, and it is worth being clear-eyed that this is the condition, not a law.

:::reveal Why is a stack of linear layers with no activation function between them no more expressive than a single linear layer? ||| Applying matrix W1 then matrix W2 is the same as applying the single matrix W2 W1, which is itself linear. Composition of linear maps is linear, so depth without a nonlinearity adds parameters but no expressive power.

## Vocabulary
- **Fully connected layer**: a matrix multiply plus a bias, so that every input contributes to every output.
- **Capacity**: the range of functions a model is able to represent at all, independent of how well it is trained.
- **Activation function**: the nonlinearity placed between layers, without which stacked layers collapse into a single linear map.
- **Baseline**: a simple model fitted first so that a complex model has an honest number to beat.

## Sources
- Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep learning*. MIT Press. https://www.deeplearningbook.org/
- Neuromatch Academy. (n.d.). *Neuromatch Academy: Deep Learning* [course content]. https://deeplearning.neuromatch.io/tutorials/intro.html`,
    },
    {
      slug: "mlps-and-activations",
      recallContent: [
        { prompt: "In network vocabulary, what is linear regression?", answer: "A single fully connected layer with no activation function: one matrix multiply plus a bias. Logistic regression is the same layer with a sigmoid on the output." },
        { prompt: "Why should you fit a linear baseline before reaching for a network?", answer: "It trains in seconds, is small enough to understand, and gives you a number to beat. It tells you whether the problem needs a network at all." },
      ],
      title: "7 · Multilayer perceptrons and what activations do",
      section: "From linear models to deep networks",
      body: `A **multilayer perceptron** (MLP) is what you get when you stack fully connected layers and put a nonlinearity between them. Input, linear layer, activation, linear layer, activation, linear layer, output. The layers in the middle are **hidden layers**, and their outputs are **hidden units** or activations. That is the entire architecture, and it is still the default for tabular data.

**Why it works at all.** There is a real theorem underneath. Cybenko proved in 1989 that finite linear combinations of a fixed sigmoidal function composed with affine functionals "can uniformly approximate any continuous function of n real variables with support in the unit hypercube" (Cybenko, 1989). Hornik (1991) extended the result to a broader class of feedforward networks. In plain terms: one hidden layer, made wide enough, can approximate any continuous function on a bounded region as closely as you like.

**Why that theorem proves less than people quote it for.** It is an existence result. It says a suitable set of weights exists; it says nothing about how many hidden units you would need (possibly astronomically many), and nothing about whether gradient descent can find those weights from your finite, noisy dataset. Universal approximation is a reason not to worry that MLPs are fundamentally too weak. It is not a reason to expect a wide shallow network to work well in practice, and in practice depth usually buys more than width for the same parameter count.

**The activation functions you will meet.**

- **Sigmoid** squashes any real number into (0, 1). Historically dominant, now mostly confined to output layers for binary probabilities. Its problem is **saturation**: far from zero its derivative is nearly zero, so gradients passing through it shrink toward nothing.
- **Tanh** is a rescaled sigmoid mapping into (-1, 1), zero-centred, which helps, but it saturates for the same reason.
- **ReLU**, the rectified linear unit, outputs the input when positive and zero otherwise. It is the modern default. Its derivative is exactly 1 for positive inputs, so gradients pass through undiminished, and it is trivially cheap to compute. Its failure mode is the **dead unit**: a unit whose input is always negative outputs zero forever and receives no gradient, so it never recovers.
- **Leaky ReLU and its relatives** give a small nonzero slope for negative inputs specifically to avoid that death.

**The practical summary.** Use ReLU or one of its variants in hidden layers unless you have a specific reason not to. Use no activation on a regression output, a sigmoid on a single binary output, and a softmax across a set of mutually exclusive classes. Most architecture debates are downstream of these defaults, not upstream of them.

:::reveal What exactly does the universal approximation theorem promise, and what does it conspicuously not promise? ||| It promises that a sufficiently wide single hidden layer can approximate any continuous function on a bounded region as closely as you like. It does not say how many units that takes, and it does not say that gradient descent can find those weights from your finite noisy data.

## Vocabulary
- **Multilayer perceptron**: stacked fully connected layers with a nonlinearity between each pair.
- **Hidden layer**: a layer whose outputs are neither the network's input nor its final prediction.
- **Saturation**: the regime where an activation's derivative is near zero, so gradients passing through it shrink toward nothing.
- **ReLU**: the rectified linear unit, passing positive inputs through unchanged and zeroing negative ones; the modern default.
- **Dead unit**: a ReLU whose input is always negative, so it outputs zero forever and receives no gradient to recover with.

## Sources
- Cybenko, G. (1989). Approximation by superpositions of a sigmoidal function. *Mathematics of Control, Signals, and Systems, 2*, 303-314. https://doi.org/10.1007/BF02551274
- Hornik, K. (1991). Approximation capabilities of multilayer feedforward networks. *Neural Networks, 4*(2), 251-257. https://doi.org/10.1016/0893-6080(91)90009-T
- Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep learning*. MIT Press. https://www.deeplearningbook.org/`,
    },
    {
      slug: "optimizers-and-learning-rates",
      recallContent: [
        { prompt: "What is the modern default activation for hidden layers, and what is its characteristic failure?", answer: "ReLU, which passes positive inputs through unchanged so gradients are not diminished. Its failure is the dead unit: one whose input is always negative outputs zero forever and gets no gradient to recover with." },
        { prompt: "Why is the universal approximation theorem weaker than it is usually quoted as being?", answer: "It is an existence result. It does not bound how many hidden units are needed, and it says nothing about whether gradient descent can find those weights from finite noisy data." },
      ],
      title: "8 · Optimizers: SGD, momentum, and Adam",
      section: "From linear models to deep networks",
      body: `The **optimizer** is the rule that turns gradients into parameter updates. There are only a handful worth knowing and they form a short lineage.

**Plain stochastic gradient descent.** Subtract the learning rate times the gradient. That is it. It is called *stochastic* because the gradient is estimated from a random batch rather than the whole dataset, which makes it cheap and makes the estimate noisy. That noise is not purely a cost: it helps the trajectory escape narrow bad regions. SGD with a well-tuned learning rate and schedule remains competitive, and in some vision settings still produces the best final generalization.

**Momentum.** Keep a running average of past gradients and step in that direction instead of the raw one. The physical picture is a ball rolling downhill rather than a hiker recomputing the slope from scratch at every footstep. Momentum damps oscillation across a narrow valley and accelerates progress along it, which is exactly the geometry that makes plain SGD slow.

**Adam.** Kingma and Ba's method is the one you will see in most code. It maintains per-parameter adaptive step sizes "based on adaptive estimates of lower-order moments" (Kingma & Ba, 2014): a running estimate of the mean of the gradient and a running estimate of its uncentred variance, combined so that parameters with consistently large gradients take relatively smaller steps and rarely-updated parameters take relatively larger ones. In practice it is far less sensitive to the initial learning rate than plain SGD, which is why it is the sensible first thing to try.

**The honest caveat about Adam.** It is a good default, not a universally better algorithm. Well-tuned SGD with momentum sometimes generalizes better, particularly in image classification, and the literature on why is genuinely unsettled. "Use Adam" is a reasonable starting policy; "Adam is better" is a claim that outruns the evidence.

**Learning rate schedules.** Whatever the optimizer, the learning rate usually should not be constant. Two patterns dominate: **decay**, in which the rate drops over training so that early steps explore and late steps refine, and **warmup**, in which the rate rises from near zero over the first few hundred steps to avoid a destructive first update into a randomly initialised network. Transformers in particular are usually trained with warmup followed by decay.

**How to actually choose a learning rate.** Not by reading. Run a short training with the rate spanning several orders of magnitude and watch the loss: too small and it barely moves, too large and it diverges, and the useful value sits just below where divergence starts. This takes minutes and saves days, and it is the single highest-value habit in this lesson.

:::reveal What does Adam maintain per parameter, and why does that make it less sensitive to the initial learning rate than plain SGD? ||| It maintains running estimates of the first and second moments of each parameter's gradient, and uses them to scale that parameter's step. Parameters with consistently large gradients take relatively smaller steps and rarely-updated ones take relatively larger steps, so a single global rate no longer has to suit every parameter at once.

## Vocabulary
- **Optimizer**: the rule that converts gradients into parameter updates.
- **Momentum**: stepping along a running average of past gradients, which damps oscillation across a narrow valley and speeds progress along it.
- **Adam**: an optimizer using per-parameter adaptive step sizes derived from running estimates of the gradient's first and second moments.
- **Warmup**: raising the learning rate from near zero over the first steps, to avoid a destructive first update into a randomly initialised network.

## Sources
- Kingma, D. P., & Ba, J. (2014). Adam: A method for stochastic optimization. *arXiv*. https://arxiv.org/abs/1412.6980
- Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep learning*. MIT Press. https://www.deeplearningbook.org/`,
    },
    {
      slug: "quiz-linear-to-deep",
      title: "Section 2 quiz \u00b7 From linear models to deep networks",
      section: "From linear models to deep networks",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a linear model, in network terms?",
            options: [
              "A one-layer network",
              "A network with no trainable parameters",
              "A two-layer network without activations",
              "A model that cannot be trained by gradient descent",
            ],
            correctIndex: 0,
            explanation:
              "Seeing it that way makes the step to deeper networks continuous rather than a leap.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "Why start from a linear baseline?",
            options: [
              "It is often hard to beat",
              "It is the only model with a closed-form gradient",
              "Deeper models cannot be initialised without it",
              "It needs no loss function",
            ],
            correctIndex: 0,
            explanation:
              "Without it you cannot say whether the extra complexity bought anything.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "Where does linearity often hide?",
            options: [
              "In the features",
              "In the loss function",
              "In the optimizer state",
              "In the batch size",
            ],
            correctIndex: 0,
            explanation:
              "A linear model on well-chosen nonlinear features can be very strong, which is part of why the baseline is hard to beat.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "What do you get by stacking linear layers with no activation between them?",
            options: [
              "Another linear model",
              "A universal approximator",
              "An untrainable model",
              "A convolutional network",
            ],
            correctIndex: 0,
            explanation:
              "The composition of linear maps is linear, which is exactly why a nonlinearity is required for depth to buy anything.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does the universal approximation theorem assert?",
            options: [
              "That a suitable set of weights exists",
              "That gradient descent will find the weights",
              "That a shallow network beats a deep one",
              "That any function needs only ten hidden units",
            ],
            correctIndex: 0,
            explanation:
              "It is an existence result and nothing more.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does the universal approximation theorem say about the number of hidden units needed?",
            options: [
              "Nothing; it may be astronomically many",
              "That it is bounded by the input dimension",
              "That two layers always suffice",
              "That it grows linearly with the data size",
            ],
            correctIndex: 0,
            explanation:
              "Which is one of two reasons the theorem proves less than it is usually quoted for.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does the theorem say about whether training will find those weights?",
            options: [
              "Nothing at all",
              "That gradient descent converges to them",
              "That convergence is guaranteed with enough epochs",
              "That only second-order methods find them",
            ],
            correctIndex: 0,
            explanation:
              "Existence and findability are different claims, and only the first is proved.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What is the theorem a good reason for?",
            options: [
              "Not worrying that MLPs are fundamentally too weak",
              "Expecting a wide shallow network to work well",
              "Preferring width over depth",
              "Skipping the linear baseline",
            ],
            correctIndex: 0,
            explanation:
              "It rules out a worry about expressive power; it predicts nothing about practice.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "In practice, for the same parameter count, what usually buys more?",
            options: [
              "Depth",
              "Width",
              "A larger batch size",
              "A higher learning rate",
            ],
            correctIndex: 0,
            explanation:
              "Which is the opposite of what a naive reading of the universal approximation theorem suggests.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What is the role of an activation function?",
            options: [
              "To introduce nonlinearity between layers",
              "To normalise the loss",
              "To schedule the learning rate",
              "To move tensors between devices",
            ],
            correctIndex: 0,
            explanation:
              "Without one, any stack of layers collapses to a single linear map.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What is plain stochastic gradient descent?",
            options: [
              "A step in the direction of the current batch's gradient",
              "A step using the full dataset gradient",
              "A random search over parameters",
              "A second-order optimisation method",
            ],
            correctIndex: 0,
            explanation:
              "Stochastic refers to using a batch rather than the whole dataset for each estimate.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What does momentum add to plain SGD?",
            options: [
              "A running average of past gradients",
              "A per-parameter learning rate",
              "A second-order curvature estimate",
              "An automatic batch size",
            ],
            correctIndex: 0,
            explanation:
              "It damps oscillation across a narrow valley and accelerates along a consistent direction.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What distinguishes Adam from momentum alone?",
            options: [
              "It scales each parameter's step by its own gradient history",
              "It uses the exact Hessian",
              "It removes the learning rate entirely",
              "It requires no gradients",
            ],
            correctIndex: 0,
            explanation:
              "Per-parameter scaling is what makes it forgiving of a badly chosen global learning rate.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What is the honest caveat about Adam?",
            options: [
              "A well-tuned SGD can generalise better",
              "It cannot be used with momentum",
              "It only works on convolutional networks",
              "It requires 16-bit precision",
            ],
            correctIndex: 0,
            explanation:
              "Adam is a strong default, not a strictly better method, and the course says so rather than presenting it as an upgrade.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What does a learning rate schedule do?",
            options: [
              "Changes the learning rate over training",
              "Chooses the batch size adaptively",
              "Selects which layers to update",
              "Decides when to stop training",
            ],
            correctIndex: 0,
            explanation:
              "Typically starting higher to move fast and decreasing to settle.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "How does the course say to actually choose a learning rate?",
            options: [
              "Empirically, by trying a range",
              "By computing it from the batch size",
              "By copying the value from the original paper",
              "By setting it to the inverse of the parameter count",
            ],
            correctIndex: 0,
            explanation:
              "There is no formula that replaces trying it, which is why the advice is procedural rather than numerical.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What is the effect of a learning rate that is far too high?",
            options: [
              "The loss diverges or oscillates",
              "Training becomes slow but stable",
              "Gradients stop accumulating",
              "The model silently reverts to linear",
            ],
            correctIndex: 0,
            explanation:
              "Too low is the mirror failure: it trains, just far too slowly to be useful.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What is the effect of a learning rate that is far too low?",
            options: [
              "Training is stable but impractically slow",
              "The loss diverges",
              "Gradients are never computed",
              "The optimizer raises an error",
            ],
            correctIndex: 0,
            explanation:
              "It is the less alarming failure and therefore the easier one to waste a week on.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "Why is the linear model called one layer rather than zero?",
            options: [
              "It applies one learned affine map",
              "It has one activation function",
              "It uses one batch per epoch",
              "It has one output",
            ],
            correctIndex: 0,
            explanation:
              "Framing it as a layer is what lets depth be introduced by adding more of the same object.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "What does a strong linear baseline tell you about a deeper model that barely beats it?",
            options: [
              "The extra complexity bought little",
              "That the deeper model is misconfigured",
              "That the dataset is too small",
              "That the learning rate is wrong",
            ],
            correctIndex: 0,
            explanation:
              "That comparison is the reason to build the baseline first rather than last.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "Which claim about the universal approximation theorem is correct?",
            options: [
              "It is an existence result",
              "It is a convergence guarantee",
              "It bounds the required width",
              "It applies only to linear models",
            ],
            correctIndex: 0,
            explanation:
              "The other three are the common misreadings the lesson exists to prevent.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "Why does the lesson call the theorem over-quoted?",
            options: [
              "It is used to justify expectations it cannot support",
              "It has been formally disproved",
              "It applies only to one activation function",
              "Its proof is disputed",
            ],
            correctIndex: 0,
            explanation:
              "It is true and it is narrow, and the gap between the two is where the misuse happens.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What is an MLP?",
            options: [
              "A stack of linear layers with nonlinearities between them",
              "A single linear map",
              "A network with no trainable weights",
              "A convolutional architecture",
            ],
            correctIndex: 0,
            explanation:
              "Multilayer perceptron: the nonlinearity between layers is what makes the depth meaningful.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What happens to a two-layer network if you remove its activation?",
            options: [
              "It collapses to a single linear map",
              "It becomes untrainable",
              "It gains expressive power",
              "Its parameter count doubles",
            ],
            correctIndex: 0,
            explanation:
              "Two linear maps composed are one linear map, which is the whole argument for nonlinearity.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does per-parameter step scaling help with?",
            options: [
              "A poorly chosen global learning rate",
              "Reducing memory use",
              "Eliminating the need for batches",
              "Guaranteeing convergence",
            ],
            correctIndex: 0,
            explanation:
              "It is why Adam is forgiving, and forgiveness is not the same as being better.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "Is Adam strictly better than SGD?",
            options: [
              "No, a well-tuned SGD can generalise better",
              "Yes, in every reported benchmark",
              "Yes, for convolutional networks only",
              "Only when momentum is disabled",
            ],
            correctIndex: 0,
            explanation:
              "Presenting it as an upgrade would be the easy and wrong thing to teach.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What does momentum help with in a narrow valley?",
            options: [
              "Damping oscillation across the valley",
              "Increasing the learning rate automatically",
              "Reducing the parameter count",
              "Choosing the activation",
            ],
            correctIndex: 0,
            explanation:
              "It also accelerates movement along a direction the gradients keep agreeing on.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What is stochastic about stochastic gradient descent?",
            options: [
              "The gradient is estimated from a batch",
              "The learning rate is randomised",
              "The parameters are initialised randomly",
              "The batch order is fixed",
            ],
            correctIndex: 0,
            explanation:
              "Random initialisation is separate; the stochasticity here is in the gradient estimate.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "Why does a schedule usually decrease the learning rate?",
            options: [
              "To move fast early and settle later",
              "To reduce memory use over time",
              "Because gradients grow during training",
              "To compensate for accumulating gradients",
            ],
            correctIndex: 0,
            explanation:
              "Large steps explore; small steps settle. The schedule sequences the two.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What should you do before concluding a deep model is needed?",
            options: [
              "Fit and evaluate a linear baseline",
              "Increase the batch size",
              "Switch optimizers",
              "Add a learning rate schedule",
            ],
            correctIndex: 0,
            explanation:
              "Otherwise a good result is unattributable: you cannot say what produced it.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "What does 'features are where linearity hides' warn against?",
            options: [
              "Assuming a linear model is weak because it is linear",
              "Using nonlinear features at all",
              "Adding depth to a network",
              "Normalising the inputs",
            ],
            correctIndex: 0,
            explanation:
              "The model is linear in its parameters, not necessarily in the raw inputs.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "Which is the correct reading of depth versus width in practice?",
            options: [
              "Depth usually buys more for the same parameter count",
              "Width usually buys more",
              "They are equivalent by the theorem",
              "Neither matters once the optimizer is tuned",
            ],
            correctIndex: 0,
            explanation:
              "The universal approximation theorem says nothing about this, which is exactly why practice had to answer it.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does an activation function NOT do?",
            options: [
              "Change the number of parameters",
              "Introduce nonlinearity",
              "Affect gradient flow",
              "Determine the output range of a layer",
            ],
            correctIndex: 0,
            explanation:
              "It is applied elementwise to a layer's output and adds no weights of its own.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "Why is the lesson order linear model, then MLP, then optimizers?",
            options: [
              "Each step adds one idea to the previous",
              "Optimizers are the least important",
              "MLPs cannot be trained without a schedule",
              "Linear models require the fewest epochs",
            ],
            correctIndex: 0,
            explanation:
              "Depth is the second idea and how to train it is the third, so nothing is introduced twice.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "What is the first thing to try when a loss will not decrease at all?",
            options: [
              "The learning rate",
              "A deeper architecture",
              "A different activation",
              "A larger dataset",
            ],
            correctIndex: 0,
            explanation:
              "It is the single parameter most likely to be wrong by an order of magnitude, and the cheapest to change.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What does a diverging loss most often indicate?",
            options: [
              "The learning rate is too high",
              "The batch size is too small",
              "The model lacks capacity",
              "Gradients were not zeroed",
            ],
            correctIndex: 0,
            explanation:
              "A wandering loss points at zeroing; a diverging one points at the step size.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "Which failure is easier to waste time on?",
            options: [
              "A learning rate far too low",
              "A learning rate far too high",
              "A dtype mismatch",
              "A device mismatch",
            ],
            correctIndex: 0,
            explanation:
              "It looks like training. It just never arrives.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What does the course say about copying hyperparameters from a paper?",
            options: [
              "Choose the learning rate empirically instead",
              "Always copy them exactly",
              "Copy them and halve the value",
              "Papers rarely report them",
            ],
            correctIndex: 0,
            explanation:
              "The advice is procedural because no formula replaces trying a range on your own data.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What is the relationship between a batch and the gradient SGD uses?",
            options: [
              "The batch supplies the gradient estimate",
              "The batch determines the learning rate",
              "The batch is unrelated to the gradient",
              "The gradient is averaged across epochs",
            ],
            correctIndex: 0,
            explanation:
              "Which is why batch size and gradient noise are linked.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What would make a universal approximation result practically useful?",
            options: [
              "A bound on the units needed and a guarantee training finds them",
              "A proof for deeper networks",
              "An extension to more activations",
              "A faster proof technique",
            ],
            correctIndex: 0,
            explanation:
              "Those are precisely the two things it does not provide.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "Why does the lesson insist the theorem is not a reason to prefer shallow networks?",
            options: [
              "It says nothing about practical trainability",
              "It applies only to deep networks",
              "It was proved for width, not depth",
              "It has been superseded",
            ],
            correctIndex: 0,
            explanation:
              "Existence at some width says nothing about what trains well at a realistic size.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What is the honest summary of Adam offered by the lesson?",
            options: [
              "A strong default worth reaching for first",
              "The correct choice in all cases",
              "Obsolete compared with plain SGD",
              "Only suitable for small models",
            ],
            correctIndex: 0,
            explanation:
              "A strong default that you should be willing to abandon is a different claim from a best method.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What does adding depth require, that adding width does not?",
            options: [
              "Nonlinearity between the layers",
              "A larger batch size",
              "A learning rate schedule",
              "Per-parameter step scaling",
            ],
            correctIndex: 0,
            explanation:
              "Without it the extra layers collapse and the depth is decorative.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What is the parameter-count comparison the lesson makes?",
            options: [
              "Depth versus width at equal parameters",
              "Adam versus SGD at equal epochs",
              "Batch size versus learning rate",
              "Linear versus MLP at equal accuracy",
            ],
            correctIndex: 0,
            explanation:
              "Holding parameters fixed is what makes the depth-versus-width question answerable at all.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What role does the linear baseline play in reporting a result?",
            options: [
              "It makes the improvement attributable",
              "It replaces a validation set",
              "It sets the learning rate",
              "It determines the architecture",
            ],
            correctIndex: 0,
            explanation:
              "An improvement over nothing is not an improvement over anything in particular.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "Which is true of activation functions the lesson surveys?",
            options: [
              "They are applied elementwise",
              "They introduce new trainable weights",
              "They replace the loss function",
              "They operate across the batch dimension",
            ],
            correctIndex: 0,
            explanation:
              "Being elementwise is what keeps them cheap and what makes their gradient behaviour local.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does the course mean by the practical summary of activations?",
            options: [
              "Know their gradient behaviour, not just their shape",
              "Memorise their formulas",
              "Always use the newest one",
              "Choose by output range alone",
            ],
            correctIndex: 0,
            explanation:
              "How a function behaves in the backward pass is what determines whether a deep stack trains.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "Why can a linear model be described as having no hidden layer?",
            options: [
              "Its input maps straight to its output",
              "It has no parameters to learn",
              "It uses no loss function",
              "It cannot be batched",
            ],
            correctIndex: 0,
            explanation:
              "A hidden layer is one whose output is consumed by another layer rather than being the prediction.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "What is the danger of skipping the baseline?",
            options: [
              "You cannot attribute any later gain",
              "Training will not converge",
              "Gradients will not accumulate",
              "The optimizer cannot be chosen",
            ],
            correctIndex: 0,
            explanation:
              "Which turns an experimental result into an anecdote.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "What does the optimizer do with the gradients the backward pass produced?",
            options: [
              "Converts them into a parameter update",
              "Recomputes them more precisely",
              "Stores them for the next epoch",
              "Zeroes them automatically",
            ],
            correctIndex: 0,
            explanation:
              "How that conversion is done is exactly what distinguishes SGD, momentum and Adam.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
        ],
      },
    },
    {
      slug: "deep-learning-final",
      title: "Final assessment \u00b7 Deep Learning Foundations",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is this course relative to Neuromatch's own?",
            options: [
              "A companion",
              "A replacement",
              "An endorsed prep track",
              "A certificate pathway",
            ],
            correctIndex: 0,
            explanation:
              "It teaches the concepts that make the full-time material followable, and says so rather than implying equivalence.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which licence permits this adaptation?",
            options: [
              "CC BY 4.0",
              "CC BY-NC-SA 4.0",
              "All rights reserved",
              "Academic use only",
            ],
            correctIndex: 0,
            explanation:
              "No NonCommercial clause, so adaptation is legitimate given attribution, links and marked modifications.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which is NOT required by CC BY 4.0?",
            options: [
              "Licensing the derivative under the same terms",
              "Attribution",
              "A link to the licence",
              "Marking modifications",
            ],
            correctIndex: 0,
            explanation:
              "Share-alike belongs to a different licence.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Broadcasting aligns dimensions from which side?",
            options: [
              "The right",
              "The left",
              "Whichever is longer",
              "Neither; ranks must match",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a trailing dimension of 10 pairs with 10, and a leading 64 has nothing to pair with.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "(64, 10) plus (10,) gives what?",
            options: [
              "(64, 10)",
              "An error",
              "(64, 10, 10)",
              "(74, 10)",
            ],
            correctIndex: 0,
            explanation:
              "The absent leading dimension is treated as 1 and stretched to 64.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "(64, 10) plus (64,) does what?",
            options: [
              "Fails, because 10 is compared with 64",
              "Succeeds, giving (64, 10)",
              "Succeeds, giving (64, 64)",
              "Succeeds after an implicit transpose",
            ],
            correctIndex: 0,
            explanation:
              "Reshaping to (64, 1) is how you say you meant one value per row.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What is the danger of an unintended broadcast?",
            options: [
              "It returns a wrong number rather than raising",
              "It crashes the process",
              "It corrupts the dataset",
              "It changes the device",
            ],
            correctIndex: 0,
            explanation:
              "That silence is what lets it survive an entire run.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What must match before two tensors combine?",
            options: [
              "Dtype and device",
              "Shape exactly",
              "Gradient state",
              "Creation order",
            ],
            correctIndex: 0,
            explanation:
              "Broadcasting relaxes shape; it does not relax dtype or device.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "Why is a tensor not just an array?",
            options: [
              "It has a device and records its own computation",
              "It holds only floats",
              "It is always two-dimensional",
              "It cannot be reshaped",
            ],
            correctIndex: 0,
            explanation:
              "GPU execution and automatic differentiation are the reasons a separate library exists.",
            sourceLessonSlug: "tensors-and-shapes",
          },
          {
            prompt: "What mechanism does autograd implement?",
            options: [
              "The chain rule with bookkeeping",
              "Finite differences",
              "Symbolic differentiation of source",
              "Random search",
            ],
            correctIndex: 0,
            explanation:
              "Backpropagation is the same idea under an earlier name.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Calling backward twice without zeroing does what?",
            options: [
              "Adds the gradients together",
              "Raises an error",
              "Overwrites the first set",
              "Clears the graph",
            ],
            correctIndex: 0,
            explanation:
              "Deliberate, because it lets small batches be summed into one effective large batch.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Forgetting to zero gradients produces which symptom?",
            options: [
              "A wandering loss and no error",
              "An immediate exception",
              "A device mismatch",
              "A dtype error",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly why it is a classic bug rather than an obvious one.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why does a no-gradient context save memory?",
            options: [
              "No intermediates are retained for a backward pass",
              "Tensors are stored at lower precision",
              "The model is moved to the CPU",
              "The batch size is reduced",
            ],
            correctIndex: 0,
            explanation:
              "Nothing will call backward during evaluation, so the graph is pure cost.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Why detach a running loss?",
            options: [
              "An attached loss keeps the whole history alive",
              "It would otherwise be printed wrongly",
              "The optimizer would update it",
              "It would change dtype",
            ],
            correctIndex: 0,
            explanation:
              "Every intermediate from every batch stays reachable otherwise.",
            sourceLessonSlug: "autograd-and-the-chain-rule",
          },
          {
            prompt: "Which order is correct?",
            options: [
              "Zero, forward, loss, backward, step",
              "Forward, backward, zero, step, loss",
              "Zero, backward, forward, loss, step",
              "Loss, forward, zero, backward, step",
            ],
            correctIndex: 0,
            explanation:
              "Zeroing first is what prevents contamination from the previous iteration.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "An epoch is what?",
            options: [
              "One pass over the training set",
              "One parameter update",
              "One batch",
              "One validation run",
            ],
            correctIndex: 0,
            explanation:
              "A batch is the subset; many batches make the pass.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What does the optimizer's step consume?",
            options: [
              "The gradients backward produced",
              "The raw loss value",
              "The batch itself",
              "The learning rate schedule only",
            ],
            correctIndex: 0,
            explanation:
              "Backward computes them; step turns them into a parameter update.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What does zeroing NOT clear?",
            options: [
              "Momentum state",
              "Accumulated gradients",
              "Last iteration's contamination",
              "Anything needed for a fresh backward",
            ],
            correctIndex: 0,
            explanation:
              "Optimizer state persists by design.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "Why is the training loop taught first?",
            options: [
              "It is invariant across architectures",
              "It is the hardest part",
              "It must be rewritten per model",
              "It determines the licence",
            ],
            correctIndex: 0,
            explanation:
              "Learn it once and it transfers; the model inside it is what varies.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "A linear model is a network with how many layers?",
            options: [
              "One",
              "Zero",
              "Two",
              "As many as its features",
            ],
            correctIndex: 0,
            explanation:
              "Framing it as one layer is what makes adding depth continuous rather than a leap.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "Why fit a linear baseline first?",
            options: [
              "It makes any later improvement attributable",
              "It initialises the deeper model",
              "It is required by the optimizer",
              "It fixes the batch size",
            ],
            correctIndex: 0,
            explanation:
              "An improvement over nothing is not an improvement over anything in particular.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "Where does linearity often hide?",
            options: [
              "In the features",
              "In the loss",
              "In the optimizer",
              "In the dtype",
            ],
            correctIndex: 0,
            explanation:
              "A model linear in its parameters can be highly nonlinear in the raw inputs.",
            sourceLessonSlug: "linear-models-as-networks",
          },
          {
            prompt: "Stacking linear layers without activations yields what?",
            options: [
              "A single linear model",
              "A universal approximator",
              "An untrainable model",
              "A deeper but equivalent-capacity model",
            ],
            correctIndex: 0,
            explanation:
              "Composed linear maps are one linear map, which is the entire argument for nonlinearity.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "The universal approximation theorem is what kind of result?",
            options: [
              "An existence result",
              "A convergence guarantee",
              "A bound on width",
              "An empirical finding",
            ],
            correctIndex: 0,
            explanation:
              "It says suitable weights exist and nothing about finding them.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does the theorem say about the number of hidden units required?",
            options: [
              "Nothing; it may be astronomical",
              "That it is linear in the inputs",
              "That two layers suffice",
              "That it shrinks with data size",
            ],
            correctIndex: 0,
            explanation:
              "One of the two reasons it proves less than it is quoted for.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does the theorem say about gradient descent?",
            options: [
              "Nothing",
              "That it converges",
              "That it converges given enough epochs",
              "That it fails for deep networks",
            ],
            correctIndex: 0,
            explanation:
              "Existence and findability are separate claims.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "At equal parameter count, what usually wins in practice?",
            options: [
              "Depth",
              "Width",
              "Neither, by the theorem",
              "It depends only on the optimizer",
            ],
            correctIndex: 0,
            explanation:
              "Which the theorem does not predict, and practice had to answer.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What is an activation function for?",
            options: [
              "Introducing nonlinearity",
              "Normalising the loss",
              "Scheduling the learning rate",
              "Selecting the device",
            ],
            correctIndex: 0,
            explanation:
              "It is applied elementwise and adds no parameters of its own.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What is stochastic about SGD?",
            options: [
              "The gradient is estimated from a batch",
              "The learning rate varies randomly",
              "Initialisation is random",
              "Batches are shuffled",
            ],
            correctIndex: 0,
            explanation:
              "Random initialisation is a separate thing; the stochasticity is in the estimate.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What does momentum contribute?",
            options: [
              "A running average of past gradients",
              "A per-parameter learning rate",
              "Curvature information",
              "An adaptive batch size",
            ],
            correctIndex: 0,
            explanation:
              "It damps oscillation across a valley and accelerates along a consistent direction.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What distinguishes Adam?",
            options: [
              "Per-parameter step scaling from gradient history",
              "Use of the exact Hessian",
              "No learning rate at all",
              "Gradient-free updates",
            ],
            correctIndex: 0,
            explanation:
              "Which is what makes it forgiving of a badly chosen global rate.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What is the honest caveat about Adam?",
            options: [
              "Well-tuned SGD can generalise better",
              "It cannot use momentum",
              "It suits only convolutional nets",
              "It requires 16-bit precision",
            ],
            correctIndex: 0,
            explanation:
              "A strong default is a different claim from a strictly better method.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What does a learning rate schedule typically do?",
            options: [
              "Start higher and decrease",
              "Start lower and increase",
              "Hold constant by definition",
              "Vary with the batch index only",
            ],
            correctIndex: 0,
            explanation:
              "Large steps explore, small steps settle, and the schedule sequences the two.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "How should a learning rate be chosen?",
            options: [
              "Empirically, over a range",
              "From the parameter count",
              "By copying the original paper",
              "From the batch size",
            ],
            correctIndex: 0,
            explanation:
              "No formula replaces trying it on your own data, which is why the advice is procedural.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "A diverging loss most often means what?",
            options: [
              "The learning rate is too high",
              "Gradients were not zeroed",
              "The model lacks capacity",
              "The batch is too small",
            ],
            correctIndex: 0,
            explanation:
              "A wandering loss points at zeroing; a diverging one points at step size.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "Which failure is easiest to waste a week on?",
            options: [
              "A learning rate far too low",
              "A learning rate far too high",
              "A device mismatch",
              "A dtype mismatch",
            ],
            correctIndex: 0,
            explanation:
              "It looks exactly like training, and simply never arrives.",
            sourceLessonSlug: "optimizers-and-learning-rates",
          },
          {
            prompt: "What is the correct reading of the universal approximation theorem?",
            options: [
              "Reassurance about capacity, not a practical guide",
              "A recipe for choosing width",
              "Proof that shallow beats deep",
              "A convergence theorem",
            ],
            correctIndex: 0,
            explanation:
              "It rules out a worry about expressive power and predicts nothing about practice.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "What does an MLP require between its layers?",
            options: [
              "A nonlinearity",
              "A learning rate schedule",
              "A larger batch",
              "Per-parameter scaling",
            ],
            correctIndex: 0,
            explanation:
              "Without it the stack collapses and the depth is decorative.",
            sourceLessonSlug: "mlps-and-activations",
          },
          {
            prompt: "Which pairing is right?",
            options: [
              "Backward computes gradients, step applies them",
              "Step computes gradients, backward applies them",
              "Zero computes gradients, step clears them",
              "Forward computes gradients, loss applies them",
            ],
            correctIndex: 0,
            explanation:
              "Confusing the two is what produces loops that train on stale or absent gradients.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "What does this course NOT include?",
            options: [
              "Notebooks, datasets, projects and pods",
              "Tensors and shapes",
              "Autograd",
              "Optimizers",
            ],
            correctIndex: 0,
            explanation:
              "Those need the full-time structure, and the course is explicit that it is not that.",
            sourceLessonSlug: "scope-and-attribution",
          },
        ],
      },
    },
  ],
};
