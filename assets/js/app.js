/* =====================================================================
   Le Collé — interface commune
   Composants : barre latérale, recherche, onglets, progression,
   cartes d'exercices, d'annales et de sujets. Le contenu vient de data/.
   ===================================================================== */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const params = new URLSearchParams(location.search);

/* ------------------------------ stockage local (par navigateur) */
const store = {
  get(k, d) { try { const v = localStorage.getItem('lc:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('lc:' + k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } }
};
const Fait = {
  all() { return new Set(store.get('fait', [])); },
  has(id) { return this.all().has(id); },
  toggle(id) { const s = this.all(); s.has(id) ? s.delete(id) : s.add(id); store.set('fait', [...s]); document.dispatchEvent(new CustomEvent('lc:fait')); return s.has(id); }
};
function noterVisite(titre, url) { store.set('dernier', { titre, url, date: Date.now() }); }

/* ------------------------------ thème */
(function theme() {
  const t = store.get('theme', null);
  if (t) document.documentElement.setAttribute('data-theme', t);
})();
function basculerTheme() {
  const root = document.documentElement;
  const cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = cur === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next); store.set('theme', next);
}

/* ------------------------------ icônes (SVG en ligne) */
const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>',
  sheet: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  slides: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  download: '<path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16"/>',
  external: '<path d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/>',
  expand: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  alert: '<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
  zoomin: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>',
  zoomout: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M8 11h6"/>',
  play: '<path d="M6 4l14 8-14 8z"/>', pause: '<path d="M7 4h4v16H7zM13 4h4v16h-4z"/>', reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'
};
function icon(n, cls = '') { return `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`; }

/* ------------------------------ helpers de données */
const doc = id => LC.documents[id];
const chap = id => LC.chapitres.find(c => c.id === id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const plain = s => String(s).replace(/\$([^$]*)\$/g, '$1').replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}\\^_]/g, '').replace(/\s+/g, ' ').trim();
function lecteurUrl(docId, page, extra = {}) {
  const p = new URLSearchParams({ doc: docId, ...(page ? { page } : {}), ...extra });
  return 'lecteur.html?' + p.toString();
}
function dots(n) { return `<span class="dots" title="difficulté ${n}/5">${'●'.repeat(n)}<span class="off">${'●'.repeat(5 - n)}</span></span>`; }
function niveauChip(n) { const nv = LC.niveaux[n]; return `<span class="chip ${n === 4 ? 'brique' : n === 3 ? 'ocre' : 'bleu'}" title="${nv.nom}">${nv.court} · ${nv.nom}</span>`; }
function origineChip(e) {
  if (e.origine === 'td') return `<span class="chip">TD ${e.td} de la classe</span>`;
  if (e.origine === 'devoir') return `<span class="chip brique">Devoir type</span>`;
  return `<span class="chip">Exercice Le Collé</span>`;
}
function renderMath(root) {
  if (window.renderMathInElement) {
    renderMathInElement(root, { delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }], throwOnError: false,
      macros: { '\\R': '\\mathbb{R}', '\\C': '\\mathbb{C}', '\\K': '\\mathbb{K}', '\\Z': '\\mathbb{Z}', '\\dt': '\\left|\\begin{matrix}#1\\end{matrix}\\right|' } });
  }
}
/* §x.y de la fiche → page */
function ficheRef(ref) {
  const v2 = ref.startsWith('V2 ');
  const num = v2 ? ref.slice(3) : ref;
  if (v2) {
    const s = chap('metrique').cours.sections.find(s => s.num === num);
    return { url: lecteurUrl('volume2', s ? s.page : 4), label: `volume 2, §${num}` };
  }
  for (const c of LC.chapitres) {
    const s = c.fiche && c.fiche.sections.find(s => s.num === num);
    if (s) return { url: lecteurUrl('fiche', s.page), label: `fiche §${num}` };
  }
  return { url: lecteurUrl('fiche', 1), label: `fiche §${num}` };
}

