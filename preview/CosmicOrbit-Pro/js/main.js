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
    addBackgroundMouseMovement();
  }

  initializeMobileNavigation();
  initializeActiveNavigation();
  initializeSmoothScrolling(reducedMotion);
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

  const starCount = 7;

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

function addBackgroundMouseMovement() {
  const glow = document.querySelector(".page-glow");
  const starOverlay = document.querySelector(".star-overlay");

  if (!glow && !starOverlay) return;

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;
  let starX = 0;
  let starY = 0;
  const startTime = performance.now();

  window.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 18;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 18;
  });

  function animateBackground(now) {
    const elapsed = (now - startTime) / 1000;
    const ambientX = Math.sin(elapsed * 0.18) * 4.5;
    const ambientY = Math.cos(elapsed * 0.14) * 3.5;
    const targetGlowX = mouseX + ambientX;
    const targetGlowY = mouseY + ambientY;
    const targetStarX = mouseX * 0.32 + Math.sin(elapsed * 0.11) * 6;
    const targetStarY = mouseY * 0.22 + Math.cos(elapsed * 0.09) * 4;

    glowX += (targetGlowX - glowX) * 0.04;
    glowY += (targetGlowY - glowY) * 0.04;
    starX += (targetStarX - starX) * 0.025;
    starY += (targetStarY - starY) * 0.025;

    if (glow) {
      glow.style.transform =
        `translate3d(${glowX}px, ${glowY}px, 0) scale(1.03)`;
    }

    if (starOverlay) {
      starOverlay.style.setProperty("--star-shift-x", `${starX}px`);
      starOverlay.style.setProperty("--star-shift-y", `${starY}px`);
    }

    requestAnimationFrame(animateBackground);
  }

  requestAnimationFrame(animateBackground);
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
   SMOOTH SCROLLING FOR SAME-PAGE LINKS
========================================================= */

function initializeSmoothScrolling(reducedMotion) {
  qsa('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = qs(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start"
      });
    });
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
          "Demo form submitted. Connect Formspree, Netlify Forms, EmailJS, or your own backend before launch.";
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

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

/* =========================================================
   CURRENT YEAR HELPER
========================================================= */

function initializeCurrentYear() {
  qsa("[data-current-year]").forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });
}
