// JK Electrical - Enhancement Scripts

// ========================================
// ACTIVE NAV LINK
// ========================================
(function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .dropdown-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            // If in dropdown, also mark parent
            const parentLi = link.closest('.nav-dropdown');
            if (parentLi) {
                const parentLink = parentLi.querySelector(':scope > a');
                if (parentLink) parentLink.classList.add('active');
            }
        }
    });
})();

// ========================================
// SMOOTH COUNTER ANIMATION (already in script.js)
// This enhances with easing
// ========================================

// ========================================
// STAGGERED REVEAL
// ========================================
function applyStaggeredReveal() {
    const groups = document.querySelectorAll('.services-grid, .features-grid, .trust-badges, .areas-grid, .testimonials-grid');
    groups.forEach(group => {
        const children = group.querySelectorAll('.reveal');
        children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.1}s`;
        });
    });
}
applyStaggeredReveal();

// ========================================
// FORM ENHANCEMENT - WhatsApp fallback
// ========================================
const forms = document.querySelectorAll('#contactForm');
forms.forEach(form => {
    // If no action attribute (local dev), intercept and use WhatsApp
    form.addEventListener('submit', function(e) {
        // Only intercept if no formsubmit action set
        if (!this.action || this.action.includes('localhost') || this.action === window.location.href) {
            e.preventDefault();
            const name = this.querySelector('[name="name"]')?.value || '';
            const phone = this.querySelector('[name="phone"]')?.value || '';
            const service = this.querySelector('[name="service"]')?.value || '';
            const message = this.querySelector('[name="message"]')?.value || '';
            
            const waMsg = encodeURIComponent(
                `Hi JKJ Solartech! I'd like a quote.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
            );
            
            window.open(`https://wa.me/27840178527?text=${waMsg}`, '_blank');
        }
    });
});



