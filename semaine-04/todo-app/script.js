const input = document.getElementById("new-task");
const ajouter = document.getElementById("ajouter");
const list = document.getElementById("list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filtreActuel = "tous";

const boutonsFiltres = document.querySelectorAll("[data-filtre]");
const toutEffacer = document.getElementById("tout-effacer");

toutEffacer.addEventListener("click", () => {
  if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
    tasks = [];
    localStorage.removeItem("tasks");
    afficherTasks();
  }
});

boutonsFiltres.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filtre = btn.dataset.filtre;
    filtreActuel = filtre;
    afficherTasks();
  });
});

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

  let tachesFiltrees = [];

  if (filtreActuel === "tous") {
    tachesFiltrees = tasks;
  } else if (filtreActuel === "actifs") {
    tachesFiltrees = tasks.filter((t) => !t.completed);
  } else if (filtreActuel === "termines") {
    tachesFiltrees = tasks.filter((t) => t.completed);
  }

  if (tachesFiltrees.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Aucune tâche à afficher.";
    list.appendChild(li);
    return;
  }

  tachesFiltrees.forEach((task) => {
    const liEl = document.createElement("li");
    liEl.innerText = task.texte;
    liEl.dataset.id = task.id;

    if (task.completed) {
      liEl.classList.add("completed");
    }

    const btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "🗑️";
    liEl.appendChild(btnSupprimer);

    btnSupprimer.addEventListener("click", (e) => {
      e.stopPropagation();
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
