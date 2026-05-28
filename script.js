document.addEventListener("DOMContentLoaded", () => {
    // Set up the Intersection Observer to watch for elements scrolling into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 }); // Triggers when 15% of the element is visible

    // Tell the observer to watch everything with the 'fade-in' class
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});
