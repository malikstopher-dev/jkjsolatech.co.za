// JKJ Solartech and Security - JavaScript

// ========================================
// BULB FLASH ANIMATION
// ========================================
function triggerBulbFlash() {
    const flash = document.getElementById('bulbFlash');
    const flashBulb = document.getElementById('flashBulb');
    
    if (!flash || !flashBulb) return;
    
    flash.classList.remove('active');
    flashBulb.classList.remove('active');
    
    void flash.offsetWidth;
    
    flash.classList.add('active');
    flashBulb.classList.add('active');
    
    setTimeout(() => {
        flash.classList.remove('active');
        flashBulb.classList.remove('active');
    }, 750);
}

// ========================================
// MOBILE MENU
// ========================================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

function openMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        openMobileMenu();
    });
}

if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => closeMobileMenu());
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMobileMenu();
});

// ========================================
// SERVICES DROPDOWN TOGGLE (Mobile)
// ========================================
function initServicesDropdown() {
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-dropdown > a');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                const dropdown = this.closest('.nav-dropdown');
                dropdown.classList.toggle('open');
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            const openDropdowns = document.querySelectorAll('.mobile-menu .nav-dropdown.open');
            openDropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('open');
                }
            });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServicesDropdown);
} else {
    initServicesDropdown();
}

// ========================================
// PAGE NAVIGATION - BULB FLASH
// ========================================
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (this.closest('form')) return;
        if (href && !href.startsWith('http') && !href.startsWith('//')) {
            e.preventDefault();
            triggerBulbFlash();
            setTimeout(() => { window.location.href = href; }, 400);
        }
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            triggerBulbFlash();
            setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 400);
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(element => {
        if (element.getBoundingClientRect().top < triggerBottom) {
            element.classList.add('active');
        }
    });
}

checkReveal();
window.addEventListener('scroll', checkReveal);

// ========================================
// COUNTER ANIMATION
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounters() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        if (!target) return;
        
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current) + (target >= 100 ? '%' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + (target >= 100 ? '%' : '+');
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(stat);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(stat);
    });
}

animateCounters();

// ========================================
// FORM SUBMISSION
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const action = this.getAttribute('action');
        if (action && action.includes('formsubmit.co')) {
            triggerBulbFlash();
            return;
        }
        e.preventDefault();
        triggerBulbFlash();
        setTimeout(() => {
            alert('Thank you for your quote request! We will contact you within 24 hours.');
            this.reset();
        }, 400);
    });
}

// ========================================
// INITIAL PAGE LOAD FLASH
// ========================================
window.addEventListener('load', () => {
    setTimeout(triggerBulbFlash, 300);
});
