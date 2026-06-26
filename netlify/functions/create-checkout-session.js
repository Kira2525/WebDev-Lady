const Stripe = require("stripe");
const productCatalog = require("../../js/product-catalog.js");

function buildSiteUrl(event) {
  const origin = event.headers.origin;

  if (origin) {
    return origin;
  }

  if (process.env.URL) {
    return process.env.URL;
  }

  if (process.env.DEPLOY_PRIME_URL) {
    return process.env.DEPLOY_PRIME_URL;
  }

  return "http://localhost:8888";
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
    const successUrl = new URL(
      `thank-you.html?products=${encodeURIComponent(productKeys)}`,
      `${siteUrl}/`
    ).href;
    const cancelUrl = new URL("cart.html", `${siteUrl}/`).href;

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
      client_reference_id: cartItems.map((item) => item.productKey).join("|"),
      metadata: {
        productKeys,
        itemCount: String(cartItems.length)
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
