const btn = document.getElementById("changer-couleur");
const menuBurger = document.getElementById("menu-burger");
const nav = document.querySelector("nav");
const btnToggle = document.getElementById("toggle-apropos");
const textApropos = document.getElementById("texte-apropos");
const form = document.querySelector("form");
const btnToggleFormulaire = document.getElementById("toggle-formulaire");
const formulaireSection = document.querySelector(".formulaire");

btnToggleFormulaire.addEventListener("click", () => {
  formulaireSection.classList.toggle("cache-form");
  const estCacher = formulaireSection.classList.contains("cache-form");
  btnToggleFormulaire.textContent = estCacher
    ? "Afficher le formulaire"
    : "Masquer le formulaire";
});

function toggleMenu() {
  menuBurger.addEventListener("click", () => {
    nav.classList.toggle("visible");
  });
}

toggleMenu();

function changerTheme() {
  btn.addEventListener("click", function () {
    document.body.classList.toggle("lightBlue");
    document.body.style.color = "black";
  });
}

changerTheme();

function toggleTexteApropos() {
  btnToggle.addEventListener("click", () => {
    textApropos.classList.toggle("cacher");

    const estCacher = textApropos.classList.contains("cacher");

    btnToggle.textContent = estCacher ? "Voir plus" : "Voir moins";
  });
}

toggleTexteApropos();

function afficherMessage(confirmMessage, message, couleur) {
  confirmMessage.textContent = message;
  confirmMessage.style.color = couleur;
  confirmMessage.classList.remove("invalid", "fade-in", "fade-out");

  void confirmMessage.offsetWidth;

  confirmMessage.textContent = message;
  confirmMessage.classList.add("fade-in");

  setTimeout(() => {
    confirmMessage.classList.remove("fade-in");
    confirmMessage.classList.add("fade-out");

    confirmMessage.addEventListener(
      "animationend",
      () => {
        confirmMessage.textContent = "";
        confirmMessage.classList.remove("fade-out");
      },
      { once: true }
    );
  }, 5000);
}

function emailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validerFormulaire(e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message").value.trim();
  const confirmMessage = document.getElementById("message-confirmation");
  const button = document.querySelector("button[type='submit']");

  button.disabled = true;

  // Toujours enlever la classe "invalid" pour afficher le message
  confirmMessage.classList.remove("invalid");

  setTimeout(() => {
    button.disabled = false;
  }, 2000);

  if (
    !prenom ||
    !nom ||
    !emailValid(email) ||
    !password ||
    message.length < 10
  ) {
    afficherMessage(
      confirmMessage,
      "Veuillez remplir tous les champs correctement (min. 10 caractères pour le message).",
      "red"
    );
    return;
  }

  afficherMessage(
    confirmMessage,
    `Merci ${prenom}, votre message a bien été envoyé.`,
    "green"
  );

  form.reset();
}

form.addEventListener("submit", validerFormulaire);
