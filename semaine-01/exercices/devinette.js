const prompt = require("prompt-sync")();

let jouerEncore = true;

while (jouerEncore) {
  const mots = ["Malaise", "Voyage", "Parking", "Boussole"];

  const motAleatoire = Math.floor(Math.random() * mots.length);
  const motDeviner = mots[motAleatoire].toLowerCase();

  let motCacher = "_".repeat(motDeviner.length).split("");

  let essaiRestant = 6;
  let lettreProposer = [];

  while (motCacher.includes("_") && essaiRestant > 0) {
    let chercher = prompt("Quelle lettre choisi(e)-tu ? : ").toLowerCase();
    let trouver = false;

    if (!/^[a-z]$/.test(chercher)) {
      console.log("❌ Entrée invalide. Tu dois entrer UNE lettre (a-z).");
      continue;
    }

    if (lettreProposer.includes(chercher)) {
      console.log("🔁 Tu as déjà proposé cette lettre !");
      essaiRestant--;
      console.log(`Il te reste ${essaiRestant} essai !`);
      continue;
    }

    lettreProposer.push(chercher);

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
      console.log(`🧪 Il te reste ${essaiRestant} essai !`);
    }
    console.log(motCacher.join(" "));
  }

  if (!motCacher.includes("_")) {
    console.log("🎉 Bravo ! Tu as trouvé le mot : " + motDeviner);
  } else {
    console.log("💀 Perdu ! Le mot était : " + motDeviner);
  }

  let reponse = prompt("Veux-tu rejouer ? (oui/non) : ").toLowerCase();

  if (reponse !== "oui") {
    jouerEncore = false;
    console.log("Merci d'avoir jouer !");
  }
}
