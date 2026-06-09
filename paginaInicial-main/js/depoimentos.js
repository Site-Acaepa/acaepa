'use strict';

/* =========================
NAVBAR
========================= */

const nav = document.getElementById('nav');

if(nav){

    window.addEventListener('scroll', () => {

        if(window.scrollY > 40){

            nav.classList.add('scrolled');

        }else{

            nav.classList.remove('scrolled');

        }

    });

}


/* =========================
MENU MOBILE
========================= */

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* =========================
SCROLL ANIMATIONS
========================= */

const revealObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

});

document
.querySelectorAll(".reveal")
.forEach(el => revealObserver.observe(el));


/* =========================
CONTADORES
========================= */

function animateCounter(el){

    const target =
    parseInt(el.dataset.target);

    let current = 0;

    const timer = setInterval(()=>{

        current++;

        el.textContent =
        current + (el.dataset.suffix || "");

        if(current >= target){

            clearInterval(timer);

        }

    },100);

}

const counterObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

document
.querySelectorAll("[data-target]")
.forEach(el => counterObserver.observe(el));


/* =========================
VOLTAR TOPO
========================= */

history.scrollRestoration = "manual";

window.onload = () => {

    window.scrollTo(0, 0);

};


/* =========================
PARALLAX SUAVE
========================= */

window.addEventListener("scroll", () => {

    const scroll =
    window.scrollY;

    document.body.style.backgroundPositionY =
    `${scroll * 0.2}px`;

});


/* =========================
CARDS DEPOIMENTOS
========================= */

const cards =
document.querySelectorAll(".bloco-video");

cards.forEach((card) => {

    const video =
    card.querySelector("video");

    // REMOVE AUTOPLAY
    video.autoplay = false;

    // CLICK NO CARD
    card.addEventListener("click", (e) => {

        // SE CLICAR DIRETO NO VIDEO
        if(e.target === video){
            return;
        }

        // REMOVE DOS OUTROS
        cards.forEach((item) => {

            item.classList.remove("ativo");

            const otherVideo =
            item.querySelector("video");

            otherVideo.pause();

            otherVideo.currentTime = 0;

            otherVideo.muted = true;

        });

        // ATIVA CARD
        card.classList.add("ativo");

        // ATIVA SOM
        video.muted = false;

        // TOCA VIDEO
        video.play();

    });

    // DUPLO CLIQUE NO VIDEO
    video.addEventListener("dblclick", () => {

        cards.forEach((item) => {

            item.classList.remove("ativo");

        });

        card.classList.add("ativo");

    });

});


/* =========================
FECHAR MENU AO CLICAR
========================= */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});