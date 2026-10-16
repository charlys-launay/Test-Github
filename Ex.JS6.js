const prompt = require("prompt-sync")();

let age=prompt("Entrez votre age en année");
age=Number(age);

const Age=(age).toFixed(1);

let resultat="Mineur"

if(Age>=18){
    resultat="Majeur(e)";
}
if(Age>=65){
    resultat="Sénior";
}

console.log(resultat);