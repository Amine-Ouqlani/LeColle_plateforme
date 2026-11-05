/* Le Collé — page d'accueil */
'use strict';

initPage('accueil');

function docCarte(id) {
  const d = doc(id);
  const slides = d.type === 'presentation' ? { mode: 'slides' } : {};
  const ic = { cours: ['book', ''], fiche: ['sheet', 'ocre'], presentation: ['slides', 'vert'], devoir: ['pencil', 'brique'], archive: ['box', ''] }[d.type];
  return `<div class="card tile"><span class="tile-ico ${ic[1]}">${icon(ic[0])}</span><div style="min-width:0">
    <h3>${d.titre}</h3><p>${d.sousTitre} · ${d.pages} pages · ${d.version}</p>
    <div class="btns" style="margin-top:10px"><a class="btn small primary" href="${lecteurUrl(id, 1, slides)}">${icon('eye')}Consulter</a>
    <a class="btn small" href="${d.fichier}" download>${icon('download')}PDF</a>
    <a class="btn small ghost" href="${d.source}" download>${icon('code')}LaTeX</a></div></div></div>`;
}

/* ------------------------------ Accueil */
(function accueil() {
  const p = $('#panel-accueil');
  const dernier = store.get('dernier', null);
  const nbExo = LC.exercices.length, nbAnn = LC.annales.length;
  const f = Fait.all();
  const faits = [...LC.exercices, ...LC.annales, ...LC.entrainement].filter(x => f.has(x.id)).length;
  const avancement = LC.chapitres.map(c => {
    const pr = progressionChapitre(c.id);
    const nE = LC.exercices.filter(e => e.chapitre === c.id).length, nA = LC.annales.filter(a => a.chapitres.includes(c.id)).length;
    const ok = (b, t) => `<span class="chip ${b ? 'vert' : ''}">${b ? '✓' : '—'} ${t}</span>`;
    return `<a class="card chap" href="chapitre.html?id=${c.id}">
      <div class="chap-top"><span class="chap-num">${c.num}</span><div><h3>${c.titre}</h3><p class="muted">${c.statut === 'complet' ? 'Toutes les ressources sont en ligne' : 'Ressources partielles'}</p></div></div>
      <div class="res-list">${ok(true, 'Cours')}${ok(!!c.fiche, 'Fiche')}${ok(!!c.presentation, 'Présentation')}${ok(nE, nE + ' exercices')}${ok(nA, nA + ' annales')}</div>
      <div><div class="meter-row"><span>Ma progression</span><span>${pr.done}/${pr.total}</span></div><div class="meter"><span style="width:${pr.pct}%"></span></div></div></a>`;
  }).join('');
  const recents = Object.entries(LC.documents).filter(([, d]) => d.type !== 'archive').sort((a, b) => b[1].maj.localeCompare(a[1].maj)).slice(0, 4);
  p.innerHTML = `
    <div class="hero">
      <div class="hero-card">
        <svg class="deco" viewBox="-1.3 -2.3 2.6 4.6"><path d="${(() => { let d = ''; for (let i = 0; i <= 240; i++) { const t = i / 240 * 2 * Math.PI; d += (i ? 'L' : 'M') + Math.cos(3 * t).toFixed(3) + ' ' + (-2 * Math.sin(t)).toFixed(3); } return d; })()}" fill="none" stroke="currentColor" stroke-width=".07"/></svg>
        <h2>Tout le travail des séances, au même endroit</h2>
        <p>Chaque chapitre réunit le cours complet, la fiche de référence, la présentation, les TD corrigés par niveau, une sélection d'annales de la Banque PT et des sujets chronométrés.</p>
        <div class="btns">${dernier ? `<a class="btn" href="${dernier.url}">${icon('play')}Reprendre : ${esc(dernier.titre).slice(0, 48)}</a>` : `<a class="btn" href="chapitre.html?id=determinants">${icon('play')}Commencer par le chapitre 1</a>`}
          <a class="btn" href="${lecteurUrl('fiche', 1)}">${icon('sheet')}Fiche de référence</a></div>
      </div>
      <div class="stats">
        <div class="stat"><b>${LC.chapitres.length}</b><span>chapitres</span></div>
        <div class="stat"><b>${nbExo}</b><span>exercices corrigés</span></div>
        <div class="stat"><b>${nbAnn}</b><span>extraits d'annales corrigés</span></div>
        <div class="stat"><b>${faits}</b><span>éléments déjà faits</span></div>
      </div>
    </div>

    <div class="section"><h2 class="h2">${icon('book')}Chapitres et avancement</h2>
      <div class="grid grid-3">${avancement}</div></div>

    <div class="section"><h2 class="h2">${icon('list')}Le parcours conseillé</h2>
      <p class="muted">Pour chaque chapitre, dans cet ordre.</p>
      <ol class="check-list" style="counter-reset:none">
        <li><b>Comprendre</b> : la présentation (en séance), puis le cours du livre, partie par partie.</li>
        <li><b>Retenir</b> : la fiche de référence et les questions flash du chapitre.</li>
        <li><b>S'exercer</b> : les TD du niveau N1 puis N2, en cherchant avant d'ouvrir le corrigé.</li>
        <li><b>Approfondir</b> : le niveau N3 et les exercices marqués ★.</li>
        <li><b>Se mettre en condition</b> : annales (N4), puis un examen blanc chronométré.</li>
      </ol></div>

    <div class="section grid grid-2">
      <div><h2 class="h2">${icon('clock')}Dernières mises à jour</h2>
        <ul class="sec-list">${recents.map(([id, d]) => `<li><a href="${lecteurUrl(id, 1, d.type === 'presentation' ? { mode: 'slides' } : {})}"><span class="n">${d.maj.slice(8)}/${d.maj.slice(5, 7)}</span>${d.titre}</a></li>`).join('')}
        ${LC.annales.slice().sort((a, b) => b.annee - a.annee).slice(0, 3).map(a => `<li><a href="annale.html?id=${a.id}"><span class="n">${a.annee}</span>Annale : ${a.titre}</a></li>`).join('')}</ul></div>
      <div><h2 class="h2">${icon('star')}Ressources importantes</h2>
        <div class="grid">${['livre', 'fiche', 'presentation'].map(docCarte).join('')}</div></div>
    </div>`;
  renderMath(p);
})();

