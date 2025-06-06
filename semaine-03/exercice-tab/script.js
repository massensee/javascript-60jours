const listes = document.getElementById("listeUtilisateurs");
const form = document.getElementById("formAjout");

listes.appendChild(creerEnteteTableau());
const users = document.createElement("tbody");
listes.appendChild(users);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const statut = document.getElementById("statut").value;
  const actif = document.getElementById("actif").checked;
  const messageErreur = document.querySelector(".message-erreur");

  if (nom === "" || email === "") {
    messageErreur.textContent =
      "Veuillez remplir tous les champs obligatoires.";
    return;
  }
  messageErreur.textContent = "";

  const nouvelleUtilisateur = {
    nom,
    email,
    statut,
    actif,
  };

  ajouterUtilisateurs(nouvelleUtilisateur);
  form.reset();
});

function creerCellule(texte) {
  const cellule = document.createElement("td");
  cellule.textContent = texte;
  return cellule;
}

function ajouterUtilisateurs(utilisateur) {
  const ligne = document.createElement("tr");

  ligne.appendChild(creerCellule(utilisateur.nom));
  ligne.appendChild(creerCellule(utilisateur.email));
  ligne.appendChild(
    creerCellule(
      utilisateur.statut === "admin" ? "Administrateur" : "Utilisateur"
    )
  );
  ligne.appendChild(creerCellule(utilisateur.actif ? "✅" : "❌"));

  const tdAction = document.createElement("td");

  ajouterBoutonsAction(ligne, tdAction);
  ligne.appendChild(tdAction);

  document.querySelector("tbody").appendChild(ligne);
}

const utilisateurs = [
  { nom: "Alice", email: "alice@mail.com", statut: "admin", actif: true },
  { nom: "Roger", email: "roger@mail.com", statut: "user", actif: false },
  { nom: "Steeve", email: "steeve@mail.com", statut: "user", actif: true },
  { nom: "Karim", email: "karim@mail.com", statut: "admin", actif: true },
  { nom: "Tanina", email: "tanina@mail.com", statut: "user", actif: false },
];

function creerEnteteTableau() {
  const head = document.createElement("thead");

  const ligne = document.createElement("tr");

  const titres = ["Nom", "Email", "Statut", "Actif", "Actions"];

  titres.forEach((titre) => {
    const colonne = document.createElement("th");
    colonne.textContent = titre;
    ligne.appendChild(colonne);
  });

  head.appendChild(ligne);
  return head;
}

function afficherUtilisateurs(liste) {
  liste.forEach(ajouterUtilisateurs);
}

afficherUtilisateurs(utilisateurs);

function ajouterBoutonsAction(ligne, tdAction) {
  tdAction.innerHTML = "";

  const boutonModifier = document.createElement("button");
  boutonModifier.classList.add("modifier-bouton");
  boutonModifier.innerHTML = `<ion-icon name="pencil-outline"></ion-icon><span class="texte-bouton">Modifier</span>`;

  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.classList.add("bouton-supprimer");
  boutonSupprimer.innerHTML = `<ion-icon name="trash-outline"></ion-icon><span class="texte-bouton">Supprimer</span>`;

  const container = document.createElement("div");
  container.classList.add("action-buttons");

  container.appendChild(boutonModifier);
  container.appendChild(boutonSupprimer);
  tdAction.appendChild(container);

  boutonModifier.addEventListener("click", () => {
    activerModeEdition(ligne, tdAction);
  });

  boutonSupprimer.addEventListener("click", () => {
    ligne.remove();
  });
}

function activerModeEdition(ligne, tdAction) {
  const cellules = ligne.querySelectorAll("td");
  const ancienNom = cellules[0].textContent;
  const ancienEmail = cellules[1].textContent;
  const ancienStatut = cellules[2].textContent;
  const ancienActif = cellules[3].textContent === "✅";

  const inputNom = document.createElement("input");
  inputNom.value = ancienNom;
  cellules[0].innerHTML = "";
  cellules[0].appendChild(inputNom);

  const inputEmail = document.createElement("input");
  inputEmail.value = ancienEmail;
  cellules[1].innerHTML = "";
  cellules[1].appendChild(inputEmail);

  const selectStatut = document.createElement("select");
  ["admin", "user"].forEach((role) => {
    const option = document.createElement("option");
    option.value = role;
    option.textContent = role === "admin" ? "Administrateur" : "Utilisateur";
    if (ancienStatut.toLowerCase().includes(role)) {
      option.selected = true;
    }
    selectStatut.appendChild(option);
  });
  cellules[2].innerHTML = "";
  cellules[2].appendChild(selectStatut);

  const checkActif = document.createElement("input");
  checkActif.type = "checkbox";
  checkActif.checked = ancienActif;
  cellules[3].innerHTML = "";
  cellules[3].appendChild(checkActif);

  tdAction.innerHTML = "";
  const boutonValider = document.createElement("button");
  boutonValider.textContent = "Valider";
  tdAction.appendChild(boutonValider);

  boutonValider.addEventListener("click", () => {
    const nouveauNom = inputNom.value;
    const nouvelEmail = inputEmail.value;
    const nouveauStatut = selectStatut.value;
    const nouvelActif = checkActif.checked;

    cellules[0].textContent = nouveauNom;
    cellules[1].textContent = nouvelEmail;
    cellules[2].textContent =
      nouveauStatut === "admin" ? "Administrateur" : "Utilisateur";
    cellules[3].textContent = nouvelActif ? "✅" : "❌";

    ajouterBoutonsAction(ligne, tdAction);
  });
}
