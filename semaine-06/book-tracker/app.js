const form = document.getElementById("book-form");
const result = document.getElementById("liste-livres");
const livres = JSON.parse(localStorage.getItem("livres")) || [];

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
    const liEl = document.createElement("li");
    liEl.textContent = `${livre.titre} - ${livre.auteur}`;
    result.appendChild(liEl);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.dataset.index = index;
    liEl.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      livres.splice(index, 1);
      afficherLivre();
    });
  });

  return livres;
}
saveLivres();

function saveLivres() {
  localStorage.setItem("livres", JSON.stringify(livres));
}
