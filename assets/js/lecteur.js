/* Le Collé — lecteur PDF (pdf.js) : mode document (défilement) et mode diapositives */
'use strict';

(async function lecteur() {
  /* anciens identifiants (documents remplacés par un document par chapitre et des documents complets) */
  const ANCIENS = { livre: 'livret-pt', fiche: 'fiche-determinants', presentation: 'presentations-pt', presentationStatique: 'presentations-pt-statique' };
  const demande = params.get('doc') || 'livret-pt';
  const docId = LC.documents[demande] ? demande : (ANCIENS[demande] || 'livret-pt');
  if (docId !== demande) { params.set('doc', docId); params.delete('page'); history.replaceState(null, '', '?' + params.toString()); }
  const D = LC.documents[docId];
  if (!LC.documents[docId] && docId === 'fiche') location.replace(lecteurUrl('fiche-determinants', 1));
  const embed = params.get('embed') === '1';
  const slides = params.get('mode') === 'slides';
  if (embed) document.body.classList.add('embed');
  document.title = `${D.titre} — Le Collé ${(D.filiere || 'pt').toUpperCase()}`;

  // icônes de la barre
  $('#rd-dl').href = D.fichier;
  const fil = D.filiere || 'pt';
  document.body.dataset.filiere = fil;
  $('#rd-title').textContent = `${fil.toUpperCase()} · ${D.titre}`;
  $('#rd-back').href = fil === 'mp' ? 'mp.html' : 'pt.html';
  $('#rd-dl').setAttribute('download', nomFichier(D));
  if (document.referrer && new URL(document.referrer).origin === location.origin && !/lecteur\.html/.test(document.referrer)) $('#rd-back').href = document.referrer;
  if (slides) { $('#rd-zin').hidden = true; $('#rd-zout').hidden = true; } else { $('#rd-fs').hidden = true; }

  if (!window.pdfjsLib) { $('#rd-loading').innerHTML = `Le lecteur n'a pas pu démarrer. <a href="${D.fichier}">Ouvrir le PDF</a>`; return; }
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/vendor/pdfjs/pdf.worker.min.js';
  let pdf;
  try { pdf = await pdfjsLib.getDocument(D.fichier).promise; }
  catch (e) { $('#rd-loading').innerHTML = `Impossible de charger le document. <a href="${D.fichier}">Télécharger le PDF</a>`; return; }

  const N = pdf.numPages;
  const debut = Math.max(1, Number(params.get('debut')) || 1);
  const fin = Math.min(N, Number(params.get('fin')) || N);
  let page = Math.min(fin, Math.max(debut, Number(params.get('page')) || debut));
  $('#rd-total').textContent = fin;
  $('#rd-input').max = fin;
  $('#rd-loading').hidden = true;

  const signaler = () => {
    $('#rd-input').value = page;
    $$('#rd-outline button').forEach(b => b.classList.toggle('cur', Number(b.dataset.p) === courantSection()));
    if (embed && parent !== window) parent.postMessage({ lcPage: page }, '*');
  };
  let sectionsPages = [];
  const courantSection = () => { let c = null; for (const p of sectionsPages) if (p <= page) c = p; return c; };

  /* ---------- sommaire (signets du PDF) */
  (async () => {
    const out = await pdf.getOutline().catch(() => null);
    const nav = $('#rd-outline');
    const items = [];
    const walk = async (list, lvl) => {
      for (const it of list || []) {
        let p = null;
        try {
          const dest = typeof it.dest === 'string' ? await pdf.getDestination(it.dest) : it.dest;
          if (dest) p = (await pdf.getPageIndex(dest[0])) + 1;
        } catch (e) { /* signet sans destination */ }
        if (p && p >= debut && p <= fin) items.push({ t: it.title.replace(/\s*Gris\(.*?\)/, ''), p, lvl });
        await walk(it.items, lvl + 1);
      }
    };
    await walk(out, 0);
    if (!items.length) { $('#rd-toc').hidden = true; return; }
    sectionsPages = [...new Set(items.map(i => i.p))].sort((a, b) => a - b);
    nav.innerHTML = `<h4>Sommaire</h4>` + items.map(i => `<button class="l${Math.min(i.lvl, 2)}" data-p="${i.p}">${esc(i.t)}</button>`).join('');
    nav.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; aller(Number(b.dataset.p)); if (innerWidth < 760) toggleToc(false); });
    if (!embed && innerWidth > 1000 && !slides) toggleToc(true);
    signaler();
  })();
  const toggleToc = force => { const o = $('#rd-outline'); const v = force ?? !o.classList.contains('open'); o.classList.toggle('open', v); $('#rd-toc').setAttribute('aria-expanded', v); };
  $('#rd-toc').addEventListener('click', () => toggleToc());

  /* ---------- mode diapositives */
  let aller;
  if (slides) {
    const stage = $('#rd-stage'), canvas = $('#rd-canvas'), ctx = canvas.getContext('2d');
    stage.hidden = false;
    let tache = null;
    const rendre = async () => {
      const pg = await pdf.getPage(page);
      const v1 = pg.getViewport({ scale: 1 });
      const W = stage.clientWidth - 20, H = stage.clientHeight - 20;
      const s = Math.min(W / v1.width, H / v1.height);
      const dpr = window.devicePixelRatio || 1;
      const v = pg.getViewport({ scale: s * dpr });
      if (tache) { try { tache.cancel(); } catch (e) { /* déjà terminée */ } }
      canvas.width = v.width; canvas.height = v.height;
      canvas.style.width = (v.width / dpr) + 'px'; canvas.style.height = (v.height / dpr) + 'px';
      tache = pg.render({ canvasContext: ctx, viewport: v });
      try { await tache.promise; } catch (e) { /* rendu annulé */ }
    };
    aller = p => { page = Math.min(fin, Math.max(debut, p)); rendre(); signaler(); };
    $('#rd-tprev').addEventListener('click', () => aller(page - 1));
    $('#rd-tnext').addEventListener('click', () => aller(page + 1));
    let x0 = null;
    stage.addEventListener('pointerdown', e => { x0 = e.clientX; });
    stage.addEventListener('pointerup', e => { if (x0 !== null && Math.abs(e.clientX - x0) > 50) aller(page + (e.clientX < x0 ? 1 : -1)); x0 = null; });
    new ResizeObserver(() => rendre()).observe(stage);
    $('#rd-fs').addEventListener('click', () => { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.(); });
    aller(page);
  } else {
    /* ---------- mode document : défilement continu, rendu paresseux */
    const scroll = $('#rd-scroll'), pagesEl = $('#rd-pages');
    scroll.hidden = false;
    let zoom = 1;
    try { zoom = Number(localStorage.getItem('lc:zoom')) || 1; } catch (e) { /* stockage indisponible */ }
    const p1 = await pdf.getPage(debut);
    const ratio = p1.getViewport({ scale: 1 }).height / p1.getViewport({ scale: 1 }).width;
    const conteneurs = [];
    for (let p = debut; p <= fin; p++) {
      const div = document.createElement('div');
      div.className = 'rd-pg'; div.dataset.p = p; div.id = 'p' + p;
      pagesEl.appendChild(div); conteneurs.push(div);
    }
    const largeur = () => Math.min(scroll.clientWidth - 24, 920) * zoom;
    const dims = () => { const w = largeur(); conteneurs.forEach(d => { d.style.width = w + 'px'; d.style.height = (w * ratio) + 'px'; }); };
    const rendrePage = async div => {
      if (div.dataset.ok === String(zoom)) return;
      div.dataset.ok = String(zoom);
      const pg = await pdf.getPage(Number(div.dataset.p));
      const dpr = window.devicePixelRatio || 1;
      const v = pg.getViewport({ scale: largeur() / pg.getViewport({ scale: 1 }).width * dpr });
      const c = document.createElement('canvas');
      c.width = v.width; c.height = v.height;
      await pg.render({ canvasContext: c.getContext('2d'), viewport: v }).promise;
      div.querySelector('canvas')?.remove();
      div.prepend(c);
    };
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) rendrePage(e.target); }), { root: scroll, rootMargin: '800px 0px' });
    dims(); conteneurs.forEach(d => io.observe(d));
    const majCourante = () => {
      const top = scroll.scrollTop + scroll.clientHeight * 0.35;
      let cur = debut;
      for (const d of conteneurs) { if (d.offsetTop <= top) cur = Number(d.dataset.p); else break; }
      if (cur !== page) { page = cur; signaler(); }
    };
    scroll.addEventListener('scroll', () => requestAnimationFrame(majCourante), { passive: true });
    aller = p => { page = Math.min(fin, Math.max(debut, p)); $('#p' + page).scrollIntoView({ block: 'start' }); scroll.scrollTop -= 8; signaler(); };
    const rezoom = z => {
      const rel = page; zoom = Math.min(2.5, Math.max(0.5, z)); try { localStorage.setItem('lc:zoom', zoom); } catch (e) { /* stockage indisponible */ }
      dims(); conteneurs.forEach(d => { d.dataset.ok = ''; io.unobserve(d); io.observe(d); }); aller(rel);
    };
    $('#rd-zin').addEventListener('click', () => rezoom(zoom * 1.2));
    $('#rd-zout').addEventListener('click', () => rezoom(zoom / 1.2));
    let tRes; new ResizeObserver(() => { clearTimeout(tRes); tRes = setTimeout(() => rezoom(zoom), 200); }).observe(scroll);
    requestAnimationFrame(() => aller(page));
  }

  $('#rd-prev').addEventListener('click', () => aller(page - 1));
  $('#rd-next').addEventListener('click', () => aller(page + 1));
  $('#rd-input').addEventListener('change', e => aller(Number(e.target.value) || debut));
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    if (['ArrowRight', 'PageDown', ' '].includes(e.key) && (slides || e.key !== ' ')) { if (slides || e.key === 'ArrowRight') { e.preventDefault(); aller(page + 1); } }
    if (['ArrowLeft', 'PageUp'].includes(e.key)) { if (slides || e.key === 'ArrowLeft') { e.preventDefault(); aller(page - 1); } }
    if (e.key === 'Home') aller(debut);
    if (e.key === 'End') aller(fin);
    if (slides && (e.key === 'f' || e.key === 'F')) $('#rd-fs').click();
  });
  addEventListener('message', e => { if (e.data && e.data.lcGoto) aller(Number(e.data.lcGoto)); });
})();
