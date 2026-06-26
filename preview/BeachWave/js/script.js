/* =========================================================
   BEACHWAVE RESORT
   Main JavaScript File

   CUSTOMER NOTES:
   - This file controls the mobile menu and animated beach background.
   - To make the animation lighter/slower, edit the BEACH_SETTINGS section.
   - Do not rename #beachCanvas unless you also update the HTML.
========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
========================================================= */

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuBtn = document.querySelector(".menu-btn");

  if (!navLinks) return;

  navLinks.classList.toggle("active");

  if (menuBtn) {
    const isOpen = navLinks.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");
  const menuBtn = document.querySelector(".menu-btn");

  if (!navLinks) return;

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");

      if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!menuBtn) return;

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      navLinks.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});


/* =========================================================
   02. BEACH BACKGROUND SETTINGS
   CUSTOMIZE: Edit these values to change the animation.
========================================================= */

const BEACH_SETTINGS = {
  waveLayers: 12,
  foamCount: 140,
  sparkleCount: 100,
  cloudCount: 9,
  birdCount: 11,

  horizonPosition: 0.53,
  sandPosition: 0.83,

  mouseParallax: true,
  maxPixelRatio: 2
};


/* =========================================================
   03. CANVAS SETUP
========================================================= */

const canvas = document.getElementById("beachCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let width = 0;
let height = 0;
let horizonY = 0;

let waves = [];
let foamParticles = [];
let sparkleParticles = [];
let clouds = [];
let birds = [];
let palmLeavesLeft = [];
let palmLeavesRight = [];

let mouseX = 0;
let mouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;
let time = 0;


/* =========================================================
   04. HELPER FUNCTIONS
========================================================= */

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function drawRoundedRect(context, x, y, w, h, r) {
  if (context.roundRect) {
    context.roundRect(x, y, w, h, r);
    return;
  }

  context.moveTo(x + r, y);
  context.lineTo(x + w - r, y);
  context.quadraticCurveTo(x + w, y, x + w, y + r);
  context.lineTo(x + w, y + h - r);
  context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  context.lineTo(x + r, y + h);
  context.quadraticCurveTo(x, y + h, x, y + h - r);
  context.lineTo(x, y + r);
  context.quadraticCurveTo(x, y, x + r, y);
}


/* =========================================================
   05. CREATE ANIMATION OBJECTS
========================================================= */

function resizeCanvas() {
  if (!canvas || !ctx) return;

  const pixelRatio = Math.min(window.devicePixelRatio || 1, BEACH_SETTINGS.maxPixelRatio);

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = Math.floor(width * pixelRatio);
  canvas.height = Math.floor(height * pixelRatio);

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  horizonY = height * BEACH_SETTINGS.horizonPosition;

  createWaves();
  createFoamParticles();
  createSparkles();
  createClouds();
  createBirds();
  createPalms();
}

function createWaves() {
  waves = [];

  for (let i = 0; i < BEACH_SETTINGS.waveLayers; i++) {
    waves.push({
      y: horizonY + i * 28,
      amplitude: 8 + i * 2.7,
      frequency: 0.008 + i * 0.0015,
      speed: 0.012 + i * 0.002,
      offset: randomBetween(0, Math.PI * 2),
      thickness: 1 + i * 0.25,
      alpha: 0.18 + i * 0.035
    });
  }
}

function createFoamParticles() {
  foamParticles = [];

  for (let i = 0; i < BEACH_SETTINGS.foamCount; i++) {
    foamParticles.push({
      x: randomBetween(0, width),
      y: randomBetween(horizonY + 30, height * 0.88),
      radius: randomBetween(0.8, 3.2),
      speedX: randomBetween(-0.45, 0.45),
      speedY: randomBetween(-0.18, 0.18),
      alpha: randomBetween(0.1, 0.5),
      pulse: randomBetween(0, Math.PI * 2),
      pulseSpeed: randomBetween(0.01, 0.04)
    });
  }
}

function createSparkles() {
  sparkleParticles = [];

  for (let i = 0; i < BEACH_SETTINGS.sparkleCount; i++) {
    sparkleParticles.push({
      x: randomBetween(width * 0.3, width * 0.7),
      y: randomBetween(horizonY + 10, height * 0.82),
      radius: randomBetween(0.7, 2.2),
      alpha: randomBetween(0.1, 0.7),
      pulse: randomBetween(0, Math.PI * 2),
      pulseSpeed: randomBetween(0.02, 0.07),
      drift: randomBetween(-0.2, 0.2)
    });
  }
}

function createClouds() {
  clouds = [];

  for (let i = 0; i < BEACH_SETTINGS.cloudCount; i++) {
    clouds.push({
      x: randomBetween(-width * 0.2, width * 1.1),
      y: randomBetween(height * 0.08, height * 0.34),
      scale: randomBetween(0.55, 1.55),
      speed: randomBetween(0.08, 0.35),
      alpha: randomBetween(0.13, 0.32)
    });
  }
}

function createBirds() {
  birds = [];

  for (let i = 0; i < BEACH_SETTINGS.birdCount; i++) {
    birds.push({
      x: randomBetween(0, width),
      y: randomBetween(height * 0.12, height * 0.42),
      size: randomBetween(8, 18),
      speed: randomBetween(0.45, 1.4),
      flap: randomBetween(0, Math.PI * 2),
      flapSpeed: randomBetween(0.07, 0.15)
    });
  }
}

function createPalms() {
  palmLeavesLeft = [];
  palmLeavesRight = [];

  for (let i = 0; i < 12; i++) {
    palmLeavesLeft.push({
      angle: -2.8 + i * 0.22,
      length: randomBetween(90, 150),
      curve: randomBetween(18, 38)
    });

    palmLeavesRight.push({
      angle: -0.35 + i * 0.22,
      length: randomBetween(80, 140),
      curve: randomBetween(18, 36)
    });
  }
}


/* =========================================================
   06. DRAW BACKGROUND
========================================================= */

function drawSky() {
  const sky = ctx.createLinearGradient(0, 0, 0, height);

  sky.addColorStop(0, "#160739");
  sky.addColorStop(0.28, "#7b2468");
  sky.addColorStop(0.48, "#ff8a5b");
  sky.addColorStop(0.63, "#1c7180");
  sky.addColorStop(1, "#04131a");

  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);
}

