const btn = document.getElementById("changer-couleur");
const menuBurger = document.getElementById("menu-burger");
const nav = document.querySelector("nav");
const btnToggle = document.getElementById("toggle-apropos");
const textApropos = document.getElementById("texte-apropos");
const form = document.querySelector("form");

menuBurger.addEventListener("click", () => {
  nav.classList.toggle("visible");
});

btn.addEventListener("click", function () {
  document.body.classList.toggle("lightBlue");
});

btnToggle.addEventListener("click", () => {
  textApropos.classList.toggle("cacher");

  const estCacher = textApropos.classList.contains("cacher");

  btnToggle.textContent = estCacher ? "Voir plus" : "Voir moins";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message").value.trim();
  const confirmMessage = document.getElementById("message-confirmation");

  // Toujours enlever la classe "invalid" pour afficher le message
  confirmMessage.classList.remove("invalid");

  if (
    !prenom ||
    !nom ||
    !emailValid(email) ||
    !password ||
    message.length < 10
  ) {
    confirmMessage.textContent =
      "Veuillez remplir tous les champs correctement (min. 10 caractères pour le message).";
    confirmMessage.style.color = "red";
    return;
  }

  confirmMessage.textContent = `Merci ${prenom}, votre message a bien été envoyé.`;
  confirmMessage.style.color = "green";

  form.reset();
});

function emailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
