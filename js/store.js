const STORE_CART_KEY = "webDevLadyTemplateCart";

const templateProducts = [
  {
    id: "techpulse-it-wordpress",
    name: "TechPulse IT Services WordPress Theme",
    tier: "pro",
    type: "WordPress Theme",
    format: "wordpress",
    formatTags: ["wordpress", "tech"],
    businessTags: ["it-services", "tech-support", "local-business", "tech"],
    business: "IT Services / Tech Support",
    description: "A professional WordPress theme for IT companies, managed service providers, cybersecurity firms, and tech support businesses that need a credible, lead-focused website.",
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
    name: "FreshNest Cleaning Website Template",
    tier: "lite",
    type: "Landing Page",
    format: "landing-page",
    formatTags: ["landing-page", "html-website", "business"],
    businessTags: ["cleaning-business", "home-services", "local-business"],
    business: "Cleaning companies and home service businesses",
    description: "A responsive cleaning business landing page template with service highlights, trust-building sections, pricing content, and clear calls to action for local leads.",
    price: 9.99,
    image: "images/FreshNest/freshnest-index.png",
    soldCount: 7,
    demo: "preview/FreshNest%20Cleaning/index.html",
    downloadFile: "downloads/FreshNest Cleaning.zip",
    tags: ["Cleaning Business", "Home Services", "Local Business", "HTML Website"]
  },
  {
    id: "rainblossom-lite",
    name: "Rain Blossom Lite Wedding Landing Page Template",
    tier: "lite",
    type: "Landing Page",
    format: "landing-page",
    formatTags: ["landing-page", "html-website", "creative"],
    businessTags: ["wedding", "event-planning", "local-business"],
    business: "Wedding planners and event coordinators",
    description: "A romantic wedding landing page template for planners and venues, with polished package, gallery, testimonial, and inquiry sections in a responsive HTML design.",
    price: 9.99,
    image: "images/Rain Blossom Lite/rainblossom-lite.png",
    soldCount: 3,
    demo: "preview/RainBlossom-Lite/index.html",
    downloadFile: "downloads/RainBlossom-Lite.zip",
    tags: ["Wedding", "Event Planning", "Landing Page", "HTML Website"]
  },
  {
    id: "rainblossom-pro",
    name: "Rain Blossom Pro Wedding Website Template",
    tier: "pro",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "creative"],
    businessTags: ["wedding", "event-planning", "local-business"],
    business: "Wedding planners and event coordinators",
    description: "A romantic multi-page wedding website template for planners and venues, featuring galleries, packages, testimonials, FAQs, and a complete inquiry flow.",
    price: 19.99,
    image: "images/Rain Blossom Pro/rainblossom-pro.png",
    soldCount: 2,
    demo: "preview/RainBlossom-Pro/index.html",
    downloadFile: "downloads/RainBlossom-Pro.zip",
    tags: ["Wedding", "Event Planning", "HTML Website", "Local Business"]
  },
  {
    id: "apexmobile-detailing",
    name: "Apex Mobile Detailing Website Template",
    tier: "pro",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "business"],
    businessTags: ["auto-detailing", "home-services", "local-business", "business"],
    business: "Mobile detailing, auto care, and local service businesses",
    description: "A responsive multi-page auto detailing website template with services, pricing, project gallery, and booking-focused contact pages for mobile detailers.",
    price: 19.99,
    image: "images/Apex Mobile Detailing/apex-home.png",
    soldCount: 1,
    demo: "preview/ApexMobile-Detailing/index.html",
    downloadFile: "downloads/ApexMobile-Detailing.zip",
    tags: ["Auto Detailing", "Local Business", "HTML Website"]
  },
  {
    id: "beachwave",
    name: "BeachWave Resort Website Template",
    tier: "pro",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "creative"],
    businessTags: ["travel", "hospitality", "tourism", "local-business"],
    business: "Resorts, vacation rentals, beach clubs, travel brands, and hospitality businesses",
    description: "A premium animated resort website template for hotels, vacation rentals, beach clubs, and travel brands, with pages for stays, amenities, galleries, pricing, FAQs, and inquiries.",
    price: 19.99,
    image: "images/Beach Wave/beachwave-mobile.png",
    soldCount: 1,
    demo: "preview/BeachWave/index.html",
    downloadFile: "downloads/BeachWave.zip",
    tags: ["Travel", "Hospitality", "HTML Website"]
  },
  {
    id: "abyssalblue-lite",
    name: "Abyssal Blue Lite Tourism Website Template",
    tier: "lite",
    type: "Full Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "creative"],
    businessTags: ["travel", "tourism", "aquarium", "local-business"],
    business: "Aquariums, attractions, tourism brands, and experience businesses",
    description: "An immersive tourism website template for aquariums, attractions, tours, and experience brands, with responsive visitor-focused sections and ocean-inspired visuals.",
    price: 9.99,
    image: "images/Abyssal Blue Lite/abyssalblue-lite.png",
    soldCount: 5,
    demo: "preview/AbyssalBlue-Lite/index.html",
    downloadFile: "downloads/AbyssalBlue-Lite.zip",
    tags: ["Travel", "Tourism", "Aquarium"]
  },
  {
    id: "abyssalblue-pro",
    name: "Abyssal Blue Pro Aquarium Website Template",
    tier: "pro",
    type: "Full Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "creative"],
    businessTags: ["travel", "tourism", "aquarium", "local-business"],
    business: "Aquariums, attractions, tourism brands, and experience businesses",
    description: "A premium multi-page aquarium and tourism website template with booking, gallery, wildlife, visitor information, and contact pages for attraction-based businesses.",
    price: 19.99,
    image: "images/Abyssal Blue Pro/abyssalblue-pro.png",
    soldCount: 2,
    demo: "preview/AbyssalBlue-Pro/index.html",
    downloadFile: "downloads/AbyssalBlue-Pro.zip",
    tags: ["Travel", "Tourism", "Aquarium"]
  },
  {
    id: "cosmicorbit-lite",
    name: "Cosmic Orbit Lite Creative Website Template",
    tier: "lite",
    type: "Full Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "tech", "creative"],
    businessTags: ["travel", "tech", "creative", "business"],
    business: "Futuristic brands, event experiences, digital launches, and creative service businesses",
    description: "A bold futuristic website template for creators, startups, digital brands, and event launches that want a responsive, high-impact online presence.",
    price: 9.99,
    image: "images/Cosmic Orbit Lite/cosmicorbit-lite.png",
    soldCount: 6,
    demo: "preview/CosmicOrbit-Lite/index.html",
    downloadFile: "downloads/CosmicOrbit-Lite.zip",
    tags: ["Creative", "Tech", "Travel"]
  },
  {
    id: "cosmicorbit-pro",
    name: "Cosmic Orbit Pro Creative Business Website Template",
    tier: "pro",
    type: "Full Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "travel", "tech", "creative"],
    businessTags: ["travel", "tech", "creative", "business"],
    business: "Futuristic brands, event experiences, digital launches, and creative service businesses",
    description: "A premium futuristic multi-page website template for creative businesses, launches, events, and digital services, with polished layouts and conversion-focused sections.",
    price: 19.99,
    image: "images/Cosmic Orbit Pro/cosmicorbit-pro-home.png",
    soldCount: 3,
    demo: "preview/CosmicOrbit-Pro/index.html",
    downloadFile: "downloads/CosmicOrbit-Pro.zip",
    tags: ["Creative", "Tech", "Travel"]
  },
  {
    id: "velvetui-lite",
    name: "Velvet UI Lite Interior Design Website Template",
    tier: "lite",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "portfolio", "creative", "business"],
    businessTags: ["home-design", "portfolio", "creative"],
    business: "Home design studios, interior designers, portfolios, and boutique creative brands",
    description: "A refined interior design website template for home stylists, boutique studios, and portfolio-led creative businesses that need an elegant responsive showcase.",
    price: 9.99,
    image: "images/VelvetUI Lite/velvetui-lite-home.png",
    soldCount: 5,
    demo: "preview/VelvetUI-Lite/index.html",
    downloadFile: "downloads/VelvetUI-Lite.zip",
    tags: ["Home Design", "Portfolio", "Creative"]
  },
  {
    id: "velvetui-pro",
    name: "Velvet UI Pro Interior Design Website Template",
    tier: "pro",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "portfolio", "creative", "business"],
    businessTags: ["home-design", "portfolio", "creative"],
    business: "Home design studios, interior designers, portfolios, and boutique creative brands",
    description: "A premium multi-page interior design website template with portfolio, services, project showcase, FAQ, and contact pages for studios and luxury creative brands.",
    price: 19.99,
    image: "images/VelvetUI Pro/velvetui-pro.png",
    soldCount: 2,
    demo: "preview/VelvetUI-Pro/index.html",
    downloadFile: "downloads/VelvetUI-Pro.zip",
    tags: ["Home Design", "Portfolio", "Creative"]
  },
  {
    id: "worldviewglobal-lite",
    name: "WorldView Global Lite Business Website Template",
    tier: "lite",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "business", "consulting"],
    businessTags: ["business"],
    business: "Consultants, agencies, startups, and professional service businesses",
    description: "A professional business website template for consultants, agencies, startups, and service providers that need a responsive, credible online presence.",
    price: 9.99,
    image: "images/WorldView Lite/worldview-lite.png",
    soldCount: 4,
    demo: "preview/WorldViewGlobal-Lite/index.html",
    downloadFile: "downloads/WorldViewGlobal-Lite.zip",
    tags: ["Business", "Consulting", "HTML Website"]
  },
  {
    id: "worldviewglobal-pro",
    name: "WorldView Global Pro Business Website Template",
    tier: "pro",
    type: "HTML Website",
    format: "full-website",
    formatTags: ["full-website", "html-website", "business", "consulting"],
    businessTags: ["business"],
    business: "Consultants, agencies, startups, and professional service businesses",
    description: "A premium multi-page business website template with solutions, use cases, showcase, pricing, FAQ, and contact pages for agencies and professional service companies.",
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
    businessTags: ["restaurant", "local-business", "business"],
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
    businessTags: ["real-estate", "local-business", "business"],
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
    businessTags: ["fitness", "local-business"],
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
    businessTags: ["beauty-salon", "local-business"],
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
    businessTags: ["construction", "local-business", "business"],
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
    businessTags: ["home-design", "portfolio", "creative"],
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
    if (!Array.isArray(parsedCart)) return [];

    const normalizedItems = new Map();
    parsedCart.forEach((item) => {
      const productId = String(item?.id || "").trim();
      if (!getProduct(productId)) return;
      const quantity = Math.max(1, Math.min(99, Number.parseInt(item.quantity, 10) || 1));
      const existingQuantity = normalizedItems.get(productId) || 0;
      normalizedItems.set(productId, Math.min(99, existingQuantity + quantity));
    });

    return Array.from(normalizedItems, ([id, quantity]) => ({ id, quantity }));
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
    existingItem.quantity = Math.min(99, existingItem.quantity + 1);
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  writeCart(cart);
  return true;
}

function initializeCartFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");
  const product = getProduct(productId);

  if (!product || !addToCart(productId)) return;
  trackStoreEvent("add_to_cart", {
    currency: "USD",
    value: product.price,
    items: [getAnalyticsItem(product, 1)]
  });

  params.delete("product");
  const nextQuery = params.toString();
  const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);
}

function updateCartItem(productId, quantity) {
  const nextQuantity = Math.max(1, Math.min(99, Number.parseInt(quantity, 10) || 1));
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

function getAnalyticsItem(product, quantity = 1) {
  return {
    item_id: product.id,
    item_name: product.name,
    item_category: product.business,
    item_variant: product.type,
    price: product.price,
    quantity
  };
}

function trackStoreEvent(eventName, parameters) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }
  // TODO: Load the existing GA4 tag on storefront pages to enable add_to_cart
  // and begin_checkout reporting. This no-op guard keeps checkout independent
  // from analytics until site-wide consent/tracking is intentionally enabled.
}

async function startCartCheckout(button) {
  const checkoutMessage = document.getElementById("checkoutMessage");
  const cart = readCart().filter((item) => getProduct(item.id));

  if (!cart.length) {
    if (checkoutMessage) checkoutMessage.textContent = "Add a template to your cart before checkout.";
    return;
  }

  trackStoreEvent("begin_checkout", {
    currency: "USD",
    value: getCartTotal(cart),
    items: cart.map((item) => getAnalyticsItem(getProduct(item.id), item.quantity))
  });

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

const PRODUCT_PAGE_URLS = {
  "techpulse-it-wordpress": "techpulse-it-services-wordpress-theme.html",
  "freshnest": "freshnest-cleaning-website-template.html",
  "rainblossom-lite": "rain-blossom-lite-wedding-landing-page.html",
  "rainblossom-pro": "rain-blossom-pro-wedding-website-template.html",
  "apexmobile-detailing": "apex-mobile-detailing-website-template.html",
  "beachwave": "beachwave-resort-website-template.html",
  "abyssalblue-lite": "abyssal-blue-lite-tourism-website-template.html",
  "abyssalblue-pro": "abyssal-blue-pro-aquarium-website-template.html",
  "cosmicorbit-lite": "cosmic-orbit-lite-creative-website-template.html",
  "cosmicorbit-pro": "cosmic-orbit-pro-creative-business-template.html",
  "velvetui-lite": "velvet-ui-lite-interior-design-template.html",
  "velvetui-pro": "velvet-ui-pro-interior-design-template.html",
  "worldviewglobal-lite": "worldview-global-lite-business-template.html",
  "worldviewglobal-pro": "worldview-global-pro-business-template.html"
};

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
  const demoAttributes = product.demoType === "video"
    ? ` target="_blank" rel="noopener noreferrer" data-demo-video="${product.demo}" data-demo-title="${product.name} Demo"`
    : ' target="_blank" rel="noopener noreferrer"';

  return `
    <article id="${product.id}" class="product-card product-card--compact${isComingSoon ? " product-card--coming-soon" : ""}" data-template-card data-tier="${product.tier}" data-format="${product.format}" data-filter-formats="${formatTags.join(" ")}" data-business="${businessTags.join(" ")}" data-search="${searchText}">
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
        <h3><a class="product-card__title-link" href="${PRODUCT_PAGE_URLS[product.id] || `templates.html?search=${encodeURIComponent(product.name)}`}">${product.name}</a></h3>
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
          ${isComingSoon
            ? '<button class="store-button store-button--secondary" type="button" disabled>Coming Soon</button>'
            : `<a class="store-button store-button--secondary" href="${product.demo}"${demoAttributes}>View Demo</a>`}
          ${isComingSoon ? "" : `<button class="store-button store-button--primary js-add-cart" type="button" data-product-id="${product.id}">Add to Cart</button>`}
        </div>
      </div>
    </article>
  `;
}

