/* ============================================
   DARK MODE / LIGHT MODE TOGGLE
   ============================================ */

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Function to update theme icon
function updateThemeIcon() {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('.theme-icon');
    const text = themeToggle.querySelector('.theme-text');
    if (body.classList.contains('dark-mode')) {
        if (icon) icon.textContent = '☀️';
        if (text) text.textContent = 'Light Mode';
        themeToggle.title = 'Toggle Light Mode';
    } else {
        if (icon) icon.textContent = '🌙';
        if (text) text.textContent = 'Dark Mode';
        themeToggle.title = 'Toggle Dark Mode';
    }
}

// Set initial theme state UI
updateThemeIcon();

// Toggle theme on button click
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Update icon
        updateThemeIcon();
    });
}

/* ============================================
   NAVIGATION ACTIVE STATE
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 12px var(--shadow)';
    } else {
        navbar.style.boxShadow = '0 2px 8px var(--shadow)';
    }
    
    lastScrollTop = scrollTop;
});

/* ============================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and blocks
document.querySelectorAll('.project-card, .point-card, .outcome-item, .highlight-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Function to set active nav link
function setActiveNavLink(href) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="${href}"]`)?.classList.add('active');
}

// Function to handle smooth page transitions
function handlePageTransition() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
}

// Initialize on page load
window.addEventListener('load', () => {
    handlePageTransition();
});

/* ============================================
   KEYBOARD NAVIGATION
   ============================================ */

document.addEventListener('keydown', (e) => {
    // Alt + D: Toggle Dark Mode
    if (e.altKey && e.key === 'd') {
        themeToggle.click();
    }
});

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================ */

// High contrast mode support
if (window.matchMedia('(prefers-contrast: more)').matches) {
    document.body.style.fontSize = '18px';
}

// Reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

console.log('Portfolio loaded successfully! 🚀');
