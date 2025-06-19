let citations = JSON.parse(localStorage.getItem("citations")) || [
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
const ajouterCitations = document.getElementById("new-quote-input");
const ajouterAuteur = document.getElementById("new-auteur");
const form = document.getElementById("quote-form");
const result = document.getElementById("quote");
const effacer = document.getElementById("clear");

newCitations.addEventListener("click", () => {
  const index = Math.floor(Math.random() * citations.length);
  result.textContent = `« ${citations[index].texte} » - Auteur: ${citations[index].auteur}`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (ajouterAuteur.value === "" && ajouterCitations.value === "") {
    alert("Veuillez remplir les champs.");
    return;
  }

  const nouvellesCitations = {
    auteur: ajouterAuteur.value,
    texte: ajouterCitations.value,
  };

  citations.push(nouvellesCitations);

  memoryCitations();

  result.textContent = `« ${nouvellesCitations.texte} » - Auteur: ${nouvellesCitations.auteur}`;

  form.reset();
});

function memoryCitations() {
  localStorage.setItem("citations", JSON.stringify(citations));
}

effacer.addEventListener("click", () => {
  localStorage.removeItem("citations");
  location.reload();
});
