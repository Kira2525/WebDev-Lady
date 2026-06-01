const Stripe = require("stripe");

const PRODUCT_PRICE_IDS = {
  "cosmicorbit-lite": "price_1TdJ3jCNvIHQgqvuyPIJ7zWu",
  "cosmicorbit-pro": "price_1TdIz2CNvIHQgqvu8sDTIP4Z",
  "abyssalblue-lite": "price_1TdJ1ZCNvIHQgqvuRKx4Htyo",
  "abyssalblue-pro": "price_1TcYUSCNvIHQgqvu27zSNtWG",
  "velvetui-lite": "price_1TdJ5bCNvIHQgqvunGqLZwWG",
  "velvetui-pro": "price_1TdJ4uCNvIHQgqvu6fqcKKqP",
  "worldview-lite": "price_1TdKqaCNvIHQgqvuW3DYQ20O",
  "worldview-pro": "price_1TdKkTCNvIHQgqvut3zwsTLj",
};

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
        "Content-Type": "application/json",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Method not allowed.",
      }),
    };
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
    }

    const { productKey } = JSON.parse(event.body || "{}");
    const priceId = PRODUCT_PRICE_IDS[productKey];

    if (!productKey || !priceId) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: "Invalid product key.",
        }),
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
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      client_reference_id: productKey,
      metadata: {
        productKey,
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: session.id,
      }),
    };
  } catch (error) {
    console.error("Stripe Checkout Session error:", error.message);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
