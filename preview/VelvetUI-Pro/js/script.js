/* =========================================================
   VELVET STUDIO — PREMIUM INTERACTION SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initFaqBehavior();
  initStickyNavState();
  initScrollReveal();
  initStaticInquiryForm();
  initCanvasBackground();
});

/* =========================================================
   MOBILE NAVIGATION — Diamond menu
========================================================= */

function initMobileNavigation() {
  const menuButton = document.querySelector(".menu-btn");
  const navLinks   = document.querySelector(".nav-links");
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
    navLinks.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
  }

  navLinks.setAttribute("aria-hidden", mobileNavQuery.matches ? "true" : "false");

  menuButton.addEventListener("click", () => {
    navLinks.classList.contains("active") ? closeNav() : openNav();
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  /* Close on outside click */
  document.addEventListener("click", (e) => {
    if (!menuButton.contains(e.target) && !navLinks.contains(e.target)) {
      closeNav();
    }
  });

  /* Close on Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
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
   FAQ ACCORDION
========================================================= */

function initFaqBehavior() {
  const faqItems = document.querySelectorAll(".faq-accordion details");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => { if (other !== item) other.removeAttribute("open"); });
    });
  });
}

/* =========================================================
   STICKY NAV
========================================================= */

function initStickyNavState() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initScrollReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(
    ".section-block, .hero-copy, .hero-stage, .feature-card, .value-card, .showcase-card, .pricing-card, .testimonial-card, .process-step, .story-card, .cta-card, .comparison-card"
  );
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  items.forEach((el) => el.classList.add("reveal-item"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
  items.forEach((el) => observer.observe(el));
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
========================================================= */

function initCanvasBackground() {
  const canvas = document.querySelector("#heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: false });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0, height = 0;
  let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  let time = 0;
  let animationFrame = 0;

  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.35,
    targetX: window.innerWidth * 0.5,
    targetY: window.innerHeight * 0.35,
  };

  const diamonds = Array.from({ length: 38 }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: 4 + Math.random() * 14,
    speed: 0.06 + Math.random() * 0.22,
    drift: (-0.12 + Math.random() * 0.24),
    opacity: 0.06 + Math.random() * 0.18,
    rotation: Math.random() * Math.PI,
  }));

  const sketchLines = Array.from({ length: 28 }, () => ({
    x: Math.random(),
    y: Math.random(),
    length: 80 + Math.random() * 260,
    opacity: 0.04 + Math.random() * 0.07,
    angle: [-0.7, 0, 0.7, 1.57, 2.35][Math.floor(Math.random() * 5)],
  }));

  const orbs = [
    { x: 0.15, y: 0.28, r: 0.52, color: "255,55,130",  alpha: 0.38 },
    { x: 0.82, y: 0.18, r: 0.48, color: "180,155,255", alpha: 0.28 },
    { x: 0.50, y: 0.72, r: 0.44, color: "244,180,100", alpha: 0.14 },
    { x: 0.25, y: 0.78, r: 0.36, color: "120,80,220",  alpha: 0.18 },
  ];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = Math.floor(width  * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width  = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function drawBase() {
    const g = ctx.createLinearGradient(0, 0, width * 0.6, height);
    g.addColorStop(0,    "#0e0218");
    g.addColorStop(0.32, "#22083a");
    g.addColorStop(0.65, "#190530");
    g.addColorStop(1,    "#050008");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);
  }

  function drawOrbs() {
    orbs.forEach((orb, i) => {
      const t  = time * 0.0003 + i * 1.4;
      const cx = (orb.x + Math.sin(t) * 0.08) * width;
      const cy = (orb.y + Math.cos(t * 0.7) * 0.06) * height;
      const r  = orb.r * Math.max(width, height);

      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grd.addColorStop(0,   `rgba(${orb.color},${orb.alpha})`);
      grd.addColorStop(0.4, `rgba(${orb.color},${orb.alpha * 0.35})`);
      grd.addColorStop(1,   `rgba(${orb.color},0)`);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);
    });
  }

  function drawFabricLines() {
    ctx.save();
    ctx.globalAlpha = 0.16;
    for (let i = -height; i < width; i += 26) {
      const wave = Math.sin(time * 0.0014 + i * 0.009) * 14;
      ctx.beginPath();
      ctx.moveTo(i + wave, 0);
      ctx.lineTo(i + height + wave, height);
      ctx.strokeStyle = "rgba(255,255,255,0.055)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawSketchLines() {
    ctx.save();
    sketchLines.forEach((line) => {
      const x = line.x * width;
      const y = line.y * height;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(line.angle);
      ctx.beginPath();
      ctx.moveTo(-line.length * 0.5, 0);
      ctx.lineTo(line.length * 0.5, 0);
      ctx.strokeStyle = `rgba(255,208,227,${line.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.rect(-line.length * 0.22, -20, line.length * 0.44, 40);
      ctx.strokeStyle = `rgba(244,201,139,${line.opacity * 0.65})`;
      ctx.stroke();
      ctx.restore();
    });
    ctx.restore();
  }

  function drawDiamonds() {
    ctx.save();
    diamonds.forEach((d) => {
      d.y -= d.speed * 0.0009;
      d.x += d.drift * 0.0004;
      d.rotation += 0.0022;
      if (d.y < -0.08) d.y = 1.08;
      if (d.x < -0.08) d.x = 1.08;
      if (d.x > 1.08)  d.x = -0.08;

      const x = d.x * width;
      const y = d.y * height;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(d.rotation);
      ctx.beginPath();
      ctx.moveTo(0, -d.size);
      ctx.lineTo(d.size * 0.62, 0);
      ctx.lineTo(0, d.size);
      ctx.lineTo(-d.size * 0.62, 0);
      ctx.closePath();
      ctx.strokeStyle = `rgba(255,208,227,${d.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, d.size * 0.18, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${d.opacity * 0.6})`;
      ctx.fill();
      ctx.restore();
    });
    ctx.restore();
  }

  function drawSpotlight() {
    pointer.x += (pointer.targetX - pointer.x) * 0.055;
    pointer.y += (pointer.targetY - pointer.y) * 0.055;
    const r   = Math.max(width, height) * 0.48;
    const grd = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, r);
    grd.addColorStop(0,   "rgba(255,200,225,0.18)");
    grd.addColorStop(0.3, "rgba(255,77,148,0.08)");
    grd.addColorStop(0.7, "rgba(180,130,255,0.04)");
    grd.addColorStop(1,   "rgba(255,200,225,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);
  }

  function drawVignette() {
    const grd = ctx.createRadialGradient(
      width*0.5, height*0.5, height*0.3,
      width*0.5, height*0.5, height
    );
    grd.addColorStop(0, "rgba(0,0,0,0)");
    grd.addColorStop(1, "rgba(3,0,10,0.72)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);
  }

  function render() {
    animationFrame = 0;
    time += 16;
    ctx.clearRect(0, 0, width, height);
    drawBase();
    drawOrbs();
    drawFabricLines();
    drawSketchLines();
    drawDiamonds();
    drawSpotlight();
    drawVignette();
    if (!reduceMotion && !document.hidden) {
      animationFrame = requestAnimationFrame(render);
    }
  }

  function startAnimation() {
    if (reduceMotion || animationFrame) return;
    animationFrame = requestAnimationFrame(render);
  }

  function stopAnimation() {
    if (!animationFrame) return;
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  resize();
  if (reduceMotion) {
    drawBase(); drawOrbs(); drawSketchLines(); drawVignette();
  } else {
    startAnimation();
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    pointer.targetX = e.clientX;
    pointer.targetY = e.clientY;
  }, { passive: true });
  window.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    pointer.targetX = t.clientX;
    pointer.targetY = t.clientY;
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAnimation();
      return;
    }
    startAnimation();
  });
}
