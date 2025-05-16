const prompt = require("prompt-sync")();

const nombreMystere = Math.floor(Math.random() * 10) + 1;
let essaiRestant = 3;

while (essaiRestant > 0) {
  let reponse = parseInt(prompt("Devine le nombre (entre 1 et 10) : "));

  if (reponse === nombreMystere) {
    console.log("Bravo tu a trouver !");
    break;
  } else if (reponse < nombreMystere) {
    console.log("C'est plus grand !");
  } else {
    console.log("C'est plus petit !");
  }

  essaiRestant--;
}

if (essaiRestant === 0) {
  console.log(`Perdu ! le nombre était ${nombreMystere}`);
}
