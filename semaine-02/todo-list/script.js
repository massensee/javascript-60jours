const btnAddTask = document.getElementById("ajouter");
const result = document.getElementById("liste-taches");
const task = document.getElementById("tache");

btnAddTask.addEventListener("click", () => {
  if (task.value === "") {
    alert("Veuillez entrer une tache !");
  } else {
    addTask(task.value);
    task.value = "";
  }
});

function addTask(text) {
  const liEl = document.createElement("li");
  liEl.textContent = text;

  const deleteTask = document.createElement("button");
  deleteTask.classList.add("btn-supprimer");
  deleteTask.textContent = "❌";

  deleteTask.addEventListener("click", (e) => {
    e.stopPropagation();
    liEl.remove();
  });
  result.appendChild(liEl);
  liEl.appendChild(deleteTask);
}
