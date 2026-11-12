/* =====================================================================
   Le Collé — sujets officiels de la Banque PT (Mathématiques A, B, C)
   Sessions 2014 à 2026. Les sujets, rapports et corrigés ne sont pas
   hébergés ici (droits d'auteur) : on renvoie à WikiPrépa (sujets et
   rapports du jury) et à prepas.org (corrigés de professeurs, UPS).
   Les résumés de parties sont rédigés par Le Collé d'après les énoncés ;
   ils décrivent le contenu, ils ne le remplacent pas.
   Une partie : [intitulé du sujet, thèmes, résumé].
   Thèmes : identifiants de LC.themes (les six premiers sont nos chapitres).
   ===================================================================== */
window.LC = window.LC || {};

LC.themes = [
  ["al", "Algèbre linéaire"], ["determinants", "Déterminants"], ["red", "Réduction"],
  ["ed", "Équations différentielles"], ["courbes", "Courbes paramétrées"], ["metrique", "Propriétés métriques, enveloppes"],
  ["euclidien", "Espaces euclidiens"], ["proba", "Probabilités"], ["series", "Séries numériques et entières"],
  ["integrales", "Intégrales généralisées et à paramètre"], ["analyse", "Fonctions, suites, développements limités"],
  ["fvar", "Fonctions de plusieurs variables"], ["surfaces", "Surfaces"], ["coniques", "Coniques"], ["geometrie", "Géométrie, nombres complexes"]
];

LC.epreuves = {
  A: { nom: "Mathématiques A", contenu: "algèbre et probabilités" },
  B: { nom: "Mathématiques B", contenu: "géométrie et algèbre" },
  C: { nom: "Mathématiques C", contenu: "analyse" }
};

