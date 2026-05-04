// --- DOM Elements ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');
const contactForm = document.getElementById('contact-form');

// --- Dark Mode Logic ---
// Check if user has a saved preference in localStorage
const savedTheme = localStorage.getItem('portfolio_theme');

// Apply saved theme on load
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    // Default to light mode (already set in CSS), but ensure icon is correct
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Toggle Theme Event Listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Check current mode and update icon & storage
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('portfolio_theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('portfolio_theme', 'light');
    }
});

// --- Mobile Navigation Logic ---
// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle hamburger icon between bars and close (X)
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a navigation link is clicked
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            
            // Reset hamburger icon
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// --- Contact Form Submission ---
// Handle form submission to prevent page reload and show an alert
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        // Get input values (for demonstration purposes)
        const name = document.getElementById('name').value;
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been sent successfully. (This is a demo)`);
        
        // Clear the form fields
        contactForm.reset();
    });
}
