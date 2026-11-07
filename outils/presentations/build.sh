#!/bin/bash
# usage: ./build.sh ed  -> presentation-equations-differentielles(.pdf, -sans-animations.pdf)
set -e
c=$1; nom=$2
cat theme.tex corps_$c.tex > $nom.tex
for i in 1 2; do pdflatex -interaction=nonstopmode -halt-on-error $nom.tex > /dev/null || { grep -A5 "^!" $nom.log | head -30; exit 1; }; done
for i in 1 2; do pdflatex -interaction=nonstopmode -halt-on-error -jobname=$nom-sans-animations "\PassOptionsToClass{handout}{beamer}\input{$nom.tex}" > /dev/null || { grep -A5 "^!" $nom-sans-animations.log | head; exit 1; }; done
echo "$nom: $(pdfinfo $nom.pdf | grep Pages) / handout $(pdfinfo $nom-sans-animations.pdf | grep Pages)"
grep -c "Overfull" $nom.log || true
grep "Overfull" $nom.log | head
