// Function to toggle button visibility
function toggleButton(card) {
    // Find any previously active card and remove the "show" class from its button
    document.querySelectorAll('.card button.show').forEach(button => button.classList.remove('show'));

    // Show the button on the clicked card
    const button = card.querySelector('button');
    if (button) {
        button.classList.add('show');
    }
}
