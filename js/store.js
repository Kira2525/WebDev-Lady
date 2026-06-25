const STORE_CART_KEY = "webDevLadyTemplateCart";

const templateProducts = [
  {
    id: "techpulse-it-wordpress",
    name: "TechPulse IT",
    tier: "pro",
    type: "WordPress Theme",
    format: "wordpress",
    formatTags: ["wordpress", "tech"],
    businessTags: ["it-services", "tech-support", "local-business", "tech"],
    business: "IT Services / Tech Support",
    description: "A professional WordPress theme for IT companies, managed service providers, cybersecurity firms, and tech support businesses.",
    price: 29.99,
    image: "images/TechPulse IT/home.png",
    soldCount: 4,
    demo: "preview/Word%20Press/TechPuseIT-demo.mp4",
    demoType: "video",
    downloadFile: "downloads/techpulse-it.zip",
    tags: ["WordPress", "IT Services", "Tech Support", "Local Business", "Pro"]
  },
  {
    id: "freshnest",
    name: "FreshNest",
    tier: "lite",
    type: "Landing Page",
    format: "landing-page",
    formatTags: ["landing-page", "html-website", "business"],
    businessTags: ["cleaning-business", "home-services", "local-business"],
    business: "Cleaning companies and home service businesses",
    description: "A focused landing page for cleaning businesses that need a clear offer, trust-building sections, and fast lead capture.",
    price: 9.99,
    image: "images/FreshNest/freshnest-index.png",
    soldCount: 7,
    demo: "preview/FreshNest%20Cleaning/index.html",
    downloadFile: "downloads/freshnest.zip",
    tags: ["Cleaning Business", "Home Services", "Local Business", "HTML Website"]
  },
  {
    id: "rainblossom-lite",
    name: "Rain Blossom Lite",
    tier: "lite",
    type: "Landing Page",
    format: "landing-page",
    formatTags: ["landing-page", "html-website", "creative"],
    businessTags: ["wedding", "event-planning", "local-business"],
    business: "Wedding planners and event coordinators",
    description: "A polished landing page for wedding professionals who want to showcase packages, style, testimonials, and inquiry next steps.",
    price: 9.99,
    image: "images/Rain Blossom Lite/rainblossom-lite.png",
    soldCount: 3,
    demo: "preview/RainBlossom-Lite/index.html",
    downloadFile: "downloads/rain blossom lite.zip",
    tags: ["Wedding", "Event Planning", "Landing Page", "HTML Website"]
  },
  {
    id: "rainblossom-pro",
    name: "Rain Blossom Pro",
    tier: "pro",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "creative"],
    businessTags: ["wedding", "event-planning", "local-business"],
    business: "Wedding planners and event coordinators",
    description: "A romantic multi-page wedding website template with expanded pages, galleries, packages, testimonials, and contact flow.",
    price: 19.99,
    image: "images/Rain Blossom Pro/rainblossom-pro.png",
    soldCount: 2,
    demo: "preview/RainBlossom-Pro/index.html",
    downloadFile: "downloads/rain blossom pro.zip",
    tags: ["Wedding", "Event Planning", "HTML Website", "Local Business"]
  },
  {
    id: "abyssalblue-lite",
    name: "Abyssal Blue Lite",
    tier: "lite",
    type: "Full Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "creative"],
    businessTags: ["travel", "tourism", "aquarium", "local-business"],
    business: "Aquariums, attractions, tourism brands, and experience businesses",
    description: "A visual HTML website for tourism and attraction brands with immersive sections and visitor-focused content.",
    price: 9.99,
    image: "images/Abyssal Blue Lite/abyssalblue-lite.png",
    soldCount: 5,
    demo: "preview/AbyssalBlue-Lite/index.html",
    downloadFile: "downloads/AbyssalBlue-Lite.zip",
    tags: ["Travel", "Tourism", "Aquarium"]
  },
  {
    id: "abyssalblue-pro",
    name: "Abyssal Blue Pro",
    tier: "pro",
    type: "Full Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "creative"],
    businessTags: ["travel", "tourism", "aquarium", "local-business"],
    business: "Aquariums, attractions, tourism brands, and experience businesses",
    description: "A premium multi-page HTML website for tourism brands with booking, gallery, wildlife, and visitor information pages.",
    price: 19.99,
    image: "images/Abyssal Blue Pro/abyssalblue-pro.png",
    soldCount: 2,
    demo: "preview/AbyssalBlue-Pro/index.html",
    downloadFile: "downloads/AbyssalBlue-Pro.zip",
    tags: ["Travel", "Tourism", "Aquarium"]
  },
  {
    id: "cosmicorbit-lite",
    name: "Cosmic Orbit Lite",
    tier: "lite",
    type: "Full Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "tech", "creative"],
    businessTags: ["travel", "tech", "creative", "business"],
    business: "Futuristic brands, event experiences, digital launches, and creative service businesses",
    description: "A bold futuristic website template for creators, digital brands, startups, and premium launches.",
    price: 9.99,
    image: "images/Cosmic Orbit Lite/cosmicorbit-lite.png",
    soldCount: 6,
    demo: "preview/CosmicOrbit-Lite/index.html",
    downloadFile: "downloads/CosmicOrbit-Lite.zip",
    tags: ["Creative", "Tech", "Travel"]
  },
  {
    id: "cosmicorbit-pro",
    name: "Cosmic Orbit Pro",
    tier: "pro",
    type: "Full Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "tech", "creative"],
    businessTags: ["travel", "tech", "creative", "business"],
    business: "Futuristic brands, event experiences, digital launches, and creative service businesses",
    description: "A premium cosmic-inspired website for launches, events, services, and high-impact creative brands.",
    price: 19.99,
    image: "images/Cosmic Orbit Pro/cosmicorbit-pro-home.png",
    soldCount: 3,
    demo: "preview/CosmicOrbit-Pro/index.html",
    downloadFile: "downloads/CosmicOrbit-Pro.zip",
    tags: ["Creative", "Tech", "Travel"]
  },
  {
    id: "velvetui-lite",
    name: "Velvet UI Lite",
    tier: "lite",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "portfolio", "creative", "business"],
    businessTags: ["home-design", "portfolio", "creative"],
    business: "Home design studios, interior designers, portfolios, and boutique creative brands",
    description: "A refined editorial-style website for interior design, home styling, and portfolio-driven businesses.",
    price: 9.99,
    image: "images/VelvetUI Lite/velvetui-lite-home.png",
    soldCount: 5,
    demo: "preview/VelvetUI-Lite/index.html",
    downloadFile: "downloads/VelvetUI-Lite.zip",
    tags: ["Home Design", "Portfolio", "Creative"]
  },
  {
    id: "velvetui-pro",
    name: "Velvet UI Pro",
    tier: "pro",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "portfolio", "creative", "business"],
    businessTags: ["home-design", "portfolio", "creative"],
    business: "Home design studios, interior designers, portfolios, and boutique creative brands",
    description: "A premium full website for design studios with portfolio, services, FAQ, contact, and project showcase pages.",
    price: 19.99,
    image: "images/VelvetUI Pro/velvetui-pro.png",
    soldCount: 2,
    demo: "preview/VelvetUI-Pro/index.html",
    downloadFile: "downloads/VelvetUI-Pro.zip",
    tags: ["Home Design", "Portfolio", "Creative"]
  },
  {
    id: "worldviewglobal-lite",
    name: "WorldView Global Lite",
    tier: "lite",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "business", "consulting"],
    businessTags: ["business"],
    business: "Consultants, agencies, startups, and professional service businesses",
    description: "A clean global business website for service providers that need a polished, professional online presence.",
    price: 9.99,
    image: "images/WorldView Lite/worldview-lite.png",
    soldCount: 4,
    demo: "preview/WorldViewGlobal-Lite/index.html",
    downloadFile: "downloads/WorldViewGlobal-Lite.zip",
    tags: ["Business", "Consulting", "HTML Website"]
  },
  {
    id: "worldviewglobal-pro",
    name: "WorldView Global Pro",
    tier: "pro",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "business", "consulting"],
    businessTags: ["business"],
    business: "Consultants, agencies, startups, and professional service businesses",
    description: "A premium multi-page business website with solutions, use cases, showcase, pricing, FAQ, and contact pages.",
    price: 19.99,
    image: "images/WorldView Pro/worldview-pro.png",
    soldCount: 1,
    demo: "preview/WorldViewGlobal-Pro/index.html",
    downloadFile: "downloads/WorldViewGlobal-Pro.zip",
    tags: ["Business", "Consulting", "HTML Website"]
  }
];

