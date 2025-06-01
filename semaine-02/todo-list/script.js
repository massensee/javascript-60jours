const btnAddTask = document.getElementById("ajouter");
const result = document.getElementById("liste-taches");
const task = document.getElementById("tache");
const filterTask = document.querySelectorAll("button[data-filtre]");

let taches = [];

function filtrerTache(filtre) {
  const liTaches = document.querySelectorAll("#liste-taches li");
  let compteurVisible = 0;

  liTaches.forEach((li) => {
    const estFaite = li.classList.contains("done");

    if (filtre === "toutes") {
      li.style.display = "list-item";
      compteurVisible++;
    } else if (filtre === "faites") {
      if (estFaite) {
        li.style.display = "list-item";
        compteurVisible++;
      } else {
        li.style.display = "none";
      }
    } else if (filtre === "a-faire") {
      if (!estFaite) {
        li.style.display = "list-item";
        compteurVisible++;
      } else {
        li.style.display = "none";
      }
    }
  });

  const messageVide = document.getElementById("message-vide");
  messageVide.style.display = compteurVisible === 0 ? "block" : "none";
}

filterTask.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filtre = btn.dataset.filtre;

    localStorage.setItem("filtreActif", filtre);

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

const filtreSauvegarde = localStorage.getItem("filtreActif") || "toutes";
filtrerTache(filtreSauvegarde);

filterTask.forEach((btn) => {
  btn.classList.remove("active-filter");
  if (btn.dataset.filtre === filtreSauvegarde) {
    btn.classList.add("active-filter");
  }
});

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

  const btnValider = document.createElement("button");
  btnValider.classList.add("btn-valider");
  btnValider.textContent = "✅";

  btnValider.addEventListener("click", () => {
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
    }, 400);
  });

  liEl.appendChild(btnValider);
  liEl.appendChild(deleteTask);
  result.appendChild(liEl);

  console.log(taches);
}

function addLocalStorage() {
  localStorage.setItem("taches", JSON.stringify(taches));
}
