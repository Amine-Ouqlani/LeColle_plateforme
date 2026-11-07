/* =====================================================================
   Le Collé — registre des documents (PDF et sources LaTeX)
   Pour ajouter un document : déposer le PDF dans docs/, puis ajouter une
   entrée ici. Les pages sont des numéros de pages PDF (1 = première page).
   ===================================================================== */
window.LC = window.LC || {};

LC.documents = {
  "livre-ed": {
    titre: "Équations différentielles",
    sousTitre: "Chapitre 1 · livre complet : cours, méthodes, exercices corrigés",
    type: "cours",
    fichier: "docs/pt/livres/livre-equations-differentielles.pdf",
    source: "docs/pt/sources/livre-equations-differentielles.tex",
    pages: 15,
    version: "v1",
    maj: "2026-11-07",
    description: "Structure des solutions et théorème de Cauchy linéaire, premier ordre et recollement, second ordre à coefficients constants, second ordre à coefficients continus (solution polynomiale, solution connue, changement de variable, série entière). Exercices corrigés à la fin."
  },
  "livre-red": {
    titre: "Algèbre linéaire et réduction",
    sousTitre: "Chapitre 2 · livre complet : cours, méthodes, exercices corrigés",
    type: "cours",
    fichier: "docs/pt/livres/livre-reduction.pdf",
    source: "docs/pt/sources/livre-reduction.tex",
    pages: 21,
    version: "v1",
    maj: "2026-11-07",
    description: "Matrices semblables, sommes directes, trace, hyperplans, sous-espaces stables ; éléments propres, polynôme caractéristique, diagonalisation et ses applications, trigonalisation. Exercices corrigés à la fin."
  },
  "fiche-ed": {
    titre: "Fiche de référence — Équations différentielles",
    sousTitre: "Chapitre 1 · imprimable",
    type: "fiche",
    fichier: "docs/pt/fiches/fiche-equations-differentielles.pdf",
    source: "docs/pt/sources/fiche-equations-differentielles.tex",
    pages: 3,
    version: "v1",
    maj: "2026-11-07",
    description: "Structure et théorème de Cauchy, premier ordre et recollement, coefficients constants, coefficients continus, choix de la méthode, pièges et résultats du TD."
  },
  "fiche-red": {
    titre: "Fiche de référence — Algèbre linéaire et réduction",
    sousTitre: "Chapitre 2 · imprimable",
    type: "fiche",
    fichier: "docs/pt/fiches/fiche-reduction.pdf",
    source: "docs/pt/sources/fiche-reduction.tex",
    pages: 3,
    version: "v1",
    maj: "2026-11-07",
    description: "Sommes directes, trace, hyperplans, sous-espaces stables, éléments propres, polynôme caractéristique, critères de diagonalisation, applications, trigonalisation, pièges et résultats du TD."
  },
  "presentation-ed": {
    titre: "Présentation — Équations différentielles",
    sousTitre: "Support de séance (2 h) · 7 exercices intégrés",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-equations-differentielles.pdf",
    source: "docs/pt/sources/presentation-equations-differentielles.tex",
    pages: 86,
    version: "v1",
    maj: "2026-11-07",
    description: "Les diapositives de la séance, avec sept exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-ed-statique": {
    titre: "Présentation — Équations différentielles (sans animations)",
    sousTitre: "Une page par diapositive",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-equations-differentielles-sans-animations.pdf",
    source: "docs/pt/sources/presentation-equations-differentielles.tex",
    pages: 44,
    version: "v1",
    maj: "2026-11-07",
    description: "La même présentation, chaque diapositive dans son état final."
  },
  "presentation-red": {
    titre: "Présentation — Algèbre linéaire et réduction",
    sousTitre: "Support de deux séances · 9 exercices intégrés",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-reduction.pdf",
    source: "docs/pt/sources/presentation-reduction.tex",
    pages: 95,
    version: "v1",
    maj: "2026-11-07",
    description: "Les diapositives des séances, avec neuf exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-red-statique": {
    titre: "Présentation — Algèbre linéaire et réduction (sans animations)",
    sousTitre: "Une page par diapositive",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-reduction-sans-animations.pdf",
    source: "docs/pt/sources/presentation-reduction.tex",
    pages: 49,
    version: "v1",
    maj: "2026-11-07",
    description: "La même présentation, chaque diapositive dans son état final."
  },
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
    titre: "Présentation — Déterminants et courbes paramétrées",
    sousTitre: "Support de séance — révélation progressive · 8 exercices intégrés",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation.pdf",
    source: "docs/pt/sources/presentation.tex",
    pages: 237,
    version: "v2",
    maj: "2026-11-07",
    description: "La présentation projetée pendant les séances : une idée par diapositive, questions « À toi », schémas, et huit exercices à chercher en direct (énoncé, puis correction sur la diapositive suivante). Chaque diapositive renvoie à la partie correspondante de la fiche."
  },
  presentationStatique: {
    titre: "Présentation — Déterminants et courbes (sans animations)",
    sousTitre: "Une page par diapositive — pour réviser ou imprimer",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-sans-animations.pdf",
    source: "docs/pt/sources/presentation.tex",
    pages: 103,
    version: "v2",
    maj: "2026-11-07",
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
  "td-ed": {
    "titre": "TD — Équations différentielles",
    "sousTitre": "Chapitre 1 · 28 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_ed.pdf",
    "source": "docs/pt/sources/td/TD_ed.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livre (fin de chaque partie du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-ed-corrections": {
    "titre": "TD — Équations différentielles : corrections",
    "sousTitre": "Chapitre 1 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_ed_corrections.pdf",
    "source": "docs/pt/sources/td/TD_ed_corrections.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 28 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-red": {
    "titre": "TD — Algèbre linéaire et réduction",
    "sousTitre": "Chapitre 2 · 29 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_red.pdf",
    "source": "docs/pt/sources/td/TD_red.tex",
    "pages": 11,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livre (fin de chaque partie du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-red-corrections": {
    "titre": "TD — Algèbre linéaire et réduction : corrections",
    "sousTitre": "Chapitre 2 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_red_corrections.pdf",
    "source": "docs/pt/sources/td/TD_red_corrections.tex",
    "pages": 10,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 29 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "selection-ed": {
    titre: "Sélection — Équations différentielles",
    sousTitre: "5 problèmes après le cours : énoncés, indications, corrections",
    type: "selection",
    fichier: "docs/pt/selection/Selection_ed.pdf",
    source: "docs/pt/sources/selection/Selection_ed.tex",
    pages: 10,
    version: "v1",
    maj: "2026-11-06",
    description: "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-red": {
    titre: "Sélection — Algèbre linéaire et réduction",
    sousTitre: "5 problèmes après le cours : énoncés, indications, corrections",
    type: "selection",
    fichier: "docs/pt/selection/Selection_red.pdf",
    source: "docs/pt/sources/selection/Selection_red.tex",
    pages: 11,
    version: "v1",
    maj: "2026-11-06",
    description: "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-determinants": {
    titre: "Sélection — Déterminants",
    sousTitre: "5 problèmes après le cours : énoncés, indications, corrections",
    type: "selection",
    fichier: "docs/pt/selection/Selection_determinants.pdf",
    source: "docs/pt/sources/selection/Selection_determinants.tex",
    pages: 13,
    version: "v1",
    maj: "2026-11-06",
    description: "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-courbes": {
    titre: "Sélection — Courbes paramétrées",
    sousTitre: "5 problèmes après le cours : énoncés, indications, corrections",
    type: "selection",
    fichier: "docs/pt/selection/Selection_courbes.pdf",
    source: "docs/pt/sources/selection/Selection_courbes.tex",
    pages: 15,
    version: "v1",
    maj: "2026-11-06",
    description: "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-metrique": {
    titre: "Sélection — Propriétés métriques des courbes",
    sousTitre: "5 problèmes après le cours : énoncés, indications, corrections",
    type: "selection",
    fichier: "docs/pt/selection/Selection_metrique.pdf",
    source: "docs/pt/sources/selection/Selection_metrique.tex",
    pages: 11,
    version: "v1",
    maj: "2026-11-06",
    description: "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "td-determinants": {
    "titre": "TD — Déterminants",
    "sousTitre": "Chapitre 3 · 41 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_determinants.pdf",
    "source": "docs/pt/sources/td/TD_determinants.tex",
    "pages": 14,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livre pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-determinants-corrections": {
    "titre": "TD — Déterminants : corrections",
    "sousTitre": "Chapitre 3 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_determinants_corrections.pdf",
    "source": "docs/pt/sources/td/TD_determinants_corrections.tex",
    "pages": 19,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 41 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-courbes": {
    "titre": "TD — Courbes paramétrées",
    "sousTitre": "Chapitre 4 · 32 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_courbes.pdf",
    "source": "docs/pt/sources/td/TD_courbes.tex",
    "pages": 13,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livre pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-courbes-corrections": {
    "titre": "TD — Courbes paramétrées : corrections",
    "sousTitre": "Chapitre 4 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_courbes_corrections.pdf",
    "source": "docs/pt/sources/td/TD_courbes_corrections.tex",
    "pages": 24,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 32 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-metrique": {
    "titre": "TD — Propriétés métriques des courbes",
    "sousTitre": "Chapitre 5 · 24 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_metrique.pdf",
    "source": "docs/pt/sources/td/TD_metrique.tex",
    "pages": 10,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livre pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-metrique-corrections": {
    "titre": "TD — Propriétés métriques des courbes : corrections",
    "sousTitre": "Chapitre 5 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_metrique_corrections.pdf",
    "source": "docs/pt/sources/td/TD_metrique_corrections.tex",
    "pages": 11,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 24 exercices du TD, dans le même ordre et avec les mêmes numéros."
  }
};