const comingSoonProducts = [
  {
    id: "coming-soon-01",
    name: "Coming Soon 01 - Restaurant Website",
    tier: "coming-soon",
    type: "Coming Soon",
    format: "coming-soon",
    formatTags: ["coming-soon", "wordpress", "landing-page", "business"],
    businessTags: ["restaurant", "real-estate", "fitness", "beauty-salon", "construction", "consulting", "cleaning-business", "it-services", "home-design", "wedding", "travel", "local-business", "business"],
    business: "Restaurants, cafes, food trucks, and local hospitality brands",
    description: "A restaurant-focused website template is being prepared for menus, reservations, and local discovery.",
    image: "assets/images/placeholders/coming-soon-01.png",
    demo: "#",
    tags: ["Restaurant", "Local Business", "Coming Soon"]
  },
  {
    id: "coming-soon-02",
    name: "Coming Soon 02 - Real Estate Website",
    tier: "coming-soon",
    type: "Coming Soon",
    format: "coming-soon",
    formatTags: ["coming-soon", "wordpress", "landing-page", "full-website", "business"],
    businessTags: ["restaurant", "real-estate", "fitness", "beauty-salon", "construction", "consulting", "cleaning-business", "it-services", "home-design", "wedding", "travel", "local-business", "business"],
    business: "Real estate agents, brokerages, and property-focused businesses",
    description: "A real estate website template is coming soon for listings, lead capture, and local market credibility.",
    image: "assets/images/placeholders/coming-soon-02.png",
    demo: "#",
    tags: ["Real Estate", "Business", "Coming Soon"]
  },
  {
    id: "coming-soon-03",
    name: "Coming Soon 03 - Fitness Coach Website",
    tier: "coming-soon",
    type: "Coming Soon",
    format: "coming-soon",
    formatTags: ["coming-soon", "wordpress", "landing-page", "full-website"],
    businessTags: ["restaurant", "real-estate", "fitness", "beauty-salon", "construction", "consulting", "cleaning-business", "it-services", "home-design", "wedding", "local-business"],
    business: "Fitness coaches, trainers, gyms, and wellness service providers",
    description: "A fitness template is coming soon for programs, testimonials, class offers, and booking-focused calls to action.",
    image: "assets/images/placeholders/coming-soon-03.png",
    demo: "#",
    tags: ["Fitness", "Wellness", "Coming Soon"]
  },
  {
    id: "coming-soon-04",
    name: "Coming Soon 04 - Beauty Salon Website",
    tier: "coming-soon",
    type: "Coming Soon",
    format: "coming-soon",
    formatTags: ["coming-soon", "wordpress", "landing-page", "full-website", "creative"],
    businessTags: ["restaurant", "real-estate", "fitness", "beauty-salon", "construction", "consulting", "cleaning-business", "it-services", "home-design", "wedding", "local-business"],
    business: "Beauty salons, stylists, spas, and personal care businesses",
    description: "A beauty salon website template is coming soon for services, galleries, pricing, and appointment requests.",
    image: "assets/images/placeholders/coming-soon-04.png",
    demo: "#",
    tags: ["Beauty/Salon", "Creative", "Coming Soon"]
  },
  {
    id: "coming-soon-05",
    name: "Coming Soon 05 - Construction Website",
    tier: "coming-soon",
    type: "Coming Soon",
    format: "coming-soon",
    formatTags: ["coming-soon", "wordpress", "business"],
    businessTags: ["restaurant", "real-estate", "fitness", "beauty-salon", "construction", "consulting", "cleaning-business", "it-services", "wedding", "business"],
    business: "Construction companies, contractors, builders, and trade service businesses",
    description: "A construction website template is coming soon for project galleries, service areas, estimates, and trust-building proof.",
    image: "assets/images/placeholders/coming-soon-05.png",
    demo: "#",
    tags: ["Construction", "Business", "Coming Soon"]
  },
  {
    id: "coming-soon-06",
    name: "Coming Soon 06 - Home Design Website",
    tier: "coming-soon",
    type: "Coming Soon",
    format: "coming-soon",
    formatTags: ["coming-soon", "html-website", "portfolio", "creative", "business"],
    businessTags: ["restaurant", "real-estate", "fitness", "beauty-salon", "construction", "consulting"],
    business: "Home design, staging, interiors, and visual portfolio businesses",
    description: "A home design website template is coming soon for portfolios, project stories, services, and inquiry generation.",
    image: "assets/images/placeholders/coming-soon-06.png",
    demo: "#",
    tags: ["Home Design", "Portfolio", "Coming Soon"]
  }
];

