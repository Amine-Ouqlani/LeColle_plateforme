/* Le Collé — accueil de la filière PT */
'use strict';

/* anciennes adresses (onglets) */
const ancien = { annales: 'annales.html', entrainement: 'entrainement.html', bibliotheque: 'pt.html#documents' }[location.hash.slice(1)];
if (ancien) location.replace(ancien);

cadre('pt', 'chapitres');

const chapitres = LC.chapitres.map(c => `<li><span class="n">${c.num}</span><div>
    <h2><a href="chapitre.html?id=${c.id}">${c.titre}</a></h2>
    <p>${c.accroche}</p>
    <p class="links"><a href="chapitre.html?id=${c.id}#cours">Le cours</a><a href="chapitre.html?id=${c.id}#etape-3">Les 5 problèmes</a><a href="chapitre.html?id=${c.id}#entrainement">S'entraîner</a></p></div></li>`).join('');

const GROUPES = [
  ['Livres', ['livre', 'volume2']],
  ['Fiches de référence', ['fiche-determinants', 'fiche-courbes']],
  ['Présentation', ['presentation', 'presentationStatique']],
  ['Sélections de 5 problèmes', ['selection-determinants', 'selection-courbes', 'selection-metrique']],
  ['TD et corrections', ['td-determinants', 'td-determinants-corrections', 'td-courbes', 'td-courbes-corrections', 'td-metrique', 'td-metrique-corrections']],
  ['Autres', ['revision', 'archive']]
];
const ligneDoc = id => {
  const d = doc(id);
  const lire = d.type === 'presentation' ? slidesUrl(id, 1) : lecteurUrl(id, 1);
  return `<li class="row"><div class="main">${d.titre}<br><span class="tag">${d.sousTitre} · ${d.pages} pages</span></div>
    <div class="side"><a href="${lire}">Lire</a>${lienPdf(d)}<a href="${d.source}" download>LaTeX</a></div></li>`;
};
const nDocs = GROUPES.reduce((t, g) => t + g[1].length, 0);

$('#contenu').innerHTML = `
  <h1>Mathématiques PT</h1>
  <p class="intro">Choisis un chapitre. Chaque chapitre réunit le cours (livre, fiche, présentation) et un parcours d'entraînement en cinq étapes, des applications directes aux sujets de concours.</p>

  <h2 id="chapitres" class="sr-only">Chapitres</h2>
  <ol class="chapters">${chapitres}</ol>

  <h2 id="documents">Documents</h2>
  <details class="plus" id="docs"><summary>Tous les documents de la filière PT <span class="tag">(${nDocs})</span></summary>
    ${GROUPES.map(([t, ids]) => `<h3>${t}</h3><ul class="list">${ids.map(ligneDoc).join('')}</ul>`).join('')}
  </details>`;
if (location.hash === '#documents') $('#docs').open = true;
addEventListener('hashchange', () => { if (location.hash === '#documents') $('#docs').open = true; });
