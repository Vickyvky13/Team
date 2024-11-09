function toggleSocial(card) {
    // First, hide all other social containers
    document.querySelectorAll('.social-container').forEach(container => {
        if (container !== card.querySelector('.social-container')) {
            container.classList.add('hidden');
        }
    });

    // Then toggle the clicked card's social container
    const socialContainer = card.querySelector('.social-container');
    socialContainer.classList.toggle('hidden');

    // Automatically hide the social container after 3 seconds
    setTimeout(() => {
        socialContainer.classList.add('hidden');
    }, 3000);
}