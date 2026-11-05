/* Le Collé — devoirs et examens blancs */
'use strict';

cadre('pt', 'entrainement');

const sujet = s => {
  const total = s.parties ? s.parties.reduce((t, p) => t + p.points, 0) : null;
  const parties = s.parties ? `<ol style="margin-top:10px">${s.parties.map(p => {
    const a = LC.annales.find(x => x.id === p.annale);
    return `<li><a href="annale.html?id=${a.id}">${a.concours} ${a.annee}, ${a.partie}</a> — ${p.questions} <span class="tag">(${String(p.points).replace('.', ',')} points : ${p.detail})</span></li>`;
  }).join('')}</ol>` : '';
  const liens = s.enonce ? `<p class="links" style="margin-top:8px"><a href="${lecteurUrl(s.enonce.doc, s.enonce.page)}">Sujet</a><a href="${lecteurUrl(s.corrige.doc, s.corrige.page)}">Corrigé</a></p>` : '';
  return `<li id="${s.id}" style="padding:20px 0"><h3 style="margin:0 0 4px">${s.titre}</h3>
    <p class="tag">${dureeTexte(s.duree)}${total ? ` · noté sur ${total}` : ''} · ${s.origine}</p>
    <p style="margin-top:6px">${s.description}</p>${parties}${liens}</li>`;
};

const devoirs = LC.entrainement.filter(s => s.type === 'devoir');
const examens = LC.entrainement.filter(s => s.type === 'examen');

$('#contenu').innerHTML = `
  <h1>Entraînement</h1>
  <p class="intro">Des sujets à faire en temps limité, sans livre ni fiche ni calculatrice. Corrige-toi ensuite avec la fiche, puis avec le corrigé, et note-toi avec le barème indiqué.</p>
  <h2>Devoirs</h2><ul class="list">${devoirs.map(sujet).join('')}</ul>
  <h2>Examens blancs</h2>
  <p class="muted">Composés à partir d'extraits d'annales de la Banque PT ; le barème est indicatif.</p>
  <ul class="list">${examens.map(sujet).join('')}</ul>`;
renderMath($('#contenu'));
if (location.hash) setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView(), 0);
