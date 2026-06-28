// Authored, tense-progressive Spanish course (the template for the other
// languages). Goal: teach TENSE (present → near future → preterite → imperfect →
// contrast → future → conditional → subjunctive) and CONVERSATION, all through the
// gitignored "Curb Appeall and friends" healthy-living story + its verb list.
//
// Committed (unlike the raw content/ CSVs) so the course survives a fresh clone and
// stays version-controlled. Grammar reviewed for correctness. The seed upserts these
// by (courseId, slug), so editing a body here and re-running `pnpm seed:languages`
// updates the lesson in place.

import type { AuthoredCourse } from "./authored-course";

export const SPANISH_COURSE: AuthoredCourse = {
  title: "Spanish, Tense by Tense — the Curb Appeall Story",
  description:
    "Learn to speak Spanish by following one continuous story about Curb Appeall and friends learning healthy-living and money habits. Each unit teaches one tense — present, near future, preterite, imperfect, future, conditional, subjunctive — and ends with a conversation challenge so you produce the language yourself.",
  lessons: [
    {
      slug: "presente-regulares",
      title: "1 · Present tense: regular verbs and pronouns",
      body: `Spanish verbs end in **-ar**, **-er**, or **-ir**. To talk about what happens now or what people usually do, you drop the ending and add a new one for each subject.

**Subject pronouns:** yo (I), tú (you), él / ella / usted (he / she / you formal), nosotros (we), vosotros (you all, Spain), ellos / ellas / ustedes (they / you all).

| | ayudar (to help) | aprender (to learn) | compartir (to share) |
|---|---|---|---|
| yo | ayudo | aprendo | comparto |
| tú | ayudas | aprendes | compartes |
| él/ella/usted | ayuda | aprende | comparte |
| nosotros | ayudamos | aprendemos | compartimos |
| vosotros | ayudáis | aprendéis | compartís |
| ellos/ustedes | ayudan | aprenden | comparten |

### En la historia
**Curb Appeall ayuda a Platypus a preparar un picnic saludable.**
Curb Appeall helps Platypus prepare a healthy picnic.

**El grupo escucha a una nutria que habla sobre el dinero.**
The group listens to an otter who talks about money.

**Nosotros compartimos la comida con los niños del vecindario.**
We share the food with the neighborhood kids.

**Yo aprendo a cocinar verduras frescas cada día.**
I learn to cook fresh vegetables every day.

### Ahora te toca (now you talk)
- ¿Qué haces para estar saludable? (What do you do to stay healthy?)
- Di tres cosas que aprendes esta semana. (Say three things you are learning this week.)`,
    },
    {
      slug: "presente-irregulares",
      title: "2 · Present tense: the key irregular verbs",
      body: `A handful of verbs are irregular but you use them constantly. **Ser** and **estar** both mean "to be": use **ser** for identity and traits, **estar** for location and how you feel right now.

| | ser | estar | tener | ir | querer | hacer |
|---|---|---|---|---|---|---|
| yo | soy | estoy | tengo | voy | quiero | hago |
| tú | eres | estás | tienes | vas | quieres | haces |
| él/ella | es | está | tiene | va | quiere | hace |
| nosotros | somos | estamos | tenemos | vamos | queremos | hacemos |
| ellos/ustedes | son | están | tienen | van | quieren | hacen |

### En la historia
**Curb y sus amigos quieren aprender a ahorrar.**
Curb and his friends want to learn to save.

**La nutria es muy paciente y siempre está lista para enseñar.**
The otter is very patient and is always ready to teach.

**Hoy hacemos un batido con frutas y verduras.**
Today we make a smoothie with fruits and vegetables.

**Yo tengo un jardín pequeño donde cultivo hierbas.**
I have a small garden where I grow herbs.

### Ahora te toca
- ¿Cómo estás hoy y qué quieres hacer? (How are you today and what do you want to do?)
- Describe a un amigo usando ser y estar. (Describe a friend using ser and estar.)`,
    },
    {
      slug: "futuro-proximo",
      title: "3 · The near future: ir + a + infinitive",
      body: `The easiest way to talk about the future is **ir + a + an infinitive** — exactly like English "going to". Conjugate only **ir** (voy, vas, va, vamos, van) and keep the second verb in its base form.

**Formula:** voy a + _cocinar_ → I am going to cook.

### En la historia
**Mañana vamos a cocinar una sopa con las verduras del jardín.**
Tomorrow we are going to cook a soup with the vegetables from the garden.

**Curb va a compartir su receta con el vecindario.**
Curb is going to share his recipe with the neighborhood.

**Yo voy a caminar alrededor del lago para hacer ejercicio.**
I am going to walk around the lake to exercise.

**¿Vas a estudiar nutrición con nosotros?**
Are you going to study nutrition with us?

### Ahora te toca
- ¿Qué vas a hacer este fin de semana? (What are you going to do this weekend?)
- Di tres planes usando "ir a". (Say three plans using "ir a".)`,
    },
    {
      slug: "preterito",
      title: "4 · The preterite: finished actions in the past",
      body: `The **pretérito** narrates completed past actions — the events of the story. Regular endings:

| | ayudar | aprender | compartir |
|---|---|---|---|
| yo | ayudé | aprendí | compartí |
| tú | ayudaste | aprendiste | compartiste |
| él/ella | ayudó | aprendió | compartió |
| nosotros | ayudamos | aprendimos | compartimos |
| ellos/ustedes | ayudaron | aprendieron | compartieron |

Three must-know irregulars: **hacer** → hice, hizo; **ir / ser** → fui, fue; **tener** → tuve, tuvo.

### En la historia
**Curb y sus amigos decidieron estudiar nutrición.**
Curb and his friends decided to study nutrition.

**El canguro enseñó a los demás a preparar un batido saludable.**
The kangaroo taught the others to prepare a healthy smoothie.

**Aprendimos a ahorrar agua con sistemas de riego eficientes.**
We learned to save water with efficient irrigation systems.

**Después de la comida, dieron un paseo por el vecindario.**
After the meal, they took a walk around the neighborhood.

### Ahora te toca
- ¿Qué hiciste ayer? (What did you do yesterday?)
- Cuenta una cosa que aprendiste la semana pasada. (Tell one thing you learned last week.)`,
    },
    {
      slug: "imperfecto",
      title: "5 · The imperfect: how things used to be",
      body: `The **imperfecto** describes the past that was ongoing, habitual, or background — "used to" and "was -ing". The endings are very regular:

| | trabajar | aprender / compartir |
|---|---|---|
| yo | trabajaba | aprendía / compartía |
| tú | trabajabas | aprendías / compartías |
| él/ella | trabajaba | aprendía / compartía |
| nosotros | trabajábamos | aprendíamos / compartíamos |
| ellos/ustedes | trabajaban | aprendían / compartían |

Only three irregulars exist: **ser** → era, **ir** → iba, **ver** → veía.

### En la historia
**Cuando era niño, Curb caminaba al mercado cada mañana.**
When he was a child, Curb walked to the market every morning.

**Mientras descansaban, los amigos hablaban sobre sus sueños.**
While they were resting, the friends talked about their dreams.

**El jardín siempre estaba lleno de frutas frescas.**
The garden was always full of fresh fruit.

### Ahora te toca
- ¿Qué hacías cuando eras niño o niña? (What did you used to do as a child?)
- Describe tu rutina de hace cinco años. (Describe your routine from five years ago.)`,
    },
    {
      slug: "preterito-vs-imperfecto",
      title: "6 · Preterite vs. imperfect",
      body: `Spanish has two past tenses and choosing between them is the heart of storytelling. Use the **pretérito** for a single completed event, and the **imperfecto** for the ongoing scene around it.

- **Imperfecto** = the background (what was already happening).
- **Pretérito** = the event that interrupts or moves the story forward.

### En la historia
**Mientras cocinábamos, Platypus llegó con más verduras.**
While we were cooking, Platypus arrived with more vegetables.

**Curb caminaba por el parque cuando vio a la nutria.**
Curb was walking through the park when he saw the otter.

**Todos hablaban de dinero, pero la nutria cambió el tema a la salud.**
Everyone was talking about money, but the otter changed the subject to health.

### Ahora te toca
- Cuenta una historia corta de tu día usando los dos tiempos. (Tell a short story of your day using both tenses.)
- Completa: "Yo dormía cuando ..." (Finish: "I was sleeping when ...")`,
    },
    {
      slug: "futuro",
      title: "7 · The future tense: plans and predictions",
      body: `The simple **futuro** adds one set of endings directly onto the whole infinitive — no need to drop anything. The endings are the same for -ar, -er, and -ir verbs.

| | trabajar | aprender | compartir |
|---|---|---|---|
| yo | trabajaré | aprenderé | compartiré |
| tú | trabajarás | aprenderás | compartirás |
| él/ella | trabajará | aprenderá | compartirá |
| nosotros | trabajaremos | aprenderemos | compartiremos |
| ellos/ustedes | trabajarán | aprenderán | compartirán |

Common irregular stems: **tener** → tendré, **hacer** → haré, **poder** → podré.

### En la historia
**El año próximo, Curb y sus amigos abrirán un mercado saludable.**
Next year, Curb and his friends will open a healthy market.

**Ahorraremos dinero y compartiremos las ganancias con el vecindario.**
We will save money and share the profits with the neighborhood.

**¿Aprenderás a cocinar con nosotros?**
Will you learn to cook with us?

### Ahora te toca
- ¿Cómo será tu vida en diez años? (What will your life be like in ten years?)
- Haz tres predicciones para el próximo año. (Make three predictions for next year.)`,
    },
    {
      slug: "condicional",
      title: "8 · The conditional: politeness and “would”",
      body: `The **condicional** means "would" — for hypotheticals and for being polite. Take the infinitive and add **-ía, -ías, -ía, -íamos, -ían** (the same irregular stems as the future: tendría, haría, podría).

### En la historia
**Me gustaría aprender más recetas saludables.**
I would like to learn more healthy recipes.

**Curb compartiría su jardín con todo el vecindario.**
Curb would share his garden with the whole neighborhood.

**¿Podrías enseñarme a hacer ese batido?**
Could you teach me to make that smoothie?

**Sin un presupuesto, sería difícil ahorrar.**
Without a budget, it would be hard to save.

### Ahora te toca
- ¿Qué harías con más tiempo libre? (What would you do with more free time?)
- Pide algo con cortesía usando "¿Podrías...?" (Ask for something politely using "Could you...?")`,
    },
    {
      slug: "subjuntivo-presente",
      title: "9 · The present subjunctive: wishes, advice, and doubt",
      body: `The **subjuntivo** appears after expressions of wish, advice, emotion, or doubt — usually with **que**. To form it, take the **yo** form of the present, drop the **-o**, and add the "opposite" endings (-ar verbs take **-e**; -er/-ir verbs take **-a**).

**hablar** → yo hablo → que hable, hables, hable, hablemos, hablen
**comer** → yo como → que coma, comas, coma, comamos, coman

Triggers: _es importante que_, _recomiendo que_, _quiero que_, _ojalá que_, _dudo que_.

### En la historia
**Es importante que comamos más verduras.**
It is important that we eat more vegetables.

**La nutria recomienda que ahorremos un poco cada semana.**
The otter recommends that we save a little each week.

**Curb quiere que sus amigos aprendan a cocinar.**
Curb wants his friends to learn to cook.

**Ojalá que el jardín crezca rápido.**
Hopefully the garden grows quickly.

### Ahora te toca
- Da tres consejos de salud con "Es importante que...". (Give three health tips with "It is important that...".)
- Expresa un deseo con "Ojalá que...". (Express a wish with "Hopefully...".)`,
    },
  ],
};
