const input = document.getElementById("new-task");
const ajouter = document.getElementById("ajouter");
const list = document.getElementById("list");

ajouter.addEventListener("click", () => {
  const newTask = input.value.trim();
  if (newTask === "") {
    alert("Veuillez ajouter une tache !");
  } else {
    creerTask(input);
  }

  input.value = "";
});

function creerTask(input) {
  const newTask = input.value.trim();

  const liEl = document.createElement("li");
  liEl.textContent = newTask;

  list.appendChild(liEl);
  supprimeTask(liEl);

  return newTask;
}

function supprimeTask(liEl) {
  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "🗑️";

  liEl.appendChild(btnSupprimer);

  btnSupprimer.addEventListener("click", () => {
    liEl.remove();
  });

  return btnSupprimer;
}
