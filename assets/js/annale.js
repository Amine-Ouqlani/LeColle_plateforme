/* Le Collé — une annale */
'use strict';

const A = LC.annales.find(a => a.id === params.get('id')) || LC.annales[0];
cadre('pt', 'annales');
document.title = `${A.concours} ${A.annee} — ${plain(A.titre)} — Le Collé`;

(async function () {
  const root = $('#contenu');
  const i = LC.annales.indexOf(A), prev = LC.annales[i - 1], next = LC.annales[i + 1];
  const l = A.liens;
  const liens = [
    `<a href="${l.sujet}" target="_blank" rel="noopener">Sujet officiel (PDF)</a>`,
    `<a href="${l.page}" target="_blank" rel="noopener">Page WikiPrépa</a>`,
    l.rapport && `<a href="${l.rapport}" target="_blank" rel="noopener">Rapport du jury</a>`,
    l.corrigeExterne && `<a href="${l.corrigeExterne}" target="_blank" rel="noopener">Un autre corrigé (externe)</a>`
  ].filter(Boolean).join('');
  root.innerHTML = `
    <p class="kicker"><a href="annales.html?ch=${A.chapitres[0]}">Annales</a> · ${A.concours} ${A.annee}</p>
    <h1>${A.titre}</h1>
    <p class="meta">${A.concours}, ${A.epreuve} ${A.annee}, ${A.partie} — questions ${A.questions}. Environ ${A.duree}.</p>
    <p class="links" style="margin-top:14px">${liens}</p>
    <p style="margin-top:22px"><b>À revoir avant de commencer.</b></p>
    <ul>${A.methodes.map(([ref, txt]) => { const r = ficheRef(ref, A.chapitres); return `<li><a href="${r.url}">${r.label}</a> — ${txt}</li>`; }).join('')}</ul>
    <p class="muted" style="margin-top:14px">Lis la question sur le sujet officiel et cherche-la ; les énoncés ci-dessous en sont des résumés. Ouvre l'indication si tu bloques, la correction ensuite.</p>
    <div class="ann-body" id="ann-body"><p class="muted">Chargement…</p></div>
    <nav class="pager">${prev ? `<a href="annale.html?id=${prev.id}">← ${prev.annee}, ${prev.partie}</a>` : '<span></span>'}${next ? `<a href="annale.html?id=${next.id}">${next.annee}, ${next.partie} →</a>` : ''}</nav>`;
  renderMath(root);
  try {
    const r = await fetch(A.contenu);
    if (!r.ok) throw new Error(r.status);
    $('#ann-body').innerHTML = await r.text();
  } catch (e) {
    $('#ann-body').innerHTML = `<p class="note">La correction n'a pas pu être chargée (${esc(e.message)}).</p>`;
  }
  /* renvois « fiche §x.y » cliquables */
  $$('#ann-body .q-ref').forEach(el => {
    const t = el.textContent, m = t.match(/§\s?(\d\.\d)/);
    if (!m) return;
    const a = document.createElement('a');
    a.className = 'q-ref'; a.href = ficheRef((/volume 2/.test(t) ? 'V2 ' : '') + m[1], A.chapitres).url; a.textContent = t;
    el.replaceWith(a);
  });
  renderMath($('#ann-body'));
  /* une ancre par question (#q-1, #q-2…), utilisée par la page Annales */
  $$('#ann-body article.q').forEach((q, k) => { q.id = 'q-' + (k + 1); });
  const cible = location.hash && document.getElementById(location.hash.slice(1));
  if (cible) { cible.classList.add('cible'); cible.scrollIntoView({ block: 'start' }); }
})();
