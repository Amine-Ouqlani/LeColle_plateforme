/* =====================================================================
   Le Collé — registre des documents (PDF et sources LaTeX)
   Pour ajouter un document : déposer le PDF dans docs/, puis ajouter une
   entrée ici. Les pages sont des numéros de pages PDF (1 = première page).
   ===================================================================== */
window.LC = window.LC || {};

LC.documents = {
  /* ---- Documents complets ---- */
  "livret-pt": {
    "titre": "Livret complet PT",
    "sousTitre": "Tous les cours, dans l'ordre des chapitres 1 à 6",
    "type": "complet",
    "fichier": "docs/pt/livres/livret-complet-PT.pdf",
    "pages": 117,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Les livrets de tous les chapitres réunis en un seul PDF, avec un sommaire et des signets : algèbre linéaire, déterminants, réduction, équations différentielles, courbes paramétrées, propriétés métriques. Assemblé automatiquement à partir des livrets individuels (outils/livrets/construire.py)."
  },
  "presentations-pt": {
    "titre": "Présentations complètes PT",
    "sousTitre": "Toutes les présentations des chapitres 1 à 5",
    "type": "complet",
    "fichier": "docs/pt/presentations/presentations-completes-PT.pdf",
    "pages": 429,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Les présentations de tous les chapitres réunies en un seul PDF, avec un sommaire et des signets. En séance, on utilise la présentation du chapitre."
  },
  "presentations-pt-statique": {
    "titre": "Présentations complètes PT (sans animations)",
    "sousTitre": "Une page par diapositive, pour réviser ou imprimer",
    "type": "complet",
    "fichier": "docs/pt/presentations/presentations-completes-PT-sans-animations.pdf",
    "pages": 210,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "La même présentation complète, chaque diapositive dans son état final."
  },
  /* ---- Chapitre 1 — Algèbre linéaire ---- */
  "livre-al": {
    "titre": "Algèbre linéaire",
    "sousTitre": "Chapitre 1 · livret : cours, méthodes, exercices corrigés",
    "type": "cours",
    "fichier": "docs/pt/livres/livre-algebre-lineaire.pdf",
    "source": "docs/pt/sources/livre-algebre-lineaire.tex",
    "pages": 22,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Rappels de tout le programme de première année (calcul matriciel, systèmes, familles et dimension, applications linéaires, rang, matrices et changement de base), produit et somme de sous-espaces, somme directe et base adaptée, projecteurs et symétries, hyperplans et systèmes linéaires, trace, sous-espaces stables et matrices par blocs. Exercices corrigés à la fin."
  },
  "presentation-al": {
    "titre": "Présentation — Algèbre linéaire",
    "sousTitre": "Chapitre 1 · Support de séance · 5 exercices intégrés",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-algebre-lineaire.pdf",
    "source": "docs/pt/sources/presentation-algebre-lineaire.tex",
    "pages": 63,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Les diapositives de la séance, avec 5 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-al-statique": {
    "titre": "Présentation — Algèbre linéaire (sans animations)",
    "sousTitre": "Une page par diapositive",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-algebre-lineaire-sans-animations.pdf",
    "source": "docs/pt/sources/presentation-algebre-lineaire.tex",
    "pages": 36,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-al": {
    "titre": "Fiche de référence — Algèbre linéaire",
    "sousTitre": "Chapitre 1 · imprimable",
    "type": "fiche",
    "fichier": "docs/pt/fiches/fiche-algebre-lineaire.pdf",
    "source": "docs/pt/sources/fiche-algebre-lineaire.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Rappels de première année (calcul matriciel, dimension, rang, matrices, changement de base), produit et somme de sous-espaces, projecteurs et symétries, hyperplans, trace, sous-espaces stables, choix de la méthode, pièges et résultats du TD."
  },
  "bilan-al": {
    "titre": "Exercice bilan — Algèbre linéaire",
    "sousTitre": "Chapitre 1 · 13 min · énoncé, corrigé détaillé, notions évaluées",
    "type": "bilan",
    "fichier": "docs/pt/bilans/bilan-al.pdf",
    "source": "docs/pt/sources/exercices-bilan.tex",
    "pages": 3,
    "version": "v1",
    "maj": "2026-11-11",
    "description": "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  /* ---- Chapitre 2 — Déterminants ---- */
  "livre-det": {
    "titre": "Déterminants",
    "sousTitre": "Chapitre 2 · livret : cours, méthodes, exercices corrigés",
    "type": "cours",
    "fichier": "docs/pt/livres/livre-determinants.pdf",
    "source": "docs/pt/sources/livre-determinants.tex",
    "pages": 24,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "Aire et volume orientés, définition et règles de calcul, propriétés globales, géométrie, techniques de calcul d'ordre n, avec la feuille de TD de la classe intégralement corrigée et les compléments hors programme utiles."
  },
  "presentation-det": {
    "titre": "Présentation — Déterminants",
    "sousTitre": "Chapitre 2 · Support de deux séances · 4 exercices intégrés",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-determinants.pdf",
    "source": "docs/pt/sources/presentation-determinants.tex",
    "pages": 127,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "Les diapositives de la séance, avec 4 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-det-statique": {
    "titre": "Présentation — Déterminants (sans animations)",
    "sousTitre": "Une page par diapositive",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-determinants-sans-animations.pdf",
    "source": "docs/pt/sources/presentation-determinants.tex",
    "pages": 56,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-determinants": {
    "titre": "Fiche de référence — Déterminants",
    "sousTitre": "Chapitre 2 · imprimable",
    "type": "fiche",
    "fichier": "docs/pt/fiches/fiche-determinants.pdf",
    "source": "docs/pt/sources/fiche-determinants.tex",
    "pages": 3,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "Définitions, règles de calcul, propriétés globales, géométrie, choix de la méthode selon la forme du déterminant, techniques d'ordre n, pièges et résultats des TD."
  },
  "bilan-determinants": {
    "titre": "Exercice bilan — Déterminants",
    "sousTitre": "Chapitre 2 · 13 min · énoncé, corrigé détaillé, notions évaluées",
    "type": "bilan",
    "fichier": "docs/pt/bilans/bilan-determinants.pdf",
    "source": "docs/pt/sources/exercices-bilan.tex",
    "pages": 3,
    "version": "v1",
    "maj": "2026-11-11",
    "description": "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  /* ---- Chapitre 3 — Réduction ---- */
  "livre-red": {
    "titre": "Réduction",
    "sousTitre": "Chapitre 3 · livret : cours, méthodes, exercices corrigés",
    "type": "cours",
    "fichier": "docs/pt/livres/livre-reduction.pdf",
    "source": "docs/pt/sources/livre-reduction.tex",
    "pages": 16,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Éléments propres, polynôme caractéristique, diagonalisation et ses applications (puissances, suites, équations matricielles), trigonalisation. S'appuie sur les chapitres Algèbre linéaire et Déterminants. Exercices corrigés à la fin."
  },
  "presentation-red": {
    "titre": "Présentation — Réduction",
    "sousTitre": "Chapitre 3 · Support de deux séances · 6 exercices intégrés",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-reduction.pdf",
    "source": "docs/pt/sources/presentation-reduction.tex",
    "pages": 67,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les diapositives de la séance, avec 6 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-red-statique": {
    "titre": "Présentation — Réduction (sans animations)",
    "sousTitre": "Une page par diapositive",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-reduction-sans-animations.pdf",
    "source": "docs/pt/sources/presentation-reduction.tex",
    "pages": 35,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-red": {
    "titre": "Fiche de référence — Réduction",
    "sousTitre": "Chapitre 3 · imprimable",
    "type": "fiche",
    "fichier": "docs/pt/fiches/fiche-reduction.pdf",
    "source": "docs/pt/sources/fiche-reduction.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Éléments propres, polynôme caractéristique, critères de diagonalisation, applications, trigonalisation, pièges et résultats du TD."
  },
  "bilan-red": {
    "titre": "Exercice bilan — Algèbre linéaire et réduction",
    "sousTitre": "Chapitre 3 · 15 min · énoncé, corrigé détaillé, notions évaluées",
    "type": "bilan",
    "fichier": "docs/pt/bilans/bilan-red.pdf",
    "source": "docs/pt/sources/exercices-bilan.tex",
    "pages": 3,
    "version": "v1",
    "maj": "2026-11-11",
    "description": "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  /* ---- Chapitre 4 — Équations différentielles ---- */
  "livre-ed": {
    "titre": "Équations différentielles",
    "sousTitre": "Chapitre 4 · livret : cours, méthodes, exercices corrigés",
    "type": "cours",
    "fichier": "docs/pt/livres/livre-equations-differentielles.pdf",
    "source": "docs/pt/sources/livre-equations-differentielles.tex",
    "pages": 11,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Programme de première année (PTSI) : structure des solutions et théorème de Cauchy, premier ordre (variation de la constante, équations intégrales), second ordre à coefficients constants (seconds membres usuels, résonance, superposition). Exercices corrigés à la fin. Les compléments de PT seront ajoutés quand ils auront été vus en classe."
  },
  "presentation-ed": {
    "titre": "Présentation — Équations différentielles",
    "sousTitre": "Chapitre 4 · Support de séance (1 h 30) · 4 exercices intégrés",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-equations-differentielles.pdf",
    "source": "docs/pt/sources/presentation-equations-differentielles.tex",
    "pages": 56,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Les diapositives de la séance, avec 4 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-ed-statique": {
    "titre": "Présentation — Équations différentielles (sans animations)",
    "sousTitre": "Une page par diapositive",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-equations-differentielles-sans-animations.pdf",
    "source": "docs/pt/sources/presentation-equations-differentielles.tex",
    "pages": 30,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-ed": {
    "titre": "Fiche de référence — Équations différentielles",
    "sousTitre": "Chapitre 4 · imprimable",
    "type": "fiche",
    "fichier": "docs/pt/fiches/fiche-equations-differentielles.pdf",
    "source": "docs/pt/sources/fiche-equations-differentielles.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Programme de première année : structure et théorème de Cauchy, premier ordre, second ordre à coefficients constants, choix de la méthode, pièges et résultats du TD."
  },
  "bilan-ed": {
    "titre": "Exercice bilan — Équations différentielles",
    "sousTitre": "Chapitre 4 · 15 min · énoncé, corrigé détaillé, notions évaluées",
    "type": "bilan",
    "fichier": "docs/pt/bilans/bilan-ed.pdf",
    "source": "docs/pt/sources/exercices-bilan.tex",
    "pages": 3,
    "version": "v1",
    "maj": "2026-11-13",
    "description": "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  /* ---- Chapitre 5 — Courbes paramétrées planes ---- */
  "livre-courbes": {
    "titre": "Courbes paramétrées planes",
    "sousTitre": "Chapitre 5 · livret : cours, méthodes, exercices corrigés",
    "type": "cours",
    "fichier": "docs/pt/livres/livre-courbes.pdf",
    "source": "docs/pt/sources/livre-courbes.tex",
    "pages": 28,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "Fonctions vectorielles, tangentes, plan d'étude, points stationnaires, branches infinies, une courbe de Lissajous, avec la feuille de TD de la classe intégralement corrigée et un problème type devoir surveillé."
  },
  "presentation-courbes": {
    "titre": "Présentation — Courbes paramétrées planes",
    "sousTitre": "Chapitre 5 · Support de deux séances · 4 exercices intégrés",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-courbes.pdf",
    "source": "docs/pt/sources/presentation-courbes.tex",
    "pages": 114,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "Les diapositives de la séance, avec 4 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-courbes-statique": {
    "titre": "Présentation — Courbes paramétrées planes (sans animations)",
    "sousTitre": "Une page par diapositive",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-courbes-sans-animations.pdf",
    "source": "docs/pt/sources/presentation-courbes.tex",
    "pages": 51,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-courbes": {
    "titre": "Fiche de référence — Courbes paramétrées planes",
    "sousTitre": "Chapitre 5 · imprimable",
    "type": "fiche",
    "fichier": "docs/pt/fiches/fiche-courbes-parametrees.pdf",
    "source": "docs/pt/sources/fiche-courbes-parametrees.tex",
    "pages": 3,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "Outils de calcul, tangente et pente, plan d'étude et symétries, points stationnaires et inflexions, branches infinies, points doubles, check-list de tracé et résultats des TD."
  },
  "bilan-courbes": {
    "titre": "Exercice bilan — Courbes paramétrées planes",
    "sousTitre": "Chapitre 5 · 15 min · énoncé, corrigé détaillé, notions évaluées",
    "type": "bilan",
    "fichier": "docs/pt/bilans/bilan-courbes.pdf",
    "source": "docs/pt/sources/exercices-bilan.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-11",
    "description": "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  /* ---- Chapitre 6 — Propriétés métriques et enveloppes ---- */
  "volume2": {
    "titre": "Propriétés métriques et enveloppes",
    "sousTitre": "Chapitre 6 · livret : longueur, courbure, développée, enveloppes",
    "type": "cours",
    "fichier": "docs/pt/livres/volume2-metrique-enveloppes.pdf",
    "source": "docs/pt/sources/volume2-metrique-enveloppes.tex",
    "pages": 14,
    "version": "v2",
    "maj": "2026-11-07",
    "description": "Longueur et abscisse curviligne, repère de Frenet, courbure, cercle de courbure, développée, enveloppe d'une famille de droites. Même forme que les autres livrets."
  },
  "fiche-metrique": {
    "titre": "Fiche de référence — Propriétés métriques et enveloppes",
    "sousTitre": "Chapitre 6 · imprimable",
    "type": "fiche",
    "fichier": "docs/pt/fiches/fiche-metrique-enveloppes.pdf",
    "source": "docs/pt/sources/fiche-metrique-enveloppes.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-11",
    "description": "Longueur et abscisse curviligne, repère de Frenet et courbure, rayon et centre de courbure, développée, enveloppes, choix de la méthode, pièges et résultats du TD."
  },
  "bilan-metrique": {
    "titre": "Exercice bilan — Propriétés métriques et enveloppes",
    "sousTitre": "Chapitre 6 · 13 min · énoncé, corrigé détaillé, notions évaluées",
    "type": "bilan",
    "fichier": "docs/pt/bilans/bilan-metrique.pdf",
    "source": "docs/pt/sources/exercices-bilan.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-11",
    "description": "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  /* ---- Autres documents ---- */
  "revision": {
    "titre": "Fiche de révision personnalisée — devoir de courbes",
    "sousTitre": "Diagnostic du DS, méthodes et devoir entièrement corrigé",
    "type": "devoir",
    "fichier": "docs/pt/fiches/fiche-revision-ds-courbes.pdf",
    "source": "docs/pt/sources/fiche-revision-ds-courbes.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-04",
    "description": "Construite à partir du devoir surveillé de courbes paramétrées : pour chaque question, ce qu'il faut savoir, la méthode, et la correction rédigée comme dans une copie."
  },
  "archive": {
    "titre": "Livre de la séance 1 (première version)",
    "sousTitre": "Archive — déroulé minuté de la première séance",
    "type": "archive",
    "fichier": "docs/pt/livres/archive-livre-seance1.pdf",
    "source": "docs/pt/sources/archive-livre-seance1.tex",
    "pages": 130,
    "version": "v9",
    "maj": "2026-11-03",
    "description": "Première forme du travail : séance de deux heures découpée en étapes minutées, galerie d'exemples, séries d'entraînement. Remplacée par le livre principal, conservée pour mémoire."
  },
  /* ---- Sélections de 5 problèmes (générées par td/integrer_selection.py) ---- */
  "selection-al": {
    titre: "Sélection — Algèbre linéaire",
    sousTitre: "5 problèmes après le cours : énoncés, indications, corrections",
    type: "selection",
    fichier: "docs/pt/selection/Selection_al.pdf",
    source: "docs/pt/sources/selection/Selection_al.tex",
    pages: 10,
    version: "v1",
    maj: "2026-11-06",
    description: "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
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
    titre: "Sélection — Réduction",
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
  /* ---- TD (générés par td/build_td.py) ---- */
  "td-al": {
    "titre": "TD — Algèbre linéaire",
    "sousTitre": "Chapitre 1 · 22 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_al.pdf",
    "source": "docs/pt/sources/td/TD_al.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livret (fin de chaque partie du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-al-corrections": {
    "titre": "TD — Algèbre linéaire : corrections",
    "sousTitre": "Chapitre 1 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_al_corrections.pdf",
    "source": "docs/pt/sources/td/TD_al_corrections.tex",
    "pages": 8,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 22 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-ed": {
    "titre": "TD — Équations différentielles",
    "sousTitre": "Chapitre 4 · 17 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_ed.pdf",
    "source": "docs/pt/sources/td/TD_ed.tex",
    "pages": 7,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livret (fin de chaque partie du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-ed-corrections": {
    "titre": "TD — Équations différentielles : corrections",
    "sousTitre": "Chapitre 4 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_ed_corrections.pdf",
    "source": "docs/pt/sources/td/TD_ed_corrections.tex",
    "pages": 5,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 17 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-red": {
    "titre": "TD — Réduction",
    "sousTitre": "Chapitre 3 · 24 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_red.pdf",
    "source": "docs/pt/sources/td/TD_red.tex",
    "pages": 10,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livret (fin de chaque partie du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-red-corrections": {
    "titre": "TD — Réduction : corrections",
    "sousTitre": "Chapitre 3 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_red_corrections.pdf",
    "source": "docs/pt/sources/td/TD_red_corrections.tex",
    "pages": 8,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 24 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-determinants": {
    "titre": "TD — Déterminants",
    "sousTitre": "Chapitre 2 · 41 exercices · énoncés",
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
    "sousTitre": "Chapitre 2 · corrections détaillées",
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
    "sousTitre": "Chapitre 5 · 32 exercices · énoncés",
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
    "sousTitre": "Chapitre 5 · corrections détaillées",
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
    "sousTitre": "Chapitre 6 · 24 exercices · énoncés",
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
    "sousTitre": "Chapitre 6 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_metrique_corrections.pdf",
    "source": "docs/pt/sources/td/TD_metrique_corrections.tex",
    "pages": 11,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 24 exercices du TD, dans le même ordre et avec les mêmes numéros."
  }
};
