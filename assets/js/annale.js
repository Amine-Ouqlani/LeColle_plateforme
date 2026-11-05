/* Le Collé — page d'une annale */
'use strict';

const A = LC.annales.find(a => a.id === params.get('id')) || LC.annales[0];
initPage('annales');
document.title = `${A.concours} ${A.annee} — ${plain(A.titre)} — Le Collé`;
$('#crumb').textContent = `${A.concours} ${A.annee}`;
$('#titre').innerHTML = A.titre;
noterVisite(`Annale ${A.annee} — ${plain(A.titre)}`, `annale.html?id=${A.id}`);

(async function () {
  const root = $('#annale');
  const i = LC.annales.indexOf(A), prev = LC.annales[i - 1], next = LC.annales[i + 1];
  const fait = Fait.has(A.id);
  const l = A.liens;
  root.innerHTML = `
    <div class="ann-head">
      <div class="chips"><span class="chip brique">Sujet officiel</span><span class="chip">${A.concours}</span><span class="chip">${A.epreuve} · ${A.annee}</span><span class="chip">${A.partie}</span>
        ${A.chapitres.map(id => `<a class="chip bleu" href="chapitre.html?id=${id}#annales">${esc(chap(id).titre)}</a>`).join('')}${niveauChip(A.niveau)}<span class="chip">${A.duree} conseillées</span></div>
      <p class="muted"><b>Questions retenues :</b> ${A.questions}. <b>Notions :</b> ${A.notions.join(' · ')}.</p>
      <div class="ann-links">
        <a class="btn small primary" href="${l.sujet}" target="_blank" rel="noopener">${icon('external')}Sujet officiel (PDF)</a>
        <a class="btn small" href="${l.page}" target="_blank" rel="noopener">${icon('external')}Page WikiPrépa</a>
        ${l.rapport ? `<a class="btn small" href="${l.rapport}" target="_blank" rel="noopener">${icon('external')}Rapport du jury</a>` : ''}
        ${l.corrigeExterne ? `<a class="btn small ghost" href="${l.corrigeExterne}" target="_blank" rel="noopener" title="Corrigé publié sur prepas.org, non relu par Le Collé">${icon('external')}Autre corrigé (externe)</a>` : ''}
        <span style="flex:1"></span>
        <button class="btn small ${fait ? 'done' : ''}" data-fait="${A.id}" aria-pressed="${fait}">${icon('check')}${fait ? 'Fait' : 'Marquer fait'}</button>
      </div>
      <div class="ann-savoir"><h3>Ce qu'il faut savoir</h3><ul>${A.methodes.map(([ref, txt]) => { const r = ficheRef(ref); return `<li><a href="${r.url}">${r.label}</a> — ${txt}</li>`; }).join('')}</ul></div>
      <p class="muted">Mode d'emploi : lire la question sur le sujet officiel, chercher, ouvrir l'indication si besoin, puis la correction. Les énoncés ci-dessous sont des résumés rédigés par Le Collé.</p>
    </div>
    <div class="ann-body" id="ann-body"><p class="muted">Chargement de la correction…</p></div>
    <div class="pager">${prev ? `<a class="btn" href="annale.html?id=${prev.id}">${icon('left')}${prev.annee} — ${prev.partie}</a>` : '<span></span>'}${next ? `<a class="btn" href="annale.html?id=${next.id}">${next.annee} — ${next.partie}${icon('right')}</a>` : ''}</div>`;
  renderMath($('.ann-head', root));
  try {
    const r = await fetch(A.contenu);
    if (!r.ok) throw new Error(r.status);
    $('#ann-body').innerHTML = await r.text();
  } catch (e) {
    $('#ann-body').innerHTML = `<div class="notice">La correction n'a pas pu être chargée (${esc(e.message)}). Si le site est ouvert directement depuis un fichier, le lancer via un serveur web ou GitHub Pages.</div>`;
  }
  $$('#ann-body .q-ref').forEach(r => {
    const t = r.textContent, v2 = /volume 2/.test(t), m = t.match(/§\s?(\d\.\d)/);
    if (!m) return;
    const ref = ficheRef((v2 ? 'V2 ' : '') + m[1]);
    const a = document.createElement('a'); a.className = 'q-ref'; a.href = ref.url; a.textContent = t; r.replaceWith(a);
  });
  renderMath($('#ann-body'));
  $('#titre') && renderMath($('#titre'));
})();
