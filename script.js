// JavaScript to toggle visibility of the social-container
let activeCard = null;

function toggleSocial(card) {
    // If there's an active card and it's not the clicked card, hide its social container
    if (activeCard && activeCard !== card) {
        activeCard.querySelector('.social-container').classList.remove('show');
    }
    
    // Toggle the clicked card's social container visibility
    const socialContainer = card.querySelector('.social-container');
    socialContainer.classList.toggle('show');

    // Update the active card
    activeCard = socialContainer.classList.contains('show') ? card : null;
}
