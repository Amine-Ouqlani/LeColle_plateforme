#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Le Collé PT — construit les livrets et les présentations, individuels puis complets.

    python3 outils/livrets/construire.py            (depuis la racine du site)

1. Compile chaque source de docs/pt/sources/ (livrets, présentations animées et sans animations, fiches)
   et copie les PDF dans docs/pt/livres/, docs/pt/presentations/, docs/pt/fiches/.
2. Assemble les documents complets à partir de ces PDF individuels : le livret complet PT et les
   présentations complètes PT (animées et sans animations). Les documents complets ne sont jamais édités
   à la main : toute modification d'un cours se fait dans sa source, puis on relance ce script.
3. Met à jour le nombre de pages dans data/pt/documents.js et écrit outils/livrets/build/pages.json
   (première page de chaque chapitre dans les documents complets, et plan de chaque PDF).

Les liens internes de chaque PDF (sommaire, renvois) sont conservés dans les documents complets :
les destinations nommées sont converties en destinations explicites avant l'assemblage, ce qui évite
qu'un renvoi d'un chapitre pointe vers un autre chapitre."""
import json, os, re, shutil, subprocess, sys
import pypdf
from pypdf.generic import ArrayObject, NameObject, NumberObject, NullObject, TextStringObject, ByteStringObject

RACINE = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
SRC = os.path.join(RACINE, 'docs/pt/sources')
BUILD = os.path.join(RACINE, 'outils/livrets/build')
os.makedirs(BUILD, exist_ok=True)

# ordre pédagogique du parcours PT
CHAPITRES = [
    dict(num=1, id='ed', titre='Équations différentielles',
         livret='livre-equations-differentielles', presentation='presentation-equations-differentielles', fiche='fiche-equations-differentielles'),
    dict(num=2, id='red', titre='Algèbre linéaire et réduction',
         livret='livre-reduction', presentation='presentation-reduction', fiche='fiche-reduction'),
    dict(num=3, id='determinants', titre='Déterminants',
         livret='livre-determinants', presentation='presentation-determinants', fiche='fiche-determinants'),
    dict(num=4, id='courbes', titre='Courbes paramétrées planes',
         livret='livre-courbes', presentation='presentation-courbes', fiche='fiche-courbes-parametrees'),
    dict(num=5, id='metrique', titre='Propriétés métriques et enveloppes',
         livret='volume2-metrique-enveloppes', presentation=None, fiche=None),
]
LIVRET_PT = 'docs/pt/livres/livret-complet-PT.pdf'
PRES_PT = 'docs/pt/presentations/presentations-completes-PT.pdf'
PRES_PT_STAT = 'docs/pt/presentations/presentations-completes-PT-sans-animations.pdf'


def latex(nom, passes=2, jobname=None, entree=None):
    for _ in range(passes):
        cmd = ['pdflatex', '-interaction=nonstopmode', '-halt-on-error']
        if jobname: cmd.append('-jobname=' + jobname)
        cmd.append(entree or nom + '.tex')
        r = subprocess.run(cmd, cwd=BUILD, capture_output=True, text=True, errors='replace')
        if r.returncode:
            print(r.stdout[-2500:]); sys.exit('échec de compilation : ' + (jobname or nom))
    log = open(os.path.join(BUILD, (jobname or nom) + '.log'), encoding='latin1').read()
    if re.search(r'LaTeX Warning: (Reference|There were undefined)', log):
        print('  attention : renvois non résolus dans', jobname or nom)


def compiler_tout():
    for c in CHAPITRES:
        shutil.copy(os.path.join(SRC, c['livret'] + '.tex'), BUILD)
        latex(c['livret'], passes=3)
        shutil.copy(os.path.join(BUILD, c['livret'] + '.pdf'), os.path.join(RACINE, 'docs/pt/livres', c['livret'] + '.pdf'))
        print('livret', c['livret'])
        if c['presentation']:
            p = c['presentation']
            shutil.copy(os.path.join(SRC, p + '.tex'), BUILD)
            latex(p)
            latex(p, jobname=p + '-sans-animations', entree=r'\PassOptionsToClass{handout}{beamer}\input{' + p + '.tex}')
            for suf in ('', '-sans-animations'):
                shutil.copy(os.path.join(BUILD, p + suf + '.pdf'), os.path.join(RACINE, 'docs/pt/presentations', p + suf + '.pdf'))
            print('présentation', p)
        if c['fiche']:
            shutil.copy(os.path.join(SRC, c['fiche'] + '.tex'), BUILD)
            latex(c['fiche'])
            shutil.copy(os.path.join(BUILD, c['fiche'] + '.pdf'), os.path.join(RACINE, 'docs/pt/fiches', c['fiche'] + '.pdf'))
            print('fiche', c['fiche'])


# ------------------------------------------------------------------ assemblage
def explicite(lecteur):
    """remplace les destinations nommées des liens par des destinations explicites (page, position)"""
    nd = lecteur.named_destinations
    for page in lecteur.pages:
        for a in page.get('/Annots', []) or []:
            a = a.get_object()
            if a.get('/Subtype') != '/Link': continue
            if '/Dest' in a: cle, d = 'dest', a['/Dest']
            elif '/A' in a and a['/A'].get('/S') == '/GoTo': cle, d = 'act', a['/A']['/D']
            else: continue
            d = d.get_object() if hasattr(d, 'get_object') else d
            if not isinstance(d, (TextStringObject, ByteStringObject, NameObject, str)): continue
            dest = nd.get(str(d))
            if dest is None: continue
            if dest.typ == '/XYZ':
                arr = ArrayObject([dest.page, NameObject('/XYZ'), dest.left if dest.left is not None else NumberObject(0),
                                   dest.top if dest.top is not None else NullObject(), NullObject()])
            else:
                arr = ArrayObject([dest.page, NameObject('/Fit')])
            if cle == 'dest': a[NameObject('/Dest')] = arr
            else: a['/A'][NameObject('/D')] = arr


def plan(lecteur):
    """plan (signets) d'un PDF : liste d'arbres (titre, page 0-indexée, enfants)"""
    def parcourir(o):
        res = []
        for x in o:
            if isinstance(x, list):
                if res: res[-1][2].extend(parcourir(x))
            else:
                res.append([x.title, lecteur.get_destination_page_number(x), []])
        return res
    return parcourir(lecteur.outline)


def ajouter_signets(ecrivain, arbre, decalage, parent):
    for titre, page, enfants in arbre:
        item = ecrivain.add_outline_item(titre, page + decalage, parent=parent)
        ajouter_signets(ecrivain, enfants, decalage, item)


def assembler(sortie, couverture_pdf, parties, titre_doc):
    """parties : liste de (titre du signet, chemin du PDF). Renvoie la première page (1-indexée) de chaque partie."""
    w = pypdf.PdfWriter()
    cv = pypdf.PdfReader(couverture_pdf)
    w.append(cv, import_outline=False)
    w.add_outline_item('Sommaire', 0)
    debuts, n = [], len(cv.pages)
    for titre, chemin in parties:
        r = pypdf.PdfReader(chemin)
        explicite(r)
        arbre = plan(r)
        w.append(r, import_outline=False)
        item = w.add_outline_item(titre, n)
        ajouter_signets(w, arbre, n, item)
        debuts.append(n + 1)
        n += len(r.pages)
    w.add_metadata({'/Title': titre_doc, '/Author': 'Ahmed Amine Ouqlani'})
    w.page_mode = '/UseOutlines'
    with open(os.path.join(RACINE, sortie), 'wb') as f:
        w.write(f)
    return debuts, n


def npages(chemin):
    return len(pypdf.PdfReader(chemin).pages)


COULEURS = r'''\definecolor{Ink}{HTML}{1C2533}\definecolor{Bleu}{HTML}{1F3A5F}\definecolor{BleuMoyen}{HTML}{4A6A8F}
\definecolor{BleuClair}{HTML}{9DB2C9}\definecolor{Ocre}{HTML}{B07A26}\definecolor{Gris}{HTML}{5E6672}\definecolor{Filet}{HTML}{C5CCD6}'''


def couverture_livret(debuts):
    lignes = '\n'.join(
        r'{\color{BleuClair}\sffamily\bfseries\Huge ' + str(c['num']) + r'} & {\sffamily\bfseries\Large\color{Ink}' + c['titre'] +
        r'}\newline{\small\color{Gris}livret ' + ('« volume 2 »' if c['id'] == 'metrique' else 'du chapitre') +
        r' · ' + str(npages(os.path.join(BUILD, c['livret'] + '.pdf'))) + r' pages} & {\sffamily\Large\color{Bleu}' + str(d) + r'}\\[0.9cm]'
        for c, d in zip(CHAPITRES, debuts))
    tex = r'''\documentclass[a4paper,11pt]{article}
\usepackage[utf8]{inputenc}\usepackage[T1]{fontenc}\usepackage[sc]{mathpazo}\usepackage[scaled=0.9]{helvet}
\usepackage[a4paper,margin=2.6cm]{geometry}\usepackage{xcolor,tikz,array,microtype}
''' + COULEURS + r'''
\pagestyle{empty}\setlength{\parindent}{0pt}
\begin{document}
\begin{tikzpicture}[remember picture,overlay]
  \fill[Bleu] (current page.north west) rectangle ([yshift=-15.5cm]current page.north east);
  \node[anchor=north west,text=white,font=\sffamily\small] at ([xshift=2.6cm,yshift=-3.2cm]current page.north west)
     {\textls[250]{MATHÉMATIQUES\ \ ·\ \ CPGE PT\ \ ·\ \ DEUXIÈME ANNÉE}};
  \node[anchor=north west,text=white] at ([xshift=2.5cm,yshift=-4.4cm]current page.north west) {\fontsize{62}{66}\selectfont\scshape Le Collé};
  \draw[Ocre,line width=1.6pt] ([xshift=2.6cm,yshift=-7.3cm]current page.north west) -- ++(4.2cm,0);
  \node[anchor=north west,text=white,font=\sffamily\Large\bfseries,align=left] at ([xshift=2.6cm,yshift=-8.0cm]current page.north west)
     {Livret complet PT};
  \node[anchor=north west,text=white!90!Bleu,font=\sffamily\large,align=left] at ([xshift=2.6cm,yshift=-9.0cm]current page.north west)
     {Tous les cours du parcours, dans l'ordre des séances};
  \node[anchor=north west,text=Ink,font=\sffamily\small,align=left,text width=12cm] at ([xshift=2.6cm,yshift=-17.4cm]current page.north west)
     {\textcolor{Bleu}{\bfseries Cours, méthodes et exercices corrigés}\\[0.3cm]
      \textcolor{Gris}{Ce livret réunit, sans modification, les livrets de chaque chapitre. Chaque livret garde sa propre
      pagination et sa numérotation interne (§1.1, théorème~1.3\dots), identique à celle de la fiche, de la présentation et du TD.}};
  \node[anchor=south west,text=Ink,font=\sffamily\large] at ([xshift=2.6cm,yshift=3.0cm]current page.south west) {Ahmed Amine Ouqlani};
  \draw[Filet] ([xshift=2.6cm,yshift=2.6cm]current page.south west) -- ([xshift=-2.4cm,yshift=2.6cm]current page.south east);
\end{tikzpicture}
\clearpage
{\sffamily\bfseries\fontsize{28}{32}\selectfont\color{Ink}Sommaire}\par\vspace{0.3em}
{\color{Ocre}\rule{3.2cm}{1.4pt}}\par\vspace{1.4cm}
\begin{tabular}{@{}p{1.4cm}p{10.6cm}r@{}}
& {\footnotesize\sffamily\color{Gris}CHAPITRE} & {\footnotesize\sffamily\color{Gris}PAGE DU PDF}\\[0.4cm]
''' + lignes + r'''
\end{tabular}
\vfill
{\small\color{Gris}Les numéros de page ci-dessus sont ceux du fichier PDF (les signets du lecteur PDF mènent à chaque chapitre et à
chacune de ses parties). Le livret de chaque chapitre se télécharge aussi séparément, depuis la page du chapitre sur le site.\par}
\end{document}
'''
    open(os.path.join(BUILD, 'couverture-livret.tex'), 'w', encoding='utf8').write(tex)
    latex('couverture-livret', passes=2)
    return os.path.join(BUILD, 'couverture-livret.pdf')


def couverture_presentations(debuts, statique):
    decks = [c for c in CHAPITRES if c['presentation']]
    lignes = '\n'.join(r'{\color{BleuClair}\bfseries\Large ' + str(c['num']) + r'} & {\bfseries\large\color{Ink}' + c['titre'] +
                       r'} & {\large\color{Bleu}' + str(d) + r'}\\[0.25cm]' for c, d in zip(decks, debuts))
    tex = r'''\documentclass[aspectratio=169,11pt]{beamer}
\usepackage[utf8]{inputenc}\usepackage[T1]{fontenc}\usepackage[scaled=0.92]{helvet}\usepackage{tikz,array}
''' + COULEURS + r'''
\setbeamertemplate{navigation symbols}{}\usefonttheme{professionalfonts}
\begin{document}
\begin{frame}[plain]
\begin{tikzpicture}[remember picture,overlay]
  \fill[Bleu] (current page.north west) rectangle (current page.south east);
  \node[anchor=north west,text=white!70!Bleu,font=\sffamily\scriptsize] at ([xshift=1cm,yshift=-1.2cm]current page.north west)
    {LE COLLÉ\ \ ·\ \ MATHÉMATIQUES PT\ \ ·\ \ TOUS LES CHAPITRES};
  \node[anchor=north west,text=white,font=\sffamily\bfseries\fontsize{26}{30}\selectfont,text width=13cm] at ([xshift=1cm,yshift=-2.1cm]current page.north west)
    {Présentations complètes PT''' + (r'\\ {\large sans animations}' if statique else '') + r'''};
  \fill[Ocre] ([xshift=1cm,yshift=-4.6cm]current page.north west) rectangle ([xshift=4cm,yshift=-4.65cm]current page.north west);
  \node[anchor=north west,text=white!80!Bleu,font=\normalsize,text width=12.5cm] at ([xshift=1cm,yshift=-5cm]current page.north west)
    {Les présentations de chaque chapitre, réunies sans modification, dans l'ordre des séances. En séance, utiliser plutôt la
     présentation du chapitre, sur sa page.};
\end{tikzpicture}
\end{frame}
\begin{frame}[plain]
\vspace*{0.4cm}\hspace*{0.6cm}{\sffamily\bfseries\Large\color{Bleu}Sommaire}\par\vspace{0.1cm}
\hspace*{0.6cm}{\color{Ocre}\rule{2.6cm}{1.2pt}}\par\vspace{0.6cm}
\hspace*{0.6cm}\begin{tabular}{@{}p{0.9cm}p{9.6cm}r@{}}
& {\scriptsize\color{Gris}CHAPITRE} & {\scriptsize\color{Gris}DIAPOSITIVE}\\[0.15cm]
''' + lignes + r'''
\end{tabular}
\par\vspace{0.5cm}\hspace*{0.6cm}{\footnotesize\color{Gris}Numéros de diapositive du fichier PDF ; les signets mènent à chaque chapitre et à chacune de ses parties.}
\end{frame}
\end{document}
'''
    nom = 'couverture-presentations' + ('-statique' if statique else '')
    open(os.path.join(BUILD, nom + '.tex'), 'w', encoding='utf8').write(tex)
    latex(nom, passes=2)
    return os.path.join(BUILD, nom + '.pdf')


def documents_complets():
    res = {}
    # livret complet : deux passes (les numéros de page du sommaire dépendent de la couverture, qui fait 2 pages)
    livrets = [os.path.join(BUILD, c['livret'] + '.pdf') for c in CHAPITRES]
    debuts, n = [], 3
    for p in livrets:
        debuts.append(n); n += npages(p)
    cv = couverture_livret(debuts)
    assert npages(cv) == 2
    d, total = assembler(LIVRET_PT, cv, [(f"{c['num']}. {c['titre']}", p) for c, p in zip(CHAPITRES, livrets)], 'Le Collé — Livret complet PT')
    assert d == debuts, (d, debuts)
    res['livret'] = dict(fichier=LIVRET_PT, pages=total, debuts={c['id']: x for c, x in zip(CHAPITRES, d)})
    print('livret complet :', total, 'pages')
    decks = [c for c in CHAPITRES if c['presentation']]
    for statique, sortie, cle in ((False, PRES_PT, 'presentations'), (True, PRES_PT_STAT, 'presentationsStatique')):
        suf = '-sans-animations' if statique else ''
        pdfs = [os.path.join(BUILD, c['presentation'] + suf + '.pdf') for c in decks]
        debuts, n = [], 3
        for p in pdfs:
            debuts.append(n); n += npages(p)
        cv = couverture_presentations(debuts, statique)
        assert npages(cv) == 2
        d, total = assembler(sortie, cv, [(f"{c['num']}. {c['titre']}", p) for c, p in zip(decks, pdfs)],
                             'Le Collé — Présentations complètes PT' + (' (sans animations)' if statique else ''))
        assert d == debuts
        res[cle] = dict(fichier=sortie, pages=total, debuts={c['id']: x for c, x in zip(decks, d)})
        print('présentations complètes' + (' sans animations' if statique else '') + ' :', total, 'diapositives')
    return res


def mettre_a_jour_pages():
    """nombre de pages de chaque PDF géré par ce script, dans data/pt/documents.js"""
    p = os.path.join(RACINE, 'data/pt/documents.js')
    s = open(p, encoding='utf8').read()
    def maj(m):
        f = m.group(2)
        chemin = os.path.join(RACINE, f)
        if not os.path.exists(chemin) or not f.endswith('.pdf'): return m.group(0)
        return m.group(1) + str(npages(chemin))
    s2 = re.sub(r'(fichier: "([^"]+)",(?:\n    [^\n]*)*?\n    pages: )\d+', maj, s)
    if s2 != s:
        open(p, 'w', encoding='utf8').write(s2)
        print('documents.js : pages mises à jour')


if __name__ == '__main__':
    if '--assembler' not in sys.argv:
        compiler_tout()
    infos = documents_complets()
    infos['plans'] = {}
    for c in CHAPITRES:
        infos['plans'][c['livret']] = plan(pypdf.PdfReader(os.path.join(BUILD, c['livret'] + '.pdf')))
        if c['presentation']:
            for suf in ('', '-sans-animations'):
                infos['plans'][c['presentation'] + suf] = plan(pypdf.PdfReader(os.path.join(BUILD, c['presentation'] + suf + '.pdf')))
    json.dump(infos, open(os.path.join(BUILD, 'pages.json'), 'w'), ensure_ascii=False, indent=1)
    mettre_a_jour_pages()
