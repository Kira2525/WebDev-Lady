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

  initializeHeaderLayout();
  initializeMobileNavigation();
  initializeActiveNavigation();
  initializeSectionNavigation();
  initializeSmoothScrolling(reducedMotion);
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
   SMOOTH SCROLLING FOR SAME-PAGE LINKS
========================================================= */


function initializeSectionNavigation() {
  const navMenu = document.getElementById("navMenu");
  const sectionLinks = navMenu ? qsa('a[href^="#"]', navMenu) : [];
  const pageSections = qsa("main section[id]");

  function updateActiveSection(targetId) {
    sectionLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isCurrentSection = href === `#${targetId}`;

      link.classList.toggle("is-active", isCurrentSection);

      if (isCurrentSection) {
        link.setAttribute("aria-current", "page");
      } else if (!document.body.dataset.navPage) {
        link.removeAttribute("aria-current");
      }
    });
  }

  if (sectionLinks.length && pageSections.length) {
    updateActiveSection(pageSections[0].id);
  }

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) {
        return;
      }

      updateActiveSection(href.slice(1));
    });
  });
}
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
   HEADER LAYOUT
========================================================= */

function initializeHeaderLayout() {
  const header = qs(".site-header");

  if (!header) {
    return;
  }

  const root = document.documentElement;
  let frameId = null;

  function syncHeaderMetrics() {
    frameId = null;

    const styles = window.getComputedStyle(header);
    const topOffset = parseFloat(styles.top) || 0;
    const headerHeight = Math.ceil(header.getBoundingClientRect().height);

    root.style.setProperty("--header-height", `${headerHeight}px`);
    root.style.setProperty(
      "--header-clearance",
      `${Math.ceil(headerHeight + topOffset + 22)}px`
    );
    root.style.setProperty(
      "--header-anchor-offset",
      `${Math.ceil(headerHeight + topOffset + 28)}px`
    );
  }

  function requestSync() {
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
    }

    frameId = requestAnimationFrame(syncHeaderMetrics);
  }

  requestSync();

  window.addEventListener("resize", requestSync, { passive: true });
  window.addEventListener("orientationchange", requestSync, { passive: true });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(requestSync).catch(() => {});
  }
}

/* =========================================================
   CURRENT YEAR HELPER
========================================================= */

function initializeCurrentYear() {
  qsa("[data-current-year]").forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });
}


