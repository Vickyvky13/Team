function toggleSocial(card) {
    // Hide all social containers
    const allSocialContainers = document.querySelectorAll('.social-container');
    allSocialContainers.forEach(container => {
        container.classList.add('hidden');
    });

    // Show the social container for the clicked card
    const socialContainer = card.querySelector('.social-container');
    socialContainer.classList.toggle('hidden');

    // Automatically hide the shown social container after 3 seconds
    setTimeout(() => {
        socialContainer.classList.add('hidden');
    }, 3000);
}