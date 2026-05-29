document.addEventListener("DOMContentLoaded", () => {
    // Set up the Intersection Observer to watch for elements scrolling into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 }); 

    // Tell the observer to watch everything with the 'fade-in' class
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

// --- Typewriter Effect ---
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typewriter-text");
    if (textElement) {
        // Detects language based on the HTML tag
        const isSwedish = document.documentElement.lang === "sv";
        const textToType = isSwedish ? "Genom min lins" : "Through my lens";
        
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                textElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100); 
            }
        }
        setTimeout(typeWriter, 1000); 
    }
});

// --- Lightbox Functionality ---
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);

    const lightboxCaption = document.createElement('div');
    lightboxCaption.id = 'lightbox-caption';
    lightboxCaption.innerText = "© 2026 Anton Kindström. Distribution or commercial use without permission is strictly prohibited."; 
    lightbox.appendChild(lightboxCaption);

    const galleryImages = document.querySelectorAll('.gallery-item img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active'); 
            lightboxImage.src = image.src;    
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active'); 
    });
});

// --- Disable Right-Click ---
document.addEventListener('contextmenu', event => event.preventDefault());

// --- Hamburger Menu Functionality ---
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});