function formatStorePrice(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function readCart() {
  try {
    const parsedCart = JSON.parse(localStorage.getItem(STORE_CART_KEY) || "[]");
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.warn("Unable to read cart", error);
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem(STORE_CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function getProduct(productId) {
  return templateProducts.find((product) => product.id === productId);
}

function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return false;

  const cart = readCart();
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  writeCart(cart);
  return true;
}

function initializeCartFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");

  if (!productId || !addToCart(productId)) return;

  params.delete("product");
  const nextQuery = params.toString();
  const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);
}

function updateCartItem(productId, quantity) {
  const nextQuantity = Math.max(1, Number(quantity) || 1);
  const cart = readCart().map((item) =>
    item.id === productId ? { ...item, quantity: nextQuantity } : item
  );
  writeCart(cart);
  renderCartPage();
}

function removeFromCart(productId) {
  writeCart(readCart().filter((item) => item.id !== productId));
  renderCartPage();
}

function getCartTotal(cart) {
  const totalCents = cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return product ? total + Math.round(product.price * 100) * item.quantity : total;
  }, 0);

  return totalCents / 100;
}

async function startCartCheckout(button) {
  const checkoutMessage = document.getElementById("checkoutMessage");
  const cart = readCart().filter((item) => getProduct(item.id));

  if (!cart.length) {
    if (checkoutMessage) checkoutMessage.textContent = "Add a template to your cart before checkout.";
    return;
  }

  const previousText = button.textContent;
  button.disabled = true;
  button.textContent = "Starting checkout...";
  if (checkoutMessage) checkoutMessage.textContent = "Sending your cart to secure checkout.";

  try {
    const response = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: cart.map((item) => ({
          productKey: item.id,
          quantity: item.quantity
        }))
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to start checkout.");
    }

    if (data.url) {
      window.location.href = data.url;
      return;
    }

    throw new Error("Checkout session did not return a redirect URL.");
  } catch (error) {
    if (checkoutMessage) checkoutMessage.textContent = error.message;
    button.disabled = false;
    button.textContent = previousText;
  }
}

