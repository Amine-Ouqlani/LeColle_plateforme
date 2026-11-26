// Réécrit data/pt/documents.js dans l'ordre du parcours (documents complets, puis chapitre par chapitre :
// livret, présentation, fiche, exercice bilan ; autres documents ; sélections ; TD en dernier, bloc régénéré
// par outils/td/integrer.py). Les nombres de pages sont relus dans les PDF par outils/livrets/construire.py.
// Usage : node outils/documents_maj.js
const fs = require('fs'), vm = require('vm');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync('data/pt/documents.js', 'utf8'), ctx);
vm.runInContext(fs.readFileSync('data/pt/chapitres.js', 'utf8'), ctx);
const D = ctx.LC.documents, CH = ctx.LC.chapitres;
const MAJ = '2026-11-11';

// nouveaux documents (le nombre de pages est corrigé par construire.py)
const nouveau = (id, o) => { if (!D[id]) { const { description, ...r } = o; D[id] = Object.assign(r, { pages: 1, version: 'v1', maj: MAJ, description }); } };
nouveau('livre-al', { titre: 'Algèbre linéaire', sousTitre: 'Chapitre 1 · livret : cours, méthodes, exercices corrigés', type: 'cours',
  fichier: 'docs/pt/livres/livre-algebre-lineaire.pdf', source: 'docs/pt/sources/livre-algebre-lineaire.tex',
  description: "Rappels de première année (rang, changement de base), produit et somme de sous-espaces, somme directe et base adaptée, projecteurs et symétries, hyperplans et systèmes linéaires, trace, sous-espaces stables et matrices par blocs. Exercices corrigés à la fin." });
nouveau('presentation-al', { titre: 'Présentation — Algèbre linéaire', sousTitre: 'Chapitre 1 · Support de séance · 4 exercices intégrés', type: 'presentation',
  fichier: 'docs/pt/presentations/presentation-algebre-lineaire.pdf', source: 'docs/pt/sources/presentation-algebre-lineaire.tex',
  description: "Les diapositives de la séance, avec 4 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)." });
nouveau('presentation-al-statique', { titre: 'Présentation — Algèbre linéaire (sans animations)', sousTitre: 'Une page par diapositive', type: 'presentation',
  fichier: 'docs/pt/presentations/presentation-algebre-lineaire-sans-animations.pdf', source: 'docs/pt/sources/presentation-algebre-lineaire.tex',
  description: "La même présentation, chaque diapositive dans son état final." });
nouveau('fiche-al', { titre: 'Fiche de référence — Algèbre linéaire', sousTitre: 'Chapitre 1 · imprimable', type: 'fiche',
  fichier: 'docs/pt/fiches/fiche-algebre-lineaire.pdf', source: 'docs/pt/sources/fiche-algebre-lineaire.tex',
  description: "Rappels, produit et somme de sous-espaces, projecteurs et symétries, hyperplans, trace, sous-espaces stables, choix de la méthode, pièges et résultats du TD." });
nouveau('fiche-metrique', { titre: 'Fiche de référence — Propriétés métriques et enveloppes', sousTitre: 'Chapitre 6 · imprimable', type: 'fiche',
  fichier: 'docs/pt/fiches/fiche-metrique-enveloppes.pdf', source: 'docs/pt/sources/fiche-metrique-enveloppes.tex',
  description: "Longueur et abscisse curviligne, repère de Frenet et courbure, rayon et centre de courbure, développée, enveloppes, choix de la méthode, pièges et résultats du TD." });

nouveau('livre-series', { titre: 'Séries numériques', sousTitre: 'Chapitre 7 · livret : cours, méthodes, exercices corrigés', type: 'cours',
  fichier: 'docs/pt/livres/livre-series.pdf', source: 'docs/pt/sources/livre-series.tex',
  description: "Rappels sur les suites (comparaison, développements limités), séries de référence (géométriques, télescopiques, exponentielle), séries à termes positifs (comparaison, équivalents, comparaison série-intégrale, Riemann, d'Alembert), convergence absolue, séries alternées, produit de Cauchy. Démonstrations, figures et exercices corrigés." });
