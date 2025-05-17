const prompt = require("prompt-sync")();

const operation = prompt(
  "Qu'elle opération souhaitez-vous faire ? (+, -, *, /)"
);

const chiffre1 = Number(prompt("Entrez le premier nombre : "));
const chiffre2 = Number(prompt("Entrez le deuxième nombre : "));

let resultat;

if (operation === "+") {
  resultat = chiffre1 + chiffre2;
} else if (operation === "-") {
  resultat = chiffre1 - chiffre2;
} else if (operation === "*") {
  resultat = chiffre1 * chiffre2;
} else if (operation === "/") {
  resultat = chiffre1 / chiffre2;
} else {
  console.log("Opération non reconnue !");
}

if (resultat !== undefined) {
  console.log("Résultat : " + resultat);
}

// function addition(a, b) {
//   return a + b;
// }

// function soustraction(a, b) {
//   return a - b;
// }

// function calculatrice(a, b, operation) {
//   if (operation === "addition") {
//     addition(a, b);
//   } else if (operation === "soustraction") {
//     soustraction(a, b);
//   } else {
//     return "Operation non reconnue !";
//   }
// }

// calculatrice(10, 9, "addition");
// calculatrice(10, 9, "soustraction");
