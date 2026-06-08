/* =========================================================
   ABYSSAL BLUE - MAIN JAVASCRIPT
   Keep this file framework-free so the template works
   directly in the browser with no build step.
========================================================= */

/* =========================================================
   QUICK CUSTOMIZATION GUIDE

   Mobile menu:
   - Mobile Navigation section

   Hero slider:
   - Hero Slider section

   Animated bubbles:
   - Animated Bubbles section

   Animated fish:
   - Animated Fish section

   Ocean particles:
   - Ocean Canvas Particle Background section

   Gallery filtering:
   - Gallery Filters section

   Gallery lightbox:
   - Gallery Lightbox section

   Booking package buttons:
   - Booking Package Selection section

   Forms:
   - Form Handling section

   Thank-you page messages:
   - Thank You Page Copy section
========================================================= */

/* =========================================================
   TABLE OF CONTENTS

   1. Customizable Settings
   2. DOM Element References
   3. Helper Functions
   4. Mobile Navigation
   5. Active Navigation Link
   6. Animated Bubbles
   7. Animated Fish
   8. Hero Slider
   9. Ocean Canvas Particle Background
   10. Booking Package Selection
   11. Gallery Filters
   12. Gallery Lightbox
   13. Form Handling
   14. Thank You Page Copy
   15. Accessibility + Keyboard Controls
   16. Performance Helpers
========================================================= */

/* =========================================================
   1. Customizable Settings
   Adjust these values to change animation timing.
========================================================= */

const BUBBLE_INTERVAL = 380; // Lower number = more bubbles.
const FISH_INTERVAL = 2800; // Lower number = more frequent fish.
const HERO_SLIDE_INTERVAL = 4000; // Time between hero slides.
const PACKAGE_HIGHLIGHT_DURATION = 1200; // How long the selected package glow lasts.

/* =========================================================
   2. DOM Element References
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const bubbleLayer = document.getElementById("bubbleLayer");
const fishLayer = document.getElementById("fishLayer");
const slides = Array.from(document.querySelectorAll(".hero-slider .slide"));
const oceanCanvas = document.getElementById("oceanCanvas");
const galleryFilters = Array.from(
  document.querySelectorAll(".gallery-filter-bar [data-filter]")
);
const galleryCards = Array.from(
  document.querySelectorAll(".gallery-card[data-category]")
);
const galleryOpenButtons = Array.from(document.querySelectorAll(".gallery-open"));
const galleryLightbox = document.getElementById("galleryLightbox");
const galleryLightboxDialog = galleryLightbox?.querySelector(
  ".gallery-lightbox-dialog"
);
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxClose = document.getElementById("lightboxClose");
const packageButtons = Array.from(document.querySelectorAll(".package-select"));
const packageSelect = document.querySelector('select[name="package"]');
const reserveSection =
  document.getElementById("reserve") || document.getElementById("dive-packages");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* =========================================================
   3. Helper Functions
========================================================= */

let lastFocusedGalleryButton = null;
let bubbleIntervalId = null;
let fishIntervalId = null;
let heroSliderIntervalId = null;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function prefersMotionReduction() {
  return prefersReducedMotion.matches;
}

function syncBodyScrollLock() {
  const menuIsOpen = navMenu?.classList.contains("active") ?? false;
  const lightboxIsOpen = galleryLightbox?.classList.contains("active") ?? false;

  document.body.classList.toggle("menu-open", menuIsOpen);
  document.body.classList.toggle("lightbox-open", lightboxIsOpen);
}

function updateMenuButtonLabel(isOpen) {
  if (!menuToggle) return;

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
}

function setMenuState(isOpen) {
  if (!menuToggle || !navMenu) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navMenu.classList.toggle("active", isOpen);
  updateMenuButtonLabel(isOpen);
  syncBodyScrollLock();
}

function closeLightbox() {
  if (!galleryLightbox) return;

  galleryLightbox.classList.remove("active");
  galleryLightbox.setAttribute("aria-hidden", "true");
  syncBodyScrollLock();

  if (lastFocusedGalleryButton instanceof HTMLElement) {
    lastFocusedGalleryButton.focus();
  }
}

