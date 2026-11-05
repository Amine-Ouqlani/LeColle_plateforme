#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Intègre les TD générés dans le site : PDF et sources, data/documents.js, data/chapitres.js,
data/exercices.js (régénéré), data/entrainement.js (devoir type)."""
import json, os, re, shutil, sys
ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from meta import CHAPITRES, META

SITE = '/home/claude/site'
B = os.path.join(ICI, 'build')
TD = json.load(open(os.path.join(B, 'td.json'), encoding='utf8'))
OLD = {e['id']: e for e in json.load(open(os.path.join(ICI, 'exercices_old.json'), encoding='utf8'))}
MAJ = '2026-11-05'
LIVRE = {'determinants': 'livre', 'courbes': 'livre', 'metrique': 'volume2'}

os.makedirs(f'{SITE}/docs/td', exist_ok=True)
os.makedirs(f'{SITE}/docs/sources/td', exist_ok=True)

def npages(pdf):
    import subprocess
    out = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout
    return int(re.search(r'Pages:\s+(\d+)', out).group(1))

# ------------------------------------------------------------------ documents
docs = []
for cid, ch in CHAPITRES.items():
    n = len(TD[cid])
    for suffixe, cle, titre, sous, desc in [
        ('', f'td-{cid}', f"TD — {ch['titre']}", f"Chapitre {ch['num']} · {n} exercices · énoncés",
         f"Tous les exercices du livre pour ce chapitre (TD de la classe, exercices d'entraînement, exemples du cours), complétés par des exercices complémentaires, en quatre parties de difficulté croissante. Sans les corrections."),
        ('_corrections', f'td-{cid}-corrections', f"TD — {ch['titre']} : corrections", f"Chapitre {ch['num']} · corrections détaillées",
         f"Les corrections détaillées des {n} exercices du TD, dans le même ordre et avec les mêmes numéros."),
    ]:
        pdf = f'{B}/TD_{cid}{suffixe}.pdf'
        shutil.copy(pdf, f'{SITE}/docs/td/TD_{cid}{suffixe}.pdf')
        shutil.copy(f'{B}/TD_{cid}{suffixe}.tex', f'{SITE}/docs/sources/td/TD_{cid}{suffixe}.tex')
        docs.append((cle, dict(titre=titre, sousTitre=sous, type='td', fichier=f'docs/td/TD_{cid}{suffixe}.pdf',
                               source=f'docs/sources/td/TD_{cid}{suffixe}.tex', pages=npages(pdf), version='v1', maj=MAJ,
                               description=desc)))

p = f'{SITE}/data/documents.js'
s = open(p, encoding='utf8').read()
s = re.sub(r'\n  /\* ---- TD \(générés par td/build_td.py\) ---- \*/.*?(?=\n};)', '', s, flags=re.S)
bloc = '\n  /* ---- TD (générés par td/build_td.py) ---- */'
for cle, d in docs:
    bloc += f'\n  "{cle}": ' + json.dumps(d, ensure_ascii=False, indent=4).replace('\n}', '\n  }').replace('\n    ', '\n    ') + ','
i = s.rindex('\n};')
avant = s[:i].rstrip()
if not avant.endswith(','): avant += ','
s = avant + bloc.rstrip(',') + s[i:]
open(p, 'w', encoding='utf8').write(s)

# ------------------------------------------------------------------ chapitres : référence au TD
p = f'{SITE}/data/chapitres.js'
s = open(p, encoding='utf8').read()
for cid in CHAPITRES:
    s = re.sub(rf'(\n    id: "{cid}",(?:.|\n)*?\n    statut: "[^"]*",)\n    td: \{{[^}}]*\}},', r'\1', s)
    s = re.sub(rf'(\n    id: "{cid}",(?:.|\n)*?\n    statut: "[^"]*",)',
               lambda m: m.group(1) + f'\n    td: {{ doc: "td-{cid}", corrections: "td-{cid}-corrections" }},', s, count=1)
open(p, 'w', encoding='utf8').write(s)

# ------------------------------------------------------------------ exercices
NIV = {'I': 1, 'II': 2, 'III': 3, 'IV': 4}
lignes = []
for cid, ch in CHAPITRES.items():
    lignes.append(f'\n  /* ---------------------------- {ch["titre"]} ---------------------------- */')
    for x in TD[cid]:
        i = x['id']
        if i in OLD:
            o = OLD[i]
            e = dict(id=i, chapitre=cid, num=x['num'], partie=x['partie'], titre=o['titre'], origine=o['origine'])
            if o.get('td'): e['td'] = o['td']
            e['provenance'] = x['origine']
            e.update(difficulte=x['diff'], niveau=NIV[x['partie']])
            for k in ('fiche', 'incontournable', 'hp'):
                if o.get(k): e[k] = o[k]
            e.update(notions=o['notions'], prerequis=o.get('prerequis', []), objectifs=o['objectifs'], indication=o['indication'])
            e['livre'] = o['enonce']
        else:
            t, n, ob, ind = META[i]
            org = 'exemple' if i.startswith('ex-') else 'complementaire'
            e = dict(id=i, chapitre=cid, num=x['num'], partie=x['partie'], titre=t, origine=org, provenance=x['origine'],
                     difficulte=x['diff'], niveau=NIV[x['partie']], notions=n, prerequis=[], objectifs=ob, indication=ind)
        e['enonce'] = dict(doc=f'td-{cid}', page=x['page'])
        e['corrige'] = dict(doc=f'td-{cid}-corrections', page=x['pageCorrige'])
        lignes.append('  ' + json.dumps(e, ensure_ascii=False) + ',')
lignes[-1] = lignes[-1].rstrip(',')

entete = '''/* =====================================================================
   Le Collé — exercices des TD
   Fichier régénéré par td/integrer.py à partir des TD PDF (td/build_td.py).
   num : numéro de l'exercice dans le TD du chapitre (1, 2, 3…)
   partie : I Applications directes · II Classiques et méthodes
            III Synthèse et approfondissement · IV Difficiles, type concours
   difficulte : de 1 à 5 points
   origine : "td" (TD de la classe, corrigé dans le livre), "lecolle" (exercice
             d'entraînement du livre), "devoir" (problème type devoir du livre),
             "exemple" (exemple du cours mis en exercice),
             "complementaire" (exercice ajouté au TD, absent du livre)
   provenance : la mention imprimée dans le TD
   enonce / corrige : page PDF dans le TD et dans le livret de corrections
   livre : page de l'énoncé dans le livre (exercices du livre seulement)
   ===================================================================== */
window.LC = window.LC || {};

LC.parties = {
  I: { nom: "Applications directes du cours" },
  II: { nom: "Exercices classiques et méthodes incontournables" },
  III: { nom: "Synthèse et approfondissement" },
  IV: { nom: "Exercices difficiles et type concours" }
};
/* ancienne classification, conservée pour compatibilité */
LC.niveaux = {
  1: { nom: "Fondamentaux", court: "N1" },
  2: { nom: "Maîtrise", court: "N2" },
  3: { nom: "Approfondissement", court: "N3" },
  4: { nom: "Type concours", court: "N4" }
};

LC.exercices = ['''
open(f'{SITE}/data/exercices.js', 'w', encoding='utf8').write(entete + '\n'.join(lignes) + '\n];\n')

# ------------------------------------------------------------------ entraînement : le devoir type pointe vers le TD
ds = next(x for x in TD['courbes'] if x['id'] == 'ds-pb')
p = f'{SITE}/data/entrainement.js'
s = open(p, encoding='utf8').read()
s = re.sub(r'enonce: \{ doc: "[^"]*", page: \d+ \}, corrige: \{ doc: "[^"]*", page: \d+ \}(?=\n(?:(?!\n  \{).)*?\n  \})',
           lambda m: m.group(0), s)  # (inchangé par défaut)
s = s.replace('enonce: { doc: "livre", page: 23 }, corrige: { doc: "livre", page: 43 }',
              f'enonce: {{ doc: "td-courbes", page: {ds["page"]} }}, corrige: {{ doc: "td-courbes-corrections", page: {ds["pageCorrige"]} }}')
s = re.sub(r'enonce: \{ doc: "td-courbes", page: \d+ \}, corrige: \{ doc: "td-courbes-corrections", page: \d+ \}',
           f'enonce: {{ doc: "td-courbes", page: {ds["page"]} }}, corrige: {{ doc: "td-courbes-corrections", page: {ds["pageCorrige"]} }}', s)
open(p, 'w', encoding='utf8').write(s)
print('OK', len(docs), 'documents,', sum(len(v) for v in TD.values()), 'exercices')
