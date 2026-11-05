/* Le Collé — page d'un chapitre : tout sur une seule page */
'use strict';

const C = chap(params.get('id')) || LC.chapitres[0];
cadre('chapitres');
document.title = `${C.titre} — Le Collé`;

const EXOS = LC.exercices.filter(e => e.chapitre === C.id);
const ANNS = LC.annales.filter(a => a.chapitres.includes(C.id)).sort((a, b) => b.annee - a.annee);
const SUJETS = LC.entrainement.filter(s => s.chapitres.includes(C.id));
const coursDoc = C.cours.doc;

/* -------- cours */
const cours = `<ul class="list">${C.cours.sections.map(s => `<li class="row"><div class="main"><span class="num">${s.num}</span><a href="${lecteurUrl(coursDoc, s.page)}">${s.titre}</a></div></li>`).join('')}
  <li class="row"><div class="main"><span class="num"></span><a href="${lecteurUrl(coursDoc, C.cours.corriges.debut)}">Corrigés des exercices</a></div></li></ul>
  <p class="muted" style="margin-top:10px">${doc(coursDoc).titre} · <a href="${doc(coursDoc).fichier}" download>télécharger le PDF</a></p>`;

/* -------- fiche et présentation */
const fichePres = C.fiche ? `
  <p><a href="${lecteurUrl('fiche', C.fiche.debut)}">Fiche de référence</a> — pages ${C.fiche.debut} à ${C.fiche.fin} : définitions, théorèmes, formules, méthodes et pièges, à imprimer. <a href="${doc('fiche').fichier}" download>PDF</a></p>
  <p><a href="${slidesUrl('presentation', C.presentation.debut)}">Présentation du cours</a> — diapositive par diapositive, comme en séance. Aussi <a href="${slidesUrl('presentationStatique', C.presentation.statique.debut)}">sans animations</a>.</p>`
  : `<p class="muted">Pas encore de fiche ni de présentation pour ce chapitre : le <a href="${lecteurUrl(coursDoc, 13)}">résumé des méthodes du volume 2</a> en tient lieu.</p>`;

/* -------- TD, regroupés par niveau */
const ligneExo = e => {
  const origine = e.origine === 'td' ? `TD ${e.td}` : e.origine === 'devoir' ? 'devoir' : '';
  return `<li><div class="row"><div class="main"><details><summary><span class="num">${e.num}</span>${e.titre}${origine ? ` <span class="tag">· ${origine}</span>` : ''}${e.hp ? ' <span class="tag">· hors programme</span>' : ''}</summary>
    <div class="detail"><p><b>Objectif.</b> ${e.objectifs}</p><p><b>Notions.</b> ${e.notions.join(', ')}.</p><p><b>Prérequis.</b> ${e.prerequis.join(' ; ')}.</p><p><b>Indication.</b> ${e.indication}</p></div></details></div>
    <div class="side ex"><a href="${lecteurUrl(e.enonce.doc, e.enonce.page)}">Énoncé</a><a href="${lecteurUrl(e.corrige.doc, e.corrige.page)}">Corrigé</a></div></div></li>`;
};
const td = [1, 2, 3, 4].map(n => {
  const cle = e => e.num.split('.').map(Number); const l = EXOS.filter(e => e.niveau === n).sort((a, b) => cle(a)[0] - cle(b)[0] || cle(a)[1] - cle(b)[1]);
  return l.length ? `<h3>${LC.niveaux[n].nom}</h3><ul class="list">${l.map(ligneExo).join('')}</ul>` : '';
}).join('');

/* -------- annales et entraînement */
const annales = ANNS.length ? `<ul class="list">${ANNS.map(a => `<li class="row"><div class="main"><span class="num">${a.annee}</span><a href="annale.html?id=${a.id}">${a.titre}</a><br><span class="num"></span><span class="tag">${a.concours}, ${a.epreuve}, ${a.partie}</span></div></li>`).join('')}</ul>` : '<p class="muted">Aucune annale pour ce chapitre.</p>';
const sujets = SUJETS.length ? `<ul class="list">${SUJETS.map(s => `<li class="row"><div class="main"><a href="entrainement.html#${s.id}">${s.titre}</a></div><div class="side tag">${dureeTexte(s.duree)}</div></li>`).join('')}</ul>` : '';

/* -------- révision */
const revision = `
  <h3>Questions rapides</h3>
  <div class="qa">${C.flash.map(f => `<details><summary>${f.q}</summary><p>${f.r}</p></details>`).join('')}</div>
  <h3>Erreurs fréquentes</h3>
  <ul>${C.erreurs.map(x => `<li>${x}</li>`).join('')}</ul>
  <h3>Prérequis</h3>
  <ul>${C.prerequis.map(x => `<li>${x}</li>`).join('')}</ul>
  ${C.revision ? `<h3>Fiche de révision du devoir</h3><p>Le devoir surveillé de courbes, question par question : ce qu'il fallait savoir, la méthode et la correction. <a href="${lecteurUrl('revision', 1)}">Lire la fiche</a> · <a href="${doc('revision').fichier}" download>PDF</a></p>` : ''}`;

const i = LC.chapitres.indexOf(C), prev = LC.chapitres[i - 1], next = LC.chapitres[i + 1];

$('#contenu').innerHTML = `
  <p class="kicker"><a href="index.html">Chapitres</a> · ${C.num}</p>
  <h1>${C.titre}</h1>
  <p class="intro">${C.accroche}</p>
  <nav class="toc" aria-label="Sur cette page"><a href="#cours">Cours</a><a href="#fiche">Fiche et présentation</a><a href="#td">TD</a><a href="#annales">Annales</a><a href="#revision">Réviser</a></nav>

  <h2 id="cours">Cours</h2>${cours}
  <h2 id="fiche">Fiche et présentation</h2>${fichePres}
  <h2 id="td">TD</h2>
  <p class="muted">Cherche l'exercice avant d'ouvrir le corrigé. Clique sur un titre pour voir l'objectif et une indication.</p>${td}
  <h2 id="annales">Annales</h2>${annales}
  ${sujets ? `<h2 id="entrainement">Sujets d'entraînement</h2>${sujets}` : ''}
  <h2 id="revision">Réviser</h2>${revision}

  <nav class="pager">${prev ? `<a href="chapitre.html?id=${prev.id}">← ${prev.titre}</a>` : '<span></span>'}${next ? `<a href="chapitre.html?id=${next.id}">${next.titre} →</a>` : ''}</nav>`;
renderMath($('#contenu'));

/* ancres (y compris les anciennes : #presentation, #ressources, #ensemble) */
const alias = { presentation: 'fiche', ressources: 'revision', ensemble: '' };
const h = location.hash.slice(1);
const cible = h in alias ? alias[h] : h;
const exo = params.get('exo');
if (exo) { const e = EXOS.find(x => x.id === exo); if (e) setTimeout(() => { const d = $$('#contenu details').find(x => x.textContent.includes(e.titre)); if (d) { d.open = true; d.scrollIntoView({ block: 'center' }); } }, 0); }
else if (cible) setTimeout(() => document.getElementById(cible)?.scrollIntoView(), 0);
