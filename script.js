<script>
    const header = document.querySelector('h1');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        lastScrollY = window.scrollY;
    });

    function toggleSocial(card) {
        const socialContainer = card.querySelector('.social-container');
        const allSocialContainers = document.querySelectorAll('.social-container');
        
        // Hide all social containers
        allSocialContainers.forEach(container => container.classList.add('hidden'));

        // Toggle the clicked social container
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