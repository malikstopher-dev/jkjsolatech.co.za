// JK Electricity - JavaScript

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
// CLICK RIPPLE EFFECT
// ========================================
document.addEventListener('click', function(e) {
    // Only create ripple for left clicks on interactive elements
    if (e.button !== 0) return;
    if (e.target.closest('button') || e.target.closest('a') === null) return;
    
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    
    for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'ripple-ring';
        ring.style.animationDelay = (i * 0.1) + 's';
        ripple.appendChild(ring);
    }
    
    for (let i = 0; i < 8; i++) {
        const spike = document.createElement('div');
        spike.className = 'ripple-spike';
        const angle = (i / 8) * 360;
        const distance = 20 + Math.random() * 30;
        spike.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${distance}px)`;
        spike.style.animationDelay = (Math.random() * 0.2) + 's';
        ripple.appendChild(spike);
    }
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 500);
});

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
            
            setTimeout(() => {
                window.location.href = href;
            }, 400);
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
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 400);
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========================================
// MOBILE MENU
// ========================================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuToggle) {
    menuToggle.addEventListener('click', openMobileMenu);
}

if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        closeMobileMenu();
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
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
                stat.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
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
window.addEventListener('load', function() {
    setTimeout(() => {
        triggerBulbFlash();
    }, 300);
});