const prompt = require("prompt-sync")();

let continuer = "oui";

while (continuer === "oui") {
  console.log("\n----------------------------\n");

  let operation = prompt(
    "Quelle opération souhaitez-vous faire ? (+, -, *, /) "
  );

  while (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    operation = prompt("❌ Opération invalide. Réessaye : (+, -, *, /) ");
  }

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
    if (chiffre2 === 0) {
      resultat = "❌ Division par zéro !";
    } else {
      resultat = chiffre1 / chiffre2;
    }
  }

  console.log("Résultat : " + resultat);

  continuer = prompt("Souhaitez-vous faire un autre calcul ? (oui/non) ")
    .toLowerCase()
    .trim();

  while (continuer !== "oui" && continuer !== "non") {
    continuer = prompt(
      "❌ Réponse invalide. Tape 'oui' ou 'non' : "
    ).toLowerCase();
  }
}

console.log("👋 Merci d'avoir utilisé la calculette !");