/* ------------------------------ Chapitres */
(function chapitres() {
  const p = $('#panel-chapitres');
  p.innerHTML = `<div class="grid">${LC.chapitres.map(c => {
    const pr = progressionChapitre(c.id);
    return `<a class="card chap" href="chapitre.html?id=${c.id}">
      <div class="chap-top"><span class="chap-num">${c.num}</span><div><h3>${c.titre}</h3></div></div>
      <p>${c.accroche}</p>
      <div class="res-list"><span class="chip bleu">${c.cours.sections.length} parties de cours</span>${c.fiche ? '<span class="chip ocre">fiche</span>' : ''}${c.presentation ? '<span class="chip vert">présentation</span>' : ''}<span class="chip">${LC.exercices.filter(e => e.chapitre === c.id).length} exercices</span><span class="chip brique">${LC.annales.filter(a => a.chapitres.includes(c.id)).length} annales</span></div>
      ${c.manque ? `<p class="muted">${c.manque}</p>` : ''}
      <div><div class="meter-row"><span>Ma progression</span><span>${pr.pct} %</span></div><div class="meter"><span style="width:${pr.pct}%"></span></div></div></a>`;
  }).join('')}</div>`;
  renderMath(p);
})();

/* ------------------------------ Exercices */
(function exercices() {
  const p = $('#panel-exercices');
  $('[data-count="exercices"]').textContent = LC.exercices.length;
  p.innerHTML = `<p class="muted" style="margin-bottom:14px">Les énoncés et les corrigés s'ouvrent séparément dans le lecteur : chercher d'abord, corriger ensuite. Niveaux : N1 Fondamentaux · N2 Maîtrise · N3 Approfondissement · N4 Type concours.</p>`;
  filtrable(p, LC.exercices, e => carteExercice(e, { chapitre: true }), [groupeChapitre(), groupeNiveau, groupeOrigine, groupeStatut]);
})();

/* ------------------------------ Annales */
(function annales() {
  const p = $('#panel-annales');
  $('[data-count="annales"]').textContent = LC.annales.length;
  p.innerHTML = `<div class="notice" style="margin-bottom:16px"><b>Comment ces annales ont été choisies.</b> Les sujets de mathématiques de la Banque PT (épreuves A, B et C, 2014–2026) ont été parcourus ; seules les parties qui mobilisent nos chapitres sont retenues, avec leurs questions précises. Les sujets officiels restent sur WikiPrépa (liens fournis) ; les résumés et corrections sont rédigés par Le Collé et vérifiés par calcul.</div>`;
  filtrable(p, LC.annales.slice().sort((a, b) => b.annee - a.annee), a => carteAnnale(a), [groupeChapitre(), groupeStatut]);
  const ec = document.createElement('details');
  ec.className = 'hors';
  ec.innerHTML = `<summary style="cursor:pointer;font-weight:600">Sujets examinés et écartés (hors de nos chapitres)</summary><ul style="margin-top:8px">${LC.annalesEcartees.map(x => `<li>${x}</li>`).join('')}</ul>`;
  p.appendChild(ec);
})();

/* ------------------------------ Entraînement */
(function entrainement() {
  const p = $('#panel-entrainement');
  p.innerHTML = `<div class="notice" style="margin-bottom:16px"><b>Conditions d'examen.</b> Sans livre ni fiche, calculatrice interdite (comme à la Banque PT), chronomètre lancé. Ensuite, correction avec la fiche avant de lire le corrigé, puis note sur le barème indicatif.</div>
    <div class="grid">${LC.entrainement.map(carteSujet).join('')}</div>`;
  renderMath(p); initTimers(p);
})();

/* ------------------------------ Bibliothèque */
(function bibliotheque() {
  const p = $('#panel-bibliotheque');
  p.innerHTML = `<p class="muted" style="margin-bottom:14px">Tous les documents, consultables en ligne ou téléchargeables, avec leurs sources LaTeX.</p>
    <div class="grid grid-2">${Object.keys(LC.documents).map(docCarte).join('')}</div>`;
})();

/* ------------------------------ Parcours */
(function parcours() {
  const p = $('#panel-parcours');
  p.innerHTML = `<h2 class="h2">${icon('clock')}Ce que nous avons construit, séance après séance</h2>
    <ol class="timeline">${LC.parcours.map(x => `<li><time>${x.date}</time><h4>${x.titre}</h4><p>${x.texte}</p>${x.docs.length ? `<div class="btns" style="margin-top:8px">${x.docs.map(id => `<a class="btn small" href="${lecteurUrl(id, 1, doc(id).type === 'presentation' ? { mode: 'slides' } : {})}">${doc(id).titre}</a>`).join('')}</div>` : ''}</li>`).join('')}</ol>`;
})();

initTabs('accueil');
document.addEventListener('lc:tab', e => { const nav = { accueil: 'accueil', chapitres: 'chapitres', exercices: 'exercices', annales: 'annales' }[e.detail] || 'accueil'; renderBottomNav(nav); });
