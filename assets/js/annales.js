/* Le Collé PT — annales : les questions par chapitre et par notion ; les sujets complets en second plan */
'use strict';

cadre('pt', 'annales');

const annale = id => LC.annales.find(a => a.id === id);
const dots = n => `<span class="dots" title="difficulté ${n} sur 5">${'●'.repeat(n)}<span class="off">${'●'.repeat(5 - n)}</span></span>`;
const sections = c => (c.fiche || c.cours).sections;
let courant = (chap(params.get('ch')) || LC.chapitres[0]).id;

function questions(cid) {
  const c = chap(cid);
  const qs = LC.questionsAnnales.filter(q => q.chapitre === cid);
  return sections(c).map(s => {
    const l = qs.filter(q => q.section === s.num);
    if (!l.length) return '';
    return `<h3>${s.titre} <span class="tag">${c.fiche ? 'fiche' : 'livret'} §${s.num}</span></h3><ul class="list">${l.map(q => {
      const a = annale(q.annale);
      return `<li class="row"><div class="main"><a href="annale.html?id=${a.id}#q-${q.q}">${q.label} — ${q.titre}</a><br>
        <span class="tag">${a.concours} ${a.annee} · ${a.epreuve}, ${a.partie} · </span>${dots(Math.min(5, a.difficulte + 1))}</div>
        <div class="side"><a href="annale.html?id=${a.id}#q-${q.q}">Correction</a><a href="${a.liens.sujet}" target="_blank" rel="noopener">Sujet</a></div></li>`;
    }).join('')}</ul>`;
  }).join('');
}

/* sujets complets : un par concours, année et épreuve */
const SUJETS = [];
for (const a of LC.annales) {
  let s = SUJETS.find(x => x.sujet === a.liens.sujet);
  if (!s) SUJETS.push(s = { concours: a.concours, annee: a.annee, epreuve: a.epreuve, sujet: a.liens.sujet, page: a.liens.page, rapport: a.liens.rapport, externe: a.liens.corrigeExterne, parties: [] });
  s.parties.push(a);
}
SUJETS.sort((a, b) => b.annee - a.annee);
const sujet = s => `<li class="row" data-annee="${s.annee}" data-corrige="${s.externe ? 1 : 0}"><div class="main">${s.concours} ${s.annee} — ${s.epreuve}<br>
  <span class="tag">corrigé Le Collé : ${s.parties.map(a => `<a href="annale.html?id=${a.id}">${a.partie}</a>`).join(', ')}</span></div>
  <div class="side"><a href="${s.sujet}" target="_blank" rel="noopener">Sujet</a>${s.rapport ? `<a href="${s.rapport}" target="_blank" rel="noopener">Rapport</a>` : ''}${s.externe ? `<a href="${s.externe}" target="_blank" rel="noopener">Corrigé complet</a>` : ''}</div></li>`;

$('#contenu').innerHTML = `
  <h1>Annales</h1>
  <p class="intro">Les questions de concours qui portent sur nos chapitres, classées par notion, avec une correction rédigée pour chacune.</p>
  <nav class="choix-chap" aria-label="Chapitre">${LC.chapitres.map(c => `<button type="button" data-ch="${c.id}" aria-pressed="${c.id === courant}">${c.num}. ${c.titre}</button>`).join('')}</nav>
  <div id="questions"></div>

  <h2>Sujets complets</h2>
  <p class="muted">Pour s'entraîner en conditions réelles (3 heures, sans calculatrice). Les sujets officiels sont hébergés par WikiPrépa.</p>
  <details class="plus" id="sujets"><summary>Les ${SUJETS.length} sujets de la Banque PT utilisés</summary>
    <p class="filtres"><label>Année <select id="f-annee"><option value="">toutes</option>${[...new Set(SUJETS.map(s => s.annee))].map(a => `<option>${a}</option>`).join('')}</select></label>
    <label><input type="checkbox" id="f-corrige"> avec un corrigé complet</label></p>
    <ul class="list" id="liste-sujets">${SUJETS.map(sujet).join('')}</ul>
    <p class="small muted" style="margin-top:10px">Sujets examinés sans question sur nos chapitres : ${LC.annalesEcartees.join(' ; ')}.</p>
  </details>`;

function afficher() {
  $('#questions').innerHTML = questions(courant) || '<p class="muted">Aucune question pour ce chapitre.</p>';
  $$('.choix-chap button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.ch === courant)));
  renderMath($('#questions'));
}
$$('.choix-chap button').forEach(b => b.addEventListener('click', () => {
  courant = b.dataset.ch; history.replaceState(null, '', '?ch=' + courant); afficher();
}));
const filtrer = () => {
  const an = $('#f-annee').value, c = $('#f-corrige').checked;
  $$('#liste-sujets > li').forEach(li => { li.hidden = (an && li.dataset.annee !== an) || (c && li.dataset.corrige !== '1'); });
};
$('#f-annee').addEventListener('change', filtrer); $('#f-corrige').addEventListener('change', filtrer);
afficher();
renderMath($('#contenu'));
