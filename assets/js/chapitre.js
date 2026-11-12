/* Le Collé — page d'un chapitre PT : le cours, puis un parcours d'entraînement en cinq étapes */
'use strict';

const C = chap(params.get('id')) || LC.chapitres[0];
cadre('pt', 'chapitres');
document.title = `${C.titre} — Le Collé PT`;
document.querySelector('meta[name="description"]')?.setAttribute('content', plain(C.accroche));

const EXOS = LC.exercices.filter(e => e.chapitre === C.id);
const SEL = LC.selection[C.id];
const QUESTIONS = LC.questionsAnnales.filter(q => q.chapitre === C.id);
const SUJETS = LC.entrainement.filter(s => s.chapitres.includes(C.id));
const coursDoc = C.cours.doc;
const T = C.td;
const annale = id => LC.annales.find(a => a.id === id);
const dots = n => `<span class="dots" title="difficulté ${n} sur 5" aria-label="difficulté ${n} sur 5">${'●'.repeat(n)}<span class="off">${'●'.repeat(5 - n)}</span></span>`;
const ligne = (titre, desc, liens) => `<li class="row"><div class="main">${titre}${desc ? `<br><span class="tag">${desc}</span>` : ''}</div><div class="side">${liens}</div></li>`;

/* ---------------------------------------------------------------- les ressources du chapitre (cartes) */
const RES = ressourcesChapitre(C);
const carte = r => {
  const d = doc(r.doc);
  const acts = r.actions.map(([t, h, sec]) => `<a href="${h}"${sec ? ' class="sec"' : ''}>${t}</a>`).join('');
  return `<li class="carte" id="res-${r.cle}"><p class="carte-tete"><b>${r.nom}</b><span class="tag">${d.pages} p.</span></p>
    <p class="carte-desc">${r.desc}</p>
    <p class="carte-actions">${acts}<a class="dl" href="${d.fichier}" download="${nomFichier(d)}" aria-label="Télécharger le PDF : ${r.nom}">PDF</a></p></li>`;
};
const groupe = g => RES.filter(r => r.groupe === g).map(carte).join('');
const sansFiche = !C.fiche && C.cours.index
  ? `<p class="muted small note-sous">Pas encore de fiche ni de présentation pour ce chapitre : l'<a href="${lecteurUrl(coursDoc, C.cours.index)}">index des méthodes du livret</a> en tient lieu.</p>` : '';
const parties = `<details class="plus"><summary>Le livret partie par partie</summary>
    <ul class="list">${C.cours.sections.map(s => `<li class="row"><div class="main"><span class="num">${s.num}</span><a href="${lecteurUrl(coursDoc, s.page)}">${s.titre}</a></div></li>`).join('')}
    <li class="row"><div class="main"><span class="num"></span><a href="${lecteurUrl(coursDoc, C.cours.corriges.debut)}">Corrigés des exercices du livret</a></div></li></ul>
  </details>`;

/* ---------------------------------------------------------------- exercices du TD (listes repliées) */
const ORIG = { lecolle: 'livre', exemple: 'exemple du cours', devoir: 'devoir type', complementaire: 'complémentaire', cours: 'exercice du livre' };
const ligneExo = e => {
  const origine = e.origine === 'td' ? `TD ${e.td}` : ORIG[e.origine] || '';
  return `<li id="exo-${e.id}"><div class="row"><div class="main"><details><summary><span class="num">${e.num}</span>${e.titre} <span class="tag">· ${origine}${e.hp ? ' · hors programme' : ''}</span> ${dots(e.difficulte)}</summary>
    <div class="detail"><p><b>Objectif.</b> ${e.objectifs}</p><p><b>Indication.</b> ${e.indication}</p></div></details></div>
    <div class="side ex"><a href="${lecteurUrl(e.enonce.doc, e.enonce.page)}">Énoncé</a><a href="${lecteurUrl(e.corrige.doc, e.corrige.page)}">Corrigé</a></div></div></li>`;
};
const listeTD = (parties, resume) => {
  const l = EXOS.filter(e => parties.includes(e.partie)).sort((a, b) => a.num - b.num);
  return l.length ? `<details class="plus"><summary>${resume} <span class="tag">(${l.length} exercices du TD)</span></summary><ul class="list">${l.map(ligneExo).join('')}</ul></details>` : '';
};

