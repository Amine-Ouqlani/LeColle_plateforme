#!/usr/bin/env python3
"""Exercices bilan PT : compile la source unique docs/pt/sources/exercices-bilan.tex

  - un PDF par chapitre pour le site (énoncé page 1, puis corrigé et grille de diagnostic) : docs/pt/bilans/bilan-<id>.pdf
  - la version professeur (tous les chapitres, avec la page de garde) et la version élève (énoncés seuls),
    dans outils/bilans/build/, pour l'impression.

Met à jour le nombre de pages et la page du corrigé dans data/pt/documents.js et data/pt/chapitres.js.
Usage (depuis la racine du site) : python3 outils/bilans/construire.py
"""
import re
import shutil
import subprocess
from pathlib import Path

RACINE = Path(__file__).resolve().parents[2]
SOURCE = RACINE / 'docs/pt/sources/exercices-bilan.tex'
BUILD = RACINE / 'outils/bilans/build'
SORTIE = RACINE / 'docs/pt/bilans'
CHAPITRES = {1: 'al', 2: 'determinants', 3: 'red', 4: 'ed', 5: 'courbes', 6: 'metrique'}


def compiler(nom, version, chap):
    cmd = ['pdflatex', '-interaction=nonstopmode', '-halt-on-error', f'-jobname={nom}',
           rf'\def\VERSION{{{version}}}\def\CHAP{{{chap}}}\input{{{SOURCE}}}']
    for _ in range(2):
        r = subprocess.run(cmd, cwd=BUILD, capture_output=True, text=True)
        if r.returncode:
            raise SystemExit(f'échec de compilation : {nom}\n' + r.stdout[-2000:])
    return BUILD / f'{nom}.pdf'


def pages(pdf):
    out = subprocess.run(['pdfinfo', str(pdf)], capture_output=True, text=True).stdout
    return int(re.search(r'Pages:\s+(\d+)', out).group(1))


def main():
    BUILD.mkdir(parents=True, exist_ok=True)
    SORTIE.mkdir(parents=True, exist_ok=True)
    docs = (RACINE / 'data/pt/documents.js').read_text(encoding='utf8')
    for n, cid in CHAPITRES.items():
        pdf = compiler(f'bilan-{cid}', 'site', n)
        shutil.copy(pdf, SORTIE / pdf.name)
        p = pages(pdf)
        docs = re.sub(rf'("bilan-{cid}": \{{.*?"?pages"?: )\d+', rf'\g<1>{p}', docs, flags=re.S)
        print(f'bilan-{cid}.pdf : {p} pages')
    (RACINE / 'data/pt/documents.js').write_text(docs, encoding='utf8')
    for version in ('prof', 'eleve'):
        print(compiler(f'exercices-bilan-{version}', version, 0).name, 'compilé')


if __name__ == '__main__':
    main()
