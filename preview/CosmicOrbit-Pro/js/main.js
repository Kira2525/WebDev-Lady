function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

document.addEventListener("DOMContentLoaded", initializeCosmicOrbit);

if (document.readyState !== "loading") {
  initializeCosmicOrbit();
}

function initializeCosmicOrbit() {
  if (window.__cosmicOrbitMainInitialized) {
    return;
  }

  window.__cosmicOrbitMainInitialized = true;

  const reducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initializeBackgroundPlanet();

  if (!reducedMotion) {
    createShootingStars();
  }

  initializeMobileNavigation();
  initializeActiveNavigation();
  initializeDemoForms();
  initializeRevealAnimations(reducedMotion);
  initializeCurrentYear();
}

/* =========================================================
   BACKGROUND MOTION
========================================================= */

function initializeBackgroundPlanet() {
  qsa(".background-planet").forEach((planet) => {
    if (planet.querySelector(".planet-core")) {
      return;
    }

    const backRing = document.createElement("span");
    const core = document.createElement("span");
    const frontRing = document.createElement("span");

    backRing.className = "planet-ring planet-ring-back";
    core.className = "planet-core";
    frontRing.className = "planet-ring planet-ring-front";

    planet.append(backRing, core, frontRing);
  });
}

function createShootingStars() {
  const container = document.querySelector(".shooting-stars");

  if (!container) return;

  container.innerHTML = "";

  const starCount = 4;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");

    star.className = "shooting-star";
    star.style.top = `${Math.random() * 70}%`;
    star.style.left = `${40 + Math.random() * 70}%`;
    star.style.setProperty("--star-delay", `${Math.random() * 8}s`);
    star.style.setProperty("--star-speed", `${3 + Math.random() * 3}s`);

    container.appendChild(star);
  }
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initializeMobileNavigation() {
  const body = document.body;
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) {
    return;
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    body.classList.remove("nav-open");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    const nextState = !isOpen;

    menuToggle.setAttribute("aria-expanded", String(nextState));
    navMenu.classList.toggle("is-open", nextState);
    body.classList.toggle("nav-open", nextState);
  });

  qsa("a", navMenu).forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.classList.contains("is-open")) {
      return;
    }

    if (menuToggle.contains(event.target) || navMenu.contains(event.target)) {
      return;
    }

    closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });
}

/* =========================================================
   ACTIVE NAVIGATION STATE
========================================================= */

function initializeActiveNavigation() {
  const body = document.body;
  const navMenu = document.getElementById("navMenu");
  const currentPage = body.dataset.navPage;

  if (!currentPage || !navMenu) {
    return;
  }

  qsa("a", navMenu).forEach((link) => {
    const href = link.getAttribute("href");
    const isCurrentPage = href === currentPage;

    link.classList.toggle("is-active", isCurrentPage);

    if (isCurrentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

/* =========================================================
   FORM DEMO REDIRECTS
========================================================= */

function initializeDemoForms() {
  const demoForms = qsa("[data-demo-form]");

  demoForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const redirectUrl = form.dataset.redirect || "thank-you.html";
      const status = form.parentElement?.querySelector(".status-message");

      if (status) {
        status.textContent =
          "Thanks. Your request has been received and is being prepared for follow-up.";
        status.classList.add("is-visible");
      }

      window.setTimeout(() => {
        window.location.href = redirectUrl;
      }, 250);
    });
  });
}

/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

function initializeRevealAnimations(reducedMotion) {
  const revealItems = qsa("[data-reveal]");

  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* =========================================================
   CURRENT YEAR HELPER
========================================================= */

function initializeCurrentYear() {
  qsa("[data-current-year]").forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });
}
