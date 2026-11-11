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
D['livret-pt'].sousTitre = "Tous les cours, dans l'ordre des chapitres 1 à 6";
D['livret-pt'].description = "Les livrets de tous les chapitres réunis en un seul PDF, avec un sommaire et des signets : algèbre linéaire, déterminants, réduction, équations différentielles, courbes paramétrées, propriétés métriques. Assemblé automatiquement à partir des livrets individuels (outils/livrets/construire.py).";
D['presentations-pt'].sousTitre = 'Toutes les présentations des chapitres 1 à 5';
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
const autres = ['revision', 'archive']; autres.forEach(i => vu.add(i)); groupes.push(['Autres documents', autres]);
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