/* ------------------------------ progression */
function progressionChapitre(id) {
  const f = Fait.all();
  const items = [...LC.exercices.filter(e => e.chapitre === id).map(e => e.id), ...LC.annales.filter(a => a.chapitres.includes(id)).map(a => a.id)];
  const done = items.filter(i => f.has(i)).length;
  return { done, total: items.length, pct: items.length ? Math.round(100 * done / items.length) : 0 };
}

/* ------------------------------ barre latérale */
function renderSidebar(courant) {
  const side = $('#sidebar');
  if (!side) return;
  const chaps = LC.chapitres.map(c => {
    const p = progressionChapitre(c.id);
    return `<li><a href="chapitre.html?id=${c.id}" ${courant === c.id ? 'aria-current="page"' : ''}><span class="num">${c.num}</span>${esc(c.titre)}</a>
      <div class="side-meter" title="${p.done}/${p.total} exercices et annales faits"><span style="width:${p.pct}%"></span></div></li>`;
  }).join('');
  side.innerHTML = `
    <div class="brand">
      <a href="index.html" class="brand" aria-label="Accueil Le Collé"><span class="brand-mark">LC</span>
      <span><span class="brand-name">Le Collé</span><br><span class="brand-sub">Maths PT · espace de travail</span></span></a>
      <button class="sidebar-toggle" data-sidebar-btn aria-label="Afficher le menu" aria-expanded="false">${icon('menu')}</button>
    </div>
    <div class="sidebar-more">
      <button class="search" data-open-search type="button" style="display:block;width:100%;text-align:left" aria-label="Rechercher">
        ${icon('search', 'ico')}<input tabindex="-1" readonly placeholder="Rechercher une notion…" style="pointer-events:none"><kbd>/</kbd>
      </button>
      <div class="sep"></div>
      <p class="side-label">Plateforme</p>
      <ul class="side-nav">
        <li><a href="index.html" ${courant === 'accueil' ? 'aria-current="page"' : ''}>${icon('home')}Accueil</a></li>
        <li><a href="index.html#exercices">${icon('pencil')}Tous les exercices</a></li>
        <li><a href="index.html#annales">${icon('trophy')}Annales de concours</a></li>
        <li><a href="index.html#entrainement">${icon('clock')}Examens blancs</a></li>
        <li><a href="index.html#bibliotheque">${icon('box')}Bibliothèque</a></li>
      </ul>
      <div class="sep"></div>
      <p class="side-label">Chapitres</p>
      <ul class="side-nav">${chaps}</ul>
      <div class="sep"></div>
      <div class="side-actions">
        <button class="btn small" data-theme-btn type="button">${icon('moon')}Thème</button>
        <a class="btn small" href="${lecteurUrl('fiche', 1)}">${icon('sheet')}Fiche</a>
      </div>
    </div>`;
  const btn = $('[data-sidebar-btn]', side);
  btn.addEventListener('click', () => { side.classList.toggle('active'); btn.setAttribute('aria-expanded', side.classList.contains('active')); });
  $('[data-theme-btn]', side).addEventListener('click', basculerTheme);
  $('[data-open-search]', side).addEventListener('click', () => Recherche.ouvrir());
}

function renderBottomNav(courant) {
  const nav = $('#bottom-nav');
  if (!nav) return;
  const item = (href, ic, label, id) => `<a href="${href}" ${courant === id ? 'aria-current="page"' : ''}>${icon(ic)}${label}</a>`;
  nav.innerHTML = item('index.html', 'home', 'Accueil', 'accueil') + item('index.html#chapitres', 'book', 'Chapitres', 'chapitres') +
    item('index.html#exercices', 'pencil', 'Exercices', 'exercices') + item('index.html#annales', 'trophy', 'Annales', 'annales') +
    `<a href="#" data-open-search>${icon('search')}Chercher</a>`;
  $('[data-open-search]', nav).addEventListener('click', e => { e.preventDefault(); Recherche.ouvrir(); });
}

