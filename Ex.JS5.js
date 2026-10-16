const prompt = require("prompt-sync")();

let taille=prompt("Entrez votre taille en metre");
taille=Number(taille);

let poids=prompt("Entre votre poids en kg");
poids=Number(poids);

const IMC=(poids/(taille*taille)).toFixed(1);

console.log(`IMC: ${IMC}`);

let resultat="Obésité";

if(IMC<18.5){
    resultat="Insuffisance pondérale";
}else if(IMC<25){
    resultat="Corpulence normale";
}else if(IMC<30){
    resultat="Surpoids";
}

console.log(resultat);