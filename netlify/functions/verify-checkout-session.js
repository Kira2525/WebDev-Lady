const Stripe = require("stripe");
const productCatalog = require("../../js/product-catalog.js");

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(body)
  };
}

function parseVerifiedCart(session) {
  const productKeys = String(session.metadata?.productKeys || "")
    .split(",")
    .map((key) => key.trim())
    .filter(Boolean);
  const quantities = String(session.metadata?.quantities || "")
    .split(",")
    .map((quantity) => Math.max(1, Math.min(99, Number.parseInt(quantity, 10) || 1)));

  if (!productKeys.length || productKeys.length !== quantities.length) {
    throw new Error("Checkout Session product metadata is invalid.");
  }

  return productKeys.map((productKey, index) => {
    const product = productCatalog[productKey];
    if (!product) {
      throw new Error(`Checkout Session contains an unknown product: ${productKey}.`);
    }
    return { productKey, product, quantity: quantities[index] };
  });
}

exports.handler = async function (event) {
  if (event.httpMethod !== "GET") {
    return jsonResponse(405, { verified: false, error: "Method not allowed." });
  }

  const sessionId = String(event.queryStringParameters?.session_id || "").trim();
  if (!/^cs_(?:test_|live_)?[A-Za-z0-9]+$/.test(sessionId)) {
    return jsonResponse(400, { verified: false, error: "A valid Checkout Session ID is required." });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return jsonResponse(500, { verified: false, error: "Payment verification is not configured." });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid" || session.status !== "complete") {
      return jsonResponse(402, { verified: false, error: "Payment is not complete." });
    }

    const cartItems = parseVerifiedCart(session);
    const expectedTotalCents = cartItems.reduce(
      (total, item) => total + Math.round(item.product.price * 100) * item.quantity,
      0
    );

    if (session.currency !== "usd" || session.amount_total !== expectedTotalCents) {
      return jsonResponse(409, {
        verified: false,
        error: "The paid amount does not match the purchased products."
      });
    }

    return jsonResponse(200, {
      verified: true,
      transactionId: session.id,
      value: expectedTotalCents / 100,
      currency: "USD",
      products: cartItems.map(({ productKey, product, quantity }) => ({
        productKey,
        name: product.name,
        price: product.price,
        quantity,
        downloadFile: product.downloadFile
      }))
    });
  } catch (error) {
    console.error("Stripe Checkout verification error:", error.message);
    return jsonResponse(400, {
      verified: false,
      error: "Payment could not be verified. Contact support with your order email."
    });
  }
};

