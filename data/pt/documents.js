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
    fichier: "docs/pt/livres/livre-determinants-courbes.pdf",
    source: "docs/pt/sources/livre-determinants-courbes.tex",
    pages: 47,
    version: "v14",
    maj: "2026-11-04",
    description: "Tout le cours de déterminants et de courbes paramétrées (avec les compléments hors programme utiles aux TD), les deux feuilles de TD intégralement corrigées et un problème type devoir surveillé."
  },
  volume2: {
    titre: "Propriétés métriques et enveloppes",
    sousTitre: "Volume 2 — longueur, courbure, développée, enveloppes",
    type: "cours",
    fichier: "docs/pt/livres/volume2-metrique-enveloppes.pdf",
    source: "docs/pt/sources/volume2-metrique-enveloppes.tex",
    pages: 14,
    version: "v1",
    maj: "2026-11-04",
    description: "Longueur et abscisse curviligne, repère de Frenet, courbure, cercle de courbure, développée, enveloppe d'une famille de droites. Même forme que le livre principal."
  },
  "fiche-determinants": {
    titre: "Fiche de référence — Déterminants",
    sousTitre: "Chapitre 1 · imprimable",
    type: "fiche",
    fichier: "docs/pt/fiches/fiche-determinants.pdf",
    source: "docs/pt/sources/fiche-determinants.tex",
    pages: 3,
    version: "v2",
    maj: "2026-11-05",
    description: "Définitions, règles de calcul, propriétés globales, géométrie, choix de la méthode selon la forme du déterminant, techniques d'ordre n, pièges et résultats des TD."
  },
  "fiche-courbes": {
    titre: "Fiche de référence — Courbes paramétrées planes",
    sousTitre: "Chapitre 2 · imprimable",
    type: "fiche",
    fichier: "docs/pt/fiches/fiche-courbes-parametrees.pdf",
    source: "docs/pt/sources/fiche-courbes-parametrees.tex",
    pages: 3,
    version: "v2",
    maj: "2026-11-05",
    description: "Outils de calcul, tangente et pente, plan d'étude et symétries, points stationnaires et inflexions, branches infinies, points doubles, check-list de tracé et résultats des TD."
  },
  revision: {
    titre: "Fiche de révision personnalisée — devoir de courbes",
    sousTitre: "Diagnostic du DS, méthodes et devoir entièrement corrigé",
    type: "devoir",
    fichier: "docs/pt/fiches/fiche-revision-ds-courbes.pdf",
    source: "docs/pt/sources/fiche-revision-ds-courbes.tex",
    pages: 9,
    version: "v1",
    maj: "2026-11-04",
    description: "Construite à partir du devoir surveillé de courbes paramétrées : pour chaque question, ce qu'il faut savoir, la méthode, et la correction rédigée comme dans une copie."
  },
  presentation: {
    titre: "Présentation du cours",
    sousTitre: "Support de séance — révélation progressive",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation.pdf",
    source: "docs/pt/sources/presentation.tex",
    pages: 207,
    version: "v1",
    maj: "2026-11-05",
    description: "La présentation projetée pendant les séances : une idée par diapositive, questions « À toi », schémas. Chaque diapositive renvoie à la partie correspondante de la fiche."
  },
  presentationStatique: {
    titre: "Présentation du cours (sans animations)",
    sousTitre: "Une page par diapositive — pour réviser ou imprimer",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-sans-animations.pdf",
    source: "docs/pt/sources/presentation.tex",
    pages: 87,
    version: "v1",
    maj: "2026-11-05",
    description: "La même présentation, chaque diapositive dans son état final."
  },
  archive: {
    titre: "Livre de la séance 1 (première version)",
    sousTitre: "Archive — déroulé minuté de la première séance",
    type: "archive",
    fichier: "docs/pt/livres/archive-livre-seance1.pdf",
    source: "docs/pt/sources/archive-livre-seance1.tex",
    pages: 130,
    version: "v9",
    maj: "2026-11-03",
    description: "Première forme du travail : séance de deux heures découpée en étapes minutées, galerie d'exemples, séries d'entraînement. Remplacée par le livre principal, conservée pour mémoire."
  },
  /* ---- TD (générés par td/build_td.py) ---- */
  "td-determinants": {
    "titre": "TD — Déterminants",
    "sousTitre": "Chapitre 1 · 41 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_determinants.pdf",
    "source": "docs/pt/sources/td/TD_determinants.tex",
    "pages": 14,
    "version": "v1",
    "maj": "2026-11-05",
    "description": "Tous les exercices du livre pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-determinants-corrections": {
    "titre": "TD — Déterminants : corrections",
    "sousTitre": "Chapitre 1 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_determinants_corrections.pdf",
    "source": "docs/pt/sources/td/TD_determinants_corrections.tex",
    "pages": 19,
    "version": "v1",
    "maj": "2026-11-05",
    "description": "Les corrections détaillées des 41 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-courbes": {
    "titre": "TD — Courbes paramétrées",
    "sousTitre": "Chapitre 2 · 32 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_courbes.pdf",
    "source": "docs/pt/sources/td/TD_courbes.tex",
    "pages": 13,
    "version": "v1",
    "maj": "2026-11-05",
    "description": "Tous les exercices du livre pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-courbes-corrections": {
    "titre": "TD — Courbes paramétrées : corrections",
    "sousTitre": "Chapitre 2 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_courbes_corrections.pdf",
    "source": "docs/pt/sources/td/TD_courbes_corrections.tex",
    "pages": 24,
    "version": "v1",
    "maj": "2026-11-05",
    "description": "Les corrections détaillées des 32 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-metrique": {
    "titre": "TD — Propriétés métriques des courbes",
    "sousTitre": "Chapitre 3 · 24 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_metrique.pdf",
    "source": "docs/pt/sources/td/TD_metrique.tex",
    "pages": 10,
    "version": "v1",
    "maj": "2026-11-05",
    "description": "Tous les exercices du livre pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-metrique-corrections": {
    "titre": "TD — Propriétés métriques des courbes : corrections",
    "sousTitre": "Chapitre 3 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_metrique_corrections.pdf",
    "source": "docs/pt/sources/td/TD_metrique_corrections.tex",
    "pages": 11,
    "version": "v1",
    "maj": "2026-11-05",
    "description": "Les corrections détaillées des 24 exercices du TD, dans le même ordre et avec les mêmes numéros."
  }
};