function updateCartCount() {
  const count = readCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = String(count);
  });
}

function getProductSearchText(product) {
  return [
    product.name,
    product.description,
    product.type,
    product.format,
    product.business,
    ...(product.formatTags || []),
    ...(product.businessTags || []),
    ...(product.tags || [])
  ]
    .join(" ")
    .toLowerCase();
}

function buildProductCard(product) {
  const isComingSoon = product.tier === "coming-soon";
  const formatTags = product.formatTags || [product.format];
  const businessTags = product.businessTags || [];
  const visibleTags = product.tags || [];
  const tierLabel = isComingSoon ? "Coming Soon" : product.tier === "pro" ? "Pro" : "Lite";
  const searchText = getProductSearchText(product);
  const demoAttributes = isComingSoon
    ? ' aria-disabled="true"'
    : product.demoType === "video"
      ? ` target="_blank" rel="noopener noreferrer" data-demo-video="${product.demo}" data-demo-title="${product.name} Demo"`
      : ' target="_blank" rel="noopener noreferrer"';

  return `
    <article class="product-card product-card--compact${isComingSoon ? " product-card--coming-soon" : ""}" data-template-card data-tier="${product.tier}" data-format="${product.format}" data-filter-formats="${formatTags.join(" ")}" data-business="${businessTags.join(" ")}" data-search="${searchText}">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name} preview" loading="lazy">
        ${!isComingSoon && product.soldCount ? `<span class="product-card__sold-badge">${product.soldCount} sold</span>` : ""}
      </div>
      <div class="product-card__body">
        ${isComingSoon ? "" : `
        <div class="product-card__meta">
          <span>${tierLabel}</span>
          <span>${product.type}</span>
        </div>`}
        <h3>${product.name}</h3>
        <div class="product-card__tags" aria-label="${product.name} tags">
          ${visibleTags.slice(0, isComingSoon ? 3 : visibleTags.length).map((tag) => `<span class="product-card__tag">${tag}</span>`).join("")}
        </div>
        <p>${product.description}</p>
        ${isComingSoon ? "" : `
        <div class="product-card__footer">
          <span class="product-price">${formatStorePrice(product.price)}</span>
          <span class="product-sale-label">50% Off Launch Discount</span>
        </div>`}
        <div class="product-card__actions">
          <a class="store-button store-button--secondary" href="${product.demo}"${demoAttributes}>${isComingSoon ? "Coming Soon" : "View Demo"}</a>
          ${isComingSoon ? "" : `<button class="store-button store-button--primary js-add-cart" type="button" data-product-id="${product.id}">Add to Cart</button>`}
        </div>
      </div>
    </article>
  `;
}

