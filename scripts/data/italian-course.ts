// Authored, tense-progressive Italian course — mirrors the Spanish template, but
// unit 3 teaches the present progressive (stare + gerundio) instead of a "near
// future with andare", because Italian does NOT use andare + infinitive that way
// (it uses the present or the simple future for the future). Grammar reviewed.
// Committed so it survives a fresh clone.

import type { AuthoredCourse } from "./authored-course";

export const ITALIAN_COURSE: AuthoredCourse = {
  title: "Italian, Tense by Tense — the Curb Appeall Story",
  description:
    "Learn to speak Italian by following one continuous story about Curb Appeall and friends learning healthy-living and money habits. Each unit teaches one tense — present, present progressive, passato prossimo, imperfect, future, conditional, subjunctive — and ends with a conversation challenge so you produce the language yourself.",
  lessons: [
    {
      slug: "presente-regolari",
      title: "1 · Present tense: regular verbs and pronouns",
      body: `Italian verbs end in **-are**, **-ere**, or **-ire**. Drop the ending and add a new one for each subject. Subject pronouns (io, tu, lui/lei, noi, voi, loro) are usually dropped because the verb ending already shows who.

| | aiutare (to help) | prendere (to take) | partire (to leave) |
|---|---|---|---|
| io | aiuto | prendo | parto |
| tu | aiuti | prendi | parti |
| lui/lei | aiuta | prende | parte |
| noi | aiutiamo | prendiamo | partiamo |
| voi | aiutate | prendete | partite |
| loro | aiutano | prendono | partono |

### Nella storia
**Curb Appeall aiuta Platypus a preparare un picnic sano.**
Curb Appeall helps Platypus prepare a healthy picnic.

**Il gruppo ascolta una lontra che parla di soldi.**
The group listens to an otter who talks about money.

**Noi condividiamo il cibo con i bambini del quartiere.**
We share the food with the neighborhood kids.

**Io imparo a cucinare verdure fresche ogni giorno.**
I learn to cook fresh vegetables every day.

### Tocca a te (now you talk)
- Cosa fai per stare in salute? (What do you do to stay healthy?)
- Di' tre cose che impari questa settimana. (Say three things you are learning this week.)`,
    },
    {
      slug: "presente-irregolari",
      title: "2 · Present tense: the key irregular verbs",
      body: `A few verbs are irregular but essential. **Essere** (to be) and **avere** (to have) are the two most important — you also use them to build the past tense.

| | essere | avere | andare | fare | volere |
|---|---|---|---|---|---|
| io | sono | ho | vado | faccio | voglio |
| tu | sei | hai | vai | fai | vuoi |
| lui/lei | è | ha | va | fa | vuole |
| noi | siamo | abbiamo | andiamo | facciamo | vogliamo |
| voi | siete | avete | andate | fate | volete |
| loro | sono | hanno | vanno | fanno | vogliono |

### Nella storia
**Curb e i suoi amici vogliono imparare a risparmiare.**
Curb and his friends want to learn to save.

**La lontra è molto paziente e ha tanti consigli.**
The otter is very patient and has a lot of advice.

**Oggi facciamo un frullato con frutta e verdura.**
Today we make a smoothie with fruit and vegetables.

**Io ho un piccolo orto dove coltivo le erbe.**
I have a small garden where I grow herbs.

### Tocca a te
- Come stai oggi? Cosa vuoi fare? (How are you today? What do you want to do?)
- Descrivi un amico usando essere e avere. (Describe a friend using essere and avere.)`,
    },
    {
      slug: "presente-progressivo",
      title: "3 · The present progressive: stare + gerund",
      body: `To say what is happening **right now**, Italian uses **stare + the gerund** (the "-ing" form). Form the gerund with **-ando** (-are verbs) or **-endo** (-ere / -ire verbs).

Conjugate **stare**: sto, stai, sta, stiamo, state, stanno — then add the gerund.

**Formula:** sto + _cucinando_ → I am cooking (right now).

### Nella storia
**In questo momento stiamo cucinando una zuppa con le verdure dell'orto.**
Right now we are cooking a soup with the vegetables from the garden.

**Curb sta condividendo la sua ricetta con il quartiere.**
Curb is sharing his recipe with the neighborhood.

**Io sto camminando intorno al lago per fare esercizio.**
I am walking around the lake to exercise.

**Cosa stai studiando in questo momento?**
What are you studying right now?

### Tocca a te
- Cosa stai facendo adesso? (What are you doing right now?)
- Descrivi la scena: tre cose che le persone stanno facendo. (Describe the scene: three things people are doing.)`,
    },
    {
      slug: "passato-prossimo",
      title: "4 · The passato prossimo: finished actions in the past",
      body: `To talk about completed past actions, Italian uses the **passato prossimo**: a helper verb in the present (**avere** for most verbs, **essere** for movement/change verbs) + the **past participle**.

**Past participles:** -are → **-ato** (aiutato), -ere → **-uto** (creduto), -ire → **-ito** (finito). Irregular: fare → fatto, prendere → preso, imparare → imparato.

| avere + aiutato | |
|---|---|
| io ho aiutato | noi abbiamo aiutato |
| tu hai aiutato | voi avete aiutato |
| lui/lei ha aiutato | loro hanno aiutato |

Verbs with **essere** agree with the subject: andare → sono andato/andata, arrivare → è arrivato.

### Nella storia
**Curb e i suoi amici hanno deciso di studiare la nutrizione.**
Curb and his friends decided to study nutrition.

**Il canguro ha insegnato agli altri a preparare un frullato sano.**
The kangaroo taught the others to prepare a healthy smoothie.

**Abbiamo imparato a risparmiare acqua con sistemi di irrigazione efficienti.**
We learned to save water with efficient irrigation systems.

**Dopo il pasto, hanno fatto una passeggiata nel quartiere.**
After the meal, they took a walk around the neighborhood.

### Tocca a te
- Cosa hai fatto ieri? (What did you do yesterday?)
- Racconta una cosa che hai imparato la settimana scorsa. (Tell one thing you learned last week.)`,
    },
    {
      slug: "imperfetto",
      title: "5 · The imperfect: how things used to be",
      body: `The **imperfetto** describes the past that was ongoing, habitual, or background — "used to" and "was -ing". It is very regular: drop **-re** from the infinitive and add **-vo, -vi, -va, -vamo, -vate, -vano**.

| | lavorare | prendere / partire |
|---|---|---|
| io | lavoravo | prendevo / partivo |
| tu | lavoravi | prendevi / partivi |
| lui/lei | lavorava | prendeva / partiva |
| noi | lavoravamo | prendevamo / partivamo |
| loro | lavoravano | prendevano / partivano |

Main irregular: **essere** → ero, eri, era, eravamo, erano.

### Nella storia
**Quando era piccolo, Curb camminava al mercato ogni mattina.**
When he was little, Curb walked to the market every morning.

**Mentre si riposavano, gli amici parlavano dei loro sogni.**
While they were resting, the friends talked about their dreams.

**L'orto era sempre pieno di frutta fresca.**
The garden was always full of fresh fruit.

### Tocca a te
- Cosa facevi quando eri bambino o bambina? (What did you used to do as a child?)
- Descrivi la tua routine di cinque anni fa. (Describe your routine from five years ago.)`,
    },
    {
      slug: "passato-prossimo-vs-imperfetto",
      title: "6 · Passato prossimo vs. imperfect",
      body: `Choosing between the two past tenses is the heart of storytelling. Use the **passato prossimo** for a single completed event, and the **imperfetto** for the ongoing scene around it.

- **Imperfetto** = the background (what was already happening).
- **Passato prossimo** = the event that interrupts or moves the story forward.

### Nella storia
**Mentre cucinavamo, Platypus è arrivato con altre verdure.**
While we were cooking, Platypus arrived with more vegetables.

**Curb camminava nel parco quando ha visto la lontra.**
Curb was walking in the park when he saw the otter.

**Tutti parlavano di soldi, ma la lontra ha cambiato argomento.**
Everyone was talking about money, but the otter changed the subject.

### Tocca a te
- Racconta una breve storia della tua giornata usando i due tempi. (Tell a short story of your day using both tenses.)
- Completa: "Dormivo quando..." (Finish: "I was sleeping when...")`,
    },
    {
      slug: "futuro-semplice",
      title: "7 · The simple future: plans and predictions",
      body: `The **futuro semplice** adds endings onto the infinitive (drop the final **-e**; -are verbs change the **a** to **e**). The endings are **-ò, -ai, -à, -emo, -ete, -anno**.

| | lavorare | prendere | partire |
|---|---|---|---|
| io | lavorerò | prenderò | partirò |
| tu | lavorerai | prenderai | partirai |
| lui/lei | lavorerà | prenderà | partirà |
| noi | lavoreremo | prenderemo | partiremo |
| loro | lavoreranno | prenderanno | partiranno |

Common irregular stems: **essere** → sarò, **avere** → avrò, **fare** → farò, **andare** → andrò.

### Nella storia
**L'anno prossimo, Curb e i suoi amici apriranno un mercato sano.**
Next year, Curb and his friends will open a healthy market.

**Risparmieremo soldi e condivideremo i guadagni con il quartiere.**
We will save money and share the profits with the neighborhood.

**Imparerai a cucinare con noi?**
Will you learn to cook with us?

### Tocca a te
- Come sarà la tua vita tra dieci anni? (What will your life be like in ten years?)
- Fai tre previsioni per l'anno prossimo. (Make three predictions for next year.)`,
    },
    {
      slug: "condizionale",
      title: "8 · The conditional: politeness and “would”",
      body: `The **condizionale** means "would" — for hypotheticals and politeness. Take the **future stem** and add **-ei, -esti, -ebbe, -emmo, -ebbero** (same irregular stems as the future: sarei, avrei, farei).

### Nella storia
**Mi piacerebbe imparare più ricette sane.**
I would like to learn more healthy recipes.

**Curb condividerebbe il suo orto con tutto il quartiere.**
Curb would share his garden with the whole neighborhood.

**Potresti insegnarmi a fare quel frullato?**
Could you teach me to make that smoothie?

**Senza un budget, sarebbe difficile risparmiare.**
Without a budget, it would be hard to save.

### Tocca a te
- Cosa faresti con più tempo libero? (What would you do with more free time?)
- Chiedi qualcosa con gentilezza usando "Potresti...?" (Ask for something politely using "Could you...?")`,
    },
    {
      slug: "congiuntivo-presente",
      title: "9 · The present subjunctive: wishes, advice, and doubt",
      body: `The **congiuntivo** appears after expressions of wish, opinion, or doubt — usually with **che**. Form it from the **io** form of the present: drop **-o** and add **-i** (-are verbs) or **-a** (-ere / -ire verbs); the three singular persons look the same.

**parlare** → io parlo → che io parli, che tu parli, che lui parli, che noi parliamo, che loro parlino

Triggers: _è importante che_, _voglio che_, _penso che_, _benché_. Irregular: essere → che io sia, avere → che io abbia, fare → che io faccia.

### Nella storia
**È importante che mangiamo più verdure.**
It is important that we eat more vegetables.

**La lontra consiglia che risparmiamo un po' ogni settimana.**
The otter advises that we save a little each week.

**Curb vuole che i suoi amici imparino a cucinare.**
Curb wants his friends to learn to cook.

**Speriamo che l'orto cresca in fretta.**
Let's hope the garden grows quickly.

### Tocca a te
- Da' tre consigli di salute con "È importante che...". (Give three health tips with "It is important that...".)
- Esprimi un desiderio con "Spero che...". (Express a wish with "I hope that...".)`,
    },
  ],
};
