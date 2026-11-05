/* Le Collé — accueil */
'use strict';

/* anciennes adresses (onglets) */
const ancien = { annales: 'annales.html', entrainement: 'entrainement.html', bibliotheque: 'index.html#documents' }[location.hash.slice(1)];
if (ancien) location.replace(ancien);

cadre('chapitres');

const chapitres = LC.chapitres.map(c => {
  const nTd = LC.exercices.filter(e => e.chapitre === c.id).length;
  const nAnn = LC.annales.filter(a => a.chapitres.includes(c.id)).length;
  const liens = [
    `<a href="chapitre.html?id=${c.id}#cours">Cours</a>`,
    c.fiche && `<a href="${lecteurUrl('fiche', c.fiche.debut)}">Fiche</a>`,
    c.presentation && `<a href="${slidesUrl('presentation', c.presentation.debut)}">Présentation</a>`,
    `<a href="chapitre.html?id=${c.id}#td">TD (${nTd})</a>`,
    `<a href="chapitre.html?id=${c.id}#annales">Annales (${nAnn})</a>`
  ].filter(Boolean).join('');
  return `<li><span class="n">${c.num}</span><div>
    <h2><a href="chapitre.html?id=${c.id}">${c.titre}</a></h2>
    <p>${c.accroche}</p>
    <p class="links">${liens}</p></div></li>`;
}).join('');

const ordre = ['livre', 'volume2', 'fiche', 'presentation', 'presentationStatique', 'revision', 'archive'];
const documents = ordre.map(id => {
  const d = doc(id);
  const lire = d.type === 'presentation' ? slidesUrl(id, 1) : lecteurUrl(id, 1);
  return `<li class="row"><div class="main">${d.titre}<br><span class="tag">${d.sousTitre} · ${d.pages} pages</span></div>
    <div class="side"><a href="${lire}">Lire</a><a href="${d.fichier}" download>PDF</a><a href="${d.source}" download>LaTeX</a></div></li>`;
}).join('');

$('#contenu').innerHTML = `
  <h1>Mathématiques PT</h1>
  <p class="intro">Les cours, fiches, présentations, TD corrigés et annales préparés pendant les séances, organisés par chapitre.</p>

  <h2 id="chapitres">Chapitres</h2>
  <ol class="chapters">${chapitres}</ol>

  <h2 id="documents">Documents</h2>
  <ul class="list">${documents}</ul>`;
renderMath($('#contenu'));
