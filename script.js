// Create falling leaves
for (let i = 0; i < 20; i++) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDelay = `${Math.random() * 10}s`;
    document.body.appendChild(leaf);
}

// Toggle seasonal effects on click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.remove('spring', 'winter', 'tornado'); // Remove any previous classes

        // Add a new random seasonal class
        const seasons = ['spring', 'winter', 'tornado'];
        const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
        card.classList.add(randomSeason);
    });
});
