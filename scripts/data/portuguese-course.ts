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
      slug: "presente-regulares-pratica",
      title: "Prática · presente regular",
      exercise: {
        instructions: "Escreva a forma correta do verbo no presente.",
        items: [
          {
            prompt: "eu ___ (ajudar)",
            answer: "ajudo",
            explanation: "Verbos em -ar: a forma de eu termina em -o (ajud-o).",
          },
          {
            prompt: "nós ___ (aprender)",
            answer: "aprendemos",
            explanation: "Verbos em -er: a forma de nós termina em -emos (aprend-emos).",
          },
          {
            prompt: "você ___ (dividir)",
            answer: "divide",
            explanation: "Verbos em -ir: você/ele/ela termina em -e (divid-e).",
          },
          {
            prompt: "vocês ___ (ajudar)",
            answer: "ajudam",
            explanation: "Verbos em -ar: vocês/eles termina em -am (ajud-am).",
          },
          {
            prompt: "eu ___ (aprender)",
            answer: "aprendo",
            explanation: "Verbos em -er: a forma de eu termina em -o (aprend-o).",
          },
          {
            prompt: "Traduza: We share the food.",
            answer: "Nós dividimos a comida.",
            accept: ["Dividimos a comida.", "Nós dividimos a comida"],
            explanation: "Da história: \"Nós dividimos a comida com as crianças.\"",
          },
        ],
      },
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
      slug: "presente-irregulares-pratica",
      title: "Prática · presente irregular",
      exercise: {
        instructions: "Complete com a forma irregular correta no presente.",
        items: [
          {
            prompt: "eu ___ (fazer)",
            answer: "faço",
            explanation: "Fazer é irregular: eu faço.",
          },
          {
            prompt: "nós ___ (ter)",
            answer: "temos",
            explanation: "Ter: eu tenho, você tem, nós temos, vocês têm.",
          },
          {
            prompt: "vocês ___ (ir)",
            answer: "vão",
            explanation: "Ir: eu vou, você vai, nós vamos, vocês vão.",
          },
          {
            prompt: "a lontra ___ (estar) pronta para ensinar",
            answer: "está",
            explanation: "Estar para estados: você/ele/ela está. Da história.",
          },
          {
            prompt: "eu ___ (querer) aprender a economizar",
            answer: "quero",
            explanation: "Querer: eu quero, você quer, nós queremos, vocês querem.",
          },
          {
            prompt: "Traduza: The otter is very patient.",
            answer: "A lontra é muito paciente.",
            accept: ["A lontra é muito paciente"],
            explanation: "Ser para traços: a lontra é. Da história.",
          },
        ],
      },
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
      slug: "futuro-proximo-pratica",
      title: "Prática · futuro próximo (ir + infinitivo)",
      exercise: {
        instructions: "Forme o futuro próximo: conjugue ir e some o infinitivo (sem \"a\").",
        items: [
          {
            prompt: "eu ___ caminhar (ir) ao redor do lago",
            answer: "vou",
            explanation: "Eu vou + infinitivo. Da história.",
          },
          {
            prompt: "nós ___ cozinhar (ir) uma sopa amanhã",
            answer: "vamos",
            explanation: "Nós vamos + infinitivo. Da história.",
          },
          {
            prompt: "Curb ___ compartilhar (ir) a receita dele",
            answer: "vai",
            explanation: "Você/ele/ela vai + infinitivo. Da história.",
          },
          {
            prompt: "você ___ estudar (ir) nutrição com a gente?",
            answer: "vai",
            explanation: "Você vai + infinitivo. Da história.",
          },
          {
            prompt: "Complete o infinitivo: eu vou ___ (to cook)",
            answer: "cozinhar",
            explanation: "Depois de ir vem o infinitivo: cozinhar.",
          },
          {
            prompt: "Traduza: Tomorrow we are going to cook.",
            answer: "Amanhã nós vamos cozinhar.",
            accept: ["Amanhã vamos cozinhar.", "Amanhã nós vamos cozinhar"],
            explanation: "Da história: \"Amanhã nós vamos cozinhar uma sopa.\"",
          },
        ],
      },
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
      slug: "preterito-perfeito-pratica",
      title: "Prática · pretérito perfeito",
      exercise: {
        instructions: "Escreva o pretérito perfeito (ações terminadas no passado).",
        items: [
          {
            prompt: "eu ___ (ajudar)",
            answer: "ajudei",
            explanation: "Verbos em -ar: eu termina em -ei (ajud-ei).",
          },
          {
            prompt: "você ___ (aprender)",
            answer: "aprendeu",
            explanation: "Verbos em -er: você/ele/ela termina em -eu (aprend-eu).",
          },
          {
            prompt: "vocês ___ (dividir)",
            answer: "dividiram",
            explanation: "Verbos em -ir: vocês/eles termina em -iram (divid-iram).",
          },
          {
            prompt: "eu ___ (fazer)",
            answer: "fiz",
            explanation: "Irregular: fazer → eu fiz, ele fez.",
          },
          {
            prompt: "ele ___ (ir/ser)",
            answer: "foi",
            explanation: "Irregular: ir e ser compartilham fui, foi.",
          },
          {
            prompt: "Traduza: We learned to save water.",
            answer: "Nós aprendemos a economizar água.",
            accept: ["Aprendemos a economizar água.", "Nós aprendemos a economizar água"],
            explanation: "Da história: \"Nós aprendemos a economizar água.\"",
          },
        ],
      },
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
      slug: "preterito-imperfeito-pratica",
      title: "Prática · pretérito imperfeito",
      exercise: {
        instructions: "Escreva o pretérito imperfeito (o passado contínuo ou habitual).",
        items: [
          {
            prompt: "Curb ___ (caminhar) até o mercado toda manhã",
            answer: "caminhava",
            explanation: "Verbos em -ar: você/ele/ela termina em -ava. Da história.",
          },
          {
            prompt: "nós ___ (trabalhar)",
            answer: "trabalhávamos",
            explanation: "Verbos em -ar: nós termina em -ávamos (trabalh-ávamos).",
          },
          {
            prompt: "eu ___ (aprender)",
            answer: "aprendia",
            explanation: "Verbos em -er/-ir: eu termina em -ia (aprend-ia).",
          },
          {
            prompt: "a horta ___ (ser) sempre cheia de frutas",
            answer: "era",
            explanation: "Irregular: ser → era. Da cena de fundo.",
          },
          {
            prompt: "os amigos ___ (conversar) sobre seus sonhos",
            answer: "conversavam",
            explanation: "Verbos em -ar: vocês/eles termina em -avam. Da história.",
          },
          {
            prompt: "Traduza: I used to have (ter) a garden.",
            answer: "Eu tinha uma horta.",
            accept: ["Tinha uma horta.", "Eu tinha uma horta"],
            explanation: "Irregular: ter → tinha no imperfeito.",
          },
        ],
      },
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
      slug: "perfeito-vs-imperfeito-pratica",
      title: "Prática · perfeito vs. imperfeito",
      exercise: {
        instructions: "Escolha o tempo certo: imperfeito para o fundo, perfeito para o evento.",
        items: [
          {
            prompt: "Curb ___ (caminhar — fundo) pelo parque quando viu a lontra",
            answer: "caminhava",
            explanation: "Cena de fundo em andamento → imperfeito. Da história.",
          },
          {
            prompt: "Curb caminhava pelo parque quando ___ (ver — evento) a lontra",
            answer: "viu",
            explanation: "Evento único que interrompe → pretérito perfeito. Da história.",
          },
          {
            prompt: "Enquanto ___ (cozinhar, nós — fundo), o Platypus chegou",
            answer: "cozinhávamos",
            explanation: "Ação em andamento → imperfeito (nós: -ávamos). Da história.",
          },
          {
            prompt: "Enquanto cozinhávamos, o Platypus ___ (chegar — evento)",
            answer: "chegou",
            explanation: "Evento que move a história → perfeito. Da história.",
          },
          {
            prompt: "Todos ___ (falar — fundo) sobre dinheiro, mas a lontra mudou de assunto",
            answer: "falavam",
            explanation: "Pano de fundo → imperfeito (eles: -avam). Da história.",
          },
          {
            prompt: "Traduza: ...but the otter changed (mudar) the subject.",
            answer: "...mas a lontra mudou de assunto.",
            accept: ["mas a lontra mudou de assunto", "a lontra mudou de assunto"],
            explanation: "Evento que avança a história → perfeito: mudou. Da história.",
          },
        ],
      },
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
      slug: "futuro-pratica",
      title: "Prática · futuro do presente",
      exercise: {
        instructions: "Escreva o futuro do presente (terminações somadas ao infinitivo inteiro).",
        items: [
          {
            prompt: "eu ___ (trabalhar)",
            answer: "trabalharei",
            explanation: "Eu: infinitivo + -ei (trabalhar-ei).",
          },
          {
            prompt: "você ___ (aprender)",
            answer: "aprenderá",
            explanation: "Você/ele/ela: infinitivo + -á (aprender-á).",
          },
          {
            prompt: "nós ___ (dividir)",
            answer: "dividiremos",
            explanation: "Nós: infinitivo + -emos (dividir-emos).",
          },
          {
            prompt: "Curb e os amigos ___ (abrir) um mercado saudável",
            answer: "abrirão",
            explanation: "Vocês/eles: infinitivo + -ão (abrir-ão). Da história.",
          },
          {
            prompt: "eu ___ (fazer)",
            answer: "farei",
            explanation: "Irregular: fazer → farei.",
          },
          {
            prompt: "Traduza: We will save money.",
            answer: "Nós economizaremos dinheiro.",
            accept: ["Economizaremos dinheiro.", "Nós economizaremos dinheiro"],
            explanation: "Da história: \"Nós economizaremos dinheiro.\"",
          },
        ],
      },
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
      slug: "condicional-pratica",
      title: "Prática · condicional (futuro do pretérito)",
      exercise: {
        instructions: "Escreva o condicional: infinitivo + -ia, -ia, -íamos, -iam.",
        items: [
          {
            prompt: "eu ___ (gostar) de aprender mais receitas",
            answer: "gostaria",
            explanation: "Eu: infinitivo + -ia (gostar-ia). Da história.",
          },
          {
            prompt: "Curb ___ (compartilhar) a horta dele",
            answer: "compartilharia",
            explanation: "Ele: infinitivo + -ia (compartilhar-ia). Da história.",
          },
          {
            prompt: "você ___ (poder) me ensinar?",
            answer: "poderia",
            explanation: "Pedido educado: você poderia...? Da história.",
          },
          {
            prompt: "sem um orçamento, ___ (ser) difícil economizar",
            answer: "seria",
            explanation: "Ser no condicional → seria. Da história.",
          },
          {
            prompt: "nós ___ (gostar)",
            answer: "gostaríamos",
            explanation: "Nós: infinitivo + -íamos (gostar-íamos).",
          },
          {
            prompt: "Traduza: I would like to learn more healthy recipes.",
            answer: "Eu gostaria de aprender mais receitas saudáveis.",
            accept: [
              "Gostaria de aprender mais receitas saudáveis.",
              "Eu gostaria de aprender mais receitas saudáveis",
            ],
            explanation: "Da história: \"Eu gostaria de aprender mais receitas saudáveis.\"",
          },
        ],
      },
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
    {
      slug: "subjuntivo-presente-pratica",
      title: "Prática · presente do subjuntivo",
      exercise: {
        instructions:
          "Complete com o presente do subjuntivo (-ar → -e; -er/-ir → -a), geralmente depois de que.",
        items: [
          {
            prompt: "É importante que nós ___ (comer) mais legumes",
            answer: "comamos",
            explanation: "comer → eu como → que nós comamos (-er toma -a). Da história.",
          },
          {
            prompt: "que eu ___ (comer)",
            answer: "coma",
            explanation: "comer → eu como → que eu coma. Da tabela.",
          },
          {
            prompt: "A lontra recomenda que nós ___ (economizar) um pouco",
            answer: "economizemos",
            explanation: "Verbo -ar toma -e: economizar → que nós economizemos. Da história.",
          },
          {
            prompt: "Curb quer que seus amigos ___ (aprender) a cozinhar",
            answer: "aprendam",
            explanation: "Verbo -er toma -a: que eles aprendam. Da história.",
          },
          {
            prompt: "Tomara que a horta ___ (crescer) rápido",
            answer: "cresça",
            explanation: "crescer → eu cresço → que ela cresça (ç antes de a). Da história.",
          },
          {
            prompt: "Traduza: It is important that we eat more vegetables.",
            answer: "É importante que nós comamos mais legumes.",
            accept: [
              "É importante que comamos mais legumes.",
              "É importante que nós comamos mais legumes",
            ],
            explanation: "Da história: \"É importante que nós comamos mais legumes.\"",
          },
        ],
      },
    },

    // ── Dialogues ─────────────────────────────────────────────────────────
    // Short, realistic conversations reinforcing taught forms (presente, ser/estar,
    // ir + infinitivo, condicional de cortesia "gostaria/queria"). Transcript + gloss
    // + vocab, then a fill-in exercise, then a quiz. Brazilian Portuguese (você).
    {
      slug: "dialogo-cafe",
      title: "Diálogo · Na cafeteria",
      section: "Dialogues",
      body: `Curb Appeall orders at a café. This conversation reuses the **present tense**, **ter**, **ir + infinitive**, and the **polite conditional** (_eu queria / gostaria de_ = "I would like").

### A conversa
**Atendente:** Bom dia! O que você vai querer?
_Server: Good morning! What would you like?_

**Curb:** Bom dia. Eu queria um café com leite, por favor.
_Curb: Good morning. I would like a coffee with milk, please._

**Atendente:** Claro. Mais alguma coisa?
_Server: Of course. Anything else?_

**Curb:** Sim, que fruta vocês têm hoje?
_Curb: Yes, what fruit do you have today?_

**Atendente:** Temos maçãs e bananas. Está tudo fresco.
_Server: We have apples and bananas. Everything is fresh._

**Curb:** Então eu vou levar uma maçã. Quanto é?
_Curb: Then I'm going to take an apple. How much is it?_

**Atendente:** São quatro reais no total.
_Server: It's four reais total._

**Curb:** Aqui está. Muito obrigado!
_Curb: Here you go. Thank you very much!_

### Vocabulário
| Português | English |
|---|---|
| a cafeteria | the café |
| o que você vai querer? | what would you like? |
| eu queria / gostaria de | I would like (polite) |
| um café com leite | a coffee with milk |
| mais alguma coisa? | anything else? |
| quanto é? | how much is it? |
| aqui está | here you go |

### Agora é com você
- Peça sua bebida: "Eu queria ___, por favor." (Order your drink.)
- Pergunte o preço: "Quanto é?" (Ask the price.)`,
    },
    {
      slug: "dialogo-cafe-pratica",
      title: "Prática · Na cafeteria",
      section: "Dialogues",
      exercise: {
        instructions: "Complete o diálogo na cafeteria.",
        items: [
          { prompt: "Saudação de manhã: \"Bom ___!\"", answer: "dia", explanation: "\"Bom dia\" = good morning." },
          { prompt: "Pedido cortês: \"Eu ___ um café com leite.\" (querer, forma de cortesia)", answer: "queria", accept: ["gostaria de"], explanation: "\"Eu queria\" ou \"gostaria de\" para pedir com educação." },
          { prompt: "A atendente responde: \"___ maçãs e bananas.\" (ter, nós)", answer: "temos", explanation: "ter: nós → temos." },
          { prompt: "Plano imediato: \"Eu vou ___ uma maçã.\" (levar — ir + infinitivo)", answer: "levar", explanation: "ir + infinitivo, sem \"a\" no português." },
          { prompt: "Pergunte o preço: \"___ é?\"", answer: "quanto", explanation: "\"Quanto é?\" = how much is it?" },
        ],
      },
    },
    {
      slug: "dialogo-direcoes",
      title: "Diálogo · Pedir direções",
      section: "Dialogues",
      body: `Platypus is lost and asks the way to the market. This dialogue reuses **estar/ser** (location), **ir**, and the **near future** (ir + infinitive).

### A conversa
**Platypus:** Com licença, onde fica o mercado?
_Platypus: Excuse me, where is the market?_

**Vizinho:** Fica bem perto. Siga em frente e vire à direita.
_Neighbor: It's very close. Go straight ahead and turn right._

**Platypus:** É longe daqui?
_Platypus: Is it far from here?_

**Vizinho:** Não, fica a dois minutos. Você vai ver uma fonte grande.
_Neighbor: No, it's two minutes away. You're going to see a big fountain._

**Platypus:** O mercado fica ao lado da fonte?
_Platypus: Is the market next to the fountain?_

**Vizinho:** Sim, bem em frente. Não tem como errar.
_Neighbor: Yes, right across from it. You can't miss it._

**Platypus:** Muito obrigado pela sua ajuda!
_Platypus: Thank you so much for your help!_

### Vocabulário
| Português | English |
|---|---|
| onde fica...? | where is...? |
| siga em frente | go straight ahead |
| vire à direita / à esquerda | turn right / left |
| perto / longe | near / far |
| ao lado de | next to |
| em frente a | across from |
| não tem como errar | you can't miss it |

### Agora é com você
- Pergunte onde fica um lugar: "Onde fica ___?" (Ask where a place is.)
- Dê uma direção: "Siga em frente e vire à ___." (Give a direction.)`,
    },
    {
      slug: "dialogo-direcoes-pratica",
      title: "Prática · Pedir direções",
      section: "Dialogues",
      exercise: {
        instructions: "Complete o diálogo para pedir e dar direções.",
        items: [
          { prompt: "Pergunte a localização: \"Onde ___ o mercado?\" (ficar)", answer: "fica", explanation: "\"Onde fica...?\" é a forma natural de perguntar a localização." },
          { prompt: "Indicação: \"Siga em ___.\" (straight ahead)", answer: "frente", explanation: "\"em frente\" = straight ahead." },
          { prompt: "Vire: \"Vire à ___.\" (right)", answer: "direita", explanation: "\"à direita\" = to the right." },
          { prompt: "Previsão: \"Você vai ___ uma fonte grande.\" (ver — ir + infinitivo)", answer: "ver", explanation: "ir + infinitivo: o segundo verbo fica no infinitivo." },
          { prompt: "Posição relativa: \"O mercado fica ao ___ da fonte.\" (next to)", answer: "lado", explanation: "\"ao lado de\" = next to." },
        ],
      },
    },
    {
      slug: "dialogo-apresentacoes",
      title: "Diálogo · Apresentações",
      section: "Dialogues",
      body: `Curb introduces a new friend to the otter who teaches the group. This dialogue reuses **ser** and **estar**, and the **near future** (ir + infinitive) for plans.

### A conversa
**Curb:** Oi, esta é a minha amiga Lontra. Ela é de Portugal.
_Curb: Hi, this is my friend Otter. She's from Portugal._

**Lontra:** Muito prazer. Como você se chama?
_Otter: Nice to meet you. What's your name?_

**Platypus:** Eu me chamo Platypus. Prazer. O que você faz?
_Platypus: My name is Platypus. Pleased to meet you. What do you do?_

**Lontra:** Sou professora. Ensino sobre saúde e dinheiro.
_Otter: I'm a teacher. I teach about health and money._

**Platypus:** Que interessante! Você está no grupo há muito tempo?
_Platypus: How interesting! Have you been in the group long?_

**Lontra:** Estou aqui desde março. Amanhã nós vamos cozinhar juntos.
_Otter: I've been here since March. Tomorrow we're going to cook together._

**Platypus:** Perfeito! Estou muito feliz em conhecer você.
_Platypus: Perfect! I'm very happy to meet you._

### Vocabulário
| Português | English |
|---|---|
| esta é... / este é... | this is... |
| muito prazer | nice to meet you |
| como você se chama? | what's your name? |
| eu me chamo... | my name is... |
| o que você faz? | what do you do (for work)? |
| sou professor(a) | I'm a teacher |
| estou feliz | I'm happy |

### Agora é com você
- Apresente-se: "Eu me chamo ___ e sou ___." (Introduce yourself.)
- Diga um plano: "Amanhã eu vou ___." (Say a plan for tomorrow.)`,
    },
    {
      slug: "dialogo-apresentacoes-pratica",
      title: "Prática · Apresentações",
      section: "Dialogues",
      exercise: {
        instructions: "Complete o diálogo das apresentações.",
        items: [
          { prompt: "Origem: \"Lontra ___ de Portugal.\" (ser)", answer: "é", explanation: "A origem e a identidade usam ser: ela → é." },
          { prompt: "Profissão: \"___ professora.\" (ser, eu)", answer: "sou", explanation: "A profissão usa ser: eu → sou." },
          { prompt: "Estado/emoção: \"___ muito feliz em conhecer você.\" (estar, eu)", answer: "estou", explanation: "O estado/emoção usa estar: eu → estou." },
          { prompt: "Pergunte o nome: \"Como você se ___?\" (chamar)", answer: "chama", explanation: "\"Como você se chama?\" = what's your name?" },
          { prompt: "Plano: \"Amanhã nós ___ cozinhar juntos.\" (ir, nós)", answer: "vamos", explanation: "ir: nós → vamos; ir + infinitivo para o plano." },
        ],
      },
    },
    {
      slug: "dialogos-quiz",
      title: "Diálogos · Verifique a compreensão",
      section: "Dialogues",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Na cafeteria, como Curb pede com educação?",
            options: ["Me dá um café", "Eu queria um café com leite, por favor", "Você tem café?", "Café agora"],
            correctIndex: 1,
            explanation: "\"Eu queria... por favor\" é a forma educada de pedir (condicional/cortesia).",
            sourceLessonSlug: "dialogo-cafe",
          },
          {
            prompt: "\"Temos maçãs\" — qual verbo e pessoa?",
            options: ["ter, eu", "ter, nós", "ser, nós", "ter, eles"],
            correctIndex: 1,
            explanation: "\"temos\" é ter na pessoa \"nós\".",
            sourceLessonSlug: "dialogo-cafe",
          },
          {
            prompt: "\"Eu vou levar uma maçã\" usa que estrutura?",
            options: ["pretérito", "ir + infinitivo (futuro próximo)", "imperfeito", "subjuntivo"],
            correctIndex: 1,
            explanation: "Futuro próximo: ir conjugado + infinitivo, sem \"a\".",
            sourceLessonSlug: "dialogo-cafe",
          },
          {
            prompt: "Para perguntar onde fica o mercado, diz-se:",
            options: ["Como é o mercado?", "Onde fica o mercado?", "Quem é o mercado?", "Quando é o mercado?"],
            correctIndex: 1,
            explanation: "A localização se pergunta com \"Onde fica...?\".",
            sourceLessonSlug: "dialogo-direcoes",
          },
          {
            prompt: "\"Vire à direita\" significa:",
            options: ["Go straight", "Turn left", "Turn right", "Stop"],
            correctIndex: 2,
            explanation: "\"à direita\" = to the right.",
            sourceLessonSlug: "dialogo-direcoes",
          },
          {
            prompt: "Em \"Lontra é de Portugal\", por que \"é\" (ser)?",
            options: [
              "Porque é uma localização temporária",
              "Porque a origem e a identidade usam ser",
              "Porque com países usa-se sempre estar",
              "É um erro; deveria ser \"está\"",
            ],
            correctIndex: 1,
            explanation: "A origem e a identidade usam ser; a localização física e o estado usam estar.",
            sourceLessonSlug: "dialogo-apresentacoes",
          },
          {
            prompt: "\"Estou muito feliz em conhecer você\" usa estar porque expressa:",
            options: ["identidade", "profissão", "um estado ou emoção", "origem"],
            correctIndex: 2,
            explanation: "Estados e emoções (como você se sente agora) usam estar.",
            sourceLessonSlug: "dialogo-apresentacoes",
          },
          {
            prompt: "Qual é uma apresentação natural?",
            options: ["Eu ser Platypus", "Eu me chamo Platypus, prazer", "Você se chama Platypus", "Platypus tem"],
            correctIndex: 1,
            explanation: "\"Eu me chamo... prazer\" é a apresentação natural.",
            sourceLessonSlug: "dialogo-apresentacoes",
          },
        ],
      },
    },
  ],
};
