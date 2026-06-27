const Stripe = require("stripe");
const productCatalog = require("../../js/product-catalog.js");

function buildSiteUrl(event) {
  const configuredUrl = process.env.URL || process.env.DEPLOY_PRIME_URL;
  if (configuredUrl) return configuredUrl.replace(/\/$/, "");

  const origin = event.headers.origin;
  if (origin) {
    try {
      const parsedOrigin = new URL(origin);
      if (["localhost", "127.0.0.1", "::1"].includes(parsedOrigin.hostname)) {
        return parsedOrigin.origin;
      }
    } catch (error) {
      console.warn("Ignoring invalid request origin.");
    }
  }

  return "https://webdevlady.netlify.app";
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
}

function normalizeCartItems(payload) {
  if (Array.isArray(payload.items)) {
    return payload.items;
  }

  if (payload.productKey) {
    return [
      {
        productKey: payload.productKey,
        quantity: payload.quantity || 1
      }
    ];
  }

  return [];
}

function getValidatedLineItems(payload) {
  return normalizeCartItems(payload).map((item) => {
    const productKey = String(item.productKey || "").trim();
    const product = productCatalog[productKey];
    const quantity = Math.max(1, Math.min(99, Number.parseInt(item.quantity, 10) || 1));

    if (!productKey || !product) {
      throw new Error(`Invalid product key: ${productKey || "missing"}.`);
    }

    return {
      productKey,
      product,
      quantity
    };
  });
}

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Content-Type": "application/json"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, {
      error: "Method not allowed."
    });
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
    }

    const payload = JSON.parse(event.body || "{}");
    const cartItems = getValidatedLineItems(payload);

    if (!cartItems.length) {
      return jsonResponse(400, {
        error: "Your cart is empty."
      });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const siteUrl = buildSiteUrl(event);
    const productKeys = cartItems.map((item) => item.productKey).join(",");
    const quantities = cartItems.map((item) => item.quantity).join(",");
    const successUrl = `${siteUrl}/thank-you.html?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${siteUrl}/cart.html`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: cartItems.map(({ productKey, product, quantity }) => ({
        price_data: {
          currency: "usd",
          unit_amount: Math.round(product.price * 100),
          product_data: {
            name: product.name,
            description: product.description,
            metadata: {
              productKey,
              version: product.version
            }
          }
        },
        quantity
      })),
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        productKeys,
        quantities,
        itemCount: String(cartItems.reduce((total, item) => total + item.quantity, 0))
      }
    });

    return jsonResponse(200, {
      sessionId: session.id,
      url: session.url
    });
  } catch (error) {
    console.error("Stripe Checkout Session error:", error.message);

    return jsonResponse(500, {
      error: error.message
    });
  }
};
