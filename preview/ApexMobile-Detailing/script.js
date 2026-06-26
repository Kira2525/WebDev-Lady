/* =========================================================
   Apex Mobile Detailing
   script.js

   TABLE OF CONTENTS
   01. Customer Settings
   02. Contact Form
   03. Gallery Hover Effects
   04. Active Navigation Link

   CUSTOMIZE:
   - Edit the text inside SETTINGS.
   - Keep this file linked before the closing </body> tag.
========================================================= */


/* =========================================================
   01. Customer Settings
========================================================= */

const SETTINGS = {
  formSendingText: "Sending...",
  formSuccessText: "Booking Request Sent ✓",
  formDefaultText: "Send Booking Request",
  formSuccessMessage: "Thank you! Your booking request has been sent.",
  formResetDelay: 2500,
  formFakeSendDelay: 1200,
  galleryHoverShadow: "0 20px 40px rgba(212, 175, 55, 0.18)"
};


/* =========================================================
   02. Contact Form

   NOTE:
   This script only gives the form a nicer front-end experience.
   To receive real emails, connect the form to FormSubmit,
   Netlify Forms, Formspree, Getform, or another form service.

   IMPORTANT:
   If your form uses action="thank-you.html", this script will
   allow the form to submit normally.
========================================================= */

const form = document.querySelector("form");

if (form) {
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    const formAction = form.getAttribute("action");

    if (formAction && formAction !== "#") {
      return;
    }

    event.preventDefault();

    if (!submitButton) {
      return;
    }

    submitButton.innerText = SETTINGS.formSendingText;
    submitButton.disabled = true;

    setTimeout(function () {
      submitButton.innerText = SETTINGS.formSuccessText;
      alert(SETTINGS.formSuccessMessage);
      form.reset();

      setTimeout(function () {
        submitButton.innerText = SETTINGS.formDefaultText;
        submitButton.disabled = false;
      }, SETTINGS.formResetDelay);
    }, SETTINGS.formFakeSendDelay);
  });
}


/* =========================================================
   03. Gallery Hover Effects

   NOTE:
   Most hover effects are already handled in CSS.
   This adds an optional extra shadow safely.
========================================================= */

const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryItems.length > 0) {
  galleryItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      item.style.boxShadow = SETTINGS.galleryHoverShadow;
    });

    item.addEventListener("mouseleave", function () {
      item.style.boxShadow = "";
    });
  });
}

/* =========================================================
   04. Gallery Filter

   This allows filtering of gallery items based on category.
========================================================= */

const filterButtons = document.querySelectorAll(".gallery-filters button");
const galleryFilterItems = document.querySelectorAll(".gallery-item[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active-filter"));
    button.classList.add("active-filter");

    galleryFilterItems.forEach((item) => {
      const categories = item.dataset.category;

      if (filter === "all" || categories.includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

/* =========================================================
   04. Active Navigation Link

   This automatically highlights the current page based on
   the page file name, like services.html or pricing.html.
========================================================= */

const navLinks = document.querySelectorAll(".nav a");

if (navLinks.length > 0) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active-link");
      link.setAttribute("aria-current", "page");
    }
  });
}