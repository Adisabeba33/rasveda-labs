/* Rasveda Labs — main.js
   Small progressive enhancements: mobile nav, scroll reveal,
   sticky-header state and current year. No dependencies. */

(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });

    // Close when a link is tapped
    menu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeMenu)
    );

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---- Sticky header shadow on scroll ---- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () =>
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll reveal ---- */
  const revealItems = document.querySelectorAll(".reveal");
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealItems.forEach((el) => observer.observe(el));
  }

  /* ---- Current year in footer ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
