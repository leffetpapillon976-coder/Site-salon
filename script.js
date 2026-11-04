// Menu mobile
const boutonMenu = document.querySelector('.menu-bouton');
const menu = document.getElementById('menu');

boutonMenu.addEventListener('click', () => {
  const ouvert = menu.classList.toggle('ouvert');
  boutonMenu.setAttribute('aria-expanded', ouvert);
  boutonMenu.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
});

menu.querySelectorAll('a').forEach(lien =>
  lien.addEventListener('click', () => {
    menu.classList.remove('ouvert');
    boutonMenu.setAttribute('aria-expanded', 'false');
  })
);

// Ombre de l'en-tête au défilement
const entete = document.querySelector('.entete');
const majEntete = () => entete.classList.toggle('defile', window.scrollY > 10);
window.addEventListener('scroll', majEntete, { passive: true });
majEntete();

// Visionneuse de la galerie
const visionneuse = document.querySelector('.visionneuse');
const imageGrande = visionneuse.querySelector('img');

document.querySelector('.galerie').addEventListener('click', e => {
  const img = e.target.closest('figure')?.querySelector('img');
  if (!img) return;
  imageGrande.src = img.src;
  imageGrande.alt = img.alt;
  visionneuse.hidden = false;
});

const fermer = () => { visionneuse.hidden = true; imageGrande.src = ''; };
visionneuse.addEventListener('click', e => { if (e.target !== imageGrande) fermer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') fermer(); });

// Année du pied de page
document.getElementById('annee').textContent = new Date().getFullYear();
