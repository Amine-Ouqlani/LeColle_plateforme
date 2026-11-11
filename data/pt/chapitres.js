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
    id: "ed",
    num: 1,
    bilan: { doc: "bilan-ed", corrige: 2, duree: 15 },
    titre: "Équations différentielles",
    accroche: "Une solution particulière, plus toutes les solutions sans second membre : premier ordre, second ordre à coefficients constants puis continus, théorème de Cauchy linéaire.",
    statut: "complet",
    td: { doc: "td-ed", corrections: "td-ed-corrections" },
    prerequis: [
      "Dérivation, primitives usuelles, intégration par parties.",
      "Nombres complexes, exponentielle complexe.",
      "Espaces vectoriels : sous-espace, dimension.",
      "Pour le §1.4 : séries entières."
    ],
    cours: {
      doc: "livre-ed",
      debut: 4, fin: 12,
      sections: [
        { num: "1.1", titre: "Vocabulaire et structure des solutions", page: 4 },
        { num: "1.2", titre: "Équations du premier ordre, recollement", page: 6 },
        { num: "1.3", titre: "Second ordre à coefficients constants", page: 7 },
        { num: "1.4", titre: "Second ordre à coefficients continus", page: 9 },
        { num: "1.5", titre: "Quelle méthode ? Synthèse", page: 11 }
      ],
      corriges: { debut: 13, fin: 15 }
    },
    fiche: {
      doc: "fiche-ed", debut: 1, fin: 3,
      sections: [
        { num: "1.1", titre: "Structure et théorème de Cauchy", page: 1 },
        { num: "1.2", titre: "Premier ordre, recollement", page: 1 },
        { num: "1.3", titre: "Second ordre à coefficients constants", page: 2 },
        { num: "1.4", titre: "Second ordre à coefficients continus", page: 2 },
        { num: "1.5", titre: "Quelle méthode ? Pièges", page: 3 },
        { num: "1.6", titre: "Résultats du TD", page: 3 }
      ]
    },
    presentation: {
      doc: "presentation-ed", debut: 1, fin: 86,
      statique: { doc: "presentation-ed-statique", debut: 1, fin: 44 },
      exercices: 7,
      sections: [
        { num: "1.1", titre: "Structure, théorème de Cauchy", page: 5, pageStatique: 5 },
        { num: "1.2", titre: "Premier ordre, recollement", page: 22, pageStatique: 13 },
        { num: "1.3", titre: "Second ordre, coefficients constants", page: 42, pageStatique: 22 },
        { num: "1.4", titre: "Second ordre, coefficients continus", page: 61, pageStatique: 31 },
        { num: "1.5", titre: "Quelle méthode ? Synthèse", page: 83, pageStatique: 41 }
      ]
    },
    erreurs: [
      "Prendre une primitive de $a$ sans avoir normalisé l'équation (diviser par le coefficient de $y'$), ou se tromper de signe dans $Ke^{-A(t)}$.",
      "Chercher une solution particulière $Ce^{mt}$ alors que $m$ est racine de l'équation caractéristique (résonance) : le degré de $Q$ augmente de la multiplicité.",
      "Second membre en $\\sin(\\omega t)$ : prendre la partie réelle au lieu de la partie imaginaire.",
      "Fixer les constantes avec les conditions initiales avant d'avoir ajouté la solution particulière.",
      "Diviser par un coefficient qui s'annule sans le signaler, puis appliquer le théorème de Cauchy en ce point.",
      "Recollement : oublier de vérifier la dérivabilité et l'équation au point de raccord, ou affirmer l'unicité sans preuve.",
      "Série entière : oublier le rayon de convergence, ou croire qu'elle donne toujours toutes les solutions."
    ],
    flash: [
      { q: "Structure de l'ensemble des solutions de $y''+a(t)y'+b(t)y=c(t)$ ?", r: "$S_E=y_p+S_H$, où $S_H$ est un plan vectoriel ($a,b,c$ continues sur un intervalle)." },
      { q: "Solutions de $y'+a(t)y=0$ sur un intervalle ?", r: "$y=Ke^{-A(t)}$, $A$ primitive de $a$." },
      { q: "Variation de la constante au premier ordre : que reste-t-il ?", r: "Avec $y=\\lambda(t)e^{-A(t)}$ : $\\lambda'(t)=b(t)e^{A(t)}$." },
      { q: "$y''-2y'+y=e^t$ : quelle forme pour $y_p$ ?", r: "$1$ est racine double : $y=Q(t)e^t$ avec $Q''=1$, soit $y_p=\\frac{t^2}2e^t$." },
      { q: "Solutions réelles de $y''+2y'+5y=0$ ?", r: "$r=-1\\pm2i$ : $y=e^{-t}(A\\cos2t+B\\sin2t)$." },
      { q: "On connaît une solution $\\varphi$ de $(H)$ qui ne s'annule pas. Que faire ?", r: "Poser $y=\\lambda\\varphi$ : on obtient une équation du premier ordre en $\\lambda'$." },
      { q: "Combien de conditions initiales pour un problème de Cauchy du second ordre ?", r: "Deux : $y(t_0)$ et $y'(t_0)$." }
    ]
  },
  {
    id: "red",
    num: 2,
    bilan: { doc: "bilan-red", corrige: 2, duree: 15 },
    titre: "Algèbre linéaire et réduction",
    accroche: "Sommes directes, sous-espaces stables, trace ; puis éléments propres, polynôme caractéristique, diagonalisation et trigonalisation : choisir la base où la matrice est la plus simple.",
    statut: "complet",
    td: { doc: "td-red", corrections: "td-red-corrections" },
    prerequis: [
      "Bases, dimension, théorème du rang, matrice d'une application linéaire, changement de base.",
      "Le chapitre Déterminants (calcul par opérations élémentaires).",
      "Polynômes : racines, multiplicité, factorisation."
    ],
    cours: {
      doc: "livre-red",
      debut: 4, fin: 17,
      sections: [
        { num: "1.1", titre: "Matrices semblables, sommes directes, trace, hyperplans", page: 4 },
        { num: "1.2", titre: "Sous-espaces stables", page: 7 },
        { num: "1.3", titre: "Éléments propres", page: 8 },
        { num: "1.4", titre: "Polynôme caractéristique", page: 10 },
        { num: "1.5", titre: "Diagonalisation", page: 11 },
        { num: "1.6", titre: "Applications de la diagonalisation", page: 13 },
        { num: "1.7", titre: "Trigonalisation", page: 15 },
        { num: "1.8", titre: "Quelle méthode ? Synthèse", page: 16 }
      ],
      corriges: { debut: 18, fin: 21 }
    },
    fiche: {
      doc: "fiche-red", debut: 1, fin: 3,
      sections: [
        { num: "1.1", titre: "Semblables, sommes directes, trace, hyperplans", page: 1 },
        { num: "1.2", titre: "Sous-espaces stables", page: 1 },
        { num: "1.3", titre: "Éléments propres", page: 1 },
        { num: "1.4", titre: "Polynôme caractéristique", page: 2 },
        { num: "1.5", titre: "Diagonalisation", page: 2 },
        { num: "1.6", titre: "Applications", page: 2 },
        { num: "1.7", titre: "Trigonalisation", page: 2 },
        { num: "1.8", titre: "Quelle méthode ? Pièges ; résultats du TD", page: 3 }
      ]
    },
    presentation: {
      doc: "presentation-red", debut: 1, fin: 95,
      statique: { doc: "presentation-red-statique", debut: 1, fin: 49 },
      exercices: 9,
      sections: [
        { num: "1.1", titre: "Semblables, sommes directes, trace", page: 8, pageStatique: 6 },
        { num: "1.2", titre: "Sous-espaces stables", page: 27, pageStatique: 15 },
        { num: "1.3", titre: "Éléments propres", page: 36, pageStatique: 20 },
        { num: "1.4", titre: "Polynôme caractéristique", page: 47, pageStatique: 25 },
        { num: "1.5", titre: "Diagonalisation", page: 59, pageStatique: 30 },
        { num: "1.6", titre: "Applications", page: 74, pageStatique: 37 },
        { num: "1.7", titre: "Trigonalisation", page: 85, pageStatique: 42 },
        { num: "1.8", titre: "Synthèse", page: 92, pageStatique: 46 }
      ]
    },
    erreurs: [
      "Prendre un vecteur nul comme vecteur propre : un vecteur propre est non nul, même si $E_\\lambda$ contient $0$.",
      "Conclure qu'une somme de trois sous-espaces est directe parce que les intersections deux à deux sont nulles.",
      "Oublier de vérifier que $\\chi_A$ est scindé sur $\\mathbb R$ avant de diagonaliser (rotation).",
      "Croire qu'une valeur propre double empêche la diagonalisation : il faut comparer $\\dim E_\\lambda$ à la multiplicité.",
      "Développer $\\chi_A$ au lieu de le factoriser au fur et à mesure, puis ne plus savoir trouver les racines.",
      "Ranger les vecteurs propres en lignes dans $P$, ou dans un ordre différent de celui des valeurs propres dans $D$.",
      "Écrire $A=P^{-1}DP$ alors que les colonnes de $P$ sont des vecteurs propres : c'est $A=PDP^{-1}$."
    ],
    flash: [
      { q: "Polynôme caractéristique d'une matrice $2\\times2$ ?", r: "$\\chi_A=x^2-\\mathrm{tr}(A)\\,x+\\det A$." },
      { q: "Comment obtenir $\\dim E_\\lambda(A)$ rapidement ?", r: "$\\dim E_\\lambda=n-\\mathrm{rg}(A-\\lambda I_n)$ (théorème du rang)." },
      { q: "Une matrice $n\\times n$ a $n$ valeurs propres distinctes. Conclusion ?", r: "Elle est diagonalisable, et chaque sous-espace propre est une droite." },
      { q: "$\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ est-elle diagonalisable ?", r: "Non : seule valeur propre $1$ ; diagonalisable, elle serait égale à $I_2$." },
      { q: "Valeurs propres d'une matrice de rang $1$ ?", r: "$0$, d'ordre au moins $n-1$, et $\\mathrm{tr}(A)$." },
      { q: "Si $\\chi_A$ est scindé, que valent $\\mathrm{tr}A$ et $\\det A$ ?", r: "La somme et le produit des valeurs propres, comptées avec multiplicité." },
      { q: "$A=PDP^{-1}$ : que vaut $A^k$ ?", r: "$A^k=PD^kP^{-1}$, $D^k$ diagonale des $\\lambda_i^k$." }
    ]
  },
  {
    id: "determinants",
    num: 3,
    bilan: { doc: "bilan-determinants", corrige: 2, duree: 13 },
    titre: "Déterminants",
    accroche: "Une famille de n vecteurs est-elle une base ? Le déterminant répond par un nombre : un volume orienté, nul exactement quand les vecteurs sont liés.",
    statut: "complet",
    td: { doc: "td-determinants", corrections: "td-determinants-corrections" },
    prerequis: [
      "Calcul matriciel : produit, transposée, inverse d'une matrice 2×2.",
      "Familles libres, bases, dimension ; matrice d'un endomorphisme dans une base.",
      "Produit vectoriel et produit scalaire dans l'espace (pour la géométrie).",
      "Suites récurrentes linéaires d'ordre 2 (rappelées dans la fiche §1.6)."
    ],
    cours: {
      doc: "livre-det",
      debut: 4, fin: 12,
      sections: [
        { num: "1.1", titre: "Dimensions 2 et 3 : aire et volume orientés", page: 4 },
        { num: "1.2", titre: "Le déterminant d'ordre n : définition, règles de calcul", page: 5 },
        { num: "1.3", titre: "Propriétés globales : produit, inverse, endomorphismes", page: 7 },
        { num: "1.4", titre: "Géométrie : alignement, coplanarité, distances", page: 8 },
        { num: "1.5", titre: "Techniques de calcul d'ordre n", page: 9 }
      ],
      corriges: { debut: 13, fin: 21 }
    },
    fiche: {
      doc: "fiche-determinants", debut: 1, fin: 3,
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
      doc: "presentation-det", debut: 1, fin: 127,
      statique: { doc: "presentation-det-statique", debut: 1, fin: 56 },
      exercices: 4,
      sections: [
        { num: "1.1", titre: "Dimensions 2 et 3", page: 5, pageStatique: 5 },
        { num: "1.2", titre: "Définition et règles de calcul", page: 20, pageStatique: 11 },
        { num: "1.3", titre: "Propriétés globales, endomorphismes", page: 47, pageStatique: 23 },
        { num: "1.4", titre: "Géométrie", page: 70, pageStatique: 32 },
        { num: "1.5", titre: "Quelle méthode pour quel déterminant ?", page: 82, pageStatique: 38 },
        { num: "1.6", titre: "Techniques d'ordre n", page: 84, pageStatique: 40 }
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
    num: 4,
    bilan: { doc: "bilan-courbes", corrige: 2, duree: 15 },
    titre: "Courbes paramétrées planes",
    accroche: "Décrire une courbe par un point mobile M(t) : tangentes, points stationnaires, branches infinies, inflexions, tracé complet.",
    statut: "complet",
    td: { doc: "td-courbes", corrections: "td-courbes-corrections" },
    prerequis: [
      "Dérivation, limites et développements limités usuels (rappelés dans la fiche §2.1).",
      "Trigonométrie : formules d'addition, de duplication, angle moitié.",
      "Déterminant de deux vecteurs du plan (chapitre 1, §1.1).",
      "Équation d'une droite, distance d'un point à une droite."
    ],
    cours: {
      doc: "livre-courbes",
      debut: 4, fin: 14,
      sections: [
        { num: "2.1", titre: "Représentation paramétrique, fonctions vectorielles", page: 4 },
        { num: "2.2", titre: "Tangente en un point régulier", page: 4 },
        { num: "2.3", titre: "Plan d'étude et réduction", page: 5 },
        { num: "2.4", titre: "Points stationnaires, étude locale, inflexions", page: 7 },
        { num: "2.5", titre: "Branches infinies, position", page: 10 },
        { num: "2.6", titre: "Synthèse : une courbe de Lissajous", page: 12 },
        { num: "2.7", titre: "Fiche : réussir l'étude d'une courbe", page: 13 },
        { num: "2.8", titre: "Problème type devoir surveillé", page: 13 }
      ],
      corriges: { debut: 15, fin: 24 }
    },
    fiche: {
      doc: "fiche-courbes", debut: 1, fin: 3,
      sections: [
        { num: "2.1", titre: "Fonctions vectorielles, outils de calcul", page: 1 },
        { num: "2.2", titre: "Tangente, pente", page: 1 },
        { num: "2.3", titre: "Plan d'étude, symétries, tracé", page: 2 },
        { num: "2.4", titre: "Points stationnaires, étude locale, inflexions", page: 2 },
        { num: "2.5", titre: "Branches infinies, positions", page: 3 },
        { num: "2.6", titre: "Intersections, points doubles", page: 3 },
        { num: "2.7", titre: "Check-list et résultats des TD", page: 3 }
      ]
    },
    presentation: {
      doc: "presentation-courbes", debut: 1, fin: 114,
      statique: { doc: "presentation-courbes-statique", debut: 1, fin: 51 },
      exercices: 4,
      sections: [
        { num: "2.1", titre: "Fonctions vectorielles, outils de calcul", page: 5, pageStatique: 5 },
        { num: "2.2", titre: "Tangente, pente", page: 15, pageStatique: 10 },
        { num: "2.3", titre: "Plan d'étude, symétries, tracé", page: 30, pageStatique: 17 },
        { num: "2.4", titre: "Points stationnaires, étude locale, inflexions", page: 44, pageStatique: 24 },
        { num: "2.5", titre: "Branches infinies, positions", page: 72, pageStatique: 35 },
        { num: "2.6", titre: "Intersections, points doubles", page: 91, pageStatique: 43 },
        { num: "2.7", titre: "Check-list et résultats des TD", page: 110, pageStatique: 49 }
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
    num: 5,
    bilan: { doc: "bilan-metrique", corrige: 2, duree: 13 },
    titre: "Propriétés métriques et enveloppes",
    accroche: "Longueur, abscisse curviligne, repère de Frenet, courbure, développée, et enveloppe d'une famille de droites.",
    statut: "partiel",
    td: { doc: "td-metrique", corrections: "td-metrique-corrections" },
    manque: "Pas encore de fiche de référence ni de présentation pour ce chapitre : le livret en tient lieu.",
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
      corriges: { debut: 10, fin: 13 },
      index: 14
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
LC.transversal = ["livret-pt", "presentations-pt", "presentations-pt-statique", "revision", "archive"];

/* Chronologie du travail (onglet « Parcours ») */
LC.parcours = [
  { date: "2 novembre 2026", titre: "Séance 1 — livre de séance", texte: "Première séance de deux heures : l'essentiel des déterminants et les premiers outils des courbes, découpés en étapes minutées. Neuf versions successives ; la dernière est conservée en archive.", docs: ["archive"] },
  { date: "3 novembre 2026", titre: "Livre « Cours, TD et devoir »", texte: "Réécriture calée sur le cours reçu en classe : les deux feuilles de TD intégralement corrigées, chacune après les notions qu'elle demande, et un problème type devoir surveillé.", docs: ["livre-det", "livre-courbes"] },
  { date: "4 novembre 2026", titre: "Volume 2 et fiche de révision du devoir", texte: "Les propriétés métriques et les enveloppes passent dans un volume séparé. Fiche personnalisée construite à partir du devoir de courbes paramétrées.", docs: ["volume2", "revision"] },
  { date: "5 novembre 2026", titre: "Fiche de référence et présentation", texte: "Une fiche imprimable pour travailler pendant les séances et réviser, une présentation pour expliquer, avec les mêmes numéros de parties et les mêmes notations.", docs: ["fiche-determinants", "fiche-courbes", "presentation-det", "presentation-courbes"] },
  { date: "5 novembre 2026", titre: "Plateforme et annales", texte: "Regroupement de tout le travail, et sélection commentée d'annales de la Banque PT (Mathématiques B, 2014–2024) qui portent sur nos chapitres, avec corrections détaillées.", docs: [] },
  { date: "7 novembre 2026", titre: "Deux nouveaux chapitres, présentations avec exercices", texte: "Équations différentielles et Algèbre linéaire et réduction : livre, présentation avec exercices intégrés, fiche, cinq problèmes, TD et corrections. Les présentations des Déterminants et des Courbes reçoivent huit exercices en séance.", docs: ["livre-ed", "livre-red", "presentation-ed", "presentation-red"] },
  { date: "7 novembre 2026", titre: "Un livret et une présentation par chapitre, et les documents complets", texte: "Le livre « Déterminants, courbes » et sa présentation sont séparés par chapitre. Le livret complet PT et les présentations complètes PT sont assemblés automatiquement à partir des documents de chaque chapitre.", docs: ["livret-pt", "presentations-pt"] }
];
