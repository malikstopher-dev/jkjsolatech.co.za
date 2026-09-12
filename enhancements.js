// JKJ Solartech and Security - Enhancement Scripts

// ========================================
// ACTIVE NAV LINK
// ========================================
(function() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mega-column a').forEach(function(link) {
        var href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            var parentLi = link.closest('.nav-dropdown');
            if (parentLi) {
                var parentLink = parentLi.querySelector(':scope > a');
                if (parentLink) parentLink.classList.add('active');
            }
        }
    });
})();

// ========================================
// STAGGERED REVEAL
// ========================================
function applyStaggeredReveal() {
    var groups = document.querySelectorAll('.services-grid, .features-grid, .trust-badges, .areas-grid, .values-grid, .process-steps');
    groups.forEach(function(group) {
        var children = group.querySelectorAll('.reveal');
        children.forEach(function(child, i) {
            child.style.transitionDelay = (i * 0.1) + 's';
        });
    });
}
applyStaggeredReveal();

// ========================================
// MOBILE MENU ARIA SYNC
// ========================================
document.querySelectorAll('.mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        var mobileMenu = document.getElementById('mobileMenu');
        var mobileOverlay = document.getElementById('mobileOverlay');
        var menuToggle = document.getElementById('menuToggle');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
        if (mobileOverlay) mobileOverlay.classList.remove('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
