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
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("active")) return;

    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
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

/* RATING BUTTONS */

document.querySelectorAll("[data-rating-group]").forEach((group) => {
  const buttons = Array.from(group.querySelectorAll(".star-button"));
  const note = group.parentElement?.querySelector("[data-rating-note]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const rating = Number(button.dataset.rating || 0);

      buttons.forEach((item) => {
        const itemRating = Number(item.dataset.rating || 0);
        item.classList.toggle("active", itemRating <= rating);
      });

      if (note) {
        note.textContent = `Thanks for the ${rating}-star rating.`;
      }
    });
  });
});

const PROJECT_BRIEF_SUMMARY_STORAGE_KEY = "projectBriefSummary";

function persistProjectBriefSummary(summary) {
  try {
    window.sessionStorage?.setItem(
      PROJECT_BRIEF_SUMMARY_STORAGE_KEY,
      JSON.stringify(summary)
    );
  } catch (error) {
    console.warn("Unable to store project brief summary", error);
  }
}

function readProjectBriefSummary() {
  try {
    const rawValue = window.sessionStorage?.getItem(
      PROJECT_BRIEF_SUMMARY_STORAGE_KEY
    );

    return rawValue ? JSON.parse(rawValue) : null;
  } catch (error) {
    console.warn("Unable to read project brief summary", error);
    return null;
  }
}

function isLocalSiteEnvironment() {
  const { protocol, hostname } = window.location;

  return (
    protocol === "file:" ||
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname === "0.0.0.0"
  );
}

function renderProjectBriefThankYouPage() {
  const serviceOutput = document.getElementById("thankYouService");
  const templateCard = document.getElementById("thankYouTemplateCard");
  const templateOutput = document.getElementById("thankYouTemplate");
  const rangeOutput = document.getElementById("thankYouRange");
  const featuresOutput = document.getElementById("thankYouFeatures");
  const timelineOutput = document.getElementById("thankYouTimeline");

  if (!serviceOutput || !rangeOutput || !featuresOutput || !timelineOutput) {
    return;
  }

  const summary = readProjectBriefSummary();

  if (!summary) {
    if (templateCard) {
      templateCard.hidden = true;
    }
    return;
  }

  serviceOutput.textContent = summary.serviceLabel || "Not provided";
  rangeOutput.textContent = summary.rangeText || "To be reviewed";
  timelineOutput.textContent = summary.timelineSummary || "Not provided";

  const templateIsApplicable =
    summary.templateLabel && summary.templateLabel !== "Not applicable";

  if (templateCard) {
    templateCard.hidden = !templateIsApplicable;
  }

  if (templateOutput && templateIsApplicable) {
    templateOutput.textContent = summary.templateLabel;
  }

  const requestedFeatures = Array.isArray(summary.requestedFeatures)
    ? summary.requestedFeatures.filter(Boolean)
    : [];

  featuresOutput.innerHTML = "";

  const featureItems = requestedFeatures.length
    ? requestedFeatures
    : ["No major feature requests were detected from this submission."];

  featureItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    featuresOutput.appendChild(listItem);
  });
}

renderProjectBriefThankYouPage();

const quickContactForm = document.getElementById("quickContactForm");

if (quickContactForm) {
  const quickContactModal = document.getElementById("quickContactModal");
  const quickContactModalEyebrow = document.getElementById("quickContactModalEyebrow");
  const quickContactModalTitle = document.getElementById("quickContactModalTitle");
  const quickContactModalBody = document.getElementById("quickContactModalBody");
  const quickContactModalClose = document.getElementById("quickContactModalClose");
  const quickContactSubmitButton = quickContactForm.querySelector('button[type="submit"]');

  function setQuickContactSubmitState(isSubmitting) {
    if (!quickContactSubmitButton) return;

    if (!quickContactSubmitButton.dataset.defaultText) {
      quickContactSubmitButton.dataset.defaultText = quickContactSubmitButton.textContent.trim();
    }

    quickContactSubmitButton.disabled = isSubmitting;
    quickContactSubmitButton.textContent = isSubmitting
      ? "Sending..."
      : quickContactSubmitButton.dataset.defaultText;
  }

  function closeQuickContactModal() {
    if (!quickContactModal) return;

    quickContactModal.classList.remove("is-visible");
    document.body.style.overflow = "";
    window.setTimeout(() => {
      if (!quickContactModal.classList.contains("is-visible")) {
        quickContactModal.hidden = true;
      }
    }, 240);
  }

  function openQuickContactModal({ eyebrow, title, bodyHtml }) {
    if (!quickContactModal || !quickContactModalTitle || !quickContactModalBody) {
      return;
    }

    if (quickContactModalEyebrow) {
      quickContactModalEyebrow.textContent = eyebrow;
    }

    quickContactModalTitle.textContent = title;
    quickContactModalBody.innerHTML = bodyHtml;
    quickContactModal.hidden = false;
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      quickContactModal.classList.add("is-visible");
      quickContactModalClose?.focus();
    });
  }

  async function submitQuickContactToNetlify(payload) {
    const submitAction = quickContactForm.getAttribute("action") || "/";
    const submitUrl = new URL(submitAction, window.location.href).toString();
    let response;

    try {
      response = await fetch(submitUrl, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: payload
      });
    } catch (error) {
      console.error("Quick contact network request failed", {
        submitUrl,
        message: error?.message || String(error)
      });
      throw error;
    }

    if (!response.ok) {
      let responsePreview = "";

      try {
        responsePreview = await response.text();
      } catch (readError) {
        responsePreview = `[unable to read response body: ${readError.message}]`;
      }

      console.error("Quick contact submission failed", {
        submitUrl,
        status: response.status,
        statusText: response.statusText,
        responsePreview: responsePreview.slice(0, 300)
      });

      throw new Error(`Quick contact submission failed with status ${response.status}`);
    }
  }

  quickContactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!quickContactForm.reportValidity()) {
      return;
    }

    try {
      setQuickContactSubmitState(true);

      if (isLocalSiteEnvironment()) {
        console.info(
          "Quick contact submitted locally; skipping Netlify form POST and showing success popup."
        );
      } else {
        await submitQuickContactToNetlify(new FormData(quickContactForm));
      }

      quickContactForm.reset();
      openQuickContactModal({
        eyebrow: "MESSAGE SENT",
        title: "Message Sent!",
        bodyHtml: [
          "<p>Thank you for reaching out.</p>",
          "<p>I've received your message and will get back to you as soon as possible.</p>"
        ].join("")
      });
    } catch (error) {
      console.error("Quick contact submission error", error);
      openQuickContactModal({
        eyebrow: "MESSAGE FAILED",
        title: "Message Failed",
        bodyHtml: [
          "<p>There was a problem sending your message. Please try again or email me directly at:</p>",
          '<p><a href="mailto:webdevlady26@gmail.com">webdevlady26@gmail.com</a></p>'
        ].join("")
      });
    } finally {
      setQuickContactSubmitState(false);
    }
  });

  quickContactModal?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.hasAttribute("data-modal-close")) {
      closeQuickContactModal();
    }
  });

  quickContactModalClose?.addEventListener("click", closeQuickContactModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && quickContactModal && !quickContactModal.hidden) {
      closeQuickContactModal();
    }
  });
}

