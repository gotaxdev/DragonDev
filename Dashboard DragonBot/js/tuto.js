// Récupère l'élément de la navbar
const navbar = document.getElementById('navigation-content');
let lastScrollTop = 0; // Stocke la position précédente du scroll

// Fonction pour gérer l'apparition et la disparition de la navbar
window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Position actuelle du scroll

    if (currentScroll > lastScrollTop) {
        // Si on descend, cacher la navbar
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('navbar-show');
    } else {
        // Si on remonte, afficher la navbar
        navbar.classList.add('navbar-show');
        navbar.classList.remove('navbar-hidden');
    }

    // Met à jour la position du scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Empêche de devenir négatif
});
