document.getElementById("valider").onclick = calcul;


var resultat = document.getElementById("resultat");


function calcul(){
    var poids = document.getElementById("poids").value;
    var taille = document.getElementById("taille").value;
    var imc = (poids*10000) / (taille*taille);
    if (imc <= 1){
        document.getElementById("resultat").innerHTML = "<span class='erreur'>Merci d'indiquer un poids et une taille correcte</span>";
    }
    else if (imc <= 18 ){
        document.getElementById("resultat").innerHTML = "<span class='maigre'>Vous êtes anoréxique" + "<br>Votre imc est de: " + imc.toFixed(2) + "</span>";
        
    } else if (imc <= 25){
        document.getElementById("resultat").innerHTML = "<span class='parfait'>Votre poids est parfait" + "<br>Votre imc est de: " + imc.toFixed(2)+ "</span>";
    } else if (imc <= 30){
        document.getElementById("resultat").innerHTML = "<span class='surpoids'>Vous êtes en surpoids" + "<br>Votre imc est de: " + imc.toFixed(2)+ "</span>";
    } else if (imc <= 35){
        document.getElementById("resultat").innerHTML = "<span class='obese'>Vous êtes obèse" + "<br>Votre imc est de: " + imc.toFixed(2)+ "</span>";
    }else if (imc > 35){
            document.getElementById("resultat").innerHTML = "<span class='mort'>Vous êtes bientôt mort" + "<br>Votre imc est de: " + imc.toFixed(2)+ "</span>";
    }


}
