const btnAddTask = document.getElementById("ajouter");
const result = document.getElementById("liste-taches");
const task = document.getElementById("tache");

let taches = [];

const savedTasks = JSON.parse(localStorage.getItem("taches"));

if (savedTasks) {
  savedTasks.forEach((task) => {
    addTask(task);
  });

  taches = savedTasks;
}

btnAddTask.addEventListener("click", () => {
  if (task.value === "") {
    alert("Veuillez entrer une tache !");
  } else {
    const nouvelleTache = {
      texte: task.value,
      faite: false,
    };
    addTask(nouvelleTache);
    taches.push(nouvelleTache);
    addLocalStorage();
    task.value = "";
  }
});

function addTask(taskObj) {
  const liEl = document.createElement("li");
  liEl.textContent = taskObj.texte;

  if (taskObj.faite) {
    liEl.classList.add("done");
  }

  liEl.addEventListener("click", () => {
    liEl.classList.toggle("done");
    taskObj.faite = !taskObj.faite;
    addLocalStorage();
  });

  const deleteTask = document.createElement("button");
  deleteTask.classList.add("btn-supprimer");
  deleteTask.textContent = "❌";

  deleteTask.addEventListener("click", (e) => {
    e.stopPropagation();
    liEl.remove();
    taches = taches.filter((t) => t !== taskObj);
    addLocalStorage();
  });
  liEl.appendChild(deleteTask);
  result.appendChild(liEl);

  console.log(taches);
}

function addLocalStorage() {
  localStorage.setItem("taches", JSON.stringify(taches));
}
