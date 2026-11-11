/* =====================================================================
   Le Collé — registre des documents (PDF et sources LaTeX)
   Pour ajouter un document : déposer le PDF dans docs/, puis ajouter une
   entrée ici. Les pages sont des numéros de pages PDF (1 = première page).
   ===================================================================== */
window.LC = window.LC || {};

LC.documents = {
  "livret-pt": {
    titre: "Livret complet PT",
    sousTitre: "Tous les cours, dans l'ordre des chapitres 1 à 5",
    type: "complet",
    fichier: "docs/pt/livres/livret-complet-PT.pdf",
    pages: 103,
    version: "v1",
    maj: "2026-11-07",
    description: "Les livrets de tous les chapitres réunis en un seul PDF, avec un sommaire et des signets : équations différentielles, réduction, déterminants, courbes paramétrées, propriétés métriques. Assemblé automatiquement à partir des livrets individuels (outils/livrets/construire.py)."
  },
  "presentations-pt": {
    titre: "Présentations complètes PT",
    sousTitre: "Toutes les présentations des chapitres 1 à 4",
    type: "complet",
    fichier: "docs/pt/presentations/presentations-completes-PT.pdf",
    pages: 424,
    version: "v1",
    maj: "2026-11-07",
    description: "Les présentations de tous les chapitres réunies en un seul PDF, avec un sommaire et des signets. En séance, on utilise la présentation du chapitre."
  },
  "presentations-pt-statique": {
    titre: "Présentations complètes PT (sans animations)",
    sousTitre: "Une page par diapositive, pour réviser ou imprimer",
    type: "complet",
    fichier: "docs/pt/presentations/presentations-completes-PT-sans-animations.pdf",
    pages: 202,
    version: "v1",
    maj: "2026-11-07",
    description: "La même présentation complète, chaque diapositive dans son état final."
  },
  "livre-ed": {
    titre: "Équations différentielles",
    sousTitre: "Chapitre 1 · livret : cours, méthodes, exercices corrigés",
    type: "cours",
    fichier: "docs/pt/livres/livre-equations-differentielles.pdf",
    source: "docs/pt/sources/livre-equations-differentielles.tex",
    pages: 15,
    version: "v1",
    maj: "2026-11-07",
    description: "Structure des solutions et théorème de Cauchy linéaire, premier ordre et recollement, second ordre à coefficients constants, second ordre à coefficients continus (solution polynomiale, solution connue, changement de variable, série entière). Exercices corrigés à la fin."
  },
  "presentation-ed": {
    titre: "Présentation — Équations différentielles",
    sousTitre: "Chapitre 1 · Support de séance (2 h) · 7 exercices intégrés",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-equations-differentielles.pdf",
    source: "docs/pt/sources/presentation-equations-differentielles.tex",
    pages: 86,
    version: "v1",
    maj: "2026-11-07",
    description: "Les diapositives de la séance, avec 7 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
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
  "livre-red": {
    titre: "Algèbre linéaire et réduction",
    sousTitre: "Chapitre 2 · livret : cours, méthodes, exercices corrigés",
    type: "cours",
    fichier: "docs/pt/livres/livre-reduction.pdf",
    source: "docs/pt/sources/livre-reduction.tex",
    pages: 21,
    version: "v1",
    maj: "2026-11-07",
    description: "Matrices semblables, sommes directes, trace, hyperplans, sous-espaces stables ; éléments propres, polynôme caractéristique, diagonalisation et ses applications, trigonalisation. Exercices corrigés à la fin."
  },
  "presentation-red": {
    titre: "Présentation — Algèbre linéaire et réduction",
    sousTitre: "Chapitre 2 · Support de deux séances · 9 exercices intégrés",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-reduction.pdf",
    source: "docs/pt/sources/presentation-reduction.tex",
    pages: 95,
    version: "v1",
    maj: "2026-11-07",
    description: "Les diapositives de la séance, avec 9 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
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
  "livre-det": {
    titre: "Déterminants",
    sousTitre: "Chapitre 3 · livret : cours, méthodes, exercices corrigés",
    type: "cours",
    fichier: "docs/pt/livres/livre-determinants.pdf",
    source: "docs/pt/sources/livre-determinants.tex",
    pages: 23,
    version: "v2",
    maj: "2026-11-07",
    description: "Aire et volume orientés, définition et règles de calcul, propriétés globales, géométrie, techniques de calcul d'ordre n, avec la feuille de TD de la classe intégralement corrigée et les compléments hors programme utiles."
  },
  "presentation-det": {
    titre: "Présentation — Déterminants",
    sousTitre: "Chapitre 3 · Support de deux séances · 4 exercices intégrés",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-determinants.pdf",
    source: "docs/pt/sources/presentation-determinants.tex",
    pages: 127,
    version: "v2",
    maj: "2026-11-07",
    description: "Les diapositives de la séance, avec 4 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-det-statique": {
    titre: "Présentation — Déterminants (sans animations)",
    sousTitre: "Une page par diapositive",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-determinants-sans-animations.pdf",
    source: "docs/pt/sources/presentation-determinants.tex",
    pages: 56,
    version: "v2",
    maj: "2026-11-07",
    description: "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-determinants": {
    titre: "Fiche de référence — Déterminants",
    sousTitre: "Chapitre 3 · imprimable",
    type: "fiche",
    fichier: "docs/pt/fiches/fiche-determinants.pdf",
    source: "docs/pt/sources/fiche-determinants.tex",
    pages: 3,
    version: "v2",
    maj: "2026-11-07",
    description: "Définitions, règles de calcul, propriétés globales, géométrie, choix de la méthode selon la forme du déterminant, techniques d'ordre n, pièges et résultats des TD."
  },
  "livre-courbes": {
    titre: "Courbes paramétrées planes",
    sousTitre: "Chapitre 4 · livret : cours, méthodes, exercices corrigés",
    type: "cours",
    fichier: "docs/pt/livres/livre-courbes.pdf",
    source: "docs/pt/sources/livre-courbes.tex",
    pages: 28,
    version: "v2",
    maj: "2026-11-07",
    description: "Fonctions vectorielles, tangentes, plan d'étude, points stationnaires, branches infinies, une courbe de Lissajous, avec la feuille de TD de la classe intégralement corrigée et un problème type devoir surveillé."
  },
  "presentation-courbes": {
    titre: "Présentation — Courbes paramétrées planes",
    sousTitre: "Chapitre 4 · Support de deux séances · 4 exercices intégrés",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-courbes.pdf",
    source: "docs/pt/sources/presentation-courbes.tex",
    pages: 114,
    version: "v2",
    maj: "2026-11-07",
    description: "Les diapositives de la séance, avec 4 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-courbes-statique": {
    titre: "Présentation — Courbes paramétrées planes (sans animations)",
    sousTitre: "Une page par diapositive",
    type: "presentation",
    fichier: "docs/pt/presentations/presentation-courbes-sans-animations.pdf",
    source: "docs/pt/sources/presentation-courbes.tex",
    pages: 51,
    version: "v2",
    maj: "2026-11-07",
    description: "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-courbes": {
    titre: "Fiche de référence — Courbes paramétrées planes",
    sousTitre: "Chapitre 4 · imprimable",
    type: "fiche",
    fichier: "docs/pt/fiches/fiche-courbes-parametrees.pdf",
    source: "docs/pt/sources/fiche-courbes-parametrees.tex",
    pages: 3,
    version: "v2",
    maj: "2026-11-07",
    description: "Outils de calcul, tangente et pente, plan d'étude et symétries, points stationnaires et inflexions, branches infinies, points doubles, check-list de tracé et résultats des TD."
  },
  "volume2": {
    titre: "Propriétés métriques et enveloppes",
    sousTitre: "Chapitre 5 · livret : longueur, courbure, développée, enveloppes",
    type: "cours",
    fichier: "docs/pt/livres/volume2-metrique-enveloppes.pdf",
    source: "docs/pt/sources/volume2-metrique-enveloppes.tex",
    pages: 14,
    version: "v2",
    maj: "2026-11-07",
    description: "Longueur et abscisse curviligne, repère de Frenet, courbure, cercle de courbure, développée, enveloppe d'une famille de droites. Même forme que les autres livrets."
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
  "bilan-ed": {
    titre: "Exercice bilan — Équations différentielles",
    sousTitre: "Chapitre 1 · 15 min · énoncé, corrigé détaillé, notions évaluées",
    type: "bilan",
    fichier: "docs/pt/bilans/bilan-ed.pdf",
    source: "docs/pt/sources/exercices-bilan.tex",
    pages: 3,
    version: "v1",
    maj: "2026-11-11",
    description: "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  "bilan-red": {
    titre: "Exercice bilan — Algèbre linéaire et réduction",
    sousTitre: "Chapitre 2 · 15 min · énoncé, corrigé détaillé, notions évaluées",
    type: "bilan",
    fichier: "docs/pt/bilans/bilan-red.pdf",
    source: "docs/pt/sources/exercices-bilan.tex",
    pages: 3,
    version: "v1",
    maj: "2026-11-11",
    description: "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  "bilan-determinants": {
    titre: "Exercice bilan — Déterminants",
    sousTitre: "Chapitre 3 · 13 min · énoncé, corrigé détaillé, notions évaluées",
    type: "bilan",
    fichier: "docs/pt/bilans/bilan-determinants.pdf",
    source: "docs/pt/sources/exercices-bilan.tex",
    pages: 3,
    version: "v1",
    maj: "2026-11-11",
    description: "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  "bilan-courbes": {
    titre: "Exercice bilan — Courbes paramétrées planes",
    sousTitre: "Chapitre 4 · 15 min · énoncé, corrigé détaillé, notions évaluées",
    type: "bilan",
    fichier: "docs/pt/bilans/bilan-courbes.pdf",
    source: "docs/pt/sources/exercices-bilan.tex",
    pages: 2,
    version: "v1",
    maj: "2026-11-11",
    description: "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  "bilan-metrique": {
    titre: "Exercice bilan — Propriétés métriques et enveloppes",
    sousTitre: "Chapitre 5 · 13 min · énoncé, corrigé détaillé, notions évaluées",
    type: "bilan",
    fichier: "docs/pt/bilans/bilan-metrique.pdf",
    source: "docs/pt/sources/exercices-bilan.tex",
    pages: 2,
    version: "v1",
    maj: "2026-11-11",
    description: "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  "td-ed": {
    "titre": "TD — Équations différentielles",
    "sousTitre": "Chapitre 1 · 28 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_ed.pdf",
    "source": "docs/pt/sources/td/TD_ed.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livret (fin de chaque partie du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
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
    "description": "Tous les exercices du livret (fin de chaque partie du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
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
    "description": "Tous les exercices du livret pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
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
    "description": "Tous les exercices du livret pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
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
    "description": "Tous les exercices du livret pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
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
