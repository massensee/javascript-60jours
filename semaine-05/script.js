const form = document.getElementById("formulaire-transaction");
const result = document.getElementById("liste-transactions");

let transactions = [];

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
    description: descriptionVal.value,
    montant: Number(montantVal.value),
    type: typeVal.value,
  };

  transactions.push(nouvelleValeur);

  localStorage.setItem("transactions", JSON.stringify(transactions));

  afficherTransaction(nouvelleValeur);
  console.log(nouvelleValeur);
});

function afficherTransaction(transaction) {
  const liEl = document.createElement("li");
  const signe = transaction.type === "revenu" ? "+" : "-";

  liEl.textContent = `${transaction.description} : ${signe}${transaction.montant} €`;
  if (transaction.type === "revenu") {
    liEl.classList.add("revenu");
  } else {
    liEl.classList.add("depense");
  }

  result.appendChild(liEl);
}

function mettreAJourSolde() {
  const total = transactions.reduce((acc, transaction) => {
    return transaction.type === "revenu"
      ? acc + transaction.montant
      : acc - transaction.montant;
  }, 0);

  document.getElementById("solde").textContent = `${total} €`;
}

mettreAJourSolde();
