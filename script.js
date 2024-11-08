<script>
    window.addEventListener("scroll", function() {
        const footer = document.querySelector("footer");

        if (window.scrollY > 100) { // Show after scrolling down a bit
            footer.classList.add("visible");
        } else {
            footer.classList.remove("visible");
        }
    });
</script>#