function normalizeTemplateFilter(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function productMatchesCategory(product, category) {
  const normalizedCategory = normalizeTemplateFilter(category);
  if (!normalizedCategory || normalizedCategory === "all") return true;

  const categoryAliases = {
    "business-templates": "business",
    it: "it-services",
    cleaning: "cleaning-business",
    html: "html-website"
  };
  const matchValue = categoryAliases[normalizedCategory] || normalizedCategory;
  const categoryValues = [
    product.name,
    product.description,
    product.type,
    product.format,
    product.business,
    ...(product.formatTags || []),
    ...(product.businessTags || []),
    ...(product.tags || [])
  ].map(normalizeTemplateFilter);

  return categoryValues.includes(matchValue);
}

function getFilteredTemplateProducts(search, category) {
  const normalizedSearch = String(search || "").trim().toLowerCase();
  return [...templateProducts, ...comingSoonProducts].filter((product) => {
    const searchMatches = !normalizedSearch || getProductSearchText(product).includes(normalizedSearch);
    return searchMatches && productMatchesCategory(product, category);
  });
}

function renderProductBrowser(products = [...templateProducts, ...comingSoonProducts]) {
  const resultsGrid = document.querySelector("[data-template-results]");
  if (!resultsGrid) return;
  resultsGrid.innerHTML = products.map(buildProductCard).join("");
}

function initializeTemplateBrowser() {
  const browser = document.querySelector("[data-template-browser]");
  if (!browser) return;

  const searchInput = browser.querySelector("[data-template-search]");
  const searchForm = browser.querySelector("[data-template-search-form]");
  const filterToggle = browser.querySelector("[data-template-filter-toggle]");
  const filterOptions = browser.querySelector("[data-template-filter-options]");
  const emptyMessage = document.querySelector("[data-template-empty]");
  const resultCount = document.querySelector("[data-template-result-count]");
  const categoryButtons = Array.from(browser.querySelectorAll("[data-template-category]"));
  const params = new URLSearchParams(window.location.search);
  const currentSearch = params.get("search")?.trim() || "";
  const currentCategory = normalizeTemplateFilter(params.get("category") || "all");
  const isResultsPage = browser.dataset.templateBrowserMode === "results";

  function setActiveCategory(category) {
    categoryButtons.forEach((button) => {
      const isActive = normalizeTemplateFilter(button.dataset.templateCategory) === category;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function goToResults(category = currentCategory) {
    const nextParams = new URLSearchParams();
    const searchValue = searchInput?.value.trim() || "";
    if (searchValue) nextParams.set("search", searchValue);
    if (category) nextParams.set("category", category);
    const query = nextParams.toString();
    window.location.href = `templates.html${query ? `?${query}` : ""}`;
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      goToResults(normalizeTemplateFilter(button.dataset.templateCategory || "all"));
    });
  });

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    goToResults(currentCategory === "all" ? "" : currentCategory);
  });

  if (filterToggle && filterOptions) {
    filterToggle.addEventListener("click", () => {
      const isOpen = browser.classList.toggle("is-filter-open");
      filterToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (searchInput && isResultsPage) searchInput.value = currentSearch;
  setActiveCategory(currentCategory);

  if (isResultsPage) {
    const matches = getFilteredTemplateProducts(currentSearch, currentCategory);
    renderProductBrowser(matches);
    if (resultCount) {
      resultCount.textContent = `${matches.length} template${matches.length === 1 ? "" : "s"} found`;
    }
    if (emptyMessage) emptyMessage.hidden = matches.length !== 0;
  }
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
            <input class="cart-quantity js-cart-quantity" type="number" min="1" max="99" step="1" value="${item.quantity}" data-product-id="${item.id}">
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
      const product = getProduct(addButton.dataset.productId);
      if (product && addToCart(product.id)) {
        trackStoreEvent("add_to_cart", {
          currency: "USD",
          value: product.price,
          items: [getAnalyticsItem(product, 1)]
        });
        addButton.textContent = "Added";
        window.setTimeout(() => {
          addButton.textContent = "Add to Cart";
        }, 1200);
      }
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

