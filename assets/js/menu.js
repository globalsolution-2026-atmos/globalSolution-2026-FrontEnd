const menuButton = document.querySelector('.menu__expand');
const menuOpen = document.querySelector('.menu__open');

menuButton.addEventListener('click', () => {
    menuOpen.classList.toggle('active');
});

// Troca de paineis
const navLinks = document.querySelectorAll('.menu-left a[data-panel]');
const panels = document.querySelectorAll('.panel');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        link.classList.add('active');
        document.getElementById('panel-' + link.dataset.panel).classList.add('active');
    })
})