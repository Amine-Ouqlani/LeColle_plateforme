/* =====================================================================
   Le Collé — entraînement : devoirs et examens blancs
   Les examens blancs 1 à 4 sont composés par Le Collé à partir d'extraits
   d'annales officielles (sujets sur WikiPrépa) ; le barème est indicatif.
   L'examen blanc d'algèbre linéaire et déterminants est un sujet original
   (sujet et corrigé : docs/pt/examens/, source unique examen-al-determinants.tex).
   L'entraînement de réduction (séance du 21 novembre 2026) renvoie aux sujets
   officiels de la Banque PT 2018 et 2015 sur WikiPrépa (non hébergés, droits
   d'auteur) ; corrigé Le Collé : docs/pt/examens/ent-red-corrige.pdf.
   Champ « liens » : liste de liens (url externe ou doc/page du lecteur).
   ===================================================================== */
window.LC = window.LC || {};

LC.entrainement = [
  {
    id: "ent-red-2026-11-21", type: "concours", typeTexte: "Sujets de concours PT", theme: "Réduction",
    titre: "Entraînement – Réduction des endomorphismes et des matrices",
    seance: "Samedi 21 novembre 2026", objectif: "Préparation approfondie au prochain DS.",
    chapitres: ["red"], duree: 240, niveau: 4,
    origine: "Banque PT 2018 et 2015, Mathématiques A (filière PT), problèmes d'algèbre linéaire, parties I à III",
    description: "Deux vrais sujets de concours, problèmes d'algèbre de l'épreuve de Mathématiques A de la Banque PT (les exercices de probabilités sont écartés). 2018 : diagonalisation de deux matrices liées par $A^2=B$, diagonalisabilité dans $\\mathbb R$ ou dans $\\mathbb C$ (rotations), polynômes annulateurs, sous-espaces stables, $f^2$ diagonalisable. 2015 : famille $(x,f(x),f^2(x),\\dots)$ et relation polynomiale, plus petit sous-espace stable contenant un vecteur, sous-espaces stables d'un endomorphisme diagonalisable (dans la continuité du DL 3). Lire d'abord le sujet officiel ; le corrigé Le Collé (non officiel) en dernier.",
    liens: [
      { label: "Sujet 2018", url: "https://wikiprepa.fr/concours/data/banque-pt_maths-a_pt_2018.pdf" },
      { label: "Sujet 2015", url: "https://wikiprepa.fr/concours/data/banque-pt_maths-a_pt_2015.pdf" },
      { label: "Corrigé 2018", doc: "ent-red-corrige", page: 1 },
      { label: "Corrigé 2015", doc: "ent-red-corrige", page: 5 }
    ],
    ressources: [
      { label: "Page du sujet 2018 sur WikiPrépa", url: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-a_pt_2018", detail: "sujet officiel et corrigés de professeurs (UPS)" },
      { label: "Page du sujet 2015 sur WikiPrépa", url: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-a_pt_2015", detail: "sujet officiel et corrigés de professeurs (UPS)" },
      { label: "Livret de réduction", doc: "livre-red", page: 1, detail: "critères de diagonalisabilité, §1.3" },
      { label: "DL — Bases et familles cycliques", doc: "dl3", page: 1, detail: "même argument polynomial qu'en 2015, partie III" },
      { label: "Complément : trigonalisation (Banque PT 2026, Maths A, partie A)", url: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-a_pt_2026", detail: "absente des deux sujets" }
    ]
  },
  {
    id: "devoir-type", type: "devoir", titre: "Problème type devoir surveillé",
    chapitres: ["courbes"], duree: 90, niveau: 4,
    origine: "Le Collé (livre, §2.8)",
    description: "Une étude complète : dérivées factorisées, tangentes, point stationnaire par développement, position globale, asymptotes, courbe asymptote (hors programme PT), inflexion. À faire sans le livre, puis à corriger avec la fiche avant de lire le corrigé.",
    enonce: { doc: "td-courbes", page: 12 }, corrige: { doc: "td-courbes-corrections", page: 20 }
  },
  {
    id: "ds-classe", type: "devoir", titre: "Devoir surveillé de la classe — correction et diagnostic",
    chapitres: ["courbes"], duree: 120, niveau: 4,
    origine: "DS de la classe ; correction Le Collé",
    description: "Le diagnostic du devoir de courbes paramétrées, puis une page par question non traitée : ce qu'on demande, l'idée à voir, la rédaction pas à pas. Les questions réussies sont corrigées rapidement.",
    enonce: { doc: "revision", page: 2 }, corrige: { doc: "revision", page: 5 }
  },
  {
    id: "dl3", type: "devoir", titre: "DL — Bases et familles cycliques",
    chapitres: ["red"], duree: 120, niveau: 4,
    origine: "DL 3 de la classe ; correction Le Collé",
    description: "Les questions difficiles du devoir libre sur les endomorphismes cycliques : démontrer qu'une famille est une base, matrice dans une base cyclique, sous-espaces propres. Une question par page : ce qu'on demande, l'explication, puis la rédaction sur la copie.",
    enonce: { doc: "dl3", page: 2 }, corrige: { doc: "dl3", page: 4 }
  },
  {
    id: "eb-al-det", type: "examen", titre: "Examen blanc — Algèbre linéaire et déterminants",
    chapitres: ["al", "determinants"], duree: 180, niveau: 4,
    origine: "Sujet original Le Collé, au niveau du programme de PTSI",
    description: "Un devoir complet en conditions réelles : bases dans $\\R^3$, dans un sous-espace de $\\R^4$, dans $\\R_2[X]$ et sans coordonnées ; supplémentaires et projecteur ; déterminants par opérations, Vandermonde, matrice antisymétrique ; problème sur une matrice nilpotente (famille $(x,Ax,A^2x)$, comme dans le DL 3). Le corrigé explique le choix de chaque méthode et dit quoi revoir.",
    enonce: { doc: "eb-al-det-sujet", page: 1 }, corrige: { doc: "eb-al-det-corrige", page: 1 },
    bareme: [
      { titre: "Exercice 1 — Vrai ou faux", points: 3, detail: "6 affirmations à 0,5" },
      { titre: "Exercice 2 — Familles libres, génératrices, bases", points: 5, detail: "A : 1,5 · B : 1,25 · C : 1,25 · D : 1" },
      { titre: "Exercice 3 — Sous-espaces supplémentaires et projecteur", points: 3.5, detail: "Q1 : 0,5 · Q2 : 1,25 · Q3 : 0,75 · Q4 : 1" },
      { titre: "Exercice 4 — Calculs de déterminants", points: 4, detail: "Q1 : 1,5 · Q2 : 1,5 · Q3 : 1" },
      { titre: "Problème — Une matrice nilpotente", points: 4.5, detail: "Q1 : 0,5 · Q2 : 1 · Q3 : 1 · Q4 : 0,5 · Q5 : 1 · Q6 : 0,5" }
    ]
  },
  {
    id: "eb-determinants", type: "examen", titre: "Examen blanc 1 — Déterminants",
    chapitres: ["determinants"], duree: 90, niveau: 4,
    origine: "Composé par Le Collé à partir d'annales de la Banque PT",
    description: "Comatrice (hors programme PT), endomorphismes de $\\R^2$, aire d'un triangle.",
    parties: [
      { annale: "bpt-2019-b-2", questions: "Q1, Q3, Q4", points: 10, detail: "Q1 : 3 · Q3 : 4 · Q4 : 3" },
      { annale: "bpt-2018-b-1", questions: "Q1 à Q6", points: 7, detail: "Q1 : 2 · Q2–Q3 : 2 · Q4–Q5 : 2 · Q6 : 1" },
      { annale: "bpt-2014-b-2", questions: "Q1 à Q3, Q5", points: 3, detail: "Q1–Q3 : 1 · Q5 : 2" }
    ]
  },
  {
    id: "eb-courbes", type: "examen", titre: "Examen blanc 2 — Courbes paramétrées",
    chapitres: ["courbes"], duree: 120, niveau: 4,
    origine: "Composé par Le Collé à partir d'annales de la Banque PT",
    description: "Une étude complète avec asymptote oblique, une courbe de Bézier avec point singulier, un point double.",
    parties: [
      { annale: "bpt-2023-b-4", questions: "Q1 à Q6", points: 6, detail: "Q1 : 1,5 · Q2–Q3 : 1,5 · Q4–Q5 : 2 · Q6 : 1" },
      { annale: "bpt-2017-b-2", questions: "II.1 et II.2", points: 8, detail: "II.1 : 1 · II.2(a) : 2 · (b)(c) : 1,5 · (d) : 2 · (e) : 1,5" },
      { annale: "bpt-2014-b-1", questions: "Q1(a), (c), (d) et Q3(a)", points: 6, detail: "Q1(a) : 1 · Q1(c) : 2 · Q1(d) : 1 · Q3(a) : 2" }
    ]
  },
  {
    id: "eb-metrique", type: "examen", titre: "Examen blanc 3 — Courbes et propriétés métriques",
    chapitres: ["courbes", "metrique"], duree: 120, niveau: 4,
    origine: "Composé par Le Collé à partir d'annales de la Banque PT",
    description: "La deltoïde (symétries, rebroussement, longueur, développée) et des courbes données en polaires (spirale, cissoïde, enveloppe). Les coordonnées polaires sont hors programme en PT : cette partie est un entraînement facultatif.",
    parties: [
      { annale: "bpt-2021-b-2", questions: "Q2 à Q4(b)", points: 10, detail: "Q2 : 1 · Q3(a)–(c) : 2 · (d)–(f) : 2 · (g)(h) : 2 · (i) : 1,5 · Q4(a)(b) : 1,5" },
      { annale: "bpt-2024-b-2", questions: "Parties C et D", points: 10, detail: "C1–C2 : 3 · C3 : 2 · C4–C5 : 2 · D1–D4 : 3" }
    ]
  },
  {
    id: "eb-synthese", type: "examen", titre: "Examen blanc 4 — Synthèse type concours",
    chapitres: ["determinants", "courbes", "metrique"], duree: 180, niveau: 4,
    origine: "Composé par Le Collé à partir d'annales de la Banque PT",
    description: "Trois parties indépendantes couvrant les trois chapitres, en 3 heures (une épreuve réelle en dure 4).",
    parties: [
      { annale: "bpt-2024-b-2", questions: "Exercice 2 complet", points: 8, detail: "A : 1 · B : 3 · C : 2,5 · D : 1,5" },
      { annale: "bpt-2019-b-2", questions: "Q1, Q3, Q4", points: 6, detail: "Q1 : 2 · Q3 : 2 · Q4 : 2" },
      { annale: "bpt-2015-b-2", questions: "Q1 et Q2", points: 6, detail: "Q1 : 3 · Q2 : 3" }
    ]
  }
];