/* PROJECT INTAKE FORM */

const intakeForm = document.getElementById("contactForm");

if (intakeForm) {
  const serviceSelect = document.getElementById("selected-service");
  const selectedTemplateInput = document.getElementById("selected-template");
  const templateChoiceSection = document.getElementById("template-choice-section");
  const templateCardGrid = document.getElementById("template-card-grid");
  const serviceGuidance = document.getElementById("service-guidance");
  const templateHint = document.getElementById("template-field-hint");
  const submitError = document.getElementById("projectSubmitError");
  const submitButton = intakeForm.querySelector('button[type="submit"]');
  const previewSummaryService = document.getElementById("projectSummaryServicePreview");
  const previewSummaryTemplate = document.getElementById("projectSummaryTemplatePreview");
  const previewSummaryAddons = document.getElementById("projectSummaryAddonsPreview");
  const previewEstimateRange = document.getElementById("projectEstimateRangePreview");
  const previewEstimateNote = document.getElementById("projectEstimatePreviewNote");
  const brandPalettePresetInputs = intakeForm.querySelectorAll(
    'input[name="brandPalettePreset"]'
  );
  const primaryBrandColorInput = document.getElementById("primary-brand-color");
  const secondaryBrandColorInput = document.getElementById("secondary-brand-color");
  const accentColorEnabledInput = document.getElementById("accent-color-enabled");
  const accentColorBlock = document.getElementById("accent-color-block");
  const accentBrandColorInput = document.getElementById("accent-brand-color");
  const primaryBrandSwatch = document.getElementById("primary-brand-swatch");
  const primaryBrandSwatchValue = document.getElementById("primary-brand-swatch-value");
  const secondaryBrandSwatch = document.getElementById("secondary-brand-swatch");
  const secondaryBrandSwatchValue = document.getElementById("secondary-brand-swatch-value");
  const accentBrandSwatchCard = document.getElementById("accent-brand-swatch-card");
  const accentBrandSwatch = document.getElementById("accent-brand-swatch");
  const accentBrandSwatchValue = document.getElementById("accent-brand-swatch-value");
  const brandColorNotesInput = document.getElementById("brand-colors");
  const templateBasedServices = new Set([
    "template-customization",
    "website-setup-service"
  ]);
  const defaultBrandPalette = {
    primary: "#1b1324",
    secondary: "#f3d5e4",
    accent: "#ff8bd2"
  };
  const brandPalettePresets = {
    luxury: {
      primary: "#111111",
      secondary: "#d4af37",
      accent: "#f5efe2"
    },
    modern: {
      primary: "#ffffff",
      secondary: "#2b2d33",
      accent: "#3f78ff"
    },
    "soft-editorial": {
      primary: "#f6a9c7",
      secondary: "#f8dbe7",
      accent: "#b894ff"
    },
    professional: {
      primary: "#203a63",
      secondary: "#7d8798",
      accent: "#ffffff"
    },
    bold: {
      primary: "#111111",
      secondary: "#ff4d6d",
      accent: "#ffe45e"
    },
    minimal: {
      primary: "#f4efe8",
      secondary: "#cbbfb2",
      accent: "#7f7469"
    },
    "dark-mode": {
      primary: "#10131a",
      secondary: "#2c3444",
      accent: "#f5f5f5"
    }
  };
  let brandPaletteHasUserInput = false;
  const serviceConfigs = {
    "template-customization": {
      label: "Template Customization",
      min: 249,
      max: 499
    },
    "website-setup-service": {
      label: "Website Setup Service",
      min: 399,
      max: 699
    },
    "starter-custom-website": {
      label: "Starter Custom Website",
      min: 999,
      max: 1599,
      pageLimit: 5
    },
    "business-custom-website": {
      label: "Business Custom Website",
      min: 1599,
      max: 2499,
      pageLimit: 8
    },
    "e-commerce-custom-website": {
      label: "Online Store Custom Website",
      min: 2199,
      max: 3499,
      pageLimit: 10
    },
    "premium-3d-custom-website": {
      label: "Premium 3D Custom Website",
      min: 2999,
      max: 5000,
      pageLimit: 10,
      maxPlus: true
    }
  };

  const serviceMessages = {
    "template-customization":
      "Template Customization focuses on upgrading an existing template with your brand, copy, visuals, and layout adjustments.",
    "website-setup-service":
      "Website Setup Service is best when you want template installation help, content placement, setup support, and launch-ready polish.",
    "starter-custom-website":
      "Starter Custom Website is best for a simpler custom site with a clear structure and a smaller number of pages.",
    "business-custom-website":
      "Business Custom Website fits service-based businesses that need stronger messaging, structure, and strategy across multiple pages.",
    "e-commerce-custom-website":
      "Online Store Custom Website adds deeper shop planning, product structure, and conversion-focused store questions.",
    "premium-3d-custom-website":
      "Premium 3D Custom Website includes extra questions about motion, interactivity, and the immersive visual direction."
  };
  const templateCatalog = Object.values(window.productCatalog || {})
    .filter((product) => product?.key && product?.name && product?.priceLabel)
    .sort((firstProduct, secondProduct) => {
      const familyComparison = (firstProduct.family || firstProduct.name).localeCompare(
        secondProduct.family || secondProduct.name
      );

      if (familyComparison !== 0) {
        return familyComparison;
      }

      const versionRank = {
        Lite: 0,
        Pro: 1
      };

      return (
        (versionRank[firstProduct.version] ?? 9) -
        (versionRank[secondProduct.version] ?? 9)
      );
    });
  const templateCatalogMap = new Map(
    templateCatalog.map((product) => [product.key, product])
  );

  function normalizeComparableValue(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function resetFieldValue(field) {
    if (
      !field ||
      field.type === "hidden" ||
      field.name === "form-name" ||
      field.name === "bot-field"
    ) {
      return;
    }

    if (field.matches(":focus")) {
      field.blur();
    }

    if (field.type === "checkbox" || field.type === "radio") {
      field.checked = false;
      return;
    }

    if (field.tagName === "SELECT") {
      field.selectedIndex = 0;
      return;
    }

    field.value = "";
  }

  function setFieldState(field, isEnabled) {
    if (!isEnabled) {
      resetFieldValue(field);
      field.setCustomValidity("");
    }

    field.disabled = !isEnabled;

    if (field.hasAttribute("data-required-if-visible")) {
      field.required = isEnabled;
    }
  }

  function toggleConditionalBlock(block, isVisible) {
    block.hidden = !isVisible;

    block.querySelectorAll("input, select, textarea").forEach((field) => {
      setFieldState(field, isVisible);
    });
  }

  function getTemplateMode(selectedService) {
    const templateValue = selectedTemplateInput?.value || "";

    if (templateCatalogMap.has(templateValue)) {
      return "catalog-template";
    }

    if (templateBasedServices.has(selectedService)) {
      return "template-pending";
    }

    return "none";
  }

  function selectOptionByLooseMatch(select, rawValue) {
    if (!select || !rawValue) return false;

    const normalizedValue = rawValue.trim().toLowerCase();
    const options = Array.from(select.options);

    const directMatch = options.find(
      (option) => option.value.toLowerCase() === normalizedValue
    );

    if (directMatch) {
      select.value = directMatch.value;
      return true;
    }

    const labelMatch = options.find(
      (option) => option.textContent.trim().toLowerCase() === normalizedValue
    );

    if (labelMatch) {
      select.value = labelMatch.value;
      return true;
    }

    const slugMatch = normalizedValue
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const slugOption = options.find((option) => {
      const optionSlug = option.value
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      return optionSlug === slugMatch;
    });

    if (slugOption) {
      select.value = slugOption.value;
      return true;
    }

    return false;
  }

  function findTemplateKeyByLooseMatch(rawValue) {
    const normalizedValue = normalizeComparableValue(rawValue);

    if (!normalizedValue) {
      return "";
    }

    const matchedTemplate = templateCatalog.find((product) => {
      const templateNames = [
        product.key,
        product.name,
        `${product.family || ""} ${product.version || ""}`,
        `${product.family || ""}-${product.version || ""}`
      ];

      return templateNames.some(
        (candidateValue) =>
          normalizeComparableValue(candidateValue) === normalizedValue
      );
    });

    return matchedTemplate?.key || "";
  }

  function buildTemplateCard(product) {
    const templateCard = document.createElement("button");
    templateCard.type = "button";
    templateCard.className = "template-choice-card";
    templateCard.dataset.templateKey = product.key;
    templateCard.setAttribute("role", "listitem");
    templateCard.setAttribute("aria-pressed", "false");

    const media = document.createElement("div");
    media.className = "template-choice-card__media";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = `${product.name} preview`;
    image.loading = "lazy";
    media.appendChild(image);

    const body = document.createElement("div");
    body.className = "template-choice-card__body";

    const topLine = document.createElement("div");
    topLine.className = "template-choice-card__topline";

    const title = document.createElement("h4");
    title.textContent = product.name;

    const typePill = document.createElement("span");
    typePill.className = "template-choice-card__type";
    typePill.textContent = product.version;

    topLine.append(title, typePill);

    const priceRow = document.createElement("div");
    priceRow.className = "template-choice-card__price";

    const salePrice = document.createElement("span");
    salePrice.className = "sale-price";
    salePrice.textContent = product.priceLabel;

    const originalPrice = document.createElement("span");
    originalPrice.className = "original-price";
    originalPrice.textContent = product.originalPriceLabel;

    priceRow.append(salePrice, originalPrice);

    const description = document.createElement("p");
    description.className = "template-choice-card__description";
    description.textContent = product.typeLabel || "Premium website template";

    body.append(topLine, priceRow, description);
    templateCard.append(media, body);

    templateCard.addEventListener("click", () => {
      setSelectedTemplate(product.key);
      updateIntakeVisibility();
    });

    return templateCard;
  }

  function renderTemplateCards() {
    if (!templateCardGrid) {
      return;
    }

    templateCardGrid.innerHTML = "";

    templateCatalog.forEach((product) => {
      templateCardGrid.appendChild(buildTemplateCard(product));
    });
  }

  function updateTemplateCardSelection() {
    if (!templateCardGrid) {
      return;
    }

    const selectedTemplateKey = selectedTemplateInput?.value || "";

    templateCardGrid
      .querySelectorAll(".template-choice-card")
      .forEach((templateCard) => {
        const isSelected = templateCard.dataset.templateKey === selectedTemplateKey;
        templateCard.classList.toggle("is-selected", isSelected);
        templateCard.setAttribute("aria-pressed", isSelected ? "true" : "false");
      });
  }

  function setTemplateHint(message, isError = false) {
    if (!templateHint) {
      return;
    }

    templateHint.textContent = message;
    templateHint.classList.toggle("is-error", isError);
  }

  function setSelectedTemplate(templateKey) {
    if (!selectedTemplateInput) {
      return;
    }

    const nextTemplateKey = templateCatalogMap.has(templateKey) ? templateKey : "";

    selectedTemplateInput.value = nextTemplateKey;
    updateTemplateCardSelection();
    setTemplateHint(
      "Choose the template you want to use for this service. If you have not picked one yet, leave the selection empty and describe the direction you want."
    );
  }

  function applyIntakePrefill() {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    const templateParam = params.get("template");

    if (serviceParam) {
      selectOptionByLooseMatch(serviceSelect, serviceParam);
    }

    if (templateParam) {
      setSelectedTemplate(findTemplateKeyByLooseMatch(templateParam));
    }
  }

  function updateTemplateFieldRequirements(selectedService) {
    const isTemplateService = templateBasedServices.has(selectedService);

    if (templateHint) {
      setTemplateHint(
        isTemplateService
          ? "Choose one of the real templates below for this service. If you have not picked one yet, leave the template unselected and describe the direction you want."
          : "Template selection is only needed for Template Customization and Website Setup Service."
      );
    }
  }

  function updateTemplateSectionVisibility(selectedService) {
    const isTemplateService = templateBasedServices.has(selectedService);

    if (templateChoiceSection) {
      templateChoiceSection.hidden = !isTemplateService;
    }

    if (!isTemplateService && selectedTemplateInput?.value) {
      setSelectedTemplate("");
    }
  }

  function updateServiceGuidance(selectedService) {
    if (!serviceGuidance) return;

    serviceGuidance.textContent =
      serviceMessages[selectedService] ||
      "Choose a service first and the form will reveal the most relevant follow-up questions.";
  }

  function getSelectedOptionText(select, fallback) {
    if (!select || !select.value) {
      return fallback;
    }

    return select.options[select.selectedIndex]?.textContent.trim() || fallback;
  }

  function getCheckedValues(name) {
    return Array.from(
      intakeForm.querySelectorAll(`input[name="${name}"]:checked`),
      (field) => field.value
    );
  }

  function updatePageContentVisibility() {
    const selectedPages = new Set(getCheckedValues("pagesNeeded[]"));

    intakeForm.querySelectorAll("[data-page-content]").forEach((block) => {
      const pageName = block.dataset.pageContent;
      toggleConditionalBlock(block, selectedPages.has(pageName));
    });
  }

  function updateFieldValueConditionalBlocks() {
    intakeForm.querySelectorAll("[data-field-name]").forEach((block) => {
      const fieldName = block.dataset.fieldName;
      const allowedValues = (block.dataset.fieldValues || "")
        .split("|")
        .map((value) => value.trim())
        .filter(Boolean);
      const currentValue = intakeForm.elements[fieldName]?.value?.trim() || "";

      toggleConditionalBlock(
        block,
        Boolean(currentValue) && allowedValues.includes(currentValue)
      );
    });
  }

  function updateFeatureConditionalBlocks(selectedService, templateMode) {
    const selectedFeatures = new Set(getCheckedValues("functionalityNeeded[]"));

    intakeForm.querySelectorAll("[data-feature-values]").forEach((block) => {
      const featureValues = (block.dataset.featureValues || "")
        .split("|")
        .map((value) => value.trim())
        .filter(Boolean);
      const services = block.dataset.services
        ? block.dataset.services
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [];
      const modes = block.dataset.templateMode
        ? block.dataset.templateMode
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [];
      const matchesFeature = featureValues.some((value) =>
        selectedFeatures.has(value)
      );
      const matchesService =
        services.length === 0 || services.includes(selectedService);
      const matchesTemplateMode =
        modes.length === 0 || modes.includes(templateMode);
      const parentConditionalBlock = block.parentElement?.closest(".conditional-block");
      const parentAllowsVisibility =
        !parentConditionalBlock || !parentConditionalBlock.hidden;

      toggleConditionalBlock(
        block,
        parentAllowsVisibility &&
          matchesFeature &&
          matchesService &&
          matchesTemplateMode
      );
    });
  }

  function getSelectedBrandPalettePreset() {
    return (
      Array.from(brandPalettePresetInputs).find((input) => input.checked)?.value || ""
    );
  }

  function updateAccentColorVisibility() {
    const accentIsEnabled = Boolean(accentColorEnabledInput?.checked);

    if (accentColorBlock) {
      accentColorBlock.hidden = !accentIsEnabled;
    }

    if (accentBrandColorInput) {
      accentBrandColorInput.disabled = !accentIsEnabled;
    }

    if (accentBrandSwatchCard) {
      accentBrandSwatchCard.hidden = !accentIsEnabled;
    }
  }

  function setSwatchDisplay(swatch, valueLabel, colorValue) {
    if (swatch) {
      swatch.style.background = colorValue;
    }

    if (valueLabel) {
      valueLabel.textContent = colorValue.toUpperCase();
    }
  }

  function updateBrandColorSwatches() {
    setSwatchDisplay(
      primaryBrandSwatch,
      primaryBrandSwatchValue,
      primaryBrandColorInput?.value || defaultBrandPalette.primary
    );
    setSwatchDisplay(
      secondaryBrandSwatch,
      secondaryBrandSwatchValue,
      secondaryBrandColorInput?.value || defaultBrandPalette.secondary
    );

    if (accentColorEnabledInput?.checked) {
      setSwatchDisplay(
        accentBrandSwatch,
        accentBrandSwatchValue,
        accentBrandColorInput?.value || defaultBrandPalette.accent
      );
    }
  }

  function syncCustomPaletteSelection() {
    const selectedPreset = getSelectedBrandPalettePreset();

    if (!selectedPreset) {
      const customPaletteInput = intakeForm.querySelector(
        'input[name="brandPalettePreset"][value="custom-palette"]'
      );

      if (customPaletteInput) {
        customPaletteInput.checked = true;
      }
    }
  }

  function applyBrandPalettePreset(presetKey) {
    const preset = brandPalettePresets[presetKey];

    if (!preset) {
      updateAccentColorVisibility();
      updateBrandColorSwatches();
      return;
    }

    if (primaryBrandColorInput) {
      primaryBrandColorInput.value = preset.primary;
    }

    if (secondaryBrandColorInput) {
      secondaryBrandColorInput.value = preset.secondary;
    }

    if (accentColorEnabledInput) {
      accentColorEnabledInput.checked = Boolean(preset.accent);
    }

    if (accentBrandColorInput && preset.accent) {
      accentBrandColorInput.value = preset.accent;
    }

    updateAccentColorVisibility();
    updateBrandColorSwatches();
  }

  function resetBrandPaletteBuilder() {
    brandPaletteHasUserInput = false;

    if (primaryBrandColorInput) {
      primaryBrandColorInput.value = defaultBrandPalette.primary;
    }

    if (secondaryBrandColorInput) {
      secondaryBrandColorInput.value = defaultBrandPalette.secondary;
    }

    if (accentColorEnabledInput) {
      accentColorEnabledInput.checked = false;
    }

    if (accentBrandColorInput) {
      accentBrandColorInput.value = defaultBrandPalette.accent;
    }

    updateAccentColorVisibility();
    updateBrandColorSwatches();
  }

  function roundEstimate(value) {
    return Math.round(value / 10) * 10;
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value);
  }

  function formatLaunchDate(value) {
    if (!value) {
      return "Not provided";
    }

    const parsedDate = new Date(`${value}T12:00:00`);

    if (Number.isNaN(parsedDate.getTime())) {
      return value;
    }

    return parsedDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }

  function buildTimelineSummary() {
    const launchDate = intakeForm.elements.preferredLaunchDate?.value || "";
    const flexible = intakeForm.elements.deadlineFlexible?.value || "";
    const rush = intakeForm.elements.rushProjectRequest?.value || "";
    const parts = [formatLaunchDate(launchDate)];

    if (flexible) {
      parts.push(`Flexibility: ${flexible}`);
    }

    if (rush) {
      parts.push(`Rush: ${rush}`);
    }

    return parts.join(" | ");
  }

  function buildTemplateSummary(selectedService) {
    const templateValue = selectedTemplateInput?.value || "";

    if (!selectedService) {
      return "Not applicable";
    }

    if (!templateBasedServices.has(selectedService)) {
      return "Not applicable";
    }

    if (!templateValue) {
      return "Not selected yet";
    }

    const templateLabel =
      templateCatalogMap.get(templateValue)?.name ||
      "Not selected yet";

    return templateLabel;
  }

  function calculateEstimateDetails() {
    const selectedService = serviceSelect?.value || "";
    const config = serviceConfigs[selectedService];
    const selectedPages = getCheckedValues("pagesNeeded[]");
    const selectedFeatures = getCheckedValues("functionalityNeeded[]");
    const selectedThreeDNeeds = getCheckedValues("threeDNeeds[]");
    const logoStatus = intakeForm.elements.logoStatus?.value || "";
    const copySupport = intakeForm.elements.copySupportNeeded?.value || "";
    const rush = intakeForm.elements.rushProjectRequest?.value || "";
    const timelineSummary = buildTimelineSummary();
    const detectedAddons = [];

    if (!config) {
      return {
        serviceLabel: "Not provided",
        templateLabel: buildTemplateSummary(selectedService),
        timelineSummary,
        rangeText: "Estimate available after review",
        detectedAddons,
        min: 0,
        max: 0
      };
    }

    let min = config.min;
    let max = config.max;
    let maxPlus = Boolean(config.maxPlus);

    if (config.pageLimit && selectedPages.length > config.pageLimit) {
      const extraPages = selectedPages.length - config.pageLimit;
      min += extraPages * 100;
      max += extraPages * 200;
      detectedAddons.push(
        `${extraPages} extra page${extraPages > 1 ? "s" : ""}`
      );
    }

    if (
      selectedService !== "e-commerce-custom-website" &&
      selectedFeatures.includes("Product or shop needed")
    ) {
      min += 500;
      max += 1500;
      detectedAddons.push("Shop functionality");
    }

    if (selectedFeatures.includes("Booking or scheduling needed")) {
      min += 200;
      max += 600;
      detectedAddons.push("Booking or scheduling");
    }

    if (selectedFeatures.includes("Blog needed")) {
      min += 150;
      max += 400;
      detectedAddons.push("Blog setup");
    }

    if (copySupport === "Yes, a lot of help") {
      min += 600;
      max += 1000;
      detectedAddons.push("Full copy support");
    } else if (copySupport === "Some help") {
      min += 300;
      max += 700;
      detectedAddons.push("Copy refinement support");
    }

    if (
      selectedService !== "premium-3d-custom-website" &&
      (
        selectedFeatures.includes("Animations or 3D effects needed") ||
        selectedThreeDNeeds.length > 0
      )
    ) {
      min += 500;
      max += 2000;
      detectedAddons.push("Advanced animation / 3D effects");
    }

    if (
      logoStatus === "Yes, needs updates" ||
      logoStatus === "Not yet" ||
      logoStatus === "Need logo design help"
    ) {
      min += 150;
      max += 500;
      detectedAddons.push("Branding or logo support");
    }

    if (rush === "Yes") {
      min *= 1.2;
      max *= 1.35;
      detectedAddons.push("Rush timeline");
    }

    min = roundEstimate(min);
    max = roundEstimate(max);

    if (max >= 5000) {
      maxPlus = true;
    }

    return {
      serviceLabel: config.label,
      templateLabel: buildTemplateSummary(selectedService),
      timelineSummary,
      rangeText: `${formatCurrency(min)}-${formatCurrency(max)}${maxPlus ? "+" : ""}`,
      detectedAddons,
      min,
      max,
      maxPlus
    };
  }

  function populateEstimatePreview(estimateDetails) {
    if (previewSummaryService) {
      previewSummaryService.textContent = estimateDetails.serviceLabel;
    }

    if (previewSummaryTemplate) {
      previewSummaryTemplate.textContent = estimateDetails.templateLabel;
    }

    if (previewEstimateRange) {
      previewEstimateRange.textContent = estimateDetails.rangeText;
    }

    if (previewEstimateNote) {
      previewEstimateNote.textContent =
        "Final pricing is determined after review. No payment is required today.";
    }

    if (previewSummaryAddons) {
      previewSummaryAddons.innerHTML = "";

      const addonItems = estimateDetails.detectedAddons.length
        ? estimateDetails.detectedAddons
        : ["No major add-ons detected from this submission."];

      addonItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        previewSummaryAddons.appendChild(listItem);
      });
    }
  }

  function setSubmitState(isSubmitting) {
    if (!submitButton) return;

    if (!submitButton.dataset.defaultText) {
      submitButton.dataset.defaultText = submitButton.textContent.trim();
    }

    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting
      ? "Submitting..."
      : submitButton.dataset.defaultText;
  }

  function showSubmitError(message) {
    if (!submitError) return;

    submitError.textContent = message;
    submitError.classList.remove("hidden");
    submitError.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function clearSubmitError() {
    if (!submitError) return;

    submitError.textContent = "";
    submitError.classList.add("hidden");
  }

  function buildSubmissionPayload(estimateDetails) {
    const formData = new FormData(intakeForm);

    formData.set("estimatedProjectRange", estimateDetails.rangeText);
    formData.set("estimatedProjectMinimum", String(estimateDetails.min));
    formData.set("estimatedProjectMaximum", String(estimateDetails.max));
    formData.set("selectedServiceLabel", estimateDetails.serviceLabel);
    formData.set("selectedTemplateLabel", estimateDetails.templateLabel);
    formData.set("timelineSummary", estimateDetails.timelineSummary);
    formData.set(
      "detectedAddons",
      estimateDetails.detectedAddons.length
        ? estimateDetails.detectedAddons.join(", ")
        : "No major add-ons detected"
    );

    const selectedBrandPalettePreset = getSelectedBrandPalettePreset();
    const hasBrandNotes = Boolean(brandColorNotesInput?.value?.trim());

    if (!selectedBrandPalettePreset) {
      formData.delete("brandPalettePreset");
    }

    if (!accentColorEnabledInput?.checked) {
      formData.delete("includeAccentColor");
      formData.delete("accentBrandColor");
    }

    if (!brandPaletteHasUserInput && !hasBrandNotes) {
      formData.delete("brandPalettePreset");
      formData.delete("primaryBrandColor");
      formData.delete("secondaryBrandColor");
      formData.delete("includeAccentColor");
      formData.delete("accentBrandColor");
    }

    return formData;
  }

  function validateTemplateSelection(selectedService) {
    if (!templateBasedServices.has(selectedService)) {
      setTemplateHint(
        "Template selection is only needed for Template Customization and Website Setup Service."
      );
      return true;
    }

    if (templateCatalogMap.has(selectedTemplateInput?.value || "")) {
      setTemplateHint(
        "Choose one of the real templates below for this service. If you have not picked one yet, leave the template unselected and describe the direction you want."
      );
      return true;
    }

    setTemplateHint(
      "Select one of the real template cards for this service before submitting.",
      true
    );
    templateCardGrid?.scrollIntoView({ behavior: "smooth", block: "center" });
    return false;
  }

  function isLocalProjectBriefSubmission() {
    return isLocalSiteEnvironment();
  }

  function buildRequestedFeatureSummary() {
    return [
      ...new Set([
        ...getCheckedValues("functionalityNeeded[]"),
        ...getCheckedValues("setupPriorities[]"),
        ...getCheckedValues("threeDNeeds[]")
      ].filter(Boolean))
    ];
  }

  function buildProjectBriefSummary(estimateDetails) {
    return {
      serviceLabel: estimateDetails.serviceLabel,
      templateLabel: estimateDetails.templateLabel,
      rangeText: estimateDetails.rangeText,
      requestedFeatures: buildRequestedFeatureSummary(),
      timelineSummary: estimateDetails.timelineSummary
    };
  }

  function redirectToProjectBriefThankYou(estimateDetails) {
    persistProjectBriefSummary(buildProjectBriefSummary(estimateDetails));
    window.location.href = "thank-you.html";
  }

  async function submitProjectBriefToNetlify(payload) {
    const submitAction = intakeForm.getAttribute("action") || "/";
    const submitUrl = new URL(submitAction, window.location.href).toString();
    let response;

    try {
      response = await fetch(submitUrl, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: payload
      });
    } catch (error) {
      console.error("Project brief network request failed", {
        submitUrl,
        message: error?.message || String(error)
      });
      throw error;
    }

    if (!response.ok) {
      let responsePreview = "";

      try {
        responsePreview = await response.text();
      } catch (readError) {
        responsePreview = `[unable to read response body: ${readError.message}]`;
      }

      console.error("Project brief submission failed", {
        submitUrl,
        status: response.status,
        statusText: response.statusText,
        responsePreview: responsePreview.slice(0, 300)
      });

      throw new Error(`Submission failed with status ${response.status}`);
    }

    console.info("Project brief submitted successfully", {
      submitUrl,
      status: response.status,
      statusText: response.statusText
    });
  }

  async function submitProjectBrief(event) {
    event.preventDefault();
    clearSubmitError();
    const selectedService = serviceSelect?.value || "";

    if (
      !intakeForm.reportValidity() ||
      !validateTemplateSelection(selectedService)
    ) {
      return;
    }

    const estimateDetails = calculateEstimateDetails();
    const payload = buildSubmissionPayload(estimateDetails);

    try {
      setSubmitState(true);

      if (isLocalProjectBriefSubmission()) {
        console.info(
          "Project brief submitted locally; skipping Netlify form POST and redirecting to thank-you page."
        );
        redirectToProjectBriefThankYou(estimateDetails);
        return;
      }

      await submitProjectBriefToNetlify(payload);
      redirectToProjectBriefThankYou(estimateDetails);
    } catch (error) {
      console.error("Project brief submission error", error);
      showSubmitError(
        "Something went wrong while sending your project brief. Please try again in a moment. If the issue continues, email me directly so your request is not lost."
      );
    } finally {
      setSubmitState(false);
    }
  }

  function updateIntakeVisibility() {
    const selectedService = serviceSelect?.value || "";

    updateTemplateSectionVisibility(selectedService);
    updateTemplateFieldRequirements(selectedService);
    updateServiceGuidance(selectedService);

    const templateMode = getTemplateMode(selectedService);

    document.querySelectorAll(".conditional-block").forEach((block) => {
      if (
        block.hasAttribute("data-page-content") ||
        block.hasAttribute("data-field-name") ||
        block.hasAttribute("data-feature-values")
      ) {
        return;
      }

      const services = block.dataset.services
        ? block.dataset.services
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [];
      const modes = block.dataset.templateMode
        ? block.dataset.templateMode
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [];
      const matchesService =
        services.length === 0 || services.includes(selectedService);
      const matchesTemplateMode =
        modes.length === 0 || modes.includes(templateMode);
      const parentConditionalBlock = block.parentElement?.closest(".conditional-block");
      const parentAllowsVisibility =
        !parentConditionalBlock || !parentConditionalBlock.hidden;

      toggleConditionalBlock(
        block,
        parentAllowsVisibility && matchesService && matchesTemplateMode
      );
    });

    updatePageContentVisibility();
    updateFieldValueConditionalBlocks();
    updateFeatureConditionalBlocks(selectedService, templateMode);
    populateEstimatePreview(calculateEstimateDetails());
  }

  renderTemplateCards();
  applyIntakePrefill();
  updateTemplateCardSelection();
  resetBrandPaletteBuilder();
  updateIntakeVisibility();

  serviceSelect?.addEventListener("change", updateIntakeVisibility);
  intakeForm
    .querySelectorAll("#logo-status, #favicon-status")
    .forEach((field) => field.addEventListener("change", updateFieldValueConditionalBlocks));
  intakeForm
    .querySelectorAll('input[name="pagesNeeded[]"]')
    .forEach((field) => field.addEventListener("change", updatePageContentVisibility));
  intakeForm
    .querySelectorAll('input[name="functionalityNeeded[]"]')
    .forEach((field) => field.addEventListener("change", updateIntakeVisibility));
  brandPalettePresetInputs.forEach((input) =>
    input.addEventListener("change", () => {
      brandPaletteHasUserInput = true;
      applyBrandPalettePreset(input.checked ? input.value : "");
    })
  );
  [primaryBrandColorInput, secondaryBrandColorInput, accentBrandColorInput]
    .filter(Boolean)
    .forEach((input) =>
      input.addEventListener("input", () => {
        brandPaletteHasUserInput = true;
        syncCustomPaletteSelection();
        updateBrandColorSwatches();
      })
    );
  accentColorEnabledInput?.addEventListener("change", () => {
    brandPaletteHasUserInput = true;
    syncCustomPaletteSelection();
    updateAccentColorVisibility();
    updateBrandColorSwatches();
  });
  intakeForm.addEventListener("submit", submitProjectBrief);
  intakeForm.addEventListener("input", () => {
    populateEstimatePreview(calculateEstimateDetails());
  });
  intakeForm.addEventListener("change", () => {
    populateEstimatePreview(calculateEstimateDetails());
  });
}

