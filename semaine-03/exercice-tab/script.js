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
const colonne = document.createElement("th");

const users = document.createElement("tbody");

ligne.appendChild(colonne);
head.appendChild(ligne);
listes.appendChild(head);
listes.appendChild(users);

utilisateurs.forEach((utilisateur) => {
  const ligne = document.createElement("tr");

  const tdNom = document.createElement("td");
  tdNom.textContent = `Nom: ${utilisateur.nom}`;

  const tdEmail = document.createElement("td");
  tdEmail.textContent = `Email: ${utilisateur.email}`;

  const tdRole = document.createElement("td");
  tdRole.textContent = `Role: ${utilisateur.role}`;

  const tdActif = document.createElement("td");
  tdActif.textContent = `Actif: ${utilisateur.actif ? "✅" : "❌"}`;

  ligne.appendChild(tdNom);
  ligne.appendChild(tdEmail);
  ligne.appendChild(tdRole);
  ligne.appendChild(tdActif);

  users.appendChild(ligne);
});
