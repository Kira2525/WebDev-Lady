const body = document.body;
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function closeMenu() {
  if (!menuBtn || !navLinks) {
    return;
  }

  navLinks.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
  body.classList.remove("nav-open");
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    body.classList.toggle("nav-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("is-open")) {
      return;
    }

    if (menuBtn.contains(event.target) || navLinks.contains(event.target)) {
      return;
    }

    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const currentYearTargets = document.querySelectorAll("[data-current-year]");

currentYearTargets.forEach((target) => {
  target.textContent = String(new Date().getFullYear());
});

const pageSections = document.querySelectorAll("main section[id]");
const sectionLinks = navLinks
  ? Array.from(navLinks.querySelectorAll('a[href^="#"]'))
  : [];

function updateActiveSection(targetId) {
  if (!sectionLinks.length) {
    return;
  }

  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === "#" + targetId;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if (sectionLinks.length && pageSections.length) {
  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").replace("#", "");

      updateActiveSection(targetId);
    });
  });

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          updateActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.35, 0.6],
        rootMargin: "-20% 0px -45% 0px"
      }
    );

    pageSections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }
}

const tiltCards = document.querySelectorAll(".tilt-card");

if (supportsHover && !reduceMotionQuery.matches) {
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform =
        "perspective(1000px) rotateX(" +
        rotateX +
        "deg) rotateY(" +
        rotateY +
        "deg) translateY(-4px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

const revealElements = document.querySelectorAll(
  ".feature-card, .preview-card, .pricing-card, .split, .dashboard-sidebar, .chart-card, .mini-card"
);

if (reduceMotionQuery.matches || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "none";
  });
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(34px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(element);
  });
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.className = "status-message is-visible is-success";
    formStatus.textContent =
      "Demo inquiry captured. Connect this form to your email or form service before launch.";

    contactForm.reset();
  });
}