const productGallerySlides = [
  { suffix: "", label: "Homepage \u2022 1/3", altLabel: "Homepage" },
  { suffix: "-contact", label: "Contact Form \u2022 2/3", altLabel: "Contact Form" },
  { suffix: "-footer", label: "Footer \u2022 3/3", altLabel: "Footer" }
];

const templateFamilyDefinitions = [
  {
    name: "CosmicOrbit",
    kicker: "Futuristic Sales Website",
    summary:
      "A bold futuristic template family for creators, SaaS brands, digital products, and service businesses that want a polished premium look.",
    products: ["cosmicorbit-lite", "cosmicorbit-pro"]
  },
  {
    name: "Abyssal Blue",
    kicker: "Ocean-Inspired Website",
    summary:
      "A modern underwater-inspired template family for travel brands, attractions, hospitality businesses, and adventure-focused services.",
    products: ["abyssalblue-lite", "abyssalblue-pro"]
  },
  {
    name: "VelvetUI",
    kicker: "Luxury Modern Website",
    summary:
      "A soft luxury template family for premium service brands, coaches, creators, digital offers, and personal brands that want a polished online look.",
    products: ["velvetui-lite", "velvetui-pro"]
  },
  {
    name: "WorldView Global",
    kicker: "Business Website Template",
    summary:
      "A clean professional template family for agencies, consultants, startups, and service-based businesses that need a strong foundation.",
    products: ["worldviewglobal-lite", "worldviewglobal-pro"]
  }
];

