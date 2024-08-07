'use strict';

/* ADD Event listener on multiple elements */
const addEventOnElements = function(elements, eventType, callback) {
    if (elements.length) {
        elements.forEach(element => element.addEventListener(eventType, callback));
    } else {
        elements.addEventListener(eventType, callback);
    }
}

/* NAVBAR TOGGLE FOR MOBILE */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelector("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]"); // Fixed selector

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navTogglers.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNav = function () {
    navbar.classList.remove("active");
    navTogglers.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNav);

/* HEADER ACTIVE */
const header = document.querySelector("[data-header]"); // Fixed selector
const backToTopBtn = document.querySelector("[data-back-to-top-btn]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backToTopBtn.classList.add("active")
    } else {
        header.classList.remove("active");
        backToTopBtn.classList.remove("active")
    }
});

