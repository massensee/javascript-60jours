const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur du quiz !");
});

const questions = [
  {
    question: "quelle est la couleur du ciel ?",
    reponses: ["Rouge", "Bleu", "Vert"],
    bonneReponse: 1,
  },
  {
    question: "quelle est la capitale de la France ?",
    reponses: ["Paris", "Marseille", "Nice"],
    bonneReponse: 0,
  },
  {
    question: "quelle est la capitale de l'Algérie ?",
    reponses: ["Tipaza", "Alger", "Oran"],
    bonneReponse: 1,
  },
];

app.post("/repondre", (req, res) => {
  const { questionIndex, reponseIndex } = req.body;
  console.log(req.body);

  const question = questions[questionIndex];
  const estCorrect = reponseIndex === question.bonneReponse;

  if (estCorrect) {
    res.json({ message: "Bonne réponse !" });
  } else {
    res.json({
      message: `Mauvaise réponse. La bonne reponse était : ${
        question.reponses[question.bonneReponse]
      }`,
    });
  }
});

app.get("/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