const templateCollectionDefinitions = {
  lite: [
    "cosmicorbit-lite",
    "abyssalblue-lite",
    "velvetui-lite",
    "worldviewglobal-lite"
  ],
  pro: [
    "cosmicorbit-pro",
    "abyssalblue-pro",
    "velvetui-pro",
    "worldviewglobal-pro"
  ],
  interactive: ["cosmicorbit-pro", "abyssalblue-pro", "worldviewglobal-pro"]
};

const featuredTemplateProductOrder = [
  "cosmicorbit-pro",
  "cosmicorbit-lite",
  "abyssalblue-pro",
  "abyssalblue-lite",
  "velvetui-pro",
  "velvetui-lite",
  "worldviewglobal-pro",
  "worldviewglobal-lite"
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entityMap[character] || character;
  });
}

function getStoreProduct(productKey) {
  if (typeof productCatalog === "undefined") {
    return null;
  }

  return productCatalog[productKey] || null;
}

function attachImageFallback(image) {
  const fallbackSrc = image?.dataset.fallbackSrc;

  if (!image || !fallbackSrc) {
    return;
  }

  image.addEventListener("error", () => {
    if (image.dataset.fallbackApplied === "true") {
      return;
    }

    image.dataset.fallbackApplied = "true";

    if (image.getAttribute("src") !== fallbackSrc) {
      image.setAttribute("src", fallbackSrc);
    }
  });
}

