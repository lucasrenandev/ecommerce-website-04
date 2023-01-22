// Strict mode
"use strict"

// Normal scroll
const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

const scrollArrow = document.getElementById("scroll-arrow")

scrollArrow.addEventListener("click", function() {
    window.scrollTo(0, 0)
})

function hiddenScrollArrow() {
    if(window.scrollY < 500) {
        scrollArrow.style.display = "none"
    }
    else {
        scrollArrow.style.display = "inline-flex"
    }
}
hiddenScrollArrow()
window.addEventListener("scroll", hiddenScrollArrow)

const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", function() {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})

// Animation scroll
const sr = ScrollReveal({
    distance: '30px',
    duration: 2300,
    reset: true
})
sr.reveal(".home-text", {delay: 190, origin: "top"})
sr.reveal(".trending-products, .client-reviews, .update-news, .contact", {delay: 200, origin: "bottom"})