// Vérifie la cohérence des données : node outils/verifier.js (depuis la racine du site)
const vm = require('vm'), fs = require('fs'), path = require('path');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ['pt/documents', 'pt/chapitres', 'pt/exercices', 'pt/annales', 'pt/entrainement', 'pt/selection', 'pt/annales-questions', 'pt/sujets', 'pt/classiques']) vm.runInContext(fs.readFileSync(`data/${f}.js`, 'utf8'), ctx);
const LC = ctx.LC; const err = []; const ok = p => fs.existsSync(p) || err.push('fichier manquant : ' + p);
const pages = {};
for (const [id, d] of Object.entries(LC.documents)) { ok(d.fichier); if (d.source) ok(d.source); else if (d.type !== "complet") err.push("source manquante : " + id); pages[id] = d.pages; if (!d.fichier.startsWith('docs/pt/')) err.push('document PT hors de docs/pt : ' + id); }
// filière MP : contexte séparé, aucun document partagé avec PT
const mp = {}; mp.window = mp; vm.createContext(mp); vm.runInContext(fs.readFileSync('data/mp/ouvrages.js', 'utf8'), mp);
for (const [id, d] of Object.entries(mp.LC.documents)) { ok(d.fichier); if (!d.fichier.startsWith('docs/mp/') || d.filiere !== 'mp') err.push('document MP mal rangé : ' + id); if (LC.documents[id]) err.push('identifiant commun PT/MP : ' + id);
  d.parties.forEach(p => { if (p.page < 1 || p.page > d.pages) err.push(`${id} : partie hors du PDF`); }); }
for (const o of mp.LC.ouvragesMP) o.tomes.forEach(t => mp.LC.documents[t] || err.push('tome inconnu ' + t));
const page = (ref, ou) => { if (!pages[ref.doc]) err.push(`${ou} : document inconnu ${ref.doc}`); else if (ref.page < 1 || ref.page > pages[ref.doc]) err.push(`${ou} : page ${ref.page} hors de ${ref.doc}`); };
for (const c of LC.chapitres) {
  [c.cours, c.fiche, c.presentation].filter(Boolean).forEach(r => { r.sections.forEach(s => page({ doc: r.doc, page: s.page }, c.id + ' ' + s.num));
    if (r.debut) { page({ doc: r.doc, page: r.debut }, c.id + ' début'); page({ doc: r.doc, page: r.fin }, c.id + ' fin'); } });
  if (c.presentation) { const st = c.presentation.statique; page({ doc: st.doc, page: st.debut }, c.id + ' statique'); page({ doc: st.doc, page: st.fin }, c.id + ' statique');
    c.presentation.sections.forEach(s => page({ doc: st.doc, page: s.pageStatique }, c.id + ' statique ' + s.num)); }
  if (c.td) { page({ doc: c.td.doc, page: 1 }, c.id + ' TD'); page({ doc: c.td.corrections, page: 1 }, c.id + ' corrections'); }
  if (!LC.selection[c.id]) err.push('chapitre sans sélection : ' + c.id);
  if (!c.bilan) err.push('chapitre sans exercice bilan : ' + c.id); else { page({ doc: c.bilan.doc, page: 1 }, c.id + ' bilan'); page({ doc: c.bilan.doc, page: c.bilan.corrige }, c.id + ' bilan corrigé'); }
  if (c.cours.index) page({ doc: c.cours.doc, page: c.cours.index }, c.id + ' index');
  page({ doc: c.cours.doc, page: c.cours.corriges.fin }, c.id + ' corrigés');
}
for (const e of LC.exercices) { page(e.enonce, e.id); page(e.corrige, e.id); if (!LC.chapitres.find(c => c.id === e.chapitre)) err.push('chapitre inconnu ' + e.id); }
for (const a of LC.annales) { ok(a.contenu); const h = fs.readFileSync(a.contenu, 'utf8'); for (const m of h.matchAll(/src="([^"]+)"/g)) ok(m[1]); }
for (const [cid, s] of Object.entries(LC.selection)) { if (s.problemes.length !== 5) err.push('sélection ' + cid + ' : pas 5 problèmes'); s.problemes.forEach(p => ['page', 'pageIndication', 'pageCorrige'].forEach(k => page({ doc: s.doc, page: p[k] }, 'sélection ' + p.id))); }
for (const q of LC.questionsAnnales) { const a = LC.annales.find(x => x.id === q.annale); if (!a) err.push('question : annale inconnue ' + q.annale); const c = LC.chapitres.find(x => x.id === q.chapitre); if (!c || !(c.fiche || c.cours).sections.some(s => s.num === q.section)) err.push('question sans notion : ' + q.annale + ' ' + q.label); }
for (const s of LC.entrainement) { (s.parties || []).forEach(p => LC.annales.find(a => a.id === p.annale) || err.push('annale inconnue ' + p.annale)); if (s.enonce) { page(s.enonce, s.id); page(s.corrige, s.id); } }
{ const th = new Set(LC.themes.map(t => t[0])), ids = new Set();
  for (const c of LC.chapitres) th.has(c.id) || err.push('thème manquant pour le chapitre ' + c.id);
  for (const s of LC.sujets) { ids.has(s.id) && err.push('sujet en double ' + s.id); ids.add(s.id);
    LC.epreuves[s.epreuve] || err.push('épreuve inconnue ' + s.id);
    for (const u of [s.page, s.sujet, s.rapport, ...s.corriges]) if (u && !/^https:\/\//.test(u)) err.push('lien invalide ' + s.id);
    new Set(s.corriges).size === s.corriges.length || err.push('corrigé en double ' + s.id);
    for (const p of s.parties) for (const t of p.themes) th.has(t) || err.push(`thème inconnu ${t} (${s.id})`); }
  for (const a of LC.annales) { const s = LC.sujets.find(x => x.id === a.id.replace(/-\d+$/, '')); if (!s) err.push('annale sans sujet ' + a.id); else if (s.sujet !== a.liens.sujet) err.push('lien de sujet différent ' + a.id); }
  for (const [c, l] of Object.entries(LC.classiques)) { LC.chapitres.some(x => x.id === c) || err.push('classiques : chapitre inconnu ' + c);
    for (const [id] of l) { const e = LC.exercices.find(x => x.id === id); if (!e) err.push('classique inconnu ' + id); else if (e.chapitre !== c) err.push('classique mal rangé ' + id); } } }
console.log(err.length ? err.join('\n') : `OK — ${LC.chapitres.length} chapitres, ${LC.exercices.length} exercices, ${LC.sujets.length} sujets officiels, ${LC.annales.length} parties corrigées (${LC.questionsAnnales.length} questions), ${Object.values(LC.selection).reduce((t, x) => t + x.problemes.length, 0)} problèmes sélectionnés, ${LC.entrainement.length} sujets, ${Object.keys(LC.documents).length} documents, ${mp.LC.ouvragesMP.length} ouvrages MP`);
process.exit(err.length ? 1 : 0);