function drawSun() {
  const sunX = width * 0.5 + mouseX * 30;
  const sunY = horizonY - height * 0.18 + mouseY * 12;
  const sunRadius = Math.min(width, height) * 0.085;

  const glow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius * 5);

  glow.addColorStop(0, "rgba(255, 230, 150, 0.75)");
  glow.addColorStop(0.22, "rgba(255, 150, 90, 0.3)");
  glow.addColorStop(0.58, "rgba(255, 80, 140, 0.12)");
  glow.addColorStop(1, "rgba(255, 80, 140, 0)");

  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  const sunGradient = ctx.createRadialGradient(
    sunX - sunRadius * 0.3,
    sunY - sunRadius * 0.35,
    0,
    sunX,
    sunY,
    sunRadius
  );

  sunGradient.addColorStop(0, "#fff7bc");
  sunGradient.addColorStop(0.45, "#ffd36e");
  sunGradient.addColorStop(1, "#ff7c5c");

  ctx.beginPath();
  ctx.fillStyle = sunGradient;
  ctx.shadowBlur = 35;
  ctx.shadowColor = "rgba(255, 180, 90, 0.75)";
  ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
}

function drawCloud(x, y, scale, alpha) {
  ctx.save();
  ctx.translate(x + mouseX * 18 * scale, y + mouseY * 8 * scale);
  ctx.scale(scale, scale);
  ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;

  ctx.beginPath();
  ctx.arc(0, 10, 26, 0, Math.PI * 2);
  ctx.arc(28, 2, 34, 0, Math.PI * 2);
  ctx.arc(68, 10, 30, 0, Math.PI * 2);
  ctx.arc(95, 18, 22, 0, Math.PI * 2);
  drawRoundedRect(ctx, -28, 10, 150, 38, 22);
  ctx.fill();

  ctx.restore();
}

function drawClouds() {
  clouds.forEach((cloud) => {
    cloud.x += cloud.speed;

    if (cloud.x > width + 220) {
      cloud.x = -260;
      cloud.y = randomBetween(height * 0.08, height * 0.34);
    }

    drawCloud(cloud.x, cloud.y, cloud.scale, cloud.alpha);
  });
}

