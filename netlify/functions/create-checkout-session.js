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

function getSuccessPath(productKey) {
  const thankYouPage = productKey.endsWith("-pro")
    ? "thank-you-pro.html"
    : "thank-you-lite.html";

  return `${thankYouPage}?product=${encodeURIComponent(productKey)}`;
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
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Method not allowed."
      })
    };
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
    }

    const { productKey } = JSON.parse(event.body || "{}");
    const product = productCatalog[productKey];

    if (!productKey || !product) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          error: "Invalid product key."
        })
      };
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const siteUrl = buildSiteUrl(event);
    const successUrl = new URL(getSuccessPath(productKey), `${siteUrl}/`).href;
    const cancelUrl = new URL(
      `cart.html?product=${encodeURIComponent(productKey)}`,
      `${siteUrl}/`
    ).href;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
            product_data: {
              name: product.name,
              description: product.description,
              metadata: {
                productKey,
                version: product.version
              }
            }
          },
          quantity: 1
        }
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      client_reference_id: productKey,
      metadata: {
        productKey
      }
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sessionId: session.id
      })
    };
  } catch (error) {
    console.error("Stripe Checkout Session error:", error.message);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
