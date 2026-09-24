document.addEventListener('DOMContentLoaded', () => {
    // 1. Atualização dinâmica do Ano no Rodapé
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Última modificação: ${document.lastModified}`;
    }

    const hamburgerButton = document.getElementById('hamburger-btn');
    const primaryNav = document.getElementById('primary-nav');
    const openIcon = hamburgerButton.querySelector('.open-icon');
    const closeIcon = hamburgerButton.querySelector('.close-icon');

    if (hamburgerButton && primaryNav) {
        hamburgerButton.addEventListener('click', () => {
            const isOpen = primaryNav.classList.toggle('open');
            
            openIcon.hidden = isOpen;
            closeIcon.hidden = !isOpen;

            hamburgerButton.setAttribute('aria-expanded', isOpen);
        });
    }
});