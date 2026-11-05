/* Le Collé — accueil de la filière MP : les ouvrages, par discipline */
'use strict';
cadre('mp', 'ouvrages');
const disciplines = [...new Set(LC.ouvragesMP.map(o => o.discipline))];
$('#contenu').innerHTML = `
  <h1>Les ouvrages MP</h1>
  <p class="intro">Les ouvrages Le Collé de préparation à la filière MP. Chacun a sa page : présentation, livre complet, et accès direct à chacune de ses parties.</p>
  ${disciplines.map(d => `<h2>${d}</h2><ul class="list">${LC.ouvragesMP.filter(o => o.discipline === d).map(o => {
    const n = o.tomes.reduce((t, id) => t + doc(id).pages, 0);
    return `<li class="row"><div class="main"><a href="ouvrage.html?id=${o.id}">${o.titre}</a><br><span class="tag">${o.presentation}</span></div><div class="side tag">${o.tomes.length > 1 ? o.tomes.length + ' tomes · ' : ''}${n} p.</div></li>`;
  }).join('')}</ul>`).join('')}`;
