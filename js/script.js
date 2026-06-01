const canvas = document.getElementById("pinkCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let width;
let height;
let particles = [];
let rings = [];
let shootingStars = [];

let mouseX = 0;
let mouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  createParticles();
  createRings();
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticles() {
  particles = [];

  const count = window.innerWidth < 700 ? 80 : 180;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: random(0, width),
      y: random(0, height),
      size: random(1, 3.8),
      speedX: random(-0.35, 0.35),
      speedY: random(-0.35, 0.35),
      alpha: random(0.22, 0.85),
      pulse: random(0, Math.PI * 2),
      pulseSpeed: random(0.012, 0.04)
    });
  }
}

function createRings() {
  rings = [];

  const count = window.innerWidth < 700 ? 4 : 7;

  for (let i = 0; i < count; i++) {
    rings.push({
      x: random(width * 0.1, width * 0.9),
      y: random(height * 0.1, height * 0.9),
      radius: random(120, 430),
      speed: random(0.001, 0.004),
      angle: random(0, Math.PI * 2),
      alpha: random(0.04, 0.12)
    });
  }
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, width, height);

  gradient.addColorStop(0, "#050006");
  gradient.addColorStop(0.42, "#160011");
  gradient.addColorStop(0.75, "#090008");
  gradient.addColorStop(1, "#000000");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawLightBeams() {
  for (let i = 0; i < 4; i++) {
    const x =
      width * (0.15 + i * 0.24) +
      Math.sin(Date.now() * 0.00035 + i) * 90;

    const y =
      height * (0.25 + i * 0.08) +
      Math.cos(Date.now() * 0.0003 + i) * 60;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 420);

    gradient.addColorStop(0, "rgba(255, 20, 147, 0.12)");
    gradient.addColorStop(0.45, "rgba(255, 70, 180, 0.045)");
    gradient.addColorStop(1, "rgba(255, 20, 147, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
}

function drawRings() {
  rings.forEach((ring) => {
    ring.angle += ring.speed;

    ctx.save();

    ctx.translate(
      ring.x + mouseX * 28,
      ring.y + mouseY * 22
    );

    ctx.rotate(ring.angle);

    ctx.beginPath();
    ctx.ellipse(
      0,
      0,
      ring.radius,
      ring.radius * 0.22,
      0,
      0,
      Math.PI * 2
    );

    ctx.strokeStyle = `rgba(255, 92, 190, ${ring.alpha})`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 22;
    ctx.shadowColor = "rgba(255, 20, 147, 0.8)";
    ctx.stroke();

    ctx.restore();
  });
}

function drawParticles() {
  particles.forEach((p) => {
    p.x += p.speedX + mouseX * 0.035;
    p.y += p.speedY + mouseY * 0.035;
    p.pulse += p.pulseSpeed;

    if (p.x < -10) p.x = width + 10;
    if (p.x > width + 10) p.x = -10;
    if (p.y < -10) p.y = height + 10;
    if (p.y > height + 10) p.y = -10;

    const glow = Math.max(
      0.08,
      Math.min(1, p.alpha + Math.sin(p.pulse) * 0.18)
    );

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 130, 210, ${glow})`;
    ctx.shadowBlur = 14;
    ctx.shadowColor = "rgba(255, 20, 147, 0.9)";
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  });
}

function createShootingStar() {
  shootingStars.push({
    x: random(width * 0.1, width * 0.9),
    y: random(-100, height * 0.45),
    length: random(90, 220),
    speed: random(8, 15),
    angle: random(0.55, 0.78),
    alpha: 1,
    decay: random(0.014, 0.026)
  });
}

function drawShootingStars() {
  if (Math.random() < 0.012) {
    createShootingStar();
  }

  shootingStars.forEach((star, index) => {
    star.x += Math.cos(star.angle) * star.speed;
    star.y += Math.sin(star.angle) * star.speed;
    star.alpha -= star.decay;

    const endX = star.x - Math.cos(star.angle) * star.length;
    const endY = star.y - Math.sin(star.angle) * star.length;

    const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);

    gradient.addColorStop(0, `rgba(255,255,255,${star.alpha})`);
    gradient.addColorStop(0.4, `rgba(255,130,210,${star.alpha * 0.7})`);
    gradient.addColorStop(1, "rgba(255,20,147,0)");

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 18;
    ctx.shadowColor = "rgba(255, 20, 147, 0.9)";
    ctx.moveTo(star.x, star.y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.shadowBlur = 0;

    if (
      star.alpha <= 0 ||
      star.x > width + 300 ||
      star.y > height + 300
    ) {
      shootingStars.splice(index, 1);
    }
  });
}

function drawVignette() {
  const gradient = ctx.createRadialGradient(
    width / 2,
    height / 2,
    Math.min(width, height) * 0.15,
    width / 2,
    height / 2,
    Math.max(width, height) * 0.8
  );

  gradient.addColorStop(0, "rgba(0,0,0,0)");
  gradient.addColorStop(1, "rgba(0,0,0,0.55)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function animateBackground() {
  mouseX += (targetMouseX - mouseX) * 0.045;
  mouseY += (targetMouseY - mouseY) * 0.045;

  drawBackground();
  drawLightBeams();
  drawRings();
  drawParticles();
  drawShootingStars();
  drawVignette();

  requestAnimationFrame(animateBackground);
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (event) => {
  targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
  targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
});

window.addEventListener("mouseleave", () => {
  targetMouseX = 0;
  targetMouseY = 0;
});

window.addEventListener("touchmove", (event) => {
  if (!event.touches.length) return;

  const touch = event.touches[0];

  targetMouseX = (touch.clientX / window.innerWidth - 0.5) * 2;
  targetMouseY = (touch.clientY / window.innerHeight - 0.5) * 2;
});

window.addEventListener("touchend", () => {
  targetMouseX = 0;
  targetMouseY = 0;
});

/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("active")) return;

    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* NAV ACTIVE PAGE HIGHLIGHT */

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

/* DEMO POPUP */

const openDemo = document.getElementById("openDemo");
const closeDemo = document.getElementById("closeDemo");
const demoModal = document.getElementById("demoModal");
const demoVideo = document.getElementById("demoVideo");

if (openDemo && closeDemo && demoModal && demoVideo) {
  openDemo.addEventListener("click", (e) => {
    e.preventDefault();
    demoModal.classList.add("active");
    demoVideo.play();
  });

  closeDemo.addEventListener("click", () => {
    demoModal.classList.remove("active");
    demoVideo.pause();
    demoVideo.currentTime = 0;
  });

  demoModal.addEventListener("click", (e) => {
    if (e.target === demoModal) {
      demoModal.classList.remove("active");
      demoVideo.pause();
      demoVideo.currentTime = 0;
    }
  });
}

/* START */

if (canvas && ctx) {
  resizeCanvas();
  if (prefersReducedMotion.matches) {
    drawBackground();
    drawLightBeams();
    drawRings();
    drawParticles();
    drawVignette();
  } else {
    animateBackground();
  }
}
