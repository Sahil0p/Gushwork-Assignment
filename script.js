/* ========================= */
/* STICKY HEADER */
/* ========================= */

const stickyHeader = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {

const heroSection = document.querySelector(".hero");

if (!heroSection) return;

const heroHeight = heroSection.offsetHeight;

if (window.scrollY > heroHeight * 0.7) {

stickyHeader.classList.add("show");

} else {

stickyHeader.classList.remove("show");

}

});



/* ========================= */
/* IMAGE GALLERY */
/* ========================= */

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {

thumb.addEventListener("click", () => {

mainImage.src = thumb.src;

thumbnails.forEach((img) => img.classList.remove("active"));

thumb.classList.add("active");

});

});



/* ========================= */
/* IMAGE ZOOM EFFECT */
/* ========================= */

const imageContainer = document.querySelector(".main-image");

if(imageContainer){

const zoomImg = imageContainer.querySelector("img");

imageContainer.addEventListener("mousemove", (e) => {

const rect = imageContainer.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const xPercent = (x / rect.width) * 100;
const yPercent = (y / rect.height) * 100;

zoomImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;

zoomImg.style.transform = "scale(1.6)";

});

imageContainer.addEventListener("mouseleave", () => {

zoomImg.style.transform = "scale(1)";

});

}



/* ========================= */
/* MODAL HANDLING */
/* ========================= */

const catalogModal = document.getElementById("catalogModal");
const quoteModal = document.getElementById("quoteModal");

const openCatalogBtns = document.querySelectorAll(".open-catalog");
const openQuoteBtns = document.querySelectorAll(".open-quote");

const closeBtns = document.querySelectorAll(".close-modal");


/* OPEN CATALOG MODAL */

openCatalogBtns.forEach((btn) => {

btn.addEventListener("click", () => {

catalogModal.classList.add("active");

});

});


/* OPEN QUOTE MODAL */

openQuoteBtns.forEach((btn) => {

btn.addEventListener("click", () => {

quoteModal.classList.add("active");

});

});


/* CLOSE MODALS */

closeBtns.forEach((btn) => {

btn.addEventListener("click", () => {

catalogModal.classList.remove("active");
quoteModal.classList.remove("active");

});

});


/* CLOSE MODAL WHEN CLICK OUTSIDE */

window.addEventListener("click", (e) => {

if (e.target === catalogModal) {

catalogModal.classList.remove("active");

}

if (e.target === quoteModal) {

quoteModal.classList.remove("active");

}

});



/* ========================= */
/* FAQ ACCORDION */
/* ========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

const isOpen = answer.style.display === "block";

/* Close all */

document.querySelectorAll(".faq-answer").forEach((ans) => {

ans.style.display = "none";

});

/* Toggle current */

if (!isOpen) {

answer.style.display = "block";

}

});

});



/* ========================= */
/* INDUSTRY SLIDER */
/* ========================= */

const slider = document.querySelector(".industry-slider");

if(slider){

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {

isDown = true;
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;

});

slider.addEventListener("mouseleave", () => {

isDown = false;

});

slider.addEventListener("mouseup", () => {

isDown = false;

});

slider.addEventListener("mousemove", (e) => {

if (!isDown) return;

e.preventDefault();

const x = e.pageX - slider.offsetLeft;

const walk = (x - startX) * 2;

slider.scrollLeft = scrollLeft - walk;

});

}



/* ========================= */
/* SMOOTH SCROLL */
/* ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});