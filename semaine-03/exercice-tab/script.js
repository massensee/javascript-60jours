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

function creeCellule(texte) {
  const cellule = document.createElement("td");
  cellule.textContent = texte;
  return cellule;
}

function ajouterUtilisateurs(utilisateur) {
  const ligne = document.createElement("tr");

  ligne.appendChild(creeCellule(utilisateur.nom));
  ligne.appendChild(creeCellule(utilisateur.email));
  ligne.appendChild(
    creeCellule(
      utilisateur.statut === "admin" ? "Administrateur" : "Utilisateur"
    )
  );
  ligne.appendChild(creeCellule(utilisateur.actif ? "✅" : "❌"));

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

  const titres = ["Nom", "Email", "Statut", "Actif"];

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
