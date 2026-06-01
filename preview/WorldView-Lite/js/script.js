(() => {
  const body = document.body;
  const worldBackground = document.getElementById("worldBackground");
  const earthStage = document.getElementById("earthStage");
  const earth = document.getElementById("earth");
  const cursorGlow = document.getElementById("cursorGlow");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const mobileMenuLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll("a")) : [];
  const navLinks = Array.from(document.querySelectorAll("[data-section-link]"));
  const tiltCards = Array.from(document.querySelectorAll("[data-tilt]"));
  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  const yearNodes = Array.from(document.querySelectorAll("[data-current-year]"));
  const thankYouCopy = document.querySelector("[data-thank-you-copy]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const url = new URL(window.location.href);

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

  function setCurrentYear() {
    const year = new Date().getFullYear();
    yearNodes.forEach((node) => {
      node.textContent = String(year);
    });
  }

  function createParticles() {
    if (!worldBackground || reduceMotion) {
      return;
    }

    const particleCount = window.innerWidth < 721 ? 10 : 18;
    const existing = worldBackground.querySelectorAll(".space-particle").length;

    if (existing >= particleCount) {
      return;
    }

    for (let index = existing; index < particleCount; index += 1) {
      const particle = document.createElement("span");
      const size = Math.random() * 2.6 + 1;
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
      worldBackground.style.transform = `rotateX(${sceneY * -2.3}deg) rotateY(${sceneX * 2.9}deg)`;
    }

    if (earthStage) {
      earthStage.style.transform = `translate3d(${sceneX * -36}px, ${sceneY * -28}px, 0) rotateX(${sceneY * -6}deg) rotateY(${sceneX * 9}deg)`;
    }

    if (earth) {
      earth.style.filter = `brightness(${1 + Math.abs(sceneX) * 0.05}) saturate(${1.02 + Math.abs(sceneY) * 0.06})`;
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

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
  }

  function bindSectionSpy() {
    if (!navLinks.length || !("IntersectionObserver" in window)) {
      return;
    }

    const sectionMap = new Map();
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) {
        return;
      }
      const section = document.querySelector(href);
      if (section) {
        sectionMap.set(section, link);
      }
    });

    if (!sectionMap.size) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = sectionMap.get(entry.target);
        if (!link) {
          return;
        }

        if (entry.isIntersecting) {
          navLinks.forEach((item) => {
            item.classList.remove("is-active");
            item.removeAttribute("aria-current");
          });
          link.classList.add("is-active");
          link.setAttribute("aria-current", "true");
        }
      });
    }, {
      threshold: 0.45,
      rootMargin: "-20% 0px -45% 0px"
    });

    sectionMap.forEach((_, section) => observer.observe(section));
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

  function populateThankYou() {
    if (!thankYouCopy) {
      return;
    }

    const plan = url.searchParams.get("plan") || "WorldView Lite";
    const intent = url.searchParams.get("intent") || "purchase";
    const copy = intent === "purchase"
      ? `${plan} is queued as the selected package for this preview flow. In a real storefront, you would confirm checkout, delivery, or invoice details here.`
      : `${plan} is ready for the next step in this preview flow.`;

    thankYouCopy.textContent = copy;
  }

  function handleVisibilityChange() {
    isVisible = !document.hidden;
    maybeRunScene();
  }

  function handleReducedMotionChange(event) {
    reduceMotion = event.matches;
    body.classList.toggle("no-motion", reduceMotion);
    maybeRunScene();
    bindRevealObserver();
  }

  function init() {
    setCurrentYear();
    createParticles();
    bindTiltCards();
    bindRevealObserver();
    bindSectionSpy();
    bindMenu();
    populateThankYou();

    body.classList.toggle("no-motion", reduceMotion);

    window.addEventListener("pointermove", onPointerMove, {
      passive: true
    });

    window.addEventListener("resize", createParticles);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    prefersReducedMotion.addEventListener("change", handleReducedMotionChange);
    maybeRunScene();
  }

  init();
})();
