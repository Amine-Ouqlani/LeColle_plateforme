# Le Collé — plateforme de mathématiques PT

Espace de travail de l'élève : pour chaque chapitre, livret, présentation, fiche de référence, exercice bilan, cinq problèmes, TD corrigé par niveau ; annales de la Banque PT corrigées, examens blancs chronométrés.

Site **100 % statique** (HTML, CSS, JavaScript), sans étape de compilation : compatible GitHub Pages tel quel.

## Mise en ligne sur GitHub Pages

1. Créer un dépôt sur GitHub (par exemple `le-colle`) et y déposer **le contenu de ce dossier** (avec le fichier `.nojekyll`).
   ```bash
   git init && git add . && git commit -m "Plateforme Le Collé"
   git branch -M main
   git remote add origin https://github.com/<compte>/le-colle.git
   git push -u origin main
   ```
2. Sur GitHub : *Settings → Pages → Build and deployment → Source : Deploy from a branch*, branche `main`, dossier `/ (root)`.
3. Le site est publié à l'adresse `https://<compte>.github.io/le-colle/` (une à deux minutes).

Tous les chemins sont relatifs : le site fonctionne dans un sous-dossier. Pour le tester en local, lancer un petit serveur (les corrections d'annales sont chargées par `fetch`) :
```bash
python3 -m http.server 8000   # puis ouvrir http://localhost:8000
```

> Un dépôt GitHub Pages est public. Les documents déposés (dont la fiche de révision du devoir) sont donc consultables par toute personne qui a le lien.

## Organisation

Deux filières totalement séparées : chacune a ses pages, ses données et ses documents, et peut évoluer seule.

```
index.html             accueil : choix de la filière
pt.html                filière PT : les chapitres, puis tous les documents à télécharger (#documents)
chapitre.html?id=…     PT : un chapitre (ressources, parcours d'entraînement en cinq étapes)
annales.html, annale.html?id=…, entrainement.html      PT
mp.html                filière MP : les ouvrages par discipline
ouvrage.html?id=…      MP : un ouvrage (présentation, livre complet, parties)
lecteur.html?doc=…     lecteur PDF commun (pdf.js, chargé seulement ici) : &page=, &mode=slides
data/pt/  docs/pt/  contenu/pt/   données, PDF et sources de la filière PT
data/mp/  docs/mp/                données et PDF de la filière MP
assets/                interface commune (css, js, KaTeX et pdf.js embarqués)
outils/verifier.js     contrôle : liens, pages, séparation PT/MP
outils/td/             génération des TD PT
```

Aucun PDF n'est chargé à l'ouverture d'une page : seulement dans le lecteur, ou au téléchargement. KaTeX n'est chargé que sur les pages PT qui contiennent des formules.

**Ajouter un ouvrage MP** : déposer le PDF dans `docs/mp/<discipline>/`, puis ajouter une entrée dans `data/mp/ouvrages.js` (document + ouvrage) ; les « parties » sont les signets de premier niveau du PDF, avec leur page.

## Les TD

Chaque chapitre PT a deux PDF dans `docs/pt/td/` : le TD (énoncés seuls, en quatre parties : applications directes, classiques et méthodes, synthèse, difficiles et type concours) et le livret de corrections. Les livres restent inchangés.

- Les énoncés et corrections des exercices du livre sont repris tels quels depuis ses sources ; les exemples du cours et les exercices complémentaires sont dans `outils/td/nouveaux_*.tex`, le plan dans `outils/td/meta.py`.
- `python3 outils/td/build_td.py` compile les six PDF et relève la page de chaque exercice ; `python3 outils/td/integrer.py` copie les PDF dans `docs/td/` et régénère `data/pt/exercices.js`, si bien que chaque lien « Énoncé » ou « Corrigé » du site ouvre le TD ou le livret à la bonne page. (Les chemins vers les sources des livres sont en tête de `build_td.py`.)

## Les exercices bilan

Un exercice de 10 à 15 minutes par chapitre, fait en début de séance sans document pour vérifier que le chapitre précédent est acquis. Source unique : `docs/pt/sources/exercices-bilan.tex`. `python3 outils/bilans/construire.py` compile un PDF par chapitre pour le site (`docs/pt/bilans/bilan-<chapitre>.pdf` : l'énoncé en page 1, puis le corrigé et la grille « notions évaluées et diagnostic ») et met à jour leur nombre de pages dans `data/pt/documents.js`. Il compile aussi, dans `outils/bilans/build/`, la version professeur (tous les chapitres) et la version élève (énoncés seuls), pour l'impression. Dans `data/pt/chapitres.js`, le champ `bilan` de chaque chapitre donne le document, la page du corrigé et la durée.

## Organisation d'une page de chapitre

Une seule liste de ressources, définie dans `ressourcesChapitre()` (`assets/js/app.js`) et réutilisée partout (page du chapitre, documents de l'accueil PT) : *Apprendre le cours* (livret, présentation, fiche), puis *S'entraîner* (exercice bilan, 5 problèmes, TD, corrections du TD). Chaque carte a une action de lecture et un lien de téléchargement du PDF. Viennent ensuite le parcours d'entraînement en cinq étapes, puis la navigation vers le chapitre précédent ou suivant.

## La sélection de 5 problèmes

Pour chaque chapitre PT, `docs/pt/selection/Selection_<chapitre>.pdf` réunit cinq problèmes à travailler après le cours (énoncés, une page d'indications, corrections). Le choix et les en-têtes sont dans `outils/td/selection.py`, les problèmes nouveaux ou adaptés d'annales dans `outils/td/selection.tex`. `python3 outils/td/build_selection.py` compile les cinq livrets, puis `python3 outils/td/integrer_selection.py` met à jour `data/pt/selection.js` (pages de chaque énoncé, indication et correction).

Les chapitres PT, dans l'ordre du parcours (qui suit les dépendances mathématiques) : 1 Algèbre linéaire (compléments de deuxième année), 2 Déterminants, 3 Réduction, 4 Équations différentielles, 5 Courbes paramétrées, 6 Propriétés métriques et enveloppes. Chaque chapitre a son livret, sa présentation (avec des exercices intégrés : une diapositive d'énoncé, puis une diapositive de correction), sa fiche, son exercice bilan, ses cinq problèmes, son TD et ses corrections (le chapitre 6 n'a pas encore de présentation : le livret et la fiche en tiennent lieu). Les PDF gardent leur numérotation interne (§1.1, théorème 1.3…), commune au livret, à la fiche, à la présentation et au TD ; le grand numéro de chapitre et l'onglet des livrets suivent l'ordre du site.

L'ordre des chapitres est celui du tableau `LC.chapitres` (`data/pt/chapitres.js`) ; `node outils/documents_maj.js` réécrit `data/pt/documents.js` dans ce même ordre (documents complets, puis chapitre par chapitre, sélections, TD).

**Livrets et présentations : individuels et complets.** Les sources (`docs/pt/sources/livre-*.tex`, `volume2-*.tex`, `presentation-*.tex`, `fiche-*.tex`) sont les seuls documents édités à la main. `python3 outils/livrets/construire.py` les compile tous, puis assemble à partir des PDF obtenus le **livret complet PT** (`docs/pt/livres/livret-complet-PT.pdf`) et les **présentations complètes PT** (animées et sans animations), avec sommaire et signets ; il met aussi à jour le nombre de pages dans `data/pt/documents.js`. Les documents complets ne sont donc jamais en retard sur les documents des chapitres : après toute modification d'un cours, on relance ce script, puis `outils/td/build_td.py`, `build_selection.py`, `integrer.py` et `integrer_selection.py` (les TD lisent les exercices et les numéros dans les livrets). Le thème commun des présentations récentes est dans `outils/presentations/theme.tex`.

Les questions d'annales sont indexées par chapitre et par notion dans `data/pt/annales-questions.js` (`python3 outils/annales_questions.py`, à relancer après l'ajout d'une annale).

## Ajouter du contenu

- **Un document PT** : déposer le PDF (et sa source) dans `docs/pt/`, puis ajouter une entrée dans `data/pt/documents.js`.
- **Un chapitre** : copier un bloc de `data/pt/chapitres.js` (sections du cours avec leurs numéros de page PDF, fiche, présentation, erreurs fréquentes, questions flash). Il apparaît automatiquement dans le menu, l'accueil et la recherche.
- **Un exercice** : une entrée dans `data/pt/exercices.js` (niveau 1 à 4, notions, prérequis, objectif, indication, page de l'énoncé et du corrigé).
- **Un sujet officiel** : une ligne `S(année, épreuve, rapport ?, corrigés, parties)` dans `data/pt/sujets.js` (parties : intitulé, thèmes de `LC.themes`, résumé). `node outils/verifier.js` contrôle les thèmes, les doublons et le rattachement des parties corrigées.
- **Un classique** : `[identifiant d'exercice du TD, nom d'usage]` dans `data/pt/classiques.js` (exercices d'entraînement Le Collé, jamais présentés comme des sujets de concours).
- **Une partie d'annale corrigée pas à pas** : une entrée dans `data/pt/annales.js` et un fichier `contenu/pt/annales/<id>.html` (modèle : un des fichiers existants ; formules entre `$…$` ou `\[…\]`).
- **Un examen blanc** : une entrée dans `data/pt/entrainement.js` (extraits d'annales, durée, barème).

Puis vérifier : `node outils/verifier.js`.

## Sources et droits

- Livres, fiches, présentation, exercices et corrections : © Le Collé — Ahmed Amine Ouqlani.
- Annales : sujets officiels de la Banque PT (Mathématiques A, B, C, sessions 2014 à 2026), **non hébergés ici** ; liens vers WikiPrépa (sujets, rapports du jury) et prepas.org (corrigés de l'UPS). Les résumés de parties, les résumés de questions et les corrections pas à pas sont rédigés par Le Collé.
- Mise en page inspirée du template *vCard — Personal portfolio* (codewithsadee, licence MIT).
- pdf.js (Mozilla, Apache 2.0) et KaTeX (MIT) sont embarqués dans `assets/vendor/` avec leurs licences.

## Niveau du chapitre « Équations différentielles » (PTSI / PT)

Le chapitre 4 est actuellement limité au **programme de première année (PTSI)** : premier ordre, second ordre à coefficients
constants. Le contenu de deuxième année (second ordre à coefficients continus, recollement, variation de la constante au second
ordre, séries entières) n'est pas supprimé : il est conservé dans des blocs `\ifPT … \fi` des sources, dans les plans `ED_PT`
(TD) et `_ED_PT` (sélection), en commentaire dans `data/pt/classiques.js`, et la fiche du chapitre de PT est dans
`outils/reserve-pt/chapitre-ed-pt.json`. Pour le réintroduire :

1. remplacer `\PTfalse` par `\PTtrue` dans `livre-equations-differentielles.tex`, `presentation-equations-differentielles.tex`,
   `fiche-equations-differentielles.tex` et `exercices-bilan.tex` (ou compiler avec `\def\VERSIONPT{}`) ;
2. mettre `PT = True` dans `outils/td/meta.py` ;
3. remettre l'entrée `ed` de `data/pt/chapitres.js` à partir de `outils/reserve-pt/chapitre-ed-pt.json` et les classiques en réserve ;
4. relancer la chaîne de construction (livrets, TD, sélection, intégration, bilans).

Avec `\PTtrue`, le livret, la présentation et la fiche sont identiques, au texte près, aux versions de PT d'avant la séparation.
