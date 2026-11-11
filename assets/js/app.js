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
    macros: { '\\ve': '\\vec{#1}', '\\vv': '\\overrightarrow{#1}', '\\R': '\\mathbb{R}', '\\C': '\\mathbb{C}', '\\K': '\\mathbb{K}', '\\Z': '\\mathbb{Z}', '\\dt': '\\left|\\begin{matrix}#1\\end{matrix}\\right|' }
  });
}

/* « 2.4 » ou « V2 2.1 » → page de la fiche (ou du livret des propriétés métriques).
   ids : chapitres concernés (ex. ceux d'une annale), pour lever l'ambiguïté des numéros internes §1.x */
function ficheRef(ref, ids) {
  const v2 = ref.startsWith('V2 ');
  const num = v2 ? ref.slice(3) : ref;
  if (v2) {
    const s = chap('metrique').cours.sections.find(s => s.num === num);
    return { url: lecteurUrl('volume2', s ? s.page : 4), label: `livret des propriétés métriques, §${num}` };
  }
  const pool = ids && ids.length ? LC.chapitres.filter(c => ids.includes(c.id)).concat(LC.chapitres.filter(c => !ids.includes(c.id))) : LC.chapitres;
  for (const c of pool) {
    const s = c.fiche && c.fiche.sections.find(s => s.num === num);
    if (s) return { url: lecteurUrl(c.fiche.doc, s.page), label: `fiche §${num}` };
  }
  return { url: lecteurUrl('fiche-determinants', 1), label: `fiche §${num}` };
}

function dureeTexte(min) {
  const h = Math.floor(min / 60), m = min % 60;
  return h ? `${h} h${m ? ' ' + String(m).padStart(2, '0') : ''}` : `${m} min`;
}

/* filière d'un document, nom de fichier explicite au téléchargement */
const filiereDoc = d => d.filiere || 'pt';
const nomFichier = d => {
  const base = d.fichier.split('/').pop();
  return /^le-colle-(pt|mp)/.test(base) ? base : `le-colle-${filiereDoc(d)}-${base}`;
};
const lienPdf = (d, texte = 'PDF') => `<a class="dl" href="${d.fichier}" download="${nomFichier(d)}">${texte}</a>`;

/* en-tête et pied de page communs : filière toujours visible (repère de couleur + étiquette) */
const FILIERES = {
  pt: { nom: 'Filière PT', court: 'PT', accueil: 'pt.html',
        nav: [['pt.html', 'Chapitres', 'chapitres'], ['entrainement.html', 'Entraînement', 'entrainement'], ['annales.html', 'Annales', 'annales'], ['pt.html#documents', 'Documents', 'documents']] },
  mp: { nom: 'Filière MP', court: 'MP', accueil: 'mp.html', nav: [['mp.html', 'Ouvrages', 'ouvrages']] }
};
function cadre(filiere, courant) {
  const F = FILIERES[filiere];
  if (F) document.body.dataset.filiere = filiere;
  const autre = filiere === 'pt' ? 'mp' : 'pt';
  const head = document.createElement('header');
  head.className = 'site-head';
  head.innerHTML = `<div class="wrap"><a class="logo" href="index.html">Le Collé</a>
    ${F ? `<a class="filiere" href="${F.accueil}">${F.nom}</a>
    <nav class="site-nav" aria-label="Navigation ${F.nom}">${F.nav.map(([h, l, id]) => `<a href="${h}" ${id === courant ? 'aria-current="page"' : ''}>${l}</a>`).join('')}</nav>
    <a class="switch" href="${FILIERES[autre].accueil}">Filière ${FILIERES[autre].court} →</a>` : ''}</div>`;
  document.body.prepend(head);
  const foot = document.createElement('footer');
  foot.className = 'site-foot';
  foot.innerHTML = `<div class="wrap"><span>Le Collé${F ? ' · ' + F.nom : ''} · Ahmed Amine Ouqlani</span>
    <span class="foot-links"><a href="index.html">Accueil</a>${F ? `<a href="${FILIERES[autre].accueil}">Filière ${FILIERES[autre].court}</a>` : ''}</span></div>`;
  document.body.append(foot);
}

/* les ressources d'un chapitre PT, dans un ordre unique pour tout le site (page du chapitre, documents, entraînement) :
   groupe « apprendre » puis « s'entraîner » ; chaque ressource a un document PDF et des actions de lecture */
function ressourcesChapitre(C) {
  const R = [];
  const d = id => LC.documents[id];
  R.push({ cle: 'livret', groupe: 'apprendre', nom: 'Livret', doc: C.cours.doc,
    desc: 'le cours complet : définitions, méthodes, exemples, exercices corrigés',
    actions: [['Lire', lecteurUrl(C.cours.doc, C.cours.debut)]] });
  if (C.presentation) R.push({ cle: 'presentation', groupe: 'apprendre', nom: 'Présentation', doc: C.presentation.doc,
    desc: `les diapositives de la séance${C.presentation.exercices ? `, avec ${C.presentation.exercices} exercices intégrés` : ''} · <a href="${slidesUrl(C.presentation.statique.doc, C.presentation.statique.debut)}">version sans animations</a>`,
    actions: [['Voir', slidesUrl(C.presentation.doc, C.presentation.debut)]] });
  if (C.fiche) R.push({ cle: 'fiche', groupe: 'apprendre', nom: 'Fiche', doc: C.fiche.doc,
    desc: `l'essentiel du chapitre en ${d(C.fiche.doc).pages} pages, à imprimer et à relire`,
    actions: [['Lire', lecteurUrl(C.fiche.doc, 1)]] });
  if (C.bilan) R.push({ cle: 'bilan', groupe: 'entrainer', nom: 'Exercice bilan', doc: C.bilan.doc,
    desc: `${C.bilan.duree} min, sans document : vérifier ce qui est acquis avant la séance suivante`,
    actions: [['Énoncé', lecteurUrl(C.bilan.doc, 1)], ['Corrigé', lecteurUrl(C.bilan.doc, C.bilan.corrige)]] });
  const sel = LC.selection && LC.selection[C.id];
  if (sel) R.push({ cle: 'problemes', groupe: 'entrainer', nom: '5 problèmes', doc: sel.doc,
    desc: 'la sélection après le cours, du plus simple au niveau concours, avec indications',
    actions: [['Voir les problèmes', `chapitre.html?id=${C.id}#etape-3`]] });
  if (C.td) {
    R.push({ cle: 'td', groupe: 'entrainer', nom: 'TD', doc: C.td.doc,
      desc: `${(LC.exercices || []).filter(e => e.chapitre === C.id).length || ''} exercices classés en quatre niveaux, énoncés seuls`.trim(),
      actions: [['Lire', lecteurUrl(C.td.doc, 1)]] });
    R.push({ cle: 'corrections', groupe: 'entrainer', nom: 'Corrections du TD', court: 'Corrections', doc: C.td.corrections,
      desc: 'chaque exercice du TD corrigé en détail',
      actions: [['Lire', lecteurUrl(C.td.corrections, 1)]] });
  }
  return R;
}
