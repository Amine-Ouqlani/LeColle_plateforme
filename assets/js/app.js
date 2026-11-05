/* Le Collé — fonctions communes (en-tête, liens vers le lecteur, formules) */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const params = new URLSearchParams(location.search);

const doc = id => LC.documents[id];
const chap = id => LC.chapitres.find(c => c.id === id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const plain = s => String(s).replace(/\$([^$]*)\$/g, '$1').replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}\\^_]/g, '').replace(/\s+/g, ' ').trim();

function lecteurUrl(docId, page, extra = {}) {
  const p = new URLSearchParams({ doc: docId, ...(page ? { page } : {}), ...extra });
  return 'lecteur.html?' + p.toString();
}
const slidesUrl = (docId, page) => lecteurUrl(docId, page, { mode: 'slides' });

function renderMath(root) {
  if (!window.renderMathInElement || !root) return;
  renderMathInElement(root, {
    delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
    throwOnError: false,
    macros: { '\\R': '\\mathbb{R}', '\\C': '\\mathbb{C}', '\\K': '\\mathbb{K}', '\\Z': '\\mathbb{Z}', '\\dt': '\\left|\\begin{matrix}#1\\end{matrix}\\right|' }
  });
}

/* « 2.4 » ou « V2 2.1 » → page de la fiche ou du volume 2 */
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

function dureeTexte(min) {
  const h = Math.floor(min / 60), m = min % 60;
  return h ? `${h} h${m ? ' ' + String(m).padStart(2, '0') : ''}` : `${m} min`;
}

/* en-tête et pied de page communs */
function cadre(courant) {
  const nav = [['index.html', 'Chapitres', 'chapitres'], ['annales.html', 'Annales', 'annales'], ['entrainement.html', 'Entraînement', 'entrainement'], ['index.html#documents', 'Documents', 'documents']];
  const head = document.createElement('header');
  head.className = 'site-head';
  head.innerHTML = `<div class="wrap"><a class="logo" href="index.html">Le Collé</a>
    <nav class="site-nav" aria-label="Navigation principale">${nav.map(([h, l, id]) => `<a href="${h}" ${id === courant ? 'aria-current="page"' : ''}>${l}</a>`).join('')}</nav></div>`;
  document.body.prepend(head);
  const foot = document.createElement('footer');
  foot.className = 'site-foot';
  foot.innerHTML = `<div class="wrap">Le Collé — mathématiques PT · Ahmed Amine Ouqlani</div>`;
  document.body.append(foot);
}
