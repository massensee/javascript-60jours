const listes = document.getElementById("listeUtilisateurs");

const utilisateurs = [
  { nom: "Alice", email: "alice@mail.com", role: "admin", actif: true },
  { nom: "Roger", email: "roger@mail.com", role: "user", actif: false },
  { nom: "Steeve", email: "steeve@mail.com", role: "user", actif: true },
  { nom: "Karim", email: "karim@mail.com", role: "admin", actif: true },
  { nom: "Tanina", email: "tanina@mail.com", role: "user", actif: false },
];

const head = document.createElement("thead");
const ligne = document.createElement("tr");

const titres = ["Nom", "Email", "Rôle", "Actif"];

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

  const tdRole = document.createElement("td");
  tdRole.textContent = `${utilisateur.role}`;

  const tdActif = document.createElement("td");
  tdActif.textContent = `${utilisateur.actif ? "✅" : "❌"}`;

  ligne.appendChild(tdNom);
  ligne.appendChild(tdEmail);
  ligne.appendChild(tdRole);
  ligne.appendChild(tdActif);

  users.appendChild(ligne);
});
