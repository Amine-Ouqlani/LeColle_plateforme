/* Le Collé — page d'un chapitre */
'use strict';

const C = chap(params.get('id')) || LC.chapitres[0];
initPage(C.id);
document.title = `${C.num}. ${C.titre} — Le Collé`;
$('#crumb').textContent = `${C.num}. ${C.titre}`;
$('#titre').textContent = `Chapitre ${C.num} — ${C.titre}`;
$('#accroche').textContent = C.accroche;
noterVisite(`Chapitre ${C.num} — ${C.titre}`, `chapitre.html?id=${C.id}`);

const EXOS = LC.exercices.filter(e => e.chapitre === C.id);
const ANNS = LC.annales.filter(a => a.chapitres.includes(C.id)).sort((a, b) => b.annee - a.annee);
const SUJETS = LC.entrainement.filter(s => s.chapitres.includes(C.id));
$('[data-count="td"]').textContent = EXOS.length;
$('[data-count="annales"]').textContent = ANNS.length;

/* navigation entre chapitres */
(() => {
  const i = LC.chapitres.indexOf(C), prev = LC.chapitres[i - 1], next = LC.chapitres[i + 1];
  $('#chap-nav').innerHTML = [prev && `<a href="chapitre.html?id=${prev.id}">← ${prev.titre}</a>`, next && `<a href="chapitre.html?id=${next.id}">${next.titre} →</a>`].filter(Boolean).join(' · ');
})();

/* ------------------------------ lecteur intégré (iframe chargée à la demande) */
function lecteurIntegre(panel, cfg) {
  // cfg : { doc, debut, fin, page, mode, sections:[{num,titre,page}], titre, statique }
  let docId = cfg.doc, mode = cfg.mode || 'doc', anim = true;
  const sect = cfg.sections || [];
  const url = page => lecteurUrl(docId, page, { embed: 1, ...(mode === 'slides' ? { mode: 'slides' } : {}), ...(cfg.debut ? { debut: rangeOf().debut, fin: rangeOf().fin } : {}) });
  const rangeOf = () => (docId === cfg.doc ? { debut: cfg.debut, fin: cfg.fin } : { debut: cfg.statique.debut, fin: cfg.statique.fin });
  const d = doc(cfg.doc);
  panel.innerHTML = `
    <div class="viewer-layout">
      <div>
        <h2 class="h2" style="font-size:17px">${cfg.titre}</h2>
        <p class="muted">${d.description}</p>
        <ul class="sec-list" style="margin-top:12px">${sect.map((s, i) => `<li><button data-i="${i}"><span class="n">${s.num || '•'}</span>${s.titre}</button></li>`).join('')}</ul>
        ${cfg.extra || ''}
      </div>
      <div>
        <div class="viewer-tools">
          ${cfg.statique ? `<div class="seg" role="group" aria-label="Animations"><button data-anim="1" aria-pressed="true">Avec animations</button><button data-anim="0" aria-pressed="false">Sans</button></div>` : ''}
          <span class="sp"></span>
          <a class="btn small" data-full href="#">${icon('expand')}Plein écran</a>
          <a class="btn small" href="${d.fichier}" download>${icon('download')}PDF</a>
          <a class="btn small ghost" href="${d.source}" download>${icon('code')}LaTeX</a>
        </div>
        <iframe class="viewer-frame ${mode === 'slides' ? 'slides' : ''}" title="${esc(cfg.titre)}" loading="lazy"></iframe>
      </div>
    </div>`;
  const frame = $('iframe', panel);
  let page = cfg.page || cfg.debut || 1;
  const majFull = () => { $('[data-full]', panel).href = lecteurUrl(docId, page, mode === 'slides' ? { mode: 'slides' } : {}); };
  const aller = p => {
    page = p; majFull();
    if (frame.src && frame.contentWindow && frame.dataset.doc === docId) frame.contentWindow.postMessage({ lcGoto: p }, '*');
    else { frame.dataset.doc = docId; frame.src = url(p); }
    $$('.sec-list button[data-i]', panel).forEach(b => { const s = sect[b.dataset.i]; b.classList.toggle('active', (anim || !s.pageStatique ? s.page : s.pageStatique) === p); });
  };
  $$('.sec-list button[data-i]', panel).forEach(b => b.addEventListener('click', () => { const s = sect[b.dataset.i]; aller(anim || !s.pageStatique ? s.page : s.pageStatique); if (innerWidth < 1100) frame.scrollIntoView({ behavior: 'smooth' }); }));
  $$('[data-anim]', panel).forEach(b => b.addEventListener('click', () => {
    anim = b.dataset.anim === '1';
    $$('[data-anim]', panel).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    docId = anim ? cfg.doc : cfg.statique.doc;
    $('[download]', panel).href = doc(docId).fichier;
    aller(rangeOf().debut);
  }));
  addEventListener('message', e => { if (e.source === frame.contentWindow && e.data && e.data.lcPage) { page = e.data.lcPage; majFull(); } });
  return { charger() { if (!frame.src) aller(page); }, aller };
}

