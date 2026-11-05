/* Le Collé — liste des annales, par chapitre */
'use strict';

cadre('pt', 'annales');

const parChapitre = LC.chapitres.map(c => {
  const l = LC.annales.filter(a => a.chapitres[0] === c.id).sort((a, b) => b.annee - a.annee);
  if (!l.length) return '';
  return `<h2>${c.titre}</h2><ul class="list">${l.map(a => `<li class="row"><div class="main"><span class="num">${a.annee}</span><a href="annale.html?id=${a.id}">${a.titre}</a><br><span class="num"></span><span class="tag">${a.epreuve}, ${a.partie} · ${a.duree}</span></div></li>`).join('')}</ul>`;
}).join('');

$('#contenu').innerHTML = `
  <h1>Annales</h1>
  <p class="intro">Des extraits de sujets officiels de la Banque PT qui portent sur nos chapitres, chacun avec les méthodes à revoir, des indications et une correction détaillée.</p>
  ${parChapitre}
  <h2>D'où viennent ces sujets</h2>
  <p>Les épreuves de mathématiques de la Banque PT ont été parcourues de 2014 à 2026 ; seules les parties qui mobilisent nos chapitres sont retenues. Les sujets restent sur WikiPrépa (un lien est donné sur chaque page) ; les résumés et les corrections sont rédigés par Le Collé.</p>
  <details style="margin-top:12px"><summary class="muted" style="cursor:pointer">Sujets examinés mais écartés</summary><ul style="margin-top:8px">${LC.annalesEcartees.map(x => `<li>${x}</li>`).join('')}</ul></details>`;
renderMath($('#contenu'));
