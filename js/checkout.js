const STRIPE_PUBLIC_KEY = "pk_test_51Tb6cUCNvIHQgqvuzYAxs4S26Nvcxo2nMgPs16z2G9JKHw9r1dphVeXSbxxQKbdqdO1GAgxtug8NT7syyPLfSHCu00GOCDHRmx";
const isPlaceholderKey =
  !STRIPE_PUBLIC_KEY || STRIPE_PUBLIC_KEY.includes("REPLACE_WITH");
const stripe = !isPlaceholderKey && typeof Stripe === "function"
  ? Stripe(STRIPE_PUBLIC_KEY)
  : null;

const paymentForm = document.getElementById("payment-form");
const submitButton = document.getElementById("submit");
const paymentMessage = document.getElementById("payment-message");
const paymentElement = document.getElementById("payment-element");

const checkoutProductKey = window.selectedProduct?.key || null;

if (paymentElement) {
  paymentElement.innerHTML = `
    <div class="payment-placeholder">
      Review your product details before continuing to Stripe's secure checkout page.
    </div>
  `;
}

if (!window.selectedProduct) {
  disableCheckout("Choose an active template before you continue to checkout.");
} else if (isPlaceholderKey) {
  disableCheckout("Checkout setup is still being finalized. Add your live Stripe publishable key before accepting real orders.");
} else if (!stripe) {
  disableCheckout("Secure checkout could not load right now. Please refresh the page or contact support if the problem continues.");
}

if (paymentForm) {
  paymentForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!window.selectedProduct || !checkoutProductKey || !stripe) {
      return;
    }

    setLoading(true);
    showPaymentMessage("");

    try {
      const response = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productKey: checkoutProductKey,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to start Stripe checkout.");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      showPaymentMessage(error.message);
      setLoading(false);
    }
  });
}

function showPaymentMessage(message) {
  if (paymentMessage) {
    paymentMessage.textContent = message;
  }
}

function disableCheckout(message) {
  if (paymentElement) {
    paymentElement.innerHTML = `
      <div class="payment-placeholder">
        ${message}
      </div>
    `;
  }

  showPaymentMessage(message);

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Checkout Unavailable";
  }
}

function setLoading(isLoading) {
  if (!submitButton) return;

  if (isLoading) {
    submitButton.disabled = true;
    submitButton.textContent = "Redirecting to Stripe...";
  } else {
    submitButton.disabled = false;

    if (window.selectedProduct && window.selectedProduct.priceLabel) {
      submitButton.textContent = `Pay ${window.selectedProduct.priceLabel} Securely`;
    } else {
      submitButton.textContent = "Pay Securely";
    }
  }
}