/* ------------------------------ recherche */
const Recherche = {
  index: null,
  construire() {
    const idx = [];
    const add = (type, titre, sous, url, mots = '') => idx.push({ type, titre, sous, url, cle: (plain(titre) + ' ' + plain(sous) + ' ' + plain(mots)).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') });
    for (const c of LC.chapitres) {
      add('Chapitre', `${c.num}. ${c.titre}`, c.accroche, `chapitre.html?id=${c.id}`);
      for (const s of c.cours.sections) add('Cours', `${s.num} ${s.titre}`, `${c.titre} — livre`, `chapitre.html?id=${c.id}&section=${encodeURIComponent(s.num)}#cours`);
      if (c.fiche) for (const s of c.fiche.sections) add('Fiche', `§${s.num} ${s.titre}`, 'Fiche de référence', lecteurUrl('fiche', s.page));
      if (c.presentation) for (const s of c.presentation.sections) add('Diapos', `${s.num} ${s.titre}`, 'Présentation', lecteurUrl('presentation', s.page, { mode: 'slides' }));
      for (const f of c.flash || []) add('Question', f.q, c.titre, `chapitre.html?id=${c.id}#entrainement`, f.r);
      for (const e of c.erreurs || []) add('Erreur', e, c.titre + ' — erreurs fréquentes', `chapitre.html?id=${c.id}#ressources`);
    }
    for (const e of LC.exercices) add('Exercice', `${e.num} — ${e.titre}`, `${chap(e.chapitre).titre} · ${LC.niveaux[e.niveau].nom}${e.td ? ' · TD ' + e.td : ''}`, `chapitre.html?id=${e.chapitre}&exo=${e.id}#td`, e.notions.join(' ') + ' ' + e.objectifs);
    for (const a of LC.annales) add('Annale', `${a.concours} ${a.annee} — ${a.titre}`, `${a.epreuve}, ${a.partie}`, `annale.html?id=${a.id}`, a.notions.join(' '));
    for (const s of LC.entrainement) add('Sujet', s.titre, s.origine, `index.html#entrainement`, s.description);
    for (const [id, d] of Object.entries(LC.documents)) add('Document', d.titre, d.sousTitre, lecteurUrl(id, 1, d.type === 'presentation' ? { mode: 'slides' } : {}), d.description);
    this.index = idx;
  },
  chercher(q) {
    if (!this.index) this.construire();
    const t = q.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/\s+/).filter(Boolean);
    if (!t.length) return [];
    return this.index.map(it => {
      let score = 0;
      for (const w of t) { const i = it.cle.indexOf(w); if (i < 0) return null; score += i === 0 ? 3 : 1; if (plain(it.titre).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').includes(w)) score += 4; }
      return { it, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 40).map(x => x.it);
  },
  monter() {
    const o = document.createElement('div');
    o.className = 'search-results'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', 'Recherche');
    o.innerHTML = `<div class="search-box"><label class="search">${icon('search', 'ico')}<span class="sr-only">Rechercher</span><input type="search" placeholder="Notion, exercice, annale… (ex. : asymptote, Vandermonde, 2023)" autocomplete="off"></label><ul class="search-list"></ul></div>`;
    document.body.appendChild(o);
    const input = $('input', o), list = $('.search-list', o);
    let sel = -1;
    const draw = () => {
      const r = this.chercher(input.value);
      sel = r.length ? 0 : -1;
      list.innerHTML = input.value.trim() === '' ? '<li class="search-empty">Tape un mot : déterminant, tangente, inflexion, Banque PT…</li>' :
        r.length ? r.map((x, i) => `<li><a href="${x.url}" class="${i === 0 ? 'sel' : ''}"><span class="r-type">${x.type}</span><span class="r-title">${esc(plain(x.titre))}</span><span class="r-sub">${esc(plain(x.sous))}</span></a></li>`).join('') : '<li class="search-empty">Aucun résultat.</li>';
    };
    input.addEventListener('input', draw);
    input.addEventListener('keydown', e => {
      const links = $$('a', list);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (!links.length) return; links[sel]?.classList.remove('sel'); sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length; links[sel].classList.add('sel'); links[sel].scrollIntoView({ block: 'nearest' }); }
      if (e.key === 'Enter' && links[sel]) { location.href = links[sel].getAttribute('href'); this.fermer(); }
    });
    o.addEventListener('click', e => { if (e.target === o) this.fermer(); });
    list.addEventListener('click', e => { if (e.target.closest('a')) this.fermer(); });
    this.el = o; this.input = input; draw();
  },
  ouvrir() { if (!this.el) this.monter(); this.el.classList.add('open'); this.input.value = ''; this.input.dispatchEvent(new Event('input')); this.input.focus(); },
  fermer() { this.el && this.el.classList.remove('open'); }
};
document.addEventListener('keydown', e => {
  if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); Recherche.ouvrir(); }
  if (e.key === 'Escape') Recherche.fermer();
});

/* ------------------------------ onglets */
function initTabs(defaut) {
  const tabs = $$('[role="tab"]');
  const activer = (id, push) => {
    if (!$('#panel-' + id)) id = defaut;
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.tab === id)));
    $$('.panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + id));
    if (push) history.replaceState(null, '', location.pathname + location.search + '#' + id);
    document.dispatchEvent(new CustomEvent('lc:tab', { detail: id }));
  };
  tabs.forEach(t => t.addEventListener('click', () => { activer(t.dataset.tab, true); if (innerWidth < 1024) $('.main').scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
  addEventListener('hashchange', () => activer(location.hash.slice(1) || defaut));
  activer(location.hash.slice(1) || defaut);
  return activer;
}

/* ------------------------------ cartes réutilisables */
function carteExercice(e, opts = {}) {
  const fait = Fait.has(e.id);
  const c = chap(e.chapitre);
  const fr = e.fiche ? ficheRef(e.fiche) : null;
  return `<article class="exo ${fait ? 'is-done' : ''}" id="exo-${e.id}" data-id="${e.id}">
    <div class="exo-head"><span class="exo-num">Exercice ${e.num}</span><span class="exo-title">${e.titre}</span>${dots(e.difficulte)}</div>
    <div class="chips">${niveauChip(e.niveau)}${origineChip(e)}${e.incontournable ? `<span class="chip ocre">${icon('star').replace('<svg', '<svg width="12" height="12"')}Incontournable</span>` : ''}${e.hp ? '<span class="chip brique">HP</span>' : ''}${opts.chapitre ? `<span class="chip">${esc(c.titre)}</span>` : ''}${e.duree ? `<span class="chip">${e.duree}</span>` : ''}</div>
    <div class="exo-meta">
      <div><b>Notions :</b> ${e.notions.join(' · ')}</div>
      <div><b>Prérequis :</b> ${e.prerequis.join(' ; ')}</div>
      <div><b>Objectif :</b> ${e.objectifs}</div>
    </div>
    <details><summary>Indication</summary><p>${e.indication}</p></details>
    <div class="exo-foot">
      <a class="btn small primary" href="${lecteurUrl(e.enonce.doc, e.enonce.page)}">${icon('eye')}Énoncé</a>
      <a class="btn small" href="${lecteurUrl(e.corrige.doc, e.corrige.page)}" data-corrige>${icon('check')}Corrigé</a>
      ${fr ? `<a class="btn small ghost" href="${fr.url}">${icon('sheet')}${fr.label}</a>` : ''}
      <span class="sp"></span>
      <button class="btn small ${fait ? 'done' : ''}" data-fait="${e.id}" aria-pressed="${fait}">${icon('check')}${fait ? 'Fait' : 'Marquer fait'}</button>
    </div></article>`;
}
function carteAnnale(a, opts = {}) {
  const fait = Fait.has(a.id);
  return `<article class="exo ${fait ? 'is-done' : ''}" data-id="${a.id}">
    <div class="exo-head"><span class="exo-num">${a.concours} ${a.annee} · ${a.epreuve}</span><span class="exo-title">${a.titre}</span>${dots(a.difficulte + 1)}</div>
    <div class="chips"><span class="chip brique">Sujet officiel</span><span class="chip">${a.partie}</span>${a.chapitres.map(id => `<span class="chip bleu">${esc(chap(id).titre)}</span>`).join('')}${a.incontournable ? '<span class="chip ocre">Incontournable</span>' : ''}<span class="chip">${a.duree}</span></div>
    <div class="exo-meta"><div><b>Questions retenues :</b> ${a.questions}</div><div><b>Notions :</b> ${a.notions.join(' · ')}</div></div>
    <div class="exo-foot">
      <a class="btn small primary" href="annale.html?id=${a.id}">${icon('pencil')}Travailler</a>
      <a class="btn small" href="${a.liens.sujet}" target="_blank" rel="noopener">${icon('external')}Sujet officiel</a>
      <span class="sp"></span>
      <button class="btn small ${fait ? 'done' : ''}" data-fait="${a.id}" aria-pressed="${fait}">${icon('check')}${fait ? 'Fait' : 'Marquer fait'}</button>
    </div></article>`;
}
function carteSujet(s) {
  const fait = Fait.has(s.id);
  const total = s.parties ? s.parties.reduce((t, p) => t + p.points, 0) : null;
  const h = Math.floor(s.duree / 60), m = s.duree % 60;
  const duree = `${h ? h + ' h' : ''}${m ? (h ? ' ' : '') + m + (h ? '' : ' min') : ''}`;
  const parts = s.parties ? `<ul class="sujet-parts">${s.parties.map(p => { const a = LC.annales.find(x => x.id === p.annale); return `<li><span><a href="annale.html?id=${a.id}">${a.concours} ${a.annee} ${a.epreuve.replace('Mathématiques', 'Maths')}, ${a.partie}</a> — ${p.questions}</span><span class="pts">${String(p.points).replace('.', ',')} pts</span><small>Barème indicatif : ${p.detail}</small></li>`; }).join('')}</ul>` : '';
  return `<article class="exo ${fait ? 'is-done' : ''}" data-id="${s.id}">
    <div class="exo-head"><span class="exo-num">${s.type === 'examen' ? 'Examen blanc' : 'Devoir'}</span><span class="exo-title">${s.titre}</span></div>
    <div class="chips"><span class="chip brique">${duree}</span>${total ? `<span class="chip">sur ${total} points</span>` : ''}${s.chapitres.map(id => `<span class="chip bleu">${esc(chap(id).titre)}</span>`).join('')}</div>
    <p class="muted">${s.description}<br><em>${s.origine}</em></p>
    ${parts}
    <div class="exo-foot">
      ${s.enonce ? `<a class="btn small primary" href="${lecteurUrl(s.enonce.doc, s.enonce.page)}">${icon('eye')}Sujet</a><a class="btn small" href="${lecteurUrl(s.corrige.doc, s.corrige.page)}">${icon('check')}Corrigé</a>` : ''}
      <span class="timer" data-timer="${s.id}" data-duree="${s.duree}"><output>${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00</output>
        <button class="icon-btn" data-t="go" aria-label="Démarrer ou mettre en pause">${icon('play')}</button><button class="icon-btn" data-t="reset" aria-label="Remettre à zéro">${icon('reset')}</button></span>
      <span class="sp"></span>
      <button class="btn small ${fait ? 'done' : ''}" data-fait="${s.id}" aria-pressed="${fait}">${icon('check')}${fait ? 'Fait' : 'Marquer fait'}</button>
    </div></article>`;
}

/* chronomètre d'examen (état conservé dans le navigateur) */
function initTimers(root = document) {
  $$('[data-timer]', root).forEach(t => {
    const id = t.dataset.timer, total = Number(t.dataset.duree) * 60;
    const out = $('output', t), go = $('[data-t="go"]', t);
    const etat = () => store.get('timer:' + id, { reste: total, depart: null });
    const reste = s => s.depart ? s.reste - (Date.now() - s.depart) / 1000 : s.reste;
    const fmt = r => { const a = Math.abs(Math.round(r)); return (r < 0 ? '+' : '') + [a / 3600, a % 3600 / 60, a % 60].map(x => String(Math.floor(x)).padStart(2, '0')).join(':'); };
    const draw = () => { const s = etat(), r = reste(s); out.textContent = fmt(r); t.classList.toggle('run', !!s.depart); t.classList.toggle('over', r < 0); go.innerHTML = icon(s.depart ? 'pause' : 'play'); };
    go.addEventListener('click', () => { const s = etat(); store.set('timer:' + id, s.depart ? { reste: reste(s), depart: null } : { reste: s.reste, depart: Date.now() }); draw(); });
    $('[data-t="reset"]', t).addEventListener('click', () => { store.set('timer:' + id, { reste: total, depart: null }); draw(); });
    draw(); setInterval(draw, 1000);
  });
}

/* boutons « fait » (délégation) */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-fait]');
  if (!b) return;
  const on = Fait.toggle(b.dataset.fait);
  $$(`[data-fait="${b.dataset.fait}"]`).forEach(x => { x.classList.toggle('done', on); x.setAttribute('aria-pressed', on); x.innerHTML = icon('check') + (on ? 'Fait' : 'Marquer fait'); x.closest('.exo')?.classList.toggle('is-done', on); });
});
/* corrigé : petit rappel pour chercher d'abord */
document.addEventListener('click', e => {
  const a = e.target.closest('[data-corrige]');
  if (!a || store.get('corrige-ok', false)) return;
  if (!confirm('As-tu cherché l\'exercice avant d\'ouvrir le corrigé ?\n(Ce message ne s\'affichera plus.)')) e.preventDefault();
  store.set('corrige-ok', true);
});

