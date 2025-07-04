const API_URL = "http://localhost:3000/todos";
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Charger les tâches
function chargerTaches() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((todos) => {
      list.innerHTML = "";
      todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.texte;
        if (todo.fait) li.classList.add("done");
        list.appendChild(li);
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "🗑️";
        btnDelete.addEventListener("click", () => {
          supprimerTache(todo.id);
        });
        li.appendChild(btnDelete);
      });
    });
}

// Ajouter une tâche
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texte = input.value.trim();
  if (!texte) return;

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texte }),
  }).then(() => {
    input.value = "";
    chargerTaches();
  });
});

chargerTaches();

function supprimerTache(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Erreur lors de la suppression");
      return res.json();
    })
    .then(() => {
      chargerTaches(); // recharge la liste après suppression
    })
    .catch((err) => {
      console.error("Erreur :", err);
    });
}