nouveau('presentation-series', { titre: 'Présentation — Séries numériques', sousTitre: 'Chapitre 7 · Support de trois séances · 5 exercices intégrés', type: 'presentation',
  fichier: 'docs/pt/presentations/presentation-series.pdf', source: 'docs/pt/sources/presentation-series.tex',
  description: "Les diapositives de la séance, avec 5 exercices à chercher en direct : énoncé seul, puis correction sur la diapositive suivante (raisonnement, méthode, étapes)." });
nouveau('presentation-series-statique', { titre: 'Présentation — Séries numériques (sans animations)', sousTitre: 'Une page par diapositive', type: 'presentation',
  fichier: 'docs/pt/presentations/presentation-series-sans-animations.pdf', source: 'docs/pt/sources/presentation-series.tex',
  description: "La même présentation, chaque diapositive dans son état final." });
nouveau('fiche-series', { titre: 'Fiche de référence — Séries numériques', sousTitre: 'Chapitre 7 · imprimable', type: 'fiche',
  fichier: 'docs/pt/fiches/fiche-series.pdf', source: 'docs/pt/sources/fiche-series.tex',
  description: "Outils sur les suites, séries de référence, théorèmes pour les termes positifs, convergence absolue, séries alternées, produit de Cauchy, choix de la méthode, pièges et résultats du TD." });
nouveau('bilan-series', { titre: 'Exercice bilan — Séries numériques', sousTitre: 'Chapitre 7 · 15 min · énoncé, corrigé détaillé, notions évaluées', type: 'bilan',
  fichier: 'docs/pt/bilans/bilan-series.pdf', source: 'docs/pt/sources/exercices-bilan.tex',
  description: "Un exercice court qui reprend les notions essentielles du chapitre, à faire en début de séance sans document pour vérifier ce qui est acquis. Page 1 : l'énoncé ; ensuite : le corrigé et, pour chaque question, les notions testées et la lacune que révèle une erreur." });
nouveau('ent-red-corrige', { titre: 'Entraînement — Réduction : corrigé Le Collé', sousTitre: 'Banque PT 2018 et 2015, Mathématiques A, problèmes d\'algèbre · corrigé non officiel', type: 'devoir',
  fichier: 'docs/pt/examens/ent-red-corrige.pdf', source: 'docs/pt/sources/entrainement-reduction.tex',
  description: "Corrigés détaillés, rédigés par Le Collé (non officiels), des problèmes d'algèbre de la Banque PT 2018 (page 1) et 2015 (page 5), Mathématiques A : choix de la méthode, pièges, résultats à retenir, liens avec le DL 3. Calculs vérifiés par calcul formel." });

nouveau('ds3-2025-sujet', { titre: "Sujet de l'année dernière — DS 3 (1er décembre 2025)", sousTitre: 'Énoncé · sous-espaces stables, constante d\'Apéry', type: 'devoir',
  fichier: 'docs/pt/examens/ds3-2025-sujet.pdf', source: 'docs/pt/examens/ds3-2025-sujet.pdf',
  description: "Le devoir surveillé n° 3 de la classe, l'an dernier (lundi 1er décembre 2025). Exercice 1 : plans et droites stables d'un endomorphisme de R³. Exercice 2 : ζ(3), séries, intégrales généralisées, équation différentielle et séries entières." });
nouveau('ds3-2025-corrige', { titre: "Sujet de l'année dernière — DS 3 : corrigé Le Collé", sousTitre: 'Corrigé rédigé comme une copie de concours · non officiel', type: 'devoir',
  fichier: 'docs/pt/examens/ds3-2025-corrige.pdf', source: 'docs/pt/sources/ds3-2025-corrige.tex',
  description: "Corrigé complet du DS 3 du 1er décembre 2025, rédigé par Le Collé (non officiel) : Exercice 1 page 1, Exercice 2 page 5. Rédaction de copie, sans commentaires de méthode." });

