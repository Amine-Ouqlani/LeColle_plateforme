# Le Collé — plateforme de mathématiques PT

Espace de travail de l'élève : cours complets, fiche de référence, présentation, TD corrigés par niveau, annales de la Banque PT corrigées, examens blancs chronométrés.

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
pt.html                filière PT : chapitres et documents
chapitre.html?id=…     PT : un chapitre (ressources, cours, TD, annales, révision)
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

## La sélection de 5 problèmes

Pour chaque chapitre PT, `docs/pt/selection/Selection_<chapitre>.pdf` réunit cinq problèmes à travailler après le cours (énoncés, une page d'indications, corrections). Le choix et les en-têtes sont dans `outils/td/selection.py`, les problèmes nouveaux ou adaptés d'annales dans `outils/td/selection.tex`. `python3 outils/td/build_selection.py` compile les trois livrets, puis `python3 outils/td/integrer_selection.py` met à jour `data/pt/selection.js` (pages de chaque énoncé, indication et correction).

Les questions d'annales sont indexées par chapitre et par notion dans `data/pt/annales-questions.js` (`python3 outils/annales_questions.py`, à relancer après l'ajout d'une annale).

## Ajouter du contenu

- **Un document PT** : déposer le PDF (et sa source) dans `docs/pt/`, puis ajouter une entrée dans `data/pt/documents.js`.
- **Un chapitre** : copier un bloc de `data/pt/chapitres.js` (sections du cours avec leurs numéros de page PDF, fiche, présentation, erreurs fréquentes, questions flash). Il apparaît automatiquement dans le menu, l'accueil et la recherche.
- **Un exercice** : une entrée dans `data/pt/exercices.js` (niveau 1 à 4, notions, prérequis, objectif, indication, page de l'énoncé et du corrigé).
- **Une annale** : une entrée dans `data/pt/annales.js` et un fichier `contenu/pt/annales/<id>.html` (modèle : un des fichiers existants ; formules entre `$…$` ou `\[…\]`).
- **Un examen blanc** : une entrée dans `data/pt/entrainement.js` (extraits d'annales, durée, barème).

Puis vérifier : `node outils/verifier.js`.

## Sources et droits

- Livres, fiches, présentation, exercices et corrections : © Le Collé — Ahmed Amine Ouqlani.
- Annales : sujets officiels de la Banque PT (épreuve de Mathématiques B), **non hébergés ici** ; liens vers WikiPrépa. Les résumés de questions et les corrections sont rédigés par Le Collé.
- Mise en page inspirée du template *vCard — Personal portfolio* (codewithsadee, licence MIT).
- pdf.js (Mozilla, Apache 2.0) et KaTeX (MIT) sont embarqués dans `assets/vendor/` avec leurs licences.
