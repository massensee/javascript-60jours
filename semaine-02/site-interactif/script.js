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

  const prenom = document.getElementById("prenom").value;
  alert(`Merci ${prenom} ! Votre message a bien été envoyé.`);
});
