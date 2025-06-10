const input = document.getElementById("new-task");
const ajouter = document.getElementById("ajouter");
const list = document.getElementById("list");

ajouter.addEventListener("click", () => {
  const newTask = input.value.trim();

  if (newTask === "") {
    list.textContent = "Veuillez saisir une tache !";
  } else {
    list.textContent = newTask;
  }
});