function drawBird(bird) {
  bird.x += bird.speed;
  bird.flap += bird.flapSpeed;

  if (bird.x > width + 60) {
    bird.x = -60;
    bird.y = randomBetween(height * 0.12, height * 0.42);
  }

  const wing = Math.sin(bird.flap) * bird.size * 0.45;

  ctx.save();
  ctx.translate(bird.x + mouseX * 10, bird.y + mouseY * 5);
  ctx.strokeStyle = "rgba(20, 20, 35, 0.62)";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(bird.size * 0.55, -bird.size * 0.35 - wing, bird.size, 0);
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-bird.size * 0.55, -bird.size * 0.35 - wing, -bird.size, 0);
  ctx.stroke();

  ctx.restore();
}

function drawBirds() {
  birds.forEach(drawBird);
}

function drawOceanBase() {
  const ocean = ctx.createLinearGradient(0, horizonY, 0, height);

  ocean.addColorStop(0, "#0a6c85");
  ocean.addColorStop(0.35, "#045569");
  ocean.addColorStop(0.65, "#06404b");
  ocean.addColorStop(1, "#052b31");

  ctx.fillStyle = ocean;
  ctx.fillRect(0, horizonY, width, height - horizonY);
}

function drawSunReflection() {
  const reflectionX = width * 0.5 + mouseX * 28;
  const reflectionWidth = width * 0.24;

  const gradient = ctx.createRadialGradient(
    reflectionX,
    horizonY + 40,
    0,
    reflectionX,
    horizonY + 220,
    reflectionWidth
  );

  gradient.addColorStop(0, "rgba(255, 230, 150, 0.34)");
  gradient.addColorStop(0.45, "rgba(255, 180, 90, 0.16)");
  gradient.addColorStop(1, "rgba(255, 180, 90, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, horizonY, width, height - horizonY);

  for (let i = 0; i < 18; i++) {
    const y = horizonY + 18 + i * 19;
    const wave = Math.sin(time * 0.04 + i) * 18;
    const lineWidth = reflectionWidth * (1 - i / 23);

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 225, 150, ${0.23 - i * 0.009})`;
    ctx.lineWidth = 2;
    ctx.moveTo(reflectionX - lineWidth * 0.5 + wave, y);
    ctx.quadraticCurveTo(reflectionX, y + 6, reflectionX + lineWidth * 0.5 - wave, y);
    ctx.stroke();
  }
}

function drawWaveLayer(layer, index) {
  const parallax = index * 0.8;

  ctx.beginPath();

  for (let x = -40; x <= width + 40; x += 12) {
    const y =
      layer.y +
      Math.sin(x * layer.frequency + time * layer.speed + layer.offset) * layer.amplitude +
      Math.sin(x * layer.frequency * 1.8 + time * layer.speed * 1.4) * (layer.amplitude * 0.35) +
      mouseY * parallax;

    if (x === -40) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.strokeStyle = `rgba(180, 255, 255, ${layer.alpha})`;
  ctx.lineWidth = layer.thickness;
  ctx.shadowBlur = 8;
  ctx.shadowColor = "rgba(125, 248, 255, 0.45)";
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function drawWaves() {
  waves.forEach(drawWaveLayer);
}

function drawFoamParticles() {
  foamParticles.forEach((particle) => {
    particle.x += particle.speedX + Math.sin(time * 0.01 + particle.y) * 0.12;
    particle.y += particle.speedY;
    particle.pulse += particle.pulseSpeed;

    if (particle.x < -20) particle.x = width + 20;
    if (particle.x > width + 20) particle.x = -20;
    if (particle.y < horizonY) particle.y = height * 0.88;
    if (particle.y > height * 0.9) particle.y = horizonY + 30;

    const pulseAlpha = particle.alpha + Math.sin(particle.pulse) * 0.08;

    ctx.beginPath();
    ctx.fillStyle = `rgba(230, 255, 255, ${pulseAlpha})`;
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawSparkles() {
  sparkleParticles.forEach((sparkle) => {
    sparkle.pulse += sparkle.pulseSpeed;
    sparkle.x += sparkle.drift;

    if (sparkle.x < width * 0.28) sparkle.x = width * 0.72;
    if (sparkle.x > width * 0.72) sparkle.x = width * 0.28;

    const alpha = sparkle.alpha * Math.max(0, Math.sin(sparkle.pulse));

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 240, 180, ${alpha})`;
    ctx.shadowBlur = 12;
    ctx.shadowColor = "rgba(255, 230, 150, 0.8)";
    ctx.arc(
      sparkle.x + Math.sin(time * 0.02 + sparkle.y) * 12,
      sparkle.y,
      sparkle.radius,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.shadowBlur = 0;
  });
}

