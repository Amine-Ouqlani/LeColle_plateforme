/* =====================================================================
   Le Collé — registre des documents (PDF et sources LaTeX)
   Pour ajouter un document : déposer le PDF dans docs/, puis ajouter une
   entrée ici. Les pages sont des numéros de pages PDF (1 = première page).
   ===================================================================== */
window.LC = window.LC || {};

LC.documents = {
  livre: {
    titre: "Déterminants, courbes paramétrées planes",
    sousTitre: "Cours, TD et devoir — livre principal",
    type: "cours",
    fichier: "docs/livres/livre-determinants-courbes.pdf",
    source: "docs/sources/livre-determinants-courbes.tex",
    pages: 47,
    version: "v14",
    maj: "2026-11-04",
    description: "Tout le cours de déterminants et de courbes paramétrées (avec les compléments hors programme utiles aux TD), les deux feuilles de TD intégralement corrigées et un problème type devoir surveillé."
  },
  volume2: {
    titre: "Propriétés métriques et enveloppes",
    sousTitre: "Volume 2 — longueur, courbure, développée, enveloppes",
    type: "cours",
    fichier: "docs/livres/volume2-metrique-enveloppes.pdf",
    source: "docs/sources/volume2-metrique-enveloppes.tex",
    pages: 14,
    version: "v1",
    maj: "2026-11-04",
    description: "Longueur et abscisse curviligne, repère de Frenet, courbure, cercle de courbure, développée, enveloppe d'une famille de droites. Même forme que le livre principal."
  },
  fiche: {
    titre: "Fiche de référence",
    sousTitre: "Déterminants · Courbes paramétrées — imprimable",
    type: "fiche",
    fichier: "docs/fiches/fiche-reference.pdf",
    source: "docs/sources/fiche-reference.tex",
    pages: 6,
    version: "v2",
    maj: "2026-11-05",
    description: "Définitions, théorèmes avec hypothèses, formules, méthodes pas à pas, astuces, pièges et résultats des TD, avec les mêmes numéros de parties (§1.1 à §2.7) que la présentation."
  },
  revision: {
    titre: "Fiche de révision personnalisée — devoir de courbes",
    sousTitre: "Diagnostic du DS, méthodes et devoir entièrement corrigé",
    type: "devoir",
    fichier: "docs/fiches/fiche-revision-ds-courbes.pdf",
    source: "docs/sources/fiche-revision-ds-courbes.tex",
    pages: 9,
    version: "v1",
    maj: "2026-11-04",
    description: "Construite à partir du devoir surveillé de courbes paramétrées : pour chaque question, ce qu'il faut savoir, la méthode, et la correction rédigée comme dans une copie."
  },
  presentation: {
    titre: "Présentation du cours",
    sousTitre: "Support de séance — révélation progressive",
    type: "presentation",
    fichier: "docs/presentations/presentation.pdf",
    source: "docs/sources/presentation.tex",
    pages: 207,
    version: "v1",
    maj: "2026-11-05",
    description: "La présentation projetée pendant les séances : une idée par diapositive, questions « À toi », schémas. Chaque diapositive renvoie à la partie correspondante de la fiche."
  },
  presentationStatique: {
    titre: "Présentation du cours (sans animations)",
    sousTitre: "Une page par diapositive — pour réviser ou imprimer",
    type: "presentation",
    fichier: "docs/presentations/presentation-sans-animations.pdf",
    source: "docs/sources/presentation.tex",
    pages: 87,
    version: "v1",
    maj: "2026-11-05",
    description: "La même présentation, chaque diapositive dans son état final."
  },
  archive: {
    titre: "Livre de la séance 1 (première version)",
    sousTitre: "Archive — déroulé minuté de la première séance",
    type: "archive",
    fichier: "docs/livres/archive-livre-seance1.pdf",
    source: "docs/sources/archive-livre-seance1.tex",
    pages: 130,
    version: "v9",
    maj: "2026-11-03",
    description: "Première forme du travail : séance de deux heures découpée en étapes minutées, galerie d'exemples, séries d'entraînement. Remplacée par le livre principal, conservée pour mémoire."
  }
};