/* ------------------------------ filtres génériques */
function filtrable(container, items, render, groupes, opts = {}) {
  const etat = Object.fromEntries(groupes.map(g => [g.cle, 'tous']));
  let texte = '';
  const bar = document.createElement('div');
  bar.className = 'filters';
  bar.innerHTML = groupes.map(g => `<div class="filter-group" data-g="${g.cle}"><span>${g.label}</span>${[['tous', 'Tous'], ...g.options].map(([v, l]) => `<button class="fbtn" data-v="${v}" aria-pressed="${v === 'tous'}">${l}</button>`).join('')}</div>`).join('') +
    `<input class="filter-search" type="search" placeholder="Filtrer par mot-clé…" aria-label="Filtrer"><span class="filter-count"></span>`;
  const list = document.createElement('div');
  list.className = 'grid';
  container.append(bar, list);
  const draw = () => {
    const t = texte.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const r = items.filter(it => groupes.every(g => etat[g.cle] === 'tous' || g.test(it, etat[g.cle])) &&
      (!t || plain(JSON.stringify(it)).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').includes(t)));
    list.innerHTML = r.length ? r.map(render).join('') : '<div class="empty">Aucun élément ne correspond à ces filtres.</div>';
    $('.filter-count', bar).textContent = `${r.length} / ${items.length}`;
    renderMath(list); initTimers(list);
  };
  bar.addEventListener('click', e => {
    const b = e.target.closest('.fbtn'); if (!b) return;
    const g = b.closest('.filter-group');
    $$('.fbtn', g).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    etat[g.dataset.g] = b.dataset.v; draw();
  });
  $('.filter-search', bar).addEventListener('input', e => { texte = e.target.value; draw(); });
  draw();
  return { draw };
}
const groupeNiveau = { cle: 'niveau', label: 'Niveau', options: [['1', 'N1'], ['2', 'N2'], ['3', 'N3'], ['4', 'N4']], test: (it, v) => String(it.niveau) === v };
const groupeChapitre = () => ({ cle: 'chap', label: 'Chapitre', options: LC.chapitres.map(c => [c.id, String(c.num)]), test: (it, v) => it.chapitre === v || (it.chapitres || []).includes(v) });
const groupeStatut = { cle: 'statut', label: 'Statut', options: [['afaire', 'À faire'], ['fait', 'Faits'], ['star', '★']], test: (it, v) => v === 'star' ? !!it.incontournable : (v === 'fait') === Fait.has(it.id) };
const groupeOrigine = { cle: 'origine', label: 'Origine', options: [['td', 'TD classe'], ['lecolle', 'Le Collé'], ['devoir', 'Devoir']], test: (it, v) => it.origine === v };

/* ------------------------------ amorçage commun */
function initPage(courant) {
  renderSidebar(courant);
  renderBottomNav(courant);
  document.addEventListener('lc:fait', () => renderSidebar(courant));
  const y = $('#annee'); if (y) y.textContent = new Date().getFullYear();
}
