/* =========================================================
   ABYSSAL BLUE LITE - MAIN JAVASCRIPT
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const bubbleLayer = document.getElementById("bubbleLayer");
const fishLayer = document.getElementById("fishLayer");
const slides = document.querySelectorAll(".hero-slider .slide");
const oceanCanvas = document.getElementById("oceanCanvas");
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function setMenuState(isOpen) {
  if (!menuToggle || !navMenu) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navMenu.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

function setActiveLink(id) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
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
    if (!navMenu.classList.contains("active")) return;
    if (navMenu.contains(event.target) || menuToggle.contains(event.target)) return;
    setMenuState(false);
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

function createBubble() {
  if (!bubbleLayer) return;

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
  if (!fishLayer) return;

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

if (!prefersReducedMotion.matches) {
  if (bubbleLayer) {
    window.setInterval(createBubble, 380);
  }

  if (fishLayer) {
    window.setInterval(createFish, 2800);
  }
}

let currentSlide = 0;

if (slides.length > 0) {
  slides[0].classList.add("active");
}

if (slides.length > 1 && !prefersReducedMotion.matches) {
  window.setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4200);
}

if (oceanCanvas) {
  const ctx = oceanCanvas.getContext("2d");
  let particles = [];
  let animationFrameId = null;

  function createParticles() {
    particles = [];

    const particleLimit = prefersReducedMotion.matches ? 45 : 120;
    const particleCount = Math.min(
      particleLimit,
      Math.floor((window.innerWidth * window.innerHeight) / 11500)
    );

    for (let i = 0; i < particleCount; i += 1) {
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
    ctx.clearRect(0, 0, oceanCanvas.width, oceanCanvas.height);

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

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180, 245, 255, ${particle.opacity})`;
      ctx.fill();
    });

    if (!drawOnce) {
      animationFrameId = window.requestAnimationFrame(drawParticles);
    }
  }

  function resizeCanvas() {
    oceanCanvas.width = window.innerWidth;
    oceanCanvas.height = window.innerHeight;
    createParticles();

    if (prefersReducedMotion.matches) {
      drawParticles(true);
    } else if (animationFrameId === null) {
      drawParticles();
    }
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}
