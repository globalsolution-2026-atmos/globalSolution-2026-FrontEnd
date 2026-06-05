const menuButton = document.querySelector('.menu__expand');
const menuOpen = document.querySelector('.menu__open');

menuButton.addEventListener('click', () => {
    const isMenuOpen = menuOpen.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', String(isMenuOpen));
});

// Troca de paineis
const navLinks = document.querySelectorAll('.menu-left [data-panel]');
const panels = document.querySelectorAll('.panel');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navLinks.forEach(l => {
            l.classList.remove('active');

            if (l.hasAttribute('aria-pressed')) {
                l.setAttribute('aria-pressed', 'false');
            }
        });
        panels.forEach(p => p.classList.remove('active'));

        link.classList.add('active');
        if (link.hasAttribute('aria-pressed')) {
            link.setAttribute('aria-pressed', 'true');
        }

        document.getElementById('panel-' + link.dataset.panel).classList.add('active');
    })
})
