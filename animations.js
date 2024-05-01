document.addEventListener("DOMContentLoaded", function() {
    // Function to add fade-in animation to elements when they enter the viewport
    function fadeInElements() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Call the fadeInElements function when the page is loaded
    fadeInElements();

    // Call the fadeInElements function whenever the window is scrolled
    window.addEventListener('scroll', fadeInElements);

    // Apply beautiful animations
    applyBeautifulAnimations();
});

function applyBeautifulAnimations() {
    // Add smooth fade-in animation to promotional content
    const promotionalContent = document.querySelector('.promotional-content');
    promotionalContent.classList.add('fade-in');

    // Add subtle animations to promotional text
    const promoText = document.querySelectorAll('.promo-text');
    promoText.forEach(text => {
        text.style.transition = 'opacity 0.5s ease-in-out';
    });

    // Add animations to headings
    const promoHeadings = document.querySelectorAll('.promo-heading, .promo-subheading');
    promoHeadings.forEach(heading => {
        heading.style.transition = 'transform 0.5s ease-in-out';
    });
}