// titres et sous-titres : numéros de chapitre du nouvel ordre
const num = Object.fromEntries(CH.map(c => [c.id, c.num]));
D['livre-red'].titre = 'Réduction';
D['livre-red'].description = "Éléments propres, polynôme caractéristique, diagonalisation et ses applications (puissances, suites, équations matricielles), trigonalisation. S'appuie sur les chapitres Algèbre linéaire et Déterminants. Exercices corrigés à la fin.";
D['presentation-red'].titre = 'Présentation — Réduction';
D['presentation-red'].sousTitre = 'Chapitre 3 · Support de deux séances · 6 exercices intégrés';
D['presentation-red'].description = D['presentation-red'].description.replace('9 exercices', '6 exercices');
D['presentation-red-statique'].titre = 'Présentation — Réduction (sans animations)';
D['fiche-red'].titre = 'Fiche de référence — Réduction';
D['fiche-red'].description = "Éléments propres, polynôme caractéristique, critères de diagonalisation, applications, trigonalisation, pièges et résultats du TD.";
D['livret-pt'].sousTitre = "Tous les cours, dans l'ordre des chapitres 1 à 7";
D['livret-pt'].description = "Les livrets de tous les chapitres réunis en un seul PDF, avec un sommaire et des signets : algèbre linéaire, déterminants, réduction, équations différentielles, courbes paramétrées, propriétés métriques, séries numériques. Assemblé automatiquement à partir des livrets individuels (outils/livrets/construire.py).";
D['presentations-pt'].sousTitre = 'Toutes les présentations (chapitres 1 à 5 et 7)';
D['volume2'].sousTitre = D['volume2'].sousTitre.replace(/Chapitre \d/, 'Chapitre ' + num.metrique);
const doc2chap = {};
CH.forEach(c => {
  [c.cours.doc, c.fiche && c.fiche.doc, c.presentation && c.presentation.doc, c.presentation && c.presentation.statique.doc, c.bilan && c.bilan.doc]
    .filter(Boolean).forEach(id => { doc2chap[id] = c; });
});
for (const [id, c] of Object.entries(doc2chap)) {
  const d = D[id];
  if (/^Chapitre \d/.test(d.sousTitre)) d.sousTitre = d.sousTitre.replace(/^Chapitre \d/, 'Chapitre ' + c.num);
}

// ordre d'écriture
const ordre = ['livret-pt', 'presentations-pt', 'presentations-pt-statique'];
const vu = new Set(ordre);
const groupes = [['Documents complets', ordre.slice()]];
CH.forEach(c => {
  const ids = [c.cours.doc, c.presentation && c.presentation.doc, c.presentation && c.presentation.statique.doc, c.fiche && c.fiche.doc, c.bilan && c.bilan.doc].filter(Boolean);
  ids.forEach(i => vu.add(i));
  groupes.push([`Chapitre ${c.num} — ${c.titre}`, ids]);
});
const autres = ['revision', 'dl3', 'eb-al-det-sujet', 'eb-al-det-corrige', 'ent-red-corrige', 'ds3-2025-sujet', 'ds3-2025-corrige', 'archive']; autres.forEach(i => vu.add(i)); groupes.push(['Autres documents', autres]);
const sel = Object.keys(D).filter(k => k.startsWith('selection-'));
sel.forEach(i => vu.add(i)); groupes.push(['Sélections de 5 problèmes (générées par td/integrer_selection.py)', CH.map(c => 'selection-' + c.id).filter(k => D[k])]);
const td = Object.keys(D).filter(k => !vu.has(k));
let out = fs.readFileSync('data/pt/documents.js', 'utf8').split('LC.documents = {')[0] + 'LC.documents = {';
const ecrire = (id) => '\n  ' + JSON.stringify(id) + ': ' + JSON.stringify(D[id], null, 4).replace(/\n}/, '\n  }') + ',';
for (const [titre, ids] of groupes) {
  out += `\n  /* ---- ${titre} ---- */`;
  ids.forEach(id => { if (!D[id]) throw new Error('document inconnu ' + id); out += ecrire(id); });
}
out += '\n  /* ---- TD (générés par td/build_td.py) ---- */';
td.forEach(id => { out += ecrire(id); });
out = out.replace(/,$/, '') + '\n};\n';
fs.writeFileSync('data/pt/documents.js', out);
console.log(Object.keys(D).length, 'documents ; TD :', td.join(' '));
