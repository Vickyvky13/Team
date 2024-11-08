<script>
    // Function to change the profile picture when the card is clicked
    document.addEventListener("DOMContentLoaded", function() {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', function() {
                const figure = card.querySelector('figure img');
                const currentImage = figure.src;
                
                // Define the alternate image URL
                const newImage = currentImage.includes('IMG01.jpg') ? './images/img1.jpg' :
                                 currentImage.includes('IMG02.jpg') ? './images/IMG02-alt.jpg' :
                                 currentImage.includes('IMG03.jpg') ? './images/IMG03-alt.jpg' :
                                 currentImage.includes('IMG04.jpg') ? './images/IMG04-alt.jpg' : currentImage;

                // Change the image source
                figure.src = newImage;
            });
        });
    });
</script>