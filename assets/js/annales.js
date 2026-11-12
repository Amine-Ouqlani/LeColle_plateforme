/* Le Collé PT — annales : sujets officiels (filtres et recherche), questions corrigées par notion, classiques d'entraînement */
'use strict';

cadre('pt', 'annales');

const annale = id => LC.annales.find(a => a.id === id);
const theme = id => (LC.themes.find(t => t[0] === id) || [id, id])[1];
const dots = n => `<span class="dots" title="difficulté ${n} sur 5">${'●'.repeat(n)}<span class="off">${'●'.repeat(5 - n)}</span></span>`;
const sections = c => (c.fiche || c.cours).sections;
const nbQ = cid => LC.questionsAnnales.filter(q => q.chapitre === cid).length;
const sansAccent = s => plain(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const ext = (url, txt) => `<a href="${url}" target="_blank" rel="noopener">${txt}</a>`;

/* les parties corrigées par Le Collé, rattachées à leur sujet */
const CORRIGEES = {};
for (const a of LC.annales) (CORRIGEES[a.id.replace(/-\d+$/, '')] ||= []).push(a);
const SUJETS = LC.sujets.slice().sort((a, b) => b.annee - a.annee || a.epreuve.localeCompare(b.epreuve));
SUJETS.forEach(s => { s.themes = [...new Set(s.parties.flatMap(p => p.themes))]; s.texte = sansAccent(s.parties.map(p => p.nom + ' ' + p.resume).join(' ')); });
const CHAPS = LC.chapitres.map(c => c.id);

/* ------------------------------------------------------------------ état (repris de l'adresse) */
const VUES = [['sujets', 'Sujets officiels', SUJETS.length], ['questions', 'Questions corrigées', LC.questionsAnnales.length],
  ['classiques', 'Classiques', Object.values(LC.classiques).reduce((t, l) => t + l.length, 0)]];
const E = {
  vue: VUES.some(v => v[0] === params.get('vue')) ? params.get('vue') : (params.get('ch') ? 'questions' : 'sujets'),
  ch: (chap(params.get('ch')) || LC.chapitres.find(c => nbQ(c.id)) || LC.chapitres[0]).id,
  ep: LC.epreuves[params.get('ep')] ? params.get('ep') : '',
  th: LC.themes.some(t => t[0] === params.get('theme')) ? params.get('theme') : '',
  an: '', corr: false, q: ''
};
const adresse = () => {
  const p = new URLSearchParams();
  if (E.vue !== 'sujets') p.set('vue', E.vue);
  if (E.vue === 'questions' || E.vue === 'classiques') p.set('ch', E.ch);
  if (E.vue === 'sujets') { if (E.ep) p.set('ep', E.ep); if (E.th) p.set('theme', E.th); }
  history.replaceState(null, '', location.pathname + (String(p) ? '?' + p : ''));
};

/* ------------------------------------------------------------------ vue 1 : sujets officiels */
function ligneSujet(s) {
  const mots = E.q ? sansAccent(E.q).split(/\s+/).filter(Boolean) : [];
  const touche = p => (!E.th || p.themes.includes(E.th)) && mots.every(m => sansAccent(p.nom + ' ' + p.resume).includes(m));
  const cible = E.th || mots.length;
  const lc = CORRIGEES[s.id] || [];
  const corr = s.corriges.map((u, i) => ext(u, i ? `Corrigé ${i + 1}` : 'Corrigé')).join('');
  const parties = s.parties.map(p => `<li${cible && !touche(p) ? ' class="hors"' : ''}><b>${p.nom}</b> — ${p.resume}
    <span class="tag">${p.themes.map(theme).join(' · ')}</span></li>`).join('');
  return `<li class="sujet" id="${s.id}"><div class="row"><div class="main"><b>${s.annee} · ${LC.epreuves[s.epreuve].nom}</b>
      <span class="tag">${s.concours} · ${s.duree}${s.annee < 2023 ? ' · programme précédent' : ''}</span><br>
      <span class="tag">${s.themes.map(t => t === E.th ? `<mark>${theme(t)}</mark>` : theme(t)).join(' · ')}</span></div>
    <div class="side">${ext(s.sujet, 'Sujet')}${s.rapport ? ext(s.rapport, 'Rapport') : ''}${corr}</div></div>
    ${lc.length ? `<p class="small" style="margin-top:4px">Corrigé pas à pas sur ce site : ${lc.map(a => `<a href="annale.html?id=${a.id}">${a.partie} — ${a.titre}</a>`).join(' ; ')}</p>` : ''}
    <details class="plus"${cible ? ' open' : ''}><summary>Contenu du sujet <span class="tag">(${s.parties.length} parties)</span></summary><ul class="parties">${parties}</ul>
      <p class="small muted">${ext(s.page, 'Lire l\'énoncé en ligne sur WikiPrépa')}</p></details></li>`;
}
function vueSujets() {
  const annees = [...new Set(SUJETS.map(s => s.annee))];
  const opt = (v, t, cur) => `<option value="${v}"${String(v) === String(cur) ? ' selected' : ''}>${t}</option>`;
  const nbTh = id => SUJETS.filter(s => s.themes.includes(id)).length;
  return `
  <p class="muted">Les trois épreuves écrites de mathématiques de la Banque PT, sessions ${annees[annees.length - 1]} à ${annees[0]} : ${Object.entries(LC.epreuves).map(([k, e]) => `<b>${k}</b> (${e.contenu})`).join(', ')}. Quatre heures chacune, sans calculatrice. Les sujets et les rapports du jury sont hébergés par WikiPrépa, les corrigés par l'UPS (prepas.org).</p>
  <div class="filtres" role="search">
    <span class="segments" role="group" aria-label="Épreuve">${[['', 'Toutes'], ...Object.keys(LC.epreuves).map(k => [k, 'Maths ' + k])].map(([k, t]) => `<button type="button" data-ep="${k}" aria-pressed="${E.ep === k}">${t}</button>`).join('')}</span>
    <label>Thème <select id="f-theme">${opt('', 'tous', E.th)}<optgroup label="Nos chapitres">${LC.themes.filter(t => CHAPS.includes(t[0])).map(t => opt(t[0], `${t[1]} (${nbTh(t[0])})`, E.th)).join('')}</optgroup>
      <optgroup label="Reste du programme">${LC.themes.filter(t => !CHAPS.includes(t[0])).map(t => opt(t[0], `${t[1]} (${nbTh(t[0])})`, E.th)).join('')}</optgroup></select></label>
    <label>Année <select id="f-annee">${opt('', 'toutes', E.an)}${annees.map(a => opt(a, a, E.an)).join('')}</select></label>
    <label><input type="checkbox" id="f-corrige"${E.corr ? ' checked' : ''}> avec corrigé</label>
    <label class="cherche">Chercher <input type="search" id="f-q" value="${esc(E.q)}" placeholder="Vandermonde, rotation, Gauss…" autocomplete="off"></label>
  </div>
  <p class="small muted" id="compte" aria-live="polite"></p>
  <ul class="list" id="liste-sujets"></ul>
  <p class="small muted" style="margin-top:14px">Les sessions 2014 à 2022 ont été posées sur le programme précédent, très proche de l'actuel ; repère dans le rapport du jury ce qui a changé. Les résumés de parties sont rédigés par Le Collé d'après les énoncés.</p>`;
}
function listerSujets() {
  const mots = E.q ? sansAccent(E.q).split(/\s+/).filter(Boolean) : [];
  const L = SUJETS.filter(s => (!E.ep || s.epreuve === E.ep) && (!E.an || String(s.annee) === E.an) && (!E.corr || s.corriges.length || CORRIGEES[s.id])
    && (!E.th || s.themes.includes(E.th))
    && (!mots.length || s.parties.some(p => (!E.th || p.themes.includes(E.th)) && mots.every(m => sansAccent(p.nom + ' ' + p.resume).includes(m)))));
  $('#liste-sujets').innerHTML = L.map(ligneSujet).join('') || '<li class="muted">Aucun sujet ne correspond. Élargis les filtres.</li>';
  $('#compte').textContent = `${L.length} sujet${L.length > 1 ? 's' : ''} sur ${SUJETS.length}` + (E.th || mots.length ? ' — les parties concernées sont mises en avant' : '');
  renderMath($('#liste-sujets'));
}
function brancherSujets() {
  $$('.segments button').forEach(b => b.addEventListener('click', () => { E.ep = b.dataset.ep; $$('.segments button').forEach(x => x.setAttribute('aria-pressed', String(x === b))); adresse(); listerSujets(); }));
  $('#f-theme').addEventListener('change', e => { E.th = e.target.value; adresse(); listerSujets(); });
  $('#f-annee').addEventListener('change', e => { E.an = e.target.value; listerSujets(); });
  $('#f-corrige').addEventListener('change', e => { E.corr = e.target.checked; listerSujets(); });
  let t; $('#f-q').addEventListener('input', e => { clearTimeout(t); t = setTimeout(() => { E.q = e.target.value.trim(); listerSujets(); }, 150); });
  listerSujets();
}

/* ------------------------------------------------------------------ vues 2 et 3 : par chapitre */
const choixChap = nb => `<nav class="choix-chap" aria-label="Chapitre">${LC.chapitres.map(c => `<button type="button" data-ch="${c.id}" aria-pressed="${c.id === E.ch}"${nb(c.id) ? '' : ' disabled'}>${c.num}. ${c.titre} <span class="tag">(${nb(c.id)})</span></button>`).join('')}</nav>`;

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
        <div class="side"><a href="annale.html?id=${a.id}#q-${q.q}">Correction</a>${ext(a.liens.sujet, 'Sujet')}</div></li>`;
    }).join('')}</ul>`;
  }).join('');
}
function vueQuestions() {
  const sans = LC.chapitres.filter(c => !nbQ(c.id));
  return `<p class="muted">Des questions de sujets officiels, classées par notion du cours, chacune avec une indication et une correction rédigée par Le Collé. Cherche la question sur le sujet avant d'ouvrir la correction.</p>
  ${choixChap(nbQ)}<div id="par-chapitre"></div>
  ${sans.length ? `<p class="small muted" style="margin-top:18px">Pas encore de correction pas à pas pour ${sans.map(c => `<a href="annales.html?theme=${c.id}">${c.titre}</a>`).join(', ')} : les liens mènent aux sujets officiels qui portent sur ces chapitres, avec leurs corrigés.</p>` : ''}`;
}