function buildThankYouUrl(action, formType) {
  const redirectUrl = new URL(action, window.location.href);
  redirectUrl.searchParams.set("form", formType);
  return redirectUrl.toString();
}

function storeLastFormType(formType) {
  try {
    window.sessionStorage.setItem("abyssalBlueLastFormType", formType);
  } catch (error) {
    /* Ignore storage failures in locked-down browsing modes. */
  }
}

function getLastFormType() {
  try {
    return window.sessionStorage.getItem("abyssalBlueLastFormType");
  } catch (error) {
    return null;
  }
}

function highlightSelectedPackage() {
  if (!packageSelect) return;

  packageSelect.classList.add("selected-glow");

  window.setTimeout(() => {
    packageSelect.classList.remove("selected-glow");
  }, PACKAGE_HIGHLIGHT_DURATION);
}

function applySelectedPackage(selectedPackage, shouldScroll = false) {
  if (!packageSelect || !selectedPackage) return;

  const matchingOption = Array.from(packageSelect.options).find(
    (option) => option.value === selectedPackage
  );

  if (!matchingOption) return;

  packageSelect.value = selectedPackage;
  highlightSelectedPackage();

  if (shouldScroll && reserveSection) {
    reserveSection.scrollIntoView({
      behavior: prefersMotionReduction() ? "auto" : "smooth",
      block: "start"
    });
  }
}

/* =========================================================
   4. Mobile Navigation
========================================================= */

if (menuToggle && navMenu) {
  setMenuState(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.classList.contains("active")) return;
    if (navMenu.contains(event.target) || menuToggle.contains(event.target)) return;
    setMenuState(false);
  });
}

/* =========================================================
   5. Active Navigation Link
========================================================= */

function normalizeNavPageName(pathOrHref) {
  if (!pathOrHref) return "";

  const { pathname } = new URL(pathOrHref, window.location.href);
  const trimmedPath = pathname.replace(/\/+$/, "");
  const segments = trimmedPath.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "";

  if (!lastSegment) return "index.html";
  if (!/\.[a-z0-9]+$/i.test(lastSegment)) return "";

  return lastSegment.toLowerCase();
}

function getCurrentNavPage() {
  const pageOverride = document.body?.dataset.navPage?.trim()?.toLowerCase() || "";

  if (pageOverride === "none") return "";
  if (pageOverride) return pageOverride;

  const detectedPage = normalizeNavPageName(window.location.pathname);
  return detectedPage || "index.html";
}

const currentPage = getCurrentNavPage();

