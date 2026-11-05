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

```
index.html          accueil : chapitres, exercices, annales, entraînement, bibliothèque, parcours
chapitre.html?id=…  page d'un chapitre : cours, fiche, présentation, TD, annales, entraînement, ressources
annale.html?id=…    une annale : liens officiels, méthodes, indications, correction
lecteur.html?doc=…  lecteur PDF (pdf.js) : &page=, &mode=slides, &debut=&fin= (plage), &embed=1
data/               CONTENU : documents, chapitres, exercices, annales, entraînement
contenu/annales/    corrections des annales (HTML + formules LaTeX rendues par KaTeX)
docs/               PDF et sources LaTeX
assets/             interface : css/, js/, img/, vendor/ (pdf.js 3.11.174, KaTeX 0.16.9, embarqués)
outils/verifier.js  contrôle de cohérence des données
```

Le contenu pédagogique est entièrement dans `data/` et `contenu/` ; le code de l'interface dans `assets/js/`.

## Ajouter du contenu

- **Un document** : déposer le PDF (et sa source) dans `docs/`, puis ajouter une entrée dans `data/documents.js`.
- **Un chapitre** : copier un bloc de `data/chapitres.js` (sections du cours avec leurs numéros de page PDF, fiche, présentation, erreurs fréquentes, questions flash). Il apparaît automatiquement dans le menu, l'accueil et la recherche.
- **Un exercice** : une entrée dans `data/exercices.js` (niveau 1 à 4, notions, prérequis, objectif, indication, page de l'énoncé et du corrigé).
- **Une annale** : une entrée dans `data/annales.js` et un fichier `contenu/annales/<id>.html` (modèle : un des fichiers existants ; formules entre `$…$` ou `\[…\]`).
- **Un examen blanc** : une entrée dans `data/entrainement.js` (extraits d'annales, durée, barème).

Puis vérifier : `node outils/verifier.js`.

## Sources et droits

- Livres, fiches, présentation, exercices et corrections : © Le Collé — Ahmed Amine Ouqlani.
- Annales : sujets officiels de la Banque PT (épreuve de Mathématiques B), **non hébergés ici** ; liens vers WikiPrépa. Les résumés de questions et les corrections sont rédigés par Le Collé.
- Mise en page inspirée du template *vCard — Personal portfolio* (codewithsadee, licence MIT).
- pdf.js (Mozilla, Apache 2.0) et KaTeX (MIT) sont embarqués dans `assets/vendor/` avec leurs licences.