/* ------------------------------ Vue d'ensemble */
(function ensemble() {
  const p = $('#panel-ensemble');
  const pr = progressionChapitre(C.id);
  const tuile = (tab, ic, cls, titre, texte) => `<a class="card tile" href="#${tab}"><span class="tile-ico ${cls}">${icon(ic)}</span><div><h3>${titre}</h3><p>${texte}</p></div></a>`;
  p.innerHTML = `
    ${C.manque ? `<div class="notice" style="margin-bottom:18px">${C.manque}</div>` : ''}
    <div class="grid grid-3">
      ${tuile('cours', 'book', '', 'Cours complet', `${doc(C.cours.doc).titre} — ${C.cours.sections.length} parties, corrigés inclus`)}
      ${tuile('fiche', 'sheet', 'ocre', 'Fiche de référence', C.fiche ? `Pages ${C.fiche.debut} à ${C.fiche.fin}, §${C.fiche.sections[0].num} à §${C.fiche.sections.at(-1).num}` : 'Pas encore disponible : voir l\'index des méthodes du volume 2')}
      ${tuile('presentation', 'slides', 'vert', 'Présentation', C.presentation ? `${C.presentation.sections.length} parties, diapositives interactives` : 'Pas encore disponible')}
      ${tuile('td', 'pencil', '', 'TD et exercices', `${EXOS.length} exercices corrigés, niveaux N1 à N4`)}
      ${tuile('annales', 'trophy', 'brique', 'Annales de concours', `${ANNS.length} extraits de la Banque PT, corrigés`)}
      ${tuile('entrainement', 'clock', 'ocre', 'Tests et examens blancs', `${SUJETS.length} sujets chronométrés et ${C.flash.length} questions flash`)}
    </div>
    <div class="section grid grid-2">
      <div><h2 class="h2">${icon('list')}Prérequis</h2><ul class="check-list">${C.prerequis.map(x => `<li>${x}</li>`).join('')}</ul></div>
      <div><h2 class="h2">${icon('check')}Ma progression</h2>
        <div class="card"><div class="meter-row"><span>Exercices et annales faits</span><span>${pr.done}/${pr.total}</span></div><div class="meter"><span style="width:${pr.pct}%"></span></div>
        <p class="muted" style="margin-top:10px">La progression est enregistrée dans ce navigateur (boutons « Marquer fait »).</p></div>
        <h2 class="h2" style="margin-top:20px">${icon('star')}Incontournables</h2>
        <ul class="sec-list">${[...EXOS, ...ANNS].filter(x => x.incontournable).map(x => x.num ? `<li><a href="#td" data-goto-exo="${x.id}"><span class="n">${x.num}</span>${x.titre}</a></li>` : `<li><a href="annale.html?id=${x.id}"><span class="n">${x.annee}</span>${x.titre}</a></li>`).join('')}</ul>
      </div>
    </div>
    <div class="section"><h2 class="h2">${icon('book')}Plan du cours</h2>
      <ul class="sec-list">${C.cours.sections.map(s => `<li><a href="?id=${C.id}&section=${encodeURIComponent(s.num)}#cours"><span class="n">${s.num}</span>${s.titre}</a></li>`).join('')}</ul></div>`;
  renderMath(p);
  $$('[data-goto-exo]', p).forEach(a => a.addEventListener('click', () => setTimeout(() => $('#exo-' + a.dataset.gotoExo)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60)));
})();

/* ------------------------------ Cours */
const lecteurCours = lecteurIntegre($('#panel-cours'), {
  doc: C.cours.doc, debut: C.cours.debut, fin: C.cours.corriges.fin, titre: 'Le cours, partie par partie', sections: C.cours.sections,
  page: (C.cours.sections.find(s => s.num === params.get('section')) || {}).page || C.cours.debut,
  extra: `<div class="sep"></div><ul class="sec-list"><li><button data-corriges><span class="n">✓</span>Corrigés des exercices (p. ${C.cours.corriges.debut})</button></li></ul>`
});
$('[data-corriges]').addEventListener('click', () => lecteurCours.aller(C.cours.corriges.debut));

/* ------------------------------ Fiche */
let lecteurFiche = null;
if (C.fiche) {
  lecteurFiche = lecteurIntegre($('#panel-fiche'), { doc: 'fiche', debut: C.fiche.debut, fin: C.fiche.fin, titre: 'La fiche du chapitre', sections: C.fiche.sections,
    extra: `<div class="sep"></div><p class="muted">À imprimer et à garder à côté de soi : télécharger le PDF (6 pages, les deux chapitres).</p>` });
} else {
  $('#panel-fiche').innerHTML = `<div class="notice">${C.manque}</div>
    <div class="btns" style="margin-top:14px"><a class="btn primary" href="${lecteurUrl(C.cours.doc, 13)}">${icon('list')}Index des méthodes du volume 2</a></div>`;
}