function buildTemplateCardMarkup(productKey) {
  const product = getStoreProduct(productKey);

  if (!product) {
    return "";
  }

  const featuresMarkup = product.features
    .slice(0, 4)
    .map((feature) => `<li>${escapeHtml(feature)}</li>`)
    .join("");

  const fallbackAttribute = product.imageFallback
    ? ` data-gallery-fallback="${escapeHtml(product.imageFallback)}"`
    : "";

  return `
    <article class="template-version-card">
      <div
        class="template-version-media product-gallery"
        data-gallery-product="${escapeHtml(product.name)}"
        data-gallery-slug="${escapeHtml(product.key)}"${fallbackAttribute}
        aria-label="${escapeHtml(product.name)} preview gallery"
      >
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} homepage preview" />
      </div>
      <div class="template-version-body">
        <div class="template-version-top">
          <span class="template-version-pill">${escapeHtml(product.version)}</span>
          <div class="template-version-price">
            <span class="original-price">${escapeHtml(product.originalPriceLabel)}</span>
            <span class="promo-price">${escapeHtml(product.priceLabel)}</span>
          </div>
        </div>
        <h4>${escapeHtml(product.name)}</h4>
        <ul class="template-version-features">
          ${featuresMarkup}
        </ul>
        <div class="template-version-actions">
          <a href="cart.html?product=${escapeHtml(product.key)}" class="btn primary">Buy ${escapeHtml(product.version)}</a>
          <a href="${escapeHtml(product.preview)}" target="_blank" rel="noopener noreferrer" class="btn secondary">Live Preview</a>
        </div>
      </div>
    </article>
  `;
}

