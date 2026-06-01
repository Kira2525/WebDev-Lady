/* =========================================================
   ABYSSAL BLUE - MAIN JAVASCRIPT
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const bubbleLayer = document.getElementById("bubbleLayer");
const fishLayer = document.getElementById("fishLayer");
const slides = document.querySelectorAll(".hero-slider .slide");
const oceanCanvas = document.getElementById("oceanCanvas");
const galleryFilters = document.querySelectorAll(".gallery-filter-bar [data-filter]");
const galleryCards = document.querySelectorAll(".gallery-card[data-category]");
const galleryOpenButtons = document.querySelectorAll(".gallery-open");
const galleryLightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxClose = document.getElementById("lightboxClose");
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

function closeLightbox() {
  if (!galleryLightbox) return;

  galleryLightbox.classList.remove("active");
  galleryLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
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
      closeLightbox();
      setMenuState(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.classList.contains("active")) return;
    if (navMenu.contains(event.target) || menuToggle.contains(event.target)) return;
    setMenuState(false);
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach((link) => {
  const href = link.getAttribute("href");
  const isActive = href === currentPage;

  link.classList.toggle("active", isActive);

  if (isActive) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

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
  }, 4000);
}

if (oceanCanvas) {
  const ctx = oceanCanvas.getContext("2d");
  let particles = [];
  let animationFrameId = null;

  function createParticles() {
    particles = [];

    const particleLimit = prefersReducedMotion.matches ? 45 : 140;
    const particleCount = Math.min(
      particleLimit,
      Math.floor((window.innerWidth * window.innerHeight) / 11000)
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

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}

const packageButtons = document.querySelectorAll(".package-select");
const packageSelect = document.querySelector('select[name="package"]');
const reserveSection =
  document.getElementById("reserve") || document.getElementById("dive-packages");

packageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPackage = button.dataset.package;

    if (packageSelect && selectedPackage) {
      packageSelect.value = selectedPackage;
      packageSelect.classList.add("selected-glow");

      window.setTimeout(() => {
        packageSelect.classList.remove("selected-glow");
      }, 1200);
    }

    if (reserveSection) {
      window.setTimeout(() => {
        reserveSection.scrollIntoView({
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
      }, 80);
    }
  });
});

if (galleryFilters.length && galleryCards.length) {
  galleryFilters.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
      const filterValue = filterButton.dataset.filter || "all";

      galleryFilters.forEach((button) => {
        button.classList.toggle("active", button === filterButton);
        button.setAttribute("aria-pressed", String(button === filterButton));
      });

      galleryCards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        const isVisible = filterValue === "all" || categories.includes(filterValue);

        card.classList.toggle("is-hidden", !isVisible);
      });
    });
  });
}

if (galleryOpenButtons.length && galleryLightbox && lightboxImage && lightboxTitle && lightboxDescription) {
  galleryOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".gallery-card");
      const image = card?.querySelector("img");
      const title = card?.querySelector("h2");
      const description = card?.querySelector("p");

      if (!card || !image || !title || !description) return;

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxTitle.textContent = title.textContent || "Gallery Preview";
      lightboxDescription.textContent = description.textContent || "";
      galleryLightbox.classList.add("active");
      galleryLightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("menu-open");
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  galleryLightbox.addEventListener("click", (event) => {
    if (event.target === galleryLightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form[data-form-type]");

  document.querySelectorAll('input[type="date"]').forEach((field) => {
    if (field.min) return;

    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localDate = new Date(today.getTime() - offset * 60000)
      .toISOString()
      .split("T")[0];

    field.min = localDate;
  });

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.reportValidity()) {
        event.preventDefault();
        return;
      }

      const button = form.querySelector("button[type='submit']");
      const action = form.getAttribute("action") || "thank-you.html";
      const formType = form.dataset.formType || "general";
      const isDemoRedirect = /thank-you\.html(?:$|\?)/i.test(action);

      if (button) {
        button.textContent = isDemoRedirect ? "Redirecting..." : "Sending...";
        button.disabled = true;
      }

      if (!isDemoRedirect) {
        return;
      }

      event.preventDefault();

      window.sessionStorage.setItem("abyssalBlueLastFormType", formType);
      window.location.href = `${action}?form=${encodeURIComponent(formType)}`;
    });
  });

  const thankYouType =
    new URLSearchParams(window.location.search).get("form") ||
    window.sessionStorage.getItem("abyssalBlueLastFormType");

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

  if (titleElement && textElement && eyebrowElement && thankYouType && thankYouCopy[thankYouType]) {
    eyebrowElement.textContent = thankYouCopy[thankYouType].eyebrow;
    titleElement.textContent = thankYouCopy[thankYouType].title;
    textElement.textContent = thankYouCopy[thankYouType].text;
  }
});
