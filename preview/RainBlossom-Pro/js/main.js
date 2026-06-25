/* =========================================================
   Rain Blossom - Main JavaScript

   CUSTOMER NOTES:
   - This file controls the mobile menu, sticky header effect,
     active navigation links, reveal animations, FAQ behavior,
     smooth scrolling, and the automatic footer year.
   - You usually do NOT need to edit this file unless you are
     changing class names in the HTML.
========================================================= */

/* =========================================================
   01. Select Page Elements
========================================================= */

const siteHeader = document.querySelector("#siteHeader");
const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileLinks = document.querySelectorAll("#mobileMenu a");
const year = document.querySelector("#year");
const heroVideo = document.querySelector(".hero-video");

/* =========================================================
   02. Automatic Footer Year
========================================================= */

if (year) {
  year.textContent = new Date().getFullYear();
}

/* =========================================================
   03. Sticky Header Scroll Effect
========================================================= */

if (siteHeader) {
  window.addEventListener("scroll", () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 40);
  });
}

/* =========================================================
   04. Mobile Menu
========================================================= */

function closeMobileMenu() {
  if (!navToggle || !mobileMenu) return;

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.classList.remove("is-active");
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.classList.toggle("is-active", !isOpen);
    mobileMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}

/* =========================================================
   05. Active Navigation Links
========================================================= */

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const allNavLinks = document.querySelectorAll(
  ".desktop-nav a, .mobile-menu a, .footer-links a"
);

allNavLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (!linkPage) return;

  const cleanLink = linkPage.split("#")[0];

  if (cleanLink === currentPage) {
    link.classList.add("is-active");
  }
});

/* =========================================================
   06. Reveal Animation
========================================================= */

const revealItems = document.querySelectorAll(
  ".section-copy, .section-heading, .feature-card, .price-card, .testimonial-card, .gallery-grid img, .contact-card, .experience-banner, .cta-card"
);

if ("IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* =========================================================
   07. Pause Hero Video When Browser Tab Is Hidden
========================================================= */

if (heroVideo) {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      heroVideo.pause();
    } else {
      heroVideo.play().catch(() => {});
    }
  });
}

/* =========================================================
   08. FAQ Accordion
========================================================= */

const faqItems = document.querySelectorAll(".faq-list details");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.removeAttribute("open");
      }
    });
  });
});

/* =========================================================
   09. Smooth Scroll Offset For Fixed Header
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    const headerHeight = siteHeader ? siteHeader.offsetHeight + 32 : 100;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});