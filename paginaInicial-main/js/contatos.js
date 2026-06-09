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

// WHATSAPP
const WA_NUMBER='551142152163';

const WA_MSG=encodeURIComponent(
'Olá! Vi o site da ACAEPA e gostaria de saber mais sobre como apoiar.'
);

document.querySelectorAll('[data-wa]')
.forEach(el=>{

el.href=`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

});


/* VOLTA PARA O TOPO AO RECARREGAR */

history.scrollRestoration = "manual";

window.onload = () => {

    window.scrollTo(0, 0);

};

