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
    "id": "al",
    "num": 1,
    "bilan": {
      "doc": "bilan-al",
      "corrige": 2,
      "duree": 13
    },
    "titre": "Algèbre linéaire",
    "accroche": "Découper un espace en morceaux simples et lire ce découpage sur une matrice : sommes directes, projecteurs, hyperplans, trace, sous-espaces stables et matrices par blocs.",
    "statut": "complet",
    "td": {
      "doc": "td-al",
      "corrections": "td-al-corrections"
    },
    "prerequis": [
      "Algèbre linéaire de première année : familles libres et génératrices, bases, dimension.",
      "Applications linéaires et matrices, rang (rappelés au §1.1)."
    ],
    "cours": {
      "doc": "livre-al",
      "sections": [
        {
          "num": "1.1",
          "titre": "Rappels : applications linéaires et matrices",
          "page": 4
        },
        {
          "num": "1.2",
          "titre": "Produit et somme de sous-espaces ; projecteurs",
          "page": 5
        },
        {
          "num": "1.3",
          "titre": "Hyperplans et systèmes linéaires",
          "page": 7
        },
        {
          "num": "1.4",
          "titre": "Trace",
          "page": 8
        },
        {
          "num": "1.5",
          "titre": "Sous-espaces stables",
          "page": 9
        },
        {
          "num": "1.6",
          "titre": "Quelle méthode ? Synthèse",
          "page": 11
        }
      ],
      "debut": 4,
      "fin": 11,
      "corriges": {
        "debut": 12,
        "fin": 14
      }
    },
    "fiche": {
      "doc": "fiche-al",
      "sections": [
        {
          "num": "1.1",
          "titre": "Rappels : applications linéaires et matrices",
          "page": 1
        },
        {
          "num": "1.2",
          "titre": "Produit et somme de sous-espaces ; projecteurs",
          "page": 1
        },
        {
          "num": "1.3",
          "titre": "Hyperplans et systèmes linéaires",
          "page": 1
        },
        {
          "num": "1.4",
          "titre": "Trace",
          "page": 1
        },
        {
          "num": "1.5",
          "titre": "Sous-espaces stables",
          "page": 1
        },
        {
          "num": "1.6",
          "titre": "Quelle méthode ? Pièges ; résultats du TD",
          "page": 2
        }
      ],
      "debut": 1,
      "fin": 2
    },
    "presentation": {
      "doc": "presentation-al",
      "statique": {
        "doc": "presentation-al-statique",
        "debut": 1,
        "fin": 30
      },
      "exercices": 4,
      "sections": [
        {
          "num": "1.1",
          "titre": "Rappels",
          "page": 7,
          "pageStatique": 6
        },
        {
          "num": "1.2",
          "titre": "Produit, somme directe, projecteurs",
          "page": 10,
          "pageStatique": 8
        },
        {
          "num": "1.3",
          "titre": "Hyperplans et systèmes",
          "page": 20,
          "pageStatique": 13
        },
        {
          "num": "1.4",
          "titre": "Trace",
          "page": 24,
          "pageStatique": 16
        },
        {
          "num": "1.5",
          "titre": "Sous-espaces stables",
          "page": 33,
          "pageStatique": 20
        },
        {
          "num": "1.6",
          "titre": "Synthèse",
          "page": 42,
          "pageStatique": 25
        }
      ],
      "debut": 1,
      "fin": 50
    },
    "erreurs": [
      "Conclure qu'une somme de trois sous-espaces est directe parce que les intersections deux à deux sont nulles.",
      "Affirmer $E=F\\oplus G$ après avoir seulement vérifié $F\\cap G=\\{0\\}$, sans la condition sur les dimensions.",
      "Écrire la matrice de passage avec les anciens vecteurs exprimés dans la nouvelle base, ou utiliser $PAP^{-1}$ au lieu de $P^{-1}AP$.",
      "Croire que $\\mathrm{Ker}\\,f$ et $\\mathrm{Im}\\,f$ sont toujours supplémentaires : faux dès que $f\\circ f=0$ avec $f\\neq0$.",
      "Pour une projection sur $F$ parallèlement à $G$, chercher la composante sur $F$ au lieu de la composante sur $G$ (plus simple).",
      "Écrire $\\mathrm{tr}(AB)=\\mathrm{tr}(A)\\,\\mathrm{tr}(B)$, ou permuter librement trois matrices dans une trace."
    ],
    "flash": [
      {
        "q": "Énoncer le théorème du rang.",
        "r": "Si $E$ est de dimension finie et $u\\in\\mathcal L(E,F)$ : $\\dim\\mathrm{Ker}\\,u+\\mathrm{rg}\\,u=\\dim E$."
      },
      {
        "q": "Comment montrer que $E=F\\oplus G$ en dimension finie ?",
        "r": "$F\\cap G=\\{0\\}$ et $\\dim F+\\dim G=\\dim E$ (deux conditions parmi trois)."
      },
      {
        "q": "Quand une somme $F_1+\\dots+F_p$ est-elle directe ?",
        "r": "Si $x_1+\\dots+x_p=0$ avec $x_i\\in F_i$ impose $x_1=\\dots=x_p=0$."
      },
      {
        "q": "Comment reconnaître un projecteur ? une symétrie ?",
        "r": "$p\\circ p=p$ : projection sur $\\mathrm{Im}\\,p$ parallèlement à $\\mathrm{Ker}\\,p$ ; $s\\circ s=\\mathrm{Id}$."
      },
      {
        "q": "Qu'est-ce qu'un hyperplan en dimension $n$ ?",
        "r": "Le noyau d'une forme linéaire non nulle : un sous-espace de dimension $n-1$, défini par une équation."
      },
      {
        "q": "Que vaut la trace d'un projecteur ?",
        "r": "Son rang : dans une base adaptée, sa matrice est $\\mathrm{diag}(I_r,0)$."
      },
      {
        "q": "Comment lire sur une matrice qu'un sous-espace est stable ?",
        "r": "Dans une base adaptée à $F$, la matrice est triangulaire par blocs $\\begin{pmatrix}A&B\\\\0&C\\end{pmatrix}$."
      }
    ]
  },
  {
    "id": "determinants",
    "num": 2,
    "bilan": {
      "doc": "bilan-determinants",
      "corrige": 2,
      "duree": 13
    },
    "titre": "Déterminants",
    "accroche": "Une famille de n vecteurs est-elle une base ? Le déterminant répond par un nombre : un volume orienté, nul exactement quand les vecteurs sont liés.",
    "statut": "complet",
    "td": {
      "doc": "td-determinants",
      "corrections": "td-determinants-corrections"
    },
    "prerequis": [
      "Calcul matriciel : produit, transposée, inverse d'une matrice 2×2.",
      "Familles libres, bases, dimension ; matrice d'un endomorphisme dans une base.",
      "Produit vectoriel et produit scalaire dans l'espace (pour la géométrie).",
      "Suites récurrentes linéaires d'ordre 2 (rappelées dans la fiche §1.6)."
    ],
    "cours": {
      "doc": "livre-det",
      "debut": 4,
      "fin": 13,
      "sections": [
        {
          "num": "1.1",
          "titre": "Dimensions 2 et 3 : aire et volume orientés",
          "page": 4
        },
        {
          "num": "1.2",
          "titre": "Le déterminant d'ordre n : définition, règles de calcul",
          "page": 5
        },
        {
          "num": "1.3",
          "titre": "Propriétés globales : produit, inverse, endomorphismes",
          "page": 7
        },
        {
          "num": "1.4",
          "titre": "Géométrie : alignement, coplanarité, distances",
          "page": 9
        },
        {
          "num": "1.5",
          "titre": "Techniques de calcul d'ordre n",
          "page": 10
        }
      ],
      "corriges": {
        "debut": 14,
        "fin": 23
      }
    },
    "fiche": {
      "doc": "fiche-determinants",
      "debut": 1,
      "fin": 3,
      "sections": [
        {
          "num": "1.1",
          "titre": "Dimensions 2 et 3",
          "page": 1
        },
        {
          "num": "1.2",
          "titre": "Définition et règles de calcul",
          "page": 1
        },
        {
          "num": "1.3",
          "titre": "Propriétés globales, endomorphismes",
          "page": 2
        },
        {
          "num": "1.4",
          "titre": "Géométrie",
          "page": 2
        },
        {
          "num": "1.5",
          "titre": "Quelle méthode pour quel déterminant ?",
          "page": 2
        },
        {
          "num": "1.6",
          "titre": "Techniques d'ordre n",
          "page": 2
        },
        {
          "num": "1.7",
          "titre": "Résultats des TD",
          "page": 3
        }
      ]
    },
    "presentation": {
      "doc": "presentation-det",
      "debut": 1,
      "fin": 127,
      "statique": {
        "doc": "presentation-det-statique",
        "debut": 1,
        "fin": 56
      },
      "exercices": 4,
      "sections": [
        {
          "num": "1.1",
          "titre": "Dimensions 2 et 3",
          "page": 5,
          "pageStatique": 5
        },
        {
          "num": "1.2",
          "titre": "Définition et règles de calcul",
          "page": 20,
          "pageStatique": 11
        },
        {
          "num": "1.3",
          "titre": "Propriétés globales, endomorphismes",
          "page": 47,
          "pageStatique": 23
        },
        {
          "num": "1.4",
          "titre": "Géométrie",
          "page": 70,
          "pageStatique": 32
        },
        {
          "num": "1.5",
          "titre": "Quelle méthode pour quel déterminant ?",
          "page": 82,
          "pageStatique": 38
        },
        {
          "num": "1.6",
          "titre": "Techniques d'ordre n",
          "page": 84,
          "pageStatique": 40
        }
      ]
    },
    "erreurs": [
      "Écrire $\\det(A+B)=\\det A+\\det B$ ou $\\det(\\lambda A)=\\lambda\\det A$ : c'est $\\lambda^n\\det A$.",
      "Faire $C_i\\leftarrow 2C_i+C_j$ en croyant le déterminant inchangé : il est multiplié par $2$.",
      "Enchaîner des opérations en oubliant que chacune agit sur la matrice déjà modifiée.",
      "Oublier le signe $(-1)^{i+j}$ du développement, en particulier sur l'anti-diagonale (déterminants en X).",
      "Développer brutalement un déterminant à paramètre au lieu de sortir les facteurs dès qu'ils apparaissent.",
      "Calculer le déterminant d'un endomorphisme géométrique dans la base canonique au lieu d'une base adaptée.",
      "Polynôme en $x$ : oublier la racine supplémentaire quand une puissance manque, ou le cas des racines non distinctes."
    ],
    "flash": [
      {
        "q": "Que vaut $\\det(-A)$ pour $A\\in\\mathcal M_5(\\R)$ ?",
        "r": "$(-1)^5\\det A=-\\det A$ : on sort $-1$ de chacune des 5 colonnes."
      },
      {
        "q": "Pourquoi une matrice à deux colonnes égales a-t-elle un déterminant nul ?",
        "r": "Échanger ces deux colonnes ne change pas la matrice mais change le signe (antisymétrie) : $\\det A=-\\det A$."
      },
      {
        "q": "Le déterminant d'ordre $n$ à diagonale $a$ et autres coefficients $b$ ?",
        "r": "$D_n(a,b)=\\big(a+(n-1)b\\big)(a-b)^{n-1}$ (somme constante sur les lignes)."
      },
      {
        "q": "Tridiagonal (diagonale $a$, sur-diagonale $b$, sous-diagonale $c$) : quelle récurrence ?",
        "r": "$T_n=aT_{n-1}-bc\\,T_{n-2}$ ; seul le produit $bc$ compte."
      },
      {
        "q": "$\\det$ d'une symétrie $s$ de $\\R^3$ par rapport à un plan ?",
        "r": "$-1$ : dans une base adaptée, $\\mathrm{Mat}\\,s=\\mathrm{diag}(1,1,-1)$."
      },
      {
        "q": "$A\\in\\mathcal M_n(\\R)$ vérifie $A^2=-I_n$. Que dire de $n$ ?",
        "r": "$(\\det A)^2=(-1)^n\\geq0$ donc $n$ est pair."
      }
    ]
  },
  {
    "id": "red",
    "num": 3,
    "bilan": {
      "doc": "bilan-red",
      "corrige": 2,
      "duree": 15
    },
    "titre": "Réduction",
    "accroche": "Choisir la base où la matrice d'un endomorphisme est la plus simple : éléments propres, polynôme caractéristique, diagonalisation, puissances et suites, trigonalisation.",
    "statut": "complet",
    "td": {
      "doc": "td-red",
      "corrections": "td-red-corrections"
    },
    "prerequis": [
      "Le chapitre Algèbre linéaire : sommes directes, sous-espaces stables, trace, changement de base.",
      "Le chapitre Déterminants (calcul par opérations élémentaires).",
      "Polynômes : racines, multiplicité, factorisation."
    ],
    "cours": {
      "doc": "livre-red",
      "debut": 4,
      "fin": 13,
      "sections": [
        {
          "num": "1.1",
          "titre": "Éléments propres",
          "page": 5
        },
        {
          "num": "1.2",
          "titre": "Polynôme caractéristique",
          "page": 6
        },
        {
          "num": "1.3",
          "titre": "Diagonalisation",
          "page": 8
        },
        {
          "num": "1.4",
          "titre": "Applications de la diagonalisation",
          "page": 10
        },
        {
          "num": "1.5",
          "titre": "Trigonalisation",
          "page": 11
        },
        {
          "num": "1.6",
          "titre": "Quelle méthode ? Synthèse",
          "page": 12
        }
      ],
      "corriges": {
        "debut": 14,
        "fin": 16
      }
    },
    "fiche": {
      "doc": "fiche-red",
      "debut": 1,
      "fin": 2,
      "sections": [
        {
          "num": "1.1",
          "titre": "Éléments propres",
          "page": 1
        },
        {
          "num": "1.2",
          "titre": "Polynôme caractéristique",
          "page": 1
        },
        {
          "num": "1.3",
          "titre": "Diagonalisation",
          "page": 2
        },
        {
          "num": "1.4",
          "titre": "Applications",
          "page": 2
        },
        {
          "num": "1.5",
          "titre": "Trigonalisation",
          "page": 2
        },
        {
          "num": "1.6",
          "titre": "Quelle méthode ? Pièges ; résultats du TD",
          "page": 2
        }
      ]
    },
    "presentation": {
      "doc": "presentation-red",
      "debut": 1,
      "fin": 67,
      "statique": {
        "doc": "presentation-red-statique",
        "debut": 1,
        "fin": 35
      },
      "exercices": 6,
      "sections": [
        {
          "num": "1.1",
          "titre": "Éléments propres",
          "page": 8,
          "pageStatique": 6
        },
        {
          "num": "1.2",
          "titre": "Polynôme caractéristique",
          "page": 19,
          "pageStatique": 11
        },
        {
          "num": "1.3",
          "titre": "Diagonalisation",
          "page": 31,
          "pageStatique": 16
        },
        {
          "num": "1.4",
          "titre": "Applications",
          "page": 46,
          "pageStatique": 23
        },
        {
          "num": "1.5",
          "titre": "Trigonalisation",
          "page": 57,
          "pageStatique": 28
        },
        {
          "num": "1.6",
          "titre": "Synthèse",
          "page": 64,
          "pageStatique": 32
        }
      ]
    },
    "erreurs": [
      "Prendre un vecteur nul comme vecteur propre : un vecteur propre est non nul, même si $E_\\lambda$ contient $0$.",
      "Oublier de vérifier que $\\chi_A$ est scindé sur $\\mathbb R$ avant de diagonaliser (rotation).",
      "Croire qu'une valeur propre double empêche la diagonalisation : il faut comparer $\\dim E_\\lambda$ à la multiplicité.",
      "Développer $\\chi_A$ au lieu de le factoriser au fur et à mesure, puis ne plus savoir trouver les racines.",
      "Ranger les vecteurs propres en lignes dans $P$, ou dans un ordre différent de celui des valeurs propres dans $D$.",
      "Écrire $A=P^{-1}DP$ alors que les colonnes de $P$ sont des vecteurs propres : c'est $A=PDP^{-1}$."
    ],
    "flash": [
      {
        "q": "Polynôme caractéristique d'une matrice $2\\times2$ ?",
        "r": "$\\chi_A=x^2-\\mathrm{tr}(A)\\,x+\\det A$."
      },
      {
        "q": "Comment obtenir $\\dim E_\\lambda(A)$ rapidement ?",
        "r": "$\\dim E_\\lambda=n-\\mathrm{rg}(A-\\lambda I_n)$ (théorème du rang)."
      },
      {
        "q": "Une matrice $n\\times n$ a $n$ valeurs propres distinctes. Conclusion ?",
        "r": "Elle est diagonalisable, et chaque sous-espace propre est une droite."
      },
      {
        "q": "$\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ est-elle diagonalisable ?",
        "r": "Non : seule valeur propre $1$ ; diagonalisable, elle serait égale à $I_2$."
      },
      {
        "q": "Valeurs propres d'une matrice de rang $1$ ?",
        "r": "$0$, d'ordre au moins $n-1$, et $\\mathrm{tr}(A)$."
      },
      {
        "q": "Si $\\chi_A$ est scindé, que valent $\\mathrm{tr}A$ et $\\det A$ ?",
        "r": "La somme et le produit des valeurs propres, comptées avec multiplicité."
      },
      {
        "q": "$A=PDP^{-1}$ : que vaut $A^k$ ?",
        "r": "$A^k=PD^kP^{-1}$, $D^k$ diagonale des $\\lambda_i^k$."
      }
    ]
  },
  {
    "id": "ed",
    "num": 4,
    "bilan": {
      "doc": "bilan-ed",
      "corrige": 2,
      "duree": 15
    },
    "titre": "Équations différentielles",
    "accroche": "Une solution particulière, plus toutes les solutions sans second membre : premier ordre, second ordre à coefficients constants puis continus, théorème de Cauchy linéaire.",
    "statut": "complet",
    "td": {
      "doc": "td-ed",
      "corrections": "td-ed-corrections"
    },
    "prerequis": [
      "Dérivation, primitives usuelles, intégration par parties.",
      "Nombres complexes, exponentielle complexe.",
      "Espaces vectoriels : sous-espace, dimension.",
      "Pour le §1.4 : séries entières."
    ],
    "cours": {
      "doc": "livre-ed",
      "debut": 4,
      "fin": 13,
      "sections": [
        {
          "num": "1.1",
          "titre": "Vocabulaire et structure des solutions",
          "page": 4
        },
        {
          "num": "1.2",
          "titre": "Équations du premier ordre, recollement",
          "page": 6
        },
        {
          "num": "1.3",
          "titre": "Second ordre à coefficients constants",
          "page": 8
        },
        {
          "num": "1.4",
          "titre": "Second ordre à coefficients continus",
          "page": 10
        },
        {
          "num": "1.5",
          "titre": "Quelle méthode ? Synthèse",
          "page": 12
        }
      ],
      "corriges": {
        "debut": 14,
        "fin": 16
      }
    },
    "fiche": {
      "doc": "fiche-ed",
      "debut": 1,
      "fin": 3,
      "sections": [
        {
          "num": "1.1",
          "titre": "Structure et théorème de Cauchy",
          "page": 1
        },
        {
          "num": "1.2",
          "titre": "Premier ordre, recollement",
          "page": 1
        },
        {
          "num": "1.3",
          "titre": "Second ordre à coefficients constants",
          "page": 2
        },
        {
          "num": "1.4",
          "titre": "Second ordre à coefficients continus",
          "page": 2
        },
        {
          "num": "1.5",
          "titre": "Quelle méthode ? Pièges",
          "page": 3
        },
        {
          "num": "1.6",
          "titre": "Résultats du TD",
          "page": 3
        }
      ]
    },
    "presentation": {
      "doc": "presentation-ed",
      "debut": 1,
      "fin": 86,
      "statique": {
        "doc": "presentation-ed-statique",
        "debut": 1,
        "fin": 44
      },
      "exercices": 7,
      "sections": [
        {
          "num": "1.1",
          "titre": "Structure, théorème de Cauchy",
          "page": 5,
          "pageStatique": 5
        },
        {
          "num": "1.2",
          "titre": "Premier ordre, recollement",
          "page": 20,
          "pageStatique": 12
        },
        {
          "num": "1.3",
          "titre": "Second ordre, coefficients constants",
          "page": 42,
          "pageStatique": 22
        },
        {
          "num": "1.4",
          "titre": "Second ordre, coefficients continus",
          "page": 61,
          "pageStatique": 31
        },
        {
          "num": "1.5",
          "titre": "Quelle méthode ? Synthèse",
          "page": 83,
          "pageStatique": 41
        }
      ]
    },
    "erreurs": [
      "Prendre une primitive de $a$ sans avoir normalisé l'équation (diviser par le coefficient de $y'$), ou se tromper de signe dans $Ke^{-A(t)}$.",
      "Chercher une solution particulière $Ce^{mt}$ alors que $m$ est racine de l'équation caractéristique (résonance) : le degré de $Q$ augmente de la multiplicité.",
      "Second membre en $\\sin(\\omega t)$ : prendre la partie réelle au lieu de la partie imaginaire.",
      "Fixer les constantes avec les conditions initiales avant d'avoir ajouté la solution particulière.",
      "Diviser par un coefficient qui s'annule sans le signaler, puis appliquer le théorème de Cauchy en ce point.",
      "Recollement : oublier de vérifier la dérivabilité et l'équation au point de raccord, ou affirmer l'unicité sans preuve.",
      "Série entière : oublier le rayon de convergence, ou croire qu'elle donne toujours toutes les solutions."
    ],
    "flash": [
      {
        "q": "Structure de l'ensemble des solutions de $y''+a(t)y'+b(t)y=c(t)$ ?",
        "r": "$S_E=y_p+S_H$, où $S_H$ est un plan vectoriel ($a,b,c$ continues sur un intervalle)."
      },
      {
        "q": "Solutions de $y'+a(t)y=0$ sur un intervalle ?",
        "r": "$y=Ke^{-A(t)}$, $A$ primitive de $a$."
      },
      {
        "q": "Variation de la constante au premier ordre : que reste-t-il ?",
        "r": "Avec $y=\\lambda(t)e^{-A(t)}$ : $\\lambda'(t)=b(t)e^{A(t)}$."
      },
      {
        "q": "$y''-2y'+y=e^t$ : quelle forme pour $y_p$ ?",
        "r": "$1$ est racine double : $y=Q(t)e^t$ avec $Q''=1$, soit $y_p=\\frac{t^2}2e^t$."
      },
      {
        "q": "Solutions réelles de $y''+2y'+5y=0$ ?",
        "r": "$r=-1\\pm2i$ : $y=e^{-t}(A\\cos2t+B\\sin2t)$."
      },
      {
        "q": "On connaît une solution $\\varphi$ de $(H)$ qui ne s'annule pas. Que faire ?",
        "r": "Poser $y=\\lambda\\varphi$ : on obtient une équation du premier ordre en $\\lambda'$."
      },
      {
        "q": "Combien de conditions initiales pour un problème de Cauchy du second ordre ?",
        "r": "Deux : $y(t_0)$ et $y'(t_0)$."
      }
    ]
  },
  {
    "id": "courbes",
    "num": 5,
    "bilan": {
      "doc": "bilan-courbes",
      "corrige": 2,
      "duree": 15
    },
    "titre": "Courbes paramétrées planes",
    "accroche": "Décrire une courbe par un point mobile M(t) : tangentes, points stationnaires, branches infinies, inflexions, tracé complet.",
    "statut": "complet",
    "td": {
      "doc": "td-courbes",
      "corrections": "td-courbes-corrections"
    },
    "prerequis": [
      "Dérivation, limites et développements limités usuels (rappelés dans la fiche §2.1).",
      "Trigonométrie : formules d'addition, de duplication, angle moitié.",
      "Déterminant de deux vecteurs du plan (chapitre 1, §1.1).",
      "Équation d'une droite, distance d'un point à une droite."
    ],
    "cours": {
      "doc": "livre-courbes",
      "debut": 4,
      "fin": 14,
      "sections": [
        {
          "num": "2.1",
          "titre": "Représentation paramétrique, fonctions vectorielles",
          "page": 4
        },
        {
          "num": "2.2",
          "titre": "Tangente en un point régulier",
          "page": 5
        },
        {
          "num": "2.3",
          "titre": "Plan d'étude et réduction",
          "page": 6
        },
        {
          "num": "2.4",
          "titre": "Points stationnaires, étude locale, inflexions",
          "page": 7
        },
        {
          "num": "2.5",
          "titre": "Branches infinies, position",
          "page": 10
        },
        {
          "num": "2.6",
          "titre": "Intersections, points doubles ; synthèse",
          "page": 12
        },
        {
          "num": "2.7",
          "titre": "Fiche : réussir l'étude d'une courbe",
          "page": 13
        },
        {
          "num": "2.8",
          "titre": "Problème type devoir surveillé",
          "page": 14
        }
      ],
      "corriges": {
        "debut": 15,
        "fin": 27
      }
    },
    "fiche": {
      "doc": "fiche-courbes",
      "debut": 1,
      "fin": 3,
      "sections": [
        {
          "num": "2.1",
          "titre": "Fonctions vectorielles, outils de calcul",
          "page": 1
        },
        {
          "num": "2.2",
          "titre": "Tangente, pente",
          "page": 1
        },
        {
          "num": "2.3",
          "titre": "Plan d'étude, symétries, tracé",
          "page": 2
        },
        {
          "num": "2.4",
          "titre": "Points stationnaires, étude locale, inflexions",
          "page": 2
        },
        {
          "num": "2.5",
          "titre": "Branches infinies, positions",
          "page": 3
        },
        {
          "num": "2.6",
          "titre": "Intersections, points doubles",
          "page": 3
        },
        {
          "num": "2.7",
          "titre": "Check-list et résultats des TD",
          "page": 3
        }
      ]
    },
    "presentation": {
      "doc": "presentation-courbes",
      "debut": 1,
      "fin": 114,
      "statique": {
        "doc": "presentation-courbes-statique",
        "debut": 1,
        "fin": 51
      },
      "exercices": 4,
      "sections": [
        {
          "num": "2.1",
          "titre": "Fonctions vectorielles, outils de calcul",
          "page": 5,
          "pageStatique": 5
        },
        {
          "num": "2.2",
          "titre": "Tangente, pente",
          "page": 15,
          "pageStatique": 10
        },
        {
          "num": "2.3",
          "titre": "Plan d'étude, symétries, tracé",
          "page": 30,
          "pageStatique": 17
        },
        {
          "num": "2.4",
          "titre": "Points stationnaires, étude locale, inflexions",
          "page": 44,
          "pageStatique": 24
        },
        {
          "num": "2.5",
          "titre": "Branches infinies, positions",
          "page": 72,
          "pageStatique": 35
        },
        {
          "num": "2.6",
          "titre": "Intersections, points doubles",
          "page": 91,
          "pageStatique": 43
        },
        {
          "num": "2.7",
          "titre": "Check-list et résultats des TD",
          "page": 110,
          "pageStatique": 49
        }
      ]
    },
    "revision": {
      "doc": "revision",
      "sections": [
        {
          "titre": "Diagnostic du devoir",
          "page": 1
        },
        {
          "titre": "Outils de calcul indispensables",
          "page": 2
        },
        {
          "titre": "Étude générale, tangentes, pente",
          "page": 2
        },
        {
          "titre": "Point stationnaire : nature, tangente, position",
          "page": 3
        },
        {
          "titre": "Position globale par rapport à une droite",
          "page": 4
        },
        {
          "titre": "Branches infinies et asymptotes",
          "page": 5
        },
        {
          "titre": "Courbe asymptote (hors programme)",
          "page": 6
        },
        {
          "titre": "Points d'inflexion",
          "page": 7
        },
        {
          "titre": "Le dessin",
          "page": 8
        },
        {
          "titre": "Pièges récapitulatifs et priorités",
          "page": 9
        }
      ]
    },
    "erreurs": [
      "« $x'(t_0)=0$ donc tangente verticale » : faux si $y'(t_0)=0$ aussi (point stationnaire).",
      "Confondre $\\frac yx$ (pente de la droite $(OM)$) et $\\frac{y'}{x'}$ (pente de la tangente).",
      "Conclure à une asymptote avec $\\lim\\frac yx=\\alpha$ seul : il faut aussi $\\lim(y-\\alpha x)$.",
      "Oublier une borne du domaine ou une valeur interdite dans l'étude des branches infinies.",
      "Arrêter un développement limité avant le premier vecteur non colinéaire au premier (ou compter un terme colinéaire).",
      "Chercher les inflexions avec $f''=\\vec 0$ : c'est la colinéarité de $f'$ et $f''$, avec changement de signe de $\\det(f',f'')$, qui compte.",
      "Élever au carré pour résoudre une intersection sans vérifier les signes à la fin.",
      "Confondre tangente horizontale et verticale (erreur relevée par le jury de la Banque PT 2024)."
    ],
    "flash": [
      {
        "q": "Tangente en un point régulier $M(t_0)$ : équation ?",
        "r": "$\\det\\big(\\overrightarrow{M(t_0)M},f'(t_0)\\big)=0$, soit $y'_0(x-x_0)-x'_0(y-y_0)=0$."
      },
      {
        "q": "$f(t_0+h)=f(t_0)+h^2\\vec a+h^3\\vec b+o(h^3)$ avec $\\det(\\vec a,\\vec b)\\neq0$ : nature du point ?",
        "r": "$p=2$, $q=3$ : rebroussement de première espèce, tangente dirigée par $\\vec a$."
      },
      {
        "q": "Quelle quantité gouverne la concavité d'une courbe paramétrée ?",
        "r": "Le signe de $\\det(f',f'')$ : si $x'\\neq0$, $g''(x(t))=\\frac{\\det(f',f'')}{x'^3}$."
      },
      {
        "q": "$x\\to+\\infty$, $y\\to+\\infty$, $\\frac yx\\to2$, $y-2x\\to+\\infty$ : nature de la branche ?",
        "r": "Branche parabolique de direction $y=2x$."
      },
      {
        "q": "$f(-t)=(x(t),-y(t))$ : quelle symétrie, quel intervalle d'étude ?",
        "r": "Symétrie d'axe $(Ox)$ ; on étudie sur $t\\geq0$ et l'on complète par symétrie."
      },
      {
        "q": "Comment factoriser $\\cos t-\\cos 2t$ ?",
        "r": "Angle moitié : $\\cos t-\\cos2t=2\\sin\\frac t2\\sin\\frac{3t}2$."
      }
    ]
  },
  {
    "id": "metrique",
    "num": 6,
    "bilan": {
      "doc": "bilan-metrique",
      "corrige": 2,
      "duree": 13
    },
    "titre": "Propriétés métriques et enveloppes",
    "accroche": "Longueur, abscisse curviligne, repère de Frenet, courbure, développée, et enveloppe d'une famille de droites.",
    "statut": "partiel",
    "td": {
      "doc": "td-metrique",
      "corrections": "td-metrique-corrections"
    },
    "manque": "Pas encore de présentation pour ce chapitre : le livret et la fiche en tiennent lieu.",
    "prerequis": [
      "Tout le chapitre 2 (tangente, $\\det(f',f'')$, factorisation par l'angle moitié).",
      "Intégrales : primitives usuelles, $\\int|\\cdot|$ sur un intervalle où le signe est connu.",
      "Résolution d'un système linéaire $2\\times2$ (formules de Cramer)."
    ],
    "cours": {
      "doc": "volume2",
      "debut": 4,
      "fin": 9,
      "sections": [
        {
          "num": "1.1",
          "titre": "Longueur et abscisse curviligne",
          "page": 4
        },
        {
          "num": "1.2",
          "titre": "Repère de Frenet et courbure",
          "page": 5
        },
        {
          "num": "1.3",
          "titre": "Rayon, centre et cercle de courbure ; développée",
          "page": 6
        },
        {
          "num": "2.1",
          "titre": "Enveloppe d'une famille de droites : définition et calcul",
          "page": 8
        },
        {
          "num": "2.2",
          "titre": "La développée, enveloppe des normales",
          "page": 9
        }
      ],
      "corriges": {
        "debut": 10,
        "fin": 13
      },
      "index": 14
    },
    "erreurs": [
      "Calculer une longueur sans s'assurer du signe sous la valeur absolue : $\\|f'\\|=\\sqrt{x'^2+y'^2}$ doit être simplifiée sur un intervalle où le signe est connu.",
      "Confondre la courbure $\\gamma$ (signée) et le rayon $R=\\frac1{|\\gamma|}$.",
      "Enveloppe : oublier de dériver l'équation de la droite par rapport au paramètre (le système a deux équations).",
      "Développée : prendre $\\vec N$ dans le mauvais sens ; utiliser $I=M+\\frac1\\gamma\\vec N$ avec $\\gamma$ signée."
    ],
    "flash": [
      {
        "q": "Longueur d'un arc $t\\in[a,b]$ ?",
        "r": "$L=\\int_a^b\\|f'(t)\\|\\,dt$."
      },
      {
        "q": "Courbure en fonction de $f'$ et $f''$ ?",
        "r": "$\\gamma=\\frac{\\det(f',f'')}{\\|f'\\|^3}$ (formule hors programme, mais classique)."
      },
      {
        "q": "Enveloppe de $a(t)x+b(t)y=c(t)$ : quel système résoudre ?",
        "r": "$a x+b y=c$ et $a'x+b'y=c'$, système $2\\times2$ en $(x,y)$."
      },
      {
        "q": "La développée est l'enveloppe de quelles droites ?",
        "r": "Des normales à la courbe."
      }
    ],
    "fiche": {
      "doc": "fiche-metrique",
      "sections": [
        {
          "num": "1.1",
          "titre": "Longueur et abscisse curviligne",
          "page": 1
        },
        {
          "num": "1.2",
          "titre": "Repère de Frenet et courbure",
          "page": 1
        },
        {
          "num": "1.3",
          "titre": "Rayon, centre, cercle de courbure ; développée",
          "page": 1
        },
        {
          "num": "2.1",
          "titre": "Enveloppe d'une famille de droites",
          "page": 1
        },
        {
          "num": "2.2",
          "titre": "La développée, enveloppe des normales",
          "page": 2
        },
        {
          "num": "3",
          "titre": "Méthodes, pièges ; résultats du TD",
          "page": 2
        }
      ],
      "debut": 1,
      "fin": 2
    }
  }
];