(function () {
  const W = "https://wikiprepa.fr/concours/", U = "https://prepas.org/index.php?module=Sujets&voir=get&file=doc-";
  const S = (annee, ep, rapport, corriges, parties) => {
    const cle = `banque-pt_maths-${ep.toLowerCase()}_pt_${annee}`;
    return { id: `bpt-${annee}-${ep.toLowerCase()}`, annee, epreuve: ep, concours: "Banque PT", duree: "4 h",
      page: W + "ecrit/" + cle, sujet: W + "data/" + cle + ".pdf",
      rapport: rapport ? W + "data/" + cle + "_rapport_jury.pdf" : null,
      corriges: corriges.map(c => U + c),
      parties: parties.map(([nom, themes, resume]) => ({ nom, themes, resume })) };
  };

  LC.sujets = [
    /* ------------------------------ 2026 ------------------------------ */
    S(2026, "A", true, [], [
      ["Partie A", ["red"], "Diagonalisation et trigonalisation de trois matrices, puis d'une matrice $M(a,b)$ selon le signe du discriminant du polynôme caractéristique."],
      ["Partie B", ["proba"], "Couple de variables dont la loi conjointe est une matrice $3\\times3$ : lois marginales, espérances, covariance, indépendance, par produits matriciels."],
      ["Partie C", ["proba", "red"], "Probabilité qu'une matrice aléatoire soit inversible, ou non diagonalisable, pour des lois usuelles ; fonctions génératrices, Python, Bienaymé-Tchebychev."],
      ["Partie D", ["proba", "al"], "Indépendance de deux variables finies, rang 1 de la matrice de la loi conjointe et diagonalisabilité."]]),
    S(2026, "B", true, [], [
      ["Exercice 1, parties A et D", ["al"], "Un sous-espace $H$ de $\\R_3[X]$ défini par une condition sur les dérivées en 0, un endomorphisme de $H$ et sa matrice dans plusieurs bases."],
      ["Exercice 1, parties B et C", ["euclidien"], "Produit scalaire sur $\\R_3[X]$, base orthonormée, projeté orthogonal ; matrice d'une rotation de $\\R^3$ et ses puissances."],
      ["Exercice 2, parties A à C", ["coniques", "geometrie"], "Conique définie par foyer, directrice et excentricité, étudiée avec les nombres complexes ; équation réduite, éléments caractéristiques, tangente, tracé."],
      ["Exercice 2, partie D", ["surfaces"], "Le cône $-3x^2+y^2+3z^2=0$ : points réguliers, plan tangent, sections planes, surface de révolution."]]),
    S(2026, "C", true, [], [
      ["Préambule", ["analyse"], "Dérivées successives et primitives de $t/(t_0-t)$, formule de Taylor-Young, développements limités de $1/(1-t)$ et $\\ln(1-t)$."],
      ["Partie I", ["series"], "Primitive de $1/(t+t^2)$ ; convergence et somme d'une série liée à $\\ln\\big(1+\\frac{(-1)^n}{n}\\big)$."],
      ["Partie II", ["integrales", "series"], "Intégrales à paramètre $G_n(x)$ : convergence, continuité, dérivabilité, relation de récurrence, expression explicite, série associée."],
      ["Partie III", ["fvar"], "La fonction $\\varphi(x,y)=x^2+y^2-\\ln|x-y|$ : hessienne, points critiques, minimum local."]]),
    /* ------------------------------ 2025 ------------------------------ */
    S(2025, "A", true, ["9c263925382794fcc9f0"], [
      ["Exercice 1, préliminaire, parties 1 et 2", ["red", "al"], "L'endomorphisme $P\\mapsto\\big((X^2-1)P'\\big)'$ et les polynômes de Legendre : endomorphisme induit sur $\\R_N[X]$, matrice, valeurs propres, diagonalisabilité."],
      ["Exercice 1, partie 3", ["euclidien"], "Produit scalaire intégral sur $\\R[X]$ : orthogonalité des polynômes de Legendre, normes, suite orthonormée."],
      ["Exercice 2", ["proba"], "Un jeu de paris : lois, espérances, indépendance, covariance et variance de sommes de variables discrètes."]]),
    S(2025, "B", true, [], [
      ["Exercice 1", ["coniques", "red"], "La conique $2\\sqrt3\\,xy-2y^2=3$ : matrice associée, valeurs propres, équation réduite, nature, éléments caractéristiques, tracé."],
      ["Exercice 2", ["ed", "al"], "Une équation différentielle linéaire : structure de l'ensemble des solutions, une matrice de $\\mathcal M_3(\\R)$ (noyau, image, systèmes), un endomorphisme de $\\R_2[X]$, puis résolution complète."],
      ["Exercice 3, partie I", ["surfaces"], "La surface $x^2=2yz$ : symétries, points non réguliers, plans tangents, sections planes."],
      ["Exercice 3, partie II", ["fvar", "surfaces"], "Lignes de plus grande pente d'une surface $z=\\varphi(x,y)$ ; cas des surfaces de révolution."]]),
    S(2025, "C", true, ["4154a7830630416c48d9"], [
      ["Préambule et partie I", ["integrales", "analyse"], "Convergence et calcul de $\\int_0^{+\\infty}\\frac{\\mathrm dt}{t^4+1}$ et $\\int_0^{+\\infty}\\frac{t^2}{t^4+1}\\,\\mathrm dt$ : changement de variable, primitives de fractions rationnelles."],
      ["Partie II", ["ed", "series"], "Solutions développables en série entière du système $C'=-2xS$, $S'=2xC$ ; identification à $\\cos(x^2)$ et $\\sin(x^2)$ ; une intégrale écrite comme série."],
      ["Partie III", ["integrales"], "Intégrales de Fresnel : convergence par intégration par parties, intégrale à paramètre, calcul."]]),
    /* ------------------------------ 2024 ------------------------------ */
    S(2024, "A", true, [], [
      ["Problème I", ["proba"], "Dons et tirages de bonbons : lois, covariance, indépendance, fonctions génératrices, un protocole de tirage alterné."],
      ["Problème II", ["euclidien", "al"], "Produit scalaire sur $\\R_3[X]$ défini par les polynômes de Lagrange, Gram-Schmidt, moindres carrés et ajustement d'une droite."]]),
    S(2024, "B", true, [], [
      ["Exercice 1", ["surfaces"], "Surface paramétrée : plan tangent en un point."],
      ["Exercice 2, parties A et C", ["courbes"], "Courbes en polaires : reconnaître des cercles ; étude complète d'une courbe (variations, point particulier, tangente, branche infinie, tracé)."],
      ["Exercice 2, parties B et D", ["metrique"], "Longueur, repère de Frenet, courbure et développée d'une spirale ; enveloppe d'une famille de droites."],
      ["Exercice 3", ["red"], "L'équation matricielle $M^2-2M=A$ dans $\\mathcal M_3(\\R)$ par diagonalisation, puis $M^2-2M=\\alpha I$ dans $\\mathcal M_2(\\C)$."]]),
    S(2024, "C", true, ["4db0a32503b60e706315"], [
      ["Préambule", ["analyse"], "Étude de $\\tan\\frac x2$, $\\ln\\tan\\frac x2$ et $1/\\cos^2x$."],
      ["Partie I", ["integrales", "series"], "Intégrales impropres de logarithmes, série entière d'arctangente, échange somme-intégrale, constante de Catalan."],
      ["Partie II", ["ed"], "Résolution de $y''+y=\\frac{\\cos x}{\\sin x}$ sur $]0,\\pi[$ : solution particulière donnée, changement de fonction inconnue."],
      ["Partie III", ["integrales"], "Intégrale de Gauss par une intégrale à paramètre : continuité, dérivabilité, relation entre deux fonctions."],
      ["Partie IV", ["series"], "Série entière du sinus, produit infini, sommes $\\sum\\frac1{n^2}$ et séries voisines."]]),
    /* ------------------------------ 2023 ------------------------------ */
    S(2023, "A", true, ["80aa1d2901cfd27a55b6"], [
      ["Exercice 1", ["red", "al"], "Matrices unipotentes : réduction d'une matrice, matrices nilpotentes d'une forme donnée, puissances, racine carrée d'une matrice."],
      ["Exercice 2", ["proba", "series"], "Jeu de lancers : loi géométrique, Bienaymé-Tchebychev, séries entières, inégalité de Markov et estimation d'un paramètre."]]),
    S(2023, "B", true, [], [
      ["Première partie", ["red", "euclidien"], "Diagonaliser deux matrices sans polynôme caractéristique, à l'aide d'une rotation."],
      ["Deuxième partie", ["ed", "al"], "Un espace de fonctions de dimension finie, le système différentiel $f'=Bf$ et les courbes associées."],
      ["Troisième partie", ["metrique", "surfaces"], "Tangente et longueur d'une courbe ; une quadrique, ses sections planes, surface de révolution et méridiennes."],
      ["Quatrième partie", ["courbes", "series"], "Étude complète d'une courbe plane : variations, tangentes, asymptote oblique, position, aire ; convergence de deux séries."]]),
    S(2023, "C", true, ["e1903d9a1a2593bbdcaf"], [
      ["Préambule", ["analyse"], "Décomposition en éléments simples d'une fraction à trois pôles réels simples."],
      ["Partie I", ["series"], "Développements en série entière de logarithmes, rayon de convergence, série numérique étudiée avec les sommes harmoniques."],
      ["Partie II", ["series", "integrales"], "Partie entière, sommation par parties et constante d'Euler."]]),
    /* ------------------------------ 2022 ------------------------------ */
    S(2022, "A", true, ["33ea3999b8a4ec6df8f3"], [
      ["Partie I", ["red", "euclidien"], "Diagonalisation d'une matrice symétrique réelle $3\\times3$ en base orthonormée ; calcul de $A^n$."],
      ["Partie II", ["euclidien"], "Un second produit scalaire sur $\\R^3$ défini par $A$ : bases orthonormées, comparaison des orthogonaux."],
      ["Partie III", ["proba", "series"], "Lois géométrique, binomiale et de Poisson ; chaîne de Markov à trois états liée à $A$ ; série génératrice et rayon de convergence."]]),
    S(2022, "B", true, [], [
      ["Questions de cours", ["al", "proba", "euclidien"], "Dimension de $\\mathcal M_n(\\R)$, série géométrique complexe, loi géométrique, matrices orthogonales d'ordre 2."],
      ["Première partie", ["al", "red", "euclidien"], "Sous-espaces de matrices $M(a,b,c)$ stables par produit, produit scalaire $\\mathrm{tr}(M^TN)$, réduction, projecteurs et isométries."],
      ["Deuxième partie", ["coniques", "proba"], "Une famille de coniques ; loi de la nature de la conique quand ses paramètres suivent des lois géométriques."],
      ["Troisième partie", ["surfaces"], "L'ellipsoïde de révolution $x^2+4y^2+z^2=4$ : plans tangents, surfaces réglées."]]),
    S(2022, "C", true, ["d3408b56c306888e8a50"], [
      ["Préambule", ["analyse"], "Tangente et arctangente : domaine, parité, dérivée, bijection réciproque."],
      ["Partie I", ["integrales", "series"], "Intégrale à paramètre $\\int\\frac{\\mathrm dt}{1+x^2+t^2}$ et étude d'une série par des intégrales."],
      ["Partie II", ["series", "ed"], "Développement en série entière de la tangente par le produit de Cauchy et l'équation $f'=1+f^2$."],
      ["Partie III", ["integrales"], "Intégrales liées à la tangente : changement de variable, équivalent."],
      ["Partie IV", ["series"], "Développement en série entière de $\\frac{x}{e^x-1}$ et nombres de Bernoulli."]]),
    /* ------------------------------ 2021 ------------------------------ */
    S(2021, "A", true, [], [
      ["Probabilités", ["proba"], "Chaîne de Markov à deux états (marche, panne) : loi, covariance, premier instant de panne, fonctions génératrices, minimum et maximum de deux lois géométriques."],
      ["Algèbre, partie I", ["red", "euclidien"], "Diagonalisation en base orthonormée de deux matrices symétriques et suites $\\langle g^n(x),x\\rangle$."],
      ["Algèbre, parties II et III", ["euclidien", "red"], "Valeur propre de plus grand module d'une matrice symétrique ; quotients de Rayleigh et caractérisation min-max des valeurs propres."]]),
    S(2021, "B", true, [], [
      ["Première partie", ["courbes", "euclidien"], "Un manège : courbe paramétrée de l'espace (vitesse, accélération, tangente), matrice orthogonale et changement de repère."],
      ["Deuxième partie", ["courbes", "metrique", "geometrie"], "Rotations et homothéties avec les complexes ; étude complète d'une courbe plane (la deltoïde) : point singulier, longueur, développée."]]),
    S(2021, "C", true, ["a5a9bd46cc2c7103ae04", "43a055b9bf40640c453d"], [
      ["Préambule", ["ed", "analyse"], "Résolution de $y'+2xy=0$ ; dérivées successives de $e^{-x^2}$ et polynômes associés."],
      ["Partie I", ["integrales", "euclidien"], "Intégrales $\\int x^ne^{-x^2}\\,\\mathrm dx$ ; produit scalaire sur $\\R[X]$ et Gram-Schmidt."],
      ["Partie II", ["integrales", "series"], "Une fonction définie par une intégrale : régularité, variations, série associée, développement en série entière."],
      ["Partie III", ["proba", "analyse"], "Approximation par les polynômes de Bernstein, loi binomiale et loi faible des grands nombres."]]),
    /* ------------------------------ 2020 ------------------------------ */
    S(2020, "A", true, [], [
      ["Algèbre, partie I", ["red", "euclidien"], "Une matrice $3\\times3$ orthogonale : diagonalisation, nature géométrique de l'endomorphisme."],
      ["Algèbre, partie II", ["red", "al"], "Endomorphismes tels que $u\\circ u=\\mathrm{Id}$ : sous-espaces propres, diagonalisabilité, critère d'isométrie."],
      ["Algèbre, parties III et IV", ["euclidien"], "Sous-espace de $\\R^4$, bases orthonormées, symétrie orthogonale ; toute isométrie est un produit de réflexions."],
      ["Probabilités", ["proba", "series"], "Marche aléatoire de la fortune d'un joueur, temps d'atteinte et fonction génératrice."]]),
    S(2020, "B", true, [], [
      ["Première partie", ["fvar", "al"], "L'application gradient : linéarité, noyau, théorème de Schwarz, champs qui ne sont pas des gradients."],
      ["Deuxième partie", ["red", "al"], "Un endomorphisme d'un espace de six fonctions trigonométriques : matrice, $A^2$, valeurs propres, diagonalisabilité."],
      ["Troisième partie", ["surfaces", "courbes"], "Surfaces dont la normale est orthogonale à un vecteur fixé : plan tangent, surface réglée, sections, étude et tracé d'une courbe."],
      ["Quatrième partie", ["fvar", "surfaces"], "L'équation aux dérivées partielles $2\\frac{\\partial g}{\\partial x}+\\frac{\\partial g}{\\partial y}=0$ par changement de variables."]]),
    S(2020, "C", true, ["d4706b972dec5d206f50", "b8dec611b83c8049996d"], [
      ["Préambule et partie I", ["analyse", "series"], "Taylor-Young ; étude d'une fraction rationnelle paire, son développement en série entière, comparaison au cosinus."],
      ["Partie II", ["analyse"], "Les fonctions vérifiant $h(2x)=h(x)\\cos(\\pi x)$ : produit de cosinus et passage à la limite."],
      ["Partie III", ["series", "integrales"], "Séries de logarithmes de cosinus, sommes harmoniques, constante d'Euler, fonction Gamma et produits infinis."]]),
    /* ------------------------------ 2019 ------------------------------ */
    S(2019, "A", false, [], [
      ["Partie I", ["red"], "Une matrice antisymétrique $3\\times3$ : $A^2$, valeurs propres $0,\\pm i$, diagonalisabilité dans $\\R$ et dans $\\C$, similitude."],
      ["Partie II", ["al", "euclidien"], "L'espace des matrices antisymétriques d'ordre 3, produit vectoriel, rotations de $\\R^3$ : axe et angle."],
      ["Partie III", ["euclidien", "al"], "Transformation de Cayley $B=(I-A)(I+A)^{-1}$ entre matrices antisymétriques et orthogonales."],
      ["Partie IV", ["al", "red"], "$\\R^n=\\mathrm{Im}f\\oplus\\mathrm{Ker}f$, matrice par blocs, valeurs propres imaginaires pures."],
      ["Probabilités", ["proba", "series"], "Couple de variables à valeurs dans $\\N$ : indépendance, espérance, variance, minimum, lois conditionnelles."]]),
    S(2019, "B", false, [], [
      ["Première partie", ["metrique"], "Enveloppe d'une famille de droites, développée et développantes du cercle, repère de Frenet."],
      ["Deuxième partie", ["determinants"], "Inverses de matrices sur des exemples, formule de la comatrice, matrice à deux paramètres."],
      ["Troisième partie", ["surfaces", "determinants"], "Surface dont les plans tangents sont donnés : résolution d'un système linéaire à paramètres."]]),
    S(2019, "C", false, ["0fe17f1f0a3af54d71a9", "83e296aace0dc635bd96", "70c312ae7a0267be6648", "6c6f97bf3bff065de23c"], [
      ["Préambule et partie I", ["integrales", "series"], "Intégrales $\\int_0^{+\\infty}e^{-x}\\sin^nx\\,\\mathrm dx$ : convergence, récurrence par intégrations par parties, série associée."],
      ["Partie II", ["integrales", "ed", "series"], "$F(x)=\\int_0^{\\pi/2}\\frac{\\mathrm dt}{1-x\\cos t}$ : dérivabilité, expression explicite, équations différentielles linéaires, développement en série entière."]]),
    /* ------------------------------ 2018 ------------------------------ */
    S(2018, "A", false, ["53cf8c812f0f7a14afb7", "8c9267e063d512975358"], [
      ["Algèbre, partie I", ["red"], "Diagonalisabilité dans $\\R$ de deux matrices $3\\times3$, calcul de $A^2$, écriture $A=PDP^{-1}$."],
      ["Algèbre, partie II", ["euclidien", "red"], "Rotations de $\\R^3$ et diagonalisabilité de leurs matrices et de leurs carrés, dans $\\R$ puis dans $\\C$."],
      ["Algèbre, partie III", ["red"], "Endomorphismes annulés par un polynôme scindé à racines simples ; endomorphismes dont le carré est diagonalisable."],
      ["Probabilités", ["proba"], "Boules lancées dans des cases : nombre de cases non vides, loi, espérance, fonction génératrice."]]),
    S(2018, "B", false, ["3e3e49cd544ae06d5fe9", "05ac666522927470d47f", "d933caf62cabf90320b4"], [
      ["Première partie", ["determinants", "red", "geometrie"], "Les endomorphismes $z\\mapsto az+b\\bar z$ de $\\R^2$ : nature géométrique et diagonalisabilité selon $a$ et $b$."],
      ["Deuxième partie", ["surfaces", "euclidien"], "L'hyperboloïde $x^2+y^2-z^2=1$ : symétries, surface réglée de révolution, droites incluses."],
      ["Troisième partie", ["courbes", "geometrie"], "La spirale d'Archimède : points réguliers, tangentes, aire ; constructions à la règle et au compas."]]),
    S(2018, "C", false, ["7a17a7e1d064b07554f1", "23e861775656ad24c8bc"], [
      ["Préambule", ["integrales"], "Lemme de Riemann-Lebesgue pour une fonction de classe $\\mathcal C^1$ sur un segment."],
      ["Partie I", ["integrales"], "Deux suites d'intégrales et la valeur de l'intégrale de Dirichlet $\\int_0^{+\\infty}\\frac{\\sin t}{t}\\,\\mathrm dt$."],
      ["Partie II", ["integrales", "series"], "Série entière de $\\frac{\\sin t}t$, intégrale à paramètre et seconde méthode pour l'intégrale de Dirichlet."]]),
    /* ------------------------------ 2017 ------------------------------ */
    S(2017, "A", false, ["c228ce925600e70bb1a6", "0b4f6e63eb95b6d824ad"], [
      ["Algèbre, partie I", ["red"], "Une matrice $3\\times3$ : diagonalisabilité, relation entre $A^2$, $A$ et $I_3$, calcul de $A^n$ par deux suites récurrentes."],
      ["Algèbre, partie II", ["al", "red"], "Matrices $\\lambda U+\\mu V$ vérifiant une relation polynomiale de degré 3 ; rangs des puissances."],
      ["Algèbre, partie III", ["red", "al"], "Matrices $aI_n+U\\,V^T$ : trace, valeurs propres possibles, diagonalisabilité (matrices de rang 1)."],
      ["Probabilités", ["proba"], "Loi géométrique, fonctions génératrices, somme, minimum et maximum de deux variables géométriques indépendantes."]]),
    S(2017, "B", false, ["158b666e7083ff795d64"], [
      ["Questions de cours et préliminaires", ["al", "proba", "euclidien"], "Loi binomiale, dimension de $\\R_n[X]$, orthogonalité ; les polynômes de Bernstein forment une base."],
      ["Partie I", ["euclidien", "red"], "Produit scalaire sur $\\R_2[X]$, orthonormalisation, diagonalisation d'un endomorphisme symétrique."],
      ["Parties II, III et IV", ["courbes"], "Courbes de Bézier : étude d'une cubique (variations, tangentes, point singulier, branches infinies), tangentes aux extrémités, raccord de deux courbes."],
      ["Partie V", ["surfaces"], "Une courbe de Bézier de l'espace et la surface de révolution qu'elle engendre."]]),
    S(2017, "C", false, ["869215ee908f5653b707", "38ac92d54c40c0e3bb53"], [
      ["Préambule", ["analyse"], "Une fonction dont la dérivée croît strictement est au-dessus de ses tangentes."],
      ["Partie I", ["integrales"], "La fonction Gamma d'Euler : convergence, régularité, relation de récurrence, prolongement, graphe."],
      ["Partie II", ["ed", "series"], "$F(x)=e^{-x^2}\\int_0^xe^{t^2}\\,\\mathrm dt$ : équation $y'=-2xy+1$, série entière, récurrence sur les coefficients."]]),
    /* ------------------------------ 2016 ------------------------------ */
    S(2016, "A", false, ["897991ce48e217c1e2a6", "5cd1027e7944dbc65e25"], [
      ["Partie I", ["red", "euclidien"], "Diagonalisation en base orthonormée d'une matrice symétrique $3\\times3$ ; produit scalaire $\\langle Au,v\\rangle$."],
      ["Partie II", ["fvar", "euclidien"], "La fonctionnelle $\\frac12\\langle Au,u\\rangle-\\langle u,b\\rangle$ : gradient, hessienne, minimum global."],
      ["Partie III", ["euclidien"], "Matrices symétriques définies positives et vecteurs conjugués : construction de l'inverse."],
      ["Probabilités", ["proba"], "Nombre de piles obtenus en un nombre géométrique de lancers."]]),
    S(2016, "B", false, [], [
      ["Préliminaire", ["surfaces", "euclidien"], "Questions de cours : point régulier d'une surface paramétrée, matrices orthogonales d'ordre 3."],
      ["Partie I", ["surfaces"], "Sections planes et plan tangent d'un paraboloïde hyperbolique ; points non réguliers d'une surface paramétrée."],
      ["Partie II", ["courbes", "surfaces"], "Courbes de l'espace tracées sur une surface et plan osculateur."],
      ["Partie III", ["ed", "red", "euclidien"], "Changement de base orthonormée ; système différentiel $X'=BX$ avec $B$ diagonalisée."]]),
    S(2016, "C", false, ["f00c012ff34edc5496ae", "35800b60fda3dfd6acc3"], [
      ["Partie I", ["ed", "fvar"], "L'équation $y''+by'+cy=0$ résolue sans calcul matriciel ; une équation aux dérivées partielles par changement de variables."],
      ["Partie II", ["integrales"], "Convergence et calcul des intégrales $\\int_{\\R}\\frac{\\mathrm dx}{(x^2+2\\lambda x+\\mu)^{n+1}}$."],
      ["Partie III", ["series"], "Développement en série entière de $\\frac{1-\\sqrt{1-4x}}2$ et nombres de Catalan."]]),
    /* ------------------------------ 2015 ------------------------------ */
    S(2015, "A", false, ["b9ec5b3611c8bd9f10fe"], [
      ["Algèbre, partie I", ["red"], "Un endomorphisme de $\\R^4$ : polynôme annulateur de degré 2 et diagonalisabilité."],
      ["Algèbre, partie II", ["al"], "Sous-espace stable engendré par les itérés d'un vecteur ; matrice de l'endomorphisme induit."],
      ["Algèbre, partie III", ["red", "al"], "Décomposition suivant les sous-espaces propres et sous-espaces stables d'un endomorphisme diagonalisable."],
      ["Probabilités", ["proba"], "Couple de variables liées à une loi de Poisson : lois marginales, indépendance, loi conditionnelle."]]),
    S(2015, "B", false, ["337cfe3170d82335f25a"], [
      ["Partie I", ["surfaces"], "Plan tangent à une surface $f(x,y,z)=0$ ; tangente à son intersection avec un plan."],
      ["Partie II", ["courbes", "metrique"], "Courbe paramétrée : normale, développée, cercle de courbure."],
      ["Partie III", ["geometrie"], "Puissance d'un point par rapport à un cercle, axe radical, points cocycliques avec les complexes."],
      ["Partie IV", ["red", "al"], "Un endomorphisme de $\\R_n[X]$ défini par des valeurs en $-1$, $0$, $1$ : noyau, image, valeurs propres, diagonalisabilité."]]),
    S(2015, "C", false, [], [
      ["Partie I", ["analyse", "integrales"], "Encadrements de l'exponentielle et convergence de l'intégrale de Gauss."],
      ["Partie II", ["integrales", "ed"], "Calcul de l'intégrale de Gauss par une intégrale à paramètre et une équation différentielle du premier ordre."],
      ["Partie III", ["series"], "Série entière de $e^{-t^2}$ et valeur approchée de $\\int_0^1e^{-t^2}\\,\\mathrm dt$."]]),
    /* ------------------------------ 2014 ------------------------------ */
    S(2014, "A", false, [], [
      ["Parties I et II", ["euclidien", "red", "al"], "Projections orthogonales de $\\R^3$ sur une droite et sur un plan : matrices, éléments propres, changement de base orthonormée."],
      ["Partie III", ["courbes"], "Projection orthogonale d'une hélice circulaire : régularité, réduction de l'intervalle, variations, tracé."],
      ["Partie IV", ["euclidien", "al"], "Caractérisations des projecteurs orthogonaux de $\\R^n$."]]),
    S(2014, "B", false, ["647dfcf4926d08a789d9"], [
      ["Partie I", ["courbes"], "Une famille de cubiques paramétrées : symétrie, variations, point double, branche infinie, tracé, aire de la boucle, point stationnaire."],
      ["Partie II", ["determinants", "geometrie"], "Aire d'un triangle, produit vectoriel, loi des sinus et formule d'Al-Kashi."],
      ["Partie III", ["al", "red"], "Noyaux et images des itérés d'un endomorphisme ; endomorphismes tels que $f^3=\\mathrm{Id}$."]]),
    S(2014, "C", false, [], [
      ["Partie I", ["analyse", "series", "ed"], "Reste de la série exponentielle par une équation différentielle ; suites adjacentes, irrationalité de $e$."],
      ["Partie II", ["analyse", "integrales", "series"], "Suite récurrente associée à $x\\ln x$ ; l'intégrale $\\int_0^1x^{-x}\\,\\mathrm dx$ écrite comme série."],
      ["Partie III", ["analyse"], "Sommes de Riemann et calculs de limites."]])
  ];
})();