function buildTemplateFamilyMarkup(family) {
  const cardsMarkup = family.products.map(buildTemplateCardMarkup).join("");

  return `
    <article class="template-family-row">
      <div class="template-family-head">
        <div>
          <p class="template-family-kicker">${escapeHtml(family.kicker)}</p>
          <h3>${escapeHtml(family.name)}</h3>
        </div>
        <p class="template-family-summary">${escapeHtml(family.summary)}</p>
      </div>
      <div class="template-version-grid">
        ${cardsMarkup}
      </div>
    </article>
  `;
}

function buildFeaturedSlideMarkup(productKey, index) {
  const product = getStoreProduct(productKey);

  if (!product) {
    return "";
  }

  const badgeLabel = "Launch Promo";

  const fallbackAttribute = product.imageFallback
    ? ` data-fallback-src="${escapeHtml(product.imageFallback)}"`
    : "";

  return `
    <article class="featured-product template-version-card featured-template-card featured-carousel-slide${index === 0 ? " is-active" : ""}">
      <div class="featured-template-head">
        <h3>${escapeHtml(product.name)}</h3>
        <span class="template-version-pill">${escapeHtml(badgeLabel)}</span>
      </div>
      <div class="template-version-media">
        <img
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.name)} website template preview"${fallbackAttribute}
        />
      </div>
      <div class="template-version-actions">
        <a href="cart.html?product=${escapeHtml(product.key)}" class="btn primary">Buy ${escapeHtml(product.version)} - ${escapeHtml(product.priceLabel)}</a>
        <a
          href="${escapeHtml(product.preview)}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn secondary"
        >
          View ${escapeHtml(product.version)} Preview
        </a>
      </div>
    </article>
  `;
}

