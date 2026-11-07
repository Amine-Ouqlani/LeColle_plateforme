#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Construit, pour chaque chapitre, le TD (énoncés) et le livret de corrections, à partir
des sources du livre (inchangées) et des exercices complémentaires.
Sorties : build/TD_<chap>.pdf, build/TD_<chap>_corrections.pdf, sources autonomes .tex,
et build/td.json (numéros, parties, pages)."""
import json, os, re, subprocess, sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from meta import CHAPITRES, EXEMPLES, META

H = '/home/claude'
BUILD = os.path.join(ICI, 'build')
os.makedirs(BUILD, exist_ok=True)

SOURCES = [f'{H}/livre6/LeColle.tex', f'{H}/livre7/LeColle_metrique.tex',
           f'{ICI}/nouveaux_det.tex', f'{ICI}/nouveaux_courbes.tex', f'{ICI}/nouveaux_metrique.tex',
           f'{H}/nouveaux/corps_ed.tex', f'{H}/nouveaux/nouveaux_ed.tex']
for _c in ('red',):  # chapitres ajoutés au fur et à mesure
    for _p in (f'{H}/nouveaux/corps_{_c}.tex', f'{H}/nouveaux/nouveaux_{_c}.tex'):
        if os.path.exists(_p): SOURCES.append(_p)
# exercices des nouveaux cours (un livre par chapitre) : identifiant du livre -> source
COURS_SRC = {'ed': f'{H}/nouveaux/corps_ed.tex', 'red': f'{H}/nouveaux/corps_red.tex'}
LIVRE_SRC = {f'{H}/livre6/LeColle.tex', f'{H}/livre7/LeColle_metrique.tex'}

# ------------------------------------------------------------------ lecture des sources
def groupe(s, i):
    """lit un groupe {…} équilibré à partir de s[i]=='{' ; renvoie (contenu, indice après)"""
    assert s[i] == '{', s[i:i + 30]
    n, j = 0, i
    while True:
        c = s[j]
        if c == '\\': j += 2; continue
        if c == '{': n += 1
        elif c == '}':
            n -= 1
            if n == 0: return s[i + 1:j], j + 1
        j += 1

def lire(path):
    s = open(path, encoding='utf8').read()
    exos, cors = {}, {}
    for m in re.finditer(r'\\begin\{exo\}', s):
        i = m.end(); lab, i = groupe(s, i); dif, i = groupe(s, i); tit, i = groupe(s, i)
        fin = s.index('\\end{exo}', i)
        exos[lab] = dict(diff=int(dif), titre=tit, corps=s[i:fin].strip('\n'), src=path)
    for m in re.finditer(r'\\begin\{corrige\}', s):
        i = m.end(); lab, i = groupe(s, i)
        fin = s.index('\\end{corrige}', i)
        cors[lab] = s[i:fin].strip('\n')
    return exos, cors

EXOS, CORS = {}, {}
for p in SOURCES:
    e, c = lire(p)
    for k in e:
        assert k not in EXOS, k
    EXOS.update(e); CORS.update(c)

def aux(path):
    d = {}
    for m in re.finditer(r'\\newlabel\{([^}]*)\}\{\{([^}]*)\}\{([^}]*)\}', open(path, encoding='utf8').read()):
        d[m.group(1)] = (m.group(2), m.group(3))
    return d
AUX = {'livre6': aux(f'{H}/livre6/LeColle.aux'), 'livre7': aux(f'{H}/livre7/LeColle_metrique.aux')}
NOM_LIVRE = {'livre6': 'du livre', 'livre7': 'du volume 2', 'ed': 'du cours', 'red': 'du cours'}
for _c, _f in (('ed', 'LeColle_ED'), ('red', 'LeColle_Reduction')):
    if os.path.exists(f'{H}/nouveaux/{_f}.aux'): AUX[_c] = aux(f'{H}/nouveaux/{_f}.aux')

ANCIENS = {e['id']: e for e in json.load(open(os.path.join(ICI, 'exercices_old.json'), encoding='utf8'))}

# ------------------------------------------------------------------ transformations du texte du livre
def adapter(texte, livre, lettre):
    t = texte
    t = t.replace('exemple~\\ref{ex:max}', 'exercice~\\ref{e:ex-max}')
    t = re.sub(r'du TD~(\d+)', lambda m: f"de l'exercice~\\ref{{e:td-{lettre}{m.group(1)}}}", t)
    t = re.sub(r'\(TD~(\d+)\)', lambda m: f"(exercice~\\ref{{e:td-{lettre}{m.group(1)}}})", t)
    def ref(m):
        k = m.group(1)
        if k.startswith('e:'): return m.group(0)
        if k not in AUX[livre]: raise KeyError(k)
        return f'{AUX[livre][k][0]} {NOM_LIVRE[livre]}'
    t = re.sub(r'\\ref\{([^}]*)\}', ref, t)
    t = re.sub(r'Le TD~(\d+)', lambda m: f"L'exercice~\\ref{{e:td-{lettre}{m.group(1)}}}", t)
    t = re.sub(r': TD~(\d+)', lambda m: f": exercice~\\ref{{e:td-{lettre}{m.group(1)}}}", t)
    assert 'TD~' not in t, t[t.index('TD~') - 60:t.index('TD~') + 20]
    return t

UNI = {'×': '$\\times$', '≤': '$\\leq$', '≥': '$\\geq$', '≠': '$\\neq$', '→': '$\\to$'}
def tex(s):
    for a, b in UNI.items(): s = s.replace(a, b)
    return s

def origine(id_, livre):
    if id_ in EXEMPLES: return EXEMPLES[id_]
    if livre in COURS_SRC and EXOS[id_]['src'] == COURS_SRC[livre]:
        return f"Cours, exercice {AUX[livre]['e:' + id_][0]}"
    if id_ in ANCIENS:
        a = ANCIENS[id_]
        num = AUX[livre]['e:' + id_][0]
        base = f'Livre, exercice {num}' if livre == 'livre6' else f'Livre, volume 2, exercice {num}'
        if a['origine'] == 'td': return f'{base} · TD {a["td"]} de la classe'
        if a['origine'] == 'devoir': return f'{base} · problème type devoir'
        return base
    return 'Exercice complémentaire'

def info(id_):
    if id_ in ANCIENS:
        a = ANCIENS[id_]
        return dict(titre=a['titre'], notions=a['notions'], hp=bool(a.get('hp')))
    t, n, o, ind = META[id_]
    return dict(titre=t, notions=n, hp=False, objectifs=o, indication=ind)

# ------------------------------------------------------------------ préambule commun
def preambule(titre_pdf, entete):
    p = open(f'{H}/livre6/preambule.tex', encoding='utf8').read()
    p = p.replace('pdftitle={Le Collé — Déterminants et courbes paramétrées}', f'pdftitle={{{titre_pdf}}}')
    p += r'\providecommand{\Ker}{\operatorname{Ker}}\renewcommand{\Im}{\operatorname{Im}}\providecommand{\tr}{\operatorname{tr}}\providecommand{\Sp}{\operatorname{Sp}}' + '\n'
    p += r'''
% ================================================================ TD : mise en page propre au livret d'exercices
\fancyhf{}
\fancyhead[L]{\footnotesize\sffamily\color{Gris}''' + entete + r'''}
\fancyhead[R]{\footnotesize\sffamily\scshape\color{Gris}Le Collé}
\fancyfoot[C]{\small\sffamily\color{Ink}\thepage\,/\,\pageref{LastPage}}
\fancypagestyle{plain}{\fancyhf{}\fancyfoot[C]{\small\sffamily\color{Ink}\thepage\,/\,\pageref{LastPage}}\renewcommand{\headrulewidth}{0pt}}
\makeatletter
\newcommand{\partie}[3]{% numéro, titre, description
  \par\needspace{10\baselineskip}\vspace{1.4em}\phantomsection\label{partie:#1}\pdfbookmark[0]{Partie #1}{partie.#1}%
  {\sffamily\small\color{Gris}\textls[200]{PARTIE #1}}\par\nobreak\vspace{0.1em}
  {\sffamily\bfseries\LARGE\color{Ink}#2}\par\nobreak\vspace{0.3em}
  {\color{Ocre}\rule{2.6cm}{1.2pt}}\par\nobreak\vspace{0.2em}
  {\small\color{Gris}#3}\par\nobreak\vspace{0.6em}}
\newcommand{\exercice}[7]{% numéro, difficulté, titre, origine, notions, identifiant, page du corrigé
  \par\needspace{8\baselineskip}\vspace{1.1em}\phantomsection
  \def\@currentlabel{#1}\label{e:#6}\pdfbookmark[1]{Exercice #1}{e.#6}%
  \noindent{\sffamily\bfseries\large\color{Bleu}Exercice~#1}\quad\niveau{#2}\hfill{\footnotesize\sffamily\color{Gris}#4}\par\nobreak
  \vspace{0.1em}\noindent{\sffamily\bfseries\color{Ink}#3}\par\nobreak
  \vspace{0.1em}\noindent{\footnotesize\sffamily\color{Gris}Notions : #5.\hfill\mbox{corrigé p.~#7}\par}\nobreak
  \vspace{0.35em}}
\newcommand{\renvoi}[1]{\par\nopagebreak\vspace{0.2em}\noindent\hfill{\scriptsize\sffamily\color{Gris}#1}\par}
\newcommand{\place}{\par\vspace{1.6cm plus 0.6cm minus 0.6cm}}
\newcommand{\correction}[4]{% numéro, titre, identifiant, renvoi
  \par\needspace{7\baselineskip}\vspace{1.3em}\phantomsection
  \def\@currentlabel{#1}\label{e:#3}\pdfbookmark[1]{Exercice #1}{c.#3}%
  {\color{Filet}\hrule height 0.4pt}\vspace{0.5em}
  \noindent{\sffamily\bfseries\large\color{Bleu}Exercice~#1}\quad{\sffamily\bfseries\color{Ink}#2}\hfill{\scriptsize\sffamily\color{Gris}#4}\par\nobreak
  \vspace{0.4em}}
\newcommand{\sommaireligne}[3]{\noindent\hbox to 2.2em{\hfill\sffamily\color{Bleu}#1.}\enspace\begin{minipage}[t]{0.8\linewidth}\raggedright#2\end{minipage}\hfill\pageref{e:#3}\par}
\makeatother
\setlength{\parskip}{0.5em plus 0.15em minus 0.1em}
'''
    return p

def entete_doc(chap, sous_titre, texte):
    return (r'\thispagestyle{plain}' '\n'
            r'{\sffamily\small\color{Gris}\textls[150]{LE COLLÉ · MATHÉMATIQUES PT · CHAPITRE ' + str(chap['num']) + r'}}\par\vspace{0.2em}' '\n'
            r'{\sffamily\bfseries\fontsize{26}{30}\selectfont\color{Ink}TD --- ' + chap['titre'] + r'}\par\vspace{0.3em}' '\n'
            r'{\sffamily\Large\color{BleuMoyen}' + sous_titre + r'}\par\vspace{0.4em}' '\n'
            r'{\color{Ocre}\rule{3.2cm}{1.4pt}}\par\vspace{0.8em}' '\n' + texte + '\n')

# ------------------------------------------------------------------ génération
def generer(cid, pages_cor=None, pages_enon=None):
    ch = CHAPITRES[cid]; livre = ch['livre']; lettre = {'determinants': 'd', 'courbes': 'c'}.get(cid, 'x')
    nom = f'TD_{cid}'
    liste, n = [], 0
    for (num_p, titre_p, desc_p, ids) in ch['parties']:
        for i in ids:
            n += 1; liste.append((n, num_p, i))
    total = n

    # ---------------- énoncés
    corps = []
    if ch.get('nouveau'):
        legende = (r'{\small Ce livret rassemble ' + str(total) + r''' exercices, classés en quatre parties, du plus direct au plus exigeant.
Il reprend \textbf{tous les exercices du cours} (proposés à la fin de chaque partie du livre), complétés par des
\textbf{exercices complémentaires}, absents du livre. L'origine de chaque exercice est indiquée en haut à droite :
\emph{« Cours, exercice~1.5 »} ou \emph{« Exercice complémentaire »}. La difficulté va de \niveau{1} à \niveau{5}.
Les corrections sont dans un livret séparé, \texttt{''' + nom.replace('_', r'\_') + r'''\_corrections.pdf} ; la page de chaque correction est indiquée en tête de l'énoncé.}''')
    else:
     legende = (r'{\small Ce livret rassemble ' + str(total) + r''' exercices, classés en quatre parties, du plus direct au plus exigeant.
Il reprend \textbf{tous les exercices du livre} (TD de la classe, exercices d'entraînement, problème type devoir) et les exemples
du cours qui se prêtent à l'entraînement, complétés par des \textbf{exercices complémentaires}, absents du livre.
L'origine de chaque exercice est indiquée en haut à droite : \emph{« Livre, exercice~1.5 · TD~1 de la classe »}, \emph{« Livre, exemple~2.4 »}
ou \emph{« Exercice complémentaire »}. La difficulté va de \niveau{1} à \niveau{5}.
Les corrections sont dans un livret séparé, \texttt{''' + nom.replace('_', r'\_') + r'''\_corrections.pdf} ; la page de chaque correction est indiquée en tête de l'énoncé.}''')
    corps.append(entete_doc(ch, 'Énoncés', legende))
    corps.append(r'\vspace{0.6em}{\sffamily\bfseries\color{Bleu}Sommaire}\par\vspace{0.2em}{\small\setlength{\parskip}{1.5pt}\setlength{\columnsep}{1.2cm}\begin{multicols}{2}\raggedcolumns')
    for (num_p, titre_p, desc_p, ids) in ch['parties']:
        corps.append(r'\vspace{0.5em}\noindent\begin{minipage}[t]{0.86\linewidth}\raggedright\leavevmode\sffamily\bfseries\color{Ink}' + num_p + '. ' + titre_p + r'\end{minipage}\hfill\pageref{partie:' + num_p + r'}\par\vspace{0.15em}')
        for (k, p, i) in liste:
            if p == num_p:
                inf = info(i)
                corps.append(r'\sommaireligne{' + str(k) + '}{' + tex(inf['titre']) + (r'\HP' if inf['hp'] else '') + '}{' + i + '}')
    corps.append(r'\end{multicols}}')
    for (num_p, titre_p, desc_p, ids) in ch['parties']:
        corps.append(r'\clearpage' '\n' r'\partie{' + num_p + '}{' + titre_p + '}{' + desc_p + '}')
        for (k, p, i) in liste:
            if p != num_p: continue
            e = EXOS[i]; inf = info(i)
            texte = adapter(e['corps'], livre, lettre)
            notions = tex(', '.join(inf['notions']))
            titre = tex(inf['titre']) + (r'\HP' if inf['hp'] else '')
            pc = (pages_cor or {}).get(i, '?')
            corps.append(r'\exercice{' + str(k) + '}{' + str(e['diff']) + '}{' + titre + '}{' + origine(i, livre) + '}{' + notions + '}{' + i + '}{' + str(pc) + '}')
            corps.append(texte)
            corps.append(r'\place')
    doc = preambule(f'Le Collé — TD {ch["titre"]} (énoncés)', f'TD · {ch["titre"]} · énoncés') + \
        '\n\\begin{document}\n' + '\n'.join(corps) + '\n\\end{document}\n'
    open(os.path.join(BUILD, nom + '.tex'), 'w', encoding='utf8').write(doc)

    # ---------------- corrections
    corps = []
    texte = (r'{\small Corrections détaillées des ' + str(total) + r''' exercices du TD, dans le même ordre et avec les mêmes numéros.
Chaque correction commence par le choix de la méthode, puis détaille les calculs ; les encadrés « À retenir » résument ce qui
resservira. Les renvois ''' + (r"« méthode~1.3 du cours »" if ch.get('nouveau') else r"« méthode~1.4 du livre », « théorème~2.3 du volume~2 »…") + r''' désignent le cours.
\textbf{Chercher d'abord l'exercice} avant d'ouvrir sa correction.}''')
    corps.append(entete_doc(ch, 'Corrections', texte))
    for (num_p, titre_p, desc_p, ids) in ch['parties']:
        corps.append(r'\partie{' + num_p + '}{' + titre_p + '}{}')
        for (k, p, i) in liste:
            if p != num_p: continue
            e = EXOS[i]; inf = info(i)
            c = CORS[i]
            if c.strip() == '%%LISS%%':
                L = open(f'{H}/livre6/LeColle.tex', encoding='utf8').read()
                a = L.index(r'\q{Réduction.} $f$ est $2\pi$-périodique ; $f(-t)=(x,-y)$ : axe $(Ox)$ ; $f(\pi-t)')
                b = L.index(r'\end{figure}', a) + len(r'\end{figure}')
                c = L[a:b].replace(r'\label{fig:liss}', '').replace('[H]', '[h!]')
            c = adapter(c, livre, lettre)
            pe = (pages_enon or {}).get(i, '?')
            corps.append(r'\correction{' + str(k) + '}{' + tex(inf['titre']) + '}{' + i + '}{énoncé : TD, p.~' + str(pe) + '}')
            corps.append(c)
            corps.append(r'\par\hfill\textcolor{BleuClair}{$\square$}\par')
    doc = preambule(f'Le Collé — TD {ch["titre"]} (corrections)', f'TD · {ch["titre"]} · corrections') + \
        '\n\\begin{document}\n' + '\n'.join(corps) + '\n\\end{document}\n'
    open(os.path.join(BUILD, nom + '_corrections.tex'), 'w', encoding='utf8').write(doc)
    return liste

def compiler(nom):
    for _ in range(2):
        r = subprocess.run(['pdflatex', '-interaction=nonstopmode', '-halt-on-error', nom + '.tex'],
                           cwd=BUILD, capture_output=True, text=True, errors='replace')
        if r.returncode:
            print(r.stdout[-3000:]); raise SystemExit('échec ' + nom)
    log = open(os.path.join(BUILD, nom + '.log'), encoding='latin1').read()
    pb = re.findall(r'(LaTeX Warning: (?:Reference|There were undefined|Label).*)', log)
    return pb

def pages(nom):
    a = aux(os.path.join(BUILD, nom + '.aux'))
    return {k[2:]: int(v[1]) for k, v in a.items() if k.startswith('e:')}

if __name__ == '__main__':
    sortie = {}
    for cid in (sys.argv[1:] or CHAPITRES):
        nom = f'TD_{cid}'
        generer(cid); compiler(nom); compiler(nom + '_corrections')
        for _ in range(2):  # renvois croisés entre les deux livrets
            pe, pc = pages(nom), pages(nom + '_corrections')
            liste = generer(cid, pc, pe); w1 = compiler(nom); w2 = compiler(nom + '_corrections')
        pe2, pc2 = pages(nom), pages(nom + '_corrections')
        assert pe2 == pe and pc2 == pc, 'pagination instable'
        print(cid, 'avertissements :', w1 + w2)
        sortie[cid] = [dict(num=k, partie=p, id=i, page=pe2[i], pageCorrige=pc2[i], diff=EXOS[i]['diff'],
                            origine=origine(i, CHAPITRES[cid]['livre']))
                       for (k, p, i) in liste]
    old = json.load(open(os.path.join(BUILD, 'td.json'))) if os.path.exists(os.path.join(BUILD, 'td.json')) else {}
    old.update(sortie)
    json.dump(old, open(os.path.join(BUILD, 'td.json'), 'w'), ensure_ascii=False, indent=1)
