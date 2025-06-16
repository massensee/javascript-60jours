const form = document.getElementById("formulaire-transaction");
const result = document.getElementById("liste-transactions");
const reset = document.getElementById("reset");

let transactions = [];

reset.addEventListener("click", () => {
  transactions = [];
  localStorage.removeItem("transactions");
  result.innerHTML = "";
  mettreAJourSolde();
});

const savedTransactions =
  JSON.parse(localStorage.getItem("transactions")) || [];

savedTransactions.forEach((transaction) => {
  transactions.push(transaction);
  afficherTransaction(transaction);
});

mettreAJourSolde();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const descriptionVal = document.getElementById("description");
  const montantVal = document.getElementById("montant");
  const typeVal = document.getElementById("type");

  if (!descriptionVal.value || !montantVal.value || !typeVal.value) {
    alert("Veuillez remplir les champs");
    return;
  }

  const nouvelleValeur = {
    id: Date.now(),
    description: descriptionVal.value,
    montant: Number(montantVal.value),
    type: typeVal.value,
    date: new Date().toLocaleDateString("fr-FR"),
  };

  transactions.push(nouvelleValeur);

  localStorage.setItem("transactions", JSON.stringify(transactions));

  afficherTransaction(nouvelleValeur);
  mettreAJourSolde();
  form.reset();
  console.log(nouvelleValeur);
});

function afficherTransaction(transaction) {
  const liEl = document.createElement("li");
  const signe = transaction.type === "revenu" ? "+" : "-";

  liEl.textContent = `${transaction.description} : ${signe}${transaction.montant} € - ${transaction.date}`;
  liEl.classList.add(transaction.type === "revenu" ? "revenu" : "depense");

  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.classList.add("supprimer-btn");
  btn.addEventListener("click", () => supprimerTransaction(transaction.id));

  liEl.appendChild(btn);
  result.appendChild(liEl);
}

function supprimerTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  result.innerHTML = "";
  transactions.forEach(afficherTransaction);
  mettreAJourSolde();
}

function mettreAJourSolde() {
  let revenus = 0;
  let depenses = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "revenu") {
      revenus += transaction.montant;
    } else {
      depenses += transaction.montant;
    }
  });

  const solde = revenus - depenses;

  document.getElementById("total-revenus").textContent = `+ ${revenus} €`;
  document.getElementById("total-depenses").textContent = `- ${depenses} €`;
  document.getElementById("solde").textContent = `${solde} €`;
}

mettreAJourSolde();
