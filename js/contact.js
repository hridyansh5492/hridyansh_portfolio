const form = document.getElementById("contform");
const overlay = document.getElementById("overlay");
const overlayMsg = document.getElementById("overlay-message");

form.addEventListener("submit", function (e) {
e.preventDefault(); // Prevent default form submission

const formData = new FormData(form);

fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
    'Accept': 'application/json'
    }
}).then(response => {
    if (response.ok) {
    showOverlay("✅ Message Sent Successfully!");
    form.reset(); // Clear form
    } else {
    showOverlay("❌ Failed to Send Message.");
    }
}).catch(() => {
    showOverlay("❌ Failed to Send Message.");
});
});

function showOverlay(message) {
overlayMsg.textContent = message;
overlay.style.display = "flex";

setTimeout(() => {
    overlay.style.display = "none";
}, 3000); // Hide after 3 seconds
}