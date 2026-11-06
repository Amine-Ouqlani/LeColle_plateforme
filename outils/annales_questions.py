#!/usr/bin/env python3
"""Index des questions d'annales, par chapitre et par notion (section de la fiche ou du volume 2).
Lit contenu/pt/annales/*.html (un <article class="q"> par question) ; écrit data/pt/annales-questions.js.
Lancer depuis la racine du site : python3 outils/annales_questions.py"""
import re, glob, json, os
# questions sans renvoi explicite : (chapitre, section) choisis à la main
MANUEL = {
 ('bpt-2014-b-1', 'Q1(e)'): ('courbes', '2.3'),
 ('bpt-2015-b-2', 'Q1(c)'): ('metrique', '1.3'), ('bpt-2015-b-2', 'Q2(a)(b)'): ('metrique', '1.3'),
 ('bpt-2017-b-2', 'II.1'): ('courbes', '2.1'), ('bpt-2017-b-2', 'III.1–2'): ('courbes', '2.2'), ('bpt-2017-b-2', 'IV'): ('courbes', '2.3'),
 ('bpt-2019-b-1', 'Q2'): ('metrique', '2.1'), ('bpt-2019-b-1', 'Q5'): ('metrique', '1.2'), ('bpt-2019-b-1', 'Q6–Q7'): ('metrique', '1.3'),
 ('bpt-2019-b-2', 'Q2'): ('determinants', '1.3'),
 ('bpt-2021-b-2', 'Q1–Q2'): ('courbes', '2.1'),
 ('bpt-2023-b-4', 'Q6'): ('courbes', '2.3'), ('bpt-2023-b-4', 'Q7(a)'): ('courbes', '2.5'),
 ('bpt-2024-b-2', 'Partie A'): ('courbes', '2.1'), ('bpt-2024-b-2', 'Partie B'): ('metrique', '1.2'),
}
out = []
for f in sorted(glob.glob('contenu/pt/annales/*.html')):
    aid = os.path.basename(f)[:-5]
    s = open(f, encoding='utf8').read()
    for k, m in enumerate(re.finditer(r'<h3>(.*?)</h3>', s, re.S), 1):
        h = re.sub(r'\s+', ' ', m.group(1))
        ref = re.search(r'<span class="q-ref">(.*?)</span>', h)
        ref = ref.group(1) if ref else ''
        lab, titre = re.sub(r'<span.*', '', h).split(' — ', 1)
        titre = titre.strip()
        if (aid, lab) in MANUEL:
            ch, sec = MANUEL[(aid, lab)]
        else:
            sec = re.search(r'§\s?(\d\.\d)', ref).group(1)
            ch = 'metrique' if 'volume 2' in ref else ('determinants' if sec[0] == '1' else 'courbes')
        out.append(dict(annale=aid, q=k, label=lab, titre=titre, chapitre=ch, section=sec))
open('data/pt/annales-questions.js', 'w', encoding='utf8').write(
    '/* Le Collé PT — questions d\'annales indexées par chapitre et par notion (généré par outils/annales_questions.py) */\n'
    'window.LC = window.LC || {};\nLC.questionsAnnales = ' + json.dumps(out, ensure_ascii=False, indent=0) + ';\n')
from collections import Counter
print(len(out), Counter(x['chapitre'] for x in out))
