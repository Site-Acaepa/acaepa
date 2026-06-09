'use strict';

/* VOLTAR AO TOPO AO RECARREGAR */
history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0,0);
};

const sliders = document.querySelectorAll(".album-box");

sliders.forEach((sliderBox) => {

    const slider = sliderBox.querySelector(".scroll-galeria");

    const nextBtn = sliderBox.querySelector(".next");

    const prevBtn = sliderBox.querySelector(".prev");

    const dots = sliderBox.querySelectorAll(".dot");

    let index = 0;

    const cardWidth = 344;

    // NEXT
    nextBtn.addEventListener("click", () => {

        if(index < dots.length -1){

            index++;

            slider.scrollLeft += cardWidth;
        }

        updateDots();
    });

    // PREV
    prevBtn.addEventListener("click", () => {

        if(index > 0){

            index--;

            slider.scrollLeft -= cardWidth;
        }

        updateDots();
    });


});

const albuns = document.querySelectorAll(".album-box");

albuns.forEach(album => {

    const galeria = album.querySelector(".scroll-galeria");

    const prev = album.querySelector(".prev");

    const next = album.querySelector(".next");

    const card = album.querySelector(".foto-card");

    const cardWidth = card.offsetWidth + 24;

    next.addEventListener("click", () => {

        galeria.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });

    });

    prev.addEventListener("click", () => {

        galeria.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });

    });

});

/* =========================================
ESPERAR CARREGAR A PÁGINA
========================================= */

window.addEventListener("load", () => {

    /* =========================================
    SLIDER
    ========================================= */

    const albuns = document.querySelectorAll(".album-box");

    albuns.forEach(album => {

        const galeria = album.querySelector(".scroll-galeria");

        const prev = album.querySelector(".prev");

        const next = album.querySelector(".next");

        const card = album.querySelector(".foto-card");

        const cardWidth = card.offsetWidth + 24;

        next.addEventListener("click", () => {

            galeria.scrollBy({
                left: cardWidth,
                behavior: "smooth"
            });

        });

        prev.addEventListener("click", () => {

            galeria.scrollBy({
                left: -cardWidth,
                behavior: "smooth"
            });

        });

    });

    /* =========================================
    MENU MOBILE
    ========================================= */

    const menuToggle = document.getElementById("menu-toggle");

    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    /* =========================================
    ANIMAÇÃO
    ========================================= */

const elementos = document.querySelectorAll(
    ".home-content, .album-box, .album-info, .slider-controls"
);

    elementos.forEach(el => {

        el.classList.add("hidden");

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

    elementos.forEach(el => {

        observer.observe(el);

    });

});