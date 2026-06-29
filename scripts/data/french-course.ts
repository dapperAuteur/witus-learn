// Authored, tense-progressive French course — mirrors the Spanish template
// (scripts/data/spanish-course.ts). Same "Curb Appeall and friends" healthy-living
// story, taught tense by tense (présent → futur proche → passé composé → imparfait →
// contrast → futur simple → conditionnel → subjonctif) with a conversation challenge
// per unit. Grammar reviewed for correctness. Committed so it survives a fresh clone.

import type { AuthoredCourse } from "./authored-course";

export const FRENCH_COURSE: AuthoredCourse = {
  title: "French, Tense by Tense — the Curb Appeall Story",
  description:
    "Learn to speak French by following one continuous story about Curb Appeall and friends learning healthy-living and money habits. Each unit teaches one tense — present, near future, passé composé, imperfect, future, conditional, subjunctive — and ends with a conversation challenge so you produce the language yourself.",
  lessons: [
    {
      slug: "present-reguliers",
      title: "1 · Present tense: regular verbs and pronouns",
      body: `French verbs end in **-er**, **-ir**, or **-re**. Drop the ending and add a new one for each subject.

**Subject pronouns:** je (I), tu (you), il / elle / on (he / she / we-informal), nous (we), vous (you formal or plural), ils / elles (they).

| | aider (to help, -er) | choisir (to choose, -ir) | attendre (to wait, -re) |
|---|---|---|---|
| je/j' | aide | choisis | attends |
| tu | aides | choisis | attends |
| il/elle | aide | choisit | attend |
| nous | aidons | choisissons | attendons |
| vous | aidez | choisissez | attendez |
| ils/elles | aident | choisissent | attendent |

### Dans l'histoire
**Curb Appeall aide Platypus à préparer un pique-nique sain.**
Curb Appeall helps Platypus prepare a healthy picnic.

**Le groupe écoute une loutre qui parle d'argent.**
The group listens to an otter who talks about money.

**Nous partageons la nourriture avec les enfants du quartier.**
We share the food with the neighborhood kids.

**J'apprends à cuisiner des légumes frais chaque jour.**
I learn to cook fresh vegetables every day.

### À toi de parler (now you talk)
- Que fais-tu pour rester en bonne santé ? (What do you do to stay healthy?)
- Dis trois choses que tu apprends cette semaine. (Say three things you are learning this week.)`,
    },
    {
      slug: "present-reguliers-exercices",
      title: "Exercices · présent régulier",
      exercise: {
        instructions: "Écris la forme correcte du verbe au présent.",
        items: [
          {
            prompt: "j' ___ (aider) Platypus à préparer un pique-nique",
            answer: "aide",
            explanation: "Verbe en -er : à « je/j' » on ajoute -e (aider → aide).",
          },
          {
            prompt: "nous ___ (aider) le quartier",
            answer: "aidons",
            explanation: "Verbe en -er : à « nous » on ajoute -ons (aider → aidons).",
          },
          {
            prompt: "tu ___ (choisir) un fruit frais",
            answer: "choisis",
            explanation: "Verbe en -ir : « tu » → -is (choisir → choisis).",
          },
          {
            prompt: "ils ___ (choisir) des légumes",
            answer: "choisissent",
            explanation: "Verbe en -ir : « ils/elles » → -issent (choisir → choisissent).",
          },
          {
            prompt: "vous ___ (attendre) la loutre",
            answer: "attendez",
            explanation: "Verbe en -re : « vous » → -ez (attendre → attendez).",
          },
          {
            prompt: "Traduis : We share the food. → Nous ___ la nourriture.",
            answer: "partageons",
            explanation: "« partager » garde le e devant -ons pour le son doux : nous partageons.",
          },
        ],
      },
    },
    {
      slug: "present-irreguliers",
      title: "2 · Present tense: the key irregular verbs",
      body: `A few verbs are irregular but essential. **Être** (to be) and **avoir** (to have) are the two most important — you will also use them to build the past tense.

| | être | avoir | aller | faire | vouloir |
|---|---|---|---|---|---|
| je/j' | suis | ai | vais | fais | veux |
| tu | es | as | vas | fais | veux |
| il/elle | est | a | va | fait | veut |
| nous | sommes | avons | allons | faisons | voulons |
| vous | êtes | avez | allez | faites | voulez |
| ils/elles | sont | ont | vont | font | veulent |

### Dans l'histoire
**Curb et ses amis veulent apprendre à économiser.**
Curb and his friends want to learn to save.

**La loutre est très patiente et a beaucoup de conseils.**
The otter is very patient and has a lot of advice.

**Aujourd'hui, nous faisons un smoothie avec des fruits et des légumes.**
Today we make a smoothie with fruits and vegetables.

**J'ai un petit jardin où je cultive des herbes.**
I have a small garden where I grow herbs.

### À toi de parler
- Comment vas-tu aujourd'hui ? Qu'est-ce que tu veux faire ? (How are you today? What do you want to do?)
- Décris un ami avec être et avoir. (Describe a friend using être and avoir.)`,
    },
    {
      slug: "present-irreguliers-exercices",
      title: "Exercices · présent irrégulier",
      exercise: {
        instructions: "Complète avec la forme irrégulière correcte au présent.",
        items: [
          {
            prompt: "je ___ (être) en bonne santé",
            answer: "suis",
            explanation: "être : je suis, tu es, il est, nous sommes, vous êtes, ils sont.",
          },
          {
            prompt: "j' ___ (avoir) un petit jardin",
            answer: "ai",
            explanation: "avoir : j'ai, tu as, il a, nous avons, vous avez, ils ont.",
          },
          {
            prompt: "la loutre ___ (être) très patiente",
            answer: "est",
            explanation: "être à « il/elle » → est.",
          },
          {
            prompt: "nous ___ (faire) un smoothie",
            answer: "faisons",
            explanation: "faire : nous faisons (le « ai » se prononce comme un e).",
          },
          {
            prompt: "Curb et ses amis ___ (vouloir) apprendre à économiser",
            answer: "veulent",
            explanation: "vouloir : ils/elles veulent.",
          },
          {
            prompt: "Traduis : Today we make a smoothie. → Aujourd'hui nous ___ un smoothie.",
            answer: "faisons",
            explanation: "« faire » à « nous » → faisons.",
          },
        ],
      },
    },
    {
      slug: "futur-proche",
      title: "3 · The near future: aller + infinitive",
      body: `The easiest future is **aller + an infinitive** — just like English "going to". Conjugate only **aller** (vais, vas, va, allons, allez, vont) and keep the second verb in its base form.

**Formula:** je vais + _cuisiner_ → I am going to cook.

### Dans l'histoire
**Demain, nous allons cuisiner une soupe avec les légumes du jardin.**
Tomorrow we are going to cook a soup with the vegetables from the garden.

**Curb va partager sa recette avec le quartier.**
Curb is going to share his recipe with the neighborhood.

**Je vais marcher autour du lac pour faire de l'exercice.**
I am going to walk around the lake to exercise.

**Est-ce que tu vas étudier la nutrition avec nous ?**
Are you going to study nutrition with us?

### À toi de parler
- Qu'est-ce que tu vas faire ce week-end ? (What are you going to do this weekend?)
- Dis trois projets avec « aller ». (Say three plans using "aller".)`,
    },
    {
      slug: "futur-proche-exercices",
      title: "Exercices · futur proche",
      exercise: {
        instructions: "Complète avec « aller » conjugué + l'infinitif (ne change que « aller »).",
        items: [
          {
            prompt: "demain, nous ___ cuisiner une soupe",
            answer: "allons",
            explanation: "aller à « nous » → allons ; l'autre verbe reste à l'infinitif.",
          },
          {
            prompt: "Curb ___ partager sa recette",
            answer: "va",
            explanation: "aller à « il/elle » → va.",
          },
          {
            prompt: "je ___ marcher autour du lac",
            answer: "vais",
            explanation: "aller à « je » → vais.",
          },
          {
            prompt: "est-ce que tu ___ étudier la nutrition ?",
            answer: "vas",
            explanation: "aller à « tu » → vas.",
          },
          {
            prompt: "ils ___ partager les bénéfices",
            answer: "vont",
            explanation: "aller à « ils/elles » → vont.",
          },
          {
            prompt: "Traduis : I am going to cook. → Je ___ cuisiner.",
            answer: "vais",
            explanation: "futur proche : vais + infinitif.",
          },
        ],
      },
    },
    {
      slug: "passe-compose",
      title: "4 · The passé composé: finished actions in the past",
      body: `To talk about completed past actions, French uses the **passé composé**: a helper verb in the present (**avoir** for most verbs, **être** for a small set of movement/change verbs) + the **past participle**.

**Past participles:** -er → **-é** (aidé), -ir → **-i** (fini), -re → **-u** (attendu). Irregular: avoir → eu, être → été, faire → fait, apprendre → appris.

| avoir + aidé | |
|---|---|
| j'ai aidé | nous avons aidé |
| tu as aidé | vous avez aidé |
| il/elle a aidé | ils/elles ont aidé |

A few verbs use **être** and their participle agrees with the subject: aller → je suis allé(e), arriver → il est arrivé.

### Dans l'histoire
**Curb et ses amis ont décidé d'étudier la nutrition.**
Curb and his friends decided to study nutrition.

**Le kangourou a appris aux autres à préparer un smoothie sain.**
The kangaroo taught the others to prepare a healthy smoothie.

**Ils ont appris à économiser de l'eau avec des systèmes d'irrigation efficaces.**
They learned to save water with efficient irrigation systems.

**Après le repas, ils ont fait une promenade dans le quartier.**
After the meal, they took a walk around the neighborhood.

### À toi de parler
- Qu'est-ce que tu as fait hier ? (What did you do yesterday?)
- Raconte une chose que tu as apprise la semaine dernière. (Tell one thing you learned last week.)`,
    },
    {
      slug: "passe-compose-exercices",
      title: "Exercices · passé composé",
      exercise: {
        instructions: "Écris le passé composé : auxiliaire (avoir/être) au présent + participe passé.",
        items: [
          {
            prompt: "j' ___ ___ (aider) le quartier",
            answer: "ai aidé",
            explanation: "avoir + participe en -é : j'ai aidé.",
          },
          {
            prompt: "ils ___ ___ (faire) une promenade",
            answer: "ont fait",
            explanation: "avoir à « ils » → ont ; participe irrégulier faire → fait.",
          },
          {
            prompt: "le kangourou ___ ___ (apprendre) aux autres à préparer un smoothie",
            answer: "a appris",
            explanation: "avoir à « il » → a ; participe irrégulier apprendre → appris.",
          },
          {
            prompt: "Curb et ses amis ___ ___ (décider) d'étudier la nutrition",
            answer: "ont décidé",
            explanation: "avoir à « ils » → ont ; décider → décidé.",
          },
          {
            prompt: "il ___ ___ (aller) au marché",
            answer: "est allé",
            explanation: "aller utilise être : il est allé (accord avec le sujet).",
          },
          {
            prompt: "Traduis : They took a walk. → Ils ___ ___ une promenade.",
            answer: "ont fait",
            explanation: "« faire une promenade » au passé composé : ont fait.",
          },
        ],
      },
    },
    {
      slug: "imparfait",
      title: "5 · The imperfect: how things used to be",
      body: `The **imparfait** describes the past that was ongoing, habitual, or background — "used to" and "was -ing". Take the **nous** form of the present, drop **-ons**, and add **-ais, -ais, -ait, -ions, -iez, -aient**.

| travailler (nous travaillons →) | |
|---|---|
| je travaillais | nous travaillions |
| tu travaillais | vous travailliez |
| il/elle travaillait | ils/elles travaillaient |

Only **être** has an irregular stem: j'étais, tu étais, il était, nous étions, ils étaient.

### Dans l'histoire
**Quand il était petit, Curb marchait au marché chaque matin.**
When he was little, Curb walked to the market every morning.

**Pendant qu'ils se reposaient, les amis parlaient de leurs rêves.**
While they were resting, the friends talked about their dreams.

**Le jardin était toujours plein de fruits frais.**
The garden was always full of fresh fruit.

### À toi de parler
- Que faisais-tu quand tu étais enfant ? (What did you used to do as a child?)
- Décris ta routine d'il y a cinq ans. (Describe your routine from five years ago.)`,
    },
    {
      slug: "imparfait-exercices",
      title: "Exercices · imparfait",
      exercise: {
        instructions: "Mets le verbe à l'imparfait (radical du « nous » + -ais, -ait, -ions, -aient).",
        items: [
          {
            prompt: "je ___ (travailler) au jardin",
            answer: "travaillais",
            explanation: "imparfait à « je » → -ais : travaillais.",
          },
          {
            prompt: "nous ___ (travailler) ensemble",
            answer: "travaillions",
            explanation: "imparfait à « nous » → -ions : travaillions.",
          },
          {
            prompt: "Curb ___ (marcher) au marché chaque matin",
            answer: "marchait",
            explanation: "imparfait à « il » → -ait : marchait.",
          },
          {
            prompt: "les amis ___ (parler) de leurs rêves",
            answer: "parlaient",
            explanation: "imparfait à « ils » → -aient : parlaient.",
          },
          {
            prompt: "quand il ___ (être) petit",
            answer: "était",
            explanation: "être est irrégulier à l'imparfait : j'étais, il était.",
          },
          {
            prompt: "Traduis : The garden was always full of fruit. → Le jardin ___ toujours plein de fruits.",
            answer: "était",
            explanation: "imparfait de être à « il » → était.",
          },
        ],
      },
    },
    {
      slug: "passe-compose-vs-imparfait",
      title: "6 · Passé composé vs. imperfect",
      body: `Choosing between the two past tenses is the heart of storytelling. Use the **passé composé** for a single completed event, and the **imparfait** for the ongoing scene around it.

- **Imparfait** = the background (what was already happening).
- **Passé composé** = the event that interrupts or moves the story forward.

### Dans l'histoire
**Pendant que nous cuisinions, Platypus est arrivé avec plus de légumes.**
While we were cooking, Platypus arrived with more vegetables.

**Curb marchait dans le parc quand il a vu la loutre.**
Curb was walking in the park when he saw the otter.

**Tout le monde parlait d'argent, mais la loutre a changé de sujet.**
Everyone was talking about money, but the otter changed the subject.

### À toi de parler
- Raconte une courte histoire de ta journée avec les deux temps. (Tell a short story of your day using both tenses.)
- Complète : « Je dormais quand… » (Finish: "I was sleeping when…")`,
    },
    {
      slug: "passe-compose-vs-imparfait-exercices",
      title: "Exercices · passé composé vs. imparfait",
      exercise: {
        instructions: "Choisis le bon temps : imparfait pour le décor, passé composé pour l'événement.",
        items: [
          {
            prompt: "Pendant que nous ___ (cuisiner), Platypus est arrivé. (décor)",
            answer: "cuisinions",
            explanation: "Le décor en cours → imparfait : nous cuisinions.",
          },
          {
            prompt: "Pendant que nous cuisinions, Platypus ___ ___ (arriver). (événement)",
            answer: "est arrivé",
            explanation: "L'événement qui interrompt → passé composé ; arriver utilise être : est arrivé.",
          },
          {
            prompt: "Curb ___ (marcher) dans le parc quand il a vu la loutre. (décor)",
            answer: "marchait",
            explanation: "Action en arrière-plan → imparfait : marchait.",
          },
          {
            prompt: "Curb marchait quand il ___ ___ (voir) la loutre. (événement)",
            answer: "a vu",
            explanation: "Événement ponctuel → passé composé ; voir → vu : a vu.",
          },
          {
            prompt: "Tout le monde ___ (parler) d'argent. (décor)",
            answer: "parlait",
            explanation: "Scène continue → imparfait : parlait.",
          },
          {
            prompt: "…mais la loutre ___ ___ (changer) de sujet. (événement)",
            answer: "a changé",
            explanation: "Action qui fait avancer l'histoire → passé composé : a changé.",
          },
        ],
      },
    },
    {
      slug: "futur-simple",
      title: "7 · The simple future: plans and predictions",
      body: `The **futur simple** adds endings directly onto the infinitive (drop the final **-e** of -re verbs). The endings come from **avoir**: **-ai, -as, -a, -ons, -ez, -ont**.

| travailler | |
|---|---|
| je travaillerai | nous travaillerons |
| tu travailleras | vous travaillerez |
| il/elle travaillera | ils/elles travailleront |

Common irregular stems: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-.

### Dans l'histoire
**L'année prochaine, Curb et ses amis ouvriront un marché sain.**
Next year, Curb and his friends will open a healthy market.

**Nous économiserons de l'argent et partagerons les bénéfices avec le quartier.**
We will save money and share the profits with the neighborhood.

**Est-ce que tu apprendras à cuisiner avec nous ?**
Will you learn to cook with us?

### À toi de parler
- Comment sera ta vie dans dix ans ? (What will your life be like in ten years?)
- Fais trois prédictions pour l'année prochaine. (Make three predictions for next year.)`,
    },
    {
      slug: "futur-simple-exercices",
      title: "Exercices · futur simple",
      exercise: {
        instructions: "Mets le verbe au futur simple (infinitif + -ai, -as, -a, -ons, -ez, -ont).",
        items: [
          {
            prompt: "je ___ (travailler) demain",
            answer: "travaillerai",
            explanation: "futur à « je » → infinitif + -ai : travaillerai.",
          },
          {
            prompt: "nous ___ (économiser) de l'argent",
            answer: "économiserons",
            explanation: "futur à « nous » → infinitif + -ons : économiserons.",
          },
          {
            prompt: "Curb et ses amis ___ (ouvrir) un marché sain",
            answer: "ouvriront",
            explanation: "futur à « ils » → infinitif + -ont : ouvriront.",
          },
          {
            prompt: "est-ce que tu ___ (apprendre) à cuisiner ?",
            answer: "apprendras",
            explanation: "futur à « tu » → radical apprendr- + -as : apprendras.",
          },
          {
            prompt: "elle ___ (être) prête (radical irrégulier ser-)",
            answer: "sera",
            explanation: "être a le radical irrégulier ser- : il/elle sera.",
          },
          {
            prompt: "Traduis : We will share the profits. → Nous ___ les bénéfices.",
            answer: "partagerons",
            explanation: "futur de partager à « nous » → partagerons.",
          },
        ],
      },
    },
    {
      slug: "conditionnel",
      title: "8 · The conditional: politeness and “would”",
      body: `The **conditionnel** means "would" — for hypotheticals and politeness. Take the **future stem** and add the **imparfait** endings (-ais, -ais, -ait, -ions, -iez, -aient).

### Dans l'histoire
**J'aimerais apprendre plus de recettes saines.**
I would like to learn more healthy recipes.

**Curb partagerait son jardin avec tout le quartier.**
Curb would share his garden with the whole neighborhood.

**Pourrais-tu m'apprendre à faire ce smoothie ?**
Could you teach me to make that smoothie?

**Sans budget, ce serait difficile d'économiser.**
Without a budget, it would be hard to save.

### À toi de parler
- Que ferais-tu avec plus de temps libre ? (What would you do with more free time?)
- Demande quelque chose poliment avec « Pourrais-tu… ? » (Ask for something politely with "Could you…?")`,
    },
    {
      slug: "conditionnel-exercices",
      title: "Exercices · conditionnel",
      exercise: {
        instructions: "Mets le verbe au conditionnel (radical du futur + terminaisons de l'imparfait -ais, -ait…).",
        items: [
          {
            prompt: "j' ___ (aimer) apprendre plus de recettes saines",
            answer: "aimerais",
            explanation: "radical futur aimer- + -ais : j'aimerais.",
          },
          {
            prompt: "Curb ___ (partager) son jardin avec le quartier",
            answer: "partagerait",
            explanation: "radical futur partager- + -ait : partagerait.",
          },
          {
            prompt: "___-tu (pouvoir) m'apprendre à faire ce smoothie ?",
            answer: "pourrais",
            explanation: "pouvoir a le radical irrégulier pourr- + -ais : pourrais.",
          },
          {
            prompt: "sans budget, ce ___ (être) difficile d'économiser",
            answer: "serait",
            explanation: "être a le radical irrégulier ser- + -ait : serait.",
          },
          {
            prompt: "nous ___ (aimer) un quartier en bonne santé",
            answer: "aimerions",
            explanation: "radical futur aimer- + -ions (« nous » à l'imparfait) : aimerions.",
          },
          {
            prompt: "Traduis : Could you teach me? → ___-tu m'apprendre ?",
            answer: "pourrais",
            explanation: "conditionnel de pouvoir à « tu » → pourrais (politesse).",
          },
        ],
      },
    },
    {
      slug: "subjonctif-present",
      title: "9 · The present subjunctive: wishes, advice, and doubt",
      body: `The **subjonctif** appears after expressions of necessity, wish, emotion, or doubt — usually with **que**. Form it from the **ils** form of the present: drop **-ent** and add **-e, -es, -e, -ions, -iez, -ent**.

**parler** → ils parlent → que je parle, que tu parles, qu'il parle, que nous parlions, qu'ils parlent

Triggers: _il faut que_, _il est important que_, _vouloir que_, _pour que_. Irregular: être → que je sois, avoir → que j'aie, faire → que je fasse.

### Dans l'histoire
**Il est important que nous mangions plus de légumes.**
It is important that we eat more vegetables.

**La loutre recommande que nous économisions un peu chaque semaine.**
The otter recommends that we save a little each week.

**Curb veut que ses amis apprennent à cuisiner.**
Curb wants his friends to learn to cook.

**Il faut que le jardin grandisse vite.**
The garden needs to grow quickly.

### À toi de parler
- Donne trois conseils de santé avec « Il est important que… ». (Give three health tips with "It is important that…".)
- Exprime un souhait avec « Je voudrais que… ». (Express a wish with "I would like that…".)`,
    },
    {
      slug: "subjonctif-present-exercices",
      title: "Exercices · subjonctif présent",
      exercise: {
        instructions: "Mets le verbe au subjonctif après « que » (radical du « ils » + -e, -es, -e, -ions, -ent).",
        items: [
          {
            prompt: "que je ___ (parler) doucement",
            answer: "parle",
            explanation: "ils parlent → radical parl- + -e : que je parle.",
          },
          {
            prompt: "il est important que nous ___ (manger) plus de légumes",
            answer: "mangions",
            explanation: "subjonctif à « nous » → -ions ; manger garde le e : que nous mangions.",
          },
          {
            prompt: "la loutre recommande que nous ___ (économiser) un peu",
            answer: "économisions",
            explanation: "subjonctif à « nous » → radical + -ions : que nous économisions.",
          },
          {
            prompt: "Curb veut que ses amis ___ (apprendre) à cuisiner",
            answer: "apprennent",
            explanation: "ils apprennent → subjonctif identique à « ils » : qu'ils apprennent.",
          },
          {
            prompt: "il faut que je ___ (être) prudent (irrégulier)",
            answer: "sois",
            explanation: "être est irrégulier au subjonctif : que je sois.",
          },
          {
            prompt: "Traduis : The garden needs to grow quickly. → Il faut que le jardin ___ vite.",
            answer: "grandisse",
            explanation: "grandir (-ir) → ils grandissent → que le jardin grandisse.",
          },
        ],
      },
    },
  ],
};
