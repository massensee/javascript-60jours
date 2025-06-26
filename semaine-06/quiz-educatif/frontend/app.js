const btnReset = document.getElementById("reset");
const container = document.getElementById("quiz-container");
const startGame = document.getElementById("start");

const API = "http://localhost:3000/questions";

let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let timerInterval;
let timeLeft = 10;

startGame.addEventListener("click", () => {
  startGame.style.display = "none";
  demarrerQuiz();
});

function demarrerQuiz() {
  fetch(`${API}?t=${Date.now()}`)
    .then((response) => response.json())
    .then((data) => {
      questions = data;
      afficherQuestion(currentQuestionIndex);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données :", error);
    });
}

function afficherQuestion(index) {
  container.innerHTML = "";

  const question = questions[index];

  container.classList.add("slideIn");

  const questionTitle = document.createElement("h2");
  questionTitle.textContent = question.question;
  container.appendChild(questionTitle);

  const timerDiv = document.createElement("div");
  timerDiv.id = "timer";
  timerDiv.textContent = "Temps restant : 10s";
  container.appendChild(timerDiv);

  question.reponses.forEach((reponse, reponseIndex) => {
    const btn = document.createElement("button");
    btn.textContent = reponse;

    btn.addEventListener("click", () => {
      clearInterval(timerInterval);
      envoyerReponse(index, reponseIndex, btn);
    });

    container.appendChild(btn);
  });
  lancerMinuteur();
  mettreAJourBarreDeProgression();
}

function mettreAJourBarreDeProgression() {
  const progress = (currentQuestionIndex / questions.length) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

function envoyerReponse(questionIndex, reponseIndex, bouton) {
  fetch("http://localhost:3000/repondre", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ questionIndex, reponseIndex }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "Bonne réponse !") {
        bouton.classList.add("correct");
        score++;
      } else {
        bouton.classList.add("incorrect");
      }

      setTimeout(() => {
        currentQuestionIndex++;
        mettreAJourBarreDeProgression();

        if (currentQuestionIndex < questions.length) {
          afficherQuestion(currentQuestionIndex);
        } else {
          const scoreMessage = document.createElement("p");
          scoreMessage.classList.add("final-score");
          scoreMessage.textContent = "Ton score : ";

          const scoreStrong = document.createElement("strong");
          scoreStrong.textContent = `${score}/${questions.length}`;

          scoreMessage.appendChild(scoreStrong);
          container.appendChild(scoreMessage);
        }
      }, 1000);
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoie de la reponse :", error);
    });
}

function lancerMinuteur() {
  clearInterval(timerInterval); // On s’assure d’annuler le timer précédent

  timeLeft = 10;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        afficherQuestion(currentQuestionIndex);
      } else {
        afficherScoreFinal();
      }
    }
  }, 1000);
}

btnReset.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  afficherQuestion(currentQuestionIndex);
});
