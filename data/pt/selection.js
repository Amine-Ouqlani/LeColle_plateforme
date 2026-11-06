/* Le Collé PT — sélection de 5 problèmes par chapitre (généré par outils/td/integrer_selection.py) */
window.LC = window.LC || {};
LC.selection = {
 "determinants": {
  "doc": "selection-determinants",
  "problemes": [
   {
    "id": "sel-det-param",
    "num": 1,
    "etape": "Mise en application",
    "titre": "Un déterminant à paramètre, de l'algèbre à la géométrie",
    "difficulte": 2,
    "duree": 30,
    "origine": "Problème original Le Collé",
    "notions": [
     "opérations élémentaires",
     "linéarité",
     "caractérisation des bases",
     "volume",
     "propriétés globales"
    ],
    "objectifs": "Calculer un déterminant sans le développer, puis interpréter le résultat : base, vecteurs coplanaires, volume, $\\det(\\lambda A)$, $\\det(AB)$.",
    "prerequis": [
     "Règles de calcul sur les colonnes",
     "Déterminant d'une matrice triangulaire"
    ],
    "indications": [
     "1. Toutes les lignes ont la même somme : $C_1\\leftarrow C_1+C_2+C_3$, puis factoriser.",
     "2. Une famille de trois vecteurs de $\\R^3$ est une base si et seulement si son déterminant est non nul.",
     "3. Que vaut la colonne $C_1+C_2+C_3$ quand $m=-2$ ? Regarder la somme des coordonnées de chaque vecteur.",
     "4. Volume du parallélépipède $=|\\det|$ ; tétraèdre : un sixième.",
     "5. $\\det(A^T)=\\det A$, $\\det(AB)=\\det A\\det B$, $\\det(\\lambda A)=\\lambda^n\\det A$.",
     "6. Même méthode qu'en 1, avec $n$ colonnes ; puis $L_i\\leftarrow L_i-L_1$."
    ],
    "page": 2,
    "pageIndication": 7,
    "pageCorrige": 9
   },
   {
    "id": "sel-det-tridiag",
    "num": 2,
    "etape": "Méthodes classiques",
    "titre": "Les déterminants tridiagonaux",
    "difficulte": 3,
    "duree": 45,
    "origine": "Livre, exercices 1.13 et 1.14 (TD 3 et TD 7 de la classe), réunis en un problème",
    "notions": [
     "développement selon une ligne",
     "relation de récurrence",
     "suites récurrentes linéaires d'ordre 2",
     "trigonométrie"
    ],
    "objectifs": "Établir et exploiter la relation $T_n=aT_{n-1}-bc T_{n-2}$, dans un cas à racines réelles et dans un cas à racines complexes.",
    "prerequis": [
     "Développement selon une ligne ou une colonne",
     "Suites récurrentes linéaires d'ordre 2",
     "Formules d'addition"
    ],
    "indications": [
     "1. Développer selon la première ligne ; le second mineur obtenu a une première colonne presque nulle.",
     "2.(a) Dessiner la matrice : $\\delta_{i,j-1}=1$ exactement quand $j=i+1$.",
     "2.(b) Équation caractéristique $r^2-5r+6=0$.",
     "3.(a) Le résultat est donné : une récurrence double suffit, avec $\\sin\\big((n+1)\\theta\\big)+\\sin\\big((n-1)\\theta\\big)=2\\sin(n\\theta)\\cos\\theta$.",
     "3.(b) $\\cos\\theta=\\pm1$ : l'équation caractéristique a une racine double.",
     "3.(c) Poser $x=2\\cos\\theta$ et compter les racines obtenues ; le déterminant est un polynôme de degré $n$ en $x$."
    ],
    "page": 3,
    "pageIndication": 7,
    "pageCorrige": 10
   },
   {
    "id": "td-d5",
    "num": 3,
    "etape": "Approfondissement",
    "titre": "Le déterminant de Vandermonde",
    "difficulte": 4,
    "duree": 40,
    "origine": "Livre, exercice 1.12 · TD 5 de la classe · TD complet, exercice 26",
    "notions": [
     "déterminant vu comme polynôme",
     "degré, racines, coefficient dominant",
     "récurrence"
    ],
    "objectifs": "Calculer un déterminant sans le développer, en l'étudiant comme un polynôme ; généraliser par récurrence.",
    "prerequis": [
     "Polynômes : degré, racines, factorisation",
     "Développement selon une colonne"
    ],
    "indications": [
     "1. $x$ n'apparaît que dans la dernière colonne : développer selon elle. Quelles valeurs de $x$ rendent deux colonnes égales ?",
     "2. Le coefficient dominant est le cofacteur de $x^3$ : c'est un Vandermonde d'ordre $3$.",
     "3. Remplacer $a_n$ par une variable $x$ et reprendre exactement le raisonnement des questions 1 et 2."
    ],
    "page": 4,
    "pageIndication": 7,
    "pageCorrige": 11
   },
   {
    "id": "td-d10",
    "num": 4,
    "etape": "Problème de synthèse",
    "titre": "Un déterminant affine : $a$ au-dessus, $b$ au-dessous",
    "difficulte": 5,
    "duree": 50,
    "origine": "Livre, exercice 1.15 · TD 10 de la classe · TD complet, exercice 39",
    "notions": [
     "fonction affine",
     "linéarité par rapport aux colonnes",
     "matrice triangulaire",
     "prolongement par continuité"
    ],
    "objectifs": "Introduire une variable pour rendre le calcul simple, exploiter le degré, puis traiter un cas limite.",
    "prerequis": [
     "Linéarité par rapport aux colonnes",
     "Dérivée et taux d'accroissement"
    ],
    "indications": [
     "1. Retrancher la première colonne de $A_n-xU$ à toutes les autres : $x$ ne reste que dans une colonne.",
     "2. Pour $x=a$ ou $x=b$, la matrice $A_n-xU$ est triangulaire. Une fonction affine est déterminée par deux valeurs.",
     "3. Pour $a$ fixé, $\\det A_n$ est une fonction continue de $b$ : faire tendre $b$ vers $a$ et reconnaître un taux d'accroissement."
    ],
    "page": 5,
    "pageIndication": 7,
    "pageCorrige": 12
   },
   {
    "id": "sel-det-2019",
    "num": 5,
    "etape": "Niveau DS / concours",
    "titre": "Comatrice et inversion de matrices",
    "difficulte": 4,
    "duree": 60,
    "origine": "D'après Banque PT 2019, Mathématiques B, partie II (énoncé adapté par Le Collé)",
    "notions": [
     "développement selon une colonne",
     "comatrice",
     "inverse",
     "déterminant à paramètres"
    ],
    "objectifs": "Démontrer la formule de la comatrice et l'appliquer à une matrice à deux paramètres, comme dans un sujet de concours.",
    "prerequis": [
     "Développement selon une ligne ou une colonne",
     "Déterminant à deux colonnes égales"
    ],
    "indications": [
     "1. Développer selon la première ligne ; contrôler en calculant deux coefficients de $M \\mathrm{com}(M)^T$.",
     "2.(b) Une matrice qui a deux colonnes égales a un déterminant nul ; ses mineurs $A_{i,j}$ sont ceux de $A$.",
     "2.(c) Écrire le coefficient $(i,j)$ de $BA$ et distinguer $j=i$ et $j\\neq i$.",
     "3.(a) $C_1\\leftarrow C_1-C_2$ fait apparaître deux coefficients simples et un zéro.",
     "3.(c) Neuf cofacteurs, puis $A^{-1}=\\frac1{\\det A}\\mathrm{com}(A)^T$ ; contrôler un coefficient du produit."
    ],
    "page": 6,
    "pageIndication": 8,
    "pageCorrige": 12
   }
  ]
 },
 "courbes": {
  "doc": "selection-courbes",
  "problemes": [
   {
    "id": "c-cubique",
    "num": 1,
    "etape": "Mise en application",
    "titre": "Paramétrer une cubique par les droites issues de $O$",
    "difficulte": 2,
    "duree": 30,
    "origine": "Exercice complémentaire · TD complet, exercice 10",
    "notions": [
     "représentation paramétrique",
     "symétrie",
     "point double",
     "tangentes",
     "branches infinies",
     "inflexion"
    ],
    "objectifs": "Passer d'une équation cartésienne à un paramétrage, puis appliquer les outils de base : symétrie, tangentes, point double, branches, inflexion.",
    "prerequis": [
     "Tangente en un point régulier",
     "Déterminant de deux vecteurs"
    ],
    "indications": [
     "1. Si $x\\neq0$, poser $t=\\frac yx$ ; ne pas oublier le point $O$.",
     "2. $x$ est paire et $y$ impaire. Un point double : deux paramètres distincts donnent le même point.",
     "3. Branches : limite de $\\frac yx$. Inflexion : signe de $\\det(f',f'')$."
    ],
    "page": 2,
    "pageIndication": 8,
    "pageCorrige": 10
   },
   {
    "id": "td-c4",
    "num": 2,
    "etape": "Méthodes classiques",
    "titre": "La cardioïde",
    "difficulte": 4,
    "duree": 45,
    "origine": "Livre, exercice 2.3 · TD 4 de la classe · TD complet, exercice 16",
    "notions": [
     "symétrie",
     "angle moitié",
     "tableau de variations conjoint",
     "point stationnaire"
    ],
    "objectifs": "Factoriser des dérivées trigonométriques par l'angle moitié pour en lire le signe, et étudier un point stationnaire.",
    "prerequis": [
     "Formules trigonométriques",
     "Nombres complexes : $e^{ia}\\pm e^{ib}$"
    ],
    "indications": [
     "1. Comparer $f(-t)$ à $f(t)$.",
     "2. $e^{ia}-e^{ib}=e^{i\\frac{a+b}2}\\big(e^{i\\frac{a-b}2}-e^{-i\\frac{a-b}2}\\big)$.",
     "3. $x'$ et $y'$ se factorisent comme en 2 : lire leur signe sur $[0,\\pi]$.",
     "4. $f'(0)=\\ve0$ : développement limité à l'ordre $3$ en $0$, ou dérivées successives.",
     "5. Placer les points remarquables et leurs tangentes, puis compléter par symétrie."
    ],
    "page": 3,
    "pageIndication": 8,
    "pageCorrige": 10
   },
   {
    "id": "td-c8",
    "num": 3,
    "etape": "Approfondissement",
    "titre": "La cubique de Descartes",
    "difficulte": 4,
    "duree": 45,
    "origine": "Livre, exercice 2.8 · TD 8 de la classe · TD complet, exercice 18",
    "notions": [
     "symétrie $t\\mapsto\\frac1t$",
     "tableau de variations",
     "point double",
     "asymptote oblique",
     "position"
    ],
    "objectifs": "Repérer une symétrie non standard, réduire l'étude, puis établir une asymptote oblique et la position de la courbe.",
    "prerequis": [
     "Factorisation de $1+t^3$",
     "Branches infinies"
    ],
    "indications": [
     "1. Calculer $x(1/t)$ et $y(1/t)$ : ils échangent $x$ et $y$.",
     "2. Factoriser $x'$ et $y'$ ; que se passe-t-il en $t=0$ et quand $t\\to\\pm\\infty$ ?",
     "3. Calculer $\\frac yx$, puis $y+x$ ; factoriser $1+t^3=(1+t)(1-t+t^2)$ dès le départ."
    ],
    "page": 4,
    "pageIndication": 8,
    "pageCorrige": 11
   },
   {
    "id": "sel-c-2014",
    "num": 4,
    "etape": "Problème de synthèse",
    "titre": "Une famille de cubiques",
    "difficulte": 4,
    "duree": 60,
    "origine": "D'après Banque PT 2014, Mathématiques B, partie I (énoncé adapté par Le Collé)",
    "notions": [
     "symétrie oblique",
     "tangentes horizontales et verticales",
     "point double",
     "branche parabolique",
     "condition nécessaire et suffisante"
    ],
    "objectifs": "Mener une étude complète guidée comme au concours, puis raisonner sur une famille de courbes dépendant de paramètres.",
    "prerequis": [
     "Tout le chapitre 2, sauf les inflexions"
    ],
    "indications": [
     "1.(a) $x(-t)$ se compare à $y(t)$, et non à $x(t)$.",
     "1.(b) $3t^2\\pm6t-9$ se factorisent ; une tangente verticale exige $x'=0$ et $y'\\neq0$.",
     "1.(c) Écrire $x(t)=x(s)$ et $y(t)=y(s)$ avec $t\\neq s$, diviser par $t-s$, puis retrancher.",
     "1.(d) $\\frac yx$, puis $y-x$.",
     "2. Un point stationnaire est un zéro commun de $x'$ et $y'$ : faire la somme et la différence. Penser à la réciproque."
    ],
    "page": 5,
    "pageIndication": 8,
    "pageCorrige": 12
   },
   {
    "id": "ds-pb",
    "num": 5,
    "etape": "Niveau DS / concours",
    "titre": "Problème de synthèse, type devoir surveillé",
    "difficulte": 5,
    "duree": 90,
    "origine": "Livre, exercice 2.11 · problème type devoir · TD complet, exercice 30",
    "notions": [
     "étude complète",
     "point stationnaire",
     "position globale",
     "asymptotes",
     "courbe asymptote",
     "inflexion"
    ],
    "objectifs": "Enchaîner tous les blocs d'un devoir en temps limité, sans le livre ni la fiche.",
    "prerequis": [
     "Tout le chapitre 2"
    ],
    "indications": [
     "1.(a) Valeurs interdites $-3$ et $0$ : mettre $x'$ et $y'$ au même dénominateur avant de factoriser.",
     "1.(c) La pente vaut $\\frac{y'}{x'}$ en un point régulier ; étudier la fonction $p$.",
     "2.(a) Poser $t=-2+h$ et développer $\\frac1t$ et $\\ln(3+t)$ à l'ordre $3$.",
     "2.(d) Factoriser $\\varphi$ après avoir étudié son signe au voisinage de $-2$.",
     "3. Pour chaque borne, limites de $x$ et $y$, puis $\\frac yx$ et $y-\\alpha x$.",
     "4.(b) Comparer $y(t)$ à $e^{x(t)}-7$ : $e^{x(t)}=(3+t)e^{4/t}$.",
     "5.(a) $f'=\\lambda\\ve g$ donne $f''=\\lambda'\\ve g+\\lambda\\ve g'$."
    ],
    "page": 6,
    "pageIndication": 8,
    "pageCorrige": 13
   }
  ]
 },
 "metrique": {
  "doc": "selection-metrique",
  "problemes": [
   {
    "id": "met-boucle",
    "num": 1,
    "etape": "Mise en application",
    "titre": "Longueur et courbure d'une boucle",
    "difficulte": 3,
    "duree": 30,
    "origine": "Exercice complémentaire · TD complet, exercice 15",
    "notions": [
     "point double",
     "longueur",
     "courbure",
     "rayon de courbure"
    ],
    "objectifs": "Appliquer les formules de la longueur et de la courbure, en cherchant d'abord une écriture simple de $\\|f'\\|$.",
    "prerequis": [
     "Points doubles",
     "$\\gamma=\\frac{\\det(f',f'')}{\\|f'\\|^3}$"
    ],
    "indications": [
     "1. $x(t)=x(s)$ avec $t\\neq s$ impose $s=-t$.",
     "2. Développer $\\|f'(t)\\|^2$ : c'est un carré parfait.",
     "3. $\\gamma=\\frac{\\det(f',f'')}{\\|f'\\|^3}$ ; le signe indique le sens dans lequel la courbe tourne."
    ],
    "page": 2,
    "pageIndication": 7,
    "pageCorrige": 8
   },
   {
    "id": "sel-m-cycloide",
    "num": 2,
    "etape": "Méthodes classiques",
    "titre": "La cycloïde : longueur, repère de Frenet, développée",
    "difficulte": 3,
    "duree": 45,
    "origine": "Livre, volume 2, exercices 1.1 et 1.4, réunis en un problème",
    "notions": [
     "angle moitié",
     "longueur",
     "abscisse curviligne",
     "repère de Frenet",
     "courbure",
     "centre de courbure",
     "développée"
    ],
    "objectifs": "Écrire $f'=v(\\cos\\alpha,\\sin\\alpha)$ pour obtenir d'un coup longueur, repère de Frenet, courbure et centre de courbure.",
    "prerequis": [
     "$1-\\cos t=2\\sin^2\\frac t2$",
     "Définitions du repère de Frenet et de la courbure"
    ],
    "indications": [
     "1. $1-\\cos t=2\\sin^2\\frac t2$ et $\\sin t=2\\sin\\frac t2\\cos\\frac t2$ ; attention au signe de $\\sin\\frac t2$.",
     "2. $\\ve T=(\\cos\\alpha,\\sin\\alpha)$ avec $\\alpha=\\frac\\pi2-\\frac t2$ ; $\\gamma=\\frac{d\\alpha}{ds}=\\frac{\\alpha'(t)}{v}$.",
     "3. $I=M+R\\ve N$ avec $R=\\frac1\\gamma$.",
     "4. Poser $t=u+\\pi$."
    ],
    "page": 3,
    "pageIndication": 7,
    "pageCorrige": 8
   },
   {
    "id": "met-astro-dev",
    "num": 3,
    "etape": "Approfondissement",
    "titre": "Développée de l'astroïde",
    "difficulte": 4,
    "duree": 45,
    "origine": "Exercice complémentaire · TD complet, exercice 23",
    "notions": [
     "repère de Frenet",
     "centre de courbure",
     "développée",
     "similitude"
    ],
    "objectifs": "Calculer un centre de courbure et reconnaître la développée par un changement de repère.",
    "prerequis": [
     "Repère de Frenet, courbure",
     "Formules trigonométriques"
    ],
    "indications": [
     "1. $f'(t)=3\\sin t\\cos t (-\\cos t,\\sin t)$ : sur $\\left]0,\\frac\\pi2\\right[$, le facteur est positif.",
     "2. $I=M+R\\ve N$ ; les deux écritures se comparent avec $\\cos2t=\\cos^2t-\\sin^2t$.",
     "3. Développer $(\\cos t+\\sin t)^3$ ; puis écrire $\\cos t+\\sin t=\\sqrt2\\cos\\left(t-\\frac\\pi4\\right)$."
    ],
    "page": 4,
    "pageIndication": 7,
    "pageCorrige": 9
   },
   {
    "id": "sel-m-ellipse",
    "num": 4,
    "etape": "Problème de synthèse",
    "titre": "L'ellipse : courbure aux sommets et développée",
    "difficulte": 4,
    "duree": 60,
    "origine": "Livre, volume 2, exercices 1.3 et 2.2, réunis en un problème",
    "notions": [
     "angle de la tangente",
     "courbure",
     "normale",
     "enveloppe",
     "développée"
    ],
    "objectifs": "Justifier la formule de la courbure, puis obtenir la développée comme enveloppe des normales et vérifier la cohérence des deux points de vue.",
    "prerequis": [
     "Dérivée de $\\arctan$, ou de $\\tan$",
     "Enveloppe d'une famille de droites"
    ],
    "indications": [
     "1. Dériver $\\tan\\alpha=\\frac{y'}{x'}$ ; puis $\\gamma=\\frac{d\\alpha}{ds}$ avec $\\frac{ds}{dt}=\\|f'\\|$.",
     "2. Sommets : $t\\in\\left\\{0,\\frac\\pi2,\\pi,\\frac{3\\pi}2\\right\\}$.",
     "3. La normale passe par $M(t)$ et est orthogonale à $f'(t)$.",
     "4. Dériver l'équation de la normale par rapport à $t$ et résoudre le système $2\\times2$.",
     "5. Le centre de courbure en un sommet est le point de la développée de même paramètre."
    ],
    "page": 5,
    "pageIndication": 7,
    "pageCorrige": 9
   },
   {
    "id": "sel-m-2021",
    "num": 5,
    "etape": "Niveau DS / concours",
    "titre": "La deltoïde",
    "difficulte": 5,
    "duree": 75,
    "origine": "D'après Banque PT 2021, Mathématiques B, partie II (énoncé adapté par Le Collé)",
    "notions": [
     "affixe complexe",
     "symétries",
     "angle moitié",
     "rebroussement",
     "longueur",
     "centre de courbure",
     "développée",
     "similitude"
    ],
    "objectifs": "Réunir les chapitres 2 et 3 sur une courbe de concours : symétries, point stationnaire, longueur, développée.",
    "prerequis": [
     "Tout le chapitre 2",
     "Longueur, repère de Frenet, centre de courbure"
    ],
    "indications": [
     "1. Partir de $\\cos a\\cos b$, $\\sin a\\sin b$ et $\\sin a\\cos b$, avec $a=\\frac{p+q}2$, $b=\\frac{p-q}2$.",
     "2.(b) $e^{-4i\\pi/3}=e^{2i\\pi/3}e^{-2i\\pi}$.",
     "2.(c) Utiliser les formules de la question 1.",
     "2.(e) $f''(0)$ et $f'''(0)$, puis le théorème $(p,q)$.",
     "2.(f) $\\|f'\\|=4\\big|\\sin\\frac{3t}2\\big|$ ; intégrer sur un tiers de la courbe.",
     "3.(a) $f'=4\\sin\\frac{3t}2\\left(-\\cos\\frac t2,\\sin\\frac t2\\right)$ ; $\\alpha=\\pi-\\frac t2$.",
     "3.(b) Calculer $I\\big(t+\\frac\\pi3\\big)$ en affixes et factoriser $3e^{i\\pi/3}$."
    ],
    "page": 6,
    "pageIndication": 7,
    "pageCorrige": 10
   }
  ]
 }
};
