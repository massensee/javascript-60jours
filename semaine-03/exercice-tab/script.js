// const utilisateurs = [
//   { nom: "Alice", age: 17 },
//   { nom: "Bob", age: 25 },
//   { nom: "Charlie", age: 30 },
// ];

// utilisateurs.forEach((item) => {
//   console.log(item.nom);
// });

// const nouvelleListe = utilisateurs.filter(
//   (personneMajeur) => personneMajeur.age > 18
// );

// console.log(nouvelleListe);

// const nomEnMajuscule = utilisateurs.map(
//   (item) => `${item.nom} à ${item.age} ans !`
// );

// console.log(nomEnMajuscule);

// const produits = [
//   { nom: "Stylo", prix: 1.5, disponible: true },
//   { nom: "Cahier", prix: 3.0, disponible: false },
//   { nom: "Gomme", prix: 1.9, disponible: false },
//   { nom: "Effaceur", prix: 2.1, disponible: true },
//   { nom: "Règle", prix: 2.4, disponible: true },
//   { nom: "Livre", prix: 2.8, disponible: true },
//   { nom: "Trousse", prix: 2.6, disponible: false },
// ];

// let taxer = [];

// produits.forEach((element) => {
//   const produit = element.prix * 1.2;
//   taxer.push(produit);
// });

// console.log(taxer);

// produits.forEach((element) => {
//   console.log(`Produit: ${element.nom}`);
// });

// const produitDispo = produits.filter((element) => element.disponible === true);

// console.log(produitDispo);

// const produitTaxer = produits.map((element) => element.prix * 1.2);

// console.log(produitTaxer);

// function ajouterTva(produits) {
//   let nouveauTableau = [];
//   produits.forEach((element) => {
//     const produit = element.prix * 1.2;
//     nouveauTableau.push(produit);
//   });
//   return nouveauTableau;
// }

// const resultat = ajouterTva(produits);
// console.log(resultat);

// function ajouterTvaDetaillee(produits) {
//   const tableauObj = [];

//   produits.forEach((element) => {
//     const produit = element.prix * 1.2;

//     const obj = {
//       nom: element.nom,
//       prixOriginal: element.prix,
//       prixTTC: produit.toFixed(2),
//     };
//     tableauObj.push(obj);
//   });

//   return tableauObj;
// }

// const resultat = ajouterTvaDetaillee(produits);

// console.log(resultat);

const produits = [
  { nom: "Stylo", prix: 1.5, quantite: 430, disponible: true },
  { nom: "Cahier", prix: 3.0, quantite: 220, disponible: false },
  { nom: "Gomme", prix: 1.9, quantite: 350, disponible: false },
  { nom: "Effaceur", prix: 2.1, quantite: 420, disponible: true },
  { nom: "Règle", prix: 2.4, quantite: 300, disponible: true },
  { nom: "Livre", prix: 2.8, quantite: 500, disponible: true },
  { nom: "Trousse", prix: 2.6, quantite: 360, disponible: false },
];
