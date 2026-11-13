/* =====================================================================
   Le Collé — les classiques
   Exercices et problèmes d'entraînement que l'on retrouve, sous une forme
   ou une autre, dans beaucoup de sujets. Ce ne sont PAS des sujets de
   concours : ce sont des exercices du TD de chaque chapitre (énoncés et
   corrections Le Collé), rangés ici pour les retrouver d'un coup.
   Une entrée : [identifiant de l'exercice (LC.exercices), nom d'usage].
   ===================================================================== */
window.LC = window.LC || {};

LC.classiques = {
  al: [["aln-12", "Projecteurs associés"], ["rdn-17", "Fonctions paires et impaires : deux supplémentaires"], ["aln-3", "Formule de Grassmann : deux sous-espaces trop grands se coupent"],
    ["aln-5", "La trace détermine une matrice"], ["aln-7", "Matrices de rang au plus 1"], ["aln-8", "Matrices de carré nul"],
    ["al-crochet", "L'endomorphisme $M\\mapsto AM-MA$"], ["aln-13", "$AB-BA=I$ est impossible"]],
  determinants: [["td-d5", "Déterminant de Vandermonde"], ["n-lagrange", "Vandermonde et interpolation de Lagrange"], ["n-tri", "Déterminant tridiagonal"],
    ["td-d3", "Déterminant et suite récurrente linéaire d'ordre 2"], ["n-circ", "Déterminant circulant"], ["ex-max", "La matrice $\\max(i,j)$"],
    ["td-d10", "$a$ au-dessus de la diagonale, $b$ au-dessous"], ["n-diag1", "Diagonale quelconque, des 1 ailleurs"], ["n-blocs", "Déterminant triangulaire par blocs"],
    ["hp-com", "Comatrice"], ["n-cauchy", "Déterminant de Cauchy"], ["td-d2", "Distance de deux droites de l'espace"]],
  red: [["red-chi", "Matrice compagnon"], ["red-puiss", "Puissances d'une matrice et suites couplées"], ["rdn-13", "Récurrence linéaire d'ordre 3"],
    ["red-rang1", "La matrice dont tous les coefficients valent 1"], ["rdn-12", "Matrices de rang 1"], ["red-nilp", "Matrices nilpotentes"],
    ["rdn-7", "Matrices circulantes"], ["rdn-5", "La transposition"], ["rdn-6", "Matrice de transition"],
    ["rdn-10", "$AB$ et $BA$"], ["red-racine", "Racines carrées d'une matrice"], ["red-trig", "Trigonaliser une matrice"]],
  /* Équations différentielles : programme de PTSI (version actuelle du chapitre). Classiques de PT mis en réserve, à
     rétablir avec le chapitre complet : ["edn-9", "Variation de la constante au second ordre"], ["ed-recol", "Recollement de solutions"],
     ["ed-abaisse", "Une solution connue, puis toutes"], ["edn-10", "Équation d'Euler"], ["ed-se", "Solution développable en série entière"],
     ["edn-14", "Trois méthodes pour une même équation"] */
  ed: [["edn-17", "Variation de la constante au premier ordre"], ["ed-integ", "Équation intégrale"], ["edn-18", "Équation fonctionnelle"],
    ["edn-3", "Racine double, second membre polynôme-exponentielle"], ["edn-5", "Superposition"], ["edn-8", "Résonance"],
    ["edn-4", "Oscillateur amorti : problème de Cauchy"], ["edn-7", "Développement limité d'une solution"], ["edn-15", "Oscillateur forcé : solutions périodiques"]],
  courbes: [["td-c4", "Cardioïde"], ["c-cycloide", "Cycloïde"], ["c-astro", "Astroïde"], ["td-c5", "Lemniscate de Bernoulli"],
    ["td-c8", "Cubique (folium) de Descartes"], ["td-c3", "Cissoïde de Dioclès"], ["c-stroph", "Strophoïde"], ["c-limacon", "Limaçon de Pascal"],
    ["ex-liss", "Courbe de Lissajous"], ["c-develop", "Développante du cercle"], ["td-c7", "Rebroussement de seconde espèce"], ["ds-pb", "Étude complète, type devoir surveillé"]],
  metrique: [["ex-cardio", "Longueur de la cardioïde"], ["m-cycl", "Longueur d'une arche de cycloïde"], ["m-astro", "Longueur de l'astroïde"],
    ["met-chain", "La chaînette"], ["met-spirale", "Spirale logarithmique"], ["ex-devparab", "Développée de la parabole"],
    ["e-ellipse", "Développée de l'ellipse"], ["m-cycl-dev", "Développée de la cycloïde"], ["met-astro-dev", "Développée de l'astroïde"],
    ["ex-echelle", "L'échelle qui glisse : une enveloppe"], ["met-courbure-cste", "Courbes à courbure constante"], ["met-tractrice", "Tractrice et chaînette"]]
};
