// Ajoute l'interactivité pour le menu déroulant avec un indicateur visuel
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        // Ferme les autres sous-menus ouverts et enlève les indicateurs
        document.querySelectorAll('.submenu').forEach(submenu => {
            if (submenu !== dropdown.nextElementSibling) {
                submenu.style.display = 'none';
                submenu.previousElementSibling.classList.remove('active');
            }
        });

        // Ouvre ou ferme le sous-menu associé et ajoute un indicateur
        const submenu = dropdown.nextElementSibling;
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            dropdown.classList.remove('active');
        } else {
            submenu.style.display = 'block';
            dropdown.classList.add('active');
        }
    });
});


