const words = ["CREATE", "BUILD", "DESIGN", "LAUNCH", "GROW"];

const VELVETUI_CONFIG = {
  words,
  colors: {
    text: "rgba(255, 229, 239, 0.94)",
    glow: "rgba(255, 116, 188, 0.92)",
    innerGlow: "rgba(255, 87, 170, 0.17)",
    outerGlow: "rgba(129, 77, 222, 0.09)"
  },
  shape: "diamond",
  density: 170,
  speed: 1,
  font: '"Baskerville Old Face", "Palatino Linotype", Georgia, serif',
  fontSizeMin: 13,
  fontSizeMax: 21,
  glow: 24,
  interactive: true,
  modes: {
    hero: {
      centerX: 0.73,
      centerY: 0.48,
      scale: 1.18,
      densityMultiplier: 1,
      speedMultiplier: 1,
      alphaMultiplier: 1,
      glowMultiplier: 1,
      motionMultiplier: 1,
      interactive: true
    },
    ambient: {
      centerX: 0.84,
      centerY: 0.3,
      scale: 1.18,
      densityMultiplier: 1,
      speedMultiplier: 1,
      alphaMultiplier: 1,
      glowMultiplier: 1,
      motionMultiplier: 1,
      interactive: true
    }
  }
};

(function () {
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setupNavigation() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const navLinks = document.getElementById("navLinks");

    if (!toggle || !navLinks) {
      return;
    }

    function closeMenu() {
      navLinks.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!navLinks.classList.contains("active")) {
        return;
      }

      if (!navLinks.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  function setupHeroCanvas() {
    const canvas = document.getElementById("heroCanvas");

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;
    let points = [];
    let time = 0;
    let runtimeConfig = getRuntimeConfig();
    const pointer = {
      x: 0,
      y: 0,
      active: false
    };

    function getModeConfig() {
      const modeKey = document.body.dataset.canvasMode === "hero" ? "hero" : "ambient";
      return VELVETUI_CONFIG.modes[modeKey];
    }

    function getRuntimeConfig() {
      const modeConfig = getModeConfig();
      const mobileReduction = window.innerWidth < 768 ? 0.76 : 1;
      const motionReduction = reducedMotionQuery.matches ? 0.58 : 1;
      const density = Math.max(
        18,
        Math.round(
          VELVETUI_CONFIG.density *
          modeConfig.densityMultiplier *
          mobileReduction *
          motionReduction
        )
      );
      const speed = VELVETUI_CONFIG.speed * modeConfig.speedMultiplier * (reducedMotionQuery.matches ? 0.72 : 1);
      const textItems = Array.isArray(VELVETUI_CONFIG.words)
        ? VELVETUI_CONFIG.words.filter(Boolean)
        : [VELVETUI_CONFIG.words];

      return {
        ...VELVETUI_CONFIG,
        density,
        speed,
        interactive: modeConfig.interactive && !reducedMotionQuery.matches,
        textItems: textItems.length ? textItems : ["CREATE"],
        modeConfig
      };
    }

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      runtimeConfig = getRuntimeConfig();
      createShapePoints();
    }

    function diamondFormula(t) {
      const cos = Math.cos(t);
      const sin = Math.sin(t);
      const normalizer = Math.max(Math.abs(cos) + Math.abs(sin), 0.001);

      return {
        x: (16 * cos) / normalizer,
        y: (16 * sin) / normalizer
      };
    }

    function createShapePoints() {
      points = [];

      const { centerX, centerY, scale, alphaMultiplier } = runtimeConfig.modeConfig;
      const shapeScale = (Math.min(width, height) / 38) * scale;
      const anchorX = width * centerX;
      const anchorY = height * centerY;
      const baseSize = runtimeConfig.fontSizeMin;
      const sizeRange = Math.max(0, runtimeConfig.fontSizeMax - runtimeConfig.fontSizeMin);

      for (let i = 0; i < runtimeConfig.density; i += 1) {
        const t = (Math.PI * 2 * i) / runtimeConfig.density;
        const shapePoint = diamondFormula(t);

        points.push({
          baseX: anchorX + shapePoint.x * shapeScale,
          baseY: anchorY - shapePoint.y * shapeScale,
          size: baseSize + Math.random() * sizeRange,
          speed: (0.45 + Math.random() * 0.7) * runtimeConfig.speed,
          offset: Math.random() * Math.PI * 2,
          alpha: (0.36 + Math.random() * 0.48) * alphaMultiplier,
          depth: 0.5 + Math.random() * 0.8,
          drift: 0.7 + Math.random() * 0.9
        });
      }
    }

    function drawBackgroundGlow() {
      const { centerX, centerY, scale, glowMultiplier } = runtimeConfig.modeConfig;
      const radius = Math.min(width, height) * (0.26 * scale + 0.14);
      const gradient = ctx.createRadialGradient(
        width * centerX,
        height * centerY,
        runtimeConfig.glow * glowMultiplier,
        width * centerX,
        height * centerY,
        radius
      );

      gradient.addColorStop(0, runtimeConfig.colors.innerGlow);
      gradient.addColorStop(0.42, runtimeConfig.colors.outerGlow);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function applyPointerRepulsion(x, y) {
      if (!runtimeConfig.interactive || !pointer.active) {
        return { x, y };
      }

      const dx = x - pointer.x;
      const dy = y - pointer.y;
      const distance = Math.hypot(dx, dy);
      const radius = Math.max(runtimeConfig.fontSizeMax * 7, Math.min(width, height) * 0.14);

      if (distance === 0 || distance > radius) {
        return { x, y };
      }

      const force = (1 - distance / radius) * runtimeConfig.fontSizeMax * 1.35;
      const angle = Math.atan2(dy, dx);

      return {
        x: x + Math.cos(angle) * force,
        y: y + Math.sin(angle) * force
      };
    }

    function getTextForPoint(index) {
      return runtimeConfig.textItems[index % runtimeConfig.textItems.length];
    }

    function drawShapeText() {
      ctx.clearRect(0, 0, width, height);
      drawBackgroundGlow();

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.globalCompositeOperation = "screen";

      const motionFactor = runtimeConfig.modeConfig.motionMultiplier;
      points.forEach((point, index) => {
        const wave = Math.sin(time * point.speed + point.offset);
        const orbit = Math.cos(time * point.speed * 0.72 + point.offset);
        const pulse = Math.sin(time * 0.6 + point.offset + point.depth);
        const drift = runtimeConfig.fontSizeMin * 0.44 * motionFactor * point.drift;
        const baseX = point.baseX + wave * drift;
        const baseY = point.baseY + orbit * drift * 0.72;
        const displaced = applyPointerRepulsion(baseX, baseY);
        const size = point.size * (0.78 + (pulse + 1) * 0.18);

        ctx.font = `700 ${size}px ${runtimeConfig.font}`;
        ctx.shadowBlur = runtimeConfig.glow * runtimeConfig.modeConfig.glowMultiplier * point.depth;
        ctx.shadowColor = runtimeConfig.colors.glow;
        ctx.fillStyle = runtimeConfig.colors.text.replace(/0\.\d+\)$/, `${Math.min(point.alpha, 0.96)})`);
        ctx.fillText(getTextForPoint(index), displaced.x, displaced.y);
      });

      ctx.globalCompositeOperation = "source-over";
      time += 0.014 * runtimeConfig.speed;
      window.requestAnimationFrame(drawShapeText);
    }

    function handlePointerMove(event) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    window.addEventListener("resize", resizeCanvas);
    if (typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", resizeCanvas);
    }

    if (runtimeConfig.interactive) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);
    }

    resizeCanvas();
    drawShapeText();
  }

  setupNavigation();
  setupHeroCanvas();
})();
