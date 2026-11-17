/* Le Collé PT — entraînement : le parcours en cinq étapes, par chapitre, puis les évaluations communes */
'use strict';

cadre('pt', 'entrainement');

const ETAPES = [
  ['etape-1', 'Consolider le cours', 'fiche, questions rapides, exercice bilan, applications directes'],
  ['etape-2', 'Travailler les méthodes', 'exercices classiques, erreurs fréquentes'],
  ['etape-3', 'Les 5 problèmes', 'la sélection des séances, avec indications et corrections'],
  ['etape-4', 'Approfondir', 'synthèse, exercices difficiles'],
  ['etape-5', 'Se préparer aux évaluations', 'devoirs, examens blancs, annales']
];

const sujet = s => {
  const total = s.parties ? s.parties.reduce((t, p) => t + p.points, 0) : s.bareme ? s.bareme.reduce((t, b) => t + b.points, 0) : null;
  const liens = (s.sujetExterne ? `<a href="${s.sujetExterne.url}" target="_blank" rel="noopener">${s.sujetExterne.label}</a>` : '') +
    (s.enonce ? `<a href="${lecteurUrl(s.enonce.doc, s.enonce.page)}">${s.enonce.label || 'Sujet'}</a><a href="${lecteurUrl(s.corrige.doc, s.corrige.page)}">Corrigé</a>` : '');
  const infos = (s.seance || s.objectif) ? `<p class="small" style="margin-top:4px">${s.seance ? `<span class="badge-seance">Séance du ${s.seance.charAt(0).toLowerCase() + s.seance.slice(1)}</span> ` : ''}${s.typeTexte ? `<b>${s.typeTexte}</b>` : ''}${s.theme ? ` · thème : ${s.theme}` : ''}${s.objectif ? `<br><span class="muted">Objectif : ${s.objectif}</span>` : ''}</p>` : '';
  const ressources = s.ressources ? `<details class="plus"><summary>Ressources complémentaires</summary><ul class="small">${s.ressources.map(r =>
    `<li>${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${r.label}</a>` : `<a href="${lecteurUrl(r.doc, r.page || 1)}">${r.label}</a>`}${r.detail ? ` <span class="muted">— ${r.detail}</span>` : ''}</li>`).join('')}</ul></details>` : '';
  const parties = s.parties ? `<details class="plus"><summary>Composition et barème</summary><ol class="small">${s.parties.map(p => {
    const a = LC.annales.find(x => x.id === p.annale);
    return `<li><a href="annale.html?id=${a.id}">${a.concours} ${a.annee}, ${a.partie}</a> — ${p.questions} <span class="tag">(${String(p.points).replace('.', ',')} pts : ${p.detail})</span></li>`;
  }).join('')}</ol></details>` : s.bareme ? `<details class="plus"><summary>Composition et barème</summary><ol class="small">${s.bareme.map(b =>
    `<li>${b.titre} <span class="tag">(${String(b.points).replace('.', ',')} pts : ${b.detail})</span></li>`).join('')}</ol></details>` : '';
  return `<li id="${s.id}"><div class="row"><div class="main">${s.titre}<br><span class="tag">${dureeTexte(s.duree)}${total ? ` · noté sur ${total}` : ''} · ${s.chapitres.map(id => chap(id).titre).join(', ')}</span></div><div class="side">${liens}</div></div>
    ${infos}<p class="small muted" style="margin-top:4px">${s.description}</p>${parties}${ressources}</li>`;
};

$('#contenu').innerHTML = `
  <h1>Entraînement</h1>
  <p class="intro">Pour chaque chapitre, un parcours en cinq étapes, du cours au niveau concours, sur la page du chapitre. Commence à l'étape 1, ou va directement à celle qui te correspond.</p>

  <ol class="etapes-def">${ETAPES.map(([, t, d]) => `<li><b>${t}</b> — <span class="muted">${d}</span></li>`).join('')}</ol>

  <h2>Choisis ton chapitre</h2>
  <ul class="list">${LC.chapitres.map(c => `<li class="row"><div class="main"><span class="num">${c.num}</span><a href="chapitre.html?id=${c.id}#entrainement">${c.titre}</a></div>
    <div class="side ex">${c.bilan ? `<a href="${lecteurUrl(c.bilan.doc, 1)}">Exercice bilan</a>` : ''}<a href="chapitre.html?id=${c.id}#etape-3">Les 5 problèmes</a></div></li>`).join('')}</ul>

  <h2 id="evaluations">Devoirs et examens blancs</h2>
  <p class="muted">L'étape 5, en conditions réelles : sans livre ni fiche ni calculatrice, chronomètre lancé. Corrige-toi ensuite avec la fiche, puis avec le corrigé.</p>
  <ul class="list">${LC.entrainement.map(sujet).join('')}</ul>`;
renderMath($('#contenu'));
if (location.hash) setTimeout(() => { const el = document.getElementById(location.hash.slice(1)); if (el) { el.querySelector('details')?.setAttribute('open', ''); el.scrollIntoView(); } }, 0);
