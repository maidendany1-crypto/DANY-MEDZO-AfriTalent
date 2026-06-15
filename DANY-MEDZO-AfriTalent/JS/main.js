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

/* ==========================
   FILTRAGE DES FREELANCES
========================== */

const categorie = document.getElementById("categorie");

if(categorie){

    categorie.addEventListener("change", () => {

        const valeur = categorie.value;

        const cartes =
            document.querySelectorAll(".freelance-card");

        cartes.forEach(carte => {

            const cat =
                carte.getAttribute("data-category");

            if(valeur === "all" || cat === valeur){

                carte.style.display = "block";

            }else{

                carte.style.display = "none";

            }

        });

    });

}

/* ==========================
   VALIDATION FORMULAIRE
========================== */

const form =
document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nom =
    document.getElementById("nom").value.trim();

    const prenom =
    document.getElementById("prenom").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    document.getElementById("nomError").textContent = "";
    document.getElementById("prenomError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let valide = true;

    if(nom === ""){

        document.getElementById("nomError")
        .textContent = "Le nom est obligatoire";

        valide = false;
    }

    if(prenom === ""){

        document.getElementById("prenomError")
        .textContent = "Le prénom est obligatoire";

        valide = false;
    }

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)){

        document.getElementById("emailError")
        .textContent = "Email invalide";

        valide = false;
    }

    if(message.length < 20){

        document.getElementById("messageError")
        .textContent =
        "Le message doit contenir au moins 20 caractères";

        valide = false;
    }

    if(valide){

        document.getElementById("successMessage")
        .textContent =
        "Votre message a été envoyé avec succès !";

        form.reset();

    }

});

}