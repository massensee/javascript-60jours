const prompt = require("prompt-sync")();

const mots = ["Malaise", "Voyage", "Parking", "Boussole"];

const motAleatoire = Math.floor(Math.random() * mots.length);
const motDeviner = mots[motAleatoire].toLowerCase();

let motCacher = "_".repeat(motDeviner.length).split("");

let essaiRestant = 6;

while (motCacher.includes("_") && essaiRestant > 0) {
  let chercher = prompt("Quelle lettre choisi(e)-tu ? : ").toLowerCase();
  let trouver = false;

  console.log("Lettre cherchée :", chercher);
  for (let i = 0; i < motDeviner.length; i++) {
    if (chercher === motDeviner[i]) {
      motCacher[i] = chercher;
      trouver = true;
    }
  }

  if (!trouver) {
    essaiRestant--;
    console.log("❌ Mauvaise lettre !");
    console.log("Mot : " + motCacher.join(" "));
    console.log(`🧪 Essais restants : ${essaiRestant}`);
  }
  console.log(motCacher.join(" "));
}

if (!motCacher.includes("_")) {
  console.log("🎉 Bravo ! Tu as trouvé le mot : " + motDeviner);
} else {
  console.log("💀 Perdu ! Le mot était : " + motDeviner);
}
