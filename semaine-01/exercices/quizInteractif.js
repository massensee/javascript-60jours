const prompt = require("prompt-sync")();

let score = 0;

const quiz = [
  { question: "Quel language apprend tu ?", reponse: "javascript" },
  { question: "Quelle est la capitale de l'Algerie ?", reponse: "alger" },
  { question: "Combien font 2 + 2 ?", reponse: "4" },
];

for (let item of quiz) {
  const userQuestion = prompt(item.question + " ").toLowerCase();

  if (userQuestion === item.reponse) {
    score++;
    console.log("✅ Bonne réponse !");
  } else {
    console.log("❌ Mauvaise réponse !");
  }

  console.log(`Tu as obtenu ${score}/${quiz.length} bonnes réponses.`);
}
