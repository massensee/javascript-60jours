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
const btnPrecedent = document.getElementById("precedent");
const btnSuivant = document.getElementById("suivant");

let pageActuelle = 1;
const utilisateursParPage = 3;

let filtreTerme = "";
let filtreActifSeulement = false;
let filtreTri = "az";
let utilisateursFiltres = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  pageActuelle = 1;

  filtreTerme = inputRecherche.value;
  filtreActifSeulement = filtreActif.checked;
  filtreTri = selectTri.value;

  filtrerEtTrier();
});

btnReinitialiser.addEventListener("click", () => {
  inputRecherche.value = "";
  filtreActif.checked = false;
  selectTri.value = "az";

  pageActuelle = 1;
  filtreTerme = "";
  filtreActifSeulement = false;
  filtreTri = "az";

  filtrerEtTrier();
});

btnPrecedent.addEventListener("click", () => {
  if (pageActuelle > 1) {
    pageActuelle--;
    filtrerEtTrier();
  }
});

btnSuivant.addEventListener("click", () => {
  const totalPages = Math.ceil(
    utilisateursFiltres.length / utilisateursParPage
  );
  if (pageActuelle < totalPages) {
    pageActuelle++;
    filtrerEtTrier();
  }
});

function filtrerEtTrier() {
  utilisateursFiltres = utilisateurs.filter((utilisateur) => {
    const nomOk = utilisateur.nom
      .toLowerCase()
      .includes(filtreTerme.toLowerCase());
    const emailOk = utilisateur.email
      .toLowerCase()
      .includes(filtreTerme.toLowerCase());
    return nomOk || emailOk;
  });

  if (filtreActifSeulement) {
    utilisateursFiltres = utilisateursFiltres.filter(
      (utilisateur) => utilisateur.actif
    );
  }

  utilisateursFiltres.sort((a, b) => {
    return filtreTri === "az"
      ? a.nom.localeCompare(b.nom)
      : b.nom.localeCompare(a.nom);
  });

  const debut = (pageActuelle - 1) * utilisateursParPage;
  const fin = debut + utilisateursParPage;
  const utilisateursPage = utilisateursFiltres.slice(debut, fin);

  afficherUtilisateurs(utilisateursPage);

  // Désactiver les boutons si nécessaire
  const totalPages = Math.ceil(
    utilisateursFiltres.length / utilisateursParPage
  );
  btnPrecedent.disabled = pageActuelle === 1;
  btnSuivant.disabled = pageActuelle === totalPages || totalPages === 0;
}

function afficherUtilisateurs(utilisateurs) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

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
    tbody.appendChild(ligne);
  });
}

// Afficher tous les utilisateurs au départ
filtrerEtTrier();