document.querySelectorAll(".nav-menu a").forEach((link) => {
  const href = link.getAttribute("href") || "";
  const linkPage = normalizeNavPageName(href);
  const isActive = Boolean(currentPage) && linkPage === currentPage;

  link.classList.toggle("active", isActive);

  if (isActive) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

/* =========================================================
   6. Animated Bubbles
========================================================= */

function createBubble() {
  if (!bubbleLayer || document.hidden || prefersMotionReduction()) return;

  const bubble = document.createElement("span");
  const size = randomBetween(10, 46);
  const left = randomBetween(0, 100);
  const duration = randomBetween(9, 20);
  const opacity = randomBetween(0.25, 0.85);

  bubble.className = "bubble";
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}%`;
  bubble.style.opacity = opacity;
  bubble.style.animationDuration = `${duration}s`;

  bubbleLayer.appendChild(bubble);

  window.setTimeout(() => {
    bubble.remove();
  }, duration * 1000);
}

function startBubbleAnimation() {
  if (!bubbleLayer || prefersMotionReduction() || bubbleIntervalId !== null) return;

  bubbleIntervalId = window.setInterval(createBubble, BUBBLE_INTERVAL);
}

function stopBubbleAnimation() {
  if (bubbleIntervalId === null) return;

  window.clearInterval(bubbleIntervalId);
  bubbleIntervalId = null;
}

/* =========================================================
   7. Animated Fish
========================================================= */

function createFish() {
  if (!fishLayer || document.hidden || prefersMotionReduction()) return;

  const fish = document.createElement("span");
  const top = randomBetween(12, 88);
  const duration = randomBetween(18, 42);
  const size = randomBetween(32, 84);
  const opacity = randomBetween(0.28, 0.78);
  const drift = randomBetween(-45, 45);

  fish.className = "realistic-fish";
  fish.style.top = `${top}%`;
  fish.style.width = `${size}px`;
  fish.style.height = `${size / 2}px`;
  fish.style.opacity = opacity;
  fish.style.animationDuration = `${duration}s`;
  fish.style.setProperty("--fish-drift", `${drift}px`);

  fishLayer.appendChild(fish);

  window.setTimeout(() => {
    fish.remove();
  }, duration * 1000);
}

function startFishAnimation() {
  if (!fishLayer || prefersMotionReduction() || fishIntervalId !== null) return;

  fishIntervalId = window.setInterval(createFish, FISH_INTERVAL);
}

function stopFishAnimation() {
  if (fishIntervalId === null) return;

  window.clearInterval(fishIntervalId);
  fishIntervalId = null;
}

/* =========================================================
   8. Hero Slider
========================================================= */

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });
}

function startHeroSlider() {
  if (slides.length <= 1 || prefersMotionReduction() || heroSliderIntervalId !== null) {
    return;
  }

  heroSliderIntervalId = window.setInterval(() => {
    if (document.hidden) return;

    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, HERO_SLIDE_INTERVAL);
}

function stopHeroSlider() {
  if (heroSliderIntervalId === null) return;

  window.clearInterval(heroSliderIntervalId);
  heroSliderIntervalId = null;
}

if (slides.length > 0) {
  showSlide(0);
  startHeroSlider();
}

/* =========================================================
   9. Ocean Canvas Particle Background
========================================================= */

if (oceanCanvas) {
  const context = oceanCanvas.getContext("2d");
  let particles = [];
  let animationFrameId = null;

  function createParticles() {
    particles = [];

    const particleLimit = prefersMotionReduction() ? 45 : 140;
    const particleCount = Math.min(
      particleLimit,
      Math.floor((window.innerWidth * window.innerHeight) / 11000)
    );

    for (let index = 0; index < particleCount; index += 1) {
      particles.push({
        x: randomBetween(0, oceanCanvas.width),
        y: randomBetween(0, oceanCanvas.height),
        size: randomBetween(0.8, 2.4),
        speedX: randomBetween(-0.18, 0.18),
        speedY: randomBetween(-0.35, -0.08),
        opacity: randomBetween(0.12, 0.45)
      });
    }
  }

  function drawParticles(drawOnce = false) {
    context.clearRect(0, 0, oceanCanvas.width, oceanCanvas.height);

    particles.forEach((particle) => {
      if (!drawOnce) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.y < -10) {
          particle.y = oceanCanvas.height + 10;
          particle.x = randomBetween(0, oceanCanvas.width);
        }

        if (particle.x < -10) {
          particle.x = oceanCanvas.width + 10;
        }

        if (particle.x > oceanCanvas.width + 10) {
          particle.x = -10;
        }
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(180, 245, 255, ${particle.opacity})`;
      context.fill();
    });

    if (!drawOnce) {
      animationFrameId = window.requestAnimationFrame(drawParticles);
    }
  }

  function stopOceanAnimation() {
    if (animationFrameId === null) return;

    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  function startOceanAnimation() {
    if (animationFrameId !== null || prefersMotionReduction() || document.hidden) return;

    drawParticles();
  }

  function resizeCanvas() {
    oceanCanvas.width = window.innerWidth;
    oceanCanvas.height = window.innerHeight;
    createParticles();
    stopOceanAnimation();

    if (prefersMotionReduction()) {
      drawParticles(true);
    } else {
      startOceanAnimation();
    }
  }

  window.addEventListener("resize", resizeCanvas);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopOceanAnimation();
    } else if (prefersMotionReduction()) {
      drawParticles(true);
    } else {
      startOceanAnimation();
    }
  });

  resizeCanvas();
}

/* =========================================================
   10. Booking Package Selection
========================================================= */

packageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPackage = button.dataset.package;
    applySelectedPackage(selectedPackage, true);
  });
});

/* =========================================================
   11. Gallery Filters
========================================================= */

if (galleryFilters.length > 0 && galleryCards.length > 0) {
  galleryFilters.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
      const filterValue = filterButton.dataset.filter || "all";

      galleryFilters.forEach((button) => {
        const isActive = button === filterButton;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      galleryCards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        const isVisible = filterValue === "all" || categories.includes(filterValue);

        card.classList.toggle("is-hidden", !isVisible);
      });
    });
  });
}

