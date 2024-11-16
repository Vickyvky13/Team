<script>
    const header = document.querySelector('h1');
    const scrollTopButton = document.getElementById('scrollTop');
    let lastScrollY = window.scrollY;

    // Toggle header visibility on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }

        // Show/Hide scroll to top button
        if (window.scrollY > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }

        lastScrollY = window.scrollY;
    });

    // Scroll to top functionality
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle social container visibility
    function toggleSocial(card) {
        const socialContainer = card.querySelector('.social-container');
        const allSocialContainers = document.querySelectorAll('.social-container');

        allSocialContainers.forEach(container => container.classList.add('hidden'));

        socialContainer.classList.toggle('hidden');
    }

    // Hide social containers when clicking outside
    document.addEventListener('click', (event) => {
        const isCard = event.target.closest('.card');
        const allSocialContainers = document.querySelectorAll('.social-container');

        if (!isCard) {
            allSocialContainers.forEach(container => container.classList.add('hidden'));
        }
    });

    // Update time every second
    setInterval(() => {
        const now = new Date();
        document.getElementById("currentTime").textContent = now.toLocaleTimeString();
    }, 1000);
</script>
