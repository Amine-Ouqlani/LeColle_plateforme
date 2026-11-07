"""Adapte le préambule commun des livrets : le grand numéro de chapitre et l'onglet affichent le numéro du
chapitre dans le parcours PT (\\grandnum), tandis que la numérotation interne (§1.1, théorème 1.3…) reste celle
de la fiche, de la présentation et du TD. Idempotent."""
import re, sys
A = r'''  {{\small\color{Gris}\textls[200]{\MakeUppercase{Chapitre}}}\\[-0.2em]%
   {\fontsize{64}{64}\selectfont\color{BleuClair}\thesection}}'''
B = r'''  {{\small\color{Gris}\textls[200]{\MakeUppercase{Chapitre}}}\\[-0.2em]%
   {\fontsize{64}{64}\selectfont\color{BleuClair}\grandnum}}'''
def patch(s):
    if r'\newcommand{\grandnum}' in s: return s
    assert A in s
    s = s.replace(A, B)
    s = s.replace(r'% ---------- Titres ----------',
                  '% ---------- Titres ----------\n% numéro du chapitre dans le parcours PT (affiché), distinct de la numérotation interne\n'
                  r'\newcommand{\grandnum}{\thesection}\newcommand{\ongletcouleur}{Bleu}', 1)
    s = s.replace(r'{\makebox[2.2em][l]{\color{Bleu}\thecontentslabel}}', r'{}', 1)
    s = s.replace(r'\renewcommand{\sectionmark}[1]{\markboth{\thesection\quad#1}{}}', r'\renewcommand{\sectionmark}[1]{\markboth{#1}{}}', 1)
    s = s.replace(r'\edef\ongcol{\ifnum\value{section}=3 Ocre\else Bleu\fi}%', r'\edef\ongcol{\ongletcouleur}%', 1)
    s = s.replace(r'\edef\ongnum{\the\value{section}}%', r'\edef\ongnum{\grandnum}%', 1)
    for x in [r'\newcommand{\grandnum}', r'\edef\ongcol{\ongletcouleur}', r'\edef\ongnum{\grandnum}', r'\markboth{#1}{}']: assert x in s, x
    return s
if __name__ == '__main__':
    for f in sys.argv[1:]:
        s = open(f, encoding='utf8').read(); open(f, 'w', encoding='utf8').write(patch(s)); print('ok', f)
