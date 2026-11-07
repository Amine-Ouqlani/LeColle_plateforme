/* Le Collé PT — sélection de 5 problèmes par chapitre (généré par outils/td/integrer_selection.py) */
window.LC = window.LC || {};
LC.selection = {
 "ed": {
  "doc": "selection-ed",
  "problemes": [
   {
    "id": "sel-ed-regimes",
    "num": 1,
    "etape": "Mise en application",
    "titre": "Régime transitoire et régime permanent",
    "difficulte": 2,
    "duree": 35,
    "origine": "Problème original Le Collé",
    "notions": [
     "premier ordre",
     "équation caractéristique",
     "passage aux complexes",
     "solution périodique",
     "comportement en $+\\infty$"
    ],
    "objectifs": "Résoudre des équations à coefficients constants, puis interpréter la structure « solution particulière + solution homogène » en termes de régimes.",
    "prerequis": [
     "Résolution du premier ordre",
     "Théorème sur l'équation caractéristique",
     "Écriture $a\\cos t+b\\sin t=A\\cos(t-\\varphi)$"
    ],
    "indications": [
     "1. Résoudre $z'+z=e^{it}$, puis prendre la partie réelle.",
     "2. Si $K\\neq0$, la fonction $Ke^{-t}$ est strictement monotone : peut-elle être périodique ?",
     "4. Discuter le signe de $\\lambda^2-1$ ; pour $\\lambda>1$, regarder la somme et le produit des racines.",
     "5. Toutes les exponentielles ont une partie réelle strictement négative.",
     "6. $i^2+i+1=i$ : $z=\\frac{e^{it}}i$."
    ],
    "page": 2,
    "pageIndication": 7,
    "pageCorrige": 8
   },
   {
    "id": "ed-poly",
    "num": 2,
    "etape": "Méthodes classiques",
    "titre": "Solution polynomiale et changement de variable",
    "difficulte": 2,
    "duree": 35,
    "origine": "Cours, exercice 1.8 · TD complet, exercice 16",
    "notions": [
     "solution polynomiale",
     "changement de variable",
     "théorème de Cauchy",
     "problème de Cauchy"
    ],
    "objectifs": "Résoudre une équation à coefficients variables par deux méthodes guidées, et contrôler le résultat par la dimension de l'espace des solutions.",
    "prerequis": [
     "Théorème de Cauchy linéaire",
     "Dérivée d'une composée",
     "Fonctions hyperboliques"
    ],
    "indications": [
     "1. Chercher le degré $n$ par le terme dominant, puis les coefficients.",
     "2. Poser $z(x)=y(\\sh x)$ : $z'(x)=\\ch x y'(\\sh x)$, puis dériver encore ; on doit obtenir $z''-z=0$.",
     "2. Pour revenir à $t$ : $\\ch x=\\sqrt{1+t^2}$ et $e^{x}=t+\\sqrt{1+t^2}$.",
     "3. Les conditions en $0$ portent sur $y(0)=z(0)$ et $y'(0)=z'(0)$."
    ],
    "page": 3,
    "pageIndication": 7,
    "pageCorrige": 9
   },
   {
    "id": "edn-12",
    "num": 3,
    "etape": "Approfondissement",
    "titre": "Changement de fonction et recollement",
    "difficulte": 4,
    "duree": 45,
    "origine": "Exercice complémentaire · TD complet, exercice 25",
    "notions": [
     "changement de fonction",
     "coefficients constants",
     "recollement",
     "série entière"
    ],
    "objectifs": "Ramener une équation à coefficients variables à une équation à coefficients constants, puis étudier les solutions au point où le coefficient dominant s'annule.",
    "prerequis": [
     "Dérivée d'un produit",
     "Développements limités usuels",
     "Séries entières usuelles"
    ],
    "indications": [
     "1. Calculer $z'$ et $z''$, et comparer $z''-z$ au premier membre de $(E)$.",
     "2. $z''-z=1$ : une constante est solution particulière.",
     "3. Développer le numérateur en $0$ : la limite n'est finie que si le numérateur est un $O(t^2)$.",
     "3. Pour la dérivabilité en $0$, écrire $\\frac{\\ch t-1}{t^2}$ comme somme d'une série entière."
    ],
    "page": 4,
    "pageIndication": 7,
    "pageCorrige": 9
   },
   {
    "id": "edn-14",
    "num": 4,
    "etape": "Problème de synthèse",
    "titre": "Trois méthodes pour une même équation",
    "difficulte": 5,
    "duree": 50,
    "origine": "Exercice complémentaire · TD complet, exercice 27",
    "notions": [
     "série entière",
     "changement de fonction",
     "recollement",
     "théorème de Cauchy",
     "dimension de l'espace des solutions"
    ],
    "objectifs": "Croiser trois méthodes sur une même équation, et comprendre pourquoi l'espace des solutions sur $\\R$ peut être une droite.",
    "prerequis": [
     "Séries entières : produit par $t$, dérivation",
     "Théorème de Cauchy linéaire"
    ],
    "indications": [
     "1. Écrire chaque terme sous la forme $\\sum(\\dots)t^n$ ; la relation lie $a_{n+1}$ à $a_{n-1}$.",
     "1. $\\sum\\frac{(-1)^pt^{2p+1}}{(2p+1)!}=\\sin t$.",
     "2. $z'=y+ty'$.",
     "4. Pour quelles constantes la solution a-t-elle une limite finie en $0$ ?"
    ],
    "page": 5,
    "pageIndication": 7,
    "pageCorrige": 9
   },
   {
    "id": "edn-15",
    "num": 5,
    "etape": "Niveau DS / concours",
    "titre": "Solutions périodiques d'un oscillateur forcé",
    "difficulte": 5,
    "duree": 60,
    "origine": "Exercice complémentaire · TD complet, exercice 28",
    "notions": [
     "intégrale fonction de sa borne",
     "problème de Cauchy",
     "périodicité",
     "résonance"
    ],
    "objectifs": "Exprimer une solution par une intégrale, puis caractériser l'existence de solutions périodiques, comme dans un problème de concours.",
    "prerequis": [
     "Dérivée de $x\\mapsto\\int_0^xg$",
     "Intégrale d'une fonction périodique sur une période"
    ],
    "indications": [
     "1. Développer $\\sin(t-u)=\\sin t\\cos u-\\cos t\\sin u$ et sortir de l'intégrale ce qui ne dépend pas de $u$.",
     "2. $\\int_t^{t+2\\pi}g=\\int_0^{2\\pi}g$ pour $g$ continue et $2\\pi$-périodique.",
     "3. Une fonction $C\\sin t-S\\cos t$ est nulle si et seulement si $C=S=0$ : l'évaluer en $0$ et en $\\frac\\pi2$.",
     "4. $\\int_0^{2\\pi}\\cos^2u du=\\pi$ ; $\\int_0^{2\\pi}\\cos2u\\cos u du=0$."
    ],
    "page": 6,
    "pageIndication": 7,
    "pageCorrige": 10
   }
  ]
 },
 "red": {
  "doc": "selection-red",
  "problemes": [
   {
    "id": "sel-red-suites",
    "num": 1,
    "etape": "Mise en application",
    "titre": "Diagonaliser pour calculer des puissances",
    "difficulte": 2,
    "duree": 35,
    "origine": "Problème original Le Collé",
    "notions": [
     "matrice de rang 1",
     "éléments propres",
     "diagonalisation",
     "puissances",
     "suites couplées",
     "binôme"
    ],
    "objectifs": "Réduire une matrice de la forme $aI+bJ$ sans polynôme caractéristique, puis exploiter la réduction : puissances, suites, inverse.",
    "prerequis": [
     "Théorème du rang",
     "Critères de diagonalisation",
     "Formule du binôme pour des matrices qui commutent"
    ],
    "indications": [
     "1. $J$ est de rang $1$ : que vaut $\\dim\\Ker J$ ? Calculer $J(1,1,1)^T$.",
     "2. Mettre en colonnes une base de chaque sous-espace propre, dans l'ordre des valeurs propres de $D$.",
     "3. $J^2=3J$ ; $2I_3$ et $J$ commutent, le binôme s'applique.",
     "4. $X_k=A^kX_0$, avec $X_0=(1,0,0)^T$ : c'est la première colonne de $A^k$.",
     "5. Vérifier que $AB=I_3$ avec $B=\\frac12I_3-\\frac1{10}J$."
    ],
    "page": 2,
    "pageIndication": 7,
    "pageCorrige": 9
   },
   {
    "id": "rdn-8",
    "num": 2,
    "etape": "Méthodes classiques",
    "titre": "Un endomorphisme de $\\mathbb R_n[X]$",
    "difficulte": 3,
    "duree": 35,
    "origine": "Exercice complémentaire · TD complet, exercice 21",
    "notions": [
     "endomorphisme de polynômes",
     "degré",
     "vecteurs propres",
     "valeurs propres distinctes"
    ],
    "objectifs": "Diagonaliser un endomorphisme sans écrire sa matrice, en vérifiant qu'une famille donnée est formée de vecteurs propres.",
    "prerequis": [
     "Dérivée d'un produit",
     "Corollaire : $n$ valeurs propres distinctes"
    ],
    "indications": [
     "1. Regarder le coefficient de $X^{n+1}$ dans $f(P)$.",
     "2. Écrire $(X^2-1)P_k'$ en factorisant $P_k$ : $X^2-1=(X-1)(X+1)$.",
     "3. Compter les valeurs propres obtenues et comparer à $\\dim\\R_n[X]$."
    ],
    "page": 3,
    "pageIndication": 7,
    "pageCorrige": 9
   },
   {
    "id": "sel-red-tridiag",
    "num": 3,
    "etape": "Approfondissement",
    "titre": "Une matrice tridiagonale et ses valeurs propres",
    "difficulte": 4,
    "duree": 50,
    "origine": "Problème original Le Collé, en lien avec le chapitre Déterminants",
    "notions": [
     "déterminant tridiagonal",
     "récurrence",
     "trigonométrie",
     "valeurs propres distinctes",
     "vecteurs propres"
    ],
    "objectifs": "Calculer un polynôme caractéristique par récurrence, en lire les racines, puis en tirer une identité trigonométrique.",
    "prerequis": [
     "Déterminants tridiagonaux",
     "Formules d'addition",
     "Déterminant et valeurs propres"
    ],
    "indications": [
     "1. Développer selon la première ligne, puis le second mineur selon sa première colonne.",
     "2. Récurrence double ; $\\sin(a+b)+\\sin(a-b)=2\\sin a\\cos b$.",
     "3. Quand $\\sin\\big((n+1)\\theta\\big)$ s'annule-t-il sur $]0,\\pi[$ ? Combien de valeurs obtient-on ?",
     "4. Même formule trigonométrique ; ne pas oublier les coordonnées $j=1$ et $j=n$.",
     "5. $1-\\cos\\theta=2\\sin^2\\frac\\theta2$ ; le déterminant est le produit des valeurs propres."
    ],
    "page": 4,
    "pageIndication": 7,
    "pageCorrige": 10
   },
   {
    "id": "sel-red-commutant",
    "num": 4,
    "etape": "Problème de synthèse",
    "titre": "Matrices qui commutent avec une matrice diagonalisable",
    "difficulte": 4,
    "duree": 50,
    "origine": "Problème original Le Collé",
    "notions": [
     "commutant",
     "changement de base",
     "Vandermonde",
     "dimension",
     "racines carrées"
    ],
    "objectifs": "Résoudre des équations matricielles en passant dans une base propre, et identifier un sous-espace par sa dimension.",
    "prerequis": [
     "Diagonalisation",
     "Matrices commutant avec une diagonale",
     "Déterminant de Vandermonde"
    ],
    "indications": [
     "1. $\\mathcal C(A)$ est le noyau d'une application linéaire.",
     "2. Poser $N=P^{-1}MP$ et écrire le coefficient $(i,j)$ de $DN-ND$.",
     "3. Conjuguer la relation par $P$ : on obtient trois équations scalaires.",
     "4. $M$ commute avec $M^2$.",
     "5. Les colonnes de $P$ sont des vecteurs propres pour $2$, $4$, $6$."
    ],
    "page": 5,
    "pageIndication": 7,
    "pageCorrige": 10
   },
   {
    "id": "sel-red-crochet",
    "num": 5,
    "etape": "Niveau DS / concours",
    "titre": "L'endomorphisme $M\\mapsto AM-MA$",
    "difficulte": 5,
    "duree": 60,
    "origine": "Problème original Le Collé, dans l'esprit des épreuves écrites",
    "notions": [
     "base canonique de $\\mathcal M_n(\\mathbb R)$",
     "vecteurs propres",
     "conjugaison",
     "trace",
     "endomorphisme nilpotent"
    ],
    "objectifs": "Réduire un endomorphisme d'un espace de matrices, transporter la réduction par conjugaison, et construire un contre-exemple.",
    "prerequis": [
     "Produit par une matrice diagonale",
     "Diagonalisation",
     "Matrices nilpotentes"
    ],
    "indications": [
     "1. $DE_{i,j}$ : la ligne $i$ de $E_{i,j}$ est multipliée par $d_i$ ; $E_{i,j}D$ : la colonne $j$ par $d_j$.",
     "2. La base canonique est formée de vecteurs propres. $\\sum_{i,j}(d_i-d_j)$ ?",
     "3. Développer, et simplifier $P^{-1}P$.",
     "4. Les $PE_{i,j}P^{-1}$ forment une base de $\\mathcal M_n(\\mathbb R)$.",
     "5. $E_{1,2}E_{2,1}=E_{1,1}$ et $E_{2,1}E_{1,2}=E_{2,2}$.",
     "6. Que vaut la seule valeur propre possible d'un endomorphisme $u$ tel que $u^3=0$ ?"
    ],
    "page": 6,
    "pageIndication": 7,
    "pageCorrige": 11
   }
  ]
 },
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
