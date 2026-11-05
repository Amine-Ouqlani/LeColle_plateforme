/* =====================================================================
   Le Collé — chapitres
   Chaque chapitre déclare ses ressources par référence aux documents
   (data/documents.js). Les numéros de page sont ceux du PDF.
   Pour ajouter un chapitre : copier un bloc, changer l'id, puis ajouter
   ses exercices (data/exercices.js) et ses annales (data/annales.js).
   ===================================================================== */
window.LC = window.LC || {};

LC.chapitres = [
  {
    id: "determinants",
    num: 1,
    titre: "Déterminants",
    accroche: "Une famille de n vecteurs est-elle une base ? Le déterminant répond par un nombre : un volume orienté, nul exactement quand les vecteurs sont liés.",
    statut: "complet",
    prerequis: [
      "Calcul matriciel : produit, transposée, inverse d'une matrice 2×2.",
      "Familles libres, bases, dimension ; matrice d'un endomorphisme dans une base.",
      "Produit vectoriel et produit scalaire dans l'espace (pour la géométrie).",
      "Suites récurrentes linéaires d'ordre 2 (rappelées dans la fiche §1.6)."
    ],
    cours: {
      doc: "livre",
      debut: 4, fin: 13,
      sections: [
        { num: "1.1", titre: "Dimensions 2 et 3 : aire et volume orientés", page: 4 },
        { num: "1.2", titre: "Le déterminant d'ordre n : définition, règles de calcul", page: 5 },
        { num: "1.3", titre: "Propriétés globales : produit, inverse, endomorphismes", page: 7 },
        { num: "1.4", titre: "Géométrie : alignement, coplanarité, distances", page: 8 },
        { num: "1.5", titre: "Techniques de calcul d'ordre n", page: 9 }
      ],
      corriges: { debut: 25, fin: 33 }
    },
    fiche: {
      doc: "fiche", debut: 1, fin: 3,
      sections: [
        { num: "1.1", titre: "Dimensions 2 et 3", page: 1 },
        { num: "1.2", titre: "Définition et règles de calcul", page: 1 },
        { num: "1.3", titre: "Propriétés globales, endomorphismes", page: 2 },
        { num: "1.4", titre: "Géométrie", page: 2 },
        { num: "1.5", titre: "Quelle méthode pour quel déterminant ?", page: 2 },
        { num: "1.6", titre: "Techniques d'ordre n", page: 2 },
        { num: "1.7", titre: "Résultats des TD", page: 3 }
      ]
    },
    presentation: {
      doc: "presentation", debut: 4, fin: 111,
      statique: { doc: "presentationStatique", debut: 4, fin: 47 },
      sections: [
        { num: "1.1", titre: "Dimensions 2 et 3", page: 5, pageStatique: 5 },
        { num: "1.2", titre: "Définition et règles de calcul", page: 20, pageStatique: 11 },
        { num: "1.3", titre: "Propriétés globales, endomorphismes", page: 43, pageStatique: 21 },
        { num: "1.4", titre: "Géométrie", page: 62, pageStatique: 28 },
        { num: "1.5", titre: "Quelle méthode pour quel déterminant ?", page: 71, pageStatique: 32 },
        { num: "1.6", titre: "Techniques d'ordre n", page: 73, pageStatique: 34 }
      ]
    },
    erreurs: [
      "Écrire $\\det(A+B)=\\det A+\\det B$ ou $\\det(\\lambda A)=\\lambda\\det A$ : c'est $\\lambda^n\\det A$.",
      "Faire $C_i\\leftarrow 2C_i+C_j$ en croyant le déterminant inchangé : il est multiplié par $2$.",
      "Enchaîner des opérations en oubliant que chacune agit sur la matrice déjà modifiée.",
      "Oublier le signe $(-1)^{i+j}$ du développement, en particulier sur l'anti-diagonale (déterminants en X).",
      "Développer brutalement un déterminant à paramètre au lieu de sortir les facteurs dès qu'ils apparaissent.",
      "Calculer le déterminant d'un endomorphisme géométrique dans la base canonique au lieu d'une base adaptée.",
      "Polynôme en $x$ : oublier la racine supplémentaire quand une puissance manque, ou le cas des racines non distinctes."
    ],
    flash: [
      { q: "Que vaut $\\det(-A)$ pour $A\\in\\mathcal M_5(\\R)$ ?", r: "$(-1)^5\\det A=-\\det A$ : on sort $-1$ de chacune des 5 colonnes." },
      { q: "Pourquoi une matrice à deux colonnes égales a-t-elle un déterminant nul ?", r: "Échanger ces deux colonnes ne change pas la matrice mais change le signe (antisymétrie) : $\\det A=-\\det A$." },
      { q: "Le déterminant d'ordre $n$ à diagonale $a$ et autres coefficients $b$ ?", r: "$D_n(a,b)=\\big(a+(n-1)b\\big)(a-b)^{n-1}$ (somme constante sur les lignes)." },
      { q: "Tridiagonal (diagonale $a$, sur-diagonale $b$, sous-diagonale $c$) : quelle récurrence ?", r: "$T_n=aT_{n-1}-bc\\,T_{n-2}$ ; seul le produit $bc$ compte." },
      { q: "$\\det$ d'une symétrie $s$ de $\\R^3$ par rapport à un plan ?", r: "$-1$ : dans une base adaptée, $\\mathrm{Mat}\\,s=\\mathrm{diag}(1,1,-1)$." },
      { q: "$A\\in\\mathcal M_n(\\R)$ vérifie $A^2=-I_n$. Que dire de $n$ ?", r: "$(\\det A)^2=(-1)^n\\geq0$ donc $n$ est pair." }
    ]
  },
  {
    id: "courbes",
    num: 2,
    titre: "Courbes paramétrées planes",
    accroche: "Décrire une courbe par un point mobile M(t) : tangentes, points stationnaires, branches infinies, inflexions, tracé complet.",
    statut: "complet",
    prerequis: [
      "Dérivation, limites et développements limités usuels (rappelés dans la fiche §2.1).",
      "Trigonométrie : formules d'addition, de duplication, angle moitié.",
      "Déterminant de deux vecteurs du plan (chapitre 1, §1.1).",
      "Équation d'une droite, distance d'un point à une droite."
    ],
    cours: {
      doc: "livre",
      debut: 14, fin: 24,
      sections: [
        { num: "2.1", titre: "Représentation paramétrique, fonctions vectorielles", page: 14 },
        { num: "2.2", titre: "Tangente en un point régulier", page: 14 },
        { num: "2.3", titre: "Plan d'étude et réduction", page: 15 },
        { num: "2.4", titre: "Points stationnaires, étude locale, inflexions", page: 17 },
        { num: "2.5", titre: "Branches infinies, position", page: 20 },
        { num: "2.6", titre: "Synthèse : une courbe de Lissajous", page: 22 },
        { num: "2.7", titre: "Fiche : réussir l'étude d'une courbe", page: 23 },
        { num: "2.8", titre: "Problème type devoir surveillé", page: 23 }
      ],
      corriges: { debut: 33, fin: 45 }
    },
    fiche: {
      doc: "fiche", debut: 4, fin: 6,
      sections: [
        { num: "2.1", titre: "Fonctions vectorielles, outils de calcul", page: 4 },
        { num: "2.2", titre: "Tangente, pente", page: 4 },
        { num: "2.3", titre: "Plan d'étude, symétries, tracé", page: 5 },
        { num: "2.4", titre: "Points stationnaires, étude locale, inflexions", page: 5 },
        { num: "2.5", titre: "Branches infinies, positions", page: 6 },
        { num: "2.6", titre: "Intersections, points doubles", page: 6 },
        { num: "2.7", titre: "Check-list et résultats des TD", page: 6 }
      ]
    },
    presentation: {
      doc: "presentation", debut: 112, fin: 207,
      statique: { doc: "presentationStatique", debut: 48, fin: 87 },
      sections: [
        { num: "2.1", titre: "Fonctions vectorielles, outils de calcul", page: 113, pageStatique: 49 },
        { num: "2.2", titre: "Tangente, pente", page: 123, pageStatique: 54 },
        { num: "2.3", titre: "Plan d'étude, symétries, tracé", page: 135, pageStatique: 59 },
        { num: "2.4", titre: "Points stationnaires, étude locale, inflexions", page: 146, pageStatique: 64 },
        { num: "2.5", titre: "Branches infinies, positions", page: 169, pageStatique: 73 },
        { num: "2.6", titre: "Intersections, points doubles", page: 184, pageStatique: 79 },
        { num: "2.7", titre: "Check-list et résultats des TD", page: 203, pageStatique: 85 }
      ]
    },
    revision: {
      doc: "revision",
      sections: [
        { titre: "Diagnostic du devoir", page: 1 },
        { titre: "Outils de calcul indispensables", page: 2 },
        { titre: "Étude générale, tangentes, pente", page: 2 },
        { titre: "Point stationnaire : nature, tangente, position", page: 3 },
        { titre: "Position globale par rapport à une droite", page: 4 },
        { titre: "Branches infinies et asymptotes", page: 5 },
        { titre: "Courbe asymptote (hors programme)", page: 6 },
        { titre: "Points d'inflexion", page: 7 },
        { titre: "Le dessin", page: 8 },
        { titre: "Pièges récapitulatifs et priorités", page: 9 }
      ]
    },
    erreurs: [
      "« $x'(t_0)=0$ donc tangente verticale » : faux si $y'(t_0)=0$ aussi (point stationnaire).",
      "Confondre $\\frac yx$ (pente de la droite $(OM)$) et $\\frac{y'}{x'}$ (pente de la tangente).",
      "Conclure à une asymptote avec $\\lim\\frac yx=\\alpha$ seul : il faut aussi $\\lim(y-\\alpha x)$.",
      "Oublier une borne du domaine ou une valeur interdite dans l'étude des branches infinies.",
      "Arrêter un développement limité avant le premier vecteur non colinéaire au premier (ou compter un terme colinéaire).",
      "Chercher les inflexions avec $f''=\\vec 0$ : c'est la colinéarité de $f'$ et $f''$, avec changement de signe de $\\det(f',f'')$, qui compte.",
      "Élever au carré pour résoudre une intersection sans vérifier les signes à la fin.",
      "Confondre tangente horizontale et verticale (erreur relevée par le jury de la Banque PT 2024)."
    ],
    flash: [
      { q: "Tangente en un point régulier $M(t_0)$ : équation ?", r: "$\\det\\big(\\overrightarrow{M(t_0)M},f'(t_0)\\big)=0$, soit $y'_0(x-x_0)-x'_0(y-y_0)=0$." },
      { q: "$f(t_0+h)=f(t_0)+h^2\\vec a+h^3\\vec b+o(h^3)$ avec $\\det(\\vec a,\\vec b)\\neq0$ : nature du point ?", r: "$p=2$, $q=3$ : rebroussement de première espèce, tangente dirigée par $\\vec a$." },
      { q: "Quelle quantité gouverne la concavité d'une courbe paramétrée ?", r: "Le signe de $\\det(f',f'')$ : si $x'\\neq0$, $g''(x(t))=\\frac{\\det(f',f'')}{x'^3}$." },
      { q: "$x\\to+\\infty$, $y\\to+\\infty$, $\\frac yx\\to2$, $y-2x\\to+\\infty$ : nature de la branche ?", r: "Branche parabolique de direction $y=2x$." },
      { q: "$f(-t)=(x(t),-y(t))$ : quelle symétrie, quel intervalle d'étude ?", r: "Symétrie d'axe $(Ox)$ ; on étudie sur $t\\geq0$ et l'on complète par symétrie." },
      { q: "Comment factoriser $\\cos t-\\cos 2t$ ?", r: "Angle moitié : $\\cos t-\\cos2t=2\\sin\\frac t2\\sin\\frac{3t}2$." }
    ]
  },
  {
    id: "metrique",
    num: 3,
    titre: "Propriétés métriques et enveloppes",
    accroche: "Longueur, abscisse curviligne, repère de Frenet, courbure, développée, et enveloppe d'une famille de droites.",
    statut: "partiel",
    manque: "Pas encore de fiche de référence ni de présentation pour ce chapitre : le volume 2 en tient lieu.",
    prerequis: [
      "Tout le chapitre 2 (tangente, $\\det(f',f'')$, factorisation par l'angle moitié).",
      "Intégrales : primitives usuelles, $\\int|\\cdot|$ sur un intervalle où le signe est connu.",
      "Résolution d'un système linéaire $2\\times2$ (formules de Cramer)."
    ],
    cours: {
      doc: "volume2",
      debut: 4, fin: 9,
      sections: [
        { num: "1.1", titre: "Longueur et abscisse curviligne", page: 4 },
        { num: "1.2", titre: "Repère de Frenet et courbure", page: 5 },
        { num: "1.3", titre: "Rayon, centre et cercle de courbure ; développée", page: 6 },
        { num: "2.1", titre: "Enveloppe d'une famille de droites : définition et calcul", page: 8 },
        { num: "2.2", titre: "La développée, enveloppe des normales", page: 9 }
      ],
      corriges: { debut: 10, fin: 12 }
    },
    erreurs: [
      "Calculer une longueur sans s'assurer du signe sous la valeur absolue : $\\|f'\\|=\\sqrt{x'^2+y'^2}$ doit être simplifiée sur un intervalle où le signe est connu.",
      "Confondre la courbure $\\gamma$ (signée) et le rayon $R=\\frac1{|\\gamma|}$.",
      "Enveloppe : oublier de dériver l'équation de la droite par rapport au paramètre (le système a deux équations).",
      "Développée : prendre $\\vec N$ dans le mauvais sens ; utiliser $I=M+\\frac1\\gamma\\vec N$ avec $\\gamma$ signée."
    ],
    flash: [
      { q: "Longueur d'un arc $t\\in[a,b]$ ?", r: "$L=\\int_a^b\\|f'(t)\\|\\,dt$." },
      { q: "Courbure en fonction de $f'$ et $f''$ ?", r: "$\\gamma=\\frac{\\det(f',f'')}{\\|f'\\|^3}$ (formule hors programme, mais classique)." },
      { q: "Enveloppe de $a(t)x+b(t)y=c(t)$ : quel système résoudre ?", r: "$a x+b y=c$ et $a'x+b'y=c'$, système $2\\times2$ en $(x,y)$." },
      { q: "La développée est l'enveloppe de quelles droites ?", r: "Des normales à la courbe." }
    ]
  }
];

