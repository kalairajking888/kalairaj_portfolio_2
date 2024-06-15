document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class to hero section after the page is fully loaded
    document.querySelector('.hero').classList.add('loaded');
    
    // Intersection Observer to add visible class to content sections when they are scrolled into view
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold as needed

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect on hero background
    window.addEventListener('scroll', () => {
        const yPos = window.scrollY;
        const header = document.querySelector('header');
        header.style.backgroundPositionY = `${-yPos * 0.5}px`;
    });

});
