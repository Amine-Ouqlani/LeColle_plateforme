/* Le Collé — accueil : choix de la filière */
'use strict';
cadre(null);
$('#contenu').innerHTML = `
  <h1>Le Collé</h1>
  <p class="intro">Des cours, des fiches et des exercices pour les classes préparatoires, en deux espaces distincts. Choisis ta filière.</p>
  <div class="choix">
    <a class="choix-carte" data-filiere="pt" href="pt.html">
      <span class="choix-tag">Filière PT</span>
      <span class="choix-titre">Mathématiques PT</span>
      <span class="choix-texte">Déterminants, courbes paramétrées, propriétés métriques : livres, fiches de référence, présentation, TD et corrections, annales, examens blancs.</span>
    </a>
    <a class="choix-carte" data-filiere="mp" href="mp.html">
      <span class="choix-tag">Filière MP</span>
      <span class="choix-titre">Les ouvrages Le Collé</span>
      <span class="choix-texte">Maths (Sup, Spé, résumé), et les cours d'informatique, de SI et de chimie.</span>
    </a>
  </div>`;
