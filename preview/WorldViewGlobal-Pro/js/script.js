(() => {
  // Shared site interactions for navigation, motion, contact routing, and thank-you messaging.
  // These selectors map to the shared layout used across every page in the template.
  const body = document.body;
  const worldBackground = document.getElementById("worldBackground");
  const earthStage = document.getElementById("earthStage");
  const earth = document.getElementById("earth");
  const cursorGlow = document.getElementById("cursorGlow");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const mobileMenuLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll("a")) : [];
  const allPageLinks = Array.from(document.querySelectorAll("[data-page-link]"));
  const tiltCards = Array.from(document.querySelectorAll("[data-tilt]"));
  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  const yearNodes = Array.from(document.querySelectorAll("[data-current-year]"));
  const contactForm = document.querySelector("[data-contact-form]");
  const contactIntentField = document.querySelector("[data-intent-field]");
  const contactTopicField = document.querySelector("[data-topic-field]");
  const contactSummary = document.querySelector("[data-contact-summary]");
  const thankYouIntent = document.querySelector("[data-thank-you-intent]");
  const thankYouDetail = document.querySelector("[data-thank-you-detail]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const localPreviewHosts = new Set(["127.0.0.1", "localhost"]);
  const url = new URL(window.location.href);
  const pageKey = body.dataset.page || "";

  let reduceMotion = prefersReducedMotion.matches;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let glowX = pointerX;
  let glowY = pointerY;
  let tiltX = 0;
  let tiltY = 0;
  let sceneX = 0;
  let sceneY = 0;
  let rafId = 0;
  let isVisible = !document.hidden;
  let lastFocusedElement = null;
  let revealObserver = null;

  const intentLabels = {
    purchase: "Strategy call request",
    contact: "General inquiry",
    "setup-help": "Delivery planning request",
    "custom-branding": "Custom scope request",
    support: "Support request"
  };

  const topicByIntent = {
    purchase: "purchase",
    contact: "general",
    "setup-help": "setup-help",
    "custom-branding": "custom-branding",
    support: "support"
  };

  const thankYouMessages = {
    purchase: "Our team is preparing the right advisor, timeline, and next-step recommendation for your consultation.",
    "setup-help": "We are ready to review delivery timing, scope alignment, and the fastest path into the work.",
    "custom-branding": "We are ready to scope tailored research, regional focus areas, and presentation preferences.",
    support: "We are ready to help with service questions, deliverable details, or follow-up planning.",
    contact: "We are ready to follow up with the right next step for your inquiry."
  };

  function setCurrentYear() {
    const year = new Date().getFullYear();
    yearNodes.forEach((node) => {
      node.textContent = String(year);
    });
  }

  function setActivePageLink() {
    allPageLinks.forEach((link) => {
      const linkPage = link.dataset.pageLink;
      const isActive = linkPage === pageKey;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function createParticles() {
    // Decorative particles stay lightweight and are skipped when motion is reduced.
    if (!worldBackground || reduceMotion) {
      return;
    }

    const particleCount = window.innerWidth < 721 ? 12 : 22;
    const existing = worldBackground.querySelectorAll(".space-particle").length;

    if (existing >= particleCount) {
      return;
    }

    for (let index = existing; index < particleCount; index += 1) {
      const particle = document.createElement("span");
      const size = Math.random() * 2.8 + 1;
      particle.className = "space-particle";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.45 + 0.2}`;
      particle.style.setProperty("--particle-speed", `${Math.random() * 8 + 8}s`);
      particle.style.setProperty("--particle-delay", `${Math.random() * -10}s`);
      worldBackground.appendChild(particle);
    }
  }

  function updateScene() {
    sceneX += (tiltX - sceneX) * 0.05;
    sceneY += (tiltY - sceneY) * 0.05;
    glowX += (pointerX - glowX) * 0.12;
    glowY += (pointerY - glowY) * 0.12;

    if (worldBackground) {
      worldBackground.style.transform = `rotateX(${sceneY * -2.6}deg) rotateY(${sceneX * 3.2}deg)`;
    }

    if (earthStage) {
      earthStage.style.transform = `translate3d(${sceneX * -44}px, ${sceneY * -34}px, 0) rotateX(${sceneY * -7}deg) rotateY(${sceneX * 11}deg)`;
    }

    if (earth) {
      earth.style.filter = `brightness(${1 + Math.abs(sceneX) * 0.06}) saturate(${1.02 + Math.abs(sceneY) * 0.08})`;
    }

    if (cursorGlow) {
      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;
    }

    rafId = window.requestAnimationFrame(updateScene);
  }

  function stopScene() {
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  function maybeRunScene() {
    stopScene();
    if (!reduceMotion && isVisible) {
      updateScene();
    }
  }

  function onPointerMove(event) {
    pointerX = event.clientX;
    pointerY = event.clientY;
    tiltX = event.clientX / window.innerWidth - 0.5;
    tiltY = event.clientY / window.innerHeight - 0.5;
  }

  function bindTiltCards() {
    if (reduceMotion) {
      tiltCards.forEach((card) => {
        card.style.transform = "";
      });
      return;
    }

    tiltCards.forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const localX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const localY = (event.clientY - bounds.top) / bounds.height - 0.5;
        const rotateX = localY * -8;
        const rotateY = localX * 10;
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  function bindRevealObserver() {
    if (!revealItems.length) {
      return;
    }

    if (revealObserver) {
      revealObserver.disconnect();
      revealObserver = null;
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  function trapFocus(event) {
    if (event.key !== "Tab" || !mobileMenu || mobileMenu.hidden) {
      return;
    }

    const focusable = mobileMenu.querySelectorAll("a, button");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first || !last) {
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function closeMenu() {
    if (!navToggle || !mobileMenu || mobileMenu.hidden) {
      return;
    }

    navToggle.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    body.classList.remove("menu-open");
    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  function openMenu() {
    if (!navToggle || !mobileMenu) {
      return;
    }

    lastFocusedElement = document.activeElement;
    navToggle.setAttribute("aria-expanded", "true");
    mobileMenu.hidden = false;
    body.classList.add("menu-open");
    const firstLink = mobileMenuLinks[0];
    if (firstLink) {
      firstLink.focus();
    }
  }

  function bindMenu() {
    // The same menu controller powers tablet and mobile navigation patterns.
    if (!navToggle || !mobileMenu) {
      return;
    }

    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
      trapFocus(event);
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Node) || mobileMenu.hidden) {
        return;
      }

      if (!mobileMenu.contains(target) && !navToggle.contains(target)) {
        closeMenu();
      }
    });
  }

  function populateContactIntent() {
    // Contact links can pre-select the right inquiry flow from pricing and CTA sections.
    if (!contactForm) {
      return;
    }

    const intent = url.searchParams.get("intent") || "contact";
    const plan = url.searchParams.get("plan") || "WorldView Global services";
    const source = url.searchParams.get("source") || "website";
    const intentLabel = intentLabels[intent] || intentLabels.contact;

    if (contactIntentField) {
      contactIntentField.value = intent;
    }

    if (contactTopicField) {
      contactTopicField.value = topicByIntent[intent] || "general";
    }

    if (contactSummary) {
      contactSummary.textContent = `${intentLabel} for ${plan} from ${source}.`;
    }

    contactForm.addEventListener("submit", (event) => {
      try {
        window.sessionStorage.setItem("worldview-last-intent", intentLabel);
        window.sessionStorage.setItem("worldview-last-plan", plan);
        window.sessionStorage.setItem("worldview-last-intent-key", intent);
      } catch (error) {
        // Session storage can be blocked in private or restricted browsing modes.
      }

      if (window.location.protocol === "file:" || localPreviewHosts.has(window.location.hostname)) {
        event.preventDefault();
        window.location.href = "thank-you.html";
      }
    });
  }

  function populateThankYou() {
    // Thank-you messaging reflects the last saved inquiry intent for a more polished handoff.
    if (!thankYouIntent || !thankYouDetail) {
      return;
    }

    let intent = "Your message";
    let plan = "WorldView Global services";
    let intentKey = "contact";

    try {
      intent = window.sessionStorage.getItem("worldview-last-intent") || intent;
      plan = window.sessionStorage.getItem("worldview-last-plan") || plan;
      intentKey = window.sessionStorage.getItem("worldview-last-intent-key") || intentKey;
      window.sessionStorage.removeItem("worldview-last-intent");
      window.sessionStorage.removeItem("worldview-last-plan");
      window.sessionStorage.removeItem("worldview-last-intent-key");
    } catch (error) {
      // Keep the default thank-you copy when storage is unavailable.
    }

    thankYouIntent.textContent = intent;
    thankYouDetail.textContent = thankYouMessages[intentKey] || `${plan} is queued for the next step.`;
  }

  function handleVisibility() {
    isVisible = !document.hidden;
    maybeRunScene();
  }

  function handleMotionPreferenceChange(event) {
    reduceMotion = event.matches;
    body.classList.toggle("no-motion", reduceMotion);
    maybeRunScene();
    bindRevealObserver();
  }

  function bindMotionPreferenceListener() {
    // Match both modern and legacy MediaQueryList listener APIs.
    if (typeof prefersReducedMotion.addEventListener === "function") {
      prefersReducedMotion.addEventListener("change", handleMotionPreferenceChange);
    } else if (typeof prefersReducedMotion.addListener === "function") {
      prefersReducedMotion.addListener(handleMotionPreferenceChange);
    }
  }

  setCurrentYear();
  setActivePageLink();
  body.classList.toggle("no-motion", reduceMotion);
  createParticles();
  bindTiltCards();
  bindRevealObserver();
  bindMenu();
  populateContactIntent();
  populateThankYou();

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("visibilitychange", handleVisibility);
  bindMotionPreferenceListener();

  maybeRunScene();
})();

(() => {
  // Decorative shooting stars are managed separately so buyers can disable or replace them easily.
  function createShootingStar() {
    const scene = document.getElementById("worldBackground");
    if (!scene) {
      return;
    }

    const star = document.createElement("span");
    const duration = 1200 + Math.random() * 1200;

    star.className = "shooting-star";
    star.style.top = `${Math.random() * 70}%`;
    star.style.left = `${50 + Math.random() * 50}%`;
    star.style.animation = `shootingStar ${duration}ms linear forwards`;

    scene.appendChild(star);

    window.setTimeout(() => {
      star.remove();
    }, duration);
  }

  window.setInterval(() => {
    const count = Math.random() > 0.7 ? 3 : 1;

    for (let index = 0; index < count; index += 1) {
      window.setTimeout(createShootingStar, index * 200);
    }
  }, 3000);
})();