/* ---------------------------------------------------------------- étape 3 : les cinq problèmes */
const probleme = p => `<li class="pb" id="pb-${p.num}">
  <p class="pb-tete"><span class="pb-num">${p.num}</span><span><span class="tag">${p.etape} · ${dots(p.difficulte)} · ${dureeTexte(p.duree)}</span><br><b>${p.titre}</b></span></p>
  <div class="pb-corps">
    <p>${p.objectifs}</p>
    <p class="tag">Notions : ${p.notions.join(', ')}.${p.prerequis.length ? ` Prérequis : ${p.prerequis.join(' ; ')}.` : ''} Origine : ${p.origine}.</p>
    <p class="links pb-actions"><a href="${lecteurUrl(SEL.doc, p.page)}">Énoncé</a><a href="#pb-${p.num}" data-indic="${p.num}" aria-expanded="false" aria-controls="indic-${p.num}">Indications</a><a href="${lecteurUrl(SEL.doc, p.pageCorrige)}">Correction</a></p>
    <div class="detail indic" id="indic-${p.num}" hidden>${p.indications.map(x => `<p>${x}</p>`).join('')}</div>
  </div>
</li>`;

/* ---------------------------------------------------------------- étape 5 : évaluations */
const parAnnale = {};
QUESTIONS.forEach(q => (parAnnale[q.annale] = parAnnale[q.annale] || []).push(q));
const annalesChap = Object.entries(parAnnale).sort((a, b) => annale(b[0]).annee - annale(a[0]).annee).map(([id, qs]) => {
  const a = annale(id);
  return ligne(`<a href="annale.html?id=${id}">${a.concours} ${a.annee} — ${a.titre}</a>`, `${a.epreuve}, ${a.partie} · questions ${qs.map(q => q.label).join(', ')}`, `<a href="${a.liens.sujet}" target="_blank" rel="noopener">Sujet</a>`);
}).join('');
const evaluations = SUJETS.map(s => ligne(`<a href="entrainement.html#${s.id}">${s.titre}</a>`, `${dureeTexte(s.duree)} · ${s.type === 'examen' ? 'examen blanc, extraits d\'annales' : 'devoir'}`,
  s.enonce ? `<a href="${lecteurUrl(s.enonce.doc, s.enonce.page)}">Sujet</a><a href="${lecteurUrl(s.corrige.doc, s.corrige.page)}">Corrigé</a>` : '')).join('');

/* ---------------------------------------------------------------- page */
const ETAPES = [['etape-1', 'Consolider le cours'], ['etape-2', 'Travailler les méthodes'], ['etape-3', 'Les 5 problèmes'], ['etape-4', 'Approfondir'], ['etape-5', 'Se préparer aux évaluations']];
const i = LC.chapitres.indexOf(C), prev = LC.chapitres[i - 1], next = LC.chapitres[i + 1];

const B = C.bilan;
const bilanLigne = B ? `<ul class="list">${ligne(`Exercice bilan <span class="tag">· ${B.duree} min, sans document</span>`, 'les notions essentielles du chapitre ; le corrigé indique, question par question, ce qu\'une erreur révèle',
  `<a href="${lecteurUrl(B.doc, 1)}">Énoncé</a><a href="${lecteurUrl(B.doc, B.corrige)}">Corrigé</a>`)}</ul>` : '';
const lien = (cle, texte) => { const r = RES.find(x => x.cle === cle); return r ? `<a href="#res-${cle}">${texte}</a>` : ''; };
const conseil = [C.presentation && `suis la ${lien('presentation', 'présentation')} en séance`, `relis ${C.fiche ? `la ${lien('fiche', 'fiche')}` : `le ${lien('livret', 'livret')}`}`,
  B && `vérifie tes acquis avec l'${lien('bilan', 'exercice bilan')}`, 'travaille <a href="#etape-3">les 5 problèmes</a>'].filter(Boolean);

