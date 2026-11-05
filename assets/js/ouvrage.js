/* Le Collé — page d'un ouvrage MP : présentation, livre complet, parties */
'use strict';
const O = LC.ouvragesMP.find(o => o.id === params.get('id')) || LC.ouvragesMP[0];
cadre('mp', 'ouvrages');
document.title = `${O.titre} — Le Collé MP`;
const lire = (id, page) => doc(id).type === 'presentation' ? slidesUrl(id, page) : lecteurUrl(id, page);
const tome = id => {
  const d = doc(id);
  return `${O.tomes.length > 1 ? `<h2 id="${id}">${d.titre}</h2><p class="muted">${d.sousTitre}</p>` : '<h2>Le livre</h2>'}
  <p>${d.description}</p>
  <p class="links" style="margin-top:10px"><a href="${lire(id, 1)}">Lire ${d.type === 'presentation' ? 'la présentation' : 'le livre complet'}</a>${lienPdf(d, 'Télécharger le PDF')}<span class="tag">${d.pages} pages</span></p>
  ${d.parties.length ? `<h3>${d.type === 'presentation' ? 'Plan' : 'Parties'}</h3><ul class="list">${d.parties.map((p, i) => `<li class="row"><div class="main"><span class="num">${i + 1}</span><a href="${lire(id, p.page)}">${esc(p.titre)}</a></div><div class="side tag">p. ${p.page}</div></li>`).join('')}</ul>` : ''}`;
};
$('#contenu').innerHTML = `
  <p class="kicker"><a href="mp.html">Ouvrages MP</a> · ${O.discipline}</p>
  <h1>${O.titre}</h1>
  <p class="intro">${O.presentation}</p>
  ${O.tomes.length > 1 ? `<nav class="toc" aria-label="Tomes">${O.tomes.map(id => `<a href="#${id}">${doc(id).titre}</a>`).join('')}</nav>` : ''}
  ${O.tomes.map(tome).join('')}`;
