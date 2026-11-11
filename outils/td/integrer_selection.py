#!/usr/bin/env python3
"""Intègre la sélection de 5 problèmes au site : PDF dans docs/pt/selection/, sources, entrées de
data/pt/documents.js, et data/pt/selection.js (régénéré)."""
import json, os, re, shutil, subprocess, sys
ICI = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, ICI)
SITE = sys.argv[1] if len(sys.argv) > 1 else os.path.normpath(os.path.join(ICI, '..', '..'))
B = os.path.join(ICI, 'build')
from selection import SELECTION, ETAPES
from meta import CHAPITRES
_src = open(os.path.join(ICI, 'build_selection.py'), encoding='utf8').read().rsplit("if __name__ == '__main__':", 1)[0]
exec(compile(_src, 'build_selection.py', 'exec'))
pages = json.load(open(os.path.join(B, 'selection.json')))
os.makedirs(f'{SITE}/docs/pt/selection', exist_ok=True); os.makedirs(f'{SITE}/docs/pt/sources/selection', exist_ok=True)

def npages(p): return int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', p], capture_output=True, text=True).stdout).group(1))
def js(s): return s.replace('\\', '\\\\').replace('"', '\\"')
def web(s):  # LaTeX court -> texte KaTeX
    s = s.replace("\\'", "'").replace('~', ' ').replace('\\,', ' ')
    s = re.sub(r'\\emph\{([^}]*)\}', r'\1', s)
    return s

docs = {}
for cid in SELECTION:
    nom = f'Selection_{cid}'
    shutil.copy(f'{B}/{nom}.pdf', f'{SITE}/docs/pt/selection/{nom}.pdf')
    shutil.copy(f'{B}/{nom}.tex', f'{SITE}/docs/pt/sources/selection/{nom}.tex')
    docs[f'selection-{cid}'] = dict(titre=f'Sélection — {CHAPITRES[cid]["titre"]}', sousTitre='5 problèmes après le cours : énoncés, indications, corrections',
        type='selection', fichier=f'docs/pt/selection/{nom}.pdf', source=f'docs/pt/sources/selection/{nom}.tex', pages=npages(f'{B}/{nom}.pdf'),
        version='v1', maj='2026-11-06', description='Les cinq problèmes à travailler en séance après le cours, de la mise en application au niveau DS et concours, avec indications et corrections détaillées.')

# documents.js : insertion ou remplacement des entrées « selection-… »
p = f'{SITE}/data/pt/documents.js'; s = open(p, encoding='utf8').read()
s = re.sub(r'  "selection-[a-z]+": \{.*?\n  \},\n', '', s, flags=re.S)
bloc = ''.join(f'  "{k}": {{\n' + ',\n'.join(f'    {a}: ' + (str(v) if isinstance(v, int) else f'"{js(v)}"') for a, v in d.items()) + '\n  },\n' for k, d in docs.items())
i = s.index('  /* ---- TD (générés'); s = s[:i] + bloc + s[i:]
open(p, 'w', encoding='utf8').write(s)

# selection.js
out = {}
for cid, sel in SELECTION.items():
    pg = {x['id']: x for x in pages[cid]}
    l = []
    for k, q in enumerate(sel, 1):
        i = q['id']; e = EXOS[i]
        org = q.get('origine') or (origine(i, CHAPITRES[cid]['livre']) + f' · TD complet, exercice {NUM_TD[i][1]}')
        l.append(dict(id=i, num=k, etape=ETAPES[k-1], titre=web(q['titre']), difficulte=e['diff'], duree=q['duree'], origine=web(org),
                      notions=[web(x) for x in q['notions']], objectifs=web(q['objectifs']), prerequis=[web(x) for x in q['prerequis']],
                      indications=[web(x) for x in q['indications']],
                      page=pg[i]['page'], pageIndication=pg[i]['pageIndication'], pageCorrige=pg[i]['pageCorrige']))
    out[cid] = dict(doc=f'selection-{cid}', problemes=l)
open(f'{SITE}/data/pt/selection.js', 'w', encoding='utf8').write(
    '/* Le Collé PT — sélection de 5 problèmes par chapitre (généré par outils/td/integrer_selection.py) */\n'
    'window.LC = window.LC || {};\nLC.selection = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
print('ok', {k: len(v['problemes']) for k, v in out.items()})