/* =========================================================
   12. Gallery Lightbox
========================================================= */

function openLightbox(button) {
  if (
    !galleryLightbox ||
    !lightboxImage ||
    !lightboxTitle ||
    !lightboxDescription ||
    !lightboxClose
  ) {
    return;
  }

  const card = button.closest(".gallery-card");
  const image = card?.querySelector("img");
  const title = card?.querySelector("h2");
  const description = card?.querySelector("p");

  if (!card || !image || !title || !description) return;

  lastFocusedGalleryButton = button;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxTitle.textContent = title.textContent || "Gallery Preview";
  lightboxDescription.textContent = description.textContent || "";
  galleryLightbox.classList.add("active");
  galleryLightbox.setAttribute("aria-hidden", "false");
  syncBodyScrollLock();
  lightboxClose.focus();
}

if (galleryOpenButtons.length > 0 && galleryLightboxDialog) {
  galleryOpenButtons.forEach((button) => {
    button.addEventListener("click", () => openLightbox(button));
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  galleryLightbox?.addEventListener("click", (event) => {
    if (event.target === galleryLightbox) {
      closeLightbox();
    }
  });

  galleryLightboxDialog.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

/* =========================================================
   13. Form Handling
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('input[type="date"]').forEach((field) => {
    if (field.min) return;

    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localDate = new Date(today.getTime() - offset * 60000)
      .toISOString()
      .split("T")[0];

    field.min = localDate;
  });

  const requestedPackage = new URLSearchParams(window.location.search).get("package");
  if (requestedPackage) {
    applySelectedPackage(requestedPackage, false);
  }

  const forms = document.querySelectorAll("form[data-form-type]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.reportValidity()) {
        event.preventDefault();
        return;
      }

      const submitButton = form.querySelector("button[type='submit']");
      const action = form.getAttribute("action") || "thank-you.html";
      const formType = form.dataset.formType || "general";
      const isDemoRedirect = /thank-you\.html(?:$|\?)/i.test(action);

      if (submitButton) {
        submitButton.textContent = isDemoRedirect ? "Redirecting..." : "Sending...";
        submitButton.disabled = true;
      }

      if (!isDemoRedirect) {
        return;
      }

      event.preventDefault();
      storeLastFormType(formType);
      window.location.href = buildThankYouUrl(action, formType);
    });
  });

  /* =========================================================
     14. Thank You Page Copy
  ========================================================= */

  const thankYouType =
    new URLSearchParams(window.location.search).get("form") || getLastFormType();
  const titleElement = document.getElementById("thankYouTitle");
  const textElement = document.getElementById("thankYouText");
  const eyebrowElement = document.getElementById("thankYouEyebrow");

  const thankYouCopy = {
    booking: {
      eyebrow: "Booking Request Received",
      title: "Dive Request Sent.",
      text: "Your booking request is on its way. A team member will confirm availability, pricing, and arrival details shortly."
    },
    contact: {
      eyebrow: "Message Received",
      title: "Thanks for Reaching Out.",
      text: "Your message has been received successfully. The team will review it and reply as soon as possible."
    }
  };

  if (
    titleElement &&
    textElement &&
    eyebrowElement &&
    thankYouType &&
    thankYouCopy[thankYouType]
  ) {
    eyebrowElement.textContent = thankYouCopy[thankYouType].eyebrow;
    titleElement.textContent = thankYouCopy[thankYouType].title;
    textElement.textContent = thankYouCopy[thankYouType].text;
  }
});

/* =========================================================
   15. Accessibility + Keyboard Controls
========================================================= */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  closeLightbox();
  setMenuState(false);
});

/* =========================================================
   16. Performance Helpers
========================================================= */

function startAmbientAnimations() {
  if (document.hidden || prefersMotionReduction()) return;

  startBubbleAnimation();
  startFishAnimation();
  startHeroSlider();
}

function stopAmbientAnimations() {
  stopBubbleAnimation();
  stopFishAnimation();
  stopHeroSlider();
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopAmbientAnimations();
  } else {
    startAmbientAnimations();
  }
});

startAmbientAnimations();