function initializeProductGallery(gallery) {
  if (gallery.dataset.galleryReady === "true") {
    return;
  }

  const productName = gallery.dataset.galleryProduct;
  const slug = gallery.dataset.gallerySlug;

  if (!productName || !slug) {
    return;
  }

  gallery.dataset.galleryReady = "true";

  const fallbackImage = gallery.querySelector("img");
  const fallbackSrc =
    gallery.dataset.galleryFallback ||
    fallbackImage?.getAttribute("src") ||
    `images/${slug}.png`;

  gallery.innerHTML = `
    <div class="gallery-track" aria-live="polite"></div>
    <button class="gallery-btn gallery-prev" type="button" aria-label="Previous ${productName} screenshot">&#8249;</button>
    <button class="gallery-btn gallery-next" type="button" aria-label="Next ${productName} screenshot">&#8250;</button>
  `;

  const track = gallery.querySelector(".gallery-track");
  const prevButton = gallery.querySelector(".gallery-prev");
  const nextButton = gallery.querySelector(".gallery-next");

  if (!track || !prevButton || !nextButton) {
    return;
  }

  const product = getStoreProduct(slug);
  const gallerySlides = Array.isArray(product?.galleryImages) && product.galleryImages.length
    ? product.galleryImages
    : productGallerySlides.map((slide) => ({
        ...slide,
        src: `images/${slug}${slide.suffix}.png`
      }));

  const slides = gallerySlides.map((slide, index) => {
    const figure = document.createElement("figure");
    figure.className = `gallery-slide${index === 0 ? " is-active" : ""}`;
    figure.innerHTML = `
      <img
        class="gallery-image"
        src="${escapeHtml(slide.src)}"
        alt="${productName} ${slide.altLabel} preview"
        loading="${index === 0 ? "eager" : "lazy"}"
        decoding="async"
      />
      <figcaption class="gallery-label">${slide.label}</figcaption>
    `;

    const image = figure.querySelector(".gallery-image");

    image?.addEventListener("error", () => {
      if (!image || image.dataset.fallbackApplied === "true") {
        return;
      }

      image.dataset.fallbackApplied = "true";

      if (image.getAttribute("src") !== fallbackSrc) {
        image.setAttribute("src", fallbackSrc);
      }
    });

    track.appendChild(figure);
    return figure;
  });

  let currentIndex = 0;

  function showSlide(nextIndex) {
    slides[currentIndex]?.classList.remove("is-active");
    slides[nextIndex]?.classList.add("is-active");
    currentIndex = nextIndex;
  }

  nextButton.addEventListener("click", () => {
    showSlide((currentIndex + 1) % slides.length);
  });

  prevButton.addEventListener("click", () => {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  });
}

