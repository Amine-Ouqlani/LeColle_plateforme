#!/usr/bin/env node
/* Le Collé — empreintes des PDF publiés (data/empreintes.js).
   Chaque lien vers un PDF reçoit ?v=<empreinte> : quand un document change, son adresse change,
   et aucun navigateur (ni l'application installée) ne peut resservir l'ancienne version.
   À lancer après toute mise à jour de documents :  node outils/empreintes.js
   Contrôle seul (code de sortie 1 si une empreinte est périmée) :  node outils/empreintes.js --verifier */
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const RACINE = path.join(__dirname, '..'), SORTIE = path.join(RACINE, 'data', 'empreintes.js');
const pdfs = [];
(function parcourir(d) {
  for (const e of fs.readdirSync(path.join(RACINE, d), { withFileTypes: true })) {
    const r = d + '/' + e.name;
    if (e.isDirectory()) parcourir(r); else if (e.name.endsWith('.pdf')) pdfs.push(r);
  }
})('docs');
pdfs.sort();
const E = {};
for (const f of pdfs) E[f] = crypto.createHash('sha1').update(fs.readFileSync(path.join(RACINE, f))).digest('hex').slice(0, 10);
const texte = '/* Généré par outils/empreintes.js — ne pas modifier à la main. */\nwindow.LC = window.LC || {};\nLC.empreintes = ' + JSON.stringify(E, null, 1) + ';\n';
if (process.argv.includes('--verifier')) {
  const ok = fs.existsSync(SORTIE) && fs.readFileSync(SORTIE, 'utf8') === texte;
  console.log(ok ? `empreintes à jour (${pdfs.length} PDF)` : 'empreintes périmées : lancer node outils/empreintes.js');
  process.exit(ok ? 0 : 1);
}
fs.writeFileSync(SORTIE, texte);
console.log(`${pdfs.length} empreintes écrites dans data/empreintes.js`);
