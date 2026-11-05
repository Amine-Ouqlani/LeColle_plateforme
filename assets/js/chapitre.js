/* Le Collé — page d'un chapitre : tout sur une seule page */
'use strict';

const C = chap(params.get('id')) || LC.chapitres[0];
cadre('pt', 'chapitres');
document.title = `${C.titre} — Le Collé`;

const EXOS = LC.exercices.filter(e => e.chapitre === C.id);
const ANNS = LC.annales.filter(a => a.chapitres.includes(C.id)).sort((a, b) => b.annee - a.annee);
const SUJETS = LC.entrainement.filter(s => s.chapitres.includes(C.id));
const coursDoc = C.cours.doc;

/* -------- cours */
const cours = `<ul class="list">${C.cours.sections.map(s => `<li class="row"><div class="main"><span class="num">${s.num}</span><a href="${lecteurUrl(coursDoc, s.page)}">${s.titre}</a></div></li>`).join('')}
  <li class="row"><div class="main"><span class="num"></span><a href="${lecteurUrl(coursDoc, C.cours.corriges.debut)}">Corrigés des exercices du livre</a></div></li></ul>`;

/* -------- ressources du chapitre */
const ligneRes = (titre, desc, liens) => `<li class="row"><div class="main">${titre}<br><span class="tag">${desc}</span></div><div class="side">${liens}</div></li>`;
const lienDoc = (id, page, slides) => `<a href="${slides ? slidesUrl(id, page) : lecteurUrl(id, page)}">Lire</a>${lienPdf(doc(id))}`;
const T = C.td;
const ressources = `<ul class="list">
  ${ligneRes('Livre complet', `${doc(coursDoc).titre} : cours, exemples, exercices et corrigés · ${doc(coursDoc).pages} pages`, lienDoc(coursDoc, C.cours.debut))}
  ${C.fiche ? ligneRes(doc(C.fiche.doc).titre, `${doc(C.fiche.doc).description} · ${doc(C.fiche.doc).pages} pages, à imprimer`, lienDoc(C.fiche.doc, 1))
            : ligneRes('Fiche de référence', 'pas encore disponible : le résumé des méthodes du volume 2 en tient lieu', `<a href="${lecteurUrl(coursDoc, 13)}">Lire</a>`)}
  ${C.presentation ? ligneRes('Présentation du cours', `diapositive par diapositive, comme en séance (<a href="${slidesUrl('presentationStatique', C.presentation.statique.debut)}">version sans animations</a>)`, lienDoc('presentation', C.presentation.debut, true))
            : ligneRes('Présentation du cours', 'pas encore disponible pour ce chapitre', '')}
  ${T ? ligneRes('TD complet', `${EXOS.length} exercices en quatre parties, sans les corrections · ${doc(T.doc).pages} pages`, lienDoc(T.doc, 1)) : ''}
  ${T ? ligneRes('Corrections du TD', `corrections détaillées, mêmes numéros · ${doc(T.corrections).pages} pages`, lienDoc(T.corrections, 1)) : ''}
  ${ligneRes('Annales et sujets supplémentaires', `${ANNS.length} extraits d'annales corrigés${SUJETS.length ? `, ${SUJETS.length} sujets chronométrés` : ''}`, `<a href="#annales">Voir</a>`)}
</ul>`;

/* -------- TD, par partie ; chaque exercice ouvre le TD (et non le livre) à sa page */
const dots = n => '●'.repeat(n) + '○'.repeat(5 - n);
const ORIG = { lecolle: 'livre', exemple: 'exemple du cours', devoir: 'devoir type', complementaire: 'complémentaire' };
const ligneExo = e => {
  const origine = e.origine === 'td' ? `TD ${e.td}` : ORIG[e.origine] || '';
  const det = [`<p><b>Objectif.</b> ${e.objectifs}</p>`, `<p><b>Notions.</b> ${e.notions.join(', ')}.</p>`,
    e.prerequis && e.prerequis.length ? `<p><b>Prérequis.</b> ${e.prerequis.join(' ; ')}.</p>` : '',
    `<p><b>Indication.</b> ${e.indication}</p>`, `<p class="tag">${e.provenance}</p>`].join('');
  return `<li><div class="row"><div class="main"><details><summary><span class="num">${e.num}</span>${e.titre} <span class="tag">· ${origine}${e.hp ? ' · hors programme' : ''} · <span title="difficulté ${e.difficulte}/5" aria-label="difficulté ${e.difficulte} sur 5">${dots(e.difficulte)}</span></span></summary>
    <div class="detail">${det}</div></details></div>
    <div class="side ex"><a href="${lecteurUrl(e.enonce.doc, e.enonce.page)}">Énoncé</a><a href="${lecteurUrl(e.corrige.doc, e.corrige.page)}">Corrigé</a></div></div></li>`;
};
const td = ['I', 'II', 'III', 'IV'].map(p => {
  const l = EXOS.filter(e => e.partie === p).sort((a, b) => a.num - b.num);
  return l.length ? `<h3>${p}. ${LC.parties[p].nom}</h3><ul class="list">${l.map(ligneExo).join('')}</ul>` : '';
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
  ${C.revision ? `<h3>Fiche de révision du devoir</h3><p>Le devoir surveillé de courbes, question par question : ce qu'il fallait savoir, la méthode et la correction. <a href="${lecteurUrl('revision', 1)}">Lire la fiche</a> · ${lienPdf(doc('revision'))}</p>` : ''}`;

const i = LC.chapitres.indexOf(C), prev = LC.chapitres[i - 1], next = LC.chapitres[i + 1];

$('#contenu').innerHTML = `
  <p class="kicker"><a href="pt.html">Chapitres</a> · ${C.num}</p>
  <h1>${C.titre}</h1>
  <p class="intro">${C.accroche}</p>
  <nav class="toc" aria-label="Sur cette page"><a href="#ressources">Ressources</a><a href="#cours">Cours</a><a href="#td">TD</a><a href="#annales">Annales</a><a href="#revision">Réviser</a></nav>

  <h2 id="ressources">Ressources</h2>${ressources}
  <h2 id="cours">Cours</h2>
  <p class="muted">Chaque partie s'ouvre dans le livre complet, à la bonne page.</p>${cours}
  <h2 id="td">TD</h2>
  <p class="muted">Chaque exercice s'ouvre dans le TD, à sa page ; le corrigé, dans le livret de corrections. Cherche avant d'ouvrir le corrigé. Clique sur un titre pour l'objectif et une indication.</p>${td}
  <h2 id="annales">Annales</h2>${annales}
  ${sujets ? `<h2 id="entrainement">Sujets d'entraînement</h2>${sujets}` : ''}
  <h2 id="revision">Réviser</h2>${revision}

  <nav class="pager">${prev ? `<a href="chapitre.html?id=${prev.id}">← ${prev.titre}</a>` : '<span></span>'}${next ? `<a href="chapitre.html?id=${next.id}">${next.titre} →</a>` : ''}</nav>`;
renderMath($('#contenu'));

/* ancres (y compris les anciennes : #presentation, #fiche, #ensemble) */
const alias = { presentation: 'ressources', fiche: 'ressources', ensemble: '' };
const h = location.hash.slice(1);
const cible = h in alias ? alias[h] : h;
const exo = params.get('exo');
if (exo) { const e = EXOS.find(x => x.id === exo); if (e) setTimeout(() => { const d = $$('#contenu details').find(x => x.textContent.includes(e.titre)); if (d) { d.open = true; d.scrollIntoView({ block: 'center' }); } }, 0); }
else if (cible) setTimeout(() => document.getElementById(cible)?.scrollIntoView(), 0);
