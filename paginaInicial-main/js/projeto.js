    function abrirPopup(id) {
    const popup = document.getElementById(id);
    if(popup) {
        popup.classList.add('ativo');
        document.body.style.overflow = 'hidden'; 
    }
    }

    function fecharPopup(id) {
    const popup = document.getElementById(id);
    if(popup) {
        popup.classList.remove('ativo');
        document.body.style.overflow = 'auto'; 
    }
    }

    // Fecha modais com a tecla ESC
    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup-overlay.ativo').forEach(popup => {
        popup.classList.remove('ativo');
        });
        document.body.style.overflow = 'auto';
    }
    });

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


history.scrollRestoration = "manual";

/* VOLTA PARA O TOPO */

window.onload = () => {
    window.scrollTo(0, 0);

};

/* ANIMAÇÃO DOS CARDS */

const cards = document.querySelectorAll(".projeto-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

    if(entry.isIntersecting){

    entry.target.classList.add("show");

    } else {

    entry.target.classList.remove("show");

    }

});

}, {
    threshold: 0.15
});

cards.forEach((card) => {
    observer.observe(card);

});

