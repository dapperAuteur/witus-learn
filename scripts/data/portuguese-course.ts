// Authored, tense-progressive Brazilian Portuguese course — mirrors the Spanish
// template. Same "Curb Appeall and friends" story, taught tense by tense. Uses
// "você" for the second person (Brazilian usage); tu exists regionally. Grammar
// reviewed. Committed so it survives a fresh clone.

import type { AuthoredCourse } from "./authored-course";

export const PORTUGUESE_COURSE: AuthoredCourse = {
  title: "Portuguese, Tense by Tense — the Curb Appeall Story",
  description:
    "Learn to speak Brazilian Portuguese by following one continuous story about Curb Appeall and friends learning healthy-living and money habits. Each unit teaches one tense — present, near future, preterite, imperfect, future, conditional, subjunctive — and ends with a conversation challenge so you produce the language yourself.",
  lessons: [
    {
      slug: "presente-regulares",
      title: "1 · Present tense: regular verbs and pronouns",
      body: `Portuguese verbs end in **-ar**, **-er**, or **-ir**. Drop the ending and add a new one for each subject. Brazilians usually say **você** for "you" (it takes the same form as he/she); **tu** is used in some regions.

| | ajudar (to help) | aprender (to learn) | dividir (to share) |
|---|---|---|---|
| eu | ajudo | aprendo | divido |
| você/ele/ela | ajuda | aprende | divide |
| nós | ajudamos | aprendemos | dividimos |
| vocês/eles | ajudam | aprendem | dividem |

### Na história
**Curb Appeall ajuda o Platypus a preparar um piquenique saudável.**
Curb Appeall helps Platypus prepare a healthy picnic.

**O grupo escuta uma lontra que fala sobre dinheiro.**
The group listens to an otter who talks about money.

**Nós dividimos a comida com as crianças do bairro.**
We share the food with the neighborhood kids.

**Eu aprendo a cozinhar legumes frescos todos os dias.**
I learn to cook fresh vegetables every day.

### Agora é com você (now you talk)
- O que você faz para ser saudável? (What do you do to be healthy?)
- Diga três coisas que você aprende esta semana. (Say three things you are learning this week.)`,
    },
    {
      slug: "presente-irregulares",
      title: "2 · Present tense: the key irregular verbs",
      body: `A few verbs are irregular but essential. **Ser** and **estar** both mean "to be": use **ser** for identity and traits, **estar** for states and how you feel right now.

| | ser | estar | ter | ir | querer | fazer |
|---|---|---|---|---|---|---|
| eu | sou | estou | tenho | vou | quero | faço |
| você/ele/ela | é | está | tem | vai | quer | faz |
| nós | somos | estamos | temos | vamos | queremos | fazemos |
| vocês/eles | são | estão | têm | vão | querem | fazem |

### Na história
**Curb e seus amigos querem aprender a economizar.**
Curb and his friends want to learn to save.

**A lontra é muito paciente e está sempre pronta para ensinar.**
The otter is very patient and is always ready to teach.

**Hoje nós fazemos um smoothie com frutas e legumes.**
Today we make a smoothie with fruits and vegetables.

**Eu tenho um jardim pequeno onde cultivo ervas.**
I have a small garden where I grow herbs.

### Agora é com você
- Como você está hoje? O que você quer fazer? (How are you today? What do you want to do?)
- Descreva um amigo usando ser e estar. (Describe a friend using ser and estar.)`,
    },
    {
      slug: "futuro-proximo",
      title: "3 · The near future: ir + infinitive",
      body: `The easiest future is **ir + an infinitive** — like English "going to". In Portuguese there is no "a" between them: conjugate **ir** (vou, vai, vamos, vão) and add the base verb.

**Formula:** eu vou + _cozinhar_ → I am going to cook.

### Na história
**Amanhã nós vamos cozinhar uma sopa com os legumes da horta.**
Tomorrow we are going to cook a soup with the vegetables from the garden.

**Curb vai compartilhar a receita dele com o bairro.**
Curb is going to share his recipe with the neighborhood.

**Eu vou caminhar ao redor do lago para fazer exercício.**
I am going to walk around the lake to exercise.

**Você vai estudar nutrição com a gente?**
Are you going to study nutrition with us?

### Agora é com você
- O que você vai fazer no fim de semana? (What are you going to do this weekend?)
- Diga três planos com "ir". (Say three plans using "ir".)`,
    },
    {
      slug: "preterito-perfeito",
      title: "4 · The preterite: finished actions in the past",
      body: `The **pretérito perfeito** narrates completed past actions — the events of the story.

| | ajudar | aprender | dividir |
|---|---|---|---|
| eu | ajudei | aprendi | dividi |
| você/ele/ela | ajudou | aprendeu | dividiu |
| nós | ajudamos | aprendemos | dividimos |
| vocês/eles | ajudaram | aprenderam | dividiram |

Key irregulars: **fazer** → fiz, fez; **ir / ser** → fui, foi; **ter** → tive, teve.

### Na história
**Curb e seus amigos decidiram estudar nutrição.**
Curb and his friends decided to study nutrition.

**O canguru ensinou os outros a preparar um smoothie saudável.**
The kangaroo taught the others to prepare a healthy smoothie.

**Nós aprendemos a economizar água com sistemas de irrigação eficientes.**
We learned to save water with efficient irrigation systems.

**Depois da refeição, eles deram um passeio pelo bairro.**
After the meal, they took a walk around the neighborhood.

### Agora é com você
- O que você fez ontem? (What did you do yesterday?)
- Conte uma coisa que você aprendeu na semana passada. (Tell one thing you learned last week.)`,
    },
    {
      slug: "preterito-imperfeito",
      title: "5 · The imperfect: how things used to be",
      body: `The **pretérito imperfeito** describes the past that was ongoing, habitual, or background — "used to" and "was -ing".

| | trabalhar | aprender / dividir |
|---|---|---|
| eu | trabalhava | aprendia / dividia |
| você/ele/ela | trabalhava | aprendia / dividia |
| nós | trabalhávamos | aprendíamos / dividíamos |
| vocês/eles | trabalhavam | aprendiam / dividiam |

Irregulars: **ser** → era, **ir** → ia, **ter** → tinha, **pôr** → punha.

### Na história
**Quando era criança, Curb caminhava até o mercado toda manhã.**
When he was a child, Curb walked to the market every morning.

**Enquanto descansavam, os amigos conversavam sobre seus sonhos.**
While they were resting, the friends talked about their dreams.

**A horta estava sempre cheia de frutas frescas.**
The garden was always full of fresh fruit.

### Agora é com você
- O que você fazia quando era criança? (What did you used to do as a child?)
- Descreva sua rotina de cinco anos atrás. (Describe your routine from five years ago.)`,
    },
    {
      slug: "perfeito-vs-imperfeito",
      title: "6 · Preterite vs. imperfect",
      body: `Choosing between the two past tenses is the heart of storytelling. Use the **pretérito perfeito** for a single completed event, and the **imperfeito** for the ongoing scene around it.

- **Imperfeito** = the background (what was already happening).
- **Perfeito** = the event that interrupts or moves the story forward.

### Na história
**Enquanto cozinhávamos, o Platypus chegou com mais legumes.**
While we were cooking, Platypus arrived with more vegetables.

**Curb caminhava pelo parque quando viu a lontra.**
Curb was walking through the park when he saw the otter.

**Todos falavam sobre dinheiro, mas a lontra mudou de assunto.**
Everyone was talking about money, but the otter changed the subject.

### Agora é com você
- Conte uma história curta do seu dia usando os dois tempos. (Tell a short story of your day using both tenses.)
- Complete: "Eu dormia quando..." (Finish: "I was sleeping when...")`,
    },
    {
      slug: "futuro",
      title: "7 · The future tense: plans and predictions",
      body: `The **futuro do presente** adds endings onto the whole infinitive (the same for -ar, -er, and -ir). In everyday speech Brazilians often prefer "ir + infinitive", but this is the formal future.

| | trabalhar | aprender | dividir |
|---|---|---|---|
| eu | trabalharei | aprenderei | dividirei |
| você/ele/ela | trabalhará | aprenderá | dividirá |
| nós | trabalharemos | aprenderemos | dividiremos |
| vocês/eles | trabalharão | aprenderão | dividirão |

Only three verbs are irregular: **fazer** → farei, **dizer** → direi, **trazer** → trarei.

### Na história
**No ano que vem, Curb e seus amigos abrirão um mercado saudável.**
Next year, Curb and his friends will open a healthy market.

**Nós economizaremos dinheiro e compartilharemos os lucros com o bairro.**
We will save money and share the profits with the neighborhood.

**Você aprenderá a cozinhar com a gente?**
Will you learn to cook with us?

### Agora é com você
- Como será sua vida daqui a dez anos? (What will your life be like in ten years?)
- Faça três previsões para o próximo ano. (Make three predictions for next year.)`,
    },
    {
      slug: "condicional",
      title: "8 · The conditional: politeness and “would”",
      body: `The **futuro do pretérito** (conditional) means "would" — for hypotheticals and politeness. Add **-ia, -ia, -íamos, -iam** to the infinitive (same irregular stems as the future: faria, diria, traria).

### Na história
**Eu gostaria de aprender mais receitas saudáveis.**
I would like to learn more healthy recipes.

**Curb compartilharia a horta dele com o bairro inteiro.**
Curb would share his garden with the whole neighborhood.

**Você poderia me ensinar a fazer esse smoothie?**
Could you teach me to make that smoothie?

**Sem um orçamento, seria difícil economizar.**
Without a budget, it would be hard to save.

### Agora é com você
- O que você faria com mais tempo livre? (What would you do with more free time?)
- Peça algo com educação usando "Você poderia...?" (Ask for something politely using "Could you...?")`,
    },
    {
      slug: "subjuntivo-presente",
      title: "9 · The present subjunctive: wishes, advice, and doubt",
      body: `The **presente do subjuntivo** appears after expressions of wish, advice, or doubt — usually with **que**. Take the **eu** form of the present, drop the **-o**, and add the "opposite" endings (-ar verbs take **-e**; -er/-ir verbs take **-a**).

**comer** → eu como → que eu coma, você coma, nós comamos, vocês comam

Triggers: _é importante que_, _recomendo que_, _quero que_, _tomara que_, _duvido que_.

### Na história
**É importante que nós comamos mais legumes.**
It is important that we eat more vegetables.

**A lontra recomenda que nós economizemos um pouco toda semana.**
The otter recommends that we save a little each week.

**Curb quer que seus amigos aprendam a cozinhar.**
Curb wants his friends to learn to cook.

**Tomara que a horta cresça rápido.**
Hopefully the garden grows quickly.

### Agora é com você
- Dê três conselhos de saúde com "É importante que...". (Give three health tips with "It is important that...".)
- Expresse um desejo com "Tomara que...". (Express a wish with "Hopefully...".)`,
    },
  ],
};
