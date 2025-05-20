const prompt = require("prompt-sync")();

const tasks = [];

let continuer = true;

while (continuer) {
  let action = prompt(
    "Que voulez-vous faire ? (ajouter, voir, supprimer, quitter) ? : "
  ).toLowerCase();

  if (action === "quitter") {
    continuer = false;
  } else if (action === "ajouter") {
    let addTask = prompt("quelle tache voulez-vous ajouter ? ");
    tasks.push(addTask);
    console.log("tache ajoutée !");
  } else if (action === "voir") {
    if (tasks.length === 0) {
      console.log("Aucune tâche pour le moment.");
    } else {
      console.log("Liste des tâches :");
      for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
      }
    }
  } else if (action === "supprimer") {
    if (tasks.length === 0) {
      console.log("❌ Aucune tâche à supprimer.");
    } else {
      console.log("📋 Liste des tâches :");
      for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
      }

      let index =
        Number(prompt("Quel numéro de tâche veux-tu supprimer ? ")) - 1;

      if (index >= 0 && index < tasks.length) {
        let tacheSupprimee = tasks.splice(index, 1);
        console.log(`🗑️ Tâche supprimée : ${tacheSupprimee}`);
      } else {
        console.log("❌ Numéro invalide !");
      }
    }
  }
}
