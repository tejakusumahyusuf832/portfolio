document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll(".reveal");

    // Create an Intersection Observer
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Unobserve after revealing to animate only once
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Trigger when 15% of the element is visible
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    // Attach observer to each element
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});
