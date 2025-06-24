const btnReset = document.getElementById("reset");
const container = document.getElementById("quiz-container");

const API = "http://localhost:3000/questions";

let currentQuestionIndex = 0;
let questions = [];
let score = 0;

function afficherQuestion(index) {
  container.innerHTML = "";

  const question = questions[index];

  const questionTitle = document.createElement("h2");
  questionTitle.textContent = question.question;
  container.appendChild(questionTitle);

  question.reponses.forEach((reponse, reponseIndex) => {
    const btn = document.createElement("button");
    btn.textContent = reponse;

    btn.addEventListener("click", () => {
      envoyerReponse(index, reponseIndex);
    });

    container.appendChild(btn);
  });
}

fetch(`${API}?t=${Date.now()}`)
  .then((response) => response.json())
  .then((data) => {
    const question = data[0];
    questions = data;
    afficherQuestion(currentQuestionIndex);
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

      if (data.message === "Bonne réponse !") {
        score++;
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        afficherQuestion(currentQuestionIndex);
      } else {
        container.textContent = `Quiz terminé ! 🎉 Ton score est de : ${score}/3`;
      }
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoie de la reponse :", error);
    });
}

btnReset.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  afficherQuestion(currentQuestionIndex);
});
