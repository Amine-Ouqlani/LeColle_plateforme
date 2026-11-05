/* =====================================================================
   Le Collé — annales sélectionnées
   Sujets officiels de la Banque PT (épreuve de Mathématiques B, filière PT),
   consultables sur WikiPrépa. Seules les parties qui relèvent de nos
   chapitres sont retenues ; les sujets ne sont pas hébergés ici (droits
   d'auteur) : on renvoie aux pages d'origine.
   Les résumés de questions et les corrections sont rédigés par Le Collé ;
   les calculs ont été vérifiés par calcul formel.
   ===================================================================== */
window.LC = window.LC || {};

LC.annales = [
  {
    id: "bpt-2014-b-1", annee: 2014, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Partie I",
    titre: "Une famille de cubiques : symétrie, point double, point stationnaire",
    chapitres: ["courbes"], niveau: 4, difficulte: 3, duree: "50 min", incontournable: true,
    questions: "Q1 (a)–(e), Q3(a)",
    notions: ["symétrie oblique", "tangentes horizontales et verticales", "point double", "branche parabolique", "condition de stationnarité"],
    methodes: [["2.3", "Symétries : comparer $f(-t)$ à $(\\pm x,\\pm y)$ et à $(\\pm y,\\pm x)$"], ["2.6", "Points doubles : $f(t)=f(s)$, diviser par $t-s$"], ["2.5", "Branche infinie : $\\frac yx$ puis $y-\\alpha x$"]],
    contenu: "contenu/pt/annales/bpt-2014-b-1.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2014", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2014.pdf", corrigeExterne: "https://prepas.org/index.php?module=Sujets&voir=get&file=doc-647dfcf4926d08a789d9" }
  },
  {
    id: "bpt-2014-b-2", annee: 2014, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Partie II",
    titre: "Aire d'un triangle : produit vectoriel et déterminant",
    chapitres: ["determinants"], niveau: 4, difficulte: 1, duree: "15 min",
    questions: "Q1–Q3, Q5",
    notions: ["aire orientée", "produit vectoriel", "déterminant de deux vecteurs"],
    methodes: [["1.1", "$|\\det(\\vec u,\\vec v)|$ = aire du parallélogramme"], ["1.4", "Aire du triangle $=\\frac12|\\det(\\overrightarrow{AB},\\overrightarrow{AC})|$"]],
    contenu: "contenu/pt/annales/bpt-2014-b-2.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2014", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2014.pdf", corrigeExterne: "https://prepas.org/index.php?module=Sujets&voir=get&file=doc-647dfcf4926d08a789d9" }
  },
  {
    id: "bpt-2015-b-2", annee: 2015, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Partie II",
    titre: "Normale, développée et cercle osculateur",
    chapitres: ["courbes", "metrique"], niveau: 4, difficulte: 4, duree: "40 min",
    questions: "Q1 (a)–(c), Q2 (a)–(d)",
    notions: ["normale", "développée", "cercle de courbure", "développement limité en $t_0\\neq0$"],
    methodes: [["2.1", "DL en $t_0\\neq0$ : poser $t=t_0+h$"], ["V2 2.2", "Développée = enveloppe des normales"]],
    contenu: "contenu/pt/annales/bpt-2015-b-2.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2015", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2015.pdf", corrigeExterne: "https://prepas.org/index.php?module=Sujets&voir=get&file=doc-337cfe3170d82335f25a" }
  },
  {
    id: "bpt-2017-b-2", annee: 2017, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Parties II, III, IV",
    titre: "Courbes de Bézier : étude, point singulier, raccord",
    chapitres: ["courbes"], niveau: 4, difficulte: 3, duree: "1 h", incontournable: true,
    questions: "II.1, II.2 (a)–(e), III.1–2, IV",
    notions: ["polynômes de Bernstein", "tableau conjoint", "rebroussement", "branches paraboliques", "tangente aux extrémités"],
    methodes: [["2.3", "Dérivées factorisées et tableau conjoint"], ["2.4", "Théorème $(p,q)$ avec $f''$, $f'''$"], ["2.5", "Branches paraboliques"]],
    contenu: "contenu/pt/annales/bpt-2017-b-2.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2017", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2017.pdf", corrigeExterne: "https://prepas.org/index.php?module=Sujets&voir=get&file=doc-158b666e7083ff795d64" }
  },
  {
    id: "bpt-2018-b-1", annee: 2018, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Partie I",
    titre: "Les endomorphismes $z\\mapsto az+b\\bar z$ de $\\R^2$",
    chapitres: ["determinants"], niveau: 4, difficulte: 3, duree: "40 min",
    questions: "Q1–Q6",
    notions: ["base de $\\R^2$", "déterminant d'un endomorphisme", "rotation, réflexion, projection"],
    methodes: [["1.1", "Base $\\iff\\det\\neq0$"], ["1.3", "Matrice dans la base $(1,i)$, projecteurs et symétries"]],
    contenu: "contenu/pt/annales/bpt-2018-b-1.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2018", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2018.pdf", corrigeExterne: "https://prepas.org/index.php?module=Sujets&voir=get&file=doc-3e3e49cd544ae06d5fe9" }
  },
  {
    id: "bpt-2018-b-3", annee: 2018, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Partie III",
    titre: "Spirale d'Archimède : régularité et tangentes horizontales",
    chapitres: ["courbes"], niveau: 4, difficulte: 2, duree: "30 min",
    questions: "Q1, Q2, Q5(a)",
    notions: ["affixe complexe", "point régulier", "tangente horizontale", "théorème de la bijection"],
    methodes: [["2.2", "Tangente horizontale : $y'=0$ en un point régulier"]],
    contenu: "contenu/pt/annales/bpt-2018-b-3.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2018", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2018.pdf", corrigeExterne: "https://prepas.org/index.php?module=Sujets&voir=get&file=doc-3e3e49cd544ae06d5fe9" }
  },
  {
    id: "bpt-2019-b-2", annee: 2019, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Partie II",
    titre: "Comatrice et inversion de matrices",
    chapitres: ["determinants"], niveau: 4, difficulte: 3, duree: "50 min", incontournable: true,
    questions: "Q1–Q4",
    notions: ["comatrice", "développement selon une colonne", "inverse", "domaine d'inversibilité"],
    methodes: [["1.2", "Développement, transvections"], ["1.3", "$A\\,\\mathrm{com}(A)^T=\\det(A)I_n$"]],
    contenu: "contenu/pt/annales/bpt-2019-b-2.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2019", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2019.pdf" }
  },
  {
    id: "bpt-2019-b-1", annee: 2019, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Partie I",
    titre: "Enveloppe d'une famille de droites, développantes du cercle",
    chapitres: ["metrique"], niveau: 4, difficulte: 4, duree: "1 h",
    questions: "Q1–Q5 (pistes pour Q6–Q7)",
    notions: ["distance point-droite", "enveloppe", "développée", "formules de Frenet"],
    methodes: [["2.5", "Distance d'un point à une droite"], ["V2 2.1", "Enveloppe : équation et sa dérivée en $t$"]],
    contenu: "contenu/pt/annales/bpt-2019-b-1.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2019", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2019.pdf" }
  },
  {
    id: "bpt-2021-b-2", annee: 2021, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Partie II",
    titre: "La deltoïde : rotation, angle moitié, rebroussement, développée",
    chapitres: ["courbes", "metrique"], niveau: 4, difficulte: 4, duree: "1 h 15", incontournable: true,
    questions: "Q1–Q4",
    notions: ["symétrie de rotation", "angle moitié", "rebroussement", "longueur", "développée", "similitude"],
    methodes: [["2.1", "Factorisation par l'angle moitié"], ["2.4", "Théorème $(p,q)$"], ["V2 1.3", "Centre de courbure $I=M+R\\vec N$"]],
    contenu: "contenu/pt/annales/bpt-2021-b-2.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2021", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2021.pdf", rapport: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2021_rapport_jury.pdf" }
  },
  {
    id: "bpt-2023-b-4", annee: 2023, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Quatrième partie",
    titre: "Étude complète : tangentes, asymptote oblique et position",
    chapitres: ["courbes"], niveau: 4, difficulte: 2, duree: "35 min", incontournable: true,
    questions: "Q1–Q6, Q7(a)",
    notions: ["tableau conjoint", "tangente verticale", "asymptote horizontale et oblique", "position"],
    methodes: [["2.2", "Tangente : régularité puis $\\det$"], ["2.5", "$\\frac yx$, puis $y-\\alpha x$, puis position"]],
    contenu: "contenu/pt/annales/bpt-2023-b-4.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2023", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2023.pdf", rapport: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2023_rapport_jury.pdf" }
  },
  {
    id: "bpt-2024-b-2", annee: 2024, concours: "Banque PT", epreuve: "Mathématiques B", partie: "Exercice 2",
    titre: "Courbes en polaires : spirale, cissoïde, enveloppe",
    chapitres: ["courbes", "metrique"], niveau: 4, difficulte: 3, duree: "1 h 15",
    questions: "Parties A, B, C, D",
    notions: ["coordonnées polaires", "longueur", "Frenet", "développée", "rebroussement", "asymptote verticale", "enveloppe"],
    methodes: [["2.3", "Symétrie d'axe $(Ox)$"], ["2.4", "Point stationnaire par DL"], ["V2 2.1", "Enveloppe"]],
    contenu: "contenu/pt/annales/bpt-2024-b-2.html",
    liens: { page: "https://wikiprepa.fr/concours/ecrit/banque-pt_maths-b_pt_2024", sujet: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2024.pdf", rapport: "https://wikiprepa.fr/concours/data/banque-pt_maths-b_pt_2024_rapport_jury.pdf" }
  }
];

/* Sujets examinés et écartés (aucune question sur nos chapitres) — pour mémoire */
LC.annalesEcartees = [
  "Banque PT 2016 Maths B (surfaces, plan osculateur, système différentiel)",
  "Banque PT 2020 Maths B (gradient, rotationnel, surfaces)",
  "Banque PT 2022 Maths B (matrices M(a,b,c), coniques, surfaces réglées)",
  "Banque PT 2025 Maths B (conique, équation différentielle, lignes de plus grande pente)",
  "Banque PT 2023 Maths A, 2024 Maths C, 2025 Maths C (algèbre, probabilités, intégrales, séries)"
];
