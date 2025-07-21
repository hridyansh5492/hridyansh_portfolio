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
