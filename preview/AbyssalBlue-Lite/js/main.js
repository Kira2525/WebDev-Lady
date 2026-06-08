/* ================= EDITABLE SETTINGS ================= */
/* Beginners can safely adjust these values to make the animations faster, slower, heavier, or lighter. */
const editableSettings = {
  sliderDelayMs: 4200,
  bubbleSpawnDelayMs: 380,
  fishSpawnDelayMs: 2800,
  fullMotionParticleLimit: 120,
  reducedMotionParticleLimit: 45
};

/* ================= SHARED ELEMENT LOOKUPS ================= */
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");
const contactSection = document.getElementById("contact");
const floatingContactButton = document.getElementById("floatingContactButton");

const bubbleLayer = document.getElementById("bubbleLayer");
const fishLayer = document.getElementById("fishLayer");
const oceanCanvas = document.getElementById("oceanCanvas");
const slides = document.querySelectorAll(".hero-slider .slide");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ================= SMALL HELPERS ================= */
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function getHeaderOffset() {
  return siteHeader ? siteHeader.offsetHeight + 24 : 0;
}

function prefersMotion() {
  return !prefersReducedMotion.matches;
}

function focusAnchorTarget(targetElement) {
  if (!targetElement || typeof targetElement.focus !== "function") {
    return;
  }

  // Sections are not normally keyboard-focusable, so we temporarily opt them in.
  if (!targetElement.matches("a, button, input, select, textarea, summary, [tabindex]")) {
    targetElement.setAttribute("tabindex", "-1");
  }

  targetElement.focus({
    preventScroll: true
  });
}

/* ================= MOBILE NAVIGATION ================= */
function setMenuState(isOpen) {
  if (!menuToggle || !navMenu) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  navMenu.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

if (menuToggle && navMenu) {
  setMenuState(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.classList.contains("active")) {
      return;
    }

    if (navMenu.contains(event.target) || menuToggle.contains(event.target)) {
      return;
    }

    setMenuState(false);
  });
}

/* ================= SMOOTH SCROLLING ================= */
anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || !targetId.startsWith("#")) {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: prefersMotion() ? "smooth" : "auto"
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", targetId);
    } else {
      window.location.hash = targetId;
    }

    focusAnchorTarget(targetElement);
  });
});

/* ================= ACTIVE NAV LINK HIGHLIGHT ================= */
function setActiveLink(id) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if (sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0.1
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ================= FLOATING CONTACT CTA ================= */
if (contactSection && floatingContactButton) {
  let isContactVisible = false;

  function updateFloatingContactButton() {
    // Keep the floating CTA out of the way until visitors move past the first hero screen.
    const isNearTop = window.scrollY < window.innerHeight * 0.55;
    floatingContactButton.classList.toggle("is-hidden", isNearTop || isContactVisible);
  }

  const contactObserver = new IntersectionObserver(
    ([entry]) => {
      isContactVisible = entry.isIntersecting;
      updateFloatingContactButton();
    },
    {
      threshold: 0.25
    }
  );

  contactObserver.observe(contactSection);
  window.addEventListener("scroll", updateFloatingContactButton, { passive: true });
  window.addEventListener("resize", updateFloatingContactButton);
  updateFloatingContactButton();
}

/* ================= HERO IMAGE ROTATION ================= */
function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });
}

let currentSlide = 0;

if (slides.length > 0) {
  showSlide(currentSlide);
}

if (slides.length > 1 && prefersMotion()) {
  window.setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, editableSettings.sliderDelayMs);
}

/* ================= DECORATIVE BUBBLES AND FISH ================= */
function createBubble() {
  if (!bubbleLayer) {
    return;
  }

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

function createFish() {
  if (!fishLayer) {
    return;
  }

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

if (prefersMotion()) {
  if (bubbleLayer) {
    window.setInterval(createBubble, editableSettings.bubbleSpawnDelayMs);
  }

  if (fishLayer) {
    window.setInterval(createFish, editableSettings.fishSpawnDelayMs);
  }
}

/* ================= CANVAS PARTICLE LAYER ================= */
if (oceanCanvas) {
  const context = oceanCanvas.getContext("2d");
  let particles = [];
  let animationFrameId = null;

  function createParticles() {
    particles = [];

    const particleLimit = prefersMotion()
      ? editableSettings.fullMotionParticleLimit
      : editableSettings.reducedMotionParticleLimit;
    const particleCount = Math.min(
      particleLimit,
      Math.floor((window.innerWidth * window.innerHeight) / 11500)
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

  function resizeCanvas() {
    oceanCanvas.width = window.innerWidth;
    oceanCanvas.height = window.innerHeight;
    createParticles();

    if (prefersMotion()) {
      if (animationFrameId === null) {
        drawParticles();
      }
    } else {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }

      drawParticles(true);
    }
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}
