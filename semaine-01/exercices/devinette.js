const prompt = require("prompt-sync")();

// Fonction : choisir un mot aléatoire
function choisirMotAleatoire(mots) {
  const index = Math.floor(Math.random() * mots.length);
  return mots[index].toLowerCase();
}

// Fonction : demander le niveau
function demanderNiveau() {
  let niveau = prompt(
    "Choisis un niveau : facile difficile ou expert ? "
  ).toLowerCase();
  if (niveau === "facile") {
    return { niveau, essais: 10 };
  } else if (niveau === "difficile") {
    return { niveau, essais: 6 };
  } else if (niveau === "expert") {
    return { niveau, essais: 4 };
  } else {
    console.log(
      "⚠️ Niveau inconnu ! Le mode 'difficile' est activé par défaut."
    );
    return { niveau: "difficile", essais: 6 };
  }
}

// Fonction : vérifier et insérer une lettre
function verifierLettre(lettre, motDeviner, motCacher) {
  let trouve = false;
  for (let i = 0; i < motDeviner.length; i++) {
    if (lettre === motDeviner[i]) {
      motCacher[i] = lettre;
      trouve = true;
    }
  }
  return trouve;
}

// Fonction : jouer une partie
function jouerPartie() {
  const mots = ["Malaise", "Voyage", "Parking", "Boussole"];
  const motDeviner = choisirMotAleatoire(mots);
  let motCacher = "_".repeat(motDeviner.length).split("");
  let lettreProposees = [];

  const { niveau, essais } = demanderNiveau();
  let essaiRestant = essais;

  console.log(`🎮 Tu as choisi le niveau ${niveau}.`);

  while (motCacher.includes("_") && essaiRestant > 0) {
    let lettre = prompt("Quelle lettre choisis-tu ? : ").toLowerCase();

    if (!/^[a-z]$/.test(lettre)) {
      console.log("❌ Entrée invalide. Tu dois entrer UNE lettre (a-z).");
      continue;
    }

    if (lettreProposees.includes(lettre)) {
      console.log("🔤 Lettres déjà proposées : " + lettreProposees.join(", "));
      essaiRestant--;
      console.log(`Il te reste ${essaiRestant} essai(s) !`);
      continue;
    }

    lettreProposees.push(lettre);

    if (verifierLettre(lettre, motDeviner, motCacher)) {
      console.log("✅ Bonne lettre !");
    } else {
      essaiRestant--;
      console.log("❌ Mauvaise lettre !");
    }

    console.log("Mot : " + motCacher.join(" "));
    console.log(`🧪 Il te reste ${essaiRestant} essai(s) !`);
  }

  if (!motCacher.includes("_")) {
    console.log("🎉 Bravo ! Tu as trouvé le mot : " + motDeviner);
  } else {
    console.log("💀 Perdu ! Le mot était : " + motDeviner);
  }
}

// Fonction : demander si on veut rejouer
function demanderSiRejouer() {
  let reponse = prompt("Veux-tu rejouer ? (oui/non) : ").toLowerCase();
  return reponse === "oui";
}

// Boucle principale
let jouerEncore = true;

while (jouerEncore) {
  jouerPartie();
  jouerEncore = demanderSiRejouer();
}

console.log("👋 Merci d'avoir joué !");
