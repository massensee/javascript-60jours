const prompt = require("prompt-sync")();

const mots = ["Malaise", "Voyage", "Parking", "Boussole"];

const motAleatoire = Math.floor(Math.random() * mots.length);
const motDeviner = mots[motAleatoire].toLowerCase();

let motCacher = "_".repeat(motDeviner.length).split("");

while (motCacher.includes("_")) {
  let chercher = prompt("Quelle lettre choisi(e)-tu ? : ").toLowerCase();

  console.log("Lettre cherchée :", chercher);
  for (let i = 0; i < motDeviner.length; i++) {
    if (chercher === motDeviner[i]) {
      motCacher[i] = chercher;
    }
  }
  console.log(motCacher.join(" "));
}

// console.log(motCacher.join(" "));
