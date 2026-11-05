// Vérifie la cohérence des données : node outils/verifier.js (depuis la racine du site)
const vm = require('vm'), fs = require('fs'), path = require('path');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ['documents', 'chapitres', 'exercices', 'annales', 'entrainement']) vm.runInContext(fs.readFileSync(`data/${f}.js`, 'utf8'), ctx);
const LC = ctx.LC; const err = []; const ok = p => fs.existsSync(p) || err.push('fichier manquant : ' + p);
const pages = {};
for (const [id, d] of Object.entries(LC.documents)) { ok(d.fichier); ok(d.source); pages[id] = d.pages; }
const page = (ref, ou) => { if (!pages[ref.doc]) err.push(`${ou} : document inconnu ${ref.doc}`); else if (ref.page < 1 || ref.page > pages[ref.doc]) err.push(`${ou} : page ${ref.page} hors de ${ref.doc}`); };
for (const c of LC.chapitres) {
  [c.cours, c.fiche, c.presentation].filter(Boolean).forEach(r => r.sections.forEach(s => page({ doc: r.doc, page: s.page }, c.id + ' ' + s.num)));
}
for (const e of LC.exercices) { page(e.enonce, e.id); page(e.corrige, e.id); if (!LC.chapitres.find(c => c.id === e.chapitre)) err.push('chapitre inconnu ' + e.id); }
for (const a of LC.annales) { ok(a.contenu); const h = fs.readFileSync(a.contenu, 'utf8'); for (const m of h.matchAll(/src="([^"]+)"/g)) ok(m[1]); }
for (const s of LC.entrainement) { (s.parties || []).forEach(p => LC.annales.find(a => a.id === p.annale) || err.push('annale inconnue ' + p.annale)); if (s.enonce) { page(s.enonce, s.id); page(s.corrige, s.id); } }
console.log(err.length ? err.join('\n') : `OK — ${LC.chapitres.length} chapitres, ${LC.exercices.length} exercices, ${LC.annales.length} annales, ${LC.entrainement.length} sujets, ${Object.keys(LC.documents).length} documents`);
process.exit(err.length ? 1 : 0);
