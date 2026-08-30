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
