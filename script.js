// JKJ Solartech and Security - JavaScript

// ========================================
// MOBILE MENU
// ========================================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

function openMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.add('active');
        mobileMenu.setAttribute('aria-hidden', 'false');
    }
    if (mobileOverlay) mobileOverlay.classList.add('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
}

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
}

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        const isOpen = mobileMenu && mobileMenu.classList.contains('active');
        if (isOpen) { closeMobileMenu(); } else { openMobileMenu(); }
    });
}

if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMobileMenu();
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) closeMobileMenu();
});

// ========================================
// SERVICES DROPDOWN TOGGLE (Mobile)
// ========================================
function initServicesDropdown() {
    var mobileDropdowns = document.querySelectorAll('.mobile-menu .nav-dropdown > a');
    mobileDropdowns.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                var dropdown = this.closest('.nav-dropdown');
                if (dropdown) dropdown.classList.toggle('open');
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServicesDropdown);
} else {
    initServicesDropdown();
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

function checkReveal() {
    var triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(function(element) {
        if (element.getBoundingClientRect().top < triggerBottom) {
            element.classList.add('active');
        }
    });
}

checkReveal();
window.addEventListener('scroll', checkReveal);

// ========================================
// FAQ ACCORDION
// ========================================
document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var item = this.closest('.faq-item');
        var isOpen = item && item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
            openItem.classList.remove('open');
            openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen && item) {
            item.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
        }
    });
});

// ========================================
// FORM SUBMISSION (contact.html only)
// ========================================
var contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        var action = this.getAttribute('action');
        if (action && action.includes('formsubmit.co')) {
            return;
        }
        e.preventDefault();
        var form = this;
        var submitBtn = form.querySelector('button[type="submit"]');
        var originalText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: form.querySelector('[name="name"]').value,
                phone: form.querySelector('[name="phone"]').value,
                email: form.querySelector('[name="email"]').value,
                area: form.querySelector('[name="area"]') ? form.querySelector('[name="area"]').value : '',
                service: form.querySelector('[name="service"]').value,
                message: form.querySelector('[name="message"]').value
            })
        })
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (data.success) {
                window.location.href = 'thank-you.html';
            } else {
                alert(data.message || 'Something went wrong. Please try again.');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }
            }
        })
        .catch(function() {
            alert('Network error. Please try again.');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    });
}