function initializeProductGalleries(root = document) {
  root.querySelectorAll(".product-gallery").forEach(initializeProductGallery);
}

function renderTemplateSections() {
  const allTemplatesContainer = document.querySelector('[data-template-section="all"]');

  if (!allTemplatesContainer || typeof productCatalog === "undefined") {
    return;
  }

  allTemplatesContainer.innerHTML = templateFamilyDefinitions
    .map(buildTemplateFamilyMarkup)
    .join("");

  Object.entries(templateCollectionDefinitions).forEach(([sectionKey, productKeys]) => {
    const sectionContainer = document.querySelector(`[data-template-section="${sectionKey}"]`);

    if (!sectionContainer) {
      return;
    }

    sectionContainer.innerHTML = productKeys.map(buildTemplateCardMarkup).join("");
  });

  initializeProductGalleries(document);
}

function renderFeaturedCarousel() {
  const carouselShell = document.querySelector("[data-featured-carousel]");

  if (!carouselShell || typeof productCatalog === "undefined") {
    return;
  }

  const track = carouselShell.querySelector(".featured-carousel-track");
  const dots = carouselShell.querySelector(".featured-carousel-dots");
  const prevButton = carouselShell.querySelector(".featured-carousel-prev");
  const nextButton = carouselShell.querySelector(".featured-carousel-next");

  if (!track || !dots || !prevButton || !nextButton) {
    return;
  }

  track.innerHTML = featuredTemplateProductOrder
    .map((productKey, index) => buildFeaturedSlideMarkup(productKey, index))
    .join("");

  dots.innerHTML = featuredTemplateProductOrder
    .map(
      (_, index) =>
        `<button class="featured-carousel-dot${index === 0 ? " is-active" : ""}" type="button" aria-label="Show featured template ${index + 1}"${index === 0 ? ' aria-current="true"' : ""}></button>`
    )
    .join("");
  dots.removeAttribute("aria-hidden");

  const slides = Array.from(track.querySelectorAll(".featured-carousel-slide"));
  const indicators = Array.from(dots.querySelectorAll(".featured-carousel-dot"));

  if (!slides.length) {
    return;
  }

  track.querySelectorAll("img[data-fallback-src]").forEach(attachImageFallback);

  let currentIndex = 0;
  let rotationTimer = null;

  function syncCarouselHeight() {
    const activeSlide = slides[currentIndex];

    if (!activeSlide) {
      return;
    }

    const slideHeight = activeSlide.offsetHeight || activeSlide.scrollHeight;

    if (slideHeight > 0) {
      track.style.height = `${slideHeight}px`;
    }
  }

  function showSlide(nextIndex) {
    if (nextIndex === currentIndex || !slides[nextIndex]) {
      return;
    }

    slides[currentIndex]?.classList.remove("is-active");
    indicators[currentIndex]?.classList.remove("is-active");
    indicators[currentIndex]?.removeAttribute("aria-current");
    slides[nextIndex]?.classList.add("is-active");
    indicators[nextIndex]?.classList.add("is-active");
    indicators[nextIndex]?.setAttribute("aria-current", "true");
    currentIndex = nextIndex;
    syncCarouselHeight();
  }

  function moveCarousel(direction) {
    showSlide((currentIndex + direction + slides.length) % slides.length);
  }

  function startRotation() {
    if (rotationTimer || slides.length < 2) {
      return;
    }

    rotationTimer = window.setInterval(() => {
      showSlide((currentIndex + 1) % slides.length);
    }, 4500);
  }

  function stopRotation() {
    if (!rotationTimer) {
      return;
    }

    window.clearInterval(rotationTimer);
    rotationTimer = null;
  }

  slides.forEach((slide) => {
    slide.querySelectorAll("img").forEach((image) => {
      image.addEventListener("load", syncCarouselHeight);
    });
  });

  prevButton.addEventListener("click", () => {
    stopRotation();
    moveCarousel(-1);
    startRotation();
  });

  nextButton.addEventListener("click", () => {
    stopRotation();
    moveCarousel(1);
    startRotation();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      stopRotation();
      showSlide(index);
      startRotation();
    });
  });

  carouselShell.addEventListener("mouseenter", stopRotation);
  carouselShell.addEventListener("mouseleave", startRotation);
  carouselShell.addEventListener("focusin", stopRotation);
  carouselShell.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!carouselShell.contains(document.activeElement) && !carouselShell.matches(":hover")) {
        startRotation();
      }
    }, 0);
  });

  window.addEventListener("resize", syncCarouselHeight);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopRotation();
      return;
    }

    if (!carouselShell.matches(":hover")) {
      startRotation();
    }
  });

  window.requestAnimationFrame(() => {
    syncCarouselHeight();
    window.setTimeout(syncCarouselHeight, 150);
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    startRotation();
  }
}

renderTemplateSections();
initializeProductGalleries(document);
renderFeaturedCarousel();

