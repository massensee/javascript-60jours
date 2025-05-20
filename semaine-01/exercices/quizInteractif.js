const prompt = require("prompt-sync")();

let score = 0;

const quiz = [
  { question: "Quel language apprend-tu ?", reponse: "javascript" },
  { question: "Quelle est la capitale de l'Algerie ?", reponse: "alger" },
  { question: "Combien font 2 + 2 ?", reponse: "4" },
  { question: "Quel est l'age de la majorité en France ?", reponse: "18" },
];

for (let item of quiz) {
  const userQuestion = prompt(item.question + " ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (userQuestion === item.reponse) {
    score++;
  } else {
    console.log("❌ Mauvaise réponse !");
    console.log(`La bonne réponse était ${item.reponse}`);
  }
}
console.log(`Tu as obtenu ${score} bonne(s) réponse(s) sur ${quiz.length} !`);

if (score === quiz.length) {
  console.log("Bravo tu a tout bon !");
} else if (score >= 2) {
  console.log("pas mal du tout !");
} else {
  console.log("Tu peux réessayer pour t'améliorer !");
}
