// Message de bienvenue

console.log("Bienvenue sur AfriTalent");

// Bouton retour en haut

const backToTop = document.createElement("button");

backToTop.innerText = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }
    else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Animation simple des cartes

const cards = document.querySelectorAll(
    ".freelance-card, .category-card, .plan, .member"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});
const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Votre message a été envoyé avec succès !");

        form.reset();

    });

}