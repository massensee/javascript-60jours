const input = document.getElementById("new-task");
const ajouter = document.getElementById("ajouter");
const list = document.getElementById("list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

ajouter.addEventListener("click", () => {
  const texte = input.value.trim();
  if (texte === "") {
    alert("Veuillez ajouter une tache !");
    return;
  }

  const nouvelleTache = {
    id: Date.now(),
    texte,
    completed: false,
  };

  tasks.push(nouvelleTache);
  saveTasks();
  afficherTasks();

  input.value = "";
});

function afficherTasks() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const liEl = document.createElement("li");
    liEl.innerText = "";
    liEl.append(task.texte);
    liEl.dataset.id = task.id;

    if (task.completed) {
      liEl.classList.add("completed");
    }

    const btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "🗑️";
    liEl.appendChild(btnSupprimer);

    btnSupprimer.addEventListener("click", () => {
      const id = Number(liEl.dataset.id);
      tasks = tasks.filter((t) => t.id !== id);
      saveTasks();
      afficherTasks();
    });

    liEl.addEventListener("click", (e) => {
      if (e.target !== btnSupprimer) {
        task.completed = !task.completed;
        saveTasks();
        afficherTasks();
      }
    });

    list.appendChild(liEl);
  });
}

afficherTasks();