function drawSand() {
  const sandY = height * BEACH_SETTINGS.sandPosition;

  const sand = ctx.createLinearGradient(0, sandY, 0, height);
  sand.addColorStop(0, "#dba85e");
  sand.addColorStop(0.45, "#b9793f");
  sand.addColorStop(1, "#6d3e24");

  ctx.beginPath();
  ctx.moveTo(0, sandY);

  for (let x = 0; x <= width; x += 40) {
    const y = sandY + Math.sin(x * 0.008 + time * 0.018) * 10;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();

  ctx.fillStyle = sand;
  ctx.fill();

  for (let i = 0; i < 90; i++) {
    const x = (i * 97 + time * 0.15) % width;
    const y = sandY + 25 + ((i * 43) % (height - sandY - 25));

    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 230, 180, 0.12)";
    ctx.arc(x, y, 1.2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawPalmTree(baseX, baseY, scale, side) {
  ctx.save();
  ctx.translate(baseX + mouseX * 14, baseY + mouseY * 6);
  ctx.scale(scale, scale);

  ctx.strokeStyle = "rgba(22, 22, 20, 0.88)";
  ctx.lineWidth = 18;
  ctx.lineCap = "round";

  ctx.beginPath();

  if (side === "left") {
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(20, -100, 55, -210);
  } else {
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-20, -100, -55, -210);
  }

  ctx.stroke();

  const leafOriginX = side === "left" ? 55 : -55;
  const leafOriginY = -210;
  const leaves = side === "left" ? palmLeavesLeft : palmLeavesRight;

  leaves.forEach((leaf, index) => {
    const sway = Math.sin(time * 0.025 + index) * 0.12;
    const angle = side === "left" ? leaf.angle + sway : -leaf.angle - sway;

    ctx.save();
    ctx.translate(leafOriginX, leafOriginY);
    ctx.rotate(angle);
    ctx.fillStyle = "rgba(10, 60, 45, 0.86)";

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(leaf.length * 0.45, -leaf.curve, leaf.length, 0);
    ctx.quadraticCurveTo(leaf.length * 0.45, leaf.curve * 0.45, 0, 0);
    ctx.fill();

    ctx.restore();
  });

  ctx.restore();
}

function drawPalms() {
  drawPalmTree(-35, height * 0.93, 1.05, "left");
  drawPalmTree(width + 35, height * 0.94, 0.98, "right");
}

function drawVignette() {
  const gradient = ctx.createRadialGradient(
    width / 2,
    height / 2,
    Math.min(width, height) * 0.2,
    width / 2,
    height / 2,
    Math.max(width, height) * 0.8
  );

  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.48)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}


/* =========================================================
   07. ANIMATION LOOP
========================================================= */

function drawStaticScene() {
  drawSky();
  drawSun();
  drawOceanBase();
  drawSunReflection();
  drawSand();
  drawVignette();
}

function animate() {
  time++;

  mouseX += (targetMouseX - mouseX) * 0.045;
  mouseY += (targetMouseY - mouseY) * 0.045;

  drawSky();
  drawSun();
  drawClouds();
  drawBirds();
  drawOceanBase();
  drawSunReflection();
  drawWaves();
  drawSparkles();
  drawFoamParticles();
  drawSand();
  drawPalms();
  drawVignette();

  requestAnimationFrame(animate);
}


/* =========================================================
   08. MOUSE AND TOUCH PARALLAX
========================================================= */

function updatePointerPosition(clientX, clientY) {
  if (!BEACH_SETTINGS.mouseParallax) return;

  targetMouseX = (clientX / window.innerWidth - 0.5) * 2;
  targetMouseY = (clientY / window.innerHeight - 0.5) * 2;
}

function resetPointerPosition() {
  targetMouseX = 0;
  targetMouseY = 0;
}

window.addEventListener("mousemove", (event) => {
  updatePointerPosition(event.clientX, event.clientY);
});

window.addEventListener("mouseleave", resetPointerPosition);

window.addEventListener("touchmove", (event) => {
  if (!event.touches || event.touches.length === 0) return;

  const touch = event.touches[0];
  updatePointerPosition(touch.clientX, touch.clientY);
});

window.addEventListener("touchend", resetPointerPosition);


/* =========================================================
   09. START BACKGROUND
========================================================= */

window.addEventListener("resize", resizeCanvas);

if (canvas && ctx) {
  resizeCanvas();

  if (reduceMotion.matches) {
    drawStaticScene();
  } else {
    animate();
  }
}
