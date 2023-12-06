var nombreATrouver = -1;
var nombreDeCoup = 0;



function GenererNombreAleatoire(){
    nombreATrouver = Math.floor(Math.random() * 101);
}

//Fonction permettant de vérifier la tentative de l'utilisateur
function Tentative(){
    //On récupère la tentative de l'utilisateur
    var elementNombreUtilisateur = document.getElementById("nombreUtilisateur");

    //Ici on parse la valeur en int, si cela échoue, le nombre prendra comme valeur "NaN"
    var nombre = parseInt(elementNombreUtilisateur.value);

    //On récupère notre élément HTML
    var elementMessage = document.getElementById("message");
    elementMessage.style = "color: blue";

    //On vérifie ici que le nombre est bien un nombre
    if (!isNaN(nombre)){
        //On incrément le nombre de coup
        nombreDeCoup++;

        //On vérifie la tentative de l'utilisateur puis on affiche le message
        if (nombre < nombreATrouver){
            elementMessage.innerHTML = "C'est plus !";
        }
        else if (nombre > nombreATrouver){
            elementMessage.innerHTML = "C'est moins !";
        }
        else{
            elementMessage.innerHTML = `Bravo ! La bonne réponse était ${nombreATrouver}, vous avez trouvé le bon nombre en ${nombreDeCoup} tentative(s)`;
            elementMessage.style = "color: green"

            CacherBoutonRecommencerPartie(false);
        }
    }
    else{
        elementMessage.innerHTML = "Veuillez entrer un nombre entier entre 0 et 100";
        elementMessage.style = "color: red";
    }

    //On supprimer la tentative de l'utilisateur
    elementNombreUtilisateur.value = "";
}

//Fonction permettant de recommencer une partie
function RecommencerPartie(){
    //Réinitialisation nombre de coup
    nombreDeCoup = 0;

    //Génération d'un nouveau nombre aléatoire
    GenererNombreAleatoire();

    //On récupère notre élément HTML
    var elementMessage = document.getElementById("message");
    elementMessage.innerHTML = "Pour commencer, veuillez entrer un nombre entre 0 et 100";    
    elementMessage.style = "color: black";

    //On fini par 
    CacherBoutonRecommencerPartie(true);
}

//Permet de cacher le bouton et le formulaire en fonction du boolean en valeur
function CacherBoutonRecommencerPartie(boolean){
    if (boolean == true){
        document.getElementById("recommencerPartie").hidden = true;
        document.getElementById("formulaireTentative").hidden = false;
    }
    else if (boolean == false){
        document.getElementById("recommencerPartie").hidden = false;
        document.getElementById("formulaireTentative").hidden = true;
    }
}

//Permet d'attendre le chargement de la page complet
window.addEventListener("load", () => {
    //On ajout un "Ecouteur" sur l'input "nombreUtilisateur"
    document.getElementById("nombreUtilisateur").addEventListener("keyup", function(event) {
        if (event.key === "Enter"){
            Tentative();
        }
    })
});



// Permet de générer un nombre aléatoire une fois sur la page
GenererNombreAleatoire();