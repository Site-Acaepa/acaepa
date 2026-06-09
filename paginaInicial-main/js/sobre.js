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



/* VOLTA PARA O TOPO */

history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0, 0);

};

/* ANIMAÇÃO AO ROLAR */

const reveals = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right, .projeto-card, .sn-mvv-card, .timeline-item"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

    if(entry.isIntersecting){

    entry.target.classList.add("show");

    } else {

      /* REMOVE AO SUBIR */
    entry.target.classList.remove("show");

    }

});

}, {
    threshold: 0.12
});

/* OBSERVA TODOS */

reveals.forEach((element) => {
    observer.observe(element);

});

