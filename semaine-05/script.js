const form = document.getElementById("formulaire-transaction");
const result = document.getElementById("liste-transactions");

let transactions = [];

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
