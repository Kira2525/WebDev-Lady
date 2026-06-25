/* =========================================================
   Rain Blossom Lite - Main JavaScript

   CUSTOMER NOTES:
   - This file controls:
     mobile menu
     sticky header
     active section links
     reveal animations
     FAQ accordion
     smooth scrolling
     automatic footer year
     hero video pause/play
   - You usually do NOT need to edit this file unless you
     change class names or section IDs in the HTML.
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

function updateHeaderOnScroll() {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 40);
}

updateHeaderOnScroll();
window.addEventListener("scroll", updateHeaderOnScroll);

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

function openMobileMenu() {
  if (!navToggle || !mobileMenu) return;

  navToggle.setAttribute("aria-expanded", "true");
  navToggle.classList.add("is-active");
  mobileMenu.classList.add("is-open");
  document.body.classList.add("menu-open");
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMobileMenu();
    }
  });
}

/* =========================================================
   05. Active Navigation Links For One-Page Sections
========================================================= */

const navLinks = document.querySelectorAll(
  ".desktop-nav a[href^='#'], .mobile-menu a[href^='#']"
);

const sections = document.querySelectorAll("main section[id]");

function updateActiveNavigation() {
  let currentSection = "home";
  const headerOffset = siteHeader ? siteHeader.offsetHeight + 120 : 180;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerOffset;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("is-active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("is-active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);
window.addEventListener("resize", updateActiveNavigation);

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

document.querySelectorAll('a[href^="#"], a[href*="index.html#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");

    if (!href || !href.includes("#")) return;

    const hash = href.substring(href.indexOf("#"));

    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);

    if (!target) return;

    const linkPage = href.split("#")[0];
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    if (linkPage && linkPage !== currentPage && linkPage !== "index.html") {
      return;
    }

    event.preventDefault();

    const headerHeight = siteHeader ? siteHeader.offsetHeight + 28 : 96;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    history.pushState(null, "", hash);
    closeMobileMenu();
  });
});