const container = document.getElementById("quiz-container");

const API = "http://localhost:3000/questions";

fetch(`${API}?t=${Date.now()}`)
  .then((response) => response.json())
  .then((data) => {
    const question = data[0];

    const questionTitle = document.createElement("h2");
    questionTitle.textContent = question.question;
    container.appendChild(questionTitle);

    question.reponses.forEach((reponse, index) => {
      const btn = document.createElement("button");
      btn.textContent = reponse;

      btn.addEventListener("click", () => {
        envoyerReponse(0, index);
      });

      container.appendChild(btn);
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données :", error);
  });

function envoyerReponse(questionIndex, reponseIndex) {
  fetch("http://localhost:3000/repondre", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ questionIndex, reponseIndex }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoie de la reponse :", error);
    });
}
