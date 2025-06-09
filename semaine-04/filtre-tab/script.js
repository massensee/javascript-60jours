const utilisateurs = [
  { nom: "Alice", email: "alice@mail.com", statut: "admin", actif: true },
  { nom: "Roger", email: "roger@mail.com", statut: "user", actif: false },
  { nom: "Steeve", email: "steeve@mail.com", statut: "user", actif: true },
  { nom: "Karim", email: "karim@mail.com", statut: "admin", actif: true },
  { nom: "Tanina", email: "tanina@mail.com", statut: "user", actif: false },
];

const form = document.getElementById("form-filtre");
const inputRecherche = document.getElementById("recherche");
const filtreActif = document.getElementById("filtre-actif");
const selectTri = document.getElementById("tri");
const btnReinitialiser = document.getElementById("btn-reinitialiser");

btnReinitialiser.addEventListener("click", () => {
  inputRecherche.value = "";
  filtreActif.checked = false;
  selectTri.value = "";

  afficherUtilisateurs(utilisateurs);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const terme = inputRecherche.value;
  const actifSeulement = filtreActif.checked;
  const tri = selectTri.value;

  filtrerEtTrier(terme, actifSeulement, tri);
});

function filtrerEtTrier(terme, actifSeulement, tri) {
  let resultat = utilisateurs.filter((utilisateur) => {
    const nomOk = utilisateur.nom.toLowerCase().includes(terme.toLowerCase());
    const emailOk = utilisateur.email
      .toLowerCase()
      .includes(terme.toLowerCase());
    return nomOk || emailOk;
  });

  if (actifSeulement) {
    resultat = resultat.filter((utilisateur) => utilisateur.actif === true);
  }

  resultat.sort((a, b) => {
    if (tri === "az") {
      return a.nom.localeCompare(b.nom);
    } else {
      return b.nom.localeCompare(a.nom);
    }
  });

  afficherUtilisateurs(resultat);
}

function afficherUtilisateurs(utilisateurs) {
  const users = document.querySelector("tbody");
  users.innerHTML = "";

  utilisateurs.forEach((utilisateur) => {
    const ligne = document.createElement("tr");

    const cellNom = document.createElement("td");
    cellNom.textContent = utilisateur.nom;

    const cellEmail = document.createElement("td");
    cellEmail.textContent = utilisateur.email;

    const cellStatut = document.createElement("td");
    cellStatut.textContent =
      utilisateur.statut === "admin" ? "Administrateur" : "Utilisateur";

    const cellActif = document.createElement("td");
    cellActif.textContent = utilisateur.actif ? "✅" : "❌";

    ligne.appendChild(cellNom);
    ligne.appendChild(cellEmail);
    ligne.appendChild(cellStatut);
    ligne.appendChild(cellActif);
    users.appendChild(ligne);
  });
}

afficherUtilisateurs(utilisateurs);
