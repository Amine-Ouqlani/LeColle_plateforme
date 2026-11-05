/* Le Collé — accueil de la filière PT */
'use strict';

/* anciennes adresses (onglets) */
const ancien = { annales: 'annales.html', entrainement: 'entrainement.html', bibliotheque: 'pt.html#documents' }[location.hash.slice(1)];
if (ancien) location.replace(ancien);

cadre('pt', 'chapitres');

const chapitres = LC.chapitres.map(c => {
  const nTd = LC.exercices.filter(e => e.chapitre === c.id).length;
  const nAnn = LC.annales.filter(a => a.chapitres.includes(c.id)).length;
  const liens = [
    `<a href="chapitre.html?id=${c.id}#cours">Livre</a>`,
    c.fiche && `<a href="${lecteurUrl(c.fiche.doc, 1)}">Fiche</a>`,
    c.presentation && `<a href="${slidesUrl('presentation', c.presentation.debut)}">Présentation</a>`,
    c.td ? `<a href="${lecteurUrl(c.td.doc, 1)}">TD (${nTd})</a>` : `<a href="chapitre.html?id=${c.id}#td">TD (${nTd})</a>`,
    c.td && `<a href="${lecteurUrl(c.td.corrections, 1)}">Corrections</a>`,
    `<a href="chapitre.html?id=${c.id}#annales">Annales (${nAnn})</a>`
  ].filter(Boolean).join('');
  return `<li><span class="n">${c.num}</span><div>
    <h2><a href="chapitre.html?id=${c.id}">${c.titre}</a></h2>
    <p>${c.accroche}</p>
    <p class="links">${liens}</p></div></li>`;
}).join('');

const ordre = ['livre', 'volume2', 'td-determinants', 'td-determinants-corrections', 'td-courbes', 'td-courbes-corrections', 'td-metrique', 'td-metrique-corrections', 'fiche-determinants', 'fiche-courbes', 'presentation', 'presentationStatique', 'revision', 'archive'];
const documents = ordre.map(id => {
  const d = doc(id);
  const lire = d.type === 'presentation' ? slidesUrl(id, 1) : lecteurUrl(id, 1);
  return `<li class="row"><div class="main">${d.titre}<br><span class="tag">${d.sousTitre} · ${d.pages} pages</span></div>
    <div class="side"><a href="${lire}">Lire</a>${lienPdf(d)}<a href="${d.source}" download>LaTeX</a></div></li>`;
}).join('');

$('#contenu').innerHTML = `
  <h1>Mathématiques PT</h1>
  <p class="intro">Le travail des séances, organisé par chapitre : livre complet, fiche de référence, présentation, TD indépendant et ses corrections, annales et examens blancs.</p>

  <h2 id="chapitres">Chapitres</h2>
  <ol class="chapters">${chapitres}</ol>

  <h2 id="documents">Documents</h2>
  <ul class="list">${documents}</ul>`;
renderMath($('#contenu'));
