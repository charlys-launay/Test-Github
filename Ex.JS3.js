const prixHt=49.9;
const tva=0.2;
const montantTVA=tva*prixHt;

console.log (`PrixHt :${prixHt}`)
console.log (`TVA :${montantTVA}`)
const PrixTTC =(montantTVA+prixHt).toFixed(2);
console.log (`PrixTTC :${PrixTTC}`);