$('#contenu').innerHTML = `
  <nav class="fil" aria-label="Chapitres">
    <a href="pt.html">← Tous les chapitres</a>
    <span class="chap-switch">${LC.chapitres.map(c => c === C ? `<span aria-current="page" title="${c.titre}">${c.num}</span>` : `<a href="chapitre.html?id=${c.id}" title="Chapitre ${c.num} — ${c.titre}">${c.num}</a>`).join('')}</span>
  </nav>
  <p class="kicker">Chapitre ${C.num} sur ${LC.chapitres.length}</p>
  <h1>${C.titre}</h1>
  <p class="intro">${C.accroche}</p>
  <p class="suite"><b>Pour travailler ce chapitre :</b> ${conseil.slice(0, -1).join(', ')}, puis ${conseil[conseil.length - 1]}.</p>

  <h2 id="ressources">Les ressources du chapitre</h2>
  <h3 class="groupe">Apprendre le cours</h3>
  <ul class="cartes">${groupe('apprendre')}</ul>
  ${sansFiche}
  ${parties}
  <h3 class="groupe">S'entraîner</h3>
  <ul class="cartes deux">${groupe('entrainer')}</ul>

  <h2 id="entrainement">Le parcours d'entraînement</h2>
  <p class="muted">Cinq étapes, du cours au niveau concours. Fais-les dans l'ordre, ou va directement à celle qui te correspond.</p>
  <ol class="etapes">${ETAPES.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol>

  <section class="etape" id="etape-1"><h3><span class="etape-num">1</span>Consolider le cours</h3>
    <p>Relis ${C.fiche ? `la <a href="${lecteurUrl(C.fiche.doc, 1)}">fiche</a>` : `le <a href="${lecteurUrl(coursDoc, C.cours.debut)}">livret</a>`}, réponds de tête aux questions rapides, puis fais l'exercice bilan : il dit tout de suite ce qui est acquis et ce qu'il faut revoir.</p>
    ${bilanLigne}
    <details class="plus"><summary>Questions rapides <span class="tag">(${C.flash.length})</span></summary><div class="qa">${C.flash.map(f => `<details><summary>${f.q}</summary><p>${f.r}</p></details>`).join('')}</div></details>
    ${listeTD(['I'], 'Applications directes du cours')}
  </section>

  <section class="etape" id="etape-2"><h3><span class="etape-num">2</span>Travailler les méthodes</h3>
    <p>Les exercices classiques du chapitre, et les erreurs à ne plus faire.</p>
    ${listeTD(['II'], 'Exercices classiques')}
    <details class="plus"><summary>Erreurs fréquentes <span class="tag">(${C.erreurs.length})</span></summary><ul class="erreurs">${C.erreurs.map(x => `<li>${x}</li>`).join('')}</ul></details>
  </section>

  <section class="etape principale" id="etape-3"><h3><span class="etape-num">3</span>Les 5 problèmes</h3>
    <p>La sélection des séances, du plus simple au niveau concours. Pour chacun : cherche, ouvre une indication si tu bloques, lis la correction à la fin. Les cinq sont réunis dans le <a href="${lecteurUrl(SEL.doc, 1)}">livret de la sélection</a> (${lienPdf(doc(SEL.doc))}).</p>
    <ol class="pbs">${SEL.problemes.map(probleme).join('')}</ol>
  </section>

  <section class="etape" id="etape-4"><h3><span class="etape-num">4</span>Approfondir</h3>
    <p>Des exercices de synthèse et de niveau supérieur, pour gagner en autonomie.</p>
    ${listeTD(['III'], 'Synthèse et approfondissement')}
    ${listeTD(['IV'], 'Exercices difficiles et type concours')}
  </section>

  <section class="etape" id="etape-5"><h3><span class="etape-num">5</span>Se préparer aux évaluations</h3>
    <p>En temps limité, sans documents : un devoir ou un examen blanc, et les questions de concours sur ce chapitre.</p>
    ${evaluations ? `<ul class="list">${evaluations}</ul>` : ''}
    ${annalesChap ? `<details class="plus"><summary>Questions de concours corrigées sur ce chapitre <span class="tag">(${QUESTIONS.length} questions)</span></summary><ul class="list">${annalesChap}</ul>
      <p class="muted" style="margin-top:8px"><a href="annales.html?ch=${C.id}">Les mêmes questions, classées par notion →</a></p></details>` : ''}
    <p style="margin-top:12px"><a href="annales.html?theme=${C.id}">Les sujets officiels de la Banque PT qui portent sur ce chapitre →</a><br>
      <a href="annales.html?vue=classiques&ch=${C.id}">Les exercices classiques du chapitre →</a></p>
  </section>

  <nav class="pager" aria-label="Chapitre précédent ou suivant">${prev ? `<a href="chapitre.html?id=${prev.id}"><span class="tag">← Chapitre ${prev.num}</span>${prev.titre}</a>` : '<span></span>'}${next ? `<a class="next" href="chapitre.html?id=${next.id}"><span class="tag">Chapitre ${next.num} →</span>${next.titre}</a>` : ''}</nav>`;
renderMath($('#contenu'));

/* indications des problèmes : affichées sur place */
$$('[data-indic]').forEach(a => a.addEventListener('click', ev => {
  ev.preventDefault();
  const d = $('#indic-' + a.dataset.indic); d.hidden = !d.hidden; a.setAttribute('aria-expanded', String(!d.hidden));
}));

/* ancres, y compris celles des versions précédentes du site */
const alias = { cours: 'ressources', presentation: 'res-presentation', fiche: 'res-fiche', bilan: 'res-bilan', ensemble: '', td: 'res-td', revision: 'etape-1', annales: 'etape-5' };
const h = location.hash.slice(1);
const cible = h in alias ? alias[h] : h;
const exo = params.get('exo');
setTimeout(() => {
  const li = exo && document.getElementById('exo-' + exo);
  if (li) { li.closest('details.plus').open = true; li.querySelector('details').open = true; li.scrollIntoView({ block: 'center' }); }
  else if (cible) document.getElementById(cible)?.scrollIntoView();
}, 0);
