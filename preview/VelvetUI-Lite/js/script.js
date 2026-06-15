/* =========================================================
   VELVETUI LITE — INTERACTION SCRIPT
   This file controls the mobile navigation, sticky header,
   FAQ behavior, smooth scrolling, reveal animations, and
   animated canvas background.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initStickyNavState();
  initActiveNavState();
  initFaqBehavior();
  initSmoothAnchorLinks();
  initScrollReveal();
  initStaticInquiryForm();
  initCanvasBackground();
});

/* =========================================================
   MOBILE NAVIGATION
   Customers can edit nav labels in HTML without changing
   this logic as long as the same classes and IDs remain.
========================================================= */

function initMobileNavigation() {
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!menuButton || !navLinks) return;

  const mobileNavQuery = window.matchMedia("(max-width: 1024px)");

  function openNav() {
    navLinks.classList.add("active");
    menuButton.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation");
    navLinks.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
  }

  function closeNav() {
    navLinks.classList.remove("active");
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navLinks.setAttribute("aria-hidden", mobileNavQuery.matches ? "true" : "false");
    document.body.classList.remove("nav-open");
  }

  navLinks.setAttribute("aria-hidden", mobileNavQuery.matches ? "true" : "false");

  menuButton.addEventListener("click", () => {
    navLinks.classList.contains("active") ? closeNav() : openNav();
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !navLinks.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
      menuButton.focus();
    }
  });

  const handleViewportChange = (event) => {
    if (!event.matches) {
      closeNav();
      navLinks.setAttribute("aria-hidden", "false");
    } else {
      navLinks.setAttribute("aria-hidden", navLinks.classList.contains("active") ? "false" : "true");
    }
  };

  if (typeof mobileNavQuery.addEventListener === "function") {
    mobileNavQuery.addEventListener("change", handleViewportChange);
  } else if (typeof mobileNavQuery.addListener === "function") {
    mobileNavQuery.addListener(handleViewportChange);
  }
}

/* =========================================================
   STICKY HEADER
   Adds a lightweight scroll state so the header feels more
   polished without changing its height.
========================================================= */

function initStickyNavState() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* =========================================================
   ACTIVE NAV STATE
   Keeps the current one-page section highlighted in the
   primary navigation while scrolling or jumping by anchor.
========================================================= */

function initActiveNavState() {
  const rootStyle = getComputedStyle(document.documentElement);

  const getNavOffset = () => {
    const cssOffset = parseFloat(rootStyle.getPropertyValue("--nav-offset"));
    if (Number.isFinite(cssOffset)) return cssOffset;

    const header = document.querySelector(".site-header");
    return header ? header.getBoundingClientRect().height + 18 : 140;
  };

  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  if (!navLinks.length) return;

  const sections = navLinks
    .map((link) => {
      const targetId = link.getAttribute("href");
      if (!targetId) return null;

      return {
        link,
        targetId,
        section: document.querySelector(targetId)
      };
    })
    .filter((item) => item && item.section);

  if (!sections.length) return;

  function setActiveLink(activeId) {
    sections.forEach(({ link, targetId }) => {
      const isActive = targetId === activeId;
      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function getClosestSectionId() {
    const navOffset = getNavOffset();
    let activeId = sections[0].targetId;

    sections.forEach(({ section, targetId }) => {
      const top = section.getBoundingClientRect().top;
      if (top - navOffset <= 0) {
        activeId = targetId;
      }
    });

    return activeId;
  }

  const startingHash = window.location.hash && document.querySelector(window.location.hash)
    ? window.location.hash
    : getClosestSectionId();

  setActiveLink(startingHash);

  window.addEventListener("scroll", () => {
    setActiveLink(getClosestSectionId());
  }, { passive: true });

  window.addEventListener("hashchange", () => {
    if (window.location.hash && document.querySelector(window.location.hash)) {
      setActiveLink(window.location.hash);
    }
  });
}

/* =========================================================
   FAQ ACCORDION
   Keeps one FAQ item open at a time on the one-page homepage.
========================================================= */

function initFaqBehavior() {
  const faqItems = document.querySelectorAll(".faq-accordion details");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      faqItems.forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });
}

/* =========================================================
   SAME-PAGE SMOOTH SCROLL
   Only intercepts pure hash links like #contact. Links to
   index.html#contact still work normally from other pages.
========================================================= */

function initSmoothAnchorLinks() {
  const samePageLinks = document.querySelectorAll('a[href^="#"]');
  if (!samePageLinks.length) return;

  const getNavOffset = () => {
    const cssOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-offset"));
    if (Number.isFinite(cssOffset)) return cssOffset;

    const header = document.querySelector(".site-header");
    return header ? header.getBoundingClientRect().height + 18 : 140;
  };

  samePageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - getNavOffset();
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", targetId);
    });
  });
}

/* =========================================================
   SCROLL REVEAL
   Adds gentle entrance motion to section content. Reduced
   motion users see everything immediately.
========================================================= */

function initScrollReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(
    ".section-heading, .hero-copy, .hero-visual, .feature-card, .process-step, .showcase-card, .pricing-card, .form-card, .sidebar-card, .thanks-card, .error-card"
  );

  if (!items.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  items.forEach((element) => element.classList.add("reveal-item"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  items.forEach((element) => observer.observe(element));
}

/* =========================================================
   STATIC INQUIRY FORM
========================================================= */

function initStaticInquiryForm() {
  const form = document.querySelector("form[data-static-form='true']");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = form.getAttribute("action") || "thank-you.html";
  });
}

/* =========================================================
   PREMIUM CANVAS BACKGROUND
   This is the shared animated background system that helps
   Lite visually match Pro while staying framework-free.
========================================================= */

function initCanvasBackground() {
  const canvas = document.querySelector("#heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  let time = 0;
  let animationFrame = 0;

  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.35,
    targetX: window.innerWidth * 0.5,
    targetY: window.innerHeight * 0.35
  };

  const diamonds = Array.from({ length: 38 }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: 4 + Math.random() * 14,
    speed: 0.06 + Math.random() * 0.22,
    drift: -0.12 + Math.random() * 0.24,
    opacity: 0.06 + Math.random() * 0.18,
    rotation: Math.random() * Math.PI
  }));

  const sketchLines = Array.from({ length: 28 }, () => ({
    x: Math.random(),
    y: Math.random(),
    length: 80 + Math.random() * 260,
    opacity: 0.04 + Math.random() * 0.07,
    angle: [-0.7, 0, 0.7, 1.57, 2.35][Math.floor(Math.random() * 5)]
  }));

  const orbs = [
    { x: 0.15, y: 0.28, r: 0.52, color: "255,55,130", alpha: 0.38 },
    { x: 0.82, y: 0.18, r: 0.48, color: "180,155,255", alpha: 0.28 },
    { x: 0.50, y: 0.72, r: 0.44, color: "244,180,100", alpha: 0.14 },
    { x: 0.25, y: 0.78, r: 0.36, color: "120,80,220", alpha: 0.18 }
  ];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function drawBase() {
    const gradient = ctx.createLinearGradient(0, 0, width * 0.6, height);
    gradient.addColorStop(0, "#0e0218");
    gradient.addColorStop(0.32, "#22083a");
    gradient.addColorStop(0.65, "#190530");
    gradient.addColorStop(1, "#050008");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function drawOrbs() {
    orbs.forEach((orb, index) => {
      const orbitalTime = time * 0.0003 + index * 1.4;
      const centerX = (orb.x + Math.sin(orbitalTime) * 0.08) * width;
      const centerY = (orb.y + Math.cos(orbitalTime * 0.7) * 0.06) * height;
      const radius = orb.r * Math.max(width, height);
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);

      gradient.addColorStop(0, `rgba(${orb.color},${orb.alpha})`);
      gradient.addColorStop(0.4, `rgba(${orb.color},${orb.alpha * 0.35})`);
      gradient.addColorStop(1, `rgba(${orb.color},0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    });
  }

  function drawFabricLines() {
    ctx.save();
    ctx.globalAlpha = 0.16;
    for (let line = -height; line < width; line += 26) {
      ctx.beginPath();
      ctx.moveTo(line, 0);
      ctx.lineTo(line + height, height);
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawSketchLines() {
    ctx.save();
    sketchLines.forEach((line, index) => {
      const wobble = Math.sin(time * 0.00022 + index) * 18;
      const x = line.x * width + wobble;
      const y = line.y * height;
      const endX = x + Math.cos(line.angle) * line.length;
      const endY = y + Math.sin(line.angle) * line.length;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = `rgba(255,255,255,${line.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });
    ctx.restore();
  }

  function drawDiamonds() {
    ctx.save();
    diamonds.forEach((diamond, index) => {
      const driftX = Math.sin(time * 0.00035 * diamond.speed + index) * 18;
      const driftY = Math.cos(time * 0.00028 * diamond.speed + index) * 16;
      const x = diamond.x * width + driftX + (pointer.x - width * 0.5) * diamond.drift * 0.03;
      const y = diamond.y * height + driftY + (pointer.y - height * 0.35) * diamond.drift * 0.03;
      const size = diamond.size;

      ctx.translate(x, y);
      ctx.rotate(diamond.rotation + time * 0.0002 * diamond.speed);
      ctx.fillStyle = `rgba(255,255,255,${diamond.opacity})`;
      ctx.strokeStyle = "rgba(255,200,225,0.12)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.72, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.72, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    });
    ctx.restore();
  }

  function render() {
    drawBase();
    drawOrbs();
    drawFabricLines();
    drawSketchLines();
    drawDiamonds();

    if (!reduceMotion) {
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;
    }

    time += 16;
    animationFrame = window.requestAnimationFrame(render);
  }

  function handlePointerMove(event) {
    pointer.targetX = event.clientX;
    pointer.targetY = event.clientY;
  }

  resize();
  render();

  window.addEventListener("resize", resize, { passive: true });

  if (!reduceMotion) {
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
  }

  window.addEventListener("beforeunload", () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
  });
}
