/* ===================================================================
   JJ Ruby — Portfolio · main.js
   Minimal JS: mobile nav toggle + active nav highlighting
   =================================================================== */

(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active nav section on scroll
  var sections = document.querySelectorAll('section[id]');
  var links    = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && links.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (navLink) { navLink.removeAttribute('aria-current'); });
          var active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
          if (active) { active.setAttribute('aria-current', 'true'); }
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }
}());