function renderProductBrowser() {
  const resultsGrid = document.querySelector("[data-template-results]");
  if (!resultsGrid) return;

  const allProducts = [...templateProducts, ...comingSoonProducts];
  resultsGrid.innerHTML = allProducts.map(buildProductCard).join("");
}

function initializeTemplateBrowser() {
  const browser = document.querySelector("[data-template-browser]");
  if (!browser) return;

  const searchInput = browser.querySelector("[data-template-search]");
  const filterToggle = browser.querySelector("[data-template-filter-toggle]");
  const filterOptions = browser.querySelector("[data-template-filter-options]");
  const clearButton = browser.querySelector("[data-clear-template-filters]");
  const emptyMessage = browser.querySelector("[data-template-empty]");
  const formatButtons = Array.from(browser.querySelectorAll('[data-filter-type="format"]'));
  const businessButtons = Array.from(browser.querySelectorAll('[data-filter-type="business"]'));
  const tierButtons = Array.from(browser.querySelectorAll('[data-filter-type="tier"]'));
  const filters = {
    tier: "all",
    format: "all",
    business: "",
    search: ""
  };

  function setActiveButton(buttons, activeValue) {
    buttons.forEach((button) => {
      const isActive = button.dataset.filterValue === activeValue;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyTemplateFilters() {
    const cards = Array.from(document.querySelectorAll("[data-template-card]"));
    let visibleCount = 0;

    cards.forEach((card) => {
      const cardFormats = (card.dataset.filterFormats || card.dataset.format || "").split(" ").filter(Boolean);
      const cardBusinessTags = (card.dataset.business || "").split(" ").filter(Boolean);
      const tierMatches = filters.tier === "all" || card.dataset.tier === filters.tier;
      const formatMatches = filters.format === "all" || cardFormats.includes(filters.format);
      const businessMatches = !filters.business || cardBusinessTags.includes(filters.business);
      const searchMatches = !filters.search || (card.dataset.search || "").includes(filters.search);
      const isVisible = tierMatches && formatMatches && businessMatches && searchMatches;

      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (emptyMessage) {
      emptyMessage.hidden = visibleCount !== 0;
    }
  }

  tierButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filters.tier = button.dataset.filterValue || "all";
      setActiveButton(tierButtons, filters.tier);
      applyTemplateFilters();
    });
  });

  formatButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filters.format = button.dataset.filterValue || "all";
      setActiveButton(formatButtons, filters.format);
      applyTemplateFilters();
    });
  });

  businessButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedValue = button.dataset.filterValue || "";
      filters.business = filters.business === selectedValue ? "" : selectedValue;
      setActiveButton(businessButtons, filters.business);
      applyTemplateFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      filters.search = searchInput.value.trim().toLowerCase();
      applyTemplateFilters();
    });
  }

  if (filterToggle && filterOptions) {
    filterToggle.addEventListener("click", () => {
      const isOpen = browser.classList.toggle("is-filter-open");
      filterToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      filters.tier = "all";
      filters.format = "all";
      filters.business = "";
      filters.search = "";
      if (searchInput) searchInput.value = "";
      setActiveButton(tierButtons, "all");
      setActiveButton(formatButtons, "all");
      setActiveButton(businessButtons, "");
      applyTemplateFilters();
    });
  }

  setActiveButton(tierButtons, "all");
  setActiveButton(formatButtons, "all");
  setActiveButton(businessButtons, "");
  applyTemplateFilters();
}

