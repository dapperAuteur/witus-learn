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
      slug: "presente-regolari-esercizi",
      title: "Esercizi · presente regolare",
      exercise: {
        instructions: "Scrivi la forma corretta del verbo al presente.",
        items: [
          {
            prompt: "io ___ (aiutare)",
            answer: "aiuto",
            explanation: "I verbi in -are: io → -o (aiut-are → aiut-o).",
          },
          {
            prompt: "tu ___ (prendere)",
            answer: "prendi",
            explanation: "I verbi in -ere: tu → -i (prend-ere → prend-i).",
          },
          {
            prompt: "lui ___ (partire)",
            answer: "parte",
            explanation: "I verbi in -ire: lui/lei → -e (part-ire → part-e).",
          },
          {
            prompt: "noi ___ (aiutare)",
            answer: "aiutiamo",
            explanation: "La desinenza noi è -iamo per tutti i gruppi.",
          },
          {
            prompt: "loro ___ (prendere)",
            answer: "prendono",
            explanation: "I verbi in -ere: loro → -ono (prend-ere → prend-ono).",
          },
          {
            prompt: "Traduci: We share — noi ___ (condividere)",
            answer: "condividiamo",
            explanation: "Dalla storia: 'Noi condividiamo il cibo.' noi → -iamo.",
          },
        ],
      },
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
      slug: "presente-irregolari-esercizi",
      title: "Esercizi · presente irregolare",
      exercise: {
        instructions: "Scrivi la forma corretta del verbo irregolare al presente.",
        items: [
          {
            prompt: "io ___ (essere)",
            answer: "sono",
            explanation: "Essere: io sono, tu sei, lui/lei è.",
          },
          {
            prompt: "lui ___ (avere)",
            answer: "ha",
            explanation: "Avere: io ho, tu hai, lui/lei ha.",
          },
          {
            prompt: "noi ___ (fare)",
            answer: "facciamo",
            explanation: "Fare: noi facciamo, voi fate, loro fanno.",
          },
          {
            prompt: "loro ___ (volere)",
            answer: "vogliono",
            explanation: "Volere: io voglio, noi vogliamo, loro vogliono.",
          },
          {
            prompt: "tu ___ (andare)",
            answer: "vai",
            explanation: "Andare: io vado, tu vai, lui/lei va.",
          },
          {
            prompt: "Traduci: they want — loro ___ (volere)",
            answer: "vogliono",
            explanation: "Dalla storia: 'Curb e i suoi amici vogliono imparare a risparmiare.'",
          },
        ],
      },
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
      slug: "presente-progressivo-esercizi",
      title: "Esercizi · presente progressivo",
      exercise: {
        instructions:
          "Completa con stare + gerundio. Ricorda: -are → -ando, -ere/-ire → -endo.",
        items: [
          {
            prompt: "io ___ (stare) camminando",
            answer: "sto",
            explanation: "Stare: sto, stai, sta, stiamo, state, stanno.",
          },
          {
            prompt: "noi stiamo ___ (cucinare)",
            answer: "cucinando",
            explanation: "Verbo in -are → gerundio -ando: cucin-are → cucin-ando.",
          },
          {
            prompt: "Curb sta ___ (condividere)",
            answer: "condividendo",
            explanation: "Verbo in -ere → gerundio -endo: condivid-ere → condivid-endo.",
          },
          {
            prompt: "tu stai ___ (studiare)",
            answer: "studiando",
            explanation: "Verbo in -are → gerundio -ando: studi-are → studi-ando.",
          },
          {
            prompt: "loro ___ (stare) cucinando",
            answer: "stanno",
            explanation: "Stare, loro → stanno.",
          },
          {
            prompt: "Traduci: I am walking — io sto ___ (camminare)",
            answer: "camminando",
            explanation: "Dalla storia: 'Io sto camminando intorno al lago.'",
          },
        ],
      },
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
      slug: "passato-prossimo-esercizi",
      title: "Esercizi · passato prossimo",
      exercise: {
        instructions:
          "Completa con il passato prossimo (ausiliare + participio passato).",
        items: [
          {
            prompt: "io ___ aiutato (avere)",
            answer: "ho",
            explanation: "Avere come ausiliare: io ho aiutato.",
          },
          {
            prompt: "noi abbiamo ___ (imparare)",
            answer: "imparato",
            explanation: "Participio di imparare (-are → -ato): imparato.",
          },
          {
            prompt: "loro ___ aiutato (avere)",
            answer: "hanno",
            explanation: "Avere, loro → hanno aiutato.",
          },
          {
            prompt: "loro hanno ___ (fare)",
            answer: "fatto",
            explanation: "Participio irregolare: fare → fatto.",
          },
          {
            prompt: "lei è ___ (andare)",
            answer: "andata",
            explanation: "Con essere il participio concorda: andare → andato/andata.",
          },
          {
            prompt: "Traduci: we learned — noi abbiamo ___ (imparare)",
            answer: "imparato",
            explanation: "Dalla storia: 'Abbiamo imparato a risparmiare acqua.'",
          },
        ],
      },
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
      slug: "imperfetto-esercizi",
      title: "Esercizi · imperfetto",
      exercise: {
        instructions: "Scrivi la forma corretta del verbo all'imperfetto.",
        items: [
          {
            prompt: "io ___ (lavorare)",
            answer: "lavoravo",
            explanation: "Imperfetto: radice + -vo, -vi, -va... (lavora-vo).",
          },
          {
            prompt: "lui ___ (prendere)",
            answer: "prendeva",
            explanation: "Lui/lei → -va: prende-va.",
          },
          {
            prompt: "noi ___ (lavorare)",
            answer: "lavoravamo",
            explanation: "Noi → -vamo: lavora-vamo.",
          },
          {
            prompt: "loro ___ (partire)",
            answer: "partivano",
            explanation: "Loro → -vano: parti-vano.",
          },
          {
            prompt: "lui ___ (essere)",
            answer: "era",
            explanation: "Essere è irregolare: ero, eri, era, eravamo, erano.",
          },
          {
            prompt: "Traduci: Curb used to walk — Curb ___ (camminare)",
            answer: "camminava",
            explanation: "Dalla storia: 'Curb camminava al mercato ogni mattina.'",
          },
        ],
      },
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
      slug: "passato-prossimo-vs-imperfetto-esercizi",
      title: "Esercizi · passato prossimo vs. imperfetto",
      exercise: {
        instructions:
          "Scegli il tempo giusto: imperfetto per lo sfondo, passato prossimo per l'evento.",
        items: [
          {
            prompt: "Mentre noi ___ (cucinare, sfondo), Platypus è arrivato.",
            answer: "cucinavamo",
            explanation: "Lo sfondo continuo → imperfetto: cucina-vamo.",
          },
          {
            prompt: "Mentre cucinavamo, Platypus ___ (arrivare, evento, con essere).",
            answer: "è arrivato",
            explanation: "L'evento che interrompe → passato prossimo: è arrivato.",
          },
          {
            prompt: "Curb ___ (camminare, sfondo) nel parco quando ha visto la lontra.",
            answer: "camminava",
            explanation: "Azione in corso → imperfetto: cammina-va.",
          },
          {
            prompt: "Curb camminava quando ___ (vedere, evento, con avere) la lontra.",
            answer: "ha visto",
            explanation: "L'evento puntuale → passato prossimo: ha visto.",
          },
          {
            prompt: "Tutti ___ (parlare, sfondo) di soldi, ma la lontra ha cambiato argomento.",
            answer: "parlavano",
            explanation: "Sfondo continuo → imperfetto: parla-vano.",
          },
          {
            prompt: "Traduci: the otter changed — la lontra ___ (cambiare, evento, con avere)",
            answer: "ha cambiato",
            explanation: "Dalla storia: 'la lontra ha cambiato argomento.'",
          },
        ],
      },
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
      slug: "futuro-semplice-esercizi",
      title: "Esercizi · futuro semplice",
      exercise: {
        instructions: "Scrivi la forma corretta del verbo al futuro semplice.",
        items: [
          {
            prompt: "io ___ (lavorare)",
            answer: "lavorerò",
            explanation: "-are → la a diventa e, poi -ò: lavorer-ò.",
          },
          {
            prompt: "tu ___ (prendere)",
            answer: "prenderai",
            explanation: "Tu → -ai: prender-ai.",
          },
          {
            prompt: "noi ___ (partire)",
            answer: "partiremo",
            explanation: "Noi → -emo: partir-emo.",
          },
          {
            prompt: "loro ___ (lavorare)",
            answer: "lavoreranno",
            explanation: "Loro → -anno: lavorer-anno.",
          },
          {
            prompt: "io ___ (essere)",
            answer: "sarò",
            explanation: "Radice irregolare: essere → sar-, quindi sarò.",
          },
          {
            prompt: "Traduci: we will save — noi ___ (risparmiare)",
            answer: "risparmieremo",
            explanation: "Dalla storia: 'Risparmieremo soldi e condivideremo i guadagni.'",
          },
        ],
      },
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
      slug: "condizionale-esercizi",
      title: "Esercizi · condizionale",
      exercise: {
        instructions:
          "Completa con il condizionale: radice del futuro + -ei, -esti, -ebbe, -emmo, -ebbero.",
        items: [
          {
            prompt: "io ___ (essere)",
            answer: "sarei",
            explanation: "Radice irregolare sar- + -ei: sarei (come nel testo).",
          },
          {
            prompt: "io ___ (avere)",
            answer: "avrei",
            explanation: "Radice irregolare avr- + -ei: avrei.",
          },
          {
            prompt: "io ___ (fare)",
            answer: "farei",
            explanation: "Radice irregolare far- + -ei: farei.",
          },
          {
            prompt: "Curb ___ (condividere) il suo orto",
            answer: "condividerebbe",
            explanation: "Lui/lei → -ebbe: condivider-ebbe (dalla storia).",
          },
          {
            prompt: "___ (tu, potere) insegnarmi a fare quel frullato?",
            answer: "potresti",
            explanation: "Dalla storia: 'Potresti insegnarmi...?' (tu → -esti).",
          },
          {
            prompt: "Traduci: I would like — mi ___ (piacere)",
            answer: "piacerebbe",
            explanation: "Dalla storia: 'Mi piacerebbe imparare più ricette sane.'",
          },
        ],
      },
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
    {
      slug: "congiuntivo-presente-esercizi",
      title: "Esercizi · congiuntivo presente",
      exercise: {
        instructions:
          "Completa con il congiuntivo presente (di solito dopo 'che').",
        items: [
          {
            prompt: "che io ___ (parlare)",
            answer: "parli",
            explanation: "-are → -i: che io parli, che tu parli, che lui parli.",
          },
          {
            prompt: "che noi ___ (parlare)",
            answer: "parliamo",
            explanation: "Noi al congiuntivo è come l'indicativo: parliamo.",
          },
          {
            prompt: "che loro ___ (parlare)",
            answer: "parlino",
            explanation: "Loro (-are) → -ino: che loro parlino.",
          },
          {
            prompt: "che io ___ (essere)",
            answer: "sia",
            explanation: "Irregolare: essere → che io sia.",
          },
          {
            prompt: "Curb vuole che i suoi amici ___ (imparare) a cucinare",
            answer: "imparino",
            explanation: "Dalla storia: 'Curb vuole che i suoi amici imparino...' (-are → -ino).",
          },
          {
            prompt: "Traduci: that we eat — che noi ___ (mangiare)",
            answer: "mangiamo",
            explanation: "Dalla storia: 'È importante che mangiamo più verdure.'",
          },
        ],
      },
    },

    // ── Dialogues ─────────────────────────────────────────────────────────
    // Short, realistic conversations reinforcing taught forms (presente, essere/avere,
    // condizionale di cortesia "vorrei", futuro). Transcript + gloss + vocab, then a
    // fill-in exercise, then a quiz.
    {
      slug: "dialogo-bar",
      title: "Dialogo · Al bar",
      section: "Dialogues",
      body: `Curb Appeall orders at an Italian bar (café). This conversation reuses the **present tense**, **avere**, and the **polite conditional** (_vorrei_ = "I would like") from the conditional unit.

### La conversazione
**Barista:** Buongiorno! Cosa desidera?
_Barista: Good morning! What would you like?_

**Curb:** Buongiorno. Vorrei un caffellatte, per favore.
_Curb: Good morning. I would like a coffee with milk, please._

**Barista:** Benissimo. Qualcosa da mangiare?
_Barista: Very well. Anything to eat?_

**Curb:** Sì, che frutta avete oggi?
_Curb: Yes, what fruit do you have today?_

**Barista:** Abbiamo mele e banane. È tutto fresco.
_Barista: We have apples and bananas. Everything is fresh._

**Curb:** Allora prendo una mela. Quant'è?
_Curb: Then I'll have an apple. How much is it?_

**Barista:** Sono quattro euro in tutto.
_Barista: It's four euros in all._

**Curb:** Ecco a Lei. Grazie mille!
_Curb: Here you go. Thank you very much!_

### Vocabolario
| Italiano | English |
|---|---|
| il bar | the café/bar |
| cosa desidera? | what would you like? (formal) |
| vorrei | I would like (polite) |
| un caffellatte | a coffee with milk |
| qualcosa da mangiare? | anything to eat? |
| quant'è? | how much is it? |
| ecco a Lei | here you go (formal) |

### Tocca a te
- Ordina la tua bevanda: "Vorrei ___, per favore." (Order your drink.)
- Chiedi il prezzo: "Quant'è?" (Ask the price.)`,
    },
    {
      slug: "dialogo-bar-esercizi",
      title: "Esercizi · Al bar",
      section: "Dialogues",
      exercise: {
        instructions: "Completa il dialogo al bar.",
        items: [
          { prompt: "Saluto del mattino: \"___! Cosa desidera?\"", answer: "buongiorno", explanation: "\"Buongiorno\" = good morning." },
          { prompt: "Ordine cortese: \"___ un caffellatte.\" (volere, condizionale di cortesia)", answer: "vorrei", explanation: "\"Vorrei\" è la forma cortese di volere (io)." },
          { prompt: "Il barista risponde: \"___ mele e banane.\" (avere, noi)", answer: "abbiamo", explanation: "avere: noi → abbiamo." },
          { prompt: "Azione immediata: \"Allora ___ una mela.\" (prendere, io — presente)", answer: "prendo", explanation: "prendere: io → prendo (il presente esprime anche il futuro immediato)." },
          { prompt: "Chiedi il prezzo: \"___'è?\"", answer: "quant", explanation: "\"Quant'è?\" = how much is it?" },
        ],
      },
    },
    {
      slug: "dialogo-indicazioni",
      title: "Dialogo · Chiedere indicazioni",
      section: "Dialogues",
      body: `Platypus is lost and asks the way to the market. This dialogue reuses **essere** (location), **andare**, and the **future tense**.

### La conversazione
**Platypus:** Scusi, dov'è il mercato?
_Platypus: Excuse me, where is the market?_

**Vicino:** È molto vicino. Vada sempre dritto e giri a destra.
_Neighbor: It's very close. Go straight ahead and turn right._

**Platypus:** È lontano da qui?
_Platypus: Is it far from here?_

**Vicino:** No, è a due minuti. Vedrà una grande fontana.
_Neighbor: No, it's two minutes away. You'll see a big fountain._

**Platypus:** Il mercato è accanto alla fontana?
_Platypus: Is the market next to the fountain?_

**Vicino:** Sì, proprio di fronte. Non può sbagliare.
_Neighbor: Yes, right across from it. You can't go wrong._

**Platypus:** Grazie mille per il Suo aiuto!
_Platypus: Thank you very much for your help!_

### Vocabolario
| Italiano | English |
|---|---|
| dov'è...? | where is...? |
| sempre dritto | straight ahead |
| giri a destra / a sinistra | turn right / left |
| vicino / lontano | near / far |
| accanto a | next to |
| di fronte a | across from |
| non può sbagliare | you can't go wrong |

### Tocca a te
- Chiedi dov'è un luogo: "Dov'è ___?" (Ask where a place is.)
- Dai un'indicazione: "Vada sempre dritto e giri a ___." (Give a direction.)`,
    },
    {
      slug: "dialogo-indicazioni-esercizi",
      title: "Esercizi · Chiedere indicazioni",
      section: "Dialogues",
      exercise: {
        instructions: "Completa il dialogo per chiedere e dare indicazioni.",
        items: [
          { prompt: "Chiedi la posizione: \"Dov'___ il mercato?\" (essere)", answer: "è", explanation: "Per la posizione si usa essere: lui/lei → è." },
          { prompt: "Indicazione: \"Vada sempre ___.\" (straight ahead)", answer: "dritto", explanation: "\"sempre dritto\" = straight ahead." },
          { prompt: "Gira: \"Giri a ___.\" (right)", answer: "destra", explanation: "\"a destra\" = to the right." },
          { prompt: "Previsione: \"___ una grande fontana.\" (vedere, Lei — futuro)", answer: "vedrà", explanation: "vedere al futuro, forma di cortesia (Lei): vedrà." },
          { prompt: "Posizione relativa: \"Il mercato è ___ alla fontana.\" (next to)", answer: "accanto", explanation: "\"accanto a\" = next to." },
        ],
      },
    },
    {
      slug: "dialogo-presentazioni",
      title: "Dialogo · Le presentazioni",
      section: "Dialogues",
      body: `Curb introduces a new friend to the otter who teaches the group. This dialogue reuses **essere** and **avere**, and the **future tense** for plans.

### La conversazione
**Curb:** Ciao, ti presento la mia amica Lontra. È del Brasile.
_Curb: Hi, let me introduce my friend Otter. She's from Brazil._

**Lontra:** Piacere. Come ti chiami?
_Otter: Nice to meet you. What's your name?_

**Platypus:** Mi chiamo Platypus. Piacere mio. Che lavoro fai?
_Platypus: My name is Platypus. My pleasure. What do you do?_

**Lontra:** Sono insegnante. Insegno la salute e l'economia.
_Otter: I'm a teacher. I teach health and finance._

**Platypus:** Che interessante! Sei nel gruppo da molto tempo?
_Platypus: How interesting! Have you been in the group long?_

**Lontra:** Sono qui da marzo. Domani cucineremo insieme.
_Otter: I've been here since March. Tomorrow we'll cook together._

**Platypus:** Perfetto! Sono molto contento di conoscerti.
_Platypus: Perfect! I'm very happy to meet you._

### Vocabolario
| Italiano | English |
|---|---|
| ti presento... | let me introduce you to... |
| piacere | nice to meet you |
| come ti chiami? | what's your name? |
| mi chiamo... | my name is... |
| che lavoro fai? | what do you do (for work)? |
| sono insegnante | I'm a teacher |
| sono contento/a | I'm happy |

### Tocca a te
- Presentati: "Mi chiamo ___ e sono ___." (Introduce yourself.)
- Di' un progetto: "Domani ___." (Say a plan for tomorrow, e.g. "domani cucinerò".)`,
    },
    {
      slug: "dialogo-presentazioni-esercizi",
      title: "Esercizi · Le presentazioni",
      section: "Dialogues",
      exercise: {
        instructions: "Completa il dialogo delle presentazioni.",
        items: [
          { prompt: "Origine: \"Lontra ___ del Brasile.\" (essere)", answer: "è", explanation: "L'origine e l'identità usano essere: lui/lei → è." },
          { prompt: "Professione: \"___ insegnante.\" (essere, io)", answer: "sono", explanation: "La professione usa essere: io → sono." },
          { prompt: "Chiedi il nome: \"Come ti ___?\" (chiamarsi)", answer: "chiami", explanation: "\"Come ti chiami?\" = what's your name?" },
          { prompt: "Emozione: \"___ molto contento di conoscerti.\" (essere, io)", answer: "sono", explanation: "essere: io → sono." },
          { prompt: "Progetto: \"Domani ___ insieme.\" (cucinare, noi — futuro)", answer: "cucineremo", explanation: "cucinare al futuro: noi → cucineremo." },
        ],
      },
    },
    {
      slug: "dialoghi-quiz",
      title: "Dialoghi · Verifica la comprensione",
      section: "Dialogues",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Al bar, come ordina Curb con cortesia?",
            options: ["Dammi un caffè", "Vorrei un caffellatte, per favore", "Hai del caffè?", "Caffè adesso"],
            correctIndex: 1,
            explanation: "\"Vorrei... per favore\" è la forma cortese, al condizionale.",
            sourceLessonSlug: "dialogo-bar",
          },
          {
            prompt: "\"Abbiamo mele\" — quale verbo e persona?",
            options: ["avere, io", "avere, noi", "essere, noi", "avere, loro"],
            correctIndex: 1,
            explanation: "\"abbiamo\" è avere alla persona \"noi\".",
            sourceLessonSlug: "dialogo-bar",
          },
          {
            prompt: "\"Quant'è?\" si usa per chiedere:",
            options: ["il nome", "il prezzo", "l'ora", "la strada"],
            correctIndex: 1,
            explanation: "\"Quant'è?\" = how much is it? (il prezzo).",
            sourceLessonSlug: "dialogo-bar",
          },
          {
            prompt: "Per chiedere dove si trova il mercato si dice:",
            options: ["Com'è il mercato?", "Dov'è il mercato?", "Chi è il mercato?", "Quand'è il mercato?"],
            correctIndex: 1,
            explanation: "La posizione si chiede con \"Dov'è...?\" (essere).",
            sourceLessonSlug: "dialogo-indicazioni",
          },
          {
            prompt: "\"Giri a destra\" significa:",
            options: ["Go straight", "Turn left", "Turn right", "Stop"],
            correctIndex: 2,
            explanation: "\"a destra\" = to the right.",
            sourceLessonSlug: "dialogo-indicazioni",
          },
          {
            prompt: "In \"Lontra è del Brasile\", perché \"è\" (essere)?",
            options: [
              "Perché è una posizione temporanea",
              "Perché l'origine e l'identità usano essere",
              "Perché con i paesi si usa sempre avere",
              "È un errore; ci vuole \"ha\"",
            ],
            correctIndex: 1,
            explanation: "L'origine e l'identità si esprimono con essere.",
            sourceLessonSlug: "dialogo-presentazioni",
          },
          {
            prompt: "Qual è una presentazione naturale?",
            options: ["Io essere Platypus", "Mi chiamo Platypus, piacere", "Tu ti chiami Platypus", "Platypus ha"],
            correctIndex: 1,
            explanation: "\"Mi chiamo... piacere\" è la presentazione naturale.",
            sourceLessonSlug: "dialogo-presentazioni",
          },
          {
            prompt: "\"Domani cucineremo insieme\" è:",
            options: ["un'azione passata", "un progetto al futuro", "un'abitudine passata", "un dubbio"],
            correctIndex: 1,
            explanation: "\"cucineremo\" è il futuro semplice (noi).",
            sourceLessonSlug: "dialogo-presentazioni",
          },
        ],
      },
    },
  ],
};
