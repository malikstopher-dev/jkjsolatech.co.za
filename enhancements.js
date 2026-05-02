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