/* Documents transversaux affichés dans « Ressources » */
LC.transversal = ["fiche", "presentation", "presentationStatique", "revision", "archive"];

/* Chronologie du travail (onglet « Parcours ») */
LC.parcours = [
  { date: "2 novembre 2026", titre: "Séance 1 — livre de séance", texte: "Première séance de deux heures : l'essentiel des déterminants et les premiers outils des courbes, découpés en étapes minutées. Neuf versions successives ; la dernière est conservée en archive.", docs: ["archive"] },
  { date: "3 novembre 2026", titre: "Livre « Cours, TD et devoir »", texte: "Réécriture calée sur le cours reçu en classe : les deux feuilles de TD intégralement corrigées, chacune après les notions qu'elle demande, et un problème type devoir surveillé.", docs: ["livre"] },
  { date: "4 novembre 2026", titre: "Volume 2 et fiche de révision du devoir", texte: "Les propriétés métriques et les enveloppes passent dans un volume séparé. Fiche personnalisée construite à partir du devoir de courbes paramétrées.", docs: ["volume2", "revision"] },
  { date: "5 novembre 2026", titre: "Fiche de référence et présentation", texte: "Une fiche imprimable pour travailler pendant les séances et réviser, une présentation pour expliquer, avec les mêmes numéros de parties et les mêmes notations.", docs: ["fiche", "presentation"] },
  { date: "5 novembre 2026", titre: "Plateforme et annales", texte: "Regroupement de tout le travail, et sélection commentée d'annales de la Banque PT (Mathématiques B, 2014–2024) qui portent sur nos chapitres, avec corrections détaillées.", docs: [] }
];
