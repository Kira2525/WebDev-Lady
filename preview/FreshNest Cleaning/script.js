"use strict";

/* =========================================================
   FreshNest Cleaning Co.
   Main JavaScript

   TABLE OF CONTENTS
   -----------------
   01. Mobile Navigation
   02. Active Navigation
   03. Close Menu on Desktop Resize
   04. Close Menu When Clicking Outside
========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", () => {

        siteNav.classList.toggle("is-open");

        const isOpen = siteNav.classList.contains("is-open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "×" : "☰";

    });

    const navLinks = siteNav.querySelectorAll("a");

    for (const link of navLinks) {

        link.addEventListener("click", () => {

            siteNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

        });

    }

}


/* =========================================================
   02. ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".site-nav a");

function updateActiveNav() {

    if (!sections.length) return;

    const scrollPosition = window.scrollY + 150;

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("load", updateActiveNav);
window.addEventListener("scroll", updateActiveNav);


/* =========================================================
   03. CLOSE MENU WHEN RETURNING TO DESKTOP
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 560 && siteNav && menuToggle) {

        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    }

});


/* =========================================================
   04. CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (!menuToggle || !siteNav) return;

    const clickedMenu =
        siteNav.contains(event.target) ||
        menuToggle.contains(event.target);

    if (!clickedMenu) {

        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    }

});