/* ------------------------------ Présentation */
let lecteurPres = null;
if (C.presentation) {
  lecteurPres = lecteurIntegre($('#panel-presentation'), { doc: C.presentation.doc, mode: 'slides', debut: C.presentation.debut, fin: C.presentation.fin,
    statique: C.presentation.statique, titre: 'Les diapositives du chapitre', sections: C.presentation.sections,
    extra: `<div class="sep"></div><p class="muted">Flèches du clavier, espace ou glissement du doigt pour avancer ; « Plein écran » pour présenter.</p>` });
} else {
  $('#panel-presentation').innerHTML = `<div class="notice">${C.manque}</div>`;
}

/* ------------------------------ TD */
(function td() {
  const p = $('#panel-td');
  p.innerHTML = `<p class="muted" style="margin-bottom:14px">${EXOS.filter(e => e.origine === 'td').length ? 'Les exercices « TD de la classe » reprennent la feuille de TD intégralement ; les autres complètent l\'entraînement. ' : ''}Énoncé et corrigé s'ouvrent séparément : chercher d'abord.</p>`;
  filtrable(p, EXOS, e => carteExercice(e), [groupeNiveau, groupeOrigine, groupeStatut]);
  const cible = params.get('exo');
  if (cible) document.addEventListener('lc:tab', ev => { if (ev.detail === 'td') setTimeout(() => { const el = $('#exo-' + cible); if (el) { el.scrollIntoView({ block: 'center' }); el.style.boxShadow = '0 0 0 3px var(--ocre)'; } }, 80); }, { once: true });
})();

/* ------------------------------ Annales */
(function annales() {
  const p = $('#panel-annales');
  p.innerHTML = ANNS.length ? `<p class="muted" style="margin-bottom:14px">Extraits de sujets officiels de la Banque PT qui portent sur ce chapitre. Chaque fiche donne les questions retenues, les méthodes du cours à mobiliser, des indications et une correction détaillée.</p>
    <div class="grid">${ANNS.map(a => carteAnnale(a)).join('')}</div>` : '<div class="empty">Aucune annale sélectionnée pour ce chapitre.</div>';
  renderMath(p);
})();

/* ------------------------------ Entraînement */
(function entrainement() {
  const p = $('#panel-entrainement');
  p.innerHTML = `
    <h2 class="h2">${icon('check')}Questions flash</h2>
    <p class="muted">Répondre de tête, puis ouvrir pour vérifier.</p>
    <div class="flash">${C.flash.map(f => `<details><summary>${f.q}</summary><div class="rep">${f.r}</div></details>`).join('')}</div>
    <div class="section"><h2 class="h2">${icon('clock')}Devoirs et examens blancs</h2>
      ${SUJETS.length ? `<div class="grid">${SUJETS.map(carteSujet).join('')}</div>` : '<div class="empty">Pas encore de sujet pour ce chapitre.</div>'}</div>`;
  renderMath(p); initTimers(p);
})();

/* ------------------------------ Ressources */
(function ressources() {
  const p = $('#panel-ressources');
  const docs = [C.cours.doc, ...(C.fiche ? ['fiche'] : []), ...(C.presentation ? ['presentation', 'presentationStatique'] : []), ...(C.revision ? ['revision'] : [])];
  p.innerHTML = `
    <div class="grid grid-2">
      <div><h2 class="h2">${icon('alert')}Erreurs fréquentes</h2><ul class="check-list warn-list">${C.erreurs.map(x => `<li>${x}</li>`).join('')}</ul></div>
      <div><h2 class="h2">${icon('list')}Prérequis à revoir</h2><ul class="check-list">${C.prerequis.map(x => `<li>${x}</li>`).join('')}</ul>
        ${C.revision ? `<h2 class="h2" style="margin-top:22px">${icon('pencil')}Fiche de révision du devoir</h2>
          <ul class="sec-list">${C.revision.sections.map(s => `<li><a href="${lecteurUrl('revision', s.page)}"><span class="n">p.${s.page}</span>${s.titre}</a></li>`).join('')}</ul>` : ''}
      </div>
    </div>
    <div class="section"><h2 class="h2">${icon('box')}Documents du chapitre</h2>
      <div class="grid grid-2">${docs.map(id => { const d = doc(id); return `<div class="card"><h3>${d.titre}</h3><p>${d.sousTitre}</p><div class="btns" style="margin-top:10px">
        <a class="btn small primary" href="${lecteurUrl(id, 1, d.type === 'presentation' ? { mode: 'slides' } : {})}">${icon('eye')}Consulter</a>
        <a class="btn small" href="${d.fichier}" download>${icon('download')}PDF</a><a class="btn small ghost" href="${d.source}" download>${icon('code')}LaTeX</a></div></div>`; }).join('')}</div></div>`;
  renderMath(p);
})();

initTabs('ensemble');
document.addEventListener('lc:tab', e => {
  if (e.detail === 'cours') lecteurCours.charger();
  if (e.detail === 'fiche' && lecteurFiche) lecteurFiche.charger();
  if (e.detail === 'presentation' && lecteurPres) lecteurPres.charger();
});
const t0 = location.hash.slice(1);
if (t0 === 'cours') lecteurCours.charger();
if (t0 === 'fiche' && lecteurFiche) lecteurFiche.charger();
if (t0 === 'presentation' && lecteurPres) lecteurPres.charger();
