const citations = [
  {
    auteur: "Albert Einstein",
    texte:
      "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
  },
  {
    auteur: "Marcel Achard",
    texte:
      "Quand je pense aux livres de chevet de certains de mes amis, je me demande comment ils font pour se réveiller.",
  },
  {
    auteur: "Giorgio Agamben",
    texte: "Ecrire serait si triste si l'on ne déviait jamais de son plan.",
  },
];

const newCitations = document.getElementById("new-quote");
const result = document.getElementById("quote");

newCitations.addEventListener("click", () => {
  const index = Math.floor(Math.random() * citations.length);
  result.textContent = `« ${citations[index].texte} » - Auteur: ${citations[index].auteur}`;
});
