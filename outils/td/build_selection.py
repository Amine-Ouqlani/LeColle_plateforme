#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Construit, pour chaque chapitre PT, le livret « Sélection : 5 problèmes après le cours » :
énoncés (un problème par page), puis indications, puis corrections, dans un même PDF.
Réutilise les sources et la mise en page du TD (build_td.py). Sortie : build/Selection_<chap>.pdf,
build/selection.json (pages de chaque énoncé, indication et correction)."""
import json, os, re, sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
_src = open(os.path.join(ICI, 'build_td.py'), encoding='utf8').read().split("if __name__ == '__main__':")[0]
exec(compile(_src, 'build_td.py', 'exec'))
from selection import SELECTION, ETAPES

e, c = lire(os.path.join(ICI, 'selection.tex'))
for k in e: assert k not in EXOS, k
EXOS.update(e); CORS.update(c)
TD = json.load(open(os.path.join(BUILD, 'td.json')))
NUM_TD = {x['id']: (cid, x['num']) for cid, l in TD.items() for x in l}

def renvois_td(t):
    """« exercice~\\ref{e:X} » (renvoi interne au TD) → numéro dans le TD complet"""
    def r(m):
        cid, n = NUM_TD[m.group(1)]
        return f'exercice~{n} du TD'
    t = re.sub(r'exercice~\\ref\{e:([^}]+)\}', r, t)
    assert '\\ref{e:' not in t, t
    return t

MACROS = r'''
\makeatletter
\newcommand{\probleme}[7]{% numéro, étape, titre, difficulté, origine, durée, identifiant
  \clearpage\phantomsection\label{p:#7}\pdfbookmark[1]{Problème #1 — #2}{p.#7}%
  {\sffamily\small\color{Gris}\textls[150]{PROBLÈME #1\ \ ·\ \ \MakeUppercase{#2}}}\par\nobreak\vspace{0.15em}
  {\sffamily\bfseries\LARGE\color{Ink}#3}\par\nobreak\vspace{0.3em}
  {\color{Ocre}\rule{2.6cm}{1.2pt}}\par\nobreak\vspace{0.2em}
  \noindent{\footnotesize\sffamily\color{Gris}Difficulté~\niveau{#4}\quad·\quad durée indicative : #6\quad·\quad #5}\par\nobreak\vspace{0.3em}}
\newcommand{\fichepb}[3]{% notions, objectifs, prérequis
  {\small\setlength{\parskip}{0.15em}%
  \noindent\hangindent=2.4cm\hangafter=1\makebox[2.4cm][l]{\sffamily\textcolor{Bleu}{Notions}}#1\par
  \noindent\hangindent=2.4cm\hangafter=1\makebox[2.4cm][l]{\sffamily\textcolor{Bleu}{Objectifs}}#2\par
  \noindent\hangindent=2.4cm\hangafter=1\makebox[2.4cm][l]{\sffamily\textcolor{Bleu}{Prérequis}}#3\par}
  \vspace{0.4em}{\color{Filet}\hrule height 0.4pt}\vspace{0.6em}}
\newcommand{\titresection}[2]{% titre, texte
  \clearpage\phantomsection\pdfbookmark[0]{#1}{s.#1}%
  {\sffamily\bfseries\fontsize{24}{28}\selectfont\color{Ink}#1}\par\vspace{0.3em}
  {\color{Ocre}\rule{3.2cm}{1.4pt}}\par\vspace{0.5em}{\small\color{Gris}#2}\par\vspace{0.6em}}
\newcommand{\soustitre}[3]{% numéro, titre, label
  \par\needspace{6\baselineskip}\vspace{1em}\phantomsection\label{#3}%
  {\color{Filet}\hrule height 0.4pt}\vspace{0.5em}
  \noindent{\sffamily\bfseries\large\color{Bleu}Problème~#1}\quad{\sffamily\bfseries\color{Ink}#2}\par\nobreak\vspace{0.3em}}
\makeatother
'''

def duree(m):
    h, r = divmod(m, 60)
    return (f'{h}\\,h' + (f'\\,{r:02d}' if r else '')) if h else f'{m}\\,min'

def generer(cid):
    ch = CHAPITRES[cid]; livre = ch['livre']; lettre = {'determinants': 'd', 'courbes': 'c'}.get(cid, 'x')
    sel = SELECTION[cid]
    assert len(sel) == 5
    corps = []
    # ---------------- page de garde
    lignes = []
    for k, p in enumerate(sel, 1):
        lignes.append(rf'{k} & \textcolor{{Gris}}{{{ETAPES[k-1]}}} & {tex(p["titre"])} & \niveau{{{EXOS[p["id"]]["diff"]}}} & {duree(p["duree"])} & \pageref{{p:{p["id"]}}} & \pageref{{i:{p["id"]}}} & \pageref{{c:{p["id"]}}}\\')
    corps.append(r'\thispagestyle{plain}' '\n'
        r'{\sffamily\small\color{Gris}\textls[150]{LE COLLÉ · MATHÉMATIQUES PT · CHAPITRE ' + str(ch['num']) + r'}}\par\vspace{0.2em}' '\n'
        r'{\sffamily\bfseries\fontsize{26}{30}\selectfont\color{Ink}Sélection --- ' + ch.get('court', ch['titre']) + r'}\par\vspace{0.3em}' '\n'
        r'{\sffamily\Large\color{BleuMoyen}Cinq problèmes à travailler après le cours}\par\vspace{0.4em}' '\n'
        r'{\color{Ocre}\rule{3.2cm}{1.4pt}}\par\vspace{0.8em}' '\n'
        r'''{\small Ces cinq problèmes sont la sélection principale pour les séances, \emph{après} l'explication du cours.
Ils vont de la mise en application au niveau des devoirs et des concours ; chacun réunit plusieurs résultats du chapitre.
Ils complètent le TD complet et le livre, qu'ils ne remplacent pas.

\textbf{Mode d'emploi.} Les traiter dans l'ordre. Pour chaque problème : lire l'en-tête (notions, objectifs, prérequis),
chercher au brouillon, puis rédiger. En cas de blocage, lire \emph{une seule} indication (page des indications), puis reprendre.
Ne lire la correction qu'une fois le problème terminé ou après un vrai effort : elle explique le \emph{choix de la méthode}
avant les calculs. L'origine de chaque problème est indiquée en tête ; les problèmes « d'après » un concours sont des
adaptations rédigées par Le Collé, pas les énoncés officiels.}''' '\n'
        r'\vspace{1.2em}' '\n'
        r'{\small\renewcommand{\arraystretch}{1.45}\setlength{\tabcolsep}{4pt}\noindent\begin{tabular}{@{}r>{\raggedright\arraybackslash\sffamily\footnotesize}p{2.9cm}>{\raggedright\arraybackslash}p{6.1cm}ll@{\hspace{6pt}}ccc@{}}' '\n'
        r'& & & & & {\footnotesize\sffamily énoncé} & {\footnotesize\sffamily indic.} & {\footnotesize\sffamily corrigé}\\\hline' '\n'
        + '\n'.join(lignes) + '\n' r'\end{tabular}}')
    # ---------------- énoncés
    for k, p in enumerate(sel, 1):
        i = p['id']; e = EXOS[i]
        texte = renvois_td(adapter(e['corps'], livre, lettre))
        if p.get('origine'):
            org = p['origine']
        else:
            org = origine(i, livre) + f' · TD complet, exercice~{NUM_TD[i][1]}'
        corps.append(r'\probleme{' + str(k) + '}{' + ETAPES[k-1] + '}{' + tex(p['titre']) + '}{' + str(e['diff']) + '}{' + org + '}{' + duree(p['duree']) + '}{' + i + '}')
        corps.append(r'\fichepb{' + tex(', '.join(p['notions'])) + '.}{' + tex(p['objectifs']) + '}{' + tex(' ; '.join(p['prerequis'])) + '.}')
        corps.append(texte)
        corps.append(r'\par\vspace{0.8em}\noindent\hfill{\scriptsize\sffamily\color{Gris}indications p.~\pageref{i:' + i + r'} · correction p.~\pageref{c:' + i + r'}}')
    # ---------------- indications
    corps.append(r'\titresection{Indications}{Une indication par question délicate. N\'en lire qu\'une à la fois, puis reprendre la recherche.}')
    for k, p in enumerate(sel, 1):
        corps.append(r'\soustitre{' + str(k) + '}{' + tex(p['titre']) + '}{i:' + p['id'] + '}')
        corps.append(r'\begin{itemize}[leftmargin=1.2em,itemsep=0.25em]' + ''.join(r'\item ' + x + '\n' for x in p['indications']) + r'\end{itemize}')
    # ---------------- corrections
    corps.append(r'\titresection{Corrections}{Chaque correction commence par le choix de la méthode ; les encadrés résument ce qui resservira. Les renvois « méthode~1.4 du livre » désignent le cours.}')
    for k, p in enumerate(sel, 1):
        i = p['id']
        cor = renvois_td(adapter(CORS[i], livre, lettre))
        corps.append(r'\soustitre{' + str(k) + '}{' + tex(p['titre']) + '}{c:' + i + '}')
        corps.append(cor)
        corps.append(r'\par\hfill\textcolor{BleuClair}{$\square$}\par')
    nom = f'Selection_{cid}'
    doc = preambule(f'Le Collé — {ch["titre"]} : sélection de 5 problèmes', f'Sélection · {ch["titre"]}') + MACROS + \
        '\n\\begin{document}\n' + '\n'.join(corps) + '\n\\end{document}\n'
    open(os.path.join(BUILD, nom + '.tex'), 'w', encoding='utf8').write(doc)
    return nom

if __name__ == '__main__':
    sortie = {}
    for cid in (sys.argv[1:] or SELECTION):
        nom = generer(cid)
        w = compiler(nom); w = compiler(nom)
        a = aux(os.path.join(BUILD, nom + '.aux'))
        print(cid, 'avertissements :', w)
        sortie[cid] = [dict(id=p['id'], num=k, etape=ETAPES[k-1], page=int(a['p:' + p['id']][1]),
                            pageIndication=int(a['i:' + p['id']][1]), pageCorrige=int(a['c:' + p['id']][1]))
                       for k, p in enumerate(SELECTION[cid], 1)]
    json.dump(sortie, open(os.path.join(BUILD, 'selection.json'), 'w'), ensure_ascii=False, indent=1)
