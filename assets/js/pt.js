/* Le Collé — accueil de la filière PT : les chapitres, puis tous les documents à télécharger */
'use strict';

/* anciennes adresses (onglets) */
const ancien = { annales: 'annales.html', entrainement: 'entrainement.html', bibliotheque: 'pt.html#documents' }[location.hash.slice(1)];
if (ancien) location.replace(ancien);

cadre('pt', 'chapitres');

/* les chapitres : la page du chapitre, et les trois accès les plus utilisés */
const chapitres = LC.chapitres.map(c => {
  const R = ressourcesChapitre(c);
  const acces = ['livret', 'fiche', 'bilan', 'problemes'].map(k => R.find(r => r.cle === k)).filter(Boolean)
    .map(r => `<a href="chapitre.html?id=${c.id}#res-${r.cle}">${r.nom}</a>`).join('');
  return `<li><span class="n">${c.num}</span><div>
    <h2><a href="chapitre.html?id=${c.id}">${c.titre}</a></h2>
    <p>${c.accroche}</p>
    <p class="links"><a href="chapitre.html?id=${c.id}"><b>Ouvrir le chapitre →</b></a>${acces}</p></div></li>`;
}).join('');

/* documents : un PDF par ressource et par chapitre, dans l'ordre des pages de chapitre */
const pdf = (id, nom) => { const d = doc(id); return `<a href="${d.fichier}" download="${nomFichier(d)}" title="${esc(d.titre)} · ${d.pages} pages">${nom}</a>`; };
const parChapitre = LC.chapitres.map(c => `<li><span class="n">${c.num}</span><div>
    <a class="t" href="chapitre.html?id=${c.id}#ressources">${c.titre}</a>
    <p class="dl-chips">${ressourcesChapitre(c).map(r => pdf(r.doc, r.court || r.nom)).join('')}</p></div></li>`).join('');

const ligneDoc = id => {
  const d = doc(id);
  const lire = d.type === 'presentation' || /^presentations-/.test(id) ? slidesUrl(id, 1) : lecteurUrl(id, 1);
  return `<li class="row"><div class="main">${d.titre}<br><span class="tag">${d.sousTitre} · ${d.pages} pages</span></div>
    <div class="side"><a href="${lire}">Lire</a>${lienPdf(d)}</div></li>`;
};
const statiques = LC.chapitres.filter(c => c.presentation).map(c => c.presentation.statique.doc);
const sources = [...new Set(Object.values(LC.documents).filter(d => d.source).map(d => d.source))];

$('#contenu').innerHTML = `
  <h1>Mathématiques PT</h1>
  <p class="intro">Chaque chapitre a sa page : le cours (livret, présentation, fiche), puis les exercices pour s'entraîner (exercice bilan, cinq problèmes, TD corrigé). Ouvre le chapitre que tu travailles.</p>

  <h2 id="chapitres">Les chapitres</h2>
  <ol class="chapters">${chapitres}</ol>

  <h2 id="documents">Documents à télécharger</h2>
  <p class="muted">Tous les PDF de la filière. Pour les lire en ligne, passe par la page du chapitre.</p>

  <h3>Tous les chapitres en un document</h3>
  <ul class="list">${['livret-pt', 'presentations-pt', 'presentations-pt-statique'].map(ligneDoc).join('')}</ul>

  <h3>Par chapitre</h3>
  <ol class="dl-chap">${parChapitre}</ol>

  <details class="plus" id="autres"><summary>Autres documents <span class="tag">(${statiques.length + 2})</span></summary>
    <ul class="list">${statiques.map(ligneDoc).join('')}${['revision', 'archive'].map(ligneDoc).join('')}</ul>
  </details>
  <details class="plus"><summary>Sources LaTeX <span class="tag">(${sources.length})</span></summary>
    <ul class="list">${sources.map(s => `<li class="row"><div class="main"><a href="${s}" download>${s.split('/').pop()}</a></div></li>`).join('')}</ul>
  </details>`;
if (location.hash) setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView(), 0);
