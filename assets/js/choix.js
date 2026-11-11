/* Le Collé — accueil : choix de la filière */
'use strict';
cadre(null);
$('#contenu').innerHTML = `
  <h1>Le Collé</h1>
  <p class="intro">Des cours, des fiches et des exercices pour les classes préparatoires. Choisis ta filière : chaque espace a ses propres documents.</p>
  <div class="choix">
    <a class="choix-carte" data-filiere="pt" href="pt.html">
      <span class="choix-tag">Filière PT</span>
      <span class="choix-titre">Mathématiques PT</span>
      <span class="choix-texte">Six chapitres, de l'algèbre linéaire aux propriétés métriques des courbes : livrets, présentations, fiches, exercices bilan, problèmes, TD corrigés, annales et examens blancs.</span>
    </a>
    <a class="choix-carte" data-filiere="mp" href="mp.html">
      <span class="choix-tag">Filière MP</span>
      <span class="choix-titre">Les ouvrages Le Collé</span>
      <span class="choix-texte">Maths (Sup, Spé, résumé), et les cours d'informatique, de SI et de chimie.</span>
    </a>
  </div>
  <section class="programmes" aria-labelledby="prog-titre">
    <h2 id="prog-titre">Programmes officiels de mathématiques</h2>
    <p class="programmes-texte">Les textes du Bulletin officiel, sur le site du ministère : ce qui est exigible en première année (PTSI) et en deuxième année (PT).</p>
    <div class="programmes-liens">
      <a class="programme" href="https://cache.media.education.gouv.fr/file/SPE1-MEN-MESRI-4-2-2021/65/2/spe781_annexe_1373652.pdf" target="_blank" rel="noopener">
        <span class="programme-titre">Programme PTSI</span>
        <span class="programme-detail">Première année · BO spécial n° 1 du 11 février 2021 · PDF</span>
      </a>
      <a class="programme" href="https://cache.media.education.gouv.fr/file/31/23/2/ensecsup735_annexes_1417232.pdf" target="_blank" rel="noopener">
        <span class="programme-titre">Programme PT</span>
        <span class="programme-detail">Deuxième année · BO n° 31 du 26 août 2021 · PDF</span>
      </a>
    </div>
  </section>`;
