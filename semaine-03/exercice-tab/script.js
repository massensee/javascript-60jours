const listes = document.getElementById("listeUtilisateurs");

const utilisateurs = [
  { nom: "Alice", email: "alice@mail.com", statut: "admin", actif: true },
  { nom: "Roger", email: "roger@mail.com", statut: "user", actif: false },
  { nom: "Steeve", email: "steeve@mail.com", statut: "user", actif: true },
  { nom: "Karim", email: "karim@mail.com", statut: "admin", actif: true },
  { nom: "Tanina", email: "tanina@mail.com", statut: "user", actif: false },
];

const head = document.createElement("thead");
const ligne = document.createElement("tr");

const titres = ["Nom", "Email", "Statut", "Actif"];

titres.forEach((titre) => {
  const colonne = document.createElement("th");
  colonne.textContent = titre;
  ligne.appendChild(colonne);
});

head.appendChild(ligne);
listes.appendChild(head);

const users = document.createElement("tbody");
listes.appendChild(users);

utilisateurs.forEach((utilisateur) => {
  const ligne = document.createElement("tr");

  const tdNom = document.createElement("td");
  tdNom.textContent = `${utilisateur.nom}`;

  const tdEmail = document.createElement("td");
  tdEmail.textContent = `${utilisateur.email}`;

  const tdStatut = document.createElement("td");
  tdStatut.textContent = `${
    utilisateur.statut === "admin" ? "Administrateur" : "Utilisateur"
  }`;

  const tdActif = document.createElement("td");
  tdActif.textContent = `${utilisateur.actif ? "✅" : "❌"}`;

  ligne.appendChild(tdNom);
  ligne.appendChild(tdEmail);
  ligne.appendChild(tdStatut);
  ligne.appendChild(tdActif);

  users.appendChild(ligne);
});
