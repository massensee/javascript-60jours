const prompt = require("prompt-sync")();

let continuer = "oui";

while (continuer === "oui") {
  console.clear();

  let conversion = prompt(
    "En quoi voulez-vous convertir ? (celsius/fahrenheit)"
  );

  let number = Number(prompt("Quelle température voulez-vous convertir ? : "));

  let resultat = 0;

  if (conversion === "fahrenheit") {
    const fahrenheit = (number * 9) / 5 + 32;
    resultat = fahrenheit;
    console.log(`Résultat : ${resultat}°F`);
  } else if (conversion === "celsius") {
    const celsius = ((number - 32) * 5) / 9;
    resultat = celsius;
    console.log(`Résultat : ${resultat.toFixed(2)}°C`);
  } else {
    console.log("❌ choix invalide !");
  }

  continuer = prompt(
    "Voulez-vous faire une autre conversion ? : (oui/non) "
  ).toLowerCase();

  while (continuer !== "oui" && continuer !== "non") {
    console.clear();
    continuer = prompt(
      "❌ Réponse invalide. Tapez 'oui' ou 'non' : "
    ).toLowerCase();
  }
}

console.log("👋 Merci d’avoir utilisé le convertisseur !");