function renderCartPage() {
  const cartItemsElement = document.getElementById("cartItems");
  const cartTotalElement = document.getElementById("cartTotal");
  const cartSubtotalElement = document.getElementById("cartSubtotal");
  const checkoutButton = document.getElementById("checkoutButton");

  if (!cartItemsElement || !cartTotalElement || !cartSubtotalElement) return;

  const savedCart = readCart();
  const cart = savedCart.filter((item) => getProduct(item.id));
  if (cart.length !== savedCart.length) {
    writeCart(cart);
  }

  if (!cart.length) {
    cartItemsElement.innerHTML = '<p class="empty-cart">Your cart is empty. Browse templates and add one to get started.</p>';
    cartSubtotalElement.textContent = "$0";
    cartTotalElement.textContent = "$0";
    if (checkoutButton) checkoutButton.disabled = true;
    return;
  }

  cartItemsElement.innerHTML = cart
    .map((item) => {
      const product = getProduct(item.id);
      return `
        <div class="cart-row">
          <div>
            <strong>${product.name}</strong><br>
            <span>${product.type}</span><br>
            <span>${product.business}</span><br>
            <span>50% Off Launch Discount</span>
          </div>
          <strong>${formatStorePrice(product.price * item.quantity)}</strong>
          <label>
            <span class="sr-only">Quantity for ${product.name}</span>
            <input class="cart-quantity js-cart-quantity" type="number" min="1" value="${item.quantity}" data-product-id="${item.id}">
          </label>
          <button class="cart-remove js-remove-cart" type="button" data-product-id="${item.id}">Remove</button>
        </div>
      `;
    })
    .join("");

  const total = formatStorePrice(getCartTotal(cart));
  cartSubtotalElement.textContent = total;
  cartTotalElement.textContent = total;
  if (checkoutButton) checkoutButton.disabled = false;
}

function initializeStoreHeader() {
  const header = document.querySelector(".store-header");
  const toggle = header?.querySelector(".store-menu-toggle");
  const nav = header?.querySelector(".store-nav");

  if (!header || !toggle || !nav) return;

  const closeMenu = () => {
    header.classList.remove("is-nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function closeStoreVideoModal() {
  const modal = document.getElementById("storeVideoModal");
  const video = modal?.querySelector("video");
  const source = video?.querySelector("source");

  if (!modal || !video || !source) return;

  video.pause();
  video.currentTime = 0;
  source.removeAttribute("src");
  video.load();
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-store-video-open");
}

function getStoreVideoModal() {
  let modal = document.getElementById("storeVideoModal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "storeVideoModal";
  modal.className = "store-video-modal";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-labelledby", "storeVideoModalTitle");
  modal.innerHTML = `
    <div class="store-video-modal__backdrop" data-store-video-close></div>
    <div class="store-video-modal__dialog">
      <div class="store-video-modal__header">
        <h2 id="storeVideoModalTitle">Template Demo</h2>
        <button class="store-video-modal__close" type="button" data-store-video-close aria-label="Close video demo">&times;</button>
      </div>
      <video class="store-video-modal__video" controls playsinline preload="metadata">
        <source src="" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  `;

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-store-video-close]")) {
      closeStoreVideoModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeStoreVideoModal();
    }
  });

  document.body.appendChild(modal);
  return modal;
}

function openStoreVideoModal(link) {
  const videoSource = link.dataset.demoVideo;
  if (!videoSource) return;

  const modal = getStoreVideoModal();
  const title = modal.querySelector("#storeVideoModalTitle");
  const video = modal.querySelector("video");
  const source = video.querySelector("source");

  title.textContent = link.dataset.demoTitle || "Template Demo";
  source.src = videoSource;
  video.load();
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-store-video-open");
  video.play().catch(() => {});
  modal.querySelector(".store-video-modal__close").focus();
}
function initializeStore() {
  initializeStoreHeader();
  initializeCartFromUrl();
  renderProductBrowser();
  initializeTemplateBrowser();
  renderCartPage();
  updateCartCount();

  document.addEventListener("click", (event) => {
    const videoDemoLink = event.target.closest("[data-demo-video]");
    const addButton = event.target.closest(".js-add-cart");
    const removeButton = event.target.closest(".js-remove-cart");
    const checkoutButton = event.target.closest("#checkoutButton");

    if (videoDemoLink) {
      event.preventDefault();
      openStoreVideoModal(videoDemoLink);
      return;
    }

    if (addButton) {
      addToCart(addButton.dataset.productId);
      addButton.textContent = "Added";
      window.setTimeout(() => {
        addButton.textContent = "Add to Cart";
      }, 1200);
    }

    if (removeButton) {
      removeFromCart(removeButton.dataset.productId);
    }

    if (checkoutButton) {
      event.preventDefault();
      startCartCheckout(checkoutButton);
    }
  });

  document.addEventListener("change", (event) => {
    const quantityInput = event.target.closest(".js-cart-quantity");
    if (quantityInput) {
      updateCartItem(quantityInput.dataset.productId, quantityInput.value);
    }
  });
}

window.templateProducts = templateProducts;
window.comingSoonProducts = comingSoonProducts;
document.addEventListener("DOMContentLoaded", initializeStore);

