const container = document.getElementById("quiz-container");

const API = "http://localhost:3000/questions";

fetch(`${API}?t=${Date.now()}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Aucun API trouvé !");
    }
    return response.json();
  })
  .then((data) => {
    console.clear(); // Efface la console pour que ce soit plus lisible
    console.log("Questions reçues du backend :", data);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données :", error);
  });
