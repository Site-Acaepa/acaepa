'use strict';

// NAVBAR
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

// MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", ()=>{

        navLinks.classList.toggle("active");

    });

}

// SCROLL ANIMATIONS
const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }

    });
});

document.querySelectorAll(".reveal")
.forEach(el=>revealObserver.observe(el));

// CONTADORES
function animateCounter(el){

    const target = parseInt(el.dataset.target);

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

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

document.querySelectorAll("[data-target]")
.forEach(el=>counterObserver.observe(el));



/* VOLTA PARA O TOPO AO RECARREGAR */

history.scrollRestoration = "manual";

window.onload = () => {

    window.scrollTo(0, 0);

};



/* ========================= */
/* ABRIR CARD */
/* ========================= */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
        button.closest(".card");

        const content =
        card.querySelector(".card-content");

        /* FECHAR OUTROS */

        document
        .querySelectorAll(".card-content")
        .forEach(item => {

            if(item !== content){

                item.classList.remove("active");

            }

        });

        /* ABRIR O ATUAL */

        content.classList.toggle("active");

    });

});

/* ========================= */
/* ANIMAÇÃO DOS CARDS */
/* ========================= */

const cards =
document.querySelectorAll(".card");

function revealCards(){

    const triggerBottom =
    window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.classList.add("show");

        }

    });

}

/* EXECUTA */

window.addEventListener(
    "scroll",
    revealCards
);

revealCards();

/* ========================= */
/* PARALLAX SUAVE */
/* ========================= */

window.addEventListener("scroll", () => {

    const scroll =
    window.scrollY;

    document.body.style.backgroundPositionY =
    `${scroll * 0.2}px`;

});