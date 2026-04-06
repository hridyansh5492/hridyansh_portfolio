const texts = ["HACKSMITH","Tech Innovator", "Hardware Whisperer", "Software Tinkerer"];
const typewriter = document.getElementById("term");
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentText = texts[index];
    
    if (isDeleting) {
        // Delete characters
        charIndex--;
        typewriter.textContent = currentText.substring(0, charIndex);
    } else {
        // Type characters
        charIndex++;
        typewriter.textContent = currentText.substring(0, charIndex);
    }

    // Timing control
    let delay = isDeleting ? 50 : 100;

    // Pause at end
    if (!isDeleting && charIndex === currentText.length) {
        delay = 1000; // pause before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        delay = 500; // pause before typing next
    }

    setTimeout(typeLoop, delay);
}

typeLoop();

window.onload = function() {
    var links = document.querySelectorAll('div li a');
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
};
