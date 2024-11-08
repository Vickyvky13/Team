<script>
    // Function to toggle the profile picture when the card is clicked
    document.addEventListener("DOMContentLoaded", function() {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', function() {
                const figure = card.querySelector('figure img');
                const currentImage = figure.src;

                // Store the original image and alternate image for toggling
                const originalImage = figure.getAttribute('data-original');
                const newImage = currentImage === originalImage 
                    ? figure.getAttribute('data-alt') 
                    : originalImage;

                // Toggle the image source
                figure.src = newImage;
            });
        });
    });
</script>