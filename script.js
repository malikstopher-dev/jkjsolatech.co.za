/* =============================================
   JKJ SOLARTECH & SECURITY — Premium Script
   ============================================= */

// ── Utility: Reduced Motion Check ─────────────
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// ── 1. Navbar Scroll Effect ───────────────────
function initNavbarScroll() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;

  var lastScroll = 0;

  window.addEventListener('scroll', function () {
    var currentScroll = window.scrollY;

    if (currentScroll > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (!prefersReducedMotion()) {
      if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      navbar.style.transition = 'transform 0.3s ease, background 0.3s ease, padding 0.3s ease';
    }

    lastScroll = currentScroll;
  });
}

// ── 2. Parallax Scrolling ─────────────────────
function initParallax() {
  if (prefersReducedMotion()) return;

  var parallaxElements = document.querySelectorAll('[data-parallax]');
  if (!parallaxElements.length) return;

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    parallaxElements.forEach(function (el) {
      var speed = parseFloat(el.dataset.parallax) || 0.3;
      var rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        el.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
      }
    });
  });
}

// ── 3. Image Reveal on Scroll ─────────────────
function initImageReveal() {
  var images = document.querySelectorAll('.img-reveal');

  if (prefersReducedMotion()) {
    images.forEach(function (img) { img.classList.add('active'); });
    return;
  }

  if (!images.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '50px' });

  images.forEach(function (img) { observer.observe(img); });

  setTimeout(function () {
    images.forEach(function (img) {
      if (!img.classList.contains('active')) {
        img.classList.add('active');
      }
    });
  }, 2000);
}

// ── 4. Section Title Animation ────────────────
function initTitleAnimation() {
  if (prefersReducedMotion()) return;

  var titles = document.querySelectorAll('.section-title');
  if (!titles.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  titles.forEach(function (title) {
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    title.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(title);
  });

  setTimeout(function () {
    titles.forEach(function (title) {
      if (title.style.opacity === '0') {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }
    });
  }, 3000);
}

// ── 5. Hover Depth Effect (3D Tilt) ──────────
function initHoverDepth() {
  if (prefersReducedMotion() || isTouchDevice()) return;

  var cards = document.querySelectorAll('.service-card, .feature-item, .value-card');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = (y - centerY) / 20;
      var rotateY = (centerX - x) / 20;
      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      card.style.transition = 'transform 0.4s ease';
    });
    card.addEventListener('mouseenter', function () {
      card.style.transition = 'transform 0.1s ease';
    });
  });
}

// ── 6. Magnetic CTA Buttons ──────────────────
function initMagneticButtons() {
  if (prefersReducedMotion() || isTouchDevice()) return;

  var buttons = document.querySelectorAll('.btn-primary, .btn-whatsapp');
  buttons.forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.3s ease';
    });
    btn.addEventListener('mouseenter', function () {
      btn.style.transition = 'transform 0.1s ease';
    });
  });
}

// ── 7. Service Card Image Motion ─────────────
function initCardImageMotion() {
  if (prefersReducedMotion() || isTouchDevice()) return;

  var cards = document.querySelectorAll('.service-card');
  cards.forEach(function (card) {
    var img = card.querySelector('img');
    if (!img) return;

    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = 'scale(1.05) translate(' + (x * 10) + 'px, ' + (y * 10) + 'px)';
    });
    card.addEventListener('mouseleave', function () {
      img.style.transform = 'scale(1) translate(0, 0)';
      img.style.transition = 'transform 0.5s ease';
    });
    card.addEventListener('mouseenter', function () {
      img.style.transition = 'transform 0.1s ease';
    });
  });
}

// ── 8. Smooth Scroll for Anchor Links ─────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── 9. Gold Line Animation on Scroll ─────────
function initGoldLines() {
  if (prefersReducedMotion()) return;

  var lines = document.querySelectorAll('.gold-line');
  if (!lines.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'goldTrace 1.5s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  lines.forEach(function (line) { observer.observe(line); });
}

// ── 10. Page Transition Effect ────────────────
function initPageTransition() {
  if (prefersReducedMotion()) return;

  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  if (document.readyState === 'complete') {
    document.body.style.opacity = '1';
  } else {
    window.addEventListener('load', function () {
      document.body.style.opacity = '1';
    });
  }
  setTimeout(function () {
    document.body.style.opacity = '1';
  }, 2000);
}

// ── 11. Counter Animation ─────────────────────
function initCounters() {
  if (prefersReducedMotion()) return;

  var counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var target = parseInt(entry.target.dataset.count, 10);
        var duration = 2000;
        var startTime = performance.now();

        function update(currentTime) {
          var elapsed = currentTime - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.floor(target * eased);
          entry.target.textContent = current;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (counter) { observer.observe(counter); });
}

// ── 12. Mobile Menu Toggle ────────────────────
function initMobileMenu() {
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuOverlay = document.getElementById('mobileOverlay');
  var closeMenu = document.getElementById('mobileClose');
  var mobileLinks = document.querySelectorAll('#mobileMenu a');

  if (!menuToggle || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    mobileMenu.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', function () {
    if (mobileMenu.classList.contains('active')) {
      close();
    } else {
      openMenu();
    }
  });

  if (closeMenu) closeMenu.addEventListener('click', close);
  if (menuOverlay) menuOverlay.addEventListener('click', close);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      close();
    }
    if (e.key === 'Escape') {
      var dropdown = document.querySelector('.nav-dropdown');
      if (dropdown) {
        var trigger = dropdown.querySelector('a');
        dropdown.classList.remove('open');
        if (trigger) trigger.focus();
      }
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
      close();
    }
  });
}

