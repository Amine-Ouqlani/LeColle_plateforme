// Vérifie la cohérence des données : node outils/verifier.js (depuis la racine du site)
const vm = require('vm'), fs = require('fs'), path = require('path');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ['pt/documents', 'pt/chapitres', 'pt/exercices', 'pt/annales', 'pt/entrainement', 'pt/selection', 'pt/annales-questions']) vm.runInContext(fs.readFileSync(`data/${f}.js`, 'utf8'), ctx);
const LC = ctx.LC; const err = []; const ok = p => fs.existsSync(p) || err.push('fichier manquant : ' + p);
const pages = {};
for (const [id, d] of Object.entries(LC.documents)) { ok(d.fichier); ok(d.source); pages[id] = d.pages; if (!d.fichier.startsWith('docs/pt/')) err.push('document PT hors de docs/pt : ' + id); }
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
}
for (const e of LC.exercices) { page(e.enonce, e.id); page(e.corrige, e.id); if (!LC.chapitres.find(c => c.id === e.chapitre)) err.push('chapitre inconnu ' + e.id); }
for (const a of LC.annales) { ok(a.contenu); const h = fs.readFileSync(a.contenu, 'utf8'); for (const m of h.matchAll(/src="([^"]+)"/g)) ok(m[1]); }
for (const [cid, s] of Object.entries(LC.selection)) { if (s.problemes.length !== 5) err.push('sélection ' + cid + ' : pas 5 problèmes'); s.problemes.forEach(p => ['page', 'pageIndication', 'pageCorrige'].forEach(k => page({ doc: s.doc, page: p[k] }, 'sélection ' + p.id))); }
for (const q of LC.questionsAnnales) { const a = LC.annales.find(x => x.id === q.annale); if (!a) err.push('question : annale inconnue ' + q.annale); const c = LC.chapitres.find(x => x.id === q.chapitre); if (!c || !(c.fiche || c.cours).sections.some(s => s.num === q.section)) err.push('question sans notion : ' + q.annale + ' ' + q.label); }
for (const s of LC.entrainement) { (s.parties || []).forEach(p => LC.annales.find(a => a.id === p.annale) || err.push('annale inconnue ' + p.annale)); if (s.enonce) { page(s.enonce, s.id); page(s.corrige, s.id); } }
console.log(err.length ? err.join('\n') : `OK — ${LC.chapitres.length} chapitres, ${LC.exercices.length} exercices, ${LC.annales.length} annales (${LC.questionsAnnales.length} questions), ${Object.values(LC.selection).reduce((t, x) => t + x.problemes.length, 0)} problèmes sélectionnés, ${LC.entrainement.length} sujets, ${Object.keys(LC.documents).length} documents, ${mp.LC.ouvragesMP.length} ouvrages MP`);
process.exit(err.length ? 1 : 0);
