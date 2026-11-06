/* Le Collé PT — entraînement : le parcours en cinq étapes, par chapitre, puis les évaluations communes */
'use strict';

cadre('pt', 'entrainement');

const ETAPES = [
  ['etape-1', 'Consolider le cours', 'fiche, questions rapides, applications directes'],
  ['etape-2', 'Travailler les méthodes', 'exercices classiques, erreurs fréquentes'],
  ['etape-3', 'Les 5 problèmes', 'la sélection des séances, avec indications et corrections'],
  ['etape-4', 'Approfondir', 'synthèse, exercices difficiles'],
  ['etape-5', 'Se préparer aux évaluations', 'devoirs, examens blancs, annales']
];

const sujet = s => {
  const total = s.parties ? s.parties.reduce((t, p) => t + p.points, 0) : null;
  const liens = s.enonce ? `<a href="${lecteurUrl(s.enonce.doc, s.enonce.page)}">Sujet</a><a href="${lecteurUrl(s.corrige.doc, s.corrige.page)}">Corrigé</a>` : '';
  const parties = s.parties ? `<details class="plus"><summary>Composition et barème</summary><ol class="small">${s.parties.map(p => {
    const a = LC.annales.find(x => x.id === p.annale);
    return `<li><a href="annale.html?id=${a.id}">${a.concours} ${a.annee}, ${a.partie}</a> — ${p.questions} <span class="tag">(${String(p.points).replace('.', ',')} pts : ${p.detail})</span></li>`;
  }).join('')}</ol></details>` : '';
  return `<li id="${s.id}"><div class="row"><div class="main">${s.titre}<br><span class="tag">${dureeTexte(s.duree)}${total ? ` · noté sur ${total}` : ''} · ${s.chapitres.map(id => chap(id).titre).join(', ')}</span></div><div class="side">${liens}</div></div>
    <p class="small muted" style="margin-top:4px">${s.description}</p>${parties}</li>`;
};

$('#contenu').innerHTML = `
  <h1>Entraînement</h1>
  <p class="intro">Pour chaque chapitre, un parcours en cinq étapes, du cours au niveau concours. Commence à l'étape 1, ou va directement à celle qui te correspond.</p>

  <ol class="etapes-def">${ETAPES.map(([, t, d]) => `<li><b>${t}</b> — <span class="muted">${d}</span></li>`).join('')}</ol>

  <h2>Choisis ton chapitre</h2>
  <ul class="list">${LC.chapitres.map(c => `<li><div class="row"><div class="main"><span class="num">${c.num}</span><a href="chapitre.html?id=${c.id}#entrainement">${c.titre}</a></div>
    <div class="side"><a href="chapitre.html?id=${c.id}#etape-3">Les 5 problèmes</a></div></div>
    <p class="etapes-mini"><span class="num"></span>${ETAPES.map(([id], k) => `<a href="chapitre.html?id=${c.id}#${id}" title="${ETAPES[k][1]}">Étape ${k + 1}</a>`).join('')}</p></li>`).join('')}</ul>

  <h2 id="evaluations">Devoirs et examens blancs</h2>
  <p class="muted">L'étape 5, en conditions réelles : sans livre ni fiche ni calculatrice, chronomètre lancé. Corrige-toi ensuite avec la fiche, puis avec le corrigé.</p>
  <ul class="list">${LC.entrainement.map(sujet).join('')}</ul>`;
renderMath($('#contenu'));
if (location.hash) setTimeout(() => { const el = document.getElementById(location.hash.slice(1)); if (el) { el.querySelector('details')?.setAttribute('open', ''); el.scrollIntoView(); } }, 0);