// ── 13. Scroll Reveal Animation ──────────────
function initScrollReveal() {
  if (prefersReducedMotion()) return;

  var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '50px' });

  reveals.forEach(function (el) { observer.observe(el); });

  setTimeout(function () {
    reveals.forEach(function (el) {
      if (!el.classList.contains('active')) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('active');
        }
      }
    });
  }, 2000);
}

// ── 14. FAQ Accordion ────────────────────────
function initFAQ() {
  var faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      faqItems.forEach(function (other) {
        other.classList.remove('open');
        var answer = other.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        var answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ── 15. Form Submission Handler ──────────────
function initFormHandler() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = new FormData(form);
    var name = formData.get('name') || '';
    var email = formData.get('email') || '';
    var phone = formData.get('phone') || '';
    var message = formData.get('message') || '';

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }

    setTimeout(function () {
      alert('Thank you, ' + name + '! Your message has been sent. We will get back to you shortly.');
      form.reset();
      if (submitBtn) {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }
    }, 1500);
  });
}

// ── Hero Slider ─────────────────────────────
function initHeroSlider() {
  var bg = document.getElementById('heroBg');
  if (!bg) return;

  var slides = bg.querySelectorAll('.hero-slide');
  var spark = document.getElementById('heroSpark');
  var dots = document.querySelectorAll('.hero-dot');
  var prevBtn = document.querySelector('.hero-prev');
  var nextBtn = document.querySelector('.hero-next');
  var totalSlides = slides.length;
  var current = 0;
  var interval = null;
  var INTERVAL_MS = 6000;
  var paused = false;
  var transitioning = false;

  if (totalSlides < 2) return;

  // Build spark child elements once
  if (spark) {
    var streak = document.createElement('div');
    streak.className = 'spark-streak';
    spark.appendChild(streak);
    var streakV = document.createElement('div');
    streakV.className = 'spark-streak-v';
    spark.appendChild(streakV);
    var ring = document.createElement('div');
    ring.className = 'spark-ring';
    spark.appendChild(ring);
  }

  function clearSpark() {
    if (!spark) return;
    spark.classList.remove('phase1', 'phase2', 'phase3');
    bg.classList.remove('spark-shake');
  }

  function goTo(index) {
    if (index === current || transitioning) return;
    transitioning = true;

    var nextIdx = (index + totalSlides) % totalSlides;

    if (spark && !prefersReducedMotion()) {
      clearSpark();

      // Phase 1: Dark curtain rises
      void spark.offsetWidth;
      spark.classList.add('phase1');

      setTimeout(function () {
        // Swap slides while fully dark
        slides[current].classList.remove('active');
        if (dots[current]) {
          dots[current].classList.remove('active');
          dots[current].setAttribute('aria-selected', 'false');
        }
        current = nextIdx;
        slides[current].classList.add('active');
        if (dots[current]) {
          dots[current].classList.add('active');
          dots[current].setAttribute('aria-selected', 'true');
        }
      }, 800);

      setTimeout(function () {
        // Phase 2: Spark burst + streaks + ring + shake
        bg.classList.add('spark-shake');
        spark.classList.remove('phase1');
        void spark.offsetWidth;
        spark.classList.add('phase2');
      }, 900);

      setTimeout(function () {
        // Phase 3: Curtain falls, reveal new slide
        spark.classList.remove('phase2');
        void spark.offsetWidth;
        spark.classList.add('phase3');
      }, 1800);

      setTimeout(function () {
        clearSpark();
        transitioning = false;
      }, 3200);

    } else {
      // Reduced motion
      slides[current].classList.remove('active');
      if (dots[current]) {
        dots[current].classList.remove('active');
        dots[current].setAttribute('aria-selected', 'false');
      }
      current = nextIdx;
      slides[current].classList.add('active');
      if (dots[current]) {
        dots[current].classList.add('active');
        dots[current].setAttribute('aria-selected', 'true');
      }
      transitioning = false;
    }
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    if (!paused && !prefersReducedMotion()) {
      interval = setInterval(next, INTERVAL_MS);
    }
  }

  function stopAuto() {
    if (interval) { clearInterval(interval); interval = null; }
  }

  // Arrow controls
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      prev();
      startAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      next();
      startAuto();
    });
  }

  // Dot controls
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var idx = parseInt(this.getAttribute('data-slide'), 10);
      goTo(idx);
      startAuto();
    });
  });

  // Pause when tab not visible
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      paused = true;
      stopAuto();
    } else {
      paused = false;
      startAuto();
    }
  });

  // Pause on hover
  bg.addEventListener('mouseenter', stopAuto);
  bg.addEventListener('mouseleave', startAuto);

  // Touch swipe support
  var touchStartX = 0;
  var touchEndX = 0;
  bg.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
    stopAuto();
  }, { passive: true });

  bg.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    startAuto();
  }, { passive: true });

  // Start
  startAuto();
}

// ── Initialize Everything ─────────────────────
document.addEventListener('DOMContentLoaded', function () {
  initPageTransition();
  initNavbarScroll();
  initMobileMenu();
  initScrollReveal();
  initParallax();
  initImageReveal();
  initTitleAnimation();
  initHoverDepth();
  initMagneticButtons();
  initCardImageMotion();
  initSmoothScroll();
  initGoldLines();
  initCounters();
  initFAQ();
  initFormHandler();
  initHeroSlider();
});
