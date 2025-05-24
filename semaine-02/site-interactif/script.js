const btn = document.getElementById("changer-couleur");
const menuBurger = document.getElementById("menu-burger");
const nav = document.querySelector("nav");
const btnToggle = document.getElementById("toggle-apropos");
const textApropos = document.getElementById("texte-apropos");

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