const nbC = cid => (LC.classiques[cid] || []).length;
function classiques(cid) {
  const L = (LC.classiques[cid] || []).map(([id, nom]) => [LC.exercices.find(e => e.id === id), nom]).filter(x => x[0]);
  return `<ul class="list">${L.map(([e, nom]) => `<li class="row"><div class="main">${nom}<br>
      <span class="tag">TD, exercice ${e.num} · niveau ${['I', 'II', 'III', 'IV'][e.niveau - 1]}${plain(e.titre) !== plain(nom) ? ' · ' + e.titre : ''}</span></div>
    <div class="side"><a href="${lecteurUrl(e.enonce.doc, e.enonce.page)}">Énoncé</a><a href="${lecteurUrl(e.corrige.doc, e.corrige.page)}">Corrigé</a></div></li>`).join('')}</ul>
    <p class="small muted" style="margin-top:10px"><a href="chapitre.html?id=${cid}#etape-3">Les 5 problèmes du chapitre</a> prolongent ces exercices ; <a href="annales.html?theme=${cid}">les sujets officiels sur ce chapitre</a> viennent ensuite.</p>`;
}
function vueClassiques() {
  return `<p class="note"><b>Exercices d'entraînement, pas des sujets de concours.</b> Ce sont les exercices du TD que l'on retrouve, sous une forme ou une autre, dans beaucoup de sujets : il faut savoir les refaire sans aide. Énoncés et corrections Le Collé.</p>
  ${choixChap(nbC)}<div id="par-chapitre"></div>`;
}
function brancherChapitres(rendu) {
  const afficher = () => {
    $('#par-chapitre').innerHTML = rendu(E.ch) || '<p class="muted">Rien pour ce chapitre pour le moment.</p>';
    $$('.choix-chap button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.ch === E.ch)));
    renderMath($('#par-chapitre'));
  };
  $$('.choix-chap button').forEach(b => b.addEventListener('click', () => { E.ch = b.dataset.ch; adresse(); afficher(); }));
  afficher();
}

/* ------------------------------------------------------------------ page */
$('#contenu').innerHTML = `
  <h1>Annales</h1>
  <p class="intro">Tous les sujets de mathématiques de la Banque PT depuis 2014, à filtrer par épreuve et par thème ; des questions corrigées pas à pas ; et les exercices classiques à savoir refaire.</p>
  <nav class="onglets" role="tablist" aria-label="Rubriques des annales">${VUES.map(([id, t, n]) => `<button type="button" role="tab" data-vue="${id}" aria-selected="${id === E.vue}">${t} <span class="tag">${n}</span></button>`).join('')}</nav>
  <div id="vue" role="tabpanel"></div>`;

function montrer() {
  $$('.onglets button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.vue === E.vue)));
  const v = $('#vue');
  if (E.vue === 'sujets') { v.innerHTML = vueSujets(); brancherSujets(); }
  else if (E.vue === 'questions') { if (!nbQ(E.ch)) E.ch = LC.chapitres.find(c => nbQ(c.id)).id; v.innerHTML = vueQuestions(); brancherChapitres(questions); }
  else { v.innerHTML = vueClassiques(); brancherChapitres(classiques); }
  renderMath(v);
}
$$('.onglets button').forEach(b => b.addEventListener('click', () => { E.vue = b.dataset.vue; adresse(); montrer(); }));
montrer();
