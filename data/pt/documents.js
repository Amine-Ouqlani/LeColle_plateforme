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
    "sousTitre": "Tous les cours, dans l'ordre des chapitres 1 à 8",
    "type": "complet",
    "fichier": "docs/pt/livres/livret-complet-PT.pdf",
    "pages": 159,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Les livrets de tous les chapitres réunis en un seul PDF, avec un sommaire et des signets : algèbre linéaire, déterminants, réduction, équations différentielles, courbes paramétrées, propriétés métriques, séries numériques, séries entières. Assemblé automatiquement à partir des livrets individuels (outils/livrets/construire.py)."
  },
  "presentations-pt": {
    "titre": "Présentations complètes PT",
    "sousTitre": "Toutes les présentations (chapitres 1 à 5, 7 et 8)",
    "type": "complet",
    "fichier": "docs/pt/presentations/presentations-completes-PT.pdf",
    "pages": 605,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Les présentations de tous les chapitres réunies en un seul PDF, avec un sommaire et des signets. En séance, on utilise la présentation du chapitre."
  },
  "presentations-pt-statique": {
    "titre": "Présentations complètes PT (sans animations)",
    "sousTitre": "Une page par diapositive, pour réviser ou imprimer",
    "type": "complet",
    "fichier": "docs/pt/presentations/presentations-completes-PT-sans-animations.pdf",
    "pages": 289,
    "version": "v1",
    "maj": "2026-11-26",
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
    "version": "v2",
    "maj": "2026-11-26",
    "description": "Rappels de première année (calcul matriciel, dimension, rang, matrices, changement de base), produit et somme de sous-espaces, projecteurs et symétries, hyperplans, trace, sous-espaces stables, pièges ; en fin de fiche, synthèse « quelle méthode ? » et réflexes avant de rendre."
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
    "version": "v3",
    "maj": "2026-11-26",
    "description": "Définitions, règles de calcul, propriétés globales, géométrie, choix de la méthode selon la forme du déterminant, techniques d'ordre n, pièges ; en fin de fiche, synthèse « quelle méthode ? » et réflexes avant de rendre."
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
    "pages": 17,
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
    "version": "v2",
    "maj": "2026-11-26",
    "description": "Éléments propres, polynôme caractéristique, critères de diagonalisation, applications, trigonalisation, pièges ; synthèse « quelle méthode ? »."
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
    "version": "v2",
    "maj": "2026-11-26",
    "description": "Programme de première année : structure et théorème de Cauchy, premier ordre, second ordre à coefficients constants, pièges ; en fin de fiche, synthèse « quelle méthode ? » et réflexes avant de rendre."
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
    "version": "v3",
    "maj": "2026-11-26",
    "description": "Outils de calcul, tangente et pente, plan d'étude et symétries, points stationnaires et inflexions, branches infinies, points doubles, pièges ; en fin de fiche, synthèse « quelle méthode ? » et check-list de l'étude."
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
    "version": "v2",
    "maj": "2026-11-26",
    "description": "Longueur et abscisse curviligne, repère de Frenet et courbure, rayon et centre de courbure, développée, enveloppes, pièges ; en fin de fiche, synthèse « quelle méthode ? » et réflexes avant de rendre."
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
  /* ---- Chapitre 7 — Séries numériques ---- */
  "livre-series": {
    "titre": "Séries numériques",
    "sousTitre": "Chapitre 7 · livret : cours, méthodes, exercices corrigés",
    "type": "cours",
    "fichier": "docs/pt/livres/livre-series.pdf",
    "source": "docs/pt/sources/livre-series.tex",
    "pages": 20,
    "version": "v1",
    "maj": "2026-11-17",
    "description": "Rappels sur les suites (comparaison, développements limités), séries de référence (géométriques, télescopiques, exponentielle), séries à termes positifs (comparaison, équivalents, comparaison série-intégrale, Riemann, d'Alembert), convergence absolue, séries alternées, produit de Cauchy. Démonstrations, figures et exercices corrigés."
  },
  "presentation-series": {
    "titre": "Présentation — Séries numériques",
    "sousTitre": "Chapitre 7 · Support de trois séances · 5 exercices intégrés",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-series.pdf",
    "source": "docs/pt/sources/presentation-series.tex",
    "pages": 79,
    "version": "v1",
    "maj": "2026-11-17",
    "description": "Les diapositives de la séance, avec 5 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-series-statique": {
    "titre": "Présentation — Séries numériques (sans animations)",
    "sousTitre": "Une page par diapositive",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-series-sans-animations.pdf",
    "source": "docs/pt/sources/presentation-series.tex",
    "pages": 36,
    "version": "v1",
    "maj": "2026-11-17",
    "description": "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-series": {
    "titre": "Fiche de référence — Séries numériques",
    "sousTitre": "Chapitre 7 · imprimable",
    "type": "fiche",
    "fichier": "docs/pt/fiches/fiche-series.pdf",
    "source": "docs/pt/sources/fiche-series.tex",
    "pages": 2,
    "version": "v2",
    "maj": "2026-11-26",
    "description": "Outils sur les suites, séries de référence, théorèmes pour les termes positifs, convergence absolue, séries alternées, produit de Cauchy, pièges ; en fin de fiche, synthèse « quelle méthode ? » et réflexes avant de rendre."
  },
  "bilan-series": {
    "titre": "Exercice bilan — Séries numériques",
    "sousTitre": "Chapitre 7 · 15 min · énoncé, corrigé détaillé, notions évaluées",
    "type": "bilan",
    "fichier": "docs/pt/bilans/bilan-series.pdf",
    "source": "docs/pt/sources/exercices-bilan.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-17",
    "description": "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  /* ---- Chapitre 8 — Séries entières ---- */
  "livre-se": {
    "titre": "Séries entières",
    "sousTitre": "Chapitre 8 · livret : cours, méthodes, exercices corrigés",
    "type": "cours",
    "fichier": "docs/pt/livres/livre-series-entieres.pdf",
    "source": "docs/pt/sources/livre-series-entieres.tex",
    "pages": 21,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Série de Taylor (formule avec reste intégral, exponentielle, cosinus, sinus, ch, sh), rayon de convergence (lemme d'Abel, comparaison, équivalents, d'Alembert), somme et produit de Cauchy, fonction somme (continuité, dérivation et intégration terme à terme), développements usuels, méthodes de développement (opérations, éléments simples, équation différentielle). Démonstrations, figures et exercices corrigés."
  },
  "presentation-se": {
    "titre": "Présentation — Séries entières",
    "sousTitre": "Chapitre 8 · Support de trois séances · 6 exercices intégrés",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-series-entieres.pdf",
    "source": "docs/pt/sources/presentation-series-entieres.tex",
    "pages": 97,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Les diapositives de la séance, avec 6 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)."
  },
  "presentation-se-statique": {
    "titre": "Présentation — Séries entières (sans animations)",
    "sousTitre": "Une page par diapositive",
    "type": "presentation",
    "fichier": "docs/pt/presentations/presentation-series-entieres-sans-animations.pdf",
    "source": "docs/pt/sources/presentation-series-entieres.tex",
    "pages": 43,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "La même présentation, chaque diapositive dans son état final."
  },
  "fiche-se": {
    "titre": "Fiche de référence — Séries entières",
    "sousTitre": "Chapitre 8 · imprimable",
    "type": "fiche",
    "fichier": "docs/pt/fiches/fiche-series-entieres.pdf",
    "source": "docs/pt/sources/fiche-series-entieres.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Série de Taylor, rayon de convergence et son calcul, fonction somme, développements usuels, méthodes de développement, pièges ; en fin de fiche, arbre de décision pour le rayon, synthèse « quelle méthode ? » et réflexes avant de rendre."
  },
  "bilan-se": {
    "titre": "Exercice bilan — Séries entières",
    "sousTitre": "Chapitre 8 · 15 min · énoncé, corrigé détaillé, notions évaluées",
    "type": "bilan",
    "fichier": "docs/pt/bilans/bilan-se.pdf",
    "source": "docs/pt/sources/exercices-bilan.tex",
    "pages": 2,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur."
  },
  /* ---- Autres documents ---- */
  "revision": {
    "titre": "Livret de révision — devoir de courbes",
    "sousTitre": "Diagnostic du DS, une question par page, devoir corrigé",
    "type": "devoir",
    "fichier": "docs/pt/fiches/fiche-revision-ds-courbes.pdf",
    "source": "docs/pt/sources/fiche-revision-ds-courbes.tex",
    "pages": 11,
    "version": "v3",
    "maj": "2026-11-14",
    "description": "Construit à partir du devoir surveillé de courbes paramétrées : le diagnostic, les outils, une correction rapide des questions réussies, puis une page par question non traitée (ce qu'on demande, l'idée, la rédaction)."
  },
  "dl3": {
    "titre": "DL — Bases et familles cycliques",
    "sousTitre": "Retour sur le devoir libre 3 (endomorphismes cycliques) · une question par page",
    "type": "devoir",
    "fichier": "docs/pt/fiches/dl3-bases-familles-cycliques.pdf",
    "source": "docs/pt/sources/dl3-bases-familles-cycliques.tex",
    "pages": 13,
    "version": "v2",
    "maj": "2026-11-17",
    "description": "Les questions du DL 3 qui ont résisté (II.4.a, II.4.b, III.3 à III.6), dans l'ordre du sujet : démontrer qu'une famille est une base, matrice dans une base cyclique, sous-espaces propres. Pour chacune : ce qu'on demande, l'explication, puis la rédaction telle qu'on l'écrit sur la copie. Trois exercices corrigés."
  },
  "eb-al-det-sujet": {
    "titre": "Examen blanc — Algèbre linéaire et déterminants (sujet)",
    "sousTitre": "3 heures · 4 exercices et un problème · noté sur 20",
    "type": "devoir",
    "fichier": "docs/pt/examens/eb-al-det-sujet.pdf",
    "source": "docs/pt/sources/examen-al-determinants.tex",
    "pages": 3,
    "version": "v1",
    "maj": "2026-11-14",
    "description": "Sujet original : familles libres, génératrices et bases dans des situations variées, sous-espaces supplémentaires et projecteur, calculs et propriétés des déterminants, et un problème sur une matrice nilpotente."
  },
  "eb-al-det-corrige": {
    "titre": "Examen blanc — Algèbre linéaire et déterminants (corrigé)",
    "sousTitre": "Corrigé détaillé, choix des méthodes, pièges, grille de diagnostic",
    "type": "devoir",
    "fichier": "docs/pt/examens/eb-al-det-corrige.pdf",
    "source": "docs/pt/sources/examen-al-determinants.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-14",
    "description": "Toutes les questions corrigées, avec pour chacune le choix de la méthode, les erreurs fréquentes, les méthodes alternatives et le lien avec le DL 3. Une grille indique quoi revoir selon les points perdus."
  },
  "ent-red-corrige": {
    "titre": "Entraînement — Réduction : corrigé Le Collé",
    "sousTitre": "Banque PT 2018 et 2015, Mathématiques A, problèmes d'algèbre · corrigé non officiel",
    "type": "devoir",
    "fichier": "docs/pt/examens/ent-red-corrige.pdf",
    "source": "docs/pt/sources/entrainement-reduction.tex",
    "pages": 8,
    "version": "v2",
    "maj": "2026-11-20",
    "description": "Corrigés détaillés, rédigés par Le Collé (non officiels), des problèmes d'algèbre de la Banque PT 2018 (page 1) et 2015 (page 5), Mathématiques A : choix de la méthode, pièges, résultats à retenir, liens avec le DL 3. Calculs vérifiés par calcul formel."
  },
  "ds3-2025-sujet": {
    "titre": "Sujet de l'année dernière — DS 3 (1er décembre 2025)",
    "sousTitre": "Énoncé · sous-espaces stables, constante d'Apéry",
    "type": "devoir",
    "fichier": "docs/pt/examens/ds3-2025-sujet.pdf",
    "source": "docs/pt/examens/ds3-2025-sujet.pdf",
    "pages": 3,
    "version": "v1",
    "maj": "2026-11-25",
    "description": "Le devoir surveillé n° 3 de la classe, l'an dernier (lundi 1er décembre 2025). Exercice 1 : plans et droites stables d'un endomorphisme de R³. Exercice 2 : ζ(3), séries, intégrales généralisées, équation différentielle et séries entières."
  },
  "ds3-2025-corrige": {
    "titre": "Sujet de l'année dernière — DS 3 : corrigé Le Collé",
    "sousTitre": "Corrigé rédigé comme une copie de concours · non officiel",
    "type": "devoir",
    "fichier": "docs/pt/examens/ds3-2025-corrige.pdf",
    "source": "docs/pt/sources/ds3-2025-corrige.tex",
    "pages": 9,
    "version": "v2",
    "maj": "2026-11-26",
    "description": "Corrigé complet du DS 3 du 1er décembre 2025, rédigé par Le Collé (non officiel) : Exercice 1 page 1, Exercice 2 page 5. Rédaction de copie, sans commentaires de méthode."
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
    "titre": "Sélection — Algèbre linéaire",
    "sousTitre": "5 problèmes après le cours : énoncés, indications, corrections",
    "type": "selection",
    "fichier": "docs/pt/selection/Selection_al.pdf",
    "source": "docs/pt/sources/selection/Selection_al.tex",
    "pages": 10,
    "version": "v1",
    "maj": "2026-11-06",
    "description": "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-determinants": {
    "titre": "Sélection — Déterminants",
    "sousTitre": "5 problèmes après le cours : énoncés, indications, corrections",
    "type": "selection",
    "fichier": "docs/pt/selection/Selection_determinants.pdf",
    "source": "docs/pt/sources/selection/Selection_determinants.tex",
    "pages": 13,
    "version": "v1",
    "maj": "2026-11-06",
    "description": "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-red": {
    "titre": "Sélection — Réduction",
    "sousTitre": "5 problèmes après le cours : énoncés, indications, corrections",
    "type": "selection",
    "fichier": "docs/pt/selection/Selection_red.pdf",
    "source": "docs/pt/sources/selection/Selection_red.tex",
    "pages": 11,
    "version": "v1",
    "maj": "2026-11-06",
    "description": "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-ed": {
    "titre": "Sélection — Équations différentielles",
    "sousTitre": "5 problèmes après le cours : énoncés, indications, corrections",
    "type": "selection",
    "fichier": "docs/pt/selection/Selection_ed.pdf",
    "source": "docs/pt/sources/selection/Selection_ed.tex",
    "pages": 10,
    "version": "v1",
    "maj": "2026-11-06",
    "description": "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-courbes": {
    "titre": "Sélection — Courbes paramétrées",
    "sousTitre": "5 problèmes après le cours : énoncés, indications, corrections",
    "type": "selection",
    "fichier": "docs/pt/selection/Selection_courbes.pdf",
    "source": "docs/pt/sources/selection/Selection_courbes.tex",
    "pages": 15,
    "version": "v1",
    "maj": "2026-11-06",
    "description": "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-metrique": {
    "titre": "Sélection — Propriétés métriques des courbes",
    "sousTitre": "5 problèmes après le cours : énoncés, indications, corrections",
    "type": "selection",
    "fichier": "docs/pt/selection/Selection_metrique.pdf",
    "source": "docs/pt/sources/selection/Selection_metrique.tex",
    "pages": 11,
    "version": "v1",
    "maj": "2026-11-06",
    "description": "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-series": {
    "titre": "Sélection — Séries numériques",
    "sousTitre": "5 problèmes après le cours : énoncés, indications, corrections",
    "type": "selection",
    "fichier": "docs/pt/selection/Selection_series.pdf",
    "source": "docs/pt/sources/selection/Selection_series.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-06",
    "description": "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
  },
  "selection-se": {
    "titre": "Sélection — Séries entières",
    "sousTitre": "5 problèmes après le cours : énoncés, indications, corrections",
    "type": "selection",
    "fichier": "docs/pt/selection/Selection_se.pdf",
    "source": "docs/pt/sources/selection/Selection_se.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées."
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
  },
  "td-series": {
    "titre": "TD — Séries numériques",
    "sousTitre": "Chapitre 7 · 25 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_series.pdf",
    "source": "docs/pt/sources/td/TD_series.tex",
    "pages": 9,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Tous les exercices du livret (fin de chaque partie du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-series-corrections": {
    "titre": "TD — Séries numériques : corrections",
    "sousTitre": "Chapitre 7 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_series_corrections.pdf",
    "source": "docs/pt/sources/td/TD_series_corrections.tex",
    "pages": 8,
    "version": "v1",
    "maj": "2026-11-07",
    "description": "Les corrections détaillées des 25 exercices du TD, dans le même ordre et avec les mêmes numéros."
  },
  "td-se": {
    "titre": "TD — Séries entières",
    "sousTitre": "Chapitre 8 · 33 exercices · énoncés",
    "type": "td",
    "fichier": "docs/pt/td/TD_se.pdf",
    "source": "docs/pt/sources/td/TD_se.tex",
    "pages": 12,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Tous les exercices du livret (fin de chaque partie du cours) et tous les exercices du TD de la classe, en quatre parties de difficulté croissante. Sans les corrections."
  },
  "td-se-corrections": {
    "titre": "TD — Séries entières : corrections",
    "sousTitre": "Chapitre 8 · corrections détaillées",
    "type": "td",
    "fichier": "docs/pt/td/TD_se_corrections.pdf",
    "source": "docs/pt/sources/td/TD_se_corrections.tex",
    "pages": 13,
    "version": "v1",
    "maj": "2026-11-26",
    "description": "Les corrections détaillées des 33 exercices du TD, dans le même ordre et avec les mêmes numéros."
  }
};
