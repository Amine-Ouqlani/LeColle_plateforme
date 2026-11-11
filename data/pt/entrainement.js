/* =====================================================================
   Le Collé — entraînement : devoirs et examens blancs
   Les examens blancs sont composés par Le Collé à partir d'extraits
   d'annales officielles (sujets sur WikiPrépa) ; le barème est indicatif.
   ===================================================================== */
window.LC = window.LC || {};

LC.entrainement = [
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
    description: "La fiche de révision reprend chaque question du devoir de courbes paramétrées : ce qu'il fallait savoir, la méthode, la correction rédigée, puis les priorités de travail.",
    enonce: { doc: "revision", page: 1 }, corrige: { doc: "revision", page: 2 }
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
    description: "Trois parties indépendantes couvrant les trois chapitres, dans les conditions d'une épreuve de 3 heures.",
    parties: [
      { annale: "bpt-2024-b-2", questions: "Exercice 2 complet", points: 8, detail: "A : 1 · B : 3 · C : 2,5 · D : 1,5" },
      { annale: "bpt-2019-b-2", questions: "Q1, Q3, Q4", points: 6, detail: "Q1 : 2 · Q3 : 2 · Q4 : 2" },
      { annale: "bpt-2015-b-2", questions: "Q1 et Q2", points: 6, detail: "Q1 : 3 · Q2 : 3" }
    ]
  }
];
