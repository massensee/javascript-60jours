const form = document.getElementById("book-form");
const result = document.getElementById("liste-livres");
const livres = JSON.parse(localStorage.getItem("livres")) || [];
afficherLivre();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titre = document.getElementById("titre");
  const auteur = document.getElementById("auteur");

  if (titre.value === "" || auteur.value === "") {
    alert("Veuillez remplir les champs !");
    return;
  }

  const nouveauLivre = {
    titre: titre.value,
    auteur: auteur.value,
  };

  livres.push(nouveauLivre);
  saveLivres();
  afficherLivre();

  console.log(livres);
});

function afficherLivre() {
  result.innerHTML = "";

  livres.forEach((livre, index) => {
    const liEl = creerElement(livre, index);
    result.appendChild(liEl);
  });
}
saveLivres();

function creerElement(livre, index) {
  const liEl = document.createElement("li");
  liEl.textContent = `Livre: ${livre.titre} - ${livre.auteur}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.dataset.index = index;

  deleteBtn.addEventListener("click", () => {
    livres.splice(index, 1);
    saveLivres();
    afficherLivre();
  });

  liEl.appendChild(deleteBtn);

  return liEl;
}

function saveLivres() {
  localStorage.setItem("livres", JSON.stringify(livres));
}
