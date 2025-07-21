// Function to change slides in each carousel
function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.slide');
    
    // Find the currently displayed slide
    let currentSlide = Array.from(slides).findIndex(slide => slide.style.display === 'block');
    if (currentSlide === -1) currentSlide = 0; // If no slide is visible, set to the first slide

    currentSlide += direction;

    // Loop through slides
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Go back to the first slide if we reached the end
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to the last slide if we move backwards from the first
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Show the selected slide
    slides[currentSlide].style.display = 'block';
}

// Initialize all carousels by displaying the first slide
function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.slide');
        slides[0].style.display = 'block'; // Display the first slide initially
    });
}

// Initialize carousels when the page loads
document.addEventListener('DOMContentLoaded', initializeCarousels);

window.addEventListener('scroll', function() {
    var bottomB = document.getElementById('bottomB');
    var scrollPosition = window.scrollY + window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    // Check if the page is scrolled to the bottom
    if (scrollPosition >= documentHeight - 1) {  // Slight offset to avoid any precision issues
        bottomB.style.transition = 'z-index 0.3s ease-in-out, opacity 0.3s ease-in-out';
        bottomB.style.zIndex = 3; // Increase z-index to bring it to the front
        bottomB.style.opacity = 1; // Make it visible
    } else {
        bottomB.style.transition = 'z-index 0.3s ease-in-out, opacity 0.3s ease-in-out';
        bottomB.style.zIndex = 1; // Reset z-index to hide it behind
        bottomB.style.opacity = 0; // Hide it
    }
});
