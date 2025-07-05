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
        li.classList.add("fade-in");
        li.classList.add("todo-item");
        if (todo.fait) li.classList.add("done");

        const spanTexte = document.createElement("span");
        spanTexte.textContent = todo.texte;
        li.appendChild(spanTexte);

        // ✅ Bouton pour cocher/décocher
        li.addEventListener("click", () => {
          fetch(`${API_URL}/${todo.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fait: !todo.fait }),
          }).then(chargerTaches);
        });

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "🗑️";
        btnDelete.classList.add("todo-btn", "btn-delete");
        btnDelete.addEventListener("click", (e) => {
          e.stopPropagation();
          li.classList.add("fade-out");

          li.addEventListener(
            "animationend",
            () => {
              li.remove();
            },
            { once: true }
          );

          supprimerTache(todo.id).catch((err) => {
            console.error("Erreur :", err);
          });
        });
        li.appendChild(btnDelete);

        const btnEdit = document.createElement("button");
        btnEdit.textContent = "✏️";
        btnEdit.classList.add("todo-btn", "btn-edit");
        btnEdit.addEventListener("click", (e) => {
          e.stopPropagation();
          const inputEdit = document.createElement("input");
          inputEdit.type = "text";
          inputEdit.value = todo.texte;

          li.innerHTML = ""; // vide l'élément
          li.appendChild(inputEdit);
          inputEdit.focus();

          inputEdit.addEventListener("blur", () => {
            const nouveauTexte = inputEdit.value.trim();
            if (nouveauTexte && nouveauTexte !== todo.texte) {
              fetch(`${API_URL}/${todo.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ texte: nouveauTexte }),
              }).then(chargerTaches);
            } else {
              chargerTaches();
            }
          });
        });

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");
        btnGroup.appendChild(btnEdit);
        btnGroup.appendChild(btnDelete);

        li.appendChild(btnEdit);
        li.appendChild(btnGroup);
        list.appendChild(li);
      });
    });
}

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
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) throw new Error("Erreur lors de la suppression");
    return res.json();
  });
}
