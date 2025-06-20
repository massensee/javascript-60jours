const citationsParDefaut = [
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

let citations = JSON.parse(localStorage.getItem("citations"));

if (!citations || citations.length === 0) {
  citations = [...citationsParDefaut];
  memoryCitations();
}

const newCitations = document.getElementById("new-quote");
const ajouterCitations = document.getElementById("new-quote-input");
const ajouterAuteur = document.getElementById("new-auteur");
const form = document.getElementById("quote-form");
const result = document.getElementById("quote");
const effacer = document.getElementById("clear");
const listeCitations = document.getElementById("liste-citations");
const count = document.getElementById("compteur");
const trier = document.getElementById("trier");
const restaurer = document.getElementById("restaurer");

restaurer.addEventListener("click", () => {
  citations = [...citationsParDefaut];
  memoryCitations();
  afficherCitations(citations);
  result.textContent = "Citations restaurer !";
});

newCitations.addEventListener("click", () => {
  const index = Math.floor(Math.random() * citations.length);
  result.textContent = `« ${citations[index].texte} » - Auteur: ${citations[index].auteur}`;
});

function afficherCitations(citations) {
  listeCitations.innerHTML = "";
  citations.forEach((citation, index) => {
    const liEl = creerCitationElement(citation, index);
    listeCitations.appendChild(liEl);
  });
  count.textContent = "Nombre de citations: " + citations.length;
}

function creerCitationElement(citation, index) {
  const liEl = document.createElement("li");
  liEl.textContent = `${citation.texte} - Auteur: ${citation.auteur}`;

  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "X";
  btnSupprimer.dataset.index = index;

  btnSupprimer.addEventListener("click", () => {
    citations.splice(index, 1);
    memoryCitations();
    afficherCitations(citations);
  });

  liEl.appendChild(btnSupprimer);
  return liEl;
}

trier.addEventListener("click", () => {
  citations.sort((a, b) => a.auteur.localeCompare(b.auteur));
  memoryCitations();
  afficherCitations(citations);
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

  afficherCitations(citations);
  form.reset();
});

function memoryCitations() {
  localStorage.setItem("citations", JSON.stringify(citations));
}

effacer.addEventListener("click", () => {
  localStorage.removeItem("citations");
  location.reload();
});
