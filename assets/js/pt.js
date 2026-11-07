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
  ['Livrets des chapitres', ['livre-ed', 'livre-red', 'livre-det', 'livre-courbes', 'volume2']],
  ['Présentations des chapitres', ['presentation-ed', 'presentation-red', 'presentation-det', 'presentation-courbes']],
  ['Présentations sans animations', ['presentation-ed-statique', 'presentation-red-statique', 'presentation-det-statique', 'presentation-courbes-statique']],
  ['Fiches de référence', ['fiche-ed', 'fiche-red', 'fiche-determinants', 'fiche-courbes']],
  ['Sélections de 5 problèmes', ['selection-ed', 'selection-red', 'selection-determinants', 'selection-courbes', 'selection-metrique']],
  ['TD et corrections', ['td-ed', 'td-ed-corrections', 'td-red', 'td-red-corrections', 'td-determinants', 'td-determinants-corrections', 'td-courbes', 'td-courbes-corrections', 'td-metrique', 'td-metrique-corrections']],
  ['Autres', ['revision', 'archive']]
];
const estPres = id => doc(id).type === 'presentation' || /^presentations-/.test(id);
const ligneDoc = id => {
  const d = doc(id);
  const lire = estPres(id) ? slidesUrl(id, 1) : lecteurUrl(id, 1);
  return `<li class="row"><div class="main">${d.titre}<br><span class="tag">${d.sousTitre} · ${d.pages} pages</span></div>
    <div class="side"><a href="${lire}">Lire</a>${lienPdf(d)}${d.source ? `<a href="${d.source}" download>LaTeX</a>` : ''}</div></li>`;
};
const nDocs = GROUPES.reduce((t, g) => t + g[1].length, 0);

$('#contenu').innerHTML = `
  <h1>Mathématiques PT</h1>
  <p class="intro">Choisis un chapitre : sa page réunit son livret, sa présentation, sa fiche, les cinq problèmes, le TD et ses corrections. Les documents complets regroupent tous les chapitres.</p>

  <h2 id="complet">Tous les cours en un document</h2>
  <ul class="list">
    <li class="row"><div class="main">Livret complet PT<br><span class="tag">les livrets des 5 chapitres, avec sommaire et signets · ${doc('livret-pt').pages} pages</span></div>
      <div class="side"><a href="${lecteurUrl('livret-pt', 1)}">Lire</a>${lienPdf(doc('livret-pt'))}</div></li>
    <li class="row"><div class="main">Présentations complètes PT<br><span class="tag">les présentations des chapitres 1 à 4, avec sommaire et signets · sans animations : <a href="${slidesUrl('presentations-pt-statique', 1)}">lire</a>, ${lienPdf(doc('presentations-pt-statique'), 'PDF')}</span></div>
      <div class="side"><a href="${slidesUrl('presentations-pt', 1)}">Lire</a>${lienPdf(doc('presentations-pt'))}</div></li>
  </ul>
  <p class="muted">Le livret et la présentation de chaque chapitre sont sur la page du chapitre.</p>

  <h2 id="chapitres">Les chapitres</h2>
  <ol class="chapters">${chapitres}</ol>

  <h2 id="documents">Documents</h2>
  <details class="plus" id="docs"><summary>Tous les documents de la filière PT <span class="tag">(${nDocs})</span></summary>
    ${GROUPES.map(([t, ids]) => `<h3>${t}</h3><ul class="list">${ids.map(ligneDoc).join('')}</ul>`).join('')}
  </details>`;
if (location.hash === '#documents') $('#docs').open = true;
addEventListener('hashchange', () => { if (location.hash === '#documents') $('#docs').open = true; });
