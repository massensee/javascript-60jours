const btnAddTask = document.getElementById("ajouter");
const result = document.getElementById("liste-taches");
const task = document.getElementById("tache");
const filterTask = document.querySelectorAll("button[data-filtre]");

let taches = [];

function filtrerTache(filtre) {
  document.querySelectorAll("#liste-taches li").forEach((li) => {
    const estFaite = li.classList.contains("done");

    if (filtre === "toutes") {
      li.style.display = "list-item";
    } else if (filtre === "faites") {
      li.style.display = estFaite ? "list-item" : "none";
    } else if (filtre === "a-faire") {
      li.style.display = !estFaite ? "list-item" : "none";
    }
  });
}

filterTask.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filtre = btn.dataset.filtre;

    filterTask.forEach((btn) => {
      btn.classList.remove("active-filter");
    });
    btn.classList.add("active-filter");

    filtrerTache(filtre);
  });
});

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

  liEl.classList.add("fade-in");

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

    liEl.classList.add("fade-out");

    setTimeout(() => {
      liEl.remove();
      taches = taches.filter((t) => t !== taskObj);
      addLocalStorage();
    }, 300);
  });

  liEl.appendChild(deleteTask);
  result.appendChild(liEl);

  console.log(taches);
}

function addLocalStorage() {
  localStorage.setItem("taches", JSON.stringify(taches));
}
